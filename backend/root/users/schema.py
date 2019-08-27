import graphene
from graphene_django import DjangoObjectType

from .models import CustomUser


class CustomUserType(DjangoObjectType):
    class Meta:
        model = CustomUser


class Query(graphene.ObjectType):
    viewer = graphene.Field(CustomUserType)
    users = graphene.List(CustomUserType)

    def resolve_users(self, info):
        return CustomUser.objects.all()

    def resolve_viewer(self, info, **kwargs):
        user = info.context.user
        if user.is_authenticated:
            raise Exception('Not logged in!')

        return user


class CreateCustomUser(graphene.Mutation):
    user = graphene.Field(CustomUserType)

    class Arguments:
        password = graphene.String(required=True)
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        site_admin = graphene.Boolean()

    def mutate(self, info, password, first_name, last_name, site_admin):
        user = CustomUser(
            username=first_name[0].lower() + last_name.lower(),
            first_name=first_name,
            last_name=last_name,
            site_admin=site_admin,
        )
        user.set_password(password)
        user.save()

        return CreateCustomUser(user=user)


class Mutation(graphene.ObjectType):
    create_user = CreateCustomUser.Field()
