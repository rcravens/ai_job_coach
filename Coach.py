from AiEngine import AiEngine
from Candidate import Candidate
from Job import Job
from agents.Advisor import Advisor
from agents.CandidateAnalyzer import CandidateAnalyzer
from agents.CoverLetterWriter import CoverLetterWriter
from agents.JobDescriptionAnalyzer import JobDescriptionAnalyzer


class Coach:
    def __init__(self, candidate: Candidate, job: Job, ai: AiEngine):
        self.candidate = candidate
        self.job = job
        self.ai = ai

    def answer_question(self, user_prompt: str, is_summary_in_my_writing_style: bool):
        print('answer_question')

        advisor = Advisor(self.ai, self.candidate, self.job, user_prompt, is_summary_in_my_writing_style)
        response = advisor.work()

        return response

    def analyze_jd_and_extract_top_skills(self):
        print('analyze_jd_and_extract_top_skills')

        agent = JobDescriptionAnalyzer(self.ai, self.job)
        response = agent.work()

        result = dict()
        skills = response.splitlines()
        for line in skills:
            clean_line = line.strip().strip('-').strip()
            if len(clean_line) == 0:
                continue
            skill, reason = clean_line.split(' - ')
            result[skill] = reason

        self.job.top_required_skills = result

    def analyze_strengths(self):
        print('analyze_strengths')

        agent = CandidateAnalyzer(self.ai, self.candidate, self.job, is_find_strengths=True)
        self.job.strengths = agent.work()

    def analyze_weaknesses(self):
        print('analyze_weaknesses')

        agent = CandidateAnalyzer(self.ai, self.candidate, self.job, is_find_strengths=False)
        self.job.weaknesses = agent.work()

    def create_new_cover_letter(self,
                                is_cover_letter_in_my_writing_style: bool,
                                additional_guidance: str = None
                                ):

        if not self.job.is_valid():
            return

        print('cover_letter')

        agent = CoverLetterWriter(self.ai, self.candidate, self.job,
                                  additional_guidance=additional_guidance,
                                  is_rewrite=False,
                                  use_writing_style=is_cover_letter_in_my_writing_style)
        self.job.cover_letter = agent.work()

    def refine_cover_letter(self,
                            is_cover_letter_in_my_writing_style: bool,
                            additional_guidance: str = None
                            ):

        if not self.job.is_valid():
            return

        if self.job.cover_letter is None or len(self.job.cover_letter) == 0:
            self.create_new_cover_letter(is_cover_letter_in_my_writing_style, additional_guidance)

        print('refine_cover_letter')
        agent = CoverLetterWriter(self.ai, self.candidate, self.job,
                                  additional_guidance=additional_guidance,
                                  is_rewrite=True,
                                  use_writing_style=is_cover_letter_in_my_writing_style)
        self.job.cover_letter = agent.work()
