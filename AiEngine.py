import hashlib
import json
import os
import pickle

import openai as ai


class AiEngine:
    def __init__(self, api_key):
        ai.api_key = api_key
        self.ai = ai
        self.models = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-turbo-preview']
        self.selected_model = 'gpt-3.5-turbo'
        self.temperature = 0.9
        self.cache = dict()

        if os.path.exists('cache.pkl'):
            with open('cache.pkl', 'rb') as f:
                self.cache = pickle.load(f)

    def get_prompt_response(self, messages: list) -> str:

        cache_response = self.get_from_cache(messages)
        if cache_response is not None:
            print('cache hit')
            return cache_response

        print('cache miss')
        summary_result = self.ai.chat.completions.create(
            model=self.selected_model,
            temperature=self.temperature,
            messages=messages,
        )

        result = summary_result.choices[0].message.content

        self.add_to_cache(messages, result)

        return result

    def get_from_cache(self, messages: list) -> str | None:
        md5 = self._md5_messages(messages)
        if md5 in self.cache:
            print('cache hit')
            return self.cache[md5]

        return None

    def add_to_cache(self, messages: list, response: str):
        md5 = self._md5_messages(messages)
        self.cache[md5] = response
        with open('cache.pkl', 'wb') as f:
            pickle.dump(self.cache, f)

    def clear_cache(self):
        self.cache = dict()

    @staticmethod
    def _md5_messages(messages: list) -> str:
        return hashlib.md5(json.dumps(messages).encode('utf-8')).hexdigest()
