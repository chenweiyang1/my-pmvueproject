require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(18);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_7c1ad2fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(25);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(19)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-7c1ad2fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_7c1ad2fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\index\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7c1ad2fa", Component.options)
  } else {
    hotAPI.reload("data-v-7c1ad2fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_card__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__(21);
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
    return {
      motto: 'Hello World',
      userInfo: {},
      movies: 30,
      swiperIndex: 0
    };
  },


  components: {
    card: __WEBPACK_IMPORTED_MODULE_0__components_card__["a" /* default */],
    'vHeader': __WEBPACK_IMPORTED_MODULE_1__components_header__["a" /* default */]
  },

  methods: {
    bindViewTap: function bindViewTap() {
      var url = '../logs/main';
      wx.navigateTo({ url: url });
    },
    getUserInfo: function getUserInfo() {
      var _this = this;

      // 调用登录接口
      wx.login({
        success: function success() {
          wx.getUserInfo({
            success: function success(res) {
              _this.userInfo = res.userInfo;
            }
          });
        }
      });
    },
    swiperChange: function swiperChange(e) {
      this.swiperIndex = e.target.current;
      // console.log(e)
    }
  },

  created: function created() {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo();
  }
});

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_script_index_0_header_vue__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_dd5f26c2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_template_index_0_header_vue__ = __webpack_require__(24);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(22)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_script_index_0_header_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_dd5f26c2_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_template_index_0_header_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\header.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] header.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-dd5f26c2", Component.options)
  } else {
    hotAPI.reload("data-v-dd5f26c2", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
    props: ['title', 'showBack']
});

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('div', {
    staticClass: "header flex flex-row"
  }, [_c('div', {
    staticClass: "headerbgbox"
  }), _vm._v(" "), (_vm.showBack) ? _c('div', {
    staticClass: "back-btn"
  }) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "flex1"
  }, [_vm._v(_vm._s(_vm.title))])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-dd5f26c2", esExports)
  }
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container index"
  }, [_c('v-header', {
    attrs: {
      "title": "Ta宠",
      "showBack": false,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('view', {
    staticClass: "list"
  }, [_c('swiper', {
    staticClass: "swiper",
    attrs: {
      "previous-margin": "55rpx",
      "next-margin": "44rpx",
      "duration": "500"
    }
  }, _vm._l((_vm.movies), function(item, index) {
    return _c('block', {
      key: index,
      staticStyle: {
        "margin-right": "44rpx"
      },
      attrs: {
        "index": index
      }
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '1-' + index
      }
    }, [_c('div', {
      staticClass: "pet-card"
    }, [_c('div', {
      staticClass: "pic1"
    }, [_c('image', {
      attrs: {
        "src": "/static/images/pic_03.png",
        "mode": "widthFix"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "flex flex-row pic-s-wrap"
    }, [_c('div', {
      staticClass: "flex1 pic-s"
    }, [_c('image', {
      attrs: {
        "src": "/static/images/pic_06.png",
        "mode": "widthFix"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "flex1 pic-s"
    }, [_c('image', {
      attrs: {
        "src": "/static/images/pic_08.png",
        "mode": "widthFix"
      }
    })])]), _vm._v(" "), _c('div', {
      staticClass: "pet-info flex flex-row"
    }, [_c('div', {
      staticClass: "avatar-wrap"
    }, [_c('image', {
      attrs: {
        "src": "/static/images/pic_12.png",
        "mode": "widthFix"
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "flex1 texts"
    }, [_c('p', {
      staticClass: "pet-name"
    }, [_c('span', {
      staticClass: "name"
    }, [_vm._v("米粒儿")]), _vm._v(" "), _c('span', {
      staticClass: "gender-status"
    }, [_c('span', {
      staticClass: "boy"
    }), _vm._v("未绝育")])]), _vm._v(" "), _c('p', {
      staticClass: "signature"
    }, [_vm._v("吃葡萄不吐葡萄皮儿")])], 1)]), _vm._v(" "), _c('div', {
      staticClass: "pet-other-info flex flex-row"
    }, [_c('div', {
      staticClass: "flex1"
    }, [_c('span', {
      staticClass: "icon birthday"
    }), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v("3岁")])]), _vm._v(" "), _c('div', {
      staticClass: "flex1"
    }, [_c('span', {
      staticClass: "icon aries"
    }), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v("白羊")])]), _vm._v(" "), _c('div', {
      staticClass: "flex1"
    }, [_c('span', {
      staticClass: "icon position"
    }), _vm._v(" "), _c('span', {
      staticClass: "text"
    }, [_vm._v("同城")])])])])])], 1)
  }))], 1), _vm._v(" "), _c('button', {
    staticClass: "add-my-pet",
    attrs: {
      "plain": ""
    }
  }, [_vm._v("添加我的宠物")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-7c1ad2fa", esExports)
  }
}

/***/ })
],[17]);
//# sourceMappingURL=main.js.map