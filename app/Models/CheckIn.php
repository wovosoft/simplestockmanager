<?php

namespace App\Models;


use App\Traits\HistoryTrait;
use App\User;

class CheckIn extends BaseModel
{
    use HistoryTrait;
    protected static function boot()
    {
        parent::boot(); // TODO: Change the autogenerated stub
        static::deleting(function ($item) {
            $item->items()->each(function ($it) {
                $it->delete();
            });
        });
    }

    public function supplier()
    {
        return $this->hasOne(Supplier::class, 'id', 'supplier_id');
    }

    public function items()
    {
        return $this->hasMany(CheckInItem::class, 'check_in_id', 'id');
    }

    public function products()
    {
        return $this->hasManyThrough(
            Product::class,
            CheckInItem::class
        );
    }

    public function creator()
    {
        return $this->hasOne(User::class, 'id', 'created_by');
    }
}
