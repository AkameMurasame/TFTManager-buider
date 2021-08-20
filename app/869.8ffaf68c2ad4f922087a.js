(self["webpackChunktftmanager"] = self["webpackChunktftmanager"] || []).push([[869],{

/***/ 7173:
/*!**********************************************************************!*\
  !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tabs.js ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MAT_TABS_CONFIG": function() { return /* binding */ MAT_TABS_CONFIG; },
/* harmony export */   "MAT_TAB_GROUP": function() { return /* binding */ MAT_TAB_GROUP; },
/* harmony export */   "MatInkBar": function() { return /* binding */ MatInkBar; },
/* harmony export */   "MatTab": function() { return /* binding */ MatTab; },
/* harmony export */   "MatTabBody": function() { return /* binding */ MatTabBody; },
/* harmony export */   "MatTabBodyPortal": function() { return /* binding */ MatTabBodyPortal; },
/* harmony export */   "MatTabChangeEvent": function() { return /* binding */ MatTabChangeEvent; },
/* harmony export */   "MatTabContent": function() { return /* binding */ MatTabContent; },
/* harmony export */   "MatTabGroup": function() { return /* binding */ MatTabGroup; },
/* harmony export */   "MatTabHeader": function() { return /* binding */ MatTabHeader; },
/* harmony export */   "MatTabLabel": function() { return /* binding */ MatTabLabel; },
/* harmony export */   "MatTabLabelWrapper": function() { return /* binding */ MatTabLabelWrapper; },
/* harmony export */   "MatTabLink": function() { return /* binding */ MatTabLink; },
/* harmony export */   "MatTabNav": function() { return /* binding */ MatTabNav; },
/* harmony export */   "MatTabsModule": function() { return /* binding */ MatTabsModule; },
/* harmony export */   "_MAT_INK_BAR_POSITIONER": function() { return /* binding */ _MAT_INK_BAR_POSITIONER; },
/* harmony export */   "_MatTabBodyBase": function() { return /* binding */ _MatTabBodyBase; },
/* harmony export */   "_MatTabGroupBase": function() { return /* binding */ _MatTabGroupBase; },
/* harmony export */   "_MatTabHeaderBase": function() { return /* binding */ _MatTabHeaderBase; },
/* harmony export */   "_MatTabLinkBase": function() { return /* binding */ _MatTabLinkBase; },
/* harmony export */   "_MatTabNavBase": function() { return /* binding */ _MatTabNavBase; },
/* harmony export */   "matTabsAnimations": function() { return /* binding */ matTabsAnimations; },
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_a": function() { return /* binding */ _MAT_INK_BAR_POSITIONER_FACTORY; },
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_b": function() { return /* binding */ MAT_TAB_LABEL; },
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_c": function() { return /* binding */ MAT_TAB_CONTENT; },
/* harmony export */   "ɵangular_material_src_material_tabs_tabs_d": function() { return /* binding */ MatPaginatedTabHeader; }
/* harmony export */ });
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/assertThisInitialized */ 1357);
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/toConsumableArray */ 6581);
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/get */ 7078);
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ 3620);
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ 8784);
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createSuper */ 4999);
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ 1112);
/* harmony import */ var D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ 1998);
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/cdk/a11y */ 7388);
/* harmony import */ var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/cdk/observers */ 7853);
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/cdk/portal */ 2151);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/common */ 1116);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 5366);
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/core */ 6602);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/platform-browser/animations */ 8340);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! rxjs */ 5959);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! rxjs */ 9258);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! rxjs */ 1906);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! rxjs */ 7254);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! rxjs */ 878);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! rxjs */ 7878);
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/animations */ 9713);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! rxjs/operators */ 6238);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! rxjs/operators */ 1283);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! rxjs/operators */ 5416);
/* harmony import */ var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/cdk/coercion */ 9861);
/* harmony import */ var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/cdk/platform */ 3169);
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/cdk/keycodes */ 9235);
/* harmony import */ var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/cdk/bidi */ 4720);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/cdk/scrolling */ 83);























/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token for the MatInkBar's Positioner. */











function MatTab_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](0);
  }
}

var _c0 = ["*"];

function MatTabBody_ng_template_2_Template(rf, ctx) {}

var _c1 = function _c1(a0) {
  return {
    animationDuration: a0
  };
};

var _c2 = function _c2(a0, a1) {
  return {
    value: a0,
    params: a1
  };
};

var _c3 = ["tabBodyWrapper"];
var _c4 = ["tabHeader"];

function MatTabGroup_div_2_ng_template_2_ng_template_0_Template(rf, ctx) {}

function MatTabGroup_div_2_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, MatTabGroup_div_2_ng_template_2_ng_template_0_Template, 0, 0, "ng-template", 9);
  }

  if (rf & 2) {
    var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("cdkPortalOutlet", tab_r4.templateLabel);
  }
}

function MatTabGroup_div_2_ng_template_3_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](0);
  }

  if (rf & 2) {
    var tab_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtextInterpolate"](tab_r4.textLabel);
  }
}

function MatTabGroup_div_2_Template(rf, ctx) {
  if (rf & 1) {
    var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MatTabGroup_div_2_Template_div_click_0_listener() {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      var tab_r4 = restoredCtx.$implicit;
      var i_r5 = restoredCtx.index;
      var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();

      var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵreference"](1);

      return ctx_r11._handleClick(tab_r4, _r0, i_r5);
    })("cdkFocusChange", function MatTabGroup_div_2_Template_div_cdkFocusChange_0_listener($event) {
      var restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r12);
      var i_r5 = restoredCtx.index;
      var ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r13._tabFocusChanged($event, i_r5);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MatTabGroup_div_2_ng_template_2_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](3, MatTabGroup_div_2_ng_template_3_Template, 1, 1, "ng-template", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var tab_r4 = ctx.$implicit;
    var i_r5 = ctx.index;
    var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-label-active", ctx_r1.selectedIndex == i_r5);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r1._getTabLabelId(i_r5))("disabled", tab_r4.disabled)("matRippleDisabled", tab_r4.disabled || ctx_r1.disableRipple);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("tabIndex", ctx_r1._getTabIndex(tab_r4, i_r5))("aria-posinset", i_r5 + 1)("aria-setsize", ctx_r1._tabs.length)("aria-controls", ctx_r1._getTabContentId(i_r5))("aria-selected", ctx_r1.selectedIndex == i_r5)("aria-label", tab_r4.ariaLabel || null)("aria-labelledby", !tab_r4.ariaLabel && tab_r4.ariaLabelledby ? tab_r4.ariaLabelledby : null);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", tab_r4.templateLabel);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngIf", !tab_r4.templateLabel);
  }
}

function MatTabGroup_mat_tab_body_5_Template(rf, ctx) {
  if (rf & 1) {
    var _r17 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetCurrentView"]();

    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-tab-body", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("_onCentered", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentered_0_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      var ctx_r16 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r16._removeTabBodyWrapperHeight();
    })("_onCentering", function MatTabGroup_mat_tab_body_5_Template_mat_tab_body__onCentering_0_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵrestoreView"](_r17);
      var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
      return ctx_r18._setTabBodyWrapperHeight($event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
  }

  if (rf & 2) {
    var tab_r14 = ctx.$implicit;
    var i_r15 = ctx.index;
    var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-body-active", ctx_r3.selectedIndex == i_r15);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("id", ctx_r3._getTabContentId(i_r15))("content", tab_r14.content)("position", tab_r14.position)("origin", tab_r14.origin)("animationDuration", ctx_r3.animationDuration);
    _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-labelledby", ctx_r3._getTabLabelId(i_r15));
  }
}

var _c5 = ["tabListContainer"];
var _c6 = ["tabList"];
var _c7 = ["nextPaginator"];
var _c8 = ["previousPaginator"];
var _c9 = ["mat-tab-nav-bar", ""];

var _MAT_INK_BAR_POSITIONER = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('MatInkBarPositioner', {
  providedIn: 'root',
  factory: _MAT_INK_BAR_POSITIONER_FACTORY
});
/**
 * The default positioner function for the MatInkBar.
 * @docs-private
 */


function _MAT_INK_BAR_POSITIONER_FACTORY() {
  var method = function method(element) {
    return {
      left: element ? (element.offsetLeft || 0) + 'px' : '0',
      width: element ? (element.offsetWidth || 0) + 'px' : '0'
    };
  };

  return method;
}

