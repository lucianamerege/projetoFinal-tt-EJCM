<?php

use Illuminate\Database\Seeder;
use App\Livro;
use App\User;

class LivroTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('livros')->insert([
            'name' => 'A Guerra dos Tronos. Crônicas de Gelo e Fogo - Volume 1',
            'genero' => 'Fantasia',
            'autor' => 'George R R Martin',
            'preco' => '97.50',
            'resumo' => 'O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem… e onde um inimigo morto é algo a ser admirado. Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância. Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.',
            'estado' => 'Perfeito',
            'status' => '1'
        ]);

        DB::table('livros')->insert([
            'name' => 'Harry Potter e a Pedra Filosofal',
            'genero' => 'Fantasia',
            'autor' => 'J.K.Rowling',
            'preco' => '10.00',
            'resumo' => 'Harry Potter vive com os tios Dursley, onde é mal tratado até completar seus 11 anos. É com essa idade que o jovem bruxo começa a receber cartas da escola de Hogwarts. Na noite de seu aniversário Harry é visitado por Hagrid (um ser gigante que trabalha para o diretor de Hogwarts), o qual revela que Harry é filho de bruxos e foi convidado a ingressar na escola de bruxaria. A verdade é toda revelada a Harry Potter, que seus pais foram mortos pelo terrível bruxo Voldemort e que a sua cicatriz era marca da tentativa de assassinato que Harry sofrera.Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.',
            'estado' => 'Precário',
            'status' => '1'
        ]);


        DB::table('users')->insert([
             'name' => 'Usuário',
             'email' => 'usuario@admin.com',
             'password' => Hash::make('admin'),
             'isAdmin' => '1'
         ]);

    }
}
