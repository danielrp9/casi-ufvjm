from django.contrib import admin
from .models import Document, RegimentoInterno, Estatuto

@admin.register(Document)
class DocumentAdmin(admin.ModelAdmin):
    list_display = ('title', 'publication_date')
    list_filter = ('publication_date',)
    search_fields = ('title', 'description')

@admin.register(RegimentoInterno)
class RegimentoInternoAdmin(admin.ModelAdmin):
    list_display = ('title', 'publication_date')

@admin.register(Estatuto)
class EstatutoAdmin(admin.ModelAdmin):
    list_display = ('title', 'publication_date')