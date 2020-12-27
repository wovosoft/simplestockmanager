(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{107:function(t,e,o){"use strict";o.r(e);var n=o(12),r=o(6),i=o(24),a={mixins:[n.a],components:{VueSelect:i.a},props:{submit_url:{type:String,default:function(){return route("Backend.Products.Store").url()}}},methods:{slugify:r.l,objPhotoUrl:r.h},data:function(){return{categories:[],units:[]}},mounted:function(){var t=this;axios.post(route("Backend.Products.Get.Category.Unit").url()).then((function(e){t.categories=e.data.categories,t.units=e.data.units})).catch((function(t){return console.log(t.response)}))}},u=o(4),l=Object(u.a)(a,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("b-modal",{attrs:{size:"xl","header-bg-variant":"dark","header-text-variant":"light","no-body":"",title:(t.form.id?"Edit ":"Add ")+"Product",lazy:""},on:{hidden:function(e){t.$router.go(-1),t.$emit("reset",!0)}},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var n=e.cancel;return[o("b-button",{ref:"submitBtn",attrs:{variant:"primary"},on:{click:t.onSubmit}},[t._v("SUBMIT")]),t._v(" "),o("b-button",{on:{click:function(t){return n()}}},[t._v("CANCEL")])]}}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[o("form",{ref:"theForm",on:{submit:function(e){return e.preventDefault(),t.hitSubmit(e)}}},[o("b-row",[o("b-col",[o("b-form-group",{attrs:{label:"Name *"}},[o("b-form-input",{attrs:{placeholder:"Name",required:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Barcode Symbology"}},[o("b-form-select",{attrs:{options:[{text:"Code25",value:"code25"},{text:"Code39",value:"code39"},{text:"Code128",value:"code128"},{text:"EAN8",value:"ean8"},{text:"EAN13",value:"ean13"},{text:"UPC-A",value:"upc-a"},{text:"UPC-E",value:"upc-e"}]},model:{value:t.form.barcode_symbology,callback:function(e){t.$set(t.form,"barcode_symbology",e)},expression:"form.barcode_symbology"}})],1),t._v(" "),o("b-form-group",{attrs:{label:"Code"}},[o("b-form-input",{attrs:{type:"text",placeholder:"Code (Barcode/SKU/UPC/ISBN)"},model:{value:t.form.code,callback:function(e){t.$set(t.form,"code",e)},expression:"form.code"}})],1),t._v(" "),o("b-form-row",[o("b-col",[o("b-form-group",{attrs:{label:"Quantity"}},[o("b-form-input",{attrs:{type:"number",step:"any",placeholder:"Product Quantity"},model:{value:t.form.quantity,callback:function(e){t.$set(t.form,"quantity",e)},expression:"form.quantity"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Alert Quantity"}},[o("b-form-input",{attrs:{type:"number",step:"any",placeholder:"Product Alert Quantity"},model:{value:t.form.alert_quantity,callback:function(e){t.$set(t.form,"alert_quantity",e)},expression:"form.alert_quantity"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{attrs:{label:"Unit"}},[o("b-form-select",{attrs:{options:t.units},model:{value:t.form.unit_id,callback:function(e){t.$set(t.form,"unit_id",e)},expression:"form.unit_id"}})],1)],1)],1)],1),t._v(" "),o("b-col",[o("b-form-row",[o("b-col",[o("b-form-group",{attrs:{label:"Status"}},[o("b-form-select",{attrs:{options:[{text:"Active",value:1},{text:"Inactive",value:0}]},model:{value:t.form.status,callback:function(e){t.$set(t.form,"status",e)},expression:"form.status"}})],1)],1),t._v(" "),o("b-col",[o("b-form-group",{scopedSlots:t._u([{key:"label",fn:function(){return[t._v("\n                                Photo\n                                "),t.form.photo_url?o("a",{attrs:{target:"_blank",href:t.form.photo_url}},[o("i",{staticClass:"fa fa-link"})]):t._e()]},proxy:!0}])},[t._v(" "),o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{attrs:{title:"Reset"},on:{click:function(e){t.form.photo=null,t.form.photo_upload=null,t.form.photo_url=null}}},[t._v("\n                                        x\n                                    ")])]},proxy:!0}])},[o("b-form-file",{model:{value:t.form.photo_upload,callback:function(e){t.$set(t.form,"photo_upload",e)},expression:"form.photo_upload"}})],1)],1)],1)],1),t._v(" "),o("b-form-group",{attrs:{label:"Category"}},[o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{on:{click:function(e){t.form.category=null,t.form.category_id=null}}},[t._v("x")])]},proxy:!0}])},[o("vue-select",{attrs:{api_url:t.route("Backend.Categories.Search").url()},on:{input:function(e){t.form.category_id=e?e.id:null}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                                "+t._s([e.item.id,e.item.name].join(" # "))+"\n                            ")]}},{key:"tag",fn:function(e){return[t._v("\n                                "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):"Not Selected")+"\n                            ")]}}]),model:{value:t.form.category,callback:function(e){t.$set(t.form,"category",e)},expression:"form.category"}})],1)],1),t._v(" "),o("b-form-group",{attrs:{label:"Subcategory"}},[o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{on:{click:function(e){t.form.subcategory=null,t.form.subcategory_id=null}}},[t._v("x")])]},proxy:!0}])},[o("vue-select",{attrs:{api_url:t.route("Backend.Subcategories.Search").url()},on:{input:function(e){t.form.subcategory_id=e?e.id:null}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                                "+t._s([e.item.id,e.item.name].join(" # "))+"\n                            ")]}},{key:"tag",fn:function(e){return[t._v("\n                                "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):"Not Selected")+"\n                            ")]}}]),model:{value:t.form.subcategory,callback:function(e){t.$set(t.form,"subcategory",e)},expression:"form.subcategory"}})],1)],1),t._v(" "),o("b-form-group",{attrs:{label:"Brand"}},[o("b-input-group",{scopedSlots:t._u([{key:"append",fn:function(){return[o("b-button",{on:{click:function(e){t.form.brand=null,t.form.brand_id=null}}},[t._v("x")])]},proxy:!0}])},[o("vue-select",{attrs:{api_url:t.route("Backend.Brands.Search").url()},on:{input:function(e){t.form.brand_id=e?e.id:null}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                                "+t._s([e.item.id,e.item.name].join(" # "))+"\n                            ")]}},{key:"tag",fn:function(e){return[t._v("\n                                "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):"Not Selected")+"\n                            ")]}}]),model:{value:t.form.brand,callback:function(e){t.$set(t.form,"brand",e)},expression:"form.brand"}})],1)],1)],1)],1),t._v(" "),o("br"),t._v(" "),o("b-form-group",{attrs:{label:"Description"}},[o("b-form-textarea",{attrs:{placeholder:"Product Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1)],1)])}),[],!1,null,null,null);e.default=l.exports},12:function(t,e,o){"use strict";var n=o(6);e.a={props:{getCreatedItem:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}}},mounted:function(){this.form=this.item,Object(n.d)(this,(function(){}))},data:function(){return{form:{},visible:!0}},methods:{getItem:n.c,onSubmit:n.i,hitSubmit:function(){this.$refs.submitBtn.click()}}}},24:function(t,e,o){"use strict";var n=o(0),r={props:{value:{type:null|Object,default:function(){return null}},api_url:{type:String,default:null,required:!0},prepend:{type:String,default:""},append:{type:String,default:""},placeholder:{type:String,default:"Search Items"},size:{type:String,default:"sm"},autocomplete:{type:String,default:"off"},dropdownVariant:{type:String,default:"outline-secondary"},emptyOptionText:{type:String,default:"No items available to select"},inputClass:{type:String|Array,default:function(){return[]}},clearSearchOnItemSelected:{type:Boolean,default:!1},initOptions:{type:Boolean|String,default:!1},required:{type:Boolean,default:!1},state:{type:Boolean,default:null},hideDdIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},menuClass:{type:String|Object,default:function(){return""}},getFiltered:{type:Function},clearSearchOnDropdownHidden:{type:Boolean,default:function(){return!0}}},data:function(){return{options:[],query:""}},mounted:function(){this.initOptions&&(Object(n.a)(this.initOptions)?this.getItems(""):this.query=this.initOptions)},computed:{getOptions:function(){return"function"==typeof this.getFiltered&&this.getFiltered?this.getFiltered(this.options):this.options}},methods:{reset:function(){this.$emit("input",null),this.query=""},getItems:function(t){var e=this;axios.post(this.api_url,{query:this.query}).then((function(t){e.$set(e,"options",t.data||[])})).catch((function(t){e.$set(e,"options",[]),console.error(t.response)}))},itemSelected:function(t){this.$emit("input",t),this.clearSearchOnItemSelected&&(this.query=null)}}},i=(o(59),o(4)),a=Object(i.a)(r,(function(){var t=this,e=this,o=e.$createElement,n=e._self._c||o;return n("div",{staticClass:"vue-select form-control p-0",class:{"is-invalid":null!==e.state&&e.state,"is-valid":null!==e.state&&!e.state}},[e.required?n("input",{staticStyle:{height:"0",position:"absolute",top:"0",border:"0",outline:"0","z-index":"-1"},attrs:{type:"text",required:!0},domProps:{value:e.value?"initialized":""}}):e._e(),e._v(" "),n("b-dropdown",{class:{"hide-dd-icon":e.hideDdIcon,disabled:e.disabled},attrs:{block:"",lazy:"",variant:e.dropdownVariant,disabled:e.disabled,"toggle-class":"text-left m-0 border-0 border-radius-0","menu-class":e.menuClass},on:{hidden:function(){e.$emit("hidden",!0),t.clearSearchOnDropdownHidden&&(t.query="")}},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._t("tag",[e._v("\n                "+e._s(e.value?e.value:e.placeholder)+"\n            ")],null,{tag:e.value})]},proxy:!0}],null,!0)},[e._v(" "),n("div",{staticClass:"px-2"},[n("b-form-input",{class:e.inputClass,attrs:{autofocus:"",type:"search",size:e.size,placeholder:e.placeholder,autocomplete:e.autocomplete},on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},input:function(t){return e.getItems(t)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),n("b-dropdown-divider"),e._v(" "),e._l(e.getOptions,(function(t,o){return n("b-dropdown-item",{key:o,on:{click:function(o){return e.itemSelected(t)}}},[e._t("option",[e._v("\n                "+e._s(t)+"\n            ")],{item:t,query:e.query})],2)})),e._v(" "),0===e.options.length?[e._t("empty",[0===e.options.length?n("b-dropdown-text",[e._v("\n                    "+e._s(e.emptyOptionText)+"\n                ")]):e._e()],{query:e.query})]:e._e(),e._v(" "),e._t("default_item",null,{query:e.query})],2)],1)}),[],!1,null,null,null);e.a=a.exports},32:function(t,e,o){var n=o(20),r=o(60);"string"==typeof(r=r.__esModule?r.default:r)&&(r=[[t.i,r,""]]);var i={insert:"head",singleton:!1};n(r,i);t.exports=r.locals||{}},59:function(t,e,o){"use strict";var n=o(32);o.n(n).a},60:function(t,e,o){(e=o(21)(!1)).push([t.i,".vue-select .dropdown-menu {\n  max-height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n.vue-select .dropdown-toggle::after {\n  position: absolute;\n  right: 10px;\n  top: 49%;\n}\n.vue-select .border-radius-0 {\n  border-radius: 0 !important;\n}\n.vue-select .top-reverse-100 {\n  top: -100% !important;\n}\n.vue-select .hide-dd-icon .dropdown-toggle::after {\n  display: none !important;\n}\n.vue-select.is-invalid, .vue-select.is-valid {\n  background-position: right calc(1.4em + 0.1875rem) center !important;\n}",""]),t.exports=e}}]);