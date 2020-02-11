<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateGenerosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('generos', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('terror');
            $table->string('romance');
            $table->string('drama');
            $table->string('comedia');
            $table->string('fantasia');
            $table->string('ficcao');
            $table->string('misterio');
            $table->string('biografia');
            $table->string('suspense');
            $table->string('autobiografia');
            $table->string('contos');
            $table->string('policial');
            $table->string('poesia');
            $table->timestamps();
        });
        
        
        //Adicionando Foreign Key
        Schema::table('generos', function (Blueprint $table){
            $table->foreign('user_id')->references('id')->on('users')->onDelete('cascade');
        });


    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('generos');
    }
}
