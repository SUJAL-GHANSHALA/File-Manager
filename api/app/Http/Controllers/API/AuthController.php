<?php

namespace App\Http\Controllers\API;

use Throwable;
use App\Traits\ApiResponse;
use Illuminate\Http\Request;
use App\Services\AuthService;
use Illuminate\Support\Facades\Log;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\RegisterRequest;


class AuthController extends Controller
{    
    use ApiResponse;

    protected $auth_service;
    
    /**
     * __construct
     *
     * @return void
     */
    public function __construct() {
        $this->auth_service = new AuthService();
    }

    /**
     * register
     *
     * @param  mixed $request
     * @return void
     */
    public function register(RegisterRequest $request) {
        try {
            $data = $this->auth_service->register($request);
            return $data;
        } catch (Throwable $th) {
            Log::error('Error registration: ' . $th->getMessage());
            return $this->errorApiResponse(__('messages.server_error'));
        }
    }
    
    /**
     * login
     *
     * @param  mixed $request
     * @return void
     */
    public function login(LoginRequest $request) {
        try {
            $data = $this->auth_service->login($request);
            return $data;
        } catch (\Throwable $th) {
            Log::error('Error login: ' . $th->getMessage());
            return $this->errorApiResponse(__('messages.server_error'));
        }
    }

    /**
     * for logging out the user
     *
     * @return void
     */
    public function logout(Request $request) {
        try {
            $data = $this->auth_service->logout($request);
            return $data;
        } catch (\Throwable $th) {
            Log::error('Error logout: ' . $th->getMessage());
            return $this->errorApiResponse(__('messages.server_error'));
        }
    }
}
