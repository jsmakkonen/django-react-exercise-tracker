from exercises.models import Exercise
from rest_framework import viewsets, permissions
from .serializers import ExerciseSerializer

# Exercise viewset


class ExerciseViewSet(viewsets.ModelViewSet):
    permission_classes = [
        permissions.IsAuthenticated
    ]

    serializer_class = ExerciseSerializer

    def get_queryset(self):
        return self.request.user.exercises.all()

    def perform_create(self, serializer):
        serializer.save(owner=self.request.user)
