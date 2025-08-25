from django.shortcuts import render
from rest_framework import viewsets
from .models import Document, RegimentoInterno, Estatuto
from .serializers import DocumentSerializer, RegimentoInternoSerializer, EstatutoSerializer

def documents_list_view(request):
    regimento = RegimentoInterno.objects.last()
    estatuto = Estatuto.objects.last()
    context = {
        'regimento': regimento,
        'estatuto': estatuto,
    }
    return render(request, 'documents.html', context)

class DocumentViewSet(viewsets.ModelViewSet):
    queryset = Document.objects.all()
    serializer_class = DocumentSerializer

class RegimentoInternoViewSet(viewsets.ModelViewSet):
    queryset = RegimentoInterno.objects.all()
    serializer_class = RegimentoInternoSerializer

class EstatutoViewSet(viewsets.ModelViewSet):
    queryset = Estatuto.objects.all()
    serializer_class = EstatutoSerializer