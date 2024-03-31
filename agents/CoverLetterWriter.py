from AiEngine import AiEngine
from Candidate import Candidate
from Job import Job
from agents.BaseAgent import BaseAgent


class CoverLetterWriter(BaseAgent):
    def __init__(self, ai: AiEngine, candidate: Candidate, job: Job, additional_guidance=None, is_rewrite=False, use_writing_style: bool = True):
        role = 'Cover Letter Writer'

        background = f"""
            You are an expert at writing professional cover letters
            You tailor the cover letter to the job description and the candidate's experience
            You follow all the best practices for writing professional cover letters
            You are extremely thorough and careful about your analysis.
        """

        goal = f'Follow the instructions provided and create a professional cover letter.'

        context = {
            'job_description': job.job_description,
            'job_title': job.job_title,
            'company_name': job.company,
            'hiring_manager': job.hiring_manager,
            'source': job.source,
            'key_required_skills': job.top_required_skills.keys(),
            'candidate_strengths': job.strengths,
            'candidate_name': candidate.candidate_name,
            'candidates_resume': candidate.resume_text,
        }
        if is_rewrite:
            context['existing_cover_letter'] = job.cover_letter
        if use_writing_style:
            context['sample_writing_style'] = candidate.sample_writing_style

        instructions = self.get_instructions(is_rewrite)

        if additional_guidance is not None and len(additional_guidance) > 0:
            instructions += f'\n\nIn addition to the provided instructions, here is some additional guidance: {additional_guidance}'

        if use_writing_style:
            instructions += f'\n\nThe generated text should use the voice, tone, style, and structure of candidate by mimicking the style provided by the sample_writing_style'

        output_format = """
            The resulting cover letter should include at least 3 paragraphs.
            The first paragraph should focus on relaying interest in the posted job description.
            The middle paragraphs should focus on specific examples of why the candidate is a great fit.
            The last paragraph should restate interest, summarize what the candidate has to offer, and express some forward looking statement.
            The cover letter should be written in first-person tone and structure as if the candidate is wrote it themself.
            """

        super().__init__(ai, role, goal, background, context, instructions, output_format=output_format)

    @staticmethod
    def get_instructions(is_rewrite: bool) -> str:
        if is_rewrite:
            return """
                You have developed the following process that generates the best possible rewrite results:
                1. Review the job_title, company, hiring_manager, source, job_description and key_required_skills
                2. Review the candidates_resume and candidate_strengths
                3. The candidate's name is provided by candidate_name
                4. Given the key_required_skills and the candidate_strengths be sure to highlight how the candidate is a great fit
                5. Rewrite and improve the existing_cover_letter based on the information you reviewed 
            """

        return """
            You have developed the following process that generates the best possible results:
            1. Review the job_title, company, hiring_manager, source, job_description and key_required_skills
            2. Review the candidates_resume and candidate_strengths
            3. The candidate's name is provided by candidate_name
            4. Given the key_required_skills and the candidate_strengths be sure to highlight how the candidate is a great fit
            5. Generate a custom cover letter based on the information you reviewed 
        """
