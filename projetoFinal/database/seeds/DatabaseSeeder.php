<?php

use Illuminate\Database\Seeder;
use App\Livro;
use App\User;


class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $this->call(LivroTableSeeder::class);
    }
}
