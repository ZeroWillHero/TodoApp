from django.db import models
from django.contrib.auth.models import User


class ToDo (models.Model):
    title = models.CharField(max_length=255)
    done = models.BooleanField(default=False)
    author = models.ForeignKey(User, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
