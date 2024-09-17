from django.contrib import admin
from .models import Counter, Article

# Register your models here.


class CounterAdmin(admin.ModelAdmin):
    lis = ('counter',)


class ArticleAdmin(admin.ModelAdmin):
    list_display = ('title', 'description')


admin.site.register(Counter, CounterAdmin)
admin.site.register(Article, ArticleAdmin)
