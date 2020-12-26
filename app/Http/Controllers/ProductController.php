<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use App\Models\Unit;
use App\Traits\Crud;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Route;

class ProductController extends Controller
{
    protected string $model = Product::class;
    public array $search_selects = ['id', 'name', 'code', 'quantity', 'description'];
    public array $search_fields = ['id', 'name', 'code', 'quantity', 'description'];
    use Crud;

    public static function routes()
    {
        Route::post("products/list", '\\' . __CLASS__ . '@list')->name('Products.List');
        Route::post("products/search", '\\' . __CLASS__ . '@search')->name('Products.Search');
        Route::post("products/store", '\\' . __CLASS__ . '@store')->name('Products.Store');
        Route::post("products/delete", '\\' . __CLASS__ . '@delete')->name('Products.Delete');
        Route::post("products/get/categories_units", '\\' . __CLASS__ . '@categoryAndUnits')->name('Products.Get.Category.Unit');
    }

    public function store(Request $request)
    {
        try {
            $item = Product::query()->findOrNew($request->post('id'));
            $item->name = $request->post('name');
            $item->barcode_symbology = $request->post('barcode_symbology') ?? 'code128';
            $item->code = $request->post('code');
            $item->category_id = $request->post('category_id');
            $item->subcategory_id = $request->post('subcategory_id');
            $item->brand_id = $request->post('brand_id');
            $item->status = $request->post('status') ?? true;
            $item->unit_id = $request->post('unit_id');
            $item->quantity = $request->post('quantity') ?? 0;
            $item->alert_quantity = $request->post('alert_quantity') ?? 0;
            $item->description = $request->post('description');


            if ($request->hasFile('photo_upload')) {
                $item->photo = $request->file('photo_upload')->store('products', 'public');
            } else {
                $item->photo = $request->post('photo');
            }


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

    public function categoryAndUnits()
    {
        return response()->json([
            "categories" => Category::query()->select([
                DB::raw('id as value'),
                DB::raw('name as text')
            ])->get(),
            "units" => Unit::query()->select([
                DB::raw('id as value'),
                DB::raw('name as text')
            ])->get()
        ]);
    }

    public function list(Request $request)
    {
        try {
            $items = Product::query()
                ->with(['unit', 'category', 'subcategory', 'brand']);

            if ($request->has('id')) {
                return $items->find($request->post('id'));
            }
            return $items->defaultDatatable($request);
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
