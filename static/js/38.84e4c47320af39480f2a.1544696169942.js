webpackJsonp([38],{AOYM:function(t,e,a){"use strict";e.a=function(t,e,a){return Object(i.a)({url:"/pool/listAccount/4/"+t+"/"+e,method:"post",data:a})},e.b=function(t){return Object(i.a)({url:"/pool/general/4",method:"post",data:t})},e.c=function(t){return Object(i.a)({url:"pool/hashRate/4",method:"post",data:t})},e.d=function(t,e,a,n){return Object(i.a)({url:"/pool/listWork/"+t+"/"+e+"/"+a,method:"post",data:n})};var i=a("vLgD")},Qjlv:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=a("AOYM"),n=a("4/BI"),o={props:["account"],data:function(){return{isShow:!0,loadingechart:!1,loading:!1,dialogVisible_edit:!1,dialogVisible_add:!1,tableData:[],mine_obj:{mine_name:"",capacity:"",total_seat:"",state:"",person:"",phone:""},lineEchart:{xdata:[],ydata:[],title:"24小时算力"},mine_obj_index:"",num:0,machine_details_obj:{hashrate:"",num:"",onLineNum:"",badNum:""},page:{pageNum:1,pageSize:20,totalCount:""},pageParm:{limit:10,page:1}}},mounted:function(){this.$nextTick(function(){})},created:function(){this.getInitEchart(this.account),this.getInit(this.account)},filters:{formatCoinType:function(t){return Object(n.a)(t)},statusFilter:function(t){return{0:"danger",1:"success",2:"info"}[t]},formatStata:function(t){return{0:"未支付",1:"已支付",2:"取消订单"}[t]},formatDate:function(t){if(t=Number(t)){var e=new Date(t);return Object(n.b)(e,"yyyy-MM-dd hh:mm:ss")}}},components:{Echart:a("VHIn").a},methods:{cancle:function(){this.$router.back(-1)},handleEdit:function(t,e){this.dialogVisible_edit=!0,this.mine_obj=e,this.mine_obj_index=t},edit_submit:function(){this.dialogVisible_edit=!1;var t=this.mine_obj_index;this.tableData[t]=this.mine_obj,this.mine_obj=""},handleAdd:function(){this.dialogVisible_add=!0},handleLook:function(){this.isShow=!1},add_submit:function(){this.num++,this.dialogVisible_add=!1,this.tableData.unshift(this.mine_obj)},handleClose:function(t){this.$confirm("确认关闭？").then(function(e){t()}).catch(function(t){})},getInit:function(t){var e=this;this.loading=!0,Object(i.d)(t,this.page.pageNum,this.page.pageSize,{}).then(function(t){e.loading=!1,t.data.type?(e.machine_details_obj.hashrate=t.data.body.result.hashrate,e.machine_details_obj.num=t.data.body.result.num,e.machine_details_obj.onLineNum=t.data.body.result.onLineNum,e.machine_details_obj.badNum=t.data.body.result.badNum,e.tableData=t.data.body.result.list,e.page.pageNum=t.data.body.pageNum,e.page.pageSize=t.data.body.pageSize,e.page.totalCount=t.data.body.totalCount):e.$message.error(t.data.body)})},getInitEchart:function(t){var e=this;this.loadingechart=!0,Object(i.d)(t,this.page.pageNum,this.page.pageSize,{}).then(function(t){if(e.loadingechart=!1,t.data.type){var a=t.data.body.result.hash24;for(var i in a)e.lineEchart.xdata.push(Object(n.b)(new Date(1e3*a[i].timestamp),"yyyy-MM-dd hh:mm:ss")),e.lineEchart.ydata.push(a[i].hashrateTotal)}else e.$message.error(t.data.body)})},handleSizeChange:function(t){this.page.pageSize=t,this.getInit(this.account)},handleCurrentChange:function(t){this.page.pageNum=t,this.getInit(this.account)}}},l={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("div",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}]},[a("el-button",{attrs:{icon:"el-icon-back"},on:{click:t.cancle}},[t._v(t._s(t.$t("back.back")))]),t._v(" "),a("el-row",{attrs:{gutter:40}},[a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[t._v("\n              "+t._s(t.$t("backPool.hashrate"))+":"+t._s(t.machine_details_obj.hashrate)+"\n          ")])]),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[t._v("\n             "+t._s(t.$t("backPool.numNiners"))+":"+t._s(t.machine_details_obj.num)+"\n          ")])]),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[t._v("\n             "+t._s(t.$t("backPool.numberOnline"))+":"+t._s(t.machine_details_obj.onLineNum)+"\n          ")])]),t._v(" "),a("el-col",{attrs:{xs:24,sm:12,md:12,lg:6}},[a("div",{staticClass:"topword"},[t._v("\n              "+t._s(t.$t("backPool.numOffline"))+":"+t._s(t.machine_details_obj.badNum)+"\n          ")])])],1),t._v(" "),a("el-row",{staticStyle:{background:"#fff",padding:"16px 16px 0","margin-bottom":"32px"}},[a("Echart",{directives:[{name:"loading",rawName:"v-loading",value:t.loadingechart,expression:"loadingechart"}],attrs:{"chart-data":t.lineEchart}})],1),t._v(" "),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],staticClass:"mt_20",staticStyle:{width:"100%"},attrs:{data:t.tableData,border:"",stripe:""}},[a("el-table-column",{attrs:{fixed:"left",prop:"id",label:t.$t("backPool.minerId"),width:"150"}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("backPool.lastActiveTime"),prop:"lastBeat",sortable:"",width:"150"},scopedSlots:t._u([{key:"default",fn:function(e){return[e.row.lastBeat?a("el-tag",{attrs:{size:"mini"}},[t._v(t._s(t._f("formatDate")(e.row.lastBeat)))]):t._e()]}}])}),t._v(" "),a("el-table-column",{attrs:{prop:"hr",label:t.$t("backPool.Hashrate15"),sortable:""}}),t._v(" "),a("el-table-column",{attrs:{prop:"hr2",label:t.$t("backPool.Hashrate24"),sortable:""}}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("backPool.status"),prop:"offline",sortable:""},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-tag",{attrs:{size:"mini",type:t._f("statusFilter")(e.row.offline)}},[t._v(t._s(e.row.offline?t.$t("back.offline"):t.$t("back.online")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("backPool.history")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{key:e.$index,attrs:{size:"mini",type:"primary",disabled:""},on:{click:function(a){t.handleLook(e.$index,e.row)}}},[t._v(t._s(t.$t("backPool.view")))])]}}])}),t._v(" "),a("el-table-column",{attrs:{label:t.$t("backPool.operation")},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-button",{key:e.$index,attrs:{size:"mini",type:"primary",disabled:""},on:{click:function(a){t.handleLook(e.$index,e.row)}}},[t._v("编辑")])]}}])})],1),t._v(" "),t.tableData.length?a("div",{staticClass:"block"},[a("el-pagination",{attrs:{background:"","current-page":t.page.pageNum,"page-sizes":[20,50,100],"page-size":t.page.pageSize,layout:"total, sizes, prev, pager, next, jumper",total:parseInt(t.page.totalCount)},on:{"size-change":t.handleSizeChange,"current-change":t.handleCurrentChange}})],1):t._e()],1),t._v(" "),a("el-dialog",{attrs:{title:"编辑",visible:t.dialogVisible_edit,width:"30%","before-close":t.handleClose},on:{"update:visible":function(e){t.dialogVisible_edit=e}}},[a("el-form",{ref:"form",attrs:{model:t.mine_obj,"label-width":"80px"}},[a("el-form-item",{attrs:{label:"矿场名称"}},[a("el-input",{model:{value:t.mine_obj.mine_name,callback:function(e){t.$set(t.mine_obj,"mine_name",e)},expression:"mine_obj.mine_name"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"装机容量"}},[a("el-input",{model:{value:t.mine_obj.capacity,callback:function(e){t.$set(t.mine_obj,"capacity",e)},expression:"mine_obj.capacity"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"总机位数"}},[a("el-input",{model:{value:t.mine_obj.total_seat,callback:function(e){t.$set(t.mine_obj,"total_seat",e)},expression:"mine_obj.total_seat"}})],1),t._v(" "),a("el-form-item",{attrs:{label:"状态"}},[a("el-radio-group",{model:{value:t.mine_obj.state,callback:function(e){t.$set(t.mine_obj,"state",e)},expression:"mine_obj.state"}},[a("el-radio",{attrs:{label:"运行中"}}),t._v(" "),a("el-radio",{attrs:{label:"维护中"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"负责人"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.mine_obj.person,callback:function(e){t.$set(t.mine_obj,"person",e)},expression:"mine_obj.person"}},[a("el-option",{attrs:{label:"张经理",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"李经理",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",{attrs:{label:"联系电话"}},[a("el-select",{attrs:{placeholder:"请选择活动区域"},model:{value:t.mine_obj.phone,callback:function(e){t.$set(t.mine_obj,"phone",e)},expression:"mine_obj.phone"}},[a("el-option",{attrs:{label:"张经理",value:"shanghai"}}),t._v(" "),a("el-option",{attrs:{label:"李经理",value:"beijing"}})],1)],1),t._v(" "),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.edit_submit}},[t._v("修改")]),t._v(" "),a("el-button",{on:{click:function(e){t.dialogVisible_edit=!1}}},[t._v("取消")])],1)],1)],1)],1)},staticRenderFns:[]};var s=a("VU/8")(o,l,!1,function(t){a("we5b")},null,null);e.default=s.exports},VHIn:function(t,e,a){"use strict";var i=a("bOdI"),n=a.n(i),o=a("2aIq"),l=a.n(o),s=a("XLwt"),r=a.n(s),c=a("0xDb");a("tcAE");var d={props:{className:{type:String,default:"chart"},width:{type:String,default:"100%"},height:{type:String,default:"350px"},autoResize:{type:Boolean,default:!0},chartData:{type:Object}},data:function(){return{chart:null}},mounted:function(){var t=this;this.initChart(),this.autoResize&&(this.__resizeHanlder=Object(c.a)(function(){t.chart&&t.chart.resize()},100),window.addEventListener("resize",this.__resizeHanlder))},beforeDestroy:function(){this.chart&&(this.autoResize&&window.removeEventListener("resize",this.__resizeHanlder),this.chart.clear(),this.chart=null)},watch:{chartData:{deep:!0,handler:function(t){this.setOptions(t)}}},methods:{initOptions:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};l()(e),this.chart.setOption({xAxis:{data:[],boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},dataZoom:[(t={start:80,end:100,handleSize:"40%",textStyle:{color:"#8392A5"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z"},n()(t,"handleSize","80%"),n()(t,"dataBackground",{areaStyle:{color:"#8392A5"},lineStyle:{opacity:.8,color:"#8392A5"}}),n()(t,"handleStyle",{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}),t),{type:"inside"}],yAxis:{axisTick:{show:!1}},legend:{data:[""]},series:[{name:"",smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:1},areaStyle:{color:"#f3f8ff"}}},data:[],animationDuration:2800,animationEasing:"quadraticOut"}]})},setOptions:function(){var t,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.xdata,i=e.ydata,o=e.title;this.chart.setOption({xAxis:{data:a,boundaryGap:!1,axisTick:{show:!1}},grid:{left:10,right:10,bottom:20,top:30,containLabel:!0},tooltip:{trigger:"axis",axisPointer:{type:"cross"},padding:[5,10]},dataZoom:[(t={start:0,end:100,handleSize:"40%",textStyle:{color:"#8392A5"},handleIcon:"M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z"},n()(t,"handleSize","80%"),n()(t,"dataBackground",{areaStyle:{color:"#8392A5"},lineStyle:{opacity:.8,color:"#8392A5"}}),n()(t,"handleStyle",{color:"#fff",shadowBlur:3,shadowColor:"rgba(0, 0, 0, 0.6)",shadowOffsetX:2,shadowOffsetY:2}),t),{type:"inside"}],yAxis:{axisTick:{show:!1}},legend:{data:[o]},series:[{name:o,smooth:!0,type:"line",itemStyle:{normal:{color:"#3888fa",lineStyle:{color:"#3888fa",width:1},areaStyle:{color:"#f3f8ff"}}},data:i,animationDuration:2800,animationEasing:"quadraticOut"}]})},initChart:function(){this.chart=r.a.init(this.$el,"macarons"),this.initOptions(),this.setOptions(this.chartData)}}},h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",{class:this.className,style:{height:this.height,width:this.width}})},staticRenderFns:[]},u=a("VU/8")(d,h,!1,null,null,null);e.a=u.exports},a28Y:function(t,e,a){(t.exports=a("FZ+f")(!1)).push([t.i,"\n.block {\n    text-align: center;\n    margin-top: 20px\n}\n.content {\n    background: #fff\n}\n.mt_20 {\n    margin-top: 20px\n}\n.title{font-size:\n}\nul,li{list-style: none\n}\n.title li{float: left;font-size: 14px;font-weight: bold;margin: 10px\n}\n.title{margin-bottom: 30px;overflow: hidden\n}\n",""])},we5b:function(t,e,a){var i=a("a28Y");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);a("rjj0")("0ecb7fe6",i,!0)}});
