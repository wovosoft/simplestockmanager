<?php

use App\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Wovosoft\LaravelPermissions\Models\Permissions;
use Wovosoft\LaravelPermissions\Models\Roles;
use Wovosoft\LaravelPermissions\Seeds\PermissionsSeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserSeeder::class);
        $permissions = config("laravel-permissions.default_permissions");
        $roles = config("laravel-permissions.default_roles");


        foreach ($permissions as $permission) {
            Permissions::query()->firstOrCreate(
                [
                    "name" => $permission["name"]
                ],
                [
                    "description" => $permission["description"]
                ]
            );
        }

        $this->command->info('Default Permissions added.');

        foreach ($roles as $role) {
            $role = Roles::query()->firstOrCreate($role);

            if ($role->name == 'Super Admin') {
                // assign all permissions
                $role->syncPermissions(Permissions::all());
                $this->command->info('Super Admin granted all the permissions');
            } else {
                // for others by default only read access
                $role->syncPermissions(Permissions::query()->where('name', 'LIKE', 'view_%')->get());
            }

            // create one user for each role
            $this->createUser($role);
        }

        // Reset cached roles and permissions
        $this->command->info("\nWe are flushing the new records from database to the cache.\n");
        app()[\Spatie\Permission\PermissionRegistrar::class]->forgetCachedPermissions();

        $this->command->warn('All done Role & Permissions created :)');
        factory(\App\Models\Category::class, 20)->create();
        factory(\App\Models\Supplier::class, 20)->create();
        factory(\App\Models\Customer::class, 20)->create();
        factory(\App\Models\Brand::class, 20)->create();
        factory(\App\Models\Subcategory::class, 20)->create();
        foreach (['kg' => 'kilogram', 'cm' => 'centimeter', 'gm' => 'gram', 'QTY' => 'Quantity'] as $key => $value) {
            factory(\App\Models\Unit::class)->create(['name' => $key, 'description' => $value]);
        }
        factory(\App\Models\Product::class, 20)->create();
        factory(\App\Models\CheckIn::class, 20)
            ->create()
            ->each(function ($checkIn) {
                for ($x = 0; $x <= random_int(1, 3); $x++) {
                    $checkIn
                        ->items()
                        ->create([
                            "product_id" => random_int(1, 20),
                            "quantity" => random_int(1, 5)
                        ]);
                }
            });
        factory(\App\Models\CheckOut::class, 20)
            ->create()
            ->each(function ($checkOut) {
                for ($x = 0; $x <= random_int(1, 3); $x++) {
                    $checkOut
                        ->items()
                        ->create([
                            "product_id" => random_int(1, 20),
                            "quantity" => random_int(1, 5)
                        ]);
                }
            });
    }

    private function createUser($role)
    {
        if ($role->name == 'Super Admin') {
            $user = factory(User::class)->create([
                "name" => "Super Admin",
                "email" => "superadmin@gmail.com",
                "password" => Hash::make("superadmin123456789")
            ]);
            $user->assignRole($role->name);
        } else {
            $user = factory(User::class)->create();
            $user->assignRole($role->name);
        }
    }
}
