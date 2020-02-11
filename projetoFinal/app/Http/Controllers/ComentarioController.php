<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Comentario;
use App\User;
use Carbon\Carbon;

class ComentarioController extends Controller
{
    public function createComentario(Request $request){
        
        $current = new Carbon();
        $comentario = new Comentario;
        
        $comentario->text = $request->text;
        $comentario->user_id = $request->user_id;
        $comentario->save();
        return response()->json([$comentario,$current]);
    }
    
    public function listComentario(){
        $comentario = Comentario::all();
        return response()->json($comentario);
    }
    
    public function showComentario($id){
        $comentario = Comentario::findOrFail($id);
        return response()->json([$comentario]);
    }
    public function updateComentario(Request $request, $id){
        $comentario = Comentario::find($id);
        if($comentario){
            if($request->text){
                $comentario->text = $request->text;
            }
            $comentario->save();
            return response()->json([$comentario]);
        }
        else{
            return response()->json(['Este comentario não existe']);
        }
    }
    public function deleteComentario($id){
        Comentario::destroy($id);
        return response()->json(['Comentario Deletado']);
    }
}
