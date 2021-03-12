(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yo\Documents\final semestri\so\taller2\SO2\src\main.ts */"zUnb");


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Myb0":
/*!*****************************************!*\
  !*** ./src/app/models/proceso.nodel.ts ***!
  \*****************************************/
/*! exports provided: proceso */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proceso", function() { return proceso; });
class proceso {
    constructor(ptitulo = '') {
        this.titulo = ptitulo;
        this.tllegada = 0;
        this.tduracion = 0;
        this.tentroP = 0;
        this.tterminaP = 0;
        this.entrop = true;
        this.finp = false;
        this.tejecucion = 0;
    }
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _models_proceso_nodel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/proceso.nodel */ "Myb0");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "XFqa");
/* harmony import */ var _components_creador_creador_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/creador/creador.component */ "aufn");
/* harmony import */ var _components_runprocess_runprocess_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/runprocess/runprocess.component */ "eyfG");
/* harmony import */ var _components_colaprocess_colaprocess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/colaprocess/colaprocess.component */ "v1Dr");







function AppComponent_app_inicio_1_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-inicio", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("quantumE", function AppComponent_app_inicio_1_Template_app_inicio_quantumE_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r6.onQuantum($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_button_3_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_button_3_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r8.onClick(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Iniciar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_app_creador_5_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "app-creador", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("procesocreado", function AppComponent_app_creador_5_Template_app_creador_procesocreado_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r10.onProcesoCreado($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function AppComponent_div_6_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pros_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pros_r13.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Tiempo de llegada: ", pros_r13.tllegada, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"]("Duracion del proceso ", pros_r13.tejecucion, "");
} }
function AppComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_div_6_div_1_Template, 7, 3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r3.arrprocesos);
} }
function AppComponent_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "app-runprocess", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "app-colaprocess", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("tiempoeje", ctx_r4.time)("runtitulo", ctx_r4.tituloejecucion)("trestan", ctx_r4.tiemporestante);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("arrcola", ctx_r4.arrProCol);
} }
function AppComponent_div_8_tr_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pres_r15 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](pres_r15.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pres_r15.tentroP, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pres_r15.tterminaP, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pres_r15.tterminaP - pres_r15.tllegada, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pres_r15.tejecucion, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", pres_r15.tterminaP - pres_r15.tllegada - pres_r15.tejecucion, "");
} }
function AppComponent_div_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "table", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, "Nombre Proceso");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, "Tiempo de entrada");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, "Tiempo terminacion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Tiempo total Cola");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, "Tiempo de ejecucion");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "th");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, "Tiempo de espera");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](15, AppComponent_div_8_tr_15_Template, 14, 6, "tr", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r5.arrprocesos);
} }
class AppComponent {
    constructor() {
        this.title = 'SO2';
        this.arrprocesos = [];
        this.tquantum = 0;
        this.minicio = true;
        this.creacion = false;
        this.ejecucion = false;
        this.time = 0;
        this.timeq = 0;
        this.arrProCol = [];
        this.procesando = false;
        this.pos = 0;
        this.tiemporestante = 0;
        this.tituloejecucion = "";
        this.auxpro = false;
        this.fin = false;
    }
    onProcesoCreado($event) {
        this.arrprocesos.push($event);
        console.log(this.arrprocesos);
    }
    onQuantum($event) {
        console.log($event);
        this.tquantum = $event;
        this.minicio = false;
        this.creacion = true;
        console.log(this.tquantum);
    }
    onClick() {
        this.creacion = false;
        this.ejecucion = true;
        this.run();
    }
    run() {
        let interval = setInterval(() => {
            //console.log(this.arrprocesos);
            if (this.arrprocesos[this.pos]) {
                if (this.time === this.arrprocesos[this.pos].tllegada) {
                    // console.log(this.time, this.pos);
                    this.arrprocesos[this.pos].tduracion = this.arrprocesos[this.pos].tejecucion;
                    this.arrProCol.push(this.arrprocesos[this.pos]);
                    console.log("llego el proceso" + this.arrprocesos[this.pos].titulo);
                    this.pos += 1;
                    console.log(this.procesando);
                }
            }
            if (this.auxpro) {
                this.arrProCol.push(this.procaux);
                this.auxpro = false;
            }
            console.log(this.time);
            if (this.procesando) {
                // this.time +=100;
                this.timeq += 100;
                this.prorun.tduracion -= 100;
                this.tiemporestante = this.prorun.tduracion;
                console.log(this.prorun.tduracion);
                console.log(this.timeq);
                if (this.tiemporestante > 0) {
                    if (this.timeq === this.tquantum) {
                        this.procaux = this.prorun;
                        this.auxpro = true;
                        this.procesando = false;
                        this.timeq = 0;
                        // this.time -= 100;
                        this.tituloejecucion = "";
                        this.tiemporestante = 0;
                        this.prorun = new _models_proceso_nodel__WEBPACK_IMPORTED_MODULE_0__["proceso"]();
                    }
                }
                else {
                    this.arrprocesos[this.arrprocesos.findIndex(proceso => proceso.titulo === this.tituloejecucion)].tterminaP = this.time + 100;
                    this.arrprocesos[this.arrprocesos.findIndex(proceso => proceso.titulo === this.tituloejecucion)].finp = true;
                    this.prorun = new _models_proceso_nodel__WEBPACK_IMPORTED_MODULE_0__["proceso"]();
                    this.timeq = 0;
                    this.procesando = false;
                }
            }
            else {
                console.log(this.procesando);
                this.tiemporestante = 0;
                this.tituloejecucion = "";
                if (this.arrProCol[0]) {
                    this.prorun = this.arrProCol[0];
                    this.arrProCol.shift();
                    this.tituloejecucion = this.prorun.titulo;
                    this.tiemporestante = this.prorun.tduracion;
                    console.log("busqueda: " + this.arrprocesos[this.arrprocesos.findIndex(proceso => proceso.titulo === this.tituloejecucion)].titulo);
                    if (this.arrprocesos[this.arrprocesos.findIndex(proceso => proceso.titulo === this.tituloejecucion)].entrop) {
                        this.arrprocesos[this.arrprocesos.findIndex(proceso => proceso.titulo === this.tituloejecucion)].entrop = false;
                        this.arrprocesos[this.arrprocesos.findIndex(proceso => proceso.titulo === this.tituloejecucion)].tentroP = this.time;
                    }
                    console.log("asignacion prorun" + this.prorun.titulo + this.prorun.tejecucion);
                    this.procesando = true;
                    this.time -= 100;
                }
            }
            this.time += 100;
            this.valfin();
            if (this.fin) {
                clearInterval(interval);
            }
        }, 1000);
    }
    valfin() {
        let numfin = 0;
        for (let index = 0; index < this.arrprocesos.length; index++) {
            if (this.arrprocesos[index].finp) {
                numfin += 1;
            }
        }
        if (numfin === this.arrprocesos.length) {
            this.fin = true;
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 6, consts: [[1, "aplicacion"], [3, "quantumE", 4, "ngIf"], [1, "iniciar"], [3, "click", 4, "ngIf"], [1, "tablaprocesos"], [3, "procesocreado", 4, "ngIf"], ["class", "procesos", 4, "ngIf"], ["class", "ejecucion", 4, "ngIf"], ["class", "resultado", 4, "ngIf"], [3, "quantumE"], [3, "click"], [3, "procesocreado"], [1, "procesos"], ["class", "proceso", 4, "ngFor", "ngForOf"], [1, "proceso"], [1, "ejecucion"], [1, "run"], [3, "tiempoeje", "runtitulo", "trestan"], [1, "cola"], [3, "arrcola"], [1, "resultado"], [1, "tabla"], [4, "ngFor", "ngForOf"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, AppComponent_app_inicio_1_Template, 1, 0, "app-inicio", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, AppComponent_button_3_Template, 2, 0, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, AppComponent_app_creador_5_Template, 1, 0, "app-creador", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, AppComponent_div_6_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, AppComponent_div_7_Template, 5, 4, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, AppComponent_div_8_Template, 16, 1, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.minicio);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.creacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.creacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.creacion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ejecucion);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.ejecucion);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"], _components_creador_creador_component__WEBPACK_IMPORTED_MODULE_4__["CreadorComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _components_runprocess_runprocess_component__WEBPACK_IMPORTED_MODULE_5__["RunprocessComponent"], _components_colaprocess_colaprocess_component__WEBPACK_IMPORTED_MODULE_6__["ColaprocessComponent"]], styles: [".procesos[_ngcontent-%COMP%]{\r\n    width: 70%;\r\n    padding: 5px;\r\n    background: rgb(15, 15, 15);\r\n    \r\n}\r\n.tablaprocesos[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 5px;\r\n    flex-direction: row;\r\n    justify-content: center;\r\n    \r\n    \r\n}\r\n.proceso[_ngcontent-%COMP%]{\r\n    border: 1px solid rgb(241, 176, 11);\r\n    width: 180px;\r\n    height: 50px;\r\n    display: inline-table;\r\n    margin: 5px;\r\n    padding: 5px;\r\n    background: black;\r\n    color: cornsilk;\r\n}\r\n.iniciar[_ngcontent-%COMP%]{\r\n    padding: 5px;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 30px;\r\n    background-color: rgb(241, 176, 11);\r\n    font-style: oblique;\r\n    font-size: 24px;\r\n}\r\ntable[_ngcontent-%COMP%]{\r\n    border: 1px solid rgb(241, 176, 11);\r\n    background: black;\r\n    width: 90%;\r\n    text-align: center;\r\n    color: cornsilk;\r\n    font-style: oblique;\r\n    align-content: center;\r\n    margin-left: 5%;\r\n    \r\n}\r\ntd[_ngcontent-%COMP%]{\r\n    border: 1px solid rgb(241, 176, 11);\r\n}\r\n.ejecucion[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    \r\n    flex-direction: row;\r\n    justify-content: center;\r\n    margin: 5px;\r\n    \r\n}\r\n.run[_ngcontent-%COMP%]{\r\n    width: 30%;\r\n}\r\n.cola[_ngcontent-%COMP%]{\r\n    margin-left: 20px;\r\n    width: 60%;\r\n}\r\n.aplicacion[_ngcontent-%COMP%]{\r\n    background: dimgray;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFlBQVk7SUFDWiwyQkFBMkI7O0FBRS9CO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsdUJBQXVCOzs7QUFHM0I7QUFDQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osWUFBWTtJQUNaLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLG1DQUFtQztJQUNuQyxtQkFBbUI7SUFDbkIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIscUJBQXFCO0lBQ3JCLGVBQWU7O0FBRW5CO0FBQ0E7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlOztJQUVmLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsV0FBVzs7QUFFZjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBQ0E7SUFDSSxpQkFBaUI7SUFDakIsVUFBVTtBQUNkO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkIiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvY2Vzb3N7XHJcbiAgICB3aWR0aDogNzAlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDE1LCAxNSwgMTUpO1xyXG4gICAgXHJcbn1cclxuLnRhYmxhcHJvY2Vzb3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgXHJcbiAgICBcclxufVxyXG4ucHJvY2Vzb3tcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDEsIDE3NiwgMTEpO1xyXG4gICAgd2lkdGg6IDE4MHB4O1xyXG4gICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgZGlzcGxheTogaW5saW5lLXRhYmxlO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiBjb3Juc2lsaztcclxufVxyXG4uaW5pY2lhcntcclxuICAgIHBhZGRpbmc6IDVweDtcclxufVxyXG5idXR0b257XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE3NiwgMTEpO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIGZvbnQtc2l6ZTogMjRweDtcclxufVxyXG50YWJsZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDEsIDE3NiwgMTEpO1xyXG4gICAgYmFja2dyb3VuZDogYmxhY2s7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxuICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIFxyXG59XHJcbnRke1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MSwgMTc2LCAxMSk7XHJcbn1cclxuLmVqZWN1Y2lvbntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNXB4O1xyXG4gICAgXHJcbn1cclxuLnJ1bntcclxuICAgIHdpZHRoOiAzMCU7XHJcbn1cclxuLmNvbGF7XHJcbiAgICBtYXJnaW4tbGVmdDogMjBweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbn1cclxuLmFwbGljYWNpb257XHJcbiAgICBiYWNrZ3JvdW5kOiBkaW1ncmF5O1xyXG59XHJcbiJdfQ== */"] });


