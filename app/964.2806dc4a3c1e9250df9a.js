(self["webpackChunktftmanager"] = self["webpackChunktftmanager"] || []).push([[964],{

/***/ 86:
/*!********************************************************************!*\
  !*** ./src/app/main/team/cadastro-team/cadastro-team.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastroTeamComponent": function() { return /* binding */ CadastroTeamComponent; }
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 1041);
/* harmony import */ var _shared_enum_teamType_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@shared/enum/teamType.enum */ 8186);
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@shared/services/player.service */ 182);
/* harmony import */ var _shared_services_team_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@shared/services/team.service */ 3317);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5366);
/* harmony import */ var _ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngneat/reactive-forms */ 5022);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/dialog */ 2935);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ 2797);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ 3070);
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/input */ 6174);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ 4369);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/icon */ 7307);

















var CadastroTeamComponent = /** @class */ /*@__PURE__*/ (function () {
    function CadastroTeamComponent(fb, dialogRef, teamService, playerService) {
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.teamService = teamService;
        this.playerService = playerService;
        this.subscriptions = [];
    }
    CadastroTeamComponent.prototype.ngOnDestroy = function () {
        this.subscriptions.forEach(function (s) { return s.unsubscribe(); });
    };
    CadastroTeamComponent.prototype.ngOnInit = function () {
        this.construirFormulario();
    };
    CadastroTeamComponent.prototype.construirFormulario = function () {
        this.formulario = this.fb.group({
            nomeTeam: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]],
            logo: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required]]
        });
    };
    CadastroTeamComponent.prototype.onSubmit = function () {
        var _this = this;
        var _formulario = this.formulario.value;
        var request = {
            name: _formulario.nomeTeam,
            capitain: this.playerService.getPlayer.accountId,
            teamType: _shared_enum_teamType_enum__WEBPACK_IMPORTED_MODULE_0__.TeamType.MULTIPLAYER,
            logo: _formulario.logo
        };
        this.subscriptions.push(this.teamService.teamRegister(request).subscribe(function (team) {
            //notificação para sucesso
            _this.dialogRef.close();
        }));
    };
    CadastroTeamComponent.ɵfac = function CadastroTeamComponent_Factory(t) { return new (t || CadastroTeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_ngneat_reactive_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_team_service__WEBPACK_IMPORTED_MODULE_2__.TeamService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService)); };
    CadastroTeamComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: CadastroTeamComponent, selectors: [["app-cadastro-team"]], decls: 24, vars: 1, consts: [["mat-card-avatar", ""], [3, "formGroup"], [1, "row"], [1, "col-12"], ["required", "", "matInput", "", "formControlName", "nomeTeam"], ["required", "", "matInput", "", "formControlName", "logo"], [1, "row", "col-12", "justify-content-end"], ["mat-button", "", "color", "primary", "type", "submit", 3, "click"]], template: function CadastroTeamComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "mat-card");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "mat-card-header");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "mat-card-title");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](4, "Novo Time");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "mat-card-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "form", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](8, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](10, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](11, "Nome do Time:");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](12, "input", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](13, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "mat-form-field");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "mat-label");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](16, "Link da Logo do Time:");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](17, "input", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](18, "mat-card-actions");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "button", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CadastroTeamComponent_Template_button_click_20_listener() { return ctx.onSubmit(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](21, "mat-icon");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](22, "save");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](23, " Salvar ");
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
                _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("formGroup", ctx.formulario);
            }
        }, directives: [_angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCard, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardHeader, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardAvatar, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardTitle, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardContent, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormGroupDirective, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatFormField, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__.MatLabel, _angular_material_input__WEBPACK_IMPORTED_MODULE_9__.MatInput, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormControlName, _angular_material_card__WEBPACK_IMPORTED_MODULE_7__.MatCardActions, _angular_material_button__WEBPACK_IMPORTED_MODULE_10__.MatButton, _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__.MatIcon], styles: [""] });
    return CadastroTeamComponent;
}());



/***/ }),

/***/ 314:
/*!**********************************************************************!*\
  !*** ./src/app/main/team/team-dashboard/team-dashboard.component.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamDashboardComponent": function() { return /* binding */ TeamDashboardComponent; }
/* harmony export */ });
/* harmony import */ var _shared_services_team_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@shared/services/team.service */ 3317);
/* harmony import */ var _cadastro_team_cadastro_team_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cadastro-team/cadastro-team.component */ 86);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5366);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ 2935);
/* harmony import */ var _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@shared/components/content/content.component */ 5101);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ 4369);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 1116);









