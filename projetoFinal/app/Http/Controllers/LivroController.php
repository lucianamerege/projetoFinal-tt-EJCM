<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Livro;

class LivroController extends Controller
{
    public function createLivro(Request $request){
        $livro = new Livro;

        $livro->name = $request->name;
        $livro->autor = $request->autor;
        $livro->preco = $request->preco;
        $livro->resumo = $request->resumo;
        $livro->save();
        
        return response()->json([$livro]);
    }
    
    public function listLivro(){
        $livro = Livro::all();
        return response()->json($livro);
    }
    
    public function showLivro($id){
        $livro = Livro::findOrFail($id);
        return response()->json([$livro]);
    }
    
    public function updateLivro(Request $request, $id){
        $livro = Livro::find($id);
        
        if($livro){
            if($request->name){
                $livro->name = $request->name;
            }
            if($request->autor){
                $livro->autor = $request->autor;
            }
            if($request->preco){
                $livro->preco = $request->preco;
            }
            if($request->resumo){
                $livro->resumo = $request->resumo;
            }
            $livro->save();
            return response()->json([$livro]);
        }
        else{
            return response()->json(['Este livro não existe']);
        }
    }
    
    public function deleteLivro($id){
        Livro::destroy($id);
        return response()->json(['Livro Deletado']);
    }
}
