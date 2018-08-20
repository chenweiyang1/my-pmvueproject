require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(119);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_7c1ad2fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(126);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(120)
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

/***/ 120:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_petStatus__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_header__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_base__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__App__ = __webpack_require__(26);
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
    petStatus: __WEBPACK_IMPORTED_MODULE_0__components_petStatus__["a" /* default */],
    'vHeader': __WEBPACK_IMPORTED_MODULE_1__components_header__["a" /* default */]
  },

  methods: {
    addPet: function addPet() {
      var url = '../addmypet/main';
      wx.navigateTo({ url: url });
    },
    swiperChange: function swiperChange(e) {
      this.swiperIndex = e.target.current;
      // console.log(e)
    },
    getPetList: function getPetList(session) {
      //   获取单身宠物列表   session参数是通过store获取 
      console.log(session);
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_base__["a" /* ajax */])('/wx/petinfo/pet_list', 'GET', { session: session }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    },
    getPetPair: function getPetPair(session) {
      //  匹配
      Object(__WEBPACK_IMPORTED_MODULE_2__utils_base__["a" /* ajax */])('/wx/petinfo/pair', 'GET', { session: session, pet_id: 1 }).then(function (res) {
        console.log(res);
      }).catch(function (err) {
        console.log(err);
      });
    }
  },

  beforeMount: function beforeMount() {
    var _this = this;

    console.log(__WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */]);
    __WEBPACK_IMPORTED_MODULE_3__App__["a" /* default */].login().then(function (res) {
      //  登录
      // wx.setStorageSync('sessionId', sessionId);
      console.log(res);
      _this.getPetList(res);
      _this.getPetPair(res);
    }).catch(function (err) {
      console.log(err);
    });
    // wx.request({
    //     url:`${host_dev}/wx/user/xxxx`,
    //     method: 'POST',
    //     data: {
    //         // signature: res.signature,
    //         // rawData: res.rawData,
    //         // encryptedData: res.encryptedData,
    //         // iv: res.iv,
    //         session: wx.getStorageSync('sessionId'),
    //     },
    //     success: res =>{
    //         // console.error(res)
    //     }
    // });

    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
});

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_script_index_0_petStatus_vue__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_35486862_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_template_index_0_petStatus_vue__ = __webpack_require__(125);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(123)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_script_index_0_petStatus_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_35486862_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_1_1_1_mpvue_loader_lib_selector_type_template_index_0_petStatus_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\components\\petStatus.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] petStatus.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-35486862", Component.options)
  } else {
    hotAPI.reload("data-v-35486862", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 123:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
    props: ['gender', 'isSterilization']
});

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pet-status",
    class: _vm.gender == 0 ? 'girl' : 'boy'
  }, [_c('span'), _vm._v(_vm._s(_vm.isSterilization ? '已绝育' : '未绝育') + "\n")])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-35486862", esExports)
  }
}

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container index"
  }, [_c('v-header', {
    attrs: {
      "title": "Ta宠",
      "align": "center",
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
      attrs: {
        "index": index
      }
    }, [_c('swiper-item', {
      attrs: {
        "mpcomid": '2-' + index
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
    }, [_vm._v("米粒儿")]), _vm._v(" "), _c('pet-status', {
      attrs: {
        "isSterilization": true,
        "gender": "0",
        "mpcomid": '1-' + index
      }
    })], 1), _vm._v(" "), _c('p', {
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
      "plain": "",
      "eventid": '0'
    },
    on: {
      "click": _vm.addPet
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

},[118]);
//# sourceMappingURL=main.js.map