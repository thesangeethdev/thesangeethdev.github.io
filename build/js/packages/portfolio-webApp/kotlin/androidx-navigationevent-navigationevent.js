(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-navigationevent-navigationevent'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'androidx-navigationevent-navigationevent'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'androidx-navigationevent-navigationevent'.");
    }
    globalThis['androidx-navigationevent-navigationevent'] = factory(typeof globalThis['androidx-navigationevent-navigationevent'] === 'undefined' ? {} : globalThis['androidx-navigationevent-navigationevent'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var protoOf = kotlin_kotlin.$_$.aa;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var objectCreate = kotlin_kotlin.$_$.z9;
  var toString = kotlin_kotlin.$_$.ca;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v1;
  var emptyList = kotlin_kotlin.$_$.s4;
  var get_indices = kotlin_kotlin.$_$.i5;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var equals = kotlin_kotlin.$_$.b9;
  var hashCode = kotlin_kotlin.$_$.i9;
  var VOID = kotlin_kotlin.$_$.c;
  var MutableStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.t;
  var asStateFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.u;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k1;
  var toString_0 = kotlin_kotlin.$_$.de;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavigationEvent, 'NavigationEvent');
  initMetadataForCompanion(Companion);
  initMetadataForClass(NavigationEventDispatcher, 'NavigationEventDispatcher', NavigationEventDispatcher_init_$Create$);
  initMetadataForClass(NavigationEventHistory, 'NavigationEventHistory');
  initMetadataForClass(NavigationEventInput, 'NavigationEventInput');
  initMetadataForClass(NavigationEventProcessor, 'NavigationEventProcessor', NavigationEventProcessor);
  initMetadataForClass(NavigationEventTransitionState, 'NavigationEventTransitionState');
  initMetadataForObject(Idle, 'Idle', VOID, NavigationEventTransitionState);
  initMetadataForClass(InProgress, 'InProgress', VOID, NavigationEventTransitionState);
  initMetadataForCompanion(Companion_0);
  //endregion
  function NavigationEvent() {
  }
  protoOf(NavigationEvent).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NavigationEvent))
      THROW_CCE();
    if (!(this.w6a_1 === other.w6a_1))
      return false;
    if (!(this.x6a_1 === other.x6a_1))
      return false;
    if (!(this.v6a_1 === other.v6a_1))
      return false;
    if (!(this.u6a_1 === other.u6a_1))
      return false;
    if (!equalsLong(this.y6a_1, other.y6a_1))
      return false;
    return true;
  };
  protoOf(NavigationEvent).hashCode = function () {
    var result = getNumberHashCode(this.w6a_1);
    result = imul(31, result) + getNumberHashCode(this.x6a_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.v6a_1) | 0;
    result = imul(31, result) + this.u6a_1 | 0;
    result = imul(31, result) + this.y6a_1.hashCode() | 0;
    return result;
  };
  protoOf(NavigationEvent).toString = function () {
    return 'NavigationEvent(touchX=' + this.w6a_1 + ', touchY=' + this.x6a_1 + ', progress=' + this.v6a_1 + ', ' + ('swipeEdge=' + this.u6a_1 + ', frameTimeMillis=' + this.y6a_1.toString() + ')');
  };
  function NavigationEventDispatcher_init_$Init$($this) {
    NavigationEventDispatcher.call($this, null, null);
    return $this;
  }
  function NavigationEventDispatcher_init_$Create$() {
    return NavigationEventDispatcher_init_$Init$(objectCreate(protoOf(NavigationEventDispatcher)));
  }
  function _get_isDisposed__7k3404($this) {
    var tmp;
    var tmp0_safe_receiver = $this.z6a_1;
    if ((tmp0_safe_receiver == null ? null : _get_isDisposed__7k3404(tmp0_safe_receiver)) === true) {
      tmp = true;
    } else {
      tmp = $this.b6b_1;
    }
    return tmp;
  }
  function checkInvariants($this) {
    // Inline function 'kotlin.check' call
    if (!!_get_isDisposed__7k3404($this)) {
      var message = 'This NavigationEventDispatcher has already been disposed and cannot be used.';
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function Companion() {
    this.h6b_1 = 0;
    this.i6b_1 = 1;
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function NavigationEventDispatcher(parent, onBackCompletedFallback) {
    this.z6a_1 = parent;
    this.a6b_1 = onBackCompletedFallback;
    this.b6b_1 = false;
    this.c6b_1 = true;
    var tmp = this;
    var tmp0_safe_receiver = this.z6a_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.d6b_1;
    tmp.d6b_1 = tmp1_elvis_lhs == null ? new NavigationEventProcessor() : tmp1_elvis_lhs;
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.e6b_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.f6b_1 = LinkedHashSet_init_$Create$();
    var tmp_2 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_2.g6b_1 = LinkedHashSet_init_$Create$();
    var tmp0_safe_receiver_0 = this.z6a_1;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.collections.plusAssign' call
      tmp0_safe_receiver_0.e6b_1.g(this);
    }
  }
  protoOf(NavigationEventDispatcher).j6b = function () {
    var tmp;
    var tmp0_safe_receiver = this.z6a_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j6b()) === false) {
      tmp = false;
    } else {
      tmp = this.c6b_1;
    }
    return tmp;
  };
  protoOf(NavigationEventDispatcher).k6b = function (input) {
    checkInvariants(this);
    if (this.g6b_1.g(input)) {
      this.d6b_1.a6c(this, input, -1);
    }
  };
  protoOf(NavigationEventDispatcher).b6c = function (input, direction, event) {
    checkInvariants(this);
    if (!this.j6b())
      return Unit_instance;
    this.d6b_1.c6c(input, direction, event);
  };
  protoOf(NavigationEventDispatcher).d6c = function (input, direction) {
    checkInvariants(this);
    if (!this.j6b())
      return Unit_instance;
    this.d6b_1.e6c(input, direction, this.a6b_1);
  };
  function NavigationEventHistory_init_$Init$($this) {
    NavigationEventHistory.call($this, emptyList(), -1);
    return $this;
  }
  function NavigationEventHistory_init_$Create$() {
    return NavigationEventHistory_init_$Init$(objectCreate(protoOf(NavigationEventHistory)));
  }
  function NavigationEventHistory(mergedHistory, currentIndex) {
    this.f6c_1 = mergedHistory;
    this.g6c_1 = currentIndex;
    var tmp;
    if (this.f6c_1.n() && this.g6c_1 === -1) {
      tmp = true;
    } else {
      var tmp_0;
      // Inline function 'kotlin.collections.isNotEmpty' call
      if (!this.f6c_1.n()) {
        var containsUpper = this.f6c_1.l() - 1 | 0;
        var containsArg = this.g6c_1;
        tmp_0 = 0 <= containsArg ? containsArg <= containsUpper : false;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    // Inline function 'kotlin.require' call
    if (!tmp) {
      var message = "Invalid 'NavigationEventHistory' state:  'currentIndex' must be within the bounds of 'mergedHistory' (or -1 if empty)." + (" Received: currentIndex = '" + this.g6c_1 + "', bounds = '" + get_indices(this.f6c_1).toString() + "'.");
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
  }
  protoOf(NavigationEventHistory).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof NavigationEventHistory))
      THROW_CCE();
    if (!(this.g6c_1 === other.g6c_1))
      return false;
    if (!equals(this.f6c_1, other.f6c_1))
      return false;
    return true;
  };
  protoOf(NavigationEventHistory).hashCode = function () {
    var result = this.g6c_1;
    result = imul(31, result) + hashCode(this.f6c_1) | 0;
    return result;
  };
  protoOf(NavigationEventHistory).toString = function () {
    return 'NavigationEventHistory(currentIndex=' + this.g6c_1 + ', mergedHistory=' + toString(this.f6c_1) + ')';
  };
  function NavigationEventInput() {
    this.h6c_1 = null;
    this.i6c_1 = false;
    this.j6c_1 = false;
  }
  protoOf(NavigationEventInput).k6c = function (dispatcher) {
    this.l6c(dispatcher);
  };
  protoOf(NavigationEventInput).l6c = function (dispatcher) {
  };
  protoOf(NavigationEventInput).m6c = function (hasEnabledHandlers) {
    this.n6c(hasEnabledHandlers);
  };
  protoOf(NavigationEventInput).n6c = function (hasEnabledHandlers) {
  };
  protoOf(NavigationEventInput).o6c = function (history) {
    this.p6c(history);
  };
  protoOf(NavigationEventInput).p6c = function (history) {
  };
  protoOf(NavigationEventInput).q6c = function () {
    var tmp0 = this.h6c_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlin.checkNotNull' call
      if (tmp0 == null) {
        var message = 'This input is not added to any dispatcher.';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp$ret$0 = tmp0;
        break $l$block;
      }
    }
    var dispatcher = tmp$ret$0;
    if (!this.i6c_1) {
      dispatcher.b6c(this, -1, null);
    }
    dispatcher.d6c(this, -1);
    this.i6c_1 = false;
  };
  function resolveEnabledHandler($this, direction) {
    direction = direction === VOID ? 0 : direction;
    var tmp;
    switch (direction) {
      case 0:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0 = $this.p6b_1;
        var tmp$ret$1;
        $l$block: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s = tmp0.i();
          while (_iterator__ex2g4s.j()) {
            var element = _iterator__ex2g4s.k();
            if (element.y6c() || element.z6c()) {
              tmp$ret$1 = element;
              break $l$block;
            }
          }
          tmp$ret$1 = null;
        }

        var tmp0_elvis_lhs = tmp$ret$1;
        var tmp_0;
        if (tmp0_elvis_lhs == null) {
          var tmp0_0 = $this.q6b_1;
          var tmp$ret$3;
          $l$block_0: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_0 = tmp0_0.i();
            while (_iterator__ex2g4s_0.j()) {
              var element_0 = _iterator__ex2g4s_0.k();
              if (element_0.y6c() || element_0.z6c()) {
                tmp$ret$3 = element_0;
                break $l$block_0;
              }
            }
            tmp$ret$3 = null;
          }
          tmp_0 = tmp$ret$3;
        } else {
          tmp_0 = tmp0_elvis_lhs;
        }

        tmp = tmp_0;
        break;
      case -1:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0_1 = $this.p6b_1;
        var tmp$ret$6;
        $l$block_1: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_1 = tmp0_1.i();
          while (_iterator__ex2g4s_1.j()) {
            var element_1 = _iterator__ex2g4s_1.k();
            if (element_1.y6c()) {
              tmp$ret$6 = element_1;
              break $l$block_1;
            }
          }
          tmp$ret$6 = null;
        }

        var tmp0_elvis_lhs_0 = tmp$ret$6;
        var tmp_1;
        if (tmp0_elvis_lhs_0 == null) {
          var tmp0_2 = $this.q6b_1;
          var tmp$ret$8;
          $l$block_2: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_2 = tmp0_2.i();
            while (_iterator__ex2g4s_2.j()) {
              var element_2 = _iterator__ex2g4s_2.k();
              if (element_2.y6c()) {
                tmp$ret$8 = element_2;
                break $l$block_2;
              }
            }
            tmp$ret$8 = null;
          }
          tmp_1 = tmp$ret$8;
        } else {
          tmp_1 = tmp0_elvis_lhs_0;
        }

        tmp = tmp_1;
        break;
      case 1:
        // Inline function 'androidx.navigationevent.NavigationEventProcessor.findHandler' call

        var tmp0_3 = $this.p6b_1;
        var tmp$ret$11;
        $l$block_3: {
          // Inline function 'kotlin.collections.firstOrNull' call
          var _iterator__ex2g4s_3 = tmp0_3.i();
          while (_iterator__ex2g4s_3.j()) {
            var element_3 = _iterator__ex2g4s_3.k();
            if (element_3.z6c()) {
              tmp$ret$11 = element_3;
              break $l$block_3;
            }
          }
          tmp$ret$11 = null;
        }

        var tmp0_elvis_lhs_1 = tmp$ret$11;
        var tmp_2;
        if (tmp0_elvis_lhs_1 == null) {
          var tmp0_4 = $this.q6b_1;
          var tmp$ret$13;
          $l$block_4: {
            // Inline function 'kotlin.collections.firstOrNull' call
            var _iterator__ex2g4s_4 = tmp0_4.i();
            while (_iterator__ex2g4s_4.j()) {
              var element_4 = _iterator__ex2g4s_4.k();
              if (element_4.z6c()) {
                tmp$ret$13 = element_4;
                break $l$block_4;
              }
            }
            tmp$ret$13 = null;
          }
          tmp_2 = tmp$ret$13;
        } else {
          tmp_2 = tmp0_elvis_lhs_1;
        }

        tmp = tmp_2;
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = "Unsupported direction: '" + direction + "'.";
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function NavigationEventProcessor() {
    this.l6b_1 = MutableStateFlow(Idle_getInstance());
    this.m6b_1 = asStateFlow(this.l6b_1);
    this.n6b_1 = MutableStateFlow(NavigationEventHistory_init_$Create$());
    this.o6b_1 = asStateFlow(this.n6b_1);
    this.p6b_1 = ArrayDeque_init_$Create$();
    this.q6b_1 = ArrayDeque_init_$Create$();
    this.r6b_1 = null;
    this.s6b_1 = 0;
    this.t6b_1 = null;
    var tmp = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp.u6b_1 = LinkedHashSet_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.v6b_1 = LinkedHashSet_init_$Create$();
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_1.w6b_1 = LinkedHashSet_init_$Create$();
    this.x6b_1 = false;
    this.y6b_1 = false;
    this.z6b_1 = false;
  }
  protoOf(NavigationEventProcessor).a6c = function (dispatcher, input, priority) {
    // Inline function 'kotlin.require' call
    if (!(input.h6c_1 == null)) {
      var message = "Input '" + toString(input) + "' is already added to dispatcher " + toString_0(input.h6c_1) + '.';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    var inputs;
    switch (priority) {
      case 0:
        inputs = this.w6b_1;
        break;
      case 1:
        inputs = this.v6b_1;
        break;
      default:
        inputs = this.u6b_1;
        break;
    }
    // Inline function 'kotlin.collections.plusAssign' call
    inputs.g(input);
    input.h6c_1 = dispatcher;
    input.k6c(dispatcher);
    input.o6c(this.o6b_1.r1());
    var hasEnabledHandlers;
    switch (priority) {
      case 0:
        hasEnabledHandlers = this.y6b_1;
        break;
      case 1:
        hasEnabledHandlers = this.x6b_1;
        break;
      default:
        hasEnabledHandlers = this.z6b_1;
        break;
    }
    input.m6c(hasEnabledHandlers);
  };
  protoOf(NavigationEventProcessor).c6c = function (input, direction, event) {
    if (!(this.s6b_1 === 0)) {
      return Unit_instance;
    }
    var handler = resolveEnabledHandler(this, direction);
    this.r6b_1 = handler;
    this.s6b_1 = direction;
    this.t6b_1 = input;
    if (!(event == null)) {
      switch (direction) {
        case -1:
          if (handler == null)
            null;
          else {
            handler.a6d(event);
          }

          break;
        case 1:
          if (handler == null)
            null;
          else {
            handler.b6d(event);
          }

          break;
        case 0:
          break;
      }
      this.l6b_1.y1i(new InProgress(event, direction));
    }
  };
  protoOf(NavigationEventProcessor).e6c = function (input, direction, onBackCompletedFallback) {
    if (!equals(input, this.t6b_1) || !(direction === this.s6b_1)) {
      return Unit_instance;
    }
    var tmp0_elvis_lhs = this.r6b_1;
    var handler = tmp0_elvis_lhs == null ? resolveEnabledHandler(this, direction) : tmp0_elvis_lhs;
    this.r6b_1 = null;
    this.s6b_1 = 0;
    this.t6b_1 = null;
    switch (direction) {
      case -1:
        if (handler == null) {
          if (onBackCompletedFallback == null)
            null;
          else {
            onBackCompletedFallback.d6d();
          }
        } else {
          handler.c6d();
        }

        break;
      case 1:
        if (handler == null)
          null;
        else {
          handler.e6d();
        }

        break;
      case 0:
        break;
    }
    this.l6b_1.y1i(Idle_getInstance());
  };
  function Idle() {
    Idle_instance = this;
    NavigationEventTransitionState.call(this);
  }
  protoOf(Idle).toString = function () {
    return 'Idle()';
  };
  var Idle_instance;
  function Idle_getInstance() {
    if (Idle_instance == null)
      new Idle();
    return Idle_instance;
  }
  function InProgress(latestEvent, direction) {
    NavigationEventTransitionState.call(this);
    this.f6d_1 = latestEvent;
    this.g6d_1 = direction;
  }
  protoOf(InProgress).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof InProgress))
      THROW_CCE();
    if (!(this.g6d_1 === other.g6d_1))
      return false;
    if (!this.f6d_1.equals(other.f6d_1))
      return false;
    return true;
  };
  protoOf(InProgress).hashCode = function () {
    var result = this.g6d_1;
    result = imul(31, result) + this.f6d_1.hashCode() | 0;
    return result;
  };
  protoOf(InProgress).toString = function () {
    return 'InProgress(latestEvent=' + this.f6d_1.toString() + ', direction=' + this.g6d_1 + ')';
  };
  function Companion_0() {
    this.h6d_1 = 0;
    this.i6d_1 = 1;
    this.j6d_1 = -1;
  }
  var Companion_instance_0;
  function Companion_getInstance_0() {
    return Companion_instance_0;
  }
  function NavigationEventTransitionState() {
  }
  //region block: init
  Companion_instance = new Companion();
  Companion_instance_0 = new Companion_0();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = NavigationEventInput;
  _.$_$.b = NavigationEventDispatcher_init_$Create$;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-navigationevent-navigationevent.js.map
