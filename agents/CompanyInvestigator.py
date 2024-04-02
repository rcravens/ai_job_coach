from duckduckgo_search import DDGS

from Job import Job
from agents.BaseAgentInterface import BaseAgentInterface


class CompanyInvestigator(BaseAgentInterface):
    def __init__(self, job: Job, number_of_articles: int = 10, additional_search: str = None):
        self.company = job.company_name
        self.number_of_articles = number_of_articles
        self.additional_search = additional_search

    def work(self) -> list:
        query = self.company
        if self.additional_search is not None and len(self.additional_search) > 0:
            query += ' ' + self.additional_search

        print('query', query)

        results = DDGS().news(query, max_results=self.number_of_articles)
        return results
