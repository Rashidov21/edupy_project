from django.shortcuts import render
from django.http import HttpResponseRedirect,JsonResponse
from .models import *
from django.contrib import messages
from django.views.generic import View
from django.urls import reverse
from django.contrib.auth.decorators import login_required
# Create your views here.
def index (request):
	messages.add_message(request, messages.SUCCESS, 'ok xush kelibsiz')
	return render(request, 'pages/index.html')

class ProfilView(View):
	def get(self, request,user_id):
		u = request.user
		if u.is_anonymous or u.is_superuser:
			return HttpResponseRedirect(reverse('edu:page_views', args = ['signin']))
		try:
			user = UserAccount.objects.get(user=u)
			my_courses = user.courses.all()
			courses = Course.objects.all()
			lessons = Lesson.objects.all()
			context = {'user':user,'courses':courses,'lessons':lessons,'my_courses':my_courses}
			if user.is_teacher:
				return render(request, 'teacher-account.html',context)
			else:

				return render(request, 'pages/student-account.html',context)
		except:		
				return render(request, 'pages/student-account.html')


class TaskView(View):
	def get(self, request,katalog_name, number,slug):
		l = Lesson.objects.get(slug=slug)
		course = l.course
		next_l = int(l.number) + 1
		next_lesson = Lesson.objects.get(number=next_l,course=course) 
		try:
			querys = Question.objects.filter(lesson=l)
			# try:
			# 	next_l = int(l.number) + 1
			# 	next_lesson = Lesson.objects.get(number=next_l)
			# except:
			# 	next_lesson = 'end'	
		except:
			querys = False
		print(next_lesson)	
		lessons = Lesson.objects.all()
		context = {'lessons':lessons,'querys':querys,'next_lesson':next_lesson}
		return render(request, '{0}/lesson_{1}.html'.format(katalog_name,number), context)


def insert_course(request, user_id,course_id):
	
	user = UserAccount.objects.get(id=user_id)
	course = Course.objects.get(id=course_id)
	user.courses.add(course)
	user.learning = True
	user.free = True
	user.cur_course = course.title
	user.save()
	lessons = Lesson.objects.filter(course=course)
	lesson = Lesson.objects.get(course=course,number=0)
	courses = user.courses
	for l in lessons:
		Learn.objects.create(student=user,lesson=l,course=course)
	context = {'lessons':lessons,'user':user,'courses':courses}
	#return render(request, 'student/my_courses.html',context)
	return HttpResponseRedirect(reverse('edu:student_account', args = [user.id ]))
	return HttpResponseRedirect(reverse('edu:django', kwargs = {'number':0, 'slug':"nima-uchun-djangoni-organishim-kerak"}))





def course_view(request,course_name):
	return render(request, 'courses/{}.html'.format(course_name))

def page_views(request, page_name):
	return render(request, 'pages/{}.html'.format(page_name))


def course_detail(request):
	return render(request, 'pages/course_detail.html')



def student_account(request, user_id):
	return render(request, 'pages/student-account.html')

def teacher_account(request):
	return render(request, 'pages/teacher-account.html')

def tasks(request):
	return render(request, 'pages/tasks.html')

def frontend(request):
	return render(request, 'pages/front-end-courses.html')

def python (request,number,slug):
	lessons = Lesson.objects.all()
	context = {'lessons':lessons}
	return render(request, 'python/lesson_{}.html'.format(number), context)

def accpet_message(request):
	name = request.POST['name']
	email = request.POST['email']
	message = request.POST['message']
	try:
		Message.objects.create(name=name,email=email,message=message)
		data = {'code':400}
	except:	
		data = {'code':200}
	return JsonResponse(data)