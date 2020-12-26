<?php

namespace App\Models;


use App\Traits\HistoryTrait;

class Product extends BaseModel
{
    use HistoryTrait;
    protected $appends = [
        "photo_url"
    ];


    public function getPhotoUrlAttribute()
    {
        return $this->photo ? asset('storage/' . $this->photo) : '';
    }

    public function unit()
    {
        return $this->hasOne(Unit::class, 'id', 'unit_id');
    }

    public function category()
    {
        return $this->hasOne(Category::class, 'id', 'category_id');
    }

    public function subcategory()
    {
        return $this->hasOne(Subcategory::class, 'id', 'subcategory_id');
    }

    public function brand()
    {
        return $this->hasOne(Brand::class, 'id', 'brand_id');
    }
}
