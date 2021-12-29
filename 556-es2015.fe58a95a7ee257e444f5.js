"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[556],{9556:function(e,t,a){a.r(t),a.d(t,{TerminalReportModule:function(){return V}});var r=a(6274),i=a(5543),n=a(3657),o=a(3420),l=a.n(o),s=a(2741),d=a(6006),c=a(7535),u=a(4766),m=a(2072),p=a(4089),g=a(1887),Z=a(6997),h=a(1468);let b=(()=>{class e{constructor(e,t,a){this.http=e,this.errorService=t,this.authService=a,this.BASE_API_URL=u.N.BASE_API_URL,this.barcodeReportRecords=[],this.terminalSaleRRecords=[],this.cardTerminalSaleRRecords=[],this.userData=JSON.parse(localStorage.getItem("user")),this.barcodeReportRecordsSubject=new d.xQ,this.terminalSaleRecordsSubject=new d.xQ,this.cardTerminalSaleRecordsSubject=new d.xQ}terminalListListener(){return this.barcodeReportRecordsSubject.asObservable()}terminalSaleListListener(){return this.terminalSaleRecordsSubject.asObservable()}cardTerminalSaleListListener(){return this.cardTerminalSaleRecordsSubject.asObservable()}cancelTicket(e){return this.http.post(this.BASE_API_URL+"/cancelTicket",{play_master_id:e}).pipe((0,m.K)(this.handleError),(0,p.b)(e=>{if(e.data){this.authService.updateUserBalance(e.point);const t=this.barcodeReportRecords.findIndex(t=>t.play_master_id===e.id);this.barcodeReportRecords[t].is_cancelled=1,this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords])}}))}claimPrize(e){return this.http.post(this.BASE_API_URL+"/claimPrize",{play_master_id:e}).pipe((0,m.K)(this.handleError),(0,p.b)(e=>{if(e.point){this.authService.updateUserBalance(e.point);const t=this.barcodeReportRecords.findIndex(t=>t.play_master_id===e.id);this.barcodeReportRecords[t].is_claimed=1,this.barcodeReportRecords[t].is_cancelled=1,this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords])}}))}getTerminalReport(e,t,a){return this.http.post(this.BASE_API_URL+"/terminal/barcodeReport",{terminalId:e,startDate:t,endDate:a}).pipe((0,m.K)(this.handleError),(0,p.b)(e=>{e.data&&(this.barcodeReportRecords=e.data,this.barcodeReportRecordsSubject.next([...this.barcodeReportRecords]))}))}getTerminalSaleReport(e,t,a){return this.http.post(this.BASE_API_URL+"/terminal/terminalSaleReports",{terminalId:e,startDate:t,endDate:a}).pipe((0,m.K)(this.handleError),(0,p.b)(e=>{e.data&&(this.terminalSaleRRecords=e.data,this.terminalSaleRecordsSubject.next([...this.terminalSaleRRecords]))}))}getCardTerminalSaleReport(e,t,a){return this.http.post(this.BASE_API_URL+"/terminal/terminalCardSaleReports",{terminalId:e,startDate:t,endDate:a}).pipe((0,m.K)(this.handleError),(0,p.b)(e=>{e.data&&(this.cardTerminalSaleRRecords=e.data,this.cardTerminalSaleRecordsSubject.next([...this.cardTerminalSaleRRecords]))}))}serverError(e){return e instanceof Response?(0,c._)("backend server error"):(0,c._)(0===e.status?{status:e.status,message:"Backend Server is not Working",statusText:e.statusText}:401===e.status?{status:e.status,message:"Your are not authorised",statusText:e.statusText}:e)}handleError(e){return e.error.message.includes("1062")?(0,c._)("Record already exists"):(0,c._)(e.error.message)}}return e.\u0275fac=function(t){return new(t||e)(s.LFG(g.eN),s.LFG(Z.T),s.LFG(h.e))},e.\u0275prov=s.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var T=a(3731),f=a(6880),A=a(1414),q=a(823),_=a(3045),R=a(3324),S=a(688),x=a(9018),U=a(4113),v=a(7617),D=a(2397),k=a(8646),y=a(8139);function w(e,t){if(1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.qZA()),2&e){const e=t.$implicit;s.xp6(2),s.Oqu(e.date),s.xp6(2),s.Oqu(e.total),s.xp6(2),s.Oqu(e.commission),s.xp6(2),s.Oqu(e.prize_value),s.xp6(2),s.Oqu(e.total-e.commission-e.prize_value)}}function J(e,t){1&e&&(s.TgZ(0,"div",35),s.TgZ(1,"h1"),s._uU(2,"No Data"),s.qZA(),s.qZA())}function M(e,t){if(1&e&&(s.TgZ(0,"div"),s.TgZ(1,"table",31),s.TgZ(2,"thead"),s.TgZ(3,"tr"),s.TgZ(4,"th"),s._uU(5,"Date"),s.qZA(),s.TgZ(6,"th",32),s._uU(7,"Amount"),s.qZA(),s.TgZ(8,"th",33),s._uU(9,"Commission"),s.qZA(),s.TgZ(10,"th",25),s._uU(11,"Prize"),s.qZA(),s.TgZ(12,"th",34),s._uU(13,"NTP"),s.qZA(),s._UZ(14,"th"),s.qZA(),s.qZA(),s.TgZ(15,"tbody"),s.YNc(16,w,11,5,"tr",26),s.qZA(),s.qZA(),s.YNc(17,J,3,0,"div",27),s.qZA()),2&e){const e=s.oxw();s.xp6(16),s.Q6J("ngForOf",e.terminalSaleReportData),s.xp6(1),s.Q6J("ngIf",0==e.terminalSaleReportData.length)}}function N(e,t){if(1&e&&(s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.qZA()),2&e){const e=t.$implicit;s.xp6(2),s.Oqu(e.date),s.xp6(2),s.Oqu(e.total),s.xp6(2),s.Oqu(e.commission),s.xp6(2),s.Oqu(e.prize_value),s.xp6(2),s.Oqu(e.total-e.commission-e.prize_value)}}function C(e,t){1&e&&(s.TgZ(0,"div",35),s.TgZ(1,"h1"),s._uU(2,"No Data"),s.qZA(),s.qZA())}function O(e,t){if(1&e&&(s.TgZ(0,"div"),s.TgZ(1,"table",31),s.TgZ(2,"thead"),s.TgZ(3,"tr"),s.TgZ(4,"th"),s._uU(5,"Date"),s.qZA(),s.TgZ(6,"th",32),s._uU(7,"Amount"),s.qZA(),s.TgZ(8,"th",33),s._uU(9,"Commission"),s.qZA(),s.TgZ(10,"th",25),s._uU(11,"Prize"),s.qZA(),s.TgZ(12,"th",34),s._uU(13,"NTP"),s.qZA(),s._UZ(14,"th"),s.qZA(),s.qZA(),s.TgZ(15,"tbody"),s.YNc(16,N,11,5,"tr",26),s.qZA(),s.qZA(),s.YNc(17,C,3,0,"div",27),s.qZA()),2&e){const e=s.oxw();s.xp6(16),s.Q6J("ngForOf",e.cardTerminalSaleReportData),s.xp6(1),s.Q6J("ngIf",0==e.cardTerminalSaleReportData.length)}}function F(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"tr"),s.TgZ(1,"td"),s._uU(2),s.qZA(),s.TgZ(3,"td"),s._uU(4),s.qZA(),s.TgZ(5,"td"),s._uU(6),s.qZA(),s.TgZ(7,"td"),s._uU(8),s.qZA(),s.TgZ(9,"td"),s._uU(10),s.qZA(),s.TgZ(11,"td"),s._uU(12),s.qZA(),s.TgZ(13,"td"),s._uU(14),s.qZA(),s.TgZ(15,"td"),s.TgZ(16,"button",36),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().claimPrize(t.play_master_id)}),s._uU(17),s.qZA(),s.qZA(),s.TgZ(18,"td"),s.TgZ(19,"button",37),s.NdJ("click",function(){const t=s.CHM(e).$implicit;return s.oxw().cancelTicket(t.play_master_id)}),s._uU(20,"Cancel"),s.qZA(),s.qZA(),s.TgZ(21,"td"),s.TgZ(22,"a",38),s.NdJ("click",function(){const t=s.CHM(e).$implicit,a=s.oxw();return s.MAs(83).show(),a.openPopup(t.play_master_id,t.barcode_number)}),s._UZ(23,"i",39),s.qZA(),s.qZA(),s.qZA()}if(2&e){const e=t.$implicit,a=t.index,r=s.oxw();s.xp6(2),s.Oqu(a+1),s.xp6(2),s.Oqu(e.draw_time),s.xp6(2),s.Oqu(e.ticket_taken_time),s.xp6(2),s.Oqu(e.barcode_number),s.xp6(2),s.Oqu(e.total_quantity),s.xp6(2),s.Oqu(e.amount),s.xp6(2),s.Oqu(e.prize_value),s.xp6(2),s.Q6J("hidden",0==e.prize_value)("disabled",1==e.is_claimed),s.xp6(1),s.Oqu(e.prize_value>0?e.is_claimed>0?"Claimed":"Claim":"No Prize"),s.xp6(2),s.Q6J("disabled",r.checkBtnEligibility(e))}}function E(e,t){1&e&&(s.TgZ(0,"div",35),s.TgZ(1,"h1"),s._uU(2,"No Data"),s.qZA(),s.qZA())}function Q(e,t){1&e&&(s.TgZ(0,"span"),s._uU(1,"Single"),s.qZA())}function I(e,t){if(1&e&&(s.TgZ(0,"button",51),s._uU(1),s.qZA()),2&e){const e=t.$implicit;s.s9C("matBadge",e.quantity),s.xp6(1),s.AsE(" ",e.game_name," ",e.number_set," ")}}function L(e,t){if(1&e&&(s.TgZ(0,"div",49),s.YNc(1,I,2,3,"button",50),s.qZA()),2&e){const e=t.index,a=s.oxw(2);s.xp6(1),s.Q6J("ngForOf",a.barcodeDetails.details.slice(e*a.columnNumber,e*a.columnNumber+a.columnNumber))}}function B(e,t){if(1&e){const e=s.EpF();s.TgZ(0,"div",40),s.TgZ(1,"div",41),s.TgZ(2,"div",42),s.TgZ(3,"h4",43),s._uU(4),s.qZA(),s.TgZ(5,"button",44),s.NdJ("click",function(){return s.CHM(e),s.oxw(),s.MAs(83).hide()}),s.TgZ(6,"span",45),s._uU(7,"\xd7"),s.qZA(),s.qZA(),s.qZA(),s.TgZ(8,"div",46),s.YNc(9,Q,2,0,"span",16),s.YNc(10,L,2,1,"div",47),s.qZA(),s._UZ(11,"div",48),s.qZA(),s.qZA()}if(2&e){const e=s.oxw();s.xp6(4),s.hij(" Ticket: ",e.barcodeDetails.barcode," "),s.xp6(5),s.Q6J("ngIf",e.barcodeDetails.details.length),s.xp6(1),s.Q6J("ngForOf",e.barcodeDetails.details.slice(0,e.barcodeDetails.details.length%e.columnNumber==0?e.barcodeDetails.details.length/e.columnNumber:e.barcodeDetails.details.length/e.columnNumber+1))}}const P=function(){return["/terminal"]},Y=[{path:"",canActivate:[n.v],component:(()=>{class e{constructor(e,t,a,i){this.renderer=e,this.terminalReportService=t,this.adminReportService=a,this.commonService=i,this.thisYear=(new Date).getFullYear(),this.thisMonth=(new Date).getMonth(),this.thisDay=(new Date).getDate(),this.startDate=new Date(this.thisYear,this.thisMonth,this.thisDay),this.StartDateFilter=this.startDate,this.EndDateFilter=this.startDate,this.pipe=new r.uU("en-US"),this.columnNumber=5,this.selectedReport="0",this.terminalReportData=[],this.terminalSaleReportData=[],this.cardTerminalSaleReportData=[],this.renderer.setStyle(document.body,"background-image","none"),this.terminalReportService.terminalListListener().subscribe(e=>{this.terminalReportData=e}),this.terminalReportService.terminalSaleListListener().subscribe(e=>{this.terminalSaleReportData=e}),this.terminalReportService.cardTerminalSaleListListener().subscribe(e=>{this.cardTerminalSaleReportData=e}),this.getTerminalBarcodeReport(),this.getTerminalSaleReport(),this.commonService.terminalCancelListListener().subscribe(e=>{e.forEach(function(e){const t=this.terminalReportData.findIndex(t=>t.play_master_id===e.id);this.terminalReportData[t].is_cancelable=0})})}ngOnInit(){}claimPrize(e){l().fire({title:"Please Wait !",html:"adding points ...",allowOutsideClick:!1,didOpen:()=>{l().showLoading()}}),this.terminalReportService.claimPrize(e).subscribe(e=>{e.point&&l().close()})}checkBtnEligibility(e){return 1===e.is_cancelled||0===e.is_cancelable}cancelTicket(e){l().fire({title:"Confirm Cancel ?",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, confirm"}).then(t=>{t.isConfirmed?(l().fire({title:"Please Wait !",html:"Confirming cancel",allowOutsideClick:!1,didOpen:()=>{l().showLoading()}}),this.terminalReportService.cancelTicket(e).subscribe(e=>{1===e.success?(l().hideLoading(),l().fire({icon:"success",title:"Cancelled",showConfirmButton:!1,timer:1500})):l().fire({icon:"error",title:"You cannot cancel this ticket",showConfirmButton:!1,timer:2e3})})):t.isDenied&&l().fire("Changes are not saved","","info")})}getTerminalBarcodeReport(){l().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{l().showLoading()}});const e=JSON.parse(localStorage.getItem("user"));let t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),a=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalReport(e.userId,t,a).subscribe(e=>{e.data&&l().close()})}getTerminalSaleReport(){l().fire({title:"Please Wait !",html:"loading ...",allowOutsideClick:!1,didOpen:()=>{l().showLoading()}});const e=JSON.parse(localStorage.getItem("user")),t=this.pipe.transform(this.StartDateFilter,"yyyy-MM-dd"),a=this.pipe.transform(this.EndDateFilter,"yyyy-MM-dd");this.terminalReportService.getTerminalSaleReport(e.userId,t,a).subscribe(e=>{e.data&&l().close()}),this.terminalReportService.getCardTerminalSaleReport(e.userId,t,a).subscribe(e=>{e.data&&l().close()})}openPopup(e,t){this.adminReportService.getBarcodeDetails(e).subscribe(e=>{this.barcodeDetails=e.data})}}return e.\u0275fac=function(t){return new(t||e)(s.Y36(s.Qsj),s.Y36(b),s.Y36(T.Q),s.Y36(f.v))},e.\u0275cmp=s.Xpm({type:e,selectors:[["app-terminal-report"]],decls:85,vars:25,consts:[[1,"pt-5",2,"padding-left","20px"],[1,"btn","btn-warning",3,"routerLink"],[1,"bi","bi-arrow-return-left"],[1,"mr-3","ml-3",3,"selectedIndex"],["label","Terminal sale report"],[1,"pt-1","d-flex"],[1,"col-3"],["appearance","fill"],[3,"ngModel","ngModelChange"],["value","0"],["value","1"],["matInput","",3,"matDatepicker","ngModel","ngModelChange"],["matSuffix","",3,"for"],["picker",""],["picker1",""],["mat-button","","color","accent",2,"font-size","20px",3,"click"],[4,"ngIf"],["label","Terminal barcode report"],[1,"",2,"overflow","hidden"],["matSort","",1,"table","table-bordered","table-sm","m-3",2,"border","none !important","height","50px","overflow","hidden"],["mat-sort-header","draw_time"],["mat-sort-header","ticket_taken_time"],["mat-sort-header","barcode_number"],["mat-sort-header","total_quantity"],["mat-sort-header","amount"],["mat-sort-header","prize_value"],[4,"ngFor","ngForOf"],["class","text-center",4,"ngIf"],["mdbModal","","id","frameModalTop","tabindex","-1","role","dialog","aria-labelledby","myModalLabel","aria-hidden","true",1,"modal","fade","top",2,"overflow-y","auto"],["frame","mdbModal"],["class","modal-dialog modal-lg modal-notify modal-info","role","document","style","min-width: 550px",4,"ngIf"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important","height","50px","overflow","scroll"],["mat-sort-header","total"],["mat-sort-header","commission"],["mat-sort-header","ntp"],[1,"text-center"],["type","button",1,"btn","btn-danger",2,"min-width","87px",3,"hidden","disabled","click"],["type","button",1,"btn","btn-danger",3,"disabled","click"],["color","info","mdbWavesEffect","",1,"waves-effect","mb-4",3,"click"],[1,"bi","bi-info-square-fill"],["role","document",1,"modal-dialog","modal-lg","modal-notify","modal-info",2,"min-width","550px"],[1,"modal-content"],[1,"modal-header","text-center"],[1,"modal-title","white-text","font-weight-bold"],["type","button","data-dismiss","modal","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",1,"white-text"],[1,"modal-body"],["class","d-flex flex-row mt-2",4,"ngFor","ngForOf"],[1,"modal-footer","justify-content-center"],[1,"d-flex","flex-row","mt-2"],["class","mr-2 mt-3",3,"matBadge",4,"ngFor","ngForOf"],[1,"mr-2","mt-3",3,"matBadge"]],template:function(e,t){if(1&e&&(s.TgZ(0,"div",0),s.TgZ(1,"button",1),s._UZ(2,"i",2),s._uU(3," Back"),s.qZA(),s.qZA(),s.TgZ(4,"mat-tab-group",3),s.TgZ(5,"mat-tab",4),s.TgZ(6,"div",5),s.TgZ(7,"div",6),s.TgZ(8,"mat-form-field",7),s.TgZ(9,"mat-label"),s._uU(10,"Select Game"),s.qZA(),s.TgZ(11,"mat-select",8),s.NdJ("ngModelChange",function(e){return t.selectedReport=e}),s.TgZ(12,"mat-option",9),s._uU(13,"All Game"),s.qZA(),s.TgZ(14,"mat-option",10),s._uU(15,"Card"),s.qZA(),s.qZA(),s.qZA(),s.qZA(),s.TgZ(16,"div",6),s.TgZ(17,"mat-form-field",7),s.TgZ(18,"mat-label"),s._uU(19,"Start date"),s.qZA(),s.TgZ(20,"input",11),s.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),s.qZA(),s._UZ(21,"mat-datepicker-toggle",12),s.TgZ(22,"mat-datepicker",8,13),s.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(24,"div",6),s.TgZ(25,"mat-form-field",7),s.TgZ(26,"mat-label"),s._uU(27,"End date"),s.qZA(),s.TgZ(28,"input",11),s.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),s.qZA(),s._UZ(29,"mat-datepicker-toggle",12),s.TgZ(30,"mat-datepicker",8,14),s.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(32,"button",15),s.NdJ("click",function(){return t.getTerminalSaleReport()}),s._uU(33,"Search"),s.qZA(),s.qZA(),s.YNc(34,M,18,2,"div",16),s.YNc(35,O,18,2,"div",16),s.qZA(),s.TgZ(36,"mat-tab",17),s.TgZ(37,"div",5),s.TgZ(38,"div",6),s.TgZ(39,"mat-form-field",7),s.TgZ(40,"mat-label"),s._uU(41,"Start date"),s.qZA(),s.TgZ(42,"input",11),s.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),s.qZA(),s._UZ(43,"mat-datepicker-toggle",12),s.TgZ(44,"mat-datepicker",8,13),s.NdJ("ngModelChange",function(e){return t.StartDateFilter=e}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(46,"div",6),s.TgZ(47,"mat-form-field",7),s.TgZ(48,"mat-label"),s._uU(49,"End date"),s.qZA(),s.TgZ(50,"input",11),s.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),s.qZA(),s._UZ(51,"mat-datepicker-toggle",12),s.TgZ(52,"mat-datepicker",8,14),s.NdJ("ngModelChange",function(e){return t.EndDateFilter=e}),s.qZA(),s.qZA(),s.qZA(),s.TgZ(54,"button",15),s.NdJ("click",function(){return t.getTerminalBarcodeReport()}),s._uU(55,"Search"),s.qZA(),s.qZA(),s.TgZ(56,"div",18),s.TgZ(57,"table",19),s.TgZ(58,"thead"),s.TgZ(59,"tr"),s.TgZ(60,"th"),s._uU(61,"Sl.NO"),s.qZA(),s.TgZ(62,"th",20),s._uU(63,"Draw Time"),s.qZA(),s.TgZ(64,"th",21),s._uU(65,"Ticket Time"),s.qZA(),s.TgZ(66,"th",22),s._uU(67,"Barcode"),s.qZA(),s.TgZ(68,"th",23),s._uU(69,"Quantity"),s.qZA(),s.TgZ(70,"th",24),s._uU(71,"Amount"),s.qZA(),s.TgZ(72,"th",25),s._uU(73,"Prize"),s.qZA(),s.TgZ(74,"th"),s._uU(75,"Claim"),s.qZA(),s.TgZ(76,"th"),s._uU(77,"Cancel"),s.qZA(),s._UZ(78,"th"),s.qZA(),s.qZA(),s.TgZ(79,"tbody"),s.YNc(80,F,24,11,"tr",26),s.qZA(),s.qZA(),s.YNc(81,E,3,0,"div",27),s.qZA(),s.qZA(),s.qZA(),s.TgZ(82,"div",28,29),s.YNc(84,B,12,3,"div",30),s.qZA()),2&e){const e=s.MAs(23),a=s.MAs(31);s.xp6(1),s.Q6J("routerLink",s.DdM(24,P)),s.xp6(3),s.Q6J("selectedIndex",0),s.xp6(7),s.Q6J("ngModel",t.selectedReport),s.xp6(9),s.Q6J("matDatepicker",e)("ngModel",t.StartDateFilter),s.xp6(1),s.Q6J("for",e),s.xp6(1),s.Q6J("ngModel",t.StartDateFilter),s.xp6(6),s.Q6J("matDatepicker",a)("ngModel",t.EndDateFilter),s.xp6(1),s.Q6J("for",a),s.xp6(1),s.Q6J("ngModel",t.EndDateFilter),s.xp6(4),s.Q6J("ngIf","0"==t.selectedReport),s.xp6(1),s.Q6J("ngIf","1"==t.selectedReport),s.xp6(7),s.Q6J("matDatepicker",e)("ngModel",t.StartDateFilter),s.xp6(1),s.Q6J("for",e),s.xp6(1),s.Q6J("ngModel",t.StartDateFilter),s.xp6(6),s.Q6J("matDatepicker",a)("ngModel",t.EndDateFilter),s.xp6(1),s.Q6J("for",a),s.xp6(1),s.Q6J("ngModel",t.EndDateFilter),s.xp6(28),s.Q6J("ngForOf",t.terminalReportData),s.xp6(1),s.Q6J("ngIf",0==t.terminalReportData.length),s.xp6(3),s.Q6J("ngIf",t.barcodeDetails)}},directives:[i.rH,A.SP,A.uX,q.KE,q.hX,_.gD,R.JJ,R.On,S.ey,x.Nt,U.hl,R.Fj,U.nW,q.R9,U.Mq,v.lW,r.O5,D.YE,D.nU,r.sg,k.oB,k.b6,y.k],styles:[""]}),e})()}];let z=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[i.Bz.forChild(Y)],i.Bz]}),e})();var j=a(2765),W=a(3615),K=a(2015),$=a(9009),X=a(846),G=a(536),H=a(9217);let V=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=s.oAB({type:e}),e.\u0275inj=s.cJS({imports:[[r.ez,z,j.q,A.Nh,W.q,_.LD,K.o9,$.QW,R.u5,R.UX,X.rP,D.JX,G.aE,G.bz,k.At,H.UU,y.g,U.FA,x.c,S.XK,S.si]]}),e})()}}]);