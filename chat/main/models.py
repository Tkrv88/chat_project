from django.db import models

class Persone(models.Model):
    login = models.CharField(max_length=100)
    password = models.CharField(max_length=100)
    first_name = models.CharField(max_length=50)
    last_name = models.CharField(max_length=50)
# Create your models here.
