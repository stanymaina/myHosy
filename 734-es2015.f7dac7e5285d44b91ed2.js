"use strict";(self.webpackChunkmyHosy=self.webpackChunkmyHosy||[]).push([[734],{62734:function(e,t,n){n.r(t),n.d(t,{PatientModule:function(){return W}});var r=n(38583),i=n(54550),o=n(76185),a=n(55171),s=n(3679),l=n(95987),d=n(55477),c=n(23065),m=n(46258),u=n(68307),p=n(46655),h=n(18541),f=n(4242),b=n(37716),g=n(98152),C=n(486),y=n(52849),v=n(13373);function I(e,t){1&e&&b.\u0275\u0275element(0,"ngx-user-edit-form",5),2&e&&b.\u0275\u0275property("form_type","add")}function P(e,t){if(1&e&&(b.\u0275\u0275elementStart(0,"div",0),b.\u0275\u0275template(1,I,1,1,"ngx-user-edit-form",4),b.\u0275\u0275elementEnd()),2&e){const e=b.\u0275\u0275nextContext();b.\u0275\u0275advance(1),b.\u0275\u0275property("ngIf",e.showAddUser)}}function S(e,t){if(1&e&&(b.\u0275\u0275elementStart(0,"nb-option",22),b.\u0275\u0275text(1),b.\u0275\u0275elementEnd()),2&e){const e=t.$implicit;b.\u0275\u0275property("value",e.id),b.\u0275\u0275advance(1),b.\u0275\u0275textInterpolate(e.name)}}const E=function(e,t){return[e,t]};function w(e,t){if(1&e){const e=b.\u0275\u0275getCurrentView();b.\u0275\u0275elementStart(0,"div",0),b.\u0275\u0275elementStart(1,"nb-card"),b.\u0275\u0275elementStart(2,"nb-card-header"),b.\u0275\u0275text(3,"Add Patient"),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(4,"nb-card-body"),b.\u0275\u0275elementStart(5,"div",6),b.\u0275\u0275elementStart(6,"div",7),b.\u0275\u0275elementStart(7,"label",8),b.\u0275\u0275text(8,"First Name"),b.\u0275\u0275elementEnd(),b.\u0275\u0275element(9,"input",9),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(10,"div",7),b.\u0275\u0275elementStart(11,"label",10),b.\u0275\u0275text(12,"Other Names"),b.\u0275\u0275elementEnd(),b.\u0275\u0275element(13,"input",11),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(14,"div",7),b.\u0275\u0275elementStart(15,"label",12),b.\u0275\u0275text(16,"Email address"),b.\u0275\u0275elementEnd(),b.\u0275\u0275element(17,"input",13),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(18,"div",7),b.\u0275\u0275elementStart(19,"label",14),b.\u0275\u0275text(20,"Phone Number"),b.\u0275\u0275elementEnd(),b.\u0275\u0275element(21,"ngx-intl-tel-input",15),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(22,"div",7),b.\u0275\u0275elementStart(23,"label",16),b.\u0275\u0275text(24,"Ref Doctor"),b.\u0275\u0275elementEnd(),b.\u0275\u0275element(25,"br"),b.\u0275\u0275elementStart(26,"nb-select",17),b.\u0275\u0275template(27,S,2,2,"nb-option",18),b.\u0275\u0275pipe(28,"async"),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(29,"div",7),b.\u0275\u0275elementStart(30,"label",19),b.\u0275\u0275text(31,"Age"),b.\u0275\u0275elementEnd(),b.\u0275\u0275element(32,"br"),b.\u0275\u0275element(33,"input",20),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(34,"div",7),b.\u0275\u0275elementStart(35,"nb-checkbox"),b.\u0275\u0275text(36,"Agree to Terms."),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(37,"div",7),b.\u0275\u0275elementStart(38,"button",21),b.\u0275\u0275listener("click",function(){return b.\u0275\u0275restoreView(e),b.\u0275\u0275nextContext().addPatient()}),b.\u0275\u0275text(39," Submit "),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd()}if(2&e){const e=b.\u0275\u0275nextContext();b.\u0275\u0275advance(5),b.\u0275\u0275property("formGroup",e.patientAddForm),b.\u0275\u0275advance(4),b.\u0275\u0275propertyInterpolate("value",e.firstName),b.\u0275\u0275advance(4),b.\u0275\u0275propertyInterpolate("value",e.LastName),b.\u0275\u0275advance(4),b.\u0275\u0275propertyInterpolate("value",e.Emaile),b.\u0275\u0275advance(4),b.\u0275\u0275property("cssClass","custom")("preferredCountries",e.preferredCountries)("enableAutoCountrySelect",!0)("enablePlaceholder",!0)("searchCountryFlag",!0)("searchCountryField",b.\u0275\u0275pureFunction2(20,E,e.SearchCountryField.Iso2,e.SearchCountryField.Name))("selectFirstCountry",!1)("selectedCountryISO",e.CountryISO.Kenya)("maxLength",15)("phoneValidation",!0)("separateDialCode",e.separateDialCode)("numberFormat",e.PhoneNumberFormat.National),b.\u0275\u0275advance(6),b.\u0275\u0275property("ngForOf",b.\u0275\u0275pipeBind1(28,18,e.allDoctors$)),b.\u0275\u0275advance(6),b.\u0275\u0275propertyInterpolate("value",e.Age)}}const _=[{path:"",component:(()=>{class e{constructor(){this.tabs=[{title:"Patient List",route:"/0/patients/list"},{title:"Add Patient",route:"/0/patients/register"},{title:"Patient Documents",route:"/0/patients/documents"}]}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=b.\u0275\u0275defineComponent({type:e,selectors:[["ngx-patient"]],decls:4,vars:1,consts:[[1,"row"],[1,"col-12"],["size","small"],["fullWidth","",3,"tabs"]],template:function(e,t){1&e&&(b.\u0275\u0275elementStart(0,"div",0),b.\u0275\u0275elementStart(1,"div",1),b.\u0275\u0275elementStart(2,"nb-card",2),b.\u0275\u0275element(3,"nb-route-tabset",3),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd()),2&e&&(b.\u0275\u0275advance(3),b.\u0275\u0275property("tabs",t.tabs))},directives:[i.Asz,i.l0$],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}"]}),e})(),children:[{path:"",redirectTo:"list",pathMatch:"full"},{path:"list",component:(()=>{class e{constructor(e,t){this.service=e,this.store=t,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"#",type:"number"},name:{title:"Name",type:"string"},phone:{title:"Phone",type:"string"},id_no:{title:"ID No.",type:"number"},nhif_no:{title:"Due Balance",type:"string"}}},this.source=new o.nC,this.store.pipe((0,c.Ys)(f.AU),(0,u.b)(e=>{e||this.store.dispatch(new p.yi)})).subscribe(),this.allPatients$=this.store.pipe((0,c.Ys)(f.QD))}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}}return e.\u0275fac=function(t){return new(t||e)(b.\u0275\u0275directiveInject(g.B),b.\u0275\u0275directiveInject(c.yh))},e.\u0275cmp=b.\u0275\u0275defineComponent({type:e,selectors:[["ngx-patient-list"]],decls:6,vars:4,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(b.\u0275\u0275elementStart(0,"nb-card"),b.\u0275\u0275elementStart(1,"nb-card-header"),b.\u0275\u0275text(2," Patient's Table "),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(3,"nb-card-body"),b.\u0275\u0275elementStart(4,"ng2-smart-table",0),b.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),b.\u0275\u0275pipe(5,"async"),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd()),2&e&&(b.\u0275\u0275advance(4),b.\u0275\u0275property("settings",t.settings)("source",b.\u0275\u0275pipeBind1(5,2,t.allPatients$)))},directives:[i.Asz,i.ndF,i.yKW,o.T5],pipes:[r.Ov],styles:[""]}),e})()},{path:"register",component:(()=>{class e{constructor(e,t,n){this.store=e,this.formBuilder=t,this.Jarwis=n,this.userId=null,this.showAddUser=!1,this.separateDialCode=!1,this.SearchCountryField=m.wX,this.CountryISO=m.HT,this.PhoneNumberFormat=m.M9,this.preferredCountries=[m.HT.Kenya,m.HT.UnitedStates,m.HT.UnitedKingdom],this.showAddPatient=!1,this.allDoctors$=this.store.pipe((0,c.Ys)(h.Bv)),this.userId=new s.NI("",[s.kI.required]),this.departmentId=new s.NI("",[s.kI.required]),this.doctorProfile=new s.NI("",[s.kI.required]),this.patientAddForm=t.group({doctor_id:this.departmentId,age:this.doctorProfile,user_id:this.userId})}userFound(e){console.log(e),e.isUser?(this.showAddPatient=!1,this.showAddUser=!0):(this.firstName=e.id.first_name,this.LastName=e.id.other_name,this.Emaile=e.id.email,this.phone=e.id.phone1_number,this.patientAddForm.value.user_id=e.id.id,this.patientAddForm=this.formBuilder.group({doctor_id:this.departmentId,age:this.doctorProfile,user_id:e.id.id}),this.showAddPatient=!0,this.showAddUser=!1)}addPatient(){this.Jarwis.postURI("patients",this.patientAddForm.value).subscribe(e=>{console.log(e),this.showAddPatient=!1,this.patientAddForm.reset()},e=>{console.log("Error occured: "+e)})}}return e.\u0275fac=function(t){return new(t||e)(b.\u0275\u0275directiveInject(c.yh),b.\u0275\u0275directiveInject(s.qu),b.\u0275\u0275directiveInject(C.R))},e.\u0275cmp=b.\u0275\u0275defineComponent({type:e,selectors:[["ngx-register-patient"]],decls:5,vars:2,consts:[[1,"row"],[1,"col-12"],[3,"newItemEvent"],["class","row",4,"ngIf"],[3,"form_type",4,"ngIf"],[3,"form_type"],[1,"row",3,"formGroup"],[1,"col-6","form-group"],["for","InputFirstName",1,"label"],["type","text","nbInput","","fullWidth","","id","InputFirstName","placeholder","First Name",3,"value"],["for","InputOtherNames",1,"label"],["type","text","nbInput","","fullWidth","","id","InputOtherNames",3,"value"],["for","InputEmail1",1,"label"],["type","email","nbInput","","fullWidth","","id","InputEmail1","placeholder","Email",3,"value"],["for","InputIDnoBirthCert",1,"label"],["nbInput","","name","phone",3,"cssClass","preferredCountries","enableAutoCountrySelect","enablePlaceholder","searchCountryFlag","searchCountryField","selectFirstCountry","selectedCountryISO","maxLength","phoneValidation","separateDialCode","numberFormat"],["for","InputDepartment",1,"label"],["fullWidth","","formControlName","doctor_id"],["fullWidth","",3,"value",4,"ngFor","ngForOf"],["for","InputAge",1,"label"],["type","number","nbInput","","fullWidth","","id","InputAge","placeholder","Age","formControlName","age",3,"value"],["type","submit","nbButton","","status","danger",3,"click"],["fullWidth","",3,"value"]],template:function(e,t){1&e&&(b.\u0275\u0275elementStart(0,"div",0),b.\u0275\u0275elementStart(1,"div",1),b.\u0275\u0275elementStart(2,"ngx-user-search-form",2),b.\u0275\u0275listener("newItemEvent",function(e){return t.userFound(e)}),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275template(3,P,2,1,"div",3),b.\u0275\u0275template(4,w,40,23,"div",3)),2&e&&(b.\u0275\u0275advance(3),b.\u0275\u0275property("ngIf",t.showAddUser),b.\u0275\u0275advance(1),b.\u0275\u0275property("ngIf",t.showAddPatient))},directives:[y.u,r.O5,v.T,i.Asz,i.ndF,i.yKW,s.JL,s.sg,i.h8i,m.FV,i.rs,s.JJ,m.mh,s.u,r.sg,s.wV,s.Fj,i.NTf,i.DPz,i.q51],pipes:[r.Ov],styles:[".nb-theme-default   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-dark   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-cosmic   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}.nb-theme-corporate   [_nghost-%COMP%]   nb-card[_ngcontent-%COMP%]{transform:translate(0);height:100%}nb-tabset[_ngcontent-%COMP%]{height:100%;display:flex;flex-direction:column}[_nghost-%COMP%]     ngx-tab1, [_nghost-%COMP%]     ngx-tab2{display:block;padding:1rem 2rem}nb-checkbox[_ngcontent-%COMP%]{margin-bottom:1rem}.form-inline[_ngcontent-%COMP%]   [fullWidth][_ngcontent-%COMP%]{flex:1}.form-inline[_ngcontent-%COMP%] > *[_ngcontent-%COMP%]{margin:0 1.5rem 1.5rem 0}nb-card.inline-form-card[_ngcontent-%COMP%]   nb-card-body[_ngcontent-%COMP%]{padding-bottom:0}"]}),e})()},{path:"documents",component:(()=>{class e{constructor(e){this.service=e,this.settings={add:{addButtonContent:'<i class="nb-plus"></i>',createButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},edit:{editButtonContent:'<i class="nb-edit"></i>',saveButtonContent:'<i class="nb-checkmark"></i>',cancelButtonContent:'<i class="nb-close"></i>'},delete:{deleteButtonContent:'<i class="nb-trash"></i>',confirmDelete:!0},columns:{id:{title:"ID",type:"number"},firstName:{title:"First Name",type:"string"},lastName:{title:"Last Name",type:"string"},username:{title:"Username",type:"string"},email:{title:"E-mail",type:"string"},age:{title:"Age",type:"number"}}},this.source=new o.nC;const t=this.service.getData();this.source.load(t)}onDeleteConfirm(e){window.confirm("Are you sure you want to delete?")?e.confirm.resolve():e.confirm.reject()}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(b.\u0275\u0275directiveInject(g.B))},e.\u0275cmp=b.\u0275\u0275defineComponent({type:e,selectors:[["ngx-patient-documents"]],decls:5,vars:2,consts:[[3,"settings","source","deleteConfirm"]],template:function(e,t){1&e&&(b.\u0275\u0275elementStart(0,"nb-card"),b.\u0275\u0275elementStart(1,"nb-card-header"),b.\u0275\u0275text(2," Patient's Documents "),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementStart(3,"nb-card-body"),b.\u0275\u0275elementStart(4,"ng2-smart-table",0),b.\u0275\u0275listener("deleteConfirm",function(e){return t.onDeleteConfirm(e)}),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd(),b.\u0275\u0275elementEnd()),2&e&&(b.\u0275\u0275advance(4),b.\u0275\u0275property("settings",t.settings)("source",t.source))},directives:[i.Asz,i.ndF,i.yKW,o.T5],styles:[""]}),e})()},{path:"**",component:d.w}]}];let O=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=b.\u0275\u0275defineInjector({imports:[[l.Bz.forChild(_)],l.Bz]}),e})();var x=n(62827),F=n(10758),A=n(65476),N=n(45887),M=n(5559),B=n(40810),D=n(80541),k=n(2678),j=n(1398),T=n(36686);let W=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=b.\u0275\u0275defineNgModule({type:e}),e.\u0275inj=b.\u0275\u0275defineInjector({providers:[x.$,F.N,j.e,k.C],imports:[[r.ez,O,i.EoG,s.u5,i.nKr,i.T2N,i.zyh,i.MfT,i._WB,i.YNG,i.IIj,m.J7,s.UX,a.R,o.ne,T.q,c.Aw.forFeature("patients",A.Sx),N.sQ.forFeature([M.a]),c.Aw.forFeature("doctors",D.qf),N.sQ.forFeature([B.e])]]}),e})()}}]);