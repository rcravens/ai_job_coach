import os

from PyPDF2 import PdfReader


class Candidate:
    def __init__(self, candidate_name):
        self._local_files = ['app_data.js', 'resume.txt', 'resume.pdf']
        self._resume_source = None
        self._resume_texts = dict()

        self.candidate_name = candidate_name
        self.resume_sources = []
        self.sample_writing_style = ''

        self._discover_resume_sources()
        self._read_resume()
        self._read_sample_writing()

    @property
    def resume_source(self):
        return self._resume_source

    @resume_source.setter
    def resume_source(self, source_file):
        self._resume_source = source_file

    @property
    def resume_text(self):
        return self._resume_texts[self._resume_source]

    def _discover_resume_sources(self):
        for source_file in self._local_files:
            if os.path.exists(source_file):
                if self._resume_source is None:
                    self._resume_source = source_file
                self.resume_sources.append(source_file)

    def _read_resume(self):
        self._resume_texts = dict()
        for source_file in self.resume_sources:
            resume_text = ''
            if source_file.endswith('.pdf'):
                with open(source_file, 'rb') as f:
                    pdf_reader = PdfReader(f)
                    for page in pdf_reader.pages:
                        resume_text += page.extract_text()
            else:
                with open(source_file, 'r') as f:
                    resume_text = f.readlines()
                    resume_text = ''.join(resume_text)

            self._resume_texts[source_file] = resume_text

    def _read_sample_writing(self):
        self.sample_writing_style = ''
        if os.path.exists('./sample_writing_style.txt'):
            with open('./sample_writing_style.txt', 'r') as sample_file:
                self.sample_writing_style = sample_file.readlines()
                self.sample_writing_style = ''.join(self.sample_writing_style)
