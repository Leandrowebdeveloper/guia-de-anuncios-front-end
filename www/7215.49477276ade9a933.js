"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[7215],{1247:(h,b,a)=>{a.d(b,{d:()=>m});var p=a(4650),e=a(5203),i=a(1135),d=a(9300);let m=(()=>{class _{constructor(t){this.router=t,this.breadcrumbEvent=new p.vpe(null),this.breadcrumb=new i.X([]),this.breadcrumb$=this.breadcrumb.asObservable(),this.init()}get breadcrumbs$(){return this.breadcrumb$}ngOnDestroy(){this.$router.unsubscribe()}getEvent(){return this.breadcrumbEvent.asObservable()}setEvent(t){this.breadcrumbEvent.emit(t)}update(t){return this.createBreadcrumbs(t)}convertUrlToArray(t){const u=this.urlSize(t);return t.split(/[\/]/g).splice(1,u)}urlSize(t){return t.length-1}breadcrumbs(t){this.breadcrumb.next(t)}convertUrlSlugToPhrase(t){const u=this.convertUrlToArray(t).map(s=>s.replace(/[-]/g," "));return this.convertSlugEndTitle(u)}init(){this.$router=this.router.events.pipe((0,d.h)(t=>t instanceof e.m2)).subscribe({next:t=>this.start(t)})}start(t){t instanceof e.m2&&this.createBreadcrumbs(t.url)}convertSlugEndTitle(t){const u=t.map(this.filterSlug()).filter(s=>void 0!==s);return this.title(u)}title(t){return t.length>0&&t.includes("")&&t.pop(),t}filterSlug(){return(t,u)=>{if(u>-1){if(/[0-9]/g.test(t)){const s=t.split(" ").pop();t=t.replace(s,"").trim()}return t}}}createBreadcrumbs(t){const u=[];this.convertUrlSlugToPhrase(t).forEach((s,f)=>u.push({label:this.filterLabel(s),link:this.buildLink(t,f)})),u.splice(3,1),this.breadcrumbs(u)}filterLabel(t){switch(t){case"usuario":return"usu\xe1rio";case"usuarios":return"usu\xe1rios";case"anuncio":return"an\xfancio";case"inicio":return"In\xedcio";case"erro":return"Erro";default:return t}}buildLink(t,u){const s=t.split("/");switch(s.includes("")&&s.shift(),u){case 0:return`/${s[0]}`;case 1:case 2:return`/${s[0]}/${s[1]}/${s[2]}`;case 3:return t;default:return`/${this.convertUrlToArray(t)[u]}`}}}return _.\u0275fac=function(t){return new(t||_)(p.LFG(e.F0))},_.\u0275prov=p.Yz7({token:_,factory:_.\u0275fac,providedIn:"root"}),_})()},7868:(h,b,a)=>{a.d(b,{G:()=>k});var p=a(655),e=a(4650),i=a(9267),d=a(1228),m=a(6895),_=a(5203),g=a(1247);function t(o,c){if(1&o&&(e.TgZ(0,"ion-breadcrumb",4),e.ALo(1,"titlecase"),e.ALo(2,"titlecase"),e._uU(3),e.ALo(4,"titlecase"),e._UZ(5,"ion-icon",5),e.qZA()),2&o){const n=c.$implicit,r=c.last;e.Q6J("href",null==n?null:n.link)("rel",e.lcZ(1,5,null==n?null:n.label))("title",e.lcZ(2,7,null==n?null:n.label)),e.xp6(3),e.hij(" ",e.lcZ(4,9,null==n?null:n.label)," "),e.xp6(2),e.Q6J("hidden",r)}}let u=(()=>{class o{constructor(n,r){this.breadcrumbService=n,this.plt=r,this.breadcrumbs$=this.breadcrumbService.breadcrumbs$,this.isPlatformIos()}ngOnDestroy(){this.$breadcrumb.unsubscribe()}ngOnInit(){this.update()}isPlatformIos(){return this.hasIos=this.plt.is("ios")}update(){this.$breadcrumb=this.breadcrumbService.getEvent().subscribe({next:n=>{n&&this.breadcrumbService.update(n)}})}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(g.d),e.Y36(i.t4))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-breadcrumbs"]],decls:5,vars:5,consts:[[1,"ion-no-border",3,"collapse","translucent"],["color","light"],["mode","md"],["active","true","separator","true","routerDirection","forward",3,"href","rel","title",4,"ngFor","ngForOf"],["active","true","separator","true","routerDirection","forward",3,"href","rel","title"],["slot","separator","name","chevron-forward-outline",3,"hidden"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-header",0)(1,"ion-toolbar",1)(2,"ion-breadcrumbs",2),e.YNc(3,t,6,11,"ion-breadcrumb",3),e.ALo(4,"async"),e.qZA()()()),2&n&&(e.Q6J("collapse",r.hasIos?"condense":"fade")("translucent",r.hasIos),e.xp6(3),e.Q6J("ngForOf",e.lcZ(4,3,r.breadcrumbs$)))},dependencies:[m.sg,i.fn,i.gZ,i.Gu,i.gu,i.sr,m.Ov,m.rS],styles:["ion-breadcrumb[_ngcontent-%COMP%]{font-size:x-small}ion-toolbar.ios[_ngcontent-%COMP%], ion-toolbar[_ngcontent-%COMP%]{--min-height: 0px !important;--padding-bottom: 0px !important;--padding-top: 0px !important;--opacity: .9 !important}"]}),o})();const s=["icons"],f=["popover"];function v(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"ion-button",11),e.NdJ("click",function(l){e.CHM(n);const J=e.oxw(2);return e.KtG(J.presentPopover(l))}),e._UZ(1,"ion-icon",12),e.qZA()}}const Z=function(){return["/painel-de-controle","admin","usuarios"]};function T(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"ion-item",13),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(3);return e.KtG(l.close())}),e.TgZ(1,"ion-label"),e._uU(2,"Usu\xe1rios"),e.qZA(),e._UZ(3,"ion-icon",24),e.qZA()}2&o&&e.Q6J("routerLink",e.DdM(1,Z))}const C=function(){return["/painel-de-controle","admin","categorias"]};function x(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"ion-item",13),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(3);return e.KtG(l.close())}),e.TgZ(1,"ion-label"),e._uU(2,"Categorias"),e.qZA(),e._UZ(3,"ion-icon",25),e.qZA()}2&o&&e.Q6J("routerLink",e.DdM(1,C))}const E=function(){return["/painel-de-controle","admin","anuncios"]};function A(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"ion-item",26),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(3);return e.KtG(l.close())}),e.TgZ(1,"ion-label"),e._uU(2,"An\xfancios"),e.qZA(),e._UZ(3,"ion-icon",20),e.qZA()}2&o&&e.Q6J("routerLink",e.DdM(1,E))}function M(o,c){1&o&&(e.TgZ(0,"ion-item-divider",27)(1,"ion-label",28),e._uU(2," Individual "),e.qZA()())}const O=function(){return["/painel-de-controle","usuario"]},U=function(){return["/painel-de-controle","anuncio"]},H=function(){return["/sair"]};function I(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"ion-content")(1,"ion-item-group")(2,"ion-item",13),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.close())}),e.TgZ(3,"ion-label"),e._uU(4,"Painel de controle"),e.qZA(),e._UZ(5,"ion-icon",14),e.qZA(),e.YNc(6,T,4,2,"ion-item",15),e.YNc(7,x,4,2,"ion-item",15),e.YNc(8,A,4,2,"ion-item",16),e.YNc(9,M,3,0,"ion-item-divider",17),e.TgZ(10,"ion-item",13),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.close())}),e.TgZ(11,"ion-label"),e._uU(12),e.qZA(),e.TgZ(13,"ion-avatar",18),e._UZ(14,"ion-img",19),e.qZA()(),e.TgZ(15,"ion-item",13),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.close())}),e.TgZ(16,"ion-label"),e._uU(17,"An\xfancio"),e.qZA(),e._UZ(18,"ion-icon",20),e.qZA(),e.TgZ(19,"ion-item",13),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.close())}),e.TgZ(20,"ion-label"),e._uU(21,"Sair"),e.qZA(),e._UZ(22,"ion-icon",21),e.qZA(),e.TgZ(23,"ion-item",22),e.NdJ("click",function(){e.CHM(n);const l=e.oxw(2);return e.KtG(l.close())}),e.TgZ(24,"ion-label"),e._uU(25,"Fechar"),e.qZA(),e._UZ(26,"ion-icon",23),e.qZA()()()}if(2&o){const n=e.oxw().$implicit;e.xp6(2),e.Q6J("routerLink","1"===(null==n?null:n.level)?"/painel-de-controle/admin":"/painel-de-controle"),e.xp6(4),e.Q6J("ngIf","1"===(null==n?null:n.level)),e.xp6(1),e.Q6J("ngIf","1"===(null==n?null:n.level)),e.xp6(1),e.Q6J("ngIf","1"===(null==n?null:n.level)),e.xp6(1),e.Q6J("ngIf","1"===(null==n?null:n.level)),e.xp6(1),e.Q6J("routerLink",e.DdM(11,O)),e.xp6(2),e.Oqu(null==n?null:n.firstName),e.xp6(2),e.Q6J("src",null!=n&&null!=n.image&&n.image.filename?"/images/avatar/"+(null==n||null==n.image?null:n.image.filename):"./../../assets/avatar.svg")("title","Usu\xe1rio "+(null==n?null:n.name)),e.xp6(1),e.Q6J("routerLink",e.DdM(12,U)),e.xp6(4),e.Q6J("routerLink",e.DdM(13,H))}}function P(o,c){if(1&o){const n=e.EpF();e.TgZ(0,"ion-toolbar",2)(1,"ion-buttons",3,4),e.YNc(3,v,2,0,"ion-button",5),e.TgZ(4,"ion-popover",6,7),e.NdJ("didDismiss",function(){e.CHM(n);const l=e.oxw();return e.KtG(l.isOpen=!1)}),e.YNc(6,I,27,14,"ng-template"),e.qZA()(),e.TgZ(7,"ion-buttons",8)(8,"ion-button",9)(9,"figure"),e._UZ(10,"ion-img",10),e.qZA()()()()}if(2&o){const n=c.$implicit,r=e.oxw();e.xp6(3),e.Q6J("ngIf",null==n?null:n.auth),e.xp6(1),e.Q6J("isOpen",r.isOpen)}}let k=(()=>{class o{constructor(n,r,l){this.animationCtrl=n,this.plt=r,this.authService=l,this.isOpen=!1}ngOnInit(){this.isPlatformIos(),this.getUser()}ngAfterViewInit(){this.animationCtrl.create().addElement(this.figure.nativeElement).duration(700).fromTo("transform","translateX(70px)","translateX(0px)").fromTo("opacity","0","1").play()}close(){return(0,p.mG)(this,void 0,void 0,function*(){return yield this.popover.dismiss()})}presentPopover(n){return this.popover.event=n,this.isOpen=!0}getUser(){this.user$=this.authService.userObservable}isPlatformIos(){return this.hasIos=this.plt.is("ios")}}return o.\u0275fac=function(n){return new(n||o)(e.Y36(i.vB),e.Y36(i.t4),e.Y36(d.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-header-component"]],viewQuery:function(n,r){if(1&n&&(e.Gf(s,5),e.Gf(f,5)),2&n){let l;e.iGM(l=e.CRH())&&(r.figure=l.first),e.iGM(l=e.CRH())&&(r.popover=l.first)}},inputs:{hidden:"hidden"},decls:4,vars:5,consts:[[3,"collapse","translucent"],["color","primary",4,"ngIf"],["color","primary"],["slot","end"],["icons",""],["title","Painel de controle","data-label","Painel de controle",3,"click",4,"ngIf"],[3,"isOpen","didDismiss"],["popover",""],["slot","start",1,"ion-margin-start"],[1,"logo"],["src","./../../assets/layout.svg","routerLink","/inicio","routerDirection","forward","alt","Montes belos","title","www.montesbelos.app",1,"cursor-pointer"],["title","Painel de controle","data-label","Painel de controle",3,"click"],["size","large","slot","icon-only","name","menu","color","light"],["button","",3,"routerLink","click"],["slot","end","name","speedometer"],["button","",3,"routerLink","click",4,"ngIf"],["lines","none","button","",3,"routerLink","click",4,"ngIf"],["color","light",4,"ngIf"],["title","Im\xe1gem do usu\xe1rio.",1,"cursor-pointer"],["referrerpolicy","no-referrer","alt","Usu\xe1rio",3,"src","title"],["slot","end","name","megaphone"],["slot","end","name","log-out"],["lines","none","button","",3,"click"],["slot","end","name","close-circle"],["slot","end","name","people-circle"],["slot","end","name","list"],["lines","none","button","",3,"routerLink","click"],["color","light"],["color","medium"]],template:function(n,r){1&n&&(e.TgZ(0,"ion-header",0),e.YNc(1,P,11,2,"ion-toolbar",1),e.ALo(2,"async"),e.qZA(),e._UZ(3,"app-breadcrumbs")),2&n&&(e.Q6J("collapse",r.hasIos?"condense":"fade")("translucent",!r.hasIos),e.xp6(1),e.Q6J("ngIf",e.lcZ(2,3,r.user$)))},dependencies:[m.O5,i.BJ,i.YG,i.Sm,i.W2,i.Gu,i.gu,i.Xz,i.Ie,i.rH,i.Ub,i.Q$,i.sr,i.d8,i.YI,_.rH,u,m.Ov],styles:["figure[_ngcontent-%COMP%]{display:inline-block;margin:0;padding:0}ion-button.logo[_ngcontent-%COMP%]{--padding-top: 20px;--padding-bottom: 20px;--padding-end: 0px;--padding-start: 0px;--border-radius: 0px !important}ion-avatar[_ngcontent-%COMP%]{width:26px;height:26px;margin:0 auto}"]}),o})()},677:(h,b,a)=>{a.d(b,{O:()=>m});var p=a(6895),e=a(5203),i=a(9267),d=a(4650);let m=(()=>{class _{}return _.\u0275fac=function(t){return new(t||_)},_.\u0275mod=d.oAB({type:_}),_.\u0275inj=d.cJS({imports:[p.ez,i.Pc,e.Bz]}),_})()}}]);