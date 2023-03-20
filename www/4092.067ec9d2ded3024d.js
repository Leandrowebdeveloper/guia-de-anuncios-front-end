"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[4092],{8404:(p,E,e)=>{e.d(E,{s:()=>c});var s=e(4650),l=e(9267);let c=(()=>{class d{constructor(u,a){this.plt=u,this.modalController=a}ngOnInit(){this.isPlt=this.plt.is("desktop")}close(){return this.modalController.dismiss()}}return d.\u0275fac=function(u){return new(u||d)(s.Y36(l.t4),s.Y36(l.IN))},d.\u0275cmp=s.Xpm({type:d,selectors:[["app-header-component-modal"]],inputs:{label:"label"},decls:7,vars:3,consts:[["color","primary"],[3,"slot"],["size","small","shape","round",3,"click"],["color","light",3,"name"]],template:function(u,a){1&u&&(s.TgZ(0,"ion-header")(1,"ion-toolbar",0)(2,"ion-buttons",1)(3,"ion-fab-button",2),s.NdJ("click",function(){return a.close()}),s._UZ(4,"ion-icon",3),s.qZA()(),s.TgZ(5,"ion-title"),s._uU(6),s.qZA()()()),2&u&&(s.xp6(2),s.Q6J("slot",a.isPlt?"end":"start"),s.xp6(2),s.Q6J("name",a.isPlt?"close":"arrow-back"),s.xp6(2),s.Oqu(a.label))},dependencies:[l.Sm,l.W4,l.Gu,l.gu,l.wd,l.sr]}),d})()},2728:(p,E,e)=>{e.d(E,{i:()=>d});var s=e(9267),l=e(6895),c=e(4650);let d=(()=>{class i{}return i.\u0275fac=function(a){return new(a||i)},i.\u0275mod=c.oAB({type:i}),i.\u0275inj=c.cJS({imports:[s.Pc,l.ez]}),i})()},5447:(p,E,e)=>{e.d(E,{j:()=>v});var s=e(6895),l=e(433),c=e(9267),d=e(2728),i=e(1265),u=e(4650);let a=(()=>{class o{setButton(r){switch(r){case"register":return{route:"/category",icon:"create",label:"Cadastrar",fill:!1,aria:"Cadastrar categoria.",title:"Cadastrar categoria."};case"name":return{route:"/name",icon:"cloud-upload",label:"Salvar",fill:!1,aria:"Salvar nome e descri\xe7\xe3o.",title:"Salvar nome e descri\xe7\xe3o."};case"destroy":case"drop":return{route:"/destroy",icon:"trash",label:"Excluir categoria",fill:!1,aria:"Excluir categoria.",title:"Excluir categoria."};case"restore":return{route:"/restore",icon:"refresh",label:"Restaurar categoria",fill:!1,aria:"Restaurar categoria.",title:"Restaurar categoria."}}}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275prov=u.Yz7({token:o,factory:o.\u0275fac}),o})(),v=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275mod=u.oAB({type:o}),o.\u0275inj=u.cJS({providers:[a],imports:[s.ez,l.u5,c.Pc,i.Q,d.i]}),o})()},4111:(p,E,e)=>{e.d(E,{O:()=>t});var s=e(1135),l=e(8505),c=e(3755),d=e(4650),i=e(529),u=e(6578),a=e(6388),v=e(6895),o=e(1247);let t=(()=>{class r extends c.O{constructor(n,_,h,g,M){super(n,_),this.storageService=_,this.messageService=h,this.location=g,this.breadcrumbsService=M,this.announcement=new s.X(void 0),this.setApi="announcement"}get galery(){return this.announcement.value.galery}get announcementObservable(){return this.announcement.asObservable()}get getAnnouncement(){return this.announcement.value}set setAnnouncement(n){this.announcement.next(n)}set addItemGalery(n){var _;this.announcement.value.galery.unshift(n),this.setAnnouncement=null===(_=this.announcement)||void 0===_?void 0:_.value}set removeItemGalery(n){var _;const h=this.announcement.value.galery.findIndex(g=>g?.id===n?.id);this.announcement.value.galery.splice(h,1),this.setAnnouncement=null===(_=this.announcement)||void 0===_?void 0:_.value}set setGalery(n){var _;this.announcement.value.galery=n,this.setAnnouncement=null===(_=this.announcement)||void 0===_?void 0:_.value}set setBlockade(n){var _;this.announcement.value.blockade=n?.blockade,this.setAnnouncement=null===(_=this.announcement)||void 0===_?void 0:_.value}set setCategoryAnnouncement(n){var _;this.announcement.value.category=n?.category,this.announcement.value.categoryAnnouncement={id:n?.id},this.setAnnouncement=null===(_=this.announcement)||void 0===_?void 0:_.value}set setAnnouncementMessage(n){var _,h,g,M;const P=null===(h=null===(_=this.getAnnouncement)||void 0===_?void 0:_.messages)||void 0===h?void 0:h.length,D=this.getAnnouncement.messages.findIndex(A=>A?.id===n?.id);-1===D?P>0?null===(g=this.getAnnouncement)||void 0===g||g.messages.unshift(n):this.getAnnouncement.messages=[n]:null===(M=this.getAnnouncement)||void 0===M||M.messages.splice(D,1,n),this.setAnnouncement=this.getAnnouncement}set setTitleDescription(n){var _,h;this.announcement.value.title=n?.title,this.announcement.value.blockade=n?.blockade,this.announcement.value.description=n?.description,this.announcement.value.slug=n?.slug,null===(_=this.getAnnouncement)||void 0===_||_.messages.unshift(n.messages[0]),this.setAnnouncement=null===(h=this.announcement)||void 0===h?void 0:h.value,this.updateUrl(n)}updateAnnouncement(n){return this.patch(n).pipe((0,l.b)(_=>this.setTitleDescription=_))}blockade(n){return this.patch(n,"blockade").pipe((0,l.b)(_=>this.setBlockade=_))}updateUrl(n){const _=`/painel-de-controle/anuncio/${n?.slug}`;this.breadcrumbsService.setEvent(_),this.location.replaceState(_)}}return r.\u0275fac=function(n){return new(n||r)(d.LFG(i.eN),d.LFG(u.V),d.LFG(a.e),d.LFG(v.Ye),d.LFG(o.d))},r.\u0275prov=d.Yz7({token:r,factory:r.\u0275fac,providedIn:"root"}),r})()},9119:(p,E,e)=>{e.d(E,{D:()=>a});var s=e(8505),l=e(4650),c=e(3755),d=e(529),i=e(6578),u=e(4111);let a=(()=>{class v extends c.O{constructor(t,r,m){super(t,r),this.storageService=r,this.managementAnnouncementService=m,this.addressEvent=new l.vpe(void 0),this.setApi="address"}get getAddressEvent(){return this.addressEvent.asObservable()}set setAddress(t){this.managementAnnouncementService.getAnnouncement&&(this.managementAnnouncementService.getAnnouncement.address=t,this.managementAnnouncementService.setAnnouncement=this.managementAnnouncementService.getAnnouncement),this.addressEvent.emit(t)}mask(t){return"number"==typeof t.zip_code?String(t.zip_code).replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3"):t.zip_code.replace(/^(\d\d)(\d\d\d)(\d\d\d)/,"$1.$2-$3")}address(t){return t.zip_code=Number(String(t?.zip_code).replace(/[\.\-]/g,"")),t?.id?this.patch(t).pipe((0,s.b)(r=>this.setAddress=r)):this.create(t).pipe((0,s.b)(r=>this.setAddress=r))}delete(t){return this.destroy(t).pipe((0,s.b)(r=>this.setAddress=null))}}return v.\u0275fac=function(t){return new(t||v)(l.LFG(d.eN),l.LFG(i.V),l.LFG(u.O))},v.\u0275prov=l.Yz7({token:v,factory:v.\u0275fac}),v})()},310:(p,E,e)=>{e.d(E,{U:()=>n});var s=e(2728),l=e(6895),c=e(5707),d=e(2263),i=e(1265),u=e(889),a=e(9267),v=e(3405),o=e(7143),t=e(6641),r=e(7446),m=e(4650);let n=(()=>{class _{}return _.\u0275fac=function(g){return new(g||_)},_.\u0275mod=m.oAB({type:_}),_.\u0275inj=m.cJS({providers:[c.b,u.A,v.Q,o.q,t.j,r.b],imports:[l.ez,a.Pc,d.d,i.Q,s.i]}),_})()},889:(p,E,e)=>{e.d(E,{A:()=>a});var s=e(8505),l=e(3755),c=e(4650),d=e(529),i=e(6578),u=e(7150);let a=(()=>{class v extends l.O{constructor(t,r,m){super(t,r),this.storageService=r,this.categoryService=m,this.setApi="category"}register(t){return this.create(t,"management/register").pipe((0,s.b)(r=>this.categoryService.add.emit(r)))}}return v.\u0275fac=function(t){return new(t||v)(c.LFG(d.eN),c.LFG(i.V),c.LFG(u.H))},v.\u0275prov=c.Yz7({token:v,factory:v.\u0275fac}),v})()},6641:(p,E,e)=>{e.d(E,{j:()=>a});var s=e(8505),l=e(3755),c=e(4650),d=e(529),i=e(6578),u=e(7150);let a=(()=>{class v extends l.O{constructor(t,r,m){super(t,r),this.storageService=r,this.categoryService=m,this.setApi="category"}delete(t){return this.destroy(t,"management/").pipe((0,s.b)(r=>setTimeout(()=>this.categoryService.deleted.emit(r),3600)))}}return v.\u0275fac=function(t){return new(t||v)(c.LFG(d.eN),c.LFG(i.V),c.LFG(u.H))},v.\u0275prov=c.Yz7({token:v,factory:v.\u0275fac,providedIn:"root"}),v})()},7143:(p,E,e)=>{e.d(E,{q:()=>u});var s=e(3755),l=e(4650),c=e(529),d=e(6578),i=e(7150);let u=(()=>{class a extends s.O{constructor(o,t,r){super(o,t),this.storageService=t,this.categoryService=r,this.setApi="category"}set setIcon(o){this.categoryService.getCategory.image=o,this.categoryService.setCategory=this.categoryService.getCategory}set setCsrf(o){this.csrf=o}deleteIcon(o){return this.destroy(o,"management/icon")}uploadIcon(o,t){const r=this.buildFileData(o,t);return this.setCsrf=o._csrf,this.upload(r,"upload")}buildFileData(o,t){if(o&&t&&"image/svg+xml"===t.type){const r=new FormData;return r.append("catAdId",`${o.id}`),r.append("_csrf",o._csrf),r.append("filename",t,t?.name),r}}}return a.\u0275fac=function(o){return new(o||a)(l.LFG(c.eN),l.LFG(d.V),l.LFG(i.H))},a.\u0275prov=l.Yz7({token:a,factory:a.\u0275fac}),a})()},7446:(p,E,e)=>{e.d(E,{b:()=>c});var s=e(4650),l=e(1135);let c=(()=>{class d{constructor(){this.result=new s.vpe(void 0),this.search$=new l.X(void 0),this.setSearchCategoryBy="name"}get getSearchCategoryBy(){return this.search$.asObservable()}get search(){return this.result.asObservable()}set search(u){this.result.emit(u)}set setSearchCategoryBy(u){this.search$.next(u)}}return d.\u0275fac=function(u){return new(u||d)},d.\u0275prov=s.Yz7({token:d,factory:d.\u0275fac}),d})()},5707:(p,E,e)=>{e.d(E,{b:()=>a});var s=e(8505),l=e(3755),c=e(4650),d=e(529),i=e(6578),u=e(7150);let a=(()=>{class v extends l.O{constructor(t,r,m){super(t,r),this.storageService=r,this.categoryService=m,this.setApi="category"}set setState(t){this.categoryService.getCategory.state=t?.state,this.categoryService.getCategory.updatedAt=t?.updatedAt,this.categoryService.setCategory=this.categoryService.getCategory}state(t){return this.patch(t,"management/state").pipe((0,s.b)(r=>{this.setState=r}))}}return v.\u0275fac=function(t){return new(t||v)(c.LFG(d.eN),c.LFG(i.V),c.LFG(u.H))},v.\u0275prov=c.Yz7({token:v,factory:v.\u0275fac}),v})()},3405:(p,E,e)=>{e.d(E,{Q:()=>o});var s=e(8505),l=e(3755),c=e(4650),d=e(529),i=e(6578),u=e(7150),a=e(6895),v=e(1247);let o=(()=>{class t extends l.O{constructor(m,n,_,h,g){super(m,n),this.storageService=n,this.categoryService=_,this.location=h,this.breadcrumbsService=g,this.setApi="category"}set setCategory(m){this.categoryService.getCategory.name=m?.name,this.categoryService.getCategory.description=m?.description,this.categoryService.getCategory.updatedAt=m?.updatedAt,this.categoryService.getCategory.slug=m.slug,this.categoryService.setCategory=this.categoryService.getCategory,this.updateUsersUrl(m)}updateNameAndDescription(m){return this.patch(m,"management/name-description").pipe((0,s.b)(n=>this.setCategory=n))}updateUsersUrl(m){const n=`/painel-de-controle/admin/categoria/${m?.slug}`;this.breadcrumbsService.setEvent(n),this.location.replaceState(n)}}return t.\u0275fac=function(m){return new(m||t)(c.LFG(d.eN),c.LFG(i.V),c.LFG(u.H),c.LFG(a.Ye),c.LFG(v.d))},t.\u0275prov=c.Yz7({token:t,factory:t.\u0275fac}),t})()},3965:(p,E,e)=>{e.d(E,{w:()=>l});var s=e(4650);let l=(()=>{class c{transform(i){if(i)return null===i?.address||null===i?.citie||null===i?.contact}}return c.\u0275fac=function(i){return new(i||c)},c.\u0275pipe=s.Yjl({name:"allowAd",type:c,pure:!0}),c})()},2263:(p,E,e)=>{e.d(E,{d:()=>i});var s=e(9119),l=e(1007),c=e(3965),d=e(4650);let i=(()=>{class u{}return u.\u0275fac=function(v){return new(v||u)},u.\u0275mod=d.oAB({type:u}),u.\u0275inj=d.cJS({providers:[s.D,c.w,l._]}),u})()},1007:(p,E,e)=>{e.d(E,{_:()=>d});var s=e(5439),c=e(4650);let d=(()=>{class i{transform(a,v="create"){if(this.isTimestamp(a)){const o=s().diff(a,"minutes"),t=s().diff(a,"hours"),r=s().diff(a,"days"),m=s().diff(a,"months"),n=s().diff(a,"years");switch(v){case"create":if(o<=60)return`Criado h\xe1 ${o} minuto${this.pluralMinutes(o)}.`;if(t<=24)return`Criado h\xe1 ${t} hora${this.pluralHours(t)}.`;if(r>=1)return`Criado h\xe1 ${r} dia${this.pluralDays(r)}.`;if(m<60)return`Criado h\xe1 ${m} mese${this.pluralMonth(m)}.`;if(n>0)return`Criado h\xe1 ${n} ano${this.pluralYear(n)}.`;break;case"update":if(o<=60)return`Atualizado h\xe1 ${o} minuto${this.pluralMinutes(o)}.`;if(t<=24)return`Atualizado h\xe1 ${t} hora${this.pluralHours(t)}.`;if(r>=1)return`Atualizado h\xe1 ${r} dia${this.pluralDays(r)}.`;if(m<60)return`Atualizado h\xe1 ${m} mese${this.pluralMonth(m)}.`;if(n>0)return`Atualizado h\xe1 ${n} ano${this.pluralYear(n)}.`;break;case"plan":return`Rest\xe3o ${Math.abs(r)} dia${this.pluralDays(r)} para o vencimento.`;case"workDays":const _=s().format("LLLL"),h=_.slice(0,1);return _.replace(h,h.toUpperCase())}}}pluralYear(a){return a>1?"s":""}pluralMonth(a){return a>60?"s":""}pluralDays(a){return a>1?"s":""}pluralHours(a){return a>24?"s":""}pluralMinutes(a){return a>1?"s":""}isTimestamp(a){return new Date(a).getTime()>0}}return i.\u0275fac=function(a){return new(a||i)},i.\u0275pipe=c.Yjl({name:"time",type:i,pure:!0}),i})()}}]);