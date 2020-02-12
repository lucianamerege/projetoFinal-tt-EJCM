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
            'autor' => 'George R R R R R R R Martin',
            'preco' => '97.50',
            'resumo' => 'O verão pode durar décadas. O inverno, toda uma vida. E a guerra dos tronos começou. Como Guardião do Norte, lorde Eddard Stark não fica feliz quando o rei Robert o proclama a nova Mão do Rei. Sua honra o obriga a aceitar o cargo e deixar seu posto em Winterfell para rumar para a corte, onde os homens fazem o que lhes convém, não o que devem… e onde um inimigo morto é algo a ser admirado. Longe de casa e com a família dividida, Eddard se vê cada vez mais enredado nas intrigas mortais de Porto Real, sem saber que perigos ainda maiores espreitam a distância.             Nas florestas ao norte de Winterfell, forças sobrenaturais se espalham por trás da Muralha que protege a região. E, nas Cidades Livres, o jovem Rei Dragão exilado na Rebelião de Robert planeja sua vingança e deseja recuperar sua herança de família: o Trono de Ferro de Westeros.',
            'estado' => 'perfeito',
            'status' => '1'
        ]);

        DB::table('users')->insert([
            'name' => 'Usuário',
            'email' => 'usuario@ejcm.com.br',
            'password' => Hash::make('123456'),
            'isAdmin' => '1'
        ]);

    }
}
