(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[153],{97153:function(e,t,n){"use strict";n.r(t),n.d(t,{MedicineModule:function(){return y}});var i=n(38583),s=n(64419),r=n(55477),c=n(37716),o=n(51559);let a=(()=>{class e{constructor(){this.tabs=[{title:"Medicine List",route:"/0/medicine/list"},{title:"Medicine Category",route:"/0/medicine/category"},{title:"Stock Alert Levels",route:"/0/medicine/stock-alert"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-medicine"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],["size","small"],["fullWidth","",3,"tabs"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"div",0),c["\u0275\u0275elementStart"](1,"div",1),c["\u0275\u0275elementStart"](2,"nb-card",2),c["\u0275\u0275element"](3,"nb-route-tabset",3),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](3),c["\u0275\u0275property"]("tabs",t.tabs))},directives:[o.Asz,o.l0$],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}"]}),e})();var l=n(70419),d=n(98152);let m=(()=>{class e{constructor(e){this.service=e,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},firstName:{title:"Category",type:"string"},lastName:{title:"Description",type:"string"}}},this.source=new l.nC;const t=this.service.getData();this.source.load(t)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](d.B))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-meds-category"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2," Medicine Category's Table "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275elementStart"](4,"ng2-smart-table",0),c["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[o.Asz,o.ndF,o.yKW,l.T5],styles:[""]}),e})();const u=[{path:"",component:a,children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class e{constructor(e){this.service=e,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},firstName:{title:"Name",type:"string"},lastName:{title:"Category",type:"string"},username:{title:"Store Box",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Purchase Price",type:"number"},date:{title:"Sale Price",type:"number"},sex:{title:"Quantity",type:"number"},gname:{title:"Generic Name",type:"string"},company:{title:"Company",type:"string"},effects:{title:"Effects",type:"string"},e_date:{title:"Expiry Date",type:"date"}}},this.source=new l.nC;const t=this.service.getData();this.source.load(t)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](d.B))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-meds-list"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2," Medicine List's Table "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275elementStart"](4,"ng2-smart-table",0),c["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[o.Asz,o.ndF,o.yKW,l.T5],styles:[""]}),e})()},{path:"category",component:m},{path:"stock-alert",component:(()=>{class e{constructor(e){this.service=e,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},firstName:{title:"Name",type:"string"},lastName:{title:"Category",type:"string"},username:{title:"Store Box",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Purchase Price",type:"number"},date:{title:"Sale Price",type:"number"},sex:{title:"Quantity",type:"number"},gname:{title:"Generic Name",type:"string"},company:{title:"Company",type:"string"},effects:{title:"Effects",type:"string"},e_date:{title:"Expiry Date",type:"date"}}},this.source=new l.nC;const t=this.service.getData();this.source.load(t)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(c["\u0275\u0275directiveInject"](d.B))},e.\u0275cmp=c["\u0275\u0275defineComponent"]({type:e,selectors:[["ngx-meds-stock-alert"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(c["\u0275\u0275elementStart"](0,"nb-card"),c["\u0275\u0275elementStart"](1,"nb-card-header"),c["\u0275\u0275text"](2," Medicine Stock Alert's Table "),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementStart"](3,"nb-card-body"),c["\u0275\u0275elementStart"](4,"ng2-smart-table",0),c["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"](),c["\u0275\u0275elementEnd"]()),2&e&&(c["\u0275\u0275advance"](4),c["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[o.Asz,o.ndF,o.yKW,l.T5],styles:[""]}),e})()},{path:"**",component:r.w}]}];let p=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[s.Bz.forChild(u)],s.Bz]}),e})();var f=n(55171),g=n(3679);let y=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=c["\u0275\u0275defineNgModule"]({type:e}),e.\u0275inj=c["\u0275\u0275defineInjector"]({imports:[[i.ez,p,o.EoG,g.u5,o.nKr,o.T2N,o.zyh,o.MfT,o._WB,f.R,l.ne]]}),e})()}}]);