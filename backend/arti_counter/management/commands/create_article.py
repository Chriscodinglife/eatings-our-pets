from django.core.management.base import BaseCommand
from arti_counter.generate_article import generate_and_save_article


class Command(BaseCommand):
    help = 'Generates and saves a new article using OpenAI'

    def handle(self, *args, **kwargs):
        article = generate_and_save_article()
        self.stdout.write(self.style.SUCCESS(
            f'Created article: "{article.title}"'))
