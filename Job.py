class Job:
    def __init__(self):
        self._job_description = None
        self.job_title = None
        self.company = None
        self.hiring_manager = None
        self.source = None
        self.top_required_skills = dict()
        self.strengths = []
        self.weaknesses = []
        self.cover_letter = None

        self._reset_job()

    @property
    def job_description(self):
        return self._job_description

    @job_description.setter
    def job_description(self, description):
        if self._job_description != description:
            self._reset_analysis()

        self._job_description = description
        if len(description) == 0:
            self._reset_job()

    def _reset_job(self):
        self._job_description = '[Job Description]'
        self.job_title = '[Job Title]'
        self.company = '[Company Name]'
        self.hiring_manager = '[Hiring Manager]'
        self.source = '[Source]'
        self._reset_analysis()

    def _reset_analysis(self):
        self.top_required_skills = dict()
        self.strengths = []
        self.weaknesses = []

    def is_valid(self):
        return len(self.job_description) > 0 and self.job_description != '[Job Description]'
