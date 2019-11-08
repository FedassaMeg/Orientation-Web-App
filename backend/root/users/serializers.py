from rest_framework import serializers
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):
    username = serializers.CharField(required=False)

    class Meta:
        model = CustomUser
        fields = ('id', 'username', 'password',
                  'first_name', 'last_name', 'role', 'site_admin', 'is_staff')

    def get_validation_exclusion(self):
        exclusions = super(UserSerializer, self).get_validation_exclusion()
        return exclusions + ['username']

    def create(self, validated_data):
        user = CustomUser(
            first_name=validated_data['first_name'],
            last_name=validated_data['last_name'],
            username=validated_data['first_name'][0].lower(
            ) + validated_data['last_name'].lower(),
            role=validated_data['role'],

        )
        user.set_password(validated_data['password'])
        user.save()
        return user
