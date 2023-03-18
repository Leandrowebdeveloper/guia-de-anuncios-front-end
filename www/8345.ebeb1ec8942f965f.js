"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[8345],{1265:(M,g,i)=>{i.d(g,{Q:()=>d});var e=i(433),h=i(6895),f=i(9267),v=i(5203),l=i(6166),o=i(4800),s=i(4650);let d=(()=>{class r{}return r.\u0275fac=function(C){return new(C||r)},r.\u0275mod=s.oAB({type:r}),r.\u0275inj=s.cJS({providers:[l.$],imports:[h.ez,f.Pc,e.u5,e.UX,v.Bz,o.Z_]}),r})()},6166:(M,g,i)=>{i.d(g,{$:()=>f});var e=i(433),h=i(4650);let f=(()=>{class v{constructor(){this.passwordConfirmation={validator:this.mustMatch("password","passwordConfirmation")},this.regexName=/^(?![ ])(?!.*(?:\d|[ ]{2}|[!$%^&*()_+|~=\{\}\[\]:";<>?,\/]))(?:(?:e|da|do|das|dos|de|d'|D'|la|las|el|los|l')\s*?|(?:[A-Z\xe0\xe1\xe2\xe4\xe3\xe5\u0105\u010d\u0107\u0119\xe8\xe9\xea\xeb\u0117\u012f\xec\xed\xee\xef\u0142\u0144\xf2\xf3\xf4\xf6\xf5\xf8\xf9\xfa\xfb\xfc\u0173\u016b\xff\xfd\u017c\u017a\xf1\xe7\u010d\u0161\u017e\xc0\xc1\xc2\xc4\xc3\xc5\u0104\u0106\u010c\u0116\u0118\xc8\xc9\xca\xcb\xcc\xcd\xce\xcf\u012e\u0141\u0143\xd2\xd3\xd4\xd6\xd5\xd8\xd9\xda\xdb\xdc\u0172\u016a\u0178\xdd\u017b\u0179\xd1\xdf\xc7\u0152\xc6\u010c\u0160\u017d\u2202\xf0'][^\s]*\s*?)(?!.*[ ]$))+$/,this.regexFacebook=/(?:https?\:\/\/|www\.)(?:facebook)(?:.com\/)(?:[-a-z0-9]+\.)*[-a-z0-9]+.*?$/i,this.regexInstagran=/(?:(?:http|https):\/\/)?(?:www\.)?(?:instagram\.com|instagr\.am)\/([A-Za-z0-9-_\.]+)/im,this.controls={id:["",[e.kI.required]],name:["",[e.kI.required,e.kI.minLength(3),e.kI.pattern(this.regexName)]],title:["",[e.kI.required,e.kI.minLength(3)]],allotment:["",[e.kI.required]],block:["",[e.kI.required]],street:["",[e.kI.required]],type:["",[e.kI.required]],blockade:["",[e.kI.required]],response:["",[e.kI.required]],period:[""],zip_code:["",[e.kI.required]],district:["",[e.kI.required]],numberr:["",[e.kI.required]],complement:[""],mobilePhone:["",[e.kI.required]],phone:[""],whatsapp:["",[e.kI.required]],facebook:["",[e.kI.required,e.kI.pattern(this.regexFacebook)]],instagran:["",[e.kI.required,e.kI.pattern(this.regexInstagran)]],city:["",[e.kI.required]],uf:["GO",[e.kI.required]],description:["",[e.kI.required]],firstName:["",[e.kI.required,e.kI.minLength(3),e.kI.pattern(this.regexName)]],lastName:["",[e.kI.required,e.kI.minLength(3),e.kI.pattern(this.regexName)]],level:["",[e.kI.required]],email:["",[e.kI.required,e.kI.email]],password:["",[e.kI.required,e.kI.minLength(8),e.kI.maxLength(20)]],passwordCurrent:["",[e.kI.required]],passwordConfirmation:[null,[e.kI.required,e.kI.minLength(8),e.kI.maxLength(20)]],stayConnected:["",[e.kI.required]],terms:["true",[e.kI.required,e.kI.pattern("true")]],_csrf:["",[e.kI.required]],slug:["",[e.kI.required]]}}get configs(){return this.config}set configs(o){this.config=o}controlsConfig(o){return this.configs=o,this.buildTheControllers()}isPasswordConfirmation(o){return this.getObjectKeys(o||{}).includes("passwordConfirmation")?this.passwordConfirmation:{}}buildInput(o,s){const d=this.getObjectKeys(o),r=[];for(const c in s)d&&d.includes(c)&&null!==s[c]&&r.push(s[c]);return r}buildTheControllers(){const o={};let s=0;for(const d in this.configs)this.makeSureTheSettingsMatchTheControls(d)&&(o[d]=this.getKeyControls(d),o[d][0]=this.getValuesConfiguration(s)),s++;return this.cleanValue(o)}cleanValue(o){return Object.keys(o).includes("email")&&(o.email[0]=null),o}getValuesConfiguration(o){return this.getObjectValues(this.configs)[o]}getKeyControls(o){return this.controls[o]}makeSureTheSettingsMatchTheControls(o){return this.validObject(o)&&this.theKeyMustMatchTheController(o)&&this.theValueMustMatchTheControllerValue(o)}validObject(o){return Object.prototype.hasOwnProperty.call(this.configs,o)}theKeyMustMatchTheController(o){return this.getObjectKeys(this.controls).includes(o)}theValueMustMatchTheControllerValue(o){return this.getObjectValues(this.configs).includes(this.configs[o])}getObjectKeys(o){return o&&Object.keys(o)}getObjectValues(o){return o&&Object.values(o)}mustMatch(o,s){return d=>this.resultOfTheCombination(d.controls[o],d.controls[s])}resultOfTheCombination(o,s){s.errors&&!s.errors.mustMatch||s.setErrors(o.value!==s.value?{mustMatch:!0}:null)}}return v.\u0275fac=function(o){return new(o||v)},v.\u0275prov=h.Yz7({token:v,factory:v.\u0275fac}),v})()},1395:(M,g,i)=>{i.d(g,{c:()=>v});var e=i(655),h=i(4650),f=i(9267);let v=(()=>{class l{constructor(s){this.alertController=s}alert(s,d){return(0,e.mG)(this,void 0,void 0,function*(){const r=yield this.alertController.create({header:s,message:d,buttons:["OK"]});return yield r.present(),r})}}return l.\u0275fac=function(s){return new(s||l)(h.LFG(f.Br))},l.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},8039:(M,g,i)=>{i.d(g,{b:()=>v});var e=i(655),h=i(4650),f=i(9267);let v=(()=>{class l{constructor(s){this.loadingController=s}show(s){return(0,e.mG)(this,void 0,void 0,function*(){const d=this.loadingController.create({message:s,spinner:"bubbles"});return(yield d).present(),d})}}return l.\u0275fac=function(s){return new(s||l)(h.LFG(f.HT))},l.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},6388:(M,g,i)=>{i.d(g,{e:()=>o});var e=i(655),h=i(4650),f=i(9524),v=i(1395),l=i(3131);let o=(()=>{class s{constructor(r,c,C){this.toastService=r,this.alertService=c,this.helpsService=C}success(r,c,C,y=3e3){return(0,e.mG)(this,void 0,void 0,function*(){return this.disableLoadingUnsubscribeVariable(c,C),this.helpsService.delay(()=>(0,e.mG)(this,void 0,void 0,function*(){return yield this.toastService.show(r,"bottom","thumbs-up",2500)}),y)})}alert(r){return this.helpsService.delay(()=>this.alertService.alert("Aten\xe7\xe3o",r?.error),2e3)}disableLoadingUnsubscribeVariable(r,c){return(0,e.mG)(this,void 0,void 0,function*(){r&&c&&(this.helpsService.delay(()=>(0,e.mG)(this,void 0,void 0,function*(){return(yield r).dismiss()}),2e3),c.unsubscribe())})}error(r,c,C){return this.disableLoadingUnsubscribeVariable(c,C).then(),this.alert(r)}disable(r,c){return(0,e.mG)(this,void 0,void 0,function*(){return yield this.disableLoadingUnsubscribeVariable(r,c)})}}return s.\u0275fac=function(r){return new(r||s)(h.LFG(f.k),h.LFG(v.c),h.LFG(l.f))},s.\u0275prov=h.Yz7({token:s,factory:s.\u0275fac,providedIn:"root"}),s})()},9524:(M,g,i)=>{i.d(g,{k:()=>v});var e=i(655),h=i(4650),f=i(9267);let v=(()=>{class l{constructor(s){this.toastController=s}show(s,d,r,c,C="light"){return(0,e.mG)(this,void 0,void 0,function*(){const y=yield this.toastController.create({message:s,icon:r,duration:c,position:d,color:C,buttons:[{side:"end",icon:"add-circle-outline",handler:()=>this.toastController.dismiss()}]});return y.present(),y})}loading(s,d,r){return(0,e.mG)(this,void 0,void 0,function*(){const c=yield this.toastController.create({message:s,position:d,color:"light",icon:r});return c.present(),c})}}return l.\u0275fac=function(s){return new(s||l)(h.LFG(f.yF))},l.\u0275prov=h.Yz7({token:l,factory:l.\u0275fac,providedIn:"root"}),l})()},2722:(M,g,i)=>{i.d(g,{R:()=>l});var e=i(4482),h=i(5403),f=i(8421),v=i(5032);function l(o){return(0,e.e)((s,d)=>{(0,f.Xf)(o).subscribe((0,h.x)(d,()=>d.complete(),v.Z)),!d.closed&&s.subscribe(d)})}},4800:(M,g,i)=>{i.d(g,{PG:()=>w,Z_:()=>N});var e=i(4650),h=i(6895),f=i(433),v=i(4968),l=i(9770),o=i(7579),s=i(2722),d=i(5698),r=i(9718),c=i(6063);class C extends o.x{constructor(a=1/0,n=1/0,u=c.l){super(),this._bufferSize=a,this._windowTime=n,this._timestampProvider=u,this._buffer=[],this._infiniteTimeWindow=!0,this._infiniteTimeWindow=n===1/0,this._bufferSize=Math.max(1,a),this._windowTime=Math.max(1,n)}next(a){const{isStopped:n,_buffer:u,_infiniteTimeWindow:m,_timestampProvider:p,_windowTime:_}=this;n||(u.push(a),!m&&u.push(p.now()+_)),this._trimBuffer(),super.next(a)}_subscribe(a){this._throwIfClosed(),this._trimBuffer();const n=this._innerSubscribe(a),{_infiniteTimeWindow:u,_buffer:m}=this,p=m.slice();for(let _=0;_<p.length&&!a.closed;_+=u?1:2)a.next(p[_]);return this._checkFinalizedStatuses(a),n}_trimBuffer(){const{_bufferSize:a,_timestampProvider:n,_buffer:u,_infiniteTimeWindow:m}=this,p=(m?1:2)*a;if(a<1/0&&p<u.length&&u.splice(0,u.length-p),!m){const _=n.now();let E=0;for(let O=1;O<u.length&&u[O]<=_;O+=2)E=O;E&&u.splice(0,E+1)}}}var y=i(3099);function L(t,a){}const I=()=>{const t=typeof window<"u"?window:void 0;return t&&t.tinymce?t.tinymce:null};let k=(()=>{class t{constructor(){this.onBeforePaste=new e.vpe,this.onBlur=new e.vpe,this.onClick=new e.vpe,this.onContextMenu=new e.vpe,this.onCopy=new e.vpe,this.onCut=new e.vpe,this.onDblclick=new e.vpe,this.onDrag=new e.vpe,this.onDragDrop=new e.vpe,this.onDragEnd=new e.vpe,this.onDragGesture=new e.vpe,this.onDragOver=new e.vpe,this.onDrop=new e.vpe,this.onFocus=new e.vpe,this.onFocusIn=new e.vpe,this.onFocusOut=new e.vpe,this.onKeyDown=new e.vpe,this.onKeyPress=new e.vpe,this.onKeyUp=new e.vpe,this.onMouseDown=new e.vpe,this.onMouseEnter=new e.vpe,this.onMouseLeave=new e.vpe,this.onMouseMove=new e.vpe,this.onMouseOut=new e.vpe,this.onMouseOver=new e.vpe,this.onMouseUp=new e.vpe,this.onPaste=new e.vpe,this.onSelectionChange=new e.vpe,this.onActivate=new e.vpe,this.onAddUndo=new e.vpe,this.onBeforeAddUndo=new e.vpe,this.onBeforeExecCommand=new e.vpe,this.onBeforeGetContent=new e.vpe,this.onBeforeRenderUI=new e.vpe,this.onBeforeSetContent=new e.vpe,this.onChange=new e.vpe,this.onClearUndos=new e.vpe,this.onDeactivate=new e.vpe,this.onDirty=new e.vpe,this.onExecCommand=new e.vpe,this.onGetContent=new e.vpe,this.onHide=new e.vpe,this.onInit=new e.vpe,this.onInitNgModel=new e.vpe,this.onLoadContent=new e.vpe,this.onNodeChange=new e.vpe,this.onPostProcess=new e.vpe,this.onPostRender=new e.vpe,this.onPreInit=new e.vpe,this.onPreProcess=new e.vpe,this.onProgressState=new e.vpe,this.onRedo=new e.vpe,this.onRemove=new e.vpe,this.onReset=new e.vpe,this.onResizeEditor=new e.vpe,this.onSaveContent=new e.vpe,this.onSetAttrib=new e.vpe,this.onObjectResizeStart=new e.vpe,this.onObjectResized=new e.vpe,this.onObjectSelected=new e.vpe,this.onSetContent=new e.vpe,this.onShow=new e.vpe,this.onSubmit=new e.vpe,this.onUndo=new e.vpe,this.onVisualAid=new e.vpe}}return t.\u0275fac=function(n){return new(n||t)},t.\u0275dir=e.lG2({type:t,outputs:{onBeforePaste:"onBeforePaste",onBlur:"onBlur",onClick:"onClick",onContextMenu:"onContextMenu",onCopy:"onCopy",onCut:"onCut",onDblclick:"onDblclick",onDrag:"onDrag",onDragDrop:"onDragDrop",onDragEnd:"onDragEnd",onDragGesture:"onDragGesture",onDragOver:"onDragOver",onDrop:"onDrop",onFocus:"onFocus",onFocusIn:"onFocusIn",onFocusOut:"onFocusOut",onKeyDown:"onKeyDown",onKeyPress:"onKeyPress",onKeyUp:"onKeyUp",onMouseDown:"onMouseDown",onMouseEnter:"onMouseEnter",onMouseLeave:"onMouseLeave",onMouseMove:"onMouseMove",onMouseOut:"onMouseOut",onMouseOver:"onMouseOver",onMouseUp:"onMouseUp",onPaste:"onPaste",onSelectionChange:"onSelectionChange",onActivate:"onActivate",onAddUndo:"onAddUndo",onBeforeAddUndo:"onBeforeAddUndo",onBeforeExecCommand:"onBeforeExecCommand",onBeforeGetContent:"onBeforeGetContent",onBeforeRenderUI:"onBeforeRenderUI",onBeforeSetContent:"onBeforeSetContent",onChange:"onChange",onClearUndos:"onClearUndos",onDeactivate:"onDeactivate",onDirty:"onDirty",onExecCommand:"onExecCommand",onGetContent:"onGetContent",onHide:"onHide",onInit:"onInit",onInitNgModel:"onInitNgModel",onLoadContent:"onLoadContent",onNodeChange:"onNodeChange",onPostProcess:"onPostProcess",onPostRender:"onPostRender",onPreInit:"onPreInit",onPreProcess:"onPreProcess",onProgressState:"onProgressState",onRedo:"onRedo",onRemove:"onRemove",onReset:"onReset",onResizeEditor:"onResizeEditor",onSaveContent:"onSaveContent",onSetAttrib:"onSetAttrib",onObjectResizeStart:"onObjectResizeStart",onObjectResized:"onObjectResized",onObjectSelected:"onObjectSelected",onSetContent:"onSetContent",onShow:"onShow",onSubmit:"onSubmit",onUndo:"onUndo",onVisualAid:"onVisualAid"}}),t})();const P=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onResizeEditor","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],D=(t,a,n)=>(0,v.R)(t,a).pipe((0,s.R)(n)),b=(t,a)=>"string"==typeof t?t.split(",").map(n=>n.trim()):Array.isArray(t)?t:a;let S=0;const R=t=>typeof t<"u"&&"textarea"===t.tagName.toLowerCase(),T=t=>typeof t>"u"||""===t?[]:Array.isArray(t)?t:t.split(" "),j=(t,a)=>T(t).concat(T(a)),W=()=>{},A=t=>null==t,z=(()=>{let t={script$:null};return{load:(u,m)=>t.script$||(t.script$=(0,l.P)(()=>{const p=u.createElement("script");return p.referrerPolicy="origin",p.type="application/javascript",p.src=m,u.head.appendChild(p),(0,v.R)(p,"load").pipe((0,d.q)(1),(0,r.h)(void 0))}).pipe(function B(t,a,n){let u,m=!1;return t&&"object"==typeof t?({bufferSize:u=1/0,windowTime:a=1/0,refCount:m=!1,scheduler:n}=t):u=t??1/0,(0,y.B)({connector:()=>new C(u,a,n),resetOnError:!0,resetOnComplete:!1,resetOnRefCountZero:m})}({bufferSize:1,refCount:!0}))),reinitialize:()=>{t={script$:null}}}})(),G=new e.OlP("TINYMCE_SCRIPT_SRC"),V={provide:f.JU,useExisting:(0,e.Gpc)(()=>w),multi:!0};let w=(()=>{class t extends k{constructor(n,u,m,p){super(),this.platformId=m,this.tinymceScriptSrc=p,this.cloudChannel="6",this.apiKey="no-api-key",this.id="",this.modelEvents="change input undo redo",this.onTouchedCallback=W,this.destroy$=new o.x,this.initialise=()=>{const _={...this.init,selector:void 0,target:this._element,inline:this.inline,readonly:this.disabled,plugins:j(this.init&&this.init.plugins,this.plugins),toolbar:this.toolbar||this.init&&this.init.toolbar,setup:E=>{this._editor=E,D(E,"init",this.destroy$).subscribe(()=>{this.initEditor(E)}),((t,a,n)=>{(t=>{const a=b(t.ignoreEvents,[]);return b(t.allowedEvents,P).filter(u=>P.includes(u)&&!a.includes(u))})(t).forEach(m=>{const p=t[m];D(a,m.substring(2),n).subscribe(_=>{p.observers.length>0&&t.ngZone.run(()=>p.emit({event:_,editor:a}))})})})(this,E,this.destroy$),this.init&&"function"==typeof this.init.setup&&this.init.setup(E)}};R(this._element)&&(this._element.style.visibility=""),this.ngZone.runOutsideAngular(()=>{I().init(_)})},this._elementRef=n,this.ngZone=u}set disabled(n){this._disabled=n,this._editor&&this._editor.initialized&&("function"==typeof this._editor.mode?.set?this._editor.mode.set(n?"readonly":"design"):this._editor.setMode(n?"readonly":"design"))}get disabled(){return this._disabled}get editor(){return this._editor}writeValue(n){this._editor&&this._editor.initialized?this._editor.setContent(A(n)?"":n):this.initialValue=null===n?void 0:n}registerOnChange(n){this.onChangeCallback=n}registerOnTouched(n){this.onTouchedCallback=n}setDisabledState(n){this.disabled=n}ngAfterViewInit(){(0,h.NF)(this.platformId)&&(this.id=this.id||(t=>{const n=(new Date).getTime(),u=Math.floor(1e9*Math.random());return S++,"tiny-angular_"+u+S+String(n)})(),this.inline=void 0!==this.inline?!1!==this.inline:!!this.init?.inline,this.createElement(),null!==I()?this.initialise():this._element&&this._element.ownerDocument&&z.load(this._element.ownerDocument,this.getScriptSrc()).pipe((0,s.R)(this.destroy$)).subscribe(this.initialise))}ngOnDestroy(){this.destroy$.next(),null!==I()&&I().remove(this._editor)}createElement(){this._element=document.createElement(this.inline?"string"==typeof this.tagName?this.tagName:"div":"textarea"),this._element&&(document.getElementById(this.id)&&console.warn(`TinyMCE-Angular: an element with id [${this.id}] already exists. Editors with duplicate Id will not be able to mount`),this._element.id=this.id,R(this._element)&&(this._element.style.visibility="hidden"),this._elementRef.nativeElement.appendChild(this._element))}getScriptSrc(){return A(this.tinymceScriptSrc)?`https://cdn.tiny.cloud/1/${this.apiKey}/tinymce/${this.cloudChannel}/tinymce.min.js`:this.tinymceScriptSrc}initEditor(n){D(n,"blur",this.destroy$).subscribe(()=>{this.ngZone.run(()=>this.onTouchedCallback())}),D(n,this.modelEvents,this.destroy$).subscribe(()=>{this.ngZone.run(()=>this.emitOnChange(n))}),"string"==typeof this.initialValue&&this.ngZone.run(()=>{n.setContent(this.initialValue),n.getContent()!==this.initialValue&&this.emitOnChange(n),void 0!==this.onInitNgModel&&this.onInitNgModel.emit(n)})}emitOnChange(n){this.onChangeCallback&&this.onChangeCallback(n.getContent({format:this.outputFormat}))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(e.SBq),e.Y36(e.R0b),e.Y36(e.Lbi),e.Y36(G,8))},t.\u0275cmp=e.Xpm({type:t,selectors:[["editor"]],inputs:{cloudChannel:"cloudChannel",apiKey:"apiKey",init:"init",id:"id",initialValue:"initialValue",outputFormat:"outputFormat",inline:"inline",tagName:"tagName",plugins:"plugins",toolbar:"toolbar",modelEvents:"modelEvents",allowedEvents:"allowedEvents",ignoreEvents:"ignoreEvents",disabled:"disabled"},standalone:!0,features:[e._Bn([V]),e.qOj,e.jDz],decls:1,vars:0,template:function(n,u){1&n&&e.YNc(0,L,0,0,"ng-template")},dependencies:[h.ez,f.u5],styles:["[_nghost-%COMP%]{display:block}"]}),t})(),N=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[w]}),t})()}}]);