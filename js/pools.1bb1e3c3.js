(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pools"],{"61d0":function(t,e,o){"use strict";o.r(e);var r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("el-main",{staticStyle:{"background-color":"#000000",color:"white","font-family":"'Noto Sans SC'","font-weight":"300"}},[o("el-row",{staticStyle:{"padding-top":"120px","margin-bottom":"0px",width:"100%"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px",border:"2px dashed #E91E63","border-radius":"10px"},attrs:{xs:24,md:18,xl:18}},[o("div",{staticStyle:{display:"flex","align-items":"center","justify-content":"center","vertical-align":"center","margin-top":"10px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{attrs:{span:2}},[o("img",{staticStyle:{width:"40px"},attrs:{src:"rocket.png"}})]),o("el-col",{staticStyle:{"text-align":"left",color:"#ffffff","font-size":"24px","padding-left":"20px","margin-top":"-10px"},attrs:{span:22}},[t._v(" "+t._s(t.$t("withdrawYourFund"))+" "),o("a",{attrs:{href:"https://offline.poolgo.finance"}},[o("span",{staticStyle:{color:"#E91E63","font-weight":"bolder"}},[t._v("https://offline.poolgo.finance")])])])],1)])],1),o("div",{staticStyle:{"padding-top":"-80px","padding-bottom":"300px",background:"url('home-bg-2.png')","background-repeat":"no-repeat","background-size":"100%","background-position":"right",width:"100%"}}),o("el-row",{staticStyle:{"margin-top":"-120px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"line-height":"40px"},attrs:{xs:24,md:18,xl:18}},[o("div",{staticClass:"shadow-border"},[o("el-row",{style:"margin-top:60px;flex-direction:row;",attrs:{type:"flex",justify:"start"}},[o("el-col",{attrs:{xs:9,sm:{span:6,offset:4}}},[o("el-row",{staticStyle:{height:"66px",width:"100%",background:"linear-gradient(90deg, #E91E63, rgba(26, 26, 26, 0.01))",border:"2px solid #E91E63","border-radius":"10px"},attrs:{type:"flex",justify:"start"}},[o("div",{staticStyle:{width:"6%"}}),o("div",{staticStyle:{"margin-top":"10px"}},["CFX"==t.swapCoin?o("img",{staticStyle:{width:"40px"},attrs:{src:"cfx-logo.svg"}}):o("img",{staticStyle:{width:"32px"},attrs:{src:"cfx-white.svg"}})]),o("div",{staticStyle:{width:"6%"}}),"CFX"==t.swapCoin?o("div",{staticStyle:{"text-align":"left",color:"#ffffff","font-size":"18px","margin-top":"12px"}},[t._v(" CFX ")]):o("div",{staticStyle:{"text-align":"left",color:"#ffffff","font-size":"18px","margin-top":"12px"}},[t._v(" PCFX ")])])],1),o("el-col",{staticStyle:{"text-align":"center"},attrs:{xs:{span:4,offset:1},sm:{span:2,offset:1}}},[o("vs-button",{staticStyle:{width:"100%",margin:"0 auto",height:"66px",background:"#E91E63","border-radius":"10px","line-height":"80px"},attrs:{icon:""},on:{click:t.exchange}},[o("img",{attrs:{src:"translate.png"}})])],1),o("el-col",{attrs:{xs:{span:9,offset:1},sm:{span:6,offset:1}}},[o("el-row",{staticStyle:{height:"66px",width:"100%",background:"linear-gradient(90deg, #E91E63, rgba(26, 26, 26, 0.01))",border:"2px solid #E91E63","border-radius":"10px"},attrs:{type:"flex",justify:"start"}},[o("div",{staticStyle:{width:"6%"}}),o("div",{staticStyle:{"margin-top":"10px"}},["PCFX"==t.swapCoin?o("img",{staticStyle:{width:"40px"},attrs:{src:"cfx-logo.svg"}}):o("img",{staticStyle:{width:"32px"},attrs:{src:"cfx-white.svg"}})]),o("div",{staticStyle:{width:"6%"}}),"PCFX"==t.swapCoin?o("div",{staticStyle:{"text-align":"left",color:"#ffffff","font-size":"18px","margin-top":"12px"}},[t._v(" CFX ")]):o("div",{staticStyle:{"text-align":"left",color:"#ffffff","font-size":"18px","margin-top":"12px"}},[t._v(" PCFX ")])])],1)],1),o("el-row",{staticStyle:{"margin-top":"40px","font-size":"18px"}},[o("el-col",{attrs:{xs:24,sm:{span:6,offset:4}}},[o("vs-input",{attrs:{"icon-after":"",type:"number",danger:"",state:"danger",block:"",placeholder:t.$t("pcfxPlaceholder")},on:{input:t.changeSwapMoney},scopedSlots:t._u([{key:"icon",fn:function(){return[o("vs-button",{attrs:{circle:"",flat:"",warn:""},on:{click:t.maxSwapMoney}},[t._v(" "+t._s(t.$t("max"))+" ")])]},proxy:!0}]),model:{value:t.swapMoney,callback:function(e){t.swapMoney=e},expression:"swapMoney"}})],1),o("el-col",{staticStyle:{"text-align":"center","margin-top":"-5px"},attrs:{xs:{span:0,offset:1},sm:{span:2,offset:1}}},[o("div",{staticStyle:{width:"100%",margin:"0 auto",height:"66px",border:"2px dashed #E91E63","border-radius":"10px","line-height":"80px"}},[o("img",{attrs:{src:"translate.png"}})])]),o("el-col",{attrs:{xs:{span:0,offset:1},sm:{span:6,offset:1}}},[o("vs-input",{staticStyle:{opacity:"1"},attrs:{"icon-after":"",type:"number",danger:"",state:"danger",block:"",disabled:"",placeholder:t.$t("pcfxPlaceholder")},scopedSlots:t._u([{key:"icon",fn:function(){return[o("vs-button",{attrs:{circle:"",flat:"",warn:""},on:{click:t.maxSwapMoney}},[t._v(" "+t._s(t.$t("max"))+" ")])]},proxy:!0}]),model:{value:t.translateMoney,callback:function(e){t.translateMoney=e},expression:"translateMoney"}})],1)],1),o("el-row",{staticStyle:{"margin-bottom":"60px"},attrs:{type:"flex",justify:"center"}},[o("el-col",{staticStyle:{"margin-top":"30px","line-height":"30px"},attrs:{xs:12,sm:8}},[o("vs-button",{staticStyle:{"font-size":"20px","line-height":"40px"},attrs:{block:"",border:"",color:"#E91E63"},on:{click:t.swap}},[t._v(" "+t._s(t.$t("swap"))+" ")])],1)],1)],1)])],1),o("el-row",{staticStyle:{margin:"0 auto","margin-top":"40px","margin-bottom":"100px",color:"#999999"}},[t._v(" "+t._s(t.$t("moneyMore2"))+" ")]),o("vs-dialog",{attrs:{loading:t.depositDialogLoading,width:"300px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("poolsSentence3part1"))+" "),o("b",[t._v(t._s(t.$t("poolsSentence3part2"))+" ")]),t._v(" "+t._s(t.$t("poolsSentence3part3"))+" ")])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[t.isNeedApprove?o("vs-button",{attrs:{transparent:""},on:{click:t.confirmApprove}},[t._v(" "+t._s(t.$t("noticeApprove"))+" ")]):o("vs-button",{attrs:{transparent:""},on:{click:t.confirmDeposit}},[t._v(" "+t._s(t.$t("noticeDeposit"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.depositDialogShow=!1}}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.depositDialogShow,callback:function(e){t.depositDialogShow=e},expression:"depositDialogShow"}},[o("div",{staticClass:"con-content"},[t.isNeedApprove?o("el-row",{staticStyle:{"font-size":"12px"}},[t._v(t._s(t.$t("noticeApproveContent")))]):o("vs-input",{attrs:{"icon-after":"",placeholder:t.$t("noticeOwnPcfx")+t.pcfxNumber.toFormat(2),type:"number"},scopedSlots:t._u([{key:"icon",fn:function(){return[o("vs-button",{attrs:{circle:"",flat:"",warn:""},on:{click:function(e){return t.maxDepositPoolMoney()}}},[t._v(" "+t._s(t.$t("max"))+" ")])]},proxy:!0}]),model:{value:t.depositPoolMoney,callback:function(e){t.depositPoolMoney=e},expression:"depositPoolMoney"}})],1)]),o("vs-dialog",{attrs:{loading:t.withdrawPoolDialogLoading,width:"300px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("noticeWithdraw"))+" "),o("b",[t._v("PCFX")])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[o("vs-button",{attrs:{transparent:""},on:{click:t.showTimelockDialog}},[t._v(" "+t._s(t.$t("noticeCountdownWithdraw"))+" ")]),o("vs-button",{attrs:{transparent:""},on:{click:t.showImmediateDialog}},[t._v(" "+t._s(t.$t("noticeNowWithdraw"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.withdrawPoolDialogShow=!1}}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.withdrawPoolDialogShow,callback:function(e){t.withdrawPoolDialogShow=e},expression:"withdrawPoolDialogShow"}},[o("div",{staticClass:"con-content"},[o("vs-input",{attrs:{"icon-after":"",placeholder:t.$t("noticeWithdrawPcfx")+t.ticketNumber.toFormat(2),type:"number"},scopedSlots:t._u([{key:"icon",fn:function(){return[o("vs-button",{attrs:{circle:"",flat:"",warn:""},on:{click:t.maxWithdrawPoolMoney}},[t._v(" "+t._s(t.$t("max"))+" ")])]},proxy:!0}]),model:{value:t.withdrawPoolMoney,callback:function(e){t.withdrawPoolMoney=e},expression:"withdrawPoolMoney"}})],1)]),o("vs-dialog",{attrs:{loading:t.timelockDialogLoading,width:"300px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("noticeSureCountdownWithdrawPart1"))),o("b",[t._v(" "+t._s(t.$t("noticeSureCountdownWithdrawPart2")))])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[o("vs-button",{attrs:{transparent:""},on:{click:t.withdrawWithTimelockFrom}},[t._v(" "+t._s(t.$t("noticeConfirm"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:function(e){t.timelockDialogShow=!1}}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.timelockDialogShow,callback:function(e){t.timelockDialogShow=e},expression:"timelockDialogShow"}},[o("div",{staticClass:"con-content"},[o("p",[t._v(" "+t._s(t.$t("noticeCountdownWithdrawInfo"))+" ")])])]),o("vs-dialog",{attrs:{loading:t.immediateDialogLoading,width:"550px","not-center":"","prevent-close":""},scopedSlots:t._u([{key:"header",fn:function(){return[o("h4",{staticClass:"not-margin"},[t._v(" "+t._s(t.$t("noticeSureNowWithdrawPart1"))),o("b",[t._v(t._s(t.$t("noticeSureNowWithdrawPart2")))])])]},proxy:!0},{key:"footer",fn:function(){return[o("div",{staticClass:"con-footer"},[o("vs-button",{attrs:{transparent:""},on:{click:t.withdrawInstantlyFrom}},[t._v(" "+t._s(t.$t("noticeConfirm"))+" ")]),o("vs-button",{attrs:{dark:"",transparent:""},on:{click:t.closeImmediateDialog}},[t._v(" "+t._s(t.$t("noticeCancel"))+" ")])],1)]},proxy:!0}]),model:{value:t.immediateDialogShow,callback:function(e){t.immediateDialogShow=e},expression:"immediateDialogShow"}},[o("div",{staticClass:"con-content"},[o("p",{staticStyle:{"text-align":"left"}},[t._v(" "+t._s(t.$t("noticeNowWithdrawInfo"))+" ")]),o("vs-input",{attrs:{placeholder:t.$t("noticeMaxWithdrawFee")+(.01*t.withdrawPoolMoney).toFixed(2),type:"number"},model:{value:t.maximumExitFee,callback:function(e){t.maximumExitFee=e},expression:"maximumExitFee"}})],1)])],1)},n=[],i=(o("b680"),o("5530")),a=(o("96cf"),o("1da1")),s=o("f121"),c=o("fa7d"),l=o("901e"),u=o("8f31"),p=o("2f62"),d={name:"pools",components:{},data:function(){return{poolBalance:0,poolAwardBalance:0,poolAwardMoney:0,poolMoney:0,prizePeriodRemainingSeconds:new l["BigNumber"](0),depositDialogShow:!1,swapMoney:"",translateMoney:"",windowHeight:0,windowWidth:0,choosePool:0,swapCoin:"CFX",depositPoolDialogShow:!1,depositPoolMoney:"",withdrawPoolDialogShow:!1,withdrawPoolMoney:"",immediateDialogShow:!1,timelockDialogShow:!1,withdrawPoolDialogLoading:!1,depositDialogLoading:!1,timelockDialogLoading:!1,immediateDialogLoading:!1,pcfxNumber:new l["BigNumber"](0),ticketNumber:new l["BigNumber"](0),pcfxApy:"0%",maximumExitFee:"",intervalTimer:null,isNeedApprove:!1,isFirstRun:!0,dripRatePerSecond:0,fomoPoolAwardMoney:0,fomoPrizePeriodRemainingSeconds:new l["BigNumber"](0)}},computed:{pcfxContract:function(){return this.$store.state.web3.pcfxContract},ticketContract:function(){return this.$store.state.web3.ticketContract},poolGoContract:function(){return this.$store.state.web3.poolGoContract},prizePoolContract:function(){return this.$store.state.web3.prizePoolContract},periodicPrizeStrategyContract:function(){return this.$store.state.web3.periodicPrizeStrategyContract},tokenFaucetContract:function(){return this.$store.state.web3.tokenFaucetContract},cfxStakeContract:function(){return this.$store.state.web3.cfxStakeContract},fomoTicketContract:function(){return this.$store.state.web3.fomoTicketContract},fomoPrizePoolContract:function(){return this.$store.state.web3.fomoPrizePoolContract},fomoPeriodicPrizeStrategyContract:function(){return this.$store.state.web3.fomoPeriodicPrizeStrategyContract},fomoTokenFaucetContract:function(){return this.$store.state.web3.fomoTokenFaucetContract},fomoCfxStakeContract:function(){return this.$store.state.web3.fomoCfxStakeContract},firstPoolColor:function(){return 0==this.choosePool?"#E91E63":"#FFFFFF"},secondPoolColor:function(){return 1==this.choosePool?"#E91E63":"#FFFFFF"},countdownTimerWidth:function(){return console.log(this.windowWidth),this.windowWidth<500||this.windowWidth<=1200?this.windowWidth/5:this.windowWidth/12},countdownTimerPadding:function(){return this.windowWidth<500?3:this.windowWidth<=768?8:10}},created:function(){var t=this;t.windowHeight=parseInt("".concat(window.innerHeight)),t.windowWidth=parseInt("".concat(window.innerWidth)),window.onresize=function(){return function(){t.windowHeight=parseInt("".concat(window.innerHeight)),t.windowWidth=parseInt("".concat(window.innerWidth))}()}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o.periodicPrizeStrategyContract.prizePeriodRemainingSeconds();case 3:return o.prizePeriodRemainingSeconds=e.sent,o.$nextTick((function(){console.log(o.prizePeriodRemainingSeconds.toNumber()),o.$refs.timer.updateTime(o.prizePeriodRemainingSeconds.toNumber())})),e.next=7,o.tokenFaucetContract.dripRatePerSecond();case 7:r=e.sent,o.dripRatePerSecond=r,o.update(),o.intervalTimer=setInterval(o.update,6e3);case 11:case"end":return e.stop()}}),e)})))()},beforeDestroy:function(){var t=this;clearTimeout(t.intervalTimer)},methods:Object(i["a"])(Object(i["a"])({},Object(p["b"])(["cfxLogin"])),{},{changeSwapMoney:function(){this.translateMoney=this.swapMoney},swap:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,null!=o.$store.state.web3.account){e.next=4;break}return e.next=4,o.cfxLogin();case 4:if(0!=o.$store.state.web3.isPortalInstalled){e.next=7;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeWallet")}),e.abrupt("return");case 7:if(null!=o.$store.state.web3.account){e.next=10;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeAddr")}),e.abrupt("return");case 10:if(!(""==o.swapMoney||o.swapMoney<=0)){e.next=13;break}return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("correctNumPlaceholder")}),e.abrupt("return");case 13:if("CFX"!=o.swapCoin){e.next=21;break}return e.next=16,o.pcfxContract.deposit(o.$store.state.web3.account,o.swapMoney);case 16:r=e.sent,console.log(r),1==r.succ?t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeCfxTranslate")}):t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message}),e.next=25;break;case 21:return e.next=23,o.pcfxContract.withdraw(o.$store.state.web3.account,o.swapMoney);case 23:n=e.sent,1==n.succ?t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticePcfxTranslate")}):t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:n.message});case 25:o.updateCfxAndPcfxBalance();case 26:case"end":return e.stop()}}),e)})))()},exchange:function(){"CFX"==this.swapCoin?(this.swapCoin="PCFX",this.obtainCoin="CFX"):(this.swapCoin="CFX",this.obtainCoin="PCFX")},switchPools:function(t){var e=this;1!=t||e.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"warn",position:"top-center",title:e.$t("noticePrompt"),text:e.$t("noticeSentece1")})},gotoPoolPage:function(){this.$router.push({path:"/pool"})},update:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r,n,i,a,s,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o.cfxStakeContract.balanceOfUnderlyingView();case 3:return r=e.sent,e.next=6,o.prizePoolContract.accountedBalance();case 6:return n=e.sent,e.next=9,o.periodicPrizeStrategyContract.prizePeriodRemainingSeconds();case 9:o.prizePeriodRemainingSeconds=e.sent,i=r.multipliedBy(o.prizePeriodRemainingSeconds.multipliedBy(.0408).div(31536e3)),a=r.plus(i).minus(n),s=a.multipliedBy(o.$store.state.web3.pcfxPrice),c=n.multipliedBy(o.$store.state.web3.pcfxPrice),o.poolAwardMoney=s.toFormat(0),o.poolMoney=c.toFormat(0),o.poolAwardBalance=a.toFormat(0),o.pcfxApy=new l["BigNumber"](60*o.dripRatePerSecond*60*24*365).multipliedBy(o.$store.state.web3.poolgoPrice).div(n.multipliedBy(o.$store.state.web3.pcfxPrice)).multipliedBy(100).toFormat(1);case 18:case"end":return e.stop()}}),e)})))()},showWithdrawDialog:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,null!=o.$store.state.web3.account){e.next=4;break}return e.next=4,o.cfxLogin();case 4:if(0!=o.$store.state.web3.isPortalInstalled){e.next=7;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeWallet")}),e.abrupt("return");case 7:if(null!=o.$store.state.web3.account){e.next=10;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeAddr")}),e.abrupt("return");case 10:return o.withdrawPoolDialogShow=!0,o.withdrawPoolDialogLoading=!0,e.next=14,o.ticketContract.balanceOf(o.$store.state.web3.account);case 14:o.ticketNumber=e.sent,o.withdrawPoolDialogLoading=!1,o.withdrawPoolMoney="";case 17:case"end":return e.stop()}}),e)})))()},showTimelockDialog:function(){var t=this;""==t.withdrawPoolMoney||t.withdrawPoolMoney<=0?t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:t.$t("error"),text:t.$t("correctNumPlaceholder")}):(this.withdrawPoolDialogShow=!1,this.timelockDialogShow=!0)},showImmediateDialog:function(){var t=this;""==t.withdrawPoolMoney||t.withdrawPoolMoney<=0?t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:t.$t("error"),text:t.$t("correctNumPlaceholder")}):(this.withdrawPoolDialogShow=!1,this.immediateDialogShow=!0,this.maximumExitFee="")},closeImmediateDialog:function(){this.withdrawPoolDialogShow=!0,this.immediateDialogShow=!1},closeTimeoutDialog:function(){this.withdrawPoolDialogShow=!0,this.tiemoutDialogShow=!1},withdrawWithTimelockFrom:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r,n,i,a,p;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,o.timelockDialogLoading=!0,e.next=4,o.prizePoolContract.withdrawWithTimelockFrom(o.$store.state.web3.account,o.$store.state.web3.account,o.withdrawPoolMoney,s["default"].ticketAddress);case 4:if(r=e.sent,o.timelockDialogLoading=!1,1!=r.succ){e.next=19;break}return console.log(r),n=new l["BigNumber"](r.decodeLogs[r.decodeLogs.length-1].object.unlockTimestamp).toNumber(),t.confluxReader=new u["Conflux"]({url:s["default"].web3Provider,networkId:s["default"].networkId}),e.next=12,t.confluxReader.getBlockByHash(r.blockHash);case 12:i=e.sent,a=n-i.timestamp,console.log(a),p=c["a"].formatSeconds(a),t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeSentece2Part1")+p+o.$t("noticeSentece2Part2")}),e.next=21;break;case 19:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message}),e.abrupt("return");case 21:o.withdrawPoolDialogShow=!1,o.timelockDialogShow=!1,o.updateCfxAndPcfxBalance();case 24:case"end":return e.stop()}}),e)})))()},withdrawInstantlyFrom:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,!(""==o.maximumExitFee||o.maximumExitFee<0)){e.next=4;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("correctNumPlaceholder")}),e.abrupt("return");case 4:return o.immediateDialogLoading=!0,e.next=7,o.prizePoolContract.withdrawInstantlyFrom(o.$store.state.web3.account,o.withdrawPoolMoney,s["default"].ticketAddress,o.maximumExitFee);case 7:if(r=e.sent,o.immediateDialogLoading=!1,console.log(r),1!=r.succ){e.next=14;break}t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeSentece3")}),e.next=16;break;case 14:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message}),e.abrupt("return");case 16:o.withdrawPoolDialogShow=!1,o.immediateDialogShow=!1,o.updateCfxAndPcfxBalance();case 19:case"end":return e.stop()}}),e)})))()},showDepositDialog:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:t.$t("error"),text:t.$t("withdrawYourFund")}),e.abrupt("return");case 6:if(0!=o.$store.state.web3.isPortalInstalled){e.next=9;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeWallet")}),e.abrupt("return");case 9:if(null!=o.$store.state.web3.account){e.next=12;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("noticeAddr")}),e.abrupt("return");case 12:return o.depositDialogShow=!0,o.depositDialogLoading=!0,e.next=16,o.pcfxContract.allowance(t.$store.state.web3.account,s["default"].prizePoolAddress);case 16:return r=e.sent,r.isLessThan(1e12)&&(o.isNeedApprove=!0),e.next=20,o.pcfxContract.balanceOf(o.$store.state.web3.account);case 20:o.pcfxNumber=e.sent,o.depositDialogLoading=!1,o.depositPoolMoney="";case 23:case"end":return e.stop()}}),e)})))()},confirmApprove:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,o.depositDialogLoading=!0,e.next=4,o.pcfxContract.allowance(t.$store.state.web3.account,s["default"].prizePoolAddress);case 4:if(r=e.sent,!r.isLessThan(1e12)){e.next=18;break}return e.next=8,o.pcfxContract.approveMax(t.$store.state.web3.account,s["default"].prizePoolAddress);case 8:if(n=e.sent,o.depositDialogLoading=!1,console.log(n),1!=n.succ){e.next=15;break}o.isNeedApprove=!1,e.next=18;break;case 15:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:n.message}),o.isNeedApprove=!0,e.abrupt("return");case 18:o.depositDialogLoading=!1;case 19:case"end":return e.stop()}}),e)})))()},confirmDeposit:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(o=t,!(""==o.depositPoolMoney||o.depositPoolMoney<=0)){e.next=4;break}return o.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:o.$t("correctNumPlaceholder")}),e.abrupt("return");case 4:return o.depositDialogLoading=!0,e.next=7,o.prizePoolContract.depositTo(t.$store.state.web3.account,t.$store.state.web3.account,o.depositPoolMoney,s["default"].ticketAddress,"CFXTEST:TYPE.NULL:AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA6F0VRCSW");case 7:if(r=e.sent,o.depositDialogLoading=!1,console.log(r),1!=r.succ){e.next=15;break}o.depositDialogShow=!1,t.$vs.notification({duration:6e3,icon:"<i class='bx bx-select-multiple' ></i>",progress:"auto",color:"success",position:"top-center",title:o.$t("info"),text:o.$t("noticeSentece4")}),e.next=17;break;case 15:return t.$vs.notification({duration:1e4,icon:"<i class='bx bx-error' ></i>",progress:"auto",color:"danger",position:"top-center",title:o.$t("error"),text:r.message}),e.abrupt("return");case 17:o.updateCfxAndPcfxBalance();case 18:case"end":return e.stop()}}),e)})))()},updateCfxAndPcfxBalance:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var o,r,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return o=t,e.next=3,o.pcfxContract.balanceOf(o.$store.state.web3.account);case 3:return r=e.sent,o.$store.commit("UPDATE_PCFX_BALANCE",r),e.next=7,t.$store.state.web3.confluxReader.getBalance(o.$store.state.web3.account);case 7:n=e.sent,o.$store.commit("UPDATE_BALANCE",Object(l["BigNumber"])(n).div(Object(l["BigNumber"])(Math.pow(10,18))));case 9:case"end":return e.stop()}}),e)})))()},maxWithdrawPoolMoney:function(){var t=this;t.withdrawPoolMoney=t.ticketNumber.toFixed(2)},maxDepositPoolMoney:function(){var t=this;t.depositPoolMoney=t.pcfxNumber.toFixed(2)},maxSwapMoney:function(){var t=this;"CFX"==t.swapCoin?t.swapMoney=t.$store.state.web3.balance.toFixed(2):t.swapMoney=t.$store.state.web3.pcfxBalance.toFixed(2),t.translateMoney=t.swapMoney}})},f=d,w=(o("d5cd"),o("2877")),x=Object(w["a"])(f,r,n,!1,null,null,null);e["default"]=x.exports},"72b9":function(t,e,o){},d5cd:function(t,e,o){"use strict";o("72b9")}}]);
//# sourceMappingURL=pools.1bb1e3c3.js.map