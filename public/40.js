(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{149:function(e,t,a){"use strict";a.r(t);var i={mixins:[a(9).a]},r=a(4),n=Object(r.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{visible:"",size:"xl","header-bg-variant":"dark","header-text-variant":"light","no-body":"",title:"View Course",lazy:""},on:{hidden:function(t){return e.$router.go(-1)}}},[a("b-row",[a("b-col",[e.the_item.photo?a("b-col",{attrs:{md:"3"}},[a("b-img-lazy",{attrs:{src:e.the_item.photo}})],1):e._e(),e._v(" "),a("b-table",{attrs:{small:"",bordered:"",hover:"",striped:"","head-variant":"dark",items:e.obj2Table(e.the_item,["deleted_at","photo"]),fields:[{key:"key",sortable:!0,formatter:function(t){return e.startCase(t)}},{key:"value",sortable:!0}]},scopedSlots:e._u([{key:"cell(value)",fn:function(t){return[["created_at","updated_at"].includes(t.item.key)?[e._v("\n                        "+e._s(e._f("dayjs")(t.item.value))+"\n                    ")]:e._e(),e._v(" "),["thumbnail"].includes(t.item.key)?[t.item.value?a("b-img-lazy",{attrs:{src:t.item.value}}):e._e()]:["description"].includes(t.item.key)?[a("div",{domProps:{innerHTML:e._s(t.item.value)}})]:[e._v(e._s(t.item.value))]]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=n.exports},9:function(e,t,a){"use strict";var i=a(5),r=a(16);t.a={props:{item:{type:Object,default:function(){return{}}}},methods:{obj2Table:i.g,startCase:r.a,getItem:i.c},data:function(){return{the_item:{}}},mounted:function(){var e=this;this.the_item=this.item,Object.keys(this.item).length||this.getItem(this.$route.params.id,this.$parent.$props.api_url).then((function(t){e.the_item=t.data})).catch((function(e){return console.log(e.response)}))}}}}]);