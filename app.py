import os

import openai as ai
import streamlit as st
from PyPDF2 import PdfReader
from dotenv import load_dotenv

load_dotenv()

ai.api_key = os.getenv('OPENAI_API_KEY')

st.set_page_config(page_title='Cover Letter Helper', page_icon='📝', layout='wide')
st.title('📝 Cover Letter Helper')

# Read candidate's resume from PDF
candidate_name = 'Bob Cravens'
resume_text = ''
if os.path.exists('./resume.pdf'):
    with open('./resume.pdf', 'rb') as pdf_file:
        pdf_reader = PdfReader(pdf_file)
        for page in pdf_reader.pages:
            resume_text += page.extract_text()

# Read candidate's sample writing style
sample_writing_style = ''
if os.path.exists('./sample_writing_style.txt'):
    with open('./sample_writing_style.txt', 'r') as sample_file:
        sample_writing_style = sample_file.readlines()
        sample_writing_style = ''.join(sample_writing_style)

# Collect information about the job
with st.form('input_form'):
    job_description = st.text_area('Pasted Job Description', height=200)
    job_title = st.text_input('Job Title', '[Job Title]')
    company = st.text_input('Company Name', '[Company Name]')
    manager = st.text_input('Hiring Manager', '[Hiring Manager]')
    source = st.text_input('Source of Job Description', '[Source]')
    temperature = st.number_input('AI Temperature', value=0.9)

    submitted = st.form_submit_button('Create Cover Letter')

# Use OpenAI API to create cover letter
if submitted:
    response = ai.chat.completions.create(
        model='gpt-3.5-turbo',
        temperature=temperature,
        messages=[
            {'role': 'user', 'content': f'Generate a cover letter based on the following candidate resume and job description.'},
            {'role': 'user', 'content': f'The candidate\'s name is: {candidate_name}'},
            {'role': 'user', 'content': f'The candidate\'s resume is: {resume_text}'},
            {'role': 'user', 'content': f'The job description is: {job_description}'},
            {'role': 'user', 'content': f'The job title is: {job_title}'},
            {'role': 'user', 'content': f'The hiring company is: {company}'},
            {'role': 'user', 'content': f'The hiring manager is: {manager}'},
            {'role': 'user', 'content': f'Source of job description is: {source}'},
            {'role': 'user', 'content': f'The candidate\'s sample writing style is: {sample_writing_style}'},
            {'role': 'user', 'content': f'The resulting cover letter should use the voice, tone, style, and structure of the candidate\'s writing style'},
            {'role': 'user', 'content': f'The resulting cover letter should include at least 3 paragraphs'},
            {'role': 'user', 'content': f'The first paragraph should focus on relaying interest in the posted job description.'},
            {'role': 'user', 'content': f'The middle paragraphs should focus on specific examples of why the candidate is a great fit.'},
            {'role': 'user', 'content': f'The last paragraph should restate interest, summarize what the candidate has to offer, and express some forward looking statement.'},
            {'role': 'user', 'content': f'The cover letter should be written like a real person created the content'},
        ]
    )

    cover_letter = response.choices[0].message.content
    st.write(cover_letter)
