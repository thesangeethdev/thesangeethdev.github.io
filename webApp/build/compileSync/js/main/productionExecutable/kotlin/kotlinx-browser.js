(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-browser'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-browser'.");
    }
    globalThis['kotlinx-browser'] = factory(typeof globalThis['kotlinx-browser'] === 'undefined' ? {} : globalThis['kotlinx-browser'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  //endregion
  //region block: pre-declaration
  //endregion
  function clear(_this__u8e3s4) {
    while (_this__u8e3s4.hasChildNodes()) {
      _this__u8e3s4.removeChild(ensureNotNull(_this__u8e3s4.firstChild));
    }
  }
  function get_undefined() {
    return undefined_0;
  }
  var undefined_0;
  //region block: init
  undefined_0 = null;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = clear;
  _.$_$.b = get_undefined;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-browser.js.map
