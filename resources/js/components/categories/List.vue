<template>
    <div>
        <dt-table :title="title" v-model="search" :fields="fields" :datatable="datatable"
                  :custom_buttons="custom_buttons"
        >
            <template v-slot:table>
                <b-table ref="datatable" variant="primary" responsive="md" hover bordered small striped
                         head-variant="dark"
                         :items="getItems"
                         class="mb-0"
                         :fields="fields"
                         :sort-by.sync="datatable.sortBy"
                         :sort-desc.sync="datatable.sortDesc"
                         :filter="search"
                         :per-page="datatable.per_page"
                         :current-page="datatable.current_page"
                >
                    <template v-slot:cell(action)="row">
                        <b-button-group size="sm">
                            <b-button variant="primary"
                                      :to="{name:'CategoriesView',params:{id:row.item.id}}"
                                      @click="currentItem=JSON.parse(JSON.stringify(row.item))">
                                <i class="fa fa-eye"></i>
                            </b-button>
                            <b-button variant="warning"
                                      :to="{name:'CategoriesAdd',params:{id:row.item.id}}"
                                      @click="currentItem=JSON.parse(JSON.stringify(row.item))">
                                <i class="fa fa-edit"></i>
                            </b-button>
                            <b-button variant="danger" @click="trash(row.item.id)">
                                <i class="fa fa-trash"></i>
                            </b-button>
                        </b-button-group>
                    </template>
                </b-table>
            </template>
        </dt-table>
        <router-view @reset="currentItem={}" @refreshDatatable="()=>$refs.datatable.refresh()"
                     :item="currentItem"></router-view>
    </div>
</template>

<script>
    import DtHeader from '../../partials/DtHeader'
    import DtFooter from '../../partials/DtFooter'
    import Datatable from "../../partials/datatable";
    import DtTable from "../../partials/DtTable";

    export default {
        name: "CategoriesList",
        components: {
            DtHeader,
            DtFooter,
            DtTable,
        },
        mixins: [Datatable],
        props: {
            title: {
                type: String,
                default: ' Categories'
            },
            api_url: {
                type: String,
                default: () => route('Backend.Categories.List').url()
            },
            trash_url: {
                type: String,
                default: () => route('Backend.Categories.Delete').url()
            },
            submit_url: {
                type: String,
                default: () => route('Backend.Categories.Store').url()
            },
            custom_buttons: {
                type: Array,
                default: () => [
                    {
                        text: 'Add',
                        variant: 'dark',
                        to: {name: 'CategoriesAdd'}
                    },
                    {
                        text: 'History',
                        variant: 'primary',
                        to: {
                            name: 'ModelHistory',
                            params: {
                                model: 'categories'
                            }
                        }
                    }
                ]
            },
        },
        data() {
            return {
                form: {},
                fields: [
                    {key: 'id', sortable: true},
                    {key: 'name', sortable: true},
                    {key: 'code', sortable: true},
                    {
                        key: 'description',
                        sortable: true,
                        formatter: v => this.$options.filters.truncate(v || "")
                    },
                    {key: 'created_at', sortable: true, formatter: v => this.dayjs(v)},
                    {key: 'updated_at', sortable: true, formatter: v => this.dayjs(v)},
                    {key: 'action', sortable: false, searchable: false, thClass: 'text-right', tdClass: 'text-right'},
                ]
            }
        }
    }
</script>
