require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 23:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(24);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();
/* harmony default export */ __webpack_exports__["default"] = ({
    config: {
        "enablePullDownRefresh": true
    }
});

/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_396d0a3e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(27);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(25)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_396d0a3e_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\discovery\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-396d0a3e", Component.options)
  } else {
    hotAPI.reload("data-v-396d0a3e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_base__ = __webpack_require__(3);
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
      tabType: 1,
      page: 1
    };
  },

  components: {
    'vHeader': __WEBPACK_IMPORTED_MODULE_0__components_header__["a" /* default */]
  },
  beforeMount: function beforeMount() {
    this.getData();
  },

  methods: {
    tabClick: function tabClick(i) {
      this.tabType = i;
      //loadData()
    },
    getData: function getData() {
      wx.request({
        url: __WEBPACK_IMPORTED_MODULE_1__utils_base__["a" /* host_dev */] + '/wx/dynamic',
        method: 'GET',
        data: {
          // signature: res.signature,
          // rawData: res.rawData,
          // encryptedData: res.encryptedData,
          // iv: res.iv,
          // session: wx.getStorageSync('sessionId'),
          pageNumber: this.page,
          pageSize: 10
        },
        success: function success(res) {
          console.error(res);
        }
      });
    }
  },
  onReachBottom: function onReachBottom() {
    this.page++;
  }
});

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container discovery"
  }, [_c('v-header', {
    attrs: {
      "vClass": "img-move-bottom",
      "title": "Ta宠",
      "align": "left",
      "showBack": false,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "top-tab"
  }, [_c('div', {
    staticClass: "menu-wrap flex flex-row"
  }, [_c('span', {
    staticClass: "items flex1",
    class: _vm.tabType == 1 ? 'active' : '',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.tabClick(1)
      }
    }
  }, [_vm._v("精选")]), _vm._v(" "), _c('span', {
    staticClass: "items flex1",
    class: _vm.tabType == 2 ? 'active' : '',
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.tabClick(2)
      }
    }
  }, [_vm._v("关注")])])]), _vm._v(" "), _c('div', {
    staticClass: "list"
  }, [_c('div', {
    staticClass: "list-card"
  }, [_c('div', {
    staticClass: "user flex flex-row"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "user-info flex1"
  }, [_c('p', {
    staticClass: "user-name"
  }, [_c('span', {
    staticClass: "owner-name"
  }, [_vm._v("李小七/")]), _vm._v(" "), _c('span', {
    staticClass: "pet-name"
  }, [_vm._v("米粒儿")])]), _vm._v(" "), _c('p', {
    staticClass: "signature"
  }, [_vm._v("吃葡萄不吐葡萄皮儿")])], 1), _vm._v(" "), _vm._m(1)]), _vm._v(" "), _vm._m(2), _vm._v(" "), _vm._m(3)]), _vm._v(" "), _c('div', {
    staticClass: "list-card"
  }, [_c('div', {
    staticClass: "user flex flex-row"
  }, [_vm._m(4), _vm._v(" "), _c('div', {
    staticClass: "user-info flex1"
  }, [_c('p', {
    staticClass: "user-name"
  }, [_c('span', {
    staticClass: "owner-name"
  }, [_vm._v("李小七/")]), _vm._v(" "), _c('span', {
    staticClass: "pet-name"
  }, [_vm._v("米粒儿")])]), _vm._v(" "), _c('p', {
    staticClass: "signature"
  }, [_vm._v("吃葡萄不吐葡萄皮儿")])], 1), _vm._v(" "), _vm._m(5)]), _vm._v(" "), _vm._m(6), _vm._v(" "), _vm._m(7)]), _vm._v(" "), _c('div', {
    staticClass: "list-card"
  }, [_c('div', {
    staticClass: "user flex flex-row"
  }, [_vm._m(8), _vm._v(" "), _c('div', {
    staticClass: "user-info flex1"
  }, [_c('p', {
    staticClass: "user-name"
  }, [_c('span', {
    staticClass: "owner-name"
  }, [_vm._v("李小七/")]), _vm._v(" "), _c('span', {
    staticClass: "pet-name"
  }, [_vm._v("米粒儿")])]), _vm._v(" "), _c('p', {
    staticClass: "signature"
  }, [_vm._v("吃葡萄不吐葡萄皮儿")])], 1), _vm._v(" "), _vm._m(9)]), _vm._v(" "), _vm._m(10), _vm._v(" "), _vm._m(11)])])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "attention-status"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("关注")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "image-wrap flex flex-row single"
  }, [_c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/discovery_03.png",
      "mode": "widthFix"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "text-wrap"
  }, [_vm._v("今天米修被我领回家啦！一只双子座的狗狗哦！刚满月几天。")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex flex-row card-actions"
  }, [_c('div', {
    staticClass: "praise"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "number"
  }, [_vm._v("116")])]), _vm._v(" "), _c('div', {
    staticClass: "comment"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "number"
  }, [_vm._v("18")])]), _vm._v(" "), _c('div', {
    staticClass: "share"
  }, [_c('span', {
    staticClass: "icon"
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "attention-status"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("关注")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "image-wrap flex flex-row double"
  }, [_c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/discovery_21.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/discovery_23.png",
      "mode": "widthFix"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "text-wrap"
  }, [_vm._v("今天米修被我领回家啦！一只双子座的狗狗哦！刚满月几天。")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex flex-row card-actions"
  }, [_c('div', {
    staticClass: "praise liked"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "number"
  }, [_vm._v("116")])]), _vm._v(" "), _c('div', {
    staticClass: "comment"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "number"
  }, [_vm._v("18")])]), _vm._v(" "), _c('div', {
    staticClass: "share"
  }, [_c('span', {
    staticClass: "icon"
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "attention-status followed"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "text"
  }, [_vm._v("已关注")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "card-content"
  }, [_c('div', {
    staticClass: "image-wrap flex flex-row three"
  }, [_c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/discovery_31.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/discovery_33.png",
      "mode": "widthFix"
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "image"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/discovery_35.png",
      "mode": "widthFix"
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "text-wrap"
  }, [_vm._v("今天米修被我领回家啦！一只双子座的狗狗哦！刚满月几天。")])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex flex-row card-actions"
  }, [_c('div', {
    staticClass: "praise liked"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "number"
  }, [_vm._v("116")])]), _vm._v(" "), _c('div', {
    staticClass: "comment"
  }, [_c('span', {
    staticClass: "icon"
  }), _vm._v(" "), _c('span', {
    staticClass: "number"
  }, [_vm._v("18")])]), _vm._v(" "), _c('div', {
    staticClass: "share"
  }, [_c('span', {
    staticClass: "icon"
  })])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-396d0a3e", esExports)
  }
}

/***/ })

},[23]);
//# sourceMappingURL=main.js.map