function TeamDashboardComponent_div_11_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "h4", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](8, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](9, "Ver Time");
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var team_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", team_r1.logo, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](team_r1.name);
    }
}
var TeamDashboardComponent = /** @class */ /*@__PURE__*/ (function () {
    function TeamDashboardComponent(dialogService, teamService) {
        this.dialogService = dialogService;
        this.teamService = teamService;
    }
    TeamDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.teamService.getTeamsByPlayerId().subscribe(function (teams) {
            _this.teams = teams;
        });
    };
    TeamDashboardComponent.prototype.novoTime = function () {
        this.dialogService.open(_cadastro_team_cadastro_team_component__WEBPACK_IMPORTED_MODULE_1__.CadastroTeamComponent);
    };
    TeamDashboardComponent.ɵfac = function TeamDashboardComponent_Factory(t) { return new (t || TeamDashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__.MatDialog), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_team_service__WEBPACK_IMPORTED_MODULE_0__.TeamService)); };
    TeamDashboardComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: TeamDashboardComponent, selectors: [["app-team-dashboard"]], decls: 13, vars: 1, consts: [[1, "row"], [1, "col-md-12"], [1, "card"], [1, "card-header", "card-header-primary"], [1, "card-title"], ["type", "button", "mat-button", "", 1, "btn", "btn-success", "pull-right", 3, "click"], [1, "card-body"], [1, "row", "mt-4"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "clearfix"], [1, "col-md-4"], [1, "card", "card-profile"], [1, "card-avatar"], ["href", "#"], [1, "img", 3, "src"], ["mat-button", "", "type", "button", 1, "btn", "btn-success"]], template: function TeamDashboardComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](4, "div", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "h4", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](6, "Times ");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "button", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TeamDashboardComponent_Template_button_click_7_listener() { return ctx.novoTime(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](8, "Adicionar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](10, "div", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtemplate"](11, TeamDashboardComponent_div_11_Template, 10, 2, "div", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngForOf", ctx.teams);
            }
        }, directives: [_shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent, _angular_material_button__WEBPACK_IMPORTED_MODULE_5__.MatButton, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf], styles: [""] });
    return TeamDashboardComponent;
}());



/***/ }),

/***/ 6653:
/*!******************************************!*\
  !*** ./src/app/main/team/team-routes.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamRoutes": function() { return /* binding */ TeamRoutes; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 4258);
/* harmony import */ var _team_dashboard_team_dashboard_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-dashboard/team-dashboard.component */ 314);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 5366);




var routes = [
    {
        path: "dashboard",
        component: _team_dashboard_team_dashboard_component__WEBPACK_IMPORTED_MODULE_0__.TeamDashboardComponent,
        //canActivate: [AuthGuard],
        data: { permission: "" }
    },
    {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
    }
];
var TeamRoutes = /** @class */ /*@__PURE__*/ (function () {
    function TeamRoutes() {
    }
    TeamRoutes.ɵfac = function TeamRoutes_Factory(t) { return new (t || TeamRoutes)(); };
    TeamRoutes.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: TeamRoutes });
    TeamRoutes.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] });
    return TeamRoutes;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TeamRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule] }); })();


/***/ }),

/***/ 2964:
/*!******************************************!*\
  !*** ./src/app/main/team/team.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TeamModule": function() { return /* binding */ TeamModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! tslib */ 4762);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/common */ 1116);
/* harmony import */ var _team_routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./team-routes */ 6653);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/@shared/shared.module */ 9406);
/* harmony import */ var _team_dashboard_team_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./team-dashboard/team-dashboard.component */ 314);
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ 2797);
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/dialog */ 2935);
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ 3070);
/* harmony import */ var _angular_material_input___WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input/ */ 6174);
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ 4369);
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ 7307);
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/table */ 7340);
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/autocomplete */ 9961);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/forms */ 1041);
/* harmony import */ var _cadastro_team_cadastro_team_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cadastro-team/cadastro-team.component */ 86);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/core */ 5366);
















var MATERIAL = [
    _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
    _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule,
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
    _angular_material_input___WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
    _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
    _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
    _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
    _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule
];
var TeamModule = /** @class */ /*@__PURE__*/ (function () {
    function TeamModule() {
    }
    TeamModule.ɵfac = function TeamModule_Factory(t) { return new (t || TeamModule)(); };
    TeamModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineNgModule"]({ type: TeamModule });
    TeamModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵdefineInjector"]({ imports: [(0,tslib__WEBPACK_IMPORTED_MODULE_13__.__spreadArray)([
                _angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
                _team_routes__WEBPACK_IMPORTED_MODULE_0__.TeamRoutes,
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
                _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
                src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule
            ], MATERIAL)] });
    return TeamModule;
}());

(function () {
    (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_12__["ɵɵsetNgModuleScope"](TeamModule, { declarations: [_team_dashboard_team_dashboard_component__WEBPACK_IMPORTED_MODULE_2__.TeamDashboardComponent,
            _cadastro_team_cadastro_team_component__WEBPACK_IMPORTED_MODULE_3__.CadastroTeamComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_14__.CommonModule,
            _team_routes__WEBPACK_IMPORTED_MODULE_0__.TeamRoutes,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_15__.FormsModule,
            src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_1__.SharedModule, _angular_material_card__WEBPACK_IMPORTED_MODULE_4__.MatCardModule,
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__.MatDialogModule,
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__.MatFormFieldModule,
            _angular_material_input___WEBPACK_IMPORTED_MODULE_7__.MatInputModule,
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__.MatButtonModule,
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__.MatIconModule,
            _angular_material_table__WEBPACK_IMPORTED_MODULE_10__.MatTableModule,
            _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_11__.MatAutocompleteModule] });
})();


/***/ })

}]);