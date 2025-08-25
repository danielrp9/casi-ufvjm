from rest_framework import serializers
from .models import Document, RegimentoInterno, Estatuto

class DocumentSerializer(serializers.ModelSerializer):
    class Meta:
        model = Document
        fields = ('id', 'title', 'description', 'file', 'publication_date')

class RegimentoInternoSerializer(serializers.ModelSerializer):
    class Meta:
        model = RegimentoInterno
        fields = ('id', 'title', 'file', 'publication_date')

class EstatutoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Estatuto
        fields = ('id', 'title', 'file', 'publication_date')