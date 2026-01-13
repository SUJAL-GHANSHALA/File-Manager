<?php

namespace App\Http\Requests;

use App\Http\Requests\BaseRequest;

class LoginRequest extends BaseRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'email' => ['required', 'email'],
            'password' => ['required'],
        ];
    }
    
    /**
     * messages
     *
     * @return array
     */
    public function messages(): array
    {
        return [
            'email.required' => __('messages.field_required', ['attribute' => 'Email']),
            'email.email' => __('messages.invalid_format', ['attribute' => 'Email']),
            'password.required' => __('messages.field_required', ['attribute' => 'Password']),
        ];
    }
}
