!function(){"use strict";function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function t(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var i,r,o=[],a=!0,c=!1;try{for(n=n.call(e);!(a=(i=n.next()).done)&&(o.push(i.value),!t||o.length!==t);a=!0);}catch(s){c=!0,r=s}finally{try{a||null==n.return||n.return()}finally{if(c)throw r}}return o}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return i(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return i(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(self.webpackChunkmyHosy=self.webpackChunkmyHosy||[]).push([[592],{53062:function(e,t,n){n.d(t,{aT:function(){return o},DS:function(){return a},oi:function(){return c},IN:function(){return s}});var i,o=((i=o||(o={})).MedicineCategoryRequested="[View MedicineCategory Page] MedicineCategory Requested",i.MedicineCategoryLoaded="[MedicineCategories API] MedicineCategory Loaded",i.AllMedicineCategoriesRequested="[MedicineCategories Home Page] All MedicineCategories Requested",i.AllMedicineCategoriesLoaded="[MedicineCategories API] All MedicineCategories Loaded",i.MedicineCategorySaved="[Edit MedicineCategory Dialog] MedicineCategory Saved",o),a=function e(t){r(this,e),this.payload=t,this.type=o.MedicineCategoryRequested},c=function e(t){r(this,e),this.payload=t,this.type=o.MedicineCategoryLoaded},s=function e(t){r(this,e),this.payload=t,this.type=o.AllMedicineCategoriesLoaded}},64420:function(e,t,n){n.d(t,{NM:function(){return o},$r:function(){return a},kd:function(){return c},I8:function(){return s},xe:function(){return u}});var i,o=((i=o||(o={})).MedicineRequested="[View Medicine Page] Medicine Requested",i.MedicineLoaded="[Medicines API] Medicine Loaded",i.AllMedicinesRequested="[Medicines Home Page] All Medicines Requested",i.AllMedicinesLoaded="[Medicines API] All Medicines Loaded",i.MedicineSaved="[Edit Medicine Dialog] Medicine Saved",o),a=function e(t){r(this,e),this.payload=t,this.type=o.MedicineRequested},c=function e(t){r(this,e),this.payload=t,this.type=o.MedicineLoaded},s=function e(){r(this,e),this.type=o.AllMedicinesRequested},u=function e(t){r(this,e),this.payload=t,this.type=o.AllMedicinesLoaded}},46655:function(e,t,n){n.d(t,{Lg:function(){return o},$l:function(){return a},Cl:function(){return c},yi:function(){return s},CX:function(){return u}});var i,o=((i=o||(o={})).PatientRequested="[View Patient Page] Patient Requested",i.PatientLoaded="[Patients API] Patient Loaded",i.AllPatientsRequested="[Patients Home Page] All Patients Requested",i.AllPatientsLoaded="[Patients API] All Patients Loaded",i.PatientSaved="[Edit Patient Dialog] Patient Saved",o),a=function e(t){r(this,e),this.payload=t,this.type=o.PatientRequested},c=function e(t){r(this,e),this.payload=t,this.type=o.PatientLoaded},s=function e(){r(this,e),this.type=o.AllPatientsRequested},u=function e(t){r(this,e),this.payload=t,this.type=o.AllPatientsLoaded}},15044:function(e,t,n){n.d(t,{oM:function(){return o},s6:function(){return a},p4:function(){return c},BL:function(){return s},fI:function(){return u}});var i,o=((i=o||(o={})).PrescriptionRequested="[View Prescription Page] Prescription Requested",i.PrescriptionLoaded="[Prescriptions API] Prescription Loaded",i.AllPrescriptionsRequested="[Prescriptions Home Page] All Prescriptions Requested",i.AllPrescriptionsLoaded="[Prescriptions API] All Prescriptions Loaded",i.PrescriptionSaved="[Edit Prescription Dialog] Prescription Saved",o),a=function e(t){r(this,e),this.payload=t,this.type=o.PrescriptionRequested},c=function e(t){r(this,e),this.payload=t,this.type=o.PrescriptionLoaded},s=function e(){r(this,e),this.type=o.AllPrescriptionsRequested},u=function e(t){r(this,e),this.payload=t,this.type=o.AllPrescriptionsLoaded}},98604:function(e,t,i){i.d(t,{r:function(){return g}});var o=i(64762),a=i(45887),c=i(53062),s=i(19773),u=i(88002),d=i(57057),f=i(45435),l=i(23065),p=i(77635),h=i(37716),y=i(61151),g=function e(t,i,o){var h=this;r(this,e),this.actions$=t,this.medicineCategoriesService=i,this.store=o,this.loadMedicineCategory$=this.actions$.pipe((0,a.l4)(c.aT.MedicineCategoryRequested),(0,s.zg)(function(e){return h.medicineCategoriesService.findMedicineCategoryById(e.payload.medicineCategoryId)}),(0,u.U)(function(e){return new c.oi({medicineCategory:e})})),this.loadAllMedicineCategories$=this.actions$.pipe((0,a.l4)(c.aT.AllMedicineCategoriesRequested),(0,d.M)(this.store.pipe((0,l.Ys)(p.$y))),(0,f.h)(function(e){return!n(e,2)[1]}),(0,s.zg)(function(){return h.medicineCategoriesService.findAllMedicineCategories()}),(0,u.U)(function(e){return new c.IN({medicineCategories:e})}))};g.\u0275fac=function(e){return new(e||g)(h.\u0275\u0275inject(a.eX),h.\u0275\u0275inject(y.G),h.\u0275\u0275inject(l.yh))},g.\u0275prov=h.\u0275\u0275defineInjectable({token:g,factory:g.\u0275fac}),(0,o.gn)([(0,a.Qm)()],g.prototype,"loadMedicineCategory$",void 0),(0,o.gn)([(0,a.Qm)()],g.prototype,"loadAllMedicineCategories$",void 0)},18393:function(e,t,i){i.d(t,{o:function(){return g}});var o=i(64762),a=i(45887),c=i(64420),s=i(19773),u=i(88002),d=i(57057),f=i(45435),l=i(23065),p=i(54375),h=i(37716),y=i(75943),g=function e(t,i,o){var h=this;r(this,e),this.actions$=t,this.medicinesService=i,this.store=o,this.loadMedicine$=this.actions$.pipe((0,a.l4)(c.NM.MedicineRequested),(0,s.zg)(function(e){return h.medicinesService.findMedicineById(e.payload.medicineId)}),(0,u.U)(function(e){return new c.kd({medicine:e})})),this.loadAllMedicines$=this.actions$.pipe((0,a.l4)(c.NM.AllMedicinesRequested),(0,d.M)(this.store.pipe((0,l.Ys)(p.uX))),(0,f.h)(function(e){return!n(e,2)[1]}),(0,s.zg)(function(){return h.medicinesService.findAllMedicines()}),(0,u.U)(function(e){return new c.xe({medicines:e})}))};g.\u0275fac=function(e){return new(e||g)(h.\u0275\u0275inject(a.eX),h.\u0275\u0275inject(y.A),h.\u0275\u0275inject(l.yh))},g.\u0275prov=h.\u0275\u0275defineInjectable({token:g,factory:g.\u0275fac}),(0,o.gn)([(0,a.Qm)()],g.prototype,"loadMedicine$",void 0),(0,o.gn)([(0,a.Qm)()],g.prototype,"loadAllMedicines$",void 0)},5559:function(e,t,i){i.d(t,{a:function(){return g}});var o=i(64762),a=i(45887),c=i(46655),s=i(19773),u=i(88002),d=i(57057),f=i(45435),l=i(23065),p=i(4242),h=i(37716),y=i(62827),g=function e(t,i,o){var h=this;r(this,e),this.actions$=t,this.patientsService=i,this.store=o,this.loadPatient$=this.actions$.pipe((0,a.l4)(c.Lg.PatientRequested),(0,s.zg)(function(e){return h.patientsService.findPatientById(e.payload.patientId)}),(0,u.U)(function(e){return new c.Cl({patient:e})})),this.loadAllPatients$=this.actions$.pipe((0,a.l4)(c.Lg.AllPatientsRequested),(0,d.M)(this.store.pipe((0,l.Ys)(p.AU))),(0,f.h)(function(e){return!n(e,2)[1]}),(0,s.zg)(function(){return h.patientsService.findAllPatients()}),(0,u.U)(function(e){return new c.CX({patients:e})}))};g.\u0275fac=function(e){return new(e||g)(h.\u0275\u0275inject(a.eX),h.\u0275\u0275inject(y.$),h.\u0275\u0275inject(l.yh))},g.\u0275prov=h.\u0275\u0275defineInjectable({token:g,factory:g.\u0275fac}),(0,o.gn)([(0,a.Qm)()],g.prototype,"loadPatient$",void 0),(0,o.gn)([(0,a.Qm)()],g.prototype,"loadAllPatients$",void 0)},67763:function(e,t,n){n.d(t,{$N:function(){return c},td:function(){return s}});var i=n(80273),r=n(53062),o=(0,i.H)(),a=o.getInitialState({allMedicineCategoriesLoaded:!1});function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.aT.MedicineCategoryLoaded:return o.addOne(t.payload.medicineCategory,e);case r.aT.AllMedicineCategoriesLoaded:return o.setAll(t.payload.medicineCategories,Object.assign(Object.assign({},e),{allMedicineCategoriesLoaded:!0}));case r.aT.MedicineCategorySaved:return o.updateOne(t.payload.medicineCategory,e);default:return e}}var s=o.getSelectors().selectAll},8912:function(e,t,n){n.d(t,{zB:function(){return c},td:function(){return s}});var i=n(80273),r=n(64420),o=(0,i.H)(),a=o.getInitialState({allMedicinesLoaded:!1});function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.NM.MedicineLoaded:return o.addOne(t.payload.medicine,e);case r.NM.AllMedicinesLoaded:return o.setAll(t.payload.medicines,Object.assign(Object.assign({},e),{allMedicinesLoaded:!0}));case r.NM.MedicineSaved:return o.updateOne(t.payload.medicine,e);default:return e}}var s=o.getSelectors().selectAll},65476:function(e,t,n){n.d(t,{Sx:function(){return c},td:function(){return s}});var i=n(80273),r=n(46655),o=(0,i.H)(),a=o.getInitialState({allPatientsLoaded:!1});function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.Lg.PatientLoaded:return o.addOne(t.payload.patient,e);case r.Lg.AllPatientsLoaded:return o.setAll(t.payload.patients,Object.assign(Object.assign({},e),{allPatientsLoaded:!0}));case r.Lg.PatientSaved:return o.updateOne(t.payload.patient,e);default:return e}}var s=o.getSelectors().selectAll},4037:function(e,t,n){n.d(t,{TN:function(){return c},td:function(){return s}});var i=n(80273),r=n(15044),o=(0,i.H)(),a=o.getInitialState({allPrescriptionsLoaded:!1});function c(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:a,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case r.oM.PrescriptionLoaded:return o.addOne(t.payload.prescription,e);case r.oM.AllPrescriptionsLoaded:return o.setAll(t.payload.prescriptions,Object.assign(Object.assign({},e),{allPrescriptionsLoaded:!0}));case r.oM.PrescriptionSaved:return o.updateOne(t.payload.prescription,e);default:return e}}var s=o.getSelectors().selectAll},73394:function(e,n,i){i.d(n,{a:function(){return h}});var o,a=i(23065),c=i(68307),s=i(45435),u=i(28049),d=i(77635),f=i(53062),l=i(37716),p=i(61151),h=((o=function(){function e(t,n){r(this,e),this.medicineCategoryService=t,this.store=n}return t(e,[{key:"resolve",value:function(e,t){var n=this,i=e.params.id;return this.store.pipe((0,a.Ys)((0,d.dN)(i)),(0,c.b)(function(e){e||n.store.dispatch(new f.DS({medicineCategoryId:i}))}),(0,s.h)(function(e){return!!e}),(0,u.P)())}}]),e}()).\u0275fac=function(e){return new(e||o)(l.\u0275\u0275inject(p.G),l.\u0275\u0275inject(a.yh))},o.\u0275prov=l.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o)},34978:function(e,n,i){i.d(n,{k:function(){return h}});var o,a=i(23065),c=i(68307),s=i(45435),u=i(28049),d=i(54375),f=i(64420),l=i(37716),p=i(75943),h=((o=function(){function e(t,n){r(this,e),this.medicineService=t,this.store=n}return t(e,[{key:"resolve",value:function(e,t){var n=this,i=e.params.id;return this.store.pipe((0,a.Ys)((0,d.Md)(i)),(0,c.b)(function(e){e||n.store.dispatch(new f.$r({medicineId:i}))}),(0,s.h)(function(e){return!!e}),(0,u.P)())}}]),e}()).\u0275fac=function(e){return new(e||o)(l.\u0275\u0275inject(p.A),l.\u0275\u0275inject(a.yh))},o.\u0275prov=l.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o)},10758:function(e,n,i){i.d(n,{N:function(){return p}});var o,a=i(23065),c=i(68307),s=i(45435),u=i(28049),d=i(4242),f=i(46655),l=i(37716),p=((o=function(){function e(t){r(this,e),this.store=t}return t(e,[{key:"resolve",value:function(e,t){var n=this,i=e.params.id;return this.store.pipe((0,a.Ys)((0,d.XX)(i)),(0,c.b)(function(e){e||n.store.dispatch(new f.$l({patientId:i}))}),(0,s.h)(function(e){return!!e}),(0,u.P)())}}]),e}()).\u0275fac=function(e){return new(e||o)(l.\u0275\u0275inject(a.yh))},o.\u0275prov=l.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o)},77635:function(e,t,n){n.d(t,{dN:function(){return a},Ml:function(){return c},$y:function(){return s}});var i=n(23065),r=n(67763),o=(0,i.ZF)("medicineCategories"),a=function(e){return(0,i.P1)(o,function(t){return t.entities[e]})},c=(0,i.P1)(o,r.td),s=(0,i.P1)(o,function(e){return e.allMedicineCategoriesLoaded})},54375:function(e,t,n){n.d(t,{Md:function(){return a},B8:function(){return c},uX:function(){return s}});var i=n(23065),r=n(8912),o=(0,i.ZF)("medicines"),a=function(e){return(0,i.P1)(o,function(t){return t.entities[e]})},c=(0,i.P1)(o,r.td),s=(0,i.P1)(o,function(e){return e.allMedicinesLoaded})},4242:function(e,t,n){n.d(t,{XX:function(){return a},QD:function(){return c},AU:function(){return s}});var i=n(23065),r=n(65476),o=(0,i.ZF)("patients"),a=function(e){return(0,i.P1)(o,function(t){return t.entities[e]})},c=(0,i.P1)(o,r.td),s=(0,i.P1)(o,function(e){return e.allPatientsLoaded})},98083:function(e,t,n){n.d(t,{ck:function(){return a},gN:function(){return c},zL:function(){return s}});var i=n(23065),r=n(4037),o=(0,i.ZF)("prescriptions"),a=function(e){return(0,i.P1)(o,function(t){return t.entities[e]})},c=(0,i.P1)(o,r.td),s=(0,i.P1)(o,function(e){return e.allPrescriptionsLoaded})},61151:function(e,n,i){i.d(n,{G:function(){return l}});var o,a=i(88002),c=i(37716),s=i(91841),u=i(486),d=function e(t,n,i){r(this,e),this.id=t,this.category=n,this.description=i},f=((o=function(){function e(){r(this,e)}return t(e,[{key:"adapt",value:function(e){return new d(e.id,e.category,e.description)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275prov=c.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o),l=function(){var e=function(){function e(t,n,i){r(this,e),this.http=t,this.jarwis=n,this.adapter=i}return t(e,[{key:"findMedicineCategoryById",value:function(e){return this.http.get(this.jarwis.apiUrl+"/medicineCategories/".concat(e))}},{key:"findAllMedicineCategories",value:function(){var e=this;return this.jarwis.getURI("medicine-category").pipe((0,a.U)(function(t){return t.data.map(function(t){return e.adapter.adapt(t)})}))}},{key:"saveMedicineCategory",value:function(e,t){return this.http.put("/api/medicineCategories/"+e,t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(s.eN),c.\u0275\u0275inject(u.R),c.\u0275\u0275inject(f))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e}()},75943:function(e,n,i){i.d(n,{A:function(){return l}});var o,a=i(88002),c=i(37716),s=i(91841),u=i(486),d=function e(t,n,i,o,a,c,s,u,d,f,l,p){r(this,e),this.id=t,this.name=n,this.category=i,this.buying_price=o,this.selling_price=a,this.box=c,this.quantity=s,this.company=u,this.generic=d,this.effects=f,this.expiry_date=l,this.date_added=p},f=((o=function(){function e(){r(this,e)}return t(e,[{key:"adapt",value:function(e){return new d(e.id,e.name,e.med_cat,e.buying_price,e.selling_price,e.box,e.quantity,e.company,e.generic,e.effects,e.expiry_date,e.date_added)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275prov=c.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o),l=function(){var e=function(){function e(t,n,i){r(this,e),this.http=t,this.jarwis=n,this.adapter=i}return t(e,[{key:"findMedicineById",value:function(e){return this.http.get(this.jarwis.apiUrl+"/medicines/".concat(e))}},{key:"findAllMedicines",value:function(){var e=this;return this.jarwis.getURI("medicine").pipe((0,a.U)(function(t){return t.data.map(function(t){return e.adapter.adapt(t)})}))}},{key:"saveMedicine",value:function(e,t){return this.http.put("/api/medicines/"+e,t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(s.eN),c.\u0275\u0275inject(u.R),c.\u0275\u0275inject(f))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e}()},62827:function(e,n,i){i.d(n,{$:function(){return l}});var o,a=i(88002),c=i(37716),s=i(91841),u=i(486),d=function e(t,n,i,o,a,c,s,u,d,f,l,p){r(this,e),this.id=t,this.user_id=n,this.name=i,this.phone=o,this.email=a,this.sex=c,this.birth_date=s,this.blood_group=u,this.id_no=d,this.nhif_no=f,this.usr_img=l,this.doctor_id=p},f=((o=function(){function e(){r(this,e)}return t(e,[{key:"adapt",value:function(e){return new d(e.id,e.user_id,e.user.first_name+" "+e.user.other_name,e.user.phone1_code+e.user.phone1_number,e.user.email,e.user.sex,e.user.birth_date,e.user.blood_group,e.user.id_no,e.user.nhif_no,e.user.usr_img,e.doctor_id)}}]),e}()).\u0275fac=function(e){return new(e||o)},o.\u0275prov=c.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac,providedIn:"root"}),o),l=function(){var e=function(){function e(t,n,i){r(this,e),this.http=t,this.jarwis=n,this.adapter=i}return t(e,[{key:"findPatientById",value:function(e){return this.http.get(this.jarwis.apiUrl+"/patients/".concat(e))}},{key:"findAllPatients",value:function(){var e=this;return this.jarwis.getURI("patients").pipe((0,a.U)(function(t){return t.data.map(function(t){return e.adapter.adapt(t)})}))}},{key:"savePatient",value:function(e,t){return this.http.put("/api/patients/"+e,t)}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.\u0275\u0275inject(s.eN),c.\u0275\u0275inject(u.R),c.\u0275\u0275inject(f))},e.\u0275prov=c.\u0275\u0275defineInjectable({token:e,factory:e.\u0275fac}),e}()}}])}();