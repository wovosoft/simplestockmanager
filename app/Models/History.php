<?php

namespace App\Models;

class History extends BaseModel
{
    protected $casts = [
        'old_values' => 'json',
        'new_values' => 'json'
    ];
}
