"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7143],{6444:(O,f,n)=>{n.d(f,{_:()=>_});var u=n(6895),m=n(9267),e=n(5203),c=n(3493),t=n(4650);let _=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,m.Pc,e.Bz,c.d]}),i})()},8447:(O,f,n)=>{n.d(f,{S:()=>I});var u=n(9267),m=n(7423);const e=(0,m.fo)("Keyboard");var c=n(5203),t=n(4650),_=n(1228),i=n(6895),o=n(6941),r=n(2089),s=n(8788);const p=function(){return["/painel-de-controle","anuncio"]};function h(E,T){1&E&&(t.ynx(0),t.TgZ(1,"ion-segment-button",9),t._UZ(2,"ion-icon",10),t.TgZ(3,"ion-label"),t._uU(4,"An\xfancio"),t.qZA()(),t.BQk()),2&E&&(t.xp6(1),t.Q6J("routerLink",t.DdM(1,p)))}function a(E,T){if(1&E&&(t.ynx(0),t.TgZ(1,"ion-segment-button",11),t.ALo(2,"isUserLevel"),t.TgZ(3,"div")(4,"ion-avatar",12),t._UZ(5,"ion-img",13),t.ALo(6,"userValuesImgAvatar"),t.ALo(7,"userValues"),t.qZA(),t.TgZ(8,"ion-label"),t._uU(9,"Usu\xe1rio"),t.qZA()()(),t.BQk()),2&E){const b=t.oxw().$implicit;t.xp6(1),t.Q6J("routerLink",t.xi3(2,3,b,"1")?"/painel-de-controle/admin/usuario":"/painel-de-controle/usuario"),t.xp6(4),t.Q6J("src",t.lcZ(6,6,b))("title",t.Dn7(7,8,b,"name","Usu\xe1rio"))}}function d(E,T){1&E&&(t.TgZ(0,"ion-segment-button",15),t._UZ(1,"ion-icon",16),t.TgZ(2,"ion-label"),t._uU(3,"Cadastrar"),t.qZA()())}function v(E,T){if(1&E&&(t.ynx(0),t.YNc(1,d,4,0,"ion-segment-button",14),t.ALo(2,"userValues"),t.BQk()),2&E){const b=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",!t.xi3(2,1,b,"auth"))}}function D(E,T){1&E&&(t.TgZ(0,"ion-segment-button",18),t._UZ(1,"ion-icon",19),t.TgZ(2,"ion-label"),t._uU(3,"Entrar"),t.qZA()())}function L(E,T){if(1&E&&(t.ynx(0),t.YNc(1,D,4,0,"ion-segment-button",17),t.ALo(2,"userValues"),t.BQk()),2&E){const b=t.oxw().$implicit;t.xp6(1),t.Q6J("ngIf",!t.xi3(2,1,b,"auth"))}}const U=function(){return["/inicio"]},x=function(){return["/categoria","classificados"]};function B(E,T){if(1&E&&(t.TgZ(0,"ion-toolbar",2)(1,"ion-segment",3)(2,"ion-segment-button",4),t._UZ(3,"ion-icon",5),t.TgZ(4,"ion-label"),t._uU(5,"In\xedcio"),t.qZA()(),t.TgZ(6,"ion-segment-button",6),t._UZ(7,"ion-icon",7),t.TgZ(8,"ion-label"),t._uU(9,"Classificados"),t.qZA()(),t.YNc(10,h,5,2,"ng-container",8),t.ALo(11,"userValues"),t.YNc(12,a,10,12,"ng-container",8),t.ALo(13,"userValues"),t.YNc(14,v,3,4,"ng-container",8),t.ALo(15,"userValues"),t.YNc(16,L,3,4,"ng-container",8),t.ALo(17,"userValues"),t.qZA()()),2&E){const b=T.$implicit;t.xp6(2),t.Q6J("routerLink",t.DdM(18,U)),t.xp6(4),t.Q6J("routerLink",t.DdM(19,x)),t.xp6(4),t.Q6J("ngIf",t.xi3(11,6,b,"auth")),t.xp6(2),t.Q6J("ngIf",t.xi3(13,9,b,"auth")),t.xp6(2),t.Q6J("ngIf",!t.xi3(15,12,b,"auth")),t.xp6(2),t.Q6J("ngIf",!t.xi3(17,15,b,"auth"))}}const y=function(E){return{"ion-hide":E}};let I=(()=>{class E{constructor(b,C,Z){this.authService=b,this.navCtrl=C,this.router=Z}ngOnDestroy(){this.$router.unsubscribe()}ngOnInit(){this.toggleFooter(),this.getUser(),this.initSegment()}initSegment(){this.$router=this.router.events.subscribe(b=>{this.setSegment(b)})}setSegment(b){if(b instanceof c.m2)switch(b.url){case"/entrar":this.segment.value="entrar";break;case"/cadastrar":this.segment.value="cadastrar";break;case"/inicio":this.segment.value="inicio";break;case"/categoria/classificados":this.segment.value="classificados";break;case"/painel-de-controle/admin/usuario":this.segment.value="usuario";break;case"/painel-de-controle/anuncio":this.segment.value="anuncio"}}toggleFooter(){m.dV.isPluginAvailable("Keyboard")&&(e.addListener("keyboardDidShow",b=>{this.isFooter=!0}),e.addListener("keyboardDidHide",()=>{this.isFooter=!1}))}routerLink(b,C){return b.preventDefault(),this.navCtrl.navigateForward(C)}getUser(){this.user$=this.authService.userObservable}}return E.\u0275fac=function(b){return new(b||E)(t.Y36(_.e),t.Y36(u.SH),t.Y36(c.F0))},E.\u0275cmp=t.Xpm({type:E,selectors:[["app-footer"]],viewQuery:function(b,C){if(1&b&&t.Gf(u.cJ,5),2&b){let Z;t.iGM(Z=t.CRH())&&(C.segment=Z.first)}},decls:3,vars:6,consts:[[3,"ngClass"],["color","primary",4,"ngIf"],["color","primary"],["mode","md"],["title","Pag\xedna inic\xedal.","data-label","In\xedcio","value","inicio",3,"routerLink"],["color","light","name","home"],["value","classificados",3,"routerLink"],["color","light","title","Classificados.","aria-labelledby","classificado-label","src","./../../assets/ion-icon/classificad.svg","alt","Classificados"],[4,"ngIf"],["title","Gerenciamento de an\xfancio","data-label","Gerenciamento de an\xfancio","value","anuncio",3,"routerLink"],["color","light","name","megaphone"],["value","usuario",3,"routerLink"],["title","Im\xe1gem do usu\xe1rio.",1,"cursor-pointer"],["referrerpolicy","no-referrer","alt","user | userValues:'name':'Usu\xe1rio'",3,"src","title"],["routerLink","/cadastrar","routerLinkActive","router-link-active","title","Cadastrar de usu\xe1rios.","value","cadastrar",4,"ngIf"],["routerLink","/cadastrar","routerLinkActive","router-link-active","title","Cadastrar de usu\xe1rios.","value","cadastrar"],["color","light","name","create"],["routerLink","/entrar","title","Acesso ao sistema.","value","entrar",4,"ngIf"],["routerLink","/entrar","title","Acesso ao sistema.","value","entrar"],["color","light","name","log-in"]],template:function(b,C){1&b&&(t.TgZ(0,"ion-footer",0),t.YNc(1,B,18,20,"ion-toolbar",1),t.ALo(2,"async"),t.qZA()),2&b&&(t.Q6J("ngClass",t.VKq(4,y,C.isFooter)),t.xp6(1),t.Q6J("ngIf",t.lcZ(2,2,C.user$)))},dependencies:[i.mk,i.O5,u.BJ,u.fr,u.gu,u.Xz,u.Q$,u.cJ,u.GO,u.sr,u.QI,u.YI,c.rH,c.Od,i.Ov,o.d,r.g,s.n],styles:["ion-avatar[_ngcontent-%COMP%]{width:26px;height:26px;margin:0 auto}ion-label[_ngcontent-%COMP%]{margin-bottom:0}@media only screen and (max-width: 600px){ion-label[_ngcontent-%COMP%]{font-size:x-small;margin-bottom:0}}"]}),E})()},1247:(O,f,n)=>{n.d(f,{d:()=>t});var u=n(4650),m=n(5203),e=n(1135),c=n(9300);let t=(()=>{class _{constructor(o){this.router=o,this.breadcrumbEvent=new u.vpe(void 0),this.breadcrumb=new e.X([]),this.breadcrumb$=this.breadcrumb.asObservable(),this.init()}get breadcrumbs$(){return this.breadcrumb$}ngOnDestroy(){this.$router.unsubscribe()}getEvent(){return this.breadcrumbEvent.asObservable()}setEvent(o){this.breadcrumbEvent.emit(o)}update(o){return this.createBreadcrumbs(o)}convertUrlToArray(o){const r=this.urlSize(o);return o.split(/[\/]/g).splice(1,r)}urlSize(o){return o.length-1}breadcrumbs(o){this.breadcrumb.next(o)}convertUrlSlugToPhrase(o){const r=this.convertUrlToArray(o).map(s=>s.replace(/[-]/g," "));if(r)return this.convertSlugEndTitle(r)}init(){this.$router=this.router.events.pipe((0,c.h)(o=>o instanceof m.m2)).subscribe({next:o=>this.start(o)})}start(o){o instanceof m.m2&&this.createBreadcrumbs(o.url)}convertSlugEndTitle(o){const r=o.map(this.filterSlug()).filter(s=>void 0!==s);if(r)return this.title(r)}title(o){return o&&o.length>0&&o.includes("")&&o.pop(),o}filterSlug(){return(o,r)=>{if(o&&r&&r>-1&&/[0-9]/g.test(o)){const s=o.split(" ").pop();s&&(o=o.replace(s,"").trim())}return o}}createBreadcrumbs(o){var r;const s=[];null===(r=this.convertUrlSlugToPhrase(o))||void 0===r||r.forEach((p,h,a)=>{p&&s.push({label:this.filterLabel(p),link:this.buildLink(o,h,a)})}),s.splice(3,1),this.breadcrumbs(s)}filterLabel(o){switch(o){case"usuario":return"usu\xe1rio";case"usuarios":return"usu\xe1rios";case"anuncio":return"an\xfancio";case"inicio":return"In\xedcio";case"erro":return"Erro";default:return decodeURI(o)}}buildLink(o,r,s){let p;const h=o.split("/");if(h.includes("")&&h.shift(),s){if(1===s.length)return`/${h[0]}`;if(s.length>1&&s.length<=2)return`/${h[0]}/${h[1]}`}switch(r){case 1:p=`/${h[0]}/${h[1]}`;break;case 2:p=`/${h[0]}/${h[1]}/${h[2]}`;break;default:p=`/${this.convertUrlToArray(o)[r]}`}return p}}return _.\u0275fac=function(o){return new(o||_)(u.LFG(m.F0))},_.\u0275prov=u.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},7868:(O,f,n)=>{n.d(f,{G:()=>W});var u=n(655),m=n(9751),e=n(4650),c=n(9267),t=n(1228),_=n(2129),i=n(6895),o=n(5203),r=n(1247),s=n(1049);function p(g,M){if(1&g&&(e.TgZ(0,"ion-breadcrumb",4),e.ALo(1,"titlecase"),e.ALo(2,"titlecase"),e._uU(3),e.ALo(4,"lnWords"),e.ALo(5,"titlecase"),e._UZ(6,"ion-icon",5),e.qZA()),2&g){const l=M.$implicit,A=M.last;e.Q6J("href",null==l?null:l.link)("rel",e.lcZ(1,5,null==l?null:l.label))("title",e.lcZ(2,7,null==l?null:l.label)),e.xp6(3),e.hij(" ",e.lcZ(4,9,e.lcZ(5,11,null==l?null:l.label))," "),e.xp6(3),e.Q6J("hidden",A)}}let h=(()=>{class g{constructor(l,A){this.breadcrumbService=l,this.plt=A,this.breadcrumbs$=this.breadcrumbService.breadcrumbs$,this.isPlatformIos()}ngOnDestroy(){this.$breadcrumb.unsubscribe()}ngOnInit(){this.update()}isPlatformIos(){return this.hasIos=this.plt.is("ios")}update(){this.$breadcrumb=this.breadcrumbService.getEvent().subscribe({next:l=>{l&&this.breadcrumbService.update(l)}})}}return g.\u0275fac=function(l){return new(l||g)(e.Y36(r.d),e.Y36(c.t4))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-breadcrumbs"]],decls:5,vars:5,consts:[[1,"ion-no-border",3,"collapse","translucent"],["color","light"],["mode","md"],["active","true","separator","true","routerDirection","forward",3,"href","rel","title",4,"ngFor","ngForOf"],["active","true","separator","true","routerDirection","forward",3,"href","rel","title"],["slot","separator","name","chevron-forward-outline",3,"hidden"]],template:function(l,A){1&l&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-breadcrumbs",2),e.YNc(3,p,7,13,"ion-breadcrumb",3),e.ALo(4,"async"),e.qZA()()()),2&l&&(e.Q6J("collapse",A.hasIos?"condense":"fade")("translucent",A.hasIos),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,3,A.breadcrumbs$)))},dependencies:[i.sg,c.fn,c.gZ,c.Gu,c.gu,c.sr,i.Ov,i.rS,s.J],styles:["ion-breadcrumb[_ngcontent-%COMP%]{font-size:x-small}ion-toolbar.ios[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--min-height: 0px !important;--padding-bottom: 0px !important;--padding-top: 0px !important;--opacity: .9 !important}"]}),g})();var a=n(6941),d=n(2089),v=n(8788);const D=["icons"],L=["popover"];function U(g,M){if(1&g){const l=e.EpF();e.TgZ(0,"ion-button",12),e.NdJ("click",function(){const $=e.CHM(l).$implicit,R=e.oxw(2);return e.KtG(R.toggleTemplateLigthDark($))}),e._UZ(1,"ion-icon",13),e.qZA()}if(2&g){const l=M.$implicit;e.Q6J("title",l.isDark?"Desativar modulo escuro":"Ativar modulo escuro"),e.uIk("data-label",l.isDark?"Desativar modulo escuro":"Ativar modulo escuro"),e.xp6(1),e.Q6J("name",l.isDark?"sunny":"moon")}}function x(g,M){if(1&g){const l=e.EpF();e.TgZ(0,"ion-button",14),e.NdJ("click",function(P){e.CHM(l);const $=e.oxw(2);return e.KtG($.presentPopover(P))}),e._UZ(1,"ion-icon",15),e.qZA()}}const B=function(){return["/painel-de-controle","admin","usuarios"]};function y(g,M){if(1&g){const l=e.EpF();e.TgZ(0,"ion-item",16),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(3);return e.KtG(P.close())}),e.TgZ(1,"ion-label"),e._uU(2,"Usu\xe1rios"),e.qZA(),e._UZ(3,"ion-icon",27),e.qZA()}2&g&&e.Q6J("routerLink",e.DdM(1,B))}const I=function(){return["/painel-de-controle","admin","categorias"]};function E(g,M){if(1&g){const l=e.EpF();e.TgZ(0,"ion-item",16),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(3);return e.KtG(P.close())}),e.TgZ(1,"ion-label"),e._uU(2,"Categorias"),e.qZA(),e._UZ(3,"ion-icon",28),e.qZA()}2&g&&e.Q6J("routerLink",e.DdM(1,I))}const T=function(){return["/painel-de-controle","admin","anuncios"]};function b(g,M){if(1&g){const l=e.EpF();e.TgZ(0,"ion-item",29),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(3);return e.KtG(P.close())}),e.TgZ(1,"ion-label"),e._uU(2,"An\xfancios"),e.qZA(),e._UZ(3,"ion-icon",23),e.qZA()}2&g&&e.Q6J("routerLink",e.DdM(1,T))}function C(g,M){1&g&&(e.TgZ(0,"ion-item-divider",30)(1,"ion-label",31),e._uU(2," Individual "),e.qZA()())}const Z=function(){return["/painel-de-controle","usuario"]},F=function(){return["/painel-de-controle","anuncio"]},S=function(){return["/sair"]};function K(g,M){if(1&g){const l=e.EpF();e.TgZ(0,"ion-content")(1,"ion-item-group")(2,"ion-item",16),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(2);return e.KtG(P.close())}),e.ALo(3,"isUserLevel"),e.TgZ(4,"ion-label"),e._uU(5,"Painel de controle"),e.qZA(),e._UZ(6,"ion-icon",17),e.qZA(),e.YNc(7,y,4,2,"ion-item",18),e.ALo(8,"isUserLevel"),e.YNc(9,E,4,2,"ion-item",18),e.ALo(10,"isUserLevel"),e.YNc(11,b,4,2,"ion-item",19),e.ALo(12,"isUserLevel"),e.YNc(13,C,3,0,"ion-item-divider",20),e.ALo(14,"isUserLevel"),e.TgZ(15,"ion-item",16),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(2);return e.KtG(P.close())}),e.TgZ(16,"ion-label"),e._uU(17),e.ALo(18,"userValues"),e.qZA(),e.TgZ(19,"ion-avatar",21),e._UZ(20,"ion-img",22),e.ALo(21,"userValuesImgAvatar"),e.ALo(22,"userValues"),e.ALo(23,"userValues"),e.qZA()(),e.TgZ(24,"ion-item",16),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(2);return e.KtG(P.close())}),e.TgZ(25,"ion-label"),e._uU(26,"An\xfancio"),e.qZA(),e._UZ(27,"ion-icon",23),e.qZA(),e.TgZ(28,"ion-item",16),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(2);return e.KtG(P.close())}),e.TgZ(29,"ion-label"),e._uU(30,"Sair"),e.qZA(),e._UZ(31,"ion-icon",24),e.qZA(),e.TgZ(32,"ion-item",25),e.NdJ("click",function(){e.CHM(l);const P=e.oxw(2);return e.KtG(P.close())}),e.TgZ(33,"ion-label"),e._uU(34,"Fechar"),e.qZA(),e._UZ(35,"ion-icon",26),e.qZA()()()}if(2&g){const l=e.oxw().$implicit;e.xp6(2),e.Q6J("routerLink",e.xi3(3,12,l,"1")?"/painel-de-controle/admin":"/painel-de-controle"),e.xp6(5),e.Q6J("ngIf",e.xi3(8,15,l,"1")),e.xp6(2),e.Q6J("ngIf",e.xi3(10,18,l,"1")),e.xp6(2),e.Q6J("ngIf",e.xi3(12,21,l,"1")),e.xp6(2),e.Q6J("ngIf",e.xi3(14,24,l,"1")),e.xp6(2),e.Q6J("routerLink",e.DdM(40,Z)),e.xp6(2),e.Oqu(e.xi3(18,27,l,"firstName")),e.xp6(3),e.Q6J("src",e.lcZ(21,30,l))("title",e.Dn7(22,32,l,"name","Usu\xe1rio"))("alt",e.Dn7(23,36,l,"name","Usu\xe1rio")),e.xp6(4),e.Q6J("routerLink",e.DdM(41,F)),e.xp6(4),e.Q6J("routerLink",e.DdM(42,S))}}function k(g,M){if(1&g){const l=e.EpF();e.TgZ(0,"ion-toolbar",2)(1,"ion-buttons",3),e.YNc(2,U,2,3,"ion-button",4),e.ALo(3,"async"),e.qZA(),e.TgZ(4,"ion-buttons",3,5),e.YNc(6,x,2,0,"ion-button",6),e.ALo(7,"userValues"),e.TgZ(8,"ion-popover",7,8),e.NdJ("didDismiss",function(){e.CHM(l);const P=e.oxw();return e.KtG(P.isOpen=!1)}),e.YNc(10,K,36,43,"ng-template"),e.qZA()(),e.TgZ(11,"ion-buttons",9)(12,"ion-button",10)(13,"figure"),e._UZ(14,"ion-img",11),e.qZA()()()()}if(2&g){const l=M.$implicit,A=e.oxw();e.xp6(2),e.Q6J("ngIf",e.lcZ(3,3,A.dark$)),e.xp6(4),e.Q6J("ngIf",e.xi3(7,5,l,"auth")),e.xp6(2),e.Q6J("isOpen",A.isOpen)}}let W=(()=>{class g{constructor(l,A,P,$){this.animationCtrl=l,this.plt=A,this.authService=P,this.moduleDarkService=$,this.isOpen=!1,this.dark$=new m.y}ngOnInit(){this.isPlatformIos(),this.getUser(),this.getDark()}getDark(){this.dark$=this.moduleDarkService.darkAsObservable()}ngAfterViewInit(){this.animationCtrl.create().addElement(this.figure.nativeElement).duration(700).fromTo("transform","translateX(70px)","translateX(0px)").fromTo("opacity","0","1").play()}close(){return(0,u.mG)(this,void 0,void 0,function*(){return yield this.popover.dismiss()})}presentPopover(l){return this.popover.event=l,this.isOpen=!0}getUser(){this.user$=this.authService.userObservable}isPlatformIos(){return this.hasIos=this.plt.is("ios")}toggleTemplateLigthDark(l){this.moduleDarkService.dark=!l.isDark}}return g.\u0275fac=function(l){return new(l||g)(e.Y36(c.vB),e.Y36(c.t4),e.Y36(t.e),e.Y36(_.l))},g.\u0275cmp=e.Xpm({type:g,selectors:[["app-header-component"]],viewQuery:function(l,A){if(1&l&&(e.Gf(D,5),e.Gf(L,5)),2&l){let P;e.iGM(P=e.CRH())&&(A.figure=P.first),e.iGM(P=e.CRH())&&(A.popover=P.first)}},inputs:{hidden:"hidden"},decls:4,vars:5,consts:[[3,"collapse","translucent"],["color","primary",4,"ngIf"],["color","primary"],["slot","end"],[3,"title","click",4,"ngIf"],["icons",""],["title","Painel de controle","data-label","Painel de controle",3,"click",4,"ngIf"],[3,"isOpen","didDismiss"],["popover",""],["slot","start",1,"ion-margin-start"],[1,"logo"],["src","./../../assets/layout.svg","routerLink","/inicio","routerDirection","forward","alt","Montes belos","title","www.montesbelos.app",1,"cursor-pointer"],[3,"title","click"],["size","large","slot","icon-only","color","light",3,"name"],["title","Painel de controle","data-label","Painel de controle",3,"click"],["size","large","slot","icon-only","name","menu","color","light"],["button","",3,"routerLink","click"],["slot","end","name","speedometer"],["button","",3,"routerLink","click",4,"ngIf"],["lines","none","button","",3,"routerLink","click",4,"ngIf"],["color","light",4,"ngIf"],["title","Im\xe1gem do usu\xe1rio.",1,"cursor-pointer"],["referrerpolicy","no-referrer",3,"src","title","alt"],["slot","end","name","megaphone"],["slot","end","name","log-out"],["lines","none","button","",3,"click"],["slot","end","name","close-circle"],["slot","end","name","people-circle"],["slot","end","name","list"],["lines","none","button","",3,"routerLink","click"],["color","light"],["color","medium"]],template:function(l,A){1&l&&(e.TgZ(0,"ion-header",0),e.YNc(1,k,15,8,"ion-toolbar",1),e.ALo(2,"async"),e.qZA(),e._UZ(3,"app-breadcrumbs")),2&l&&(e.Q6J("collapse",A.hasIos?"condense":"fade")("translucent",!A.hasIos),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,3,A.user$)))},dependencies:[i.O5,c.BJ,c.YG,c.Sm,c.W2,c.Gu,c.gu,c.Xz,c.Ie,c.rH,c.Ub,c.Q$,c.sr,c.d8,c.YI,o.rH,h,i.Ov,a.d,d.g,v.n],styles:["figure[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0}ion-button.logo[_ngcontent-%COMP%]{--padding-top: 20px;--padding-bottom: 20px;--padding-end: 0px;--padding-start: 0px;--border-radius: 0px !important}ion-avatar[_ngcontent-%COMP%]{width:26px;height:26px;margin:0 auto}"]}),g})()},677:(O,f,n)=>{n.d(f,{O:()=>_});var u=n(6895),m=n(5203),e=n(9267),c=n(3493),t=n(4650);let _=(()=>{class i{}return i.\u0275fac=function(r){return new(r||i)},i.\u0275mod=t.oAB({type:i}),i.\u0275inj=t.cJS({imports:[u.ez,e.Pc,m.Bz,c.d]}),i})()},4111:(O,f,n)=>{n.d(f,{O:()=>s});var u=n(1135),m=n(8505),e=n(3755),c=n(4650),t=n(529),_=n(6578),i=n(6388),o=n(6895),r=n(1247);let s=(()=>{class p extends e.O{constructor(a,d,v,D,L){super(a,d),this.http=a,this.storageService=d,this.messageService=v,this.location=D,this.breadcrumbsService=L,this.announcement=new u.X(void 0),this.setApi="announcement"}get galery(){if(this.announcement.value)return this.announcement.value.galery}get announcementObservable(){return this.announcement.asObservable()}get getAnnouncement(){return this.announcement.value}set setAnnouncement(a){this.announcement.next(a)}set addItemGalery(a){var d,v;null!==(d=this.announcement.value)&&void 0!==d&&d.galery&&(this.announcement.value.galery.unshift(a),this.setAnnouncement=null===(v=this.announcement)||void 0===v?void 0:v.value)}set removeItemGalery(a){var d,v;if(null!==(d=this.announcement.value)&&void 0!==d&&d.galery){const D=this.announcement.value.galery.findIndex(L=>L?.id===a?.id);this.announcement.value.galery.splice(D,1),this.setAnnouncement=null===(v=this.announcement)||void 0===v?void 0:v.value}}set setGalery(a){var d,v;null!==(d=this.announcement.value)&&void 0!==d&&d.galery&&(this.announcement.value.galery=a,this.setAnnouncement=null===(v=this.announcement)||void 0===v?void 0:v.value)}set setBlockade(a){var d,v;null!==(d=this.announcement.value)&&void 0!==d&&d.galery&&(this.announcement.value.blockade=a?.blockade,this.setAnnouncement=null===(v=this.announcement)||void 0===v?void 0:v.value)}set setCategoryAnnouncement(a){var d,v;null!==(d=this.announcement.value)&&void 0!==d&&d.galery&&(this.announcement.value.category=a?.category,this.announcement.value.categoryAnnouncement={id:a?.id},this.setAnnouncement=null===(v=this.announcement)||void 0===v?void 0:v.value)}set setAnnouncementMessage(a){var d,v,D,L,U,x;if(null!==(v=null===(d=this.getAnnouncement)||void 0===d?void 0:d.messages)&&void 0!==v&&v.length){const B=null===(L=null===(D=this.getAnnouncement)||void 0===D?void 0:D.messages)||void 0===L?void 0:L.length,y=this.getAnnouncement.messages.findIndex(I=>I?.id===a?.id);-1===y?B>0?null===(U=this.getAnnouncement)||void 0===U||U.messages.unshift(a):this.getAnnouncement.messages=[a]:null===(x=this.getAnnouncement)||void 0===x||x.messages.splice(y,1,a),this.setAnnouncement=this.getAnnouncement}}set setTitleDescription(a){var d,v,D,L;null!==(d=this.getAnnouncement)&&void 0!==d&&d.messages&&this.announcement.value&&(this.announcement.value.title=a?.title,this.announcement.value.blockade=a?.blockade,this.announcement.value.description=a?.description,this.announcement.value.slug=a?.slug,console.log(a),!(null===(v=this.announcement.value.price)||void 0===v)&&v.announcementId&&(this.announcement.value.price=a.price),a?.messages&&(null===(D=this.getAnnouncement)||void 0===D||D.messages.unshift(a.messages[0])),this.setAnnouncement=null===(L=this.announcement)||void 0===L?void 0:L.value,this.updateUrl(a))}updateAnnouncement(a){return this.patch(a).pipe((0,m.b)(d=>this.setTitleDescription=d))}blockade(a){return this.patch(a,"blockade").pipe((0,m.b)(d=>this.setBlockade=d))}updateUrl(a){const d=`/painel-de-controle/anuncio/${a?.slug}`;this.breadcrumbsService.setEvent(d),this.location.replaceState(d)}}return p.\u0275fac=function(a){return new(a||p)(c.LFG(t.eN),c.LFG(_.V),c.LFG(i.e),c.LFG(o.Ye),c.LFG(r.d))},p.\u0275prov=c.Yz7({token:p,factory:p.\u0275fac,providedIn:"root"}),p})()},9119:(O,f,n)=>{n.d(f,{D:()=>i});var u=n(8505),m=n(4650),e=n(3755),c=n(529),t=n(6578),_=n(4111);let i=(()=>{class o extends e.O{constructor(s,p,h){super(s,p),this.http=s,this.storageService=p,this.managementAnnouncementService=h,this.addressEvent=new m.vpe(void 0),this.setApi="address"}get getAddressEvent(){return this.addressEvent.asObservable()}set setAddress(s){this.managementAnnouncementService.getAnnouncement&&(this.managementAnnouncementService.getAnnouncement.address=s,this.managementAnnouncementService.setAnnouncement=this.managementAnnouncementService.getAnnouncement),this.addressEvent.emit(s)}mask(s){return"number"==typeof s.zip_code?String(s.zip_code).replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3"):s?.zip_code&&s.zip_code.replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3")}address(s){return s.zip_code=Number(String(s?.zip_code).replace(/[\.\-]/g,"")),s?.id?this.patch(s).pipe((0,u.b)(p=>this.setAddress=p)):this.create(s).pipe((0,u.b)(p=>this.setAddress=p))}delete(s){return this.destroy(s).pipe((0,u.b)(()=>this.setAddress=null))}}return o.\u0275fac=function(s){return new(s||o)(m.LFG(c.eN),m.LFG(t.V),m.LFG(_.O))},o.\u0275prov=m.Yz7({token:o,factory:o.\u0275fac}),o})()},7253:(O,f,n)=>{n.d(f,{w:()=>m});var u=n(4650);let m=(()=>{class e{transform(t){return t?null===t?.address||null===t?.citie||null===t?.contact:null}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u.Yjl({name:"allowAd",type:e,pure:!1}),e})()},1049:(O,f,n)=>{n.d(f,{J:()=>m});var u=n(4650);let m=(()=>{class e{constructor(){this.lastRegex=/[\s][\w\W]{1,3}[\s]*$/g,this.firstRegex=/\w*\W*$|[\s]?[\w\W]{1,3}[\s]$/g}transform(t,_=22){this.max=_;const i=this.cropWords(t);if(i&&this.wordsSize&&this.wordsSize>this.max){const o=i.match(this.firstRegex);return`${o&&this.firstFilter(i,o)}...`}return i}lastFilter(t){const _=t.match(this.lastRegex);if(_){const i=new RegExp(_[0]);return`${t.replace(i,"")}...`}return null}cropWords(t){if(t)return this.wordsSize=t.length,this.max&&this.wordsSize>this.max?t.slice(0,this.max):t}firstFilter(t,_){const i=new RegExp(_[0]);return t.replace(i,"")}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u.Yjl({name:"lnWords",type:e,pure:!0}),e})()},3493:(O,f,n)=>{n.d(f,{d:()=>t});var u=n(9119),m=n(72),e=n(7253),c=n(4650);let t=(()=>{class _{}return _.\u0275fac=function(o){return new(o||_)},_.\u0275mod=c.oAB({type:_}),_.\u0275inj=c.cJS({providers:[u.D,e.w,m._]}),_})()},72:(O,f,n)=>{n.d(f,{_:()=>c});var u=n(5439),e=n(4650);let c=(()=>{class t{transform(i,o="create"){const r=i;if(this.isTimestamp(r)){const s=u().diff(r,"minutes"),p=u().diff(r,"hours"),h=u().diff(r,"days"),a=u().diff(r,"months"),d=u().diff(r,"years");switch(o){case"create":if(s<=60)return`Criado h\xe1 ${s} minuto${this.pluralMinutes(s)}.`;if(p<=24)return`Criado h\xe1 ${p} hora${this.pluralHours(p)}.`;if(h>=1)return`Criado h\xe1 ${h} dia${this.pluralDays(h)}.`;if(a<60)return`Criado h\xe1 ${a} mese${this.pluralMonth(a)}.`;if(d>0)return`Criado h\xe1 ${d} ano${this.pluralYear(d)}.`;break;case"update":if(s<=60)return`Atualizado h\xe1 ${s} minuto${this.pluralMinutes(s)}.`;if(p<=24)return`Atualizado h\xe1 ${p} hora${this.pluralHours(p)}.`;if(h>=1)return`Atualizado h\xe1 ${h} dia${this.pluralDays(h)}.`;if(a<60)return`Atualizado h\xe1 ${a} mese${this.pluralMonth(a)}.`;if(d>0)return`Atualizado h\xe1 ${d} ano${this.pluralYear(d)}.`;break;case"plan":return`Rest\xe3o ${Math.abs(h)} dia${this.pluralDays(h)} para o vencimento.`;case"workDays":const v=u().format("LLLL"),D=v.slice(0,1);return v.replace(D,D.toUpperCase())}}return null}pluralYear(i){return i>1?"s":""}pluralMonth(i){return i>60?"s":""}pluralDays(i){return i>1?"s":""}pluralHours(i){return i>24?"s":""}pluralMinutes(i){return i>1?"s":""}isTimestamp(i){return new Date(i).getTime()>0}}return t.\u0275fac=function(i){return new(i||t)},t.\u0275pipe=e.Yjl({name:"time",type:t,pure:!0}),t})()},6941:(O,f,n)=>{n.d(f,{d:()=>m});var u=n(4650);let m=(()=>{class e{transform(t,_){return!(!t||t.level!==_)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u.Yjl({name:"isUserLevel",type:e,pure:!0}),e})()},8788:(O,f,n)=>{n.d(f,{n:()=>m});var u=n(4650);let m=(()=>{class e{transform(t){var _,i,o;const r=t;return r&&r?.image&&null!==(_=r?.image)&&void 0!==_&&_.filename?null!==(i=r?.image)&&void 0!==i&&i.filename.includes("https://")?null===(o=r?.image)||void 0===o?void 0:o.filename:`/images/avatar/${r.image.filename}`:"./../../../../../../assets/avatar.svg"}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u.Yjl({name:"userValuesImgAvatar",type:e,pure:!1}),e})()},2089:(O,f,n)=>{n.d(f,{g:()=>m});var u=n(4650);let m=(()=>{class e{transform(t,_,i){if(t&&t[_])return i?`${i} ${t[_]}`:t[_]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275pipe=u.Yjl({name:"userValues",type:e,pure:!1}),e})()},1395:(O,f,n)=>{n.d(f,{c:()=>c});var u=n(655),m=n(4650),e=n(9267);let c=(()=>{class t{constructor(i){this.alertController=i}alert(i,o){return(0,u.mG)(this,void 0,void 0,function*(){const r=yield this.alertController.create({header:i,message:o,buttons:["OK"]});return yield r.present(),r})}}return t.\u0275fac=function(i){return new(i||t)(m.LFG(e.Br))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},6388:(O,f,n)=>{n.d(f,{e:()=>_});var u=n(655),m=n(4650),e=n(9524),c=n(1395),t=n(3131);let _=(()=>{class i{constructor(r,s,p){this.toastService=r,this.alertService=s,this.helpsService=p}success(r,s,p,h=3e3){return(0,u.mG)(this,void 0,void 0,function*(){return s&&p&&this.disableLoadingUnsubscribeVariable(s,p),r&&this.helpsService.delay(()=>(0,u.mG)(this,void 0,void 0,function*(){return yield this.toastService.show(r,"bottom","thumbs-up",2500)}),h)})}alert(r){return this.helpsService.delay(()=>this.alertService.alert("Aten\xe7\xe3o",r?.error),2e3)}disableLoadingUnsubscribeVariable(r,s){return(0,u.mG)(this,void 0,void 0,function*(){r&&s&&(this.helpsService.delay(()=>(0,u.mG)(this,void 0,void 0,function*(){return(yield r).dismiss()}),2e3),s.unsubscribe())})}error(r,s,p){return s&&p&&this.disableLoadingUnsubscribeVariable(s,p).then(),this.alert(r)}disable(r,s){return(0,u.mG)(this,void 0,void 0,function*(){return yield this.disableLoadingUnsubscribeVariable(r,s)})}}return i.\u0275fac=function(r){return new(r||i)(m.LFG(e.k),m.LFG(c.c),m.LFG(t.f))},i.\u0275prov=m.Yz7({token:i,factory:i.\u0275fac,providedIn:"root"}),i})()},9524:(O,f,n)=>{n.d(f,{k:()=>c});var u=n(655),m=n(4650),e=n(9267);let c=(()=>{class t{constructor(i){this.toastController=i}show(i,o,r,s,p="light"){return(0,u.mG)(this,void 0,void 0,function*(){const h=yield this.toastController.create({message:i,icon:r,duration:s,position:o,color:p,buttons:[{side:"end",icon:"add-circle-outline",handler:()=>this.toastController.dismiss()}]});return h.present(),h})}loading(i,o,r){return(0,u.mG)(this,void 0,void 0,function*(){const s=yield this.toastController.create({message:i,position:o,color:"light",icon:r});return s.present(),s})}}return t.\u0275fac=function(i){return new(i||t)(m.LFG(e.yF))},t.\u0275prov=m.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()}}]);