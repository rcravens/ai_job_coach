from AiEngine import AiEngine
from Candidate import Candidate
from CoachPrompt import CoachPrompt
from Job import Job


class Coach:
    def __init__(self, candidate: Candidate, job: Job, ai: AiEngine):
        self.candidate = candidate
        self.job = job
        self.ai = ai

    def answer_question(self, user_prompt: str, is_summary_in_my_writing_style: bool):
        print('answer_question')

        # Build the prompt
        prompt = CoachPrompt()
        prompt.add_system_message(f'You are helping a candidate summarize their work experience by answering questions about their experience')
        prompt.add_resume(self.candidate)
        if self.job.is_valid():
            prompt.add_job_description(self.job)
            prompt.add_top_required_skills(self.job)
            prompt.add_candidate_strengths(self.job)
        if is_summary_in_my_writing_style:
            prompt.add_writing_style(self.candidate)
        prompt.add_user_message(f'{user_prompt}')

        # Get the prompt response
        response = self.ai.get_prompt_response(prompt.messages)

        return response

    def analyze_jd_and_extract_top_skills(self):
        print('analyze_jd_and_extract_top_skills')

        # Build the prompt
        self.job.top_required_skills = dict()
        response = self.answer_question('Given the job description, please identify a list of top 10 key skills  needed to be successful in this position. Please return the skills and the reason why that skill is important. Each skill will be on a new line in the following format: Skill - Reason', False)

        result = dict()
        skills = response.splitlines()
        for line in skills:
            clean_line = line.strip().strip('-').strip()
            skill, reason = clean_line.split(' - ')
            result[skill] = reason

        self.job.top_required_skills = result

    def analyze_strengths(self):
        print('analyze_strengths')

        self.job.strengths = self.answer_question('Given the top_required_skills for this job and the candidate resume, provide a top 5 list of examples where the candidate has demonstrable experience. Provide concrete examples of this experience. Write each example in paragraph form.', False)

    def analyze_weaknesses(self):
        print('analyze_weaknesses')

        self.job.weaknesses = self.answer_question('Given the top_required_skills for this job and the candidate resume, provide a top 5 list of examples where the candidate is lacking experience. Provide some details on how to gain this experience. Write each example in paragraph form.', False)

    def create_new_cover_letter(self,
                                is_cover_letter_in_my_writing_style: bool,
                                additional_guidance: str = None
                                ):

        if not self.job.is_valid():
            return 'Fill out the job description before generating a cover letter.'

        print('cover_letter')

        # Build the prompt
        prompt = CoachPrompt()
        prompt.add_system_message(f'You are helping a candidate generate a cover letter based on the following candidate resume and a job description.')
        prompt.add_user_message(f'Generate a cover letter based on the following candidate\'s resume and job description.')
        prompt.add_resume(self.candidate)
        prompt.add_job_description(self.job)
        prompt.add_top_required_skills(self.job)
        prompt.add_candidate_strengths(self.job)
        prompt.add_user_message(f'Given the top_required_skills and the candidate_strengths be sure to highlight how the candidate has demonstrable experience.')
        prompt.add_user_message(f'The resulting cover letter should include at least 3 paragraphs')
        prompt.add_user_message(f'The first paragraph should focus on relaying interest in the posted job description.')
        prompt.add_user_message(f'The middle paragraphs should focus on specific examples of why the candidate is a great fit.')
        prompt.add_user_message(f'The last paragraph should restate interest, summarize what the candidate has to offer, and express some forward looking statement.')
        prompt.add_user_message(f'The cover letter should be written like a real person created the content')

        if is_cover_letter_in_my_writing_style:
            prompt.add_writing_style(self.candidate)

        if additional_guidance is not None and len(additional_guidance) > 0:
            prompt.add_user_message(f'In addition to the previous history, here is some additional guidance: {additional_guidance}')

        # Get the prompt response
        self.job.cover_letter = self.ai.get_prompt_response(prompt.messages)

    def refine_cover_letter(self,
                            is_cover_letter_in_my_writing_style: bool,
                            additional_guidance: str = None
                            ):

        if not self.job.is_valid():
            return 'Fill out the job description before generating a cover letter.'

        if self.job.cover_letter is None or len(self.job.cover_letter) == 0:
            return self.create_new_cover_letter(is_cover_letter_in_my_writing_style, additional_guidance)

        print('refine_cover_letter')

        # Build the prompt
        prompt = CoachPrompt()
        prompt.add_system_message(f'You are helping a candidate fine tune an cover letter based on the following candidate resume and a job description.')
        prompt.add_cover_letter(self.job)
        prompt.add_user_message(f'Help fine tune the existing_cover_letter based on the following candidate\'s resume and job description.')
        prompt.add_resume(self.candidate)
        prompt.add_job_description(self.job)
        prompt.add_top_required_skills(self.job)
        prompt.add_candidate_strengths(self.job)
        prompt.add_user_message(f'Given the top_required_skills and the candidate_strengths be sure to highlight how the candidate has demonstrable experience.')
        prompt.add_user_message(f'The resulting cover letter should include at least 3 paragraphs')
        prompt.add_user_message(f'The first paragraph should focus on relaying interest in the posted job description.')
        prompt.add_user_message(f'The middle paragraphs should focus on specific examples of why the candidate is a great fit.')
        prompt.add_user_message(f'The last paragraph should restate interest, summarize what the candidate has to offer, and express some forward looking statement.')
        prompt.add_user_message(f'The cover letter should be written like a real person created the content')

        if is_cover_letter_in_my_writing_style:
            prompt.add_writing_style(self.candidate)

        if additional_guidance is not None and len(additional_guidance) > 0:
            prompt.add_user_message(f'In addition to the previous history, here is some additional guidance: {additional_guidance}')

        # Get the prompt response
        self.job.cover_letter = self.ai.get_prompt_response(prompt.messages)
