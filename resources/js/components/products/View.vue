<template>
    <b-modal @hidden="$router.go(-1),$emit('reset',true)"
             visible
             size="xl"
             header-bg-variant="dark"
             header-text-variant="light"
             no-body
             title="View Product"
             lazy>
        <b-row>
            <b-col md="4" v-if="the_item.photo_url">
                <b-img-lazy thumbnail fluid :src="the_item.photo_url"></b-img-lazy>
            </b-col>
            <b-col>
                <b-table small bordered hover striped
                         head-variant="dark"
                         :items="obj2Table(the_item,['category_id','unit_id','photo_url','photo','deleted_at'])"
                         :fields="[
                            {
                                key: 'key', sortable: true,
                                formatter: (v) => startCase(v)
                            },
                            {
                                key: 'value',
                                sortable: true
                            }
                       ]">
                    <template v-slot:cell(value)="row">
                        <template v-if="['created_at','updated_at'].includes(row.item.key)">
                            {{row.item.value | dayjs}}
                        </template>
                        <template v-else-if="['unit','brand','category','subcategory'].includes(row.item.key)">
                            {{row.item.value?row.item.value.name : ''}}
                        </template>
                        <template v-else-if="['description'].includes(row.item.key)">
                            <div v-html="row.item.value"></div>
                        </template>
                        <template v-else>{{row.item.value}}</template>
                    </template>
                </b-table>
            </b-col>
        </b-row>
    </b-modal>
</template>
<script>
    import view from "@/partials/view"

    export default {
        mixins: [view]
    }
</script>
