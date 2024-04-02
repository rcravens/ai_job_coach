class Job(object):
    def __init__(self):
        self._job_description = None
        self._company_name = None

        self.job_title = None
        self.hiring_manager = None
        self.source = None
        self.top_required_skills = dict()
        self.strengths = dict()
        self.weaknesses = dict()
        self.cover_letter = None
        self.company_news = None

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

    @property
    def company_name(self):
        return self._company_name

    @company_name.setter
    def company_name(self, company_name):
        print('setting company_name to ' + company_name)
        if self._company_name != company_name:
            self.company_news = None
        self._company_name = company_name

    def _reset_job(self):
        print('resetting job')
        self._job_description = '[Job Description]'
        self.job_title = '[Job Title]'
        self._company_name = '[Company Name]'
        self.hiring_manager = '[Hiring Manager]'
        self.source = '[Source]'
        self.company_news = None
        self._reset_analysis()

    def _reset_analysis(self):
        self.top_required_skills = dict()
        self.strengths = dict()
        self.weaknesses = dict()

    def is_valid(self):
        return len(self.job_description) > 0 and self.job_description != '[Job Description]'
