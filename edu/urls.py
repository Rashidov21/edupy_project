from django.urls import path
from  .views import *
from  .lesson import *
from django.contrib.auth.views import PasswordChangeView
app_name = 'edu'

urlpatterns = [
  
    path('', index, name='index'),
    path('page/<str:page_name>', page_views, name='page_views'),
    path('course/<str:course_name>/', course_view, name='course_view'),
    path('frontend/', frontend, name='frontend'),
    path('student/<int:user_id>', ProfilView.as_view(), name='student_account'),
    path('teacher/', teacher_account, name='teacher_account'),
    path('tasks/', tasks, name='tasks'),
    path('python/', python, name='python'),
    path('query/result/', query_result, name='query_result'),
    path('<str:katalog_name>/tutorial/<int:number>/<str:slug>/', TaskView.as_view(), name='django'),
    path('recovery/', PasswordChangeView.as_view(template_name='pages/send_password.html'), name='send_password'),
    path('send_message/', accpet_message, name='send_message'),
    path('user/<int:user_id>/<str:course_name>/lessons/list/', lessons, name='lessons'),
    path('insert_course/<int:user_id>/<int:course_id>', insert_course, name='insert_course'),
       
]
