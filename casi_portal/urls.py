from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from users.views import CustomUserViewSet
from portal.views import NewsViewSet, EventViewSet, news_list_view, news_detail_view, events_list_view, BannerViewSet
from docs.views import DocumentViewSet, documents_list_view, RegimentoInternoViewSet, EstatutoViewSet
from team.views import MemberViewSet, ResearchGroupViewSet, StudentEntityViewSet, home_view, research_groups_list_view, DiretoriaCargoViewSet, diretoria_list_view, GestaoHistoricoViewSet, about_view

from django.conf import settings
from django.conf.urls.static import static

router = DefaultRouter()
router.register(r'users', CustomUserViewSet)
router.register(r'news', NewsViewSet)
router.register(r'events', EventViewSet)
router.register(r'documents', DocumentViewSet)
router.register(r'regimento', RegimentoInternoViewSet)
router.register(r'estatuto', EstatutoViewSet)
router.register(r'diretoria-cargos', DiretoriaCargoViewSet)
router.register(r'gestoes-historicas', GestaoHistoricoViewSet)
router.register(r'members', MemberViewSet)
router.register(r'research-groups', ResearchGroupViewSet)
router.register(r'entities', StudentEntityViewSet)
router.register(r'banners', BannerViewSet)

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include(router.urls)),
    path('', home_view, name='home'),
    path('noticias/', news_list_view, name='news_list'),
    path('noticias/<int:pk>/', news_detail_view, name='news_detail'),
    path('documentos/', documents_list_view, name='documents_list'),
    path('grupos-de-pesquisa/', research_groups_list_view, name='research_groups_list'),
    path('eventos/', events_list_view, name='events_list'),
    path('diretoria/', diretoria_list_view, name='diretoria_list'),
    path('sobre-nos/', about_view, name='about'),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)