/***/ }),

/***/ "XFqa":
/*!*******************************************************!*\
  !*** ./src/app/components/inicio/inicio.component.ts ***!
  \*******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");



class InicioComponent {
    constructor() {
        this.quantum = 200;
        this.quantumE = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        this.quantumE.emit(this.quantum);
    }
}
InicioComponent.ɵfac = function InicioComponent_Factory(t) { return new (t || InicioComponent)(); };
InicioComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: InicioComponent, selectors: [["app-inicio"]], outputs: { quantumE: "quantumE" }, decls: 10, vars: 1, consts: [[1, "inicio"], [1, "ini"], [1, "inibody"], ["type", "number", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function InicioComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Digite el valor del quantum");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function InicioComponent_Template_input_ngModelChange_6_listener($event) { return ctx.quantum = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function InicioComponent_Template_button_click_8_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Enviar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.quantum);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NumberValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]], styles: [".inicio[_ngcontent-%COMP%]{\r\n    background-color:black;\r\n    border: 1px solid rgb(241, 176, 11);\r\n    width: 200px;\r\n    height: 170px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    color: cornsilk;\r\n    opacity: 95%;\r\n}\r\n.ini[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    padding: 5px;\r\n    text-align: center;\r\n    justify-content: center;\r\n    font-style: oblique;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n    height: 30px;\r\n    margin-top: 5px;\r\n    background-color: rgb(241, 176, 11);\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksc0JBQXNCO0lBQ3RCLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixlQUFlO0lBQ2YsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQix1QkFBdUI7SUFDdkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osWUFBWTtJQUNaLGVBQWU7SUFDZixtQ0FBbUM7QUFDdkMiLCJmaWxlIjoiaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5pY2lve1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpibGFjaztcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDEsIDE3NiwgMTEpO1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAxNzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgb3BhY2l0eTogOTUlO1xyXG59XHJcbi5pbml7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE3NiwgMTEpO1xyXG59XHJcblxyXG4iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/inicio/inicio.component */ "XFqa");
/* harmony import */ var _components_creador_creador_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/creador/creador.component */ "aufn");
/* harmony import */ var _components_runprocess_runprocess_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/runprocess/runprocess.component */ "eyfG");
/* harmony import */ var _components_colaprocess_colaprocess_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/colaprocess/colaprocess.component */ "v1Dr");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ "fXoL");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_3__["InicioComponent"],
        _components_creador_creador_component__WEBPACK_IMPORTED_MODULE_4__["CreadorComponent"],
        _components_runprocess_runprocess_component__WEBPACK_IMPORTED_MODULE_5__["RunprocessComponent"],
        _components_colaprocess_colaprocess_component__WEBPACK_IMPORTED_MODULE_6__["ColaprocessComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormsModule"]] }); })();


