"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[890],{7302:(E,C,i)=>{i.d(C,{A:()=>A});var o=i(655),e=i(4650),_=i(541),v=i(9267),m=i(9524),b=i(6388),U=i(6895);function x(d,f){if(1&d){const s=e.EpF();e.TgZ(0,"div",1)(1,"div",2),e.NdJ("click",function(){e.CHM(s);const c=e.MAs(6),r=e.MAs(8),p=e.oxw();return e.KtG(p.action(p.user,c,r))}),e.TgZ(2,"ion-avatar"),e._UZ(3,"ion-img",3),e.qZA(),e._UZ(4,"ion-icon",4),e.qZA(),e.TgZ(5,"input",5,6),e.NdJ("change",function(){e.CHM(s);const c=e.MAs(6),r=e.oxw();return e.KtG(r.sendFile(c,r.user))}),e.qZA(),e.TgZ(7,"input",7,8),e.NdJ("change",function(){e.CHM(s);const c=e.MAs(8),r=e.oxw();return e.KtG(r.sendFile(c,r.user))}),e.qZA()()}if(2&d){const s=e.oxw();e.xp6(1),e.uIk("aria-disabled","abilitado."),e.xp6(2),e.Q6J("src",null!=s.user&&null!=s.user.image&&s.user.image.filename?"/images/avatar/"+(null==s.user||null==s.user.image?null:s.user.image.filename):"./../../../../../../assets/avatar.svg")}}let A=(()=>{class d{constructor(s,u,c,r,p,t){this.avatarService=s,this.alertController=u,this.plt=c,this.toastService=r,this.actionSheetController=p,this.messageService=t}ngOnInit(){this.plt.ready().then(()=>this.togglePLatform())}action(s,u,c){return(0,o.mG)(this,void 0,void 0,function*(){const{image:r}=s;return r._csrf=s._csrf,r?.filename?yield(yield this.alertController.create({header:"Aten\xe7\xe3o",message:"Voc\xea pretende excluir est\xe1 foto ou substituir?",buttons:[{text:"excluir",handler:()=>this.$delete=this.avatarService.delete(r).subscribe(()=>setTimeout(()=>this.$delete.unsubscribe(),2e3))},{text:"substituir",handler:()=>this.isMobile?this.selectImage(u,c):u.click()}]})).present():this.isMobile?this.selectImage(u,c):c.click()})}selectImage(s,u){return(0,o.mG)(this,void 0,void 0,function*(){const c=yield this.actionSheetController.create({header:"Selecionar fonte da imagem",buttons:[{text:"Carregar da biblioteca",icon:"images",handler:()=>s.click()},{text:"Usar Camera",icon:"camera",handler:()=>u.click()},{text:"Cancelar",icon:"close-circle",role:"cancel",handler:()=>c.dismiss()}]});yield c.present()})}sendFile(s,u){if(0===s.files.length)return!1;const c=this.toastService.loading("Transferindo imagen","top");this.avatarService.setCsrf=u?._csrf,this.upload=this.avatarService.upload(this.build(s.files[0],u)).subscribe({next:r=>this.success(r,r,c),error:r=>this.messageService.error(r,null,this.upload)})}success(s,u,c){return(0,o.mG)(this,void 0,void 0,function*(){if(s.ok&&200===s.status)return this.complete(u,c)})}complete(s,u){const{body:c}=s;c&&this.update(c,u)}update(s,u){return(0,o.mG)(this,void 0,void 0,function*(){this.avatarService.setAuthAvatar(s),(yield u).dismiss(),s&&this.upload.unsubscribe()})}togglePLatform(){return this.isMobile=this.plt.is("mobile")}build(s,u){const c=new FormData;return c.append("userId",String(u?.id)),c.append("_csrf",u?._csrf),c.append("filename",s,s?.name),c}}return d.\u0275fac=function(s){return new(s||d)(e.Y36(_.o),e.Y36(v.Br),e.Y36(v.t4),e.Y36(m.k),e.Y36(v.BX),e.Y36(b.e))},d.\u0275cmp=e.Xpm({type:d,selectors:[["app-avatar-component"]],inputs:{user:"user"},decls:1,vars:1,consts:[["class","container ion-margin-vertical",4,"ngIf"],[1,"container","ion-margin-vertical"],["title","Adicionar \xe1 imagem do usu\xe1rio.","aria-label","Clique para adicionar \xe1 imagem do usu\xe1rio.","button","",3,"click"],["referrerpolicy","no-referrer","alt","Avatar","title","Imagem do usu\xe1rio",3,"src"],["color","medium","size","large","name","camera"],["type","file","accept","image/*",1,"inputFiles",3,"change"],["files",""],["type","file","accept","image/*","capture","camera",1,"inputFiles",3,"change"],["file",""]],template:function(s,u){1&s&&e.YNc(0,x,9,2,"div",0),2&s&&e.Q6J("ngIf",u.user)},dependencies:[U.O5,v.BJ,v.gu,v.Xz],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-self:center;position:relative;cursor:pointer}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-avatar[_ngcontent-%COMP%]{width:80px;height:80px}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{position:absolute;right:-10px;bottom:-5px}"]}),d})()},7323:(E,C,i)=>{i.d(C,{r:()=>A});var o=i(4650),e=i(6895),_=i(9267),v=i(1007);function m(d,f){1&d&&(o.TgZ(0,"span"),o._uU(1,"Gr\xe1tis"),o.qZA())}function b(d,f){1&d&&(o.TgZ(0,"span"),o._uU(1,"B\xe1sico"),o.qZA())}function U(d,f){1&d&&(o.TgZ(0,"span"),o._uU(1,"Especial"),o.qZA())}function x(d,f){if(1&d&&(o.TgZ(0,"ion-card-content")(1,"ion-card-header")(2,"ion-card-title",1),o._uU(3),o._UZ(4,"br"),o.TgZ(5,"small"),o._uU(6),o.qZA()(),o.TgZ(7,"ion-card-subtitle",1)(8,"ion-text"),o._uU(9," Plano: "),o.YNc(10,m,2,0,"span",0),o.YNc(11,b,2,0,"span",0),o.YNc(12,U,2,0,"span",0),o.TgZ(13,"p",2),o._uU(14),o.ALo(15,"time"),o.qZA(),o.TgZ(16,"p",2),o._uU(17),o.ALo(18,"time"),o.qZA()()(),o.TgZ(19,"ion-card-subtitle"),o._uU(20),o.ALo(21,"time"),o._UZ(22,"br"),o._uU(23),o.ALo(24,"time"),o.qZA()()()),2&d){const s=o.oxw();o.xp6(3),o.Oqu(null==s.user?null:s.user.name),o.xp6(3),o.Oqu(null==s.user?null:s.user.email),o.xp6(4),o.Q6J("ngIf","free"===(null==s.user||null==s.user.plan?null:s.user.plan.type)),o.xp6(1),o.Q6J("ngIf","basic"===(null==s.user||null==s.user.plan?null:s.user.plan.type)),o.xp6(1),o.Q6J("ngIf","special"===(null==s.user||null==s.user.plan?null:s.user.plan.type)),o.xp6(1),o.Q6J("hidden",!(null!=s.user&&null!=s.user.plan&&s.user.plan.start)),o.xp6(1),o.hij(" ",o.xi3(15,11,null==s.user||null==s.user.plan?null:s.user.plan.start,"create")," "),o.xp6(2),o.Q6J("hidden",!(null!=s.user&&null!=s.user.plan&&s.user.plan.end)),o.xp6(1),o.Oqu(o.xi3(18,14,null==s.user||null==s.user.plan?null:s.user.plan.end,"plan")),o.xp6(3),o.hij(" ",o.xi3(21,17,null==s.user?null:s.user.createdAt,"create")," "),o.xp6(3),o.hij(" ",o.xi3(24,20,null==s.user?null:s.user.updatedAt,"update")," ")}}let A=(()=>{class d{}return d.\u0275fac=function(s){return new(s||d)},d.\u0275cmp=o.Xpm({type:d,selectors:[["app-card-user-component"]],inputs:{user:"user"},decls:1,vars:1,consts:[[4,"ngIf"],[1,"ion-margin-bottom"],[3,"hidden"]],template:function(s,u){1&s&&o.YNc(0,x,25,23,"ion-card-content",0),2&s&&o.Q6J("ngIf",u.user)},dependencies:[e.O5,_.FN,_.Zi,_.tO,_.Dq,_.yW,v._]}),d})()},2243:(E,C,i)=>{i.d(C,{h:()=>c});var o=i(655),e=i(4650),_=i(6330),v=i(3131),m=i(9267),b=i(1228),U=i(8039),x=i(6388),A=i(2077),d=i(8404);let f=(()=>{class r{constructor(t,a,n,l,h,g){this.userDestroyService=t,this.helpService=a,this.modalController=n,this.authService=l,this.loadingService=h,this.messageService=g,this.attrButton={route:"/destroy",icon:"trash",label:"Excluir usu\xe1rio",fill:!1,aria:"Excluir usu\xe1rio.",title:"Excluir usu\xe1rio."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.destroy(t)}destroy(t){var a;const n=this.loadingService.show("Alterando senha...");return t.value.slug=null===(a=this.user)||void 0===a?void 0:a.slug,this.write=this.isAuth?this.authService.delete(t.value).subscribe({next:l=>this.messsage(l,n),error:l=>this.messageService.error(l,n,this.write)}):this.userDestroyService.delete(t.value).subscribe({next:l=>this.messsage(l,n),error:l=>this.messageService.error(l,n,this.write)})}messsage(t,a){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,a,this.write)}getData(){this.config=Object.assign({},this.user)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(_._),e.Y36(v.f),e.Y36(m.IN),e.Y36(b.e),e.Y36(U.b),e.Y36(x.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],inputs:{user:"user",label:"label",isAuth:"isAuth"},decls:15,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],["color","warning"],[1,"ion-margin-top"],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,a){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"ion-card")(4,"ion-card-header",3)(5,"ion-card-title"),e._uU(6,"Aten\xe7\xe3o!"),e.qZA()(),e.TgZ(7,"ion-card-content",4)(8,"p"),e._uU(9,"Voc\xea est\xe1 prestes a excluir sua conta do app."),e.qZA(),e.TgZ(10,"p"),e._uU(11," Ap\xf3s excluir sua conta todos os dados que est\xe3o vinculados a este usu\xe1rio n\xe3o estar\xe3o mais visiveis. "),e.qZA(),e.TgZ(12,"p"),e._uU(13," Esta a\xe7\xe3o tera um prazo de 90 dias para ser desfeita ap\xf3s est\xe1 data todos os dados ser\xe3o permanentemente excluido do sistema. "),e.qZA()()(),e.TgZ(14,"app-form",5),e.NdJ("submitDataForm",function(l){return a.onSubmit(l)})("exportForm",function(l){return a.importForm(l)}),e.qZA()()()),2&t&&(e.Q6J("label",a.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(13),e.Q6J("inputConfig",a.config)("attrButton",a.attrButton))},dependencies:[m.PM,m.FN,m.Zi,m.Dq,m.W2,m.jY,A.U,d.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),r})();var s=i(6895);function u(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"ion-item",1),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.destroy())}),e._UZ(1,"ion-icon",2),e.TgZ(2,"ion-label"),e._uU(3,"Excluir"),e.qZA()()}if(2&r){const t=e.oxw();e.Q6J("disabled",(null==t.user?null:t.user.blockade)||!(null!=t.user&&t.user.isPassword)),e.uIk("aria-disabled","abilitado.")}}let c=(()=>{class r{constructor(t){this.modalController=t}destroy(){var t;return(0,o.mG)(this,void 0,void 0,function*(){if(null!==(t=this.user)&&void 0!==t&&t.blockade)return;const{_csrf:a,password:n,slug:l}=this.user;return yield(yield this.modalController.create({component:f,componentProps:{isAuth:this.isAuth,action:"destroy",label:"Excluir usu\xe1rio",user:{_csrf:a,password:n,slug:l}}})).present()})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.IN))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-destroy-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[["detail","true","title","Excluir usu\xe1rio","aria-label","Clique para excluir usu\xe1rio","button","",3,"disabled","click",4,"ngIf"],["detail","true","title","Excluir usu\xe1rio","aria-label","Clique para excluir usu\xe1rio","button","",3,"disabled","click"],["name","trash","slot","start"]],template:function(t,a){1&t&&e.YNc(0,u,4,2,"ion-item",0),2&t&&e.Q6J("ngIf",a.user)},dependencies:[s.O5,m.gu,m.Ie,m.Q$]}),r})()},6108:(E,C,i)=>{i.d(C,{C:()=>c});var o=i(655),e=i(4650),_=i(3131),v=i(9267),m=i(1228),b=i(8039),U=i(6388),x=i(8238),A=i(2077),d=i(8404);let f=(()=>{class r{constructor(t,a,n,l,h,g){this.helpService=t,this.modalController=a,this.authService=n,this.loadingService=l,this.messageService=h,this.emailService=g,this.attrButton={route:"/email",icon:"mail",label:"Enviar",fill:!1,aria:"Enviar novo email.",title:"Enviar novo email."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.email(t)}email(t){var a;const n=this.loadingService.show("Alterando email...");return t.value.slug=null===(a=this.user)||void 0===a?void 0:a.slug,this.$email=this.isAuth?this.authService.email(t.value).subscribe({next:l=>this.messsage(l,n),error:l=>this.messageService.error(l,n,this.$email)}):this.emailService.email(t.value).subscribe({next:l=>this.messsage(l,n),error:l=>this.messageService.error(l,n,this.$email)})}messsage(t,a){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,a,this.$email)}getData(){this.config=Object.assign({},this.user)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(_.f),e.Y36(v.IN),e.Y36(m.e),e.Y36(b.b),e.Y36(U.e),e.Y36(x.j))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],inputs:{user:"user",label:"label",isAuth:"isAuth"},decls:14,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],["color","warning"],["color","light"],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,a){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"ion-card")(4,"ion-card-header",3)(5,"ion-card-subtitle",4),e._uU(6," \u25cf Insira um email v\xe1lido."),e._UZ(7,"br"),e._uU(8," \u25cf Ser\xe1 enviado uma menssagem com um prazo de 10 minutos a partir do seu recebimento."),e._UZ(9,"br"),e._uU(10," \u25cf Verifique em sua caixa de entrada de emails."),e._UZ(11,"br"),e._uU(12," \u25cf Clique no bot\xe3o alterar email. "),e.qZA()()(),e.TgZ(13,"app-form",5),e.NdJ("submitDataForm",function(l){return a.onSubmit(l)})("exportForm",function(l){return a.importForm(l)}),e.qZA()()()),2&t&&(e.Q6J("label",a.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(12),e.Q6J("inputConfig",a.config)("attrButton",a.attrButton))},dependencies:[v.PM,v.Zi,v.tO,v.W2,v.jY,A.U,d.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),r})();var s=i(6895);function u(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"ion-item",1),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.email())}),e._UZ(1,"ion-icon",2),e.TgZ(2,"ion-label"),e._uU(3,"Email"),e.qZA()()}if(2&r){const t=e.oxw();e.Q6J("disabled",(null==t.user?null:t.user.blockade)||!(null!=t.user&&t.user.isPassword)),e.uIk("aria-disabled","abilitado.")}}let c=(()=>{class r{constructor(t){this.modalController=t}email(){var t;return(0,o.mG)(this,void 0,void 0,function*(){if(null!==(t=this.user)&&void 0!==t&&t.blockade)return;const{_csrf:a,email:n,slug:l,password:h}=this.user;return yield(yield this.modalController.create({component:f,componentProps:{action:"email",label:"Editar email",isAuth:this.isAuth,user:{_csrf:a,email:n,slug:l,password:h}}})).present()})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(v.IN))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-email-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[["detail","true","title","Alterar email","aria-label","Clique para alterar email","button","",3,"disabled","click",4,"ngIf"],["detail","true","title","Alterar email","aria-label","Clique para alterar email","button","",3,"disabled","click"],["name","mail","slot","start"]],template:function(t,a){1&t&&e.YNc(0,u,4,2,"ion-item",0),2&t&&e.Q6J("ngIf",a.user)},dependencies:[s.O5,v.gu,v.Ie,v.Q$]}),r})()},2592:(E,C,i)=>{i.d(C,{j:()=>c});var o=i(655),e=i(4650),_=i(6024),v=i(3131),m=i(9267),b=i(1228),U=i(8039),x=i(6388),A=i(2077),d=i(8404);let f=(()=>{class r{constructor(t,a,n,l,h,g){this.nameService=t,this.helpService=a,this.modalController=n,this.authService=l,this.loadingService=h,this.messageService=g,this.attrButton={route:"/name",icon:"cloud-upload",label:"Salvar",fill:!1,aria:"Salvar nome e sobrenome.",title:"Salvar nome e sobrenome."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.name(t)}name(t){const a=this.loadingService.show("Salvando nome...");return this.$name=this.isAuth?this.authService.name(t.value).subscribe({next:n=>this.messsage(n,a),error:n=>this.messageService.error(n,a,this.$name)}):this.nameService.name(t.value).subscribe({next:n=>this.messsage(n,a),error:n=>this.messageService.error(n,a,this.$name)})}messsage(t,a){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,a,this.$name)}getData(){this.config=Object.assign({},this.user)}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(_.o),e.Y36(v.f),e.Y36(m.IN),e.Y36(b.e),e.Y36(U.b),e.Y36(x.e))},r.\u0275cmp=e.Xpm({type:r,selectors:[["ng-component"]],inputs:{user:"user",label:"label",isAuth:"isAuth"},decls:4,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,a){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"app-form",3),e.NdJ("submitDataForm",function(l){return a.onSubmit(l)})("exportForm",function(l){return a.importForm(l)}),e.qZA()()()),2&t&&(e.Q6J("label",a.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("inputConfig",a.config)("attrButton",a.attrButton))},dependencies:[m.W2,m.jY,A.U,d.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),r})();var s=i(6895);function u(r,p){if(1&r){const t=e.EpF();e.TgZ(0,"ion-item",1),e.NdJ("click",function(){e.CHM(t);const n=e.oxw();return e.KtG(n.name())}),e._UZ(1,"ion-icon",2),e.TgZ(2,"ion-label"),e._uU(3,"Nome"),e.qZA()()}if(2&r){const t=e.oxw();e.Q6J("disabled",null==t.user?null:t.user.blockade),e.uIk("aria-disabled","abilitado.")}}let c=(()=>{class r{constructor(t){this.modalController=t}name(){var t;return(0,o.mG)(this,void 0,void 0,function*(){if(null!==(t=this.user)&&void 0!==t&&t.blockade)return;const{_csrf:a,firstName:n,lastName:l,slug:h}=this.user;return yield(yield this.modalController.create({component:f,componentProps:{isAuth:this.isAuth,action:"name",label:"Editar usu\xe1rio",user:{_csrf:a,firstName:n,lastName:l,slug:h}}})).present()})}}return r.\u0275fac=function(t){return new(t||r)(e.Y36(m.IN))},r.\u0275cmp=e.Xpm({type:r,selectors:[["app-name-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[["detail","true","title","Alterar nome e sobrenome","aria-label","Clique para alterar nome e sobrenome","button","",3,"disabled","click",4,"ngIf"],["detail","true","title","Alterar nome e sobrenome","aria-label","Clique para alterar nome e sobrenome","button","",3,"disabled","click"],["name","create","slot","start"]],template:function(t,a){1&t&&e.YNc(0,u,4,2,"ion-item",0),2&t&&e.Q6J("ngIf",a.user)},dependencies:[s.O5,m.gu,m.Ie,m.Q$]}),r})()},6211:(E,C,i)=>{i.d(C,{D:()=>p});var o=i(655),e=i(4650),_=i(9050),v=i(3131),m=i(9267),b=i(1228),U=i(8039),x=i(6388),A=i(2077),d=i(8404);let f=(()=>{class t{constructor(n,l,h,g,F,T){this.adminPasswordService=n,this.helpService=l,this.modalController=h,this.authService=g,this.loadingService=F,this.messageService=T,this.attrButton={route:"/new-password",icon:"key",label:"Salvar",fill:!1,aria:"Salvar senha.",title:"Salvar senha."}}ngOnInit(){this.getData()}importForm(n){return this.form=n}onSubmit(n){return this.password(n)}password(n){var l;const h=this.loadingService.show("Armazenar senha...");return n.value.slug=null===(l=this.user)||void 0===l?void 0:l.slug,this.$password=this.isAuth?this.authService.password(n.value).subscribe({next:g=>this.messsage(g,h),error:g=>this.messageService.error(g,h,this.$password)}):this.adminPasswordService.password(n.value).subscribe({next:g=>this.messsage(g,h),error:g=>this.messageService.error(g,h,this.$password)})}messsage(n,l){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(n?.message,l,this.$password)}getData(){this.config=Object.assign({},this.user)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(_.F),e.Y36(v.f),e.Y36(m.IN),e.Y36(b.e),e.Y36(U.b),e.Y36(x.e))},t.\u0275cmp=e.Xpm({type:t,selectors:[["ng-component"]],inputs:{user:"user",action:"action",label:"label",isAuth:"isAuth"},decls:4,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(n,l){1&n&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"app-form",3),e.NdJ("submitDataForm",function(g){return l.onSubmit(g)})("exportForm",function(g){return l.importForm(g)}),e.qZA()()()),2&n&&(e.Q6J("label",l.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("inputConfig",l.config)("attrButton",l.attrButton))},dependencies:[m.W2,m.jY,A.U,d.s],styles:["ion-content[_ngcontent-%COMP%]{--padding-top: 0px !important}"]}),t})();var s=i(6895);function u(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",3),e.NdJ("click",function(){e.CHM(n);const h=e.oxw(2);return e.KtG(h.password())}),e._UZ(1,"ion-icon",4),e.TgZ(2,"ion-label"),e._uU(3,"Senha"),e.qZA()()}if(2&t){const n=e.oxw(2);e.Q6J("disabled",null==n.user?null:n.user.blockade),e.uIk("aria-disabled","abilitado.")}}function c(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"ion-item",5),e.NdJ("click",function(){e.CHM(n);const h=e.oxw(2);return e.KtG(h.passwordCreate(h.user))}),e._UZ(1,"ion-icon",4),e.TgZ(2,"ion-label"),e._uU(3,"Senha"),e.qZA()()}if(2&t){const n=e.oxw(2);e.Q6J("disabled",null==n.user?null:n.user.blockade)}}function r(t,a){if(1&t&&(e.TgZ(0,"span"),e.YNc(1,u,4,2,"ion-item",1),e.YNc(2,c,4,1,"ng-template",null,2,e.W1O),e.qZA()),2&t){const n=e.MAs(3),l=e.oxw();e.xp6(1),e.Q6J("ngIf",null==l.user?null:l.user.isPassword)("ngIfElse",n)}}let p=(()=>{class t{constructor(n){this.modalController=n}password(){var n;return(0,o.mG)(this,void 0,void 0,function*(){if(null!==(n=this.user)&&void 0!==n&&n.blockade)return;const{_csrf:l,password:h,slug:g}=this.user;return yield(yield this.modalController.create({component:f,componentProps:{isAuth:this.isAuth,action:"password",label:"Editar senha",user:{_csrf:l,password:h,passwordConfirmation:null,passwordCurrent:null,slug:g}}})).present()})}passwordCreate(n){return(0,o.mG)(this,void 0,void 0,function*(){if(n?.blockade)return;const{_csrf:l,password:h,slug:g}=n;return yield(yield this.modalController.create({component:f,componentProps:{action:"passwordCreate",label:"Cadastrar senha",user:{_csrf:l,password:h,passwordConfirmation:null,slug:g}}})).present()})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.IN))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-password-user-component"]],inputs:{user:"user",isAuth:"isAuth"},decls:1,vars:1,consts:[[4,"ngIf"],["detail","true","title","Alterar senha","aria-label","Clique para editar senha","button","",3,"disabled","click",4,"ngIf","ngIfElse"],["IsPassword",""],["detail","true","title","Alterar senha","aria-label","Clique para editar senha","button","",3,"disabled","click"],["name","key","slot","start"],["detail","true","title","Cadastrar senha","aria-label","Clique para cadastrar senha","aria-disabled","Bot\xe3o cadastrar senha.","button","",3,"disabled","click"]],template:function(n,l){1&n&&e.YNc(0,r,4,2,"span",0),2&n&&e.Q6J("ngIf",l.user)},dependencies:[s.O5,m.gu,m.Ie,m.Q$]}),t})()}}]);