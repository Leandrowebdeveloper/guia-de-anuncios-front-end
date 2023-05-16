"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9451],{4897:(C,A,a)=>{a.d(A,{E:()=>h});var g=a(4650),x=a(3755),_=a(529),s=a(6578),l=a(6388);let h=(()=>{class o extends x.O{constructor(m,c,P){super(m,c),this.http=m,this.storageService=c,this.messageService=P,this.saveSorting=new g.vpe(!1),this.announcement=new g.vpe(void 0),this.setApi="announcement"}get asObservable(){return this.announcement.asObservable()}set setAnnouncement(m){this.announcement.emit(m)}set setCsrf(m){this.csrf=m}delete(m){const{id:c,_csrf:P}=m;return this.destroy({id:c,_csrf:P},"management/")}drop(m){const{id:c,_csrf:P}=m;return this.destroy({id:c,_csrf:P},"management/drop")}toRestore(m){const{id:c,_csrf:P}=m;return this.patch({id:c,_csrf:P},"management/to-restore")}searchBy(m){return this.search("management/search",m)}getAnnouncementAll(m,c){return this.index(`management/${m}`,Object.assign({},c))}order(m){return this.patch(m,"management/order")}}return o.\u0275fac=function(m){return new(m||o)(g.LFG(_.eN),g.LFG(s.V),g.LFG(l.e))},o.\u0275prov=g.Yz7({token:o,factory:o.\u0275fac}),o})()},9451:(C,A,a)=>{a.r(A),a.d(A,{CategoryAnnouncementPageModule:()=>Mn});var g=a(3493),x=a(6895),_=a(433),s=a(9267),l=a(677),h=a(6444),o=a(5203),i=a(7579),m=a(9751),c=a(515),P=a(8505),Z=a(262),n=a(4650),I=a(1228),w=a(759),E=a(3755),z=a(529),J=a(6578),b=a(4897);let D=(()=>{class t extends E.O{constructor(e,r,d){super(e,r),this.http=e,this.storageService=r,this.adminAnnouncementService=d,this.setApi="category"}order(e){return this.adminAnnouncementService.order(e)}}return t.\u0275fac=function(e){return new(e||t)(n.LFG(z.eN),n.LFG(J.V),n.LFG(b.E))},t.\u0275prov=n.Yz7({token:t,factory:t.\u0275fac}),t})();var F=a(8039),Q=a(6388),k=a(3131),Y=a(7253),W=a(2129),j=a(7868),K=a(8447),N=a(1049),R=a(513),U=a(6819),S=a(8660),H=a(8704);let B=(()=>{class t{transform(e,r){return!!(e&&e.length>r)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Yjl({name:"isInfiniteScroll",type:t,pure:!0}),t})();var V=a(8687),G=a(2339);let X=(()=>{class t{transform(e,r){return e&&e?.image?r?`/images/icons/white/${e.image.filename}`:`/images/icons/black/${e.image.filename}`:"./../../../../assets/thumbnail.svg"}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Yjl({name:"announcementCategoryToggleIcon",type:t,pure:!1}),t})();var q=a(5747),nn=a(9141);let en=(()=>{class t{transform(e){if(e&&e?.slug)return"classificados"===e?.slug||"imoveis"===e?.slug}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275pipe=n.Yjl({name:"isPriceCategoryAnnouncement",type:t,pure:!0}),t})();function tn(t,u){if(1&t&&(n._UZ(0,"ion-icon",16),n.ALo(1,"announcementCategoryToggleIcon")),2&t){const e=u.$implicit,r=n.oxw(2);n.Q6J("src",n.xi3(1,1,r.category,e.isDark))}}const L=function(t){return["/pagina",t]};function on(t,u){if(1&t&&(n.TgZ(0,"picture",35),n._UZ(1,"source",36),n.ALo(2,"galeryValues"),n._UZ(3,"source",37),n.ALo(4,"galeryValues"),n._UZ(5,"source",38),n.ALo(6,"galeryValues"),n._UZ(7,"source",39),n.ALo(8,"galeryValues"),n._UZ(9,"img",40),n.ALo(10,"galeryValues"),n.ALo(11,"attrTitle"),n.ALo(12,"attrTitle"),n.qZA()),2&t){const e=u.$implicit,r=n.oxw().$implicit;n.Q6J("routerLink",n.VKq(35,L,null==r?null:r.slug)),n.xp6(1),n.Q6J("srcset",n.Dn7(2,9,e,"filename","/images/galery/small/")),n.xp6(2),n.Q6J("srcset",n.Dn7(4,13,e,"filename","/images/galery/small/")),n.xp6(2),n.Q6J("srcset",n.Dn7(6,17,e,"filename","/images/galery/medium/")),n.xp6(2),n.Q6J("srcset",n.Dn7(8,21,e,"filename","/images/galery/x-small/")),n.xp6(2),n.Q6J("src",n.Dn7(10,25,e,"filename","/images/galery/large/"),n.LSH)("title",n.xi3(11,29,r,"title"))("alt","Imagem "+(null==r?null:r.title)),n.uIk("data-message",n.xi3(12,32,r,"title"))}}function rn(t,u){if(1&t&&(n.TgZ(0,"ion-text",41)(1,"span"),n._uU(2),n.ALo(3,"isAnnouncementValuePrice"),n.qZA()()),2&t){const e=n.oxw().$implicit;n.xp6(2),n.hij(" ",n.lcZ(3,1,e),"")}}function an(t,u){if(1&t&&(n.TgZ(0,"span",42),n._uU(1),n.ALo(2,"isAnnouncementValuePrice"),n.qZA()),2&t){const e=n.oxw().$implicit;n.xp6(1),n.hij(" ",n.lcZ(2,1,e),"")}}const sn=function(t){return{end:t}};function cn(t,u){if(1&t&&(n.TgZ(0,"ion-reorder")(1,"ion-item",20)(2,"ion-card")(3,"ion-row")(4,"ion-col",21),n.YNc(5,on,13,37,"picture",22),n.qZA(),n.TgZ(6,"ion-col",23)(7,"ion-card-header")(8,"ion-card-subtitle")(9,"ion-text",24),n.ALo(10,"workDays"),n.TgZ(11,"span",25),n.ALo(12,"attrTitle"),n.ALo(13,"attrTitle"),n._uU(14),n.ALo(15,"workDays"),n.qZA()()(),n.TgZ(16,"ion-card-title",25),n._uU(17),n.ALo(18,"lnWords"),n.qZA()(),n.TgZ(19,"ion-card-content")(20,"ion-card-title"),n.YNc(21,rn,4,3,"ion-text",26),n.ALo(22,"isPriceCategoryAnnouncement"),n.qZA(),n.TgZ(23,"ion-card-subtitle",27)(24,"address",25),n.ALo(25,"attrTitle"),n.ALo(26,"attrTitle"),n._uU(27),n.ALo(28,"citie"),n.qZA()(),n.TgZ(29,"ion-card-subtitle")(30,"address",25),n.ALo(31,"attrTitle"),n.ALo(32,"attrTitle"),n._uU(33),n.ALo(34,"address"),n.qZA()()()(),n.TgZ(35,"ion-col",28)(36,"ion-card-content",29),n.YNc(37,an,3,3,"span",30),n.ALo(38,"isPriceCategoryAnnouncement"),n.TgZ(39,"ion-button",31),n.ALo(40,"attrTitle"),n.ALo(41,"attrTitle"),n._uU(42," Ver p\xe1gina "),n.qZA()()(),n.TgZ(43,"ion-col",32)(44,"ion-card-content",33),n.ALo(45,"typePlanFree"),n.TgZ(46,"ion-button",31),n.ALo(47,"attrTitle"),n.ALo(48,"attrTitle"),n._uU(49," Ver p\xe1gina "),n.qZA()()()()(),n._UZ(50,"ion-icon",34),n.qZA()()),2&t){const e=u.$implicit,r=n.oxw(3);n.xp6(4),n.Q6J("hidden",0===(null==e||null==e.galery?null:e.galery.length)),n.xp6(1),n.Q6J("ngForOf",null==e?null:e.galery),n.xp6(4),n.Q6J("color","Aberto"===n.lcZ(10,27,null==e?null:e.workDays)?"success":"danger"),n.xp6(2),n.Q6J("title",n.xi3(12,29,e,"workDays")),n.uIk("data-message",n.xi3(13,32,e,"workDays")),n.xp6(3),n.hij(" ",n.lcZ(15,35,null==e?null:e.workDays)," "),n.xp6(2),n.Q6J("title",null==e?null:e.title),n.uIk("data-message",null==e?null:e.title),n.xp6(1),n.hij("",n.xi3(18,37,null==e?null:e.title,38)," "),n.xp6(4),n.Q6J("ngIf",n.lcZ(22,40,r.category)),n.xp6(3),n.Q6J("title",n.xi3(25,42,e,"citie")),n.uIk("data-message",n.xi3(26,45,e,"citie")),n.xp6(3),n.hij(" ",n.lcZ(28,48,e)," "),n.xp6(3),n.Q6J("title",n.xi3(31,50,e,"address")),n.uIk("data-message",n.xi3(32,53,e,"address")),n.xp6(3),n.hij(" ",n.lcZ(34,56,null==e?null:e.address)," "),n.xp6(2),n.Q6J("hidden",0===(null==e||null==e.galery?null:e.galery.length)),n.xp6(2),n.Q6J("ngIf",n.lcZ(38,58,r.category)),n.xp6(2),n.Q6J("routerLink",n.VKq(74,L,null==e?null:e.slug))("title",n.xi3(40,60,e,"title")),n.uIk("data-message",n.xi3(41,63,e,"title")),n.xp6(4),n.Q6J("hidden",0!==(null==e||null==e.galery?null:e.galery.length)),n.xp6(1),n.Q6J("ngClass",n.VKq(76,sn,n.lcZ(45,66,e))),n.xp6(2),n.Q6J("routerLink",n.VKq(78,L,null==e?null:e.slug))("title",n.xi3(47,68,e,"title")),n.uIk("data-message",n.xi3(48,71,e,"title")),n.xp6(4),n.Q6J("hidden",!r.isOrder)}}function ln(t,u){if(1&t){const e=n.EpF();n.TgZ(0,"ion-col",8)(1,"ion-list",17)(2,"ion-reorder-group",18),n.NdJ("ionItemReorder",function(d){n.CHM(e);const v=n.oxw(2);return n.KtG(v.doReorder(d))}),n.YNc(3,cn,51,80,"ion-reorder",19),n.qZA()()()}if(2&t){const e=n.oxw(2);n.xp6(2),n.Q6J("disabled",!e.isOrder),n.xp6(1),n.Q6J("ngForOf",e.announcement)}}const dn=function(){return["/cadastrar"]};function un(t,u){1&t&&(n.TgZ(0,"div",44)(1,"ion-text",45)(2,"p"),n._uU(3,"N\xe3o \xe1 an\xfancios no momento."),n.qZA()(),n.TgZ(4,"ion-button",46),n._UZ(5,"ion-icon",47),n._uU(6," Crie uma conta gr\xe1tis. "),n.qZA()()),2&t&&(n.xp6(4),n.Q6J("routerLink",n.DdM(1,dn)))}function gn(t,u){if(1&t){const e=n.EpF();n.TgZ(0,"div",44)(1,"ion-text",45)(2,"p"),n._uU(3,"N\xe3o \xe1 an\xfancios no momento."),n.qZA()(),n.TgZ(4,"ion-button",48),n.NdJ("click",function(){n.CHM(e);const d=n.oxw(3);return n.KtG(d.back())}),n._UZ(5,"ion-icon",49),n._uU(6," Voltar "),n.qZA()()}}function mn(t,u){if(1&t&&(n.TgZ(0,"ion-col",8),n.YNc(1,un,7,2,"div",43),n.YNc(2,gn,7,0,"div",43),n.qZA()),2&t){const e=n.oxw(2);n.xp6(1),n.Q6J("ngIf",!e.isAuth),n.xp6(1),n.Q6J("ngIf",e.isAuth)}}function pn(t,u){if(1&t&&(n.TgZ(0,"ion-card")(1,"ion-text",50)(2,"p"),n._uU(3,"FIM"),n.qZA(),n.TgZ(4,"p"),n._uU(5),n.ALo(6,"isAnnouncement"),n.qZA()()()),2&t){const e=n.oxw(2);n.xp6(5),n.hij(" ",n.lcZ(6,1,e.announcement)&&e.announcement.length," An\xfancios ")}}function _n(t,u){if(1&t){const e=n.EpF();n.TgZ(0,"ion-infinite-scroll",51),n.NdJ("ionInfinite",function(d){n.CHM(e);const v=n.oxw(2);return n.KtG(v.findMoreCategory(d))}),n._UZ(1,"ion-infinite-scroll-content",52),n.qZA()}}function fn(t,u){if(1&t&&(n.TgZ(0,"ion-row")(1,"ion-col",8)(2,"ion-text",9),n.YNc(3,tn,2,4,"ion-icon",10),n.ALo(4,"async"),n.TgZ(5,"h1",11),n.ALo(6,"attrTitle"),n.ALo(7,"attrTitle"),n._uU(8),n.qZA()()(),n.YNc(9,ln,4,2,"ion-col",12),n.ALo(10,"isInfiniteScroll"),n.YNc(11,mn,3,2,"ng-template",null,13,n.W1O),n.YNc(13,pn,7,3,"ion-card",14),n.YNc(14,_n,2,0,"ion-infinite-scroll",15),n.ALo(15,"isInfiniteScroll"),n.qZA()),2&t){const e=n.MAs(12),r=n.oxw();n.xp6(3),n.Q6J("ngIf",n.lcZ(4,8,r.dark$)),n.xp6(2),n.Q6J("title",n.xi3(6,10,r.category,"name")),n.uIk("data-message",n.xi3(7,13,r.category,"name")),n.xp6(3),n.hij(" ",r.category.name," "),n.xp6(1),n.Q6J("ngIf",n.xi3(10,16,r.announcement,0))("ngIfElse",e),n.xp6(4),n.Q6J("ngIf",!r.endListCategory),n.xp6(1),n.Q6J("ngIf",n.xi3(15,19,r.announcement,11))}}const hn=function(t){return{hide:t}};function vn(t,u){if(1&t){const e=n.EpF();n.ynx(0),n.TgZ(1,"ion-row")(2,"ion-col",8)(3,"div",44)(4,"div")(5,"ion-text",45)(6,"p",54),n._uU(7," Erro ao carregar an\xfancios. "),n.qZA()(),n.TgZ(8,"ion-refresher",55),n.NdJ("ionRefresh",function(d){n.CHM(e);const v=n.oxw(2);return n.KtG(v.refresher(d))}),n._UZ(9,"ion-refresher-content",56),n.qZA(),n.TgZ(10,"ion-text",45)(11,"ion-button",57),n.NdJ("mousedown",function(){n.CHM(e);const d=n.oxw(2);return n.KtG(d.hideMenssage())}),n._uU(12,"Puxe para atualizar "),n._UZ(13,"ion-icon",58),n.qZA()()()()()(),n.BQk()}if(2&t){const e=n.oxw(2);n.xp6(6),n.Q6J("ngClass",n.VKq(1,hn,e.menssage))}}function xn(t,u){1&t&&(n.TgZ(0,"span")(1,"div",64),n._UZ(2,"ion-skeleton-text",65),n.TgZ(3,"div")(4,"div",66),n._UZ(5,"ion-skeleton-text",63)(6,"ion-skeleton-text",67)(7,"ion-skeleton-text",68),n.qZA(),n.TgZ(8,"div",69),n._UZ(9,"ion-skeleton-text",70),n.qZA()()()())}function An(t,u){if(1&t&&(n.TgZ(0,"ion-row",59)(1,"ion-col",60)(2,"span",61),n._UZ(3,"ion-skeleton-text",62)(4,"ion-skeleton-text",63),n.qZA()(),n.TgZ(5,"ion-col",8),n.YNc(6,xn,10,0,"span",19),n.qZA()()),2&t){const e=n.oxw(2);n.xp6(6),n.Q6J("ngForOf",e.sizeSkeleton)}}function Pn(t,u){if(1&t&&(n.YNc(0,vn,14,3,"ng-container",2),n.ALo(1,"async"),n.YNc(2,An,7,1,"ng-template",null,53,n.W1O)),2&t){const e=n.MAs(3),r=n.oxw();n.Q6J("ngIf",n.lcZ(1,2,r.error))("ngIfElse",e)}}function yn(t,u){if(1&t){const e=n.EpF();n.TgZ(0,"ion-fab",71)(1,"ion-fab-button",72),n._UZ(2,"ion-icon",73),n.qZA(),n.TgZ(3,"ion-fab-list",74)(4,"ion-fab-button",75),n.NdJ("click",function(){n.CHM(e);const d=n.oxw();return n.KtG(d.orderList())}),n._UZ(5,"ion-icon",76),n.qZA()()()}}const Cn=[{path:"",component:(()=>{class t{constructor(e,r,d,v,f,p,y,O,M,T){this.navCtrl=e,this.authService=r,this.route=d,this.homeService=v,this.categoryAnnouncementService=f,this.loadingService=p,this.messageService=y,this.helpService=O,this.allowAdPipe=M,this.moduleDarkService=T,this.error=new i.x,this.endListCategory=!0,this.fab=!1,this.sizeSkeleton=[1,2,3,4,5,6],this.dark$=new m.y,this.limit=12,this.offset=0,this.page=1}ngOnInit(){this.findCategory(),this.getIsBtnOrder(),this.setAuth(),this.getDark()}getDark(){this.dark$=this.moduleDarkService.darkAsObservable()}back(){this.navCtrl.back()}refresher(e){this.findCategory(),e.target.complete()}hideMenssage(){this.menssage=!0}orderList(){this.isOrder=!this.isOrder}isSaveOrder(e){e||(this.isOrder=e),this.sendOrder=e}doReorder(e){e&&(this.sendOrder=!0,this.announcement=e.detail.complete(this.announcement))}logScrolling(e){this.fab=e.detail.scrollTop>500}saveOrder(){const e=this.loadingService.show("Ordenar an\xfancios..."),r=this.announcement.map(d=>d.id);r&&r.length>0&&this.authService.getCsrf&&(this.$order=this.categoryAnnouncementService.order({order:r,_csrf:this.authService.getCsrf}).subscribe({next:v=>{setTimeout(()=>{this.sendOrder=!1,this.isOrder=!1},3500),v?.message&&this.messageService.success(v?.message,e,this.$order)},error:v=>this.messageService.error(v,e,this.$order)}))}findMoreCategory(e){this.calculatePagination();const r=this.getId();if(r)return this.$categoryAnnouncement=this.categoryAnnouncementService.findOne("list",{limit:this.limit,offset:this.offset,id:r}).subscribe({next:({announcement:v})=>{const f=v.map(p=>{var y,O,M,T,$;if(p?.plan&&null!==(y=p?.user)&&void 0!==y&&y.plan&&null!==(M=null===(O=p?.announcement)||void 0===O?void 0:O.user)&&void 0!==M&&M.email)return p.plan=Object.assign({},null===($=null===(T=p?.announcement)||void 0===T?void 0:T.user)||void 0===$?void 0:$.plan),p.user={email:p?.announcement.user.email},"free"===p.plan.type&&(p.galery=[]),null==p||delete p.announcement,p}).filter(p=>p&&!this.allowAdPipe.transform(p)?p:null);return this.success(e,f)},error:d=>this.error.next(!0),complete:()=>this.helpService.delay(this.$categoryAnnouncement.unsubscribe(),2e3)})}findCategory(){const e=this.getId();if(e)return this.findOne(e)}getId(){if(this.homeService.getCategories&&this.homeService.getCategories.length>0){const{slug:e}=this.route.snapshot.params,r=this.homeService.getCategories.findIndex(v=>v?.slug===e);return this.homeService.getCategories[r].id}}findOne(e){return this.categoryAnnouncement$=this.categoryAnnouncementService.findOne("list",{limit:this.limit,offset:this.offset,id:e}).pipe((0,P.b)(({category:r,announcement:d})=>{const v=d.map(f=>{var p,y;if(f?.announcement)return f.plan=Object.assign({},null===(y=null===(p=f?.announcement)||void 0===p?void 0:p.user)||void 0===y?void 0:y.plan),f.user={email:f?.announcement.user.email},"free"===f.plan.type&&(f.galery=[]),null==f||delete f.announcement,f}).filter(f=>{if(f&&!this.allowAdPipe.transform(f))return f});this.category=r,this.announcement=v}),(0,Z.K)(r=>(this.error.next(!0),c.E)))}calculatePagination(){this.page+=1,this.offset=(this.page-1)*this.limit}success(e,r){this.setMoreData(r),this.updateScrollEvent(e,r)}updateScrollEvent(e,r){e.target.complete(),r.length<8&&(this.endListCategory=!1,e.target.disabled=!0)}setMoreData(e){if(Array.isArray(e))return e.forEach(r=>{r&&void 0!==typeof r&&this.announcement&&this.announcement.push(r)})}getIsBtnOrder(){this.authService.getUser&&(this.isBtnOrder="1"===this.authService.getUser.level)}setAuth(){this.authService.getUser&&(this.isAuth=this.authService.getUser.auth)}}return t.\u0275fac=function(e){return new(e||t)(n.Y36(s.SH),n.Y36(I.e),n.Y36(o.gz),n.Y36(w.Y),n.Y36(D),n.Y36(F.b),n.Y36(Q.e),n.Y36(k.f),n.Y36(Y.w),n.Y36(W.l))},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-announcement"]],viewQuery:function(e,r){if(1&e&&n.Gf(s.oz,5),2&e){let d;n.iGM(d=n.CRH())&&(r.reorderGroup=d.first)}},decls:12,vars:7,consts:[[3,"fullscreen"],["fixed",""],[4,"ngIf","ngIfElse"],["Error",""],["vertical","bottom","horizontal","center","slot","fixed","title","Salvar ordem da lista de an\xfancios","data-message","Salvar ordem da lista de an\xfancios"],["color","primary",3,"hidden","click"],["name","save","color","light"],["vertical","center","horizontal","end","slot","fixed","title","Ordenar an\xfancios","data-message","Ordenar categoria",4,"ngIf"],["size","12"],[1,"d-flex","guide-title"],["class","ion-margin-end","size","large",3,"src",4,"ngIf"],[1,"align-items",3,"title"],["size","12",4,"ngIf","ngIfElse"],["Empty",""],[4,"ngIf"],[3,"ionInfinite",4,"ngIf"],["size","large",1,"ion-margin-end",3,"src"],[1,"ion-no-padding"],[3,"disabled","ionItemReorder"],[4,"ngFor","ngForOf"],["lines","none","detail","false","color","none",1,"ion-no-padding"],["size-xl","2","size-lg","2","size-md","12","size-sm","12","size","12",1,"ion-no-padding",3,"hidden"],["class","cursor-pointer",3,"routerLink",4,"ngFor","ngForOf"],["size-xl","8","size-lg","8","size-md","8","size-sm","12","size","12",1,"ion-no-padding"],[3,"color"],[3,"title"],["class","ion-hide-md-up",4,"ngIf"],[1,"ion-margin-top","address"],["size-xl","2","size-lg","2","size-md","4","size-sm","12","size","12",1,"ion-no-padding",3,"hidden"],[1,"flex-1"],["class","ion-hide-md-down",4,"ngIf"],["shape","round",3,"routerLink","title"],["size-xl","4","size-lg","4","size-md","4","size-sm","12","size","12",1,"ion-no-padding",3,"hidden"],[1,"ion-float-xl-end","ion-float-lg-end","ion-float-md-end","ion-float-sm-none","ion-float-none","flex-1",3,"ngClass"],["name","reorder-three","color","medium",3,"hidden"],[1,"cursor-pointer",3,"routerLink"],["media","(max-width: 575.98px)",3,"srcset"],["media","(max-width: 767.98px) and (min-width: 576px)",3,"srcset"],["media","(max-width: 991.98px) and (min-width: 768px)",3,"srcset"],["media","(min-width: 992px)",3,"srcset"],[3,"src","title","alt"],[1,"ion-hide-md-up"],[1,"ion-hide-md-down"],["class","content-center",4,"ngIf"],[1,"content-center"],[1,"ion-text-center"],["title","Cadastrar an\xfancio","expand","block","shape","round",3,"routerLink"],["slot","icon-only","color","light","name","create"],["title","Voltar","expand","block","shape","round",3,"click"],["slot","icon-only","color","light","name","arrow-back-circle"],["color","primary",1,"ion-text-center"],[3,"ionInfinite"],["loadingSpinner","bubbles","loadingText","Carregando mais dados\u2026"],["loadingNoError",""],[3,"ngClass"],["slot","fixed",3,"ionRefresh"],["pullingIcon","chevron-down-circle-outline","pullingText","Puxe para baixo","refreshingSpinner","circles","refreshingText","Atualizar..."],[3,"mousedown"],["name","arrow-down-circle",1,"ion-margin-start"],[1,"ion-margin-horizontal"],["size","12",1,"ion-margin-vertical"],[1,"header"],["animated","",1,"icons"],["animated","",1,"title"],[1,"cards"],["animated","",1,"image"],[1,"item_cards"],["animated","",1,"address"],["animated","",1,"address_2"],[1,"item_cards_btn"],["animated","",1,"btn"],["vertical","center","horizontal","end","slot","fixed","title","Ordenar an\xfancios","data-message","Ordenar categoria"],["size","small"],["name","ellipsis-vertical"],["side","top"],["color","primary","title","Ordenar categorias","data-message","Ordenar categorias",3,"click"],["name","reorder-four"]],template:function(e,r){if(1&e&&(n._UZ(0,"app-header-component"),n.TgZ(1,"ion-content",0)(2,"ion-grid",1),n.YNc(3,fn,16,22,"ion-row",2),n.ALo(4,"async"),n.YNc(5,Pn,4,4,"ng-template",null,3,n.W1O),n.TgZ(7,"ion-fab",4)(8,"ion-fab-button",5),n.NdJ("click",function(){return r.saveOrder()}),n._UZ(9,"ion-icon",6),n.qZA()(),n.YNc(10,yn,6,0,"ion-fab",7),n.qZA()(),n._UZ(11,"app-footer")),2&e){const d=n.MAs(6);n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(2),n.Q6J("ngIf",n.lcZ(4,5,r.categoryAnnouncement$))("ngIfElse",d),n.xp6(5),n.Q6J("hidden",!r.sendOrder),n.xp6(2),n.Q6J("ngIf",r.isBtnOrder&&r.error)}},dependencies:[x.mk,x.sg,x.O5,s.YG,s.PM,s.FN,s.Zi,s.tO,s.Dq,s.wI,s.W2,s.IJ,s.W4,s.zq,s.jY,s.gu,s.ju,s.MB,s.Ie,s.q_,s.nJ,s.Wo,s.Nh,s.oz,s.Nd,s.CK,s.yW,s.YI,o.rH,j.G,K.S,x.Ov,N.J,R.y,U.q,S.j,H.w,B,V._,G.Q,X,q.d,nn.v,en],styles:["ion-card-header[_ngcontent-%COMP%]{padding-top:5px!important;padding-bottom:5px!important;margin-top:0!important;margin-bottom:0!important}ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:14px;margin-top:0!important}ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:11px}@media only screen and (max-width: 767.98px){ion-card-header[_ngcontent-%COMP%]   ion-card-title[_ngcontent-%COMP%]{font-size:15px}ion-card-header[_ngcontent-%COMP%]   ion-card-subtitle[_ngcontent-%COMP%]{font-size:15px;margin-top:16px;margin-bottom:16px}}ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column-reverse}.align-items[_ngcontent-%COMP%]{display:flex;align-items:center}ion-item[_ngcontent-%COMP%]{--padding-end: 0px;--inner-padding-end: 0px}ion-card[_ngcontent-%COMP%]{width:100%}@media only screen and (min-width: 992px){ion-card[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]{display:block;width:100%;height:100%}ion-card[_ngcontent-%COMP%]   picture[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{display:block;width:100%;height:100%;object-fit:cover}}ion-card[_ngcontent-%COMP%]   ion-card-content[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:stretch}.d-inline[_ngcontent-%COMP%]{display:inline}ion-card-header.ios[_ngcontent-%COMP%]{display:flex;flex-flow:column}.d-flex[_ngcontent-%COMP%]{display:flex;align-items:center;font-size:16px}.header[_ngcontent-%COMP%]{display:flex}.header[_ngcontent-%COMP%]   .icons[_ngcontent-%COMP%]{width:32px;height:32px;border-radius:50px;margin-right:16px}.header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{max-width:25%;height:32px}.cards[_ngcontent-%COMP%]{display:flex}.cards[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{width:100%;display:flex;margin-bottom:16px}@media only screen and (max-width: 992px){.cards[_ngcontent-%COMP%]{justify-content:space-evenly;flex-direction:column}}.cards[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{max-width:180px;height:70px}@media only screen and (max-width: 992px){.cards[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]{min-width:100%;height:280px}}.cards[_ngcontent-%COMP%]   .item_cards[_ngcontent-%COMP%]{width:100%;display:flex;flex-direction:column;margin-left:16px}@media only screen and (max-width: 992px){.cards[_ngcontent-%COMP%]   .item_cards[_ngcontent-%COMP%]{width:60%}}.cards[_ngcontent-%COMP%]   .item_cards[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{margin-top:12px;max-width:250px;height:16px}.cards[_ngcontent-%COMP%]   .item_cards[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{max-width:140px;height:10px}.cards[_ngcontent-%COMP%]   .item_cards[_ngcontent-%COMP%]   .address_2[_ngcontent-%COMP%]{margin-top:12px;max-width:350px;height:10px}.cards[_ngcontent-%COMP%]   .item_cards_btn[_ngcontent-%COMP%]{display:flex;width:100%;justify-content:flex-end}@media only screen and (max-width: 992px){.cards[_ngcontent-%COMP%]   .item_cards_btn[_ngcontent-%COMP%]{width:39.98%}}.cards[_ngcontent-%COMP%]   .item_cards_btn[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%]{align-self:flex-start;max-width:100px;height:20px;border-radius:50px}.flex-1[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:column;height:100%}.flex-1.end[_ngcontent-%COMP%]{justify-content:end}.flex-1[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{align-self:center}.flex-1[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{align-self:center}@media only screen and (max-width: 767.98px){.flex-1[_ngcontent-%COMP%]   ion-button[_ngcontent-%COMP%]{align-self:flex-end}}ion-card-content[_ngcontent-%COMP%]   .address[_ngcontent-%COMP%]{padding-bottom:0}ion-card-content[_ngcontent-%COMP%]   address[_ngcontent-%COMP%]{font-size:12px}"]}),t})()}];let On=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[o.Bz.forChild(Cn),o.Bz]}),t})(),Mn=(()=>{class t{}return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[D,b.E,U.q,S.j],imports:[x.ez,_.u5,s.Pc,On,l.O,h._,g.d]}),t})()},6819:(C,A,a)=>{a.d(A,{q:()=>_});var g=a(9666),x=a(4650);let _=(()=>{class s{transform(h){return g.f.formatAddress(h)}}return s.\u0275fac=function(h){return new(h||s)},s.\u0275pipe=x.Yjl({name:"address",type:s,pure:!0}),s})()},9141:(C,A,a)=>{a.d(A,{v:()=>x});var g=a(4650);let x=(()=>{class _{transform(l){var h,o;if(l&&l?.price&&null!==(h=l?.price)&&void 0!==h&&h.value)return null===(o=l?.price)||void 0===o?void 0:o.value}}return _.\u0275fac=function(l){return new(l||_)},_.\u0275pipe=g.Yjl({name:"isAnnouncementValuePrice",type:_,pure:!1}),_})()},2339:(C,A,a)=>{a.d(A,{Q:()=>x});var g=a(4650);let x=(()=>{class _{transform(l,h=0){return!!(l&&l?.length>h)}}return _.\u0275fac=function(l){return new(l||_)},_.\u0275pipe=g.Yjl({name:"isAnnouncement",type:_,pure:!0}),_})()},8704:(C,A,a)=>{a.d(A,{w:()=>_});var g=a(9666),x=a(4650);let _=(()=>{class s{transform(h,o){var i,m;const c=h,P=o;if(c){if("title"===P)return`Clique para a p\xe1gina ${c?.title}`;if("citie"===P)return`Cidade ${null===(i=c?.citie)||void 0===i?void 0:i.city} ${null===(m=c?.citie)||void 0===m?void 0:m.uf}`;if("address"===P&&c?.address)return`Endere\xe7o ${g.f.formatAddress(c?.address)}`;if("name"===P)return`P\xe1gina de ${c?.name}`;if("workDays"===P&&c?.workDays)return`${c?.title} est\xe1 ${g.f.showWorkDays(c?.workDays)}`;if("galery"===P)return`Galeria de imagens ${c?.title} imagem`}return null}}return s.\u0275fac=function(h){return new(h||s)},s.\u0275pipe=x.Yjl({name:"attrTitle",type:s,pure:!0}),s})()},8660:(C,A,a)=>{a.d(A,{j:()=>_});var g=a(9666),x=a(4650);let _=(()=>{class s{transform(h){return g.f.showWorkDays(h)}}return s.\u0275fac=function(h){return new(h||s)},s.\u0275pipe=x.Yjl({name:"workDays",type:s,pure:!0}),s})()},9666:(C,A,a)=>{a.d(A,{f:()=>s});var g=a(5439),_=a(4650);let s=(()=>{class l{static contactMask(o,i){const m=/^([0-9]{2})([0-9]{3})([0-9]{2,3})([0-9]{2,3})/,c=i;if(o)return"string"==typeof o?"whatsapp"===c?o.replace(m,"($1)$2-$3-$4"):"phone"===c?o.replace(/^([0-9]{2})([0-9]{4})([0-9]{4})/,"($1)$2-$3"):"mobilePhone"===c?o.replace(m,"($1)$2-$3-$4"):"cep"===c?o.replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3"):null:"whatsapp"===c?String(o).replace(m,"($1)$2-$3-$4"):"phone"===c?String(o).replace(/^([0-9]{2})([0-9]{4})([0-9]{4})/,"($1)$2-$3"):"mobilePhone"===c?String(o).replace(m,"($1)$2-$3-$4"):"cep"===c?String(o).replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3"):null}static mask(o){return"number"==typeof o.zip_code?String(o.zip_code).replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3"):o.zip_code&&o.zip_code.replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3")}static formatAddress(o){const i=o;return i&&i?.complement?`${i?.street}, ${i?.district}, Lt ${i?.allotment}, Qd ${i?.block}, n\xba ${i?.numberr}, cep ${l.mask(i)}, ${i?.complement}`:i?`${i?.street}, ${i?.district}, Lt ${i?.allotment}, Qd ${i?.block}, n\xba ${i?.numberr}, cep ${l.mask(i)}`:null}static showWorkDays(o){const i=g.weekdays(),m=o;if(m){const{sunday:c,monday:P,tuesday:Z,thursday:n,wednesday:I,friday:w,saturday:E}=m;switch(g().format("dddd")){case i[0]:return l.businessHours(c);case i[1]:return l.businessHours(P);case i[2]:return l.businessHours(Z);case i[3]:return l.businessHours(I);case i[4]:return l.businessHours(n);case i[5]:return l.businessHours(w);case i[6]:return l.businessHours(E)}}return null}static businessHours(o){const i=g().format("HH:mm:ss");return o?.startInterval&&o.endInterval?o?.start&&o?.startInterval&&i>=g(o?.start).format("HH:mm:ss")&&i<=g(o?.startInterval).format("HH:mm:ss")?"Aberto":i>=g(o?.startInterval).format("HH:mm:ss")&&i<=g(o?.endInterval).format("HH:mm:ss")?"Fechado":i>=g(o?.endInterval).format("HH:mm:ss")&&i<=g(o?.end).format("HH:mm:ss")?"Aberto":"Fechado":o?.start&&i>=g(o?.start).format("HH:mm:ss")&&i<=g(o?.end).format("HH:mm:ss")?"Aberto":"Fechado"}}return l.\u0275fac=function(o){return new(o||l)},l.\u0275prov=_.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8039:(C,A,a)=>{a.d(A,{b:()=>s});var g=a(655),x=a(4650),_=a(9267);let s=(()=>{class l{constructor(o){this.loadingController=o}show(o){return(0,g.mG)(this,void 0,void 0,function*(){const i=this.loadingController.create({message:o,spinner:"bubbles"});return(yield i).present(),i})}}return l.\u0275fac=function(o){return new(o||l)(x.LFG(_.HT))},l.\u0275prov=x.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()}}]);