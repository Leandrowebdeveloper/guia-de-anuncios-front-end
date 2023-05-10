"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3254],{3254:(Vn,C,c)=>{c.r(C),c.d(C,{AnnouncementPageModule:()=>Xn});var J=c(2728),g=c(6895),f=c(433),r=c(9267),y=c(5203),n=c(4650),Z=c(4111),Q=c(1228),A=c(5379),_=c(6388),v=c(655),M=c(6830),F=c(9524),U=c(451),Y=c(9613);let D=(()=>{class o{constructor(e,t,i,l,s,u){this.galeryAnnouncementService=e,this.messageService=t,this.toastService=i,this.modalController=l,this.modalService=s,this.imageService=u}loadFile(){var e;return(0,v.mG)(this,void 0,void 0,function*(){return this.announcement&&"free"===(null===(e=this.announcement.plan)||void 0===e?void 0:e.type)?yield(yield this.modalController.create({component:M.F,cssClass:"modal-wrapper",componentProps:{announcement:this.announcement},enterAnimation:this.modalService.enterAnimation,leaveAnimation:this.modalService.leaveAnimation})).present():yield this.startPhoto()})}startPhoto(){return(0,v.mG)(this,void 0,void 0,function*(){const e=yield this.imageService.addPhoto();if(e){const t=yield this.imageService.readAsBase64(e);yield this.upload(t)}})}upload(e){var t,i;return(0,v.mG)(this,void 0,void 0,function*(){const l={id:null===(t=this.announcement)||void 0===t?void 0:t.id,_csrf:null===(i=this.announcement)||void 0===i?void 0:i._csrf},s=yield this.toastService.loading("Transferindo imagem","top","images");this.$upload=this.galeryAnnouncementService.sendFiles(e,l).subscribe({next:u=>this.success(u,u,s),error:u=>{s.dismiss(),this.messageService.error(u,void 0,this.$upload)}})})}success(e,t,i){return(0,v.mG)(this,void 0,void 0,function*(){if(e.ok&&200===e.status)return this.complete(t,i)})}complete(e,t){const{body:i}=e;i&&this.update(i,t)}update(e,t){return(0,v.mG)(this,void 0,void 0,function*(){this.galeryAnnouncementService.setGalery=e,t.dismiss(),e&&this.$upload.unsubscribe()})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(A.r),n.Y36(_.e),n.Y36(F.k),n.Y36(r.IN),n.Y36(U.Z),n.Y36(Y.A))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-galery-button-upload"]],inputs:{announcement:"announcement"},decls:3,vars:0,consts:[["title","Adicionar uma imagem","aria-message","Clique para adicionar uma imagem",3,"click"],["size","large","slot","start","name","images"]],template:function(e,t){1&e&&(n.TgZ(0,"div",0),n.NdJ("click",function(){return t.loadFile()}),n._UZ(1,"ion-icon",1),n._uU(2," Adicionar fotos\n"),n.qZA())},dependencies:[r.gu],styles:[".inputFiles[_ngcontent-%COMP%]{height:0px;width:0;overflow:hidden;opacity:0;position:absolute}div[_ngcontent-%COMP%]{display:flex;justify-content:center;align-items:center;flex-direction:column;font-size:x-small;width:100%;height:100%;color:var(--ion-color-medium)}div[_ngcontent-%COMP%]{min-width:110px;background-color:var(--ion-color-light);display:flex;justify-content:center;align-items:center;cursor:pointer}"]}),o})(),E=(()=>{class o{constructor(e){this.el=e,this.element=this.el.nativeElement}onMouseEnter(){this.element.classList.add("show")}onMouseLeave(){this.element.classList.remove("show")}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(n.SBq))},o.\u0275dir=n.lG2({type:o,selectors:[["","appHorizontalScroll",""]],hostBindings:function(e,t){1&e&&n.NdJ("mouseenter",function(){return t.onMouseEnter()})("mouseleave",function(){return t.onMouseLeave()})}}),o})(),L=(()=>{class o{transform(e,t,i){var l,s;return t>-1&&e&&e?.galery&&null!==(l=e?.galery[t])&&void 0!==l&&l.filename?`${i}${null===(s=e?.galery[t])||void 0===s?void 0:s.filename}`:""}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=n.Yjl({name:"typeImageGalery",type:o,pure:!1}),o})(),B=(()=>{class o{transform(e,t){var i;return!!(e&&e?.galery&&null!==(i=e?.galery[t])&&void 0!==i&&i.filename)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=n.Yjl({name:"isGalery",type:o,pure:!0}),o})();var N=c(5747);let $=(()=>{class o{transform(e,t){var i,l;return!!(e&&e?.galery&&(null===(i=e?.galery)||void 0===i?void 0:i.length)>0&&0!==(null===(l=e.galery[t])||void 0===l?void 0:l.position))}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=n.Yjl({name:"isFeaturedImage",type:o,pure:!0}),o})();const H=["popover"];function W(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"section")(1,"ion-img",18),n.NdJ("click",function(){const l=n.CHM(e).index,s=n.oxw(2);return n.KtG(s.show(l))}),n.ALo(2,"galeryValues"),n.qZA()()}if(2&o){const e=a.$implicit;n.xp6(1),n.Q6J("src",n.Dn7(2,1,e,"filename","/images/galery/x-small/"))}}function z(o,a){if(1&o&&(n.TgZ(0,"ion-item-group")(1,"ion-item-divider"),n._UZ(2,"ion-icon",13),n.TgZ(3,"ion-label"),n._uU(4,"Galeria"),n.qZA()(),n.TgZ(5,"div",14),n._UZ(6,"app-galery-button-upload",15),n.TgZ(7,"div",16),n.YNc(8,W,3,5,"section",17),n.qZA()()()),2&o){const e=n.oxw();n.xp6(6),n.Q6J("announcement",e.announcement),n.xp6(2),n.Q6J("ngForOf",null==e.announcement?null:e.announcement.galery)}}function q(o,a){if(1&o&&(n.TgZ(0,"div",19)(1,"div",20),n._uU(2),n.qZA(),n.TgZ(3,"picture"),n._UZ(4,"source",21),n.ALo(5,"typeImageGalery"),n._UZ(6,"source",22),n.ALo(7,"typeImageGalery"),n._UZ(8,"img",23),n.ALo(9,"typeImageGalery"),n.qZA()()),2&o){const e=n.oxw();n.xp6(2),n.AsE(" ",null==e.announcement||null==e.announcement.galery?null:e.announcement.galery.length," / ",e.index+1," "),n.xp6(2),n.Q6J("srcset",n.Dn7(5,5,e.announcement,e.index,"/images/galery/small/")),n.xp6(2),n.Q6J("srcset",n.Dn7(7,9,e.announcement,e.index,"/images/galery/medium/")),n.xp6(2),n.Q6J("src",n.Dn7(9,13,e.announcement,e.index,"/images/galery/large/"),n.LSH)}}function K(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-item",27),n.NdJ("click",function(){n.CHM(e);const i=n.oxw(2);return n.KtG(i.order(i.index))}),n.TgZ(1,"ion-label"),n._uU(2,"Imagem de perfil"),n.qZA(),n._UZ(3,"ion-icon",28),n.qZA()}if(2&o){const e=n.oxw(2);n.Q6J("disabled",!e.isLightboxButton)}}function j(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-content")(1,"ion-item",24),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.delete(i.index))}),n.TgZ(2,"ion-label"),n._uU(3,"Remover imagem"),n.qZA(),n._UZ(4,"ion-icon",25),n.qZA(),n.YNc(5,K,4,1,"ion-item",26),n.ALo(6,"isFeaturedImage"),n.qZA()}if(2&o){const e=n.oxw();n.xp6(5),n.Q6J("ngIf",n.xi3(6,1,e.announcement,e.index))}}const R=function(o){return{show:o}};let X=(()=>{class o{constructor(e,t){this.galeryAnnouncementService=e,this.messageService=t,this.isHeader=new n.vpe(!1),this.isOpen=!1}presentPopover(e){this.popover.event=e,this.isOpen=!0}order(e){var t,i,l,s,u;if(null!==(t=this.announcement)&&void 0!==t&&t.galery){this.isOpen=!1;const p=null===(i=this.announcement)||void 0===i?void 0:i.galery.splice(e,1)[0];null===(l=this.announcement)||void 0===l||l.galery.unshift(p);const d=null===(s=this.announcement)||void 0===s?void 0:s.galery.map(m=>m?.id);if(d&&d.length>0){const m={order:d,_csrf:this.announcement._csrf,announcementId:null===(u=this.announcement)||void 0===u?void 0:u.id};this.$order=this.galeryAnnouncementService.order(m).subscribe({next:h=>{this.message(h),setTimeout(()=>this.$order.unsubscribe(),2e3)},error:h=>this.messageService.error(h,void 0,this.$order)})}}}plusSlides(e,t){const i=this.getAllKeysGalery();i&&i.length>0&&(this.getLastKeyGalery(i),this.setKeyGalery(t,e,i))}close(){this.isHeader.emit(!1),this.isLightbox=null,this.endNext=null,this.isLightboxButton=null}show(e){const t=this.getAllKeysGalery();t&&t.length>0&&(this.getLastKeyGalery(t),this.isHeader.emit(!0),this.showLightbox(e),this.enableOrDisableButton(),this.index=e)}delete(e){var t,i;if(null!==(t=this.announcement)&&void 0!==t&&t.galery&&this.announcement.galery.length>0){this.isOpen=!1;const l=this.announcement.galery[e];return l._csrf=null===(i=this.announcement)||void 0===i?void 0:i._csrf,this.destroy=this.galeryAnnouncementService.delete(l).subscribe({next:s=>{this.update(l),this.message(s)},error:s=>this.messageService.error(s,void 0,this.destroy)})}}showLightbox(e){this.isLightbox=e>-1}getAllKeysGalery(){var e,t;if(null!==(e=this.announcement)&&void 0!==e&&e.galery&&(null===(t=this.announcement)||void 0===t?void 0:t.galery.length)>0)return[...this.announcement.galery.keys()]}getLastKeyGalery(e){this.endNext||(this.endNext=e.pop())}message(e){e?.message&&this.messageService.success(e?.message,void 0,this.destroy,350)}update(e){const t=this.removeItem(e);this.closeLightbox(),(t||0===t)&&this.updateLightbox(t)}updateLightbox(e){var t,i,l;this.index=null!==(t=this.announcement)&&void 0!==t&&t.galery&&(null===(l=null===(i=this.announcement)||void 0===i?void 0:i.galery)||void 0===l?void 0:l.length)>=1?0:e-1}setKeyGalery(e,t,i){const l="+"===e?t+1:t-1;i.includes(l)&&(this.index=l)}removeItem(e){const t=this.getKeyGalery(e);if(t||0===t)return this.remove(t),t}getKeyGalery(e){var t,i,l;if(null!==(t=this.announcement)&&void 0!==t&&t.galery&&(null===(l=null===(i=this.announcement)||void 0===i?void 0:i.galery)||void 0===l?void 0:l.length)>0)return this.announcement.galery.findIndex(s=>s?.id===e?.id)}remove(e){var t,i;null!==(t=this.announcement)&&void 0!==t&&t.galery&&(null===(i=this.announcement)||void 0===i?void 0:i.galery.length)>0&&this.announcement.galery.splice(e,1)}closeLightbox(){var e,t;0===(null===(t=null===(e=this.announcement)||void 0===e?void 0:e.galery)||void 0===t?void 0:t.length)&&this.close()}enableOrDisableButton(){var e,t,i;null!==(e=this.announcement)&&void 0!==e&&e.galery&&(this.isLightboxButton=(null===(i=null===(t=this.announcement)||void 0===t?void 0:t.galery)||void 0===i?void 0:i.length)>1)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(A.r),n.Y36(_.e))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-galery-announcement-component"]],viewQuery:function(e,t){if(1&e&&n.Gf(H,5),2&e){let i;n.iGM(i=n.CRH())&&(t.popover=i.first)}},inputs:{announcement:"announcement"},outputs:{isHeader:"isHeader"},decls:16,vars:11,consts:[[4,"ngIf"],[1,"modal",3,"ngClass"],[1,"close",3,"click"],["class","modal-content",4,"ngIf"],["id","caption"],["size","small","aria-disabled","","color","light","aria-label","Imagem anterior","title","Imagem anterior",3,"disabled","click"],["name","chevron-back"],["color","light","size","small",3,"click"],["name","ellipsis-vertical"],[3,"isOpen","didDismiss"],["popover",""],["size","small","color","light","aria-label","Proxima imagem","title","Proxima imagem",3,"disabled","click"],["name","chevron-forward"],["color","mediun","name","images","slot","start"],[1,"row"],[3,"announcement"],["appHorizontalScroll",""],[4,"ngFor","ngForOf"],["alt","Image da galeria","title","Clique para ampliar","aria-message","Clique para ampliar",1,"cursor-pointer",3,"src","click"],[1,"modal-content"],[1,"numbertext"],["media","(max-width: 575.98px)","alt","Galeria de an\xfancios",3,"srcset"],["media","(max-width: 1399.98px) and (min-width: 576px)","alt","Galeria de an\xfancios",3,"srcset"],["alt","Galeria de an\xfancios",3,"src"],["aria-label","Remover imagem da galeria de an\xfancios.","title","Remover imagem da galeria de an\xfancios.","button","",3,"click"],["slot","start","name","trash"],["aria-label","Imagem de perfil.","title","Imagem de perfil.","button","",3,"disabled","click",4,"ngIf"],["aria-label","Imagem de perfil.","title","Imagem de perfil.","button","",3,"disabled","click"],["slot","start","name","reorder-four"]],template:function(e,t){1&e&&(n.YNc(0,z,9,2,"ion-item-group",0),n.TgZ(1,"div",1)(2,"span",2),n.NdJ("click",function(){return t.close()}),n._uU(3,"\xd7"),n.qZA(),n.YNc(4,q,10,17,"div",3),n.ALo(5,"isGalery"),n.TgZ(6,"div",4)(7,"ion-fab-button",5),n.NdJ("click",function(){return t.plusSlides(t.index,"-")}),n._UZ(8,"ion-icon",6),n.qZA(),n.TgZ(9,"ion-fab-button",7),n.NdJ("click",function(l){return t.presentPopover(l)}),n._UZ(10,"ion-icon",8),n.qZA(),n.TgZ(11,"ion-popover",9,10),n.NdJ("didDismiss",function(){return t.isOpen=!1}),n.YNc(13,j,7,4,"ng-template"),n.qZA(),n.TgZ(14,"ion-fab-button",11),n.NdJ("click",function(){return t.plusSlides(t.index,"+")}),n._UZ(15,"ion-icon",12),n.qZA()()()),2&e&&(n.Q6J("ngIf",t.announcement),n.xp6(1),n.Q6J("ngClass",n.VKq(9,R,t.isLightbox)),n.xp6(3),n.Q6J("ngIf",n.xi3(5,6,t.announcement,t.index)),n.xp6(3),n.Q6J("disabled",!t.isLightboxButton||0===t.index),n.xp6(4),n.Q6J("isOpen",t.isOpen),n.xp6(3),n.Q6J("disabled",!t.isLightboxButton||t.index===t.endNext))},dependencies:[g.mk,g.sg,g.O5,r.W2,r.W4,r.gu,r.Xz,r.Ie,r.rH,r.Ub,r.Q$,r.d8,D,E,L,B,N.d,$],styles:["#myImg[_ngcontent-%COMP%]{border-radius:5px;cursor:pointer;transition:.3s}#myImg[_ngcontent-%COMP%]:hover{opacity:.7}.modal[_ngcontent-%COMP%]{display:none;position:fixed;z-index:999;padding-top:100px;left:0;top:0;width:100%;height:100%;overflow:auto;background-color:#000;background-color:#000000e6}.modal.show[_ngcontent-%COMP%]{display:block;overflow:auto}.modal[_ngcontent-%COMP%]   .numbertext[_ngcontent-%COMP%]{color:#f2f2f2;font-size:12px;padding:8px 12px;top:0}.modal-content[_ngcontent-%COMP%]{margin:auto;width:80%;display:block;max-width:700px}#caption[_ngcontent-%COMP%]{display:flex;justify-content:space-between;align-items:center;flex-wrap:nowrap;flex-direction:row;margin:auto;width:80%;max-width:700px;text-align:center;color:#ccc;padding:10px 0;height:80px}.modal-content[_ngcontent-%COMP%], #caption[_ngcontent-%COMP%]{animation-name:_ngcontent-%COMP%_zoom;animation-duration:.2s}@keyframes _ngcontent-%COMP%_zoom{0%{transform:scale(0)}to{transform:scale(1)}}.close[_ngcontent-%COMP%]{position:absolute;top:15px;right:35px;color:#f1f1f1;font-size:40px;font-weight:700;transition:.3s}.close[_ngcontent-%COMP%]:hover, .close[_ngcontent-%COMP%]:focus{color:#bbb;text-decoration:none;cursor:pointer}@media only screen and (max-width: 700px){.modal-content[_ngcontent-%COMP%]{width:100%}}.row[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:96px;margin-top:1rem;margin-bottom:1rem}.row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{display:flex;flex-direction:row;overflow-x:auto;overflow-y:hidden}.row[_ngcontent-%COMP%] > div.show[_ngcontent-%COMP%]::-webkit-scrollbar{visibility:visible;height:11px}.row[_ngcontent-%COMP%] > div.show[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 5px gray;border-radius:10px}.row[_ngcontent-%COMP%] > div.show[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{background:var(--ion-color-medium);border-radius:10px}.row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]::-webkit-scrollbar{visibility:hidden;height:0px}.row[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]   ion-img[_ngcontent-%COMP%]{width:170px;margin:0 2px}"]}),o})();var V=c(6328);let nn=(()=>{class o{constructor(e,t,i){this.fb=e,this.stateService=t,this.messageService=i}toggle(){if(this.announcement){const{id:e,_csrf:t}=this.announcement;return this.form=this.fb.group({id:e,_csrf:t}),this.$state=this.stateService.state(this.form.value).subscribe({next:i=>i&&this.success(i),error:i=>this.messageService.error(i,void 0,this.$state)})}}success(e){if(e?.message)return this.messageService.success(e?.message,void 0,this.$state,350)}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(f.qu),n.Y36(V.D),n.Y36(_.e))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-state-announcement-component"]],inputs:{announcement:"announcement"},decls:5,vars:5,consts:[[3,"disabled"],["slot","end","title","Gerenciar status.","aria-label","Gerenciar status.",3,"checked","ionChange"],["slot","start",3,"name"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-item",0)(1,"ion-label"),n._uU(2),n.qZA(),n.TgZ(3,"ion-toggle",1),n.NdJ("ionChange",function(){return t.toggle()}),n.qZA(),n._UZ(4,"ion-icon",2),n.qZA()),2&e&&(n.Q6J("disabled",!(null!=t.announcement&&t.announcement.categoryAnnouncement&&null!=t.announcement&&t.announcement.address&&null!=t.announcement&&t.announcement.contact&&null!=t.announcement&&t.announcement.citie)),n.xp6(2),n.Oqu(null!=t.announcement&&t.announcement.state?"Online":"Offline"),n.xp6(1),n.Q6J("checked",null==t.announcement?null:t.announcement.state),n.uIk("aria-disabled",!(null!=t.announcement&&t.announcement.categoryAnnouncement)&&"Para gerenciar status cadastre uma categoria."),n.xp6(1),n.Q6J("name",null!=t.announcement&&t.announcement.state?"power":"radio-button-off"))},dependencies:[r.gu,r.Ie,r.Q$,r.ho,r.w]}),o})();var en=c(731),tn=c(2827),on=c(9696),an=c(5359),rn=c(5e3),k=c(6941),ln=c(5509);function sn(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-item")(1,"ion-label"),n._uU(2),n.ALo(3,"isAnnouncementAttrValues"),n.qZA(),n.TgZ(4,"ion-toggle",1),n.NdJ("ionChange",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.blockade())}),n.ALo(5,"isAnnouncementAttrValues"),n.qZA(),n._UZ(6,"ion-icon",2),n.ALo(7,"isAnnouncementAttrValues"),n.qZA()}if(2&o){const e=n.oxw();n.xp6(2),n.Oqu(n.xi3(3,3,e.announcement,"blockade")?"Bloqueado":"Desbloqueado"),n.xp6(2),n.Q6J("checked",n.xi3(5,6,e.announcement,"blockade")),n.xp6(2),n.Q6J("name",n.xi3(7,9,e.announcement,"blockade")?"stop":"play")}}let cn=(()=>{class o{constructor(e,t,i){this.fb=e,this.managementAnnouncementService=t,this.messageService=i}blockade(){if(this.announcement){const{slug:e,_csrf:t}=this.announcement;return this.form=this.fb.group({slug:e,_csrf:t}),this.$blockade=this.managementAnnouncementService.blockade(this.form.value).subscribe({next:i=>i?.message&&this.messageService.success(i?.message,void 0,this.$blockade,350),error:i=>this.messageService.error(i,void 0,this.$blockade)})}}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(f.qu),n.Y36(Z.O),n.Y36(_.e))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-blockade-announcement-component"]],inputs:{announcement:"announcement",user:"user"},decls:2,vars:4,consts:[[4,"ngIf"],["slot","end","title","Alternar entre usu\xe1rio bloquear e desbloquear.","aria-label","Clique para alternar entre usu\xe1rio bloquear e desbloquear.",3,"checked","ionChange"],["slot","start",3,"name"]],template:function(e,t){1&e&&(n.YNc(0,sn,8,12,"ion-item",0),n.ALo(1,"isUserLevel")),2&e&&n.Q6J("ngIf",n.xi3(1,1,t.announcement&&t.user,"1"))},dependencies:[g.O5,r.gu,r.Ie,r.Q$,r.ho,r.w,k.d,ln.j]}),o})();var un=c(1635);let dn=(()=>{class o{constructor(e){this.modalController=e,this.category=new n.vpe}ngOnInit(){console.log(this.announcement)}open(){return(0,v.mG)(this,void 0,void 0,function*(){const e=this.getLabel(),t=this.getAnnouncement();return yield(yield this.modalController.create({component:un.A,cssClass:"modal-wrapper",componentProps:{action:"announcement",label:e,announcement:t}})).present()})}getLabel(){var e;return null!==(e=this.announcement)&&void 0!==e&&e.id?"Editar an\xfacio":"Cadastrar an\xfancio"}getAnnouncement(){var e,t,i,l,s,u,p,d,m,h,b;const G=null===(e=this.announcement)||void 0===e?void 0:e._csrf;let x;return x=null!==(t=this.announcement)&&void 0!==t&&t.id?{_csrf:G,title:null===(i=this.announcement)||void 0===i?void 0:i.title,description:null===(l=this.announcement)||void 0===l?void 0:l.description,slug:null===(s=this.announcement)||void 0===s?void 0:s.slug,id:null===(u=this.announcement)||void 0===u?void 0:u.id}:{_csrf:G,title:null,description:null,slug:null,userId:null===(p=this.user)||void 0===p?void 0:p.id},this.isClassified()&&(x.price=null!==(m=null===(d=this.announcement)||void 0===d?void 0:d.price)&&void 0!==m&&m.value?null===(b=null===(h=this.announcement)||void 0===h?void 0:h.price)||void 0===b?void 0:b.value:null),x}isClassified(){var e,t,i,l,s,u,p,d;return!(!this.announcement||null===(t=null===(e=this.announcement)||void 0===e?void 0:e.categoryAnnouncement)||void 0===t||!t.category||"classificados"!==(null===(s=null===(l=null===(i=this.announcement)||void 0===i?void 0:i.categoryAnnouncement)||void 0===l?void 0:l.category)||void 0===s?void 0:s.slug)&&"imoveis"!==(null===(d=null===(p=null===(u=this.announcement)||void 0===u?void 0:u.categoryAnnouncement)||void 0===p?void 0:p.category)||void 0===d?void 0:d.slug))}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(r.IN))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-announcement-component"]],inputs:{announcement:"announcement",user:"user"},outputs:{category:"category"},decls:4,vars:2,consts:[["detail","true","title","Gerenciar an\xfancio","aria-label","Gerenciar an\xfancio.","button","",3,"disabled","click"],["name","megaphone","slot","start"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-item",0),n.NdJ("click",function(){return t.open()}),n._UZ(1,"ion-icon",1),n.TgZ(2,"ion-label"),n._uU(3,"An\xfancio"),n.qZA()()),2&e&&(n.Q6J("disabled",!(null!=t.announcement&&t.announcement.categoryAnnouncement)),n.uIk("aria-disabled",!(null!=t.announcement&&t.announcement.categoryAnnouncement)&&"Para gerenciar o an\xfancio, cadastre uma categoria."))},dependencies:[r.gu,r.Ie,r.Q$]}),o})();var mn=c(518),pn=c(3149),gn=c(7471),vn=c(3755),hn=c(8505),fn=c(529),_n=c(6578),T=c(8549);let O=(()=>{class o extends vn.O{constructor(e,t,i){super(e,t),this.http=e,this.storageService=t,this.workDayService=i,this.setApi="workDays"}delete(e){return this.destroy(e).pipe((0,hn.b)(()=>this.workDayService.setworkDay=null))}}return o.\u0275fac=function(e){return new(e||o)(n.LFG(fn.eN),n.LFG(_n.V),n.LFG(T.a))},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();var P=c(8039);let yn=(()=>{class o{transform(e){return!(!e||!e?.workDays)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=n.Yjl({name:"isWorkDays",type:o,pure:!0}),o})();function xn(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-item-option",7),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.destroy())}),n._UZ(1,"ion-icon",8),n._uU(2," delete "),n.qZA()}}const An=function(o){return["/painel-de-controle","anuncio",o,"dias-da-semana"]};let bn=(()=>{class o{constructor(e,t,i,l,s){this.deleteworkDayService=e,this.alertController=t,this.loadingService=i,this.messageService=l,this.workDayAnnouncementService=s,this.daysOfTheWeekPT=["Domingo","Segunda feira","Ter\xe7a feira","Quarta feira","Quinta feira","Sexta feira","S\xe1bado"],this.daysOfTheWeek=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"]}ngOnInit(){this.update()}ngOnDestroy(){this.$update.unsubscribe()}destroy(){var e,t,i;return(0,v.mG)(this,void 0,void 0,function*(){"1"===(null===(e=this.user)||void 0===e?void 0:e.level)&&null!==(t=this.announcement)&&void 0!==t&&t.workDays&&(yield(yield this.alertController.create({header:"Excluir hor\xe1rio de funcionamento",subHeader:null===(i=this.announcement)||void 0===i?void 0:i.title,buttons:[{text:"Cancelar",role:"cancel",handler:()=>{}},{text:"OK",role:"confirm",handler:s=>{var u,p,d;const m=Object.assign(Object.assign({},s),{_csrf:null===(u=this.announcement)||void 0===u?void 0:u._csrf,id:null===(d=null===(p=this.announcement)||void 0===p?void 0:p.workDays)||void 0===d?void 0:d.id});return this.delete(m)}}],inputs:[{name:"password",type:"password",placeholder:"Senha",min:8,max:16}]})).present())})}delete(e){var t,i;if("1"===(null===(t=this.user)||void 0===t?void 0:t.level)&&null!==(i=this.announcement)&&void 0!==i&&i.workDays){const l=this.loadingService.show("Excluindo hor\xe1rio de funcionamento...");return this.$delete=this.deleteworkDayService.delete(e).subscribe({next:s=>{this.messsage(s,l),this.announcement&&(this.announcement.workDays=null)},error:s=>this.messageService.error(s,l,this.$delete)})}}messsage(e,t){if(e?.message)return this.messageService.success(e?.message,t,this.$delete)}update(){return this.$update=this.workDayAnnouncementService.getworkDayEvent.subscribe({next:e=>{var t;(null===(t=this.announcement)||void 0===t?void 0:t.id)===e?.announcementId&&this.announcement&&(this.announcement.workDays=e)}})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(O),n.Y36(r.Br),n.Y36(P.b),n.Y36(_.e),n.Y36(T.a))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-work-days-admin-management"]],inputs:{announcement:"announcement",user:"user"},decls:19,vars:18,consts:[["lines","true"],["slot","start","name","timer"],["slot","end","title","Pressione e arraste para a esquerda.","data-message","Pressione e arraste para a esquerda.","name","chevron-back"],[3,"color"],["slot","end","size","small","color","danger","class","cursor-pointer","title","Exclui hor\xe1rio de funcionamento","data-message","Exclui hor\xe1rio de funcionamento",3,"click",4,"ngIf"],["slot","end","size","small",1,"cursor-pointer",3,"title","routerLink"],["color","light","name","create","slot","start"],["slot","end","size","small","color","danger","title","Exclui hor\xe1rio de funcionamento","data-message","Exclui hor\xe1rio de funcionamento",1,"cursor-pointer",3,"click"],["color","light","name","trash","slot","start"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-item-group")(1,"ion-item-sliding")(2,"ion-item",0),n._UZ(3,"ion-icon",1)(4,"ion-icon",2),n.TgZ(5,"ion-label"),n._uU(6,"Hor\xe1rio de funcionamento "),n.TgZ(7,"ion-text",3),n.ALo(8,"isWorkDays"),n._uU(9," * "),n.qZA()()(),n.TgZ(10,"ion-item-options"),n.YNc(11,xn,3,0,"ion-item-option",4),n.ALo(12,"isWorkDays"),n.TgZ(13,"ion-item-option",5),n.ALo(14,"isWorkDays"),n.ALo(15,"isWorkDays"),n._UZ(16,"ion-icon",6),n._uU(17),n.ALo(18,"isWorkDays"),n.qZA()()()()),2&e&&(n.xp6(7),n.Q6J("color",n.lcZ(8,6,t.announcement)?"success":"danger"),n.xp6(4),n.Q6J("ngIf",n.lcZ(12,8,t.announcement)),n.xp6(2),n.Q6J("title",n.lcZ(14,10,t.announcement)?"Editar":"Cadastrarhor\xe1rio de funcionamento")("routerLink",n.VKq(16,An,null==t.announcement?null:t.announcement.slug)),n.uIk("data-message",n.lcZ(15,12,t.announcement)?"Editar":"Cadastrarhor\xe1rio de funcionamento"),n.xp6(4),n.hij(" ",n.lcZ(18,14,t.announcement)?"Editar":"Cadastrar"," "))},dependencies:[g.O5,r.gu,r.Ie,r.Ub,r.u8,r.IK,r.td,r.Q$,r.yW,r.YI,y.rH,yn]}),o})();function Cn(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-item",2),n.NdJ("click",function(){n.CHM(e);const i=n.oxw();return n.KtG(i.route())}),n._UZ(1,"ion-icon",3),n.TgZ(2,"ion-label"),n._uU(3,"Hor\xe1rio de trabalho "),n.TgZ(4,"ion-text",4),n._uU(5," * "),n.qZA()()()}if(2&o){const e=n.oxw();n.Q6J("disabled",!(null!=e.announcement&&e.announcement.categoryAnnouncement)),n.uIk("aria-disabled",!(null!=e.announcement&&e.announcement.categoryAnnouncement)&&"Para gerenciar hor\xe1rio de trabalho cadastre uma categoria."),n.xp6(4),n.Q6J("color",null!=e.announcement&&e.announcement.workDays?"success":"danger")}}function Zn(o,a){if(1&o&&n._UZ(0,"app-work-days-admin-management",5),2&o){const e=n.oxw();n.Q6J("announcement",e.announcement)}}let kn=(()=>{class o{constructor(e){this.navCtrl=e}route(){var e;return this.navCtrl.navigateForward(["/painel-de-controle","anuncio",null===(e=this.announcement)||void 0===e?void 0:e.slug,"dias-da-semana"])}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(r.SH))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-button-work-days"]],inputs:{announcement:"announcement",user:"user"},decls:4,vars:5,consts:[["detail","true","title","Gerenciar hor\xe1rio de trabalho.","aria-label","Gerenciar hor\xe1rio de trabalho.","button","",3,"disabled","click",4,"ngIf","ngIfElse"],["Else",""],["detail","true","title","Gerenciar hor\xe1rio de trabalho.","aria-label","Gerenciar hor\xe1rio de trabalho.","button","",3,"disabled","click"],["name","timer","slot","start"],[3,"color"],[3,"announcement"]],template:function(e,t){if(1&e&&(n.YNc(0,Cn,6,3,"ion-item",0),n.ALo(1,"isUserLevel"),n.YNc(2,Zn,1,1,"ng-template",null,1,n.W1O)),2&e){const i=n.MAs(3);n.Q6J("ngIf",n.xi3(1,2,t.user,"2"))("ngIfElse",i)}},dependencies:[g.O5,r.gu,r.Ie,r.Q$,r.yW,bn,k.d]}),o})();var Tn=c(2507),On=c(759);function Pn(o,a){if(1&o&&(n.TgZ(0,"ion-select-option",7),n._uU(1),n.qZA()),2&o){const e=a.$implicit;n.Q6J("value",null==e?null:e.id),n.xp6(1),n.Oqu(null==e?null:e.name)}}function Sn(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-select",5),n.NdJ("ionChange",function(i){n.CHM(e);const l=n.oxw();return n.KtG(l.select(i))}),n.YNc(1,Pn,2,2,"ion-select-option",6),n.qZA()}if(2&o){const e=a.$implicit,t=n.oxw();n.Q6J("value",(null==t.announcement||null==t.announcement.category?null:t.announcement.category.id)||null),n.xp6(1),n.Q6J("ngForOf",e)}}let wn=(()=>{class o{constructor(e,t,i,l,s){this.fb=e,this.categoryAnnouncementService=t,this.messageService=i,this.categoryService=l,this.loadingService=s}ngOnInit(){this.getCategory()}select(e){var t,i,l,s;const u=null===(i=null===(t=this.announcement)||void 0===t?void 0:t.categoryAnnouncement)||void 0===i?void 0:i.id;this.form=this.fb.group({id:u,announcementId:null===(l=this.announcement)||void 0===l?void 0:l.id,catAdId:e.detail.value,_csrf:null===(s=this.announcement)||void 0===s?void 0:s._csrf});const d=this.loadingService.show(u?"Editando categoria...":"Cadastrando categoria...");return this.$category=this.categoryAnnouncementService.category(this.form.value).subscribe({next:m=>m&&this.success(m,d),error:m=>this.messageService.error(m,d,this.$category)})}success(e,t){var i;if(null!==(i=this.announcement)&&void 0!==i&&i.category&&e?.message)return this.announcement.category=e?.category,this.messageService.success(e?.message,t,this.$category,2e3)}getCategory(){this.category$=this.categoryService.asObservable()}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(f.qu),n.Y36(Tn.i),n.Y36(_.e),n.Y36(On.Y),n.Y36(P.b))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-category-component"]],inputs:{announcement:"announcement"},decls:12,vars:5,consts:[["color","mediun","name","list","slot","start"],["placeholder","Selecione uma categoria","okText","OK","cancelText","Cancelar",3,"value","ionChange",4,"ngIf"],[3,"hidden"],["color","danger",1,"tooltip"],[1,"tooltiptext"],["placeholder","Selecione uma categoria","okText","OK","cancelText","Cancelar",3,"value","ionChange"],[3,"value",4,"ngFor","ngForOf"],[3,"value"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-item-group")(1,"ion-item-divider"),n._UZ(2,"ion-icon",0),n.TgZ(3,"ion-label"),n._uU(4,"Categoria"),n.qZA()(),n.TgZ(5,"ion-item"),n.YNc(6,Sn,2,2,"ion-select",1),n.ALo(7,"async"),n.qZA()(),n.TgZ(8,"div",2)(9,"ion-text",3)(10,"p",4),n._uU(11),n.qZA()()()),2&e&&(n.xp6(6),n.Q6J("ngIf",n.lcZ(7,3,t.category$)),n.xp6(2),n.Q6J("hidden",!(null!=t.announcement&&null!=t.announcement.category&&t.announcement.category.description)),n.xp6(3),n.hij(" ",null==t.announcement||null==t.announcement.category?null:t.announcement.category.description," "))},dependencies:[g.sg,g.O5,r.gu,r.Ie,r.rH,r.Ub,r.Q$,r.t9,r.n0,r.yW,r.QI,g.Ov],styles:['.description[_ngcontent-%COMP%]{border:1px solid var(--ion-color-danger);padding:16px;border-radius:4px}.tooltip[_ngcontent-%COMP%]{border-bottom:1px dotted black}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]{width:100%;background-color:#000;color:#fff;border-radius:6px;padding:12px;position:relative}.tooltip[_ngcontent-%COMP%]   .tooltiptext[_ngcontent-%COMP%]:after{content:"";position:absolute;bottom:100%;left:50%;margin-left:-5px;border-width:5px;border-style:solid;border-color:transparent transparent black transparent}']}),o})();var In=c(1049);let Gn=(()=>{class o{transform(e){return!(!e||!e?.category)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=n.Yjl({name:"isAnnouncementCategory",type:o,pure:!0}),o})();var Jn=c(83);let Qn=(()=>{class o{transform(e){return!!(e&&e?.citie&&e?.address&&e?.contact)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275pipe=n.Yjl({name:"adBlocked",type:o,pure:!1}),o})();function Mn(o,a){if(1&o&&(n.TgZ(0,"ion-col",18),n._UZ(1,"app-card-message-component",16),n.qZA()),2&o){const e=n.oxw(2).$implicit;n.xp6(1),n.Q6J("announcement",e)}}function Fn(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-col",15)(1,"app-galery-announcement-component",19),n.NdJ("isHeader",function(i){n.CHM(e);const l=n.oxw(4);return n.KtG(l.isHeader(i))}),n.qZA()()}if(2&o){const e=n.oxw(2).$implicit;n.xp6(1),n.Q6J("announcement",e)}}function Un(o,a){if(1&o&&(n.TgZ(0,"ion-col",15)(1,"ion-item-group"),n._UZ(2,"app-messages-component",20)(3,"app-blockade-announcement-component",21)(4,"app-state-announcement-component",16)(5,"app-announcement-component",21)(6,"app-city-announcement-component",20)(7,"app-address-announcement-component",20)(8,"app-contant-announcement-component",20)(9,"app-map-announcement-component",20)(10,"app-social-network-component",20)(11,"app-button-work-days",20),n.qZA()()),2&o){const e=n.oxw(2).$implicit,t=n.oxw().$implicit;n.xp6(2),n.Q6J("user",t)("announcement",e),n.xp6(1),n.Q6J("announcement",e)("user",t),n.xp6(1),n.Q6J("announcement",e),n.xp6(1),n.Q6J("announcement",e)("user",t),n.xp6(1),n.Q6J("user",t)("announcement",e),n.xp6(1),n.Q6J("user",t)("announcement",e),n.xp6(1),n.Q6J("user",t)("announcement",e),n.xp6(1),n.Q6J("user",t)("announcement",e),n.xp6(1),n.Q6J("user",t)("announcement",e),n.xp6(1),n.Q6J("user",t)("announcement",e)}}function Yn(o,a){if(1&o&&(n.ynx(0),n.YNc(1,Mn,2,1,"ion-col",11),n.ALo(2,"adBlocked"),n.TgZ(3,"ion-col",12),n.ALo(4,"adBlocked"),n.TgZ(5,"ion-card")(6,"ion-card-header")(7,"ion-card-title"),n._uU(8,"Bem-vindo!"),n.qZA(),n.TgZ(9,"ion-card-subtitle"),n._uU(10,"Cadastro sujeito a aprova\xe7\xe3o."),n.qZA()(),n.TgZ(11,"ion-card-content",13)(12,"ion-text",14)(13,"p"),n._uU(14," Selecione uma categoria para desbloquear os bot\xf5es abaixo. "),n.qZA(),n.TgZ(15,"p"),n._uU(16,"\xc9 obrigat\xf3rio o cadastro de cidade, endere\xe7o, contato."),n.qZA(),n.TgZ(17,"p"),n._uU(18,' O bot\xe3o de status permite que voc\xea altere a sua visibilidade para "online" e "offline" que ser\xe1 desbloqueado caso os itens obrigat\xf3rios seja cadastrados. '),n.qZA()()()()(),n.TgZ(19,"ion-col",15),n._UZ(20,"app-category-component",16),n.qZA(),n.YNc(21,Fn,2,1,"ion-col",17),n.ALo(22,"isAnnouncementCategory"),n.YNc(23,Un,12,19,"ion-col",17),n.ALo(24,"isAnnouncementCategory"),n.BQk()),2&o){const e=n.oxw().$implicit;n.xp6(1),n.Q6J("ngIf",n.lcZ(2,5,e)),n.xp6(2),n.Q6J("hidden",n.lcZ(4,7,e)),n.xp6(17),n.Q6J("announcement",e),n.xp6(1),n.Q6J("ngIf",n.lcZ(22,9,e)),n.xp6(2),n.Q6J("ngIf",n.lcZ(24,11,e))}}function Dn(o,a){if(1&o&&(n.TgZ(0,"ion-col",18),n._UZ(1,"app-work-days",16),n.qZA()),2&o){const e=n.oxw(2).$implicit;n.xp6(1),n.Q6J("announcement",e)}}function En(o,a){if(1&o&&(n.YNc(0,Dn,2,1,"ion-col",11),n.ALo(1,"isAnnouncementCategory")),2&o){const e=n.oxw().$implicit;n.Q6J("ngIf",e&&n.lcZ(1,1,e))}}function Ln(o,a){if(1&o&&(n.ynx(0),n.TgZ(1,"ion-col",8),n.ALo(2,"announcementValues"),n.TgZ(3,"ion-text")(4,"h1",9),n.ALo(5,"announcementValues"),n._uU(6),n.ALo(7,"lnWords"),n.ALo(8,"announcementValues"),n.qZA()()(),n.YNc(9,Yn,25,13,"ng-container",6),n.YNc(10,En,2,3,"ng-template",null,10,n.W1O),n.BQk()),2&o){const e=a.$implicit,t=n.MAs(11),i=n.oxw(2);n.xp6(1),n.Q6J("hidden",n.xi3(2,5,!e,"title")),n.xp6(3),n.Q6J("title",n.xi3(5,8,e,"title")),n.xp6(2),n.hij(" ",n.xi3(7,11,n.xi3(8,14,e,"title"),52)," "),n.xp6(3),n.Q6J("ngIf",i.isAnnouncement)("ngIfElse",t)}}function Bn(o,a){if(1&o){const e=n.EpF();n.TgZ(0,"ion-col",18)(1,"div",22),n._UZ(2,"ion-icon",23),n.TgZ(3,"ion-text",24),n._uU(4," An\xfancio n\xe3o existe "),n.qZA(),n.TgZ(5,"ion-button",25),n.NdJ("click",function(){n.CHM(e);const i=n.oxw(2);return n.KtG(i.back())}),n._UZ(6,"ion-icon",26),n._uU(7," voutar "),n.qZA()()()}}function Nn(o,a){if(1&o&&(n.TgZ(0,"ion-grid",5)(1,"ion-row"),n.YNc(2,Ln,12,17,"ng-container",6),n.ALo(3,"async"),n.YNc(4,Bn,8,0,"ng-template",null,7,n.W1O),n.qZA()()),2&o){const e=n.MAs(5),t=n.oxw();n.xp6(2),n.Q6J("ngIf",n.lcZ(3,2,t.announcement$))("ngIfElse",e)}}const $n=[{path:"",component:(()=>{class o{constructor(e,t,i,l,s){this.managementAnnouncementService=e,this.authService=t,this.navCtrl=i,this.route=l,this.galeryAnnouncementService=s,this.isAnnouncement=!0}ngOnDestroy(){this.$updateGalery.unsubscribe()}ngOnInit(){this.toggleRoute(),this.getUser(),this.init(),this.updateGalery()}isHeader(e){this.hasHeader=e}toggleRoute(){this.isAnnouncement=!this.route.url.includes("dias-da-semana"),this.isRoute=this.route.url.includes("dias-da-semana")?"WorkDays":null}back(){this.navCtrl.back()}init(){this.announcement$=this.managementAnnouncementService.announcementObservable}getUser(){this.user$=this.authService.userObservable}updateGalery(){return this.$updateGalery=this.galeryAnnouncementService.galeryAsObservable.subscribe({next:e=>{var t,i;e&&(null!==(t=this.managementAnnouncementService)&&void 0!==t&&t.galery&&(null===(i=this.managementAnnouncementService)||void 0===i?void 0:i.galery.length)>0?this.managementAnnouncementService.addItemGalery=e:this.managementAnnouncementService.setGalery=[e])}})}}return o.\u0275fac=function(e){return new(e||o)(n.Y36(Z.O),n.Y36(Q.e),n.Y36(r.SH),n.Y36(y.F0),n.Y36(A.r))},o.\u0275cmp=n.Xpm({type:o,selectors:[["app-announcement"]],viewQuery:function(e,t){if(1&e&&n.Gf(r.W2,5),2&e){let i;n.iGM(i=n.CRH())&&(t.content=i.first)}},decls:9,vars:5,consts:[[3,"hidden"],["slot","start"],["mode","md","defaultHref","",3,"click"],[3,"fullscreen"],["fixed","",4,"ngIf"],["fixed",""],[4,"ngIf","ngIfElse"],["Error",""],["size","12",1,"ion-margin-vertical",3,"hidden"],[3,"title"],["Association",""],["size","12",4,"ngIf"],["size","12",3,"hidden"],[1,"ion-margin-top"],[1,"ion-margin-bottom"],["size","12",1,"ion-margin-vertical"],[3,"announcement"],["size","12","class","ion-margin-vertical",4,"ngIf"],["size","12"],[3,"announcement","isHeader"],[3,"user","announcement"],[3,"announcement","user"],[1,"content-center"],["name","warning","color","medium",2,"font-size","100px"],["color","primary"],["fill","outline","expand","block",1,"ion-margin-top",3,"click"],["name","arrow-back-circle",1,"ion-margin-end"]],template:function(e,t){1&e&&(n.TgZ(0,"ion-header",0)(1,"ion-toolbar")(2,"ion-buttons",1)(3,"ion-back-button",2),n.NdJ("click",function(){return t.back()}),n.qZA()(),n.TgZ(4,"ion-title"),n._uU(5,"Gerenciamento do an\xfancio"),n.qZA()()(),n.TgZ(6,"ion-content",3),n.YNc(7,Nn,6,4,"ion-grid",4),n.ALo(8,"async"),n.qZA()),2&e&&(n.Q6J("hidden",t.hasHeader),n.xp6(6),n.Q6J("fullscreen",!0),n.xp6(1),n.Q6J("ngIf",n.lcZ(8,3,t.user$)))},dependencies:[r.oU,r.YG,r.Sm,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.wI,r.W2,r.jY,r.Gu,r.gu,r.Ub,r.Nd,r.yW,r.wd,r.sr,r.cs,g.O5,X,nn,en.c,tn.s,on.O,an.j,rn.x,cn,dn,mn.L,pn.c,gn.k,kn,wn,g.Ov,In.J,Gn,Jn.n,Qn]}),o})()}];let Hn=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({imports:[y.Bz.forChild($n),y.Bz]}),o})();var S=c(677),w=c(6444);let Wn=(()=>{class o{setButton(e){switch(e){case"register":return{route:"/create",icon:"create",label:"Cadastrar",aria:"Cadastrar categoria.",title:"Cadastrar categoria."};case"updateAnnouncement":return{route:"/name",icon:"cloud-upload",label:"Salvar",aria:"Salvar titulo e descri\xe7\xe3o.",title:"Salvar titulo e descri\xe7\xe3o."};case"coordinate":return{route:"/coordinate",icon:"cloud-upload",label:"Salvar",aria:"Salvar mapa.",title:"Salvar mapa."};case"destroy":case"drop":return{route:"/destroy",icon:"trash",label:"Excluir categoria",aria:"Excluir categoria.",title:"Excluir categoria."};case"restore":return{route:"/restore",icon:"refresh",label:"Restaurar categoria",aria:"Restaurar categoria.",title:"Restaurar categoria."}}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=n.Yz7({token:o,factory:o.\u0275fac}),o})();var I=c(3493);let zn=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[O],imports:[g.ez,r.Pc,f.u5,y.Bz,I.d,f.UX,S.O,w._]}),o})();var qn=c(2119),Kn=c(6469),jn=c(310),Rn=c(6199);let Xn=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=n.oAB({type:o}),o.\u0275inj=n.cJS({providers:[Wn],imports:[r.Pc,g.ez,f.u5,Hn,J.i,Rn.y,qn.h,Kn.O,zn,jn.U,S.O,w._,I.d]}),o})()}}]);