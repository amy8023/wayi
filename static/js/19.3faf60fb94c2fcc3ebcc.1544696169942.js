webpackJsonp([19],{"2V6T":function(n,t,a){(n.exports=a("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},THPy:function(n,t,a){var e=a("oj5I");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("1a83ef51",e,!0)},fHP3:function(n,t,a){(n.exports=a("FZ+f")(!1)).push([n.i,"\n.block[data-v-fc45fe28] {\n    text-align: center;\n    margin-top: 20px\n}\n.content[data-v-fc45fe28] {\n    background: #fff\n}\n.mt_20[data-v-fc45fe28] {\n    margin-top: 20px\n}\n\n\n\n\n\n\n",""])},h225:function(n,t,a){var e=a("fHP3");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("6393d403",e,!0)},kWm6:function(n,t,a){var e=a("2V6T");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("e0b557f8",e,!0)},oj5I:function(n,t,a){(n.exports=a("FZ+f")(!1)).push([n.i,"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n",""])},uZaa:function(n,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=a("FsUW"),r=a("4/BI"),i={data:function(){return{activeName2:"first",loading:!1,tableData:[],account:"",page:{pageNum:1,pageSize:20,totalCount:""},arr:[]}},created:function(){this.init()},filters:{formatDate:function(n){if(n){var t=new Date(n);return Object(r.b)(t,"yyyy-MM-dd")}}},methods:{init:function(){var n=this;this.loading=!0,Object(e.b)(this.page.pageNum,this.page.pageSize,{}).then(function(t){n.loading=!1,t.data.type?(n.tableData=t.data.body.result,n.page.pageNum=t.data.body.pageNum,n.page.pageSize=t.data.body.pageSize,n.page.totalCount=t.data.body.totalCount):n.$message.error(t.data.body)})},handleSizeChange:function(n){this.page.pageSize=n,this.init()},handleCurrentChange:function(n){this.page.pageNum=n,this.init()}}},l={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"content"},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"mt_20",staticStyle:{width:"100%"},attrs:{data:n.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{label:"日期",prop:"date",fixed:"left",sortable:""},scopedSlots:n._u([{key:"default",fn:function(t){return[t.row.date?a("el-tag",{attrs:{size:"mini"}},[n._v(n._s(n._f("formatDate")(t.row.date)))]):n._e()]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"block",label:"区块数",width:""}}),n._v(" "),a("el-table-column",{attrs:{prop:"uncle",label:"叔块数"}}),n._v(" "),a("el-table-column",{attrs:{prop:"orphan",label:"孤块数"}}),n._v(" "),a("el-table-column",{attrs:{prop:"reward",label:"奖励",width:"150"}})],1),n._v(" "),n.tableData.length?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":n.page.pageNum,"page-sizes":[20,50,100],"page-size":n.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:parseInt(n.page.totalCount)},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange}})],1):n._e()],1)},staticRenderFns:[]};var o={data:function(){return{activeName2:"first",loading:!0,tableData:[],account:"",page:{pageNum:1,pageSize:20,totalCount:""},pageParm:{limit:10,page:1},arr:[]}},created:function(){this.getTitle(),this.init()},filters:{formatDate:function(n){if(n){var t=new Date(n);return Object(r.b)(t,"yyyy-MM-dd hh:mm:ss")}}},methods:{getTitle:function(){var n=this;Object(e.f)({}).then(function(t){t.data.type?n.arr=t.data.body:n.$message.error(t.data.body)})},init:function(){var n=this;this.loading=!0,Object(e.c)(this.page.pageNum,this.page.pageSize,{}).then(function(t){n.loading=!1,t.data.type?(n.tableData=t.data.body.result,n.page.pageNum=t.data.body.pageNum,n.page.pageSize=t.data.body.pageSize,n.page.totalCount=t.data.body.totalCount):n.$message.error("获取列表失败！")})},handleSizeChange:function(n){this.page.pageSize=n,this.init()},handleCurrentChange:function(n){this.page.pageNum=n,this.init()}}},s={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"content"},[n._l(n.arr,function(t){return a("el-row",{key:t.num,attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[n._v("\n                  爆块数量:"+n._s(t.num)+"\n              ")])]),n._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[n._v("\n                  总运气值:"+n._s(t.luck)+"\n              ")])]),n._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[n._v("\n                  叔块率:"+n._s(t.uncleRate)+"\n              ")])]),n._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[n._v("\n                  孤块率:"+n._s(t.orphanRate)+"\n              ")])])],1)}),n._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:n.loading,expression:"loading"}],staticClass:"mt_20",staticStyle:{width:"100%"},attrs:{data:n.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"height",label:"区块高度",width:"150"}}),n._v(" "),a("el-table-column",{attrs:{prop:"blockHash",label:"区块地址",width:"500"}}),n._v(" "),a("el-table-column",{attrs:{label:"爆块时间",prop:"date",sortable:"",width:"150"},scopedSlots:n._u([{key:"default",fn:function(t){return[t.row.date?a("el-tag",{attrs:{size:"mini"}},[n._v(n._s(n._f("formatDate")(t.row.date)))]):n._e()]}}])}),n._v(" "),a("el-table-column",{attrs:{prop:"variance",label:"运气值"}}),n._v(" "),a("el-table-column",{attrs:{prop:"reward",label:"奖励"}}),n._v(" "),a("el-table-column",{attrs:{prop:"machineId",label:"爆块矿机"}})],1),n._v(" "),n.tableData.length?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":n.page.pageNum,"page-sizes":[20,50,100],"page-size":n.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:parseInt(n.page.totalCount)},on:{"size-change":n.handleSizeChange,"current-change":n.handleCurrentChange}})],1):n._e()],2)},staticRenderFns:[]};var c={data:function(){return{activeName2:"first"}},components:{Income_current:a("VU/8")(i,l,!1,function(n){a("kWm6")},"data-v-79765ca6",null).exports,Income_history:a("VU/8")(o,s,!1,function(n){a("THPy")},"data-v-3b035d50",null).exports}},p={render:function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"app-container"},[a("el-tabs",{attrs:{type:"card"},model:{value:n.activeName2,callback:function(t){n.activeName2=t},expression:"activeName2"}},[a("el-tab-pane",{attrs:{label:"每日统计",name:"first"}},[a("Income_current")],1),n._v(" "),a("el-tab-pane",{attrs:{label:"爆块历史",name:"second"}},[a("Income_history")],1)],1)],1)},staticRenderFns:[]};var d=a("VU/8")(c,p,!1,function(n){a("h225")},"data-v-fc45fe28",null);t.default=d.exports}});
