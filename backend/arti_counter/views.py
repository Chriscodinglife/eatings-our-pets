from django.shortcuts import render
from rest_framework import viewsets, views, response
from .serializers import CounterSerializer, ArticleSerializer
from .models import Article, Counter

# Create your views here.


class CounterView(views.APIView):
    serializer_class = CounterSerializer

    def get(self, request):
        counter, _ = Counter.objects.get_or_create(id=1)

        counter.counter += 1
        counter.save()

        serializer = self.serializer_class(counter)

        return response.Response(serializer.data)


class ArticleView(viewsets.ModelViewSet):
    serializer_class = ArticleSerializer
    queryset = Article.objects.all()
