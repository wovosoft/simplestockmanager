(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{113:function(t,e,n){"use strict";n.r(e);var i=n(12),o=n(24),r=n(17),a=n.n(r),l={components:{VueSelect:o.a},mixins:[i.a],props:{submit_url:{type:String,default:function(){return route("Backend.Check.Outs.Store").url()}}},methods:{initForm:function(){this.form.datetime?this.form.datetime=a()(this.form.datetime).format("YYYY-MM-DDTHH:mm:ss"):this.form.datetime=a()().format("YYYY-MM-DDTHH:mm:ss"),this.form.items||this.$set(this.form,"items",[])},addItem:function(t){this.form.items.push({name:t.name,product_id:t.id,available:t.quantity,quantity:1,code:t.code})}}},u=n(4),s=Object(u.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("b-modal",{attrs:{size:"lg","header-bg-variant":"dark","header-text-variant":"light","no-body":"",title:(t.form.id?"Edit ":"Add ")+"Check Out",lazy:""},on:{hidden:function(e){t.$router.go(-1),t.$emit("reset",!0)},shown:t.initForm},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var i=e.cancel;return[n("b-button",{ref:"submitBtn",attrs:{variant:"primary"},on:{click:t.onSubmit}},[t._v("SUBMIT")]),t._v(" "),n("b-button",{on:{click:function(t){return i()}}},[t._v("CANCEL")])]}}]),model:{value:t.visible,callback:function(e){t.visible=e},expression:"visible"}},[n("form",{ref:"theForm",on:{submit:function(e){return e.preventDefault(),t.hitSubmit(e)}}},[n("b-row",[n("b-col",[n("b-form-group",{attrs:{label:"Date & Time"}},[n("b-form-input",{attrs:{type:"datetime-local",step:"any"},model:{value:t.form.datetime,callback:function(e){t.$set(t.form,"datetime",e)},expression:"form.datetime"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Reference"}},[n("b-form-input",{attrs:{placeholder:"Reference"},model:{value:t.form.reference,callback:function(e){t.$set(t.form,"reference",e)},expression:"form.reference"}})],1)],1),t._v(" "),n("b-col",[n("b-form-group",{attrs:{label:"Supplier"}},[n("vue-select",{attrs:{required:"",api_url:t.route("Backend.Suppliers.Search").url()},on:{input:function(e){return t.form.supplier_id=e?e.id:null}},scopedSlots:t._u([{key:"tag",fn:function(e){return[t._v("\n                                "+t._s(e.tag?[e.tag.id,e.tag.name].join(" # "):"Not Selected")+"\n                            ")]}},{key:"option",fn:function(e){return[t._v("\n                                "+t._s([e.item.id,e.item.name].join(" # "))+"\n                            ")]}}]),model:{value:t.form.supplier,callback:function(e){t.$set(t.form,"supplier",e)},expression:"form.supplier"}})],1),t._v(" "),n("b-form-group",{attrs:{label:"Attachment"}},[n("b-form-file",{model:{value:t.form.attachment_upload,callback:function(e){t.$set(t.form,"attachment_upload",e)},expression:"form.attachment_upload"}})],1)],1)],1),t._v(" "),n("b-form-group",{attrs:{label:"Note"}},[n("b-form-textarea",{attrs:{placeholder:"check-out Note"},model:{value:t.form.note,callback:function(e){t.$set(t.form,"note",e)},expression:"form.note"}})],1),t._v(" "),n("vue-select",{attrs:{placeholder:"Search & Select Products",api_url:t.route("Backend.Products.Search").url()},on:{input:function(e){return t.addItem(e)}},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                    "+t._s([e.item.id,e.item.name].join(" # "))+" ("+t._s(e.item.code)+")\n                ")]}}])}),t._v(" "),n("b-table",{attrs:{bordered:"",hover:"",striped:"",small:"","head-variant":"dark",items:t.form.items,fields:[{key:"name",formatter:function(t,e,n){return[n.product_id,n.name].join(" # ")}},"code","available","quantity",{key:"action",tdClass:"text-right",thClass:"text-right"}]},scopedSlots:t._u([{key:"cell(quantity)",fn:function(e){return[n("b-form-input",{attrs:{type:"number",size:"sm",max:e.item.available},model:{value:e.item.quantity,callback:function(n){t.$set(e.item,"quantity",n)},expression:"row.item.quantity"}})]}},{key:"cell(action)",fn:function(e){return[n("b-button",{attrs:{size:"sm",variant:"danger",title:"Remove Item"},on:{click:function(n){return t.form.items.splice(e.index,1)}}},[n("i",{staticClass:"fa fa-trash"})])]}}])})],1)])}),[],!1,null,null,null);e.default=s.exports},12:function(t,e,n){"use strict";var i=n(6);e.a={props:{getCreatedItem:{type:Boolean,default:!1},item:{type:Object,default:function(){return{}}}},mounted:function(){this.form=this.item,Object(i.d)(this,(function(){}))},data:function(){return{form:{},visible:!0}},methods:{getItem:i.c,onSubmit:i.i,hitSubmit:function(){this.$refs.submitBtn.click()}}}},24:function(t,e,n){"use strict";var i=n(0),o={props:{value:{type:null|Object,default:function(){return null}},api_url:{type:String,default:null,required:!0},prepend:{type:String,default:""},append:{type:String,default:""},placeholder:{type:String,default:"Search Items"},size:{type:String,default:"sm"},autocomplete:{type:String,default:"off"},dropdownVariant:{type:String,default:"outline-secondary"},emptyOptionText:{type:String,default:"No items available to select"},inputClass:{type:String|Array,default:function(){return[]}},clearSearchOnItemSelected:{type:Boolean,default:!1},initOptions:{type:Boolean|String,default:!1},required:{type:Boolean,default:!1},state:{type:Boolean,default:null},hideDdIcon:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},menuClass:{type:String|Object,default:function(){return""}},getFiltered:{type:Function},clearSearchOnDropdownHidden:{type:Boolean,default:function(){return!0}}},data:function(){return{options:[],query:""}},mounted:function(){this.initOptions&&(Object(i.a)(this.initOptions)?this.getItems(""):this.query=this.initOptions)},computed:{getOptions:function(){return"function"==typeof this.getFiltered&&this.getFiltered?this.getFiltered(this.options):this.options}},methods:{reset:function(){this.$emit("input",null),this.query=""},getItems:function(t){var e=this;axios.post(this.api_url,{query:this.query}).then((function(t){e.$set(e,"options",t.data||[])})).catch((function(t){e.$set(e,"options",[]),console.error(t.response)}))},itemSelected:function(t){this.$emit("input",t),this.clearSearchOnItemSelected&&(this.query=null)}}},r=(n(59),n(4)),a=Object(r.a)(o,(function(){var t=this,e=this,n=e.$createElement,i=e._self._c||n;return i("div",{staticClass:"vue-select form-control p-0",class:{"is-invalid":null!==e.state&&e.state,"is-valid":null!==e.state&&!e.state}},[e.required?i("input",{staticStyle:{height:"0",position:"absolute",top:"0",border:"0",outline:"0","z-index":"-1"},attrs:{type:"text",required:!0},domProps:{value:e.value?"initialized":""}}):e._e(),e._v(" "),i("b-dropdown",{class:{"hide-dd-icon":e.hideDdIcon,disabled:e.disabled},attrs:{block:"",lazy:"",variant:e.dropdownVariant,disabled:e.disabled,"toggle-class":"text-left m-0 border-0 border-radius-0","menu-class":e.menuClass},on:{hidden:function(){e.$emit("hidden",!0),t.clearSearchOnDropdownHidden&&(t.query="")}},scopedSlots:e._u([{key:"button-content",fn:function(){return[e._t("tag",[e._v("\n                "+e._s(e.value?e.value:e.placeholder)+"\n            ")],null,{tag:e.value})]},proxy:!0}],null,!0)},[e._v(" "),i("div",{staticClass:"px-2"},[i("b-form-input",{class:e.inputClass,attrs:{autofocus:"",type:"search",size:e.size,placeholder:e.placeholder,autocomplete:e.autocomplete},on:{keypress:function(t){if(!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;t.preventDefault()},input:function(t){return e.getItems(t)}},model:{value:e.query,callback:function(t){e.query=t},expression:"query"}})],1),e._v(" "),i("b-dropdown-divider"),e._v(" "),e._l(e.getOptions,(function(t,n){return i("b-dropdown-item",{key:n,on:{click:function(n){return e.itemSelected(t)}}},[e._t("option",[e._v("\n                "+e._s(t)+"\n            ")],{item:t,query:e.query})],2)})),e._v(" "),0===e.options.length?[e._t("empty",[0===e.options.length?i("b-dropdown-text",[e._v("\n                    "+e._s(e.emptyOptionText)+"\n                ")]):e._e()],{query:e.query})]:e._e(),e._v(" "),e._t("default_item",null,{query:e.query})],2)],1)}),[],!1,null,null,null);e.a=a.exports},32:function(t,e,n){var i=n(20),o=n(60);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var r={insert:"head",singleton:!1};i(o,r);t.exports=o.locals||{}},59:function(t,e,n){"use strict";var i=n(32);n.n(i).a},60:function(t,e,n){(e=n(21)(!1)).push([t.i,".vue-select .dropdown-menu {\n  max-height: 300px;\n  overflow-y: auto;\n  width: 100%;\n}\n.vue-select .dropdown-toggle::after {\n  position: absolute;\n  right: 10px;\n  top: 49%;\n}\n.vue-select .border-radius-0 {\n  border-radius: 0 !important;\n}\n.vue-select .top-reverse-100 {\n  top: -100% !important;\n}\n.vue-select .hide-dd-icon .dropdown-toggle::after {\n  display: none !important;\n}\n.vue-select.is-invalid, .vue-select.is-valid {\n  background-position: right calc(1.4em + 0.1875rem) center !important;\n}",""]),t.exports=e}}]);