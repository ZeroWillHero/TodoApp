from django.shortcuts import render
from .models import ToDo
from .serializers import TodoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
# Create your views here.


class TodoListView (APIView):
    def get(self,request):
        todos = ToDo.objects.all()
        serializer = TodoSerializer(todos,many=True)
        return Response (serializer.data)
