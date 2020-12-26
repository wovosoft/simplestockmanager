<?php

namespace App\Http\Controllers;

use App\Models\Brand;
use App\Models\Category;
use App\Models\CheckIn;
use App\Models\CheckInItem;
use App\Models\CheckOut;
use App\Models\CheckOutItem;
use App\Models\Customer;
use App\Models\History;
use App\Models\Product;
use App\Models\Subcategory;
use App\Models\Supplier;
use App\Models\Unit;
use App\Traits\Crud;
use App\User;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class HistoryController extends Controller
{
    protected string $model = History::class;
    public array $search_selects = ['id', 'type', 'related', 'records', 'created_at', 'updated_at'];
    public array $search_fields = ['id', 'type', 'related', 'records', 'created_at', 'updated_at'];
    use Crud;

    private $models = [
        "users" => User::class,
        "customers" => Customer::class,
        "suppliers" => Supplier::class,
        "categories" => Category::class,
        "products" => Product::class,
        "units" => Unit::class,
        "brands" => Brand::class,
        "subcategories" => Subcategory::class,
        "check_ins" => CheckIn::class,
        "check_outs" => CheckOut::class,
        "check_in_items" => CheckInItem::class,
        "check_out_items" => CheckOutItem::class,
    ];

    public static function routes()
    {
        Route::post("history/list", '\\' . __CLASS__ . '@list')->name('History.List');
        Route::post("history/search", '\\' . __CLASS__ . '@search')->name('History.Search');
        Route::post("history/store", '\\' . __CLASS__ . '@store')->name('History.Store');
        Route::post("history/delete", '\\' . __CLASS__ . '@delete')->name('History.Delete');
    }

    public function list(Request $request)
    {
        try {
            $request->validate([
                "model" => "required"
            ]);
            if (!key_exists($request->post('model'), $this->models)) {
                throw new ModelNotFoundException('Model Not Found');
            }
            $items = History::query()
                ->where('related', '=', $this->models[$request->post('model')]);

            if ($request->has('id')) {
                return $items->findOrFail($request->post('id'));
            }
            return $items->defaultDatatable($request);
        } catch (\Throwable $exception) {
            throw $exception;
        }
    }
}
