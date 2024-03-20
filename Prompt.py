class Prompt:
    def __init__(self):
        self.messages = []

    def add_system_message(self, msg: str):
        self.messages.append({'role': 'system', 'content': msg})

    def add_user_message(self, msg: str):
        self.messages.append({'role': 'user', 'content': msg})

    def add_message(self, role: str, msg: str):
        self.messages.append({'role': role, 'content': msg})
