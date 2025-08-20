from rest_framework import serializers
from .models import Member, ResearchGroup, StudentEntity, DiretoriaCargo, GestaoHistorico, MembroHistorico

class MemberSerializer(serializers.ModelSerializer):
    class Meta:
        model = Member
        fields = ('id', 'name', 'role', 'bio', 'photo')

class MembroHistoricoSerializer(serializers.ModelSerializer):
    class Meta:
        model = MembroHistorico
        fields = ('id', 'name', 'role', 'photo')

class DiretoriaCargoSerializer(serializers.ModelSerializer):
    members = MemberSerializer(many=True, read_only=True)

    class Meta:
        model = DiretoriaCargo
        fields = ('id', 'name', 'members')

class GestaoHistoricoSerializer(serializers.ModelSerializer):
    membros = MembroHistoricoSerializer(many=True, read_only=True)

    class Meta:
        model = GestaoHistorico
        fields = ('id', 'name', 'mandato', 'membros')

class ResearchGroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = ResearchGroup
        fields = ('id', 'name', 'description', 'responsible_professors', 'logo')

class StudentEntitySerializer(serializers.ModelSerializer):
    class Meta:
        model = StudentEntity
        fields = ('id', 'name', 'logo')