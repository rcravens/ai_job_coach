import json

from AiEngine import AiEngine
from Prompt import Prompt
from agents.BaseAgentInterface import BaseAgentInterface


class BaseAiEngineAgent(BaseAgentInterface):
    def __init__(self,
                 ai: AiEngine,
                 role: str,
                 background: str,
                 goal: str,
                 context: dict,
                 instructions: str = None,
                 output_format: str = None,
                 is_json: bool = False):
        self.ai = ai
        self.role = role
        self.background = background
        self.goal = goal
        self.context = context
        self.instructions = instructions
        self.output_format = output_format
        self.is_json = is_json

    def work(self) -> str:
        # Create the prompt
        prompt = Prompt()
        prompt.add_system_message(f'You have the following role: {self.role}')
        prompt.add_system_message(f'You have the following background: {self.background}')
        if self.is_json:
            prompt.add_system_message('Your results should be in valid JSON format.')

        for key, value in self.context.items():
            prompt.add_user_message(f'Here is the information about the {key}:')
            prompt.add_user_message(f'{value}')

        prompt.add_user_message(f'You have the following goal: {self.goal}')

        if self.instructions is not None:
            prompt.add_user_message(f'{self.instructions}')

        if self.output_format is not None:
            prompt.add_user_message(f'Provide your answer using the following format.')
            prompt.add_user_message(f'Do not provide any additional explanations before or after the desired format.')
            if self.is_json:
                prompt.add_user_message(f'Only provide a RFC8259 compliant JSON response using the following this format without deviation.')
            else:
                prompt.add_user_message(f'Here is information about the desired format:')
            prompt.add_user_message(f'{self.output_format}')

        # Generate the prompt response
        response = self.ai.get_prompt_response(prompt.messages)

        if not self.is_json:
            return response

        cleaned_response = response.strip().strip('```').strip('json')

        try:
            data = json.loads(cleaned_response)
            return data
        except Exception as e:
            print(f'An error occurred: {e}')
            print(f'Response: {response}')

        return '[ERROR]'
