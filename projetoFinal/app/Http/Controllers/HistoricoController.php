<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Historico;

class HistoricoController extends Controller
{    
    public function createHistorico(Request $request){
        $historico = new Historico;

        $historico->name = $request->name;
        $historico->genero = $request->genero;
        $historico->autor = $request->autor;
        $historico->data = $request->data;
        $historico->save();
    
        return response()->json([$historico]);
    }

    public function listHistorico(){
        $historico = Historico::all();
        return response()->json($historico);
    }

    public function showHistorico($id){
        $historico = Historico::findOrFail($id);
        return response()->json([$historico]);
    }

    public function updateHistorico(Request $request, $id){
        $historico = Historico::find($id);
    
        if($historico){
            if($request->name){
                $historico->name = $request->name;
            }
            if($request->genero){
                $historico->genero = $request->genero;
            }
            if($request->autor){
                $historico->autor = $request->autor;
            }
            if($request->data){
                $historico->data = $request->data;
            }
            $historico->save();
            return response()->json([$historico]);
        }
        else{
            return response()->json(['Este historico não existe']);
        }
    }

    public function deleteHistorico($id){
        Historico::destroy($id);
        return response()->json(['Historico Deletado']);
    }
}
