"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6966],{7302:(P,_,i)=>{i.d(_,{A:()=>E});var s=i(655),e=i(4650),d=i(541),p=i(9267),m=i(9524),g=i(6388),v=i(9613),b=i(6895),x=i(2089),A=i(8788);function U(f,C){if(1&f){const u=e.EpF();e.TgZ(0,"div",1)(1,"div",2),e.NdJ("click",function(){e.CHM(u);const a=e.oxw();return e.KtG(a.action(a.user))}),e.ALo(2,"userValues"),e.TgZ(3,"ion-avatar"),e._UZ(4,"ion-img",3),e.ALo(5,"userValuesImgAvatar"),e.qZA(),e._UZ(6,"ion-icon",4),e.qZA()()}if(2&f){const u=e.oxw();e.xp6(1),e.uIk("aria-disabled",(e.xi3(2,2,u.user,"blockade"),"abilitado.")),e.xp6(3),e.Q6J("src",e.lcZ(5,5,u.user))}}let E=(()=>{class f{constructor(u,o,a,t,n){this.avatarService=u,this.alertController=o,this.toastService=a,this.messageService=t,this.imageService=n}action(u){return(0,s.mG)(this,void 0,void 0,function*(){const{image:o}=u;return o&&u._csrf&&(o._csrf=u._csrf),o?.filename?yield(yield this.alertController.create({header:"Aten\xe7\xe3o",message:"Voc\xea pretende excluir est\xe1 foto ou substituir?",buttons:[{text:"excluir",handler:()=>this.$delete=this.avatarService.delete(o).subscribe(()=>setTimeout(()=>this.$delete.unsubscribe(),2e3))},{text:"substituir",handler:()=>(0,s.mG)(this,void 0,void 0,function*(){return yield this.startPhoto()})}]})).present():yield this.startPhoto()})}startPhoto(){return(0,s.mG)(this,void 0,void 0,function*(){const u=yield this.imageService.addPhoto();if(u){const o=yield this.imageService.readAsBase64(u);this.upload(o)}})}upload(u){var o;return(0,s.mG)(this,void 0,void 0,function*(){if(this.user){const a=yield this.toastService.loading("Transferindo imagen","top");this.avatarService.setCsrf=null===(o=this.user)||void 0===o?void 0:o._csrf,this.$upload=this.avatarService.upload(this.build(u,this.user)).subscribe({next:t=>this.success(t,t,a),error:t=>{a.dismiss(),this.messageService.error(t,void 0,void 0)}})}})}success(u,o,a){return(0,s.mG)(this,void 0,void 0,function*(){if(u.ok&&200===u.status)return this.complete(o,a)})}complete(u,o){const{body:a}=u;a&&this.update(a,o)}update(u,o){this.avatarService.setAuthAvatar(u),o.dismiss(),u&&this.$upload.unsubscribe()}build(u,o){const{file:a,fileName:t}=u,n=new FormData;return n.append("userId",String(o?.id)),n.append("_csrf",o?._csrf),n.append("filename",a,t),n}}return f.\u0275fac=function(u){return new(u||f)(e.Y36(d.o),e.Y36(p.Br),e.Y36(m.k),e.Y36(g.e),e.Y36(v.A))},f.\u0275cmp=e.Xpm({type:f,selectors:[["app-avatar-component"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","container ion-margin-vertical",4,"ngIf"],[1,"container","ion-margin-vertical"],["title","Adicionar \xe1 imagem do usu\xe1rio.","aria-label","Clique para adicionar \xe1 imagem do usu\xe1rio.","button","",3,"click"],["referrerpolicy","no-referrer","alt","Avatar","title","Imagem do usu\xe1rio",3,"src"],["color","medium","size","large","name","camera"]],template:function(u,o){1&u&&e.YNc(0,U,7,7,"div",0),2&u&&e.Q6J("ngIf",o.user)},dependencies:[b.O5,p.BJ,p.gu,p.Xz,x.g,A.n],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-self:center;position:relative;cursor:pointer}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-avatar[_ngcontent-%COMP%]{width:80px;height:80px}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{position:absolute;right:-10px;bottom:-5px}"]}),f})()},398:(P,_,i)=>{i.d(_,{r:()=>C});var s=i(4650),e=i(6895),d=i(9267),p=i(72),m=i(9777),g=i(2089);let v=(()=>{class u{transform(a,t){return!!(a&&a?.plan&&a?.plan[t])}}return u.\u0275fac=function(a){return new(a||u)},u.\u0275pipe=s.Yjl({name:"isUserValuesPlan",type:u,pure:!1}),u})();var b=i(9872);function x(u,o){1&u&&(s.TgZ(0,"span"),s._uU(1,"Gr\xe1tis"),s.qZA())}function A(u,o){1&u&&(s.TgZ(0,"span"),s._uU(1,"B\xe1sico"),s.qZA())}function U(u,o){1&u&&(s.TgZ(0,"span"),s._uU(1,"Especial"),s.qZA())}function E(u,o){if(1&u&&(s.TgZ(0,"ion-card-subtitle"),s._uU(1),s.ALo(2,"time"),s.ALo(3,"userValues"),s._UZ(4,"br"),s._uU(5),s.ALo(6,"time"),s.ALo(7,"userValues"),s.qZA()),2&u){const a=s.oxw(2);s.xp6(1),s.hij(" ",s.xi3(2,2,s.xi3(3,5,a.user,"createdAt"),"create")," "),s.xp6(4),s.hij(" ",s.xi3(6,8,s.xi3(7,11,a.user,"updatedAt"),"update")," ")}}function f(u,o){if(1&u&&(s.TgZ(0,"ion-card-content")(1,"ion-card-header")(2,"ion-card-title",1),s._uU(3),s.ALo(4,"userValues"),s._UZ(5,"br"),s.TgZ(6,"small"),s._uU(7),s.ALo(8,"userValues"),s.qZA()(),s.TgZ(9,"ion-card-subtitle",1)(10,"ion-text"),s._uU(11," Plano: "),s.YNc(12,x,2,0,"span",0),s.YNc(13,A,2,0,"span",0),s.YNc(14,U,2,0,"span",0),s.TgZ(15,"p",2),s.ALo(16,"isUserValuesPlan"),s._uU(17),s.ALo(18,"time"),s.ALo(19,"userValuesPlan"),s.qZA(),s.TgZ(20,"p",2),s.ALo(21,"isUserValuesPlan"),s._uU(22),s.ALo(23,"time"),s.ALo(24,"userValuesPlan"),s.qZA()()(),s.YNc(25,E,8,14,"ion-card-subtitle",0),s.ALo(26,"isUserValues"),s.ALo(27,"isUserValues"),s.qZA()()),2&u){const a=s.oxw();s.xp6(3),s.Oqu(s.xi3(4,10,a.user,"name")),s.xp6(4),s.Oqu(s.xi3(8,13,a.user,"email")),s.xp6(5),s.Q6J("ngIf","free"===(null==a.user||null==a.user.plan?null:a.user.plan.type)),s.xp6(1),s.Q6J("ngIf","basic"===(null==a.user||null==a.user.plan?null:a.user.plan.type)),s.xp6(1),s.Q6J("ngIf","special"===(null==a.user||null==a.user.plan?null:a.user.plan.type)),s.xp6(1),s.Q6J("hidden",!s.xi3(16,16,a.user,"start")),s.xp6(2),s.hij(" ",s.xi3(18,19,s.xi3(19,22,a.user,"start"),"create")," "),s.xp6(3),s.Q6J("hidden",!s.xi3(21,25,a.user,"end")),s.xp6(2),s.hij(" ",s.xi3(23,28,s.xi3(24,31,a.user,"end"),"plan")," "),s.xp6(3),s.Q6J("ngIf",s.xi3(26,34,a.user,"createdAt")&&s.xi3(27,37,a.user,"updatedAt"))}}let C=(()=>{class u{}return u.\u0275fac=function(a){return new(a||u)},u.\u0275cmp=s.Xpm({type:u,selectors:[["app-card-user-component"]],inputs:{user:"user"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"ion-margin-bottom"],[3,"hidden"]],template:function(a,t){1&a&&s.YNc(0,f,28,40,"ion-card-content",0),2&a&&s.Q6J("ngIf",t.user)},dependencies:[e.O5,d.FN,d.Zi,d.tO,d.Dq,d.yW,p._,m.b,g.g,v,b.C]}),u})()},2243:(P,_,i)=>{i.d(_,{h:()=>u});var s=i(655),e=i(4650),d=i(6330),p=i(3131),m=i(9267),g=i(1228),v=i(8039),b=i(6388),x=i(1616),A=i(8404);let U=(()=>{class o{constructor(t,n,r,l,c,h){this.userDestroyService=t,this.helpService=n,this.modalController=r,this.authService=l,this.loadingService=c,this.messageService=h,this.attrButton={route:"/destroy",icon:"trash",label:"Excluir usu\xe1rio",aria:"Excluir usu\xe1rio.",title:"Excluir usu\xe1rio."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.destroy(t)}destroy(t){var n;const r=this.loadingService.show("Alterando senha...");return t.value.slug=null===(n=this.user)||void 0===n?void 0:n.slug,this.write=this.isAuth?this.authService.delete(t.value).subscribe({next:l=>this.messsage(l,r),error:l=>this.messageService.error(l,r,this.write)}):this.userDestroyService.delete(t.value).subscribe({next:l=>this.messsage(l,r),error:l=>this.messageService.error(l,r,this.write)})}messsage(t,n){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,n,this.write)}getData(){this.config=Object.assign({},this.user)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d._),e.Y36(p.f),e.Y36(m.IN),e.Y36(g.e),e.Y36(v.b),e.Y36(b.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],inputs:{user:"user",label:"label",isAuth:"isAuth"},decls:15,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],["color","warning"],[1,"ion-margin-top"],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,n){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"ion-card")(4,"ion-card-header",3)(5,"ion-card-title"),e._uU(6,"Aten\xe7\xe3o!"),e.qZA()(),e.TgZ(7,"ion-card-content",4)(8,"p"),e._uU(9,"Voc\xea est\xe1 prestes a excluir sua conta do app."),e.qZA(),e.TgZ(10,"p"),e._uU(11," Ap\xf3s excluir sua conta todos os dados que est\xe3o vinculados a este usu\xe1rio n\xe3o estar\xe3o mais visiveis. "),e.qZA(),e.TgZ(12,"p"),e._uU(13," Esta a\xe7\xe3o tera um prazo de 90 dias para ser desfeita ap\xf3s est\xe1 data todos os dados ser\xe3o permanentemente excluido do sistema. "),e.qZA()()(),e.TgZ(14,"app-form",5),e.NdJ("submitDataForm",function(l){return n.onSubmit(l)})("exportForm",function(l){return n.importForm(l)}),e.qZA()()()),2&t&&(e.Q6J("label",n.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(13),e.Q6J("inputConfig",n.config)("attrButton",n.attrButton))},dependencies:[m.PM,m.FN,m.Zi,m.Dq,m.W2,m.jY,x.U,A.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),o})();var E=i(6895),f=i(9777);function C(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item",1),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.destroy())}),e.ALo(1,"isUserValues"),e.ALo(2,"isUserValues"),e.ALo(3,"isUserValues"),e._UZ(4,"ion-icon",2),e.TgZ(5,"ion-label"),e._uU(6,"Excluir"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",e.xi3(1,2,t.user,"blockade")||!e.xi3(2,5,t.user,"isPassword")),e.uIk("aria-disabled",(e.xi3(3,8,t.user,"blockade"),"abilitado."))}}let u=(()=>{class o{constructor(t){this.modalController=t}destroy(){var t;return(0,s.mG)(this,void 0,void 0,function*(){if(this.user){if(null!==(t=this.user)&&void 0!==t&&t.blockade)return;const{_csrf:n,password:r,slug:l}=this.user;return yield(yield this.modalController.create({component:U,componentProps:{isAuth:this.isAuth,action:"destroy",label:"Excluir usu\xe1rio",user:{_csrf:n,password:r,slug:l}}})).present()}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-destroy-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[["detail","true","title","Excluir usu\xe1rio","aria-label","Clique para excluir usu\xe1rio","button","",3,"disabled","click",4,"ngIf"],["detail","true","title","Excluir usu\xe1rio","aria-label","Clique para excluir usu\xe1rio","button","",3,"disabled","click"],["name","trash","slot","start"]],template:function(t,n){1&t&&e.YNc(0,C,7,11,"ion-item",0),2&t&&e.Q6J("ngIf",n.user)},dependencies:[E.O5,m.gu,m.Ie,m.Q$,f.b]}),o})()},6108:(P,_,i)=>{i.d(_,{C:()=>u});var s=i(655),e=i(4650),d=i(3131),p=i(9267),m=i(1228),g=i(8039),v=i(6388),b=i(8238),x=i(1616),A=i(8404);let U=(()=>{class o{constructor(t,n,r,l,c,h){this.helpService=t,this.modalController=n,this.authService=r,this.loadingService=l,this.messageService=c,this.emailService=h,this.attrButton={route:"/email",icon:"mail",label:"Enviar",aria:"Enviar novo email.",title:"Enviar novo email."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.email(t)}email(t){var n;const r=this.loadingService.show("Alterando email...");return t.value.slug=null===(n=this.user)||void 0===n?void 0:n.slug,this.$email=this.isAuth?this.authService.email(t.value).subscribe({next:l=>this.messsage(l,r),error:l=>this.messageService.error(l,r,this.$email)}):this.emailService.email(t.value).subscribe({next:l=>this.messsage(l,r),error:l=>this.messageService.error(l,r,this.$email)})}messsage(t,n){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,n,this.$email)}getData(){this.config=Object.assign({},this.user)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.f),e.Y36(p.IN),e.Y36(m.e),e.Y36(g.b),e.Y36(v.e),e.Y36(b.j))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],inputs:{user:"user",label:"label",isAuth:"isAuth"},decls:14,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],["color","warning"],["color","light"],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,n){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"ion-card")(4,"ion-card-header",3)(5,"ion-card-subtitle",4),e._uU(6," \u25cf Insira um email v\xe1lido."),e._UZ(7,"br"),e._uU(8," \u25cf Ser\xe1 enviado uma menssagem com um prazo de 10 minutos a partir do seu recebimento."),e._UZ(9,"br"),e._uU(10," \u25cf Verifique em sua caixa de entrada de emails."),e._UZ(11,"br"),e._uU(12," \u25cf Clique no bot\xe3o alterar email. "),e.qZA()()(),e.TgZ(13,"app-form",5),e.NdJ("submitDataForm",function(l){return n.onSubmit(l)})("exportForm",function(l){return n.importForm(l)}),e.qZA()()()),2&t&&(e.Q6J("label",n.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(12),e.Q6J("inputConfig",n.config)("attrButton",n.attrButton))},dependencies:[p.PM,p.Zi,p.tO,p.W2,p.jY,x.U,A.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),o})();var E=i(6895),f=i(9777);function C(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item",1),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.email())}),e.ALo(1,"isUserValues"),e.ALo(2,"isUserValues"),e.ALo(3,"isUserValues"),e._UZ(4,"ion-icon",2),e.TgZ(5,"ion-label"),e._uU(6,"Email"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",e.xi3(1,2,e.xi3(2,5,t.user,"blockade")||!t.user,"isPassword")),e.uIk("aria-disabled",(e.xi3(3,8,t.user,"blockade"),"abilitado."))}}let u=(()=>{class o{constructor(t){this.modalController=t}email(){var t;return(0,s.mG)(this,void 0,void 0,function*(){if(this.user){if(null!==(t=this.user)&&void 0!==t&&t.blockade)return;const{_csrf:n,email:r,slug:l,password:c}=this.user;return yield(yield this.modalController.create({component:U,componentProps:{action:"email",label:"Editar email",isAuth:this.isAuth,user:{_csrf:n,email:r,slug:l,password:c}}})).present()}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(p.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-email-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[["detail","true","title","Alterar email","aria-label","Clique para alterar email","button","",3,"disabled","click",4,"ngIf"],["detail","true","title","Alterar email","aria-label","Clique para alterar email","button","",3,"disabled","click"],["name","mail","slot","start"]],template:function(t,n){1&t&&e.YNc(0,C,7,11,"ion-item",0),2&t&&e.Q6J("ngIf",n.user)},dependencies:[E.O5,p.gu,p.Ie,p.Q$,f.b]}),o})()},2592:(P,_,i)=>{i.d(_,{j:()=>u});var s=i(655),e=i(4650),d=i(6024),p=i(3131),m=i(9267),g=i(1228),v=i(8039),b=i(6388),x=i(1616),A=i(8404);let U=(()=>{class o{constructor(t,n,r,l,c,h){this.nameService=t,this.helpService=n,this.modalController=r,this.authService=l,this.loadingService=c,this.messageService=h,this.attrButton={route:"/name",icon:"cloud-upload",label:"Salvar",aria:"Salvar nome e sobrenome.",title:"Salvar nome e sobrenome."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.name(t)}name(t){const n=this.loadingService.show("Salvando nome...");return this.$name=this.isAuth?this.authService.name(t.value).subscribe({next:r=>this.messsage(r,n),error:r=>this.messageService.error(r,n,this.$name)}):this.nameService.name(t.value).subscribe({next:r=>this.messsage(r,n),error:r=>this.messageService.error(r,n,this.$name)})}messsage(t,n){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,n,this.$name)}getData(){this.config=Object.assign({},this.user)}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.o),e.Y36(p.f),e.Y36(m.IN),e.Y36(g.e),e.Y36(v.b),e.Y36(b.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],inputs:{user:"user",label:"label",isAuth:"isAuth"},decls:4,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,n){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"app-form",3),e.NdJ("submitDataForm",function(l){return n.onSubmit(l)})("exportForm",function(l){return n.importForm(l)}),e.qZA()()()),2&t&&(e.Q6J("label",n.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("inputConfig",n.config)("attrButton",n.attrButton))},dependencies:[m.W2,m.jY,x.U,A.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),o})();var E=i(6895),f=i(9777);function C(o,a){if(1&o){const t=e.EpF();e.TgZ(0,"ion-item",1),e.NdJ("click",function(){e.CHM(t);const r=e.oxw();return e.KtG(r.name())}),e.ALo(1,"isUserValues"),e.ALo(2,"isUserValues"),e._UZ(3,"ion-icon",2),e.TgZ(4,"ion-label"),e._uU(5,"Nome"),e.qZA()()}if(2&o){const t=e.oxw();e.Q6J("disabled",e.xi3(1,2,t.user,"blockade")),e.uIk("aria-disabled",(e.xi3(2,5,t.user,"blockade"),"abilitado."))}}let u=(()=>{class o{constructor(t){this.modalController=t}name(){var t;return(0,s.mG)(this,void 0,void 0,function*(){if(this.user){if(null!==(t=this.user)&&void 0!==t&&t.blockade)return;const{_csrf:n,firstName:r,lastName:l,slug:c}=this.user;return yield(yield this.modalController.create({component:U,componentProps:{isAuth:this.isAuth,action:"name",label:"Editar usu\xe1rio",user:{_csrf:n,firstName:r,lastName:l,slug:c}}})).present()}})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(m.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-name-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[["detail","true","title","Alterar nome e sobrenome","aria-label","Clique para alterar nome e sobrenome","button","",3,"disabled","click",4,"ngIf"],["detail","true","title","Alterar nome e sobrenome","aria-label","Clique para alterar nome e sobrenome","button","",3,"disabled","click"],["name","create","slot","start"]],template:function(t,n){1&t&&e.YNc(0,C,6,8,"ion-item",0),2&t&&e.Q6J("ngIf",n.user)},dependencies:[E.O5,m.gu,m.Ie,m.Q$,f.b]}),o})()},6211:(P,_,i)=>{i.d(_,{D:()=>a});var s=i(655),e=i(4650),d=i(9050),p=i(3131),m=i(9267),g=i(1228),v=i(8039),b=i(6388),x=i(1616),A=i(8404);let U=(()=>{class t{constructor(r,l,c,h,F,y){this.adminPasswordService=r,this.helpService=l,this.modalController=c,this.authService=h,this.loadingService=F,this.messageService=y,this.attrButton={route:"/new-password",icon:"key",label:"Salvar",aria:"Salvar senha.",title:"Salvar senha."}}ngOnInit(){this.getData()}importForm(r){return this.form=r}onSubmit(r){return this.password(r)}password(r){var l;const c=this.loadingService.show("Armazenar senha...");return r.value.slug=null===(l=this.user)||void 0===l?void 0:l.slug,this.$password=this.isAuth?this.authService.password(r.value).subscribe({next:h=>this.messsage(h,c),error:h=>this.messageService.error(h,c,this.$password)}):this.adminPasswordService.password(r.value).subscribe({next:h=>this.messsage(h,c),error:h=>this.messageService.error(h,c,this.$password)})}messsage(r,l){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(r?.message,l,this.$password)}getData(){this.config=Object.assign({},this.user)}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(d.F),e.Y36(p.f),e.Y36(m.IN),e.Y36(g.e),e.Y36(v.b),e.Y36(b.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],inputs:{user:"user",action:"action",label:"label",isAuth:"isAuth"},decls:4,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(r,l){1&r&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"app-form",3),e.NdJ("submitDataForm",function(h){return l.onSubmit(h)})("exportForm",function(h){return l.importForm(h)}),e.qZA()()()),2&r&&(e.Q6J("label",l.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("inputConfig",l.config)("attrButton",l.attrButton))},dependencies:[m.W2,m.jY,x.U,A.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),t})();var E=i(6895),f=i(9777);function C(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"ion-item",3),e.NdJ("click",function(){e.CHM(r);const c=e.oxw(2);return e.KtG(c.password())}),e.ALo(1,"isUserValues"),e.ALo(2,"isUserValues"),e._UZ(3,"ion-icon",4),e.TgZ(4,"ion-label"),e._uU(5,"Senha"),e.qZA()()}if(2&t){const r=e.oxw(2);e.Q6J("disabled",e.xi3(1,2,r.user,"blockade")),e.uIk("aria-disabled",(e.xi3(2,5,r.user,"blockade"),"abilitado."))}}function u(t,n){if(1&t){const r=e.EpF();e.TgZ(0,"ion-item",5),e.NdJ("click",function(){e.CHM(r);const c=e.oxw(2);return e.KtG(c.passwordCreate(c.user))}),e.ALo(1,"isUserValues"),e._UZ(2,"ion-icon",4),e.TgZ(3,"ion-label"),e._uU(4,"Senha"),e.qZA()()}if(2&t){const r=e.oxw(2);e.Q6J("disabled",e.xi3(1,1,r.user,"blockade"))}}function o(t,n){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,C,6,8,"ion-item",1),e.YNc(2,u,5,4,"ng-template",null,2,e.W1O),e.qZA()),2&t){const r=e.MAs(3),l=e.oxw();e.xp6(1),e.Q6J("ngIf",null==l.user?null:l.user.isPassword)("ngIfElse",r)}}let a=(()=>{class t{constructor(r){this.modalController=r}password(){var r;return(0,s.mG)(this,void 0,void 0,function*(){if(this.user){if(null!==(r=this.user)&&void 0!==r&&r.blockade)return;const{_csrf:l,password:c,slug:h}=this.user;return yield(yield this.modalController.create({component:U,componentProps:{isAuth:this.isAuth,action:"password",label:"Editar senha",user:{_csrf:l,password:c,passwordConfirmation:null,passwordCurrent:null,slug:h}}})).present()}})}passwordCreate(r){return(0,s.mG)(this,void 0,void 0,function*(){if(r?.blockade)return;const{_csrf:l,password:c,slug:h}=r;return yield(yield this.modalController.create({component:U,componentProps:{action:"passwordCreate",label:"Cadastrar senha",user:{_csrf:l,password:c,passwordConfirmation:null,slug:h}}})).present()})}}return t.\u0275fac=function(r){return new(r||t)(e.Y36(m.IN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-password-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[[4,"ngIf"],["detail","true","title","Alterar senha","aria-label","Clique para editar senha","button","",3,"disabled","click",4,"ngIf","ngIfElse"],["IsPassword",""],["detail","true","title","Alterar senha","aria-label","Clique para editar senha","button","",3,"disabled","click"],["name","key","slot","start"],["detail","true","title","Cadastrar senha","aria-label","Clique para cadastrar senha","aria-disabled","Bot\xe3o cadastrar senha.","button","",3,"disabled","click"]],template:function(r,l){1&r&&e.YNc(0,o,4,2,"span",0),2&r&&e.Q6J("ngIf",l.user)},dependencies:[E.O5,m.gu,m.Ie,m.Q$,f.b]}),t})()},9777:(P,_,i)=>{i.d(_,{b:()=>e});var s=i(4650);let e=(()=>{class d{transform(m,g){return!(!m||!m[g])}}return d.\u0275fac=function(m){return new(m||d)},d.\u0275pipe=s.Yjl({name:"isUserValues",type:d,pure:!1}),d})()},9872:(P,_,i)=>{i.d(_,{C:()=>e});var s=i(4650);let e=(()=>{class d{transform(m,g){if(m&&m?.plan&&m?.plan[g])return m?.plan[g]}}return d.\u0275fac=function(m){return new(m||d)},d.\u0275pipe=s.Yjl({name:"userValuesPlan",type:d,pure:!1}),d})()}}]);