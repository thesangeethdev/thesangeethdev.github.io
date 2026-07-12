(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './androidx-collection-collection.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./androidx-collection-collection.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'androidx-compose-runtime-runtime-saveable'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'androidx-compose-runtime-runtime-saveable'.");
    }
    globalThis['androidx-compose-runtime-runtime-saveable'] = factory(typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined' ? {} : globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['androidx-collection-collection']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_androidx_collection_collection) {
  'use strict';
  //region block: imports
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var charSequenceLength = kotlin_kotlin.$_$.v8;
  var toString = kotlin_kotlin.$_$.ic;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var isInterface = kotlin_kotlin.$_$.r9;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var SideEffect = kotlin_androidx_compose_runtime_runtime.$_$.v;
  var toString_0 = kotlin_kotlin.$_$.de;
  var toString_1 = kotlin_kotlin.$_$.ca;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var protoOf = kotlin_kotlin.$_$.aa;
  var contentEquals = kotlin_kotlin.$_$.f4;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.c;
  var neverEqualPolicy = kotlin_androidx_compose_runtime_runtime.$_$.k1;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var referentialEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.m1;
  var SnapshotMutableState = kotlin_androidx_compose_runtime_runtime.$_$.d;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.d1;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m1;
  var emptyMap = kotlin_kotlin.$_$.t4;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o1;
  var invert = kotlin_kotlin.$_$.e8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var Long = kotlin_kotlin.$_$.yc;
  var compare = kotlin_kotlin.$_$.y7;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var arrayListOf = kotlin_kotlin.$_$.w3;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var charSequenceGet = kotlin_kotlin.$_$.u8;
  var isWhitespace = kotlin_kotlin.$_$.sb;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(SaveableHolder, 'SaveableHolder', VOID, VOID, [RememberObserver]);
  initMetadataForInterface(SaveableStateRegistry, 'SaveableStateRegistry');
  initMetadataForClass(SaveableStateRegistryImpl$registerProvider$1);
  initMetadataForClass(SaveableStateRegistryImpl, 'SaveableStateRegistryImpl', VOID, VOID, [SaveableStateRegistry]);
  initMetadataForInterface(Saver, 'Saver');
  initMetadataForClass(Saver$1, VOID, VOID, VOID, [Saver]);
  //endregion
  var MaxSupportedRadix;
  function rememberSaveable(inputs, saver, init, $composer, $changed) {
    var $composer_0 = $composer;
    return rememberSaveable_0(inputs.slice(), saver, null, init, $composer_0, 384 | 112 & $changed | 7168 & $changed << 3, 0);
  }
  function rememberSaveable_0(inputs, saver, key, init, $composer, $changed, $default) {
    var saver_0 = {_v: saver};
    var key_0 = key;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0)) {
      saver_0._v = autoSaver();
    }
    if (!(($default & 4) === 0))
      key_0 = null;
    var compositeKey = get_currentCompositeKeyHashCode($composer_0, 0);
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    var this_0 = key_0;
    if (!(this_0 == null || charSequenceLength(this_0) === 0)) {
      tmp = key_0;
    } else {
      // Inline function 'androidx.compose.runtime.toString' call
      var radix = MaxSupportedRadix;
      tmp = toString(compositeKey, radix);
    }
    var finalKey = tmp;
    var tmp_0 = saver_0._v;
    if (!isInterface(tmp_0, Saver))
      THROW_CCE();
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_1 = get_LocalSaveableStateRegistry();
    var $composer_1 = $composer_0;
    var registry = $composer_1.q1z(this_1);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp_1;
    if (false || it === Companion_getInstance().f1y_1) {
      var tmp1_safe_receiver = registry == null ? null : registry.n5k(finalKey);
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_2 = saver_0._v.o5k(tmp1_safe_receiver);
      }
      var restored = tmp_2;
      var finalValue = restored == null ? init() : restored;
      var value = new SaveableHolder(saver_0._v, registry, finalKey, finalValue, inputs);
      $composer_0.f1z(value);
      tmp_1 = value;
    } else {
      tmp_1 = it;
    }
    var holder = tmp_1;
    var tmp0_elvis_lhs = holder.w5k(inputs);
    var value_0 = tmp0_elvis_lhs == null ? init() : tmp0_elvis_lhs;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.l1z(holder) | (($changed & 112 ^ 48) > 32 && $composer_0.l1z(saver_0._v) || ($changed & 48) === 32)) | $composer_0.l1z(registry)) | $composer_0.g1z(finalKey)) | $composer_0.l1z(value_0)) | $composer_0.l1z(inputs));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.e1z();
    var tmp_3;
    if (invalid || it_0 === Companion_getInstance().f1y_1) {
      var value_1 = rememberSaveable$lambda(holder, saver_0, registry, finalKey, value_0, inputs);
      $composer_0.f1z(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_0;
    }
    var tmp$ret$9 = tmp_3;
    SideEffect(tmp$ret$9, $composer_0, 0);
    return value_0;
  }
  function register($this) {
    var registry = $this.q5k_1;
    // Inline function 'kotlin.require' call
    if (!($this.u5k_1 == null)) {
      var message = 'entry(' + toString_0($this.u5k_1) + ') is not null';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    if (!(registry == null)) {
      requireCanBeSaved(registry, $this.v5k_1());
      $this.u5k_1 = registry.x5k($this.r5k_1, $this.v5k_1);
    }
  }
  function SaveableHolder$valueProvider$lambda(this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      var $this$with = this$0.p5k_1;
      var tmp0 = this$0.s5k_1;
      var tmp$ret$2;
      $l$block: {
        // Inline function 'kotlin.requireNotNull' call
        if (tmp0 == null) {
          var message = 'Value should be initialized';
          throw IllegalArgumentException_init_$Create$(toString_1(message));
        } else {
          tmp$ret$2 = tmp0;
          break $l$block;
        }
      }
      return $this$with.y5k(this$0, tmp$ret$2);
    };
  }
  function SaveableHolder(saver, registry, key, value, inputs) {
    this.p5k_1 = saver;
    this.q5k_1 = registry;
    this.r5k_1 = key;
    this.s5k_1 = value;
    this.t5k_1 = inputs;
    this.u5k_1 = null;
    var tmp = this;
    tmp.v5k_1 = SaveableHolder$valueProvider$lambda(this);
  }
  protoOf(SaveableHolder).z5k = function (saver, registry, key, value, inputs) {
    var entryIsOutdated = false;
    if (!(this.q5k_1 === registry)) {
      this.q5k_1 = registry;
      entryIsOutdated = true;
    }
    if (!(this.r5k_1 === key)) {
      this.r5k_1 = key;
      entryIsOutdated = true;
    }
    this.p5k_1 = saver;
    this.s5k_1 = value;
    this.t5k_1 = inputs;
    if (!(this.u5k_1 == null) && entryIsOutdated) {
      var tmp0_safe_receiver = this.u5k_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.a5l();
      }
      this.u5k_1 = null;
      register(this);
    }
  };
  protoOf(SaveableHolder).u2c = function () {
    register(this);
  };
  protoOf(SaveableHolder).v2c = function () {
    var tmp0_safe_receiver = this.u5k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a5l();
    }
  };
  protoOf(SaveableHolder).w2c = function () {
    var tmp0_safe_receiver = this.u5k_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.a5l();
    }
  };
  protoOf(SaveableHolder).w5k = function (inputs) {
    var tmp;
    if (contentEquals(inputs, this.t5k_1)) {
      tmp = this.s5k_1;
    } else {
      tmp = null;
    }
    return tmp;
  };
  function requireCanBeSaved(_this__u8e3s4, value) {
    if (!(value == null) && !_this__u8e3s4.b5l(value)) {
      var tmp;
      if (isInterface(value, SnapshotMutableState)) {
        var tmp_0;
        if (!(value.v2a() === neverEqualPolicy()) && !(value.v2a() === structuralEqualityPolicy()) && !(value.v2a() === referentialEqualityPolicy())) {
          tmp_0 = 'If you use a custom SnapshotMutationPolicy for your MutableState you have to write a custom Saver';
        } else {
          tmp_0 = 'MutableState containing ' + toString_0(value.r1()) + ' cannot be saved using the current ' + 'SaveableStateRegistry. The default implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it as a stateSaver parameter to rememberSaveable().';
        }
        tmp = tmp_0;
      } else {
        tmp = generateCannotBeSavedErrorMessage(value);
      }
      throw IllegalArgumentException_init_$Create$(tmp);
    }
  }
  function generateCannotBeSavedErrorMessage(value) {
    return toString_1(value) + ' cannot be saved using the current SaveableStateRegistry. The default ' + 'implementation only supports types which can be stored inside the Bundle. Please consider implementing a custom Saver for this class and pass it to rememberSaveable().';
  }
  function rememberSaveable$lambda($holder, $saver, $registry, $finalKey, $value, $inputs) {
    return function () {
      $holder.z5k($saver._v, $registry, $finalKey, $value, $inputs);
      return Unit_instance;
    };
  }
  function get_LocalSaveableStateRegistry() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return LocalSaveableStateRegistry;
  }
  var LocalSaveableStateRegistry;
  function SaveableStateRegistry() {
  }
  function SaveableStateRegistry_0(restoredValues, canBeSaved) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return new SaveableStateRegistryImpl(restoredValues, canBeSaved);
  }
  function SaveableStateRegistryImpl$registerProvider$1($valueProviders, $key, $valueProvider) {
    this.d5l_1 = $valueProviders;
    this.e5l_1 = $key;
    this.f5l_1 = $valueProvider;
  }
  protoOf(SaveableStateRegistryImpl$registerProvider$1).a5l = function () {
    var list = this.d5l_1.z1(this.e5l_1);
    if (list == null)
      null;
    else
      list.c2(this.f5l_1);
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.n())) {
      this.d5l_1.wn(this.e5l_1, list);
    }
  };
  function SaveableStateRegistryImpl(restored, canBeSaved) {
    this.g5l_1 = canBeSaved;
    var tmp = this;
    var tmp_0;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(restored == null || restored.n())) {
      tmp_0 = toMutableScatterMap(restored);
    } else {
      tmp_0 = null;
    }
    tmp.h5l_1 = tmp_0;
    this.i5l_1 = null;
  }
  protoOf(SaveableStateRegistryImpl).b5l = function (value) {
    return this.g5l_1(value);
  };
  protoOf(SaveableStateRegistryImpl).n5k = function (key) {
    var tmp0_safe_receiver = this.h5l_1;
    var list = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z1(key);
    var tmp;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(list == null || list.n())) {
      if (list.l() > 1) {
        var tmp1_safe_receiver = this.h5l_1;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver.y1(key, list.o1(1, list.l()));
      }
      tmp = list.m(0);
    } else {
      tmp = null;
    }
    return tmp;
  };
  protoOf(SaveableStateRegistryImpl).x5k = function (key, valueProvider) {
    // Inline function 'kotlin.require' call
    if (!!fastIsBlank(key)) {
      var message = 'Registered key is empty or blank';
      throw IllegalArgumentException_init_$Create$(toString_1(message));
    }
    var tmp0_elvis_lhs = this.i5l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = mutableScatterMapOf();
      this.i5l_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var valueProviders = tmp;
    // Inline function 'androidx.collection.MutableScatterMap.getOrPut' call
    var tmp0_elvis_lhs_0 = valueProviders.u1(key);
    var tmp_0;
    if (tmp0_elvis_lhs_0 == null) {
      // Inline function 'kotlin.collections.mutableListOf' call
      // Inline function 'kotlin.also' call
      var this_1 = ArrayList_init_$Create$();
      valueProviders.wn(key, this_1);
      tmp_0 = this_1;
    } else {
      tmp_0 = tmp0_elvis_lhs_0;
    }
    tmp_0.g(valueProvider);
    return new SaveableStateRegistryImpl$registerProvider$1(valueProviders, key, valueProvider);
  };
  protoOf(SaveableStateRegistryImpl).c5l = function () {
    if (this.h5l_1 == null && this.i5l_1 == null) {
      return emptyMap();
    }
    var tmp0_safe_receiver = this.h5l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l();
    var tmp = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp2_safe_receiver = this.i5l_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.l();
    var expectedMapSize = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    // Inline function 'kotlin.apply' call
    var this_0 = HashMap_init_$Create$(expectedMapSize);
    var tmp0_safe_receiver_0 = this.h5l_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k = tmp0_safe_receiver_0.mn_1;
      var v = tmp0_safe_receiver_0.nn_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = tmp0_safe_receiver_0.ln_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index = (i << 3) + j | 0;
                    var tmp0 = k[index];
                    // Inline function 'kotlin.collections.set' call
                    var value_0 = v[index];
                    this_0.y1(tmp0, value_0);
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block;
              }
            }
          }
           while (!(i === lastIndex));
      }
    }
    var map = this_0;
    var tmp4_safe_receiver = this.i5l_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var k_0 = tmp4_safe_receiver.mn_1;
      var v_0 = tmp4_safe_receiver.nn_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m_0 = tmp4_safe_receiver.ln_1;
        var lastIndex_0 = m_0.length - 2 | 0;
        var inductionVariable_1 = 0;
        if (inductionVariable_1 <= lastIndex_0)
          do {
            var i_0 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var slot_0 = m_0[i_0];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_2 = slot_0;
            var tmp$ret$11 = bitwiseAnd(bitwiseAnd(this_2, shiftLeft(invert(this_2), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$11, new Long(-2139062144, -2139062144))) {
              var bitCount_0 = 8 - (~(i_0 - lastIndex_0 | 0) >>> 31 | 0) | 0;
              var inductionVariable_2 = 0;
              if (inductionVariable_2 < bitCount_0)
                do {
                  var j_0 = inductionVariable_2;
                  inductionVariable_2 = inductionVariable_2 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value_1 = bitwiseAnd(slot_0, new Long(255, 0));
                  if (compare(value_1, new Long(128, 0)) < 0) {
                    var index_0 = (i_0 << 3) + j_0 | 0;
                    var tmp0_0 = k_0[index_0];
                    var list = v_0[index_0];
                    if (list.l() === 1) {
                      var value_2 = list.m(0)();
                      if (!(value_2 == null)) {
                        // Inline function 'kotlin.check' call
                        if (!this.b5l(value_2)) {
                          var message = generateCannotBeSavedErrorMessage(value_2);
                          throw IllegalStateException_init_$Create$(toString_1(message));
                        }
                        // Inline function 'kotlin.collections.set' call
                        var value_3 = arrayListOf([value_2]);
                        map.y1(tmp0_0, value_3);
                      }
                    } else {
                      // Inline function 'kotlin.collections.List' call
                      // Inline function 'kotlin.collections.MutableList' call
                      var size = list.l();
                      var list_0 = ArrayList_init_$Create$_0(size);
                      // Inline function 'kotlin.repeat' call
                      var inductionVariable_3 = 0;
                      if (inductionVariable_3 < size)
                        do {
                          var index_1 = inductionVariable_3;
                          inductionVariable_3 = inductionVariable_3 + 1 | 0;
                          var value_4 = list.m(index_1)();
                          if (!(value_4 == null)) {
                            // Inline function 'kotlin.check' call
                            if (!this.b5l(value_4)) {
                              var message_0 = generateCannotBeSavedErrorMessage(value_4);
                              throw IllegalStateException_init_$Create$(toString_1(message_0));
                            }
                          }
                          list_0.g(value_4);
                        }
                         while (inductionVariable_3 < size);
                      // Inline function 'kotlin.collections.set' call
                      map.y1(tmp0_0, list_0);
                    }
                  }
                  slot_0 = shiftRight(slot_0, 8);
                }
                 while (inductionVariable_2 < bitCount_0);
              if (!(bitCount_0 === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i_0 === lastIndex_0));
      }
    }
    return map;
  };
  function toMutableScatterMap(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableScatterMap(_this__u8e3s4.l());
    // Inline function 'androidx.collection.MutableScatterMap.plusAssign' call
    this_0.yn(_this__u8e3s4);
    return this_0;
  }
  function fastIsBlank(_this__u8e3s4) {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    var blank = true;
    var inductionVariable = 0;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      $l$loop: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!isWhitespace(charSequenceGet(_this__u8e3s4, i))) {
          blank = false;
          break $l$loop;
        }
      }
       while (inductionVariable < last);
    return blank;
  }
  function LocalSaveableStateRegistry$lambda() {
    _init_properties_SaveableStateRegistry_kt__lr5zhh();
    return null;
  }
  var properties_initialized_SaveableStateRegistry_kt_4lrdzt;
  function _init_properties_SaveableStateRegistry_kt__lr5zhh() {
    if (!properties_initialized_SaveableStateRegistry_kt_4lrdzt) {
      properties_initialized_SaveableStateRegistry_kt_4lrdzt = true;
      LocalSaveableStateRegistry = staticCompositionLocalOf(LocalSaveableStateRegistry$lambda);
    }
  }
  var androidx_compose_runtime_saveable_SaveableStateRegistryWrapper$stable;
  function get_AutoSaver() {
    _init_properties_Saver_kt__z47nhf();
    return AutoSaver;
  }
  var AutoSaver;
  function Saver() {
  }
  function Saver_0(save, restore) {
    _init_properties_Saver_kt__z47nhf();
    return new Saver$1(save, restore);
  }
  function autoSaver() {
    _init_properties_Saver_kt__z47nhf();
    var tmp = get_AutoSaver();
    return isInterface(tmp, Saver) ? tmp : THROW_CCE();
  }
  function AutoSaver$lambda($this$Saver, it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function AutoSaver$lambda_0(it) {
    _init_properties_Saver_kt__z47nhf();
    return it;
  }
  function Saver$1($save, $restore) {
    this.j5l_1 = $save;
    this.k5l_1 = $restore;
  }
  protoOf(Saver$1).y5k = function (_this__u8e3s4, value) {
    return this.j5l_1(_this__u8e3s4, value);
  };
  protoOf(Saver$1).o5k = function (value) {
    return this.k5l_1(value);
  };
  var properties_initialized_Saver_kt_ch40dh;
  function _init_properties_Saver_kt__z47nhf() {
    if (!properties_initialized_Saver_kt_ch40dh) {
      properties_initialized_Saver_kt_ch40dh = true;
      var tmp = AutoSaver$lambda;
      AutoSaver = Saver_0(tmp, AutoSaver$lambda_0);
    }
  }
  //region block: init
  MaxSupportedRadix = 36;
  androidx_compose_runtime_saveable_SaveableStateRegistryWrapper$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_LocalSaveableStateRegistry;
  _.$_$.b = SaveableStateRegistry_0;
  _.$_$.c = SaveableStateRegistry;
  _.$_$.d = Saver_0;
  _.$_$.e = Saver;
  _.$_$.f = rememberSaveable;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-compose-runtime-runtime-saveable.js.map
