<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use App\Traits\Crud;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class CustomerController extends Controller
{
    protected string $model = Customer::class;
    public array $search_selects = ['id', 'name', 'code', 'description'];
    public array $search_fields = ['id', 'name', 'code', 'description'];
    use Crud;

    public static function routes()
    {
        Route::post("customers/list", '\\' . __CLASS__ . '@list')->name('Customers.List');
        Route::post("customers/search", '\\' . __CLASS__ . '@search')->name('Customers.Search');
        Route::post("customers/store", '\\' . __CLASS__ . '@store')->name('Customers.Store');
        Route::post("customers/delete", '\\' . __CLASS__ . '@delete')->name('Customers.Delete');
    }

    public function store(Request $request)
    {
        try {
            $item = Customer::query()->findOrNew($request->post('id'));
            $item->business_name = $request->post('business_name');
            $item->name = $request->post('name');
            $item->contact_id = $request->post('contact_id');
            $item->tax_number = $request->post('tax_number');
            $item->opening_balance = $request->post('opening_balance');
            $item->pay_term = $request->post('pay_term');
            $item->pay_term_duration = $request->post('pay_term_duration');
            $item->credit_limit = $request->post('credit_limit');
            $item->email = $request->post('email');
            $item->mobile = $request->post('mobile');
            $item->alternative_contact = $request->post('alternative_contact');
            $item->landline = $request->post('landline');
            $item->city = $request->post('city');
            $item->state = $request->post('state');
            $item->country = $request->post('country');
            $item->landmark = $request->post('landmark');
            $item->custom_field_1 = $request->post('custom_field_1');
            $item->custom_field_2 = $request->post('custom_field_2');
            $item->custom_field_3 = $request->post('custom_field_3');
            $item->custom_field_4 = $request->post('custom_field_4');
            $item->shipping_address = $request->post('shipping_address');

            if (!$item) {
                throw new \Exception("Unable to Save the Data", 304);
            }
            $item->saveOrFail();
            return response()->json([
                "status" => true,
                "title" => 'SUCCESS!',
                "type" => "success",
                "msg" => ' Successfully Done'
            ]);
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
