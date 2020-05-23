from django.db import models
from django.conf import settings
from ckeditor_uploader.fields import RichTextUploadingField
from django.utils.safestring import mark_safe 

# Create your models here.
def image_folder(instance, filename):
	filename = instance.title +'.'+filename.split('.')[1]
	return"{0}/{1}".format(instance.title, filename)



class Course(models.Model):
	
	title = models.CharField(max_length=60, unique=True)
	image = models.FileField(upload_to=image_folder)
	slug = models.SlugField('Kalit so`z *',max_length=25)	
	description = models.TextField('Kurs xaqida *',max_length=1550)
	status = models.BooleanField(default=True)
	groups = models.PositiveIntegerField(default=0, blank=True)
	studends = models.PositiveIntegerField(default=0, blank=True)
	reg = models.DateTimeField(auto_now_add=True)
	bot = models.BooleanField(default=False)

	def __str__(self):
		return self.title

	# def get_url(self):
	# 	return reverse('moderator:course_deteil', kwargs = {'course_id': self.id })	

class UserAccount(models.Model):
	user = models.OneToOneField(settings.AUTH_USER_MODEL, on_delete=models.CASCADE,null=True, db_index=True)
	courses = models.ManyToManyField(Course)
	#course = models.ForeignKey(Course, on_delete=models.PROTECT, null=True, db_index=True)
	email = models.EmailField('Email', unique=True,blank=True)
	name = models.CharField('Ismi',max_length=25,blank=True)
	last_name = models.CharField('Familyasi',max_length=25,blank=True)
	adres = models.CharField("Manzil",max_length=355,blank=True)
	info = models.CharField("User xaqida",max_length=755,blank=True)
	phone = models.CharField("Telefon",max_length=16,blank=True)
	telegram_id = models.CharField("Telegram ID",max_length=20,blank=True,db_index=True)
	limit_to = models.CharField(max_length=30, blank=True)
	cur_course = models.CharField(max_length=60, blank=True)
	send_sms_date = models.CharField(max_length=30, blank=True)
	rating = models.PositiveIntegerField(default=0)
	is_teacher = models.BooleanField(default=False)
	free = models.BooleanField(default=True)
	premium = models.BooleanField(default=False)
	gold = models.BooleanField(default=False)
	learning = models.BooleanField(default=False)
	status = models.BooleanField(default=True)
	bot = models.BooleanField(default=False)
	reg = models.DateTimeField(auto_now_add=True)


	def __str__(self): 
		return self.user.username


class Lesson(models.Model):
	course = models.ForeignKey(Course,on_delete=models.PROTECT, db_index=True)
	title = models.CharField(max_length=260)
	slug = models.SlugField('Kalit so`z *',max_length=85)
	number = models.PositiveIntegerField(default=0)
	url = models.CharField(max_length=50, blank=True)
	avilable = models.BooleanField(default=True)
	lock = models.BooleanField(default=True)
	reg_date = models.DateTimeField(auto_now_add=True)	
	
	def get_absolute_url(self):
		return reverse('edu:django', kwargs = {'number':self.number, 'slug':self.slug})

	def __str__(self):
		return self.title 



class Learn(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE,null=True,db_index=True)
	student = models.ForeignKey(UserAccount, on_delete=models.CASCADE,db_index=True)
	lesson = models.ForeignKey(Lesson,on_delete=models.CASCADE,db_index=True)
	reg_date = models.DateTimeField(auto_now_add=True)
	ball = models.PositiveIntegerField(default=0)
	avilable = models.BooleanField(default=False)	

	def __str__(self):
		return self.lesson.title 


class Question(models.Model):
	lesson = models.ForeignKey(Lesson, on_delete=models.PROTECT,null=True)
	query = models.CharField(max_length=950)
	number = models.PositiveIntegerField(default=0, blank=True)
	reg_data = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.query
	
class Variant(models.Model):
	query = models.ForeignKey(Question, on_delete=models.CASCADE)
	variant = models.CharField(max_length=550)
	is_answer = models.BooleanField("To'g'ri javob",default=False)	
	number = models.PositiveIntegerField(default=0, blank=True)
	reg_data = models.DateTimeField(auto_now_add=True)

	def __str__(self):
		return self.variant
	class Meta:
		ordering = ['?']	
	
class CurrentLesson(models.Model):
	course = models.ForeignKey(Course, on_delete=models.CASCADE,null=True,db_index=True)
	student = models.ForeignKey(UserAccount, on_delete=models.CASCADE,db_index=True)

class Data(models.Model):
	account = models.OneToOneField(settings.AUTH_USER_MODEL,on_delete=models.CASCADE,null=True, db_index=True)
	email = models.CharField('Ismi',max_length=25,blank=True)
	password = models.CharField('Familyasi',max_length=25,blank=True)

	def __str__(self):
		return self.email

class Message(models.Model):
	name = models.CharField('Ismi',max_length=25)
	email = models.CharField("Email",max_length=55,db_index=True)
	message = models.CharField('Xabar',max_length=1225)

	def __str__(self):
		return self.name

class Post(models.Model):
    author = models.CharField('auth.User',max_length=200)
    title = models.CharField(max_length=200)
    text = RichTextUploadingField()
    
    def display_my_safefield(self): 
        return mark_safe(self.text)