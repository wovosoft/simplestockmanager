<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\CheckIn;
use Faker\Generator as Faker;

$factory->define(CheckIn::class, function (Faker $faker) {
    return [
        "created_by" => 1,
        "datetime" => $faker->dateTimeBetween('-6 months', 'now'),
        "reference" => $faker->uuid,
        "supplier_id" => random_int(1, 20),
        "note" => $faker->text(120)
    ];
});
