(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{"4IVG":function(t,e,a){"use strict";var r={props:{datatable:Object}},s=a("KHd+"),n=Object(s.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),a("div",{staticClass:"col"},[a("b-pagination",{attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"f07d2aaa",null);e.a=n.exports},"63QV":function(t,e,a){"use strict";var r=a("YXO7"),s=a("4IVG"),n={components:{DtHeader:r.a,DtFooter:s.a},props:{title:{type:String,default:""},fields:{type:Array,default:function(){return[]}},datatable:{type:Object,default:function(){return{per_page:10,current_page:1,total:0,from:0,to:0}}},value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"}},data:function(){return{ff:[],cbuttons:[1,2,3]}}},o=a("KHd+"),i=Object(o.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title,"footer-class":"pb-0","body-class":"p-1"},scopedSlots:t._u([{key:"header",fn:function(){return[a("dt-header",{attrs:{custom_buttons:t.custom_buttons,datatable:t.datatable,fields:t.fields,value:t.value,"column-dd-size":t.columnDdSize},on:{input:function(e){return t.$emit("input",e)}}})]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),t._t("table")],2)}),[],!1,null,"379624e4",null);e.a=i.exports},EwT1:function(t,e,a){(e=a("JPst")(!1)).push([t.i,".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}",""]),t.exports=e},YXO7:function(t,e,a){"use strict";var r=a("X/aF"),s={props:{fields:{type:Array,default:function(){return[]}},datatable:Object,value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}},columnDdSize:{type:String,default:"sm"},customButtonSize:{type:String,default:"sm"},searchSize:{type:String,default:"sm"},perPageSize:{type:String,default:"sm"}},data:function(){return{search:""}},methods:{changeVisibility:r.a,startCase:r.m,range:r.j}},n=(a("tuhp"),a("KHd+")),o=Object(n.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col",staticStyle:{"min-width":"150px","max-width":"200px"}},[a("b-input-group",{attrs:{size:t.perPageSize,prepend:"Per Page"}},[a("b-form-select",{staticClass:"form-control",attrs:{options:t.range()},model:{value:t.datatable.per_page,callback:function(e){t.$set(t.datatable,"per_page",e)},expression:"datatable.per_page"}})],1)],1),t._v(" "),a("div",{staticClass:"col",staticStyle:{"min-width":"150px"}},[a("b-form-input",{attrs:{type:"search",size:t.searchSize,placeholder:"Type and Hit Enter to Search the table, ESC to clear"},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.target.value="",void t.$emit("input",""))},change:function(e){t.datatable.current_page=1},input:function(e){return t.$emit("input",t.search)}},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1),t._v(" "),a("div",{staticClass:"col text-right"},[t.custom_buttons&&t.custom_buttons.length?a("b-button-group",{attrs:{size:t.customButtonSize}},[t._l(t.custom_buttons,(function(e,r){return[e.to?a("b-button",{key:r,attrs:{variant:e.variant?e.variant:"dark",to:e.to,exact:"","exact-active-class":"active"}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                ")]):e.cb?a("b-button",{key:r,attrs:{variant:e.variant?e.variant:"dark",exact:"","exact-active-class":"active"},on:{click:e.cb}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                ")]):a("b-button",{key:r,attrs:{variant:e.variant?e.variant:"dark"},on:{click:e.method}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n                ")])]}))],2):t._e(),t._v(" "),a("b-dropdown",{staticClass:"columns-dropdown p-0",attrs:{text:"Columns",size:t.columnDdSize,right:"",variant:"primary"}},[a("ul",{staticClass:"list-group"},t._l(t.fields,(function(e,r){return a("li",{key:r,staticClass:"list-group-item"},[a("b-form-checkbox",{attrs:{value:!0,"uncheched-value":!1},on:{change:function(a){return t.changeVisibility(e,r)}},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"field.visible"}},[t._v("\n                        "+t._s(t.startCase(e.label||e.key))+"\n                    ")])],1)})),0)])],1)])}),[],!1,null,null,null);e.a=o.exports},jUAY:function(t,e,a){var r=a("LboF"),s=a("EwT1");"string"==typeof(s=s.__esModule?s.default:s)&&(s=[[t.i,s,""]]);var n={insert:"head",singleton:!1};r(s,n);t.exports=s.locals||{}},jwnF:function(t,e,a){"use strict";a.r(e);var r=a("YXO7"),s=a("4IVG"),n=a("X/aF"),o=a("63QV"),i=a("EIrz"),l={name:"HistoryList",components:{DtHeader:r.a,DtFooter:s.a,DtTable:o.a},mixins:[n.b],props:{title:{type:String,default:"History"},api_url:{type:String,default:function(){return route("Backend.History.List").url()}},custom_buttons:{type:Array,default:function(){return[]}}},created:function(){this.$route.meta.title=Object(i.a)(this.$route.params.model||"")+" History"},data:function(){var t=this;return{form:{},fields:[{key:"id",sortable:!0},{key:"type",sortable:!0},{key:"created_at",sortable:!0,formatter:function(e){return t.dayjs(e)}}]}},methods:{getItems:function(t){var e=this;return axios.post(this.api_url+"?page="+(t.currentPage?t.currentPage:1),{per_page:this.datatable.per_page,orderBy:t.sortBy||"id",order:Object(n.e)(t.sortDesc)?"desc":"asc",filter:t.filter,model:this.$route.params.model,columns:Object(n.k)(this)}).then((function(t){return e.datatable.total=t.data.total,e.datatable.from=t.data.from,e.datatable.to=t.data.to,e.datatable.current_page=t.data.current_page,t.data.data})).catch((function(t){return console.log(t.response),[]}))},rowClass:function(t,e){if(t&&"row"===e)return t._showDetails?"table-info":void 0}}},c=a("KHd+"),u=Object(c.a)(l,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("dt-table",{attrs:{fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons,title:t.$route.meta.title},scopedSlots:t._u([{key:"table",fn:function(){return[a("b-table",{ref:"datatable",staticClass:"mb-0",attrs:{variant:"primary",responsive:"md",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,"sort-by":t.datatable.sortBy,"sort-desc":t.datatable.sortDesc,filter:t.search,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page,"tbody-tr-class":t.rowClass},on:{"update:sortBy":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sort-by":function(e){return t.$set(t.datatable,"sortBy",e)},"update:sortDesc":function(e){return t.$set(t.datatable,"sortDesc",e)},"update:sort-desc":function(e){return t.$set(t.datatable,"sortDesc",e)},"row-clicked":function(e){return t.$set(e,"_showDetails",!e._showDetails)}},scopedSlots:t._u([{key:"row-details",fn:function(e){return[a("b-row",{attrs:{"no-gutters":""}},[a("b-col",{attrs:{md:"6"}},[a("b-card",{attrs:{title:"Old Values","body-class":"p-2"}},[a("b-table",{attrs:{responsive:"","head-variant":"dark",items:t.obj2Table(e.item.old_values)},scopedSlots:t._u([{key:"cell(key)",fn:function(e){return[t._v("\n                                        "+t._s(t.startCase(e.item.key))+"\n                                    ")]}}],null,!0)})],1)],1),t._v(" "),a("b-col",{attrs:{md:"6"}},[a("b-card",{staticClass:"ml-md-1",attrs:{title:"New Values","body-class":"p-2"}},[a("b-table",{attrs:{responsive:"","head-variant":"dark",items:t.obj2Table(e.item.new_values)},scopedSlots:t._u([{key:"cell(key)",fn:function(e){return[t._v("\n                                        "+t._s(t.startCase(e.item.key))+"\n                                    ")]}}],null,!0)})],1)],1)],1)]}}])})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)}),[],!1,null,null,null);e.default=u.exports},tuhp:function(t,e,a){"use strict";var r=a("jUAY");a.n(r).a}}]);