var MatInkBar = /*@__PURE__*/function () {
  var MatInkBar = /*#__PURE__*/function () {
    function MatInkBar(_elementRef, _ngZone, _inkBarPositioner, _animationMode) {
      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatInkBar);

      this._elementRef = _elementRef;
      this._ngZone = _ngZone;
      this._inkBarPositioner = _inkBarPositioner;
      this._animationMode = _animationMode;
    }
    /**
     * Calculates the styles from the provided element in order to align the ink-bar to that element.
     * Shows the ink bar if previously set as hidden.
     * @param element
     */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(MatInkBar, [{
      key: "alignToElement",
      value: function alignToElement(element) {
        var _this = this;

        this.show();

        if (typeof requestAnimationFrame !== 'undefined') {
          this._ngZone.runOutsideAngular(function () {
            requestAnimationFrame(function () {
              return _this._setStyles(element);
            });
          });
        } else {
          this._setStyles(element);
        }
      }
      /** Shows the ink bar. */

    }, {
      key: "show",
      value: function show() {
        this._elementRef.nativeElement.style.visibility = 'visible';
      }
      /** Hides the ink bar. */

    }, {
      key: "hide",
      value: function hide() {
        this._elementRef.nativeElement.style.visibility = 'hidden';
      }
      /**
       * Sets the proper styles to the ink bar element.
       * @param element
       */

    }, {
      key: "_setStyles",
      value: function _setStyles(element) {
        var positions = this._inkBarPositioner(element);

        var inkBar = this._elementRef.nativeElement;
        inkBar.style.left = positions.left;
        inkBar.style.width = positions.width;
      }
    }]);

    return MatInkBar;
  }();

  MatInkBar.ɵfac = function MatInkBar_Factory(t) {
    return new (t || MatInkBar)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_MAT_INK_BAR_POSITIONER), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  MatInkBar.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatInkBar,
    selectors: [["mat-ink-bar"]],
    hostAttrs: [1, "mat-ink-bar"],
    hostVars: 2,
    hostBindings: function MatInkBar_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
      }
    }
  });
  return MatInkBar;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabContent`. It serves as
 * alternative token to the actual `MatTabContent` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_TAB_CONTENT = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('MatTabContent');

var MatTabContent = /*@__PURE__*/function () {
  var MatTabContent = function MatTabContent(
  /** Content for the tab. */
  template) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabContent);

    this.template = template;
  };

  MatTabContent.ɵfac = function MatTabContent_Factory(t) {
    return new (t || MatTabContent)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef));
  };

  MatTabContent.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatTabContent,
    selectors: [["", "matTabContent", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_CONTENT,
      useExisting: MatTabContent
    }])]
  });
  return MatTabContent;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Injection token that can be used to reference instances of `MatTabLabel`. It serves as
 * alternative token to the actual `MatTabLabel` class which could cause unnecessary
 * retention of the class and its directive metadata.
 */


var MAT_TAB_LABEL = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('MatTabLabel');

var MatTabLabel = /*@__PURE__*/function () {
  var MatTabLabel = /*#__PURE__*/function (_CdkPortal) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabLabel, _CdkPortal);

    var _super = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabLabel);

    function MatTabLabel() {
      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabLabel);

      return _super.apply(this, arguments);
    }

    return MatTabLabel;
  }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortal);

  MatTabLabel.ɵfac =
  /*@__PURE__*/

  /*@__PURE__*/
  function () {
    var ɵMatTabLabel_BaseFactory;
    return function MatTabLabel_Factory(t) {
      return (ɵMatTabLabel_BaseFactory || (ɵMatTabLabel_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵgetInheritedFactory"](MatTabLabel)))(t || MatTabLabel);
    };
  }();

  MatTabLabel.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatTabLabel,
    selectors: [["", "mat-tab-label", ""], ["", "matTabLabel", ""]],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_LABEL,
      useExisting: MatTabLabel
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabLabel;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTab.

/** @docs-private */


var MatTabBase = function MatTabBase() {
  (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabBase);
};

var _MatTabMixinBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinDisabled)(MatTabBase);
/**
 * Used to provide a tab group to a tab without causing a circular dependency.
 * @docs-private
 */


var MAT_TAB_GROUP = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('MAT_TAB_GROUP');

var MatTab = /*@__PURE__*/function () {
  var MatTab = /*#__PURE__*/function (_MatTabMixinBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTab, _MatTabMixinBase2);

    var _super2 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTab);

    function MatTab(_viewContainerRef, _closestTabGroup) {
      var _this2;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTab);

      _this2 = _super2.call(this);
      _this2._viewContainerRef = _viewContainerRef;
      _this2._closestTabGroup = _closestTabGroup;
      /** Plain text label for the tab, used when there is no template label. */

      _this2.textLabel = '';
      /** Portal that will be the hosted content of the tab */

      _this2._contentPortal = null;
      /** Emits whenever the internal state of the tab changes. */

      _this2._stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
      /**
       * The relatively indexed position where 0 represents the center, negative is left, and positive
       * represents the right.
       */

      _this2.position = null;
      /**
       * The initial relatively index origin of the tab if it was created and selected after there
       * was already a selected tab. Provides context of what position the tab should originate from.
       */

      _this2.origin = null;
      /**
       * Whether the tab is currently active.
       */

      _this2.isActive = false;
      return _this2;
    }
    /** Content for the tab label given by `<ng-template mat-tab-label>`. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(MatTab, [{
      key: "templateLabel",
      get: function get() {
        return this._templateLabel;
      },
      set: function set(value) {
        this._setTemplateLabelInput(value);
      }
      /** @docs-private */

    }, {
      key: "content",
      get: function get() {
        return this._contentPortal;
      }
    }, {
      key: "ngOnChanges",
      value: function ngOnChanges(changes) {
        if (changes.hasOwnProperty('textLabel') || changes.hasOwnProperty('disabled')) {
          this._stateChanges.next();
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._stateChanges.complete();
      }
    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        this._contentPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.TemplatePortal(this._explicitContent || this._implicitContent, this._viewContainerRef);
      }
      /**
       * This has been extracted to a util because of TS 4 and VE.
       * View Engine doesn't support property rename inheritance.
       * TS 4.0 doesn't allow properties to override accessors or vice-versa.
       * @docs-private
       */

    }, {
      key: "_setTemplateLabelInput",
      value: function _setTemplateLabelInput(value) {
        // Only update the templateLabel via query if there is actually
        // a MatTabLabel found. This works around an issue where a user may have
        // manually set `templateLabel` during creation mode, which would then get clobbered
        // by `undefined` when this query resolves.
        if (value) {
          this._templateLabel = value;
        }
      }
    }]);

    return MatTab;
  }(_MatTabMixinBase);

  MatTab.ɵfac = function MatTab_Factory(t) {
    return new (t || MatTab)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_TAB_GROUP, 8));
  };

  MatTab.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MatTab,
    selectors: [["mat-tab"]],
    contentQueries: function MatTab_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MAT_TAB_LABEL, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MAT_TAB_CONTENT, 7, _angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx.templateLabel = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._explicitContent = _t.first);
      }
    },
    viewQuery: function MatTab_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.TemplateRef, 7);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._implicitContent = _t.first);
      }
    },
    inputs: {
      disabled: "disabled",
      textLabel: ["label", "textLabel"],
      ariaLabel: ["aria-label", "ariaLabel"],
      ariaLabelledby: ["aria-labelledby", "ariaLabelledby"]
    },
    exportAs: ["matTab"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵNgOnChangesFeature"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function MatTab_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](0, MatTab_ng_template_0_Template, 1, 0, "ng-template");
      }
    },
    encapsulation: 2
  });
  return MatTab;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Animations used by the Material tabs.
 * @docs-private
 */


var matTabsAnimations = {
  /** Animation translates a tab along the X axis. */
  translateTab: /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.trigger)('translateTab', [// Note: transitions to `none` instead of 0, because some browsers might blur the content.

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('center, void, left-origin-center, right-origin-center', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'none'
  })), // If the tab is either on the left or right, we additionally add a `min-height` of 1px
  // in order to ensure that the element has a height before its state changes. This is
  // necessary because Chrome does seem to skip the transition in RTL mode if the element does
  // not have a static height and is not rendered. See related issue: #9465

  /*@__PURE__*/
  (0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('left', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'translate3d(-100%, 0, 0)',
    minHeight: '1px'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.state)('right', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'translate3d(100%, 0, 0)',
    minHeight: '1px'
  })), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('* => left, * => right, left => center, right => center', /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => left-origin-center', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'translate3d(-100%, 0, 0)'
  }), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')]), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.transition)('void => right-origin-center', [/*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.style)({
    transform: 'translate3d(100%, 0, 0)'
  }), /*@__PURE__*/(0,_angular_animations__WEBPACK_IMPORTED_MODULE_13__.animate)('{{animationDuration}} cubic-bezier(0.35, 0, 0.25, 1)')])])
};

var MatTabBodyPortal = /*@__PURE__*/function () {
  var MatTabBodyPortal = /*#__PURE__*/function (_CdkPortalOutlet) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabBodyPortal, _CdkPortalOutlet);

    var _super3 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabBodyPortal);

    function MatTabBodyPortal(componentFactoryResolver, viewContainerRef, _host, _document) {
      var _this3;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabBodyPortal);

      _this3 = _super3.call(this, componentFactoryResolver, viewContainerRef, _document);
      _this3._host = _host;
      /** Subscription to events for when the tab body begins centering. */

      _this3._centeringSub = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
      /** Subscription to events for when the tab body finishes leaving from center position. */

      _this3._leavingSub = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
      return _this3;
    }
    /** Set initial visibility or set up subscription for changing visibility. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(MatTabBodyPortal, [{
      key: "ngOnInit",
      value: function ngOnInit() {
        var _this4 = this;

        (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(MatTabBodyPortal.prototype), "ngOnInit", this).call(this);

        this._centeringSub = this._host._beforeCentering.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(this._host._isCenterPosition(this._host._position))).subscribe(function (isCentering) {
          if (isCentering && !_this4.hasAttached()) {
            _this4.attach(_this4._host._content);
          }
        });
        this._leavingSub = this._host._afterLeavingCenter.subscribe(function () {
          _this4.detach();
        });
      }
      /** Clean up centering subscription. */

    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(MatTabBodyPortal.prototype), "ngOnDestroy", this).call(this);

        this._centeringSub.unsubscribe();

        this._leavingSub.unsubscribe();
      }
    }]);

    return MatTabBodyPortal;
  }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortalOutlet);

  MatTabBodyPortal.ɵfac = function MatTabBodyPortal_Factory(t) {
    return new (t || MatTabBodyPortal)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ComponentFactoryResolver), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ViewContainerRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"]((0,_angular_core__WEBPACK_IMPORTED_MODULE_8__.forwardRef)(function () {
      return MatTabBody;
    })), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_16__.DOCUMENT));
  };

  MatTabBodyPortal.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatTabBodyPortal,
    selectors: [["", "matTabBodyHost", ""]],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabBodyPortal;
}();

var _MatTabBodyBase = /*@__PURE__*/function () {
  var _MatTabBodyBase = /*#__PURE__*/function () {
    function _MatTabBodyBase(_elementRef, _dir, changeDetectorRef) {
      var _this5 = this;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, _MatTabBodyBase);

      this._elementRef = _elementRef;
      this._dir = _dir;
      /** Subscription to the directionality change observable. */

      this._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
      /** Emits when an animation on the tab is complete. */

      this._translateTabComplete = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
      /** Event emitted when the tab begins to animate towards the center as the active tab. */

      this._onCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted before the centering of the tab begins. */

      this._beforeCentering = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted before the centering of the tab begins. */

      this._afterLeavingCenter = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted when the tab completes its animation towards the center. */

      this._onCentered = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter(true); // Note that the default value will always be overwritten by `MatTabBody`, but we need one
      // anyway to prevent the animations module from throwing an error if the body is used on its own.

      /** Duration for the tab's animation. */

      this.animationDuration = '500ms';

      if (_dir) {
        this._dirChangeSubscription = _dir.change.subscribe(function (dir) {
          _this5._computePositionAnimationState(dir);

          changeDetectorRef.markForCheck();
        });
      } // Ensure that we get unique animation events, because the `.done` callback can get
      // invoked twice in some browsers. See https://github.com/angular/angular/issues/24084.


      this._translateTabComplete.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_17__.distinctUntilChanged)(function (x, y) {
        return x.fromState === y.fromState && x.toState === y.toState;
      })).subscribe(function (event) {
        // If the transition to the center is complete, emit an event.
        if (_this5._isCenterPosition(event.toState) && _this5._isCenterPosition(_this5._position)) {
          _this5._onCentered.emit();
        }

        if (_this5._isCenterPosition(event.fromState) && !_this5._isCenterPosition(_this5._position)) {
          _this5._afterLeavingCenter.emit();
        }
      });
    }
    /** The shifted index position of the tab body, where zero represents the active center tab. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(_MatTabBodyBase, [{
      key: "position",
      set: function set(position) {
        this._positionIndex = position;

        this._computePositionAnimationState();
      }
      /**
       * After initialized, check if the content is centered and has an origin. If so, set the
       * special position states that transition the tab from the left or right before centering.
       */

    }, {
      key: "ngOnInit",
      value: function ngOnInit() {
        if (this._position == 'center' && this.origin != null) {
          this._position = this._computePositionFromOrigin(this.origin);
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._dirChangeSubscription.unsubscribe();

        this._translateTabComplete.complete();
      }
    }, {
      key: "_onTranslateTabStarted",
      value: function _onTranslateTabStarted(event) {
        var isCentering = this._isCenterPosition(event.toState);

        this._beforeCentering.emit(isCentering);

        if (isCentering) {
          this._onCentering.emit(this._elementRef.nativeElement.clientHeight);
        }
      }
      /** The text direction of the containing app. */

    }, {
      key: "_getLayoutDirection",
      value: function _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
      }
      /** Whether the provided position state is considered center, regardless of origin. */

    }, {
      key: "_isCenterPosition",
      value: function _isCenterPosition(position) {
        return position == 'center' || position == 'left-origin-center' || position == 'right-origin-center';
      }
      /** Computes the position state that will be used for the tab-body animation trigger. */

    }, {
      key: "_computePositionAnimationState",
      value: function _computePositionAnimationState() {
        var dir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this._getLayoutDirection();

        if (this._positionIndex < 0) {
          this._position = dir == 'ltr' ? 'left' : 'right';
        } else if (this._positionIndex > 0) {
          this._position = dir == 'ltr' ? 'right' : 'left';
        } else {
          this._position = 'center';
        }
      }
      /**
       * Computes the position state based on the specified origin position. This is used if the
       * tab is becoming visible immediately after creation.
       */

    }, {
      key: "_computePositionFromOrigin",
      value: function _computePositionFromOrigin(origin) {
        var dir = this._getLayoutDirection();

        if (dir == 'ltr' && origin <= 0 || dir == 'rtl' && origin > 0) {
          return 'left-origin-center';
        }

        return 'right-origin-center';
      }
    }]);

    return _MatTabBodyBase;
  }();

  _MatTabBodyBase.ɵfac = function _MatTabBodyBase_Factory(t) {
    return new (t || _MatTabBodyBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
  };

  _MatTabBodyBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: _MatTabBodyBase,
    inputs: {
      animationDuration: "animationDuration",
      position: "position",
      _content: ["content", "_content"],
      origin: "origin"
    },
    outputs: {
      _onCentering: "_onCentering",
      _beforeCentering: "_beforeCentering",
      _afterLeavingCenter: "_afterLeavingCenter",
      _onCentered: "_onCentered"
    }
  });
  return _MatTabBodyBase;
}();

var MatTabBody = /*@__PURE__*/function () {
  var MatTabBody = /*#__PURE__*/function (_MatTabBodyBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabBody, _MatTabBodyBase2);

    var _super4 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabBody);

    function MatTabBody(elementRef, dir, changeDetectorRef) {
      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabBody);

      return _super4.call(this, elementRef, dir, changeDetectorRef);
    }

    return MatTabBody;
  }(_MatTabBodyBase);

  MatTabBody.ɵfac = function MatTabBody_Factory(t) {
    return new (t || MatTabBody)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef));
  };

  MatTabBody.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MatTabBody,
    selectors: [["mat-tab-body"]],
    viewQuery: function MatTabBody_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortalOutlet, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._portalHost = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-body"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 3,
    vars: 6,
    consts: [["cdkScrollable", "", 1, "mat-tab-body-content"], ["content", ""], ["matTabBodyHost", ""]],
    template: function MatTabBody_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("@translateTab.start", function MatTabBody_Template_div_animation_translateTab_start_0_listener($event) {
          return ctx._onTranslateTabStarted($event);
        })("@translateTab.done", function MatTabBody_Template_div_animation_translateTab_done_0_listener($event) {
          return ctx._translateTabComplete.next($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MatTabBody_ng_template_2_Template, 0, 0, "ng-template", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("@translateTab", _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction2"](3, _c2, ctx._position, _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵpureFunction1"](1, _c1, ctx.animationDuration)));
      }
    },
    directives: [MatTabBodyPortal],
    styles: [".mat-tab-body-content{height:100%;overflow:auto}.mat-tab-group-dynamic-height .mat-tab-body-content{overflow:hidden}\n"],
    encapsulation: 2,
    data: {
      animation: [matTabsAnimations.translateTab]
    }
  });
  return MatTabBody;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Injection token that can be used to provide the default options the tabs module. */


var MAT_TABS_CONFIG = /*@__PURE__*/new _angular_core__WEBPACK_IMPORTED_MODULE_8__.InjectionToken('MAT_TABS_CONFIG');
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Used to generate unique ID's for each tab component */

var nextId = 0;
/** A simple change event emitted on focus or selection changes. */

var MatTabChangeEvent = function MatTabChangeEvent() {
  (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabChangeEvent);
}; // Boilerplate for applying mixins to MatTabGroup.

/** @docs-private */


var MatTabGroupMixinBase = function MatTabGroupMixinBase(_elementRef) {
  (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabGroupMixinBase);

  this._elementRef = _elementRef;
};

var _MatTabGroupMixinBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinColor)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinDisableRipple)(MatTabGroupMixinBase), 'primary');

var _MatTabGroupBase = /*@__PURE__*/function () {
  var _MatTabGroupBase = /*#__PURE__*/function (_MatTabGroupMixinBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(_MatTabGroupBase, _MatTabGroupMixinBase2);

    var _super5 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(_MatTabGroupBase);

    function _MatTabGroupBase(elementRef, _changeDetectorRef, defaultConfig, _animationMode) {
      var _this6;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, _MatTabGroupBase);

      _this6 = _super5.call(this, elementRef);
      _this6._changeDetectorRef = _changeDetectorRef;
      _this6._animationMode = _animationMode;
      /** All of the tabs that belong to the group. */

      _this6._tabs = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.QueryList();
      /** The tab index that should be selected after the content has been checked. */

      _this6._indexToSelect = 0;
      /** Snapshot of the height of the tab body wrapper before another tab is activated. */

      _this6._tabBodyWrapperHeight = 0;
      /** Subscription to tabs being added/removed. */

      _this6._tabsSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
      /** Subscription to changes in the tab labels. */

      _this6._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_14__.Subscription.EMPTY;
      _this6._selectedIndex = null;
      /** Position of the tab header. */

      _this6.headerPosition = 'above';
      /** Output to enable support for two-way binding on `[(selectedIndex)]` */

      _this6.selectedIndexChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted when focus has changed within a tab group. */

      _this6.focusChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted when the body animation has completed */

      _this6.animationDone = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted when the tab selection has changed. */

      _this6.selectedTabChange = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter(true);
      _this6._groupId = nextId++;
      _this6.animationDuration = defaultConfig && defaultConfig.animationDuration ? defaultConfig.animationDuration : '500ms';
      _this6.disablePagination = defaultConfig && defaultConfig.disablePagination != null ? defaultConfig.disablePagination : false;
      _this6.dynamicHeight = defaultConfig && defaultConfig.dynamicHeight != null ? defaultConfig.dynamicHeight : false;
      return _this6;
    }
    /** Whether the tab group should grow to the size of the active tab. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(_MatTabGroupBase, [{
      key: "dynamicHeight",
      get: function get() {
        return this._dynamicHeight;
      },
      set: function set(value) {
        this._dynamicHeight = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceBooleanProperty)(value);
      }
      /** The index of the active tab. */

    }, {
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(value) {
        this._indexToSelect = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceNumberProperty)(value, null);
      }
      /** Duration for the tab animation. Will be normalized to milliseconds if no units are set. */

    }, {
      key: "animationDuration",
      get: function get() {
        return this._animationDuration;
      },
      set: function set(value) {
        this._animationDuration = /^\d+$/.test(value) ? value + 'ms' : value;
      }
      /** Background color of the tab group. */

    }, {
      key: "backgroundColor",
      get: function get() {
        return this._backgroundColor;
      },
      set: function set(value) {
        var nativeElement = this._elementRef.nativeElement;
        nativeElement.classList.remove("mat-background-".concat(this.backgroundColor));

        if (value) {
          nativeElement.classList.add("mat-background-".concat(value));
        }

        this._backgroundColor = value;
      }
      /**
       * After the content is checked, this component knows what tabs have been defined
       * and what the selected index should be. This is where we can know exactly what position
       * each tab should be in according to the new selected index, and additionally we know how
       * a new selected tab should transition in (from the left or right).
       */

    }, {
      key: "ngAfterContentChecked",
      value: function ngAfterContentChecked() {
        var _this7 = this;

        // Don't clamp the `indexToSelect` immediately in the setter because it can happen that
        // the amount of tabs changes before the actual change detection runs.
        var indexToSelect = this._indexToSelect = this._clampTabIndex(this._indexToSelect); // If there is a change in selected index, emit a change event. Should not trigger if
        // the selected index has not yet been initialized.


        if (this._selectedIndex != indexToSelect) {
          var isFirstRun = this._selectedIndex == null;

          if (!isFirstRun) {
            this.selectedTabChange.emit(this._createChangeEvent(indexToSelect)); // Preserve the height so page doesn't scroll up during tab change.
            // Fixes https://stackblitz.com/edit/mat-tabs-scroll-page-top-on-tab-change

            var wrapper = this._tabBodyWrapper.nativeElement;
            wrapper.style.minHeight = wrapper.clientHeight + 'px';
          } // Changing these values after change detection has run
          // since the checked content may contain references to them.


          Promise.resolve().then(function () {
            _this7._tabs.forEach(function (tab, index) {
              return tab.isActive = index === indexToSelect;
            });

            if (!isFirstRun) {
              _this7.selectedIndexChange.emit(indexToSelect); // Clear the min-height, this was needed during tab change to avoid
              // unnecessary scrolling.


              _this7._tabBodyWrapper.nativeElement.style.minHeight = '';
            }
          });
        } // Setup the position for each tab and optionally setup an origin on the next selected tab.


        this._tabs.forEach(function (tab, index) {
          tab.position = index - indexToSelect; // If there is already a selected tab, then set up an origin for the next selected tab
          // if it doesn't have one already.

          if (_this7._selectedIndex != null && tab.position == 0 && !tab.origin) {
            tab.origin = indexToSelect - _this7._selectedIndex;
          }
        });

        if (this._selectedIndex !== indexToSelect) {
          this._selectedIndex = indexToSelect;

          this._changeDetectorRef.markForCheck();
        }
      }
    }, {
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this8 = this;

        this._subscribeToAllTabChanges();

        this._subscribeToTabLabels(); // Subscribe to changes in the amount of tabs, in order to be
        // able to re-render the content as new tabs are added or removed.


        this._tabsSubscription = this._tabs.changes.subscribe(function () {
          var indexToSelect = _this8._clampTabIndex(_this8._indexToSelect); // Maintain the previously-selected tab if a new tab is added or removed and there is no
          // explicit change that selects a different tab.


          if (indexToSelect === _this8._selectedIndex) {
            var tabs = _this8._tabs.toArray();

            for (var i = 0; i < tabs.length; i++) {
              if (tabs[i].isActive) {
                // Assign both to the `_indexToSelect` and `_selectedIndex` so we don't fire a changed
                // event, otherwise the consumer may end up in an infinite loop in some edge cases like
                // adding a tab within the `selectedIndexChange` event.
                _this8._indexToSelect = _this8._selectedIndex = i;
                break;
              }
            }
          }

          _this8._changeDetectorRef.markForCheck();
        });
      }
      /** Listens to changes in all of the tabs. */

    }, {
      key: "_subscribeToAllTabChanges",
      value: function _subscribeToAllTabChanges() {
        var _this9 = this;

        // Since we use a query with `descendants: true` to pick up the tabs, we may end up catching
        // some that are inside of nested tab groups. We filter them out manually by checking that
        // the closest group to the tab is the current one.
        this._allTabs.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(this._allTabs)).subscribe(function (tabs) {
          _this9._tabs.reset(tabs.filter(function (tab) {
            return tab._closestTabGroup === _this9 || !tab._closestTabGroup;
          }));

          _this9._tabs.notifyOnChanges();
        });
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._tabs.destroy();

        this._tabsSubscription.unsubscribe();

        this._tabLabelSubscription.unsubscribe();
      }
      /** Re-aligns the ink bar to the selected tab element. */

    }, {
      key: "realignInkBar",
      value: function realignInkBar() {
        if (this._tabHeader) {
          this._tabHeader._alignInkBarToSelectedTab();
        }
      }
      /**
       * Sets focus to a particular tab.
       * @param index Index of the tab to be focused.
       */

    }, {
      key: "focusTab",
      value: function focusTab(index) {
        var header = this._tabHeader;

        if (header) {
          header.focusIndex = index;
        }
      }
    }, {
      key: "_focusChanged",
      value: function _focusChanged(index) {
        this.focusChange.emit(this._createChangeEvent(index));
      }
    }, {
      key: "_createChangeEvent",
      value: function _createChangeEvent(index) {
        var event = new MatTabChangeEvent();
        event.index = index;

        if (this._tabs && this._tabs.length) {
          event.tab = this._tabs.toArray()[index];
        }

        return event;
      }
      /**
       * Subscribes to changes in the tab labels. This is needed, because the @Input for the label is
       * on the MatTab component, whereas the data binding is inside the MatTabGroup. In order for the
       * binding to be updated, we need to subscribe to changes in it and trigger change detection
       * manually.
       */

    }, {
      key: "_subscribeToTabLabels",
      value: function _subscribeToTabLabels() {
        var _this10 = this;

        if (this._tabLabelSubscription) {
          this._tabLabelSubscription.unsubscribe();
        }

        this._tabLabelSubscription = rxjs__WEBPACK_IMPORTED_MODULE_20__.merge.apply(void 0, (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(this._tabs.map(function (tab) {
          return tab._stateChanges;
        }))).subscribe(function () {
          return _this10._changeDetectorRef.markForCheck();
        });
      }
      /** Clamps the given index to the bounds of 0 and the tabs length. */

    }, {
      key: "_clampTabIndex",
      value: function _clampTabIndex(index) {
        // Note the `|| 0`, which ensures that values like NaN can't get through
        // and which would otherwise throw the component into an infinite loop
        // (since Math.max(NaN, 0) === NaN).
        return Math.min(this._tabs.length - 1, Math.max(index || 0, 0));
      }
      /** Returns a unique id for each tab label element */

    }, {
      key: "_getTabLabelId",
      value: function _getTabLabelId(i) {
        return "mat-tab-label-".concat(this._groupId, "-").concat(i);
      }
      /** Returns a unique id for each tab content element */

    }, {
      key: "_getTabContentId",
      value: function _getTabContentId(i) {
        return "mat-tab-content-".concat(this._groupId, "-").concat(i);
      }
      /**
       * Sets the height of the body wrapper to the height of the activating tab if dynamic
       * height property is true.
       */

    }, {
      key: "_setTabBodyWrapperHeight",
      value: function _setTabBodyWrapperHeight(tabHeight) {
        if (!this._dynamicHeight || !this._tabBodyWrapperHeight) {
          return;
        }

        var wrapper = this._tabBodyWrapper.nativeElement;
        wrapper.style.height = this._tabBodyWrapperHeight + 'px'; // This conditional forces the browser to paint the height so that
        // the animation to the new height can have an origin.

        if (this._tabBodyWrapper.nativeElement.offsetHeight) {
          wrapper.style.height = tabHeight + 'px';
        }
      }
      /** Removes the height of the tab body wrapper. */

    }, {
      key: "_removeTabBodyWrapperHeight",
      value: function _removeTabBodyWrapperHeight() {
        var wrapper = this._tabBodyWrapper.nativeElement;
        this._tabBodyWrapperHeight = wrapper.clientHeight;
        wrapper.style.height = '';
        this.animationDone.emit();
      }
      /** Handle click events, setting new selected index if appropriate. */

    }, {
      key: "_handleClick",
      value: function _handleClick(tab, tabHeader, index) {
        if (!tab.disabled) {
          this.selectedIndex = tabHeader.focusIndex = index;
        }
      }
      /** Retrieves the tabindex for the tab. */

    }, {
      key: "_getTabIndex",
      value: function _getTabIndex(tab, idx) {
        if (tab.disabled) {
          return null;
        }

        return this.selectedIndex === idx ? 0 : -1;
      }
      /** Callback for when the focused state of a tab has changed. */

    }, {
      key: "_tabFocusChanged",
      value: function _tabFocusChanged(focusOrigin, index) {
        if (focusOrigin) {
          this._tabHeader.focusIndex = index;
        }
      }
    }]);

    return _MatTabGroupBase;
  }(_MatTabGroupMixinBase);

  _MatTabGroupBase.ɵfac = function _MatTabGroupBase_Factory(t) {
    return new (t || _MatTabGroupBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabGroupBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: _MatTabGroupBase,
    inputs: {
      headerPosition: "headerPosition",
      animationDuration: "animationDuration",
      disablePagination: "disablePagination",
      dynamicHeight: "dynamicHeight",
      selectedIndex: "selectedIndex",
      backgroundColor: "backgroundColor"
    },
    outputs: {
      selectedIndexChange: "selectedIndexChange",
      focusChange: "focusChange",
      animationDone: "animationDone",
      selectedTabChange: "selectedTabChange"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabGroupBase;
}();

var MatTabGroup = /*@__PURE__*/function () {
  var MatTabGroup = /*#__PURE__*/function (_MatTabGroupBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabGroup, _MatTabGroupBase2);

    var _super6 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabGroup);

    function MatTabGroup(elementRef, changeDetectorRef, defaultConfig, animationMode) {
      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabGroup);

      return _super6.call(this, elementRef, changeDetectorRef, defaultConfig, animationMode);
    }

    return MatTabGroup;
  }(_MatTabGroupBase);

  MatTabGroup.ɵfac = function MatTabGroup_Factory(t) {
    return new (t || MatTabGroup)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MAT_TABS_CONFIG, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabGroup.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MatTabGroup,
    selectors: [["mat-tab-group"]],
    contentQueries: function MatTabGroup_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MatTab, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._allTabs = _t);
      }
    },
    viewQuery: function MatTabGroup_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c3, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c4, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._tabBodyWrapper = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._tabHeader = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-group"],
    hostVars: 4,
    hostBindings: function MatTabGroup_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-group-dynamic-height", ctx.dynamicHeight)("mat-tab-group-inverted-header", ctx.headerPosition === "below");
      }
    },
    inputs: {
      color: "color",
      disableRipple: "disableRipple"
    },
    exportAs: ["matTabGroup"],
    features: [/*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵProvidersFeature"]([{
      provide: MAT_TAB_GROUP,
      useExisting: MatTabGroup
    }]), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    decls: 6,
    vars: 7,
    consts: [[3, "selectedIndex", "disableRipple", "disablePagination", "indexFocused", "selectFocusedIndex"], ["tabHeader", ""], ["class", "mat-tab-label mat-focus-indicator", "role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 3, "id", "mat-tab-label-active", "disabled", "matRippleDisabled", "click", "cdkFocusChange", 4, "ngFor", "ngForOf"], [1, "mat-tab-body-wrapper"], ["tabBodyWrapper", ""], ["role", "tabpanel", 3, "id", "mat-tab-body-active", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering", 4, "ngFor", "ngForOf"], ["role", "tab", "matTabLabelWrapper", "", "mat-ripple", "", "cdkMonitorElementFocus", "", 1, "mat-tab-label", "mat-focus-indicator", 3, "id", "disabled", "matRippleDisabled", "click", "cdkFocusChange"], [1, "mat-tab-label-content"], [3, "ngIf"], [3, "cdkPortalOutlet"], ["role", "tabpanel", 3, "id", "content", "position", "origin", "animationDuration", "_onCentered", "_onCentering"]],
    template: function MatTabGroup_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "mat-tab-header", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("indexFocused", function MatTabGroup_Template_mat_tab_header_indexFocused_0_listener($event) {
          return ctx._focusChanged($event);
        })("selectFocusedIndex", function MatTabGroup_Template_mat_tab_header_selectFocusedIndex_0_listener($event) {
          return ctx.selectedIndex = $event;
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](2, MatTabGroup_div_2_Template, 4, 14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtemplate"](5, MatTabGroup_mat_tab_body_5_Template, 1, 8, "mat-tab-body", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("selectedIndex", ctx.selectedIndex || 0)("disableRipple", ctx.disableRipple)("disablePagination", ctx.disablePagination);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx._tabs);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngForOf", ctx._tabs);
      }
    },
    directives: function directives() {
      return [MatTabHeader, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgForOf, MatTabLabelWrapper, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__.CdkMonitorFocus, _angular_common__WEBPACK_IMPORTED_MODULE_16__.NgIf, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.CdkPortalOutlet, MatTabBody];
    },
    styles: [".mat-tab-group{display:flex;flex-direction:column}.mat-tab-group.mat-tab-group-inverted-header{flex-direction:column-reverse}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{padding:0 12px}}@media(max-width: 959px){.mat-tab-label{padding:0 12px}}.mat-tab-group[mat-stretch-tabs]>.mat-tab-header .mat-tab-label{flex-basis:0;flex-grow:1}.mat-tab-body-wrapper{position:relative;overflow:hidden;display:flex;transition:height 500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-tab-body-wrapper{transition:none;animation:none}.mat-tab-body{top:0;left:0;right:0;bottom:0;position:absolute;display:block;overflow:hidden;flex-basis:100%}.mat-tab-body.mat-tab-body-active{position:relative;overflow-x:hidden;overflow-y:auto;z-index:1;flex-grow:1}.mat-tab-group.mat-tab-group-dynamic-height .mat-tab-body.mat-tab-body-active{overflow-y:hidden}\n"],
    encapsulation: 2
  });
  return MatTabGroup;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
// Boilerplate for applying mixins to MatTabLabelWrapper.

/** @docs-private */


var MatTabLabelWrapperBase = function MatTabLabelWrapperBase() {
  (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabLabelWrapperBase);
};

var _MatTabLabelWrapperMixinBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinDisabled)(MatTabLabelWrapperBase);

var MatTabLabelWrapper = /*@__PURE__*/function () {
  var MatTabLabelWrapper = /*#__PURE__*/function (_MatTabLabelWrapperMi) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabLabelWrapper, _MatTabLabelWrapperMi);

    var _super7 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabLabelWrapper);

    function MatTabLabelWrapper(elementRef) {
      var _this11;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabLabelWrapper);

      _this11 = _super7.call(this);
      _this11.elementRef = elementRef;
      return _this11;
    }
    /** Sets focus on the wrapper element */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(MatTabLabelWrapper, [{
      key: "focus",
      value: function focus() {
        this.elementRef.nativeElement.focus();
      }
    }, {
      key: "getOffsetLeft",
      value: function getOffsetLeft() {
        return this.elementRef.nativeElement.offsetLeft;
      }
    }, {
      key: "getOffsetWidth",
      value: function getOffsetWidth() {
        return this.elementRef.nativeElement.offsetWidth;
      }
    }]);

    return MatTabLabelWrapper;
  }(_MatTabLabelWrapperMixinBase);

  MatTabLabelWrapper.ɵfac = function MatTabLabelWrapper_Factory(t) {
    return new (t || MatTabLabelWrapper)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef));
  };

  MatTabLabelWrapper.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatTabLabelWrapper,
    selectors: [["", "matTabLabelWrapper", ""]],
    hostVars: 3,
    hostBindings: function MatTabLabelWrapper_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-disabled", !!ctx.disabled);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled);
      }
    },
    inputs: {
      disabled: "disabled"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabLabelWrapper;
}();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/** Config used to bind passive event listeners */


var passiveEventListenerOptions = /*@__PURE__*/(0,_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__.normalizePassiveListenerOptions)({
  passive: true
});
/**
 * The distance in pixels that will be overshot when scrolling a tab label into view. This helps
 * provide a small affordance to the label next to it.
 */

var EXAGGERATED_OVERSCROLL = 60;
/**
 * Amount of milliseconds to wait before starting to scroll the header automatically.
 * Set a little conservatively in order to handle fake events dispatched on touch devices.
 */

var HEADER_SCROLL_DELAY = 650;
/**
 * Interval in milliseconds at which to scroll the header
 * while the user is holding their pointer.
 */

var HEADER_SCROLL_INTERVAL = 100;

var MatPaginatedTabHeader = /*@__PURE__*/function () {
  var MatPaginatedTabHeader = /*#__PURE__*/function () {
    function MatPaginatedTabHeader(_elementRef, _changeDetectorRef, _viewportRuler, _dir, _ngZone, _platform, _animationMode) {
      var _this12 = this;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatPaginatedTabHeader);

      this._elementRef = _elementRef;
      this._changeDetectorRef = _changeDetectorRef;
      this._viewportRuler = _viewportRuler;
      this._dir = _dir;
      this._ngZone = _ngZone;
      this._platform = _platform;
      this._animationMode = _animationMode;
      /** The distance in pixels that the tab labels should be translated to the left. */

      this._scrollDistance = 0;
      /** Whether the header should scroll to the selected index after the view has been checked. */

      this._selectedIndexChanged = false;
      /** Emits when the component is destroyed. */

      this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
      /** Whether the controls for pagination should be displayed */

      this._showPaginationControls = false;
      /** Whether the tab list can be scrolled more towards the end of the tab label list. */

      this._disableScrollAfter = true;
      /** Whether the tab list can be scrolled more towards the beginning of the tab label list. */

      this._disableScrollBefore = true;
      /** Stream that will stop the automated scrolling. */

      this._stopScrolling = new rxjs__WEBPACK_IMPORTED_MODULE_12__.Subject();
      /**
       * Whether pagination should be disabled. This can be used to avoid unnecessary
       * layout recalculations if it's known that pagination won't be required.
       */

      this.disablePagination = false;
      this._selectedIndex = 0;
      /** Event emitted when the option is selected. */

      this.selectFocusedIndex = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter();
      /** Event emitted when a label is focused. */

      this.indexFocused = new _angular_core__WEBPACK_IMPORTED_MODULE_8__.EventEmitter(); // Bind the `mouseleave` event on the outside since it doesn't change anything in the view.

      _ngZone.runOutsideAngular(function () {
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.fromEvent)(_elementRef.nativeElement, 'mouseleave').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.takeUntil)(_this12._destroyed)).subscribe(function () {
          _this12._stopInterval();
        });
      });
    }
    /** The index of the active tab. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(MatPaginatedTabHeader, [{
      key: "selectedIndex",
      get: function get() {
        return this._selectedIndex;
      },
      set: function set(value) {
        value = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceNumberProperty)(value);

        if (this._selectedIndex != value) {
          this._selectedIndexChanged = true;
          this._selectedIndex = value;

          if (this._keyManager) {
            this._keyManager.updateActiveItem(value);
          }
        }
      }
    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        var _this13 = this;

        // We need to handle these events manually, because we want to bind passive event listeners.
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.fromEvent)(this._previousPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.takeUntil)(this._destroyed)).subscribe(function () {
          _this13._handlePaginatorPress('before');
        });
        (0,rxjs__WEBPACK_IMPORTED_MODULE_23__.fromEvent)(this._nextPaginator.nativeElement, 'touchstart', passiveEventListenerOptions).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.takeUntil)(this._destroyed)).subscribe(function () {
          _this13._handlePaginatorPress('after');
        });
      }
    }, {
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this14 = this;

        var dirChange = this._dir ? this._dir.change : (0,rxjs__WEBPACK_IMPORTED_MODULE_25__.of)('ltr');

        var resize = this._viewportRuler.change(150);

        var realign = function realign() {
          _this14.updatePagination();

          _this14._alignInkBarToSelectedTab();
        };

        this._keyManager = new _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__.FocusKeyManager(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap();

        this._keyManager.updateActiveItem(this._selectedIndex); // Defer the first call in order to allow for slower browsers to lay out the elements.
        // This helps in cases where the user lands directly on a page with paginated tabs.


        typeof requestAnimationFrame !== 'undefined' ? requestAnimationFrame(realign) : realign(); // On dir change or window resize, realign the ink bar and update the orientation of
        // the key manager if the direction has changed.

        (0,rxjs__WEBPACK_IMPORTED_MODULE_20__.merge)(dirChange, resize, this._items.changes).pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.takeUntil)(this._destroyed)).subscribe(function () {
          // We need to defer this to give the browser some time to recalculate
          // the element dimensions. The call has to be wrapped in `NgZone.run`,
          // because the viewport change handler runs outside of Angular.
          _this14._ngZone.run(function () {
            return Promise.resolve().then(realign);
          });

          _this14._keyManager.withHorizontalOrientation(_this14._getLayoutDirection());
        }); // If there is a change in the focus key manager we need to emit the `indexFocused`
        // event in order to provide a public event that notifies about focus changes. Also we realign
        // the tabs container by scrolling the new focused tab into the visible section.

        this._keyManager.change.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.takeUntil)(this._destroyed)).subscribe(function (newFocusIndex) {
          _this14.indexFocused.emit(newFocusIndex);

          _this14._setTabFocus(newFocusIndex);
        });
      }
    }, {
      key: "ngAfterContentChecked",
      value: function ngAfterContentChecked() {
        // If the number of tab labels have changed, check if scrolling should be enabled
        if (this._tabLabelCount != this._items.length) {
          this.updatePagination();
          this._tabLabelCount = this._items.length;

          this._changeDetectorRef.markForCheck();
        } // If the selected index has changed, scroll to the label and check if the scrolling controls
        // should be disabled.


        if (this._selectedIndexChanged) {
          this._scrollToLabel(this._selectedIndex);

          this._checkScrollingControls();

          this._alignInkBarToSelectedTab();

          this._selectedIndexChanged = false;

          this._changeDetectorRef.markForCheck();
        } // If the scroll distance has been changed (tab selected, focused, scroll controls activated),
        // then translate the header to reflect this.


        if (this._scrollDistanceChanged) {
          this._updateTabScrollPosition();

          this._scrollDistanceChanged = false;

          this._changeDetectorRef.markForCheck();
        }
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._destroyed.next();

        this._destroyed.complete();

        this._stopScrolling.complete();
      }
      /** Handles keyboard events on the header. */

    }, {
      key: "_handleKeydown",
      value: function _handleKeydown(event) {
        // We don't handle any key bindings with a modifier key.
        if ((0,_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_26__.hasModifierKey)(event)) {
          return;
        }

        switch (event.keyCode) {
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_26__.ENTER:
          case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_26__.SPACE:
            if (this.focusIndex !== this.selectedIndex) {
              this.selectFocusedIndex.emit(this.focusIndex);

              this._itemSelected(event);
            }

            break;

          default:
            this._keyManager.onKeydown(event);

        }
      }
      /**
       * Callback for when the MutationObserver detects that the content has changed.
       */

    }, {
      key: "_onContentChanges",
      value: function _onContentChanges() {
        var _this15 = this;

        var textContent = this._elementRef.nativeElement.textContent; // We need to diff the text content of the header, because the MutationObserver callback
        // will fire even if the text content didn't change which is inefficient and is prone
        // to infinite loops if a poorly constructed expression is passed in (see #14249).

        if (textContent !== this._currentTextContent) {
          this._currentTextContent = textContent || ''; // The content observer runs outside the `NgZone` by default, which
          // means that we need to bring the callback back in ourselves.

          this._ngZone.run(function () {
            _this15.updatePagination();

            _this15._alignInkBarToSelectedTab();

            _this15._changeDetectorRef.markForCheck();
          });
        }
      }
      /**
       * Updates the view whether pagination should be enabled or not.
       *
       * WARNING: Calling this method can be very costly in terms of performance. It should be called
       * as infrequently as possible from outside of the Tabs component as it causes a reflow of the
       * page.
       */

    }, {
      key: "updatePagination",
      value: function updatePagination() {
        this._checkPaginationEnabled();

        this._checkScrollingControls();

        this._updateTabScrollPosition();
      }
      /** Tracks which element has focus; used for keyboard navigation */

    }, {
      key: "focusIndex",
      get: function get() {
        return this._keyManager ? this._keyManager.activeItemIndex : 0;
      }
      /** When the focus index is set, we must manually send focus to the correct label */
      ,
      set: function set(value) {
        if (!this._isValidIndex(value) || this.focusIndex === value || !this._keyManager) {
          return;
        }

        this._keyManager.setActiveItem(value);
      }
      /**
       * Determines if an index is valid.  If the tabs are not ready yet, we assume that the user is
       * providing a valid index and return true.
       */

    }, {
      key: "_isValidIndex",
      value: function _isValidIndex(index) {
        if (!this._items) {
          return true;
        }

        var tab = this._items ? this._items.toArray()[index] : null;
        return !!tab && !tab.disabled;
      }
      /**
       * Sets focus on the HTML element for the label wrapper and scrolls it into the view if
       * scrolling is enabled.
       */

    }, {
      key: "_setTabFocus",
      value: function _setTabFocus(tabIndex) {
        if (this._showPaginationControls) {
          this._scrollToLabel(tabIndex);
        }

        if (this._items && this._items.length) {
          this._items.toArray()[tabIndex].focus(); // Do not let the browser manage scrolling to focus the element, this will be handled
          // by using translation. In LTR, the scroll left should be 0. In RTL, the scroll width
          // should be the full width minus the offset width.


          var containerEl = this._tabListContainer.nativeElement;

          var dir = this._getLayoutDirection();

          if (dir == 'ltr') {
            containerEl.scrollLeft = 0;
          } else {
            containerEl.scrollLeft = containerEl.scrollWidth - containerEl.offsetWidth;
          }
        }
      }
      /** The layout direction of the containing app. */

    }, {
      key: "_getLayoutDirection",
      value: function _getLayoutDirection() {
        return this._dir && this._dir.value === 'rtl' ? 'rtl' : 'ltr';
      }
      /** Performs the CSS transformation on the tab list that will cause the list to scroll. */

    }, {
      key: "_updateTabScrollPosition",
      value: function _updateTabScrollPosition() {
        if (this.disablePagination) {
          return;
        }

        var scrollDistance = this.scrollDistance;
        var translateX = this._getLayoutDirection() === 'ltr' ? -scrollDistance : scrollDistance; // Don't use `translate3d` here because we don't want to create a new layer. A new layer
        // seems to cause flickering and overflow in Internet Explorer. For example, the ink bar
        // and ripples will exceed the boundaries of the visible tab bar.
        // See: https://github.com/angular/components/issues/10276
        // We round the `transform` here, because transforms with sub-pixel precision cause some
        // browsers to blur the content of the element.

        this._tabList.nativeElement.style.transform = "translateX(".concat(Math.round(translateX), "px)"); // Setting the `transform` on IE will change the scroll offset of the parent, causing the
        // position to be thrown off in some cases. We have to reset it ourselves to ensure that
        // it doesn't get thrown off. Note that we scope it only to IE and Edge, because messing
        // with the scroll position throws off Chrome 71+ in RTL mode (see #14689).

        if (this._platform.TRIDENT || this._platform.EDGE) {
          this._tabListContainer.nativeElement.scrollLeft = 0;
        }
      }
      /** Sets the distance in pixels that the tab header should be transformed in the X-axis. */

    }, {
      key: "scrollDistance",
      get: function get() {
        return this._scrollDistance;
      },
      set: function set(value) {
        this._scrollTo(value);
      }
      /**
       * Moves the tab list in the 'before' or 'after' direction (towards the beginning of the list or
       * the end of the list, respectively). The distance to scroll is computed to be a third of the
       * length of the tab list view window.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */

    }, {
      key: "_scrollHeader",
      value: function _scrollHeader(direction) {
        var viewLength = this._tabListContainer.nativeElement.offsetWidth; // Move the scroll distance one-third the length of the tab list's viewport.

        var scrollAmount = (direction == 'before' ? -1 : 1) * viewLength / 3;
        return this._scrollTo(this._scrollDistance + scrollAmount);
      }
      /** Handles click events on the pagination arrows. */

    }, {
      key: "_handlePaginatorClick",
      value: function _handlePaginatorClick(direction) {
        this._stopInterval();

        this._scrollHeader(direction);
      }
      /**
       * Moves the tab list such that the desired tab label (marked by index) is moved into view.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */

    }, {
      key: "_scrollToLabel",
      value: function _scrollToLabel(labelIndex) {
        if (this.disablePagination) {
          return;
        }

        var selectedLabel = this._items ? this._items.toArray()[labelIndex] : null;

        if (!selectedLabel) {
          return;
        } // The view length is the visible width of the tab labels.


        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        var _selectedLabel$elemen = selectedLabel.elementRef.nativeElement,
            offsetLeft = _selectedLabel$elemen.offsetLeft,
            offsetWidth = _selectedLabel$elemen.offsetWidth;
        var labelBeforePos, labelAfterPos;

        if (this._getLayoutDirection() == 'ltr') {
          labelBeforePos = offsetLeft;
          labelAfterPos = labelBeforePos + offsetWidth;
        } else {
          labelAfterPos = this._tabList.nativeElement.offsetWidth - offsetLeft;
          labelBeforePos = labelAfterPos - offsetWidth;
        }

        var beforeVisiblePos = this.scrollDistance;
        var afterVisiblePos = this.scrollDistance + viewLength;

        if (labelBeforePos < beforeVisiblePos) {
          // Scroll header to move label to the before direction
          this.scrollDistance -= beforeVisiblePos - labelBeforePos + EXAGGERATED_OVERSCROLL;
        } else if (labelAfterPos > afterVisiblePos) {
          // Scroll header to move label to the after direction
          this.scrollDistance += labelAfterPos - afterVisiblePos + EXAGGERATED_OVERSCROLL;
        }
      }
      /**
       * Evaluate whether the pagination controls should be displayed. If the scroll width of the
       * tab list is wider than the size of the header container, then the pagination controls should
       * be shown.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */

    }, {
      key: "_checkPaginationEnabled",
      value: function _checkPaginationEnabled() {
        if (this.disablePagination) {
          this._showPaginationControls = false;
        } else {
          var isEnabled = this._tabList.nativeElement.scrollWidth > this._elementRef.nativeElement.offsetWidth;

          if (!isEnabled) {
            this.scrollDistance = 0;
          }

          if (isEnabled !== this._showPaginationControls) {
            this._changeDetectorRef.markForCheck();
          }

          this._showPaginationControls = isEnabled;
        }
      }
      /**
       * Evaluate whether the before and after controls should be enabled or disabled.
       * If the header is at the beginning of the list (scroll distance is equal to 0) then disable the
       * before button. If the header is at the end of the list (scroll distance is equal to the
       * maximum distance we can scroll), then disable the after button.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */

    }, {
      key: "_checkScrollingControls",
      value: function _checkScrollingControls() {
        if (this.disablePagination) {
          this._disableScrollAfter = this._disableScrollBefore = true;
        } else {
          // Check if the pagination arrows should be activated.
          this._disableScrollBefore = this.scrollDistance == 0;
          this._disableScrollAfter = this.scrollDistance == this._getMaxScrollDistance();

          this._changeDetectorRef.markForCheck();
        }
      }
      /**
       * Determines what is the maximum length in pixels that can be set for the scroll distance. This
       * is equal to the difference in width between the tab list container and tab header container.
       *
       * This is an expensive call that forces a layout reflow to compute box and scroll metrics and
       * should be called sparingly.
       */

    }, {
      key: "_getMaxScrollDistance",
      value: function _getMaxScrollDistance() {
        var lengthOfTabList = this._tabList.nativeElement.scrollWidth;
        var viewLength = this._tabListContainer.nativeElement.offsetWidth;
        return lengthOfTabList - viewLength || 0;
      }
      /** Tells the ink-bar to align itself to the current label wrapper */

    }, {
      key: "_alignInkBarToSelectedTab",
      value: function _alignInkBarToSelectedTab() {
        var selectedItem = this._items && this._items.length ? this._items.toArray()[this.selectedIndex] : null;
        var selectedLabelWrapper = selectedItem ? selectedItem.elementRef.nativeElement : null;

        if (selectedLabelWrapper) {
          this._inkBar.alignToElement(selectedLabelWrapper);
        } else {
          this._inkBar.hide();
        }
      }
      /** Stops the currently-running paginator interval.  */

    }, {
      key: "_stopInterval",
      value: function _stopInterval() {
        this._stopScrolling.next();
      }
      /**
       * Handles the user pressing down on one of the paginators.
       * Starts scrolling the header after a certain amount of time.
       * @param direction In which direction the paginator should be scrolled.
       */

    }, {
      key: "_handlePaginatorPress",
      value: function _handlePaginatorPress(direction, mouseEvent) {
        var _this16 = this;

        // Don't start auto scrolling for right mouse button clicks. Note that we shouldn't have to
        // null check the `button`, but we do it so we don't break tests that use fake events.
        if (mouseEvent && mouseEvent.button != null && mouseEvent.button !== 0) {
          return;
        } // Avoid overlapping timers.


        this._stopInterval(); // Start a timer after the delay and keep firing based on the interval.


        (0,rxjs__WEBPACK_IMPORTED_MODULE_27__.timer)(HEADER_SCROLL_DELAY, HEADER_SCROLL_INTERVAL) // Keep the timer going until something tells it to stop or the component is destroyed.
        .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.takeUntil)((0,rxjs__WEBPACK_IMPORTED_MODULE_20__.merge)(this._stopScrolling, this._destroyed))).subscribe(function () {
          var _this16$_scrollHeader = _this16._scrollHeader(direction),
              maxScrollDistance = _this16$_scrollHeader.maxScrollDistance,
              distance = _this16$_scrollHeader.distance; // Stop the timer if we've reached the start or the end.


          if (distance === 0 || distance >= maxScrollDistance) {
            _this16._stopInterval();
          }
        });
      }
      /**
       * Scrolls the header to a given position.
       * @param position Position to which to scroll.
       * @returns Information on the current scroll distance and the maximum.
       */

    }, {
      key: "_scrollTo",
      value: function _scrollTo(position) {
        if (this.disablePagination) {
          return {
            maxScrollDistance: 0,
            distance: 0
          };
        }

        var maxScrollDistance = this._getMaxScrollDistance();

        this._scrollDistance = Math.max(0, Math.min(maxScrollDistance, position)); // Mark that the scroll distance has changed so that after the view is checked, the CSS
        // transformation can move the header.

        this._scrollDistanceChanged = true;

        this._checkScrollingControls();

        return {
          maxScrollDistance: maxScrollDistance,
          distance: this._scrollDistance
        };
      }
    }]);

    return MatPaginatedTabHeader;
  }();

  MatPaginatedTabHeader.ɵfac = function MatPaginatedTabHeader_Factory(t) {
    return new (t || MatPaginatedTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  MatPaginatedTabHeader.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatPaginatedTabHeader,
    inputs: {
      disablePagination: "disablePagination"
    }
  });
  return MatPaginatedTabHeader;
}();

var _MatTabHeaderBase = /*@__PURE__*/function () {
  var _MatTabHeaderBase = /*#__PURE__*/function (_MatPaginatedTabHeade) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(_MatTabHeaderBase, _MatPaginatedTabHeade);

    var _super8 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(_MatTabHeaderBase);

    function _MatTabHeaderBase(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
      var _this17;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, _MatTabHeaderBase);

      _this17 = _super8.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      _this17._disableRipple = false;
      return _this17;
    }
    /** Whether the ripple effect is disabled or not. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(_MatTabHeaderBase, [{
      key: "disableRipple",
      get: function get() {
        return this._disableRipple;
      },
      set: function set(value) {
        this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceBooleanProperty)(value);
      }
    }, {
      key: "_itemSelected",
      value: function _itemSelected(event) {
        event.preventDefault();
      }
    }]);

    return _MatTabHeaderBase;
  }(MatPaginatedTabHeader);

  _MatTabHeaderBase.ɵfac = function _MatTabHeaderBase_Factory(t) {
    return new (t || _MatTabHeaderBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabHeaderBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: _MatTabHeaderBase,
    inputs: {
      disableRipple: "disableRipple"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabHeaderBase;
}();

var MatTabHeader = /*@__PURE__*/function () {
  var MatTabHeader = /*#__PURE__*/function (_MatTabHeaderBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabHeader, _MatTabHeaderBase2);

    var _super9 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabHeader);

    function MatTabHeader(elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode) {
      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabHeader);

      return _super9.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
    }

    return MatTabHeader;
  }(_MatTabHeaderBase);

  MatTabHeader.ɵfac = function MatTabHeader_Factory(t) {
    return new (t || MatTabHeader)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabHeader.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MatTabHeader,
    selectors: [["mat-tab-header"]],
    contentQueries: function MatTabHeader_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MatTabLabelWrapper, 4);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabHeader_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](MatInkBar, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c8, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-header"],
    hostVars: 4,
    hostBindings: function MatTabHeader_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl");
      }
    },
    inputs: {
      selectedIndex: "selectedIndex"
    },
    outputs: {
      selectFocusedIndex: "selectFocusedIndex",
      indexFocused: "indexFocused"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    ngContentSelectors: _c0,
    decls: 13,
    vars: 8,
    consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-label-container", 3, "keydown"], ["tabListContainer", ""], ["role", "tablist", 1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-labels"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
    template: function MatTabHeader_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MatTabHeader_Template_div_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabHeader_Template_div_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabHeader_Template_div_touchend_0_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function MatTabHeader_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cdkObserveContent", function MatTabHeader_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mousedown", function MatTabHeader_Template_div_mousedown_10_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabHeader_Template_div_click_10_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabHeader_Template_div_touchend_10_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__.CdkObserveContent, MatInkBar],
    styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-labels{display:flex}[mat-align-tabs=center]>.mat-tab-header .mat-tab-labels{justify-content:center}[mat-align-tabs=end]>.mat-tab-header .mat-tab-labels{justify-content:flex-end}.mat-tab-label-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}._mat-animation-noopable.mat-tab-list{transition:none;animation:none}.mat-tab-label{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;position:relative}.mat-tab-label:focus{outline:none}.mat-tab-label:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-label:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-label.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-label.mat-tab-disabled{opacity:.5}.mat-tab-label .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-label{opacity:1}@media(max-width: 599px){.mat-tab-label{min-width:72px}}\n"],
    encapsulation: 2
  });
  return MatTabHeader;
}();

var _MatTabNavBase = /*@__PURE__*/function () {
  var _MatTabNavBase = /*#__PURE__*/function (_MatPaginatedTabHeade2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(_MatTabNavBase, _MatPaginatedTabHeade2);

    var _super10 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(_MatTabNavBase);

    function _MatTabNavBase(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
      var _this18;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, _MatTabNavBase);

      _this18 = _super10.call(this, elementRef, changeDetectorRef, viewportRuler, dir, ngZone, platform, animationMode);
      _this18._disableRipple = false;
      /** Theme color of the nav bar. */

      _this18.color = 'primary';
      return _this18;
    }
    /** Background color of the tab nav. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(_MatTabNavBase, [{
      key: "backgroundColor",
      get: function get() {
        return this._backgroundColor;
      },
      set: function set(value) {
        var classList = this._elementRef.nativeElement.classList;
        classList.remove("mat-background-".concat(this.backgroundColor));

        if (value) {
          classList.add("mat-background-".concat(value));
        }

        this._backgroundColor = value;
      }
      /** Whether the ripple effect is disabled or not. */

    }, {
      key: "disableRipple",
      get: function get() {
        return this._disableRipple;
      },
      set: function set(value) {
        this._disableRipple = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceBooleanProperty)(value);
      }
    }, {
      key: "_itemSelected",
      value: function _itemSelected() {// noop
      }
    }, {
      key: "ngAfterContentInit",
      value: function ngAfterContentInit() {
        var _this19 = this;

        // We need this to run before the `changes` subscription in parent to ensure that the
        // selectedIndex is up-to-date by the time the super class starts looking for it.
        this._items.changes.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_15__.startWith)(null), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_24__.takeUntil)(this._destroyed)).subscribe(function () {
          _this19.updateActiveLink();
        });

        (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(_MatTabNavBase.prototype), "ngAfterContentInit", this).call(this);
      }
      /** Notifies the component that the active link has been changed. */

    }, {
      key: "updateActiveLink",
      value: function updateActiveLink() {
        if (!this._items) {
          return;
        }

        var items = this._items.toArray();

        for (var i = 0; i < items.length; i++) {
          if (items[i].active) {
            this.selectedIndex = i;

            this._changeDetectorRef.markForCheck();

            return;
          }
        } // The ink bar should hide itself if no items are active.


        this.selectedIndex = -1;

        this._inkBar.hide();
      }
    }]);

    return _MatTabNavBase;
  }(MatPaginatedTabHeader);

  _MatTabNavBase.ɵfac = function _MatTabNavBase_Factory(t) {
    return new (t || _MatTabNavBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabNavBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: _MatTabNavBase,
    inputs: {
      color: "color",
      backgroundColor: "backgroundColor",
      disableRipple: "disableRipple"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabNavBase;
}();

var MatTabNav = /*@__PURE__*/function () {
  var MatTabNav = /*#__PURE__*/function (_MatTabNavBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabNav, _MatTabNavBase2);

    var _super11 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabNav);

    function MatTabNav(elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode) {
      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabNav);

      return _super11.call(this, elementRef, dir, ngZone, changeDetectorRef, viewportRuler, platform, animationMode);
    }

    return MatTabNav;
  }(_MatTabNavBase);

  MatTabNav.ɵfac = function MatTabNav_Factory(t) {
    return new (t || MatTabNav)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_18__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_28__.ViewportRuler), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabNav.ɵcmp =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
    type: MatTabNav,
    selectors: [["", "mat-tab-nav-bar", ""]],
    contentQueries: function MatTabNav_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵcontentQuery"](dirIndex, MatTabLink, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._items = _t);
      }
    },
    viewQuery: function MatTabNav_Query(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](MatInkBar, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c5, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c6, 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c7, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵviewQuery"](_c8, 5);
      }

      if (rf & 2) {
        var _t;

        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._inkBar = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._tabListContainer = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._tabList = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._nextPaginator = _t.first);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵloadQuery"]()) && (ctx._previousPaginator = _t.first);
      }
    },
    hostAttrs: [1, "mat-tab-nav-bar", "mat-tab-header"],
    hostVars: 10,
    hostBindings: function MatTabNav_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-header-pagination-controls-enabled", ctx._showPaginationControls)("mat-tab-header-rtl", ctx._getLayoutDirection() == "rtl")("mat-primary", ctx.color !== "warn" && ctx.color !== "accent")("mat-accent", ctx.color === "accent")("mat-warn", ctx.color === "warn");
      }
    },
    inputs: {
      color: "color"
    },
    exportAs: ["matTabNavBar", "matTabNav"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
    attrs: _c9,
    ngContentSelectors: _c0,
    decls: 13,
    vars: 8,
    consts: [["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-before", "mat-elevation-z4", 3, "matRippleDisabled", "click", "mousedown", "touchend"], ["previousPaginator", ""], [1, "mat-tab-header-pagination-chevron"], [1, "mat-tab-link-container", 3, "keydown"], ["tabListContainer", ""], [1, "mat-tab-list", 3, "cdkObserveContent"], ["tabList", ""], [1, "mat-tab-links"], ["aria-hidden", "true", "mat-ripple", "", 1, "mat-tab-header-pagination", "mat-tab-header-pagination-after", "mat-elevation-z4", 3, "matRippleDisabled", "mousedown", "click", "touchend"], ["nextPaginator", ""]],
    template: function MatTabNav_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojectionDef"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function MatTabNav_Template_div_click_0_listener() {
          return ctx._handlePaginatorClick("before");
        })("mousedown", function MatTabNav_Template_div_mousedown_0_listener($event) {
          return ctx._handlePaginatorPress("before", $event);
        })("touchend", function MatTabNav_Template_div_touchend_0_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](3, "div", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("keydown", function MatTabNav_Template_div_keydown_3_listener($event) {
          return ctx._handleKeydown($event);
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("cdkObserveContent", function MatTabNav_Template_div_cdkObserveContent_5_listener() {
          return ctx._onContentChanges();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵprojection"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](9, "mat-ink-bar");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](10, "div", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("mousedown", function MatTabNav_Template_div_mousedown_10_listener($event) {
          return ctx._handlePaginatorPress("after", $event);
        })("click", function MatTabNav_Template_div_click_10_listener() {
          return ctx._handlePaginatorClick("after");
        })("touchend", function MatTabNav_Template_div_touchend_10_listener() {
          return ctx._stopInterval();
        });
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelement"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollBefore);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollBefore || ctx.disableRipple);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-header-pagination-disabled", ctx._disableScrollAfter);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("matRippleDisabled", ctx._disableScrollAfter || ctx.disableRipple);
      }
    },
    directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__.CdkObserveContent, MatInkBar],
    styles: [".mat-tab-header{display:flex;overflow:hidden;position:relative;flex-shrink:0}.mat-tab-header-pagination{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:relative;display:none;justify-content:center;align-items:center;min-width:32px;cursor:pointer;z-index:2;-webkit-tap-highlight-color:transparent;touch-action:none}.mat-tab-header-pagination-controls-enabled .mat-tab-header-pagination{display:flex}.mat-tab-header-pagination-before,.mat-tab-header-rtl .mat-tab-header-pagination-after{padding-left:4px}.mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-rtl .mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(-135deg)}.mat-tab-header-rtl .mat-tab-header-pagination-before,.mat-tab-header-pagination-after{padding-right:4px}.mat-tab-header-rtl .mat-tab-header-pagination-before .mat-tab-header-pagination-chevron,.mat-tab-header-pagination-after .mat-tab-header-pagination-chevron{transform:rotate(45deg)}.mat-tab-header-pagination-chevron{border-style:solid;border-width:2px 2px 0 0;content:\"\";height:8px;width:8px}.mat-tab-header-pagination-disabled{box-shadow:none;cursor:default}.mat-tab-list{flex-grow:1;position:relative;transition:transform 500ms cubic-bezier(0.35, 0, 0.25, 1)}.mat-tab-links{display:flex}[mat-align-tabs=center]>.mat-tab-link-container .mat-tab-links{justify-content:center}[mat-align-tabs=end]>.mat-tab-link-container .mat-tab-links{justify-content:flex-end}.mat-ink-bar{position:absolute;bottom:0;height:2px;transition:500ms cubic-bezier(0.35, 0, 0.25, 1)}._mat-animation-noopable.mat-ink-bar{transition:none;animation:none}.mat-tab-group-inverted-header .mat-ink-bar{bottom:auto;top:0}.cdk-high-contrast-active .mat-ink-bar{outline:solid 2px;height:0}.mat-tab-link-container{display:flex;flex-grow:1;overflow:hidden;z-index:1}.mat-tab-link{height:48px;padding:0 24px;cursor:pointer;box-sizing:border-box;opacity:.6;min-width:160px;text-align:center;display:inline-flex;justify-content:center;align-items:center;white-space:nowrap;vertical-align:top;text-decoration:none;position:relative;overflow:hidden;-webkit-tap-highlight-color:transparent}.mat-tab-link:focus{outline:none}.mat-tab-link:focus:not(.mat-tab-disabled){opacity:1}.cdk-high-contrast-active .mat-tab-link:focus{outline:dotted 2px;outline-offset:-2px}.mat-tab-link.mat-tab-disabled{cursor:default}.cdk-high-contrast-active .mat-tab-link.mat-tab-disabled{opacity:.5}.mat-tab-link .mat-tab-label-content{display:inline-flex;justify-content:center;align-items:center;white-space:nowrap}.cdk-high-contrast-active .mat-tab-link{opacity:1}[mat-stretch-tabs] .mat-tab-link{flex-basis:0;flex-grow:1}.mat-tab-link.mat-tab-disabled{pointer-events:none}@media(max-width: 599px){.mat-tab-link{min-width:72px}}\n"],
    encapsulation: 2
  });
  return MatTabNav;
}(); // Boilerplate for applying mixins to MatTabLink.


var MatTabLinkMixinBase = function MatTabLinkMixinBase() {
  (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabLinkMixinBase);
};

var _MatTabLinkMixinBase = /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinTabIndex)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinDisableRipple)( /*@__PURE__*/(0,_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.mixinDisabled)(MatTabLinkMixinBase)));

var _MatTabLinkBase = /*@__PURE__*/function () {
  var _MatTabLinkBase = /*#__PURE__*/function (_MatTabLinkMixinBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(_MatTabLinkBase, _MatTabLinkMixinBase2);

    var _super12 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(_MatTabLinkBase);

    function _MatTabLinkBase(_tabNavBar,
    /** @docs-private */
    elementRef, globalRippleOptions, tabIndex, _focusMonitor, animationMode) {
      var _this20;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, _MatTabLinkBase);

      _this20 = _super12.call(this);
      _this20._tabNavBar = _tabNavBar;
      _this20.elementRef = elementRef;
      _this20._focusMonitor = _focusMonitor;
      /** Whether the tab link is active or not. */

      _this20._isActive = false;
      _this20.rippleConfig = globalRippleOptions || {};
      _this20.tabIndex = parseInt(tabIndex) || 0;

      if (animationMode === 'NoopAnimations') {
        _this20.rippleConfig.animation = {
          enterDuration: 0,
          exitDuration: 0
        };
      }

      return _this20;
    }
    /** Whether the link is active. */


    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(_MatTabLinkBase, [{
      key: "active",
      get: function get() {
        return this._isActive;
      },
      set: function set(value) {
        var newValue = (0,_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_19__.coerceBooleanProperty)(value);

        if (newValue !== this._isActive) {
          this._isActive = value;

          this._tabNavBar.updateActiveLink();
        }
      }
      /**
       * Whether ripples are disabled on interaction.
       * @docs-private
       */

    }, {
      key: "rippleDisabled",
      get: function get() {
        return this.disabled || this.disableRipple || this._tabNavBar.disableRipple || !!this.rippleConfig.disabled;
      }
      /** Focuses the tab link. */

    }, {
      key: "focus",
      value: function focus() {
        this.elementRef.nativeElement.focus();
      }
    }, {
      key: "ngAfterViewInit",
      value: function ngAfterViewInit() {
        this._focusMonitor.monitor(this.elementRef);
      }
    }, {
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        this._focusMonitor.stopMonitoring(this.elementRef);
      }
    }]);

    return _MatTabLinkBase;
  }(_MatTabLinkMixinBase);

  _MatTabLinkBase.ɵfac = function _MatTabLinkBase_Factory(t) {
    return new (t || _MatTabLinkBase)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_MatTabNavBase), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  _MatTabLinkBase.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: _MatTabLinkBase,
    inputs: {
      active: "active"
    },
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return _MatTabLinkBase;
}();

var MatTabLink = /*@__PURE__*/function () {
  var MatTabLink = /*#__PURE__*/function (_MatTabLinkBase2) {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__.default)(MatTabLink, _MatTabLinkBase2);

    var _super13 = (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createSuper__WEBPACK_IMPORTED_MODULE_5__.default)(MatTabLink);

    function MatTabLink(tabNavBar, elementRef, ngZone, platform, globalRippleOptions, tabIndex, focusMonitor, animationMode) {
      var _this21;

      (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabLink);

      _this21 = _super13.call(this, tabNavBar, elementRef, globalRippleOptions, tabIndex, focusMonitor, animationMode);
      _this21._tabLinkRipple = new _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.RippleRenderer((0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_0__.default)(_this21), ngZone, elementRef, platform);

      _this21._tabLinkRipple.setupTriggerEvents(elementRef.nativeElement);

      return _this21;
    }

    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_7__.default)(MatTabLink, [{
      key: "ngOnDestroy",
      value: function ngOnDestroy() {
        (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_get__WEBPACK_IMPORTED_MODULE_2__.default)((0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__.default)(MatTabLink.prototype), "ngOnDestroy", this).call(this);

        this._tabLinkRipple._removeTriggerEvents();
      }
    }]);

    return MatTabLink;
  }(_MatTabLinkBase);

  MatTabLink.ɵfac = function MatTabLink_Factory(t) {
    return new (t || MatTabLink)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](MatTabNav), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_8__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_22__.Platform), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MAT_RIPPLE_GLOBAL_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__.ANIMATION_MODULE_TYPE, 8));
  };

  MatTabLink.ɵdir =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineDirective"]({
    type: MatTabLink,
    selectors: [["", "mat-tab-link", ""], ["", "matTabLink", ""]],
    hostAttrs: [1, "mat-tab-link", "mat-focus-indicator"],
    hostVars: 7,
    hostBindings: function MatTabLink_HostBindings(rf, ctx) {
      if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵattribute"]("aria-current", ctx.active ? "page" : null)("aria-disabled", ctx.disabled)("tabIndex", ctx.tabIndex);
        _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵclassProp"]("mat-tab-disabled", ctx.disabled)("mat-tab-label-active", ctx.active);
      }
    },
    inputs: {
      disabled: "disabled",
      disableRipple: "disableRipple",
      tabIndex: "tabIndex"
    },
    exportAs: ["matTabLink"],
    features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]]
  });
  return MatTabLink;
}();

var MatTabsModule = /*@__PURE__*/function () {
  var MatTabsModule = function MatTabsModule() {
    (0,D_Projetos_TFTManager_FrontEnd_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_6__.default)(this, MatTabsModule);
  };

  MatTabsModule.ɵfac = function MatTabsModule_Factory(t) {
    return new (t || MatTabsModule)();
  };

  MatTabsModule.ɵmod =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
    type: MatTabsModule
  });
  MatTabsModule.ɵinj =
  /*@__PURE__*/

  /*@__PURE__*/
  _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
    imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__.A11yModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule]
  });
  return MatTabsModule;
}();
/*@__PURE__*/


(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](MatTabsModule, {
    declarations: function declarations() {
      return [MatTabGroup, MatTabLabel, MatTab, MatInkBar, MatTabLabelWrapper, MatTabNav, MatTabLink, MatTabBody, MatTabBodyPortal, MatTabHeader, MatTabContent];
    },
    imports: function imports() {
      return [_angular_common__WEBPACK_IMPORTED_MODULE_16__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__.PortalModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatRippleModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_29__.ObserversModule, _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_21__.A11yModule];
    },
    exports: function exports() {
      return [_angular_material_core__WEBPACK_IMPORTED_MODULE_11__.MatCommonModule, MatTabGroup, MatTabLabel, MatTab, MatTabNav, MatTabLink, MatTabContent];
    }
  });
})();
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

/**
 * Generated bundle index. Do not edit.
 */


 //# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 4341:
/*!********************************************************!*\
  !*** ./src/app/main/tournament/list/list.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListComponent": function() { return /* binding */ ListComponent; }
/* harmony export */ });
/* harmony import */ var src_app_shared_services_tournament_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@shared/services/tournament.service */ 7104);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 5366);
/* harmony import */ var _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@shared/components/content/content.component */ 5101);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 1116);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4258);






var _c0 = function (a1) { return ["/tournament/view", a1]; };
function ListComponent_div_1_Template(rf, ctx) {
    if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, "Some quick example text to build on the card title and make up the bulk of the card's content.");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, "Go somewhere");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    }
    if (rf & 2) {
        var tournament_r1 = ctx.$implicit;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpropertyInterpolate"]("src", tournament_r1.banner, _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](tournament_r1.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpureFunction1"](3, _c0, tournament_r1.id));
    }
}
var ListComponent = /** @class */ /*@__PURE__*/ (function () {
    function ListComponent(tournamentService) {
        this.tournamentService = tournamentService;
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.tournamentService.getAllTournamentsJogaveis().subscribe(function (tournaments) {
            _this.tournaments = tournaments;
            console.log(_this.tournaments);
        });
    };
    ListComponent.ɵfac = function ListComponent_Factory(t) { return new (t || ListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](src_app_shared_services_tournament_service__WEBPACK_IMPORTED_MODULE_0__.TournamentService)); };
    ListComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: ListComponent, selectors: [["app-list"]], decls: 2, vars: 1, consts: [["class", "col-4", 4, "ngFor", "ngForOf"], [1, "col-4"], [1, "card"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], [1, "card-title"], [1, "card-text"], [1, "btn", "btn-primary", 3, "routerLink"]], template: function ListComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](1, ListComponent_div_1_Template, 10, 5, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);
                _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.tournaments);
            }
        }, directives: [_shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_1__.ContentComponent, _angular_common__WEBPACK_IMPORTED_MODULE_3__.NgForOf, _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterLinkWithHref], styles: [""] });
    return ListComponent;
}());



/***/ }),

/***/ 5518:
/*!******************************************************!*\
  !*** ./src/app/main/tournament/tournament-routes.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TournamentRoutes": function() { return /* binding */ TournamentRoutes; }
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4258);
/* harmony import */ var src_app_core_interceptors_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/@core/interceptors/auth.guard */ 9006);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list/list.component */ 4341);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view/view.component */ 1531);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5366);






var routes = [
    {
        path: "list",
        component: _list_list_component__WEBPACK_IMPORTED_MODULE_1__.ListComponent,
        canActivate: [src_app_core_interceptors_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { permission: "" }
    },
    {
        path: "view/:tournamentId",
        component: _view_view_component__WEBPACK_IMPORTED_MODULE_2__.ViewComponent,
        canActivate: [src_app_core_interceptors_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard],
        data: { permission: "" }
    },
    {
        path: '', redirectTo: 'list', pathMatch: 'full'
    }
];
var TournamentRoutes = /** @class */ /*@__PURE__*/ (function () {
    function TournamentRoutes() {
    }
    TournamentRoutes.ɵfac = function TournamentRoutes_Factory(t) { return new (t || TournamentRoutes)(); };
    TournamentRoutes.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({ type: TournamentRoutes });
    TournamentRoutes.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] });
    return TournamentRoutes;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](TournamentRoutes, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule] }); })();


/***/ }),

/***/ 8869:
/*!******************************************************!*\
  !*** ./src/app/main/tournament/tournament.module.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TournamentModule": function() { return /* binding */ TournamentModule; }
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 1116);
/* harmony import */ var _list_list_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list/list.component */ 4341);
/* harmony import */ var _tournament_routes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tournament-routes */ 5518);
/* harmony import */ var src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/@shared/shared.module */ 9406);
/* harmony import */ var _view_view_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./view/view.component */ 1531);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/tabs */ 7173);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 5366);







var TournamentModule = /** @class */ /*@__PURE__*/ (function () {
    function TournamentModule() {
    }
    TournamentModule.ɵfac = function TournamentModule_Factory(t) { return new (t || TournamentModule)(); };
    TournamentModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: TournamentModule });
    TournamentModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ imports: [[
                _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _tournament_routes__WEBPACK_IMPORTED_MODULE_1__.TournamentRoutes, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule
            ]] });
    return TournamentModule;
}());

(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](TournamentModule, { declarations: [_list_list_component__WEBPACK_IMPORTED_MODULE_0__.ListComponent, _view_view_component__WEBPACK_IMPORTED_MODULE_3__.ViewComponent], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule, _tournament_routes__WEBPACK_IMPORTED_MODULE_1__.TournamentRoutes, src_app_shared_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__.MatTabsModule] }); })();


/***/ }),

/***/ 1531:
/*!********************************************************!*\
  !*** ./src/app/main/tournament/view/view.component.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ViewComponent": function() { return /* binding */ ViewComponent; }
/* harmony export */ });
/* harmony import */ var _shared_services_tournament_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../@shared/services/tournament.service */ 7104);
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../@shared/services/player.service */ 182);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 5366);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 4258);
/* harmony import */ var _shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../@shared/components/content/content.component */ 5101);
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/tabs */ 7173);









var ViewComponent = /** @class */ /*@__PURE__*/ (function () {
    function ViewComponent(activeRoute, tournamentService, playerService) {
        this.activeRoute = activeRoute;
        this.tournamentService = tournamentService;
        this.playerService = playerService;
    }
    ViewComponent.prototype.ngOnInit = function () {
        this.tournamentId = this.activeRoute.snapshot.params.tournamentId;
        this.getTournament();
    };
    ViewComponent.prototype.getTournament = function () {
        var _this = this;
        this.tournamentService.getTournamentById(this.tournamentId).subscribe(function (tournament) {
            _this.tournament = tournament;
            if (tournament.battlefyLink != "") {
                _this.tournamentService.getBattlefyTournament(tournament.battlefyId).subscribe(function (bt) {
                    console.log(bt);
                    //bt.rules.complete.replace("COMPLETO", " ");
                    _this.battlefyData = bt;
                });
            }
        });
    };
    ViewComponent.prototype.entryTournament = function () {
        this.tournamentService.entryTournament(this.tournamentId, this.playerService.getPlayer.id).subscribe(function (entry) {
            var teste = 0;
        });
    };
    ViewComponent.ɵfac = function ViewComponent_Factory(t) { return new (t || ViewComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_tournament_service__WEBPACK_IMPORTED_MODULE_0__.TournamentService), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_1__.PlayerService)); };
    ViewComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({ type: ViewComponent, selectors: [["app-view"]], decls: 24, vars: 7, consts: [[1, "row"], [1, "col-md-7"], [1, "card"], ["alt", "...", 1, "card-img-top", 3, "src"], [1, "card-body"], ["label", "Regras"], [2, "padding", "20px", "margin-bottom", "10px", "color", "#7e838c", 3, "innerHTML"], ["label", "Contato"], ["label", "Schedule"], ["label", "Prizes"], [1, "col-md-5"], [1, "card-title", "text-center"], [3, "innerHTML"], ["type", "button", "mat-button", "", 1, "btn", "btn-primary", 3, "click"]], template: function ViewComponent_Template(rf, ctx) {
            if (rf & 1) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "app-content");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](1, "div", 0);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](2, "div", 1);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](3, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](4, "img", 3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](5, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](6, "mat-tab-group");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](7, "mat-tab", 5);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](8, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](9, "mat-tab", 7);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](10, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](11, "mat-tab", 8);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](12, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](13, "mat-tab", 9);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](14, "div", 6);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](15, "div", 10);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](16, "div", 2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](17, "h5", 11);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](18);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](19, "br");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](20, "div", 4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelement"](21, "div", 12);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](22, "button", 13);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function ViewComponent_Template_button_click_22_listener() { return ctx.entryTournament(); });
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](23, "Participar");
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
            }
            if (rf & 2) {
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpropertyInterpolate"]("src", ctx.battlefyData.bannerUrl, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeUrl"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.battlefyData.rules.complete, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.battlefyData.contactDetails, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.battlefyData.schedule, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.battlefyData.prizes, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](4);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.tournament.name);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](3);
                _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("innerHTML", ctx.battlefyData.about, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsanitizeHtml"]);
            }
        }, directives: [_shared_components_content_content_component__WEBPACK_IMPORTED_MODULE_2__.ContentComponent, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTabGroup, _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__.MatTab], styles: [""] });
    return ViewComponent;
}());



/***/ })

}]);