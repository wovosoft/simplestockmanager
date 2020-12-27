(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{e8hi:function(t,e,o){"use strict";o.r(e);var r=o("j01/"),l=o("X/aF"),a={mixins:[r.a],props:{submit_url:{type:String,default:function(){return route("Backend.Suppliers.Store").url()}}},methods:{slugify:l.l,objPhotoUrl:l.h}},n=o("KHd+"),m=Object(n.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{size:"xl","header-bg-variant":"dark","header-text-variant":"light","no-body":"",title:(t.form.id?"Edit ":"Add ")+"Supplier",lazy:""},on:{hidden:function(e){t.$router.go(-1),t.$emit("reset",!0)}},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.cancel;return[o("b-button",{ref:"submitBtn",attrs:{variant:"primary"},on:{click:t.onSubmit}},[t._v("SUBMIT")]),t._v(" "),o("b-button",{on:{click:function(t){return r()}}},[t._v("CANCEL")])]}}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("form",{ref:"theForm",on:{submit:function(e){return e.preventDefault(),t.hitSubmit(e)}}},[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Business Name"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Business Name"},model:{value:t.form.business_name,callback:function(e){t.$set(t.form,"business_name",e)},expression:"form.business_name"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Name"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Name"},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Contact ID"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Contact ID"},model:{value:t.form.contact_id,callback:function(e){t.$set(t.form,"contact_id",e)},expression:"form.contact_id"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Tax Number"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Tax Number"},model:{value:t.form.tax_number,callback:function(e){t.$set(t.form,"tax_number",e)},expression:"form.tax_number"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Opening Balance"}},[o("b-form-input",{attrs:{type:"number",step:"any",placeholder:"Opening Balance"},model:{value:t.form.opening_balance,callback:function(e){t.$set(t.form,"opening_balance",e)},expression:"form.opening_balance"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Pay Term"}},[o("b-input-group",[o("b-form-input",{attrs:{type:"text",placeholder:"Pay Term"},model:{value:t.form.pay_term,callback:function(e){t.$set(t.form,"pay_term",e)},expression:"form.pay_term"}}),t._v(" "),o("b-form-select",{attrs:{options:["Monthly","Weekly"]},model:{value:t.form.pay_term_duration,callback:function(e){t.$set(t.form,"pay_term_duration",e)},expression:"form.pay_term_duration"}})],1)],1),t._v(" "),o("b-form-group",{attrs:{label:"Credit Limit"}},[o("b-form-input",{attrs:{type:"number",step:"any",placeholder:"Credit Limit"},model:{value:t.form.credit_limit,callback:function(e){t.$set(t.form,"credit_limit",e)},expression:"form.credit_limit"}})],1)],1)],1),t._v(" "),o("hr"),t._v(" "),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Email"}},[o("b-form-input",{attrs:{type:"email",placeholder:"Email Address"},model:{value:t.form.email,callback:function(e){t.$set(t.form,"email",e)},expression:"form.email"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"City"}},[o("b-form-input",{attrs:{type:"text",placeholder:"City"},model:{value:t.form.city,callback:function(e){t.$set(t.form,"city",e)},expression:"form.city"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Mobile"}},[o("b-form-input",{attrs:{type:"tel",placeholder:"Mobile"},model:{value:t.form.mobile,callback:function(e){t.$set(t.form,"mobile",e)},expression:"form.mobile"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"State"}},[o("b-form-input",{attrs:{type:"text",placeholder:"State"},model:{value:t.form.state,callback:function(e){t.$set(t.form,"state",e)},expression:"form.state"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Alternative Contact"}},[o("b-form-input",{attrs:{type:"tel",placeholder:"Alternative Contact"},model:{value:t.form.alternative_contact,callback:function(e){t.$set(t.form,"alternative_contact",e)},expression:"form.alternative_contact"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Country"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Country"},model:{value:t.form.country,callback:function(e){t.$set(t.form,"country",e)},expression:"form.country"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Landline"}},[o("b-form-input",{attrs:{type:"tel",placeholder:"Landline"},model:{value:t.form.landline,callback:function(e){t.$set(t.form,"landline",e)},expression:"form.landline"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Landmark"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Landmark"},model:{value:t.form.landmark,callback:function(e){t.$set(t.form,"landmark",e)},expression:"form.landmark"}})],1)],1)],1),t._v(" "),o("hr"),t._v(" "),o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Custom Field 1"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Custom Field 1"},model:{value:t.form.custom_field_1,callback:function(e){t.$set(t.form,"custom_field_1",e)},expression:"form.custom_field_1"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Custom Field 2"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Custom Field 2"},model:{value:t.form.custom_field_2,callback:function(e){t.$set(t.form,"custom_field_2",e)},expression:"form.custom_field_2"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Custom Field 3"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Custom Field 3"},model:{value:t.form.custom_field_3,callback:function(e){t.$set(t.form,"custom_field_3",e)},expression:"form.custom_field_3"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Custom Field 4"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Custom Field 4"},model:{value:t.form.custom_field_4,callback:function(e){t.$set(t.form,"custom_field_4",e)},expression:"form.custom_field_4"}})],1)],1)],1)],1)])}),[],!1,null,null,null);e.default=m.exports},"j01/":function(t,e,o){"use strict";var r=o("X/aF");e.a={props:{getCreatedItem:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}}},mounted:function(){this.form=this.item,Object(r.d)(this,(function(){}))},data:function(){return{form:{},visible:!0}},methods:{getItem:r.c,onSubmit:r.i,hitSubmit:function(){this.$refs.submitBtn.click()}}}}}]);