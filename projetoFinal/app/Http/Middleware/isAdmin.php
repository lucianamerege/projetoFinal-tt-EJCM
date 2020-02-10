<?php

namespace App\Http\Middleware;
use Auth;
use Closure;

class isAdmin
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        
        $user = Auth::user();
        if($user->isAdmin == 1){
            return $next($request);
        }
        else{
            return response()->json(['Usuário não é Admin']);
        }
    }
}
