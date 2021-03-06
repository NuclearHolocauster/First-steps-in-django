from django.urls import path, include
from .views import *


app_name = 'backend'
urlpatterns = [

    path('user/create', UserCreateView.as_view()),
    path('room/create', RoomCreateView.as_view()),
    path('equipment/create', EquipmentCreateView.as_view()),
    path('reservation/create', ReservationCreateView.as_view()),
    path('ticket/create', TicketCreateView.as_view()),
    path('user/all', UserListView.as_view()),
    path('room/all', RoomListView.as_view()),
    path('equipment/all', EquipmentListView.as_view()),
    path('reservation/all', ReservationListView.as_view()),
    path('ticket/all', TicketListView.as_view()),
    path('user/<int:pk>', UserDetailView.as_view()),
    path('room/<pk>', RoomDetailView.as_view()),
    path('equipment/<int:pk>', EquipmentDetailView.as_view()),
    path('ticket/<int:pk>', TicketDetailView.as_view()),
    path('reservation/<int:pk>', ReservationDetailView.as_view()),
    path('equipment/all?audience_number=<int:pk>', EquipmentListView.as_view()),
    path('equipment/all?equipment_name=<char>', EquipmentListView.as_view()),
    path('equipment/all?equipment_name=<char>&?capacity=<int>', EquipmentListView.as_view()),
    path('room/all?capacity=<char>', RoomListView.as_view())
]
