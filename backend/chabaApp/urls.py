from django.urls import path

from . import views
urlpatterns = [
    path("", views.index, name="index"),
    path("church", views.HomeController_churchService, name='church'),
    path('home', views.HomeController_home, name='home'),
    path('library', views.HomeController_library, name='library'),
    path('announcements', views.HomeController_announcements, name='announcements'),
    path('chat', views.HomeController_chat, name='chat'),
    path('introduction', views.HomeController_introduction, name='introduction'),
    path('recordings', views.HomeController_recordings, name='recordings'),
    path('user', views.HomeController_user, name='user'),
    path('logout', views.HomeController_logout, name='logout'),
    path('radio', views.RadioController_radio, name='radio'),
    path('get-messages', views.HomeController_getMessages, name='get-messages')
]


