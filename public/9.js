(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{18:function(t,e,a){"use strict";var r={props:{datatable:Object}},n=a(4),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[t.datatable.to?[t._v("\n            Showing "+t._s(t.datatable.from||0)+" to "+t._s(t.datatable.to||0)+" = "+t._s(t.datatable.to-t.datatable.from+t.datatable.from)+" items of\n            "+t._s(t.datatable.total)+" items.\n        ")]:[t._v("No Items Found")]],2),t._v(" "),a("div",{staticClass:"col"},[a("b-pagination",{attrs:{align:"right",size:"sm","total-rows":t.datatable.total,"per-page":t.datatable.per_page,"aria-controls":"datatable"},model:{value:t.datatable.current_page,callback:function(e){t.$set(t.datatable,"current_page",e)},expression:"datatable.current_page"}})],1)])}),[],!1,null,"4f65e154",null);e.a=s.exports},19:function(t,e,a){"use strict";var r={inheritAttrs:!1,props:{closeOnSelect:{type:Boolean,default:!0},clearOnSelect:{type:Boolean,default:!1},resetOnSelect:{type:Boolean,default:!1},search:{type:String,default:""},searchItems:{type:Function},api_url:{type:String,default:""},placeholder:{type:String,default:"Type and Search"},formatter:{type:Function,default:function(t){return"".concat(t.text||t.name||JSON.stringify(t))}}},data:function(){return{show_dropdown:!1,current_position:0,items:[],search_value:this.search}},methods:{enterPressed:function(){this.show_dropdown&&(this.$emit("selected",this.items[this.current_position]),this.search_value=this.clearOnSelect?"":this.formatter(this.items[this.current_position]),this.closeOnSelect&&(this.show_dropdown=!1),this.resetOnSelect&&(this.items=[]))},itemClicked:function(t){this.search_value=this.clearOnSelect?"":this.formatter(t),this.resetOnSelect&&(this.items=[]),this.$emit("selected",t)},getList:function(t){var e=this,a=null;(a=""!==this.api_url?axios.post(this.api_url,{search:t.target.value}):this.searchItems(t.target.value))&&a.then((function(t){e.items=t.data||[],e.$emit("items",t.data||[])})).catch((function(t){e.items=[],e.$emit("items",[]),console.error(t.response)}))},hideDropdown:function(){var t=this;setTimeout((function(){return t.show_dropdown=!1}),300),this.current_position=0,this.$emit("dropdownHidden",!0)},changePosition:function(t,e){"down"===e&&this.current_position>this.items.length-1?(this.current_position=this.current_position+1,console.log("down")):"up"===e&&this.current_position>0&&(this.current_position=this.current_position-1,console.log("up"))},fixPosition:function(t){if(this.$refs.ddown_typehead){var e=this.$refs.ddown_typehead.$el.querySelectorAll(".ddown-item");e.length&&e[t||this.current_position].scrollIntoView({behavior:"smooth",block:"nearest",inline:"start"})}}}},n=(a(73),a(4)),s=Object(n.a)(r,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"input-group"},[a("input",t._b({directives:[{name:"model",rawName:"v-model",value:t.search_value,expression:"search_value"}],staticClass:"form-control",attrs:{type:"text",placeholder:t.placeholder},domProps:{value:t.search_value},on:{focusin:function(e){t.show_dropdown=!0,t.$emit("dropdownShown",!0)},focusout:t.hideDropdown,input:[function(e){e.target.composing||(t.search_value=e.target.value)},t.getList],keypress:function(){t.show_dropdown||(t.show_dropdown=!0)},keydown:[function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:(e.preventDefault(),t.enterPressed(e))},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"down",40,e.key,["Down","ArrowDown"]))return null;t.current_position=t.current_position<t.items.length-1?t.current_position+1:t.items.length>0?t.items.length-1:0,t.fixPosition(t.current_position)},function(e){if(!e.type.indexOf("key")&&t._k(e.keyCode,"up",38,e.key,["Up","ArrowUp"]))return null;t.current_position=t.current_position>0?t.current_position-1:0,t.fixPosition(t.current_position)}]}},"input",t.$attrs,!1)),t._v(" "),a("div",{staticClass:"input-group-append"},[a("button",{staticClass:"btn btn-secondary",attrs:{type:"button"},on:{click:function(e){t.search_value="",t.$emit("reset")}}},[t._v("X")])])]),t._v(" "),t.show_dropdown&&t.items.length?a("b-dropdown",{ref:"ddown_typehead",staticClass:"w-100",staticStyle:{top:"-15px"},attrs:{"menu-class":{show:t.show_dropdown,"w-100":!0,"scrollable-dropdown":!0},"toggle-class":"d-none"}},t._l(t.items,(function(e,r){return a("b-dropdown-item",{key:r,class:{"bg-light":t.current_position===r,"ddown-item":!0},staticStyle:{cursor:"pointer"},on:{click:function(a){return t.itemClicked(e)}}},[t._t("option",[t._v("\n                "+t._s(e)+"}\n            ")],null,e)],2)})),1):t._e()],1)}),[],!1,null,null,null);e.a=s.exports},22:function(t,e,a){"use strict";var r=a(43),n=a(18),s={components:{DtHeader:r.a,DtFooter:n.a},props:{title:{type:String,default:""},fields:{type:Array,default:function(){return[]}},datatable:{type:Object,default:function(){return{per_page:10,current_page:1,total:0,from:0,to:0}}},value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}}},data:function(){return{ff:[],cbuttons:[1,2,3]}}},i=a(4),o=Object(i.a)(s,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("b-card",{attrs:{title:t.title},scopedSlots:t._u([{key:"header",fn:function(){return[a("dt-header",{attrs:{custom_buttons:t.custom_buttons,datatable:t.datatable,fields:t.fields,value:t.value},on:{input:function(e){return t.$emit("input",e)}}})]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),t._t("table")],2)}),[],!1,null,"546fdc1d",null);e.a=o.exports},23:function(t,e,a){"use strict";var r=a(8),n={props:{headVariant:{type:String,default:"dark"},bordered:{type:Boolean,default:!0},small:{type:Boolean,default:!0},hover:{type:Boolean,default:!0},striped:{type:Boolean,default:!0},item:{type:Object,required:!0},skip:{type:Array,default:function(){return[]}},as:{type:Object,default:function(){return{key:"key",value:"value"}}},fields:{type:Array,default:function(){return[{key:"key",sortable:!0,formatter:function(t){return Object(r.g)(t)}},{key:"value",sortable:!0}]}}},methods:{obj2Table:r.d,startCase:r.g}},s=a(4),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("b-table",t._b({attrs:{items:t.obj2Table(t.item,t.skip,t.as),fields:t.fields,"head-variant":t.headVariant,bordered:t.bordered,small:t.small,hover:t.hover,striped:t.striped}},"b-table",t.$attrs,!1))}),[],!1,null,"466c06cf",null);e.a=i.exports},40:function(t,e,a){var r=a(20),n=a(74);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};r(n,s);t.exports=n.locals||{}},41:function(t,e,a){var r=a(20),n=a(76);"string"==typeof(n=n.__esModule?n.default:n)&&(n=[[t.i,n,""]]);var s={insert:"head",singleton:!1};r(n,s);t.exports=n.locals||{}},43:function(t,e,a){"use strict";var r=a(8),n={props:{fields:{type:Array,default:function(){return[]}},datatable:Object,value:{type:String,default:""},custom_buttons:{type:Array,default:function(){return[]}}},methods:{range:r.e,changeVisibility:r.a,startCase:r.g}},s=(a(75),a(4)),i=Object(s.a)(n,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"input-group"},[t._m(0),t._v(" "),a("select",{directives:[{name:"model",rawName:"v-model",value:t.datatable.per_page,expression:"datatable.per_page"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){return"_value"in t?t._value:t.value}));t.$set(t.datatable,"per_page",e.target.multiple?a:a[0])}}},t._l(t.range(),(function(e){return a("option",{domProps:{value:e}},[t._v(t._s(e))])})),0)])]),t._v(" "),a("div",{staticClass:"col-md-5"},[a("input",{staticClass:"form-control",attrs:{type:"text",placeholder:"Type and Hit Enter to Search the table, ESC to clear"},domProps:{value:t.value},on:{keydown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"esc",27,e.key,["Esc","Escape"])?null:(e.target.value="",void t.$emit("input",""))},change:function(e){t.datatable.current_page=1},input:function(e){return t.$emit("input",e.target.value)}}})]),t._v(" "),a("div",{staticClass:"col-md-4 text-right"},[a("div",{staticClass:"btn-group"},t._l(t.custom_buttons,(function(e,r){return t.custom_buttons&&t.custom_buttons.length?a("button",{key:r,staticClass:"btn",class:e.variant?"btn-"+e.variant:"btn-dark",attrs:{type:"button"},on:{click:e.method}},[e.icon?a("i",{class:e.icon}):t._e(),t._v(" "+t._s(e.text)+"\n            ")]):t._e()})),0),t._v(" "),a("b-dropdown",{staticClass:"columns-dropdown p-0",attrs:{text:"Columns",right:"",variant:"primary"}},[a("ul",{staticClass:"list-group"},t._l(t.fields,(function(e,r){return a("li",{key:r,staticClass:"list-group-item"},[a("b-form-checkbox",{attrs:{value:!0,"uncheched-value":!1},on:{change:function(a){return t.changeVisibility(e,r)}},model:{value:e.visible,callback:function(a){t.$set(e,"visible",a)},expression:"field.visible"}},[t._v("\n                        "+t._s(t.startCase(e.label||e.key))+"\n                    ")])],1)})),0)])],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"input-group-prepend"},[e("span",{staticClass:"input-group-text"},[this._v("Per Page")])])}],!1,null,null,null);e.a=i.exports},73:function(t,e,a){"use strict";var r=a(40);a.n(r).a},74:function(t,e,a){(e=a(21)(!1)).push([t.i,"\n.scrollable-dropdown {\n    max-height: 300px;\n    overflow-y: auto;\n}\n",""]),t.exports=e},75:function(t,e,a){"use strict";var r=a(41);a.n(r).a},76:function(t,e,a){(e=a(21)(!1)).push([t.i,".columns-dropdown .dropdown-menu {\n  padding: 0 !important;\n  border: 0 !important;\n}\n.columns-dropdown .list-group-item label {\n  cursor: pointer;\n}",""]),t.exports=e},8:function(t,e,a){"use strict";function r(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,r=new Array(e);a<e;a++)r[a]=t[a];return r}function s(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{key:"key",value:"value"},r=[];for(var n in t)if(!e.includes(n)){var s={};s[a.key]=n,s[a.value]=t[n],r.push(s)}return r}function i(t,e){"string"!=typeof this.fields[e].thClass&&(this.fields[e].thClass=""),"string"!=typeof this.fields[e].tdClass&&(this.fields[e].tdClass=""),t.visible?(this.fields[e].thClass+=" d-none",this.fields[e].tdClass+=" d-none"):(this.fields[e].thClass=this.fields[e].thClass.replace("d-none","").trim(),this.fields[e].tdClass=this.fields[e].tdClass.replace("d-none","").trim())}function o(t,e,a){this.$bvToast.toast(t.msg,{title:t.title,variant:t.type,autoHideDelay:e||3e3,appendToast:a||!1})}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:50;return r(Array(e).keys()).map((function(e){return e*t+t}))}function d(t){return!0===t||!1===t}function u(t){return t.fields.map((function(t){if(d(t.visible)&&t.visible&&(!d(t.searchable)||t.searchable))return t.key})).filter((function(t){return null!=t&&""!==("string"==typeof t?t.trim():t)}))}a.d(e,"d",(function(){return s})),a.d(e,"a",(function(){return i})),a.d(e,"c",(function(){return o})),a.d(e,"e",(function(){return l})),a.d(e,"f",(function(){return u})),a.d(e,"g",(function(){return m}));var c=/_/g,f=/([a-z])([A-Z])/g,p=/(\s|^)(\w)/g;function m(t){return t.replace(c," ").replace(f,(function(t,e,a){return e+" "+a})).replace(p,(function(t,e,a){return e+a.toUpperCase()}))}e.b={data:function(){return{search:"",currentItem:{},datatable:{per_page:10,current_page:1,total:0,from:0,to:0},fields:[]}},mounted:function(){var t;(t=this).fields.forEach((function(e){d(e.visible)||t.$set(e,"visible",!0),d(e.visible)&&!e.visible&&(t.$set(e,"thClass","d-none"),t.$set(e,"tdClass","d-none"))})),function(t,e){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=arguments.length>3?arguments[3]:void 0,s=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];"function"==typeof e?e.apply(void 0,r(a)):t.$root.$on("bv::modal::hidden",(function(e,a){"addModal"===a?t.form={}:"viewModal"===a&&(t.currentItem={}),"function"==typeof n&&n.apply(void 0,r(s))}))}(this)},methods:{getItems:function(t){var e,a=this;return axios.post(this.api_url+"?page="+(t.currentPage?t.currentPage:1),{per_page:this.datatable.per_page,orderBy:t.sortBy||"id",order:(e=t.sortDesc,d(e)&&e?"desc":"asc"),filter:t.filter,columns:u(this)}).then((function(t){return a.datatable.total=t.data.total,a.datatable.from=t.data.from,a.datatable.to=t.data.to,a.datatable.current_page=t.data.current_page,t.data.data})).catch((function(t){return console.log(t.response),[]}))},onSubmit:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];axios.post(this.submit_url,this.form,{headers:{"Content-Type":"multipart/form-data"}}).then((function(n){t.$bvModal.hide("addModal"),t.msgBox(n.data),t.$refs.datatable.refresh(),e&&e.apply(void 0,r(a))})).catch((function(e){t.msgBox(e.response),console.log(e.response)}))},trash:function(t){var e=this,a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"datatable",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null;this.$bvModal.msgBoxConfirm("Are you sure?").then((function(n){n&&axios.post(r||e.trash_url,{id:t}).then((function(t){e.msgBox(t.data),e.$refs[a].refresh()})).catch((function(t){e.msgBox(t.response),console.log(t.response)}))})).catch((function(t){console.log(t)}))},msgBox:o,obj2Table:s,startCase:m}}},96:function(t,e,a){"use strict";a.r(e);var r=a(18),n=a(8),s=a(19),i={components:{TypeHead:s.a,DtFooter:r.a},props:{title:{type:String,default:""},api_url:{type:String,default:"/backend/permissions/roles"},trash_url:{type:String,default:"/backend/permissions/revokePermissionToRole"},permission_id:{type:Number,default:0,required:!0},disable_action:{type:Boolean,default:!1}},data:function(){return{_:null,form:{},fields:[{key:"id",sortable:!0,visible:!0},{key:"name",sortable:!0,visible:!0},{key:"description",sortable:!0,visible:!0},{key:"action",sortable:!1,searchable:!1,thClass:{"text-right":!0,"d-none":this.disable_action},tdClass:{"text-right":!0,"d-none":this.disable_action}}],datatable:{per_page:10,current_page:1,total:0,from:0,to:0}}},created:function(){this._=window._},methods:{refresh:function(){this.$refs.datatable.refresh()},searchRoles:function(t){return axios.post("/backend/roles/search",{search:t})},getItems:function(t){var e=this,a=[];if(t.filter)for(var r in this.fields)_.isBoolean(this.fields[r].visible)&&this.fields[r].visible&&(_.isBoolean(this.fields[r].searchable)&&!this.fields[r].searchable||a.push(this.fields[r].key));return this.permission_id?axios.post(this.api_url+"?page="+(t.currentPage?t.currentPage:1),{per_page:this.datatable.per_page,orderBy:t.sortBy,order:t.sortDesc?"desc":"asc",filter:t.filter,columns:a,permission_id:this.permission_id}).then((function(t){return e.datatable.total=t.data.total,e.datatable.from=t.data.from,e.datatable.to=t.data.to,e.datatable.current_page=t.data.current_page,t.data.data})).catch((function(t){return console.log(t.response),[]})):[]},assigneRoleToPermission:function(t){var e=this;console.log({permission_id:this.permission_id,role_id:t.id}),axios.post("/backend/permissions/assignRoleToPermission",{permission_id:this.permission_id,role_id:t.id}).then((function(t){e.msgBox(t.data),e.refresh()})).catch((function(t){e.msgBox(t.response.data),console.log(t.response)}))},detach:function(t){var e=this;this.$bvModal.msgBoxConfirm("Are you sure?",{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!1,headerBgVariant:"dark",headerTextVariant:"light"}).then((function(a){a&&axios.post(e.trash_url,{permission_id:e.permission_id,role_id:t}).then((function(t){console.log(t),e.msgBox(t.data),e.$refs.datatable.refresh()})).catch((function(t){e.msgBox(t.response),console.log(t.response)}))})).catch((function(t){console.log(t)}))},msgBox:n.c}},o=a(4),l=Object(o.a)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{attrs:{"no-body":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"p-0 m-0"},[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"col"},[a("type-head",{attrs:{"search-items":t.searchRoles,autocomplete:"off",placeholder:"Search & Assign Roles"},on:{selected:t.assigneRoleToPermission},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                            "+t._s(e.id)+" # "+t._s(e.name)+"\n                        ")]}}])})],1)])]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),a("b-table",{ref:"datatable",staticClass:"m-0 border-0",attrs:{variant:"primary",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{attrs:{variant:"danger",title:"Revoke Role"},on:{click:function(a){return t.detach(e.item.id)}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" Detach\n                    ")])],1)]}}])})],1)],1)}),[],!1,null,null,null).exports,d={components:{TypeHead:s.a,DtFooter:r.a},props:{title:{type:String,default:""},api_url:{type:String,default:"/backend/permissions/users"},trash_url:{type:String,default:"/backend/permissions/revokePermissionToUser"},permission_id:{type:Number,default:0,required:!0},disable_action:{type:Boolean,default:!1}},data:function(){return{_:null,form:{},fields:[{key:"id",sortable:!0,visible:!0},{key:"name",sortable:!0,visible:!0},{key:"email",sortable:!0,visible:!0},{key:"action",sortable:!1,searchable:!1,thClass:{"text-right":!0,"d-none":this.disable_action},tdClass:{"text-right":!0,"d-none":this.disable_action}}],datatable:{per_page:10,current_page:1,total:0,from:0,to:0}}},created:function(){this._=window._},methods:{refresh:function(){this.$refs.datatable.refresh()},searchUsers:function(t){return axios.post("/backend/users/search",{search:t})},assigneUserToPermission:function(t){var e=this;axios.post("/backend/permissions/assignUserToPermission",{permission_id:this.permission_id,user_id:t.id}).then((function(t){e.msgBox(t.data),e.refresh()})).catch((function(t){e.msgBox(t.response.data),console.log(t.response)}))},getItems:function(t){var e=this;return this.permission_id?axios.post(this.api_url+"?page="+(t.currentPage?t.currentPage:1),{per_page:this.datatable.per_page,orderBy:t.sortBy,order:t.sortDesc?"desc":"asc",filter:t.filter,columns:Object(n.f)(this),permission_id:this.permission_id}).then((function(t){return e.datatable.total=t.data.total,e.datatable.from=t.data.from,e.datatable.to=t.data.to,e.datatable.current_page=t.data.current_page,t.data.data})).catch((function(t){return console.log(t.response),[]})):[]},detach:function(t){var e=this;this.$bvModal.msgBoxConfirm("Are you sure?",{title:"Please Confirm",size:"sm",buttonSize:"sm",okVariant:"danger",okTitle:"YES",cancelTitle:"NO",footerClass:"p-2",hideHeaderClose:!1,centered:!1,headerBgVariant:"dark",headerTextVariant:"light"}).then((function(a){a&&axios.post(e.trash_url,{permission_id:e.permission_id,user_id:t}).then((function(t){console.log(t),e.msgBox(t.data),e.$refs.datatable.refresh()})).catch((function(t){e.msgBox(t.response),console.log(t.response)}))})).catch((function(t){console.log(t)}))},msgBox:n.c}},u=Object(o.a)(d,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("b-card",{attrs:{"no-body":""},scopedSlots:t._u([{key:"header",fn:function(){return[a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("h4",{staticClass:"p-0 m-0"},[t._v(t._s(t.title))])]),t._v(" "),a("div",{staticClass:"col"},[a("type-head",{attrs:{"search-items":t.searchUsers,autocomplete:"off",placeholder:"Search & Assign Users"},on:{selected:t.assigneUserToPermission},scopedSlots:t._u([{key:"option",fn:function(e){return[t._v("\n                            "+t._s(e.id)+" # "+t._s(e.name)+" | "+t._s(e.email)+"\n                        ")]}}])})],1)])]},proxy:!0},{key:"footer",fn:function(){return[a("dt-footer",{attrs:{datatable:t.datatable}})]},proxy:!0}])},[t._v(" "),a("b-table",{ref:"datatable",staticClass:"m-0 border-0",attrs:{variant:"primary",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{attrs:{variant:"danger",title:"Revoke User"},on:{click:function(a){return t.detach(e.item.id)}}},[a("i",{staticClass:"fa fa-trash"}),t._v(" Detach\n                    ")])],1)]}}])})],1)],1)}),[],!1,null,null,null).exports,c={components:{Users:u,Roles:l},props:{submit_url:{type:String,default:null},value:{type:Object,default:function(){return{id:null}}},hide_submit:{type:Boolean,default:!1}},mounted:function(){this.form=JSON.parse(JSON.stringify(this.value))},watch:{form:{handler:function(t){this.$emit("input",t)},deep:!0}},data:function(){return{url:null,form:{}}},methods:{onSubmit:function(){var t=this;axios.post(this.submit_url,this.form).then((function(e){t.$emit("created",e.data)})).catch((function(e){t.$emit("error",e.response),console.log(e.response.data)}))},hitSubmit:function(){this.$refs.submitBtn.click()}}},f=Object(o.a)(c,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("form",{on:{submit:function(e){return e.preventDefault(),t.onSubmit(e)}}},[a("b-form-group",{attrs:{label:"Name *"}},[a("b-form-input",{attrs:{placeholder:"Name",required:!0},model:{value:t.form.name,callback:function(e){t.$set(t.form,"name",e)},expression:"form.name"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Guard Name"}},[a("b-form-input",{attrs:{placeholder:"Guard Name"},model:{value:t.form.guard_name,callback:function(e){t.$set(t.form,"guard_name",e)},expression:"form.guard_name"}})],1),t._v(" "),a("b-form-group",{attrs:{label:"Description"}},[a("b-form-textarea",{attrs:{rows:7,placeholder:"Description"},model:{value:t.form.description,callback:function(e){t.$set(t.form,"description",e)},expression:"form.description"}})],1),t._v(" "),a("b-button",{ref:"submitBtn",attrs:{variant:"primary",hidden:t.hide_submit,block:"",type:"submit"}},[t._v("SUBMIT")])],1)]),t._v(" "),t.form.id?a("div",{staticClass:"col-md-8"},[a("roles",{attrs:{title:"Assigned Roles",permission_id:t.form.id}}),t._v(" "),a("br"),t._v(" "),a("users",{attrs:{title:"Assigned Users",permission_id:t.form.id}})],1):t._e()])}),[],!1,null,null,null).exports,p=a(22),m=a(23),h={name:"PermissionsList",props:{title:{type:String,default:""},debounce:{type:Number,default:300},api_url:{type:String,default:"/backend/permissions/list"},trash_url:{type:String,default:"/backend/permissions/delete"},submit_url:{type:String,default:"/backend/permissions/store"},add_modal_title:{type:String,default:"Add / Edit Permission"},view_modal_title:{type:String,default:"View Permission"},custom_buttons:{type:Array,default:function(){var t=this;return[{text:"Add",method:function(){t.$bvModal.show("addModal")}}]}}},components:{DataView:m.a,DtTable:p.a,AddItem:f,Users:u,Roles:l},mixins:[n.b],mounted:function(){var t=this;this.$root.$on("bv::modal::hidden",(function(e,a){"addModal"===a?t.form={}:"viewModal"===a&&(t.currentItem={})}))},data:function(){return{_:null,form:{},fields:[{key:"id",sortable:!0,visible:!0},{key:"name",sortable:!0,visible:!0},{key:"guard_name",sortable:!0,visible:!0,label:"Guard"},{key:"description",sortable:!0,visible:!0},{key:"created_at",sortable:!0,visible:!0},{key:"updated_at",sortable:!0,visible:!0},{key:"action",sortable:!1,searchable:!1,thClass:"text-right",tdClass:"text-right"}]}},created:function(){this._=window._},methods:{}},b=Object(o.a)(h,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("dt-table",{attrs:{title:t.title,fields:t.fields,datatable:t.datatable,custom_buttons:t.custom_buttons},scopedSlots:t._u([{key:"table",fn:function(){return[a("b-table",{ref:"datatable",attrs:{variant:"primary",responsive:"md",hover:"",bordered:"",small:"",striped:"","head-variant":"dark",items:t.getItems,fields:t.fields,id:"datatable",filter:t.search,"per-page":t.datatable.per_page,"current-page":t.datatable.current_page},scopedSlots:t._u([{key:"cell(action)",fn:function(e){return[a("b-button-group",{attrs:{size:"sm"}},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.viewModal",modifiers:{viewModal:!0}}],attrs:{variant:"primary"},on:{click:function(a){t.currentItem=e.item}}},[a("i",{staticClass:"fa fa-eye"})]),t._v(" "),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.addModal",modifiers:{addModal:!0}}],attrs:{variant:"warning"},on:{click:function(a){t.form=JSON.parse(JSON.stringify(e.item))}}},[a("i",{staticClass:"fa fa-edit"})]),t._v(" "),a("b-button",{attrs:{variant:"danger"},on:{click:function(a){return t.trash(e.item.id)}}},[a("i",{staticClass:"fa fa-trash"})])],1)]}}])})]},proxy:!0}]),model:{value:t.search,callback:function(e){t.search=e},expression:"search"}}),t._v(" "),a("b-modal",{attrs:{id:"addModal",title:t.add_modal_title,size:"xl","header-bg-variant":"dark","header-text-variant":"light",lazy:""},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var r=e.close;return[a("b-button-group",{staticClass:"float-right"},[a("b-button",{attrs:{variant:"primary"},on:{click:function(e){return t.$refs.ItemAdd.hitSubmit()}}},[t._v("SUBMIT")]),t._v(" "),a("b-button",{on:{click:function(t){return r()}}},[t._v("Close")])],1)]}}])},[a("add-item",{ref:"ItemAdd",attrs:{hide_submit:!0,submit_url:t.submit_url},on:{created:function(e){t.$refs.datatable.refresh(),t.$bvModal.hide("addModal"),t.msgBox(e)}},model:{value:t.form,callback:function(e){t.form=e},expression:"form"}})],1),t._v(" "),a("b-modal",{attrs:{id:"viewModal",title:t.view_modal_title,size:"lg","header-bg-variant":"dark","header-text-variant":"light","no-body":"",lazy:""}},[a("data-view",{attrs:{item:t.currentItem}}),t._v(" "),a("roles",{attrs:{title:"Assigned Roles",permission_id:t.currentItem.id}}),t._v(" "),a("br"),t._v(" "),a("users",{attrs:{title:"Assigned Users",permission_id:t.currentItem.id}})],1)],1)}),[],!1,null,null,null);e.default=b.exports}}]);