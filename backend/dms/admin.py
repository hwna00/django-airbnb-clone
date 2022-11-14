from django.contrib import admin
from .models import DmRoom, Message


@admin.register(DmRoom)
class DmRoomAdmin(admin.ModelAdmin):
    list_display = (
        "__str__",
        "created_at",
        "updated_at",
    )

    list_filter = ("created_at",)


@admin.register(Message)
class MessageAdmin(admin.ModelAdmin):
    list_display = (
        "text",
        "user",
        "room",
        "created_at",
    )

    list_filter = ("created_at",)
