from django.contrib import admin
from .models import Room, Amenity


@admin.action(description="모든 가격을 0원으로 바꾸기")
def reset_prices(model_admin, req, rooms):
    for room in rooms.all():
        room.price = 0
        room.save()


@admin.register(Room)
class RoomAdmin(admin.ModelAdmin):
    actions = (reset_prices,)

    list_display = (
        "name",
        "price",
        "kind",
        "total_amenities",
        "rating",
        "owner",
        "created_at",
    )

    list_filter = (
        "country",
        "city",
        "price",
        "rooms",
        "pet_friendly",
        "kind",
        "created_at",
        "updated_at",
    )

    search_fields = (
        "name",
        "price",
    )


@admin.register(Amenity)
class AmenityAdmin(admin.ModelAdmin):
    list_display = ("name", "description", "created_at", "updated_at")
    readonly_fields = ("created_at", "updated_at")
