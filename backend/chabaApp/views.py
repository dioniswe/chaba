import sys
from os import environ

from pathlib import Path

from django.shortcuts import render
from django.http import HttpResponse
from django.template import loader
import environ
import os
from django.http import JsonResponse
import pdb;
# Create your views here.
def index(request):
    return HttpResponse("Hello, world. You're at the polls index.")


''' to be added
.header('Access-Control-Allow-Origin', '*');
'''
def HomeController_churchService(request):

    BASE_DIR = Path(__file__).resolve().parent
    env = environ.Env()
    environ.Env.read_env(os.path.join(BASE_DIR, '..', '.env'))  # Pfad anpassen
    streamingServer = env('STREAMING_SERVER_HOST')
    streamingServerPort = env('STREAMING_SERVER_PORT')
    streamingServerKey = env('STREAMING_SERVER_KEY')
    videoSource = request.scheme + '://' + streamingServer + ":" + streamingServerPort + '/hls/'+streamingServerKey + '.m3u8'
    #flashVideoSource = request.getScheme() + '://'+ 'streaming-outbound.'+ request.getHttpHost()+'/live/'+streamingServerHtml5StreamingKey+'.flv';
    #template = loader.get_template("chabaApp/service.html")
    #print (videoSource)
    #source = "http://localhost:8080/hls/stream_name.m3u8"
    template = loader.get_template("service.html")
    context = {"videoSource": videoSource}
    return HttpResponse(template.render(context, request))

def HomeController_home(request):
    return 
    
def HomeController_library(request):
    return
    
def HomeController_announcements(request):
    return
    
def HomeController_chat(request):
    return
    
def HomeController_introduction(request):
    return

def HomeController_recordings(request):
    return
    
def HomeController_user(request):
    return

def HomeController_logout(request):
    return

def RadioController_radio(request):
    return

def RadioController_radio(request):
    return


def HomeController_messageReceived(request):
#    message = new Message()
#    messageContent = request('message')
#    message.message = messageContent
#    message.user_id = Auth::id()
#    message.save()
#    Log::info('received message, broadcasting now !')
#    broadcast(new MessageReceivedEvent(request.all()))
    return


def HomeController_getMessages(request):
    data = [{"message": "hallo"}]
    return JsonResponse(data, safe=False)