/***/ }),

/***/ "aufn":
/*!*********************************************************!*\
  !*** ./src/app/components/creador/creador.component.ts ***!
  \*********************************************************/
/*! exports provided: CreadorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreadorComponent", function() { return CreadorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_models_proceso_nodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/proceso.nodel */ "Myb0");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "3Pt+");




class CreadorComponent {
    constructor() {
        this.nuevoProceso = new src_app_models_proceso_nodel__WEBPACK_IMPORTED_MODULE_1__["proceso"]();
        this.procesocreado = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onClick() {
        this.procesocreado.emit(this.nuevoProceso);
        this.nuevoProceso = new src_app_models_proceso_nodel__WEBPACK_IMPORTED_MODULE_1__["proceso"]();
    }
}
CreadorComponent.ɵfac = function CreadorComponent_Factory(t) { return new (t || CreadorComponent)(); };
CreadorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreadorComponent, selectors: [["app-creador"]], outputs: { procesocreado: "procesocreado" }, decls: 17, vars: 3, consts: [[1, "processC"], ["type", "text", "required", "", 3, "ngModel", "ngModelChange"], ["type", "number", 3, "ngModel", "ngModelChange"], ["type", "number", "required", "", 3, "ngModel", "ngModelChange"], [3, "click"]], template: function CreadorComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Creacion de procesos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Nombre del proceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreadorComponent_Template_input_ngModelChange_6_listener($event) { return ctx.nuevoProceso.titulo = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Tiempo de llegada");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreadorComponent_Template_input_ngModelChange_10_listener($event) { return ctx.nuevoProceso.tllegada = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Duracion del proceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreadorComponent_Template_input_ngModelChange_14_listener($event) { return ctx.nuevoProceso.tejecucion = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreadorComponent_Template_button_click_15_listener() { return ctx.onClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Crear Proceso");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoProceso.titulo);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoProceso.tllegada);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.nuevoProceso.tejecucion);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NumberValueAccessor"]], styles: [".processC[_ngcontent-%COMP%]{\r\n    border: 1px solid rgb(241, 176, 11);\r\n    width: 250px;\r\n    height: 250px;\r\n    padding: 5px;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    text-align: center;\r\n    justify-content: center;\r\n   background-color:black;\r\n   opacity: 95%;\r\n    font-style: oblique;\r\n}\r\nbutton[_ngcontent-%COMP%]{\r\n    width: 180px;\r\n    padding: 5px;\r\n    background-color: rgb(241, 176, 11);\r\n   \r\n    font-style: oblique;\r\n}\r\nh3[_ngcontent-%COMP%]{\r\n    color: cornsilk;\r\n    font-style: oblique;\r\n}\r\nlabel[_ngcontent-%COMP%]{\r\n    color: cornsilk;\r\n    font-style: oblique;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNyZWFkb3IuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osYUFBYTtJQUNiLFlBQVk7SUFDWixhQUFhO0lBQ2IsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7R0FDeEIsc0JBQXNCO0dBQ3RCLFlBQVk7SUFDWCxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLFlBQVk7SUFDWixZQUFZO0lBQ1osbUNBQW1DOztJQUVuQyxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixtQkFBbUI7QUFDdkIiLCJmaWxlIjoiY3JlYWRvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2Nlc3NDe1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MSwgMTc2LCAxMSk7XHJcbiAgICB3aWR0aDogMjUwcHg7XHJcbiAgICBoZWlnaHQ6IDI1MHB4O1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOmJsYWNrO1xyXG4gICBvcGFjaXR5OiA5NSU7XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbmJ1dHRvbntcclxuICAgIHdpZHRoOiAxODBweDtcclxuICAgIHBhZGRpbmc6IDVweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDEsIDE3NiwgMTEpO1xyXG4gICBcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbn1cclxuaDN7XHJcbiAgICBjb2xvcjogY29ybnNpbGs7XHJcbiAgICBmb250LXN0eWxlOiBvYmxpcXVlO1xyXG59XHJcbmxhYmVse1xyXG4gICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "eyfG":
/*!***************************************************************!*\
  !*** ./src/app/components/runprocess/runprocess.component.ts ***!
  \***************************************************************/
/*! exports provided: RunprocessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RunprocessComponent", function() { return RunprocessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function RunprocessComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.runtitulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tiempo restante ", ctx_r0.trestan, "");
} }
class RunprocessComponent {
    constructor() {
    }
    ngOnInit() {
    }
}
RunprocessComponent.ɵfac = function RunprocessComponent_Factory(t) { return new (t || RunprocessComponent)(); };
RunprocessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RunprocessComponent, selectors: [["app-runprocess"]], inputs: { proceso: "proceso", tiempoeje: "tiempoeje", runtitulo: "runtitulo", trestan: "trestan" }, decls: 7, vars: 2, consts: [[1, "run"], ["class", "proceso", 4, "ngIf"], [1, "proceso"]], template: function RunprocessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Procesando");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, RunprocessComponent_div_6_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Tiempo en ejecucion ", ctx.tiempoeje, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.trestan > 0);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]], styles: [".run[_ngcontent-%COMP%]{\r\n    border: 2px solid rgb(241, 176, 11);\r\n    width: 100%;\r\n    background: black;\r\n    color: cornsilk;\r\n    font-style: oblique;\r\n    padding: 8px;\r\n}\r\n.proceso[_ngcontent-%COMP%]{\r\n    border: 1px solid rgb(241, 176, 11);\r\n    padding: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJ1bnByb2Nlc3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1DQUFtQztJQUNuQyxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksbUNBQW1DO0lBQ25DLFlBQVk7QUFDaEIiLCJmaWxlIjoicnVucHJvY2Vzcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJ1bntcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYigyNDEsIDE3NiwgMTEpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiBjb3Juc2lsaztcclxuICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbn1cclxuLnByb2Nlc297XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQxLCAxNzYsIDExKTtcclxuICAgIHBhZGRpbmc6IDVweDtcclxufSJdfQ== */"] });


/***/ }),

