from AiEngine import AiEngine
from Candidate import Candidate


class ResumeHelper:
    def __init__(self, candidate: Candidate, ai: AiEngine):
        self.candidate = candidate
        self.ai = ai

    def summarize(self, prompt: str, is_summary_in_my_writing_style: bool):
        messages = [
            {'role': 'system', 'content': f'You are a job search coach and you provide professional guidance to candidates based on the candidate\'s resume text and a prompt.'},
            {'role': 'system', 'content': f'All generated text should be written as if the candidate was writing it themself.'},
            {'role': 'system', 'content': f'The are helping a candidate summarize their work experience by answering questions about their experience'},
            {'role': 'user', 'content': f'The candidate\'s resume text: {self.candidate.resume_text}'},
            {'role': 'user', 'content': f'{prompt}'},
        ]
        if is_summary_in_my_writing_style:
            messages.append({'role': 'user', 'content': f'The candidate\'s writing style is: {self.candidate.sample_writing_style}'})
            messages.append({'role': 'user', 'content': f'The resulting summary should use the voice, tone, style, and structure of the candidate\'s writing style'})
            messages.append({'role': 'user', 'content': f'The resulting summary should only use information from the candidate\'s resume and not directly use content from the candidate\'s writing style.'})

        response = self.ai.get_prompt_response(messages)

        return response

    def cover_letter(self,
                     job_description: str,
                     job_title: str,
                     company: str,
                     manager: str,
                     source: str,
                     is_cover_letter_in_my_writing_style: bool,
                     additional_guidance: str = None
                     ):
        messages = [
            {'role': 'system', 'content': f'You are a job search coach and you provide professional guidance to candidates based on the candidate\'s resume text and a prompt.'},
            {'role': 'system', 'content': f'All generated text should be written as if the candidate was writing it themselves.'},
            {'role': 'system', 'content': f'The generated text should be written as if a human was writing it themselves.'},
            {'role': 'system', 'content': f'You are helping a candidate generate a cover letter based on the following candidate resume and a job description.'},
            {'role': 'user', 'content': f'Generate a cover letter based on the following candidate\'s resume and job description.'},
            {'role': 'user', 'content': f'The candidate\'s name is: {self.candidate.candidate_name}'},
            {'role': 'user', 'content': f'The candidate\'s resume is: {self.candidate.resume_text}'},
            {'role': 'user', 'content': f'The job description is: {job_description}'},
            {'role': 'user', 'content': f'The job title is: {job_title}'},
            {'role': 'user', 'content': f'The hiring company is: {company}'},
            {'role': 'user', 'content': f'The hiring manager is: {manager}'},
            {'role': 'user', 'content': f'Source of job description is: {source}'},
            {'role': 'user', 'content': f'The resulting cover letter should include at least 3 paragraphs'},
            {'role': 'user', 'content': f'The first paragraph should focus on relaying interest in the posted job description.'},
            {'role': 'user', 'content': f'The middle paragraphs should focus on specific examples of why the candidate is a great fit.'},
            {'role': 'user', 'content': f'The last paragraph should restate interest, summarize what the candidate has to offer, and express some forward looking statement.'},
            {'role': 'user', 'content': f'The cover letter should be written like a real person created the content'},
        ]
        if is_cover_letter_in_my_writing_style:
            messages.append({'role': 'user', 'content': f'The candidate\'s writing style is: {self.candidate.sample_writing_style}'})
            messages.append({'role': 'user', 'content': f'The cover letter should use the voice, tone, style, and structure of the candidate\'s writing style'})
            messages.append({'role': 'user', 'content': f'The resulting cover letter should only use information from the candidate\'s resume and not directly use content from the candidate\'s writing style.'})

        if additional_guidance is not None and len(additional_guidance) > 0:
            messages.append({'role': 'user', 'content': f'In addition to the previous history, here is some additional guidance: {additional_guidance}'})

        cover_letter = self.ai.get_prompt_response(messages)

        return cover_letter
