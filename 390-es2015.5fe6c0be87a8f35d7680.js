"use strict";(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[390],{3615:function(t,e,i){i.d(e,{q:function(){return n}});var o=i(7617),s=i(9018),r=i(2741);let n=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=r.oAB({type:t}),t.\u0275inj=r.cJS({imports:[o.ot,s.c]}),t})()},5390:function(t,e,i){i.r(e),i.d(e,{MasterStockistModule:function(){return Y}});var o=i(6274),s=i(5543),r=i(5550),n=i(3324),c=i(4766),a=i(3420),u=i.n(a),l=i(2741),d=i(6282),m=i(1468),g=i(1414),h=i(9009),f=i(1608),Z=i(823),p=i(9018),k=i(7617),A=i(2397),x=i(3045),q=i(1749),T=i(766),b=i(688),S=i(846);function v(t,e){1&t&&(l.TgZ(0,"mat-error"),l._uU(1,"This field is Required"),l.qZA())}function w(t,e){if(1&t&&(l.TgZ(0,"mat-error"),l._uU(1),l.qZA()),2&t){const t=l.oxw(2);l.xp6(1),l.hij("Minimum length of name is ",t.stockistMasterForm.get("userName").errors.minlength.requiredLength,"")}}function L(t,e){if(1&t&&(l.TgZ(0,"div",31),l.YNc(1,v,2,0,"mat-error",32),l.YNc(2,w,2,1,"mat-error",32),l.qZA()),2&t){const t=l.oxw();l.xp6(1),l.Q6J("ngIf",t.stockistMasterForm.get("userName").errors.required),l.xp6(1),l.Q6J("ngIf",t.stockistMasterForm.get("userName").errors.minlength)}}function U(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"tr",33),l.TgZ(1,"td"),l._uU(2),l.qZA(),l.TgZ(3,"td"),l._uU(4),l.qZA(),l.TgZ(5,"td"),l._uU(6),l.qZA(),l.TgZ(7,"td"),l._uU(8),l.qZA(),l.TgZ(9,"td"),l.TgZ(10,"i",34),l.NdJ("click",function(){const e=l.CHM(t).$implicit;return l.oxw().editStockist(e)}),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=e.$implicit,i=e.index,o=l.oxw();l.Q6J("ngStyle",o.getBackgroundColor(i)),l.xp6(2),l.Oqu(i+1),l.xp6(2),l.Oqu(t.userName),l.xp6(2),l.Oqu(t.pin),l.xp6(2),l.Oqu(t.balance)}}function N(t,e){if(1&t&&(l.TgZ(0,"mat-option",35),l._uU(1),l.qZA()),2&t){const t=e.$implicit;l.Q6J("value",t.userId),l.xp6(1),l.hij(" ",t.pin," ")}}function I(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",36),l.TgZ(1,"mat-label"),l._uU(2,"Name"),l.qZA(),l._UZ(3,"input",37),l.TgZ(4,"mat-icon",28),l._uU(5,"person_pin"),l.qZA(),l.qZA()),2&t){const t=l.oxw();l.xp6(3),l.Q6J("value",t.selectedStockist.userName)}}function y(t,e){if(1&t&&(l.TgZ(0,"mat-form-field",36),l.TgZ(1,"mat-label"),l._uU(2,"Current balance"),l.qZA(),l._UZ(3,"input",38),l.TgZ(4,"mat-icon",28),l._uU(5,"account_balance_wallet"),l.qZA(),l.qZA()),2&t){const t=l.oxw();l.xp6(3),l.Q6J("value",t.selectedStockist.balance)}}function _(t,e){if(1&t){const t=l.EpF();l.TgZ(0,"div",39),l.TgZ(1,"div",40),l.TgZ(2,"mat-slide-toggle",41),l.NdJ("change",function(){l.CHM(t);const e=l.oxw();return e.showDevArea=!e.showDevArea}),l._uU(3),l.qZA(),l.qZA(),l.qZA()}if(2&t){const t=l.oxw();l.xp6(3),l.Oqu(t.showDevArea?"Hide Developer Area":"Show Developer Area")}}function F(t,e){if(1&t&&(l.TgZ(0,"div",39),l.TgZ(1,"div",42),l.TgZ(2,"pre"),l._uU(3),l.ALo(4,"json"),l.ALo(5,"json"),l.qZA(),l.qZA(),l.TgZ(6,"div",40),l.TgZ(7,"pre"),l._uU(8),l.ALo(9,"json"),l.qZA(),l.qZA(),l._UZ(10,"div",40),l.qZA()),2&t){const t=l.oxw();l.xp6(3),l.AsE("        stockistMasterForm = ",l.lcZ(4,3,t.stockistMasterForm.value),"\n        stockists = ",l.lcZ(5,5,t.stockists),"\n      "),l.xp6(5),l.hij("stockistLimitForm = ",l.lcZ(9,7,t.stockistLimitForm.value),"")}}function C(t,e,i){return(t<e?-1:1)*(i?1:-1)}const J=[{path:"",canActivate:[r.m],component:(()=>{class t{constructor(t,e){this.masterStockistService=t,this.authService=e,this.isProduction=c.N.production,this.showDevArea=!1,this.isStockistUpdatAble=!1,this.stockists=[],this.sortedStockistList=[],this.selectedStockist=null,this.highLightedRowIndex=-1,this.stockistMasterForm=new n.cw({id:new n.NI(null),userName:new n.NI(null,[n.kI.required,n.kI.minLength(2)]),pin:new n.NI(null)}),this.stockistLimitForm=new n.cw({beneficiaryUid:new n.NI(null,[n.kI.required]),amount:new n.NI(null,[n.kI.required,n.kI.minLength(2)])})}ngOnInit(){this.user=this.authService.userBehaviorSubject.value,this.stockists=this.masterStockistService.getStockists(),this.sortedStockistList=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(t=>{this.stockists=t,this.sortedStockistList=t})}onStockistSelect(t){this.selectedStockist=this.stockists.find(e=>e.userId===t.value)}editStockist(t){const e=this.stockists.findIndex(e=>e.userId===t.userId);this.highLightedRowIndex=e,this.stockistMasterForm.patchValue({id:t.userId,userName:t.userName,pin:t.pin}),this.isStockistUpdatAble=!0}upateStockist(){u().fire({title:"Confirmation",text:"Do you sure to update stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.updateStockiist({id:this.stockistMasterForm.value.id,userName:this.stockistMasterForm.value.userName}).subscribe(t=>{1===t.success?(this.sortedStockistList[this.highLightedRowIndex]=t.data,this.stockistMasterForm.reset(),this.isStockistUpdatAble=!1,setTimeout(()=>{this.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Stockist updated",timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{})})}createNewStockist(){u().fire({title:"Confirmation",text:"Do you sure to create stockist?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.saveNewStockist({userName:this.stockistMasterForm.value.userName}).subscribe(t=>{if(1===t.success){const e=t.data;this.stockists.unshift(e),this.sortedStockistList.unshift(e),this.highLightedRowIndex=0,this.stockistLimitForm.reset(),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Balance updated",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{})})}getBackgroundColor(t){if(t==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}clearMasterStockistForm(){this.stockistMasterForm.reset(),this.highLightedRowIndex=-1,this.isStockistUpdatAble=!1}sortData(t){const e=this.stockists.slice();this.sortedStockistList=t.active&&""!==t.direction?e.sort((e,i)=>{const o="asc"===t.direction;switch(t.active){case"userName":return C(e.userName,i.userName,o);case"pin":return C(e.pin,i.pin,o);case"balance":return C(e.balance,i.balance,o);default:return 0}}):e}rechargeToStockist(){u().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(t=>{t.isConfirmed&&this.masterStockistService.saveStockistBalance({beneficiaryUid:this.stockistLimitForm.value.beneficiaryUid,amount:this.stockistLimitForm.value.amount,rechargeDoneByUid:this.user.userId}).subscribe(t=>{if(1===t.success){const e=t.data,i=this.stockists.findIndex(t=>t.userId===e.userId);this.stockists[i].balance=e.balance,this.sortedStockistList[i].balance=e.balance,this.highLightedRowIndex=i,this.stockistLimitForm.patchValue({amount:""}),setTimeout(()=>{this.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},t=>{})})}}return t.\u0275fac=function(e){return new(e||t)(l.Y36(d.E),l.Y36(m.e))},t.\u0275cmp=l.Xpm({type:t,selectors:[["app-master-stockist"]],decls:79,vars:12,consts:[["label","Create stockist"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","userName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","5",1,"text-center"],["mat-sort-header","userName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Stockist limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],[3,"value",4,"ngFor","ngForOf"],["appearance","legacy",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],["matSuffix",""],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],[3,"value"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(t,e){1&t&&(l.TgZ(0,"mat-tab-group"),l.TgZ(1,"mat-tab",0),l.TgZ(2,"div",1),l.TgZ(3,"div",2),l.TgZ(4,"mat-card"),l.TgZ(5,"mat-card-header"),l._UZ(6,"div",3),l.TgZ(7,"mat-card-title"),l._uU(8,"New Stockist Form"),l.qZA(),l.qZA(),l.TgZ(9,"mat-card-content"),l.TgZ(10,"div",4),l.TgZ(11,"div",5),l.TgZ(12,"form",6),l.TgZ(13,"div",4),l.TgZ(14,"mat-form-field",5),l.TgZ(15,"mat-label"),l._uU(16,"Stockist Name"),l.qZA(),l._UZ(17,"input",7),l.YNc(18,L,3,2,"div",8),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(19,"div",4),l.TgZ(20,"button",9),l.NdJ("click",function(){return e.createNewStockist()}),l._uU(21,"Create"),l.qZA(),l.TgZ(22,"button",9),l.NdJ("click",function(){return e.upateStockist()}),l._uU(23,"Update"),l.qZA(),l.TgZ(24,"button",10),l.NdJ("click",function(){return e.clearMasterStockistForm()}),l._uU(25,"clear"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(26,"div",11),l.TgZ(27,"table",12),l.NdJ("matSortChange",function(t){return e.sortData(t)}),l.TgZ(28,"thead"),l.TgZ(29,"tr"),l.TgZ(30,"th",13),l._uU(31,"Stockist List"),l.qZA(),l.qZA(),l.TgZ(32,"tr"),l.TgZ(33,"th"),l._uU(34,"Id"),l.qZA(),l.TgZ(35,"th",14),l._uU(36,"Stockist name"),l.qZA(),l.TgZ(37,"th",15),l._uU(38,"Pin"),l.qZA(),l.TgZ(39,"th",16),l._uU(40,"Balance"),l.qZA(),l.TgZ(41,"th",17),l._uU(42,"Edit"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(43,"tbody"),l.YNc(44,U,11,5,"tr",18),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.TgZ(45,"mat-tab",19),l.TgZ(46,"div",1),l._UZ(47,"div",20),l.TgZ(48,"div",21),l.TgZ(49,"mat-card"),l.TgZ(50,"mat-card-header"),l._UZ(51,"div",3),l.TgZ(52,"mat-card-title"),l._uU(53,"Recharge Stockist"),l.qZA(),l.qZA(),l.TgZ(54,"mat-card-content"),l.TgZ(55,"div",4),l.TgZ(56,"div",22),l.TgZ(57,"form",6),l.TgZ(58,"div",4),l.TgZ(59,"mat-form-field",5),l.TgZ(60,"mat-label"),l._uU(61,"Stockist"),l.qZA(),l.TgZ(62,"mat-select",23),l.NdJ("selectionChange",function(t){return e.onStockistSelect(t)}),l.YNc(63,N,2,2,"mat-option",24),l.qZA(),l.qZA(),l.YNc(64,I,6,1,"mat-form-field",25),l.YNc(65,y,6,1,"mat-form-field",25),l.qZA(),l.TgZ(66,"div",4),l.TgZ(67,"mat-form-field",26),l.TgZ(68,"mat-label"),l._uU(69,"Recharge amount"),l.qZA(),l._UZ(70,"input",27),l.TgZ(71,"mat-icon",28),l._uU(72," money"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(73,"div",4),l.TgZ(74,"button",29),l.NdJ("click",function(){return e.rechargeToStockist()}),l._uU(75,"Save"),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l.qZA(),l._UZ(76,"div",20),l.qZA(),l.qZA(),l.qZA(),l.YNc(77,_,4,1,"div",30),l.YNc(78,F,11,9,"div",30)),2&t&&(l.xp6(12),l.Q6J("formGroup",e.stockistMasterForm),l.xp6(6),l.Q6J("ngIf",!e.stockistMasterForm.get("userName").valid&&e.stockistMasterForm.get("userName").touched),l.xp6(2),l.Q6J("disabled",!e.stockistMasterForm.valid||e.isStockistUpdatAble),l.xp6(2),l.Q6J("disabled",!e.isStockistUpdatAble),l.xp6(22),l.Q6J("ngForOf",e.sortedStockistList),l.xp6(13),l.Q6J("formGroup",e.stockistLimitForm),l.xp6(6),l.Q6J("ngForOf",e.sortedStockistList),l.xp6(1),l.Q6J("ngIf",e.selectedStockist),l.xp6(1),l.Q6J("ngIf",e.selectedStockist),l.xp6(9),l.Q6J("disabled",!e.stockistLimitForm.valid),l.xp6(3),l.Q6J("ngIf",!e.isProduction),l.xp6(1),l.Q6J("ngIf",!e.isProduction&&e.showDevArea))},directives:[g.SP,g.uX,h.a8,h.dk,h.kc,h.n5,h.dn,f.xw,f.Wh,f.SQ,f.yH,n._Y,n.JL,n.sg,Z.KE,Z.hX,p.Nt,n.Fj,n.JJ,n.u,o.O5,k.lW,A.YE,A.nU,o.sg,x.gD,q.Hw,Z.R9,Z.TO,o.PC,T.Zl,b.ey,S.Rr],pipes:[o.Ts],styles:["@-webkit-keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@keyframes blinkingText{0%{color:#ff3d50}to{color:#222291}}@-webkit-keyframes blinking{0%{background-color:#8be7e4}to{background-color:#03f9164d}}@keyframes blinking{0%{background-color:#8be7e4}to{background-color:#03f9164d}}"]}),t})(),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}];let B=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[s.Bz.forChild(J)],s.Bz]}),t})();var M=i(3615),Q=i(2015);let Y=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=l.oAB({type:t}),t.\u0275inj=l.cJS({imports:[[o.ez,B,g.Nh,M.q,Q.o9,h.QW,n.u5,n.UX,S.rP,A.JX,x.LD,q.Ps]]}),t})()},5550:function(t,e,i){i.d(e,{m:function(){return r}});var o=i(2741),s=i(1468);let r=(()=>{class t{constructor(t){this.authService=t}canActivate(t,e){return this.authService.isAdmin()}}return t.\u0275fac=function(e){return new(e||t)(o.LFG(s.e))},t.\u0275prov=o.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);