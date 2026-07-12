(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './compose-multiplatform-core-compose-ui-ui-unit.js', './kotlin-kotlin-stdlib.js', './androidx-collection-collection.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-compose-runtime-runtime.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./compose-multiplatform-core-compose-ui-ui-unit.js'), require('./kotlin-kotlin-stdlib.js'), require('./androidx-collection-collection.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-compose-runtime-runtime.js'));
  else {
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui-unit'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui-unit' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui-unit' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-collection-collection'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-collection-collection' was not found. Please, check whether 'androidx-collection-collection' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'compose-multiplatform-core-compose-foundation-foundation-layout'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'compose-multiplatform-core-compose-foundation-foundation-layout'.");
    }
    globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] = factory(typeof globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'] === 'undefined' ? {} : globalThis['compose-multiplatform-core-compose-foundation-foundation-layout'], globalThis['compose-multiplatform-core-compose-ui-ui-unit'], globalThis['kotlin-kotlin-stdlib'], globalThis['androidx-collection-collection'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-compose-runtime-runtime']);
  }
}(function (_, kotlin_org_jetbrains_compose_ui_ui_unit, kotlin_kotlin, kotlin_androidx_collection_collection, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_compose_runtime_runtime) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _Dp___init__impl__ms3zkb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w1;
  var protoOf = kotlin_kotlin.$_$.aa;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var LayoutDirection_Ltr_getInstance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m3;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.c;
  var roundToInt = kotlin_kotlin.$_$.ea;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var get_lastIndex = kotlin_kotlin.$_$.l5;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var MutableScatterMap = kotlin_androidx_collection_collection.$_$.n;
  var Companion_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.a5;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var Placeable = kotlin_org_jetbrains_compose_ui_ui.$_$.p1;
  var _Constraints___get_minWidth__impl__hi9lfi = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.t1;
  var _Constraints___get_minHeight__impl__ev4bgx = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s1;
  var _Constraints___get_value__impl__3ah2ax = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v1;
  var Long = kotlin_kotlin.$_$.yc;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var _Constraints___init__impl__v8ud31 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.k1;
  var Companion_instance = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.e3;
  var Constraints = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a;
  var toString = kotlin_kotlin.$_$.ca;
  var hashCode = kotlin_kotlin.$_$.i9;
  var getBooleanHashCode = kotlin_kotlin.$_$.d9;
  var equals = kotlin_kotlin.$_$.b9;
  var MeasurePolicy = kotlin_org_jetbrains_compose_ui_ui.$_$.o1;
  var fromInt = kotlin_kotlin.$_$.d8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var _IntSize___init__impl__emcjft = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q2;
  var Node = kotlin_org_jetbrains_compose_ui_ui.$_$.f4;
  var ParentDataModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.d2;
  var Constraints_0 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.b;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var isInterface = kotlin_kotlin.$_$.r9;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var _Constraints___get_maxHeight__impl__dt3e8z = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.q1;
  var _Constraints___get_maxWidth__impl__uuyqc = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.r1;
  var Companion_getInstance_0 = kotlin_androidx_compose_runtime_runtime.$_$.c2;
  var _Dp___get_value__impl__geb1vb = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.a2;
  var Dp__hashCode_impl_sxkrra = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.y1;
  var Dp__toString_impl_kcddez = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.z1;
  var ModifierNodeElement = kotlin_org_jetbrains_compose_ui_ui.$_$.c2;
  var Dp__compareTo_impl_tlg3dl = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.x1;
  var offset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.c1;
  var constrainWidth = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.w;
  var constrainHeight = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.v;
  var LayoutModifierNode = kotlin_org_jetbrains_compose_ui_ui.$_$.b2;
  var androidx_compose_ui_Modifier_Node$stableprop_getter = kotlin_org_jetbrains_compose_ui_ui.$_$.h4;
  var multiply = kotlin_kotlin.$_$.g8;
  var numberToLong = kotlin_kotlin.$_$.i8;
  var subtract = kotlin_kotlin.$_$.m8;
  var compare = kotlin_kotlin.$_$.y7;
  var toNumber = kotlin_kotlin.$_$.n8;
  var get_sign = kotlin_kotlin.$_$.ga;
  var add = kotlin_kotlin.$_$.u7;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var Companion_getInstance_1 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.f3;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var _IntSize___get_packedValue__impl__uho7jf = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.s2;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var _IntOffset___init__impl__rq8h7b = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.i2;
  var IntOffset = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.o;
  var Companion_getInstance_2 = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.j3;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var _Constraints___get_hasBoundedWidth__impl__7hd0wr = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.m1;
  var _Constraints___get_hasBoundedHeight__impl__bsh4rw = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.l1;
  var Enum = kotlin_kotlin.$_$.sc;
  var IntSize = kotlin_org_jetbrains_compose_ui_ui_unit.$_$.p;
  var coerceIn = kotlin_kotlin.$_$.oa;
  var invalidateMeasurement = kotlin_org_jetbrains_compose_ui_ui.$_$.u2;
  var traverseDescendants = kotlin_org_jetbrains_compose_ui_ui.$_$.a3;
  var TraverseDescendantsAction_SkipSubtreeAndContinueTraversal_getInstance = kotlin_org_jetbrains_compose_ui_ui.$_$.f5;
  var traverseAncestors = kotlin_org_jetbrains_compose_ui_ui.$_$.z2;
  var TraversableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.o2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var PlatformWindowInsetsProviderNode = kotlin_org_jetbrains_compose_ui_ui.$_$.g3;
  var observeReads = kotlin_org_jetbrains_compose_ui_ui.$_$.w2;
  var DelegatableNode = kotlin_org_jetbrains_compose_ui_ui.$_$.u1;
  var get_NoInspectorInfo = kotlin_org_jetbrains_compose_ui_ui.$_$.f3;
  var get_isDebugInspectorInfoEnabled = kotlin_org_jetbrains_compose_ui_ui.$_$.h3;
  var get_safeDrawing = kotlin_org_jetbrains_compose_ui_ui.$_$.j3;
  var get_safeGestures = kotlin_org_jetbrains_compose_ui_ui.$_$.k3;
  var get_safeContent = kotlin_org_jetbrains_compose_ui_ui.$_$.i3;
  //endregion
  //region block: pre-declaration
  function get_spacing() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Horizontal, 'Horizontal');
  function get_spacing_0() {
    // Inline function 'androidx.compose.ui.unit.dp' call
    return _Dp___init__impl__ms3zkb(0);
  }
  initMetadataForInterface(Vertical, 'Vertical');
  initMetadataForClass(Arrangement$Start$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$End$1, VOID, VOID, VOID, [Horizontal]);
  initMetadataForClass(Arrangement$Top$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Bottom$1, VOID, VOID, VOID, [Vertical]);
  initMetadataForClass(Arrangement$Center$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceEvenly$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceBetween$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForClass(Arrangement$SpaceAround$1, VOID, VOID, VOID, [Horizontal, Vertical]);
  initMetadataForObject(Arrangement, 'Arrangement');
  initMetadataForClass(BoxMeasurePolicy, 'BoxMeasurePolicy', VOID, VOID, [MeasurePolicy]);
  initMetadataForObject(BoxScopeInstance, 'BoxScopeInstance');
  initMetadataForClass(BoxChildDataNode, 'BoxChildDataNode', VOID, Node, [ParentDataModifierNode]);
  initMetadataForClass(sam$androidx_compose_ui_layout_MeasurePolicy$0, 'sam$androidx_compose_ui_layout_MeasurePolicy$0', VOID, VOID, [MeasurePolicy, FunctionAdapter]);
  function createConstraints$default(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing, $super) {
    isPrioritizing = isPrioritizing === VOID ? false : isPrioritizing;
    return $super === VOID ? this.ya5(mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) : $super.ya5.call(this, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing).g47_1;
  }
  initMetadataForInterface(RowColumnMeasurePolicy, 'RowColumnMeasurePolicy');
  initMetadataForClass(ColumnMeasurePolicy, 'ColumnMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(ColumnScopeInstance, 'ColumnScopeInstance');
  initMetadataForClass(PaddingValuesImpl, 'PaddingValuesImpl', PaddingValuesImpl);
  initMetadataForClass(PaddingValuesElement, 'PaddingValuesElement', VOID, ModifierNodeElement);
  initMetadataForClass(PaddingValuesModifier, 'PaddingValuesModifier', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(RowMeasurePolicy, 'RowMeasurePolicy', VOID, VOID, [MeasurePolicy, RowColumnMeasurePolicy]);
  initMetadataForObject(RowScopeInstance, 'RowScopeInstance');
  initMetadataForClass(RowColumnParentData, 'RowColumnParentData');
  initMetadataForCompanion(Companion);
  initMetadataForClass(FillElement, 'FillElement', VOID, ModifierNodeElement);
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(WrapContentElement, 'WrapContentElement', VOID, ModifierNodeElement);
  initMetadataForClass(UnspecifiedConstraintsElement, 'UnspecifiedConstraintsElement', UnspecifiedConstraintsElement, ModifierNodeElement);
  initMetadataForClass(FillNode, 'FillNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForClass(WrapContentNode, 'WrapContentNode', VOID, Node, [LayoutModifierNode]);
  initMetadataForClass(UnspecifiedConstraintsNode, 'UnspecifiedConstraintsNode', UnspecifiedConstraintsNode, Node, [LayoutModifierNode]);
  initMetadataForClass(FixedIntInsets, 'FixedIntInsets');
  initMetadataForClass(UnionInsets, 'UnionInsets');
  initMetadataForClass(InsetsConsumingModifierNode, 'InsetsConsumingModifierNode', VOID, Node, [TraversableNode]);
  initMetadataForClass(InsetsPaddingModifierNode, 'InsetsPaddingModifierNode', VOID, InsetsConsumingModifierNode, [LayoutModifierNode]);
  initMetadataForClass(toWindowInsets$1);
  initMetadataForClass(PlatformInsetsPaddingModifierElement, 'PlatformInsetsPaddingModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(PlatformWindowInsetsPaddingModifierElement, 'PlatformWindowInsetsPaddingModifierElement', VOID, ModifierNodeElement);
  initMetadataForClass(PlatformInsetsPaddingModifierNode, 'PlatformInsetsPaddingModifierNode', PlatformInsetsPaddingModifierNode, InsetsPaddingModifierNode);
  initMetadataForClass(PlatformWindowInsetsPaddingModifierNode, 'PlatformWindowInsetsPaddingModifierNode', VOID, PlatformWindowInsetsProviderNode, [DelegatableNode]);
  //endregion
  var androidx_compose_foundation_layout_Arrangement_Absolute$stable;
  var androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable;
  var androidx_compose_foundation_layout_Arrangement$stable;
  function Horizontal() {
  }
  function Vertical() {
  }
  function Arrangement$Start$1() {
  }
  protoOf(Arrangement$Start$1).aa4 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().la4(sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().ka4(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Start$1).toString = function () {
    return 'Arrangement#Start';
  };
  function Arrangement$End$1() {
  }
  protoOf(Arrangement$End$1).aa4 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().ka4(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().la4(sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$End$1).toString = function () {
    return 'Arrangement#End';
  };
  function Arrangement$Top$1() {
  }
  protoOf(Arrangement$Top$1).ba4 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().la4(sizes, outPositions, false);
  };
  protoOf(Arrangement$Top$1).toString = function () {
    return 'Arrangement#Top';
  };
  function Arrangement$Bottom$1() {
  }
  protoOf(Arrangement$Bottom$1).ba4 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().ka4(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Bottom$1).toString = function () {
    return 'Arrangement#Bottom';
  };
  function Arrangement$Center$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.ma4_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$Center$1).za3 = function () {
    return this.ma4_1;
  };
  protoOf(Arrangement$Center$1).aa4 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().na4(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().na4(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$Center$1).ba4 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().na4(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$Center$1).toString = function () {
    return 'Arrangement#Center';
  };
  function Arrangement$SpaceEvenly$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.oa4_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceEvenly$1).za3 = function () {
    return this.oa4_1;
  };
  protoOf(Arrangement$SpaceEvenly$1).aa4 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().pa4(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().pa4(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceEvenly$1).ba4 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().pa4(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceEvenly$1).toString = function () {
    return 'Arrangement#SpaceEvenly';
  };
  function Arrangement$SpaceBetween$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.qa4_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceBetween$1).za3 = function () {
    return this.qa4_1;
  };
  protoOf(Arrangement$SpaceBetween$1).aa4 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().ra4(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().ra4(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceBetween$1).ba4 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().ra4(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceBetween$1).toString = function () {
    return 'Arrangement#SpaceBetween';
  };
  function Arrangement$SpaceAround$1() {
    var tmp = this;
    // Inline function 'androidx.compose.ui.unit.dp' call
    tmp.sa4_1 = _Dp___init__impl__ms3zkb(0);
  }
  protoOf(Arrangement$SpaceAround$1).za3 = function () {
    return this.sa4_1;
  };
  protoOf(Arrangement$SpaceAround$1).aa4 = function (_this__u8e3s4, totalSize, sizes, layoutDirection, outPositions) {
    var tmp;
    if (layoutDirection.equals(LayoutDirection_Ltr_getInstance())) {
      Arrangement_getInstance().ta4(totalSize, sizes, outPositions, false);
      tmp = Unit_instance;
    } else {
      Arrangement_getInstance().ta4(totalSize, sizes, outPositions, true);
      tmp = Unit_instance;
    }
    return tmp;
  };
  protoOf(Arrangement$SpaceAround$1).ba4 = function (_this__u8e3s4, totalSize, sizes, outPositions) {
    return Arrangement_getInstance().ta4(totalSize, sizes, outPositions, false);
  };
  protoOf(Arrangement$SpaceAround$1).toString = function () {
    return 'Arrangement#SpaceAround';
  };
  function Arrangement() {
    Arrangement_instance = this;
    var tmp = this;
    tmp.ca4_1 = new Arrangement$Start$1();
    var tmp_0 = this;
    tmp_0.da4_1 = new Arrangement$End$1();
    var tmp_1 = this;
    tmp_1.ea4_1 = new Arrangement$Top$1();
    var tmp_2 = this;
    tmp_2.fa4_1 = new Arrangement$Bottom$1();
    var tmp_3 = this;
    tmp_3.ga4_1 = new Arrangement$Center$1();
    var tmp_4 = this;
    tmp_4.ha4_1 = new Arrangement$SpaceEvenly$1();
    var tmp_5 = this;
    tmp_5.ia4_1 = new Arrangement$SpaceBetween$1();
    var tmp_6 = this;
    tmp_6.ja4_1 = new Arrangement$SpaceAround$1();
  }
  protoOf(Arrangement).ka4 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = totalSize - consumedSize | 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).la4 = function (size, outPosition, reverseInput) {
    var current = 0;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable = 0;
      var last = size.length;
      while (inductionVariable < last) {
        var item = size[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        outPosition[_unary__edvuaz] = current;
        current = current + item | 0;
      }
    } else {
      var inductionVariable_0 = size.length - 1 | 0;
      if (0 <= inductionVariable_0)
        do {
          var i = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + -1 | 0;
          var it = size[i];
          outPosition[i] = current;
          current = current + it | 0;
        }
         while (0 <= inductionVariable_0);
    }
  };
  protoOf(Arrangement).na4 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var current = (totalSize - consumedSize | 0) / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + item;
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + it;
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).pa4 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var gapSize = (totalSize - consumedSize | 0) / (size.length + 1 | 0);
    var current = gapSize;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).ra4 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (size.length === 0)
      return Unit_instance;
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    // Inline function 'kotlin.comparisons.maxOf' call
    var a = get_lastIndex(size);
    var noOfGaps = Math.max(a, 1);
    var gapSize = (totalSize - consumedSize | 0) / noOfGaps;
    var current = 0.0;
    if (reverseInput && size.length === 1) {
      current = gapSize;
    }
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp;
        if (isNaN_0(this_0)) {
          tmp = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_0;
          if (isNaN_0(this_1)) {
            tmp_0 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_0 = roundToInt(this_1);
          }
          outPosition[i] = tmp_0;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  protoOf(Arrangement).ta4 = function (totalSize, size, outPosition, reverseInput) {
    // Inline function 'kotlin.collections.fold' call
    var accumulator = 0;
    var inductionVariable = 0;
    var last = size.length;
    while (inductionVariable < last) {
      var element = size[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      accumulator = accumulator + element | 0;
    }
    var consumedSize = accumulator;
    var tmp;
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(size.length === 0)) {
      tmp = (totalSize - consumedSize | 0) / size.length;
    } else {
      tmp = 0.0;
    }
    var gapSize = tmp;
    var current = gapSize / 2;
    // Inline function 'androidx.compose.foundation.layout.Arrangement.forEachIndexed' call
    if (!reverseInput) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var inductionVariable_0 = 0;
      var last_0 = size.length;
      while (inductionVariable_0 < last_0) {
        var item = size[inductionVariable_0];
        inductionVariable_0 = inductionVariable_0 + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
        var this_0 = current;
        var tmp_0;
        if (isNaN_0(this_0)) {
          tmp_0 = 0;
        } else {
          // Inline function 'kotlin.math.roundToInt' call
          tmp_0 = roundToInt(this_0);
        }
        outPosition[_unary__edvuaz] = tmp_0;
        current = current + (item + gapSize);
      }
    } else {
      var inductionVariable_1 = size.length - 1 | 0;
      if (0 <= inductionVariable_1)
        do {
          var i = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + -1 | 0;
          var it = size[i];
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var this_1 = current;
          var tmp_1;
          if (isNaN_0(this_1)) {
            tmp_1 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_1 = roundToInt(this_1);
          }
          outPosition[i] = tmp_1;
          current = current + (it + gapSize);
        }
         while (0 <= inductionVariable_1);
    }
  };
  var Arrangement_instance;
  function Arrangement_getInstance() {
    if (Arrangement_instance == null)
      new Arrangement();
    return Arrangement_instance;
  }
  function get_Cache1() {
    _init_properties_Box_kt__tvzvdl();
    return Cache1;
  }
  var Cache1;
  function get_Cache2() {
    _init_properties_Box_kt__tvzvdl();
    return Cache2;
  }
  var Cache2;
  var DefaultBoxMeasurePolicy;
  var EmptyBoxMeasurePolicy;
  var androidx_compose_foundation_layout_BoxScopeInstance$stable;
  function cacheFor(propagate) {
    _init_properties_Box_kt__tvzvdl();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterMap(9);
    this_0.wn(Companion_getInstance().w6h_1, new BoxMeasurePolicy(Companion_getInstance().w6h_1, propagate));
    this_0.wn(Companion_getInstance().x6h_1, new BoxMeasurePolicy(Companion_getInstance().x6h_1, propagate));
    this_0.wn(Companion_getInstance().y6h_1, new BoxMeasurePolicy(Companion_getInstance().y6h_1, propagate));
    this_0.wn(Companion_getInstance().z6h_1, new BoxMeasurePolicy(Companion_getInstance().z6h_1, propagate));
    this_0.wn(Companion_getInstance().a6i_1, new BoxMeasurePolicy(Companion_getInstance().a6i_1, propagate));
    this_0.wn(Companion_getInstance().b6i_1, new BoxMeasurePolicy(Companion_getInstance().b6i_1, propagate));
    this_0.wn(Companion_getInstance().c6i_1, new BoxMeasurePolicy(Companion_getInstance().c6i_1, propagate));
    this_0.wn(Companion_getInstance().d6i_1, new BoxMeasurePolicy(Companion_getInstance().d6i_1, propagate));
    this_0.wn(Companion_getInstance().e6i_1, new BoxMeasurePolicy(Companion_getInstance().e6i_1, propagate));
    return this_0;
  }
  function BoxMeasurePolicy$measure$lambda($this$layout) {
    return Unit_instance;
  }
  function BoxMeasurePolicy$measure$lambda_0($placeable, $measurable, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      placeInBox($this$layout, $placeable, $measurable, $this_measure.z5a(), $boxWidth, $boxHeight, this$0.ua4_1);
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy$measure$lambda_1($placeables, $measurables, $this_measure, $boxWidth, $boxHeight, this$0) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        if (!(item instanceof Placeable))
          THROW_CCE();
        var measurable = $measurables.m(_unary__edvuaz);
        placeInBox($this$layout, item, measurable, $this_measure.z5a(), $boxWidth._v, $boxHeight._v, this$0.ua4_1);
      }
      return Unit_instance;
    };
  }
  function BoxMeasurePolicy(alignment, propagateMinConstraints) {
    this.ua4_1 = alignment;
    this.va4_1 = propagateMinConstraints;
  }
  protoOf(BoxMeasurePolicy).y7s = function (_this__u8e3s4, measurables, constraints) {
    if (measurables.n()) {
      var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      return _this__u8e3s4.s6s(tmp, tmp_0, VOID, BoxMeasurePolicy$measure$lambda);
    }
    var tmp_1;
    if (this.va4_1) {
      tmp_1 = constraints;
    } else {
      // Inline function 'androidx.compose.ui.unit.Constraints.copyMaxDimensions' call
      tmp_1 = _Constraints___init__impl__v8ud31(bitwiseAnd(_Constraints___get_value__impl__3ah2ax(constraints), new Long(3, -2)));
    }
    var contentConstraints = tmp_1;
    if (measurables.l() === 1) {
      var measurable = measurables.m(0);
      var boxWidth;
      var boxHeight;
      var placeable;
      if (!get_matchesParentSize(measurable)) {
        placeable = measurable.m6s(contentConstraints);
        var tmp0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        // Inline function 'kotlin.math.max' call
        var b = placeable.n6s_1;
        boxWidth = Math.max(tmp0, b);
        var tmp0_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        // Inline function 'kotlin.math.max' call
        var b_0 = placeable.o6s_1;
        boxHeight = Math.max(tmp0_0, b_0);
      } else {
        boxWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
        boxHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
        placeable = measurable.m6s(Companion_instance.j47(_Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_minHeight__impl__ev4bgx(constraints)));
      }
      return _this__u8e3s4.s6s(boxWidth, boxHeight, VOID, BoxMeasurePolicy$measure$lambda_0(placeable, measurable, _this__u8e3s4, boxWidth, boxHeight, this));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var placeables = Array(size);
    var hasMatchParentSizeChildren = false;
    var boxWidth_0 = {_v: _Constraints___get_minWidth__impl__hi9lfi(constraints)};
    var boxHeight_0 = {_v: _Constraints___get_minHeight__impl__ev4bgx(constraints)};
    // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
    var inductionVariable = 0;
    var last = measurables.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = measurables.m(index);
        if (!get_matchesParentSize(item)) {
          var placeable_0 = item.m6s(contentConstraints);
          placeables[index] = placeable_0;
          var tmp0_1 = boxWidth_0._v;
          // Inline function 'kotlin.math.max' call
          var b_1 = placeable_0.n6s_1;
          boxWidth_0._v = Math.max(tmp0_1, b_1);
          var tmp0_2 = boxHeight_0._v;
          // Inline function 'kotlin.math.max' call
          var b_2 = placeable_0.o6s_1;
          boxHeight_0._v = Math.max(tmp0_2, b_2);
        } else {
          hasMatchParentSizeChildren = true;
        }
      }
       while (inductionVariable <= last);
    if (hasMatchParentSizeChildren) {
      var tmp0_minWidth = !(boxWidth_0._v === 2147483647) ? boxWidth_0._v : 0;
      var tmp1_minHeight = !(boxHeight_0._v === 2147483647) ? boxHeight_0._v : 0;
      var tmp2_maxWidth = boxWidth_0._v;
      var tmp3_maxHeight = boxHeight_0._v;
      var matchParentSizeConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
      // Inline function 'androidx.compose.ui.util.fastForEachIndexed' call
      var inductionVariable_0 = 0;
      var last_0 = measurables.l() - 1 | 0;
      if (inductionVariable_0 <= last_0)
        do {
          var index_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item_0 = measurables.m(index_0);
          if (get_matchesParentSize(item_0)) {
            placeables[index_0] = item_0.m6s(matchParentSizeConstraints);
          }
        }
         while (inductionVariable_0 <= last_0);
    }
    var tmp_2 = boxWidth_0._v;
    var tmp_3 = boxHeight_0._v;
    return _this__u8e3s4.s6s(tmp_2, tmp_3, VOID, BoxMeasurePolicy$measure$lambda_1(placeables, measurables, _this__u8e3s4, boxWidth_0, boxHeight_0, this));
  };
  protoOf(BoxMeasurePolicy).toString = function () {
    return 'BoxMeasurePolicy(alignment=' + toString(this.ua4_1) + ', propagateMinConstraints=' + this.va4_1 + ')';
  };
  protoOf(BoxMeasurePolicy).hashCode = function () {
    var result = hashCode(this.ua4_1);
    result = imul(result, 31) + getBooleanHashCode(this.va4_1) | 0;
    return result;
  };
  protoOf(BoxMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof BoxMeasurePolicy))
      return false;
    if (!equals(this.ua4_1, other.ua4_1))
      return false;
    if (!(this.va4_1 === other.va4_1))
      return false;
    return true;
  };
  function maybeCachedBoxMeasurePolicy(alignment, propagateMinConstraints) {
    _init_properties_Box_kt__tvzvdl();
    var cache = propagateMinConstraints ? get_Cache1() : get_Cache2();
    var tmp0_elvis_lhs = cache.u1(alignment);
    return tmp0_elvis_lhs == null ? new BoxMeasurePolicy(alignment, propagateMinConstraints) : tmp0_elvis_lhs;
  }
  function BoxScopeInstance() {
  }
  var BoxScopeInstance_instance;
  function BoxScopeInstance_getInstance() {
    return BoxScopeInstance_instance;
  }
  function get_matchesParentSize(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.la5_1;
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function placeInBox(_this__u8e3s4, placeable, measurable, layoutDirection, boxWidth, boxHeight, alignment) {
    _init_properties_Box_kt__tvzvdl();
    var tmp0_safe_receiver = get_boxChildDataNode(measurable);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ka5_1;
    var childAlignment = tmp1_elvis_lhs == null ? alignment : tmp1_elvis_lhs;
    var tmp0 = placeable.n6s_1;
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var val2 = placeable.o6s_1;
    var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
    var tmp = _IntSize___init__impl__emcjft(tmp$ret$1);
    // Inline function 'androidx.compose.ui.unit.IntSize' call
    // Inline function 'androidx.compose.ui.util.packInts' call
    var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(boxWidth), 32), bitwiseAnd(fromInt(boxHeight), new Long(-1, 0)));
    var tmp$ret$2 = _IntSize___init__impl__emcjft(tmp$ret$3);
    var position = childAlignment.r6i(tmp, tmp$ret$2, layoutDirection);
    _this__u8e3s4.s7t(placeable, position);
  }
  function BoxChildDataNode() {
  }
  function get_boxChildDataNode(_this__u8e3s4) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _this__u8e3s4.y7t();
    return tmp instanceof BoxChildDataNode ? tmp : null;
  }
  function sam$androidx_compose_ui_layout_MeasurePolicy$0(function_0) {
    this.ma5_1 = function_0;
  }
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).y7s = function (_this__u8e3s4, measurables, constraints) {
    return this.ma5_1(_this__u8e3s4, measurables, new Constraints_0(constraints));
  };
  protoOf(sam$androidx_compose_ui_layout_MeasurePolicy$0).r2 = function () {
    return this.ma5_1;
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
  function EmptyBoxMeasurePolicy$lambda($this$MeasurePolicy, _unused_var__etf5q3, constraints) {
    _init_properties_Box_kt__tvzvdl();
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints.g47_1);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints.g47_1);
    return $this$MeasurePolicy.s6s(tmp, tmp_0, VOID, EmptyBoxMeasurePolicy$lambda$lambda);
  }
  function EmptyBoxMeasurePolicy$lambda$lambda($this$layout) {
    _init_properties_Box_kt__tvzvdl();
    return Unit_instance;
  }
  var properties_initialized_Box_kt_kr8cbp;
  function _init_properties_Box_kt__tvzvdl() {
    if (!properties_initialized_Box_kt_kr8cbp) {
      properties_initialized_Box_kt_kr8cbp = true;
      Cache1 = cacheFor(true);
      Cache2 = cacheFor(false);
      DefaultBoxMeasurePolicy = new BoxMeasurePolicy(Companion_getInstance().w6h_1, false);
      var tmp = EmptyBoxMeasurePolicy$lambda;
      EmptyBoxMeasurePolicy = new sam$androidx_compose_ui_layout_MeasurePolicy$0(tmp);
      androidx_compose_foundation_layout_BoxScopeInstance$stable = 0;
    }
  }
  function get_DefaultColumnMeasurePolicy() {
    _init_properties_Column_kt__s1zb92();
    return DefaultColumnMeasurePolicy;
  }
  var DefaultColumnMeasurePolicy;
  var androidx_compose_foundation_layout_ColumnMeasurePolicy$stable;
  var androidx_compose_foundation_layout_ColumnScopeInstance$stable;
  function getCrossAxisPosition($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, layoutDirection) {
    var childCrossAlignment = parentData == null ? null : parentData.pa5_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.ua5(crossAxisLayoutSize, $this.ta5(placeable), layoutDirection, placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.sa5_1.m6i($this.ta5(placeable), crossAxisLayoutSize, layoutDirection) : tmp2_elvis_lhs;
  }
  function ColumnMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $measureScope.z5a());
        $this$layout.q7t(item, crossAxisPosition, $mainAxisPositions[_unary__edvuaz]);
      }
      return Unit_instance;
    };
  }
  function ColumnMeasurePolicy(verticalArrangement, horizontalAlignment) {
    this.ra5_1 = verticalArrangement;
    this.sa5_1 = horizontalAlignment;
  }
  protoOf(ColumnMeasurePolicy).va5 = function (_this__u8e3s4) {
    return _this__u8e3s4.o6s_1;
  };
  protoOf(ColumnMeasurePolicy).ta5 = function (_this__u8e3s4) {
    return _this__u8e3s4.n6s_1;
  };
  protoOf(ColumnMeasurePolicy).wa5 = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.ra5_1.ba4(measureScope, mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions);
  };
  protoOf(ColumnMeasurePolicy).xa5 = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.s6s(crossAxisLayoutSize, mainAxisLayoutSize, VOID, ColumnMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, measureScope, mainAxisPositions));
  };
  protoOf(ColumnMeasurePolicy).ya5 = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(ColumnMeasurePolicy).y7s = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_1 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3 = _this__u8e3s4.o47(this.ra5_1.za3());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.l());
  };
  protoOf(ColumnMeasurePolicy).toString = function () {
    return 'ColumnMeasurePolicy(verticalArrangement=' + toString(this.ra5_1) + ', horizontalAlignment=' + toString(this.sa5_1) + ')';
  };
  protoOf(ColumnMeasurePolicy).hashCode = function () {
    var result = hashCode(this.ra5_1);
    result = imul(result, 31) + hashCode(this.sa5_1) | 0;
    return result;
  };
  protoOf(ColumnMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof ColumnMeasurePolicy))
      return false;
    if (!equals(this.ra5_1, other.ra5_1))
      return false;
    if (!equals(this.sa5_1, other.sa5_1))
      return false;
    return true;
  };
  function columnMeasurePolicy(verticalArrangement, horizontalAlignment, $composer, $changed) {
    _init_properties_Column_kt__s1zb92();
    var $composer_0 = $composer;
    var tmp;
    if (equals(verticalArrangement, Arrangement_getInstance().ea4_1) && equals(horizontalAlignment, Companion_getInstance().i6i_1)) {
      $composer_0.m1y(-1446604504);
      $composer_0.n1y();
      tmp = get_DefaultColumnMeasurePolicy();
    } else {
      $composer_0.m1y(-1446550657);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.g1z(verticalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.g1z(horizontalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().f1y_1) {
        var value = new ColumnMeasurePolicy(verticalArrangement, horizontalAlignment);
        $composer_0.f1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_0.n1y();
      tmp = tmp1_group;
    }
    return tmp;
  }
  function ColumnScopeInstance() {
  }
  var ColumnScopeInstance_instance;
  function ColumnScopeInstance_getInstance() {
    return ColumnScopeInstance_instance;
  }
  function createColumnConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Column_kt__s1zb92();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    } else {
      tmp = Companion_instance.l47(crossAxisMin, crossAxisMax, mainAxisMin, mainAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Column_kt_nm4x4;
  function _init_properties_Column_kt__s1zb92() {
    if (!properties_initialized_Column_kt_nm4x4) {
      properties_initialized_Column_kt_nm4x4 = true;
      DefaultColumnMeasurePolicy = new ColumnMeasurePolicy(Arrangement_getInstance().ea4_1, Companion_getInstance().i6i_1);
      androidx_compose_foundation_layout_ColumnMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_ColumnScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable;
  var androidx_compose_foundation_layout_ContextualFlowItemIterator$stable;
  var androidx_compose_foundation_layout_FlowLineInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable;
  var androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable;
  var androidx_compose_foundation_layout_FlowRowOverflow$stable;
  var androidx_compose_foundation_layout_FlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable;
  var androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflow$stable;
  var androidx_compose_foundation_layout_FlowLayoutOverflowState$stable;
  var androidx_compose_foundation_layout_GridScopeInstance$stable;
  var androidx_compose_foundation_layout_GridMeasurePolicy$stable;
  var androidx_compose_foundation_layout_PaddingValues_Absolute$stable;
  var androidx_compose_foundation_layout_PaddingValuesImpl$stable;
  function PaddingValues(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    return new PaddingValuesImpl(start, top, end, bottom);
  }
  function padding(_this__u8e3s4, paddingValues) {
    return _this__u8e3s4.e6j(new PaddingValuesElement(paddingValues, padding$lambda(paddingValues)));
  }
  function PaddingValuesImpl(start, top, end, bottom) {
    var tmp;
    if (start === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp = start;
    }
    start = tmp;
    var tmp_0;
    if (top === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_0 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_0 = top;
    }
    top = tmp_0;
    var tmp_1;
    if (end === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_1 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_1 = end;
    }
    end = tmp_1;
    var tmp_2;
    if (bottom === VOID) {
      // Inline function 'androidx.compose.ui.unit.dp' call
      tmp_2 = _Dp___init__impl__ms3zkb(0);
    } else {
      tmp_2 = bottom;
    }
    bottom = tmp_2;
    this.aa6_1 = start;
    this.ba6_1 = top;
    this.ca6_1 = end;
    this.da6_1 = bottom;
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(!!(!!(_Dp___get_value__impl__geb1vb(this.aa6_1) >= 0.0 & _Dp___get_value__impl__geb1vb(this.ba6_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.ca6_1) >= 0.0) & _Dp___get_value__impl__geb1vb(this.da6_1) >= 0.0)) {
      var tmp$ret$5 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$5);
    }
  }
  protoOf(PaddingValuesImpl).ea6 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.aa6_1 : this.ca6_1;
  };
  protoOf(PaddingValuesImpl).fa6 = function () {
    return this.ba6_1;
  };
  protoOf(PaddingValuesImpl).ga6 = function (layoutDirection) {
    return layoutDirection.equals(LayoutDirection_Ltr_getInstance()) ? this.ca6_1 : this.aa6_1;
  };
  protoOf(PaddingValuesImpl).ha6 = function () {
    return this.da6_1;
  };
  protoOf(PaddingValuesImpl).equals = function (other) {
    if (!(other instanceof PaddingValuesImpl))
      return false;
    return equals(this.aa6_1, other.aa6_1) && equals(this.ba6_1, other.ba6_1) && equals(this.ca6_1, other.ca6_1) && equals(this.da6_1, other.da6_1);
  };
  protoOf(PaddingValuesImpl).hashCode = function () {
    return imul(imul(imul(Dp__hashCode_impl_sxkrra(this.aa6_1), 31) + Dp__hashCode_impl_sxkrra(this.ba6_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.ca6_1) | 0, 31) + Dp__hashCode_impl_sxkrra(this.da6_1) | 0;
  };
  protoOf(PaddingValuesImpl).toString = function () {
    return 'PaddingValues(start=' + Dp__toString_impl_kcddez(this.aa6_1) + ', top=' + Dp__toString_impl_kcddez(this.ba6_1) + ', end=' + Dp__toString_impl_kcddez(this.ca6_1) + ', bottom=' + Dp__toString_impl_kcddez(this.da6_1) + ')';
  };
  function PaddingValuesElement(paddingValues, inspectorInfo) {
    ModifierNodeElement.call(this);
    this.ja6_1 = paddingValues;
    this.ka6_1 = inspectorInfo;
  }
  protoOf(PaddingValuesElement).f2b = function () {
    return new PaddingValuesModifier(this.ja6_1);
  };
  protoOf(PaddingValuesElement).la6 = function (node) {
    node.aa7_1 = this.ja6_1;
  };
  protoOf(PaddingValuesElement).h6s = function (node) {
    return this.la6(node instanceof PaddingValuesModifier ? node : THROW_CCE());
  };
  protoOf(PaddingValuesElement).hashCode = function () {
    return hashCode(this.ja6_1);
  };
  protoOf(PaddingValuesElement).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof PaddingValuesElement ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherElement = tmp;
    return equals(this.ja6_1, otherElement.ja6_1);
  };
  function PaddingValuesModifier$measure$lambda($placeable, $roundedLeftPadding, $roundedTopPadding) {
    return function ($this$layout) {
      $this$layout.q7t($placeable, $roundedLeftPadding, $roundedTopPadding);
      return Unit_instance;
    };
  }
  function PaddingValuesModifier(paddingValues) {
    Node.call(this);
    this.aa7_1 = paddingValues;
  }
  protoOf(PaddingValuesModifier).l6s = function (_this__u8e3s4, measurable, constraints) {
    var leftPadding = this.aa7_1.ea6(_this__u8e3s4.z5a());
    var topPadding = this.aa7_1.fa6();
    var rightPadding = this.aa7_1.ga6(_this__u8e3s4.z5a());
    var bottomPadding = this.aa7_1.ha6();
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$0 = _Dp___init__impl__ms3zkb(0);
    var tmp = Dp__compareTo_impl_tlg3dl(leftPadding, tmp$ret$0) >= 0;
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$1 = _Dp___init__impl__ms3zkb(0);
    var tmp_0 = !!(tmp & Dp__compareTo_impl_tlg3dl(topPadding, tmp$ret$1) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$2 = _Dp___init__impl__ms3zkb(0);
    var tmp_1 = !!(tmp_0 & Dp__compareTo_impl_tlg3dl(rightPadding, tmp$ret$2) >= 0);
    // Inline function 'androidx.compose.ui.unit.dp' call
    var tmp$ret$3 = _Dp___init__impl__ms3zkb(0);
    // Inline function 'androidx.compose.foundation.layout.internal.requirePrecondition' call
    if (!!!(tmp_1 & Dp__compareTo_impl_tlg3dl(bottomPadding, tmp$ret$3) >= 0)) {
      var tmp$ret$5 = 'Padding must be non-negative';
      throwIllegalArgumentException(tmp$ret$5);
    }
    var roundedLeftPadding = _this__u8e3s4.o47(leftPadding);
    var horizontal = roundedLeftPadding + _this__u8e3s4.o47(rightPadding) | 0;
    var roundedTopPadding = _this__u8e3s4.o47(topPadding);
    var vertical = roundedTopPadding + _this__u8e3s4.o47(bottomPadding) | 0;
    var placeable = measurable.m6s(offset(constraints, -horizontal | 0, -vertical | 0));
    var width = constrainWidth(constraints, placeable.n6s_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.o6s_1 + vertical | 0);
    return _this__u8e3s4.s6s(width, height, VOID, PaddingValuesModifier$measure$lambda(placeable, roundedLeftPadding, roundedTopPadding));
  };
  function padding$lambda($paddingValues) {
    return function ($this$PaddingValuesElement) {
      $this$PaddingValuesElement.ba7_1 = 'padding';
      $this$PaddingValuesElement.da7_1.fa7('paddingValues', $paddingValues);
      return Unit_instance;
    };
  }
  function get_DefaultRowMeasurePolicy() {
    _init_properties_Row_kt__jenljs();
    return DefaultRowMeasurePolicy;
  }
  var DefaultRowMeasurePolicy;
  var androidx_compose_foundation_layout_RowMeasurePolicy$stable;
  var androidx_compose_foundation_layout_RowScopeInstance$stable;
  function getCrossAxisPosition_0($this, placeable, parentData, crossAxisLayoutSize, beforeCrossAxisAlignmentLine) {
    var childCrossAlignment = parentData == null ? null : parentData.pa5_1;
    var tmp2_elvis_lhs = childCrossAlignment == null ? null : childCrossAlignment.ua5(crossAxisLayoutSize, $this.ta5(placeable), LayoutDirection_Ltr_getInstance(), placeable, beforeCrossAxisAlignmentLine);
    return tmp2_elvis_lhs == null ? $this.ha7_1.o6i($this.ta5(placeable), crossAxisLayoutSize) : tmp2_elvis_lhs;
  }
  function RowMeasurePolicy$placeHelper$lambda($placeables, this$0, $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine, $mainAxisPositions) {
    return function ($this$layout) {
      // Inline function 'kotlin.collections.forEachIndexed' call
      var index = 0;
      var indexedObject = $placeables;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var item = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        var _unary__edvuaz = index;
        index = _unary__edvuaz + 1 | 0;
        var crossAxisPosition = getCrossAxisPosition_0(this$0, ensureNotNull(item), get_rowColumnParentData(item), $crossAxisLayoutSize, $beforeCrossAxisAlignmentLine);
        $this$layout.q7t(item, $mainAxisPositions[_unary__edvuaz], crossAxisPosition);
      }
      return Unit_instance;
    };
  }
  function RowMeasurePolicy(horizontalArrangement, verticalAlignment) {
    this.ga7_1 = horizontalArrangement;
    this.ha7_1 = verticalAlignment;
  }
  protoOf(RowMeasurePolicy).va5 = function (_this__u8e3s4) {
    return _this__u8e3s4.n6s_1;
  };
  protoOf(RowMeasurePolicy).ta5 = function (_this__u8e3s4) {
    return _this__u8e3s4.o6s_1;
  };
  protoOf(RowMeasurePolicy).y7s = function (_this__u8e3s4, measurables, constraints) {
    var tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp_1 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    var tmp_3 = _this__u8e3s4.o47(this.ga7_1.za3());
    // Inline function 'kotlin.arrayOfNulls' call
    var size = measurables.l();
    var tmp$ret$0 = Array(size);
    return measure(this, tmp, tmp_0, tmp_1, tmp_2, tmp_3, _this__u8e3s4, measurables, tmp$ret$0, 0, measurables.l());
  };
  protoOf(RowMeasurePolicy).wa5 = function (mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope) {
    // Inline function 'kotlin.with' call
    this.ga7_1.aa4(measureScope, mainAxisLayoutSize, childrenMainAxisSize, measureScope.z5a(), mainAxisPositions);
  };
  protoOf(RowMeasurePolicy).xa5 = function (placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex) {
    // Inline function 'kotlin.with' call
    return measureScope.s6s(mainAxisLayoutSize, crossAxisLayoutSize, VOID, RowMeasurePolicy$placeHelper$lambda(placeables, this, crossAxisLayoutSize, beforeCrossAxisAlignmentLine, mainAxisPositions));
  };
  protoOf(RowMeasurePolicy).ya5 = function (mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, isPrioritizing) {
    return createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax);
  };
  protoOf(RowMeasurePolicy).toString = function () {
    return 'RowMeasurePolicy(horizontalArrangement=' + toString(this.ga7_1) + ', verticalAlignment=' + toString(this.ha7_1) + ')';
  };
  protoOf(RowMeasurePolicy).hashCode = function () {
    var result = hashCode(this.ga7_1);
    result = imul(result, 31) + hashCode(this.ha7_1) | 0;
    return result;
  };
  protoOf(RowMeasurePolicy).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RowMeasurePolicy))
      return false;
    if (!equals(this.ga7_1, other.ga7_1))
      return false;
    if (!equals(this.ha7_1, other.ha7_1))
      return false;
    return true;
  };
  function rowMeasurePolicy(horizontalArrangement, verticalAlignment, $composer, $changed) {
    _init_properties_Row_kt__jenljs();
    var $composer_0 = $composer;
    var tmp;
    if (equals(horizontalArrangement, Arrangement_getInstance().ca4_1) && equals(verticalAlignment, Companion_getInstance().f6i_1)) {
      $composer_0.m1y(-1073830487);
      $composer_0.n1y();
      tmp = get_DefaultRowMeasurePolicy();
    } else {
      $composer_0.m1y(-1073779616);
      // Inline function 'androidx.compose.runtime.cache' call
      var invalid = !!((($changed & 14 ^ 6) > 4 && $composer_0.g1z(horizontalArrangement) || ($changed & 6) === 4) | (($changed & 112 ^ 48) > 32 && $composer_0.g1z(verticalAlignment) || ($changed & 48) === 32));
      // Inline function 'kotlin.let' call
      var it = $composer_0.e1z();
      var tmp_0;
      if (invalid || it === Companion_getInstance_0().f1y_1) {
        var value = new RowMeasurePolicy(horizontalArrangement, verticalAlignment);
        $composer_0.f1z(value);
        tmp_0 = value;
      } else {
        tmp_0 = it;
      }
      var tmp1_group = tmp_0;
      $composer_0.n1y();
      tmp = tmp1_group;
    }
    return tmp;
  }
  function RowScopeInstance() {
  }
  var RowScopeInstance_instance;
  function RowScopeInstance_getInstance() {
    return RowScopeInstance_instance;
  }
  function createRowConstraints(isPrioritizing, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax) {
    _init_properties_Row_kt__jenljs();
    var tmp;
    if (!isPrioritizing) {
      tmp = Constraints(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    } else {
      tmp = Companion_instance.k47(mainAxisMin, mainAxisMax, crossAxisMin, crossAxisMax);
    }
    return tmp;
  }
  var properties_initialized_Row_kt_sbxnna;
  function _init_properties_Row_kt__jenljs() {
    if (!properties_initialized_Row_kt_sbxnna) {
      properties_initialized_Row_kt_sbxnna = true;
      DefaultRowMeasurePolicy = new RowMeasurePolicy(Arrangement_getInstance().ca4_1, Companion_getInstance().f6i_1);
      androidx_compose_foundation_layout_RowMeasurePolicy$stable = 0;
      androidx_compose_foundation_layout_RowScopeInstance$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_CrossAxisAlignment$stable;
  var androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable;
  var androidx_compose_foundation_layout_LayoutWeightElement$stable;
  var androidx_compose_foundation_layout_LayoutWeightNode$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable;
  var androidx_compose_foundation_layout_WithAlignmentLineElement$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable;
  var androidx_compose_foundation_layout_SiblingsAlignedNode$stable;
  var androidx_compose_foundation_layout_HorizontalAlignElement$stable;
  var androidx_compose_foundation_layout_HorizontalAlignNode$stable;
  var androidx_compose_foundation_layout_VerticalAlignElement$stable;
  var androidx_compose_foundation_layout_VerticalAlignNode$stable;
  var androidx_compose_foundation_layout_RowColumnParentData$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable;
  var androidx_compose_foundation_layout_AlignmentLineProvider$stable;
  function RowColumnParentData() {
  }
  function get_rowColumnParentData(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.y7t();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_weight(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.na5_1;
    return tmp1_elvis_lhs == null ? 0.0 : tmp1_elvis_lhs;
  }
  function get_rowColumnParentData_0(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp = _this__u8e3s4.y7t();
    return tmp instanceof RowColumnParentData ? tmp : null;
  }
  function get_isRelative(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp0_safe_receiver = get_crossAxisAlignment(_this__u8e3s4);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ia7();
    return tmp1_elvis_lhs == null ? false : tmp1_elvis_lhs;
  }
  function get_fill(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    var tmp1_elvis_lhs = _this__u8e3s4 == null ? null : _this__u8e3s4.oa5_1;
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_crossAxisAlignment(_this__u8e3s4) {
    _init_properties_RowColumnImpl_kt__c7pbaa();
    return _this__u8e3s4 == null ? null : _this__u8e3s4.pa5_1;
  }
  var properties_initialized_RowColumnImpl_kt_57qerk;
  function _init_properties_RowColumnImpl_kt__c7pbaa() {
    if (!properties_initialized_RowColumnImpl_kt_57qerk) {
      properties_initialized_RowColumnImpl_kt_57qerk = true;
      androidx_compose_foundation_layout_CrossAxisAlignment$stable = 0;
      androidx_compose_foundation_layout_IntrinsicMeasureBlocks$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightElement$stable = 0;
      androidx_compose_foundation_layout_LayoutWeightNode$stable = 8;
      androidx_compose_foundation_layout_WithAlignmentLineBlockElement$stable = 0;
      androidx_compose_foundation_layout_WithAlignmentLineElement$stable = 0;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineBlockNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode_WithAlignmentLineNode$stable = 8;
      androidx_compose_foundation_layout_SiblingsAlignedNode$stable = androidx_compose_ui_Modifier_Node$stableprop_getter();
      androidx_compose_foundation_layout_HorizontalAlignElement$stable = 0;
      androidx_compose_foundation_layout_HorizontalAlignNode$stable = 8;
      androidx_compose_foundation_layout_VerticalAlignElement$stable = 0;
      androidx_compose_foundation_layout_VerticalAlignNode$stable = 8;
      androidx_compose_foundation_layout_RowColumnParentData$stable = 8;
      androidx_compose_foundation_layout_AlignmentLineProvider_Block$stable = 8;
      androidx_compose_foundation_layout_AlignmentLineProvider_Value$stable = 0;
      androidx_compose_foundation_layout_AlignmentLineProvider$stable = 0;
    }
  }
  function RowColumnMeasurePolicy() {
  }
  function measure(_this__u8e3s4, mainAxisMin, crossAxisMin, mainAxisMax, crossAxisMax, arrangementSpacingInt, measureScope, measurables, placeables, startIndex, endIndex, crossAxisOffset, currentLineIndex) {
    crossAxisOffset = crossAxisOffset === VOID ? null : crossAxisOffset;
    currentLineIndex = currentLineIndex === VOID ? 0 : currentLineIndex;
    var arrangementSpacingPx = fromInt(arrangementSpacingInt);
    var totalWeight = 0.0;
    var fixedSpace = 0;
    var crossAxisSpace = 0;
    var weightChildrenCount = 0;
    var anyAlignBy = false;
    var subSize = endIndex - startIndex | 0;
    var childrenMainAxisSize = new Int32Array(subSize);
    var beforeCrossAxisAlignmentLine = 0;
    var afterCrossAxisAlignmentLine = 0;
    var spaceAfterLastNoWeight = 0;
    var inductionVariable = startIndex;
    if (inductionVariable < endIndex)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var child = measurables.m(i);
        var parentData = get_rowColumnParentData_0(child);
        var weight = get_weight(parentData);
        anyAlignBy = anyAlignBy || get_isRelative(parentData);
        if (weight > 0.0) {
          totalWeight = totalWeight + weight;
          weightChildrenCount = weightChildrenCount + 1 | 0;
        } else {
          var tmp;
          if (crossAxisMax === 2147483647) {
            tmp = null;
          } else {
            var tmp1_safe_receiver = parentData == null ? null : parentData.qa5_1;
            var tmp_0;
            if (tmp1_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.let' call
              // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
              var this_0 = tmp1_safe_receiver.ja7_1 * crossAxisMax;
              var tmp_1;
              if (isNaN_0(this_0)) {
                tmp_1 = 0;
              } else {
                // Inline function 'kotlin.math.roundToInt' call
                tmp_1 = roundToInt(this_0);
              }
              tmp_0 = tmp_1;
            }
            tmp = tmp_0;
          }
          var crossAxisDesiredSize = tmp;
          var remaining = mainAxisMax - fixedSpace | 0;
          var tmp2_elvis_lhs = placeables[i];
          var tmp_2;
          if (tmp2_elvis_lhs == null) {
            var tmp_3 = crossAxisDesiredSize == null ? 0 : crossAxisDesiredSize;
            var tmp_4;
            if (mainAxisMax === 2147483647) {
              tmp_4 = 2147483647;
            } else {
              // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
              tmp_4 = remaining < 0 ? 0 : remaining;
            }
            var tmp_5 = tmp_4;
            tmp_2 = child.m6s(_this__u8e3s4.za5(0, tmp_3, tmp_5, crossAxisDesiredSize == null ? crossAxisMax : crossAxisDesiredSize));
          } else {
            tmp_2 = tmp2_elvis_lhs;
          }
          var placeable = tmp_2;
          var placeableMainAxisSize = _this__u8e3s4.va5(placeable);
          var placeableCrossAxisSize = _this__u8e3s4.ta5(placeable);
          childrenMainAxisSize[i - startIndex | 0] = placeableMainAxisSize;
          // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
          var this_1 = remaining - placeableMainAxisSize | 0;
          // Inline function 'kotlin.math.min' call
          var b = this_1 < 0 ? 0 : this_1;
          spaceAfterLastNoWeight = Math.min(arrangementSpacingInt, b);
          fixedSpace = fixedSpace + (placeableMainAxisSize + spaceAfterLastNoWeight | 0) | 0;
          // Inline function 'kotlin.math.max' call
          var a = crossAxisSpace;
          crossAxisSpace = Math.max(a, placeableCrossAxisSize);
          placeables[i] = placeable;
        }
      }
       while (inductionVariable < endIndex);
    var weightedSpace = 0;
    if (weightChildrenCount === 0) {
      fixedSpace = fixedSpace - spaceAfterLastNoWeight | 0;
    } else {
      var tmp_6;
      if (!(mainAxisMax === 2147483647)) {
        tmp_6 = mainAxisMax;
      } else {
        tmp_6 = mainAxisMin;
      }
      var targetSpace = tmp_6;
      // Inline function 'kotlin.Long.times' call
      var other = weightChildrenCount - 1 | 0;
      var arrangementSpacingTotal = multiply(arrangementSpacingPx, fromInt(other));
      var tmp0 = subtract(numberToLong(targetSpace - fixedSpace | 0), arrangementSpacingTotal);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      var minimumValue = new Long(0, 0);
      var remainingToTarget = compare(tmp0, minimumValue) < 0 ? minimumValue : tmp0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = totalWeight;
      var weightUnitSpace = toNumber(remainingToTarget) / other_0;
      var remainder = remainingToTarget;
      var inductionVariable_0 = startIndex;
      if (inductionVariable_0 < endIndex)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var measurable = measurables.m(i_0);
          var itemWeight = get_weight(get_rowColumnParentData_0(measurable));
          var weightedSize = weightUnitSpace * itemWeight;
          var tmp0_0 = remainder;
          // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
          var tmp_7;
          if (isNaN_0(weightedSize)) {
            tmp_7 = 0;
          } else {
            // Inline function 'kotlin.math.roundToInt' call
            tmp_7 = roundToInt(weightedSize);
          }
          // Inline function 'kotlin.Long.minus' call
          var other_1 = tmp_7;
          remainder = subtract(tmp0_0, fromInt(other_1));
        }
         while (inductionVariable_0 < endIndex);
      var inductionVariable_1 = startIndex;
      if (inductionVariable_1 < endIndex)
        do {
          var i_1 = inductionVariable_1;
          inductionVariable_1 = inductionVariable_1 + 1 | 0;
          if (placeables[i_1] == null) {
            var child_0 = measurables.m(i_1);
            var parentData_0 = get_rowColumnParentData_0(child_0);
            var weight_0 = get_weight(parentData_0);
            var tmp_8;
            if (crossAxisMax === 2147483647) {
              tmp_8 = null;
            } else {
              var tmp6_safe_receiver = parentData_0 == null ? null : parentData_0.qa5_1;
              var tmp_9;
              if (tmp6_safe_receiver == null) {
                tmp_9 = null;
              } else {
                // Inline function 'kotlin.let' call
                // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
                var this_2 = tmp6_safe_receiver.ja7_1 * crossAxisMax;
                var tmp_10;
                if (isNaN_0(this_2)) {
                  tmp_10 = 0;
                } else {
                  // Inline function 'kotlin.math.roundToInt' call
                  tmp_10 = roundToInt(this_2);
                }
                tmp_9 = tmp_10;
              }
              tmp_8 = tmp_9;
            }
            var crossAxisDesiredSize_0 = tmp_8;
            // Inline function 'androidx.compose.foundation.layout.internal.checkPrecondition' call
            if (!(weight_0 > 0)) {
              var tmp$ret$19 = 'All weights <= 0 should have placeables';
              throwIllegalStateException(tmp$ret$19);
            }
            var remainderUnit = get_sign(remainder);
            // Inline function 'kotlin.Long.minus' call
            var this_3 = remainder;
            remainder = subtract(this_3, fromInt(remainderUnit));
            var weightedSize_0 = weightUnitSpace * weight_0;
            // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
            var tmp_11;
            if (isNaN_0(weightedSize_0)) {
              tmp_11 = 0;
            } else {
              // Inline function 'kotlin.math.roundToInt' call
              tmp_11 = roundToInt(weightedSize_0);
            }
            // Inline function 'kotlin.math.max' call
            var b_0 = tmp_11 + remainderUnit | 0;
            var childMainAxisSize = Math.max(0, b_0);
            var tmp_12;
            if (get_fill(parentData_0) && !(childMainAxisSize === 2147483647)) {
              tmp_12 = childMainAxisSize;
            } else {
              tmp_12 = 0;
            }
            var tmp_13 = tmp_12;
            var tmp_14 = crossAxisDesiredSize_0 == null ? 0 : crossAxisDesiredSize_0;
            var childConstraints = _this__u8e3s4.ya5(tmp_13, tmp_14, childMainAxisSize, crossAxisDesiredSize_0 == null ? crossAxisMax : crossAxisDesiredSize_0, true);
            var placeable_0 = child_0.m6s(childConstraints);
            var placeableMainAxisSize_0 = _this__u8e3s4.va5(placeable_0);
            var placeableCrossAxisSize_0 = _this__u8e3s4.ta5(placeable_0);
            childrenMainAxisSize[i_1 - startIndex | 0] = placeableMainAxisSize_0;
            weightedSpace = weightedSpace + placeableMainAxisSize_0 | 0;
            // Inline function 'kotlin.math.max' call
            var a_0 = crossAxisSpace;
            crossAxisSpace = Math.max(a_0, placeableCrossAxisSize_0);
            placeables[i_1] = placeable_0;
          }
        }
         while (inductionVariable_1 < endIndex);
      var tmp0_1 = convertToInt(add(numberToLong(weightedSpace), arrangementSpacingTotal));
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = mainAxisMax - fixedSpace | 0;
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_4 = tmp0_1 < 0 ? 0 : tmp0_1;
      weightedSpace = this_4 > maximumValue ? maximumValue : this_4;
    }
    if (anyAlignBy) {
      var inductionVariable_2 = startIndex;
      if (inductionVariable_2 < endIndex)
        do {
          var i_2 = inductionVariable_2;
          inductionVariable_2 = inductionVariable_2 + 1 | 0;
          var placeable_1 = placeables[i_2];
          var parentData_1 = get_rowColumnParentData(ensureNotNull(placeable_1));
          var tmp9_safe_receiver = get_crossAxisAlignment(parentData_1);
          var alignmentLinePosition = tmp9_safe_receiver == null ? null : tmp9_safe_receiver.ka7(placeable_1);
          if (alignmentLinePosition == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            var placeableCrossAxisSize_1 = _this__u8e3s4.ta5(placeable_1);
            var tmp0_2 = beforeCrossAxisAlignmentLine;
            // Inline function 'kotlin.math.max' call
            var b_1 = !(alignmentLinePosition === -2147483648) ? alignmentLinePosition : 0;
            beforeCrossAxisAlignmentLine = Math.max(tmp0_2, b_1);
            var tmp0_3 = afterCrossAxisAlignmentLine;
            var tmp_15;
            if (!(alignmentLinePosition === -2147483648)) {
              tmp_15 = alignmentLinePosition;
            } else {
              tmp_15 = placeableCrossAxisSize_1;
            }
            // Inline function 'kotlin.math.max' call
            var b_2 = placeableCrossAxisSize_1 - tmp_15 | 0;
            afterCrossAxisAlignmentLine = Math.max(tmp0_3, b_2);
          }
        }
         while (inductionVariable_2 < endIndex);
    }
    // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
    var this_5 = fixedSpace + weightedSpace | 0;
    // Inline function 'kotlin.math.max' call
    var a_1 = this_5 < 0 ? 0 : this_5;
    var mainAxisLayoutSize = Math.max(a_1, mainAxisMin);
    var tmp0_4 = crossAxisSpace;
    // Inline function 'kotlin.comparisons.maxOf' call
    var c = beforeCrossAxisAlignmentLine + afterCrossAxisAlignmentLine | 0;
    var crossAxisLayoutSize = Math.max(tmp0_4, crossAxisMin, c);
    var mainAxisPositions = new Int32Array(subSize);
    _this__u8e3s4.wa5(mainAxisLayoutSize, childrenMainAxisSize, mainAxisPositions, measureScope);
    return _this__u8e3s4.xa5(placeables, measureScope, beforeCrossAxisAlignmentLine, mainAxisPositions, mainAxisLayoutSize, crossAxisLayoutSize, crossAxisOffset, currentLineIndex, startIndex, endIndex);
  }
  function get_FillWholeMaxWidth() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxWidth;
  }
  var FillWholeMaxWidth;
  var FillWholeMaxHeight;
  function get_FillWholeMaxSize() {
    _init_properties_Size_kt__jcru8v();
    return FillWholeMaxSize;
  }
  var FillWholeMaxSize;
  var WrapContentWidthCenter;
  var WrapContentWidthStart;
  var WrapContentHeightCenter;
  var WrapContentHeightTop;
  var WrapContentSizeCenter;
  var WrapContentSizeTopStart;
  function defaultMinSize(_this__u8e3s4, minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_1().c48_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_1().c48_1 : minHeight;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.e6j(new UnspecifiedConstraintsElement(minWidth, minHeight));
  }
  function fillMaxSize(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.e6j(fraction === 1.0 ? get_FillWholeMaxSize() : Companion_instance_0.la7(fraction));
  }
  function fillMaxWidth(_this__u8e3s4, fraction) {
    fraction = fraction === VOID ? 1.0 : fraction;
    _init_properties_Size_kt__jcru8v();
    return _this__u8e3s4.e6j(fraction === 1.0 ? get_FillWholeMaxWidth() : Companion_instance_0.ma7(fraction));
  }
  function Companion() {
  }
  protoOf(Companion).ma7 = function (fraction) {
    return new FillElement(Direction_Horizontal_getInstance(), fraction, 'fillMaxWidth');
  };
  protoOf(Companion).na7 = function (fraction) {
    return new FillElement(Direction_Vertical_getInstance(), fraction, 'fillMaxHeight');
  };
  protoOf(Companion).la7 = function (fraction) {
    return new FillElement(Direction_Both_getInstance(), fraction, 'fillMaxSize');
  };
  var Companion_instance_0;
  function Companion_getInstance_3() {
    return Companion_instance_0;
  }
  function FillElement(direction, fraction, inspectorName) {
    ModifierNodeElement.call(this);
    this.pa7_1 = direction;
    this.qa7_1 = fraction;
    this.ra7_1 = inspectorName;
  }
  protoOf(FillElement).f2b = function () {
    return new FillNode(this.pa7_1, this.qa7_1);
  };
  protoOf(FillElement).sa7 = function (node) {
    node.ha8_1 = this.pa7_1;
    node.ia8_1 = this.qa7_1;
  };
  protoOf(FillElement).h6s = function (node) {
    return this.sa7(node instanceof FillNode ? node : THROW_CCE());
  };
  protoOf(FillElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof FillElement))
      return false;
    if (!this.pa7_1.equals(other.pa7_1))
      return false;
    if (!(this.qa7_1 === other.qa7_1))
      return false;
    return true;
  };
  protoOf(FillElement).hashCode = function () {
    var result = this.pa7_1.hashCode();
    result = imul(31, result) + getNumberHashCode(this.qa7_1) | 0;
    return result;
  };
  function WrapContentElement$Companion$width$lambda($align) {
    return function (size, layoutDirection) {
      // Inline function 'androidx.compose.ui.unit.IntSize.width' call
      var this_0 = size.o48_1;
      // Inline function 'androidx.compose.ui.util.unpackInt1' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(shiftRight(value, 32));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val1 = $align.m6i(0, tmp$ret$0, layoutDirection);
      var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(val1), 32), bitwiseAnd(fromInt(0), new Long(-1, 0)));
      var tmp$ret$2 = _IntOffset___init__impl__rq8h7b(tmp$ret$3);
      return new IntOffset(tmp$ret$2);
    };
  }
  function WrapContentElement$Companion$height$lambda($align) {
    return function (size, _unused_var__etf5q3) {
      // Inline function 'androidx.compose.ui.unit.IntSize.height' call
      var this_0 = size.o48_1;
      // Inline function 'androidx.compose.ui.util.unpackInt2' call
      var value = _IntSize___get_packedValue__impl__uho7jf(this_0);
      var tmp$ret$0 = convertToInt(bitwiseAnd(value, new Long(-1, 0)));
      // Inline function 'androidx.compose.ui.unit.IntOffset' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $align.o6i(0, tmp$ret$0);
      var tmp$ret$3 = bitwiseOr(shiftLeft(fromInt(0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$2 = _IntOffset___init__impl__rq8h7b(tmp$ret$3);
      return new IntOffset(tmp$ret$2);
    };
  }
  function WrapContentElement$Companion$size$lambda($align) {
    return function (size, layoutDirection) {
      return new IntOffset($align.r6i(Companion_getInstance_2().n48_1, size.o48_1, layoutDirection));
    };
  }
  function Companion_0() {
  }
  protoOf(Companion_0).ja8 = function (align, unbounded) {
    var tmp = Direction_Horizontal_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$width$lambda(align), align, 'wrapContentWidth');
  };
  protoOf(Companion_0).ka8 = function (align, unbounded) {
    var tmp = Direction_Vertical_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$height$lambda(align), align, 'wrapContentHeight');
  };
  protoOf(Companion_0).la8 = function (align, unbounded) {
    var tmp = Direction_Both_getInstance();
    return new WrapContentElement(tmp, unbounded, WrapContentElement$Companion$size$lambda(align), align, 'wrapContentSize');
  };
  var Companion_instance_1;
  function Companion_getInstance_4() {
    return Companion_instance_1;
  }
  function WrapContentElement(direction, unbounded, alignmentCallback, align, inspectorName) {
    ModifierNodeElement.call(this);
    this.na8_1 = direction;
    this.oa8_1 = unbounded;
    this.pa8_1 = alignmentCallback;
    this.qa8_1 = align;
    this.ra8_1 = inspectorName;
  }
  protoOf(WrapContentElement).f2b = function () {
    return new WrapContentNode(this.na8_1, this.oa8_1, this.pa8_1);
  };
  protoOf(WrapContentElement).sa8 = function (node) {
    node.ha9_1 = this.na8_1;
    node.ia9_1 = this.oa8_1;
    node.ja9_1 = this.pa8_1;
  };
  protoOf(WrapContentElement).h6s = function (node) {
    return this.sa8(node instanceof WrapContentNode ? node : THROW_CCE());
  };
  protoOf(WrapContentElement).equals = function (other) {
    if (this === other)
      return true;
    if (other === null)
      return false;
    if (!getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof WrapContentElement))
      THROW_CCE();
    if (!this.na8_1.equals(other.na8_1))
      return false;
    if (!(this.oa8_1 === other.oa8_1))
      return false;
    if (!equals(this.qa8_1, other.qa8_1))
      return false;
    return true;
  };
  protoOf(WrapContentElement).hashCode = function () {
    var result = this.na8_1.hashCode();
    result = imul(31, result) + getBooleanHashCode(this.oa8_1) | 0;
    result = imul(31, result) + hashCode(this.qa8_1) | 0;
    return result;
  };
  function UnspecifiedConstraintsElement(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_1().c48_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_1().c48_1 : minHeight;
    ModifierNodeElement.call(this);
    this.la9_1 = minWidth;
    this.ma9_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsElement).f2b = function () {
    return new UnspecifiedConstraintsNode(this.la9_1, this.ma9_1);
  };
  protoOf(UnspecifiedConstraintsElement).na9 = function (node) {
    node.caa_1 = this.la9_1;
    node.daa_1 = this.ma9_1;
  };
  protoOf(UnspecifiedConstraintsElement).h6s = function (node) {
    return this.na9(node instanceof UnspecifiedConstraintsNode ? node : THROW_CCE());
  };
  protoOf(UnspecifiedConstraintsElement).equals = function (other) {
    if (!(other instanceof UnspecifiedConstraintsElement))
      return false;
    return equals(this.la9_1, other.la9_1) && equals(this.ma9_1, other.ma9_1);
  };
  protoOf(UnspecifiedConstraintsElement).hashCode = function () {
    return imul(Dp__hashCode_impl_sxkrra(this.la9_1), 31) + Dp__hashCode_impl_sxkrra(this.ma9_1) | 0;
  };
  function FillNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.k6s($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function FillNode(direction, fraction) {
    Node.call(this);
    this.ha8_1 = direction;
    this.ia8_1 = fraction;
  }
  protoOf(FillNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    var minWidth;
    var maxWidth;
    if (_Constraints___get_hasBoundedWidth__impl__7hd0wr(constraints) && !this.ha8_1.equals(Direction_Vertical_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_0 = _Constraints___get_maxWidth__impl__uuyqc(constraints) * this.ia8_1;
      var tmp;
      if (isNaN_0(this_0)) {
        tmp = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp = roundToInt(this_0);
      }
      var tmp0 = tmp;
      var tmp2 = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = tmp0 < tmp2 ? tmp2 : tmp0;
      var width = this_1 > maximumValue ? maximumValue : this_1;
      minWidth = width;
      maxWidth = width;
    } else {
      minWidth = _Constraints___get_minWidth__impl__hi9lfi(constraints);
      maxWidth = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var minHeight;
    var maxHeight;
    if (_Constraints___get_hasBoundedHeight__impl__bsh4rw(constraints) && !this.ha8_1.equals(Direction_Horizontal_getInstance())) {
      // Inline function 'androidx.compose.ui.util.fastRoundToInt' call
      var this_2 = _Constraints___get_maxHeight__impl__dt3e8z(constraints) * this.ia8_1;
      var tmp_0;
      if (isNaN_0(this_2)) {
        tmp_0 = 0;
      } else {
        // Inline function 'kotlin.math.roundToInt' call
        tmp_0 = roundToInt(this_2);
      }
      var tmp0_0 = tmp_0;
      var tmp2_0 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < tmp2_0 ? tmp2_0 : tmp0_0;
      var height = this_3 > maximumValue_0 ? maximumValue_0 : this_3;
      minHeight = height;
      maxHeight = height;
    } else {
      minHeight = _Constraints___get_minHeight__impl__ev4bgx(constraints);
      maxHeight = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var placeable = measurable.m6s(Constraints(minWidth, maxWidth, minHeight, maxHeight));
    var tmp_1 = placeable.n6s_1;
    var tmp_2 = placeable.o6s_1;
    return _this__u8e3s4.s6s(tmp_1, tmp_2, VOID, FillNode$measure$lambda(placeable));
  };
  var Direction_Vertical_instance;
  var Direction_Horizontal_instance;
  var Direction_Both_instance;
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_Vertical_instance = new Direction('Vertical', 0);
    Direction_Horizontal_instance = new Direction('Horizontal', 1);
    Direction_Both_instance = new Direction('Both', 2);
  }
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function WrapContentNode$measure$lambda(this$0, $wrapperWidth, $placeable, $wrapperHeight, $this_measure) {
    return function ($this$layout) {
      var tmp = this$0.ja9_1;
      var tmp0 = $wrapperWidth - $placeable.n6s_1 | 0;
      // Inline function 'androidx.compose.ui.unit.IntSize' call
      // Inline function 'androidx.compose.ui.util.packInts' call
      var val2 = $wrapperHeight - $placeable.o6s_1 | 0;
      var tmp$ret$1 = bitwiseOr(shiftLeft(fromInt(tmp0), 32), bitwiseAnd(fromInt(val2), new Long(-1, 0)));
      var tmp$ret$0 = _IntSize___init__impl__emcjft(tmp$ret$1);
      var position = tmp(new IntSize(tmp$ret$0), $this_measure.z5a()).m48_1;
      $this$layout.s7t($placeable, position);
      return Unit_instance;
    };
  }
  function WrapContentNode(direction, unbounded, alignmentCallback) {
    Node.call(this);
    this.ha9_1 = direction;
    this.ia9_1 = unbounded;
    this.ja9_1 = alignmentCallback;
  }
  protoOf(WrapContentNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    var tmp0_minWidth = !this.ha9_1.equals(Direction_Vertical_getInstance()) ? 0 : _Constraints___get_minWidth__impl__hi9lfi(constraints);
    var tmp1_minHeight = !this.ha9_1.equals(Direction_Horizontal_getInstance()) ? 0 : _Constraints___get_minHeight__impl__ev4bgx(constraints);
    var tmp;
    if (!this.ha9_1.equals(Direction_Vertical_getInstance()) && this.ia9_1) {
      tmp = 2147483647;
    } else {
      tmp = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    }
    var tmp2_maxWidth = tmp;
    var tmp_0;
    if (!this.ha9_1.equals(Direction_Horizontal_getInstance()) && this.ia9_1) {
      tmp_0 = 2147483647;
    } else {
      tmp_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
    }
    var tmp3_maxHeight = tmp_0;
    var wrappedConstraints = Constraints(tmp0_minWidth, tmp2_maxWidth, tmp1_minHeight, tmp3_maxHeight);
    var placeable = measurable.m6s(wrappedConstraints);
    var wrapperWidth = coerceIn(placeable.n6s_1, _Constraints___get_minWidth__impl__hi9lfi(constraints), _Constraints___get_maxWidth__impl__uuyqc(constraints));
    var wrapperHeight = coerceIn(placeable.o6s_1, _Constraints___get_minHeight__impl__ev4bgx(constraints), _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    return _this__u8e3s4.s6s(wrapperWidth, wrapperHeight, VOID, WrapContentNode$measure$lambda(this, wrapperWidth, placeable, wrapperHeight, _this__u8e3s4));
  };
  function UnspecifiedConstraintsNode$measure$lambda($placeable) {
    return function ($this$layout) {
      $this$layout.k6s($placeable, 0, 0);
      return Unit_instance;
    };
  }
  function UnspecifiedConstraintsNode(minWidth, minHeight) {
    minWidth = minWidth === VOID ? Companion_getInstance_1().c48_1 : minWidth;
    minHeight = minHeight === VOID ? Companion_getInstance_1().c48_1 : minHeight;
    Node.call(this);
    this.caa_1 = minWidth;
    this.daa_1 = minHeight;
  }
  protoOf(UnspecifiedConstraintsNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    var tmp;
    var tmp_0;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_0 = this.caa_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_0))) {
      tmp_0 = _Constraints___get_minWidth__impl__hi9lfi(constraints) === 0;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var tmp0 = _this__u8e3s4.o47(this.caa_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue = _Constraints___get_maxWidth__impl__uuyqc(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_1 = tmp0 < 0 ? 0 : tmp0;
      tmp = this_1 > maximumValue ? maximumValue : this_1;
    } else {
      tmp = _Constraints___get_minWidth__impl__hi9lfi(constraints);
    }
    var tmp_1 = tmp;
    var tmp_2 = _Constraints___get_maxWidth__impl__uuyqc(constraints);
    var tmp_3;
    var tmp_4;
    // Inline function 'androidx.compose.ui.unit.isSpecified' call
    var this_2 = this.daa_1;
    if (!isNaN_0(_Dp___get_value__impl__geb1vb(this_2))) {
      tmp_4 = _Constraints___get_minHeight__impl__ev4bgx(constraints) === 0;
    } else {
      tmp_4 = false;
    }
    if (tmp_4) {
      var tmp0_0 = _this__u8e3s4.o47(this.daa_1);
      // Inline function 'androidx.compose.ui.util.fastCoerceIn' call
      var maximumValue_0 = _Constraints___get_maxHeight__impl__dt3e8z(constraints);
      // Inline function 'androidx.compose.ui.util.fastCoerceAtLeast' call
      // Inline function 'androidx.compose.ui.util.fastCoerceAtMost' call
      var this_3 = tmp0_0 < 0 ? 0 : tmp0_0;
      tmp_3 = this_3 > maximumValue_0 ? maximumValue_0 : this_3;
    } else {
      tmp_3 = _Constraints___get_minHeight__impl__ev4bgx(constraints);
    }
    var wrappedConstraints = Constraints(tmp_1, tmp_2, tmp_3, _Constraints___get_maxHeight__impl__dt3e8z(constraints));
    var placeable = measurable.m6s(wrappedConstraints);
    var tmp_5 = placeable.n6s_1;
    var tmp_6 = placeable.o6s_1;
    return _this__u8e3s4.s6s(tmp_5, tmp_6, VOID, UnspecifiedConstraintsNode$measure$lambda(placeable));
  };
  function Direction_Vertical_getInstance() {
    Direction_initEntries();
    return Direction_Vertical_instance;
  }
  function Direction_Horizontal_getInstance() {
    Direction_initEntries();
    return Direction_Horizontal_instance;
  }
  function Direction_Both_getInstance() {
    Direction_initEntries();
    return Direction_Both_instance;
  }
  var properties_initialized_Size_kt_x7rk2r;
  function _init_properties_Size_kt__jcru8v() {
    if (!properties_initialized_Size_kt_x7rk2r) {
      properties_initialized_Size_kt_x7rk2r = true;
      FillWholeMaxWidth = Companion_instance_0.ma7(1.0);
      FillWholeMaxHeight = Companion_instance_0.na7(1.0);
      FillWholeMaxSize = Companion_instance_0.la7(1.0);
      WrapContentWidthCenter = Companion_instance_1.ja8(Companion_getInstance().j6i_1, false);
      WrapContentWidthStart = Companion_instance_1.ja8(Companion_getInstance().i6i_1, false);
      WrapContentHeightCenter = Companion_instance_1.ka8(Companion_getInstance().g6i_1, false);
      WrapContentHeightTop = Companion_instance_1.ka8(Companion_getInstance().f6i_1, false);
      WrapContentSizeCenter = Companion_instance_1.la8(Companion_getInstance().a6i_1, false);
      WrapContentSizeTopStart = Companion_instance_1.la8(Companion_getInstance().w6h_1, false);
    }
  }
  function get_EmptyWindowInsets() {
    _init_properties_WindowInsets_kt__lpu9pi();
    return EmptyWindowInsets;
  }
  var EmptyWindowInsets;
  var androidx_compose_foundation_layout_MutableWindowInsets$stable;
  var androidx_compose_foundation_layout_ValueInsets$stable;
  var androidx_compose_foundation_layout_InsetsValues$stable;
  function FixedIntInsets(leftVal, topVal, rightVal, bottomVal) {
    this.eaa_1 = leftVal;
    this.faa_1 = topVal;
    this.gaa_1 = rightVal;
    this.haa_1 = bottomVal;
  }
  protoOf(FixedIntInsets).iaa = function (density, layoutDirection) {
    return this.eaa_1;
  };
  protoOf(FixedIntInsets).jaa = function (density) {
    return this.faa_1;
  };
  protoOf(FixedIntInsets).kaa = function (density, layoutDirection) {
    return this.gaa_1;
  };
  protoOf(FixedIntInsets).laa = function (density) {
    return this.haa_1;
  };
  protoOf(FixedIntInsets).toString = function () {
    return 'Insets(left=' + this.eaa_1 + ', top=' + this.faa_1 + ', right=' + this.gaa_1 + ', bottom=' + this.haa_1 + ')';
  };
  protoOf(FixedIntInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof FixedIntInsets)) {
      return false;
    }
    return this.eaa_1 === other.eaa_1 && this.faa_1 === other.faa_1 && this.gaa_1 === other.gaa_1 && this.haa_1 === other.haa_1;
  };
  protoOf(FixedIntInsets).hashCode = function () {
    var result = this.eaa_1;
    result = imul(31, result) + this.faa_1 | 0;
    result = imul(31, result) + this.gaa_1 | 0;
    result = imul(31, result) + this.haa_1 | 0;
    return result;
  };
  function union(_this__u8e3s4, insets) {
    _init_properties_WindowInsets_kt__lpu9pi();
    return new UnionInsets(_this__u8e3s4, insets);
  }
  function makeEmptyWindowInsets() {
    _init_properties_WindowInsets_kt__lpu9pi();
    return get_EmptyWindowInsets();
  }
  function UnionInsets(first, second) {
    this.maa_1 = first;
    this.naa_1 = second;
  }
  protoOf(UnionInsets).iaa = function (density, layoutDirection) {
    var tmp0 = this.maa_1.iaa(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.naa_1.iaa(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).jaa = function (density) {
    var tmp0 = this.maa_1.jaa(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.naa_1.jaa(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).kaa = function (density, layoutDirection) {
    var tmp0 = this.maa_1.kaa(density, layoutDirection);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.naa_1.kaa(density, layoutDirection);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).laa = function (density) {
    var tmp0 = this.maa_1.laa(density);
    // Inline function 'kotlin.comparisons.maxOf' call
    var b = this.naa_1.laa(density);
    return Math.max(tmp0, b);
  };
  protoOf(UnionInsets).hashCode = function () {
    return hashCode(this.maa_1) + imul(hashCode(this.naa_1), 31) | 0;
  };
  protoOf(UnionInsets).equals = function (other) {
    if (this === other) {
      return true;
    }
    if (!(other instanceof UnionInsets)) {
      return false;
    }
    return equals(other.maa_1, this.maa_1) && equals(other.naa_1, this.naa_1);
  };
  protoOf(UnionInsets).toString = function () {
    return '(' + toString(this.maa_1) + ' \u222A ' + toString(this.naa_1) + ')';
  };
  var properties_initialized_WindowInsets_kt_2k4ux4;
  function _init_properties_WindowInsets_kt__lpu9pi() {
    if (!properties_initialized_WindowInsets_kt_2k4ux4) {
      properties_initialized_WindowInsets_kt_2k4ux4 = true;
      EmptyWindowInsets = new FixedIntInsets(0, 0, 0, 0);
      androidx_compose_foundation_layout_MutableWindowInsets$stable = 0;
      androidx_compose_foundation_layout_ValueInsets$stable = 0;
      androidx_compose_foundation_layout_InsetsValues$stable = 0;
    }
  }
  var androidx_compose_foundation_layout_InsetsPaddingModifier$stable;
  var androidx_compose_foundation_layout_InsetsConsumingModifierNode$stable;
  var androidx_compose_foundation_layout_InsetsPaddingModifierNode$stable;
  function InsetsPaddingModifierNode$measure$lambda($placeable, $left, $top) {
    return function ($this$layout) {
      $this$layout.q7t($placeable, $left, $top);
      return Unit_instance;
    };
  }
  function InsetsPaddingModifierNode(insets) {
    InsetsConsumingModifierNode.call(this);
    this.eab_1 = insets;
  }
  protoOf(InsetsPaddingModifierNode).fab = function (ancestorConsumedInsets) {
    return union(ancestorConsumedInsets, this.eab_1);
  };
  protoOf(InsetsPaddingModifierNode).gab = function () {
    protoOf(InsetsConsumingModifierNode).gab.call(this);
    invalidateMeasurement(this);
  };
  protoOf(InsetsPaddingModifierNode).xab = function (insets) {
    if (!equals(insets, this.eab_1)) {
      this.eab_1 = insets;
      this.gab();
    }
  };
  protoOf(InsetsPaddingModifierNode).l6s = function (_this__u8e3s4, measurable, constraints) {
    var left = this.wab_1.iaa(_this__u8e3s4, _this__u8e3s4.z5a()) - this.vab_1.iaa(_this__u8e3s4, _this__u8e3s4.z5a()) | 0;
    var top = this.wab_1.jaa(_this__u8e3s4) - this.vab_1.jaa(_this__u8e3s4) | 0;
    var right = this.wab_1.kaa(_this__u8e3s4, _this__u8e3s4.z5a()) - this.vab_1.kaa(_this__u8e3s4, _this__u8e3s4.z5a()) | 0;
    var bottom = this.wab_1.laa(_this__u8e3s4) - this.vab_1.laa(_this__u8e3s4) | 0;
    var horizontal = left + right | 0;
    var vertical = top + bottom | 0;
    var childConstraints = offset(constraints, -horizontal | 0, -vertical | 0);
    var placeable = measurable.m6s(childConstraints);
    var width = constrainWidth(constraints, placeable.n6s_1 + horizontal | 0);
    var height = constrainHeight(constraints, placeable.o6s_1 + vertical | 0);
    return _this__u8e3s4.s6s(width, height, VOID, InsetsPaddingModifierNode$measure$lambda(placeable, left, top));
  };
  function setAncestorConsumedInsets($this, ancestorConsumedInsets) {
    if (!equals($this.vab_1, ancestorConsumedInsets)) {
      $this.vab_1 = ancestorConsumedInsets;
      $this.gab();
    }
  }
  function invalidateChildConsumedInsets($this) {
    var tmp = $this.r6n();
    traverseDescendants($this, tmp, InsetsConsumingModifierNode$invalidateChildConsumedInsets$lambda($this));
  }
  function InsetsConsumingModifierNode$onAttach$lambda(this$0) {
    return function (parent) {
      var tmp = this$0;
      tmp.vab_1 = (parent instanceof InsetsConsumingModifierNode ? parent : THROW_CCE()).wab_1;
      return false;
    };
  }
  function InsetsConsumingModifierNode$invalidateChildConsumedInsets$lambda(this$0) {
    return function (child) {
      setAncestorConsumedInsets(child instanceof InsetsConsumingModifierNode ? child : THROW_CCE(), this$0.wab_1);
      return TraverseDescendantsAction_SkipSubtreeAndContinueTraversal_getInstance();
    };
  }
  function InsetsConsumingModifierNode() {
    Node.call(this);
    this.vab_1 = makeEmptyWindowInsets();
    this.wab_1 = makeEmptyWindowInsets();
  }
  protoOf(InsetsConsumingModifierNode).r6n = function () {
    return 'androidx.compose.foundation.layout.ConsumedInsetsProvider';
  };
  protoOf(InsetsConsumingModifierNode).g6k = function () {
    var tmp = this.r6n();
    traverseAncestors(this, tmp, InsetsConsumingModifierNode$onAttach$lambda(this));
    this.gab();
    protoOf(Node).g6k.call(this);
  };
  protoOf(InsetsConsumingModifierNode).i6k = function () {
    this.wab_1 = this.vab_1;
    invalidateChildConsumedInsets(this);
    protoOf(Node).i6k.call(this);
  };
  protoOf(InsetsConsumingModifierNode).l6k = function () {
    protoOf(Node).l6k.call(this);
    this.vab_1 = makeEmptyWindowInsets();
  };
  protoOf(InsetsConsumingModifierNode).gab = function () {
    this.wab_1 = this.fab(this.vab_1);
    invalidateChildConsumedInsets(this);
  };
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function toWindowInsets(_this__u8e3s4) {
    return new toWindowInsets$1(_this__u8e3s4);
  }
  function toWindowInsets$1($this_toWindowInsets) {
    this.yab_1 = $this_toWindowInsets;
  }
  protoOf(toWindowInsets$1).iaa = function (density, layoutDirection) {
    return this.yab_1.b6y();
  };
  protoOf(toWindowInsets$1).jaa = function (density) {
    return this.yab_1.t7u();
  };
  protoOf(toWindowInsets$1).kaa = function (density, layoutDirection) {
    return this.yab_1.c6y();
  };
  protoOf(toWindowInsets$1).laa = function (density) {
    return this.yab_1.u7u();
  };
  protoOf(toWindowInsets$1).toString = function () {
    return 'PlatformInsets.toWindowInsets(getLeft=' + this.yab_1.b6y() + ', getTop=' + this.yab_1.t7u() + ', getRight=' + this.yab_1.c6y() + ', getBottom=' + this.yab_1.u7u() + ')';
  };
  var safeDrawingPaddingLambda;
  var safeGesturesPaddingLambda;
  function get_safeContentPaddingLambda() {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return safeContentPaddingLambda;
  }
  var safeContentPaddingLambda;
  var systemBarsPaddingLambda;
  var displayCutoutPaddingLambda;
  var statusBarsPaddingLambda;
  var imePaddingLambda;
  var navigationBarsPaddingLambda;
  var captionBarPaddingLambda;
  var waterfallPaddingLambda;
  var systemGesturesPaddingLambda;
  var mandatorySystemGesturesPaddingLambda;
  function windowInsetsPadding(_this__u8e3s4, inspectorInfo, insetsCalculation) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return _this__u8e3s4.e6j(new PlatformInsetsPaddingModifierElement(inspectorInfo)).e6j(new PlatformWindowInsetsPaddingModifierElement(inspectorInfo, insetsCalculation));
  }
  function PlatformInsetsPaddingModifierElement(inspectorInfo) {
    ModifierNodeElement.call(this);
    this.aac_1 = inspectorInfo;
  }
  protoOf(PlatformInsetsPaddingModifierElement).f2b = function () {
    return new PlatformInsetsPaddingModifierNode();
  };
  protoOf(PlatformInsetsPaddingModifierElement).bac = function (node) {
  };
  protoOf(PlatformInsetsPaddingModifierElement).h6s = function (node) {
    return this.bac(node instanceof PlatformInsetsPaddingModifierNode ? node : THROW_CCE());
  };
  protoOf(PlatformInsetsPaddingModifierElement).hashCode = function () {
    return 0;
  };
  protoOf(PlatformInsetsPaddingModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformInsetsPaddingModifierElement))
      return false;
    return this.aac_1 === other.aac_1;
  };
  function PlatformWindowInsetsPaddingModifierElement(inspectorInfo, insetsGetter) {
    ModifierNodeElement.call(this);
    this.dac_1 = inspectorInfo;
    this.eac_1 = insetsGetter;
  }
  protoOf(PlatformWindowInsetsPaddingModifierElement).f2b = function () {
    return new PlatformWindowInsetsPaddingModifierNode(this.eac_1);
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).fac = function (node) {
    return node.aad(this.eac_1);
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).h6s = function (node) {
    return this.fac(node instanceof PlatformWindowInsetsPaddingModifierNode ? node : THROW_CCE());
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).hashCode = function () {
    return hashCode(this.eac_1);
  };
  protoOf(PlatformWindowInsetsPaddingModifierElement).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PlatformWindowInsetsPaddingModifierElement))
      return false;
    return this.eac_1 === other.eac_1;
  };
  function PlatformInsetsPaddingModifierNode() {
    InsetsPaddingModifierNode.call(this, makeEmptyWindowInsets());
  }
  function PlatformWindowInsetsPaddingModifierNode$onAttach$lambda(this$0) {
    return function (node) {
      var tmp;
      if (node instanceof PlatformInsetsPaddingModifierNode) {
        this$0.zac_1 = node;
        tmp = false;
      } else {
        tmp = true;
      }
      return tmp;
    };
  }
  function PlatformWindowInsetsPaddingModifierNode$onObservedReadsChanged$lambda(this$0) {
    return function () {
      var tmp0_safe_receiver = this$0.zac_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.xab(this$0.yac_1(this$0.s9j_1));
      }
      return Unit_instance;
    };
  }
  function PlatformWindowInsetsPaddingModifierNode(insetsGetter) {
    PlatformWindowInsetsProviderNode.call(this);
    this.yac_1 = insetsGetter;
    this.zac_1 = null;
  }
  protoOf(PlatformWindowInsetsPaddingModifierNode).aad = function (insetsGetter) {
    if (!(this.yac_1 === insetsGetter)) {
      this.yac_1 = insetsGetter;
      this.u9j();
    }
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).b9j = function (ancestorWindowInsets) {
    return ancestorWindowInsets;
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).g6k = function () {
    protoOf(PlatformWindowInsetsProviderNode).g6k.call(this);
    traverseAncestors(this, 'androidx.compose.foundation.layout.ConsumedInsetsProvider', PlatformWindowInsetsPaddingModifierNode$onAttach$lambda(this));
    this.w6q();
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).l6k = function () {
    this.zac_1 = null;
    protoOf(PlatformWindowInsetsProviderNode).l6k.call(this);
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).i6k = function () {
    this.zac_1 = null;
    protoOf(PlatformWindowInsetsProviderNode).i6k.call(this);
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).u9j = function () {
    protoOf(PlatformWindowInsetsProviderNode).u9j.call(this);
    this.w6q();
  };
  protoOf(PlatformWindowInsetsPaddingModifierNode).w6q = function () {
    observeReads(this, PlatformWindowInsetsPaddingModifierNode$onObservedReadsChanged$lambda(this));
  };
  function safeContentPadding(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    // Inline function 'androidx.compose.ui.platform.debugInspectorInfo' call
    var tmp;
    if (get_isDebugInspectorInfoEnabled()) {
      tmp = safeContentPadding$lambda;
    } else {
      tmp = get_NoInspectorInfo();
    }
    var tmp$ret$0 = tmp;
    return windowInsetsPadding(_this__u8e3s4, tmp$ret$0, get_safeContentPaddingLambda());
  }
  function safeDrawingPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(get_safeDrawing(_this__u8e3s4));
  }
  function safeGesturesPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(get_safeGestures(_this__u8e3s4));
  }
  function safeContentPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(get_safeContent(_this__u8e3s4));
  }
  function systemBarsPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.v9p());
  }
  function displayCutoutPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.l91());
  }
  function statusBarsPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.p91());
  }
  function imePaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.m91());
  }
  function navigationBarsPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.o91());
  }
  function captionBarPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.k91());
  }
  function waterfallPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.s91());
  }
  function systemGesturesPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.q91());
  }
  function mandatorySystemGesturesPaddingLambda$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    return toWindowInsets(_this__u8e3s4.n91());
  }
  function safeContentPadding$lambda(_this__u8e3s4) {
    _init_properties_WindowInsetsPadding_skiko_kt__j76ce8();
    _this__u8e3s4.ba7_1 = 'safeContentPadding';
    return Unit_instance;
  }
  var properties_initialized_WindowInsetsPadding_skiko_kt_tc289q;
  function _init_properties_WindowInsetsPadding_skiko_kt__j76ce8() {
    if (!properties_initialized_WindowInsetsPadding_skiko_kt_tc289q) {
      properties_initialized_WindowInsetsPadding_skiko_kt_tc289q = true;
      safeDrawingPaddingLambda = safeDrawingPaddingLambda$lambda;
      safeGesturesPaddingLambda = safeGesturesPaddingLambda$lambda;
      safeContentPaddingLambda = safeContentPaddingLambda$lambda;
      systemBarsPaddingLambda = systemBarsPaddingLambda$lambda;
      displayCutoutPaddingLambda = displayCutoutPaddingLambda$lambda;
      statusBarsPaddingLambda = statusBarsPaddingLambda$lambda;
      imePaddingLambda = imePaddingLambda$lambda;
      navigationBarsPaddingLambda = navigationBarsPaddingLambda$lambda;
      captionBarPaddingLambda = captionBarPaddingLambda$lambda;
      waterfallPaddingLambda = waterfallPaddingLambda$lambda;
      systemGesturesPaddingLambda = systemGesturesPaddingLambda$lambda;
      mandatorySystemGesturesPaddingLambda = mandatorySystemGesturesPaddingLambda$lambda;
    }
  }
  //region block: post-declaration
  protoOf(Arrangement$Start$1).za3 = get_spacing;
  protoOf(Arrangement$End$1).za3 = get_spacing;
  protoOf(Arrangement$Top$1).za3 = get_spacing_0;
  protoOf(Arrangement$Bottom$1).za3 = get_spacing_0;
  protoOf(ColumnMeasurePolicy).za5 = createConstraints$default;
  protoOf(RowMeasurePolicy).za5 = createConstraints$default;
  //endregion
  //region block: init
  androidx_compose_foundation_layout_Arrangement_Absolute$stable = 0;
  androidx_compose_foundation_layout_Arrangement_SpacedAligned$stable = 0;
  androidx_compose_foundation_layout_Arrangement$stable = 0;
  BoxScopeInstance_instance = new BoxScopeInstance();
  ColumnScopeInstance_instance = new ColumnScopeInstance();
  androidx_compose_foundation_layout_ComposeFoundationLayoutFlags$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflowScopeImpl$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowItemIterator$stable = 8;
  androidx_compose_foundation_layout_FlowLineInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapInfo$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks_WrapEllipsisInfo$stable = 8;
  androidx_compose_foundation_layout_FlowLayoutBuildingBlocks$stable = 8;
  androidx_compose_foundation_layout_FlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowRowOverflow$stable = 0;
  androidx_compose_foundation_layout_ContextualFlowColumnOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflow$stable = 0;
  androidx_compose_foundation_layout_FlowLayoutOverflowState$stable = 8;
  androidx_compose_foundation_layout_GridScopeInstance$stable = 0;
  androidx_compose_foundation_layout_GridMeasurePolicy$stable = 0;
  androidx_compose_foundation_layout_PaddingValues_Absolute$stable = 0;
  androidx_compose_foundation_layout_PaddingValuesImpl$stable = 0;
  RowScopeInstance_instance = new RowScopeInstance();
  Companion_instance_0 = new Companion();
  Companion_instance_1 = new Companion_0();
  androidx_compose_foundation_layout_InsetsPaddingModifier$stable = 0;
  androidx_compose_foundation_layout_InsetsConsumingModifierNode$stable = 8;
  androidx_compose_foundation_layout_InsetsPaddingModifierNode$stable = 8;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = PaddingValues;
  _.$_$.b = columnMeasurePolicy;
  _.$_$.c = defaultMinSize;
  _.$_$.d = fillMaxSize;
  _.$_$.e = fillMaxWidth;
  _.$_$.f = maybeCachedBoxMeasurePolicy;
  _.$_$.g = padding;
  _.$_$.h = rowMeasurePolicy;
  _.$_$.i = safeContentPadding;
  _.$_$.j = Arrangement_getInstance;
  _.$_$.k = BoxScopeInstance_instance;
  _.$_$.l = ColumnScopeInstance_instance;
  _.$_$.m = RowScopeInstance_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=compose-multiplatform-core-compose-foundation-foundation-layout.js.map
