from rest_framework import serializers
from .models import Counter, Article


class CounterSerializer(serializers.ModelSerializer):
    class Meta:
        model = Counter
        fields = ['counter']


class ArticleSerializer(serializers.ModelSerializer):
    class Meta:
        model = Article
        fields = ('id', 'title', 'description', 'created_at')
