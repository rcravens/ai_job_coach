from AiEngine import AiEngine
from Job import Job
from agents.BaseAiEngineAgent import BaseAiEngineAgent


class JobDescriptionAnalyzer(BaseAiEngineAgent):
    def __init__(self, ai: AiEngine, job: Job):
        role = 'Job Description Analyzer'
        background = """
            You are an expert at analyzing job descriptions to provide professional guidance to candidate's who are seeking a job.
            You are extremely thorough and careful about your analysis.
            Your analysis results in a list of professional skills that include both technical and non-technical skills.
        """
        goal = 'Analyze the provided job_description and identify a list of top 10 skills required to be successful at this job'
        instructions = """
            You have developed the following process that generates the best possible results:
            1. Thoroughly review the job_description 
            2. Identify a list of skills required to be successful at this job
            3. Review the list of skills and rank them by importance
            4. Return the top 10 skills required to be successful at this job and provide the reason why that skill is important
        """
        context = {
            'job_description': job.job_description
        }
        desired_format = """
        [{
            "skill": "Leadership",
            "reason": "Reason why this skill is important"
        }]
        """
        super().__init__(ai, role, background, goal, context, instructions, output_format=desired_format, is_json=True)
