<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Models\Customer;
use Faker\Generator as Faker;

$factory->define(Customer::class, function (Faker $faker) {
    return [
        "business_name" => $faker->name,
        "name" => $faker->name,
        "contact_id" => $faker->randomDigit,
        "tax_number" => $faker->creditCardNumber,
        "opening_balance" => $faker->randomNumber(3),
        "pay_term" => $faker->randomNumber(2),
        "pay_term_duration" => ['weekly', 'monthly'][random_int(0, 1)],
        "email" => $faker->email,
        "mobile" => $faker->phoneNumber,
        "alternative_contact" => $faker->phoneNumber,
        "landline" => $faker->phoneNumber,
        "city" => $faker->city,
        "state" => $faker->state,
        "country" => $faker->country,
        "landmark" => $faker->word,
        "shipping_address" => $faker->address
    ];
});
