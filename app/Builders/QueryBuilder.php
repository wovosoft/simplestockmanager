<?php

namespace App\Builders;

use Illuminate\Contracts\Pagination\LengthAwarePaginator;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;

class QueryBuilder extends Builder
{
    /**
     * @param array $options
     * @return LengthAwarePaginator
     */
    public function datatable(array $options = []): LengthAwarePaginator
    {
        $options = array_merge([
            'orderBy' => 'id',
            'order' => 'desc',
            'filter' => null,
            'filter_type' => 'or',
            'columns' => ['*'],
            'per_page' => env('PER_PAGE') ?? 15
        ], Arr::where($options, fn($v, $k) => !!$v));

        if ($options["filter"] && $options["columns"]) {
            $this->filter($options["filter"], $options["columns"], $options["filter_type"]);
        }

        return $this
            ->orderBy($options["orderBy"], $options["order"])
            ->paginate($options['per_page']);
    }

    /**
     * @param Request | array $request [filter='string', filter_type='or|and', per_page = 15, orderBy='id', order='desc|asc',columns=['*']]
     * @return LengthAwarePaginator
     */
    public function defaultDatatable($request): LengthAwarePaginator
    {
        return $this->datatable($request instanceof Request ? [
            "filter" => $request->post("filter"),
            "filter_type" => $request->post("filter_type"),
            "per_page" => $request->post("per_page"),
            "orderBy" => $request->post("orderBy"),
            "order" => $request->post("order"),
            "columns" => $request->post('columns') ?? ['*']
        ] : $request);
    }

    public function getItem(int $id)
    {
        return $this->find($id);
    }

    /**
     * @param string|null $filter Query String
     * @param array $columns Columns to be queried
     * @param string $filter_type and | or
     * @return $this
     */
    public function filter(string $filter = null, array $columns = [], string $filter_type = "or"): QueryBuilder
    {
        if ($filter && is_array($columns) && count($columns)) {
            if ($columns === ['*']) {
                $columns = $this->getConnection()->getSchemaBuilder()->getColumnListing($this->getModel()->getTable());
            }

            if (trim($filter_type) === "or") {
                for ($x = 0; $x < count($columns); $x++) {
                    if ($x === 0) {
                        $this->where($columns[$x], "LIKE", "%" . trim($filter) . "%");
                    } else {
                        $this->orWhere($columns[$x], "LIKE", "%" . trim($filter) . "%");
                    }
                }
            } elseif (trim($filter_type) === 'and') {
                foreach ($columns as $column) {
                    $this->where($column, "LIKE", "%" . trim($filter) . "%");
                }
            }
        }
        return $this;
    }
}
