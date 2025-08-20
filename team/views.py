from rest_framework import viewsets
from django.shortcuts import render

from portal.models import Banner
from .models import Member, ResearchGroup, StudentEntity, DiretoriaCargo, GestaoHistorico
from .serializers import MemberSerializer, ResearchGroupSerializer, StudentEntitySerializer, DiretoriaCargoSerializer, GestaoHistoricoSerializer

def home_view(request):
    entities = StudentEntity.objects.all()
    banner = Banner.objects.last() # Pega o banner mais recente
    context = {
        'entities': entities,
        'banner': banner,
    }
    return render(request, 'index.html', context)

def research_groups_list_view(request):
    return render(request, 'research_groups.html')

def diretoria_list_view(request):
    return render(request, 'diretoria.html')

def about_view(request):
    return render(request, 'about.html')

class MemberViewSet(viewsets.ModelViewSet):
    queryset = Member.objects.all()
    serializer_class = MemberSerializer

class DiretoriaCargoViewSet(viewsets.ModelViewSet):
    queryset = DiretoriaCargo.objects.all()
    serializer_class = DiretoriaCargoSerializer

class GestaoHistoricoViewSet(viewsets.ModelViewSet):
    queryset = GestaoHistorico.objects.all()
    serializer_class = GestaoHistoricoSerializer

class ResearchGroupViewSet(viewsets.ModelViewSet):
    queryset = ResearchGroup.objects.all()
    serializer_class = ResearchGroupSerializer

class StudentEntityViewSet(viewsets.ModelViewSet):
    queryset = StudentEntity.objects.all()
    serializer_class = StudentEntitySerializer