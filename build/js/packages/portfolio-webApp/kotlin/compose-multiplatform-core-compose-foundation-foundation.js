(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-graphics.js', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlinx-coroutines-core.js', './androidx-collection-collection.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-util.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-animation-animation-core.js', './androidx-compose-runtime-runtime-saveable.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlinx-coroutines-core.js'), require('./androidx-collection-collection.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./androidx-compose-runtime-runtime-saveable.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'androidx-compose-runtime-runtime-saveable' was not found. Please, check whether 'androidx-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlinx-coroutines-core'], globalThis['androidx-collection-collection'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_collection_collection, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var sign = Math.sign;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var VOID = kotlin_kotlin.$_$.c;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var protoOf = kotlin_kotlin.$_$.aa;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var equals = kotlin_kotlin.$_$.b9;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var hashCode = kotlin_kotlin.$_$.i9;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var drawOutline = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v1;
  var drawOutline_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w1;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var set_shape = kotlin_org_jetbrains_compose_ui_ui.$_$.x3;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x1;
  var DelegatableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var toString = kotlin_kotlin.$_$.ca;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s3;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r3;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w3;
  var numberToInt = kotlin_kotlin.$_$.y9;
  var fromInt = kotlin_kotlin.$_$.d8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var Long = kotlin_kotlin.$_$.yc;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var ImageBitmapConfig = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.w;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var floatFromBits = kotlin_kotlin.$_$.c9;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var ImageBitmap = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x;
  var Canvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p;
  var CanvasDrawScope = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var get_isSimple = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k;
  var _Size___get_minDimension__impl__4iso0r = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d1;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var toRawBits = kotlin_kotlin.$_$.be;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sd;
  var Rectangle = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.b1;
  var Rounded = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c1;
  var Generic = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a1;
  var _CornerRadius___get_packedValue__impl__okv4jq = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.p;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var CacheDrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var toString_0 = kotlin_kotlin.$_$.de;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var _CornerRadius___init__impl__ojmabe = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.o;
  var RoundRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.h;
  var Companion_instance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.b5;
  var composed = kotlin_org_jetbrains_compose_ui_ui.$_$.i4;
  var isInterface = kotlin_kotlin.$_$.r9;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var Role = kotlin_org_jetbrains_compose_ui_ui.$_$.l3;
  var getBooleanHashCode = kotlin_kotlin.$_$.d9;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var Role__hashCode_impl_ucjza4 = kotlin_org_jetbrains_compose_ui_ui.$_$.n4;
  var isOutOfBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c1;
  var PointerEventPass_Final_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.d5;
  var changedToUp = kotlin_org_jetbrains_compose_ui_ui.$_$.b1;
  var PointerEventPass_Main_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.e5;
  var invert = kotlin_kotlin.$_$.e8;
  var compare = kotlin_kotlin.$_$.y7;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var delay = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui.$_$.o4;
  var mutableLongObjectMapOf = kotlin_androidx_collection_collection.$_$.a1;
  var get_LocalViewConfiguration = kotlin_org_jetbrains_compose_ui_ui.$_$.e3;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var get_center = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t;
  var _IntOffset___get_x__impl__qiqr5o = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o2;
  var _IntOffset___get_y__impl__2avpwj = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui.$_$.s4;
  var get_key = kotlin_org_jetbrains_compose_ui_ui.$_$.r;
  var _Key___get_keyCode__impl__ymzu5v = kotlin_org_jetbrains_compose_ui_ui.$_$.m4;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var onClick = kotlin_org_jetbrains_compose_ui_ui.$_$.s3;
  var disabled = kotlin_org_jetbrains_compose_ui_ui.$_$.o3;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var onDensityChange = kotlin_org_jetbrains_compose_ui_ui.$_$.f2;
  var interceptOutOfBoundsChildEvents = kotlin_org_jetbrains_compose_ui_ui.$_$.e2;
  var sharePointerInputWithSiblings = kotlin_org_jetbrains_compose_ui_ui.$_$.h2;
  var onViewConfigurationChange = kotlin_org_jetbrains_compose_ui_ui.$_$.g2;
  var get_touchBoundsExpansion = kotlin_org_jetbrains_compose_ui_ui.$_$.i2;
  var get_isImportantForBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var PointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.j2;
  var KeyInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.q;
  var TraversableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var IndirectPointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.p;
  var requestFocus = kotlin_org_jetbrains_compose_ui_ui.$_$.g;
  var get_type = kotlin_org_jetbrains_compose_ui_ui.$_$.s;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui.$_$.r4;
  var traverseAncestors = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui.$_$.q4;
  var Companion_getInstance_11 = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var findNearestAncestor = kotlin_org_jetbrains_compose_ui_ui.$_$.q2;
  var bringIntoView = kotlin_org_jetbrains_compose_ui_ui.$_$.h5;
  var get_LocalPinnableContainer = kotlin_org_jetbrains_compose_ui_ui.$_$.n1;
  var funFocusTargetModifierNode2 = kotlin_org_jetbrains_compose_ui_ui.$_$.f;
  var set_focused = kotlin_org_jetbrains_compose_ui_ui.$_$.p3;
  var requestFocus_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.t3;
  var GlobalPositionAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.y1;
  var findNearestAncestor_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.r2;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui.$_$.w4;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var clipToBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.c;
  var paint = kotlin_org_jetbrains_compose_ui_ui.$_$.e;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var Companion_getInstance_14 = kotlin_org_jetbrains_compose_ui_ui.$_$.x4;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var set_contentDescription = kotlin_org_jetbrains_compose_ui_ui.$_$.n3;
  var Companion_getInstance_15 = kotlin_org_jetbrains_compose_ui_ui.$_$.z4;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var foldIn = kotlin_org_jetbrains_compose_ui_ui.$_$.e4;
  var all = kotlin_org_jetbrains_compose_ui_ui.$_$.d4;
  var then = kotlin_org_jetbrains_compose_ui_ui.$_$.g4;
  var DrawModifier = kotlin_org_jetbrains_compose_ui_ui.$_$.b;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var Offset__div_impl_eaxtg1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.r;
  var Offset__times_impl_jz1mli = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.y;
  var Offset__minus_impl_hoj2c0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.v;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var Offset__plus_impl_c78cg0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.x;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_16 = kotlin_org_jetbrains_compose_ui_ui.$_$.u4;
  var AwaitPointerEventScope = kotlin_org_jetbrains_compose_ui_ui.$_$.t;
  var changedToUpIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.a1;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.l9;
  var PointerEventTimeoutCancellationException = kotlin_org_jetbrains_compose_ui_ui.$_$.u;
  var positionChangeIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.g1;
  var positionChangedIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.h1;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var CancellationException = kotlin_kotlin.$_$.w6;
  var Enum = kotlin_kotlin.$_$.sc;
  var get_isPrimaryPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.d1;
  var changedToDownIgnoreConsumed = kotlin_org_jetbrains_compose_ui_ui.$_$.y;
  var changedToDown = kotlin_org_jetbrains_compose_ui_ui.$_$.z;
  var Density = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i;
  var BufferOverflow_DROP_OLDEST_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.f;
  var MutableSharedFlow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var Shape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k1;
  var Interpolatable = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.y;
  var toRect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.n;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var RoundRect_0 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.f;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var Companion_getInstance_17 = kotlin_org_jetbrains_compose_ui_ui.$_$.p4;
  var Companion_getInstance_18 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var Companion_getInstance_19 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f1;
  var Companion_getInstance_20 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _BaselineShift___get_multiplier__impl__qhmjek = kotlin_org_jetbrains_compose_ui_ui_text.$_$.t;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s1;
  var Companion_getInstance_21 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a1;
  var Companion_getInstance_22 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k1;
  var Companion_getInstance_23 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m1;
  var Companion_getInstance_24 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g1;
  var FontWeight = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b;
  var Companion_getInstance_25 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.b1;
  var Companion_getInstance_26 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l1;
  var _FontStyle___get_value__impl__gx8aaz = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r;
  var _FontSynthesis___get_value__impl__xrueqg = kotlin_org_jetbrains_compose_ui_ui_text.$_$.s;
  var toPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e;
  var toPx_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f;
  var roundToPx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c;
  var toDp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d;
  var toDp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.n;
  var toSize_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g;
  var lerp_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.a2;
  var _TransformOrigin___get_pivotFractionX__impl__a9pmci = kotlin_org_jetbrains_compose_ui_ui.$_$.k4;
  var _TransformOrigin___get_pivotFractionY__impl__ijwupp = kotlin_org_jetbrains_compose_ui_ui.$_$.l4;
  var TransformOrigin = kotlin_org_jetbrains_compose_ui_ui.$_$.l;
  var lerp_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z;
  var lerp_2 = kotlin_org_jetbrains_compose_ui_ui_util.$_$.d;
  var Companion_instance_1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t3;
  var Brush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.o;
  var isArray = kotlin_kotlin.$_$.p9;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i;
  var lerp_3 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j;
  var getOrNull = kotlin_kotlin.$_$.e5;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var Companion_getInstance_27 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Companion_getInstance_28 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var MutableObjectList = kotlin_androidx_collection_collection.$_$.m;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_29 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o1;
  var Companion_getInstance_30 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n1;
  var rememberSaveable = kotlin_androidx_compose_runtime_runtime_saveable.$_$.f;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s;
  var get_LocalFontFamilyResolver = kotlin_org_jetbrains_compose_ui_ui.$_$.c3;
  var AnnotatedString_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q1;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.d;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var charSequenceGet = kotlin_kotlin.$_$.u8;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var charSequenceLength = kotlin_kotlin.$_$.v8;
  var TextRange = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var Companion_instance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var coerceAtLeast = kotlin_kotlin.$_$.ja;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var coerceIn = kotlin_kotlin.$_$.oa;
  var resolveDefaults = kotlin_org_jetbrains_compose_ui_ui_text.$_$.q;
  var Density_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var Paragraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.l;
  var coerceAtMost = kotlin_kotlin.$_$.la;
  var repeat = kotlin_kotlin.$_$.vb;
  var emptyList = kotlin_kotlin.$_$.s4;
  var TextLayoutInput_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.r1;
  var constrain = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x;
  var TextLayoutResult = kotlin_org_jetbrains_compose_ui_ui_text.$_$.m;
  var MultiParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.h;
  var MultiParagraph = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var ParagraphIntrinsics = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j;
  var Paragraph_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k;
  var _Constraints___get_value__impl__3ah2ax = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var _Constraints___init__impl__v8ud31 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var TextOverflow__hashCode_impl_kqdwgt = kotlin_org_jetbrains_compose_ui_ui_text.$_$.v;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var Companion_getInstance_31 = kotlin_org_jetbrains_compose_ui_ui.$_$.t4;
  var pointerHoverIcon = kotlin_org_jetbrains_compose_ui_ui.$_$.f1;
  var RememberObserver = kotlin_androidx_compose_runtime_runtime.$_$.u;
  var set_text = kotlin_org_jetbrains_compose_ui_ui.$_$.z3;
  var set_textSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.a4;
  var set_isShowingTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.r3;
  var setTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.w3;
  var showTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.y3;
  var clearTextSubstitution = kotlin_org_jetbrains_compose_ui_ui.$_$.m3;
  var getTextLayoutResult = kotlin_org_jetbrains_compose_ui_ui.$_$.q3;
  var invalidateLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.t2;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s1;
  var get_FirstBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.k1;
  var get_LastBaseline = kotlin_org_jetbrains_compose_ui_ui.$_$.m1;
  var Rect = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.d;
  var Companion_getInstance_32 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.o1;
  var TextRange_0 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.i1;
  var lazy = kotlin_kotlin.$_$.qd;
  var _TextRange___get_start__impl__ww4t90 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.y;
  var _TextRange___get_end__impl__gcdxpp = kotlin_org_jetbrains_compose_ui_ui_text.$_$.x;
  var KProperty0 = kotlin_kotlin.$_$.wa;
  var getLocalDelegateReference = kotlin_kotlin.$_$.e9;
  var subtract = kotlin_kotlin.$_$.m8;
  var positionChange = kotlin_org_jetbrains_compose_ui_ui.$_$.i1;
  var first = kotlin_kotlin.$_$.b5;
  var get_isShiftPressed = kotlin_org_jetbrains_compose_ui_ui.$_$.e1;
  var androidx_compose_ui_text_TextLayoutResult$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var get_LocalSystemTheme = kotlin_org_jetbrains_compose_ui_ui.$_$.c4;
  var SystemTheme_Dark_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.g5;
  var get_LocalInputModeManager = kotlin_org_jetbrains_compose_ui_ui.$_$.d3;
  var InputMode = kotlin_org_jetbrains_compose_ui_ui.$_$.j1;
  var Companion_getInstance_33 = kotlin_org_jetbrains_compose_ui_ui.$_$.v4;
  var flow = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.w;
  var Companion_getInstance_34 = kotlin_org_jetbrains_skiko_skiko.$_$.c;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var PointerInputEventHandler = kotlin_org_jetbrains_compose_ui_ui.$_$.v;
  var PointerInputScope = kotlin_org_jetbrains_compose_ui_ui.$_$.w;
  var SuspendingPointerInputModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(BackgroundElement, 'BackgroundElement', VOID, ModifierNodeElement);
  initMetadataForClass(BackgroundNode, 'BackgroundNode', VOID, Node, [DrawModifierNode, DelegatableNode, SemanticsModifierNode]);
  initMetadataForClass(BorderModifierNodeElement, 'BorderModifierNodeElement', VOID, ModifierNodeElement);
  initMetadataForClass(BorderModifierNode, 'BorderModifierNode', VOID, DelegatingNode, [SemanticsModifierNode]);
  initMetadataForClass(BorderCache, 'BorderCache', BorderCache);
  initMetadataForClass(ClickableElement, 'ClickableElement', VOID, ModifierNodeElement);
  function isInterested(event) {
    return false;
  }
  initMetadataForInterface(GestureConnection, 'GestureConnection');
  initMetadataForClass(AbstractClickableNode, 'AbstractClickableNode', VOID, DelegatingNode, [PointerInputModifierNode, KeyInputModifierNode, DelegatableNode, SemanticsModifierNode, TraversableNode, CompositionLocalConsumerModifierNode, IndirectPointerInputModifierNode, GestureConnection], [2]);
  initMetadataForClass(ClickableNode, 'ClickableNode', VOID, AbstractClickableNode, VOID, [2]);
  initMetadataForObject(TraverseKey, 'TraverseKey');
  initMetadataForLambda(AbstractClickableNode$onFocusChange$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onFocusChange$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onPointerEvent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onPointerEvent$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onKeyEvent$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$onKeyEvent$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteractionStart$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteractionStart$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteractionStart$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteractionStart$slambda_5, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteractionRelease$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteractionRelease$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$handlePressInteractionCancel$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$emitHoverEnter$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(AbstractClickableNode$emitHoverExit$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForObject(ComposeFoundationFlags, 'ComposeFoundationFlags');
  initMetadataForObject(TraverseKey_0, 'TraverseKey');
  initMetadataForLambda(FocusableNode$onFocusStateChange$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(FocusableNode$emitWithFallback$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FocusableNode, 'FocusableNode', VOID, DelegatingNode, [SemanticsModifierNode, GlobalPositionAwareModifierNode, CompositionLocalConsumerModifierNode, DelegatableNode, TraversableNode]);
  initMetadataForObject(TraverseKey_1, 'TraverseKey');
  initMetadataForClass(FocusedBoundsObserverNode, 'FocusedBoundsObserverNode', VOID, Node, [TraversableNode]);
  initMetadataForObject(TraverseKey_2, 'TraverseKey');
  initMetadataForClass(GestureNode, 'GestureNode', VOID, Node, [TraversableNode, DelegatableNode]);
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  function rememberUpdatedInstance(interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1y(1257603829);
    $composer_0.n1y();
    return NoIndicationInstance_instance;
  }
  initMetadataForInterface(Indication, 'Indication');
  initMetadataForInterface(IndicationNodeFactory, 'IndicationNodeFactory', VOID, VOID, [Indication]);
  initMetadataForLambda(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(DefaultDebugIndicationInstance, 'DefaultDebugIndicationInstance', VOID, Node, [DrawModifierNode]);
  initMetadataForObject(DefaultDebugIndication, 'DefaultDebugIndication', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForObject(NoIndicationInstance, 'NoIndicationInstance');
  initMetadataForClass(IndicationModifierElement, 'IndicationModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(IndicationModifier, 'IndicationModifier', VOID, VOID, [DrawModifier]);
  initMetadataForClass(IndicationModifierNode, 'IndicationModifierNode', VOID, DelegatingNode);
  initMetadataForClass(TouchSlopDetector, 'TouchSlopDetector', TouchSlopDetector);
  initMetadataForLambda(awaitLongPressOrCancellation$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($dragCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($awaitLongPressOrCancellationCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($awaitTouchSlopOrCancellationCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($awaitDragOrCancellationCOROUTINE$, CoroutineImpl);
  initMetadataForLambda(awaitEachGesture$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitAllPointersUpCOROUTINE$, CoroutineImpl);
  initMetadataForClass(Orientation, 'Orientation', VOID, Enum);
  initMetadataForObject(TraverseKey_3, 'TraverseKey');
  initMetadataForClass(ScrollableContainerNode, 'ScrollableContainerNode', VOID, Node, [TraversableNode]);
  initMetadataForInterface(PressGestureScope, 'PressGestureScope', VOID, VOID, [Density], [0]);
  initMetadataForLambda(NoPressGesture$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForInterface(Interaction, 'Interaction');
  initMetadataForClass(Start, 'Start', VOID, VOID, [Interaction]);
  initMetadataForClass(Stop, 'Stop', VOID, VOID, [Interaction]);
  initMetadataForClass(Cancel, 'Cancel', VOID, VOID, [Interaction]);
  initMetadataForInterface(FocusInteraction, 'FocusInteraction', VOID, VOID, [Interaction]);
  initMetadataForClass(Focus, 'Focus', Focus, VOID, [FocusInteraction]);
  initMetadataForClass(Unfocus, 'Unfocus', VOID, VOID, [FocusInteraction]);
  initMetadataForClass(Enter, 'Enter', Enter, VOID, [Interaction]);
  initMetadataForClass(Exit, 'Exit', VOID, VOID, [Interaction]);
  initMetadataForClass(MutableInteractionSourceImpl, 'MutableInteractionSourceImpl', MutableInteractionSourceImpl, VOID, VOID, [1]);
  initMetadataForInterface(PressInteraction, 'PressInteraction', VOID, VOID, [Interaction]);
  initMetadataForClass(Press, 'Press', VOID, VOID, [PressInteraction]);
  initMetadataForClass(Release, 'Release', VOID, VOID, [PressInteraction]);
  initMetadataForClass(Cancel_0, 'Cancel', VOID, VOID, [PressInteraction]);
  initMetadataForClass(CornerBasedShape, 'CornerBasedShape', VOID, VOID, [Shape, Interpolatable]);
  initMetadataForClass(DpCornerSize, 'DpCornerSize');
  initMetadataForClass(PercentCornerSize, 'PercentCornerSize');
  initMetadataForClass(PxCornerSize, 'PxCornerSize');
  initMetadataForClass(ZeroCornerSize$1);
  initMetadataForClass(RoundedCornerShape, 'RoundedCornerShape', VOID, CornerBasedShape);
  initMetadataForClass(lerp$1);
  initMetadataForClass(ResolvedStyle, 'ResolvedStyle', VOID, VOID, [Density]);
  initMetadataForInterface(Style, 'Style');
  initMetadataForClass(sam$androidx_compose_foundation_style_Style$0, 'sam$androidx_compose_foundation_style_Style$0', VOID, VOID, [Style, FunctionAdapter]);
  initMetadataForClass(StyleOuterNode, 'StyleOuterNode', VOID, DelegatingNode, [LayoutModifierNode, DrawModifierNode, TraversableNode, CompositionLocalConsumerModifierNode, DelegatableNode]);
  initMetadataForObject(EmptyMeasurePolicy, 'EmptyMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForCompanion(Companion);
  initMetadataForClass(InlineDensity, 'InlineDensity');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(MinLinesConstrainer, 'MinLinesConstrainer');
  initMetadataForClass(TextAutoSizeLayoutScopeImpl, 'TextAutoSizeLayoutScopeImpl', VOID, VOID, [Density]);
  initMetadataForClass(MultiParagraphLayoutCache, 'MultiParagraphLayoutCache');
  initMetadataForClass(ParagraphLayoutCache, 'ParagraphLayoutCache');
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(SelectableTextAnnotatedStringElement, 'SelectableTextAnnotatedStringElement', VOID, ModifierNodeElement);
  initMetadataForClass(SelectableTextAnnotatedStringNode, 'SelectableTextAnnotatedStringNode', VOID, DelegatingNode, [LayoutModifierNode, DrawModifierNode, GlobalPositionAwareModifierNode]);
  initMetadataForClass(SelectionController, 'SelectionController', VOID, VOID, [RememberObserver]);
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(StaticTextSelectionParams, 'StaticTextSelectionParams');
  initMetadataForClass(TextAnnotatedStringElement, 'TextAnnotatedStringElement', VOID, ModifierNodeElement);
  initMetadataForClass(TextSubstitutionValue, 'TextSubstitutionValue');
  initMetadataForClass(TextAnnotatedStringNode, 'TextAnnotatedStringNode', VOID, Node, [LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  initMetadataForClass(TextStringSimpleElement, 'TextStringSimpleElement', VOID, ModifierNodeElement);
  initMetadataForClass(TextSubstitutionValue_0, 'TextSubstitutionValue');
  initMetadataForClass(TextStringSimpleNode, 'TextStringSimpleNode', VOID, Node, [LayoutModifierNode, DrawModifierNode, SemanticsModifierNode]);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(MultiWidgetSelectionDelegate, 'MultiWidgetSelectionDelegate');
  initMetadataForClass(AnchorInfo, 'AnchorInfo');
  initMetadataForClass(Selection, 'Selection');
  initMetadataForInterface(SelectionAdjustment, 'SelectionAdjustment');
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForInterface(BoundaryFunction, 'BoundaryFunction');
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', VOID, VOID, [BoundaryFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0, 'sam$androidx_compose_foundation_text_selection_BoundaryFunction$0', VOID, VOID, [BoundaryFunction, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForClass(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3, 'sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0', VOID, VOID, [SelectionAdjustment, FunctionAdapter]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(ClicksCounter, 'ClicksCounter');
  initMetadataForClass(DownResolution, 'DownResolution', VOID, Enum);
  initMetadataForLambda(awaitSelectionGestures$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(touchSelectionSubsequentPress$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($awaitDownCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($mouseSelectionCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($touchSelectionFirstPressCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($touchSelectionSubsequentPressCOROUTINE$, CoroutineImpl);
  initMetadataForClass(CrossStatus, 'CrossStatus', VOID, Enum);
  initMetadataForClass(TextSelectionColors, 'TextSelectionColors');
  initMetadataForClass(InputModeFilterIndicationNodeFactory$create$1, VOID, VOID, DelegatingNode, [CompositionLocalConsumerModifierNode]);
  initMetadataForClass(InputModeFilterIndicationNodeFactory, 'InputModeFilterIndicationNodeFactory', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForClass(InputModeFilterIndication, 'InputModeFilterIndication', VOID, VOID, [Indication]);
  initMetadataForLambda(InputModeFilterInteractionSource$interactions$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0_0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(InputModeFilterInteractionSource$interactions$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(InputModeFilterInteractionSource, 'InputModeFilterInteractionSource');
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(SkikoSelectionModifierElement, 'SkikoSelectionModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0, 'sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0', VOID, VOID, [PointerInputEventHandler, FunctionAdapter], [1]);
  initMetadataForLambda(SkikoSelectionModifierNode$pointerInputNode$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SkikoSelectionModifierNode$longPressDragObserver$1);
  initMetadataForLambda(SkikoSelectionModifierNode$bringIntoView$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(SkikoSelectionModifierNode, 'SkikoSelectionModifierNode', VOID, DelegatingNode);
  initMetadataForClass(skikoMouseSelectionObserver$1);
  //endregion
  function background(_this__u8e3s4, color, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    var alpha = 1.0;
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = background$lambda(color, shape);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return _this__u8e3s4.e6j(new BackgroundElement(color, VOID, alpha, shape, tmp0_inspectorInfo));
  }
  function BackgroundElement(color, brush, alpha, shape, inspectorInfo) {
    color = color === VOID ? Companion_getInstance().t4x_1 : color;
    brush = brush === VOID ? null : brush;
    ModifierNodeElement.call(this);
    this.dax_1 = color;
    this.eax_1 = brush;
    this.fax_1 = alpha;
    this.gax_1 = shape;
    this.hax_1 = inspectorInfo;
  }
  protoOf(BackgroundElement).f2b = function () {
    return new BackgroundNode(this.dax_1, this.eax_1, this.fax_1, this.gax_1);
  };
  protoOf(BackgroundElement).iax = function (node) {
    node.xax_1 = this.dax_1;
    node.yax_1 = this.eax_1;
    node.zax_1 = this.fax_1;
    if (!equals(node.aay_1, this.gax_1)) {
      node.aay_1 = this.gax_1;
      invalidateSemantics(node);
    }
    invalidateDraw(node);
  };
  protoOf(BackgroundElement).h6s = function (node) {
    return this.iax(node instanceof BackgroundNode ? node : THROW_CCE());
  };
  protoOf(BackgroundElement).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.dax_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.eax_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.fax_1) | 0;
    result = imul(31, result) + hashCode(this.gax_1) | 0;
    return result;
  };
  protoOf(BackgroundElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof BackgroundElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherModifier = tmp;
    return equals(this.dax_1, otherModifier.dax_1) && equals(this.eax_1, otherModifier.eax_1) && this.fax_1 === otherModifier.fax_1 && equals(this.gax_1, otherModifier.gax_1);
  };
  function drawRect($this, $receiver) {
    if (!equals($this.xax_1, Companion_getInstance().t4x_1)) {
      $receiver.f5b($this.xax_1);
    }
    var tmp0_safe_receiver = $this.yax_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $receiver.e5b(tmp0_safe_receiver, VOID, VOID, $this.zax_1);
    }
  }
  function drawOutline_1($this, $receiver) {
    var outline = getOutline($this, $receiver);
    if (!equals($this.xax_1, Companion_getInstance().t4x_1)) {
      drawOutline($receiver, outline, $this.xax_1);
    }
    var tmp0_safe_receiver = $this.yax_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      drawOutline_0($receiver, outline, tmp0_safe_receiver, $this.zax_1);
    }
  }
  function getOutline($this, $receiver) {
    var outline;
    if (equals($receiver.f5a(), $this.day_1) && $receiver.z5a().equals($this.eay_1) && equals($this.gay_1, $this.aay_1)) {
      outline = ensureNotNull($this.fay_1);
    } else {
      observeReads($this, BackgroundNode$getOutline$lambda($this, $receiver));
      outline = $this.hay_1;
      $this.hay_1 = null;
    }
    $this.fay_1 = outline;
    $this.day_1 = $receiver.f5a();
    $this.eay_1 = $receiver.z5a();
    $this.gay_1 = $this.aay_1;
    return ensureNotNull(outline);
  }
  function BackgroundNode$getOutline$lambda(this$0, $this_getOutline) {
    return function () {
      this$0.hay_1 = this$0.aay_1.t54($this_getOutline.f5a(), $this_getOutline.z5a(), $this_getOutline);
      return Unit_instance;
    };
  }
  function BackgroundNode(color, brush, alpha, shape) {
    Node.call(this);
    this.xax_1 = color;
    this.yax_1 = brush;
    this.zax_1 = alpha;
    this.aay_1 = shape;
    this.bay_1 = false;
    this.cay_1 = false;
    this.day_1 = Companion_getInstance_0().e47_1;
    this.eay_1 = null;
    this.fay_1 = null;
    this.gay_1 = null;
    this.hay_1 = null;
  }
  protoOf(BackgroundNode).c6k = function () {
    return this.bay_1;
  };
  protoOf(BackgroundNode).f71 = function () {
    return this.cay_1;
  };
  protoOf(BackgroundNode).d6o = function (_this__u8e3s4) {
    if (this.aay_1 === get_RectangleShape()) {
      drawRect(this, _this__u8e3s4);
    } else {
      drawOutline_1(this, _this__u8e3s4);
    }
    _this__u8e3s4.t6s();
  };
  protoOf(BackgroundNode).w6q = function () {
    this.day_1 = Companion_getInstance_0().e47_1;
    this.eay_1 = null;
    this.fay_1 = null;
    this.gay_1 = null;
    invalidateDraw(this);
  };
  protoOf(BackgroundNode).h71 = function (_this__u8e3s4) {
    set_shape(_this__u8e3s4, this.aay_1);
  };
  function background$lambda($color, $shape) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.ba7_1 = 'background';
      _this__u8e3s4.ca7_1 = new Color($color);
      _this__u8e3s4.da7_1.fa7('color', new Color($color));
      _this__u8e3s4.da7_1.fa7('shape', $shape);
      return Unit_instance;
    };
  }
  var androidx_compose_foundation_MarqueeDefaults$stable;
  var androidx_compose_foundation_BasicTooltipDefaults$stable;
  var androidx_compose_foundation_BorderModifierNodeElement$stable;
  var androidx_compose_foundation_BorderModifierNode$stable;
  function border(_this__u8e3s4, border, shape) {
    shape = shape === VOID ? get_RectangleShape() : shape;
    return border_0(_this__u8e3s4, border.iay_1, border.jay_1, shape);
  }
  function border_0(_this__u8e3s4, width, brush, shape) {
    return _this__u8e3s4.e6j(new BorderModifierNodeElement(width, brush, shape));
  }
  function BorderModifierNodeElement(width, brush, shape) {
    ModifierNodeElement.call(this);
    this.lay_1 = width;
    this.may_1 = brush;
    this.nay_1 = shape;
  }
  protoOf(BorderModifierNodeElement).f2b = function () {
    return new BorderModifierNode(this.lay_1, this.may_1, this.nay_1);
  };
  protoOf(BorderModifierNodeElement).oay = function (node) {
    node.maz(this.lay_1);
    node.naz(this.may_1);
    node.q74(this.nay_1);
  };
  protoOf(BorderModifierNodeElement).h6s = function (node) {
    return this.oay(node instanceof BorderModifierNode ? node : THROW_CCE());
  };
  protoOf(BorderModifierNodeElement).toString = function () {
    return 'BorderModifierNodeElement(width=' + Dp__toString_impl_kcddez(this.lay_1) + ', brush=' + toString(this.may_1) + ', shape=' + toString(this.nay_1) + ')';
  };
  protoOf(BorderModifierNodeElement).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.lay_1);
    result = imul(result, 31) + hashCode(this.may_1) | 0;
    result = imul(result, 31) + hashCode(this.nay_1) | 0;
    return result;
  };
  protoOf(BorderModifierNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderModifierNodeElement))
      return false;
    if (!equals(this.lay_1, other.lay_1))
      return false;
    if (!equals(this.may_1, other.may_1))
      return false;
    if (!equals(this.nay_1, other.nay_1))
      return false;
    return true;
  };
  function drawGenericBorder($this, $receiver, brush, outline, fillArea, strokeWidth) {
    var tmp;
    if (fillArea) {
      tmp = $receiver.b6o(BorderModifierNode$drawGenericBorder$lambda(outline, brush));
    } else {
      var config;
      var colorFilter;
      if (brush instanceof SolidColor) {
        config = Companion_getInstance_1().i52_1;
        colorFilter = Companion_instance.y51(Color__copy$default_impl_ectz3s(brush.c4x_1, 1.0));
      } else {
        config = Companion_getInstance_1().h52_1;
        colorFilter = null;
      }
      var pathBounds = outline.g53_1.j54();
      if ($this.haz_1 == null) {
        $this.haz_1 = new BorderCache();
      }
      // Inline function 'kotlin.apply' call
      var this_0 = ensureNotNull($this.haz_1).saz();
      this_0.d36();
      this_0.e54(pathBounds);
      this_0.k54(this_0, outline.g53_1, Companion_getInstance_2().o54_1);
      var maskPath = this_0;
      var cacheImageBitmap;
      // Inline function 'androidx.compose.ui.geometry.Rect.width' call
      // Inline function 'kotlin.math.ceil' call
      var x = pathBounds.l46_1 - pathBounds.j46_1;
      var tmp$ret$3 = Math.ceil(x);
      var tmp0 = numberToInt(tmp$ret$3);
      // Inline function 'androidx.compose.ui.geometry.Rect.height' call
      // Inline function 'kotlin.math.ceil' call
      var x_0 = pathBounds.m46_1 - pathBounds.k46_1;
      var tmp$ret$5 = Math.ceil(x_0);
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = numberToInt(tmp$ret$5);
      var tmp$ret$7 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var pathBoundsSize = _IntSize___init__impl__emcjft(tmp$ret$7);
      // Inline function 'kotlin.with' call
      var tmp0_0 = ensureNotNull($this.haz_1);
      // Inline function 'androidx.compose.foundation.BorderCache.drawBorderCache' call
      var config_0 = config;
      var targetImageBitmap = tmp0_0.oaz_1;
      var targetCanvas = tmp0_0.paz_1;
      var tmp_0;
      var tmp0_safe_receiver = targetImageBitmap;
      var tmp_1 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.c5k();
      if (equals(tmp_1 == null ? null : new ImageBitmapConfig(tmp_1), new ImageBitmapConfig(Companion_getInstance_1().h52_1))) {
        tmp_0 = true;
      } else {
        var tmp1_safe_receiver = targetImageBitmap;
        var tmp_2 = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.c5k();
        tmp_0 = equals(new ImageBitmapConfig(config_0), tmp_2 == null ? null : new ImageBitmapConfig(tmp_2));
      }
      var compatibleConfig = tmp_0;
      var tmp_3;
      var tmp_4;
      var tmp_5;
      if (targetImageBitmap == null || targetCanvas == null) {
        tmp_5 = true;
      } else {
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_1 = $receiver.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        tmp_5 = floatFromBits(bits) > targetImageBitmap.b47();
      }
      if (tmp_5) {
        tmp_4 = true;
      } else {
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_2 = $receiver.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_2);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        tmp_4 = floatFromBits(bits_0) > targetImageBitmap.c47();
      }
      if (tmp_4) {
        tmp_3 = true;
      } else {
        tmp_3 = !compatibleConfig;
      }
      if (tmp_3) {
        // Inline function 'androidx.compose.ui.unit.IntSize.width' call
        // Inline function 'androidx.compose.ui.util.unpackInt1' call
        var value_1 = _IntSize___get_packedValue__impl__uho7jf(pathBoundsSize);
        var tmp_6 = convertToInt(shiftRight(value_1, 32));
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_2 = _IntSize___get_packedValue__impl__uho7jf(pathBoundsSize);
        var tmp$ret$21 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
        // Inline function 'kotlin.also' call
        var this_3 = ImageBitmap(tmp_6, tmp$ret$21, config_0);
        tmp0_0.oaz_1 = this_3;
        targetImageBitmap = this_3;
        // Inline function 'kotlin.also' call
        var this_4 = Canvas(targetImageBitmap);
        tmp0_0.paz_1 = this_4;
        targetCanvas = this_4;
      }
      var tmp2_elvis_lhs = tmp0_0.qaz_1;
      var tmp_7;
      if (tmp2_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_5 = new CanvasDrawScope();
        tmp0_0.qaz_1 = this_5;
        tmp_7 = this_5;
      } else {
        tmp_7 = tmp2_elvis_lhs;
      }
      var targetDrawScope = tmp_7;
      var drawSize = toSize(pathBoundsSize);
      var tmp4 = $receiver.z5a();
      // Inline function 'androidx.compose.ui.graphics.drawscope.CanvasDrawScope.draw' call
      var canvas = targetCanvas;
      var _destruct__k2r9zo = targetDrawScope.n59_1;
      var prevDensity = _destruct__k2r9zo.sd();
      var prevLayoutDirection = _destruct__k2r9zo.td();
      var prevCanvas = _destruct__k2r9zo.q5a();
      var prevSize = _destruct__k2r9zo.r5a();
      // Inline function 'kotlin.apply' call
      var this_6 = targetDrawScope.n59_1;
      this_6.m5a_1 = $receiver;
      this_6.n5a_1 = tmp4;
      this_6.o5a_1 = canvas;
      this_6.p5a_1 = drawSize;
      canvas.m4z();
      targetDrawScope.f5b(Companion_getInstance().h4x_1, VOID, drawSize, VOID, VOID, VOID, Companion_getInstance_3().x4v_1);
      var tmp2 = -pathBounds.j46_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top = -pathBounds.k46_1;
      targetDrawScope.d5b().x5a().b46(tmp2, top);
      try {
        targetDrawScope.m5b(outline.g53_1, brush, VOID, new Stroke(strokeWidth * 2));
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_7 = targetDrawScope.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_3 = _Size___get_packedValue__impl__7rlt1o(this_7);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_1 = convertToInt(shiftRight(value_3, 32));
        var tmp_8 = floatFromBits(bits_1) + 1;
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_8 = targetDrawScope.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value_4 = _Size___get_packedValue__impl__7rlt1o(this_8);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_2 = convertToInt(shiftRight(value_4, 32));
        var tmp2_0 = tmp_8 / floatFromBits(bits_2);
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_9 = targetDrawScope.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_5 = _Size___get_packedValue__impl__7rlt1o(this_9);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_3 = convertToInt(bitwiseAnd(value_5, new Long(-1, 0)));
        var tmp_9 = floatFromBits(bits_3) + 1;
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_10 = targetDrawScope.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_6 = _Size___get_packedValue__impl__7rlt1o(this_10);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_4 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
        // Inline function 'androidx.compose.ui.graphics.drawscope.scale' call
        var scaleY = tmp_9 / floatFromBits(bits_4);
        var pivot = targetDrawScope.n5b();
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = targetDrawScope.d5b();
        var previousSize = $this$with.f5a();
        $this$with.k4l().m4z();
        try {
          $this$with.x5a().r5b(tmp2_0, scaleY, pivot);
          targetDrawScope.m5b(maskPath, brush, VOID, VOID, VOID, Companion_getInstance_3().x4v_1);
        }finally {
          $this$with.k4l().n4z();
          $this$with.w5a(previousSize);
        }
      }finally {
        targetDrawScope.d5b().x5a().b46(-tmp2, -top);
      }
      canvas.n4z();
      // Inline function 'kotlin.apply' call
      var this_11 = targetDrawScope.n59_1;
      this_11.m5a_1 = prevDensity;
      this_11.n5a_1 = prevLayoutDirection;
      this_11.o5a_1 = prevCanvas;
      this_11.p5a_1 = prevSize;
      targetImageBitmap.d5k();
      cacheImageBitmap = targetImageBitmap;
      tmp = $receiver.b6o(BorderModifierNode$drawGenericBorder$lambda_0(pathBounds, cacheImageBitmap, pathBoundsSize, colorFilter));
    }
    return tmp;
  }
  function drawRoundRectBorder($this, $receiver, brush, outline, topLeft, borderSize, fillArea, strokeWidth) {
    var tmp;
    if (get_isSimple(outline.d53_1)) {
      var cornerRadius = outline.d53_1.v46_1;
      var halfStroke = strokeWidth / 2;
      var borderStroke = new Stroke(strokeWidth);
      tmp = $receiver.b6o(BorderModifierNode$drawRoundRectBorder$lambda(fillArea, brush, cornerRadius, halfStroke, strokeWidth, topLeft, borderSize, borderStroke));
    } else {
      if ($this.haz_1 == null) {
        $this.haz_1 = new BorderCache();
      }
      var path = ensureNotNull($this.haz_1).saz();
      var roundedRectPath = createRoundRectPath(path, outline.d53_1, strokeWidth, fillArea);
      tmp = $receiver.b6o(BorderModifierNode$drawRoundRectBorder$lambda_0(roundedRectPath, brush));
    }
    return tmp;
  }
  function BorderModifierNode$drawWithCacheModifierNode$lambda(this$0) {
    return function ($this$CacheDrawModifierNode) {
      var hasValidBorderParams = $this$CacheDrawModifierNode.n47(this$0.iaz_1) >= 0.0 && _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.f5a()) > 0.0;
      var tmp;
      if (!hasValidBorderParams) {
        tmp = drawContentWithoutBorder($this$CacheDrawModifierNode);
      } else {
        var tmp_0;
        if (equals(this$0.iaz_1, Companion_getInstance_4().a48_1)) {
          tmp_0 = 1.0;
        } else {
          // Inline function 'kotlin.math.ceil' call
          var x = $this$CacheDrawModifierNode.n47(this$0.iaz_1);
          tmp_0 = Math.ceil(x);
        }
        var tmp0 = tmp_0;
        // Inline function 'kotlin.math.ceil' call
        var x_0 = _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.f5a()) / 2;
        // Inline function 'kotlin.math.min' call
        var b = Math.ceil(x_0);
        var strokeWidthPx = Math.min(tmp0, b);
        var halfStroke = strokeWidthPx / 2;
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1 = fromInt(toRawBits(halfStroke));
        var v2 = fromInt(toRawBits(halfStroke));
        var tmp$ret$4 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        var topLeft = _Offset___init__impl__c168vi(tmp$ret$4);
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_0 = $this$CacheDrawModifierNode.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_0);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        var tmp0_0 = floatFromBits(bits) - strokeWidthPx;
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_1 = $this$CacheDrawModifierNode.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        // Inline function 'androidx.compose.ui.geometry.Size' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var val2 = floatFromBits(bits_0) - strokeWidthPx;
        var v1_0 = fromInt(toRawBits(tmp0_0));
        var v2_0 = fromInt(toRawBits(val2));
        var tmp$ret$14 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
        var borderSize = _Size___init__impl__aywn0g(tmp$ret$14);
        var fillArea = strokeWidthPx * 2 > _Size___get_minDimension__impl__4iso0r($this$CacheDrawModifierNode.f5a());
        var outline = this$0.kaz_1.t54($this$CacheDrawModifierNode.f5a(), $this$CacheDrawModifierNode.z5a(), $this$CacheDrawModifierNode);
        var tmp_1;
        if (outline instanceof Generic) {
          tmp_1 = drawGenericBorder(this$0, $this$CacheDrawModifierNode, this$0.jaz_1, outline, fillArea, strokeWidthPx);
        } else {
          if (outline instanceof Rounded) {
            tmp_1 = drawRoundRectBorder(this$0, $this$CacheDrawModifierNode, this$0.jaz_1, outline, topLeft, borderSize, fillArea, strokeWidthPx);
          } else {
            if (outline instanceof Rectangle) {
              tmp_1 = drawRectBorder($this$CacheDrawModifierNode, this$0.jaz_1, topLeft, borderSize, fillArea, strokeWidthPx);
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
        tmp = tmp_1;
      }
      return tmp;
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda($outline, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.t6s();
      $this$onDrawWithContent.m5b($outline.g53_1, $brush);
      return Unit_instance;
    };
  }
  function BorderModifierNode$drawGenericBorder$lambda_0($pathBounds, $cacheImageBitmap, $pathBoundsSize, $colorFilter) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.t6s();
      var tmp2 = $pathBounds.j46_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.translate' call
      var top = $pathBounds.k46_1;
      $this$onDrawWithContent.d5b().x5a().b46(tmp2, top);
      try {
        $this$onDrawWithContent.h5b($cacheImageBitmap, VOID, $pathBoundsSize, VOID, VOID, VOID, VOID, $colorFilter);
      }finally {
        $this$onDrawWithContent.d5b().x5a().b46(-tmp2, -top);
      }
      return Unit_instance;
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda($fillArea, $brush, $cornerRadius, $halfStroke, $strokeWidth, $topLeft, $borderSize, $borderStroke) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.t6s();
      var tmp;
      if ($fillArea) {
        $this$onDrawWithContent.i5b($brush, VOID, VOID, $cornerRadius);
        tmp = Unit_instance;
      } else {
        // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
        var this_0 = $cornerRadius;
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _CornerRadius___get_packedValue__impl__okv4jq(this_0);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        if (floatFromBits(bits) < $halfStroke) {
          var tmp2 = $strokeWidth;
          var tmp4 = $strokeWidth;
          // Inline function 'androidx.compose.ui.geometry.Size.width' call
          var this_1 = $this$onDrawWithContent.f5a();
          // Inline function 'androidx.compose.ui.util.unpackFloat1' call
          var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_0 = convertToInt(shiftRight(value_0, 32));
          var tmp6 = floatFromBits(bits_0) - $strokeWidth;
          // Inline function 'androidx.compose.ui.geometry.Size.height' call
          var this_2 = $this$onDrawWithContent.f5a();
          // Inline function 'androidx.compose.ui.util.unpackFloat2' call
          var value_1 = _Size___get_packedValue__impl__7rlt1o(this_2);
          // Inline function 'androidx.compose.ui.util.floatFromBits' call
          // Inline function 'kotlin.fromBits' call
          var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
          var tmp8 = floatFromBits(bits_1) - $strokeWidth;
          // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
          var clipOp = Companion_getInstance_5().u4z_1;
          // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
          // Inline function 'kotlin.with' call
          var $this$with = $this$onDrawWithContent.d5b();
          var previousSize = $this$with.f5a();
          $this$with.k4l().m4z();
          try {
            $this$with.x5a().s4z(tmp2, tmp4, tmp6, tmp8, clipOp);
            $this$onDrawWithContent.i5b($brush, VOID, VOID, $cornerRadius);
          }finally {
            $this$with.k4l().n4z();
            $this$with.w5a(previousSize);
          }
          tmp = Unit_instance;
        } else {
          $this$onDrawWithContent.i5b($brush, $topLeft, $borderSize, shrink($cornerRadius, $halfStroke), VOID, $borderStroke);
          tmp = Unit_instance;
        }
      }
      return Unit_instance;
    };
  }
  function BorderModifierNode$drawRoundRectBorder$lambda_0($roundedRectPath, $brush) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.t6s();
      $this$onDrawWithContent.m5b($roundedRectPath, $brush);
      return Unit_instance;
    };
  }
  function BorderModifierNode(widthParameter, brushParameter, shapeParameter) {
    DelegatingNode.call(this);
    this.faz_1 = false;
    this.gaz_1 = false;
    this.haz_1 = null;
    this.iaz_1 = widthParameter;
    this.jaz_1 = brushParameter;
    this.kaz_1 = shapeParameter;
    var tmp = this;
    tmp.laz_1 = this.t84(CacheDrawModifierNode(BorderModifierNode$drawWithCacheModifierNode$lambda(this)));
  }
  protoOf(BorderModifierNode).c6k = function () {
    return this.faz_1;
  };
  protoOf(BorderModifierNode).f71 = function () {
    return this.gaz_1;
  };
  protoOf(BorderModifierNode).maz = function (value) {
    if (!equals(this.iaz_1, value)) {
      this.iaz_1 = value;
      this.laz_1.u6q();
    }
  };
  protoOf(BorderModifierNode).naz = function (value) {
    if (!equals(this.jaz_1, value)) {
      this.jaz_1 = value;
      this.laz_1.u6q();
    }
  };
  protoOf(BorderModifierNode).q74 = function (value) {
    if (!equals(this.kaz_1, value)) {
      this.kaz_1 = value;
      this.laz_1.u6q();
      invalidateSemantics(this);
    }
  };
  protoOf(BorderModifierNode).h71 = function (_this__u8e3s4) {
    set_shape(_this__u8e3s4, this.kaz_1);
  };
  function BorderCache(imageBitmap, canvas, canvasDrawScope, borderPath) {
    imageBitmap = imageBitmap === VOID ? null : imageBitmap;
    canvas = canvas === VOID ? null : canvas;
    canvasDrawScope = canvasDrawScope === VOID ? null : canvasDrawScope;
    borderPath = borderPath === VOID ? null : borderPath;
    this.oaz_1 = imageBitmap;
    this.paz_1 = canvas;
    this.qaz_1 = canvasDrawScope;
    this.raz_1 = borderPath;
  }
  protoOf(BorderCache).saz = function () {
    var tmp0_elvis_lhs = this.raz_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = Path();
      this.raz_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(BorderCache).toString = function () {
    return 'BorderCache(imageBitmap=' + toString_0(this.oaz_1) + ', canvas=' + toString_0(this.paz_1) + ', canvasDrawScope=' + toString_0(this.qaz_1) + ', borderPath=' + toString_0(this.raz_1) + ')';
  };
  protoOf(BorderCache).hashCode = function () {
    var result = this.oaz_1 == null ? 0 : hashCode(this.oaz_1);
    result = imul(result, 31) + (this.paz_1 == null ? 0 : hashCode(this.paz_1)) | 0;
    result = imul(result, 31) + (this.qaz_1 == null ? 0 : hashCode(this.qaz_1)) | 0;
    result = imul(result, 31) + (this.raz_1 == null ? 0 : hashCode(this.raz_1)) | 0;
    return result;
  };
  protoOf(BorderCache).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BorderCache))
      return false;
    if (!equals(this.oaz_1, other.oaz_1))
      return false;
    if (!equals(this.paz_1, other.paz_1))
      return false;
    if (!equals(this.qaz_1, other.qaz_1))
      return false;
    if (!equals(this.raz_1, other.raz_1))
      return false;
    return true;
  };
  function drawContentWithoutBorder(_this__u8e3s4) {
    return _this__u8e3s4.b6o(drawContentWithoutBorder$lambda);
  }
  function drawRectBorder(_this__u8e3s4, brush, topLeft, borderSize, fillArea, strokeWidthPx) {
    var rectTopLeft = fillArea ? Companion_getInstance_6().e46_1 : topLeft;
    var size = fillArea ? _this__u8e3s4.f5a() : borderSize;
    var style = fillArea ? Fill_getInstance() : new Stroke(strokeWidthPx);
    return _this__u8e3s4.b6o(drawRectBorder$lambda(brush, rectTopLeft, size, style));
  }
  function shrink(_this__u8e3s4, value) {
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.x' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_0 = _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value_0, 32));
    // Inline function 'kotlin.math.max' call
    var b = floatFromBits(bits) - value;
    var tmp0 = Math.max(0.0, b);
    // Inline function 'androidx.compose.ui.geometry.CornerRadius.y' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _CornerRadius___get_packedValue__impl__okv4jq(_this__u8e3s4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    // Inline function 'kotlin.math.max' call
    var b_0 = floatFromBits(bits_0) - value;
    // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = Math.max(0.0, b_0);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$11 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _CornerRadius___init__impl__ojmabe(tmp$ret$11);
  }
  function createRoundRectPath(targetPath, roundedRect, strokeWidth, fillArea) {
    // Inline function 'kotlin.apply' call
    targetPath.d36();
    targetPath.f53(roundedRect);
    if (!fillArea) {
      // Inline function 'kotlin.apply' call
      var this_0 = Path();
      this_0.f53(createInsetRoundedRect(strokeWidth, roundedRect));
      var insetPath = this_0;
      targetPath.k54(targetPath, insetPath, Companion_getInstance_2().o54_1);
    }
    return targetPath;
  }
  function createInsetRoundedRect(widthPx, roundedRect) {
    var tmp0_right = roundedRect.b47() - widthPx;
    var tmp1_bottom = roundedRect.c47() - widthPx;
    var tmp2_topLeftCornerRadius = shrink(roundedRect.v46_1, widthPx);
    var tmp3_topRightCornerRadius = shrink(roundedRect.w46_1, widthPx);
    var tmp4_bottomLeftCornerRadius = shrink(roundedRect.y46_1, widthPx);
    var tmp5_bottomRightCornerRadius = shrink(roundedRect.x46_1, widthPx);
    return new RoundRect(widthPx, widthPx, tmp0_right, tmp1_bottom, tmp2_topLeftCornerRadius, tmp3_topRightCornerRadius, tmp5_bottomRightCornerRadius, tmp4_bottomLeftCornerRadius);
  }
  function drawContentWithoutBorder$lambda($this$onDrawWithContent) {
    $this$onDrawWithContent.t6s();
    return Unit_instance;
  }
  function drawRectBorder$lambda($brush, $rectTopLeft, $size, $style) {
    return function ($this$onDrawWithContent) {
      $this$onDrawWithContent.t6s();
      $this$onDrawWithContent.e5b($brush, $rectTopLeft, $size, VOID, $style);
      return Unit_instance;
    };
  }
  var androidx_compose_foundation_BorderStroke$stable;
  var androidx_compose_foundation_ClickableNode$stable;
  var androidx_compose_foundation_CombinedClickableNode_DoubleKeyClickState$stable;
  var androidx_compose_foundation_AbstractClickableNode$stable;
  function clickable(_this__u8e3s4, interactionSource, indication_0, enabled, onClickLabel, role, onClick) {
    enabled = enabled === VOID ? true : enabled;
    onClickLabel = onClickLabel === VOID ? null : onClickLabel;
    role = role === VOID ? null : role;
    // Inline function 'androidx.compose.foundation.clickableWithIndicationIfNeeded' call
    var tmp;
    if (!(indication_0 == null) ? isInterface(indication_0, IndicationNodeFactory) : false) {
      tmp = new ClickableElement(interactionSource, indication_0, false, enabled, onClickLabel, role, onClick);
    } else {
      if (indication_0 == null) {
        tmp = new ClickableElement(interactionSource, null, false, enabled, onClickLabel, role, onClick);
      } else {
        if (!(interactionSource == null)) {
          var tmp_0 = indication(Companion_instance_0, interactionSource, indication_0);
          var tmp$ret$3 = new ClickableElement(interactionSource, null, false, enabled, onClickLabel, role, onClick);
          tmp = tmp_0.e6j(tmp$ret$3);
        } else {
          var tmp_1 = Companion_instance_0;
          tmp = composed(tmp_1, VOID, clickable$lambda(indication_0, enabled, onClickLabel, role, onClick));
        }
      }
    }
    return _this__u8e3s4.e6j(tmp);
  }
  function ClickableElement(interactionSource, indicationNodeFactory, useLocalIndication, enabled, onClickLabel, role, onClick) {
    ModifierNodeElement.call(this);
    this.uaz_1 = interactionSource;
    this.vaz_1 = indicationNodeFactory;
    this.waz_1 = useLocalIndication;
    this.xaz_1 = enabled;
    this.yaz_1 = onClickLabel;
    this.zaz_1 = role;
    this.ab0_1 = onClick;
  }
  protoOf(ClickableElement).f2b = function () {
    return new ClickableNode(this.uaz_1, this.vaz_1, this.waz_1, this.xaz_1, this.yaz_1, this.zaz_1, this.ab0_1);
  };
  protoOf(ClickableElement).bb0 = function (node) {
    node.rb1(this.uaz_1, this.vaz_1, this.waz_1, this.xaz_1, this.yaz_1, this.zaz_1, this.ab0_1);
  };
  protoOf(ClickableElement).h6s = function (node) {
    return this.bb0(node instanceof ClickableNode ? node : THROW_CCE());
  };
  protoOf(ClickableElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof ClickableElement))
      THROW_CCE();
    if (!equals(this.uaz_1, other.uaz_1))
      return false;
    if (!equals(this.vaz_1, other.vaz_1))
      return false;
    if (!(this.waz_1 === other.waz_1))
      return false;
    if (!(this.xaz_1 === other.xaz_1))
      return false;
    if (!(this.yaz_1 == other.yaz_1))
      return false;
    var tmp = this.zaz_1;
    var tmp_0 = tmp == null ? null : new Role(tmp);
    var tmp_1 = other.zaz_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new Role(tmp_1)))
      return false;
    if (!(this.ab0_1 === other.ab0_1))
      return false;
    return true;
  };
  protoOf(ClickableElement).hashCode = function () {
    var tmp0_safe_receiver = this.uaz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.vaz_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    result = imul(31, result) + getBooleanHashCode(this.waz_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.xaz_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.yaz_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : getStringHashCode(tmp4_safe_receiver);
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.zaz_1;
    var tmp_2;
    var tmp_3 = tmp6_safe_receiver;
    if ((tmp_3 == null ? null : new Role(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = Role__hashCode_impl_ucjza4(tmp6_safe_receiver);
    }
    var tmp7_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    result = imul(31, result) + hashCode(this.ab0_1) | 0;
    return result;
  };
  function handleDownEvent($this, down) {
    down.f7g();
    $this.pb1_1 = down;
    if ($this.nb2_1) {
      requestFocusWhenInMouseInputMode($this);
      if (ComposeFoundationFlags_instance.pb3_1) {
        $this.gb3(down);
      } else {
        $this.fb3(down.y7d_1, false);
      }
    }
  }
  function handleUpEvent($this, up) {
    up.f7g();
    if ($this.nb2_1) {
      $this.xb3(ensureNotNull($this.pb1_1).y7d_1, false);
      $this.ob2_1();
    }
    $this.pb1_1 = null;
  }
  function handleNonUpEventIfNeeded($this, pointerEvent, bounds) {
    var touchPadding = $this.yb3(bounds);
    var tmp0 = pointerEvent.q7d_1;
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
          if (item.e7g() || isOutOfBounds(item, bounds, touchPadding)) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    if (tmp$ret$0) {
      cancelInput($this, false);
    }
  }
  function checkForCancellation($this, pointerEvent) {
    if (!($this.pb1_1 == null)) {
      var tmp0 = pointerEvent.q7d_1;
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
            if (item.e7g() && !equals(item, $this.pb1_1)) {
              tmp$ret$0 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$0 = false;
      }
      if (tmp$ret$0) {
        cancelInput($this, false);
      }
    }
  }
  function cancelInput($this, indirectPointer) {
    if (indirectPointer) {
      $this.qb1_1 = null;
    } else {
      $this.pb1_1 = null;
    }
    $this.zb3(indirectPointer);
  }
  function ClickableNode(interactionSource, indicationNodeFactory, useLocalIndication, enabled, onClickLabel, role, onClick) {
    AbstractClickableNode.call(this, interactionSource, indicationNodeFactory, useLocalIndication, enabled, onClickLabel, role, onClick);
    this.pb1_1 = null;
    this.qb1_1 = null;
  }
  protoOf(ClickableNode).o7e = function (pointerEvent, pass, bounds) {
    protoOf(AbstractClickableNode).o7e.call(this, pointerEvent, pass, bounds);
    if (pass.equals(PointerEventPass_Main_getInstance())) {
      if (this.pb1_1 == null) {
        if (isChangedToDown(pointerEvent, true)) {
          handleDownEvent(this, pointerEvent.q7d_1.m(0));
        }
      } else {
        var tmp0 = pointerEvent.q7d_1;
        var tmp$ret$0;
        $l$block: {
          // Inline function 'androidx.compose.ui.util.fastAll' call
          // Inline function 'androidx.compose.ui.util.fastForEach' call
          var inductionVariable = 0;
          var last = tmp0.l() - 1 | 0;
          if (inductionVariable <= last)
            do {
              var index = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var item = tmp0.m(index);
              if (!changedToUp(item)) {
                tmp$ret$0 = false;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$0 = true;
        }
        if (tmp$ret$0) {
          handleUpEvent(this, pointerEvent.q7d_1.m(0));
        } else {
          handleNonUpEventIfNeeded(this, pointerEvent, bounds);
        }
      }
    } else if (pass.equals(PointerEventPass_Final_getInstance())) {
      checkForCancellation(this, pointerEvent);
    }
  };
  protoOf(ClickableNode).l7f = function () {
    protoOf(AbstractClickableNode).l7f.call(this);
    cancelInput(this, false);
  };
  protoOf(ClickableNode).z7b = function () {
    cancelInput(this, true);
  };
  protoOf(ClickableNode).rb1 = function (interactionSource, indicationNodeFactory, useLocalIndication, enabled, onClickLabel, role, onClick) {
    this.ab4(interactionSource, indicationNodeFactory, useLocalIndication, enabled, onClickLabel, role, onClick);
  };
  protoOf(ClickableNode).bb4 = function (event) {
    return false;
  };
  protoOf(ClickableNode).cb4 = function (event) {
    this.ob2_1();
    return true;
  };
  function shouldLazilyCreateIndication($this) {
    return $this.bb3_1 == null;
  }
  function onFocusChange($this, isFocused) {
    if (isFocused) {
      initializeIndicationAndInteractionSourceIfNeeded($this);
    } else {
      if (!($this.ib2_1 == null)) {
        // Inline function 'androidx.collection.LongObjectMap.forEachValue' call
        var this_0 = $this.xb2_1;
        var v = this_0.ck_1;
        $l$block: {
          // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
          var m = this_0.ak_1;
          var lastIndex = m.length - 2 | 0;
          var inductionVariable = 0;
          if (inductionVariable <= lastIndex)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var slot = m[i];
              // Inline function 'androidx.collection.maskEmptyOrDeleted' call
              var this_1 = slot;
              var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
              if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
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
                      var it = v[index];
                      var tmp = $this.b6k();
                      launch(tmp, VOID, VOID, AbstractClickableNode$onFocusChange$slambda_0($this, it, null));
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
        var tmp0_safe_receiver = $this.zb2_1;
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          var tmp_0 = $this.b6k();
          launch(tmp_0, VOID, VOID, AbstractClickableNode$onFocusChange$slambda_2($this, tmp0_safe_receiver, null));
        }
      }
      $this.xb2_1.b2();
      $this.zb2_1 = null;
      $this.gb4();
    }
  }
  function recreateIndicationIfNeeded($this) {
    if (!($this.ub2_1 == null) || !$this.cb3_1) {
      var tmp0_safe_receiver = $this.ub2_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        $this.v84(tmp0_safe_receiver);
      }
      $this.ub2_1 = null;
      initializeIndicationAndInteractionSourceIfNeeded($this);
    }
  }
  function initializeIndicationAndInteractionSourceIfNeeded($this) {
    if (!($this.ub2_1 == null))
      return Unit_instance;
    var indicationFactory = $this.kb2_1 ? $this.rb2_1 : $this.jb2_1;
    if (indicationFactory == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp = platformIndication(indicationFactory);
      var platformFactory = (!(tmp == null) ? isInterface(tmp, IndicationNodeFactory) : false) ? tmp : THROW_CCE();
      if ($this.ib2_1 == null) {
        $this.ib2_1 = funMutableInteractionSource();
      }
      $this.qb2_1.fb5($this.ib2_1);
      var node = platformFactory.gb5(ensureNotNull($this.ib2_1));
      $this.t84(node);
      $this.ub2_1 = node;
    }
  }
  function initializeGestureCoordination($this) {
    if (!ComposeFoundationFlags_instance.pb3_1)
      return Unit_instance;
    if ($this.tb2_1 == null) {
      $this.tb2_1 = $this.t84(gestureNode($this));
    }
  }
  function delayPressInteraction($this) {
    return hasScrollableContainer($this) || isComposeRootInScrollableContainer($this);
  }
  function delayPressInteraction_0($this, event) {
    var tmp;
    if (event == null) {
      tmp = !(get_parentGestureConnection($this) == null);
    } else {
      tmp = hasInterestedParent($this, event);
    }
    var hasInterestedParent_0 = tmp;
    return hasInterestedParent_0 || isComposeRootInScrollableContainer($this);
  }
  function emitHoverEnter($this) {
    if ($this.wb2_1 == null) {
      var interaction = new Enter();
      var tmp0_safe_receiver = $this.ib2_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp = $this.b6k();
        launch(tmp, VOID, VOID, AbstractClickableNode$emitHoverEnter$slambda_0(tmp0_safe_receiver, interaction, null));
      }
      $this.wb2_1 = interaction;
    }
  }
  function emitHoverExit($this) {
    var tmp0_safe_receiver = $this.wb2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var interaction = new Exit(tmp0_safe_receiver);
      var tmp0_safe_receiver_0 = $this.ib2_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var tmp = $this.b6k();
        launch(tmp, VOID, VOID, AbstractClickableNode$emitHoverExit$slambda_0(tmp0_safe_receiver_0, interaction, null));
      }
      $this.wb2_1 = null;
    }
  }
  function TraverseKey() {
  }
  var TraverseKey_instance;
  function TraverseKey_getInstance() {
    return TraverseKey_instance;
  }
  function AbstractClickableNode$onFocusChange$ref(p0) {
    return constructCallableReference(function (p0_0) {
      var tmp0 = p0;
      onFocusChange(tmp0, p0_0);
      return Unit_instance;
    }, 1, 0, 145, 'onFocusChange', [p0]);
  }
  function AbstractClickableNode$onObservedReadsChanged$lambda(this$0) {
    return function () {
      var indication = currentValueOf(this$0, get_LocalIndication());
      // Inline function 'androidx.compose.foundation.internal.requirePrecondition' call
      if (!isInterface(indication, IndicationNodeFactory)) {
        var tmp$ret$1 = unsupportedIndicationExceptionMessage(indication);
        throwIllegalArgumentException(tmp$ret$1);
      }
      var previousFactory = this$0.rb2_1;
      this$0.rb2_1 = indication;
      var tmp;
      if (!(previousFactory == null) && !equals(this$0.rb2_1, previousFactory)) {
        recreateIndicationIfNeeded(this$0);
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function AbstractClickableNode$onFocusChange$slambda(this$0, $it, resultContinuation) {
    this.pb5_1 = this$0;
    this.qb5_1 = $it;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onFocusChange$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$onFocusChange$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onFocusChange$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            var tmp0_safe_receiver = this.pb5_1.ib2_1;
            if (tmp0_safe_receiver == null) {
              this.sb5_1 = null;
              this.l8_1 = 2;
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = tmp0_safe_receiver.tb5(new Cancel_0(this.qb5_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.sb5_1 = Unit_instance;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractClickableNode$onFocusChange$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onFocusChange$slambda(this.pb5_1, this.qb5_1, completion);
    i.rb5_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onFocusChange$slambda_0(this$0, $it, resultContinuation) {
    var i = new AbstractClickableNode$onFocusChange$slambda(this$0, $it, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$onFocusChange$slambda_1(this$0, $it, resultContinuation) {
    this.cb6_1 = this$0;
    this.db6_1 = $it;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onFocusChange$slambda_1).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$onFocusChange$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onFocusChange$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            var tmp0_safe_receiver = this.cb6_1.ib2_1;
            if (tmp0_safe_receiver == null) {
              this.fb6_1 = null;
              this.l8_1 = 2;
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = tmp0_safe_receiver.tb5(new Cancel_0(this.db6_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.fb6_1 = Unit_instance;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractClickableNode$onFocusChange$slambda_1).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onFocusChange$slambda_1(this.cb6_1, this.db6_1, completion);
    i.eb6_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onFocusChange$slambda_2(this$0, $it, resultContinuation) {
    var i = new AbstractClickableNode$onFocusChange$slambda_1(this$0, $it, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$onPointerEvent$slambda(this$0, resultContinuation) {
    this.ob6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onPointerEvent$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          emitHoverEnter(this.ob6_1);
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
  protoOf(AbstractClickableNode$onPointerEvent$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onPointerEvent$slambda(this.ob6_1, completion);
    i.pb6_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onPointerEvent$slambda_0(this$0, resultContinuation) {
    var i = new AbstractClickableNode$onPointerEvent$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$onPointerEvent$slambda_1(this$0, resultContinuation) {
    this.yb6_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          emitHoverExit(this.yb6_1);
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
  protoOf(AbstractClickableNode$onPointerEvent$slambda_1).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onPointerEvent$slambda_1(this.yb6_1, completion);
    i.zb6_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onPointerEvent$slambda_2(this$0, resultContinuation) {
    var i = new AbstractClickableNode$onPointerEvent$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$onKeyEvent$slambda(this$0, $press, resultContinuation) {
    this.ib7_1 = this$0;
    this.jb7_1 = $press;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onKeyEvent$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            var tmp0_safe_receiver = this.ib7_1.ib2_1;
            if (tmp0_safe_receiver == null) {
              this.lb7_1 = null;
              this.l8_1 = 2;
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = tmp0_safe_receiver.tb5(this.jb7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.lb7_1 = Unit_instance;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onKeyEvent$slambda(this.ib7_1, this.jb7_1, completion);
    i.kb7_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onKeyEvent$slambda_0(this$0, $press, resultContinuation) {
    var i = new AbstractClickableNode$onKeyEvent$slambda(this$0, $press, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$onKeyEvent$slambda_1(this$0, $press, resultContinuation) {
    this.ub7_1 = this$0;
    this.vb7_1 = $press;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            var tmp0_safe_receiver = this.ub7_1.ib2_1;
            if (tmp0_safe_receiver == null) {
              this.xb7_1 = null;
              this.l8_1 = 2;
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = tmp0_safe_receiver.tb5(new Release(this.vb7_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.xb7_1 = Unit_instance;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            return Unit_instance;
          case 3:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractClickableNode$onKeyEvent$slambda_1).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$onKeyEvent$slambda_1(this.ub7_1, this.vb7_1, completion);
    i.wb7_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$onKeyEvent$slambda_2(this$0, $press, resultContinuation) {
    var i = new AbstractClickableNode$onKeyEvent$slambda_1(this$0, $press, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$applySemantics$lambda(this$0) {
    return function () {
      this$0.ob2_1();
      return true;
    };
  }
  function AbstractClickableNode$handlePressInteractionStart$slambda($interactionSource, $press, this$0, resultContinuation) {
    this.gb8_1 = $interactionSource;
    this.hb8_1 = $press;
    this.ib8_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            this.l8_1 = 1;
            suspendResult = delay(get_TapIndicationDelay(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l8_1 = 2;
            suspendResult = this.gb8_1.tb5(this.hb8_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ib8_1.vb2_1 = this.hb8_1;
            return Unit_instance;
          case 3:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda(this.gb8_1, this.hb8_1, this.ib8_1, completion);
    i.jb8_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteractionStart$slambda_0($interactionSource, $press, this$0, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda($interactionSource, $press, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$handlePressInteractionStart$slambda_1($interactionSource, $press, resultContinuation) {
    this.sb8_1 = $interactionSource;
    this.tb8_1 = $press;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_1).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.sb8_1.tb5(this.tb8_1, this);
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
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_1).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda_1(this.sb8_1, this.tb8_1, completion);
    i.ub8_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteractionStart$slambda_2($interactionSource, $press, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda_1($interactionSource, $press, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$handlePressInteractionStart$slambda_3($interactionSource, $press, $indirectPointer, this$0, resultContinuation) {
    this.db9_1 = $interactionSource;
    this.eb9_1 = $press;
    this.fb9_1 = $indirectPointer;
    this.gb9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_3).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_3).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_3).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            this.l8_1 = 1;
            suspendResult = delay(get_TapIndicationDelay(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l8_1 = 2;
            suspendResult = this.db9_1.tb5(this.eb9_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            if (this.fb9_1) {
              this.gb9_1.zb2_1 = this.eb9_1;
            } else {
              this.gb9_1.vb2_1 = this.eb9_1;
            }

            return Unit_instance;
          case 3:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_3).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda_3(this.db9_1, this.eb9_1, this.fb9_1, this.gb9_1, completion);
    i.hb9_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteractionStart$slambda_4($interactionSource, $press, $indirectPointer, this$0, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda_3($interactionSource, $press, $indirectPointer, this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$handlePressInteractionStart$slambda_5($interactionSource, $press, resultContinuation) {
    this.qb9_1 = $interactionSource;
    this.rb9_1 = $press;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_5).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_5).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_5).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.qb9_1.tb5(this.rb9_1, this);
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
  protoOf(AbstractClickableNode$handlePressInteractionStart$slambda_5).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda_5(this.qb9_1, this.rb9_1, completion);
    i.sb9_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteractionStart$slambda_6($interactionSource, $press, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteractionStart$slambda_5($interactionSource, $press, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$handlePressInteractionRelease$slambda($job, $offset, $interactionSource, resultContinuation) {
    this.bba_1 = $job;
    this.cba_1 = $offset;
    this.dba_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            this.l8_1 = 1;
            suspendResult = this.bba_1.ov(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var press = new Press(this.cba_1);
            this.fba_1 = new Release(press);
            this.l8_1 = 2;
            suspendResult = this.dba_1.tb5(press, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l8_1 = 3;
            suspendResult = this.dba_1.tb5(this.fba_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

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
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteractionRelease$slambda(this.bba_1, this.cba_1, this.dba_1, completion);
    i.eba_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteractionRelease$slambda_0($job, $offset, $interactionSource, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteractionRelease$slambda($job, $offset, $interactionSource, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$handlePressInteractionRelease$slambda_1($it, $interactionSource, resultContinuation) {
    this.oba_1 = $it;
    this.pba_1 = $interactionSource;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda_1).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            var endInteraction = new Release(this.oba_1);
            this.l8_1 = 1;
            suspendResult = this.pba_1.tb5(endInteraction, this);
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
  protoOf(AbstractClickableNode$handlePressInteractionRelease$slambda_1).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteractionRelease$slambda_1(this.oba_1, this.pba_1, completion);
    i.qba_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteractionRelease$slambda_2($it, $interactionSource, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteractionRelease$slambda_1($it, $interactionSource, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$handlePressInteractionCancel$lambda($interactionSource, $endInteraction) {
    return function (it) {
      $interactionSource.rba($endInteraction);
      return Unit_instance;
    };
  }
  function AbstractClickableNode$handlePressInteractionCancel$slambda($interactionSource, $endInteraction, $handler, resultContinuation) {
    this.abb_1 = $interactionSource;
    this.bbb_1 = $endInteraction;
    this.cbb_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$handlePressInteractionCancel$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$handlePressInteractionCancel$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$handlePressInteractionCancel$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.abb_1.tb5(this.bbb_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = this.cbb_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.jy();
            }

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
  protoOf(AbstractClickableNode$handlePressInteractionCancel$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$handlePressInteractionCancel$slambda(this.abb_1, this.bbb_1, this.cbb_1, completion);
    i.dbb_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$handlePressInteractionCancel$slambda_0($interactionSource, $endInteraction, $handler, resultContinuation) {
    var i = new AbstractClickableNode$handlePressInteractionCancel$slambda($interactionSource, $endInteraction, $handler, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$emitHoverEnter$slambda($interactionSource, $interaction, resultContinuation) {
    this.mbb_1 = $interactionSource;
    this.nbb_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.mbb_1.tb5(this.nbb_1, this);
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
  protoOf(AbstractClickableNode$emitHoverEnter$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$emitHoverEnter$slambda(this.mbb_1, this.nbb_1, completion);
    i.obb_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$emitHoverEnter$slambda_0($interactionSource, $interaction, resultContinuation) {
    var i = new AbstractClickableNode$emitHoverEnter$slambda($interactionSource, $interaction, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode$emitHoverExit$slambda($interactionSource, $interaction, resultContinuation) {
    this.xbb_1 = $interactionSource;
    this.ybb_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AbstractClickableNode$emitHoverExit$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AbstractClickableNode$emitHoverExit$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AbstractClickableNode$emitHoverExit$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.xbb_1.tb5(this.ybb_1, this);
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
  protoOf(AbstractClickableNode$emitHoverExit$slambda).q1k = function ($this$launch, completion) {
    var i = new AbstractClickableNode$emitHoverExit$slambda(this.xbb_1, this.ybb_1, completion);
    i.zbb_1 = $this$launch;
    return i;
  };
  function AbstractClickableNode$emitHoverExit$slambda_0($interactionSource, $interaction, resultContinuation) {
    var i = new AbstractClickableNode$emitHoverExit$slambda($interactionSource, $interaction, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function AbstractClickableNode(interactionSource, indicationNodeFactory, useLocalIndication, enabled, onClickLabel, role, onClick) {
    DelegatingNode.call(this);
    this.ib2_1 = interactionSource;
    this.jb2_1 = indicationNodeFactory;
    this.kb2_1 = useLocalIndication;
    this.lb2_1 = onClickLabel;
    this.mb2_1 = role;
    this.nb2_1 = enabled;
    this.ob2_1 = onClick;
    this.pb2_1 = false;
    var tmp = this;
    var tmp_0 = this.ib2_1;
    var tmp_1 = Companion_getInstance_7().h6x_1;
    tmp.qb2_1 = new FocusableNode(tmp_0, tmp_1, AbstractClickableNode$onFocusChange$ref(this));
    this.rb2_1 = null;
    this.sb2_1 = null;
    this.tb2_1 = null;
    this.ub2_1 = null;
    this.vb2_1 = null;
    this.wb2_1 = null;
    this.xb2_1 = mutableLongObjectMapOf();
    this.yb2_1 = Companion_getInstance_6().e46_1;
    this.zb2_1 = null;
    this.ab3_1 = null;
    this.bb3_1 = this.ib2_1;
    this.cb3_1 = shouldLazilyCreateIndication(this);
    this.db3_1 = null;
    this.eb3_1 = TraverseKey_instance;
  }
  protoOf(AbstractClickableNode).c6k = function () {
    return this.pb2_1;
  };
  protoOf(AbstractClickableNode).db4 = function () {
    return null;
  };
  protoOf(AbstractClickableNode).eb4 = function (_this__u8e3s4) {
  };
  protoOf(AbstractClickableNode).ab4 = function (interactionSource, indicationNodeFactory, useLocalIndication, enabled, onClickLabel, role, onClick) {
    var isIndicationNodeDirty = false;
    if (!equals(this.bb3_1, interactionSource)) {
      this.fb4();
      this.bb3_1 = interactionSource;
      this.ib2_1 = interactionSource;
      isIndicationNodeDirty = true;
    }
    if (!equals(this.jb2_1, indicationNodeFactory)) {
      this.jb2_1 = indicationNodeFactory;
      isIndicationNodeDirty = true;
    }
    if (!(this.kb2_1 === useLocalIndication)) {
      this.kb2_1 = useLocalIndication;
      if (useLocalIndication) {
        this.w6q();
      }
      isIndicationNodeDirty = true;
    }
    if (!(this.nb2_1 === enabled)) {
      if (enabled) {
        this.t84(this.qb2_1);
      } else {
        this.v84(this.qb2_1);
        this.fb4();
      }
      invalidateSemantics(this);
      this.nb2_1 = enabled;
    }
    if (!(this.lb2_1 == onClickLabel)) {
      this.lb2_1 = onClickLabel;
      invalidateSemantics(this);
    }
    var tmp = this.mb2_1;
    var tmp_0 = tmp == null ? null : new Role(tmp);
    var tmp_1 = role;
    if (!equals(tmp_0, tmp_1 == null ? null : new Role(tmp_1))) {
      this.mb2_1 = role;
      invalidateSemantics(this);
    }
    this.ob2_1 = onClick;
    if (!(this.cb3_1 === shouldLazilyCreateIndication(this))) {
      this.cb3_1 = shouldLazilyCreateIndication(this);
      if (!this.cb3_1 && this.ub2_1 == null)
        isIndicationNodeDirty = true;
    }
    if (isIndicationNodeDirty) {
      recreateIndicationIfNeeded(this);
    }
    this.qb2_1.fb5(this.ib2_1);
  };
  protoOf(AbstractClickableNode).yb3 = function (size) {
    var minimumTouchTargetSizeDp = currentValueOf(this, get_LocalViewConfiguration()).n7n();
    // Inline function 'kotlin.with' call
    var minimumTouchTargetSize = requireDensity(this).v47(minimumTouchTargetSizeDp);
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(minimumTouchTargetSize);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_0 = _IntSize___get_packedValue__impl__uho7jf(size);
    // Inline function 'kotlin.math.max' call
    var b = tmp - convertToInt(shiftRight(value_0, 32));
    var horizontal = Math.max(0.0, b) / 2.0;
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_1 = _Size___get_packedValue__impl__7rlt1o(minimumTouchTargetSize);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
    var tmp_0 = floatFromBits(bits_0);
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_2 = _IntSize___get_packedValue__impl__uho7jf(size);
    // Inline function 'kotlin.math.max' call
    var b_0 = tmp_0 - convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
    var vertical = Math.max(0.0, b_0) / 2.0;
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(horizontal));
    var v2 = fromInt(toRawBits(vertical));
    var tmp$ret$17 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _Size___init__impl__aywn0g(tmp$ret$17);
  };
  protoOf(AbstractClickableNode).g6k = function () {
    this.w6q();
    if (!this.cb3_1) {
      initializeIndicationAndInteractionSourceIfNeeded(this);
    }
    if (this.nb2_1) {
      this.t84(this.qb2_1);
    }
  };
  protoOf(AbstractClickableNode).w6q = function () {
    if (this.kb2_1) {
      observeReads(this, AbstractClickableNode$onObservedReadsChanged$lambda(this));
    }
  };
  protoOf(AbstractClickableNode).i6k = function () {
    this.fb4();
    if (this.bb3_1 == null) {
      this.ib2_1 = null;
    }
    var tmp0_safe_receiver = this.ub2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.v84(tmp0_safe_receiver);
    }
    this.ub2_1 = null;
    var tmp1_safe_receiver = this.tb2_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.v84(tmp1_safe_receiver);
    }
    this.tb2_1 = null;
  };
  protoOf(AbstractClickableNode).fb4 = function () {
    var tmp0_safe_receiver = this.ib2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.vb2_1;
      if (tmp0_safe_receiver_0 == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var interaction = new Cancel_0(tmp0_safe_receiver_0);
        tmp0_safe_receiver.rba(interaction);
      }
      var tmp1_safe_receiver = this.zb2_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var interaction_0 = new Cancel_0(tmp1_safe_receiver);
        tmp0_safe_receiver.rba(interaction_0);
      }
      var tmp2_safe_receiver = this.wb2_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        var interaction_1 = new Exit(tmp2_safe_receiver);
        tmp0_safe_receiver.rba(interaction_1);
      }
      // Inline function 'androidx.collection.LongObjectMap.forEachValue' call
      var this_0 = this.xb2_1;
      var v = this_0.ck_1;
      $l$block: {
        // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
        var m = this_0.ak_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$10 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$10, new Long(-2139062144, -2139062144))) {
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
                    var it = v[index];
                    tmp0_safe_receiver.rba(new Cancel_0(it));
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
    this.vb2_1 = null;
    this.zb2_1 = null;
    this.ab3_1 = null;
    this.wb2_1 = null;
    this.xb2_1.b2();
  };
  protoOf(AbstractClickableNode).o7e = function (pointerEvent, pass, bounds) {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.toOffset' call
    var this_0 = get_center(bounds);
    var tmp0 = _IntOffset___get_x__impl__qiqr5o(this_0);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = _IntOffset___get_y__impl__2avpwj(this_0);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    tmp.yb2_1 = _Offset___init__impl__c168vi(tmp$ret$2);
    initializeIndicationAndInteractionSourceIfNeeded(this);
    if (this.nb2_1) {
      initializeGestureCoordination(this);
      if (pass.equals(PointerEventPass_Main_getInstance())) {
        var tmp0_subject = pointerEvent.v7d_1;
        if (tmp0_subject === Companion_getInstance_8().c7f_1) {
          var tmp_0 = this.b6k();
          launch(tmp_0, VOID, VOID, AbstractClickableNode$onPointerEvent$slambda_0(this, null));
        } else if (tmp0_subject === Companion_getInstance_8().d7f_1) {
          var tmp_1 = this.b6k();
          launch(tmp_1, VOID, VOID, AbstractClickableNode$onPointerEvent$slambda_2(this, null));
        }
      }
    }
    if (this.sb2_1 == null) {
      var node = this.db4();
      if (!(node == null)) {
        this.sb2_1 = this.t84(node);
      }
    }
    var tmp1_safe_receiver = this.sb2_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.o7e(pointerEvent, pass, bounds);
    }
  };
  protoOf(AbstractClickableNode).l7f = function () {
    var tmp0_safe_receiver = this.ib2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = this.wb2_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var interaction = new Exit(tmp0_safe_receiver_0);
        tmp = tmp0_safe_receiver.rba(interaction);
      }
    }
    this.wb2_1 = null;
    var tmp1_safe_receiver = this.sb2_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.l7f();
    }
  };
  protoOf(AbstractClickableNode).t6x = function (event) {
    initializeIndicationAndInteractionSourceIfNeeded(this);
    var keyCode = _Key___get_keyCode__impl__ymzu5v(get_key(event));
    var tmp;
    if (this.nb2_1 && get_isPress(event)) {
      var wasInteractionHandled = false;
      if (!this.xb2_1.ok(keyCode)) {
        var press = new Press(this.yb2_1);
        this.xb2_1.lk(keyCode, press);
        if (!(this.ib2_1 == null)) {
          var tmp_0 = this.b6k();
          launch(tmp_0, VOID, VOID, AbstractClickableNode$onKeyEvent$slambda_0(this, press, null));
        }
        wasInteractionHandled = true;
      }
      tmp = this.bb4(event) || wasInteractionHandled;
    } else if (this.nb2_1 && get_isClick(event)) {
      var press_0 = this.xb2_1.mk(keyCode);
      if (!(press_0 == null)) {
        if (!(this.ib2_1 == null)) {
          var tmp_1 = this.b6k();
          launch(tmp_1, VOID, VOID, AbstractClickableNode$onKeyEvent$slambda_2(this, press_0, null));
        }
        this.cb4(event);
      }
      tmp = !(press_0 == null);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(AbstractClickableNode).gb4 = function () {
  };
  protoOf(AbstractClickableNode).s6x = function (event) {
    return false;
  };
  protoOf(AbstractClickableNode).h72 = function () {
    return true;
  };
  protoOf(AbstractClickableNode).h71 = function (_this__u8e3s4) {
    var tmp = this.mb2_1;
    if (!((tmp == null ? null : new Role(tmp)) == null)) {
      var tmp_0 = this.mb2_1;
      set_role(_this__u8e3s4, ensureNotNull(tmp_0 == null ? null : new Role(tmp_0)).k8v_1);
    }
    var tmp0_label = this.lb2_1;
    onClick(_this__u8e3s4, tmp0_label, AbstractClickableNode$applySemantics$lambda(this));
    if (this.nb2_1) {
      // Inline function 'kotlin.with' call
      this.qb2_1.h71(_this__u8e3s4);
    } else {
      disabled(_this__u8e3s4);
    }
    this.eb4(_this__u8e3s4);
  };
  protoOf(AbstractClickableNode).gb3 = function (event) {
    var tmp0_safe_receiver = this.ib2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var press = new Press(event.y7d_1);
      var tmp;
      if (delayPressInteraction_0(this, event)) {
        var tmp_0 = this;
        var tmp_1 = this.b6k();
        tmp_0.db3_1 = launch(tmp_1, VOID, VOID, AbstractClickableNode$handlePressInteractionStart$slambda_0(tmp0_safe_receiver, press, this, null));
        tmp = Unit_instance;
      } else {
        this.vb2_1 = press;
        var tmp_2 = this.b6k();
        tmp = launch(tmp_2, VOID, VOID, AbstractClickableNode$handlePressInteractionStart$slambda_2(tmp0_safe_receiver, press, null));
      }
    }
  };
  protoOf(AbstractClickableNode).fb3 = function (offset, indirectPointer) {
    var tmp0_safe_receiver = this.ib2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var press = new Press(offset);
      var tmp;
      if (ComposeFoundationFlags_instance.pb3_1) {
        tmp = delayPressInteraction_0(this, null);
      } else {
        tmp = delayPressInteraction(this);
      }
      var shouldDelayPress = tmp;
      var tmp_0;
      if (shouldDelayPress) {
        var tmp_1 = this;
        var tmp_2 = this.b6k();
        tmp_1.db3_1 = launch(tmp_2, VOID, VOID, AbstractClickableNode$handlePressInteractionStart$slambda_4(tmp0_safe_receiver, press, indirectPointer, this, null));
        tmp_0 = Unit_instance;
      } else {
        if (indirectPointer) {
          this.zb2_1 = press;
        } else {
          this.vb2_1 = press;
        }
        var tmp_3 = this.b6k();
        tmp_0 = launch(tmp_3, VOID, VOID, AbstractClickableNode$handlePressInteractionStart$slambda_6(tmp0_safe_receiver, press, null));
      }
    }
  };
  protoOf(AbstractClickableNode).xb3 = function (offset, indirectPointer) {
    var tmp0_safe_receiver = this.ib2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var job = this.db3_1;
      if ((job == null ? null : job.ju()) === true) {
        job.sv();
        var tmp = this.b6k();
        launch(tmp, VOID, VOID, AbstractClickableNode$handlePressInteractionRelease$slambda_0(job, offset, tmp0_safe_receiver, null));
      } else {
        var interaction = indirectPointer ? this.zb2_1 : this.vb2_1;
        if (interaction == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          var tmp_0 = this.b6k();
          launch(tmp_0, VOID, VOID, AbstractClickableNode$handlePressInteractionRelease$slambda_2(interaction, tmp0_safe_receiver, null));
        }
      }
      if (indirectPointer) {
        this.zb2_1 = null;
      } else {
        this.vb2_1 = null;
      }
    }
  };
  protoOf(AbstractClickableNode).zb3 = function (indirectPointer) {
    var tmp0_safe_receiver = this.ib2_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp1_safe_receiver = this.db3_1;
      if ((tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ju()) === true) {
        var tmp0_safe_receiver_0 = this.db3_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          tmp0_safe_receiver_0.sv();
        }
      } else {
        var interaction = indirectPointer ? this.zb2_1 : this.vb2_1;
        if (interaction == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          var endInteraction = new Cancel_0(interaction);
          var tmp0_safe_receiver_1 = this.b6k().iu().y8(Key_instance);
          var tmp;
          if (tmp0_safe_receiver_1 == null) {
            tmp = null;
          } else {
            tmp = tmp0_safe_receiver_1.lv(AbstractClickableNode$handlePressInteractionCancel$lambda(tmp0_safe_receiver, endInteraction));
          }
          var handler = tmp;
          var tmp_0 = this.b6k();
          launch(tmp_0, VOID, VOID, AbstractClickableNode$handlePressInteractionCancel$slambda_0(tmp0_safe_receiver, endInteraction, handler, null));
        }
      }
      if (indirectPointer) {
        this.zb2_1 = null;
      } else {
        this.vb2_1 = null;
      }
    }
  };
  protoOf(AbstractClickableNode).r6n = function () {
    return this.eb3_1;
  };
  function requestFocusWhenInMouseInputMode(_this__u8e3s4) {
    if (isRequestFocusOnClickEnabled()) {
      requestFocus(_this__u8e3s4);
    }
  }
  function unsupportedIndicationExceptionMessage(indication) {
    return 'clickable only supports IndicationNodeFactory instances provided to LocalIndication, but Indication was provided instead. Either migrate the Indication implementation to implement IndicationNodeFactory, or use the other clickable overload that takes an Indication parameter, and explicitly pass LocalIndication.current there. The Indication' + (' instance provided here was: ' + toString(indication));
  }
  function get_isPress(_this__u8e3s4) {
    return get_type(_this__u8e3s4) === Companion_getInstance_9().b6x_1 && get_isEnter(_this__u8e3s4);
  }
  function get_isClick(_this__u8e3s4) {
    return get_type(_this__u8e3s4) === Companion_getInstance_9().a6x_1 && get_isEnter(_this__u8e3s4);
  }
  function hasScrollableContainer(_this__u8e3s4) {
    var hasScrollable = {_v: false};
    var tmp = TraverseKey_instance_3;
    traverseAncestors(_this__u8e3s4, tmp, hasScrollableContainer$lambda(hasScrollable));
    return hasScrollable._v;
  }
  function hasInterestedParent(_this__u8e3s4, event) {
    var hasInterestedParent = {_v: false};
    traverseAncestorGestureConnections(_this__u8e3s4, hasInterestedParent$lambda(event, hasInterestedParent));
    return hasInterestedParent._v;
  }
  function get_isEnter(_this__u8e3s4) {
    var tmp0_subject = get_key(_this__u8e3s4);
    return equals(tmp0_subject, Companion_getInstance_10().l96_1) || equals(tmp0_subject, Companion_getInstance_10().z93_1) || (equals(tmp0_subject, Companion_getInstance_10().u95_1) || equals(tmp0_subject, Companion_getInstance_10().y93_1)) ? true : false;
  }
  function clickable$lambda($indication, $enabled, $onClickLabel, $role, $onClick) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1y(-1525724089);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp;
      if (false || it === Companion_getInstance_11().f1y_1) {
        var value = funMutableInteractionSource();
        $composer_0.f1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var newInteractionSource = tmp;
      var tmp_0 = indication(Companion_instance_0, newInteractionSource, $indication);
      var tmp$ret$4 = new ClickableElement(newInteractionSource, null, false, $enabled, $onClickLabel, $role, $onClick);
      var tmp0 = tmp_0.e6j(tmp$ret$4);
      $composer_0.n1y();
      return tmp0;
    };
  }
  function hasScrollableContainer$lambda($hasScrollable) {
    return function (node) {
      var tmp;
      if ($hasScrollable._v) {
        tmp = true;
      } else {
        tmp = (node instanceof ScrollableContainerNode ? node : THROW_CCE()).obc_1;
      }
      $hasScrollable._v = tmp;
      return !$hasScrollable._v;
    };
  }
  function hasInterestedParent$lambda($event, $hasInterestedParent) {
    return function (coordinator) {
      var isCoordinatorInterested = coordinator.hb4($event);
      $hasInterestedParent._v = $hasInterestedParent._v || isCoordinatorInterested;
      return !$hasInterestedParent._v;
    };
  }
  var androidx_compose_foundation_ComposeFoundationFlags$stable;
  function ComposeFoundationFlags() {
    this.hb3_1 = false;
    this.ib3_1 = true;
    this.jb3_1 = true;
    this.kb3_1 = true;
    this.lb3_1 = true;
    this.mb3_1 = true;
    this.nb3_1 = true;
    this.ob3_1 = true;
    this.pb3_1 = true;
    this.qb3_1 = true;
    this.rb3_1 = true;
    this.sb3_1 = true;
    this.tb3_1 = true;
    this.ub3_1 = true;
    this.vb3_1 = true;
    this.wb3_1 = true;
  }
  var ComposeFoundationFlags_instance;
  function ComposeFoundationFlags_getInstance() {
    return ComposeFoundationFlags_instance;
  }
  function isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    return _isSystemInDarkTheme($composer_0, 0);
  }
  var androidx_compose_foundation_FocusableNode$stable;
  function TraverseKey_0() {
  }
  var TraverseKey_instance_0;
  function TraverseKey_getInstance_0() {
    return TraverseKey_instance_0;
  }
  function _get_focusedBoundsObserver__j1jje9($this) {
    var tmp;
    if ($this.a6k_1) {
      var tmp_0 = findNearestAncestor($this, TraverseKey_instance_1);
      tmp = tmp_0 instanceof FocusedBoundsObserverNode ? tmp_0 : null;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function onFocusStateChange($this, previousState, currentState) {
    if (!$this.a6k_1)
      return Unit_instance;
    var isFocused = currentState.y6z();
    var wasFocused = previousState.y6z();
    if (isFocused === wasFocused)
      return Unit_instance;
    var tmp0_safe_receiver = $this.zb4_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver(isFocused);
    if (isFocused) {
      var tmp = $this.b6k();
      launch(tmp, VOID, VOID, FocusableNode$onFocusStateChange$slambda_0($this, null));
      var pinnableContainer = retrievePinnableContainer($this);
      var tmp_0 = $this;
      tmp_0.cb5_1 = pinnableContainer == null ? null : pinnableContainer.fbd();
      notifyObserverWhenAttached($this);
    } else {
      var tmp2_safe_receiver = $this.cb5_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.x1t();
      }
      $this.cb5_1 = null;
      var tmp3_safe_receiver = _get_focusedBoundsObserver__j1jje9($this);
      if (tmp3_safe_receiver == null)
        null;
      else {
        tmp3_safe_receiver.ebd(null);
      }
    }
    invalidateSemantics($this);
    emitInteraction($this, isFocused);
  }
  function retrievePinnableContainer($this) {
    var container = {_v: null};
    observeReads($this, FocusableNode$retrievePinnableContainer$lambda(container, $this));
    return container._v;
  }
  function notifyObserverWhenAttached($this) {
    if (!($this.db5_1 == null) && ensureNotNull($this.db5_1).w6n()) {
      var tmp0_safe_receiver = _get_focusedBoundsObserver__j1jje9($this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.ebd($this.db5_1);
      }
    }
  }
  function emitInteraction($this, isFocused) {
    var tmp0_safe_receiver = $this.yb4_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp;
      if (isFocused) {
        var tmp0_safe_receiver_0 = $this.bb5_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          var interaction = new Unfocus(tmp0_safe_receiver_0);
          emitWithFallback($this, tmp0_safe_receiver, interaction);
          $this.bb5_1 = null;
        }
        var interaction_0 = new Focus();
        emitWithFallback($this, tmp0_safe_receiver, interaction_0);
        $this.bb5_1 = interaction_0;
        tmp = Unit_instance;
      } else {
        var tmp1_safe_receiver = $this.bb5_1;
        var tmp_0;
        if (tmp1_safe_receiver == null) {
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.let' call
          var interaction_1 = new Unfocus(tmp1_safe_receiver);
          emitWithFallback($this, tmp0_safe_receiver, interaction_1);
          $this.bb5_1 = null;
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
    }
  }
  function disposeInteractionSource($this) {
    var tmp0_safe_receiver = $this.yb4_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = $this.bb5_1;
      var tmp;
      if (tmp0_safe_receiver_0 == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.let' call
        var interaction = new Unfocus(tmp0_safe_receiver_0);
        tmp = tmp0_safe_receiver.rba(interaction);
      }
    }
    $this.bb5_1 = null;
  }
  function emitWithFallback($this, $receiver, interaction) {
    if ($this.a6k_1) {
      var tmp0_safe_receiver = $this.b6k().iu().y8(Key_instance);
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp = tmp0_safe_receiver.lv(FocusableNode$emitWithFallback$lambda($receiver, interaction));
      }
      var handler = tmp;
      var tmp_0 = $this.b6k();
      launch(tmp_0, VOID, VOID, FocusableNode$emitWithFallback$slambda_0($receiver, interaction, handler, null));
    } else {
      $receiver.rba(interaction);
    }
  }
  function FocusableNode$onFocusStateChange$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      var tmp0 = p0;
      onFocusStateChange(tmp0, p0_0, p1);
      return Unit_instance;
    }, 2, 0, 146, 'onFocusStateChange', [p0]);
  }
  function FocusableNode$onFocusStateChange$slambda(this$0, resultContinuation) {
    this.obd_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FocusableNode$onFocusStateChange$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(FocusableNode$onFocusStateChange$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FocusableNode$onFocusStateChange$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = bringIntoView(this.obd_1, VOID, this);
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
  protoOf(FocusableNode$onFocusStateChange$slambda).q1k = function ($this$launch, completion) {
    var i = new FocusableNode$onFocusStateChange$slambda(this.obd_1, completion);
    i.pbd_1 = $this$launch;
    return i;
  };
  function FocusableNode$onFocusStateChange$slambda_0(this$0, resultContinuation) {
    var i = new FocusableNode$onFocusStateChange$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function FocusableNode$requestFocus$ref(p0) {
    return constructCallableReference(function () {
      return p0.q9e();
    }, 0, 0, 147, 'requestFocus', [p0]);
  }
  function FocusableNode$retrievePinnableContainer$lambda($container, this$0) {
    return function () {
      $container._v = currentValueOf(this$0, get_LocalPinnableContainer());
      return Unit_instance;
    };
  }
  function FocusableNode$emitWithFallback$lambda($this_emitWithFallback, $interaction) {
    return function (it) {
      $this_emitWithFallback.rba($interaction);
      return Unit_instance;
    };
  }
  function FocusableNode$emitWithFallback$slambda($this_emitWithFallback, $interaction, $handler, resultContinuation) {
    this.ybd_1 = $this_emitWithFallback;
    this.zbd_1 = $interaction;
    this.abe_1 = $handler;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FocusableNode$emitWithFallback$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(FocusableNode$emitWithFallback$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FocusableNode$emitWithFallback$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.ybd_1.tb5(this.zbd_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_safe_receiver = this.abe_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              tmp0_safe_receiver.jy();
            }

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
  protoOf(FocusableNode$emitWithFallback$slambda).q1k = function ($this$launch, completion) {
    var i = new FocusableNode$emitWithFallback$slambda(this.ybd_1, this.zbd_1, this.abe_1, completion);
    i.bbe_1 = $this$launch;
    return i;
  };
  function FocusableNode$emitWithFallback$slambda_0($this_emitWithFallback, $interaction, $handler, resultContinuation) {
    var i = new FocusableNode$emitWithFallback$slambda($this_emitWithFallback, $interaction, $handler, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function FocusableNode(interactionSource, focusability, onFocusChange) {
    focusability = focusability === VOID ? Companion_getInstance_7().g6x_1 : focusability;
    onFocusChange = onFocusChange === VOID ? null : onFocusChange;
    DelegatingNode.call(this);
    this.yb4_1 = interactionSource;
    this.zb4_1 = onFocusChange;
    this.ab5_1 = false;
    this.bb5_1 = null;
    this.cb5_1 = null;
    this.db5_1 = null;
    var tmp = this;
    tmp.eb5_1 = this.t84(funFocusTargetModifierNode2(focusability, FocusableNode$onFocusStateChange$ref(this)));
  }
  protoOf(FocusableNode).c6k = function () {
    return this.ab5_1;
  };
  protoOf(FocusableNode).r6n = function () {
    return TraverseKey_instance_0;
  };
  protoOf(FocusableNode).q9e = function () {
    return this.eb5_1.u6z();
  };
  protoOf(FocusableNode).fb5 = function (interactionSource) {
    if (!equals(this.yb4_1, interactionSource)) {
      disposeInteractionSource(this);
      this.yb4_1 = interactionSource;
    }
  };
  protoOf(FocusableNode).h71 = function (_this__u8e3s4) {
    set_focused(_this__u8e3s4, this.eb5_1.u6v().y6z());
    requestFocus_0(_this__u8e3s4, VOID, FocusableNode$requestFocus$ref(this));
  };
  protoOf(FocusableNode).l6k = function () {
    var tmp0_safe_receiver = this.cb5_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.x1t();
    }
    this.cb5_1 = null;
  };
  protoOf(FocusableNode).w6q = function () {
    var pinnableContainer = retrievePinnableContainer(this);
    if (this.eb5_1.u6v().y6z()) {
      var tmp0_safe_receiver = this.cb5_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.x1t();
      }
      var tmp = this;
      tmp.cb5_1 = pinnableContainer == null ? null : pinnableContainer.fbd();
    }
  };
  protoOf(FocusableNode).z7t = function (coordinates) {
    this.db5_1 = coordinates;
    if (!this.eb5_1.u6v().y6z())
      return Unit_instance;
    if (coordinates.w6n()) {
      notifyObserverWhenAttached(this);
    } else {
      var tmp0_safe_receiver = _get_focusedBoundsObserver__j1jje9(this);
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.ebd(null);
      }
    }
  };
  var androidx_compose_foundation_FocusedBoundsObserverNode$stable;
  function TraverseKey_1() {
  }
  var TraverseKey_instance_1;
  function TraverseKey_getInstance_1() {
    return TraverseKey_instance_1;
  }
  function FocusedBoundsObserverNode() {
  }
  protoOf(FocusedBoundsObserverNode).ebd = function (focusedBounds) {
    this.dbd_1(focusedBounds);
    var tmp0_safe_receiver = findNearestAncestor_0(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.ebd(focusedBounds);
    }
  };
  function GestureConnection() {
  }
  function gestureNode(gestureConnection) {
    return new GestureNode(gestureConnection);
  }
  function get_parentGestureConnection(_this__u8e3s4) {
    var tmp = findNearestAncestor(_this__u8e3s4, TraverseKey_instance_2);
    var tmp0_safe_receiver = tmp instanceof GestureNode ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.qbe_1;
  }
  function traverseAncestorGestureConnections(_this__u8e3s4, block) {
    var tmp = TraverseKey_instance_2;
    traverseAncestors(_this__u8e3s4, tmp, traverseAncestorGestureConnections$lambda(block));
  }
  function TraverseKey_2() {
  }
  var TraverseKey_instance_2;
  function TraverseKey_getInstance_2() {
    return TraverseKey_instance_2;
  }
  function GestureNode(gestureConnection) {
    Node.call(this);
    this.qbe_1 = gestureConnection;
  }
  protoOf(GestureNode).r6n = function () {
    return TraverseKey_instance_2;
  };
  function traverseAncestorGestureConnections$lambda($block) {
    return function (node) {
      // Inline function 'kotlin.check' call
      if (!(node instanceof GestureNode)) {
        var message = 'Node is not a GestureNode instance';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return $block(node.qbe_1);
    };
  }
  function Image(painter, contentDescription, modifier, alignment, contentScale, alpha, colorFilter, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var alignment_0 = {_v: alignment};
    var contentScale_0 = {_v: contentScale};
    var alpha_0 = {_v: alpha};
    var colorFilter_0 = {_v: colorFilter};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(1142754848);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ((($changed & 8) === 0 ? $composer_0.g1z(painter) : $composer_0.l1z(painter)) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g1z(contentDescription) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.g1z(modifier_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.g1z(alignment_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.g1z(contentScale_0._v) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.j1z(alpha_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.g1z(colorFilter_0._v) ? 1048576 : 524288);
    if ($composer_0.n1z(!(($dirty & 599187) === 599186), $dirty & 1)) {
      if (!(($default & 4) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (!(($default & 8) === 0)) {
        alignment_0._v = Companion_getInstance_12().a6i_1;
      }
      if (!(($default & 16) === 0)) {
        contentScale_0._v = Companion_getInstance_13().z6q_1;
      }
      if (!(($default & 32) === 0)) {
        alpha_0._v = 1.0;
      }
      if (!(($default & 64) === 0)) {
        colorFilter_0._v = null;
      }
      var tmp;
      if (!(contentDescription == null)) {
        $composer_0.m1y(1899222916);
        var tmp_0 = Companion_instance_0;
        var tmp0 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = ($dirty & 112) === 32;
        // Inline function 'kotlin.let' call
        var it = tmp0.e1z();
        var tmp_1;
        if (invalid || it === Companion_getInstance_11().f1y_1) {
          var value = Image$lambda(contentDescription);
          tmp0.f1z(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp$ret$0 = tmp_1;
        var tmp0_group = semantics(tmp_0, VOID, tmp$ret$0);
        $composer_0.n1y();
        tmp = tmp0_group;
      } else {
        $composer_0.m1y(1899381698);
        $composer_0.n1y();
        tmp = Companion_instance_0;
      }
      var semantics_0 = tmp;
      var tmp0_0 = paint(clipToBounds(modifier_0._v.e6j(semantics_0)), painter, VOID, alignment_0._v, contentScale_0._v, alpha_0._v, colorFilter_0._v);
      // Inline function 'androidx.compose.runtime.cache' call
      var this_0 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_0.e1z();
      var tmp_2;
      if (false || it_0 === Companion_getInstance_11().f1y_1) {
        var tmp_3 = Image$lambda_0;
        var value_0 = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp_3);
        this_0.f1z(value_0);
        tmp_2 = value_0;
      } else {
        tmp_2 = it_0;
      }
      var tmp2 = tmp_2;
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = tmp0_0;
      var $composer_1 = $composer_0;
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance_0;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_1, 0).hashCode();
      var materialized = materialize($composer_1, modifier_1);
      var localMap = $composer_1.p1z();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_14().b84_1;
      var $composer_2 = $composer_1;
      var tmp_4 = $composer_2.g1y();
      if (!isInterface(tmp_4, Applier)) {
        invalidApplier();
      }
      $composer_2.z1y();
      if ($composer_2.h1y()) {
        $composer_2.a1z(factory);
      } else {
        $composer_2.b1z();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_2);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance_14().g84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_14().f84_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_14().k84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_14().d84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_14().j84_1);
      $composer_2.c1z();
    } else {
      $composer_0.y1y();
    }
    var tmp1_safe_receiver = $composer_0.t1y();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d2a(Image$lambda_1(painter, contentDescription, modifier_0, alignment_0, contentScale_0, alpha_0, colorFilter_0, $changed, $default));
    }
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.rbe_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).y7s = function (_this__u8e3s4, measurables, constraints) {
    return this.rbe_1(_this__u8e3s4, measurables, new Constraints(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).r2 = function () {
    return this.rbe_1;
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, MeasurePolicy) : false) {
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
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function Image$lambda($contentDescription) {
    return function ($this$semantics) {
      set_contentDescription($this$semantics, $contentDescription);
      set_role($this$semantics, Companion_getInstance_15().u8v_1);
      return Unit_instance;
    };
  }
  function Image$lambda_0($this$Layout, _unused_var__etf5q3, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.g47_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.g47_1);
    return $this$Layout.s6s(tmp, tmp_0, VOID, Image$lambda$lambda);
  }
  function Image$lambda$lambda($this$layout) {
    return Unit_instance;
  }
  function Image$lambda_1($painter, $contentDescription, $modifier, $alignment, $contentScale, $alpha, $colorFilter, $$changed, $$default) {
    return function ($composer, $force) {
      Image($painter, $contentDescription, $modifier._v, $alignment._v, $contentScale._v, $alpha._v, $colorFilter._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function get_LocalIndication() {
    _init_properties_Indication_kt__w3ndj0();
    return LocalIndication;
  }
  var LocalIndication;
  function IndicationNodeFactory() {
  }
  function Indication() {
  }
  function indication(_this__u8e3s4, interactionSource, indication) {
    _init_properties_Indication_kt__w3ndj0();
    return indicationImpl(_this__u8e3s4, interactionSource, platformIndication(indication));
  }
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda($pressCount, $hoverCount, $focusCount, this$0, resultContinuation) {
    this.bbf_1 = $pressCount;
    this.cbf_1 = $hoverCount;
    this.dbf_1 = $focusCount;
    this.ebf_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).gbf = function (interaction, $completion) {
    var tmp = this.hbf(interaction, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).d9 = function (p1, $completion) {
    return this.gbf((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          var tmp0_subject = this.fbf_1;
          if (tmp0_subject instanceof Press) {
            var _unary__edvuaz = this.bbf_1._v;
            this.bbf_1._v = _unary__edvuaz + 1 | 0;
          } else {
            if (tmp0_subject instanceof Release) {
              var _unary__edvuaz_0 = this.bbf_1._v;
              this.bbf_1._v = _unary__edvuaz_0 - 1 | 0;
            } else {
              if (tmp0_subject instanceof Cancel_0) {
                var _unary__edvuaz_1 = this.bbf_1._v;
                this.bbf_1._v = _unary__edvuaz_1 - 1 | 0;
              } else {
                if (tmp0_subject instanceof Enter) {
                  var _unary__edvuaz_2 = this.cbf_1._v;
                  this.cbf_1._v = _unary__edvuaz_2 + 1 | 0;
                } else {
                  if (tmp0_subject instanceof Exit) {
                    var _unary__edvuaz_3 = this.cbf_1._v;
                    this.cbf_1._v = _unary__edvuaz_3 - 1 | 0;
                  } else {
                    if (tmp0_subject instanceof Focus) {
                      var _unary__edvuaz_4 = this.dbf_1._v;
                      this.dbf_1._v = _unary__edvuaz_4 + 1 | 0;
                    } else {
                      if (tmp0_subject instanceof Unfocus) {
                        var _unary__edvuaz_5 = this.dbf_1._v;
                        this.dbf_1._v = _unary__edvuaz_5 - 1 | 0;
                      }
                    }
                  }
                }
              }
            }
          }
          var pressed = this.bbf_1._v > 0;
          var hovered = this.cbf_1._v > 0;
          var focused = this.dbf_1._v > 0;
          var invalidateNeeded = false;
          if (!(this.ebf_1.xbf_1 === pressed)) {
            this.ebf_1.xbf_1 = pressed;
            invalidateNeeded = true;
          }
          if (!(this.ebf_1.ybf_1 === hovered)) {
            this.ebf_1.ybf_1 = hovered;
            invalidateNeeded = true;
          }
          if (!(this.ebf_1.zbf_1 === focused)) {
            this.ebf_1.zbf_1 = focused;
            invalidateNeeded = true;
          }
          if (invalidateNeeded) {
            invalidateDraw(this.ebf_1);
          }
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
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda).hbf = function (interaction, completion) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda(this.bbf_1, this.cbf_1, this.dbf_1, this.ebf_1, completion);
    i.fbf_1 = interaction;
    return i;
  };
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda_0($pressCount, $hoverCount, $focusCount, this$0, resultContinuation) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda($pressCount, $hoverCount, $focusCount, this$0, resultContinuation);
    return constructCallableReference(function (interaction, $completion) {
      return i.gbf(interaction, $completion);
    }, 1);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.abg_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).l1f = function (value, $completion) {
    return this.abg_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).r2 = function () {
    return this.abg_1;
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
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda(this$0, resultContinuation) {
    this.jbg_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            var pressCount = {_v: 0};
            var hoverCount = {_v: 0};
            var focusCount = {_v: 0};
            this.l8_1 = 1;
            var tmp_0 = this.jbg_1.wbf_1.lbg();
            var tmp_1 = DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda$slambda_0(pressCount, hoverCount, focusCount, this.jbg_1, null);
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
  protoOf(DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda).q1k = function ($this$launch, completion) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda(this.jbg_1, completion);
    i.kbg_1 = $this$launch;
    return i;
  };
  function DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function DefaultDebugIndicationInstance(interactionSource) {
    Node.call(this);
    this.wbf_1 = interactionSource;
    this.xbf_1 = false;
    this.ybf_1 = false;
    this.zbf_1 = false;
  }
  protoOf(DefaultDebugIndicationInstance).g6k = function () {
    var tmp = this.b6k();
    launch(tmp, VOID, VOID, DefaultDebugIndication$DefaultDebugIndicationInstance$onAttach$slambda_0(this, null));
  };
  protoOf(DefaultDebugIndicationInstance).d6o = function (_this__u8e3s4) {
    _this__u8e3s4.t6s();
    if (this.xbf_1) {
      _this__u8e3s4.f5b(Color__copy$default_impl_ectz3s(Companion_getInstance().h4x_1, 0.3), VOID, _this__u8e3s4.f5a());
    } else if (this.ybf_1 || this.zbf_1) {
      _this__u8e3s4.f5b(Color__copy$default_impl_ectz3s(Companion_getInstance().h4x_1, 0.1), VOID, _this__u8e3s4.f5a());
    }
  };
  function DefaultDebugIndication() {
  }
  protoOf(DefaultDebugIndication).gb5 = function (interactionSource) {
    return new DefaultDebugIndicationInstance(interactionSource);
  };
  protoOf(DefaultDebugIndication).hashCode = function () {
    return -1;
  };
  protoOf(DefaultDebugIndication).equals = function (other) {
    return other === this;
  };
  var DefaultDebugIndication_instance;
  function DefaultDebugIndication_getInstance() {
    return DefaultDebugIndication_instance;
  }
  function NoIndicationInstance() {
  }
  protoOf(NoIndicationInstance).mbg = function (_this__u8e3s4) {
    _this__u8e3s4.t6s();
  };
  var NoIndicationInstance_instance;
  function NoIndicationInstance_getInstance() {
    return NoIndicationInstance_instance;
  }
  function indicationImpl(_this__u8e3s4, interactionSource, indication) {
    _init_properties_Indication_kt__w3ndj0();
    if (indication == null)
      return _this__u8e3s4;
    if (isInterface(indication, IndicationNodeFactory)) {
      return _this__u8e3s4.e6j(new IndicationModifierElement(interactionSource, indication));
    }
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = indicationImpl$lambda(interactionSource, indication);
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp0_inspectorInfo = tmp;
    return composed(_this__u8e3s4, tmp0_inspectorInfo, indicationImpl$lambda_0(indication, interactionSource));
  }
  function IndicationModifierElement(interactionSource, indication) {
    ModifierNodeElement.call(this);
    this.obg_1 = interactionSource;
    this.pbg_1 = indication;
  }
  protoOf(IndicationModifierElement).f2b = function () {
    return new IndicationModifierNode(this.pbg_1.gb5(this.obg_1));
  };
  protoOf(IndicationModifierElement).qbg = function (node) {
    node.ibh(this.pbg_1.gb5(this.obg_1));
  };
  protoOf(IndicationModifierElement).h6s = function (node) {
    return this.qbg(node instanceof IndicationModifierNode ? node : THROW_CCE());
  };
  protoOf(IndicationModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof IndicationModifierElement))
      return false;
    if (!equals(this.obg_1, other.obg_1))
      return false;
    if (!this.pbg_1.equals(other.pbg_1))
      return false;
    return true;
  };
  protoOf(IndicationModifierElement).hashCode = function () {
    var result = hashCode(this.obg_1);
    result = imul(31, result) + this.pbg_1.hashCode() | 0;
    return result;
  };
  function IndicationModifier(indicationInstance) {
    this.jbh_1 = indicationInstance;
  }
  protoOf(IndicationModifier).d6o = function (_this__u8e3s4) {
    // Inline function 'kotlin.with' call
    this.jbh_1.mbg(_this__u8e3s4);
  };
  function IndicationModifierNode(indicationNode) {
    DelegatingNode.call(this);
    this.hbh_1 = indicationNode;
    this.t84(this.hbh_1);
  }
  protoOf(IndicationModifierNode).ibh = function (indicationNode) {
    this.v84(this.hbh_1);
    this.hbh_1 = indicationNode;
    this.t84(indicationNode);
  };
  function LocalIndication$lambda() {
    _init_properties_Indication_kt__w3ndj0();
    return DefaultDebugIndication_instance;
  }
  function indicationImpl$lambda($interactionSource, $indication) {
    return function (_this__u8e3s4) {
      _this__u8e3s4.ba7_1 = 'indication';
      _this__u8e3s4.da7_1.fa7('interactionSource', $interactionSource);
      _this__u8e3s4.da7_1.fa7('indication', $indication);
      return Unit_instance;
    };
  }
  function indicationImpl$lambda_0($indication, $interactionSource) {
    return function ($this$composed, $composer, $changed) {
      var $composer_0 = $composer;
      $composer_0.m1y(-51460101);
      var instance = $indication.sbe($interactionSource, $composer_0, 0);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_0.g1z(instance);
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp;
      if (invalid || it === Companion_getInstance_11().f1y_1) {
        var value = new IndicationModifier(instance);
        $composer_0.f1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0 = tmp;
      $composer_0.n1y();
      return tmp0;
    };
  }
  var properties_initialized_Indication_kt_w71gpq;
  function _init_properties_Indication_kt__w3ndj0() {
    if (!properties_initialized_Indication_kt_w71gpq) {
      properties_initialized_Indication_kt_w71gpq = true;
      LocalIndication = compositionLocalOf(VOID, LocalIndication$lambda);
    }
  }
  var androidx_compose_foundation_MutationInterruptedException$stable;
  var androidx_compose_foundation_MutatorMutex$stable;
  var androidx_compose_foundation_ScrollState$stable;
  var androidx_compose_foundation_ScrollingLayoutElement$stable;
  var androidx_compose_foundation_ScrollNode$stable;
  var androidx_compose_foundation_border_BorderLogic$stable;
  var androidx_compose_foundation_content_ReceiveContentElement$stable;
  var androidx_compose_foundation_content_ReceiveContentNode$stable;
  var androidx_compose_foundation_contextmenu_ContextMenuPopupPositionProvider$stable;
  var androidx_compose_foundation_contextmenu_ContextMenuState_Status_Open$stable;
  var androidx_compose_foundation_contextmenu_ContextMenuState_Status_Closed$stable;
  var androidx_compose_foundation_contextmenu_ContextMenuState_Status$stable;
  var androidx_compose_foundation_contextmenu_ContextMenuState$stable;
  var androidx_compose_foundation_draganddrop_DragAndDropSourceNode$stable;
  function get_mouseSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseSlop;
  }
  var mouseSlop;
  function get_defaultTouchSlop() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return defaultTouchSlop;
  }
  var defaultTouchSlop;
  function get_mouseToTouchSlopRatio() {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return mouseToTouchSlopRatio;
  }
  var mouseToTouchSlopRatio;
  var androidx_compose_foundation_gestures_TouchSlopDetector$stable;
  function calculatePostSlopOffset($this, touchSlop) {
    var tmp;
    if ($this.kbh_1 == null) {
      var touchSlopOffset = Offset__times_impl_jz1mli(Offset__div_impl_eaxtg1($this.lbh_1, Offset__getDistance_impl_pclvxn($this.lbh_1)), touchSlop);
      tmp = Offset__minus_impl_hoj2c0($this.lbh_1, touchSlopOffset);
    } else {
      var tmp_0 = $this.mbh($this.lbh_1);
      // Inline function 'kotlin.math.sign' call
      var x = $this.mbh($this.lbh_1);
      var finalMainAxisChange = tmp_0 - sign(x) * touchSlop;
      var finalCrossAxisChange = $this.nbh($this.lbh_1);
      var tmp_1;
      if (equals($this.kbh_1, Orientation_Horizontal_getInstance())) {
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1 = fromInt(toRawBits(finalMainAxisChange));
        var v2 = fromInt(toRawBits(finalCrossAxisChange));
        var tmp$ret$2 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
        tmp_1 = _Offset___init__impl__c168vi(tmp$ret$2);
      } else {
        // Inline function 'androidx.compose.ui.geometry.Offset' call
        // Inline function 'androidx.compose.ui.util.packFloats' call
        var v1_0 = fromInt(toRawBits(finalCrossAxisChange));
        var v2_0 = fromInt(toRawBits(finalMainAxisChange));
        var tmp$ret$4 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
        tmp_1 = _Offset___init__impl__c168vi(tmp$ret$4);
      }
      tmp = tmp_1;
    }
    return tmp;
  }
  function TouchSlopDetector(orientation, initialPositionChange) {
    orientation = orientation === VOID ? null : orientation;
    initialPositionChange = initialPositionChange === VOID ? Companion_getInstance_6().e46_1 : initialPositionChange;
    this.kbh_1 = orientation;
    this.lbh_1 = initialPositionChange;
  }
  protoOf(TouchSlopDetector).mbh = function (_this__u8e3s4) {
    var tmp;
    if (equals(this.kbh_1, Orientation_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      tmp = floatFromBits(bits);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      tmp = floatFromBits(bits_0);
    }
    return tmp;
  };
  protoOf(TouchSlopDetector).nbh = function (_this__u8e3s4) {
    var tmp;
    if (equals(this.kbh_1, Orientation_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
      tmp = floatFromBits(bits);
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(_this__u8e3s4);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      tmp = floatFromBits(bits_0);
    }
    return tmp;
  };
  protoOf(TouchSlopDetector).obh = function (positionChange, touchSlop, shouldCommit) {
    var tmp;
    if (shouldCommit) {
      this.lbh_1 = Offset__plus_impl_c78cg0(this.lbh_1, positionChange);
      tmp = this.lbh_1;
    } else {
      tmp = Offset__plus_impl_c78cg0(this.lbh_1, positionChange);
    }
    var finalChange = tmp;
    var tmp_0;
    if (this.kbh_1 == null) {
      tmp_0 = Offset__getDistance_impl_pclvxn(finalChange);
    } else {
      // Inline function 'kotlin.math.absoluteValue' call
      var this_0 = this.mbh(finalChange);
      tmp_0 = Math.abs(this_0);
    }
    var inDirection = tmp_0;
    var hasCrossedSlop = inDirection >= touchSlop;
    var tmp_1;
    if (hasCrossedSlop) {
      tmp_1 = calculatePostSlopOffset(this, touchSlop);
    } else {
      tmp_1 = Companion_getInstance_6().g46_1;
    }
    return tmp_1;
  };
  protoOf(TouchSlopDetector).pbh = function (positionChange, touchSlop, shouldCommit, $super) {
    shouldCommit = shouldCommit === VOID ? true : shouldCommit;
    return $super === VOID ? this.obh(positionChange, touchSlop, shouldCommit) : $super.obh.call(this, new Offset(positionChange), touchSlop, shouldCommit).h46_1;
  };
  protoOf(TouchSlopDetector).qbh = function (initialPositionAccumulator) {
    this.lbh_1 = initialPositionAccumulator;
  };
  protoOf(TouchSlopDetector).rbh = function (initialPositionAccumulator, $super) {
    initialPositionAccumulator = initialPositionAccumulator === VOID ? Companion_getInstance_6().e46_1 : initialPositionAccumulator;
    var tmp;
    if ($super === VOID) {
      this.qbh(initialPositionAccumulator);
      tmp = Unit_instance;
    } else {
      tmp = $super.qbh.call(this, new Offset(initialPositionAccumulator));
    }
    return tmp;
  };
  function pointerSlop(_this__u8e3s4, pointerType) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    return pointerType === Companion_getInstance_16().b7g_1 ? _this__u8e3s4.z8b() * get_mouseToTouchSlopRatio() : _this__u8e3s4.z8b();
  }
  function isPointerUp(_this__u8e3s4, pointerId) {
    _init_properties_DragGestureDetector_kt__sw7hnt();
    var tmp0 = _this__u8e3s4.q7d_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastFirstOrNull' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.m(index);
          if (equals(item.w7d_1, pointerId)) {
            tmp$ret$0 = item;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = null;
    }
    var tmp0_safe_receiver = tmp$ret$0;
    return !((tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z7d_1) === true);
  }
  function drag(_this__u8e3s4, pointerId, onDrag, $completion) {
    var tmp = new $dragCOROUTINE$(_this__u8e3s4, pointerId, onDrag, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function awaitLongPressOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitLongPressOrCancellationCOROUTINE$(_this__u8e3s4, pointerId, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function awaitTouchSlopOrCancellation(_this__u8e3s4, pointerId, onTouchSlopReached, $completion) {
    var tmp = new $awaitTouchSlopOrCancellationCOROUTINE$(_this__u8e3s4, pointerId, onTouchSlopReached, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function awaitDragOrCancellation(_this__u8e3s4, pointerId, $completion) {
    var tmp = new $awaitDragOrCancellationCOROUTINE$(_this__u8e3s4, pointerId, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function access$isPointerUp$tDragGestureDetectorKt($receiver, pointerId) {
    return isPointerUp($receiver, pointerId);
  }
  function awaitLongPressOrCancellation$slambda($deepPress, $currentDown, $longPress, resultContinuation) {
    this.ubk_1 = $deepPress;
    this.vbk_1 = $currentDown;
    this.wbk_1 = $longPress;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitLongPressOrCancellation$slambda).abl = function ($this$withTimeout, $completion) {
    var tmp = this.bbl($this$withTimeout, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(awaitLongPressOrCancellation$slambda).d9 = function (p1, $completion) {
    return this.abl((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitLongPressOrCancellation$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            this.zbk_1 = false;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            if (!!this.zbk_1) {
              this.l8_1 = 4;
              continue $sm;
            }

            this.l8_1 = 2;
            suspendResult = this.xbk_1.e7k(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ybk_1 = suspendResult;
            var tmp0 = this.ybk_1.q7d_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.m(index);
                  if (!changedToUpIgnoreConsumed(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (tmp$ret$0) {
              this.zbk_1 = true;
            }

            var tmp0_0 = this.ybk_1.q7d_1;
            var tmp$ret$2;
            l$ret$3: do {
              var inductionVariable_0 = 0;
              var last_0 = tmp0_0.l() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = tmp0_0.m(index_0);
                  if (item_0.e7g() || isOutOfBounds(item_0, this.xbk_1.p6q(), this.xbk_1.c7k())) {
                    tmp$ret$2 = true;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp$ret$2 = false;
            }
             while (false);
            if (tmp$ret$2) {
              this.zbk_1 = true;
            }

            if (get_isDeepPress(this.ybk_1)) {
              this.ubk_1._v = true;
              this.zbk_1 = true;
            }

            this.l8_1 = 3;
            suspendResult = this.xbk_1.e7k(PointerEventPass_Final_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            var consumeCheck = suspendResult;
            var tmp0_1 = consumeCheck.q7d_1;
            var tmp$ret$4;
            l$ret$5: do {
              var inductionVariable_1 = 0;
              var last_1 = tmp0_1.l() - 1 | 0;
              if (inductionVariable_1 <= last_1)
                do {
                  var index_1 = inductionVariable_1;
                  inductionVariable_1 = inductionVariable_1 + 1 | 0;
                  var item_1 = tmp0_1.m(index_1);
                  if (item_1.e7g()) {
                    tmp$ret$4 = true;
                    break l$ret$5;
                  }
                }
                 while (inductionVariable_1 <= last_1);
              tmp$ret$4 = false;
            }
             while (false);
            if (tmp$ret$4) {
              this.zbk_1 = true;
            }

            if (isPointerUp(this.ybk_1, this.vbk_1._v.w7d_1)) {
              var tmp0_2 = this.ybk_1.q7d_1;
              var tmp$ret$6;
              l$ret$7: do {
                var inductionVariable_2 = 0;
                var last_2 = tmp0_2.l() - 1 | 0;
                if (inductionVariable_2 <= last_2)
                  do {
                    var index_2 = inductionVariable_2;
                    inductionVariable_2 = inductionVariable_2 + 1 | 0;
                    var item_2 = tmp0_2.m(index_2);
                    if (item_2.z7d_1) {
                      tmp$ret$6 = item_2;
                      break l$ret$7;
                    }
                  }
                   while (inductionVariable_2 <= last_2);
                tmp$ret$6 = null;
              }
               while (false);
              var newPressed = tmp$ret$6;
              if (!(newPressed == null)) {
                this.vbk_1._v = newPressed;
                this.wbk_1._v = this.vbk_1._v;
              } else {
                this.zbk_1 = true;
              }
            } else {
              var tmp0_3 = this.ybk_1.q7d_1;
              var tmp$ret$8;
              l$ret$9: do {
                var inductionVariable_3 = 0;
                var last_3 = tmp0_3.l() - 1 | 0;
                if (inductionVariable_3 <= last_3)
                  do {
                    var index_3 = inductionVariable_3;
                    inductionVariable_3 = inductionVariable_3 + 1 | 0;
                    var item_3 = tmp0_3.m(index_3);
                    if (equals(item_3.w7d_1, this.vbk_1._v.w7d_1)) {
                      tmp$ret$8 = item_3;
                      break l$ret$9;
                    }
                  }
                   while (inductionVariable_3 <= last_3);
                tmp$ret$8 = null;
              }
               while (false);
              this.wbk_1._v = tmp$ret$8;
            }

            this.l8_1 = 1;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 5) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(awaitLongPressOrCancellation$slambda).bbl = function ($this$withTimeout, completion) {
    var i = new awaitLongPressOrCancellation$slambda(this.ubk_1, this.vbk_1, this.wbk_1, completion);
    i.xbk_1 = $this$withTimeout;
    return i;
  };
  function awaitLongPressOrCancellation$slambda_0($deepPress, $currentDown, $longPress, resultContinuation) {
    var i = new awaitLongPressOrCancellation$slambda($deepPress, $currentDown, $longPress, resultContinuation);
    return constructCallableReference(function ($this$withTimeout, $completion) {
      return i.abl($this$withTimeout, $completion);
    }, 1);
  }
  function $dragCOROUTINE$(_this__u8e3s4, pointerId, onDrag, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.abi_1 = _this__u8e3s4;
    this.bbi_1 = pointerId;
    this.cbi_1 = onDrag;
  }
  protoOf($dragCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            this.dbi_1 = this.bbi_1;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            if (!true) {
              this.l8_1 = 4;
              continue $sm;
            }

            this.l8_1 = 2;
            suspendResult = awaitDragOrCancellation(this.abi_1, this.dbi_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var tmp0_elvis_lhs = suspendResult;
            var tmp_0;
            if (tmp0_elvis_lhs == null) {
              return false;
            } else {
              tmp_0 = tmp0_elvis_lhs;
            }

            var change = tmp_0;
            if (changedToUpIgnoreConsumed(change)) {
              return true;
            }

            this.cbi_1(change);
            this.dbi_1 = change.w7d_1;
            this.l8_1 = 1;
            continue $sm;
          case 3:
            throw this.o8_1;
          case 4:
            return Unit_instance;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function $awaitLongPressOrCancellationCOROUTINE$(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.mbi_1 = _this__u8e3s4;
    this.nbi_1 = pointerId;
  }
  protoOf($awaitLongPressOrCancellationCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            if (isPointerUp(this.mbi_1.d7k(), this.nbi_1)) {
              return null;
            }

            var tmp_0 = this;
            var tmp0 = this.mbi_1.d7k().q7d_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.m(index);
                  if (equals(item.w7d_1, this.nbi_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            var tmp_1;
            if (tmp0_elvis_lhs == null) {
              return null;
            } else {
              tmp_1 = tmp0_elvis_lhs;
            }

            tmp_0.pbi_1 = tmp_1;
            this.qbi_1 = {_v: null};
            var currentDown = {_v: this.pbi_1};
            var longPressTimeout = this.mbi_1.a7k().x8b();
            this.m8_1 = 2;
            this.rbi_1 = {_v: false};
            this.l8_1 = 1;
            suspendResult = this.mbi_1.h7k(longPressTimeout, awaitLongPressOrCancellation$slambda_0(this.rbi_1, currentDown, this.qbi_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp_2 = this;
            var tmp_3;
            if (this.rbi_1._v) {
              var tmp1_elvis_lhs = this.qbi_1._v;
              tmp_3 = tmp1_elvis_lhs == null ? this.pbi_1 : tmp1_elvis_lhs;
            } else {
              tmp_3 = null;
            }

            tmp_2.obi_1 = tmp_3;
            this.m8_1 = 3;
            this.l8_1 = 4;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            var tmp_4 = this.o8_1;
            if (tmp_4 instanceof PointerEventTimeoutCancellationException) {
              var _unused_var__etf5q3 = this.o8_1;
              var tmp_5 = this;
              var tmp2_elvis_lhs = this.qbi_1._v;
              tmp_5.obi_1 = tmp2_elvis_lhs == null ? this.pbi_1 : tmp2_elvis_lhs;
              this.l8_1 = 4;
              continue $sm;
            } else {
              throw this.o8_1;
            }

          case 3:
            throw this.o8_1;
          case 4:
            this.m8_1 = 3;
            return this.obi_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 3) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function $awaitTouchSlopOrCancellationCOROUTINE$(_this__u8e3s4, pointerId, onTouchSlopReached, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.abj_1 = _this__u8e3s4;
    this.bbj_1 = pointerId;
    this.cbj_1 = onTouchSlopReached;
  }
  protoOf($awaitTouchSlopOrCancellationCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 14;
            var tmp0_pointerType = Companion_getInstance_16().a7g_1;
            this.ubj_1 = this.abj_1;
            this.tbj_1 = this.bbj_1;
            this.sbj_1 = tmp0_pointerType;
            this.rbj_1 = null;
            this.qbj_1 = this.cbj_1;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.fbj_1 = this.ubj_1;
            this.obj_1 = this.tbj_1;
            this.pbj_1 = this.sbj_1;
            this.nbj_1 = this.rbj_1;
            this.mbj_1 = Companion_getInstance_6().e46_1;
            this.hbj_1 = this.qbj_1;
            if (access$isPointerUp$tDragGestureDetectorKt(this.fbj_1.d7k(), this.obj_1)) {
              this.dbj_1 = null;
              this.l8_1 = 13;
              continue $sm;
            } else {
              this.l8_1 = 2;
              continue $sm;
            }

          case 2:
            this.ibj_1 = pointerSlop(this.fbj_1.a7k(), this.pbj_1);
            this.jbj_1 = this.obj_1;
            this.gbj_1 = new TouchSlopDetector(this.nbj_1, this.mbj_1);
            this.l8_1 = 3;
            continue $sm;
          case 3:
            if (!true) {
              this.l8_1 = 12;
              continue $sm;
            }

            this.l8_1 = 4;
            suspendResult = this.fbj_1.f7k(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.kbj_1 = suspendResult;
            var tmp0 = this.kbj_1.q7d_1;
            var tmp$ret$2;
            l$ret$3: do {
              var inductionVariable = 0;
              var last = tmp0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.m(index);
                  if (equals(item.w7d_1, this.jbj_1)) {
                    tmp$ret$2 = item;
                    break l$ret$3;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$2 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$2;
            if (tmp0_elvis_lhs == null) {
              this.dbj_1 = null;
              this.l8_1 = 13;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.lbj_1 = tmp0_elvis_lhs;
              this.l8_1 = 5;
              continue $sm;
            }

          case 5:
            this.ebj_1 = this.lbj_1;
            if (this.ebj_1.e7g()) {
              this.dbj_1 = null;
              this.l8_1 = 13;
              continue $sm;
            } else {
              if (changedToUpIgnoreConsumed(this.ebj_1)) {
                var tmp0_0 = this.kbj_1.q7d_1;
                var tmp$ret$4;
                l$ret$5: do {
                  var inductionVariable_0 = 0;
                  var last_0 = tmp0_0.l() - 1 | 0;
                  if (inductionVariable_0 <= last_0)
                    do {
                      var index_0 = inductionVariable_0;
                      inductionVariable_0 = inductionVariable_0 + 1 | 0;
                      var item_0 = tmp0_0.m(index_0);
                      if (item_0.z7d_1) {
                        tmp$ret$4 = item_0;
                        break l$ret$5;
                      }
                    }
                     while (inductionVariable_0 <= last_0);
                  tmp$ret$4 = null;
                }
                 while (false);
                var otherDown = tmp$ret$4;
                if (otherDown == null) {
                  this.dbj_1 = null;
                  this.l8_1 = 13;
                  continue $sm;
                } else {
                  this.jbj_1 = otherDown.w7d_1;
                  this.l8_1 = 10;
                  continue $sm;
                }
              } else {
                var postSlopOffset = this.gbj_1.pbh(positionChangeIgnoreConsumed(this.ebj_1), this.ibj_1);
                if (!equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(postSlopOffset), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344))) {
                  this.hbj_1(this.ebj_1, new Offset(postSlopOffset));
                  if (this.ebj_1.e7g()) {
                    this.dbj_1 = this.ebj_1;
                    this.l8_1 = 13;
                    continue $sm;
                  } else {
                    this.gbj_1.rbh();
                    this.l8_1 = 8;
                    continue $sm;
                  }
                } else {
                  this.l8_1 = 6;
                  suspendResult = this.fbj_1.e7k(PointerEventPass_Final_getInstance(), this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              }
            }

          case 6:
            if (this.ebj_1.e7g()) {
              this.dbj_1 = null;
              this.l8_1 = 13;
              continue $sm;
            } else {
              this.l8_1 = 7;
              continue $sm;
            }

          case 7:
            this.l8_1 = 9;
            continue $sm;
          case 8:
            this.l8_1 = 9;
            continue $sm;
          case 9:
            this.l8_1 = 11;
            continue $sm;
          case 10:
            this.l8_1 = 11;
            continue $sm;
          case 11:
            this.l8_1 = 3;
            continue $sm;
          case 12:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 13;
            continue $sm;
          case 13:
            return this.dbj_1;
          case 14:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 14) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function $awaitDragOrCancellationCOROUTINE$(_this__u8e3s4, pointerId, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dbk_1 = _this__u8e3s4;
    this.ebk_1 = pointerId;
  }
  protoOf($awaitDragOrCancellationCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 7;
            if (isPointerUp(this.dbk_1.d7k(), this.ebk_1)) {
              return null;
            }

            this.lbk_1 = this.dbk_1;
            this.kbk_1 = this.ebk_1;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.jbk_1 = this.lbk_1;
            this.gbk_1 = this.kbk_1;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.l8_1 = 8;
              continue $sm;
            }

            this.l8_1 = 3;
            suspendResult = this.jbk_1.f7k(VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.hbk_1 = suspendResult;
            var tmp0 = this.hbk_1.q7d_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.m(index);
                  if (equals(item.w7d_1, this.gbk_1)) {
                    tmp$ret$0 = item;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = null;
            }
             while (false);
            var tmp0_elvis_lhs = tmp$ret$0;
            if (tmp0_elvis_lhs == null) {
              this.fbk_1 = null;
              this.l8_1 = 9;
              var tmp_0 = this;
              continue $sm;
            } else {
              this.ibk_1 = tmp0_elvis_lhs;
              this.l8_1 = 4;
              continue $sm;
            }

          case 4:
            var dragEvent = this.ibk_1;
            if (changedToUpIgnoreConsumed(dragEvent)) {
              var tmp0_0 = this.hbk_1.q7d_1;
              var tmp$ret$4;
              l$ret$5: do {
                var inductionVariable_0 = 0;
                var last_0 = tmp0_0.l() - 1 | 0;
                if (inductionVariable_0 <= last_0)
                  do {
                    var index_0 = inductionVariable_0;
                    inductionVariable_0 = inductionVariable_0 + 1 | 0;
                    var item_0 = tmp0_0.m(index_0);
                    if (item_0.z7d_1) {
                      tmp$ret$4 = item_0;
                      break l$ret$5;
                    }
                  }
                   while (inductionVariable_0 <= last_0);
                tmp$ret$4 = null;
              }
               while (false);
              var otherDown = tmp$ret$4;
              if (otherDown == null) {
                this.fbk_1 = dragEvent;
                this.l8_1 = 9;
                continue $sm;
              } else {
                this.gbk_1 = otherDown.w7d_1;
                this.l8_1 = 5;
                continue $sm;
              }
            } else {
              if (positionChangedIgnoreConsumed(dragEvent)) {
                this.fbk_1 = dragEvent;
                this.l8_1 = 9;
                continue $sm;
              } else {
                this.l8_1 = 6;
                continue $sm;
              }
            }

          case 5:
            this.l8_1 = 6;
            continue $sm;
          case 6:
            this.l8_1 = 2;
            continue $sm;
          case 7:
            throw this.o8_1;
          case 8:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 9;
            continue $sm;
          case 9:
            var change = this.fbk_1;
            var tmp_1;
            if ((change == null ? null : change.e7g()) === false) {
              tmp_1 = change;
            } else {
              tmp_1 = null;
            }

            return tmp_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 7) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  var properties_initialized_DragGestureDetector_kt_xqxw6j;
  function _init_properties_DragGestureDetector_kt__sw7hnt() {
    if (!properties_initialized_DragGestureDetector_kt_xqxw6j) {
      properties_initialized_DragGestureDetector_kt_xqxw6j = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      mouseSlop = _Dp___init__impl__ms3zkb(0.125);
      // Inline function 'androidx.compose.ui.unit.dp' call
      defaultTouchSlop = _Dp___init__impl__ms3zkb(18);
      var tmp0 = get_mouseSlop();
      // Inline function 'androidx.compose.ui.unit.Dp.div' call
      var other = get_defaultTouchSlop();
      mouseToTouchSlopRatio = _Dp___get_value__impl__geb1vb(tmp0) / _Dp___get_value__impl__geb1vb(other);
      androidx_compose_foundation_gestures_TouchSlopDetector$stable = 8;
    }
  }
  var androidx_compose_foundation_gestures_GestureCancellationException$stable;
  function awaitEachGesture(_this__u8e3s4, block, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.r8();
    return _this__u8e3s4.b7k(awaitEachGesture$slambda_0(currentContext, block, null), $completion);
  }
  function awaitAllPointersUp(_this__u8e3s4, pass, $completion) {
    pass = pass === VOID ? PointerEventPass_Final_getInstance() : pass;
    var tmp = new $awaitAllPointersUpCOROUTINE$(_this__u8e3s4, pass, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function allPointersUp(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.d7k().q7d_1;
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
          if (item.z7d_1) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    return !tmp$ret$0;
  }
  function awaitEachGesture$slambda($currentContext, $block, resultContinuation) {
    this.ubl_1 = $currentContext;
    this.vbl_1 = $block;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitEachGesture$slambda).abl = function ($this$awaitPointerEventScope, $completion) {
    var tmp = this.bbl($this$awaitPointerEventScope, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(awaitEachGesture$slambda).d9 = function (p1, $completion) {
    return this.abl((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitEachGesture$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 9;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            if (!get_isActive(this.ubl_1)) {
              this.l8_1 = 8;
              continue $sm;
            }

            this.m8_1 = 4;
            this.l8_1 = 2;
            suspendResult = this.vbl_1(this.wbl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l8_1 = 3;
            suspendResult = awaitAllPointersUp(this.wbl_1, VOID, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            this.m8_1 = 9;
            this.l8_1 = 7;
            continue $sm;
          case 4:
            this.m8_1 = 9;
            var tmp_0 = this.o8_1;
            if (tmp_0 instanceof CancellationException) {
              var e = this.o8_1;
              if (get_isActive(this.ubl_1)) {
                this.l8_1 = 5;
                suspendResult = awaitAllPointersUp(this.wbl_1, VOID, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                throw e;
              }
            } else {
              throw this.o8_1;
            }

          case 5:
            this.l8_1 = 6;
            continue $sm;
          case 6:
            this.l8_1 = 7;
            continue $sm;
          case 7:
            this.m8_1 = 9;
            this.l8_1 = 1;
            continue $sm;
          case 8:
            return Unit_instance;
          case 9:
            throw this.o8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m8_1 === 9) {
          throw e_0;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e_0;
        }
      }
     while (true);
  };
  protoOf(awaitEachGesture$slambda).bbl = function ($this$awaitPointerEventScope, completion) {
    var i = new awaitEachGesture$slambda(this.ubl_1, this.vbl_1, completion);
    i.wbl_1 = $this$awaitPointerEventScope;
    return i;
  };
  function awaitEachGesture$slambda_0($currentContext, $block, resultContinuation) {
    var i = new awaitEachGesture$slambda($currentContext, $block, resultContinuation);
    return constructCallableReference(function ($this$awaitPointerEventScope, $completion) {
      return i.abl($this$awaitPointerEventScope, $completion);
    }, 1);
  }
  function $awaitAllPointersUpCOROUTINE$(_this__u8e3s4, pass, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.kbl_1 = _this__u8e3s4;
    this.lbl_1 = pass;
  }
  protoOf($awaitAllPointersUpCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            if (!allPointersUp(this.kbl_1)) {
              this.l8_1 = 1;
              continue $sm;
            } else {
              this.l8_1 = 4;
              continue $sm;
            }

          case 1:
            this.l8_1 = 2;
            suspendResult = this.kbl_1.e7k(this.lbl_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var events = suspendResult;
            var tmp0 = events.q7d_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.m(index);
                  if (item.z7d_1) {
                    tmp$ret$0 = true;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = false;
            }
             while (false);
            if (tmp$ret$0) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.l8_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 5) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  var androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_AwaitDown$stable;
  var androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_AwaitTouchSlop$stable;
  var androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_AwaitGesturePickup$stable;
  var androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_Dragging$stable;
  var androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState$stable;
  var androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector$stable;
  var androidx_compose_foundation_gestures_IndirectPointerInputEventSmoother$stable;
  var androidx_compose_foundation_gestures_OffsetSmoother$stable;
  var androidx_compose_foundation_gestures_NonTouchScrollingLogic$stable;
  var Orientation_Vertical_instance;
  var Orientation_Horizontal_instance;
  var Orientation_entriesInitialized;
  function Orientation_initEntries() {
    if (Orientation_entriesInitialized)
      return Unit_instance;
    Orientation_entriesInitialized = true;
    Orientation_Vertical_instance = new Orientation('Vertical', 0);
    Orientation_Horizontal_instance = new Orientation('Horizontal', 1);
  }
  function Orientation(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Orientation_Horizontal_getInstance() {
    Orientation_initEntries();
    return Orientation_Horizontal_instance;
  }
  function TraverseKey_3() {
  }
  var TraverseKey_instance_3;
  function TraverseKey_getInstance_3() {
    return TraverseKey_instance_3;
  }
  function ScrollableContainerNode() {
  }
  var NoPressGesture;
  var androidx_compose_foundation_gestures_LongPressResult_Success$stable;
  var androidx_compose_foundation_gestures_LongPressResult_Released$stable;
  var androidx_compose_foundation_gestures_LongPressResult_Canceled$stable;
  var androidx_compose_foundation_gestures_LongPressResult$stable;
  var androidx_compose_foundation_gestures_PressGestureScopeImpl$stable;
  function isChangedToDown(_this__u8e3s4, requireUnconsumed) {
    _init_properties_TapGestureDetector_kt__k4yygc();
    var tmp;
    if (firstDownRefersToPrimaryMouseButtonOnly()) {
      var tmp0 = _this__u8e3s4.q7d_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAll' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0.m(index);
            if (!(item.e7e_1 === Companion_getInstance_16().b7g_1)) {
              tmp$ret$0 = false;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$0 = true;
      }
      tmp = tmp$ret$0;
    } else {
      tmp = false;
    }
    var onlyPrimaryButtonCausesDown = tmp;
    if (onlyPrimaryButtonCausesDown && !get_isPrimaryPressed(_this__u8e3s4.r7d_1))
      return false;
    var tmp0_0 = _this__u8e3s4.q7d_1;
    var tmp$ret$4;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_0 = 0;
      var last_0 = tmp0_0.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = tmp0_0.m(index_0);
          if (!(requireUnconsumed ? changedToDown(item_0) : changedToDownIgnoreConsumed(item_0))) {
            tmp$ret$4 = false;
            break $l$block_0;
          }
        }
         while (inductionVariable_0 <= last_0);
      tmp$ret$4 = true;
    }
    return tmp$ret$4;
  }
  function PressGestureScope() {
  }
  function NoPressGesture$slambda(resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(NoPressGesture$slambda).hbm = function (_this__u8e3s4, it, $completion) {
    var tmp = this.ibm(_this__u8e3s4, it, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(NoPressGesture$slambda).k1o = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, PressGestureScope) : false) ? p1 : THROW_CCE();
    return this.hbm(tmp, p2 instanceof Offset ? p2.h46_1 : THROW_CCE(), $completion);
  };
  protoOf(NoPressGesture$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
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
  protoOf(NoPressGesture$slambda).ibm = function (_this__u8e3s4, it, completion) {
    var i = new NoPressGesture$slambda(completion);
    i.fbm_1 = _this__u8e3s4;
    i.gbm_1 = it;
    return i;
  };
  function NoPressGesture$slambda_0(resultContinuation) {
    var i = new NoPressGesture$slambda(resultContinuation);
    return constructCallableReference(function (_this__u8e3s4, it, $completion) {
      return i.hbm(_this__u8e3s4, it.h46_1, $completion);
    }, 2);
  }
  var properties_initialized_TapGestureDetector_kt_lhe8oi;
  function _init_properties_TapGestureDetector_kt__k4yygc() {
    if (!properties_initialized_TapGestureDetector_kt_lhe8oi) {
      properties_initialized_TapGestureDetector_kt_lhe8oi = true;
      NoPressGesture = NoPressGesture$slambda_0(null);
      androidx_compose_foundation_gestures_LongPressResult_Success$stable = 0;
      androidx_compose_foundation_gestures_LongPressResult_Released$stable = 0;
      androidx_compose_foundation_gestures_LongPressResult_Canceled$stable = 0;
      androidx_compose_foundation_gestures_LongPressResult$stable = 0;
      androidx_compose_foundation_gestures_PressGestureScopeImpl$stable = 0;
    }
  }
  var androidx_compose_foundation_gestures_TrackpadScrollingLogic$stable;
  var androidx_compose_foundation_gestures_TransformEvent_TransformStarted$stable;
  var androidx_compose_foundation_gestures_TransformEvent_TransformStopped$stable;
  var androidx_compose_foundation_gestures_TransformEvent_TransformDelta$stable;
  var androidx_compose_foundation_gestures_UpdatableAnimationState$stable;
  var androidx_compose_foundation_gestures_snapping_SnapPosition_Center$stable;
  var androidx_compose_foundation_gestures_snapping_SnapPosition_Start$stable;
  var androidx_compose_foundation_gestures_snapping_SnapPosition_End$stable;
  var androidx_compose_foundation_interaction_DragInteraction_Start$stable;
  var androidx_compose_foundation_interaction_DragInteraction_Stop$stable;
  var androidx_compose_foundation_interaction_DragInteraction_Cancel$stable;
  function Start() {
  }
  function Stop() {
  }
  function Cancel() {
  }
  var androidx_compose_foundation_interaction_FocusInteraction_Focus$stable;
  var androidx_compose_foundation_interaction_FocusInteraction_Unfocus$stable;
  function Focus() {
  }
  function Unfocus(focus) {
    this.jbm_1 = focus;
  }
  function FocusInteraction() {
  }
  var androidx_compose_foundation_interaction_HoverInteraction_Enter$stable;
  var androidx_compose_foundation_interaction_HoverInteraction_Exit$stable;
  function Enter() {
  }
  function Exit(enter) {
    this.kbm_1 = enter;
  }
  function Interaction() {
  }
  function funMutableInteractionSource() {
    return new MutableInteractionSourceImpl();
  }
  function MutableInteractionSourceImpl() {
    this.lbm_1 = MutableSharedFlow(VOID, 16, BufferOverflow_DROP_OLDEST_getInstance());
  }
  protoOf(MutableInteractionSourceImpl).lbg = function () {
    return this.lbm_1;
  };
  protoOf(MutableInteractionSourceImpl).tb5 = function (interaction, $completion) {
    return this.lbm_1.l1f(interaction, $completion);
  };
  protoOf(MutableInteractionSourceImpl).rba = function (interaction) {
    return this.lbm_1.s1h(interaction);
  };
  var androidx_compose_foundation_interaction_PressInteraction_Press$stable;
  var androidx_compose_foundation_interaction_PressInteraction_Release$stable;
  var androidx_compose_foundation_interaction_PressInteraction_Cancel$stable;
  function Press(pressPosition) {
    this.mbm_1 = pressPosition;
  }
  function Release(press) {
    this.nbm_1 = press;
  }
  function Cancel_0(press) {
    this.obm_1 = press;
  }
  function PressInteraction() {
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalArgumentExceptionForNullCheck(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  var androidx_compose_foundation_lazy_LazyItemScopeImpl$stable;
  var androidx_compose_foundation_lazy_LazyListBeyondBoundsState$stable;
  var androidx_compose_foundation_lazy_LazyListCacheWindowStrategy$stable;
  var androidx_compose_foundation_lazy_LazyListCacheWindowScope$stable;
  var androidx_compose_foundation_lazy_LazyListIntervalContent$stable;
  var androidx_compose_foundation_lazy_LazyListInterval$stable;
  var androidx_compose_foundation_lazy_LazyListMeasureResult$stable;
  var androidx_compose_foundation_lazy_LazyListMeasuredItem$stable;
  var androidx_compose_foundation_lazy_LazyListMeasuredItemProvider$stable;
  var androidx_compose_foundation_lazy_LazyListPrefetchResultScopeImpl$stable;
  var androidx_compose_foundation_lazy_LazyListScrollPosition$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridSlots$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridBeyondBoundsState$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridCacheWindowPrefetchStrategy$stable;
  var androidx_compose_foundation_lazy_grid_GridCells_Fixed$stable;
  var androidx_compose_foundation_lazy_grid_GridCells_Adaptive$stable;
  var androidx_compose_foundation_lazy_grid_GridCells_FixedSize$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridIntervalContent$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridInterval$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridItemScopeImpl$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridMeasureResult$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridMeasuredItem$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridMeasuredItemProvider$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridMeasuredLine$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridMeasuredLineProvider$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridPrefetchResultScopeImpl$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridScrollPosition$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridSpanLayoutProvider_LineConfiguration$stable;
  var androidx_compose_foundation_lazy_grid_LazyGridSpanLayoutProvider$stable;
  var androidx_compose_foundation_lazy_layout_AwaitFirstLayoutModifier$stable;
  var androidx_compose_foundation_lazy_layout_CacheWindowLogic$stable;
  var androidx_compose_foundation_lazy_layout_CachedItem$stable;
  var androidx_compose_foundation_lazy_layout_IntervalList_Interval$stable;
  var androidx_compose_foundation_lazy_layout_MutableIntervalList$stable;
  var androidx_compose_foundation_lazy_layout_LazyLayoutBeyondBoundsProviderModifierNode$stable;
  var androidx_compose_foundation_lazy_layout_LazyLayoutIntervalContent$stable;
  var androidx_compose_foundation_lazy_layout_LazyLayoutItemContentFactory$stable;
  var androidx_compose_foundation_lazy_layout_NearestRangeKeyIndexMap$stable;
  var androidx_compose_foundation_lazy_layout_LazyLayoutMeasureScopeImpl$stable;
  var androidx_compose_foundation_lazy_layout_LazyLayoutNearestRangeState$stable;
  var androidx_compose_foundation_lazy_layout_LazyLayoutPinnedItemList$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridSlots$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridBeyondBoundsState$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridCells_Fixed$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridCells_Adaptive$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridCells_FixedSize$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridIntervalContent$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridInterval$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridItemScopeImpl$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridLaneInfo$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridMeasureContext$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridMeasureProvider$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridMeasuredItem$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridScrollPosition$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridItemSpan$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridSpanProvider$stable;
  var androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridState$stable;
  var androidx_compose_foundation_pager_PagerLazyLayoutItemProvider$stable;
  var androidx_compose_foundation_pager_PagerIntervalContent$stable;
  var androidx_compose_foundation_pager_MeasuredPage$stable;
  var androidx_compose_foundation_pager_PageSize_Fill$stable;
  var androidx_compose_foundation_pager_PageSize_Fixed$stable;
  var androidx_compose_foundation_pager_PagerDefaults$stable;
  var androidx_compose_foundation_pager_PagerDebugConfig$stable;
  var androidx_compose_foundation_pager_PagerBeyondBoundsState$stable;
  var androidx_compose_foundation_pager_PagerCacheWindowLogic$stable;
  var androidx_compose_foundation_pager_PagerMeasureResult$stable;
  var androidx_compose_foundation_pager_PagerScopeImpl$stable;
  var androidx_compose_foundation_pager_PagerScrollPosition$stable;
  var androidx_compose_foundation_pager_PagerSnapDistanceMaxPages$stable;
  var androidx_compose_foundation_relocation_BringIntoViewRequesterNode$stable;
  var androidx_compose_foundation_relocation_BringIntoViewResponderNode$stable;
  var androidx_compose_foundation_shape_AbsoluteCutCornerShape$stable;
  var androidx_compose_foundation_shape_AbsoluteRoundedCornerShape$stable;
  var androidx_compose_foundation_shape_CornerBasedShape$stable;
  function CornerBasedShape(topStart, topEnd, bottomEnd, bottomStart) {
    this.pbm_1 = topStart;
    this.qbm_1 = topEnd;
    this.rbm_1 = bottomEnd;
    this.sbm_1 = bottomStart;
  }
  protoOf(CornerBasedShape).t54 = function (size, layoutDirection, density) {
    var topStart = this.pbm_1.tbm(size, density);
    var topEnd = this.qbm_1.tbm(size, density);
    var bottomEnd = this.rbm_1.tbm(size, density);
    var bottomStart = this.sbm_1.tbm(size, density);
    var minDimension = _Size___get_minDimension__impl__4iso0r(size);
    if (topStart + bottomStart > minDimension) {
      var scale = minDimension / (topStart + bottomStart);
      topStart = topStart * scale;
      bottomStart = bottomStart * scale;
    }
    if (topEnd + bottomEnd > minDimension) {
      var scale_0 = minDimension / (topEnd + bottomEnd);
      topEnd = topEnd * scale_0;
      bottomEnd = bottomEnd * scale_0;
    }
    // Inline function 'androidx.compose.foundation.internal.requirePrecondition' call
    if (!(topStart >= 0.0 && topEnd >= 0.0 && bottomEnd >= 0.0 && bottomStart >= 0.0)) {
      var tmp$ret$1 = "Corner size in Px can't be negative(topStart = " + topStart + ', topEnd = ' + topEnd + ', ' + ('bottomEnd = ' + bottomEnd + ', bottomStart = ' + bottomStart + ')!');
      throwIllegalArgumentException(tmp$ret$1);
    }
    return this.ubm(size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection);
  };
  protoOf(CornerBasedShape).wbm = function (topStart, topEnd, bottomEnd, bottomStart, $super) {
    topStart = topStart === VOID ? this.pbm_1 : topStart;
    topEnd = topEnd === VOID ? this.qbm_1 : topEnd;
    bottomEnd = bottomEnd === VOID ? this.rbm_1 : bottomEnd;
    bottomStart = bottomStart === VOID ? this.sbm_1 : bottomStart;
    return $super === VOID ? this.vbm(topStart, topEnd, bottomEnd, bottomStart) : $super.vbm.call(this, topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(CornerBasedShape).g4x = function (other, t) {
    return null;
  };
  var ZeroCornerSize;
  function CornerSize(size) {
    _init_properties_CornerSize_kt__adzyne();
    return new DpCornerSize(size);
  }
  function CornerSize_0(percent) {
    _init_properties_CornerSize_kt__adzyne();
    return new PercentCornerSize(percent);
  }
  function DpCornerSize(size) {
    this.xbm_1 = size;
  }
  protoOf(DpCornerSize).tbm = function (shapeSize, density) {
    // Inline function 'kotlin.with' call
    return density.n47(this.xbm_1);
  };
  protoOf(DpCornerSize).toString = function () {
    return 'CornerSize(size = ' + _Dp___get_value__impl__geb1vb(this.xbm_1) + '.dp)';
  };
  protoOf(DpCornerSize).hashCode = function () {
    return Dp__hashCode_impl_sxkrra(this.xbm_1);
  };
  protoOf(DpCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof DpCornerSize))
      return false;
    if (!equals(this.xbm_1, other.xbm_1))
      return false;
    return true;
  };
  function PercentCornerSize(percent) {
    this.ybm_1 = percent;
    if (this.ybm_1 < 0 || this.ybm_1 > 100) {
      throwIllegalArgumentException('The percent should be in the range of [0, 100]');
    }
  }
  protoOf(PercentCornerSize).tbm = function (shapeSize, density) {
    return _Size___get_minDimension__impl__4iso0r(shapeSize) * (this.ybm_1 / 100.0);
  };
  protoOf(PercentCornerSize).toString = function () {
    return 'CornerSize(size = ' + this.ybm_1 + '%)';
  };
  protoOf(PercentCornerSize).hashCode = function () {
    return getNumberHashCode(this.ybm_1);
  };
  protoOf(PercentCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PercentCornerSize))
      return false;
    if (!equals(this.ybm_1, other.ybm_1))
      return false;
    return true;
  };
  function CornerSize_1(size) {
    _init_properties_CornerSize_kt__adzyne();
    return new PxCornerSize(size);
  }
  function PxCornerSize(size) {
    this.zbm_1 = size;
  }
  protoOf(PxCornerSize).tbm = function (shapeSize, density) {
    return this.zbm_1;
  };
  protoOf(PxCornerSize).toString = function () {
    return 'CornerSize(size = ' + this.zbm_1 + '.px)';
  };
  protoOf(PxCornerSize).hashCode = function () {
    return getNumberHashCode(this.zbm_1);
  };
  protoOf(PxCornerSize).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PxCornerSize))
      return false;
    if (!equals(this.zbm_1, other.zbm_1))
      return false;
    return true;
  };
  function ZeroCornerSize$1() {
  }
  protoOf(ZeroCornerSize$1).tbm = function (shapeSize, density) {
    return 0.0;
  };
  protoOf(ZeroCornerSize$1).toString = function () {
    return 'ZeroCornerSize';
  };
  var properties_initialized_CornerSize_kt_9yvmfc;
  function _init_properties_CornerSize_kt__adzyne() {
    if (!properties_initialized_CornerSize_kt_9yvmfc) {
      properties_initialized_CornerSize_kt_9yvmfc = true;
      ZeroCornerSize = new ZeroCornerSize$1();
    }
  }
  var androidx_compose_foundation_shape_CutCornerShape$stable;
  var androidx_compose_foundation_shape_GenericShape$stable;
  function get_CircleShape() {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return CircleShape;
  }
  var CircleShape;
  var androidx_compose_foundation_shape_RoundedCornerShape$stable;
  function RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart) {
    CornerBasedShape.call(this, topStart, topEnd, bottomEnd, bottomStart);
  }
  protoOf(RoundedCornerShape).ubm = function (size, topStart, topEnd, bottomEnd, bottomStart, layoutDirection) {
    var tmp;
    if (topStart + topEnd + bottomEnd + bottomStart === 0.0) {
      tmp = new Rectangle(toRect(size));
    } else {
      var tmp_0 = toRect(size);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      var x = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topStart : topEnd;
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(x));
      var v2 = fromInt(toRawBits(x));
      var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp_1 = _CornerRadius___init__impl__ojmabe(tmp$ret$1);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      var x_0 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? topEnd : topStart;
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1_0 = fromInt(toRawBits(x_0));
      var v2_0 = fromInt(toRawBits(x_0));
      var tmp$ret$3 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
      var tmp_2 = _CornerRadius___init__impl__ojmabe(tmp$ret$3);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      var x_1 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomEnd : bottomStart;
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1_1 = fromInt(toRawBits(x_1));
      var v2_1 = fromInt(toRawBits(x_1));
      var tmp$ret$5 = bitwiseOr(shiftLeft(v1_1, 32), bitwiseAnd(v2_1, new Long(-1, 0)));
      var tmp_3 = _CornerRadius___init__impl__ojmabe(tmp$ret$5);
      // Inline function 'androidx.compose.ui.geometry.CornerRadius' call
      var x_2 = layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? bottomStart : bottomEnd;
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1_2 = fromInt(toRawBits(x_2));
      var v2_2 = fromInt(toRawBits(x_2));
      var tmp$ret$7 = bitwiseOr(shiftLeft(v1_2, 32), bitwiseAnd(v2_2, new Long(-1, 0)));
      var tmp$ret$6 = _CornerRadius___init__impl__ojmabe(tmp$ret$7);
      tmp = new Rounded(RoundRect_0(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$6));
    }
    return tmp;
  };
  protoOf(RoundedCornerShape).vbm = function (topStart, topEnd, bottomEnd, bottomStart) {
    return new RoundedCornerShape(topStart, topEnd, bottomEnd, bottomStart);
  };
  protoOf(RoundedCornerShape).toString = function () {
    return 'RoundedCornerShape(topStart = ' + toString(this.pbm_1) + ', topEnd = ' + toString(this.qbm_1) + ', bottomEnd = ' + (toString(this.rbm_1) + ', bottomStart = ' + toString(this.sbm_1) + ')');
  };
  protoOf(RoundedCornerShape).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RoundedCornerShape))
      return false;
    if (!equals(this.pbm_1, other.pbm_1))
      return false;
    if (!equals(this.qbm_1, other.qbm_1))
      return false;
    if (!equals(this.rbm_1, other.rbm_1))
      return false;
    if (!equals(this.sbm_1, other.sbm_1))
      return false;
    return true;
  };
  protoOf(RoundedCornerShape).hashCode = function () {
    var result = hashCode(this.pbm_1);
    result = imul(31, result) + hashCode(this.qbm_1) | 0;
    result = imul(31, result) + hashCode(this.rbm_1) | 0;
    result = imul(31, result) + hashCode(this.sbm_1) | 0;
    return result;
  };
  protoOf(RoundedCornerShape).g4x = function (other, t) {
    var other_0 = other;
    if (equals(other_0, get_RectangleShape()) || other_0 == null) {
      other_0 = RoundedCornerShape_4(0.0);
    }
    if (other_0 instanceof RoundedCornerShape) {
      return lerp_4(this, other_0, t);
    }
    return null;
  };
  function RoundedCornerShape_0(corner) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(corner, corner, corner, corner);
  }
  function RoundedCornerShape_1(size) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_0(CornerSize(size));
  }
  function RoundedCornerShape_2(topStart, topEnd, bottomEnd, bottomStart) {
    var tmp;
    if (topStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = topStart;
    }
    topStart = tmp;
    var tmp_0;
    if (topEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = topEnd;
    }
    topEnd = tmp_0;
    var tmp_1;
    if (bottomEnd === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = bottomEnd;
    }
    bottomEnd = tmp_1;
    var tmp_2;
    if (bottomStart === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottomStart;
    }
    bottomStart = tmp_2;
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(CornerSize(topStart), CornerSize(topEnd), CornerSize(bottomEnd), CornerSize(bottomStart));
  }
  function RoundedCornerShape_3(percent) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_0(CornerSize_0(percent));
  }
  function RoundedCornerShape_4(size) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return RoundedCornerShape_0(CornerSize_1(size));
  }
  function lerp_4(a, b, t) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new RoundedCornerShape(lerp_5(a.pbm_1, b.pbm_1, t), lerp_5(a.qbm_1, b.qbm_1, t), lerp_5(a.rbm_1, b.rbm_1, t), lerp_5(a.sbm_1, b.sbm_1, t));
  }
  function lerp_5(a, b, t) {
    _init_properties_RoundedCornerShape_kt__vzposf();
    return new lerp$1(a, b, t);
  }
  function lerp$1($a, $b, $t) {
    this.ebn_1 = $a;
    this.fbn_1 = $b;
    this.gbn_1 = $t;
  }
  protoOf(lerp$1).tbm = function (shapeSize, density) {
    return lerp(this.ebn_1.tbm(shapeSize, density), this.fbn_1.tbm(shapeSize, density), this.gbn_1);
  };
  var properties_initialized_RoundedCornerShape_kt_5mose9;
  function _init_properties_RoundedCornerShape_kt__vzposf() {
    if (!properties_initialized_RoundedCornerShape_kt_5mose9) {
      properties_initialized_RoundedCornerShape_kt_5mose9 = true;
      CircleShape = RoundedCornerShape_3(50);
      androidx_compose_foundation_shape_RoundedCornerShape$stable = 0;
    }
  }
  var DefaultSpringSpec;
  function get_EmptyResolvedStyle() {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    return EmptyResolvedStyle;
  }
  var EmptyResolvedStyle;
  var TextDefaultsResolvedStyle;
  var androidx_compose_foundation_style_ResolvedStyle$stable;
  function ResolvedStyle() {
    this.hbn_1 = 0;
    this.ibn_1 = 0;
    this.jbn_1 = null;
    this.kbn_1 = 0;
    this.lbn_1 = 1.0;
    this.mbn_1 = 1.0;
    this.nbn_1 = false;
    this.obn_1 = null;
    this.pbn_1 = 0.0;
    this.qbn_1 = 0.0;
    this.rbn_1 = 0.0;
    this.sbn_1 = 0.0;
    this.tbn_1 = 0.0;
    this.ubn_1 = 0.0;
    this.vbn_1 = 0.0;
    this.wbn_1 = 0.0;
    this.xbn_1 = 0.0;
    this.ybn_1 = NaN;
    this.zbn_1 = NaN;
    this.abo_1 = NaN;
    this.bbo_1 = NaN;
    this.cbo_1 = NaN;
    this.dbo_1 = NaN;
    this.ebo_1 = NaN;
    this.fbo_1 = NaN;
    this.gbo_1 = NaN;
    this.hbo_1 = NaN;
    this.ibo_1 = NaN;
    this.jbo_1 = NaN;
    this.kbo_1 = Companion_getInstance().h4x_1;
    this.lbo_1 = null;
    this.mbo_1 = Companion_getInstance().s4x_1;
    this.nbo_1 = null;
    this.obo_1 = Companion_getInstance().t4x_1;
    this.pbo_1 = null;
    this.qbo_1 = false;
    this.rbo_1 = get_RectangleShape();
    this.sbo_1 = 1.0;
    this.tbo_1 = 1.0;
    this.ubo_1 = 1.0;
    this.vbo_1 = 0.0;
    this.wbo_1 = 0.0;
    this.xbo_1 = 0.0;
    this.ybo_1 = 0.0;
    this.zbo_1 = 0.0;
    this.abp_1 = Companion_getInstance_17().k70_1;
    this.bbp_1 = 1.0;
    this.cbp_1 = 0.0;
    this.dbp_1 = Companion_getInstance().t4x_1;
    this.ebp_1 = null;
    this.fbp_1 = null;
    this.gbp_1 = null;
    this.hbp_1 = Companion_getInstance_18().q48_1;
    this.ibp_1 = Companion_getInstance_18().q48_1;
    this.jbp_1 = Companion_getInstance_18().q48_1;
    this.kbp_1 = Companion_getInstance_19().c5u_1;
    this.lbp_1 = Companion_getInstance_20().s5p_1;
    this.mbp_1 = 0;
    this.nbp_1 = null;
    this.obp_1 = null;
  }
  protoOf(ResolvedStyle).pbp = function (other, filterFlags) {
    var change = this.kbn_1 ^ other.kbn_1;
    var checkFor = this.kbn_1 & other.kbn_1 & filterFlags;
    if (!((checkFor & 1) === 0)) {
      if (!(this.pbn_1 === other.pbn_1) || !(this.qbn_1 === other.qbn_1) || !(this.rbn_1 === other.rbn_1) || !(this.sbn_1 === other.sbn_1) || !(this.xbn_1 === other.xbn_1)) {
        change = change | 1;
      }
    }
    if (!((checkFor & 8) === 0)) {
      if (!(this.ybn_1 === other.ybn_1) || !(this.zbn_1 === other.zbn_1) || !(this.abo_1 === other.abo_1) || !(this.bbo_1 === other.bbo_1) || !(this.tbn_1 === other.tbn_1) || !(this.ubn_1 === other.ubn_1) || !(this.vbn_1 === other.vbn_1) || !(this.wbn_1 === other.wbn_1) || !(toRawBits(this.cbo_1) === toRawBits(other.cbo_1)) || !(toRawBits(this.dbo_1) === toRawBits(other.dbo_1)) || !(toRawBits(this.ebo_1) === toRawBits(other.ebo_1)) || !(toRawBits(this.fbo_1) === toRawBits(other.fbo_1)) || !(toRawBits(this.ibo_1) === toRawBits(other.ibo_1)) || !(toRawBits(this.jbo_1) === toRawBits(other.jbo_1)) || !(toRawBits(this.gbo_1) === toRawBits(other.gbo_1)) || !(toRawBits(this.hbo_1) === toRawBits(other.hbo_1))) {
        change = change | 8;
      }
    }
    if (!((checkFor & 2) === 0)) {
      if (!(this.xbn_1 === other.xbn_1) || !equals(this.kbo_1, other.kbo_1) || !equals(this.lbo_1, other.lbo_1) || !equals(this.mbo_1, other.mbo_1) || !equals(this.nbo_1, other.nbo_1) || !equals(this.pbo_1, other.pbo_1) || !equals(this.obp_1, other.obp_1) || !equals(this.nbp_1, other.nbp_1) || !equals(this.rbo_1, other.rbo_1)) {
        change = change | 2;
      }
    }
    if (!((checkFor & 4) === 0)) {
      if (!(this.sbo_1 === other.sbo_1) || !(this.tbo_1 === other.tbo_1) || !(this.ubo_1 === other.ubo_1) || !(this.vbo_1 === other.vbo_1) || !(this.wbo_1 === other.wbo_1) || !(this.xbo_1 === other.xbo_1) || !(this.ybo_1 === other.ybo_1) || !(this.zbo_1 === other.zbo_1) || !equals(this.abp_1, other.abp_1) || !(this.qbo_1 === other.qbo_1)) {
        change = change | 4;
      }
    }
    if (!equals(this.rbo_1, other.rbo_1)) {
      change = change | 4 | 2;
    }
    if (!((checkFor & 64) === 0)) {
      if (!equals(this.dbp_1, other.dbp_1) || !equals(this.ebp_1, other.ebp_1)) {
        change = change | 64;
      }
    }
    if (!((checkFor & 32) === 0)) {
      if (!equals(this.fbp_1, other.fbp_1) || !equals(this.gbp_1, other.gbp_1) || !equals(this.hbp_1, other.hbp_1) || !equals(this.ibp_1, other.ibp_1) || !equals(this.jbp_1, other.jbp_1) || !equals(this.kbp_1, other.kbp_1) || !(this.lbp_1 === other.lbp_1) || !(this.mbp_1 === other.mbp_1)) {
        change = change | 32 | 64;
      }
    }
    return change;
  };
  protoOf(ResolvedStyle).qbp = function (target) {
    target.dbp_1 = this.dbp_1;
    target.ebp_1 = this.ebp_1;
    target.fbp_1 = this.fbp_1;
    target.gbp_1 = this.gbp_1;
    target.hbp_1 = this.hbp_1;
    target.ibp_1 = this.ibp_1;
    target.jbp_1 = this.jbp_1;
    target.kbp_1 = this.kbp_1;
    target.lbp_1 = this.lbp_1;
    target.mbp_1 = this.mbp_1;
  };
  protoOf(ResolvedStyle).rbp = function (target) {
    target.kbn_1 = this.kbn_1;
    target.cbo_1 = this.cbo_1;
    target.dbo_1 = this.dbo_1;
    target.ebo_1 = this.ebo_1;
    target.fbo_1 = this.fbo_1;
    target.gbo_1 = this.gbo_1;
    target.hbo_1 = this.hbo_1;
    target.ibo_1 = this.ibo_1;
    target.jbo_1 = this.jbo_1;
    target.pbn_1 = this.pbn_1;
    target.qbn_1 = this.qbn_1;
    target.rbn_1 = this.rbn_1;
    target.sbn_1 = this.sbn_1;
    target.tbn_1 = this.tbn_1;
    target.ubn_1 = this.ubn_1;
    target.vbn_1 = this.vbn_1;
    target.wbn_1 = this.wbn_1;
    target.xbn_1 = this.xbn_1;
    target.rbo_1 = this.rbo_1;
    target.sbo_1 = this.sbo_1;
    target.tbo_1 = this.tbo_1;
    target.ubo_1 = this.ubo_1;
    target.vbo_1 = this.vbo_1;
    target.wbo_1 = this.wbo_1;
    target.xbo_1 = this.xbo_1;
    target.ybo_1 = this.ybo_1;
    target.zbo_1 = this.zbo_1;
    target.abp_1 = this.abp_1;
    target.cbp_1 = this.cbp_1;
    target.bbp_1 = this.bbp_1;
    target.kbo_1 = this.kbo_1;
    target.lbo_1 = this.lbo_1;
    target.mbo_1 = this.mbo_1;
    target.nbo_1 = this.nbo_1;
    target.pbo_1 = this.pbo_1;
    target.nbp_1 = this.nbp_1;
    target.obp_1 = this.obp_1;
    target.qbo_1 = this.qbo_1;
    target.ybn_1 = this.ybn_1;
    target.zbn_1 = this.zbn_1;
    target.abo_1 = this.abo_1;
    target.bbo_1 = this.bbo_1;
    this.qbp(target);
  };
  protoOf(ResolvedStyle).sbp = function (style, node, density, animating) {
    this.tbp(node, density, animating);
    // Inline function 'kotlin.with' call
    style.ubp(this);
    this.vbp();
  };
  protoOf(ResolvedStyle).wbp = function (source) {
    var sourceTextFlags = source.kbn_1 & 96;
    if (sourceTextFlags === 0)
      return Unit_instance;
    this.kbn_1 = this.kbn_1 | sourceTextFlags;
    var tmp = this;
    var tmp0 = source.dbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other = this.dbp_1;
    var tmp_0;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(tmp0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_0 = tmp0;
    } else {
      tmp_0 = other;
    }
    tmp.dbp_1 = tmp_0;
    var tmp_1 = this;
    var tmp0_elvis_lhs = source.ebp_1;
    tmp_1.ebp_1 = tmp0_elvis_lhs == null ? this.ebp_1 : tmp0_elvis_lhs;
    var tmp_2 = this;
    var tmp1_elvis_lhs = source.fbp_1;
    tmp_2.fbp_1 = tmp1_elvis_lhs == null ? this.fbp_1 : tmp1_elvis_lhs;
    var tmp_3 = this;
    var tmp2_elvis_lhs = source.gbp_1;
    tmp_3.gbp_1 = tmp2_elvis_lhs == null ? this.gbp_1 : tmp2_elvis_lhs;
    var tmp_4 = this;
    var tmp0_0 = source.hbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_0 = this.hbp_1;
    var tmp_5;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(tmp0_0), new Long(0, 0))) {
      tmp_5 = tmp0_0;
    } else {
      tmp_5 = other_0;
    }
    tmp_4.hbp_1 = tmp_5;
    var tmp_6 = this;
    var tmp0_1 = source.ibp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_1 = this.ibp_1;
    var tmp_7;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(tmp0_1), new Long(0, 0))) {
      tmp_7 = tmp0_1;
    } else {
      tmp_7 = other_1;
    }
    tmp_6.ibp_1 = tmp_7;
    var tmp_8 = this;
    var tmp0_2 = source.jbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_2 = this.jbp_1;
    var tmp_9;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(tmp0_2), new Long(0, 0))) {
      tmp_9 = tmp0_2;
    } else {
      tmp_9 = other_2;
    }
    tmp_8.jbp_1 = tmp_9;
    var tmp_10 = this;
    var tmp0_3 = source.kbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_3 = this.kbp_1;
    tmp_10.kbp_1 = equals(tmp0_3, Companion_getInstance_19().c5u_1) ? tmp0_3 : other_3;
    var tmp_11 = this;
    var tmp0_4 = source.lbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_4 = this.lbp_1;
    var tmp_12;
    // Inline function 'androidx.compose.ui.text.style.isSpecified' call
    if (!(tmp0_4 === Companion_getInstance_20().s5p_1)) {
      tmp_12 = tmp0_4;
    } else {
      tmp_12 = other_4;
    }
    tmp_11.lbp_1 = tmp_12;
    var tmp_13 = this;
    var tmp0_5 = this.mbp_1;
    // Inline function 'androidx.compose.foundation.style.applyTextEnum' call
    var right = source.mbp_1;
    var left = tmp0_5;
    // Inline function 'androidx.compose.foundation.style.setBitsIfNonZero' call
    var left_0 = left;
    var rightBits = right & 3;
    left = left_0 & ~3 | (!(rightBits === 0) ? rightBits : left_0);
    // Inline function 'androidx.compose.foundation.style.setBitsIfNonZero' call
    var left_1 = left;
    var rightBits_0 = right & 28;
    left = left_1 & ~28 | (!(rightBits_0 === 0) ? rightBits_0 : left_1);
    // Inline function 'androidx.compose.foundation.style.setBitsIfNonZero' call
    var left_2 = left;
    var rightBits_1 = right & 112;
    left = left_2 & ~112 | (!(rightBits_1 === 0) ? rightBits_1 : left_2);
    // Inline function 'androidx.compose.foundation.style.setBitsIfNonZero' call
    var left_3 = left;
    var rightBits_2 = right & 768;
    left = left_3 & ~768 | (!(rightBits_2 === 0) ? rightBits_2 : left_3);
    // Inline function 'androidx.compose.foundation.style.setBitsIfNonZero' call
    var left_4 = left;
    var rightBits_3 = right & 15360;
    left = left_4 & ~15360 | (!(rightBits_3 === 0) ? rightBits_3 : left_4);
    // Inline function 'androidx.compose.foundation.style.setBitsIfNonZero' call
    var left_5 = left;
    var rightBits_4 = right & 134086656;
    left = left_5 & ~134086656 | (!(rightBits_4 === 0) ? rightBits_4 : left_5);
    tmp_13.mbp_1 = left;
  };
  protoOf(ResolvedStyle).xbp = function (fallback) {
    var default_0 = get_EmptyResolvedStyle();
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = this.dbp_1;
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this_0;
    } else {
      tmp = fallback.h4y();
    }
    var tmp_0 = tmp;
    var tmp0 = this.hbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other = fallback.q5v();
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(tmp0), new Long(0, 0))) {
      tmp_1 = tmp0;
    } else {
      tmp_1 = other;
    }
    var tmp_2 = tmp_1;
    var tmp_3 = this.zbp() ? this.ybp() : fallback.r5v();
    var tmp_4 = !(this.abq() === default_0.abq()) ? this.abq() : fallback.s5v();
    var tmp_5 = !(this.bbq() === default_0.bbq()) ? this.bbq() : fallback.t5v();
    var tmp0_elvis_lhs = this.fbp_1;
    var tmp_6 = tmp0_elvis_lhs == null ? fallback.u5v() : tmp0_elvis_lhs;
    var tmp_7 = fallback.v5v();
    var tmp0_0 = this.jbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_0 = fallback.w5v();
    var tmp_8;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(tmp0_0), new Long(0, 0))) {
      tmp_8 = tmp0_0;
    } else {
      tmp_8 = other_0;
    }
    var tmp_9 = tmp_8;
    var tmp_10;
    // Inline function 'androidx.compose.ui.text.style.isSpecified' call
    var this_1 = this.kbp_1;
    if (!isNaN_0(_BaselineShift___get_multiplier__impl__qhmjek(this_1))) {
      tmp_10 = this.kbp_1;
    } else {
      tmp_10 = fallback.x5v();
    }
    var tmp_11 = tmp_10;
    var tmp_12 = fallback.y5v();
    var tmp_13 = fallback.z5v();
    var tmp_14 = fallback.a5w();
    var tmp_15 = !this.cbq().equals(default_0.cbq()) ? this.cbq() : fallback.b5w();
    var tmp_16 = fallback.c5w();
    var tmp_17 = fallback.d5w();
    var tmp_18 = !(this.dbq() === default_0.dbq()) ? this.dbq() : fallback.e5w();
    var tmp_19 = !(this.ebq() === default_0.ebq()) ? this.ebq() : fallback.f5w();
    var tmp0_1 = this.ibp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_1 = fallback.g5w();
    var tmp_20;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(tmp0_1), new Long(0, 0))) {
      tmp_20 = tmp0_1;
    } else {
      tmp_20 = other_1;
    }
    var tmp_21 = tmp_20;
    var tmp1_elvis_lhs = this.gbp_1;
    var tmp_22 = tmp1_elvis_lhs == null ? fallback.h5w() : tmp1_elvis_lhs;
    var tmp_23 = fallback.i5w();
    var tmp0_2 = this.lbp_1;
    // Inline function 'androidx.compose.foundation.style.takeOrElse' call
    var other_2 = fallback.k5w();
    var tmp_24;
    // Inline function 'androidx.compose.ui.text.style.isSpecified' call
    if (!(tmp0_2 === Companion_getInstance_20().s5p_1)) {
      tmp_24 = tmp0_2;
    } else {
      tmp_24 = other_2;
    }
    var tmp$ret$13 = tmp_24;
    // Inline function 'kotlin.let' call
    var it = TextStyle_init_$Create$(tmp_0, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_9, tmp_11, tmp_12, tmp_13, tmp_14, tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_21, tmp_22, fallback.e5p_1, tmp_23, tmp$ret$13, !(this.fbq() === default_0.fbq()) ? this.fbq() : fallback.j5w(), fallback.l5w());
    return !(this.ebp_1 == null) ? it.p5v(this.ebp_1) : it;
  };
  protoOf(ResolvedStyle).m47 = function () {
    return this.lbn_1;
  };
  protoOf(ResolvedStyle).w47 = function () {
    return this.mbn_1;
  };
  protoOf(ResolvedStyle).n2a = function (_this__u8e3s4) {
    return currentValueOf(ensureNotNull(this.obn_1), _this__u8e3s4);
  };
  protoOf(ResolvedStyle).abq = function () {
    // Inline function 'androidx.compose.foundation.style.getBits' call
    return ((this.mbp_1 & 3) >> 0 & 1) === 1 ? Companion_getInstance_21().p5t_1 : Companion_getInstance_21().o5t_1;
  };
  protoOf(ResolvedStyle).dbq = function () {
    var tmp = Companion_getInstance_22();
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var tmp$ret$0 = (this.mbp_1 & 28) >> 2;
    return tmp.p62(tmp$ret$0);
  };
  protoOf(ResolvedStyle).ebq = function () {
    var tmp = Companion_getInstance_23();
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var tmp$ret$0 = (this.mbp_1 & 112) >> 4;
    return tmp.s62(tmp$ret$0);
  };
  protoOf(ResolvedStyle).fbq = function () {
    var tmp = Companion_getInstance_24();
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var tmp$ret$0 = (this.mbp_1 & 768) >> 8;
    return tmp.a62(tmp$ret$0);
  };
  protoOf(ResolvedStyle).ybp = function () {
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var tmp$ret$0 = (this.mbp_1 & 134086656) >> 17;
    return new FontWeight(tmp$ret$0);
  };
  protoOf(ResolvedStyle).zbp = function () {
    // Inline function 'androidx.compose.foundation.style.getBits' call
    return !((this.mbp_1 & 134086656) >> 17 === 0);
  };
  protoOf(ResolvedStyle).bbq = function () {
    var tmp = Companion_getInstance_25();
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var tmp$ret$0 = (this.mbp_1 & 15360) >> 10;
    return tmp.w61(tmp$ret$0 & 7);
  };
  protoOf(ResolvedStyle).cbq = function () {
    var tmp = Companion_getInstance_26();
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var tmp$ret$0 = (this.mbp_1 & 114688) >> 14;
    return tmp.q62(tmp$ret$0 & 3);
  };
  protoOf(ResolvedStyle).gbq = function (value) {
    this.kbn_1 = this.kbn_1 | 64;
    this.dbp_1 = value;
    this.ebp_1 = null;
  };
  protoOf(ResolvedStyle).hbq = function (value) {
    this.kbn_1 = this.kbn_1 | 64;
    var bits = 4 | value.q5r_1;
    this.mbp_1 = this.mbp_1 | bits << 14;
  };
  protoOf(ResolvedStyle).ibq = function (value) {
    this.kbn_1 = this.kbn_1 | 32;
    this.fbp_1 = value;
  };
  protoOf(ResolvedStyle).jbq = function (value) {
    this.kbn_1 = this.kbn_1 | 32;
    this.hbp_1 = value;
  };
  protoOf(ResolvedStyle).kbq = function (value) {
    this.kbn_1 = this.kbn_1 | 32;
    this.jbp_1 = value;
  };
  protoOf(ResolvedStyle).lbq = function (value) {
    this.kbn_1 = this.kbn_1 | 32;
    this.kbp_1 = value;
  };
  protoOf(ResolvedStyle).mbq = function (value) {
    this.kbn_1 = this.kbn_1 | 32;
    var tmp = this;
    // Inline function 'androidx.compose.foundation.style.setBits' call
    tmp.mbp_1 = this.mbp_1 & ~3 | (2 | _FontStyle___get_value__impl__gx8aaz(value)) << 0 & 3;
  };
  protoOf(ResolvedStyle).nbq = function (value) {
    this.kbn_1 = this.kbn_1 | 32;
    var tmp = this;
    // Inline function 'androidx.compose.foundation.style.setBits' call
    tmp.mbp_1 = this.mbp_1 & ~134086656 | value.v5r_1 << 17 & 134086656;
  };
  protoOf(ResolvedStyle).obq = function (value) {
    this.kbn_1 = this.kbn_1 | 32;
    var bits = 8 | _FontSynthesis___get_value__impl__xrueqg(value) & 7;
    this.mbp_1 = this.mbp_1 | bits << 10;
  };
  protoOf(ResolvedStyle).tbp = function (node, density, animating) {
    this.ibn_1 = 0;
    this.hbn_1 = 0;
    this.obn_1 = node;
    this.lbn_1 = density.m47();
    this.nbn_1 = animating;
  };
  protoOf(ResolvedStyle).vbp = function () {
    this.obn_1 = null;
    this.nbn_1 = false;
  };
  function lerp_6(a, b, t, flags, result) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    var resultFlags = a.kbn_1 | b.kbn_1;
    result.kbn_1 = resultFlags;
    var flagsToRun = resultFlags & flags;
    if (!((flagsToRun & 8) === 0)) {
      lerpOuterLayout(a, b, t, result);
    }
    if (!((flagsToRun & 1) === 0)) {
      lerpInnerLayout(a, b, t, result);
    }
    if (!((flagsToRun & 2) === 0)) {
      lerpDraw(a, b, t, result);
    }
    if (!((flagsToRun & 4) === 0)) {
      lerpLayer(a, b, t, result);
    }
    if (!((flagsToRun & 64) === 0)) {
      lerpTextDraw(a, b, t, result);
    }
    if (!((flagsToRun & 32) === 0)) {
      lerpTextLayout(a, b, t, result);
    }
  }
  function lerpOuterLayout(a, b, t, result) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    // Inline function 'kotlin.with' call
    var tmp = result;
    var tmp0 = a.tbn_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_0 = b.tbn_1;
    var aNan = isNaN_0(tmp0);
    var bNan = isNaN_0(b_0);
    var next = (1 - t) * tmp0 + t * b_0;
    tmp.tbn_1 = aNan ? b_0 : bNan ? tmp0 : next;
    var tmp_0 = result;
    var tmp0_0 = a.ubn_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_1 = b.ubn_1;
    var aNan_0 = isNaN_0(tmp0_0);
    var bNan_0 = isNaN_0(b_1);
    var next_0 = (1 - t) * tmp0_0 + t * b_1;
    tmp_0.ubn_1 = aNan_0 ? b_1 : bNan_0 ? tmp0_0 : next_0;
    var tmp_1 = result;
    var tmp0_1 = a.vbn_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_2 = b.vbn_1;
    var aNan_1 = isNaN_0(tmp0_1);
    var bNan_1 = isNaN_0(b_2);
    var next_1 = (1 - t) * tmp0_1 + t * b_2;
    tmp_1.vbn_1 = aNan_1 ? b_2 : bNan_1 ? tmp0_1 : next_1;
    var tmp_2 = result;
    var tmp0_2 = a.wbn_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_3 = b.wbn_1;
    var aNan_2 = isNaN_0(tmp0_2);
    var bNan_2 = isNaN_0(b_3);
    var next_2 = (1 - t) * tmp0_2 + t * b_3;
    tmp_2.wbn_1 = aNan_2 ? b_3 : bNan_2 ? tmp0_2 : next_2;
    var tmp_3 = result;
    var tmp0_3 = a.cbo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_4 = b.cbo_1;
    var aNan_3 = isNaN_0(tmp0_3);
    var bNan_3 = isNaN_0(b_4);
    var next_3 = (1 - t) * tmp0_3 + t * b_4;
    tmp_3.cbo_1 = aNan_3 ? b_4 : bNan_3 ? tmp0_3 : next_3;
    var tmp_4 = result;
    var tmp0_4 = a.dbo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_5 = b.dbo_1;
    var aNan_4 = isNaN_0(tmp0_4);
    var bNan_4 = isNaN_0(b_5);
    var next_4 = (1 - t) * tmp0_4 + t * b_5;
    tmp_4.dbo_1 = aNan_4 ? b_5 : bNan_4 ? tmp0_4 : next_4;
    var tmp_5 = result;
    var tmp0_5 = a.ebo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_6 = b.ebo_1;
    var aNan_5 = isNaN_0(tmp0_5);
    var bNan_5 = isNaN_0(b_6);
    var next_5 = (1 - t) * tmp0_5 + t * b_6;
    tmp_5.ebo_1 = aNan_5 ? b_6 : bNan_5 ? tmp0_5 : next_5;
    var tmp_6 = result;
    var tmp0_6 = a.fbo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_7 = b.fbo_1;
    var aNan_6 = isNaN_0(tmp0_6);
    var bNan_6 = isNaN_0(b_7);
    var next_6 = (1 - t) * tmp0_6 + t * b_7;
    tmp_6.fbo_1 = aNan_6 ? b_7 : bNan_6 ? tmp0_6 : next_6;
    var tmp_7 = result;
    var tmp0_7 = a.ybn_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_8 = b.ybn_1;
    var aNan_7 = isNaN_0(tmp0_7);
    var bNan_7 = isNaN_0(b_8);
    var next_7 = (1 - t) * tmp0_7 + t * b_8;
    tmp_7.ybn_1 = aNan_7 ? b_8 : bNan_7 ? tmp0_7 : next_7;
    var tmp_8 = result;
    var tmp0_8 = a.zbn_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_9 = b.zbn_1;
    var aNan_8 = isNaN_0(tmp0_8);
    var bNan_8 = isNaN_0(b_9);
    var next_8 = (1 - t) * tmp0_8 + t * b_9;
    tmp_8.zbn_1 = aNan_8 ? b_9 : bNan_8 ? tmp0_8 : next_8;
    var tmp_9 = result;
    var tmp0_9 = a.abo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_10 = b.abo_1;
    var aNan_9 = isNaN_0(tmp0_9);
    var bNan_9 = isNaN_0(b_10);
    var next_9 = (1 - t) * tmp0_9 + t * b_10;
    tmp_9.abo_1 = aNan_9 ? b_10 : bNan_9 ? tmp0_9 : next_9;
    var tmp_10 = result;
    var tmp0_10 = a.bbo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_11 = b.bbo_1;
    var aNan_10 = isNaN_0(tmp0_10);
    var bNan_10 = isNaN_0(b_11);
    var next_10 = (1 - t) * tmp0_10 + t * b_11;
    tmp_10.bbo_1 = aNan_10 ? b_11 : bNan_10 ? tmp0_10 : next_10;
    var tmp_11 = result;
    var tmp0_11 = a.ibo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_12 = b.ibo_1;
    var aNan_11 = isNaN_0(tmp0_11);
    var bNan_11 = isNaN_0(b_12);
    var next_11 = (1 - t) * tmp0_11 + t * b_12;
    tmp_11.ibo_1 = aNan_11 ? b_12 : bNan_11 ? tmp0_11 : next_11;
    var tmp_12 = result;
    var tmp0_12 = a.jbo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_13 = b.jbo_1;
    var aNan_12 = isNaN_0(tmp0_12);
    var bNan_12 = isNaN_0(b_13);
    var next_12 = (1 - t) * tmp0_12 + t * b_13;
    tmp_12.jbo_1 = aNan_12 ? b_13 : bNan_12 ? tmp0_12 : next_12;
    var tmp_13 = result;
    var tmp0_13 = a.gbo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_14 = b.gbo_1;
    var aNan_13 = isNaN_0(tmp0_13);
    var bNan_13 = isNaN_0(b_14);
    var next_13 = (1 - t) * tmp0_13 + t * b_14;
    tmp_13.gbo_1 = aNan_13 ? b_14 : bNan_13 ? tmp0_13 : next_13;
    var tmp_14 = result;
    var tmp0_14 = a.hbo_1;
    // Inline function 'androidx.compose.foundation.style.lerpMaybeNan' call
    var b_15 = b.hbo_1;
    var aNan_14 = isNaN_0(tmp0_14);
    var bNan_14 = isNaN_0(b_15);
    var next_14 = (1 - t) * tmp0_14 + t * b_15;
    tmp_14.hbo_1 = aNan_14 ? b_15 : bNan_14 ? tmp0_14 : next_14;
  }
  function lerpInnerLayout(a, b, t, result) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    // Inline function 'kotlin.with' call
    result.pbn_1 = lerp(a.pbn_1, b.pbn_1, t);
    result.qbn_1 = lerp(a.qbn_1, b.qbn_1, t);
    result.rbn_1 = lerp(a.rbn_1, b.rbn_1, t);
    result.sbn_1 = lerp(a.sbn_1, b.sbn_1, t);
  }
  function lerpDraw(a, b, t, result) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    // Inline function 'kotlin.with' call
    result.xbn_1 = lerp(a.xbn_1, b.xbn_1, t);
    result.kbo_1 = lerp_0(a.kbo_1, b.kbo_1, t);
    result.lbo_1 = lerp_7(a.lbo_1, a.kbo_1, b.lbo_1, b.kbo_1, t);
    result.mbo_1 = lerp_0(a.mbo_1, b.mbo_1, t);
    result.nbo_1 = lerp_7(a.nbo_1, a.mbo_1, b.nbo_1, b.mbo_1, t);
    result.pbo_1 = lerp_7(a.pbo_1, Companion_getInstance().t4x_1, b.pbo_1, Companion_getInstance().t4x_1, t);
    result.obp_1 = lerpShadows(a.obp_1, b.obp_1, t);
    result.nbp_1 = lerpShadows(a.nbp_1, b.nbp_1, t);
  }
  function lerpLayer(a, b, t, result) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    // Inline function 'kotlin.with' call
    result.sbo_1 = lerp(a.sbo_1, b.sbo_1, t);
    result.tbo_1 = lerp(a.tbo_1, b.tbo_1, t);
    result.ubo_1 = lerp(a.ubo_1, b.ubo_1, t);
    result.vbo_1 = lerp(a.vbo_1, b.vbo_1, t);
    result.wbo_1 = lerp(a.wbo_1, b.wbo_1, t);
    result.xbo_1 = lerp(a.xbo_1, b.xbo_1, t);
    result.ybo_1 = lerp(a.ybo_1, b.ybo_1, t);
    result.zbo_1 = lerp(a.zbo_1, b.zbo_1, t);
    result.abp_1 = TransformOrigin(lerp(_TransformOrigin___get_pivotFractionX__impl__a9pmci(a.abp_1), _TransformOrigin___get_pivotFractionX__impl__a9pmci(b.abp_1), t), lerp(_TransformOrigin___get_pivotFractionY__impl__ijwupp(a.abp_1), _TransformOrigin___get_pivotFractionY__impl__ijwupp(b.abp_1), t));
    result.cbp_1 = lerp(a.cbp_1, b.cbp_1, t);
    result.rbo_1 = lerp_8(a.rbo_1, b.rbo_1, t);
    result.qbo_1 = t < 0.5 ? a.qbo_1 : b.qbo_1;
  }
  function lerpTextDraw(a, b, t, result) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    // Inline function 'kotlin.with' call
    result.dbp_1 = lerp_0(a.dbp_1, b.dbp_1, t);
    result.ebp_1 = lerp_7(a.ebp_1, a.dbp_1, b.ebp_1, b.dbp_1, t);
  }
  function lerpTextLayout(a, b, t, result) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    // Inline function 'kotlin.with' call
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = a.hbp_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_1 = b.hbp_1;
      tmp = !equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_1), new Long(0, 0));
    } else {
      tmp = false;
    }
    if (tmp) {
      result.hbp_1 = lerp_1(a.hbp_1, b.hbp_1, t);
    }
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_2 = a.ibp_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_2), new Long(0, 0))) {
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_3 = b.ibp_1;
      tmp_0 = !equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_3), new Long(0, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      result.ibp_1 = lerp_1(a.ibp_1, b.ibp_1, t);
    }
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_4 = a.jbp_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_4), new Long(0, 0))) {
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      var this_5 = b.jbp_1;
      tmp_1 = !equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_5), new Long(0, 0));
    } else {
      tmp_1 = false;
    }
    if (tmp_1) {
      result.jbp_1 = lerp_1(a.jbp_1, b.jbp_1, t);
    }
    result.fbp_1 = t < 0.5 ? a.fbp_1 : b.fbp_1;
    result.gbp_1 = t < 0.5 ? a.gbp_1 : b.gbp_1;
    result.kbp_1 = t < 0.5 ? a.kbp_1 : b.kbp_1;
    result.lbp_1 = t < 0.5 ? a.lbp_1 : b.lbp_1;
    result.mbp_1 = t < 0.5 ? a.mbp_1 : b.mbp_1;
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var aWeight = (a.mbp_1 & 134086656) >> 17;
    // Inline function 'androidx.compose.foundation.style.getBits' call
    var bWeight = (b.mbp_1 & 134086656) >> 17;
    if (aWeight > 0 && bWeight > 0) {
      // Inline function 'androidx.compose.foundation.style.floorToNearest100' call
      var this_6 = lerp_2(aWeight, bWeight, t);
      var weight = imul(this_6 / 100 | 0, 100);
      var tmp_2 = result;
      // Inline function 'androidx.compose.foundation.style.setBits' call
      tmp_2.mbp_1 = result.mbp_1 & ~134086656 | weight << 17 & 134086656;
    }
  }
  function lerp_7(leftBrush, leftColor, rightBrush, rightColor, t) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    var a = leftBrush;
    var b = rightBrush;
    if (leftBrush == null && rightBrush == null) {
      return null;
    } else if (leftBrush == null) {
      a = new SolidColor(leftColor);
    } else if (rightBrush == null) {
      b = new SolidColor(rightColor);
    }
    var tmp = Companion_instance_1.n52(a, b, t);
    return tmp instanceof Brush ? tmp : null;
  }
  function lerpShadows(a, b, t) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    if (a == null && b == null) {
      return null;
    }
    var aIsArray = !(a == null) ? isArray(a) : false;
    var bIsArray = !(b == null) ? isArray(b) : false;
    if (!aIsArray && !bIsArray) {
      var tmp = a instanceof Shadow ? a : null;
      return lerp_3(tmp, b instanceof Shadow ? b : null, t);
    }
    var tmp_0;
    if (aIsArray) {
      tmp_0 = isArray(a) ? a : THROW_CCE();
    } else {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = [a instanceof Shadow ? a : THROW_CCE()];
    }
    var tmp_1 = tmp_0;
    var tmp_2;
    if (bIsArray) {
      tmp_2 = isArray(b) ? b : THROW_CCE();
    } else {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_2 = [b instanceof Shadow ? b : THROW_CCE()];
    }
    return lerpArrayShadows(tmp_1, tmp_2, t);
  }
  function lerp_8(a, b, t) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    var tmp = Companion_instance_1.n52(a, b, t);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Shape) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_RectangleShape() : tmp0_elvis_lhs;
  }
  function lerpArrayShadows(a, b, t) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    var tmp0 = a.length;
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = b.length;
    var maxSize = Math.max(tmp0, b_0);
    var tmp = 0;
    // Inline function 'kotlin.arrayOfNulls' call
    var tmp_0 = Array(maxSize);
    while (tmp < maxSize) {
      tmp_0[tmp] = null;
      tmp = tmp + 1 | 0;
    }
    var result = tmp_0;
    var inductionVariable = 0;
    if (inductionVariable < maxSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var left = getOrNull(a, i);
        var right = getOrNull(b, i);
        result[i] = lerp_3(left, right, t);
      }
       while (inductionVariable < maxSize);
    return result;
  }
  function sam$androidx_compose_foundation_style_Style$0(function_0) {
    this.pbq_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_style_Style$0).ubp = function (_this__u8e3s4) {
    return this.pbq_1(_this__u8e3s4);
  };
  protoOf(sam$androidx_compose_foundation_style_Style$0).r2 = function () {
    return this.pbq_1;
  };
  protoOf(sam$androidx_compose_foundation_style_Style$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Style) : false) {
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
  protoOf(sam$androidx_compose_foundation_style_Style$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function TextDefaultsResolvedStyle$lambda($this$apply) {
    _init_properties_ResolvedStyle_kt__ltzlbb();
    $this$apply.jbq(get_sp(14));
    $this$apply.kbq(get_sp(0));
    $this$apply.gbq(Companion_getInstance().h4x_1);
    $this$apply.nbq(Companion_getInstance_27().h5t_1);
    $this$apply.mbq(Companion_getInstance_21().o5t_1);
    $this$apply.obq(Companion_getInstance_25().t5t_1);
    $this$apply.ibq(Companion_getInstance_28().u5t_1);
    $this$apply.lbq(Companion_getInstance_19().b5u_1);
    $this$apply.hbq(Companion_getInstance_26().f5u_1);
    return Unit_instance;
  }
  var properties_initialized_ResolvedStyle_kt_9mq9w7;
  function _init_properties_ResolvedStyle_kt__ltzlbb() {
    if (!properties_initialized_ResolvedStyle_kt_9mq9w7) {
      properties_initialized_ResolvedStyle_kt_9mq9w7 = true;
      DefaultSpringSpec = spring();
      EmptyResolvedStyle = new ResolvedStyle();
      var tmp = new ResolvedStyle();
      var tmp_0 = TextDefaultsResolvedStyle$lambda;
      apply(tmp, new sam$androidx_compose_foundation_style_Style$0(tmp_0));
      TextDefaultsResolvedStyle = Unit_instance;
      androidx_compose_foundation_style_ResolvedStyle$stable = 0;
    }
  }
  var androidx_compose_foundation_style_CombinedStyle$stable;
  function Style() {
  }
  var androidx_compose_foundation_style_StyleAnimations$stable;
  var androidx_compose_foundation_style_StyleElement$stable;
  var androidx_compose_foundation_style_StyleInnerElement$stable;
  var androidx_compose_foundation_style_StyleOuterNode$stable;
  var androidx_compose_foundation_style_StyleInnerNode$stable;
  function StyleOuterNode$resolveInheritedStyle$lambda($nodes, this$0) {
    return function (node) {
      var tmp;
      if (!(node instanceof StyleOuterNode)) {
        return true;
      }
      var tmp_0;
      var tmp_1;
      if (!((node.gbr_1.kbn_1 & 96) === 0)) {
        tmp_1 = true;
      } else {
        var tmp1_safe_receiver = node.hbr_1;
        tmp_1 = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ki()) === true;
      }
      if (tmp_1) {
        var tmp0_elvis_lhs = $nodes._v;
        var tmp_2;
        if (tmp0_elvis_lhs == null) {
          // Inline function 'androidx.collection.mutableObjectListOf' call
          // Inline function 'kotlin.also' call
          var this_0 = new MutableObjectList();
          $nodes._v = this_0;
          this$0.ibr_1 = this_0;
          tmp_2 = this_0;
        } else {
          tmp_2 = tmp0_elvis_lhs;
        }
        tmp_2.g(node);
        tmp_0 = Unit_instance;
      }
      return true;
    };
  }
  function StyleOuterNode() {
  }
  protoOf(StyleOuterNode).qbr = function (phase, fallback) {
    var tmp0_safe_receiver = this.rbr(toFlags(phase));
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.xbp(fallback);
    return tmp1_elvis_lhs == null ? fallback : tmp1_elvis_lhs;
  };
  protoOf(StyleOuterNode).rbr = function (flags) {
    var nodes = {_v: this.ibr_1};
    var tmp;
    if (!((this.gbr_1.kbn_1 & 96) === 0)) {
      tmp = true;
    } else {
      var tmp1_safe_receiver = this.hbr_1;
      tmp = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ki()) === true;
    }
    if (tmp) {
      var tmp0_elvis_lhs = nodes._v;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'androidx.collection.mutableObjectListOf' call
        // Inline function 'kotlin.also' call
        var this_0 = new MutableObjectList();
        nodes._v = this_0;
        this.ibr_1 = this_0;
        tmp_0 = this_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      tmp_0.g(this);
    }
    traverseAncestors(this, 'StyleOuterNode', StyleOuterNode$resolveInheritedStyle$lambda(nodes, this));
    var startStyle = this.sbr();
    var startIndex = !(startStyle == null) ? -1 : -2;
    var tmp2_safe_receiver = this.hbr_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.ki();
    var hasAnimations = tmp3_elvis_lhs == null ? false : tmp3_elvis_lhs;
    var hasInheritedStyles = this.gbr_1.kbn_1 & 96;
    var tmp4_safe_receiver = nodes._v;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = tmp4_safe_receiver.jm_1;
      var inductionVariable = 0;
      var last = tmp4_safe_receiver.km_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var node = content[i];
          var cached = node.sbr();
          var tmp_1;
          if (hasAnimations) {
            tmp_1 = true;
          } else {
            var tmp0_safe_receiver = node.hbr_1;
            var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ki();
            tmp_1 = tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
          }
          hasAnimations = tmp_1;
          hasInheritedStyles = hasInheritedStyles | node.gbr_1.kbn_1 & 96;
          if (cached == null) {
            startStyle = null;
            startIndex = -2;
          } else if (startStyle == null) {
            startStyle = cached;
            startIndex = i;
          }
        }
         while (inductionVariable < last);
    }
    if (hasInheritedStyles === 0)
      return null;
    if (!(startStyle == null) && startIndex < 0 && !hasAnimations) {
      return startStyle;
    }
    var ancestorStyle = startStyle;
    startIndex = !(nodes._v == null) && startIndex < -1 ? nodes._v.l() - 1 | 0 : startIndex;
    var inductionVariable_0 = startIndex;
    if (-1 <= inductionVariable_0)
      $l$loop: do {
        var index = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + -1 | 0;
        var tmp_2;
        if (index < 0) {
          tmp_2 = this;
        } else {
          var tmp5_elvis_lhs = nodes._v;
          var tmp_3;
          if (tmp5_elvis_lhs == null) {
            continue $l$loop;
          } else {
            tmp_3 = tmp5_elvis_lhs;
          }
          tmp_2 = tmp_3.m(index);
        }
        var node_0 = tmp_2;
        var tmp6_elvis_lhs = node_0.jbr_1;
        var cachedStyle = tmp6_elvis_lhs == null ? new ResolvedStyle() : tmp6_elvis_lhs;
        var tmp7_safe_receiver = ancestorStyle;
        if (tmp7_safe_receiver == null)
          null;
        else {
          tmp7_safe_receiver.qbp(cachedStyle);
        }
        cachedStyle.wbp(node_0.gbr_1);
        ancestorStyle = cachedStyle;
        node_0.tbr(cachedStyle);
      }
       while (-1 <= inductionVariable_0);
    if (hasAnimations) {
      var animatingStyle = new ResolvedStyle();
      var tmp8_safe_receiver = ancestorStyle;
      if (tmp8_safe_receiver == null)
        null;
      else {
        tmp8_safe_receiver.qbp(animatingStyle);
      }
      var tmp9_safe_receiver = nodes._v;
      var tmp10_elvis_lhs = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.l();
      var size = tmp10_elvis_lhs == null ? 0 : tmp10_elvis_lhs;
      var density = requireDensity(this);
      var inductionVariable_1 = size - 1 | 0;
      if (-1 <= inductionVariable_1)
        $l$loop_0: do {
          var index_0 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var tmp_4;
          if (index_0 < 0) {
            tmp_4 = this;
          } else {
            var tmp11_elvis_lhs = nodes._v;
            var tmp_5;
            if (tmp11_elvis_lhs == null) {
              continue $l$loop_0;
            } else {
              tmp_5 = tmp11_elvis_lhs;
            }
            tmp_4 = tmp_5.m(index_0);
          }
          var node_1 = tmp_4;
          var tmp12_safe_receiver = node_1.hbr_1;
          if (tmp12_safe_receiver == null)
            null;
          else {
            tmp12_safe_receiver.ubr(animatingStyle, density, node_1, flags);
          }
        }
         while (-1 <= inductionVariable_1);
      ancestorStyle = animatingStyle;
    }
    return ancestorStyle;
  };
  protoOf(StyleOuterNode).sbr = function () {
    return this.kbr_1 ? null : this.jbr_1;
  };
  protoOf(StyleOuterNode).tbr = function (style) {
    this.kbr_1 = false;
    this.jbr_1 = style;
  };
  function toFlags(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_39().vbr_1 ? 32 : _this__u8e3s4 === Companion_getInstance_39().wbr_1 ? 64 : 96;
  }
  function apply(_this__u8e3s4, style) {
    // Inline function 'kotlin.with' call
    style.ubp(_this__u8e3s4);
  }
  var androidx_compose_foundation_style_StyleStateKey$stable;
  var androidx_compose_foundation_style_BooleanPredefinedKey$stable;
  var androidx_compose_foundation_style_PredefinedToggleStateKey$stable;
  var androidx_compose_foundation_style_StyleState$stable;
  var androidx_compose_foundation_style_MutableStyleState$stable;
  var androidx_compose_foundation_text_SecureTextFieldController$stable;
  var androidx_compose_foundation_text_PasswordInputTransformation$stable;
  function BasicText(text, modifier, style, onTextLayout, overflow, softWrap, maxLines, minLines, color, autoSize, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var style_0 = {_v: style};
    var onTextLayout_0 = {_v: onTextLayout};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var color_0 = {_v: color};
    var autoSize_0 = {_v: autoSize};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(-1040751001);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g1z(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.g1z(style_0._v) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.l1z(onTextLayout_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.i1z(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.w62_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.h1z(softWrap_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.i1z(maxLines_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.i1z(minLines_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.l1z(color_0._v) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ((($changed & 1073741824) === 0 ? $composer_0.g1z(autoSize_0._v) : $composer_0.l1z(autoSize_0._v)) ? 536870912 : 268435456);
    if ($composer_0.n1z(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      if (!(($default & 2) === 0)) {
        modifier_0._v = Companion_instance_0;
      }
      if (!(($default & 4) === 0)) {
        style_0._v = Companion_getInstance_29().h5v_1;
      }
      if (!(($default & 8) === 0)) {
        onTextLayout_0._v = null;
      }
      if (!(($default & 16) === 0)) {
        overflow_0._v = new TextOverflow(Companion_getInstance_30().n5n_1);
      }
      if (!(($default & 32) === 0)) {
        softWrap_0._v = true;
      }
      if (!(($default & 64) === 0)) {
        maxLines_0._v = 2147483647;
      }
      if (!(($default & 128) === 0)) {
        minLines_0._v = 1;
      }
      if (!(($default & 256) === 0)) {
        color_0._v = null;
      }
      if (!(($default & 512) === 0)) {
        autoSize_0._v = null;
      }
      validateMinMaxLines(minLines_0._v, maxLines_0._v);
      var tmp0 = get_LocalSelectionRegistrar();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      var selectionRegistrar = $composer_1.q1z(tmp0);
      var tmp;
      if (!(selectionRegistrar == null)) {
        $composer_0.m1y(356423075);
        var tmp0_0 = get_LocalTextSelectionColors();
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var $composer_2 = $composer_0;
        var backgroundSelectionColor = $composer_2.q1z(tmp0_0).zbr_1;
        var tmp_0 = selectionIdSaver(selectionRegistrar);
        var tmp0_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_0.l1z(selectionRegistrar);
        // Inline function 'kotlin.let' call
        var it = tmp0_1.e1z();
        var tmp_1;
        if (invalid || it === Companion_getInstance_11().f1y_1) {
          var value = BasicText$lambda(selectionRegistrar);
          tmp0_1.f1z(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp$ret$2 = tmp_1;
        var selectableId = rememberSaveable([selectionRegistrar], tmp_0, tmp$ret$2, $composer_0, 0);
        var tmp0_2 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid_0 = !!(!!($composer_0.k1z(selectableId) | $composer_0.g1z(selectionRegistrar)) | $composer_0.k1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(backgroundSelectionColor))));
        // Inline function 'kotlin.let' call
        var it_0 = tmp0_2.e1z();
        var tmp_2;
        if (invalid_0 || it_0 === Companion_getInstance_11().f1y_1) {
          var value_0 = new SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor);
          tmp0_2.f1z(value_0);
          tmp_2 = value_0;
        } else {
          tmp_2 = it_0;
        }
        var tmp1_group = tmp_2;
        $composer_0.n1y();
        tmp = tmp1_group;
      } else {
        $composer_0.m1y(356914239);
        $composer_0.n1y();
        tmp = null;
      }
      var selectionController = tmp;
      var tmp0_3 = get_LocalFontFamilyResolver();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_3 = $composer_0;
      var fontFamilyResolver = $composer_3.q1z(tmp0_3);
      BackgroundTextMeasurement(text, style_0._v, fontFamilyResolver, $composer_0, 14 & $dirty | 112 & $dirty >> 3);
      var tmp_3;
      if (!(selectionController == null) || !(onTextLayout_0._v == null) || !(autoSize_0._v == null)) {
        $composer_0.m1y(357232113);
        var tmp_4 = modifier_0._v;
        var tmp_5 = AnnotatedString_init_$Create$(text);
        var tmp_6 = style_0._v;
        var tmp_7 = onTextLayout_0._v;
        var tmp_8 = overflow_0._v;
        var tmp_9 = softWrap_0._v;
        var tmp_10 = maxLines_0._v;
        var tmp_11 = minLines_0._v;
        var tmp0_4 = get_LocalFontFamilyResolver();
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var $composer_4 = $composer_0;
        var tmp$ret$11 = $composer_4.q1z(tmp0_4);
        var tmp2_group = textModifier(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8.w62_1, tmp_9, tmp_10, tmp_11, tmp$ret$11, null, null, selectionController, color_0._v, null, autoSize_0._v);
        $composer_0.n1y();
        tmp_3 = tmp2_group;
      } else {
        $composer_0.m1y(357875859);
        $composer_0.n1y();
        tmp_3 = modifier_0._v.e6j(new TextStringSimpleElement(text, style_0._v, fontFamilyResolver, overflow_0._v.w62_1, softWrap_0._v, maxLines_0._v, minLines_0._v, color_0._v));
      }
      var finalModifier = tmp_3;
      var tmp2 = EmptyMeasurePolicy_getInstance();
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_1 = finalModifier;
      var $composer_5 = $composer_0;
      if (!((0 & 1) === 0))
        modifier_1 = Companion_instance_0;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_5, 0).hashCode();
      var materialized = materialize($composer_5, modifier_1);
      var localMap = $composer_5.p1z();
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var factory = Companion_getInstance_14().b84_1;
      var $composer_6 = $composer_5;
      var tmp_12 = $composer_6.g1y();
      if (!isInterface(tmp_12, Applier)) {
        invalidApplier();
      }
      $composer_6.z1y();
      if ($composer_6.h1y()) {
        $composer_6.a1z(factory);
      } else {
        $composer_6.b1z();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_6);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, tmp2, Companion_getInstance_14().g84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_14().f84_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_14().k84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_14().d84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_14().j84_1);
      $composer_6.c1z();
    } else {
      $composer_0.y1y();
    }
    var tmp3_safe_receiver = $composer_0.t1y();
    if (tmp3_safe_receiver == null)
      null;
    else {
      tmp3_safe_receiver.d2a(BasicText$lambda_0(text, modifier_0, style_0, onTextLayout_0, overflow_0, softWrap_0, maxLines_0, minLines_0, color_0, autoSize_0, $changed, $default));
    }
  }
  function selectionIdSaver(selectionRegistrar) {
    var tmp = selectionIdSaver$lambda(selectionRegistrar);
    return Saver(tmp, selectionIdSaver$lambda_0);
  }
  function textModifier(_this__u8e3s4, text, style, onTextLayout, overflow, softWrap, maxLines, minLines, fontFamilyResolver, placeholders, onPlaceholderLayout, selectionController, color, onShowTranslation, autoSize) {
    if (selectionController == null) {
      var staticTextModifier = new TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, null, color, autoSize, onShowTranslation);
      return _this__u8e3s4.e6j(Companion_instance_0).e6j(staticTextModifier);
    } else {
      var selectableTextModifier = new SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color, autoSize);
      return _this__u8e3s4.e6j(selectionController.fbs_1).e6j(selectableTextModifier);
    }
  }
  function EmptyMeasurePolicy$placementBlock$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  function EmptyMeasurePolicy() {
    EmptyMeasurePolicy_instance = this;
    var tmp = this;
    tmp.gbs_1 = EmptyMeasurePolicy$placementBlock$lambda;
  }
  protoOf(EmptyMeasurePolicy).y7s = function (_this__u8e3s4, measurables, constraints) {
    return _this__u8e3s4.s6s(_Constraints___get_maxWidth__impl__uuyqc(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints), VOID, this.gbs_1);
  };
  var EmptyMeasurePolicy_instance;
  function EmptyMeasurePolicy_getInstance() {
    if (EmptyMeasurePolicy_instance == null)
      new EmptyMeasurePolicy();
    return EmptyMeasurePolicy_instance;
  }
  function BasicText$lambda($selectionRegistrar) {
    return function () {
      return $selectionRegistrar.hbs();
    };
  }
  function BasicText$lambda_0($text, $modifier, $style, $onTextLayout, $overflow, $softWrap, $maxLines, $minLines, $color, $autoSize, $$changed, $$default) {
    return function ($composer, $force) {
      BasicText($text, $modifier._v, $style._v, $onTextLayout._v, $overflow._v.w62_1, $softWrap._v, $maxLines._v, $minLines._v, $color._v, $autoSize._v, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function selectionIdSaver$lambda($selectionRegistrar) {
    return function ($this$Saver, it) {
      return hasSelection($selectionRegistrar, it) ? it : null;
    };
  }
  function selectionIdSaver$lambda_0(it) {
    return it;
  }
  var androidx_compose_foundation_text_LegacyTextFieldState$stable;
  function validateMinMaxLines(minLines, maxLines) {
    // Inline function 'androidx.compose.foundation.internal.requirePrecondition' call
    if (!(minLines > 0 && maxLines > 0)) {
      var tmp$ret$1 = 'both minLines ' + minLines + ' and maxLines ' + maxLines + ' must be greater than zero';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.foundation.internal.requirePrecondition' call
    if (!(minLines <= maxLines)) {
      var tmp$ret$3 = 'minLines ' + minLines + ' must be less than or equal to maxLines ' + maxLines;
      throwIllegalArgumentException(tmp$ret$3);
    }
  }
  var androidx_compose_foundation_text_InlineTextContent$stable;
  var androidx_compose_foundation_text_KeyboardActionRunner$stable;
  var androidx_compose_foundation_text_KeyboardActions$stable;
  var androidx_compose_foundation_text_KeyboardOptions$stable;
  var androidx_compose_foundation_text_LinkStateInteractionSourceObserver$stable;
  function findParagraphStart(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    if (1 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        if (charSequenceGet(_this__u8e3s4, index - 1 | 0) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (1 <= inductionVariable);
    return 0;
  }
  function findParagraphEnd(_this__u8e3s4, startIndex) {
    var inductionVariable = startIndex;
    var last = charSequenceLength(_this__u8e3s4);
    if (inductionVariable < last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (charSequenceGet(_this__u8e3s4, index) === _Char___init__impl__6a9atx(10)) {
          return index;
        }
      }
       while (inductionVariable < last);
    return charSequenceLength(_this__u8e3s4);
  }
  function getParagraphBoundary(_this__u8e3s4, index) {
    return TextRange(findParagraphStart(_this__u8e3s4, index), findParagraphEnd(_this__u8e3s4, index));
  }
  var androidx_compose_foundation_text_TextAutoSizeDefaults$stable;
  var androidx_compose_foundation_text_TextDelegate$stable;
  function ceilToIntPx(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = Math.ceil(_this__u8e3s4);
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    return tmp;
  }
  var androidx_compose_foundation_text_TextFieldKeyInput$stable;
  var androidx_compose_foundation_text_TextFieldScrollerPosition$stable;
  var androidx_compose_foundation_text_TextLayoutResultProxy$stable;
  var androidx_compose_foundation_text_TextLinkScope$stable;
  var androidx_compose_foundation_text_TextRangeLayoutMeasureResult$stable;
  var androidx_compose_foundation_text_TextRangeLayoutMeasureScope$stable;
  var androidx_compose_foundation_text_TextRangeLayoutModifier$stable;
  var SNAPSHOTS_INTERVAL_MILLIS;
  var androidx_compose_foundation_text_UndoManager$stable;
  var androidx_compose_foundation_text_contextmenu_builder_TextContextMenuBuilderScope$stable;
  var androidx_compose_foundation_text_contextmenu_data_TextContextMenuData$stable;
  var androidx_compose_foundation_text_contextmenu_data_TextContextMenuComponent$stable;
  var androidx_compose_foundation_text_contextmenu_data_TextContextMenuSeparator$stable;
  var androidx_compose_foundation_text_contextmenu_data_TextContextMenuKeys$stable;
  var androidx_compose_foundation_text_contextmenu_modifier_AddTextContextMenuDataComponentsNode$stable;
  var androidx_compose_foundation_text_contextmenu_modifier_ToolbarRequester$stable;
  var androidx_compose_foundation_text_contextmenu_modifier_ToolbarRequesterImpl$stable;
  var androidx_compose_foundation_text_contextmenu_modifier_TextContextMenuToolbarHandlerNode$stable;
  var androidx_compose_foundation_text_contextmenu_provider_BasicTextContextMenuProvider$stable;
  var androidx_compose_foundation_text_input_TextFieldBuffer$stable;
  var androidx_compose_foundation_text_input_TextFieldCharSequence$stable;
  var androidx_compose_foundation_text_input_TextFieldLineLimits_SingleLine$stable;
  var androidx_compose_foundation_text_input_TextFieldLineLimits_MultiLine$stable;
  var androidx_compose_foundation_text_input_TextFieldState_Saver$stable;
  var androidx_compose_foundation_text_input_TextFieldState$stable;
  var androidx_compose_foundation_text_input_TextUndoManager_Companion_Saver$stable;
  var androidx_compose_foundation_text_input_TextUndoManager$stable;
  var androidx_compose_foundation_text_input_UndoState$stable;
  var androidx_compose_foundation_text_input_internal_ChangeTracker$stable;
  var androidx_compose_foundation_text_input_internal_SingleLineCodepointTransformation$stable;
  var androidx_compose_foundation_text_input_internal_CoreTextFieldSemanticsModifier$stable;
  var androidx_compose_foundation_text_input_internal_CoreTextFieldSemanticsModifierNode$stable;
  var androidx_compose_foundation_text_input_internal_CursorAnimationState$stable;
  var androidx_compose_foundation_text_input_internal_DragAndDropHoverInteraction_Enter$stable;
  var androidx_compose_foundation_text_input_internal_DragAndDropHoverInteraction_Exit$stable;
  var androidx_compose_foundation_text_input_internal_PartialGapBuffer$stable;
  var androidx_compose_foundation_text_input_internal_IntIntervalTree$stable;
  var androidx_compose_foundation_text_input_internal_LegacyAdaptingPlatformTextInputModifierNode$stable;
  var androidx_compose_foundation_text_input_internal_LegacyPlatformTextInputServiceAdapter$stable;
  var androidx_compose_foundation_text_input_internal_OffsetMappingCalculator$stable;
  var androidx_compose_foundation_text_input_internal_TextFieldKeyEventHandler$stable;
  var androidx_compose_foundation_text_input_internal_TextFieldLayoutStateCache$stable;
  var androidx_compose_foundation_text_input_internal_TextFieldTextLayoutModifier$stable;
  var androidx_compose_foundation_text_input_internal_TextFieldTextLayoutModifierNode$stable;
  var androidx_compose_foundation_text_input_internal_TextLayoutState$stable;
  var androidx_compose_foundation_text_input_internal_TextStyleBuffer$stable;
  var androidx_compose_foundation_text_input_internal_TransformedTextFieldState$stable;
  var androidx_compose_foundation_text_input_internal_SelectionWedgeAffinity$stable;
  var androidx_compose_foundation_text_input_internal_selection_TextFieldHandleState$stable;
  var androidx_compose_foundation_text_input_internal_selection_TextFieldMagnifierNode$stable;
  var androidx_compose_foundation_text_input_internal_selection_TextFieldSelectionState$stable;
  var androidx_compose_foundation_text_input_internal_selection_TextFieldPreparedSelectionState$stable;
  var androidx_compose_foundation_text_input_internal_selection_SelectionMovementDeletionContext$stable;
  var androidx_compose_foundation_text_input_internal_undo_TextUndoOperation$stable;
  var androidx_compose_foundation_text_input_internal_undo_UndoManager$stable;
  function _InlineDensity___init__impl__1m7u8m(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _InlineDensity___init__impl__1m7u8m_0(density, fontScale) {
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var v1 = fromInt(toRawBits(density));
    var v2 = fromInt(toRawBits(fontScale));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _InlineDensity___init__impl__1m7u8m(tmp$ret$0);
  }
  function _InlineDensity___init__impl__1m7u8m_1(density) {
    return _InlineDensity___init__impl__1m7u8m_0(density.m47(), density.w47());
  }
  function _InlineDensity___get_density__impl__uz12rr($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    return floatFromBits(bits);
  }
  function _InlineDensity___get_fontScale__impl__ao594c($this) {
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value = _get_packedValue__aj623s($this);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
    return floatFromBits(bits);
  }
  function InlineDensity__toString_impl_9jhvwu($this) {
    return 'InlineDensity(density=' + _InlineDensity___get_density__impl__uz12rr($this) + ', fontScale=' + _InlineDensity___get_fontScale__impl__ao594c($this) + ')';
  }
  function Companion() {
    Companion_instance_3 = this;
    this.ibs_1 = _InlineDensity___init__impl__1m7u8m_0(NaN, NaN);
  }
  var Companion_instance_3;
  function Companion_getInstance_35() {
    if (Companion_instance_3 == null)
      new Companion();
    return Companion_instance_3;
  }
  function InlineDensity__hashCode_impl_vanspp($this) {
    return $this.hashCode();
  }
  function InlineDensity__equals_impl_ppdv5r($this, other) {
    if (!(other instanceof InlineDensity))
      return false;
    var tmp0_other_with_cast = other.jbs_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function InlineDensity(packedValue) {
    Companion_getInstance_35();
    this.jbs_1 = packedValue;
  }
  protoOf(InlineDensity).toString = function () {
    return InlineDensity__toString_impl_9jhvwu(this.jbs_1);
  };
  protoOf(InlineDensity).hashCode = function () {
    return InlineDensity__hashCode_impl_vanspp(this.jbs_1);
  };
  protoOf(InlineDensity).equals = function (other) {
    return InlineDensity__equals_impl_ppdv5r(this.jbs_1, other);
  };
  function finalConstraints(constraints, softWrap, overflow, maxIntrinsicWidth) {
    return Companion_instance_2.k47(0, finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth), 0, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
  }
  function finalMaxLines(softWrap, overflow, maxLinesIn) {
    var overwriteMaxLines = !softWrap && get_isEllipsis(overflow);
    return overwriteMaxLines ? 1 : coerceAtLeast(maxLinesIn, 1);
  }
  function finalMaxWidth(constraints, softWrap, overflow, maxIntrinsicWidth) {
    var widthMatters = softWrap || get_isEllipsis(overflow);
    var tmp;
    if (widthMatters && _Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints)) {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    } else {
      tmp = 2147483647;
    }
    var maxWidth = tmp;
    var tmp_0;
    if (_Constraints___get_minWidth__impl__hi9lfi(constraints) === maxWidth) {
      tmp_0 = maxWidth;
    } else {
      tmp_0 = coerceIn(ceilToIntPx(maxIntrinsicWidth), _Constraints___get_minWidth__impl__hi9lfi(constraints), maxWidth);
    }
    return tmp_0;
  }
  function get_isEllipsis(_this__u8e3s4) {
    return _this__u8e3s4 === Companion_getInstance_30().o5n_1 || _this__u8e3s4 === Companion_getInstance_30().q5n_1 || _this__u8e3s4 === Companion_getInstance_30().r5n_1;
  }
  function get_EmptyTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return EmptyTextReplacement;
  }
  var EmptyTextReplacement;
  function get_TwoLineTextReplacement() {
    _init_properties_MinLinesConstrainer_kt__odtdjv();
    return TwoLineTextReplacement;
  }
  var TwoLineTextReplacement;
  var androidx_compose_foundation_text_modifiers_MinLinesConstrainer$stable;
  function Companion_0() {
    this.kbs_1 = null;
  }
  protoOf(Companion_0).lbs = function (minMaxUtil, layoutDirection, paramStyle, density, fontFamilyResolver) {
    if (minMaxUtil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (layoutDirection.equals(minMaxUtil.mbs_1) && resolveDefaults(paramStyle, layoutDirection).equals(minMaxUtil.nbs_1) && density.m47() === minMaxUtil.obs_1.m47() && fontFamilyResolver === minMaxUtil.pbs_1) {
        return minMaxUtil;
      }
    }
    var tmp1_safe_receiver = this.kbs_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (layoutDirection.equals(tmp1_safe_receiver.mbs_1) && resolveDefaults(paramStyle, layoutDirection).equals(tmp1_safe_receiver.nbs_1) && density.m47() === tmp1_safe_receiver.obs_1.m47() && fontFamilyResolver === tmp1_safe_receiver.pbs_1) {
        return tmp1_safe_receiver;
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = new MinLinesConstrainer(layoutDirection, resolveDefaults(paramStyle, layoutDirection), Density_0(density.m47(), density.w47()), fontFamilyResolver);
    Companion_instance_4.kbs_1 = this_0;
    return this_0;
  };
  var Companion_instance_4;
  function Companion_getInstance_36() {
    return Companion_instance_4;
  }
  function MinLinesConstrainer(layoutDirection, inputTextStyle, density, fontFamilyResolver) {
    this.mbs_1 = layoutDirection;
    this.nbs_1 = inputTextStyle;
    this.obs_1 = density;
    this.pbs_1 = fontFamilyResolver;
    this.qbs_1 = resolveDefaults(this.nbs_1, this.mbs_1);
    this.rbs_1 = NaN;
    this.sbs_1 = NaN;
  }
  protoOf(MinLinesConstrainer).tbs = function (inConstraints, minLines) {
    var oneLineHeight = this.sbs_1;
    var lineHeight = this.rbs_1;
    if (isNaN_0(oneLineHeight) || isNaN_0(lineHeight)) {
      oneLineHeight = Paragraph(get_EmptyTextReplacement(), this.qbs_1, Constraints_0(), this.obs_1, this.pbs_1, VOID, VOID, 1, Companion_getInstance_30().n5n_1).c47();
      var twoLineHeight = Paragraph(get_TwoLineTextReplacement(), this.qbs_1, Constraints_0(), this.obs_1, this.pbs_1, VOID, VOID, 2, Companion_getInstance_30().n5n_1).c47();
      lineHeight = twoLineHeight - oneLineHeight;
      this.sbs_1 = oneLineHeight;
      this.rbs_1 = lineHeight;
    }
    var tmp;
    if (!(minLines === 1)) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_0 = oneLineHeight + lineHeight * (minLines - 1 | 0);
      var tmp_0;
      if (isNaN_0(this_0)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_0);
      }
      var tmp$ret$0 = tmp_0;
      tmp = coerceAtMost(coerceAtLeast(tmp$ret$0, 0), _Constraints___get_maxHeight__impl__dt3e8z(inConstraints));
    } else {
      tmp = _Constraints___get_minHeight__impl__ev4bgx(inConstraints);
    }
    var minHeight = tmp;
    var tmp0_maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(inConstraints);
    var tmp1_minWidth = _Constraints___get_minWidth__impl__hi9lfi(inConstraints);
    var tmp2_maxWidth = _Constraints___get_maxWidth__impl__uuyqc(inConstraints);
    return Constraints_0(tmp1_minWidth, tmp2_maxWidth, minHeight, tmp0_maxHeight);
  };
  var properties_initialized_MinLinesConstrainer_kt_uvu6cn;
  function _init_properties_MinLinesConstrainer_kt__odtdjv() {
    if (!properties_initialized_MinLinesConstrainer_kt_uvu6cn) {
      properties_initialized_MinLinesConstrainer_kt_uvu6cn = true;
      EmptyTextReplacement = repeat('H', 10);
      TwoLineTextReplacement = get_EmptyTextReplacement() + '\n' + get_EmptyTextReplacement();
      androidx_compose_foundation_text_modifiers_MinLinesConstrainer$stable = 8;
    }
  }
  function get_DefaultFontSize() {
    _init_properties_MultiParagraphLayoutCache_kt__55bq8h();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  var androidx_compose_foundation_text_modifiers_MultiParagraphLayoutCache$stable;
  function _set_style__ksk9mc($this, value) {
    var newStyleHasSameLayoutAffectingAttrs = value.m5w($this.fbt_1);
    $this.fbt_1 = value;
    if (!newStyleHasSameLayoutAffectingAttrs) {
      markStyleAffectedDirty($this);
    }
  }
  function _get_fontSizeSearchScope__6avset($this) {
    if ($this.lbt_1 == null)
      $this.lbt_1 = new TextAutoSizeLayoutScopeImpl($this);
    return ensureNotNull($this.lbt_1);
  }
  function recordHistory($this, op) {
    $this.mbt_1 = bitwiseOr(shiftLeft($this.mbt_1, 2), _LayoutCacheOperation___get_flag__impl__t7gghn(op));
  }
  function useMinLinesConstrainer($this, constraints, layoutDirection) {
    // Inline function 'kotlin.also' call
    var this_0 = Companion_instance_4.lbs($this.cbt_1, layoutDirection, $this.fbt_1, ensureNotNull($this.ebt_1), $this.vbs_1);
    $this.cbt_1 = this_0;
    var localMin = this_0;
    return localMin.tbs(constraints, $this.zbs_1);
  }
  function textLayoutResult($this, layoutDirection, finalConstraints, multiParagraph) {
    var tmp0 = multiParagraph.v5m_1.g4o();
    // Inline function 'kotlin.math.min' call
    var b = multiParagraph.y5m_1;
    var layoutWidth = Math.min(tmp0, b);
    var tmp = $this.ubs_1;
    var tmp_0 = $this.fbt_1;
    // Inline function 'kotlin.collections.orEmpty' call
    var tmp0_elvis_lhs = $this.abt_1;
    var tmp$ret$1 = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
    var tmp_1 = TextLayoutInput_init_$Create$(tmp, tmp_0, tmp$ret$1, $this.ybs_1, $this.xbs_1, $this.wbs_1, ensureNotNull($this.ebt_1), layoutDirection, $this.vbs_1, finalConstraints);
    var tmp0_0 = ceilToIntPx(layoutWidth);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = ceilToIntPx(multiParagraph.z5m_1);
    var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp$ret$2 = _IntSize___init__impl__emcjft(tmp$ret$3);
    return new TextLayoutResult(tmp_1, multiParagraph, constrain(finalConstraints, tmp$ret$2));
  }
  function setLayoutDirection($this, layoutDirection) {
    var localIntrinsics = $this.gbt_1;
    var tmp;
    if (localIntrinsics == null || !layoutDirection.equals($this.hbt_1) || localIntrinsics.h5p()) {
      $this.hbt_1 = layoutDirection;
      var tmp0_annotatedString = $this.ubs_1;
      var tmp1_style = resolveDefaults($this.fbt_1, layoutDirection);
      var tmp2_density = ensureNotNull($this.ebt_1);
      var tmp3_fontFamilyResolver = $this.vbs_1;
      // Inline function 'kotlin.collections.orEmpty' call
      var tmp0_elvis_lhs = $this.abt_1;
      var tmp4_placeholders = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
      tmp = new MultiParagraphIntrinsics(tmp0_annotatedString, tmp1_style, tmp4_placeholders, tmp2_density, tmp3_fontFamilyResolver);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.gbt_1 = intrinsics;
    return intrinsics;
  }
  function layoutText($this, constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection($this, layoutDirection);
    return new MultiParagraph(localParagraphIntrinsics, finalConstraints(constraints, $this.xbs_1, $this.wbs_1, localParagraphIntrinsics.g4o()), finalMaxLines($this.xbs_1, $this.wbs_1, $this.ybs_1), $this.wbs_1);
  }
  function newLayoutWillBeDifferent($this, $receiver, constraints, layoutDirection) {
    if ($receiver == null)
      return true;
    if ($receiver.j5u_1.v5m_1.h5p())
      return true;
    if (!layoutDirection.equals($receiver.i5u_1.b5v_1))
      return true;
    if (equals(constraints, $receiver.i5u_1.d5v_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc($receiver.i5u_1.d5v_1)))
      return true;
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === _Constraints___get_minWidth__impl__hi9lfi($receiver.i5u_1.d5v_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < $receiver.j5u_1.z5m_1 || $receiver.j5u_1.x5m_1) {
      return true;
    }
    return false;
  }
  function markDirty($this) {
    $this.gbt_1 = null;
    $this.ibt_1 = null;
    $this.kbt_1 = -1;
    $this.jbt_1 = -1;
    $this.lbt_1 = null;
  }
  function markStyleAffectedDirty($this) {
    recordHistory($this, Companion_getInstance_37().nbt_1);
    $this.gbt_1 = null;
    $this.ibt_1 = null;
    $this.kbt_1 = -1;
    $this.jbt_1 = -1;
  }
  function TextAutoSizeLayoutScopeImpl($outer) {
    this.sbt_1 = $outer;
    this.rbt_1 = null;
  }
  protoOf(TextAutoSizeLayoutScopeImpl).m47 = function () {
    return ensureNotNull(this.sbt_1.ebt_1).m47();
  };
  protoOf(TextAutoSizeLayoutScopeImpl).w47 = function () {
    return ensureNotNull(this.sbt_1.ebt_1).w47();
  };
  protoOf(TextAutoSizeLayoutScopeImpl).p47 = function (_this__u8e3s4) {
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
      // Inline function 'kotlin.check' call
      if (!!_TextUnit___get_isEm__impl__esrmtl(this.sbt_1.fbt_1.q5v())) {
        var message = "InternalAutoSize -> toPx(): Cannot convert Em to Px when style.fontSize is Em\nDeclare the composable's style.fontSize with Sp units instead.";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.check' call
      if (!!equals(this.sbt_1.fbt_1.q5v(), Companion_getInstance_18().q48_1)) {
        var message_0 = 'InternalAutoSize -> toPx(): Cannot convert Em to Px when style.fontSize is not set. Please specify a font size.';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      return this.p47(this.sbt_1.fbt_1.q5v()) * _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
    }
    return this.n47(this.t47(_this__u8e3s4));
  };
  function MultiParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders, autoSize) {
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    autoSize = autoSize === VOID ? null : autoSize;
    this.ubs_1 = text;
    this.vbs_1 = fontFamilyResolver;
    this.wbs_1 = overflow;
    this.xbs_1 = softWrap;
    this.ybs_1 = maxLines;
    this.zbs_1 = minLines;
    this.abt_1 = placeholders;
    this.bbt_1 = autoSize;
    this.cbt_1 = null;
    this.dbt_1 = Companion_getInstance_35().ibs_1;
    this.ebt_1 = null;
    this.fbt_1 = style;
    this.gbt_1 = null;
    this.hbt_1 = null;
    this.ibt_1 = null;
    this.jbt_1 = -1;
    this.kbt_1 = -1;
    this.lbt_1 = null;
    this.mbt_1 = new Long(0, 0);
  }
  protoOf(MultiParagraphLayoutCache).tbt = function (value) {
    var localField = this.ebt_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_35().ibs_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.ebt_1 = value;
      this.dbt_1 = newDensity;
      return Unit_instance;
    }
    if (value == null || !equals(this.dbt_1, newDensity)) {
      this.ebt_1 = value;
      this.dbt_1 = newDensity;
      recordHistory(this, Companion_getInstance_37().obt_1);
      markDirty(this);
    }
  };
  protoOf(MultiParagraphLayoutCache).ubt = function () {
    var tmp0_elvis_lhs = this.ibt_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      throw IllegalStateException_init_$Create$('Internal Error: MultiParagraphLayoutCache could not provide TextLayoutResult during the draw phase. Please report this bug on the official Issue Tracker with the following diagnostic information: ' + this.toString());
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MultiParagraphLayoutCache).vbt = function () {
    return this.ibt_1;
  };
  protoOf(MultiParagraphLayoutCache).wbt = function (constraints, layoutDirection) {
    recordHistory(this, Companion_getInstance_37().qbt_1);
    var tmp;
    if (this.zbs_1 > 1) {
      tmp = useMinLinesConstrainer(this, constraints, layoutDirection);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent(this, this.ibt_1, finalConstraints, layoutDirection)) {
      if (equals(finalConstraints, ensureNotNull(this.ibt_1).i5u_1.d5v_1))
        return false;
      this.ibt_1 = textLayoutResult(this, layoutDirection, finalConstraints, ensureNotNull(this.ibt_1).j5u_1);
      return true;
    }
    if (!(this.bbt_1 == null)) {
      this.hbt_1 = layoutDirection;
      var fontSizeBeforeLayout = this.fbt_1.q5v();
      // Inline function 'kotlin.with' call
      var $this$with = ensureNotNull(this.bbt_1);
      // Inline function 'kotlin.with' call
      var $this$with_0 = _get_fontSizeSearchScope__6avset(this);
      var autoSizeFontSize = $this$with.xbt($this$with_0, constraints, this.ubs_1);
      if (_TextUnit___get_isEm__impl__esrmtl(autoSizeFontSize)) {
        autoSizeFontSize = times(fontSizeBeforeLayout, autoSizeFontSize);
      }
      var optimalFontSize = autoSizeFontSize;
      var autoSizeLayoutCache = _get_fontSizeSearchScope__6avset(this).rbt_1;
      if (!(autoSizeLayoutCache == null) && equals(optimalFontSize, autoSizeLayoutCache.i5u_1.v5u_1.q5v()) && autoSizeLayoutCache.i5u_1.z5u_1 === this.wbs_1) {
        this.ibt_1 = autoSizeLayoutCache;
        return true;
      }
      _set_style__ksk9mc(this, this.fbt_1.n5v(VOID, optimalFontSize));
    }
    var multiParagraph = layoutText(this, finalConstraints, layoutDirection);
    this.ibt_1 = textLayoutResult(this, layoutDirection, finalConstraints, multiParagraph);
    return true;
  };
  protoOf(MultiParagraphLayoutCache).ybt = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, placeholders, autoSize) {
    this.ubs_1 = text;
    _set_style__ksk9mc(this, style);
    this.vbs_1 = fontFamilyResolver;
    this.wbs_1 = overflow;
    this.xbs_1 = softWrap;
    this.ybs_1 = maxLines;
    this.zbs_1 = minLines;
    this.abt_1 = placeholders;
    this.bbt_1 = autoSize;
    recordHistory(this, Companion_getInstance_37().pbt_1);
    markDirty(this);
  };
  protoOf(MultiParagraphLayoutCache).toString = function () {
    var tmp = 'MultiParagraphLayoutCache(textLayoutResult=' + (!(this.ibt_1 == null) ? '<TextLayoutResult>' : 'null') + ', ';
    var tmp_0 = InlineDensity__toString_impl_9jhvwu(this.dbt_1);
    var tmp_1 = this.mbt_1.toString();
    var tmp0_safe_receiver = this.ibt_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.i5u_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.d5v_1;
    var tmp_2;
    var tmp_3 = tmp2_elvis_lhs;
    if ((tmp_3 == null ? null : new Constraints(tmp_3)) == null) {
      tmp_2 = 'null';
    } else {
      tmp_2 = new Constraints(tmp2_elvis_lhs);
    }
    return tmp + ('lastDensity=' + tmp_0 + ', history=' + tmp_1 + ', constraints=' + toString(tmp_2) + ')');
  };
  function times(_this__u8e3s4, other) {
    _init_properties_MultiParagraphLayoutCache_kt__55bq8h();
    if (_TextUnit___get_isEm__impl__esrmtl(other)) {
      if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
        throw IllegalStateException_init_$Create$('Cannot convert Em to Px when style.fontSize is' + (' Em (' + TextUnit__toString_impl_51ghw0(other) + '). Please declare the style.fontSize') + ' with Sp units instead.');
      }
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0))) {
        var tmp0 = get_DefaultFontSize();
        // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
        var other_0 = _TextUnit___get_value__impl__hpbx0k(other);
        checkArithmetic(tmp0);
        return pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0), _TextUnit___get_value__impl__hpbx0k(tmp0) * other_0);
      }
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other_1 = _TextUnit___get_value__impl__hpbx0k(other);
      checkArithmetic(_this__u8e3s4);
      return pack(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4) * other_1);
    } else {
      throw IllegalArgumentException_init_$Create$('The multiplier must be in em, but was ' + TextUnit__toString_impl_51ghw0(other) + '.');
    }
  }
  var properties_initialized_MultiParagraphLayoutCache_kt_kae00j;
  function _init_properties_MultiParagraphLayoutCache_kt__55bq8h() {
    if (!properties_initialized_MultiParagraphLayoutCache_kt_kae00j) {
      properties_initialized_MultiParagraphLayoutCache_kt_kae00j = true;
      DefaultFontSize = get_sp(14);
      androidx_compose_foundation_text_modifiers_MultiParagraphLayoutCache$stable = 8;
    }
  }
  var androidx_compose_foundation_text_modifiers_ParagraphLayoutCache$stable;
  function recordHistory_0($this, op) {
    $this.rbu_1 = bitwiseOr(shiftLeft($this.rbu_1, 2), _LayoutCacheOperation___get_flag__impl__t7gghn(op));
  }
  function useMinLinesConstrainer_0($this, constraints, layoutDirection, style) {
    style = style === VOID ? $this.abu_1 : style;
    // Inline function 'kotlin.also' call
    var this_0 = Companion_instance_4.lbs($this.lbu_1, layoutDirection, style, ensureNotNull($this.hbu_1), $this.bbu_1);
    $this.lbu_1 = this_0;
    var localMin = this_0;
    return localMin.tbs(constraints, $this.fbu_1);
  }
  function setLayoutDirection_0($this, layoutDirection) {
    var localIntrinsics = $this.mbu_1;
    var tmp;
    if (localIntrinsics == null || !layoutDirection.equals($this.nbu_1) || localIntrinsics.h5p()) {
      $this.nbu_1 = layoutDirection;
      var tmp_0 = $this.zbt_1;
      var tmp_1 = resolveDefaults($this.abu_1, layoutDirection);
      // Inline function 'kotlin.collections.listOf' call
      var tmp_2 = emptyList();
      var tmp_3 = ensureNotNull($this.hbu_1);
      var tmp_4 = $this.bbu_1;
      // Inline function 'kotlin.collections.listOf' call
      var tmp$ret$1 = emptyList();
      tmp = ParagraphIntrinsics(tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp$ret$1);
    } else {
      tmp = localIntrinsics;
    }
    var intrinsics = tmp;
    $this.mbu_1 = intrinsics;
    return intrinsics;
  }
  function newLayoutWillBeDifferent_0($this, constraints, layoutDirection) {
    var tmp0_elvis_lhs = $this.ibu_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return true;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localParagraph = tmp;
    var tmp1_elvis_lhs = $this.mbu_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return true;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localParagraphIntrinsics = tmp_0;
    if (localParagraphIntrinsics.h5p())
      return true;
    if (!layoutDirection.equals($this.nbu_1))
      return true;
    if (equals(constraints, $this.obu_1))
      return false;
    if (!(_Constraints___get_maxWidth__impl__uuyqc(constraints) === _Constraints___get_maxWidth__impl__uuyqc($this.obu_1)))
      return true;
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === _Constraints___get_minWidth__impl__hi9lfi($this.obu_1)))
      return true;
    if (_Constraints___get_maxHeight__impl__dt3e8z(constraints) < localParagraph.c47() || localParagraph.w5n()) {
      return true;
    }
    return false;
  }
  function markDirty_0($this) {
    $this.ibu_1 = null;
    $this.mbu_1 = null;
    $this.nbu_1 = null;
    $this.pbu_1 = -1;
    $this.qbu_1 = -1;
    $this.obu_1 = Companion_instance_2.j47(0, 0);
    var tmp = $this;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    tmp.kbu_1 = _IntSize___init__impl__emcjft(tmp$ret$1);
    $this.jbu_1 = false;
  }
  function ParagraphLayoutCache(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    this.zbt_1 = text;
    this.abu_1 = style;
    this.bbu_1 = fontFamilyResolver;
    this.cbu_1 = overflow;
    this.dbu_1 = softWrap;
    this.ebu_1 = maxLines;
    this.fbu_1 = minLines;
    this.gbu_1 = Companion_getInstance_35().ibs_1;
    this.hbu_1 = null;
    this.ibu_1 = null;
    this.jbu_1 = false;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
    tmp.kbu_1 = _IntSize___init__impl__emcjft(tmp$ret$1);
    this.lbu_1 = null;
    this.mbu_1 = null;
    this.nbu_1 = null;
    this.obu_1 = Companion_instance_2.j47(0, 0);
    this.pbu_1 = -1;
    this.qbu_1 = -1;
    this.rbu_1 = new Long(0, 0);
  }
  protoOf(ParagraphLayoutCache).tbt = function (value) {
    var localField = this.hbu_1;
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = _InlineDensity___init__impl__1m7u8m_1(value);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_0;
    var tmp_1 = tmp1_elvis_lhs;
    if ((tmp_1 == null ? null : new InlineDensity(tmp_1)) == null) {
      tmp_0 = Companion_getInstance_35().ibs_1;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var newDensity = tmp_0;
    if (localField == null) {
      this.hbu_1 = value;
      this.gbu_1 = newDensity;
      return Unit_instance;
    }
    if (value == null || !equals(this.gbu_1, newDensity)) {
      this.hbu_1 = value;
      this.gbu_1 = newDensity;
      recordHistory_0(this, Companion_getInstance_37().obt_1);
      markDirty_0(this);
    }
  };
  protoOf(ParagraphLayoutCache).sbu = function () {
    var tmp0_safe_receiver = this.mbu_1;
    if (tmp0_safe_receiver == null)
      null;
    else
      tmp0_safe_receiver.h5p();
  };
  protoOf(ParagraphLayoutCache).wbt = function (constraints, layoutDirection) {
    recordHistory_0(this, Companion_getInstance_37().qbt_1);
    var tmp;
    if (this.fbu_1 > 1) {
      tmp = useMinLinesConstrainer_0(this, constraints, layoutDirection);
    } else {
      tmp = constraints;
    }
    var finalConstraints = tmp;
    if (!newLayoutWillBeDifferent_0(this, finalConstraints, layoutDirection)) {
      if (!equals(finalConstraints, this.obu_1)) {
        var localParagraph = ensureNotNull(this.ibu_1);
        var tmp0 = localParagraph.g4o();
        // Inline function 'kotlin.math.min' call
        var b = localParagraph.b47();
        var layoutWidth = Math.min(tmp0, b);
        var tmp0_0 = ceilToIntPx(layoutWidth);
        // Inline function 'androidx.compose.ui.unit.IntSize' call
        // Inline function 'androidx.compose.ui.util.packInts' call
        var val2 = ceilToIntPx(localParagraph.c47());
        var tmp$ret$2 = bitwiseOr(shiftLeft(fromInt(tmp0_0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
        var tmp$ret$1 = _IntSize___init__impl__emcjft(tmp$ret$2);
        var localSize = constrain(finalConstraints, tmp$ret$1);
        this.kbu_1 = localSize;
        var tmp_0 = this;
        var tmp_1;
        if (!(this.cbu_1 === Companion_getInstance_30().p5n_1)) {
          var tmp_2;
          // Inline function 'androidx.compose.ui.unit.IntSize.width' call
          // Inline function 'androidx.compose.ui.util.unpackInt1' call
          var value = _IntSize___get_packedValue__impl__uho7jf(localSize);
          if (convertToInt(shiftRight(value, 32)) < localParagraph.b47()) {
            tmp_2 = true;
          } else {
            // Inline function 'androidx.compose.ui.unit.IntSize.height' call
            // Inline function 'androidx.compose.ui.util.unpackInt2' call
            var value_0 = _IntSize___get_packedValue__impl__uho7jf(localSize);
            tmp_2 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0))) < localParagraph.c47();
          }
          tmp_1 = tmp_2;
        } else {
          tmp_1 = false;
        }
        tmp_0.jbu_1 = tmp_1;
        this.obu_1 = finalConstraints;
      }
      return false;
    }
    var tmp_3 = this;
    // Inline function 'kotlin.also' call
    var this_0 = this.tbu(finalConstraints, layoutDirection);
    this.obu_1 = finalConstraints;
    var tmp0_1 = ceilToIntPx(this_0.b47());
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2_0 = ceilToIntPx(this_0.c47());
    var tmp$ret$10 = bitwiseOr(shiftLeft(fromInt(tmp0_1), 32), bitwiseAnd(fromInt(val2_0), new Long(-1, 0)));
    var tmp$ret$9 = _IntSize___init__impl__emcjft(tmp$ret$10);
    var localSize_0 = constrain(finalConstraints, tmp$ret$9);
    this.kbu_1 = localSize_0;
    var tmp_4 = this;
    var tmp_5;
    if (!(this.cbu_1 === Companion_getInstance_30().p5n_1)) {
      var tmp_6;
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(localSize_0);
      if (convertToInt(shiftRight(value_1, 32)) < this_0.b47()) {
        tmp_6 = true;
      } else {
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value_2 = _IntSize___get_packedValue__impl__uho7jf(localSize_0);
        tmp_6 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0))) < this_0.c47();
      }
      tmp_5 = tmp_6;
    } else {
      tmp_5 = false;
    }
    tmp_4.jbu_1 = tmp_5;
    tmp_3.ibu_1 = this_0;
    return true;
  };
  protoOf(ParagraphLayoutCache).ubu = function (text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines) {
    this.zbt_1 = text;
    this.abu_1 = style;
    this.bbu_1 = fontFamilyResolver;
    this.cbu_1 = overflow;
    this.dbu_1 = softWrap;
    this.ebu_1 = maxLines;
    this.fbu_1 = minLines;
    recordHistory_0(this, Companion_getInstance_37().pbt_1);
    markDirty_0(this);
  };
  protoOf(ParagraphLayoutCache).tbu = function (constraints, layoutDirection) {
    var localParagraphIntrinsics = setLayoutDirection_0(this, layoutDirection);
    return Paragraph_0(localParagraphIntrinsics, finalConstraints(constraints, this.dbu_1, this.cbu_1, localParagraphIntrinsics.g4o()), finalMaxLines(this.dbu_1, this.cbu_1, this.ebu_1), this.cbu_1);
  };
  protoOf(ParagraphLayoutCache).vbu = function (style) {
    var tmp0_elvis_lhs = this.nbu_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var localLayoutDirection = tmp;
    var tmp1_elvis_lhs = this.hbu_1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return null;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var localDensity = tmp_0;
    var annotatedString = AnnotatedString_init_$Create$(this.zbt_1);
    if (this.ibu_1 == null)
      return null;
    if (this.mbu_1 == null)
      return null;
    // Inline function 'androidx.compose.ui.unit.Constraints.copyMaxDimensions' call
    var this_0 = this.obu_1;
    var finalConstraints = _Constraints___init__impl__v8ud31(bitwiseAnd(_Constraints___get_value__impl__3ah2ax(this_0), new Long(3, -2)));
    return new TextLayoutResult(TextLayoutInput_init_$Create$(annotatedString, style, emptyList(), this.ebu_1, this.dbu_1, this.cbu_1, localDensity, localLayoutDirection, this.bbu_1, finalConstraints), new MultiParagraph(new MultiParagraphIntrinsics(annotatedString, style, emptyList(), localDensity, this.bbu_1), finalConstraints, this.ebu_1, this.cbu_1), this.kbu_1);
  };
  protoOf(ParagraphLayoutCache).toString = function () {
    return 'ParagraphLayoutCache(paragraph=' + (!(this.ibu_1 == null) ? '<paragraph>' : 'null') + ', ' + ('lastDensity=' + InlineDensity__toString_impl_9jhvwu(this.gbu_1) + ', history=' + this.rbu_1.toString() + ', constraints=$)');
  };
  function _LayoutCacheOperation___init__impl__wyxjqq(flag) {
    return flag;
  }
  function _LayoutCacheOperation___get_flag__impl__t7gghn($this) {
    return $this;
  }
  function Companion_1() {
    Companion_instance_5 = this;
    this.nbt_1 = _LayoutCacheOperation___init__impl__wyxjqq(new Long(0, 0));
    this.obt_1 = _LayoutCacheOperation___init__impl__wyxjqq(new Long(1, 0));
    this.pbt_1 = _LayoutCacheOperation___init__impl__wyxjqq(new Long(2, 0));
    this.qbt_1 = _LayoutCacheOperation___init__impl__wyxjqq(new Long(3, 0));
  }
  var Companion_instance_5;
  function Companion_getInstance_37() {
    if (Companion_instance_5 == null)
      new Companion_1();
    return Companion_instance_5;
  }
  var androidx_compose_foundation_text_modifiers_SelectableTextAnnotatedStringElement$stable;
  function SelectableTextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color, autoSize) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    autoSize = autoSize === VOID ? null : autoSize;
    ModifierNodeElement.call(this);
    this.xbu_1 = text;
    this.ybu_1 = style;
    this.zbu_1 = fontFamilyResolver;
    this.abv_1 = onTextLayout;
    this.bbv_1 = overflow;
    this.cbv_1 = softWrap;
    this.dbv_1 = maxLines;
    this.ebv_1 = minLines;
    this.fbv_1 = placeholders;
    this.gbv_1 = onPlaceholderLayout;
    this.hbv_1 = selectionController;
    this.ibv_1 = color;
    this.jbv_1 = autoSize;
  }
  protoOf(SelectableTextAnnotatedStringElement).f2b = function () {
    return new SelectableTextAnnotatedStringNode(this.xbu_1, this.ybu_1, this.zbu_1, this.abv_1, this.bbv_1, this.cbv_1, this.dbv_1, this.ebv_1, this.fbv_1, this.gbv_1, this.hbv_1, this.ibv_1, this.jbv_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).kbv = function (node) {
    node.ebw(this.xbu_1, this.ybu_1, this.fbv_1, this.ebv_1, this.dbv_1, this.cbv_1, this.zbu_1, this.bbv_1, this.abv_1, this.gbv_1, this.hbv_1, this.ibv_1, this.jbv_1);
  };
  protoOf(SelectableTextAnnotatedStringElement).h6s = function (node) {
    return this.kbv(node instanceof SelectableTextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(SelectableTextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SelectableTextAnnotatedStringElement))
      return false;
    if (!equals(this.ibv_1, other.ibv_1))
      return false;
    if (!this.xbu_1.equals(other.xbu_1))
      return false;
    if (!this.ybu_1.equals(other.ybu_1))
      return false;
    if (!equals(this.fbv_1, other.fbv_1))
      return false;
    if (!equals(this.zbu_1, other.zbu_1))
      return false;
    if (!equals(this.jbv_1, other.jbv_1))
      return false;
    if (!(this.abv_1 === other.abv_1))
      return false;
    if (!(this.bbv_1 === other.bbv_1))
      return false;
    if (!(this.cbv_1 === other.cbv_1))
      return false;
    if (!(this.dbv_1 === other.dbv_1))
      return false;
    if (!(this.ebv_1 === other.ebv_1))
      return false;
    if (!(this.gbv_1 === other.gbv_1))
      return false;
    if (!equals(this.hbv_1, other.hbv_1))
      return false;
    return true;
  };
  protoOf(SelectableTextAnnotatedStringElement).hashCode = function () {
    var result = this.xbu_1.hashCode();
    result = imul(31, result) + this.ybu_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.zbu_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.abv_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.bbv_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.cbv_1) | 0;
    result = imul(31, result) + this.dbv_1 | 0;
    result = imul(31, result) + this.ebv_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.fbv_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.gbv_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.hbv_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.jbv_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : tmp8_safe_receiver.hashCode();
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp10_safe_receiver = this.ibv_1;
    var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : hashCode(tmp10_safe_receiver);
    result = tmp_4 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    return result;
  };
  var androidx_compose_foundation_text_modifiers_SelectableTextAnnotatedStringNode$stable;
  function SelectableTextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor, autoSize, onShowTranslation) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    autoSize = autoSize === VOID ? null : autoSize;
    onShowTranslation = onShowTranslation === VOID ? null : onShowTranslation;
    DelegatingNode.call(this);
    this.bbw_1 = selectionController;
    this.cbw_1 = onShowTranslation;
    this.dbw_1 = this.t84(new TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, this.bbw_1, overrideColor, autoSize, this.cbw_1));
    // Inline function 'androidx.compose.foundation.internal.requirePreconditionNotNull' call
    if (this.bbw_1 == null) {
      var tmp$ret$1 = 'Do not use SelectionCapableStaticTextModifier unless selectionController != null';
      throwIllegalArgumentExceptionForNullCheck(tmp$ret$1);
    }
  }
  protoOf(SelectableTextAnnotatedStringNode).c6k = function () {
    return false;
  };
  protoOf(SelectableTextAnnotatedStringNode).z7t = function (coordinates) {
    var tmp0_safe_receiver = this.bbw_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.fbw(coordinates);
    }
  };
  protoOf(SelectableTextAnnotatedStringNode).d6o = function (_this__u8e3s4) {
    return this.dbw_1.mbx(_this__u8e3s4);
  };
  protoOf(SelectableTextAnnotatedStringNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    return this.dbw_1.nbx(_this__u8e3s4, measurable, constraints);
  };
  protoOf(SelectableTextAnnotatedStringNode).ebw = function (text, style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, onTextLayout, onPlaceholderLayout, selectionController, color, autoSize) {
    this.dbw_1.sbx(this.dbw_1.obx(color, style), this.dbw_1.pbx(text), this.dbw_1.qbx(style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, autoSize), this.dbw_1.rbx(onTextLayout, onPlaceholderLayout, selectionController, this.cbw_1));
    this.bbw_1 = selectionController;
    invalidateMeasurement(this);
  };
  var androidx_compose_foundation_text_modifiers_StaticTextSelectionParams$stable;
  var androidx_compose_foundation_text_modifiers_SelectionController$stable;
  function SelectionController$modifier$lambda(this$0) {
    return function () {
      return this$0.dbs_1.tbx_1;
    };
  }
  function SelectionController$onRemembered$lambda(this$0) {
    return function () {
      return this$0.dbs_1.tbx_1;
    };
  }
  function SelectionController$onRemembered$lambda_0(this$0) {
    return function () {
      return this$0.dbs_1.ubx_1;
    };
  }
  function SelectionController(selectableId, selectionRegistrar, backgroundSelectionColor, params) {
    params = params === VOID ? Companion_getInstance_38().vbx_1 : params;
    this.abs_1 = selectableId;
    this.bbs_1 = selectionRegistrar;
    this.cbs_1 = backgroundSelectionColor;
    this.dbs_1 = params;
    this.ebs_1 = null;
    var tmp = this;
    tmp.fbs_1 = pointerHoverIcon(makeSelectionModifier(this.bbs_1, this.abs_1, SelectionController$modifier$lambda(this)), Companion_getInstance_31().q7g_1);
  }
  protoOf(SelectionController).u2c = function () {
    var tmp = this;
    var tmp_0 = SelectionController$onRemembered$lambda(this);
    tmp.ebs_1 = this.bbs_1.wbx(new MultiWidgetSelectionDelegate(this.abs_1, tmp_0, SelectionController$onRemembered$lambda_0(this)));
  };
  protoOf(SelectionController).v2c = function () {
    var localSelectable = this.ebs_1;
    if (!(localSelectable == null)) {
      this.bbs_1.xbx(localSelectable);
      this.ebs_1 = null;
    }
  };
  protoOf(SelectionController).w2c = function () {
    var localSelectable = this.ebs_1;
    if (!(localSelectable == null)) {
      this.bbs_1.xbx(localSelectable);
      this.ebs_1 = null;
    }
  };
  protoOf(SelectionController).ybx = function (textLayoutResult) {
    var prevTextLayoutResult = this.dbs_1.ubx_1;
    if (!(prevTextLayoutResult == null) && !prevTextLayoutResult.i5u_1.u5u_1.equals(textLayoutResult.i5u_1.u5u_1)) {
      this.bbs_1.zbx(this.abs_1);
    }
    this.dbs_1 = this.dbs_1.aby(VOID, textLayoutResult);
  };
  protoOf(SelectionController).fbw = function (coordinates) {
    this.dbs_1 = this.dbs_1.aby(coordinates);
    this.bbs_1.bby(this.abs_1);
  };
  protoOf(SelectionController).cby = function (drawScope) {
    var tmp0_elvis_lhs = this.bbs_1.dby().nk(this.abs_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var selection = tmp;
    var tmp_0;
    if (!selection.jby_1) {
      tmp_0 = selection.hby_1.fby_1;
    } else {
      tmp_0 = selection.iby_1.fby_1;
    }
    var start = tmp_0;
    var tmp_1;
    if (!selection.jby_1) {
      tmp_1 = selection.iby_1.fby_1;
    } else {
      tmp_1 = selection.hby_1.fby_1;
    }
    var end = tmp_1;
    if (start === end)
      return Unit_instance;
    var tmp1_safe_receiver = this.ebs_1;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.kby();
    var lastOffset = tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs;
    var clippedStart = coerceAtMost(start, lastOffset);
    var clippedEnd = coerceAtMost(end, lastOffset);
    var tmp3_elvis_lhs = this.dbs_1.l5n(clippedStart, clippedEnd);
    var tmp_2;
    if (tmp3_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_2 = tmp3_elvis_lhs;
    }
    var selectionPath = tmp_2;
    // Inline function 'kotlin.with' call
    if (this.dbs_1.lby()) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = drawScope.f5a();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var right = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = drawScope.f5a();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var bottom = floatFromBits(bits_0);
      var clipOp = Companion_getInstance_5().v4z_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var $this$with = drawScope.d5b();
      var previousSize = $this$with.f5a();
      $this$with.k4l().m4z();
      try {
        $this$with.x5a().s4z(0.0, 0.0, right, bottom, clipOp);
        drawScope.l5b(selectionPath, this.cbs_1);
      }finally {
        $this$with.k4l().n4z();
        $this$with.w5a(previousSize);
      }
    } else {
      drawScope.l5b(selectionPath, this.cbs_1);
    }
  };
  function Companion_2() {
    Companion_instance_6 = this;
    this.vbx_1 = new StaticTextSelectionParams(null, null);
  }
  var Companion_instance_6;
  function Companion_getInstance_38() {
    if (Companion_instance_6 == null)
      new Companion_2();
    return Companion_instance_6;
  }
  function StaticTextSelectionParams(layoutCoordinates, textLayoutResult) {
    Companion_getInstance_38();
    this.tbx_1 = layoutCoordinates;
    this.ubx_1 = textLayoutResult;
  }
  protoOf(StaticTextSelectionParams).l5n = function (start, end) {
    var tmp0_safe_receiver = this.ubx_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l5n(start, end);
  };
  protoOf(StaticTextSelectionParams).lby = function () {
    var tmp0_safe_receiver = this.ubx_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = (!(tmp0_safe_receiver.i5u_1.z5u_1 === Companion_getInstance_30().p5n_1) && tmp0_safe_receiver.q5u());
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(StaticTextSelectionParams).mby = function (layoutCoordinates, textLayoutResult) {
    return new StaticTextSelectionParams(layoutCoordinates, textLayoutResult);
  };
  protoOf(StaticTextSelectionParams).aby = function (layoutCoordinates, textLayoutResult, $super) {
    layoutCoordinates = layoutCoordinates === VOID ? this.tbx_1 : layoutCoordinates;
    textLayoutResult = textLayoutResult === VOID ? this.ubx_1 : textLayoutResult;
    return $super === VOID ? this.mby(layoutCoordinates, textLayoutResult) : $super.mby.call(this, layoutCoordinates, textLayoutResult);
  };
  var androidx_compose_foundation_text_modifiers_TextAnnotatedStringElement$stable;
  function TextAnnotatedStringElement(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, color, autoSize, onShowTranslation) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    color = color === VOID ? null : color;
    autoSize = autoSize === VOID ? null : autoSize;
    onShowTranslation = onShowTranslation === VOID ? null : onShowTranslation;
    ModifierNodeElement.call(this);
    this.oby_1 = text;
    this.pby_1 = style;
    this.qby_1 = fontFamilyResolver;
    this.rby_1 = onTextLayout;
    this.sby_1 = overflow;
    this.tby_1 = softWrap;
    this.uby_1 = maxLines;
    this.vby_1 = minLines;
    this.wby_1 = placeholders;
    this.xby_1 = onPlaceholderLayout;
    this.yby_1 = selectionController;
    this.zby_1 = color;
    this.abz_1 = autoSize;
    this.bbz_1 = onShowTranslation;
  }
  protoOf(TextAnnotatedStringElement).f2b = function () {
    return new TextAnnotatedStringNode(this.oby_1, this.pby_1, this.qby_1, this.rby_1, this.sby_1, this.tby_1, this.uby_1, this.vby_1, this.wby_1, this.xby_1, this.yby_1, this.zby_1, this.abz_1, this.bbz_1);
  };
  protoOf(TextAnnotatedStringElement).cbz = function (node) {
    node.sbx(node.obx(this.zby_1, this.pby_1), node.pbx(this.oby_1), node.qbx(this.pby_1, this.wby_1, this.vby_1, this.uby_1, this.tby_1, this.qby_1, this.sby_1, this.abz_1), node.rbx(this.rby_1, this.xby_1, this.yby_1, this.bbz_1));
  };
  protoOf(TextAnnotatedStringElement).h6s = function (node) {
    return this.cbz(node instanceof TextAnnotatedStringNode ? node : THROW_CCE());
  };
  protoOf(TextAnnotatedStringElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextAnnotatedStringElement))
      return false;
    if (!equals(this.zby_1, other.zby_1))
      return false;
    if (!this.oby_1.equals(other.oby_1))
      return false;
    if (!this.pby_1.equals(other.pby_1))
      return false;
    if (!equals(this.wby_1, other.wby_1))
      return false;
    if (!equals(this.qby_1, other.qby_1))
      return false;
    if (!(this.rby_1 === other.rby_1))
      return false;
    if (!(this.bbz_1 === other.bbz_1))
      return false;
    if (!(this.sby_1 === other.sby_1))
      return false;
    if (!(this.tby_1 === other.tby_1))
      return false;
    if (!(this.uby_1 === other.uby_1))
      return false;
    if (!(this.vby_1 === other.vby_1))
      return false;
    if (!(this.xby_1 === other.xby_1))
      return false;
    if (!equals(this.yby_1, other.yby_1))
      return false;
    return true;
  };
  protoOf(TextAnnotatedStringElement).hashCode = function () {
    var result = this.oby_1.hashCode();
    result = imul(31, result) + this.pby_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.qby_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.rby_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.sby_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.tby_1) | 0;
    result = imul(31, result) + this.uby_1 | 0;
    result = imul(31, result) + this.vby_1 | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.wby_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.xby_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : hashCode(tmp4_safe_receiver);
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.yby_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_3 = imul(31, result);
    var tmp8_safe_receiver = this.zby_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : hashCode(tmp8_safe_receiver);
    result = tmp_3 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp10_safe_receiver = this.bbz_1;
    var tmp11_elvis_lhs = tmp10_safe_receiver == null ? null : hashCode(tmp10_safe_receiver);
    result = tmp_4 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    return result;
  };
  var androidx_compose_foundation_text_modifiers_TextAnnotatedStringNode_TextSubstitutionValue$stable;
  var androidx_compose_foundation_text_modifiers_TextAnnotatedStringNode$stable;
  function _get_layoutCache__kch9ev($this) {
    if ($this.jbx_1 == null) {
      $this.jbx_1 = new MultiParagraphLayoutCache($this.ubw_1, $this.vbw_1, $this.wbw_1, $this.ybw_1, $this.zbw_1, $this.abx_1, $this.bbx_1, $this.cbx_1, $this.gbx_1);
    }
    return ensureNotNull($this.jbx_1);
  }
  function getLayoutCache($this, density) {
    var tmp0_safe_receiver = $this.lbx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (tmp0_safe_receiver.fbz_1) {
        var tmp0_safe_receiver_0 = tmp0_safe_receiver.gbz_1;
        if (tmp0_safe_receiver_0 == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.also' call
          tmp0_safe_receiver_0.tbt(density);
          return tmp0_safe_receiver_0;
        }
      }
    }
    // Inline function 'kotlin.also' call
    var this_0 = _get_layoutCache__kch9ev($this);
    this_0.tbt(density);
    return this_0;
  }
  function TextSubstitutionValue(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.dbz_1 = original;
    this.ebz_1 = substitution;
    this.fbz_1 = isShowingSubstitution;
    this.gbz_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue).toString = function () {
    return 'TextSubstitutionValue(original=' + this.dbz_1.toString() + ', substitution=' + this.ebz_1.toString() + ', isShowingSubstitution=' + this.fbz_1 + ', layoutCache=' + toString_0(this.gbz_1) + ')';
  };
  protoOf(TextSubstitutionValue).hashCode = function () {
    var result = this.dbz_1.hashCode();
    result = imul(result, 31) + this.ebz_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.fbz_1) | 0;
    result = imul(result, 31) + (this.gbz_1 == null ? 0 : hashCode(this.gbz_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue))
      return false;
    if (!this.dbz_1.equals(other.dbz_1))
      return false;
    if (!this.ebz_1.equals(other.ebz_1))
      return false;
    if (!(this.fbz_1 === other.fbz_1))
      return false;
    if (!equals(this.gbz_1, other.gbz_1))
      return false;
    return true;
  };
  function setSubstitution($this, updatedText) {
    var currentTextSubstitution = $this.lbx_1;
    if (!(currentTextSubstitution == null)) {
      if (updatedText.equals(currentTextSubstitution.ebz_1)) {
        return false;
      }
      currentTextSubstitution.ebz_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.gbz_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.ybt(updatedText, $this.vbw_1, $this.wbw_1, $this.ybw_1, $this.zbw_1, $this.abx_1, $this.bbx_1, emptyList(), $this.gbx_1);
        tmp = Unit_instance;
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue($this.ubw_1, updatedText);
      var substitutionLayoutCache = new MultiParagraphLayoutCache(updatedText, $this.vbw_1, $this.wbw_1, $this.ybw_1, $this.zbw_1, $this.abx_1, $this.bbx_1, emptyList(), $this.gbx_1);
      substitutionLayoutCache.tbt(_get_layoutCache__kch9ev($this).ebt_1);
      newTextSubstitution.gbz_1 = substitutionLayoutCache;
      $this.lbx_1 = newTextSubstitution;
    }
    return true;
  }
  function invalidateForTranslate($this) {
    invalidateSemantics($this);
    invalidateMeasurement($this);
    invalidateDraw($this);
  }
  function TextAnnotatedStringNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var inputLayout = _get_layoutCache__kch9ev(this$0).vbt();
      var tmp;
      if (inputLayout == null) {
        tmp = null;
      } else {
        var tmp_0 = this$0.vbw_1;
        var tmp1_safe_receiver = this$0.fbx_1;
        var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.s51();
        var tmp_1;
        var tmp_2 = tmp2_elvis_lhs;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = Companion_getInstance().t4x_1;
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        tmp = inputLayout.t5u(TextLayoutInput_init_$Create$(inputLayout.i5u_1.u5u_1, tmp_0.l5v(tmp_1), inputLayout.i5u_1.w5u_1, inputLayout.i5u_1.x5u_1, inputLayout.i5u_1.y5u_1, inputLayout.i5u_1.z5u_1, inputLayout.i5u_1.a5v_1, inputLayout.i5u_1.b5v_1, inputLayout.i5u_1.c5v_1, inputLayout.i5u_1.d5v_1));
      }
      var tmp3_safe_receiver = tmp;
      var tmp_3;
      if (tmp3_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.also' call
        textLayoutResult.g(tmp3_safe_receiver);
        tmp_3 = tmp3_safe_receiver;
      }
      var layout = tmp_3;
      return !(layout == null);
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution(this$0, updatedText);
      invalidateForTranslate(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (this$0.lbx_1 == null) {
        return false;
      }
      var tmp0_safe_receiver = this$0.hbx_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(ensureNotNull(this$0.lbx_1));
      var tmp1_safe_receiver = this$0.lbx_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.fbz_1 = it;
      }
      invalidateForTranslate(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$applySemantics$lambda_2(this$0) {
    return function () {
      this$0.hbz();
      invalidateForTranslate(this$0);
      return true;
    };
  }
  function TextAnnotatedStringNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.q7t($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function TextAnnotatedStringNode(text, style, fontFamilyResolver, onTextLayout, overflow, softWrap, maxLines, minLines, placeholders, onPlaceholderLayout, selectionController, overrideColor, autoSize, onShowTranslation) {
    onTextLayout = onTextLayout === VOID ? null : onTextLayout;
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    placeholders = placeholders === VOID ? null : placeholders;
    onPlaceholderLayout = onPlaceholderLayout === VOID ? null : onPlaceholderLayout;
    selectionController = selectionController === VOID ? null : selectionController;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    autoSize = autoSize === VOID ? null : autoSize;
    onShowTranslation = onShowTranslation === VOID ? null : onShowTranslation;
    Node.call(this);
    this.ubw_1 = text;
    this.vbw_1 = style;
    this.wbw_1 = fontFamilyResolver;
    this.xbw_1 = onTextLayout;
    this.ybw_1 = overflow;
    this.zbw_1 = softWrap;
    this.abx_1 = maxLines;
    this.bbx_1 = minLines;
    this.cbx_1 = placeholders;
    this.dbx_1 = onPlaceholderLayout;
    this.ebx_1 = selectionController;
    this.fbx_1 = overrideColor;
    this.gbx_1 = autoSize;
    this.hbx_1 = onShowTranslation;
    this.ibx_1 = null;
    this.jbx_1 = null;
    this.kbx_1 = null;
    this.lbx_1 = null;
  }
  protoOf(TextAnnotatedStringNode).c6k = function () {
    return false;
  };
  protoOf(TextAnnotatedStringNode).obx = function (color, style) {
    var changed = false;
    if (!equals(color, this.fbx_1)) {
      changed = true;
    }
    this.fbx_1 = color;
    changed = changed || !style.n5w(this.vbw_1);
    return changed;
  };
  protoOf(TextAnnotatedStringNode).pbx = function (text) {
    var charDiff = !(this.ubw_1.u5l_1 === text.u5l_1);
    var annotationDiff = !this.ubw_1.y5l(text);
    var anyDiff = charDiff || annotationDiff;
    if (anyDiff) {
      this.ubw_1 = text;
    }
    if (charDiff) {
      this.hbz();
    }
    return anyDiff;
  };
  protoOf(TextAnnotatedStringNode).qbx = function (style, placeholders, minLines, maxLines, softWrap, fontFamilyResolver, overflow, autoSize) {
    var changed;
    changed = !this.vbw_1.m5w(style);
    this.vbw_1 = style;
    if (!equals(this.cbx_1, placeholders)) {
      this.cbx_1 = placeholders;
      changed = true;
    }
    if (!(this.bbx_1 === minLines)) {
      this.bbx_1 = minLines;
      changed = true;
    }
    if (!(this.abx_1 === maxLines)) {
      this.abx_1 = maxLines;
      changed = true;
    }
    if (!(this.zbw_1 === softWrap)) {
      this.zbw_1 = softWrap;
      changed = true;
    }
    if (!equals(this.wbw_1, fontFamilyResolver)) {
      this.wbw_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.ybw_1 === overflow)) {
      this.ybw_1 = overflow;
      changed = true;
    }
    if (!equals(this.gbx_1, autoSize)) {
      this.gbx_1 = autoSize;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).rbx = function (onTextLayout, onPlaceholderLayout, selectionController, onShowTranslation) {
    var changed = false;
    if (!(this.xbw_1 === onTextLayout)) {
      this.xbw_1 = onTextLayout;
      changed = true;
    }
    if (!(this.dbx_1 === onPlaceholderLayout)) {
      this.dbx_1 = onPlaceholderLayout;
      changed = true;
    }
    if (!equals(this.ebx_1, selectionController)) {
      this.ebx_1 = selectionController;
      changed = true;
    }
    if (!(this.hbx_1 === onShowTranslation)) {
      this.hbx_1 = onShowTranslation;
      changed = true;
    }
    return changed;
  };
  protoOf(TextAnnotatedStringNode).sbx = function (drawChanged, textChanged, layoutChanged, callbacksChanged) {
    if (textChanged || layoutChanged || callbacksChanged) {
      _get_layoutCache__kch9ev(this).ybt(this.ubw_1, this.vbw_1, this.wbw_1, this.ybw_1, this.zbw_1, this.abx_1, this.bbx_1, this.cbx_1, this.gbx_1);
    }
    if (!this.a6k_1) {
      return Unit_instance;
    }
    if (textChanged || (drawChanged && !(this.kbx_1 == null))) {
      invalidateSemantics(this);
    }
    if (textChanged || layoutChanged || callbacksChanged) {
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextAnnotatedStringNode).hbz = function () {
    this.lbx_1 = null;
  };
  protoOf(TextAnnotatedStringNode).h71 = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.kbx_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextAnnotatedStringNode$applySemantics$lambda(this);
      this.kbx_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, this.ubw_1);
    var currentTextSubstitution = this.lbx_1;
    if (!(currentTextSubstitution == null)) {
      set_textSubstitution(_this__u8e3s4, currentTextSubstitution.ebz_1);
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.fbz_1);
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextAnnotatedStringNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextAnnotatedStringNode).nbx = function (measureScope, measurable, constraints) {
    return this.l6s(measureScope, measurable, constraints);
  };
  protoOf(TextAnnotatedStringNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'androidx.compose.ui.util.trace' call
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.wbt(constraints, _this__u8e3s4.z5a());
    var textLayoutResult = layoutCache.ubt();
    textLayoutResult.j5u_1.v5m_1.h5p();
    if (didChangeLayout) {
      invalidateLayer(this);
      var tmp0_safe_receiver = this.xbw_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver(textLayoutResult);
      var tmp1_safe_receiver = this.ebx_1;
      if (tmp1_safe_receiver == null)
        null;
      else {
        tmp1_safe_receiver.ybx(textLayoutResult);
      }
      var tmp2_elvis_lhs = this.ibx_1;
      var cache = tmp2_elvis_lhs == null ? LinkedHashMap_init_$Create$(2) : tmp2_elvis_lhs;
      var tmp2 = get_FirstBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_0 = textLayoutResult.l5u_1;
      var tmp;
      if (isNaN_0(this_0)) {
        tmp = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp = roundToInt(this_0);
      }
      // Inline function 'kotlin.collections.set' call
      var value = tmp;
      cache.y1(tmp2, value);
      var tmp2_0 = get_LastBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_1 = textLayoutResult.m5u_1;
      var tmp_0;
      if (isNaN_0(this_1)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_1);
      }
      // Inline function 'kotlin.collections.set' call
      var value_0 = tmp_0;
      cache.y1(tmp2_0, value_0);
      this.ibx_1 = cache;
    }
    var tmp3_safe_receiver = this.dbx_1;
    if (tmp3_safe_receiver == null)
      null;
    else
      tmp3_safe_receiver(textLayoutResult.n5u_1);
    var tmp_1 = Companion_instance_2;
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_2 = textLayoutResult.k5u_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_2);
    var tmp_2 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_3 = textLayoutResult.k5u_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_2 = _IntSize___get_packedValue__impl__uho7jf(this_3);
    var tmp_3 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_4 = textLayoutResult.k5u_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_3 = _IntSize___get_packedValue__impl__uho7jf(this_4);
    var tmp_4 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_5 = textLayoutResult.k5u_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_4 = _IntSize___get_packedValue__impl__uho7jf(this_5);
    var tmp$ret$14 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var placeable = measurable.m6s(tmp_1.k47(tmp_2, tmp_3, tmp_4, tmp$ret$14));
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_6 = textLayoutResult.k5u_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_5 = _IntSize___get_packedValue__impl__uho7jf(this_6);
    var tmp_5 = convertToInt(shiftRight(value_5, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    var this_7 = textLayoutResult.k5u_1;
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_6 = _IntSize___get_packedValue__impl__uho7jf(this_7);
    var tmp_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    var tmp_7 = ensureNotNull(this.ibx_1);
    return _this__u8e3s4.n7r(tmp_5, tmp_6, tmp_7, TextAnnotatedStringNode$measure$lambda(placeable));
  };
  protoOf(TextAnnotatedStringNode).mbx = function (contentDrawScope) {
    return this.d6o(contentDrawScope);
  };
  protoOf(TextAnnotatedStringNode).d6o = function (_this__u8e3s4) {
    if (!this.a6k_1) {
      return Unit_instance;
    }
    var tmp0_safe_receiver = this.ebx_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.cby(_this__u8e3s4);
    }
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.d5b().k4l();
    var layoutCache = getLayoutCache(this, _this__u8e3s4);
    var textLayoutResult = layoutCache.ubt();
    var localParagraph = textLayoutResult.j5u_1;
    var willClip = textLayoutResult.q5u() && !(this.ybw_1 === Companion_getInstance_30().p5n_1);
    if (willClip) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = textLayoutResult.k5u_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var width = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = textLayoutResult.k5u_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var height = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp = Companion_getInstance_6().e46_1;
      // Inline function 'androidx.compose.ui.geometry.Size' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var v1 = fromInt(toRawBits(width));
      var v2 = fromInt(toRawBits(height));
      var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      var tmp$ret$6 = _Size___init__impl__aywn0g(tmp$ret$7);
      var bounds = Rect(tmp, tmp$ret$6);
      canvas.m4z();
      canvas.t4z(bounds);
    }
    try {
      var tmp0_elvis_lhs = this.vbw_1.b5w();
      var textDecoration = tmp0_elvis_lhs == null ? Companion_getInstance_26().f5u_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = this.vbw_1.c5w();
      var shadow = tmp1_elvis_lhs == null ? Companion_getInstance_32().u54_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = this.vbw_1.d5w();
      var drawStyle = tmp2_elvis_lhs == null ? Fill_getInstance() : tmp2_elvis_lhs;
      var brush = this.vbw_1.l5s();
      if (!(brush == null)) {
        var alpha = this.vbw_1.i4u();
        localParagraph.f5o(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp4_safe_receiver = this.fbx_1;
        var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.s51();
        var tmp_0;
        var tmp_1 = tmp5_elvis_lhs;
        if ((tmp_1 == null ? null : new Color(tmp_1)) == null) {
          tmp_0 = Companion_getInstance().t4x_1;
        } else {
          tmp_0 = tmp5_elvis_lhs;
        }
        var overrideColorVal = tmp_0;
        var tmp_2;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_2 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_2 = this.vbw_1.h4y();
          if (!equals(_Color___get_value__impl__1pls5m(this_2), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
            tmp_2 = this.vbw_1.h4y();
          } else {
            tmp_2 = Companion_getInstance().h4x_1;
          }
        }
        var color = tmp_2;
        localParagraph.d5o(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (willClip) {
        canvas.n4z();
      }
    }
    var tmp_3;
    var tmp6_safe_receiver = this.lbx_1;
    if ((tmp6_safe_receiver == null ? null : tmp6_safe_receiver.fbz_1) === true) {
      tmp_3 = false;
    } else {
      tmp_3 = hasLinks(this.ubw_1);
    }
    var hasLinks_0 = tmp_3;
    var tmp_4;
    if (hasLinks_0) {
      tmp_4 = true;
    } else {
      // Inline function 'kotlin.collections.isNullOrEmpty' call
      var this_3 = this.cbx_1;
      tmp_4 = !(this_3 == null || this_3.n());
    }
    if (tmp_4) {
      _this__u8e3s4.t6s();
    }
  };
  function hasLinks(_this__u8e3s4) {
    return _this__u8e3s4.x5l(0, _this__u8e3s4.a());
  }
  var androidx_compose_foundation_text_modifiers_SimpleTextAutoSizeLayoutScope$stable;
  var androidx_compose_foundation_text_modifiers_TextStringSimpleElement$stable;
  function TextStringSimpleElement(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, color) {
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    color = color === VOID ? null : color;
    ModifierNodeElement.call(this);
    this.jbz_1 = text;
    this.kbz_1 = style;
    this.lbz_1 = fontFamilyResolver;
    this.mbz_1 = overflow;
    this.nbz_1 = softWrap;
    this.obz_1 = maxLines;
    this.pbz_1 = minLines;
    this.qbz_1 = color;
  }
  protoOf(TextStringSimpleElement).f2b = function () {
    return new TextStringSimpleNode(this.jbz_1, this.kbz_1, this.lbz_1, this.mbz_1, this.nbz_1, this.obz_1, this.pbz_1, this.qbz_1);
  };
  protoOf(TextStringSimpleElement).rbz = function (node) {
    node.vc0(node.obx(this.qbz_1, this.kbz_1), node.tc0(this.jbz_1), node.uc0(this.kbz_1, this.pbz_1, this.obz_1, this.nbz_1, this.lbz_1, this.mbz_1));
  };
  protoOf(TextStringSimpleElement).h6s = function (node) {
    return this.rbz(node instanceof TextStringSimpleNode ? node : THROW_CCE());
  };
  protoOf(TextStringSimpleElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStringSimpleElement))
      return false;
    if (!equals(this.qbz_1, other.qbz_1))
      return false;
    if (!(this.jbz_1 === other.jbz_1))
      return false;
    if (!this.kbz_1.equals(other.kbz_1))
      return false;
    if (!equals(this.lbz_1, other.lbz_1))
      return false;
    if (!(this.mbz_1 === other.mbz_1))
      return false;
    if (!(this.nbz_1 === other.nbz_1))
      return false;
    if (!(this.obz_1 === other.obz_1))
      return false;
    if (!(this.pbz_1 === other.pbz_1))
      return false;
    return true;
  };
  protoOf(TextStringSimpleElement).hashCode = function () {
    var result = getStringHashCode(this.jbz_1);
    result = imul(31, result) + this.kbz_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.lbz_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.mbz_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.nbz_1) | 0;
    result = imul(31, result) + this.obz_1 | 0;
    result = imul(31, result) + this.pbz_1 | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.qbz_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  var androidx_compose_foundation_text_modifiers_TextStringSimpleNode_TextSubstitutionValue$stable;
  var androidx_compose_foundation_text_modifiers_TextStringSimpleNode$stable;
  function _get_layoutCache__kch9ev_0($this) {
    var tmp;
    if (ComposeFoundationFlags_instance.jb3_1) {
      var tmp0_elvis_lhs = $this.qc0_1;
      tmp = tmp0_elvis_lhs == null ? $this.hc0_1 : tmp0_elvis_lhs;
    } else {
      tmp = $this.hc0_1;
    }
    var style = tmp;
    if ($this.pc0_1 == null) {
      $this.pc0_1 = new ParagraphLayoutCache($this.gc0_1, style, $this.ic0_1, $this.jc0_1, $this.kc0_1, $this.lc0_1, $this.mc0_1);
    }
    return ensureNotNull($this.pc0_1);
  }
  function getLayoutCacheForMeasure($this, $receiver) {
    if (ComposeFoundationFlags_instance.jb3_1) {
      if (resolveInheritedStyle($this, Companion_getInstance_39().vbr_1)) {
        var tmp0_elvis_lhs = $this.qc0_1;
        var style = tmp0_elvis_lhs == null ? $this.hc0_1 : tmp0_elvis_lhs;
        _get_layoutCache__kch9ev_0($this).ubu($this.gc0_1, style, $this.ic0_1, $this.jc0_1, $this.kc0_1, $this.lc0_1, $this.mc0_1);
      }
    }
    var activeCache = getLayoutCache_0($this);
    activeCache.tbt($receiver);
    return activeCache;
  }
  function resolveInheritedStyle($this, phase) {
    var previousStyle = $this.qc0_1;
    var newInheritedStyle = inheritedTextStyle($this, phase, $this.hc0_1);
    $this.qc0_1 = newInheritedStyle;
    if (previousStyle == null)
      return false;
    return !equals(previousStyle, newInheritedStyle);
  }
  function getLayoutCache_0($this) {
    var tmp0_safe_receiver = $this.sc0_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.yc0_1) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_safe_receiver = tmp;
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.zc0_1;
    return tmp2_elvis_lhs == null ? _get_layoutCache__kch9ev_0($this) : tmp2_elvis_lhs;
  }
  function TextSubstitutionValue_0(original, substitution, isShowingSubstitution, layoutCache) {
    isShowingSubstitution = isShowingSubstitution === VOID ? false : isShowingSubstitution;
    layoutCache = layoutCache === VOID ? null : layoutCache;
    this.wc0_1 = original;
    this.xc0_1 = substitution;
    this.yc0_1 = isShowingSubstitution;
    this.zc0_1 = layoutCache;
  }
  protoOf(TextSubstitutionValue_0).toString = function () {
    return 'TextSubstitution(' + ('layoutCache=' + toString_0(this.zc0_1) + ', isShowingSubstitution=' + this.yc0_1) + ')';
  };
  protoOf(TextSubstitutionValue_0).hashCode = function () {
    var result = getStringHashCode(this.wc0_1);
    result = imul(result, 31) + getStringHashCode(this.xc0_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.yc0_1) | 0;
    result = imul(result, 31) + (this.zc0_1 == null ? 0 : hashCode(this.zc0_1)) | 0;
    return result;
  };
  protoOf(TextSubstitutionValue_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSubstitutionValue_0))
      return false;
    if (!(this.wc0_1 === other.wc0_1))
      return false;
    if (!(this.xc0_1 === other.xc0_1))
      return false;
    if (!(this.yc0_1 === other.yc0_1))
      return false;
    if (!equals(this.zc0_1, other.zc0_1))
      return false;
    return true;
  };
  function setSubstitution_0($this, updatedText) {
    var currentTextSubstitution = $this.sc0_1;
    if (!(currentTextSubstitution == null)) {
      if (updatedText === currentTextSubstitution.xc0_1) {
        return false;
      }
      currentTextSubstitution.xc0_1 = updatedText;
      var tmp0_safe_receiver = currentTextSubstitution.zc0_1;
      var tmp;
      if (tmp0_safe_receiver == null) {
        tmp = null;
      } else {
        tmp0_safe_receiver.ubu(updatedText, $this.hc0_1, $this.ic0_1, $this.jc0_1, $this.kc0_1, $this.lc0_1, $this.mc0_1);
        tmp = Unit_instance;
      }
      if (tmp == null)
        return false;
    } else {
      var newTextSubstitution = new TextSubstitutionValue_0($this.gc0_1, updatedText);
      var substitutionLayoutCache = new ParagraphLayoutCache(updatedText, $this.hc0_1, $this.ic0_1, $this.jc0_1, $this.kc0_1, $this.lc0_1, $this.mc0_1);
      substitutionLayoutCache.tbt(_get_layoutCache__kch9ev_0($this).hbu_1);
      newTextSubstitution.zc0_1 = substitutionLayoutCache;
      $this.sc0_1 = newTextSubstitution;
    }
    return true;
  }
  function clearSubstitution($this) {
    $this.sc0_1 = null;
  }
  function invalidateForTranslate_0($this) {
    invalidateSemantics($this);
    invalidateMeasurement($this);
    invalidateDraw($this);
  }
  function TextStringSimpleNode$applySemantics$lambda(this$0) {
    return function (textLayoutResult) {
      var tmp = _get_layoutCache__kch9ev_0(this$0);
      var tmp_0 = this$0.hc0_1;
      var tmp0_safe_receiver = this$0.nc0_1;
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s51();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
        tmp_1 = Companion_getInstance().t4x_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp2_safe_receiver = tmp.vbu(tmp_0.l5v(tmp_1));
      var tmp_3;
      if (tmp2_safe_receiver == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.also' call
        textLayoutResult.g(tmp2_safe_receiver);
        tmp_3 = tmp2_safe_receiver;
      }
      var layout = tmp_3;
      return !(layout == null);
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_0(this$0) {
    return function (updatedText) {
      setSubstitution_0(this$0, updatedText.u5l_1);
      invalidateForTranslate_0(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_1(this$0) {
    return function (it) {
      var tmp;
      if (this$0.sc0_1 == null) {
        return false;
      }
      var tmp0_safe_receiver = this$0.sc0_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.yc0_1 = it;
      }
      invalidateForTranslate_0(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$applySemantics$lambda_2(this$0) {
    return function () {
      clearSubstitution(this$0);
      invalidateForTranslate_0(this$0);
      return true;
    };
  }
  function TextStringSimpleNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.q7t($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function TextStringSimpleNode(text, style, fontFamilyResolver, overflow, softWrap, maxLines, minLines, overrideColor) {
    overflow = overflow === VOID ? Companion_getInstance_30().n5n_1 : overflow;
    softWrap = softWrap === VOID ? true : softWrap;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    minLines = minLines === VOID ? 1 : minLines;
    overrideColor = overrideColor === VOID ? null : overrideColor;
    Node.call(this);
    this.gc0_1 = text;
    this.hc0_1 = style;
    this.ic0_1 = fontFamilyResolver;
    this.jc0_1 = overflow;
    this.kc0_1 = softWrap;
    this.lc0_1 = maxLines;
    this.mc0_1 = minLines;
    this.nc0_1 = overrideColor;
    this.oc0_1 = null;
    this.pc0_1 = null;
    this.qc0_1 = null;
    this.rc0_1 = null;
    this.sc0_1 = null;
  }
  protoOf(TextStringSimpleNode).c6k = function () {
    return false;
  };
  protoOf(TextStringSimpleNode).obx = function (color, style) {
    var changed = false;
    if (!equals(color, this.nc0_1)) {
      changed = true;
    }
    this.nc0_1 = color;
    changed = changed || !style.n5w(this.hc0_1);
    return changed;
  };
  protoOf(TextStringSimpleNode).tc0 = function (text) {
    if (this.gc0_1 === text)
      return false;
    this.gc0_1 = text;
    clearSubstitution(this);
    return true;
  };
  protoOf(TextStringSimpleNode).uc0 = function (style, minLines, maxLines, softWrap, fontFamilyResolver, overflow) {
    var changed;
    changed = !this.hc0_1.m5w(style);
    this.hc0_1 = style;
    if (!(this.mc0_1 === minLines)) {
      this.mc0_1 = minLines;
      changed = true;
    }
    if (!(this.lc0_1 === maxLines)) {
      this.lc0_1 = maxLines;
      changed = true;
    }
    if (!(this.kc0_1 === softWrap)) {
      this.kc0_1 = softWrap;
      changed = true;
    }
    if (!equals(this.ic0_1, fontFamilyResolver)) {
      this.ic0_1 = fontFamilyResolver;
      changed = true;
    }
    if (!(this.jc0_1 === overflow)) {
      this.jc0_1 = overflow;
      changed = true;
    }
    return changed;
  };
  protoOf(TextStringSimpleNode).vc0 = function (drawChanged, textChanged, layoutChanged) {
    if (drawChanged || textChanged || layoutChanged) {
      this.qc0_1 = null;
    }
    if (textChanged || layoutChanged) {
      _get_layoutCache__kch9ev_0(this).ubu(this.gc0_1, this.hc0_1, this.ic0_1, this.jc0_1, this.kc0_1, this.lc0_1, this.mc0_1);
    }
    if (!this.a6k_1) {
      return Unit_instance;
    }
    if (textChanged || (drawChanged && !(this.rc0_1 == null))) {
      invalidateSemantics(this);
    }
    if (textChanged || layoutChanged) {
      invalidateMeasurement(this);
      invalidateDraw(this);
    }
    if (drawChanged) {
      invalidateDraw(this);
    }
  };
  protoOf(TextStringSimpleNode).h71 = function (_this__u8e3s4) {
    var localSemanticsTextLayoutResult = this.rc0_1;
    if (localSemanticsTextLayoutResult == null) {
      localSemanticsTextLayoutResult = TextStringSimpleNode$applySemantics$lambda(this);
      this.rc0_1 = localSemanticsTextLayoutResult;
    }
    set_text(_this__u8e3s4, AnnotatedString_init_$Create$(this.gc0_1));
    var currentTextSubstitution = this.sc0_1;
    if (!(currentTextSubstitution == null)) {
      set_isShowingTextSubstitution(_this__u8e3s4, currentTextSubstitution.yc0_1);
      set_textSubstitution(_this__u8e3s4, AnnotatedString_init_$Create$(currentTextSubstitution.xc0_1));
    }
    setTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_0(this));
    showTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_1(this));
    clearTextSubstitution(_this__u8e3s4, VOID, TextStringSimpleNode$applySemantics$lambda_2(this));
    getTextLayoutResult(_this__u8e3s4, VOID, localSemanticsTextLayoutResult);
  };
  protoOf(TextStringSimpleNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    // Inline function 'androidx.compose.ui.util.trace' call
    var layoutCache = getLayoutCacheForMeasure(this, _this__u8e3s4);
    var didChangeLayout = layoutCache.wbt(constraints, _this__u8e3s4.z5a());
    layoutCache.sbu();
    var paragraph = ensureNotNull(layoutCache.ibu_1);
    var layoutSize = layoutCache.kbu_1;
    if (didChangeLayout) {
      invalidateLayer(this);
      var cache = this.oc0_1;
      if (cache == null) {
        cache = HashMap_init_$Create$(2);
        this.oc0_1 = cache;
      }
      var tmp0 = cache;
      var tmp2 = get_FirstBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_0 = paragraph.z5n();
      var tmp;
      if (isNaN_0(this_0)) {
        tmp = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp = roundToInt(this_0);
      }
      // Inline function 'kotlin.collections.set' call
      var value = tmp;
      tmp0.y1(tmp2, value);
      var tmp0_0 = cache;
      var tmp2_0 = get_LastBaseline();
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_1 = paragraph.a5o();
      var tmp_0;
      if (isNaN_0(this_1)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_1);
      }
      // Inline function 'kotlin.collections.set' call
      var value_0 = tmp_0;
      tmp0_0.y1(tmp2_0, value_0);
    }
    var tmp_1 = Companion_instance_2;
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_1 = _IntSize___get_packedValue__impl__uho7jf(layoutSize);
    var tmp_2 = convertToInt(shiftRight(value_1, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_2 = _IntSize___get_packedValue__impl__uho7jf(layoutSize);
    var tmp_3 = convertToInt(shiftRight(value_2, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_3 = _IntSize___get_packedValue__impl__uho7jf(layoutSize);
    var tmp_4 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_4 = _IntSize___get_packedValue__impl__uho7jf(layoutSize);
    var tmp$ret$14 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var placeable = measurable.m6s(tmp_1.k47(tmp_2, tmp_3, tmp_4, tmp$ret$14));
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value_5 = _IntSize___get_packedValue__impl__uho7jf(layoutSize);
    var tmp_5 = convertToInt(shiftRight(value_5, 32));
    // Inline function 'androidx.compose.ui.unit.IntSize.height' call
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value_6 = _IntSize___get_packedValue__impl__uho7jf(layoutSize);
    var tmp_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
    var tmp_7 = ensureNotNull(this.oc0_1);
    return _this__u8e3s4.n7r(tmp_5, tmp_6, tmp_7, TextStringSimpleNode$measure$lambda(placeable));
  };
  protoOf(TextStringSimpleNode).d6o = function (_this__u8e3s4) {
    if (!this.a6k_1) {
      return Unit_instance;
    }
    var layoutCache = getLayoutCache_0(this);
    // Inline function 'androidx.compose.foundation.internal.requirePreconditionNotNull' call
    var value = layoutCache.ibu_1;
    if (value == null) {
      var tmp$ret$1 = 'Internal Error: ParagraphLayoutCache could not provide a Paragraph during the draw phase. Please report this bug on the official Issue Tracker with the following diagnostic information: (layoutCache=' + toString_0(this.pc0_1) + ', textSubstitution=' + toString_0(this.sc0_1) + ')';
      throwIllegalArgumentExceptionForNullCheck(tmp$ret$1);
    }
    var localParagraph = value;
    // Inline function 'androidx.compose.ui.graphics.drawscope.drawIntoCanvas' call
    var canvas = _this__u8e3s4.d5b().k4l();
    var willClip = layoutCache.jbu_1;
    if (willClip) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = layoutCache.kbu_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var width = convertToInt(shiftRight(value_0, 32));
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_1 = layoutCache.kbu_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value_1 = _IntSize___get_packedValue__impl__uho7jf(this_1);
      var height = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
      canvas.m4z();
      canvas.w4z(0.0, 0.0, width, height);
    }
    try {
      var tmp;
      if (ComposeFoundationFlags_instance.jb3_1) {
        resolveInheritedStyle(this, Companion_getInstance_39().wbr_1);
        var tmp0_elvis_lhs = this.qc0_1;
        tmp = tmp0_elvis_lhs == null ? this.hc0_1 : tmp0_elvis_lhs;
      } else {
        tmp = this.hc0_1;
      }
      var style = tmp;
      var tmp1_elvis_lhs = style.b5w();
      var textDecoration = tmp1_elvis_lhs == null ? Companion_getInstance_26().f5u_1 : tmp1_elvis_lhs;
      var tmp2_elvis_lhs = style.c5w();
      var shadow = tmp2_elvis_lhs == null ? Companion_getInstance_32().u54_1 : tmp2_elvis_lhs;
      var tmp3_elvis_lhs = style.d5w();
      var drawStyle = tmp3_elvis_lhs == null ? Fill_getInstance() : tmp3_elvis_lhs;
      var brush = style.l5s();
      if (!(brush == null)) {
        var alpha = style.i4u();
        localParagraph.n64(canvas, brush, alpha, shadow, textDecoration, drawStyle);
      } else {
        var tmp5_safe_receiver = this.nc0_1;
        var tmp6_elvis_lhs = tmp5_safe_receiver == null ? null : tmp5_safe_receiver.s51();
        var tmp_0;
        var tmp_1 = tmp6_elvis_lhs;
        if ((tmp_1 == null ? null : new Color(tmp_1)) == null) {
          tmp_0 = Companion_getInstance().t4x_1;
        } else {
          tmp_0 = tmp6_elvis_lhs;
        }
        var overrideColorVal = tmp_0;
        var tmp_2;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(overrideColorVal), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_2 = overrideColorVal;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          var this_2 = style.h4y();
          if (!equals(_Color___get_value__impl__1pls5m(this_2), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
            tmp_2 = style.h4y();
          } else {
            tmp_2 = Companion_getInstance().h4x_1;
          }
        }
        var color = tmp_2;
        localParagraph.m64(canvas, color, shadow, textDecoration, drawStyle);
      }
    }finally {
      if (willClip) {
        canvas.n4z();
      }
    }
  };
  function _StylePhase___init__impl__hlbmkp(value) {
    return value;
  }
  function Companion_3() {
    Companion_instance_7 = this;
    this.vbr_1 = _StylePhase___init__impl__hlbmkp(1);
    this.wbr_1 = _StylePhase___init__impl__hlbmkp(2);
    this.xbr_1 = _StylePhase___init__impl__hlbmkp(-1);
  }
  var Companion_instance_7;
  function Companion_getInstance_39() {
    if (Companion_instance_7 == null)
      new Companion_3();
    return Companion_instance_7;
  }
  function inheritedTextStyle(_this__u8e3s4, phase, fallback) {
    var result = {_v: fallback};
    traverseAncestors(_this__u8e3s4, 'StyleOuterNode', inheritedTextStyle$lambda(result, phase, fallback));
    return result._v;
  }
  function inheritedTextStyle$lambda($result, $phase, $fallback) {
    return function (it) {
      var tmp;
      if (it instanceof StyleOuterNode) {
        $result._v = it.qbr($phase, $fallback);
        tmp = false;
      } else {
        tmp = true;
      }
      return tmp;
    };
  }
  var androidx_compose_foundation_text_selection_MultiWidgetSelectionDelegate$stable;
  function _get_lastVisibleOffset__v7xite($this, $receiver) {
    // Inline function 'androidx.compose.foundation.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    $this.dc1_1;
    if (!($this.ec1_1 === $receiver)) {
      var tmp;
      if (!$receiver.o5u() || $receiver.j5u_1.x5m_1) {
        tmp = $receiver.v5n() - 1 | 0;
      } else {
        // Inline function 'androidx.compose.ui.unit.IntSize.height' call
        var this_0 = $receiver.k5u_1;
        // Inline function 'androidx.compose.ui.util.unpackInt2' call
        var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
        var tmp$ret$3 = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
        var finalVisibleLine = coerceAtMost($receiver.g5o(tmp$ret$3), $receiver.v5n() - 1 | 0);
        $l$loop: while (true) {
          var tmp_0;
          if (finalVisibleLine >= 0) {
            var tmp_1 = $receiver.p5o(finalVisibleLine);
            // Inline function 'androidx.compose.ui.unit.IntSize.height' call
            var this_1 = $receiver.k5u_1;
            // Inline function 'androidx.compose.ui.util.unpackInt2' call
            var value_0 = _IntSize___get_packedValue__impl__uho7jf(this_1);
            tmp_0 = tmp_1 >= convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
          } else {
            tmp_0 = false;
          }
          if (!tmp_0) {
            break $l$loop;
          }
          finalVisibleLine = finalVisibleLine - 1 | 0;
        }
        tmp = coerceAtLeast(finalVisibleLine, 0);
      }
      var lastVisibleLine = tmp;
      $this.fc1_1 = $receiver.t5o(lastVisibleLine, true);
      $this.ec1_1 = $receiver;
    }
    return $this.fc1_1;
  }
  function MultiWidgetSelectionDelegate(selectableId, coordinatesCallback, layoutResultCallback) {
    this.ac1_1 = selectableId;
    this.bc1_1 = coordinatesCallback;
    this.cc1_1 = layoutResultCallback;
    var tmp = this;
    // Inline function 'androidx.compose.foundation.platform.makeSynchronizedObject' call
    tmp.dc1_1 = new SynchronizedObject();
    this.ec1_1 = null;
    this.fc1_1 = -1;
  }
  protoOf(MultiWidgetSelectionDelegate).kby = function () {
    var tmp0_elvis_lhs = this.cc1_1();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var textLayoutResult = tmp;
    return _get_lastVisibleOffset__v7xite(this, textLayoutResult);
  };
  var androidx_compose_foundation_text_selection_Selection_AnchorInfo$stable;
  var androidx_compose_foundation_text_selection_Selection$stable;
  function AnchorInfo(direction, offset, selectableId) {
    this.eby_1 = direction;
    this.fby_1 = offset;
    this.gby_1 = selectableId;
  }
  protoOf(AnchorInfo).gc1 = function (direction, offset, selectableId) {
    return new AnchorInfo(direction, offset, selectableId);
  };
  protoOf(AnchorInfo).hc1 = function (direction, offset, selectableId, $super) {
    direction = direction === VOID ? this.eby_1 : direction;
    offset = offset === VOID ? this.fby_1 : offset;
    selectableId = selectableId === VOID ? this.gby_1 : selectableId;
    return $super === VOID ? this.gc1(direction, offset, selectableId) : $super.gc1.call(this, direction, offset, selectableId);
  };
  protoOf(AnchorInfo).toString = function () {
    return 'AnchorInfo(direction=' + this.eby_1.toString() + ', offset=' + this.fby_1 + ', selectableId=' + this.gby_1.toString() + ')';
  };
  protoOf(AnchorInfo).hashCode = function () {
    var result = this.eby_1.hashCode();
    result = imul(result, 31) + this.fby_1 | 0;
    result = imul(result, 31) + this.gby_1.hashCode() | 0;
    return result;
  };
  protoOf(AnchorInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnchorInfo))
      return false;
    if (!this.eby_1.equals(other.eby_1))
      return false;
    if (!(this.fby_1 === other.fby_1))
      return false;
    if (!equalsLong(this.gby_1, other.gby_1))
      return false;
    return true;
  };
  function Selection(start, end, handlesCrossed) {
    handlesCrossed = handlesCrossed === VOID ? false : handlesCrossed;
    this.hby_1 = start;
    this.iby_1 = end;
    this.jby_1 = handlesCrossed;
  }
  protoOf(Selection).ic1 = function (start, end, handlesCrossed) {
    return new Selection(start, end, handlesCrossed);
  };
  protoOf(Selection).jc1 = function (start, end, handlesCrossed, $super) {
    start = start === VOID ? this.hby_1 : start;
    end = end === VOID ? this.iby_1 : end;
    handlesCrossed = handlesCrossed === VOID ? this.jby_1 : handlesCrossed;
    return $super === VOID ? this.ic1(start, end, handlesCrossed) : $super.ic1.call(this, start, end, handlesCrossed);
  };
  protoOf(Selection).toString = function () {
    return 'Selection(start=' + this.hby_1.toString() + ', end=' + this.iby_1.toString() + ', handlesCrossed=' + this.jby_1 + ')';
  };
  protoOf(Selection).hashCode = function () {
    var result = this.hby_1.hashCode();
    result = imul(result, 31) + this.iby_1.hashCode() | 0;
    result = imul(result, 31) + getBooleanHashCode(this.jby_1) | 0;
    return result;
  };
  protoOf(Selection).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Selection))
      return false;
    if (!this.hby_1.equals(other.hby_1))
      return false;
    if (!this.iby_1.equals(other.iby_1))
      return false;
    if (!(this.jby_1 === other.jby_1))
      return false;
    return true;
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(function_0) {
    this.kc1_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).lc1 = function (layout) {
    return this.kc1_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).r2 = function () {
    return this.kc1_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(function_0) {
    this.mc1_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).lc1 = function (layout) {
    return this.mc1_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).r2 = function () {
    return this.mc1_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(function_0) {
    this.nc1_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).oc1 = function (_this__u8e3s4, offset) {
    return this.nc1_1(_this__u8e3s4, offset).n5o_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).r2 = function () {
    return this.nc1_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundaryFunction) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(function_0) {
    this.pc1_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).lc1 = function (layout) {
    return this.pc1_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).r2 = function () {
    return this.pc1_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(function_0) {
    this.qc1_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).oc1 = function (_this__u8e3s4, offset) {
    return this.qc1_1(_this__u8e3s4, offset).n5o_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).r2 = function () {
    return this.qc1_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, BoundaryFunction) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(function_0) {
    this.rc1_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).lc1 = function (layout) {
    return this.rc1_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).r2 = function () {
    return this.rc1_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2).hashCode = function () {
    return hashCode(this.r2());
  };
  function sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(function_0) {
    this.sc1_1 = function_0;
  }
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).lc1 = function (layout) {
    return this.sc1_1(layout);
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).r2 = function () {
    return this.sc1_1;
  };
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, SelectionAdjustment) : false) {
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
  protoOf(sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3).hashCode = function () {
    return hashCode(this.r2());
  };
  function SelectionAdjustment$Companion$None$lambda(layout) {
    return new Selection(layout.tc1().ac2(layout.tc1().wc1_1), layout.bc2().ac2(layout.bc2().xc1_1), layout.cc2().equals(CrossStatus_CROSSED_getInstance()));
  }
  function SelectionAdjustment$Companion$Character$lambda(layout) {
    return ensureAtLeastOneChar(Companion_getInstance_40().dc2_1.lc1(layout), layout);
  }
  function SelectionAdjustment$Companion$Word$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Word$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0(tmp));
  }
  function SelectionAdjustment$Companion$Word$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0($this$adjustToBoundaries.zc1_1.l5o(it));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda(layout) {
    var tmp = SelectionAdjustment$Companion$Paragraph$lambda$lambda;
    return adjustToBoundaries(layout, new sam$androidx_compose_foundation_text_selection_BoundaryFunction$0_0(tmp));
  }
  function SelectionAdjustment$Companion$Paragraph$lambda$lambda($this$adjustToBoundaries, it) {
    return new TextRange_0(getParagraphBoundary($this$adjustToBoundaries.ic2(), it));
  }
  function SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda(layout) {
    var tmp0_elvis_lhs = layout.jc2();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Companion_getInstance_40().fc2_1.lc1(layout);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var previousSelection = tmp;
    var previousAnchor;
    var newAnchor;
    var startAnchor;
    var endAnchor;
    if (layout.kc2()) {
      previousAnchor = previousSelection.hby_1;
      newAnchor = updateSelectionBoundary(layout, layout.tc1(), previousAnchor);
      startAnchor = newAnchor;
      endAnchor = previousSelection.iby_1;
    } else {
      previousAnchor = previousSelection.iby_1;
      newAnchor = updateSelectionBoundary(layout, layout.bc2(), previousAnchor);
      startAnchor = previousSelection.hby_1;
      endAnchor = newAnchor;
    }
    var tmp_0;
    if (newAnchor.equals(previousAnchor)) {
      tmp_0 = previousSelection;
    } else {
      var crossed = layout.cc2().equals(CrossStatus_CROSSED_getInstance()) || (layout.cc2().equals(CrossStatus_COLLAPSED_getInstance()) && startAnchor.fby_1 > endAnchor.fby_1);
      tmp_0 = ensureAtLeastOneChar(new Selection(startAnchor, endAnchor, crossed), layout);
    }
    return tmp_0;
  }
  function Companion_4() {
    Companion_instance_8 = this;
    var tmp = this;
    var tmp_0 = SelectionAdjustment$Companion$None$lambda;
    tmp.dc2_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0(tmp_0);
    var tmp_1 = this;
    var tmp_2 = SelectionAdjustment$Companion$Character$lambda;
    tmp_1.ec2_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_0(tmp_2);
    var tmp_3 = this;
    var tmp_4 = SelectionAdjustment$Companion$Word$lambda;
    tmp_3.fc2_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_1(tmp_4);
    var tmp_5 = this;
    var tmp_6 = SelectionAdjustment$Companion$Paragraph$lambda;
    tmp_5.gc2_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_2(tmp_6);
    var tmp_7 = this;
    var tmp_8 = SelectionAdjustment$Companion$CharacterWithWordAccelerate$lambda;
    tmp_7.hc2_1 = new sam$androidx_compose_foundation_text_selection_SelectionAdjustment$0_3(tmp_8);
  }
  var Companion_instance_8;
  function Companion_getInstance_40() {
    if (Companion_instance_8 == null)
      new Companion_4();
    return Companion_instance_8;
  }
  function SelectionAdjustment() {
  }
  function ensureAtLeastOneChar(_this__u8e3s4, layout) {
    if (!isCollapsed(_this__u8e3s4, layout)) {
      return _this__u8e3s4;
    }
    var text = layout.lc2().ic2();
    var tmp;
    if (layout.l() > 1 || layout.jc2() == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.text.isEmpty' call
      tmp = charSequenceLength(text) === 0;
    }
    if (tmp) {
      return _this__u8e3s4;
    }
    return expandOneChar(_this__u8e3s4, layout);
  }
  function adjustToBoundaries(layout, boundaryFunction) {
    var crossed = layout.cc2().equals(CrossStatus_CROSSED_getInstance());
    return new Selection(anchorOnBoundary(layout.tc1(), crossed, true, layout.mc2(), boundaryFunction), anchorOnBoundary(layout.bc2(), crossed, false, layout.nc2(), boundaryFunction), crossed);
  }
  function BoundaryFunction() {
  }
  function updateSelectionBoundary(_this__u8e3s4, info, previousSelectionAnchor) {
    var currentRawOffset = _this__u8e3s4.kc2() ? info.wc1_1 : info.xc1_1;
    var currentSlot = _this__u8e3s4.kc2() ? _this__u8e3s4.mc2() : _this__u8e3s4.nc2();
    if (!(currentSlot === info.vc1_1)) {
      return info.ac2(currentRawOffset);
    }
    var tmp = LazyThreadSafetyMode_NONE_getInstance();
    var currentRawLine$delegate = lazy(tmp, updateSelectionBoundary$lambda_0(info, currentRawOffset));
    var otherRawOffset = _this__u8e3s4.kc2() ? info.xc1_1 : info.wc1_1;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    var anchorSnappedToWordBoundary$delegate = lazy(tmp_0, updateSelectionBoundary$lambda_2(info, currentRawOffset, otherRawOffset, _this__u8e3s4, currentRawLine$delegate));
    if (!equalsLong(info.uc1_1, previousSelectionAnchor.gby_1)) {
      return updateSelectionBoundary$lambda_1(anchorSnappedToWordBoundary$delegate);
    }
    var rawPreviousHandleOffset = info.yc1_1;
    if (currentRawOffset === rawPreviousHandleOffset) {
      return previousSelectionAnchor;
    }
    var previousRawLine = info.zc1_1.o5o(rawPreviousHandleOffset);
    if (!(updateSelectionBoundary$lambda(currentRawLine$delegate) === previousRawLine)) {
      return updateSelectionBoundary$lambda_1(anchorSnappedToWordBoundary$delegate);
    }
    var previousSelectionOffset = previousSelectionAnchor.fby_1;
    var previousSelectionWordBoundary = info.zc1_1.l5o(previousSelectionOffset);
    if (!isExpanding(info, currentRawOffset, _this__u8e3s4.kc2())) {
      return info.ac2(currentRawOffset);
    }
    if (previousSelectionOffset === _TextRange___get_start__impl__ww4t90(previousSelectionWordBoundary) || previousSelectionOffset === _TextRange___get_end__impl__gcdxpp(previousSelectionWordBoundary)) {
      return updateSelectionBoundary$lambda_1(anchorSnappedToWordBoundary$delegate);
    }
    return info.ac2(currentRawOffset);
  }
  function expandOneChar(_this__u8e3s4, layout) {
    var info = layout.lc2();
    var text = info.ic2();
    var offset = info.wc1_1;
    var lastOffset = text.length;
    var tmp;
    if (offset === 0) {
      var followingBreak = findFollowingBreak(text, 0);
      var tmp_0;
      if (layout.kc2()) {
        tmp_0 = _this__u8e3s4.jc1(changeOffset(_this__u8e3s4.hby_1, info, followingBreak), VOID, true);
      } else {
        tmp_0 = _this__u8e3s4.jc1(VOID, changeOffset(_this__u8e3s4.iby_1, info, followingBreak), false);
      }
      tmp = tmp_0;
    } else if (offset === lastOffset) {
      var precedingBreak = findPrecedingBreak(text, lastOffset);
      var tmp_1;
      if (layout.kc2()) {
        tmp_1 = _this__u8e3s4.jc1(changeOffset(_this__u8e3s4.hby_1, info, precedingBreak), VOID, false);
      } else {
        tmp_1 = _this__u8e3s4.jc1(VOID, changeOffset(_this__u8e3s4.iby_1, info, precedingBreak), true);
      }
      tmp = tmp_1;
    } else {
      var tmp1_safe_receiver = layout.jc2();
      var crossed = (tmp1_safe_receiver == null ? null : tmp1_safe_receiver.jby_1) === true;
      var tmp_2;
      if (!!(layout.kc2() ^ crossed)) {
        tmp_2 = findPrecedingBreak(text, offset);
      } else {
        tmp_2 = findFollowingBreak(text, offset);
      }
      var newOffset = tmp_2;
      var tmp_3;
      if (layout.kc2()) {
        tmp_3 = _this__u8e3s4.jc1(changeOffset(_this__u8e3s4.hby_1, info, newOffset), VOID, crossed);
      } else {
        tmp_3 = _this__u8e3s4.jc1(VOID, changeOffset(_this__u8e3s4.iby_1, info, newOffset), crossed);
      }
      tmp = tmp_3;
    }
    return tmp;
  }
  function anchorOnBoundary(_this__u8e3s4, crossed, isStart, slot, boundaryFunction) {
    var offset = isStart ? _this__u8e3s4.wc1_1 : _this__u8e3s4.xc1_1;
    if (!(slot === _this__u8e3s4.vc1_1)) {
      return _this__u8e3s4.ac2(offset);
    }
    // Inline function 'kotlin.with' call
    var range = boundaryFunction.oc1(_this__u8e3s4, offset);
    return _this__u8e3s4.ac2(!!(isStart ^ crossed) ? _TextRange___get_start__impl__ww4t90(range) : _TextRange___get_end__impl__gcdxpp(range));
  }
  function snapToWordBoundary(_this__u8e3s4, currentLine, currentOffset, otherOffset, isStart, crossed) {
    var wordBoundary = _this__u8e3s4.zc1_1.l5o(currentOffset);
    var wordStartLine = _this__u8e3s4.zc1_1.o5o(_TextRange___get_start__impl__ww4t90(wordBoundary));
    var tmp;
    if (wordStartLine === currentLine) {
      tmp = _TextRange___get_start__impl__ww4t90(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.zc1_1.v5n()) {
      tmp = _this__u8e3s4.zc1_1.r5o(_this__u8e3s4.zc1_1.v5n() - 1 | 0);
    } else {
      tmp = _this__u8e3s4.zc1_1.r5o(currentLine);
    }
    var start = tmp;
    var wordEndLine = _this__u8e3s4.zc1_1.o5o(_TextRange___get_end__impl__gcdxpp(wordBoundary));
    var tmp_0;
    if (wordEndLine === currentLine) {
      tmp_0 = _TextRange___get_end__impl__gcdxpp(wordBoundary);
    } else if (currentLine >= _this__u8e3s4.zc1_1.v5n()) {
      tmp_0 = _this__u8e3s4.zc1_1.r5u(_this__u8e3s4.zc1_1.v5n() - 1 | 0);
    } else {
      tmp_0 = _this__u8e3s4.zc1_1.r5u(currentLine);
    }
    var end = tmp_0;
    if (start === otherOffset) {
      return _this__u8e3s4.ac2(end);
    }
    if (end === otherOffset) {
      return _this__u8e3s4.ac2(start);
    }
    var tmp_1;
    if (!!(isStart ^ crossed)) {
      tmp_1 = currentOffset <= end ? start : end;
    } else {
      tmp_1 = currentOffset >= start ? end : start;
    }
    var resultOffset = tmp_1;
    return _this__u8e3s4.ac2(resultOffset);
  }
  function isExpanding(_this__u8e3s4, currentRawOffset, isStart) {
    if (_this__u8e3s4.yc1_1 === -1) {
      return true;
    }
    if (currentRawOffset === _this__u8e3s4.yc1_1) {
      return false;
    }
    var crossed = _this__u8e3s4.oc2().equals(CrossStatus_CROSSED_getInstance());
    var tmp;
    if (!!(isStart ^ crossed)) {
      tmp = currentRawOffset < _this__u8e3s4.yc1_1;
    } else {
      tmp = currentRawOffset > _this__u8e3s4.yc1_1;
    }
    return tmp;
  }
  function changeOffset(_this__u8e3s4, info, newOffset) {
    var tmp0_direction = info.zc1_1.k5o(newOffset);
    return _this__u8e3s4.hc1(tmp0_direction, newOffset);
  }
  function updateSelectionBoundary$lambda($currentRawLine$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('currentRawLine', KProperty0, false);
    return $currentRawLine$delegate.r1();
  }
  function updateSelectionBoundary$lambda_0($info, $currentRawOffset) {
    return function () {
      return $info.zc1_1.o5o($currentRawOffset);
    };
  }
  function updateSelectionBoundary$lambda_1($anchorSnappedToWordBoundary$delegate) {
    // Inline function 'kotlin.getValue' call
    getLocalDelegateReference('anchorSnappedToWordBoundary', KProperty0, false);
    return $anchorSnappedToWordBoundary$delegate.r1();
  }
  function updateSelectionBoundary$lambda_2($info, $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary, $currentRawLine$delegate) {
    return function () {
      return snapToWordBoundary($info, updateSelectionBoundary$lambda($currentRawLine$delegate), $currentRawOffset, $otherRawOffset, $this_updateSelectionBoundary.kc2(), $this_updateSelectionBoundary.cc2().equals(CrossStatus_CROSSED_getInstance()));
    };
  }
  var androidx_compose_foundation_text_selection_ClicksCounter$stable;
  function awaitSelectionGestures(_this__u8e3s4, mouseSelectionObserver, textDragObserver, $completion) {
    var clicksCounter = new ClicksCounter(_this__u8e3s4.a7k());
    return awaitEachGesture(_this__u8e3s4, awaitSelectionGestures$slambda_0(clicksCounter, mouseSelectionObserver, textDragObserver, null), $completion);
  }
  function ClicksCounter(viewConfiguration) {
    this.pc2_1 = viewConfiguration;
    this.qc2_1 = 0;
    this.rc2_1 = null;
  }
  protoOf(ClicksCounter).sc2 = function (event) {
    var currentPrevEvent = this.rc2_1;
    if (!(currentPrevEvent == null) && this.tc2(currentPrevEvent, event) && this.uc2(currentPrevEvent, event)) {
      this.qc2_1 = this.qc2_1 + 1 | 0;
    } else {
      this.qc2_1 = 1;
    }
    this.rc2_1 = event;
  };
  protoOf(ClicksCounter).tc2 = function (prevClick, newClick) {
    return compare(subtract(newClick.x7d_1, prevClick.x7d_1), this.pc2_1.y8b()) < 0;
  };
  protoOf(ClicksCounter).uc2 = function (prevClick, newClick) {
    return distanceIsTolerable(this.pc2_1, prevClick, newClick);
  };
  function awaitDown(_this__u8e3s4, $completion) {
    var tmp = new $awaitDownCOROUTINE$(_this__u8e3s4, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function mouseSelection(_this__u8e3s4, observer, clicksCounter, down, $completion) {
    var tmp = new $mouseSelectionCOROUTINE$(_this__u8e3s4, observer, clicksCounter, down, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function touchSelectionFirstPress(_this__u8e3s4, observer, downEvent, $completion) {
    var tmp = new $touchSelectionFirstPressCOROUTINE$(_this__u8e3s4, observer, downEvent, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function touchSelectionSubsequentPress(_this__u8e3s4, observer, downEvent, clicks, $completion) {
    var tmp = new $touchSelectionSubsequentPressCOROUTINE$(_this__u8e3s4, observer, downEvent, clicks, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function distanceIsTolerable(viewConfiguration, change1, change2) {
    var slop = pointerSlop(viewConfiguration, change1.e7e_1);
    return Offset__getDistance_impl_pclvxn(Offset__minus_impl_hoj2c0(change1.y7d_1, change2.y7d_1)) < slop;
  }
  var DownResolution_Up_instance;
  var DownResolution_Drag_instance;
  var DownResolution_Timeout_instance;
  var DownResolution_Cancel_instance;
  var DownResolution_entriesInitialized;
  function DownResolution_initEntries() {
    if (DownResolution_entriesInitialized)
      return Unit_instance;
    DownResolution_entriesInitialized = true;
    DownResolution_Up_instance = new DownResolution('Up', 0);
    DownResolution_Drag_instance = new DownResolution('Drag', 1);
    DownResolution_Timeout_instance = new DownResolution('Timeout', 2);
    DownResolution_Cancel_instance = new DownResolution('Cancel', 3);
  }
  function DownResolution(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function awaitSelectionGestures$slambda($clicksCounter, $mouseSelectionObserver, $textDragObserver, resultContinuation) {
    this.cc5_1 = $clicksCounter;
    this.dc5_1 = $mouseSelectionObserver;
    this.ec5_1 = $textDragObserver;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(awaitSelectionGestures$slambda).abl = function ($this$awaitEachGesture, $completion) {
    var tmp = this.bbl($this$awaitEachGesture, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(awaitSelectionGestures$slambda).d9 = function (p1, $completion) {
    return this.abl((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(awaitSelectionGestures$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 7;
            this.l8_1 = 1;
            suspendResult = awaitDown(this.fc5_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var downEvent = suspendResult;
            this.cc5_1.sc2(downEvent.q7d_1.m(0));
            var isPrecise = isMouseOrTouchPad(downEvent);
            var tmp_0;
            if (isPrecise && get_isPrimaryPressed(downEvent.r7d_1)) {
              var tmp0 = downEvent.q7d_1;
              var tmp$ret$0;
              l$ret$1: do {
                var inductionVariable = 0;
                var last = tmp0.l() - 1 | 0;
                if (inductionVariable <= last)
                  do {
                    var index = inductionVariable;
                    inductionVariable = inductionVariable + 1 | 0;
                    var item = tmp0.m(index);
                    if (!!item.e7g()) {
                      tmp$ret$0 = false;
                      break l$ret$1;
                    }
                  }
                   while (inductionVariable <= last);
                tmp$ret$0 = true;
              }
               while (false);
              tmp_0 = tmp$ret$0;
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              this.l8_1 = 5;
              suspendResult = mouseSelection(this.fc5_1, this.dc5_1, this.cc5_1, downEvent, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!isPrecise) {
                if (this.cc5_1.qc2_1 === 1) {
                  this.l8_1 = 3;
                  suspendResult = touchSelectionFirstPress(this.fc5_1, this.ec5_1, downEvent, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.l8_1 = 2;
                  suspendResult = touchSelectionSubsequentPress(this.fc5_1, this.ec5_1, downEvent, this.cc5_1.qc2_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                }
              } else {
                this.l8_1 = 6;
                continue $sm;
              }
            }

          case 2:
            this.l8_1 = 4;
            continue $sm;
          case 3:
            this.l8_1 = 4;
            continue $sm;
          case 4:
            this.l8_1 = 6;
            continue $sm;
          case 5:
            this.l8_1 = 6;
            continue $sm;
          case 6:
            return Unit_instance;
          case 7:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 7) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(awaitSelectionGestures$slambda).bbl = function ($this$awaitEachGesture, completion) {
    var i = new awaitSelectionGestures$slambda(this.cc5_1, this.dc5_1, this.ec5_1, completion);
    i.fc5_1 = $this$awaitEachGesture;
    return i;
  };
  function awaitSelectionGestures$slambda_0($clicksCounter, $mouseSelectionObserver, $textDragObserver, resultContinuation) {
    var i = new awaitSelectionGestures$slambda($clicksCounter, $mouseSelectionObserver, $textDragObserver, resultContinuation);
    return constructCallableReference(function ($this$awaitEachGesture, $completion) {
      return i.abl($this$awaitEachGesture, $completion);
    }, 1);
  }
  function mouseSelection$lambda($observer) {
    return function (it) {
      var tmp;
      if ($observer.gc5(it.y7d_1)) {
        it.f7g();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function mouseSelection$lambda_0($observer, $selectionAdjustment, $dragConsumed) {
    return function (it) {
      var tmp;
      if ($observer.hc5(it.y7d_1, $selectionAdjustment)) {
        it.f7g();
        $dragConsumed._v = true;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function touchSelectionFirstPress$lambda($observer) {
    return function (it) {
      $observer.ic5(positionChange(it));
      it.f7g();
      return Unit_instance;
    };
  }
  function touchSelectionSubsequentPress$slambda$lambda($overSlop) {
    return function (change, slop) {
      change.f7g();
      $overSlop._v = slop;
      return Unit_instance;
    };
  }
  function touchSelectionSubsequentPress$slambda($pointerId, $overSlop, resultContinuation) {
    this.rc5_1 = $pointerId;
    this.sc5_1 = $overSlop;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(touchSelectionSubsequentPress$slambda).uc5 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.bbl($this$withTimeoutOrNull, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(touchSelectionSubsequentPress$slambda).d9 = function (p1, $completion) {
    return this.uc5((!(p1 == null) ? isInterface(p1, AwaitPointerEventScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(touchSelectionSubsequentPress$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = awaitTouchSlopOrCancellation(this.tc5_1, this.rc5_1, touchSelectionSubsequentPress$slambda$lambda(this.sc5_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var firstDragPastSlop = suspendResult;
            var tmp_0;
            if (!(firstDragPastSlop == null)) {
              var this_0 = this.sc5_1._v.h46_1;
              tmp_0 = !equalsLong(bitwiseAnd(_Offset___get_packedValue__impl__xh2k8q(this_0), new Long(2147483647, 2147483647)), new Long(2143289344, 2143289344));
            } else {
              tmp_0 = false;
            }

            if (tmp_0) {
              return DownResolution_Drag_getInstance();
            }

            var currentChange = first(this.tc5_1.d7k().q7d_1);
            var tmp_1;
            if (changedToUpIgnoreConsumed(currentChange)) {
              currentChange.f7g();
              tmp_1 = DownResolution_Up_getInstance();
            } else {
              tmp_1 = DownResolution_Cancel_getInstance();
            }

            return tmp_1;
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
  protoOf(touchSelectionSubsequentPress$slambda).bbl = function ($this$withTimeoutOrNull, completion) {
    var i = new touchSelectionSubsequentPress$slambda(this.rc5_1, this.sc5_1, completion);
    i.tc5_1 = $this$withTimeoutOrNull;
    return i;
  };
  function touchSelectionSubsequentPress$slambda_0($pointerId, $overSlop, resultContinuation) {
    var i = new touchSelectionSubsequentPress$slambda($pointerId, $overSlop, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.uc5($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function touchSelectionSubsequentPress$lambda($observer) {
    return function (it) {
      $observer.ic5(positionChange(it));
      it.f7g();
      return Unit_instance;
    };
  }
  function DownResolution_Up_getInstance() {
    DownResolution_initEntries();
    return DownResolution_Up_instance;
  }
  function DownResolution_Drag_getInstance() {
    DownResolution_initEntries();
    return DownResolution_Drag_instance;
  }
  function DownResolution_Timeout_getInstance() {
    DownResolution_initEntries();
    return DownResolution_Timeout_instance;
  }
  function DownResolution_Cancel_getInstance() {
    DownResolution_initEntries();
    return DownResolution_Cancel_instance;
  }
  function $awaitDownCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.dc3_1 = _this__u8e3s4;
  }
  protoOf($awaitDownCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.l8_1 = 2;
            suspendResult = this.dc3_1.e7k(PointerEventPass_Main_getInstance(), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.ec3_1 = suspendResult;
            var tmp0 = this.ec3_1.q7d_1;
            var tmp$ret$0;
            l$ret$1: do {
              var inductionVariable = 0;
              var last = tmp0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = tmp0.m(index);
                  if (!changedToDown(item)) {
                    tmp$ret$0 = false;
                    break l$ret$1;
                  }
                }
                 while (inductionVariable <= last);
              tmp$ret$0 = true;
            }
             while (false);
            if (!tmp$ret$0) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 3;
            continue $sm;
          case 3:
            return this.ec3_1;
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
  function $mouseSelectionCOROUTINE$(_this__u8e3s4, observer, clicksCounter, down, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.nc3_1 = _this__u8e3s4;
    this.oc3_1 = observer;
    this.pc3_1 = clicksCounter;
    this.qc3_1 = down;
  }
  protoOf($mouseSelectionCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 12;
            this.rc3_1 = this.qc3_1.q7d_1.m(0);
            if (get_isShiftPressed(this.qc3_1.s7d_1)) {
              var started = this.oc3_1.wc5(this.rc3_1.y7d_1);
              if (started) {
                this.l8_1 = 6;
                continue $sm;
              } else {
                this.l8_1 = 9;
                continue $sm;
              }
            } else {
              var tmp_0 = this;
              switch (this.pc3_1.qc2_1) {
                case 1:
                  tmp_0.tc3_1 = Companion_getInstance_40().dc2_1;
                  break;
                case 2:
                  tmp_0.tc3_1 = Companion_getInstance_40().fc2_1;
                  break;
                default:
                  tmp_0.tc3_1 = Companion_getInstance_40().gc2_1;
                  break;
              }
              var started_0 = this.oc3_1.vc5(this.rc3_1.y7d_1, this.tc3_1, this.pc3_1.qc2_1);
              if (started_0) {
                this.l8_1 = 1;
                continue $sm;
              } else {
                this.l8_1 = 4;
                continue $sm;
              }
            }

          case 1:
            this.m8_1 = 5;
            this.sc3_1 = {_v: !equals(this.tc3_1, Companion_getInstance_40().dc2_1)};
            this.l8_1 = 2;
            suspendResult = drag(this.nc3_1, this.rc3_1.w7d_1, mouseSelection$lambda_0(this.oc3_1, this.tc3_1, this.sc3_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var shouldConsumeUp = suspendResult;
            var tmp_1;
            if (shouldConsumeUp && this.sc3_1._v) {
              var this_0 = this.nc3_1.d7k().q7d_1;
              var inductionVariable = 0;
              var last = this_0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.m(index);
                  if (changedToUp(item)) {
                    item.f7g();
                  }
                }
                 while (inductionVariable <= last);
              tmp_1 = Unit_instance;
            }

            this.m8_1 = 12;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 12;
            this.oc3_1.xc5();
            this.l8_1 = 4;
            continue $sm;
          case 4:
            this.l8_1 = 10;
            continue $sm;
          case 5:
            this.m8_1 = 12;
            var t = this.o8_1;
            this.oc3_1.xc5();
            throw t;
          case 6:
            this.m8_1 = 11;
            this.rc3_1.f7g();
            this.l8_1 = 7;
            suspendResult = drag(this.nc3_1, this.rc3_1.w7d_1, mouseSelection$lambda(this.oc3_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            var shouldConsumeUp_0 = suspendResult;
            var tmp_2;
            if (shouldConsumeUp_0) {
              var this_1 = this.nc3_1.d7k().q7d_1;
              var inductionVariable_0 = 0;
              var last_0 = this_1.l() - 1 | 0;
              if (inductionVariable_0 <= last_0)
                do {
                  var index_0 = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  var item_0 = this_1.m(index_0);
                  if (changedToUp(item_0)) {
                    item_0.f7g();
                  }
                }
                 while (inductionVariable_0 <= last_0);
              tmp_2 = Unit_instance;
            }

            this.m8_1 = 12;
            this.l8_1 = 8;
            continue $sm;
          case 8:
            this.m8_1 = 12;
            this.oc3_1.xc5();
            this.l8_1 = 9;
            continue $sm;
          case 9:
            this.l8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            this.m8_1 = 12;
            var t_0 = this.o8_1;
            this.oc3_1.xc5();
            throw t_0;
          case 12:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 12) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function $touchSelectionFirstPressCOROUTINE$(_this__u8e3s4, observer, downEvent, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cc4_1 = _this__u8e3s4;
    this.dc4_1 = observer;
    this.ec4_1 = downEvent;
  }
  protoOf($touchSelectionFirstPressCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 6;
            this.m8_1 = 5;
            this.fc4_1 = first(this.ec4_1.q7d_1);
            this.l8_1 = 1;
            suspendResult = awaitLongPressOrCancellation(this.cc4_1, this.fc4_1.w7d_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var longPress = suspendResult;
            if (!(longPress == null) && distanceIsTolerable(this.cc4_1.a7k(), this.fc4_1, longPress)) {
              this.dc4_1.yc5(longPress.y7d_1, get_FirstLongPressSelectionAdjustment());
              this.l8_1 = 2;
              suspendResult = drag(this.cc4_1, longPress.w7d_1, touchSelectionFirstPress$lambda(this.dc4_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 3;
              continue $sm;
            }

          case 2:
            var dragCompletedWithUp = suspendResult;
            if (dragCompletedWithUp) {
              var this_0 = this.cc4_1.d7k().q7d_1;
              var inductionVariable = 0;
              var last = this_0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.m(index);
                  if (changedToUp(item)) {
                    item.f7g();
                  }
                }
                 while (inductionVariable <= last);
              this.dc4_1.zc5();
            } else {
              this.dc4_1.e83();
            }

            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 6;
            this.l8_1 = 4;
            continue $sm;
          case 4:
            this.m8_1 = 6;
            return Unit_instance;
          case 5:
            this.m8_1 = 6;
            var tmp_0 = this.o8_1;
            if (tmp_0 instanceof CancellationException) {
              var c = this.o8_1;
              this.dc4_1.e83();
              throw c;
            } else {
              throw this.o8_1;
            }

          case 6:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 6) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function $touchSelectionSubsequentPressCOROUTINE$(_this__u8e3s4, observer, downEvent, clicks, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.oc4_1 = _this__u8e3s4;
    this.pc4_1 = observer;
    this.qc4_1 = downEvent;
    this.rc4_1 = clicks;
  }
  protoOf($touchSelectionSubsequentPressCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            this.m8_1 = 4;
            var firstDown = first(this.qc4_1.q7d_1);
            this.sc4_1 = firstDown.w7d_1;
            this.pc4_1.yc5(firstDown.y7d_1, this.rc4_1 > 2 ? Companion_getInstance_40().gc2_1 : Companion_getInstance_40().fc2_1);
            this.tc4_1 = {_v: new Offset(Companion_getInstance_6().g46_1)};
            this.l8_1 = 1;
            var tmp_0 = this.oc4_1.a7k().x8b();
            suspendResult = this.oc4_1.g7k(tmp_0, touchSelectionSubsequentPress$slambda_0(this.sc4_1, this.tc4_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var tmp0_elvis_lhs = suspendResult;
            var downResolution = tmp0_elvis_lhs == null ? DownResolution_Timeout_getInstance() : tmp0_elvis_lhs;
            if (downResolution.equals(DownResolution_Cancel_getInstance())) {
              this.pc4_1.e83();
              return Unit_instance;
            }

            if (downResolution.equals(DownResolution_Up_getInstance())) {
              this.pc4_1.zc5();
              return Unit_instance;
            } else if (downResolution.equals(DownResolution_Drag_getInstance())) {
              this.pc4_1.ic5(this.tc4_1._v.h46_1);
            }

            this.l8_1 = 2;
            suspendResult = drag(this.oc4_1, this.sc4_1, touchSelectionSubsequentPress$lambda(this.pc4_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            var dragCompletedWithUp = suspendResult;
            if (dragCompletedWithUp) {
              var this_0 = this.oc4_1.d7k().q7d_1;
              var inductionVariable = 0;
              var last = this_0.l() - 1 | 0;
              if (inductionVariable <= last)
                do {
                  var index = inductionVariable;
                  inductionVariable = inductionVariable + 1 | 0;
                  var item = this_0.m(index);
                  if (changedToUp(item)) {
                    item.f7g();
                  }
                }
                 while (inductionVariable <= last);
              this.pc4_1.zc5();
            } else {
              this.pc4_1.e83();
            }

            this.m8_1 = 5;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 5;
            return Unit_instance;
          case 4:
            this.m8_1 = 5;
            var tmp_1 = this.o8_1;
            if (tmp_1 instanceof CancellationException) {
              var c = this.o8_1;
              this.pc4_1.e83();
              throw c;
            } else {
              throw this.o8_1;
            }

          case 5:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 5) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function getTextDirectionForOffset(_this__u8e3s4, offset) {
    return isOffsetAnEmptyLine(_this__u8e3s4, offset) ? _this__u8e3s4.j5o(offset) : _this__u8e3s4.k5o(offset);
  }
  function isOffsetAnEmptyLine(_this__u8e3s4, offset) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _this__u8e3s4.i5u_1.u5u_1;
    if (charSequenceLength(this_0) === 0) {
      tmp = true;
    } else {
      // Inline function 'kotlin.let' call
      var currentLine = _this__u8e3s4.o5o(offset);
      tmp = ((offset === 0 || !(currentLine === _this__u8e3s4.o5o(offset - 1 | 0))) && (offset === _this__u8e3s4.i5u_1.u5u_1.a() || !(currentLine === _this__u8e3s4.o5o(offset + 1 | 0))));
    }
    return tmp;
  }
  var androidx_compose_foundation_text_selection_SelectionLayoutBuilder$stable;
  var androidx_compose_foundation_text_selection_SelectableInfo$stable;
  var CrossStatus_CROSSED_instance;
  var CrossStatus_NOT_CROSSED_instance;
  var CrossStatus_COLLAPSED_instance;
  var CrossStatus_entriesInitialized;
  function CrossStatus_initEntries() {
    if (CrossStatus_entriesInitialized)
      return Unit_instance;
    CrossStatus_entriesInitialized = true;
    CrossStatus_CROSSED_instance = new CrossStatus('CROSSED', 0);
    CrossStatus_NOT_CROSSED_instance = new CrossStatus('NOT_CROSSED', 1);
    CrossStatus_COLLAPSED_instance = new CrossStatus('COLLAPSED', 2);
  }
  function CrossStatus(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function isCollapsed(_this__u8e3s4, layout) {
    _init_properties_SelectionLayout_kt__hbukbg();
    if (_this__u8e3s4 == null)
      return true;
    if (layout == null)
      return true;
    if (equalsLong(_this__u8e3s4.hby_1.gby_1, _this__u8e3s4.iby_1.gby_1)) {
      return _this__u8e3s4.hby_1.fby_1 === _this__u8e3s4.iby_1.fby_1;
    }
    var maxAnchor = _this__u8e3s4.jby_1 ? _this__u8e3s4.hby_1 : _this__u8e3s4.iby_1;
    if (!(maxAnchor.fby_1 === 0)) {
      return false;
    }
    var minAnchor = _this__u8e3s4.jby_1 ? _this__u8e3s4.iby_1 : _this__u8e3s4.hby_1;
    if (!(layout.ac6().bc6() === minAnchor.fby_1)) {
      return false;
    }
    var allTextsEmpty = {_v: true};
    layout.cc6(isCollapsed$lambda(allTextsEmpty));
    return allTextsEmpty._v;
  }
  function isCollapsed$lambda($allTextsEmpty) {
    return function (it) {
      var tmp;
      // Inline function 'kotlin.text.isNotEmpty' call
      var this_0 = it.ic2();
      if (charSequenceLength(this_0) > 0) {
        $allTextsEmpty._v = false;
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function CrossStatus_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_CROSSED_instance;
  }
  function CrossStatus_NOT_CROSSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_NOT_CROSSED_instance;
  }
  function CrossStatus_COLLAPSED_getInstance() {
    CrossStatus_initEntries();
    return CrossStatus_COLLAPSED_instance;
  }
  var properties_initialized_SelectionLayout_kt_inhukm;
  function _init_properties_SelectionLayout_kt__hbukbg() {
    if (!properties_initialized_SelectionLayout_kt_inhukm) {
      properties_initialized_SelectionLayout_kt_inhukm = true;
      androidx_compose_foundation_text_selection_SelectionLayoutBuilder$stable = 8;
      androidx_compose_foundation_text_selection_SelectableInfo$stable = androidx_compose_ui_text_TextLayoutResult$stableprop_getter();
    }
  }
  function get_LocalSelectionRegistrar() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return LocalSelectionRegistrar;
  }
  var LocalSelectionRegistrar;
  function hasSelection(_this__u8e3s4, selectableId) {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    var tmp1_safe_receiver = _this__u8e3s4 == null ? null : _this__u8e3s4.dby();
    var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ok(selectableId);
    return tmp2_elvis_lhs == null ? false : tmp2_elvis_lhs;
  }
  function LocalSelectionRegistrar$lambda() {
    _init_properties_SelectionRegistrar_kt__oigj6p();
    return null;
  }
  var properties_initialized_SelectionRegistrar_kt_shxs4d;
  function _init_properties_SelectionRegistrar_kt__oigj6p() {
    if (!properties_initialized_SelectionRegistrar_kt_shxs4d) {
      properties_initialized_SelectionRegistrar_kt_shxs4d = true;
      LocalSelectionRegistrar = compositionLocalOf(VOID, LocalSelectionRegistrar$lambda);
    }
  }
  var androidx_compose_foundation_text_selection_SelectionRegistrarImpl$stable;
  var androidx_compose_foundation_text_selection_TextFieldSelectionManager$stable;
  var androidx_compose_foundation_text_selection_TextPreparedSelectionState$stable;
  var androidx_compose_foundation_text_selection_BaseTextPreparedSelection$stable;
  var androidx_compose_foundation_text_selection_TextPreparedSelection$stable;
  var androidx_compose_foundation_text_selection_TextFieldPreparedSelection$stable;
  function get_LocalTextSelectionColors() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return LocalTextSelectionColors;
  }
  var LocalTextSelectionColors;
  var androidx_compose_foundation_text_selection_TextSelectionColors$stable;
  function TextSelectionColors(handleColor, backgroundColor) {
    this.ybr_1 = handleColor;
    this.zbr_1 = backgroundColor;
  }
  protoOf(TextSelectionColors).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextSelectionColors))
      return false;
    if (!equals(this.ybr_1, other.ybr_1))
      return false;
    if (!equals(this.zbr_1, other.zbr_1))
      return false;
    return true;
  };
  protoOf(TextSelectionColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.ybr_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.zbr_1) | 0;
    return result;
  };
  protoOf(TextSelectionColors).toString = function () {
    return 'SelectionColors(selectionHandleColor=' + Color__toString_impl_hpzmaq(this.ybr_1) + ', ' + ('selectionBackgroundColor=' + Color__toString_impl_hpzmaq(this.zbr_1) + ')');
  };
  function LocalTextSelectionColors$lambda() {
    _init_properties_TextSelectionColors_kt__lgomir();
    return get_DefaultTextSelectionColors();
  }
  var properties_initialized_TextSelectionColors_kt_x2xmyn;
  function _init_properties_TextSelectionColors_kt__lgomir() {
    if (!properties_initialized_TextSelectionColors_kt_x2xmyn) {
      properties_initialized_TextSelectionColors_kt_x2xmyn = true;
      LocalTextSelectionColors = compositionLocalOf(VOID, LocalTextSelectionColors$lambda);
      androidx_compose_foundation_text_selection_TextSelectionColors$stable = 0;
    }
  }
  var androidx_compose_foundation_text_input_internal_selection_ClipboardPasteState$stable;
  var androidx_compose_foundation_AtomicReference$stable;
  var androidx_compose_foundation_AtomicLong$stable;
  var androidx_compose_foundation_internal_PlatformOptimizedCancellationException$stable;
  var androidx_compose_foundation_BasicTooltipStrings$stable;
  function isComposeRootInScrollableContainer(_this__u8e3s4) {
    return false;
  }
  function _isSystemInDarkTheme($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalSystemTheme();
    var $composer_1 = $composer_0;
    return $composer_1.q1z(this_0).equals(SystemTheme_Dark_getInstance());
  }
  var androidx_compose_foundation_InputModeFilterIndicationNodeFactory$stable;
  var androidx_compose_foundation_InputModeFilterIndication$stable;
  function platformIndication(indication) {
    return inputModeFilterIndication(indication);
  }
  function inputModeFilterIndication(indication) {
    var tmp;
    if (indication == null) {
      tmp = null;
    } else {
      if (isInterface(indication, IndicationNodeFactory)) {
        tmp = new InputModeFilterIndicationNodeFactory(indication);
      } else {
        tmp = new InputModeFilterIndication(indication);
      }
    }
    return tmp;
  }
  function InputModeFilterIndicationNodeFactory$create$1(this$0, $filteredSource) {
    this.tc6_1 = $filteredSource;
    DelegatingNode.call(this);
    this.t84(this$0.uc6_1.gb5($filteredSource));
  }
  protoOf(InputModeFilterIndicationNodeFactory$create$1).g6k = function () {
    this.tc6_1.vc6_1 = currentValueOf(this, get_LocalInputModeManager());
  };
  protoOf(InputModeFilterIndicationNodeFactory$create$1).i6k = function () {
    this.tc6_1.vc6_1 = null;
  };
  function InputModeFilterIndicationNodeFactory(original) {
    this.uc6_1 = original;
  }
  protoOf(InputModeFilterIndicationNodeFactory).gb5 = function (interactionSource) {
    var filteredSource = new InputModeFilterInteractionSource(interactionSource);
    return new InputModeFilterIndicationNodeFactory$create$1(this, filteredSource);
  };
  protoOf(InputModeFilterIndicationNodeFactory).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof InputModeFilterIndicationNodeFactory))
      THROW_CCE();
    return this.uc6_1.equals(other.uc6_1);
  };
  protoOf(InputModeFilterIndicationNodeFactory).hashCode = function () {
    return this.uc6_1.hashCode();
  };
  function InputModeFilterIndication(original) {
    this.xc6_1 = original;
  }
  protoOf(InputModeFilterIndication).sbe = function (interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0.m1y(1127348017);
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalInputModeManager();
    var $composer_1 = $composer_0;
    var inputModeManager = $composer_1.q1z(this_0);
    var tmp0 = rememberUpdatedInstance.call(this, new InputModeFilterInteractionSource(interactionSource, inputModeManager), $composer_0, 112 & $changed);
    $composer_0.n1y();
    return tmp0;
  };
  protoOf(InputModeFilterIndication).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof InputModeFilterIndication))
      THROW_CCE();
    return equals(this.xc6_1, other.xc6_1);
  };
  protoOf(InputModeFilterIndication).hashCode = function () {
    return hashCode(this.xc6_1);
  };
  function InputModeFilterInteractionSource$interactions$slambda$slambda($this_flow, $actualFocusCount, $sentFocusCount, this$0, resultContinuation) {
    this.gc7_1 = $this_flow;
    this.hc7_1 = $actualFocusCount;
    this.ic7_1 = $sentFocusCount;
    this.jc7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).gbf = function (it, $completion) {
    var tmp = this.hbf(it, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).d9 = function (p1, $completion) {
    return this.gbf((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            var tmp_0 = this.kc7_1;
            if (!isInterface(tmp_0, FocusInteraction)) {
              this.l8_1 = 3;
              suspendResult = this.gc7_1.l1f(this.kc7_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (this.hc7_1._v > 0 && this.ic7_1._v > 0 || (this.hc7_1._v === 0 && _get_isKeyboardMode__dzti3t(this.jc7_1))) {
                var tmp0_subject = this.kc7_1;
                if (tmp0_subject instanceof Focus) {
                  var _unary__edvuaz = this.ic7_1._v;
                  this.ic7_1._v = _unary__edvuaz + 1 | 0;
                } else {
                  if (tmp0_subject instanceof Unfocus) {
                    var _unary__edvuaz_0 = this.ic7_1._v;
                    this.ic7_1._v = _unary__edvuaz_0 - 1 | 0;
                  }
                }
                this.l8_1 = 1;
                suspendResult = this.gc7_1.l1f(this.kc7_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.l8_1 = 2;
                continue $sm;
              }
            }

          case 1:
            this.l8_1 = 2;
            continue $sm;
          case 2:
            var tmp1_subject = this.kc7_1;
            if (tmp1_subject instanceof Focus) {
              var _unary__edvuaz_1 = this.hc7_1._v;
              this.hc7_1._v = _unary__edvuaz_1 + 1 | 0;
            } else {
              if (tmp1_subject instanceof Unfocus) {
                var _unary__edvuaz_2 = this.hc7_1._v;
                this.hc7_1._v = _unary__edvuaz_2 - 1 | 0;
              }
            }

            this.l8_1 = 4;
            continue $sm;
          case 3:
            this.l8_1 = 4;
            continue $sm;
          case 4:
            return Unit_instance;
          case 5:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 5) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda$slambda).hbf = function (it, completion) {
    var i = new InputModeFilterInteractionSource$interactions$slambda$slambda(this.gc7_1, this.hc7_1, this.ic7_1, this.jc7_1, completion);
    i.kc7_1 = it;
    return i;
  };
  function InputModeFilterInteractionSource$interactions$slambda$slambda_0($this_flow, $actualFocusCount, $sentFocusCount, this$0, resultContinuation) {
    var i = new InputModeFilterInteractionSource$interactions$slambda$slambda($this_flow, $actualFocusCount, $sentFocusCount, this$0, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.gbf(it, $completion);
    }, 1);
  }
  function _get_isKeyboardMode__dzti3t($this) {
    var tmp;
    if ($this.vc6_1 == null) {
      tmp = true;
    } else {
      var tmp0_safe_receiver = $this.vc6_1;
      var tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.l9p();
      tmp = equals(tmp_0 == null ? null : new InputMode(tmp_0), new InputMode(Companion_getInstance_33().x7b_1));
    }
    return tmp;
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0_0(function_0) {
    this.lc7_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).l1f = function (value, $completion) {
    return this.lc7_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).r2 = function () {
    return this.lc7_1;
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).equals = function (other) {
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
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function InputModeFilterInteractionSource$interactions$slambda($original, this$0, resultContinuation) {
    this.uc7_1 = $original;
    this.vc7_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(InputModeFilterInteractionSource$interactions$slambda).xc7 = function ($this$flow, $completion) {
    var tmp = this.yc7($this$flow, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda).d9 = function (p1, $completion) {
    return this.xc7((!(p1 == null) ? isInterface(p1, FlowCollector) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(InputModeFilterInteractionSource$interactions$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            var actualFocusCount = {_v: 0};
            var sentFocusCount = {_v: 0};
            this.l8_1 = 1;
            var tmp_0 = this.uc7_1.lbg();
            var tmp_1 = InputModeFilterInteractionSource$interactions$slambda$slambda_0(this.wc7_1, actualFocusCount, sentFocusCount, this.vc7_1, null);
            suspendResult = tmp_0.z1d(new sam$kotlinx_coroutines_flow_FlowCollector$0_0(tmp_1), this);
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
  protoOf(InputModeFilterInteractionSource$interactions$slambda).yc7 = function ($this$flow, completion) {
    var i = new InputModeFilterInteractionSource$interactions$slambda(this.uc7_1, this.vc7_1, completion);
    i.wc7_1 = $this$flow;
    return i;
  };
  function InputModeFilterInteractionSource$interactions$slambda_0($original, this$0, resultContinuation) {
    var i = new InputModeFilterInteractionSource$interactions$slambda($original, this$0, resultContinuation);
    return constructCallableReference(function ($this$flow, $completion) {
      return i.xc7($this$flow, $completion);
    }, 1);
  }
  function InputModeFilterInteractionSource(original, inputModeManager) {
    inputModeManager = inputModeManager === VOID ? null : inputModeManager;
    this.vc6_1 = inputModeManager;
    var tmp = this;
    tmp.wc6_1 = flow(InputModeFilterInteractionSource$interactions$slambda_0(original, this, null));
  }
  protoOf(InputModeFilterInteractionSource).lbg = function () {
    return this.wc6_1;
  };
  var androidx_compose_foundation_content_MediaType$stable;
  var androidx_compose_foundation_content_PlatformTransferableContent$stable;
  var androidx_compose_foundation_draganddrop_DragAndDropSourceDefaults$stable;
  var androidx_compose_foundation_draganddrop_CacheDrawScopeDragShadowCallback$stable;
  function firstDownRefersToPrimaryMouseButtonOnly() {
    return true;
  }
  function get_isDeepPress(_this__u8e3s4) {
    return false;
  }
  var androidx_compose_foundation_gestures_cupertino_CupertinoFlingBehavior$stable;
  var androidx_compose_foundation_platform_SynchronizedObject$stable;
  function SynchronizedObject() {
  }
  function BackgroundTextMeasurement(text, style, fontFamilyResolver, $composer, $changed) {
    var $composer_0 = $composer;
  }
  var androidx_compose_foundation_text_DeadKeyCombiner$stable;
  var androidx_compose_foundation_text_DefaultSkikoKeyMapping$stable;
  function findPrecedingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_34().s4a();
    it.a4b(_this__u8e3s4);
    return it.y4a(index);
  }
  function findFollowingBreak(_this__u8e3s4, index) {
    var it = Companion_getInstance_34().s4a();
    it.a4b(_this__u8e3s4);
    return it.z4a(index);
  }
  var androidx_compose_foundation_text_TextFieldScrollState$stable;
  var androidx_compose_foundation_text_contextmenu_data_TextContextMenuItemWithComposableLeadingIcon$stable;
  var androidx_compose_foundation_text_input_internal_SkikoPlatformTextInputMethodRequest$stable;
  var androidx_compose_foundation_text_modifiers_SkikoSelectionModifierElement$stable;
  var androidx_compose_foundation_text_modifiers_SkikoSelectionModifierNode$stable;
  function makeSkikoSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    return new SkikoSelectionModifierElement(_this__u8e3s4, selectableId, layoutCoordinates);
  }
  function SkikoSelectionModifierElement(selectionRegistrar, selectableId, layoutCoordinates) {
    ModifierNodeElement.call(this);
    this.ac8_1 = selectionRegistrar;
    this.bc8_1 = selectableId;
    this.cc8_1 = layoutCoordinates;
  }
  protoOf(SkikoSelectionModifierElement).f2b = function () {
    return new SkikoSelectionModifierNode(this.ac8_1, this.bc8_1, this.cc8_1);
  };
  protoOf(SkikoSelectionModifierElement).dc8 = function (node) {
    node.ac9(this.ac8_1, this.bc8_1, this.cc8_1);
  };
  protoOf(SkikoSelectionModifierElement).h6s = function (node) {
    return this.dc8(node instanceof SkikoSelectionModifierNode ? node : THROW_CCE());
  };
  protoOf(SkikoSelectionModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SkikoSelectionModifierElement))
      return false;
    if (!equals(this.ac8_1, other.ac8_1))
      return false;
    if (!equalsLong(this.bc8_1, other.bc8_1))
      return false;
    if (!equals(this.cc8_1, other.cc8_1))
      return false;
    return true;
  };
  protoOf(SkikoSelectionModifierElement).hashCode = function () {
    var result = this.bc8_1.hashCode();
    result = imul(31, result) + hashCode(this.ac8_1) | 0;
    result = imul(31, result) + hashCode(this.cc8_1) | 0;
    return result;
  };
  function SkikoSelectionModifierNode$bringIntoView$slambda$lambda($offset) {
    return function () {
      return Rect($offset, Companion_getInstance_0().d47_1);
    };
  }
  function createMouseSelectionObserver($this) {
    var tmp = $this.uc8_1;
    var tmp_0 = $this.vc8_1;
    var tmp_1 = $this.wc8_1;
    return skikoMouseSelectionObserver(tmp, tmp_0, tmp_1, SkikoSelectionModifierNode$bringIntoView$ref($this));
  }
  function bringIntoView_0($this, offset) {
    var tmp = $this.b6k();
    var tmp_0 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp, VOID, tmp_0, SkikoSelectionModifierNode$bringIntoView$slambda_0($this, offset, null));
  }
  function sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0(function_0) {
    this.bc9_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).z7j = function (_this__u8e3s4, $completion) {
    return this.bc9_1(_this__u8e3s4, $completion);
  };
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).r2 = function () {
    return this.bc9_1;
  };
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, PointerInputEventHandler) : false) {
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
  protoOf(sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function SkikoSelectionModifierNode$pointerInputNode$slambda(this$0, resultContinuation) {
    this.kc9_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SkikoSelectionModifierNode$pointerInputNode$slambda).mc9 = function ($this$SuspendingPointerInputModifierNode, $completion) {
    var tmp = this.nc9($this$SuspendingPointerInputModifierNode, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(SkikoSelectionModifierNode$pointerInputNode$slambda).d9 = function (p1, $completion) {
    return this.mc9((!(p1 == null) ? isInterface(p1, PointerInputScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SkikoSelectionModifierNode$pointerInputNode$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = awaitSelectionGestures(this.lc9_1, this.kc9_1.zc8_1, this.kc9_1.yc8_1, this);
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
  protoOf(SkikoSelectionModifierNode$pointerInputNode$slambda).nc9 = function ($this$SuspendingPointerInputModifierNode, completion) {
    var i = new SkikoSelectionModifierNode$pointerInputNode$slambda(this.kc9_1, completion);
    i.lc9_1 = $this$SuspendingPointerInputModifierNode;
    return i;
  };
  function SkikoSelectionModifierNode$pointerInputNode$slambda_0(this$0, resultContinuation) {
    var i = new SkikoSelectionModifierNode$pointerInputNode$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$SuspendingPointerInputModifierNode, $completion) {
      return i.mc9($this$SuspendingPointerInputModifierNode, $completion);
    }, 1);
  }
  function SkikoSelectionModifierNode$longPressDragObserver$1(this$0) {
    this.rc9_1 = this$0;
    this.oc9_1 = Companion_getInstance_6().e46_1;
    this.pc9_1 = Companion_getInstance_6().e46_1;
    this.qc9_1 = Companion_getInstance_40().dc2_1;
  }
  protoOf(SkikoSelectionModifierNode$longPressDragObserver$1).yc5 = function (startPoint, selectionAdjustment) {
    this.qc9_1 = selectionAdjustment;
    var tmp0_safe_receiver = this.rc9_1.wc8_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.w6n())
        return Unit_instance;
      this.rc9_1.uc8_1.sc9(tmp0_safe_receiver, startPoint, this.qc9_1, true);
      this.oc9_1 = startPoint;
    }
    if (!hasSelection(this.rc9_1.uc8_1, this.rc9_1.vc8_1))
      return Unit_instance;
    this.pc9_1 = Companion_getInstance_6().e46_1;
  };
  protoOf(SkikoSelectionModifierNode$longPressDragObserver$1).ic5 = function (delta) {
    var tmp0_safe_receiver = this.rc9_1.wc8_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.w6n())
        return Unit_instance;
      if (!hasSelection(this.rc9_1.uc8_1, this.rc9_1.vc8_1))
        return Unit_instance;
      this.pc9_1 = Offset__plus_impl_c78cg0(this.pc9_1, delta);
      var newPosition = Offset__plus_impl_c78cg0(this.oc9_1, this.pc9_1);
      var tmp0_$this = this.rc9_1.uc8_1;
      var tmp1_previousPosition = this.oc9_1;
      var tmp2_adjustment = this.qc9_1;
      var consumed = tmp0_$this.tc9(tmp0_safe_receiver, newPosition, tmp1_previousPosition, false, tmp2_adjustment, true);
      if (consumed) {
        this.oc9_1 = newPosition;
        this.pc9_1 = Companion_getInstance_6().e46_1;
      }
    }
  };
  protoOf(SkikoSelectionModifierNode$longPressDragObserver$1).zc5 = function () {
    if (hasSelection(this.rc9_1.uc8_1, this.rc9_1.vc8_1)) {
      this.rc9_1.uc8_1.uc9();
    }
  };
  protoOf(SkikoSelectionModifierNode$longPressDragObserver$1).e83 = function () {
    if (hasSelection(this.rc9_1.uc8_1, this.rc9_1.vc8_1)) {
      this.rc9_1.uc8_1.uc9();
    }
  };
  function SkikoSelectionModifierNode$bringIntoView$ref(p0) {
    return constructCallableReference(function (p0_0) {
      var tmp0 = p0;
      bringIntoView_0(tmp0, p0_0.h46_1);
      return Unit_instance;
    }, 1, 0, 148, 'bringIntoView', [p0]);
  }
  function SkikoSelectionModifierNode$bringIntoView$slambda(this$0, $offset, resultContinuation) {
    this.dca_1 = this$0;
    this.eca_1 = $offset;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SkikoSelectionModifierNode$bringIntoView$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(SkikoSelectionModifierNode$bringIntoView$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SkikoSelectionModifierNode$bringIntoView$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = bringIntoView(this.dca_1, SkikoSelectionModifierNode$bringIntoView$slambda$lambda(this.eca_1), this);
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
  protoOf(SkikoSelectionModifierNode$bringIntoView$slambda).q1k = function ($this$launch, completion) {
    var i = new SkikoSelectionModifierNode$bringIntoView$slambda(this.dca_1, this.eca_1, completion);
    i.fca_1 = $this$launch;
    return i;
  };
  function SkikoSelectionModifierNode$bringIntoView$slambda_0(this$0, $offset, resultContinuation) {
    var i = new SkikoSelectionModifierNode$bringIntoView$slambda(this$0, $offset, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function SkikoSelectionModifierNode(selectionRegistrar, selectableId, layoutCoordinates) {
    DelegatingNode.call(this);
    this.uc8_1 = selectionRegistrar;
    this.vc8_1 = selectableId;
    this.wc8_1 = layoutCoordinates;
    var tmp = this;
    var tmp_0 = SkikoSelectionModifierNode$pointerInputNode$slambda_0(this, null);
    tmp.xc8_1 = this.t84(SuspendingPointerInputModifierNode(new sam$androidx_compose_ui_input_pointer_PointerInputEventHandler$0(tmp_0)));
    var tmp_1 = this;
    tmp_1.yc8_1 = new SkikoSelectionModifierNode$longPressDragObserver$1(this);
    this.zc8_1 = createMouseSelectionObserver(this);
  }
  protoOf(SkikoSelectionModifierNode).ac9 = function (selectionRegistrar, selectableId, layoutCoordinates) {
    this.uc8_1 = selectionRegistrar;
    this.vc8_1 = selectableId;
    this.wc8_1 = layoutCoordinates;
    this.zc8_1 = createMouseSelectionObserver(this);
    this.xc8_1.o7n();
  };
  function skikoMouseSelectionObserver(_this__u8e3s4, selectableId, layoutCoordinates, bringIntoView) {
    return new skikoMouseSelectionObserver$1(layoutCoordinates, _this__u8e3s4, bringIntoView, selectableId);
  }
  function skikoMouseSelectionObserver$1($layoutCoordinates, $this_skikoMouseSelectionObserver, $bringIntoView, $selectableId) {
    this.hca_1 = $layoutCoordinates;
    this.ica_1 = $this_skikoMouseSelectionObserver;
    this.jca_1 = $bringIntoView;
    this.kca_1 = $selectableId;
    this.gca_1 = Companion_getInstance_6().e46_1;
  }
  protoOf(skikoMouseSelectionObserver$1).wc5 = function (downPosition) {
    var tmp0_safe_receiver = this.hca_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.w6n())
        return false;
      var consumed = this.ica_1.tc9(tmp0_safe_receiver, downPosition, this.gca_1, false, Companion_getInstance_40().dc2_1, false);
      if (consumed) {
        this.gca_1 = downPosition;
      }
      this.jca_1(new Offset(downPosition));
      return hasSelection(this.ica_1, this.kca_1);
    }
    return false;
  };
  protoOf(skikoMouseSelectionObserver$1).gc5 = function (dragPosition) {
    var tmp0_safe_receiver = this.hca_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.w6n())
        return false;
      if (!hasSelection(this.ica_1, this.kca_1))
        return false;
      var consumed = this.ica_1.tc9(tmp0_safe_receiver, dragPosition, this.gca_1, false, Companion_getInstance_40().dc2_1, false);
      if (consumed) {
        this.gca_1 = dragPosition;
      }
      this.jca_1(new Offset(dragPosition));
    }
    return true;
  };
  protoOf(skikoMouseSelectionObserver$1).vc5 = function (downPosition, adjustment, clickCount) {
    var tmp0_safe_receiver = this.hca_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.w6n())
        return false;
      this.ica_1.sc9(tmp0_safe_receiver, downPosition, adjustment, false);
      this.gca_1 = downPosition;
      this.jca_1(new Offset(downPosition));
      return hasSelection(this.ica_1, this.kca_1);
    }
    return false;
  };
  protoOf(skikoMouseSelectionObserver$1).hc5 = function (dragPosition, adjustment) {
    var tmp0_safe_receiver = this.hca_1();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      if (!tmp0_safe_receiver.w6n())
        return false;
      if (!hasSelection(this.ica_1, this.kca_1))
        return false;
      var tmp0_previousPosition = this.gca_1;
      var consumed = this.ica_1.tc9(tmp0_safe_receiver, dragPosition, tmp0_previousPosition, false, adjustment, false);
      if (consumed) {
        this.gca_1 = dragPosition;
      }
      this.jca_1(new Offset(dragPosition));
    }
    return true;
  };
  protoOf(skikoMouseSelectionObserver$1).xc5 = function () {
    this.ica_1.uc9();
  };
  function isMouseOrTouchPad(_this__u8e3s4) {
    var tmp0 = _this__u8e3s4.q7d_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.util.fastAll' call
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0.m(index);
          if (!(item.e7e_1 === Companion_getInstance_16().b7g_1)) {
            tmp$ret$0 = false;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  }
  var androidx_compose_foundation_v2_ScrollableScrollbarAdapter$stable;
  var androidx_compose_foundation_v2_LazyLineContentAdapter_VisibleLine$stable;
  var androidx_compose_foundation_v2_LazyLineContentAdapter$stable;
  var androidx_compose_foundation_v2_LazyListScrollbarAdapter$stable;
  var androidx_compose_foundation_v2_LazyGridScrollbarAdapter$stable;
  var androidx_compose_foundation_v2_TextFieldScrollbarAdapter$stable;
  var androidx_compose_foundation_v2_SliderAdapter$stable;
  function get_TapIndicationDelay() {
    return TapIndicationDelay;
  }
  var TapIndicationDelay;
  function isRequestFocusOnClickEnabled() {
    return true;
  }
  var isInTouchMode;
  function makeSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates) {
    return makeSkikoSelectionModifier(_this__u8e3s4, selectableId, layoutCoordinates);
  }
  function get_DefaultSelectionColor() {
    _init_properties_DefaultTextSelectionColors_web_kt__kputis();
    return DefaultSelectionColor;
  }
  var DefaultSelectionColor;
  function get_DefaultTextSelectionColors() {
    _init_properties_DefaultTextSelectionColors_web_kt__kputis();
    return DefaultTextSelectionColors;
  }
  var DefaultTextSelectionColors;
  var properties_initialized_DefaultTextSelectionColors_web_kt_2l2esq;
  function _init_properties_DefaultTextSelectionColors_web_kt__kputis() {
    if (!properties_initialized_DefaultTextSelectionColors_web_kt_2l2esq) {
      properties_initialized_DefaultTextSelectionColors_web_kt_2l2esq = true;
      DefaultSelectionColor = Color_0(new Long(-12417292, 0));
      DefaultTextSelectionColors = new TextSelectionColors(get_DefaultSelectionColor(), Color__copy$default_impl_ectz3s(get_DefaultSelectionColor(), 0.4));
    }
  }
  function get_FirstLongPressSelectionAdjustment() {
    return Companion_getInstance_40().fc2_1;
  }
  //region block: post-declaration
  protoOf(BackgroundNode).v6q = onMeasureResultChanged;
  protoOf(BackgroundNode).g72 = get_shouldClearDescendantSemantics;
  protoOf(BackgroundNode).h72 = get_shouldMergeDescendantSemantics;
  protoOf(BorderModifierNode).g72 = get_shouldClearDescendantSemantics;
  protoOf(BorderModifierNode).h72 = get_shouldMergeDescendantSemantics;
  protoOf(AbstractClickableNode).o6k = onDensityChange;
  protoOf(AbstractClickableNode).o7i = interceptOutOfBoundsChildEvents;
  protoOf(AbstractClickableNode).p7i = sharePointerInputWithSiblings;
  protoOf(AbstractClickableNode).q7i = onViewConfigurationChange;
  protoOf(AbstractClickableNode).n7i = get_touchBoundsExpansion;
  protoOf(AbstractClickableNode).g72 = get_shouldClearDescendantSemantics;
  protoOf(AbstractClickableNode).f71 = get_isImportantForBounds;
  protoOf(AbstractClickableNode).hb4 = isInterested;
  protoOf(FocusableNode).g72 = get_shouldClearDescendantSemantics;
  protoOf(FocusableNode).h72 = get_shouldMergeDescendantSemantics;
  protoOf(FocusableNode).f71 = get_isImportantForBounds;
  protoOf(DefaultDebugIndicationInstance).v6q = onMeasureResultChanged;
  protoOf(DefaultDebugIndication).sbe = rememberUpdatedInstance;
  protoOf(IndicationModifier).i6j = foldIn;
  protoOf(IndicationModifier).j6j = all;
  protoOf(IndicationModifier).e6j = then;
  protoOf(ResolvedStyle).n47 = toPx;
  protoOf(ResolvedStyle).p47 = toPx_0;
  protoOf(ResolvedStyle).o47 = roundToPx;
  protoOf(ResolvedStyle).u47 = toDp;
  protoOf(ResolvedStyle).t47 = toDp_0;
  protoOf(ResolvedStyle).v47 = toSize_0;
  protoOf(TextAutoSizeLayoutScopeImpl).n47 = toPx;
  protoOf(TextAutoSizeLayoutScopeImpl).o47 = roundToPx;
  protoOf(TextAutoSizeLayoutScopeImpl).u47 = toDp;
  protoOf(TextAutoSizeLayoutScopeImpl).t47 = toDp_0;
  protoOf(TextAutoSizeLayoutScopeImpl).v47 = toSize_0;
  protoOf(SelectableTextAnnotatedStringNode).v6q = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).v6q = onMeasureResultChanged;
  protoOf(TextAnnotatedStringNode).g72 = get_shouldClearDescendantSemantics;
  protoOf(TextAnnotatedStringNode).h72 = get_shouldMergeDescendantSemantics;
  protoOf(TextAnnotatedStringNode).f71 = get_isImportantForBounds;
  protoOf(TextStringSimpleNode).v6q = onMeasureResultChanged;
  protoOf(TextStringSimpleNode).g72 = get_shouldClearDescendantSemantics;
  protoOf(TextStringSimpleNode).h72 = get_shouldMergeDescendantSemantics;
  protoOf(TextStringSimpleNode).f71 = get_isImportantForBounds;
  protoOf(InputModeFilterIndicationNodeFactory).sbe = rememberUpdatedInstance;
  //endregion
  //region block: init
  androidx_compose_foundation_MarqueeDefaults$stable = 0;
  androidx_compose_foundation_BasicTooltipDefaults$stable = 0;
  androidx_compose_foundation_BorderModifierNodeElement$stable = 0;
  androidx_compose_foundation_BorderModifierNode$stable = 8;
  androidx_compose_foundation_BorderStroke$stable = 0;
  androidx_compose_foundation_ClickableNode$stable = 8;
  androidx_compose_foundation_CombinedClickableNode_DoubleKeyClickState$stable = 8;
  androidx_compose_foundation_AbstractClickableNode$stable = 8;
  TraverseKey_instance = new TraverseKey();
  androidx_compose_foundation_ComposeFoundationFlags$stable = 8;
  ComposeFoundationFlags_instance = new ComposeFoundationFlags();
  androidx_compose_foundation_FocusableNode$stable = 8;
  TraverseKey_instance_0 = new TraverseKey_0();
  androidx_compose_foundation_FocusedBoundsObserverNode$stable = 8;
  TraverseKey_instance_1 = new TraverseKey_1();
  TraverseKey_instance_2 = new TraverseKey_2();
  DefaultDebugIndication_instance = new DefaultDebugIndication();
  NoIndicationInstance_instance = new NoIndicationInstance();
  androidx_compose_foundation_MutationInterruptedException$stable = 8;
  androidx_compose_foundation_MutatorMutex$stable = 0;
  androidx_compose_foundation_ScrollState$stable = 0;
  androidx_compose_foundation_ScrollingLayoutElement$stable = 0;
  androidx_compose_foundation_ScrollNode$stable = 8;
  androidx_compose_foundation_border_BorderLogic$stable = 8;
  androidx_compose_foundation_content_ReceiveContentElement$stable = 0;
  androidx_compose_foundation_content_ReceiveContentNode$stable = 8;
  androidx_compose_foundation_contextmenu_ContextMenuPopupPositionProvider$stable = 0;
  androidx_compose_foundation_contextmenu_ContextMenuState_Status_Open$stable = 0;
  androidx_compose_foundation_contextmenu_ContextMenuState_Status_Closed$stable = 0;
  androidx_compose_foundation_contextmenu_ContextMenuState_Status$stable = 0;
  androidx_compose_foundation_contextmenu_ContextMenuState$stable = 0;
  androidx_compose_foundation_draganddrop_DragAndDropSourceNode$stable = 8;
  androidx_compose_foundation_gestures_GestureCancellationException$stable = 8;
  androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_AwaitDown$stable = 8;
  androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_AwaitTouchSlop$stable = 8;
  androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_AwaitGesturePickup$stable = 8;
  androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState_Dragging$stable = 8;
  androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector_DragDetectionState$stable = 0;
  androidx_compose_foundation_gestures_IndirectPointerInputDragCycleDetector$stable = 8;
  androidx_compose_foundation_gestures_IndirectPointerInputEventSmoother$stable = 8;
  androidx_compose_foundation_gestures_OffsetSmoother$stable = 8;
  androidx_compose_foundation_gestures_NonTouchScrollingLogic$stable = 8;
  TraverseKey_instance_3 = new TraverseKey_3();
  androidx_compose_foundation_gestures_TrackpadScrollingLogic$stable = 8;
  androidx_compose_foundation_gestures_TransformEvent_TransformStarted$stable = 0;
  androidx_compose_foundation_gestures_TransformEvent_TransformStopped$stable = 0;
  androidx_compose_foundation_gestures_TransformEvent_TransformDelta$stable = 0;
  androidx_compose_foundation_gestures_UpdatableAnimationState$stable = 8;
  androidx_compose_foundation_gestures_snapping_SnapPosition_Center$stable = 0;
  androidx_compose_foundation_gestures_snapping_SnapPosition_Start$stable = 0;
  androidx_compose_foundation_gestures_snapping_SnapPosition_End$stable = 0;
  androidx_compose_foundation_interaction_DragInteraction_Start$stable = 0;
  androidx_compose_foundation_interaction_DragInteraction_Stop$stable = 0;
  androidx_compose_foundation_interaction_DragInteraction_Cancel$stable = 0;
  androidx_compose_foundation_interaction_FocusInteraction_Focus$stable = 0;
  androidx_compose_foundation_interaction_FocusInteraction_Unfocus$stable = 0;
  androidx_compose_foundation_interaction_HoverInteraction_Enter$stable = 0;
  androidx_compose_foundation_interaction_HoverInteraction_Exit$stable = 0;
  androidx_compose_foundation_interaction_PressInteraction_Press$stable = 0;
  androidx_compose_foundation_interaction_PressInteraction_Release$stable = 0;
  androidx_compose_foundation_interaction_PressInteraction_Cancel$stable = 0;
  androidx_compose_foundation_lazy_LazyItemScopeImpl$stable = 0;
  androidx_compose_foundation_lazy_LazyListBeyondBoundsState$stable = 0;
  androidx_compose_foundation_lazy_LazyListCacheWindowStrategy$stable = 8;
  androidx_compose_foundation_lazy_LazyListCacheWindowScope$stable = 8;
  androidx_compose_foundation_lazy_LazyListIntervalContent$stable = 8;
  androidx_compose_foundation_lazy_LazyListInterval$stable = 0;
  androidx_compose_foundation_lazy_LazyListMeasureResult$stable = 8;
  androidx_compose_foundation_lazy_LazyListMeasuredItem$stable = 8;
  androidx_compose_foundation_lazy_LazyListMeasuredItemProvider$stable = 8;
  androidx_compose_foundation_lazy_LazyListPrefetchResultScopeImpl$stable = 0;
  androidx_compose_foundation_lazy_LazyListScrollPosition$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridSlots$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridBeyondBoundsState$stable = 0;
  androidx_compose_foundation_lazy_grid_LazyGridCacheWindowPrefetchStrategy$stable = 8;
  androidx_compose_foundation_lazy_grid_GridCells_Fixed$stable = 0;
  androidx_compose_foundation_lazy_grid_GridCells_Adaptive$stable = 0;
  androidx_compose_foundation_lazy_grid_GridCells_FixedSize$stable = 0;
  androidx_compose_foundation_lazy_grid_LazyGridIntervalContent$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridInterval$stable = 0;
  androidx_compose_foundation_lazy_grid_LazyGridItemScopeImpl$stable = 0;
  androidx_compose_foundation_lazy_grid_LazyGridMeasureResult$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridMeasuredItem$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridMeasuredItemProvider$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridMeasuredLine$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridMeasuredLineProvider$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridPrefetchResultScopeImpl$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridScrollPosition$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridSpanLayoutProvider_LineConfiguration$stable = 8;
  androidx_compose_foundation_lazy_grid_LazyGridSpanLayoutProvider$stable = 8;
  androidx_compose_foundation_lazy_layout_AwaitFirstLayoutModifier$stable = 0;
  androidx_compose_foundation_lazy_layout_CacheWindowLogic$stable = 8;
  androidx_compose_foundation_lazy_layout_CachedItem$stable = 8;
  androidx_compose_foundation_lazy_layout_IntervalList_Interval$stable = 0;
  androidx_compose_foundation_lazy_layout_MutableIntervalList$stable = 8;
  androidx_compose_foundation_lazy_layout_LazyLayoutBeyondBoundsProviderModifierNode$stable = 8;
  androidx_compose_foundation_lazy_layout_LazyLayoutIntervalContent$stable = 0;
  androidx_compose_foundation_lazy_layout_LazyLayoutItemContentFactory$stable = 8;
  androidx_compose_foundation_lazy_layout_NearestRangeKeyIndexMap$stable = 8;
  androidx_compose_foundation_lazy_layout_LazyLayoutMeasureScopeImpl$stable = 0;
  androidx_compose_foundation_lazy_layout_LazyLayoutNearestRangeState$stable = 0;
  androidx_compose_foundation_lazy_layout_LazyLayoutPinnedItemList$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridSlots$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridBeyondBoundsState$stable = 0;
  androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridCells_Fixed$stable = 0;
  androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridCells_Adaptive$stable = 0;
  androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridCells_FixedSize$stable = 0;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridIntervalContent$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridInterval$stable = 0;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridItemScopeImpl$stable = 0;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridLaneInfo$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridMeasureContext$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridMeasureProvider$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridMeasuredItem$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridScrollPosition$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_StaggeredGridItemSpan$stable = 0;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridSpanProvider$stable = 8;
  androidx_compose_foundation_lazy_staggeredgrid_LazyStaggeredGridState$stable = 0;
  androidx_compose_foundation_pager_PagerLazyLayoutItemProvider$stable = 0;
  androidx_compose_foundation_pager_PagerIntervalContent$stable = 0;
  androidx_compose_foundation_pager_MeasuredPage$stable = 8;
  androidx_compose_foundation_pager_PageSize_Fill$stable = 0;
  androidx_compose_foundation_pager_PageSize_Fixed$stable = 0;
  androidx_compose_foundation_pager_PagerDefaults$stable = 0;
  androidx_compose_foundation_pager_PagerDebugConfig$stable = 0;
  androidx_compose_foundation_pager_PagerBeyondBoundsState$stable = 0;
  androidx_compose_foundation_pager_PagerCacheWindowLogic$stable = 8;
  androidx_compose_foundation_pager_PagerMeasureResult$stable = 8;
  androidx_compose_foundation_pager_PagerScopeImpl$stable = 0;
  androidx_compose_foundation_pager_PagerScrollPosition$stable = 8;
  androidx_compose_foundation_pager_PagerSnapDistanceMaxPages$stable = 0;
  androidx_compose_foundation_relocation_BringIntoViewRequesterNode$stable = 8;
  androidx_compose_foundation_relocation_BringIntoViewResponderNode$stable = 8;
  androidx_compose_foundation_shape_AbsoluteCutCornerShape$stable = 0;
  androidx_compose_foundation_shape_AbsoluteRoundedCornerShape$stable = 0;
  androidx_compose_foundation_shape_CornerBasedShape$stable = 0;
  androidx_compose_foundation_shape_CutCornerShape$stable = 0;
  androidx_compose_foundation_shape_GenericShape$stable = 0;
  androidx_compose_foundation_style_CombinedStyle$stable = 8;
  androidx_compose_foundation_style_StyleAnimations$stable = 8;
  androidx_compose_foundation_style_StyleElement$stable = 0;
  androidx_compose_foundation_style_StyleInnerElement$stable = 0;
  androidx_compose_foundation_style_StyleOuterNode$stable = 8;
  androidx_compose_foundation_style_StyleInnerNode$stable = 8;
  androidx_compose_foundation_style_StyleStateKey$stable = 0;
  androidx_compose_foundation_style_BooleanPredefinedKey$stable = 8;
  androidx_compose_foundation_style_PredefinedToggleStateKey$stable = 8;
  androidx_compose_foundation_style_StyleState$stable = 0;
  androidx_compose_foundation_style_MutableStyleState$stable = 8;
  androidx_compose_foundation_text_SecureTextFieldController$stable = 8;
  androidx_compose_foundation_text_PasswordInputTransformation$stable = 0;
  androidx_compose_foundation_text_LegacyTextFieldState$stable = 8;
  androidx_compose_foundation_text_InlineTextContent$stable = 0;
  androidx_compose_foundation_text_KeyboardActionRunner$stable = 8;
  androidx_compose_foundation_text_KeyboardActions$stable = 0;
  androidx_compose_foundation_text_KeyboardOptions$stable = 0;
  androidx_compose_foundation_text_LinkStateInteractionSourceObserver$stable = 0;
  androidx_compose_foundation_text_TextAutoSizeDefaults$stable = 0;
  androidx_compose_foundation_text_TextDelegate$stable = 0;
  androidx_compose_foundation_text_TextFieldKeyInput$stable = 8;
  androidx_compose_foundation_text_TextFieldScrollerPosition$stable = 0;
  androidx_compose_foundation_text_TextLayoutResultProxy$stable = 8;
  androidx_compose_foundation_text_TextLinkScope$stable = 8;
  androidx_compose_foundation_text_TextRangeLayoutMeasureResult$stable = 0;
  androidx_compose_foundation_text_TextRangeLayoutMeasureScope$stable = 0;
  androidx_compose_foundation_text_TextRangeLayoutModifier$stable = 0;
  SNAPSHOTS_INTERVAL_MILLIS = 5000;
  androidx_compose_foundation_text_UndoManager$stable = 8;
  androidx_compose_foundation_text_contextmenu_builder_TextContextMenuBuilderScope$stable = 8;
  androidx_compose_foundation_text_contextmenu_data_TextContextMenuData$stable = 8;
  androidx_compose_foundation_text_contextmenu_data_TextContextMenuComponent$stable = 8;
  androidx_compose_foundation_text_contextmenu_data_TextContextMenuSeparator$stable = 8;
  androidx_compose_foundation_text_contextmenu_data_TextContextMenuKeys$stable = 8;
  androidx_compose_foundation_text_contextmenu_modifier_AddTextContextMenuDataComponentsNode$stable = 8;
  androidx_compose_foundation_text_contextmenu_modifier_ToolbarRequester$stable = 8;
  androidx_compose_foundation_text_contextmenu_modifier_ToolbarRequesterImpl$stable = 8;
  androidx_compose_foundation_text_contextmenu_modifier_TextContextMenuToolbarHandlerNode$stable = 8;
  androidx_compose_foundation_text_contextmenu_provider_BasicTextContextMenuProvider$stable = 0;
  androidx_compose_foundation_text_input_TextFieldBuffer$stable = 8;
  androidx_compose_foundation_text_input_TextFieldCharSequence$stable = 8;
  androidx_compose_foundation_text_input_TextFieldLineLimits_SingleLine$stable = 0;
  androidx_compose_foundation_text_input_TextFieldLineLimits_MultiLine$stable = 0;
  androidx_compose_foundation_text_input_TextFieldState_Saver$stable = 0;
  androidx_compose_foundation_text_input_TextFieldState$stable = 0;
  androidx_compose_foundation_text_input_TextUndoManager_Companion_Saver$stable = 8;
  androidx_compose_foundation_text_input_TextUndoManager$stable = 8;
  androidx_compose_foundation_text_input_UndoState$stable = 0;
  androidx_compose_foundation_text_input_internal_ChangeTracker$stable = 8;
  androidx_compose_foundation_text_input_internal_SingleLineCodepointTransformation$stable = 0;
  androidx_compose_foundation_text_input_internal_CoreTextFieldSemanticsModifier$stable = 0;
  androidx_compose_foundation_text_input_internal_CoreTextFieldSemanticsModifierNode$stable = 8;
  androidx_compose_foundation_text_input_internal_CursorAnimationState$stable = 8;
  androidx_compose_foundation_text_input_internal_DragAndDropHoverInteraction_Enter$stable = 0;
  androidx_compose_foundation_text_input_internal_DragAndDropHoverInteraction_Exit$stable = 0;
  androidx_compose_foundation_text_input_internal_PartialGapBuffer$stable = 8;
  androidx_compose_foundation_text_input_internal_IntIntervalTree$stable = 8;
  androidx_compose_foundation_text_input_internal_LegacyAdaptingPlatformTextInputModifierNode$stable = 8;
  androidx_compose_foundation_text_input_internal_LegacyPlatformTextInputServiceAdapter$stable = 8;
  androidx_compose_foundation_text_input_internal_OffsetMappingCalculator$stable = 8;
  androidx_compose_foundation_text_input_internal_TextFieldKeyEventHandler$stable = 8;
  androidx_compose_foundation_text_input_internal_TextFieldLayoutStateCache$stable = 0;
  androidx_compose_foundation_text_input_internal_TextFieldTextLayoutModifier$stable = 0;
  androidx_compose_foundation_text_input_internal_TextFieldTextLayoutModifierNode$stable = 8;
  androidx_compose_foundation_text_input_internal_TextLayoutState$stable = 8;
  androidx_compose_foundation_text_input_internal_TextStyleBuffer$stable = 8;
  androidx_compose_foundation_text_input_internal_TransformedTextFieldState$stable = 0;
  androidx_compose_foundation_text_input_internal_SelectionWedgeAffinity$stable = 0;
  androidx_compose_foundation_text_input_internal_selection_TextFieldHandleState$stable = 0;
  androidx_compose_foundation_text_input_internal_selection_TextFieldMagnifierNode$stable = 0;
  androidx_compose_foundation_text_input_internal_selection_TextFieldSelectionState$stable = 8;
  androidx_compose_foundation_text_input_internal_selection_TextFieldPreparedSelectionState$stable = 8;
  androidx_compose_foundation_text_input_internal_selection_SelectionMovementDeletionContext$stable = 8;
  androidx_compose_foundation_text_input_internal_undo_TextUndoOperation$stable = 0;
  androidx_compose_foundation_text_input_internal_undo_UndoManager$stable = 8;
  Companion_instance_4 = new Companion_0();
  androidx_compose_foundation_text_modifiers_ParagraphLayoutCache$stable = 8;
  androidx_compose_foundation_text_modifiers_SelectableTextAnnotatedStringElement$stable = 0;
  androidx_compose_foundation_text_modifiers_SelectableTextAnnotatedStringNode$stable = 8;
  androidx_compose_foundation_text_modifiers_StaticTextSelectionParams$stable = 8;
  androidx_compose_foundation_text_modifiers_SelectionController$stable = 8;
  androidx_compose_foundation_text_modifiers_TextAnnotatedStringElement$stable = 0;
  androidx_compose_foundation_text_modifiers_TextAnnotatedStringNode_TextSubstitutionValue$stable = 8;
  androidx_compose_foundation_text_modifiers_TextAnnotatedStringNode$stable = 8;
  androidx_compose_foundation_text_modifiers_SimpleTextAutoSizeLayoutScope$stable = 0;
  androidx_compose_foundation_text_modifiers_TextStringSimpleElement$stable = 0;
  androidx_compose_foundation_text_modifiers_TextStringSimpleNode_TextSubstitutionValue$stable = 8;
  androidx_compose_foundation_text_modifiers_TextStringSimpleNode$stable = 8;
  androidx_compose_foundation_text_selection_MultiWidgetSelectionDelegate$stable = 8;
  androidx_compose_foundation_text_selection_Selection_AnchorInfo$stable = 0;
  androidx_compose_foundation_text_selection_Selection$stable = 0;
  androidx_compose_foundation_text_selection_ClicksCounter$stable = 8;
  androidx_compose_foundation_text_selection_SelectionRegistrarImpl$stable = 8;
  androidx_compose_foundation_text_selection_TextFieldSelectionManager$stable = 8;
  androidx_compose_foundation_text_selection_TextPreparedSelectionState$stable = 8;
  androidx_compose_foundation_text_selection_BaseTextPreparedSelection$stable = 8;
  androidx_compose_foundation_text_selection_TextPreparedSelection$stable = 8;
  androidx_compose_foundation_text_selection_TextFieldPreparedSelection$stable = 8;
  androidx_compose_foundation_text_input_internal_selection_ClipboardPasteState$stable = 8;
  androidx_compose_foundation_AtomicReference$stable = 8;
  androidx_compose_foundation_AtomicLong$stable = 8;
  androidx_compose_foundation_internal_PlatformOptimizedCancellationException$stable = 8;
  androidx_compose_foundation_BasicTooltipStrings$stable = 0;
  androidx_compose_foundation_InputModeFilterIndicationNodeFactory$stable = 0;
  androidx_compose_foundation_InputModeFilterIndication$stable = 0;
  androidx_compose_foundation_content_MediaType$stable = 0;
  androidx_compose_foundation_content_PlatformTransferableContent$stable = 0;
  androidx_compose_foundation_draganddrop_DragAndDropSourceDefaults$stable = 0;
  androidx_compose_foundation_draganddrop_CacheDrawScopeDragShadowCallback$stable = 8;
  androidx_compose_foundation_gestures_cupertino_CupertinoFlingBehavior$stable = 0;
  androidx_compose_foundation_platform_SynchronizedObject$stable = 0;
  androidx_compose_foundation_text_DeadKeyCombiner$stable = 0;
  androidx_compose_foundation_text_DefaultSkikoKeyMapping$stable = 0;
  androidx_compose_foundation_text_TextFieldScrollState$stable = 8;
  androidx_compose_foundation_text_contextmenu_data_TextContextMenuItemWithComposableLeadingIcon$stable = 8;
  androidx_compose_foundation_text_input_internal_SkikoPlatformTextInputMethodRequest$stable = 8;
  androidx_compose_foundation_text_modifiers_SkikoSelectionModifierElement$stable = 0;
  androidx_compose_foundation_text_modifiers_SkikoSelectionModifierNode$stable = 8;
  androidx_compose_foundation_v2_ScrollableScrollbarAdapter$stable = 0;
  androidx_compose_foundation_v2_LazyLineContentAdapter_VisibleLine$stable = 0;
  androidx_compose_foundation_v2_LazyLineContentAdapter$stable = 0;
  androidx_compose_foundation_v2_LazyListScrollbarAdapter$stable = 0;
  androidx_compose_foundation_v2_LazyGridScrollbarAdapter$stable = 0;
  androidx_compose_foundation_v2_TextFieldScrollbarAdapter$stable = 8;
  androidx_compose_foundation_v2_SliderAdapter$stable = 8;
  TapIndicationDelay = new Long(150, 0);
  isInTouchMode = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Cancel;
  _.$_$.b = Start;
  _.$_$.c = Stop;
  _.$_$.d = Focus;
  _.$_$.e = Unfocus;
  _.$_$.f = Enter;
  _.$_$.g = Exit;
  _.$_$.h = Interaction;
  _.$_$.i = funMutableInteractionSource;
  _.$_$.j = Cancel_0;
  _.$_$.k = Press;
  _.$_$.l = Release;
  _.$_$.m = PressInteraction;
  _.$_$.n = get_CircleShape;
  _.$_$.o = CornerSize;
  _.$_$.p = CornerSize_0;
  _.$_$.q = RoundedCornerShape_1;
  _.$_$.r = RoundedCornerShape_2;
  _.$_$.s = get_LocalTextSelectionColors;
  _.$_$.t = TextSelectionColors;
  _.$_$.u = BasicText;
  _.$_$.v = Image;
  _.$_$.w = rememberUpdatedInstance;
  _.$_$.x = IndicationNodeFactory;
  _.$_$.y = get_LocalIndication;
  _.$_$.z = background;
  _.$_$.a1 = border;
  _.$_$.b1 = clickable;
  _.$_$.c1 = isSystemInDarkTheme;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation.js.map
