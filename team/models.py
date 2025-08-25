from django.db import models
from ckeditor.fields import RichTextField

class DiretoriaCargo(models.Model):
    name = models.CharField(max_length=100, unique=True, help_text="Ex: Presidência, Tesouraria, etc.")
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Cargo da Diretoria"
        verbose_name_plural = "Cargos da Diretoria"
        ordering = ['name'] # Mantém a ordem alfabética para os cargos

class Member(models.Model):
    cargo = models.ForeignKey(DiretoriaCargo, on_delete=models.CASCADE, related_name='members', null=True)
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    bio = models.TextField(blank=True, null=True)
    photo = models.ImageField(upload_to='team/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.role}"

    class Meta:
        verbose_name = "Membro da Diretoria"
        verbose_name_plural = "Membros da Diretoria"
        ordering = ['role'] # Mantém a ordem alfabética por função

class ResearchGroup(models.Model):
    name = models.CharField(max_length=200)
    description = models.TextField()
    responsible_professors = models.CharField(max_length=255)
    logo = models.ImageField(upload_to='research_groups/', blank=True, null=True)

    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Grupo de Pesquisa"
        verbose_name_plural = "Grupos de Pesquisa"

class StudentEntity(models.Model):
    name = models.CharField(max_length=200)
    logo = models.ImageField(upload_to='entity_logos/')
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Entidade Discente"
        verbose_name_plural = "Entidades Discentes"

class GestaoHistorico(models.Model):
    name = models.CharField(max_length=200)
    mandato = models.CharField(max_length=100, blank=True, null=True)
    
    def __str__(self):
        return self.name

    class Meta:
        verbose_name = "Gestão Histórica"
        verbose_name_plural = "Gestões Históricas"
        ordering = ['-mandato'] # Ordena os mais recentes primeiro

class MembroHistorico(models.Model):
    gestao = models.ForeignKey(GestaoHistorico, on_delete=models.CASCADE, related_name='membros')
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100)
    photo = models.ImageField(upload_to='membros_historicos/', blank=True, null=True)

    def __str__(self):
        return f"{self.name} - {self.role}"
    
    class Meta:
        verbose_name = "Membro Histórico"
        verbose_name_plural = "Membros Históricos"
        ordering = ['name'] # Mantém a ordem alfabética para os membros