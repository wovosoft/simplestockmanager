(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{120:function(e,t,a){"use strict";a.r(t);var i={mixins:[a(13).a]},n=a(4),r=Object(n.a)(i,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("b-modal",{attrs:{visible:"",size:"xl","header-bg-variant":"dark","header-text-variant":"light","no-body":"",title:"View Brand",lazy:""},on:{hidden:function(t){return e.$router.go(-1)}}},[a("b-row",[a("b-col",[a("b-table",{attrs:{small:"",bordered:"",hover:"",striped:"","head-variant":"dark",items:e.obj2Table(e.the_item,["deleted_at","image"]),fields:[{key:"key",sortable:!0,formatter:function(t){return e.startCase(t)}},{key:"value",sortable:!0}]},scopedSlots:e._u([{key:"cell(value)",fn:function(t){return[["created_at","updated_at"].includes(t.item.key)?[e._v("\n                        "+e._s(e._f("dayjs")(t.item.value))+"\n                    ")]:["description"].includes(t.item.key)?[a("div",{domProps:{innerHTML:e._s(t.item.value)}})]:["thumbnail"].includes(t.item.key)?[a("b-img-lazy",{attrs:{fluid:"",src:t.item.value}})]:[e._v(e._s(t.item.value))]]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=r.exports},13:function(e,t,a){"use strict";var i=a(6),n=a(14);t.a={props:{item:{type:Object,default:function(){return{}}}},methods:{obj2Table:i.g,startCase:n.a,getItem:i.c},data:function(){return{the_item:{}}},mounted:function(){var e=this;this.the_item=this.item,Object.keys(this.item).length||this.getItem(this.$route.params.id,this.$parent.$props.api_url).then((function(t){e.the_item=t.data})).catch((function(e){return console.log(e.response)}))}}}}]);