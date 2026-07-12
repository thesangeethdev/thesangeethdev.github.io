(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-util'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-util'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-util'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.c;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var toString = kotlin_kotlin.$_$.ca;
  var Char = kotlin_kotlin.$_$.oc;
  var isCharSequence = kotlin_kotlin.$_$.q9;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var isNaN_0 = kotlin_kotlin.$_$.pd;
  var toRawBits = kotlin_kotlin.$_$.be;
  var fromInt = kotlin_kotlin.$_$.d8;
  var Long = kotlin_kotlin.$_$.yc;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var divide = kotlin_kotlin.$_$.b8;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var floatFromBits = kotlin_kotlin.$_$.c9;
  //endregion
  //region block: pre-declaration
  //endregion
  function fastJoinToString(_this__u8e3s4, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return fastJoinTo(_this__u8e3s4, StringBuilder_init_$Create$(), separator, prefix, postfix, limit, truncated, transform).toString();
  }
  function fastJoinTo(_this__u8e3s4, buffer, separator, prefix, postfix, limit, truncated, transform) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    buffer.h(prefix);
    var count = 0;
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = _this__u8e3s4.m(index);
        count = count + 1 | 0;
        if (count > 1) {
          buffer.h(separator);
        }
        if (limit < 0 || count <= limit) {
          appendElement(buffer, element, transform);
        } else
          break $l$loop;
      }
       while (inductionVariable <= last);
    if (limit >= 0 && count > limit) {
      buffer.h(truncated);
    }
    buffer.h(postfix);
    return buffer;
  }
  function appendElement(_this__u8e3s4, element, transform) {
    if (!(transform == null))
      _this__u8e3s4.h(transform(element));
    else {
      if (element == null ? true : isCharSequence(element))
        _this__u8e3s4.h(element);
      else {
        if (element instanceof Char)
          _this__u8e3s4.r7(element.b1_1);
        else {
          _this__u8e3s4.h(toString(element));
        }
      }
    }
  }
  function lerp(start, stop, fraction) {
    return (1 - fraction) * start + fraction * stop;
  }
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = (stop - start | 0) * fraction;
    return start + (isNaN_0(this_0) ? 0 : roundToInt(this_0)) | 0;
  }
  function fastCbrt(x) {
    var v = bitwiseAnd(fromInt(toRawBits(x)), new Long(-1, 1));
    // Inline function 'kotlin.Long.div' call
    var tmp$ret$0 = divide(v, fromInt(3));
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = 709952852 + convertToInt(tmp$ret$0) | 0;
    var estimate = floatFromBits(bits);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    estimate = estimate - (estimate - x / (estimate * estimate)) * (1.0 / 3.0);
    return estimate;
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fastCbrt;
  _.$_$.b = fastJoinToString;
  _.$_$.c = lerp;
  _.$_$.d = lerp_0;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-util.js.map
