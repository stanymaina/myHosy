!function(){"use strict";function e(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function t(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function n(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}(self.webpackChunkmyHosy=self.webpackChunkmyHosy||[]).push([[684],{77684:function(t,i,o){o.r(i),o.d(i,{ScheduleModule:function(){return C}});var r,s=o(38583),c=o(95987),a=o(55477),l=o(76185),u=o(37716),d=o(98152),f=o(54550),m=[{path:"",children:[{path:"",redirectTo:"all",pathMatch:"full"},{path:"all",component:(r=function(){function t(n){e(this,t),this.service=n,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Doctor",type:"string"},lastName:{title:"Day",type:"string"},username:{title:"Start Time",type:"string"},email:{title:"End Time",type:"string"},id:{title:"Duration",type:"string"}}},this.source=new l.nC;var i=this.service.getData();this.source.load(i)}return n(t,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}},{key:"ngOnInit",value:function(){}}]),t}(),r.\u0275fac=function(e){return new(e||r)(u.\u0275\u0275directiveInject(d.B))},r.\u0275cmp=u.\u0275\u0275defineComponent({type:r,selectors:[["ngx-schedule"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(u.\u0275\u0275elementStart(0,"nb-card"),u.\u0275\u0275elementStart(1,"nb-card-header"),u.\u0275\u0275text(2," Schedule's Table "),u.\u0275\u0275elementEnd(),u.\u0275\u0275elementStart(3,"nb-card-body"),u.\u0275\u0275elementStart(4,"ng2-smart-table",0),u.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),u.\u0275\u0275elementEnd(),u.\u0275\u0275elementEnd(),u.\u0275\u0275elementEnd()),2&e&&(u.\u0275\u0275advance(4),u.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[f.Asz,f.ndF,f.yKW,l.T5],styles:[""]}),r)},{path:"holidays",component:function(){var t=function(){function t(n){e(this,t),this.service=n,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{firstName:{title:"Doctor",type:"string"},lastName:{title:"Date",type:"string"}}},this.source=new l.nC;var i=this.service.getData();this.source.load(i)}return n(t,[{key:"onDeleteConfirm",value:function(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}},{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(e){return new(e||t)(u.\u0275\u0275directiveInject(d.B))},t.\u0275cmp=u.\u0275\u0275defineComponent({type:t,selectors:[["ngx-holidays"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(u.\u0275\u0275elementStart(0,"nb-card"),u.\u0275\u0275elementStart(1,"nb-card-header"),u.\u0275\u0275text(2," Holidays's Table "),u.\u0275\u0275elementEnd(),u.\u0275\u0275elementStart(3,"nb-card-body"),u.\u0275\u0275elementStart(4,"ng2-smart-table",0),u.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),u.\u0275\u0275elementEnd(),u.\u0275\u0275elementEnd(),u.\u0275\u0275elementEnd()),2&e&&(u.\u0275\u0275advance(4),u.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[f.Asz,f.ndF,f.yKW,l.T5],styles:[""]}),t}()},{path:"**",component:a.w}]}],h=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=u.\u0275\u0275defineInjector({imports:[[c.Bz.forChild(m)],c.Bz]}),t}(),p=o(55171),y=o(3679),b=o(73749),C=function(){var t=function t(){e(this,t)};return t.\u0275fac=function(e){return new(e||t)},t.\u0275mod=u.\u0275\u0275defineNgModule({type:t}),t.\u0275inj=u.\u0275\u0275defineInjector({imports:[[s.ez,h,f.EoG,y.u5,f.nKr,f.T2N,f.zyh,f.MfT,b.$,f._WB,p.R,l.ne]]}),t}()}}])}();