!function(){"use strict";function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function t(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkaccounts=self.webpackChunkaccounts||[]).push([[582],{5480:function(e,t,n){n.d(t,{q:function(){return m}});var r,a=n(1095),o=n(9983),l=n(7716),m=((r=function e(){i(this,e)}).\u0275fac=function(e){return new(e||r)},r.\u0275mod=l.oAB({type:r}),r.\u0275inj=l.cJS({imports:[a.ot,o.c]}),r)},4582:function(e,n,r){r.r(n),r.d(n,{MasterTerminalModule:function(){return z}});var a=r(8583),o=r(3423),l=r(1068),m=r(2340),c=r(3679),s=r(8259),u=r.n(s),d=r(7716),f=r(2088),g=r(7276),Z=r(3535),h=r(5939),T=r(3738),p=r(5618),v=r(8295),x=r(9983),A=r(7441),q=r(1095),b=r(1494),k=r(2458),w=r(8030),I=r(6627),N=r(5396);function U(e,t){1&e&&(d.TgZ(0,"mat-error"),d._uU(1,"This field is Required"),d.qZA())}function y(e,t){if(1&e&&(d.TgZ(0,"mat-error"),d._uU(1),d.qZA()),2&e){var i=d.oxw(2);d.xp6(1),d.hij("Minimum length of name is ",i.terminalMasterForm.get("terminalName").errors.minlength.requiredLength,"")}}function L(e,t){if(1&e&&(d.TgZ(0,"div",31),d.YNc(1,U,2,0,"mat-error",32),d.YNc(2,y,2,1,"mat-error",32),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.required),d.xp6(1),d.Q6J("ngIf",i.terminalMasterForm.get("terminalName").errors.minlength)}}function _(e,t){if(1&e&&(d.TgZ(0,"mat-option",33),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.Q6J("value",i.userId),d.xp6(1),d.hij(" ",i.userName," ")}}function F(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"tr",34),d.TgZ(1,"td"),d._uU(2),d.qZA(),d.TgZ(3,"td"),d._uU(4),d.qZA(),d.TgZ(5,"td"),d._uU(6),d.qZA(),d.TgZ(7,"td"),d._uU(8),d.qZA(),d.TgZ(9,"td"),d._uU(10),d.qZA(),d.TgZ(11,"td"),d.TgZ(12,"i",35),d.NdJ("click",function(){var e=d.CHM(i).$implicit;return d.oxw().editTerminal(e)}),d.qZA(),d.qZA(),d.qZA()}if(2&e){var n=t.$implicit,r=t.index,a=d.oxw();d.Q6J("ngStyle",a.getBackgroundColor(r)),d.xp6(2),d.Oqu(r+1),d.xp6(2),d.Oqu(n.terminalName),d.xp6(2),d.Oqu(n.pin),d.xp6(2),d.Oqu(n.balance),d.xp6(2),d.Oqu(n.stockist.userName)}}function C(e,t){if(1&e&&(d.TgZ(0,"mat-option",33),d._uU(1),d.qZA()),2&e){var i=t.$implicit;d.Q6J("value",i.terminalId),d.xp6(1),d.hij(" ",i.pin," ")}}function J(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",36),d.TgZ(1,"mat-label"),d._uU(2,"Name"),d.qZA(),d._UZ(3,"input",37),d.TgZ(4,"mat-icon",38),d._uU(5,"person_pin"),d.qZA(),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("value",i.selectedTerminal.terminalName)}}function S(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",36),d.TgZ(1,"mat-label"),d._uU(2,"Current balance"),d.qZA(),d._UZ(3,"input",39),d.TgZ(4,"mat-icon",38),d._uU(5,"account_balance_wallet"),d.qZA(),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.Q6J("value",i.selectedTerminal.balance)}}function Q(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",36),d.TgZ(1,"mat-label"),d._uU(2,"Stockist owner"),d.qZA(),d._UZ(3,"input",37),d.TgZ(4,"mat-icon",38),d._uU(5,"person_pin"),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(3),d.Q6J("value",i.selectedTerminal.stockist.userName)}}function B(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",36),d.TgZ(1,"mat-label"),d._uU(2,"Stockist balance"),d.qZA(),d._UZ(3,"input",39),d.TgZ(4,"mat-icon",38),d._uU(5,"account_balance_wallet"),d.qZA(),d.qZA()),2&e){var i=d.oxw(2);d.xp6(3),d.Q6J("value",i.selectedTerminal.stockist.balance)}}function M(e,t){if(1&e&&(d.TgZ(0,"div",4),d.YNc(1,Q,6,1,"mat-form-field",27),d.YNc(2,B,6,1,"mat-form-field",27),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.selectedTerminal),d.xp6(1),d.Q6J("ngIf",i.selectedTerminal)}}function Y(e,t){if(1&e&&(d.TgZ(0,"mat-error"),d._uU(1),d.qZA()),2&e){var i=d.oxw(3);d.xp6(1),d.hij(" Amount should not exceed ",i.terminalLimitForm.controls.amount.errors.max.max," ")}}function D(e,t){if(1&e&&(d.TgZ(0,"mat-form-field",41),d.TgZ(1,"mat-label"),d._uU(2,"Recharge amount"),d.qZA(),d._UZ(3,"input",42),d.TgZ(4,"mat-icon",38),d._uU(5," money"),d.qZA(),d.YNc(6,Y,2,1,"mat-error",32),d.qZA()),2&e){var i=d.oxw(2);d.xp6(6),d.Q6J("ngIf",i.terminalLimitForm.get("amount").hasError("max"))}}function R(e,t){if(1&e&&(d.TgZ(0,"div",4),d.YNc(1,D,7,1,"mat-form-field",40),d.qZA()),2&e){var i=d.oxw();d.xp6(1),d.Q6J("ngIf",i.selectedTerminal)}}function O(e,t){if(1&e){var i=d.EpF();d.TgZ(0,"div",43),d.TgZ(1,"div",44),d.TgZ(2,"mat-slide-toggle",45),d.NdJ("change",function(){d.CHM(i);var e=d.oxw();return e.showDevArea=!e.showDevArea}),d._uU(3),d.qZA(),d.qZA(),d.qZA()}if(2&e){var n=d.oxw();d.xp6(3),d.Oqu(n.showDevArea?"Hide Developer Area":"Show Developer Area")}}function j(e,t){if(1&e&&(d.TgZ(0,"div",43),d.TgZ(1,"div",46),d.TgZ(2,"pre"),d._uU(3),d._uU(4),d.ALo(5,"json"),d._uU(6,"\n      "),d.qZA(),d.qZA(),d._UZ(7,"div",44),d.qZA()),2&e){var i=d.oxw();d.xp6(3),d.hij("        ",i.terminalLimitForm.valid,"\n        "),d.xp6(1),d.hij("\n        terminalForm = ",d.lcZ(5,2,i.terminalMasterForm.value),"\n")}}function G(e,t,i){return(e<t?-1:1)*(i?1:-1)}var E,P=[{path:"",canActivate:[l.m],component:(E=function(){function e(t,n,r){i(this,e),this.masterTerminalService=t,this.masterStockistService=n,this.authService=r,this.isProduction=m.N.production,this.showDevArea=!1,this.isTerminalUpdatAble=!1,this.terminals=[],this.sortedTerminalList=[],this.stockists=[],this.selectedTerminal=null,this.highLightedRowIndex=-1,this.terminalMasterForm=new c.cw({id:new c.NI(null),terminalName:new c.NI(null,[c.kI.required,c.kI.minLength(2)]),stockistId:new c.NI(null,[c.kI.required])}),this.terminalLimitForm=new c.cw({beneficiaryUid:new c.NI(null,[c.kI.required]),amount:new c.NI(null,[c.kI.required,c.kI.max(0)])})}return t(e,[{key:"ngOnInit",value:function(){var e=this;this.user=this.authService.userBehaviorSubject.value,this.terminals=this.masterTerminalService.getTerminals(),this.sortedTerminalList=this.masterTerminalService.getTerminals(),this.masterTerminalService.getTerminalListener().subscribe(function(t){e.terminals=t,e.sortedTerminalList=t}),this.stockists=this.masterStockistService.getStockists(),this.masterStockistService.getStockistListener().subscribe(function(t){e.stockists=t})}},{key:"onTerminalSelect",value:function(e){this.selectedTerminal=this.terminals.find(function(t){return t.terminalId===e.value}),this.terminalLimitForm.controls.amount.setValidators([c.kI.max(this.selectedTerminal.stockist.balance)])}},{key:"editTerminal",value:function(e){var t=this.terminals.findIndex(function(t){return t.terminalId===e.terminalId});this.highLightedRowIndex=t,this.terminalMasterForm.patchValue({id:e.terminalId,terminalName:e.terminalName,stockistId:e.stockist.userId}),this.isTerminalUpdatAble=!0}},{key:"updateTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to update terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, update It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.updateTerminal({terminalId:e.terminalMasterForm.value.id,terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId}).subscribe(function(t){1===t.success?(e.sortedTerminalList[e.highLightedRowIndex]=t.data,e.terminalMasterForm.reset(),e.isTerminalUpdatAble=!1,setTimeout(function(){e.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"createNewTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to create terminal?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, create It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveNewTerminal({terminalName:e.terminalMasterForm.value.terminalName,stockistId:e.terminalMasterForm.value.stockistId}).subscribe(function(t){1===t.success?(e.sortedTerminalList.unshift(t.data),e.highLightedRowIndex=0,e.terminalMasterForm.reset(),setTimeout(function(){e.highLightedRowIndex=-1},5e3),u().fire({position:"top-end",icon:"success",title:"Terminal created",showConfirmButton:!1,timer:1e3})):u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}},{key:"getBackgroundColor",value:function(e){if(e==this.highLightedRowIndex)return{"background-color":"rgb(103 245 166 / 60%)",animation:"blinking 1s infinite"}}},{key:"clearMasterTerminalForm",value:function(){this.terminalMasterForm.reset(),this.highLightedRowIndex=-1,this.isTerminalUpdatAble=!1}},{key:"sortData",value:function(e){var t=this.terminals.slice();this.sortedTerminalList=e.active&&""!==e.direction?t.sort(function(t,i){var n="asc"===e.direction;switch(e.active){case"terminalName":return G(t.terminalName,i.terminalName,n);case"stockistName":return G(t.stockist.userName,i.stockist.userName,n);case"balance":return G(t.balance,i.balance,n);default:return 0}}):t}},{key:"rechargeToTerminal",value:function(){var e=this;u().fire({title:"Confirmation",text:"Do you sure to recharge?",icon:"info",showCancelButton:!0,confirmButtonColor:"#3085d6",cancelButtonColor:"#d33",confirmButtonText:"Yes, recharge It!"}).then(function(t){t.isConfirmed&&e.masterTerminalService.saveTerminalBalance({beneficiaryUid:e.terminalLimitForm.value.beneficiaryUid,stockistId:e.selectedTerminal.stockist.userId,amount:e.terminalLimitForm.value.amount,rechargeDoneByUid:e.user.userId}).subscribe(function(t){if(1===t.success){var i=t.data,n=e.terminals.findIndex(function(e){return e.terminalId===i.terminalId});e.terminals[n].balance=i.balance,e.terminals[n].stockist.balance=i.stockist.balance,e.sortedTerminalList[n].balance=i.balance,e.sortedTerminalList[n].stockist.balance=i.stockist.balance,e.highLightedRowIndex=n,e.terminalLimitForm.controls.amount.setValidators([c.kI.max(i.stockist.balance)]),e.terminalLimitForm.patchValue({amount:""}),setTimeout(function(){e.highLightedRowIndex=-1},1e4),u().fire({position:"top-end",icon:"success",title:"Recharge done",showConfirmButton:!1,timer:1e3})}else u().fire({position:"top-end",icon:"error",title:"Validation error",showConfirmButton:!1,timer:3e3})},function(e){})})}}]),e}(),E.\u0275fac=function(e){return new(e||E)(d.Y36(f.S),d.Y36(g.E),d.Y36(Z.e))},E.\u0275cmp=d.Xpm({type:E,selectors:[["app-master-terminal"]],decls:82,vars:15,consts:[["label","Create terminal"],[1,"d-flex","flex-row","mt-2"],[1,"col-4"],["mat-card-avatar","",1,"example-header-image"],["fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],["fxFlex","100"],[3,"formGroup"],["type","text","matInput","","formControlName","terminalName","placeholder","Enter name"],["class","container","fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["formControlName","stockistId"],[3,"value",4,"ngFor","ngForOf"],["mat-raised-button","","color","primary","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"click"],[1,"col-8",2,"background-color","#6c757d5e"],["matSort","",1,"table","table-bordered","table-sm",2,"border","none !important",3,"matSortChange"],["scope","colgroup","colspan","4",1,"text-center"],["mat-sort-header","terminalName"],["mat-sort-header","pin"],["mat-sort-header","balance"],["mat-sort-header","stockistName"],["mat-sort-header","edit"],[3,"ngStyle",4,"ngFor","ngForOf"],["label","Terminal limit"],[1,"col-2"],[1,"col-8"],["fxFlex","25"],["formControlName","beneficiaryUid",3,"selectionChange"],["appearance","legacy",4,"ngIf"],["class","container","fxLayout","row","fxLayout.xs","column","fxLayoutAlign","start","fxLayoutGap","10px","fxLayoutGap.xs","0",4,"ngIf"],["mat-raised-button","","color","warn","mat-stroked-button","",1,"pull-right",3,"disabled","click"],["class","d-flex",4,"ngIf"],["fxLayout","","fxLayout.xs","column","fxLayoutAlign","end","fxLayoutGap","10px","fxLayoutGap.xs","0",1,"container"],[4,"ngIf"],[3,"value"],[3,"ngStyle"],[1,"bi","bi-pencil-square",3,"click"],["appearance","legacy"],["type","text","matInput","","readonly","","placeholder","Stockist",3,"value"],["matSuffix",""],["type","text","readonly","","matInput","","placeholder","Current balance",3,"value"],["class","d-flex","fxFlex","100",4,"ngIf"],["fxFlex","100",1,"d-flex"],["type","text","matInput","","formControlName","amount","placeholder","Enter amount"],[1,"d-flex"],[1,"col-3"],[3,"change"],[1,"col-6"]],template:function(e,t){1&e&&(d.TgZ(0,"mat-tab-group"),d.TgZ(1,"mat-tab",0),d.TgZ(2,"div",1),d.TgZ(3,"div",2),d.TgZ(4,"mat-card"),d.TgZ(5,"mat-card-header"),d._UZ(6,"div",3),d.TgZ(7,"mat-card-title"),d._uU(8,"New Terminal Form"),d.qZA(),d.qZA(),d.TgZ(9,"mat-card-content"),d.TgZ(10,"div",4),d.TgZ(11,"div",5),d.TgZ(12,"form",6),d.TgZ(13,"div",4),d.TgZ(14,"mat-form-field",5),d.TgZ(15,"mat-label"),d._uU(16,"Terminal Name"),d.qZA(),d._UZ(17,"input",7),d.YNc(18,L,3,2,"div",8),d.qZA(),d.qZA(),d.TgZ(19,"div",4),d.TgZ(20,"mat-form-field",5),d.TgZ(21,"mat-label"),d._uU(22,"Stockist"),d.qZA(),d.TgZ(23,"mat-select",9),d.YNc(24,_,2,2,"mat-option",10),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(25,"div",4),d.TgZ(26,"button",11),d.NdJ("click",function(){return t.createNewTerminal()}),d._uU(27,"Create"),d.qZA(),d.TgZ(28,"button",11),d.NdJ("click",function(){return t.updateTerminal()}),d._uU(29,"Update"),d.qZA(),d.TgZ(30,"button",12),d.NdJ("click",function(){return t.clearMasterTerminalForm()}),d._uU(31,"clear"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(32,"div",13),d.TgZ(33,"table",14),d.NdJ("matSortChange",function(e){return t.sortData(e)}),d.TgZ(34,"thead"),d.TgZ(35,"tr"),d.TgZ(36,"th",15),d._uU(37,"Terminal List"),d.qZA(),d.qZA(),d.TgZ(38,"tr"),d.TgZ(39,"th"),d._uU(40,"Id"),d.qZA(),d.TgZ(41,"th",16),d._uU(42,"Terminal name"),d.qZA(),d.TgZ(43,"th",17),d._uU(44,"Pin"),d.qZA(),d.TgZ(45,"th",18),d._uU(46,"Balance"),d.qZA(),d.TgZ(47,"th",19),d._uU(48,"Stockist"),d.qZA(),d.TgZ(49,"th",20),d._uU(50,"Edit"),d.qZA(),d.qZA(),d.qZA(),d.TgZ(51,"tbody"),d.YNc(52,F,13,6,"tr",21),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.TgZ(53,"mat-tab",22),d.TgZ(54,"div",1),d._UZ(55,"div",23),d.TgZ(56,"div",24),d.TgZ(57,"mat-card"),d.TgZ(58,"mat-card-header"),d._UZ(59,"div",3),d.TgZ(60,"mat-card-title"),d._uU(61,"Recharge Terminal"),d.qZA(),d.qZA(),d.TgZ(62,"mat-card-content"),d.TgZ(63,"div",4),d.TgZ(64,"div",5),d.TgZ(65,"form",6),d.TgZ(66,"div",4),d.TgZ(67,"mat-form-field",25),d.TgZ(68,"mat-label"),d._uU(69,"Terminal"),d.qZA(),d.TgZ(70,"mat-select",26),d.NdJ("selectionChange",function(e){return t.onTerminalSelect(e)}),d.YNc(71,C,2,2,"mat-option",10),d.qZA(),d.qZA(),d.YNc(72,J,6,1,"mat-form-field",27),d.YNc(73,S,6,1,"mat-form-field",27),d.qZA(),d.YNc(74,M,3,2,"div",28),d.YNc(75,R,2,1,"div",28),d.TgZ(76,"div",4),d.TgZ(77,"button",29),d.NdJ("click",function(){return t.rechargeToTerminal()}),d._uU(78,"Save"),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d.qZA(),d._UZ(79,"div",23),d.qZA(),d.qZA(),d.qZA(),d.YNc(80,O,4,1,"div",30),d.YNc(81,j,8,4,"div",30)),2&e&&(d.xp6(12),d.Q6J("formGroup",t.terminalMasterForm),d.xp6(6),d.Q6J("ngIf",!t.terminalMasterForm.get("terminalName").valid&&t.terminalMasterForm.get("terminalName").touched),d.xp6(6),d.Q6J("ngForOf",t.stockists),d.xp6(2),d.Q6J("disabled",!t.terminalMasterForm.valid||t.isTerminalUpdatAble),d.xp6(2),d.Q6J("disabled",!t.isTerminalUpdatAble),d.xp6(24),d.Q6J("ngForOf",t.sortedTerminalList),d.xp6(13),d.Q6J("formGroup",t.terminalLimitForm),d.xp6(6),d.Q6J("ngForOf",t.sortedTerminalList),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(1),d.Q6J("ngIf",t.selectedTerminal),d.xp6(2),d.Q6J("disabled",!t.terminalLimitForm.valid),d.xp6(3),d.Q6J("ngIf",!t.isProduction),d.xp6(1),d.Q6J("ngIf",!t.isProduction&&t.showDevArea))},directives:[h.SP,h.uX,T.a8,T.dk,T.kc,T.n5,T.dn,p.xw,p.Wh,p.SQ,p.yH,c._Y,c.JL,c.sg,v.KE,v.hX,x.Nt,c.Fj,c.JJ,c.u,a.O5,A.gD,a.sg,q.lW,b.YE,b.nU,v.TO,k.ey,a.PC,w.Zl,I.Hw,v.R9,N.Rr],pipes:[a.Ts],styles:[""]}),E),data:{title:"About",description:"Description Meta Tag Content",ogUrl:"your og url"}}],V=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[o.Bz.forChild(P)],o.Bz]}),e}(),H=r(5480),X=r(5566),z=function(){var e=function e(){i(this,e)};return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=d.oAB({type:e}),e.\u0275inj=d.cJS({imports:[[a.ez,V,h.Nh,H.q,X.o9,T.QW,c.u5,c.UX,N.rP,b.JX,A.LD,I.Ps]]}),e}()},1068:function(e,n,r){r.d(n,{m:function(){return m}});var a,o=r(7716),l=r(3535),m=((a=function(){function e(t){i(this,e),this.authService=t}return t(e,[{key:"canActivate",value:function(e,t){return this.authService.isAdmin()}}]),e}()).\u0275fac=function(e){return new(e||a)(o.LFG(l.e))},a.\u0275prov=o.Yz7({token:a,factory:a.\u0275fac,providedIn:"root"}),a)}}])}();