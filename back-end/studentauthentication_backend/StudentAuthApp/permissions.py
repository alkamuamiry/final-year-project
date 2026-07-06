from rest_framework.permissions import BasePermission
from .models import AuthDevice

class IsValidDevice(BasePermission):
    def has_permission(self, request, view):
        device_key = request.headers.get("X-DEVICE-KEY")

        if not device_key:
            return False

        return AuthDevice.objects.filter(
            api_key=device_key,
            is_active=True
        ).exists()