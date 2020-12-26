<template>
    <b-modal @hidden="$router.go(-1),$emit('reset',true)"
             v-model="visible"
             size="xl"
             header-bg-variant="dark"
             header-text-variant="light"
             no-body
             :title="(form.id?'Edit ':'Add ')+'Customer'"
             lazy>
        <form @submit.prevent="hitSubmit" ref="theForm">
            <b-row>
                <b-col>
                    <b-form-group label="Business Name">
                        <b-form-input type="text" placeholder="Business Name" v-model="form.business_name"/>
                    </b-form-group>
                    <b-form-group label="Name">
                        <b-form-input type="text" placeholder="Name" v-model="form.name"/>
                    </b-form-group>
                    <b-form-group label="Contact ID">
                        <b-form-input type="text" placeholder="Contact ID" v-model="form.contact_id"/>
                    </b-form-group>
                    <b-form-group label="Tax Number">
                        <b-form-input type="text" placeholder="Tax Number" v-model="form.tax_number"/>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Opening Balance">
                        <b-form-input type="number" step="any" placeholder="Opening Balance"
                                      v-model="form.opening_balance"/>
                    </b-form-group>
                    <b-form-group label="Pay Term">
                        <b-input-group>
                            <b-form-input type="text" placeholder="Pay Term" v-model="form.pay_term"/>
                            <b-form-select :options="['Monthly','Weekly']" v-model="form.pay_term_duration"/>
                        </b-input-group>
                    </b-form-group>
                    <b-form-group label="Credit Limit">
                        <b-form-input type="number" step="any" placeholder="Credit Limit" v-model="form.credit_limit"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-form-group label="Email">
                        <b-form-input type="email" placeholder="Email Address" v-model="form.email"/>
                    </b-form-group>
                    <b-form-group label="City">
                        <b-form-input type="text" placeholder="City" v-model="form.city"/>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Mobile">
                        <b-form-input type="tel" placeholder="Mobile" v-model="form.mobile"/>
                    </b-form-group>
                    <b-form-group label="State">
                        <b-form-input type="text" placeholder="State" v-model="form.state"/>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Alternative Contact">
                        <b-form-input type="tel" placeholder="Alternative Contact" v-model="form.alternative_contact"/>
                    </b-form-group>
                    <b-form-group label="Country">
                        <b-form-input type="text" placeholder="Country" v-model="form.country"/>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Landline">
                        <b-form-input type="tel" placeholder="Landline" v-model="form.landline"/>
                    </b-form-group>
                    <b-form-group label="Landmark">
                        <b-form-input type="text" placeholder="Landmark" v-model="form.landmark"/>
                    </b-form-group>
                </b-col>
            </b-row>
            <hr>
            <b-row>
                <b-col>
                    <b-form-group label="Custom Field 1">
                        <b-form-input type="text" placeholder="Custom Field 1" v-model="form.custom_field_1"/>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Custom Field 2">
                        <b-form-input type="text" placeholder="Custom Field 2" v-model="form.custom_field_2"/>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Custom Field 3">
                        <b-form-input type="text" placeholder="Custom Field 3" v-model="form.custom_field_3"/>
                    </b-form-group>
                </b-col>
                <b-col>
                    <b-form-group label="Custom Field 4">
                        <b-form-input type="text" placeholder="Custom Field 4" v-model="form.custom_field_4"/>
                    </b-form-group>
                </b-col>
            </b-row>
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

    export default {
        mixins: [add_form],
        props: {
            submit_url: {
                type: String,
                default: () => route('Backend.Customers.Store').url()
            }
        },
        methods: {
            slugify,
            objPhotoUrl
        }
    }
</script>

