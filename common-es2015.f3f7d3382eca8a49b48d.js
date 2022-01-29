"use strict";(self.webpackChunkmyHosy=self.webpackChunkmyHosy||[]).push([[592],{53062:function(e,t,i){i.d(t,{aT:function(){return n},DS:function(){return r},oi:function(){return s},IN:function(){return a}});var n=(()=>{return(e=n||(n={})).MedicineCategoryRequested="[View MedicineCategory Page] MedicineCategory Requested",e.MedicineCategoryLoaded="[MedicineCategories API] MedicineCategory Loaded",e.AllMedicineCategoriesRequested="[MedicineCategories Home Page] All MedicineCategories Requested",e.AllMedicineCategoriesLoaded="[MedicineCategories API] All MedicineCategories Loaded",e.MedicineCategorySaved="[Edit MedicineCategory Dialog] MedicineCategory Saved",n;var e})();class r{constructor(e){this.payload=e,this.type=n.MedicineCategoryRequested}}class s{constructor(e){this.payload=e,this.type=n.MedicineCategoryLoaded}}class a{constructor(e){this.payload=e,this.type=n.AllMedicineCategoriesLoaded}}},64420:function(e,t,i){i.d(t,{NM:function(){return n},$r:function(){return r},kd:function(){return s},I8:function(){return a},xe:function(){return c}});var n=(()=>{return(e=n||(n={})).MedicineRequested="[View Medicine Page] Medicine Requested",e.MedicineLoaded="[Medicines API] Medicine Loaded",e.AllMedicinesRequested="[Medicines Home Page] All Medicines Requested",e.AllMedicinesLoaded="[Medicines API] All Medicines Loaded",e.MedicineSaved="[Edit Medicine Dialog] Medicine Saved",n;var e})();class r{constructor(e){this.payload=e,this.type=n.MedicineRequested}}class s{constructor(e){this.payload=e,this.type=n.MedicineLoaded}}class a{constructor(){this.type=n.AllMedicinesRequested}}class c{constructor(e){this.payload=e,this.type=n.AllMedicinesLoaded}}},46655:function(e,t,i){i.d(t,{Lg:function(){return n},$l:function(){return r},Cl:function(){return s},yi:function(){return a},CX:function(){return c}});var n=(()=>{return(e=n||(n={})).PatientRequested="[View Patient Page] Patient Requested",e.PatientLoaded="[Patients API] Patient Loaded",e.AllPatientsRequested="[Patients Home Page] All Patients Requested",e.AllPatientsLoaded="[Patients API] All Patients Loaded",e.PatientSaved="[Edit Patient Dialog] Patient Saved",n;var e})();class r{constructor(e){this.payload=e,this.type=n.PatientRequested}}class s{constructor(e){this.payload=e,this.type=n.PatientLoaded}}class a{constructor(){this.type=n.AllPatientsRequested}}class c{constructor(e){this.payload=e,this.type=n.AllPatientsLoaded}}},15044:function(e,t,i){i.d(t,{oM:function(){return n},s6:function(){return r},p4:function(){return s},BL:function(){return a},fI:function(){return c}});var n=(()=>{return(e=n||(n={})).PrescriptionRequested="[View Prescription Page] Prescription Requested",e.PrescriptionLoaded="[Prescriptions API] Prescription Loaded",e.AllPrescriptionsRequested="[Prescriptions Home Page] All Prescriptions Requested",e.AllPrescriptionsLoaded="[Prescriptions API] All Prescriptions Loaded",e.PrescriptionSaved="[Edit Prescription Dialog] Prescription Saved",n;var e})();class r{constructor(e){this.payload=e,this.type=n.PrescriptionRequested}}class s{constructor(e){this.payload=e,this.type=n.PrescriptionLoaded}}class a{constructor(){this.type=n.AllPrescriptionsRequested}}class c{constructor(e){this.payload=e,this.type=n.AllPrescriptionsLoaded}}},98604:function(e,t,i){i.d(t,{r:function(){return h}});var n=i(64762),r=i(45887),s=i(53062),a=i(19773),c=i(88002),o=i(57057),d=i(45435),u=i(23065),l=i(77635),p=i(37716),f=i(61151);class h{constructor(e,t,i){this.actions$=e,this.medicineCategoriesService=t,this.store=i,this.loadMedicineCategory$=this.actions$.pipe((0,r.l4)(s.aT.MedicineCategoryRequested),(0,a.zg)(e=>this.medicineCategoriesService.findMedicineCategoryById(e.payload.medicineCategoryId)),(0,c.U)(e=>new s.oi({medicineCategory:e}))),this.loadAllMedicineCategories$=this.actions$.pipe((0,r.l4)(s.aT.AllMedicineCategoriesRequested),(0,o.M)(this.store.pipe((0,u.Ys)(l.$y))),(0,d.h)(([,e])=>!e),(0,a.zg)(()=>this.medicineCategoriesService.findAllMedicineCategories()),(0,c.U)(e=>new s.IN({medicineCategories:e})))}}h.\u0275fac=function(e){return new(e||h)(p.\u0275\u0275inject(r.eX),p.\u0275\u0275inject(f.G),p.\u0275\u0275inject(u.yh))},h.\u0275prov=p.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac}),(0,n.gn)([(0,r.Qm)()],h.prototype,"loadMedicineCategory$",void 0),(0,n.gn)([(0,r.Qm)()],h.prototype,"loadAllMedicineCategories$",void 0)},18393:function(e,t,i){i.d(t,{o:function(){return h}});var n=i(64762),r=i(45887),s=i(64420),a=i(19773),c=i(88002),o=i(57057),d=i(45435),u=i(23065),l=i(54375),p=i(37716),f=i(75943);class h{constructor(e,t,i){this.actions$=e,this.medicinesService=t,this.store=i,this.loadMedicine$=this.actions$.pipe((0,r.l4)(s.NM.MedicineRequested),(0,a.zg)(e=>this.medicinesService.findMedicineById(e.payload.medicineId)),(0,c.U)(e=>new s.kd({medicine:e}))),this.loadAllMedicines$=this.actions$.pipe((0,r.l4)(s.NM.AllMedicinesRequested),(0,o.M)(this.store.pipe((0,u.Ys)(l.uX))),(0,d.h)(([,e])=>!e),(0,a.zg)(()=>this.medicinesService.findAllMedicines()),(0,c.U)(e=>new s.xe({medicines:e})))}}h.\u0275fac=function(e){return new(e||h)(p.\u0275\u0275inject(r.eX),p.\u0275\u0275inject(f.A),p.\u0275\u0275inject(u.yh))},h.\u0275prov=p.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac}),(0,n.gn)([(0,r.Qm)()],h.prototype,"loadMedicine$",void 0),(0,n.gn)([(0,r.Qm)()],h.prototype,"loadAllMedicines$",void 0)},5559:function(e,t,i){i.d(t,{a:function(){return h}});var n=i(64762),r=i(45887),s=i(46655),a=i(19773),c=i(88002),o=i(57057),d=i(45435),u=i(23065),l=i(4242),p=i(37716),f=i(62827);class h{constructor(e,t,i){this.actions$=e,this.patientsService=t,this.store=i,this.loadPatient$=this.actions$.pipe((0,r.l4)(s.Lg.PatientRequested),(0,a.zg)(e=>this.patientsService.findPatientById(e.payload.patientId)),(0,c.U)(e=>new s.Cl({patient:e}))),this.loadAllPatients$=this.actions$.pipe((0,r.l4)(s.Lg.AllPatientsRequested),(0,o.M)(this.store.pipe((0,u.Ys)(l.AU))),(0,d.h)(([,e])=>!e),(0,a.zg)(()=>this.patientsService.findAllPatients()),(0,c.U)(e=>new s.CX({patients:e})))}}h.\u0275fac=function(e){return new(e||h)(p.\u0275\u0275inject(r.eX),p.\u0275\u0275inject(f.$),p.\u0275\u0275inject(u.yh))},h.\u0275prov=p.\u0275\u0275defineInjectable({token:h,factory:h.\u0275fac}),(0,n.gn)([(0,r.Qm)()],h.prototype,"loadPatient$",void 0),(0,n.gn)([(0,r.Qm)()],h.prototype,"loadAllPatients$",void 0)},67763:function(e,t,i){i.d(t,{$N:function(){return c},td:function(){return o}});var n=i(80273),r=i(53062);const s=(0,n.H)(),a=s.getInitialState({allMedicineCategoriesLoaded:!1});function c(e=a,t){switch(t.type){case r.aT.MedicineCategoryLoaded:return s.addOne(t.payload.medicineCategory,e);case r.aT.AllMedicineCategoriesLoaded:return s.setAll(t.payload.medicineCategories,Object.assign(Object.assign({},e),{allMedicineCategoriesLoaded:!0}));case r.aT.MedicineCategorySaved:return s.updateOne(t.payload.medicineCategory,e);default:return e}}const{selectAll:o}=s.getSelectors()},8912:function(e,t,i){i.d(t,{zB:function(){return c},td:function(){return o}});var n=i(80273),r=i(64420);const s=(0,n.H)(),a=s.getInitialState({allMedicinesLoaded:!1});function c(e=a,t){switch(t.type){case r.NM.MedicineLoaded:return s.addOne(t.payload.medicine,e);case r.NM.AllMedicinesLoaded:return s.setAll(t.payload.medicines,Object.assign(Object.assign({},e),{allMedicinesLoaded:!0}));case r.NM.MedicineSaved:return s.updateOne(t.payload.medicine,e);default:return e}}const{selectAll:o}=s.getSelectors()},65476:function(e,t,i){i.d(t,{Sx:function(){return c},td:function(){return o}});var n=i(80273),r=i(46655);const s=(0,n.H)(),a=s.getInitialState({allPatientsLoaded:!1});function c(e=a,t){switch(t.type){case r.Lg.PatientLoaded:return s.addOne(t.payload.patient,e);case r.Lg.AllPatientsLoaded:return s.setAll(t.payload.patients,Object.assign(Object.assign({},e),{allPatientsLoaded:!0}));case r.Lg.PatientSaved:return s.updateOne(t.payload.patient,e);default:return e}}const{selectAll:o}=s.getSelectors()},4037:function(e,t,i){i.d(t,{TN:function(){return c},td:function(){return o}});var n=i(80273),r=i(15044);const s=(0,n.H)(),a=s.getInitialState({allPrescriptionsLoaded:!1});function c(e=a,t){switch(t.type){case r.oM.PrescriptionLoaded:return s.addOne(t.payload.prescription,e);case r.oM.AllPrescriptionsLoaded:return s.setAll(t.payload.prescriptions,Object.assign(Object.assign({},e),{allPrescriptionsLoaded:!0}));case r.oM.PrescriptionSaved:return s.updateOne(t.payload.prescription,e);default:return e}}const{selectAll:o}=s.getSelectors()},73394:function(e,t,i){i.d(t,{a:function(){return l}});var n=i(23065),r=i(68307),s=i(45435),a=i(28049),c=i(77635),o=i(53062),d=i(37716),u=i(61151);let l=(()=>{class e{constructor(e,t){this.medicineCategoryService=e,this.store=t}resolve(e,t){const i=e.params.id;return this.store.pipe((0,n.Ys)((0,c.dN)(i)),(0,r.b)(e=>{e||this.store.dispatch(new o.DS({medicineCategoryId:i}))}),(0,s.h)(e=>!!e),(0,a.P)())}}return e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275inject(u.G),d.\u0275\u0275inject(n.yh))},e.\u0275prov=d.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})()},34978:function(e,t,i){i.d(t,{k:function(){return l}});var n=i(23065),r=i(68307),s=i(45435),a=i(28049),c=i(54375),o=i(64420),d=i(37716),u=i(75943);let l=(()=>{class e{constructor(e,t){this.medicineService=e,this.store=t}resolve(e,t){const i=e.params.id;return this.store.pipe((0,n.Ys)((0,c.Md)(i)),(0,r.b)(e=>{e||this.store.dispatch(new o.$r({medicineId:i}))}),(0,s.h)(e=>!!e),(0,a.P)())}}return e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275inject(u.A),d.\u0275\u0275inject(n.yh))},e.\u0275prov=d.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})()},10758:function(e,t,i){i.d(t,{N:function(){return u}});var n=i(23065),r=i(68307),s=i(45435),a=i(28049),c=i(4242),o=i(46655),d=i(37716);let u=(()=>{class e{constructor(e){this.store=e}resolve(e,t){const i=e.params.id;return this.store.pipe((0,n.Ys)((0,c.XX)(i)),(0,r.b)(e=>{e||this.store.dispatch(new o.$l({patientId:i}))}),(0,s.h)(e=>!!e),(0,a.P)())}}return e.\u0275fac=function(t){return new(t||e)(d.\u0275\u0275inject(n.yh))},e.\u0275prov=d.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})()},77635:function(e,t,i){i.d(t,{dN:function(){return a},Ml:function(){return c},$y:function(){return o}});var n=i(23065),r=i(67763);const s=(0,n.ZF)("medicineCategories"),a=e=>(0,n.P1)(s,t=>t.entities[e]),c=(0,n.P1)(s,r.td),o=(0,n.P1)(s,e=>e.allMedicineCategoriesLoaded)},54375:function(e,t,i){i.d(t,{Md:function(){return a},B8:function(){return c},uX:function(){return o}});var n=i(23065),r=i(8912);const s=(0,n.ZF)("medicines"),a=e=>(0,n.P1)(s,t=>t.entities[e]),c=(0,n.P1)(s,r.td),o=(0,n.P1)(s,e=>e.allMedicinesLoaded)},4242:function(e,t,i){i.d(t,{XX:function(){return a},QD:function(){return c},AU:function(){return o}});var n=i(23065),r=i(65476);const s=(0,n.ZF)("patients"),a=e=>(0,n.P1)(s,t=>t.entities[e]),c=(0,n.P1)(s,r.td),o=(0,n.P1)(s,e=>e.allPatientsLoaded)},98083:function(e,t,i){i.d(t,{ck:function(){return a},gN:function(){return c},zL:function(){return o}});var n=i(23065),r=i(4037);const s=(0,n.ZF)("prescriptions"),a=e=>(0,n.P1)(s,t=>t.entities[e]),c=(0,n.P1)(s,r.td),o=(0,n.P1)(s,e=>e.allPrescriptionsLoaded)},61151:function(e,t,i){i.d(t,{G:function(){return d}});var n=i(88002),r=i(37716),s=i(91841),a=i(486);class c{constructor(e,t,i){this.id=e,this.category=t,this.description=i}}let o=(()=>{class e{adapt(e){return new c(e.id,e.category,e.description)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),d=(()=>{class e{constructor(e,t,i){this.http=e,this.jarwis=t,this.adapter=i}findMedicineCategoryById(e){return this.http.get(this.jarwis.apiUrl+`/medicineCategories/${e}`)}findAllMedicineCategories(){return this.jarwis.getURI("medicine-category").pipe((0,n.U)(e=>e.data.map(e=>this.adapter.adapt(e))))}saveMedicineCategory(e,t){return this.http.put("/api/medicineCategories/"+e,t)}}return e.\u0275fac=function(t){return new(t||e)(r.\u0275\u0275inject(s.eN),r.\u0275\u0275inject(a.R),r.\u0275\u0275inject(o))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})()},75943:function(e,t,i){i.d(t,{A:function(){return d}});var n=i(88002),r=i(37716),s=i(91841),a=i(486);class c{constructor(e,t,i,n,r,s,a,c,o,d,u,l){this.id=e,this.name=t,this.category=i,this.buying_price=n,this.selling_price=r,this.box=s,this.quantity=a,this.company=c,this.generic=o,this.effects=d,this.expiry_date=u,this.date_added=l}}let o=(()=>{class e{adapt(e){return new c(e.id,e.name,e.med_cat,e.buying_price,e.selling_price,e.box,e.quantity,e.company,e.generic,e.effects,e.expiry_date,e.date_added)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),d=(()=>{class e{constructor(e,t,i){this.http=e,this.jarwis=t,this.adapter=i}findMedicineById(e){return this.http.get(this.jarwis.apiUrl+`/medicines/${e}`)}findAllMedicines(){return this.jarwis.getURI("medicine").pipe((0,n.U)(e=>e.data.map(e=>this.adapter.adapt(e))))}saveMedicine(e,t){return this.http.put("/api/medicines/"+e,t)}}return e.\u0275fac=function(t){return new(t||e)(r.\u0275\u0275inject(s.eN),r.\u0275\u0275inject(a.R),r.\u0275\u0275inject(o))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})()},62827:function(e,t,i){i.d(t,{$:function(){return d}});var n=i(88002),r=i(37716),s=i(91841),a=i(486);class c{constructor(e,t,i,n,r,s,a,c,o,d,u,l){this.id=e,this.user_id=t,this.name=i,this.phone=n,this.email=r,this.sex=s,this.birth_date=a,this.blood_group=c,this.id_no=o,this.nhif_no=d,this.usr_img=u,this.doctor_id=l}}let o=(()=>{class e{adapt(e){return new c(e.id,e.user_id,e.user.first_name+" "+e.user.other_name,e.user.phone1_code+e.user.phone1_number,e.user.email,e.user.sex,e.user.birth_date,e.user.blood_group,e.user.id_no,e.user.nhif_no,e.user.usr_img,e.doctor_id)}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac,providedIn:"root"}),e})(),d=(()=>{class e{constructor(e,t,i){this.http=e,this.jarwis=t,this.adapter=i}findPatientById(e){return this.http.get(this.jarwis.apiUrl+`/patients/${e}`)}findAllPatients(){return this.jarwis.getURI("patients").pipe((0,n.U)(e=>e.data.map(e=>this.adapter.adapt(e))))}savePatient(e,t){return this.http.put("/api/patients/"+e,t)}}return e.\u0275fac=function(t){return new(t||e)(r.\u0275\u0275inject(s.eN),r.\u0275\u0275inject(a.R),r.\u0275\u0275inject(o))},e.\u0275prov=r.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e})()}}]);