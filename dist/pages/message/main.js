require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(43);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_cc947c10_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(46);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(44)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-cc947c10"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_cc947c10_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\message\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-cc947c10", Component.options)
  } else {
    hotAPI.reload("data-v-cc947c10", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 44:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 45:
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

  methods: {},
  beforeMount: function beforeMount() {},
  components: {
    'v-header': __WEBPACK_IMPORTED_MODULE_0__components_header__["a" /* default */]
  }
});

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "message container"
  }, [_c('v-header', {
    attrs: {
      "title": "Ta宠",
      "align": "center",
      "showBack": false,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('ul', {
    staticClass: "message-list"
  }, [_c('li', {
    staticClass: "system-msg msg flex flex-row"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "flex1 message-preview"
  }, [_c('p', {
    staticClass: "sender-name"
  }, [_vm._v("李小七")]), _vm._v(" "), _c('p', {
    staticClass: "preview"
  }, [_vm._v("你的猫咪好漂亮，平常都喂什么猫粮")])], 1), _vm._v(" "), _c('div', {
    staticClass: "time-counter"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("15:00")]), _vm._v(" "), _c('p', {
    staticClass: "message-count"
  }, [_vm._v("2")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "msg flex flex-row"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "flex1 message-preview"
  }, [_c('p', {
    staticClass: "sender-name"
  }, [_vm._v("李小七")]), _vm._v(" "), _c('p', {
    staticClass: "preview"
  }, [_vm._v("你的猫咪好漂亮，平常都喂什么猫粮")])], 1), _vm._v(" "), _c('div', {
    staticClass: "time-counter"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("15:00")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "msg flex flex-row"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "flex1 message-preview"
  }, [_c('p', {
    staticClass: "sender-name"
  }, [_vm._v("李小七")]), _vm._v(" "), _c('p', {
    staticClass: "preview"
  }, [_vm._v("你的猫咪好漂亮，平常都喂什么猫粮")])], 1), _vm._v(" "), _c('div', {
    staticClass: "time-counter"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("15:00")])], 1)]), _vm._v(" "), _c('li', {
    staticClass: "msg flex flex-row"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "flex1 message-preview"
  }, [_c('p', {
    staticClass: "sender-name"
  }, [_vm._v("李小七")]), _vm._v(" "), _c('p', {
    staticClass: "preview"
  }, [_vm._v("你的猫咪好漂亮，平常都喂什么猫粮")])], 1), _vm._v(" "), _c('div', {
    staticClass: "time-counter"
  }, [_c('p', {
    staticClass: "time"
  }, [_vm._v("15:00")])], 1)])], 1)], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-cc947c10", esExports)
  }
}

/***/ })

},[42]);
//# sourceMappingURL=main.js.map