"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6064],{6064:(S,u,e)=>{e.r(u),e.d(u,{ActivateAccountPageModule:()=>I});var s=e(6895),g=e(433),i=e(9267),r=e(5203),l=e(1069),A=e(7579),p=e(515),f=e(262),t=e(4650),m=e(3755),h=e(529),Z=e(6578);let v=(()=>{class n extends m.O{constructor(o,a){super(o,a),this.http=o,this.storageService=a,this.setApi="activate-account"}sendActivationToken(o){return this.find(o)}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(h.eN),t.LFG(Z.V))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();var x=e(7868),y=e(8447);function P(n,c){if(1&n&&(t.TgZ(0,"div")(1,"ion-row",4)(2,"ion-col",5)(3,"ion-card")(4,"ion-card-header",6)(5,"ion-card-subtitle"),t._UZ(6,"ion-icon",7),t._uU(7," Verific\xe3o de contas dos usu\xe1rios! "),t.qZA()(),t.TgZ(8,"ion-card-content",8)(9,"ion-text")(10,"p"),t._uU(11),t.qZA()(),t.TgZ(12,"ion-button",9),t._UZ(13,"ion-icon",10),t._uU(14," login "),t.qZA()()()()()()),2&n){const o=c.$implicit;t.xp6(11),t.Oqu(null==o?null:o.message)}}function T(n,c){if(1&n&&(t.TgZ(0,"div")(1,"ion-card")(2,"ion-card-header",6)(3,"ion-card-subtitle"),t._UZ(4,"ion-icon",12),t._uU(5," Verific\xe3o de contas dos usu\xe1rios "),t.qZA()(),t.TgZ(6,"ion-card-content",8)(7,"ion-text")(8,"p"),t._uU(9),t.qZA()(),t.TgZ(10,"ion-button",9),t._UZ(11,"ion-icon",10),t._uU(12," login "),t.qZA()()()()),2&n){const o=t.oxw(2);t.xp6(9),t.Oqu(o.error)}}function U(n,c){1&n&&(t.TgZ(0,"ion-row")(1,"ion-col",5),t._UZ(2,"ion-skeleton-text",13),t.qZA(),t.TgZ(3,"ion-col",5),t._UZ(4,"ion-skeleton-text",14),t.qZA(),t.TgZ(5,"ion-col",15),t._UZ(6,"ion-skeleton-text",16),t.qZA()())}function C(n,c){if(1&n&&(t.TgZ(0,"ion-row")(1,"ion-col"),t.YNc(2,T,13,1,"div",2),t.ALo(3,"async"),t.YNc(4,U,7,0,"ng-template",null,11,t.W1O),t.qZA()()),2&n){const o=t.MAs(5),a=t.oxw();t.xp6(2),t.Q6J("ngIf",t.lcZ(3,2,a.error$))("ngIfElse",o)}}let M=(()=>{class n{constructor(o,a){this.activateCountService=o,this.activatedRoute=a,this.error$=new A.x}get key(){return this.activatedRoute.snapshot.data.activateAccount}ngOnInit(){this.thereIsKeyForActivateCount()}thereIsKeyForActivateCount(){return this.activateCount$=this.activateCountService.sendActivationToken(this.key).pipe((0,f.K)(o=>this.setErrors(o)))}setErrors(o){return this.error=o?.error,this.error$.next(!0),p.E}}return n.\u0275fac=function(o){return new(o||n)(t.Y36(v),t.Y36(r.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-activate-account"]],decls:8,vars:5,consts:[[3,"fullscreen"],["fixed",""],[4,"ngIf","ngIfElse"],["loading",""],[1,"ion-justify-content-center"],["size","12"],["color","primary"],["name","thumbs-up"],[1,"ion-margin-top"],["expand","block","color","primary","routerLink","/entrar","routerDirection","forward",1,"ion-margin-top"],["name","log-in",1,"ion-margin-end"],["loadingNoError",""],["name","thumbs-down"],["animated","",2,"width","100%","height","50px"],["animated","",2,"width","100%","height","13px","border-radius","20px"],["size","12",1,"ion-margin-top"],["animated","",2,"max-width","150px","height","33px","border-radius","4px","margin","auto"]],template:function(o,a){if(1&o&&(t._UZ(0,"app-header-component"),t.TgZ(1,"ion-content",0)(2,"ion-grid",1),t.YNc(3,P,15,1,"div",2),t.ALo(4,"async"),t.YNc(5,C,6,4,"ng-template",null,3,t.W1O),t.qZA()(),t._UZ(7,"app-footer")),2&o){const Y=t.MAs(6);t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(2),t.Q6J("ngIf",t.lcZ(4,3,a.activateCount$))("ngIfElse",Y)}},dependencies:[s.O5,i.YG,i.PM,i.FN,i.Zi,i.tO,i.wI,i.W2,i.jY,i.gu,i.Nd,i.CK,i.yW,i.YI,r.rH,x.G,y.S,s.Ov],styles:["ion-card-subtitle[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:100%}ion-card-subtitle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px;font-size:160%}"]}),n})(),d=(()=>{class n{constructor(o){this.router=o}resolve(o){const{token:a}=o.params;return a&&"string"==typeof a?a:this.router.parseUrl("/")}}return n.\u0275fac=function(o){return new(o||n)(t.LFG(r.F0))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const O=[{path:"",component:M,canActivate:[l.$],canLoad:[l.$],resolve:{activateAccount:d}}];let E=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[d],imports:[r.Bz.forChild(O),r.Bz]}),n})();var F=e(677),z=e(6444);let I=(()=>{class n{}return n.\u0275fac=function(o){return new(o||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[v],imports:[s.ez,g.u5,i.Pc,E,F.O,z._]}),n})()}}]);