from django.urls import path, include

urlpatterns = [
    path('', include('frontend.urls')),
    path('', include('exercises.urls')),
    path('', include('accounts.urls'))
]
