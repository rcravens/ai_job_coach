from Candidate import Candidate
from Prompt import Prompt


class CoachPrompt(Prompt):
    def __init__(self):
        super().__init__()
        self.messages = self._base_messages()

    def add_resume(self, candidate: Candidate):
        self.add_user_message(f'The candidate\'s name is: {candidate.candidate_name}')
        self.add_user_message(f'The candidate\'s resume is: {candidate.resume_text}')

    def add_writing_stype(self, candidate: Candidate):
        self.add_user_message(f'The candidate\'s writing style is: {candidate.sample_writing_style}')
        self.add_user_message(f'The cover letter should use the voice, tone, style, and structure of the candidate\'s writing style')
        self.add_user_message(f'The resulting cover letter should only use information from the candidate\'s resume and not directly use content from the candidate\'s writing style.')

    @staticmethod
    def _base_messages():
        return [
            {'role': 'system', 'content': f'You are a job search coach and you provide professional guidance to candidates based on the candidate\'s resume text and a prompt.'},
            {'role': 'system', 'content': f'All generated text should be written as if the candidate was writing it themself.'},
            {'role': 'system', 'content': f'The generated text should be written as if a human was writing it themselves.'},
        ]
