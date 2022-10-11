from itertools import product
from django.shortcuts import render
from django.shortcuts import render
import shopify
import urllib.request
import json
# Create your views here.

def index(request):

    return render(request, 'index.html')


