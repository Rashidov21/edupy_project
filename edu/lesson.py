from django.shortcuts import render
from django.http import HttpResponseRedirect,JsonResponse
from .models import *
from django.contrib import messages
from django.views.generic import View
from django.urls import reverse
from django.contrib.auth.decorators import login_required
from django import template
register = template.Library()

def lessons(request, user_id, course_name):
	user = UserAccount.objects.get(id=user_id)
	course = Course.objects.get(title__iexact=course_name)
	lessons = Learn.objects.filter(student=user,course=course)
	context = {'user':user,'course':course,'lessons':lessons}
	return render(request, 'student/lessons.html',context)


def query_result(request):
	user_id = request.POST['user_id']	
	query_one = request.POST['query_1']	
	query_two = request.POST['query_2']	
	query_there = request.POST['query_3']
	data = {'status':'ok'}
	return JsonResponse(data)	