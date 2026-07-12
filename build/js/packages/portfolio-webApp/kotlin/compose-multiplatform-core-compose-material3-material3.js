(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-foundation-foundation.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-animation-animation-core.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-material-material-ripple.js', './compose-multiplatform-core-compose-ui-ui-text.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-material-material-ripple.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-material-material-ripple' was not found. Please, check whether 'compose-multiplatform-core-compose-material-material-ripple' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material3-material3'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'compose-multiplatform-core-compose-material3-material3'.");
    }
    globalThis['compose-multiplatform-core-compose-material3-material3'] = factory(typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['compose-multiplatform-core-compose-ui-ui-text']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_material_material_ripple, kotlin_org_jetbrains_compose_ui_ui_text) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.aa;
  var equals = kotlin_kotlin.$_$.b9;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.b5;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var funMutableInteractionSource = kotlin_org_jetbrains_compose_foundation_foundation.$_$.i;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var Dp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m;
  var VOID = kotlin_kotlin.$_$.c;
  var semantics = kotlin_org_jetbrains_compose_ui_ui.$_$.v3;
  var rememberComposableLambda = kotlin_androidx_compose_runtime_runtime.$_$.c;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var isInterface = kotlin_kotlin.$_$.r9;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var mutableStateListOf = kotlin_androidx_compose_runtime_runtime.$_$.h1;
  var LaunchedEffect = kotlin_androidx_compose_runtime_runtime.$_$.q;
  var lastOrNull = kotlin_kotlin.$_$.p5;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var get_VectorConverter = kotlin_org_jetbrains_compose_animation_animation_core.$_$.k;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.b;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var hashCode = kotlin_kotlin.$_$.i9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var PaddingValues = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.a;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui.$_$.z4;
  var set_role = kotlin_org_jetbrains_compose_ui_ui.$_$.u3;
  var defaultMinSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.c;
  var padding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.g;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var rowMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.h;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui.$_$.x4;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var RowScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.m;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c2;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sd;
  var Companion_getInstance_5 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var Long = kotlin_kotlin.$_$.yc;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r;
  var compositeOver = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.t1;
  var staticCompositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.s1;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var compositionLocalOf = kotlin_androidx_compose_runtime_runtime.$_$.y;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var coerceAtLeast = kotlin_kotlin.$_$.ja;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.s1;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var currentValueOf = kotlin_org_jetbrains_compose_ui_ui.$_$.p2;
  var coerceAtLeast_0 = kotlin_kotlin.$_$.ka;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var emptyMap = kotlin_kotlin.$_$.t4;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var HorizontalAlignmentLine = kotlin_org_jetbrains_compose_ui_ui.$_$.l1;
  var VerticalAlignmentLine = kotlin_org_jetbrains_compose_ui_ui.$_$.q1;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var toString = kotlin_kotlin.$_$.ca;
  var get_LocalIndication = kotlin_org_jetbrains_compose_foundation_foundation.$_$.y;
  var get_LocalTextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.s;
  var androidx_compose_runtime_ProvidedValue$stableprop_getter = kotlin_androidx_compose_runtime_runtime.$_$.x;
  var CompositionLocalProvider = kotlin_androidx_compose_runtime_runtime.$_$.k;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s;
  var TextSelectionColors = kotlin_org_jetbrains_compose_foundation_foundation.$_$.t;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var spring = kotlin_org_jetbrains_compose_animation_animation_core.$_$.r;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var toString_0 = kotlin_kotlin.$_$.de;
  var objectCreate = kotlin_kotlin.$_$.z9;
  var ColorProducer = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q;
  var getBooleanHashCode = kotlin_kotlin.$_$.d9;
  var rememberUpdatedInstance = kotlin_org_jetbrains_compose_foundation_foundation.$_$.w;
  var IndicationNodeFactory = kotlin_org_jetbrains_compose_foundation_foundation.$_$.x;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var createRippleModifierNode = kotlin_org_jetbrains_compose_material_material_ripple.$_$.b;
  var DelegatingNode = kotlin_org_jetbrains_compose_ui_ui.$_$.v1;
  var DelegatableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var RippleAlpha = kotlin_org_jetbrains_compose_material_material_ripple.$_$.a;
  var get_CircleShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.n;
  var get_RectangleShape = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h1;
  var CornerSize = kotlin_org_jetbrains_compose_foundation_foundation.$_$.p;
  var graphicsLayer = kotlin_org_jetbrains_compose_ui_ui.$_$.o;
  var border = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a1;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var clip = kotlin_org_jetbrains_compose_ui_ui.$_$.d;
  var get_LocalDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.b3;
  var clickable = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b1;
  var maybeCachedBoxMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.f;
  var BoxScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.k;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var FontStyle = kotlin_org_jetbrains_compose_ui_ui_text.$_$.a;
  var TextAlign = kotlin_org_jetbrains_compose_ui_ui_text.$_$.f;
  var TextOverflow = kotlin_org_jetbrains_compose_ui_ui_text.$_$.g;
  var _TextUnit___get_packedValue__impl__it60w4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y2;
  var _TextOverflow___get_value__impl__vugm5i = kotlin_org_jetbrains_compose_ui_ui_text.$_$.w;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var Companion_getInstance_7 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.n1;
  var Companion_getInstance_8 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.k1;
  var BasicText = kotlin_org_jetbrains_compose_foundation_foundation.$_$.u;
  var CompositionLocalProvider_0 = kotlin_androidx_compose_runtime_runtime.$_$.l;
  var structuralEqualityPolicy = kotlin_androidx_compose_runtime_runtime.$_$.t1;
  var invalidateSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.v2;
  var TraversableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var SemanticsModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.n2;
  var traverseAncestors = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var get_shouldClearDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.l2;
  var get_shouldMergeDescendantSemantics = kotlin_org_jetbrains_compose_ui_ui.$_$.m2;
  var get_isImportantForBounds = kotlin_org_jetbrains_compose_ui_ui.$_$.k2;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.l9;
  var CubicBezierEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.e;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var Enum = kotlin_kotlin.$_$.sc;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.r;
  var RoundedCornerShape = kotlin_org_jetbrains_compose_foundation_foundation.$_$.q;
  var RoundedCornerShape_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.r;
  var CornerSize_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.o;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.g1;
  var get_sp_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.z;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.c1;
  var Companion_getInstance_11 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.i1;
  var Companion_getInstance_12 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.j1;
  var LineHeightStyle_init_$Create$ = kotlin_org_jetbrains_compose_ui_ui_text.$_$.p1;
  var Companion_getInstance_13 = kotlin_org_jetbrains_compose_ui_ui_text.$_$.o1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(ButtonColors, 'ButtonColors');
  initMetadataForLambda(ButtonElevation$animateElevation$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(ButtonElevation$animateElevation$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ButtonElevation$animateElevation$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ButtonElevation, 'ButtonElevation');
  initMetadataForObject(ButtonDefaults, 'ButtonDefaults');
  initMetadataForClass(ColorScheme, 'ColorScheme');
  initMetadataForObject(MinimumInteractiveModifier, 'MinimumInteractiveModifier', VOID, ModifierNodeElement);
  initMetadataForClass(MinimumInteractiveModifierNode, 'MinimumInteractiveModifierNode', MinimumInteractiveModifierNode, Node, [CompositionLocalConsumerModifierNode, LayoutModifierNode]);
  initMetadataForClass(Values, 'Values', Values);
  initMetadataForObject(MaterialTheme, 'MaterialTheme');
  initMetadataForCompanion(Companion);
  initMetadataForObject(StandardMotionSchemeImpl, 'StandardMotionSchemeImpl');
  initMetadataForClass(RippleConfiguration, 'RippleConfiguration', RippleConfiguration);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(RippleNodeFactory, 'RippleNodeFactory', VOID, VOID, [IndicationNodeFactory]);
  initMetadataForClass(sam$androidx_compose_ui_graphics_ColorProducer$0_0, 'sam$androidx_compose_ui_graphics_ColorProducer$0', VOID, VOID, [ColorProducer, FunctionAdapter]);
  initMetadataForClass(DelegatingThemeAwareRippleNode, 'DelegatingThemeAwareRippleNode', VOID, DelegatingNode, [CompositionLocalConsumerModifierNode, DelegatableNode]);
  initMetadataForObject(RippleDefaults, 'RippleDefaults');
  initMetadataForClass(Shapes, 'Shapes');
  initMetadataForObject(ShapeDefaults, 'ShapeDefaults');
  initMetadataForClass(Typography, 'Typography');
  initMetadataForClass(ParentSemanticsNode, 'ParentSemanticsNode', VOID, Node, [TraversableNode, SemanticsModifierNode]);
  initMetadataForObject(ParentSemanticsNodeKey, 'ParentSemanticsNodeKey');
  initMetadataForClass(ChildSemanticsNodeElement, 'ChildSemanticsNodeElement', VOID, ModifierNodeElement);
  initMetadataForClass(ChildSemanticsNode, 'ChildSemanticsNode', VOID, Node, [SemanticsModifierNode]);
  initMetadataForObject(ElevationDefaults, 'ElevationDefaults');
  initMetadataForCoroutine($animateElevationCOROUTINE$, CoroutineImpl);
  initMetadataForObject(BaselineButtonTokens, 'BaselineButtonTokens');
  initMetadataForObject(ButtonLargeTokens, 'ButtonLargeTokens');
  initMetadataForObject(ButtonMediumTokens, 'ButtonMediumTokens');
  initMetadataForObject(ButtonSmallTokens, 'ButtonSmallTokens');
  initMetadataForObject(ButtonXLargeTokens, 'ButtonXLargeTokens');
  initMetadataForObject(ButtonXSmallTokens, 'ButtonXSmallTokens');
  initMetadataForObject(ColorLightTokens, 'ColorLightTokens');
  initMetadataForClass(ColorSchemeKeyTokens, 'ColorSchemeKeyTokens', VOID, Enum);
  initMetadataForObject(ElevationTokens, 'ElevationTokens');
  initMetadataForObject(FilledButtonTokens, 'FilledButtonTokens');
  initMetadataForObject(PaletteTokens, 'PaletteTokens');
  initMetadataForClass(ShapeKeyTokens, 'ShapeKeyTokens', VOID, Enum);
  initMetadataForObject(ShapeTokens, 'ShapeTokens');
  initMetadataForObject(StandardMotionTokens, 'StandardMotionTokens');
  initMetadataForObject(TypeScaleTokens, 'TypeScaleTokens');
  initMetadataForObject(TypefaceTokens, 'TypefaceTokens');
  initMetadataForClass(TypographyTokens, 'TypographyTokens', TypographyTokens);
  //endregion
  var androidx_compose_material3_AppBarScopeImpl$stable;
  var androidx_compose_material3_ClickableAppBarItem$stable;
  var androidx_compose_material3_ToggleableAppBarItem$stable;
  var androidx_compose_material3_CustomAppBarItem$stable;
  var androidx_compose_material3_AppBarMenuState$stable;
  var androidx_compose_material3_OverflowMeasurePolicy$stable;
  var androidx_compose_material3_BottomSheetScaffoldState$stable;
  var androidx_compose_material3_ButtonDefaults$stable;
  var androidx_compose_material3_ButtonElevation$stable;
  var androidx_compose_material3_ButtonColors$stable;
  var androidx_compose_material3_ButtonShapes$stable;
  function ButtonColors(containerColor, contentColor, disabledContainerColor, disabledContentColor) {
    this.xcs_1 = containerColor;
    this.ycs_1 = contentColor;
    this.zcs_1 = disabledContainerColor;
    this.act_1 = disabledContentColor;
  }
  protoOf(ButtonColors).bct = function (enabled) {
    return enabled ? this.xcs_1 : this.zcs_1;
  };
  protoOf(ButtonColors).cct = function (enabled) {
    return enabled ? this.ycs_1 : this.act_1;
  };
  protoOf(ButtonColors).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonColors);
    }
    if (tmp)
      return false;
    if (!equals(this.xcs_1, other.xcs_1))
      return false;
    if (!equals(this.ycs_1, other.ycs_1))
      return false;
    if (!equals(this.zcs_1, other.zcs_1))
      return false;
    if (!equals(this.act_1, other.act_1))
      return false;
    return true;
  };
  protoOf(ButtonColors).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.xcs_1);
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.ycs_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.zcs_1) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.act_1) | 0;
    return result;
  };
  function Button(onClick, modifier, enabled, shape, colors, elevation, border, contentPadding, interactionSource, content, $composer, $changed, $default) {
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var colors_0 = {_v: colors};
    var elevation_0 = {_v: elevation};
    var border_0 = {_v: border};
    var contentPadding_0 = {_v: contentPadding};
    var interactionSource_0 = {_v: interactionSource};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(-1310015664);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.l1z(onClick) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.h1z(enabled_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.g1z(shape_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | (($default & 16) === 0 && $composer_0.g1z(colors_0._v) ? 16384 : 8192);
    if (($changed & 196608) === 0)
      $dirty = $dirty | (($default & 32) === 0 && $composer_0.g1z(elevation_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.g1z(border_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.g1z(contentPadding_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.g1z(interactionSource_0._v) ? 67108864 : 33554432);
    if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 536870912 : 268435456);
    if ($composer_0.n1z(!(($dirty & 306783379) === 306783378), $dirty & 1)) {
      $composer_0.q1y();
      if (($changed & 1) === 0 || $composer_0.i1y()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          enabled_0._v = true;
        }
        if (!(($default & 8) === 0)) {
          shape_0._v = ButtonDefaults_getInstance().scu($composer_0, 6);
          $dirty = $dirty & -7169;
        }
        if (!(($default & 16) === 0)) {
          colors_0._v = ButtonDefaults_getInstance().tcu($composer_0, 6);
          $dirty = $dirty & -57345;
        }
        if (!(($default & 32) === 0)) {
          var tmp = ButtonDefaults_getInstance();
          var tmp_0 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_1 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_2 = _Dp___init__impl__ms3zkb(0.0);
          var tmp_3 = _Dp___init__impl__ms3zkb(0.0);
          elevation_0._v = tmp.ucu(tmp_0, tmp_1, tmp_2, tmp_3, _Dp___init__impl__ms3zkb(0.0), $composer_0, 196608, 31);
          $dirty = $dirty & -458753;
        }
        if (!(($default & 64) === 0)) {
          border_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          contentPadding_0._v = ButtonDefaults_getInstance().jct_1;
        }
        if (!(($default & 256) === 0)) {
          interactionSource_0._v = null;
        }
      } else {
        $composer_0.y1y();
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
        if (!(($default & 16) === 0))
          $dirty = $dirty & -57345;
        if (!(($default & 32) === 0))
          $dirty = $dirty & -458753;
      }
      $composer_0.r1y();
      var tmp0_elvis_lhs = interactionSource_0._v;
      var tmp_4;
      if (tmp0_elvis_lhs == null) {
        $composer_0.m1y(1691726283);
        // Inline function 'androidx.compose.runtime.cache' call
        var this_0 = $composer_0;
        // Inline function 'kotlin.let' call
        var it = this_0.e1z();
        var tmp_5;
        if (false || it === Companion_getInstance().f1y_1) {
          var value = funMutableInteractionSource();
          this_0.f1z(value);
          tmp_5 = value;
        } else {
          tmp_5 = it;
        }
        var tmp0_group = tmp_5;
        $composer_0.n1y();
        tmp_4 = tmp0_group;
      } else {
        $composer_0.m1y(-499618164);
        $composer_0.n1y();
        tmp_4 = tmp0_elvis_lhs;
      }
      var interactionSource_1 = tmp_4;
      var containerColor = colors_0._v.bct(enabled_0._v);
      var contentColor = colors_0._v.cct(enabled_0._v);
      var tmp1_safe_receiver = elevation_0._v;
      var tmp_6;
      if (tmp1_safe_receiver == null) {
        $composer_0.m1y(1691909926);
        $composer_0.n1y();
        tmp_6 = null;
      } else {
        $composer_0.m1y(-499611589);
        var tmp1_group = tmp1_safe_receiver.acv(enabled_0._v, interactionSource_1, $composer_0, 14 & $dirty >> 6 | 896 & $dirty >> 9);
        $composer_0.n1y();
        tmp_6 = tmp1_group;
      }
      var tmp2_safe_receiver = tmp_6;
      var tmp_7;
      if (tmp2_safe_receiver == null) {
        tmp_7 = null;
      } else {
        var tmp_8 = tmp2_safe_receiver.r1();
        tmp_7 = tmp_8 == null ? null : tmp_8.z47_1;
      }
      var tmp3_elvis_lhs = tmp_7;
      var tmp_9;
      var tmp_10 = tmp3_elvis_lhs;
      if ((tmp_10 == null ? null : new Dp(tmp_10)) == null) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        tmp_9 = _Dp___init__impl__ms3zkb(0);
      } else {
        tmp_9 = tmp3_elvis_lhs;
      }
      var shadowElevation = tmp_9;
      var tmp_11 = modifier_0._v;
      // Inline function 'androidx.compose.runtime.cache' call
      var this_1 = $composer_0;
      // Inline function 'kotlin.let' call
      var it_0 = this_1.e1z();
      var tmp_12;
      if (false || it_0 === Companion_getInstance().f1y_1) {
        var value_0 = Button$lambda;
        this_1.f1z(value_0);
        tmp_12 = value_0;
      } else {
        tmp_12 = it_0;
      }
      var tmp$ret$5 = tmp_12;
      var tmp_13 = semantics(tmp_11, VOID, tmp$ret$5);
      var tmp_14 = enabled_0._v;
      var tmp_15 = shape_0._v;
      var tmp_16 = _Dp___init__impl__ms3zkb(0.0);
      var tmp_17 = border_0._v;
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-535639973, true, Button$lambda_0(contentColor, contentPadding_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.g1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it_1 = $composer_1.e1z();
      var tmp_18;
      if (invalid || it_1 === Companion_getInstance().f1y_1) {
        var value_1 = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.f1z(value_1);
        tmp_18 = value_1;
      } else {
        tmp_18 = it_1;
      }
      var tmp$ret$9 = tmp_18;
      Surface(onClick, tmp_13, tmp_14, tmp_15, containerColor, contentColor, tmp_16, shadowElevation, tmp_17, interactionSource_1, tmp$ret$9, $composer_0, 14 & $dirty | 896 & $dirty | 7168 & $dirty | 234881024 & $dirty << 6, 6, 64);
    } else {
      $composer_0.y1y();
    }
    var tmp2_safe_receiver_0 = $composer_0.t1y();
    if (tmp2_safe_receiver_0 == null)
      null;
    else {
      tmp2_safe_receiver_0.d2a(Button$lambda_1(onClick, modifier_0, enabled_0, shape_0, colors_0, elevation_0, border_0, contentPadding_0, interactionSource_0, content, $changed, $default));
    }
  }
  function ButtonElevation$animateElevation$slambda$slambda($interactions, resultContinuation) {
    this.jcv_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda$slambda).gbf = function (interaction, $completion) {
    var tmp = this.hbf(interaction, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ButtonElevation$animateElevation$slambda$slambda).d9 = function (p1, $completion) {
    return this.gbf((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          var tmp0_subject = this.kcv_1;
          if (tmp0_subject instanceof Enter) {
            this.jcv_1.qm(this.kcv_1);
          } else {
            if (tmp0_subject instanceof Exit) {
              this.jcv_1.ym(this.kcv_1.kbm_1);
            } else {
              if (tmp0_subject instanceof Focus) {
                this.jcv_1.qm(this.kcv_1);
              } else {
                if (tmp0_subject instanceof Unfocus) {
                  this.jcv_1.ym(this.kcv_1.jbm_1);
                } else {
                  if (tmp0_subject instanceof Press) {
                    this.jcv_1.qm(this.kcv_1);
                  } else {
                    if (tmp0_subject instanceof Release) {
                      this.jcv_1.ym(this.kcv_1.nbm_1);
                    } else {
                      if (tmp0_subject instanceof Cancel) {
                        this.jcv_1.ym(this.kcv_1.obm_1);
                      }
                    }
                  }
                }
              }
            }
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
  protoOf(ButtonElevation$animateElevation$slambda$slambda).hbf = function (interaction, completion) {
    var i = new ButtonElevation$animateElevation$slambda$slambda(this.jcv_1, completion);
    i.kcv_1 = interaction;
    return i;
  };
  function ButtonElevation$animateElevation$slambda$slambda_0($interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda$slambda($interactions, resultContinuation);
    return constructCallableReference(function (interaction, $completion) {
      return i.gbf(interaction, $completion);
    }, 1);
  }
  function animateElevation($this, enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp;
    if (false || it === Companion_getInstance().f1y_1) {
      var value = mutableStateListOf();
      $composer_0.f1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    var interactions = tmp;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = ($changed & 112 ^ 48) > 32 && $composer_0.g1z(interactionSource) || ($changed & 48) === 32;
    // Inline function 'kotlin.let' call
    var it_0 = $composer_0.e1z();
    var tmp_0;
    if (invalid || it_0 === Companion_getInstance().f1y_1) {
      var value_0 = ButtonElevation$animateElevation$slambda_0(interactionSource, interactions, null);
      $composer_0.f1z(value_0);
      tmp_0 = value_0;
    } else {
      tmp_0 = it_0;
    }
    var tmp$ret$4 = tmp_0;
    LaunchedEffect(interactionSource, tmp$ret$4, $composer_0, 14 & $changed >> 3);
    var interaction = lastOrNull(interactions);
    var tmp_1;
    if (!enabled) {
      tmp_1 = $this.zcu_1;
    } else {
      var tmp_2;
      if (interaction instanceof Press) {
        tmp_2 = $this.wcu_1;
      } else {
        if (interaction instanceof Enter) {
          tmp_2 = $this.ycu_1;
        } else {
          if (interaction instanceof Focus) {
            tmp_2 = $this.xcu_1;
          } else {
            tmp_2 = $this.vcu_1;
          }
        }
      }
      tmp_1 = tmp_2;
    }
    var target = tmp_1;
    // Inline function 'androidx.compose.runtime.cache' call
    // Inline function 'kotlin.let' call
    var it_1 = $composer_0.e1z();
    var tmp_3;
    if (false || it_1 === Companion_getInstance().f1y_1) {
      var value_1 = new Animatable(new Dp(target), get_VectorConverter(Companion_getInstance_0()));
      $composer_0.f1z(value_1);
      tmp_3 = value_1;
    } else {
      tmp_3 = it_1;
    }
    var animatable = tmp_3;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid_0 = !!(!!(!!(!!($composer_0.l1z(animatable) | $composer_0.j1z(_Dp___get_value__impl__geb1vb(target))) | (($changed & 14 ^ 6) > 4 && $composer_0.h1z(enabled) || ($changed & 6) === 4)) | (($changed & 896 ^ 384) > 256 && $composer_0.g1z($this) || ($changed & 384) === 256)) | $composer_0.l1z(interaction));
    // Inline function 'kotlin.let' call
    var it_2 = $composer_0.e1z();
    var tmp_4;
    if (invalid_0 || it_2 === Companion_getInstance().f1y_1) {
      var value_2 = ButtonElevation$animateElevation$slambda_2(animatable, target, enabled, $this, interaction, null);
      $composer_0.f1z(value_2);
      tmp_4 = value_2;
    } else {
      tmp_4 = it_2;
    }
    var tmp$ret$12 = tmp_4;
    LaunchedEffect(new Dp(target), tmp$ret$12, $composer_0, 0);
    return animatable.xaf();
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.lcv_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).l1f = function (value, $completion) {
    return this.lcv_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).r2 = function () {
    return this.lcv_1;
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
  function ButtonElevation$animateElevation$slambda($interactionSource, $interactions, resultContinuation) {
    this.ucv_1 = $interactionSource;
    this.vcv_1 = $interactions;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda).p1k = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1k($this$LaunchedEffect, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ButtonElevation$animateElevation$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            var tmp_0 = this.ucv_1.lbg();
            var tmp_1 = ButtonElevation$animateElevation$slambda$slambda_0(this.vcv_1, null);
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
  protoOf(ButtonElevation$animateElevation$slambda).q1k = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$slambda(this.ucv_1, this.vcv_1, completion);
    i.wcv_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$slambda_0($interactionSource, $interactions, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda($interactionSource, $interactions, resultContinuation);
    return constructCallableReference(function ($this$LaunchedEffect, $completion) {
      return i.p1k($this$LaunchedEffect, $completion);
    }, 1);
  }
  function ButtonElevation$animateElevation$slambda_1($animatable, $target, $enabled, this$0, $interaction, resultContinuation) {
    this.fcw_1 = $animatable;
    this.gcw_1 = $target;
    this.hcw_1 = $enabled;
    this.icw_1 = this$0;
    this.jcw_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ButtonElevation$animateElevation$slambda_1).p1k = function ($this$LaunchedEffect, $completion) {
    var tmp = this.q1k($this$LaunchedEffect, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ButtonElevation$animateElevation$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ButtonElevation$animateElevation$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            if (!this.fcw_1.qae().equals(new Dp(this.gcw_1))) {
              if (!this.hcw_1) {
                this.l8_1 = 2;
                suspendResult = this.fcw_1.waf(new Dp(this.gcw_1), this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                var tmp0_subject = this.fcw_1.qae().z47_1;
                var lastInteraction = equals(tmp0_subject, this.icw_1.wcu_1) ? new Press(Companion_getInstance_1().e46_1) : equals(tmp0_subject, this.icw_1.ycu_1) ? new Enter() : equals(tmp0_subject, this.icw_1.xcu_1) ? new Focus() : null;
                this.l8_1 = 1;
                suspendResult = animateElevation_0(this.fcw_1, this.gcw_1, lastInteraction, this.jcw_1, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              }
            } else {
              this.l8_1 = 4;
              continue $sm;
            }

          case 1:
            this.l8_1 = 3;
            continue $sm;
          case 2:
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
  protoOf(ButtonElevation$animateElevation$slambda_1).q1k = function ($this$LaunchedEffect, completion) {
    var i = new ButtonElevation$animateElevation$slambda_1(this.fcw_1, this.gcw_1, this.hcw_1, this.icw_1, this.jcw_1, completion);
    i.kcw_1 = $this$LaunchedEffect;
    return i;
  };
  function ButtonElevation$animateElevation$slambda_2($animatable, $target, $enabled, this$0, $interaction, resultContinuation) {
    var i = new ButtonElevation$animateElevation$slambda_1($animatable, $target, $enabled, this$0, $interaction, resultContinuation);
    return constructCallableReference(function ($this$LaunchedEffect, $completion) {
      return i.p1k($this$LaunchedEffect, $completion);
    }, 1);
  }
  function ButtonElevation(defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation) {
    this.vcu_1 = defaultElevation;
    this.wcu_1 = pressedElevation;
    this.xcu_1 = focusedElevation;
    this.ycu_1 = hoveredElevation;
    this.zcu_1 = disabledElevation;
  }
  protoOf(ButtonElevation).acv = function (enabled, interactionSource, $composer, $changed) {
    var $composer_0 = $composer;
    return animateElevation(this, enabled, interactionSource, $composer_0, 14 & $changed | 112 & $changed | 896 & $changed);
  };
  protoOf(ButtonElevation).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof ButtonElevation);
    }
    if (tmp)
      return false;
    if (!equals(this.vcu_1, other.vcu_1))
      return false;
    if (!equals(this.wcu_1, other.wcu_1))
      return false;
    if (!equals(this.xcu_1, other.xcu_1))
      return false;
    if (!equals(this.ycu_1, other.ycu_1))
      return false;
    if (!equals(this.zcu_1, other.zcu_1))
      return false;
    return true;
  };
  protoOf(ButtonElevation).hashCode = function () {
    var result = Dp__hashCode_impl_sxkrra(this.vcu_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.wcu_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.xcu_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.ycu_1) | 0;
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.zcu_1) | 0;
    return result;
  };
  function ButtonDefaults() {
    ButtonDefaults_instance = this;
    this.dct_1 = BaselineButtonTokens_getInstance().jcx_1;
    this.ect_1 = BaselineButtonTokens_getInstance().ycx_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.fct_1 = _Dp___init__impl__ms3zkb(16);
    this.gct_1 = ButtonSmallTokens_getInstance().mcy_1;
    this.hct_1 = ButtonSmallTokens_getInstance().rcy_1;
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.ict_1 = _Dp___init__impl__ms3zkb(8);
    this.jct_1 = PaddingValues(this.dct_1, this.ict_1, this.ect_1, this.ict_1);
    this.kct_1 = PaddingValues(this.fct_1, this.ict_1, this.ect_1, this.ict_1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.lct_1 = _Dp___init__impl__ms3zkb(12);
    this.mct_1 = PaddingValues(this.lct_1, this.jct_1.fa6(), this.lct_1, this.jct_1.ha6());
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.nct_1 = _Dp___init__impl__ms3zkb(16);
    this.oct_1 = PaddingValues(this.lct_1, this.jct_1.fa6(), this.nct_1, this.jct_1.ha6());
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.pct_1 = _Dp___init__impl__ms3zkb(58);
    var tmp_4 = this;
    var tmp_5;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_5 = _Dp___init__impl__ms3zkb(36);
    } else {
      tmp_5 = ButtonSmallTokens_getInstance().hcy_1;
    }
    tmp_4.qct_1 = tmp_5;
    this.rct_1 = ButtonXSmallTokens_getInstance().scy_1;
    var tmp_6 = this;
    var tmp_7;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_7 = _Dp___init__impl__ms3zkb(46);
    } else {
      tmp_7 = ButtonMediumTokens_getInstance().dcz_1;
    }
    tmp_6.sct_1 = tmp_7;
    var tmp_8 = this;
    var tmp_9;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_9 = _Dp___init__impl__ms3zkb(54);
    } else {
      tmp_9 = ButtonLargeTokens_getInstance().ocz_1;
    }
    tmp_8.tct_1 = tmp_9;
    this.uct_1 = ButtonXLargeTokens_getInstance().zcz_1;
    var tmp_10 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_10.vct_1 = _Dp___init__impl__ms3zkb(18);
    this.wct_1 = ButtonXSmallTokens_getInstance().wcy_1;
    this.xct_1 = ButtonSmallTokens_getInstance().lcy_1;
    this.yct_1 = ButtonMediumTokens_getInstance().hcz_1;
    var tmp_11 = this;
    var tmp_12;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_12 = _Dp___init__impl__ms3zkb(24);
    } else {
      tmp_12 = ButtonLargeTokens_getInstance().scz_1;
    }
    tmp_11.zct_1 = tmp_12;
    this.acu_1 = ButtonXLargeTokens_getInstance().dd0_1;
    this.bcu_1 = ButtonSmallTokens_getInstance().kcy_1;
    var tmp_13 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_13.ccu_1 = _Dp___init__impl__ms3zkb(4);
    this.dcu_1 = ButtonMediumTokens_getInstance().gcz_1;
    var tmp_14 = this;
    var tmp_15;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_15 = _Dp___init__impl__ms3zkb(8);
    } else {
      tmp_15 = ButtonLargeTokens_getInstance().rcz_1;
    }
    tmp_14.ecu_1 = tmp_15;
    this.fcu_1 = ButtonXLargeTokens_getInstance().cd0_1;
    var tmp_16 = this;
    var tmp_17;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_17 = _Dp___init__impl__ms3zkb(8);
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_17 = _Dp___init__impl__ms3zkb(10);
    }
    tmp_16.gcu_1 = tmp_17;
    var tmp_18 = this;
    var tmp_19;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_19 = _Dp___init__impl__ms3zkb(12);
    } else {
      tmp_19 = this.gct_1;
    }
    tmp_18.hcu_1 = tmp_19;
    this.icu_1 = ButtonMediumTokens_getInstance().icz_1;
    this.jcu_1 = ButtonMediumTokens_getInstance().ncz_1;
    var tmp_20 = this;
    var tmp_21;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_21 = _Dp___init__impl__ms3zkb(12);
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_21 = _Dp___init__impl__ms3zkb(16);
    }
    tmp_20.kcu_1 = tmp_21;
    var tmp_22 = this;
    var tmp_23;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_23 = _Dp___init__impl__ms3zkb(20);
    } else {
      tmp_23 = ButtonMediumTokens_getInstance().icz_1;
    }
    tmp_22.lcu_1 = tmp_23;
    var tmp_24 = this;
    var tmp_25;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_25 = _Dp___init__impl__ms3zkb(20);
    } else {
      tmp_25 = ButtonMediumTokens_getInstance().ncz_1;
    }
    tmp_24.mcu_1 = tmp_25;
    var tmp_26 = this;
    var tmp_27;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_27 = _Dp___init__impl__ms3zkb(14);
    } else {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_27 = _Dp___init__impl__ms3zkb(32);
    }
    tmp_26.ncu_1 = tmp_27;
    var tmp_28 = this;
    var tmp_29;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_29 = _Dp___init__impl__ms3zkb(32);
    } else {
      tmp_29 = ButtonLargeTokens_getInstance().tcz_1;
    }
    tmp_28.ocu_1 = tmp_29;
    var tmp_30 = this;
    var tmp_31;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_31 = _Dp___init__impl__ms3zkb(32);
    } else {
      tmp_31 = ButtonLargeTokens_getInstance().ycz_1;
    }
    tmp_30.pcu_1 = tmp_31;
    var tmp_32 = this;
    var tmp_33;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_33 = _Dp___init__impl__ms3zkb(28);
    } else {
      tmp_33 = ButtonLargeTokens_getInstance().tcz_1;
    }
    tmp_32.qcu_1 = tmp_33;
    var tmp_34 = this;
    var tmp_35;
    if (get_shouldUsePrecisionPointerComponentSizing().r1()) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_35 = _Dp___init__impl__ms3zkb(28);
    } else {
      tmp_35 = ButtonLargeTokens_getInstance().ycz_1;
    }
    tmp_34.rcu_1 = tmp_35;
  }
  protoOf(ButtonDefaults).scu = function ($composer, $changed) {
    var $composer_0 = $composer;
    return get_value(ButtonSmallTokens_getInstance().icy_1, $composer_0, 6);
  };
  protoOf(ButtonDefaults).tcu = function ($composer, $changed) {
    var $composer_0 = $composer;
    return this.ld0(MaterialTheme_instance.kd0($composer_0, 6));
  };
  protoOf(ButtonDefaults).ld0 = function (_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.id2_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ButtonColors(fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().ld4_1), fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().bd5_1), Color__copy$default_impl_ectz3s(fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().nd4_1), FilledButtonTokens_getInstance().pd4_1), Color__copy$default_impl_ectz3s(fromToken(_this__u8e3s4, FilledButtonTokens_getInstance().sd4_1), FilledButtonTokens_getInstance().td4_1));
      _this__u8e3s4.id2_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(ButtonDefaults).ucu = function (defaultElevation, pressedElevation, focusedElevation, hoveredElevation, disabledElevation, $composer, $changed, $default) {
    var defaultElevation_0 = defaultElevation;
    var pressedElevation_0 = pressedElevation;
    var focusedElevation_0 = focusedElevation;
    var hoveredElevation_0 = hoveredElevation;
    var disabledElevation_0 = disabledElevation;
    var $composer_0 = $composer;
    if (!(($default & 1) === 0))
      defaultElevation_0 = FilledButtonTokens_getInstance().md4_1;
    if (!(($default & 2) === 0))
      pressedElevation_0 = FilledButtonTokens_getInstance().ed5_1;
    if (!(($default & 4) === 0))
      focusedElevation_0 = FilledButtonTokens_getInstance().ud4_1;
    if (!(($default & 8) === 0))
      hoveredElevation_0 = FilledButtonTokens_getInstance().xd4_1;
    if (!(($default & 16) === 0))
      disabledElevation_0 = FilledButtonTokens_getInstance().od4_1;
    return new ButtonElevation(defaultElevation_0, pressedElevation_0, focusedElevation_0, hoveredElevation_0, disabledElevation_0);
  };
  var ButtonDefaults_instance;
  function ButtonDefaults_getInstance() {
    if (ButtonDefaults_instance == null)
      new ButtonDefaults();
    return ButtonDefaults_instance;
  }
  function Button$lambda($this$semantics) {
    set_role($this$semantics, Companion_getInstance_2().p8v_1);
    return Unit_instance;
  }
  function Button$lambda$lambda($contentPadding, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.n1z(!(($changed & 3) === 2), $changed & 1)) {
        var tmp0 = padding(defaultMinSize(Companion_instance, ButtonDefaults_getInstance().pct_1, ButtonDefaults_getInstance().qct_1), $contentPadding._v);
        var tmp2 = Arrangement_getInstance().ga4_1;
        var tmp4 = Companion_getInstance_3().g6i_1;
        // Inline function 'androidx.compose.foundation.layout.Row' call
        var content = $content;
        var modifier = tmp0;
        var horizontalArrangement = tmp2;
        var verticalAlignment = tmp4;
        var $composer_1 = $composer_0;
        if (!((0 & 1) === 0))
          modifier = Companion_instance;
        if (!((0 & 2) === 0))
          horizontalArrangement = Arrangement_getInstance().ca4_1;
        if (!((0 & 4) === 0))
          verticalAlignment = Companion_getInstance_3().f6i_1;
        var measurePolicy = rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer_1, 14 & 432 >> 3 | 112 & 432 >> 3);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_2 = $composer_1;
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
        var localMap = $composer_2.p1z();
        var materialized = materialize($composer_2, modifier_0);
        var tmp0_0 = Companion_getInstance_4().b84_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_3 = $composer_2;
        var tmp_0 = $composer_3.g1y();
        if (!isInterface(tmp_0, Applier)) {
          invalidApplier();
        }
        $composer_3.z1y();
        if ($composer_3.h1y()) {
          $composer_3.a1z(tmp0_0);
        } else {
          $composer_3.b1z();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().g84_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().f84_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_4().j84_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_4().k84_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().d84_1);
        var $composer_4 = $composer_3;
        content(RowScopeInstance_instance, $composer_4, 6 | 112 & 432 >> 6);
        $composer_3.c1z();
        tmp = Unit_instance;
      } else {
        $composer_0.y1y();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function ComposableLambda$invoke$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      p0.v3t(p0_0, p1);
      return Unit_instance;
    }, 2, 0, 13, VOID, [p0]);
  }
  function Button$lambda_0($contentColor, $contentPadding, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.n1z(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = MaterialTheme_instance.bd7($composer_0, 6).jd6_1;
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(417635459, true, Button$lambda$lambda($contentPadding, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.g1z(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.e1z();
        var tmp_1;
        if (invalid || it === Companion_getInstance().f1y_1) {
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.f1z(value);
          tmp_1 = value;
        } else {
          tmp_1 = it;
        }
        var tmp$ret$0 = tmp_1;
        ProvideContentColorTextStyle($contentColor, tmp_0, tmp$ret$0, $composer_0, 384);
        tmp = Unit_instance;
      } else {
        $composer_0.y1y();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Button$lambda_1($onClick, $modifier, $enabled, $shape, $colors, $elevation, $border, $contentPadding, $interactionSource, $content, $$changed, $$default) {
    return function ($composer, $force) {
      Button($onClick, $modifier._v, $enabled._v, $shape._v, $colors._v, $elevation._v, $border._v, $contentPadding._v, $interactionSource._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var androidx_compose_material3_ButtonGroupDefaults$stable;
  var androidx_compose_material3_ButtonGroupMenuState$stable;
  var androidx_compose_material3_ButtonGroupParentData$stable;
  var androidx_compose_material3_ButtonGroupElement$stable;
  var androidx_compose_material3_ButtonGroupNode$stable;
  var androidx_compose_material3_EnlargeOnPressElement$stable;
  var androidx_compose_material3_EnlargeOnPressNode$stable;
  var androidx_compose_material3_ClickableButtonGroupItem$stable;
  var androidx_compose_material3_ToggleableButtonGroupItem$stable;
  var androidx_compose_material3_CustomButtonGroupItem$stable;
  var androidx_compose_material3_VerticalAlignElement$stable;
  var androidx_compose_material3_VerticalAlignNode$stable;
  var androidx_compose_material3_CardDefaults$stable;
  var androidx_compose_material3_CardElevation$stable;
  var androidx_compose_material3_CardColors$stable;
  function get_LocalTonalElevationEnabled() {
    _init_properties_ColorScheme_kt__xhtsty();
    return LocalTonalElevationEnabled;
  }
  var LocalTonalElevationEnabled;
  var androidx_compose_material3_ColorScheme$stable;
  function ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, primaryFixed, primaryFixedDim, onPrimaryFixed, onPrimaryFixedVariant, secondaryFixed, secondaryFixedDim, onSecondaryFixed, onSecondaryFixedVariant, tertiaryFixed, tertiaryFixedDim, onTertiaryFixed, onTertiaryFixedVariant) {
    this.md0_1 = primary;
    this.nd0_1 = onPrimary;
    this.od0_1 = primaryContainer;
    this.pd0_1 = onPrimaryContainer;
    this.qd0_1 = inversePrimary;
    this.rd0_1 = secondary;
    this.sd0_1 = onSecondary;
    this.td0_1 = secondaryContainer;
    this.ud0_1 = onSecondaryContainer;
    this.vd0_1 = tertiary;
    this.wd0_1 = onTertiary;
    this.xd0_1 = tertiaryContainer;
    this.yd0_1 = onTertiaryContainer;
    this.zd0_1 = background;
    this.ad1_1 = onBackground;
    this.bd1_1 = surface;
    this.cd1_1 = onSurface;
    this.dd1_1 = surfaceVariant;
    this.ed1_1 = onSurfaceVariant;
    this.fd1_1 = surfaceTint;
    this.gd1_1 = inverseSurface;
    this.hd1_1 = inverseOnSurface;
    this.id1_1 = error;
    this.jd1_1 = onError;
    this.kd1_1 = errorContainer;
    this.ld1_1 = onErrorContainer;
    this.md1_1 = outline;
    this.nd1_1 = outlineVariant;
    this.od1_1 = scrim;
    this.pd1_1 = surfaceBright;
    this.qd1_1 = surfaceDim;
    this.rd1_1 = surfaceContainer;
    this.sd1_1 = surfaceContainerHigh;
    this.td1_1 = surfaceContainerHighest;
    this.ud1_1 = surfaceContainerLow;
    this.vd1_1 = surfaceContainerLowest;
    this.wd1_1 = primaryFixed;
    this.xd1_1 = primaryFixedDim;
    this.yd1_1 = onPrimaryFixed;
    this.zd1_1 = onPrimaryFixedVariant;
    this.ad2_1 = secondaryFixed;
    this.bd2_1 = secondaryFixedDim;
    this.cd2_1 = onSecondaryFixed;
    this.dd2_1 = onSecondaryFixedVariant;
    this.ed2_1 = tertiaryFixed;
    this.fd2_1 = tertiaryFixedDim;
    this.gd2_1 = onTertiaryFixed;
    this.hd2_1 = onTertiaryFixedVariant;
    this.id2_1 = null;
    this.jd2_1 = null;
    this.kd2_1 = null;
    this.ld2_1 = null;
    this.md2_1 = null;
    this.nd2_1 = null;
    this.od2_1 = null;
    this.pd2_1 = null;
    this.qd2_1 = null;
    this.rd2_1 = null;
    this.sd2_1 = null;
    this.td2_1 = null;
    this.ud2_1 = null;
    this.vd2_1 = null;
    this.wd2_1 = null;
    this.xd2_1 = null;
    this.yd2_1 = null;
    this.zd2_1 = null;
    this.ad3_1 = null;
    this.bd3_1 = null;
    this.cd3_1 = null;
    this.dd3_1 = null;
    this.ed3_1 = null;
    this.fd3_1 = null;
    this.gd3_1 = null;
    this.hd3_1 = null;
    this.id3_1 = null;
    this.jd3_1 = null;
    this.kd3_1 = null;
    this.ld3_1 = null;
    this.md3_1 = null;
    this.nd3_1 = null;
    this.od3_1 = null;
    this.pd3_1 = null;
    this.qd3_1 = null;
    this.rd3_1 = null;
    this.sd3_1 = null;
    this.td3_1 = null;
    this.ud3_1 = null;
    this.vd3_1 = null;
    this.wd3_1 = null;
    this.xd3_1 = null;
    this.yd3_1 = null;
    this.zd3_1 = null;
    this.ad4_1 = null;
    this.bd4_1 = null;
    this.cd4_1 = null;
    this.dd4_1 = null;
    this.ed4_1 = null;
    this.fd4_1 = null;
    this.gd4_1 = null;
    this.hd4_1 = null;
    this.id4_1 = null;
    this.jd4_1 = null;
    this.kd4_1 = null;
  }
  protoOf(ColorScheme).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7('ColorScheme(');
    this_0.q7('primary=' + Color__toString_impl_hpzmaq(this.md0_1) + ', ');
    this_0.q7('onPrimary=' + Color__toString_impl_hpzmaq(this.nd0_1) + ', ');
    this_0.q7('primaryContainer=' + Color__toString_impl_hpzmaq(this.od0_1) + ', ');
    this_0.q7('onPrimaryContainer=' + Color__toString_impl_hpzmaq(this.pd0_1) + ', ');
    this_0.q7('inversePrimary=' + Color__toString_impl_hpzmaq(this.qd0_1) + ', ');
    this_0.q7('secondary=' + Color__toString_impl_hpzmaq(this.rd0_1) + ', ');
    this_0.q7('onSecondary=' + Color__toString_impl_hpzmaq(this.sd0_1) + ', ');
    this_0.q7('secondaryContainer=' + Color__toString_impl_hpzmaq(this.td0_1) + ', ');
    this_0.q7('onSecondaryContainer=' + Color__toString_impl_hpzmaq(this.ud0_1) + ', ');
    this_0.q7('tertiary=' + Color__toString_impl_hpzmaq(this.vd0_1) + ', ');
    this_0.q7('onTertiary=' + Color__toString_impl_hpzmaq(this.wd0_1) + ', ');
    this_0.q7('tertiaryContainer=' + Color__toString_impl_hpzmaq(this.xd0_1) + ', ');
    this_0.q7('onTertiaryContainer=' + Color__toString_impl_hpzmaq(this.yd0_1) + ', ');
    this_0.q7('background=' + Color__toString_impl_hpzmaq(this.zd0_1) + ', ');
    this_0.q7('onBackground=' + Color__toString_impl_hpzmaq(this.ad1_1) + ', ');
    this_0.q7('surface=' + Color__toString_impl_hpzmaq(this.bd1_1) + ', ');
    this_0.q7('onSurface=' + Color__toString_impl_hpzmaq(this.cd1_1) + ', ');
    this_0.q7('surfaceVariant=' + Color__toString_impl_hpzmaq(this.dd1_1) + ', ');
    this_0.q7('onSurfaceVariant=' + Color__toString_impl_hpzmaq(this.ed1_1) + ', ');
    this_0.q7('surfaceTint=' + Color__toString_impl_hpzmaq(this.fd1_1) + ', ');
    this_0.q7('inverseSurface=' + Color__toString_impl_hpzmaq(this.gd1_1) + ', ');
    this_0.q7('inverseOnSurface=' + Color__toString_impl_hpzmaq(this.hd1_1) + ', ');
    this_0.q7('error=' + Color__toString_impl_hpzmaq(this.id1_1) + ', ');
    this_0.q7('onError=' + Color__toString_impl_hpzmaq(this.jd1_1) + ', ');
    this_0.q7('errorContainer=' + Color__toString_impl_hpzmaq(this.kd1_1) + ', ');
    this_0.q7('onErrorContainer=' + Color__toString_impl_hpzmaq(this.ld1_1) + ', ');
    this_0.q7('outline=' + Color__toString_impl_hpzmaq(this.md1_1) + ', ');
    this_0.q7('outlineVariant=' + Color__toString_impl_hpzmaq(this.nd1_1) + ', ');
    this_0.q7('scrim=' + Color__toString_impl_hpzmaq(this.od1_1) + ', ');
    this_0.q7('surfaceBright=' + Color__toString_impl_hpzmaq(this.pd1_1) + ', ');
    this_0.q7('surfaceDim=' + Color__toString_impl_hpzmaq(this.qd1_1) + ', ');
    this_0.q7('surfaceContainer=' + Color__toString_impl_hpzmaq(this.rd1_1) + ', ');
    this_0.q7('surfaceContainerHigh=' + Color__toString_impl_hpzmaq(this.sd1_1) + ', ');
    this_0.q7('surfaceContainerHighest=' + Color__toString_impl_hpzmaq(this.td1_1) + ', ');
    this_0.q7('surfaceContainerLow=' + Color__toString_impl_hpzmaq(this.ud1_1) + ', ');
    this_0.q7('surfaceContainerLowest=' + Color__toString_impl_hpzmaq(this.vd1_1) + ', ');
    this_0.q7('primaryFixed=' + Color__toString_impl_hpzmaq(this.wd1_1) + ', ');
    this_0.q7('primaryFixedDim=' + Color__toString_impl_hpzmaq(this.xd1_1) + ', ');
    this_0.q7('onPrimaryFixed=' + Color__toString_impl_hpzmaq(this.pd0_1) + ', ');
    this_0.q7('onPrimaryFixedVariant=' + Color__toString_impl_hpzmaq(this.zd1_1) + ', ');
    this_0.q7('secondaryFixed=' + Color__toString_impl_hpzmaq(this.ad2_1) + ', ');
    this_0.q7('secondaryFixedDim=' + Color__toString_impl_hpzmaq(this.bd2_1) + ', ');
    this_0.q7('onSecondaryFixed=' + Color__toString_impl_hpzmaq(this.cd2_1) + ', ');
    this_0.q7('onSecondaryFixedVariant=' + Color__toString_impl_hpzmaq(this.dd2_1) + ', ');
    this_0.q7('tertiaryFixed=' + Color__toString_impl_hpzmaq(this.ed2_1) + ', ');
    this_0.q7('tertiaryFixedDim=' + Color__toString_impl_hpzmaq(this.fd2_1) + ', ');
    this_0.q7('onTertiaryFixed=' + Color__toString_impl_hpzmaq(this.gd2_1) + ', ');
    this_0.q7('onTertiaryFixedVariant=' + Color__toString_impl_hpzmaq(this.hd2_1) + ', ');
    this_0.q7(')');
    return this_0.toString();
  };
  function fromToken(_this__u8e3s4, value) {
    _init_properties_ColorScheme_kt__xhtsty();
    var tmp;
    switch (value.i2_1) {
      case 0:
        tmp = _this__u8e3s4.zd0_1;
        break;
      case 1:
        tmp = _this__u8e3s4.id1_1;
        break;
      case 2:
        tmp = _this__u8e3s4.kd1_1;
        break;
      case 3:
        tmp = _this__u8e3s4.hd1_1;
        break;
      case 4:
        tmp = _this__u8e3s4.qd0_1;
        break;
      case 5:
        tmp = _this__u8e3s4.gd1_1;
        break;
      case 6:
        tmp = _this__u8e3s4.ad1_1;
        break;
      case 7:
        tmp = _this__u8e3s4.jd1_1;
        break;
      case 8:
        tmp = _this__u8e3s4.ld1_1;
        break;
      case 9:
        tmp = _this__u8e3s4.nd0_1;
        break;
      case 10:
        tmp = _this__u8e3s4.pd0_1;
        break;
      case 13:
        tmp = _this__u8e3s4.sd0_1;
        break;
      case 14:
        tmp = _this__u8e3s4.ud0_1;
        break;
      case 17:
        tmp = _this__u8e3s4.cd1_1;
        break;
      case 18:
        tmp = _this__u8e3s4.ed1_1;
        break;
      case 42:
        tmp = _this__u8e3s4.fd1_1;
        break;
      case 19:
        tmp = _this__u8e3s4.wd0_1;
        break;
      case 20:
        tmp = _this__u8e3s4.yd0_1;
        break;
      case 23:
        tmp = _this__u8e3s4.md1_1;
        break;
      case 24:
        tmp = _this__u8e3s4.nd1_1;
        break;
      case 25:
        tmp = _this__u8e3s4.md0_1;
        break;
      case 26:
        tmp = _this__u8e3s4.od0_1;
        break;
      case 29:
        tmp = _this__u8e3s4.od1_1;
        break;
      case 30:
        tmp = _this__u8e3s4.rd0_1;
        break;
      case 31:
        tmp = _this__u8e3s4.td0_1;
        break;
      case 34:
        tmp = _this__u8e3s4.bd1_1;
        break;
      case 43:
        tmp = _this__u8e3s4.dd1_1;
        break;
      case 35:
        tmp = _this__u8e3s4.pd1_1;
        break;
      case 36:
        tmp = _this__u8e3s4.rd1_1;
        break;
      case 37:
        tmp = _this__u8e3s4.sd1_1;
        break;
      case 38:
        tmp = _this__u8e3s4.td1_1;
        break;
      case 39:
        tmp = _this__u8e3s4.ud1_1;
        break;
      case 40:
        tmp = _this__u8e3s4.vd1_1;
        break;
      case 41:
        tmp = _this__u8e3s4.qd1_1;
        break;
      case 44:
        tmp = _this__u8e3s4.vd0_1;
        break;
      case 45:
        tmp = _this__u8e3s4.xd0_1;
        break;
      case 27:
        tmp = _this__u8e3s4.wd1_1;
        break;
      case 28:
        tmp = _this__u8e3s4.xd1_1;
        break;
      case 11:
        tmp = _this__u8e3s4.yd1_1;
        break;
      case 12:
        tmp = _this__u8e3s4.zd1_1;
        break;
      case 32:
        tmp = _this__u8e3s4.ad2_1;
        break;
      case 33:
        tmp = _this__u8e3s4.bd2_1;
        break;
      case 15:
        tmp = _this__u8e3s4.cd2_1;
        break;
      case 16:
        tmp = _this__u8e3s4.dd2_1;
        break;
      case 46:
        tmp = _this__u8e3s4.ed2_1;
        break;
      case 47:
        tmp = _this__u8e3s4.fd2_1;
        break;
      case 21:
        tmp = _this__u8e3s4.gd2_1;
        break;
      case 22:
        tmp = _this__u8e3s4.hd2_1;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function contentColorFor(_this__u8e3s4, backgroundColor) {
    _init_properties_ColorScheme_kt__xhtsty();
    return equals(backgroundColor, _this__u8e3s4.md0_1) ? _this__u8e3s4.nd0_1 : equals(backgroundColor, _this__u8e3s4.rd0_1) ? _this__u8e3s4.sd0_1 : equals(backgroundColor, _this__u8e3s4.vd0_1) ? _this__u8e3s4.wd0_1 : equals(backgroundColor, _this__u8e3s4.zd0_1) ? _this__u8e3s4.ad1_1 : equals(backgroundColor, _this__u8e3s4.id1_1) ? _this__u8e3s4.jd1_1 : equals(backgroundColor, _this__u8e3s4.od0_1) ? _this__u8e3s4.pd0_1 : equals(backgroundColor, _this__u8e3s4.td0_1) ? _this__u8e3s4.ud0_1 : equals(backgroundColor, _this__u8e3s4.xd0_1) ? _this__u8e3s4.yd0_1 : equals(backgroundColor, _this__u8e3s4.kd1_1) ? _this__u8e3s4.ld1_1 : equals(backgroundColor, _this__u8e3s4.gd1_1) ? _this__u8e3s4.hd1_1 : equals(backgroundColor, _this__u8e3s4.bd1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.dd1_1) ? _this__u8e3s4.ed1_1 : equals(backgroundColor, _this__u8e3s4.pd1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.rd1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.sd1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.td1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.ud1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.vd1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.qd1_1) ? _this__u8e3s4.cd1_1 : equals(backgroundColor, _this__u8e3s4.wd1_1) ? _this__u8e3s4.yd1_1 : equals(backgroundColor, _this__u8e3s4.xd1_1) ? _this__u8e3s4.yd1_1 : equals(backgroundColor, _this__u8e3s4.ad2_1) ? _this__u8e3s4.cd2_1 : equals(backgroundColor, _this__u8e3s4.bd2_1) ? _this__u8e3s4.cd2_1 : equals(backgroundColor, _this__u8e3s4.ed2_1) ? _this__u8e3s4.gd2_1 : equals(backgroundColor, _this__u8e3s4.fd2_1) ? _this__u8e3s4.gd2_1 : Companion_getInstance_5().t4x_1;
  }
  function lightColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, surfaceDim, primaryFixed, primaryFixedDim, onPrimaryFixed, onPrimaryFixedVariant, secondaryFixed, secondaryFixedDim, onSecondaryFixed, onSecondaryFixedVariant, tertiaryFixed, tertiaryFixedDim, onTertiaryFixed, onTertiaryFixedVariant) {
    primary = primary === VOID ? ColorLightTokens_getInstance().bd8_1 : primary;
    onPrimary = onPrimary === VOID ? ColorLightTokens_getInstance().ld7_1 : onPrimary;
    primaryContainer = primaryContainer === VOID ? ColorLightTokens_getInstance().cd8_1 : primaryContainer;
    onPrimaryContainer = onPrimaryContainer === VOID ? ColorLightTokens_getInstance().md7_1 : onPrimaryContainer;
    inversePrimary = inversePrimary === VOID ? ColorLightTokens_getInstance().gd7_1 : inversePrimary;
    secondary = secondary === VOID ? ColorLightTokens_getInstance().gd8_1 : secondary;
    onSecondary = onSecondary === VOID ? ColorLightTokens_getInstance().pd7_1 : onSecondary;
    secondaryContainer = secondaryContainer === VOID ? ColorLightTokens_getInstance().hd8_1 : secondaryContainer;
    onSecondaryContainer = onSecondaryContainer === VOID ? ColorLightTokens_getInstance().qd7_1 : onSecondaryContainer;
    tertiary = tertiary === VOID ? ColorLightTokens_getInstance().ud8_1 : tertiary;
    onTertiary = onTertiary === VOID ? ColorLightTokens_getInstance().vd7_1 : onTertiary;
    tertiaryContainer = tertiaryContainer === VOID ? ColorLightTokens_getInstance().vd8_1 : tertiaryContainer;
    onTertiaryContainer = onTertiaryContainer === VOID ? ColorLightTokens_getInstance().wd7_1 : onTertiaryContainer;
    background = background === VOID ? ColorLightTokens_getInstance().cd7_1 : background;
    onBackground = onBackground === VOID ? ColorLightTokens_getInstance().id7_1 : onBackground;
    surface = surface === VOID ? ColorLightTokens_getInstance().kd8_1 : surface;
    onSurface = onSurface === VOID ? ColorLightTokens_getInstance().td7_1 : onSurface;
    surfaceVariant = surfaceVariant === VOID ? ColorLightTokens_getInstance().td8_1 : surfaceVariant;
    onSurfaceVariant = onSurfaceVariant === VOID ? ColorLightTokens_getInstance().ud7_1 : onSurfaceVariant;
    surfaceTint = surfaceTint === VOID ? primary : surfaceTint;
    inverseSurface = inverseSurface === VOID ? ColorLightTokens_getInstance().hd7_1 : inverseSurface;
    inverseOnSurface = inverseOnSurface === VOID ? ColorLightTokens_getInstance().fd7_1 : inverseOnSurface;
    error = error === VOID ? ColorLightTokens_getInstance().dd7_1 : error;
    onError = onError === VOID ? ColorLightTokens_getInstance().jd7_1 : onError;
    errorContainer = errorContainer === VOID ? ColorLightTokens_getInstance().ed7_1 : errorContainer;
    onErrorContainer = onErrorContainer === VOID ? ColorLightTokens_getInstance().kd7_1 : onErrorContainer;
    outline = outline === VOID ? ColorLightTokens_getInstance().zd7_1 : outline;
    outlineVariant = outlineVariant === VOID ? ColorLightTokens_getInstance().ad8_1 : outlineVariant;
    scrim = scrim === VOID ? ColorLightTokens_getInstance().fd8_1 : scrim;
    surfaceBright = surfaceBright === VOID ? ColorLightTokens_getInstance().ld8_1 : surfaceBright;
    surfaceContainer = surfaceContainer === VOID ? ColorLightTokens_getInstance().md8_1 : surfaceContainer;
    surfaceContainerHigh = surfaceContainerHigh === VOID ? ColorLightTokens_getInstance().nd8_1 : surfaceContainerHigh;
    surfaceContainerHighest = surfaceContainerHighest === VOID ? ColorLightTokens_getInstance().od8_1 : surfaceContainerHighest;
    surfaceContainerLow = surfaceContainerLow === VOID ? ColorLightTokens_getInstance().pd8_1 : surfaceContainerLow;
    surfaceContainerLowest = surfaceContainerLowest === VOID ? ColorLightTokens_getInstance().qd8_1 : surfaceContainerLowest;
    surfaceDim = surfaceDim === VOID ? ColorLightTokens_getInstance().rd8_1 : surfaceDim;
    primaryFixed = primaryFixed === VOID ? ColorLightTokens_getInstance().dd8_1 : primaryFixed;
    primaryFixedDim = primaryFixedDim === VOID ? ColorLightTokens_getInstance().ed8_1 : primaryFixedDim;
    onPrimaryFixed = onPrimaryFixed === VOID ? ColorLightTokens_getInstance().nd7_1 : onPrimaryFixed;
    onPrimaryFixedVariant = onPrimaryFixedVariant === VOID ? ColorLightTokens_getInstance().od7_1 : onPrimaryFixedVariant;
    secondaryFixed = secondaryFixed === VOID ? ColorLightTokens_getInstance().id8_1 : secondaryFixed;
    secondaryFixedDim = secondaryFixedDim === VOID ? ColorLightTokens_getInstance().jd8_1 : secondaryFixedDim;
    onSecondaryFixed = onSecondaryFixed === VOID ? ColorLightTokens_getInstance().rd7_1 : onSecondaryFixed;
    onSecondaryFixedVariant = onSecondaryFixedVariant === VOID ? ColorLightTokens_getInstance().sd7_1 : onSecondaryFixedVariant;
    tertiaryFixed = tertiaryFixed === VOID ? ColorLightTokens_getInstance().wd8_1 : tertiaryFixed;
    tertiaryFixedDim = tertiaryFixedDim === VOID ? ColorLightTokens_getInstance().xd8_1 : tertiaryFixedDim;
    onTertiaryFixed = onTertiaryFixed === VOID ? ColorLightTokens_getInstance().xd7_1 : onTertiaryFixed;
    onTertiaryFixedVariant = onTertiaryFixedVariant === VOID ? ColorLightTokens_getInstance().yd7_1 : onTertiaryFixedVariant;
    _init_properties_ColorScheme_kt__xhtsty();
    return new ColorScheme(primary, onPrimary, primaryContainer, onPrimaryContainer, inversePrimary, secondary, onSecondary, secondaryContainer, onSecondaryContainer, tertiary, onTertiary, tertiaryContainer, onTertiaryContainer, background, onBackground, surface, onSurface, surfaceVariant, onSurfaceVariant, surfaceTint, inverseSurface, inverseOnSurface, error, onError, errorContainer, onErrorContainer, outline, outlineVariant, scrim, surfaceBright, surfaceDim, surfaceContainer, surfaceContainerHigh, surfaceContainerHighest, surfaceContainerLow, surfaceContainerLowest, primaryFixed, primaryFixedDim, onPrimaryFixed, onPrimaryFixedVariant, secondaryFixed, secondaryFixedDim, onSecondaryFixed, onSecondaryFixedVariant, tertiaryFixed, tertiaryFixedDim, onTertiaryFixed, onTertiaryFixedVariant);
  }
  function contentColorFor_0(backgroundColor, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    $composer_0.m1y(89373914);
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_0 = contentColorFor(MaterialTheme_instance.kd0($composer_0, 6), backgroundColor);
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = this_0;
    } else {
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var this_1 = get_LocalContentColor();
      var $composer_1 = $composer_0;
      tmp = $composer_1.q1z(this_1).v4y_1;
    }
    var tmp1_group = tmp;
    $composer_0.n1y();
    return tmp1_group;
  }
  function applyTonalElevation(_this__u8e3s4, backgroundColor, elevation, $composer, $changed) {
    _init_properties_ColorScheme_kt__xhtsty();
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalTonalElevationEnabled();
    var $composer_1 = $composer_0;
    var tonalElevationEnabled = $composer_1.q1z(this_0);
    var tmp;
    if (equals(backgroundColor, _this__u8e3s4.bd1_1) && tonalElevationEnabled) {
      tmp = surfaceColorAtElevation(_this__u8e3s4, elevation);
    } else {
      tmp = backgroundColor;
    }
    return tmp;
  }
  function surfaceColorAtElevation(_this__u8e3s4, elevation) {
    _init_properties_ColorScheme_kt__xhtsty();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    if (equals(elevation, tmp$ret$0))
      return _this__u8e3s4.bd1_1;
    // Inline function 'kotlin.math.ln' call
    var x = _Dp___get_value__impl__geb1vb(elevation) + 1;
    var alpha = (4.5 * Math.log(x) + 2.0) / 100.0;
    return compositeOver(Color__copy$default_impl_ectz3s(_this__u8e3s4.fd1_1, alpha), _this__u8e3s4.bd1_1);
  }
  function LocalTonalElevationEnabled$lambda() {
    _init_properties_ColorScheme_kt__xhtsty();
    return true;
  }
  var properties_initialized_ColorScheme_kt_ox8mco;
  function _init_properties_ColorScheme_kt__xhtsty() {
    if (!properties_initialized_ColorScheme_kt_ox8mco) {
      properties_initialized_ColorScheme_kt_ox8mco = true;
      LocalTonalElevationEnabled = staticCompositionLocalOf(LocalTonalElevationEnabled$lambda);
      androidx_compose_material3_ColorScheme$stable = 0;
    }
  }
  var androidx_compose_material3_ComposeMaterial3Flags$stable;
  function get_LocalContentColor() {
    _init_properties_ContentColor_kt__5mda8a();
    return LocalContentColor;
  }
  var LocalContentColor;
  function LocalContentColor$lambda() {
    _init_properties_ContentColor_kt__5mda8a();
    return new Color(Companion_getInstance_5().h4x_1);
  }
  var properties_initialized_ContentColor_kt_sc8rw;
  function _init_properties_ContentColor_kt__5mda8a() {
    if (!properties_initialized_ContentColor_kt_sc8rw) {
      properties_initialized_ContentColor_kt_sc8rw = true;
      LocalContentColor = compositionLocalOf(VOID, LocalContentColor$lambda);
    }
  }
  var androidx_compose_material3_DividerDefaults$stable;
  var androidx_compose_material3_DragHandleColors$stable;
  var androidx_compose_material3_DragHandleShapes$stable;
  var androidx_compose_material3_DragHandleSizes$stable;
  var androidx_compose_material3_VerticalDragHandleDefaults$stable;
  var androidx_compose_material3_IconButtonColors$stable;
  var androidx_compose_material3_IconToggleButtonColors$stable;
  var androidx_compose_material3_IconButtonShapes$stable;
  var androidx_compose_material3_IconToggleButtonShapes$stable;
  var androidx_compose_material3_IconButtonDefaults$stable;
  function get_MinimumInteractiveTopAlignmentLine() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return MinimumInteractiveTopAlignmentLine;
  }
  var MinimumInteractiveTopAlignmentLine;
  function get_MinimumInteractiveLeftAlignmentLine() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return MinimumInteractiveLeftAlignmentLine;
  }
  var MinimumInteractiveLeftAlignmentLine;
  var LocalMinimumInteractiveComponentEnforcement;
  function get_LocalMinimumInteractiveComponentSize() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return LocalMinimumInteractiveComponentSize;
  }
  var LocalMinimumInteractiveComponentSize;
  var androidx_compose_material3_MinimumInteractiveModifier$stable;
  var androidx_compose_material3_MinimumInteractiveModifierNode$stable;
  function minimumInteractiveComponentSize(_this__u8e3s4) {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return _this__u8e3s4.e6j(MinimumInteractiveModifier_getInstance());
  }
  function MinimumInteractiveModifier() {
    MinimumInteractiveModifier_instance = this;
    ModifierNodeElement.call(this);
  }
  protoOf(MinimumInteractiveModifier).f2b = function () {
    return new MinimumInteractiveModifierNode();
  };
  protoOf(MinimumInteractiveModifier).zd8 = function (node) {
  };
  protoOf(MinimumInteractiveModifier).h6s = function (node) {
    return this.zd8(node instanceof MinimumInteractiveModifierNode ? node : THROW_CCE());
  };
  protoOf(MinimumInteractiveModifier).hashCode = function () {
    return identityHashCode(this);
  };
  protoOf(MinimumInteractiveModifier).equals = function (other) {
    return other === this;
  };
  var MinimumInteractiveModifier_instance;
  function MinimumInteractiveModifier_getInstance() {
    if (MinimumInteractiveModifier_instance == null)
      new MinimumInteractiveModifier();
    return MinimumInteractiveModifier_instance;
  }
  function updateAlignmentLines($this, sizePx, placeable) {
    var cache = getAlignmentLinesCache($this);
    var tmp2 = get_MinimumInteractiveLeftAlignmentLine();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_0 = (sizePx - placeable.n6s_1 | 0) / 2.0;
    var tmp;
    if (isNaN_0(this_0)) {
      tmp = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp = roundToInt(this_0);
    }
    var tmp$ret$0 = tmp;
    // Inline function 'kotlin.collections.set' call
    var value = coerceAtLeast(tmp$ret$0, 0);
    cache.y1(tmp2, value);
    var tmp2_0 = get_MinimumInteractiveTopAlignmentLine();
    // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
    var this_1 = (sizePx - placeable.o6s_1 | 0) / 2.0;
    var tmp_0;
    if (isNaN_0(this_1)) {
      tmp_0 = 0;
    } else {
      // Inline function 'kotlin.math.roundToInt' call
      tmp_0 = roundToInt(this_1);
    }
    var tmp$ret$3 = tmp_0;
    // Inline function 'kotlin.collections.set' call
    var value_0 = coerceAtLeast(tmp$ret$3, 0);
    cache.y1(tmp2_0, value_0);
  }
  function getAlignmentLinesCache($this) {
    var tmp0_elvis_lhs = $this.od9_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = LinkedHashMap_init_$Create$(2);
      $this.od9_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function MinimumInteractiveModifierNode$measure$lambda($width, $placeable, $height) {
    return function ($this$layout) {
      // Inline function 'kotlin.math.roundToInt' call
      var this_0 = ($width - $placeable.n6s_1 | 0) / 2.0;
      var centerX = roundToInt(this_0);
      // Inline function 'kotlin.math.roundToInt' call
      var this_1 = ($height - $placeable.o6s_1 | 0) / 2.0;
      var centerY = roundToInt(this_1);
      $this$layout.q7t($placeable, centerX, centerY);
      return Unit_instance;
    };
  }
  function MinimumInteractiveModifierNode() {
    Node.call(this);
    this.od9_1 = null;
  }
  protoOf(MinimumInteractiveModifierNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    var tmp0 = currentValueOf(this, get_LocalMinimumInteractiveComponentSize()).z47_1;
    // Inline function 'androidx.compose.ui.unit.dp' call
    // Inline function 'androidx.compose.ui.unit.coerceAtLeast' call
    var minimumValue = _Dp___init__impl__ms3zkb(0);
    var size = _Dp___init__impl__ms3zkb(coerceAtLeast_0(_Dp___get_value__impl__geb1vb(tmp0), _Dp___get_value__impl__geb1vb(minimumValue)));
    var placeable = measurable.m6s(constraints);
    var tmp;
    if (this.a6k_1) {
      var tmp_0;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
        // Inline function 'androidx.compose.ui.unit.dp' call
        var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
        tmp_0 = Dp__compareTo_impl_tlg3dl(size, tmp$ret$3) > 0;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      tmp = false;
    }
    var enforcement = tmp;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(size))) {
      tmp_1 = _this__u8e3s4.o47(size);
    } else {
      tmp_1 = 0;
    }
    var sizePx = tmp_1;
    var tmp_2;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a = placeable.n6s_1;
      tmp_2 = Math.max(a, sizePx);
    } else {
      tmp_2 = placeable.n6s_1;
    }
    var width = tmp_2;
    var tmp_3;
    if (enforcement) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var a_0 = placeable.o6s_1;
      tmp_3 = Math.max(a_0, sizePx);
    } else {
      tmp_3 = placeable.o6s_1;
    }
    var height = tmp_3;
    if (enforcement) {
      updateAlignmentLines(this, sizePx, placeable);
    }
    var tmp0_elvis_lhs = this.od9_1;
    var tmp_4 = tmp0_elvis_lhs == null ? emptyMap() : tmp0_elvis_lhs;
    return _this__u8e3s4.n7r(width, height, tmp_4, MinimumInteractiveModifierNode$measure$lambda(width, placeable, height));
  };
  function min$ref() {
    return constructCallableReference(function (p0, p1) {
      // Inline function 'kotlin.math.min' call
      return Math.min(p0, p1);
    }, 2, 0, 43, 'min');
  }
  function LocalMinimumInteractiveComponentEnforcement$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    return true;
  }
  function LocalMinimumInteractiveComponentSize$lambda() {
    _init_properties_InteractiveComponentSize_kt__58cq2s();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(48);
    return new Dp(tmp$ret$0);
  }
  var properties_initialized_InteractiveComponentSize_kt_3r58bm;
  function _init_properties_InteractiveComponentSize_kt__58cq2s() {
    if (!properties_initialized_InteractiveComponentSize_kt_3r58bm) {
      properties_initialized_InteractiveComponentSize_kt_3r58bm = true;
      MinimumInteractiveTopAlignmentLine = new HorizontalAlignmentLine(min$ref());
      MinimumInteractiveLeftAlignmentLine = new VerticalAlignmentLine(min$ref());
      LocalMinimumInteractiveComponentEnforcement = staticCompositionLocalOf(LocalMinimumInteractiveComponentEnforcement$lambda);
      LocalMinimumInteractiveComponentSize = staticCompositionLocalOf(LocalMinimumInteractiveComponentSize$lambda);
      androidx_compose_material3_MinimumInteractiveModifier$stable = 0;
      androidx_compose_material3_MinimumInteractiveModifierNode$stable = 8;
    }
  }
  var androidx_compose_material3_ListItemDefaults$stable;
  var androidx_compose_material3_ListItemColors$stable;
  var androidx_compose_material3_ListItemShapes$stable;
  var androidx_compose_material3_ListItemElevation$stable;
  var androidx_compose_material3_LoadingIndicatorDefaults$stable;
  var androidx_compose_material3_MaterialShapes$stable;
  var LocalUsingExpressiveTheme;
  function get__localMaterialTheme() {
    _init_properties_MaterialTheme_kt__ccmets();
    return _localMaterialTheme;
  }
  var _localMaterialTheme;
  var androidx_compose_material3_MaterialTheme_Values$stable;
  var androidx_compose_material3_MaterialTheme$stable;
  function Values(colorScheme, typography, shapes, motionScheme) {
    colorScheme = colorScheme === VOID ? lightColorScheme() : colorScheme;
    typography = typography === VOID ? Typography_init_$Create$() : typography;
    shapes = shapes === VOID ? Shapes_init_$Create$() : shapes;
    motionScheme = motionScheme === VOID ? Companion_instance_0.pd9() : motionScheme;
    this.qd9_1 = colorScheme;
    this.rd9_1 = typography;
    this.sd9_1 = shapes;
    this.td9_1 = motionScheme;
  }
  protoOf(Values).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof Values))
      THROW_CCE();
    if (!equals(this.qd9_1, other.qd9_1))
      return false;
    if (!this.rd9_1.equals(other.rd9_1))
      return false;
    if (!this.sd9_1.equals(other.sd9_1))
      return false;
    if (!equals(this.td9_1, other.td9_1))
      return false;
    return true;
  };
  protoOf(Values).hashCode = function () {
    var result = hashCode(this.qd9_1);
    result = imul(31, result) + this.rd9_1.hashCode() | 0;
    result = imul(31, result) + this.sd9_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.td9_1) | 0;
    return result;
  };
  protoOf(Values).toString = function () {
    return 'Values(colorScheme=' + this.qd9_1.toString() + ', ' + ('typography=' + this.rd9_1.toString() + ', shapes=' + this.sd9_1.toString() + ', motionScheme=' + toString(this.td9_1) + ')');
  };
  function MaterialTheme() {
  }
  protoOf(MaterialTheme).kd0 = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = this.ud9();
    var $composer_1 = $composer_0;
    return $composer_1.q1z(this_0).qd9_1;
  };
  protoOf(MaterialTheme).bd7 = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = this.ud9();
    var $composer_1 = $composer_0;
    return $composer_1.q1z(this_0).rd9_1;
  };
  protoOf(MaterialTheme).vd9 = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = this.ud9();
    var $composer_1 = $composer_0;
    return $composer_1.q1z(this_0).sd9_1;
  };
  protoOf(MaterialTheme).wd9 = function ($composer, $changed) {
    var $composer_0 = $composer;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = this.ud9();
    var $composer_1 = $composer_0;
    return $composer_1.q1z(this_0).td9_1;
  };
  protoOf(MaterialTheme).ud9 = function () {
    return get__localMaterialTheme();
  };
  var MaterialTheme_instance;
  function MaterialTheme_getInstance() {
    return MaterialTheme_instance;
  }
  function MaterialTheme_0(colorScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(-449719819);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.g1z(colorScheme_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.g1z(shapes_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.g1z(typography_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 2048 : 1024);
    if ($composer_0.n1z(!(($dirty & 1171) === 1170), $dirty & 1)) {
      $composer_0.q1y();
      if (($changed & 1) === 0 || $composer_0.i1y()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.kd0($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          shapes_0._v = MaterialTheme_instance.vd9($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          typography_0._v = MaterialTheme_instance.bd7($composer_0, 6);
          $dirty = $dirty & -897;
        }
      } else {
        $composer_0.y1y();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
      }
      $composer_0.r1y();
      MaterialTheme_1(colorScheme_0._v, MaterialTheme_instance.wd9($composer_0, 6), shapes_0._v, typography_0._v, content, $composer_0, 14 & $dirty | 896 & $dirty << 3 | 7168 & $dirty << 3 | 57344 & $dirty << 3, 0);
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(MaterialTheme$lambda(colorScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function MaterialTheme_1(colorScheme, motionScheme, shapes, typography, content, $composer, $changed, $default) {
    _init_properties_MaterialTheme_kt__ccmets();
    var colorScheme_0 = {_v: colorScheme};
    var motionScheme_0 = {_v: motionScheme};
    var shapes_0 = {_v: shapes};
    var typography_0 = {_v: typography};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(904511636);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | (($default & 1) === 0 && $composer_0.g1z(colorScheme_0._v) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | (($default & 2) === 0 && $composer_0.g1z(motionScheme_0._v) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | (($default & 4) === 0 && $composer_0.g1z(shapes_0._v) ? 256 : 128);
    if (($changed & 3072) === 0)
      $dirty = $dirty | (($default & 8) === 0 && $composer_0.g1z(typography_0._v) ? 2048 : 1024);
    if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 16384 : 8192);
    if ($composer_0.n1z(!(($dirty & 9363) === 9362), $dirty & 1)) {
      $composer_0.q1y();
      if (($changed & 1) === 0 || $composer_0.i1y()) {
        if (!(($default & 1) === 0)) {
          colorScheme_0._v = MaterialTheme_instance.kd0($composer_0, 6);
          $dirty = $dirty & -15;
        }
        if (!(($default & 2) === 0)) {
          motionScheme_0._v = MaterialTheme_instance.wd9($composer_0, 6);
          $dirty = $dirty & -113;
        }
        if (!(($default & 4) === 0)) {
          shapes_0._v = MaterialTheme_instance.vd9($composer_0, 6);
          $dirty = $dirty & -897;
        }
        if (!(($default & 8) === 0)) {
          typography_0._v = MaterialTheme_instance.bd7($composer_0, 6);
          $dirty = $dirty & -7169;
        }
      } else {
        $composer_0.y1y();
        if (!(($default & 1) === 0))
          $dirty = $dirty & -15;
        if (!(($default & 2) === 0))
          $dirty = $dirty & -113;
        if (!(($default & 4) === 0))
          $dirty = $dirty & -897;
        if (!(($default & 8) === 0))
          $dirty = $dirty & -7169;
      }
      $composer_0.r1y();
      var theme = new Values(colorScheme_0._v, typography_0._v, shapes_0._v, motionScheme_0._v);
      var rippleIndication = ripple();
      var selectionColors = rememberTextSelectionColors(colorScheme_0._v, $composer_0, 14 & $dirty);
      var tmp = [get__localMaterialTheme().v29(theme), get_LocalIndication().v29(rippleIndication), get_LocalTextSelectionColors().v29(selectionColors)];
      // Inline function 'kotlin.run' call
      var dispatchReceiver = rememberComposableLambda(-1750539308, true, MaterialTheme$lambda_0(typography_0, content), $composer_0, 54);
      // Inline function 'androidx.compose.runtime.remember' call
      var $composer_1 = $composer_0;
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = $composer_1.g1z(dispatchReceiver);
      // Inline function 'kotlin.let' call
      var it = $composer_1.e1z();
      var tmp_0;
      if (invalid || it === Companion_getInstance().f1y_1) {
        var value = ComposableLambda$invoke$ref(dispatchReceiver);
        $composer_1.f1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp$ret$0 = tmp_0;
      CompositionLocalProvider(tmp, tmp$ret$0, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(MaterialTheme$lambda_1(colorScheme_0, motionScheme_0, shapes_0, typography_0, content, $changed, $default));
    }
  }
  function rememberTextSelectionColors(colorScheme, $composer, $changed) {
    _init_properties_MaterialTheme_kt__ccmets();
    var $composer_0 = $composer;
    var primaryColor = colorScheme.md0_1;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_0.k1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(primaryColor)));
    // Inline function 'kotlin.let' call
    var it = $composer_0.e1z();
    var tmp;
    if (invalid || it === Companion_getInstance().f1y_1) {
      var value = new TextSelectionColors(primaryColor, Color__copy$default_impl_ectz3s(primaryColor, 0.4));
      $composer_0.f1z(value);
      tmp = value;
    } else {
      tmp = it;
    }
    return tmp;
  }
  function LocalUsingExpressiveTheme$lambda() {
    _init_properties_MaterialTheme_kt__ccmets();
    return false;
  }
  function _localMaterialTheme$lambda() {
    _init_properties_MaterialTheme_kt__ccmets();
    return new Values();
  }
  function MaterialTheme$lambda($colorScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme_0($colorScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  function MaterialTheme$lambda$lambda($typography, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.n1z(!(($changed & 3) === 2), $changed & 1)) {
        ProvideTextStyle($typography._v.gd6_1, $content, $composer_0, 0);
        tmp = Unit_instance;
      } else {
        $composer_0.y1y();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function MaterialTheme$lambda_0($typography, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.n1z(!(($changed & 3) === 2), $changed & 1)) {
        // Inline function 'kotlin.run' call
        var dispatchReceiver = rememberComposableLambda(-241536773, true, MaterialTheme$lambda$lambda($typography, $content), $composer_0, 54);
        // Inline function 'androidx.compose.runtime.remember' call
        var $composer_1 = $composer_0;
        // Inline function 'androidx.compose.runtime.cache' call
        var invalid = $composer_1.g1z(dispatchReceiver);
        // Inline function 'kotlin.let' call
        var it = $composer_1.e1z();
        var tmp_0;
        if (invalid || it === Companion_getInstance().f1y_1) {
          var value = ComposableLambda$invoke$ref(dispatchReceiver);
          $composer_1.f1z(value);
          tmp_0 = value;
        } else {
          tmp_0 = it;
        }
        var tmp$ret$0 = tmp_0;
        EnsurePrecisionPointerListenersRegistered(tmp$ret$0, $composer_0, 6);
        tmp = Unit_instance;
      } else {
        $composer_0.y1y();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function MaterialTheme$lambda_1($colorScheme, $motionScheme, $shapes, $typography, $content, $$changed, $$default) {
    return function ($composer, $force) {
      MaterialTheme_1($colorScheme._v, $motionScheme._v, $shapes._v, $typography._v, $content, $composer, updateChangedFlags($$changed | 1), $$default);
      return Unit_instance;
    };
  }
  var properties_initialized_MaterialTheme_kt_8j16em;
  function _init_properties_MaterialTheme_kt__ccmets() {
    if (!properties_initialized_MaterialTheme_kt_8j16em) {
      properties_initialized_MaterialTheme_kt_8j16em = true;
      LocalUsingExpressiveTheme = staticCompositionLocalOf(LocalUsingExpressiveTheme$lambda);
      _localMaterialTheme = staticCompositionLocalOf(_localMaterialTheme$lambda);
      androidx_compose_material3_MaterialTheme_Values$stable = 0;
      androidx_compose_material3_MaterialTheme$stable = 0;
    }
  }
  var androidx_compose_material3_MenuDefaults$stable;
  var androidx_compose_material3_SheetWindowInsets$stable;
  function Companion() {
  }
  protoOf(Companion).pd9 = function () {
    return StandardMotionSchemeImpl_getInstance();
  };
  var Companion_instance_0;
  function Companion_getInstance_14() {
    return Companion_instance_0;
  }
  function StandardMotionSchemeImpl() {
    StandardMotionSchemeImpl_instance = this;
    this.xd9_1 = spring(StandardMotionTokens_instance.dda_1, StandardMotionTokens_instance.eda_1);
    this.yd9_1 = spring(StandardMotionTokens_instance.hda_1, StandardMotionTokens_instance.ida_1);
    this.zd9_1 = spring(StandardMotionTokens_instance.lda_1, StandardMotionTokens_instance.mda_1);
    this.ada_1 = spring(StandardMotionTokens_instance.fda_1, StandardMotionTokens_instance.gda_1);
    this.bda_1 = spring(StandardMotionTokens_instance.jda_1, StandardMotionTokens_instance.kda_1);
    this.cda_1 = spring(StandardMotionTokens_instance.nda_1, StandardMotionTokens_instance.oda_1);
  }
  var StandardMotionSchemeImpl_instance;
  function StandardMotionSchemeImpl_getInstance() {
    if (StandardMotionSchemeImpl_instance == null)
      new StandardMotionSchemeImpl();
    return StandardMotionSchemeImpl_instance;
  }
  function get_shouldUsePrecisionPointerComponentSizing() {
    _init_properties_PrecisionPointer_kt__cwwh35();
    return shouldUsePrecisionPointerComponentSizing;
  }
  var shouldUsePrecisionPointerComponentSizing;
  var properties_initialized_PrecisionPointer_kt_6tjibl;
  function _init_properties_PrecisionPointer_kt__cwwh35() {
    if (!properties_initialized_PrecisionPointer_kt_6tjibl) {
      properties_initialized_PrecisionPointer_kt_6tjibl = true;
      shouldUsePrecisionPointerComponentSizing = mutableStateOf(false);
    }
  }
  function get_LocalRippleConfiguration() {
    _init_properties_Ripple_kt__d55ieo();
    return LocalRippleConfiguration;
  }
  var LocalRippleConfiguration;
  function get_DefaultBoundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultBoundedRipple;
  }
  var DefaultBoundedRipple;
  function get_DefaultUnboundedRipple() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultUnboundedRipple;
  }
  var DefaultUnboundedRipple;
  var androidx_compose_material3_RippleDefaults$stable;
  var androidx_compose_material3_RippleConfiguration$stable;
  function RippleConfiguration(color, rippleAlpha) {
    color = color === VOID ? Companion_getInstance_5().t4x_1 : color;
    rippleAlpha = rippleAlpha === VOID ? null : rippleAlpha;
    this.pda_1 = color;
    this.qda_1 = rippleAlpha;
  }
  protoOf(RippleConfiguration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleConfiguration))
      return false;
    if (!equals(this.pda_1, other.pda_1))
      return false;
    if (!equals(this.qda_1, other.qda_1))
      return false;
    return true;
  };
  protoOf(RippleConfiguration).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.pda_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.qda_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(RippleConfiguration).toString = function () {
    return 'RippleConfiguration(color=' + Color__toString_impl_hpzmaq(this.pda_1) + ', rippleAlpha=' + toString_0(this.qda_1) + ')';
  };
  function RippleNodeFactory_init_$Init$(bounded, radius, color, $this) {
    RippleNodeFactory.call($this, bounded, radius, null, color);
    return $this;
  }
  function RippleNodeFactory_init_$Create$(bounded, radius, color) {
    return RippleNodeFactory_init_$Init$(bounded, radius, color, objectCreate(protoOf(RippleNodeFactory)));
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0(function_0) {
    this.rda_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).s51 = function () {
    return this.rda_1().v4y_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).r2 = function () {
    return this.rda_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function RippleNodeFactory$create$lambda(this$0) {
    return function () {
      return new Color(this$0.vda_1);
    };
  }
  function RippleNodeFactory(bounded, radius, colorProducer, color) {
    this.sda_1 = bounded;
    this.tda_1 = radius;
    this.uda_1 = colorProducer;
    this.vda_1 = color;
  }
  protoOf(RippleNodeFactory).gb5 = function (interactionSource) {
    var tmp0_elvis_lhs = this.uda_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0 = RippleNodeFactory$create$lambda(this);
      tmp = new sam$androidx_compose_ui_graphics_ColorProducer$0(tmp_0);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var colorProducer = tmp;
    return new DelegatingThemeAwareRippleNode(interactionSource, this.sda_1, this.tda_1, colorProducer);
  };
  protoOf(RippleNodeFactory).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleNodeFactory))
      return false;
    if (!(this.sda_1 === other.sda_1))
      return false;
    if (!equals(this.tda_1, other.tda_1))
      return false;
    if (!equals(this.uda_1, other.uda_1))
      return false;
    return equals(this.vda_1, other.vda_1);
  };
  protoOf(RippleNodeFactory).hashCode = function () {
    var result = getBooleanHashCode(this.sda_1);
    result = imul(31, result) + Dp__hashCode_impl_sxkrra(this.tda_1) | 0;
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.uda_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.vda_1) | 0;
    return result;
  };
  function updateConfiguration($this) {
    observeReads($this, DelegatingThemeAwareRippleNode$updateConfiguration$lambda($this));
  }
  function attachNewRipple($this) {
    var tmp = DelegatingThemeAwareRippleNode$attachNewRipple$lambda($this);
    var calculateColor = new sam$androidx_compose_ui_graphics_ColorProducer$0_0(tmp);
    var calculateRippleAlpha = DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0($this);
    $this.qdb_1 = $this.t84(createRippleModifierNode($this.mdb_1, $this.ndb_1, $this.odb_1, calculateColor, calculateRippleAlpha));
  }
  function removeRipple($this) {
    var tmp0_safe_receiver = $this.qdb_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.v84(tmp0_safe_receiver);
    }
    $this.qdb_1 = null;
  }
  function sam$androidx_compose_ui_graphics_ColorProducer$0_0(function_0) {
    this.rdb_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).s51 = function () {
    return this.rdb_1().v4y_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).r2 = function () {
    return this.rdb_1;
  };
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, ColorProducer) : false) {
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
  protoOf(sam$androidx_compose_ui_graphics_ColorProducer$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function DelegatingThemeAwareRippleNode$updateConfiguration$lambda(this$0) {
    return function () {
      var configuration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp;
      if (configuration == null) {
        removeRipple(this$0);
        tmp = Unit_instance;
      } else {
        var tmp_0;
        if (this$0.qdb_1 == null) {
          attachNewRipple(this$0);
          tmp_0 = Unit_instance;
        }
        tmp = tmp_0;
      }
      return Unit_instance;
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda(this$0) {
    return function () {
      var userDefinedColor = this$0.pdb_1.s51();
      var tmp;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(userDefinedColor), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp = userDefinedColor;
      } else {
        var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
        var tmp_0;
        var tmp1_safe_receiver = rippleConfiguration == null ? null : rippleConfiguration.pda_1;
        var tmp_1;
        var tmp_2 = tmp1_safe_receiver;
        if ((tmp_2 == null ? null : new Color(tmp_2)) == null) {
          tmp_1 = null;
        } else {
          // Inline function 'androidx.compose.ui.graphics.isSpecified' call
          tmp_1 = !equals(_Color___get_value__impl__1pls5m(tmp1_safe_receiver), _ULong___init__impl__c78o9k(new Long(16, 0)));
        }
        if (tmp_1 === true) {
          tmp_0 = rippleConfiguration.pda_1;
        } else {
          tmp_0 = currentValueOf(this$0, get_LocalContentColor()).v4y_1;
        }
        tmp = tmp_0;
      }
      return new Color(tmp);
    };
  }
  function DelegatingThemeAwareRippleNode$attachNewRipple$lambda_0(this$0) {
    return function () {
      var rippleConfiguration = currentValueOf(this$0, get_LocalRippleConfiguration());
      var tmp1_elvis_lhs = rippleConfiguration == null ? null : rippleConfiguration.qda_1;
      return tmp1_elvis_lhs == null ? RippleDefaults_getInstance().sdb_1 : tmp1_elvis_lhs;
    };
  }
  function DelegatingThemeAwareRippleNode(interactionSource, bounded, radius, color) {
    DelegatingNode.call(this);
    this.mdb_1 = interactionSource;
    this.ndb_1 = bounded;
    this.odb_1 = radius;
    this.pdb_1 = color;
    this.qdb_1 = null;
  }
  protoOf(DelegatingThemeAwareRippleNode).g6k = function () {
    updateConfiguration(this);
  };
  protoOf(DelegatingThemeAwareRippleNode).w6q = function () {
    updateConfiguration(this);
  };
  function RippleDefaults() {
    RippleDefaults_instance = this;
    var tmp = this;
    tmp.sdb_1 = new RippleAlpha(0.16, 0.1, 0.08, 0.1);
  }
  var RippleDefaults_instance;
  function RippleDefaults_getInstance() {
    if (RippleDefaults_instance == null)
      new RippleDefaults();
    return RippleDefaults_instance;
  }
  function ripple(bounded, radius, color) {
    bounded = bounded === VOID ? true : bounded;
    radius = radius === VOID ? Companion_getInstance_0().c48_1 : radius;
    color = color === VOID ? Companion_getInstance_5().t4x_1 : color;
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (equals(radius, Companion_getInstance_0().c48_1) && equals(color, Companion_getInstance_5().t4x_1)) {
      var tmp_0;
      if (bounded) {
        return get_DefaultBoundedRipple();
      } else {
        tmp_0 = get_DefaultUnboundedRipple();
      }
      tmp = tmp_0;
    } else {
      tmp = RippleNodeFactory_init_$Create$(bounded, radius, color);
    }
    return tmp;
  }
  function LocalRippleConfiguration$lambda() {
    _init_properties_Ripple_kt__d55ieo();
    return new RippleConfiguration();
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      LocalRippleConfiguration = compositionLocalOf(VOID, LocalRippleConfiguration$lambda);
      DefaultBoundedRipple = RippleNodeFactory_init_$Create$(true, Companion_getInstance_0().c48_1, Companion_getInstance_5().t4x_1);
      DefaultUnboundedRipple = RippleNodeFactory_init_$Create$(false, Companion_getInstance_0().c48_1, Companion_getInstance_5().t4x_1);
      androidx_compose_material3_RippleDefaults$stable = 0;
      androidx_compose_material3_RippleConfiguration$stable = 0;
    }
  }
  var androidx_compose_material3_ScrimDefaults$stable;
  var LocalShapes;
  var androidx_compose_material3_Shapes$stable;
  var androidx_compose_material3_ShapeDefaults$stable;
  function get_value(_this__u8e3s4, $composer, $changed) {
    _init_properties_Shapes_kt__48nj2q();
    var $composer_0 = $composer;
    return fromToken_0(MaterialTheme_instance.vd9($composer_0, 6), _this__u8e3s4);
  }
  function Shapes_init_$Init$(extraSmall, small, medium, large, extraLarge, $this) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().tdb_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().udb_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().vdb_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().wdb_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().ydb_1 : extraLarge;
    Shapes.call($this, extraSmall, small, medium, large, extraLarge, ShapeDefaults_getInstance().xdb_1, ShapeDefaults_getInstance().zdb_1, ShapeDefaults_getInstance().adc_1);
    return $this;
  }
  function Shapes_init_$Create$(extraSmall, small, medium, large, extraLarge) {
    return Shapes_init_$Init$(extraSmall, small, medium, large, extraLarge, objectCreate(protoOf(Shapes)));
  }
  function Shapes(extraSmall, small, medium, large, extraLarge, largeIncreased, extraLargeIncreased, extraExtraLarge) {
    extraSmall = extraSmall === VOID ? ShapeDefaults_getInstance().tdb_1 : extraSmall;
    small = small === VOID ? ShapeDefaults_getInstance().udb_1 : small;
    medium = medium === VOID ? ShapeDefaults_getInstance().vdb_1 : medium;
    large = large === VOID ? ShapeDefaults_getInstance().wdb_1 : large;
    extraLarge = extraLarge === VOID ? ShapeDefaults_getInstance().ydb_1 : extraLarge;
    largeIncreased = largeIncreased === VOID ? ShapeDefaults_getInstance().xdb_1 : largeIncreased;
    extraLargeIncreased = extraLargeIncreased === VOID ? ShapeDefaults_getInstance().zdb_1 : extraLargeIncreased;
    extraExtraLarge = extraExtraLarge === VOID ? ShapeDefaults_getInstance().adc_1 : extraExtraLarge;
    this.ldc_1 = extraSmall;
    this.mdc_1 = small;
    this.ndc_1 = medium;
    this.odc_1 = large;
    this.pdc_1 = extraLarge;
    this.qdc_1 = largeIncreased;
    this.rdc_1 = extraLargeIncreased;
    this.sdc_1 = extraExtraLarge;
    this.tdc_1 = null;
    this.udc_1 = null;
    this.vdc_1 = null;
    this.wdc_1 = null;
    this.xdc_1 = null;
    this.ydc_1 = null;
    this.zdc_1 = null;
    this.add_1 = null;
    this.bdd_1 = null;
    this.cdd_1 = null;
    this.ddd_1 = null;
    this.edd_1 = null;
    this.fdd_1 = null;
    this.gdd_1 = null;
  }
  protoOf(Shapes).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Shapes))
      return false;
    if (!equals(this.ldc_1, other.ldc_1))
      return false;
    if (!equals(this.mdc_1, other.mdc_1))
      return false;
    if (!equals(this.ndc_1, other.ndc_1))
      return false;
    if (!equals(this.odc_1, other.odc_1))
      return false;
    if (!equals(this.pdc_1, other.pdc_1))
      return false;
    if (!equals(this.qdc_1, other.qdc_1))
      return false;
    if (!equals(this.rdc_1, other.rdc_1))
      return false;
    if (!equals(this.sdc_1, other.sdc_1))
      return false;
    return true;
  };
  protoOf(Shapes).hashCode = function () {
    var result = hashCode(this.ldc_1);
    result = imul(31, result) + hashCode(this.mdc_1) | 0;
    result = imul(31, result) + hashCode(this.ndc_1) | 0;
    result = imul(31, result) + hashCode(this.odc_1) | 0;
    result = imul(31, result) + hashCode(this.pdc_1) | 0;
    result = imul(31, result) + hashCode(this.qdc_1) | 0;
    result = imul(31, result) + hashCode(this.rdc_1) | 0;
    result = imul(31, result) + hashCode(this.sdc_1) | 0;
    return result;
  };
  protoOf(Shapes).toString = function () {
    return 'Shapes(' + ('extraSmall=' + toString(this.ldc_1) + ', ') + ('small=' + toString(this.mdc_1) + ', ') + ('medium=' + toString(this.ndc_1) + ', ') + ('large=' + toString(this.odc_1) + ', ') + ('largeIncreased=' + toString(this.qdc_1) + ', ') + ('extraLarge=' + toString(this.pdc_1) + ', ') + ('extralargeIncreased=' + toString(this.rdc_1) + ', ') + ('extraExtraLarge=' + toString(this.sdc_1) + ')');
  };
  function fromToken_0(_this__u8e3s4, value) {
    _init_properties_Shapes_kt__48nj2q();
    var tmp;
    switch (value.i2_1) {
      case 1:
        tmp = _this__u8e3s4.pdc_1;
        break;
      case 2:
        tmp = _this__u8e3s4.rdc_1;
        break;
      case 0:
        tmp = _this__u8e3s4.sdc_1;
        break;
      case 3:
        tmp = top(_this__u8e3s4.pdc_1);
        break;
      case 4:
        tmp = _this__u8e3s4.ldc_1;
        break;
      case 5:
        tmp = top(_this__u8e3s4.ldc_1);
        break;
      case 6:
        tmp = get_CircleShape();
        break;
      case 7:
        tmp = _this__u8e3s4.odc_1;
        break;
      case 9:
        tmp = _this__u8e3s4.qdc_1;
        break;
      case 8:
        tmp = end(_this__u8e3s4.odc_1);
        break;
      case 11:
        tmp = top(_this__u8e3s4.odc_1);
        break;
      case 12:
        tmp = _this__u8e3s4.ndc_1;
        break;
      case 13:
        tmp = get_RectangleShape();
        break;
      case 14:
        tmp = _this__u8e3s4.mdc_1;
        break;
      case 10:
        tmp = start(_this__u8e3s4.odc_1);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function ShapeDefaults() {
    ShapeDefaults_instance = this;
    this.tdb_1 = ShapeTokens_getInstance().ldd_1;
    this.udb_1 = ShapeTokens_getInstance().vdd_1;
    this.vdb_1 = ShapeTokens_getInstance().tdd_1;
    this.wdb_1 = ShapeTokens_getInstance().odd_1;
    this.xdb_1 = ShapeTokens_getInstance().qdd_1;
    this.ydb_1 = ShapeTokens_getInstance().idd_1;
    this.zdb_1 = ShapeTokens_getInstance().jdd_1;
    this.adc_1 = ShapeTokens_getInstance().hdd_1;
    this.bdc_1 = ShapeTokens_getInstance().dde_1;
    this.cdc_1 = ShapeTokens_getInstance().zdd_1;
    this.ddc_1 = ShapeTokens_getInstance().ede_1;
    this.edc_1 = ShapeTokens_getInstance().cde_1;
    this.fdc_1 = ShapeTokens_getInstance().ade_1;
    this.gdc_1 = ShapeTokens_getInstance().bde_1;
    this.hdc_1 = ShapeTokens_getInstance().xdd_1;
    this.idc_1 = ShapeTokens_getInstance().ydd_1;
    this.jdc_1 = ShapeTokens_getInstance().wdd_1;
    this.kdc_1 = CornerSize(100);
  }
  var ShapeDefaults_instance;
  function ShapeDefaults_getInstance() {
    if (ShapeDefaults_instance == null)
      new ShapeDefaults();
    return ShapeDefaults_instance;
  }
  function top(_this__u8e3s4, bottomSize) {
    bottomSize = bottomSize === VOID ? ShapeDefaults_getInstance().bdc_1 : bottomSize;
    _init_properties_Shapes_kt__48nj2q();
    return _this__u8e3s4.wbm(VOID, VOID, bottomSize, bottomSize);
  }
  function end(_this__u8e3s4, startSize) {
    startSize = startSize === VOID ? ShapeDefaults_getInstance().bdc_1 : startSize;
    _init_properties_Shapes_kt__48nj2q();
    return _this__u8e3s4.wbm(startSize, VOID, VOID, startSize);
  }
  function start(_this__u8e3s4, endSize) {
    endSize = endSize === VOID ? ShapeDefaults_getInstance().bdc_1 : endSize;
    _init_properties_Shapes_kt__48nj2q();
    return _this__u8e3s4.wbm(VOID, endSize, endSize);
  }
  function LocalShapes$lambda() {
    _init_properties_Shapes_kt__48nj2q();
    return Shapes_init_$Create$();
  }
  var properties_initialized_Shapes_kt_91wqbw;
  function _init_properties_Shapes_kt__48nj2q() {
    if (!properties_initialized_Shapes_kt_91wqbw) {
      properties_initialized_Shapes_kt_91wqbw = true;
      LocalShapes = staticCompositionLocalOf(LocalShapes$lambda);
      androidx_compose_material3_Shapes$stable = 0;
      androidx_compose_material3_ShapeDefaults$stable = 0;
    }
  }
  var androidx_compose_material3_SnackbarHostState$stable;
  var androidx_compose_material3_SplitButtonDefaults$stable;
  var androidx_compose_material3_SplitButtonShapes$stable;
  function get_LocalAbsoluteTonalElevation() {
    _init_properties_Surface_kt__8o7unv();
    return LocalAbsoluteTonalElevation;
  }
  var LocalAbsoluteTonalElevation;
  function surface(_this__u8e3s4, shape, backgroundColor, border_0, shadowElevation) {
    _init_properties_Surface_kt__8o7unv();
    var tmp;
    if (shadowElevation > 0.0) {
      tmp = graphicsLayer(Companion_instance, VOID, VOID, VOID, VOID, VOID, shadowElevation, VOID, VOID, VOID, VOID, VOID, shape, false);
    } else {
      tmp = Companion_instance;
    }
    return clip(background(_this__u8e3s4.e6j(tmp).e6j(!(border_0 == null) ? border(Companion_instance, border_0, shape) : Companion_instance), backgroundColor, shape), shape);
  }
  function surfaceColorAtElevation_0(color, elevation, $composer, $changed) {
    _init_properties_Surface_kt__8o7unv();
    var $composer_0 = $composer;
    return applyTonalElevation(MaterialTheme_instance.kd0($composer_0, 6), color, elevation, $composer_0, 112 & $changed << 3 | 896 & $changed << 3);
  }
  function Surface(onClick, modifier, enabled, shape, color, contentColor, tonalElevation, shadowElevation, border, interactionSource, content, $composer, $changed, $changed1, $default) {
    _init_properties_Surface_kt__8o7unv();
    var modifier_0 = {_v: modifier};
    var enabled_0 = {_v: enabled};
    var shape_0 = {_v: shape};
    var color_0 = {_v: new Color(color)};
    var contentColor_0 = contentColor;
    var tonalElevation_0 = tonalElevation;
    var shadowElevation_0 = {_v: new Dp(shadowElevation)};
    var border_0 = {_v: border};
    var interactionSource_0 = interactionSource;
    var $composer_0 = $composer;
    if (!(($default & 2) === 0)) {
      modifier_0._v = Companion_instance;
    }
    if (!(($default & 4) === 0)) {
      enabled_0._v = true;
    }
    if (!(($default & 8) === 0)) {
      shape_0._v = get_RectangleShape();
    }
    if (!(($default & 16) === 0)) {
      color_0._v = new Color(MaterialTheme_instance.kd0($composer_0, 6).bd1_1);
    }
    if (!(($default & 32) === 0))
      contentColor_0 = contentColorFor_0(color_0._v.v4y_1, $composer_0, 14 & $changed >> 12);
    if (!(($default & 64) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tonalElevation_0 = _Dp___init__impl__ms3zkb(0);
    }
    if (!(($default & 128) === 0)) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
      shadowElevation_0._v = new Dp(tmp$ret$1);
    }
    if (!(($default & 256) === 0)) {
      border_0._v = null;
    }
    if (!(($default & 512) === 0))
      interactionSource_0 = null;
    var tmp0_elvis_lhs = interactionSource_0;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      $composer_0.m1y(-1701074900);
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp_0;
      if (false || it === Companion_getInstance().f1y_1) {
        var value = funMutableInteractionSource();
        $composer_0.f1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp0_group = tmp_0;
      $composer_0.n1y();
      tmp = tmp0_group;
    } else {
      $composer_0.m1y(2023335947);
      $composer_0.n1y();
      tmp = tmp0_elvis_lhs;
    }
    var interactionSource_1 = tmp;
    // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
    var this_0 = get_LocalAbsoluteTonalElevation();
    var $composer_1 = $composer_0;
    var tmp0 = $composer_1.q1z(this_0).z47_1;
    // Inline function 'androidx.compose.ui.unit.Dp.plus' call
    var other = tonalElevation_0;
    var absoluteElevation = _Dp___init__impl__ms3zkb(_Dp___get_value__impl__geb1vb(tmp0) + _Dp___get_value__impl__geb1vb(other));
    var tmp_1 = [get_LocalContentColor().v29(new Color(contentColor_0)), get_LocalAbsoluteTonalElevation().v29(new Dp(absoluteElevation))];
    // Inline function 'kotlin.run' call
    var dispatchReceiver = rememberComposableLambda(849208527, true, Surface$lambda(modifier_0, shape_0, color_0, absoluteElevation, border_0, shadowElevation_0, interactionSource_1, enabled_0, onClick, content), $composer_0, 54);
    // Inline function 'androidx.compose.runtime.remember' call
    var $composer_2 = $composer_0;
    // Inline function 'androidx.compose.runtime.cache' call
    var invalid = $composer_2.g1z(dispatchReceiver);
    // Inline function 'kotlin.let' call
    var it_0 = $composer_2.e1z();
    var tmp_2;
    if (invalid || it_0 === Companion_getInstance().f1y_1) {
      var value_0 = ComposableLambda$invoke$ref(dispatchReceiver);
      $composer_2.f1z(value_0);
      tmp_2 = value_0;
    } else {
      tmp_2 = it_0;
    }
    var tmp$ret$8 = tmp_2;
    CompositionLocalProvider(tmp_1, tmp$ret$8, $composer_0, 48 | androidx_compose_runtime_ProvidedValue$stableprop_getter());
  }
  function LocalAbsoluteTonalElevation$lambda() {
    _init_properties_Surface_kt__8o7unv();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    return new Dp(tmp$ret$0);
  }
  function Surface$lambda($modifier, $shape, $color, $absoluteElevation, $border, $shadowElevation, $interactionSource, $enabled, $onClick, $content) {
    return function ($composer, $changed) {
      var $composer_0 = $composer;
      var tmp;
      if ($composer_0.n1z(!(($changed & 3) === 2), $changed & 1)) {
        var tmp_0 = minimumInteractiveComponentSize($modifier._v);
        var tmp_1 = $shape._v;
        var tmp_2 = surfaceColorAtElevation_0($color._v.v4y_1, $absoluteElevation, $composer_0, 0);
        var tmp_3 = $border._v;
        // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
        var this_0 = get_LocalDensity();
        var $composer_1 = $composer_0;
        // Inline function 'kotlin.with' call
        var tmp$ret$1 = $composer_1.q1z(this_0).n47($shadowElevation._v.z47_1);
        // Inline function 'androidx.compose.foundation.layout.Box' call
        var modifier = childSemantics(clickable(surface(tmp_0, tmp_1, tmp_2, tmp_3, tmp$ret$1), $interactionSource, ripple(), $enabled._v, VOID, VOID, $onClick));
        var contentAlignment = null;
        var propagateMinConstraints = true;
        var $composer_2 = $composer_0;
        if (!((2 & 1) === 0))
          modifier = Companion_instance;
        if (!((2 & 2) === 0))
          contentAlignment = Companion_getInstance_3().w6h_1;
        if (!((2 & 4) === 0))
          propagateMinConstraints = false;
        var measurePolicy = maybeCachedBoxMeasurePolicy(contentAlignment, propagateMinConstraints);
        // Inline function 'androidx.compose.ui.layout.Layout' call
        var modifier_0 = modifier;
        var $composer_3 = $composer_2;
        if (!((0 & 2) === 0))
          modifier_0 = Companion_instance;
        var compositeKeyHash = get_currentCompositeKeyHashCode($composer_3, 0).hashCode();
        var localMap = $composer_3.p1z();
        var materialized = materialize($composer_3, modifier_0);
        var tmp0 = Companion_getInstance_4().b84_1;
        // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
        var $composer_4 = $composer_3;
        var tmp_4 = $composer_4.g1y();
        if (!isInterface(tmp_4, Applier)) {
          invalidApplier();
        }
        $composer_4.z1y();
        if ($composer_4.h1y()) {
          $composer_4.a1z(tmp0);
        } else {
          $composer_4.b1z();
        }
        var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_4);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_4().g84_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_4().f84_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_4().j84_1);
        Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_4().k84_1);
        Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_4().d84_1);
        var $composer_5 = $composer_4;
        var $composer_6 = $composer_5;
        $content($composer_6, 0);
        $composer_4.c1z();
        tmp = Unit_instance;
      } else {
        $composer_0.y1y();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  var properties_initialized_Surface_kt_k203pf;
  function _init_properties_Surface_kt__8o7unv() {
    if (!properties_initialized_Surface_kt_k203pf) {
      properties_initialized_Surface_kt_k203pf = true;
      LocalAbsoluteTonalElevation = compositionLocalOf(VOID, LocalAbsoluteTonalElevation$lambda);
    }
  }
  var androidx_compose_material3_TabIndicatorModifier$stable;
  var androidx_compose_material3_TabIndicatorOffsetNode$stable;
  var androidx_compose_material3_TabPosition$stable;
  var androidx_compose_material3_TabRowDefaults$stable;
  function get_LocalTextStyle() {
    _init_properties_Text_kt__l2j80d();
    return LocalTextStyle;
  }
  var LocalTextStyle;
  function Text(text, modifier, color, autoSize, fontSize, fontStyle, fontWeight, fontFamily, letterSpacing, textDecoration, textAlign, lineHeight, overflow, softWrap, maxLines, minLines, onTextLayout, style, $composer, $changed, $changed1, $default) {
    _init_properties_Text_kt__l2j80d();
    var modifier_0 = {_v: modifier};
    var color_0 = {_v: new Color(color)};
    var autoSize_0 = {_v: autoSize};
    var fontSize_0 = {_v: new TextUnit(fontSize)};
    var tmp = fontStyle;
    var fontStyle_0 = {_v: tmp == null ? null : new FontStyle(tmp)};
    var fontWeight_0 = {_v: fontWeight};
    var fontFamily_0 = {_v: fontFamily};
    var letterSpacing_0 = {_v: new TextUnit(letterSpacing)};
    var textDecoration_0 = {_v: textDecoration};
    var tmp_0 = textAlign;
    var textAlign_0 = {_v: tmp_0 == null ? null : new TextAlign(tmp_0)};
    var lineHeight_0 = {_v: new TextUnit(lineHeight)};
    var overflow_0 = {_v: new TextOverflow(overflow)};
    var softWrap_0 = {_v: softWrap};
    var maxLines_0 = {_v: maxLines};
    var minLines_0 = {_v: minLines};
    var onTextLayout_0 = {_v: onTextLayout};
    var style_0 = {_v: style};
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(1809465675);
    var $dirty = $changed;
    var $dirty1 = $changed1;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g1z(text) ? 4 : 2);
    if (!(($default & 2) === 0))
      $dirty = $dirty | 48;
    else if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g1z(modifier_0._v) ? 32 : 16);
    if (!(($default & 4) === 0))
      $dirty = $dirty | 384;
    else if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.k1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(color_0._v.v4y_1))) ? 256 : 128);
    if (!(($default & 8) === 0))
      $dirty = $dirty | 3072;
    else if (($changed & 3072) === 0)
      $dirty = $dirty | ($composer_0.l1z(autoSize_0._v) ? 2048 : 1024);
    if (!(($default & 16) === 0))
      $dirty = $dirty | 24576;
    else if (($changed & 24576) === 0)
      $dirty = $dirty | ($composer_0.k1z(_TextUnit___get_packedValue__impl__it60w4(fontSize_0._v.s48_1)) ? 16384 : 8192);
    if (!(($default & 32) === 0))
      $dirty = $dirty | 196608;
    else if (($changed & 196608) === 0)
      $dirty = $dirty | ($composer_0.g1z(fontStyle_0._v) ? 131072 : 65536);
    if (!(($default & 64) === 0))
      $dirty = $dirty | 1572864;
    else if (($changed & 1572864) === 0)
      $dirty = $dirty | ($composer_0.g1z(fontWeight_0._v) ? 1048576 : 524288);
    if (!(($default & 128) === 0))
      $dirty = $dirty | 12582912;
    else if (($changed & 12582912) === 0)
      $dirty = $dirty | ($composer_0.g1z(fontFamily_0._v) ? 8388608 : 4194304);
    if (!(($default & 256) === 0))
      $dirty = $dirty | 100663296;
    else if (($changed & 100663296) === 0)
      $dirty = $dirty | ($composer_0.k1z(_TextUnit___get_packedValue__impl__it60w4(letterSpacing_0._v.s48_1)) ? 67108864 : 33554432);
    if (!(($default & 512) === 0))
      $dirty = $dirty | 805306368;
    else if (($changed & 805306368) === 0)
      $dirty = $dirty | ($composer_0.g1z(textDecoration_0._v) ? 536870912 : 268435456);
    if (!(($default & 1024) === 0))
      $dirty1 = $dirty1 | 6;
    else if (($changed1 & 6) === 0)
      $dirty1 = $dirty1 | ($composer_0.g1z(textAlign_0._v) ? 4 : 2);
    if (!(($default & 2048) === 0))
      $dirty1 = $dirty1 | 48;
    else if (($changed1 & 48) === 0)
      $dirty1 = $dirty1 | ($composer_0.k1z(_TextUnit___get_packedValue__impl__it60w4(lineHeight_0._v.s48_1)) ? 32 : 16);
    if (!(($default & 4096) === 0))
      $dirty1 = $dirty1 | 384;
    else if (($changed1 & 384) === 0)
      $dirty1 = $dirty1 | ($composer_0.i1z(_TextOverflow___get_value__impl__vugm5i(overflow_0._v.w62_1)) ? 256 : 128);
    if (!(($default & 8192) === 0))
      $dirty1 = $dirty1 | 3072;
    else if (($changed1 & 3072) === 0)
      $dirty1 = $dirty1 | ($composer_0.h1z(softWrap_0._v) ? 2048 : 1024);
    if (!(($default & 16384) === 0))
      $dirty1 = $dirty1 | 24576;
    else if (($changed1 & 24576) === 0)
      $dirty1 = $dirty1 | ($composer_0.i1z(maxLines_0._v) ? 16384 : 8192);
    if (!(($default & 32768) === 0))
      $dirty1 = $dirty1 | 196608;
    else if (($changed1 & 196608) === 0)
      $dirty1 = $dirty1 | ($composer_0.i1z(minLines_0._v) ? 131072 : 65536);
    if (!(($default & 65536) === 0))
      $dirty1 = $dirty1 | 1572864;
    else if (($changed1 & 1572864) === 0)
      $dirty1 = $dirty1 | ($composer_0.l1z(onTextLayout_0._v) ? 1048576 : 524288);
    if (($changed1 & 12582912) === 0)
      $dirty1 = $dirty1 | (($default & 131072) === 0 && $composer_0.g1z(style_0._v) ? 8388608 : 4194304);
    if ($composer_0.n1z(!(($dirty & 306783379) === 306783378) || !(($dirty1 & 4793491) === 4793490), $dirty & 1)) {
      $composer_0.q1y();
      if (($changed & 1) === 0 || $composer_0.i1y()) {
        if (!(($default & 2) === 0)) {
          modifier_0._v = Companion_instance;
        }
        if (!(($default & 4) === 0)) {
          color_0._v = new Color(Companion_getInstance_5().t4x_1);
        }
        if (!(($default & 8) === 0)) {
          autoSize_0._v = null;
        }
        if (!(($default & 16) === 0)) {
          fontSize_0._v = new TextUnit(Companion_getInstance_6().q48_1);
        }
        if (!(($default & 32) === 0)) {
          fontStyle_0._v = null;
        }
        if (!(($default & 64) === 0)) {
          fontWeight_0._v = null;
        }
        if (!(($default & 128) === 0)) {
          fontFamily_0._v = null;
        }
        if (!(($default & 256) === 0)) {
          letterSpacing_0._v = new TextUnit(Companion_getInstance_6().q48_1);
        }
        if (!(($default & 512) === 0)) {
          textDecoration_0._v = null;
        }
        if (!(($default & 1024) === 0)) {
          textAlign_0._v = null;
        }
        if (!(($default & 2048) === 0)) {
          lineHeight_0._v = new TextUnit(Companion_getInstance_6().q48_1);
        }
        if (!(($default & 4096) === 0)) {
          overflow_0._v = new TextOverflow(Companion_getInstance_7().n5n_1);
        }
        if (!(($default & 8192) === 0)) {
          softWrap_0._v = true;
        }
        if (!(($default & 16384) === 0)) {
          maxLines_0._v = 2147483647;
        }
        if (!(($default & 32768) === 0)) {
          minLines_0._v = 1;
        }
        if (!(($default & 65536) === 0)) {
          onTextLayout_0._v = null;
        }
        if (!(($default & 131072) === 0)) {
          var tmp0 = get_LocalTextStyle();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_1 = $composer_0;
          style_0._v = $composer_1.q1z(tmp0);
          $dirty1 = $dirty1 & -29360129;
        }
      } else {
        $composer_0.y1y();
        if (!(($default & 131072) === 0))
          $dirty1 = $dirty1 & -29360129;
      }
      $composer_0.r1y();
      $composer_0.m1y(-565217490);
      // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
      var this_0 = color_0._v.v4y_1;
      var tmp_1;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_1 = this_0;
      } else {
        $composer_0.m1y(-565216717);
        // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
        var this_1 = style_0._v.h4y();
        var tmp_2;
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          tmp_2 = this_1;
        } else {
          var tmp0_0 = get_LocalContentColor();
          // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
          var $composer_2 = $composer_0;
          tmp_2 = $composer_2.q1z(tmp0_0).v4y_1;
        }
        var tmp0_group = tmp_2;
        $composer_0.n1y();
        tmp_1 = tmp0_group;
      }
      var tmp0_group_0 = tmp_1;
      $composer_0.n1y();
      var textColor = tmp0_group_0;
      var tmp_3 = modifier_0._v;
      var tmp_4 = textAlign_0._v;
      var tmp0_elvis_lhs = tmp_4 == null ? null : tmp_4.p5q_1;
      var tmp_5;
      var tmp_6 = tmp0_elvis_lhs;
      if ((tmp_6 == null ? null : new TextAlign(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_8().o5p_1;
      } else {
        tmp_5 = tmp0_elvis_lhs;
      }
      var tmp1_textAlign = tmp_5;
      var tmp_7 = style_0._v;
      var tmp_8 = fontSize_0._v;
      var tmp_9 = fontWeight_0._v;
      var tmp_10 = fontStyle_0._v;
      var tmp_11 = tmp_7.l5v(textColor, tmp_8.s48_1, tmp_9, tmp_10 == null ? null : tmp_10.j5r_1, VOID, fontFamily_0._v, VOID, letterSpacing_0._v.s48_1, VOID, VOID, VOID, VOID, textDecoration_0._v, VOID, VOID, tmp1_textAlign, VOID, lineHeight_0._v.s48_1);
      var tmp_12 = onTextLayout_0._v;
      var tmp_13 = overflow_0._v;
      var tmp_14 = softWrap_0._v;
      var tmp_15 = maxLines_0._v;
      var tmp_16 = minLines_0._v;
      BasicText(text, tmp_3, tmp_11, tmp_12, tmp_13.w62_1, tmp_14, tmp_15, tmp_16, null, autoSize_0._v, $composer_0, 14 & $dirty | 112 & $dirty | 7168 & $dirty1 >> 9 | 57344 & $dirty1 << 6 | 458752 & $dirty1 << 6 | 3670016 & $dirty1 << 6 | 29360128 & $dirty1 << 6 | 1879048192 & $dirty << 18, 256);
    } else {
      $composer_0.y1y();
    }
    var tmp1_safe_receiver = $composer_0.t1y();
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.d2a(Text$lambda(text, modifier_0, color_0, autoSize_0, fontSize_0, fontStyle_0, fontWeight_0, fontFamily_0, letterSpacing_0, textDecoration_0, textAlign_0, lineHeight_0, overflow_0, softWrap_0, maxLines_0, minLines_0, onTextLayout_0, style_0, $changed, $changed1, $default));
    }
  }
  function ProvideTextStyle(value, content, $composer, $changed) {
    _init_properties_Text_kt__l2j80d();
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(15327438);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.g1z(value) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 32 : 16);
    if ($composer_0.n1z(!(($dirty & 19) === 18), $dirty & 1)) {
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      var mergedStyle = $composer_1.q1z(tmp0).j5v(value);
      CompositionLocalProvider_0(get_LocalTextStyle().v29(mergedStyle), content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty);
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(ProvideTextStyle$lambda(value, content, $changed));
    }
  }
  function LocalTextStyle$lambda() {
    _init_properties_Text_kt__l2j80d();
    return get_DefaultTextStyle();
  }
  function Text$lambda($text, $modifier, $color, $autoSize, $fontSize, $fontStyle, $fontWeight, $fontFamily, $letterSpacing, $textDecoration, $textAlign, $lineHeight, $overflow, $softWrap, $maxLines, $minLines, $onTextLayout, $style, $$changed, $$changed1, $$default) {
    return function ($composer, $force) {
      var tmp = $modifier._v;
      var tmp_0 = $color._v;
      var tmp_1 = $autoSize._v;
      var tmp_2 = $fontSize._v;
      var tmp_3 = $fontStyle._v;
      var tmp_4 = tmp_3 == null ? null : tmp_3.j5r_1;
      var tmp_5 = $fontWeight._v;
      var tmp_6 = $fontFamily._v;
      var tmp_7 = $letterSpacing._v;
      var tmp_8 = $textDecoration._v;
      var tmp_9 = $textAlign._v;
      Text($text, tmp, tmp_0.v4y_1, tmp_1, tmp_2.s48_1, tmp_4, tmp_5, tmp_6, tmp_7.s48_1, tmp_8, tmp_9 == null ? null : tmp_9.p5q_1, $lineHeight._v.s48_1, $overflow._v.w62_1, $softWrap._v, $maxLines._v, $minLines._v, $onTextLayout._v, $style._v, $composer, updateChangedFlags($$changed | 1), updateChangedFlags($$changed1), $$default);
      return Unit_instance;
    };
  }
  function ProvideTextStyle$lambda($value, $content, $$changed) {
    return function ($composer, $force) {
      ProvideTextStyle($value, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var properties_initialized_Text_kt_kgdrtb;
  function _init_properties_Text_kt__l2j80d() {
    if (!properties_initialized_Text_kt_kgdrtb) {
      properties_initialized_Text_kt_kgdrtb = true;
      var tmp = structuralEqualityPolicy();
      LocalTextStyle = compositionLocalOf(tmp, LocalTextStyle$lambda);
    }
  }
  var androidx_compose_material3_TextFieldDefaults$stable;
  var androidx_compose_material3_OutlinedTextFieldDefaults$stable;
  var androidx_compose_material3_TextFieldColors$stable;
  var androidx_compose_material3_TextFieldLabelPosition_Attached$stable;
  var androidx_compose_material3_TextFieldLabelPosition_Above$stable;
  var androidx_compose_material3_TextFieldLabelPosition$stable;
  var androidx_compose_material3_TimePickerDialogDefaults$stable;
  var androidx_compose_material3_ToggleButtonDefaults$stable;
  var androidx_compose_material3_ToggleButtonColors$stable;
  var androidx_compose_material3_ToggleButtonShapes$stable;
  var LocalTypography;
  function get_typographyTokens() {
    _init_properties_Typography_kt__rm3fch();
    return typographyTokens;
  }
  var typographyTokens;
  var androidx_compose_material3_Typography$stable;
  function Typography_init_$Init$(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, $this) {
    displayLarge = displayLarge === VOID ? get_typographyTokens().jde_1 : displayLarge;
    displayMedium = displayMedium === VOID ? get_typographyTokens().kde_1 : displayMedium;
    displaySmall = displaySmall === VOID ? get_typographyTokens().lde_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? get_typographyTokens().mde_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? get_typographyTokens().nde_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? get_typographyTokens().ode_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? get_typographyTokens().sde_1 : titleLarge;
    titleMedium = titleMedium === VOID ? get_typographyTokens().tde_1 : titleMedium;
    titleSmall = titleSmall === VOID ? get_typographyTokens().ude_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? get_typographyTokens().gde_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? get_typographyTokens().hde_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? get_typographyTokens().ide_1 : bodySmall;
    labelLarge = labelLarge === VOID ? get_typographyTokens().pde_1 : labelLarge;
    labelMedium = labelMedium === VOID ? get_typographyTokens().qde_1 : labelMedium;
    labelSmall = labelSmall === VOID ? get_typographyTokens().rde_1 : labelSmall;
    Typography.call($this, displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall);
    return $this;
  }
  function Typography_init_$Create$(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall) {
    return Typography_init_$Init$(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, objectCreate(protoOf(Typography)));
  }
  function Typography(displayLarge, displayMedium, displaySmall, headlineLarge, headlineMedium, headlineSmall, titleLarge, titleMedium, titleSmall, bodyLarge, bodyMedium, bodySmall, labelLarge, labelMedium, labelSmall, displayLargeEmphasized, displayMediumEmphasized, displaySmallEmphasized, headlineLargeEmphasized, headlineMediumEmphasized, headlineSmallEmphasized, titleLargeEmphasized, titleMediumEmphasized, titleSmallEmphasized, bodyLargeEmphasized, bodyMediumEmphasized, bodySmallEmphasized, labelLargeEmphasized, labelMediumEmphasized, labelSmallEmphasized) {
    displayLarge = displayLarge === VOID ? get_typographyTokens().jde_1 : displayLarge;
    displayMedium = displayMedium === VOID ? get_typographyTokens().kde_1 : displayMedium;
    displaySmall = displaySmall === VOID ? get_typographyTokens().lde_1 : displaySmall;
    headlineLarge = headlineLarge === VOID ? get_typographyTokens().mde_1 : headlineLarge;
    headlineMedium = headlineMedium === VOID ? get_typographyTokens().nde_1 : headlineMedium;
    headlineSmall = headlineSmall === VOID ? get_typographyTokens().ode_1 : headlineSmall;
    titleLarge = titleLarge === VOID ? get_typographyTokens().sde_1 : titleLarge;
    titleMedium = titleMedium === VOID ? get_typographyTokens().tde_1 : titleMedium;
    titleSmall = titleSmall === VOID ? get_typographyTokens().ude_1 : titleSmall;
    bodyLarge = bodyLarge === VOID ? get_typographyTokens().gde_1 : bodyLarge;
    bodyMedium = bodyMedium === VOID ? get_typographyTokens().hde_1 : bodyMedium;
    bodySmall = bodySmall === VOID ? get_typographyTokens().ide_1 : bodySmall;
    labelLarge = labelLarge === VOID ? get_typographyTokens().pde_1 : labelLarge;
    labelMedium = labelMedium === VOID ? get_typographyTokens().qde_1 : labelMedium;
    labelSmall = labelSmall === VOID ? get_typographyTokens().rde_1 : labelSmall;
    displayLargeEmphasized = displayLargeEmphasized === VOID ? get_typographyTokens().yde_1 : displayLargeEmphasized;
    displayMediumEmphasized = displayMediumEmphasized === VOID ? get_typographyTokens().zde_1 : displayMediumEmphasized;
    displaySmallEmphasized = displaySmallEmphasized === VOID ? get_typographyTokens().adf_1 : displaySmallEmphasized;
    headlineLargeEmphasized = headlineLargeEmphasized === VOID ? get_typographyTokens().bdf_1 : headlineLargeEmphasized;
    headlineMediumEmphasized = headlineMediumEmphasized === VOID ? get_typographyTokens().cdf_1 : headlineMediumEmphasized;
    headlineSmallEmphasized = headlineSmallEmphasized === VOID ? get_typographyTokens().ddf_1 : headlineSmallEmphasized;
    titleLargeEmphasized = titleLargeEmphasized === VOID ? get_typographyTokens().hdf_1 : titleLargeEmphasized;
    titleMediumEmphasized = titleMediumEmphasized === VOID ? get_typographyTokens().idf_1 : titleMediumEmphasized;
    titleSmallEmphasized = titleSmallEmphasized === VOID ? get_typographyTokens().jdf_1 : titleSmallEmphasized;
    bodyLargeEmphasized = bodyLargeEmphasized === VOID ? get_typographyTokens().vde_1 : bodyLargeEmphasized;
    bodyMediumEmphasized = bodyMediumEmphasized === VOID ? get_typographyTokens().wde_1 : bodyMediumEmphasized;
    bodySmallEmphasized = bodySmallEmphasized === VOID ? get_typographyTokens().xde_1 : bodySmallEmphasized;
    labelLargeEmphasized = labelLargeEmphasized === VOID ? get_typographyTokens().edf_1 : labelLargeEmphasized;
    labelMediumEmphasized = labelMediumEmphasized === VOID ? get_typographyTokens().fdf_1 : labelMediumEmphasized;
    labelSmallEmphasized = labelSmallEmphasized === VOID ? get_typographyTokens().gdf_1 : labelSmallEmphasized;
    this.xd5_1 = displayLarge;
    this.yd5_1 = displayMedium;
    this.zd5_1 = displaySmall;
    this.ad6_1 = headlineLarge;
    this.bd6_1 = headlineMedium;
    this.cd6_1 = headlineSmall;
    this.dd6_1 = titleLarge;
    this.ed6_1 = titleMedium;
    this.fd6_1 = titleSmall;
    this.gd6_1 = bodyLarge;
    this.hd6_1 = bodyMedium;
    this.id6_1 = bodySmall;
    this.jd6_1 = labelLarge;
    this.kd6_1 = labelMedium;
    this.ld6_1 = labelSmall;
    this.md6_1 = displayLargeEmphasized;
    this.nd6_1 = displayMediumEmphasized;
    this.od6_1 = displaySmallEmphasized;
    this.pd6_1 = headlineLargeEmphasized;
    this.qd6_1 = headlineMediumEmphasized;
    this.rd6_1 = headlineSmallEmphasized;
    this.sd6_1 = titleLargeEmphasized;
    this.td6_1 = titleMediumEmphasized;
    this.ud6_1 = titleSmallEmphasized;
    this.vd6_1 = bodyLargeEmphasized;
    this.wd6_1 = bodyMediumEmphasized;
    this.xd6_1 = bodySmallEmphasized;
    this.yd6_1 = labelLargeEmphasized;
    this.zd6_1 = labelMediumEmphasized;
    this.ad7_1 = labelSmallEmphasized;
  }
  protoOf(Typography).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Typography))
      return false;
    if (!this.xd5_1.equals(other.xd5_1))
      return false;
    if (!this.yd5_1.equals(other.yd5_1))
      return false;
    if (!this.zd5_1.equals(other.zd5_1))
      return false;
    if (!this.ad6_1.equals(other.ad6_1))
      return false;
    if (!this.bd6_1.equals(other.bd6_1))
      return false;
    if (!this.cd6_1.equals(other.cd6_1))
      return false;
    if (!this.dd6_1.equals(other.dd6_1))
      return false;
    if (!this.ed6_1.equals(other.ed6_1))
      return false;
    if (!this.fd6_1.equals(other.fd6_1))
      return false;
    if (!this.gd6_1.equals(other.gd6_1))
      return false;
    if (!this.hd6_1.equals(other.hd6_1))
      return false;
    if (!this.id6_1.equals(other.id6_1))
      return false;
    if (!this.jd6_1.equals(other.jd6_1))
      return false;
    if (!this.kd6_1.equals(other.kd6_1))
      return false;
    if (!this.ld6_1.equals(other.ld6_1))
      return false;
    if (!this.md6_1.equals(other.md6_1))
      return false;
    if (!this.nd6_1.equals(other.nd6_1))
      return false;
    if (!this.od6_1.equals(other.od6_1))
      return false;
    if (!this.pd6_1.equals(other.pd6_1))
      return false;
    if (!this.qd6_1.equals(other.qd6_1))
      return false;
    if (!this.rd6_1.equals(other.rd6_1))
      return false;
    if (!this.sd6_1.equals(other.sd6_1))
      return false;
    if (!this.td6_1.equals(other.td6_1))
      return false;
    if (!this.ud6_1.equals(other.ud6_1))
      return false;
    if (!this.vd6_1.equals(other.vd6_1))
      return false;
    if (!this.wd6_1.equals(other.wd6_1))
      return false;
    if (!this.xd6_1.equals(other.xd6_1))
      return false;
    if (!this.yd6_1.equals(other.yd6_1))
      return false;
    if (!this.zd6_1.equals(other.zd6_1))
      return false;
    if (!this.ad7_1.equals(other.ad7_1))
      return false;
    return true;
  };
  protoOf(Typography).hashCode = function () {
    var result = this.xd5_1.hashCode();
    result = imul(31, result) + this.yd5_1.hashCode() | 0;
    result = imul(31, result) + this.zd5_1.hashCode() | 0;
    result = imul(31, result) + this.ad6_1.hashCode() | 0;
    result = imul(31, result) + this.bd6_1.hashCode() | 0;
    result = imul(31, result) + this.cd6_1.hashCode() | 0;
    result = imul(31, result) + this.dd6_1.hashCode() | 0;
    result = imul(31, result) + this.ed6_1.hashCode() | 0;
    result = imul(31, result) + this.fd6_1.hashCode() | 0;
    result = imul(31, result) + this.gd6_1.hashCode() | 0;
    result = imul(31, result) + this.hd6_1.hashCode() | 0;
    result = imul(31, result) + this.id6_1.hashCode() | 0;
    result = imul(31, result) + this.jd6_1.hashCode() | 0;
    result = imul(31, result) + this.kd6_1.hashCode() | 0;
    result = imul(31, result) + this.ld6_1.hashCode() | 0;
    result = imul(31, result) + this.md6_1.hashCode() | 0;
    result = imul(31, result) + this.nd6_1.hashCode() | 0;
    result = imul(31, result) + this.od6_1.hashCode() | 0;
    result = imul(31, result) + this.pd6_1.hashCode() | 0;
    result = imul(31, result) + this.qd6_1.hashCode() | 0;
    result = imul(31, result) + this.rd6_1.hashCode() | 0;
    result = imul(31, result) + this.sd6_1.hashCode() | 0;
    result = imul(31, result) + this.td6_1.hashCode() | 0;
    result = imul(31, result) + this.ud6_1.hashCode() | 0;
    result = imul(31, result) + this.vd6_1.hashCode() | 0;
    result = imul(31, result) + this.wd6_1.hashCode() | 0;
    result = imul(31, result) + this.xd6_1.hashCode() | 0;
    result = imul(31, result) + this.yd6_1.hashCode() | 0;
    result = imul(31, result) + this.zd6_1.hashCode() | 0;
    result = imul(31, result) + this.ad7_1.hashCode() | 0;
    return result;
  };
  protoOf(Typography).toString = function () {
    return 'Typography(displayLarge=' + this.xd5_1.toString() + ', displayMedium=' + this.yd5_1.toString() + ',' + ('displaySmall=' + this.zd5_1.toString() + ', ') + ('headlineLarge=' + this.ad6_1.toString() + ', headlineMedium=' + this.bd6_1.toString() + ',') + (' headlineSmall=' + this.cd6_1.toString() + ', ') + ('titleLarge=' + this.dd6_1.toString() + ', titleMedium=' + this.ed6_1.toString() + ', titleSmall=' + this.fd6_1.toString() + ', ') + ('bodyLarge=' + this.gd6_1.toString() + ', bodyMedium=' + this.hd6_1.toString() + ', bodySmall=' + this.id6_1.toString() + ', ') + ('labelLarge=' + this.jd6_1.toString() + ', labelMedium=' + this.kd6_1.toString() + ', labelSmall=' + this.ld6_1.toString() + ', ') + ('displayLargeEmphasized=' + this.md6_1.toString() + ', ') + ('displayMediumEmphasized=' + this.nd6_1.toString() + ', ') + ('displaySmallEmphasized=' + this.od6_1.toString() + ', ') + ('headlineLargeEmphasized=' + this.pd6_1.toString() + ', ') + ('headlineMediumEmphasized=' + this.qd6_1.toString() + ', ') + ('headlineSmallEmphasized=' + this.rd6_1.toString() + ', ') + ('titleLargeEmphasized=' + this.sd6_1.toString() + ', ') + ('titleMediumEmphasized=' + this.td6_1.toString() + ', ') + ('titleSmallEmphasized=' + this.ud6_1.toString() + ', ') + ('bodyLargeEmphasized=' + this.vd6_1.toString() + ', ') + ('bodyMediumEmphasized=' + this.wd6_1.toString() + ', ') + ('bodySmallEmphasized=' + this.xd6_1.toString() + ', ') + ('labelLargeEmphasized=' + this.yd6_1.toString() + ', ') + ('labelMediumEmphasized=' + this.zd6_1.toString() + ', ') + ('labelSmallEmphasized=' + this.ad7_1.toString() + ')');
  };
  function LocalTypography$lambda() {
    _init_properties_Typography_kt__rm3fch();
    return Typography_init_$Create$();
  }
  var properties_initialized_Typography_kt_bpd27j;
  function _init_properties_Typography_kt__rm3fch() {
    if (!properties_initialized_Typography_kt_bpd27j) {
      properties_initialized_Typography_kt_bpd27j = true;
      LocalTypography = staticCompositionLocalOf(LocalTypography$lambda);
      typographyTokens = new TypographyTokens();
      androidx_compose_material3_Typography$stable = 0;
    }
  }
  var androidx_compose_material3_WideNavigationRailStateImpl$stable;
  var androidx_compose_material3_ModalWideNavigationRailState$stable;
  var androidx_compose_material3_RailPredictiveBackState$stable;
  var androidx_compose_material3_carousel_Arrangement$stable;
  var androidx_compose_material3_carousel_CarouselPageSize$stable;
  var androidx_compose_material3_carousel_CarouselDefaults$stable;
  var androidx_compose_material3_carousel_CarouselItemScopeImpl$stable;
  var androidx_compose_material3_carousel_CarouselState$stable;
  var androidx_compose_material3_carousel_CarouselPagerState$stable;
  var androidx_compose_material3_carousel_CarouselItemDrawInfoImpl$stable;
  var androidx_compose_material3_carousel_Keyline$stable;
  var androidx_compose_material3_carousel_KeylineList$stable;
  var androidx_compose_material3_carousel_Strategy$stable;
  var androidx_compose_material3_internal_AnimatedShapeState$stable;
  var androidx_compose_material3_internal_AnimatedCornerBasedShapeState$stable;
  var androidx_compose_material3_internal_BackEventProgress_NotRunning$stable;
  var androidx_compose_material3_internal_BackEventProgress_InProgress$stable;
  var androidx_compose_material3_internal_BackEventProgress_Completed$stable;
  var androidx_compose_material3_internal_BasicTooltipDefaults$stable;
  var androidx_compose_material3_internal_CalendarModel$stable;
  var androidx_compose_material3_internal_CalendarDate$stable;
  var androidx_compose_material3_internal_CalendarMonth$stable;
  var androidx_compose_material3_internal_DateInputFormat$stable;
  var androidx_compose_material3_internal_ChildSemanticsNodeElement$stable;
  var androidx_compose_material3_internal_ParentSemanticsNodeElement$stable;
  var androidx_compose_material3_internal_ChildSemanticsNode$stable;
  var androidx_compose_material3_internal_ParentSemanticsNode$stable;
  var androidx_compose_material3_internal_ParentSemanticsNodeKey$stable;
  function ParentSemanticsNode() {
  }
  protoOf(ParentSemanticsNode).adg = function (_this__u8e3s4) {
    this.zdf_1 = true;
    this.ydf_1(_this__u8e3s4);
    invalidateSemantics(this);
  };
  protoOf(ParentSemanticsNode).bdg = function () {
    this.zdf_1 = false;
    invalidateSemantics(this);
  };
  function ParentSemanticsNodeKey() {
  }
  var ParentSemanticsNodeKey_instance;
  function ParentSemanticsNodeKey_getInstance() {
    return ParentSemanticsNodeKey_instance;
  }
  function childSemantics(_this__u8e3s4, properties) {
    var tmp;
    if (properties === VOID) {
      tmp = childSemantics$lambda;
    } else {
      tmp = properties;
    }
    properties = tmp;
    return _this__u8e3s4.e6j(new ChildSemanticsNodeElement(properties));
  }
  function ChildSemanticsNodeElement(properties) {
    ModifierNodeElement.call(this);
    this.ddg_1 = properties;
  }
  protoOf(ChildSemanticsNodeElement).f2b = function () {
    return new ChildSemanticsNode(this.ddg_1);
  };
  protoOf(ChildSemanticsNodeElement).edg = function (node) {
    node.tdg_1 = this.ddg_1;
    invalidateSemantics(node);
  };
  protoOf(ChildSemanticsNodeElement).h6s = function (node) {
    return this.edg(node instanceof ChildSemanticsNode ? node : THROW_CCE());
  };
  protoOf(ChildSemanticsNodeElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ChildSemanticsNodeElement))
      return false;
    return this.ddg_1 === other.ddg_1;
  };
  protoOf(ChildSemanticsNodeElement).hashCode = function () {
    return hashCode(this.ddg_1);
  };
  function ChildSemanticsNode$applySemantics$lambda($this_applySemantics) {
    return function (node) {
      // Inline function 'kotlin.with' call
      (node instanceof ParentSemanticsNode ? node : THROW_CCE()).adg($this_applySemantics);
      return false;
    };
  }
  function ChildSemanticsNode$onDetach$lambda(node) {
    if (!(node instanceof ParentSemanticsNode))
      THROW_CCE();
    node.bdg();
    return false;
  }
  function ChildSemanticsNode(properties) {
    Node.call(this);
    this.tdg_1 = properties;
  }
  protoOf(ChildSemanticsNode).h71 = function (_this__u8e3s4) {
    var tmp = ParentSemanticsNodeKey_instance;
    traverseAncestors(this, tmp, ChildSemanticsNode$applySemantics$lambda(_this__u8e3s4));
    this.tdg_1(_this__u8e3s4);
  };
  protoOf(ChildSemanticsNode).i6k = function () {
    protoOf(Node).i6k.call(this);
    var tmp = ParentSemanticsNodeKey_instance;
    traverseAncestors(this, tmp, ChildSemanticsNode$onDetach$lambda);
  };
  function childSemantics$lambda(_this__u8e3s4) {
    return Unit_instance;
  }
  var androidx_compose_material3_internal_AnchoredDraggableUninitializedException$stable;
  function get_OutgoingSpecEasing() {
    _init_properties_Elevation_kt__80i8t1();
    return OutgoingSpecEasing;
  }
  var OutgoingSpecEasing;
  function get_DefaultIncomingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultIncomingSpec;
  }
  var DefaultIncomingSpec;
  function get_DefaultOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return DefaultOutgoingSpec;
  }
  var DefaultOutgoingSpec;
  function get_HoveredOutgoingSpec() {
    _init_properties_Elevation_kt__80i8t1();
    return HoveredOutgoingSpec;
  }
  var HoveredOutgoingSpec;
  function animateElevation_0(_this__u8e3s4, target, from, to, $completion) {
    from = from === VOID ? null : from;
    to = to === VOID ? null : to;
    var tmp = new $animateElevationCOROUTINE$(_this__u8e3s4, target, from, to, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function ElevationDefaults() {
  }
  protoOf(ElevationDefaults).hdh = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultIncomingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultIncomingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_DefaultIncomingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultIncomingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  protoOf(ElevationDefaults).idh = function (interaction) {
    var tmp;
    if (interaction instanceof Press) {
      tmp = get_DefaultOutgoingSpec();
    } else {
      if (interaction instanceof Start) {
        tmp = get_DefaultOutgoingSpec();
      } else {
        if (interaction instanceof Enter) {
          tmp = get_HoveredOutgoingSpec();
        } else {
          if (interaction instanceof Focus) {
            tmp = get_DefaultOutgoingSpec();
          } else {
            tmp = null;
          }
        }
      }
    }
    return tmp;
  };
  var ElevationDefaults_instance;
  function ElevationDefaults_getInstance() {
    return ElevationDefaults_instance;
  }
  function $animateElevationCOROUTINE$(_this__u8e3s4, target, from, to, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.cdh_1 = _this__u8e3s4;
    this.ddh_1 = target;
    this.edh_1 = from;
    this.fdh_1 = to;
  }
  protoOf($animateElevationCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            var spec = !(this.fdh_1 == null) ? ElevationDefaults_instance.hdh(this.fdh_1) : !(this.edh_1 == null) ? ElevationDefaults_instance.idh(this.edh_1) : null;
            if (!(spec == null)) {
              this.l8_1 = 2;
              suspendResult = this.cdh_1.vaf(new Dp(this.ddh_1), spec, VOID, VOID, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = this.cdh_1.waf(new Dp(this.ddh_1), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            var tmp_0 = this;
            tmp_0.gdh_1 = Unit_instance;
            this.l8_1 = 3;
            continue $sm;
          case 2:
            this.gdh_1 = suspendResult;
            this.l8_1 = 3;
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
  var properties_initialized_Elevation_kt_70s6ab;
  function _init_properties_Elevation_kt__80i8t1() {
    if (!properties_initialized_Elevation_kt_70s6ab) {
      properties_initialized_Elevation_kt_70s6ab = true;
      OutgoingSpecEasing = new CubicBezierEasing(0.4, 0.0, 0.6, 1.0);
      DefaultIncomingSpec = new TweenSpec(120, VOID, get_FastOutSlowInEasing());
      DefaultOutgoingSpec = new TweenSpec(150, VOID, get_OutgoingSpecEasing());
      HoveredOutgoingSpec = new TweenSpec(120, VOID, get_OutgoingSpecEasing());
    }
  }
  var androidx_compose_material3_internal_Icons_AutoMirrored_Filled$stable;
  var androidx_compose_material3_internal_Icons_AutoMirrored$stable;
  var androidx_compose_material3_internal_Icons_Filled$stable;
  var androidx_compose_material3_internal_Icons_Outlined$stable;
  var androidx_compose_material3_internal_Icons$stable;
  var androidx_compose_material3_internal_InternalMutatorMutex$stable;
  var androidx_compose_material3_internal_MappedInteractionSource$stable;
  var androidx_compose_material3_internal_MenuPosition$stable;
  var androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Horizontal$stable;
  var androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Vertical$stable;
  var androidx_compose_material3_internal_AnchorAlignmentOffsetPosition$stable;
  var androidx_compose_material3_internal_WindowAlignmentMarginPosition_Horizontal$stable;
  var androidx_compose_material3_internal_WindowAlignmentMarginPosition_Vertical$stable;
  var androidx_compose_material3_internal_WindowAlignmentMarginPosition$stable;
  var androidx_compose_material3_internal_DropdownMenuPositionProvider$stable;
  var androidx_compose_material3_internal_MutableWindowInsets$stable;
  function ProvideContentColorTextStyle(contentColor, textStyle, content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(-684938728);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.k1z(_ULong___get_data__impl__fggpzb(_Color___get_value__impl__1pls5m(contentColor))) ? 4 : 2);
    if (($changed & 48) === 0)
      $dirty = $dirty | ($composer_0.g1z(textStyle) ? 32 : 16);
    if (($changed & 384) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 256 : 128);
    if ($composer_0.n1z(!(($dirty & 147) === 146), $dirty & 1)) {
      var tmp0 = get_LocalTextStyle();
      // Inline function 'androidx.compose.runtime.CompositionLocal.current' call
      var $composer_1 = $composer_0;
      var mergedStyle = $composer_1.q1z(tmp0).j5v(textStyle);
      CompositionLocalProvider([get_LocalContentColor().v29(new Color(contentColor)), get_LocalTextStyle().v29(mergedStyle)], content, $composer_0, androidx_compose_runtime_ProvidedValue$stableprop_getter() | 112 & $dirty >> 3);
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(ProvideContentColorTextStyle$lambda(contentColor, textStyle, content, $changed));
    }
  }
  function ProvideContentColorTextStyle$lambda($contentColor, $textStyle, $content, $$changed) {
    return function ($composer, $force) {
      ProvideContentColorTextStyle($contentColor, $textStyle, $content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var androidx_compose_material3_tokens_AppBarLargeFlexibleTokens$stable;
  var androidx_compose_material3_tokens_AppBarLargeTokens$stable;
  var androidx_compose_material3_tokens_AppBarMediumFlexibleTokens$stable;
  var androidx_compose_material3_tokens_AppBarMediumTokens$stable;
  var androidx_compose_material3_tokens_AppBarSmallTokens$stable;
  var androidx_compose_material3_tokens_AppBarTokens$stable;
  var androidx_compose_material3_tokens_AssistChipTokens$stable;
  var androidx_compose_material3_tokens_BadgeTokens$stable;
  var androidx_compose_material3_tokens_BaselineButtonTokens$stable;
  function BaselineButtonTokens() {
    BaselineButtonTokens_instance = this;
    this.lcw_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.mcw_1 = ElevationTokens_getInstance().jdh_1;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ncw_1 = _Dp___init__impl__ms3zkb(40.0);
    this.ocw_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.pcw_1 = ShapeKeyTokens_CornerMedium_getInstance();
    this.qcw_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.rcw_1 = ElevationTokens_getInstance().jdh_1;
    this.scw_1 = 0.1;
    this.tcw_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ucw_1 = 0.38;
    this.vcw_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.wcw_1 = 0.38;
    this.xcw_1 = ElevationTokens_getInstance().jdh_1;
    this.ycw_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.zcw_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.acx_1 = ElevationTokens_getInstance().kdh_1;
    this.bcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ccx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.dcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.ecx_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.fcx_1 = _Dp___init__impl__ms3zkb(20.0);
    this.gcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.hcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.icx_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.jcx_1 = _Dp___init__impl__ms3zkb(24.0);
    this.kcx_1 = ElevationTokens_getInstance().jdh_1;
    this.lcx_1 = ShapeKeyTokens_CornerSmall_getInstance();
    this.mcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ncx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ocx_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.pcx_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.qcx_1 = ShapeKeyTokens_CornerMedium_getInstance();
    this.rcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.scx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.tcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ucx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.vcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.wcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.xcx_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ycx_1 = _Dp___init__impl__ms3zkb(24.0);
    this.zcx_1 = ColorSchemeKeyTokens_SurfaceContainer_getInstance();
    this.acy_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.bcy_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ccy_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.dcy_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ecy_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.fcy_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.gcy_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
  }
  var BaselineButtonTokens_instance;
  function BaselineButtonTokens_getInstance() {
    if (BaselineButtonTokens_instance == null)
      new BaselineButtonTokens();
    return BaselineButtonTokens_instance;
  }
  var androidx_compose_material3_tokens_BottomAppBarTokens$stable;
  var androidx_compose_material3_tokens_ButtonGroupSmallTokens$stable;
  var androidx_compose_material3_tokens_ButtonLargeTokens$stable;
  function ButtonLargeTokens() {
    ButtonLargeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ocz_1 = _Dp___init__impl__ms3zkb(96.0);
    this.pcz_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.qcz_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.rcz_1 = _Dp___init__impl__ms3zkb(12.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.scz_1 = _Dp___init__impl__ms3zkb(32.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.tcz_1 = _Dp___init__impl__ms3zkb(48.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ucz_1 = _Dp___init__impl__ms3zkb(2.0);
    this.vcz_1 = ShapeKeyTokens_CornerLarge_getInstance();
    this.wcz_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.xcz_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.ycz_1 = _Dp___init__impl__ms3zkb(48.0);
  }
  var ButtonLargeTokens_instance;
  function ButtonLargeTokens_getInstance() {
    if (ButtonLargeTokens_instance == null)
      new ButtonLargeTokens();
    return ButtonLargeTokens_instance;
  }
  var androidx_compose_material3_tokens_ButtonMediumTokens$stable;
  function ButtonMediumTokens() {
    ButtonMediumTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.dcz_1 = _Dp___init__impl__ms3zkb(56.0);
    this.ecz_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.fcz_1 = ShapeKeyTokens_CornerLarge_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.gcz_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.hcz_1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.icz_1 = _Dp___init__impl__ms3zkb(24.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.jcz_1 = _Dp___init__impl__ms3zkb(1.0);
    this.kcz_1 = ShapeKeyTokens_CornerMedium_getInstance();
    this.lcz_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.mcz_1 = ShapeKeyTokens_CornerLarge_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.ncz_1 = _Dp___init__impl__ms3zkb(24.0);
  }
  var ButtonMediumTokens_instance;
  function ButtonMediumTokens_getInstance() {
    if (ButtonMediumTokens_instance == null)
      new ButtonMediumTokens();
    return ButtonMediumTokens_instance;
  }
  var androidx_compose_material3_tokens_ButtonSmallTokens$stable;
  function ButtonSmallTokens() {
    ButtonSmallTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.hcy_1 = _Dp___init__impl__ms3zkb(40.0);
    this.icy_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.jcy_1 = ShapeKeyTokens_CornerMedium_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.kcy_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.lcy_1 = _Dp___init__impl__ms3zkb(20.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.mcy_1 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ncy_1 = _Dp___init__impl__ms3zkb(1.0);
    this.ocy_1 = ShapeKeyTokens_CornerSmall_getInstance();
    this.pcy_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.qcy_1 = ShapeKeyTokens_CornerMedium_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.rcy_1 = _Dp___init__impl__ms3zkb(16.0);
  }
  var ButtonSmallTokens_instance;
  function ButtonSmallTokens_getInstance() {
    if (ButtonSmallTokens_instance == null)
      new ButtonSmallTokens();
    return ButtonSmallTokens_instance;
  }
  var androidx_compose_material3_tokens_ButtonXLargeTokens$stable;
  function ButtonXLargeTokens() {
    ButtonXLargeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.zcz_1 = _Dp___init__impl__ms3zkb(136.0);
    this.ad0_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.bd0_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.cd0_1 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.dd0_1 = _Dp___init__impl__ms3zkb(40.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.ed0_1 = _Dp___init__impl__ms3zkb(64.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.fd0_1 = _Dp___init__impl__ms3zkb(3.0);
    this.gd0_1 = ShapeKeyTokens_CornerLarge_getInstance();
    this.hd0_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.id0_1 = ShapeKeyTokens_CornerExtraLarge_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.jd0_1 = _Dp___init__impl__ms3zkb(64.0);
  }
  var ButtonXLargeTokens_instance;
  function ButtonXLargeTokens_getInstance() {
    if (ButtonXLargeTokens_instance == null)
      new ButtonXLargeTokens();
    return ButtonXLargeTokens_instance;
  }
  var androidx_compose_material3_tokens_ButtonXSmallTokens$stable;
  function ButtonXSmallTokens() {
    ButtonXSmallTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.scy_1 = _Dp___init__impl__ms3zkb(32.0);
    this.tcy_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.ucy_1 = ShapeKeyTokens_CornerMedium_getInstance();
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.vcy_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.wcy_1 = _Dp___init__impl__ms3zkb(20.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.xcy_1 = _Dp___init__impl__ms3zkb(16.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ycy_1 = _Dp___init__impl__ms3zkb(1.0);
    this.zcy_1 = ShapeKeyTokens_CornerSmall_getInstance();
    this.acz_1 = ShapeKeyTokens_CornerFull_getInstance();
    this.bcz_1 = ShapeKeyTokens_CornerMedium_getInstance();
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.ccz_1 = _Dp___init__impl__ms3zkb(16.0);
  }
  var ButtonXSmallTokens_instance;
  function ButtonXSmallTokens_getInstance() {
    if (ButtonXSmallTokens_instance == null)
      new ButtonXSmallTokens();
    return ButtonXSmallTokens_instance;
  }
  var androidx_compose_material3_tokens_CheckboxTokens$stable;
  var androidx_compose_material3_tokens_CircularProgressIndicatorTokens$stable;
  var androidx_compose_material3_tokens_ColorDarkTokens$stable;
  var androidx_compose_material3_tokens_ColorLightTokens$stable;
  function ColorLightTokens() {
    ColorLightTokens_instance = this;
    this.cd7_1 = PaletteTokens_getInstance().zdi_1;
    this.dd7_1 = PaletteTokens_getInstance().vdh_1;
    this.ed7_1 = PaletteTokens_getInstance().adi_1;
    this.fd7_1 = PaletteTokens_getInstance().xdi_1;
    this.gd7_1 = PaletteTokens_getInstance().xdj_1;
    this.hd7_1 = PaletteTokens_getInstance().idi_1;
    this.id7_1 = PaletteTokens_getInstance().edi_1;
    this.jd7_1 = PaletteTokens_getInstance().sdh_1;
    this.kd7_1 = PaletteTokens_getInstance().rdh_1;
    this.ld7_1 = PaletteTokens_getInstance().qdj_1;
    this.md7_1 = PaletteTokens_getInstance().pdj_1;
    this.nd7_1 = PaletteTokens_getInstance().pdj_1;
    this.od7_1 = PaletteTokens_getInstance().sdj_1;
    this.pd7_1 = PaletteTokens_getInstance().ddk_1;
    this.qd7_1 = PaletteTokens_getInstance().cdk_1;
    this.rd7_1 = PaletteTokens_getInstance().cdk_1;
    this.sd7_1 = PaletteTokens_getInstance().fdk_1;
    this.td7_1 = PaletteTokens_getInstance().edi_1;
    this.ud7_1 = PaletteTokens_getInstance().fdj_1;
    this.vd7_1 = PaletteTokens_getInstance().qdk_1;
    this.wd7_1 = PaletteTokens_getInstance().pdk_1;
    this.xd7_1 = PaletteTokens_getInstance().pdk_1;
    this.yd7_1 = PaletteTokens_getInstance().sdk_1;
    this.zd7_1 = PaletteTokens_getInstance().hdj_1;
    this.ad8_1 = PaletteTokens_getInstance().kdj_1;
    this.bd8_1 = PaletteTokens_getInstance().tdj_1;
    this.cd8_1 = PaletteTokens_getInstance().ydj_1;
    this.dd8_1 = PaletteTokens_getInstance().ydj_1;
    this.ed8_1 = PaletteTokens_getInstance().xdj_1;
    this.fd8_1 = PaletteTokens_getInstance().ddi_1;
    this.gd8_1 = PaletteTokens_getInstance().gdk_1;
    this.hd8_1 = PaletteTokens_getInstance().ldk_1;
    this.id8_1 = PaletteTokens_getInstance().ldk_1;
    this.jd8_1 = PaletteTokens_getInstance().kdk_1;
    this.kd8_1 = PaletteTokens_getInstance().zdi_1;
    this.ld8_1 = PaletteTokens_getInstance().zdi_1;
    this.md8_1 = PaletteTokens_getInstance().wdi_1;
    this.nd8_1 = PaletteTokens_getInstance().vdi_1;
    this.od8_1 = PaletteTokens_getInstance().udi_1;
    this.pd8_1 = PaletteTokens_getInstance().ydi_1;
    this.qd8_1 = PaletteTokens_getInstance().fdi_1;
    this.rd8_1 = PaletteTokens_getInstance().tdi_1;
    this.sd8_1 = this.bd8_1;
    this.td8_1 = PaletteTokens_getInstance().ldj_1;
    this.ud8_1 = PaletteTokens_getInstance().tdk_1;
    this.vd8_1 = PaletteTokens_getInstance().ydk_1;
    this.wd8_1 = PaletteTokens_getInstance().ydk_1;
    this.xd8_1 = PaletteTokens_getInstance().xdk_1;
  }
  var ColorLightTokens_instance;
  function ColorLightTokens_getInstance() {
    if (ColorLightTokens_instance == null)
      new ColorLightTokens();
    return ColorLightTokens_instance;
  }
  var ColorSchemeKeyTokens_Background_instance;
  var ColorSchemeKeyTokens_Error_instance;
  var ColorSchemeKeyTokens_ErrorContainer_instance;
  var ColorSchemeKeyTokens_InverseOnSurface_instance;
  var ColorSchemeKeyTokens_InversePrimary_instance;
  var ColorSchemeKeyTokens_InverseSurface_instance;
  var ColorSchemeKeyTokens_OnBackground_instance;
  var ColorSchemeKeyTokens_OnError_instance;
  var ColorSchemeKeyTokens_OnErrorContainer_instance;
  var ColorSchemeKeyTokens_OnPrimary_instance;
  var ColorSchemeKeyTokens_OnPrimaryContainer_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixed_instance;
  var ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSecondary_instance;
  var ColorSchemeKeyTokens_OnSecondaryContainer_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixed_instance;
  var ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance;
  var ColorSchemeKeyTokens_OnSurface_instance;
  var ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  var ColorSchemeKeyTokens_OnTertiary_instance;
  var ColorSchemeKeyTokens_OnTertiaryContainer_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixed_instance;
  var ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance;
  var ColorSchemeKeyTokens_Outline_instance;
  var ColorSchemeKeyTokens_OutlineVariant_instance;
  var ColorSchemeKeyTokens_Primary_instance;
  var ColorSchemeKeyTokens_PrimaryContainer_instance;
  var ColorSchemeKeyTokens_PrimaryFixed_instance;
  var ColorSchemeKeyTokens_PrimaryFixedDim_instance;
  var ColorSchemeKeyTokens_Scrim_instance;
  var ColorSchemeKeyTokens_Secondary_instance;
  var ColorSchemeKeyTokens_SecondaryContainer_instance;
  var ColorSchemeKeyTokens_SecondaryFixed_instance;
  var ColorSchemeKeyTokens_SecondaryFixedDim_instance;
  var ColorSchemeKeyTokens_Surface_instance;
  var ColorSchemeKeyTokens_SurfaceBright_instance;
  var ColorSchemeKeyTokens_SurfaceContainer_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHigh_instance;
  var ColorSchemeKeyTokens_SurfaceContainerHighest_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLow_instance;
  var ColorSchemeKeyTokens_SurfaceContainerLowest_instance;
  var ColorSchemeKeyTokens_SurfaceDim_instance;
  var ColorSchemeKeyTokens_SurfaceTint_instance;
  var ColorSchemeKeyTokens_SurfaceVariant_instance;
  var ColorSchemeKeyTokens_Tertiary_instance;
  var ColorSchemeKeyTokens_TertiaryContainer_instance;
  var ColorSchemeKeyTokens_TertiaryFixed_instance;
  var ColorSchemeKeyTokens_TertiaryFixedDim_instance;
  var ColorSchemeKeyTokens_entriesInitialized;
  function ColorSchemeKeyTokens_initEntries() {
    if (ColorSchemeKeyTokens_entriesInitialized)
      return Unit_instance;
    ColorSchemeKeyTokens_entriesInitialized = true;
    ColorSchemeKeyTokens_Background_instance = new ColorSchemeKeyTokens('Background', 0);
    ColorSchemeKeyTokens_Error_instance = new ColorSchemeKeyTokens('Error', 1);
    ColorSchemeKeyTokens_ErrorContainer_instance = new ColorSchemeKeyTokens('ErrorContainer', 2);
    ColorSchemeKeyTokens_InverseOnSurface_instance = new ColorSchemeKeyTokens('InverseOnSurface', 3);
    ColorSchemeKeyTokens_InversePrimary_instance = new ColorSchemeKeyTokens('InversePrimary', 4);
    ColorSchemeKeyTokens_InverseSurface_instance = new ColorSchemeKeyTokens('InverseSurface', 5);
    ColorSchemeKeyTokens_OnBackground_instance = new ColorSchemeKeyTokens('OnBackground', 6);
    ColorSchemeKeyTokens_OnError_instance = new ColorSchemeKeyTokens('OnError', 7);
    ColorSchemeKeyTokens_OnErrorContainer_instance = new ColorSchemeKeyTokens('OnErrorContainer', 8);
    ColorSchemeKeyTokens_OnPrimary_instance = new ColorSchemeKeyTokens('OnPrimary', 9);
    ColorSchemeKeyTokens_OnPrimaryContainer_instance = new ColorSchemeKeyTokens('OnPrimaryContainer', 10);
    ColorSchemeKeyTokens_OnPrimaryFixed_instance = new ColorSchemeKeyTokens('OnPrimaryFixed', 11);
    ColorSchemeKeyTokens_OnPrimaryFixedVariant_instance = new ColorSchemeKeyTokens('OnPrimaryFixedVariant', 12);
    ColorSchemeKeyTokens_OnSecondary_instance = new ColorSchemeKeyTokens('OnSecondary', 13);
    ColorSchemeKeyTokens_OnSecondaryContainer_instance = new ColorSchemeKeyTokens('OnSecondaryContainer', 14);
    ColorSchemeKeyTokens_OnSecondaryFixed_instance = new ColorSchemeKeyTokens('OnSecondaryFixed', 15);
    ColorSchemeKeyTokens_OnSecondaryFixedVariant_instance = new ColorSchemeKeyTokens('OnSecondaryFixedVariant', 16);
    ColorSchemeKeyTokens_OnSurface_instance = new ColorSchemeKeyTokens('OnSurface', 17);
    ColorSchemeKeyTokens_OnSurfaceVariant_instance = new ColorSchemeKeyTokens('OnSurfaceVariant', 18);
    ColorSchemeKeyTokens_OnTertiary_instance = new ColorSchemeKeyTokens('OnTertiary', 19);
    ColorSchemeKeyTokens_OnTertiaryContainer_instance = new ColorSchemeKeyTokens('OnTertiaryContainer', 20);
    ColorSchemeKeyTokens_OnTertiaryFixed_instance = new ColorSchemeKeyTokens('OnTertiaryFixed', 21);
    ColorSchemeKeyTokens_OnTertiaryFixedVariant_instance = new ColorSchemeKeyTokens('OnTertiaryFixedVariant', 22);
    ColorSchemeKeyTokens_Outline_instance = new ColorSchemeKeyTokens('Outline', 23);
    ColorSchemeKeyTokens_OutlineVariant_instance = new ColorSchemeKeyTokens('OutlineVariant', 24);
    ColorSchemeKeyTokens_Primary_instance = new ColorSchemeKeyTokens('Primary', 25);
    ColorSchemeKeyTokens_PrimaryContainer_instance = new ColorSchemeKeyTokens('PrimaryContainer', 26);
    ColorSchemeKeyTokens_PrimaryFixed_instance = new ColorSchemeKeyTokens('PrimaryFixed', 27);
    ColorSchemeKeyTokens_PrimaryFixedDim_instance = new ColorSchemeKeyTokens('PrimaryFixedDim', 28);
    ColorSchemeKeyTokens_Scrim_instance = new ColorSchemeKeyTokens('Scrim', 29);
    ColorSchemeKeyTokens_Secondary_instance = new ColorSchemeKeyTokens('Secondary', 30);
    ColorSchemeKeyTokens_SecondaryContainer_instance = new ColorSchemeKeyTokens('SecondaryContainer', 31);
    ColorSchemeKeyTokens_SecondaryFixed_instance = new ColorSchemeKeyTokens('SecondaryFixed', 32);
    ColorSchemeKeyTokens_SecondaryFixedDim_instance = new ColorSchemeKeyTokens('SecondaryFixedDim', 33);
    ColorSchemeKeyTokens_Surface_instance = new ColorSchemeKeyTokens('Surface', 34);
    ColorSchemeKeyTokens_SurfaceBright_instance = new ColorSchemeKeyTokens('SurfaceBright', 35);
    ColorSchemeKeyTokens_SurfaceContainer_instance = new ColorSchemeKeyTokens('SurfaceContainer', 36);
    ColorSchemeKeyTokens_SurfaceContainerHigh_instance = new ColorSchemeKeyTokens('SurfaceContainerHigh', 37);
    ColorSchemeKeyTokens_SurfaceContainerHighest_instance = new ColorSchemeKeyTokens('SurfaceContainerHighest', 38);
    ColorSchemeKeyTokens_SurfaceContainerLow_instance = new ColorSchemeKeyTokens('SurfaceContainerLow', 39);
    ColorSchemeKeyTokens_SurfaceContainerLowest_instance = new ColorSchemeKeyTokens('SurfaceContainerLowest', 40);
    ColorSchemeKeyTokens_SurfaceDim_instance = new ColorSchemeKeyTokens('SurfaceDim', 41);
    ColorSchemeKeyTokens_SurfaceTint_instance = new ColorSchemeKeyTokens('SurfaceTint', 42);
    ColorSchemeKeyTokens_SurfaceVariant_instance = new ColorSchemeKeyTokens('SurfaceVariant', 43);
    ColorSchemeKeyTokens_Tertiary_instance = new ColorSchemeKeyTokens('Tertiary', 44);
    ColorSchemeKeyTokens_TertiaryContainer_instance = new ColorSchemeKeyTokens('TertiaryContainer', 45);
    ColorSchemeKeyTokens_TertiaryFixed_instance = new ColorSchemeKeyTokens('TertiaryFixed', 46);
    ColorSchemeKeyTokens_TertiaryFixedDim_instance = new ColorSchemeKeyTokens('TertiaryFixedDim', 47);
  }
  function ColorSchemeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorSchemeKeyTokens_OnPrimary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnPrimary_instance;
  }
  function ColorSchemeKeyTokens_OnSurface_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurface_instance;
  }
  function ColorSchemeKeyTokens_OnSurfaceVariant_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_OnSurfaceVariant_instance;
  }
  function ColorSchemeKeyTokens_Primary_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_Primary_instance;
  }
  function ColorSchemeKeyTokens_SurfaceContainer_getInstance() {
    ColorSchemeKeyTokens_initEntries();
    return ColorSchemeKeyTokens_SurfaceContainer_instance;
  }
  var androidx_compose_material3_tokens_ConnectedButtonGroupSmallTokens$stable;
  var androidx_compose_material3_tokens_DateInputModalTokens$stable;
  var androidx_compose_material3_tokens_DatePickerModalTokens$stable;
  var androidx_compose_material3_tokens_DialogTokens$stable;
  var androidx_compose_material3_tokens_DividerTokens$stable;
  var androidx_compose_material3_tokens_DockedToolbarTokens$stable;
  var androidx_compose_material3_tokens_DragHandleTokens$stable;
  var androidx_compose_material3_tokens_ElevatedButtonTokens$stable;
  var androidx_compose_material3_tokens_ElevatedCardTokens$stable;
  var androidx_compose_material3_tokens_ElevationTokens$stable;
  function ElevationTokens() {
    ElevationTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.jdh_1 = _Dp___init__impl__ms3zkb(0.0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_0.kdh_1 = _Dp___init__impl__ms3zkb(1.0);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_1.ldh_1 = _Dp___init__impl__ms3zkb(3.0);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_2.mdh_1 = _Dp___init__impl__ms3zkb(6.0);
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_3.ndh_1 = _Dp___init__impl__ms3zkb(8.0);
    var tmp_4 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp_4.odh_1 = _Dp___init__impl__ms3zkb(12.0);
  }
  var ElevationTokens_instance;
  function ElevationTokens_getInstance() {
    if (ElevationTokens_instance == null)
      new ElevationTokens();
    return ElevationTokens_instance;
  }
  var androidx_compose_material3_tokens_ExpandedListTokens$stable;
  var androidx_compose_material3_tokens_ExpressiveMotionTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabLargeTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabMediumTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabPrimaryTokens$stable;
  var androidx_compose_material3_tokens_ExtendedFabSmallTokens$stable;
  var androidx_compose_material3_tokens_FabBaselineTokens$stable;
  var androidx_compose_material3_tokens_FabLargeTokens$stable;
  var androidx_compose_material3_tokens_FabMediumTokens$stable;
  var androidx_compose_material3_tokens_FabMenuBaselineTokens$stable;
  var androidx_compose_material3_tokens_FabPrimaryContainerTokens$stable;
  var androidx_compose_material3_tokens_FabSecondaryContainerTokens$stable;
  var androidx_compose_material3_tokens_FabSmallTokens$stable;
  var androidx_compose_material3_tokens_FilledAutocompleteTokens$stable;
  var androidx_compose_material3_tokens_FilledButtonTokens$stable;
  function FilledButtonTokens() {
    FilledButtonTokens_instance = this;
    this.ld4_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.md4_1 = ElevationTokens_getInstance().jdh_1;
    this.nd4_1 = ColorSchemeKeyTokens_OnSurface_getInstance();
    this.od4_1 = ElevationTokens_getInstance().jdh_1;
    this.pd4_1 = 0.1;
    this.qd4_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.rd4_1 = 0.38;
    this.sd4_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.td4_1 = 0.38;
    this.ud4_1 = ElevationTokens_getInstance().jdh_1;
    this.vd4_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.wd4_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.xd4_1 = ElevationTokens_getInstance().kdh_1;
    this.yd4_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.zd4_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ad5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.bd5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.cd5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.dd5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ed5_1 = ElevationTokens_getInstance().jdh_1;
    this.fd5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.gd5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.hd5_1 = ColorSchemeKeyTokens_Primary_getInstance();
    this.id5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.jd5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.kd5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.ld5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.md5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.nd5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.od5_1 = ColorSchemeKeyTokens_OnPrimary_getInstance();
    this.pd5_1 = ColorSchemeKeyTokens_SurfaceContainer_getInstance();
    this.qd5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.rd5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.sd5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.td5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.ud5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.vd5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
    this.wd5_1 = ColorSchemeKeyTokens_OnSurfaceVariant_getInstance();
  }
  var FilledButtonTokens_instance;
  function FilledButtonTokens_getInstance() {
    if (FilledButtonTokens_instance == null)
      new FilledButtonTokens();
    return FilledButtonTokens_instance;
  }
  var androidx_compose_material3_tokens_FilledCardTokens$stable;
  var androidx_compose_material3_tokens_FilledIconButtonTokens$stable;
  var androidx_compose_material3_tokens_FilledTextFieldTokens$stable;
  var androidx_compose_material3_tokens_FilledTonalButtonTokens$stable;
  var androidx_compose_material3_tokens_FilledTonalIconButtonTokens$stable;
  var androidx_compose_material3_tokens_FilterChipTokens$stable;
  var androidx_compose_material3_tokens_FloatingToolbarTokens$stable;
  var androidx_compose_material3_tokens_StandardIconButtonTokens$stable;
  var androidx_compose_material3_tokens_InputChipTokens$stable;
  var androidx_compose_material3_tokens_LargeIconButtonTokens$stable;
  var androidx_compose_material3_tokens_LinearProgressIndicatorTokens$stable;
  var androidx_compose_material3_tokens_ListTokens$stable;
  var androidx_compose_material3_tokens_LoadingIndicatorTokens$stable;
  var androidx_compose_material3_tokens_MediumIconButtonTokens$stable;
  var androidx_compose_material3_tokens_MenuTokens$stable;
  var androidx_compose_material3_tokens_MotionTokens$stable;
  var androidx_compose_material3_tokens_NavigationBarHorizontalItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationBarTokens$stable;
  var androidx_compose_material3_tokens_NavigationBarVerticalItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationDrawerTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailBaselineItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailCollapsedTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailColorTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailExpandedTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailHorizontalItemTokens$stable;
  var androidx_compose_material3_tokens_NavigationRailVerticalItemTokens$stable;
  var androidx_compose_material3_tokens_OutlinedAutocompleteTokens$stable;
  var androidx_compose_material3_tokens_OutlinedButtonTokens$stable;
  var androidx_compose_material3_tokens_OutlinedCardTokens$stable;
  var androidx_compose_material3_tokens_OutlinedIconButtonTokens$stable;
  var androidx_compose_material3_tokens_OutlinedSegmentedButtonTokens$stable;
  var androidx_compose_material3_tokens_OutlinedTextFieldTokens$stable;
  var androidx_compose_material3_tokens_PaletteTokens$stable;
  function PaletteTokens() {
    PaletteTokens_instance = this;
    this.pdh_1 = Color_0(0, 0, 0);
    this.qdh_1 = Color_0(0, 0, 0);
    this.rdh_1 = Color_0(65, 14, 11);
    this.sdh_1 = Color_0(255, 255, 255);
    this.tdh_1 = Color_0(96, 20, 16);
    this.udh_1 = Color_0(140, 29, 24);
    this.vdh_1 = Color_0(179, 38, 30);
    this.wdh_1 = Color_0(220, 54, 46);
    this.xdh_1 = Color_0(228, 105, 98);
    this.ydh_1 = Color_0(236, 146, 142);
    this.zdh_1 = Color_0(242, 184, 181);
    this.adi_1 = Color_0(249, 222, 220);
    this.bdi_1 = Color_0(252, 238, 238);
    this.cdi_1 = Color_0(255, 251, 249);
    this.ddi_1 = Color_0(0, 0, 0);
    this.edi_1 = Color_0(29, 27, 32);
    this.fdi_1 = Color_0(255, 255, 255);
    this.gdi_1 = Color_0(33, 31, 38);
    this.hdi_1 = Color_0(43, 41, 48);
    this.idi_1 = Color_0(50, 47, 53);
    this.jdi_1 = Color_0(54, 52, 59);
    this.kdi_1 = Color_0(59, 56, 62);
    this.ldi_1 = Color_0(72, 70, 76);
    this.mdi_1 = Color_0(15, 13, 19);
    this.ndi_1 = Color_0(96, 93, 100);
    this.odi_1 = Color_0(121, 118, 125);
    this.pdi_1 = Color_0(20, 18, 24);
    this.qdi_1 = Color_0(147, 143, 150);
    this.rdi_1 = Color_0(174, 169, 177);
    this.sdi_1 = Color_0(202, 197, 205);
    this.tdi_1 = Color_0(222, 216, 225);
    this.udi_1 = Color_0(230, 224, 233);
    this.vdi_1 = Color_0(236, 230, 240);
    this.wdi_1 = Color_0(243, 237, 247);
    this.xdi_1 = Color_0(245, 239, 247);
    this.ydi_1 = Color_0(247, 242, 250);
    this.zdi_1 = Color_0(254, 247, 255);
    this.adj_1 = Color_0(255, 251, 255);
    this.bdj_1 = Color_0(0, 0, 0);
    this.cdj_1 = Color_0(29, 26, 34);
    this.ddj_1 = Color_0(255, 255, 255);
    this.edj_1 = Color_0(50, 47, 55);
    this.fdj_1 = Color_0(73, 69, 79);
    this.gdj_1 = Color_0(96, 93, 102);
    this.hdj_1 = Color_0(121, 116, 126);
    this.idj_1 = Color_0(147, 143, 153);
    this.jdj_1 = Color_0(174, 169, 180);
    this.kdj_1 = Color_0(202, 196, 208);
    this.ldj_1 = Color_0(231, 224, 236);
    this.mdj_1 = Color_0(245, 238, 250);
    this.ndj_1 = Color_0(255, 251, 254);
    this.odj_1 = Color_0(0, 0, 0);
    this.pdj_1 = Color_0(33, 0, 93);
    this.qdj_1 = Color_0(255, 255, 255);
    this.rdj_1 = Color_0(56, 30, 114);
    this.sdj_1 = Color_0(79, 55, 139);
    this.tdj_1 = Color_0(103, 80, 164);
    this.udj_1 = Color_0(127, 103, 190);
    this.vdj_1 = Color_0(154, 130, 219);
    this.wdj_1 = Color_0(182, 157, 248);
    this.xdj_1 = Color_0(208, 188, 255);
    this.ydj_1 = Color_0(234, 221, 255);
    this.zdj_1 = Color_0(246, 237, 255);
    this.adk_1 = Color_0(255, 251, 254);
    this.bdk_1 = Color_0(0, 0, 0);
    this.cdk_1 = Color_0(29, 25, 43);
    this.ddk_1 = Color_0(255, 255, 255);
    this.edk_1 = Color_0(51, 45, 65);
    this.fdk_1 = Color_0(74, 68, 88);
    this.gdk_1 = Color_0(98, 91, 113);
    this.hdk_1 = Color_0(122, 114, 137);
    this.idk_1 = Color_0(149, 141, 165);
    this.jdk_1 = Color_0(176, 167, 192);
    this.kdk_1 = Color_0(204, 194, 220);
    this.ldk_1 = Color_0(232, 222, 248);
    this.mdk_1 = Color_0(246, 237, 255);
    this.ndk_1 = Color_0(255, 251, 254);
    this.odk_1 = Color_0(0, 0, 0);
    this.pdk_1 = Color_0(49, 17, 29);
    this.qdk_1 = Color_0(255, 255, 255);
    this.rdk_1 = Color_0(73, 37, 50);
    this.sdk_1 = Color_0(99, 59, 72);
    this.tdk_1 = Color_0(125, 82, 96);
    this.udk_1 = Color_0(152, 105, 119);
    this.vdk_1 = Color_0(181, 131, 146);
    this.wdk_1 = Color_0(210, 157, 172);
    this.xdk_1 = Color_0(239, 184, 200);
    this.ydk_1 = Color_0(255, 216, 228);
    this.zdk_1 = Color_0(255, 236, 241);
    this.adl_1 = Color_0(255, 251, 250);
    this.bdl_1 = Color_0(255, 255, 255);
  }
  var PaletteTokens_instance;
  function PaletteTokens_getInstance() {
    if (PaletteTokens_instance == null)
      new PaletteTokens();
    return PaletteTokens_instance;
  }
  var androidx_compose_material3_tokens_PlainTooltipTokens$stable;
  var androidx_compose_material3_tokens_PrimaryNavigationTabTokens$stable;
  var androidx_compose_material3_tokens_ProgressIndicatorTokens$stable;
  var androidx_compose_material3_tokens_RadioButtonTokens$stable;
  var androidx_compose_material3_tokens_ReorderListTokens$stable;
  var androidx_compose_material3_tokens_RevealListTokens$stable;
  var androidx_compose_material3_tokens_RichTooltipTokens$stable;
  var androidx_compose_material3_tokens_ScrimTokens$stable;
  var androidx_compose_material3_tokens_SearchBarTokens$stable;
  var androidx_compose_material3_tokens_SearchViewTokens$stable;
  var androidx_compose_material3_tokens_SecondaryNavigationTabTokens$stable;
  var androidx_compose_material3_tokens_SegmentedMenuTokens$stable;
  var ShapeKeyTokens_CornerExtraExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLarge_instance;
  var ShapeKeyTokens_CornerExtraLargeIncreased_instance;
  var ShapeKeyTokens_CornerExtraLargeTop_instance;
  var ShapeKeyTokens_CornerExtraSmall_instance;
  var ShapeKeyTokens_CornerExtraSmallTop_instance;
  var ShapeKeyTokens_CornerFull_instance;
  var ShapeKeyTokens_CornerLarge_instance;
  var ShapeKeyTokens_CornerLargeEnd_instance;
  var ShapeKeyTokens_CornerLargeIncreased_instance;
  var ShapeKeyTokens_CornerLargeStart_instance;
  var ShapeKeyTokens_CornerLargeTop_instance;
  var ShapeKeyTokens_CornerMedium_instance;
  var ShapeKeyTokens_CornerNone_instance;
  var ShapeKeyTokens_CornerSmall_instance;
  var ShapeKeyTokens_entriesInitialized;
  function ShapeKeyTokens_initEntries() {
    if (ShapeKeyTokens_entriesInitialized)
      return Unit_instance;
    ShapeKeyTokens_entriesInitialized = true;
    ShapeKeyTokens_CornerExtraExtraLarge_instance = new ShapeKeyTokens('CornerExtraExtraLarge', 0);
    ShapeKeyTokens_CornerExtraLarge_instance = new ShapeKeyTokens('CornerExtraLarge', 1);
    ShapeKeyTokens_CornerExtraLargeIncreased_instance = new ShapeKeyTokens('CornerExtraLargeIncreased', 2);
    ShapeKeyTokens_CornerExtraLargeTop_instance = new ShapeKeyTokens('CornerExtraLargeTop', 3);
    ShapeKeyTokens_CornerExtraSmall_instance = new ShapeKeyTokens('CornerExtraSmall', 4);
    ShapeKeyTokens_CornerExtraSmallTop_instance = new ShapeKeyTokens('CornerExtraSmallTop', 5);
    ShapeKeyTokens_CornerFull_instance = new ShapeKeyTokens('CornerFull', 6);
    ShapeKeyTokens_CornerLarge_instance = new ShapeKeyTokens('CornerLarge', 7);
    ShapeKeyTokens_CornerLargeEnd_instance = new ShapeKeyTokens('CornerLargeEnd', 8);
    ShapeKeyTokens_CornerLargeIncreased_instance = new ShapeKeyTokens('CornerLargeIncreased', 9);
    ShapeKeyTokens_CornerLargeStart_instance = new ShapeKeyTokens('CornerLargeStart', 10);
    ShapeKeyTokens_CornerLargeTop_instance = new ShapeKeyTokens('CornerLargeTop', 11);
    ShapeKeyTokens_CornerMedium_instance = new ShapeKeyTokens('CornerMedium', 12);
    ShapeKeyTokens_CornerNone_instance = new ShapeKeyTokens('CornerNone', 13);
    ShapeKeyTokens_CornerSmall_instance = new ShapeKeyTokens('CornerSmall', 14);
  }
  function ShapeKeyTokens(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ShapeKeyTokens_CornerExtraLarge_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerExtraLarge_instance;
  }
  function ShapeKeyTokens_CornerFull_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerFull_instance;
  }
  function ShapeKeyTokens_CornerLarge_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerLarge_instance;
  }
  function ShapeKeyTokens_CornerMedium_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerMedium_instance;
  }
  function ShapeKeyTokens_CornerSmall_getInstance() {
    ShapeKeyTokens_initEntries();
    return ShapeKeyTokens_CornerSmall_instance;
  }
  var androidx_compose_material3_tokens_ShapeTokens$stable;
  function ShapeTokens() {
    ShapeTokens_instance = this;
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(48.0);
    tmp.hdd_1 = RoundedCornerShape(tmp$ret$0);
    var tmp_0 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(28.0);
    tmp_0.idd_1 = RoundedCornerShape(tmp$ret$1);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(32.0);
    tmp_1.jdd_1 = RoundedCornerShape(tmp$ret$2);
    var tmp_2 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_3 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_4 = _Dp___init__impl__ms3zkb(28.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_5 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$6 = _Dp___init__impl__ms3zkb(0.0);
    tmp_2.kdd_1 = RoundedCornerShape_0(tmp_3, tmp_4, tmp_5, tmp$ret$6);
    var tmp_6 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$7 = _Dp___init__impl__ms3zkb(4.0);
    tmp_6.ldd_1 = RoundedCornerShape(tmp$ret$7);
    var tmp_7 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_8 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_9 = _Dp___init__impl__ms3zkb(4.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_10 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$11 = _Dp___init__impl__ms3zkb(0.0);
    tmp_7.mdd_1 = RoundedCornerShape_0(tmp_8, tmp_9, tmp_10, tmp$ret$11);
    this.ndd_1 = get_CircleShape();
    var tmp_11 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$12 = _Dp___init__impl__ms3zkb(16.0);
    tmp_11.odd_1 = RoundedCornerShape(tmp$ret$12);
    var tmp_12 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_13 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_14 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_15 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$16 = _Dp___init__impl__ms3zkb(0.0);
    tmp_12.pdd_1 = RoundedCornerShape_0(tmp_13, tmp_14, tmp_15, tmp$ret$16);
    var tmp_16 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$17 = _Dp___init__impl__ms3zkb(20.0);
    tmp_16.qdd_1 = RoundedCornerShape(tmp$ret$17);
    var tmp_17 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_18 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_19 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_20 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$21 = _Dp___init__impl__ms3zkb(16.0);
    tmp_17.rdd_1 = RoundedCornerShape_0(tmp_18, tmp_19, tmp_20, tmp$ret$21);
    var tmp_21 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_22 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_23 = _Dp___init__impl__ms3zkb(16.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp_24 = _Dp___init__impl__ms3zkb(0.0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$25 = _Dp___init__impl__ms3zkb(0.0);
    tmp_21.sdd_1 = RoundedCornerShape_0(tmp_22, tmp_23, tmp_24, tmp$ret$25);
    var tmp_25 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$26 = _Dp___init__impl__ms3zkb(12.0);
    tmp_25.tdd_1 = RoundedCornerShape(tmp$ret$26);
    this.udd_1 = get_RectangleShape();
    var tmp_26 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$27 = _Dp___init__impl__ms3zkb(8.0);
    tmp_26.vdd_1 = RoundedCornerShape(tmp$ret$27);
    var tmp_27 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$28 = _Dp___init__impl__ms3zkb(48.0);
    tmp_27.wdd_1 = CornerSize_0(tmp$ret$28);
    var tmp_28 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$29 = _Dp___init__impl__ms3zkb(28.0);
    tmp_28.xdd_1 = CornerSize_0(tmp$ret$29);
    var tmp_29 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$30 = _Dp___init__impl__ms3zkb(32.0);
    tmp_29.ydd_1 = CornerSize_0(tmp$ret$30);
    var tmp_30 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$31 = _Dp___init__impl__ms3zkb(4.0);
    tmp_30.zdd_1 = CornerSize_0(tmp$ret$31);
    var tmp_31 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$32 = _Dp___init__impl__ms3zkb(16.0);
    tmp_31.ade_1 = CornerSize_0(tmp$ret$32);
    var tmp_32 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$33 = _Dp___init__impl__ms3zkb(20.0);
    tmp_32.bde_1 = CornerSize_0(tmp$ret$33);
    var tmp_33 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$34 = _Dp___init__impl__ms3zkb(12.0);
    tmp_33.cde_1 = CornerSize_0(tmp$ret$34);
    var tmp_34 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$35 = _Dp___init__impl__ms3zkb(0.0);
    tmp_34.dde_1 = CornerSize_0(tmp$ret$35);
    var tmp_35 = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$36 = _Dp___init__impl__ms3zkb(8.0);
    tmp_35.ede_1 = CornerSize_0(tmp$ret$36);
  }
  var ShapeTokens_instance;
  function ShapeTokens_getInstance() {
    if (ShapeTokens_instance == null)
      new ShapeTokens();
    return ShapeTokens_instance;
  }
  var androidx_compose_material3_tokens_SheetBottomTokens$stable;
  var androidx_compose_material3_tokens_SliderTokens$stable;
  var androidx_compose_material3_tokens_SmallIconButtonTokens$stable;
  var androidx_compose_material3_tokens_SnackbarTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonLargeTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonMediumTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonSmallTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonXLargeTokens$stable;
  var androidx_compose_material3_tokens_SplitButtonXSmallTokens$stable;
  var androidx_compose_material3_tokens_StandardMenuTokens$stable;
  var androidx_compose_material3_tokens_StandardMotionTokens$stable;
  function StandardMotionTokens() {
    this.dda_1 = 0.9;
    this.eda_1 = 700.0;
    this.fda_1 = 1.0;
    this.gda_1 = 1600.0;
    this.hda_1 = 0.9;
    this.ida_1 = 1400.0;
    this.jda_1 = 1.0;
    this.kda_1 = 3800.0;
    this.lda_1 = 0.9;
    this.mda_1 = 300.0;
    this.nda_1 = 1.0;
    this.oda_1 = 800.0;
  }
  var StandardMotionTokens_instance;
  function StandardMotionTokens_getInstance() {
    return StandardMotionTokens_instance;
  }
  var androidx_compose_material3_tokens_StateTokens$stable;
  var androidx_compose_material3_tokens_SuggestionChipTokens$stable;
  var androidx_compose_material3_tokens_SwitchTokens$stable;
  var androidx_compose_material3_tokens_TextButtonTokens$stable;
  var androidx_compose_material3_tokens_TimeInputTokens$stable;
  var androidx_compose_material3_tokens_TimePickerTokens$stable;
  var androidx_compose_material3_tokens_TonalButtonTokens$stable;
  var androidx_compose_material3_tokens_TypeScaleTokens$stable;
  function TypeScaleTokens() {
    TypeScaleTokens_instance = this;
    this.cdl_1 = TypefaceTokens_getInstance().xdq_1;
    this.ddl_1 = get_sp(24.0);
    this.edl_1 = get_sp_0(16);
    this.fdl_1 = get_sp(0.5);
    this.gdl_1 = TypefaceTokens_getInstance().adr_1;
    this.hdl_1 = TypefaceTokens_getInstance().xdq_1;
    this.idl_1 = get_sp(20.0);
    this.jdl_1 = get_sp_0(14);
    this.kdl_1 = get_sp(0.2);
    this.ldl_1 = TypefaceTokens_getInstance().adr_1;
    this.mdl_1 = TypefaceTokens_getInstance().xdq_1;
    this.ndl_1 = get_sp(16.0);
    this.odl_1 = get_sp_0(12);
    this.pdl_1 = get_sp(0.4);
    this.qdl_1 = TypefaceTokens_getInstance().adr_1;
    this.rdl_1 = TypefaceTokens_getInstance().wdq_1;
    this.sdl_1 = get_sp(64.0);
    this.tdl_1 = get_sp_0(57);
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.TextUnit.unaryMinus' call
    var this_0 = get_sp(0.2);
    checkArithmetic(this_0);
    tmp.udl_1 = pack(_TextUnit___get_rawType__impl__tu8yq5(this_0), -_TextUnit___get_value__impl__hpbx0k(this_0));
    this.vdl_1 = TypefaceTokens_getInstance().adr_1;
    this.wdl_1 = TypefaceTokens_getInstance().wdq_1;
    this.xdl_1 = get_sp(52.0);
    this.ydl_1 = get_sp_0(45);
    this.zdl_1 = get_sp(0.0);
    this.adm_1 = TypefaceTokens_getInstance().adr_1;
    this.bdm_1 = TypefaceTokens_getInstance().wdq_1;
    this.cdm_1 = get_sp(44.0);
    this.ddm_1 = get_sp_0(36);
    this.edm_1 = get_sp(0.0);
    this.fdm_1 = TypefaceTokens_getInstance().adr_1;
    this.gdm_1 = TypefaceTokens_getInstance().wdq_1;
    this.hdm_1 = get_sp(40.0);
    this.idm_1 = get_sp_0(32);
    this.jdm_1 = get_sp(0.0);
    this.kdm_1 = TypefaceTokens_getInstance().adr_1;
    this.ldm_1 = TypefaceTokens_getInstance().wdq_1;
    this.mdm_1 = get_sp(36.0);
    this.ndm_1 = get_sp_0(28);
    this.odm_1 = get_sp(0.0);
    this.pdm_1 = TypefaceTokens_getInstance().adr_1;
    this.qdm_1 = TypefaceTokens_getInstance().wdq_1;
    this.rdm_1 = get_sp(32.0);
    this.sdm_1 = get_sp_0(24);
    this.tdm_1 = get_sp(0.0);
    this.udm_1 = TypefaceTokens_getInstance().adr_1;
    this.vdm_1 = TypefaceTokens_getInstance().xdq_1;
    this.wdm_1 = get_sp(20.0);
    this.xdm_1 = get_sp_0(14);
    this.ydm_1 = get_sp(0.1);
    this.zdm_1 = TypefaceTokens_getInstance().zdq_1;
    this.adn_1 = TypefaceTokens_getInstance().xdq_1;
    this.bdn_1 = get_sp(16.0);
    this.cdn_1 = get_sp_0(12);
    this.ddn_1 = get_sp(0.5);
    this.edn_1 = TypefaceTokens_getInstance().zdq_1;
    this.fdn_1 = TypefaceTokens_getInstance().xdq_1;
    this.gdn_1 = get_sp(16.0);
    this.hdn_1 = get_sp_0(11);
    this.idn_1 = get_sp(0.5);
    this.jdn_1 = TypefaceTokens_getInstance().zdq_1;
    this.kdn_1 = TypefaceTokens_getInstance().wdq_1;
    this.ldn_1 = get_sp(28.0);
    this.mdn_1 = get_sp_0(22);
    this.ndn_1 = get_sp(0.0);
    this.odn_1 = TypefaceTokens_getInstance().adr_1;
    this.pdn_1 = TypefaceTokens_getInstance().xdq_1;
    this.qdn_1 = get_sp(24.0);
    this.rdn_1 = get_sp_0(16);
    this.sdn_1 = get_sp(0.2);
    this.tdn_1 = TypefaceTokens_getInstance().zdq_1;
    this.udn_1 = TypefaceTokens_getInstance().xdq_1;
    this.vdn_1 = get_sp(20.0);
    this.wdn_1 = get_sp_0(14);
    this.xdn_1 = get_sp(0.1);
    this.ydn_1 = TypefaceTokens_getInstance().zdq_1;
    this.zdn_1 = TypefaceTokens_getInstance().xdq_1;
    this.ado_1 = get_sp(24.0);
    this.bdo_1 = get_sp_0(16);
    this.cdo_1 = get_sp(0.15);
    this.ddo_1 = TypefaceTokens_getInstance().zdq_1;
    this.edo_1 = TypefaceTokens_getInstance().xdq_1;
    this.fdo_1 = get_sp(20.0);
    this.gdo_1 = get_sp_0(14);
    this.hdo_1 = get_sp(0.25);
    this.ido_1 = TypefaceTokens_getInstance().zdq_1;
    this.jdo_1 = TypefaceTokens_getInstance().xdq_1;
    this.kdo_1 = get_sp(16.0);
    this.ldo_1 = get_sp_0(12);
    this.mdo_1 = get_sp(0.4);
    this.ndo_1 = TypefaceTokens_getInstance().zdq_1;
    this.odo_1 = TypefaceTokens_getInstance().wdq_1;
    this.pdo_1 = get_sp(64.0);
    this.qdo_1 = get_sp_0(57);
    this.rdo_1 = get_sp_0(0);
    this.sdo_1 = TypefaceTokens_getInstance().zdq_1;
    this.tdo_1 = TypefaceTokens_getInstance().wdq_1;
    this.udo_1 = get_sp(52.0);
    this.vdo_1 = get_sp_0(45);
    this.wdo_1 = get_sp_0(0);
    this.xdo_1 = TypefaceTokens_getInstance().zdq_1;
    this.ydo_1 = TypefaceTokens_getInstance().wdq_1;
    this.zdo_1 = get_sp(44.0);
    this.adp_1 = get_sp_0(36);
    this.bdp_1 = get_sp_0(0);
    this.cdp_1 = TypefaceTokens_getInstance().zdq_1;
    this.ddp_1 = TypefaceTokens_getInstance().wdq_1;
    this.edp_1 = get_sp(40.0);
    this.fdp_1 = get_sp_0(32);
    this.gdp_1 = get_sp_0(0);
    this.hdp_1 = TypefaceTokens_getInstance().zdq_1;
    this.idp_1 = TypefaceTokens_getInstance().wdq_1;
    this.jdp_1 = get_sp(36.0);
    this.kdp_1 = get_sp_0(28);
    this.ldp_1 = get_sp_0(0);
    this.mdp_1 = TypefaceTokens_getInstance().zdq_1;
    this.ndp_1 = TypefaceTokens_getInstance().wdq_1;
    this.odp_1 = get_sp(32.0);
    this.pdp_1 = get_sp_0(24);
    this.qdp_1 = get_sp_0(0);
    this.rdp_1 = TypefaceTokens_getInstance().zdq_1;
    this.sdp_1 = TypefaceTokens_getInstance().xdq_1;
    this.tdp_1 = get_sp(20.0);
    this.udp_1 = get_sp_0(14);
    this.vdp_1 = get_sp(0.1);
    this.wdp_1 = TypefaceTokens_getInstance().ydq_1;
    this.xdp_1 = TypefaceTokens_getInstance().xdq_1;
    this.ydp_1 = get_sp(16.0);
    this.zdp_1 = get_sp_0(12);
    this.adq_1 = get_sp(0.5);
    this.bdq_1 = TypefaceTokens_getInstance().ydq_1;
    this.cdq_1 = TypefaceTokens_getInstance().xdq_1;
    this.ddq_1 = get_sp(16.0);
    this.edq_1 = get_sp_0(11);
    this.fdq_1 = get_sp(0.5);
    this.gdq_1 = TypefaceTokens_getInstance().ydq_1;
    this.hdq_1 = TypefaceTokens_getInstance().wdq_1;
    this.idq_1 = get_sp(28.0);
    this.jdq_1 = get_sp_0(22);
    this.kdq_1 = get_sp_0(0);
    this.ldq_1 = TypefaceTokens_getInstance().zdq_1;
    this.mdq_1 = TypefaceTokens_getInstance().xdq_1;
    this.ndq_1 = get_sp(24.0);
    this.odq_1 = get_sp_0(16);
    this.pdq_1 = get_sp(0.15);
    this.qdq_1 = TypefaceTokens_getInstance().ydq_1;
    this.rdq_1 = TypefaceTokens_getInstance().xdq_1;
    this.sdq_1 = get_sp(20.0);
    this.tdq_1 = get_sp_0(14);
    this.udq_1 = get_sp(0.1);
    this.vdq_1 = TypefaceTokens_getInstance().ydq_1;
  }
  var TypeScaleTokens_instance;
  function TypeScaleTokens_getInstance() {
    if (TypeScaleTokens_instance == null)
      new TypeScaleTokens();
    return TypeScaleTokens_instance;
  }
  var androidx_compose_material3_tokens_TypefaceTokens$stable;
  function TypefaceTokens() {
    TypefaceTokens_instance = this;
    this.wdq_1 = Companion_getInstance_9().v5t_1;
    this.xdq_1 = Companion_getInstance_9().v5t_1;
    this.ydq_1 = Companion_getInstance_10().k5t_1;
    this.zdq_1 = Companion_getInstance_10().i5t_1;
    this.adr_1 = Companion_getInstance_10().h5t_1;
  }
  var TypefaceTokens_instance;
  function TypefaceTokens_getInstance() {
    if (TypefaceTokens_instance == null)
      new TypefaceTokens();
    return TypefaceTokens_instance;
  }
  function get_DefaultLineHeightStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultLineHeightStyle;
  }
  var DefaultLineHeightStyle;
  function get_DefaultTextStyle() {
    _init_properties_TypographyTokens_kt__by6b7t();
    return DefaultTextStyle;
  }
  var DefaultTextStyle;
  var androidx_compose_material3_tokens_TypographyTokens$stable;
  function TypographyTokens(fontFamily) {
    fontFamily = fontFamily === VOID ? null : fontFamily;
    this.fde_1 = fontFamily;
    var tmp = this;
    var tmp1_$this = get_DefaultTextStyle();
    var tmp0_elvis_lhs = this.fde_1;
    var tmp2_fontFamily = tmp0_elvis_lhs == null ? TypeScaleTokens_getInstance().cdl_1 : tmp0_elvis_lhs;
    var tmp3_fontWeight = TypeScaleTokens_getInstance().gdl_1;
    var tmp4_fontSize = TypeScaleTokens_getInstance().edl_1;
    var tmp5_lineHeight = TypeScaleTokens_getInstance().ddl_1;
    var tmp6_letterSpacing = TypeScaleTokens_getInstance().fdl_1;
    tmp.gde_1 = tmp1_$this.n5v(VOID, tmp4_fontSize, tmp3_fontWeight, VOID, VOID, tmp2_fontFamily, VOID, tmp6_letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight);
    var tmp_0 = this;
    var tmp1_$this_0 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_0 = this.fde_1;
    var tmp2_fontFamily_0 = tmp0_elvis_lhs_0 == null ? TypeScaleTokens_getInstance().hdl_1 : tmp0_elvis_lhs_0;
    var tmp3_fontWeight_0 = TypeScaleTokens_getInstance().ldl_1;
    var tmp4_fontSize_0 = TypeScaleTokens_getInstance().jdl_1;
    var tmp5_lineHeight_0 = TypeScaleTokens_getInstance().idl_1;
    var tmp6_letterSpacing_0 = TypeScaleTokens_getInstance().kdl_1;
    tmp_0.hde_1 = tmp1_$this_0.n5v(VOID, tmp4_fontSize_0, tmp3_fontWeight_0, VOID, VOID, tmp2_fontFamily_0, VOID, tmp6_letterSpacing_0, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_0);
    var tmp_1 = this;
    var tmp1_$this_1 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_1 = this.fde_1;
    var tmp2_fontFamily_1 = tmp0_elvis_lhs_1 == null ? TypeScaleTokens_getInstance().mdl_1 : tmp0_elvis_lhs_1;
    var tmp3_fontWeight_1 = TypeScaleTokens_getInstance().qdl_1;
    var tmp4_fontSize_1 = TypeScaleTokens_getInstance().odl_1;
    var tmp5_lineHeight_1 = TypeScaleTokens_getInstance().ndl_1;
    var tmp6_letterSpacing_1 = TypeScaleTokens_getInstance().pdl_1;
    tmp_1.ide_1 = tmp1_$this_1.n5v(VOID, tmp4_fontSize_1, tmp3_fontWeight_1, VOID, VOID, tmp2_fontFamily_1, VOID, tmp6_letterSpacing_1, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_1);
    var tmp_2 = this;
    var tmp1_$this_2 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_2 = this.fde_1;
    var tmp2_fontFamily_2 = tmp0_elvis_lhs_2 == null ? TypeScaleTokens_getInstance().rdl_1 : tmp0_elvis_lhs_2;
    var tmp3_fontWeight_2 = TypeScaleTokens_getInstance().vdl_1;
    var tmp4_fontSize_2 = TypeScaleTokens_getInstance().tdl_1;
    var tmp5_lineHeight_2 = TypeScaleTokens_getInstance().sdl_1;
    var tmp6_letterSpacing_2 = TypeScaleTokens_getInstance().udl_1;
    tmp_2.jde_1 = tmp1_$this_2.n5v(VOID, tmp4_fontSize_2, tmp3_fontWeight_2, VOID, VOID, tmp2_fontFamily_2, VOID, tmp6_letterSpacing_2, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_2);
    var tmp_3 = this;
    var tmp1_$this_3 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_3 = this.fde_1;
    var tmp2_fontFamily_3 = tmp0_elvis_lhs_3 == null ? TypeScaleTokens_getInstance().wdl_1 : tmp0_elvis_lhs_3;
    var tmp3_fontWeight_3 = TypeScaleTokens_getInstance().adm_1;
    var tmp4_fontSize_3 = TypeScaleTokens_getInstance().ydl_1;
    var tmp5_lineHeight_3 = TypeScaleTokens_getInstance().xdl_1;
    var tmp6_letterSpacing_3 = TypeScaleTokens_getInstance().zdl_1;
    tmp_3.kde_1 = tmp1_$this_3.n5v(VOID, tmp4_fontSize_3, tmp3_fontWeight_3, VOID, VOID, tmp2_fontFamily_3, VOID, tmp6_letterSpacing_3, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_3);
    var tmp_4 = this;
    var tmp1_$this_4 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_4 = this.fde_1;
    var tmp2_fontFamily_4 = tmp0_elvis_lhs_4 == null ? TypeScaleTokens_getInstance().bdm_1 : tmp0_elvis_lhs_4;
    var tmp3_fontWeight_4 = TypeScaleTokens_getInstance().fdm_1;
    var tmp4_fontSize_4 = TypeScaleTokens_getInstance().ddm_1;
    var tmp5_lineHeight_4 = TypeScaleTokens_getInstance().cdm_1;
    var tmp6_letterSpacing_4 = TypeScaleTokens_getInstance().edm_1;
    tmp_4.lde_1 = tmp1_$this_4.n5v(VOID, tmp4_fontSize_4, tmp3_fontWeight_4, VOID, VOID, tmp2_fontFamily_4, VOID, tmp6_letterSpacing_4, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_4);
    var tmp_5 = this;
    var tmp1_$this_5 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_5 = this.fde_1;
    var tmp2_fontFamily_5 = tmp0_elvis_lhs_5 == null ? TypeScaleTokens_getInstance().gdm_1 : tmp0_elvis_lhs_5;
    var tmp3_fontWeight_5 = TypeScaleTokens_getInstance().kdm_1;
    var tmp4_fontSize_5 = TypeScaleTokens_getInstance().idm_1;
    var tmp5_lineHeight_5 = TypeScaleTokens_getInstance().hdm_1;
    var tmp6_letterSpacing_5 = TypeScaleTokens_getInstance().jdm_1;
    tmp_5.mde_1 = tmp1_$this_5.n5v(VOID, tmp4_fontSize_5, tmp3_fontWeight_5, VOID, VOID, tmp2_fontFamily_5, VOID, tmp6_letterSpacing_5, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_5);
    var tmp_6 = this;
    var tmp1_$this_6 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_6 = this.fde_1;
    var tmp2_fontFamily_6 = tmp0_elvis_lhs_6 == null ? TypeScaleTokens_getInstance().ldm_1 : tmp0_elvis_lhs_6;
    var tmp3_fontWeight_6 = TypeScaleTokens_getInstance().pdm_1;
    var tmp4_fontSize_6 = TypeScaleTokens_getInstance().ndm_1;
    var tmp5_lineHeight_6 = TypeScaleTokens_getInstance().mdm_1;
    var tmp6_letterSpacing_6 = TypeScaleTokens_getInstance().odm_1;
    tmp_6.nde_1 = tmp1_$this_6.n5v(VOID, tmp4_fontSize_6, tmp3_fontWeight_6, VOID, VOID, tmp2_fontFamily_6, VOID, tmp6_letterSpacing_6, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_6);
    var tmp_7 = this;
    var tmp1_$this_7 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_7 = this.fde_1;
    var tmp2_fontFamily_7 = tmp0_elvis_lhs_7 == null ? TypeScaleTokens_getInstance().qdm_1 : tmp0_elvis_lhs_7;
    var tmp3_fontWeight_7 = TypeScaleTokens_getInstance().udm_1;
    var tmp4_fontSize_7 = TypeScaleTokens_getInstance().sdm_1;
    var tmp5_lineHeight_7 = TypeScaleTokens_getInstance().rdm_1;
    var tmp6_letterSpacing_7 = TypeScaleTokens_getInstance().tdm_1;
    tmp_7.ode_1 = tmp1_$this_7.n5v(VOID, tmp4_fontSize_7, tmp3_fontWeight_7, VOID, VOID, tmp2_fontFamily_7, VOID, tmp6_letterSpacing_7, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_7);
    var tmp_8 = this;
    var tmp1_$this_8 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_8 = this.fde_1;
    var tmp2_fontFamily_8 = tmp0_elvis_lhs_8 == null ? TypeScaleTokens_getInstance().vdm_1 : tmp0_elvis_lhs_8;
    var tmp3_fontWeight_8 = TypeScaleTokens_getInstance().zdm_1;
    var tmp4_fontSize_8 = TypeScaleTokens_getInstance().xdm_1;
    var tmp5_lineHeight_8 = TypeScaleTokens_getInstance().wdm_1;
    var tmp6_letterSpacing_8 = TypeScaleTokens_getInstance().ydm_1;
    tmp_8.pde_1 = tmp1_$this_8.n5v(VOID, tmp4_fontSize_8, tmp3_fontWeight_8, VOID, VOID, tmp2_fontFamily_8, VOID, tmp6_letterSpacing_8, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_8);
    var tmp_9 = this;
    var tmp1_$this_9 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_9 = this.fde_1;
    var tmp2_fontFamily_9 = tmp0_elvis_lhs_9 == null ? TypeScaleTokens_getInstance().adn_1 : tmp0_elvis_lhs_9;
    var tmp3_fontWeight_9 = TypeScaleTokens_getInstance().edn_1;
    var tmp4_fontSize_9 = TypeScaleTokens_getInstance().cdn_1;
    var tmp5_lineHeight_9 = TypeScaleTokens_getInstance().bdn_1;
    var tmp6_letterSpacing_9 = TypeScaleTokens_getInstance().ddn_1;
    tmp_9.qde_1 = tmp1_$this_9.n5v(VOID, tmp4_fontSize_9, tmp3_fontWeight_9, VOID, VOID, tmp2_fontFamily_9, VOID, tmp6_letterSpacing_9, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_9);
    var tmp_10 = this;
    var tmp1_$this_10 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_10 = this.fde_1;
    var tmp2_fontFamily_10 = tmp0_elvis_lhs_10 == null ? TypeScaleTokens_getInstance().fdn_1 : tmp0_elvis_lhs_10;
    var tmp3_fontWeight_10 = TypeScaleTokens_getInstance().jdn_1;
    var tmp4_fontSize_10 = TypeScaleTokens_getInstance().hdn_1;
    var tmp5_lineHeight_10 = TypeScaleTokens_getInstance().gdn_1;
    var tmp6_letterSpacing_10 = TypeScaleTokens_getInstance().idn_1;
    tmp_10.rde_1 = tmp1_$this_10.n5v(VOID, tmp4_fontSize_10, tmp3_fontWeight_10, VOID, VOID, tmp2_fontFamily_10, VOID, tmp6_letterSpacing_10, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_10);
    var tmp_11 = this;
    var tmp1_$this_11 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_11 = this.fde_1;
    var tmp2_fontFamily_11 = tmp0_elvis_lhs_11 == null ? TypeScaleTokens_getInstance().kdn_1 : tmp0_elvis_lhs_11;
    var tmp3_fontWeight_11 = TypeScaleTokens_getInstance().odn_1;
    var tmp4_fontSize_11 = TypeScaleTokens_getInstance().mdn_1;
    var tmp5_lineHeight_11 = TypeScaleTokens_getInstance().ldn_1;
    var tmp6_letterSpacing_11 = TypeScaleTokens_getInstance().ndn_1;
    tmp_11.sde_1 = tmp1_$this_11.n5v(VOID, tmp4_fontSize_11, tmp3_fontWeight_11, VOID, VOID, tmp2_fontFamily_11, VOID, tmp6_letterSpacing_11, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_11);
    var tmp_12 = this;
    var tmp1_$this_12 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_12 = this.fde_1;
    var tmp2_fontFamily_12 = tmp0_elvis_lhs_12 == null ? TypeScaleTokens_getInstance().pdn_1 : tmp0_elvis_lhs_12;
    var tmp3_fontWeight_12 = TypeScaleTokens_getInstance().tdn_1;
    var tmp4_fontSize_12 = TypeScaleTokens_getInstance().rdn_1;
    var tmp5_lineHeight_12 = TypeScaleTokens_getInstance().qdn_1;
    var tmp6_letterSpacing_12 = TypeScaleTokens_getInstance().sdn_1;
    tmp_12.tde_1 = tmp1_$this_12.n5v(VOID, tmp4_fontSize_12, tmp3_fontWeight_12, VOID, VOID, tmp2_fontFamily_12, VOID, tmp6_letterSpacing_12, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_12);
    var tmp_13 = this;
    var tmp1_$this_13 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_13 = this.fde_1;
    var tmp2_fontFamily_13 = tmp0_elvis_lhs_13 == null ? TypeScaleTokens_getInstance().udn_1 : tmp0_elvis_lhs_13;
    var tmp3_fontWeight_13 = TypeScaleTokens_getInstance().ydn_1;
    var tmp4_fontSize_13 = TypeScaleTokens_getInstance().wdn_1;
    var tmp5_lineHeight_13 = TypeScaleTokens_getInstance().vdn_1;
    var tmp6_letterSpacing_13 = TypeScaleTokens_getInstance().xdn_1;
    tmp_13.ude_1 = tmp1_$this_13.n5v(VOID, tmp4_fontSize_13, tmp3_fontWeight_13, VOID, VOID, tmp2_fontFamily_13, VOID, tmp6_letterSpacing_13, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_13);
    var tmp_14 = this;
    var tmp1_$this_14 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_14 = this.fde_1;
    var tmp2_fontFamily_14 = tmp0_elvis_lhs_14 == null ? TypeScaleTokens_getInstance().zdn_1 : tmp0_elvis_lhs_14;
    var tmp3_fontWeight_14 = TypeScaleTokens_getInstance().ddo_1;
    var tmp4_fontSize_14 = TypeScaleTokens_getInstance().bdo_1;
    var tmp5_lineHeight_14 = TypeScaleTokens_getInstance().ado_1;
    var tmp6_letterSpacing_14 = TypeScaleTokens_getInstance().cdo_1;
    tmp_14.vde_1 = tmp1_$this_14.n5v(VOID, tmp4_fontSize_14, tmp3_fontWeight_14, VOID, VOID, tmp2_fontFamily_14, VOID, tmp6_letterSpacing_14, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_14);
    var tmp_15 = this;
    var tmp1_$this_15 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_15 = this.fde_1;
    var tmp2_fontFamily_15 = tmp0_elvis_lhs_15 == null ? TypeScaleTokens_getInstance().edo_1 : tmp0_elvis_lhs_15;
    var tmp3_fontWeight_15 = TypeScaleTokens_getInstance().ido_1;
    var tmp4_fontSize_15 = TypeScaleTokens_getInstance().gdo_1;
    var tmp5_lineHeight_15 = TypeScaleTokens_getInstance().fdo_1;
    var tmp6_letterSpacing_15 = TypeScaleTokens_getInstance().hdo_1;
    tmp_15.wde_1 = tmp1_$this_15.n5v(VOID, tmp4_fontSize_15, tmp3_fontWeight_15, VOID, VOID, tmp2_fontFamily_15, VOID, tmp6_letterSpacing_15, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_15);
    var tmp_16 = this;
    var tmp1_$this_16 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_16 = this.fde_1;
    var tmp2_fontFamily_16 = tmp0_elvis_lhs_16 == null ? TypeScaleTokens_getInstance().jdo_1 : tmp0_elvis_lhs_16;
    var tmp3_fontWeight_16 = TypeScaleTokens_getInstance().ndo_1;
    var tmp4_fontSize_16 = TypeScaleTokens_getInstance().ldo_1;
    var tmp5_lineHeight_16 = TypeScaleTokens_getInstance().kdo_1;
    var tmp6_letterSpacing_16 = TypeScaleTokens_getInstance().mdo_1;
    tmp_16.xde_1 = tmp1_$this_16.n5v(VOID, tmp4_fontSize_16, tmp3_fontWeight_16, VOID, VOID, tmp2_fontFamily_16, VOID, tmp6_letterSpacing_16, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_16);
    var tmp_17 = this;
    var tmp1_$this_17 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_17 = this.fde_1;
    var tmp2_fontFamily_17 = tmp0_elvis_lhs_17 == null ? TypeScaleTokens_getInstance().odo_1 : tmp0_elvis_lhs_17;
    var tmp3_fontWeight_17 = TypeScaleTokens_getInstance().sdo_1;
    var tmp4_fontSize_17 = TypeScaleTokens_getInstance().qdo_1;
    var tmp5_lineHeight_17 = TypeScaleTokens_getInstance().pdo_1;
    var tmp6_letterSpacing_17 = TypeScaleTokens_getInstance().rdo_1;
    tmp_17.yde_1 = tmp1_$this_17.n5v(VOID, tmp4_fontSize_17, tmp3_fontWeight_17, VOID, VOID, tmp2_fontFamily_17, VOID, tmp6_letterSpacing_17, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_17);
    var tmp_18 = this;
    var tmp1_$this_18 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_18 = this.fde_1;
    var tmp2_fontFamily_18 = tmp0_elvis_lhs_18 == null ? TypeScaleTokens_getInstance().tdo_1 : tmp0_elvis_lhs_18;
    var tmp3_fontWeight_18 = TypeScaleTokens_getInstance().xdo_1;
    var tmp4_fontSize_18 = TypeScaleTokens_getInstance().vdo_1;
    var tmp5_lineHeight_18 = TypeScaleTokens_getInstance().udo_1;
    var tmp6_letterSpacing_18 = TypeScaleTokens_getInstance().wdo_1;
    tmp_18.zde_1 = tmp1_$this_18.n5v(VOID, tmp4_fontSize_18, tmp3_fontWeight_18, VOID, VOID, tmp2_fontFamily_18, VOID, tmp6_letterSpacing_18, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_18);
    var tmp_19 = this;
    var tmp1_$this_19 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_19 = this.fde_1;
    var tmp2_fontFamily_19 = tmp0_elvis_lhs_19 == null ? TypeScaleTokens_getInstance().ydo_1 : tmp0_elvis_lhs_19;
    var tmp3_fontWeight_19 = TypeScaleTokens_getInstance().cdp_1;
    var tmp4_fontSize_19 = TypeScaleTokens_getInstance().adp_1;
    var tmp5_lineHeight_19 = TypeScaleTokens_getInstance().zdo_1;
    var tmp6_letterSpacing_19 = TypeScaleTokens_getInstance().bdp_1;
    tmp_19.adf_1 = tmp1_$this_19.n5v(VOID, tmp4_fontSize_19, tmp3_fontWeight_19, VOID, VOID, tmp2_fontFamily_19, VOID, tmp6_letterSpacing_19, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_19);
    var tmp_20 = this;
    var tmp1_$this_20 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_20 = this.fde_1;
    var tmp2_fontFamily_20 = tmp0_elvis_lhs_20 == null ? TypeScaleTokens_getInstance().ddp_1 : tmp0_elvis_lhs_20;
    var tmp3_fontWeight_20 = TypeScaleTokens_getInstance().hdp_1;
    var tmp4_fontSize_20 = TypeScaleTokens_getInstance().fdp_1;
    var tmp5_lineHeight_20 = TypeScaleTokens_getInstance().edp_1;
    var tmp6_letterSpacing_20 = TypeScaleTokens_getInstance().gdp_1;
    tmp_20.bdf_1 = tmp1_$this_20.n5v(VOID, tmp4_fontSize_20, tmp3_fontWeight_20, VOID, VOID, tmp2_fontFamily_20, VOID, tmp6_letterSpacing_20, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_20);
    var tmp_21 = this;
    var tmp1_$this_21 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_21 = this.fde_1;
    var tmp2_fontFamily_21 = tmp0_elvis_lhs_21 == null ? TypeScaleTokens_getInstance().idp_1 : tmp0_elvis_lhs_21;
    var tmp3_fontWeight_21 = TypeScaleTokens_getInstance().mdp_1;
    var tmp4_fontSize_21 = TypeScaleTokens_getInstance().kdp_1;
    var tmp5_lineHeight_21 = TypeScaleTokens_getInstance().jdp_1;
    var tmp6_letterSpacing_21 = TypeScaleTokens_getInstance().ldp_1;
    tmp_21.cdf_1 = tmp1_$this_21.n5v(VOID, tmp4_fontSize_21, tmp3_fontWeight_21, VOID, VOID, tmp2_fontFamily_21, VOID, tmp6_letterSpacing_21, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_21);
    var tmp_22 = this;
    var tmp1_$this_22 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_22 = this.fde_1;
    var tmp2_fontFamily_22 = tmp0_elvis_lhs_22 == null ? TypeScaleTokens_getInstance().ndp_1 : tmp0_elvis_lhs_22;
    var tmp3_fontWeight_22 = TypeScaleTokens_getInstance().rdp_1;
    var tmp4_fontSize_22 = TypeScaleTokens_getInstance().pdp_1;
    var tmp5_lineHeight_22 = TypeScaleTokens_getInstance().odp_1;
    var tmp6_letterSpacing_22 = TypeScaleTokens_getInstance().qdp_1;
    tmp_22.ddf_1 = tmp1_$this_22.n5v(VOID, tmp4_fontSize_22, tmp3_fontWeight_22, VOID, VOID, tmp2_fontFamily_22, VOID, tmp6_letterSpacing_22, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_22);
    var tmp_23 = this;
    var tmp1_$this_23 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_23 = this.fde_1;
    var tmp2_fontFamily_23 = tmp0_elvis_lhs_23 == null ? TypeScaleTokens_getInstance().sdp_1 : tmp0_elvis_lhs_23;
    var tmp3_fontWeight_23 = TypeScaleTokens_getInstance().wdp_1;
    var tmp4_fontSize_23 = TypeScaleTokens_getInstance().udp_1;
    var tmp5_lineHeight_23 = TypeScaleTokens_getInstance().tdp_1;
    var tmp6_letterSpacing_23 = TypeScaleTokens_getInstance().vdp_1;
    tmp_23.edf_1 = tmp1_$this_23.n5v(VOID, tmp4_fontSize_23, tmp3_fontWeight_23, VOID, VOID, tmp2_fontFamily_23, VOID, tmp6_letterSpacing_23, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_23);
    var tmp_24 = this;
    var tmp1_$this_24 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_24 = this.fde_1;
    var tmp2_fontFamily_24 = tmp0_elvis_lhs_24 == null ? TypeScaleTokens_getInstance().xdp_1 : tmp0_elvis_lhs_24;
    var tmp3_fontWeight_24 = TypeScaleTokens_getInstance().bdq_1;
    var tmp4_fontSize_24 = TypeScaleTokens_getInstance().zdp_1;
    var tmp5_lineHeight_24 = TypeScaleTokens_getInstance().ydp_1;
    var tmp6_letterSpacing_24 = TypeScaleTokens_getInstance().adq_1;
    tmp_24.fdf_1 = tmp1_$this_24.n5v(VOID, tmp4_fontSize_24, tmp3_fontWeight_24, VOID, VOID, tmp2_fontFamily_24, VOID, tmp6_letterSpacing_24, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_24);
    var tmp_25 = this;
    var tmp1_$this_25 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_25 = this.fde_1;
    var tmp2_fontFamily_25 = tmp0_elvis_lhs_25 == null ? TypeScaleTokens_getInstance().cdq_1 : tmp0_elvis_lhs_25;
    var tmp3_fontWeight_25 = TypeScaleTokens_getInstance().gdq_1;
    var tmp4_fontSize_25 = TypeScaleTokens_getInstance().edq_1;
    var tmp5_lineHeight_25 = TypeScaleTokens_getInstance().ddq_1;
    var tmp6_letterSpacing_25 = TypeScaleTokens_getInstance().fdq_1;
    tmp_25.gdf_1 = tmp1_$this_25.n5v(VOID, tmp4_fontSize_25, tmp3_fontWeight_25, VOID, VOID, tmp2_fontFamily_25, VOID, tmp6_letterSpacing_25, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_25);
    var tmp_26 = this;
    var tmp1_$this_26 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_26 = this.fde_1;
    var tmp2_fontFamily_26 = tmp0_elvis_lhs_26 == null ? TypeScaleTokens_getInstance().hdq_1 : tmp0_elvis_lhs_26;
    var tmp3_fontWeight_26 = TypeScaleTokens_getInstance().ldq_1;
    var tmp4_fontSize_26 = TypeScaleTokens_getInstance().jdq_1;
    var tmp5_lineHeight_26 = TypeScaleTokens_getInstance().idq_1;
    var tmp6_letterSpacing_26 = TypeScaleTokens_getInstance().kdq_1;
    tmp_26.hdf_1 = tmp1_$this_26.n5v(VOID, tmp4_fontSize_26, tmp3_fontWeight_26, VOID, VOID, tmp2_fontFamily_26, VOID, tmp6_letterSpacing_26, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_26);
    var tmp_27 = this;
    var tmp1_$this_27 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_27 = this.fde_1;
    var tmp2_fontFamily_27 = tmp0_elvis_lhs_27 == null ? TypeScaleTokens_getInstance().mdq_1 : tmp0_elvis_lhs_27;
    var tmp3_fontWeight_27 = TypeScaleTokens_getInstance().qdq_1;
    var tmp4_fontSize_27 = TypeScaleTokens_getInstance().odq_1;
    var tmp5_lineHeight_27 = TypeScaleTokens_getInstance().ndq_1;
    var tmp6_letterSpacing_27 = TypeScaleTokens_getInstance().pdq_1;
    tmp_27.idf_1 = tmp1_$this_27.n5v(VOID, tmp4_fontSize_27, tmp3_fontWeight_27, VOID, VOID, tmp2_fontFamily_27, VOID, tmp6_letterSpacing_27, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_27);
    var tmp_28 = this;
    var tmp1_$this_28 = get_DefaultTextStyle();
    var tmp0_elvis_lhs_28 = this.fde_1;
    var tmp2_fontFamily_28 = tmp0_elvis_lhs_28 == null ? TypeScaleTokens_getInstance().rdq_1 : tmp0_elvis_lhs_28;
    var tmp3_fontWeight_28 = TypeScaleTokens_getInstance().vdq_1;
    var tmp4_fontSize_28 = TypeScaleTokens_getInstance().tdq_1;
    var tmp5_lineHeight_28 = TypeScaleTokens_getInstance().sdq_1;
    var tmp6_letterSpacing_28 = TypeScaleTokens_getInstance().udq_1;
    tmp_28.jdf_1 = tmp1_$this_28.n5v(VOID, tmp4_fontSize_28, tmp3_fontWeight_28, VOID, VOID, tmp2_fontFamily_28, VOID, tmp6_letterSpacing_28, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, tmp5_lineHeight_28);
  }
  var properties_initialized_TypographyTokens_kt_gw7fqt;
  function _init_properties_TypographyTokens_kt__by6b7t() {
    if (!properties_initialized_TypographyTokens_kt_gw7fqt) {
      properties_initialized_TypographyTokens_kt_gw7fqt = true;
      DefaultLineHeightStyle = LineHeightStyle_init_$Create$(Companion_getInstance_11().i62_1, Companion_getInstance_12().g62_1);
      DefaultTextStyle = Companion_getInstance_13().h5v_1.n5v(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, defaultPlatformTextStyle(), get_DefaultLineHeightStyle());
      androidx_compose_material3_tokens_TypographyTokens$stable = 0;
    }
  }
  var androidx_compose_material3_tokens_VibrantMenuTokens$stable;
  var androidx_compose_material3_tokens_XLargeIconButtonTokens$stable;
  var androidx_compose_material3_tokens_XSmallIconButtonTokens$stable;
  function set_nextHash(_set____db54di) {
    _init_properties_System_js_kt__dn51u2();
    nextHash = _set____db54di;
  }
  function get_nextHash() {
    _init_properties_System_js_kt__dn51u2();
    return nextHash;
  }
  var nextHash;
  function get_weakMap() {
    _init_properties_System_js_kt__dn51u2();
    return weakMap;
  }
  var weakMap;
  function identityHashCode(instance) {
    _init_properties_System_js_kt__dn51u2();
    if (instance == null) {
      return 0;
    }
    var tmp0_elvis_lhs = get_weakMap().get(instance);
    return tmp0_elvis_lhs == null ? memoizeIdentityHashCode(instance) : tmp0_elvis_lhs;
  }
  function memoizeIdentityHashCode(instance) {
    _init_properties_System_js_kt__dn51u2();
    var _unary__edvuaz = get_nextHash();
    set_nextHash(_unary__edvuaz + 1 | 0);
    var value = _unary__edvuaz;
    get_weakMap().set(instance, value);
    return value;
  }
  var properties_initialized_System_js_kt_4jrb3c;
  function _init_properties_System_js_kt__dn51u2() {
    if (!properties_initialized_System_js_kt_4jrb3c) {
      properties_initialized_System_js_kt_4jrb3c = true;
      nextHash = 1;
      weakMap = new WeakMap();
    }
  }
  var androidx_compose_material3_internal_InternalAtomicReference$stable;
  var androidx_compose_material3_internal_PlatformOptimizedCancellationException$stable;
  var androidx_compose_material3_WindowBoundsCalculator$stable;
  var androidx_compose_material3_ModalBottomSheetProperties$stable;
  var androidx_compose_material3_ModalBottomSheetDefaults$stable;
  function EnsurePrecisionPointerListenersRegistered(content, $composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(-294472280);
    var $dirty = $changed;
    if (($changed & 6) === 0)
      $dirty = $dirty | ($composer_0.l1z(content) ? 4 : 2);
    if ($composer_0.n1z(!(($dirty & 3) === 2), $dirty & 1)) {
      content($composer_0, 14 & $dirty);
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(EnsurePrecisionPointerListenersRegistered$lambda(content, $changed));
    }
  }
  function EnsurePrecisionPointerListenersRegistered$lambda($content, $$changed) {
    return function ($composer, $force) {
      EnsurePrecisionPointerListenersRegistered($content, $composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var androidx_compose_material3_ModalWideNavigationRailProperties$stable;
  var androidx_compose_material3_internal_BackEventCompat$stable;
  var androidx_compose_material3_internal_BasicTooltipStrings$stable;
  function defaultPlatformTextStyle() {
    return null;
  }
  var androidx_compose_material3_internal_PlatformDateFormat$stable;
  //region block: post-declaration
  protoOf(RippleNodeFactory).sbe = rememberUpdatedInstance;
  protoOf(ChildSemanticsNode).g72 = get_shouldClearDescendantSemantics;
  protoOf(ChildSemanticsNode).h72 = get_shouldMergeDescendantSemantics;
  protoOf(ChildSemanticsNode).f71 = get_isImportantForBounds;
  //endregion
  //region block: init
  androidx_compose_material3_AppBarScopeImpl$stable = 8;
  androidx_compose_material3_ClickableAppBarItem$stable = 0;
  androidx_compose_material3_ToggleableAppBarItem$stable = 0;
  androidx_compose_material3_CustomAppBarItem$stable = 0;
  androidx_compose_material3_AppBarMenuState$stable = 8;
  androidx_compose_material3_OverflowMeasurePolicy$stable = 0;
  androidx_compose_material3_BottomSheetScaffoldState$stable = 0;
  androidx_compose_material3_ButtonDefaults$stable = 0;
  androidx_compose_material3_ButtonElevation$stable = 0;
  androidx_compose_material3_ButtonColors$stable = 0;
  androidx_compose_material3_ButtonShapes$stable = 0;
  androidx_compose_material3_ButtonGroupDefaults$stable = 0;
  androidx_compose_material3_ButtonGroupMenuState$stable = 8;
  androidx_compose_material3_ButtonGroupParentData$stable = 8;
  androidx_compose_material3_ButtonGroupElement$stable = 0;
  androidx_compose_material3_ButtonGroupNode$stable = 8;
  androidx_compose_material3_EnlargeOnPressElement$stable = 0;
  androidx_compose_material3_EnlargeOnPressNode$stable = 8;
  androidx_compose_material3_ClickableButtonGroupItem$stable = 8;
  androidx_compose_material3_ToggleableButtonGroupItem$stable = 8;
  androidx_compose_material3_CustomButtonGroupItem$stable = 0;
  androidx_compose_material3_VerticalAlignElement$stable = 0;
  androidx_compose_material3_VerticalAlignNode$stable = 8;
  androidx_compose_material3_CardDefaults$stable = 0;
  androidx_compose_material3_CardElevation$stable = 0;
  androidx_compose_material3_CardColors$stable = 0;
  androidx_compose_material3_ComposeMaterial3Flags$stable = 8;
  androidx_compose_material3_DividerDefaults$stable = 0;
  androidx_compose_material3_DragHandleColors$stable = 0;
  androidx_compose_material3_DragHandleShapes$stable = 0;
  androidx_compose_material3_DragHandleSizes$stable = 0;
  androidx_compose_material3_VerticalDragHandleDefaults$stable = 0;
  androidx_compose_material3_IconButtonColors$stable = 0;
  androidx_compose_material3_IconToggleButtonColors$stable = 0;
  androidx_compose_material3_IconButtonShapes$stable = 0;
  androidx_compose_material3_IconToggleButtonShapes$stable = 0;
  androidx_compose_material3_IconButtonDefaults$stable = 0;
  androidx_compose_material3_ListItemDefaults$stable = 0;
  androidx_compose_material3_ListItemColors$stable = 0;
  androidx_compose_material3_ListItemShapes$stable = 0;
  androidx_compose_material3_ListItemElevation$stable = 0;
  androidx_compose_material3_LoadingIndicatorDefaults$stable = 8;
  androidx_compose_material3_MaterialShapes$stable = 0;
  MaterialTheme_instance = new MaterialTheme();
  androidx_compose_material3_MenuDefaults$stable = 0;
  androidx_compose_material3_SheetWindowInsets$stable = 0;
  Companion_instance_0 = new Companion();
  androidx_compose_material3_ScrimDefaults$stable = 0;
  androidx_compose_material3_SnackbarHostState$stable = 0;
  androidx_compose_material3_SplitButtonDefaults$stable = 0;
  androidx_compose_material3_SplitButtonShapes$stable = 0;
  androidx_compose_material3_TabIndicatorModifier$stable = 0;
  androidx_compose_material3_TabIndicatorOffsetNode$stable = 8;
  androidx_compose_material3_TabPosition$stable = 0;
  androidx_compose_material3_TabRowDefaults$stable = 0;
  androidx_compose_material3_TextFieldDefaults$stable = 0;
  androidx_compose_material3_OutlinedTextFieldDefaults$stable = 0;
  androidx_compose_material3_TextFieldColors$stable = 0;
  androidx_compose_material3_TextFieldLabelPosition_Attached$stable = 0;
  androidx_compose_material3_TextFieldLabelPosition_Above$stable = 0;
  androidx_compose_material3_TextFieldLabelPosition$stable = 0;
  androidx_compose_material3_TimePickerDialogDefaults$stable = 0;
  androidx_compose_material3_ToggleButtonDefaults$stable = 0;
  androidx_compose_material3_ToggleButtonColors$stable = 0;
  androidx_compose_material3_ToggleButtonShapes$stable = 0;
  androidx_compose_material3_WideNavigationRailStateImpl$stable = 8;
  androidx_compose_material3_ModalWideNavigationRailState$stable = 8;
  androidx_compose_material3_RailPredictiveBackState$stable = 0;
  androidx_compose_material3_carousel_Arrangement$stable = 0;
  androidx_compose_material3_carousel_CarouselPageSize$stable = 0;
  androidx_compose_material3_carousel_CarouselDefaults$stable = 0;
  androidx_compose_material3_carousel_CarouselItemScopeImpl$stable = 8;
  androidx_compose_material3_carousel_CarouselState$stable = 8;
  androidx_compose_material3_carousel_CarouselPagerState$stable = 0;
  androidx_compose_material3_carousel_CarouselItemDrawInfoImpl$stable = 0;
  androidx_compose_material3_carousel_Keyline$stable = 0;
  androidx_compose_material3_carousel_KeylineList$stable = 8;
  androidx_compose_material3_carousel_Strategy$stable = 8;
  androidx_compose_material3_internal_AnimatedShapeState$stable = 0;
  androidx_compose_material3_internal_AnimatedCornerBasedShapeState$stable = 0;
  androidx_compose_material3_internal_BackEventProgress_NotRunning$stable = 0;
  androidx_compose_material3_internal_BackEventProgress_InProgress$stable = 0;
  androidx_compose_material3_internal_BackEventProgress_Completed$stable = 0;
  androidx_compose_material3_internal_BasicTooltipDefaults$stable = 0;
  androidx_compose_material3_internal_CalendarModel$stable = 8;
  androidx_compose_material3_internal_CalendarDate$stable = 0;
  androidx_compose_material3_internal_CalendarMonth$stable = 0;
  androidx_compose_material3_internal_DateInputFormat$stable = 0;
  androidx_compose_material3_internal_ChildSemanticsNodeElement$stable = 0;
  androidx_compose_material3_internal_ParentSemanticsNodeElement$stable = 0;
  androidx_compose_material3_internal_ChildSemanticsNode$stable = 8;
  androidx_compose_material3_internal_ParentSemanticsNode$stable = 8;
  androidx_compose_material3_internal_ParentSemanticsNodeKey$stable = 0;
  ParentSemanticsNodeKey_instance = new ParentSemanticsNodeKey();
  androidx_compose_material3_internal_AnchoredDraggableUninitializedException$stable = 8;
  ElevationDefaults_instance = new ElevationDefaults();
  androidx_compose_material3_internal_Icons_AutoMirrored_Filled$stable = 8;
  androidx_compose_material3_internal_Icons_AutoMirrored$stable = 0;
  androidx_compose_material3_internal_Icons_Filled$stable = 8;
  androidx_compose_material3_internal_Icons_Outlined$stable = 8;
  androidx_compose_material3_internal_Icons$stable = 0;
  androidx_compose_material3_internal_InternalMutatorMutex$stable = 0;
  androidx_compose_material3_internal_MappedInteractionSource$stable = 0;
  androidx_compose_material3_internal_MenuPosition$stable = 0;
  androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Horizontal$stable = 0;
  androidx_compose_material3_internal_AnchorAlignmentOffsetPosition_Vertical$stable = 0;
  androidx_compose_material3_internal_AnchorAlignmentOffsetPosition$stable = 0;
  androidx_compose_material3_internal_WindowAlignmentMarginPosition_Horizontal$stable = 0;
  androidx_compose_material3_internal_WindowAlignmentMarginPosition_Vertical$stable = 0;
  androidx_compose_material3_internal_WindowAlignmentMarginPosition$stable = 0;
  androidx_compose_material3_internal_DropdownMenuPositionProvider$stable = 0;
  androidx_compose_material3_internal_MutableWindowInsets$stable = 0;
  androidx_compose_material3_tokens_AppBarLargeFlexibleTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarLargeTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarMediumFlexibleTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarMediumTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarSmallTokens$stable = 0;
  androidx_compose_material3_tokens_AppBarTokens$stable = 0;
  androidx_compose_material3_tokens_AssistChipTokens$stable = 0;
  androidx_compose_material3_tokens_BadgeTokens$stable = 0;
  androidx_compose_material3_tokens_BaselineButtonTokens$stable = 0;
  androidx_compose_material3_tokens_BottomAppBarTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonGroupSmallTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonLargeTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonMediumTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonSmallTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonXLargeTokens$stable = 0;
  androidx_compose_material3_tokens_ButtonXSmallTokens$stable = 0;
  androidx_compose_material3_tokens_CheckboxTokens$stable = 0;
  androidx_compose_material3_tokens_CircularProgressIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_ColorDarkTokens$stable = 0;
  androidx_compose_material3_tokens_ColorLightTokens$stable = 0;
  androidx_compose_material3_tokens_ConnectedButtonGroupSmallTokens$stable = 0;
  androidx_compose_material3_tokens_DateInputModalTokens$stable = 0;
  androidx_compose_material3_tokens_DatePickerModalTokens$stable = 0;
  androidx_compose_material3_tokens_DialogTokens$stable = 0;
  androidx_compose_material3_tokens_DividerTokens$stable = 0;
  androidx_compose_material3_tokens_DockedToolbarTokens$stable = 0;
  androidx_compose_material3_tokens_DragHandleTokens$stable = 0;
  androidx_compose_material3_tokens_ElevatedButtonTokens$stable = 0;
  androidx_compose_material3_tokens_ElevatedCardTokens$stable = 0;
  androidx_compose_material3_tokens_ElevationTokens$stable = 0;
  androidx_compose_material3_tokens_ExpandedListTokens$stable = 0;
  androidx_compose_material3_tokens_ExpressiveMotionTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabLargeTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabMediumTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabPrimaryTokens$stable = 0;
  androidx_compose_material3_tokens_ExtendedFabSmallTokens$stable = 0;
  androidx_compose_material3_tokens_FabBaselineTokens$stable = 0;
  androidx_compose_material3_tokens_FabLargeTokens$stable = 0;
  androidx_compose_material3_tokens_FabMediumTokens$stable = 0;
  androidx_compose_material3_tokens_FabMenuBaselineTokens$stable = 0;
  androidx_compose_material3_tokens_FabPrimaryContainerTokens$stable = 0;
  androidx_compose_material3_tokens_FabSecondaryContainerTokens$stable = 0;
  androidx_compose_material3_tokens_FabSmallTokens$stable = 0;
  androidx_compose_material3_tokens_FilledAutocompleteTokens$stable = 0;
  androidx_compose_material3_tokens_FilledButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilledCardTokens$stable = 0;
  androidx_compose_material3_tokens_FilledIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilledTextFieldTokens$stable = 0;
  androidx_compose_material3_tokens_FilledTonalButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilledTonalIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_FilterChipTokens$stable = 0;
  androidx_compose_material3_tokens_FloatingToolbarTokens$stable = 0;
  androidx_compose_material3_tokens_StandardIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_InputChipTokens$stable = 0;
  androidx_compose_material3_tokens_LargeIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_LinearProgressIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_ListTokens$stable = 0;
  androidx_compose_material3_tokens_LoadingIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_MediumIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_MenuTokens$stable = 0;
  androidx_compose_material3_tokens_MotionTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationBarHorizontalItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationBarTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationBarVerticalItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationDrawerTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailBaselineItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailCollapsedTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailColorTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailExpandedTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailHorizontalItemTokens$stable = 0;
  androidx_compose_material3_tokens_NavigationRailVerticalItemTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedAutocompleteTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedButtonTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedCardTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedSegmentedButtonTokens$stable = 0;
  androidx_compose_material3_tokens_OutlinedTextFieldTokens$stable = 0;
  androidx_compose_material3_tokens_PaletteTokens$stable = 0;
  androidx_compose_material3_tokens_PlainTooltipTokens$stable = 0;
  androidx_compose_material3_tokens_PrimaryNavigationTabTokens$stable = 0;
  androidx_compose_material3_tokens_ProgressIndicatorTokens$stable = 0;
  androidx_compose_material3_tokens_RadioButtonTokens$stable = 0;
  androidx_compose_material3_tokens_ReorderListTokens$stable = 0;
  androidx_compose_material3_tokens_RevealListTokens$stable = 0;
  androidx_compose_material3_tokens_RichTooltipTokens$stable = 0;
  androidx_compose_material3_tokens_ScrimTokens$stable = 0;
  androidx_compose_material3_tokens_SearchBarTokens$stable = 0;
  androidx_compose_material3_tokens_SearchViewTokens$stable = 0;
  androidx_compose_material3_tokens_SecondaryNavigationTabTokens$stable = 0;
  androidx_compose_material3_tokens_SegmentedMenuTokens$stable = 0;
  androidx_compose_material3_tokens_ShapeTokens$stable = 0;
  androidx_compose_material3_tokens_SheetBottomTokens$stable = 0;
  androidx_compose_material3_tokens_SliderTokens$stable = 0;
  androidx_compose_material3_tokens_SmallIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_SnackbarTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonLargeTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonMediumTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonSmallTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonXLargeTokens$stable = 0;
  androidx_compose_material3_tokens_SplitButtonXSmallTokens$stable = 0;
  androidx_compose_material3_tokens_StandardMenuTokens$stable = 0;
  androidx_compose_material3_tokens_StandardMotionTokens$stable = 0;
  StandardMotionTokens_instance = new StandardMotionTokens();
  androidx_compose_material3_tokens_StateTokens$stable = 0;
  androidx_compose_material3_tokens_SuggestionChipTokens$stable = 0;
  androidx_compose_material3_tokens_SwitchTokens$stable = 0;
  androidx_compose_material3_tokens_TextButtonTokens$stable = 0;
  androidx_compose_material3_tokens_TimeInputTokens$stable = 0;
  androidx_compose_material3_tokens_TimePickerTokens$stable = 0;
  androidx_compose_material3_tokens_TonalButtonTokens$stable = 0;
  androidx_compose_material3_tokens_TypeScaleTokens$stable = 0;
  androidx_compose_material3_tokens_TypefaceTokens$stable = 0;
  androidx_compose_material3_tokens_VibrantMenuTokens$stable = 0;
  androidx_compose_material3_tokens_XLargeIconButtonTokens$stable = 0;
  androidx_compose_material3_tokens_XSmallIconButtonTokens$stable = 0;
  androidx_compose_material3_internal_InternalAtomicReference$stable = 8;
  androidx_compose_material3_internal_PlatformOptimizedCancellationException$stable = 8;
  androidx_compose_material3_WindowBoundsCalculator$stable = 0;
  androidx_compose_material3_ModalBottomSheetProperties$stable = 0;
  androidx_compose_material3_ModalBottomSheetDefaults$stable = 0;
  androidx_compose_material3_ModalWideNavigationRailProperties$stable = 0;
  androidx_compose_material3_internal_BackEventCompat$stable = 0;
  androidx_compose_material3_internal_BasicTooltipStrings$stable = 0;
  androidx_compose_material3_internal_PlatformDateFormat$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Button;
  _.$_$.b = MaterialTheme_0;
  _.$_$.c = Text;
  _.$_$.d = MaterialTheme_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material3-material3.js.map
