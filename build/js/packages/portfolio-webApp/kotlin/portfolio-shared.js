(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './components-resources-library.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-material3-material3.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-text.js', './compose-multiplatform-core-compose-ui-ui.js', './compose-multiplatform-core-compose-foundation-foundation-layout.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-animation-animation.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./components-resources-library.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-material3-material3.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-text.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./compose-multiplatform-core-compose-foundation-foundation-layout.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-animation-animation.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['components-resources-library'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'components-resources-library' was not found. Please, check whether 'components-resources-library' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-material3-material3'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-material3-material3' was not found. Please, check whether 'compose-multiplatform-core-compose-material3-material3' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui-text' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-text' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation-layout' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation-layout' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'portfolio-shared'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation'] === 'undefined') {
      throw new Error("Error loading module 'portfolio-shared'. Its dependency 'compose-multiplatform-core-compose-animation-animation' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation' is loaded prior to 'portfolio-shared'.");
    }
    globalThis['portfolio-shared'] = factory(typeof globalThis['portfolio-shared'] === 'undefined' ? {} : globalThis['portfolio-shared'], globalThis['kotlin-kotlin-stdlib'], globalThis['components-resources-library'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-material3-material3'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-animation-animation']);
  }
}(function (_, kotlin_kotlin, kotlin_components_resources_library, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_material3_material3, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_text, kotlin_org_jetbrains_compose_ui_ui, kotlin_org_jetbrains_compose_foundation_foundation_layout, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_animation_animation) {
  'use strict';
  //region block: imports
  var KProperty1 = kotlin_kotlin.$_$.xa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var emptySet = kotlin_kotlin.$_$.u4;
  var Long = kotlin_kotlin.$_$.yc;
  var ResourceItem = kotlin_components_resources_library.$_$.b;
  var setOf = kotlin_kotlin.$_$.h6;
  var DrawableResource = kotlin_components_resources_library.$_$.a;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var lazy = kotlin_kotlin.$_$.rd;
  var protoOf = kotlin_kotlin.$_$.aa;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var MaterialTheme = kotlin_org_jetbrains_compose_material3_material3.$_$.b;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  var VOID = kotlin_kotlin.$_$.c;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r;
  var _Color___init__impl__r6cqi2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m2;
  var _TextUnit___init__impl__r5fj1s = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u2;
  var _TextOverflow___init__impl__obguoe = kotlin_org_jetbrains_compose_ui_ui_text.$_$.u;
  var Text = kotlin_org_jetbrains_compose_material3_material3.$_$.c;
  var sourceInformationMarkerStart = kotlin_androidx_compose_runtime_runtime.$_$.q1;
  var Companion_getInstance = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var sourceInformationMarkerEnd = kotlin_androidx_compose_runtime_runtime.$_$.p1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui.$_$.b5;
  var fillMaxWidth = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.e;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var Arrangement_getInstance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.j;
  var columnMeasurePolicy = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.b;
  var get_currentCompositeKeyHashCode = kotlin_androidx_compose_runtime_runtime.$_$.b1;
  var materialize = kotlin_org_jetbrains_compose_ui_ui.$_$.j4;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui.$_$.x4;
  var invalidApplier = kotlin_androidx_compose_runtime_runtime.$_$.d1;
  var Applier = kotlin_androidx_compose_runtime_runtime.$_$.h;
  var isInterface = kotlin_kotlin.$_$.r9;
  var _Updater___init__impl__rbfxm8 = kotlin_androidx_compose_runtime_runtime.$_$.x1;
  var Updater__set_impl_v7kwss = kotlin_androidx_compose_runtime_runtime.$_$.z1;
  var Updater__reconcile_impl_1mfi6g = kotlin_androidx_compose_runtime_runtime.$_$.y1;
  var ColumnScopeInstance_instance = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.l;
  var painterResource = kotlin_components_resources_library.$_$.c;
  var androidx_compose_ui_graphics_painter_Painter$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h;
  var Image = kotlin_org_jetbrains_compose_foundation_foundation.$_$.v;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var MaterialTheme_instance = kotlin_org_jetbrains_compose_material3_material3.$_$.d;
  var background = kotlin_org_jetbrains_compose_foundation_foundation.$_$.z;
  var safeContentPadding = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.i;
  var fillMaxSize = kotlin_org_jetbrains_compose_foundation_foundation_layout.$_$.d;
  var Button = kotlin_org_jetbrains_compose_material3_material3.$_$.a;
  var AnimatedVisibility = kotlin_org_jetbrains_compose_animation_animation.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.ua;
  var getLocalDelegateReference = kotlin_kotlin.$_$.e9;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var updateChangedFlags = kotlin_androidx_compose_runtime_runtime.$_$.w1;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var listOf = kotlin_kotlin.$_$.u5;
  var findAnyOf = kotlin_kotlin.$_$.mb;
  var substring = kotlin_kotlin.$_$.bc;
  var substringBefore = kotlin_kotlin.$_$.ac;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(drawable, 'drawable');
  initMetadataForObject(ComposableSingletons$AppKt, 'ComposableSingletons$AppKt');
  initMetadataForClass(Greeting, 'Greeting', Greeting);
  initMetadataForClass(JsPlatform, 'JsPlatform', JsPlatform);
  //endregion
  function get_compose_multiplatform(_this__u8e3s4) {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    var tmp0 = compose_multiplatform$delegate;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('compose_multiplatform', 1, tmp, _get_compose_multiplatform_$ref_ota19d(), null);
    return tmp0.r1();
  }
  var compose_multiplatform$delegate;
  function compose_multiplatform$delegate$lambda() {
    _init_properties_Drawable0_commonMain_kt__plv2f4();
    // Inline function 'kotlin.collections.setOf' call
    var tmp$ret$0 = emptySet();
    return new DrawableResource('drawable:compose_multiplatform', setOf(new ResourceItem(tmp$ret$0, 'composeResources/portfolio.shared.generated.resources/drawable/compose-multiplatform.xml', new Long(-1, -1), new Long(-1, -1))));
  }
  function _get_compose_multiplatform_$ref_ota19d() {
    return constructCallableReference(function (p0) {
      return get_compose_multiplatform(p0);
    }, 1, 0, 159);
  }
  var properties_initialized_Drawable0_commonMain_kt_e3wo9q;
  function _init_properties_Drawable0_commonMain_kt__plv2f4() {
    if (!properties_initialized_Drawable0_commonMain_kt_e3wo9q) {
      properties_initialized_Drawable0_commonMain_kt_e3wo9q = true;
      compose_multiplatform$delegate = lazy(compose_multiplatform$delegate$lambda);
    }
  }
  var portfolio_shared_generated_resources_Res_drawable$stable;
  var portfolio_shared_generated_resources_Res_string$stable;
  var portfolio_shared_generated_resources_Res_array$stable;
  var portfolio_shared_generated_resources_Res_plurals$stable;
  var portfolio_shared_generated_resources_Res_font$stable;
  var portfolio_shared_generated_resources_Res$stable;
  function drawable() {
  }
  var drawable_instance;
  function drawable_getInstance() {
    return drawable_instance;
  }
  function App($composer, $changed) {
    var $composer_0 = $composer;
    $composer_0 = $composer_0.s1y(191872274);
    sourceInformation($composer_0, 'C(App)24@885L923:App.kt#ozqi0y');
    if ($composer_0.n1z(!($changed === 0), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(191872274, $changed, -1, 'com.sangeeth.portfolio.App (App.kt:23)');
      }
      MaterialTheme(null, null, null, ComposableSingletons$AppKt_getInstance().ddr_1, $composer_0, 3072, 7);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y1y();
    }
    var tmp0_safe_receiver = $composer_0.t1y();
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.d2a(App$lambda($changed));
    }
  }
  function ComposableLambda$invoke$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      p0.w3t(p0_0, p1, p2);
      return Unit_instance;
    }, 3, 0, 160, VOID, [p0]);
  }
  function ComposableSingletons$AppKt$lambda$_625326684$lambda_6ci12o($this$Button, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C34@1308L25:App.kt#ozqi0y');
    if ($composer_0.n1z(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-625326684, $changed, -1, 'com.sangeeth.portfolio.ComposableSingletons$AppKt.lambda$-625326684.<anonymous> (App.kt:34)');
      }
      var tmp = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_0 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_1 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_2 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_3 = _TextOverflow___init__impl__obguoe(0);
      Text('Click Me Sangeeth', null, tmp, null, tmp_0, null, null, null, tmp_1, null, null, tmp_2, tmp_3, false, 0, 0, null, null, $composer_0, 6, 0, 262142);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y1y();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_0(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      p0.w3t(p0_0, p1, p2);
      return Unit_instance;
    }, 3, 0, 160, VOID, [p0]);
  }
  function ComposableSingletons$AppKt$lambda$1967617164$lambda($this$AnimatedVisibility, $composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C37@1425L31,38@1473L305:App.kt#ozqi0y');
    if ($composer_0.n1z(!(($changed & 17) === 16), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(1967617164, $changed, -1, 'com.sangeeth.portfolio.ComposableSingletons$AppKt.lambda$1967617164.<anonymous> (App.kt:37)');
      }
      sourceInformationMarkerStart($composer_0, 1094485451, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp;
      if (false || it === Companion_getInstance().f1y_1) {
        var value = (new Greeting()).fdr();
        $composer_0.f1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var greeting = tmp0_group;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = fillMaxWidth(Companion_instance);
      var verticalArrangement = null;
      var horizontalAlignment = Companion_getInstance_0().j6i_1;
      var $composer_1 = $composer_0;
      if (!((2 & 1) === 0))
        modifier = Companion_instance;
      if (!((2 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().ea4_1;
      if (!((2 & 4) === 0))
        horizontalAlignment = Companion_getInstance_0().i6i_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 390 >> 3 | 112 & 390 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.p1z();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_1().b84_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_0 = $composer_3.g1y();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.z1y();
      if ($composer_3.h1y()) {
        $composer_3.a1z(tmp0);
      } else {
        $composer_3.b1z();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().g84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().f84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_1().j84_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_1().k84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().d84_1);
      var $composer_4 = $composer_3;
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, -461801230, 'C42@1655L51,42@1649L64,43@1734L26:App.kt#ozqi0y');
      var tmp_1 = painterResource(get_compose_multiplatform(drawable_instance), $composer_5, 0);
      Image(tmp_1, null, null, null, null, 0.0, null, $composer_5, 48 | androidx_compose_ui_graphics_painter_Painter$stableprop_getter(), 124);
      var tmp_2 = 'Compose: ' + greeting;
      var tmp_3 = _Color___init__impl__r6cqi2(_ULong___init__impl__c78o9k(new Long(0, 0)));
      var tmp_4 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_5 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_6 = _TextUnit___init__impl__r5fj1s(new Long(0, 0));
      var tmp_7 = _TextOverflow___init__impl__obguoe(0);
      Text(tmp_2, null, tmp_3, null, tmp_4, null, null, null, tmp_5, null, null, tmp_6, tmp_7, false, 0, 0, null, null, $composer_5, 0, 0, 262142);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.c1z();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y1y();
    }
    return Unit_instance;
  }
  function ComposableLambda$invoke$ref_1(p0) {
    return constructCallableReference(function (p0_0, p1) {
      p0.v3t(p0_0, p1);
      return Unit_instance;
    }, 2, 0, 13, VOID, [p0]);
  }
  function ComposableSingletons$AppKt$lambda$_110931010$lambda_gdl47w($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C25@928L34,28@1053L11,26@971L831:App.kt#ozqi0y');
    if ($composer_0.n1z(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-110931010, $changed, -1, 'com.sangeeth.portfolio.ComposableSingletons$AppKt.lambda$-110931010.<anonymous> (App.kt:25)');
      }
      sourceInformationMarkerStart($composer_0, 769482752, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp;
      if (false || it === Companion_getInstance().f1y_1) {
        var value = mutableStateOf(false);
        $composer_0.f1z(value);
        tmp = value;
      } else {
        tmp = it;
      }
      var tmp0_group = tmp;
      sourceInformationMarkerEnd($composer_0);
      var showContent$delegate = tmp0_group;
      // Inline function 'androidx.compose.foundation.layout.Column' call
      var modifier = fillMaxSize(safeContentPadding(background(Companion_instance, MaterialTheme_instance.kd0($composer_0, 6).od0_1)));
      var verticalArrangement = null;
      var horizontalAlignment = Companion_getInstance_0().j6i_1;
      var $composer_1 = $composer_0;
      if (!((2 & 1) === 0))
        modifier = Companion_instance;
      if (!((2 & 2) === 0))
        verticalArrangement = Arrangement_getInstance().ea4_1;
      if (!((2 & 4) === 0))
        horizontalAlignment = Companion_getInstance_0().i6i_1;
      var measurePolicy = columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer_1, 14 & 384 >> 3 | 112 & 384 >> 3);
      // Inline function 'androidx.compose.ui.layout.Layout' call
      var modifier_0 = modifier;
      var $composer_2 = $composer_1;
      if (!((0 & 2) === 0))
        modifier_0 = Companion_instance;
      var compositeKeyHash = get_currentCompositeKeyHashCode($composer_2, 0).hashCode();
      var localMap = $composer_2.p1z();
      var materialized = materialize($composer_2, modifier_0);
      var tmp0 = Companion_getInstance_1().b84_1;
      // Inline function 'androidx.compose.runtime.ReusableComposeNode' call
      var $composer_3 = $composer_2;
      var tmp_0 = $composer_3.g1y();
      if (!isInterface(tmp_0, Applier)) {
        invalidApplier();
      }
      $composer_3.z1y();
      if ($composer_3.h1y()) {
        $composer_3.a1z(tmp0);
      } else {
        $composer_3.b1z();
      }
      var $this$ReusableComposeNode = _Updater___init__impl__rbfxm8($composer_3);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, measurePolicy, Companion_getInstance_1().g84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, localMap, Companion_getInstance_1().f84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, compositeKeyHash, Companion_getInstance_1().j84_1);
      Updater__reconcile_impl_1mfi6g($this$ReusableComposeNode, Companion_getInstance_1().k84_1);
      Updater__set_impl_v7kwss($this$ReusableComposeNode, materialized, Companion_getInstance_1().d84_1);
      var $composer_4 = $composer_3;
      var $changed_0 = 6 | 112 & 384 >> 6;
      var $composer_5 = $composer_4;
      sourceInformationMarkerStart($composer_5, 2099423944, 'C33@1258L30,33@1241L106,36@1360L432:App.kt#ozqi0y');
      sourceInformationMarkerStart($composer_5, -2010486606, 'CC(remember):App.kt#9igjgp');
      // Inline function 'androidx.compose.runtime.cache' call
      // Inline function 'kotlin.let' call
      var it_0 = $composer_5.e1z();
      var tmp_1;
      if (false || it_0 === Companion_getInstance().f1y_1) {
        var value_0 = ComposableSingletons$AppKt$lambda$_110931010$lambda$lambda_bbxve9(showContent$delegate);
        $composer_5.f1z(value_0);
        tmp_1 = value_0;
      } else {
        tmp_1 = it_0;
      }
      var tmp0_group_0 = tmp_1;
      sourceInformationMarkerEnd($composer_5);
      Button(tmp0_group_0, null, false, null, null, null, null, null, null, ComposableSingletons$AppKt_getInstance().bdr_1, $composer_5, 805306374, 510);
      var tmp_2 = invoke$lambda(showContent$delegate);
      AnimatedVisibility(ColumnScopeInstance_instance, tmp_2, null, null, null, null, ComposableSingletons$AppKt_getInstance().cdr_1, $composer_5, 1572864 | 14 & $changed_0, 30);
      sourceInformationMarkerEnd($composer_5);
      $composer_3.c1z();
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y1y();
    }
    return Unit_instance;
  }
  function invoke$lambda($showContent$delegate) {
    // Inline function 'androidx.compose.runtime.getValue' call
    getLocalDelegateReference('showContent', KMutableProperty0, true);
    return $showContent$delegate.r1();
  }
  function invoke$lambda_0($showContent$delegate, _set____db54di) {
    // Inline function 'androidx.compose.runtime.setValue' call
    getLocalDelegateReference('showContent', KMutableProperty0, true);
    $showContent$delegate.y1i(_set____db54di);
    return Unit_instance;
  }
  function ComposableSingletons$AppKt$lambda$_110931010$lambda$lambda_bbxve9($showContent$delegate) {
    return function () {
      invoke$lambda_0($showContent$delegate, !invoke$lambda($showContent$delegate));
      return Unit_instance;
    };
  }
  function ComposableSingletons$AppKt() {
    ComposableSingletons$AppKt_instance = this;
    var tmp = this;
    tmp.bdr_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-625326684, false, ComposableSingletons$AppKt$lambda$_625326684$lambda_6ci12o));
    var tmp_0 = this;
    tmp_0.cdr_1 = ComposableLambda$invoke$ref_0(composableLambdaInstance(1967617164, false, ComposableSingletons$AppKt$lambda$1967617164$lambda));
    var tmp_1 = this;
    tmp_1.ddr_1 = ComposableLambda$invoke$ref_1(composableLambdaInstance(-110931010, false, ComposableSingletons$AppKt$lambda$_110931010$lambda_gdl47w));
  }
  var ComposableSingletons$AppKt_instance;
  function ComposableSingletons$AppKt_getInstance() {
    if (ComposableSingletons$AppKt_instance == null)
      new ComposableSingletons$AppKt();
    return ComposableSingletons$AppKt_instance;
  }
  function App$lambda($$changed) {
    return function ($composer, $force) {
      App($composer, updateChangedFlags($$changed | 1));
      return Unit_instance;
    };
  }
  var com_sangeeth_portfolio_Greeting$stable;
  function Greeting() {
    this.edr_1 = getPlatform();
  }
  protoOf(Greeting).fdr = function () {
    return sayHello(this.edr_1.x39());
  };
  function sayHello(to) {
    return 'Hello, ' + to + '!';
  }
  var com_sangeeth_portfolio_JsPlatform$stable;
  function getPlatform() {
    return new JsPlatform();
  }
  function JsPlatform() {
    this.gdr_1 = navigator.userAgent;
    this.hdr_1 = listOf(['Chrome', 'Firefox', 'Safari', 'Edge']);
    var tmp = this;
    var tmp0_safe_receiver = findAnyOf(this.gdr_1, this.hdr_1, VOID, true);
    var tmp_0;
    if (tmp0_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      var startIndex = tmp0_safe_receiver.sd();
      tmp_0 = substringBefore(substring(this.gdr_1, startIndex), ' ');
    }
    var tmp1_elvis_lhs = tmp_0;
    tmp.idr_1 = tmp1_elvis_lhs == null ? 'Unknown' : tmp1_elvis_lhs;
  }
  protoOf(JsPlatform).x39 = function () {
    return this.idr_1;
  };
  //region block: init
  portfolio_shared_generated_resources_Res_drawable$stable = 0;
  portfolio_shared_generated_resources_Res_string$stable = 0;
  portfolio_shared_generated_resources_Res_array$stable = 0;
  portfolio_shared_generated_resources_Res_plurals$stable = 0;
  portfolio_shared_generated_resources_Res_font$stable = 0;
  portfolio_shared_generated_resources_Res$stable = 0;
  drawable_instance = new drawable();
  com_sangeeth_portfolio_Greeting$stable = 8;
  com_sangeeth_portfolio_JsPlatform$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = App;
  //endregion
  return _;
}));

//# sourceMappingURL=portfolio-shared.js.map
