(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-util.js', './androidx-compose-runtime-runtime-saveable.js', './kotlinx-coroutines-core.js', './androidx-compose-runtime-runtime.js', './kotlinx-atomicfu.js', './skiko-kjs.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'), require('./androidx-compose-runtime-runtime-saveable.js'), require('./kotlinx-coroutines-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./kotlinx-atomicfu.js'), require('./skiko-kjs.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime-saveable'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-compose-runtime-runtime-saveable' was not found. Please, check whether 'androidx-compose-runtime-runtime-saveable' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    if (typeof globalThis['skiko-kjs'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-ui-ui-text'. Its dependency 'skiko-kjs' was not found. Please, check whether 'skiko-kjs' is loaded prior to 'compose-multiplatform-core-compose-ui-ui-text'.");
    }
    globalThis['compose-multiplatform-core-compose-ui-ui-text'] = factory(typeof globalThis['compose-multiplatform-core-compose-ui-ui-text'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-ui-ui-text'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-util'], globalThis['androidx-compose-runtime-runtime-saveable'], globalThis['kotlinx-coroutines-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['kotlinx-atomicfu'], globalThis['skiko-kjs']);
  }
}(function (_, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_util, kotlin_androidx_compose_runtime_runtime_saveable, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_kotlinx_atomicfu, kotlin_org_jetbrains_skiko_skiko) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var protoOf = kotlin_kotlin.$_$.aa;
  var objectCreate = kotlin_kotlin.$_$.z9;
  var emptyList = kotlin_kotlin.$_$.s4;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var VOID = kotlin_kotlin.$_$.c;
  var toString = kotlin_kotlin.$_$.de;
  var hashCode = kotlin_kotlin.$_$.i9;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var equals = kotlin_kotlin.$_$.b9;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var isInterface = kotlin_kotlin.$_$.r9;
  var Comparator = kotlin_kotlin.$_$.rc;
  var compareValues = kotlin_kotlin.$_$.u6;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m1;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var sortedWith = kotlin_kotlin.$_$.m6;
  var first = kotlin_kotlin.$_$.b5;
  var mutableIntListOf = kotlin_androidx_collection_collection.$_$.w;
  var charCodeAt = kotlin_kotlin.$_$.t8;
  var substring = kotlin_kotlin.$_$.cc;
  var CharSequence = kotlin_kotlin.$_$.nc;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.l1;
  var coerceIn = kotlin_kotlin.$_$.oa;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k1;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.j2;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var coerceAtLeast = kotlin_kotlin.$_$.ja;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var get_lastIndex = kotlin_kotlin.$_$.n5;
  var addAll = kotlin_kotlin.$_$.u3;
  var plus = kotlin_kotlin.$_$.c6;
  var last = kotlin_kotlin.$_$.r5;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.q3;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k3;
  var Color = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v;
  var BlendMode = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n;
  var Path = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g1;
  var toRawBits = kotlin_kotlin.$_$.be;
  var fromInt = kotlin_kotlin.$_$.d8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var Long = kotlin_kotlin.$_$.yc;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var toString_0 = kotlin_kotlin.$_$.ca;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var fastJoinToString = kotlin_org_jetbrains_compose_ui_ui_util.$_$.b;
  var compareTo = kotlin_kotlin.$_$.w8;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var LazyThreadSafetyMode_NONE_getInstance = kotlin_kotlin.$_$.i1;
  var lazy = kotlin_kotlin.$_$.qd;
  var KProperty1 = kotlin_kotlin.$_$.xa;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var numberToInt = kotlin_kotlin.$_$.y9;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k3;
  var _TextUnit___get_value__impl__hpbx0k = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c3;
  var TextUnit = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s;
  var TextUnit__hashCode_impl_qsmeov = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v2;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c2;
  var TextUnit__toString_impl_51ghw0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a3;
  var _TextUnit___get_rawType__impl__tu8yq5 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z2;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var Enum = kotlin_kotlin.$_$.sc;
  var Saver = kotlin_androidx_compose_runtime_runtime_saveable.$_$.e;
  var arrayListOf = kotlin_kotlin.$_$.w3;
  var KtList = kotlin_kotlin.$_$.m3;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.a3;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sd;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.x3;
  var Shadow = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var Companion_getInstance_3 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i1;
  var _Color___get_value__impl__1pls5m = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.v2;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r;
  var toArgb = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h2;
  var Color_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s;
  var _TextUnit___get_type__impl__uc2olt = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b3;
  var TextUnitType = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q;
  var Companion_getInstance_4 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l3;
  var TextUnit_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var floatFromBits = kotlin_kotlin.$_$.c9;
  var Saver_0 = kotlin_androidx_compose_runtime_runtime_saveable.$_$.d;
  var Color__hashCode_impl_vjyivj = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s2;
  var Color__toString_impl_hpzmaq = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u2;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var Fill_getInstance = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l3;
  var get_sp = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.h1;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var IntSize__hashCode_impl_gm9mta = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r2;
  var IntSize__toString_impl_54w9zl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t2;
  var getBooleanHashCode = kotlin_kotlin.$_$.d9;
  var Constraints__hashCode_impl_ij7484 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p1;
  var Constraints__toString_impl_37yskr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u1;
  var LruCache = kotlin_androidx_collection_collection.$_$.c;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.p2;
  var Exception = kotlin_kotlin.$_$.uc;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.o2;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.l9;
  var mutableScatterMapOf = kotlin_androidx_collection_collection.$_$.d1;
  var KMutableProperty1 = kotlin_kotlin.$_$.va;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var get_indices = kotlin_kotlin.$_$.i5;
  var yield_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.n;
  var get_isActive = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.p1;
  var withTimeoutOrNull = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.m;
  var Key_instance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a;
  var CancellationException = kotlin_kotlin.$_$.w6;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.b7;
  var Element = kotlin_kotlin.$_$.k7;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.x;
  var Key_instance_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d;
  var SupervisorJob = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.k1;
  var CoroutineScope_0 = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.c1;
  var CoroutineStart_UNDISPATCHED_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.h;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var to = kotlin_kotlin.$_$.ee;
  var mutableListOf = kotlin_kotlin.$_$.z5;
  var Companion_instance = kotlin_kotlin.$_$.e1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l;
  var createFailure = kotlin_kotlin.$_$.ld;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o;
  var _Result___get_isFailure__impl__jpiriv = kotlin_kotlin.$_$.n;
  var listOf = kotlin_kotlin.$_$.u5;
  var Comparable = kotlin_kotlin.$_$.qc;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.k2;
  var Collection = kotlin_kotlin.$_$.l3;
  var Dispatchers_getInstance = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var ShaderBrush = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.i1;
  var SolidColor = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.m1;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var toList = kotlin_kotlin.$_$.p6;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var CharDirection_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a;
  var subtract = kotlin_kotlin.$_$.m8;
  var compare = kotlin_kotlin.$_$.y7;
  var currentNanoTime = kotlin_org_jetbrains_skiko_skiko.$_$.z5;
  var HashMap_init_$Create$ = kotlin_kotlin.$_$.p1;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t1;
  var charSequenceGet = kotlin_kotlin.$_$.u8;
  var Companion_getInstance_5 = kotlin_kotlin.$_$.d1;
  var isLowSurrogate = kotlin_kotlin.$_$.rb;
  var isHighSurrogate = kotlin_kotlin.$_$.pb;
  var charSequenceLength = kotlin_kotlin.$_$.v8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j;
  var sequence = kotlin_kotlin.$_$.db;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var Char__minus_impl_a2frrh = kotlin_kotlin.$_$.i;
  var SequenceScope = kotlin_kotlin.$_$.ya;
  var numberRangeToNumber = kotlin_kotlin.$_$.v9;
  var lazy_0 = kotlin_kotlin.$_$.rd;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var FontEdging_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j3;
  var FontEdging_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k3;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l3;
  var FontHinting_NONE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n3;
  var FontHinting_SLIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p3;
  var FontHinting_NORMAL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o3;
  var FontHinting_FULL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m3;
  var asList = kotlin_kotlin.$_$.x3;
  var binarySearch = kotlin_kotlin.$_$.z3;
  var get_lastIndex_0 = kotlin_kotlin.$_$.o5;
  var coerceAtMost = kotlin_kotlin.$_$.la;
  var RectHeightMode_STRUT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.p1;
  var RectWidthMode_TIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q1;
  var firstOrNull = kotlin_kotlin.$_$.a5;
  var _Size___init__impl__aywn0g = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.a1;
  var lastOrNull = kotlin_kotlin.$_$.q5;
  var toComposeRect = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.j2;
  var RectHeightMode_MAX_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.o1;
  var PathBuilder_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.x4;
  var asComposePath = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.s1;
  var getOrNull = kotlin_kotlin.$_$.e5;
  var isWhitespace = kotlin_kotlin.$_$.sb;
  var get_skiaCanvas = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.e2;
  var LineMetrics = kotlin_org_jetbrains_skiko_skiko.$_$.f5;
  var UnsupportedOperationException_init_$Create$_0 = kotlin_kotlin.$_$.b3;
  var Companion_getInstance_6 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var TextStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.m4;
  var PaintMode_FILL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u3;
  var Paint_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.v4;
  var Companion_getInstance_7 = kotlin_org_jetbrains_skiko_skiko.$_$.h;
  var copyToArray = kotlin_kotlin.$_$.q4;
  var Size__toString_impl_o87ni8 = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.g1;
  var BlendMode__toString_impl_uuibkd = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.l2;
  var Size__hashCode_impl_2h1qpd = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.b1;
  var BlendMode__hashCode_impl_93ceri = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.k2;
  var Companion_getInstance_8 = kotlin_org_jetbrains_skiko_skiko.$_$.j;
  var DecorationLineStyle_SOLID_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.c1;
  var DecorationStyle = kotlin_org_jetbrains_skiko_skiko.$_$.e5;
  var Shadow_0 = kotlin_org_jetbrains_skiko_skiko.$_$.j5;
  var _TextUnit___get_isSp__impl__8c3r6q = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x2;
  var _TextUnit___get_isEm__impl__esrmtl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w2;
  var DecorationLineStyle_WAVY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.d1;
  var DecorationLineStyle_DASHED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.z;
  var DecorationLineStyle_DOTTED_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.a1;
  var DecorationLineStyle_DOUBLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.b1;
  var KProperty0 = kotlin_kotlin.$_$.wa;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r7;
  var sortWith = kotlin_kotlin.$_$.k6;
  var ParagraphStyle = kotlin_org_jetbrains_skiko_skiko.$_$.h5;
  var HeightMode_DISABLE_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.h1;
  var TextIndent = kotlin_org_jetbrains_skiko_skiko.$_$.k5;
  var Font_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.s4;
  var ParagraphBuilder = kotlin_org_jetbrains_skiko_skiko.$_$.g5;
  var BaselineMode_ALPHABETIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.y;
  var PlaceholderStyle = kotlin_org_jetbrains_skiko_skiko.$_$.i5;
  var checkArithmetic = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.u;
  var pack = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.d1;
  var PlaceholderAlignment_MIDDLE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.m1;
  var PlaceholderAlignment_BOTTOM_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.l1;
  var PlaceholderAlignment_TOP_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.n1;
  var PlaceholderAlignment_ABOVE_BASELINE_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.k1;
  var Alignment_START_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.x;
  var Alignment_END_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.t;
  var Alignment_JUSTIFY_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.u;
  var Alignment_CENTER_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.s;
  var Alignment_RIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.w;
  var Alignment_LEFT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.v;
  var HeightMode_ALL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.g1;
  var HeightMode_DISABLE_LAST_DESCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.j1;
  var HeightMode_DISABLE_FIRST_ASCENT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.i1;
  var Direction_LTR_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.e1;
  var Direction_RTL_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.f1;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var listOf_0 = kotlin_kotlin.$_$.t5;
  var FontCollection_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.l4;
  var TypefaceFontProviderWithFallback_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.n4;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.r1;
  var FontMgrWithFallback = kotlin_org_jetbrains_skiko_skiko.$_$.p5;
  var first_0 = kotlin_kotlin.$_$.d5;
  var FontVariation_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.u4;
  var mapOf = kotlin_kotlin.$_$.w5;
  var Companion_getInstance_9 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n3;
  var firstOrNull_0 = kotlin_kotlin.$_$.z4;
  var Paint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.d1;
  var get_skiaPaint = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.g2;
  var Size = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.i;
  var derivedStateOf = kotlin_androidx_compose_runtime_runtime.$_$.c1;
  var coerceIn_0 = kotlin_kotlin.$_$.na;
  var Companion_getInstance_10 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.u3;
  var Stroke = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.c;
  var setOf = kotlin_kotlin.$_$.i6;
  var get_hostOs = kotlin_org_jetbrains_skiko_skiko.$_$.b6;
  var Companion_getInstance_11 = kotlin_org_jetbrains_skiko_skiko.$_$.i;
  var Companion_getInstance_12 = kotlin_org_jetbrains_skiko_skiko.$_$.g;
  var FontSlant_UPRIGHT_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.r3;
  var FontSlant_ITALIC_getInstance = kotlin_org_jetbrains_skiko_skiko.$_$.q3;
  var FontStyle_init_$Create$ = kotlin_org_jetbrains_skiko_skiko.$_$.t4;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Range, 'Range');
  initMetadataForCompanion(Companion);
  initMetadataForClass(sam$kotlin_Comparator$0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(AnnotatedString, 'AnnotatedString', VOID, VOID, [CharSequence]);
  initMetadataForClass(sam$kotlin_Comparator$0_0, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(LinkAnnotation, 'LinkAnnotation');
  initMetadataForClass(Url, 'Url', VOID, LinkAnnotation);
  initMetadataForClass(Clickable, 'Clickable', VOID, LinkAnnotation);
  initMetadataForClass(MultiParagraph, 'MultiParagraph');
  initMetadataForClass(ParagraphInfo, 'ParagraphInfo');
  function get_hasStaleResolvedFonts() {
    return false;
  }
  initMetadataForInterface(ParagraphIntrinsics, 'ParagraphIntrinsics');
  initMetadataForClass(MultiParagraphIntrinsics, 'MultiParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(ParagraphIntrinsicInfo, 'ParagraphIntrinsicInfo');
  initMetadataForClass(ParagraphStyle_0, 'ParagraphStyle');
  initMetadataForClass(Placeholder, 'Placeholder');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(AnnotationType, 'AnnotationType', VOID, Enum);
  initMetadataForInterface(NonNullValueClassSaver, 'NonNullValueClassSaver', VOID, VOID, [Saver]);
  initMetadataForClass(NonNullValueClassSaver$1, VOID, VOID, VOID, [NonNullValueClassSaver]);
  initMetadataForClass(SpanStyle, 'SpanStyle');
  initMetadataForClass(StringAnnotation, 'StringAnnotation');
  initMetadataForClass(TextLayoutResult, 'TextLayoutResult');
  initMetadataForClass(TextLayoutInput, 'TextLayoutInput');
  initMetadataForClass(TextLinkStyles, 'TextLinkStyles', TextLinkStyles);
  initMetadataForCompanion(Companion_1);
  initMetadataForClass(TextRange, 'TextRange');
  initMetadataForCompanion(Companion_2);
  initMetadataForClass(TextStyle, 'TextStyle');
  initMetadataForClass(TtsAnnotation, 'TtsAnnotation');
  initMetadataForClass(VerbatimTtsAnnotation, 'VerbatimTtsAnnotation', VOID, TtsAnnotation);
  initMetadataForClass(UrlAnnotation, 'UrlAnnotation');
  function get_loadingStrategy() {
    return Companion_getInstance_20().q5w_1;
  }
  initMetadataForInterface(Font, 'Font');
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(FontFamily, 'FontFamily');
  initMetadataForClass(SystemFontFamily, 'SystemFontFamily', VOID, FontFamily);
  initMetadataForClass(GenericFontFamily, 'GenericFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(DefaultFontFamily, 'DefaultFontFamily', VOID, SystemFontFamily);
  initMetadataForClass(FileBasedFontFamily, 'FileBasedFontFamily', VOID, FontFamily);
  initMetadataForClass(FontListFontFamily, 'FontListFontFamily', VOID, FileBasedFontFamily, [KtList]);
  initMetadataForClass(LoadedFontFamily, 'LoadedFontFamily', VOID, FontFamily);
  initMetadataForClass(TypefaceRequestCache, 'TypefaceRequestCache', TypefaceRequestCache);
  initMetadataForClass(TypefaceRequest, 'TypefaceRequest');
  initMetadataForClass(Immutable, 'Immutable');
  initMetadataForClass(Async, 'Async');
  initMetadataForClass(FontFamilyResolverImpl, 'FontFamilyResolverImpl', VOID, VOID, VOID, [1]);
  function interceptFontFamily(fontFamily) {
    return fontFamily;
  }
  function interceptFontWeight(fontWeight) {
    return fontWeight;
  }
  function interceptFontStyle(fontStyle) {
    return fontStyle;
  }
  function interceptFontSynthesis(fontSynthesis) {
    return fontSynthesis;
  }
  initMetadataForInterface(PlatformResolveInterceptor, 'PlatformResolveInterceptor');
  initMetadataForClass(PlatformResolveInterceptor$Companion$Default$1, VOID, VOID, VOID, [PlatformResolveInterceptor]);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(AsyncTypefaceResult, 'AsyncTypefaceResult');
  initMetadataForClass(Key, 'Key');
  initMetadataForCoroutine($runCachedCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncTypefaceCache, 'AsyncTypefaceCache', AsyncTypefaceCache, VOID, VOID, [4]);
  initMetadataForLambda(AsyncFontListLoader$load$slambda, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(AsyncFontListLoader$loadWithTimeoutOrNull$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($loadCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($loadWithTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForClass(AsyncFontListLoader, 'AsyncFontListLoader', VOID, VOID, VOID, [0, 1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1, VOID, VOID, AbstractCoroutineContextElement, [Element]);
  initMetadataForCompanion(Companion_5);
  initMetadataForLambda(FontListFontFamilyTypefaceAdapter$resolve$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FontListFontFamilyTypefaceAdapter, 'FontListFontFamilyTypefaceAdapter', FontListFontFamilyTypefaceAdapter, VOID, VOID, [2]);
  initMetadataForCompanion(Companion_6);
  initMetadataForClass(FontMatcher, 'FontMatcher', FontMatcher);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_8);
  initMetadataForClass(FontSynthesis, 'FontSynthesis');
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(FontWeight, 'FontWeight', VOID, VOID, [Comparable]);
  initMetadataForClass(TextInputService, 'TextInputService');
  initMetadataForCompanion(Companion_10);
  initMetadataForClass(LocaleList, 'LocaleList', VOID, VOID, [Collection]);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(BaselineShift, 'BaselineShift');
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(Hyphens, 'Hyphens');
  initMetadataForCompanion(Companion_13);
  initMetadataForCompanion(Companion_14);
  initMetadataForCompanion(Companion_15);
  initMetadataForCompanion(Companion_16);
  initMetadataForClass(Trim, 'Trim');
  initMetadataForClass(Alignment, 'Alignment');
  initMetadataForClass(Mode, 'Mode');
  initMetadataForClass(LineHeightStyle, 'LineHeightStyle');
  initMetadataForClass(ResolvedTextDirection, 'ResolvedTextDirection', VOID, Enum);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(TextAlign, 'TextAlign');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(TextDecoration, 'TextDecoration');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(TextDirection, 'TextDirection');
  function merge(other) {
    var tmp;
    var tmp_0;
    if (other instanceof BrushStyle) {
      tmp_0 = this instanceof BrushStyle;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = new BrushStyle(other.t62_1, takeOrElse_0(other.u62_1, TextForegroundStyle$merge$lambda(this)));
    } else {
      var tmp_1;
      if (other instanceof BrushStyle) {
        tmp_1 = !(this instanceof BrushStyle);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp = other;
      } else {
        var tmp_2;
        if (!(other instanceof BrushStyle)) {
          tmp_2 = this instanceof BrushStyle;
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp = this;
        } else {
          tmp = other.u5s(TextForegroundStyle$merge$lambda_0(this));
        }
      }
    }
    return tmp;
  }
  function takeOrElse(other) {
    return !equals(this, Unspecified_instance) ? this : other();
  }
  initMetadataForInterface(TextForegroundStyle, 'TextForegroundStyle');
  initMetadataForObject(Unspecified, 'Unspecified', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(BrushStyle, 'BrushStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForClass(ColorStyle, 'ColorStyle', VOID, VOID, [TextForegroundStyle]);
  initMetadataForCompanion(Companion_21);
  initMetadataForClass(TextGeometricTransform, 'TextGeometricTransform', TextGeometricTransform);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(TextIndent_0, 'TextIndent', TextIndent_0);
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(TextOverflow, 'TextOverflow');
  initMetadataForClass(AtomicReference, 'AtomicReference');
  initMetadataForClass(ExpireAfterAccessCache, 'ExpireAfterAccessCache');
  initMetadataForCompanion(Companion_24);
  initMetadataForLambda(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(_get_codePoints_$slambda_43x8dt, CoroutineImpl, VOID, [1]);
  initMetadataForCompanion(Companion_25);
  initMetadataForClass(FontRasterizationSettings, 'FontRasterizationSettings');
  initMetadataForClass(FontSmoothing, 'FontSmoothing', VOID, Enum);
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  function paint$default(canvas, color, shadow, textDecoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().t4x_1 : color;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h53_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c5o(canvas, color, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.c5o.call(this, canvas, new Color(color), shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  function paint$default_0(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h53_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.e5o(canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.e5o.call(this, canvas, brush, alpha, shadow, textDecoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  }
  initMetadataForInterface(Paragraph_1, 'Paragraph');
  initMetadataForClass(SkiaParagraph, 'SkiaParagraph', VOID, VOID, [Paragraph_1]);
  initMetadataForCompanion(Companion_26);
  initMetadataForClass(TextDecorationLineStyle, 'TextDecorationLineStyle');
  initMetadataForClass(PlatformTextStyle, 'PlatformTextStyle');
  initMetadataForCompanion(Companion_27);
  initMetadataForClass(PlatformParagraphStyle, 'PlatformParagraphStyle');
  initMetadataForClass(PlatformFontFamilyTypefaceAdapter, 'PlatformFontFamilyTypefaceAdapter', PlatformFontFamilyTypefaceAdapter);
  initMetadataForClass(SkiaFontLoader, 'SkiaFontLoader', SkiaFontLoader_init_$Create$, VOID, VOID, [1]);
  initMetadataForClass(Immutable_0, 'Immutable', Immutable_0);
  initMetadataForClass(Mutable, 'Mutable');
  initMetadataForClass(Op, 'Op');
  initMetadataForClass(StyleAdd, 'StyleAdd', VOID, Op);
  initMetadataForClass(PutPlaceholder, 'PutPlaceholder', VOID, Op);
  initMetadataForClass(EndPlaceholder, 'EndPlaceholder', VOID, Op);
  initMetadataForClass(Cut, 'Cut');
  initMetadataForClass(StyleAdd_0, 'StyleAdd', VOID, Cut);
  initMetadataForClass(StyleRemove, 'StyleRemove', VOID, Cut);
  initMetadataForClass(PutPlaceholder_0, 'PutPlaceholder', VOID, Cut);
  initMetadataForClass(EndPlaceholder_0, 'EndPlaceholder', VOID, Cut);
  initMetadataForClass(sam$kotlin_Comparator$0_1, 'sam$kotlin_Comparator$0', VOID, VOID, [Comparator, FunctionAdapter]);
  initMetadataForClass(ParagraphBuilder_0, 'ParagraphBuilder');
  initMetadataForClass(ParagraphLayouter, 'ParagraphLayouter');
  initMetadataForClass(PlatformFont, 'PlatformFont', VOID, VOID, [Font]);
  initMetadataForClass(SystemFont, 'SystemFont', VOID, PlatformFont);
  initMetadataForClass(FontLoader, 'FontLoader', FontLoader);
  initMetadataForClass(FontLoadResult, 'FontLoadResult');
  initMetadataForClass(Platform, 'Platform', VOID, Enum);
  initMetadataForClass(FontCache, 'FontCache', FontCache);
  initMetadataForClass(SkiaBackedTypeface, 'SkiaBackedTypeface');
  initMetadataForClass(LoadedFont, 'LoadedFont', VOID, PlatformFont);
  initMetadataForClass(SkiaParagraphIntrinsics, 'SkiaParagraphIntrinsics', VOID, VOID, [ParagraphIntrinsics]);
  initMetadataForClass(SkiaTextPaint, 'SkiaTextPaint', SkiaTextPaint);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(LineBreak, 'LineBreak');
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(TextMotion, 'TextMotion');
  initMetadataForClass(Key_0, 'Key');
  initMetadataForClass(WeakKeysCache, 'WeakKeysCache', WeakKeysCache);
  initMetadataForClass(WeakReference, 'WeakReference');
  initMetadataForCompanion(Companion_30);
  initMetadataForClass(Locale, 'Locale');
  initMetadataForClass(createPlatformLocaleDelegate$1);
  //endregion
  var EmptyAnnotatedString;
  var androidx_compose_ui_text_AnnotatedString_Range$stable;
  var androidx_compose_ui_text_AnnotatedString_Builder_BulletScope$stable;
  var androidx_compose_ui_text_AnnotatedString_Builder$stable;
  var androidx_compose_ui_text_AnnotatedString$stable;
  function Range_init_$Init$(item, start, end, $this) {
    Range.call($this, item, start, end, '');
    return $this;
  }
  function Range_init_$Create$(item, start, end) {
    return Range_init_$Init$(item, start, end, objectCreate(protoOf(Range)));
  }
  function AnnotatedString_init_$Init$(text, annotations, $this) {
    var tmp;
    if (annotations === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = annotations;
    }
    annotations = tmp;
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_0;
    if (annotations.n()) {
      tmp_0 = null;
    } else {
      tmp_0 = annotations;
    }
    var tmp$ret$1 = tmp_0;
    AnnotatedString.call($this, tmp$ret$1, text);
    return $this;
  }
  function AnnotatedString_init_$Create$(text, annotations) {
    return AnnotatedString_init_$Init$(text, annotations, objectCreate(protoOf(AnnotatedString)));
  }
  function Range(item, start, end, tag) {
    this.l5l_1 = item;
    this.m5l_1 = start;
    this.n5l_1 = end;
    this.o5l_1 = tag;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.m5l_1 <= this.n5l_1)) {
      var tmp$ret$1 = 'Reversed range is not supported';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  protoOf(Range).p5l = function (item, start, end, tag) {
    return new Range(item, start, end, tag);
  };
  protoOf(Range).q5l = function (item, start, end, tag, $super) {
    item = item === VOID ? this.l5l_1 : item;
    start = start === VOID ? this.m5l_1 : start;
    end = end === VOID ? this.n5l_1 : end;
    tag = tag === VOID ? this.o5l_1 : tag;
    return $super === VOID ? this.p5l(item, start, end, tag) : $super.p5l.call(this, item, start, end, tag);
  };
  protoOf(Range).toString = function () {
    return 'Range(item=' + toString(this.l5l_1) + ', start=' + this.m5l_1 + ', end=' + this.n5l_1 + ', tag=' + this.o5l_1 + ')';
  };
  protoOf(Range).hashCode = function () {
    var result = this.l5l_1 == null ? 0 : hashCode(this.l5l_1);
    result = imul(result, 31) + this.m5l_1 | 0;
    result = imul(result, 31) + this.n5l_1 | 0;
    result = imul(result, 31) + getStringHashCode(this.o5l_1) | 0;
    return result;
  };
  protoOf(Range).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Range))
      return false;
    if (!equals(this.l5l_1, other.l5l_1))
      return false;
    if (!(this.m5l_1 === other.m5l_1))
      return false;
    if (!(this.n5l_1 === other.n5l_1))
      return false;
    if (!(this.o5l_1 === other.o5l_1))
      return false;
    return true;
  };
  function Companion() {
    Companion_instance_0 = this;
    this.r5l_1 = get_AnnotatedStringSaver();
  }
  var Companion_instance_0;
  function Companion_getInstance_13() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function sam$kotlin_Comparator$0(function_0) {
    this.s5l_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0).zb = function (a, b) {
    return this.s5l_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).compare = function (a, b) {
    return this.zb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0).r2 = function () {
    return this.s5l_1;
  };
  protoOf(sam$kotlin_Comparator$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function AnnotatedString$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.m5l_1;
    var tmp$ret$2 = b.m5l_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function AnnotatedString(annotations, text) {
    Companion_getInstance_13();
    this.t5l_1 = annotations;
    this.u5l_1 = text;
    var spanStyles = null;
    var paragraphStyles = null;
    var tmp0_safe_receiver = this.t5l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = tmp0_safe_receiver.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = tmp0_safe_receiver.m(index);
          var tmp = item.l5l_1;
          if (tmp instanceof SpanStyle) {
            if (spanStyles == null) {
              // Inline function 'kotlin.collections.mutableListOf' call
              spanStyles = ArrayList_init_$Create$();
            }
            var tmp_0 = ensureNotNull(spanStyles);
            tmp_0.g(item instanceof Range ? item : THROW_CCE());
          } else {
            var tmp_1 = item.l5l_1;
            if (tmp_1 instanceof ParagraphStyle_0) {
              if (paragraphStyles == null) {
                // Inline function 'kotlin.collections.mutableListOf' call
                paragraphStyles = ArrayList_init_$Create$();
              }
              var tmp_2 = ensureNotNull(paragraphStyles);
              tmp_2.g(item instanceof Range ? item : THROW_CCE());
            }
          }
        }
         while (inductionVariable <= last);
    }
    this.v5l_1 = spanStyles;
    this.w5l_1 = paragraphStyles;
    var tmp1_safe_receiver = this.w5l_1;
    var tmp_3;
    if (tmp1_safe_receiver == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_4 = AnnotatedString$lambda;
      var tmp$ret$5 = new sam$kotlin_Comparator$0(tmp_4);
      tmp_3 = sortedWith(tmp1_safe_receiver, tmp$ret$5);
    }
    var sorted = tmp_3;
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    if (!(sorted == null || sorted.n())) {
      var previousEnds = mutableIntListOf(first(sorted).n5l_1);
      var inductionVariable_0 = 1;
      var last_0 = sorted.l();
      if (inductionVariable_0 < last_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var current = sorted.m(i);
          $l$loop_0: while (true) {
            // Inline function 'androidx.collection.IntList.isNotEmpty' call
            if (!!(previousEnds.oi_1 === 0)) {
              break $l$loop_0;
            }
            var previousEnd = previousEnds.ad();
            if (current.m5l_1 >= previousEnd) {
              // Inline function 'androidx.collection.IntList.lastIndex' call
              var tmp$ret$8 = previousEnds.oi_1 - 1 | 0;
              previousEnds.g2(tmp$ret$8);
            } else {
              // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
              if (!(current.n5l_1 <= previousEnd)) {
                var tmp$ret$10 = 'Paragraph overlap not allowed, end ' + current.n5l_1 + ' should be less than or equal to ' + previousEnd;
                throwIllegalArgumentException(tmp$ret$10);
              }
              break $l$loop_0;
            }
          }
          previousEnds.ti(current.n5l_1);
        }
         while (inductionVariable_0 < last_0);
    }
  }
  protoOf(AnnotatedString).a = function () {
    return this.u5l_1.length;
  };
  protoOf(AnnotatedString).b = function (index) {
    return charCodeAt(this.u5l_1, index);
  };
  protoOf(AnnotatedString).c = function (startIndex, endIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(startIndex <= endIndex)) {
      var tmp$ret$1 = 'start (' + startIndex + ') should be less or equal to end (' + endIndex + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (startIndex === 0 && endIndex === this.u5l_1.length)
      return this;
    var text = substring(this.u5l_1, startIndex, endIndex);
    var tmp0_annotations = filterRanges(this.t5l_1, startIndex, endIndex);
    return new AnnotatedString(tmp0_annotations, text);
  };
  protoOf(AnnotatedString).x5l = function (start, end) {
    var tmp0_safe_receiver = this.t5l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastAny' call
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = tmp0_safe_receiver.m(index);
            var tmp_0;
            var tmp_1 = item.l5l_1;
            if (tmp_1 instanceof LinkAnnotation) {
              tmp_0 = intersect(start, end, item.m5l_1, item.n5l_1);
            } else {
              tmp_0 = false;
            }
            if (tmp_0) {
              tmp$ret$0 = true;
              break $l$block;
            }
          }
           while (inductionVariable <= last);
        tmp$ret$0 = false;
      }
      tmp = tmp$ret$0;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  };
  protoOf(AnnotatedString).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof AnnotatedString))
      return false;
    if (!(this.u5l_1 === other.u5l_1))
      return false;
    if (!equals(this.t5l_1, other.t5l_1))
      return false;
    return true;
  };
  protoOf(AnnotatedString).hashCode = function () {
    var result = getStringHashCode(this.u5l_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.t5l_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(AnnotatedString).toString = function () {
    return this.u5l_1;
  };
  protoOf(AnnotatedString).y5l = function (other) {
    return equals(this.t5l_1, other.t5l_1);
  };
  function filterRanges(ranges, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start <= end)) {
      var tmp$ret$1 = 'start (' + start + ') should be less than or equal to end (' + end + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp;
    if (ranges == null) {
      return null;
    } else {
      tmp = ranges;
    }
    var nonNullRange = tmp;
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target = ArrayList_init_$Create$_0(nonNullRange.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = nonNullRange.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = nonNullRange.m(index);
        if (intersect(start, end, item.m5l_1, item.n5l_1)) {
          // Inline function 'kotlin.comparisons.maxOf' call
          var b = item.m5l_1;
          var tmp_0 = Math.max(start, b) - start | 0;
          // Inline function 'kotlin.comparisons.minOf' call
          var b_0 = item.n5l_1;
          var tmp$ret$8 = Math.min(end, b_0);
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(item.l5l_1, tmp_0, tmp$ret$8 - start | 0, item.o5l_1);
          target.g(element);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp_1;
    if (target.n()) {
      tmp_1 = null;
    } else {
      tmp_1 = target;
    }
    return tmp_1;
  }
  function intersect(lStart, lEnd, rStart, rEnd) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return !!(!!(!!(lStart === lEnd | rStart === rEnd) & lStart === rStart) | !!(lStart < rEnd & rStart < lEnd));
  }
  function getLocalAnnotations(_this__u8e3s4, start, end, predicate) {
    predicate = predicate === VOID ? null : predicate;
    _init_properties_AnnotatedString_kt__ww2pyh();
    if (start === end)
      return null;
    var tmp0_elvis_lhs = _this__u8e3s4.t5l_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var annotations = tmp;
    if (start === 0 && end >= _this__u8e3s4.u5l_1.length) {
      var tmp_0;
      if (predicate == null) {
        tmp_0 = annotations;
      } else {
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        var target = ArrayList_init_$Create$_0(annotations.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable = 0;
        var last = annotations.l() - 1 | 0;
        if (inductionVariable <= last)
          do {
            var index = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var item = annotations.m(index);
            if (predicate(item.l5l_1)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target.g(item);
            }
          }
           while (inductionVariable <= last);
        tmp_0 = target;
      }
      return tmp_0;
    }
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target_0 = ArrayList_init_$Create$_0(annotations.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = annotations.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = annotations.m(index_0);
        var tmp_1;
        var tmp1_elvis_lhs = predicate == null ? null : predicate(item_0.l5l_1);
        if (tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs) {
          tmp_1 = intersect(start, end, item_0.m5l_1, item_0.n5l_1);
        } else {
          tmp_1 = false;
        }
        if (tmp_1) {
          var tmp0_tag = item_0.o5l_1;
          var tmp1_item = item_0.l5l_1;
          var tmp2_start = coerceIn(item_0.m5l_1, start, end) - start | 0;
          var tmp3_end = coerceIn(item_0.n5l_1, start, end) - start | 0;
          // Inline function 'kotlin.collections.plusAssign' call
          var element = new Range(tmp1_item, tmp2_start, tmp3_end, tmp0_tag);
          target_0.g(element);
        }
      }
       while (inductionVariable_0 <= last_0);
    return target_0;
  }
  function normalizedParagraphStyles(_this__u8e3s4, defaultParagraphStyle) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp0_safe_receiver = _this__u8e3s4.w5l_1;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.collections.sortedBy' call
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = normalizedParagraphStyles$lambda;
      var tmp$ret$1 = new sam$kotlin_Comparator$0_0(tmp_0);
      tmp = sortedWith(tmp0_safe_receiver, tmp$ret$1);
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_1 = emptyList();
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    var sortedParagraphs = tmp_1;
    // Inline function 'kotlin.collections.mutableListOf' call
    var result = ArrayList_init_$Create$();
    var lastAdded = 0;
    var stack = ArrayDeque_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = sortedParagraphs.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = sortedParagraphs.m(index);
        var current = item.q5l(defaultParagraphStyle.i5m(item.l5l_1));
        $l$loop: while (true) {
          var tmp_2;
          if (lastAdded < current.m5l_1) {
            // Inline function 'kotlin.collections.isNotEmpty' call
            tmp_2 = !stack.n();
          } else {
            tmp_2 = false;
          }
          if (!tmp_2) {
            break $l$loop;
          }
          var lastInStack = stack.ad();
          if (current.m5l_1 < lastInStack.n5l_1) {
            result.g(Range_init_$Create$(lastInStack.l5l_1, lastAdded, current.m5l_1));
            lastAdded = current.m5l_1;
          } else {
            result.g(Range_init_$Create$(lastInStack.l5l_1, lastAdded, lastInStack.n5l_1));
            lastAdded = lastInStack.n5l_1;
            $l$loop_0: while (true) {
              var tmp_3;
              // Inline function 'kotlin.collections.isNotEmpty' call
              if (!stack.n()) {
                tmp_3 = lastAdded === stack.ad().n5l_1;
              } else {
                tmp_3 = false;
              }
              if (!tmp_3) {
                break $l$loop_0;
              }
              stack.gd();
            }
          }
        }
        if (lastAdded < current.m5l_1) {
          result.g(Range_init_$Create$(defaultParagraphStyle, lastAdded, current.m5l_1));
          lastAdded = current.m5l_1;
        }
        var lastInStack_0 = stack.bd();
        if (!(lastInStack_0 == null)) {
          if (lastInStack_0.m5l_1 === current.m5l_1 && lastInStack_0.n5l_1 === current.n5l_1) {
            stack.gd();
            stack.g(Range_init_$Create$(lastInStack_0.l5l_1.i5m(current.l5l_1), current.m5l_1, current.n5l_1));
          } else if (lastInStack_0.m5l_1 === lastInStack_0.n5l_1) {
            result.g(Range_init_$Create$(lastInStack_0.l5l_1, lastInStack_0.m5l_1, lastInStack_0.n5l_1));
            stack.gd();
            stack.g(Range_init_$Create$(current.l5l_1, current.m5l_1, current.n5l_1));
          } else if (lastInStack_0.n5l_1 < current.n5l_1) {
            throw IllegalArgumentException_init_$Create$();
          } else {
            stack.g(Range_init_$Create$(lastInStack_0.l5l_1.i5m(current.l5l_1), current.m5l_1, current.n5l_1));
          }
        } else {
          stack.g(Range_init_$Create$(current.l5l_1, current.m5l_1, current.n5l_1));
        }
      }
       while (inductionVariable <= last);
    $l$loop_1: while (true) {
      var tmp_4;
      if (lastAdded <= _this__u8e3s4.u5l_1.length) {
        // Inline function 'kotlin.collections.isNotEmpty' call
        tmp_4 = !stack.n();
      } else {
        tmp_4 = false;
      }
      if (!tmp_4) {
        break $l$loop_1;
      }
      var lastInStack_1 = stack.ad();
      result.g(Range_init_$Create$(lastInStack_1.l5l_1, lastAdded, lastInStack_1.n5l_1));
      lastAdded = lastInStack_1.n5l_1;
      $l$loop_2: while (true) {
        var tmp_5;
        // Inline function 'kotlin.collections.isNotEmpty' call
        if (!stack.n()) {
          tmp_5 = lastAdded === stack.ad().n5l_1;
        } else {
          tmp_5 = false;
        }
        if (!tmp_5) {
          break $l$loop_2;
        }
        stack.gd();
      }
    }
    if (lastAdded < _this__u8e3s4.u5l_1.length) {
      result.g(Range_init_$Create$(defaultParagraphStyle, lastAdded, _this__u8e3s4.u5l_1.length));
    }
    if (result.n()) {
      result.g(Range_init_$Create$(defaultParagraphStyle, 0, 0));
    }
    return result;
  }
  function substringWithoutParagraphStyles(_this__u8e3s4, start, end) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    var tmp = !(start === end) ? substring(_this__u8e3s4.u5l_1, start, end) : '';
    var tmp0_elvis_lhs = getLocalAnnotations(_this__u8e3s4, start, end, substringWithoutParagraphStyles$lambda);
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    return AnnotatedString_init_$Create$(tmp, tmp_0);
  }
  function access$substringWithoutParagraphStyles$tAnnotatedStringKt($receiver, start, end) {
    return substringWithoutParagraphStyles($receiver, start, end);
  }
  function sam$kotlin_Comparator$0_0(function_0) {
    this.j5m_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_0).zb = function (a, b) {
    return this.j5m_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).compare = function (a, b) {
    return this.zb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_0).r2 = function () {
    return this.j5m_1;
  };
  protoOf(sam$kotlin_Comparator$0_0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_0).hashCode = function () {
    return hashCode(this.r2());
  };
  function normalizedParagraphStyles$lambda(a, b) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.m5l_1;
    var tmp$ret$2 = b.m5l_1;
    return compareValues(tmp, tmp$ret$2);
  }
  function substringWithoutParagraphStyles$lambda(it) {
    _init_properties_AnnotatedString_kt__ww2pyh();
    return !(it instanceof ParagraphStyle_0);
  }
  var properties_initialized_AnnotatedString_kt_um06op;
  function _init_properties_AnnotatedString_kt__ww2pyh() {
    if (!properties_initialized_AnnotatedString_kt_um06op) {
      properties_initialized_AnnotatedString_kt_um06op = true;
      EmptyAnnotatedString = AnnotatedString_init_$Create$('');
      androidx_compose_ui_text_AnnotatedString_Range$stable = 0;
      androidx_compose_ui_text_AnnotatedString_Builder_BulletScope$stable = 8;
      androidx_compose_ui_text_AnnotatedString_Builder$stable = 8;
      androidx_compose_ui_text_AnnotatedString$stable = 0;
    }
  }
  var androidx_compose_ui_text_ComposeUiTextFlags$stable;
  var androidx_compose_ui_text_LinkAnnotation_Url$stable;
  var androidx_compose_ui_text_LinkAnnotation_Clickable$stable;
  var androidx_compose_ui_text_LinkAnnotation$stable;
  function Url(url, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    linkInteractionListener = linkInteractionListener === VOID ? null : linkInteractionListener;
    LinkAnnotation.call(this);
    this.k5m_1 = url;
    this.l5m_1 = styles;
    this.m5m_1 = linkInteractionListener;
  }
  protoOf(Url).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Url))
      return false;
    if (!(this.k5m_1 === other.k5m_1))
      return false;
    if (!equals(this.l5m_1, other.l5m_1))
      return false;
    if (!equals(this.m5m_1, other.m5m_1))
      return false;
    return true;
  };
  protoOf(Url).hashCode = function () {
    var result = getStringHashCode(this.k5m_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.l5m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.m5m_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Url).toString = function () {
    return 'LinkAnnotation.Url(url=' + this.k5m_1 + ')';
  };
  function Clickable(tag, styles, linkInteractionListener) {
    styles = styles === VOID ? null : styles;
    LinkAnnotation.call(this);
    this.n5m_1 = tag;
    this.o5m_1 = styles;
    this.p5m_1 = linkInteractionListener;
  }
  protoOf(Clickable).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Clickable))
      return false;
    if (!(this.n5m_1 === other.n5m_1))
      return false;
    if (!equals(this.o5m_1, other.o5m_1))
      return false;
    if (!equals(this.p5m_1, other.p5m_1))
      return false;
    return true;
  };
  protoOf(Clickable).hashCode = function () {
    var result = getStringHashCode(this.n5m_1);
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.o5m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.p5m_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : hashCode(tmp2_safe_receiver);
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  protoOf(Clickable).toString = function () {
    return 'LinkAnnotation.Clickable(tag=' + this.n5m_1 + ')';
  };
  function LinkAnnotation() {
  }
  var androidx_compose_ui_text_MultiParagraph$stable;
  var androidx_compose_ui_text_ParagraphInfo$stable;
  function _get_annotatedString__kqljtk($this) {
    return $this.v5m_1.q5m_1;
  }
  function requireIndexInRangeInclusiveEnd($this, offset) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_annotatedString__kqljtk($this).u5l_1.length : false)) {
      var tmp$ret$1 = 'offset(' + offset + ') is out of bounds [0, ' + _get_annotatedString__kqljtk($this).a() + ']';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  function requireLineIndexInRange($this, lineIndex) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= lineIndex ? lineIndex < $this.a5n_1 : false)) {
      var tmp$ret$1 = 'lineIndex(' + lineIndex + ') is out of bounds [0, ' + $this.a5n_1 + ')';
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  function MultiParagraph$getPathForRange$lambda($path, $start, $end) {
    return function (paragraphInfo) {
      // Inline function 'kotlin.with' call
      $path.h54(paragraphInfo.m5n(paragraphInfo.d5n_1.l5n(paragraphInfo.k5n($start), paragraphInfo.k5n($end))));
      return Unit_instance;
    };
  }
  function MultiParagraph(intrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_37().n5n_1 : overflow;
    this.v5m_1 = intrinsics;
    this.w5m_1 = maxLines;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(_Constraints___get_minWidth__impl__hi9lfi(constraints) === 0 && _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0)) {
      var tmp$ret$1 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var currentHeight = 0.0;
    var currentLineCount = 0;
    var didExceedMaxLines = false;
    // Inline function 'kotlin.collections.mutableListOf' call
    var paragraphInfoList = ArrayList_init_$Create$();
    var infoList = this.v5m_1.u5m_1;
    var inductionVariable = 0;
    var last = infoList.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraphInfo = infoList.m(index);
        var tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
        var tmp_0;
        if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints)) {
          tmp_0 = coerceAtLeast(_Constraints___get_maxHeight__impl__dt3e8z(constraints) - ceilToInt(currentHeight) | 0, 0);
        } else {
          tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
        }
        var paragraph = Paragraph_0(paragraphInfo.s5n_1, Constraints(VOID, tmp, VOID, tmp_0), this.w5m_1 - currentLineCount | 0, overflow);
        var paragraphTop = currentHeight;
        var paragraphBottom = currentHeight + paragraph.c47();
        currentHeight = paragraphBottom;
        var startLineIndex = currentLineCount;
        var endLineIndex = startLineIndex + paragraph.v5n() | 0;
        currentLineCount = endLineIndex;
        paragraphInfoList.g(new ParagraphInfo(paragraph, paragraphInfo.t5n_1, paragraphInfo.u5n_1, startLineIndex, endLineIndex, paragraphTop, paragraphBottom));
        if (paragraph.w5n() || (endLineIndex === this.w5m_1 && !(index === get_lastIndex(this.v5m_1.u5m_1)))) {
          didExceedMaxLines = true;
          break $l$loop;
        }
      }
       while (inductionVariable <= last);
    this.z5m_1 = currentHeight;
    this.a5n_1 = currentLineCount;
    this.x5m_1 = didExceedMaxLines;
    this.c5n_1 = paragraphInfoList;
    this.y5m_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_1 = this;
    // Inline function 'androidx.compose.ui.util.fastFlatMap' call
    var target = ArrayList_init_$Create$_0(paragraphInfoList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = paragraphInfoList.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item = paragraphInfoList.m(index_0);
        // Inline function 'kotlin.with' call
        // Inline function 'androidx.compose.ui.util.fastMap' call
        var this_0 = item.d5n_1.x5n();
        var target_0 = ArrayList_init_$Create$_0(this_0.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_1 = 0;
        var last_1 = this_0.l() - 1 | 0;
        if (inductionVariable_1 <= last_1)
          do {
            var index_1 = inductionVariable_1;
            inductionVariable_1 = inductionVariable_1 + 1 | 0;
            var item_0 = this_0.m(index_1);
            // Inline function 'kotlin.collections.plusAssign' call
            var element = item_0 == null ? null : item.y5n(item_0);
            target_0.g(element);
          }
           while (inductionVariable_1 <= last_1);
        var list = target_0;
        addAll(target, list);
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.let' call
    var tmp_2;
    if (target.l() < this.v5m_1.r5m_1.l()) {
      // Inline function 'kotlin.collections.List' call
      // Inline function 'kotlin.collections.MutableList' call
      var size = this.v5m_1.r5m_1.l() - target.l() | 0;
      var list_0 = ArrayList_init_$Create$_0(size);
      // Inline function 'kotlin.repeat' call
      var inductionVariable_2 = 0;
      if (inductionVariable_2 < size)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          list_0.g(null);
        }
         while (inductionVariable_2 < size);
      tmp_2 = plus(target, list_0);
    } else {
      tmp_2 = target;
    }
    tmp_1.b5n_1 = tmp_2;
  }
  protoOf(MultiParagraph).z5n = function () {
    var tmp;
    if (this.c5n_1.n()) {
      tmp = 0.0;
    } else {
      tmp = this.c5n_1.m(0).d5n_1.z5n();
    }
    return tmp;
  };
  protoOf(MultiParagraph).a5o = function () {
    var tmp;
    if (this.c5n_1.n()) {
      tmp = 0.0;
    } else {
      // Inline function 'kotlin.with' call
      var $this$with = last(this.c5n_1);
      tmp = $this$with.b5o($this$with.d5n_1.a5o());
    }
    return tmp;
  };
  protoOf(MultiParagraph).c5o = function (canvas, color, shadow, decoration, drawStyle, blendMode) {
    canvas.m4z();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = this.c5n_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.d5n_1.c5o(canvas, color, shadow, decoration, drawStyle, blendMode);
        canvas.b46(0.0, item.d5n_1.c47());
      }
       while (inductionVariable <= last);
    canvas.n4z();
  };
  protoOf(MultiParagraph).d5o = function (canvas, color, shadow, decoration, drawStyle, blendMode, $super) {
    color = color === VOID ? Companion_getInstance().t4x_1 : color;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h53_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.c5o(canvas, color, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.c5o.call(this, canvas, new Color(color), shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).e5o = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    drawMultiParagraph(this, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
  };
  protoOf(MultiParagraph).f5o = function (canvas, brush, alpha, shadow, decoration, drawStyle, blendMode, $super) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h53_1 : blendMode;
    var tmp;
    if ($super === VOID) {
      this.e5o(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
      tmp = Unit_instance;
    } else {
      tmp = $super.e5o.call(this, canvas, brush, alpha, shadow, decoration, drawStyle, new BlendMode(blendMode));
    }
    return tmp;
  };
  protoOf(MultiParagraph).l5n = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_annotatedString__kqljtk(this).u5l_1.length)) {
      var tmp$ret$1 = 'Start(' + start + ') or End(' + end + ') is out of range [0..' + _get_annotatedString__kqljtk(this).u5l_1.length + '),' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$1);
    }
    if (start === end)
      return Path();
    var path = Path();
    var tmp = TextRange_1(start, end);
    findParagraphsByRange(this.c5n_1, tmp, MultiParagraph$getPathForRange$lambda(path, start, end));
    return path;
  };
  protoOf(MultiParagraph).g5o = function (vertical) {
    var paragraphIndex = findParagraphByY(this.c5n_1, vertical);
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    var tmp;
    if ($this$with.a() === 0) {
      tmp = $this$with.g5n_1;
    } else {
      tmp = $this$with.i5o($this$with.d5n_1.g5o($this$with.h5o(vertical)));
    }
    return tmp;
  };
  protoOf(MultiParagraph).j5o = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.c5n_1);
    } else {
      tmp = findParagraphByIndex(this.c5n_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    return $this$with.d5n_1.j5o($this$with.k5n(offset));
  };
  protoOf(MultiParagraph).k5o = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.c5n_1);
    } else {
      tmp = findParagraphByIndex(this.c5n_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    return $this$with.d5n_1.k5o($this$with.k5n(offset));
  };
  protoOf(MultiParagraph).l5o = function (offset) {
    requireIndexInRangeInclusiveEnd(this, offset);
    var tmp;
    if (offset === _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.c5n_1);
    } else {
      tmp = findParagraphByIndex(this.c5n_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    return $this$with.m5o($this$with.d5n_1.l5o($this$with.k5n(offset)), false);
  };
  protoOf(MultiParagraph).o5o = function (offset) {
    var tmp;
    if (offset >= _get_annotatedString__kqljtk(this).a()) {
      tmp = get_lastIndex(this.c5n_1);
    } else if (offset < 0) {
      tmp = 0;
    } else {
      tmp = findParagraphByIndex(this.c5n_1, offset);
    }
    var paragraphIndex = tmp;
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    return $this$with.i5o($this$with.d5n_1.o5o($this$with.k5n(offset)));
  };
  protoOf(MultiParagraph).p5o = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.c5n_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    return $this$with.b5o($this$with.d5n_1.p5o($this$with.q5o(lineIndex)));
  };
  protoOf(MultiParagraph).r5o = function (lineIndex) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.c5n_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    return $this$with.s5o($this$with.d5n_1.r5o($this$with.q5o(lineIndex)));
  };
  protoOf(MultiParagraph).t5o = function (lineIndex, visibleEnd) {
    requireLineIndexInRange(this, lineIndex);
    var paragraphIndex = findParagraphByLineIndex(this.c5n_1, lineIndex);
    // Inline function 'kotlin.with' call
    var $this$with = this.c5n_1.m(paragraphIndex);
    return $this$with.s5o($this$with.d5n_1.t5o($this$with.q5o(lineIndex), visibleEnd));
  };
  function ParagraphInfo(paragraph, startIndex, endIndex, startLineIndex, endLineIndex, top, bottom) {
    startLineIndex = startLineIndex === VOID ? -1 : startLineIndex;
    endLineIndex = endLineIndex === VOID ? -1 : endLineIndex;
    top = top === VOID ? -1.0 : top;
    bottom = bottom === VOID ? -1.0 : bottom;
    this.d5n_1 = paragraph;
    this.e5n_1 = startIndex;
    this.f5n_1 = endIndex;
    this.g5n_1 = startLineIndex;
    this.h5n_1 = endLineIndex;
    this.i5n_1 = top;
    this.j5n_1 = bottom;
  }
  protoOf(ParagraphInfo).a = function () {
    return this.f5n_1 - this.e5n_1 | 0;
  };
  protoOf(ParagraphInfo).k5n = function (_this__u8e3s4) {
    return coerceIn(_this__u8e3s4, this.e5n_1, this.f5n_1) - this.e5n_1 | 0;
  };
  protoOf(ParagraphInfo).s5o = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.e5n_1 | 0;
  };
  protoOf(ParagraphInfo).q5o = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.g5n_1 | 0;
  };
  protoOf(ParagraphInfo).i5o = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.g5n_1 | 0;
  };
  protoOf(ParagraphInfo).b5o = function (_this__u8e3s4) {
    return _this__u8e3s4 + this.i5n_1;
  };
  protoOf(ParagraphInfo).h5o = function (_this__u8e3s4) {
    return _this__u8e3s4 - this.i5n_1;
  };
  protoOf(ParagraphInfo).y5n = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.i5n_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
    return _this__u8e3s4.n46(tmp$ret$0);
  };
  protoOf(ParagraphInfo).m5n = function (_this__u8e3s4) {
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.i5n_1;
    var v1 = fromInt(toRawBits(0.0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$1 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$0 = _Offset___init__impl__c168vi(tmp$ret$1);
    _this__u8e3s4.a46(tmp$ret$0);
    return _this__u8e3s4;
  };
  protoOf(ParagraphInfo).m5o = function (_this__u8e3s4, treatZeroAsNull) {
    if (treatZeroAsNull && equals(_this__u8e3s4, Companion_getInstance_15().u5o_1)) {
      return Companion_getInstance_15().u5o_1;
    }
    return TextRange_1(this.s5o(_TextRange___get_start__impl__ww4t90(_this__u8e3s4)), this.s5o(_TextRange___get_end__impl__gcdxpp(_this__u8e3s4)));
  };
  protoOf(ParagraphInfo).toString = function () {
    return 'ParagraphInfo(paragraph=' + toString_0(this.d5n_1) + ', startIndex=' + this.e5n_1 + ', endIndex=' + this.f5n_1 + ', startLineIndex=' + this.g5n_1 + ', endLineIndex=' + this.h5n_1 + ', top=' + this.i5n_1 + ', bottom=' + this.j5n_1 + ')';
  };
  protoOf(ParagraphInfo).hashCode = function () {
    var result = hashCode(this.d5n_1);
    result = imul(result, 31) + this.e5n_1 | 0;
    result = imul(result, 31) + this.f5n_1 | 0;
    result = imul(result, 31) + this.g5n_1 | 0;
    result = imul(result, 31) + this.h5n_1 | 0;
    result = imul(result, 31) + getNumberHashCode(this.i5n_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.j5n_1) | 0;
    return result;
  };
  protoOf(ParagraphInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphInfo))
      return false;
    if (!equals(this.d5n_1, other.d5n_1))
      return false;
    if (!(this.e5n_1 === other.e5n_1))
      return false;
    if (!(this.f5n_1 === other.f5n_1))
      return false;
    if (!(this.g5n_1 === other.g5n_1))
      return false;
    if (!(this.h5n_1 === other.h5n_1))
      return false;
    if (!equals(this.i5n_1, other.i5n_1))
      return false;
    if (!equals(this.j5n_1, other.j5n_1))
      return false;
    return true;
  };
  function findParagraphsByRange(paragraphInfoList, range, action) {
    var paragraphIndex = findParagraphByIndex(paragraphInfoList, _TextRange___get_min__impl__uu95c4(range));
    var inductionVariable = paragraphIndex;
    var last = paragraphInfoList.l();
    if (inductionVariable < last)
      $l$loop_0: do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var paragraph = paragraphInfoList.m(i);
        if (paragraph.e5n_1 >= _TextRange___get_max__impl__owm8m(range))
          break $l$loop_0;
        if (paragraph.e5n_1 === paragraph.f5n_1)
          continue $l$loop_0;
        action(paragraph);
      }
       while (inductionVariable < last);
  }
  function findParagraphByY(paragraphInfoList, y) {
    if (y <= 0)
      return 0;
    if (y >= last(paragraphInfoList).j5n_1)
      return get_lastIndex(paragraphInfoList);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.i5n_1 > y ? 1 : midVal.j5n_1 <= y ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$0 = mid;
          break $l$block;
        }
      }
      tmp$ret$0 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$0;
  }
  function findParagraphByIndex(paragraphInfoList, index) {
    var lastLineEnd = last(paragraphInfoList).f5n_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(index <= last(paragraphInfoList).f5n_1)) {
      var tmp$ret$1 = 'Index ' + index + " should be less or equal than last line's end " + lastLineEnd;
      throwIllegalArgumentException(tmp$ret$1);
    }
    var tmp$ret$2;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.e5n_1 > index ? 1 : midVal.f5n_1 <= index ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$2 = mid;
          break $l$block;
        }
      }
      tmp$ret$2 = -(low + 1 | 0) | 0;
    }
    var paragraphIndex = tmp$ret$2;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= paragraphIndex ? paragraphIndex <= (paragraphInfoList.l() - 1 | 0) : false)) {
      var tmp = 'Found paragraph index ' + paragraphIndex + ' should be in range [0, ' + paragraphInfoList.l() + ').\n';
      var tmp$ret$5 = tmp + ('Debug info: index=' + index + ', paragraphs=[' + fastJoinToString(paragraphInfoList, VOID, VOID, VOID, VOID, VOID, findParagraphByIndex$lambda) + ']');
      throwIllegalArgumentException(tmp$ret$5);
    }
    return paragraphIndex;
  }
  function findParagraphByLineIndex(paragraphInfoList, lineIndex) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.fastBinarySearch' call
      var low = 0;
      var high = paragraphInfoList.l() - 1 | 0;
      while (low <= high) {
        var mid = (low + high | 0) >>> 1 | 0;
        var midVal = paragraphInfoList.m(mid);
        var cmp = midVal.g5n_1 > lineIndex ? 1 : midVal.h5n_1 <= lineIndex ? -1 : 0;
        if (cmp < 0)
          low = mid + 1 | 0;
        else if (cmp > 0)
          high = mid - 1 | 0;
        else {
          tmp$ret$0 = mid;
          break $l$block;
        }
      }
      tmp$ret$0 = -(low + 1 | 0) | 0;
    }
    return tmp$ret$0;
  }
  function findParagraphByIndex$lambda(it) {
    return '[' + it.e5n_1 + ', ' + it.f5n_1 + ')';
  }
  var androidx_compose_ui_text_MultiParagraphIntrinsics$stable;
  var androidx_compose_ui_text_ParagraphIntrinsicInfo$stable;
  function resolveTextDirection($this, style, defaultStyle) {
    return !(style.a5m_1 === Companion_getInstance_33().b5p_1) ? style : style.v5o(VOID, defaultStyle.a5m_1);
  }
  function MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.u5m_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.n()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.m(0);
        var maxValue = maxElem.s5n_1.f4o();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.m(i);
            var v = e.s5n_1.f4o();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s5n_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.f4o();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng() {
    return constructCallableReference(function (p0) {
      return p0.f4o();
    }, 1, 0, 16);
  }
  function MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this$0) {
    return function () {
      var tmp0 = this$0.u5m_1;
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.util.fastMaxBy' call
        if (tmp0.n()) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var maxElem = tmp0.m(0);
        var maxValue = maxElem.s5n_1.g4o();
        var inductionVariable = 1;
        var last = get_lastIndex(tmp0);
        if (inductionVariable <= last)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var e = tmp0.m(i);
            var v = e.s5n_1.g4o();
            if (compareTo(maxValue, v) < 0) {
              maxElem = e;
              maxValue = v;
            }
          }
           while (!(i === last));
        tmp$ret$0 = maxElem;
      }
      var tmp0_safe_receiver = tmp$ret$0;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s5n_1;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.g4o();
      return tmp2_elvis_lhs == null ? 0.0 : tmp2_elvis_lhs;
    };
  }
  function MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq() {
    return constructCallableReference(function (p0) {
      return p0.g4o();
    }, 1, 0, 17);
  }
  function MultiParagraphIntrinsics(annotatedString, style, placeholders, density, fontFamilyResolver) {
    this.q5m_1 = annotatedString;
    this.r5m_1 = placeholders;
    var tmp = this;
    var tmp_0 = LazyThreadSafetyMode_NONE_getInstance();
    tmp.s5m_1 = lazy(tmp_0, MultiParagraphIntrinsics$minIntrinsicWidth$delegate$lambda(this));
    var tmp_1 = this;
    var tmp_2 = LazyThreadSafetyMode_NONE_getInstance();
    tmp_1.t5m_1 = lazy(tmp_2, MultiParagraphIntrinsics$maxIntrinsicWidth$delegate$lambda(this));
    var paragraphStyle = style.f5p();
    var tmp_3 = this;
    // Inline function 'androidx.compose.ui.text.mapEachParagraphStyle' call
    var this_0 = this.q5m_1;
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_1 = normalizedParagraphStyles(this_0, paragraphStyle);
    var target = ArrayList_init_$Create$_0(this_1.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_1.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_1.m(index);
        var annotatedString_0 = access$substringWithoutParagraphStyles$tAnnotatedStringKt(this_0, item.m5l_1, item.n5l_1);
        var currentParagraphStyle = resolveTextDirection(this, item.l5l_1, paragraphStyle);
        var tmp1_text = annotatedString_0.u5l_1;
        var tmp2_style = style.g5p(currentParagraphStyle);
        var tmp0_elvis_lhs = annotatedString_0.t5l_1;
        var tmp3_annotations = tmp0_elvis_lhs == null ? emptyList() : tmp0_elvis_lhs;
        var tmp4_placeholders = getLocalPlaceholders(this.r5m_1, item.m5l_1, item.n5l_1);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new ParagraphIntrinsicInfo(ParagraphIntrinsics_0(tmp1_text, tmp2_style, tmp3_annotations, density, fontFamilyResolver, tmp4_placeholders), item.m5l_1, item.n5l_1);
        target.g(element);
      }
       while (inductionVariable <= last);
    tmp_3.u5m_1 = target;
  }
  protoOf(MultiParagraphIntrinsics).f4o = function () {
    var tmp0 = this.s5m_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('minIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_minIntrinsicWidth_$ref_bvjwng(), null);
    return tmp0.r1();
  };
  protoOf(MultiParagraphIntrinsics).g4o = function () {
    var tmp0 = this.t5m_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('maxIntrinsicWidth', 1, tmp, MultiParagraphIntrinsics$_get_maxIntrinsicWidth_$ref_co14jq(), null);
    return tmp0.r1();
  };
  protoOf(MultiParagraphIntrinsics).h5p = function () {
    var tmp0 = this.u5m_1;
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
          if (item.s5n_1.h5p()) {
            tmp$ret$0 = true;
            break $l$block;
          }
        }
         while (inductionVariable <= last);
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  function ParagraphIntrinsicInfo(intrinsics, startIndex, endIndex) {
    this.s5n_1 = intrinsics;
    this.t5n_1 = startIndex;
    this.u5n_1 = endIndex;
  }
  protoOf(ParagraphIntrinsicInfo).toString = function () {
    return 'ParagraphIntrinsicInfo(intrinsics=' + toString_0(this.s5n_1) + ', startIndex=' + this.t5n_1 + ', endIndex=' + this.u5n_1 + ')';
  };
  protoOf(ParagraphIntrinsicInfo).hashCode = function () {
    var result = hashCode(this.s5n_1);
    result = imul(result, 31) + this.t5n_1 | 0;
    result = imul(result, 31) + this.u5n_1 | 0;
    return result;
  };
  protoOf(ParagraphIntrinsicInfo).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphIntrinsicInfo))
      return false;
    if (!equals(this.s5n_1, other.s5n_1))
      return false;
    if (!(this.t5n_1 === other.t5n_1))
      return false;
    if (!(this.u5n_1 === other.u5n_1))
      return false;
    return true;
  };
  function getLocalPlaceholders(_this__u8e3s4, start, end) {
    // Inline function 'androidx.compose.ui.util.fastFilteredMap' call
    var target = ArrayList_init_$Create$_0(_this__u8e3s4.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = _this__u8e3s4.m(index);
        if (intersect(start, end, item.m5l_1, item.n5l_1)) {
          // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
          if (!(start <= item.m5l_1 && item.n5l_1 <= end)) {
            var tmp$ret$6 = 'placeholder can not overlap with paragraph.';
            throwIllegalArgumentException(tmp$ret$6);
          }
          // Inline function 'kotlin.collections.plusAssign' call
          var element = Range_init_$Create$(item.l5l_1, item.m5l_1 - start | 0, item.n5l_1 - start | 0);
          target.g(element);
        }
      }
       while (inductionVariable <= last);
    return target;
  }
  function Paragraph(text, style, constraints, density, fontFamilyResolver, spanStyles, placeholders, maxLines, overflow) {
    var tmp;
    if (spanStyles === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = spanStyles;
    }
    spanStyles = tmp;
    var tmp_0;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp_0 = emptyList();
    } else {
      tmp_0 = placeholders;
    }
    placeholders = tmp_0;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_37().n5n_1 : overflow;
    return ActualParagraph(text, style, spanStyles, placeholders, maxLines, overflow, constraints, density, fontFamilyResolver);
  }
  function Paragraph_0(paragraphIntrinsics, constraints, maxLines, overflow) {
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    overflow = overflow === VOID ? Companion_getInstance_37().n5n_1 : overflow;
    return ActualParagraph_0(paragraphIntrinsics, maxLines, overflow, constraints);
  }
  function ceilToInt(_this__u8e3s4) {
    // Inline function 'kotlin.math.ceil' call
    var tmp$ret$0 = Math.ceil(_this__u8e3s4);
    return numberToInt(tmp$ret$0);
  }
  function ParagraphIntrinsics() {
  }
  function ParagraphIntrinsics_0(text, style, annotations, density, fontFamilyResolver, placeholders) {
    var tmp;
    if (placeholders === VOID) {
      // Inline function 'kotlin.collections.listOf' call
      tmp = emptyList();
    } else {
      tmp = placeholders;
    }
    placeholders = tmp;
    return ActualParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver);
  }
  function get_DefaultLineHeight() {
    _init_properties_ParagraphStyle_kt__lbx7er();
    return DefaultLineHeight;
  }
  var DefaultLineHeight;
  var androidx_compose_ui_text_ParagraphStyle$stable;
  function ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    textAlign = textAlign === VOID ? Companion_getInstance_31().o5p_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_33().b5p_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q48_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_42().s5p_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().v5p_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    this.z5l_1 = textAlign;
    this.a5m_1 = textDirection;
    this.b5m_1 = lineHeight;
    this.c5m_1 = textIndent;
    this.d5m_1 = platformStyle;
    this.e5m_1 = lineHeightStyle;
    this.f5m_1 = lineBreak;
    this.g5m_1 = hyphens;
    this.h5m_1 = textMotion;
    if (!equals(this.b5m_1, Companion_getInstance_1().q48_1)) {
      // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
      if (!(_TextUnit___get_value__impl__hpbx0k(this.b5m_1) >= 0.0)) {
        var tmp$ret$1 = "lineHeight can't be negative (" + _TextUnit___get_value__impl__hpbx0k(this.b5m_1) + ')';
        throwIllegalStateException(tmp$ret$1);
      }
    }
  }
  protoOf(ParagraphStyle_0).i5m = function (other) {
    if (other == null)
      return this;
    return fastMerge(this, other.z5l_1, other.a5m_1, other.b5m_1, other.c5m_1, other.d5m_1, other.e5m_1, other.f5m_1, other.g5m_1, other.h5m_1);
  };
  protoOf(ParagraphStyle_0).w5p = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
  };
  protoOf(ParagraphStyle_0).v5o = function (textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    textAlign = textAlign === VOID ? this.z5l_1 : textAlign;
    textDirection = textDirection === VOID ? this.a5m_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.b5m_1 : lineHeight;
    textIndent = textIndent === VOID ? this.c5m_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.d5m_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.e5m_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.f5m_1 : lineBreak;
    hyphens = hyphens === VOID ? this.g5m_1 : hyphens;
    textMotion = textMotion === VOID ? this.h5m_1 : textMotion;
    return $super === VOID ? this.w5p(textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) : $super.w5p.call(this, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
  };
  protoOf(ParagraphStyle_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ParagraphStyle_0))
      return false;
    if (!(this.z5l_1 === other.z5l_1))
      return false;
    if (!(this.a5m_1 === other.a5m_1))
      return false;
    if (!equals(this.b5m_1, other.b5m_1))
      return false;
    if (!equals(this.c5m_1, other.c5m_1))
      return false;
    if (!equals(this.d5m_1, other.d5m_1))
      return false;
    if (!equals(this.e5m_1, other.e5m_1))
      return false;
    if (!(this.f5m_1 === other.f5m_1))
      return false;
    if (!(this.g5m_1 === other.g5m_1))
      return false;
    if (!equals(this.h5m_1, other.h5m_1))
      return false;
    return true;
  };
  protoOf(ParagraphStyle_0).hashCode = function () {
    var result = TextAlign__hashCode_impl_s8g35y(this.z5l_1);
    result = imul(31, result) + TextDirection__hashCode_impl_g63nwg(this.a5m_1) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.b5m_1) | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.c5m_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp2_safe_receiver = this.d5m_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp_0 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp4_safe_receiver = this.e5m_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_1 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    result = imul(31, result) + LineBreak__hashCode_impl_ybksn(this.f5m_1) | 0;
    result = imul(31, result) + Hyphens__hashCode_impl_yb7t8v(this.g5m_1) | 0;
    var tmp_2 = imul(31, result);
    var tmp6_safe_receiver = this.h5m_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_2 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  protoOf(ParagraphStyle_0).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7('ParagraphStyle(');
    this_0.q7('textAlign=' + TextAlign__toString_impl_6ha6d3(this.z5l_1) + ', ');
    this_0.q7('textDirection=' + TextDirection__toString_impl_x3uh9t(this.a5m_1) + ', ');
    this_0.q7('lineHeight=' + TextUnit__toString_impl_51ghw0(this.b5m_1) + ', ');
    this_0.q7('textIndent=' + toString(this.c5m_1) + ', ');
    this_0.q7('platformStyle=' + toString(this.d5m_1) + ', ');
    this_0.q7('lineHeightStyle=' + toString(this.e5m_1) + ', ');
    this_0.q7('lineBreak=' + LineBreak__toString_impl_mphhli(this.f5m_1) + ', ');
    this_0.q7('hyphens=' + Hyphens__toString_impl_ck1wg0(this.g5m_1) + ', ');
    this_0.q7('textMotion=' + toString(this.h5m_1));
    this_0.q7(')');
    return this_0.toString();
  };
  function fastMerge(_this__u8e3s4, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    if (!(textAlign === Companion_getInstance_31().o5p_1) && !(textAlign === _this__u8e3s4.z5l_1)) {
      tmp_6 = true;
    } else {
      var tmp_7;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
        tmp_7 = !equals(lineHeight, _this__u8e3s4.b5m_1);
      } else {
        tmp_7 = false;
      }
      tmp_6 = tmp_7;
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      tmp_5 = (!(textIndent == null) && !equals(textIndent, _this__u8e3s4.c5m_1));
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textDirection === Companion_getInstance_33().b5p_1) && !(textDirection === _this__u8e3s4.a5m_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.d5m_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      tmp_2 = (!(lineHeightStyle == null) && !equals(lineHeightStyle, _this__u8e3s4.e5m_1));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(lineBreak === Companion_getInstance_42().s5p_1) && !(lineBreak === _this__u8e3s4.f5m_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(hyphens === Companion_getInstance_26().v5p_1) && !(hyphens === _this__u8e3s4.g5m_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(textMotion == null) && !equals(textMotion, _this__u8e3s4.h5m_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_8;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_8 = _this__u8e3s4.b5m_1;
    } else {
      tmp_8 = lineHeight;
    }
    var tmp3_lineHeight = tmp_8;
    var tmp4_textIndent = textIndent == null ? _this__u8e3s4.c5m_1 : textIndent;
    var tmp5_textAlign = !(textAlign === Companion_getInstance_31().o5p_1) ? textAlign : _this__u8e3s4.z5l_1;
    var tmp6_textDirection = !(textDirection === Companion_getInstance_33().b5p_1) ? textDirection : _this__u8e3s4.a5m_1;
    var tmp7_platformStyle = mergePlatformStyle(_this__u8e3s4, platformStyle);
    var tmp8_lineHeightStyle = lineHeightStyle == null ? _this__u8e3s4.e5m_1 : lineHeightStyle;
    var tmp9_lineBreak = !(lineBreak === Companion_getInstance_42().s5p_1) ? lineBreak : _this__u8e3s4.f5m_1;
    var tmp10_hyphens = !(hyphens === Companion_getInstance_26().v5p_1) ? hyphens : _this__u8e3s4.g5m_1;
    var tmp11_textMotion = textMotion == null ? _this__u8e3s4.h5m_1 : textMotion;
    return new ParagraphStyle_0(tmp5_textAlign, tmp6_textDirection, tmp3_lineHeight, tmp4_textIndent, tmp7_platformStyle, tmp8_lineHeightStyle, tmp9_lineBreak, tmp10_hyphens, tmp11_textMotion);
  }
  function mergePlatformStyle(_this__u8e3s4, other) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    if (_this__u8e3s4.d5m_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.d5m_1;
    return _this__u8e3s4.d5m_1.y5p(other);
  }
  function resolveParagraphStyleDefaults(style, direction) {
    _init_properties_ParagraphStyle_kt__lbx7er();
    var tmp = style.z5l_1 === Companion_getInstance_31().o5p_1 ? Companion_getInstance_31().m5p_1 : style.z5l_1;
    var tmp_0 = resolveTextDirection_0(direction, style.a5m_1);
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.b5m_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_1 = get_DefaultLineHeight();
    } else {
      tmp_1 = style.b5m_1;
    }
    var tmp_2 = tmp_1;
    var tmp0_elvis_lhs = style.c5m_1;
    var tmp_3 = tmp0_elvis_lhs == null ? Companion_getInstance_36().z5p_1 : tmp0_elvis_lhs;
    var tmp_4 = style.f5m_1 === Companion_getInstance_42().s5p_1 ? Companion_getInstance_42().p5p_1 : style.f5m_1;
    var tmp_5 = style.g5m_1 === Companion_getInstance_26().v5p_1 ? Companion_getInstance_26().t5p_1 : style.g5m_1;
    var tmp1_elvis_lhs = style.h5m_1;
    return new ParagraphStyle_0(tmp, tmp_0, tmp_2, tmp_3, style.d5m_1, style.e5m_1, tmp_4, tmp_5, tmp1_elvis_lhs == null ? Companion_getInstance_43().a5q_1 : tmp1_elvis_lhs);
  }
  var properties_initialized_ParagraphStyle_kt_y6w405;
  function _init_properties_ParagraphStyle_kt__lbx7er() {
    if (!properties_initialized_ParagraphStyle_kt_y6w405) {
      properties_initialized_ParagraphStyle_kt_y6w405 = true;
      DefaultLineHeight = Companion_getInstance_1().q48_1;
      androidx_compose_ui_text_ParagraphStyle$stable = 0;
    }
  }
  var androidx_compose_ui_text_Placeholder$stable;
  function Placeholder() {
  }
  protoOf(Placeholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Placeholder))
      return false;
    if (!equals(this.c5q_1, other.c5q_1))
      return false;
    if (!equals(this.d5q_1, other.d5q_1))
      return false;
    if (!(this.e5q_1 === other.e5q_1))
      return false;
    return true;
  };
  protoOf(Placeholder).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.c5q_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.d5q_1) | 0;
    result = imul(31, result) + PlaceholderVerticalAlign__hashCode_impl_1c0k16(this.e5q_1) | 0;
    return result;
  };
  protoOf(Placeholder).toString = function () {
    return 'Placeholder(' + ('width=' + TextUnit__toString_impl_51ghw0(this.c5q_1) + ', ') + ('height=' + TextUnit__toString_impl_51ghw0(this.d5q_1) + ', ') + ('placeholderVerticalAlign=' + PlaceholderVerticalAlign__toString_impl_kf5crp(this.e5q_1)) + ')';
  };
  function _PlaceholderVerticalAlign___init__impl__mll0or(value) {
    return value;
  }
  function PlaceholderVerticalAlign__toString_impl_kf5crp($this) {
    return $this === Companion_getInstance_14().f5q_1 ? 'AboveBaseline' : $this === Companion_getInstance_14().g5q_1 ? 'Top' : $this === Companion_getInstance_14().h5q_1 ? 'Bottom' : $this === Companion_getInstance_14().i5q_1 ? 'Center' : $this === Companion_getInstance_14().j5q_1 ? 'TextTop' : $this === Companion_getInstance_14().k5q_1 ? 'TextBottom' : $this === Companion_getInstance_14().l5q_1 ? 'TextCenter' : 'Invalid';
  }
  function Companion_0() {
    Companion_instance_1 = this;
    this.f5q_1 = _PlaceholderVerticalAlign___init__impl__mll0or(1);
    this.g5q_1 = _PlaceholderVerticalAlign___init__impl__mll0or(2);
    this.h5q_1 = _PlaceholderVerticalAlign___init__impl__mll0or(3);
    this.i5q_1 = _PlaceholderVerticalAlign___init__impl__mll0or(4);
    this.j5q_1 = _PlaceholderVerticalAlign___init__impl__mll0or(5);
    this.k5q_1 = _PlaceholderVerticalAlign___init__impl__mll0or(6);
    this.l5q_1 = _PlaceholderVerticalAlign___init__impl__mll0or(7);
  }
  var Companion_instance_1;
  function Companion_getInstance_14() {
    if (Companion_instance_1 == null)
      new Companion_0();
    return Companion_instance_1;
  }
  function PlaceholderVerticalAlign__hashCode_impl_1c0k16($this) {
    return $this;
  }
  function get_AnnotatedStringSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotatedStringSaver;
  }
  var AnnotatedStringSaver;
  function get_AnnotationRangeListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeListSaver;
  }
  var AnnotationRangeListSaver;
  function get_AnnotationRangeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return AnnotationRangeSaver;
  }
  var AnnotationRangeSaver;
  function get_VerbatimTtsAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return VerbatimTtsAnnotationSaver;
  }
  var VerbatimTtsAnnotationSaver;
  function get_UrlAnnotationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return UrlAnnotationSaver;
  }
  var UrlAnnotationSaver;
  function get_LinkSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LinkSaver;
  }
  var LinkSaver;
  function get_ClickableSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ClickableSaver;
  }
  var ClickableSaver;
  function get_ParagraphStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ParagraphStyleSaver;
  }
  var ParagraphStyleSaver;
  function get_SpanStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return SpanStyleSaver;
  }
  var SpanStyleSaver;
  function get_TextLinkStylesSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextLinkStylesSaver;
  }
  var TextLinkStylesSaver;
  function get_TextDecorationSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDecorationSaver;
  }
  var TextDecorationSaver;
  function get_TextGeometricTransformSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextGeometricTransformSaver;
  }
  var TextGeometricTransformSaver;
  function get_TextIndentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextIndentSaver;
  }
  var TextIndentSaver;
  function get_FontWeightSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontWeightSaver;
  }
  var FontWeightSaver;
  function get_BaselineShiftSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return BaselineShiftSaver;
  }
  var BaselineShiftSaver;
  var TextRangeSaver;
  function get_ShadowSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ShadowSaver;
  }
  var ShadowSaver;
  function get_ColorSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return ColorSaver;
  }
  var ColorSaver;
  function get_TextAlignSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextAlignSaver;
  }
  var TextAlignSaver;
  function get_TextDirectionSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextDirectionSaver;
  }
  var TextDirectionSaver;
  function get_HyphensSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return HyphensSaver;
  }
  var HyphensSaver;
  function get_FontStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontStyleSaver;
  }
  var FontStyleSaver;
  function get_FontSynthesisSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return FontSynthesisSaver;
  }
  var FontSynthesisSaver;
  function get_TextUnitSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitSaver;
  }
  var TextUnitSaver;
  function get_TextUnitTypeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return TextUnitTypeSaver;
  }
  var TextUnitTypeSaver;
  function get_OffsetSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return OffsetSaver;
  }
  var OffsetSaver;
  function get_LocaleListSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleListSaver;
  }
  var LocaleListSaver;
  function get_LocaleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LocaleSaver;
  }
  var LocaleSaver;
  function get_LineHeightStyleSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleSaver;
  }
  var LineHeightStyleSaver;
  function get_LineHeightStyleAlignmentSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleAlignmentSaver;
  }
  var LineHeightStyleAlignmentSaver;
  function get_LineHeightStyleTrimSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleTrimSaver;
  }
  var LineHeightStyleTrimSaver;
  function get_LineHeightStyleModeSaver() {
    _init_properties_Savers_kt__o6r3ry();
    return LineHeightStyleModeSaver;
  }
  var LineHeightStyleModeSaver;
  function save(value) {
    _init_properties_Savers_kt__o6r3ry();
    return value;
  }
  function save_0(value, saver, scope) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (value == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.with' call
      tmp = saver.y5k(scope, value);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  var AnnotationType_Paragraph_instance;
  var AnnotationType_Span_instance;
  var AnnotationType_VerbatimTts_instance;
  var AnnotationType_Url_instance;
  var AnnotationType_Link_instance;
  var AnnotationType_Clickable_instance;
  var AnnotationType_String_instance;
  var AnnotationType_entriesInitialized;
  function AnnotationType_initEntries() {
    if (AnnotationType_entriesInitialized)
      return Unit_instance;
    AnnotationType_entriesInitialized = true;
    AnnotationType_Paragraph_instance = new AnnotationType('Paragraph', 0);
    AnnotationType_Span_instance = new AnnotationType('Span', 1);
    AnnotationType_VerbatimTts_instance = new AnnotationType('VerbatimTts', 2);
    AnnotationType_Url_instance = new AnnotationType('Url', 3);
    AnnotationType_Link_instance = new AnnotationType('Link', 4);
    AnnotationType_Clickable_instance = new AnnotationType('Clickable', 5);
    AnnotationType_String_instance = new AnnotationType('String', 6);
  }
  function AnnotationType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function get_Saver(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextAlignSaver();
  }
  function get_Saver_0(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDirectionSaver();
  }
  function get_Saver_1(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitSaver();
  }
  function get_Saver_2(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextIndentSaver();
  }
  function get_Saver_3(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleSaver();
  }
  function get_Saver_4(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_HyphensSaver();
  }
  function get_Saver_5(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ColorSaver();
  }
  function get_Saver_6(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontWeightSaver();
  }
  function get_Saver_7(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontStyleSaver();
  }
  function get_Saver_8(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_FontSynthesisSaver();
  }
  function get_Saver_9(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_BaselineShiftSaver();
  }
  function get_Saver_10(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextGeometricTransformSaver();
  }
  function get_Saver_11(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleListSaver();
  }
  function get_Saver_12(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextDecorationSaver();
  }
  function get_Saver_13(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_ShadowSaver();
  }
  function get_Saver_14(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_OffsetSaver();
  }
  function NonNullValueClassSaver() {
  }
  function NonNullValueClassSaver_0(save, restore) {
    _init_properties_Savers_kt__o6r3ry();
    return new NonNullValueClassSaver$1(save, restore);
  }
  function get_Saver_15(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_TextUnitTypeSaver();
  }
  function get_Saver_16(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LocaleSaver();
  }
  function get_Saver_17(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleAlignmentSaver();
  }
  function get_Saver_18(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleTrimSaver();
  }
  function get_Saver_19(_this__u8e3s4) {
    _init_properties_Savers_kt__o6r3ry();
    return get_LineHeightStyleModeSaver();
  }
  function AnnotatedStringSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.u5l_1), save_0(it.t5l_1, get_AnnotationRangeListSaver(), $this$Saver)]);
  }
  function AnnotatedStringSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(1);
    var tmp2 = get_AnnotationRangeListSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.o5k(tmp0);
        tmp_0 = (tmp_1 == null ? true : isInterface(tmp_1, KtList)) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var annotationsOrNull = tmp$ret$0;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp_2;
    if (tmp0_safe_receiver == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$5 = tmp_2;
    var tmp0_text = ensureNotNull(tmp$ret$5);
    return new AnnotatedString(annotationsOrNull, tmp0_text);
  }
  function AnnotationRangeListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(it.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = it.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = it.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_AnnotationRangeSaver(), $this$Saver);
        target.g(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
        var tmp2 = get_AnnotationRangeSaver();
        var tmp$ret$4;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_1 = tmp2.o5k(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Range) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$4 = tmp_0;
        }
        var range = ensureNotNull(tmp$ret$4);
        // Inline function 'kotlin.collections.plusAssign' call
        target.g(range);
      }
       while (inductionVariable <= last);
    return target;
  }
  function AnnotationRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.l5l_1;
    var tmp;
    if (tmp0_subject instanceof ParagraphStyle_0) {
      tmp = AnnotationType_Paragraph_getInstance();
    } else {
      if (tmp0_subject instanceof SpanStyle) {
        tmp = AnnotationType_Span_getInstance();
      } else {
        if (tmp0_subject instanceof VerbatimTtsAnnotation) {
          tmp = AnnotationType_VerbatimTts_getInstance();
        } else {
          if (tmp0_subject instanceof UrlAnnotation) {
            tmp = AnnotationType_Url_getInstance();
          } else {
            if (tmp0_subject instanceof Url) {
              tmp = AnnotationType_Link_getInstance();
            } else {
              if (tmp0_subject instanceof Clickable) {
                tmp = AnnotationType_Clickable_getInstance();
              } else {
                if (tmp0_subject instanceof StringAnnotation) {
                  tmp = AnnotationType_String_getInstance();
                } else {
                  throw UnsupportedOperationException_init_$Create$();
                }
              }
            }
          }
        }
      }
    }
    var marker = tmp;
    var tmp_0;
    switch (marker.i2_1) {
      case 0:
        var tmp_1 = it.l5l_1;
        tmp_0 = save_0(tmp_1 instanceof ParagraphStyle_0 ? tmp_1 : THROW_CCE(), get_ParagraphStyleSaver(), $this$Saver);
        break;
      case 1:
        var tmp_2 = it.l5l_1;
        tmp_0 = save_0(tmp_2 instanceof SpanStyle ? tmp_2 : THROW_CCE(), get_SpanStyleSaver(), $this$Saver);
        break;
      case 2:
        var tmp_3 = it.l5l_1;
        tmp_0 = save_0(tmp_3 instanceof VerbatimTtsAnnotation ? tmp_3 : THROW_CCE(), get_VerbatimTtsAnnotationSaver(), $this$Saver);
        break;
      case 3:
        var tmp_4 = it.l5l_1;
        tmp_0 = save_0(tmp_4 instanceof UrlAnnotation ? tmp_4 : THROW_CCE(), get_UrlAnnotationSaver(), $this$Saver);
        break;
      case 4:
        var tmp_5 = it.l5l_1;
        tmp_0 = save_0(tmp_5 instanceof Url ? tmp_5 : THROW_CCE(), get_LinkSaver(), $this$Saver);
        break;
      case 5:
        var tmp_6 = it.l5l_1;
        tmp_0 = save_0(tmp_6 instanceof Clickable ? tmp_6 : THROW_CCE(), get_ClickableSaver(), $this$Saver);
        break;
      case 6:
        var tmp_7 = it.l5l_1;
        tmp_0 = save(_StringAnnotation___get_value__impl__v4s4ej(tmp_7 instanceof StringAnnotation ? tmp_7.m5q_1 : THROW_CCE()));
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    var item = tmp_0;
    return arrayListOf([save(marker), item, save(it.m5l_1), save(it.n5l_1), save(it.o5l_1)]);
  }
  function AnnotationRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = tmp0_safe_receiver instanceof AnnotationType ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var marker = ensureNotNull(tmp$ret$0);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(2);
    var tmp_0;
    if (tmp0_safe_receiver_0 == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$3 = tmp_0;
    var start = ensureNotNull(tmp$ret$3);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_1 = list.m(3);
    var tmp_1;
    if (tmp0_safe_receiver_1 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = typeof tmp0_safe_receiver_1 === 'number' ? tmp0_safe_receiver_1 : THROW_CCE();
    }
    var tmp$ret$6 = tmp_1;
    var end = ensureNotNull(tmp$ret$6);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_2 = list.m(4);
    var tmp_2;
    if (tmp0_safe_receiver_2 == null) {
      tmp_2 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_2 = typeof tmp0_safe_receiver_2 === 'string' ? tmp0_safe_receiver_2 : THROW_CCE();
    }
    var tmp$ret$9 = tmp_2;
    var tag = ensureNotNull(tmp$ret$9);
    var tmp_3;
    switch (marker.i2_1) {
      case 0:
        var tmp0 = list.m(1);
        var tmp2 = get_ParagraphStyleSaver();
        var tmp$ret$12;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_4;
          if (equals(tmp0, false)) {
            tmp_4 = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp_4 = false;
          }
          if (tmp_4) {
            tmp$ret$12 = null;
            break $l$block;
          }
          var tmp_5;
          if (tmp0 == null) {
            tmp_5 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_6 = tmp2.o5k(tmp0);
            tmp_5 = (tmp_6 == null ? true : tmp_6 instanceof ParagraphStyle_0) ? tmp_6 : THROW_CCE();
          }
          tmp$ret$12 = tmp_5;
        }

        var item = ensureNotNull(tmp$ret$12);
        tmp_3 = new Range(item, start, end, tag);
        break;
      case 1:
        var tmp0_0 = list.m(1);
        var tmp2_0 = get_SpanStyleSaver();
        var tmp$ret$17;
        $l$block_0: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_7;
          if (equals(tmp0_0, false)) {
            tmp_7 = !isInterface(tmp2_0, NonNullValueClassSaver);
          } else {
            tmp_7 = false;
          }
          if (tmp_7) {
            tmp$ret$17 = null;
            break $l$block_0;
          }
          var tmp_8;
          if (tmp0_0 == null) {
            tmp_8 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_9 = tmp2_0.o5k(tmp0_0);
            tmp_8 = (tmp_9 == null ? true : tmp_9 instanceof SpanStyle) ? tmp_9 : THROW_CCE();
          }
          tmp$ret$17 = tmp_8;
        }

        var item_0 = ensureNotNull(tmp$ret$17);
        tmp_3 = new Range(item_0, start, end, tag);
        break;
      case 2:
        var tmp0_1 = list.m(1);
        var tmp2_1 = get_VerbatimTtsAnnotationSaver();
        var tmp$ret$22;
        $l$block_1: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_10;
          if (equals(tmp0_1, false)) {
            tmp_10 = !isInterface(tmp2_1, NonNullValueClassSaver);
          } else {
            tmp_10 = false;
          }
          if (tmp_10) {
            tmp$ret$22 = null;
            break $l$block_1;
          }
          var tmp_11;
          if (tmp0_1 == null) {
            tmp_11 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_12 = tmp2_1.o5k(tmp0_1);
            tmp_11 = (tmp_12 == null ? true : tmp_12 instanceof VerbatimTtsAnnotation) ? tmp_12 : THROW_CCE();
          }
          tmp$ret$22 = tmp_11;
        }

        var item_1 = ensureNotNull(tmp$ret$22);
        tmp_3 = new Range(item_1, start, end, tag);
        break;
      case 3:
        var tmp0_2 = list.m(1);
        var tmp2_2 = get_UrlAnnotationSaver();
        var tmp$ret$27;
        $l$block_2: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_13;
          if (equals(tmp0_2, false)) {
            tmp_13 = !isInterface(tmp2_2, NonNullValueClassSaver);
          } else {
            tmp_13 = false;
          }
          if (tmp_13) {
            tmp$ret$27 = null;
            break $l$block_2;
          }
          var tmp_14;
          if (tmp0_2 == null) {
            tmp_14 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_15 = tmp2_2.o5k(tmp0_2);
            tmp_14 = (tmp_15 == null ? true : tmp_15 instanceof UrlAnnotation) ? tmp_15 : THROW_CCE();
          }
          tmp$ret$27 = tmp_14;
        }

        var item_2 = ensureNotNull(tmp$ret$27);
        tmp_3 = new Range(item_2, start, end, tag);
        break;
      case 4:
        var tmp0_3 = list.m(1);
        var tmp2_3 = get_LinkSaver();
        var tmp$ret$32;
        $l$block_3: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_16;
          if (equals(tmp0_3, false)) {
            tmp_16 = !isInterface(tmp2_3, NonNullValueClassSaver);
          } else {
            tmp_16 = false;
          }
          if (tmp_16) {
            tmp$ret$32 = null;
            break $l$block_3;
          }
          var tmp_17;
          if (tmp0_3 == null) {
            tmp_17 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_18 = tmp2_3.o5k(tmp0_3);
            tmp_17 = (tmp_18 == null ? true : tmp_18 instanceof Url) ? tmp_18 : THROW_CCE();
          }
          tmp$ret$32 = tmp_17;
        }

        var item_3 = ensureNotNull(tmp$ret$32);
        tmp_3 = new Range(item_3, start, end, tag);
        break;
      case 5:
        var tmp0_4 = list.m(1);
        var tmp2_4 = get_ClickableSaver();
        var tmp$ret$37;
        $l$block_4: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp_19;
          if (equals(tmp0_4, false)) {
            tmp_19 = !isInterface(tmp2_4, NonNullValueClassSaver);
          } else {
            tmp_19 = false;
          }
          if (tmp_19) {
            tmp$ret$37 = null;
            break $l$block_4;
          }
          var tmp_20;
          if (tmp0_4 == null) {
            tmp_20 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_21 = tmp2_4.o5k(tmp0_4);
            tmp_20 = (tmp_21 == null ? true : tmp_21 instanceof Clickable) ? tmp_21 : THROW_CCE();
          }
          tmp$ret$37 = tmp_20;
        }

        var item_4 = ensureNotNull(tmp$ret$37);
        tmp_3 = new Range(item_4, start, end, tag);
        break;
      case 6:
        // Inline function 'androidx.compose.ui.text.restore' call

        var tmp0_safe_receiver_3 = list.m(1);
        var tmp_22;
        if (tmp0_safe_receiver_3 == null) {
          tmp_22 = null;
        } else {
          // Inline function 'kotlin.let' call
          tmp_22 = typeof tmp0_safe_receiver_3 === 'string' ? tmp0_safe_receiver_3 : THROW_CCE();
        }

        var tmp$ret$42 = tmp_22;
        var item_5 = ensureNotNull(tmp$ret$42);
        tmp_3 = new Range(new StringAnnotation(_StringAnnotation___init__impl__o6a5i7(item_5)), start, end, tag);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp_3;
  }
  function VerbatimTtsAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.n5q_1);
  }
  function VerbatimTtsAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    return new VerbatimTtsAnnotation(ensureNotNull(tmp$ret$0));
  }
  function UrlAnnotationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(it.o5q_1);
  }
  function UrlAnnotationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp;
    if (it == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof it === 'string' ? it : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    return new UrlAnnotation(ensureNotNull(tmp$ret$0));
  }
  function LinkSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.k5m_1), save_0(it.l5m_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function LinkSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var url = ensureNotNull(tmp$ret$0);
    var tmp0 = list.m(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp0, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_2 = tmp2.o5k(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Url(url, stylesOrNull);
  }
  function ClickableSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(it.n5m_1), save_0(it.o5m_1, get_TextLinkStylesSaver(), $this$Saver)]);
  }
  function ClickableSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var tag = ensureNotNull(tmp$ret$0);
    var tmp0 = list.m(1);
    var tmp2 = get_TextLinkStylesSaver();
    var tmp$ret$3;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_0;
      if (equals(tmp0, false)) {
        tmp_0 = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp$ret$3 = null;
        break $l$block;
      }
      var tmp_1;
      if (tmp0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_2 = tmp2.o5k(tmp0);
        tmp_1 = (tmp_2 == null ? true : tmp_2 instanceof TextLinkStyles) ? tmp_2 : THROW_CCE();
      }
      tmp$ret$3 = tmp_1;
    }
    var stylesOrNull = tmp$ret$3;
    return new Clickable(tag, stylesOrNull, null);
  }
  function ParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextAlign(it.z5l_1), get_Saver(Companion_getInstance_31()), $this$Saver), save_0(new TextDirection(it.a5m_1), get_Saver_0(Companion_getInstance_33()), $this$Saver), save_0(new TextUnit(it.b5m_1), get_Saver_1(Companion_getInstance_1()), $this$Saver), save_0(it.c5m_1, get_Saver_2(Companion_getInstance_36()), $this$Saver), save_0(it.d5m_1, get_Saver_20(Companion_getInstance_41()), $this$Saver), save_0(it.e5m_1, get_Saver_3(Companion_getInstance_30()), $this$Saver), save_0(new LineBreak(it.f5m_1), get_Saver_21(Companion_getInstance_42()), $this$Saver), save_0(new Hyphens(it.g5m_1), get_Saver_4(Companion_getInstance_26()), $this$Saver), save_0(it.h5m_1, get_Saver_22(Companion_getInstance_43()), $this$Saver)]);
  }
  function ParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver(Companion_getInstance_31());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.o5k(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextAlign) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.p5q_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextAlign(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.p5q_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextAlign(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_0(Companion_getInstance_33());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.o5k(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextDirection) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.q5q_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextDirection(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.q5q_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextDirection(tmp_15));
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp0_1, false)) {
        tmp_17 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp0_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_19 = tmp2_1.o5k(tmp0_1);
        var tmp_20;
        if (tmp_19 == null ? true : tmp_19 instanceof TextUnit) {
          var tmp_21 = tmp_19;
          tmp_20 = tmp_21 == null ? null : tmp_21.s48_1;
        } else {
          tmp_20 = THROW_CCE();
        }
        var tmp_22 = tmp_20;
        var tmp_23 = tmp_22 == null ? null : new TextUnit(tmp_22);
        tmp_18 = tmp_23 == null ? null : tmp_23.s48_1;
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_24 = tmp$ret$10;
    var tmp_25 = ensureNotNull(tmp_24 == null ? null : new TextUnit(tmp_24));
    var tmp0_2 = list.m(3);
    var tmp2_2 = get_Saver_2(Companion_getInstance_36());
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_26;
      if (equals(tmp0_2, false)) {
        tmp_26 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_26 = false;
      }
      if (tmp_26) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_27;
      if (tmp0_2 == null) {
        tmp_27 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_28 = tmp2_2.o5k(tmp0_2);
        tmp_27 = (tmp_28 == null ? true : tmp_28 instanceof TextIndent_0) ? tmp_28 : THROW_CCE();
      }
      tmp$ret$15 = tmp_27;
    }
    var tmp_29 = tmp$ret$15;
    var tmp0_3 = list.m(4);
    var tmp2_3 = get_Saver_20(Companion_getInstance_41());
    var tmp$ret$20;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_30;
      if (equals(tmp0_3, false)) {
        tmp_30 = !isInterface(tmp2_3, NonNullValueClassSaver);
      } else {
        tmp_30 = false;
      }
      if (tmp_30) {
        tmp$ret$20 = null;
        break $l$block_3;
      }
      var tmp_31;
      if (tmp0_3 == null) {
        tmp_31 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_32 = tmp2_3.o5k(tmp0_3);
        tmp_31 = (tmp_32 == null ? true : tmp_32 instanceof PlatformParagraphStyle) ? tmp_32 : THROW_CCE();
      }
      tmp$ret$20 = tmp_31;
    }
    var tmp_33 = tmp$ret$20;
    var tmp0_4 = list.m(5);
    var tmp2_4 = get_Saver_3(Companion_getInstance_30());
    var tmp$ret$25;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_34;
      if (equals(tmp0_4, false)) {
        tmp_34 = !isInterface(tmp2_4, NonNullValueClassSaver);
      } else {
        tmp_34 = false;
      }
      if (tmp_34) {
        tmp$ret$25 = null;
        break $l$block_4;
      }
      var tmp_35;
      if (tmp0_4 == null) {
        tmp_35 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_36 = tmp2_4.o5k(tmp0_4);
        tmp_35 = (tmp_36 == null ? true : tmp_36 instanceof LineHeightStyle) ? tmp_36 : THROW_CCE();
      }
      tmp$ret$25 = tmp_35;
    }
    var tmp_37 = tmp$ret$25;
    var tmp0_5 = list.m(6);
    var tmp2_5 = get_Saver_21(Companion_getInstance_42());
    var tmp$ret$30;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_38;
      if (equals(tmp0_5, false)) {
        tmp_38 = !isInterface(tmp2_5, NonNullValueClassSaver);
      } else {
        tmp_38 = false;
      }
      if (tmp_38) {
        tmp$ret$30 = null;
        break $l$block_5;
      }
      var tmp_39;
      if (tmp0_5 == null) {
        tmp_39 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_40 = tmp2_5.o5k(tmp0_5);
        var tmp_41;
        if (tmp_40 == null ? true : tmp_40 instanceof LineBreak) {
          var tmp_42 = tmp_40;
          tmp_41 = tmp_42 == null ? null : tmp_42.r5q_1;
        } else {
          tmp_41 = THROW_CCE();
        }
        var tmp_43 = tmp_41;
        var tmp_44 = tmp_43 == null ? null : new LineBreak(tmp_43);
        tmp_39 = tmp_44 == null ? null : tmp_44.r5q_1;
      }
      tmp$ret$30 = tmp_39;
    }
    var tmp_45 = tmp$ret$30;
    var tmp_46 = ensureNotNull(tmp_45 == null ? null : new LineBreak(tmp_45));
    var tmp0_6 = list.m(7);
    var tmp2_6 = get_Saver_4(Companion_getInstance_26());
    var tmp$ret$35;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_47;
      if (equals(tmp0_6, false)) {
        tmp_47 = !isInterface(tmp2_6, NonNullValueClassSaver);
      } else {
        tmp_47 = false;
      }
      if (tmp_47) {
        tmp$ret$35 = null;
        break $l$block_6;
      }
      var tmp_48;
      if (tmp0_6 == null) {
        tmp_48 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_49 = tmp2_6.o5k(tmp0_6);
        var tmp_50;
        if (tmp_49 == null ? true : tmp_49 instanceof Hyphens) {
          var tmp_51 = tmp_49;
          tmp_50 = tmp_51 == null ? null : tmp_51.s5q_1;
        } else {
          tmp_50 = THROW_CCE();
        }
        var tmp_52 = tmp_50;
        var tmp_53 = tmp_52 == null ? null : new Hyphens(tmp_52);
        tmp_48 = tmp_53 == null ? null : tmp_53.s5q_1;
      }
      tmp$ret$35 = tmp_48;
    }
    var tmp_54 = tmp$ret$35;
    var tmp_55 = ensureNotNull(tmp_54 == null ? null : new Hyphens(tmp_54));
    var tmp0_7 = list.m(8);
    var tmp2_7 = get_Saver_22(Companion_getInstance_43());
    var tmp$ret$40;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_56;
      if (equals(tmp0_7, false)) {
        tmp_56 = !isInterface(tmp2_7, NonNullValueClassSaver);
      } else {
        tmp_56 = false;
      }
      if (tmp_56) {
        tmp$ret$40 = null;
        break $l$block_7;
      }
      var tmp_57;
      if (tmp0_7 == null) {
        tmp_57 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_58 = tmp2_7.o5k(tmp0_7);
        tmp_57 = (tmp_58 == null ? true : tmp_58 instanceof TextMotion) ? tmp_58 : THROW_CCE();
      }
      tmp$ret$40 = tmp_57;
    }
    return new ParagraphStyle_0(tmp_7.p5q_1, tmp_16.q5q_1, tmp_25.s48_1, tmp_29, tmp_33, tmp_37, tmp_46.r5q_1, tmp_55.s5q_1, tmp$ret$40);
  }
  function SpanStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = save_0(new Color(it.h4y()), get_Saver_5(Companion_getInstance()), $this$Saver);
    var tmp_0 = save_0(new TextUnit(it.u5q_1), get_Saver_1(Companion_getInstance_1()), $this$Saver);
    var tmp_1 = save_0(it.v5q_1, get_Saver_6(Companion_getInstance_23()), $this$Saver);
    var tmp_2 = it.w5q_1;
    var tmp_3 = save_0(tmp_2 == null ? null : new FontStyle(tmp_2), get_Saver_7(Companion_getInstance_21()), $this$Saver);
    var tmp_4 = it.x5q_1;
    var tmp_5 = save_0(tmp_4 == null ? null : new FontSynthesis(tmp_4), get_Saver_8(Companion_getInstance_22()), $this$Saver);
    var tmp_6 = save(-1);
    var tmp_7 = save(it.z5q_1);
    var tmp_8 = save_0(new TextUnit(it.a5r_1), get_Saver_1(Companion_getInstance_1()), $this$Saver);
    var tmp_9 = it.b5r_1;
    return arrayListOf([tmp, tmp_0, tmp_1, tmp_3, tmp_5, tmp_6, tmp_7, tmp_8, save_0(tmp_9 == null ? null : new BaselineShift(tmp_9), get_Saver_9(Companion_getInstance_25()), $this$Saver), save_0(it.c5r_1, get_Saver_10(Companion_getInstance_35()), $this$Saver), save_0(it.d5r_1, get_Saver_11(Companion_getInstance_24()), $this$Saver), save_0(new Color(it.e5r_1), get_Saver_5(Companion_getInstance()), $this$Saver), save_0(it.f5r_1, get_Saver_12(Companion_getInstance_32()), $this$Saver), save_0(it.g5r_1, get_Saver_13(Companion_getInstance_2()), $this$Saver)]);
  }
  function SpanStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_5(Companion_getInstance());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.o5k(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.v4y_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.v4y_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.o5k(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.s48_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.s48_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15));
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_Saver_6(Companion_getInstance_23());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp0_1, false)) {
        tmp_17 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp0_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_19 = tmp2_1.o5k(tmp0_1);
        tmp_18 = (tmp_19 == null ? true : tmp_19 instanceof FontWeight) ? tmp_19 : THROW_CCE();
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_20 = tmp$ret$10;
    var tmp0_2 = list.m(3);
    var tmp2_2 = get_Saver_7(Companion_getInstance_21());
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_21;
      if (equals(tmp0_2, false)) {
        tmp_21 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_21 = false;
      }
      if (tmp_21) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_22;
      if (tmp0_2 == null) {
        tmp_22 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_23 = tmp2_2.o5k(tmp0_2);
        var tmp_24;
        if (tmp_23 == null ? true : tmp_23 instanceof FontStyle) {
          var tmp_25 = tmp_23;
          tmp_24 = tmp_25 == null ? null : tmp_25.j5r_1;
        } else {
          tmp_24 = THROW_CCE();
        }
        var tmp_26 = tmp_24;
        var tmp_27 = tmp_26 == null ? null : new FontStyle(tmp_26);
        tmp_22 = tmp_27 == null ? null : tmp_27.j5r_1;
      }
      tmp$ret$15 = tmp_22;
    }
    var tmp_28 = tmp$ret$15;
    var tmp0_3 = list.m(4);
    var tmp2_3 = get_Saver_8(Companion_getInstance_22());
    var tmp$ret$20;
    $l$block_3: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_29;
      if (equals(tmp0_3, false)) {
        tmp_29 = !isInterface(tmp2_3, NonNullValueClassSaver);
      } else {
        tmp_29 = false;
      }
      if (tmp_29) {
        tmp$ret$20 = null;
        break $l$block_3;
      }
      var tmp_30;
      if (tmp0_3 == null) {
        tmp_30 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_31 = tmp2_3.o5k(tmp0_3);
        var tmp_32;
        if (tmp_31 == null ? true : tmp_31 instanceof FontSynthesis) {
          var tmp_33 = tmp_31;
          tmp_32 = tmp_33 == null ? null : tmp_33.k5r_1;
        } else {
          tmp_32 = THROW_CCE();
        }
        var tmp_34 = tmp_32;
        var tmp_35 = tmp_34 == null ? null : new FontSynthesis(tmp_34);
        tmp_30 = tmp_35 == null ? null : tmp_35.k5r_1;
      }
      tmp$ret$20 = tmp_30;
    }
    var tmp_36 = tmp$ret$20;
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(6);
    var tmp_37;
    if (tmp0_safe_receiver == null) {
      tmp_37 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_37 = typeof tmp0_safe_receiver === 'string' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp_38 = tmp_37;
    var tmp0_4 = list.m(7);
    var tmp2_4 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$28;
    $l$block_4: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_39;
      if (equals(tmp0_4, false)) {
        tmp_39 = !isInterface(tmp2_4, NonNullValueClassSaver);
      } else {
        tmp_39 = false;
      }
      if (tmp_39) {
        tmp$ret$28 = null;
        break $l$block_4;
      }
      var tmp_40;
      if (tmp0_4 == null) {
        tmp_40 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_41 = tmp2_4.o5k(tmp0_4);
        var tmp_42;
        if (tmp_41 == null ? true : tmp_41 instanceof TextUnit) {
          var tmp_43 = tmp_41;
          tmp_42 = tmp_43 == null ? null : tmp_43.s48_1;
        } else {
          tmp_42 = THROW_CCE();
        }
        var tmp_44 = tmp_42;
        var tmp_45 = tmp_44 == null ? null : new TextUnit(tmp_44);
        tmp_40 = tmp_45 == null ? null : tmp_45.s48_1;
      }
      tmp$ret$28 = tmp_40;
    }
    var tmp_46 = tmp$ret$28;
    var tmp_47 = ensureNotNull(tmp_46 == null ? null : new TextUnit(tmp_46));
    var tmp0_5 = list.m(8);
    var tmp2_5 = get_Saver_9(Companion_getInstance_25());
    var tmp$ret$33;
    $l$block_5: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_48;
      if (equals(tmp0_5, false)) {
        tmp_48 = !isInterface(tmp2_5, NonNullValueClassSaver);
      } else {
        tmp_48 = false;
      }
      if (tmp_48) {
        tmp$ret$33 = null;
        break $l$block_5;
      }
      var tmp_49;
      if (tmp0_5 == null) {
        tmp_49 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_50 = tmp2_5.o5k(tmp0_5);
        var tmp_51;
        if (tmp_50 == null ? true : tmp_50 instanceof BaselineShift) {
          var tmp_52 = tmp_50;
          tmp_51 = tmp_52 == null ? null : tmp_52.l5r_1;
        } else {
          tmp_51 = THROW_CCE();
        }
        var tmp_53 = tmp_51;
        var tmp_54 = tmp_53 == null ? null : new BaselineShift(tmp_53);
        tmp_49 = tmp_54 == null ? null : tmp_54.l5r_1;
      }
      tmp$ret$33 = tmp_49;
    }
    var tmp_55 = tmp$ret$33;
    var tmp0_6 = list.m(9);
    var tmp2_6 = get_Saver_10(Companion_getInstance_35());
    var tmp$ret$38;
    $l$block_6: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_56;
      if (equals(tmp0_6, false)) {
        tmp_56 = !isInterface(tmp2_6, NonNullValueClassSaver);
      } else {
        tmp_56 = false;
      }
      if (tmp_56) {
        tmp$ret$38 = null;
        break $l$block_6;
      }
      var tmp_57;
      if (tmp0_6 == null) {
        tmp_57 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_58 = tmp2_6.o5k(tmp0_6);
        tmp_57 = (tmp_58 == null ? true : tmp_58 instanceof TextGeometricTransform) ? tmp_58 : THROW_CCE();
      }
      tmp$ret$38 = tmp_57;
    }
    var tmp_59 = tmp$ret$38;
    var tmp0_7 = list.m(10);
    var tmp2_7 = get_Saver_11(Companion_getInstance_24());
    var tmp$ret$43;
    $l$block_7: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_60;
      if (equals(tmp0_7, false)) {
        tmp_60 = !isInterface(tmp2_7, NonNullValueClassSaver);
      } else {
        tmp_60 = false;
      }
      if (tmp_60) {
        tmp$ret$43 = null;
        break $l$block_7;
      }
      var tmp_61;
      if (tmp0_7 == null) {
        tmp_61 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_62 = tmp2_7.o5k(tmp0_7);
        tmp_61 = (tmp_62 == null ? true : tmp_62 instanceof LocaleList) ? tmp_62 : THROW_CCE();
      }
      tmp$ret$43 = tmp_61;
    }
    var tmp_63 = tmp$ret$43;
    var tmp0_8 = list.m(11);
    var tmp2_8 = get_Saver_5(Companion_getInstance());
    var tmp$ret$48;
    $l$block_8: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_64;
      if (equals(tmp0_8, false)) {
        tmp_64 = !isInterface(tmp2_8, NonNullValueClassSaver);
      } else {
        tmp_64 = false;
      }
      if (tmp_64) {
        tmp$ret$48 = null;
        break $l$block_8;
      }
      var tmp_65;
      if (tmp0_8 == null) {
        tmp_65 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_66 = tmp2_8.o5k(tmp0_8);
        var tmp_67;
        if (tmp_66 == null ? true : tmp_66 instanceof Color) {
          var tmp_68 = tmp_66;
          tmp_67 = tmp_68 == null ? null : tmp_68.v4y_1;
        } else {
          tmp_67 = THROW_CCE();
        }
        var tmp_69 = tmp_67;
        var tmp_70 = tmp_69 == null ? null : new Color(tmp_69);
        tmp_65 = tmp_70 == null ? null : tmp_70.v4y_1;
      }
      tmp$ret$48 = tmp_65;
    }
    var tmp_71 = tmp$ret$48;
    var tmp_72 = ensureNotNull(tmp_71 == null ? null : new Color(tmp_71));
    var tmp0_9 = list.m(12);
    var tmp2_9 = get_Saver_12(Companion_getInstance_32());
    var tmp$ret$53;
    $l$block_9: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_73;
      if (equals(tmp0_9, false)) {
        tmp_73 = !isInterface(tmp2_9, NonNullValueClassSaver);
      } else {
        tmp_73 = false;
      }
      if (tmp_73) {
        tmp$ret$53 = null;
        break $l$block_9;
      }
      var tmp_74;
      if (tmp0_9 == null) {
        tmp_74 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_75 = tmp2_9.o5k(tmp0_9);
        tmp_74 = (tmp_75 == null ? true : tmp_75 instanceof TextDecoration) ? tmp_75 : THROW_CCE();
      }
      tmp$ret$53 = tmp_74;
    }
    var tmp_76 = tmp$ret$53;
    var tmp0_10 = list.m(13);
    var tmp2_10 = get_Saver_13(Companion_getInstance_2());
    var tmp$ret$58;
    $l$block_10: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_77;
      if (equals(tmp0_10, false)) {
        tmp_77 = !isInterface(tmp2_10, NonNullValueClassSaver);
      } else {
        tmp_77 = false;
      }
      if (tmp_77) {
        tmp$ret$58 = null;
        break $l$block_10;
      }
      var tmp_78;
      if (tmp0_10 == null) {
        tmp_78 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_79 = tmp2_10.o5k(tmp0_10);
        tmp_78 = (tmp_79 == null ? true : tmp_79 instanceof Shadow) ? tmp_79 : THROW_CCE();
      }
      tmp$ret$58 = tmp_78;
    }
    return SpanStyle_init_$Create$(tmp_7.v4y_1, tmp_16.s48_1, tmp_20, tmp_28, tmp_36, VOID, tmp_38, tmp_47.s48_1, tmp_55, tmp_59, tmp_63, tmp_72.v4y_1, tmp_76, tmp$ret$58);
  }
  function TextLinkStylesSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(it.m5r_1, get_SpanStyleSaver(), $this$Saver), save_0(it.n5r_1, get_SpanStyleSaver(), $this$Saver), save_0(it.o5r_1, get_SpanStyleSaver(), $this$Saver), save_0(it.p5r_1, get_SpanStyleSaver(), $this$Saver)]);
  }
  function TextLinkStylesSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_SpanStyleSaver();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.o5k(tmp0);
        tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof SpanStyle) ? tmp_1 : THROW_CCE();
      }
      tmp$ret$0 = tmp_0;
    }
    var styleOrNull = tmp$ret$0;
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_SpanStyleSaver();
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_2;
      if (equals(tmp0_0, false)) {
        tmp_2 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_3;
      if (tmp0_0 == null) {
        tmp_3 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_4 = tmp2_0.o5k(tmp0_0);
        tmp_3 = (tmp_4 == null ? true : tmp_4 instanceof SpanStyle) ? tmp_4 : THROW_CCE();
      }
      tmp$ret$5 = tmp_3;
    }
    var focusedStyleOrNull = tmp$ret$5;
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_SpanStyleSaver();
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_5;
      if (equals(tmp0_1, false)) {
        tmp_5 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_5 = false;
      }
      if (tmp_5) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_6;
      if (tmp0_1 == null) {
        tmp_6 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_7 = tmp2_1.o5k(tmp0_1);
        tmp_6 = (tmp_7 == null ? true : tmp_7 instanceof SpanStyle) ? tmp_7 : THROW_CCE();
      }
      tmp$ret$10 = tmp_6;
    }
    var hoveredStyleOrNull = tmp$ret$10;
    var tmp0_2 = list.m(3);
    var tmp2_2 = get_SpanStyleSaver();
    var tmp$ret$15;
    $l$block_2: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_2, false)) {
        tmp_8 = !isInterface(tmp2_2, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$15 = null;
        break $l$block_2;
      }
      var tmp_9;
      if (tmp0_2 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_2.o5k(tmp0_2);
        tmp_9 = (tmp_10 == null ? true : tmp_10 instanceof SpanStyle) ? tmp_10 : THROW_CCE();
      }
      tmp$ret$15 = tmp_9;
    }
    var pressedStyleOrNull = tmp$ret$15;
    return new TextLinkStyles(styleOrNull, focusedStyleOrNull, hoveredStyleOrNull, pressedStyleOrNull);
  }
  function TextDecorationSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.q5r_1;
  }
  function TextDecorationSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDecoration(typeof it === 'number' ? it : THROW_CCE());
  }
  function TextGeometricTransformSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([it.r5r_1, it.s5r_1]);
  }
  function TextGeometricTransformSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    return new TextGeometricTransform(list.m(0), list.m(1));
  }
  function TextIndentSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new TextUnit(it.t5r_1), get_Saver_1(Companion_getInstance_1()), $this$Saver), save_0(new TextUnit(it.u5r_1), get_Saver_1(Companion_getInstance_1()), $this$Saver)]);
  }
  function TextIndentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.o5k(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof TextUnit) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.s48_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new TextUnit(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.s48_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new TextUnit(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_1(Companion_getInstance_1());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.o5k(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof TextUnit) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.s48_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new TextUnit(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.s48_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    return new TextIndent_0(tmp_7.s48_1, ensureNotNull(tmp_15 == null ? null : new TextUnit(tmp_15)).s48_1);
  }
  function FontWeightSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.v5r_1;
  }
  function FontWeightSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontWeight(typeof it === 'number' ? it : THROW_CCE());
  }
  function BaselineShiftSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _BaselineShift___get_multiplier__impl__qhmjek(it.l5r_1);
  }
  function BaselineShiftSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new BaselineShift(_BaselineShift___init__impl__scj05g(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextRangeSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save(_TextRange___get_start__impl__ww4t90(it.n5o_1)), save(_TextRange___get_end__impl__gcdxpp(it.n5o_1))]);
  }
  function TextRangeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(0);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$0 = tmp;
    var tmp_0 = ensureNotNull(tmp$ret$0);
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver_0 = list.m(1);
    var tmp_1;
    if (tmp0_safe_receiver_0 == null) {
      tmp_1 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
    }
    var tmp$ret$3 = tmp_1;
    return new TextRange(TextRange_1(tmp_0, ensureNotNull(tmp$ret$3)));
  }
  function ShadowSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Color(it.v54_1), get_Saver_5(Companion_getInstance()), $this$Saver), save_0(new Offset(it.w54_1), get_Saver_14(Companion_getInstance_3()), $this$Saver), save(it.x54_1)]);
  }
  function ShadowSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_5(Companion_getInstance());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.o5k(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Color) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.v4y_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Color(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.v4y_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Color(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_14(Companion_getInstance_3());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.o5k(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Offset) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.h46_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Offset(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.h46_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Offset(tmp_15));
    // Inline function 'androidx.compose.ui.text.restore' call
    var tmp0_safe_receiver = list.m(2);
    var tmp_17;
    if (tmp0_safe_receiver == null) {
      tmp_17 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_17 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
    }
    var tmp$ret$10 = tmp_17;
    return new Shadow(tmp_7.v4y_1, tmp_16.h46_1, ensureNotNull(tmp$ret$10));
  }
  function ColorSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isUnspecified' call
    var this_0 = it.v4y_1;
    if (equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = false;
    } else {
      tmp = toArgb(it.v4y_1);
    }
    return tmp;
  }
  function ColorSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance().t4x_1;
    } else {
      tmp = Color_0(typeof it === 'number' ? it : THROW_CCE());
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new Color(tmp_0);
  }
  function TextAlignSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _TextAlign___get_value__impl__lst7m3(it.p5q_1);
  }
  function TextAlignSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextAlign(_TextAlign___init__impl__99wz4v(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextDirectionSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _TextDirection___get_value__impl__ka7r45(it.q5q_1);
  }
  function TextDirectionSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new TextDirection(_TextDirection___init__impl__lh8lzt(typeof it === 'number' ? it : THROW_CCE()));
  }
  function HyphensSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Hyphens___get_value__impl__5itus4(it.s5q_1);
  }
  function HyphensSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Hyphens(_Hyphens___init__impl__m2cvg8(typeof it === 'number' ? it : THROW_CCE()));
  }
  function FontStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return save(_FontStyle___get_value__impl__gx8aaz(it.j5r_1));
  }
  function FontStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontStyle(_FontStyle___init__impl__jcnduf(typeof it === 'number' ? it : THROW_CCE()));
  }
  function FontSynthesisSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _FontSynthesis___get_value__impl__xrueqg(it.k5r_1);
  }
  function FontSynthesisSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new FontSynthesis(_FontSynthesis___init__impl__n397bg(typeof it === 'number' ? it : THROW_CCE()));
  }
  function TextUnitSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new TextUnit(Companion_getInstance_1().q48_1))) {
      tmp = false;
    } else {
      tmp = arrayListOf([save(_TextUnit___get_value__impl__hpbx0k(it.s48_1)), save_0(new TextUnitType(_TextUnit___get_type__impl__uc2olt(it.s48_1)), get_Saver_15(Companion_getInstance_4()), $this$NonNullValueClassSaver)]);
    }
    return tmp;
  }
  function TextUnitSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_1().q48_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.m(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$0 = tmp_0;
      var tmp_1 = ensureNotNull(tmp$ret$0);
      var tmp0 = list.m(1);
      var tmp2 = get_Saver_15(Companion_getInstance_4());
      var tmp$ret$3;
      $l$block: {
        // Inline function 'androidx.compose.ui.text.restore' call
        var tmp_2;
        if (equals(tmp0, false)) {
          tmp_2 = !isInterface(tmp2, NonNullValueClassSaver);
        } else {
          tmp_2 = false;
        }
        if (tmp_2) {
          tmp$ret$3 = null;
          break $l$block;
        }
        var tmp_3;
        if (tmp0 == null) {
          tmp_3 = null;
        } else {
          // Inline function 'kotlin.let' call
          // Inline function 'kotlin.with' call
          var tmp_4 = tmp2.o5k(tmp0);
          var tmp_5;
          if (tmp_4 == null ? true : tmp_4 instanceof TextUnitType) {
            var tmp_6 = tmp_4;
            tmp_5 = tmp_6 == null ? null : tmp_6.r48_1;
          } else {
            tmp_5 = THROW_CCE();
          }
          var tmp_7 = tmp_5;
          var tmp_8 = tmp_7 == null ? null : new TextUnitType(tmp_7);
          tmp_3 = tmp_8 == null ? null : tmp_8.r48_1;
        }
        tmp$ret$3 = tmp_3;
      }
      var tmp_9 = tmp$ret$3;
      tmp = TextUnit_0(tmp_1, ensureNotNull(tmp_9 == null ? null : new TextUnitType(tmp_9)).r48_1);
    }
    var tmp_10 = tmp;
    return tmp_10 == null ? null : new TextUnit(tmp_10);
  }
  function TextUnitTypeSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp0_subject = it.r48_1;
    return equals(tmp0_subject, Companion_getInstance_4().s47_1) ? 0 : equals(tmp0_subject, Companion_getInstance_4().r47_1) ? 1 : false;
  }
  function TextUnitTypeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp = equals(it, 0) ? Companion_getInstance_4().s47_1 : equals(it, 1) ? Companion_getInstance_4().r47_1 : Companion_getInstance_4().q47_1;
    return tmp == null ? null : new TextUnitType(tmp);
  }
  function OffsetSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, new Offset(Companion_getInstance_3().g46_1))) {
      tmp = false;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Offset.x' call
      var this_0 = it.h46_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp$ret$0 = floatFromBits(bits);
      var tmp_0 = save(tmp$ret$0);
      // Inline function 'androidx.compose.ui.geometry.Offset.y' call
      var this_1 = it.h46_1;
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      var tmp$ret$4 = floatFromBits(bits_0);
      tmp = arrayListOf([tmp_0, save(tmp$ret$4)]);
    }
    return tmp;
  }
  function OffsetSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var tmp;
    if (equals(it, false)) {
      tmp = Companion_getInstance_3().g46_1;
    } else {
      var list = isInterface(it, KtList) ? it : THROW_CCE();
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver = list.m(0);
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_0 = typeof tmp0_safe_receiver === 'number' ? tmp0_safe_receiver : THROW_CCE();
      }
      var tmp$ret$0 = tmp_0;
      var tmp0 = ensureNotNull(tmp$ret$0);
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp0_safe_receiver_0 = list.m(1);
      var tmp_1;
      if (tmp0_safe_receiver_0 == null) {
        tmp_1 = null;
      } else {
        // Inline function 'kotlin.let' call
        tmp_1 = typeof tmp0_safe_receiver_0 === 'number' ? tmp0_safe_receiver_0 : THROW_CCE();
      }
      var tmp$ret$3 = tmp_1;
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = ensureNotNull(tmp$ret$3);
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp = _Offset___init__impl__c168vi(tmp$ret$7);
    }
    var tmp_2 = tmp;
    return tmp_2 == null ? null : new Offset(tmp_2);
  }
  function LocaleListSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = it.w5r_1;
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = save_0(item, get_Saver_16(Companion_instance_31), $this$Saver);
        target.g(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function LocaleListSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var target = ArrayList_init_$Create$_0(list.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = list.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = list.m(index);
        var tmp2 = get_Saver_16(Companion_instance_31);
        var tmp$ret$4;
        $l$block: {
          // Inline function 'androidx.compose.ui.text.restore' call
          var tmp;
          if (equals(item, false)) {
            tmp = !isInterface(tmp2, NonNullValueClassSaver);
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$4 = null;
            break $l$block;
          }
          var tmp_0;
          if (item == null) {
            tmp_0 = null;
          } else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.with' call
            var tmp_1 = tmp2.o5k(item);
            tmp_0 = (tmp_1 == null ? true : tmp_1 instanceof Locale) ? tmp_1 : THROW_CCE();
          }
          tmp$ret$4 = tmp_0;
        }
        // Inline function 'kotlin.collections.plusAssign' call
        var element = ensureNotNull(tmp$ret$4);
        target.g(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  }
  function LocaleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return it.a5s();
  }
  function LocaleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return Locale_init_$Create$(typeof it === 'string' ? it : THROW_CCE());
  }
  function LineHeightStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return arrayListOf([save_0(new Alignment(it.b5s_1), get_Saver_17(Companion_getInstance_28()), $this$Saver), save_0(new Trim(it.c5s_1), get_Saver_18(Companion_getInstance_27()), $this$Saver), save_0(new Mode(it.d5s_1), get_Saver_19(Companion_getInstance_29()), $this$Saver)]);
  }
  function LineHeightStyleSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    var list = isInterface(it, KtList) ? it : THROW_CCE();
    var tmp0 = list.m(0);
    var tmp2 = get_Saver_17(Companion_getInstance_28());
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp;
      if (equals(tmp0, false)) {
        tmp = !isInterface(tmp2, NonNullValueClassSaver);
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp_0;
      if (tmp0 == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_1 = tmp2.o5k(tmp0);
        var tmp_2;
        if (tmp_1 == null ? true : tmp_1 instanceof Alignment) {
          var tmp_3 = tmp_1;
          tmp_2 = tmp_3 == null ? null : tmp_3.e5s_1;
        } else {
          tmp_2 = THROW_CCE();
        }
        var tmp_4 = tmp_2;
        var tmp_5 = tmp_4 == null ? null : new Alignment(tmp_4);
        tmp_0 = tmp_5 == null ? null : tmp_5.e5s_1;
      }
      tmp$ret$0 = tmp_0;
    }
    var tmp_6 = tmp$ret$0;
    var tmp_7 = ensureNotNull(tmp_6 == null ? null : new Alignment(tmp_6));
    var tmp0_0 = list.m(1);
    var tmp2_0 = get_Saver_18(Companion_getInstance_27());
    var tmp$ret$5;
    $l$block_0: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_8;
      if (equals(tmp0_0, false)) {
        tmp_8 = !isInterface(tmp2_0, NonNullValueClassSaver);
      } else {
        tmp_8 = false;
      }
      if (tmp_8) {
        tmp$ret$5 = null;
        break $l$block_0;
      }
      var tmp_9;
      if (tmp0_0 == null) {
        tmp_9 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_10 = tmp2_0.o5k(tmp0_0);
        var tmp_11;
        if (tmp_10 == null ? true : tmp_10 instanceof Trim) {
          var tmp_12 = tmp_10;
          tmp_11 = tmp_12 == null ? null : tmp_12.f5s_1;
        } else {
          tmp_11 = THROW_CCE();
        }
        var tmp_13 = tmp_11;
        var tmp_14 = tmp_13 == null ? null : new Trim(tmp_13);
        tmp_9 = tmp_14 == null ? null : tmp_14.f5s_1;
      }
      tmp$ret$5 = tmp_9;
    }
    var tmp_15 = tmp$ret$5;
    var tmp_16 = ensureNotNull(tmp_15 == null ? null : new Trim(tmp_15));
    var tmp0_1 = list.m(2);
    var tmp2_1 = get_Saver_19(Companion_getInstance_29());
    var tmp$ret$10;
    $l$block_1: {
      // Inline function 'androidx.compose.ui.text.restore' call
      var tmp_17;
      if (equals(tmp0_1, false)) {
        tmp_17 = !isInterface(tmp2_1, NonNullValueClassSaver);
      } else {
        tmp_17 = false;
      }
      if (tmp_17) {
        tmp$ret$10 = null;
        break $l$block_1;
      }
      var tmp_18;
      if (tmp0_1 == null) {
        tmp_18 = null;
      } else {
        // Inline function 'kotlin.let' call
        // Inline function 'kotlin.with' call
        var tmp_19 = tmp2_1.o5k(tmp0_1);
        var tmp_20;
        if (tmp_19 == null ? true : tmp_19 instanceof Mode) {
          var tmp_21 = tmp_19;
          tmp_20 = tmp_21 == null ? null : tmp_21.g5s_1;
        } else {
          tmp_20 = THROW_CCE();
        }
        var tmp_22 = tmp_20;
        var tmp_23 = tmp_22 == null ? null : new Mode(tmp_22);
        tmp_18 = tmp_23 == null ? null : tmp_23.g5s_1;
      }
      tmp$ret$10 = tmp_18;
    }
    var tmp_24 = tmp$ret$10;
    return new LineHeightStyle(tmp_7.e5s_1, tmp_16.f5s_1, ensureNotNull(tmp_24 == null ? null : new Mode(tmp_24)).g5s_1);
  }
  function LineHeightStyleAlignmentSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Alignment___get_topRatio__impl__gg7tir(it.e5s_1);
  }
  function LineHeightStyleAlignmentSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Alignment(_Alignment___init__impl__it107q(typeof it === 'number' ? it : THROW_CCE()));
  }
  function LineHeightStyleTrimSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Trim___get_value__impl__o5eglp(it.f5s_1);
  }
  function LineHeightStyleTrimSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Trim(_Trim___init__impl__tcc1lr(typeof it === 'number' ? it : THROW_CCE()));
  }
  function LineHeightStyleModeSaver$lambda($this$NonNullValueClassSaver, it) {
    _init_properties_Savers_kt__o6r3ry();
    return _Mode___get_value__impl__uitpda(it.g5s_1);
  }
  function LineHeightStyleModeSaver$lambda_0(it) {
    _init_properties_Savers_kt__o6r3ry();
    return new Mode(_Mode___init__impl__3rgsrm(typeof it === 'number' ? it : THROW_CCE()));
  }
  function NonNullValueClassSaver$1($save, $restore) {
    this.h5s_1 = $save;
    this.i5s_1 = $restore;
  }
  protoOf(NonNullValueClassSaver$1).y5k = function (_this__u8e3s4, value) {
    return this.h5s_1(_this__u8e3s4, value);
  };
  protoOf(NonNullValueClassSaver$1).o5k = function (value) {
    return this.i5s_1(value);
  };
  function AnnotationType_Paragraph_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Paragraph_instance;
  }
  function AnnotationType_Span_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Span_instance;
  }
  function AnnotationType_VerbatimTts_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_VerbatimTts_instance;
  }
  function AnnotationType_Url_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Url_instance;
  }
  function AnnotationType_Link_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Link_instance;
  }
  function AnnotationType_Clickable_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_Clickable_instance;
  }
  function AnnotationType_String_getInstance() {
    AnnotationType_initEntries();
    return AnnotationType_String_instance;
  }
  var properties_initialized_Savers_kt_vjp8zk;
  function _init_properties_Savers_kt__o6r3ry() {
    if (!properties_initialized_Savers_kt_vjp8zk) {
      properties_initialized_Savers_kt_vjp8zk = true;
      var tmp = AnnotatedStringSaver$lambda;
      AnnotatedStringSaver = Saver_0(tmp, AnnotatedStringSaver$lambda_0);
      var tmp_0 = AnnotationRangeListSaver$lambda;
      AnnotationRangeListSaver = Saver_0(tmp_0, AnnotationRangeListSaver$lambda_0);
      var tmp_1 = AnnotationRangeSaver$lambda;
      AnnotationRangeSaver = Saver_0(tmp_1, AnnotationRangeSaver$lambda_0);
      var tmp_2 = VerbatimTtsAnnotationSaver$lambda;
      VerbatimTtsAnnotationSaver = Saver_0(tmp_2, VerbatimTtsAnnotationSaver$lambda_0);
      var tmp_3 = UrlAnnotationSaver$lambda;
      UrlAnnotationSaver = Saver_0(tmp_3, UrlAnnotationSaver$lambda_0);
      var tmp_4 = LinkSaver$lambda;
      LinkSaver = Saver_0(tmp_4, LinkSaver$lambda_0);
      var tmp_5 = ClickableSaver$lambda;
      ClickableSaver = Saver_0(tmp_5, ClickableSaver$lambda_0);
      var tmp_6 = ParagraphStyleSaver$lambda;
      ParagraphStyleSaver = Saver_0(tmp_6, ParagraphStyleSaver$lambda_0);
      var tmp_7 = SpanStyleSaver$lambda;
      SpanStyleSaver = Saver_0(tmp_7, SpanStyleSaver$lambda_0);
      var tmp_8 = TextLinkStylesSaver$lambda;
      TextLinkStylesSaver = Saver_0(tmp_8, TextLinkStylesSaver$lambda_0);
      var tmp_9 = TextDecorationSaver$lambda;
      TextDecorationSaver = Saver_0(tmp_9, TextDecorationSaver$lambda_0);
      var tmp_10 = TextGeometricTransformSaver$lambda;
      TextGeometricTransformSaver = Saver_0(tmp_10, TextGeometricTransformSaver$lambda_0);
      var tmp_11 = TextIndentSaver$lambda;
      TextIndentSaver = Saver_0(tmp_11, TextIndentSaver$lambda_0);
      var tmp_12 = FontWeightSaver$lambda;
      FontWeightSaver = Saver_0(tmp_12, FontWeightSaver$lambda_0);
      var tmp_13 = BaselineShiftSaver$lambda;
      BaselineShiftSaver = Saver_0(tmp_13, BaselineShiftSaver$lambda_0);
      var tmp_14 = TextRangeSaver$lambda;
      TextRangeSaver = Saver_0(tmp_14, TextRangeSaver$lambda_0);
      var tmp_15 = ShadowSaver$lambda;
      ShadowSaver = Saver_0(tmp_15, ShadowSaver$lambda_0);
      var tmp_16 = ColorSaver$lambda;
      ColorSaver = NonNullValueClassSaver_0(tmp_16, ColorSaver$lambda_0);
      var tmp_17 = TextAlignSaver$lambda;
      TextAlignSaver = NonNullValueClassSaver_0(tmp_17, TextAlignSaver$lambda_0);
      var tmp_18 = TextDirectionSaver$lambda;
      TextDirectionSaver = NonNullValueClassSaver_0(tmp_18, TextDirectionSaver$lambda_0);
      var tmp_19 = HyphensSaver$lambda;
      HyphensSaver = NonNullValueClassSaver_0(tmp_19, HyphensSaver$lambda_0);
      var tmp_20 = FontStyleSaver$lambda;
      FontStyleSaver = Saver_0(tmp_20, FontStyleSaver$lambda_0);
      var tmp_21 = FontSynthesisSaver$lambda;
      FontSynthesisSaver = Saver_0(tmp_21, FontSynthesisSaver$lambda_0);
      var tmp_22 = TextUnitSaver$lambda;
      TextUnitSaver = NonNullValueClassSaver_0(tmp_22, TextUnitSaver$lambda_0);
      var tmp_23 = TextUnitTypeSaver$lambda;
      TextUnitTypeSaver = NonNullValueClassSaver_0(tmp_23, TextUnitTypeSaver$lambda_0);
      var tmp_24 = OffsetSaver$lambda;
      OffsetSaver = NonNullValueClassSaver_0(tmp_24, OffsetSaver$lambda_0);
      var tmp_25 = LocaleListSaver$lambda;
      LocaleListSaver = Saver_0(tmp_25, LocaleListSaver$lambda_0);
      var tmp_26 = LocaleSaver$lambda;
      LocaleSaver = Saver_0(tmp_26, LocaleSaver$lambda_0);
      var tmp_27 = LineHeightStyleSaver$lambda;
      LineHeightStyleSaver = Saver_0(tmp_27, LineHeightStyleSaver$lambda_0);
      var tmp_28 = LineHeightStyleAlignmentSaver$lambda;
      LineHeightStyleAlignmentSaver = NonNullValueClassSaver_0(tmp_28, LineHeightStyleAlignmentSaver$lambda_0);
      var tmp_29 = LineHeightStyleTrimSaver$lambda;
      LineHeightStyleTrimSaver = NonNullValueClassSaver_0(tmp_29, LineHeightStyleTrimSaver$lambda_0);
      var tmp_30 = LineHeightStyleModeSaver$lambda;
      LineHeightStyleModeSaver = NonNullValueClassSaver_0(tmp_30, LineHeightStyleModeSaver$lambda_0);
    }
  }
  function get_DefaultFontSize() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultFontSize;
  }
  var DefaultFontSize;
  function get_DefaultLetterSpacing() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultLetterSpacing;
  }
  var DefaultLetterSpacing;
  function get_DefaultBackgroundColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultBackgroundColor;
  }
  var DefaultBackgroundColor;
  function get_DefaultColor() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColor;
  }
  var DefaultColor;
  function get_DefaultColorForegroundStyle() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return DefaultColorForegroundStyle;
  }
  var DefaultColorForegroundStyle;
  var androidx_compose_ui_text_SpanStyle$stable;
  function SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    color = color === VOID ? Companion_getInstance().t4x_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q48_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q48_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().t4x_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_21.j5s(color), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $this) {
    alpha = alpha === VOID ? NaN : alpha;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q48_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q48_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().t4x_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    SpanStyle.call($this, Companion_instance_21.k5s(brush, alpha), fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    return $this;
  }
  function SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    return SpanStyle_init_$Init$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, objectCreate(protoOf(SpanStyle)));
  }
  function SpanStyle(textForegroundStyle, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    fontSize = fontSize === VOID ? Companion_getInstance_1().q48_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q48_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().t4x_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    this.t5q_1 = textForegroundStyle;
    this.u5q_1 = fontSize;
    this.v5q_1 = fontWeight;
    this.w5q_1 = fontStyle;
    this.x5q_1 = fontSynthesis;
    this.y5q_1 = fontFamily;
    this.z5q_1 = fontFeatureSettings;
    this.a5r_1 = letterSpacing;
    this.b5r_1 = baselineShift;
    this.c5r_1 = textGeometricTransform;
    this.d5r_1 = localeList;
    this.e5r_1 = background;
    this.f5r_1 = textDecoration;
    this.g5r_1 = shadow;
    this.h5r_1 = platformStyle;
    this.i5r_1 = drawStyle;
  }
  protoOf(SpanStyle).h4y = function () {
    return this.t5q_1.h4y();
  };
  protoOf(SpanStyle).l5s = function () {
    return this.t5q_1.l5s();
  };
  protoOf(SpanStyle).i4u = function () {
    return this.t5q_1.i4u();
  };
  protoOf(SpanStyle).m5s = function (other) {
    if (other == null)
      return this;
    return fastMerge_0(this, other.t5q_1.h4y(), other.t5q_1.l5s(), other.t5q_1.i4u(), other.u5q_1, other.v5q_1, other.w5q_1, other.x5q_1, other.y5q_1, other.z5q_1, other.a5r_1, other.b5r_1, other.c5r_1, other.d5r_1, other.e5r_1, other.f5r_1, other.g5r_1, other.h5r_1, other.i5r_1);
  };
  protoOf(SpanStyle).n5s = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    var tmp;
    if (equals(color, this.h4y())) {
      tmp = this.t5q_1;
    } else {
      tmp = Companion_instance_21.j5s(color);
    }
    return new SpanStyle(tmp, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
  };
  protoOf(SpanStyle).o5s = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle, $super) {
    color = color === VOID ? this.h4y() : color;
    fontSize = fontSize === VOID ? this.u5q_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.v5q_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.w5q_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.x5q_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.y5q_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.z5q_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.a5r_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.b5r_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.c5r_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.d5r_1 : localeList;
    background = background === VOID ? this.e5r_1 : background;
    textDecoration = textDecoration === VOID ? this.f5r_1 : textDecoration;
    shadow = shadow === VOID ? this.g5r_1 : shadow;
    platformStyle = platformStyle === VOID ? this.h5r_1 : platformStyle;
    drawStyle = drawStyle === VOID ? this.i5r_1 : drawStyle;
    var tmp;
    if ($super === VOID) {
      tmp = this.n5s(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle);
    } else {
      var tmp_0 = $super.n5s;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, platformStyle, drawStyle);
    }
    return tmp;
  };
  protoOf(SpanStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof SpanStyle))
      return false;
    return this.p5s(other) && this.q5s(other);
  };
  protoOf(SpanStyle).p5s = function (other) {
    if (this === other)
      return true;
    if (!equals(this.u5q_1, other.u5q_1))
      return false;
    if (!equals(this.v5q_1, other.v5q_1))
      return false;
    var tmp = this.w5q_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.w5q_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.x5q_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.x5q_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.y5q_1, other.y5q_1))
      return false;
    if (!(this.z5q_1 == other.z5q_1))
      return false;
    if (!equals(this.a5r_1, other.a5r_1))
      return false;
    var tmp_5 = this.b5r_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.b5r_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.c5r_1, other.c5r_1))
      return false;
    if (!equals(this.d5r_1, other.d5r_1))
      return false;
    if (!equals(this.e5r_1, other.e5r_1))
      return false;
    if (!equals(this.h5r_1, other.h5r_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).q5s = function (other) {
    if (!equals(this.t5q_1, other.t5q_1))
      return false;
    if (!equals(this.f5r_1, other.f5r_1))
      return false;
    if (!equals(this.g5r_1, other.g5r_1))
      return false;
    if (!equals(this.i5r_1, other.i5r_1))
      return false;
    return true;
  };
  protoOf(SpanStyle).hashCode = function () {
    var result = Color__hashCode_impl_vjyivj(this.h4y());
    var tmp = imul(31, result);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.l5s();
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    result = imul(31, result) + getNumberHashCode(this.i4u()) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.u5q_1) | 0;
    var tmp_0 = imul(31, result);
    var tmp0_safe_receiver_0 = this.v5q_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.hashCode();
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(31, result);
    var tmp2_safe_receiver = this.w5q_1;
    var tmp_2;
    var tmp_3 = tmp2_safe_receiver;
    if ((tmp_3 == null ? null : new FontStyle(tmp_3)) == null) {
      tmp_2 = null;
    } else {
      tmp_2 = FontStyle__hashCode_impl_7qhg4w(tmp2_safe_receiver);
    }
    var tmp3_elvis_lhs = tmp_2;
    result = tmp_1 + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_4 = imul(31, result);
    var tmp4_safe_receiver = this.x5q_1;
    var tmp_5;
    var tmp_6 = tmp4_safe_receiver;
    if ((tmp_6 == null ? null : new FontSynthesis(tmp_6)) == null) {
      tmp_5 = null;
    } else {
      tmp_5 = FontSynthesis__hashCode_impl_4wi11v(tmp4_safe_receiver);
    }
    var tmp5_elvis_lhs = tmp_5;
    result = tmp_4 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_7 = imul(31, result);
    var tmp6_safe_receiver = this.y5q_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : hashCode(tmp6_safe_receiver);
    result = tmp_7 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    var tmp_8 = imul(31, result);
    var tmp8_safe_receiver = this.z5q_1;
    var tmp9_elvis_lhs = tmp8_safe_receiver == null ? null : getStringHashCode(tmp8_safe_receiver);
    result = tmp_8 + (tmp9_elvis_lhs == null ? 0 : tmp9_elvis_lhs) | 0;
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.a5r_1) | 0;
    var tmp_9 = imul(31, result);
    var tmp10_safe_receiver = this.b5r_1;
    var tmp_10;
    var tmp_11 = tmp10_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null) {
      tmp_10 = null;
    } else {
      tmp_10 = BaselineShift__hashCode_impl_g0potx(tmp10_safe_receiver);
    }
    var tmp11_elvis_lhs = tmp_10;
    result = tmp_9 + (tmp11_elvis_lhs == null ? 0 : tmp11_elvis_lhs) | 0;
    var tmp_12 = imul(31, result);
    var tmp12_safe_receiver = this.c5r_1;
    var tmp13_elvis_lhs = tmp12_safe_receiver == null ? null : tmp12_safe_receiver.hashCode();
    result = tmp_12 + (tmp13_elvis_lhs == null ? 0 : tmp13_elvis_lhs) | 0;
    var tmp_13 = imul(31, result);
    var tmp14_safe_receiver = this.d5r_1;
    var tmp15_elvis_lhs = tmp14_safe_receiver == null ? null : tmp14_safe_receiver.hashCode();
    result = tmp_13 + (tmp15_elvis_lhs == null ? 0 : tmp15_elvis_lhs) | 0;
    result = imul(31, result) + Color__hashCode_impl_vjyivj(this.e5r_1) | 0;
    var tmp_14 = imul(31, result);
    var tmp16_safe_receiver = this.f5r_1;
    var tmp17_elvis_lhs = tmp16_safe_receiver == null ? null : tmp16_safe_receiver.hashCode();
    result = tmp_14 + (tmp17_elvis_lhs == null ? 0 : tmp17_elvis_lhs) | 0;
    var tmp_15 = imul(31, result);
    var tmp18_safe_receiver = this.g5r_1;
    var tmp19_elvis_lhs = tmp18_safe_receiver == null ? null : tmp18_safe_receiver.hashCode();
    result = tmp_15 + (tmp19_elvis_lhs == null ? 0 : tmp19_elvis_lhs) | 0;
    var tmp_16 = imul(31, result);
    var tmp20_safe_receiver = this.h5r_1;
    var tmp21_elvis_lhs = tmp20_safe_receiver == null ? null : tmp20_safe_receiver.hashCode();
    result = tmp_16 + (tmp21_elvis_lhs == null ? 0 : tmp21_elvis_lhs) | 0;
    var tmp_17 = imul(31, result);
    var tmp22_safe_receiver = this.i5r_1;
    var tmp23_elvis_lhs = tmp22_safe_receiver == null ? null : hashCode(tmp22_safe_receiver);
    result = tmp_17 + (tmp23_elvis_lhs == null ? 0 : tmp23_elvis_lhs) | 0;
    return result;
  };
  protoOf(SpanStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7('SpanStyle(');
    this_0.q7('color=' + Color__toString_impl_hpzmaq(this.h4y()) + ', ');
    this_0.q7('brush=' + toString(this.l5s()) + ', ');
    this_0.q7('alpha=' + this.i4u() + ', ');
    this_0.q7('fontSize=' + TextUnit__toString_impl_51ghw0(this.u5q_1) + ', ');
    this_0.q7('fontWeight=' + toString(this.v5q_1) + ', ');
    var tmp = this.w5q_1;
    this_0.q7('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.x5q_1;
    this_0.q7('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.q7('fontFamily=' + toString(this.y5q_1) + ', ');
    this_0.q7('fontFeatureSettings=' + this.z5q_1 + ', ');
    this_0.q7('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.a5r_1) + ', ');
    var tmp_1 = this.b5r_1;
    this_0.q7('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.q7('textGeometricTransform=' + toString(this.c5r_1) + ', ');
    this_0.q7('localeList=' + toString(this.d5r_1) + ', ');
    this_0.q7('background=' + Color__toString_impl_hpzmaq(this.e5r_1) + ', ');
    this_0.q7('textDecoration=' + toString(this.f5r_1) + ', ');
    this_0.q7('shadow=' + toString(this.g5r_1) + ', ');
    this_0.q7('platformStyle=' + toString(this.h5r_1) + ', ');
    this_0.q7('drawStyle=' + toString(this.i5r_1));
    this_0.q7(')');
    return this_0.toString();
  };
  function fastMerge_0(_this__u8e3s4, color, brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle, drawStyle) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    var tmp_3;
    var tmp_4;
    var tmp_5;
    var tmp_6;
    var tmp_7;
    var tmp_8;
    var tmp_9;
    var tmp_10;
    var tmp_11;
    var tmp_12;
    var tmp_13;
    var tmp_14;
    var tmp_15;
    var tmp_16;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(fontSize), new Long(0, 0))) {
      tmp_16 = !equals(fontSize, _this__u8e3s4.u5q_1);
    } else {
      tmp_16 = false;
    }
    if (tmp_16) {
      tmp_15 = true;
    } else {
      var tmp_17;
      var tmp_18;
      if (brush == null) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        tmp_18 = !equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)));
      } else {
        tmp_18 = false;
      }
      if (tmp_18) {
        tmp_17 = !equals(color, _this__u8e3s4.t5q_1.h4y());
      } else {
        tmp_17 = false;
      }
      tmp_15 = tmp_17;
    }
    if (tmp_15) {
      tmp_14 = true;
    } else {
      var tmp_19;
      var tmp_20 = fontStyle;
      if (!((tmp_20 == null ? null : new FontStyle(tmp_20)) == null)) {
        var tmp_21 = fontStyle;
        var tmp_22 = tmp_21 == null ? null : new FontStyle(tmp_21);
        var tmp_23 = _this__u8e3s4.w5q_1;
        tmp_19 = !equals(tmp_22, tmp_23 == null ? null : new FontStyle(tmp_23));
      } else {
        tmp_19 = false;
      }
      tmp_14 = tmp_19;
    }
    if (tmp_14) {
      tmp_13 = true;
    } else {
      tmp_13 = (!(fontWeight == null) && !equals(fontWeight, _this__u8e3s4.v5q_1));
    }
    if (tmp_13) {
      tmp_12 = true;
    } else {
      tmp_12 = (!(fontFamily == null) && !(fontFamily === _this__u8e3s4.y5q_1));
    }
    if (tmp_12) {
      tmp_11 = true;
    } else {
      var tmp_24;
      // Inline function 'androidx.compose.ui.unit.isSpecified' call
      // Inline function 'androidx.compose.ui.unit.isUnspecified' call
      if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
        tmp_24 = !equals(letterSpacing, _this__u8e3s4.a5r_1);
      } else {
        tmp_24 = false;
      }
      tmp_11 = tmp_24;
    }
    if (tmp_11) {
      tmp_10 = true;
    } else {
      tmp_10 = (!(textDecoration == null) && !equals(textDecoration, _this__u8e3s4.f5r_1));
    }
    if (tmp_10) {
      tmp_9 = true;
    } else {
      tmp_9 = !equals(brush, _this__u8e3s4.t5q_1.l5s());
    }
    if (tmp_9) {
      tmp_8 = true;
    } else {
      tmp_8 = (!(brush == null) && !(alpha === _this__u8e3s4.t5q_1.i4u()));
    }
    if (tmp_8) {
      tmp_7 = true;
    } else {
      var tmp_25;
      var tmp_26 = fontSynthesis;
      if (!((tmp_26 == null ? null : new FontSynthesis(tmp_26)) == null)) {
        var tmp_27 = fontSynthesis;
        var tmp_28 = tmp_27 == null ? null : new FontSynthesis(tmp_27);
        var tmp_29 = _this__u8e3s4.x5q_1;
        tmp_25 = !equals(tmp_28, tmp_29 == null ? null : new FontSynthesis(tmp_29));
      } else {
        tmp_25 = false;
      }
      tmp_7 = tmp_25;
    }
    if (tmp_7) {
      tmp_6 = true;
    } else {
      tmp_6 = (!(fontFeatureSettings == null) && !(fontFeatureSettings == _this__u8e3s4.z5q_1));
    }
    if (tmp_6) {
      tmp_5 = true;
    } else {
      var tmp_30;
      var tmp_31 = baselineShift;
      if (!((tmp_31 == null ? null : new BaselineShift(tmp_31)) == null)) {
        var tmp_32 = baselineShift;
        var tmp_33 = tmp_32 == null ? null : new BaselineShift(tmp_32);
        var tmp_34 = _this__u8e3s4.b5r_1;
        tmp_30 = !equals(tmp_33, tmp_34 == null ? null : new BaselineShift(tmp_34));
      } else {
        tmp_30 = false;
      }
      tmp_5 = tmp_30;
    }
    if (tmp_5) {
      tmp_4 = true;
    } else {
      tmp_4 = (!(textGeometricTransform == null) && !equals(textGeometricTransform, _this__u8e3s4.c5r_1));
    }
    if (tmp_4) {
      tmp_3 = true;
    } else {
      tmp_3 = (!(localeList == null) && !equals(localeList, _this__u8e3s4.d5r_1));
    }
    if (tmp_3) {
      tmp_2 = true;
    } else {
      var tmp_35;
      // Inline function 'androidx.compose.ui.graphics.isSpecified' call
      if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
        tmp_35 = !equals(background, _this__u8e3s4.e5r_1);
      } else {
        tmp_35 = false;
      }
      tmp_2 = tmp_35;
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      tmp_1 = (!(shadow == null) && !equals(shadow, _this__u8e3s4.g5r_1));
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      tmp_0 = (!(platformStyle == null) && !equals(platformStyle, _this__u8e3s4.h5r_1));
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = (!(drawStyle == null) && !equals(drawStyle, _this__u8e3s4.i5r_1));
    }
    var requiresAlloc = tmp;
    if (!requiresAlloc) {
      return _this__u8e3s4;
    }
    var tmp_36;
    if (!(brush == null)) {
      tmp_36 = Companion_instance_21.k5s(brush, alpha);
    } else {
      tmp_36 = Companion_instance_21.j5s(color);
    }
    var otherTextForegroundStyle = tmp_36;
    var tmp11_textForegroundStyle = _this__u8e3s4.t5q_1.r5s(otherTextForegroundStyle);
    var tmp12_fontFamily = fontFamily == null ? _this__u8e3s4.y5q_1 : fontFamily;
    var tmp_37;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(fontSize), new Long(0, 0))) {
      tmp_37 = fontSize;
    } else {
      tmp_37 = _this__u8e3s4.u5q_1;
    }
    var tmp13_fontSize = tmp_37;
    var tmp14_fontWeight = fontWeight == null ? _this__u8e3s4.v5q_1 : fontWeight;
    var tmp_38;
    var tmp_39 = fontStyle;
    if ((tmp_39 == null ? null : new FontStyle(tmp_39)) == null) {
      tmp_38 = _this__u8e3s4.w5q_1;
    } else {
      tmp_38 = fontStyle;
    }
    var tmp15_fontStyle = tmp_38;
    var tmp_40;
    var tmp_41 = fontSynthesis;
    if ((tmp_41 == null ? null : new FontSynthesis(tmp_41)) == null) {
      tmp_40 = _this__u8e3s4.x5q_1;
    } else {
      tmp_40 = fontSynthesis;
    }
    var tmp16_fontSynthesis = tmp_40;
    var tmp17_fontFeatureSettings = fontFeatureSettings == null ? _this__u8e3s4.z5q_1 : fontFeatureSettings;
    var tmp_42;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(letterSpacing), new Long(0, 0))) {
      tmp_42 = letterSpacing;
    } else {
      tmp_42 = _this__u8e3s4.a5r_1;
    }
    var tmp18_letterSpacing = tmp_42;
    var tmp_43;
    var tmp_44 = baselineShift;
    if ((tmp_44 == null ? null : new BaselineShift(tmp_44)) == null) {
      tmp_43 = _this__u8e3s4.b5r_1;
    } else {
      tmp_43 = baselineShift;
    }
    var tmp19_baselineShift = tmp_43;
    var tmp20_textGeometricTransform = textGeometricTransform == null ? _this__u8e3s4.c5r_1 : textGeometricTransform;
    var tmp21_localeList = localeList == null ? _this__u8e3s4.d5r_1 : localeList;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp_45;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(background), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_45 = background;
    } else {
      tmp_45 = _this__u8e3s4.e5r_1;
    }
    var tmp22_background = tmp_45;
    var tmp23_textDecoration = textDecoration == null ? _this__u8e3s4.f5r_1 : textDecoration;
    var tmp24_shadow = shadow == null ? _this__u8e3s4.g5r_1 : shadow;
    var tmp25_platformStyle = mergePlatformStyle_0(_this__u8e3s4, platformStyle);
    var tmp26_drawStyle = drawStyle == null ? _this__u8e3s4.i5r_1 : drawStyle;
    return new SpanStyle(tmp11_textForegroundStyle, tmp13_fontSize, tmp14_fontWeight, tmp15_fontStyle, tmp16_fontSynthesis, tmp12_fontFamily, tmp17_fontFeatureSettings, tmp18_letterSpacing, tmp19_baselineShift, tmp20_textGeometricTransform, tmp21_localeList, tmp22_background, tmp23_textDecoration, tmp24_shadow, tmp25_platformStyle, tmp26_drawStyle);
  }
  function mergePlatformStyle_0(_this__u8e3s4, other) {
    _init_properties_SpanStyle_kt__ixg4k5();
    if (_this__u8e3s4.h5r_1 == null)
      return other;
    if (other == null)
      return _this__u8e3s4.h5r_1;
    return _this__u8e3s4.h5r_1.t5s(other);
  }
  function resolveSpanStyleDefaults(style) {
    _init_properties_SpanStyle_kt__ixg4k5();
    var tmp = style.t5q_1.u5s(resolveSpanStyleDefaults$lambda);
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = style.u5q_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      tmp_0 = get_DefaultFontSize();
    } else {
      tmp_0 = style.u5q_1;
    }
    var tmp_1 = tmp_0;
    var tmp0_elvis_lhs = style.v5q_1;
    var tmp_2 = tmp0_elvis_lhs == null ? Companion_getInstance_23().h5t_1 : tmp0_elvis_lhs;
    var tmp1_elvis_lhs = style.w5q_1;
    var tmp_3;
    var tmp_4 = tmp1_elvis_lhs;
    if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
      tmp_3 = Companion_getInstance_21().o5t_1;
    } else {
      tmp_3 = tmp1_elvis_lhs;
    }
    var tmp_5 = tmp_3;
    var tmp2_elvis_lhs = style.x5q_1;
    var tmp_6;
    var tmp_7 = tmp2_elvis_lhs;
    if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_22().t5t_1;
    } else {
      tmp_6 = tmp2_elvis_lhs;
    }
    var tmp_8 = tmp_6;
    var tmp3_elvis_lhs = style.y5q_1;
    var tmp_9 = tmp3_elvis_lhs == null ? Companion_getInstance_17().u5t_1 : tmp3_elvis_lhs;
    var tmp4_elvis_lhs = style.z5q_1;
    var tmp_10 = tmp4_elvis_lhs == null ? '' : tmp4_elvis_lhs;
    var tmp_11;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_1 = style.a5r_1;
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_1), new Long(0, 0))) {
      tmp_11 = get_DefaultLetterSpacing();
    } else {
      tmp_11 = style.a5r_1;
    }
    var tmp_12 = tmp_11;
    var tmp5_elvis_lhs = style.b5r_1;
    var tmp_13;
    var tmp_14 = tmp5_elvis_lhs;
    if ((tmp_14 == null ? null : new BaselineShift(tmp_14)) == null) {
      tmp_13 = Companion_getInstance_25().b5u_1;
    } else {
      tmp_13 = tmp5_elvis_lhs;
    }
    // Inline function 'androidx.compose.ui.text.style.takeOrElse' call
    var this_2 = tmp_13;
    var tmp_15;
    if (isNaN_0(_BaselineShift___get_multiplier__impl__qhmjek(this_2))) {
      tmp_15 = Companion_getInstance_25().b5u_1;
    } else {
      tmp_15 = this_2;
    }
    var tmp_16 = tmp_15;
    var tmp6_elvis_lhs = style.c5r_1;
    var tmp_17 = tmp6_elvis_lhs == null ? Companion_getInstance_35().d5u_1 : tmp6_elvis_lhs;
    var tmp7_elvis_lhs = style.d5r_1;
    var tmp_18 = tmp7_elvis_lhs == null ? Companion_getInstance_24().i1w() : tmp7_elvis_lhs;
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var this_3 = style.e5r_1;
    var tmp_19;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(this_3), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp_19 = this_3;
    } else {
      tmp_19 = get_DefaultBackgroundColor();
    }
    var tmp_20 = tmp_19;
    var tmp8_elvis_lhs = style.f5r_1;
    var tmp_21 = tmp8_elvis_lhs == null ? Companion_getInstance_32().f5u_1 : tmp8_elvis_lhs;
    var tmp9_elvis_lhs = style.g5r_1;
    var tmp_22 = tmp9_elvis_lhs == null ? Companion_getInstance_2().u54_1 : tmp9_elvis_lhs;
    var tmp10_elvis_lhs = style.i5r_1;
    return new SpanStyle(tmp, tmp_1, tmp_2, tmp_5, tmp_8, tmp_9, tmp_10, tmp_12, tmp_16, tmp_17, tmp_18, tmp_20, tmp_21, tmp_22, style.h5r_1, tmp10_elvis_lhs == null ? Fill_getInstance() : tmp10_elvis_lhs);
  }
  function resolveSpanStyleDefaults$lambda() {
    _init_properties_SpanStyle_kt__ixg4k5();
    return get_DefaultColorForegroundStyle();
  }
  var properties_initialized_SpanStyle_kt_cqbdlj;
  function _init_properties_SpanStyle_kt__ixg4k5() {
    if (!properties_initialized_SpanStyle_kt_cqbdlj) {
      properties_initialized_SpanStyle_kt_cqbdlj = true;
      DefaultFontSize = get_sp(14);
      DefaultLetterSpacing = get_sp(0);
      DefaultBackgroundColor = Companion_getInstance().s4x_1;
      DefaultColor = Companion_getInstance().h4x_1;
      DefaultColorForegroundStyle = Companion_instance_21.j5s(get_DefaultColor());
      androidx_compose_ui_text_SpanStyle$stable = 0;
    }
  }
  function _StringAnnotation___init__impl__o6a5i7(value) {
    return value;
  }
  function _StringAnnotation___get_value__impl__v4s4ej($this) {
    return $this;
  }
  function StringAnnotation__toString_impl_xnbt1d($this) {
    return 'StringAnnotation(value=' + $this + ')';
  }
  function StringAnnotation__hashCode_impl_bw5w8i($this) {
    return getStringHashCode($this);
  }
  function StringAnnotation__equals_impl_ro6p8u($this, other) {
    if (!(other instanceof StringAnnotation))
      return false;
    if (!($this === other.m5q_1))
      return false;
    return true;
  }
  function StringAnnotation(value) {
    this.m5q_1 = value;
  }
  protoOf(StringAnnotation).toString = function () {
    return StringAnnotation__toString_impl_xnbt1d(this.m5q_1);
  };
  protoOf(StringAnnotation).hashCode = function () {
    return StringAnnotation__hashCode_impl_bw5w8i(this.m5q_1);
  };
  protoOf(StringAnnotation).equals = function (other) {
    return StringAnnotation__equals_impl_ro6p8u(this.m5q_1, other);
  };
  var androidx_compose_ui_text_TextLayoutInput$stable;
  var androidx_compose_ui_text_TextLayoutResult$stable;
  function TextLayoutResult(layoutInput, multiParagraph, size) {
    this.i5u_1 = layoutInput;
    this.j5u_1 = multiParagraph;
    this.k5u_1 = size;
    this.l5u_1 = this.j5u_1.z5n();
    this.m5u_1 = this.j5u_1.a5o();
    this.n5u_1 = this.j5u_1.b5n_1;
  }
  protoOf(TextLayoutResult).o5u = function () {
    var tmp;
    if (this.j5u_1.x5m_1) {
      tmp = true;
    } else {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = this.k5u_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      tmp = convertToInt(bitwiseAnd(value, new Long(-1, 0))) < this.j5u_1.z5m_1;
    }
    return tmp;
  };
  protoOf(TextLayoutResult).p5u = function () {
    // Inline function 'androidx.compose.ui.unit.IntSize.width' call
    var this_0 = this.k5u_1;
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
    return convertToInt(shiftRight(value, 32)) < this.j5u_1.y5m_1;
  };
  protoOf(TextLayoutResult).q5u = function () {
    return this.p5u() || this.o5u();
  };
  protoOf(TextLayoutResult).v5n = function () {
    return this.j5u_1.a5n_1;
  };
  protoOf(TextLayoutResult).r5o = function (lineIndex) {
    return this.j5u_1.r5o(lineIndex);
  };
  protoOf(TextLayoutResult).t5o = function (lineIndex, visibleEnd) {
    return this.j5u_1.t5o(lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).r5u = function (lineIndex, visibleEnd, $super) {
    visibleEnd = visibleEnd === VOID ? false : visibleEnd;
    return $super === VOID ? this.t5o(lineIndex, visibleEnd) : $super.t5o.call(this, lineIndex, visibleEnd);
  };
  protoOf(TextLayoutResult).p5o = function (lineIndex) {
    return this.j5u_1.p5o(lineIndex);
  };
  protoOf(TextLayoutResult).o5o = function (offset) {
    return this.j5u_1.o5o(offset);
  };
  protoOf(TextLayoutResult).g5o = function (vertical) {
    return this.j5u_1.g5o(vertical);
  };
  protoOf(TextLayoutResult).j5o = function (offset) {
    return this.j5u_1.j5o(offset);
  };
  protoOf(TextLayoutResult).k5o = function (offset) {
    return this.j5u_1.k5o(offset);
  };
  protoOf(TextLayoutResult).l5o = function (offset) {
    return this.j5u_1.l5o(offset);
  };
  protoOf(TextLayoutResult).l5n = function (start, end) {
    return this.j5u_1.l5n(start, end);
  };
  protoOf(TextLayoutResult).s5u = function (layoutInput, size) {
    return new TextLayoutResult(layoutInput, this.j5u_1, size);
  };
  protoOf(TextLayoutResult).t5u = function (layoutInput, size, $super) {
    layoutInput = layoutInput === VOID ? this.i5u_1 : layoutInput;
    size = size === VOID ? this.k5u_1 : size;
    return $super === VOID ? this.s5u(layoutInput, size) : $super.s5u.call(this, layoutInput, new IntSize(size));
  };
  protoOf(TextLayoutResult).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutResult))
      return false;
    if (!this.i5u_1.equals(other.i5u_1))
      return false;
    if (!equals(this.j5u_1, other.j5u_1))
      return false;
    if (!equals(this.k5u_1, other.k5u_1))
      return false;
    if (!(this.l5u_1 === other.l5u_1))
      return false;
    if (!(this.m5u_1 === other.m5u_1))
      return false;
    if (!equals(this.n5u_1, other.n5u_1))
      return false;
    return true;
  };
  protoOf(TextLayoutResult).hashCode = function () {
    var result = this.i5u_1.hashCode();
    result = imul(31, result) + hashCode(this.j5u_1) | 0;
    result = imul(31, result) + IntSize__hashCode_impl_gm9mta(this.k5u_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.l5u_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.m5u_1) | 0;
    result = imul(31, result) + hashCode(this.n5u_1) | 0;
    return result;
  };
  protoOf(TextLayoutResult).toString = function () {
    return 'TextLayoutResult(' + ('layoutInput=' + this.i5u_1.toString() + ', ') + ('multiParagraph=' + toString_0(this.j5u_1) + ', ') + ('size=' + IntSize__toString_impl_54w9zl(this.k5u_1) + ', ') + ('firstBaseline=' + this.l5u_1 + ', ') + ('lastBaseline=' + this.m5u_1 + ', ') + ('placeholderRects=' + toString_0(this.n5u_1)) + ')';
  };
  function TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, $this) {
    TextLayoutInput.call($this, text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, null, fontFamilyResolver, constraints);
    return $this;
  }
  function TextLayoutInput_init_$Create$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints) {
    return TextLayoutInput_init_$Init$(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, fontFamilyResolver, constraints, objectCreate(protoOf(TextLayoutInput)));
  }
  function TextLayoutInput(text, style, placeholders, maxLines, softWrap, overflow, density, layoutDirection, resourceLoader, fontFamilyResolver, constraints) {
    this.u5u_1 = text;
    this.v5u_1 = style;
    this.w5u_1 = placeholders;
    this.x5u_1 = maxLines;
    this.y5u_1 = softWrap;
    this.z5u_1 = overflow;
    this.a5v_1 = density;
    this.b5v_1 = layoutDirection;
    this.c5v_1 = fontFamilyResolver;
    this.d5v_1 = constraints;
    this.e5v_1 = resourceLoader;
  }
  protoOf(TextLayoutInput).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextLayoutInput))
      return false;
    if (!this.u5u_1.equals(other.u5u_1))
      return false;
    if (!this.v5u_1.equals(other.v5u_1))
      return false;
    if (!equals(this.w5u_1, other.w5u_1))
      return false;
    if (!(this.x5u_1 === other.x5u_1))
      return false;
    if (!(this.y5u_1 === other.y5u_1))
      return false;
    if (!(this.z5u_1 === other.z5u_1))
      return false;
    if (!equals(this.a5v_1, other.a5v_1))
      return false;
    if (!this.b5v_1.equals(other.b5v_1))
      return false;
    if (!equals(this.c5v_1, other.c5v_1))
      return false;
    if (!equals(this.d5v_1, other.d5v_1))
      return false;
    return true;
  };
  protoOf(TextLayoutInput).hashCode = function () {
    var result = this.u5u_1.hashCode();
    result = imul(31, result) + this.v5u_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.w5u_1) | 0;
    result = imul(31, result) + this.x5u_1 | 0;
    result = imul(31, result) + getBooleanHashCode(this.y5u_1) | 0;
    result = imul(31, result) + TextOverflow__hashCode_impl_kqdwgt(this.z5u_1) | 0;
    result = imul(31, result) + hashCode(this.a5v_1) | 0;
    result = imul(31, result) + this.b5v_1.hashCode() | 0;
    result = imul(31, result) + hashCode(this.c5v_1) | 0;
    result = imul(31, result) + Constraints__hashCode_impl_ij7484(this.d5v_1) | 0;
    return result;
  };
  protoOf(TextLayoutInput).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7('TextLayoutInput(');
    this_0.q7('text=' + this.u5u_1.toString() + ', ');
    this_0.q7('style=' + this.v5u_1.toString() + ', ');
    this_0.q7('placeholders=' + toString_0(this.w5u_1) + ', ');
    this_0.q7('maxLines=' + this.x5u_1 + ', ');
    this_0.q7('softWrap=' + this.y5u_1 + ', ');
    this_0.q7('overflow=' + TextOverflow__toString_impl_10s0c2(this.z5u_1) + ', ');
    this_0.q7('density=' + toString_0(this.a5v_1) + ', ');
    this_0.q7('layoutDirection=' + this.b5v_1.toString() + ', ');
    this_0.q7('fontFamilyResolver=' + toString_0(this.c5v_1) + ', ');
    this_0.q7('constraints=' + Constraints__toString_impl_37yskr(this.d5v_1));
    this_0.q7(')');
    return this_0.toString();
  };
  function androidx_compose_ui_text_TextLayoutResult$stableprop_getter() {
    return androidx_compose_ui_text_TextLayoutResult$stable;
  }
  var androidx_compose_ui_text_TextLinkStyles$stable;
  function TextLinkStyles(style, focusedStyle, hoveredStyle, pressedStyle) {
    style = style === VOID ? null : style;
    focusedStyle = focusedStyle === VOID ? null : focusedStyle;
    hoveredStyle = hoveredStyle === VOID ? null : hoveredStyle;
    pressedStyle = pressedStyle === VOID ? null : pressedStyle;
    this.m5r_1 = style;
    this.n5r_1 = focusedStyle;
    this.o5r_1 = hoveredStyle;
    this.p5r_1 = pressedStyle;
  }
  protoOf(TextLinkStyles).equals = function (other) {
    if (this === other)
      return true;
    var tmp;
    if (other == null) {
      tmp = true;
    } else {
      tmp = !(other instanceof TextLinkStyles);
    }
    if (tmp)
      return false;
    if (!equals(this.m5r_1, other.m5r_1))
      return false;
    if (!equals(this.n5r_1, other.n5r_1))
      return false;
    if (!equals(this.o5r_1, other.o5r_1))
      return false;
    if (!equals(this.p5r_1, other.p5r_1))
      return false;
    return true;
  };
  protoOf(TextLinkStyles).hashCode = function () {
    var tmp0_safe_receiver = this.m5r_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.n5r_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    var tmp_0 = imul(31, result);
    var tmp4_safe_receiver = this.o5r_1;
    var tmp5_elvis_lhs = tmp4_safe_receiver == null ? null : tmp4_safe_receiver.hashCode();
    result = tmp_0 + (tmp5_elvis_lhs == null ? 0 : tmp5_elvis_lhs) | 0;
    var tmp_1 = imul(31, result);
    var tmp6_safe_receiver = this.p5r_1;
    var tmp7_elvis_lhs = tmp6_safe_receiver == null ? null : tmp6_safe_receiver.hashCode();
    result = tmp_1 + (tmp7_elvis_lhs == null ? 0 : tmp7_elvis_lhs) | 0;
    return result;
  };
  var androidx_compose_ui_text_TextMeasurer$stable;
  var androidx_compose_ui_text_TextLayoutCache$stable;
  var androidx_compose_ui_text_CacheTextLayoutInput$stable;
  var androidx_compose_ui_text_TextPainter$stable;
  function _TextRange___init__impl__h6icbt(packedValue) {
    return packedValue;
  }
  function _get_packedValue__aj623s($this) {
    return $this;
  }
  function _TextRange___get_start__impl__ww4t90($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt1' call
    var value = _get_packedValue__aj623s($this);
    return convertToInt(shiftRight(value, 32));
  }
  function _TextRange___get_end__impl__gcdxpp($this) {
    // Inline function 'androidx.compose.ui.util.unpackInt2' call
    var value = _get_packedValue__aj623s($this);
    return convertToInt(bitwiseAnd(value, new Long(-1, 0)));
  }
  function _TextRange___get_min__impl__uu95c4($this) {
    var tmp0 = _TextRange___get_start__impl__ww4t90($this);
    // Inline function 'kotlin.math.min' call
    var b = _TextRange___get_end__impl__gcdxpp($this);
    return Math.min(tmp0, b);
  }
  function _TextRange___get_max__impl__owm8m($this) {
    var tmp0 = _TextRange___get_start__impl__ww4t90($this);
    // Inline function 'kotlin.math.max' call
    var b = _TextRange___get_end__impl__gcdxpp($this);
    return Math.max(tmp0, b);
  }
  function TextRange__toString_impl_pqvlzl($this) {
    return 'TextRange(' + _TextRange___get_start__impl__ww4t90($this) + ', ' + _TextRange___get_end__impl__gcdxpp($this) + ')';
  }
  function Companion_1() {
    Companion_instance_2 = this;
    this.u5o_1 = TextRange_0(0);
  }
  var Companion_instance_2;
  function Companion_getInstance_15() {
    if (Companion_instance_2 == null)
      new Companion_1();
    return Companion_instance_2;
  }
  function TextRange__hashCode_impl_3zpp6q($this) {
    return $this.hashCode();
  }
  function TextRange__equals_impl_hkkmea($this, other) {
    if (!(other instanceof TextRange))
      return false;
    var tmp0_other_with_cast = other.n5o_1;
    if (!equalsLong($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function TextRange(packedValue) {
    Companion_getInstance_15();
    this.n5o_1 = packedValue;
  }
  protoOf(TextRange).toString = function () {
    return TextRange__toString_impl_pqvlzl(this.n5o_1);
  };
  protoOf(TextRange).hashCode = function () {
    return TextRange__hashCode_impl_3zpp6q(this.n5o_1);
  };
  protoOf(TextRange).equals = function (other) {
    return TextRange__equals_impl_hkkmea(this.n5o_1, other);
  };
  function TextRange_0(index) {
    return TextRange_1(index, index);
  }
  function TextRange_1(start, end) {
    return _TextRange___init__impl__h6icbt(packWithCheck(start, end));
  }
  function packWithCheck(start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(start >= 0 && end >= 0)) {
      var tmp$ret$1 = 'start and end cannot be negative. [start: ' + start + ', end: ' + end + ']';
      throwIllegalArgumentException(tmp$ret$1);
    }
    // Inline function 'androidx.compose.ui.util.packInts' call
    return bitwiseOr(shiftLeft(fromInt(start), 32), bitwiseAnd(fromInt(end), new Long(-1, 0)));
  }
  var androidx_compose_ui_text_TextStyle$stable;
  function TextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    TextStyle.call($this, spanStyle, paragraphStyle, createPlatformTextStyleInternal(spanStyle.h5r_1, paragraphStyle.d5m_1));
    return $this;
  }
  function TextStyle_init_$Create$_0(spanStyle, paragraphStyle) {
    return TextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(TextStyle)));
  }
  function TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $this) {
    color = color === VOID ? Companion_getInstance().t4x_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q48_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q48_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().t4x_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_31().o5p_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_33().b5p_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q48_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_42().s5p_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().v5p_1 : hyphens;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp = SpanStyle_init_$Create$(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.f5v_1, drawStyle);
    TextStyle.call($this, tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.g5v_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
    return $this;
  }
  function TextStyle_init_$Create$_1(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    return TextStyle_init_$Init$_0(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, objectCreate(protoOf(TextStyle)));
  }
  function Companion_2() {
    Companion_instance_3 = this;
    this.h5v_1 = TextStyle_init_$Create$_1();
  }
  var Companion_instance_3;
  function Companion_getInstance_16() {
    if (Companion_instance_3 == null)
      new Companion_2();
    return Companion_instance_3;
  }
  function TextStyle(spanStyle, paragraphStyle, platformStyle) {
    Companion_getInstance_16();
    platformStyle = platformStyle === VOID ? null : platformStyle;
    this.c5p_1 = spanStyle;
    this.d5p_1 = paragraphStyle;
    this.e5p_1 = platformStyle;
  }
  protoOf(TextStyle).i5v = function () {
    return this.c5p_1;
  };
  protoOf(TextStyle).f5p = function () {
    return this.d5p_1;
  };
  protoOf(TextStyle).j5v = function (other) {
    if (other == null || equals(other, Companion_getInstance_16().h5v_1))
      return this;
    return TextStyle_init_$Create$_0(this.i5v().m5s(other.i5v()), this.f5p().i5m(other.f5p()));
  };
  protoOf(TextStyle).k5v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion) {
    var mergedSpanStyle = fastMerge_0(this.c5p_1, color, null, NaN, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.f5v_1, drawStyle);
    var mergedParagraphStyle = fastMerge(this.d5p_1, textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.g5v_1, lineHeightStyle, lineBreak, hyphens, textMotion);
    if (this.c5p_1 === mergedSpanStyle && this.d5p_1 === mergedParagraphStyle)
      return this;
    return TextStyle_init_$Create$_0(mergedSpanStyle, mergedParagraphStyle);
  };
  protoOf(TextStyle).l5v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion, $super) {
    color = color === VOID ? Companion_getInstance().t4x_1 : color;
    fontSize = fontSize === VOID ? Companion_getInstance_1().q48_1 : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? Companion_getInstance_1().q48_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().t4x_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    textAlign = textAlign === VOID ? Companion_getInstance_31().o5p_1 : textAlign;
    textDirection = textDirection === VOID ? Companion_getInstance_33().b5p_1 : textDirection;
    lineHeight = lineHeight === VOID ? Companion_getInstance_1().q48_1 : lineHeight;
    textIndent = textIndent === VOID ? null : textIndent;
    lineHeightStyle = lineHeightStyle === VOID ? null : lineHeightStyle;
    lineBreak = lineBreak === VOID ? Companion_getInstance_42().s5p_1 : lineBreak;
    hyphens = hyphens === VOID ? Companion_getInstance_26().v5p_1 : hyphens;
    platformStyle = platformStyle === VOID ? null : platformStyle;
    textMotion = textMotion === VOID ? null : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.k5v(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, lineHeightStyle, lineBreak, hyphens, platformStyle, textMotion);
    } else {
      var tmp_0 = $super.k5v;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), platformStyle, textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).g5p = function (other) {
    return TextStyle_init_$Create$_0(this.i5v(), this.f5p().i5m(other));
  };
  protoOf(TextStyle).m5v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp;
    if (equals(color, this.c5p_1.h4y())) {
      tmp = this.c5p_1.t5q_1;
    } else {
      tmp = Companion_instance_21.j5s(color);
    }
    var tmp_0 = tmp;
    var tmp_1 = new SpanStyle(tmp_0, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.f5v_1, drawStyle);
    return new TextStyle(tmp_1, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.g5v_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).n5v = function (color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    color = color === VOID ? this.c5p_1.h4y() : color;
    fontSize = fontSize === VOID ? this.c5p_1.u5q_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.c5p_1.v5q_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.c5p_1.w5q_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.c5p_1.x5q_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.c5p_1.y5q_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.c5p_1.z5q_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.c5p_1.a5r_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.c5p_1.b5r_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.c5p_1.c5r_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.c5p_1.d5r_1 : localeList;
    background = background === VOID ? this.c5p_1.e5r_1 : background;
    textDecoration = textDecoration === VOID ? this.c5p_1.f5r_1 : textDecoration;
    shadow = shadow === VOID ? this.c5p_1.g5r_1 : shadow;
    drawStyle = drawStyle === VOID ? this.c5p_1.i5r_1 : drawStyle;
    textAlign = textAlign === VOID ? this.d5p_1.z5l_1 : textAlign;
    textDirection = textDirection === VOID ? this.d5p_1.a5m_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.d5p_1.b5m_1 : lineHeight;
    textIndent = textIndent === VOID ? this.d5p_1.c5m_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.e5p_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.d5p_1.e5m_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.d5p_1.f5m_1 : lineBreak;
    hyphens = hyphens === VOID ? this.d5p_1.g5m_1 : hyphens;
    textMotion = textMotion === VOID ? this.d5p_1.h5m_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.m5v(color, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.m5v;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, new Color(color), new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).o5v = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion) {
    var tmp = SpanStyle_init_$Create$_0(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, platformStyle == null ? null : platformStyle.f5v_1, drawStyle);
    return new TextStyle(tmp, new ParagraphStyle_0(textAlign, textDirection, lineHeight, textIndent, platformStyle == null ? null : platformStyle.g5v_1, lineHeightStyle, lineBreak, hyphens, textMotion), platformStyle);
  };
  protoOf(TextStyle).p5v = function (brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion, $super) {
    alpha = alpha === VOID ? this.c5p_1.i4u() : alpha;
    fontSize = fontSize === VOID ? this.c5p_1.u5q_1 : fontSize;
    fontWeight = fontWeight === VOID ? this.c5p_1.v5q_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.c5p_1.w5q_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.c5p_1.x5q_1 : fontSynthesis;
    fontFamily = fontFamily === VOID ? this.c5p_1.y5q_1 : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? this.c5p_1.z5q_1 : fontFeatureSettings;
    letterSpacing = letterSpacing === VOID ? this.c5p_1.a5r_1 : letterSpacing;
    baselineShift = baselineShift === VOID ? this.c5p_1.b5r_1 : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? this.c5p_1.c5r_1 : textGeometricTransform;
    localeList = localeList === VOID ? this.c5p_1.d5r_1 : localeList;
    background = background === VOID ? this.c5p_1.e5r_1 : background;
    textDecoration = textDecoration === VOID ? this.c5p_1.f5r_1 : textDecoration;
    shadow = shadow === VOID ? this.c5p_1.g5r_1 : shadow;
    drawStyle = drawStyle === VOID ? this.c5p_1.i5r_1 : drawStyle;
    textAlign = textAlign === VOID ? this.d5p_1.z5l_1 : textAlign;
    textDirection = textDirection === VOID ? this.d5p_1.a5m_1 : textDirection;
    lineHeight = lineHeight === VOID ? this.d5p_1.b5m_1 : lineHeight;
    textIndent = textIndent === VOID ? this.d5p_1.c5m_1 : textIndent;
    platformStyle = platformStyle === VOID ? this.e5p_1 : platformStyle;
    lineHeightStyle = lineHeightStyle === VOID ? this.d5p_1.e5m_1 : lineHeightStyle;
    lineBreak = lineBreak === VOID ? this.d5p_1.f5m_1 : lineBreak;
    hyphens = hyphens === VOID ? this.d5p_1.g5m_1 : hyphens;
    textMotion = textMotion === VOID ? this.d5p_1.h5m_1 : textMotion;
    var tmp;
    if ($super === VOID) {
      tmp = this.o5v(brush, alpha, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, shadow, drawStyle, textAlign, textDirection, lineHeight, textIndent, platformStyle, lineHeightStyle, lineBreak, hyphens, textMotion);
    } else {
      var tmp_0 = $super.o5v;
      var tmp_1 = fontStyle;
      var tmp_2 = tmp_1 == null ? null : new FontStyle(tmp_1);
      var tmp_3 = fontSynthesis;
      var tmp_4 = tmp_3 == null ? null : new FontSynthesis(tmp_3);
      var tmp_5 = baselineShift;
      tmp = tmp_0.call(this, brush, alpha, new TextUnit(fontSize), fontWeight, tmp_2, tmp_4, fontFamily, fontFeatureSettings, new TextUnit(letterSpacing), tmp_5 == null ? null : new BaselineShift(tmp_5), textGeometricTransform, localeList, new Color(background), textDecoration, shadow, drawStyle, new TextAlign(textAlign), new TextDirection(textDirection), new TextUnit(lineHeight), textIndent, platformStyle, lineHeightStyle, new LineBreak(lineBreak), new Hyphens(hyphens), textMotion);
    }
    return tmp;
  };
  protoOf(TextStyle).l5s = function () {
    return this.c5p_1.l5s();
  };
  protoOf(TextStyle).h4y = function () {
    return this.c5p_1.h4y();
  };
  protoOf(TextStyle).i4u = function () {
    return this.c5p_1.i4u();
  };
  protoOf(TextStyle).q5v = function () {
    return this.c5p_1.u5q_1;
  };
  protoOf(TextStyle).r5v = function () {
    return this.c5p_1.v5q_1;
  };
  protoOf(TextStyle).s5v = function () {
    return this.c5p_1.w5q_1;
  };
  protoOf(TextStyle).t5v = function () {
    return this.c5p_1.x5q_1;
  };
  protoOf(TextStyle).u5v = function () {
    return this.c5p_1.y5q_1;
  };
  protoOf(TextStyle).v5v = function () {
    return this.c5p_1.z5q_1;
  };
  protoOf(TextStyle).w5v = function () {
    return this.c5p_1.a5r_1;
  };
  protoOf(TextStyle).x5v = function () {
    return this.c5p_1.b5r_1;
  };
  protoOf(TextStyle).y5v = function () {
    return this.c5p_1.c5r_1;
  };
  protoOf(TextStyle).z5v = function () {
    return this.c5p_1.d5r_1;
  };
  protoOf(TextStyle).a5w = function () {
    return this.c5p_1.e5r_1;
  };
  protoOf(TextStyle).b5w = function () {
    return this.c5p_1.f5r_1;
  };
  protoOf(TextStyle).c5w = function () {
    return this.c5p_1.g5r_1;
  };
  protoOf(TextStyle).d5w = function () {
    return this.c5p_1.i5r_1;
  };
  protoOf(TextStyle).e5w = function () {
    return this.d5p_1.z5l_1;
  };
  protoOf(TextStyle).f5w = function () {
    return this.d5p_1.a5m_1;
  };
  protoOf(TextStyle).g5w = function () {
    return this.d5p_1.b5m_1;
  };
  protoOf(TextStyle).h5w = function () {
    return this.d5p_1.c5m_1;
  };
  protoOf(TextStyle).i5w = function () {
    return this.d5p_1.e5m_1;
  };
  protoOf(TextStyle).j5w = function () {
    return this.d5p_1.g5m_1;
  };
  protoOf(TextStyle).k5w = function () {
    return this.d5p_1.f5m_1;
  };
  protoOf(TextStyle).l5w = function () {
    return this.d5p_1.h5m_1;
  };
  protoOf(TextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextStyle))
      return false;
    if (!this.c5p_1.equals(other.c5p_1))
      return false;
    if (!this.d5p_1.equals(other.d5p_1))
      return false;
    if (!equals(this.e5p_1, other.e5p_1))
      return false;
    return true;
  };
  protoOf(TextStyle).m5w = function (other) {
    return this === other || (this.d5p_1.equals(other.d5p_1) && this.c5p_1.p5s(other.c5p_1));
  };
  protoOf(TextStyle).n5w = function (other) {
    return this === other || this.c5p_1.q5s(other.c5p_1);
  };
  protoOf(TextStyle).hashCode = function () {
    var result = this.c5p_1.hashCode();
    result = imul(31, result) + this.d5p_1.hashCode() | 0;
    var tmp = imul(31, result);
    var tmp0_safe_receiver = this.e5p_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(TextStyle).toString = function () {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7('TextStyle(');
    this_0.q7('color=' + Color__toString_impl_hpzmaq(this.h4y()) + ', ');
    this_0.q7('brush=' + toString(this.l5s()) + ', ');
    this_0.q7('alpha=' + this.i4u() + ', ');
    this_0.q7('fontSize=' + TextUnit__toString_impl_51ghw0(this.q5v()) + ', ');
    this_0.q7('fontWeight=' + toString(this.r5v()) + ', ');
    var tmp = this.s5v();
    this_0.q7('fontStyle=' + toString(tmp == null ? null : new FontStyle(tmp)) + ', ');
    var tmp_0 = this.t5v();
    this_0.q7('fontSynthesis=' + toString(tmp_0 == null ? null : new FontSynthesis(tmp_0)) + ', ');
    this_0.q7('fontFamily=' + toString(this.u5v()) + ', ');
    this_0.q7('fontFeatureSettings=' + this.v5v() + ', ');
    this_0.q7('letterSpacing=' + TextUnit__toString_impl_51ghw0(this.w5v()) + ', ');
    var tmp_1 = this.x5v();
    this_0.q7('baselineShift=' + toString(tmp_1 == null ? null : new BaselineShift(tmp_1)) + ', ');
    this_0.q7('textGeometricTransform=' + toString(this.y5v()) + ', ');
    this_0.q7('localeList=' + toString(this.z5v()) + ', ');
    this_0.q7('background=' + Color__toString_impl_hpzmaq(this.a5w()) + ', ');
    this_0.q7('textDecoration=' + toString(this.b5w()) + ', ');
    this_0.q7('shadow=' + toString(this.c5w()) + ', ');
    this_0.q7('drawStyle=' + toString(this.d5w()) + ', ');
    this_0.q7('textAlign=' + TextAlign__toString_impl_6ha6d3(this.e5w()) + ', ');
    this_0.q7('textDirection=' + TextDirection__toString_impl_x3uh9t(this.f5w()) + ', ');
    this_0.q7('lineHeight=' + TextUnit__toString_impl_51ghw0(this.g5w()) + ', ');
    this_0.q7('textIndent=' + toString(this.h5w()) + ', ');
    this_0.q7('platformStyle=' + toString(this.e5p_1) + ', ');
    this_0.q7('lineHeightStyle=' + toString(this.i5w()) + ', ');
    this_0.q7('lineBreak=' + LineBreak__toString_impl_mphhli(this.k5w()) + ', ');
    this_0.q7('hyphens=' + Hyphens__toString_impl_ck1wg0(this.j5w()) + ', ');
    this_0.q7('textMotion=' + toString(this.l5w()));
    this_0.q7(')');
    return this_0.toString();
  };
  function resolveDefaults(style, direction) {
    return new TextStyle(resolveSpanStyleDefaults(style.c5p_1), resolveParagraphStyleDefaults(style.d5p_1, direction), style.e5p_1);
  }
  function createPlatformTextStyleInternal(platformSpanStyle, platformParagraphStyle) {
    var tmp;
    if (platformSpanStyle == null && platformParagraphStyle == null) {
      tmp = null;
    } else {
      tmp = createPlatformTextStyle(platformSpanStyle, platformParagraphStyle);
    }
    return tmp;
  }
  function resolveTextDirection_0(layoutDirection, textDirection) {
    var tmp;
    if (textDirection === Companion_getInstance_33().y5o_1) {
      var tmp_0;
      switch (layoutDirection.i2_1) {
        case 0:
          tmp_0 = Companion_getInstance_33().z5o_1;
          break;
        case 1:
          tmp_0 = Companion_getInstance_33().a5p_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_0;
    } else if (textDirection === Companion_getInstance_33().b5p_1) {
      var tmp_1;
      switch (layoutDirection.i2_1) {
        case 0:
          tmp_1 = Companion_getInstance_33().w5o_1;
          break;
        case 1:
          tmp_1 = Companion_getInstance_33().x5o_1;
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
      tmp = tmp_1;
    } else {
      tmp = textDirection;
    }
    return tmp;
  }
  var androidx_compose_ui_text_TtsAnnotation$stable;
  var androidx_compose_ui_text_VerbatimTtsAnnotation$stable;
  function TtsAnnotation() {
  }
  function VerbatimTtsAnnotation(verbatim) {
    TtsAnnotation.call(this);
    this.n5q_1 = verbatim;
  }
  protoOf(VerbatimTtsAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof VerbatimTtsAnnotation))
      return false;
    if (!(this.n5q_1 === other.n5q_1))
      return false;
    return true;
  };
  protoOf(VerbatimTtsAnnotation).hashCode = function () {
    return getStringHashCode(this.n5q_1);
  };
  protoOf(VerbatimTtsAnnotation).toString = function () {
    return 'VerbatimTtsAnnotation(verbatim=' + this.n5q_1 + ')';
  };
  var androidx_compose_ui_text_UrlAnnotation$stable;
  function UrlAnnotation(url) {
    this.o5q_1 = url;
  }
  protoOf(UrlAnnotation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof UrlAnnotation))
      return false;
    if (!(this.o5q_1 === other.o5q_1))
      return false;
    return true;
  };
  protoOf(UrlAnnotation).hashCode = function () {
    return getStringHashCode(this.o5q_1);
  };
  protoOf(UrlAnnotation).toString = function () {
    return 'UrlAnnotation(url=' + this.o5q_1 + ')';
  };
  var androidx_compose_ui_text_font_ResourceFont$stable;
  function Font() {
  }
  var androidx_compose_ui_text_font_FontFamily$stable;
  var androidx_compose_ui_text_font_FileBasedFontFamily$stable;
  var androidx_compose_ui_text_font_SystemFontFamily$stable;
  var androidx_compose_ui_text_font_FontListFontFamily$stable;
  var androidx_compose_ui_text_font_GenericFontFamily$stable;
  var androidx_compose_ui_text_font_DefaultFontFamily$stable;
  var androidx_compose_ui_text_font_LoadedFontFamily$stable;
  function Companion_3() {
    Companion_instance_4 = this;
    this.u5t_1 = new DefaultFontFamily();
    this.v5t_1 = new GenericFontFamily('sans-serif', 'FontFamily.SansSerif');
    this.w5t_1 = new GenericFontFamily('serif', 'FontFamily.Serif');
    this.x5t_1 = new GenericFontFamily('monospace', 'FontFamily.Monospace');
    this.y5t_1 = new GenericFontFamily('cursive', 'FontFamily.Cursive');
  }
  var Companion_instance_4;
  function Companion_getInstance_17() {
    if (Companion_instance_4 == null)
      new Companion_3();
    return Companion_instance_4;
  }
  function FontFamily(canLoadSynchronously) {
    Companion_getInstance_17();
    this.t5w_1 = canLoadSynchronously;
  }
  function GenericFontFamily(name, fontFamilyName) {
    SystemFontFamily.call(this);
    this.v5w_1 = name;
    this.w5w_1 = fontFamilyName;
  }
  protoOf(GenericFontFamily).toString = function () {
    return this.w5w_1;
  };
  function SystemFontFamily() {
    FontFamily.call(this, true);
  }
  function DefaultFontFamily() {
    SystemFontFamily.call(this);
  }
  protoOf(DefaultFontFamily).toString = function () {
    return 'FontFamily.Default';
  };
  function FontListFontFamily() {
  }
  protoOf(FontListFontFamily).toString = function () {
    return 'FontListFontFamily(fonts=' + toString_0(this.y5w_1) + ')';
  };
  function FileBasedFontFamily() {
  }
  function LoadedFontFamily() {
  }
  function get_GlobalTypefaceRequestCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalTypefaceRequestCache;
  }
  var GlobalTypefaceRequestCache;
  function get_GlobalAsyncTypefaceCache() {
    _init_properties_FontFamilyResolver_kt__lawdt3();
    return GlobalAsyncTypefaceCache;
  }
  var GlobalAsyncTypefaceCache;
  var androidx_compose_ui_text_font_FontFamilyResolverImpl$stable;
  var androidx_compose_ui_text_font_TypefaceRequest$stable;
  var androidx_compose_ui_text_font_TypefaceResult_Immutable$stable;
  var androidx_compose_ui_text_font_TypefaceResult_Async$stable;
  var androidx_compose_ui_text_font_TypefaceRequestCache$stable;
  function TypefaceRequestCache$runCached$lambda(this$0, $typefaceRequest) {
    return function (finalResult) {
      // Inline function 'androidx.compose.ui.text.platform.synchronized' call
      // Inline function 'kotlinx.atomicfu.locks.synchronized' call
      this$0.z5w_1;
      if (finalResult.b5x()) {
        this$0.a5x_1.ol($typefaceRequest, finalResult);
      } else {
        this$0.a5x_1.sl($typefaceRequest);
      }
      return Unit_instance;
    };
  }
  function TypefaceRequestCache() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.z5w_1 = new SynchronizedObject();
    this.a5x_1 = new LruCache(16);
  }
  protoOf(TypefaceRequestCache).c5x = function (typefaceRequest, resolveTypeface) {
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z5w_1;
    var tmp0_safe_receiver = this.a5x_1.ll(typefaceRequest);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp_0;
      if (tmp0_safe_receiver.b5x()) {
        return tmp0_safe_receiver;
      } else {
        tmp_0 = this.a5x_1.sl(typefaceRequest);
      }
      tmp = tmp_0;
    }
    var tmp_1;
    try {
      tmp_1 = resolveTypeface(TypefaceRequestCache$runCached$lambda(this, typefaceRequest));
    } catch ($p) {
      var tmp_2;
      if ($p instanceof Exception) {
        var cause = $p;
        throw IllegalStateException_init_$Create$('Could not load font', cause);
      } else {
        throw $p;
      }
    }
    var currentTypefaceResult = tmp_1;
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.z5w_1;
    if (this.a5x_1.ll(typefaceRequest) == null && currentTypefaceResult.b5x()) {
      this.a5x_1.ol(typefaceRequest, currentTypefaceResult);
    }
    return currentTypefaceResult;
  };
  function TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    this.d5x_1 = fontFamily;
    this.e5x_1 = fontWeight;
    this.f5x_1 = fontStyle;
    this.g5x_1 = fontSynthesis;
    this.h5x_1 = resourceLoaderCacheKey;
  }
  protoOf(TypefaceRequest).i5x = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) {
    return new TypefaceRequest(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).j5x = function (fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey, $super) {
    fontFamily = fontFamily === VOID ? this.d5x_1 : fontFamily;
    fontWeight = fontWeight === VOID ? this.e5x_1 : fontWeight;
    fontStyle = fontStyle === VOID ? this.f5x_1 : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? this.g5x_1 : fontSynthesis;
    resourceLoaderCacheKey = resourceLoaderCacheKey === VOID ? this.h5x_1 : resourceLoaderCacheKey;
    return $super === VOID ? this.i5x(fontFamily, fontWeight, fontStyle, fontSynthesis, resourceLoaderCacheKey) : $super.i5x.call(this, fontFamily, fontWeight, new FontStyle(fontStyle), new FontSynthesis(fontSynthesis), resourceLoaderCacheKey);
  };
  protoOf(TypefaceRequest).toString = function () {
    return 'TypefaceRequest(fontFamily=' + toString(this.d5x_1) + ', fontWeight=' + this.e5x_1.toString() + ', fontStyle=' + FontStyle__toString_impl_thncxr(this.f5x_1) + ', fontSynthesis=' + FontSynthesis__toString_impl_gunvr0(this.g5x_1) + ', resourceLoaderCacheKey=' + toString(this.h5x_1) + ')';
  };
  protoOf(TypefaceRequest).hashCode = function () {
    var result = this.d5x_1 == null ? 0 : hashCode(this.d5x_1);
    result = imul(result, 31) + this.e5x_1.hashCode() | 0;
    result = imul(result, 31) + FontStyle__hashCode_impl_7qhg4w(this.f5x_1) | 0;
    result = imul(result, 31) + FontSynthesis__hashCode_impl_4wi11v(this.g5x_1) | 0;
    result = imul(result, 31) + (this.h5x_1 == null ? 0 : hashCode(this.h5x_1)) | 0;
    return result;
  };
  protoOf(TypefaceRequest).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TypefaceRequest))
      return false;
    if (!equals(this.d5x_1, other.d5x_1))
      return false;
    if (!this.e5x_1.equals(other.e5x_1))
      return false;
    if (!(this.f5x_1 === other.f5x_1))
      return false;
    if (!(this.g5x_1 === other.g5x_1))
      return false;
    if (!equals(this.h5x_1, other.h5x_1))
      return false;
    return true;
  };
  function Immutable(value, cacheable) {
    cacheable = cacheable === VOID ? true : cacheable;
    this.k5x_1 = value;
    this.l5x_1 = cacheable;
  }
  protoOf(Immutable).r1 = function () {
    return this.k5x_1;
  };
  protoOf(Immutable).b5x = function () {
    return this.l5x_1;
  };
  function Async(current) {
    this.m5x_1 = current;
  }
  protoOf(Async).b5x = function () {
    return this.m5x_1.t5x_1;
  };
  protoOf(Async).r1 = function () {
    return this.m5x_1.r1();
  };
  function resolve($this, typefaceRequest) {
    var result = $this.w5x_1.c5x(typefaceRequest, FontFamilyResolverImpl$resolve$lambda($this, typefaceRequest));
    return result;
  }
  function FontFamilyResolverImpl$createDefaultTypeface$lambda(this$0) {
    return function (it) {
      return resolve(this$0, it.j5x(null)).r1();
    };
  }
  function FontFamilyResolverImpl$resolve$lambda(this$0, $typefaceRequest) {
    return function (onAsyncCompletion) {
      var tmp0_elvis_lhs = this$0.x5x_1.c5y($typefaceRequest, this$0.u5x_1, onAsyncCompletion, this$0.z5x_1);
      var tmp1_elvis_lhs = tmp0_elvis_lhs == null ? this$0.y5x_1.c5y($typefaceRequest, this$0.u5x_1, onAsyncCompletion, this$0.z5x_1) : tmp0_elvis_lhs;
      var tmp;
      if (tmp1_elvis_lhs == null) {
        throw IllegalStateException_init_$Create$_0('Could not load font');
      } else {
        tmp = tmp1_elvis_lhs;
      }
      return tmp;
    };
  }
  function FontFamilyResolverImpl(platformFontLoader, platformResolveInterceptor, typefaceRequestCache, fontListFontFamilyTypefaceAdapter, platformFamilyTypefaceAdapter) {
    platformResolveInterceptor = platformResolveInterceptor === VOID ? Companion_getInstance_18().d5y_1 : platformResolveInterceptor;
    typefaceRequestCache = typefaceRequestCache === VOID ? get_GlobalTypefaceRequestCache() : typefaceRequestCache;
    fontListFontFamilyTypefaceAdapter = fontListFontFamilyTypefaceAdapter === VOID ? new FontListFontFamilyTypefaceAdapter(get_GlobalAsyncTypefaceCache()) : fontListFontFamilyTypefaceAdapter;
    platformFamilyTypefaceAdapter = platformFamilyTypefaceAdapter === VOID ? new PlatformFontFamilyTypefaceAdapter() : platformFamilyTypefaceAdapter;
    this.u5x_1 = platformFontLoader;
    this.v5x_1 = platformResolveInterceptor;
    this.w5x_1 = typefaceRequestCache;
    this.x5x_1 = fontListFontFamilyTypefaceAdapter;
    this.y5x_1 = platformFamilyTypefaceAdapter;
    var tmp = this;
    tmp.z5x_1 = FontFamilyResolverImpl$createDefaultTypeface$lambda(this);
  }
  protoOf(FontFamilyResolverImpl).e5y = function (fontFamily, fontWeight, fontStyle, fontSynthesis) {
    return resolve(this, new TypefaceRequest(this.v5x_1.f5y(fontFamily), this.v5x_1.g5y(fontWeight), this.v5x_1.h5y(fontStyle), this.v5x_1.i5y(fontSynthesis), this.u5x_1.j5y()));
  };
  function PlatformResolveInterceptor$Companion$Default$1() {
  }
  function Companion_4() {
    Companion_instance_5 = this;
    var tmp = this;
    tmp.d5y_1 = new PlatformResolveInterceptor$Companion$Default$1();
  }
  var Companion_instance_5;
  function Companion_getInstance_18() {
    if (Companion_instance_5 == null)
      new Companion_4();
    return Companion_instance_5;
  }
  function PlatformResolveInterceptor() {
  }
  var properties_initialized_FontFamilyResolver_kt_43uw85;
  function _init_properties_FontFamilyResolver_kt__lawdt3() {
    if (!properties_initialized_FontFamilyResolver_kt_43uw85) {
      properties_initialized_FontFamilyResolver_kt_43uw85 = true;
      GlobalTypefaceRequestCache = new TypefaceRequestCache();
      GlobalAsyncTypefaceCache = new AsyncTypefaceCache();
      androidx_compose_ui_text_font_FontFamilyResolverImpl$stable = 8;
      androidx_compose_ui_text_font_TypefaceRequest$stable = 8;
      androidx_compose_ui_text_font_TypefaceResult_Immutable$stable = 0;
      androidx_compose_ui_text_font_TypefaceResult_Async$stable = 0;
      androidx_compose_ui_text_font_TypefaceRequestCache$stable = 8;
    }
  }
  var androidx_compose_ui_text_font_FontListFontFamilyTypefaceAdapter$stable;
  var androidx_compose_ui_text_font_AsyncFontListLoader$stable;
  var androidx_compose_ui_text_font_AsyncTypefaceCache_Key$stable;
  var androidx_compose_ui_text_font_AsyncTypefaceCache$stable;
  function _AsyncTypefaceResult___init__impl__h4msax(result) {
    return result;
  }
  function _AsyncTypefaceResult___get_result__impl__kpcqqb($this) {
    return $this;
  }
  function _AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca($this) {
    return _AsyncTypefaceResult___get_result__impl__kpcqqb($this) == null;
  }
  function AsyncTypefaceResult__toString_impl_imltdd($this) {
    return 'AsyncTypefaceResult(result=' + toString($this) + ')';
  }
  function AsyncTypefaceResult__hashCode_impl_34k3fi($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function AsyncTypefaceResult__equals_impl_4qqxz2($this, other) {
    if (!(other instanceof AsyncTypefaceResult))
      return false;
    var tmp0_other_with_cast = other.k5y_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function AsyncTypefaceResult(result) {
    this.k5y_1 = result;
  }
  protoOf(AsyncTypefaceResult).toString = function () {
    return AsyncTypefaceResult__toString_impl_imltdd(this.k5y_1);
  };
  protoOf(AsyncTypefaceResult).hashCode = function () {
    return AsyncTypefaceResult__hashCode_impl_34k3fi(this.k5y_1);
  };
  protoOf(AsyncTypefaceResult).equals = function (other) {
    return AsyncTypefaceResult__equals_impl_4qqxz2(this.k5y_1, other);
  };
  function Key(font, loaderKey) {
    this.l5y_1 = font;
    this.m5y_1 = loaderKey;
  }
  protoOf(Key).toString = function () {
    return 'Key(font=' + toString_0(this.l5y_1) + ', loaderKey=' + toString(this.m5y_1) + ')';
  };
  protoOf(Key).hashCode = function () {
    var result = hashCode(this.l5y_1);
    result = imul(result, 31) + (this.m5y_1 == null ? 0 : hashCode(this.m5y_1)) | 0;
    return result;
  };
  protoOf(Key).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Key))
      return false;
    if (!equals(this.l5y_1, other.l5y_1))
      return false;
    if (!equals(this.m5y_1, other.m5y_1))
      return false;
    return true;
  };
  function access$_get_resultCache__u960s4($this) {
    return $this.o5y_1;
  }
  function access$_get_permanentCache__bpfryv($this) {
    return $this.p5y_1;
  }
  function access$_get_cacheLock__y7hpng($this) {
    return $this.q5y_1;
  }
  function $runCachedCOROUTINE$(_this__u8e3s4, font, platformFontLoader, forever, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.z5y_1 = _this__u8e3s4;
    this.a5z_1 = font;
    this.b5z_1 = platformFontLoader;
    this.c5z_1 = forever;
    this.d5z_1 = block;
  }
  protoOf($runCachedCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.e5z_1 = new Key(this.a5z_1, this.b5z_1.j5y());
            this.z5y_1.q5y_1;
            var tmp0_elvis_lhs = this.z5y_1.o5y_1.ll(this.e5z_1);
            var priorResult = tmp0_elvis_lhs == null ? this.z5y_1.p5y_1.u1(this.e5z_1) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              return _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.k5y_1);
            }

            this.l8_1 = 1;
            suspendResult = this.d5z_1(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            var this_0 = suspendResult;
            this.z5y_1.q5y_1;
            if (this_0 == null) {
              this.z5y_1.p5y_1.wn(this.e5z_1, new AsyncTypefaceResult(this.z5y_1.n5y_1));
            } else if (this.c5z_1) {
              this.z5y_1.p5y_1.wn(this.e5z_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            } else {
              this.z5y_1.o5y_1.ol(this.e5z_1, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(this_0)));
            }

            return this_0;
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
  function AsyncTypefaceCache() {
    this.n5y_1 = _AsyncTypefaceResult___init__impl__h4msax(null);
    this.o5y_1 = new LruCache(16);
    this.p5y_1 = mutableScatterMapOf();
    var tmp = this;
    // Inline function 'androidx.compose.ui.text.platform.makeSynchronizedObject' call
    tmp.q5y_1 = new SynchronizedObject();
  }
  protoOf(AsyncTypefaceCache).f5z = function (font, platformFontLoader, result, forever) {
    var key = new Key(font, platformFontLoader.j5y());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q5y_1;
    var tmp;
    if (result == null) {
      this.p5y_1.wn(key, new AsyncTypefaceResult(this.n5y_1));
      tmp = Unit_instance;
    } else if (forever) {
      this.p5y_1.wn(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
      tmp = Unit_instance;
    } else {
      tmp = this.o5y_1.ol(key, new AsyncTypefaceResult(_AsyncTypefaceResult___init__impl__h4msax(result)));
    }
  };
  protoOf(AsyncTypefaceCache).g5z = function (font, platformFontLoader, result, forever, $super) {
    forever = forever === VOID ? false : forever;
    var tmp;
    if ($super === VOID) {
      this.f5z(font, platformFontLoader, result, forever);
      tmp = Unit_instance;
    } else {
      tmp = $super.f5z.call(this, font, platformFontLoader, result, forever);
    }
    return tmp;
  };
  protoOf(AsyncTypefaceCache).h5z = function (font, platformFontLoader) {
    var key = new Key(font, platformFontLoader.j5y());
    // Inline function 'androidx.compose.ui.text.platform.synchronized' call
    // Inline function 'kotlinx.atomicfu.locks.synchronized' call
    this.q5y_1;
    var tmp0_elvis_lhs = this.o5y_1.ll(key);
    return tmp0_elvis_lhs == null ? this.p5y_1.u1(key) : tmp0_elvis_lhs;
  };
  protoOf(AsyncTypefaceCache).i5z = function (font, platformFontLoader, forever, block, $completion) {
    var tmp = new $runCachedCOROUTINE$(this, font, platformFontLoader, forever, block, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  function _set_value__lx0xdg($this, _set____db54di) {
    var tmp0 = $this.s5x_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function AsyncFontListLoader$_get_value_$ref_okp6ex() {
    return constructCallableReference(function (p0) {
      return p0.r1();
    }, 1, 0, 18);
  }
  function AsyncFontListLoader$_set_value_$ref_h5kf5n() {
    return constructCallableReference(function (p0, p1) {
      _set_value__lx0xdg(p0, p1);
      return Unit_instance;
    }, 2, 0, 19);
  }
  function AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation) {
    this.r5z_1 = this$0;
    this.s5z_1 = $font;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$load$slambda).t5z = function ($completion) {
    var tmp = this.d1n($completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AsyncFontListLoader$load$slambda).e1n = function ($completion) {
    return this.t5z($completion);
  };
  protoOf(AsyncFontListLoader$load$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.r5z_1.u5z(this.s5z_1, this);
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
  protoOf(AsyncFontListLoader$load$slambda).d1n = function (completion) {
    return new AsyncFontListLoader$load$slambda(this.r5z_1, this.s5z_1, completion);
  };
  function AsyncFontListLoader$load$slambda_0(this$0, $font, resultContinuation) {
    var i = new AsyncFontListLoader$load$slambda(this$0, $font, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.t5z($completion);
    }, 0);
  }
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    this.d60_1 = this$0;
    this.e60_1 = $this_loadWithTimeoutOrNull;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).g60 = function ($this$withTimeoutOrNull, $completion) {
    var tmp = this.q1k($this$withTimeoutOrNull, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).d9 = function (p1, $completion) {
    return this.g60((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.d60_1.r5x_1.h60(this.e60_1, this);
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
  protoOf(AsyncFontListLoader$loadWithTimeoutOrNull$slambda).q1k = function ($this$withTimeoutOrNull, completion) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this.d60_1, this.e60_1, completion);
    i.f60_1 = $this$withTimeoutOrNull;
    return i;
  };
  function AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this$0, $this_loadWithTimeoutOrNull, resultContinuation) {
    var i = new AsyncFontListLoader$loadWithTimeoutOrNull$slambda(this$0, $this_loadWithTimeoutOrNull, resultContinuation);
    return constructCallableReference(function ($this$withTimeoutOrNull, $completion) {
      return i.g60($this$withTimeoutOrNull, $completion);
    }, 1);
  }
  function $loadCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q60_1 = _this__u8e3s4;
  }
  protoOf($loadCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 12;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.l8_1 = 2;
            continue $sm;
          case 2:
            this.m8_1 = 11;
            this.s60_1 = this.q60_1.n5x_1;
            this.t60_1 = get_indices(this.s60_1).i();
            this.l8_1 = 3;
            continue $sm;
          case 3:
            if (!this.t60_1.j()) {
              this.l8_1 = 9;
              continue $sm;
            }

            var index = this.t60_1.k();
            var item = this.s60_1.m(index);
            this.r60_1 = item;
            if (this.r60_1.p5w() === Companion_getInstance_20().s5w_1) {
              this.l8_1 = 4;
              suspendResult = this.q60_1.p5x_1.i5z(this.r60_1, this.q60_1.r5x_1, false, AsyncFontListLoader$load$slambda_0(this.q60_1, this.r60_1, null), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 7;
              continue $sm;
            }

          case 4:
            var typeface = suspendResult;
            if (!(typeface == null)) {
              _set_value__lx0xdg(this.q60_1, synthesizeTypeface(this.q60_1.o5x_1.g5x_1, typeface, this.r60_1, this.q60_1.o5x_1.e5x_1, this.q60_1.o5x_1.f5x_1));
              this.m8_1 = 12;
              this.l8_1 = 8;
              continue $sm;
            } else {
              this.l8_1 = 5;
              suspendResult = yield_0(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 5:
            this.l8_1 = 6;
            continue $sm;
          case 6:
            this.l8_1 = 7;
            continue $sm;
          case 7:
            this.l8_1 = 3;
            continue $sm;
          case 8:
            this.m8_1 = 12;
            var shouldCache = get_isActive(this.r8());
            this.q60_1.t5x_1 = false;
            this.q60_1.q5x_1(new Immutable(this.q60_1.r1(), shouldCache));
            return Unit_instance;
          case 9:
            this.m8_1 = 12;
            this.l8_1 = 10;
            continue $sm;
          case 10:
            this.m8_1 = 12;
            var shouldCache_0 = get_isActive(this.r8());
            this.q60_1.t5x_1 = false;
            this.q60_1.q5x_1(new Immutable(this.q60_1.r1(), shouldCache_0));
            return Unit_instance;
          case 11:
            this.m8_1 = 12;
            var t = this.o8_1;
            var shouldCache_1 = get_isActive(this.r8());
            this.q60_1.t5x_1 = false;
            this.q60_1.q5x_1(new Immutable(this.q60_1.r1(), shouldCache_1));
            throw t;
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
  function $loadWithTimeoutOrNullCOROUTINE$(_this__u8e3s4, _this__u8e3s4_0, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c61_1 = _this__u8e3s4;
    this.d61_1 = _this__u8e3s4_0;
  }
  protoOf($loadWithTimeoutOrNullCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            this.m8_1 = 2;
            this.l8_1 = 1;
            var tmp_0 = new Long(15000, 0);
            suspendResult = withTimeoutOrNull(tmp_0, AsyncFontListLoader$loadWithTimeoutOrNull$slambda_0(this.c61_1, this.d61_1, null), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.e61_1 = suspendResult;
            this.m8_1 = 3;
            this.l8_1 = 4;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            var tmp_1 = this.o8_1;
            if (tmp_1 instanceof CancellationException) {
              var cancel = this.o8_1;
              var tmp_2 = this;
              var tmp_3;
              if (get_isActive(this.r8())) {
                tmp_3 = null;
              } else {
                throw cancel;
              }
              tmp_2.e61_1 = tmp_3;
              this.l8_1 = 4;
              continue $sm;
            } else {
              var tmp_4 = this.o8_1;
              if (tmp_4 instanceof Exception) {
                var uncaughtFontLoadException = this.o8_1;
                var tmp_5 = this;
                var tmp0_safe_receiver = this.r8().y8(Key_instance);
                if (tmp0_safe_receiver == null)
                  null;
                else {
                  tmp0_safe_receiver.s11(this.r8(), IllegalStateException_init_$Create$('Unable to load font ' + toString_0(this.d61_1), uncaughtFontLoadException));
                }
                tmp_5.e61_1 = null;
                this.l8_1 = 4;
                continue $sm;
              } else {
                throw this.o8_1;
              }
            }

          case 3:
            throw this.o8_1;
          case 4:
            this.m8_1 = 3;
            return this.e61_1;
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
  function AsyncFontListLoader(fontList, initialType, typefaceRequest, asyncTypefaceCache, onCompletion, platformFontLoader) {
    this.n5x_1 = fontList;
    this.o5x_1 = typefaceRequest;
    this.p5x_1 = asyncTypefaceCache;
    this.q5x_1 = onCompletion;
    this.r5x_1 = platformFontLoader;
    this.s5x_1 = mutableStateOf(initialType);
    this.t5x_1 = true;
  }
  protoOf(AsyncFontListLoader).r1 = function () {
    var tmp0 = this.s5x_1;
    var tmp = KMutableProperty1;
    var tmp_0 = AsyncFontListLoader$_get_value_$ref_okp6ex();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('value', 1, tmp, tmp_0, AsyncFontListLoader$_set_value_$ref_h5kf5n());
    return tmp0.r1();
  };
  protoOf(AsyncFontListLoader).f61 = function ($completion) {
    var tmp = new $loadCOROUTINE$(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(AsyncFontListLoader).u5z = function (_this__u8e3s4, $completion) {
    var tmp = new $loadWithTimeoutOrNullCOROUTINE$(this, _this__u8e3s4, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  function FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1() {
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1).s11 = function (context, exception) {
    return Unit_instance;
  };
  function Companion_5() {
    Companion_instance_6 = this;
    this.h61_1 = new FontMatcher();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.CoroutineExceptionHandler' call
    tmp.i61_1 = new FontListFontFamilyTypefaceAdapter$Companion$DropExceptionHandler$$inlined$CoroutineExceptionHandler$1();
  }
  var Companion_instance_6;
  function Companion_getInstance_19() {
    if (Companion_instance_6 == null)
      new Companion_5();
    return Companion_instance_6;
  }
  function FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation) {
    this.r61_1 = $asyncLoader;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.r61_1.f61(this);
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
  protoOf(FontListFontFamilyTypefaceAdapter$resolve$slambda).q1k = function ($this$launch, completion) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda(this.r61_1, completion);
    i.s61_1 = $this$launch;
    return i;
  };
  function FontListFontFamilyTypefaceAdapter$resolve$slambda_0($asyncLoader, resultContinuation) {
    var i = new FontListFontFamilyTypefaceAdapter$resolve$slambda($asyncLoader, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function FontListFontFamilyTypefaceAdapter(asyncTypefaceCache, injectedContext) {
    Companion_getInstance_19();
    asyncTypefaceCache = asyncTypefaceCache === VOID ? new AsyncTypefaceCache() : asyncTypefaceCache;
    injectedContext = injectedContext === VOID ? EmptyCoroutineContext_getInstance() : injectedContext;
    this.a5y_1 = asyncTypefaceCache;
    this.b5y_1 = CoroutineScope_0(Companion_getInstance_19().i61_1.ye(get_FontCacheManagementDispatcher()).ye(injectedContext).ye(SupervisorJob(injectedContext.y8(Key_instance_0))));
  }
  protoOf(FontListFontFamilyTypefaceAdapter).c5y = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.d5x_1;
    if (!(tmp instanceof FontListFontFamily))
      return null;
    var matched = Companion_getInstance_19().h61_1.t61(typefaceRequest.d5x_1.y5w_1, typefaceRequest.e5x_1, typefaceRequest.f5x_1);
    var _destruct__k2r9zo = firstImmediatelyAvailable(matched, typefaceRequest, this.a5y_1, platformFontLoader, createDefaultTypeface);
    var asyncFontsToLoad = _destruct__k2r9zo.sd();
    var synthesizedTypeface = _destruct__k2r9zo.td();
    if (asyncFontsToLoad == null)
      return new Immutable(synthesizedTypeface);
    var asyncLoader = new AsyncFontListLoader(asyncFontsToLoad, synthesizedTypeface, typefaceRequest, this.a5y_1, onAsyncCompletion, platformFontLoader);
    var tmp_0 = this.b5y_1;
    var tmp_1 = CoroutineStart_UNDISPATCHED_getInstance();
    launch(tmp_0, VOID, tmp_1, FontListFontFamilyTypefaceAdapter$resolve$slambda_0(asyncLoader, null));
    return new Async(asyncLoader);
  };
  function firstImmediatelyAvailable(_this__u8e3s4, typefaceRequest, asyncTypefaceCache, platformFontLoader, createDefaultTypeface) {
    var asyncFontsToLoad = null;
    var inductionVariable = 0;
    var last = _this__u8e3s4.l() - 1 | 0;
    if (inductionVariable <= last)
      $l$loop: do {
        var idx = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var font = _this__u8e3s4.m(idx);
        var tmp0_subject = font.p5w();
        if (tmp0_subject === Companion_getInstance_20().q5w_1) {
          var tmp$ret$0;
          $l$block: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key = new Key(font, platformFontLoader.j5y());
            var tmp0_elvis_lhs = access$_get_resultCache__u960s4(asyncTypefaceCache).ll(key);
            var priorResult = tmp0_elvis_lhs == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).u1(key) : tmp0_elvis_lhs;
            if (!(priorResult == null)) {
              tmp$ret$0 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult.k5y_1);
              break $l$block;
            }
            var tmp;
            try {
              tmp = platformFontLoader.u61(font);
            } catch ($p) {
              var tmp_0;
              if ($p instanceof Exception) {
                var cause = $p;
                tmp_0 = createDefaultTypeface(typefaceRequest);
              } else {
                throw $p;
              }
              tmp = tmp_0;
            }
            // Inline function 'kotlin.also' call
            var this_0 = tmp;
            asyncTypefaceCache.g5z(font, platformFontLoader, this_0);
            tmp$ret$0 = this_0;
          }
          var tmp1_elvis_lhs = tmp$ret$0;
          var result = tmp1_elvis_lhs == null ? createDefaultTypeface(typefaceRequest) : tmp1_elvis_lhs;
          return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.g5x_1, result, font, typefaceRequest.e5x_1, typefaceRequest.f5x_1));
        } else if (tmp0_subject === Companion_getInstance_20().r5w_1) {
          var tmp$ret$7;
          $l$block_0: {
            // Inline function 'androidx.compose.ui.text.font.AsyncTypefaceCache.runCachedBlocking' call
            // Inline function 'androidx.compose.ui.text.platform.synchronized' call
            // Inline function 'kotlinx.atomicfu.locks.synchronized' call
            access$_get_cacheLock__y7hpng(asyncTypefaceCache);
            var key_0 = new Key(font, platformFontLoader.j5y());
            var tmp0_elvis_lhs_0 = access$_get_resultCache__u960s4(asyncTypefaceCache).ll(key_0);
            var priorResult_0 = tmp0_elvis_lhs_0 == null ? access$_get_permanentCache__bpfryv(asyncTypefaceCache).u1(key_0) : tmp0_elvis_lhs_0;
            if (!(priorResult_0 == null)) {
              tmp$ret$7 = _AsyncTypefaceResult___get_result__impl__kpcqqb(priorResult_0.k5y_1);
              break $l$block_0;
            }
            // Inline function 'kotlin.runCatching' call
            var tmp_1;
            try {
              // Inline function 'kotlin.Companion.success' call
              var value = platformFontLoader.u61(font);
              tmp_1 = _Result___init__impl__xyqfz8(value);
            } catch ($p_0) {
              var tmp_2;
              if ($p_0 instanceof Error) {
                var e = $p_0;
                // Inline function 'kotlin.Companion.failure' call
                tmp_2 = _Result___init__impl__xyqfz8(createFailure(e));
              } else {
                throw $p_0;
              }
              tmp_1 = tmp_2;
            }
            // Inline function 'kotlin.Result.getOrNull' call
            var this_1 = tmp_1;
            // Inline function 'kotlin.also' call
            var this_2 = _Result___get_isFailure__impl__jpiriv(this_1) ? null : _Result___get_value__impl__bjfvqg(this_1);
            asyncTypefaceCache.g5z(font, platformFontLoader, this_2);
            tmp$ret$7 = this_2;
          }
          var result_0 = tmp$ret$7;
          if (!(result_0 == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.g5x_1, result_0, font, typefaceRequest.e5x_1, typefaceRequest.f5x_1));
          }
        } else if (tmp0_subject === Companion_getInstance_20().s5w_1) {
          var cacheResult = asyncTypefaceCache.h5z(font, platformFontLoader);
          if (cacheResult == null) {
            if (asyncFontsToLoad == null) {
              asyncFontsToLoad = mutableListOf([font]);
            } else {
              asyncFontsToLoad.g(font);
            }
          } else if (_AsyncTypefaceResult___get_isPermanentFailure__impl__sthpca(cacheResult.k5y_1)) {
            continue $l$loop;
          } else if (!(_AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.k5y_1) == null)) {
            return to(asyncFontsToLoad, synthesizeTypeface(typefaceRequest.g5x_1, _AsyncTypefaceResult___get_result__impl__kpcqqb(cacheResult.k5y_1), font, typefaceRequest.e5x_1, typefaceRequest.f5x_1));
          }
        } else
          throw IllegalStateException_init_$Create$_0('Unknown font type ' + toString_0(font));
      }
       while (inductionVariable <= last);
    var fallbackTypeface = createDefaultTypeface(typefaceRequest);
    return to(asyncFontsToLoad, fallbackTypeface);
  }
  function _FontLoadingStrategy___init__impl__if1sp3(value) {
    return value;
  }
  function _FontLoadingStrategy___get_value__impl__ggsl83($this) {
    return $this;
  }
  function FontLoadingStrategy__toString_impl_fx0z8f($this) {
    return $this === Companion_getInstance_20().q5w_1 ? 'Blocking' : $this === Companion_getInstance_20().r5w_1 ? 'Optional' : $this === Companion_getInstance_20().s5w_1 ? 'Async' : 'Invalid(value=' + _FontLoadingStrategy___get_value__impl__ggsl83($this) + ')';
  }
  function Companion_6() {
    Companion_instance_7 = this;
    this.q5w_1 = _FontLoadingStrategy___init__impl__if1sp3(0);
    this.r5w_1 = _FontLoadingStrategy___init__impl__if1sp3(1);
    this.s5w_1 = _FontLoadingStrategy___init__impl__if1sp3(2);
  }
  var Companion_instance_7;
  function Companion_getInstance_20() {
    if (Companion_instance_7 == null)
      new Companion_6();
    return Companion_instance_7;
  }
  var androidx_compose_ui_text_font_FontMatcher$stable;
  function FontMatcher() {
  }
  protoOf(FontMatcher).t61 = function (fontList, fontWeight, fontStyle) {
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target = ArrayList_init_$Create$_0(fontList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = fontList.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = fontList.m(index);
        if (item.t4f().equals(fontWeight) && item.o5w() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target.g(item);
        }
      }
       while (inductionVariable <= last);
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.collections.isNotEmpty' call
    if (!target.n()) {
      return target;
    }
    // Inline function 'androidx.compose.ui.util.fastFilter' call
    var target_0 = ArrayList_init_$Create$_0(fontList.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = fontList.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = fontList.m(index_0);
        if (item_0.o5w() === fontStyle) {
          // Inline function 'kotlin.collections.plusAssign' call
          target_0.g(item_0);
        }
      }
       while (inductionVariable_0 <= last_0);
    // Inline function 'kotlin.collections.ifEmpty' call
    var tmp;
    if (target_0.n()) {
      tmp = fontList;
    } else {
      tmp = target_0;
    }
    var fontsToSearch = tmp;
    var tmp_0;
    if (fontWeight.v61(Companion_getInstance_23().y5s_1) < 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove = null;
      var bestWeightBelow = null;
      var inductionVariable_1 = 0;
      var last_1 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_1 <= last_1)
        $l$loop_1: do {
          var index_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          var font = fontsToSearch.m(index_1);
          var possibleWeight = font.t4f();
          if (!(null == null) && possibleWeight.v61(null) < 0) {
            continue $l$loop_1;
          }
          if (!(null == null) && possibleWeight.v61(null) > 0) {
            continue $l$loop_1;
          }
          if (possibleWeight.v61(fontWeight) < 0) {
            if (bestWeightBelow == null || possibleWeight.v61(bestWeightBelow) > 0) {
              bestWeightBelow = possibleWeight;
            }
          } else if (possibleWeight.v61(fontWeight) > 0) {
            if (bestWeightAbove == null || possibleWeight.v61(bestWeightAbove) < 0) {
              bestWeightAbove = possibleWeight;
            }
          } else {
            bestWeightAbove = possibleWeight;
            bestWeightBelow = possibleWeight;
            break $l$loop_1;
          }
        }
         while (inductionVariable_1 <= last_1);
      var tmp_1;
      if (true) {
        var tmp0_elvis_lhs = bestWeightBelow;
        tmp_1 = tmp0_elvis_lhs == null ? bestWeightAbove : tmp0_elvis_lhs;
      } else {
        var tmp1_elvis_lhs = bestWeightAbove;
        tmp_1 = tmp1_elvis_lhs == null ? bestWeightBelow : tmp1_elvis_lhs;
      }
      var bestWeight = tmp_1;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_1 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_2 = 0;
      var last_2 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_2 <= last_2)
        do {
          var index_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var item_1 = fontsToSearch.m(index_2);
          if (item_1.t4f().equals(bestWeight)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_1.g(item_1);
          }
        }
         while (inductionVariable_2 <= last_2);
      tmp_0 = target_1;
    } else if (fontWeight.v61(Companion_getInstance_23().z5s_1) > 0) {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var bestWeightAbove_0 = null;
      var bestWeightBelow_0 = null;
      var inductionVariable_3 = 0;
      var last_3 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_3 <= last_3)
        $l$loop_4: do {
          var index_3 = inductionVariable_3;
          inductionVariable_3 = inductionVariable_3 + 1 | 0;
          var font_0 = fontsToSearch.m(index_3);
          var possibleWeight_0 = font_0.t4f();
          if (!(null == null) && possibleWeight_0.v61(null) < 0) {
            continue $l$loop_4;
          }
          if (!(null == null) && possibleWeight_0.v61(null) > 0) {
            continue $l$loop_4;
          }
          if (possibleWeight_0.v61(fontWeight) < 0) {
            if (bestWeightBelow_0 == null || possibleWeight_0.v61(bestWeightBelow_0) > 0) {
              bestWeightBelow_0 = possibleWeight_0;
            }
          } else if (possibleWeight_0.v61(fontWeight) > 0) {
            if (bestWeightAbove_0 == null || possibleWeight_0.v61(bestWeightAbove_0) < 0) {
              bestWeightAbove_0 = possibleWeight_0;
            }
          } else {
            bestWeightAbove_0 = possibleWeight_0;
            bestWeightBelow_0 = possibleWeight_0;
            break $l$loop_4;
          }
        }
         while (inductionVariable_3 <= last_3);
      var tmp_2;
      if (false) {
        var tmp0_elvis_lhs_0 = bestWeightBelow_0;
        tmp_2 = tmp0_elvis_lhs_0 == null ? bestWeightAbove_0 : tmp0_elvis_lhs_0;
      } else {
        var tmp1_elvis_lhs_0 = bestWeightAbove_0;
        tmp_2 = tmp1_elvis_lhs_0 == null ? bestWeightBelow_0 : tmp1_elvis_lhs_0;
      }
      var bestWeight_0 = tmp_2;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_2 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_4 = 0;
      var last_4 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_4 <= last_4)
        do {
          var index_4 = inductionVariable_4;
          inductionVariable_4 = inductionVariable_4 + 1 | 0;
          var item_2 = fontsToSearch.m(index_4);
          if (item_2.t4f().equals(bestWeight_0)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_2.g(item_2);
          }
        }
         while (inductionVariable_4 <= last_4);
      tmp_0 = target_2;
    } else {
      // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
      var maxSearchRange = Companion_getInstance_23().z5s_1;
      var bestWeightAbove_1 = null;
      var bestWeightBelow_1 = null;
      var inductionVariable_5 = 0;
      var last_5 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_5 <= last_5)
        $l$loop_7: do {
          var index_5 = inductionVariable_5;
          inductionVariable_5 = inductionVariable_5 + 1 | 0;
          var font_1 = fontsToSearch.m(index_5);
          var possibleWeight_1 = font_1.t4f();
          if (!(null == null) && possibleWeight_1.v61(null) < 0) {
            continue $l$loop_7;
          }
          if (!(maxSearchRange == null) && possibleWeight_1.v61(maxSearchRange) > 0) {
            continue $l$loop_7;
          }
          if (possibleWeight_1.v61(fontWeight) < 0) {
            if (bestWeightBelow_1 == null || possibleWeight_1.v61(bestWeightBelow_1) > 0) {
              bestWeightBelow_1 = possibleWeight_1;
            }
          } else if (possibleWeight_1.v61(fontWeight) > 0) {
            if (bestWeightAbove_1 == null || possibleWeight_1.v61(bestWeightAbove_1) < 0) {
              bestWeightAbove_1 = possibleWeight_1;
            }
          } else {
            bestWeightAbove_1 = possibleWeight_1;
            bestWeightBelow_1 = possibleWeight_1;
            break $l$loop_7;
          }
        }
         while (inductionVariable_5 <= last_5);
      var tmp_3;
      if (false) {
        var tmp0_elvis_lhs_1 = bestWeightBelow_1;
        tmp_3 = tmp0_elvis_lhs_1 == null ? bestWeightAbove_1 : tmp0_elvis_lhs_1;
      } else {
        var tmp1_elvis_lhs_1 = bestWeightAbove_1;
        tmp_3 = tmp1_elvis_lhs_1 == null ? bestWeightBelow_1 : tmp1_elvis_lhs_1;
      }
      var bestWeight_1 = tmp_3;
      // Inline function 'androidx.compose.ui.util.fastFilter' call
      var target_3 = ArrayList_init_$Create$_0(fontsToSearch.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable_6 = 0;
      var last_6 = fontsToSearch.l() - 1 | 0;
      if (inductionVariable_6 <= last_6)
        do {
          var index_6 = inductionVariable_6;
          inductionVariable_6 = inductionVariable_6 + 1 | 0;
          var item_3 = fontsToSearch.m(index_6);
          if (item_3.t4f().equals(bestWeight_1)) {
            // Inline function 'kotlin.collections.plusAssign' call
            target_3.g(item_3);
          }
        }
         while (inductionVariable_6 <= last_6);
      // Inline function 'kotlin.collections.ifEmpty' call
      var tmp_4;
      if (target_3.n()) {
        // Inline function 'androidx.compose.ui.text.font.FontMatcher.filterByClosestWeight' call
        var minSearchRange = Companion_getInstance_23().z5s_1;
        var bestWeightAbove_2 = null;
        var bestWeightBelow_2 = null;
        var inductionVariable_7 = 0;
        var last_7 = fontsToSearch.l() - 1 | 0;
        if (inductionVariable_7 <= last_7)
          $l$loop_10: do {
            var index_7 = inductionVariable_7;
            inductionVariable_7 = inductionVariable_7 + 1 | 0;
            var font_2 = fontsToSearch.m(index_7);
            var possibleWeight_2 = font_2.t4f();
            if (!(minSearchRange == null) && possibleWeight_2.v61(minSearchRange) < 0) {
              continue $l$loop_10;
            }
            if (!(null == null) && possibleWeight_2.v61(null) > 0) {
              continue $l$loop_10;
            }
            if (possibleWeight_2.v61(fontWeight) < 0) {
              if (bestWeightBelow_2 == null || possibleWeight_2.v61(bestWeightBelow_2) > 0) {
                bestWeightBelow_2 = possibleWeight_2;
              }
            } else if (possibleWeight_2.v61(fontWeight) > 0) {
              if (bestWeightAbove_2 == null || possibleWeight_2.v61(bestWeightAbove_2) < 0) {
                bestWeightAbove_2 = possibleWeight_2;
              }
            } else {
              bestWeightAbove_2 = possibleWeight_2;
              bestWeightBelow_2 = possibleWeight_2;
              break $l$loop_10;
            }
          }
           while (inductionVariable_7 <= last_7);
        var tmp_5;
        if (false) {
          var tmp0_elvis_lhs_2 = bestWeightBelow_2;
          tmp_5 = tmp0_elvis_lhs_2 == null ? bestWeightAbove_2 : tmp0_elvis_lhs_2;
        } else {
          var tmp1_elvis_lhs_2 = bestWeightAbove_2;
          tmp_5 = tmp1_elvis_lhs_2 == null ? bestWeightBelow_2 : tmp1_elvis_lhs_2;
        }
        var bestWeight_2 = tmp_5;
        // Inline function 'androidx.compose.ui.util.fastFilter' call
        var target_4 = ArrayList_init_$Create$_0(fontsToSearch.l());
        // Inline function 'androidx.compose.ui.util.fastForEach' call
        var inductionVariable_8 = 0;
        var last_8 = fontsToSearch.l() - 1 | 0;
        if (inductionVariable_8 <= last_8)
          do {
            var index_8 = inductionVariable_8;
            inductionVariable_8 = inductionVariable_8 + 1 | 0;
            var item_4 = fontsToSearch.m(index_8);
            if (item_4.t4f().equals(bestWeight_2)) {
              // Inline function 'kotlin.collections.plusAssign' call
              target_4.g(item_4);
            }
          }
           while (inductionVariable_8 <= last_8);
        tmp_4 = target_4;
      } else {
        tmp_4 = target_3;
      }
      tmp_0 = tmp_4;
    }
    var result = tmp_0;
    return result;
  };
  function _FontStyle___init__impl__jcnduf(value) {
    return value;
  }
  function _FontStyle___get_value__impl__gx8aaz($this) {
    return $this;
  }
  function FontStyle__toString_impl_thncxr($this) {
    return $this === Companion_getInstance_21().o5t_1 ? 'Normal' : $this === Companion_getInstance_21().p5t_1 ? 'Italic' : 'Invalid';
  }
  function Companion_7() {
    Companion_instance_8 = this;
    this.o5t_1 = _FontStyle___init__impl__jcnduf(0);
    this.p5t_1 = _FontStyle___init__impl__jcnduf(1);
  }
  var Companion_instance_8;
  function Companion_getInstance_21() {
    if (Companion_instance_8 == null)
      new Companion_7();
    return Companion_instance_8;
  }
  function FontStyle__hashCode_impl_7qhg4w($this) {
    return $this;
  }
  function FontStyle__equals_impl_2zal3g($this, other) {
    if (!(other instanceof FontStyle))
      return false;
    if (!($this === other.j5r_1))
      return false;
    return true;
  }
  function FontStyle(value) {
    Companion_getInstance_21();
    this.j5r_1 = value;
  }
  protoOf(FontStyle).toString = function () {
    return FontStyle__toString_impl_thncxr(this.j5r_1);
  };
  protoOf(FontStyle).hashCode = function () {
    return FontStyle__hashCode_impl_7qhg4w(this.j5r_1);
  };
  protoOf(FontStyle).equals = function (other) {
    return FontStyle__equals_impl_2zal3g(this.j5r_1, other);
  };
  function _FontSynthesis___init__impl__n397bg(value) {
    return value;
  }
  function _FontSynthesis___get_value__impl__xrueqg($this) {
    return $this;
  }
  function FontSynthesis__toString_impl_gunvr0($this) {
    return $this === Companion_getInstance_22().q5t_1 ? 'None' : $this === Companion_getInstance_22().r5t_1 ? 'Weight' : $this === Companion_getInstance_22().s5t_1 ? 'Style' : $this === Companion_getInstance_22().t5t_1 ? 'All' : 'Invalid';
  }
  function Companion_8() {
    Companion_instance_9 = this;
    this.q5t_1 = _FontSynthesis___init__impl__n397bg(0);
    this.r5t_1 = _FontSynthesis___init__impl__n397bg(1);
    this.s5t_1 = _FontSynthesis___init__impl__n397bg(2);
    this.t5t_1 = _FontSynthesis___init__impl__n397bg(65535);
  }
  protoOf(Companion_8).w61 = function (value) {
    var tmp0;
    switch (value) {
      case 0:
      case 1:
      case 2:
        tmp0 = true;
        break;
      default:
        tmp0 = value === 65535;
        break;
    }
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!tmp0) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by FontSynthesis.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _FontSynthesis___init__impl__n397bg(value);
  };
  var Companion_instance_9;
  function Companion_getInstance_22() {
    if (Companion_instance_9 == null)
      new Companion_8();
    return Companion_instance_9;
  }
  function FontSynthesis__hashCode_impl_4wi11v($this) {
    return $this;
  }
  function FontSynthesis__equals_impl_zgu9mf($this, other) {
    if (!(other instanceof FontSynthesis))
      return false;
    if (!($this === other.k5r_1))
      return false;
    return true;
  }
  function FontSynthesis(value) {
    Companion_getInstance_22();
    this.k5r_1 = value;
  }
  protoOf(FontSynthesis).toString = function () {
    return FontSynthesis__toString_impl_gunvr0(this.k5r_1);
  };
  protoOf(FontSynthesis).hashCode = function () {
    return FontSynthesis__hashCode_impl_4wi11v(this.k5r_1);
  };
  protoOf(FontSynthesis).equals = function (other) {
    return FontSynthesis__equals_impl_zgu9mf(this.k5r_1, other);
  };
  var androidx_compose_ui_text_font_FontVariation_Settings$stable;
  var androidx_compose_ui_text_font_FontVariation$stable;
  var androidx_compose_ui_text_font_FontWeight$stable;
  function Companion_9() {
    Companion_instance_10 = this;
    this.v5s_1 = new FontWeight(100);
    this.w5s_1 = new FontWeight(200);
    this.x5s_1 = new FontWeight(300);
    this.y5s_1 = new FontWeight(400);
    this.z5s_1 = new FontWeight(500);
    this.a5t_1 = new FontWeight(600);
    this.b5t_1 = new FontWeight(700);
    this.c5t_1 = new FontWeight(800);
    this.d5t_1 = new FontWeight(900);
    this.e5t_1 = this.v5s_1;
    this.f5t_1 = this.w5s_1;
    this.g5t_1 = this.x5s_1;
    this.h5t_1 = this.y5s_1;
    this.i5t_1 = this.z5s_1;
    this.j5t_1 = this.a5t_1;
    this.k5t_1 = this.b5t_1;
    this.l5t_1 = this.c5t_1;
    this.m5t_1 = this.d5t_1;
    this.n5t_1 = listOf([this.v5s_1, this.w5s_1, this.x5s_1, this.y5s_1, this.z5s_1, this.a5t_1, this.b5t_1, this.c5t_1, this.d5t_1]);
  }
  var Companion_instance_10;
  function Companion_getInstance_23() {
    if (Companion_instance_10 == null)
      new Companion_9();
    return Companion_instance_10;
  }
  function FontWeight(weight) {
    Companion_getInstance_23();
    this.v5r_1 = weight;
    var containsArg = this.v5r_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(1 <= containsArg ? containsArg <= 1000 : false)) {
      var tmp$ret$1 = 'Font weight can be in range [1, 1000]. Current value: ' + this.v5r_1;
      throwIllegalArgumentException(tmp$ret$1);
    }
  }
  protoOf(FontWeight).v61 = function (other) {
    return compareTo(this.v5r_1, other.v5r_1);
  };
  protoOf(FontWeight).d = function (other) {
    return this.v61(other instanceof FontWeight ? other : THROW_CCE());
  };
  protoOf(FontWeight).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FontWeight))
      return false;
    if (!(this.v5r_1 === other.v5r_1))
      return false;
    return true;
  };
  protoOf(FontWeight).hashCode = function () {
    return this.v5r_1;
  };
  protoOf(FontWeight).toString = function () {
    return 'FontWeight(weight=' + this.v5r_1 + ')';
  };
  var androidx_compose_ui_text_input_CommitTextCommand$stable;
  var androidx_compose_ui_text_input_SetComposingRegionCommand$stable;
  var androidx_compose_ui_text_input_SetComposingTextCommand$stable;
  var androidx_compose_ui_text_input_DeleteSurroundingTextCommand$stable;
  var androidx_compose_ui_text_input_DeleteSurroundingTextInCodePointsCommand$stable;
  var androidx_compose_ui_text_input_SetSelectionCommand$stable;
  var androidx_compose_ui_text_input_FinishComposingTextCommand$stable;
  var androidx_compose_ui_text_input_BackspaceCommand$stable;
  var androidx_compose_ui_text_input_MoveCursorCommand$stable;
  var androidx_compose_ui_text_input_DeleteAllCommand$stable;
  var androidx_compose_ui_text_input_EditProcessor$stable;
  var androidx_compose_ui_text_input_EditingBuffer$stable;
  var androidx_compose_ui_text_input_PartialGapBuffer$stable;
  var androidx_compose_ui_text_input_ImeOptions$stable;
  var androidx_compose_ui_text_input_TextFieldValue$stable;
  var androidx_compose_ui_text_input_TextInputService$stable;
  var androidx_compose_ui_text_input_TextInputSession$stable;
  function TextInputService(platformTextInputService) {
    this.x61_1 = platformTextInputService;
    this.y61_1 = new AtomicReference(null);
  }
  var androidx_compose_ui_text_input_TransformedText$stable;
  var androidx_compose_ui_text_input_PasswordVisualTransformation$stable;
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$_0(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$_0(message);
  }
  var androidx_compose_ui_text_intl_LocaleList$stable;
  function Companion_10() {
    Companion_instance_11 = this;
    var tmp = this;
    // Inline function 'kotlin.collections.listOf' call
    var tmp$ret$0 = emptyList();
    tmp.e5u_1 = new LocaleList(tmp$ret$0);
  }
  protoOf(Companion_10).i1w = function () {
    return get_platformLocaleDelegate().i1w();
  };
  var Companion_instance_11;
  function Companion_getInstance_24() {
    if (Companion_instance_11 == null)
      new Companion_10();
    return Companion_instance_11;
  }
  function LocaleList(localeList) {
    Companion_getInstance_24();
    this.w5r_1 = localeList;
    this.x5r_1 = this.w5r_1.l();
  }
  protoOf(LocaleList).m = function (i) {
    return this.w5r_1.m(i);
  };
  protoOf(LocaleList).l = function () {
    return this.x5r_1;
  };
  protoOf(LocaleList).z61 = function (element) {
    return this.w5r_1.s(element);
  };
  protoOf(LocaleList).s = function (element) {
    if (!(element instanceof Locale))
      return false;
    return this.z61(element instanceof Locale ? element : THROW_CCE());
  };
  protoOf(LocaleList).n = function () {
    return this.w5r_1.n();
  };
  protoOf(LocaleList).i = function () {
    return this.w5r_1.i();
  };
  protoOf(LocaleList).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LocaleList))
      return false;
    if (!equals(this.w5r_1, other.w5r_1))
      return false;
    return true;
  };
  protoOf(LocaleList).hashCode = function () {
    return hashCode(this.w5r_1);
  };
  protoOf(LocaleList).toString = function () {
    return 'LocaleList(localeList=' + toString_0(this.w5r_1) + ')';
  };
  function get_platformLocaleDelegate() {
    _init_properties_PlatformLocale_kt__d5ixzh();
    return platformLocaleDelegate;
  }
  var platformLocaleDelegate;
  var properties_initialized_PlatformLocale_kt_ya8ii9;
  function _init_properties_PlatformLocale_kt__d5ixzh() {
    if (!properties_initialized_PlatformLocale_kt_ya8ii9) {
      properties_initialized_PlatformLocale_kt_ya8ii9 = true;
      platformLocaleDelegate = createPlatformLocaleDelegate();
    }
  }
  function get_FontCacheManagementDispatcher() {
    _init_properties_Dispatcher_kt__c4qz95();
    return FontCacheManagementDispatcher;
  }
  var FontCacheManagementDispatcher;
  var properties_initialized_Dispatcher_kt_c7cauv;
  function _init_properties_Dispatcher_kt__c4qz95() {
    if (!properties_initialized_Dispatcher_kt_c7cauv) {
      properties_initialized_Dispatcher_kt_c7cauv = true;
      FontCacheManagementDispatcher = Dispatchers_getInstance().x11();
    }
  }
  function _BaselineShift___init__impl__scj05g(multiplier) {
    return multiplier;
  }
  function _BaselineShift___get_multiplier__impl__qhmjek($this) {
    return $this;
  }
  function Companion_11() {
    Companion_instance_12 = this;
    this.z5t_1 = _BaselineShift___init__impl__scj05g(0.5);
    this.a5u_1 = _BaselineShift___init__impl__scj05g(-0.5);
    this.b5u_1 = _BaselineShift___init__impl__scj05g(0.0);
    this.c5u_1 = _BaselineShift___init__impl__scj05g(NaN);
  }
  var Companion_instance_12;
  function Companion_getInstance_25() {
    if (Companion_instance_12 == null)
      new Companion_11();
    return Companion_instance_12;
  }
  function BaselineShift__toString_impl_x98gcc($this) {
    return 'BaselineShift(multiplier=' + $this + ')';
  }
  function BaselineShift__hashCode_impl_g0potx($this) {
    return getNumberHashCode($this);
  }
  function BaselineShift__equals_impl_37wrjj($this, other) {
    if (!(other instanceof BaselineShift))
      return false;
    var tmp0_other_with_cast = other.l5r_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function BaselineShift(multiplier) {
    Companion_getInstance_25();
    this.l5r_1 = multiplier;
  }
  protoOf(BaselineShift).toString = function () {
    return BaselineShift__toString_impl_x98gcc(this.l5r_1);
  };
  protoOf(BaselineShift).hashCode = function () {
    return BaselineShift__hashCode_impl_g0potx(this.l5r_1);
  };
  protoOf(BaselineShift).equals = function (other) {
    return BaselineShift__equals_impl_37wrjj(this.l5r_1, other);
  };
  function _Hyphens___init__impl__m2cvg8(value) {
    return value;
  }
  function _Hyphens___get_value__impl__5itus4($this) {
    return $this;
  }
  function Companion_12() {
    Companion_instance_13 = this;
    this.t5p_1 = _Hyphens___init__impl__m2cvg8(1);
    this.u5p_1 = _Hyphens___init__impl__m2cvg8(2);
    this.v5p_1 = _Hyphens___init__impl__m2cvg8(0);
  }
  protoOf(Companion_12).a62 = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= value ? value <= 2 : false)) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by Hyphens.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _Hyphens___init__impl__m2cvg8(value);
  };
  var Companion_instance_13;
  function Companion_getInstance_26() {
    if (Companion_instance_13 == null)
      new Companion_12();
    return Companion_instance_13;
  }
  function Hyphens__toString_impl_ck1wg0($this) {
    return $this === Companion_getInstance_26().t5p_1 ? 'Hyphens.None' : $this === Companion_getInstance_26().u5p_1 ? 'Hyphens.Auto' : $this === Companion_getInstance_26().v5p_1 ? 'Hyphens.Unspecified' : 'Invalid';
  }
  function Hyphens__hashCode_impl_yb7t8v($this) {
    return $this;
  }
  function Hyphens__equals_impl_oqoi4t($this, other) {
    if (!(other instanceof Hyphens))
      return false;
    if (!($this === other.s5q_1))
      return false;
    return true;
  }
  function Hyphens(value) {
    Companion_getInstance_26();
    this.s5q_1 = value;
  }
  protoOf(Hyphens).toString = function () {
    return Hyphens__toString_impl_ck1wg0(this.s5q_1);
  };
  protoOf(Hyphens).hashCode = function () {
    return Hyphens__hashCode_impl_yb7t8v(this.s5q_1);
  };
  protoOf(Hyphens).equals = function (other) {
    return Hyphens__equals_impl_oqoi4t(this.s5q_1, other);
  };
  var androidx_compose_ui_text_style_LineHeightStyle$stable;
  function _Trim___init__impl__tcc1lr(value) {
    return value;
  }
  function _Trim___get_value__impl__o5eglp($this) {
    return $this;
  }
  function Trim__toString_impl_hxcm0x($this) {
    var tmp0_subject = _Trim___get_value__impl__o5eglp($this);
    return tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_27().d62_1) ? 'LineHeightStyle.Trim.FirstLineTop' : tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_27().e62_1) ? 'LineHeightStyle.Trim.LastLineBottom' : tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_27().f62_1) ? 'LineHeightStyle.Trim.Both' : tmp0_subject === _Trim___get_value__impl__o5eglp(Companion_getInstance_27().g62_1) ? 'LineHeightStyle.Trim.None' : 'Invalid';
  }
  function Companion_13() {
    Companion_instance_14 = this;
    this.b62_1 = 1;
    this.c62_1 = 16;
    this.d62_1 = _Trim___init__impl__tcc1lr(1);
    this.e62_1 = _Trim___init__impl__tcc1lr(16);
    this.f62_1 = _Trim___init__impl__tcc1lr(17);
    this.g62_1 = _Trim___init__impl__tcc1lr(0);
  }
  var Companion_instance_14;
  function Companion_getInstance_27() {
    if (Companion_instance_14 == null)
      new Companion_13();
    return Companion_instance_14;
  }
  function Trim__isTrimFirstLineTop_impl_tqdsaa($this) {
    return (_Trim___get_value__impl__o5eglp($this) & 1) > 0;
  }
  function Trim__isTrimLastLineBottom_impl_8k6x3e($this) {
    return (_Trim___get_value__impl__o5eglp($this) & 16) > 0;
  }
  function Trim__hashCode_impl_vclj5c($this) {
    return $this;
  }
  function Trim__equals_impl_6x7eks($this, other) {
    if (!(other instanceof Trim))
      return false;
    if (!($this === other.f5s_1))
      return false;
    return true;
  }
  function _Alignment___init__impl__it107q(topRatio) {
    var tmp;
    var containsArg = _Alignment___get_topRatio__impl__gg7tir(topRatio);
    if (0.0 <= containsArg ? containsArg <= 1.0 : false) {
      tmp = true;
    } else {
      tmp = _Alignment___get_topRatio__impl__gg7tir(topRatio) === -1.0;
    }
    // Inline function 'androidx.compose.ui.text.internal.checkPrecondition' call
    if (!tmp) {
      var tmp$ret$1 = 'topRatio should be in [0..1] range or -1';
      throwIllegalStateException(tmp$ret$1);
    }
    return topRatio;
  }
  function _Alignment___get_topRatio__impl__gg7tir($this) {
    return $this;
  }
  function Alignment__toString_impl_on6yhu($this) {
    var tmp0_subject = _Alignment___get_topRatio__impl__gg7tir($this);
    return tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().h62_1) ? 'LineHeightStyle.Alignment.Top' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().i62_1) ? 'LineHeightStyle.Alignment.Center' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().j62_1) ? 'LineHeightStyle.Alignment.Proportional' : tmp0_subject === _Alignment___get_topRatio__impl__gg7tir(Companion_getInstance_28().k62_1) ? 'LineHeightStyle.Alignment.Bottom' : 'LineHeightStyle.Alignment(topPercentage = ' + _Alignment___get_topRatio__impl__gg7tir($this) + ')';
  }
  function Companion_14() {
    Companion_instance_15 = this;
    this.h62_1 = _Alignment___init__impl__it107q(0.0);
    this.i62_1 = _Alignment___init__impl__it107q(0.5);
    this.j62_1 = _Alignment___init__impl__it107q(-1.0);
    this.k62_1 = _Alignment___init__impl__it107q(1.0);
  }
  var Companion_instance_15;
  function Companion_getInstance_28() {
    if (Companion_instance_15 == null)
      new Companion_14();
    return Companion_instance_15;
  }
  function Alignment__hashCode_impl_omr6of($this) {
    return getNumberHashCode($this);
  }
  function Alignment__equals_impl_9ve0tn($this, other) {
    if (!(other instanceof Alignment))
      return false;
    var tmp0_other_with_cast = other.e5s_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function _Mode___init__impl__3rgsrm(value) {
    return value;
  }
  function _Mode___get_value__impl__uitpda($this) {
    return $this;
  }
  function Mode__toString_impl_dwwrtq($this) {
    return $this === Companion_getInstance_29().l62_1 ? 'LineHeightStyle.Mode.Fixed' : $this === Companion_getInstance_29().m62_1 ? 'LineHeightStyle.Mode.Minimum' : $this === Companion_getInstance_29().n62_1 ? 'LineHeightStyle.Mode.Tight' : 'Invalid';
  }
  function Companion_15() {
    Companion_instance_16 = this;
    this.l62_1 = _Mode___init__impl__3rgsrm(0);
    this.m62_1 = _Mode___init__impl__3rgsrm(1);
    this.n62_1 = _Mode___init__impl__3rgsrm(2);
  }
  var Companion_instance_16;
  function Companion_getInstance_29() {
    if (Companion_instance_16 == null)
      new Companion_15();
    return Companion_instance_16;
  }
  function Mode__hashCode_impl_7u94z5($this) {
    return $this;
  }
  function Mode__equals_impl_uwixm3($this, other) {
    if (!(other instanceof Mode))
      return false;
    if (!($this === other.g5s_1))
      return false;
    return true;
  }
  function LineHeightStyle_init_$Init$(alignment, trim, $this) {
    LineHeightStyle.call($this, alignment, trim, Companion_getInstance_29().l62_1);
    return $this;
  }
  function LineHeightStyle_init_$Create$(alignment, trim) {
    return LineHeightStyle_init_$Init$(alignment, trim, objectCreate(protoOf(LineHeightStyle)));
  }
  function Companion_16() {
    Companion_instance_17 = this;
    this.o62_1 = new LineHeightStyle(Companion_getInstance_28().j62_1, Companion_getInstance_27().f62_1, Companion_getInstance_29().l62_1);
  }
  var Companion_instance_17;
  function Companion_getInstance_30() {
    if (Companion_instance_17 == null)
      new Companion_16();
    return Companion_instance_17;
  }
  function Trim(value) {
    Companion_getInstance_27();
    this.f5s_1 = value;
  }
  protoOf(Trim).toString = function () {
    return Trim__toString_impl_hxcm0x(this.f5s_1);
  };
  protoOf(Trim).hashCode = function () {
    return Trim__hashCode_impl_vclj5c(this.f5s_1);
  };
  protoOf(Trim).equals = function (other) {
    return Trim__equals_impl_6x7eks(this.f5s_1, other);
  };
  function Alignment(topRatio) {
    Companion_getInstance_28();
    this.e5s_1 = topRatio;
  }
  protoOf(Alignment).toString = function () {
    return Alignment__toString_impl_on6yhu(this.e5s_1);
  };
  protoOf(Alignment).hashCode = function () {
    return Alignment__hashCode_impl_omr6of(this.e5s_1);
  };
  protoOf(Alignment).equals = function (other) {
    return Alignment__equals_impl_9ve0tn(this.e5s_1, other);
  };
  function Mode(value) {
    Companion_getInstance_29();
    this.g5s_1 = value;
  }
  protoOf(Mode).toString = function () {
    return Mode__toString_impl_dwwrtq(this.g5s_1);
  };
  protoOf(Mode).hashCode = function () {
    return Mode__hashCode_impl_7u94z5(this.g5s_1);
  };
  protoOf(Mode).equals = function (other) {
    return Mode__equals_impl_uwixm3(this.g5s_1, other);
  };
  function LineHeightStyle(alignment, trim, mode) {
    Companion_getInstance_30();
    this.b5s_1 = alignment;
    this.c5s_1 = trim;
    this.d5s_1 = mode;
  }
  protoOf(LineHeightStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LineHeightStyle))
      return false;
    if (!equals(this.b5s_1, other.b5s_1))
      return false;
    if (!(this.c5s_1 === other.c5s_1))
      return false;
    if (!(this.d5s_1 === other.d5s_1))
      return false;
    return true;
  };
  protoOf(LineHeightStyle).hashCode = function () {
    var result = Alignment__hashCode_impl_omr6of(this.b5s_1);
    result = imul(31, result) + Trim__hashCode_impl_vclj5c(this.c5s_1) | 0;
    result = imul(31, result) + Mode__hashCode_impl_7u94z5(this.d5s_1) | 0;
    return result;
  };
  protoOf(LineHeightStyle).toString = function () {
    return 'LineHeightStyle(' + ('alignment=' + Alignment__toString_impl_on6yhu(this.b5s_1) + ', ') + ('trim=' + Trim__toString_impl_hxcm0x(this.c5s_1) + ',') + ('mode=' + Mode__toString_impl_dwwrtq(this.d5s_1)) + ')';
  };
  var ResolvedTextDirection_Ltr_instance;
  var ResolvedTextDirection_Rtl_instance;
  var ResolvedTextDirection_entriesInitialized;
  function ResolvedTextDirection_initEntries() {
    if (ResolvedTextDirection_entriesInitialized)
      return Unit_instance;
    ResolvedTextDirection_entriesInitialized = true;
    ResolvedTextDirection_Ltr_instance = new ResolvedTextDirection('Ltr', 0);
    ResolvedTextDirection_Rtl_instance = new ResolvedTextDirection('Rtl', 1);
  }
  function ResolvedTextDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ResolvedTextDirection_Ltr_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Ltr_instance;
  }
  function ResolvedTextDirection_Rtl_getInstance() {
    ResolvedTextDirection_initEntries();
    return ResolvedTextDirection_Rtl_instance;
  }
  function _TextAlign___init__impl__99wz4v(value) {
    return value;
  }
  function _TextAlign___get_value__impl__lst7m3($this) {
    return $this;
  }
  function TextAlign__toString_impl_6ha6d3($this) {
    return $this === Companion_getInstance_31().i5p_1 ? 'Left' : $this === Companion_getInstance_31().j5p_1 ? 'Right' : $this === Companion_getInstance_31().k5p_1 ? 'Center' : $this === Companion_getInstance_31().l5p_1 ? 'Justify' : $this === Companion_getInstance_31().m5p_1 ? 'Start' : $this === Companion_getInstance_31().n5p_1 ? 'End' : $this === Companion_getInstance_31().o5p_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_17() {
    Companion_instance_18 = this;
    this.i5p_1 = _TextAlign___init__impl__99wz4v(1);
    this.j5p_1 = _TextAlign___init__impl__99wz4v(2);
    this.k5p_1 = _TextAlign___init__impl__99wz4v(3);
    this.l5p_1 = _TextAlign___init__impl__99wz4v(4);
    this.m5p_1 = _TextAlign___init__impl__99wz4v(5);
    this.n5p_1 = _TextAlign___init__impl__99wz4v(6);
    this.o5p_1 = _TextAlign___init__impl__99wz4v(0);
  }
  protoOf(Companion_17).p62 = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= value ? value <= 6 : false)) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by TextAlign.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _TextAlign___init__impl__99wz4v(value);
  };
  var Companion_instance_18;
  function Companion_getInstance_31() {
    if (Companion_instance_18 == null)
      new Companion_17();
    return Companion_instance_18;
  }
  function TextAlign__hashCode_impl_s8g35y($this) {
    return $this;
  }
  function TextAlign__equals_impl_latoh6($this, other) {
    if (!(other instanceof TextAlign))
      return false;
    if (!($this === other.p5q_1))
      return false;
    return true;
  }
  function TextAlign(value) {
    Companion_getInstance_31();
    this.p5q_1 = value;
  }
  protoOf(TextAlign).toString = function () {
    return TextAlign__toString_impl_6ha6d3(this.p5q_1);
  };
  protoOf(TextAlign).hashCode = function () {
    return TextAlign__hashCode_impl_s8g35y(this.p5q_1);
  };
  protoOf(TextAlign).equals = function (other) {
    return TextAlign__equals_impl_latoh6(this.p5q_1, other);
  };
  var androidx_compose_ui_text_style_TextDecoration$stable;
  function Companion_18() {
    Companion_instance_19 = this;
    this.f5u_1 = new TextDecoration(0);
    this.g5u_1 = new TextDecoration(1);
    this.h5u_1 = new TextDecoration(2);
  }
  protoOf(Companion_18).q62 = function (mask) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((mask | 3) === 3)) {
      var tmp$ret$1 = 'The given mask=' + mask + ' is not recognized by TextDecoration.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    switch (mask) {
      case 0:
        return this.f5u_1;
      case 1:
        return this.g5u_1;
      case 2:
        return this.h5u_1;
      default:
        return new TextDecoration(mask);
    }
  };
  var Companion_instance_19;
  function Companion_getInstance_32() {
    if (Companion_instance_19 == null)
      new Companion_18();
    return Companion_instance_19;
  }
  function TextDecoration(mask) {
    Companion_getInstance_32();
    this.q5r_1 = mask;
  }
  protoOf(TextDecoration).r62 = function (other) {
    return (this.q5r_1 | other.q5r_1) === this.q5r_1;
  };
  protoOf(TextDecoration).toString = function () {
    if (this.q5r_1 === 0) {
      return 'TextDecoration.None';
    }
    // Inline function 'kotlin.collections.mutableListOf' call
    var values = ArrayList_init_$Create$();
    if (!((this.q5r_1 & Companion_getInstance_32().g5u_1.q5r_1) === 0)) {
      values.g('Underline');
    }
    if (!((this.q5r_1 & Companion_getInstance_32().h5u_1.q5r_1) === 0)) {
      values.g('LineThrough');
    }
    if (values.l() === 1) {
      return 'TextDecoration.' + values.m(0);
    }
    return 'TextDecoration[' + fastJoinToString(values, ', ') + ']';
  };
  protoOf(TextDecoration).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextDecoration))
      return false;
    if (!(this.q5r_1 === other.q5r_1))
      return false;
    return true;
  };
  protoOf(TextDecoration).hashCode = function () {
    return this.q5r_1;
  };
  function _TextDirection___init__impl__lh8lzt(value) {
    return value;
  }
  function _TextDirection___get_value__impl__ka7r45($this) {
    return $this;
  }
  function TextDirection__toString_impl_x3uh9t($this) {
    return $this === Companion_getInstance_33().w5o_1 ? 'Ltr' : $this === Companion_getInstance_33().x5o_1 ? 'Rtl' : $this === Companion_getInstance_33().y5o_1 ? 'Content' : $this === Companion_getInstance_33().z5o_1 ? 'ContentOrLtr' : $this === Companion_getInstance_33().a5p_1 ? 'ContentOrRtl' : $this === Companion_getInstance_33().b5p_1 ? 'Unspecified' : 'Invalid';
  }
  function Companion_19() {
    Companion_instance_20 = this;
    this.w5o_1 = _TextDirection___init__impl__lh8lzt(1);
    this.x5o_1 = _TextDirection___init__impl__lh8lzt(2);
    this.y5o_1 = _TextDirection___init__impl__lh8lzt(3);
    this.z5o_1 = _TextDirection___init__impl__lh8lzt(4);
    this.a5p_1 = _TextDirection___init__impl__lh8lzt(5);
    this.b5p_1 = _TextDirection___init__impl__lh8lzt(0);
  }
  protoOf(Companion_19).s62 = function (value) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= value ? value <= 5 : false)) {
      var tmp$ret$1 = 'The given value=' + value + ' is not recognized by TextDirection.';
      throwIllegalArgumentException(tmp$ret$1);
    }
    return _TextDirection___init__impl__lh8lzt(value);
  };
  var Companion_instance_20;
  function Companion_getInstance_33() {
    if (Companion_instance_20 == null)
      new Companion_19();
    return Companion_instance_20;
  }
  function TextDirection__hashCode_impl_g63nwg($this) {
    return $this;
  }
  function TextDirection__equals_impl_3fvxt0($this, other) {
    if (!(other instanceof TextDirection))
      return false;
    if (!($this === other.q5q_1))
      return false;
    return true;
  }
  function TextDirection(value) {
    Companion_getInstance_33();
    this.q5q_1 = value;
  }
  protoOf(TextDirection).toString = function () {
    return TextDirection__toString_impl_x3uh9t(this.q5q_1);
  };
  protoOf(TextDirection).hashCode = function () {
    return TextDirection__hashCode_impl_g63nwg(this.q5q_1);
  };
  protoOf(TextDirection).equals = function (other) {
    return TextDirection__equals_impl_3fvxt0(this.q5q_1, other);
  };
  var androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable;
  function Unspecified() {
  }
  protoOf(Unspecified).h4y = function () {
    return Companion_getInstance().t4x_1;
  };
  protoOf(Unspecified).l5s = function () {
    return null;
  };
  protoOf(Unspecified).i4u = function () {
    return NaN;
  };
  var Unspecified_instance;
  function Unspecified_getInstance() {
    return Unspecified_instance;
  }
  function Companion_20() {
  }
  protoOf(Companion_20).j5s = function (color) {
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = new ColorStyle(color);
    } else {
      tmp = Unspecified_instance;
    }
    return tmp;
  };
  protoOf(Companion_20).k5s = function (brush, alpha) {
    var tmp;
    if (brush == null) {
      tmp = Unspecified_instance;
    } else {
      if (brush instanceof SolidColor) {
        tmp = this.j5s(modulate(brush.c4x_1, alpha));
      } else {
        if (brush instanceof ShaderBrush) {
          tmp = new BrushStyle(brush, alpha);
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
    return tmp;
  };
  var Companion_instance_21;
  function Companion_getInstance_34() {
    return Companion_instance_21;
  }
  function TextForegroundStyle$merge$lambda(this$0) {
    return function () {
      return this$0.u62_1;
    };
  }
  function TextForegroundStyle$merge$lambda_0(this$0) {
    return function () {
      return this$0;
    };
  }
  function TextForegroundStyle() {
  }
  function modulate(_this__u8e3s4, alpha) {
    return isNaN_0(alpha) || alpha >= 1.0 ? _this__u8e3s4 : Color__copy$default_impl_ectz3s(_this__u8e3s4, _Color___get_alpha__impl__wcfyv1(_this__u8e3s4) * alpha);
  }
  function BrushStyle(value, alpha) {
    this.t62_1 = value;
    this.u62_1 = alpha;
  }
  protoOf(BrushStyle).i4u = function () {
    return this.u62_1;
  };
  protoOf(BrushStyle).h4y = function () {
    return Companion_getInstance().t4x_1;
  };
  protoOf(BrushStyle).l5s = function () {
    return this.t62_1;
  };
  protoOf(BrushStyle).toString = function () {
    return 'BrushStyle(value=' + toString_0(this.t62_1) + ', alpha=' + this.u62_1 + ')';
  };
  protoOf(BrushStyle).hashCode = function () {
    var result = hashCode(this.t62_1);
    result = imul(result, 31) + getNumberHashCode(this.u62_1) | 0;
    return result;
  };
  protoOf(BrushStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BrushStyle))
      return false;
    if (!equals(this.t62_1, other.t62_1))
      return false;
    if (!equals(this.u62_1, other.u62_1))
      return false;
    return true;
  };
  function takeOrElse_0(_this__u8e3s4, block) {
    return isNaN_0(_this__u8e3s4) ? block() : _this__u8e3s4;
  }
  function ColorStyle(value) {
    this.v62_1 = value;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.v62_1;
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      var tmp$ret$2 = 'ColorStyle value must be specified, use TextForegroundStyle.Unspecified instead.';
      throwIllegalArgumentException(tmp$ret$2);
    }
  }
  protoOf(ColorStyle).h4y = function () {
    return this.v62_1;
  };
  protoOf(ColorStyle).l5s = function () {
    return null;
  };
  protoOf(ColorStyle).i4u = function () {
    return _Color___get_alpha__impl__wcfyv1(this.h4y());
  };
  protoOf(ColorStyle).toString = function () {
    return 'ColorStyle(value=' + Color__toString_impl_hpzmaq(this.v62_1) + ')';
  };
  protoOf(ColorStyle).hashCode = function () {
    return Color__hashCode_impl_vjyivj(this.v62_1);
  };
  protoOf(ColorStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColorStyle))
      return false;
    if (!equals(this.v62_1, other.v62_1))
      return false;
    return true;
  };
  var androidx_compose_ui_text_style_TextGeometricTransform$stable;
  function Companion_21() {
    Companion_instance_22 = this;
    this.d5u_1 = new TextGeometricTransform(1.0, 0.0);
  }
  var Companion_instance_22;
  function Companion_getInstance_35() {
    if (Companion_instance_22 == null)
      new Companion_21();
    return Companion_instance_22;
  }
  function TextGeometricTransform(scaleX, skewX) {
    Companion_getInstance_35();
    scaleX = scaleX === VOID ? 1.0 : scaleX;
    skewX = skewX === VOID ? 0.0 : skewX;
    this.r5r_1 = scaleX;
    this.s5r_1 = skewX;
  }
  protoOf(TextGeometricTransform).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextGeometricTransform))
      return false;
    if (!(this.r5r_1 === other.r5r_1))
      return false;
    if (!(this.s5r_1 === other.s5r_1))
      return false;
    return true;
  };
  protoOf(TextGeometricTransform).hashCode = function () {
    var result = getNumberHashCode(this.r5r_1);
    result = imul(31, result) + getNumberHashCode(this.s5r_1) | 0;
    return result;
  };
  protoOf(TextGeometricTransform).toString = function () {
    return 'TextGeometricTransform(scaleX=' + this.r5r_1 + ', skewX=' + this.s5r_1 + ')';
  };
  var androidx_compose_ui_text_style_TextIndent$stable;
  function Companion_22() {
    Companion_instance_23 = this;
    this.z5p_1 = new TextIndent_0();
  }
  var Companion_instance_23;
  function Companion_getInstance_36() {
    if (Companion_instance_23 == null)
      new Companion_22();
    return Companion_instance_23;
  }
  function TextIndent_0(firstLine, restLine) {
    Companion_getInstance_36();
    firstLine = firstLine === VOID ? get_sp(0) : firstLine;
    restLine = restLine === VOID ? get_sp(0) : restLine;
    this.t5r_1 = firstLine;
    this.u5r_1 = restLine;
  }
  protoOf(TextIndent_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent_0))
      return false;
    if (!equals(this.t5r_1, other.t5r_1))
      return false;
    if (!equals(this.u5r_1, other.u5r_1))
      return false;
    return true;
  };
  protoOf(TextIndent_0).hashCode = function () {
    var result = TextUnit__hashCode_impl_qsmeov(this.t5r_1);
    result = imul(31, result) + TextUnit__hashCode_impl_qsmeov(this.u5r_1) | 0;
    return result;
  };
  protoOf(TextIndent_0).toString = function () {
    return 'TextIndent(firstLine=' + TextUnit__toString_impl_51ghw0(this.t5r_1) + ', restLine=' + TextUnit__toString_impl_51ghw0(this.u5r_1) + ')';
  };
  function _TextOverflow___init__impl__obguoe(value) {
    return value;
  }
  function _TextOverflow___get_value__impl__vugm5i($this) {
    return $this;
  }
  function TextOverflow__toString_impl_10s0c2($this) {
    return $this === Companion_getInstance_37().n5n_1 ? 'Clip' : $this === Companion_getInstance_37().o5n_1 ? 'Ellipsis' : $this === Companion_getInstance_37().r5n_1 ? 'MiddleEllipsis' : $this === Companion_getInstance_37().p5n_1 ? 'Visible' : $this === Companion_getInstance_37().q5n_1 ? 'StartEllipsis' : 'Invalid';
  }
  function Companion_23() {
    Companion_instance_24 = this;
    this.n5n_1 = _TextOverflow___init__impl__obguoe(1);
    this.o5n_1 = _TextOverflow___init__impl__obguoe(2);
    this.p5n_1 = _TextOverflow___init__impl__obguoe(3);
    this.q5n_1 = _TextOverflow___init__impl__obguoe(4);
    this.r5n_1 = _TextOverflow___init__impl__obguoe(5);
  }
  var Companion_instance_24;
  function Companion_getInstance_37() {
    if (Companion_instance_24 == null)
      new Companion_23();
    return Companion_instance_24;
  }
  function TextOverflow__hashCode_impl_kqdwgt($this) {
    return $this;
  }
  function TextOverflow__equals_impl_jkxdof($this, other) {
    if (!(other instanceof TextOverflow))
      return false;
    if (!($this === other.w62_1))
      return false;
    return true;
  }
  function TextOverflow(value) {
    Companion_getInstance_37();
    this.w62_1 = value;
  }
  protoOf(TextOverflow).toString = function () {
    return TextOverflow__toString_impl_10s0c2(this.w62_1);
  };
  protoOf(TextOverflow).hashCode = function () {
    return TextOverflow__hashCode_impl_kqdwgt(this.w62_1);
  };
  protoOf(TextOverflow).equals = function (other) {
    return TextOverflow__equals_impl_jkxdof(this.w62_1, other);
  };
  function userPreferredLanguages() {
    return toList(getUserPreferredLanguagesAsArray());
  }
  function getUserPreferredLanguagesAsArray() {
    return window.navigator.languages;
  }
  var androidx_compose_ui_text_AtomicReference$stable;
  function AtomicReference(value) {
    this.x62_1 = atomic$ref$1(value);
  }
  function strongDirectionType(_this__u8e3s4) {
    switch (CharDirection_getInstance().s4m(_this__u8e3s4)) {
      case 0:
        return Companion_getInstance_38().z62_1;
      case 1:
      case 13:
        return Companion_getInstance_38().a63_1;
      default:
        return Companion_getInstance_38().y62_1;
    }
  }
  var androidx_compose_ui_text_ExpireAfterAccessCache$stable;
  function checkEvicted($this, now) {
    var expireTime = subtract(now, $this.b63_1);
    var iterator = $this.e63_1.x1().i();
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = iterator;
    $l$loop: while (_iterator__ex2g4s.j()) {
      var entry = _iterator__ex2g4s.k();
      if (compare(entry.r1(), expireTime) < 0) {
        $this.d63_1.z1(entry.q1());
        iterator.l3();
      } else
        break $l$loop;
    }
  }
  function access$checkEvicted($this, now) {
    return checkEvicted($this, now);
  }
  function currentNanoTime$ref() {
    return constructCallableReference(function () {
      return currentNanoTime();
    }, 0, 0, 20, 'currentNanoTime');
  }
  function ExpireAfterAccessCache(expireAfterNanos, currentNanos) {
    var tmp;
    if (currentNanos === VOID) {
      tmp = currentNanoTime$ref();
    } else {
      tmp = currentNanos;
    }
    currentNanos = tmp;
    this.b63_1 = expireAfterNanos;
    this.c63_1 = currentNanos;
    this.d63_1 = HashMap_init_$Create$();
    this.e63_1 = LinkedHashMap_init_$Create$();
  }
  function get_PUSH_DIRECTIONAL_ISOLATE_RANGE() {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return PUSH_DIRECTIONAL_ISOLATE_RANGE;
  }
  var PUSH_DIRECTIONAL_ISOLATE_RANGE;
  function _StrongDirectionType___init__impl__59uet3(value) {
    return value;
  }
  function Companion_24() {
    Companion_instance_25 = this;
    this.y62_1 = _StrongDirectionType___init__impl__59uet3(0);
    this.z62_1 = _StrongDirectionType___init__impl__59uet3(1);
    this.a63_1 = _StrongDirectionType___init__impl__59uet3(2);
  }
  var Companion_instance_25;
  function Companion_getInstance_38() {
    if (Companion_instance_25 == null)
      new Companion_24();
    return Companion_instance_25;
  }
  function firstStrongDirectionType(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var _iterator__ex2g4s = get_codePointsOutsideDirectionalIsolate(_this__u8e3s4).i();
    $l$loop: while (_iterator__ex2g4s.j()) {
      var codePoint = _iterator__ex2g4s.k();
      var strongDirectionType_0 = strongDirectionType(codePoint);
      var tmp;
      if (strongDirectionType_0 === Companion_getInstance_38().y62_1) {
        continue $l$loop;
      } else {
        tmp = strongDirectionType_0;
      }
      return tmp;
    }
    return Companion_getInstance_38().y62_1;
  }
  function codePointAt(_this__u8e3s4, index) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    var high = charSequenceGet(_this__u8e3s4, index);
    if (isHighSurrogate(high) && (index + 1 | 0) < charSequenceLength(_this__u8e3s4)) {
      var low = charSequenceGet(_this__u8e3s4, index + 1 | 0);
      if (isLowSurrogate(low)) {
        return toCodePoint(Companion_getInstance_5(), high, low);
      }
    }
    // Inline function 'kotlin.code' call
    return Char__toInt_impl_vasixd(high);
  }
  function get_codePointsOutsideDirectionalIsolate(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0(_this__u8e3s4, null));
  }
  function toCodePoint(_this__u8e3s4, high, low) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return (Char__minus_impl_a2frrh(high, _Char___init__impl__6a9atx(55296)) << 10 | Char__minus_impl_a2frrh(low, _Char___init__impl__6a9atx(56320))) + 65536 | 0;
  }
  function get_codePoints(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return sequence(_get_codePoints_$slambda_43x8dt_0(_this__u8e3s4, null));
  }
  function charCount(_this__u8e3s4) {
    _init_properties_CharHelpers_skiko_kt__8ej40s();
    return _this__u8e3s4 >= 65536 ? 2 : 1;
  }
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    this.n63_1 = $this_codePointsOutsideDirectionalIsolate;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).r63 = function ($this$sequence, $completion) {
    var tmp = this.s63($this$sequence, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).d9 = function (p1, $completion) {
    return this.r63(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            this.p63_1 = 0;
            this.q63_1 = get_codePoints(this.n63_1).i();
            this.l8_1 = 1;
            continue $sm;
          case 1:
            if (!this.q63_1.j()) {
              this.l8_1 = 4;
              continue $sm;
            }

            var codePoint = this.q63_1.k();
            var progression = get_PUSH_DIRECTIONAL_ISOLATE_RANGE();
            var containsLower = progression.x_1;
            if (codePoint <= progression.y_1 ? containsLower <= codePoint : false) {
              this.p63_1 = this.p63_1 + 1 | 0;
              this.l8_1 = 3;
              continue $sm;
            } else {
              if (codePoint === 8297) {
                if (this.p63_1 > 0) {
                  this.p63_1 = this.p63_1 - 1 | 0;
                }
                this.l8_1 = 3;
                continue $sm;
              } else {
                if (this.p63_1 === 0) {
                  this.l8_1 = 2;
                  suspendResult = this.o63_1.yd(codePoint, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.l8_1 = 3;
                  continue $sm;
                }
              }
            }

          case 2:
            this.l8_1 = 3;
            continue $sm;
          case 3:
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
  protoOf(_get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj).s63 = function ($this$sequence, completion) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj(this.n63_1, completion);
    i.o63_1 = $this$sequence;
    return i;
  };
  function _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj_0($this_codePointsOutsideDirectionalIsolate, resultContinuation) {
    var i = new _get_codePointsOutsideDirectionalIsolate_$slambda_cun5rj($this_codePointsOutsideDirectionalIsolate, resultContinuation);
    return constructCallableReference(function ($this$sequence, $completion) {
      return i.r63($this$sequence, $completion);
    }, 1);
  }
  function _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation) {
    this.b64_1 = $this_codePoints;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(_get_codePoints_$slambda_43x8dt).r63 = function ($this$sequence, $completion) {
    var tmp = this.s63($this$sequence, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(_get_codePoints_$slambda_43x8dt).d9 = function (p1, $completion) {
    return this.r63(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(_get_codePoints_$slambda_43x8dt).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            this.d64_1 = 0;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            if (!(this.d64_1 < charSequenceLength(this.b64_1))) {
              this.l8_1 = 3;
              continue $sm;
            }

            this.e64_1 = codePointAt(this.b64_1, this.d64_1);
            this.l8_1 = 2;
            suspendResult = this.c64_1.yd(this.e64_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.d64_1 = this.d64_1 + charCount(this.e64_1) | 0;
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
  protoOf(_get_codePoints_$slambda_43x8dt).s63 = function ($this$sequence, completion) {
    var i = new _get_codePoints_$slambda_43x8dt(this.b64_1, completion);
    i.c64_1 = $this$sequence;
    return i;
  };
  function _get_codePoints_$slambda_43x8dt_0($this_codePoints, resultContinuation) {
    var i = new _get_codePoints_$slambda_43x8dt($this_codePoints, resultContinuation);
    return constructCallableReference(function ($this$sequence, $completion) {
      return i.r63($this$sequence, $completion);
    }, 1);
  }
  var properties_initialized_CharHelpers_skiko_kt_d762bq;
  function _init_properties_CharHelpers_skiko_kt__8ej40s() {
    if (!properties_initialized_CharHelpers_skiko_kt_d762bq) {
      properties_initialized_CharHelpers_skiko_kt_d762bq = true;
      PUSH_DIRECTIONAL_ISOLATE_RANGE = numberRangeToNumber(8294, 8296);
    }
  }
  var androidx_compose_ui_text_FontRasterizationSettings$stable;
  function FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda() {
    var tmp;
    switch (currentPlatform().i2_1) {
      case 2:
        var tmp1_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp2_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp1_smoothing, tmp2_hinting, true, false);
        break;
      case 1:
      case 0:
        var tmp3_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp4_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp3_smoothing, tmp4_hinting, true, false);
        break;
      case 7:
        var tmp5_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp6_hinting = FontHinting_Slight_getInstance();
        tmp = new FontRasterizationSettings(tmp5_smoothing, tmp6_hinting, true, false);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        var tmp7_smoothing = FontSmoothing_AntiAlias_getInstance();
        var tmp8_hinting = FontHinting_Normal_getInstance();
        tmp = new FontRasterizationSettings(tmp7_smoothing, tmp8_hinting, true, false);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function FontRasterizationSettings$Companion$_get_PlatformDefault_$ref_q7exdb() {
    return constructCallableReference(function (p0) {
      return p0.g64();
    }, 1, 0, 21);
  }
  function Companion_25() {
    Companion_instance_26 = this;
    var tmp = this;
    tmp.f64_1 = lazy_0(FontRasterizationSettings$Companion$PlatformDefault$delegate$lambda);
  }
  protoOf(Companion_25).g64 = function () {
    var tmp0 = this.f64_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('PlatformDefault', 1, tmp, FontRasterizationSettings$Companion$_get_PlatformDefault_$ref_q7exdb(), null);
    return tmp0.r1();
  };
  var Companion_instance_26;
  function Companion_getInstance_39() {
    if (Companion_instance_26 == null)
      new Companion_25();
    return Companion_instance_26;
  }
  function FontRasterizationSettings(smoothing, hinting, subpixelPositioning, autoHintingForced) {
    Companion_getInstance_39();
    this.h64_1 = smoothing;
    this.i64_1 = hinting;
    this.j64_1 = subpixelPositioning;
    this.k64_1 = autoHintingForced;
  }
  protoOf(FontRasterizationSettings).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof FontRasterizationSettings))
      THROW_CCE();
    if (!this.h64_1.equals(other.h64_1))
      return false;
    if (!this.i64_1.equals(other.i64_1))
      return false;
    if (!(this.j64_1 === other.j64_1))
      return false;
    return this.k64_1 === other.k64_1;
  };
  protoOf(FontRasterizationSettings).hashCode = function () {
    var result = this.h64_1.hashCode();
    result = imul(31, result) + this.i64_1.hashCode() | 0;
    result = imul(31, result) + getBooleanHashCode(this.j64_1) | 0;
    result = imul(31, result) + getBooleanHashCode(this.k64_1) | 0;
    return result;
  };
  protoOf(FontRasterizationSettings).toString = function () {
    return 'FontRasterizationSettings(smoothing=' + this.h64_1.toString() + ', ' + ('hinting=' + this.i64_1.toString() + ', ') + ('subpixelPositioning=' + this.j64_1 + ', ') + ('autoHintingForced=' + this.k64_1 + ')');
  };
  function toSkFontEdging(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.i2_1) {
      case 0:
        tmp = FontEdging_ALIAS_getInstance();
        break;
      case 1:
        tmp = FontEdging_ANTI_ALIAS_getInstance();
        break;
      case 2:
        tmp = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var FontSmoothing_None_instance;
  var FontSmoothing_AntiAlias_instance;
  var FontSmoothing_SubpixelAntiAlias_instance;
  var FontSmoothing_entriesInitialized;
  function FontSmoothing_initEntries() {
    if (FontSmoothing_entriesInitialized)
      return Unit_instance;
    FontSmoothing_entriesInitialized = true;
    FontSmoothing_None_instance = new FontSmoothing('None', 0);
    FontSmoothing_AntiAlias_instance = new FontSmoothing('AntiAlias', 1);
    FontSmoothing_SubpixelAntiAlias_instance = new FontSmoothing('SubpixelAntiAlias', 2);
  }
  function FontSmoothing(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function toSkFontHinting(_this__u8e3s4) {
    var tmp;
    switch (_this__u8e3s4.i2_1) {
      case 0:
        tmp = FontHinting_NONE_getInstance();
        break;
      case 1:
        tmp = FontHinting_SLIGHT_getInstance();
        break;
      case 2:
        tmp = FontHinting_NORMAL_getInstance();
        break;
      case 3:
        tmp = FontHinting_FULL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var FontHinting_None_instance;
  var FontHinting_Slight_instance;
  var FontHinting_Normal_instance;
  var FontHinting_Full_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_None_instance = new FontHinting('None', 0);
    FontHinting_Slight_instance = new FontHinting('Slight', 1);
    FontHinting_Normal_instance = new FontHinting('Normal', 2);
    FontHinting_Full_instance = new FontHinting('Full', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSmoothing_AntiAlias_getInstance() {
    FontSmoothing_initEntries();
    return FontSmoothing_AntiAlias_instance;
  }
  function FontHinting_Slight_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Slight_instance;
  }
  function FontHinting_Normal_getInstance() {
    FontHinting_initEntries();
    return FontHinting_Normal_instance;
  }
  function Paragraph_1() {
  }
  function get_PlatformParagraphStyleSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return PlatformParagraphStyleSaver;
  }
  var PlatformParagraphStyleSaver;
  function get_LineBreakSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return LineBreakSaver;
  }
  var LineBreakSaver;
  function get_TextMotionSaver() {
    _init_properties_Savers_skiko_kt__qtio6d();
    return TextMotionSaver;
  }
  var TextMotionSaver;
  function get_Saver_20(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_PlatformParagraphStyleSaver();
  }
  function get_Saver_21(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_LineBreakSaver();
  }
  function get_Saver_22(_this__u8e3s4) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return get_TextMotionSaver();
  }
  function PlatformParagraphStyleSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return Unit_instance;
  }
  function PlatformParagraphStyleSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return PlatformParagraphStyle_init_$Create$();
  }
  function LineBreakSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return _LineBreak___get_mask__impl__je2e1t(it.r5q_1);
  }
  function LineBreakSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var mask = typeof it === 'number' ? it : THROW_CCE();
    var tmp;
    switch (mask) {
      case 1:
        tmp = Companion_getInstance_42().p5p_1;
        break;
      case 2:
        tmp = Companion_getInstance_42().q5p_1;
        break;
      case 3:
        tmp = Companion_getInstance_42().r5p_1;
        break;
      default:
        tmp = Companion_getInstance_42().s5p_1;
        break;
    }
    var tmp_0 = tmp;
    return tmp_0 == null ? null : new LineBreak(tmp_0);
  }
  function TextMotionSaver$lambda($this$Saver, it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    return equals(it, Companion_getInstance_43().a5q_1) ? 0 : 1;
  }
  function TextMotionSaver$lambda_0(it) {
    _init_properties_Savers_skiko_kt__qtio6d();
    var tmp;
    if (equals(it, 0)) {
      tmp = Companion_getInstance_43().a5q_1;
    } else {
      tmp = Companion_getInstance_43().b5q_1;
    }
    return tmp;
  }
  var properties_initialized_Savers_skiko_kt_n0li93;
  function _init_properties_Savers_skiko_kt__qtio6d() {
    if (!properties_initialized_Savers_skiko_kt_n0li93) {
      properties_initialized_Savers_skiko_kt_n0li93 = true;
      var tmp = PlatformParagraphStyleSaver$lambda;
      PlatformParagraphStyleSaver = Saver_0(tmp, PlatformParagraphStyleSaver$lambda_0);
      var tmp_0 = LineBreakSaver$lambda;
      LineBreakSaver = Saver_0(tmp_0, LineBreakSaver$lambda_0);
      var tmp_1 = TextMotionSaver$lambda;
      TextMotionSaver = Saver_0(tmp_1, TextMotionSaver$lambda_0);
    }
  }
  var androidx_compose_ui_text_SkiaParagraph$stable;
  function _set_paragraph__p1bfvb($this, value) {
    $this.t64_1 = value;
    $this.u64_1 = null;
  }
  function _get_ellipsis__kt5xpi($this) {
    return listOf([new TextOverflow(Companion_getInstance_37().o5n_1), new TextOverflow(Companion_getInstance_37().r5n_1), new TextOverflow(Companion_getInstance_37().q5n_1)]).s(new TextOverflow($this.q64_1)) ? '\u2026' : '';
  }
  function _get_text__de5ose($this) {
    return $this.o64_1.v64_1;
  }
  function lineMetricsForOffset($this, offset) {
    var tmp;
    if (0 <= offset ? offset <= _get_text__de5ose($this).length : false) {
      var tmp0 = _get_lineMetrics__5iiuki($this);
      var tmp$ret$0;
      $l$block: {
        // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (tmp0.length === 0) {
          tmp$ret$0 = null;
          break $l$block;
        }
        var tmp_0 = asList(tmp0);
        var index = binarySearch(tmp_0, VOID, VOID, SkiaParagraph$lineMetricsForOffset$lambda(offset));
        tmp$ret$0 = tmp0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp0))];
      }
      tmp = tmp$ret$0;
    } else {
      tmp = null;
    }
    return tmp;
  }
  function getLineMetricsForVerticalPosition($this, vertical) {
    var tmp0 = _get_lineMetrics__5iiuki($this);
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.binarySearchFirstMatchingOrLast' call
      // Inline function 'kotlin.collections.isEmpty' call
      if (tmp0.length === 0) {
        tmp$ret$0 = null;
        break $l$block;
      }
      var tmp = asList(tmp0);
      var index = binarySearch(tmp, VOID, VOID, SkiaParagraph$getLineMetricsForVerticalPosition$lambda(vertical));
      tmp$ret$0 = tmp0[coerceAtMost((-index | 0) - 1 | 0, get_lastIndex_0(tmp0))];
    }
    return tmp$ret$0;
  }
  function _get_lineMetrics__5iiuki($this) {
    var tmp0_elvis_lhs = $this.u64_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = receiveLineMetrics($this);
      $this.u64_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var lineMetrics = tmp;
    return lineMetrics;
  }
  function receiveLineMetrics($this) {
    var tmp;
    // Inline function 'kotlin.text.isEmpty' call
    var this_0 = _get_text__de5ose($this);
    if (charSequenceLength(this_0) === 0) {
      tmp = $this.s64_1.k65($this.t64_1);
    } else {
      // Inline function 'kotlin.collections.ifEmpty' call
      var this_1 = $this.t64_1.o4o();
      var tmp_0;
      // Inline function 'kotlin.collections.isEmpty' call
      if (this_1.length === 0) {
        tmp_0 = $this.s64_1.k65($this.t64_1);
      } else {
        tmp_0 = this_1;
      }
      tmp = tmp_0;
    }
    var lineMetrics = tmp;
    var fontMetrics = $this.l65().y4d();
    lineMetrics[0] = trimFirstAscent(lineMetrics[0], fontMetrics, $this.s64_1.m65());
    lineMetrics[lineMetrics.length - 1 | 0] = trimLastDescent(lineMetrics[lineMetrics.length - 1 | 0], fontMetrics, $this.s64_1.m65());
    return lineMetrics;
  }
  function getBoxForwardByOffset($this, offset) {
    if (!(0 <= offset ? offset <= _get_text__de5ose($this).length : false))
      return null;
    var to = offset + 1 | 0;
    while (to <= _get_text__de5ose($this).length) {
      var box = firstOrNull($this.t64_1.l4o(offset, to, RectHeightMode_STRUT_getInstance(), RectWidthMode_TIGHT_getInstance()));
      if (!(box == null)) {
        return box;
      }
      to = to + 1 | 0;
    }
    return null;
  }
  function SkiaParagraph$lineMetricsForOffset$lambda($offset) {
    return function (it) {
      var tmp;
      if ($offset < it.r4n_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph$getLineMetricsForVerticalPosition$lambda($vertical) {
    return function (it) {
      var tmp;
      if ($vertical < it.z4n_1 + it.u4n_1) {
        tmp = 1;
      } else {
        tmp = -1;
      }
      return tmp;
    };
  }
  function SkiaParagraph(paragraphIntrinsics, maxLines, overflow, constraints) {
    this.o64_1 = paragraphIntrinsics;
    this.p64_1 = maxLines;
    this.q64_1 = overflow;
    this.r64_1 = constraints;
    var tmp = this;
    // Inline function 'kotlin.apply' call
    var this_0 = this.o64_1.n65();
    this_0.o65(this.p64_1, _get_ellipsis__kt5xpi(this));
    tmp.s64_1 = this_0;
    this.t64_1 = this.s64_1.p65(this.b47());
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(_Constraints___get_minHeight__impl__ev4bgx(this.r64_1) === 0 && _Constraints___get_minWidth__impl__hi9lfi(this.r64_1) === 0)) {
      var tmp$ret$3 = 'Setting Constraints.minWidth and Constraints.minHeight is not supported, these should be the default zero values instead.';
      throwIllegalArgumentException(tmp$ret$3);
    }
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(this.p64_1 >= 1)) {
      var tmp$ret$5 = 'maxLines should be greater than 0';
      throwIllegalArgumentException(tmp$ret$5);
    }
    var tmp0 = this.b47();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.c47();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$7 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$6 = _Size___init__impl__aywn0g(tmp$ret$7);
    this.s64_1.q65(tmp$ret$6);
    _set_paragraph__p1bfvb(this, this.s64_1.p65(this.b47()));
    if (this.q64_1 === Companion_getInstance_37().o5n_1 && this.t64_1.c47() > _Constraints___get_maxHeight__impl__dt3e8z(this.r64_1) && this.p64_1 > 1) {
      var calculatedMaxLines = numberOfLinesThatFitMaxHeight(this, _Constraints___get_maxHeight__impl__dt3e8z(this.r64_1));
      if (calculatedMaxLines >= 0 && !(calculatedMaxLines === this.p64_1)) {
        this.s64_1.o65(coerceAtLeast(calculatedMaxLines, 1), _get_ellipsis__kt5xpi(this));
        _set_paragraph__p1bfvb(this, this.s64_1.p65(this.b47()));
      }
    }
    this.u64_1 = null;
  }
  protoOf(SkiaParagraph).l65 = function () {
    return this.s64_1.r65();
  };
  protoOf(SkiaParagraph).b47 = function () {
    return _Constraints___get_maxWidth__impl__uuyqc(this.r64_1);
  };
  protoOf(SkiaParagraph).c47 = function () {
    return this.t64_1.c47();
  };
  protoOf(SkiaParagraph).g4o = function () {
    return this.o64_1.e65_1;
  };
  protoOf(SkiaParagraph).z5n = function () {
    var tmp0_safe_receiver = firstOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.z4n_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).a5o = function () {
    var tmp0_safe_receiver = lastOrNull(_get_lineMetrics__5iiuki(this));
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.run' call
      tmp = tmp0_safe_receiver.z4n_1;
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).w5n = function () {
    return this.t64_1.i4o();
  };
  protoOf(SkiaParagraph).v5n = function () {
    var tmp;
    if (_get_text__de5ose(this) === '' || this.t64_1.p4o() < 1) {
      tmp = 1;
    } else {
      tmp = this.t64_1.p4o();
    }
    return tmp;
  };
  protoOf(SkiaParagraph).x5n = function () {
    // Inline function 'kotlin.collections.map' call
    var this_0 = this.t64_1.m4o();
    // Inline function 'kotlin.collections.mapTo' call
    var destination = ArrayList_init_$Create$_0(this_0.length);
    var inductionVariable = 0;
    var last = this_0.length;
    while (inductionVariable < last) {
      var item = this_0[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      var tmp$ret$2 = toComposeRect(item.x4p_1);
      destination.g(tmp$ret$2);
    }
    return destination;
  };
  protoOf(SkiaParagraph).l5n = function (start, end) {
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!((0 <= start ? start <= end : false) && end <= _get_text__de5ose(this).length)) {
      var tmp$ret$1 = 'start(' + start + ') or end(' + end + ') is out of range [0..' + _get_text__de5ose(this).length + '],' + ' or start > end!';
      throwIllegalArgumentException(tmp$ret$1);
    }
    var boxes = this.t64_1.l4o(start, end, RectHeightMode_MAX_getInstance(), RectWidthMode_TIGHT_getInstance());
    var pathBuilder = PathBuilder_init_$Create$();
    var inductionVariable = 0;
    var last = boxes.length;
    while (inductionVariable < last) {
      var b = boxes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      pathBuilder.c4j(b.x4p_1.t4b_1, b.x4p_1.u4b_1, b.x4p_1.v4b_1, b.x4p_1.w4b_1);
    }
    return asComposePath(pathBuilder.q4i());
  };
  protoOf(SkiaParagraph).p5o = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.z4n_1 - tmp0_safe_receiver.t4n_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).l64 = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      // Inline function 'kotlin.math.floor' call
      var x = tmp0_safe_receiver.z4n_1 + tmp0_safe_receiver.u4n_1;
      tmp = Math.floor(x);
    }
    var tmp1_elvis_lhs = tmp;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).r5o = function (lineIndex) {
    var tmp0_safe_receiver = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.o4n_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).t5o = function (lineIndex, visibleEnd) {
    var tmp0_elvis_lhs = getOrNull(_get_lineMetrics__5iiuki(this), lineIndex);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return 0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var metrics = tmp;
    var tmp_0;
    if (visibleEnd) {
      var tmp_1;
      if (lineIndex > 0 && metrics.o4n_1 < _get_lineMetrics__5iiuki(this)[lineIndex - 1 | 0].p4n_1) {
        tmp_1 = metrics.p4n_1;
      } else if (metrics.o4n_1 < _get_text__de5ose(this).length && charCodeAt(_get_text__de5ose(this), metrics.o4n_1) === _Char___init__impl__6a9atx(10)) {
        tmp_1 = metrics.o4n_1;
      } else {
        tmp_1 = metrics.q4n_1;
      }
      tmp_0 = tmp_1;
    } else {
      tmp_0 = metrics.p4n_1;
    }
    return tmp_0;
  };
  protoOf(SkiaParagraph).o5o = function (offset) {
    return offset < 0 ? 0 : offset > _get_text__de5ose(this).length ? this.v5n() - 1 | 0 : ensureNotNull(lineMetricsForOffset(this, offset)).a4o_1;
  };
  protoOf(SkiaParagraph).g5o = function (vertical) {
    var tmp0_safe_receiver = getLineMetricsForVerticalPosition(this, vertical);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.a4o_1;
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(SkiaParagraph).j5o = function (offset) {
    return this.o64_1.b65_1;
  };
  protoOf(SkiaParagraph).k5o = function (offset) {
    var tmp0_safe_receiver = getBoxForwardByOffset(this, offset);
    var tmp1_subject = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.z4p();
    var tmp;
    switch (tmp1_subject == null ? -1 : tmp1_subject.i2_1) {
      case 0:
        tmp = ResolvedTextDirection_Rtl_getInstance();
        break;
      case 1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      case -1:
        tmp = ResolvedTextDirection_Ltr_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(SkiaParagraph).l5o = function (offset) {
    // Inline function 'androidx.compose.ui.text.SkiaParagraph.checkOffsetIsValid' call
    // Inline function 'androidx.compose.ui.text.internal.requirePrecondition' call
    if (!(0 <= offset ? offset <= _get_text__de5ose(this).length : false)) {
      var tmp$ret$2 = 'offset(' + offset + ') is out of bounds [0,' + _get_text__de5ose(this).length + ']';
      throwIllegalArgumentException(tmp$ret$2);
    }
    if (offset < _get_text__de5ose(this).length && isWhitespace(charCodeAt(_get_text__de5ose(this), offset)) || offset === _get_text__de5ose(this).length) {
      var tmp;
      if (offset > 0 && !isWhitespace(charCodeAt(_get_text__de5ose(this), offset - 1 | 0))) {
        tmp = toTextRange(this.t64_1.n4o(offset - 1 | 0));
      } else {
        tmp = TextRange_1(offset, offset);
      }
      return tmp;
    }
    return toTextRange(this.t64_1.n4o(offset));
  };
  protoOf(SkiaParagraph).c5o = function (canvas, color, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.s64_1;
    $this$with.s65(color);
    $this$with.t65(shadow, textDecoration);
    $this$with.u65(drawStyle);
    $this$with.v65(blendMode);
    var tmp$ret$0 = $this$with.p65(this.b47());
    _set_paragraph__p1bfvb(this, tmp$ret$0);
    this.t64_1.k4o(get_skiaCanvas(canvas), 0.0, 0.0);
  };
  protoOf(SkiaParagraph).e5o = function (canvas, brush, alpha, shadow, textDecoration, drawStyle, blendMode) {
    // Inline function 'kotlin.with' call
    var $this$with = this.s64_1;
    var tmp0 = this.b47();
    // Inline function 'androidx.compose.ui.geometry.Size' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = this.c47();
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$3 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$2 = _Size___init__impl__aywn0g(tmp$ret$3);
    $this$with.w65(brush, tmp$ret$2, alpha);
    $this$with.t65(shadow, textDecoration);
    $this$with.u65(drawStyle);
    $this$with.v65(blendMode);
    var tmp$ret$0 = $this$with.p65(this.b47());
    _set_paragraph__p1bfvb(this, tmp$ret$0);
    this.t64_1.k4o(get_skiaCanvas(canvas), 0.0, 0.0);
  };
  function numberOfLinesThatFitMaxHeight(_this__u8e3s4, maxHeight) {
    var inductionVariable = 0;
    var last = _this__u8e3s4.v5n();
    if (inductionVariable < last)
      do {
        var lineIndex = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (_this__u8e3s4.l64(lineIndex) > maxHeight)
          return lineIndex;
      }
       while (inductionVariable < last);
    return _this__u8e3s4.v5n();
  }
  function trimFirstAscent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.g5w();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.i5w();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_30().o62_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimFirstLineTop_impl_tqdsaa(style.c5s_1)) {
      tmp = -fontMetrics.s4e_1;
    } else {
      tmp = _this__u8e3s4.t4n_1;
    }
    var ascent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, ascent);
  }
  function trimLastDescent(_this__u8e3s4, fontMetrics, textStyle) {
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = textStyle.g5w();
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0)))
      return _this__u8e3s4;
    var tmp0_elvis_lhs = textStyle.i5w();
    var style = tmp0_elvis_lhs == null ? Companion_getInstance_30().o62_1 : tmp0_elvis_lhs;
    var tmp;
    if (Trim__isTrimLastLineBottom_impl_8k6x3e(style.c5s_1)) {
      tmp = fontMetrics.t4e_1;
    } else {
      tmp = _this__u8e3s4.u4n_1;
    }
    var descent = tmp;
    return copy(_this__u8e3s4, VOID, VOID, VOID, VOID, VOID, VOID, descent);
  }
  function toTextRange(_this__u8e3s4) {
    return TextRange_1(_this__u8e3s4.k4g_1, _this__u8e3s4.l4g_1);
  }
  function copy(_this__u8e3s4, startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    startIndex = startIndex === VOID ? _this__u8e3s4.o4n_1 : startIndex;
    endIndex = endIndex === VOID ? _this__u8e3s4.p4n_1 : endIndex;
    endExcludingWhitespaces = endExcludingWhitespaces === VOID ? _this__u8e3s4.q4n_1 : endExcludingWhitespaces;
    endIncludingNewline = endIncludingNewline === VOID ? _this__u8e3s4.r4n_1 : endIncludingNewline;
    isHardBreak = isHardBreak === VOID ? _this__u8e3s4.s4n_1 : isHardBreak;
    ascent = ascent === VOID ? _this__u8e3s4.t4n_1 : ascent;
    descent = descent === VOID ? _this__u8e3s4.u4n_1 : descent;
    unscaledAscent = unscaledAscent === VOID ? _this__u8e3s4.v4n_1 : unscaledAscent;
    height = height === VOID ? _this__u8e3s4.w4n_1 : height;
    width = width === VOID ? _this__u8e3s4.x4n_1 : width;
    left = left === VOID ? _this__u8e3s4.y4n_1 : left;
    baseline = baseline === VOID ? _this__u8e3s4.z4n_1 : baseline;
    lineNumber = lineNumber === VOID ? _this__u8e3s4.a4o_1 : lineNumber;
    return new LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber);
  }
  function _TextDecorationLineStyle___init__impl__fccanb(value) {
    return value;
  }
  function TextDecorationLineStyle__toString_impl_uezvi9($this) {
    return $this === Companion_getInstance_40().x65_1 ? 'Solid' : $this === Companion_getInstance_40().y65_1 ? 'Double' : $this === Companion_getInstance_40().z65_1 ? 'Dotted' : $this === Companion_getInstance_40().a66_1 ? 'Dashed' : $this === Companion_getInstance_40().b66_1 ? 'Wavy' : 'Invalid';
  }
  function Companion_26() {
    Companion_instance_27 = this;
    this.x65_1 = _TextDecorationLineStyle___init__impl__fccanb(1);
    this.y65_1 = _TextDecorationLineStyle___init__impl__fccanb(2);
    this.z65_1 = _TextDecorationLineStyle___init__impl__fccanb(3);
    this.a66_1 = _TextDecorationLineStyle___init__impl__fccanb(4);
    this.b66_1 = _TextDecorationLineStyle___init__impl__fccanb(5);
  }
  var Companion_instance_27;
  function Companion_getInstance_40() {
    if (Companion_instance_27 == null)
      new Companion_26();
    return Companion_instance_27;
  }
  function TextDecorationLineStyle__hashCode_impl_8ntype($this) {
    return $this;
  }
  function TextDecorationLineStyle__equals_impl_3jy6m($this, other) {
    if (!(other instanceof TextDecorationLineStyle))
      return false;
    if (!($this === other.c66_1))
      return false;
    return true;
  }
  function TextDecorationLineStyle(value) {
    Companion_getInstance_40();
    this.c66_1 = value;
  }
  protoOf(TextDecorationLineStyle).toString = function () {
    return TextDecorationLineStyle__toString_impl_uezvi9(this.c66_1);
  };
  protoOf(TextDecorationLineStyle).hashCode = function () {
    return TextDecorationLineStyle__hashCode_impl_8ntype(this.c66_1);
  };
  protoOf(TextDecorationLineStyle).equals = function (other) {
    return TextDecorationLineStyle__equals_impl_3jy6m(this.c66_1, other);
  };
  var androidx_compose_ui_text_PlatformTextStyle$stable;
  var androidx_compose_ui_text_PlatformParagraphStyle$stable;
  var androidx_compose_ui_text_PlatformSpanStyle$stable;
  function PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, $this) {
    PlatformTextStyle.call($this);
    $this.f5v_1 = spanStyle;
    $this.g5v_1 = paragraphStyle;
    return $this;
  }
  function PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Init$(spanStyle, paragraphStyle, objectCreate(protoOf(PlatformTextStyle)));
  }
  protoOf(PlatformTextStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformTextStyle))
      return false;
    if (!equals(this.g5v_1, other.g5v_1))
      return false;
    if (!equals(this.f5v_1, other.f5v_1))
      return false;
    return true;
  };
  protoOf(PlatformTextStyle).hashCode = function () {
    var tmp0_safe_receiver = this.f5v_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    var result = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var tmp = imul(31, result);
    var tmp2_safe_receiver = this.g5v_1;
    var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.hashCode();
    result = tmp + (tmp3_elvis_lhs == null ? 0 : tmp3_elvis_lhs) | 0;
    return result;
  };
  function PlatformTextStyle() {
  }
  function Companion_27() {
    Companion_instance_28 = this;
    this.d66_1 = PlatformParagraphStyle_init_$Create$();
  }
  var Companion_instance_28;
  function Companion_getInstance_41() {
    if (Companion_instance_28 == null)
      new Companion_27();
    return Companion_instance_28;
  }
  function PlatformParagraphStyle_init_$Init$($this) {
    PlatformParagraphStyle.call($this);
    $this.x5p_1 = Companion_getInstance_39().g64();
    return $this;
  }
  function PlatformParagraphStyle_init_$Create$() {
    return PlatformParagraphStyle_init_$Init$(objectCreate(protoOf(PlatformParagraphStyle)));
  }
  protoOf(PlatformParagraphStyle).y5p = function (other) {
    if (other == null)
      return this;
    return other;
  };
  protoOf(PlatformParagraphStyle).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformParagraphStyle))
      return false;
    if (!this.x5p_1.equals(other.x5p_1))
      return false;
    return true;
  };
  protoOf(PlatformParagraphStyle).hashCode = function () {
    return this.x5p_1.hashCode();
  };
  function PlatformParagraphStyle() {
    Companion_getInstance_41();
  }
  function createPlatformTextStyle(spanStyle, paragraphStyle) {
    return PlatformTextStyle_init_$Create$(spanStyle, paragraphStyle);
  }
  function createFontFamilyResolver(fontCache) {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(fontCache), createPlatformResolveInterceptor());
  }
  function createFontFamilyResolver_0() {
    return new FontFamilyResolverImpl(SkiaFontLoader_init_$Create$(), createPlatformResolveInterceptor());
  }
  var androidx_compose_ui_text_font_PlatformFontFamilyTypefaceAdapter$stable;
  function PlatformFontFamilyTypefaceAdapter() {
  }
  protoOf(PlatformFontFamilyTypefaceAdapter).c5y = function (typefaceRequest, platformFontLoader, onAsyncCompletion, createDefaultTypeface) {
    var tmp = typefaceRequest.d5x_1;
    if (tmp instanceof FontListFontFamily)
      return null;
    var skiaFontLoader = platformFontLoader instanceof SkiaFontLoader ? platformFontLoader : THROW_CCE();
    var tmp0_elvis_lhs = typefaceRequest.d5x_1;
    var result = skiaFontLoader.f66(tmp0_elvis_lhs == null ? Companion_getInstance_17().u5t_1 : tmp0_elvis_lhs, typefaceRequest.e5x_1, typefaceRequest.f5x_1);
    return new Immutable(result);
  };
  var androidx_compose_ui_text_font_SkiaFontLoader$stable;
  function SkiaFontLoader_init_$Init$(fontCache, $this) {
    fontCache = fontCache === VOID ? new FontCache() : fontCache;
    SkiaFontLoader.call($this, SkiaFontLoader$_init_$lambda_5eoe7t(fontCache));
    return $this;
  }
  function SkiaFontLoader_init_$Create$(fontCache) {
    return SkiaFontLoader_init_$Init$(fontCache, objectCreate(protoOf(SkiaFontLoader)));
  }
  function _get_fontCache__rq14qm($this) {
    var tmp0 = $this.e66_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, SkiaFontLoader$_get_fontCache_$ref_77g67v(), null);
    return tmp0.r1();
  }
  function SkiaFontLoader$_init_$lambda_5eoe7t($fontCache) {
    return function () {
      return $fontCache;
    };
  }
  function SkiaFontLoader$_get_fontCache_$ref_77g67v() {
    return constructCallableReference(function (p0) {
      return _get_fontCache__rq14qm(p0);
    }, 1, 0, 22);
  }
  function SkiaFontLoader(fontCacheProvider) {
    this.e66_1 = lazy_0(fontCacheProvider);
  }
  protoOf(SkiaFontLoader).g66 = function () {
    return _get_fontCache__rq14qm(this).h66_1;
  };
  protoOf(SkiaFontLoader).u61 = function (font) {
    if (!(font instanceof PlatformFont)) {
      if (!(font.p5w() === Companion_getInstance_20().r5w_1)) {
        throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
      }
      return null;
    }
    var tmp0_subject = font.p5w();
    var tmp;
    if (tmp0_subject === Companion_getInstance_20().q5w_1) {
      tmp = _get_fontCache__rq14qm(this).l66(font);
    } else if (tmp0_subject === Companion_getInstance_20().r5w_1) {
      // Inline function 'kotlin.runCatching' call
      var tmp_0;
      try {
        // Inline function 'kotlin.Companion.success' call
        var value = _get_fontCache__rq14qm(this).l66(font);
        tmp_0 = _Result___init__impl__xyqfz8(value);
      } catch ($p) {
        var tmp_1;
        if ($p instanceof Error) {
          var e = $p;
          // Inline function 'kotlin.Companion.failure' call
          tmp_1 = _Result___init__impl__xyqfz8(createFailure(e));
        } else {
          throw $p;
        }
        tmp_0 = tmp_1;
      }
      // Inline function 'kotlin.Result.getOrNull' call
      var this_0 = tmp_0;
      tmp = _Result___get_isFailure__impl__jpiriv(this_0) ? null : _Result___get_value__impl__bjfvqg(this_0);
    } else if (tmp0_subject === Companion_getInstance_20().s5w_1) {
      throw UnsupportedOperationException_init_$Create$_0('Unsupported Async font load path');
    } else {
      throw IllegalArgumentException_init_$Create$_0('Unknown loading type ' + FontLoadingStrategy__toString_impl_fx0z8f(font.p5w()));
    }
    return tmp;
  };
  protoOf(SkiaFontLoader).f66 = function (fontFamily, fontWeight, fontStyle) {
    return _get_fontCache__rq14qm(this).f66(fontFamily, fontWeight, fontStyle);
  };
  protoOf(SkiaFontLoader).m66 = function (font, $completion) {
    return this.u61(font);
  };
  protoOf(SkiaFontLoader).h60 = function (font, $completion) {
    return this.m66(font, $completion);
  };
  protoOf(SkiaFontLoader).j5y = function () {
    return _get_fontCache__rq14qm(this);
  };
  var androidx_compose_ui_text_input_PlatformImeOptions$stable;
  function ActualParagraph(text, style, annotations, placeholders, maxLines, overflow, constraints, density, fontFamilyResolver) {
    return new SkiaParagraph(new SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver), maxLines, overflow, constraints);
  }
  function ActualParagraph_0(paragraphIntrinsics, maxLines, overflow, constraints) {
    return new SkiaParagraph(paragraphIntrinsics instanceof SkiaParagraphIntrinsics ? paragraphIntrinsics : THROW_CCE(), maxLines, overflow, constraints);
  }
  function get_DefaultFontSize_0() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return DefaultFontSize_0;
  }
  var DefaultFontSize_0;
  function get_skTextStylesCache() {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return skTextStylesCache;
  }
  var skTextStylesCache;
  var androidx_compose_ui_text_platform_ComputedStyle_Immutable$stable;
  var androidx_compose_ui_text_platform_ComputedStyle_Mutable$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_StyleAdd$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_PutPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Op_EndPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleAdd$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleRemove$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_PutPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder_Cut_EndPlaceholder$stable;
  var androidx_compose_ui_text_platform_ParagraphBuilder$stable;
  function Immutable_0(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, fontRasterizationSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio) {
    textForegroundStyle = textForegroundStyle === VOID ? Unspecified_instance : textForegroundStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_6().e47_1 : brushSize;
    fontSize = fontSize === VOID ? NaN : fontSize;
    fontWeight = fontWeight === VOID ? null : fontWeight;
    fontStyle = fontStyle === VOID ? null : fontStyle;
    fontSynthesis = fontSynthesis === VOID ? null : fontSynthesis;
    fontFamily = fontFamily === VOID ? null : fontFamily;
    fontFeatureSettings = fontFeatureSettings === VOID ? null : fontFeatureSettings;
    fontRasterizationSettings = fontRasterizationSettings === VOID ? Companion_getInstance_39().g64() : fontRasterizationSettings;
    letterSpacing = letterSpacing === VOID ? null : letterSpacing;
    baselineShift = baselineShift === VOID ? null : baselineShift;
    textGeometricTransform = textGeometricTransform === VOID ? null : textGeometricTransform;
    localeList = localeList === VOID ? null : localeList;
    background = background === VOID ? Companion_getInstance().t4x_1 : background;
    textDecoration = textDecoration === VOID ? null : textDecoration;
    textDecorationLineStyle = textDecorationLineStyle === VOID ? null : textDecorationLineStyle;
    shadow = shadow === VOID ? null : shadow;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h53_1 : blendMode;
    lineHeight = lineHeight === VOID ? null : lineHeight;
    topRatio = topRatio === VOID ? -1.0 : topRatio;
    this.n66_1 = textForegroundStyle;
    this.o66_1 = brushSize;
    this.p66_1 = fontSize;
    this.q66_1 = fontWeight;
    this.r66_1 = fontStyle;
    this.s66_1 = fontSynthesis;
    this.t66_1 = fontFamily;
    this.u66_1 = fontFeatureSettings;
    this.v66_1 = fontRasterizationSettings;
    this.w66_1 = letterSpacing;
    this.x66_1 = baselineShift;
    this.y66_1 = textGeometricTransform;
    this.z66_1 = localeList;
    this.a67_1 = background;
    this.b67_1 = textDecoration;
    this.c67_1 = textDecorationLineStyle;
    this.d67_1 = shadow;
    this.e67_1 = drawStyle;
    this.f67_1 = blendMode;
    this.g67_1 = lineHeight;
    this.h67_1 = topRatio;
    this.i67_1 = new SkiaTextPaint();
  }
  protoOf(Immutable_0).r5v = function () {
    return this.q66_1;
  };
  protoOf(Immutable_0).s5v = function () {
    return this.r66_1;
  };
  protoOf(Immutable_0).t5v = function () {
    return this.s66_1;
  };
  protoOf(Immutable_0).u5v = function () {
    return this.t66_1;
  };
  protoOf(Immutable_0).j67 = function () {
    var paint = this.i67_1.o67();
    paint.f4h();
    this.i67_1.e4x(this.n66_1.h4y());
    this.i67_1.w65(this.n66_1.l5s(), this.o66_1, this.n66_1.i4u());
    this.i67_1.u65(this.e67_1);
    this.i67_1.i5a(this.f67_1);
    return paint;
  };
  protoOf(Immutable_0).p67 = function (fontFamilyResolver) {
    var res = TextStyle_init_$Create$();
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_0 = this.n66_1.h4y();
    if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      res.j4h(toArgb(this.n66_1.h4y()));
    }
    var foreground = this.j67();
    if (!(foreground.u4h() == null) || !foreground.i4h().equals(PaintMode_FILL_getInstance()) || !foreground.y4h()) {
      res.e4q(foreground);
    }
    var tmp0_safe_receiver = this.r66_1;
    var tmp = tmp0_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp0_safe_receiver;
      // Inline function 'kotlin.let' call
      var it = (tmp_0 == null ? null : new FontStyle(tmp_0)).j5r_1;
      res.k4q(toSkFontStyle(it));
    }
    // Inline function 'kotlin.takeUnless' call
    var this_1 = this.b67_1;
    var tmp_1;
    if (!equals(this_1, Companion_getInstance_32().f5u_1)) {
      tmp_1 = this_1;
    } else {
      tmp_1 = null;
    }
    var tmp1_safe_receiver = tmp_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.i4q(toSkDecorationStyle(tmp1_safe_receiver, this.n66_1.h4y(), this.c67_1));
    }
    if (!equals(this.a67_1, Companion_getInstance().t4x_1)) {
      // Inline function 'kotlin.also' call
      var this_2 = Paint_init_$Create$();
      this_2.j4h(toArgb(this.a67_1));
      res.g4q(this_2);
    }
    var tmp2_safe_receiver = this.q66_1;
    if (tmp2_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.k4q(res.p4l().u4f(tmp2_safe_receiver.v5r_1));
    }
    // Inline function 'kotlin.takeUnless' call
    var this_3 = this.d67_1;
    var tmp_2;
    if (!equals(this_3, Companion_getInstance_2().u54_1)) {
      tmp_2 = this_3;
    } else {
      tmp_2 = null;
    }
    var tmp3_safe_receiver = tmp_2;
    if (tmp3_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.m4q(toSkShadow(tmp3_safe_receiver));
    }
    var tmp4_safe_receiver = this.w66_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.x4q(tmp4_safe_receiver);
    }
    var tmp_3 = Companion_getInstance_7();
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.u66_1;
    var tmp$ret$17 = tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
    res.o4q(tmp_3.k4e(tmp$ret$17));
    res.e4r(toSkFontEdging(this.v66_1.h64_1));
    res.g4r(toSkFontHinting(this.v66_1.i64_1));
    res.f4r(this.v66_1.j64_1);
    res.p4q(this.p66_1);
    var tmp5_safe_receiver = this.t66_1;
    if (tmp5_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs_0 = this.q66_1;
      var tmp_4 = tmp0_elvis_lhs_0 == null ? Companion_getInstance_23().h5t_1 : tmp0_elvis_lhs_0;
      var tmp1_elvis_lhs = this.r66_1;
      var tmp_5;
      var tmp_6 = tmp1_elvis_lhs;
      if ((tmp_6 == null ? null : new FontStyle(tmp_6)) == null) {
        tmp_5 = Companion_getInstance_21().o5t_1;
      } else {
        tmp_5 = tmp1_elvis_lhs;
      }
      var tmp_7 = tmp_5;
      var tmp2_elvis_lhs = this.s66_1;
      var tmp_8;
      var tmp_9 = tmp2_elvis_lhs;
      if ((tmp_9 == null ? null : new FontSynthesis(tmp_9)) == null) {
        tmp_8 = Companion_getInstance_22().q5t_1;
      } else {
        tmp_8 = tmp2_elvis_lhs;
      }
      var tmp_10 = fontFamilyResolver.e5y(tmp5_safe_receiver, tmp_4, tmp_7, tmp_8).r1();
      var resolved = tmp_10 instanceof FontLoadResult ? tmp_10 : THROW_CCE();
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_4 = resolved.r67_1;
      var tmp$ret$20 = copyToArray(this_4);
      res.r4q(tmp$ret$20);
      res.b4r(resolved.q67_1);
    }
    var tmp6_safe_receiver = this.x66_1;
    var tmp_11 = tmp6_safe_receiver;
    if ((tmp_11 == null ? null : new BaselineShift(tmp_11)) == null)
      null;
    else {
      var tmp_12 = tmp6_safe_receiver;
      // Inline function 'kotlin.let' call
      var it_0 = (tmp_12 == null ? null : new BaselineShift(tmp_12)).l5r_1;
      var fontMetrics = res.d4r();
      res.z4q(_BaselineShift___get_multiplier__impl__qhmjek(it_0) * fontMetrics.s4e_1);
    }
    var tmp7_safe_receiver = this.g67_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      res.t4q(tmp7_safe_receiver / this.p66_1);
    }
    res.v4q(this.h67_1);
    return res;
  };
  protoOf(Immutable_0).s67 = function () {
    return new Mutable(this.n66_1, this.o66_1, this.p66_1, this.q66_1, this.r66_1, this.s66_1, this.t66_1, this.u66_1, this.v66_1, this.w66_1, this.x66_1, this.y66_1, this.z66_1, this.a67_1, this.b67_1, this.c67_1, this.d67_1, this.e67_1, this.f67_1, this.g67_1, this.h67_1);
  };
  protoOf(Immutable_0).toString = function () {
    var tmp = toString_0(this.n66_1);
    var tmp_0 = Size__toString_impl_o87ni8(this.o66_1);
    var tmp_1 = toString(this.q66_1);
    var tmp_2 = this.r66_1;
    var tmp_3 = toString(tmp_2 == null ? null : new FontStyle(tmp_2));
    var tmp_4 = this.s66_1;
    var tmp_5 = toString(tmp_4 == null ? null : new FontSynthesis(tmp_4));
    var tmp_6 = toString(this.t66_1);
    var tmp_7 = this.v66_1.toString();
    var tmp_8 = this.x66_1;
    var tmp_9 = toString(tmp_8 == null ? null : new BaselineShift(tmp_8));
    var tmp_10 = toString(this.y66_1);
    var tmp_11 = toString(this.z66_1);
    var tmp_12 = Color__toString_impl_hpzmaq(this.a67_1);
    var tmp_13 = toString(this.b67_1);
    var tmp_14 = this.c67_1;
    return 'Immutable(textForegroundStyle=' + tmp + ', brushSize=' + tmp_0 + ', fontSize=' + this.p66_1 + ', fontWeight=' + tmp_1 + ', fontStyle=' + tmp_3 + ', fontSynthesis=' + tmp_5 + ', fontFamily=' + tmp_6 + ', fontFeatureSettings=' + this.u66_1 + ', fontRasterizationSettings=' + tmp_7 + ', letterSpacing=' + this.w66_1 + ', baselineShift=' + tmp_9 + ', textGeometricTransform=' + tmp_10 + ', localeList=' + tmp_11 + ', background=' + tmp_12 + ', textDecoration=' + tmp_13 + ', textDecorationLineStyle=' + toString(tmp_14 == null ? null : new TextDecorationLineStyle(tmp_14)) + ', shadow=' + toString(this.d67_1) + ', drawStyle=' + toString(this.e67_1) + ', blendMode=' + BlendMode__toString_impl_uuibkd(this.f67_1) + ', lineHeight=' + this.g67_1 + ', topRatio=' + this.h67_1 + ')';
  };
  protoOf(Immutable_0).hashCode = function () {
    var result = hashCode(this.n66_1);
    result = imul(result, 31) + Size__hashCode_impl_2h1qpd(this.o66_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.p66_1) | 0;
    result = imul(result, 31) + (this.q66_1 == null ? 0 : this.q66_1.hashCode()) | 0;
    var tmp = imul(result, 31);
    var tmp_0;
    var tmp_1 = this.r66_1;
    if ((tmp_1 == null ? null : new FontStyle(tmp_1)) == null) {
      tmp_0 = 0;
    } else {
      tmp_0 = FontStyle__hashCode_impl_7qhg4w(this.r66_1);
    }
    result = tmp + tmp_0 | 0;
    var tmp_2 = imul(result, 31);
    var tmp_3;
    var tmp_4 = this.s66_1;
    if ((tmp_4 == null ? null : new FontSynthesis(tmp_4)) == null) {
      tmp_3 = 0;
    } else {
      tmp_3 = FontSynthesis__hashCode_impl_4wi11v(this.s66_1);
    }
    result = tmp_2 + tmp_3 | 0;
    result = imul(result, 31) + (this.t66_1 == null ? 0 : hashCode(this.t66_1)) | 0;
    result = imul(result, 31) + (this.u66_1 == null ? 0 : getStringHashCode(this.u66_1)) | 0;
    result = imul(result, 31) + this.v66_1.hashCode() | 0;
    result = imul(result, 31) + (this.w66_1 == null ? 0 : getNumberHashCode(this.w66_1)) | 0;
    var tmp_5 = imul(result, 31);
    var tmp_6;
    var tmp_7 = this.x66_1;
    if ((tmp_7 == null ? null : new BaselineShift(tmp_7)) == null) {
      tmp_6 = 0;
    } else {
      tmp_6 = BaselineShift__hashCode_impl_g0potx(this.x66_1);
    }
    result = tmp_5 + tmp_6 | 0;
    result = imul(result, 31) + (this.y66_1 == null ? 0 : this.y66_1.hashCode()) | 0;
    result = imul(result, 31) + (this.z66_1 == null ? 0 : this.z66_1.hashCode()) | 0;
    result = imul(result, 31) + Color__hashCode_impl_vjyivj(this.a67_1) | 0;
    result = imul(result, 31) + (this.b67_1 == null ? 0 : this.b67_1.hashCode()) | 0;
    var tmp_8 = imul(result, 31);
    var tmp_9;
    var tmp_10 = this.c67_1;
    if ((tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)) == null) {
      tmp_9 = 0;
    } else {
      tmp_9 = TextDecorationLineStyle__hashCode_impl_8ntype(this.c67_1);
    }
    result = tmp_8 + tmp_9 | 0;
    result = imul(result, 31) + (this.d67_1 == null ? 0 : this.d67_1.hashCode()) | 0;
    result = imul(result, 31) + (this.e67_1 == null ? 0 : hashCode(this.e67_1)) | 0;
    result = imul(result, 31) + BlendMode__hashCode_impl_93ceri(this.f67_1) | 0;
    result = imul(result, 31) + (this.g67_1 == null ? 0 : getNumberHashCode(this.g67_1)) | 0;
    result = imul(result, 31) + getNumberHashCode(this.h67_1) | 0;
    return result;
  };
  protoOf(Immutable_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof Immutable_0))
      return false;
    if (!equals(this.n66_1, other.n66_1))
      return false;
    if (!equals(this.o66_1, other.o66_1))
      return false;
    if (!equals(this.p66_1, other.p66_1))
      return false;
    if (!equals(this.q66_1, other.q66_1))
      return false;
    var tmp = this.r66_1;
    var tmp_0 = tmp == null ? null : new FontStyle(tmp);
    var tmp_1 = other.r66_1;
    if (!equals(tmp_0, tmp_1 == null ? null : new FontStyle(tmp_1)))
      return false;
    var tmp_2 = this.s66_1;
    var tmp_3 = tmp_2 == null ? null : new FontSynthesis(tmp_2);
    var tmp_4 = other.s66_1;
    if (!equals(tmp_3, tmp_4 == null ? null : new FontSynthesis(tmp_4)))
      return false;
    if (!equals(this.t66_1, other.t66_1))
      return false;
    if (!(this.u66_1 == other.u66_1))
      return false;
    if (!this.v66_1.equals(other.v66_1))
      return false;
    if (!equals(this.w66_1, other.w66_1))
      return false;
    var tmp_5 = this.x66_1;
    var tmp_6 = tmp_5 == null ? null : new BaselineShift(tmp_5);
    var tmp_7 = other.x66_1;
    if (!equals(tmp_6, tmp_7 == null ? null : new BaselineShift(tmp_7)))
      return false;
    if (!equals(this.y66_1, other.y66_1))
      return false;
    if (!equals(this.z66_1, other.z66_1))
      return false;
    if (!equals(this.a67_1, other.a67_1))
      return false;
    if (!equals(this.b67_1, other.b67_1))
      return false;
    var tmp_8 = this.c67_1;
    var tmp_9 = tmp_8 == null ? null : new TextDecorationLineStyle(tmp_8);
    var tmp_10 = other.c67_1;
    if (!equals(tmp_9, tmp_10 == null ? null : new TextDecorationLineStyle(tmp_10)))
      return false;
    if (!equals(this.d67_1, other.d67_1))
      return false;
    if (!equals(this.e67_1, other.e67_1))
      return false;
    if (!(this.f67_1 === other.f67_1))
      return false;
    if (!equals(this.g67_1, other.g67_1))
      return false;
    if (!equals(this.h67_1, other.h67_1))
      return false;
    return true;
  };
  function Mutable(textForegroundStyle, brushSize, fontSize, fontWeight, fontStyle, fontSynthesis, fontFamily, fontFeatureSettings, fontRasterizationSettings, letterSpacing, baselineShift, textGeometricTransform, localeList, background, textDecoration, textDecorationLineStyle, shadow, drawStyle, blendMode, lineHeight, topRatio) {
    fontRasterizationSettings = fontRasterizationSettings === VOID ? Companion_getInstance_39().g64() : fontRasterizationSettings;
    this.t67_1 = textForegroundStyle;
    this.u67_1 = brushSize;
    this.v67_1 = fontSize;
    this.w67_1 = fontWeight;
    this.x67_1 = fontStyle;
    this.y67_1 = fontSynthesis;
    this.z67_1 = fontFamily;
    this.a68_1 = fontFeatureSettings;
    this.b68_1 = fontRasterizationSettings;
    this.c68_1 = letterSpacing;
    this.d68_1 = baselineShift;
    this.e68_1 = textGeometricTransform;
    this.f68_1 = localeList;
    this.g68_1 = background;
    this.h68_1 = textDecoration;
    this.i68_1 = textDecorationLineStyle;
    this.j68_1 = shadow;
    this.k68_1 = drawStyle;
    this.l68_1 = blendMode;
    this.m68_1 = lineHeight;
    this.n68_1 = topRatio;
  }
  protoOf(Mutable).r5v = function () {
    return this.w67_1;
  };
  protoOf(Mutable).s5v = function () {
    return this.x67_1;
  };
  protoOf(Mutable).t5v = function () {
    return this.y67_1;
  };
  protoOf(Mutable).u5v = function () {
    return this.z67_1;
  };
  protoOf(Mutable).o68 = function (density, other) {
    var fontSize = toPx(other.u5q_1, density, this.v67_1);
    this.t67_1 = this.t67_1.r5s(other.t5q_1);
    var tmp0_safe_receiver = other.y5q_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.z67_1 = tmp0_safe_receiver;
    }
    this.v67_1 = fontSize;
    var tmp1_safe_receiver = other.v5q_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.w67_1 = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = other.w5q_1;
    var tmp = tmp2_safe_receiver;
    if ((tmp == null ? null : new FontStyle(tmp)) == null)
      null;
    else {
      var tmp_0 = tmp2_safe_receiver;
      // Inline function 'kotlin.let' call
      this.x67_1 = (tmp_0 == null ? null : new FontStyle(tmp_0)).j5r_1;
    }
    var tmp3_safe_receiver = other.x5q_1;
    var tmp_1 = tmp3_safe_receiver;
    if ((tmp_1 == null ? null : new FontSynthesis(tmp_1)) == null)
      null;
    else {
      var tmp_2 = tmp3_safe_receiver;
      // Inline function 'kotlin.let' call
      this.y67_1 = (tmp_2 == null ? null : new FontSynthesis(tmp_2)).k5r_1;
    }
    var tmp4_safe_receiver = other.z5q_1;
    if (tmp4_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.a68_1 = tmp4_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = other.a5r_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      this.c68_1 = toPx(other.a5r_1, density, fontSize);
    }
    var tmp5_safe_receiver = other.b5r_1;
    var tmp_3 = tmp5_safe_receiver;
    if ((tmp_3 == null ? null : new BaselineShift(tmp_3)) == null)
      null;
    else {
      var tmp_4 = tmp5_safe_receiver;
      // Inline function 'kotlin.let' call
      this.d68_1 = (tmp_4 == null ? null : new BaselineShift(tmp_4)).l5r_1;
    }
    var tmp6_safe_receiver = other.c5r_1;
    if (tmp6_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.e68_1 = tmp6_safe_receiver;
    }
    var tmp7_safe_receiver = other.d5r_1;
    if (tmp7_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.f68_1 = tmp7_safe_receiver;
    }
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    var this_1 = other.e5r_1;
    if (!equals(_Color___get_value__impl__1pls5m(this_1), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      this.g68_1 = other.e5r_1;
    }
    var tmp8_safe_receiver = other.f5r_1;
    if (tmp8_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.h68_1 = tmp8_safe_receiver;
    }
    var tmp9_safe_receiver = other.g5r_1;
    if (tmp9_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.j68_1 = tmp9_safe_receiver;
    }
    var tmp10_safe_receiver = other.i5r_1;
    if (tmp10_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      this.k68_1 = tmp10_safe_receiver;
    }
    var tmp11_safe_receiver = other.h5r_1;
    if (tmp11_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      var tmp0_safe_receiver_0 = tmp11_safe_receiver.s5s_1;
      var tmp_5;
      var tmp_6 = tmp0_safe_receiver_0;
      if ((tmp_6 == null ? null : new TextDecorationLineStyle(tmp_6)) == null) {
        tmp_5 = null;
      } else {
        var tmp_7 = tmp0_safe_receiver_0;
        // Inline function 'kotlin.let' call
        this.i68_1 = (tmp_7 == null ? null : new TextDecorationLineStyle(tmp_7)).c66_1;
        tmp_5 = Unit_instance;
      }
    }
  };
  protoOf(Mutable).p68 = function () {
    return new Immutable_0(this.t67_1, this.u67_1, this.v67_1, this.w67_1, this.x67_1, this.y67_1, this.z67_1, this.a68_1, this.b68_1, this.c68_1, this.d68_1, this.e68_1, this.f68_1, this.g68_1, this.h68_1, this.i68_1, this.j68_1, this.k68_1, this.l68_1, this.m68_1, this.n68_1);
  };
  function toSkFontStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_21().p5t_1 ? Companion_getInstance_8().r4f_1 : Companion_getInstance_8().p4f_1;
  }
  function toSkDecorationStyle(_this__u8e3s4, color, textDecorationLineStyle) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var underline = _this__u8e3s4.r62(Companion_getInstance_32().g5u_1);
    var overline = false;
    var lineThrough = _this__u8e3s4.r62(Companion_getInstance_32().h5u_1);
    var gaps = false;
    var tmp;
    var tmp_0 = textDecorationLineStyle;
    if ((tmp_0 == null ? null : new TextDecorationLineStyle(tmp_0)) == null) {
      tmp = null;
    } else {
      tmp = toSkDecorationLineStyle(textDecorationLineStyle);
    }
    var tmp1_elvis_lhs = tmp;
    var lineStyle = tmp1_elvis_lhs == null ? DecorationLineStyle_SOLID_getInstance() : tmp1_elvis_lhs;
    var thicknessMultiplier = 1.0;
    return new DecorationStyle(underline, overline, lineThrough, gaps, toArgb(color), lineStyle, thicknessMultiplier);
  }
  function toSkShadow(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp = toArgb(_this__u8e3s4.v54_1);
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_0 = _this__u8e3s4.w54_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Offset___get_packedValue__impl__xh2k8q(this_0);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp_0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_1 = _this__u8e3s4.w54_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Offset___get_packedValue__impl__xh2k8q(this_1);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    var tmp$ret$4 = floatFromBits(bits_0);
    return new Shadow_0(tmp, tmp_0, tmp$ret$4, _this__u8e3s4.x54_1);
  }
  function toPx(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0))) {
      tmp = fontSize;
    } else {
      if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
        tmp = fontSize * _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
      } else {
        if (_TextUnit___get_isSp__impl__8c3r6q(_this__u8e3s4)) {
          // Inline function 'kotlin.with' call
          tmp = density.p47(_this__u8e3s4);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'Unexpected size in TextUnit.toPx';
          throw IllegalStateException_init_$Create$_0(toString_0(message));
        }
      }
    }
    return tmp;
  }
  function toSkDecorationLineStyle(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_40().x65_1 ? DecorationLineStyle_SOLID_getInstance() : _this__u8e3s4 === Companion_getInstance_40().y65_1 ? DecorationLineStyle_DOUBLE_getInstance() : _this__u8e3s4 === Companion_getInstance_40().z65_1 ? DecorationLineStyle_DOTTED_getInstance() : _this__u8e3s4 === Companion_getInstance_40().a66_1 ? DecorationLineStyle_DASHED_getInstance() : _this__u8e3s4 === Companion_getInstance_40().b66_1 ? DecorationLineStyle_WAVY_getInstance() : DecorationLineStyle_SOLID_getInstance();
  }
  function ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(p0) {
    return constructCallableReference(function () {
      return p0.q68_1;
    }, 0, 0, 23, VOID, [p0]);
  }
  function ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp() {
    return constructCallableReference(function (p0) {
      return p0.w68();
    }, 1, 0, 24);
  }
  function ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(p0) {
    return constructCallableReference(function () {
      return p0.x68_1;
    }, 0, 0, 25, VOID, [p0]);
  }
  function ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3() {
    return constructCallableReference(function (p0) {
      return p0.w68();
    }, 1, 0, 26);
  }
  function StyleAdd(position, style) {
    Op.call(this);
    this.a69_1 = position;
    this.b69_1 = style;
  }
  protoOf(StyleAdd).w68 = function () {
    return this.a69_1;
  };
  protoOf(StyleAdd).toString = function () {
    return 'StyleAdd(position=' + this.a69_1 + ', style=' + toString_0(this.b69_1) + ')';
  };
  protoOf(StyleAdd).hashCode = function () {
    var result = this.a69_1;
    result = imul(result, 31) + hashCode(this.b69_1) | 0;
    return result;
  };
  protoOf(StyleAdd).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd))
      return false;
    if (!(this.a69_1 === other.a69_1))
      return false;
    if (!equals(this.b69_1, other.b69_1))
      return false;
    return true;
  };
  function PutPlaceholder(cut, width, height) {
    Op.call(this);
    this.s68_1 = cut;
    this.t68_1 = width;
    this.u68_1 = height;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.v68_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$PutPlaceholder$_get_position_$ref_jq6gk8(this.s68_1), null);
  }
  protoOf(PutPlaceholder).w68 = function () {
    var tmp0 = this.v68_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$PutPlaceholder$_get_position_$ref_n2s1fp(), null);
    return tmp0.get();
  };
  protoOf(PutPlaceholder).toString = function () {
    return 'PutPlaceholder(cut=' + this.s68_1.toString() + ', width=' + this.t68_1 + ', height=' + this.u68_1 + ')';
  };
  protoOf(PutPlaceholder).hashCode = function () {
    var result = this.s68_1.hashCode();
    result = imul(result, 31) + getNumberHashCode(this.t68_1) | 0;
    result = imul(result, 31) + getNumberHashCode(this.u68_1) | 0;
    return result;
  };
  protoOf(PutPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder))
      return false;
    if (!this.s68_1.equals(other.s68_1))
      return false;
    if (!equals(this.t68_1, other.t68_1))
      return false;
    if (!equals(this.u68_1, other.u68_1))
      return false;
    return true;
  };
  function EndPlaceholder(cut) {
    Op.call(this);
    this.y68_1 = cut;
    var tmp = this;
    var tmp_0 = KProperty0;
    tmp.z68_1 = getPropertyCallableRef('position', 0, tmp_0, ParagraphBuilder$Cut$EndPlaceholder$_get_position_$ref_bdxpek(this.y68_1), null);
  }
  protoOf(EndPlaceholder).w68 = function () {
    var tmp0 = this.z68_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('position', 1, tmp, ParagraphBuilder$Op$EndPlaceholder$_get_position_$ref_81c4j3(), null);
    return tmp0.get();
  };
  protoOf(EndPlaceholder).toString = function () {
    return 'EndPlaceholder(cut=' + this.y68_1.toString() + ')';
  };
  protoOf(EndPlaceholder).hashCode = function () {
    return this.y68_1.hashCode();
  };
  protoOf(EndPlaceholder).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder))
      return false;
    if (!this.y68_1.equals(other.y68_1))
      return false;
    return true;
  };
  function StyleAdd_0(position, style) {
    Cut.call(this);
    this.c69_1 = position;
    this.d69_1 = style;
  }
  protoOf(StyleAdd_0).w68 = function () {
    return this.c69_1;
  };
  protoOf(StyleAdd_0).toString = function () {
    return 'StyleAdd(position=' + this.c69_1 + ', style=' + this.d69_1.toString() + ')';
  };
  protoOf(StyleAdd_0).hashCode = function () {
    var result = this.c69_1;
    result = imul(result, 31) + this.d69_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleAdd_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleAdd_0))
      return false;
    if (!(this.c69_1 === other.c69_1))
      return false;
    if (!this.d69_1.equals(other.d69_1))
      return false;
    return true;
  };
  function StyleRemove(position, style) {
    Cut.call(this);
    this.e69_1 = position;
    this.f69_1 = style;
  }
  protoOf(StyleRemove).w68 = function () {
    return this.e69_1;
  };
  protoOf(StyleRemove).toString = function () {
    return 'StyleRemove(position=' + this.e69_1 + ', style=' + this.f69_1.toString() + ')';
  };
  protoOf(StyleRemove).hashCode = function () {
    var result = this.e69_1;
    result = imul(result, 31) + this.f69_1.hashCode() | 0;
    return result;
  };
  protoOf(StyleRemove).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof StyleRemove))
      return false;
    if (!(this.e69_1 === other.e69_1))
      return false;
    if (!this.f69_1.equals(other.f69_1))
      return false;
    return true;
  };
  function PutPlaceholder_0(position, placeholder) {
    Cut.call(this);
    this.q68_1 = position;
    this.r68_1 = placeholder;
  }
  protoOf(PutPlaceholder_0).w68 = function () {
    return this.q68_1;
  };
  protoOf(PutPlaceholder_0).toString = function () {
    return 'PutPlaceholder(position=' + this.q68_1 + ', placeholder=' + this.r68_1.toString() + ')';
  };
  protoOf(PutPlaceholder_0).hashCode = function () {
    var result = this.q68_1;
    result = imul(result, 31) + this.r68_1.hashCode() | 0;
    return result;
  };
  protoOf(PutPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PutPlaceholder_0))
      return false;
    if (!(this.q68_1 === other.q68_1))
      return false;
    if (!this.r68_1.equals(other.r68_1))
      return false;
    return true;
  };
  function EndPlaceholder_0(position) {
    Cut.call(this);
    this.x68_1 = position;
  }
  protoOf(EndPlaceholder_0).w68 = function () {
    return this.x68_1;
  };
  protoOf(EndPlaceholder_0).toString = function () {
    return 'EndPlaceholder(position=' + this.x68_1 + ')';
  };
  protoOf(EndPlaceholder_0).hashCode = function () {
    return this.x68_1;
  };
  protoOf(EndPlaceholder_0).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EndPlaceholder_0))
      return false;
    if (!(this.x68_1 === other.x68_1))
      return false;
    return true;
  };
  function _get_initialStyle__6to25e($this) {
    var tmp = $this.t69_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('initialStyle');
    }
  }
  function _get_ops__e6e97j($this) {
    var tmp = $this.u69_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('ops');
    }
  }
  function prepareDefaultStyle($this) {
    $this.t69_1 = copyWithDefaultFontSize($this.i69_1.i5v(), $this.q69_1);
    $this.s69_1 = ComputedStyle($this.o69_1, _get_initialStyle__6to25e($this), $this.i69_1.d5p_1.d5m_1, $this.j69_1, $this.r69_1, $this.i69_1.g5w(), $this.i69_1.i5w()).p68();
  }
  function Op() {
  }
  function Cut() {
  }
  function makeOps($this, annotations, placeholders) {
    // Inline function 'kotlin.collections.mutableListOf' call
    var cuts = ArrayList_init_$Create$();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = annotations.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = annotations.m(index);
        $l$block: {
          var tmp = item.l5l_1;
          if (!(tmp instanceof SpanStyle)) {
            break $l$block;
          }
          cuts.g(new StyleAdd_0(item.m5l_1, item.l5l_1));
          cuts.g(new StyleRemove(item.n5l_1, item.l5l_1));
        }
      }
       while (inductionVariable <= last);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_0 = 0;
    var last_0 = placeholders.l() - 1 | 0;
    if (inductionVariable_0 <= last_0)
      do {
        var index_0 = inductionVariable_0;
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var item_0 = placeholders.m(index_0);
        cuts.g(new PutPlaceholder_0(item_0.m5l_1, item_0.l5l_1));
        cuts.g(new EndPlaceholder_0(item_0.n5l_1));
      }
       while (inductionVariable_0 <= last_0);
    var ops = mutableListOf([new StyleAdd(0, $this.s69_1.s67())]);
    // Inline function 'kotlin.collections.sortBy' call
    if (cuts.l() > 1) {
      // Inline function 'kotlin.comparisons.compareBy' call
      var tmp_0 = ParagraphBuilder$makeOps$lambda;
      var tmp$ret$6 = new sam$kotlin_Comparator$0_1(tmp_0);
      sortWith(cuts, tmp$ret$6);
    }
    var activeStyles = mutableListOf([_get_initialStyle__6to25e($this)]);
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable_1 = 0;
    var last_1 = cuts.l() - 1 | 0;
    if (inductionVariable_1 <= last_1)
      do {
        var index_1 = inductionVariable_1;
        inductionVariable_1 = inductionVariable_1 + 1 | 0;
        var item_1 = cuts.m(index_1);
        if (item_1 instanceof StyleAdd_0) {
          activeStyles.g(item_1.d69_1);
          var prev = previousStyleAddAtTheSamePosition($this, item_1.c69_1, ops);
          if (prev == null) {
            // Inline function 'kotlin.also' call
            var this_0 = mergeStyles($this, activeStyles);
            this_0.o68($this.o69_1, item_1.d69_1);
            ops.g(new StyleAdd(item_1.c69_1, this_0));
          } else {
            var tmp_1 = prev.b69_1;
            var style = tmp_1 instanceof Mutable ? tmp_1 : THROW_CCE();
            style.o68($this.o69_1, item_1.d69_1);
          }
        } else {
          if (item_1 instanceof StyleRemove) {
            activeStyles.c2(item_1.f69_1);
            ops.g(new StyleAdd(item_1.e69_1, mergeStyles($this, activeStyles)));
          } else {
            if (item_1 instanceof PutPlaceholder_0) {
              var currentStyle = mergeStyles($this, activeStyles);
              var op = new PutPlaceholder(item_1, toPx(item_1.r68_1.c5q_1, $this.o69_1, currentStyle.v67_1), toPx(item_1.r68_1.d5q_1, $this.o69_1, currentStyle.v67_1));
              ops.g(op);
            } else {
              if (item_1 instanceof EndPlaceholder_0)
                ops.g(new EndPlaceholder(item_1));
              else {
                noWhenBranchMatchedException();
              }
            }
          }
        }
      }
       while (inductionVariable_1 <= last_1);
    return ops;
  }
  function mergeStyles($this, activeStyles) {
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.check' call
    if (!!activeStyles.n()) {
      var message = 'There should be at least one active style';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    var style = ComputedStyle($this.o69_1, activeStyles.m(0), $this.i69_1.d5p_1.d5m_1, $this.j69_1, $this.r69_1, $this.i69_1.g5w(), $this.i69_1.i5w());
    var inductionVariable = 1;
    var last = activeStyles.l();
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        style.o68($this.o69_1, activeStyles.m(i));
      }
       while (inductionVariable < last);
    return style;
  }
  function previousStyleAddAtTheSamePosition($this, position, ops) {
    // Inline function 'androidx.compose.ui.util.fastForEachReversed' call
    var inductionVariable = ops.l() - 1 | 0;
    if (0 <= inductionVariable)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        var item = ops.m(index);
        if (item.w68() < position)
          return null;
        if (item instanceof StyleAdd)
          return item;
      }
       while (0 <= inductionVariable);
    return null;
  }
  function textStyleToParagraphStyle($this, style, computedStyle) {
    var pStyle = new ParagraphStyle();
    pStyle.j4p(true);
    pStyle.k4p(makeSkTextStyle($this, computedStyle));
    // Inline function 'kotlin.let' call
    var it = style.e5w();
    pStyle.m4p(toSkAlignment(it));
    var lineHeight = computedStyle.g67_1;
    if (!(lineHeight == null) && lineHeight > computedStyle.p66_1) {
      var tmp0_elvis_lhs = style.i5w();
      var lineHeightStyle = tmp0_elvis_lhs == null ? Companion_getInstance_30().o62_1 : tmp0_elvis_lhs;
      pStyle.p4p(toHeightMode(lineHeightStyle.c5s_1));
    } else {
      pStyle.p4p(HeightMode_DISABLE_ALL_getInstance());
    }
    pStyle.l4p(toSkDirection($this.p69_1));
    var tmp1_safe_receiver = $this.i69_1.h5w();
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      pStyle.q4p(new TextIndent(toPx(tmp1_safe_receiver.t5r_1, $this.o69_1, computedStyle.p66_1), toPx(tmp1_safe_receiver.u5r_1, $this.o69_1, computedStyle.p66_1)));
    }
    return pStyle;
  }
  function makeSkTextStyle($this, style) {
    var tmp0 = get_skTextStylesCache();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.compose.ui.text.WeakKeysCache.getOrPut' call
      var weakKey = new Key_0(style);
      var existing = access$_get_cache__fo4c6p(tmp0).u1(weakKey);
      if (!(existing == null)) {
        tmp$ret$0 = existing;
        break $l$block;
      }
      var value = style.p67($this.g69_1);
      // Inline function 'kotlin.collections.set' call
      access$_get_cache__fo4c6p(tmp0).y1(weakKey, value);
      var tmp = access$_get_registry__6myjy(tmp0);
      // Inline function 'kotlin.js.toJsReference' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = style;
      // Inline function 'kotlin.js.toJsReference' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp.register(tmp_0, weakKey);
      tmp$ret$0 = value;
    }
    return tmp$ret$0;
  }
  function sam$kotlin_Comparator$0_1(function_0) {
    this.w69_1 = function_0;
  }
  protoOf(sam$kotlin_Comparator$0_1).zb = function (a, b) {
    return this.w69_1(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).compare = function (a, b) {
    return this.zb(a, b);
  };
  protoOf(sam$kotlin_Comparator$0_1).r2 = function () {
    return this.w69_1;
  };
  protoOf(sam$kotlin_Comparator$0_1).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Comparator) : false) {
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
  protoOf(sam$kotlin_Comparator$0_1).hashCode = function () {
    return hashCode(this.r2());
  };
  function ParagraphBuilder$makeOps$lambda(a, b) {
    // Inline function 'kotlin.comparisons.compareValuesBy' call
    var tmp = a.w68();
    var tmp$ret$2 = b.w68();
    return compareValues(tmp, tmp$ret$2);
  }
  function ParagraphBuilder$defaultFont$delegate$lambda(this$0) {
    return function () {
      var loadResult = resolveFontFamily(this$0.i69_1, this$0.g69_1);
      return Font_init_$Create$(loadResult == null ? null : loadResult.q67_1, this$0.s69_1.p66_1);
    };
  }
  function ParagraphBuilder$_get_defaultFont_$ref_9jivqf() {
    return constructCallableReference(function (p0) {
      return p0.l65();
    }, 1, 0, 27);
  }
  function ParagraphBuilder_0(fontFamilyResolver, text, textStyle, brushSize, ellipsis, maxLines, annotations, placeholders, density, textDirection, drawStyle, blendMode) {
    brushSize = brushSize === VOID ? Companion_getInstance_6().e47_1 : brushSize;
    ellipsis = ellipsis === VOID ? '' : ellipsis;
    maxLines = maxLines === VOID ? 2147483647 : maxLines;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h53_1 : blendMode;
    this.g69_1 = fontFamilyResolver;
    this.h69_1 = text;
    this.i69_1 = textStyle;
    this.j69_1 = brushSize;
    this.k69_1 = ellipsis;
    this.l69_1 = maxLines;
    this.m69_1 = annotations;
    this.n69_1 = placeholders;
    this.o69_1 = density;
    this.p69_1 = textDirection;
    this.q69_1 = drawStyle;
    this.r69_1 = blendMode;
    this.s69_1 = new Immutable_0();
    var tmp = this;
    tmp.v69_1 = lazy_0(ParagraphBuilder$defaultFont$delegate$lambda(this));
  }
  protoOf(ParagraphBuilder_0).x69 = function (paragraph) {
    if (paragraph == null)
      return Unit_instance;
    prepareDefaultStyle(this);
    var foregroundPaint = this.s69_1.j67();
    paragraph.r4o(0, this.h69_1.length, foregroundPaint);
  };
  protoOf(ParagraphBuilder_0).u2a = function () {
    prepareDefaultStyle(this);
    this.u69_1 = makeOps(this, this.m69_1, this.n69_1);
    var pos = 0;
    var ps = textStyleToParagraphStyle(this, this.i69_1, this.s69_1);
    if (!(this.l69_1 === 2147483647)) {
      ps.n4p(this.l69_1);
      ps.o4p(this.k69_1);
    }
    var tmp = this.g69_1;
    var platformFontLoader = (tmp instanceof FontFamilyResolverImpl ? tmp : THROW_CCE()).u5x_1;
    var tmp_0;
    if (platformFontLoader instanceof SkiaFontLoader) {
      tmp_0 = platformFontLoader.g66();
    } else {
      throw IllegalStateException_init_$Create$_0('Unsupported font loader ' + toString_0(platformFontLoader));
    }
    var fontCollection = tmp_0;
    var pb = new ParagraphBuilder(ps, fontCollection);
    var addText = true;
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _get_ops__e6e97j(this);
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        if (addText && pos < item.w68()) {
          pb.x4o(toString_0(substring(this.h69_1, pos, item.w68())));
        }
        if (item instanceof StyleAdd) {
          var tmp_1 = item.b69_1.u5v();
          var tmp1_elvis_lhs = item.b69_1.r5v();
          var tmp_2 = tmp1_elvis_lhs == null ? Companion_getInstance_23().h5t_1 : tmp1_elvis_lhs;
          var tmp2_elvis_lhs = item.b69_1.s5v();
          var tmp_3;
          var tmp_4 = tmp2_elvis_lhs;
          if ((tmp_4 == null ? null : new FontStyle(tmp_4)) == null) {
            tmp_3 = Companion_getInstance_21().o5t_1;
          } else {
            tmp_3 = tmp2_elvis_lhs;
          }
          var tmp_5 = tmp_3;
          var tmp3_elvis_lhs = item.b69_1.t5v();
          var tmp_6;
          var tmp_7 = tmp3_elvis_lhs;
          if ((tmp_7 == null ? null : new FontSynthesis(tmp_7)) == null) {
            tmp_6 = Companion_getInstance_22().t5t_1;
          } else {
            tmp_6 = tmp3_elvis_lhs;
          }
          this.g69_1.e5y(tmp_1, tmp_2, tmp_5, tmp_6);
          var tmp_8 = item.b69_1;
          var style = (tmp_8 instanceof Mutable ? tmp_8 : THROW_CCE()).p68();
          item.b69_1 = style;
          pb.w4o(makeSkTextStyle(this, style));
        } else {
          if (item instanceof PutPlaceholder) {
            var placeholderStyle = new PlaceholderStyle(item.t68_1, item.u68_1, toSkPlaceholderAlignment(item.s68_1.r68_1.e5q_1), BaselineMode_ALPHABETIC_getInstance(), 0.0);
            pb.y4o(placeholderStyle);
            addText = false;
          } else {
            if (item instanceof EndPlaceholder) {
              addText = true;
            } else {
              noWhenBranchMatchedException();
            }
          }
        }
        pos = item.w68();
      }
       while (inductionVariable <= last);
    if (addText && pos < this.h69_1.length) {
      pb.x4o(toString_0(substring(this.h69_1, pos, this.h69_1.length)));
    }
    return pb.u2a();
  };
  protoOf(ParagraphBuilder_0).l65 = function () {
    var tmp0 = this.v69_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('defaultFont', 1, tmp, ParagraphBuilder$_get_defaultFont_$ref_9jivqf(), null);
    return tmp0.r1();
  };
  protoOf(ParagraphBuilder_0).k65 = function (paragraph) {
    var metrics = this.l65().y4d();
    var ascent = metrics.s4e_1;
    var descent = metrics.t4e_1;
    var baseline = paragraph.h4o();
    var lineHeight = this.s69_1.g67_1;
    if (!(lineHeight == null)) {
      var topRatio = this.s69_1.h67_1;
      if (0.0 <= topRatio ? topRatio <= 1.0 : false) {
        var extraLeading = lineHeight - this.s69_1.p66_1;
        ascent = ascent - extraLeading * topRatio;
        descent = descent + extraLeading * (1.0 - topRatio);
      } else {
        var multiplier = lineHeight / this.s69_1.p66_1;
        ascent = ascent * multiplier;
        descent = descent * multiplier;
      }
    }
    var height = descent - ascent;
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return [new LineMetrics(0, 0, 0, 0, true, -ascent, descent, ascent, height, 0.0, 0.0, baseline, 0)];
  };
  function copyWithDefaultFontSize(_this__u8e3s4, drawStyle) {
    drawStyle = drawStyle === VOID ? null : drawStyle;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var fontSize = orDefaultFontSize(_this__u8e3s4.u5q_1);
    var tmp;
    if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4.a5r_1)) {
      // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
      var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4.a5r_1);
      checkArithmetic(fontSize);
      tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(fontSize), _TextUnit___get_value__impl__hpbx0k(fontSize) * other);
    } else {
      tmp = _this__u8e3s4.a5r_1;
    }
    var letterSpacing = tmp;
    return _this__u8e3s4.o5s(VOID, fontSize, VOID, VOID, VOID, VOID, VOID, letterSpacing, VOID, VOID, VOID, VOID, VOID, VOID, VOID, drawStyle);
  }
  function ComputedStyle(density, spanStyle, platformParagraphStyle, brushSize, blendMode, lineHeight, lineHeightStyle) {
    platformParagraphStyle = platformParagraphStyle === VOID ? null : platformParagraphStyle;
    brushSize = brushSize === VOID ? Companion_getInstance_6().e47_1 : brushSize;
    blendMode = blendMode === VOID ? Companion_getInstance_0().h53_1 : blendMode;
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    var tmp = density.p47(spanStyle.u5q_1);
    var tmp1_elvis_lhs = platformParagraphStyle == null ? null : platformParagraphStyle.x5p_1;
    var tmp_0 = tmp1_elvis_lhs == null ? Companion_getInstance_39().g64() : tmp1_elvis_lhs;
    var tmp_1;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = spanStyle.a5r_1;
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(this_0), new Long(0, 0))) {
      // Inline function 'kotlin.with' call
      tmp_1 = density.p47(spanStyle.a5r_1);
    } else {
      tmp_1 = null;
    }
    var tmp_2 = tmp_1;
    var tmp2_safe_receiver = spanStyle.h5r_1;
    var tmp_3 = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s5s_1;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (!equalsLong(_TextUnit___get_rawType__impl__tu8yq5(lineHeight), new Long(0, 0))) {
      tmp_4 = toPx_0(lineHeight, density, spanStyle.u5q_1);
    } else {
      tmp_4 = null;
    }
    var tmp_5 = tmp_4;
    var tmp4_elvis_lhs = lineHeightStyle == null ? null : lineHeightStyle.b5s_1;
    var tmp_6;
    var tmp_7 = tmp4_elvis_lhs;
    if ((tmp_7 == null ? null : new Alignment(tmp_7)) == null) {
      tmp_6 = Companion_getInstance_28().j62_1;
    } else {
      tmp_6 = tmp4_elvis_lhs;
    }
    return new Mutable(spanStyle.t5q_1, brushSize, tmp, spanStyle.v5q_1, spanStyle.w5q_1, spanStyle.x5q_1, spanStyle.y5q_1, spanStyle.z5q_1, tmp_0, tmp_2, spanStyle.b5r_1, spanStyle.c5r_1, spanStyle.d5r_1, spanStyle.e5r_1, spanStyle.f5r_1, tmp_3, spanStyle.g5r_1, spanStyle.i5r_1, blendMode, tmp_5, _Alignment___get_topRatio__impl__gg7tir(tmp_6));
  }
  function toSkPlaceholderAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    if (_this__u8e3s4 === Companion_getInstance_14().f5q_1) {
      tmp = PlaceholderAlignment_ABOVE_BASELINE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().j5q_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().k5q_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().l5q_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().g5q_1) {
      tmp = PlaceholderAlignment_TOP_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().h5q_1) {
      tmp = PlaceholderAlignment_BOTTOM_getInstance();
    } else if (_this__u8e3s4 === Companion_getInstance_14().i5q_1) {
      tmp = PlaceholderAlignment_MIDDLE_getInstance();
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Invalid PlaceholderVerticalAlign.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp;
  }
  function toSkAlignment(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_31().i5p_1 ? Alignment_LEFT_getInstance() : _this__u8e3s4 === Companion_getInstance_31().j5p_1 ? Alignment_RIGHT_getInstance() : _this__u8e3s4 === Companion_getInstance_31().k5p_1 ? Alignment_CENTER_getInstance() : _this__u8e3s4 === Companion_getInstance_31().l5p_1 ? Alignment_JUSTIFY_getInstance() : _this__u8e3s4 === Companion_getInstance_31().m5p_1 ? Alignment_START_getInstance() : _this__u8e3s4 === Companion_getInstance_31().n5p_1 ? Alignment_END_getInstance() : Alignment_START_getInstance();
  }
  function toHeightMode(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    return _this__u8e3s4 === Companion_getInstance_27().f62_1 ? HeightMode_DISABLE_ALL_getInstance() : _this__u8e3s4 === Companion_getInstance_27().d62_1 ? HeightMode_DISABLE_FIRST_ASCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().e62_1 ? HeightMode_DISABLE_LAST_DESCENT_getInstance() : _this__u8e3s4 === Companion_getInstance_27().g62_1 ? HeightMode_ALL_getInstance() : HeightMode_DISABLE_ALL_getInstance();
  }
  function toSkDirection(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    switch (_this__u8e3s4.i2_1) {
      case 0:
        tmp = Direction_LTR_getInstance();
        break;
      case 1:
        tmp = Direction_RTL_getInstance();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function resolveFontFamily(_this__u8e3s4, fontFamilyResolver) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp0_safe_receiver = _this__u8e3s4.u5v();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = _this__u8e3s4.r5v();
      var tmp_0 = tmp0_elvis_lhs == null ? Companion_getInstance_23().h5t_1 : tmp0_elvis_lhs;
      var tmp1_elvis_lhs = _this__u8e3s4.s5v();
      var tmp_1;
      var tmp_2 = tmp1_elvis_lhs;
      if ((tmp_2 == null ? null : new FontStyle(tmp_2)) == null) {
        tmp_1 = Companion_getInstance_21().o5t_1;
      } else {
        tmp_1 = tmp1_elvis_lhs;
      }
      var tmp_3 = tmp_1;
      var tmp2_elvis_lhs = _this__u8e3s4.t5v();
      var tmp_4;
      var tmp_5 = tmp2_elvis_lhs;
      if ((tmp_5 == null ? null : new FontSynthesis(tmp_5)) == null) {
        tmp_4 = Companion_getInstance_22().t5t_1;
      } else {
        tmp_4 = tmp2_elvis_lhs;
      }
      var tmp_6 = fontFamilyResolver.e5y(tmp0_safe_receiver, tmp_0, tmp_3, tmp_4).r1();
      tmp = tmp_6 instanceof FontLoadResult ? tmp_6 : THROW_CCE();
    }
    return tmp;
  }
  function orDefaultFontSize(_this__u8e3s4) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    var tmp;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    if (equalsLong(_TextUnit___get_rawType__impl__tu8yq5(_this__u8e3s4), new Long(0, 0))) {
      tmp = get_DefaultFontSize_0();
    } else {
      if (_TextUnit___get_isEm__impl__esrmtl(_this__u8e3s4)) {
        var tmp0 = get_DefaultFontSize_0();
        // Inline function 'androidx.compose.ui.unit.TextUnit.times' call
        var other = _TextUnit___get_value__impl__hpbx0k(_this__u8e3s4);
        checkArithmetic(tmp0);
        tmp = pack(_TextUnit___get_rawType__impl__tu8yq5(tmp0), _TextUnit___get_value__impl__hpbx0k(tmp0) * other);
      } else {
        tmp = _this__u8e3s4;
      }
    }
    return tmp;
  }
  function toPx_0(_this__u8e3s4, density, fontSize) {
    _init_properties_ParagraphBuilder_skiko_kt__fblzyk();
    // Inline function 'kotlin.with' call
    var tmp$ret$0 = density.p47(fontSize);
    return toPx(_this__u8e3s4, density, tmp$ret$0);
  }
  var properties_initialized_ParagraphBuilder_skiko_kt_5j6rti;
  function _init_properties_ParagraphBuilder_skiko_kt__fblzyk() {
    if (!properties_initialized_ParagraphBuilder_skiko_kt_5j6rti) {
      properties_initialized_ParagraphBuilder_skiko_kt_5j6rti = true;
      DefaultFontSize_0 = get_sp(16);
      skTextStylesCache = new WeakKeysCache();
      androidx_compose_ui_text_platform_ComputedStyle_Immutable$stable = 8;
      androidx_compose_ui_text_platform_ComputedStyle_Mutable$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_StyleAdd$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_PutPlaceholder$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Op_EndPlaceholder$stable = 8;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleAdd$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_StyleRemove$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_PutPlaceholder$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder_Cut_EndPlaceholder$stable = 0;
      androidx_compose_ui_text_platform_ParagraphBuilder$stable = 8;
    }
  }
  var androidx_compose_ui_text_platform_ParagraphLayouter$stable;
  function invalidateParagraph($this, onlyForeground) {
    onlyForeground = onlyForeground === VOID ? false : onlyForeground;
    if (onlyForeground && $this.g65_1.m69_1.n()) {
      $this.i65_1 = true;
    } else {
      $this.h65_1 = null;
    }
  }
  function ParagraphLayouter(text, textDirection, style, annotations, placeholders, density, fontFamilyResolver) {
    this.f65_1 = text;
    this.g65_1 = new ParagraphBuilder_0(fontFamilyResolver, this.f65_1, style, VOID, VOID, VOID, annotations, placeholders, density, textDirection);
    this.h65_1 = null;
    this.i65_1 = false;
    this.j65_1 = NaN;
  }
  protoOf(ParagraphLayouter).r65 = function () {
    return this.g65_1.l65();
  };
  protoOf(ParagraphLayouter).m65 = function () {
    return this.g65_1.i69_1;
  };
  protoOf(ParagraphLayouter).k65 = function (paragraph) {
    return this.g65_1.k65(paragraph);
  };
  protoOf(ParagraphLayouter).o65 = function (maxLines, ellipsis) {
    if (!(this.g65_1.l69_1 === maxLines) || !(this.g65_1.k69_1 === ellipsis)) {
      this.g65_1.l69_1 = maxLines;
      this.g65_1.k69_1 = ellipsis;
      invalidateParagraph(this);
    }
  };
  protoOf(ParagraphLayouter).s65 = function (color) {
    // Inline function 'androidx.compose.ui.graphics.takeOrElse' call
    var tmp;
    // Inline function 'androidx.compose.ui.graphics.isSpecified' call
    if (!equals(_Color___get_value__impl__1pls5m(color), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
      tmp = color;
    } else {
      tmp = this.g65_1.i69_1.h4y();
    }
    var actualColor = tmp;
    if (!equals(this.g65_1.i69_1.h4y(), actualColor)) {
      this.g65_1.i69_1 = this.g65_1.i69_1.n5v(actualColor);
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).w65 = function (brush, brushSize, alpha) {
    var actualSize = this.g65_1.j69_1;
    var tmp;
    var tmp_0;
    var tmp_1;
    var tmp_2;
    if (!equals(this.g65_1.i69_1.l5s(), brush)) {
      tmp_2 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.isUnspecified' call
      tmp_2 = equalsLong(_Size___get_packedValue__impl__7rlt1o(actualSize), new Long(2143289344, 2143289344));
    }
    if (tmp_2) {
      tmp_1 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(actualSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp_3 = floatFromBits(bits);
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(shiftRight(value_0, 32));
      var tmp$ret$5 = floatFromBits(bits_0);
      tmp_1 = !sameValueAs(tmp_3, tmp$ret$5);
    }
    if (tmp_1) {
      tmp_0 = true;
    } else {
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_1 = _Size___get_packedValue__impl__7rlt1o(actualSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_1 = convertToInt(bitwiseAnd(value_1, new Long(-1, 0)));
      var tmp_4 = floatFromBits(bits_1);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_2 = _Size___get_packedValue__impl__7rlt1o(brushSize);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_2 = convertToInt(bitwiseAnd(value_2, new Long(-1, 0)));
      var tmp$ret$13 = floatFromBits(bits_2);
      tmp_0 = !sameValueAs(tmp_4, tmp$ret$13);
    }
    if (tmp_0) {
      tmp = true;
    } else {
      tmp = !sameValueAs(this.g65_1.i69_1.i4u(), alpha);
    }
    if (tmp) {
      this.g65_1.i69_1 = this.g65_1.i69_1.p5v(brush, alpha);
      this.g65_1.j69_1 = brushSize;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).q65 = function (brushSize) {
    if (!equals(this.g65_1.j69_1, brushSize)) {
      this.g65_1.j69_1 = brushSize;
      var tmp;
      var tmp_0 = this.g65_1.i69_1.l5s();
      if (tmp_0 instanceof ShaderBrush) {
        tmp = true;
      } else {
        var tmp0 = this.g65_1.m69_1;
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
              var tmp_1;
              var tmp_2 = item.l5l_1;
              if (tmp_2 instanceof SpanStyle) {
                var tmp_3 = item.l5l_1.l5s();
                tmp_1 = tmp_3 instanceof ShaderBrush;
              } else {
                tmp_1 = false;
              }
              if (tmp_1) {
                tmp$ret$0 = true;
                break $l$block;
              }
            }
             while (inductionVariable <= last);
          tmp$ret$0 = false;
        }
        tmp = tmp$ret$0;
      }
      if (tmp) {
        invalidateParagraph(this, true);
      }
    }
  };
  protoOf(ParagraphLayouter).t65 = function (shadow, textDecoration) {
    if (!sameValueAs_0(this.g65_1.i69_1.c5w(), shadow) || !sameValueAs_1(this.g65_1.i69_1.b5w(), textDecoration)) {
      this.g65_1.i69_1 = this.g65_1.i69_1.n5v(VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, VOID, textDecoration, shadow);
      invalidateParagraph(this);
    }
  };
  protoOf(ParagraphLayouter).u65 = function (drawStyle) {
    if (!equals(this.g65_1.q69_1, drawStyle)) {
      this.g65_1.q69_1 = drawStyle;
      invalidateParagraph(this, true);
    }
  };
  protoOf(ParagraphLayouter).v65 = function (blendMode) {
    if (!(this.g65_1.r69_1 === blendMode)) {
      this.g65_1.r69_1 = blendMode;
      invalidateParagraph(this);
    }
  };
  protoOf(ParagraphLayouter).p65 = function (width) {
    var paragraph = this.h65_1;
    var tmp;
    if (!(paragraph == null)) {
      var layoutRequired = false;
      if (this.i65_1) {
        this.g65_1.x69(paragraph);
        this.i65_1 = false;
        paragraph.q4o();
        layoutRequired = true;
      }
      if (!sameValueAs(this.j65_1, width)) {
        this.j65_1 = width;
        layoutRequired = true;
      }
      if (layoutRequired) {
        paragraph.j4o(width);
      }
      tmp = paragraph;
    } else {
      paragraph = this.g65_1.u2a();
      paragraph.j4o(width);
      this.h65_1 = paragraph;
      this.i65_1 = false;
      return paragraph;
    }
    return tmp;
  };
  function sameValueAs(_this__u8e3s4, other) {
    // Inline function 'kotlin.math.abs' call
    var x = _this__u8e3s4 - other;
    return Math.abs(x) < 1.0E-5;
  }
  function sameValueAs_0(_this__u8e3s4, other) {
    var tmp = _this__u8e3s4 == null ? Companion_getInstance_2().u54_1 : _this__u8e3s4;
    return tmp.equals(other == null ? Companion_getInstance_2().u54_1 : other);
  }
  function sameValueAs_1(_this__u8e3s4, other) {
    var tmp = _this__u8e3s4 == null ? Companion_getInstance_32().f5u_1 : _this__u8e3s4;
    return tmp.equals(other == null ? Companion_getInstance_32().f5u_1 : other);
  }
  function get_GenericFontFamiliesMapping() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0 = GenericFontFamiliesMapping$delegate;
    var tmp = KProperty0;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('GenericFontFamiliesMapping', 0, tmp, _get_GenericFontFamiliesMapping_$ref_opq6z8(), null);
    return tmp0.r1();
  }
  var GenericFontFamiliesMapping$delegate;
  var androidx_compose_ui_text_platform_SystemFont$stable;
  var androidx_compose_ui_text_platform_LoadedFont$stable;
  var androidx_compose_ui_text_platform_FontLoader$stable;
  var androidx_compose_ui_text_platform_FontLoadResult$stable;
  var androidx_compose_ui_text_platform_FontCache$stable;
  function SystemFont() {
  }
  function _get_fontCache__rq14qm_0($this) {
    var tmp0 = $this.y69_1;
    var tmp = KProperty1;
    // Inline function 'kotlin.getValue' call
    getPropertyCallableRef('fontCache', 1, tmp, FontLoader$_get_fontCache_$ref_6slm39(), null);
    return tmp0.r1();
  }
  function FontLoader$fontCache$delegate$lambda() {
    return new FontCache();
  }
  function FontLoader$_get_fontCache_$ref_6slm39() {
    return constructCallableReference(function (p0) {
      return _get_fontCache__rq14qm_0(p0);
    }, 1, 0, 28);
  }
  function FontLoader$fontFamilyResolver$delegate$lambda(this$0) {
    return function () {
      return createFontFamilyResolver(_get_fontCache__rq14qm_0(this$0));
    };
  }
  function FontLoader() {
    var tmp = this;
    tmp.y69_1 = lazy_0(FontLoader$fontCache$delegate$lambda);
    var tmp_0 = this;
    tmp_0.z69_1 = lazy_0(FontLoader$fontFamilyResolver$delegate$lambda(this));
  }
  function FontLoadResult(typeface, aliases) {
    this.q67_1 = typeface;
    this.r67_1 = aliases;
  }
  var Platform_Unknown_instance;
  var Platform_Linux_instance;
  var Platform_Windows_instance;
  var Platform_MacOS_instance;
  var Platform_IOS_instance;
  var Platform_TvOS_instance;
  var Platform_WatchOS_instance;
  var Platform_Android_instance;
  var Platform_entriesInitialized;
  function Platform_initEntries() {
    if (Platform_entriesInitialized)
      return Unit_instance;
    Platform_entriesInitialized = true;
    Platform_Unknown_instance = new Platform('Unknown', 0);
    Platform_Linux_instance = new Platform('Linux', 1);
    Platform_Windows_instance = new Platform('Windows', 2);
    Platform_MacOS_instance = new Platform('MacOS', 3);
    Platform_IOS_instance = new Platform('IOS', 4);
    Platform_TvOS_instance = new Platform('TvOS', 5);
    Platform_WatchOS_instance = new Platform('WatchOS', 6);
    Platform_Android_instance = new Platform('Android', 7);
  }
  function Platform(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ensureRegistered($this, typeface, key) {
    if (!$this.j66_1.s(key)) {
      $this.i66_1.j4r(typeface, key);
      $this.j66_1.g(key);
    }
  }
  function ensureRegistered_0($this, fontFamily) {
    var tmp;
    if (fontFamily instanceof FontListFontFamily) {
      // Inline function 'androidx.compose.ui.util.fastMapNotNull' call
      var this_0 = fontFamily.y5w_1;
      var target = ArrayList_init_$Create$_0(this_0.l());
      // Inline function 'androidx.compose.ui.util.fastForEach' call
      var inductionVariable = 0;
      var last = this_0.l() - 1 | 0;
      if (inductionVariable <= last)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var item = this_0.m(index);
          var tmp_0;
          if (item instanceof SystemFont) {
            tmp_0 = item.e6a_1;
          } else {
            tmp_0 = null;
          }
          var tmp0_safe_receiver = tmp_0;
          if (tmp0_safe_receiver == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            // Inline function 'kotlin.collections.plusAssign' call
            target.g(tmp0_safe_receiver);
          }
        }
         while (inductionVariable <= last);
      var fonts = target;
      var tmp_1;
      if (fonts.l() === fontFamily.y5w_1.l()) {
        tmp_1 = fonts;
      } else {
        throw IllegalArgumentException_init_$Create$_0("Don't load FontListFontFamily through ensureRegistered: " + fontFamily.toString());
      }
      tmp = tmp_1;
    } else {
      if (fontFamily instanceof LoadedFontFamily) {
        var tmp_2 = fontFamily.b6a_1;
        var typeface = tmp_2 instanceof SkiaBackedTypeface ? tmp_2 : THROW_CCE();
        ensureRegistered($this, typeface.c6a_1, typeface.d6a_1);
        tmp = listOf_0(typeface.d6a_1);
      } else {
        if (fontFamily instanceof GenericFontFamily) {
          tmp = get_aliases(fontFamily);
        } else {
          if (fontFamily instanceof DefaultFontFamily) {
            tmp = get_aliases(Companion_getInstance_17().v5t_1);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    return tmp;
  }
  function FontCache() {
    this.h66_1 = FontCollection_init_$Create$();
    this.i66_1 = TypefaceFontProviderWithFallback_init_$Create$();
    this.j66_1 = HashSet_init_$Create$();
    this.k66_1 = new ExpireAfterAccessCache(new Long(-129542144, 13));
    this.h66_1.f4n(new FontMgrWithFallback(this.i66_1));
    this.h66_1.e4n(this.i66_1);
  }
  protoOf(FontCache).l66 = function (font) {
    var tmp0 = this.k66_1;
    // Inline function 'androidx.compose.ui.text.ExpireAfterAccessCache.getOrPut' call
    var key = font.f6a();
    tmp0.e63_1.z1(key);
    // Inline function 'kotlin.collections.getOrPut' call
    var this_0 = tmp0.d63_1;
    var value = this_0.u1(key);
    var tmp;
    if (value == null) {
      var answer = loadTypeface(font);
      this_0.y1(key, answer);
      tmp = answer;
    } else {
      tmp = value;
    }
    // Inline function 'kotlin.also' call
    var this_1 = tmp;
    var now = tmp0.c63_1();
    // Inline function 'kotlin.collections.set' call
    tmp0.e63_1.y1(key, now);
    access$checkEvicted(tmp0, now);
    var typeface = this_1;
    ensureRegistered(this, typeface, font.f6a());
    return new FontLoadResult(typeface, listOf_0(font.f6a()));
  };
  protoOf(FontCache).f66 = function (fontFamily, fontWeight, fontStyle) {
    var aliases = ensureRegistered_0(this, fontFamily);
    var style = toSkFontStyle(fontStyle).u4f(fontWeight.v5r_1);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(aliases);
    return new FontLoadResult(first_0(this.h66_1.h4n(tmp$ret$0, style)), aliases);
  };
  function SkiaBackedTypeface() {
  }
  function get_aliases(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp0_elvis_lhs = get_GenericFontFamiliesMapping().u1(_this__u8e3s4.v5w_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Unknown generic font family ' + _this__u8e3s4.v5w_1;
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cloneWithVariationSettings(_this__u8e3s4, variationSettings) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    if (variationSettings.g6a_1.n())
      return _this__u8e3s4;
    var variations = toSkiaFontVariationList(variationSettings);
    // Inline function 'kotlin.collections.toTypedArray' call
    var tmp$ret$0 = copyToArray(variations);
    return _this__u8e3s4.s4l(tmp$ret$0);
  }
  function LoadedFont() {
  }
  function toSkiaFontVariationList(_this__u8e3s4) {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = _this__u8e3s4.g6a_1;
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = FontVariation_init_$Create$(item.i6a(), item.j6a(null));
        target.g(element);
      }
       while (inductionVariable <= last);
    return target;
  }
  function GenericFontFamiliesMapping$delegate$lambda() {
    _init_properties_PlatformFont_skiko_kt__1fvojb();
    var tmp;
    switch (currentPlatform().i2_1) {
      case 1:
        tmp = mapOf([to(Companion_getInstance_17().v5t_1.v5w_1, listOf(['Noto Sans', 'DejaVu Sans', 'Arial'])), to(Companion_getInstance_17().w5t_1.v5w_1, listOf(['Noto Serif', 'DejaVu Serif', 'Times New Roman'])), to(Companion_getInstance_17().x5t_1.v5w_1, listOf(['Noto Sans Mono', 'DejaVu Sans Mono', 'Consolas'])), to(Companion_getInstance_17().y5t_1.v5w_1, listOf_0('Comic Sans MS'))]);
        break;
      case 2:
        tmp = mapOf([to(Companion_getInstance_17().v5t_1.v5w_1, listOf(['Segoe UI', 'Arial'])), to(Companion_getInstance_17().w5t_1.v5w_1, listOf_0('Times New Roman')), to(Companion_getInstance_17().x5t_1.v5w_1, listOf_0('Consolas')), to(Companion_getInstance_17().y5t_1.v5w_1, listOf_0('Comic Sans MS'))]);
        break;
      case 3:
      case 4:
      case 5:
      case 6:
        tmp = mapOf([to(Companion_getInstance_17().v5t_1.v5w_1, listOf(['.AppleSystemUIFont', 'Helvetica Neue', 'Helvetica'])), to(Companion_getInstance_17().w5t_1.v5w_1, listOf(['.AppleSystemUIFontSerif', 'Times', 'Times New Roman'])), to(Companion_getInstance_17().x5t_1.v5w_1, listOf(['.AppleSystemUIFontMonospaced', 'Menlo', 'Courier'])), to(Companion_getInstance_17().y5t_1.v5w_1, listOf(['Apple Chancery', 'Snell Roundhand']))]);
        break;
      case 7:
        tmp = mapOf([to(Companion_getInstance_17().v5t_1.v5w_1, listOf(['Roboto', 'Noto Sans'])), to(Companion_getInstance_17().w5t_1.v5w_1, listOf(['Roboto Serif', 'Noto Serif'])), to(Companion_getInstance_17().x5t_1.v5w_1, listOf(['Roboto Mono', 'Noto Sans Mono'])), to(Companion_getInstance_17().y5t_1.v5w_1, listOf_0('Comic Sans MS'))]);
        break;
      case 0:
        tmp = mapOf([to(Companion_getInstance_17().v5t_1.v5w_1, listOf_0('Arial')), to(Companion_getInstance_17().w5t_1.v5w_1, listOf_0('Times New Roman')), to(Companion_getInstance_17().x5t_1.v5w_1, listOf_0('Consolas')), to(Companion_getInstance_17().y5t_1.v5w_1, listOf_0('Comic Sans MS'))]);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function _get_GenericFontFamiliesMapping_$ref_opq6z8() {
    return constructCallableReference(function () {
      return get_GenericFontFamiliesMapping();
    }, 0, 0, 29);
  }
  function Platform_Unknown_getInstance() {
    Platform_initEntries();
    return Platform_Unknown_instance;
  }
  function Platform_Linux_getInstance() {
    Platform_initEntries();
    return Platform_Linux_instance;
  }
  function Platform_Windows_getInstance() {
    Platform_initEntries();
    return Platform_Windows_instance;
  }
  function Platform_MacOS_getInstance() {
    Platform_initEntries();
    return Platform_MacOS_instance;
  }
  function Platform_IOS_getInstance() {
    Platform_initEntries();
    return Platform_IOS_instance;
  }
  function Platform_Android_getInstance() {
    Platform_initEntries();
    return Platform_Android_instance;
  }
  var properties_initialized_PlatformFont_skiko_kt_pdb6wl;
  function _init_properties_PlatformFont_skiko_kt__1fvojb() {
    if (!properties_initialized_PlatformFont_skiko_kt_pdb6wl) {
      properties_initialized_PlatformFont_skiko_kt_pdb6wl = true;
      GenericFontFamiliesMapping$delegate = lazy_0(GenericFontFamiliesMapping$delegate$lambda);
      androidx_compose_ui_text_platform_SystemFont$stable = 0;
      androidx_compose_ui_text_platform_LoadedFont$stable = 0;
      androidx_compose_ui_text_platform_FontLoader$stable = 8;
      androidx_compose_ui_text_platform_FontLoadResult$stable = 8;
      androidx_compose_ui_text_platform_FontCache$stable = 8;
    }
  }
  function drawMultiParagraph(_this__u8e3s4, canvas, brush, alpha, shadow, decoration, drawStyle, blendMode) {
    alpha = alpha === VOID ? NaN : alpha;
    shadow = shadow === VOID ? null : shadow;
    decoration = decoration === VOID ? null : decoration;
    drawStyle = drawStyle === VOID ? null : drawStyle;
    blendMode = blendMode === VOID ? Companion_getInstance_9().a4w_1 : blendMode;
    canvas.m4z();
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var this_0 = _this__u8e3s4.c5n_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        item.d5n_1.e5o(canvas, brush, alpha, shadow, decoration, drawStyle, blendMode);
        canvas.b46(0.0, item.d5n_1.c47());
      }
       while (inductionVariable <= last);
    canvas.n4z();
  }
  var androidx_compose_ui_text_platform_SkiaParagraphIntrinsics$stable;
  function ActualParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    return new SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver);
  }
  function newLayouter($this) {
    return new ParagraphLayouter($this.v64_1, $this.b65_1, $this.w64_1, $this.x64_1, $this.y64_1, $this.z64_1, $this.a65_1);
  }
  function SkiaParagraphIntrinsics(text, style, annotations, placeholders, density, fontFamilyResolver) {
    this.v64_1 = text;
    this.w64_1 = style;
    this.x64_1 = annotations;
    this.y64_1 = placeholders;
    this.z64_1 = density;
    this.a65_1 = fontFamilyResolver;
    this.b65_1 = resolveTextDirection_1(this.v64_1, this.w64_1.f5w(), this.w64_1.z5v());
    this.c65_1 = newLayouter(this);
    this.d65_1 = 0.0;
    this.e65_1 = 0.0;
    var para = ensureNotNull(this.c65_1).p65(Infinity);
    var tmp = this;
    // Inline function 'kotlin.math.ceil' call
    var x = para.f4o();
    tmp.d65_1 = Math.ceil(x);
    var tmp_0 = this;
    // Inline function 'kotlin.math.ceil' call
    var x_0 = para.g4o();
    tmp_0.e65_1 = Math.ceil(x_0);
  }
  protoOf(SkiaParagraphIntrinsics).n65 = function () {
    var tmp0_elvis_lhs = this.c65_1;
    var layouter = tmp0_elvis_lhs == null ? newLayouter(this) : tmp0_elvis_lhs;
    this.c65_1 = null;
    return layouter;
  };
  protoOf(SkiaParagraphIntrinsics).f4o = function () {
    return this.d65_1;
  };
  protoOf(SkiaParagraphIntrinsics).g4o = function () {
    return this.e65_1;
  };
  function resolveTextDirection_1(text, textDirection, localeList) {
    textDirection = textDirection === VOID ? null : textDirection;
    localeList = localeList === VOID ? null : localeList;
    var tmp;
    var tmp_0 = textDirection;
    if ((tmp_0 == null ? null : new TextDirection(tmp_0)) == null) {
      tmp = Companion_getInstance_33().y5o_1;
    } else {
      tmp = textDirection;
    }
    var tmp1_subject = tmp;
    var tmp_1;
    if (tmp1_subject === Companion_getInstance_33().w5o_1) {
      tmp_1 = ResolvedTextDirection_Ltr_getInstance();
    } else if (tmp1_subject === Companion_getInstance_33().x5o_1) {
      tmp_1 = ResolvedTextDirection_Rtl_getInstance();
    } else if (tmp1_subject === Companion_getInstance_33().y5o_1 || tmp1_subject === Companion_getInstance_33().b5p_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda(localeList));
    } else if (tmp1_subject === Companion_getInstance_33().z5o_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_0);
    } else if (tmp1_subject === Companion_getInstance_33().a5p_1) {
      tmp_1 = contentBasedTextDirection(text, resolveTextDirection$lambda_1);
    } else {
      // Inline function 'kotlin.error' call
      var message = 'Invalid TextDirection.';
      throw IllegalStateException_init_$Create$_0(toString_0(message));
    }
    return tmp_1;
  }
  function contentBasedTextDirection(text, fallback) {
    var tmp0_subject = firstStrongDirectionType(text);
    return tmp0_subject === Companion_getInstance_38().z62_1 ? ResolvedTextDirection_Ltr_getInstance() : tmp0_subject === Companion_getInstance_38().a63_1 ? ResolvedTextDirection_Rtl_getInstance() : fallback();
  }
  function localeBasedTextDirection(locale) {
    var tmp;
    if (isRtl(locale == null ? Companion_instance_31.i1w() : locale)) {
      tmp = ResolvedTextDirection_Rtl_getInstance();
    } else {
      tmp = ResolvedTextDirection_Ltr_getInstance();
    }
    return tmp;
  }
  function resolveTextDirection$lambda($localeList) {
    return function () {
      var tmp0_safe_receiver = $localeList;
      return localeBasedTextDirection(tmp0_safe_receiver == null ? null : firstOrNull_0(tmp0_safe_receiver));
    };
  }
  function resolveTextDirection$lambda_0() {
    return ResolvedTextDirection_Ltr_getInstance();
  }
  function resolveTextDirection$lambda_1() {
    return ResolvedTextDirection_Rtl_getInstance();
  }
  var androidx_compose_ui_text_platform_SkiaTextPaint$stable;
  function clearShader($this) {
    $this.m67_1 = null;
    $this.l67_1 = null;
    $this.n67_1 = null;
    $this.f4x(null);
  }
  function SkiaTextPaint$setBrush$lambda($brush, $size) {
    return function () {
      return $brush.c4y($size);
    };
  }
  function SkiaTextPaint(original) {
    original = original === VOID ? Paint() : original;
    this.k67_1 = original;
    this.l67_1 = null;
    this.m67_1 = null;
    this.n67_1 = null;
  }
  protoOf(SkiaTextPaint).o67 = function () {
    return get_skiaPaint(this.k67_1);
  };
  protoOf(SkiaTextPaint).w65 = function (brush, size, alpha) {
    if (brush == null) {
      clearShader(this);
    } else {
      if (brush instanceof SolidColor) {
        // Inline function 'androidx.compose.ui.graphics.isSpecified' call
        var this_0 = this.h4y();
        if (!equals(_Color___get_value__impl__1pls5m(this_0), _ULong___init__impl__c78o9k(new Long(16, 0)))) {
          this.e4x(modulate(brush.c4x_1, alpha));
          clearShader(this);
        }
      } else {
        if (brush instanceof ShaderBrush) {
          var tmp;
          if (!equals(this.l67_1, brush)) {
            tmp = true;
          } else {
            var tmp_0 = this.n67_1;
            tmp = !equals(tmp_0 == null ? null : new Size(tmp_0), new Size(size));
          }
          if (tmp) {
            // Inline function 'androidx.compose.ui.geometry.isSpecified' call
            if (!equalsLong(_Size___get_packedValue__impl__7rlt1o(size), new Long(2143289344, 2143289344))) {
              this.l67_1 = brush;
              this.n67_1 = size;
              var tmp_1 = this;
              tmp_1.m67_1 = derivedStateOf(SkiaTextPaint$setBrush$lambda(brush, size));
            }
          }
          var tmp1_safe_receiver = this.m67_1;
          this.f4x(tmp1_safe_receiver == null ? null : tmp1_safe_receiver.r1());
          this.u4s(isNaN_0(alpha) ? 1.0 : coerceIn_0(alpha, 0.0, 1.0));
        } else {
          noWhenBranchMatchedException();
        }
      }
    }
  };
  protoOf(SkiaTextPaint).u65 = function (drawStyle) {
    if (equals(drawStyle, Fill_getInstance()) || drawStyle == null) {
      this.r59(Companion_getInstance_10().p53_1);
    } else {
      if (drawStyle instanceof Stroke) {
        this.r59(Companion_getInstance_10().q53_1);
        this.o4h(drawStyle.s59_1);
        this.z59(drawStyle.t59_1);
        this.b5a(drawStyle.v59_1);
        this.x59(drawStyle.u59_1);
        this.d5a(drawStyle.w59_1);
      } else {
        noWhenBranchMatchedException();
      }
    }
  };
  protoOf(SkiaTextPaint).u4s = function (_set____db54di) {
    this.k67_1.u4s(_set____db54di);
  };
  protoOf(SkiaTextPaint).i4u = function () {
    return this.k67_1.i4u();
  };
  protoOf(SkiaTextPaint).e4x = function (_set____db54di) {
    this.k67_1.e4x(_set____db54di);
  };
  protoOf(SkiaTextPaint).h4y = function () {
    return this.k67_1.h4y();
  };
  protoOf(SkiaTextPaint).i5a = function (_set____db54di) {
    this.k67_1.i5a(_set____db54di);
  };
  protoOf(SkiaTextPaint).j5a = function () {
    return this.k67_1.j5a();
  };
  protoOf(SkiaTextPaint).r59 = function (_set____db54di) {
    this.k67_1.r59(_set____db54di);
  };
  protoOf(SkiaTextPaint).o4h = function (_set____db54di) {
    this.k67_1.o4h(_set____db54di);
  };
  protoOf(SkiaTextPaint).p4h = function () {
    return this.k67_1.p4h();
  };
  protoOf(SkiaTextPaint).x59 = function (_set____db54di) {
    this.k67_1.x59(_set____db54di);
  };
  protoOf(SkiaTextPaint).y59 = function () {
    return this.k67_1.y59();
  };
  protoOf(SkiaTextPaint).b5a = function (_set____db54di) {
    this.k67_1.b5a(_set____db54di);
  };
  protoOf(SkiaTextPaint).c5a = function () {
    return this.k67_1.c5a();
  };
  protoOf(SkiaTextPaint).z59 = function (_set____db54di) {
    this.k67_1.z59(_set____db54di);
  };
  protoOf(SkiaTextPaint).a5a = function () {
    return this.k67_1.a5a();
  };
  protoOf(SkiaTextPaint).k5a = function (_set____db54di) {
    this.k67_1.k5a(_set____db54di);
  };
  protoOf(SkiaTextPaint).l5a = function () {
    return this.k67_1.l5a();
  };
  protoOf(SkiaTextPaint).f4x = function (_set____db54di) {
    this.k67_1.f4x(_set____db54di);
  };
  protoOf(SkiaTextPaint).u4h = function () {
    return this.k67_1.u4h();
  };
  protoOf(SkiaTextPaint).g5a = function (_set____db54di) {
    this.k67_1.g5a(_set____db54di);
  };
  protoOf(SkiaTextPaint).h5a = function () {
    return this.k67_1.h5a();
  };
  protoOf(SkiaTextPaint).d5a = function (_set____db54di) {
    this.k67_1.d5a(_set____db54di);
  };
  protoOf(SkiaTextPaint).e5a = function () {
    return this.k67_1.e5a();
  };
  var androidx_compose_ui_text_platform_SynchronizedObject$stable;
  function SynchronizedObject() {
  }
  function _LineBreak___init__impl__o5i11q(mask) {
    return mask;
  }
  function _LineBreak___get_mask__impl__je2e1t($this) {
    return $this;
  }
  function Companion_28() {
    Companion_instance_29 = this;
    this.p5p_1 = _LineBreak___init__impl__o5i11q(1);
    this.q5p_1 = _LineBreak___init__impl__o5i11q(2);
    this.r5p_1 = _LineBreak___init__impl__o5i11q(3);
    this.s5p_1 = _LineBreak___init__impl__o5i11q(4);
  }
  var Companion_instance_29;
  function Companion_getInstance_42() {
    if (Companion_instance_29 == null)
      new Companion_28();
    return Companion_instance_29;
  }
  function LineBreak__toString_impl_mphhli($this) {
    return 'LineBreak(mask=' + $this + ')';
  }
  function LineBreak__hashCode_impl_ybksn($this) {
    return $this;
  }
  function LineBreak__equals_impl_1r98t9($this, other) {
    if (!(other instanceof LineBreak))
      return false;
    if (!($this === other.r5q_1))
      return false;
    return true;
  }
  function LineBreak(mask) {
    Companion_getInstance_42();
    this.r5q_1 = mask;
  }
  protoOf(LineBreak).toString = function () {
    return LineBreak__toString_impl_mphhli(this.r5q_1);
  };
  protoOf(LineBreak).hashCode = function () {
    return LineBreak__hashCode_impl_ybksn(this.r5q_1);
  };
  protoOf(LineBreak).equals = function (other) {
    return LineBreak__equals_impl_1r98t9(this.r5q_1, other);
  };
  var androidx_compose_ui_text_style_TextMotion$stable;
  function Companion_29() {
    Companion_instance_30 = this;
    this.a5q_1 = new TextMotion();
    this.b5q_1 = new TextMotion();
  }
  var Companion_instance_30;
  function Companion_getInstance_43() {
    if (Companion_instance_30 == null)
      new Companion_29();
    return Companion_instance_30;
  }
  function TextMotion() {
    Companion_getInstance_43();
  }
  var androidx_compose_ui_text_WeakKeysCache_Key$stable;
  var androidx_compose_ui_text_WeakKeysCache$stable;
  var androidx_compose_ui_text_FinalizationRegistry$stable;
  function Key_0(key) {
    this.k6a_1 = new WeakReference(key);
    this.l6a_1 = hashCode(key);
  }
  protoOf(Key_0).equals = function (other) {
    if (this === other)
      return true;
    if (other == null)
      return false;
    if (!(other instanceof Key_0))
      THROW_CCE();
    var a = this.k6a_1.p12();
    var b = other.k6a_1.p12();
    if (a == null || b == null) {
      return false;
    }
    return equals(a, b);
  };
  protoOf(Key_0).hashCode = function () {
    return this.l6a_1;
  };
  function access$_get_cache__fo4c6p($this) {
    return $this.n6a_1;
  }
  function access$_get_registry__6myjy($this) {
    return $this.o6a_1;
  }
  function WeakKeysCache$registry$lambda(this$0) {
    return function (keyJsReference) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.get' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var key = keyJsReference;
      this$0.n6a_1.z1(key);
      return Unit_instance;
    };
  }
  function WeakKeysCache() {
    this.n6a_1 = HashMap_init_$Create$();
    var tmp = this;
    tmp.o6a_1 = new FinalizationRegistry(WeakKeysCache$registry$lambda(this));
  }
  function WeakReference(reference) {
    var tmp = this;
    // Inline function 'kotlin.js.toJsReference' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.m6a_1 = new WeakRef(reference);
  }
  protoOf(WeakReference).p12 = function () {
    var tmp0_safe_receiver = this.m6a_1;
    var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.deref();
    var tmp;
    if (tmp1_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = tmp1_safe_receiver;
    }
    var tmp2_safe_receiver = tmp;
    var tmp_0;
    if (tmp2_safe_receiver == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.js.get' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp_0 = tmp2_safe_receiver;
    }
    return tmp_0;
  };
  function createPlatformResolveInterceptor() {
    return Companion_getInstance_18().d5y_1;
  }
  function synthesizeTypeface(_this__u8e3s4, typeface, font, requestedWeight, requestedStyle) {
    return typeface;
  }
  function get_rtlLanguagesSet() {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return rtlLanguagesSet;
  }
  var rtlLanguagesSet;
  var androidx_compose_ui_text_intl_Locale$stable;
  var androidx_compose_ui_text_intl_IntlLocale$stable;
  function Companion_30() {
  }
  protoOf(Companion_30).i1w = function () {
    return get_platformLocaleDelegate().i1w().m(0);
  };
  var Companion_instance_31;
  function Companion_getInstance_44() {
    return Companion_instance_31;
  }
  function Locale_init_$Init$(languageTag, $this) {
    Locale.call($this, toIntlLocale(languageTag));
    return $this;
  }
  function Locale_init_$Create$(languageTag) {
    return Locale_init_$Init$(languageTag, objectCreate(protoOf(Locale)));
  }
  function Locale(platformLocale) {
    this.y5r_1 = platformLocale;
    this.z5r_1 = this.y5r_1.baseName;
  }
  protoOf(Locale).p6a = function () {
    return this.y5r_1.language;
  };
  protoOf(Locale).q6a = function () {
    // Inline function 'kotlin.text.orEmpty' call
    var tmp0_elvis_lhs = this.y5r_1.region;
    return tmp0_elvis_lhs == null ? '' : tmp0_elvis_lhs;
  };
  protoOf(Locale).a5s = function () {
    return this.z5r_1;
  };
  protoOf(Locale).equals = function (other) {
    if (other == null)
      return false;
    if (!(other instanceof Locale))
      return false;
    if (this === other)
      return true;
    return this.a5s() === other.a5s();
  };
  protoOf(Locale).hashCode = function () {
    return getStringHashCode(this.a5s());
  };
  protoOf(Locale).toString = function () {
    return this.a5s();
  };
  function createPlatformLocaleDelegate() {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return new createPlatformLocaleDelegate$1();
  }
  function isRtl(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return get_rtlLanguagesSet().s(_this__u8e3s4.p6a());
  }
  function toIntlLocale(_this__u8e3s4) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return parseLanguageTagToIntlLocale(_this__u8e3s4);
  }
  function parseLanguageTagToIntlLocale(languageTag) {
    _init_properties_PlatformLocale_web_kt__363p4j();
    return new Intl.Locale(languageTag);
  }
  function createPlatformLocaleDelegate$1() {
  }
  protoOf(createPlatformLocaleDelegate$1).i1w = function () {
    // Inline function 'androidx.compose.ui.util.fastMap' call
    var this_0 = userPreferredLanguages();
    var target = ArrayList_init_$Create$_0(this_0.l());
    // Inline function 'androidx.compose.ui.util.fastForEach' call
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        // Inline function 'kotlin.collections.plusAssign' call
        var element = new Locale(toIntlLocale(item));
        target.g(element);
      }
       while (inductionVariable <= last);
    return new LocaleList(target);
  };
  var properties_initialized_PlatformLocale_web_kt_9h93ez;
  function _init_properties_PlatformLocale_web_kt__363p4j() {
    if (!properties_initialized_PlatformLocale_web_kt_9h93ez) {
      properties_initialized_PlatformLocale_web_kt_9h93ez = true;
      rtlLanguagesSet = setOf(['ar', 'fa', 'he', 'iw', 'ji', 'ur', 'yi']);
      androidx_compose_ui_text_intl_Locale$stable = 0;
      androidx_compose_ui_text_intl_IntlLocale$stable = 0;
    }
  }
  var androidx_compose_ui_text_platform_PlatformFont$stable;
  function PlatformFont() {
  }
  protoOf(PlatformFont).f6a = function () {
    return '' + getKClassFromExpression(this).x9() + '|' + this.r6a() + '|weight=' + this.t4f().v5r_1 + '|style=' + FontStyle__toString_impl_thncxr(this.o5w()) + '|variationSettings=' + toString_0(this.s6a().g6a_1);
  };
  function currentPlatform() {
    switch (get_hostOs().i2_1) {
      case 0:
        return Platform_Android_getInstance();
      case 4:
        return Platform_IOS_getInstance();
      case 3:
        return Platform_MacOS_getInstance();
      case 1:
        return Platform_Linux_getInstance();
      case 2:
        return Platform_Windows_getInstance();
      default:
        return Platform_Unknown_getInstance();
    }
  }
  function loadTypeface(font) {
    if (!(font instanceof PlatformFont)) {
      throw IllegalArgumentException_init_$Create$_0('Unsupported font type: ' + toString_0(font));
    }
    var tmp;
    if (font instanceof LoadedFont) {
      var tmp1_elvis_lhs = Companion_getInstance_11().i4f_1.m4f(Companion_getInstance_12().i4d(font.t6a_1()));
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'loadTypeface makeFromData failed';
        throw IllegalStateException_init_$Create$_0(toString_0(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (font instanceof SystemFont) {
        var tmp2_elvis_lhs = Companion_getInstance_11().i4f_1.n4f(font.e6a_1, get_skFontStyle(font));
        var tmp_1;
        if (tmp2_elvis_lhs == null) {
          // Inline function 'kotlin.error' call
          var message_0 = 'loadTypeface legacyMakeTypeface failed';
          throw IllegalStateException_init_$Create$_0(toString_0(message_0));
        } else {
          tmp_1 = tmp2_elvis_lhs;
        }
        tmp = tmp_1;
      } else {
        noWhenBranchMatchedException();
      }
    }
    return cloneWithVariationSettings(tmp, font.s6a());
  }
  function get_skFontStyle(_this__u8e3s4) {
    return FontStyle_init_$Create$(_this__u8e3s4.t4f().v5r_1, 5, _this__u8e3s4.o5w() === Companion_getInstance_21().p5t_1 ? FontSlant_ITALIC_getInstance() : FontSlant_UPRIGHT_getInstance());
  }
  var androidx_compose_ui_text_platform_JsStringDelegate$stable;
  //region block: post-declaration
  protoOf(PlatformResolveInterceptor$Companion$Default$1).f5y = interceptFontFamily;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).g5y = interceptFontWeight;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).h5y = interceptFontStyle;
  protoOf(PlatformResolveInterceptor$Companion$Default$1).i5y = interceptFontSynthesis;
  protoOf(Unspecified).r5s = merge;
  protoOf(Unspecified).u5s = takeOrElse;
  protoOf(BrushStyle).r5s = merge;
  protoOf(BrushStyle).u5s = takeOrElse;
  protoOf(ColorStyle).r5s = merge;
  protoOf(ColorStyle).u5s = takeOrElse;
  protoOf(SkiaParagraph).m64 = paint$default;
  protoOf(SkiaParagraph).n64 = paint$default_0;
  protoOf(SkiaParagraphIntrinsics).h5p = get_hasStaleResolvedFonts;
  //endregion
  //region block: init
  androidx_compose_ui_text_ComposeUiTextFlags$stable = 8;
  androidx_compose_ui_text_LinkAnnotation_Url$stable = 8;
  androidx_compose_ui_text_LinkAnnotation_Clickable$stable = 8;
  androidx_compose_ui_text_LinkAnnotation$stable = 0;
  androidx_compose_ui_text_MultiParagraph$stable = 8;
  androidx_compose_ui_text_ParagraphInfo$stable = 8;
  androidx_compose_ui_text_MultiParagraphIntrinsics$stable = 8;
  androidx_compose_ui_text_ParagraphIntrinsicInfo$stable = 8;
  androidx_compose_ui_text_Placeholder$stable = 0;
  androidx_compose_ui_text_TextLayoutInput$stable = 8;
  androidx_compose_ui_text_TextLayoutResult$stable = 8;
  androidx_compose_ui_text_TextLinkStyles$stable = 0;
  androidx_compose_ui_text_TextMeasurer$stable = 0;
  androidx_compose_ui_text_TextLayoutCache$stable = 8;
  androidx_compose_ui_text_CacheTextLayoutInput$stable = 0;
  androidx_compose_ui_text_TextPainter$stable = 0;
  androidx_compose_ui_text_TextStyle$stable = 0;
  androidx_compose_ui_text_TtsAnnotation$stable = 0;
  androidx_compose_ui_text_VerbatimTtsAnnotation$stable = 0;
  androidx_compose_ui_text_UrlAnnotation$stable = 0;
  androidx_compose_ui_text_font_ResourceFont$stable = 0;
  androidx_compose_ui_text_font_FontFamily$stable = 0;
  androidx_compose_ui_text_font_FileBasedFontFamily$stable = 0;
  androidx_compose_ui_text_font_SystemFontFamily$stable = 0;
  androidx_compose_ui_text_font_FontListFontFamily$stable = 0;
  androidx_compose_ui_text_font_GenericFontFamily$stable = 0;
  androidx_compose_ui_text_font_DefaultFontFamily$stable = 0;
  androidx_compose_ui_text_font_LoadedFontFamily$stable = 0;
  androidx_compose_ui_text_font_FontListFontFamilyTypefaceAdapter$stable = 8;
  androidx_compose_ui_text_font_AsyncFontListLoader$stable = 0;
  androidx_compose_ui_text_font_AsyncTypefaceCache_Key$stable = 8;
  androidx_compose_ui_text_font_AsyncTypefaceCache$stable = 8;
  androidx_compose_ui_text_font_FontMatcher$stable = 0;
  androidx_compose_ui_text_font_FontVariation_Settings$stable = 0;
  androidx_compose_ui_text_font_FontVariation$stable = 0;
  androidx_compose_ui_text_font_FontWeight$stable = 0;
  androidx_compose_ui_text_input_CommitTextCommand$stable = 0;
  androidx_compose_ui_text_input_SetComposingRegionCommand$stable = 0;
  androidx_compose_ui_text_input_SetComposingTextCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteSurroundingTextCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteSurroundingTextInCodePointsCommand$stable = 0;
  androidx_compose_ui_text_input_SetSelectionCommand$stable = 0;
  androidx_compose_ui_text_input_FinishComposingTextCommand$stable = 0;
  androidx_compose_ui_text_input_BackspaceCommand$stable = 0;
  androidx_compose_ui_text_input_MoveCursorCommand$stable = 0;
  androidx_compose_ui_text_input_DeleteAllCommand$stable = 0;
  androidx_compose_ui_text_input_EditProcessor$stable = 8;
  androidx_compose_ui_text_input_EditingBuffer$stable = 8;
  androidx_compose_ui_text_input_PartialGapBuffer$stable = 8;
  androidx_compose_ui_text_input_ImeOptions$stable = 0;
  androidx_compose_ui_text_input_TextFieldValue$stable = 0;
  androidx_compose_ui_text_input_TextInputService$stable = 8;
  androidx_compose_ui_text_input_TextInputSession$stable = 8;
  androidx_compose_ui_text_input_TransformedText$stable = 8;
  androidx_compose_ui_text_input_PasswordVisualTransformation$stable = 0;
  androidx_compose_ui_text_intl_LocaleList$stable = 0;
  androidx_compose_ui_text_style_LineHeightStyle$stable = 0;
  androidx_compose_ui_text_style_TextDecoration$stable = 0;
  androidx_compose_ui_text_style_TextForegroundStyle_Unspecified$stable = 0;
  Unspecified_instance = new Unspecified();
  Companion_instance_21 = new Companion_20();
  androidx_compose_ui_text_style_TextGeometricTransform$stable = 0;
  androidx_compose_ui_text_style_TextIndent$stable = 0;
  androidx_compose_ui_text_AtomicReference$stable = 8;
  androidx_compose_ui_text_ExpireAfterAccessCache$stable = 8;
  androidx_compose_ui_text_FontRasterizationSettings$stable = 0;
  androidx_compose_ui_text_SkiaParagraph$stable = 8;
  androidx_compose_ui_text_PlatformTextStyle$stable = 0;
  androidx_compose_ui_text_PlatformParagraphStyle$stable = 0;
  androidx_compose_ui_text_PlatformSpanStyle$stable = 0;
  androidx_compose_ui_text_font_PlatformFontFamilyTypefaceAdapter$stable = 0;
  androidx_compose_ui_text_font_SkiaFontLoader$stable = 8;
  androidx_compose_ui_text_input_PlatformImeOptions$stable = 0;
  androidx_compose_ui_text_platform_ParagraphLayouter$stable = 8;
  androidx_compose_ui_text_platform_SkiaParagraphIntrinsics$stable = 8;
  androidx_compose_ui_text_platform_SkiaTextPaint$stable = 8;
  androidx_compose_ui_text_platform_SynchronizedObject$stable = 0;
  androidx_compose_ui_text_style_TextMotion$stable = 0;
  androidx_compose_ui_text_WeakKeysCache_Key$stable = 8;
  androidx_compose_ui_text_WeakKeysCache$stable = 8;
  androidx_compose_ui_text_FinalizationRegistry$stable = 0;
  Companion_instance_31 = new Companion_30();
  androidx_compose_ui_text_platform_PlatformFont$stable = 0;
  androidx_compose_ui_text_platform_JsStringDelegate$stable = 0;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FontStyle;
  _.$_$.b = FontWeight;
  _.$_$.c = createFontFamilyResolver_0;
  _.$_$.d = TextInputService;
  _.$_$.e = FontLoader;
  _.$_$.f = TextAlign;
  _.$_$.g = TextOverflow;
  _.$_$.h = MultiParagraphIntrinsics;
  _.$_$.i = MultiParagraph;
  _.$_$.j = ParagraphIntrinsics_0;
  _.$_$.k = Paragraph_0;
  _.$_$.l = Paragraph;
  _.$_$.m = TextLayoutResult;
  _.$_$.n = TextRange_1;
  _.$_$.o = TextRange;
  _.$_$.p = androidx_compose_ui_text_TextLayoutResult$stableprop_getter;
  _.$_$.q = resolveDefaults;
  _.$_$.r = _FontStyle___get_value__impl__gx8aaz;
  _.$_$.s = _FontSynthesis___get_value__impl__xrueqg;
  _.$_$.t = _BaselineShift___get_multiplier__impl__qhmjek;
  _.$_$.u = _TextOverflow___init__impl__obguoe;
  _.$_$.v = TextOverflow__hashCode_impl_kqdwgt;
  _.$_$.w = _TextOverflow___get_value__impl__vugm5i;
  _.$_$.x = _TextRange___get_end__impl__gcdxpp;
  _.$_$.y = _TextRange___get_start__impl__ww4t90;
  _.$_$.z = Companion_getInstance_17;
  _.$_$.a1 = Companion_getInstance_21;
  _.$_$.b1 = Companion_getInstance_22;
  _.$_$.c1 = Companion_getInstance_23;
  _.$_$.d1 = Companion_instance_31;
  _.$_$.e1 = Companion_getInstance_24;
  _.$_$.f1 = Companion_getInstance_25;
  _.$_$.g1 = Companion_getInstance_26;
  _.$_$.h1 = Companion_getInstance_42;
  _.$_$.i1 = Companion_getInstance_28;
  _.$_$.j1 = Companion_getInstance_27;
  _.$_$.k1 = Companion_getInstance_31;
  _.$_$.l1 = Companion_getInstance_32;
  _.$_$.m1 = Companion_getInstance_33;
  _.$_$.n1 = Companion_getInstance_37;
  _.$_$.o1 = Companion_getInstance_16;
  _.$_$.p1 = LineHeightStyle_init_$Create$;
  _.$_$.q1 = AnnotatedString_init_$Create$;
  _.$_$.r1 = TextLayoutInput_init_$Create$;
  _.$_$.s1 = TextStyle_init_$Create$_1;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-ui-ui-text.js.map
