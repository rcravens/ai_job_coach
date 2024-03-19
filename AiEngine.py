import openai as ai


class AiEngine:
    def __init__(self, api_key):
        ai.api_key = api_key
        self.ai = ai
        self.models = ['gpt-3.5-turbo', 'gpt-4']
        self.selected_model = 'gpt-3.5-turbo'
        self.temperature = 0.9

    def get_prompt_response(self, messages: list) -> str:
        summary_result = self.ai.chat.completions.create(
            model=self.selected_model,
            temperature=self.temperature,
            messages=messages,
        )

        return summary_result.choices[0].message.content
