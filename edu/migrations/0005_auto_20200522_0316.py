# Generated by Django 3.0.6 on 2020-05-22 03:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('edu', '0004_auto_20200522_0305'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='student',
        ),
        migrations.AddField(
            model_name='useraccount',
            name='course',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, to='edu.Course'),
        ),
    ]
