require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([5],{

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(109);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_046866f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(112);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(110)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-046866f0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_046866f0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\edituserinfo\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-046866f0", Component.options)
  } else {
    hotAPI.reload("data-v-046866f0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 110:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(4);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            birthDay: '',
            array: ['请选择性别', '男', '女'],
            gender: 0,
            city: '请选择地区'
        };
    },

    beforeMount: function beforeMount() {},
    methods: {
        changeDate: function changeDate(e) {
            this.birthDay = e.mp.detail.value;
        },
        genderChange: function genderChange(e) {
            this.gender = e.mp.detail.value;
        },
        cityChange: function cityChange(e) {
            var v = e.mp.detail.value;
            if (v[0] == '北京市' || v[0] == '上海市' || v[0] == '天津市' || v[0] == '重庆市') {
                this.city = v[0] + ' ' + v[2];
            } else {
                this.city = v[0] + ' ' + v[1] + ' ' + v[2];
            }
        }
    },
    components: {
        'v-header': __WEBPACK_IMPORTED_MODULE_0__components_header__["a" /* default */]
    }
});

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container edit-user-info"
  }, [_c('v-header', {
    attrs: {
      "title": "个人信息编辑",
      "showBack": true,
      "align": "center",
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "user-avatar flex flex-row"
  }, [_c('label', [_vm._v("头像")]), _vm._v(" "), _vm._m(0)], 1), _vm._v(" "), _c('div', {
    staticClass: "user-info-list"
  }, [_c('div', {
    staticClass: "item flex flex-row"
  }, [_c('label', [_vm._v("昵称")]), _vm._v(" "), _vm._m(1)], 1), _vm._v(" "), _c('div', {
    staticClass: "item flex flex-row"
  }, [_c('label', [_vm._v("生日")]), _vm._v(" "), _c('div', {
    staticClass: "flex1"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "eventid": '0'
    },
    on: {
      "change": _vm.changeDate
    },
    model: {
      value: (_vm.birthDay),
      callback: function($$v) {
        _vm.birthDay = $$v
      },
      expression: "birthDay"
    }
  }, [_c('view', {
    staticClass: "picker-handle"
  }, [(_vm.birthDay == '') ? _c('span', {
    staticClass: "placeholder"
  }, [_vm._v("请选择生日")]) : _c('span', [_vm._v(_vm._s(_vm.birthDay))])])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "item flex flex-row"
  }, [_c('label', [_vm._v("性别")]), _vm._v(" "), _c('div', {
    staticClass: "flex1"
  }, [_c('picker', {
    attrs: {
      "range": _vm.array,
      "eventid": '1'
    },
    on: {
      "change": _vm.genderChange
    },
    model: {
      value: (_vm.gender),
      callback: function($$v) {
        _vm.gender = $$v
      },
      expression: "gender"
    }
  }, [_c('view', {
    staticClass: "picker-handle"
  }, [_c('span', [_vm._v(_vm._s(_vm.array[_vm.gender]))])])])], 1)], 1), _vm._v(" "), _c('div', {
    staticClass: "item flex flex-row"
  }, [_c('label', [_vm._v("常出没地")]), _vm._v(" "), _c('div', {
    staticClass: "flex1"
  }, [_c('picker', {
    attrs: {
      "mode": "region",
      "eventid": '2'
    },
    on: {
      "change": _vm.cityChange
    }
  }, [_c('view', {
    staticClass: "picker-handle"
  }, [_vm._v("\n                        " + _vm._s(_vm.city) + "\n                    ")])])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "save-btn"
  }, [_vm._v("保存")])], 1)
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex1"
  }, [_c('div', {
    staticClass: "avatar-wrap"
  }, [_c('img', {
    attrs: {
      "src": "/static/images/pic_12.png",
      "mode": "widthFix"
    }
  })])])
},function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "flex1"
  }, [_c('input', {
    attrs: {
      "type": "text",
      "placeholder": "请输入昵称"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-046866f0", esExports)
  }
}

/***/ })

},[108]);
//# sourceMappingURL=main.js.map