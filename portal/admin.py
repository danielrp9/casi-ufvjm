from django.contrib import admin
from .models import News, Event, Banner

@admin.register(News)
class NewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'publication_date')
    list_filter = ('publication_date',)
    search_fields = ('title', 'content')

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ('title', 'date', 'image', 'event_link')
    list_filter = ('date', 'location')
    search_fields = ('title', 'description', 'location')

@admin.register(Banner)
class BannerAdmin(admin.ModelAdmin):
    list_display = ('__str__', 'image')