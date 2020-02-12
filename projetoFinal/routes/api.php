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

// ROTAS PARA COMENTÁRIOS
Route::get('listaComentario', 'ComentarioController@listComentario'); //rota para listar um Comentario
Route::get('mostraComentario/{id}', 'ComentarioController@showComentario');//rota para mostrar um Comentario específico
Route::post('criaComentario', 'ComentarioController@createComentario');//rota para criar um Comentario
Route::put('atualizaComentario/{id}', 'ComentarioController@updateComentario');//rota para atualizar um Comentario específico
Route::delete('deletaComentario/{id}', 'ComentarioController@deleteComentario');//rota para deletar um Comentario específico

// ROTAS PARA HISTÓRICO
Route::get('listaHistorico', 'HistoricoController@listHistorico'); //rota para listar um Historico
Route::get('mostraHistorico/{id}', 'HistoricoController@showHistorico');//rota para mostrar um Historico específico
Route::post('criaHistorico', 'HistoricoController@createHistorico');//rota para criar um Historico
Route::put('atualizaHistorico/{id}', 'HistoricoController@updateHistorico');//rota para atualizar um Historico específico
Route::delete('deletaHistorico/{id}', 'HistoricoController@deleteHistorico');//rota para deletar um Historico específico

// ROTAS PARA GENERO DE LIVROS
Route::get('listaGenero', 'HistoricoController@listGenero'); //rota para listar um Genero
Route::get('mostraGenero/{id}', 'HistoricoController@showGenero');//rota para mostrar um Genero específico
Route::post('criaGenero', 'HistoricoController@createGenero');//rota para criar um Genero
Route::put('atualizaGenero/{id}', 'HistoricoController@updateGenero');//rota para atualizar um Genero específico
Route::delete('deletaGenero/{id}', 'HistoricoController@deleteGenero');//rota para deletar um Genero específico

//ROTAS PARA FUNCIONALIDADES
Route::post('register', 'API\PassportController@register');
Route::post('login', 'API\PassportController@login');

Route::group(['middleware' => 'auth:api'], function() {
    Route::get('logout', 'API\PassportController@logout');
    Route::post('getDetails', 'API\PassportController@getDetails')->middleware('isAdmin');
    Route::get('listHistorico/{user_id}', 'API\PassportController@listHistorico');
    Route::put('compraLivro/{livro_id}', 'API\PassportController@compraLivro');
});

//ROTAS PARAS AS FOTOS DO USER
Route::get('showPhoto/{id}', 'UserController@showPhoto'); // mostra a foto do user
Route::get('downloadPhoto/{id}', 'UserController@downloadPhoto'); //Baixa a foto do user
Route::get('showPhoto/{livro_id}', 'LivroController@showPhoto'); // mostra a foto do livro
Route::get('downloadPhoto/{livro_id}', 'LivroController@downloadPhoto'); //Baixa a foto do livro
