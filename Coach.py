from AiEngine import AiEngine
from Candidate import Candidate
from CoachPrompt import CoachPrompt


class Coach:
    def __init__(self, candidate: Candidate, ai: AiEngine):
        self.candidate = candidate
        self.ai = ai

    def summarize(self, user_prompt: str, is_summary_in_my_writing_style: bool):
        # Build the prompt
        prompt = CoachPrompt()
        prompt.add_system_message(f'You are helping a candidate summarize their work experience by answering questions about their experience')
        if is_summary_in_my_writing_style:
            prompt.add_writing_stype(self.candidate)
        prompt.add_resume(self.candidate)
        prompt.add_user_message(f'{user_prompt}')

        # Get the prompt response
        response = self.ai.get_prompt_response(prompt.messages)

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

        # Build the prompt
        prompt = CoachPrompt()
        prompt.add_system_message(f'You are helping a candidate generate a cover letter based on the following candidate resume and a job description.')
        prompt.add_user_message(f'Generate a cover letter based on the following candidate\'s resume and job description.')
        prompt.add_resume(self.candidate)
        prompt.add_user_message(f'The job description is: {job_description}')
        prompt.add_user_message(f'The job title is: {job_title}')
        prompt.add_user_message(f'The hiring company is: {company}')
        prompt.add_user_message(f'The hiring manager is: {manager}')
        prompt.add_user_message(f'Source of job description is: {source}')
        prompt.add_user_message(f'The resulting cover letter should include at least 3 paragraphs')
        prompt.add_user_message(f'The first paragraph should focus on relaying interest in the posted job description.')
        prompt.add_user_message(f'The middle paragraphs should focus on specific examples of why the candidate is a great fit.')
        prompt.add_user_message(f'The last paragraph should restate interest, summarize what the candidate has to offer, and express some forward looking statement.')
        prompt.add_user_message(f'The cover letter should be written like a real person created the content')

        if is_cover_letter_in_my_writing_style:
            prompt.add_writing_stype(self.candidate)

        if additional_guidance is not None and len(additional_guidance) > 0:
            prompt.add_user_message(f'In addition to the previous history, here is some additional guidance: {additional_guidance}')

        # Get the prompt response
        cover_letter = self.ai.get_prompt_response(prompt.messages)

        return cover_letter
