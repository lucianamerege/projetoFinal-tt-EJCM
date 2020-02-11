<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    public function livros(){
        return $this->belongsTo('App\Livro',"livro_id");
    }
}
