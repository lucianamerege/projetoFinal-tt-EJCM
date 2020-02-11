<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Genero;

class GeneroController extends Controller
{
    public function createGenero(Request $request){
        $genero = new Genero;

        $genero->name = $request->name;
        $genero->save();
    
        return response()->json([$genero]);
    }

    public function listGenero(){
        $genero = Genero::all();
        return response()->json($genero);
    }

    public function showGenero($id){
        $genero = Genero::findOrFail($id);
        return response()->json([$genero]);
    }

    public function updateGenero(Request $request, $id){
        $genero = Genero::find($id);
    
        if($genero){
            if($request->name){
                $genero->name = $request->name;
            }
            $genero->save();
            return response()->json([$genero]);
        }
        else{
            return response()->json(['Este genero não existe']);
        }
    }

    public function deleteGenero($id){
        Genero::destroy($id);
        return response()->json(['Genero Deletado']);
    }
}
