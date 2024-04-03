from AiEngine import AiEngine
from Candidate import Candidate
from Job import Job
from agents.BaseAiEngineAgent import BaseAiEngineAgent


class CandidateAnalyzer(BaseAiEngineAgent):
    def __init__(self, ai: AiEngine, candidate: Candidate, job: Job, is_find_strengths: bool = True):
        self.is_find_strengths = is_find_strengths

        role = 'Candidate Analyzer'

        goal_type = 'Strengths' if is_find_strengths else 'Weaknesses'

        background = f"""
            You are an expert in comparing resumes to job descriptions and generating a top 5 list of {goal_type} for the candidate.
            You are extremely thorough and careful about your analysis.
        """

        goal = f'Create a top 5 list of {goal_type}'

        instructions = self.create_instructions()

        context = {
            'job_description': job.job_description,
            'candidates_resume': candidate.resume_text
        }
        desired_format = self.create_desired_format()

        super().__init__(ai, role, goal, background, context, instructions, output_format=desired_format, is_json=True)

    def create_instructions(self) -> str:
        if self.is_find_strengths:
            return """
                You have developed the following process that generates the best possible list of strengths:
                1. Compare the job_description and key_required_skills with the candidates_resume
                2. Create a top 5 list of examples where the candidate has demonstrable experience that matches the job description.
                3. For each strength provide examples of the candidate\'s demonstrable experience'
            """
        return """
                You have developed the following process that generates the best possible list of weaknesses:
                1. Compare the job_description and key_required_skills with the candidates_resume
                2. Create a top 5 list of examples where the candidate is lacking experience that is mentioned in the job description.
                3. For each weakness provide recommendations on how to gain this experience
        """

    def create_desired_format(self):
        if self.is_find_strengths:
            return """
            [{
                "strength": "Leadership",
                "examples": [
                    "Example number 1",
                    "Example number 2",
                    "Example number 3"
                ]
            }]
            """

        return """
        [{
            "weakness": "Leadership",
            "recommendations": [
                "Recommendation number 1",
                "Recommendation number 2",
                "Recommendation number 3"
            ]
        }]
        """
