"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[2777],{2777:(S,m,n)=>{n.r(m),n.d(m,{DashboardAdminPageModule:()=>U});var c=n(6895),P=n(433),l=n(9267),d=n(5203),e=n(8322),g=n(262),h=n(515),t=n(4650),M=n(7150);let v=(()=>{class o{constructor(a,i){this.router=a,this.categoryService=i}resolve(a){const{id:i}=a.params;return this.categoryService.requirement(`management/${i}`).pipe((0,g.K)(r=>(this.router.navigate(["/erro"]),h.E)))}}return o.\u0275fac=function(a){return new(a||o)(t.LFG(d.F0),t.LFG(M.H))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();var u=n(2508),x=n(1228),A=n(7868),C=n(67);function y(o,s){if(1&o&&(t.TgZ(0,"ion-col",4)(1,"ion-card",5)(2,"ion-card-header")(3,"ion-card-title",6),t._UZ(4,"ion-icon",7),t.TgZ(5,"span"),t._uU(6),t.qZA()()(),t.TgZ(7,"ion-card-content")(8,"ion-button",8),t._UZ(9,"ion-icon",9),t.qZA()()()()),2&o){const a=s.$implicit;t.xp6(1),t.Q6J("title",null==a?null:a.title),t.xp6(3),t.Q6J("name",null==a?null:a.icon),t.xp6(2),t.Oqu(null==a?null:a.name),t.xp6(2),t.Q6J("routerLink",null==a?null:a.router)}}let z=(()=>{class o{constructor(a,i){this.route=a,this.authService=i,this.nav=[{name:"Usu\xe1rios",title:"Manuten\xe7\xe3o do usu\xe1rios.",router:["/painel-de-controle/admin","usuarios"],icon:"people"},{name:"Categorias",title:"Manuten\xe7\xe3o de categorias.",router:["/painel-de-controle/admin","categorias"],icon:"list"},{name:"An\xfancios",title:"Manuten\xe7\xe3o do an\xfancios.",router:["/painel-de-controle/admin","anuncios"],icon:"megaphone"}]}ngOnInit(){this.isLevelAdmin()}isLevelAdmin(){"2"===this.authService.getLevel&&this.route.navigate(["/painel-de-controle"])}}return o.\u0275fac=function(a){return new(a||o)(t.Y36(d.F0),t.Y36(x.e))},o.\u0275cmp=t.Xpm({type:o,selectors:[["app-dashboard-admin"]],decls:7,vars:2,consts:[[3,"fullscreen"],["fixed",""],[1,"grid"],["size-xl","4","size-lg","4","size-md","4","size-sm","4","size","12",4,"ngFor","ngForOf"],["size-xl","4","size-lg","4","size-md","4","size-sm","4","size","12"],[3,"title"],["color","light"],["color","medium",3,"name"],["color","medium","expand","block","routerDirection","forward","fill","outline","size","small","slot","end",3,"routerLink"],["name","chevron-forward"]],template:function(a,i){1&a&&(t._UZ(0,"app-header-component"),t.TgZ(1,"ion-content",0)(2,"ion-grid",1)(3,"ion-grid",2)(4,"ion-row"),t.YNc(5,y,10,4,"ion-col",3),t.qZA()()()(),t._UZ(6,"app-footer")),2&a&&(t.xp6(1),t.Q6J("fullscreen",!0),t.xp6(4),t.Q6J("ngForOf",i.nav))},dependencies:[c.sg,l.YG,l.PM,l.FN,l.Zi,l.Dq,l.wI,l.W2,l.jY,l.gu,l.Nd,l.YI,d.rH,A.G,C.S],styles:["ion-card[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center}ion-card[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{font-size:36px}"]}),o})();var L=n(8505),F=n(9611);let f=(()=>{class o{constructor(a,i){this.router=a,this.usersService=i}resolve(a){const{id:i}=a.params;return this.usersService.requirement(`management/${i}`).pipe((0,L.b)(r=>delete r.password),(0,g.K)(r=>(this.router.navigate(["/erro"]),h.E)))}}return o.\u0275fac=function(a){return new(a||o)(t.LFG(d.F0),t.LFG(F.J))},o.\u0275prov=t.Yz7({token:o,factory:o.\u0275fac}),o})();const D=[{path:"",component:z},{path:"usuario/:id/alterar-email/:token",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>n.e(2195).then(n.bind(n,2195)).then(o=>o.ChangeEmailPageModule),resolve:{changeEmail:u.R}},{path:"usuario",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>Promise.all([n.e(8345),n.e(2077),n.e(3416),n.e(890),n.e(4002)]).then(n.bind(n,9624)).then(o=>o.UserPageModule)},{path:"usuarios",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>Promise.all([n.e(8345),n.e(1348)]).then(n.bind(n,1348)).then(o=>o.UsersPageModule)},{path:"usuario/:id",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>Promise.all([n.e(8345),n.e(2077),n.e(3416),n.e(7157),n.e(4124),n.e(890),n.e(9579),n.e(8592),n.e(1908)]).then(n.bind(n,1908)).then(o=>o.ManagementPageModule),resolve:{user:f}},{path:"anuncios",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>Promise.all([n.e(8345),n.e(2077),n.e(7157),n.e(4124),n.e(9579),n.e(6589)]).then(n.bind(n,6589)).then(o=>o.AdminAnnouncementPageModule)},{path:"anuncio/:id",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>Promise.all([n.e(8345),n.e(2077),n.e(7157),n.e(4124),n.e(9579),n.e(6589)]).then(n.bind(n,6589)).then(o=>o.AdminAnnouncementPageModule)},{path:"categorias",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>Promise.all([n.e(8345),n.e(2077),n.e(4092),n.e(3820)]).then(n.bind(n,3820)).then(o=>o.CategoryAnnouncementPageModule)},{path:"categoria/:id",canActivate:[e.x],canLoad:[e.x],loadChildren:()=>Promise.all([n.e(8345),n.e(2077),n.e(4092),n.e(3031)]).then(n.bind(n,3031)).then(o=>o.ManagementPageModule),resolve:{category:v}}];let Z=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({providers:[u.R,f,v],imports:[d.Bz.forChild(D),d.Bz]}),o})();var O=n(677),R=n(6444);let U=(()=>{class o{}return o.\u0275fac=function(a){return new(a||o)},o.\u0275mod=t.oAB({type:o}),o.\u0275inj=t.cJS({imports:[c.ez,P.u5,l.Pc,Z,O.O,R._]}),o})()}}]);