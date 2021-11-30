from django.contrib import admin

from .models import City, Record


@admin.register(City)
class CityAdmin(admin.ModelAdmin):
    list_display = ('id', 'name',)
    search_fields = ('name',)


@admin.register(Record)
class RecordAdmin(admin.ModelAdmin):
    list_display = ('id', 'city', 'date', 'temperature')
    search_fields = ('city', 'date')
    list_filter = ('city', 'date')
    empty_value_display = '---'
