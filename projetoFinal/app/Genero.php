<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Genero extends Model
{
    public function users(){
        return $this->belongsToMany('App\User',"user_id");  // N-N com o User
    }
}
