from AiEngine import AiEngine
from agents.BaseAiEngineAgent import BaseAiEngineAgent


class SentimentAnalyzer(BaseAiEngineAgent):
    def __init__(self, ai: AiEngine, title: str, body: str):
        role = 'Sentiment Analyzer'

        background = f"""
            You are an expert in reading an articles title and body and providing either a POSITIVE, NEUTRAL, or NEGATIVE sentiment.
            You are extremely thorough and careful about your analysis.
            Your results will be a single word that is either POSITIVE, NEUTRAL, or NEGATIVE.
        """

        goal = 'For each of the provided title and body and provide a sentiment value of either POSITIVE, NEUTRAL, or NEGATIVE'

        instructions = """
                You have developed the following process that generates the best possible list of strengths:
                1. You are provided a title and body of an article
                2. Analyze the title and body as a whole and provide a sentiment value of either POSITIVE, NEUTRAL, or NEGATIVE
            """

        context = {
            'title': title,
            'body': body
        }
        desired_format = """
            Your response should be a single word that is either POSITIVE, NEUTRAL, or NEGATIVE
            """

        super().__init__(ai, role, goal, background, context, instructions, output_format=desired_format)
