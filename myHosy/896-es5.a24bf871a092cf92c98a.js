!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function n(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[896],{76896:function(t,r,i){"use strict";i.r(r),i.d(r,{AppointmentModule:function(){return w}});var a,o,l,s=i(38583),c=i(64419),m=i(55477),d=i(37716),u=function(){var t=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=d["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-appointment-calender"]],decls:2,vars:0,template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1,"appointment-calender works!"),d["\u0275\u0275elementEnd"]())},styles:[""]}),t}(),f=i(70419),p=i(98152),b=i(51559),g=[{path:"",children:[{path:"",redirectTo:"all",pathMatch:"full"},{path:"all",component:(o=function(){function t(n){e(this,t),this.service=n,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"Patient",type:"string"},lastName:{title:"Doctor",type:"string"},username:{title:"Date-Time",type:"string"},email:{title:"Remarks",type:"string"},age:{title:"Status",type:"number"}}},this.all=new f.nC,this.pending=new f.nC,this.confirmed=new f.nC,this.treated=new f.nC,this.cancelled=new f.nC,this.requested=new f.nC;var r=this.service.getData();this.all.load(r),this.pending.load(r),this.confirmed.load(r),this.treated.load(r),this.cancelled.load(r),this.requested.load(r)}return n(t,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}},{key:"ngOnInit",value:function(){}}]),t}(),o.\u0275fac=function(e){return new(e||o)(d["\u0275\u0275directiveInject"](p.B))},o.\u0275cmp=d["\u0275\u0275defineComponent"]({type:o,selectors:[["ngx-appointment-list"]],decls:21,vars:12,consts:[[1,"row"],[1,"col-12"],["size","small"],["type","submit","nbButton","","status","danger"],["fullWidth",""],["tabTitle","All"],[3,"settings","source","deleteConfirm"],["tabTitle","Pending Confimation"],["tabTitle","Confirmed"],["tabTitle","Treated"],["tabTitle","Cancelled"],["tabTitle","Requested"]],template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"div",0),d["\u0275\u0275elementStart"](1,"div",1),d["\u0275\u0275elementStart"](2,"nb-card",2),d["\u0275\u0275elementStart"](3,"nb-card-header"),d["\u0275\u0275text"](4," Appointment's Table "),d["\u0275\u0275elementStart"](5,"button",3),d["\u0275\u0275text"](6,"Add Appointment"),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](7,"nb-card-body"),d["\u0275\u0275elementStart"](8,"nb-tabset",4),d["\u0275\u0275elementStart"](9,"nb-tab",5),d["\u0275\u0275elementStart"](10,"ng2-smart-table",6),d["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](11,"nb-tab",7),d["\u0275\u0275elementStart"](12,"ng2-smart-table",6),d["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](13,"nb-tab",8),d["\u0275\u0275elementStart"](14,"ng2-smart-table",6),d["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](15,"nb-tab",9),d["\u0275\u0275elementStart"](16,"ng2-smart-table",6),d["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](17,"nb-tab",10),d["\u0275\u0275elementStart"](18,"ng2-smart-table",6),d["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementStart"](19,"nb-tab",11),d["\u0275\u0275elementStart"](20,"ng2-smart-table",6),d["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"](),d["\u0275\u0275elementEnd"]()),2&e&&(d["\u0275\u0275advance"](10),d["\u0275\u0275property"]("settings",t.settings)("source",t.all),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("settings",t.settings)("source",t.pending),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("settings",t.settings)("source",t.confirmed),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("settings",t.settings)("source",t.treated),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("settings",t.settings)("source",t.cancelled),d["\u0275\u0275advance"](2),d["\u0275\u0275property"]("settings",t.settings)("source",t.requested))},directives:[b.Asz,b.ndF,b.DPz,b.yKW,b.kyn,b.TR4,f.T5],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}"]}),o)},{path:"upcoming",component:(a=function(){function t(){e(this,t)}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),a.\u0275fac=function(e){return new(e||a)},a.\u0275cmp=d["\u0275\u0275defineComponent"]({type:a,selectors:[["ngx-appointment-upcoming"]],decls:2,vars:0,template:function(e,t){1&e&&(d["\u0275\u0275elementStart"](0,"p"),d["\u0275\u0275text"](1,"appointment-upcoming works!"),d["\u0275\u0275elementEnd"]())},styles:[""]}),a)},{path:"calender",component:u},{path:"**",component:m.w}]}],h=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=d["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[c.Bz.forChild(g)],c.Bz]}),t}(),C=i(73749),y=i(55171),v=i(3679),w=((l=function t(){e(this,t)}).\u0275fac=function(e){return new(e||l)},l.\u0275mod=d["\u0275\u0275defineNgModule"]({type:l}),l.\u0275inj=d["\u0275\u0275defineInjector"]({imports:[[s.ez,h,b.EoG,v.u5,b.nKr,b.T2N,b.zyh,b.MfT,C.$,b._WB,y.R,f.ne]]}),l)}}])}();