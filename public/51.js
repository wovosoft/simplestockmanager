(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{111:function(t,e,o){"use strict";o.r(e);var a={name:"Dashboard",methods:{updateSitemap:function(){var t=this;this.$bvModal.msgBoxConfirm("Are you sure?",{okTitle:"Yes Proceed"}).then((function(e){e&&axios.post(route("Backend.Artisan.Command").url(),{command:"sitemap:generate"}).then((function(e){t.$root.msgBox(e.data)})).catch((function(t){console.log(t.response)}))})).catch((function(t){console.log(t.response)}))}}},n=o(4),s=Object(n.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("b-row",[e("b-col",{attrs:{md:"4"}},[e("b-card",{attrs:{header:"Sitemap"}},[e("b-button",{attrs:{variant:"dark"},on:{click:this.updateSitemap}},[this._v("Update Sitemap")])],1)],1)],1)],1)}),[],!1,null,"1fb8848d",null);e.default=s.exports}}]);