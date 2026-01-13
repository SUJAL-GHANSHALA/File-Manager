<?php

namespace App\Http\Requests;

use App\Http\Requests\BaseRequest;

class RegisterRequest extends BaseRequest
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
            'name' => ['required','max:100'],
            'email' => ['required','email','unique:users'],
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
            'name.required' => __('messages.field_required', ['attribute' => 'Name']),
            'name.max' => __('messages.max_length', ['attribute' => 'Name', 'max' => 100]),
            'email.required' => __('messages.field_required', ['attribute' => 'Email']),
            'email.email' => __('messages.invalid_email'),
            'email.unique' => __('messages.unique', ['attribute' => 'Email']),
            'password.required' => __('messages.field_required', ['attribute' => 'Password']),
        ];
    }
}
