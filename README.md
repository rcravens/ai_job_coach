# AI Cover Letter Helper

This is a simple generative AI example that takes the following inputs:

- Resume (resume.pdf): Resume of the candidate
- Sample Writing Style (sample_writing_stype.txt): Some samples of writing that the candidate has created. These are used to replicate the voice, tone, style, and structure of the candidate in the generated cover letter
- Job Description / Info: From a `streamlit` user interface

The code uses `OpenAI` API (`gpt-3.5-turbo` model) to generate the cover letter.

The prompt has been engineered to create a cover letter using the input data and generate a "human-like" response.

I used https://www.zerogpt.com/ to determine the probability that AI wrote the resulting cover letter:

- Before Optimizing The Prompt - Average score around `90%`
- After Optimizing the Prompt - Average score around `28%`

If you were going to use this generator, you should treat the generated text as an "initial draft".

## Usage

1. Copy `.env_example` to `.env` and add the OpenAI API key and the candidate name/
2. Replace `resume.pdf` with the resume from the actual candidate.
3. Replace `sample_writing_stype.txt` with samples from the actual candidate.
4. Run `pip install -r requirements.txt`
5. Run `streamlit run app.py`