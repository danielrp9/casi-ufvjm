from django.db import models
from django.contrib.auth.models import AbstractUser

class CustomUser(AbstractUser):
    """
    Modelo de usuário personalizado para o portal do CASI.
    Herdado de AbstractUser para incluir campos adicionais, se necessário.
    """
    pass