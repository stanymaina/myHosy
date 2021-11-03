!function(){function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[734],{62734:function(t,i,r){"use strict";r.r(i),r.d(i,{PatientModule:function(){return D}});var s,a,o=r(38583),l=r(51559),c=r(70419),d=r(55171),m=r(3679),u=r(64419),p=r(55477),f=r(23065),h=r(46655),b=r(4242),g=r(37716),y=r(98152),v=function(){var t=function(){function t(n,i){e(this,t),this.service=n,this.store=i,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Phone",type:"string"},id_no:{title:"ID No.",type:"number"},nhif_no:{title:"Due Balance",type:"string"}}},this.source=new c.nC,this.store.dispatch(new h.yi),this.allPatients$=this.store.pipe((0,f.Ys)(b.QD))}return n(t,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}]),t}();return t.\u0275fac=function(e){return new(e||t)(g["\u0275\u0275directiveInject"](y.B),g["\u0275\u0275directiveInject"](f.yh))},t.\u0275cmp=g["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-patient-list"]],decls:6,vars:4,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"nb-card"),g["\u0275\u0275elementStart"](1,"nb-card-header"),g["\u0275\u0275text"](2," Patient's Table "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](3,"nb-card-body"),g["\u0275\u0275elementStart"](4,"ng2-smart-table",0),g["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),g["\u0275\u0275pipe"](5,"async"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e&&(g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("settings",t.settings)("source",g["\u0275\u0275pipeBind1"](5,2,t.allPatients$)))},directives:[l.Asz,l.ndF,l.yKW,c.T5],pipes:[o.Ov],styles:[""]}),t}(),C=function(){var t=function(){function t(n){e(this,t),this.service=n,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},username:{title:"Username",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Age",type:"number"}}},this.source=new c.nC;var i=this.service.getData();this.source.load(i)}return n(t,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}},{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)(g["\u0275\u0275directiveInject"](y.B))},t.\u0275cmp=g["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-patient-documents"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"nb-card"),g["\u0275\u0275elementStart"](1,"nb-card-header"),g["\u0275\u0275text"](2," Patient's Documents "),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](3,"nb-card-body"),g["\u0275\u0275elementStart"](4,"ng2-smart-table",0),g["\u0275\u0275listener"]("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e&&(g["\u0275\u0275advance"](4),g["\u0275\u0275property"]("settings",t.settings)("source",t.source))},directives:[l.Asz,l.ndF,l.yKW,c.T5],styles:[""]}),t}(),E=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=g["\u0275\u0275defineComponent"]({type:t,selectors:[["ngx-register-patient"]],decls:20,vars:0,consts:[[1,"row"],[1,"col-12"],[1,"form-group"],["for","exampleInputEmail1",1,"label"],["type","email","nbInput","","fullWidth","","id","exampleInputEmail1","placeholder","Email"],["for","exampleInputPassword1",1,"label"],["type","password","nbInput","","fullWidth","","id","exampleInputPassword1","placeholder","Password"],["type","submit","nbButton","","status","danger"]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"div",0),g["\u0275\u0275elementStart"](1,"div",1),g["\u0275\u0275elementStart"](2,"nb-card"),g["\u0275\u0275elementStart"](3,"nb-card-header"),g["\u0275\u0275text"](4,"Add Patient"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](5,"nb-card-body"),g["\u0275\u0275elementStart"](6,"form"),g["\u0275\u0275elementStart"](7,"div",2),g["\u0275\u0275elementStart"](8,"label",3),g["\u0275\u0275text"](9,"Email address"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](10,"input",4),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](11,"div",2),g["\u0275\u0275elementStart"](12,"label",5),g["\u0275\u0275text"](13,"Password"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275element"](14,"input",6),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](15,"div",2),g["\u0275\u0275elementStart"](16,"nb-checkbox"),g["\u0275\u0275text"](17,"Agree to Terms."),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementStart"](18,"button",7),g["\u0275\u0275text"](19,"Submit"),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]())},directives:[l.Asz,l.ndF,l.yKW,m._Y,m.JL,m.F,l.h8i,l.NTf,l.DPz],styles:[""]}),t}(),w=[{path:"",component:(s=function(){function t(){e(this,t),this.tabs=[{title:"Patient List",route:"/0/patients/list"},{title:"Add Patient",route:"/0/patients/register"},{title:"Patient Documents",route:"/0/patients/documents"}]}return n(t,[{key:"ngOnInit",value:function(){}}]),t}(),s.\u0275fac=function(e){return new(e||s)},s.\u0275cmp=g["\u0275\u0275defineComponent"]({type:s,selectors:[["ngx-patient"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],["size","small"],["fullWidth","",3,"tabs"]],template:function(e,t){1&e&&(g["\u0275\u0275elementStart"](0,"div",0),g["\u0275\u0275elementStart"](1,"div",1),g["\u0275\u0275elementStart"](2,"nb-card",2),g["\u0275\u0275element"](3,"nb-route-tabset",3),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"](),g["\u0275\u0275elementEnd"]()),2&e&&(g["\u0275\u0275advance"](3),g["\u0275\u0275property"]("tabs",t.tabs))},directives:[l.Asz,l.l0$],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translateZ(0);height:100%}"]}),s),children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:v},{path:"register",component:E},{path:"documents",component:C},{path:"**",component:p.w}]}],S=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=g["\u0275\u0275defineNgModule"]({type:t}),t.\u0275inj=g["\u0275\u0275defineInjector"]({imports:[[u.Bz.forChild(w)],u.Bz]}),t}(),P=r(62827),B=r(10758),k=r(65476),x=r(91601),I=r(5559),D=((a=function t(){e(this,t)}).\u0275fac=function(e){return new(e||a)},a.\u0275mod=g["\u0275\u0275defineNgModule"]({type:a}),a.\u0275inj=g["\u0275\u0275defineInjector"]({providers:[P.$,B.N],imports:[[o.ez,S,l.EoG,m.u5,l.nKr,l.T2N,l.zyh,l.MfT,l._WB,d.R,c.ne,f.Aw.forFeature("patients",k.Sx),x.sQ.forFeature([I.a])]]}),a)}}])}();