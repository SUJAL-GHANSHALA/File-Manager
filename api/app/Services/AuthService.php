<?php

namespace App\Services;

use App\Models\User;
use App\Traits\ApiResponse;
use Illuminate\Support\Str;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\Http;
use App\Http\Requests\Auth\RegisterRequest;


class AuthService
{
    use ApiResponse;

    /**
     * login
     *
     * @param  mixed $request
     * @return void
     */
    public function login($request) {
        $user = User::whereEmail($request['email'])->first();

        if ($user && Hash::check($request['password'], $user->password)) {
            return $this->successApiResponse(
                __('messages.auth.login_success'),
                [
                    'access_token' => $user->createToken('authToken')->accessToken,
                ]
            );
        }

        return $this->unprocessableApiResponse(
            __('messages.auth.invalid_credentials')
        );
    }


    /**
     * register
     *
     * @param  mixed $request
     * @return void
     */
    public function register($request) {
        try {
            $validated_data = $request->validated();
            $validated_data['password'] = Hash::make($validated_data['password']);

            $user = User::create($validated_data);

            return $this->successApiResponse(__('messages.auth.register_success'));
        } catch (\Throwable $th) {
            Log::error('Error in register method: ' . $th->getMessage());
            return $this->unprocessableApiResponse(__('messages.server_error'));
        }
    }

    /**
     * logout
     *
     * @param  mixed $request
     * @return void
     */
    public function logout($request) {
        try {
            $tokenId = $request->user()->token()->id;

            DB::table('oauth_access_tokens')
                ->where('id', $tokenId)
                ->delete();

            return $this->successApiResponse(__('messages.logout_success'));
        } catch (\Throwable $th) {
            Log::error('Error in logout method: ' . $th->getMessage());
            return $this->unprocessableApiResponse(__('messages.server_error'));
        }
    }
}
