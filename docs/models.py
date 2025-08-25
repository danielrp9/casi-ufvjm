from django.db import models

class Document(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    file = models.FileField(upload_to='documents/')
    publication_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Documento"
        verbose_name_plural = "Documentos"
        ordering = ['-publication_date'] # Ordena os mais recentes primeiro

class RegimentoInterno(models.Model):
    title = models.CharField(max_length=200, default="Regimento Interno do CASI")
    file = models.FileField(upload_to='regimento/')
    publication_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title
        
    class Meta:
        verbose_name = "Regimento Interno"
        verbose_name_plural = "Regimento Interno"
        ordering = ['-publication_date'] # Ordena os mais recentes primeiro

class Estatuto(models.Model):
    title = models.CharField(max_length=200, default="Estatuto do CASI")
    file = models.FileField(upload_to='estatuto/')
    publication_date = models.DateField(auto_now_add=True)

    def __str__(self):
        return self.title

    class Meta:
        verbose_name = "Estatuto"
        verbose_name_plural = "Estatuto"
        ordering = ['-publication_date'] # Ordena os mais recentes primeiro