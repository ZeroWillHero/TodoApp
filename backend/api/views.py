from django.shortcuts import render
from .models import ToDo
from .serializers import TodoSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView

class TodoListView(ListCreateAPIView):
    queryset = ToDo.objects.all()
    serializer_class = TodoSerializer

class TodoDetailView(RetrieveUpdateDestroyAPIView):
    queryset = ToDo.objects.all()
    serializer_class = TodoSerializer


class TodoListView (APIView):
    def get(self,request):
        todos = ToDo.objects.all()
        serializer = TodoSerializer(todos,many=True)
        return Response (serializer.data)
    
    def post (self,request) :
        serializer = TodoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def patch(self,request,pk):
        try :
            todo = ToDo.object.get(pk=pk)

        except ToDo.DoesNotExist:
            return Response (status=status.HTTP_404_NOT_FOUND)
        
        serializer = TodoSerializer(todo, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

    def delete(self, request,pk):
        try:
            todo = ToDo.objects.get(pk=pk)
            todo.delete()
            return Response(status=status.HTTP_204_NO_CONTENT)

        except ToDo.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
    



