"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[1340],{1340:(M,h,t)=>{t.r(h),t.d(h,{NavComponentModule:()=>A});var s=t(6895),i=t(5203),l=t(8322),d=t(1069),o=t(4650);const g=[{path:"inicio",loadChildren:()=>Promise.all([t.e(7143),t.e(8729),t.e(1616),t.e(2119),t.e(8592),t.e(2133)]).then(t.bind(t,2133)).then(n=>n.HomePageModule)},{path:"categoria/:slug",loadChildren:()=>Promise.all([t.e(7143),t.e(8592),t.e(9451)]).then(t.bind(t,9451)).then(n=>n.CategoryAnnouncementPageModule)},{path:"erro",loadChildren:()=>Promise.all([t.e(7143),t.e(5761)]).then(t.bind(t,5761)).then(n=>n.NotFoundPageModule)},{path:"noticias",loadChildren:()=>Promise.all([t.e(7143),t.e(1049)]).then(t.bind(t,5143)).then(n=>n.NewsPageModule)},{path:"pagina/:slug",loadChildren:()=>Promise.all([t.e(7143),t.e(8592),t.e(4404)]).then(t.bind(t,4404)).then(n=>n.AnnouncementPageModule)},{path:"sair",canActivate:[l.x],canLoad:[l.x],loadChildren:()=>Promise.all([t.e(7143),t.e(6304)]).then(t.bind(t,6304)).then(n=>n.LogoutPageModule)},{path:"cadastrar",canActivate:[d.$],canLoad:[d.$],loadChildren:()=>Promise.all([t.e(7143),t.e(8729),t.e(1616),t.e(8592),t.e(7790)]).then(t.bind(t,7790)).then(n=>n.SystemAccessPageModule)},{path:"entrar",canActivate:[d.$],canLoad:[d.$],loadChildren:()=>Promise.all([t.e(7143),t.e(8729),t.e(1616),t.e(8592),t.e(7790)]).then(t.bind(t,7790)).then(n=>n.SystemAccessPageModule)},{path:"entrar/admin",canActivate:[d.$],canLoad:[d.$],loadChildren:()=>Promise.all([t.e(7143),t.e(8729),t.e(1616),t.e(8592),t.e(8574)]).then(t.bind(t,8574)).then(n=>n.SystemAccessAdminPageModule)},{path:"recuperar-senha",canActivate:[d.$],canLoad:[d.$],loadChildren:()=>Promise.all([t.e(7143),t.e(8729),t.e(1616),t.e(8592),t.e(7790)]).then(t.bind(t,7790)).then(n=>n.SystemAccessPageModule)},{path:"redefinir-senha/:token",loadChildren:()=>Promise.all([t.e(7143),t.e(8729),t.e(1616),t.e(1034)]).then(t.bind(t,1034)).then(n=>n.RedefinePasswordPageModule)},{path:"painel-de-controle",canActivate:[l.x],canLoad:[l.x],loadChildren:()=>Promise.all([t.e(7143),t.e(8592),t.e(9171)]).then(t.bind(t,9171)).then(n=>n.DashboardPageModule)},{path:"painel-de-controle/admin",canActivate:[l.x],canLoad:[l.x],loadChildren:()=>Promise.all([t.e(7143),t.e(8592),t.e(2777)]).then(t.bind(t,2777)).then(n=>n.DashboardAdminPageModule)},{path:"ativar-conta/:token",canActivate:[d.$],canLoad:[l.x],loadChildren:()=>Promise.all([t.e(7143),t.e(6064)]).then(t.bind(t,6064)).then(n=>n.ActivateAccountPageModule)},{path:"politica-de-privacidade",loadChildren:()=>Promise.all([t.e(7143),t.e(7897)]).then(t.bind(t,7897)).then(n=>n.PrivacyPolicyPageModule)},{path:"termos-de-uso",loadChildren:()=>Promise.all([t.e(7143),t.e(7726)]).then(t.bind(t,7726)).then(n=>n.TermsOfUsePageModule)},{path:"",redirectTo:"/inicio",pathMatch:"full"},{path:"**",redirectTo:"/erro",pathMatch:"full"}];let a=(()=>{class n{}return n.\u0275fac=function(m){return new(m||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[i.Bz.forChild(g),i.Bz]}),n})();var P=t(9267);let A=(()=>{class n{}return n.\u0275fac=function(m){return new(m||n)},n.\u0275mod=o.oAB({type:n}),n.\u0275inj=o.cJS({imports:[P.Pc,s.ez,a]}),n})()},8322:(M,h,t)=>{t.d(h,{x:()=>d});var s=t(4650),i=t(5203),l=t(1228);let d=(()=>{class o{constructor(a,P){this.router=a,this.authService=P}canActivate(){return!!this.isLoggedIn||this.router.navigate(["/entrar"])}canLoad(){return this.$isLoggedIn=this.authService.loggedInAsObservable.subscribe({next:a=>{this.isLoggedIn=a,setTimeout(()=>this.$isLoggedIn.unsubscribe(),2500)}}),!0}}return o.\u0275fac=function(a){return new(a||o)(s.LFG(i.F0),s.LFG(l.e))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()},1069:(M,h,t)=>{t.d(h,{$:()=>d});var s=t(4650),i=t(5203),l=t(1228);let d=(()=>{class o{constructor(a,P){this.router=a,this.authService=P}canActivate(){return!this.isLoggedIn||this.router.navigate(["/inicio"])}canLoad(){return this.$isLoggedIn=this.authService.loggedInAsObservable.subscribe({next:a=>{this.isLoggedIn=a,setTimeout(()=>this.$isLoggedIn.unsubscribe(),2500)}}),!0}}return o.\u0275fac=function(a){return new(a||o)(s.LFG(i.F0),s.LFG(l.e))},o.\u0275prov=s.Yz7({token:o,factory:o.\u0275fac,providedIn:"root"}),o})()}}]);