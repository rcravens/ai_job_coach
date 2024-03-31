from AiEngine import AiEngine
from Prompt import Prompt


class BaseAgent:
    def __init__(self,
                 ai: AiEngine,
                 role: str,
                 background: str,
                 goal: str,
                 context: dict,
                 instructions: str = None,
                 output_format: str = None):
        self.ai = ai
        self.role = role
        self.background = background
        self.goal = goal
        self.context = context
        self.instructions = instructions
        self.output_format = output_format

    def work(self) -> str:
        # Create the prompt
        prompt = Prompt()
        prompt.add_system_message(f'You have the following role: {self.role}')
        prompt.add_system_message(f'You have the following background: {self.background}')

        for key, value in self.context.items():
            prompt.add_user_message(f'Here is the information about the {key}: {value}')
            prompt.add_user_message(f'{value}')

        prompt.add_user_message(f'You have the following goal: {self.goal}')

        if self.instructions is not None:
            prompt.add_user_message(f'{self.instructions}')

        if self.output_format is not None:
            prompt.add_user_message(f'Provide your answer using the following format.')
            prompt.add_user_message(f'Do not provide any additional text before or after the desired format.')
            prompt.add_user_message(f'Here is information about the desired format:')
            prompt.add_user_message(f'{self.output_format}')

        # Generate the prompt response
        response = self.ai.get_prompt_response(prompt.messages)

        return response
