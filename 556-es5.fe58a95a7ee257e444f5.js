!function(){"use strict";function e(e){return function(e){if(Array.isArray(e))return t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,r){if(!e)return;if("string"==typeof e)return t(e,r);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(e);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return t(e,r)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var a=t[r];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function i(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[556],{9556:function(t,a,n){n.r(a),n.d(a,{TerminalReportModule:function(){return ae}});var o,l=n(6274),c=n(5543),d=n(3657),s=n(3420),u=n.n(s),m=n(2741),p=n(6006),g=n(7535),Z=n(4766),f=n(2072),h=n(4089),b=n(1887),T=n(6997),A=n(1468),q=((o=function(){function t(e,a,i){r(this,t),this.http=e,this.errorService=a,this.authService=i,this.BASE_API_URL=Z.N.BASE_API_URL,this.barcodeReportRecords=[],this.terminalSaleRRecords=[],this.cardTerminalSaleRRecords=[],this.userData=JSON.parse(localStorage.getItem("user")),this.barcodeReportRecordsSubject=new p.xQ,this.terminalSaleRecordsSubject=new p.xQ,this.cardTerminalSaleRecordsSubject=new p.xQ}return i(t,[{key:"terminalListListener",value:function(){return this.barcodeReportRecordsSubject.asObservable()}},{key:"terminalSaleListListener",value:function(){return this.terminalSaleRecordsSubject.asObservable()}},{key:"cardTerminalSaleListListener",value:function(){return this.cardTerminalSaleRecordsSubject.asObservable()}},{key:"cancelTicket",value:function(t){var r=this;return this.http.post(this.BASE_API_URL+"/cancelTicket",{play_master_id:t}).pipe((0,f.K)(this.handleError),(0,h.b)(function(t){if(t.data){r.authService.updateUserBalance(t.point);var a=r.barcodeReportRecords.findIndex(function(e){return e.play_master_id===t.id});r.barcodeReportRecords[a].is_cancelled=1,r.barcodeReportRecordsSubject.next(e(r.barcodeReportRecords))}}))}},{key:"claimPrize",value:function(t){var r=this;return this.http.post(this.BASE_API_URL+"/claimPrize",{play_master_id:t}).pipe((0,f.K)(this.handleError),(0,h.b)(function(t){if(t.point){r.authService.updateUserBalance(t.point);var a=r.barcodeReportRecords.findIndex(function(e){return e.play_master_id===t.id});r.barcodeReportRecords[a].is_claimed=1,r.barcodeReportRecords[a].is_cancelled=1,r.barcodeReportRecordsSubject.next(e(r.barcodeReportRecords))}}))}},{key:"getTerminalReport",value:function(t,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/terminal/barcodeReport",{terminalId:t,startDate:r,endDate:a}).pipe((0,f.K)(this.handleError),(0,h.b)(function(t){t.data&&(i.barcodeReportRecords=t.data,i.barcodeReportRecordsSubject.next(e(i.barcodeReportRecords)))}))}},{key:"getTerminalSaleReport",value:function(t,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/terminal/terminalSaleReports",{terminalId:t,startDate:r,endDate:a}).pipe((0,f.K)(this.handleError),(0,h.b)(function(t){t.data&&(i.terminalSaleRRecords=t.data,i.terminalSaleRecordsSubject.next(e(i.terminalSaleRRecords)))}))}},{key:"getCardTerminalSaleReport",value:function(t,r,a){var i=this;return this.http.post(this.BASE_API_URL+"/terminal/terminalCardSaleReports",{terminalId:t,startDate:r,endDate:a}).pipe((0,f.K)(this.handleError),(0,h.b)(function(t){t.data&&(i.cardTerminalSaleRRecords=t.data,i.cardTerminalSaleRecordsSubject.next(e(i.cardTerminalSaleRRecords)))}))}},{key:"serverError",value:function(e){return e instanceof Response?(0,g._)("backend server error"):(0,g._)(0===e.status?{status:e.status,message:"Backend Server is not Working",statusText:e.statusText}:401===e.status?{status:e.status,message:"Your are not authorised",statusText:e.statusText}:e)}},{key:"handleError",value:function(e){return e.error.message.includes("1062")?(0,g._)("Record already exists"):(0,g._)(e.error.message)}}]),t}()).\u0275fac=function(e){return new(e||o)(m.LFG(b.eN),m.LFG(T.T),m.LFG(A.e))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o),v=n(3731),_=n(6880),S=n(1414),R=n(823),x=n(3045),y=n(3324),U=n(688),D=n(9018),k=n(4113),w=n(7617),J=n(2397),M=n(8646),N=n(8139);function C(e,t){if(1&e&&(m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.qZA()),2&e){var r=t.$implicit;m.xp6(2),m.Oqu(r.date),m.xp6(2),m.Oqu(r.total),m.xp6(2),m.Oqu(r.commission),m.xp6(2),m.Oqu(r.prize_value),m.xp6(2),m.Oqu(r.total-r.commission-r.prize_value)}}function O(e,t){1&e&&(m.TgZ(0,"div",35),m.TgZ(1,"h1"),m._uU(2,"No Data"),m.qZA(),m.qZA())}function F(e,t){if(1&e&&(m.TgZ(0,"div"),m.TgZ(1,"table",31),m.TgZ(2,"thead"),m.TgZ(3,"tr"),m.TgZ(4,"th"),m._uU(5,"Date"),m.qZA(),m.TgZ(6,"th",32),m._uU(7,"Amount"),m.qZA(),m.TgZ(8,"th",33),m._uU(9,"Commission"),m.qZA(),m.TgZ(10,"th",25),m._uU(11,"Prize"),m.qZA(),m.TgZ(12,"th",34),m._uU(13,"NTP"),m.qZA(),m._UZ(14,"th"),m.qZA(),m.qZA(),m.TgZ(15,"tbody"),m.YNc(16,C,11,5,"tr",26),m.qZA(),m.qZA(),m.YNc(17,O,3,0,"div",27),m.qZA()),2&e){var r=m.oxw();m.xp6(16),m.Q6J("ngForOf",r.terminalSaleReportData),m.xp6(1),m.Q6J("ngIf",0==r.terminalSaleReportData.length)}}function E(e,t){if(1&e&&(m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.qZA()),2&e){var r=t.$implicit;m.xp6(2),m.Oqu(r.date),m.xp6(2),m.Oqu(r.total),m.xp6(2),m.Oqu(r.commission),m.xp6(2),m.Oqu(r.prize_value),m.xp6(2),m.Oqu(r.total-r.commission-r.prize_value)}}function I(e,t){1&e&&(m.TgZ(0,"div",35),m.TgZ(1,"h1"),m._uU(2,"No Data"),m.qZA(),m.qZA())}function Q(e,t){if(1&e&&(m.TgZ(0,"div"),m.TgZ(1,"table",31),m.TgZ(2,"thead"),m.TgZ(3,"tr"),m.TgZ(4,"th"),m._uU(5,"Date"),m.qZA(),m.TgZ(6,"th",32),m._uU(7,"Amount"),m.qZA(),m.TgZ(8,"th",33),m._uU(9,"Commission"),m.qZA(),m.TgZ(10,"th",25),m._uU(11,"Prize"),m.qZA(),m.TgZ(12,"th",34),m._uU(13,"NTP"),m.qZA(),m._UZ(14,"th"),m.qZA(),m.qZA(),m.TgZ(15,"tbody"),m.YNc(16,E,11,5,"tr",26),m.qZA(),m.qZA(),m.YNc(17,I,3,0,"div",27),m.qZA()),2&e){var r=m.oxw();m.xp6(16),m.Q6J("ngForOf",r.cardTerminalSaleReportData),m.xp6(1),m.Q6J("ngIf",0==r.cardTerminalSaleReportData.length)}}function L(e,t){if(1&e){var r=m.EpF();m.TgZ(0,"tr"),m.TgZ(1,"td"),m._uU(2),m.qZA(),m.TgZ(3,"td"),m._uU(4),m.qZA(),m.TgZ(5,"td"),m._uU(6),m.qZA(),m.TgZ(7,"td"),m._uU(8),m.qZA(),m.TgZ(9,"td"),m._uU(10),m.qZA(),m.TgZ(11,"td"),m._uU(12),m.qZA(),m.TgZ(13,"td"),m._uU(14),m.qZA(),m.TgZ(15,"td"),m.TgZ(16,"button",36),m.NdJ("click",function(){var e=m.CHM(r).$implicit;return m.oxw().claimPrize(e.play_master_id)}),m._uU(17),m.qZA(),m.qZA(),m.TgZ(18,"td"),m.TgZ(19,"button",37),m.NdJ("click",function(){var e=m.CHM(r).$implicit;return m.oxw().cancelTicket(e.play_master_id)}),m._uU(20,"Cancel"),m.qZA(),m.qZA(),m.TgZ(21,"td"),m.TgZ(22,"a",38),m.NdJ("click",function(){var e=m.CHM(r).$implicit,t=m.oxw();return m.MAs(83).show(),t.openPopup(e.play_master_id,e.barcode_number)}),m._UZ(23,"i",39),m.qZA(),m.qZA(),m.qZA()}if(2&e){var a=t.$implicit,i=t.index,n=m.oxw();m.xp6(2),m.Oqu(i+1),m.xp6(2),m.Oqu(a.draw_time),m.xp6(2),m.Oqu(a.ticket_taken_time),m.xp6(2),m.Oqu(a.barcode_number),m.xp6(2),m.Oqu(a.total_quantity),m.xp6(2),m.Oqu(a.amount),m.xp6(2),m.Oqu(a.prize_value),m.xp6(2),m.Q6J("hidden",0==a.prize_value)("disabled",1==a.is_claimed),m.xp6(1),m.Oqu(a.prize_value>0?a.is_claimed>0?"Claimed":"Claim":"No Prize"),m.xp6(2),m.Q6J("disabled",n.checkBtnEligibility(a))}}function B(e,t){1&e&&(m.TgZ(0,"div",35),m.TgZ(1,"h1"),m._uU(2,"No Data"),m.qZA(),m.qZA())}function P(e,t){1&e&&(m.TgZ(0,"span"),m._uU(1,"Single"),m.qZA())}function Y(e,t){if(1&e&&(m.TgZ(0,"button",51),m._uU(1),m.qZA()),2&e){var r=t.$implicit;m.s9C("matBadge",r.quantity),m.xp6(1),m.AsE(" ",r.game_name," ",r.number_set," ")}}function z(e,t){if(1&e&&(m.TgZ(0,"div",49),m.YNc(1,Y,2,3,"button",50),m.qZA()),2&e){var r=t.index,a=m.oxw(2);m.xp6(1),m.Q6J("ngForOf",a.barcodeDetails.details.slice(r*a.columnNumber,r*a.columnNumber+a.columnNumber))}}function j(e,t){if(1&e){var r=m.EpF();m.TgZ(0,"div",40),m.TgZ(1,"div",41),m.TgZ(2,"div",42),m.TgZ(3,"h4",43),m._uU(4),m.qZA(),m.TgZ(5,"button",44),m.NdJ("click",function(){return m.CHM(r),m.oxw(),m.MAs(83).hide()}),m.TgZ(6,"span",45),m._uU(7,"\xd7"),m.qZA(),m.qZA(),m.qZA(),m.TgZ(8,"div",46),m.YNc(9,P,2,0,"span",16),m.YNc(10,z,2,1,"div",47),m.qZA(),m._UZ(11,"div",48),m.qZA(),m.qZA()}if(2&e){var a=m.oxw();m.xp6(4),m.hij(" Ticket: ",a.barcodeDetails.barcode," "),m.xp6(5),m.Q6J("ngIf",a.barcodeDetails.details.length),m.xp6(1),m.Q6J("ngForOf",a.barcodeDetails.details.slice(0,a.barcodeDetails.details.length%a.columnNumber==0?a.barcodeDetails.details.length/a.columnNumber:a.barcodeDetails.details.length/a.columnNumber+1))}}var W=function(){return["/terminal"]},$=[{path:"",canActivate:[d.v],component:function(){var e=function(){function e(t,a,i,n){var o=this;r(this,e),this.renderer=t,this.terminalReportService=a,this.adminReportService=i,this.commonService=n,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new l.uU("en-US"),this.columnNumber=5,this.selectedReport="0",this.terminalReportData=[],this.terminalSaleReportData=[],this.cardTerminalSaleReportData=[],this.renderer.setStyle(document.body,"background-image","none"),this.terminalReportService.terminalListListener().subscribe(function(e){o.terminalReportData=e}),this.terminalReportService.terminalSaleListListener().subscribe(function(e){o.terminalSaleReportData=e}),this.terminalReportService.cardTerminalSaleListListener().subscribe(function(e){o.cardTerminalSaleReportData=e}),this.getTerminalBarcodeReport(),this.getTerminalSaleReport(),this.commonService.terminalCancelListListener().subscribe(function(e){e.forEach(function(e){var t=this.terminalReportData.findIndex(function(t){return t.play_master_id===e.id});this.terminalReportData[t].is_cancelable=0})})}return i(e,[{key:"ngOnInit",value:function(){}},{key:"claimPrize",value:function(e){u().fire({title:"Please Wait !",html:"adding points ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}}),this.terminalReportService.claimPrize(e).subscribe(function(e){e.point&&u().close()})}},{key:"checkBtnEligibility",value:function(e){return 1===e.is_cancelled||0===e.is_cancelable}},{key:"cancelTicket",value:function(e){var t=this;u().fire({title:"Confirm Cancel ?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, confirm"}).then(function(r){r.isConfirmed?(u().fire({title:"Please Wait !",html:"Confirming cancel",allowOutsideClick:!1,didOpen:function(){u().showLoading()}}),t.terminalReportService.cancelTicket(e).subscribe(function(e){1===e.success?(u().hideLoading(),u().fire({icon:"success",title:"Cancelled",showConfirmButton:!1,timer:1500})):u().fire({icon:"error",title:"You cannot cancel this ticket",showConfirmButton:!1,timer:2e3})})):r.isDenied&&u().fire("Changes are not saved","","info")})}},{key:"getTerminalBarcodeReport",value:function(){u().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}});var e=JSON.parse(localStorage.getItem("user")),t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),r=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalReport(e.userId,t,r).subscribe(function(e){e.data&&u().close()})}},{key:"getTerminalSaleReport",value:function(){u().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:function(){u().showLoading()}});var e=JSON.parse(localStorage.getItem("user")),t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),r=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalSaleReport(e.userId,t,r).subscribe(function(e){e.data&&u().close()}),this.terminalReportService.getCardTerminalSaleReport(e.userId,t,r).subscribe(function(e){e.data&&u().close()})}},{key:"openPopup",value:function(e,t){var r=this;this.adminReportService.getBarcodeDetails(e).subscribe(function(e){r.barcodeDetails=e.data})}}]),e}();return e.\u0275fac=function(t){return new(t||e)(m.Y36(m.Qsj),m.Y36(q),m.Y36(v.Q),m.Y36(_.v))},e.\u0275cmp=m.Xpm({type:e,selectors:[["app-terminal-report"]],decls:85,vars:25,consts:[[1,"pt-5",2,"padding-left","20px"],[1,"btn","btn-warning",3,"routerLink"],[1,"bi","bi-arrow-return-left"],[1,"mr-3","ml-3",3,"selectedIndex"],["label","Terminal sale report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],[3,"ngModel","ngModelChange"],["value","0"],["value","1"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],[4,"ngIf"],["label","Terminal barcode report"],[1,"",2,"overflow","hidden"],["matSort","",1,"table","table-bordered","table-sm","m-3",2,"border","none !important","height","50px","overflow","hidden"],["mat-sort-header","draw_time"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","barcode_number"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["mat-sort-header","prize_value"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-lg modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","ntp"],[1,"text-center"],["type","button",1,"btn","btn-danger",2,"min-width","87px",3,"hidden","disabled","click"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4",3,"click"],[1,"bi","bi-info-square-fill"],["role","document",1,"modal-dialog","modal-lg","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],["class","d-flex flex-row mt-2",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"d-flex","flex-row","mt-2"],["class","mr-2 mt-3",3,"matBadge",4,"ngFor","ngForOf"],[1,"mr-2","mt-3",3,"matBadge"]],template:function(e,t){if(1&e&&(m.TgZ(0,"div",0),m.TgZ(1,"button",1),m._UZ(2,"i",2),m._uU(3," Back"),m.qZA(),m.qZA(),m.TgZ(4,"mat-tab-group",3),m.TgZ(5,"mat-tab",4),m.TgZ(6,"div",5),m.TgZ(7,"div",6),m.TgZ(8,"mat-form-field",7),m.TgZ(9,"mat-label"),m._uU(10,"Select Game"),m.qZA(),m.TgZ(11,"mat-select",8),m.NdJ("ngModelChange",function(e){return t.selectedReport=e}),m.TgZ(12,"mat-option",9),m._uU(13,"All Game"),m.qZA(),m.TgZ(14,"mat-option",10),m._uU(15,"Card"),m.qZA(),m.qZA(),m.qZA(),m.qZA(),m.TgZ(16,"div",6),m.TgZ(17,"mat-form-field",7),m.TgZ(18,"mat-label"),m._uU(19,"Start date"),m.qZA(),m.TgZ(20,"input",11),m.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),m.qZA(),m._UZ(21,"mat-datepicker-toggle",12),m.TgZ(22,"mat-datepicker",8,13),m.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(24,"div",6),m.TgZ(25,"mat-form-field",7),m.TgZ(26,"mat-label"),m._uU(27,"End date"),m.qZA(),m.TgZ(28,"input",11),m.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),m.qZA(),m._UZ(29,"mat-datepicker-toggle",12),m.TgZ(30,"mat-datepicker",8,14),m.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(32,"button",15),m.NdJ("click",function(){return t.getTerminalSaleReport()}),m._uU(33,"Search"),m.qZA(),m.qZA(),m.YNc(34,F,18,2,"div",16),m.YNc(35,Q,18,2,"div",16),m.qZA(),m.TgZ(36,"mat-tab",17),m.TgZ(37,"div",5),m.TgZ(38,"div",6),m.TgZ(39,"mat-form-field",7),m.TgZ(40,"mat-label"),m._uU(41,"Start date"),m.qZA(),m.TgZ(42,"input",11),m.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),m.qZA(),m._UZ(43,"mat-datepicker-toggle",12),m.TgZ(44,"mat-datepicker",8,13),m.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(46,"div",6),m.TgZ(47,"mat-form-field",7),m.TgZ(48,"mat-label"),m._uU(49,"End date"),m.qZA(),m.TgZ(50,"input",11),m.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),m.qZA(),m._UZ(51,"mat-datepicker-toggle",12),m.TgZ(52,"mat-datepicker",8,14),m.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),m.qZA(),m.qZA(),m.qZA(),m.TgZ(54,"button",15),m.NdJ("click",function(){return t.getTerminalBarcodeReport()}),m._uU(55,"Search"),m.qZA(),m.qZA(),m.TgZ(56,"div",18),m.TgZ(57,"table",19),m.TgZ(58,"thead"),m.TgZ(59,"tr"),m.TgZ(60,"th"),m._uU(61,"Sl.NO"),m.qZA(),m.TgZ(62,"th",20),m._uU(63,"Draw Time"),m.qZA(),m.TgZ(64,"th",21),m._uU(65,"Ticket Time"),m.qZA(),m.TgZ(66,"th",22),m._uU(67,"Barcode"),m.qZA(),m.TgZ(68,"th",23),m._uU(69,"Quantity"),m.qZA(),m.TgZ(70,"th",24),m._uU(71,"Amount"),m.qZA(),m.TgZ(72,"th",25),m._uU(73,"Prize"),m.qZA(),m.TgZ(74,"th"),m._uU(75,"Claim"),m.qZA(),m.TgZ(76,"th"),m._uU(77,"Cancel"),m.qZA(),m._UZ(78,"th"),m.qZA(),m.qZA(),m.TgZ(79,"tbody"),m.YNc(80,L,24,11,"tr",26),m.qZA(),m.qZA(),m.YNc(81,B,3,0,"div",27),m.qZA(),m.qZA(),m.qZA(),m.TgZ(82,"div",28,29),m.YNc(84,j,12,3,"div",30),m.qZA()),2&e){var r=m.MAs(23),a=m.MAs(31);m.xp6(1),m.Q6J("routerLink",m.DdM(24,W)),m.xp6(3),m.Q6J("selectedIndex",0),m.xp6(7),m.Q6J("ngModel",t.selectedReport),m.xp6(9),m.Q6J("matDatepicker",r)("ngModel",t.StartDateFilter),m.xp6(1),m.Q6J("for",r),m.xp6(1),m.Q6J("ngModel",t.StartDateFilter),m.xp6(6),m.Q6J("matDatepicker",a)("ngModel",t.EndDateFilter),m.xp6(1),m.Q6J("for",a),m.xp6(1),m.Q6J("ngModel",t.EndDateFilter),m.xp6(4),m.Q6J("ngIf","0"==t.selectedReport),m.xp6(1),m.Q6J("ngIf","1"==t.selectedReport),m.xp6(7),m.Q6J("matDatepicker",r)("ngModel",t.StartDateFilter),m.xp6(1),m.Q6J("for",r),m.xp6(1),m.Q6J("ngModel",t.StartDateFilter),m.xp6(6),m.Q6J("matDatepicker",a)("ngModel",t.EndDateFilter),m.xp6(1),m.Q6J("for",a),m.xp6(1),m.Q6J("ngModel",t.EndDateFilter),m.xp6(28),m.Q6J("ngForOf",t.terminalReportData),m.xp6(1),m.Q6J("ngIf",0==t.terminalReportData.length),m.xp6(3),m.Q6J("ngIf",t.barcodeDetails)}},directives:[c.rH,S.SP,S.uX,R.KE,R.hX,x.gD,y.JJ,y.On,U.ey,D.Nt,k.hl,y.Fj,k.nW,R.R9,k.Mq,w.lW,l.O5,J.YE,J.nU,l.sg,M.oB,M.b6,N.k],styles:[""]}),e}()}],K=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[c.Bz.forChild($)],c.Bz]}),e}(),X=n(2765),G=n(3615),H=n(2015),V=n(9009),ee=n(846),te=n(536),re=n(9217),ae=function(){var e=function e(){r(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.oAB({type:e}),e.\u0275inj=m.cJS({imports:[[l.ez,K,X.q,S.Nh,G.q,x.LD,H.o9,V.QW,y.u5,y.UX,ee.rP,J.JX,te.aE,te.bz,M.At,re.UU,N.g,k.FA,D.c,U.XK,U.si]]}),e}()}}])}();