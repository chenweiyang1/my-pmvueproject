require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([2],[
/* 0 */,
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(10);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_1964d892_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(17);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(11)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-1964d892"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_1_1_1_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_1_1_1_mpvue_loader_lib_template_compiler_index_id_data_v_1964d892_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_1_1_1_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src\\pages\\addmypet\\index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-loader/node_modules/vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-1964d892", Component.options)
  } else {
    hotAPI.reload("data-v-1964d892", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),
/* 11 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_header__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_index__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_base__ = __webpack_require__(3);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
            petName: '',
            gender: 1,
            birthDate: '',
            isSterilization: false,
            petDesc: '',
            pic1: '',
            pic2: '',
            pic3: ''
        };
    },

    components: {
        'vHeader': __WEBPACK_IMPORTED_MODULE_0__components_header__["a" /* default */]
    },
    beforeMount: function beforeMount() {
        wx.request({
            url: __WEBPACK_IMPORTED_MODULE_2__utils_base__["a" /* host_dev */] + '/wx/user/',
            method: 'GET',
            data: {
                // signature: res.signature,
                // rawData: res.rawData,
                // encryptedData: res.encryptedData,
                // iv: res.iv,
                session: wx.getStorageSync('sessionId')
            },
            success: function success(res) {
                // console.error(res)
            }
        });
    },
    methods: {
        chooseGender: function chooseGender(g) {
            this.gender = g;
        },
        changeDate: function changeDate(e) {
            this.birthDate = e.mp.detail.value;
        },
        confirmAdd: function confirmAdd() {},
        chooseImg: function chooseImg(i) {
            var _this = this;

            wx.chooseImage({
                count: 3, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function success(res) {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths;
                    switch (i) {
                        case 1:
                            _this.pic1 = tempFilePaths[0];
                            break;
                        case 2:
                            _this.pic2 = tempFilePaths[0];
                            break;
                        case 3:
                            _this.pic3 = tempFilePaths[0];
                            break;

                        default:
                            break;
                    }
                    wx.uploadFile({
                        url: __WEBPACK_IMPORTED_MODULE_2__utils_base__["a" /* host_dev */] + '/wx/petinfo/uploadimg',
                        filePath: tempFilePaths[0],
                        name: 'file',
                        success: function success(res) {
                            console.log(JSON.parse(res.data));
                        }
                    });
                }
            });
        }
    }
});

/***/ }),
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export formatTime */
function formatNumber(n) {
  var str = n.toString();
  return str[1] ? str : '0' + str;
}

function formatTime(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();

  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();

  var t1 = [year, month, day].map(formatNumber).join('-');
  var t2 = [hour, minute, second].map(formatNumber).join(':');

  return '' + t1;
}

/* unused harmony default export */ var _unused_webpack_default_export = ({
  formatNumber: formatNumber,
  formatTime: formatTime
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container add-my-pet"
  }, [_c('v-header', {
    attrs: {
      "title": "添加宠物",
      "align": "center",
      "showBack": true,
      "mpcomid": '0'
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "add-card"
  }, [_c('div', {
    staticClass: "big-img",
    class: _vm.pic1 == '' ? '' : 'has-img',
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        _vm.chooseImg(1)
      }
    }
  }, [(_vm.pic1 != '') ? _c('image', {
    attrs: {
      "mode": "widthFix",
      "src": _vm.pic1
    }
  }) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "flex flex-row"
  }, [_c('div', {
    staticClass: "flex1"
  }, [_c('div', {
    staticClass: "small-img",
    class: _vm.pic2 == '' ? '' : 'has-img',
    attrs: {
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        _vm.chooseImg(2)
      }
    }
  }, [(_vm.pic2 != '') ? _c('image', {
    attrs: {
      "mode": "widthFix",
      "src": _vm.pic2
    }
  }) : _vm._e()])]), _vm._v(" "), _c('div', {
    staticClass: "flex1"
  }, [_c('div', {
    staticClass: "small-img",
    class: _vm.pic3 == '' ? '' : 'has-img',
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.chooseImg(3)
      }
    }
  }, [(_vm.pic3 != '') ? _c('image', {
    attrs: {
      "mode": "widthFix",
      "src": _vm.pic3
    }
  }) : _vm._e()])])]), _vm._v(" "), _c('div', {
    staticClass: "inpunt-line"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.petName),
      expression: "petName"
    }],
    attrs: {
      "type": "text",
      "placeholder": "请输入宠物姓名",
      "eventid": '3'
    },
    domProps: {
      "value": (_vm.petName)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.petName = $event.target.value
      }
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "gender-line"
  }, [_c('div', {
    staticClass: "chek-option boy",
    class: _vm.gender == 1 ? 'active' : '',
    attrs: {
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        _vm.chooseGender(1)
      }
    }
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v("男")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  })]), _vm._v(" "), _c('div', {
    staticClass: "chek-option girl",
    class: _vm.gender == 2 ? 'active' : '',
    attrs: {
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        _vm.chooseGender(2)
      }
    }
  }, [_c('span', {
    staticClass: "text"
  }, [_vm._v("女")]), _vm._v(" "), _c('span', {
    staticClass: "icon"
  })])]), _vm._v(" "), _c('div', {
    staticClass: "chose-birthday inpunt-line"
  }, [_c('picker', {
    attrs: {
      "mode": "date",
      "eventid": '6'
    },
    on: {
      "change": _vm.changeDate
    },
    model: {
      value: (_vm.birthDate),
      callback: function($$v) {
        _vm.birthDate = $$v
      },
      expression: "birthDate"
    }
  }, [_c('view', {
    staticClass: "picker-handle"
  }, [(_vm.birthDate == '') ? _c('span', {
    staticClass: "placeholder"
  }, [_vm._v("请选择Ta的生日")]) : _c('span', [_vm._v(_vm._s(_vm.birthDate))])])])], 1), _vm._v(" "), _c('div', {
    staticClass: "pet-is-sterilization"
  }, [_c('span', {
    staticClass: "is-sterilization-option",
    class: _vm.isSterilization ? '' : 'active',
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.isSterilization = false
      }
    }
  }, [_vm._v("未绝育")]), _vm._v(" "), _c('span', {
    staticClass: "is-sterilization-option",
    class: _vm.isSterilization ? 'active' : '',
    attrs: {
      "eventid": '8'
    },
    on: {
      "click": function($event) {
        _vm.isSterilization = true
      }
    }
  }, [_vm._v("已绝育")])]), _vm._v(" "), _c('div', {
    staticClass: "inpunt-line"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.petDesc),
      expression: "petDesc"
    }],
    attrs: {
      "type": "text",
      "placeholder": "输入Ta最可爱的一面",
      "eventid": '9'
    },
    domProps: {
      "value": (_vm.petDesc)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.petDesc = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('button', {
    staticClass: "confirm-add-pet",
    attrs: {
      "plain": "",
      "eventid": '10'
    },
    on: {
      "click": _vm.confirmAdd
    }
  }, [_vm._v("确认添加")])], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-loader/node_modules/vue-hot-reload-api").rerender("data-v-1964d892", esExports)
  }
}

/***/ })
],[9]);
//# sourceMappingURL=main.js.map