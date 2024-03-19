import os

from PyPDF2 import PdfReader


class Candidate:
    def __init__(self, candidate_name):
        self.candidate_name = candidate_name
        self.resume_source = ''
        self.resume_text = ''
        self.sample_writing_style = ''

        self._read_resume()
        self._read_sample_writing()

    def _read_resume(self):
        self.resume_source = None
        self.resume_text = ''
        source_files = ['app_data.js', 'resume.txt', 'resume.pdf']
        for source_file in source_files:
            if os.path.exists(source_file):
                self.resume_source = source_file
                if source_file.endswith('.pdf'):
                    with open(source_file, 'rb') as f:
                        pdf_reader = PdfReader(f)
                        for page in pdf_reader.pages:
                            self.resume_text += page.extract_text()
                else:
                    with open(source_file, 'r') as f:
                        self.resume_text = f.readlines()
                        self.resume_text = ''.join(self.resume_text)
            if len(self.resume_text) > 0:
                break

    def _read_sample_writing(self):
        self.sample_writing_style = ''
        if os.path.exists('./sample_writing_style.txt'):
            with open('./sample_writing_style.txt', 'r') as sample_file:
                self.sample_writing_style = sample_file.readlines()
                self.sample_writing_style = ''.join(self.sample_writing_style)
