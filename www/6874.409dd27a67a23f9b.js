"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[6874],{6874:(u,e,n)=>{n.r(e),n.d(e,{Browser:()=>_,BrowserWeb:()=>r});var t=n(5861),l=n(7423);class r extends l.Uw{constructor(){super(),this._lastWindow=null}open(s){var o=this;return(0,t.Z)(function*(){o._lastWindow=window.open(s.url,s.windowName||"_blank")})()}close(){var s=this;return(0,t.Z)(function*(){return new Promise((o,a)=>{null!=s._lastWindow?(s._lastWindow.close(),s._lastWindow=null,o()):a("No active window to close!")})})()}}const _=new r}}]);