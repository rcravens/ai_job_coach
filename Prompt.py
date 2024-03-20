class Prompt:
    def __init__(self):
        self.messages = []

    def add_system_message(self, msg: str):
        self.add_message('system', msg)

    def add_user_message(self, msg: str):
        self.add_message('user', msg)

    def add_message(self, role: str, msg: str):
        self.messages.append({'role': role, 'content': msg})
