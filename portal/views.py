from django.shortcuts import render, get_object_or_404
from rest_framework import viewsets
from .models import News, Event, Banner
from .serializers import NewsSerializer, EventSerializer, BannerSerializer

def news_list_view(request):
    return render(request, 'news.html')

def news_detail_view(request, pk):
    news_item = get_object_or_404(News, pk=pk)
    context = {
        'news_item': news_item
    }
    return render(request, 'news_detail.html', context)

def events_list_view(request):
    return render(request, 'events.html')

class NewsViewSet(viewsets.ModelViewSet):
    queryset = News.objects.all()
    serializer_class = NewsSerializer

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class BannerViewSet(viewsets.ModelViewSet):
    queryset = Banner.objects.all()
    serializer_class = BannerSerializer