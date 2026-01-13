<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Exceptions\HttpResponseException;
use Illuminate\Contracts\Validation\Validator;

class BaseRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return false;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            //
        ];
    }
    
    /**
     * failedValidation
     *
     * @param  mixed $validator
     * @return void
     */
    public function failedValidation(Validator $validator) {
        throw new HttpResponseException(response()->json([
            'success'   => false,
            'message'   => 'Validation errors',
            'data'      => $validator->errors()
        ],422));
    }

    //above method will structure the validation error response, like below
    // {
    //   "success": false,
    //   "message": "Validation errors",
    //   "data": {
    //     "email": ["The email field is required."]
    //   }
    // }

    //otherwise, the default laravel behavior will be applied, like below:
    // {
    //   "message": "The given data was invalid.",
    //   "errors": {
    //     "email": ["The email field is required."]
    //   }
    // }
}

