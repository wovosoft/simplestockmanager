(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{117:function(e,t,i){"use strict";i.r(t);var s={mixins:[i(9).a]},a=i(4),n=Object(a.a)(s,(function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("b-modal",{attrs:{visible:"",size:"xl","header-bg-variant":"dark","header-text-variant":"light","no-body":"",title:"View Question",lazy:""},on:{hidden:function(t){e.$router.push({name:"McqQuestions"}),e.$parent.currentItem={}}}},[i("b-row",[i("b-col",[i("b-table",{attrs:{small:"",bordered:"",hover:"",striped:"","head-variant":"dark",items:e.obj2Table(e.the_item,["deleted_at","answers"]),fields:[{key:"key",sortable:!0,formatter:function(t){return e.startCase(t)}},{key:"value",sortable:!0}]},scopedSlots:e._u([{key:"cell(value)",fn:function(t){return[["created_at","updated_at"].includes(t.item.key)?[e._v("\n                        "+e._s(e._f("dayjs")(t.item.value))+"\n                    ")]:["photo"].includes(t.item.key)?[t.item.value?i("b-img-lazy",{attrs:{fluid:"",src:t.item.value}}):e._e()]:["options"].includes(t.item.key)?[i("b-table",{attrs:{items:t.item.value,fields:["id","label","answer"]},scopedSlots:e._u([{key:"cell(answer)",fn:function(t){return[i("b-form-checkbox",{attrs:{inline:"",disabled:"",checked:!!Number(t.item.is_answer)}},[e._v("\n                                    "+e._s(t.item.answer)+"\n                                ")])]}}],null,!0)})]:["categories","tags"].includes(t.item.key)?[i("b-table",{attrs:{items:t.item.value,fields:["id","name","description"]}})]:["stimuli","explanations"].includes(t.item.key)?[i("b-table",{attrs:{items:t.item.value,fields:["id","title","content"]}})]:["examinations"].includes(t.item.key)?[i("b-table",{attrs:{items:t.item.value,fields:["id","title","job_id","date"]}})]:["references"].includes(t.item.key)?[i("b-table",{attrs:{items:t.item.value,fields:["id","type","title","url"]},scopedSlots:e._u([{key:"cell(url)",fn:function(t){return[i("a",{attrs:{title:t.item.title,href:t.item.url,target:"_blank"}},[e._v(e._s(t.item.url))])]}}],null,!0)})]:["subjects","books"].includes(t.item.key)?[i("b-table",{attrs:{items:t.item.value,fields:["id","title","description"]}})]:["years"].includes(t.item.key)?[e._v("\n                        "+e._s(t.item.value.join(", "))+"\n                    ")]:[e._v(e._s(t.item.value))]]}}])})],1)],1)],1)}),[],!1,null,null,null);t.default=n.exports},9:function(e,t,i){"use strict";var s=i(5),a=i(16);t.a={props:{item:{type:Object,default:function(){return{}}}},methods:{obj2Table:s.g,startCase:a.a,getItem:s.c},data:function(){return{the_item:{}}},mounted:function(){var e=this;this.the_item=this.item,Object.keys(this.item).length||this.getItem(this.$route.params.id,this.$parent.$props.api_url).then((function(t){e.the_item=t.data})).catch((function(e){return console.log(e.response)}))}}}}]);