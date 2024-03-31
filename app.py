import os

import matplotlib.pyplot as plt
import pandas as pd
import streamlit as st
from dotenv import load_dotenv
from wordcloud import WordCloud, STOPWORDS

from AiEngine import AiEngine
from Candidate import Candidate
from Coach import Coach
from Job import Job

# Load environment variables
load_dotenv()

ai_api_key = os.getenv('OPENAI_API_KEY')
candidate_name = os.getenv('CANDIDATE_NAME')

# Create instance of AI engine
if 'ai' not in st.session_state:
    ai = AiEngine(ai_api_key, is_debug=False)
    st.session_state['ai'] = ai
ai = st.session_state['ai']

# Create instance of candidate
if 'candidate' not in st.session_state:
    candidate = Candidate(candidate_name)
    st.session_state['candidate'] = candidate
candidate = st.session_state['candidate']

# Create instance of job description
if 'job' not in st.session_state:
    job = Job()
    st.session_state['job'] = job
job = st.session_state['job']

# Create instance of resume helper
coach = Coach(candidate, job, ai)

# Initialize streamlit
st.set_page_config(page_title='AI Job Search Coach', page_icon='📝', layout='wide')
st.title('📝 AI Job Search Coach')

# Sidebar
with st.sidebar:
    st.subheader('Candidate Summary')
    st.write('Candidate Name: ' + candidate_name)
    candidate.resume_source = st.selectbox('Select Resume Source', options=candidate.resume_sources, index=0)
    st.write('Resume (word count):', len(candidate.resume_text.split()))
    st.write('Writing Style (word count): ', len(candidate.sample_writing_style.split()))

    st.divider()

    st.subheader('Job Description')
    job_description = st.text_area('Pasted Job Description', height=200)
    job.job_title = st.text_input('Job Title', '[Job Title]')
    job.company = st.text_input('Company Name', '[Company Name]')
    job.hiring_manager = st.text_input('Hiring Manager', '[Hiring Manager]')
    job.source = st.text_input('Source of Job Description', '[Source]')

    st.divider()

    st.subheader('LLM Model')
    ai.selected_model = st.selectbox('Select GPT Model', options=ai.models, index=0)
    ai.temperature = st.number_input('AI Temperature', value=ai.temperature, min_value=0.0, max_value=2.0)
    if st.button('Clear Cache'):
        ai.clear_cache()
        print('cache cleared')

# Let coach analyze the job description
if job_description != job.job_description:
    with st.spinner('Analyzing Job Description...'):
        job.job_description = job_description
        if job.is_valid() and len(job.top_required_skills) == 0:
            coach.analyze_jd_and_extract_top_skills()
            coach.analyze_strengths()
            coach.analyze_weaknesses()

if job.is_valid():
    # Main page
    tab0, tab1, tab2, tab3 = st.tabs(['Analysis', 'Ask The Coach', 'Cover Letter', 'Word Cloud'])

    with tab0:
        if job.is_valid():
            st.subheader('Key Job Skills')

            df = pd.DataFrame(job.top_required_skills.items(), columns=['Skill', 'Reason'])
            st.markdown(df.to_html(index=False), unsafe_allow_html=True)

            st.divider()

            st.subheader('Strengths')
            st.write(job.strengths)

            st.divider()

            st.subheader('Weaknesses')
            st.write(job.weaknesses)
        else:
            st.write('Please fill out the job description first.')

    with tab1:
        # Tool to help generate summaries about the candidate's work experience
        st.markdown("""
            ## Experience Summarization
    
            Let AI help answer questions about your work experience and employment opportunities. Here are a few example questions:
    
            ### General
            - What are the top 10 industries where my work experience is relevant?
            - What are the top 5 most likely roles that match my work experience?
            - Can you create a list of all my previous roles?
            - Can you provide 3-4 sentences, summarizing the Asset IQ project?
            - Can you provide 3-4 sentences, that summarizes the candidate's role in the Asset IQ project?
            - Can you provide a single paragraph highlighting my experience? 

            ### Role Specific    
            - Given the top_required_skills and candidate_strengths, can you provide 5 short bullet points that answer why I am a good fit for this role?
            - Create a list of  the top 5 things i should highlight from my work experience?
            - Given the job description and my resume, generate a fine tuned resume specifically tailored to this role.
        """
                    )
        with st.form('q_and_a_form'):
            prompt = st.text_area('Based on your resume, what would you like to summarize?', height=200)
            is_summary_in_my_writing_style = st.checkbox('Use my writing style', value=True)

            summarize_submitted = st.form_submit_button('Generate Summary')

            # Use the API to generate a cover letter
            if summarize_submitted:
                summary = coach.answer_question(
                    prompt
                    , is_summary_in_my_writing_style
                )

                st.write(summary)

    with tab2:
        # Tool to help generate cover letter drafts
        st.header('Cover Letter Generation')
        with st.form('cover_letter_form'):
            additional_guidance = st.text_area('Additional Guidance', value='', height=200)
            is_cover_letter_in_my_writing_style = st.checkbox('Use my writing style', value=True)

            create_cover_letter = st.form_submit_button('Create New Cover Letter')
            refine_cover_letter = st.form_submit_button('Refine Cover Letter')

            # Use OpenAI API to create cover letter
            if create_cover_letter:
                coach.create_new_cover_letter(
                    is_cover_letter_in_my_writing_style,
                    additional_guidance
                )
            if refine_cover_letter:
                coach.refine_cover_letter(
                    is_cover_letter_in_my_writing_style,
                    additional_guidance
                )

        st.write(job.cover_letter)

    with tab3:
        # Tool to help generate cover letter drafts
        st.header('Word Cloud Analysis')

        stopwords = set(['TomoLink', 'Cancer Treatment', 'Device Cancer', 'HiArt system', 'url', 'treatment', 'company TomoTherapy\'', 'enhancing', 'filter web\'', 'filter web', 'enabling', 'category Full', 'Development\' company', 'pdf', 'company TomoTherapy\'', 'used', 'ensuring', 'twin', 'daily', 'tags', 'based', 'remote', 'bi', 'machine', 'collection', 'model', 'name\'', 'icon\'', 'field', 'within', 'strong', 'Cravens', 'items\'', 'memberowl', 'jpeg\'', 'TQA', 'adaptivo', 'bids', 'images', 'info\'', 'image', 'assets', 'testimonials', 'TomoTherapy', 'icon', 'GenesisCare', 'li', 'name', 'upcenter', 'jpg\'', 'br', 'portfolio', 'MVCT', 'paragraphs', 'title', 'short_name', 'Bob', 'jpg', 'https', 'png', 'png\'', 'text', 'bg', 'img'] + list(STOPWORDS))

        # Show word cloud for the resume
        num_words = 30
        resume_word_cloud = WordCloud(stopwords=stopwords, max_words=num_words).generate(candidate.resume_text)

        # print(resume_word_cloud.words_)
        fig, ax = plt.subplots(figsize=(10, 10))
        ax.imshow(resume_word_cloud, interpolation='bilinear')
        plt.axis("off")
        st.write('Resume Text Cloud')
        st.pyplot(fig)

        # Show the word cloud for the job description
        if job.is_valid():
            job_description_wordcloud = WordCloud(stopwords=stopwords, max_words=num_words).generate(job.job_description)

            fig, ax = plt.subplots(figsize=(10, 10))
            ax.imshow(job_description_wordcloud, interpolation='bilinear')
            plt.axis("off")
            st.write('Job Description Cloud')
            st.pyplot(fig)
else:
    st.write('Please fill out the job description first.')
