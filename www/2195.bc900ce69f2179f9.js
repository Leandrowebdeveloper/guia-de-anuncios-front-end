"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2195],{2195:(O,g,i)=>{i.r(g),i.d(g,{ChangeEmailPageModule:()=>M});var c=i(6895),u=i(433),o=i(9267),s=i(5203),h=i(7579),m=i(515),d=i(8505),p=i(262),n=i(4650),f=i(1228),v=i(7868),Z=i(8447);function E(e,a){if(1&e&&(n.TgZ(0,"div")(1,"ion-row",4)(2,"ion-col",5)(3,"ion-card")(4,"ion-card-header",6)(5,"ion-card-subtitle"),n._UZ(6,"ion-icon",7),n._uU(7," Altera\xe7\xe3o de email. "),n.qZA()(),n.TgZ(8,"ion-card-content",8)(9,"ion-text")(10,"p"),n._uU(11),n.qZA()(),n.TgZ(12,"ion-button",9),n._UZ(13,"ion-icon",10),n._uU(14," Painel de controle "),n.qZA()()()()()()),2&e){const t=a.$implicit;n.xp6(11),n.Oqu(null==t?null:t.message)}}function x(e,a){if(1&e&&(n.TgZ(0,"div")(1,"ion-card")(2,"ion-card-header",12)(3,"ion-card-subtitle"),n._UZ(4,"ion-icon",13),n._uU(5," Aten\xe7\xe3o ! "),n.qZA()(),n.TgZ(6,"ion-card-content",8)(7,"ion-text")(8,"p"),n._uU(9),n.qZA()(),n.TgZ(10,"ion-button",9),n._UZ(11,"ion-icon",14),n._uU(12," usu\xe1rio "),n.qZA()()()()),2&e){const t=n.oxw(2);n.xp6(9),n.Oqu(t.error)}}function C(e,a){1&e&&(n.TgZ(0,"ion-row")(1,"ion-col",5),n._UZ(2,"ion-skeleton-text",15),n.qZA(),n.TgZ(3,"ion-col",5),n._UZ(4,"ion-skeleton-text",16),n.qZA(),n.TgZ(5,"ion-col",17),n._UZ(6,"ion-skeleton-text",18),n.qZA()())}function P(e,a){if(1&e&&(n.TgZ(0,"ion-row")(1,"ion-col"),n.YNc(2,x,13,1,"div",2),n.ALo(3,"async"),n.YNc(4,C,7,0,"ng-template",null,11,n.W1O),n.qZA()()),2&e){const t=n.MAs(5),r=n.oxw();n.xp6(2),n.Q6J("ngIf",n.lcZ(3,2,r.error$))("ngIfElse",t)}}const A=[{path:"",component:(()=>{class e{constructor(t,r){this.authService=t,this.activatedRoute=r,this.error$=new h.x}ngOnInit(){this.getUser(),this.changeEmail(),this.getLocation(),this.filterUrl()}getLocation(){this.authService.getSlug&&(this.location=["/painel-de-controle","admin","usuario",this.authService.getSlug])}filterUrl(){"2"===this.authService.getLevel&&this.location.splice(1,1)}getUser(){this.user=this.activatedRoute.snapshot.data.changeEmail}changeEmail(){if(this.user){const{token:t,slug:r}=this.user;return this.user$=this.authService.emailIsValidToChange({token:t,slug:r}).pipe((0,d.b)(l=>this.success(l)),(0,p.K)(l=>this.setErrors(l)))}}success(t){this.authService.setEmail=t}setErrors(t){return this.error=t?.error,this.error$.next(!0),m.E}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(f.e),n.Y36(s.gz))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-change-email"]],decls:8,vars:5,consts:[[3,"fullscreen"],["fixed",""],[4,"ngIf","ngIfElse"],["loading",""],[1,"ion-justify-content-center"],["size","12"],["color","primary"],["name","thumbs-up"],[1,"ion-margin-top"],["expand","block","color","primary","routerLink","/painel-de-controle","routerDirection","back",1,"ion-margin-top"],["name","log-in",1,"ion-margin-end"],["loadingNoError",""],["color","warning"],["name","warning"],["name","person",1,"ion-margin-end"],["animated","",2,"width","100%","height","50px"],["animated","",2,"width","100%","height","13px","border-radius","20px"],["size","12",1,"ion-margin-top"],["animated","",2,"max-width","150px","height","33px","border-radius","4px","margin","auto"]],template:function(t,r){if(1&t&&(n._UZ(0,"app-header-component"),n.TgZ(1,"ion-content",0)(2,"ion-grid",1),n.YNc(3,E,15,1,"div",2),n.ALo(4,"async"),n.YNc(5,P,6,4,"ng-template",null,3,n.W1O),n.qZA()(),n._UZ(7,"app-footer")),2&t){const l=n.MAs(6);n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,3,r.user$))("ngIfElse",l)}},dependencies:[c.O5,o.YG,o.PM,o.FN,o.Zi,o.tO,o.wI,o.W2,o.jY,o.gu,o.Nd,o.CK,o.yW,o.YI,s.rH,v.G,Z.S,c.Ov],styles:["ion-card-subtitle[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:100%}ion-card-subtitle[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:10px;font-size:160%}"]}),e})()}];let U=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[s.Bz.forChild(A),s.Bz]}),e})();var T=i(677),y=i(6444);let M=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[c.ez,u.u5,o.Pc,U,T.O,y._]}),e})()}}]);