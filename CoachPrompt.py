from Candidate import Candidate
from Job import Job
from Prompt import Prompt


class CoachPrompt(Prompt):
    def __init__(self):
        super().__init__()
        self.messages = self._base_messages()

    def add_resume(self, candidate: Candidate):
        self.add_user_message(f'The candidate\'s name is: {candidate.candidate_name}')
        self.add_user_message(f'The candidate\'s resume is: {candidate.resume_text}')

    def add_writing_style(self, candidate: Candidate):
        self.add_system_message(f'The candidate\'s writing style is: {candidate.sample_writing_style}')
        self.add_system_message(f'The generated text should use the voice, tone, style, and structure of the candidate\'s writing style')
        self.add_system_message(f'The generated text should only use information from the candidate\'s resume and not directly use content from the candidate\'s writing style.')

    def add_job_description(self, job: Job):
        self.add_user_message(f'The job description is: {job.job_description}')
        self.add_user_message(f'The job title is: {job.job_title}')
        self.add_user_message(f'The hiring company is: {job.company}')
        self.add_user_message(f'The hiring manager is: {job.hiring_manager}')
        self.add_user_message(f'Source of job description is: {job.source}')

    def add_top_required_skills(self, job: Job):
        if len(job.top_required_skills) > 0:
            self.add_user_message(f'The top_required_skills for this job are: {', '.join(list(job.top_required_skills.keys()))}')

    def add_candidate_strengths(self, job: Job):
        if len(job.top_required_skills) > 0:
            self.add_user_message(f'The candidate_strengths for this job are: {', '.join(job.strengths)}')

    def add_candidate_weaknesses(self, job: Job):
        if len(job.top_required_skills) > 0:
            self.add_user_message(f'The top_required_skills for this job are: {', '.join(job.weaknesses)}')

    def add_cover_letter(self, job: Job):
        if job.cover_letter is not None and len(job.cover_letter) > 0:
            self.add_user_message(f'The existing_cover_letter for this job are: {job.cover_letter}')

    @staticmethod
    def _base_messages():
        return [
            {'role': 'system', 'content': f'You are a job search coach and you provide professional guidance to candidates based on the candidate\'s resume text and a prompt.'},
            {'role': 'system', 'content': f'All generated text should be written as if the candidate was writing it themself.'},
            {'role': 'system', 'content': f'The generated text should be written as if a human was writing it themself.'},
        ]
