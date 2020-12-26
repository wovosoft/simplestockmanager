<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Product;
use Faker\Generator as Faker;

$factory->define(Product::class, function (Faker $faker) {
    return [
        "name" => $faker->word,
        "barcode_symbology" => "code128",
        "code" => uniqid(),
        "category_id" => random_int(1, 20),
        "subcategory_id" => random_int(1, 20),
        "brand_id" => random_int(1, 20),
        "status" => [true, false][random_int(0, 1)],
        "unit_id" => random_int(1, 4),
        "quantity" => random_int(1, 100),
        "alert_quantity" => random_int(1, 50),
        "description" => $faker->text(100)
    ];
});
