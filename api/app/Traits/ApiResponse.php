<?php

namespace App\Traits;

use Illuminate\Http\JsonResponse;
use Symfony\Component\HttpFoundation\Response;
use Illuminate\Http\Exceptions\HttpResponseException;

trait ApiResponse
{
    public function successApiResponse($message, $data = null) {
        if ($data == null) {
            return response()->json([
                'status' => true,
                'message' => $message,
            ], Response::HTTP_OK);
        } else {
            return response()->json([
                'status' => true,
                'message' => $message,
                'data' => $data,
            ], Response::HTTP_OK);
        }
    }

    public function errorApiResponse($message) {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], Response::HTTP_INTERNAL_SERVER_ERROR);
    }

    public function unprocessableApiResponse(string $message, mixed $data = null) {
        return response()->json([
            'status' => false,
            'message' => $message,
        ], Response::HTTP_UNPROCESSABLE_ENTITY);
    }

}
