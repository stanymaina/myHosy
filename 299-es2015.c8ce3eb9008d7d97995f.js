"use strict";(self.webpackChunkmyHosy=self.webpackChunkmyHosy||[]).push([[299],{51299:function(e,t,n){n.r(t),n.d(t,{HumanResourceModule:function(){return T}});var i=n(38583),o=n(95987),s=n(55477),r=n(23065),l=n(17730),a=n(47184),c=n(37716),d=n(54550),p=n(76185);let m=(()=>{class e{constructor(e,t){this.store=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Phone",type:"string"},email:{title:"Email",type:"string"},profile:{title:"Profile",type:"string"}}},this.allAccountants$=this.store.pipe((0,r.Ys)(a.CV))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(r.yh),c.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-accountant"]],decls:8,vars:4,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"nb-card"),c.\u0275\u0275elementStart(1,"nb-card-header"),c.\u0275\u0275text(2," Accountants' Table "),c.\u0275\u0275elementStart(3,"button",0),c.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),c.\u0275\u0275element(4,"i",1),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"nb-card-body"),c.\u0275\u0275elementStart(6,"ng2-smart-table",2),c.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c.\u0275\u0275pipe(7,"async"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(6),c.\u0275\u0275property("settings",t.settings)("source",c.\u0275\u0275pipeBind1(7,2,t.allAccountants$)))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,p.T5],pipes:[i.Ov],styles:[""]}),e})(),u=(()=>{class e{constructor(e,t){this.store=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Phone",type:"string"},email:{title:"Email",type:"string"},profile:{title:"Profile",type:"string"}}},this.allDiener$=this.store.pipe((0,r.Ys)(a.Lx))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(r.yh),c.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-diener"]],decls:8,vars:4,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"nb-card"),c.\u0275\u0275elementStart(1,"nb-card-header"),c.\u0275\u0275text(2," Dieners' Table "),c.\u0275\u0275elementStart(3,"button",0),c.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),c.\u0275\u0275element(4,"i",1),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"nb-card-body"),c.\u0275\u0275elementStart(6,"ng2-smart-table",2),c.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c.\u0275\u0275pipe(7,"async"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(6),c.\u0275\u0275property("settings",t.settings)("source",c.\u0275\u0275pipeBind1(7,2,t.allDiener$)))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,p.T5],pipes:[i.Ov],styles:[""]}),e})(),h=(()=>{class e{constructor(e,t){this.store=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Phone",type:"string"},email:{title:"Email",type:"string"},profile:{title:"Profile",type:"string"}}},this.allLaboratorists$=this.store.pipe((0,r.Ys)(a.N6))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(r.yh),c.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-laboratorist"]],decls:8,vars:4,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"nb-card"),c.\u0275\u0275elementStart(1,"nb-card-header"),c.\u0275\u0275text(2," Laboratorists' Table "),c.\u0275\u0275elementStart(3,"button",0),c.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),c.\u0275\u0275element(4,"i",1),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"nb-card-body"),c.\u0275\u0275elementStart(6,"ng2-smart-table",2),c.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c.\u0275\u0275pipe(7,"async"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(6),c.\u0275\u0275property("settings",t.settings)("source",c.\u0275\u0275pipeBind1(7,2,t.allLaboratorists$)))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,p.T5],pipes:[i.Ov],styles:[""]}),e})(),f=(()=>{class e{constructor(e,t){this.store=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Phone",type:"string"},email:{title:"Email",type:"string"},profile:{title:"Profile",type:"string"}}},this.allNurses$=this.store.pipe((0,r.Ys)(a.jS))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(r.yh),c.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-nurse"]],decls:8,vars:4,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"nb-card"),c.\u0275\u0275elementStart(1,"nb-card-header"),c.\u0275\u0275text(2," Nurses' Table "),c.\u0275\u0275elementStart(3,"button",0),c.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),c.\u0275\u0275element(4,"i",1),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"nb-card-body"),c.\u0275\u0275elementStart(6,"ng2-smart-table",2),c.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c.\u0275\u0275pipe(7,"async"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(6),c.\u0275\u0275property("settings",t.settings)("source",c.\u0275\u0275pipeBind1(7,2,t.allNurses$)))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,p.T5],pipes:[i.Ov],styles:[""]}),e})(),y=(()=>{class e{constructor(e,t){this.store=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Phone",type:"string"},email:{title:"Email",type:"string"},profile:{title:"Profile",type:"string"}}},this.allPharmacists$=this.store.pipe((0,r.Ys)(a.OU))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(r.yh),c.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-pharmacist"]],decls:8,vars:4,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"nb-card"),c.\u0275\u0275elementStart(1,"nb-card-header"),c.\u0275\u0275text(2," Pharmacists' Table "),c.\u0275\u0275elementStart(3,"button",0),c.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),c.\u0275\u0275element(4,"i",1),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"nb-card-body"),c.\u0275\u0275elementStart(6,"ng2-smart-table",2),c.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c.\u0275\u0275pipe(7,"async"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(6),c.\u0275\u0275property("settings",t.settings)("source",c.\u0275\u0275pipeBind1(7,2,t.allPharmacists$)))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,p.T5],pipes:[i.Ov],styles:[""]}),e})(),b=(()=>{class e{constructor(e,t){this.store=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Email",type:"string"},email:{title:"Photo",type:"string"},profile:{title:"Address",type:"string"}}},this.allRadiographers$=this.store.pipe((0,r.Ys)(a.Ur))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(r.yh),c.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-radiographer"]],decls:8,vars:4,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"nb-card"),c.\u0275\u0275elementStart(1,"nb-card-header"),c.\u0275\u0275text(2," Radiographers' Table "),c.\u0275\u0275elementStart(3,"button",0),c.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),c.\u0275\u0275element(4,"i",1),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"nb-card-body"),c.\u0275\u0275elementStart(6,"ng2-smart-table",2),c.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c.\u0275\u0275pipe(7,"async"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(6),c.\u0275\u0275property("settings",t.settings)("source",c.\u0275\u0275pipeBind1(7,2,t.allRadiographers$)))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,p.T5],pipes:[i.Ov],styles:[""]}),e})(),g=(()=>{class e{constructor(e,t){this.store=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Email",type:"string"},email:{title:"Photo",type:"string"},profile:{title:"Address",type:"string"}}},this.allReceptionists$=this.store.pipe((0,r.Ys)(a.Qq))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(r.yh),c.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-receptionist"]],decls:8,vars:4,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"nb-card"),c.\u0275\u0275elementStart(1,"nb-card-header"),c.\u0275\u0275text(2," Receptionists' Table "),c.\u0275\u0275elementStart(3,"button",0),c.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),c.\u0275\u0275element(4,"i",1),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementStart(5,"nb-card-body"),c.\u0275\u0275elementStart(6,"ng2-smart-table",2),c.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c.\u0275\u0275pipe(7,"async"),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(6),c.\u0275\u0275property("settings",t.settings)("source",c.\u0275\u0275pipeBind1(7,2,t.allReceptionists$)))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,p.T5],pipes:[i.Ov],styles:[""]}),e})();var v=n(68307),C=n(70633);const w=[{path:"",component:(()=>{class e{constructor(e,t){this.windowService=e,this.store=t,this.tabs=[{title:"Accountants",route:"/0/hr/accountants"},{title:"Dieners",route:"/0/hr/dieners"},{title:"Laboratorist",route:"/0/hr/laboratorists"},{title:"Nurse",route:"/0/hr/nurses"},{title:"Pharmasist",route:"/0/hr/pharmasists"},{title:"Radiographer",route:"/0/hr/radiographers"},{title:"Receptionist",route:"/0/hr/receptionists"}],this.store.pipe((0,r.Ys)(a.Ce),(0,v.b)(e=>{e||this.store.dispatch(new C.nB)})).subscribe()}ngOnInit(){this.store.pipe((0,r.Ys)(a.Ce),(0,v.b)(e=>{e||this.store.dispatch(new C.nB)})).subscribe()}openAddReport(e,t){this.openWindow(l.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275directiveInject(d.eJ1),c.\u0275\u0275directiveInject(r.yh))},e.\u0275cmp=c.\u0275\u0275defineComponent({type:e,selectors:[["ngx-human-resource"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],["size","giant"],["fullWidth","",3,"tabs"]],template:function(e,t){1&e&&(c.\u0275\u0275elementStart(0,"div",0),c.\u0275\u0275elementStart(1,"div",1),c.\u0275\u0275elementStart(2,"nb-card",2),c.\u0275\u0275element(3,"nb-route-tabset",3),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd(),c.\u0275\u0275elementEnd()),2&e&&(c.\u0275\u0275advance(3),c.\u0275\u0275property("tabs",t.tabs))},directives:[d.Asz,d.l0$],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}"]}),e})(),children:[{path:"",redirectTo:"nurses",pathMatch:"full"},{path:"accountants",component:m},{path:"dieners",component:u},{path:"laboratorists",component:h},{path:"nurses",component:f},{path:"pharmasists",component:y},{path:"radiographers",component:b},{path:"receptionists",component:g},{path:"**",component:s.w}]}];let E=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=c.\u0275\u0275defineInjector({imports:[[o.Bz.forChild(w)],o.Bz]}),e})();var B=n(55171),S=n(3679),A=n(45435),k=n(28049),P=n(88002),j=n(91841),x=n(486);class I{constructor(e,t,n,i,o,s,r,l){this.id=e,this.user_id=t,this.name=n,this.phone=i,this.email=o,this.department=s,this.profile=r,this.employee_role=l}}let R=(()=>{class e{adapt(e){return new I(e.id,e.user_id,"Dr. "+e.user.first_name+" "+e.user.other_name,e.user.phone1_number,e.user.email,e.profile,e.profile,e.employee_role)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),D=(()=>{class e{constructor(e,t,n){this.http=e,this.jarwis=t,this.adapter=n}findEmployeeById(e){return this.http.get(this.jarwis.apiUrl+`/employees/${e}`)}findAllEmployees(){return this.jarwis.getURI("employees").pipe((0,P.U)(e=>e.data.map(e=>this.adapter.adapt(e))))}saveEmployee(e,t){return this.http.put("/api/employees/"+e,t)}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(j.eN),c.\u0275\u0275inject(x.R),c.\u0275\u0275inject(R))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})(),W=(()=>{class e{constructor(e,t){this.employeesService=e,this.store=t}resolve(e,t){const n=e.params.id;return this.store.pipe((0,r.Ys)((0,a.T4)(n)),(0,v.b)(e=>{e||this.store.dispatch(new C.Mu({employeeId:n}))}),(0,A.h)(e=>!!e),(0,k.P)())}}return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(D),c.\u0275\u0275inject(r.yh))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})();var O=n(64762),_=n(45887),$=n(19773),z=n(57057);class H{constructor(e,t,n){this.actions$=e,this.employeesService=t,this.store=n,this.loadEmployee$=this.actions$.pipe((0,_.l4)(C.VY.EmployeeRequested),(0,$.zg)(e=>this.employeesService.findEmployeeById(e.payload.employeeId)),(0,P.U)(e=>new C.dL({employee:e}))),this.loadAllEmployees$=this.actions$.pipe((0,_.l4)(C.VY.AllEmployeesRequested),(0,z.M)(this.store.pipe((0,r.Ys)(a.Ce))),(0,A.h)(([,e])=>!e),(0,$.zg)(()=>this.employeesService.findAllEmployees()),(0,P.U)(e=>new C.K9({employees:e})))}}H.\u0275fac=function(e){return new(e||H)(c.\u0275\u0275inject(_.eX),c.\u0275\u0275inject(D),c.\u0275\u0275inject(r.yh))},H.\u0275prov=c.\u0275\u0275defineInjectable({token:H,factory:H.\u0275fac}),(0,O.gn)([(0,_.Qm)()],H.prototype,"loadEmployee$",void 0),(0,O.gn)([(0,_.Qm)()],H.prototype,"loadAllEmployees$",void 0);var L=n(7315);let T=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=c.\u0275\u0275defineInjector({providers:[D,W],imports:[[i.ez,E,d.EoG,S.u5,d.nKr,d.T2N,d.zyh,d.MfT,d._WB,B.R,p.ne,S.UX,r.Aw.forFeature("employees",L.Hb),_.sQ.forFeature([H])]]}),e})()},70633:function(e,t,n){n.d(t,{VY:function(){return i},Mu:function(){return o},dL:function(){return s},nB:function(){return r},K9:function(){return l}});var i=(()=>{return(e=i||(i={})).EmployeeRequested="[View Employee Page] Employee Requested",e.EmployeeLoaded="[Employees API] Employee Loaded",e.AllEmployeesRequested="[Employees Home Page] All Employees Requested",e.AllEmployeesLoaded="[Employees API] All Employees Loaded",e.EmployeeSaved="[Edit Employee Dialog] Employee Saved",i;var e})();class o{constructor(e){this.payload=e,this.type=i.EmployeeRequested}}class s{constructor(e){this.payload=e,this.type=i.EmployeeLoaded}}class r{constructor(){this.type=i.AllEmployeesRequested}}class l{constructor(e){this.payload=e,this.type=i.AllEmployeesLoaded}}},7315:function(e,t,n){n.d(t,{Hb:function(){return l},td:function(){return a}});var i=n(80273),o=n(70633);const s=(0,i.H)(),r=s.getInitialState({allEmployeesLoaded:!1});function l(e=r,t){switch(t.type){case o.VY.EmployeeLoaded:return s.addOne(t.payload.employee,e);case o.VY.AllEmployeesLoaded:return s.setAll(t.payload.employees,Object.assign(Object.assign({},e),{allEmployeesLoaded:!0}));case o.VY.EmployeeSaved:return s.updateOne(t.payload.employee,e);default:return e}}const{selectAll:a}=s.getSelectors()},47184:function(e,t,n){n.d(t,{T4:function(){return r},CV:function(){return a},jS:function(){return c},Qq:function(){return d},OU:function(){return p},Ur:function(){return m},N6:function(){return u},Lx:function(){return h},Ce:function(){return f}});var i=n(23065),o=n(7315);const s=(0,i.ZF)("employees"),r=e=>(0,i.P1)(s,t=>t.entities[e]),l=(0,i.P1)(s,o.td),a=(0,i.P1)(l,e=>e.filter(e=>"Doctor"===e.employee_role)),c=(0,i.P1)(l,e=>e.filter(e=>"Nurse"===e.employee_role)),d=(0,i.P1)(l,e=>e.filter(e=>"Receptionist"===e.employee_role)),p=(0,i.P1)(l,e=>e.filter(e=>"Pharmasist"===e.employee_role)),m=(0,i.P1)(l,e=>e.filter(e=>"Radiographer"===e.employee_role)),u=(0,i.P1)(l,e=>e.filter(e=>"Laboratorist"===e.employee_role)),h=(0,i.P1)(l,e=>e.filter(e=>"Diner"===e.employee_role)),f=((0,i.P1)(l,e=>e.filter(e=>"Accountant"===e.employee_role)),(0,i.P1)(s,e=>e.allEmployeesLoaded))}}]);