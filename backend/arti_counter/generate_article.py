from openai import OpenAI
from .models import Article
from django.utils import timezone
import json

client = OpenAI()


def generate_and_save_article():
    completion = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {
                "role": "system",
                "content": "You are a helpful reporter with a sense of humor."
            },
            {
                "role": "user",
                "content": "Write a funny and sarcastic news headline and description about only immigrants eating pets in the United States. Keep the headline and description very short and to the point. Include random pet names, cities located in the United States, and random owner names. Make it exaggerated and absurd as if it's a parody news article. Format the response in a JSON object with 'title' and 'description' fields."
            }
        ],
        temperature=1.01,
        top_p=1,
        frequency_penalty=0.02,
    )

    response_content = completion.choices[0].message.content.strip().strip(
        '```json').strip('```')
    article_json = json.loads(response_content)

    print(article_json["title"])
    print(article_json["description"])
    article = Article.objects.create(
        title=article_json["title"],
        description=article_json["description"],
        created_at=timezone.now()
    )

    article.save()

    return article
