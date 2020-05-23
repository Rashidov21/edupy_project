from django.contrib import admin
from .models import *

# Register your models here.
@admin.register(UserAccount)
class UserAccountAdmin(admin.ModelAdmin):
	list_display = ['user','email','limit_to','is_teacher']
	list_display_links = ['email']
	list_filter = ['is_teacher']
	search_fields = ['email','id']

admin.site.register(Data)
admin.site.register(Message)
admin.site.register(Course)
admin.site.register(Post)
admin.site.register(Learn)

admin.site.register(Variant)

@admin.register(Question)
class QuestionAdmin(admin.ModelAdmin):
	list_display = ['lesson','query','number']


@admin.register(Lesson)
class LessonAdmin(admin.ModelAdmin):
	list_display = ['course','title','number']
	prepopulated_fields = {"slug": ("title",)}
