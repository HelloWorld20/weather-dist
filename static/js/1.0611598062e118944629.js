webpackJsonp([1,8],{31:function(t,a,i){i(52);var n=i(1)(i(38),i(58),"data-v-6a2fcf80",null);t.exports=n.exports},33:function(t,a,i){"use strict";i.d(a,"b",function(){return n}),i.d(a,"a",function(){return e});var n={key:"60317f77a63c432a872bbacbbed9e204",default:"https://free-api.heweather.com/v5/forecast?city=guangzhou&key=60317f77a63c432a872bbacbbed9e204",forecast:{url:"https://free-api.heweather.com/v5/forecast",params:function(t){return{city:t,key:"60317f77a63c432a872bbacbbed9e204"}}},haze:{url:"https://route.showapi.com/104-29",params:function(){return{showapi_appid:34207,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},hazeRank:{url:"https://route.showapi.com/104-41",params:function(){return{city:"广州",showapi_appid:34207,showapi_sign:"4b506e41578e4b31a556377023b49060"}}}},e={america:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:3,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},mainland:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:5,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},hongkong:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:6,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},korea:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:16,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},japan:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:17,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},ballad:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:18,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},rock:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:19,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},bestSeller:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:23,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},hot:{url:"https://route.showapi.com/213-4?showapi_appid=34207",params:function(t){return{showapi_timestamp:null,topid:26,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},search:{url:"https://route.showapi.com/213-1?showapi_appid=34207",params:function(t){return{keyword:t,showapi_sign:"4b506e41578e4b31a556377023b49060"}}},lyrics:{url:"https://route.showapi.com/213-2",params:function(t){return{showapi_appid:34207,showapi_sign:"4b506e41578e4b31a556377023b49060",musicid:t}}}}},38:function(t,a,i){"use strict";function n(t,a,i){r.a.fetch.call(this,t,a,function(t){if(0===t.showapi_res_code&&0===t.showapi_res_body.ret_code){var a=void 0;try{a=t.showapi_res_body.pagebean.songlist.slice(0,10)}catch(t){console.warn(t),r.a.alert("无法获取歌曲列表数据，详情查看控制台")}i(a)}else r.a.alert("接口信息错误")})}function e(t){return t.forEach(function(a,i){t[i].url=a.m4a,t[i].min=t[i].sec="--"}),t}Object.defineProperty(a,"__esModule",{value:!0});var s=i(33),o=i(2),r=i(6);a.default={data:function(){return{songList:[],activeItem:"bestSeller",songVal:""}},methods:{getMusic:function(t){var a=this;n.call(this,s.a[t],null,function(i){i.forEach(function(t,a){i[a].timeFormated=r.a.sec2Min(t.seconds).formated}),a.songList=i,a.activeItem=t})},search:function(){var t=this;r.a.fetch.call(this,s.a.search,this.songVal,function(a){if(0===a.showapi_res_code){var i=void 0;try{i=a.showapi_res_body.pagebean.contentlist.slice(0,10),i=e(i),t.songList=i,t.activeItem="search"}catch(t){console.warn(t),r.a.alert("无法获取歌曲列表数据，详情查看控制台")}}else r.a.alert("接口信息错误")})},play:function(t){var a=void 0;r.a.fetch.call(this,s.a.lyrics,t.albumid,function(i){try{a=i.showapi_res_body.lyric_txt}catch(t){r.a.alert("获取歌词失败")}o.a.$emit("play",{info:t,lyrics:a})})},http2S:function(t){return t.replace("http://","https://")}},created:function(){this.getMusic("bestSeller")},computed:{isAmerica:function(){return"america"===this.activeItem},isMainLand:function(){return"mainland"===this.activeItem},isHongkong:function(){return"hongkong"===this.activeItem},isKorea:function(){return"korea"===this.activeItem},isJapan:function(){return"japan"===this.activeItem},isBallad:function(){return"ballad"===this.activeItem},isRock:function(){return"rock"===this.activeItem},isBestSeller:function(){return"bestSeller"===this.activeItem},isHot:function(){return"hot"===this.activeItem}}}},46:function(t,a,i){a=t.exports=i(25)(),a.push([t.i,".table>tbody>tr>td[data-v-6a2fcf80]{line-height:107px;padding:0}.btn-active[data-v-6a2fcf80]{color:#fff;background-color:#48c9b0;border-color:#48c9b0}.limit[data-v-6a2fcf80]{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#player[data-v-6a2fcf80]{margin:10px auto}#songName[data-v-6a2fcf80]{max-width:100%;overflow:hidden;white-space:nowrap;text-overflow:ellipsis}#searchMusic[data-v-6a2fcf80]{text-align:center}#audio[data-v-6a2fcf80]{width:100%;margin:10px auto 0}#gallery[data-v-6a2fcf80]{margin:10px 0}.ui-slider-horizontal .ui-slider-handle[data-v-6a2fcf80]{top:-.3em;margin-left:-.6em}","",{version:3,sources:["E:/myworkspace/github/weather/src/components/music.vue"],names:[],mappings:"AACA,oCACC,kBAAmB,AACnB,SAAW,CACX,AACD,6BACC,WAAe,AACf,yBAA0B,AAC1B,oBAAsB,CACtB,AACD,wBACC,eAAgB,AAChB,gBAAgB,AAChB,mBAAmB,AACnB,sBAAuB,CACvB,AACD,yBACC,gBAAkB,CAClB,AACD,2BACC,eAAgB,AAChB,gBAAiB,AACjB,mBAAmB,AACnB,sBAAuB,CACvB,AACD,8BACC,iBAAmB,CACnB,AACD,wBACC,WAAY,AACZ,kBAAyB,CACzB,AACD,0BACC,aAAe,CACf,AACD,yDACG,UAAY,AACX,iBAAoB,CACvB",file:"music.vue",sourcesContent:["\n.table > tbody > tr > td[data-v-6a2fcf80]{\r\n\tline-height: 107px;\r\n\tpadding: 0;\n}\n.btn-active[data-v-6a2fcf80]{\r\n\tcolor: #ffffff;\r\n\tbackground-color: #48c9b0;\r\n\tborder-color: #48c9b0;\n}\n.limit[data-v-6a2fcf80]{\r\n\tmax-width: 100%;\r\n\toverflow:hidden;\r\n\twhite-space:nowrap;\r\n\ttext-overflow:ellipsis;\n}\n#player[data-v-6a2fcf80]{\r\n\tmargin: 10px auto;\n}\n#songName[data-v-6a2fcf80]{\r\n\tmax-width: 100%;\r\n\toverflow: hidden;\r\n\twhite-space:nowrap;\r\n\ttext-overflow:ellipsis;\n}\n#searchMusic[data-v-6a2fcf80]{\r\n\ttext-align: center;\n}\n#audio[data-v-6a2fcf80]{\r\n\twidth: 100%;\r\n\tmargin: 10px auto 0 auto;\n}\n#gallery[data-v-6a2fcf80]{\r\n\tmargin: 10px 0;\n}\n.ui-slider-horizontal .ui-slider-handle[data-v-6a2fcf80] {\r\n  \ttop: -0.3em;\r\n    margin-left: -0.6em;\n}\r\n\r\n"],sourceRoot:""}])},52:function(t,a,i){var n=i(46);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);i(26)("011479a5",n,!0)},58:function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("div",{staticClass:"container",attrs:{id:"music"}},[i("div",{staticClass:"row"},[i("div",{staticClass:"col-md-3"},[i("form",{attrs:{action:"#"},on:{submit:function(a){a.preventDefault(),t.search(a)}}},[i("div",{staticClass:"input-group"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.songVal,expression:"songVal"}],staticClass:"form-control",attrs:{id:"searchMusic",type:"text",placeholder:"Search for...",autocomplete:"off"},domProps:{value:t.songVal},on:{input:function(a){a.target.composing||(t.songVal=a.target.value)}}}),t._v(" "),i("span",{staticClass:"input-group-btn"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(a){a.preventDefault(),t.search(a)}}},[i("p",{staticClass:"glyphicon glyphicon-search"})])])])]),t._v(" "),i("div",{attrs:{id:"gallery"}},[i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isBestSeller},on:{click:function(a){t.getMusic("bestSeller")}}},[t._v("销量")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isHot},on:{click:function(a){t.getMusic("hot")}}},[t._v("热歌")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isAmerica},on:{click:function(a){t.getMusic("america")}}},[t._v("欧美")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isMainLand},on:{click:function(a){t.getMusic("mainland")}}},[t._v("内地")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isHongkong},on:{click:function(a){t.getMusic("hongkong")}}},[t._v("港台")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isKorea},on:{click:function(a){t.getMusic("korea")}}},[t._v("韩国")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isJapan},on:{click:function(a){t.getMusic("japan")}}},[t._v("日本")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isBallad},on:{click:function(a){t.getMusic("ballad")}}},[t._v("民谣")]),t._v(" "),i("button",{staticClass:"btn btn-inverse btn-block",class:{"btn-active":t.isRock},on:{click:function(a){t.getMusic("rock")}}},[t._v("摇滚")])])]),t._v(" "),i("div",{staticClass:"col-md-9"},[i("div",{staticClass:"table"},[i("table",{staticClass:"table"},[t._m(0),t._v(" "),i("tbody",t._l(t.songList,function(a){return i("tr",[i("td",[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.play(a)}}},[i("img",{attrs:{src:t.http2S(a.albumpic_small),alt:a.songname}})])]),t._v(" "),i("td",[i("div",{staticClass:"limit"},[i("a",{attrs:{href:"javascript:;"},on:{click:function(i){t.play(a)}}},[t._v(t._s(a.songname))])])]),t._v(" "),i("td",[i("div",{staticClass:"limit"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t"+t._s(a.singername)+"\r\n\t\t\t\t\t\t\t\t\t")])]),t._v(" "),i("td",[i("div",{staticClass:"limit"},[t._v("\r\n\t\t\t\t\t\t\t\t\t\t"+t._s(a.timeFormated)+"\r\n\t\t\t\t\t\t\t\t\t")])])])}))])])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,i=t._self._c||a;return i("thead",[i("tr",[i("th",[t._v("封面")]),t._v(" "),i("th",[t._v("歌名")]),t._v(" "),i("th",[t._v("歌手")]),t._v(" "),i("th",[t._v("时长")])])])}]}}});
//# sourceMappingURL=1.0611598062e118944629.js.map