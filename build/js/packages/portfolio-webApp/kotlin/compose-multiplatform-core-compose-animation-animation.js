(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-animation-animation-core.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-animation-animation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-animation-animation'.");
    }
    globalThis['compose-multiplatform-core-compose-animation-animation'] = factory(typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-animation-animation'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.b5;
  var updateTransition = kotlin_org_jetbrains_compose_animation_animation_core.$_$.t;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var layout = kotlin_org_jetbrains_compose_ui_ui.$_$.r1;
  var Enum = kotlin_kotlin.$_$.sc;
  var protoOf = kotlin_kotlin.$_$.aa;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.c;
  var createChildTransitionInternal = kotlin_org_jetbrains_compose_animation_animation_core.$_$.p;
  var rememberUpdatedState = kotlin_androidx_compose_runtime_runtime.$_$.n1;
  var produceState = kotlin_androidx_compose_runtime_runtime.$_$.l1;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.x4;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.r9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l1;
  var fromInt = kotlin_kotlin.$_$.d8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var Long = kotlin_kotlin.$_$.yc;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var KProperty0 = kotlin_kotlin.$_$.wa;
  var getLocalDelegateReference = kotlin_kotlin.$_$.e9;
  var equals = kotlin_kotlin.$_$.b9;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var hashCode = kotlin_kotlin.$_$.i9;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var ProduceStateScope = kotlin_androidx_compose_runtime_runtime.$_$.s;
  var snapshotFlow = kotlin_androidx_compose_runtime_runtime.$_$.o1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var TwoWayConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.i;
  var ColorSpaces_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j3;
  var Color__convert_impl_so5m8t = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q2;
  var _Color___get_red__impl__cwrsk6 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t2;
  var _Color___get_green__impl__bta9rs = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r2;
  var _Color___get_blue__impl__xwez13 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o2;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var AnimationVector4D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.d;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var plus = kotlin_kotlin.$_$.b6;
  var get_VisibilityThreshold = kotlin_org_jetbrains_compose_animation_animation_core.$_$.o;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i3;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.j;
  var createDeferredAnimation = kotlin_org_jetbrains_compose_animation_animation_core.$_$.q;
  var get_VectorConverter_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.l;
  var _Color___get_colorSpace__impl__jqqozk = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p2;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.n;
  var emptyMap = kotlin_kotlin.$_$.t4;
  var toString = kotlin_kotlin.$_$.de;
  var toString_0 = kotlin_kotlin.$_$.ca;
  var getBooleanHashCode = kotlin_kotlin.$_$.d9;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var get_VectorConverter_1 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.m;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sd;
  var requireLayoutCoordinates = kotlin_org_jetbrains_compose_ui_ui.$_$.y2;
  var toRawBits = kotlin_kotlin.$_$.be;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var positionInParent = kotlin_org_jetbrains_compose_ui_ui.$_$.s1;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var bitwiseXor = kotlin_kotlin.$_$.x7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x1;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var IntOffset__minus_impl_4m69hb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k2;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var IntOffset__plus_impl_nqoa9b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m2;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var AnimationVector2D = kotlin_org_jetbrains_compose_animation_animation_core.$_$.c;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var TransformOrigin_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.m;
  var KMutableProperty0 = kotlin_kotlin.$_$.ua;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var get_VisibilityThreshold_0 = kotlin_org_jetbrains_compose_animation_animation_core.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(EnterExitState, 'EnterExitState', VOID, Enum);
  initMetadataForClass(AnimatedVisibilityScopeImpl, 'AnimatedVisibilityScopeImpl');
  initMetadataForClass(AnimatedEnterExitMeasurePolicy, 'AnimatedEnterExitMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AnimatedEnterExitImpl$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(LayoutModifierNodeWithPassThroughIntrinsics, 'LayoutModifierNodeWithPassThroughIntrinsics', VOID, Node, [LayoutModifierNode]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(EnterTransition, 'EnterTransition');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ExitTransition, 'ExitTransition');
  initMetadataForClass(TransitionData, 'TransitionData', TransitionData);
  initMetadataForClass(EnterTransitionImpl, 'EnterTransitionImpl', VOID, EnterTransition);
  initMetadataForClass(Fade, 'Fade');
  initMetadataForClass(ChangeSize, 'ChangeSize');
  initMetadataForClass(ExitTransitionImpl, 'ExitTransitionImpl', VOID, ExitTransition);
  initMetadataForClass(VeilModifierElement, 'VeilModifierElement', VOID, ModifierNodeElement);
  initMetadataForInterface(GraphicsLayerBlockForEnterExit, 'GraphicsLayerBlockForEnterExit');
  initMetadataForClass(EnterExitTransitionElement, 'EnterExitTransitionElement', VOID, ModifierNodeElement);
  initMetadataForClass(VeilModifierNode, 'VeilModifierNode', VOID, Node, [DrawModifierNode]);
  initMetadataForClass(EnterExitTransitionModifierNode, 'EnterExitTransitionModifierNode', VOID, LayoutModifierNodeWithPassThroughIntrinsics);
  initMetadataForClass(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0, 'sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0', VOID, VOID, [GraphicsLayerBlockForEnterExit, FunctionAdapter]);
  //endregion
  var androidx_compose_animation_AnimatedVisibilityScopeImpl$stable;
  function AnimatedVisibility(_this__u8e3s4, visible, modifier, enter, exit, label, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enter_0 = {_v: enter};
    var exit_0 = {_v: exit};
    var label_0 = {_v: label};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(1799879339);
    var $dirty = $changed;
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.h1z(visible) ? 32 : 16);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.g1z(modifier_0._v) ? 256 : 128);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.g1z(enter_0._v) ? 2048 : 1024);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g1z(exit_0._v) ? 16384 : 8192);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.g1z(label_0._v) ? 131072 : 65536);
    if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 1048576 : 524288);
    if ($composer_0.n1z(!(($dirty & 599185) === 599184), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance;
      }
      if (!(($default & 4) === 0)) {
        enter_0._v = fadeIn().cas(expandVertically());
      }
      if (!(($default & 8) === 0)) {
        exit_0._v = fadeOut().das(shrinkVertically());
      }
      if (!(($default & 16) === 0)) {
        label_0._v = 'AnimatedVisibility';
      }
      var transition = updateTransition(visible, label_0._v, $composer_0, 14 & $dirty >> 3 | 112 & $dirty >> 12, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it = this_0.e1z();
      var tmp;
      if (false || it === Companion_getInstance().f1y_1) {
        var value = AnimatedVisibility$lambda;
        this_0.f1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp$ret$0 = tmp;
      AnimatedVisibilityImpl(transition, tmp$ret$0, modifier_0._v, enter_0._v, exit_0._v, content, $composer_0, 48 | 896 & $dirty | 7168 & $dirty | 57344 & $dirty | 458752 & $dirty >> 3);
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(AnimatedVisibility$lambda_0(_this__u8e3s4, visible, modifier_0, enter_0, exit_0, label_0, content, $changed, $default));
    }
  }
  function AnimatedVisibilityImpl(transition, visible, modifier, enter, exit, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(1706321816);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g1z(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.l1z(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.g1z(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.g1z(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g1z(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 131072 : 65536);
    if ($composer_0.n1z(!(($dirty & 74899) === 74898), $dirty & 1)) {
      var tmp0 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!(($dirty & 112) === 32 | ($dirty & 14) === 4);
      // Inline function 'kotlin.let' call
      var it = tmp0.e1z();
      var tmp;
      if (invalid || it === Companion_getInstance().f1y_1) {
        var value = AnimatedVisibilityImpl$lambda(visible, transition);
        tmp0.f1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp$ret$0 = tmp;
      var tmp_0 = layout(modifier, tmp$ret$0);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_0.e1z();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().f1y_1) {
        var value_0 = AnimatedVisibilityImpl$lambda_0;
        this_0.f1z(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp_2 = tmp_1;
      AnimatedEnterExitImpl(transition, visible, tmp_0, enter, exit, tmp_2, null, content, $composer_0, 196608 | 14 & $dirty | 112 & $dirty | 7168 & $dirty | 57344 & $dirty | 29360128 & $dirty << 6, 64);
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(AnimatedVisibilityImpl$lambda_1(transition, visible, modifier, enter, exit, content, $changed));
    }
  }
  var EnterExitState_PreEnter_instance;
  var EnterExitState_Visible_instance;
  var EnterExitState_PostExit_instance;
  var EnterExitState_entriesInitialized;
  function EnterExitState_initEntries() {
    if (EnterExitState_entriesInitialized)
      return Unit_instance;
    EnterExitState_entriesInitialized = true;
    EnterExitState_PreEnter_instance = new EnterExitState('PreEnter', 0);
    EnterExitState_Visible_instance = new EnterExitState('Visible', 1);
    EnterExitState_PostExit_instance = new EnterExitState('PostExit', 2);
  }
  function EnterExitState(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function AnimatedEnterExitImpl(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured, content, $composer, $changed, $default) {
    var onLookaheadMeasured_0 = {_v: onLookaheadMeasured};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(1912839215);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g1z(transition) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.l1z(visible) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.g1z(modifier) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.g1z(enter) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g1z(exit) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.l1z(shouldDisposeBlock) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ((($changed & 2097152) === 0 ? $composer_0.g1z(onLookaheadMeasured_0._v) : $composer_0.l1z(onLookaheadMeasured_0._v)) ? 1048576 : 524288);
    if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 8388608 : 4194304);
    if ($composer_0.n1z(!(($dirty & 4793491) === 4793490), $dirty & 1)) {
      if (!(($default & 64) === 0)) {
        onLookaheadMeasured_0._v = null;
      }
      if (visible(transition.b6f()) || visible(transition.i6f()) || transition.iao() || transition.sap()) {
        $composer_0.m1y(-232386135);
        // Inline function 'androidx.compose.animation.core.createChildTransition' call
        var $changed_0 = 48 | 14 & $dirty;
        var label = 'EnterExitTransition';
        var $composer_1 = $composer_0;
        if (!((0 & 1) === 0))
          label = 'ChildTransition';
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($changed_0 & 14 ^ 6) > 4 && $composer_1.g1z(transition) || ($changed_0 & 6) === 4;
        // Inline function 'kotlin.let' call
        var it = $composer_1.e1z();
        var tmp;
        if (invalid || it === Companion_getInstance().f1y_1) {
          var value = transition.i6f();
          $composer_1.f1z(value);
          tmp = value;
        } else {
          tmp = it;
        }
        var initialParentState = tmp;
        var tmp0 = transition.iao() ? transition.i6f() : initialParentState;
        var $changed_1 = 112 & $changed_0 >> 3;
        var $composer_2 = $composer_1;
        $composer_2.m1y(1844425648);
        var tmp0_0 = targetEnterExit(transition, visible, tmp0, $composer_2, 14 & $dirty | 112 & $dirty | 896 & $changed_1 << 6);
        $composer_2.n1y();
        var initialState = tmp0_0;
        var tmp0_1 = transition.b6f();
        var $changed_2 = 112 & $changed_0 >> 3;
        var $composer_3 = $composer_1;
        $composer_3.m1y(1844425648);
        var tmp0_2 = targetEnterExit(transition, visible, tmp0_1, $composer_3, 14 & $dirty | 112 & $dirty | 896 & $changed_2 << 6);
        $composer_3.n1y();
        var targetState = tmp0_2;
        var childTransition = createChildTransitionInternal(transition, initialState, targetState, label, $composer_1, 14 & $changed_0 | 7168 & $changed_0 << 6);
        var activeEnter = trackActiveEnter(childTransition, enter, $composer_0, 112 & $dirty >> 6);
        var activeExit = trackActiveExit(childTransition, exit, $composer_0, 112 & $dirty >> 9);
        var shouldDisposeBlockUpdated$delegate = rememberUpdatedState(shouldDisposeBlock, $composer_0, 14 & $dirty >> 15);
        var tmp_0 = shouldDisposeBlock(childTransition.i6f(), childTransition.b6f());
        var tmp0_3 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!($composer_0.g1z(childTransition) | $composer_0.g1z(shouldDisposeBlockUpdated$delegate));
        // Inline function 'kotlin.let' call
        var it_0 = tmp0_3.e1z();
        var tmp_1;
        if (invalid_0 || it_0 === Companion_getInstance().f1y_1) {
          var value_0 = AnimatedEnterExitImpl$slambda_0(childTransition, shouldDisposeBlockUpdated$delegate, null);
          tmp0_3.f1z(value_0);
          tmp_1 = value_0;
        } else {
          tmp_1 = it_0;
        }
        var tmp$ret$7 = tmp_1;
        var shouldDisposeAfterExit$delegate = produceState(tmp_0, tmp$ret$7, $composer_0, 0);
        if (!get_exitFinished(childTransition) || !AnimatedEnterExitImpl$lambda_0(shouldDisposeAfterExit$delegate)) {
          $composer_0.m1y(-230699766);
          var tmp0_4 = $composer_0;
          // Inline function 'androidx.compose.runtime.cache' call
          var invalid_1 = ($dirty & 14) === 4;
          // Inline function 'kotlin.let' call
          var it_1 = tmp0_4.e1z();
          var tmp_2;
          if (invalid_1 || it_1 === Companion_getInstance().f1y_1) {
            var value_1 = new AnimatedVisibilityScopeImpl(childTransition);
            tmp0_4.f1z(value_1);
            tmp_2 = value_1;
          } else {
            tmp_2 = it_1;
          }
          var scope = tmp_2;
          var tmp_3 = createModifier(childTransition, activeEnter, activeExit, false, null, 'Built-in', $composer_0, 199680, 8);
          var tmp_4;
          if (!(onLookaheadMeasured_0._v == null)) {
            $composer_0.m1y(-230087268);
            var tmp_5 = Companion_instance;
            var tmp0_5 = $composer_0;
            // Inline function 'androidx.compose.runtime.cache' call
            var invalid_2 = ($dirty & 3670016) === 1048576 || (!(($dirty & 2097152) === 0) && $composer_0.l1z(onLookaheadMeasured_0._v));
            // Inline function 'kotlin.let' call
            var it_2 = tmp0_5.e1z();
            var tmp_6;
            if (invalid_2 || it_2 === Companion_getInstance().f1y_1) {
              var value_2 = AnimatedEnterExitImpl$lambda_1(onLookaheadMeasured_0);
              tmp0_5.f1z(value_2);
              tmp_6 = value_2;
            } else {
              tmp_6 = it_2;
            }
            var tmp$ret$15 = tmp_6;
            var tmp0_group = layout(tmp_5, tmp$ret$15);
            $composer_0.n1y();
            tmp_4 = tmp0_group;
          } else {
            $composer_0.m1y(-7404393);
            $composer_0.n1y();
            tmp_4 = Companion_instance;
          }
          var tmp0_6 = modifier.e6j(tmp_3.e6j(tmp_4));
          // Inline function 'androidx.compose.runtime.cache' call
          var this_0 = $composer_0;
          // Inline function 'kotlin.let' call
          var it_3 = this_0.e1z();
          var tmp_7;
          if (false || it_3 === Companion_getInstance().f1y_1) {
            var value_3 = new AnimatedEnterExitMeasurePolicy(scope);
            this_0.f1z(value_3);
            tmp_7 = value_3;
          } else {
            tmp_7 = it_3;
          }
          var tmp2 = tmp_7;
          // Inline function 'androidx.compose.ui.layout.Layout' call
          var modifier_0 = tmp0_6;
          var $composer_4 = $composer_0;
          if (!((0 & 2) === 0))
            modifier_0 = Companion_instance;
          var compositeKeyHash = get_currentCompositeKeyHashCode($composer_4, 0).hashCode();
          var localMap = $composer_4.p1z();
          var materialized = materialize($composer_4, modifier_0);
          var tmp0_7 = Companion_getInstance_0().b84_1;
          // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
          var $composer_5 = $composer_4;
          var tmp_8 = $composer_5.g1y();
          if (!isInterface(tmp_8, Applier)) {
            invalidApplier();
          }
          $composer_5.z1y();
          if ($composer_5.h1y()) {
            $composer_5.a1z(tmp0_7);
          } else {
            $composer_5.b1z();
          }
          var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_5);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance_0().g84_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_0().f84_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_0().j84_1);
          Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_0().k84_1);
          Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_0().d84_1);
          var $composer_6 = $composer_5;
          content(scope, $composer_6, 112 & $dirty >> 18);
          $composer_5.c1z();
          $composer_0.n1y();
        } else {
          $composer_0.m1y(-229368781);
          $composer_0.n1y();
        }
        $composer_0.n1y();
      } else {
        $composer_0.m1y(-229362829);
        $composer_0.n1y();
      }
    } else {
      $composer_0.y1y();
    }
    var tmp1_safe_receiver = $composer_0.t1y();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d2a(AnimatedEnterExitImpl$lambda_2(transition, visible, modifier, enter, exit, shouldDisposeBlock, onLookaheadMeasured_0, content, $changed, $default));
    }
  }
  function targetEnterExit(_this__u8e3s4, visible, targetState, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.o1y(-422486745, _this__u8e3s4);
    var tmp;
    if (_this__u8e3s4.iao()) {
      $composer_0.m1y(-212166497);
      $composer_0.n1y();
      var tmp_0;
      if (visible(targetState)) {
        tmp_0 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_1;
        if (visible(_this__u8e3s4.i6f())) {
          tmp_1 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_1 = EnterExitState_PreEnter_getInstance();
        }
        tmp_0 = tmp_1;
      }
      tmp = tmp_0;
    } else {
      $composer_0.m1y(-211892364);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp_2;
      if (false || it === Companion_getInstance().f1y_1) {
        var value = mutableStateOf(false);
        $composer_0.f1z(value);
        tmp_2 = value;
      } else {
        tmp_2 = it;
      }
      var hasBeenVisible = tmp_2;
      if (visible(_this__u8e3s4.i6f())) {
        hasBeenVisible.y1i(true);
      }
      var tmp_3;
      if (visible(targetState)) {
        tmp_3 = EnterExitState_Visible_getInstance();
      } else {
        var tmp_4;
        if (hasBeenVisible.r1()) {
          tmp_4 = EnterExitState_PostExit_getInstance();
        } else {
          tmp_4 = EnterExitState_PreEnter_getInstance();
        }
        tmp_3 = tmp_4;
      }
      var tmp2_group = tmp_3;
      $composer_0.n1y();
      tmp = tmp2_group;
    }
    var tmp1 = tmp;
    $composer_0.p1y();
    return tmp1;
  }
  function get_exitFinished(_this__u8e3s4) {
    return _this__u8e3s4.i6f().equals(EnterExitState_PostExit_getInstance()) && _this__u8e3s4.b6f().equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityScopeImpl(transition) {
    this.eas_1 = transition;
    this.fas_1 = mutableStateOf(new IntSize(Companion_getInstance_1().n48_1));
  }
  function AnimatedEnterExitMeasurePolicy$measure$lambda($placeables) {
    return function ($this$layout) {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var this_0 = $placeables;
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          $this$layout.q7t(item, 0, 0);
        }
         while (inductionVariable <= last);
      return Unit_instance;
    };
  }
  function AnimatedEnterExitMeasurePolicy(scope) {
    this.gas_1 = scope;
    this.has_1 = false;
  }
  protoOf(AnimatedEnterExitMeasurePolicy).y7s = function (_this__u8e3s4, measurables, constraints) {
    var maxWidth = 0;
    var maxHeight = 0;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$(measurables.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = measurables.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.m(index);
        // Inline function 'kotlin.apply' call
        var this_0 = item.m6s(constraints);
        var tmp0 = maxWidth;
        // Inline function 'kotlin.math.max' call
        var b = this_0.n6s_1;
        maxWidth = Math.max(tmp0, b);
        var tmp0_0 = maxHeight;
        // Inline function 'kotlin.math.max' call
        var b_0 = this_0.o6s_1;
        maxHeight = Math.max(tmp0_0, b_0);
        // Inline function 'kotlin.collections.plusAssign' call
        target.g(this_0);
      }
       while (inductionVariable <= last);
    var placeables = target;
    if (_this__u8e3s4.m7r()) {
      this.has_1 = true;
      var tmp0_1 = maxWidth;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = maxHeight;
      var tmp$ret$10 = bitwiseOr(shiftLeft(fromInt(tmp0_1), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$9 = _IntSize___init__impl__emcjft(tmp$ret$10);
      this.gas_1.fas_1.y1i(new IntSize(tmp$ret$9));
    } else if (!this.has_1) {
      var tmp0_2 = maxWidth;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = maxHeight;
      var tmp$ret$12 = bitwiseOr(shiftLeft(fromInt(tmp0_2), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      var tmp$ret$11 = _IntSize___init__impl__emcjft(tmp$ret$12);
      this.gas_1.fas_1.y1i(new IntSize(tmp$ret$11));
    }
    var tmp = maxWidth;
    var tmp_0 = maxHeight;
    return _this__u8e3s4.s6s(tmp, tmp_0, VOID, AnimatedEnterExitMeasurePolicy$measure$lambda(placeables));
  };
  function AnimatedVisibility$lambda(it) {
    return it;
  }
  function AnimatedVisibility$lambda_0($this_AnimatedVisibility, $visible, $modifier, $enter, $exit, $label, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedVisibility($this_AnimatedVisibility, $visible, $modifier._v, $enter._v, $exit._v, $label._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function AnimatedVisibilityImpl$lambda$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.q7t($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function AnimatedVisibilityImpl$lambda($visible, $transition) {
    return function ($this$layout, measurable, constraints) {
      var placeable = measurable.m6s(constraints.g47_1);
      var tmp;
      if ($this$layout.m7r() && !$visible($transition.b6f())) {
        tmp = Companion_getInstance_1().n48_1;
      } else {
        var tmp0 = placeable.n6s_1;
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = placeable.o6s_1;
        var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        tmp = _IntSize___init__impl__emcjft(tmp$ret$1);
      }
      var _destruct__k2r9zo = tmp;
      // Inline function 'androidx.compose.ui.unit.IntSize.component1' call
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var w = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.component2' call
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(_destruct__k2r9zo);
      var h = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return $this$layout.s6s(w, h, VOID, AnimatedVisibilityImpl$lambda$lambda(placeable));
    };
  }
  function AnimatedVisibilityImpl$lambda_0(current, target) {
    return current.equals(target) && target.equals(EnterExitState_PostExit_getInstance());
  }
  function AnimatedVisibilityImpl$lambda_1($transition, $visible, $modifier, $enter, $exit, $content, $$changed) {
    return function ($composer, $force) {
      AnimatedVisibilityImpl($transition, $visible, $modifier, $enter, $exit, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  function AnimatedEnterExitImpl$lambda($shouldDisposeBlockUpdated$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeBlockUpdated', KProperty0, false);
    return $shouldDisposeBlockUpdated$delegate.r1();
  }
  function AnimatedEnterExitImpl$lambda_0($shouldDisposeAfterExit$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('shouldDisposeAfterExit', KProperty0, false);
    return $shouldDisposeAfterExit$delegate.r1();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.ias_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).l1f = function (value, $completion) {
    return this.ias_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).r2 = function () {
    return this.ias_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, FlowCollector) : false) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function AnimatedEnterExitImpl$slambda$lambda($childTransition) {
    return function () {
      return get_exitFinished($childTransition);
    };
  }
  function AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.ras_1 = $this_produceState;
    this.sas_1 = $childTransition;
    this.tas_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda$slambda).vas = function (it, $completion) {
    var tmp = this.was(it, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).d9 = function (p1, $completion) {
    return this.vas((!(p1 == null) ? typeof p1 === 'boolean' : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          var tmp_0;
          if (this.uas_1) {
            tmp_0 = AnimatedEnterExitImpl$lambda(this.tas_1)(this.sas_1.i6f(), this.sas_1.b6f());
          } else {
            tmp_0 = false;
          }
          this.ras_1.y1i(tmp_0);
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
  protoOf(AnimatedEnterExitImpl$slambda$slambda).was = function (it, completion) {
    var i = new AnimatedEnterExitImpl$slambda$slambda(this.ras_1, this.sas_1, this.tas_1, completion);
    i.uas_1 = it;
    return i;
  };
  function AnimatedEnterExitImpl$slambda$slambda_0($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda$slambda($this_produceState, $childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.vas(it, $completion);
    }, 1);
  }
  function AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    this.fat_1 = $childTransition;
    this.gat_1 = $shouldDisposeBlockUpdated$delegate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AnimatedEnterExitImpl$slambda).iat = function ($this$produceState, $completion) {
    var tmp = this.jat($this$produceState, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AnimatedEnterExitImpl$slambda).d9 = function (p1, $completion) {
    return this.iat((!(p1 == null) ? isInterface(p1, ProduceStateScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AnimatedEnterExitImpl$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            var tmp_0 = snapshotFlow(AnimatedEnterExitImpl$slambda$lambda(this.fat_1));
            var tmp_1 = AnimatedEnterExitImpl$slambda$slambda_0(this.hat_1, this.fat_1, this.gat_1, null);
            suspendResult = tmp_0.z1d(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return Unit_instance;
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
  protoOf(AnimatedEnterExitImpl$slambda).jat = function ($this$produceState, completion) {
    var i = new AnimatedEnterExitImpl$slambda(this.fat_1, this.gat_1, completion);
    i.hat_1 = $this$produceState;
    return i;
  };
  function AnimatedEnterExitImpl$slambda_0($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation) {
    var i = new AnimatedEnterExitImpl$slambda($childTransition, $shouldDisposeBlockUpdated$delegate, resultContinuation);
    return constructCallableReference(function ($this$produceState, $completion) {
      return i.iat($this$produceState, $completion);
    }, 1);
  }
  function AnimatedEnterExitImpl$lambda$lambda($$this$run) {
    return function ($this$layout) {
      $this$layout.q7t($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function AnimatedEnterExitImpl$lambda_1($onLookaheadMeasured) {
    return function ($this$layout, measurable, constraints) {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.m6s(constraints.g47_1);
      if ($this$layout.m7r()) {
        var tmp = $onLookaheadMeasured._v;
        var tmp0 = $this$run.n6s_1;
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = $this$run.o6s_1;
        var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        var tmp$ret$2 = _IntSize___init__impl__emcjft(tmp$ret$3);
        tmp.kat(tmp$ret$2);
      }
      var tmp_0 = $this$run.n6s_1;
      var tmp_1 = $this$run.o6s_1;
      return $this$layout.s6s(tmp_0, tmp_1, VOID, AnimatedEnterExitImpl$lambda$lambda($this$run));
    };
  }
  function AnimatedEnterExitImpl$lambda_2($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured, $content, $$changed, $$default) {
    return function ($composer, $force) {
      AnimatedEnterExitImpl($transition, $visible, $modifier, $enter, $exit, $shouldDisposeBlock, $onLookaheadMeasured._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function EnterExitState_PreEnter_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PreEnter_instance;
  }
  function EnterExitState_Visible_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_Visible_instance;
  }
  function EnterExitState_PostExit_getInstance() {
    EnterExitState_initEntries();
    return EnterExitState_PostExit_instance;
  }
  function get_InvalidSize() {
    _init_properties_AnimationModifier_kt__u6vzef();
    return InvalidSize;
  }
  var InvalidSize;
  var androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable;
  var androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable;
  function LayoutModifierNodeWithPassThroughIntrinsics() {
    Node.call(this);
  }
  function get_isValid(_this__u8e3s4) {
    _init_properties_AnimationModifier_kt__u6vzef();
    return !equals(_this__u8e3s4, get_InvalidSize());
  }
  var properties_initialized_AnimationModifier_kt_fvv7xx;
  function _init_properties_AnimationModifier_kt__u6vzef() {
    if (!properties_initialized_AnimationModifier_kt_fvv7xx) {
      properties_initialized_AnimationModifier_kt_fvv7xx = true;
      var tmp0 = -2147483648;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = -2147483648;
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      InvalidSize = _IntSize___init__impl__emcjft(tmp$ret$1);
      androidx_compose_animation_SizeAnimationModifierNode_AnimData$stable = 8;
      androidx_compose_animation_LayoutModifierNodeWithPassThroughIntrinsics$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
    }
  }
  function get_ColorToVector() {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return ColorToVector;
  }
  var ColorToVector;
  function get_VectorConverter_2(_this__u8e3s4) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    return get_ColorToVector();
  }
  function ColorToVector$lambda(colorSpace) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var tmp = ColorToVector$lambda$lambda;
    return TwoWayConverter(tmp, ColorToVector$lambda$lambda_0(colorSpace));
  }
  function ColorToVector$lambda$lambda(color) {
    _init_properties_ColorVectorConverter_kt__qncuxy();
    var _destruct__k2r9zo = Color__convert_impl_so5m8t(color.v4y_1, ColorSpaces_getInstance().f51_1);
    // Inline function 'androidx.compose.ui.graphics.Color.component1' call
    var l = _Color___get_red__impl__cwrsk6(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component2' call
    var a = _Color___get_green__impl__bta9rs(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component3' call
    var b = _Color___get_blue__impl__xwez13(_destruct__k2r9zo);
    // Inline function 'androidx.compose.ui.graphics.Color.component4' call
    var alpha = _Color___get_alpha__impl__wcfyv1(_destruct__k2r9zo);
    return new AnimationVector4D(alpha, l, a, b);
  }
  function ColorToVector$lambda$lambda_0($colorSpace) {
    return function (vector) {
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_0 = vector.kah_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = this_0 < 0.0 ? 0.0 : this_0;
      var tmp = this_1 > 1.0 ? 1.0 : this_1;
      var tmp0 = vector.lah_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_2 = tmp0 < minimumValue ? minimumValue : tmp0;
      var tmp_0 = this_2 > 0.5 ? 0.5 : this_2;
      var tmp0_0 = vector.mah_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue_0 = -0.5;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < minimumValue_0 ? minimumValue_0 : tmp0_0;
      var tmp_1 = this_3 > 0.5 ? 0.5 : this_3;
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var this_4 = vector.jah_1;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_5 = this_4 < 0.0 ? 0.0 : this_4;
      var tmp$ret$9 = this_5 > 1.0 ? 1.0 : this_5;
      return new Color_0(Color__convert_impl_so5m8t(Color(tmp, tmp_0, tmp_1, tmp$ret$9, ColorSpaces_getInstance().f51_1), $colorSpace));
    };
  }
  var properties_initialized_ColorVectorConverter_kt_jaoojo;
  function _init_properties_ColorVectorConverter_kt__qncuxy() {
    if (!properties_initialized_ColorVectorConverter_kt_jaoojo) {
      properties_initialized_ColorVectorConverter_kt_jaoojo = true;
      ColorToVector = ColorToVector$lambda;
    }
  }
  function get_TransformOriginVectorConverter() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return TransformOriginVectorConverter;
  }
  var TransformOriginVectorConverter;
  function get_DefaultAlphaAndScaleSpring() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultAlphaAndScaleSpring;
  }
  var DefaultAlphaAndScaleSpring;
  function get_DefaultColorAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultColorAnimationSpec;
  }
  var DefaultColorAnimationSpec;
  function get_DefaultOffsetAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultOffsetAnimationSpec;
  }
  var DefaultOffsetAnimationSpec;
  function get_DefaultSizeAnimationSpec() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return DefaultSizeAnimationSpec;
  }
  var DefaultSizeAnimationSpec;
  var androidx_compose_animation_EnterTransition$stable;
  var androidx_compose_animation_ExitTransition$stable;
  var androidx_compose_animation_TransitionEffect$stable;
  var androidx_compose_animation_ContentScaleTransitionEffect$stable;
  var androidx_compose_animation_Fade$stable;
  var androidx_compose_animation_Slide$stable;
  var androidx_compose_animation_ChangeSize$stable;
  var androidx_compose_animation_Scale$stable;
  var androidx_compose_animation_Veil$stable;
  var androidx_compose_animation_TransitionData$stable;
  function Companion() {
    Companion_instance_0 = this;
    this.lat_1 = new EnterTransitionImpl(new TransitionData());
  }
  var Companion_instance_0;
  function Companion_getInstance_7() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function EnterTransition() {
    Companion_getInstance_7();
  }
  protoOf(EnterTransition).cas = function (enter) {
    var tmp0_elvis_lhs = enter.mat().nat_1;
    var tmp = tmp0_elvis_lhs == null ? this.mat().nat_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = enter.mat().oat_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.mat().oat_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = enter.mat().pat_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.mat().pat_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = enter.mat().qat_1;
    var tmp_2 = tmp3_elvis_lhs == null ? this.mat().qat_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = enter.mat().rat_1;
    return new EnterTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp_2, tmp4_elvis_lhs == null ? this.mat().rat_1 : tmp4_elvis_lhs, VOID, plus(this.mat().tat_1, enter.mat().tat_1)));
  };
  protoOf(EnterTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_7().lat_1)) {
      tmp = 'EnterTransition.None';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.mat();
      var tmp0_safe_receiver = $this$run.nat_1;
      var tmp_0 = 'EnterTransition: \nFade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nSlide - ';
      var tmp1_safe_receiver = $this$run.oat_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nShrink - ';
      var tmp2_safe_receiver = $this$run.pat_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nScale - ';
      var tmp3_safe_receiver = $this$run.qat_1;
      tmp = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString());
    }
    return tmp;
  };
  protoOf(EnterTransition).equals = function (other) {
    var tmp;
    if (other instanceof EnterTransition) {
      tmp = other.mat().equals(this.mat());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(EnterTransition).hashCode = function () {
    return this.mat().hashCode();
  };
  function Companion_0() {
    Companion_instance_1 = this;
    this.uat_1 = new ExitTransitionImpl(new TransitionData());
    this.vat_1 = new ExitTransitionImpl(new TransitionData(VOID, VOID, VOID, VOID, VOID, true));
  }
  var Companion_instance_1;
  function Companion_getInstance_8() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function ExitTransition() {
    Companion_getInstance_8();
  }
  protoOf(ExitTransition).das = function (exit) {
    var tmp0_elvis_lhs = exit.mat().nat_1;
    var tmp = tmp0_elvis_lhs == null ? this.mat().nat_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = exit.mat().oat_1;
    var tmp_0 = tmp1_elvis_lhs == null ? this.mat().oat_1 : tmp1_elvis_lhs;
    var tmp2_elvis_lhs = exit.mat().pat_1;
    var tmp_1 = tmp2_elvis_lhs == null ? this.mat().pat_1 : tmp2_elvis_lhs;
    var tmp3_elvis_lhs = exit.mat().qat_1;
    var tmp_2 = tmp3_elvis_lhs == null ? this.mat().qat_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = exit.mat().rat_1;
    return new ExitTransitionImpl(new TransitionData(tmp, tmp_0, tmp_1, tmp_2, tmp4_elvis_lhs == null ? this.mat().rat_1 : tmp4_elvis_lhs, exit.mat().sat_1 || this.mat().sat_1, plus(this.mat().tat_1, exit.mat().tat_1)));
  };
  protoOf(ExitTransition).equals = function (other) {
    var tmp;
    if (other instanceof ExitTransition) {
      tmp = other.mat().equals(this.mat());
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(ExitTransition).toString = function () {
    var tmp;
    if (this.equals(Companion_getInstance_8().uat_1)) {
      tmp = 'ExitTransition.None';
    } else if (this.equals(Companion_getInstance_8().vat_1)) {
      tmp = 'ExitTransition.KeepUntilTransitionsFinished';
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = this.mat();
      var tmp0_safe_receiver = $this$run.nat_1;
      var tmp_0 = 'ExitTransition: \nFade - ' + (tmp0_safe_receiver == null ? null : tmp0_safe_receiver.toString()) + ',\nSlide - ';
      var tmp1_safe_receiver = $this$run.oat_1;
      var tmp_1 = tmp_0 + (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.toString()) + ',\nShrink - ';
      var tmp2_safe_receiver = $this$run.pat_1;
      var tmp_2 = tmp_1 + (tmp2_safe_receiver == null ? null : tmp2_safe_receiver.toString()) + ',\nScale - ';
      var tmp3_safe_receiver = $this$run.qat_1;
      tmp = tmp_2 + (tmp3_safe_receiver == null ? null : tmp3_safe_receiver.toString()) + ',\nKeepUntilTransitionsFinished - ' + $this$run.sat_1;
    }
    return tmp;
  };
  protoOf(ExitTransition).hashCode = function () {
    return this.mat().hashCode();
  };
  function expandVertically(animationSpec, expandFrom, clip, initialHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_1()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_2().h6i_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialHeight === VOID) {
      tmp = expandVertically$lambda;
    } else {
      tmp = initialHeight;
    }
    initialHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(expandFrom);
    return expandIn(animationSpec, tmp_0, clip, expandVertically$lambda_0(initialHeight));
  }
  function shrinkVertically(animationSpec, shrinkTowards, clip, targetHeight) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_1()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_2().h6i_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetHeight === VOID) {
      tmp = shrinkVertically$lambda;
    } else {
      tmp = targetHeight;
    }
    targetHeight = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    var tmp_0 = toAlignment(shrinkTowards);
    return shrinkOut(animationSpec, tmp_0, clip, shrinkVertically$lambda_0(targetHeight));
  }
  function fadeIn(animationSpec, initialAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    initialAlpha = initialAlpha === VOID ? 0.0 : initialAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(new Fade(initialAlpha, animationSpec)));
  }
  function fadeOut(animationSpec, targetAlpha) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0) : animationSpec;
    targetAlpha = targetAlpha === VOID ? 0.0 : targetAlpha;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(new Fade(targetAlpha, animationSpec)));
  }
  function createModifier(_this__u8e3s4, enter, exit, trackActiveEnterExit, isEnabled, label, $composer, $changed, $default) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var trackActiveEnterExit_0 = trackActiveEnterExit;
    var isEnabled_0 = {_v: isEnabled};
    var $composer_0 = $composer;
    if (!(($default & 4) === 0))
      trackActiveEnterExit_0 = true;
    if (!(($default & 8) === 0)) {
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp;
      if (false || it === Companion_getInstance().f1y_1) {
        var value = createModifier$lambda;
        $composer_0.f1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      isEnabled_0._v = tmp;
    }
    var tmp_0;
    if (trackActiveEnterExit_0) {
      $composer_0.m1y(-167965831);
      var tmp1_group = trackActiveEnter(_this__u8e3s4, enter, $composer_0, 14 & $changed | 112 & $changed);
      $composer_0.n1y();
      tmp_0 = tmp1_group;
    } else {
      $composer_0.m1y(-167964673);
      $composer_0.n1y();
      tmp_0 = enter;
    }
    var activeEnter = tmp_0;
    var tmp_1;
    if (trackActiveEnterExit_0) {
      $composer_0.m1y(-167962954);
      var tmp2_group = trackActiveExit(_this__u8e3s4, exit, $composer_0, 14 & $changed | 112 & $changed >> 3);
      $composer_0.n1y();
      tmp_1 = tmp2_group;
    } else {
      $composer_0.m1y(-167961890);
      $composer_0.n1y();
      tmp_1 = exit;
    }
    var activeExit = tmp_1;
    var shouldAnimateVeil = !(activeEnter.mat().rat_1 == null) || !(activeExit.mat().rat_1 == null);
    var shouldAnimateSlide = !(activeEnter.mat().oat_1 == null) || !(activeExit.mat().oat_1 == null);
    var shouldAnimateSizeChange = !(activeEnter.mat().pat_1 == null) || !(activeExit.mat().pat_1 == null);
    var tmp_2;
    if (shouldAnimateSlide) {
      $composer_0.m1y(-911488127);
      var tmp_3 = get_VectorConverter(Companion_getInstance_3());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.e1z();
      var tmp_4;
      if (false || it_0 === Companion_getInstance().f1y_1) {
        var value_0 = label + ' slide';
        $composer_0.f1z(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp$ret$4 = tmp_4;
      var tmp3_group = createDeferredAnimation(_this__u8e3s4, tmp_3, tmp$ret$4, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.n1y();
      tmp_2 = tmp3_group;
    } else {
      $composer_0.m1y(-911382324);
      $composer_0.n1y();
      tmp_2 = null;
    }
    var slideAnimation = tmp_2;
    var tmp_5;
    if (shouldAnimateSizeChange) {
      $composer_0.m1y(-911290533);
      var tmp_6 = get_VectorConverter_0(Companion_getInstance_1());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_1 = $composer_0.e1z();
      var tmp_7;
      if (false || it_1 === Companion_getInstance().f1y_1) {
        var value_1 = label + ' shrink/expand';
        $composer_0.f1z(value_1);
        tmp_7 = value_1;
      } else {
        tmp_7 = it_1;
      }
      var tmp$ret$8 = tmp_7;
      var tmp4_group = createDeferredAnimation(_this__u8e3s4, tmp_6, tmp$ret$8, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.n1y();
      tmp_5 = tmp4_group;
    } else {
      $composer_0.m1y(-911179709);
      $composer_0.n1y();
      tmp_5 = null;
    }
    var sizeAnimation = tmp_5;
    var tmp_8;
    if (shouldAnimateSizeChange) {
      $composer_0.m1y(-911106083);
      var tmp_9 = get_VectorConverter(Companion_getInstance_3());
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_2 = $composer_0.e1z();
      var tmp_10;
      if (false || it_2 === Companion_getInstance().f1y_1) {
        var value_2 = label + ' InterruptionHandlingOffset';
        $composer_0.f1z(value_2);
        tmp_10 = value_2;
      } else {
        tmp_10 = it_2;
      }
      var tmp$ret$12 = tmp_10;
      var tmp5_group = createDeferredAnimation(_this__u8e3s4, tmp_9, tmp$ret$12, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.n1y();
      tmp_8 = tmp5_group;
    } else {
      $composer_0.m1y(-910935677);
      $composer_0.n1y();
      tmp_8 = null;
    }
    var offsetAnimation = tmp_8;
    var tmp_11;
    var tmp_12;
    var tmp0_safe_receiver = activeEnter.mat().pat_1;
    if ((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.zat_1) === false) {
      tmp_12 = true;
    } else {
      var tmp1_safe_receiver = activeExit.mat().pat_1;
      tmp_12 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zat_1) === false;
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      tmp_11 = !shouldAnimateSizeChange;
    }
    var disableClip = tmp_11;
    var tmp2_safe_receiver = activeEnter.mat().rat_1;
    var tmp3_safe_receiver = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.aau_1;
    var tmp_13;
    var tmp_14 = tmp3_safe_receiver;
    if ((tmp_14 == null ? null : new Color_0(tmp_14)) == null) {
      tmp_13 = null;
    } else {
      tmp_13 = _Color___get_colorSpace__impl__jqqozk(tmp3_safe_receiver);
    }
    var tmp4_elvis_lhs = tmp_13;
    var tmp_15;
    if (tmp4_elvis_lhs == null) {
      var tmp5_safe_receiver = activeEnter.mat().rat_1;
      var tmp6_safe_receiver = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.bau_1;
      var tmp_16;
      var tmp_17 = tmp6_safe_receiver;
      if ((tmp_17 == null ? null : new Color_0(tmp_17)) == null) {
        tmp_16 = null;
      } else {
        tmp_16 = _Color___get_colorSpace__impl__jqqozk(tmp6_safe_receiver);
      }
      tmp_15 = tmp_16;
    } else {
      tmp_15 = tmp4_elvis_lhs;
    }
    var tmp7_elvis_lhs = tmp_15;
    var tmp_18;
    if (tmp7_elvis_lhs == null) {
      var tmp8_safe_receiver = activeExit.mat().rat_1;
      var tmp9_safe_receiver = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.aau_1;
      var tmp_19;
      var tmp_20 = tmp9_safe_receiver;
      if ((tmp_20 == null ? null : new Color_0(tmp_20)) == null) {
        tmp_19 = null;
      } else {
        tmp_19 = _Color___get_colorSpace__impl__jqqozk(tmp9_safe_receiver);
      }
      tmp_18 = tmp_19;
    } else {
      tmp_18 = tmp7_elvis_lhs;
    }
    var tmp10_elvis_lhs = tmp_18;
    var tmp_21;
    if (tmp10_elvis_lhs == null) {
      var tmp11_safe_receiver = activeExit.mat().rat_1;
      var tmp12_safe_receiver = tmp11_safe_receiver == null ? null : tmp11_safe_receiver.bau_1;
      var tmp_22;
      var tmp_23 = tmp12_safe_receiver;
      if ((tmp_23 == null ? null : new Color_0(tmp_23)) == null) {
        tmp_22 = null;
      } else {
        tmp_22 = _Color___get_colorSpace__impl__jqqozk(tmp12_safe_receiver);
      }
      tmp_21 = tmp_22;
    } else {
      tmp_21 = tmp10_elvis_lhs;
    }
    var tmp13_elvis_lhs = tmp_21;
    var colorSpace = tmp13_elvis_lhs == null ? ColorSpaces_getInstance().m50_1 : tmp13_elvis_lhs;
    var tmp_24;
    if (shouldAnimateVeil) {
      $composer_0.m1y(-910409203);
      var tmp_25 = get_VectorConverter_2(Companion_getInstance_4())(colorSpace);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_3 = $composer_0.e1z();
      var tmp_26;
      if (false || it_3 === Companion_getInstance().f1y_1) {
        var value_3 = label + ' veil';
        $composer_0.f1z(value_3);
        tmp_26 = value_3;
      } else {
        tmp_26 = it_3;
      }
      var tmp$ret$16 = tmp_26;
      var veilAnimation = createDeferredAnimation(_this__u8e3s4, tmp_25, tmp$ret$16, $composer_0, 384 | 14 & $changed, 0);
      var tmp6_group = new VeilModifierElement(_this__u8e3s4, veilAnimation, activeEnter, activeExit);
      $composer_0.n1y();
      tmp_24 = tmp6_group;
    } else {
      $composer_0.m1y(-910130296);
      $composer_0.n1y();
      tmp_24 = Companion_instance;
    }
    var veilModifierElement = tmp_24;
    var tmp14_safe_receiver = activeEnter.mat().rat_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.dau_1;
    var tmp_27;
    if (tmp15_elvis_lhs == null) {
      var tmp16_safe_receiver = activeExit.mat().rat_1;
      tmp_27 = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.dau_1;
    } else {
      tmp_27 = tmp15_elvis_lhs;
    }
    var tmp17_elvis_lhs = tmp_27;
    var shouldVeilMatchParentSize = tmp17_elvis_lhs == null ? false : tmp17_elvis_lhs;
    var graphicsLayerBlock = createGraphicsLayerBlock(_this__u8e3s4, activeEnter, activeExit, label, $composer_0, 14 & $changed | 7168 & $changed >> 6);
    var tmp_28 = shouldVeilMatchParentSize ? veilModifierElement : Companion_instance;
    var tmp_29 = Companion_instance;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!($composer_0.h1z(disableClip) | (($changed & 57344 ^ 24576) > 16384 && $composer_0.g1z(isEnabled_0._v) || ($changed & 24576) === 16384));
    // Inline function 'kotlin.let' call
    var it_4 = $composer_0.e1z();
    var tmp_30;
    if (invalid || it_4 === Companion_getInstance().f1y_1) {
      var value_4 = createModifier$lambda_0(disableClip, isEnabled_0);
      $composer_0.f1z(value_4);
      tmp_30 = value_4;
    } else {
      tmp_30 = it_4;
    }
    var tmp$ret$20 = tmp_30;
    return tmp_28.e6j(graphicsLayer(tmp_29, tmp$ret$20)).e6j(new EnterExitTransitionElement(_this__u8e3s4, sizeAnimation, offsetAnimation, slideAnimation, activeEnter, activeExit, isEnabled_0._v, graphicsLayerBlock)).e6j(!shouldVeilMatchParentSize ? veilModifierElement : Companion_instance);
  }
  function trackActiveEnter(_this__u8e3s4, enter, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.g1z(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp;
    if (invalid || it === Companion_getInstance().f1y_1) {
      var value = mutableStateOf(enter);
      $composer_0.f1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var activeEnter$delegate = tmp;
    if (_this__u8e3s4.i6f().equals(_this__u8e3s4.b6f()) && _this__u8e3s4.i6f().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.iao()) {
        trackActiveEnter$lambda_0(activeEnter$delegate, enter);
      } else {
        trackActiveEnter$lambda_0(activeEnter$delegate, Companion_getInstance_7().lat_1);
      }
    } else if (_this__u8e3s4.b6f().equals(EnterExitState_Visible_getInstance())) {
      trackActiveEnter$lambda_0(activeEnter$delegate, trackActiveEnter$lambda(activeEnter$delegate).cas(enter));
    }
    return trackActiveEnter$lambda(activeEnter$delegate);
  }
  function trackActiveExit(_this__u8e3s4, exit, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 14 ^ 6) > 4 && $composer_0.g1z(_this__u8e3s4) || ($changed & 6) === 4;
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp;
    if (invalid || it === Companion_getInstance().f1y_1) {
      var value = mutableStateOf(exit);
      $composer_0.f1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var activeExit$delegate = tmp;
    if (_this__u8e3s4.i6f().equals(_this__u8e3s4.b6f()) && _this__u8e3s4.i6f().equals(EnterExitState_Visible_getInstance())) {
      if (_this__u8e3s4.iao()) {
        trackActiveExit$lambda_0(activeExit$delegate, exit);
      } else {
        trackActiveExit$lambda_0(activeExit$delegate, Companion_getInstance_8().uat_1);
      }
    } else if (!_this__u8e3s4.b6f().equals(EnterExitState_Visible_getInstance())) {
      trackActiveExit$lambda_0(activeExit$delegate, trackActiveExit$lambda(activeExit$delegate).das(exit));
    }
    return trackActiveExit$lambda(activeExit$delegate);
  }
  function TransitionData(fade, slide, changeSize, scale, veil, hold, effectsMap) {
    fade = fade === VOID ? null : fade;
    slide = slide === VOID ? null : slide;
    changeSize = changeSize === VOID ? null : changeSize;
    scale = scale === VOID ? null : scale;
    veil = veil === VOID ? null : veil;
    hold = hold === VOID ? false : hold;
    effectsMap = effectsMap === VOID ? emptyMap() : effectsMap;
    this.nat_1 = fade;
    this.oat_1 = slide;
    this.pat_1 = changeSize;
    this.qat_1 = scale;
    this.rat_1 = veil;
    this.sat_1 = hold;
    this.tat_1 = effectsMap;
  }
  protoOf(TransitionData).toString = function () {
    return 'TransitionData(fade=' + toString(this.nat_1) + ', slide=' + toString(this.oat_1) + ', changeSize=' + toString(this.pat_1) + ', scale=' + toString(this.qat_1) + ', veil=' + toString(this.rat_1) + ', hold=' + this.sat_1 + ', effectsMap=' + toString_0(this.tat_1) + ')';
  };
  protoOf(TransitionData).hashCode = function () {
    var result = this.nat_1 == null ? 0 : this.nat_1.hashCode();
    result = imul(result, 31) + (this.oat_1 == null ? 0 : this.oat_1.hashCode()) | 0;
    result = imul(result, 31) + (this.pat_1 == null ? 0 : this.pat_1.hashCode()) | 0;
    result = imul(result, 31) + (this.qat_1 == null ? 0 : this.qat_1.hashCode()) | 0;
    result = imul(result, 31) + (this.rat_1 == null ? 0 : this.rat_1.hashCode()) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.sat_1) | 0;
    result = imul(result, 31) + hashCode(this.tat_1) | 0;
    return result;
  };
  protoOf(TransitionData).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TransitionData))
      return false;
    if (!equals(this.nat_1, other.nat_1))
      return false;
    if (!equals(this.oat_1, other.oat_1))
      return false;
    if (!equals(this.pat_1, other.pat_1))
      return false;
    if (!equals(this.qat_1, other.qat_1))
      return false;
    if (!equals(this.rat_1, other.rat_1))
      return false;
    if (!(this.sat_1 === other.sat_1))
      return false;
    if (!equals(this.tat_1, other.tat_1))
      return false;
    return true;
  };
  function EnterTransitionImpl(data) {
    EnterTransition.call(this);
    this.eau_1 = data;
  }
  protoOf(EnterTransitionImpl).mat = function () {
    return this.eau_1;
  };
  function Fade(alpha, animationSpec) {
    this.fau_1 = alpha;
    this.gau_1 = animationSpec;
  }
  protoOf(Fade).toString = function () {
    return 'Fade(alpha=' + this.fau_1 + ', animationSpec=' + toString_0(this.gau_1) + ')';
  };
  protoOf(Fade).hashCode = function () {
    var result = getNumberHashCode(this.fau_1);
    result = imul(result, 31) + hashCode(this.gau_1) | 0;
    return result;
  };
  protoOf(Fade).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Fade))
      return false;
    if (!equals(this.fau_1, other.fau_1))
      return false;
    if (!equals(this.gau_1, other.gau_1))
      return false;
    return true;
  };
  function ChangeSize$_init_$lambda_705jnq(it) {
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
    return new IntSize(tmp$ret$0);
  }
  function ChangeSize(alignment, size, animationSpec, clip) {
    var tmp;
    if (size === VOID) {
      tmp = ChangeSize$_init_$lambda_705jnq;
    } else {
      tmp = size;
    }
    size = tmp;
    clip = clip === VOID ? true : clip;
    this.wat_1 = alignment;
    this.xat_1 = size;
    this.yat_1 = animationSpec;
    this.zat_1 = clip;
  }
  protoOf(ChangeSize).toString = function () {
    return 'ChangeSize(alignment=' + toString_0(this.wat_1) + ', size=' + toString_0(this.xat_1) + ', animationSpec=' + toString_0(this.yat_1) + ', clip=' + this.zat_1 + ')';
  };
  protoOf(ChangeSize).hashCode = function () {
    var result = hashCode(this.wat_1);
    result = imul(result, 31) + hashCode(this.xat_1) | 0;
    result = imul(result, 31) + hashCode(this.yat_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.zat_1) | 0;
    return result;
  };
  protoOf(ChangeSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChangeSize))
      return false;
    if (!equals(this.wat_1, other.wat_1))
      return false;
    if (!equals(this.xat_1, other.xat_1))
      return false;
    if (!equals(this.yat_1, other.yat_1))
      return false;
    if (!(this.zat_1 === other.zat_1))
      return false;
    return true;
  };
  function ExitTransitionImpl(data) {
    ExitTransition.call(this);
    this.hau_1 = data;
  }
  protoOf(ExitTransitionImpl).mat = function () {
    return this.hau_1;
  };
  function expandIn(animationSpec, expandFrom, clip, initialSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_1()))) : animationSpec;
    expandFrom = expandFrom === VOID ? Companion_getInstance_2().e6i_1 : expandFrom;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (initialSize === VOID) {
      tmp = expandIn$lambda;
    } else {
      tmp = initialSize;
    }
    initialSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new EnterTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(expandFrom, initialSize, animationSpec, clip)));
  }
  function toAlignment(_this__u8e3s4) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return equals(_this__u8e3s4, Companion_getInstance_2().f6i_1) ? Companion_getInstance_2().x6h_1 : equals(_this__u8e3s4, Companion_getInstance_2().h6i_1) ? Companion_getInstance_2().d6i_1 : Companion_getInstance_2().a6i_1;
  }
  function shrinkOut(animationSpec, shrinkTowards, clip, targetSize) {
    animationSpec = animationSpec === VOID ? spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_1()))) : animationSpec;
    shrinkTowards = shrinkTowards === VOID ? Companion_getInstance_2().e6i_1 : shrinkTowards;
    clip = clip === VOID ? true : clip;
    var tmp;
    if (targetSize === VOID) {
      tmp = shrinkOut$lambda;
    } else {
      tmp = targetSize;
    }
    targetSize = tmp;
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new ExitTransitionImpl(new TransitionData(VOID, VOID, new ChangeSize(shrinkTowards, targetSize, animationSpec, clip)));
  }
  function VeilModifierElement(transition, veilAnimation, enter, exit) {
    ModifierNodeElement.call(this);
    this.jau_1 = transition;
    this.kau_1 = veilAnimation;
    this.lau_1 = enter;
    this.mau_1 = exit;
  }
  protoOf(VeilModifierElement).f2b = function () {
    return new VeilModifierNode(this.jau_1, this.kau_1, this.lau_1, this.mau_1);
  };
  protoOf(VeilModifierElement).nau = function (node) {
    node.cav_1 = this.jau_1;
    node.dav_1 = this.kau_1;
    node.eav_1 = this.lau_1;
    node.fav_1 = this.mau_1;
  };
  protoOf(VeilModifierElement).h6s = function (node) {
    return this.nau(node instanceof VeilModifierNode ? node : THROW_CCE());
  };
  protoOf(VeilModifierElement).toString = function () {
    return 'VeilModifierElement(transition=' + this.jau_1.toString() + ', veilAnimation=' + toString_0(this.kau_1) + ', enter=' + this.lau_1.toString() + ', exit=' + this.mau_1.toString() + ')';
  };
  protoOf(VeilModifierElement).hashCode = function () {
    var result = hashCode(this.jau_1);
    result = imul(result, 31) + hashCode(this.kau_1) | 0;
    result = imul(result, 31) + this.lau_1.hashCode() | 0;
    result = imul(result, 31) + this.mau_1.hashCode() | 0;
    return result;
  };
  protoOf(VeilModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VeilModifierElement))
      return false;
    if (!equals(this.jau_1, other.jau_1))
      return false;
    if (!equals(this.kau_1, other.kau_1))
      return false;
    if (!this.lau_1.equals(other.lau_1))
      return false;
    if (!this.mau_1.equals(other.mau_1))
      return false;
    return true;
  };
  function GraphicsLayerBlockForEnterExit() {
  }
  function createGraphicsLayerBlock(_this__u8e3s4, enter, exit, label, $composer, $changed) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    var $composer_0 = $composer;
    var shouldAnimateAlpha = !(enter.mat().nat_1 == null) || !(exit.mat().nat_1 == null);
    var shouldAnimateScale = !(enter.mat().qat_1 == null) || !(exit.mat().qat_1 == null);
    var tmp;
    if (shouldAnimateAlpha) {
      $composer_0.m1y(-703879421);
      var tmp_0 = get_VectorConverter_1(FloatCompanionObject_instance);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp_1;
      if (false || it === Companion_getInstance().f1y_1) {
        var value = label + ' alpha';
        $composer_0.f1z(value);
        tmp_1 = value;
      } else {
        tmp_1 = it;
      }
      var tmp$ret$0 = tmp_1;
      var tmp1_group = createDeferredAnimation(_this__u8e3s4, tmp_0, tmp$ret$0, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.n1y();
      tmp = tmp1_group;
    } else {
      $composer_0.m1y(-703709976);
      $composer_0.n1y();
      tmp = null;
    }
    var alphaAnimation = tmp;
    var tmp_2;
    if (shouldAnimateScale) {
      $composer_0.m1y(-703642333);
      var tmp_3 = get_VectorConverter_1(FloatCompanionObject_instance);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_0.e1z();
      var tmp_4;
      if (false || it_0 === Companion_getInstance().f1y_1) {
        var value_0 = label + ' scale';
        $composer_0.f1z(value_0);
        tmp_4 = value_0;
      } else {
        tmp_4 = it_0;
      }
      var tmp$ret$4 = tmp_4;
      var tmp2_group = createDeferredAnimation(_this__u8e3s4, tmp_3, tmp$ret$4, $composer_0, 384 | 14 & $changed, 0);
      $composer_0.n1y();
      tmp_2 = tmp2_group;
    } else {
      $composer_0.m1y(-703472888);
      $composer_0.n1y();
      tmp_2 = null;
    }
    var scaleAnimation = tmp_2;
    var tmp_5;
    if (shouldAnimateScale) {
      $composer_0.m1y(-703395232);
      var tmp3_group = createDeferredAnimation(_this__u8e3s4, get_TransformOriginVectorConverter(), 'TransformOriginInterruptionHandling', $composer_0, 384 | 14 & $changed, 0);
      $composer_0.n1y();
      tmp_5 = tmp3_group;
    } else {
      $composer_0.m1y(-703222904);
      $composer_0.n1y();
      tmp_5 = null;
    }
    var transformOriginAnimation = tmp_5;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = !!(!!(!!(!!(!!($composer_0.l1z(alphaAnimation) | (($changed & 112 ^ 48) > 32 && $composer_0.g1z(enter) || ($changed & 48) === 32)) | (($changed & 896 ^ 384) > 256 && $composer_0.g1z(exit) || ($changed & 384) === 256)) | $composer_0.l1z(scaleAnimation)) | (($changed & 14 ^ 6) > 4 && $composer_0.g1z(_this__u8e3s4) || ($changed & 6) === 4)) | $composer_0.l1z(transformOriginAnimation));
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.e1z();
    var tmp_6;
    if (invalid || it_1 === Companion_getInstance().f1y_1) {
      var tmp_7 = createGraphicsLayerBlock$lambda(alphaAnimation, scaleAnimation, _this__u8e3s4, enter, exit, transformOriginAnimation);
      var value_1 = new sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(tmp_7);
      $composer_0.f1z(value_1);
      tmp_6 = value_1;
    } else {
      tmp_6 = it_1;
    }
    return tmp_6;
  }
  function EnterExitTransitionElement(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    ModifierNodeElement.call(this);
    this.iav_1 = transition;
    this.jav_1 = sizeAnimation;
    this.kav_1 = offsetAnimation;
    this.lav_1 = slideAnimation;
    this.mav_1 = enter;
    this.nav_1 = exit;
    this.oav_1 = isEnabled;
    this.pav_1 = graphicsLayerBlock;
  }
  protoOf(EnterExitTransitionElement).f2b = function () {
    return new EnterExitTransitionModifierNode(this.iav_1, this.jav_1, this.kav_1, this.lav_1, this.mav_1, this.nav_1, this.oav_1, this.pav_1);
  };
  protoOf(EnterExitTransitionElement).qav = function (node) {
    node.faw_1 = this.iav_1;
    node.gaw_1 = this.jav_1;
    node.haw_1 = this.kav_1;
    node.iaw_1 = this.lav_1;
    node.jaw_1 = this.mav_1;
    node.kaw_1 = this.nav_1;
    node.law_1 = this.oav_1;
    node.maw_1 = this.pav_1;
  };
  protoOf(EnterExitTransitionElement).h6s = function (node) {
    return this.qav(node instanceof EnterExitTransitionModifierNode ? node : THROW_CCE());
  };
  protoOf(EnterExitTransitionElement).hashCode = function () {
    var tmp = imul(hashCode(this.iav_1), 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.jav_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var tmp$ret$0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp_0 = imul(tmp + tmp$ret$0 | 0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.kav_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    var tmp$ret$1 = tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0;
    var tmp_1 = imul(tmp_0 + tmp$ret$1 | 0, 31);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.lav_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    var tmp$ret$2 = tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1;
    return imul(imul(imul(imul(tmp_1 + tmp$ret$2 | 0, 31) + this.mav_1.hashCode() | 0, 31) + this.nav_1.hashCode() | 0, 31) + hashCode(this.oav_1) | 0, 31) + hashCode(this.pav_1) | 0;
  };
  protoOf(EnterExitTransitionElement).equals = function (other) {
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (other instanceof EnterExitTransitionElement) {
      tmp_6 = equals(other.iav_1, this.iav_1);
    } else {
      tmp_6 = false;
    }
    if (tmp_6) {
      tmp_5 = equals(other.jav_1, this.jav_1);
    } else {
      tmp_5 = false;
    }
    if (tmp_5) {
      tmp_4 = equals(other.kav_1, this.kav_1);
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      tmp_3 = equals(other.lav_1, this.lav_1);
    } else {
      tmp_3 = false;
    }
    if (tmp_3) {
      tmp_2 = other.mav_1.equals(this.mav_1);
    } else {
      tmp_2 = false;
    }
    if (tmp_2) {
      tmp_1 = other.nav_1.equals(this.nav_1);
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      tmp_0 = other.oav_1 === this.oav_1;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = equals(other.pav_1, this.pav_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  function VeilModifierNode$draw$lambda(this$0) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.tao(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.eav_1.mat().rat_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cau_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultColorAnimationSpec() : tmp1_elvis_lhs;
      } else if ($this$animate.tao(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.fav_1.mat().rat_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.cau_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultColorAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultColorAnimationSpec();
      }
      return tmp;
    };
  }
  function VeilModifierNode$draw$lambda_0(this$0) {
    return function (it) {
      var tmp;
      switch (it.i2_1) {
        case 1:
          var tmp1_safe_receiver = this$0.eav_1.mat().rat_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.bau_1;
          var tmp_0;
          var tmp_1 = tmp2_elvis_lhs;
          if ((tmp_1 == null ? null : new Color_0(tmp_1)) == null) {
            var tmp3_safe_receiver = this$0.fav_1.mat().rat_1;
            tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.aau_1;
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }

          var tmp4_elvis_lhs = tmp_0;
          var tmp_2;
          var tmp_3 = tmp4_elvis_lhs;
          if ((tmp_3 == null ? null : new Color_0(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_4().s4x_1;
          } else {
            tmp_2 = tmp4_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        case 0:
          var tmp5_safe_receiver = this$0.eav_1.mat().rat_1;
          var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.aau_1;
          var tmp_4;
          var tmp_5 = tmp6_elvis_lhs;
          if ((tmp_5 == null ? null : new Color_0(tmp_5)) == null) {
            tmp_4 = Companion_getInstance_4().s4x_1;
          } else {
            tmp_4 = tmp6_elvis_lhs;
          }

          tmp = tmp_4;
          break;
        case 2:
          var tmp7_safe_receiver = this$0.fav_1.mat().rat_1;
          var tmp8_elvis_lhs = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.bau_1;
          var tmp_6;
          var tmp_7 = tmp8_elvis_lhs;
          if ((tmp_7 == null ? null : new Color_0(tmp_7)) == null) {
            tmp_6 = Companion_getInstance_4().s4x_1;
          } else {
            tmp_6 = tmp8_elvis_lhs;
          }

          tmp = tmp_6;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return new Color_0(tmp);
    };
  }
  function VeilModifierNode(transition, veilAnimation, enter, exit) {
    Node.call(this);
    this.cav_1 = transition;
    this.dav_1 = veilAnimation;
    this.eav_1 = enter;
    this.fav_1 = exit;
  }
  protoOf(VeilModifierNode).d6o = function (_this__u8e3s4) {
    _this__u8e3s4.t6s();
    var tmp = this.dav_1;
    var tmp_0 = VeilModifierNode$draw$lambda(this);
    var veilColor = tmp.uao(tmp_0, VeilModifierNode$draw$lambda_0(this));
    if (!(_Color___get_alpha__impl__wcfyv1(veilColor.r1().v4y_1) === 0.0)) {
      var tmp0_elvis_lhs = this.eav_1.mat().rat_1;
      var veil = tmp0_elvis_lhs == null ? this.fav_1.mat().rat_1 : tmp0_elvis_lhs;
      if ((veil == null ? null : veil.dau_1) === true) {
        var layoutCoordinates = requireLayoutCoordinates(this);
        var tmp1_safe_receiver = layoutCoordinates.r7r();
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.p6q();
        var tmp_1;
        var tmp_2 = tmp2_safe_receiver;
        if ((tmp_2 == null ? null : new IntSize(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          var tmp_3 = tmp2_safe_receiver;
          // Inline function 'kotlin.let' call
          var it = (tmp_3 == null ? null : new IntSize(tmp_3)).o48_1;
          // Inline function 'androidx.compose.ui.unit.IntSize.width' call
          // Inline function 'androidx.compose.ui.util.unpackInt1' call
          var value = _IntSize___get_packedValue__impl__uho7jf(it);
          var tmp0 = convertToInt(shiftRight(value, 32));
          // Inline function 'androidx.compose.ui.unit.IntSize.height' call
          // Inline function 'androidx.compose.ui.util.unpackInt2' call
          var value_0 = _IntSize___get_packedValue__impl__uho7jf(it);
          // Inline function 'androidx.compose.ui.geometry.Size' call
          // Inline function 'androidx.compose.ui.util.packFloats' call
          var val2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
          var v1 = fromInt(toRawBits(tmp0));
          var v2 = fromInt(toRawBits(val2));
          var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
          tmp_1 = _Size___init__impl__aywn0g(tmp$ret$7);
        }
        var tmp3_elvis_lhs = tmp_1;
        var tmp_4;
        var tmp_5 = tmp3_elvis_lhs;
        if ((tmp_5 == null ? null : new Size(tmp_5)) == null) {
          tmp_4 = Companion_getInstance_5().d47_1;
        } else {
          tmp_4 = tmp3_elvis_lhs;
        }
        var parentSize = tmp_4;
        var offsetInParent = positionInParent(layoutCoordinates);
        var tmp4_color = veilColor.r1().v4y_1;
        // Inline function 'androidx.compose.ui.geometry.Offset.unaryMinus' call
        var tmp5_topLeft = _Offset___init__impl__c168vi(bitwiseXor(_Offset___get_packedValue__impl__xh2k8q(offsetInParent), new Long(-2147483648, -2147483648)));
        _this__u8e3s4.f5b(tmp4_color, tmp5_topLeft, parentSize);
      } else {
        _this__u8e3s4.f5b(veilColor.r1().v4y_1);
      }
    }
  };
  function _set_lookaheadConstraints__uusx37($this, value) {
    $this.naw_1 = true;
    $this.paw_1 = value;
  }
  function EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.tao(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.jaw_1.mat().pat_1;
        tmp = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.yat_1;
      } else if (_this__u8e3s4.tao(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp1_safe_receiver = this$0.kaw_1.mat().pat_1;
        tmp = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.yat_1;
      } else {
        tmp = get_DefaultSizeAnimationSpec();
      }
      var tmp2_elvis_lhs = tmp;
      return tmp2_elvis_lhs == null ? get_DefaultSizeAnimationSpec() : tmp2_elvis_lhs;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.q7t($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_0(this$0, $target) {
    return function (it) {
      return new IntSize(this$0.taw(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_1($this$animate) {
    return get_DefaultOffsetAnimationSpec();
  }
  function EnterExitTransitionModifierNode$measure$lambda_2(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.uaw(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_3(this$0, $target) {
    return function (it) {
      return new IntOffset(this$0.vaw(it, $target));
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_4($placeable, $offset, $offsetDelta, $layerBlock) {
    return function ($this$layout) {
      $this$layout.v7t($placeable, _IntOffset___get_x__impl__qiqr5o($offset) + _IntOffset___get_x__impl__qiqr5o($offsetDelta) | 0, _IntOffset___get_y__impl__2avpwj($offset) + _IntOffset___get_y__impl__2avpwj($offsetDelta) | 0, 0.0, $layerBlock);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$measure$lambda_5($$this$run) {
    return function ($this$layout) {
      $this$layout.q7t($$this$run, 0, 0);
      return Unit_instance;
    };
  }
  function EnterExitTransitionModifierNode$slideSpec$lambda(this$0) {
    return function (_this__u8e3s4) {
      var tmp;
      if (_this__u8e3s4.tao(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = this$0.jaw_1.mat().oat_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xaw_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp1_elvis_lhs;
      } else if (_this__u8e3s4.tao(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = this$0.kaw_1.mat().oat_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.xaw_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultOffsetAnimationSpec() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultOffsetAnimationSpec();
      }
      return tmp;
    };
  }
  function EnterExitTransitionModifierNode(transition, sizeAnimation, offsetAnimation, slideAnimation, enter, exit, isEnabled, graphicsLayerBlock) {
    LayoutModifierNodeWithPassThroughIntrinsics.call(this);
    this.faw_1 = transition;
    this.gaw_1 = sizeAnimation;
    this.haw_1 = offsetAnimation;
    this.iaw_1 = slideAnimation;
    this.jaw_1 = enter;
    this.kaw_1 = exit;
    this.law_1 = isEnabled;
    this.maw_1 = graphicsLayerBlock;
    this.naw_1 = false;
    this.oaw_1 = get_InvalidSize();
    this.paw_1 = Constraints();
    this.qaw_1 = null;
    var tmp = this;
    tmp.raw_1 = EnterExitTransitionModifierNode$sizeTransitionSpec$lambda(this);
    var tmp_0 = this;
    tmp_0.saw_1 = EnterExitTransitionModifierNode$slideSpec$lambda(this);
  }
  protoOf(EnterExitTransitionModifierNode).e4p = function () {
    // Inline function 'kotlin.with' call
    var tmp;
    if (this.faw_1.jao().tao(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
      var tmp0_safe_receiver = this.jaw_1.mat().pat_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.wat_1;
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        var tmp2_safe_receiver = this.kaw_1.mat().pat_1;
        tmp_0 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.wat_1;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      var tmp3_safe_receiver = this.kaw_1.mat().pat_1;
      var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.wat_1;
      var tmp_1;
      if (tmp4_elvis_lhs == null) {
        var tmp5_safe_receiver = this.jaw_1.mat().pat_1;
        tmp_1 = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.wat_1;
      } else {
        tmp_1 = tmp4_elvis_lhs;
      }
      tmp = tmp_1;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).taw = function (targetState, fullSize) {
    var tmp;
    switch (targetState.i2_1) {
      case 1:
        tmp = fullSize;
        break;
      case 0:
        var tmp1_safe_receiver = this.jaw_1.mat().pat_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.xat_1;
        var tmp_0;
        if (tmp2_safe_receiver == null) {
          tmp_0 = null;
        } else {
          var tmp_1 = tmp2_safe_receiver(new IntSize(fullSize));
          tmp_0 = tmp_1 == null ? null : tmp_1.o48_1;
        }

        var tmp3_elvis_lhs = tmp_0;
        var tmp_2;
        var tmp_3 = tmp3_elvis_lhs;
        if ((tmp_3 == null ? null : new IntSize(tmp_3)) == null) {
          tmp_2 = fullSize;
        } else {
          tmp_2 = tmp3_elvis_lhs;
        }

        tmp = tmp_2;
        break;
      case 2:
        var tmp4_safe_receiver = this.kaw_1.mat().pat_1;
        var tmp5_safe_receiver = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.xat_1;
        var tmp_4;
        if (tmp5_safe_receiver == null) {
          tmp_4 = null;
        } else {
          var tmp_5 = tmp5_safe_receiver(new IntSize(fullSize));
          tmp_4 = tmp_5 == null ? null : tmp_5.o48_1;
        }

        var tmp6_elvis_lhs = tmp_4;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new IntSize(tmp_7)) == null) {
          tmp_6 = fullSize;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }

        tmp = tmp_6;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).g6k = function () {
    protoOf(LayoutModifierNodeWithPassThroughIntrinsics).g6k.call(this);
    this.naw_1 = false;
    this.oaw_1 = get_InvalidSize();
  };
  protoOf(EnterExitTransitionModifierNode).uaw = function (targetState, fullSize) {
    var tmp;
    if (this.qaw_1 == null) {
      tmp = Companion_getInstance_3().k48_1;
    } else if (this.e4p() == null) {
      tmp = Companion_getInstance_3().k48_1;
    } else if (equals(this.qaw_1, this.e4p())) {
      tmp = Companion_getInstance_3().k48_1;
    } else {
      var tmp_0;
      switch (targetState.i2_1) {
        case 1:
          tmp_0 = Companion_getInstance_3().k48_1;
          break;
        case 0:
          tmp_0 = Companion_getInstance_3().k48_1;
          break;
        case 2:
          var tmp1_safe_receiver = this.kaw_1.mat().pat_1;
          var tmp_1;
          if (tmp1_safe_receiver == null) {
            tmp_1 = null;
          } else {
            // Inline function 'kotlin.let' call
            var endSize = tmp1_safe_receiver.xat_1(new IntSize(fullSize)).o48_1;
            var targetOffset = ensureNotNull(this.e4p()).r6i(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            var currentOffset = ensureNotNull(this.qaw_1).r6i(fullSize, endSize, LayoutDirection_Ltr_getInstance());
            tmp_1 = IntOffset__minus_impl_4m69hb(targetOffset, currentOffset);
          }

          var tmp2_elvis_lhs = tmp_1;
          var tmp_2;
          var tmp_3 = tmp2_elvis_lhs;
          if ((tmp_3 == null ? null : new IntOffset(tmp_3)) == null) {
            tmp_2 = Companion_getInstance_3().k48_1;
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }

          tmp_0 = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(EnterExitTransitionModifierNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    if (this.faw_1.i6f().equals(this.faw_1.b6f())) {
      this.qaw_1 = null;
    } else if (this.qaw_1 == null) {
      var tmp = this;
      var tmp0_elvis_lhs = this.e4p();
      tmp.qaw_1 = tmp0_elvis_lhs == null ? Companion_getInstance_2().w6h_1 : tmp0_elvis_lhs;
    }
    if (_this__u8e3s4.m7r()) {
      var placeable = measurable.m6s(constraints);
      var tmp0 = placeable.n6s_1;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = placeable.o6s_1;
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var measuredSize = _IntSize___init__impl__emcjft(tmp$ret$1);
      this.oaw_1 = measuredSize;
      _set_lookaheadConstraints__uusx37(this, constraints);
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(measuredSize);
      var tmp_1 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      return _this__u8e3s4.s6s(tmp_0, tmp_1, VOID, EnterExitTransitionModifierNode$measure$lambda(placeable));
    } else if (this.law_1()) {
      var layerBlock = this.maw_1.gav();
      var placeable_0 = measurable.m6s(constraints);
      var tmp0_0 = placeable_0.n6s_1;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2_0 = placeable_0.o6s_1;
      var tmp$ret$7 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
      var measuredSize_0 = _IntSize___init__impl__emcjft(tmp$ret$7);
      var target = get_isValid(this.oaw_1) ? this.oaw_1 : measuredSize_0;
      var tmp1_safe_receiver = this.gaw_1;
      var tmp_2;
      if (tmp1_safe_receiver == null) {
        tmp_2 = null;
      } else {
        tmp_2 = tmp1_safe_receiver.uao(this.raw_1, EnterExitTransitionModifierNode$measure$lambda_0(this, target));
      }
      var animSize = tmp_2;
      var tmp_3;
      if (animSize == null) {
        tmp_3 = null;
      } else {
        var tmp_4 = animSize.r1();
        tmp_3 = tmp_4 == null ? null : tmp_4.o48_1;
      }
      var tmp3_elvis_lhs = tmp_3;
      var tmp_5;
      var tmp_6 = tmp3_elvis_lhs;
      if ((tmp_6 == null ? null : new IntSize(tmp_6)) == null) {
        tmp_5 = measuredSize_0;
      } else {
        tmp_5 = tmp3_elvis_lhs;
      }
      var currentSize = constrain(constraints, tmp_5);
      var tmp4_safe_receiver = this.haw_1;
      var tmp_7;
      if (tmp4_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = EnterExitTransitionModifierNode$measure$lambda_1;
        tmp_7 = tmp4_safe_receiver.uao(tmp_8, EnterExitTransitionModifierNode$measure$lambda_2(this, target));
      }
      var tmp5_safe_receiver = tmp_7;
      var tmp_9;
      if (tmp5_safe_receiver == null) {
        tmp_9 = null;
      } else {
        var tmp_10 = tmp5_safe_receiver.r1();
        tmp_9 = tmp_10 == null ? null : tmp_10.m48_1;
      }
      var tmp6_elvis_lhs = tmp_9;
      var tmp_11;
      var tmp_12 = tmp6_elvis_lhs;
      if ((tmp_12 == null ? null : new IntOffset(tmp_12)) == null) {
        tmp_11 = Companion_getInstance_3().k48_1;
      } else {
        tmp_11 = tmp6_elvis_lhs;
      }
      var offsetDelta = tmp_11;
      var tmp7_safe_receiver = this.iaw_1;
      var tmp_13;
      if (tmp7_safe_receiver == null) {
        tmp_13 = null;
      } else {
        tmp_13 = tmp7_safe_receiver.uao(this.saw_1, EnterExitTransitionModifierNode$measure$lambda_3(this, target));
      }
      var tmp8_safe_receiver = tmp_13;
      var tmp_14;
      if (tmp8_safe_receiver == null) {
        tmp_14 = null;
      } else {
        var tmp_15 = tmp8_safe_receiver.r1();
        tmp_14 = tmp_15 == null ? null : tmp_15.m48_1;
      }
      var tmp9_elvis_lhs = tmp_14;
      var tmp_16;
      var tmp_17 = tmp9_elvis_lhs;
      if ((tmp_17 == null ? null : new IntOffset(tmp_17)) == null) {
        tmp_16 = Companion_getInstance_3().k48_1;
      } else {
        tmp_16 = tmp9_elvis_lhs;
      }
      var slideOffset = tmp_16;
      var tmp10_safe_receiver = this.qaw_1;
      var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : tmp10_safe_receiver.r6i(target, currentSize, LayoutDirection_Ltr_getInstance());
      var tmp_18;
      var tmp_19 = tmp11_elvis_lhs;
      if ((tmp_19 == null ? null : new IntOffset(tmp_19)) == null) {
        tmp_18 = Companion_getInstance_3().k48_1;
      } else {
        tmp_18 = tmp11_elvis_lhs;
      }
      var offset = IntOffset__plus_impl_nqoa9b(tmp_18, slideOffset);
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_20 = convertToInt(shiftRight(value_1, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_2 = _IntSize___get_packedValue__impl__uho7jf(currentSize);
      var tmp_21 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      return _this__u8e3s4.s6s(tmp_20, tmp_21, VOID, EnterExitTransitionModifierNode$measure$lambda_4(placeable_0, offset, offsetDelta, layerBlock));
    } else {
      // Inline function 'kotlin.run' call
      var $this$run = measurable.m6s(constraints);
      var tmp_22 = $this$run.n6s_1;
      var tmp_23 = $this$run.o6s_1;
      return _this__u8e3s4.s6s(tmp_22, tmp_23, VOID, EnterExitTransitionModifierNode$measure$lambda_5($this$run));
    }
  };
  protoOf(EnterExitTransitionModifierNode).vaw = function (targetState, fullSize) {
    var tmp0_safe_receiver = this.jaw_1.mat().oat_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.waw_1;
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp_0 = tmp1_safe_receiver(new IntSize(fullSize));
      tmp = tmp_0 == null ? null : tmp_0.m48_1;
    }
    var tmp2_elvis_lhs = tmp;
    var tmp_1;
    var tmp_2 = tmp2_elvis_lhs;
    if ((tmp_2 == null ? null : new IntOffset(tmp_2)) == null) {
      tmp_1 = Companion_getInstance_3().k48_1;
    } else {
      tmp_1 = tmp2_elvis_lhs;
    }
    var preEnter = tmp_1;
    var tmp3_safe_receiver = this.kaw_1.mat().oat_1;
    var tmp4_safe_receiver = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.waw_1;
    var tmp_3;
    if (tmp4_safe_receiver == null) {
      tmp_3 = null;
    } else {
      var tmp_4 = tmp4_safe_receiver(new IntSize(fullSize));
      tmp_3 = tmp_4 == null ? null : tmp_4.m48_1;
    }
    var tmp5_elvis_lhs = tmp_3;
    var tmp_5;
    var tmp_6 = tmp5_elvis_lhs;
    if ((tmp_6 == null ? null : new IntOffset(tmp_6)) == null) {
      tmp_5 = Companion_getInstance_3().k48_1;
    } else {
      tmp_5 = tmp5_elvis_lhs;
    }
    var postExit = tmp_5;
    var tmp_7;
    switch (targetState.i2_1) {
      case 1:
        tmp_7 = Companion_getInstance_3().k48_1;
        break;
      case 0:
        tmp_7 = preEnter;
        break;
      case 2:
        tmp_7 = postExit;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_7;
  };
  function sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0(function_0) {
    this.yaw_1 = function_0;
  }
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).gav = function () {
    return this.yaw_1();
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).r2 = function () {
    return this.yaw_1;
  };
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, GraphicsLayerBlockForEnterExit) : false) {
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
  protoOf(sam$androidx_compose_animation_GraphicsLayerBlockForEnterExit$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function TransformOriginVectorConverter$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new AnimationVector2D(_TransformOrigin___get_pivotFractionX__impl__a9pmci(it.c75_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(it.c75_1));
  }
  function TransformOriginVectorConverter$lambda_0(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return new TransformOrigin_0(TransformOrigin(it.oah_1, it.pah_1));
  }
  function expandVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function expandVertically$lambda_0($initialHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.o48_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.o48_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $initialHeight(tmp$ret$2);
      var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$4 = _IntSize___init__impl__emcjft(tmp$ret$5);
      return new IntSize(tmp$ret$4);
    };
  }
  function shrinkVertically$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return 0;
  }
  function shrinkVertically$lambda_0($targetHeight) {
    return function (it) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = it.o48_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = it.o48_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var tmp$ret$2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $targetHeight(tmp$ret$2);
      var tmp$ret$5 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$4 = _IntSize___init__impl__emcjft(tmp$ret$5);
      return new IntSize(tmp$ret$4);
    };
  }
  function createModifier$lambda() {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return true;
  }
  function createModifier$lambda_0($disableClip, $isEnabled) {
    return function ($this$graphicsLayer) {
      $this$graphicsLayer.m4t(!$disableClip && $isEnabled._v());
      return Unit_instance;
    };
  }
  function trackActiveEnter$lambda($activeEnter$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    return $activeEnter$delegate.r1();
  }
  function trackActiveEnter$lambda_0($activeEnter$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeEnter', KMutableProperty0, true);
    $activeEnter$delegate.y1i(_set____db54di);
    return Unit_instance;
  }
  function trackActiveExit$lambda($activeExit$delegate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    return $activeExit$delegate.r1();
  }
  function trackActiveExit$lambda_0($activeExit$delegate, _set____db54di) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('activeExit', KMutableProperty0, true);
    $activeExit$delegate.y1i(_set____db54di);
    return Unit_instance;
  }
  function expandIn$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
    return new IntSize(tmp$ret$0);
  }
  function shrinkOut$lambda(it) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
    return new IntSize(tmp$ret$0);
  }
  function createGraphicsLayerBlock$lambda$lambda($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.tao(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.mat().nat_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.gau_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.tao(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.mat().nat_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.gau_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_0($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.i2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.mat().nat_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.fau_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.mat().nat_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.fau_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_1($enter, $exit) {
    return function ($this$animate) {
      var tmp;
      if ($this$animate.tao(EnterExitState_PreEnter_getInstance(), EnterExitState_Visible_getInstance())) {
        var tmp0_safe_receiver = $enter.mat().qat_1;
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.bax_1;
        tmp = tmp1_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp1_elvis_lhs;
      } else if ($this$animate.tao(EnterExitState_Visible_getInstance(), EnterExitState_PostExit_getInstance())) {
        var tmp2_safe_receiver = $exit.mat().qat_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.bax_1;
        tmp = tmp3_elvis_lhs == null ? get_DefaultAlphaAndScaleSpring() : tmp3_elvis_lhs;
      } else {
        tmp = get_DefaultAlphaAndScaleSpring();
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_2($enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.i2_1) {
        case 1:
          tmp = 1.0;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.mat().qat_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zaw_1;
          tmp = tmp2_elvis_lhs == null ? 1.0 : tmp2_elvis_lhs;
          break;
        case 2:
          var tmp3_safe_receiver = $exit.mat().qat_1;
          var tmp4_elvis_lhs = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.zaw_1;
          tmp = tmp4_elvis_lhs == null ? 1.0 : tmp4_elvis_lhs;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      return tmp;
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_3($this$animate) {
    _init_properties_EnterExitTransition_kt__2obrqf();
    return spring();
  }
  function createGraphicsLayerBlock$lambda$lambda_4($transformOriginWhenVisible, $enter, $exit) {
    return function (it) {
      var tmp;
      switch (it.i2_1) {
        case 1:
          tmp = $transformOriginWhenVisible;
          break;
        case 0:
          var tmp1_safe_receiver = $enter.mat().qat_1;
          var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.aax_1;
          var tmp_0;
          var tmp_1 = tmp2_elvis_lhs;
          if ((tmp_1 == null ? null : new TransformOrigin_0(tmp_1)) == null) {
            var tmp3_safe_receiver = $exit.mat().qat_1;
            tmp_0 = tmp3_safe_receiver == null ? null : tmp3_safe_receiver.aax_1;
          } else {
            tmp_0 = tmp2_elvis_lhs;
          }

          tmp = tmp_0;
          break;
        case 2:
          var tmp4_safe_receiver = $exit.mat().qat_1;
          var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.aax_1;
          var tmp_2;
          var tmp_3 = tmp5_elvis_lhs;
          if ((tmp_3 == null ? null : new TransformOrigin_0(tmp_3)) == null) {
            var tmp6_safe_receiver = $enter.mat().qat_1;
            tmp_2 = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.aax_1;
          } else {
            tmp_2 = tmp5_elvis_lhs;
          }

          tmp = tmp_2;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_4;
      var tmp_5 = tmp7_elvis_lhs;
      if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_6().k70_1;
      } else {
        tmp_4 = tmp7_elvis_lhs;
      }
      return new TransformOrigin_0(tmp_4);
    };
  }
  function createGraphicsLayerBlock$lambda$lambda_5($alpha, $scale, $transformOrigin) {
    return function (_this__u8e3s4) {
      var tmp0_safe_receiver = $alpha;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.r1();
      _this__u8e3s4.u4s(tmp1_elvis_lhs == null ? 1.0 : tmp1_elvis_lhs);
      var tmp2_safe_receiver = $scale;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.r1();
      _this__u8e3s4.v4s(tmp3_elvis_lhs == null ? 1.0 : tmp3_elvis_lhs);
      var tmp4_safe_receiver = $scale;
      var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.r1();
      _this__u8e3s4.w4s(tmp5_elvis_lhs == null ? 1.0 : tmp5_elvis_lhs);
      var tmp6_safe_receiver = $transformOrigin;
      var tmp;
      if (tmp6_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = tmp6_safe_receiver.r1();
        tmp = tmp_0 == null ? null : tmp_0.c75_1;
      }
      var tmp7_elvis_lhs = tmp;
      var tmp_1;
      var tmp_2 = tmp7_elvis_lhs;
      if ((tmp_2 == null ? null : new TransformOrigin_0(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_6().k70_1;
      } else {
        tmp_1 = tmp7_elvis_lhs;
      }
      _this__u8e3s4.p74(tmp_1);
      return Unit_instance;
    };
  }
  function createGraphicsLayerBlock$lambda($alphaAnimation, $scaleAnimation, $this_createGraphicsLayerBlock, $enter, $exit, $transformOriginAnimation) {
    return function () {
      var tmp0_safe_receiver = $alphaAnimation;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        var tmp_0 = createGraphicsLayerBlock$lambda$lambda($enter, $exit);
        tmp = tmp0_safe_receiver.uao(tmp_0, createGraphicsLayerBlock$lambda$lambda_0($enter, $exit));
      }
      var alpha = tmp;
      var tmp1_safe_receiver = $scaleAnimation;
      var tmp_1;
      if (tmp1_safe_receiver == null) {
        tmp_1 = null;
      } else {
        var tmp_2 = createGraphicsLayerBlock$lambda$lambda_1($enter, $exit);
        tmp_1 = tmp1_safe_receiver.uao(tmp_2, createGraphicsLayerBlock$lambda$lambda_2($enter, $exit));
      }
      var scale = tmp_1;
      var tmp_3;
      if ($this_createGraphicsLayerBlock.i6f().equals(EnterExitState_PreEnter_getInstance())) {
        var tmp2_safe_receiver = $enter.mat().qat_1;
        var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.aax_1;
        var tmp_4;
        var tmp_5 = tmp3_elvis_lhs;
        if ((tmp_5 == null ? null : new TransformOrigin_0(tmp_5)) == null) {
          var tmp4_safe_receiver = $exit.mat().qat_1;
          tmp_4 = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.aax_1;
        } else {
          tmp_4 = tmp3_elvis_lhs;
        }
        tmp_3 = tmp_4;
      } else {
        var tmp5_safe_receiver = $exit.mat().qat_1;
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.aax_1;
        var tmp_6;
        var tmp_7 = tmp6_elvis_lhs;
        if ((tmp_7 == null ? null : new TransformOrigin_0(tmp_7)) == null) {
          var tmp7_safe_receiver = $enter.mat().qat_1;
          tmp_6 = tmp7_safe_receiver == null ? null : tmp7_safe_receiver.aax_1;
        } else {
          tmp_6 = tmp6_elvis_lhs;
        }
        tmp_3 = tmp_6;
      }
      var transformOriginWhenVisible = tmp_3;
      var tmp8_safe_receiver = $transformOriginAnimation;
      var tmp_8;
      if (tmp8_safe_receiver == null) {
        tmp_8 = null;
      } else {
        var tmp_9 = createGraphicsLayerBlock$lambda$lambda_3;
        tmp_8 = tmp8_safe_receiver.uao(tmp_9, createGraphicsLayerBlock$lambda$lambda_4(transformOriginWhenVisible, $enter, $exit));
      }
      var transformOrigin = tmp_8;
      var block = createGraphicsLayerBlock$lambda$lambda_5(alpha, scale, transformOrigin);
      return block;
    };
  }
  var properties_initialized_EnterExitTransition_kt_te1nvp;
  function _init_properties_EnterExitTransition_kt__2obrqf() {
    if (!properties_initialized_EnterExitTransition_kt_te1nvp) {
      properties_initialized_EnterExitTransition_kt_te1nvp = true;
      var tmp = TransformOriginVectorConverter$lambda;
      TransformOriginVectorConverter = TwoWayConverter(tmp, TransformOriginVectorConverter$lambda_0);
      DefaultAlphaAndScaleSpring = spring(VOID, 400.0);
      DefaultColorAnimationSpec = spring(VOID, 400.0);
      DefaultOffsetAnimationSpec = spring(VOID, 400.0, new IntOffset(get_VisibilityThreshold_0(Companion_getInstance_3())));
      DefaultSizeAnimationSpec = spring(VOID, 400.0, new IntSize(get_VisibilityThreshold(Companion_getInstance_1())));
      androidx_compose_animation_EnterTransition$stable = 0;
      androidx_compose_animation_ExitTransition$stable = 0;
      androidx_compose_animation_TransitionEffect$stable = 0;
      androidx_compose_animation_ContentScaleTransitionEffect$stable = 0;
      androidx_compose_animation_Fade$stable = 0;
      androidx_compose_animation_Slide$stable = 0;
      androidx_compose_animation_ChangeSize$stable = 0;
      androidx_compose_animation_Scale$stable = 0;
      androidx_compose_animation_Veil$stable = 0;
      androidx_compose_animation_TransitionData$stable = 0;
    }
  }
  var isLookaheadAnimationVisualDebuggingEnabled;
  var androidx_compose_animation_LookaheadAnimationVisualDebugConfig$stable;
  var androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable;
  var androidx_compose_animation_RenderInTransitionOverlayNode$stable;
  var androidx_compose_animation_SharedElementEntry$stable;
  var androidx_compose_animation_SharedTransitionStateMachine_State$stable;
  var androidx_compose_animation_SharedTransitionStateMachine$stable;
  var androidx_compose_animation_NoMatchFound$stable;
  var androidx_compose_animation_ActiveMatchFoundConfigPending$stable;
  var androidx_compose_animation_MatchIsOrHasBeenConfigured$stable;
  var androidx_compose_animation_ActiveMatchConfigured$stable;
  var androidx_compose_animation_ActiveMatchRemovedDuringTransition$stable;
  var androidx_compose_animation_TargetData$stable;
  var androidx_compose_animation_AndroidFlingSpline_FlingResult$stable;
  var androidx_compose_animation_AndroidFlingSpline$stable;
  var androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable;
  var platformFlingScrollFriction;
  //region block: post-declaration
  protoOf(VeilModifierNode).v6q = onMeasureResultChanged;
  //endregion
  //region block: init
  androidx_compose_animation_AnimatedVisibilityScopeImpl$stable = 8;
  isLookaheadAnimationVisualDebuggingEnabled = true;
  androidx_compose_animation_LookaheadAnimationVisualDebugConfig$stable = 0;
  androidx_compose_animation_RenderInTransitionOverlayNodeElement$stable = 0;
  androidx_compose_animation_RenderInTransitionOverlayNode$stable = 8;
  androidx_compose_animation_SharedElementEntry$stable = 8;
  androidx_compose_animation_SharedTransitionStateMachine_State$stable = 0;
  androidx_compose_animation_SharedTransitionStateMachine$stable = 8;
  androidx_compose_animation_NoMatchFound$stable = 0;
  androidx_compose_animation_ActiveMatchFoundConfigPending$stable = 8;
  androidx_compose_animation_MatchIsOrHasBeenConfigured$stable = 0;
  androidx_compose_animation_ActiveMatchConfigured$stable = 0;
  androidx_compose_animation_ActiveMatchRemovedDuringTransition$stable = 8;
  androidx_compose_animation_TargetData$stable = 0;
  androidx_compose_animation_AndroidFlingSpline_FlingResult$stable = 0;
  androidx_compose_animation_AndroidFlingSpline$stable = 8;
  androidx_compose_animation_SplineBasedFloatDecayAnimationSpec$stable = 0;
  platformFlingScrollFriction = 0.015;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = AnimatedVisibility;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-animation-animation.js.map
