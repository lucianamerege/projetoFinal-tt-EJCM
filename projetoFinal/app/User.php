<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Passport\HasApiTokens;

class User extends Authenticatable
{
    use Notifiable;
    use HasApiTokens;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //Adicionando One-to-Many com comentario
    public function comentarios(){
        return $this->hasMany('App\Comentario',"user_id");

    }
    public function livros(){
        return $this->hasMany('App\Livro',"user_id");
    }

    public function historico(){
        return $this->hasOne('App\Historico',"id");
    }

    public function genero(){
        return $this->hasMany('App\Genero',"id");  // N-N com o Gênero
    }



}
