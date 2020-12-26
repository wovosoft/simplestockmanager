<?php

use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Route;

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

Route::pattern('url', '.*');
Route::middleware(['auth'])->group(function () {
    Route::any('/ckfinder/connector', '\CKSource\CKFinderBridge\Controller\CKFinderController@requestAction')
        ->name('ckfinder_connector');

    Route::any('/ckfinder/browser', '\CKSource\CKFinderBridge\Controller\CKFinderController@browserAction')
        ->name('ckfinder_browser');

    Route::any('/ckfinder/examples/{example?}', '\CKSource\CKFinderBridge\Controller\CKFinderController@examplesAction')
        ->name('ckfinder_examples');


    Route::get('/{url?}', fn() => view('layouts.dashboard'))->name('Admin');
});

Route::middleware(['auth'])->prefix('backend')->name('Backend.')->group(function () {
    \App\Http\Controllers\CategoryController::routes();
    \App\Http\Controllers\SupplierController::routes();
    \App\Http\Controllers\CustomerController::routes();
    \App\Http\Controllers\BrandController::routes();
    \App\Http\Controllers\UnitController::routes();
    \App\Http\Controllers\SubcategoryController::routes();
    \App\Http\Controllers\ProductController::routes();
    \App\Http\Controllers\CheckInController::routes();
    \App\Http\Controllers\CheckOutController::routes();
    \App\Http\Controllers\HistoryController::routes();
    \App\Http\Controllers\WidgetsController::routes();
});
