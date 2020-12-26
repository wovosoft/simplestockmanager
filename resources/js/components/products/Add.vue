<template>
    <b-modal @hidden="$router.go(-1),$emit('reset',true)"
             v-model="visible"
             size="xl"
             header-bg-variant="dark"
             header-text-variant="light"
             no-body
             :title="(form.id?'Edit ':'Add ')+'Product'"
             lazy>
        <form @submit.prevent="hitSubmit" ref="theForm">
            <b-row>
                <b-col>
                    <b-form-group label="Name *">
                        <b-form-input v-model="form.name" placeholder="Name" :required="true"/>
                    </b-form-group>
                    <b-form-group label="Barcode Symbology">
                        <b-form-select
                            v-model="form.barcode_symbology"
                            :options="[
                                {text:'Code25',value:'code25'},
                                {text: 'Code39',value: 'code39'},
                                {text: 'Code128',value: 'code128'},
                                {text: 'EAN8',value: 'ean8'},
                                {text: 'EAN13',value: 'ean13'},
                                {text: 'UPC-A',value: 'upc-a'},
                                {text: 'UPC-E',value: 'upc-e'}
                            ]"/>
                    </b-form-group>
                    <b-form-group label="Code">
                        <b-form-input
                            type="text" v-model="form.code"
                            placeholder="Code (Barcode/SKU/UPC/ISBN)"/>
                    </b-form-group>
                    <b-form-row>
                        <b-col>
                            <b-form-group label="Quantity">
                                <b-form-input
                                    type="number"
                                    step="any"
                                    placeholder="Product Quantity"
                                    v-model="form.quantity"/>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Alert Quantity">
                                <b-form-input
                                    type="number"
                                    step="any"
                                    placeholder="Product Alert Quantity"
                                    v-model="form.alert_quantity"/>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group label="Unit">
                                <b-form-select :options="units" v-model="form.unit_id"></b-form-select>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                </b-col>
                <b-col>
                    <b-form-row>
                        <b-col>
                            <b-form-group label="Status">
                                <b-form-select
                                    v-model="form.status"
                                    :options="[
                                {text:'Active',value:1},
                                {text: 'Inactive',value: 0}
                            ]"/>
                            </b-form-group>
                        </b-col>
                        <b-col>
                            <b-form-group>
                                <template v-slot:label>
                                    Photo
                                    <a v-if="form.photo_url" target="_blank" :href="form.photo_url">
                                        <i class="fa fa-link"></i>
                                    </a>
                                </template>
                                <b-input-group>
                                    <b-form-file v-model="form.photo_upload"></b-form-file>
                                    <template v-slot:append>
                                        <b-button
                                            @click="form.photo=null,form.photo_upload=null,form.photo_url=null"
                                            title="Reset">
                                            x
                                        </b-button>
                                    </template>
                                </b-input-group>
                            </b-form-group>
                        </b-col>
                    </b-form-row>
                    <b-form-group label="Category">
                        <b-input-group>
                            <vue-select
                                @input="v=>{form.category_id=v?v.id:null}"
                                v-model="form.category"
                                :api_url="route('Backend.Categories.Search').url()">
                                <template v-slot:option="op">
                                    {{[op.item.id,op.item.name].join(' # ')}}
                                </template>
                                <template v-slot:tag="op">
                                    {{op.tag?[op.tag.id,op.tag.name].join(' # '):'Not Selected'}}
                                </template>
                            </vue-select>
                            <template v-slot:append>
                                <b-button @click="form.category=null,form.category_id=null">x</b-button>
                            </template>
                        </b-input-group>
                    </b-form-group>
                    <b-form-group label="Subcategory">
                        <b-input-group>
                            <vue-select
                                @input="v=>{form.subcategory_id=v?v.id:null}"
                                v-model="form.subcategory"
                                :api_url="route('Backend.Subcategories.Search').url()">
                                <template v-slot:option="op">
                                    {{[op.item.id,op.item.name].join(' # ')}}
                                </template>
                                <template v-slot:tag="op">
                                    {{op.tag?[op.tag.id,op.tag.name].join(' # '):'Not Selected'}}
                                </template>
                            </vue-select>
                            <template v-slot:append>
                                <b-button @click="form.subcategory=null,form.subcategory_id=null">x</b-button>
                            </template>
                        </b-input-group>
                    </b-form-group>
                    <b-form-group label="Brand">
                        <b-input-group>
                            <vue-select
                                @input="v=>{form.brand_id=v?v.id:null}"
                                v-model="form.brand"
                                :api_url="route('Backend.Brands.Search').url()">
                                <template v-slot:option="op">
                                    {{[op.item.id,op.item.name].join(' # ')}}
                                </template>
                                <template v-slot:tag="op">
                                    {{op.tag?[op.tag.id,op.tag.name].join(' # '):'Not Selected'}}
                                </template>
                            </vue-select>
                            <template v-slot:append>
                                <b-button @click="form.brand=null,form.brand_id=null">x</b-button>
                            </template>
                        </b-input-group>
                    </b-form-group>
                </b-col>
            </b-row>
            <br>
            <b-form-group label="Description">
                <b-form-textarea placeholder="Product Description" v-model="form.description"/>
            </b-form-group>
        </form>
        <template v-slot:modal-footer="{cancel}">
            <b-button variant="primary" ref="submitBtn" @click="onSubmit">SUBMIT</b-button>
            <b-button @click="cancel()">CANCEL</b-button>
        </template>
        <!--        <pre v-html="form"/>-->
    </b-modal>

</template>

<script>
    import add_form from "@/partials/add_form";
    import {slugify, objPhotoUrl} from "@/partials/datatable";
    import VueSelect from "@/partials/VueSelect";

    export default {
        mixins: [add_form],
        components: {
            VueSelect
        },
        props: {
            submit_url: {
                type: String,
                default: () => route('Backend.Products.Store').url()
            }
        },
        methods: {
            slugify,
            objPhotoUrl
        },
        data() {
            return {
                categories: [],
                units: []
            }
        },
        mounted() {
            axios.post(route('Backend.Products.Get.Category.Unit').url())
                .then(res => {
                    this.categories = res.data.categories;
                    this.units = res.data.units;
                })
                .catch(err => console.log(err.response));
        }
    }
</script>

