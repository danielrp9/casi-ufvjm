from django.contrib import admin
from .models import Member, ResearchGroup, StudentEntity, DiretoriaCargo, GestaoHistorico, MembroHistorico

class MemberInline(admin.TabularInline):
    model = Member
    extra = 1
    fields = ('name', 'role', 'photo')

class MembroHistoricoInline(admin.TabularInline):
    model = MembroHistorico
    extra = 1
    fields = ('name', 'role', 'photo')

@admin.register(DiretoriaCargo)
class DiretoriaCargoAdmin(admin.ModelAdmin):
    inlines = [MemberInline]
    list_display = ('name',)
    search_fields = ('name',)

@admin.register(GestaoHistorico)
class GestaoHistoricoAdmin(admin.ModelAdmin):
    inlines = [MembroHistoricoInline]
    list_display = ('name', 'mandato')
    search_fields = ('name', 'mandato')

@admin.register(Member)
class MemberAdmin(admin.ModelAdmin):
    list_display = ('name', 'role', 'cargo')
    search_fields = ('name', 'role')

@admin.register(ResearchGroup)
class ResearchGroupAdmin(admin.ModelAdmin):
    list_display = ('name', 'responsible_professors')
    search_fields = ('name', 'description')

@admin.register(StudentEntity)
class StudentEntityAdmin(admin.ModelAdmin):
    list_display = ('name',)
    search_fields = ('name',)