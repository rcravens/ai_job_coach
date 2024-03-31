from AiEngine import AiEngine
from Candidate import Candidate
from Job import Job
from agents.BaseAgent import BaseAgent


class Advisor(BaseAgent):
    def __init__(self, ai: AiEngine, candidate: Candidate, job: Job, prompt: str, is_first_person: bool = True):
        role = 'Advisor'

        background = f"""
            You are an expert job search coach and you provide professional guidance.
            You are use data about the job and the candidate to help provide the best advice for the candidate.
            You are helping a candidate by answering their questions in a professional manner.
            You are extremely thorough and careful about your analysis.
        """

        goal = f'Follow the instructions provided and create a response to the provided prompt.'

        context = {
            'job_description': job.job_description,
            'key_required_skills': job.top_required_skills,
            'candidate_strengths': job.strengths,
            'candidates_resume': candidate.resume_text,
            'user_prompt': prompt
        }

        instructions = """
            You have developed the following process that generates the best possible results:
            1. Review the job_description and key_required_skills
            2. Review the candidates_resume and candidate_strengths
            3. Respond to the user_prompt 
"""

        output_format = None
        if is_first_person:
            output_format = """
                Respond in first-person tone and structure as if the candidate is writing the response
            """

        super().__init__(ai, role, goal, background, context, instructions, output_format=output_format)
