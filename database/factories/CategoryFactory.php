<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Category;
use Faker\Generator as Faker;

$factory->define(Category::class, function (Faker $faker) {
    return [
        "name" => $faker->word,
        "code" => random_int(1000, 2000),
        "description" => $faker->text(100)
    ];
});
