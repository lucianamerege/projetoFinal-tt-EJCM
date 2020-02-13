<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateLivrosTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('livros', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('genero');
            $table->string('autor');
            $table->float('preco');
            $table->longText('resumo');
            $table->string('estado');
            $table->string('info');
            $table->boolean('status')->default(true);
            $table->string('photo')->nullable();
            $table->unsignedBigInteger('vendedor_id')->nullable();
            $table->unsignedBigInteger('comprador_id')->nullable();
            $table->timestamps();
        });


        //Adicionando Foreign Key
        Schema::table('livros', function (Blueprint $table){
            $table->foreign('vendedor_id')->references('id')->on('users')->onDelete('cascade');
            $table->foreign('comprador_id')->references('id')->on('users')->onDelete('cascade');
        });

    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('livros');
    }
}
