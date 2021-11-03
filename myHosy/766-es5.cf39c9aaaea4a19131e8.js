!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[766],{766:function(n,r,o){"use strict";o.r(r),o.d(r,{HospitalModule:function(){return E}});var i,s,a=o(38583),c=o(64419),l=o(55477),d=o(64762),u=o(23065),f=o(70419),m=o(77719),p=o(15581),h=o(37716),g=o(91841),C=o(486),b=o(51559),v=[{path:"",children:[{path:"",redirectTo:"departments",pathMatch:"full"},{path:"departments",component:(i=function(){function n(t,r,o){e(this,n),this.http=t,this.apiClient=r,this.store=o,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{name:{title:"Name",type:"string"},description:{title:"Description",type:"string"}}},this.source=new f.nC,this.departments=[],this.store.dispatch(new m.qm),this.allDepartments$=this.store.pipe((0,u.Ys)(p.kH))}var r,o,i;return r=n,(o=[{key:"getData",value:function(){var e=this;this.apiClient.getURI("departments").subscribe(function(t){return(0,d.mG)(e,void 0,void 0,regeneratorRuntime.mark(function e(){return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:this.departments=t.toString(),console.log(t);case 1:case"end":return e.stop()}},e,this)}))})}},{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}},{key:"addRecord",value:function(e){this.apiClient.postURI("departments",{name:e.newData.floor,description:e.newData.room_description}).subscribe(function(t){console.log(t),e.confirm.resolve(e.newData)},function(e){console.log(e),e.error instanceof Error?console.log("Client-side error occured."):console.log("Server-side error occured.")})}},{key:"updateRecord",value:function(e){console.log("ddddd"),this.http.put(this.apiClient.apiUrl+"/auth/permissions",this.apiClient.headers()).subscribe(function(t){console.log(t),e.confirm.resolve(e.newData)},function(e){e.error instanceof Error?console.log("Client-side error occured."):console.log("Server-side error occured.")})}},{key:"ngOnInit",value:function(){}}])&&t(r.prototype,o),i&&t(r,i),n}(),i.\u0275fac=function(e){return new(e||i)(h["\u0275\u0275directiveInject"](g.eN),h["\u0275\u0275directiveInject"](C.R),h["\u0275\u0275directiveInject"](u.yh))},i.\u0275cmp=h["\u0275\u0275defineComponent"]({type:i,selectors:[["ngx-deparments"]],decls:8,vars:4,consts:[[1,"col-md-8","float-left"],[1,"col-md-2","float-right"],[3,"settings","source","createConfirm","deleteConfirm"]],template:function(e,t){1&e&&(h["\u0275\u0275elementStart"](0,"nb-card"),h["\u0275\u0275elementStart"](1,"nb-card-header"),h["\u0275\u0275elementStart"](2,"div",0),h["\u0275\u0275text"](3,"Department's Table"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275element"](4,"div",1),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementStart"](5,"nb-card-body"),h["\u0275\u0275elementStart"](6,"ng2-smart-table",2),h["\u0275\u0275listener"]("createConfirm",function(e){return t.addRecord(e)})("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),h["\u0275\u0275pipe"](7,"async"),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"](),h["\u0275\u0275elementEnd"]()),2&e&&(h["\u0275\u0275advance"](6),h["\u0275\u0275property"]("settings",t.settings)("source",h["\u0275\u0275pipeBind1"](7,2,t.allDepartments$)))},directives:[b.Asz,b.ndF,b.yKW,f.T5],pipes:[a.Ov],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}"]}),i)},{path:"**",component:l.w}]}],y=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=h["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=h["\u0275\u0275defineInjector"]({imports:[[c.Bz.forChild(v)],c.Bz]}),t}(),w=o(73749),k=o(55171),M=o(3679),D=o(28815),_=o(94370),B=o(91601),O=o(6127),j=o(32024),E=((s=function t(){e(this,t)}).\u0275fac=function(e){return new(e||s)},s.\u0275mod=h["\u0275\u0275defineNgModule"]({type:s}),s.\u0275inj=h["\u0275\u0275defineInjector"]({providers:[b.eJ1,_.n,D.p],imports:[[a.ez,y,b.EoG,M.u5,b.nKr,b.T2N,b.zyh,b.MfT,w.$,b._WB,b.wXm.forChild(),k.R,f.ne,u.Aw.forFeature("departments",j.TZ),B.sQ.forFeature([O.g])]]}),s)}}])}();