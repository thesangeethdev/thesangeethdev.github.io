(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-lifecycle-lifecycle-common.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-lifecycle-lifecycle-common.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-savedstate-savedstate'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-savedstate-savedstate'.");
    }
    globalThis['androidx-savedstate-savedstate'] = factory(typeof globalThis['androidx-savedstate-savedstate'] === 'undefined' ? {} : globalThis['androidx-savedstate-savedstate'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-lifecycle-lifecycle-common']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_lifecycle_lifecycle_common) {
  'use strict';
  //region block: imports
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var protoOf = kotlin_kotlin.$_$.aa;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var equals = kotlin_kotlin.$_$.b9;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var isInterface = kotlin_kotlin.$_$.r9;
  var LifecycleEventObserver = kotlin_androidx_lifecycle_lifecycle_common.$_$.a;
  var hashCode = kotlin_kotlin.$_$.i9;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var Event_ON_STOP_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.i;
  var Event_ON_START_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.h;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t1;
  var toString = kotlin_kotlin.$_$.ca;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var KtMap = kotlin_kotlin.$_$.o3;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var State_STARTED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.n;
  var LinkedHashMap_init_$Create$_0 = kotlin_kotlin.$_$.s1;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(SavedStateRegistryOwner, 'SavedStateRegistryOwner');
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$androidx_lifecycle_LifecycleEventObserver$0, 'sam$androidx_lifecycle_LifecycleEventObserver$0', VOID, VOID, [LifecycleEventObserver, FunctionAdapter]);
  initMetadataForClass(SavedStateRegistryImpl, 'SavedStateRegistryImpl');
  initMetadataForClass(SavedState, 'SavedState');
  initMetadataForInterface(SavedStateProvider, 'SavedStateProvider');
  initMetadataForClass(SavedStateRegistry, 'SavedStateRegistry');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(SavedStateRegistryController, 'SavedStateRegistryController');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function keyOrValueNotFoundError(key) {
    throw IllegalArgumentException_init_$Create$("No valid saved state was found for the key '" + key + "'. It may be missing, null, or not of " + 'the expected type. This can occur if the value was saved with a different type or if the saved state was modified unexpectedly.');
  }
  function SavedStateRegistryOwner() {
  }
  function Companion() {
    this.n6f_1 = 'androidx.lifecycle.BundlableSavedStateRegistry.key';
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function sam$androidx_lifecycle_LifecycleEventObserver$0(function_0) {
    this.o6f_1 = function_0;
  }
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).w6e = function (source, event) {
    return this.o6f_1(source, event);
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).r2 = function () {
    return this.o6f_1;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, LifecycleEventObserver) : false) {
      var tmp_0;
      if (!(other == null) ? isInterface(other, FunctionAdapter) : false) {
        tmp_0 = equals(this.r2(), other.r2());
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(sam$androidx_lifecycle_LifecycleEventObserver$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function SavedStateRegistryImpl$_init_$lambda_jhqb6s() {
    return Unit_instance;
  }
  function SavedStateRegistryImpl$performAttach$lambda(this$0) {
    return function (_unused_var__etf5q3, event) {
      var tmp;
      if (event.equals(Event_ON_START_getInstance())) {
        this$0.w6f_1 = true;
        tmp = Unit_instance;
      } else if (event.equals(Event_ON_STOP_getInstance())) {
        this$0.w6f_1 = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function SavedStateRegistryImpl(owner, onAttach) {
    var tmp;
    if (onAttach === VOID) {
      tmp = SavedStateRegistryImpl$_init_$lambda_jhqb6s;
    } else {
      tmp = onAttach;
    }
    onAttach = tmp;
    this.p6f_1 = owner;
    this.q6f_1 = onAttach;
    this.r6f_1 = new SynchronizedObject();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp_0.s6f_1 = LinkedHashMap_init_$Create$();
    this.t6f_1 = false;
    this.u6f_1 = null;
    this.v6f_1 = false;
    this.w6f_1 = true;
  }
  protoOf(SavedStateRegistryImpl).x6f = function (key) {
    // Inline function 'kotlin.check' call
    if (!this.v6f_1) {
      var message = "You can 'consumeRestoredStateForKey' only after the corresponding component has moved to the 'CREATED' state";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    var tmp0_elvis_lhs = this.u6f_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var state = tmp;
    // Inline function 'androidx.savedstate.read' call
    var $this$read = _SavedStateReader___init__impl__k2stzo(state);
    var consumed = SavedStateReader__contains_impl_ig4u69($this$read, key) ? SavedStateReader__getSavedState_impl_l38yfa($this$read, key) : null;
    // Inline function 'androidx.savedstate.write' call
    var $this$write = _SavedStateWriter___init__impl__99cr38(state);
    SavedStateWriter__remove_impl_9y9m5w($this$write, key);
    // Inline function 'androidx.savedstate.read' call
    var $this$read_0 = _SavedStateReader___init__impl__k2stzo(state);
    if (SavedStateReader__isEmpty_impl_ep4h1z($this$read_0)) {
      this.u6f_1 = null;
    }
    return consumed;
  };
  protoOf(SavedStateRegistryImpl).y6f = function (key, provider) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.r6f_1;
    // Inline function 'kotlin.collections.contains' call
    // Inline function 'kotlin.collections.containsKey' call
    var this_0 = this.s6f_1;
    // Inline function 'kotlin.require' call
    if (!!(isInterface(this_0, KtMap) ? this_0 : THROW_CCE()).s1(key)) {
      var message = 'SavedStateProvider with the given key is already registered';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.collections.set' call
    this.s6f_1.y1(key, provider);
  };
  protoOf(SavedStateRegistryImpl).z6f = function (key) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.r6f_1;
    var tmp0 = this.s6f_1;
    var tmp$ret$3;
    $l$block: {
      // Inline function 'kotlin.collections.firstNotNullOfOrNull' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = tmp0.x1().i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        // Inline function 'kotlin.collections.component1' call
        var k = element.q1();
        // Inline function 'kotlin.collections.component2' call
        var provider = element.r1();
        var result = k === key ? provider : null;
        if (!(result == null)) {
          tmp$ret$3 = result;
          break $l$block;
        }
      }
      tmp$ret$3 = null;
    }
    return tmp$ret$3;
  };
  protoOf(SavedStateRegistryImpl).a6g = function (key) {
    // Inline function 'androidx.savedstate.internal.synchronized' call
    // Inline function 'androidx.savedstate.internal.synchronizedImpl' call
    this.r6f_1;
    this.s6f_1.z1(key);
  };
  protoOf(SavedStateRegistryImpl).b6g = function () {
    // Inline function 'kotlin.check' call
    if (!this.p6f_1.m6f().i6f().equals(State_INITIALIZED_getInstance())) {
      var message = "Restarter must be created only during owner's initialization stage";
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.t6f_1) {
      var message_0 = 'SavedStateRegistry was already attached.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    this.q6f_1();
    var tmp = this.p6f_1.m6f();
    var tmp_0 = SavedStateRegistryImpl$performAttach$lambda(this);
    tmp.g6f(new sam$androidx_lifecycle_LifecycleEventObserver$0(tmp_0));
    this.t6f_1 = true;
  };
  protoOf(SavedStateRegistryImpl).c6g = function (savedState) {
    if (!this.t6f_1) {
      this.b6g();
    }
    // Inline function 'kotlin.check' call
    if (!!this.p6f_1.m6f().i6f().e6f(State_STARTED_getInstance())) {
      var message = 'performRestore cannot be called when owner is ' + this.p6f_1.m6f().i6f().toString();
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.check' call
    if (!!this.v6f_1) {
      var message_0 = 'SavedStateRegistry was already restored.';
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    var tmp = this;
    var tmp_0;
    if (savedState == null) {
      tmp_0 = null;
    } else {
      // Inline function 'androidx.savedstate.read' call
      var $this$read = _SavedStateReader___init__impl__k2stzo(savedState);
      tmp_0 = SavedStateReader__contains_impl_ig4u69($this$read, 'androidx.lifecycle.BundlableSavedStateRegistry.key') ? SavedStateReader__getSavedState_impl_l38yfa($this$read, 'androidx.lifecycle.BundlableSavedStateRegistry.key') : null;
    }
    tmp.u6f_1 = tmp_0;
    this.v6f_1 = true;
  };
  function SavedState(map) {
    var tmp;
    if (map === VOID) {
      // Inline function 'kotlin.collections.mutableMapOf' call
      tmp = LinkedHashMap_init_$Create$();
    } else {
      tmp = map;
    }
    map = tmp;
    this.d6g_1 = map;
  }
  function _SavedStateReader___init__impl__k2stzo(source) {
    return source;
  }
  function _get_source__4cuw5s($this) {
    return $this;
  }
  function SavedStateReader__getSavedState_impl_l38yfa($this, key) {
    var tmp = _get_source__4cuw5s($this).d6g_1.u1(key);
    var tmp0_elvis_lhs = tmp instanceof SavedState ? tmp : null;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      keyOrValueNotFoundError(key);
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return tmp_0;
  }
  function SavedStateReader__isEmpty_impl_ep4h1z($this) {
    return _get_source__4cuw5s($this).d6g_1.n();
  }
  function SavedStateReader__contains_impl_ig4u69($this, key) {
    return _get_source__4cuw5s($this).d6g_1.s1(key);
  }
  function SavedStateReader__toMap_impl_49zebr($this) {
    // Inline function 'kotlin.collections.buildMap' call
    // Inline function 'kotlin.collections.buildMapInternal' call
    var capacity = _get_source__4cuw5s($this).d6g_1.l();
    // Inline function 'kotlin.apply' call
    var this_0 = LinkedHashMap_init_$Create$_0(capacity);
    var _iterator__ex2g4s = _get_source__4cuw5s($this).d6g_1.v1().i();
    while (_iterator__ex2g4s.j()) {
      var key = _iterator__ex2g4s.k();
      this_0.y1(key, _get_source__4cuw5s($this).d6g_1.u1(key));
    }
    return this_0.t4();
  }
  function SavedStateProvider() {
  }
  function SavedStateRegistry(impl) {
    this.e6g_1 = impl;
  }
  protoOf(SavedStateRegistry).x6f = function (key) {
    return this.e6g_1.x6f(key);
  };
  protoOf(SavedStateRegistry).y6f = function (key, provider) {
    this.e6g_1.y6f(key, provider);
  };
  protoOf(SavedStateRegistry).z6f = function (key) {
    return this.e6g_1.z6f(key);
  };
  protoOf(SavedStateRegistry).a6g = function (key) {
    this.e6g_1.a6g(key);
  };
  function Companion_0() {
  }
  protoOf(Companion_0).f6g = function (owner) {
    return new SavedStateRegistryController(new SavedStateRegistryImpl(owner));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function SavedStateRegistryController(impl) {
    this.g6g_1 = impl;
    this.h6g_1 = new SavedStateRegistry(this.g6g_1);
  }
  protoOf(SavedStateRegistryController).b6g = function () {
    this.g6g_1.b6g();
  };
  protoOf(SavedStateRegistryController).i6g = function (savedState) {
    this.g6g_1.c6g(savedState);
  };
  function _SavedStateWriter___init__impl__99cr38(source) {
    return source;
  }
  function _get_source__4cuw5s_0($this) {
    return $this;
  }
  function SavedStateWriter__putAll_impl_no0lvi($this, from) {
    _get_source__4cuw5s_0($this).d6g_1.a2(from.d6g_1);
  }
  function SavedStateWriter__remove_impl_9y9m5w($this, key) {
    _get_source__4cuw5s_0($this).d6g_1.z1(key);
  }
  function SynchronizedObject() {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = SavedStateProvider;
  _.$_$.b = SavedStateRegistryOwner;
  _.$_$.c = SavedState;
  _.$_$.d = _SavedStateReader___init__impl__k2stzo;
  _.$_$.e = SavedStateReader__toMap_impl_49zebr;
  _.$_$.f = _SavedStateWriter___init__impl__99cr38;
  _.$_$.g = SavedStateWriter__putAll_impl_no0lvi;
  _.$_$.h = Companion_instance_0;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-savedstate-savedstate.js.map
