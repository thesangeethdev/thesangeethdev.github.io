(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-geometry'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-geometry'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Long = kotlin_kotlin.$_$.yc;
  var protoOf = kotlin_kotlin.$_$.aa;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var floatFromBits = kotlin_kotlin.$_$.c9;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var isInfinite = kotlin_kotlin.$_$.nd;
  var numberToInt = kotlin_kotlin.$_$.y9;
  var toRawBits = kotlin_kotlin.$_$.be;
  var fromInt = kotlin_kotlin.$_$.d8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var equals = kotlin_kotlin.$_$.b9;
  var shiftRightUnsigned = kotlin_kotlin.$_$.k8;
  var VOID = kotlin_kotlin.$_$.c;
  //endregion
  //region block: pre-declaration
  initMetadataForCompanion(Companion);
  initMetadataForClass(CornerRadius, 'CornerRadius');
  initMetadataForClass(MutableRect, 'MutableRect');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(Offset, 'Offset');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(RoundRect, 'RoundRect');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Size, 'Size');
  //endregion
  function _CornerRadius___init__impl__ojmabe(packedValue) {
    return packedValue;
  }
  function _CornerRadius___get_packedValue__impl__okv4jq($this) {
    return $this;
  }
  function Companion() {
    Companion_instance = this;
    this.u45_1 = _CornerRadius___init__impl__ojmabe(new Long(0, 0));
  }
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function CornerRadius__toString_impl_m3k4zq($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    if (tmp_0 === floatFromBits(bits_0)) {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_1 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(shiftRight(value_1, 32));
      var tmp$ret$8 = floatFromBits(bits_1);
      tmp = 'CornerRadius.circular(' + toStringAsFixed(tmp$ret$8, 1) + ')';
    } else {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      var tmp$ret$12 = floatFromBits(bits_2);
      var tmp_1 = toStringAsFixed(tmp$ret$12, 1);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _CornerRadius___get_packedValue__impl__okv4jq($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      var tmp$ret$16 = floatFromBits(bits_3);
      tmp = 'CornerRadius.elliptical(' + tmp_1 + ', ' + toStringAsFixed(tmp$ret$16, 1) + ')';
    }
    return tmp;
  }
  function CornerRadius__hashCode_impl_r6e06j($this) {
    return $this.hashCode();
  }
  function CornerRadius__equals_impl_776hdl($this, other) {
    if (!(other instanceof CornerRadius))
      return false;
    var tmp0_other_with_cast = other.v45_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function CornerRadius(packedValue) {
    Companion_getInstance();
    this.v45_1 = packedValue;
  }
  protoOf(CornerRadius).toString = function () {
    return CornerRadius__toString_impl_m3k4zq(this.v45_1);
  };
  protoOf(CornerRadius).hashCode = function () {
    return CornerRadius__hashCode_impl_r6e06j(this.v45_1);
  };
  protoOf(CornerRadius).equals = function (other) {
    return CornerRadius__equals_impl_776hdl(this.v45_1, other);
  };
  function toStringAsFixed(_this__u8e3s4, digits) {
    if (isNaN_0(_this__u8e3s4))
      return 'NaN';
    if (isInfinite(_this__u8e3s4))
      return _this__u8e3s4 < 0.0 ? '-Infinity' : 'Infinity';
    // Inline function 'kotlin.math.max' call
    var clampedDigits = Math.max(digits, 0);
    // Inline function 'kotlin.math.pow' call
    var pow = Math.pow(10.0, clampedDigits);
    var shifted = _this__u8e3s4 * pow;
    var decimal = shifted - numberToInt(shifted);
    var tmp;
    if (decimal >= 0.5) {
      tmp = numberToInt(shifted) + 1 | 0;
    } else {
      tmp = numberToInt(shifted);
    }
    var roundedShifted = tmp;
    var rounded = roundedShifted / pow;
    var tmp_0;
    if (clampedDigits > 0) {
      tmp_0 = rounded.toString();
    } else {
      tmp_0 = numberToInt(rounded).toString();
    }
    return tmp_0;
  }
  var androidx_compose_ui_geometry_MutableRect$stable;
  function MutableRect(left, top, right, bottom) {
    this.w45_1 = left;
    this.x45_1 = top;
    this.y45_1 = right;
    this.z45_1 = bottom;
  }
  protoOf(MutableRect).rl = function () {
    return !!(this.w45_1 >= this.y45_1 | this.x45_1 >= this.z45_1);
  };
  protoOf(MutableRect).a46 = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return this.b46(tmp, tmp$ret$4);
  };
  protoOf(MutableRect).b46 = function (translateX, translateY) {
    this.w45_1 = this.w45_1 + translateX;
    this.x45_1 = this.x45_1 + translateY;
    this.y45_1 = this.y45_1 + translateX;
    this.z45_1 = this.z45_1 + translateY;
  };
  protoOf(MutableRect).c46 = function (left, top, right, bottom) {
    var tmp = this;
    // Inline function 'kotlin.math.max' call
    var b = this.w45_1;
    tmp.w45_1 = Math.max(left, b);
    var tmp_0 = this;
    // Inline function 'kotlin.math.max' call
    var b_0 = this.x45_1;
    tmp_0.x45_1 = Math.max(top, b_0);
    var tmp_1 = this;
    // Inline function 'kotlin.math.min' call
    var b_1 = this.y45_1;
    tmp_1.y45_1 = Math.min(right, b_1);
    var tmp_2 = this;
    // Inline function 'kotlin.math.min' call
    var b_2 = this.z45_1;
    tmp_2.z45_1 = Math.min(bottom, b_2);
  };
  protoOf(MutableRect).d46 = function (left, top, right, bottom) {
    this.w45_1 = left;
    this.x45_1 = top;
    this.y45_1 = right;
    this.z45_1 = bottom;
  };
  protoOf(MutableRect).toString = function () {
    return 'MutableRect(' + (toStringAsFixed(this.w45_1, 1) + ', ') + (toStringAsFixed(this.x45_1, 1) + ', ') + (toStringAsFixed(this.y45_1, 1) + ', ') + (toStringAsFixed(this.z45_1, 1) + ')');
  };
  function toRect(_this__u8e3s4) {
    return new Rect(_this__u8e3s4.w45_1, _this__u8e3s4.x45_1, _this__u8e3s4.y45_1, _this__u8e3s4.z45_1);
  }
  function _Offset___init__impl__c168vi(packedValue) {
    return packedValue;
  }
  function _Offset___get_packedValue__impl__xh2k8q($this) {
    return $this;
  }
  function Companion_0() {
    Companion_instance_0 = this;
    this.e46_1 = _Offset___init__impl__c168vi(new Long(0, 0));
    this.f46_1 = _Offset___init__impl__c168vi(new Long(2139095040, 2139095040));
    this.g46_1 = _Offset___init__impl__c168vi(new Long(2143289344, 2143289344));
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Offset__getDistance_impl_pclvxn($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    // Inline function 'kotlin.math.sqrt' call
    var x_0 = x * x + y * y;
    return Math.sqrt(x_0);
  }
  function Offset__getDistanceSquared_impl_97mhi6($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    return x * x + y * y;
  }
  function Offset__minus_impl_hoj2c0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp - floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 - floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__plus_impl_c78cg0($this, other) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp0 = tmp + floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(other);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = tmp_0 + floatFromBits(bits_2);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  function Offset__times_impl_jz1mli($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__div_impl_eaxtg1($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) / operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$6);
  }
  function Offset__toString_impl_4ffbou($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q($this), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$1 = floatFromBits(bits);
      var tmp_0 = toStringAsFixed(tmp$ret$1, 1);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$5 = floatFromBits(bits_0);
      tmp = 'Offset(' + tmp_0 + ', ' + toStringAsFixed(tmp$ret$5, 1) + ')';
    } else {
      tmp = 'Offset.Unspecified';
    }
    return tmp;
  }
  function Offset__hashCode_impl_hbql41($this) {
    return $this.hashCode();
  }
  function Offset__equals_impl_exf2yj($this, other) {
    if (!(other instanceof Offset))
      return false;
    var tmp0_other_with_cast = other.h46_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Offset(packedValue) {
    Companion_getInstance_0();
    this.h46_1 = packedValue;
  }
  protoOf(Offset).toString = function () {
    return Offset__toString_impl_4ffbou(this.h46_1);
  };
  protoOf(Offset).hashCode = function () {
    return Offset__hashCode_impl_hbql41(this.h46_1);
  };
  protoOf(Offset).equals = function (other) {
    return Offset__equals_impl_exf2yj(this.h46_1, other);
  };
  function lerp_0(start, stop, fraction) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(start);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(stop);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(shiftRight(value_0, 32));
    var tmp$ret$3 = floatFromBits(bits_0);
    var tmp0 = lerp(tmp, tmp$ret$3, fraction);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(start);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(stop);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$9 = floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = lerp(tmp_0, tmp$ret$9, fraction);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$12 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$12);
  }
  var androidx_compose_ui_geometry_Rect$stable;
  function Companion_1() {
    Companion_instance_1 = this;
    this.i46_1 = new Rect(0.0, 0.0, 0.0, 0.0);
  }
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function Rect(left, top, right, bottom) {
    Companion_getInstance_1();
    this.j46_1 = left;
    this.k46_1 = top;
    this.l46_1 = right;
    this.m46_1 = bottom;
  }
  protoOf(Rect).n46 = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp$ret$0 = floatFromBits(bits);
    var tmp = this.j46_1 + tmp$ret$0;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    var tmp_0 = this.k46_1 + tmp$ret$4;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp$ret$8 = floatFromBits(bits_1);
    var tmp_1 = this.l46_1 + tmp$ret$8;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var tmp$ret$12 = floatFromBits(bits_2);
    return new Rect(tmp, tmp_0, tmp_1, this.m46_1 + tmp$ret$12);
  };
  protoOf(Rect).o46 = function (translateX, translateY) {
    return new Rect(this.j46_1 + translateX, this.k46_1 + translateY, this.l46_1 + translateX, this.m46_1 + translateY);
  };
  protoOf(Rect).p46 = function () {
    var tmp0 = this.j46_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.k46_1;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$1);
  };
  protoOf(Rect).q46 = function (offset) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var x = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var y = floatFromBits(bits_0);
    return !!(!!(!!(x >= this.j46_1 & x < this.l46_1) & y >= this.k46_1) & y < this.m46_1);
  };
  protoOf(Rect).toString = function () {
    return 'Rect.fromLTRB(' + (toStringAsFixed(this.j46_1, 1) + ', ') + (toStringAsFixed(this.k46_1, 1) + ', ') + (toStringAsFixed(this.l46_1, 1) + ', ') + (toStringAsFixed(this.m46_1, 1) + ')');
  };
  protoOf(Rect).hashCode = function () {
    var result = getNumberHashCode(this.j46_1);
    result = imul(result, 31) + getNumberHashCode(this.k46_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.l46_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.m46_1) | 0;
    return result;
  };
  protoOf(Rect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!equals(this.j46_1, other.j46_1))
      return false;
    if (!equals(this.k46_1, other.k46_1))
      return false;
    if (!equals(this.l46_1, other.l46_1))
      return false;
    if (!equals(this.m46_1, other.m46_1))
      return false;
    return true;
  };
  function Rect_0(offset, size) {
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_1 = floatFromBits(bits_1);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp_2 = tmp_1 + floatFromBits(bits_2);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(offset);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_3 = floatFromBits(bits_3);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$20 = floatFromBits(bits_4);
    return new Rect(tmp, tmp_0, tmp_2, tmp_3 + tmp$ret$20);
  }
  var androidx_compose_ui_geometry_RoundRect$stable;
  function get_isSimple(_this__u8e3s4) {
    var tmp;
    var tmp_0;
    var tmp_1;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.isCircular' call
    var this_0 = _this__u8e3s4.v46_1;
    if (equalsLong(shiftRightUnsigned(_CornerRadius___get_packedValue__impl__okv4jq(this_0), 32), bitwiseAnd(_CornerRadius___get_packedValue__impl__okv4jq(this_0), new Long(-1, 0)))) {
      tmp_1 = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.v46_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.w46_1));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.v46_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.x46_1));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equalsLong(_CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.v46_1), _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4.y46_1));
    } else {
      tmp = false;
    }
    return tmp;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    this.a47_1 = RoundRect_1(0.0, 0.0, 0.0, 0.0, Companion_getInstance().u45_1);
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function RoundRect(left, top, right, bottom, topLeftCornerRadius, topRightCornerRadius, bottomRightCornerRadius, bottomLeftCornerRadius) {
    Companion_getInstance_2();
    topLeftCornerRadius = topLeftCornerRadius === VOID ? Companion_getInstance().u45_1 : topLeftCornerRadius;
    topRightCornerRadius = topRightCornerRadius === VOID ? Companion_getInstance().u45_1 : topRightCornerRadius;
    bottomRightCornerRadius = bottomRightCornerRadius === VOID ? Companion_getInstance().u45_1 : bottomRightCornerRadius;
    bottomLeftCornerRadius = bottomLeftCornerRadius === VOID ? Companion_getInstance().u45_1 : bottomLeftCornerRadius;
    this.r46_1 = left;
    this.s46_1 = top;
    this.t46_1 = right;
    this.u46_1 = bottom;
    this.v46_1 = topLeftCornerRadius;
    this.w46_1 = topRightCornerRadius;
    this.x46_1 = bottomRightCornerRadius;
    this.y46_1 = bottomLeftCornerRadius;
    this.z46_1 = null;
  }
  protoOf(RoundRect).b47 = function () {
    return this.t46_1 - this.r46_1;
  };
  protoOf(RoundRect).c47 = function () {
    return this.u46_1 - this.s46_1;
  };
  protoOf(RoundRect).toString = function () {
    var tlRadius = this.v46_1;
    var trRadius = this.w46_1;
    var brRadius = this.x46_1;
    var blRadius = this.y46_1;
    var rect = toStringAsFixed(this.r46_1, 1) + ', ' + (toStringAsFixed(this.s46_1, 1) + ', ') + (toStringAsFixed(this.t46_1, 1) + ', ') + toStringAsFixed(this.u46_1, 1);
    if (equals(tlRadius, trRadius) && equals(trRadius, brRadius) && equals(brRadius, blRadius)) {
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      if (tmp === floatFromBits(bits_0)) {
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_1 = convertToInt(shiftRight(value_1, 32));
        var tmp$ret$8 = floatFromBits(bits_1);
        return 'RoundRect(rect=' + rect + ', radius=' + toStringAsFixed(tmp$ret$8, 1) + ')';
      }
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_2 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(shiftRight(value_2, 32));
      var tmp$ret$12 = floatFromBits(bits_2);
      var tmp_0 = 'RoundRect(rect=' + rect + ', x=' + toStringAsFixed(tmp$ret$12, 1) + ', ';
      // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_3 = _CornerRadius___get_packedValue__impl__okv4jq(tlRadius);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
      var tmp$ret$16 = floatFromBits(bits_3);
      return tmp_0 + ('y=' + toStringAsFixed(tmp$ret$16, 1) + ')');
    }
    return 'RoundRect(' + ('rect=' + rect + ', ') + ('topLeft=' + CornerRadius__toString_impl_m3k4zq(tlRadius) + ', ') + ('topRight=' + CornerRadius__toString_impl_m3k4zq(trRadius) + ', ') + ('bottomRight=' + CornerRadius__toString_impl_m3k4zq(brRadius) + ', ') + ('bottomLeft=' + CornerRadius__toString_impl_m3k4zq(blRadius) + ')');
  };
  protoOf(RoundRect).hashCode = function () {
    var result = getNumberHashCode(this.r46_1);
    result = imul(result, 31) + getNumberHashCode(this.s46_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.t46_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u46_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.v46_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.w46_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.x46_1) | 0;
    result = imul(result, 31) + CornerRadius__hashCode_impl_r6e06j(this.y46_1) | 0;
    return result;
  };
  protoOf(RoundRect).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundRect))
      return false;
    if (!equals(this.r46_1, other.r46_1))
      return false;
    if (!equals(this.s46_1, other.s46_1))
      return false;
    if (!equals(this.t46_1, other.t46_1))
      return false;
    if (!equals(this.u46_1, other.u46_1))
      return false;
    if (!equals(this.v46_1, other.v46_1))
      return false;
    if (!equals(this.w46_1, other.w46_1))
      return false;
    if (!equals(this.x46_1, other.x46_1))
      return false;
    if (!equals(this.y46_1, other.y46_1))
      return false;
    return true;
  };
  function RoundRect_0(rect, topLeft, topRight, bottomRight, bottomLeft) {
    topLeft = topLeft === VOID ? Companion_getInstance().u45_1 : topLeft;
    topRight = topRight === VOID ? Companion_getInstance().u45_1 : topRight;
    bottomRight = bottomRight === VOID ? Companion_getInstance().u45_1 : bottomRight;
    bottomLeft = bottomLeft === VOID ? Companion_getInstance().u45_1 : bottomLeft;
    return new RoundRect(rect.j46_1, rect.k46_1, rect.l46_1, rect.m46_1, topLeft, topRight, bottomRight, bottomLeft);
  }
  function RoundRect_1(left, top, right, bottom, cornerRadius) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(cornerRadius);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return RoundRect_2(left, top, right, bottom, tmp, tmp$ret$4);
  }
  function RoundRect_2(left, top, right, bottom, radiusX, radiusY) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(radiusX));
    var v2 = fromInt(toRawBits(radiusY));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var radius = _CornerRadius___init__impl__ojmabe(tmp$ret$1);
    return new RoundRect(left, top, right, bottom, radius, radius, radius, radius);
  }
  function _Size___init__impl__aywn0g(packedValue) {
    return packedValue;
  }
  function _Size___get_packedValue__impl__7rlt1o($this) {
    return $this;
  }
  function Companion_3() {
    Companion_instance_3 = this;
    this.d47_1 = _Size___init__impl__aywn0g(new Long(0, 0));
    this.e47_1 = _Size___init__impl__aywn0g(new Long(2143289344, 2143289344));
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    if (Companion_instance_3 == null)
      new Companion_3();
    return Companion_instance_3;
  }
  function Size__isEmpty_impl_o9ye97($this) {
    // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
    var tmp = equalsLong(_Size___get_packedValue__impl__7rlt1o($this), new Long(2143289344, 2143289344));
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = !!(tmp | floatFromBits(bits) <= 0.0);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return !!(tmp_0 | floatFromBits(bits_0) <= 0.0);
  }
  function Size__times_impl_fnp4nc($this, operand) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) * operand;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) * operand;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$6 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$6);
  }
  function _Size___get_minDimension__impl__4iso0r($this) {
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(shiftRight(value, 32), new Long(2147483647, 0)));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.util.unpackAbsFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(2147483647, 0)));
    // Inline function 'kotlin.math.min' call
    var b = floatFromBits(bits_0);
    return Math.min(tmp0, b);
  }
  function Size__toString_impl_o87ni8($this) {
    var tmp;
    // Inline function 'androidx.compose.ui.geometry.isSpecified' call
    if (!equalsLong(_Size___get_packedValue__impl__7rlt1o($this), new Long(2143289344, 2143289344))) {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$1 = floatFromBits(bits);
      var tmp_0 = toStringAsFixed(tmp$ret$1, 1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o($this);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$5 = floatFromBits(bits_0);
      tmp = 'Size(' + tmp_0 + ', ' + toStringAsFixed(tmp$ret$5, 1) + ')';
    } else {
      tmp = 'Size.Unspecified';
    }
    return tmp;
  }
  function Size__hashCode_impl_2h1qpd($this) {
    return $this.hashCode();
  }
  function Size__equals_impl_gzcc1f($this, other) {
    if (!(other instanceof Size))
      return false;
    var tmp0_other_with_cast = other.f47_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function Size(packedValue) {
    Companion_getInstance_3();
    this.f47_1 = packedValue;
  }
  protoOf(Size).toString = function () {
    return Size__toString_impl_o87ni8(this.f47_1);
  };
  protoOf(Size).hashCode = function () {
    return Size__hashCode_impl_2h1qpd(this.f47_1);
  };
  protoOf(Size).equals = function (other) {
    return Size__equals_impl_gzcc1f(this.f47_1, other);
  };
  function toRect_0(_this__u8e3s4) {
    return Rect_0(Companion_getInstance_0().e46_1, _this__u8e3s4);
  }
  function get_center(_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits) / 2.0;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0) / 2.0;
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Offset___init__impl__c168vi(tmp$ret$7);
  }
  //region block: init
  androidx_compose_ui_geometry_MutableRect$stable = 8;
  androidx_compose_ui_geometry_Rect$stable = 0;
  androidx_compose_ui_geometry_RoundRect$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CornerRadius;
  _.$_$.b = MutableRect;
  _.$_$.c = Offset;
  _.$_$.d = Rect_0;
  _.$_$.e = Rect;
  _.$_$.f = RoundRect_0;
  _.$_$.g = RoundRect_1;
  _.$_$.h = RoundRect;
  _.$_$.i = Size;
  _.$_$.j = get_center;
  _.$_$.k = get_isSimple;
  _.$_$.l = lerp_0;
  _.$_$.m = toRect;
  _.$_$.n = toRect_0;
  _.$_$.o = _CornerRadius___init__impl__ojmabe;
  _.$_$.p = _CornerRadius___get_packedValue__impl__okv4jq;
  _.$_$.q = _Offset___init__impl__c168vi;
  _.$_$.r = Offset__div_impl_eaxtg1;
  _.$_$.s = Offset__getDistanceSquared_impl_97mhi6;
  _.$_$.t = Offset__getDistance_impl_pclvxn;
  _.$_$.u = Offset__hashCode_impl_hbql41;
  _.$_$.v = Offset__minus_impl_hoj2c0;
  _.$_$.w = _Offset___get_packedValue__impl__xh2k8q;
  _.$_$.x = Offset__plus_impl_c78cg0;
  _.$_$.y = Offset__times_impl_jz1mli;
  _.$_$.z = Offset__toString_impl_4ffbou;
  _.$_$.a1 = _Size___init__impl__aywn0g;
  _.$_$.b1 = Size__hashCode_impl_2h1qpd;
  _.$_$.c1 = Size__isEmpty_impl_o9ye97;
  _.$_$.d1 = _Size___get_minDimension__impl__4iso0r;
  _.$_$.e1 = _Size___get_packedValue__impl__7rlt1o;
  _.$_$.f1 = Size__times_impl_fnp4nc;
  _.$_$.g1 = Size__toString_impl_o87ni8;
  _.$_$.h1 = Companion_getInstance;
  _.$_$.i1 = Companion_getInstance_0;
  _.$_$.j1 = Companion_getInstance_1;
  _.$_$.k1 = Companion_getInstance_3;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-geometry.js.map
