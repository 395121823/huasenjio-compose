(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-56130ecb"],{"23a5":function(e,t,a){},"7db0":function(e,t,a){"use strict";var n=a("23e7"),i=a("b727").find,o=a("44d2"),r=!0;"find"in[]&&Array(1).find((function(){r=!1})),n({target:"Array",proto:!0,forced:r},{find:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("find")},a9ce:function(e,t,a){"use strict";a("23a5")},f6af:function(e,t,a){"use strict";a.r(t);var n=a("5530"),i=a("1da1"),o=a("2909"),r=(a("96cf"),a("7db0"),a("d81d"),a("b0c0"),a("159b"),a("a434"),a("d3b7"),a("99af"),a("ca7f")),c=a("102f"),s=a("dc92"),l={name:"TakeManage",components:{TableList:r.a,DialogForm:c.a},data:function(){return{total:0,tableData:[],tableMap:[{label:"网站名称",key:"name"},{label:"网站链接",key:"url"},{label:"网站描述",key:"description"},{label:"网站图标",key:"icon"},{label:"备注",key:"remarks"},{label:"权限码",key:"code"},{label:"是否可用",key:"enabled"}],searchForm:{name:"",code:""},searchFormMap:[{label:"名称",type:"input",key:"name"},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code}],show:!1,showImport:!1,mode:"add",importMode:"add",formMap:[{label:"名称",key:"name",type:"input"},{label:"链接",key:"url",type:"input"},{label:"图标",key:"icon",type:"icon"},{label:"描述",key:"description",type:"input"},{label:"网站标签",key:"siteTag",type:"select",selectOptions:[],selectConfig:{"allow-create":!0,filterable:!0,multiple:!0}},{label:"所属栏目",key:"columnId",type:"select",selectOptions:[],selectConfig:{"allow-create":!0,filterable:!0,multiple:!0}},{label:"权限码",key:"code",type:"select",selectOptions:this.CONSTANT.dictionary.code},{label:"备注",key:"remarks",type:"input"},{label:"是否可用",key:"enabled",type:"switch"}],importFormMap:[{label:"网站标签",key:"siteTag",type:"select",selectOptions:[],selectConfig:{"allow-create":!0,filterable:!0,multiple:!0}},{label:"所属栏目",key:"columnId",type:"select",selectOptions:[],selectConfig:{filterable:!0,multiple:!0}},{label:"网站数据",key:"siteData",type:"textarea"}],rule:{name:[{validator:Object(s.b)(["isNoEmpty::必填项","minLength:2::长度不能小于2","maxLength:20::长度不能大于20"]),trigger:"blur"}],url:[{validator:Object(s.b)(["isNoEmpty::必填项","isUrl::请输入正确的网址"]),trigger:"blur"}],expand:[{validator:Object(s.b)(["isNoEmpty::必填项","isJSONObject::请输入JSON对象"]),trigger:"blur"}]},importRule:{siteData:[{validator:Object(s.b)(['isSiteList::格式: [{"name":"名称","url":"http://huasen.cc/","description":"描述"}]']),trigger:"blur"}]},form:{name:"",url:"",icon:"",description:"",remarks:"",expand:"{}",enabled:!0,code:0,siteTag:[],columnId:[]},importForm:{siteTag:[],columnId:[],siteData:""},initForm:null,pageNo:1,pageSize:10,siteTagNameOptions:[],columnOptions:[]}},mounted:function(){this.queryData(),this.queryColumnData()},methods:{queryData:function(){var e=this,t=Object.assign({pageNo:this.pageNo,pageSize:this.pageSize},this.searchForm);this.API.findSiteByPage(t,{notify:!1}).then((function(t){e.tableData=t.data.list,e.total=t.data.total,e.cancel(),e.cancelImportSite()})),this.API.findSiteTagByList({},{notify:!1}).then((function(t){var a=e.formMap.find((function(e){return"siteTag"===e.key})),n=e.importFormMap.find((function(e){return"siteTag"===e.key}));e.siteTagNameOptions=t.data.map((function(e){return{label:e,value:e}})),a&&(a.selectOptions=Object(o.a)(e.siteTagNameOptions)),n&&(n.selectOptions=Object(o.a)(e.siteTagNameOptions))}))},queryColumnData:function(){var e=this;this.API.findColumnByList({},{notify:!1}).then((function(t){e.columnOptions=t.data.map((function(e){return{label:e.name,value:e._id}}));var a=e.importFormMap.find((function(e){return"columnId"===e.key})),n=e.formMap.find((function(e){return"columnId"===e.key}));a&&(a.selectOptions=Object(o.a)(e.columnOptions)),n&&(n.selectOptions=Object(o.a)(e.columnOptions))}))},updatePagination:function(e,t){this.pageNo=e,this.pageSize=t},handleRemove:function(e,t){var a=this;this.API.removeSite({_id:t._id}).then((function(e){a.queryData()}))},handleRemoveMany:function(e){var t=this,a=e.map((function(e){return e._id}));this.API.removeManySite({_ids:a}).then((function(e){t.queryData()}))},handleAdd:function(){var e=this;this.show=!0,this.mode="add",this.$nextTick((function(){e.initForm=e.LODASH.cloneDeep(e.form)}))},handleAddMany:function(){this.showImport=!0},handleEdit:function(e,t){var a=this;this.show=!0,this.mode="edit",this.$nextTick(Object(i.a)(regeneratorRuntime.mark((function e(){var n,i,o,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=[],i=[],e.prev=2,o=JSON.parse(t.expand||"{}"),n=o.tag||[],e.next=7,a.API.findSiteColmunByList({siteId:t._id});case 7:r=e.sent,i=r.data||[],e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),a.$tips("error","初始化编辑数据异常","top-right",2e3);case 14:a.form=Object.assign(a.form,t,{siteTag:n,columnId:i}),a.initForm=a.LODASH.cloneDeep(a.form);case 16:case"end":return e.stop()}}),e,null,[[2,11]])}))))},paginationChange:function(){this.queryData()},save:function(e){var t=this;return Object(i.a)(regeneratorRuntime.mark((function e(){var a,i,o,r,c,s,l,m,u,d,p;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a=Object(n.a)({},t.form),i=[],o=[],r=[],c=[],t.initForm.columnId.forEach((function(e){-1===a.columnId.indexOf(e)&&i.push(e)})),a.columnId.forEach((function(e,n){-1===t.initForm.columnId.indexOf(e)&&(t.columnOptions.find((function(t){return t.value===e}))?o.push(e):(r.push({name:e}),a.columnId.splice(n,1)))})),!r.length){e.next=12;break}return e.next=10,t.API.addColumn({data:r});case 10:s=e.sent,c=s.data.map((function(e){return e._id}));case 12:if(l=JSON.parse(a.expand),(l="[object Object]"===Object.prototype.toString.call(l)?l:{}).tag=a.siteTag,l.columnStore=a.columnId.concat(c),m=JSON.stringify(l),a.expand=m,u=[],"edit"!==t.mode){e.next=25;break}return e.next=22,t.API.updateSite(a);case 22:u.push(a._id),e.next=32;break;case 25:if("add"!==t.mode){e.next=32;break}return delete a._id,delete a._v,e.next=30,t.API.addSite(a);case 30:d=e.sent,u.push(d.data[0]._id);case 32:if(!(p=o.concat(c)).length){e.next=36;break}return e.next=36,t.API.bindSiteToColumn({columnIds:p,siteIds:u});case 36:if(!i.length){e.next=39;break}return e.next=39,t.API.unbindSiteToColumn({columnIds:i,siteIds:u});case 39:t.queryColumnData(),t.queryData();case 41:case"end":return e.stop()}}),e)})))()},saveImportSite:function(){var e=this;return Object(i.a)(regeneratorRuntime.mark((function t(){var a,i,r,c;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=Object(n.a)({},e.importForm),t.prev=1,(i=JSON.parse(a.siteData)).forEach((function(e){if(a.siteTag.length){var t={};t.tag=a.siteTag,t.columnStore=a.columnId.length?Object(o.a)(a.columnId):void 0,e.expand=JSON.stringify(t)}})),t.next=6,e.API.addManySite({sites:i});case 6:if(r=t.sent,!a.columnId.length){t.next=11;break}return c=r.data.map((function(e){return e._id})),t.next=11,e.API.bindSiteToColumn({columnIds:a.columnId,siteIds:c},{notify:!1});case 11:e.queryData(),t.next=17;break;case 14:t.prev=14,t.t0=t.catch(1),e.$tips("error","导入失败","top-right",2e3);case 17:case"end":return t.stop()}}),t,null,[[1,14]])})))()},cancelImportSite:function(){this.$refs.dialogImportForm&&this.$refs.dialogImportForm.close(),this.showImport=!1},cancel:function(){this.$refs.dialogForm&&this.$refs.dialogForm.close(),this.show=!1,this.initForm=null}}},m=(a("a9ce"),a("2877")),u=Object(m.a)(l,(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"site-manage"},[a("TableList",{attrs:{tableData:e.tableData,tableMap:e.tableMap,formData:e.searchForm,formMap:e.searchFormMap,total:e.total,showAdd:!0,showAddMany:!0,showSelection:!0},on:{"update:formData":function(t){e.searchForm=t},"update:form-data":function(t){e.searchForm=t},edit:e.handleEdit,add:e.handleAdd,addMany:e.handleAddMany,remove:e.handleRemove,removeMany:e.handleRemoveMany,search:e.queryData,paginationChange:e.paginationChange,updatePagination:e.updatePagination}}),e.show?a("DialogForm",{ref:"dialogForm",attrs:{width:"520",maxHeight:"480",title:"add"==e.mode?"添加网链":"编辑网链",visible:e.show,formMap:e.formMap,formData:e.form,formRule:e.rule,"close-on-click-modal":!1,mode:e.mode,buttons:{comfirm:"确 认",cancel:"取 消"}},on:{"update:visible":function(t){e.show=t},"update:formData":function(t){e.form=t},"update:form-data":function(t){e.form=t},comfirmForm:e.save,cancelForm:e.cancel}}):e._e(),e.showImport?a("DialogForm",{ref:"dialogImportForm",attrs:{width:"420",maxHeight:"480",title:"导入站点",visible:e.showImport,formMap:e.importFormMap,formData:e.importForm,formRule:e.importRule,"close-on-click-modal":!1,mode:e.importMode,buttons:{comfirm:"确 认",cancel:"取 消"}},on:{"update:visible":function(t){e.showImport=t},"update:formData":function(t){e.importForm=t},"update:form-data":function(t){e.importForm=t},comfirmForm:e.saveImportSite,cancelForm:e.cancelImportSite}}):e._e()],1)}),[],!1,null,"663e9458",null);t.default=u.exports}}]);