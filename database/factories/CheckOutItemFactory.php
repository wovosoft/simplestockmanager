<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CheckoutItem;
use Faker\Generator as Faker;

$factory->define(CheckoutItem::class, function (Faker $faker) {
    return [
//        "check_in_id"=>random_int(1,20),
        "product_id" => random_int(1, 20),
        "quantity" => random_int(1, 5)
    ];
});
