import os

import streamlit as st
from dotenv import load_dotenv

from AiEngine import AiEngine
from Candidate import Candidate
from Coach import Coach

# Load environment variables
load_dotenv()

ai_api_key = os.getenv('OPENAI_API_KEY')
candidate_name = os.getenv('CANDIDATE_NAME')

# Create instance of AI engine
ai = AiEngine(ai_api_key)

# Create instance of candidate
candidate = Candidate(candidate_name)

# Create instance of resume helper
coach = Coach(candidate, ai)

# Initialize streamlit
st.set_page_config(page_title='AI Job Search Coach', page_icon='📝', layout='wide')
st.title('📝 AI Job Search Coach')

# Sidebar
with st.sidebar:
    st.subheader('Candidate Summary')
    st.write('Candidate Name: ' + candidate_name)
    st.write('Resume Source: ' + candidate.resume_source)
    candidate.resume_source = st.selectbox('Select Resume Source', options=candidate.resume_sources, index=0)
    if 'resume_source' not in st.session_state:
        st.session_state['resume_source'] = candidate.resume_source
    st.write('Resume (word count):', len(candidate.resume_text.split()))
    st.write('Writing Style (word count): ', len(candidate.sample_writing_style.split()))

    st.divider()

    st.subheader('LLM Model')
    ai.selected_model = st.selectbox('Select GPT Model', options=ai.models, index=0)
    ai.temperature = st.number_input('AI Temperature', value=ai.temperature, min_value=0.0, max_value=2.0)

# Main page
tab1, tab2 = st.tabs(['❓Q&A', '📄 Cover Letter'])

with tab1:
    # Tool to help generate summaries about the candidate's work experience
    st.markdown("""
        ## Experience Summarization

        Let AI help answer questions about your work experience and employment opportunities. Here are a few example questions:

        - Create a top 10 list of industries where my work experience is relevant
        - Create a list of  the top 5 things i should highlight from my work experience
        - What are the top 5 most likely roles that i am qualified for
        - Create a list of all my previous roles
        - In 3-4 sentences, summarize the Asset IQ project
        - In 3-4 sentences, summarize the candidate's role in the Asset IQ project
        - Provide a single paragraph highlighting my experience 
    """
                )
    with st.form('summarize'):
        prompt = st.text_area('Based on your resume, what would you like to summarize?', height=200)
        is_summary_in_my_writing_style = st.checkbox('Use my writing style', value=True)

        summarize_submitted = st.form_submit_button('Generate Summary')

        # Use the API to generate a cover letter
        if summarize_submitted:
            summary = coach.summarize(prompt, is_summary_in_my_writing_style)

            st.write(summary)

with tab2:
    # Tool to help generate cover letter drafts
    st.header('Cover Letter Generation')
    with st.form('input_form'):
        job_description = st.text_area('Pasted Job Description', height=200)
        job_title = st.text_input('Job Title', '[Job Title]')
        company = st.text_input('Company Name', '[Company Name]')
        manager = st.text_input('Hiring Manager', '[Hiring Manager]')
        source = st.text_input('Source of Job Description', '[Source]')
        additional_guidance = st.text_input('Additional Guidance', value='')
        is_cover_letter_in_my_writing_style = st.checkbox('Use my writing style', value=True)

        submitted = st.form_submit_button('Create Cover Letter')

        # Use OpenAI API to create cover letter
        if submitted:
            cover_letter = coach.cover_letter(
                job_description,
                job_title,
                company,
                manager,
                source,
                is_cover_letter_in_my_writing_style,
                additional_guidance
            )

            st.write(cover_letter)
