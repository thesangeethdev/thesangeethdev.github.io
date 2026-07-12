(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-animation-animation-core'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation-core'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var hypot = Math.hypot;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var equals = kotlin_kotlin.$_$.b9;
  var KMutableProperty1 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var VOID = kotlin_kotlin.$_$.c;
  var coerceIn = kotlin_kotlin.$_$.na;
  var Long = kotlin_kotlin.$_$.yc;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var protoOf = kotlin_kotlin.$_$.aa;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var CancellationException = kotlin_kotlin.$_$.w6;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var objectCreate = kotlin_kotlin.$_$.z9;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var toString = kotlin_kotlin.$_$.ca;
  var compare = kotlin_kotlin.$_$.y7;
  var toString_0 = kotlin_kotlin.$_$.de;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var divide = kotlin_kotlin.$_$.b8;
  var Enum = kotlin_kotlin.$_$.sc;
  var hashCode = kotlin_kotlin.$_$.i9;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var add = kotlin_kotlin.$_$.u7;
  var subtract = kotlin_kotlin.$_$.m8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var computeCubicVerticalBounds = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u1;
  var _FloatFloatPair___get_packedValue__impl__5lczxp = kotlin_androidx_collection_collection.$_$.i1;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var floatFromBits = kotlin_kotlin.$_$.c9;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var findFirstCubicRoot = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y1;
  var evaluateCubic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x1;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var isInterface = kotlin_kotlin.$_$.r9;
  var numberToLong = kotlin_kotlin.$_$.i8;
  var multiply = kotlin_kotlin.$_$.g8;
  var toNumber = kotlin_kotlin.$_$.n8;
  var withFrameNanos = kotlin_androidx_compose_runtime_runtime.$_$.e2;
  var Key_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.y4;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.l9;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var Mutex = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.y;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var captureStack = kotlin_kotlin.$_$.r8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var toRawBits = kotlin_kotlin.$_$.ce;
  var isNaN_1 = kotlin_kotlin.$_$.pd;
  var toRawBits_0 = kotlin_kotlin.$_$.be;
  var fromInt = kotlin_kotlin.$_$.d8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var Key_instance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.c5;
  var mutableFloatStateOf = kotlin_androidx_compose_runtime_runtime.$_$.f1;
  var mutableLongStateOf = kotlin_androidx_compose_runtime_runtime.$_$.g1;
  var KProperty0 = kotlin_kotlin.$_$.wa;
  var getLocalDelegateReference = kotlin_kotlin.$_$.e9;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.x;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.q1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var KProperty1 = kotlin_kotlin.$_$.xa;
  var roundToLong = kotlin_kotlin.$_$.fa;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var createCompositionCoroutineScope = kotlin_androidx_compose_runtime_runtime.$_$.a1;
  var DisposableEffect = kotlin_androidx_compose_runtime_runtime.$_$.o;
  var DisposableEffect_0 = kotlin_androidx_compose_runtime_runtime.$_$.p;
  var numberToInt = kotlin_kotlin.$_$.y9;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var _DpOffset___get_x__impl__uauqb5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e2;
  var _DpOffset___get_y__impl__1h898y = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f2;
  var _DpOffset___init__impl__yq36wy = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b2;
  var DpOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r7;
  var IntCompanionObject_instance = kotlin_kotlin.$_$.a1;
  var to = kotlin_kotlin.$_$.ee;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.j1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g3;
  var mapOf = kotlin_kotlin.$_$.w5;
  var compareTo = kotlin_kotlin.$_$.w8;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w1;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(Animatable$runAnimation$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(Animatable$snapTo$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForClass(Animatable, 'Animatable', VOID, VOID, VOID, [4, 3, 1, 0]);
  initMetadataForClass(AnimationResult, 'AnimationResult');
  function isFinishedFromNanos(playTimeNanos) {
    return compare(playTimeNanos, this.rag()) >= 0;
  }
  initMetadataForInterface(Animation, 'Animation');
  initMetadataForClass(TargetBasedAnimation, 'TargetBasedAnimation', VOID, VOID, [Animation]);
  initMetadataForClass(AnimationEndReason, 'AnimationEndReason', VOID, Enum);
  initMetadataForClass(SpringSpec, 'SpringSpec', SpringSpec);
  initMetadataForClass(TweenSpec, 'TweenSpec', TweenSpec);
  initMetadataForClass(StartDelayAnimationSpec, 'StartDelayAnimationSpec');
  function getEndVelocity(initialValue, targetValue, initialVelocity) {
    return this.uag(this.sag(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  initMetadataForInterface(VectorizedAnimationSpec, 'VectorizedAnimationSpec');
  initMetadataForClass(StartDelayVectorizedAnimationSpec, 'StartDelayVectorizedAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(AnimationState, 'AnimationState');
  initMetadataForClass(AnimationScope, 'AnimationScope');
  initMetadataForClass(AnimationVector, 'AnimationVector');
  initMetadataForClass(AnimationVector1D, 'AnimationVector1D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector4D, 'AnimationVector4D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector2D, 'AnimationVector2D', VOID, AnimationVector);
  initMetadataForClass(AnimationVector3D, 'AnimationVector3D', VOID, AnimationVector);
  initMetadataForClass(Arc, 'Arc');
  initMetadataForClass(ArcSpline, 'ArcSpline');
  initMetadataForInterface(Easing, 'Easing');
  initMetadataForClass(CubicBezierEasing, 'CubicBezierEasing', VOID, VOID, [Easing]);
  initMetadataForClass(sam$androidx_compose_animation_core_Easing$0, 'sam$androidx_compose_animation_core_Easing$0', VOID, VOID, [Easing, FunctionAdapter]);
  function getEndVelocity_0(initialValue, targetValue, initialVelocity) {
    return this.faj(this.eaj(initialValue, targetValue, initialVelocity), initialValue, targetValue, initialVelocity);
  }
  function vectorize(converter) {
    return VectorizedFloatAnimationSpec_init_$Create$(this);
  }
  initMetadataForInterface(FloatAnimationSpec, 'FloatAnimationSpec');
  initMetadataForClass(FloatTweenSpec, 'FloatTweenSpec', FloatTweenSpec, VOID, [FloatAnimationSpec]);
  initMetadataForClass(FloatSpringSpec, 'FloatSpringSpec', FloatSpringSpec, VOID, [FloatAnimationSpec]);
  initMetadataForLambda(withInfiniteAnimationFrameNanos$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForCoroutine($withInfiniteAnimationFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Mutator, 'Mutator');
  initMetadataForLambda(MutatorMutex$mutate$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutatorMutex, 'MutatorMutex', MutatorMutex, VOID, VOID, [2, 3]);
  initMetadataForClass(MutatePriority, 'MutatePriority', VOID, Enum);
  initMetadataForClass(PlatformOptimizedCancellationException, 'PlatformOptimizedCancellationException', VOID, CancellationException);
  initMetadataForClass(MutationInterruptedException, 'MutationInterruptedException', MutationInterruptedException, PlatformOptimizedCancellationException);
  initMetadataForClass(SpringSimulation, 'SpringSimulation');
  initMetadataForCoroutine($animateCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($callWithFrameNanosCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredAnimationData, 'DeferredAnimationData');
  initMetadataForClass(TransitionAnimationState, 'TransitionAnimationState');
  function isTransitioningTo(_this__u8e3s4, targetState) {
    return equals(_this__u8e3s4, this.cao()) && equals(targetState, this.b6f());
  }
  initMetadataForInterface(Segment, 'Segment');
  initMetadataForClass(SegmentImpl, 'SegmentImpl', VOID, VOID, [Segment]);
  initMetadataForClass(DeferredAnimation, 'DeferredAnimation');
  initMetadataForLambda(Transition$animateTo$lambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Transition$animateTo$$inlined$cache$1$2);
  initMetadataForClass(Transition, 'Transition');
  initMetadataForClass(TransitionState, 'TransitionState');
  initMetadataForClass(MutableTransitionState, 'MutableTransitionState', VOID, TransitionState);
  initMetadataForClass(updateTransition$$inlined$cache$1$1);
  initMetadataForClass(createDeferredAnimation$$inlined$cache$1$1);
  initMetadataForClass(createChildTransitionInternal$$inlined$cache$1$1);
  initMetadataForClass(TwoWayConverterImpl, 'TwoWayConverterImpl');
  function get_isInfinite() {
    return false;
  }
  initMetadataForInterface(VectorizedFiniteAnimationSpec, 'VectorizedFiniteAnimationSpec', VOID, VOID, [VectorizedAnimationSpec]);
  initMetadataForClass(VectorizedSpringSpec, 'VectorizedSpringSpec', VectorizedSpringSpec_init_$Create$, VOID, [VectorizedFiniteAnimationSpec]);
  function getDurationNanos(initialValue, targetValue, initialVelocity) {
    return multiply(numberToLong(this.yar() + this.xar() | 0), new Long(1000000, 0));
  }
  initMetadataForInterface(VectorizedDurationBasedAnimationSpec, 'VectorizedDurationBasedAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(VectorizedTweenSpec, 'VectorizedTweenSpec', VectorizedTweenSpec, VOID, [VectorizedDurationBasedAnimationSpec]);
  initMetadataForClass(VectorizedFloatAnimationSpec$1);
  initMetadataForClass(VectorizedFloatAnimationSpec, 'VectorizedFloatAnimationSpec', VOID, VOID, [VectorizedFiniteAnimationSpec]);
  initMetadataForClass(createSpringAnimations$1);
  initMetadataForClass(createSpringAnimations$2);
  initMetadataForClass(AtomicReference, 'AtomicReference');
  //endregion
  function get_positiveInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds1D;
  }
  var positiveInfinityBounds1D;
  function get_positiveInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds2D;
  }
  var positiveInfinityBounds2D;
  function get_positiveInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds3D;
  }
  var positiveInfinityBounds3D;
  function get_positiveInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return positiveInfinityBounds4D;
  }
  var positiveInfinityBounds4D;
  function get_negativeInfinityBounds1D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds1D;
  }
  var negativeInfinityBounds1D;
  function get_negativeInfinityBounds2D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds2D;
  }
  var negativeInfinityBounds2D;
  function get_negativeInfinityBounds3D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds3D;
  }
  var negativeInfinityBounds3D;
  function get_negativeInfinityBounds4D() {
    _init_properties_Animatable_kt__f2hc5e();
    return negativeInfinityBounds4D;
  }
  var negativeInfinityBounds4D;
  var androidx_compose_animation_core_Animatable$stable;
  var androidx_compose_animation_core_AnimationResult$stable;
  function Animatable$runAnimation$slambda$lambda(this$0, $endState, $block, $clampingNeeded) {
    return function ($this$animate) {
      updateState($this$animate, this$0.ead_1);
      var clamped = clampToBounds(this$0, $this$animate.r1());
      if (!equals(clamped, $this$animate.r1())) {
        this$0.ead_1.eae(clamped);
        $endState.eae(clamped);
        var tmp0_safe_receiver = $block;
        if (tmp0_safe_receiver == null)
          null;
        else
          tmp0_safe_receiver(this$0);
        $this$animate.fae();
        $clampingNeeded._v = true;
      } else {
        var tmp1_safe_receiver = $block;
        if (tmp1_safe_receiver == null)
          null;
        else
          tmp1_safe_receiver(this$0);
      }
      return Unit_instance;
    };
  }
  function _set_isRunning__kpbg34($this, _set____db54di) {
    var tmp0 = $this.fad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function _set_targetValue__aqsk0r($this, _set____db54di) {
    var tmp0 = $this.gad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function runAnimation($this, animation, initialVelocity, block, $completion) {
    var startTime = $this.ead_1.bae_1;
    return $this.jad_1.iae(VOID, Animatable$runAnimation$slambda_0($this, initialVelocity, animation, startTime, block, null), $completion);
  }
  function clampToBounds($this, value) {
    if (equals($this.nad_1, $this.lad_1) && equals($this.oad_1, $this.mad_1)) {
      return value;
    }
    var valueVector = $this.bad_1.jae()(value);
    var clamped = false;
    var inductionVariable = 0;
    var last = valueVector.kae();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (valueVector.lae(i) < $this.nad_1.lae(i) || valueVector.lae(i) > $this.oad_1.lae(i)) {
          clamped = true;
          valueVector.mae(i, coerceIn(valueVector.lae(i), $this.nad_1.lae(i), $this.oad_1.lae(i)));
        }
      }
       while (inductionVariable < last);
    if (clamped) {
      return $this.bad_1.nae()(valueVector);
    } else {
      return value;
    }
  }
  function endAnimation($this) {
    // Inline function 'kotlin.apply' call
    var this_0 = $this.ead_1;
    this_0.aae_1.oae();
    this_0.bae_1 = new Long(0, -2147483648);
    _set_isRunning__kpbg34($this, false);
  }
  function Animatable$_get_isRunning_$ref_121fnp() {
    return constructCallableReference(function (p0) {
      return p0.pae();
    }, 1, 0, 100);
  }
  function Animatable$_set_isRunning_$ref_g9sy61() {
    return constructCallableReference(function (p0, p1) {
      _set_isRunning__kpbg34(p0, p1);
      return Unit_instance;
    }, 2, 0, 101);
  }
  function Animatable$_get_targetValue_$ref_gosum2() {
    return constructCallableReference(function (p0) {
      return p0.qae();
    }, 1, 0, 102);
  }
  function Animatable$_set_targetValue_$ref_6l2n3i() {
    return constructCallableReference(function (p0, p1) {
      _set_targetValue__aqsk0r(p0, p1);
      return Unit_instance;
    }, 2, 0, 103);
  }
  function Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    this.zae_1 = this$0;
    this.aaf_1 = $initialVelocity;
    this.baf_1 = $animation;
    this.caf_1 = $startTime;
    this.daf_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$runAnimation$slambda).haf = function ($completion) {
    var tmp = this.d1n($completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(Animatable$runAnimation$slambda).e1n = function ($completion) {
    return this.haf($completion);
  };
  protoOf(Animatable$runAnimation$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            this.m8_1 = 2;
            this.zae_1.ead_1.aae_1 = this.zae_1.bad_1.jae()(this.aaf_1);
            _set_targetValue__aqsk0r(this.zae_1, this.baf_1.qae());
            _set_isRunning__kpbg34(this.zae_1, true);
            this.faf_1 = copy(this.zae_1.ead_1, VOID, VOID, VOID, new Long(0, -2147483648));
            this.gaf_1 = {_v: false};
            this.l8_1 = 1;
            suspendResult = animate(this.faf_1, this.baf_1, this.caf_1, Animatable$runAnimation$slambda$lambda(this.zae_1, this.faf_1, this.daf_1, this.gaf_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var endReason = this.gaf_1._v ? AnimationEndReason_BoundReached_getInstance() : AnimationEndReason_Finished_getInstance();
            endAnimation(this.zae_1);
            this.eaf_1 = new AnimationResult(this.faf_1, endReason);
            this.m8_1 = 3;
            this.l8_1 = 4;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            var tmp_0 = this.o8_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.o8_1;
              var tmp_1 = this;
              endAnimation(this.zae_1);
              throw e;
            } else {
              throw this.o8_1;
            }

          case 3:
            throw this.o8_1;
          case 4:
            this.m8_1 = 3;
            return this.eaf_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m8_1 === 3) {
          throw e_0;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(Animatable$runAnimation$slambda).d1n = function (completion) {
    return new Animatable$runAnimation$slambda(this.zae_1, this.aaf_1, this.baf_1, this.caf_1, this.daf_1, completion);
  };
  function Animatable$runAnimation$slambda_0(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation) {
    var i = new Animatable$runAnimation$slambda(this$0, $initialVelocity, $animation, $startTime, $block, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.haf($completion);
    }, 0);
  }
  function Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation) {
    this.qaf_1 = this$0;
    this.raf_1 = $targetValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Animatable$snapTo$slambda).c1n = function ($completion) {
    var tmp = this.d1n($completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(Animatable$snapTo$slambda).e1n = function ($completion) {
    return this.c1n($completion);
  };
  protoOf(Animatable$snapTo$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          endAnimation(this.qaf_1);
          var clampedValue = clampToBounds(this.qaf_1, this.raf_1);
          this.qaf_1.ead_1.eae(clampedValue);
          _set_targetValue__aqsk0r(this.qaf_1, clampedValue);
          return Unit_instance;
        } else if (tmp === 1) {
          throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(Animatable$snapTo$slambda).d1n = function (completion) {
    return new Animatable$snapTo$slambda(this.qaf_1, this.raf_1, completion);
  };
  function Animatable$snapTo$slambda_0(this$0, $targetValue, resultContinuation) {
    var i = new Animatable$snapTo$slambda(this$0, $targetValue, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.c1n($completion);
    }, 0);
  }
  function Animatable(initialValue, typeConverter, visibilityThreshold, label) {
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    label = label === VOID ? 'Animatable' : label;
    this.bad_1 = typeConverter;
    this.cad_1 = visibilityThreshold;
    this.dad_1 = label;
    this.ead_1 = new AnimationState(this.bad_1, initialValue);
    this.fad_1 = mutableStateOf(false);
    this.gad_1 = mutableStateOf(initialValue);
    this.had_1 = null;
    this.iad_1 = null;
    this.jad_1 = new MutatorMutex();
    this.kad_1 = new SpringSpec(VOID, VOID, this.cad_1);
    var tmp = this;
    var tmp0_subject = this.saf();
    var tmp_0;
    if (tmp0_subject instanceof AnimationVector1D) {
      tmp_0 = get_negativeInfinityBounds1D();
    } else {
      if (tmp0_subject instanceof AnimationVector2D) {
        tmp_0 = get_negativeInfinityBounds2D();
      } else {
        if (tmp0_subject instanceof AnimationVector3D) {
          tmp_0 = get_negativeInfinityBounds3D();
        } else {
          tmp_0 = get_negativeInfinityBounds4D();
        }
      }
    }
    var tmp_1 = tmp_0;
    tmp.lad_1 = tmp_1 instanceof AnimationVector ? tmp_1 : THROW_CCE();
    var tmp_2 = this;
    var tmp0_subject_0 = this.saf();
    var tmp_3;
    if (tmp0_subject_0 instanceof AnimationVector1D) {
      tmp_3 = get_positiveInfinityBounds1D();
    } else {
      if (tmp0_subject_0 instanceof AnimationVector2D) {
        tmp_3 = get_positiveInfinityBounds2D();
      } else {
        if (tmp0_subject_0 instanceof AnimationVector3D) {
          tmp_3 = get_positiveInfinityBounds3D();
        } else {
          tmp_3 = get_positiveInfinityBounds4D();
        }
      }
    }
    var tmp_4 = tmp_3;
    tmp_2.mad_1 = tmp_4 instanceof AnimationVector ? tmp_4 : THROW_CCE();
    this.nad_1 = this.lad_1;
    this.oad_1 = this.mad_1;
  }
  protoOf(Animatable).r1 = function () {
    return this.ead_1.r1();
  };
  protoOf(Animatable).saf = function () {
    return this.ead_1.aae_1;
  };
  protoOf(Animatable).taf = function () {
    return this.bad_1.nae()(this.saf());
  };
  protoOf(Animatable).pae = function () {
    var tmp0 = this.fad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_isRunning_$ref_121fnp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, Animatable$_set_isRunning_$ref_g9sy61());
    return tmp0.r1();
  };
  protoOf(Animatable).qae = function () {
    var tmp0 = this.gad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Animatable$_get_targetValue_$ref_gosum2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Animatable$_set_targetValue_$ref_6l2n3i());
    return tmp0.r1();
  };
  protoOf(Animatable).uaf = function (targetValue, animationSpec, initialVelocity, block, $completion) {
    var tmp0_initialValue = this.r1();
    var tmp1_typeConverter = this.bad_1;
    var anim = TargetBasedAnimation_0(animationSpec, tmp1_typeConverter, tmp0_initialValue, targetValue, initialVelocity);
    return runAnimation(this, anim, initialVelocity, block, $completion);
  };
  protoOf(Animatable).vaf = function (targetValue, animationSpec, initialVelocity, block, $completion, $super) {
    animationSpec = animationSpec === VOID ? this.kad_1 : animationSpec;
    initialVelocity = initialVelocity === VOID ? this.taf() : initialVelocity;
    block = block === VOID ? null : block;
    return $super === VOID ? this.uaf(targetValue, animationSpec, initialVelocity, block, $completion) : $super.uaf.call(this, targetValue, animationSpec, initialVelocity, block, $completion);
  };
  protoOf(Animatable).waf = function (targetValue, $completion) {
    return this.jad_1.iae(VOID, Animatable$snapTo$slambda_0(this, targetValue, null), $completion);
  };
  protoOf(Animatable).xaf = function () {
    return this.ead_1;
  };
  function Animatable_0(initialValue, visibilityThreshold) {
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    _init_properties_Animatable_kt__f2hc5e();
    return new Animatable(initialValue, get_VectorConverter_0(FloatCompanionObject_instance), visibilityThreshold);
  }
  function AnimationResult(endState, endReason) {
    this.yaf_1 = endState;
    this.zaf_1 = endReason;
  }
  protoOf(AnimationResult).toString = function () {
    return 'AnimationResult(endReason=' + this.zaf_1.toString() + ', endState=' + this.yaf_1.toString() + ')';
  };
  var properties_initialized_Animatable_kt_s5cd7k;
  function _init_properties_Animatable_kt__f2hc5e() {
    if (!properties_initialized_Animatable_kt_s5cd7k) {
      properties_initialized_Animatable_kt_s5cd7k = true;
      positiveInfinityBounds1D = AnimationVector_0(Infinity);
      positiveInfinityBounds2D = AnimationVector_1(Infinity, Infinity);
      positiveInfinityBounds3D = AnimationVector_2(Infinity, Infinity, Infinity);
      positiveInfinityBounds4D = AnimationVector_3(Infinity, Infinity, Infinity, Infinity);
      negativeInfinityBounds1D = AnimationVector_0(-Infinity);
      negativeInfinityBounds2D = AnimationVector_1(-Infinity, -Infinity);
      negativeInfinityBounds3D = AnimationVector_2(-Infinity, -Infinity, -Infinity);
      negativeInfinityBounds4D = AnimationVector_3(-Infinity, -Infinity, -Infinity, -Infinity);
      androidx_compose_animation_core_Animatable$stable = 8;
      androidx_compose_animation_core_AnimationResult$stable = 0;
    }
  }
  var androidx_compose_animation_core_TargetBasedAnimation$stable;
  var androidx_compose_animation_core_DecayAnimation$stable;
  function TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, $this) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    TargetBasedAnimation.call($this, animationSpec.aag(typeConverter), typeConverter, initialValue, targetValue, initialVelocityVector);
    return $this;
  }
  function TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    return TargetBasedAnimation_init_$Init$(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector, objectCreate(protoOf(TargetBasedAnimation)));
  }
  function _get_endVelocity__lqkp53($this) {
    var tmp0_elvis_lhs = $this.jag_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = $this.bag_1.kag($this.fag_1, $this.gag_1, $this.hag_1);
      $this.jag_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function TargetBasedAnimation(animationSpec, typeConverter, initialValue, targetValue, initialVelocityVector) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    this.bag_1 = animationSpec;
    this.cag_1 = typeConverter;
    this.dag_1 = targetValue;
    this.eag_1 = initialValue;
    this.fag_1 = this.cag_1.jae()(initialValue);
    this.gag_1 = this.cag_1.jae()(targetValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_0(initialVelocityVector);
    tmp.hag_1 = tmp1_elvis_lhs == null ? newInstance(this.cag_1.jae()(initialValue)) : tmp1_elvis_lhs;
    this.iag_1 = new Long(-1, -1);
    this.jag_1 = null;
  }
  protoOf(TargetBasedAnimation).lag = function () {
    return this.cag_1;
  };
  protoOf(TargetBasedAnimation).mag = function () {
    return this.eag_1;
  };
  protoOf(TargetBasedAnimation).qae = function () {
    return this.dag_1;
  };
  protoOf(TargetBasedAnimation).nag = function () {
    return this.bag_1.nag();
  };
  protoOf(TargetBasedAnimation).oag = function (playTimeNanos) {
    var tmp;
    if (!this.qag(playTimeNanos)) {
      // Inline function 'kotlin.let' call
      var it = this.bag_1.pag(playTimeNanos, this.fag_1, this.gag_1, this.hag_1);
      var inductionVariable = 0;
      var last = it.kae();
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'androidx.compose.animation.core.checkPrecondition' call
          if (!!isNaN_0(it.lae(i))) {
            var tmp$ret$3 = 'AnimationVector cannot contain a NaN. ' + toString(it) + '. Animation: ' + this.toString() + ',' + (' playTimeNanos: ' + playTimeNanos.toString());
            throwIllegalStateException(tmp$ret$3);
          }
        }
         while (inductionVariable < last);
      tmp = this.cag_1.nae()(it);
    } else {
      tmp = this.qae();
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).rag = function () {
    if (compare(this.iag_1, new Long(0, 0)) < 0) {
      this.iag_1 = this.bag_1.sag(this.fag_1, this.gag_1, this.hag_1);
    }
    return this.iag_1;
  };
  protoOf(TargetBasedAnimation).tag = function (playTimeNanos) {
    var tmp;
    if (!this.qag(playTimeNanos)) {
      tmp = this.bag_1.uag(playTimeNanos, this.fag_1, this.gag_1, this.hag_1);
    } else {
      tmp = _get_endVelocity__lqkp53(this);
    }
    return tmp;
  };
  protoOf(TargetBasedAnimation).toString = function () {
    return 'TargetBasedAnimation: ' + toString_0(this.mag()) + ' -> ' + toString_0(this.qae()) + ',' + ('initial velocity: ' + toString(this.hag_1) + ', duration: ' + get_durationMillis(this).toString() + ' ms,') + ('animationSpec: ' + toString(this.bag_1));
  };
  function TargetBasedAnimation_0(animationSpec, typeConverter, initialValue, targetValue, initialVelocity) {
    return TargetBasedAnimation_init_$Create$(animationSpec, typeConverter, initialValue, targetValue, typeConverter.jae()(initialVelocity));
  }
  function Animation() {
  }
  function get_durationMillis(_this__u8e3s4) {
    return divide(_this__u8e3s4.rag(), new Long(1000000, 0));
  }
  var AnimationEndReason_BoundReached_instance;
  var AnimationEndReason_Finished_instance;
  var AnimationEndReason_entriesInitialized;
  function AnimationEndReason_initEntries() {
    if (AnimationEndReason_entriesInitialized)
      return Unit_instance;
    AnimationEndReason_entriesInitialized = true;
    AnimationEndReason_BoundReached_instance = new AnimationEndReason('BoundReached', 0);
    AnimationEndReason_Finished_instance = new AnimationEndReason('Finished', 1);
  }
  function AnimationEndReason(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimationEndReason_BoundReached_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_BoundReached_instance;
  }
  function AnimationEndReason_Finished_getInstance() {
    AnimationEndReason_initEntries();
    return AnimationEndReason_Finished_instance;
  }
  var androidx_compose_animation_core_AnimationConstants$stable;
  var androidx_compose_animation_core_TweenSpec$stable;
  var androidx_compose_animation_core_SpringSpec$stable;
  var androidx_compose_animation_core_ArcAnimationSpec$stable;
  var androidx_compose_animation_core_RepeatableSpec$stable;
  var androidx_compose_animation_core_InfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_SnapSpec$stable;
  var androidx_compose_animation_core_KeyframesSpecBaseConfig$stable;
  var androidx_compose_animation_core_KeyframeBaseEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable;
  var androidx_compose_animation_core_KeyframesSpec$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable;
  var androidx_compose_animation_core_KeyframesWithSplineSpec$stable;
  function SpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    this.vag_1 = dampingRatio;
    this.wag_1 = stiffness;
    this.xag_1 = visibilityThreshold;
  }
  protoOf(SpringSpec).aag = function (converter) {
    return VectorizedSpringSpec_init_$Create$(this.vag_1, this.wag_1, convert(converter, this.xag_1));
  };
  protoOf(SpringSpec).equals = function (other) {
    var tmp;
    if (other instanceof SpringSpec) {
      tmp = (other.vag_1 === this.vag_1 && other.wag_1 === this.wag_1 && equals(other.xag_1, this.xag_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SpringSpec).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.xag_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    return imul(imul(tmp$ret$0, 31) + getNumberHashCode(this.vag_1) | 0, 31) + getNumberHashCode(this.wag_1) | 0;
  };
  function spring(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    return new SpringSpec(dampingRatio, stiffness, visibilityThreshold);
  }
  function TweenSpec(durationMillis, delay, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.yag_1 = durationMillis;
    this.zag_1 = delay;
    this.aah_1 = easing;
  }
  protoOf(TweenSpec).aag = function (converter) {
    return new VectorizedTweenSpec(this.yag_1, this.zag_1, this.aah_1);
  };
  protoOf(TweenSpec).equals = function (other) {
    var tmp;
    if (other instanceof TweenSpec) {
      tmp = (other.yag_1 === this.yag_1 && other.zag_1 === this.zag_1 && equals(other.aah_1, this.aah_1));
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(TweenSpec).hashCode = function () {
    return imul(imul(this.yag_1, 31) + hashCode(this.aah_1) | 0, 31) + this.zag_1 | 0;
  };
  function tween(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    return new TweenSpec(durationMillis, delayMillis, easing);
  }
  function convert(_this__u8e3s4, data) {
    if (data == null) {
      return null;
    } else {
      return _this__u8e3s4.jae()(data);
    }
  }
  function delayed(animationSpec, startDelayNanos) {
    return new StartDelayAnimationSpec(animationSpec, startDelayNanos);
  }
  function StartDelayAnimationSpec(animationSpec, startDelayNanos) {
    this.bah_1 = animationSpec;
    this.cah_1 = startDelayNanos;
  }
  protoOf(StartDelayAnimationSpec).aag = function (converter) {
    var vecSpec = this.bah_1.aag(converter);
    return new StartDelayVectorizedAnimationSpec(vecSpec, this.cah_1);
  };
  protoOf(StartDelayAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.bah_1)) + this.cah_1.hashCode() | 0;
  };
  protoOf(StartDelayAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayAnimationSpec)) {
      return false;
    }
    return equalsLong(other.cah_1, this.cah_1) && equals(other.bah_1, this.bah_1);
  };
  function StartDelayVectorizedAnimationSpec(vectorizedAnimationSpec, startDelayNanos) {
    this.dah_1 = vectorizedAnimationSpec;
    this.eah_1 = startDelayNanos;
  }
  protoOf(StartDelayVectorizedAnimationSpec).nag = function () {
    return this.dah_1.nag();
  };
  protoOf(StartDelayVectorizedAnimationSpec).sag = function (initialValue, targetValue, initialVelocity) {
    return add(this.dah_1.sag(initialValue, targetValue, initialVelocity), this.eah_1);
  };
  protoOf(StartDelayVectorizedAnimationSpec).uag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (compare(playTimeNanos, this.eah_1) < 0) {
      tmp = initialVelocity;
    } else {
      tmp = this.dah_1.uag(subtract(playTimeNanos, this.eah_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).pag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var tmp;
    if (compare(playTimeNanos, this.eah_1) < 0) {
      tmp = initialValue;
    } else {
      tmp = this.dah_1.pag(subtract(playTimeNanos, this.eah_1), initialValue, targetValue, initialVelocity);
    }
    return tmp;
  };
  protoOf(StartDelayVectorizedAnimationSpec).hashCode = function () {
    return imul(31, hashCode(this.dah_1)) + this.eah_1.hashCode() | 0;
  };
  protoOf(StartDelayVectorizedAnimationSpec).equals = function (other) {
    if (!(other instanceof StartDelayVectorizedAnimationSpec)) {
      return false;
    }
    return equalsLong(other.eah_1, this.eah_1) && equals(other.dah_1, this.dah_1);
  };
  var androidx_compose_animation_core_AnimationState$stable;
  var androidx_compose_animation_core_AnimationScope$stable;
  function AnimationState$_get_value_$ref_fgr73c() {
    return constructCallableReference(function (p0) {
      return p0.r1();
    }, 1, 0, 104);
  }
  function AnimationState$_set_value_$ref_q9ieh8() {
    return constructCallableReference(function (p0, p1) {
      p0.eae(p1);
      return Unit_instance;
    }, 2, 0, 105);
  }
  function AnimationState(typeConverter, initialValue, initialVelocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    initialVelocityVector = initialVelocityVector === VOID ? null : initialVelocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? new Long(0, -2147483648) : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? new Long(0, -2147483648) : finishedTimeNanos;
    isRunning = isRunning === VOID ? false : isRunning;
    this.yad_1 = typeConverter;
    this.zad_1 = mutableStateOf(initialValue);
    var tmp = this;
    var tmp1_elvis_lhs = initialVelocityVector == null ? null : copy_0(initialVelocityVector);
    tmp.aae_1 = tmp1_elvis_lhs == null ? createZeroVectorFrom(this.yad_1, initialValue) : tmp1_elvis_lhs;
    this.bae_1 = lastFrameTimeNanos;
    this.cae_1 = finishedTimeNanos;
    this.dae_1 = isRunning;
  }
  protoOf(AnimationState).eae = function (_set____db54di) {
    var tmp0 = this.zad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationState).r1 = function () {
    var tmp0 = this.zad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationState$_get_value_$ref_fgr73c();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationState$_set_value_$ref_q9ieh8());
    return tmp0.r1();
  };
  protoOf(AnimationState).taf = function () {
    return this.yad_1.nae()(this.aae_1);
  };
  protoOf(AnimationState).toString = function () {
    return 'AnimationState(' + ('value=' + toString_0(this.r1()) + ', ') + ('velocity=' + toString_0(this.taf()) + ', ') + ('isRunning=' + this.dae_1 + ', ') + ('lastFrameTimeNanos=' + this.bae_1.toString() + ', ') + ('finishedTimeNanos=' + this.cae_1.toString()) + ')';
  };
  function AnimationScope$_get_value_$ref_u38x5x() {
    return constructCallableReference(function (p0) {
      return p0.r1();
    }, 1, 0, 106);
  }
  function AnimationScope$_set_value_$ref_bn0oen() {
    return constructCallableReference(function (p0, p1) {
      p0.eae(p1);
      return Unit_instance;
    }, 2, 0, 107);
  }
  function AnimationScope$_get_isRunning_$ref_gxcmg9() {
    return constructCallableReference(function (p0) {
      return p0.pae();
    }, 1, 0, 108);
  }
  function AnimationScope$_set_isRunning_$ref_1pl3xx() {
    return constructCallableReference(function (p0, p1) {
      p0.fah(p1);
      return Unit_instance;
    }, 2, 0, 109);
  }
  function AnimationScope(initialValue, typeConverter, initialVelocityVector, lastFrameTimeNanos, targetValue, startTimeNanos, isRunning, onCancel) {
    this.pad_1 = typeConverter;
    this.qad_1 = targetValue;
    this.rad_1 = startTimeNanos;
    this.sad_1 = onCancel;
    this.tad_1 = mutableStateOf(initialValue);
    this.uad_1 = copy_0(initialVelocityVector);
    this.vad_1 = lastFrameTimeNanos;
    this.wad_1 = new Long(0, -2147483648);
    this.xad_1 = mutableStateOf(isRunning);
  }
  protoOf(AnimationScope).eae = function (_set____db54di) {
    var tmp0 = this.tad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).r1 = function () {
    var tmp0 = this.tad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_value_$ref_u38x5x();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AnimationScope$_set_value_$ref_bn0oen());
    return tmp0.r1();
  };
  protoOf(AnimationScope).fah = function (_set____db54di) {
    var tmp0 = this.xad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(AnimationScope).pae = function () {
    var tmp0 = this.xad_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AnimationScope$_get_isRunning_$ref_gxcmg9();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, AnimationScope$_set_isRunning_$ref_1pl3xx());
    return tmp0.r1();
  };
  protoOf(AnimationScope).fae = function () {
    this.fah(false);
    this.sad_1();
  };
  function copy(_this__u8e3s4, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning) {
    value = value === VOID ? _this__u8e3s4.r1() : value;
    velocityVector = velocityVector === VOID ? copy_0(_this__u8e3s4.aae_1) : velocityVector;
    lastFrameTimeNanos = lastFrameTimeNanos === VOID ? _this__u8e3s4.bae_1 : lastFrameTimeNanos;
    finishedTimeNanos = finishedTimeNanos === VOID ? _this__u8e3s4.cae_1 : finishedTimeNanos;
    isRunning = isRunning === VOID ? _this__u8e3s4.dae_1 : isRunning;
    return new AnimationState(_this__u8e3s4.yad_1, value, velocityVector, lastFrameTimeNanos, finishedTimeNanos, isRunning);
  }
  function createZeroVectorFrom(_this__u8e3s4, value) {
    // Inline function 'kotlin.also' call
    var this_0 = _this__u8e3s4.jae()(value);
    this_0.oae();
    return this_0;
  }
  var androidx_compose_animation_core_AnimationVector$stable;
  var androidx_compose_animation_core_AnimationVector1D$stable;
  var androidx_compose_animation_core_AnimationVector2D$stable;
  var androidx_compose_animation_core_AnimationVector3D$stable;
  var androidx_compose_animation_core_AnimationVector4D$stable;
  function AnimationVector1D(initVal) {
    AnimationVector.call(this);
    this.gah_1 = initVal;
    this.hah_1 = 1;
  }
  protoOf(AnimationVector1D).oae = function () {
    this.gah_1 = 0.0;
  };
  protoOf(AnimationVector1D).iah = function () {
    return new AnimationVector1D(0.0);
  };
  protoOf(AnimationVector1D).lae = function (index) {
    if (index === 0) {
      return this.gah_1;
    } else {
      return 0.0;
    }
  };
  protoOf(AnimationVector1D).mae = function (index, value) {
    if (index === 0) {
      this.gah_1 = value;
    }
  };
  protoOf(AnimationVector1D).kae = function () {
    return this.hah_1;
  };
  protoOf(AnimationVector1D).toString = function () {
    return 'AnimationVector1D: value = ' + this.gah_1;
  };
  protoOf(AnimationVector1D).equals = function (other) {
    var tmp;
    if (other instanceof AnimationVector1D) {
      tmp = other.gah_1 === this.gah_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector1D).hashCode = function () {
    return getNumberHashCode(this.gah_1);
  };
  function AnimationVector() {
  }
  function AnimationVector4D(v1, v2, v3, v4) {
    AnimationVector.call(this);
    this.jah_1 = v1;
    this.kah_1 = v2;
    this.lah_1 = v3;
    this.mah_1 = v4;
    this.nah_1 = 4;
  }
  protoOf(AnimationVector4D).oae = function () {
    this.jah_1 = 0.0;
    this.kah_1 = 0.0;
    this.lah_1 = 0.0;
    this.mah_1 = 0.0;
  };
  protoOf(AnimationVector4D).iah = function () {
    return new AnimationVector4D(0.0, 0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector4D).lae = function (index) {
    switch (index) {
      case 0:
        return this.jah_1;
      case 1:
        return this.kah_1;
      case 2:
        return this.lah_1;
      case 3:
        return this.mah_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector4D).mae = function (index, value) {
    switch (index) {
      case 0:
        this.jah_1 = value;
        break;
      case 1:
        this.kah_1 = value;
        break;
      case 2:
        this.lah_1 = value;
        break;
      case 3:
        this.mah_1 = value;
        break;
    }
  };
  protoOf(AnimationVector4D).kae = function () {
    return this.nah_1;
  };
  protoOf(AnimationVector4D).toString = function () {
    return 'AnimationVector4D: v1 = ' + this.jah_1 + ', v2 = ' + this.kah_1 + ', v3 = ' + this.lah_1 + ', v4 = ' + this.mah_1;
  };
  protoOf(AnimationVector4D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof AnimationVector4D) {
      tmp_2 = other.jah_1 === this.jah_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.kah_1 === this.kah_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.lah_1 === this.lah_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.mah_1 === this.mah_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector4D).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.jah_1), 31) + getNumberHashCode(this.kah_1) | 0, 31) + getNumberHashCode(this.lah_1) | 0, 31) + getNumberHashCode(this.mah_1) | 0;
  };
  function AnimationVector_0(v1) {
    return new AnimationVector1D(v1);
  }
  function AnimationVector2D(v1, v2) {
    AnimationVector.call(this);
    this.oah_1 = v1;
    this.pah_1 = v2;
    this.qah_1 = 2;
  }
  protoOf(AnimationVector2D).oae = function () {
    this.oah_1 = 0.0;
    this.pah_1 = 0.0;
  };
  protoOf(AnimationVector2D).iah = function () {
    return new AnimationVector2D(0.0, 0.0);
  };
  protoOf(AnimationVector2D).lae = function (index) {
    switch (index) {
      case 0:
        return this.oah_1;
      case 1:
        return this.pah_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector2D).mae = function (index, value) {
    if (index === 0)
      this.oah_1 = value;
    else if (index === 1)
      this.pah_1 = value;
  };
  protoOf(AnimationVector2D).kae = function () {
    return this.qah_1;
  };
  protoOf(AnimationVector2D).toString = function () {
    return 'AnimationVector2D: v1 = ' + this.oah_1 + ', v2 = ' + this.pah_1;
  };
  protoOf(AnimationVector2D).equals = function (other) {
    var tmp;
    var tmp_0;
    if (other instanceof AnimationVector2D) {
      tmp_0 = other.oah_1 === this.oah_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.pah_1 === this.pah_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector2D).hashCode = function () {
    return imul(getNumberHashCode(this.oah_1), 31) + getNumberHashCode(this.pah_1) | 0;
  };
  function AnimationVector_1(v1, v2) {
    return new AnimationVector2D(v1, v2);
  }
  function AnimationVector3D(v1, v2, v3) {
    AnimationVector.call(this);
    this.rah_1 = v1;
    this.sah_1 = v2;
    this.tah_1 = v3;
    this.uah_1 = 3;
  }
  protoOf(AnimationVector3D).oae = function () {
    this.rah_1 = 0.0;
    this.sah_1 = 0.0;
    this.tah_1 = 0.0;
  };
  protoOf(AnimationVector3D).iah = function () {
    return new AnimationVector3D(0.0, 0.0, 0.0);
  };
  protoOf(AnimationVector3D).lae = function (index) {
    switch (index) {
      case 0:
        return this.rah_1;
      case 1:
        return this.sah_1;
      case 2:
        return this.tah_1;
      default:
        return 0.0;
    }
  };
  protoOf(AnimationVector3D).mae = function (index, value) {
    switch (index) {
      case 0:
        this.rah_1 = value;
        break;
      case 1:
        this.sah_1 = value;
        break;
      case 2:
        this.tah_1 = value;
        break;
    }
  };
  protoOf(AnimationVector3D).kae = function () {
    return this.uah_1;
  };
  protoOf(AnimationVector3D).toString = function () {
    return 'AnimationVector3D: v1 = ' + this.rah_1 + ', v2 = ' + this.sah_1 + ', v3 = ' + this.tah_1;
  };
  protoOf(AnimationVector3D).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    if (other instanceof AnimationVector3D) {
      tmp_1 = other.rah_1 === this.rah_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.sah_1 === this.sah_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = other.tah_1 === this.tah_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AnimationVector3D).hashCode = function () {
    return imul(imul(getNumberHashCode(this.rah_1), 31) + getNumberHashCode(this.sah_1) | 0, 31) + getNumberHashCode(this.tah_1) | 0;
  };
  function AnimationVector_2(v1, v2, v3) {
    return new AnimationVector3D(v1, v2, v3);
  }
  function AnimationVector_3(v1, v2, v3, v4) {
    return new AnimationVector4D(v1, v2, v3, v4);
  }
  function copy_0(_this__u8e3s4) {
    var newVector = newInstance(_this__u8e3s4);
    var inductionVariable = 0;
    var last = newVector.kae();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        newVector.mae(i, _this__u8e3s4.lae(i));
      }
       while (inductionVariable < last);
    return newVector;
  }
  function newInstance(_this__u8e3s4) {
    var tmp = _this__u8e3s4.iah();
    return tmp instanceof AnimationVector ? tmp : THROW_CCE();
  }
  function copyFrom(_this__u8e3s4, source) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.kae();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _this__u8e3s4.mae(i, source.lae(i));
      }
       while (inductionVariable < last);
  }
  function get_OurPercentCache() {
    _init_properties_ArcSpline_kt__f15lqp();
    return OurPercentCache;
  }
  var OurPercentCache;
  var androidx_compose_animation_core_ArcSpline_Arc$stable;
  var androidx_compose_animation_core_ArcSpline$stable;
  function Arc(mode, time1, time2, x1, y1, x2, y2) {
    this.vah_1 = time1;
    this.wah_1 = time2;
    this.xah_1 = x1;
    this.yah_1 = y1;
    this.zah_1 = x2;
    this.aai_1 = y2;
    this.bai_1 = 0.0;
    this.cai_1 = 0.0;
    this.dai_1 = 0.0;
    var dx = this.zah_1 - this.xah_1;
    var dy = this.aai_1 - this.yah_1;
    var isVertical;
    switch (mode) {
      case 1:
        isVertical = true;
        break;
      case 5:
        isVertical = dy < 0;
        break;
      case 4:
        isVertical = dy > 0;
        break;
      default:
        isVertical = false;
        break;
    }
    this.hai_1 = isVertical ? -1.0 : 1.0;
    this.fai_1 = 1 / (this.wah_1 - this.vah_1);
    this.eai_1 = new Float32Array(101);
    var isLinear = mode === 3;
    var tmp;
    var tmp_0;
    if (isLinear) {
      tmp_0 = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp_0 = Math.abs(dx) < 0.001;
    }
    if (tmp_0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.math.abs' call
      tmp = Math.abs(dy) < 0.001;
    }
    if (tmp) {
      isLinear = true;
      var tmp_1 = this;
      // Inline function 'kotlin.math.hypot' call
      tmp_1.bai_1 = hypot(dy, dx);
      this.gai_1 = this.bai_1 * this.fai_1;
      this.lai_1 = dx * this.fai_1;
      this.mai_1 = dy * this.fai_1;
      this.iai_1 = NaN;
      this.jai_1 = NaN;
    } else {
      this.iai_1 = dx * this.hai_1;
      this.jai_1 = dy * -this.hai_1;
      this.lai_1 = isVertical ? this.zah_1 : this.xah_1;
      this.mai_1 = isVertical ? this.yah_1 : this.aai_1;
      this.nai(this.xah_1, this.yah_1, this.zah_1, this.aai_1);
      this.gai_1 = this.bai_1 * this.fai_1;
    }
    this.kai_1 = isLinear;
  }
  protoOf(Arc).nai = function (x1, y1, x2, y2) {
    var a = x2 - x1;
    var b = y1 - y2;
    var lx = 0.0;
    var ly = b;
    var dist = 0.0;
    var ourPercent = get_OurPercentCache();
    var lastIndex = ourPercent.length - 1 | 0;
    var lastIndexFloat = lastIndex;
    var lut = this.eai_1;
    var inductionVariable = 1;
    if (inductionVariable <= lastIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.compose.animation.core.toRadians' call
        var angle = 90.0 * i / lastIndex * (3.141592653589793 / 180.0);
        // Inline function 'kotlin.math.sin' call
        var s = Math.sin(angle);
        // Inline function 'kotlin.math.cos' call
        var c = Math.cos(angle);
        var px = a * s;
        var py = b * c;
        var tmp = dist;
        var tmp0 = px - lx;
        // Inline function 'kotlin.math.hypot' call
        var y = py - ly;
        dist = tmp + hypot(tmp0, y);
        ourPercent[i] = dist;
        lx = px;
        ly = py;
      }
       while (!(i === lastIndex));
    this.bai_1 = dist;
    var inductionVariable_0 = 1;
    if (inductionVariable_0 <= lastIndex)
      do {
        var i_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _index_0__fvwizt = i_0;
        ourPercent[_index_0__fvwizt] = ourPercent[_index_0__fvwizt] / dist;
      }
       while (!(i_0 === lastIndex));
    var lutLastIndex = 100;
    var inductionVariable_1 = 0;
    var last = lut.length - 1 | 0;
    if (inductionVariable_1 <= last)
      do {
        var i_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var pos = i_1 / lutLastIndex;
        // Inline function 'androidx.compose.animation.core.binarySearch' call
        var index = binarySearch(ourPercent, pos);
        if (index >= 0) {
          lut[i_1] = index / lastIndexFloat;
        } else if (index === -1) {
          lut[i_1] = 0.0;
        } else {
          var p1 = (-index | 0) - 2 | 0;
          var p2 = (-index | 0) - 1 | 0;
          var ans = (p1 + (pos - ourPercent[p1]) / (ourPercent[p2] - ourPercent[p1])) / lastIndexFloat;
          lut[i_1] = ans;
        }
      }
       while (inductionVariable_1 <= last);
  };
  function ArcSpline(arcModes, timePoints, y) {
    this.pai_1 = true;
    var mode = {_v: 1};
    var last = {_v: 1};
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = timePoints.length - 1 | 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      switch (arcModes[tmp_3]) {
        case 1:
          mode._v = 1;
          last._v = mode._v;
          break;
        case 2:
          mode._v = 2;
          last._v = mode._v;
          break;
        case 3:
          mode._v = last._v === 1 ? 2 : 1;
          last._v = mode._v;
          break;
        case 0:
          mode._v = 3;
          break;
        case 5:
          mode._v = 5;
          break;
        case 4:
          mode._v = 4;
          break;
      }
      var yArray = y[tmp_3];
      var yArray1 = y[tmp_3 + 1 | 0];
      var timeArray = timePoints[tmp_3];
      var timeArray1 = timePoints[tmp_3 + 1 | 0];
      var dim = (yArray.length / 2 | 0) + (yArray.length % 2 | 0) | 0;
      var tmp_4 = 0;
      // Inline function 'kotlin.arrayOfNulls' call
      var tmp_5 = Array(dim);
      while (tmp_4 < dim) {
        var tmp_6 = tmp_4;
        var k = imul(tmp_6, 2);
        tmp_5[tmp_6] = new Arc(mode._v, timeArray, timeArray1, yArray[k], yArray[k + 1 | 0], yArray1[k], yArray1[k + 1 | 0]);
        tmp_4 = tmp_4 + 1 | 0;
      }
      tmp_2[tmp_3] = tmp_5;
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.oai_1 = tmp_2;
  }
  var properties_initialized_ArcSpline_kt_jqay4z;
  function _init_properties_ArcSpline_kt__f15lqp() {
    if (!properties_initialized_ArcSpline_kt_jqay4z) {
      properties_initialized_ArcSpline_kt_jqay4z = true;
      OurPercentCache = new Float32Array(91);
      androidx_compose_animation_core_ArcSpline_Arc$stable = 8;
      androidx_compose_animation_core_ArcSpline$stable = 8;
    }
  }
  var androidx_compose_animation_core_DeferredTargetAnimation$stable;
  function get_FastOutSlowInEasing() {
    _init_properties_Easing_kt__v6fq45();
    return FastOutSlowInEasing;
  }
  var FastOutSlowInEasing;
  var LinearOutSlowInEasing;
  var FastOutLinearInEasing;
  function get_LinearEasing() {
    _init_properties_Easing_kt__v6fq45();
    return LinearEasing;
  }
  var LinearEasing;
  var androidx_compose_animation_core_CubicBezierEasing$stable;
  function throwNoSolution($this, fraction) {
    throw IllegalArgumentException_init_$Create$('The cubic curve with parameters (' + $this.qai_1 + ', ' + $this.rai_1 + ', ' + $this.sai_1 + ', ' + $this.tai_1 + ') has no solution at ' + fraction);
  }
  function CubicBezierEasing(a, b, c, d) {
    this.qai_1 = a;
    this.rai_1 = b;
    this.sai_1 = c;
    this.tai_1 = d;
    // Inline function 'androidx.compose.animation.core.requirePrecondition' call
    if (!(!isNaN_0(this.qai_1) && !isNaN_0(this.rai_1) && !isNaN_0(this.sai_1) && !isNaN_0(this.tai_1))) {
      var tmp$ret$1 = 'Parameters to CubicBezierEasing cannot be NaN. Actual parameters are: ' + this.qai_1 + ', ' + this.rai_1 + ', ' + this.sai_1 + ', ' + this.tai_1 + '.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var roots = new Float32Array(5);
    var extrema = computeCubicVerticalBounds(0.0, this.rai_1, this.tai_1, 1.0, roots, 0);
    var tmp = this;
    // Inline function 'androidx.collection.FloatFloatPair.first' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), 32));
    tmp.uai_1 = floatFromBits(bits);
    var tmp_0 = this;
    // Inline function 'androidx.collection.FloatFloatPair.second' call
    // Inline function 'androidx.collection.internal.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(_FloatFloatPair___get_packedValue__impl__5lczxp(extrema), new Long(-1, 0)));
    tmp_0.vai_1 = floatFromBits(bits_0);
  }
  protoOf(CubicBezierEasing).wai = function (fraction) {
    var tmp;
    if (fraction > 0.0 && fraction < 1.0) {
      // Inline function 'kotlin.math.max' call
      var b = 1.1920929E-7;
      var f = Math.max(fraction, b);
      var t = findFirstCubicRoot(0.0 - f, this.qai_1 - f, this.sai_1 - f, 1.0 - f);
      if (isNaN_0(t)) {
        throwNoSolution(this, fraction);
      }
      var tmp0 = evaluateCubic(this.rai_1, this.tai_1, t);
      var tmp2 = this.uai_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = this.vai_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_0 = tmp0 < tmp2 ? tmp2 : tmp0;
      tmp = this_0 > maximumValue ? maximumValue : this_0;
    } else {
      tmp = fraction;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (other instanceof CubicBezierEasing) {
      tmp_2 = this.qai_1 === other.qai_1;
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = this.rai_1 === other.rai_1;
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = this.sai_1 === other.sai_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = this.tai_1 === other.tai_1;
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CubicBezierEasing).hashCode = function () {
    return imul(imul(imul(getNumberHashCode(this.qai_1), 31) + getNumberHashCode(this.rai_1) | 0, 31) + getNumberHashCode(this.sai_1) | 0, 31) + getNumberHashCode(this.tai_1) | 0;
  };
  protoOf(CubicBezierEasing).toString = function () {
    return 'CubicBezierEasing(a=' + this.qai_1 + ', b=' + this.rai_1 + ', c=' + this.sai_1 + ', d=' + this.tai_1 + ')';
  };
  function Easing() {
  }
  function sam$androidx_compose_animation_core_Easing$0(function_0) {
    this.xai_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_core_Easing$0).wai = function (fraction) {
    return this.xai_1(fraction);
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).r2 = function () {
    return this.xai_1;
  };
  protoOf(sam$androidx_compose_animation_core_Easing$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Easing) : false) {
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
  protoOf(sam$androidx_compose_animation_core_Easing$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function LinearEasing$lambda(fraction) {
    _init_properties_Easing_kt__v6fq45();
    return fraction;
  }
  var properties_initialized_Easing_kt_af4f4d;
  function _init_properties_Easing_kt__v6fq45() {
    if (!properties_initialized_Easing_kt_af4f4d) {
      properties_initialized_Easing_kt_af4f4d = true;
      FastOutSlowInEasing = new CubicBezierEasing(0.4, 0.0, 0.2, 1.0);
      LinearOutSlowInEasing = new CubicBezierEasing(0.0, 0.0, 0.2, 1.0);
      FastOutLinearInEasing = new CubicBezierEasing(0.4, 0.0, 1.0, 1.0);
      var tmp = LinearEasing$lambda;
      LinearEasing = new sam$androidx_compose_animation_core_Easing$0(tmp);
      androidx_compose_animation_core_CubicBezierEasing$stable = 0;
    }
  }
  var androidx_compose_animation_core_FloatSpringSpec$stable;
  var androidx_compose_animation_core_FloatTweenSpec$stable;
  function FloatTweenSpec(duration, delay, easing) {
    duration = duration === VOID ? 300 : duration;
    delay = delay === VOID ? 0 : delay;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.yai_1 = duration;
    this.zai_1 = delay;
    this.aaj_1 = easing;
    this.baj_1 = multiply(numberToLong(this.yai_1), new Long(1000000, 0));
    this.caj_1 = multiply(numberToLong(this.zai_1), new Long(1000000, 0));
  }
  protoOf(FloatTweenSpec).daj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.caj_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.baj_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    var tmp;
    if (this.yai_1 === 0) {
      tmp = 1.0;
    } else {
      // Inline function 'kotlin.Long.div' call
      var other = toNumber(this.baj_1);
      tmp = toNumber(clampedPlayTimeNanos) / other;
    }
    var rawFraction = tmp;
    var fraction = this.aaj_1.wai(rawFraction);
    // Inline function 'androidx.compose.animation.core.lerp' call
    return initialValue * (1 - fraction) + targetValue * fraction;
  };
  protoOf(FloatTweenSpec).eaj = function (initialValue, targetValue, initialVelocity) {
    return add(this.caj_1, this.baj_1);
  };
  protoOf(FloatTweenSpec).faj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    // Inline function 'androidx.compose.animation.core.FloatTweenSpec.clampPlayTimeNanos' call
    var tmp0 = subtract(playTimeNanos, this.caj_1);
    var tmp2 = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
    var maximumValue = this.baj_1;
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
    var this_0 = compare(tmp0, tmp2) < 0 ? tmp2 : tmp0;
    var clampedPlayTimeNanos = compare(this_0, maximumValue) > 0 ? maximumValue : this_0;
    if (equalsLong(clampedPlayTimeNanos, new Long(0, 0))) {
      return initialVelocity;
    }
    var startNum = this.daj(subtract(clampedPlayTimeNanos, new Long(1000000, 0)), initialValue, targetValue, initialVelocity);
    var endNum = this.daj(clampedPlayTimeNanos, initialValue, targetValue, initialVelocity);
    return (endNum - startNum) * 1000.0;
  };
  protoOf(FloatTweenSpec).aag = function (converter) {
    return this.haj(converter);
  };
  function FloatAnimationSpec() {
  }
  function FloatSpringSpec(dampingRatio, stiffness, visibilityThreshold) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? 0.01 : visibilityThreshold;
    this.iaj_1 = dampingRatio;
    this.jaj_1 = stiffness;
    this.kaj_1 = visibilityThreshold;
    var tmp = this;
    // Inline function 'kotlin.also' call
    var this_0 = new SpringSimulation(1.0);
    this_0.paj(this.iaj_1);
    this_0.qaj(this.jaj_1);
    tmp.laj_1 = this_0;
  }
  protoOf(FloatSpringSpec).daj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.laj_1.maj_1 = targetValue;
    // Inline function 'androidx.compose.animation.core.Motion.value' call
    var this_0 = this.laj_1.raj(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).faj = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    var playTimeMillis = divide(playTimeNanos, new Long(1000000, 0));
    this.laj_1.maj_1 = targetValue;
    // Inline function 'androidx.compose.animation.core.Motion.velocity' call
    var this_0 = this.laj_1.raj(initialValue, initialVelocity, playTimeMillis);
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _Motion___get_packedValue__impl__qymh4n(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    return floatFromBits(bits);
  };
  protoOf(FloatSpringSpec).gaj = function (initialValue, targetValue, initialVelocity) {
    return 0.0;
  };
  protoOf(FloatSpringSpec).eaj = function (initialValue, targetValue, initialVelocity) {
    var tmp0_stiffness = this.laj_1.saj();
    var tmp1_dampingRatio = this.laj_1.oaj_1;
    var tmp2_initialDisplacement = (initialValue - targetValue) / this.kaj_1;
    var tmp3_initialVelocity = initialVelocity / this.kaj_1;
    return multiply(estimateAnimationDurationMillis(tmp0_stiffness, tmp1_dampingRatio, tmp3_initialVelocity, tmp2_initialDisplacement, 1.0), new Long(1000000, 0));
  };
  protoOf(FloatSpringSpec).aag = function (converter) {
    return this.haj(converter);
  };
  var androidx_compose_animation_core_FloatExponentialDecaySpec$stable;
  function withInfiniteAnimationFrameNanos(onFrame, $completion) {
    var tmp = new $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation) {
    this.lak_1 = $onFrame;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(withInfiniteAnimationFrameNanos$slambda).e1n = function ($completion) {
    var tmp = this.d1n($completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = withFrameNanos(this.lak_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 2) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(withInfiniteAnimationFrameNanos$slambda).d1n = function (completion) {
    return new withInfiniteAnimationFrameNanos$slambda(this.lak_1, completion);
  };
  function withInfiniteAnimationFrameNanos$slambda_0($onFrame, resultContinuation) {
    var i = new withInfiniteAnimationFrameNanos$slambda($onFrame, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.e1n($completion);
    }, 0);
  }
  function $withInfiniteAnimationFrameNanosCOROUTINE$(onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.bak_1 = onFrame;
  }
  protoOf($withInfiniteAnimationFrameNanosCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            var policy = this.r8().y8(Key_instance);
            if (policy == null) {
              this.l8_1 = 2;
              suspendResult = withFrameNanos(this.bak_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = policy.mak(withInfiniteAnimationFrameNanos$slambda_0(this.bak_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.cak_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 2:
            this.cak_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            return this.cak_1;
          case 4:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 4) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  var androidx_compose_animation_core_InfiniteTransition$stable;
  var androidx_compose_animation_core_MutationInterruptedException$stable;
  var androidx_compose_animation_core_MutatorMutex$stable;
  function Mutator(priority, job) {
    this.nak_1 = priority;
    this.oak_1 = job;
  }
  protoOf(Mutator).pak = function (other) {
    return this.nak_1.j2(other.nak_1) >= 0;
  };
  protoOf(Mutator).i1x = function () {
    return this.oak_1.rv(new MutationInterruptedException());
  };
  function tryMutateOrCancel($this, mutator) {
    $l$loop: while (true) {
      var oldMutator = $this.gae_1.p12();
      if (oldMutator == null || mutator.pak(oldMutator)) {
        if ($this.gae_1.d1j(oldMutator, mutator)) {
          if (oldMutator == null)
            null;
          else {
            oldMutator.i1x();
          }
          break $l$loop;
        }
      } else
        throw CancellationException_init_$Create$('Current mutation had a higher priority');
    }
  }
  function MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation) {
    this.zak_1 = $priority;
    this.aal_1 = this$0;
    this.bal_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutatorMutex$mutate$slambda).ial = function ($this$coroutineScope, $completion) {
    var tmp = this.q1k($this$coroutineScope, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(MutatorMutex$mutate$slambda).d9 = function (p1, $completion) {
    return this.ial((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutatorMutex$mutate$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 9;
            this.fal_1 = new Mutator(this.zak_1, ensureNotNull(this.cal_1.iu().y8(Key_instance_0)));
            tryMutateOrCancel(this.aal_1, this.fal_1);
            this.eal_1 = this.aal_1.hae_1;
            this.dal_1 = null;
            this.l8_1 = 1;
            suspendResult = this.eal_1.v1t(this.dal_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.gal_1 = Unit_instance;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 8;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 7;
            this.l8_1 = 4;
            suspendResult = this.bal_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.hal_1 = suspendResult;
            this.l8_1 = 5;
            continue $sm;
          case 5:
            var tmp_0 = this.hal_1;
            this.m8_1 = 8;
            this.aal_1.gae_1.d1j(this.fal_1, null);
            this.gal_1 = tmp_0;
            this.m8_1 = 9;
            this.l8_1 = 6;
            continue $sm;
          case 6:
            var tmp_1 = this.gal_1;
            this.m8_1 = 9;
            this.eal_1.g1t(this.dal_1);
            return tmp_1;
          case 7:
            this.m8_1 = 8;
            var t = this.o8_1;
            this.aal_1.gae_1.d1j(this.fal_1, null);
            throw t;
          case 8:
            this.m8_1 = 9;
            var t_0 = this.o8_1;
            this.eal_1.g1t(this.dal_1);
            throw t_0;
          case 9:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 9) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutatorMutex$mutate$slambda).q1k = function ($this$coroutineScope, completion) {
    var i = new MutatorMutex$mutate$slambda(this.zak_1, this.aal_1, this.bal_1, completion);
    i.cal_1 = $this$coroutineScope;
    return i;
  };
  function MutatorMutex$mutate$slambda_0($priority, this$0, $block, resultContinuation) {
    var i = new MutatorMutex$mutate$slambda($priority, this$0, $block, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.ial($this$coroutineScope, $completion);
    }, 1);
  }
  function MutatorMutex() {
    this.gae_1 = new AtomicReference(null);
    this.hae_1 = Mutex();
  }
  protoOf(MutatorMutex).jal = function (priority, block, $completion) {
    return coroutineScope(MutatorMutex$mutate$slambda_0(priority, this, block, null), $completion);
  };
  protoOf(MutatorMutex).iae = function (priority, block, $completion, $super) {
    priority = priority === VOID ? MutatePriority_Default_getInstance() : priority;
    return $super === VOID ? this.jal(priority, block, $completion) : $super.jal.call(this, priority, block, $completion);
  };
  var MutatePriority_Default_instance;
  var MutatePriority_UserInput_instance;
  var MutatePriority_PreventUserInput_instance;
  var MutatePriority_entriesInitialized;
  function MutatePriority_initEntries() {
    if (MutatePriority_entriesInitialized)
      return Unit_instance;
    MutatePriority_entriesInitialized = true;
    MutatePriority_Default_instance = new MutatePriority('Default', 0);
    MutatePriority_UserInput_instance = new MutatePriority('UserInput', 1);
    MutatePriority_PreventUserInput_instance = new MutatePriority('PreventUserInput', 2);
  }
  function MutatePriority(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MutationInterruptedException() {
    PlatformOptimizedCancellationException.call(this, 'Mutation interrupted');
    captureStack(this, MutationInterruptedException);
  }
  function MutatePriority_Default_getInstance() {
    MutatePriority_initEntries();
    return MutatePriority_Default_instance;
  }
  var androidx_compose_animation_core_MonoSpline$stable;
  var androidx_compose_animation_core_PathEasing$stable;
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function estimateAnimationDurationMillis(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    if (dampingRatio === 0.0) {
      return new Long(2077252342, 2147);
    }
    return estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateAnimationDurationMillis_0(stiffness, dampingRatio, initialVelocity, initialDisplacement, delta) {
    var tmp = 2.0 * dampingRatio;
    // Inline function 'kotlin.math.sqrt' call
    var dampingCoefficient = tmp * Math.sqrt(stiffness);
    var partialRoot = dampingCoefficient * dampingCoefficient - 4.0 * stiffness;
    var tmp_0;
    if (partialRoot < 0.0) {
      tmp_0 = 0.0;
    } else {
      // Inline function 'kotlin.math.sqrt' call
      tmp_0 = Math.sqrt(partialRoot);
    }
    var partialRootReal = tmp_0;
    var tmp_1;
    if (partialRoot < 0.0) {
      // Inline function 'kotlin.math.abs' call
      // Inline function 'kotlin.math.sqrt' call
      var x = Math.abs(partialRoot);
      tmp_1 = Math.sqrt(x);
    } else {
      tmp_1 = 0.0;
    }
    var partialRootImaginary = tmp_1;
    var firstRootReal = (-dampingCoefficient + partialRootReal) * 0.5;
    var firstRootImaginary = partialRootImaginary * 0.5;
    var secondRootReal = (-dampingCoefficient - partialRootReal) * 0.5;
    return estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialDisplacement, delta);
  }
  function estimateDurationInternal(firstRootReal, firstRootImaginary, secondRootReal, dampingRatio, initialVelocity, initialPosition, delta) {
    if (initialPosition === 0.0 && initialVelocity === 0.0) {
      return new Long(0, 0);
    }
    var v0 = initialPosition < 0 ? -initialVelocity : initialVelocity;
    // Inline function 'kotlin.math.abs' call
    var p0 = Math.abs(initialPosition);
    return numberToLong((dampingRatio > 1.0 ? estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) : dampingRatio < 1.0 ? estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) : estimateCriticallyDamped(firstRootReal, p0, v0, delta)) * 1000.0);
  }
  function estimateOverDamped(firstRootReal, secondRootReal, p0, v0, delta) {
    var r1 = firstRootReal;
    var r2 = secondRootReal;
    var c2 = (r1 * p0 - v0) / (r1 - r2);
    var c1 = p0 - c2;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r1;
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var t2 = Math.log(x_2) / r2;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    // Inline function 'kotlin.math.ln' call
    var x_3 = c1 * r1 / (-c2 * r2);
    var tInflection = Math.log(x_3) / (r2 - r1);
    var tmp_0;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_0 = -delta;
    } else if (tInflection > 0.0 && -estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) < delta) {
      if (c2 > 0.0 && c1 < 0.0) {
        tCurr = 0.0;
      }
      tmp_0 = -delta;
    } else {
      // Inline function 'kotlin.math.ln' call
      var x_4 = -(c2 * r2 * r2) / (c1 * r1 * r1);
      tCurr = Math.log(x_4) / (r1 - r2);
      tmp_0 = delta;
    }
    var signedDelta = tmp_0;
    var tmp_1 = c1 * r1;
    // Inline function 'kotlin.math.exp' call
    var x_5 = r1 * tCurr;
    var tmp_2 = tmp_1 * Math.exp(x_5);
    var tmp_3 = c2 * r2;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r2 * tCurr;
    // Inline function 'kotlin.math.abs' call
    var x_7 = tmp_2 + tmp_3 * Math.exp(x_6);
    if (Math.abs(x_7) < 1.0E-4) {
      return tCurr;
    }
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_8 = tCurr;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r1 * x_8;
      var tmp_4 = c1 * Math.exp(x_9);
      // Inline function 'kotlin.math.exp' call
      var x_10 = r2 * x_8;
      var tmp_5 = tmp_4 + c2 * Math.exp(x_10) + signedDelta;
      var tmp_6 = c1 * r1;
      // Inline function 'kotlin.math.exp' call
      var x_11 = r1 * x_8;
      var tmp_7 = tmp_6 * Math.exp(x_11);
      var tmp_8 = c2 * r2;
      // Inline function 'kotlin.math.exp' call
      var x_12 = r2 * x_8;
      tCurr = x_8 - tmp_5 / (tmp_7 + tmp_8 * Math.exp(x_12));
      // Inline function 'kotlin.math.abs' call
      var x_13 = tLast - tCurr;
      tDelta = Math.abs(x_13);
    }
    return tCurr;
  }
  function estimateUnderDamped(firstRootReal, firstRootImaginary, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = (v0 - r * c1) / firstRootImaginary;
    // Inline function 'kotlin.math.sqrt' call
    var x = c1 * c1 + c2 * c2;
    var c = Math.sqrt(x);
    // Inline function 'kotlin.math.ln' call
    var x_0 = delta / c;
    return Math.log(x_0) / r;
  }
  function estimateCriticallyDamped(firstRootReal, p0, v0, delta) {
    var r = firstRootReal;
    var c1 = p0;
    var c2 = v0 - r * c1;
    // Inline function 'kotlin.math.abs' call
    var x = delta / c1;
    // Inline function 'kotlin.math.ln' call
    var x_0 = Math.abs(x);
    var t1 = Math.log(x_0) / r;
    // Inline function 'kotlin.run' call
    // Inline function 'kotlin.math.abs' call
    var x_1 = delta / c2;
    // Inline function 'kotlin.math.ln' call
    var x_2 = Math.abs(x_1);
    var guess = Math.log(x_2);
    var t = guess;
    var inductionVariable = 0;
    if (inductionVariable <= 5)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.math.abs' call
        var x_3 = t / r;
        // Inline function 'kotlin.math.ln' call
        var x_4 = Math.abs(x_3);
        t = guess - Math.log(x_4);
      }
       while (inductionVariable <= 5);
    var t2 = t / r;
    var tmp;
    // Inline function 'androidx.compose.animation.core.isNotFinite' call
    // Inline function 'androidx.compose.ui.util.fastIsFinite' call
    if (!(compare(bitwiseAnd(toRawBits(t1), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
      tmp = t2;
    } else {
      // Inline function 'androidx.compose.animation.core.isNotFinite' call
      // Inline function 'androidx.compose.ui.util.fastIsFinite' call
      if (!(compare(bitwiseAnd(toRawBits(t2), new Long(-1, 2147483647)), new Long(0, 2146435072)) < 0)) {
        tmp = t1;
      } else {
        // Inline function 'kotlin.math.max' call
        tmp = Math.max(t1, t2);
      }
    }
    var tCurr = tmp;
    var tInflection = -(r * c1 + c2) / (r * c2);
    // Inline function 'kotlin.math.exp' call
    var x_5 = r * tInflection;
    var tmp_0 = c1 * Math.exp(x_5);
    var tmp_1 = c2 * tInflection;
    // Inline function 'kotlin.math.exp' call
    var x_6 = r * tInflection;
    var xInflection = tmp_0 + tmp_1 * Math.exp(x_6);
    var tmp_2;
    if (isNaN_1(tInflection) || tInflection <= 0.0) {
      tmp_2 = -delta;
    } else if (tInflection > 0.0 && -xInflection < delta) {
      if (c2 < 0 && c1 > 0) {
        tCurr = 0.0;
      }
      tmp_2 = -delta;
    } else {
      tCurr = -(2.0 / r) - c1 / c2;
      tmp_2 = delta;
    }
    var signedDelta = tmp_2;
    var tDelta = 1.7976931348623157E308;
    var iterations = 0;
    while (tDelta > 0.001 && iterations < 100) {
      iterations = iterations + 1 | 0;
      var tLast = tCurr;
      // Inline function 'androidx.compose.animation.core.iterateNewtonsMethod' call
      var x_7 = tCurr;
      var tmp_3 = c1 + c2 * x_7;
      // Inline function 'kotlin.math.exp' call
      var x_8 = r * x_7;
      var tmp_4 = tmp_3 * Math.exp(x_8) + signedDelta;
      var tmp_5 = c2 * (r * x_7 + 1) + c1 * r;
      // Inline function 'kotlin.math.exp' call
      var x_9 = r * x_7;
      tCurr = x_7 - tmp_4 / (tmp_5 * Math.exp(x_9));
      // Inline function 'kotlin.math.abs' call
      var x_10 = tLast - tCurr;
      tDelta = Math.abs(x_10);
    }
    return tCurr;
  }
  function estimateOverDamped$xInflection(c1, r1, tInflection, c2, r2) {
    // Inline function 'kotlin.math.exp' call
    var x = r1 * tInflection;
    var tmp = c1 * Math.exp(x);
    // Inline function 'kotlin.math.exp' call
    var x_0 = r2 * tInflection;
    return tmp + c2 * Math.exp(x_0);
  }
  var androidx_compose_animation_core_SpringSimulation$stable;
  function SpringSimulation(finalPosition) {
    this.maj_1 = finalPosition;
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.naj_1 = Math.sqrt(50.0);
    this.oaj_1 = 1.0;
  }
  protoOf(SpringSimulation).qaj = function (value) {
    if (this.saj() <= 0) {
      throwIllegalArgumentException('Spring stiffness constant must be positive.');
    }
    var tmp = this;
    // Inline function 'kotlin.math.sqrt' call
    tmp.naj_1 = Math.sqrt(value);
  };
  protoOf(SpringSimulation).saj = function () {
    return this.naj_1 * this.naj_1;
  };
  protoOf(SpringSimulation).paj = function (value) {
    if (value < 0) {
      throwIllegalArgumentException('Damping ratio must be non-negative');
    }
    this.oaj_1 = value;
  };
  protoOf(SpringSimulation).raj = function (lastDisplacement, lastVelocity, timeElapsed) {
    var adjustedDisplacement = lastDisplacement - this.maj_1;
    // Inline function 'kotlin.Long.div' call
    var deltaT = toNumber(timeElapsed) / 1000.0;
    var dampingRatioSquared = this.oaj_1 * this.oaj_1;
    var r = -this.oaj_1 * this.naj_1;
    var displacement;
    var currentVelocity;
    if (this.oaj_1 > 1) {
      var tmp = this.naj_1;
      // Inline function 'kotlin.math.sqrt' call
      var x = dampingRatioSquared - 1;
      var s = tmp * Math.sqrt(x);
      var gammaPlus = r + s;
      var gammaMinus = r - s;
      var coeffB = (gammaMinus * adjustedDisplacement - lastVelocity) / (gammaMinus - gammaPlus);
      var coeffA = adjustedDisplacement - coeffB;
      // Inline function 'kotlin.math.exp' call
      var x_0 = gammaMinus * deltaT;
      var tmp_0 = coeffA * Math.exp(x_0);
      // Inline function 'kotlin.math.exp' call
      var x_1 = gammaPlus * deltaT;
      displacement = tmp_0 + coeffB * Math.exp(x_1);
      var tmp_1 = coeffA * gammaMinus;
      // Inline function 'kotlin.math.exp' call
      var x_2 = gammaMinus * deltaT;
      var tmp_2 = tmp_1 * Math.exp(x_2);
      var tmp_3 = coeffB * gammaPlus;
      // Inline function 'kotlin.math.exp' call
      var x_3 = gammaPlus * deltaT;
      currentVelocity = tmp_2 + tmp_3 * Math.exp(x_3);
    } else if (this.oaj_1 === 1.0) {
      var coeffA_0 = adjustedDisplacement;
      var coeffB_0 = lastVelocity + this.naj_1 * adjustedDisplacement;
      var nFdT = -this.naj_1 * deltaT;
      var tmp_4 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      displacement = tmp_4 * Math.exp(nFdT);
      var tmp_5 = coeffA_0 + coeffB_0 * deltaT;
      // Inline function 'kotlin.math.exp' call
      var tmp_6 = tmp_5 * Math.exp(nFdT) * -this.naj_1;
      // Inline function 'kotlin.math.exp' call
      currentVelocity = tmp_6 + coeffB_0 * Math.exp(nFdT);
    } else {
      var tmp_7 = this.naj_1;
      // Inline function 'kotlin.math.sqrt' call
      var x_4 = 1 - dampingRatioSquared;
      var dampedFreq = tmp_7 * Math.sqrt(x_4);
      var cosCoeff = adjustedDisplacement;
      var sinCoeff = 1 / dampedFreq * (-r * adjustedDisplacement + lastVelocity);
      var dFdT = dampedFreq * deltaT;
      // Inline function 'kotlin.math.exp' call
      var x_5 = r * deltaT;
      var tmp_8 = Math.exp(x_5);
      // Inline function 'kotlin.math.cos' call
      var tmp_9 = cosCoeff * Math.cos(dFdT);
      // Inline function 'kotlin.math.sin' call
      displacement = tmp_8 * (tmp_9 + sinCoeff * Math.sin(dFdT));
      var tmp_10 = displacement * r;
      // Inline function 'kotlin.math.exp' call
      var x_6 = r * deltaT;
      var tmp_11 = Math.exp(x_6);
      var tmp_12 = -dampedFreq * cosCoeff;
      // Inline function 'kotlin.math.sin' call
      var tmp_13 = tmp_12 * Math.sin(dFdT);
      var tmp_14 = dampedFreq * sinCoeff;
      // Inline function 'kotlin.math.cos' call
      currentVelocity = tmp_10 + tmp_11 * (tmp_13 + tmp_14 * Math.cos(dFdT));
    }
    var newValue = displacement + this.maj_1;
    var newVelocity = currentVelocity;
    // Inline function 'androidx.compose.animation.core.Motion' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits_0(newValue));
    var v2 = fromInt(toRawBits_0(newVelocity));
    var tmp$ret$17 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Motion___init__impl__vk56rv(tmp$ret$17);
  };
  function _Motion___init__impl__vk56rv(packedValue) {
    return packedValue;
  }
  function _Motion___get_packedValue__impl__qymh4n($this) {
    return $this;
  }
  function animate(_this__u8e3s4, animation, startTimeNanos, block, $completion) {
    startTimeNanos = startTimeNanos === VOID ? new Long(0, -2147483648) : startTimeNanos;
    var tmp;
    if (block === VOID) {
      tmp = animate$lambda;
    } else {
      tmp = block;
    }
    block = tmp;
    var tmp_0 = new $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, $completion);
    tmp_0.n8_1 = Unit_instance;
    tmp_0.o8_1 = null;
    return tmp_0.t8();
  }
  function updateState(_this__u8e3s4, state) {
    state.eae(_this__u8e3s4.r1());
    copyFrom(state.aae_1, _this__u8e3s4.uad_1);
    state.cae_1 = _this__u8e3s4.wad_1;
    state.bae_1 = _this__u8e3s4.vad_1;
    state.dae_1 = _this__u8e3s4.pae();
  }
  function get_durationScale(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y8(Key_instance_1);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xal();
    var scale = tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs;
    // Inline function 'androidx.compose.animation.core.checkPrecondition' call
    if (!(scale >= 0.0)) {
      var tmp$ret$1 = 'negative scale factor';
      throwIllegalStateException(tmp$ret$1);
    }
    return scale;
  }
  function callWithFrameNanos(_this__u8e3s4, onFrame, $completion) {
    var tmp = new $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function doAnimationFrameWithScale(_this__u8e3s4, frameTimeNanos, durationScale, anim, state, block) {
    var tmp;
    if (durationScale === 0.0) {
      tmp = anim.rag();
    } else {
      // Inline function 'kotlin.Long.div' call
      var this_0 = subtract(frameTimeNanos, _this__u8e3s4.rad_1);
      var tmp$ret$0 = toNumber(this_0) / durationScale;
      tmp = numberToLong(tmp$ret$0);
    }
    var playTimeNanos = tmp;
    doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block);
  }
  function doAnimationFrame(_this__u8e3s4, frameTimeNanos, playTimeNanos, anim, state, block) {
    _this__u8e3s4.vad_1 = frameTimeNanos;
    _this__u8e3s4.eae(anim.oag(playTimeNanos));
    _this__u8e3s4.uad_1 = anim.tag(playTimeNanos);
    var isLastFrame = anim.qag(playTimeNanos);
    if (isLastFrame) {
      _this__u8e3s4.wad_1 = _this__u8e3s4.vad_1;
      _this__u8e3s4.fah(false);
    }
    updateState(_this__u8e3s4, state);
    block(_this__u8e3s4);
  }
  function animate$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function animate$lambda$lambda($this_animate) {
    return function () {
      $this_animate.dae_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_0($lateInitScope, $initialValue, $animation, $initialVelocityVector, $durationScale, $this_animate, $block) {
    return function (it) {
      var tmp = $animation.lag();
      var tmp_0 = $animation.qae();
      // Inline function 'kotlin.apply' call
      var this_0 = new AnimationScope($initialValue, tmp, $initialVelocityVector, it, tmp_0, it, true, animate$lambda$lambda($this_animate));
      doAnimationFrameWithScale(this_0, it, $durationScale, $animation, $this_animate, $block);
      $lateInitScope._v = this_0;
      return Unit_instance;
    };
  }
  function animate$lambda_1($this_animate) {
    return function () {
      $this_animate.dae_1 = false;
      return Unit_instance;
    };
  }
  function animate$lambda_2($lateInitScope, $durationScale, $animation, $this_animate, $block) {
    return function (it) {
      doAnimationFrameWithScale(ensureNotNull($lateInitScope._v), it, $durationScale, $animation, $this_animate, $block);
      return Unit_instance;
    };
  }
  function callWithFrameNanos$lambda($onFrame) {
    return function (it) {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = divide(it, fromInt(1));
      return $onFrame(tmp$ret$0);
    };
  }
  function $animateCOROUTINE$(_this__u8e3s4, animation, startTimeNanos, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.sal_1 = _this__u8e3s4;
    this.tal_1 = animation;
    this.ual_1 = startTimeNanos;
    this.val_1 = block;
  }
  protoOf($animateCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 8;
            var initialValue = this.tal_1.oag(new Long(0, 0));
            var initialVelocityVector = this.tal_1.tag(new Long(0, 0));
            this.wal_1 = {_v: null};
            this.m8_1 = 7;
            if (equalsLong(this.ual_1, new Long(0, -2147483648))) {
              var durationScale = get_durationScale(this.r8());
              this.l8_1 = 1;
              suspendResult = callWithFrameNanos(this.tal_1, animate$lambda_0(this.wal_1, initialValue, this.tal_1, initialVelocityVector, durationScale, this.sal_1, this.val_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              var tmp_0 = this.tal_1.lag();
              var tmp_1 = this.tal_1.qae();
              var this_0 = new AnimationScope(initialValue, tmp_0, initialVelocityVector, this.ual_1, tmp_1, this.ual_1, true, animate$lambda_1(this.sal_1));
              doAnimationFrameWithScale(this_0, this.ual_1, get_durationScale(this.r8()), this.tal_1, this.sal_1, this.val_1);
              this.wal_1._v = this_0;
              this.l8_1 = 2;
              continue $sm;
            }

          case 1:
            this.l8_1 = 2;
            continue $sm;
          case 2:
            this.l8_1 = 3;
            continue $sm;
          case 3:
            if (!ensureNotNull(this.wal_1._v).pae()) {
              this.l8_1 = 5;
              continue $sm;
            }

            var durationScale_0 = get_durationScale(this.r8());
            this.l8_1 = 4;
            suspendResult = callWithFrameNanos(this.tal_1, animate$lambda_2(this.wal_1, durationScale_0, this.tal_1, this.sal_1, this.val_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.l8_1 = 3;
            continue $sm;
          case 5:
            this.m8_1 = 8;
            this.l8_1 = 6;
            continue $sm;
          case 6:
            this.m8_1 = 8;
            return Unit_instance;
          case 7:
            this.m8_1 = 8;
            var tmp_2 = this.o8_1;
            if (tmp_2 instanceof CancellationException) {
              var e = this.o8_1;
              var tmp0_safe_receiver = this.wal_1._v;
              if (tmp0_safe_receiver == null)
                null;
              else {
                tmp0_safe_receiver.fah(false);
              }
              var tmp1_safe_receiver = this.wal_1._v;
              if (equals(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.vad_1, this.sal_1.bae_1)) {
                this.sal_1.dae_1 = false;
              }
              throw e;
            } else {
              throw this.o8_1;
            }

          case 8:
            throw this.o8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m8_1 === 8) {
          throw e_0;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e_0;
        }
      }
     while (true);
  };
  function $callWithFrameNanosCOROUTINE$(_this__u8e3s4, onFrame, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.gam_1 = _this__u8e3s4;
    this.ham_1 = onFrame;
  }
  protoOf($callWithFrameNanosCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            if (this.gam_1.nag()) {
              this.l8_1 = 2;
              suspendResult = withInfiniteAnimationFrameNanos(this.ham_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = withFrameNanos(callWithFrameNanos$lambda(this.ham_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.iam_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 2:
            this.iam_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            return this.iam_1;
          case 4:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 4) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function get_SeekableTransitionStateTotalDurationChanged() {
    _init_properties_Transition_kt__s6zoln();
    return SeekableTransitionStateTotalDurationChanged;
  }
  var SeekableTransitionStateTotalDurationChanged;
  var androidx_compose_animation_core_TransitionState$stable;
  var androidx_compose_animation_core_MutableTransitionState$stable;
  var androidx_compose_animation_core_SeekableTransitionState_SeekingAnimationState$stable;
  var androidx_compose_animation_core_SeekableTransitionState$stable;
  var androidx_compose_animation_core_Transition$stable;
  function _set_targetValue__aqsk0r_0($this, _set____db54di) {
    var tmp0 = $this.lam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function _get_targetValue__jjlmb5($this) {
    var tmp0 = $this.lam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox());
    return tmp0.r1();
  }
  function _set_animationSpec__7qdru($this, _set____db54di) {
    var tmp0 = $this.nam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animationSpec', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function _set_animation__pan2kh($this, _set____db54di) {
    var tmp0 = $this.oam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animation_$ref_if7o0z());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function updateAnimation($this, initialValue, isInterrupted) {
    initialValue = initialValue === VOID ? $this.r1() : initialValue;
    isInterrupted = isInterrupted === VOID ? false : isInterrupted;
    var tmp0_safe_receiver = $this.qam_1;
    if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qae(), _get_targetValue__jjlmb5($this))) {
      _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$($this.yam_1, $this.jam_1, initialValue, initialValue, newInstance($this.vam_1)));
      $this.tam_1 = true;
      $this.ban($this.aan().rag());
      return Unit_instance;
    }
    var tmp;
    if (isInterrupted && !$this.xam_1) {
      var tmp_0;
      var tmp_1 = $this.can();
      if (tmp_1 instanceof SpringSpec) {
        tmp_0 = $this.can();
      } else {
        tmp_0 = $this.yam_1;
      }
      tmp = tmp_0;
    } else {
      tmp = $this.can();
    }
    var specWithoutDelay = tmp;
    var tmp_2;
    if (compare($this.zam_1.qan(), new Long(0, 0)) <= 0) {
      tmp_2 = specWithoutDelay;
    } else {
      tmp_2 = delayed(specWithoutDelay, $this.zam_1.qan());
    }
    var spec = tmp_2;
    _set_animation__pan2kh($this, TargetBasedAnimation_init_$Create$(spec, $this.jam_1, initialValue, _get_targetValue__jjlmb5($this), $this.vam_1));
    $this.ban($this.aan().rag());
    $this.tam_1 = false;
    onChildAnimationUpdated($this.zam_1);
  }
  function Transition$TransitionAnimationState$_get_targetValue_$ref_k2d87h() {
    return constructCallableReference(function (p0) {
      return _get_targetValue__jjlmb5(p0);
    }, 1, 0, 110);
  }
  function Transition$TransitionAnimationState$_set_targetValue_$ref_9yn0ox() {
    return constructCallableReference(function (p0, p1) {
      _set_targetValue__aqsk0r_0(p0, p1);
      return Unit_instance;
    }, 2, 0, 111);
  }
  function Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem() {
    return constructCallableReference(function (p0) {
      return p0.can();
    }, 1, 0, 112);
  }
  function Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6() {
    return constructCallableReference(function (p0, p1) {
      _set_animationSpec__7qdru(p0, p1);
      return Unit_instance;
    }, 2, 0, 113);
  }
  function Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb() {
    return constructCallableReference(function (p0) {
      return p0.aan();
    }, 1, 0, 114);
  }
  function Transition$TransitionAnimationState$_set_animation_$ref_if7o0z() {
    return constructCallableReference(function (p0, p1) {
      _set_animation__pan2kh(p0, p1);
      return Unit_instance;
    }, 2, 0, 115);
  }
  function Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx() {
    return constructCallableReference(function (p0) {
      return p0.ran();
    }, 1, 0, 116);
  }
  function Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j() {
    return constructCallableReference(function (p0, p1) {
      p0.san(p1);
      return Unit_instance;
    }, 2, 0, 117);
  }
  function Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp() {
    return constructCallableReference(function (p0) {
      return p0.tan();
    }, 1, 0, 118);
  }
  function Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3() {
    return constructCallableReference(function (p0, p1) {
      p0.uan(p1);
      return Unit_instance;
    }, 2, 0, 119);
  }
  function Transition$TransitionAnimationState$_get_value_$ref_sfag84() {
    return constructCallableReference(function (p0) {
      return p0.r1();
    }, 1, 0, 120);
  }
  function Transition$TransitionAnimationState$_set_value_$ref_daz5cg() {
    return constructCallableReference(function (p0, p1) {
      p0.eae(p1);
      return Unit_instance;
    }, 2, 0, 121);
  }
  function Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m() {
    return constructCallableReference(function (p0) {
      return p0.van();
    }, 1, 0, 122);
  }
  function Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q() {
    return constructCallableReference(function (p0, p1) {
      p0.ban(p1);
      return Unit_instance;
    }, 2, 0, 123);
  }
  function DeferredAnimationData($outer, animation, transitionSpec, targetValueByState) {
    this.zan_1 = $outer;
    this.wan_1 = animation;
    this.xan_1 = transitionSpec;
    this.yan_1 = targetValueByState;
  }
  protoOf(DeferredAnimationData).aao = function (segment) {
    var targetValue = this.yan_1(segment.b6f());
    if (this.zan_1.hao_1.iao()) {
      var initialValue = this.yan_1(segment.cao());
      this.wan_1.dao(initialValue, targetValue, this.xan_1(segment));
    } else {
      this.wan_1.bao(targetValue, this.xan_1(segment));
    }
  };
  protoOf(DeferredAnimationData).r1 = function () {
    this.aao(this.zan_1.hao_1.jao());
    return this.wan_1.r1();
  };
  function Transition$DeferredAnimation$_get_data_$ref_yf6va6() {
    return constructCallableReference(function (p0) {
      return p0.kao();
    }, 1, 0, 124);
  }
  function Transition$DeferredAnimation$_set_data_$ref_nt0v86() {
    return constructCallableReference(function (p0, p1) {
      p0.lao(p1);
      return Unit_instance;
    }, 2, 0, 125);
  }
  function Transition$animateTo$lambda$slambda$lambda(this$0, $durationScale) {
    return function (it) {
      var tmp;
      if (!this$0.iao()) {
        // Inline function 'kotlin.Long.div' call
        var tmp$ret$0 = divide(it, fromInt(1));
        this$0.mao(tmp$ret$0, $durationScale);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Transition_init_$Init$(initialState, label, $this) {
    Transition.call($this, new MutableTransitionState(initialState), null, label);
    return $this;
  }
  function Transition_init_$Create$(initialState, label) {
    return Transition_init_$Init$(initialState, label, objectCreate(protoOf(Transition)));
  }
  function _set_segment__77iylu($this, _set____db54di) {
    var tmp0 = $this.han_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_segment_$ref_hll1ky();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('segment', 1, tmp, tmp_0, Transition$_set_segment_$ref_n54u2a());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function _set__playTimeNanos__8elh7c($this, _set____db54di) {
    var tmp0 = $this.ian_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get__playTimeNanos_$ref_dkmemi();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('_playTimeNanos', 1, tmp, tmp_0, Transition$_set__playTimeNanos_$ref_nimc8a());
    tmp0.s32(_set____db54di);
    return Unit_instance;
  }
  function _get__playTimeNanos__xxox8s($this) {
    var tmp0 = $this.ian_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get__playTimeNanos_$ref_dkmemi();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('_playTimeNanos', 1, tmp, tmp_0, Transition$_set__playTimeNanos_$ref_nimc8a());
    return tmp0.t32();
  }
  function _set_updateChildrenNeeded__eksjzu($this, _set____db54di) {
    var tmp0 = $this.kan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_updateChildrenNeeded_$ref_m1jdik();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('updateChildrenNeeded', 1, tmp, tmp_0, Transition$_set_updateChildrenNeeded_$ref_hj65vc());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function _get_updateChildrenNeeded__mpvzi($this) {
    var tmp0 = $this.kan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_updateChildrenNeeded_$ref_m1jdik();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('updateChildrenNeeded', 1, tmp, tmp_0, Transition$_set_updateChildrenNeeded_$ref_hj65vc());
    return tmp0.r1();
  }
  function calculateTotalDurationNanos($this) {
    var maxDurationNanos = new Long(0, 0);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = $this.lan_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        var tmp0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b = item.van();
        maxDurationNanos = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = $this.man_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        var tmp0_0 = maxDurationNanos;
        // Inline function 'kotlin.math.max' call
        var b_0 = calculateTotalDurationNanos(item_0);
        maxDurationNanos = compare(tmp0_0, b_0) >= 0 ? tmp0_0 : b_0;
      }
       while (inductionVariable_0 <= last_0);
    return maxDurationNanos;
  }
  function onChildAnimationUpdated($this) {
    _set_updateChildrenNeeded__eksjzu($this, true);
    if ($this.iao()) {
      var maxDurationNanos = new Long(0, 0);
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $this.lan_1;
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          var tmp0 = maxDurationNanos;
          // Inline function 'kotlin.math.max' call
          var b = item.van();
          maxDurationNanos = compare(tmp0, b) >= 0 ? tmp0 : b;
          item.nao($this.oan_1);
        }
         while (inductionVariable <= last);
      _set_updateChildrenNeeded__eksjzu($this, false);
    }
  }
  function TransitionAnimationState($outer, initialValue, initialVelocityVector, typeConverter, label) {
    this.zam_1 = $outer;
    this.jam_1 = typeConverter;
    this.kam_1 = label;
    this.lam_1 = mutableStateOf(initialValue);
    this.mam_1 = spring();
    this.nam_1 = mutableStateOf(this.mam_1);
    this.oam_1 = mutableStateOf(TargetBasedAnimation_init_$Create$(this.can(), this.jam_1, initialValue, _get_targetValue__jjlmb5(this), initialVelocityVector));
    this.pam_1 = null;
    this.qam_1 = null;
    this.ram_1 = mutableStateOf(true);
    this.sam_1 = mutableFloatStateOf(-1.0);
    this.tam_1 = false;
    this.uam_1 = mutableStateOf(initialValue);
    this.vam_1 = initialVelocityVector;
    this.wam_1 = mutableLongStateOf(this.aan().rag());
    this.xam_1 = false;
    var tmp0_safe_receiver = get_VisibilityThresholdMap().u1(this.jam_1);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var vector = this.jam_1.jae()(initialValue);
      var inductionVariable = 0;
      var last = vector.kae();
      if (inductionVariable < last)
        do {
          var id = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          vector.mae(id, tmp0_safe_receiver);
        }
         while (inductionVariable < last);
      tmp = this.jam_1.nae()(vector);
    }
    var visibilityThreshold = tmp;
    this.yam_1 = spring(VOID, VOID, visibilityThreshold);
  }
  protoOf(TransitionAnimationState).can = function () {
    var tmp0 = this.nam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animationSpec_$ref_yvkiem();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animationSpec', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animationSpec_$ref_efqna6());
    return tmp0.r1();
  };
  protoOf(TransitionAnimationState).aan = function () {
    var tmp0 = this.oam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_animation_$ref_xmz6jb();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('animation', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_animation_$ref_if7o0z());
    return tmp0.r1();
  };
  protoOf(TransitionAnimationState).san = function (_set____db54di) {
    var tmp0 = this.ram_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isFinished', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).ran = function () {
    var tmp0 = this.ram_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_isFinished_$ref_fvu6sx();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isFinished', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_isFinished_$ref_9n998j());
    return tmp0.r1();
  };
  protoOf(TransitionAnimationState).uan = function (_set____db54di) {
    var tmp0 = this.sam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('resetSnapValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3());
    tmp0.t30(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).tan = function () {
    var tmp0 = this.sam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_resetSnapValue_$ref_1qtvjp();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('resetSnapValue', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_resetSnapValue_$ref_zcevb3());
    return tmp0.u30();
  };
  protoOf(TransitionAnimationState).eae = function (_set____db54di) {
    var tmp0 = this.uam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_value_$ref_sfag84();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_value_$ref_daz5cg());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).r1 = function () {
    var tmp0 = this.uam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_value_$ref_sfag84();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_value_$ref_daz5cg());
    return tmp0.r1();
  };
  protoOf(TransitionAnimationState).ban = function (_set____db54di) {
    var tmp0 = this.wam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('durationNanos', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q());
    tmp0.s32(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionAnimationState).van = function () {
    var tmp0 = this.wam_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$TransitionAnimationState$_get_durationNanos_$ref_gmcx6m();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('durationNanos', 1, tmp, tmp_0, Transition$TransitionAnimationState$_set_durationNanos_$ref_53fz3q());
    return tmp0.t32();
  };
  protoOf(TransitionAnimationState).oao = function (playTimeNanos, scaleToEnd) {
    var playTime = scaleToEnd ? this.aan().rag() : playTimeNanos;
    this.eae(this.aan().oag(playTime));
    this.vam_1 = this.aan().tag(playTime);
    if (this.aan().qag(playTime)) {
      this.san(true);
    }
  };
  protoOf(TransitionAnimationState).nao = function (playTimeNanos) {
    if (!(this.tan() === -1.0)) {
      return Unit_instance;
    }
    this.xam_1 = true;
    if (equals(this.aan().qae(), this.aan().mag())) {
      this.eae(this.aan().qae());
    } else {
      this.eae(this.aan().oag(playTimeNanos));
      this.vam_1 = this.aan().tag(playTimeNanos);
    }
  };
  protoOf(TransitionAnimationState).pao = function () {
    this.uan(-2.0);
  };
  protoOf(TransitionAnimationState).qao = function () {
    this.qam_1 = null;
    this.pam_1 = null;
    this.tam_1 = false;
  };
  protoOf(TransitionAnimationState).toString = function () {
    return 'current value: ' + toString_0(this.r1()) + ', target: ' + toString_0(_get_targetValue__jjlmb5(this)) + ', spec: ' + toString(this.can());
  };
  protoOf(TransitionAnimationState).bao = function (targetValue, animationSpec) {
    var tmp;
    if (this.tam_1) {
      var tmp0_safe_receiver = this.qam_1;
      tmp = equals(targetValue, tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qae());
    } else {
      tmp = false;
    }
    if (tmp) {
      return Unit_instance;
    }
    if (equals(_get_targetValue__jjlmb5(this), targetValue) && this.tan() === -1.0) {
      return Unit_instance;
    }
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    var initialValue = this.tan() === -3.0 ? targetValue : this.r1();
    updateAnimation(this, initialValue, !this.ran());
    this.san(this.tan() === -3.0);
    if (this.tan() >= 0.0) {
      var duration = this.aan().rag();
      var tmp_0 = this.aan();
      // Inline function 'kotlin.Long.times' call
      var other = this.tan();
      var tmp$ret$0 = toNumber(duration) * other;
      this.eae(tmp_0.oag(numberToLong(tmp$ret$0)));
    } else if (this.tan() === -3.0) {
      this.eae(targetValue);
    }
    this.tam_1 = false;
    this.uan(-1.0);
  };
  protoOf(TransitionAnimationState).dao = function (initialValue, targetValue, animationSpec) {
    _set_targetValue__aqsk0r_0(this, targetValue);
    _set_animationSpec__7qdru(this, animationSpec);
    if (equals(this.aan().mag(), initialValue) && equals(this.aan().qae(), targetValue)) {
      return Unit_instance;
    }
    updateAnimation(this, initialValue);
  };
  function SegmentImpl(initialState, targetState) {
    this.rao_1 = initialState;
    this.sao_1 = targetState;
  }
  protoOf(SegmentImpl).cao = function () {
    return this.rao_1;
  };
  protoOf(SegmentImpl).b6f = function () {
    return this.sao_1;
  };
  protoOf(SegmentImpl).equals = function (other) {
    var tmp;
    var tmp_0;
    if (!(other == null) ? isInterface(other, Segment) : false) {
      tmp_0 = equals(this.rao_1, other.cao());
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(this.sao_1, other.b6f());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(SegmentImpl).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.rao_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(tmp$ret$0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.sao_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    return tmp + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
  };
  function Segment() {
  }
  function DeferredAnimation($outer, typeConverter, label) {
    this.hao_1 = $outer;
    this.eao_1 = typeConverter;
    this.fao_1 = label;
    this.gao_1 = mutableStateOf(null);
  }
  protoOf(DeferredAnimation).lao = function (_set____db54di) {
    var tmp0 = this.gao_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$DeferredAnimation$_get_data_$ref_yf6va6();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('data', 1, tmp, tmp_0, Transition$DeferredAnimation$_set_data_$ref_nt0v86());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(DeferredAnimation).kao = function () {
    var tmp0 = this.gao_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$DeferredAnimation$_get_data_$ref_yf6va6();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('data', 1, tmp, tmp_0, Transition$DeferredAnimation$_set_data_$ref_nt0v86());
    return tmp0.r1();
  };
  protoOf(DeferredAnimation).uao = function (transitionSpec, targetValueByState) {
    var tmp0_elvis_lhs = this.kao();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new DeferredAnimationData(this, new TransitionAnimationState(this.hao_1, targetValueByState(this.hao_1.i6f()), createZeroVectorFrom(this.eao_1, targetValueByState(this.hao_1.i6f())), this.eao_1, this.fao_1), transitionSpec, targetValueByState);
      this.lao(this_0);
      this.hao_1.vao(this_0.wan_1);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var animData = tmp;
    // Inline function 'kotlin.apply' call
    animData.yan_1 = targetValueByState;
    animData.xan_1 = transitionSpec;
    animData.aao(this.hao_1.jao());
    return animData;
  };
  protoOf(DeferredAnimation).wao = function () {
    var tmp0_safe_receiver = this.kao();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.apply' call
      tmp0_safe_receiver.wan_1.dao(tmp0_safe_receiver.yan_1(this.hao_1.jao().cao()), tmp0_safe_receiver.yan_1(this.hao_1.jao().b6f()), tmp0_safe_receiver.xan_1(this.hao_1.jao()));
    }
  };
  function Transition$_get_targetState_$ref_4jc5u9() {
    return constructCallableReference(function (p0) {
      return p0.b6f();
    }, 1, 0, 126);
  }
  function Transition$_set_targetState_$ref_5ke1ob() {
    return constructCallableReference(function (p0, p1) {
      p0.xao(p1);
      return Unit_instance;
    }, 2, 0, 127);
  }
  function Transition$_get_segment_$ref_hll1ky() {
    return constructCallableReference(function (p0) {
      return p0.jao();
    }, 1, 0, 128);
  }
  function Transition$_set_segment_$ref_n54u2a() {
    return constructCallableReference(function (p0, p1) {
      _set_segment__77iylu(p0, p1);
      return Unit_instance;
    }, 2, 0, 129);
  }
  function Transition$_get__playTimeNanos_$ref_dkmemi() {
    return constructCallableReference(function (p0) {
      return _get__playTimeNanos__xxox8s(p0);
    }, 1, 0, 130);
  }
  function Transition$_set__playTimeNanos_$ref_nimc8a() {
    return constructCallableReference(function (p0, p1) {
      _set__playTimeNanos__8elh7c(p0, p1);
      return Unit_instance;
    }, 2, 0, 131);
  }
  function Transition$_get_startTimeNanos_$ref_69ueft() {
    return constructCallableReference(function (p0) {
      return p0.yao();
    }, 1, 0, 132);
  }
  function Transition$_set_startTimeNanos_$ref_utecez() {
    return constructCallableReference(function (p0, p1) {
      p0.zao(p1);
      return Unit_instance;
    }, 2, 0, 133);
  }
  function Transition$_get_updateChildrenNeeded_$ref_m1jdik() {
    return constructCallableReference(function (p0) {
      return _get_updateChildrenNeeded__mpvzi(p0);
    }, 1, 0, 134);
  }
  function Transition$_set_updateChildrenNeeded_$ref_hj65vc() {
    return constructCallableReference(function (p0, p1) {
      _set_updateChildrenNeeded__eksjzu(p0, p1);
      return Unit_instance;
    }, 2, 0, 135);
  }
  function Transition$_get_isSeeking_$ref_mx3xt() {
    return constructCallableReference(function (p0) {
      return p0.iao();
    }, 1, 0, 136);
  }
  function Transition$_set_isSeeking_$ref_fuomg5() {
    return constructCallableReference(function (p0, p1) {
      p0.aap(p1);
      return Unit_instance;
    }, 2, 0, 137);
  }
  function Transition$totalDurationNanos$delegate$lambda(this$0) {
    return function () {
      return calculateTotalDurationNanos(this$0);
    };
  }
  function Transition$_get_totalDurationNanos_$ref_owbzlq() {
    return constructCallableReference(function (p0) {
      return p0.bap();
    }, 1, 0, 138);
  }
  function animateTo$lambda($runFrameLoop$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('runFrameLoop', KProperty0, false);
    return $runFrameLoop$delegate.r1();
  }
  function Transition$animateTo$lambda(this$0) {
    return function () {
      return !equals(this$0.b6f(), this$0.i6f()) || this$0.pae() || _get_updateChildrenNeeded__mpvzi(this$0);
    };
  }
  function Transition$animateTo$lambda_0() {
    return EmptyCoroutineContext_getInstance();
  }
  function Transition$animateTo$lambda$slambda(this$0, resultContinuation) {
    this.kap_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Transition$animateTo$lambda$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(Transition$animateTo$lambda$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Transition$animateTo$lambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            this.map_1 = get_durationScale(this.lap_1.iu());
            this.l8_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.lap_1)) {
              this.l8_1 = 3;
              continue $sm;
            }

            this.l8_1 = 2;
            suspendResult = withFrameNanos(Transition$animateTo$lambda$slambda$lambda(this.kap_1, this.map_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l8_1 = 1;
            continue $sm;
          case 3:
            return Unit_instance;
          case 4:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 4) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Transition$animateTo$lambda$slambda).q1k = function ($this$launch, completion) {
    var i = new Transition$animateTo$lambda$slambda(this.kap_1, completion);
    i.lap_1 = $this$launch;
    return i;
  };
  function Transition$animateTo$lambda$slambda_0(this$0, resultContinuation) {
    var i = new Transition$animateTo$lambda$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function Transition$animateTo$$inlined$cache$1$2() {
  }
  protoOf(Transition$animateTo$$inlined$cache$1$2).jy = function () {
  };
  function Transition$animateTo$lambda_1($coroutineScope, this$0) {
    return function ($this$DisposableEffect) {
      var tmp = CoroutineStart_UNDISPATCHED_getInstance();
      launch($coroutineScope, VOID, tmp, Transition$animateTo$lambda$slambda_0(this$0, null));
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new Transition$animateTo$$inlined$cache$1$2();
    };
  }
  function Transition$animateTo$lambda_2($tmp0_rcvr, $targetState, $$changed) {
    return function ($composer, $force) {
      $tmp0_rcvr.nap($targetState, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function Transition(transitionState, parentTransition, label) {
    label = label === VOID ? null : label;
    this.dan_1 = transitionState;
    this.ean_1 = parentTransition;
    this.fan_1 = label;
    this.gan_1 = mutableStateOf(this.i6f());
    this.han_1 = mutableStateOf(new SegmentImpl(this.i6f(), this.i6f()));
    this.ian_1 = mutableLongStateOf(new Long(0, 0));
    this.jan_1 = mutableLongStateOf(new Long(0, -2147483648));
    this.kan_1 = mutableStateOf(false);
    this.lan_1 = mutableStateListOf();
    this.man_1 = mutableStateListOf();
    this.nan_1 = mutableStateOf(false);
    this.oan_1 = new Long(0, 0);
    var tmp = this;
    tmp.pan_1 = derivedStateOf(Transition$totalDurationNanos$delegate$lambda(this));
    this.dan_1.pap(this);
  }
  protoOf(Transition).i6f = function () {
    return this.dan_1.i6f();
  };
  protoOf(Transition).xao = function (_set____db54di) {
    var tmp0 = this.gan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_targetState_$ref_4jc5u9();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, Transition$_set_targetState_$ref_5ke1ob());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).b6f = function () {
    var tmp0 = this.gan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_targetState_$ref_4jc5u9();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('targetState', 1, tmp, tmp_0, Transition$_set_targetState_$ref_5ke1ob());
    return tmp0.r1();
  };
  protoOf(Transition).jao = function () {
    var tmp0 = this.han_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_segment_$ref_hll1ky();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('segment', 1, tmp, tmp_0, Transition$_set_segment_$ref_n54u2a());
    return tmp0.r1();
  };
  protoOf(Transition).pae = function () {
    return !equalsLong(this.yao(), new Long(0, -2147483648));
  };
  protoOf(Transition).qap = function (value) {
    if (this.ean_1 == null) {
      _set__playTimeNanos__8elh7c(this, value);
    }
  };
  protoOf(Transition).qan = function () {
    var tmp0_safe_receiver = this.ean_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qan();
    return tmp1_elvis_lhs == null ? _get__playTimeNanos__xxox8s(this) : tmp1_elvis_lhs;
  };
  protoOf(Transition).zao = function (_set____db54di) {
    var tmp0 = this.jan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_startTimeNanos_$ref_69ueft();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('startTimeNanos', 1, tmp, tmp_0, Transition$_set_startTimeNanos_$ref_utecez());
    tmp0.s32(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).yao = function () {
    var tmp0 = this.jan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_startTimeNanos_$ref_69ueft();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('startTimeNanos', 1, tmp, tmp_0, Transition$_set_startTimeNanos_$ref_utecez());
    return tmp0.t32();
  };
  protoOf(Transition).rap = function () {
    return this.lan_1;
  };
  protoOf(Transition).aap = function (_set____db54di) {
    var tmp0 = this.nan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_isSeeking_$ref_mx3xt();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isSeeking', 1, tmp, tmp_0, Transition$_set_isSeeking_$ref_fuomg5());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(Transition).iao = function () {
    var tmp0 = this.nan_1;
    var tmp = KMutableProperty1;
    var tmp_0 = Transition$_get_isSeeking_$ref_mx3xt();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isSeeking', 1, tmp, tmp_0, Transition$_set_isSeeking_$ref_fuomg5());
    return tmp0.r1();
  };
  protoOf(Transition).sap = function () {
    var tmp;
    var tmp0 = this.lan_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAny' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.m(index);
          if (!(item.pam_1 == null)) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      tmp = true;
    } else {
      var tmp0_0 = this.man_1;
      var tmp$ret$4;
      $l$block_0: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_0 = 0;
        var last_0 = tmp0_0.l() - 1 | 0;
        if (inductionVariable_0 <= last_0)
          do {
            var index_0 = inductionVariable_0;
            inductionVariable_0 = inductionVariable_0 + 1 | 0;
            var item_0 = tmp0_0.m(index_0);
            if (item_0.sap()) {
              tmp$ret$4 = true;
              break $l$block_0;
            }
          }
           while (inductionVariable_0 <= last_0);
        tmp$ret$4 = false;
      }
      tmp = tmp$ret$4;
    }
    return tmp;
  };
  protoOf(Transition).bap = function () {
    var tmp0 = this.pan_1;
    var tmp = KProperty1;
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('totalDurationNanos', 1, tmp, Transition$_get_totalDurationNanos_$ref_owbzlq(), null);
    return tmp0.r1();
  };
  protoOf(Transition).mao = function (frameTimeNanos, durationScale) {
    if (equalsLong(this.yao(), new Long(0, -2147483648))) {
      this.tap(frameTimeNanos);
    }
    var deltaT = subtract(frameTimeNanos, this.yao());
    var tmp;
    if (durationScale === 0.0) {
      tmp = deltaT;
    } else {
      // Inline function 'kotlin.Long.div' call
      var tmp$ret$0 = toNumber(deltaT) / durationScale;
      tmp = roundToLong(tmp$ret$0);
    }
    var scaledPlayTimeNanos = tmp;
    this.qap(scaledPlayTimeNanos);
    this.uap(scaledPlayTimeNanos, durationScale === 0.0);
  };
  protoOf(Transition).uap = function (scaledPlayTimeNanos, scaleToEnd) {
    if (equalsLong(this.yao(), new Long(0, -2147483648))) {
      this.tap(scaledPlayTimeNanos);
    } else if (!this.dan_1.vap()) {
      this.dan_1.fah(true);
    }
    _set_updateChildrenNeeded__eksjzu(this, false);
    var allFinished = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.lan_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        if (!item.ran()) {
          item.oao(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!item.ran()) {
          allFinished = false;
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.man_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        if (!equals(item_0.b6f(), item_0.i6f())) {
          item_0.uap(scaledPlayTimeNanos, scaleToEnd);
        }
        if (!equals(item_0.b6f(), item_0.i6f())) {
          allFinished = false;
        }
      }
       while (inductionVariable_0 <= last_0);
    if (allFinished) {
      this.wap();
    }
  };
  protoOf(Transition).tap = function (frameTimeNanos) {
    this.zao(frameTimeNanos);
    this.dan_1.fah(true);
  };
  protoOf(Transition).xap = function () {
    this.wap();
    this.dan_1.yap();
  };
  protoOf(Transition).wap = function () {
    this.zao(new Long(0, -2147483648));
    var tmp = this.dan_1;
    if (tmp instanceof MutableTransitionState) {
      this.dan_1.caq(this.b6f());
    }
    this.qap(new Long(0, 0));
    this.dan_1.fah(false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.man_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.wap();
      }
       while (inductionVariable <= last);
  };
  protoOf(Transition).daq = function (initialState, targetState, playTimeNanos) {
    this.zao(new Long(0, -2147483648));
    this.dan_1.fah(false);
    if (!this.iao() || !equals(this.i6f(), initialState) || !equals(this.b6f(), targetState)) {
      var tmp;
      if (!equals(this.i6f(), initialState)) {
        var tmp_0 = this.dan_1;
        tmp = tmp_0 instanceof MutableTransitionState;
      } else {
        tmp = false;
      }
      if (tmp) {
        this.dan_1.caq(initialState);
      }
      this.xao(targetState);
      this.aap(true);
      _set_segment__77iylu(this, new SegmentImpl(initialState, targetState));
    }
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.man_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.let' call
        var it = item instanceof Transition ? item : THROW_CCE();
        if (it.iao()) {
          it.daq(it.i6f(), it.b6f(), playTimeNanos);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.lan_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        item_0.nao(playTimeNanos);
      }
       while (inductionVariable_0 <= last_0);
    this.oan_1 = playTimeNanos;
  };
  protoOf(Transition).eaq = function (transition) {
    return this.man_1.qm(transition);
  };
  protoOf(Transition).faq = function (transition) {
    return this.man_1.ym(transition);
  };
  protoOf(Transition).vao = function (animation) {
    return this.lan_1.qm(animation);
  };
  protoOf(Transition).gaq = function (animation) {
    this.lan_1.ym(animation);
  };
  protoOf(Transition).haq = function (targetState) {
    if (!equals(this.b6f(), targetState)) {
      _set_segment__77iylu(this, new SegmentImpl(this.b6f(), targetState));
      if (!equals(this.i6f(), this.b6f())) {
        this.dan_1.caq(this.b6f());
      }
      this.xao(targetState);
      if (!this.pae()) {
        _set_updateChildrenNeeded__eksjzu(this, true);
      }
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = this.lan_1;
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          item.pao();
        }
         while (inductionVariable <= last);
    }
  };
  protoOf(Transition).nap = function (targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(-1493585151);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.g1z(targetState) : $composer_0.l1z(targetState)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g1z(this) ? 32 : 16);
    if ($composer_0.n1z(!(($dirty & 19) === 18), $dirty & 1)) {
      if (!this.iao()) {
        $composer_0.m1y(466062241);
        this.haq(targetState);
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        var it = tmp0.e1z();
        var tmp;
        if (invalid || it === Companion_getInstance().f1y_1) {
          var value = derivedStateOf(Transition$animateTo$lambda(this));
          tmp0.f1z(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var runFrameLoop$delegate = tmp;
        if (animateTo$lambda(runFrameLoop$delegate)) {
          $composer_0.m1y(466470356);
          // Inline function 'androidx.compose.runtime.rememberCoroutineScope' call
          var getContext = null;
          var $composer_1 = $composer_0;
          if (!((1 & 1) === 0)) {
            getContext = Transition$animateTo$lambda_0;
          }
          var composer = $composer_1;
          // Inline function 'androidx.compose.runtime.cache' call
          // Inline function 'kotlin.let' call
          var it_0 = $composer_1.e1z();
          var tmp_0;
          if (false || it_0 === Companion_getInstance().f1y_1) {
            var value_0 = createCompositionCoroutineScope(getContext(), composer);
            $composer_1.f1z(value_0);
            tmp_0 = value_0;
          } else {
            tmp_0 = it_0;
          }
          var coroutineScope = tmp_0;
          var tmp0_0 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_0 = !!($composer_0.l1z(coroutineScope) | ($dirty & 112) === 32);
          // Inline function 'kotlin.let' call
          var it_1 = tmp0_0.e1z();
          var tmp_1;
          if (invalid_0 || it_1 === Companion_getInstance().f1y_1) {
            var value_1 = Transition$animateTo$lambda_1(coroutineScope, this);
            tmp0_0.f1z(value_1);
            tmp_1 = value_1;
          } else {
            tmp_1 = it_1;
          }
          var tmp$ret$9 = tmp_1;
          DisposableEffect(coroutineScope, this, tmp$ret$9, $composer_0, 112 & $dirty);
          $composer_0.n1y();
        } else {
          $composer_0.m1y(467712929);
          $composer_0.n1y();
        }
        $composer_0.n1y();
      } else {
        $composer_0.m1y(467722849);
        $composer_0.n1y();
      }
    } else {
      $composer_0.y1y();
    }
    var tmp1_safe_receiver = $composer_0.t1y();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d2a(Transition$animateTo$lambda_2(this, targetState, $changed));
    }
  };
  protoOf(Transition).iaq = function (playTimeNanos) {
    if (equalsLong(this.yao(), new Long(0, -2147483648))) {
      this.zao(playTimeNanos);
    }
    this.qap(playTimeNanos);
    _set_updateChildrenNeeded__eksjzu(this, false);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.lan_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.nao(playTimeNanos);
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.man_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        if (!equals(item_0.b6f(), item_0.i6f())) {
          item_0.iaq(playTimeNanos);
        }
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).jaq = function () {
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.lan_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.qao();
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_1 = this.man_1;
    var inductionVariable_0 = 0;
    var last_0 = this_1.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = this_1.m(index_0);
        item_0.jaq();
      }
       while (inductionVariable_0 <= last_0);
  };
  protoOf(Transition).toString = function () {
    var tmp0 = this.rap();
    // Inline function 'androidx.compose.ui.util.fastFold' call
    var accumulator = 'Transition animation values: ';
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = tmp0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = tmp0.m(index);
        accumulator = accumulator + item.toString() + ', ';
      }
       while (inductionVariable <= last);
    return accumulator;
  };
  protoOf(Transition).kaq = function (deferredAnimation) {
    var tmp0_safe_receiver = deferredAnimation.kao();
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wan_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.gaq(tmp1_safe_receiver);
    }
  };
  function updateTransition(targetState, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      label_0 = null;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp;
    if (false || it === Companion_getInstance().f1y_1) {
      var value = Transition_init_$Create$(targetState, label_0);
      $composer_0.f1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var transition = tmp;
    transition.nap(targetState, $composer_0, 48 | 8 & $changed | 14 & $changed);
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.e1z();
    var tmp_0;
    if (false || it_0 === Companion_getInstance().f1y_1) {
      var value_0 = updateTransition$lambda(transition);
      $composer_0.f1z(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$4 = tmp_0;
    DisposableEffect_0(transition, tmp$ret$4, $composer_0, 54);
    return transition;
  }
  function _set_fraction__t78qnf($this, _set____db54di) {
    var tmp0 = $this.taq_1;
    var tmp = KMutableProperty1;
    var tmp_0 = SeekableTransitionState$_get_fraction_$ref_yo18y6();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('fraction', 1, tmp, tmp_0, SeekableTransitionState$_set_fraction_$ref_ktc2gu());
    tmp0.t30(_set____db54di);
    return Unit_instance;
  }
  function endAllAnimations($this) {
    var tmp0_safe_receiver = $this.paq_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.jaq();
    }
    $this.yaq_1.b2();
    var current = $this.zaq_1;
    if (!(current == null)) {
      $this.zaq_1 = null;
      _set_fraction__t78qnf($this, 1.0);
      seekToFraction($this);
    }
  }
  function seekToFraction($this) {
    var tmp0_elvis_lhs = $this.paq_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var transition = tmp;
    var playTimeNanos = roundToLong($this.dar() * toNumber(transition.bap()));
    transition.iaq(playTimeNanos);
  }
  function SeekableTransitionState$_get_fraction_$ref_yo18y6() {
    return constructCallableReference(function (p0) {
      return p0.dar();
    }, 1, 0, 139);
  }
  function SeekableTransitionState$_set_fraction_$ref_ktc2gu() {
    return constructCallableReference(function (p0, p1) {
      _set_fraction__t78qnf(p0, p1);
      return Unit_instance;
    }, 2, 0, 140);
  }
  function TransitionState$_get_isRunning_$ref_gi5vj1() {
    return constructCallableReference(function (p0) {
      return p0.vap();
    }, 1, 0, 141);
  }
  function TransitionState$_set_isRunning_$ref_1aed0p() {
    return constructCallableReference(function (p0, p1) {
      p0.fah(p1);
      return Unit_instance;
    }, 2, 0, 142);
  }
  function TransitionState() {
    this.oap_1 = mutableStateOf(false);
  }
  protoOf(TransitionState).fah = function (_set____db54di) {
    var tmp0 = this.oap_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransitionState$_get_isRunning_$ref_gi5vj1();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, TransitionState$_set_isRunning_$ref_1aed0p());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(TransitionState).vap = function () {
    var tmp0 = this.oap_1;
    var tmp = KMutableProperty1;
    var tmp_0 = TransitionState$_get_isRunning_$ref_gi5vj1();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('isRunning', 1, tmp, tmp_0, TransitionState$_set_isRunning_$ref_1aed0p());
    return tmp0.r1();
  };
  function MutableTransitionState$_get_currentState_$ref_7vauvk() {
    return constructCallableReference(function (p0) {
      return p0.i6f();
    }, 1, 0, 143);
  }
  function MutableTransitionState$_set_currentState_$ref_y2oy0s() {
    return constructCallableReference(function (p0, p1) {
      p0.caq(p1);
      return Unit_instance;
    }, 2, 0, 144);
  }
  function MutableTransitionState(initialState) {
    TransitionState.call(this);
    this.aaq_1 = mutableStateOf(initialState);
    this.baq_1 = mutableStateOf(initialState);
  }
  protoOf(MutableTransitionState).caq = function (_set____db54di) {
    var tmp0 = this.aaq_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_currentState_$ref_7vauvk();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, MutableTransitionState$_set_currentState_$ref_y2oy0s());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  };
  protoOf(MutableTransitionState).i6f = function () {
    var tmp0 = this.aaq_1;
    var tmp = KMutableProperty1;
    var tmp_0 = MutableTransitionState$_get_currentState_$ref_7vauvk();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('currentState', 1, tmp, tmp_0, MutableTransitionState$_set_currentState_$ref_y2oy0s());
    return tmp0.r1();
  };
  protoOf(MutableTransitionState).pap = function (transition) {
  };
  protoOf(MutableTransitionState).yap = function () {
  };
  function createDeferredAnimation(_this__u8e3s4, typeConverter, label, $composer, $changed, $default) {
    _init_properties_Transition_kt__s6zoln();
    var label_0 = label;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0))
      label_0 = 'DeferredAnimation';
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.g1z(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp;
    if (invalid || it === Companion_getInstance().f1y_1) {
      var value = new DeferredAnimation(_this__u8e3s4, typeConverter, label_0);
      $composer_0.f1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var lazyAnim = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.g1z(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.l1z(lazyAnim));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.e1z();
    var tmp_0;
    if (invalid_0 || it_0 === Companion_getInstance().f1y_1) {
      var value_0 = createDeferredAnimation$lambda(_this__u8e3s4, lazyAnim);
      $composer_0.f1z(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$4 = tmp_0;
    DisposableEffect_0(lazyAnim, tmp$ret$4, $composer_0, 0);
    if (_this__u8e3s4.iao()) {
      lazyAnim.wao();
    }
    return lazyAnim;
  }
  function createChildTransitionInternal(_this__u8e3s4, initialState, targetState, childLabel, $composer, $changed) {
    _init_properties_Transition_kt__s6zoln();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.g1z(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp;
    if (invalid || it === Companion_getInstance().f1y_1) {
      var value = new Transition(new MutableTransitionState(initialState), _this__u8e3s4, '' + _this__u8e3s4.fan_1 + ' > ' + childLabel);
      $composer_0.f1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var transition = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!((($changed & 14 ^ 6) > 4 && $composer_0.g1z(_this__u8e3s4) || ($changed & 6) === 4) | $composer_0.g1z(transition));
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.e1z();
    var tmp_0;
    if (invalid_0 || it_0 === Companion_getInstance().f1y_1) {
      var value_0 = createChildTransitionInternal$lambda(_this__u8e3s4, transition);
      $composer_0.f1z(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$4 = tmp_0;
    DisposableEffect_0(transition, tmp$ret$4, $composer_0, 0);
    if (_this__u8e3s4.iao()) {
      transition.daq(initialState, targetState, _this__u8e3s4.oan_1);
    } else {
      transition.haq(targetState);
      transition.aap(false);
    }
    return transition;
  }
  function SeekableTransitionStateTotalDurationChanged$lambda(it) {
    _init_properties_Transition_kt__s6zoln();
    it.ear();
    return Unit_instance;
  }
  function updateTransition$$inlined$cache$1$1($transition) {
    this.far_1 = $transition;
  }
  protoOf(updateTransition$$inlined$cache$1$1).jy = function () {
    this.far_1.xap();
  };
  function updateTransition$lambda($transition) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new updateTransition$$inlined$cache$1$1($transition);
    };
  }
  function createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim) {
    this.gar_1 = $this_createDeferredAnimation;
    this.har_1 = $lazyAnim;
  }
  protoOf(createDeferredAnimation$$inlined$cache$1$1).jy = function () {
    this.gar_1.kaq(this.har_1);
  };
  function createDeferredAnimation$lambda($this_createDeferredAnimation, $lazyAnim) {
    return function ($this$DisposableEffect) {
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createDeferredAnimation$$inlined$cache$1$1($this_createDeferredAnimation, $lazyAnim);
    };
  }
  function createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition) {
    this.iar_1 = $this_createChildTransitionInternal;
    this.jar_1 = $transition;
  }
  protoOf(createChildTransitionInternal$$inlined$cache$1$1).jy = function () {
    this.iar_1.faq(this.jar_1);
  };
  function createChildTransitionInternal$lambda($this_createChildTransitionInternal, $transition) {
    return function ($this$DisposableEffect) {
      $this_createChildTransitionInternal.eaq($transition);
      // Inline function 'androidx.compose.runtime.DisposableEffectScope.onDispose' call
      return new createChildTransitionInternal$$inlined$cache$1$1($this_createChildTransitionInternal, $transition);
    };
  }
  var properties_initialized_Transition_kt_wb2qvd;
  function _init_properties_Transition_kt__s6zoln() {
    if (!properties_initialized_Transition_kt_wb2qvd) {
      properties_initialized_Transition_kt_wb2qvd = true;
      SeekableTransitionStateTotalDurationChanged = SeekableTransitionStateTotalDurationChanged$lambda;
      androidx_compose_animation_core_TransitionState$stable = 0;
      androidx_compose_animation_core_MutableTransitionState$stable = 0;
      androidx_compose_animation_core_SeekableTransitionState_SeekingAnimationState$stable = 8;
      androidx_compose_animation_core_SeekableTransitionState$stable = 8;
      androidx_compose_animation_core_Transition$stable = 0;
    }
  }
  function get_FloatToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return FloatToVector;
  }
  var FloatToVector;
  function get_IntToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntToVector;
  }
  var IntToVector;
  function get_DpToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpToVector;
  }
  var DpToVector;
  function get_DpOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return DpOffsetToVector;
  }
  var DpOffsetToVector;
  function get_SizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return SizeToVector;
  }
  var SizeToVector;
  function get_OffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return OffsetToVector;
  }
  var OffsetToVector;
  function get_IntOffsetToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntOffsetToVector;
  }
  var IntOffsetToVector;
  function get_IntSizeToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return IntSizeToVector;
  }
  var IntSizeToVector;
  function get_RectToVector() {
    _init_properties_VectorConverters_kt__g28mmu();
    return RectToVector;
  }
  var RectToVector;
  function get_VectorConverter(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpToVector();
  }
  function get_VectorConverter_0(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_FloatToVector();
  }
  function TwoWayConverter(convertToVector, convertFromVector) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new TwoWayConverterImpl(convertToVector, convertFromVector);
  }
  function TwoWayConverterImpl(convertToVector, convertFromVector) {
    this.kar_1 = convertToVector;
    this.lar_1 = convertFromVector;
  }
  protoOf(TwoWayConverterImpl).jae = function () {
    return this.kar_1;
  };
  protoOf(TwoWayConverterImpl).nae = function () {
    return this.lar_1;
  };
  function get_VectorConverter_1(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntToVector();
  }
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntSizeToVector();
  }
  function get_VectorConverter_3(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_IntOffsetToVector();
  }
  function get_VectorConverter_4(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_RectToVector();
  }
  function get_VectorConverter_5(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_SizeToVector();
  }
  function get_VectorConverter_6(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_OffsetToVector();
  }
  function get_VectorConverter_7(_this__u8e3s4) {
    _init_properties_VectorConverters_kt__g28mmu();
    return get_DpOffsetToVector();
  }
  function FloatToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function FloatToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return it.gah_1;
  }
  function IntToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(it);
  }
  function IntToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return numberToInt(it.gah_1);
  }
  function DpToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector1D(_Dp___get_value__impl__geb1vb(it.z47_1));
  }
  function DpToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Dp(_Dp___init__impl__ms3zkb(it.gah_1));
  }
  function DpOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_Dp___get_value__impl__geb1vb(_DpOffset___get_x__impl__uauqb5(it.j48_1)), _Dp___get_value__impl__geb1vb(_DpOffset___get_y__impl__1h898y(it.j48_1)));
  }
  function DpOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_0 = it.oah_1;
    var tmp0 = _Dp___init__impl__ms3zkb(this_0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var this_1 = it.pah_1;
    // Inline function 'androidx.compose.ui.unit.DpOffset' call
    var y = _Dp___init__impl__ms3zkb(this_1);
    var tmp0_0 = _Dp___get_value__impl__geb1vb(tmp0);
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _Dp___get_value__impl__geb1vb(y);
    var v1 = fromInt(toRawBits_0(tmp0_0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$2 = _DpOffset___init__impl__yq36wy(tmp$ret$3);
    return new DpOffset(tmp$ret$2);
  }
  function SizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    var this_0 = it.f47_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    var this_1 = it.f47_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$4);
  }
  function SizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.oah_1;
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.pah_1;
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Size___init__impl__aywn0g(tmp$ret$1);
    return new Size(tmp$ret$0);
  }
  function OffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = it.h46_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = it.h46_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return new AnimationVector2D(tmp, tmp$ret$4);
  }
  function OffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    var tmp0 = it.oah_1;
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = it.pah_1;
    var v1 = fromInt(toRawBits_0(tmp0));
    var v2 = fromInt(toRawBits_0(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
    return new Offset(tmp$ret$0);
  }
  function IntOffsetToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector2D(_IntOffset___get_x__impl__qiqr5o(it.m48_1), _IntOffset___get_y__impl__2avpwj(it.m48_1));
  }
  function IntOffsetToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = it.oah_1;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    var tmp0 = tmp;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = it.pah_1;
    var tmp_0;
    if (isNaN_0(this_1)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_1);
    }
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = tmp_0;
    var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$4 = _IntOffset___init__impl__rq8h7b(tmp$ret$5);
    return new IntOffset(tmp$ret$4);
  }
  function IntSizeToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = it.o48_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    var tmp = convertToInt(shiftRight(value, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_1 = it.o48_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
    var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    return new AnimationVector2D(tmp, tmp$ret$2);
  }
  function IntSizeToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = it.oah_1;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_1 = tmp;
    var tmp0 = this_1 < 0 ? 0 : this_1;
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_2 = it.pah_1;
    var tmp_0;
    if (isNaN_0(this_2)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_2);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_3 = tmp_0;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = this_3 < 0 ? 0 : this_3;
    var tmp$ret$7 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$6 = _IntSize___init__impl__emcjft(tmp$ret$7);
    return new IntSize(tmp$ret$6);
  }
  function RectToVector$lambda(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new AnimationVector4D(it.j46_1, it.k46_1, it.l46_1, it.m46_1);
  }
  function RectToVector$lambda_0(it) {
    _init_properties_VectorConverters_kt__g28mmu();
    return new Rect(it.jah_1, it.kah_1, it.lah_1, it.mah_1);
  }
  var properties_initialized_VectorConverters_kt_cg0a6g;
  function _init_properties_VectorConverters_kt__g28mmu() {
    if (!properties_initialized_VectorConverters_kt_cg0a6g) {
      properties_initialized_VectorConverters_kt_cg0a6g = true;
      var tmp = FloatToVector$lambda;
      FloatToVector = TwoWayConverter(tmp, FloatToVector$lambda_0);
      var tmp_0 = IntToVector$lambda;
      IntToVector = TwoWayConverter(tmp_0, IntToVector$lambda_0);
      var tmp_1 = DpToVector$lambda;
      DpToVector = TwoWayConverter(tmp_1, DpToVector$lambda_0);
      var tmp_2 = DpOffsetToVector$lambda;
      DpOffsetToVector = TwoWayConverter(tmp_2, DpOffsetToVector$lambda_0);
      var tmp_3 = SizeToVector$lambda;
      SizeToVector = TwoWayConverter(tmp_3, SizeToVector$lambda_0);
      var tmp_4 = OffsetToVector$lambda;
      OffsetToVector = TwoWayConverter(tmp_4, OffsetToVector$lambda_0);
      var tmp_5 = IntOffsetToVector$lambda;
      IntOffsetToVector = TwoWayConverter(tmp_5, IntOffsetToVector$lambda_0);
      var tmp_6 = IntSizeToVector$lambda;
      IntSizeToVector = TwoWayConverter(tmp_6, IntSizeToVector$lambda_0);
      var tmp_7 = RectToVector$lambda;
      RectToVector = TwoWayConverter(tmp_7, RectToVector$lambda_0);
    }
  }
  var EmptyIntArray;
  var EmptyFloatArray;
  var EmptyArcSpline;
  var androidx_compose_animation_core_VectorizedKeyframesSpec$stable;
  var androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable;
  var androidx_compose_animation_core_VectorizedSnapSpec$stable;
  var androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable;
  var androidx_compose_animation_core_VectorizedRepeatableSpec$stable;
  var androidx_compose_animation_core_Spring$stable;
  var androidx_compose_animation_core_VectorizedSpringSpec$stable;
  var androidx_compose_animation_core_VectorizedTweenSpec$stable;
  var androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable;
  function VectorizedAnimationSpec() {
  }
  function VectorizedFiniteAnimationSpec() {
  }
  function VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, $this) {
    dampingRatio = dampingRatio === VOID ? 1.0 : dampingRatio;
    stiffness = stiffness === VOID ? 1500.0 : stiffness;
    visibilityThreshold = visibilityThreshold === VOID ? null : visibilityThreshold;
    VectorizedSpringSpec.call($this, dampingRatio, stiffness, createSpringAnimations(visibilityThreshold, dampingRatio, stiffness));
    return $this;
  }
  function VectorizedSpringSpec_init_$Create$(dampingRatio, stiffness, visibilityThreshold) {
    return VectorizedSpringSpec_init_$Init$(dampingRatio, stiffness, visibilityThreshold, objectCreate(protoOf(VectorizedSpringSpec)));
  }
  function VectorizedSpringSpec(dampingRatio, stiffness, anims) {
    this.mar_1 = new VectorizedFloatAnimationSpec(anims);
    this.nar_1 = dampingRatio;
    this.oar_1 = stiffness;
  }
  protoOf(VectorizedSpringSpec).nag = function () {
    return this.mar_1.nag();
  };
  protoOf(VectorizedSpringSpec).pag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.mar_1.pag(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).uag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.mar_1.uag(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).sag = function (initialValue, targetValue, initialVelocity) {
    return this.mar_1.sag(initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedSpringSpec).kag = function (initialValue, targetValue, initialVelocity) {
    return this.mar_1.kag(initialValue, targetValue, initialVelocity);
  };
  function VectorizedTweenSpec(durationMillis, delayMillis, easing) {
    durationMillis = durationMillis === VOID ? 300 : durationMillis;
    delayMillis = delayMillis === VOID ? 0 : delayMillis;
    easing = easing === VOID ? get_FastOutSlowInEasing() : easing;
    this.tar_1 = durationMillis;
    this.uar_1 = delayMillis;
    this.var_1 = easing;
    this.war_1 = VectorizedFloatAnimationSpec_init_$Create$(new FloatTweenSpec(this.tar_1, this.uar_1, this.var_1));
  }
  protoOf(VectorizedTweenSpec).xar = function () {
    return this.tar_1;
  };
  protoOf(VectorizedTweenSpec).yar = function () {
    return this.uar_1;
  };
  protoOf(VectorizedTweenSpec).pag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.war_1.pag(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  protoOf(VectorizedTweenSpec).uag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    return this.war_1.uag(playTimeNanos, initialValue, targetValue, initialVelocity);
  };
  function VectorizedDurationBasedAnimationSpec() {
  }
  function _get_valueVector__r10idf($this) {
    var tmp = $this.qar_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('valueVector');
    }
  }
  function _get_velocityVector__dvxlkl($this) {
    var tmp = $this.rar_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('velocityVector');
    }
  }
  function _get_endVelocityVector__l8kbka($this) {
    var tmp = $this.sar_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('endVelocityVector');
    }
  }
  function VectorizedFloatAnimationSpec_init_$Init$(anim, $this) {
    VectorizedFloatAnimationSpec.call($this, new VectorizedFloatAnimationSpec$1(anim));
    return $this;
  }
  function VectorizedFloatAnimationSpec_init_$Create$(anim) {
    return VectorizedFloatAnimationSpec_init_$Init$(anim, objectCreate(protoOf(VectorizedFloatAnimationSpec)));
  }
  function VectorizedFloatAnimationSpec$1($anim) {
    this.zar_1 = $anim;
  }
  protoOf(VectorizedFloatAnimationSpec$1).m = function (index) {
    return this.zar_1;
  };
  function VectorizedFloatAnimationSpec(anims) {
    this.par_1 = anims;
  }
  protoOf(VectorizedFloatAnimationSpec).pag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.qar_1 == null)) {
      this.qar_1 = newInstance(initialValue);
    }
    var inductionVariable = 0;
    var last = _get_valueVector__r10idf(this).kae();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_valueVector__r10idf(this).mae(i, this.par_1.m(i).daj(playTimeNanos, initialValue.lae(i), targetValue.lae(i), initialVelocity.lae(i)));
      }
       while (inductionVariable < last);
    return _get_valueVector__r10idf(this);
  };
  protoOf(VectorizedFloatAnimationSpec).uag = function (playTimeNanos, initialValue, targetValue, initialVelocity) {
    if (!!(this.rar_1 == null)) {
      this.rar_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_velocityVector__dvxlkl(this).kae();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_velocityVector__dvxlkl(this).mae(i, this.par_1.m(i).faj(playTimeNanos, initialValue.lae(i), targetValue.lae(i), initialVelocity.lae(i)));
      }
       while (inductionVariable < last);
    return _get_velocityVector__dvxlkl(this);
  };
  protoOf(VectorizedFloatAnimationSpec).kag = function (initialValue, targetValue, initialVelocity) {
    if (!!(this.sar_1 == null)) {
      this.sar_1 = newInstance(initialVelocity);
    }
    var inductionVariable = 0;
    var last = _get_endVelocityVector__l8kbka(this).kae();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        _get_endVelocityVector__l8kbka(this).mae(i, this.par_1.m(i).gaj(initialValue.lae(i), targetValue.lae(i), initialVelocity.lae(i)));
      }
       while (inductionVariable < last);
    return _get_endVelocityVector__l8kbka(this);
  };
  protoOf(VectorizedFloatAnimationSpec).sag = function (initialValue, targetValue, initialVelocity) {
    var maxDuration = new Long(0, 0);
    var inductionVariable = 0;
    var last = initialValue.kae();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp0 = maxDuration;
        // Inline function 'kotlin.comparisons.maxOf' call
        var b = this.par_1.m(i).eaj(initialValue.lae(i), targetValue.lae(i), initialVelocity.lae(i));
        maxDuration = compare(tmp0, b) >= 0 ? tmp0 : b;
      }
       while (inductionVariable < last);
    return maxDuration;
  };
  function createSpringAnimations(visibilityThreshold, dampingRatio, stiffness) {
    _init_properties_VectorizedAnimationSpec_kt__qefgpy();
    var tmp;
    if (!(visibilityThreshold == null)) {
      tmp = new createSpringAnimations$1(visibilityThreshold, dampingRatio, stiffness);
    } else {
      tmp = new createSpringAnimations$2(dampingRatio, stiffness);
    }
    return tmp;
  }
  function createSpringAnimations$1($visibilityThreshold, $dampingRatio, $stiffness) {
    var tmp = this;
    var tmp_0 = 0;
    var tmp_1 = $visibilityThreshold.kae();
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_2 = Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = new FloatSpringSpec($dampingRatio, $stiffness, $visibilityThreshold.lae(tmp_3));
      tmp_0 = tmp_0 + 1 | 0;
    }
    tmp.aas_1 = tmp_2;
  }
  protoOf(createSpringAnimations$1).m = function (index) {
    return this.aas_1[index];
  };
  function createSpringAnimations$2($dampingRatio, $stiffness) {
    this.bas_1 = new FloatSpringSpec($dampingRatio, $stiffness);
  }
  protoOf(createSpringAnimations$2).m = function (index) {
    return this.bas_1;
  };
  var properties_initialized_VectorizedAnimationSpec_kt_jkmo58;
  function _init_properties_VectorizedAnimationSpec_kt__qefgpy() {
    if (!properties_initialized_VectorizedAnimationSpec_kt_jkmo58) {
      properties_initialized_VectorizedAnimationSpec_kt_jkmo58 = true;
      EmptyIntArray = new Int32Array(0);
      EmptyFloatArray = new Float32Array(0);
      var tmp = new Int32Array(2);
      var tmp_0 = new Float32Array(2);
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp$ret$0 = [new Float32Array(2), new Float32Array(2)];
      EmptyArcSpline = new ArcSpline(tmp, tmp_0, tmp$ret$0);
      androidx_compose_animation_core_VectorizedKeyframesSpec$stable = 8;
      androidx_compose_animation_core_VectorizedKeyframeSpecElementInfo$stable = 0;
      androidx_compose_animation_core_VectorizedSnapSpec$stable = 0;
      androidx_compose_animation_core_VectorizedInfiniteRepeatableSpec$stable = 8;
      androidx_compose_animation_core_VectorizedRepeatableSpec$stable = 8;
      androidx_compose_animation_core_Spring$stable = 0;
      androidx_compose_animation_core_VectorizedSpringSpec$stable = 8;
      androidx_compose_animation_core_VectorizedTweenSpec$stable = 8;
      androidx_compose_animation_core_VectorizedFloatAnimationSpec$stable = 8;
    }
  }
  var androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable;
  var RectVisibilityThreshold;
  function get_VisibilityThresholdMap() {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    return VisibilityThresholdMap;
  }
  var VisibilityThresholdMap;
  function get_VisibilityThreshold(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntOffset' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntOffset___init__impl__rq8h7b(tmp$ret$1);
  }
  function get_VisibilityThreshold_0(_this__u8e3s4) {
    _init_properties_VisibilityThresholds_kt__rvu6yi();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(1), 32), bitwiseAnd(fromInt(1), new Long(-1, 0)));
    return _IntSize___init__impl__emcjft(tmp$ret$1);
  }
  var properties_initialized_VisibilityThresholds_kt_k6rdp8;
  function _init_properties_VisibilityThresholds_kt__rvu6yi() {
    if (!properties_initialized_VisibilityThresholds_kt_k6rdp8) {
      properties_initialized_VisibilityThresholds_kt_k6rdp8 = true;
      RectVisibilityThreshold = new Rect(1.0, 1.0, 1.0, 1.0);
      VisibilityThresholdMap = mapOf([to(get_VectorConverter_1(IntCompanionObject_instance), 1.0), to(get_VectorConverter_2(Companion_getInstance_0()), 1.0), to(get_VectorConverter_3(Companion_getInstance_1()), 1.0), to(get_VectorConverter_0(FloatCompanionObject_instance), 0.01), to(get_VectorConverter_4(Companion_getInstance_2()), 1.0), to(get_VectorConverter_5(Companion_getInstance_3()), 1.0), to(get_VectorConverter_6(Companion_getInstance_4()), 1.0), to(get_VectorConverter(Companion_getInstance_5()), 0.4), to(get_VectorConverter_7(Companion_getInstance_6()), 0.4)]);
    }
  }
  function binarySearch(_this__u8e3s4, element, fromIndex, toIndex) {
    fromIndex = fromIndex === VOID ? 0 : fromIndex;
    toIndex = toIndex === VOID ? _this__u8e3s4.length : toIndex;
    rangeCheck(_this__u8e3s4.length, fromIndex, toIndex);
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) >>> 1 | 0;
      var midVal = _this__u8e3s4[mid];
      var cmp = compareTo(midVal, element);
      if (cmp < 0)
        low = mid + 1 | 0;
      else if (cmp > 0)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return -(low + 1 | 0) | 0;
  }
  function rangeCheck(size, fromIndex, toIndex) {
    if (fromIndex > toIndex)
      throw IllegalArgumentException_init_$Create$('fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    else if (fromIndex < 0)
      throw IndexOutOfBoundsException_init_$Create$('fromIndex (' + fromIndex + ') is less than zero.');
    else if (toIndex > size)
      throw IndexOutOfBoundsException_init_$Create$('toIndex (' + toIndex + ') is greater than size (' + size + ').');
  }
  var androidx_compose_animation_core_AtomicReference$stable;
  function AtomicReference(value) {
    this.qak_1 = atomic$ref$1(value);
  }
  protoOf(AtomicReference).p12 = function () {
    return this.qak_1.kotlinx$atomicfu$value;
  };
  protoOf(AtomicReference).d1j = function (expect, newValue) {
    return this.qak_1.atomicfu$compareAndSet(expect, newValue);
  };
  var androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable;
  function PlatformOptimizedCancellationException(message) {
    message = message === VOID ? null : message;
    CancellationException_init_$Init$(message, this);
    captureStack(this, PlatformOptimizedCancellationException);
  }
  var thread;
  //region block: post-declaration
  protoOf(TargetBasedAnimation).qag = isFinishedFromNanos;
  protoOf(StartDelayVectorizedAnimationSpec).kag = getEndVelocity;
  protoOf(FloatTweenSpec).gaj = getEndVelocity_0;
  protoOf(FloatTweenSpec).haj = vectorize;
  protoOf(FloatSpringSpec).haj = vectorize;
  protoOf(SegmentImpl).tao = isTransitioningTo;
  protoOf(VectorizedTweenSpec).sag = getDurationNanos;
  protoOf(VectorizedTweenSpec).nag = get_isInfinite;
  protoOf(VectorizedTweenSpec).kag = getEndVelocity;
  protoOf(VectorizedFloatAnimationSpec).nag = get_isInfinite;
  //endregion
  //region block: init
  androidx_compose_animation_core_TargetBasedAnimation$stable = 8;
  androidx_compose_animation_core_DecayAnimation$stable = 0;
  androidx_compose_animation_core_AnimationConstants$stable = 0;
  androidx_compose_animation_core_TweenSpec$stable = 0;
  androidx_compose_animation_core_SpringSpec$stable = 0;
  androidx_compose_animation_core_ArcAnimationSpec$stable = 0;
  androidx_compose_animation_core_RepeatableSpec$stable = 0;
  androidx_compose_animation_core_InfiniteRepeatableSpec$stable = 8;
  androidx_compose_animation_core_SnapSpec$stable = 0;
  androidx_compose_animation_core_KeyframesSpecBaseConfig$stable = 8;
  androidx_compose_animation_core_KeyframeBaseEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframesSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesSpec_KeyframeEntity$stable = 8;
  androidx_compose_animation_core_KeyframesSpec$stable = 0;
  androidx_compose_animation_core_KeyframesWithSplineSpec_KeyframesWithSplineSpecConfig$stable = 8;
  androidx_compose_animation_core_KeyframesWithSplineSpec$stable = 0;
  androidx_compose_animation_core_AnimationState$stable = 0;
  androidx_compose_animation_core_AnimationScope$stable = 8;
  androidx_compose_animation_core_AnimationVector$stable = 0;
  androidx_compose_animation_core_AnimationVector1D$stable = 8;
  androidx_compose_animation_core_AnimationVector2D$stable = 8;
  androidx_compose_animation_core_AnimationVector3D$stable = 8;
  androidx_compose_animation_core_AnimationVector4D$stable = 8;
  androidx_compose_animation_core_DeferredTargetAnimation$stable = 8;
  androidx_compose_animation_core_FloatSpringSpec$stable = 8;
  androidx_compose_animation_core_FloatTweenSpec$stable = 0;
  androidx_compose_animation_core_FloatExponentialDecaySpec$stable = 0;
  androidx_compose_animation_core_InfiniteTransition$stable = 8;
  androidx_compose_animation_core_MutationInterruptedException$stable = 8;
  androidx_compose_animation_core_MutatorMutex$stable = 0;
  androidx_compose_animation_core_MonoSpline$stable = 8;
  androidx_compose_animation_core_PathEasing$stable = 0;
  androidx_compose_animation_core_SpringSimulation$stable = 8;
  androidx_compose_animation_core_VectorizedMonoSplineKeyframesSpec$stable = 8;
  androidx_compose_animation_core_AtomicReference$stable = 8;
  androidx_compose_animation_core_internal_PlatformOptimizedCancellationException$stable = 8;
  thread = Unit_instance;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Animatable_0;
  _.$_$.b = Animatable;
  _.$_$.c = AnimationVector2D;
  _.$_$.d = AnimationVector4D;
  _.$_$.e = CubicBezierEasing;
  _.$_$.f = get_FastOutSlowInEasing;
  _.$_$.g = get_LinearEasing;
  _.$_$.h = TweenSpec;
  _.$_$.i = TwoWayConverter;
  _.$_$.j = get_VectorConverter_3;
  _.$_$.k = get_VectorConverter;
  _.$_$.l = get_VectorConverter_2;
  _.$_$.m = get_VectorConverter_0;
  _.$_$.n = get_VisibilityThreshold;
  _.$_$.o = get_VisibilityThreshold_0;
  _.$_$.p = createChildTransitionInternal;
  _.$_$.q = createDeferredAnimation;
  _.$_$.r = spring;
  _.$_$.s = tween;
  _.$_$.t = updateTransition;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation-core.js.map
