require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([3],{

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(47);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_6160f071_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(50);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(48)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-6160f071"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_6160f071_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\my\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6160f071", Component.options)
  } else {
    hotAPI.reload("data-v-6160f071", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(2);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["a"] = ({
    data: function data() {
        return {};
    },

    beforeMount: function beforeMount() {},
    components: {
        'v-header': __WEBPACK_IMPORTED_MODULE_0__components_header__["a" /* default */]
    }
});

/***/ }),

/***/ 50:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "user-center"
  }, [_c('v-header', {
    attrs: {
      "title": "我的",
      "showBack": false,
      "align": "center",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "circleback"
  }), _vm._v(" "), _c('div', {
    staticClass: "user-card flex flex-row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "flex1 user-text"
  }, [_c('p', {
    staticClass: "user-name"
  }, [_c('span', {
    staticClass: "mame"
  }, [_vm._v("李小七")]), _vm._v(" "), _c('span', {
    staticClass: "meal-card"
  }, [_vm._v("×780")])]), _vm._v(" "), _c('p', {
    staticClass: "user-addr"
  }, [_vm._v("北京市东城区")])], 1), _vm._v(" "), _c('a', {
    staticClass: "edit-btn",
    attrs: {
      "href": "../edituserinfo/main"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "user-menu-list"
  }, [_c('div', {
    staticClass: "item flex flex-row question"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "flex1"
  }, [_vm._v("常见问题")]), _vm._v(" "), _c('span', {
    staticClass: "arrow-right"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "item flex flex-row feedback"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "flex1"
  }, [_vm._v("意见反馈")]), _vm._v(" "), _c('span', {
    staticClass: "arrow-right"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "item flex flex-row meal-card-mall"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "flex1"
  }, [_vm._v("蹭饭卡商城 "), _c('span', [_vm._v("即将出锅")])]), _vm._v(" "), _c('span', {
    staticClass: "arrow-right"
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "item flex flex-row about"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('p', {
    staticClass: "flex1"
  }, [_vm._v("关于Ta宠")]), _vm._v(" "), _c('span', {
    staticClass: "arrow-right"
  })], 1)])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "avatar"
  }, [_c('div', {
    staticClass: "border"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-6160f071", esExports)
  }
}

/***/ })

},[46]);
//# sourceMappingURL=main.js.map