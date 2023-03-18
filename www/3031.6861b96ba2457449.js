"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3031],{3031:(j,p,s)=>{s.r(p),s.d(p,{ManagementPageModule:()=>B});var m=s(6895),d=s(433),r=s(9267),g=s(5203),e=s(4650),b=s(7150),Z=s(5707),u=s(6388);let _=(()=>{class o{constructor(t,n,a){this.fb=t,this.stateService=n,this.messageService=a}state(t){const{slug:n,_csrf:a}=t;return this.form=this.fb.group({slug:n,_csrf:a}),this.$state=this.stateService.state(this.form.value).subscribe({next:c=>this.messageService.success(c?.message,null,this.$state,350),error:c=>this.messageService.error(c,null,this.$state)})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(d.qu),e.Y36(Z.b),e.Y36(u.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-category-announcement-state-component"]],inputs:{category:"category"},decls:5,vars:3,consts:[["slot","end","title","Alternar entre usu\xe1rio conectado ou desligado.","aria-label","Clique para alternar entre usu\xe1rio conectado ou desligado.",3,"checked","ionChange"],["slot","start",3,"name"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-item")(1,"ion-label"),e._uU(2),e.qZA(),e.TgZ(3,"ion-toggle",0),e.NdJ("ionChange",function(){return n.state(n.category)}),e.qZA(),e._UZ(4,"ion-icon",1),e.qZA()),2&t&&(e.xp6(2),e.Oqu(null!=n.category&&n.category.state?"Online":"Offline"),e.xp6(1),e.Q6J("checked",null==n.category?null:n.category.state),e.xp6(1),e.Q6J("name",null!=n.category&&n.category.state?"power":"radio-button-off"))},dependencies:[r.gu,r.Ie,r.Q$,r.ho,r.w]}),o})();var y=s(655),h=s(3131),A=s(3405),f=s(8039),C=s(2077),v=s(8404);let F=(()=>{class o{constructor(t,n,a,c,l){this.helpService=t,this.modalController=n,this.categoryService=a,this.messageService=c,this.loadingService=l,this.attrButton={route:"/category",icon:"create",label:"Editar",fill:!1,aria:"Editar categoria.",title:"Editar categoria."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.update(t)}update(t){const n=this.loadingService.show("Cadastrar categoria...");return this.write=this.categoryService.updateNameAndDescription(t.value).subscribe({next:a=>this.messsage(a,n),error:a=>this.messageService.error(a,n,this.write)})}messsage(t,n){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,n,this.write)}getData(){const{_csrf:t,name:n,description:a,slug:c}=this.category;this.config={_csrf:t,name:n,description:a,slug:c}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.f),e.Y36(r.IN),e.Y36(A.Q),e.Y36(u.e),e.Y36(f.b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],inputs:{category:"category",action:"action",label:"label"},decls:4,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,n){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"app-form",3),e.NdJ("submitDataForm",function(c){return n.onSubmit(c)})("exportForm",function(c){return n.importForm(c)}),e.qZA()()()),2&t&&(e.Q6J("label",n.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(2),e.Q6J("inputConfig",n.config)("attrButton",n.attrButton))},dependencies:[r.W2,r.jY,C.U,v.s]}),o})(),S=(()=>{class o{constructor(t){this.modalController=t}name(){return(0,y.mG)(this,void 0,void 0,function*(){const{_csrf:t,name:n,description:a,slug:c}=this.category;return yield(yield this.modalController.create({component:F,componentProps:{action:"name",label:"Editar",category:{_csrf:t,name:n,description:a,slug:c}}})).present()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-category-announcement-update-component"]],inputs:{category:"category"},decls:4,vars:0,consts:[["detail","true","title","Alterar nome e descri\xe7\xe3o","aria-label","Clique para alterar nome e descri\xe7\xe3o","button","",3,"click"],["name","create","slot","start"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-item",0),e.NdJ("click",function(){return n.name()}),e._UZ(1,"ion-icon",1),e.TgZ(2,"ion-label"),e._uU(3,"Nome"),e.qZA()())},dependencies:[r.gu,r.Ie,r.Q$]}),o})();var M=s(7143),T=s(1007);function I(o,i){if(1&o){const t=e.EpF();e.TgZ(0,"ion-fab",7),e.NdJ("click",function(){e.CHM(t);const a=e.oxw();return e.KtG(a.deleteIcon(null==a.category?null:a.category.image,null==a.category?null:a.category._csrf))}),e.TgZ(1,"ion-fab-button",8),e._UZ(2,"ion-icon",9),e.qZA()()}}let P=(()=>{class o{constructor(t,n){this.imageCategoryService=t,this.messageService=n}sendFile(t){const n=t.files[0];if("image/svg+xml"===n.type)return this.$upload=this.imageCategoryService.uploadIcon(this.category,n).subscribe({next:a=>this.success(a,a,this.$upload),error:a=>this.messageService.error(a,null,this.$upload)})}loadFile(t){return t.click()}deleteIcon(t,n){return t._csrf=n,this.$deleteIcon=this.imageCategoryService.deleteIcon(t).subscribe({next:a=>this.messageDeleteIcon(a,this.$deleteIcon)})}success(t,n,a){if(t.ok&&200===t.status)return this.complete(n,a)}complete(t,n){const{body:a}=t;a&&this.update(a,n)}update(t,n){this.setIcon(t),this.messageService.success("Icone adicionado com sucesso.",null,n,2e3)}messageDeleteIcon(t,n){this.setIcon(t),this.messageService.success("Icone excluido com sucesso.",null,n,1e3)}setIcon(t){this.imageCategoryService.setIcon=t}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(M.q),e.Y36(u.e))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-image-category-component"]],inputs:{category:"category"},decls:18,vars:9,consts:[[1,"container","ion-margin-vertical"],["type","file",1,"inputFiles",3,"disabled","change"],["files",""],["title","Adicionar \xe1 icone da categoria.","aria-label","Clique para adicionar icone da categoria.","button","",3,"click"],["referrerpolicy","no-referrer","alt","Avatar","title","Imagem do usu\xe1rio",3,"src"],["color","medium","size","large","name","camera"],["vertical","bottom","horizontal","end","slot","fixed",3,"click",4,"ngIf"],["vertical","bottom","horizontal","end","slot","fixed",3,"click"],["color","none","size","small","title","Excluir icone"],["name","trash"]],template:function(t,n){if(1&t){const a=e.EpF();e.TgZ(0,"ion-card")(1,"div",0)(2,"input",1,2),e.NdJ("change",function(){e.CHM(a);const l=e.MAs(3);return e.KtG(n.sendFile(l))}),e.qZA(),e.TgZ(4,"div",3),e.NdJ("click",function(){e.CHM(a);const l=e.MAs(3);return e.KtG(n.loadFile(l))}),e.TgZ(5,"ion-thumbnail"),e._UZ(6,"ion-img",4),e.qZA(),e._UZ(7,"ion-icon",5),e.qZA()(),e.TgZ(8,"ion-card-content")(9,"ion-card-header")(10,"ion-card-title"),e._uU(11),e.qZA(),e.TgZ(12,"ion-card-subtitle"),e._uU(13),e._UZ(14,"br"),e._uU(15),e.ALo(16,"time"),e.qZA()(),e.YNc(17,I,3,0,"ion-fab",6),e.qZA()()}2&t&&(e.xp6(2),e.Q6J("disabled",!(null==n.category||null==n.category.image||!n.category.image.url)),e.xp6(4),e.Q6J("src",(null==n.category||null==n.category.image?null:n.category.image.url)||"./../../../../../../assets/thumbnail.svg"),e.xp6(5),e.Oqu(null==n.category?null:n.category.name),e.xp6(2),e.hij(" Descri\xe7\xe3o: ",null==n.category?null:n.category.description,""),e.xp6(2),e.hij(" ",e.xi3(16,6,null==n.category?null:n.category.updatedAt,"update")," "),e.xp6(2),e.Q6J("ngIf",!(null==n.category||null==n.category.image||!n.category.image.url)))},dependencies:[m.O5,r.PM,r.FN,r.Zi,r.tO,r.Dq,r.IJ,r.W4,r.gu,r.Xz,r.Bs,T._],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-self:center;position:relative;cursor:pointer}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-thumbnail[_ngcontent-%COMP%]{width:80px;height:80px}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{position:absolute;right:-10px;bottom:-5px}"]}),o})();var U=s(6641);let x=(()=>{class o{constructor(t,n,a,c,l){this.helpService=t,this.modalController=n,this.categoryService=a,this.messageService=c,this.loadingService=l,this.attrButton={route:"/destroy",icon:"trash",label:"Excluir categoria",fill:!1,aria:"Excluir categoria.",title:"Excluir categoria."}}ngOnInit(){this.getData()}importForm(t){return this.form=t}onSubmit(t){return this.destroy(t)}destroy(t){const n=this.loadingService.show("Excluindo categoria...");return this.write=this.categoryService.delete(t.value).subscribe({next:a=>this.messsage(a,n),error:a=>this.messageService.error(a,n,this.write)})}messsage(t,n){return this.helpService.delay(()=>this.modalController.dismiss(),2500),this.messageService.success(t?.message,n,this.write)}getData(){const{_csrf:t,id:n,password:a}=this.category;this.config={_csrf:t,id:n,password:a}}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(h.f),e.Y36(r.IN),e.Y36(U.j),e.Y36(u.e),e.Y36(f.b))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],inputs:{category:"category",action:"action",label:"label"},decls:11,vars:4,consts:[[3,"label"],[3,"fullscreen"],["fixed",""],["color","warning"],[1,"ion-margin-top"],[3,"inputConfig","attrButton","submitDataForm","exportForm"]],template:function(t,n){1&t&&(e._UZ(0,"app-header-component-modal",0),e.TgZ(1,"ion-content",1)(2,"ion-grid",2)(3,"ion-card")(4,"ion-card-header",3)(5,"ion-card-title"),e._uU(6,"Aten\xe7\xe3o!"),e.qZA()(),e.TgZ(7,"ion-card-content",4)(8,"p"),e._uU(9,"Todos os dados da categoria ser\xe3o descartados."),e.qZA()()(),e.TgZ(10,"app-form",5),e.NdJ("submitDataForm",function(c){return n.onSubmit(c)})("exportForm",function(c){return n.importForm(c)}),e.qZA()()()),2&t&&(e.Q6J("label",n.label),e.xp6(1),e.Q6J("fullscreen",!0),e.xp6(9),e.Q6J("inputConfig",n.config)("attrButton",n.attrButton))},dependencies:[r.PM,r.FN,r.Zi,r.Dq,r.W2,r.jY,C.U,v.s]}),o})(),E=(()=>{class o{constructor(t){this.modalController=t}destroy(){return(0,y.mG)(this,void 0,void 0,function*(){const{_csrf:t,id:n}=this.category;return yield(yield this.modalController.create({component:x,componentProps:{action:"destroy",label:"Excluir categoria",category:{_csrf:t,password:"",id:n}}})).present()})}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(r.IN))},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-destroy-announcement-component"]],inputs:{category:"category"},decls:4,vars:0,consts:[["detail","true","title","Excluir usu\xe1rio","aria-label","Clique para excluir usu\xe1rio","button","",3,"click"],["name","trash","slot","start"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-item",0),e.NdJ("click",function(){return n.destroy()}),e._UZ(1,"ion-icon",1),e.TgZ(2,"ion-label"),e._uU(3,"Excluir"),e.qZA()())},dependencies:[r.gu,r.Ie,r.Q$]}),o})();function O(o,i){if(1&o&&(e.TgZ(0,"ion-grid",4),e._UZ(1,"app-image-category-component",5),e.TgZ(2,"ion-item-group")(3,"ion-row")(4,"ion-col",6),e._UZ(5,"app-category-announcement-state-component",5)(6,"app-category-announcement-update-component",5)(7,"app-destroy-announcement-component",5),e.qZA()()()()),2&o){const t=i.$implicit;e.xp6(1),e.Q6J("category",t),e.xp6(4),e.Q6J("category",t),e.xp6(1),e.Q6J("category",t),e.xp6(1),e.Q6J("category",t)}}const J=[{path:"",component:(()=>{class o{constructor(t,n,a){this.categoryService=t,this.activatedRoute=n,this.navCtrl=a}ngOnInit(){this.setCategory()}back(){this.navCtrl.back()}setCategory(){var t;this.categoryService.setCategory=null===(t=this.activatedRoute.snapshot.data)||void 0===t?void 0:t.category,this.category$=this.categoryService.categoryObservable}}return o.\u0275fac=function(t){return new(t||o)(e.Y36(b.H),e.Y36(g.gz),e.Y36(r.SH))},o.\u0275cmp=e.Xpm({type:o,selectors:[["ng-component"]],decls:9,vars:4,consts:[["slot","start"],["defaultHref","",3,"click"],[3,"fullscreen"],["fixed","",4,"ngIf"],["fixed",""],[3,"category"],["size","12"]],template:function(t,n){1&t&&(e.TgZ(0,"ion-header")(1,"ion-toolbar")(2,"ion-buttons",0)(3,"ion-back-button",1),e.NdJ("click",function(){return n.back()}),e.qZA()(),e.TgZ(4,"ion-title"),e._uU(5,"Gerenciamento de categoria"),e.qZA()()(),e.TgZ(6,"ion-content",2),e.YNc(7,O,8,4,"ion-grid",3),e.ALo(8,"async"),e.qZA()),2&t&&(e.xp6(6),e.Q6J("fullscreen",!0),e.xp6(1),e.Q6J("ngIf",e.lcZ(8,2,n.category$)))},dependencies:[m.O5,r.oU,r.Sm,r.wI,r.W2,r.jY,r.Gu,r.Ub,r.Nd,r.wd,r.sr,r.cs,_,S,P,E,m.Ov],styles:[".container[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%]{align-self:center;position:relative;cursor:pointer}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-avatar[_ngcontent-%COMP%]{width:80px;height:80px}.container[_ngcontent-%COMP%] > div[_ngcontent-%COMP%] > ion-icon[_ngcontent-%COMP%]{position:absolute;right:-10px;bottom:-5px}"]}),o})()}];let D=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[g.Bz.forChild(J),g.Bz]}),o})();var Y=s(2728),Q=s(2263),N=s(5447),$=s(310);let B=(()=>{class o{}return o.\u0275fac=function(t){return new(t||o)},o.\u0275mod=e.oAB({type:o}),o.\u0275inj=e.cJS({imports:[m.ez,d.u5,r.Pc,D,Y.i,Q.d,N.j,$.U]}),o})()}}]);