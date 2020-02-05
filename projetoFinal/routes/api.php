<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});

// ROTAS PARA USER
Route::get('listaUser', 'UserController@listUser'); //rota para listar um user
Route::get('mostraUser/{id}', 'UserController@showUser');//rota para mostrar um user específico
Route::post('criaUser', 'UserController@createUser');//rota para criar um user
Route::put('atualizaUser/{id}', 'UserController@updateUser');//rota para atualizar um user específico
Route::delete('deletaUser/{id}', 'UserController@deleteUser');//rota para deletar um user específico

//ROTAS PARA LIVROS
Route::get('listaLivro', 'LivroController@listLivro');//rota para listar uma livro
Route::get('mostraLivro/{id}', 'LivroController@showLivro');//rota para mostrar uma livro específica
Route::post('criaLivro', 'LivroController@createLivro');//rota para criar uma livro
Route::put('atualizaLivro/{id}', 'LivroController@updateLivro');//rota para atualizar uma livro específica
Route::delete('deletaLivro/{id}', 'LivroController@deleteLivro');//rota para deletar uma livro específica

//ROTAS PARA FUNCIONALIDADES
Route::post('register', 'API\PassportController@register');
Route::post('login', 'API\PassportController@login');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout', 'API\PassportController@logout');
    Route::post('getDetails', 'API\PassportController@getDetails');
});

//ROTAS PARAS AS FOTOS DO USER
Route::get('showPhoto/{id}', 'UserController@showPhoto'); // mostra a foto do user
Route::get('downloadPhoto/{id}', 'UserController@downloadPhoto'); //Baixa a foto do user
