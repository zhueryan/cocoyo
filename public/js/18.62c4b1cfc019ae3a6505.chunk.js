webpackJsonp([18],{

/***/ 1034:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(1167)
}
var normalizeComponent = __webpack_require__(24)
/* script */
var __vue_script__ = __webpack_require__(1169)
/* template */
var __vue_template__ = __webpack_require__(1170)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-3e26ed42"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources\\assets\\js\\views\\auth\\Login.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-3e26ed42", Component.options)
  } else {
    hotAPI.reload("data-v-3e26ed42", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 1167:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(1168);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(49)("e0ed1d90", content, false);
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e26ed42\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue", function() {
     var newContent = require("!!../../../../../node_modules/css-loader/index.js!../../../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-3e26ed42\",\"scoped\":true,\"hasInlineConfig\":true}!../../../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./Login.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 1168:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(48)(false);
// imports


// module
exports.push([module.i, "\n\n\n\n\n\n\n\n\n\n\n", ""]);

// exports


/***/ }),

/***/ 1169:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({});

/***/ }),

/***/ 1170:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _vm._m(0)
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "userContainer" }, [
      _c(
        "div",
        {
          staticClass: "mu-paper login_wrap mu-paper-round mu-paper-3",
          attrs: { "data-v-201fc8f4": "" }
        },
        [
          _c(
            "div",
            { staticClass: "login", attrs: { "data-v-201fc8f4": "" } },
            [
              _c(
                "div",
                { staticClass: "login_con", attrs: { "data-v-201fc8f4": "" } },
                [
                  _c(
                    "div",
                    { staticClass: "main", attrs: { "data-v-201fc8f4": "" } },
                    [
                      _c("h3", { attrs: { "data-v-201fc8f4": "" } }, [
                        _vm._v("登录")
                      ]),
                      _vm._v(" "),
                      _c("form", { attrs: { "data-v-201fc8f4": "" } }, [
                        _c(
                          "div",
                          {
                            staticClass: "field_wrap",
                            attrs: { "data-v-201fc8f4": "" }
                          },
                          [
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "mu-text-field has-label no-empty-state"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "mu-text-field-content" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "mu-text-field-label" },
                                        [_vm._v("邮箱")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "mu-text-field-input",
                                        attrs: { name: "email", type: "text" }
                                      }),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c("hr", {
                                          staticClass: "mu-text-field-line"
                                        }),
                                        _vm._v(" "),
                                        _c("hr", {
                                          staticClass:
                                            "mu-text-field-focus-line"
                                        })
                                      ])
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "jump" }, [
                                _c(
                                  "span",
                                  { staticStyle: { display: "none" } },
                                  [_vm._v("去登录 ->")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticStyle: { display: "none" } },
                                  [_vm._v("去注册 ->")]
                                ),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticStyle: { display: "none" } },
                                  [_vm._v("去开通 ->")]
                                )
                              ])
                            ])
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "div",
                          {
                            staticClass: "field_wrap",
                            attrs: { "data-v-201fc8f4": "", val: "" }
                          },
                          [
                            _c("div", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "mu-text-field has-label no-empty-state"
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "mu-text-field-content" },
                                    [
                                      _c(
                                        "div",
                                        { staticClass: "mu-text-field-label" },
                                        [_vm._v("密码")]
                                      ),
                                      _vm._v(" "),
                                      _c("input", {
                                        staticClass: "mu-text-field-input",
                                        attrs: {
                                          name: "password",
                                          type: "password"
                                        }
                                      }),
                                      _vm._v(" "),
                                      _c("div", [
                                        _c("hr", {
                                          staticClass: "mu-text-field-line"
                                        }),
                                        _vm._v(" "),
                                        _c("hr", {
                                          staticClass:
                                            "mu-text-field-focus-line"
                                        })
                                      ])
                                    ]
                                  )
                                ]
                              )
                            ])
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c("div", { attrs: { "data-v-201fc8f4": "" } }, [
                        _c(
                          "button",
                          {
                            staticClass: "mu-raised-button login_btn",
                            staticStyle: {
                              "user-select": "none",
                              outline: "none",
                              cursor: "pointer",
                              "-webkit-appearance": "none"
                            },
                            attrs: {
                              "data-v-201fc8f4": "",
                              type: "button",
                              tabindex: "0"
                            }
                          },
                          [
                            _c(
                              "div",
                              { staticClass: "mu-raised-button-wrapper" },
                              [
                                _c("div", { staticClass: "mu-ripple-wrapper" }),
                                _vm._v(" "),
                                _c(
                                  "span",
                                  { staticClass: "mu-raised-button-label" },
                                  [_vm._v("登录")]
                                )
                              ]
                            )
                          ]
                        )
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "jump_link",
                          attrs: { "data-v-201fc8f4": "" }
                        },
                        [
                          _c(
                            "span",
                            {
                              staticClass: "register",
                              attrs: { "data-v-201fc8f4": "" }
                            },
                            [_vm._v("注册")]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "forget",
                              attrs: { "data-v-201fc8f4": "" }
                            },
                            [_vm._v("找回密码")]
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "wx_login",
                          attrs: { "data-v-201fc8f4": "" }
                        },
                        [
                          _c(
                            "div",
                            {
                              staticClass: "wx_btn",
                              attrs: { "data-v-201fc8f4": "" }
                            },
                            [_vm._v("微信登录")]
                          )
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: { display: "none" },
                      attrs: { "data-v-201fc8f4": "" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "resetPassword",
                          attrs: { "data-v-201fc8f4": "" }
                        },
                        [
                          _c("div", [
                            _c("h3", [_vm._v("找回密码")]),
                            _vm._v(" "),
                            _c("div", [
                              _c("div", { staticClass: "field_wrap" }, [
                                _c("div", [
                                  _c(
                                    "div",
                                    { staticClass: "mu-text-field has-label" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "mu-text-field-content"
                                        },
                                        [
                                          _c(
                                            "div",
                                            {
                                              staticClass:
                                                "mu-text-field-label float"
                                            },
                                            [_vm._v("邮箱")]
                                          ),
                                          _vm._v(" "),
                                          _c("input", {
                                            staticClass: "mu-text-field-input",
                                            attrs: {
                                              name: "email",
                                              type: "text"
                                            }
                                          }),
                                          _vm._v(" "),
                                          _c("div", [
                                            _c("hr", {
                                              staticClass: "mu-text-field-line"
                                            }),
                                            _vm._v(" "),
                                            _c("hr", {
                                              staticClass:
                                                "mu-text-field-focus-line"
                                            })
                                          ])
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c("div", { staticClass: "jump" }, [
                                    _c(
                                      "span",
                                      { staticStyle: { display: "none" } },
                                      [_vm._v("去登录 ->")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticStyle: { display: "none" } },
                                      [_vm._v("去注册 ->")]
                                    ),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      { staticStyle: { display: "none" } },
                                      [_vm._v("去开通 ->")]
                                    )
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "mu-raised-button reset_btn",
                                  staticStyle: {
                                    "user-select": "none",
                                    outline: "none",
                                    cursor: "pointer",
                                    "-webkit-appearance": "none"
                                  },
                                  attrs: { type: "button", tabindex: "0" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "mu-raised-button-wrapper" },
                                    [
                                      _c("div", {
                                        staticClass: "mu-ripple-wrapper"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "mu-raised-button-label"
                                        },
                                        [_vm._v("发送验证邮件")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "back" }, [
                                _vm._v("返回")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticStyle: { display: "none" } }, [
                            _c("div", { staticClass: "send_suc" }, [
                              _c("h3", [_vm._v("邮件已发送")]),
                              _vm._v(" "),
                              _c("div", [
                                _c("p", { staticClass: "text" }, [
                                  _vm._v("邮件已发送至你的邮箱 "),
                                  _c("strong"),
                                  _vm._v(" 快去查收邮件吧")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "mu-raised-button send_btn disabled label-before",
                                    staticStyle: {
                                      outline: "none",
                                      "-webkit-appearance": "none"
                                    },
                                    attrs: { disabled: "", type: "button" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "mu-raised-button-wrapper"
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "mu-raised-button-label"
                                          },
                                          [_vm._v("邮件已发送")]
                                        ),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "icon" })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "back" }, [
                                  _vm._v("返回")
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticStyle: { display: "none" },
                      attrs: { "data-v-201fc8f4": "" }
                    },
                    [
                      _c(
                        "div",
                        {
                          staticClass: "active_email",
                          attrs: { "data-v-201fc8f4": "" }
                        },
                        [
                          _c("div", [
                            _c("h3", [_vm._v("验证邮箱")]),
                            _vm._v(" "),
                            _c("div", [
                              _c("p", { staticClass: "text" }, [
                                _vm._v("Hi，你的邮箱 "),
                                _c("strong"),
                                _vm._v(" 来自Tower "),
                                _c("br"),
                                _vm._v("快验证邮箱开始体验蓝湖吧")
                              ]),
                              _vm._v(" "),
                              _c(
                                "button",
                                {
                                  staticClass: "mu-raised-button send_btn",
                                  staticStyle: {
                                    "user-select": "none",
                                    outline: "none",
                                    cursor: "pointer",
                                    "-webkit-appearance": "none"
                                  },
                                  attrs: { type: "button", tabindex: "0" }
                                },
                                [
                                  _c(
                                    "div",
                                    { staticClass: "mu-raised-button-wrapper" },
                                    [
                                      _c("div", {
                                        staticClass: "mu-ripple-wrapper"
                                      }),
                                      _vm._v(" "),
                                      _c(
                                        "span",
                                        {
                                          staticClass: "mu-raised-button-label"
                                        },
                                        [_vm._v("发送验证邮件")]
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "back" }, [
                                _vm._v("返回")
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticStyle: { display: "none" } }, [
                            _c("div", { staticClass: "send_suc" }, [
                              _c("h3", [_vm._v("邮件已发送")]),
                              _vm._v(" "),
                              _c("div", [
                                _c("p", { staticClass: "text" }, [
                                  _vm._v("邮件已发送至你的邮箱 "),
                                  _c("strong"),
                                  _vm._v(" 快去查收邮件吧")
                                ]),
                                _vm._v(" "),
                                _c(
                                  "button",
                                  {
                                    staticClass:
                                      "mu-raised-button send_btn disabled label-before",
                                    staticStyle: {
                                      outline: "none",
                                      "-webkit-appearance": "none"
                                    },
                                    attrs: { disabled: "", type: "button" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "mu-raised-button-wrapper"
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            staticClass:
                                              "mu-raised-button-label"
                                          },
                                          [_vm._v("邮件已发送")]
                                        ),
                                        _vm._v(" "),
                                        _c("span", { staticClass: "icon" })
                                      ]
                                    )
                                  ]
                                ),
                                _vm._v(" "),
                                _c("div", { staticClass: "back" }, [
                                  _vm._v("返回")
                                ])
                              ])
                            ])
                          ])
                        ]
                      )
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "div",
                    {
                      staticClass: "wx_code_box",
                      staticStyle: { display: "none" },
                      attrs: { "data-v-201fc8f4": "" }
                    },
                    [
                      _c(
                        "div",
                        { attrs: { "data-v-201fc8f4": "", id: "wx_code" } },
                        [
                          _c("iframe", {
                            attrs: {
                              src:
                                "https://open.weixin.qq.com/connect/qrconnect?appid=wx4d48ff97ce37496d&scope=snsapi_login&redirect_uri=https://lanhuapp.com/web/#!/user/login&state=undefined&login_type=jssdk&self_redirect=default",
                              frameborder: "0",
                              scrolling: "no",
                              width: "300px",
                              height: "400px"
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c("div", {
                        staticClass: "wx_close",
                        attrs: { "data-v-201fc8f4": "" }
                      })
                    ]
                  )
                ]
              )
            ]
          )
        ]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-3e26ed42", module.exports)
  }
}

/***/ }),

/***/ 189:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 48:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 49:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(189)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction) {
  isProduction = _isProduction

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[data-vue-ssr-id~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ })

});