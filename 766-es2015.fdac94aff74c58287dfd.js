"use strict";(self.webpackChunkmyHosy=self.webpackChunkmyHosy||[]).push([[766],{766:function(e,t,n){n.r(t),n.d(t,{HospitalModule:function(){return k}});var r=n(38583),o=n(95987),s=n(55477),i=n(64762),c=n(23065),a=n(76185),l=n(77719),d=n(15581),m=n(37716),p=n(91841),h=n(486),u=n(54550);const f=[{path:"",children:[{path:"",redirectTo:"departments",pathMatch:"full"},{path:"departments",component:(()=>{class e{constructor(e,t,n){this.http=e,this.apiClient=t,this.store=n,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{name:{title:"Name",type:"string"},description:{title:"Description",type:"string"}}},this.source=new a.nC,this.departments=[],this.store.dispatch(new l.qm),this.allDepartments$=this.store.pipe((0,c.Ys)(d.kH))}getData(){this.apiClient.getURI("departments").subscribe(e=>(0,i.mG)(this,void 0,void 0,function*(){this.departments=e.toString(),console.log(e)}))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}addRecord(e){this.apiClient.postURI("departments",{name:e.newData.floor,description:e.newData.room_description}).subscribe(t=>{console.log(t),e.confirm.resolve(e.newData)},e=>{console.log(e),e.error instanceof Error?console.log("Client-side error occured."):console.log("Server-side error occured.")})}updateRecord(e){console.log("ddddd"),this.http.put(this.apiClient.apiUrl+"/auth/permissions",this.apiClient.headers()).subscribe(t=>{console.log(t),e.confirm.resolve(e.newData)},e=>{e.error instanceof Error?console.log("Client-side error occured."):console.log("Server-side error occured.")})}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(m.\u0275\u0275directiveInject(p.eN),m.\u0275\u0275directiveInject(h.R),m.\u0275\u0275directiveInject(c.yh))},e.\u0275cmp=m.\u0275\u0275defineComponent({type:e,selectors:[["ngx-deparments"]],decls:8,vars:4,consts:[[1,"col-md-8","float-left"],[1,"col-md-2","float-right"],[3,"settings","source","createConfirm","deleteConfirm"]],template:function(e,t){1&e&&(m.\u0275\u0275elementStart(0,"nb-card"),m.\u0275\u0275elementStart(1,"nb-card-header"),m.\u0275\u0275elementStart(2,"div",0),m.\u0275\u0275text(3,"Department's Table"),m.\u0275\u0275elementEnd(),m.\u0275\u0275element(4,"div",1),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementStart(5,"nb-card-body"),m.\u0275\u0275elementStart(6,"ng2-smart-table",2),m.\u0275\u0275listener("createConfirm",function(e){return t.addRecord(e)})("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),m.\u0275\u0275pipe(7,"async"),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd(),m.\u0275\u0275elementEnd()),2&e&&(m.\u0275\u0275advance(6),m.\u0275\u0275property("settings",t.settings)("source",m.\u0275\u0275pipeBind1(7,2,t.allDepartments$)))},directives:[u.Asz,u.ndF,u.yKW,a.T5],pipes:[r.Ov],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}"]}),e})()},{path:"**",component:s.w}]}];let g=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=m.\u0275\u0275defineInjector({imports:[[o.Bz.forChild(f)],o.Bz]}),e})();var C=n(73749),b=n(55171),v=n(3679),y=n(28815),w=n(94370),M=n(91601),D=n(6127),B=n(32024);let k=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=m.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=m.\u0275\u0275defineInjector({providers:[u.eJ1,w.n,y.p],imports:[[r.ez,g,u.EoG,v.u5,u.nKr,u.T2N,u.zyh,u.MfT,C.$,u._WB,u.wXm.forChild(),b.R,a.ne,c.Aw.forFeature("departments",B.TZ),M.sQ.forFeature([D.g])]]}),e})()}}]);