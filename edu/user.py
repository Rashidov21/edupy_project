from django.shortcuts import render
from django.views.generic import View
from django.contrib.auth  import get_user_model
User = get_user_model()
from django.http import HttpResponseRedirect,JsonResponse
from django.contrib import messages
from django.urls import reverse
from django.core.mail import send_mail
from django.contrib.auth import authenticate, login
from .models import *

class CreateAccount(View):
	def post(self, request):
		username = request.POST['email']
		password = request.POST['password']
		copy_password = request.POST['copy_password']
		if User.objects.filter(username=username).exists():
			messages.add_message(request,messages.WARNING, "Bunday email bilan ro'yxatdan o'tilgan")
			return HttpResponseRedirect(reverse('edu:page_views' , args = ['signup']))
		if password != copy_password:	
			messages.add_message(request,messages.WARNING, "Kiritilgan parollar bir xil emas")
			return HttpResponseRedirect(reverse('edu:page_views' , args = ['signup']))
		if len(password) < 8:	
			messages.add_message(request,messages.WARNING, "Parol 8 ta belgidan kam bo'lmasligi kerak")
			return HttpResponseRedirect(reverse('edu:page_views' , args = ['signup']))
		try:
			u = User.objects.create_user(username, password=password)
			account = UserAccount.objects.create(user=u, email=username)
			Data.objects.create(account=u,email=username,password=password)
			try:
				title = "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi"
				message = "Xurmatli foydalanuvchi EduPy ga xush kelibsiz\n\nLogin: {0} \n Parol :{1}\n\n Biz bilan o'rganing, \ntajriba orttiring,\nko'plab do'st va xamkasblarga ega bo'ling".format(username, password)
				send_mail(title, message ,'navbaxor2016@mail.ru', [username],fail_silently=False)
			except:
				send = False
			messages.add_message(request,messages.SUCCESS, "Ro'yxatdan o'tish muvaffaqiyatli yakunlandi")
			return HttpResponseRedirect(reverse('edu:index'))
		except:
			messages.add_message(request,messages.WARNING, "Xatolik yuz berdi boshqatdan urinib ko'ring")
			return HttpResponseRedirect(reverse('edu:page_views' , args = ['signup']))

class LoginView(View):
	def post(self, request):
		username = request.POST['username']						
		password = request.POST['password']
		user = authenticate(request, username=username, password=password)
		if user is not None:
			l = login(request, user)
			messages.add_message(request, messages.SUCCESS,"Avtorizatsiya muvaffaqiyatli bajarildi") 	
			return HttpResponseRedirect(reverse('edu:index'))						
		else:	
			messages.add_message(request, messages.WARNING," Xatolik iltimos login parolni qaytadan tekshiring") 	
			return HttpResponseRedirect(reverse('edu:page_views' , args = ['signup']))

class RecoveryPassword(View):
	def post(self, request):									
		username = request.POST['username']
		# try:
		user = User.objects.get(username=username)
		data = Data.objects.get(account=user)
		password = data.password
		print(password)
		title = "Parolni tiklash"
		message = "Xurmatli foydalanuvchi\n EduPy ga kirish uchun parolingiz: \n\n {0}\n\n ".format( password)
		send_mail(title, message ,'navbaxor2016@mail.ru', [user.username],fail_silently=False)
		messages.add_message(request, messages.SUCCESS,"Parol email pochtangizga jo'natildi\nIltimos emailingizni tekshiring tekshiring") 	
		return HttpResponseRedirect(reverse('edu:page_views' , args = ['signin']))
		# except:
		# 	messages.add_message(request, messages.WARNING," Xatolik iltimos email manzilni qaytadan tekshiring") 	
		# 	return HttpResponseRedirect('/recovery')
				

