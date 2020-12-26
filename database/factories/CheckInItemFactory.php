<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CheckInItem;
use Faker\Generator as Faker;

$factory->define(CheckInItem::class, function (Faker $faker) {
    return [
//        "check_in_id"=>random_int(1,20),
        "product_id" => random_int(1, 20),
        "quantity" => random_int(1, 5)
    ];
});
