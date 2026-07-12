(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './androidx-lifecycle-lifecycle-common.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./androidx-lifecycle-lifecycle-common.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['androidx-lifecycle-lifecycle-common'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'androidx-lifecycle-lifecycle-common' was not found. Please, check whether 'androidx-lifecycle-lifecycle-common' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-runtime'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-lifecycle-lifecycle-runtime'.");
    }
    globalThis['androidx-lifecycle-lifecycle-runtime'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-runtime'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-runtime'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['androidx-lifecycle-lifecycle-common'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_androidx_lifecycle_lifecycle_common, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.aa;
  var toString = kotlin_kotlin.$_$.de;
  var hashCode = kotlin_kotlin.$_$.i9;
  var equals = kotlin_kotlin.$_$.b9;
  var Entry = kotlin_kotlin.$_$.n3;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.c;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.t2;
  var objectCreate = kotlin_kotlin.$_$.z9;
  var State_DESTROYED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.k;
  var toString_0 = kotlin_kotlin.$_$.ca;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var Lifecycling_instance = kotlin_androidx_lifecycle_lifecycle_common.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var Companion_instance = kotlin_androidx_lifecycle_lifecycle_common.$_$.c;
  var removeLastOrNull = kotlin_kotlin.$_$.f6;
  var Lifecycle = kotlin_androidx_lifecycle_lifecycle_common.$_$.b;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m1;
  var State_INITIALIZED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.l;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var State_CREATED_getInstance = kotlin_androidx_lifecycle_lifecycle_common.$_$.j;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Entry_0, 'Entry', VOID, VOID, [Entry]);
  initMetadataForClass(FastSafeIterableMap, 'FastSafeIterableMap', FastSafeIterableMap);
  initMetadataForClass(ObserverWithState, 'ObserverWithState');
  initMetadataForCompanion(Companion);
  initMetadataForClass(LifecycleRegistry, 'LifecycleRegistry', VOID, Lifecycle);
  initMetadataForClass(WeakReference, 'WeakReference');
  //endregion
  function Entry_0(key, value) {
    this.r6g_1 = key;
    this.s6g_1 = value;
    this.t6g_1 = null;
    this.u6g_1 = null;
    this.v6g_1 = false;
  }
  protoOf(Entry_0).q1 = function () {
    return this.r6g_1;
  };
  protoOf(Entry_0).r1 = function () {
    return this.s6g_1;
  };
  protoOf(Entry_0).w6g = function () {
    this.v6g_1 = true;
  };
  protoOf(Entry_0).toString = function () {
    return 'Entry(key=' + toString(this.r6g_1) + ', value=' + toString(this.s6g_1) + ')';
  };
  protoOf(Entry_0).hashCode = function () {
    var result = this.r6g_1 == null ? 0 : hashCode(this.r6g_1);
    result = imul(result, 31) + (this.s6g_1 == null ? 0 : hashCode(this.s6g_1)) | 0;
    return result;
  };
  protoOf(Entry_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Entry_0))
      return false;
    if (!equals(this.r6g_1, other.r6g_1))
      return false;
    if (!equals(this.s6g_1, other.s6g_1))
      return false;
    return true;
  };
  function FastSafeIterableMap() {
    this.x6g_1 = new MutableScatterMap();
    this.y6g_1 = null;
    this.z6g_1 = null;
  }
  protoOf(FastSafeIterableMap).a6h = function (key) {
    return this.x6g_1.s1(key);
  };
  protoOf(FastSafeIterableMap).b6h = function (key, value) {
    var existing = this.x6g_1.u1(key);
    if (!(existing == null)) {
      return existing.s6g_1;
    }
    var newEntry = new Entry_0(key, value);
    this.x6g_1.wn(key, newEntry);
    if (this.z6g_1 == null) {
      this.y6g_1 = newEntry;
      this.z6g_1 = newEntry;
    } else {
      var tmp0_safe_receiver = this.z6g_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.t6g_1 = newEntry;
      }
      newEntry.u6g_1 = this.z6g_1;
      this.z6g_1 = newEntry;
    }
    return null;
  };
  protoOf(FastSafeIterableMap).sl = function (key) {
    var tmp0_elvis_lhs = this.x6g_1.z1(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var entry = tmp;
    if (entry.u6g_1 == null)
      this.y6g_1 = entry.t6g_1;
    else {
      var tmp1_safe_receiver = entry.u6g_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.t6g_1 = entry.t6g_1;
      }
    }
    if (entry.t6g_1 == null)
      this.z6g_1 = entry.u6g_1;
    else {
      var tmp2_safe_receiver = entry.t6g_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.u6g_1 = entry.u6g_1;
      }
    }
    entry.w6g();
    return entry.s6g_1;
  };
  protoOf(FastSafeIterableMap).c6h = function (key) {
    var tmp0_safe_receiver = this.x6g_1.u1(key);
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.u6g_1;
  };
  protoOf(FastSafeIterableMap).pi = function () {
    var tmp0_elvis_lhs = this.y6g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Collection is empty.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(FastSafeIterableMap).ad = function () {
    var tmp0_elvis_lhs = this.z6g_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw NoSuchElementException_init_$Create$('Collection is empty.');
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(FastSafeIterableMap).bd = function () {
    return this.z6g_1;
  };
  protoOf(FastSafeIterableMap).st = function () {
    return this.x6g_1.l();
  };
  protoOf(FastSafeIterableMap).d6h = function (action) {
    var current = this.y6g_1;
    while (!(current == null)) {
      if (!current.v6g_1) {
        action(current);
      }
      current = current.t6g_1;
    }
  };
  protoOf(FastSafeIterableMap).e6h = function (action) {
    var current = this.z6g_1;
    while (!(current == null)) {
      if (!current.v6g_1) {
        action(current);
      }
      current = current.u6g_1;
    }
  };
  function LifecycleRegistry_init_$Init$(provider, $this) {
    LifecycleRegistry.call($this, provider, true);
    return $this;
  }
  function LifecycleRegistry_init_$Create$(provider) {
    return LifecycleRegistry_init_$Init$(provider, objectCreate(protoOf(LifecycleRegistry)));
  }
  function moveToState($this, next) {
    if ($this.n6h_1.equals(next)) {
      return Unit_instance;
    }
    checkLifecycleStateTransition($this.i6h_1.p12(), $this.n6h_1, next);
    $this.n6h_1 = next;
    if ($this.k6h_1 || !($this.j6h_1 === 0)) {
      $this.l6h_1 = true;
      return Unit_instance;
    }
    $this.k6h_1 = true;
    sync($this);
    $this.k6h_1 = false;
    if ($this.n6h_1.equals(State_DESTROYED_getInstance())) {
      $this.h6h_1 = new FastSafeIterableMap();
    }
  }
  function _get_isSynced__dwdj3t($this) {
    if ($this.h6h_1.st() === 0) {
      return true;
    }
    var eldestObserverState = $this.h6h_1.pi().r1().q6h_1;
    var newestObserverState = $this.h6h_1.ad().r1().q6h_1;
    return eldestObserverState.equals(newestObserverState) && $this.n6h_1.equals(newestObserverState);
  }
  function calculateTargetState($this, observer) {
    var map = $this.h6h_1.c6h(observer);
    var tmp1_safe_receiver = map == null ? null : map.r1();
    var siblingState = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.q6h_1;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!$this.m6h_1.n()) {
      tmp = $this.m6h_1.m($this.m6h_1.l() - 1 | 0);
    } else {
      tmp = null;
    }
    var parentState = tmp;
    return min(min($this.n6h_1, siblingState), parentState);
  }
  function forwardPass($this, lifecycleOwner) {
    var tmp = $this.h6h_1;
    tmp.d6h(LifecycleRegistry$forwardPass$lambda($this, lifecycleOwner));
  }
  function backwardPass($this, lifecycleOwner) {
    var tmp = $this.h6h_1;
    tmp.e6h(LifecycleRegistry$backwardPass$lambda($this, lifecycleOwner));
  }
  function sync($this) {
    var tmp0 = $this.i6h_1.p12();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'LifecycleOwner of this LifecycleRegistry is already garbage collected. It is too late to change lifecycle state.';
        throw IllegalStateException_init_$Create$(toString_0(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var lifecycleOwner = tmp$ret$0;
    while (!_get_isSynced__dwdj3t($this)) {
      $this.l6h_1 = false;
      if ($this.n6h_1.j2($this.h6h_1.pi().r1().q6h_1) < 0) {
        backwardPass($this, lifecycleOwner);
      }
      var newest = $this.h6h_1.bd();
      if (!$this.l6h_1 && !(newest == null) && $this.n6h_1.j2(newest.r1().q6h_1) > 0) {
        forwardPass($this, lifecycleOwner);
      }
    }
    $this.l6h_1 = false;
    $this.o6h_1.y1i($this.i6f());
  }
  function enforceMainThreadIfNeeded($this, methodName) {
    if ($this.g6h_1) {
      // Inline function 'kotlin.check' call
      if (!isMainThread()) {
        var message = 'Method ' + methodName + ' must be called on the main thread';
        throw IllegalStateException_init_$Create$(toString_0(message));
      }
    }
  }
  function ObserverWithState(observer, initialState) {
    this.q6h_1 = initialState;
    this.r6h_1 = Lifecycling_instance.k6f(ensureNotNull(observer));
  }
  protoOf(ObserverWithState).s6h = function (owner, event) {
    var newState = event.b6f();
    this.q6h_1 = min(this.q6h_1, newState);
    this.r6h_1.w6e(ensureNotNull(owner), event);
    this.q6h_1 = newState;
  };
  function Companion() {
  }
  protoOf(Companion).t6h = function (owner) {
    return new LifecycleRegistry(owner, false);
  };
  var Companion_instance_0;
  function Companion_getInstance() {
    return Companion_instance_0;
  }
  function LifecycleRegistry$forwardPass$lambda(this$0, $lifecycleOwner) {
    return function (_destruct__k2r9zo) {
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.q1();
      // Inline function 'kotlin.collections.component2' call
      var observer = _destruct__k2r9zo.r1();
      while (observer.q6h_1.j2(this$0.n6h_1) < 0 && !this$0.l6h_1 && this$0.h6h_1.a6h(key)) {
        this$0.m6h_1.g(observer.q6h_1);
        var tmp0 = Companion_instance.y6e(observer.q6h_1);
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0 == null) {
            var message = 'no event up from ' + observer.q6h_1.toString();
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            tmp$ret$2 = tmp0;
            break $l$block;
          }
        }
        var event = tmp$ret$2;
        observer.s6h($lifecycleOwner, event);
        removeLastOrNull(this$0.m6h_1);
      }
      return Unit_instance;
    };
  }
  function LifecycleRegistry$backwardPass$lambda(this$0, $lifecycleOwner) {
    return function (_destruct__k2r9zo) {
      // Inline function 'kotlin.collections.component1' call
      var key = _destruct__k2r9zo.q1();
      // Inline function 'kotlin.collections.component2' call
      var observer = _destruct__k2r9zo.r1();
      while (observer.q6h_1.j2(this$0.n6h_1) > 0 && !this$0.l6h_1 && this$0.h6h_1.a6h(key)) {
        var tmp0 = Companion_instance.x6e(observer.q6h_1);
        var tmp$ret$2;
        $l$block: {
          // Inline function 'kotlin.checkNotNull' call
          if (tmp0 == null) {
            var message = 'no event down from ' + observer.q6h_1.toString();
            throw IllegalStateException_init_$Create$(toString_0(message));
          } else {
            tmp$ret$2 = tmp0;
            break $l$block;
          }
        }
        var event = tmp$ret$2;
        this$0.m6h_1.g(event.b6f());
        observer.s6h($lifecycleOwner, event);
        removeLastOrNull(this$0.m6h_1);
      }
      return Unit_instance;
    };
  }
  function LifecycleRegistry(provider, enforceMainThread) {
    Lifecycle.call(this);
    this.g6h_1 = enforceMainThread;
    this.h6h_1 = new FastSafeIterableMap();
    this.i6h_1 = new WeakReference(provider);
    this.j6h_1 = 0;
    this.k6h_1 = false;
    this.l6h_1 = false;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.m6h_1 = ArrayList_init_$Create$();
    this.n6h_1 = State_INITIALIZED_getInstance();
    this.o6h_1 = MutableStateFlow(this.n6h_1);
  }
  protoOf(LifecycleRegistry).u6h = function (state) {
    enforceMainThreadIfNeeded(this, 'setCurrentState');
    moveToState(this, state);
  };
  protoOf(LifecycleRegistry).i6f = function () {
    return this.n6h_1;
  };
  protoOf(LifecycleRegistry).v6h = function (event) {
    enforceMainThreadIfNeeded(this, 'handleLifecycleEvent');
    moveToState(this, event.b6f());
  };
  protoOf(LifecycleRegistry).g6f = function (observer) {
    enforceMainThreadIfNeeded(this, 'addObserver');
    var initialState = this.n6h_1.equals(State_DESTROYED_getInstance()) ? State_DESTROYED_getInstance() : State_INITIALIZED_getInstance();
    var statefulObserver = new ObserverWithState(observer, initialState);
    var previous = this.h6h_1.b6h(observer, statefulObserver);
    if (!(previous == null)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.i6h_1.p12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lifecycleOwner = tmp;
    var isReentrance = !(this.j6h_1 === 0) || this.k6h_1;
    var targetState = calculateTargetState(this, observer);
    this.j6h_1 = this.j6h_1 + 1 | 0;
    while (statefulObserver.q6h_1.j2(targetState) < 0 && this.h6h_1.a6h(observer)) {
      this.m6h_1.g(statefulObserver.q6h_1);
      var tmp1_elvis_lhs = Companion_instance.y6e(statefulObserver.q6h_1);
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$('no event up from ' + statefulObserver.q6h_1.toString());
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var event = tmp_0;
      statefulObserver.s6h(lifecycleOwner, event);
      removeLastOrNull(this.m6h_1);
      targetState = calculateTargetState(this, observer);
    }
    if (!isReentrance) {
      sync(this);
    }
    this.j6h_1 = this.j6h_1 - 1 | 0;
  };
  protoOf(LifecycleRegistry).h6f = function (observer) {
    enforceMainThreadIfNeeded(this, 'removeObserver');
    this.h6h_1.sl(observer);
  };
  function checkLifecycleStateTransition(owner, current, next) {
    if (current.equals(State_INITIALIZED_getInstance()) && next.equals(State_DESTROYED_getInstance())) {
      // Inline function 'kotlin.error' call
      var message = "State must be at least '" + State_CREATED_getInstance().toString() + "' to be moved to '" + next.toString() + "' in component " + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message));
    }
    if (current.equals(State_DESTROYED_getInstance()) && !current.equals(next)) {
      // Inline function 'kotlin.error' call
      var message_0 = "State is '" + State_DESTROYED_getInstance().toString() + "' and cannot be moved to `" + next.toString() + '` in component ' + toString(owner);
      throw IllegalStateException_init_$Create$(toString_0(message_0));
    }
  }
  function min(state1, state2) {
    return !(state2 == null) && state2.j2(state1) < 0 ? state2 : state1;
  }
  function WeakReference(reference) {
    this.p6h_1 = new WeakRef(reference);
  }
  protoOf(WeakReference).p12 = function () {
    var tmp0_safe_receiver = this.p6h_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.deref();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp1_safe_receiver;
    }
    return tmp;
  };
  function isMainThread() {
    return true;
  }
  //region block: init
  Companion_instance_0 = new Companion();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Companion_instance_0;
  _.$_$.b = LifecycleRegistry_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-runtime.js.map
