"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[9882],{9882:(I,C,e)=>{e.r(C),e.d(C,{DashboardPageModule:()=>q});var u=e(6895),_=e(433),d=e(9267),v=e(5203),f=e(8322),A=e(655),E=e(9646),x=e(6830),n=e(4650),h=e(1228),P=e(451),l=e(7868),s=e(8447),a=e(5620),r=e(1635);function p(o,m){if(1&o){const t=n.EpF();n.TgZ(0,"ion-row")(1,"ion-col",1)(2,"div",2)(3,"div")(4,"ion-button",3),n.NdJ("click",function(){n.CHM(t);const g=n.oxw();return n.KtG(g.createAnnouncement())}),n._UZ(5,"ion-icon",4),n._uU(6," Cadastrar an\xfancio "),n.qZA()()()()()}}let M=(()=>{class o{constructor(t){this.modalController=t}createAnnouncement(){var t,i;return(0,A.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:r.A,componentProps:{action:"announcement",label:"Cadastrar an\xfancio",announcement:{_csrf:null===(t=this.user)||void 0===t?void 0:t._csrf,title:null,description:null,userId:null===(i=this.user)||void 0===i?void 0:i.id}}})).present()})}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(d.IN))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-button-create-announcement"]],inputs:{user:"user",isButton:"isButton"},decls:1,vars:1,consts:[[4,"ngIf"],["size","12"],[1,"content-center"],["expand","block","shape","round",3,"click"],["slot","start","name","create",1,"ion-margin-end"]],template:function(t,i){1&t&&n.YNc(0,p,7,0,"ion-row",0),2&t&&n.Q6J("ngIf",i.isButton)},dependencies:[u.O5,d.YG,d.wI,d.gu,d.Nd]}),o})();function D(o,m){if(1&o&&(n.TgZ(0,"ion-col",8),n._UZ(1,"app-card-announcement-component",9),n.qZA()),2&o){const t=m.$implicit;n.xp6(1),n.Q6J("announcement",t)}}function Z(o,m){if(1&o){const t=n.EpF();n.TgZ(0,"ion-grid",2)(1,"ion-row")(2,"ion-col",3)(3,"ion-button",4),n.NdJ("click",function(){const c=n.CHM(t).$implicit,O=n.oxw();return n.KtG(O.openPlan(c))}),n._uU(4," adicionar mais an\xfancios "),n._UZ(5,"ion-icon",5),n.qZA()(),n.YNc(6,D,2,1,"ion-col",6),n.TgZ(7,"ion-col",3),n._UZ(8,"app-button-create-announcement",7),n.qZA()()()}if(2&o){const t=m.$implicit,i=n.oxw();n.xp6(2),n.Q6J("hidden",0===t.length),n.xp6(4),n.Q6J("ngForOf",t),n.xp6(1),n.Q6J("hidden",0!==t.length),n.xp6(1),n.Q6J("isButton",0===t.length)("user",i.user)}}let b=(()=>{class o{constructor(t,i,g,c){this.authService=t,this.activatedRoute=i,this.modalController=g,this.modalService=c}ngOnInit(){this.init()}openPlan(t){return(0,A.mG)(this,void 0,void 0,function*(){return yield(yield this.modalController.create({component:x.F,cssClass:"modal-wrapper",componentProps:{announcement:t[0]},enterAnimation:this.modalService.enterAnimation,leaveAnimation:this.modalService.leaveAnimation})).present()})}init(){this.loadAnnouncement(),this.loadUser()}loadUser(){this.authService.getUser&&(this.user=this.authService.getUser)}loadAnnouncement(){var t,i,g;this.announcement$=(0,E.of)(null===(g=null===(i=null===(t=this.activatedRoute)||void 0===t?void 0:t.snapshot)||void 0===i?void 0:i.data)||void 0===g?void 0:g.announcement)}}return o.\u0275fac=function(t){return new(t||o)(n.Y36(h.e),n.Y36(v.gz),n.Y36(d.IN),n.Y36(P.Z))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-dashboard"]],decls:5,vars:4,consts:[[3,"fullscreen"],["fixed","",4,"ngIf"],["fixed",""],["size","12",3,"hidden"],[1,"ion-margin-start",3,"click"],["slot","end","name","add"],["size","12",4,"ngFor","ngForOf"],[3,"isButton","user"],["size","12"],[3,"announcement"]],template:function(t,i){1&t&&(n._UZ(0,"app-header-component"),n.TgZ(1,"ion-content",0),n.YNc(2,Z,9,5,"ion-grid",1),n.ALo(3,"async"),n.qZA(),n._UZ(4,"app-footer")),2&t&&(n.xp6(1),n.Q6J("fullscreen",!0),n.xp6(1),n.Q6J("ngIf",n.lcZ(3,2,i.announcement$)))},dependencies:[u.sg,u.O5,d.YG,d.wI,d.W2,d.jY,d.gu,d.Nd,l.G,s.S,a.r,M,u.Ov],styles:["ul[_ngcontent-%COMP%]{list-style-type:none}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{display:flex;align-items:center;padding-top:4px;padding-bottom:4px}ul[_ngcontent-%COMP%]   li.flex-start[_ngcontent-%COMP%]{align-items:flex-start}ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px}ion-card-subtitle[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{padding-left:0}.state[_ngcontent-%COMP%]{display:flex;align-items:center;padding-top:4px;padding-bottom:4px}.state.flex-start[_ngcontent-%COMP%]{align-items:flex-start}.state[_ngcontent-%COMP%]   ion-icon[_ngcontent-%COMP%]{margin-right:8px}a[_ngcontent-%COMP%]{text-decoration:none}ion-accordion[_ngcontent-%COMP%]{border-radius:5px}.row[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-wrap:wrap}.row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]{flex:0 0 150px}.row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dt[_ngcontent-%COMP%]{margin-bottom:8px}.row[_ngcontent-%COMP%]   dl[_ngcontent-%COMP%]   dd[_ngcontent-%COMP%]{padding-top:4px;margin-left:16px;font-size:x-small}"]}),o})();var K=e(515),G=e(4004),Y=e(262),j=e(5866);let W=(()=>{class o{constructor(t,i){this.authAnnouncementService=t,this.authService=i}ngOnDestroy(){this.$userId.unsubscribe()}get userId(){return this._userId}set userId(t){this._userId=t}resolve(){if(this.$userId=this.authService.userObservable.subscribe({next:t=>{t?.id&&(this.userId=t.id)}}),this.userId)return this.authAnnouncementService.getAnnouncementFindOne({userId:this.userId}).pipe((0,G.U)(t=>t.map(i=>{var g,c,O;return i.category=Object.assign(Object.assign({},null===(g=i?.categoryAnnouncement)||void 0===g?void 0:g.category),{associationId:null===(c=i?.categoryAnnouncement)||void 0===c?void 0:c.id}),null==i||delete i.categoryAnnouncement,null===(O=i?.user)||void 0===O||delete O.plan,i})),(0,Y.K)(t=>(console.log(t),K.E)))}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(j.X),n.LFG(h.e))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();var J=e(8505),z=e(4111);let y=(()=>{class o{constructor(t){this.managementAnnouncementService=t}resolve(t){const{slug:i,acao:g}=t.params;if(i&&!g)return this.managementAnnouncementService.findOne("requirement/management/",{slug:i}).pipe((0,J.b)(c=>{var O,F,S,B,T,U,L,R;c&&(c.category=Object.assign({},null===(O=c?.categoryAnnouncement)||void 0===O?void 0:O.category),c.plan=Object.assign({},null===(S=null===(F=c?.announcement)||void 0===F?void 0:F.user)||void 0===S?void 0:S.plan),c.authSocial=Object.assign({},null===(T=null===(B=c?.announcement)||void 0===B?void 0:B.user)||void 0===T?void 0:T.authSocial),null==c||delete c.announcement,null===(U=c?.categoryAnnouncement)||void 0===U||delete U.catAdId,null===(L=c?.categoryAnnouncement)||void 0===L||delete L.announcementId,null===(R=c?.categoryAnnouncement)||void 0===R||delete R.message,this.managementAnnouncementService.setAnnouncement=c)}),(0,Y.K)(c=>(console.log(c),K.E)))}}return o.\u0275fac=function(t){return new(t||o)(n.LFG(z.O))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();const $=[{path:"",component:b,resolve:{announcement:W}},{path:":slug",canActivate:[f.x],canLoad:[f.x],resolve:{announcement:y},loadChildren:()=>Promise.all([e.e(6469),e.e(5757),e.e(8592),e.e(3254)]).then(e.bind(e,3254)).then(o=>o.AnnouncementPageModule)},{path:":slug/dias-da-semana",canActivate:[f.x],canLoad:[f.x],resolve:{announcement:y},loadChildren:()=>Promise.all([e.e(6469),e.e(5757),e.e(8592),e.e(3254)]).then(e.bind(e,3254)).then(o=>o.AnnouncementPageModule)}];let N=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[y,W],imports:[v.Bz.forChild($),v.Bz]}),o})();var Q=e(6444),X=e(677),H=e(3493),V=e(6819),w=e(8660),k=e(2119);let q=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[V.q,w.j],imports:[u.ez,_.u5,d.Pc,N,X.O,Q._,H.d,k.h]}),o})()},5866:(I,C,e)=>{e.d(C,{X:()=>n});var u=e(8505),_=e(1135),d=e(3755),v=e(4650),f=e(529),A=e(6578),E=e(6388),x=e(9267);let n=(()=>{class h extends d.O{constructor(l,s,a,r){super(l,s),this.http=l,this.storageService=s,this.messageService=a,this.navCtrl=r,this.announcement=new _.X([]),this.setApi="announcement"}get announcementObservable(){return this.announcement.asObservable()}get getAnnouncement(){return this.announcement.value}set setAnnouncement(l){this.announcement.next(l)}set deleteAnnouncement(l){var s;const a=this.getAnnouncement.findIndex(r=>r?.id===l?.id);this.announcement.value.splice(a,1),this.setAnnouncement=null===(s=this.announcement)||void 0===s?void 0:s.value}set setDataAnnouncement(l){var s;const a=this.getAnnouncement.findIndex(r=>r?.id===l?.id);this.announcement.value[a]=l,this.setAnnouncement=null===(s=this.announcement)||void 0===s?void 0:s.value}set setCsrf(l){this.csrf=l}createAnnouncement(l){return this.create(l).pipe((0,u.b)(s=>{var a;return(null===(a=this.getAnnouncement)||void 0===a?void 0:a.length)>0?(this.getAnnouncement.unshift(s),this.setAnnouncement=this.getAnnouncement):this.setAnnouncement=[s],this.navCtrl.navigateBack(["/painel-de-controle","anuncio",s.slug])}))}delete(l){const{id:s,_csrf:a}=l;return this.destroy({id:s,_csrf:a},"management/")}drop(l){const{id:s,_csrf:a}=l;return this.destroy({id:s,_csrf:a},"management/drop")}toRestore(l){const{id:s,_csrf:a}=l;return this.patch({id:s,_csrf:a},"management/to-restore")}getAnnouncementAll(l,s){return this.index(`management/${l}`,Object.assign({},s))}getAnnouncementFindOne(l){return this.index("management/get",l)}}return h.\u0275fac=function(l){return new(l||h)(v.LFG(f.eN),v.LFG(A.V),v.LFG(E.e),v.LFG(x.SH))},h.\u0275prov=v.Yz7({token:h,factory:h.\u0275fac,providedIn:"root"}),h})()},1635:(I,C,e)=>{e.d(C,{A:()=>h});var u=e(4650),_=e(3131),d=e(9267),v=e(5866),f=e(4111),A=e(6388),E=e(8039),x=e(1616),n=e(8404);let h=(()=>{class P{constructor(s,a,r,p,M,D){this.helpService=s,this.modalController=a,this.authAnnouncementService=r,this.managementAnnouncementService=p,this.messageService=M,this.loadingService=D,this.attrButton={route:"/announcement",icon:"cloud-upload",label:"Salvar",aria:"Salvar an\xfancio.",title:"Salvar an\xfancio."}}ngOnInit(){this.getData()}importForm(s){return this.form=s}onSubmit(s){var a,r,p;let M;null!==(a=this.announcement)&&void 0!==a&&a.id?(s.value.id=null===(r=this.announcement)||void 0===r?void 0:r.id,M="Editando an\xfancio..."):(s.value.userId=null===(p=this.announcement)||void 0===p?void 0:p.userId,M="Cadastrando an\xfancio...");const D=this.loadingService.show(M);return this.send(s,D)}send(s,a){return this.$announcement=s.value.id?this.managementAnnouncementService.updateAnnouncement(s.value).subscribe({next:r=>r?.message&&this.messsage(r?.message,a),error:r=>this.messageService.error(r,a,this.$announcement)}):this.authAnnouncementService.createAnnouncement(s.value).subscribe({next:r=>r?.message&&this.messsage(r?.message,a),error:r=>this.messageService.error(r,a,this.$announcement)})}messsage(s,a){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(s,a,this.$announcement)}getData(){this.config=Object.assign({},this.announcement)}}return P.\u0275fac=function(s){return new(s||P)(u.Y36(_.f),u.Y36(d.IN),u.Y36(v.X),u.Y36(f.O),u.Y36(A.e),u.Y36(E.b))},P.\u0275cmp=u.Xpm({type:P,selectors:[["ng-component"]],inputs:{announcement:"announcement",action:"action",label:"label"},decls:4,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(s,a){1&s&&(u._UZ(0,"app-header-component-modal",0),u.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"app-form",3),u.NdJ("submitDataForm",function(p){return a.onSubmit(p)})("exportForm",function(p){return a.importForm(p)}),u.qZA()()()),2&s&&(u.Q6J("label",a.label),u.xp6(1),u.Q6J("fullscreen",!0),u.xp6(2),u.Q6J("inputConfig",a.config)("attrButton",a.attrButton))},dependencies:[d.W2,d.jY,x.U,n.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),P})()},6819:(I,C,e)=>{e.d(C,{q:()=>d});var u=e(9666),_=e(4650);let d=(()=>{class v{transform(A){return u.f.formatAddress(A)}}return v.\u0275fac=function(A){return new(A||v)},v.\u0275pipe=_.Yjl({name:"address",type:v,pure:!0}),v})()}}]);