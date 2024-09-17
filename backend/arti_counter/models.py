from django.db import models

# Create your models here.


class Counter(models.Model):
    counter = models.BigIntegerField(default=0)


class Article(models.Model):
    title = models.CharField(max_length=300)
    description = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title