/***/ "v1Dr":
/*!*****************************************************************!*\
  !*** ./src/app/components/colaprocess/colaprocess.component.ts ***!
  \*****************************************************************/
/*! exports provided: ColaprocessComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColaprocessComponent", function() { return ColaprocessComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");


function ColaprocessComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const proc_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proc_r1.titulo);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](proc_r1.tduracion);
} }
class ColaprocessComponent {
    constructor() {
    }
    ngOnInit() {
        // let interval = setInterval(() => {
        // console.log(this.arrprocol);
        // },1000); 
    }
}
ColaprocessComponent.ɵfac = function ColaprocessComponent_Factory(t) { return new (t || ColaprocessComponent)(); };
ColaprocessComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ColaprocessComponent, selectors: [["app-colaprocess"]], inputs: { arrcola: "arrcola" }, decls: 4, vars: 1, consts: [[1, "cola"], ["class", "procesos", 4, "ngFor", "ngForOf"], [1, "procesos"]], template: function ColaprocessComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Cola de procesos");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ColaprocessComponent_div_3_Template, 5, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.arrcola);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]], styles: [".procesos[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    border: 1px solid rgb(241, 176, 11);\r\n    padding: 5px;\r\n    margin: 5px;\r\n}\r\n.cola[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    flex-direction: column;\r\n    border: 1px solid rgb(241, 176, 11);\r\n    background: black;\r\n    color: cornsilk;\r\n    font-style: oblique;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbGFwcm9jZXNzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1DQUFtQztJQUNuQyxZQUFZO0lBQ1osV0FBVztBQUNmO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsYUFBYTtJQUNiLGVBQWU7SUFDZixzQkFBc0I7SUFDdEIsbUNBQW1DO0lBQ25DLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsbUJBQW1CO0FBQ3ZCIiwiZmlsZSI6ImNvbGFwcm9jZXNzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvY2Vzb3N7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0MSwgMTc2LCAxMSk7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uY29sYXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCByZ2IoMjQxLCAxNzYsIDExKTtcclxuICAgIGJhY2tncm91bmQ6IGJsYWNrO1xyXG4gICAgY29sb3I6IGNvcm5zaWxrO1xyXG4gICAgZm9udC1zdHlsZTogb2JsaXF1ZTtcclxufSJdfQ== */"] });


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map