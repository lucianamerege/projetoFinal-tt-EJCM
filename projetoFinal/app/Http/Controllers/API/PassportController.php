<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Auth;
use DB;
use App\User;

class PassportController extends Controller
{
    public $successStatus = 200;

    public function register(Request $request){
        $validator = Validator::make($request -> all(), [
            'name' => 'required',
            'email' => 'required|email',
            'password' => 'required',
            
        ]);
        if ($validator -> fails()) {
            return response()->json(['error' => $validator->errors()], 401);
        }
        $newUser = new User;
        $newUser->name = $request->name;
        $newUser->email = $request->email;
        $newUser->password = bcrypt($request->password);
        $newUser->isAdmin = $request->isAdmin;
        
        $success['token'] = $newUser->createToken('MyApp')->accessToken;
        $success['name'] = $newUser->name;

        $newUser->save();
        return response()->json(['success' => $success], $this->successStatus);
    }
    
    public function login(){
        if(Auth::attempt(['email' => request('email'),'password' => request('password')])){
            $user = Auth::user();
            $success['token'] = $user -> createToken('MyApp')->accessToken;
            return response()->json(['success' => $success], $this->successStatus);
        }
        else{
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }

    public function getDetails(){
        $user = Auth::user();
        return response() -> json(['success' => $user], $this->successStatus); //retorna as informações do usuário logado
    }

    public function logout(){
        $accessToken = Auth::user()->token();
        DB::table('oauth_refresh_tokens')->where('access_token_id', $accessToken->id)->update(['revoked' => true]);
        $accessToken->revoke();
        return response()->json(null, 204);
    }

    public function compraLivro($livro_id){
        $user = Auth::user();
        $livro = Livro::findOrFail($livro_id);
        $livro->status = false;
        $livro->user_id = $user->id;
        $livro->save();
        return response()->json(['Compra Efetuada']);

        //$user->notify(new Compra($user));
        //return response()->json(['compra' => 'Compra Feita!', 'preco' => $priceTotal]);
    }

    public function listHistorico(){
        $user = Auth::user();
        return response()->json($user->livros);
    }


}
