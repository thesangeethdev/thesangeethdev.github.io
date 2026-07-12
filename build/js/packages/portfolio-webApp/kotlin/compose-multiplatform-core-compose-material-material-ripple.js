(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-coroutines-core.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui-graphics.js', './compose-multiplatform-core-compose-foundation-foundation.js', './compose-multiplatform-core-compose-ui-ui-geometry.js', './compose-multiplatform-core-compose-ui-ui-unit.js', './compose-multiplatform-core-compose-animation-animation-core.js', './androidx-compose-runtime-runtime.js', './compose-multiplatform-core-compose-ui-ui-util.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-coroutines-core.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui-graphics.js'), require('./compose-multiplatform-core-compose-foundation-foundation.js'), require('./compose-multiplatform-core-compose-ui-ui-geometry.js'), require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./compose-multiplatform-core-compose-animation-animation-core.js'), require('./androidx-compose-runtime-runtime.js'), require('./compose-multiplatform-core-compose-ui-ui-util.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-graphics'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-graphics' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-graphics' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-foundation-foundation'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-foundation-foundation' was not found. Please, check whether 'compose-multiplatform-core-compose-foundation-foundation' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-geometry'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-geometry' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-geometry' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-animation-animation-core'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-animation-animation-core' was not found. Please, check whether 'compose-multiplatform-core-compose-animation-animation-core' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-util'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-material-material-ripple'. Its dependency 'compose-multiplatform-core-compose-ui-ui-util' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-util' is loaded prior to 'compose-multiplatform-core-compose-material-material-ripple'.");
    }
    globalThis['compose-multiplatform-core-compose-material-material-ripple'] = factory(typeof globalThis['compose-multiplatform-core-compose-material-material-ripple'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-material-material-ripple'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-coroutines-core'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui-graphics'], globalThis['compose-multiplatform-core-compose-foundation-foundation'], globalThis['compose-multiplatform-core-compose-ui-ui-geometry'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['compose-multiplatform-core-compose-animation-animation-core'], globalThis['androidx-compose-runtime-runtime'], globalThis['compose-multiplatform-core-compose-ui-ui-util']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui_graphics, kotlin_org_jetbrains_compose_foundation_foundation, kotlin_org_jetbrains_compose_ui_ui_geometry, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_org_jetbrains_compose_animation_animation_core, kotlin_androidx_compose_runtime_runtime, kotlin_org_jetbrains_compose_ui_ui_util) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.aa;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var CoroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.d1;
  var isInterface = kotlin_kotlin.$_$.r9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var invalidateDraw = kotlin_org_jetbrains_compose_ui_ui.$_$.s2;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var VOID = kotlin_kotlin.$_$.c;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var invert = kotlin_kotlin.$_$.e8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var Long = kotlin_kotlin.$_$.yc;
  var compare = kotlin_kotlin.$_$.y7;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var launch = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.s1;
  var Color__copy$default_impl_ectz3s = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.h3;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var Interaction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.h;
  var PressInteraction = kotlin_org_jetbrains_compose_foundation_foundation.$_$.m;
  var Cancel = kotlin_org_jetbrains_compose_foundation_foundation.$_$.j;
  var Release = kotlin_org_jetbrains_compose_foundation_foundation.$_$.l;
  var Press = kotlin_org_jetbrains_compose_foundation_foundation.$_$.k;
  var equals = kotlin_kotlin.$_$.b9;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var FlowCollector = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.r;
  var hashCode = kotlin_kotlin.$_$.i9;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.k1;
  var MutableObjectList = kotlin_androidx_collection_collection.$_$.m;
  var requireDensity = kotlin_org_jetbrains_compose_ui_ui.$_$.x2;
  var toSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j1;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var onMeasureResultChanged = kotlin_org_jetbrains_compose_ui_ui.$_$.w1;
  var onPlaced = kotlin_org_jetbrains_compose_ui_ui.$_$.z1;
  var CompositionLocalConsumerModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.t1;
  var DrawModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.x1;
  var LayoutAwareModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.a2;
  var Animatable = kotlin_org_jetbrains_compose_animation_animation_core.$_$.a;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.m1;
  var Cancel_0 = kotlin_org_jetbrains_compose_foundation_foundation.$_$.a;
  var Stop = kotlin_org_jetbrains_compose_foundation_foundation.$_$.c;
  var Start = kotlin_org_jetbrains_compose_foundation_foundation.$_$.b;
  var Unfocus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.e;
  var Focus = kotlin_org_jetbrains_compose_foundation_foundation.$_$.d;
  var Exit = kotlin_org_jetbrains_compose_foundation_foundation.$_$.g;
  var Enter = kotlin_org_jetbrains_compose_foundation_foundation.$_$.f;
  var lastOrNull = kotlin_kotlin.$_$.p5;
  var _Size___get_packedValue__impl__7rlt1o = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.e1;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var floatFromBits = kotlin_kotlin.$_$.c9;
  var Companion_getInstance_0 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.p3;
  var get_LinearEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.g;
  var TweenSpec = kotlin_org_jetbrains_compose_animation_animation_core.$_$.h;
  var tween = kotlin_org_jetbrains_compose_animation_animation_core.$_$.s;
  var get_FastOutSlowInEasing = kotlin_org_jetbrains_compose_animation_animation_core.$_$.f;
  var KMutableProperty1 = kotlin_kotlin.$_$.va;
  var getPropertyCallableRef = kotlin_kotlin.$_$.g9;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.l9;
  var coroutineScope = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.j;
  var CompletableDeferred = kotlin_org_jetbrains_kotlinx_kotlinx_coroutines_core.$_$.a1;
  var mutableStateOf = kotlin_androidx_compose_runtime_runtime.$_$.j1;
  var Offset = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.c;
  var toRawBits = kotlin_kotlin.$_$.be;
  var fromInt = kotlin_kotlin.$_$.d8;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var _Offset___init__impl__c168vi = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.q;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var lerp = kotlin_org_jetbrains_compose_ui_ui_util.$_$.c;
  var _Offset___get_packedValue__impl__xh2k8q = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.w;
  var _Color___get_alpha__impl__wcfyv1 = kotlin_org_jetbrains_compose_ui_ui_graphics.$_$.n2;
  var Offset__getDistance_impl_pclvxn = kotlin_org_jetbrains_compose_ui_ui_geometry.$_$.t;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  //endregion
  //region block: pre-declaration
  initMetadataForLambda(CommonRippleNode$addRipple$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(RippleNode, 'RippleNode', VOID, Node, [CompositionLocalConsumerModifierNode, DrawModifierNode, LayoutAwareModifierNode]);
  initMetadataForClass(CommonRippleNode, 'CommonRippleNode', VOID, RippleNode);
  initMetadataForLambda(RippleNode$onAttach$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(RippleNode$onAttach$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(StateLayer$handleInteraction$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForClass(StateLayer, 'StateLayer');
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_1, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeIn$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(RippleAnimation$fadeOut$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($animateCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fadeInCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($fadeOutCOROUTINE$, CoroutineImpl);
  initMetadataForClass(RippleAnimation, 'RippleAnimation', VOID, VOID, VOID, [0]);
  initMetadataForClass(RippleAlpha, 'RippleAlpha');
  //endregion
  var androidx_compose_material_ripple_CommonRipple$stable;
  var androidx_compose_material_ripple_CommonRippleNode$stable;
  function CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation) {
    this.mck_1 = $rippleAnimation;
    this.nck_1 = this$0;
    this.ock_1 = $interaction;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(CommonRippleNode$addRipple$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(CommonRippleNode$addRipple$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(CommonRippleNode$addRipple$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 4;
            this.l8_1 = 2;
            suspendResult = this.mck_1.bcl(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m8_1 = 5;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 5;
            this.nck_1.bcm_1.z1(this.ock_1);
            invalidateDraw(this.nck_1);
            return Unit_instance;
          case 4:
            this.m8_1 = 5;
            var t = this.o8_1;
            this.nck_1.bcm_1.z1(this.ock_1);
            invalidateDraw(this.nck_1);
            throw t;
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
  protoOf(CommonRippleNode$addRipple$slambda).q1k = function ($this$launch, completion) {
    var i = new CommonRippleNode$addRipple$slambda(this.mck_1, this.nck_1, this.ock_1, completion);
    i.pck_1 = $this$launch;
    return i;
  };
  function CommonRippleNode$addRipple$slambda_0($rippleAnimation, this$0, $interaction, resultContinuation) {
    var i = new CommonRippleNode$addRipple$slambda($rippleAnimation, this$0, $interaction, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    RippleNode.call(this, interactionSource, bounded, radius, color, rippleAlpha);
    this.bcm_1 = new MutableScatterMap();
  }
  protoOf(CommonRippleNode).ccm = function (interaction, size, targetRadius) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var this_0 = this.bcm_1;
    var k = this_0.mn_1;
    var v = this_0.nn_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this_0.ln_1;
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
                  k[index];
                  v[index].dcm();
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
    var origin = this.tcm_1 ? interaction.mbm_1 : null;
    var rippleAnimation = new RippleAnimation(origin, targetRadius, this.tcm_1);
    this.bcm_1.wn(interaction, rippleAnimation);
    var tmp = this.b6k();
    launch(tmp, VOID, VOID, CommonRippleNode$addRipple$slambda_0(rippleAnimation, this, interaction, null));
    invalidateDraw(this);
  };
  protoOf(CommonRippleNode).dcn = function (interaction) {
    var tmp0_safe_receiver = this.bcm_1.u1(interaction);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.dcm();
    }
  };
  protoOf(CommonRippleNode).ecn = function (_this__u8e3s4) {
    var alpha = this.wcm_1().icn_1;
    if (!(alpha === 0.0)) {
      // Inline function 'androidx.collection.ScatterMap.forEach' call
      var this_0 = this.bcm_1;
      var k = this_0.mn_1;
      var v = this_0.nn_1;
      $l$block: {
        // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
        var m = this_0.ln_1;
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
                    k[index];
                    // Inline function 'kotlin.with' call
                    v[index].kcn(_this__u8e3s4, Color__copy$default_impl_ectz3s(this.jcn(), alpha));
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
  };
  protoOf(CommonRippleNode).i6k = function () {
    this.bcm_1.b2();
  };
  function get_DefaultTweenSpec() {
    _init_properties_Ripple_kt__d55ieo();
    return DefaultTweenSpec;
  }
  var DefaultTweenSpec;
  var androidx_compose_material_ripple_Ripple$stable;
  var androidx_compose_material_ripple_RippleIndicationInstance$stable;
  var androidx_compose_material_ripple_RippleNode$stable;
  function createRippleModifierNode(interactionSource, bounded, radius, color, rippleAlpha) {
    _init_properties_Ripple_kt__d55ieo();
    return createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  function RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation) {
    this.tcn_1 = this$0;
    this.ucn_1 = $this_launch;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda$slambda).gbf = function (interaction, $completion) {
    var tmp = this.hbf(interaction, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleNode$onAttach$slambda$slambda).d9 = function (p1, $completion) {
    return this.gbf((!(p1 == null) ? isInterface(p1, Interaction) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          var tmp0_subject = this.vcn_1;
          if (isInterface(tmp0_subject, PressInteraction)) {
            if (this.tcn_1.bcn_1) {
              handlePressInteraction(this.tcn_1, this.vcn_1);
            } else {
              var tmp0 = this.tcn_1.ccn_1;
              var element = this.vcn_1;
              tmp0.g(element);
            }
          } else {
            updateStateLayer(this.tcn_1, this.vcn_1, this.ucn_1);
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
  protoOf(RippleNode$onAttach$slambda$slambda).hbf = function (interaction, completion) {
    var i = new RippleNode$onAttach$slambda$slambda(this.tcn_1, this.ucn_1, completion);
    i.vcn_1 = interaction;
    return i;
  };
  function RippleNode$onAttach$slambda$slambda_0(this$0, $this_launch, resultContinuation) {
    var i = new RippleNode$onAttach$slambda$slambda(this$0, $this_launch, resultContinuation);
    return constructCallableReference(function (interaction, $completion) {
      return i.gbf(interaction, $completion);
    }, 1);
  }
  function handlePressInteraction($this, pressInteraction) {
    if (pressInteraction instanceof Press) {
      $this.ccm(pressInteraction, $this.acn_1, $this.zcm_1);
    } else {
      if (pressInteraction instanceof Release) {
        $this.dcn(pressInteraction.nbm_1);
      } else {
        if (pressInteraction instanceof Cancel) {
          $this.dcn(pressInteraction.obm_1);
        }
      }
    }
  }
  function updateStateLayer($this, interaction, scope) {
    var tmp0_elvis_lhs = $this.ycm_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new StateLayer($this.tcm_1, $this.wcm_1);
      invalidateDraw($this);
      $this.ycm_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var stateLayer = tmp;
    stateLayer.bco(interaction, scope);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.cco_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).l1f = function (value, $completion) {
    return this.cco_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).r2 = function () {
    return this.cco_1;
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
  function RippleNode$onAttach$slambda(this$0, resultContinuation) {
    this.lco_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleNode$onAttach$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleNode$onAttach$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleNode$onAttach$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            var tmp_0 = this.lco_1.scm_1.lbg();
            var tmp_1 = RippleNode$onAttach$slambda$slambda_0(this.lco_1, this.mco_1, null);
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
  protoOf(RippleNode$onAttach$slambda).q1k = function ($this$launch, completion) {
    var i = new RippleNode$onAttach$slambda(this.lco_1, completion);
    i.mco_1 = $this$launch;
    return i;
  };
  function RippleNode$onAttach$slambda_0(this$0, resultContinuation) {
    var i = new RippleNode$onAttach$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function RippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    Node.call(this);
    this.scm_1 = interactionSource;
    this.tcm_1 = bounded;
    this.ucm_1 = radius;
    this.vcm_1 = color;
    this.wcm_1 = rippleAlpha;
    this.xcm_1 = false;
    this.ycm_1 = null;
    this.zcm_1 = 0.0;
    this.acn_1 = Companion_getInstance().d47_1;
    this.bcn_1 = false;
    var tmp = this;
    // Inline function 'androidx.collection.mutableObjectListOf' call
    tmp.ccn_1 = new MutableObjectList();
  }
  protoOf(RippleNode).c6k = function () {
    return this.xcm_1;
  };
  protoOf(RippleNode).jcn = function () {
    return this.vcm_1.s51();
  };
  protoOf(RippleNode).s6n = function (size) {
    this.bcn_1 = true;
    var density = requireDensity(this);
    this.acn_1 = toSize(size);
    var tmp = this;
    // Inline function 'kotlin.with' call
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isUnspecified' call
    var this_0 = this.ucm_1;
    if (isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = getRippleEndRadius(density, this.tcm_1, this.acn_1);
    } else {
      tmp_0 = density.n47(this.ucm_1);
    }
    tmp.zcm_1 = tmp_0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    var this_1 = this.ccn_1;
    // Inline function 'kotlin.contracts.contract' call
    var content = this_1.jm_1;
    var inductionVariable = 0;
    var last = this_1.km_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var it = content[i];
        handlePressInteraction(this, it);
      }
       while (inductionVariable < last);
    this.ccn_1.b2();
  };
  protoOf(RippleNode).g6k = function () {
    var tmp = this.b6k();
    launch(tmp, VOID, VOID, RippleNode$onAttach$slambda_0(this, null));
  };
  protoOf(RippleNode).d6o = function (_this__u8e3s4) {
    _this__u8e3s4.t6s();
    var tmp0_safe_receiver = this.ycm_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.run' call
      tmp0_safe_receiver.nco(_this__u8e3s4, this.zcm_1, this.jcn());
    }
    this.ecn(_this__u8e3s4);
  };
  function StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    this.wco_1 = this$0;
    this.xco_1 = $targetAlpha;
    this.yco_1 = $incomingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(StateLayer$handleInteraction$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.wco_1.ycn_1.vaf(this.xco_1, this.yco_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda).q1k = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda(this.wco_1, this.xco_1, this.yco_1, completion);
    i.zco_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_0(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda(this$0, $targetAlpha, $incomingAnimationSpec, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation) {
    this.icp_1 = this$0;
    this.jcp_1 = $outgoingAnimationSpec;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(StateLayer$handleInteraction$slambda_1).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(StateLayer$handleInteraction$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(StateLayer$handleInteraction$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.icp_1.ycn_1.vaf(0.0, this.jcp_1, VOID, VOID, this);
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
  protoOf(StateLayer$handleInteraction$slambda_1).q1k = function ($this$launch, completion) {
    var i = new StateLayer$handleInteraction$slambda_1(this.icp_1, this.jcp_1, completion);
    i.kcp_1 = $this$launch;
    return i;
  };
  function StateLayer$handleInteraction$slambda_2(this$0, $outgoingAnimationSpec, resultContinuation) {
    var i = new StateLayer$handleInteraction$slambda_1(this$0, $outgoingAnimationSpec, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function StateLayer(bounded, rippleAlpha) {
    this.wcn_1 = bounded;
    this.xcn_1 = rippleAlpha;
    this.ycn_1 = Animatable(0.0);
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.zcn_1 = ArrayList_init_$Create$();
    this.aco_1 = null;
  }
  protoOf(StateLayer).bco = function (interaction, scope) {
    if (interaction instanceof Enter) {
      this.zcn_1.g(interaction);
    } else {
      if (interaction instanceof Exit) {
        this.zcn_1.c2(interaction.kbm_1);
      } else {
        if (interaction instanceof Focus) {
          this.zcn_1.g(interaction);
        } else {
          if (interaction instanceof Unfocus) {
            this.zcn_1.c2(interaction.jbm_1);
          } else {
            if (interaction instanceof Start) {
              this.zcn_1.g(interaction);
            } else {
              if (interaction instanceof Stop) {
                this.zcn_1.c2(interaction.mcp_1);
              } else {
                if (interaction instanceof Cancel_0) {
                  this.zcn_1.c2(interaction.lcp_1);
                } else {
                  return Unit_instance;
                }
              }
            }
          }
        }
      }
    }
    var newInteraction = lastOrNull(this.zcn_1);
    if (!equals(this.aco_1, newInteraction)) {
      if (!(newInteraction == null)) {
        var rippleAlpha = this.xcn_1();
        var tmp;
        if (newInteraction instanceof Enter) {
          tmp = rippleAlpha.hcn_1;
        } else {
          if (newInteraction instanceof Focus) {
            tmp = rippleAlpha.gcn_1;
          } else {
            if (newInteraction instanceof Start) {
              tmp = rippleAlpha.fcn_1;
            } else {
              tmp = 0.0;
            }
          }
        }
        var targetAlpha = tmp;
        var incomingAnimationSpec = incomingStateLayerAnimationSpecFor(newInteraction);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_0(this, targetAlpha, incomingAnimationSpec, null));
      } else {
        var outgoingAnimationSpec = outgoingStateLayerAnimationSpecFor(this.aco_1);
        launch(scope, VOID, VOID, StateLayer$handleInteraction$slambda_2(this, outgoingAnimationSpec, null));
      }
      this.aco_1 = newInteraction;
    }
  };
  protoOf(StateLayer).nco = function (_this__u8e3s4, radius, color) {
    var alpha = this.ycn_1.r1();
    if (alpha > 0.0) {
      var modulatedColor = Color__copy$default_impl_ectz3s(color, alpha);
      if (this.wcn_1) {
        // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
        // Inline function 'androidx.compose.ui.geometry.Size.width' call
        var this_0 = _this__u8e3s4.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat1' call
        var value = _Size___get_packedValue__impl__7rlt1o(this_0);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits = convertToInt(shiftRight(value, 32));
        var right = floatFromBits(bits);
        // Inline function 'androidx.compose.ui.geometry.Size.height' call
        var this_1 = _this__u8e3s4.f5a();
        // Inline function 'androidx.compose.ui.util.unpackFloat2' call
        var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
        // Inline function 'androidx.compose.ui.util.floatFromBits' call
        // Inline function 'kotlin.fromBits' call
        var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
        var bottom = floatFromBits(bits_0);
        var clipOp = Companion_getInstance_0().v4z_1;
        // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
        // Inline function 'kotlin.with' call
        var $this$with = _this__u8e3s4.d5b();
        var previousSize = $this$with.f5a();
        $this$with.k4l().m4z();
        try {
          $this$with.x5a().s4z(0.0, 0.0, right, bottom, clipOp);
          _this__u8e3s4.k5b(modulatedColor, radius);
        }finally {
          $this$with.k4l().n4z();
          $this$with.w5a(previousSize);
        }
      } else {
        _this__u8e3s4.k5b(modulatedColor, radius);
      }
    }
  };
  function incomingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = new TweenSpec(45, VOID, get_LinearEasing());
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(45, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  function outgoingStateLayerAnimationSpecFor(interaction) {
    _init_properties_Ripple_kt__d55ieo();
    var tmp;
    if (interaction instanceof Enter) {
      tmp = get_DefaultTweenSpec();
    } else {
      if (interaction instanceof Focus) {
        tmp = get_DefaultTweenSpec();
      } else {
        if (interaction instanceof Start) {
          tmp = new TweenSpec(150, VOID, get_LinearEasing());
        } else {
          tmp = get_DefaultTweenSpec();
        }
      }
    }
    return tmp;
  }
  var properties_initialized_Ripple_kt_3wqvym;
  function _init_properties_Ripple_kt__d55ieo() {
    if (!properties_initialized_Ripple_kt_3wqvym) {
      properties_initialized_Ripple_kt_3wqvym = true;
      DefaultTweenSpec = new TweenSpec(15, VOID, get_LinearEasing());
      androidx_compose_material_ripple_Ripple$stable = 0;
      androidx_compose_material_ripple_RippleIndicationInstance$stable = 8;
      androidx_compose_material_ripple_RippleNode$stable = 8;
    }
  }
  function get_BoundedRippleExtraRadius() {
    _init_properties_RippleAnimation_kt__8sy0vy();
    return BoundedRippleExtraRadius;
  }
  var BoundedRippleExtraRadius;
  var androidx_compose_material_ripple_RippleAnimation$stable;
  function RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation) {
    this.vcp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.vcp_1.vck_1.vaf(1.0, tween(75, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda).q1k = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this.vcp_1, completion);
    i.wcp_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation) {
    this.fcq_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.fcq_1.wck_1.vaf(1.0, tween(225, VOID, get_FastOutSlowInEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_1).q1k = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this.fcq_1, completion);
    i.gcq_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_2(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_1(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation) {
    this.pcq_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.pcq_1.xck_1.vaf(1.0, tween(225, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeIn$slambda$slambda_3).q1k = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this.pcq_1, completion);
    i.qcq_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeIn$slambda$slambda_4(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda$slambda_3(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation) {
    this.zcq_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda$slambda).p1k = function ($this$launch, $completion) {
    var tmp = this.q1k($this$launch, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.zcq_1.vck_1.vaf(0.0, tween(150, VOID, get_LinearEasing()), VOID, VOID, this);
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
  protoOf(RippleAnimation$fadeOut$slambda$slambda).q1k = function ($this$launch, completion) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this.zcq_1, completion);
    i.acr_1 = $this$launch;
    return i;
  };
  function RippleAnimation$fadeOut$slambda$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$launch, $completion) {
      return i.p1k($this$launch, $completion);
    }, 1);
  }
  function _set_finishedFadingIn__33hlo9($this, _set____db54di) {
    var tmp0 = $this.zck_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('finishedFadingIn', 1, tmp, tmp_0, RippleAnimation$_set_finishedFadingIn_$ref_1drawq());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function _get_finishedFadingIn__pzmnej($this) {
    var tmp0 = $this.zck_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('finishedFadingIn', 1, tmp, tmp_0, RippleAnimation$_set_finishedFadingIn_$ref_1drawq());
    return tmp0.r1();
  }
  function _set_finishRequested__u52oy2($this, _set____db54di) {
    var tmp0 = $this.acl_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishRequested_$ref_hndrqt();
    // Inline function 'androidx.compose.runtime.setValue' call
    getPropertyCallableRef('finishRequested', 1, tmp, tmp_0, RippleAnimation$_set_finishRequested_$ref_4cniuh());
    tmp0.y1i(_set____db54di);
    return Unit_instance;
  }
  function _get_finishRequested__usb5ii($this) {
    var tmp0 = $this.acl_1;
    var tmp = KMutableProperty1;
    var tmp_0 = RippleAnimation$_get_finishRequested_$ref_hndrqt();
    // Inline function 'androidx.compose.runtime.getValue' call
    getPropertyCallableRef('finishRequested', 1, tmp, tmp_0, RippleAnimation$_set_finishRequested_$ref_4cniuh());
    return tmp0.r1();
  }
  function fadeIn($this, $completion) {
    var tmp = new $fadeInCOROUTINE$($this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function fadeOut($this, $completion) {
    var tmp = new $fadeOutCOROUTINE$($this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function RippleAnimation$_get_finishedFadingIn_$ref_fbtyx2() {
    return constructCallableReference(function (p0) {
      return _get_finishedFadingIn__pzmnej(p0);
    }, 1, 0, 155);
  }
  function RippleAnimation$_set_finishedFadingIn_$ref_1drawq() {
    return constructCallableReference(function (p0, p1) {
      _set_finishedFadingIn__33hlo9(p0, p1);
      return Unit_instance;
    }, 2, 0, 156);
  }
  function RippleAnimation$_get_finishRequested_$ref_hndrqt() {
    return constructCallableReference(function (p0) {
      return _get_finishRequested__usb5ii(p0);
    }, 1, 0, 157);
  }
  function RippleAnimation$_set_finishRequested_$ref_4cniuh() {
    return constructCallableReference(function (p0, p1) {
      _set_finishRequested__u52oy2(p0, p1);
      return Unit_instance;
    }, 2, 0, 158);
  }
  function RippleAnimation$fadeIn$slambda(this$0, resultContinuation) {
    this.bcs_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeIn$slambda).dcs = function ($this$coroutineScope, $completion) {
    var tmp = this.q1k($this$coroutineScope, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleAnimation$fadeIn$slambda).d9 = function (p1, $completion) {
    return this.dcs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeIn$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          launch(this.ccs_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_0(this.bcs_1, null));
          launch(this.ccs_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_2(this.bcs_1, null));
          return launch(this.ccs_1, VOID, VOID, RippleAnimation$fadeIn$slambda$slambda_4(this.bcs_1, null));
        } else if (tmp === 1) {
          throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeIn$slambda).q1k = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeIn$slambda(this.bcs_1, completion);
    i.ccs_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeIn$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeIn$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.dcs($this$coroutineScope, $completion);
    }, 1);
  }
  function RippleAnimation$fadeOut$slambda(this$0, resultContinuation) {
    this.mcs_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(RippleAnimation$fadeOut$slambda).dcs = function ($this$coroutineScope, $completion) {
    var tmp = this.q1k($this$coroutineScope, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleAnimation$fadeOut$slambda).d9 = function (p1, $completion) {
    return this.dcs((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(RippleAnimation$fadeOut$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        if (tmp === 0) {
          this.m8_1 = 1;
          return launch(this.ncs_1, VOID, VOID, RippleAnimation$fadeOut$slambda$slambda_0(this.mcs_1, null));
        } else if (tmp === 1) {
          throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        throw e;
      }
     while (true);
  };
  protoOf(RippleAnimation$fadeOut$slambda).q1k = function ($this$coroutineScope, completion) {
    var i = new RippleAnimation$fadeOut$slambda(this.mcs_1, completion);
    i.ncs_1 = $this$coroutineScope;
    return i;
  };
  function RippleAnimation$fadeOut$slambda_0(this$0, resultContinuation) {
    var i = new RippleAnimation$fadeOut$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.dcs($this$coroutineScope, $completion);
    }, 1);
  }
  function $animateCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.wcs_1 = _this__u8e3s4;
  }
  protoOf($animateCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            this.l8_1 = 1;
            suspendResult = fadeIn(this.wcs_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            _set_finishedFadingIn__33hlo9(this.wcs_1, true);
            this.l8_1 = 2;
            suspendResult = this.wcs_1.yck_1.ix(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.l8_1 = 3;
            suspendResult = fadeOut(this.wcs_1, this);
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
  function $fadeInCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.jcr_1 = _this__u8e3s4;
  }
  protoOf($fadeInCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeIn$slambda_0(this.jcr_1, null), this);
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
  function $fadeOutCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.scr_1 = _this__u8e3s4;
  }
  protoOf($fadeOutCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = coroutineScope(RippleAnimation$fadeOut$slambda_0(this.scr_1, null), this);
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
  function RippleAnimation(origin, radius, bounded) {
    this.qck_1 = origin;
    this.rck_1 = radius;
    this.sck_1 = bounded;
    this.tck_1 = null;
    this.uck_1 = null;
    this.vck_1 = Animatable(0.0);
    this.wck_1 = Animatable(0.0);
    this.xck_1 = Animatable(0.0);
    this.yck_1 = CompletableDeferred(null);
    this.zck_1 = mutableStateOf(false);
    this.acl_1 = mutableStateOf(false);
  }
  protoOf(RippleAnimation).bcl = function ($completion) {
    var tmp = new $animateCOROUTINE$(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(RippleAnimation).dcm = function () {
    _set_finishRequested__u52oy2(this, true);
    this.yck_1.l11(Unit_instance);
  };
  protoOf(RippleAnimation).kcn = function (_this__u8e3s4, color) {
    if (this.tck_1 == null) {
      this.tck_1 = getRippleStartRadius(_this__u8e3s4.f5a());
    }
    var tmp = this.qck_1;
    if ((tmp == null ? null : new Offset(tmp)) == null) {
      this.qck_1 = _this__u8e3s4.n5b();
    }
    var tmp_0 = this.uck_1;
    if ((tmp_0 == null ? null : new Offset(tmp_0)) == null) {
      var tmp_1 = this;
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_0 = _this__u8e3s4.f5a();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value = _Size___get_packedValue__impl__7rlt1o(this_0);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits = convertToInt(shiftRight(value, 32));
      var tmp0 = floatFromBits(bits) / 2.0;
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_1 = _this__u8e3s4.f5a();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_0 = _Size___get_packedValue__impl__7rlt1o(this_1);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.geometry.Offset' call
      // Inline function 'androidx.compose.ui.util.packFloats' call
      var val2 = floatFromBits(bits_0) / 2.0;
      var v1 = fromInt(toRawBits(tmp0));
      var v2 = fromInt(toRawBits(val2));
      var tmp$ret$9 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
      tmp_1.uck_1 = _Offset___init__impl__c168vi(tmp$ret$9);
    }
    var tmp_2;
    if (_get_finishRequested__usb5ii(this) && !_get_finishedFadingIn__pzmnej(this)) {
      tmp_2 = 1.0;
    } else {
      tmp_2 = this.vck_1.r1();
    }
    var alpha = tmp_2;
    var radius = lerp(ensureNotNull(this.tck_1), this.rck_1, this.wck_1.r1());
    var tmp_3 = this.qck_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_2 = ensureNotNull(tmp_3 == null ? null : new Offset(tmp_3)).h46_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_1 = _Offset___get_packedValue__impl__xh2k8q(this_2);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_1 = convertToInt(shiftRight(value_1, 32));
    var tmp_4 = floatFromBits(bits_1);
    var tmp_5 = this.uck_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.x' call
    var this_3 = ensureNotNull(tmp_5 == null ? null : new Offset(tmp_5)).h46_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value_2 = _Offset___get_packedValue__impl__xh2k8q(this_3);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_2 = convertToInt(shiftRight(value_2, 32));
    var tmp$ret$14 = floatFromBits(bits_2);
    var tmp0_0 = lerp(tmp_4, tmp$ret$14, this.xck_1.r1());
    var tmp_6 = this.qck_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_4 = ensureNotNull(tmp_6 == null ? null : new Offset(tmp_6)).h46_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_3 = _Offset___get_packedValue__impl__xh2k8q(this_4);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_3 = convertToInt(bitwiseAnd(value_3, new Long(-1, 0)));
    var tmp_7 = floatFromBits(bits_3);
    var tmp_8 = this.uck_1;
    // Inline function 'androidx.compose.ui.geometry.Offset.y' call
    var this_5 = ensureNotNull(tmp_8 == null ? null : new Offset(tmp_8)).h46_1;
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_4 = _Offset___get_packedValue__impl__xh2k8q(this_5);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_4 = convertToInt(bitwiseAnd(value_4, new Long(-1, 0)));
    var tmp$ret$22 = floatFromBits(bits_4);
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2_0 = lerp(tmp_7, tmp$ret$22, this.xck_1.r1());
    var v1_0 = fromInt(toRawBits(tmp0_0));
    var v2_0 = fromInt(toRawBits(val2_0));
    var tmp$ret$27 = bitwiseOr(shiftLeft(v1_0, 32), bitwiseAnd(v2_0, new Long(-1, 0)));
    var centerOffset = _Offset___init__impl__c168vi(tmp$ret$27);
    var modulatedColor = Color__copy$default_impl_ectz3s(color, _Color___get_alpha__impl__wcfyv1(color) * alpha);
    if (this.sck_1) {
      // Inline function 'androidx.compose.ui.graphics.drawscope.clipRect' call
      // Inline function 'androidx.compose.ui.geometry.Size.width' call
      var this_6 = _this__u8e3s4.f5a();
      // Inline function 'androidx.compose.ui.util.unpackFloat1' call
      var value_5 = _Size___get_packedValue__impl__7rlt1o(this_6);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_5 = convertToInt(shiftRight(value_5, 32));
      var right = floatFromBits(bits_5);
      // Inline function 'androidx.compose.ui.geometry.Size.height' call
      var this_7 = _this__u8e3s4.f5a();
      // Inline function 'androidx.compose.ui.util.unpackFloat2' call
      var value_6 = _Size___get_packedValue__impl__7rlt1o(this_7);
      // Inline function 'androidx.compose.ui.util.floatFromBits' call
      // Inline function 'kotlin.fromBits' call
      var bits_6 = convertToInt(bitwiseAnd(value_6, new Long(-1, 0)));
      var bottom = floatFromBits(bits_6);
      var clipOp = Companion_getInstance_0().v4z_1;
      // Inline function 'androidx.compose.ui.graphics.drawscope.withTransform' call
      // Inline function 'kotlin.with' call
      var $this$with = _this__u8e3s4.d5b();
      var previousSize = $this$with.f5a();
      $this$with.k4l().m4z();
      try {
        $this$with.x5a().s4z(0.0, 0.0, right, bottom, clipOp);
        _this__u8e3s4.k5b(modulatedColor, radius, centerOffset);
      }finally {
        $this$with.k4l().n4z();
        $this$with.w5a(previousSize);
      }
    } else {
      _this__u8e3s4.k5b(modulatedColor, radius, centerOffset);
    }
  };
  function getRippleEndRadius(_this__u8e3s4, bounded, size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'androidx.compose.ui.geometry.Offset' call
    // Inline function 'androidx.compose.ui.util.packFloats' call
    var val2 = floatFromBits(bits_0);
    var v1 = fromInt(toRawBits(tmp0));
    var v2 = fromInt(toRawBits(val2));
    var tmp$ret$9 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    var tmp$ret$8 = _Offset___init__impl__c168vi(tmp$ret$9);
    var radiusCoveringBounds = Offset__getDistance_impl_pclvxn(tmp$ret$8) / 2.0;
    var tmp;
    if (bounded) {
      tmp = radiusCoveringBounds + _this__u8e3s4.n47(get_BoundedRippleExtraRadius());
    } else {
      tmp = radiusCoveringBounds;
    }
    return tmp;
  }
  function getRippleStartRadius(size) {
    _init_properties_RippleAnimation_kt__8sy0vy();
    // Inline function 'androidx.compose.ui.geometry.Size.width' call
    // Inline function 'androidx.compose.ui.util.unpackFloat1' call
    var value = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits = convertToInt(shiftRight(value, 32));
    var tmp0 = floatFromBits(bits);
    // Inline function 'androidx.compose.ui.geometry.Size.height' call
    // Inline function 'androidx.compose.ui.util.unpackFloat2' call
    var value_0 = _Size___get_packedValue__impl__7rlt1o(size);
    // Inline function 'androidx.compose.ui.util.floatFromBits' call
    // Inline function 'kotlin.fromBits' call
    var bits_0 = convertToInt(bitwiseAnd(value_0, new Long(-1, 0)));
    // Inline function 'kotlin.math.max' call
    var b = floatFromBits(bits_0);
    return Math.max(tmp0, b) * 0.3;
  }
  var properties_initialized_RippleAnimation_kt_4ja21o;
  function _init_properties_RippleAnimation_kt__8sy0vy() {
    if (!properties_initialized_RippleAnimation_kt_4ja21o) {
      properties_initialized_RippleAnimation_kt_4ja21o = true;
      // Inline function 'androidx.compose.ui.unit.dp' call
      BoundedRippleExtraRadius = _Dp___init__impl__ms3zkb(10);
      androidx_compose_material_ripple_RippleAnimation$stable = 8;
    }
  }
  function RippleAlpha(draggedAlpha, focusedAlpha, hoveredAlpha, pressedAlpha) {
    this.fcn_1 = draggedAlpha;
    this.gcn_1 = focusedAlpha;
    this.hcn_1 = hoveredAlpha;
    this.icn_1 = pressedAlpha;
  }
  protoOf(RippleAlpha).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RippleAlpha))
      return false;
    if (!(this.fcn_1 === other.fcn_1))
      return false;
    if (!(this.gcn_1 === other.gcn_1))
      return false;
    if (!(this.hcn_1 === other.hcn_1))
      return false;
    if (!(this.icn_1 === other.icn_1))
      return false;
    return true;
  };
  protoOf(RippleAlpha).hashCode = function () {
    var result = getNumberHashCode(this.fcn_1);
    result = imul(31, result) + getNumberHashCode(this.gcn_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.hcn_1) | 0;
    result = imul(31, result) + getNumberHashCode(this.icn_1) | 0;
    return result;
  };
  protoOf(RippleAlpha).toString = function () {
    return 'RippleAlpha(draggedAlpha=' + this.fcn_1 + ', focusedAlpha=' + this.gcn_1 + ', ' + ('hoveredAlpha=' + this.hcn_1 + ', pressedAlpha=' + this.icn_1 + ')');
  };
  function createPlatformRippleNode(interactionSource, bounded, radius, color, rippleAlpha) {
    return new CommonRippleNode(interactionSource, bounded, radius, color, rippleAlpha);
  }
  //region block: post-declaration
  protoOf(RippleNode).v6q = onMeasureResultChanged;
  protoOf(RippleNode).v6n = onPlaced;
  //endregion
  //region block: init
  androidx_compose_material_ripple_CommonRipple$stable = 0;
  androidx_compose_material_ripple_CommonRippleNode$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = RippleAlpha;
  _.$_$.b = createRippleModifierNode;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-material-material-ripple.js.map
