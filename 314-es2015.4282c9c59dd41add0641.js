"use strict";(self.webpackChunkmyHosy=self.webpackChunkmyHosy||[]).push([[314],{43314:function(e,t,n){n.r(t),n.d(t,{HumanResourceModule:function(){return f}});var i=n(38583),s=n(95987),o=n(55477),r=n(76185),c=n(17730),a=n(37716),l=n(98152),d=n(54550);const m=[{path:"",component:(()=>{class e{constructor(e){this.windowService=e,this.tabs=[{title:"Accountants",route:"/0/hr/accountants"},{title:"Dieners",route:"/0/hr/dieners"},{title:"Laboratorist",route:"/0/hr/laboratorists"},{title:"Nurse",route:"/0/hr/nurses"},{title:"Pharmasist",route:"/0/hr/pharmasists"},{title:"Radiographer",route:"/0/hr/radiographers"},{title:"Receptionist",route:"/0/hr/receptionists"}]}ngOnInit(){}openAddReport(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-human-resource"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],["size","giant"],["fullWidth","",3,"tabs"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"div",0),a.\u0275\u0275elementStart(1,"div",1),a.\u0275\u0275elementStart(2,"nb-card",2),a.\u0275\u0275element(3,"nb-route-tabset",3),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(3),a.\u0275\u0275property("tabs",t.tabs))},directives:[d.Asz,d.l0$],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}"]}),e})(),children:[{path:"",redirectTo:"nurses",pathMatch:"full"},{path:"accountants",component:(()=>{class e{constructor(e,t){this.service=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Name",type:"string"},lastName:{title:"Email",type:"string"},id:{title:"Phone",type:"number"},username:{title:"Address",type:"string"},email:{title:"Photo",type:"string"}}},this.source=new r.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(l.B),a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-accountant"]],decls:7,vars:2,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"nb-card"),a.\u0275\u0275elementStart(1,"nb-card-header"),a.\u0275\u0275text(2," Accountants' Table "),a.\u0275\u0275elementStart(3,"button",0),a.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),a.\u0275\u0275element(4,"i",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(5,"nb-card-body"),a.\u0275\u0275elementStart(6,"ng2-smart-table",2),a.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(6),a.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,r.T5],styles:[""]}),e})()},{path:"dieners",component:(()=>{class e{constructor(e,t){this.service=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Name",type:"string"},lastName:{title:"Email",type:"string"},id:{title:"Phone",type:"number"},username:{title:"Address",type:"string"},email:{title:"Photo",type:"string"}}},this.source=new r.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(l.B),a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-diener"]],decls:7,vars:2,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"nb-card"),a.\u0275\u0275elementStart(1,"nb-card-header"),a.\u0275\u0275text(2," Dieners' Table "),a.\u0275\u0275elementStart(3,"button",0),a.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),a.\u0275\u0275element(4,"i",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(5,"nb-card-body"),a.\u0275\u0275elementStart(6,"ng2-smart-table",2),a.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(6),a.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,r.T5],styles:[""]}),e})()},{path:"laboratorists",component:(()=>{class e{constructor(e,t){this.service=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Name",type:"string"},lastName:{title:"Email",type:"string"},id:{title:"Phone",type:"number"},username:{title:"Address",type:"string"},email:{title:"Photo",type:"string"}}},this.source=new r.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(l.B),a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-laboratorist"]],decls:7,vars:2,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"nb-card"),a.\u0275\u0275elementStart(1,"nb-card-header"),a.\u0275\u0275text(2," Laboratorists' Table "),a.\u0275\u0275elementStart(3,"button",0),a.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),a.\u0275\u0275element(4,"i",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(5,"nb-card-body"),a.\u0275\u0275elementStart(6,"ng2-smart-table",2),a.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(6),a.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,r.T5],styles:[""]}),e})()},{path:"nurses",component:(()=>{class e{constructor(e,t){this.service=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Name",type:"string"},lastName:{title:"Email",type:"string"},id:{title:"Phone",type:"number"},username:{title:"Address",type:"string"},email:{title:"Photo",type:"string"}}},this.source=new r.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(l.B),a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-nurse"]],decls:7,vars:2,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"nb-card"),a.\u0275\u0275elementStart(1,"nb-card-header"),a.\u0275\u0275text(2," Nurses' Table "),a.\u0275\u0275elementStart(3,"button",0),a.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),a.\u0275\u0275element(4,"i",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(5,"nb-card-body"),a.\u0275\u0275elementStart(6,"ng2-smart-table",2),a.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(6),a.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,r.T5],styles:[""]}),e})()},{path:"pharmasists",component:(()=>{class e{constructor(e,t){this.service=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Name",type:"string"},lastName:{title:"Email",type:"string"},id:{title:"Phone",type:"number"},username:{title:"Address",type:"string"},email:{title:"Photo",type:"string"}}},this.source=new r.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(l.B),a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-pharmacist"]],decls:7,vars:2,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"nb-card"),a.\u0275\u0275elementStart(1,"nb-card-header"),a.\u0275\u0275text(2," Pharmacists' Table "),a.\u0275\u0275elementStart(3,"button",0),a.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),a.\u0275\u0275element(4,"i",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(5,"nb-card-body"),a.\u0275\u0275elementStart(6,"ng2-smart-table",2),a.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(6),a.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,r.T5],styles:[""]}),e})()},{path:"radiographers",component:(()=>{class e{constructor(e,t){this.service=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Name",type:"string"},lastName:{title:"Email",type:"string"},id:{title:"Phone",type:"number"},username:{title:"Address",type:"string"},email:{title:"Photo",type:"string"}}},this.source=new r.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(l.B),a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-radiographer"]],decls:7,vars:2,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"nb-card"),a.\u0275\u0275elementStart(1,"nb-card-header"),a.\u0275\u0275text(2," Radiographers' Table "),a.\u0275\u0275elementStart(3,"button",0),a.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),a.\u0275\u0275element(4,"i",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(5,"nb-card-body"),a.\u0275\u0275elementStart(6,"ng2-smart-table",2),a.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(6),a.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,r.T5],styles:[""]}),e})()},{path:"receptionists",component:(()=>{class e{constructor(e,t){this.service=e,this.windowService=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Name",type:"string"},lastName:{title:"Email",type:"string"},id:{title:"Phone",type:"number"},username:{title:"Address",type:"string"},email:{title:"Photo",type:"string"}}},this.source=new r.nC;const n=this.service.getData();this.source.load(n)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}openAddHR(e,t){this.openWindow(c.W,e.data,t)}openWindow(e,t,n){this.windowService.open(e,{context:{text:"some text to pass into template",invoice:t,type:n}})}}return e.\u0275fac=function(t){return new(t||e)(a.\u0275\u0275directiveInject(l.B),a.\u0275\u0275directiveInject(d.eJ1))},e.\u0275cmp=a.\u0275\u0275defineComponent({type:e,selectors:[["ngx-hr-receptionist"]],decls:7,vars:2,consts:[["type","submit","nbButton","","status","danger",3,"click"],[1,"fa","fa-edit"],[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(a.\u0275\u0275elementStart(0,"nb-card"),a.\u0275\u0275elementStart(1,"nb-card-header"),a.\u0275\u0275text(2," Receptionists' Table "),a.\u0275\u0275elementStart(3,"button",0),a.\u0275\u0275listener("click",function(e){return t.openAddHR(e,"add")}),a.\u0275\u0275element(4,"i",1),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementStart(5,"nb-card-body"),a.\u0275\u0275elementStart(6,"ng2-smart-table",2),a.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd(),a.\u0275\u0275elementEnd()),2&e&&(a.\u0275\u0275advance(6),a.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[d.Asz,d.ndF,d.DPz,d.yKW,r.T5],styles:[""]}),e})()},{path:"**",component:o.w}]}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=a.\u0275\u0275defineInjector({imports:[[s.Bz.forChild(m)],s.Bz]}),e})();var p=n(55171),h=n(3679);let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=a.\u0275\u0275defineInjector({imports:[[i.ez,u,d.EoG,h.u5,d.nKr,d.T2N,d.zyh,d.MfT,d._WB,p.R,r.ne,h.UX]]}),e})()}}]);