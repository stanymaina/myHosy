(self.webpackChunkngx_admin=self.webpackChunkngx_admin||[]).push([[592],{46655:function(t,e,n){"use strict";n.d(e,{Lg:function(){return i},$l:function(){return s},Cl:function(){return a},yi:function(){return r},CX:function(){return o}});var i=(()=>(function(t){t.PatientRequested="[View Patient Page] Patient Requested",t.PatientLoaded="[Patients API] Patient Loaded",t.AllPatientsRequested="[Patients Home Page] All Patients Requested",t.AllPatientsLoaded="[Patients API] All Patients Loaded",t.PatientSaved="[Edit Patient Dialog] Patient Saved"}(i||(i={})),i))();class s{constructor(t){this.payload=t,this.type=i.PatientRequested}}class a{constructor(t){this.payload=t,this.type=i.PatientLoaded}}class r{constructor(){this.type=i.AllPatientsRequested}}class o{constructor(t){this.payload=t,this.type=i.AllPatientsLoaded}}},5559:function(t,e,n){"use strict";n.d(e,{a:function(){return f}});var i=n(64762),s=n(91601),a=n(46655),r=n(19773),o=n(88002),c=n(57057),u=n(45435),d=n(23065),l=n(4242),p=n(37716),h=n(62827);class f{constructor(t,e,n){this.actions$=t,this.patientsService=e,this.store=n,this.loadPatient$=this.actions$.pipe((0,s.l4)(a.Lg.PatientRequested),(0,r.zg)(t=>this.patientsService.findPatientById(t.payload.patientId)),(0,o.U)(t=>new a.Cl({patient:t}))),this.loadAllPatients$=this.actions$.pipe((0,s.l4)(a.Lg.AllPatientsRequested),(0,c.M)(this.store.pipe((0,d.Ys)(l.AU))),(0,u.h)(([,t])=>!t),(0,r.zg)(()=>this.patientsService.findAllPatients()),(0,o.U)(t=>new a.CX({patients:t})))}}f.\u0275fac=function(t){return new(t||f)(p["\u0275\u0275inject"](s.eX),p["\u0275\u0275inject"](h.$),p["\u0275\u0275inject"](d.yh))},f.\u0275prov=p["\u0275\u0275defineInjectable"]({token:f,factory:f.\u0275fac}),(0,i.gn)([(0,s.Qm)()],f.prototype,"loadPatient$",void 0),(0,i.gn)([(0,s.Qm)()],f.prototype,"loadAllPatients$",void 0)},65476:function(t,e,n){"use strict";n.d(e,{Sx:function(){return o},td:function(){return c}});var i=n(80273),s=n(46655);const a=(0,i.H)(),r=a.getInitialState({allPatientsLoaded:!1});function o(t=r,e){switch(e.type){case s.Lg.PatientLoaded:return a.addOne(e.payload.patient,t);case s.Lg.AllPatientsLoaded:return a.setAll(e.payload.patients,Object.assign(Object.assign({},t),{allPatientsLoaded:!0}));case s.Lg.PatientSaved:return a.updateOne(e.payload.patient,t);default:return t}}const{selectAll:c}=a.getSelectors()},10758:function(t,e,n){"use strict";n.d(e,{N:function(){return d}});var i=n(23065),s=n(93342),a=n(45435),r=n(28049),o=n(4242),c=n(46655),u=n(37716);let d=(()=>{class t{constructor(t){this.store=t}resolve(t,e){const n=t.params.id;return this.store.pipe((0,i.Ys)((0,o.XX)(n)),(0,s.b)(t=>{t||this.store.dispatch(new c.$l({patientId:n}))}),(0,a.h)(t=>!!t),(0,r.P)())}}return t.\u0275fac=function(e){return new(e||t)(u["\u0275\u0275inject"](i.yh))},t.\u0275prov=u["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()},4242:function(t,e,n){"use strict";n.d(e,{XX:function(){return r},QD:function(){return o},AU:function(){return c}});var i=n(23065),s=n(65476);const a=(0,i.ZF)("patients"),r=t=>(0,i.P1)(a,e=>e.entities[t]),o=(0,i.P1)(a,s.td),c=(0,i.P1)(a,t=>t.allPatientsLoaded)},62827:function(t,e,n){"use strict";n.d(e,{$:function(){return u}});var i=n(88002),s=n(37716),a=n(91841),r=n(486);class o{constructor(t,e,n,i,s,a,r,o,c,u,d,l){this.id=t,this.user_id=e,this.name=n,this.phone=i,this.email=s,this.sex=a,this.birth_date=r,this.blood_group=o,this.id_no=c,this.nhif_no=u,this.usr_img=d,this.doctor_id=l}}let c=(()=>{class t{adapt(t){return new o(t.id,t.user_id,t.user.first_name+" "+t.user.other_name,t.user.phone1_code+t.user.phone1_number,t.user.email,t.user.sex,t.user.birth_date,t.user.blood_group,t.user.id_no,t.user.nhif_no,t.user.usr_img,t.doctor_id)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=s["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac,providedIn:"root"}),t})(),u=(()=>{class t{constructor(t,e,n){this.http=t,this.jarwis=e,this.adapter=n}findPatientById(t){return this.http.get(this.jarwis.apiUrl+`/patients/${t}`)}findAllPatients(){return this.jarwis.getURI("patients").pipe((0,i.U)(t=>t.data.map(t=>this.adapter.adapt(t))))}savePatient(t,e){return this.http.put("/api/patients/"+t,e)}}return t.\u0275fac=function(e){return new(e||t)(s["\u0275\u0275inject"](a.eN),s["\u0275\u0275inject"](r.R),s["\u0275\u0275inject"](c))},t.\u0275prov=s["\u0275\u0275defineInjectable"]({token:t,factory:t.\u0275fac}),t})()}}]);