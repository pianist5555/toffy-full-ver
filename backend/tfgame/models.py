from django.db import models

# Create your models here.

class Tfgame(models.Model):
    id = models.AutoField(primary_key=True)
    
    title = models.CharField(max_length=50,
                             verbose_name='title')
    price = models.CharField(max_length=7,
                              verbose_name='price')
    href = models.CharField(max_length=30,
                              verbose_name='href')                                                  
    image = models.CharField(max_length=100,
                              verbose_name='image',
                              default='SOME STRING')
    rank = models.CharField(max_length=4,
                              verbose_name='rank')
    tag1 = models.CharField(max_length=2,
                              verbose_name='tag1',
                              default='0')
    tag2 = models.CharField(max_length=2,
                              verbose_name='tag2',
                              default='0')
    tag3 = models.CharField(max_length=2,
                              verbose_name='tag3',
                              default='0')
                                                                                  
    class Meta:
        db_table = 'toffy_game'
        verbose_name = '게임'
        verbose_name_plural = '게임'