from django.shortcuts import render
from django.views.generic.edit import FormView
from .forms import RegisterForm, LoginForm

# Create your views here.

def index(request):
    return render(request, 'index.html', { 'email': request.session.get('user') })
    # 로그인했을 때 session 안에 있는 user를 보여주려고 값 넘김

class RegisterView(FormView):
    template_name = 'signUp.html'
    form_class = RegisterForm
    success_url = '/'

class LoginView(FormView):
    template_name = 'signIn.html'
    form_class = LoginForm
    success_url = '/'

    def form_valid(self, form):
        self.request.session['user'] = form.email

        return super().form_valid(form)