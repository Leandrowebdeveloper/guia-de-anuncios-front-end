"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[5761],{167:(f,l,e)=>{e.d(l,{u:()=>g});var d=e(8505),c=e(4650),m=e(3755),i=e(529),v=e(6578),n=e(4111);let g=(()=>{class a extends m.O{constructor(o,s,p){super(o,s),this.http=o,this.storageService=s,this.managementService=p,this.socialNetworkEvent=new c.vpe(void 0),this.setApi="social-network"}get getSocialNetworkEvent(){return this.socialNetworkEvent.asObservable()}set setSocialNetwork(o){this.managementService.getAnnouncement&&(this.managementService.getAnnouncement.socialNetwork=o,this.managementService.setAnnouncement=this.managementService.getAnnouncement)}socialNetwork(o){return o?.id?this.patch(o).pipe((0,d.b)(s=>this.setSocialNetwork=s)):this.create(o).pipe((0,d.b)(s=>this.setSocialNetwork=s))}delete(o){return this.destroy(o).pipe((0,d.b)(()=>this.setSocialNetwork=null))}}return a.\u0275fac=function(o){return new(o||a)(c.LFG(i.eN),c.LFG(v.V),c.LFG(n.O))},a.\u0275prov=c.Yz7({token:a,factory:a.\u0275fac}),a})()},5761:(f,l,e)=>{e.r(l),e.d(l,{NotFoundPageModule:()=>M});var d=e(529),c=e(6895),m=e(433),i=e(9267),v=e(5203),n=e(4650),g=e(7868),a=e(8447);const o=[{path:"",component:(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["app-not-found"]],decls:9,vars:1,consts:[[3,"fullscreen"],["fixed",""],[1,"content-center"],[1,"ion-text-center"],["name","warning"]],template:function(r,N){1&r&&(n._UZ(0,"app-header-component"),n.TgZ(1,"ion-content",0)(2,"ion-grid",1)(3,"div",2)(4,"ion-text",3),n._UZ(5,"ion-icon",4),n.TgZ(6,"p"),n._uU(7,"Erro 404 pag\xedna n\xe3o encontrada."),n.qZA()()()()(),n._UZ(8,"app-footer")),2&r&&(n.xp6(1),n.Q6J("fullscreen",!0))},dependencies:[i.W2,i.jY,i.gu,i.yW,g.G,a.S],styles:["p[_ngcontent-%COMP%]{font-size:22px}ion-icon[_ngcontent-%COMP%]{font-size:6em}"]}),t})()}];let s=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[v.Bz.forChild(o),v.Bz]}),t})();var p=e(677),P=e(6444),E=e(167);let M=(()=>{class t{}return t.\u0275fac=function(r){return new(r||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({providers:[E.u],imports:[c.ez,m.u5,m.UX,d.JF,i.Pc,s,p.O,P._]}),t})()}}]);