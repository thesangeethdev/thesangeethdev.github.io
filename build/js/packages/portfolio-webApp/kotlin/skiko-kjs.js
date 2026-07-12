(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './skiko.mjs', './js-reexport-symbols.mjs', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./skiko.mjs'), require('./js-reexport-symbols.mjs'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['./skiko.mjs'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency './skiko.mjs' was not found. Please, check whether './skiko.mjs' is loaded prior to 'skiko-kjs'.");
    }
    if (typeof globalThis['./js-reexport-symbols.mjs'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency './js-reexport-symbols.mjs' was not found. Please, check whether './js-reexport-symbols.mjs' is loaded prior to 'skiko-kjs'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'skiko-kjs'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'skiko-kjs'.");
    }
    globalThis['skiko-kjs'] = factory(typeof globalThis['skiko-kjs'] === 'undefined' ? {} : globalThis['skiko-kjs'], globalThis['./skiko.mjs'], globalThis['./js-reexport-symbols.mjs'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$__skiko_mjs_llxhfs, $module$__js_reexport_symbols_mjs_135kj8, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var _releaseLocalCallbackScope = $module$__skiko_mjs_llxhfs.skikoApi._releaseLocalCallbackScope;
  var awaitSkiko = $module$__js_reexport_symbols_mjs_135kj8.api.awaitSkiko;
  var protoOf = kotlin_kotlin.$_$.aa;
  var objectCreate = kotlin_kotlin.$_$.z9;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var VOID = kotlin_kotlin.$_$.c;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.x2;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var enumEntries = kotlin_kotlin.$_$.p7;
  var Enum = kotlin_kotlin.$_$.sc;
  var charCodeAt = kotlin_kotlin.$_$.t8;
  var Char__toInt_impl_vasixd = kotlin_kotlin.$_$.j;
  var toShort = kotlin_kotlin.$_$.ba;
  var toString = kotlin_kotlin.$_$.ca;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var compareTo = kotlin_kotlin.$_$.w8;
  var toBits = kotlin_kotlin.$_$.zd;
  var equals = kotlin_kotlin.$_$.b9;
  var hashCode = kotlin_kotlin.$_$.i9;
  var toString_0 = kotlin_kotlin.$_$.de;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sd;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var isCharSequence = kotlin_kotlin.$_$.q9;
  var trim = kotlin_kotlin.$_$.lc;
  var split = kotlin_kotlin.$_$.yb;
  var getOrNull = kotlin_kotlin.$_$.f5;
  var toIntOrNull = kotlin_kotlin.$_$.ec;
  var _UInt___init__impl__l7qpdl = kotlin_kotlin.$_$.p;
  var splitToSequence = kotlin_kotlin.$_$.xb;
  var mapNotNull = kotlin_kotlin.$_$.cb;
  var toList = kotlin_kotlin.$_$.eb;
  var copyToArray = kotlin_kotlin.$_$.q4;
  var _UInt___get_data__impl__f0vqqw = kotlin_kotlin.$_$.q;
  var uintCompare = kotlin_kotlin.$_$.fe;
  var UInt = kotlin_kotlin.$_$.ed;
  var isNaN_0 = kotlin_kotlin.$_$.od;
  var numberToChar = kotlin_kotlin.$_$.w9;
  var charArrayOf = kotlin_kotlin.$_$.s8;
  var concatToString = kotlin_kotlin.$_$.gb;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var decodeToString = kotlin_kotlin.$_$.jb;
  var contentEquals = kotlin_kotlin.$_$.g4;
  var contentHashCode = kotlin_kotlin.$_$.i4;
  var contentHashCode_0 = kotlin_kotlin.$_$.h4;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.r2;
  var NotImplementedError = kotlin_kotlin.$_$.ad;
  var last = kotlin_kotlin.$_$.s5;
  var FloatCompanionObject_instance = kotlin_kotlin.$_$.z;
  var floatFromBits = kotlin_kotlin.$_$.c9;
  var IllegalArgumentException_init_$Create$_0 = kotlin_kotlin.$_$.j2;
  var toRawBits = kotlin_kotlin.$_$.be;
  var contentToString = kotlin_kotlin.$_$.j4;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c2;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var until = kotlin_kotlin.$_$.ra;
  var collectionSizeOrDefault = kotlin_kotlin.$_$.b4;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l1;
  var toBits_0 = kotlin_kotlin.$_$.ae;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var shiftRightUnsigned = kotlin_kotlin.$_$.k8;
  var bitwiseXor = kotlin_kotlin.$_$.x7;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var RuntimeException = kotlin_kotlin.$_$.cd;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y2;
  var captureStack = kotlin_kotlin.$_$.r8;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var defineProp = kotlin_kotlin.$_$.y8;
  var encodeToByteArray = kotlin_kotlin.$_$.kb;
  var copyOf = kotlin_kotlin.$_$.l4;
  var Regex_init_$Create$ = kotlin_kotlin.$_$.a2;
  var charSequenceLength = kotlin_kotlin.$_$.v8;
  var lazy = kotlin_kotlin.$_$.rd;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var plus = kotlin_kotlin.$_$.td;
  var toString_1 = kotlin_kotlin.$_$.hc;
  var numberToLong = kotlin_kotlin.$_$.i8;
  var contains = kotlin_kotlin.$_$.hb;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(Native, 'Native');
  initMetadataForClass(Managed, 'Managed', VOID, Native);
  initMetadataForClass(BBHFactory, 'BBHFactory', VOID, Managed);
  initMetadataForClass(RTreeFactory, 'RTreeFactory', RTreeFactory_init_$Create$, BBHFactory);
  initMetadataForObject(_FinalizerHolder, '_FinalizerHolder');
  initMetadataForCompanion(Companion);
  initMetadataForObject(_FinalizerHolder_0, '_FinalizerHolder');
  initMetadataForClass(BackendRenderTarget, 'BackendRenderTarget', VOID, Managed);
  initMetadataForCompanion(Companion_0);
  initMetadataForObject(_FinalizerHolder_1, '_FinalizerHolder');
  function get_width() {
    return this.h49().u49_1;
  }
  function get_height() {
    return this.h49().v49_1;
  }
  function get_colorType() {
    return this.h49().t49_1.w49_1;
  }
  function get_colorSpace() {
    return this.h49().t49_1.y49_1;
  }
  function get_isOpaque() {
    return this.h49().t49_1.c4a();
  }
  initMetadataForInterface(IHasImageInfo, 'IHasImageInfo');
  initMetadataForClass(Bitmap, 'Bitmap', Bitmap_init_$Create$, Managed, [IHasImageInfo]);
  initMetadataForClass(BlendMode, 'BlendMode', VOID, Enum);
  initMetadataForCompanion(Companion_1);
  initMetadataForObject(_FinalizerHolder_2, '_FinalizerHolder');
  initMetadataForClass(BreakIterator, 'BreakIterator', VOID, Managed);
  initMetadataForCompanion(Companion_2);
  initMetadataForObject(_FinalizerHolder_3, '_FinalizerHolder');
  initMetadataForClass(Canvas, 'Canvas', VOID, Managed);
  initMetadataForClass(ClipMode, 'ClipMode', VOID, Enum);
  initMetadataForCompanion(Companion_3);
  initMetadataForClass(Color4f, 'Color4f');
  initMetadataForClass(ColorAlphaType, 'ColorAlphaType', VOID, Enum);
  initMetadataForCompanion(Companion_4);
  initMetadataForClass(RefCnt, 'RefCnt', VOID, Managed);
  initMetadataForClass(ColorFilter, 'ColorFilter', VOID, RefCnt);
  initMetadataForCompanion(Companion_5);
  initMetadataForClass(ColorInfo, 'ColorInfo');
  initMetadataForCompanion(Companion_6);
  initMetadataForObject(_FinalizerHolder_4, '_FinalizerHolder');
  initMetadataForClass(ColorSpace, 'ColorSpace', VOID, Managed);
  initMetadataForCompanion(Companion_7);
  initMetadataForClass(ColorType, 'ColorType', VOID, Enum);
  initMetadataForClass(CubicResampler, 'CubicResampler');
  initMetadataForCompanion(Companion_8);
  initMetadataForObject(_FinalizerHolder_5, '_FinalizerHolder');
  initMetadataForClass(Data, 'Data', VOID, Managed);
  initMetadataForCompanion(Companion_9);
  initMetadataForClass(DirectContext, 'DirectContext', VOID, RefCnt);
  initMetadataForClass(FilterMipmap, 'FilterMipmap');
  initMetadataForClass(FilterMode, 'FilterMode', VOID, Enum);
  initMetadataForClass(FilterTileMode, 'FilterTileMode', VOID, Enum);
  initMetadataForCompanion(Companion_10);
  initMetadataForObject(_FinalizerHolder_6, '_FinalizerHolder');
  initMetadataForClass(Font, 'Font', Font_init_$Create$, Managed);
  initMetadataForClass(FontEdging, 'FontEdging', VOID, Enum);
  initMetadataForCompanion(Companion_11);
  initMetadataForClass(FontFeature, 'FontFeature');
  initMetadataForClass(FontHinting, 'FontHinting', VOID, Enum);
  initMetadataForCompanion(Companion_12);
  initMetadataForClass(FontMetrics, 'FontMetrics');
  initMetadataForCompanion(Companion_13);
  initMetadataForClass(FontMgr, 'FontMgr', VOID, RefCnt);
  initMetadataForClass(FontMgrWithFallback, 'FontMgrWithFallback', VOID, FontMgr);
  initMetadataForClass(FontSlant, 'FontSlant', VOID, Enum);
  initMetadataForCompanion(Companion_14);
  initMetadataForClass(FontStyle, 'FontStyle');
  initMetadataForCompanion(Companion_15);
  initMetadataForClass(FontVariation, 'FontVariation');
  initMetadataForCompanion(Companion_16);
  initMetadataForCompanion(Companion_17);
  initMetadataForClass(GradientStyle, 'GradientStyle');
  initMetadataForCompanion(Companion_18);
  initMetadataForClass(IRange, 'IRange');
  initMetadataForCompanion(Companion_19);
  initMetadataForClass(Image, 'Image', VOID, RefCnt, [IHasImageInfo]);
  initMetadataForCompanion(Companion_20);
  initMetadataForClass(ImageInfo, 'ImageInfo');
  initMetadataForCompanion(Companion_21);
  initMetadataForObject(_FinalizerHolder_7, '_FinalizerHolder');
  initMetadataForClass(ManagedString, 'ManagedString', VOID, Managed);
  initMetadataForCompanion(Companion_22);
  initMetadataForClass(Matrix33, 'Matrix33');
  initMetadataForCompanion(Companion_23);
  initMetadataForClass(Matrix44, 'Matrix44');
  initMetadataForClass(MipmapMode, 'MipmapMode', VOID, Enum);
  initMetadataForCompanion(Companion_24);
  initMetadataForObject(_FinalizerHolder_8, '_FinalizerHolder');
  initMetadataForClass(Paint, 'Paint', Paint_init_$Create$, Managed);
  initMetadataForClass(PaintMode, 'PaintMode', VOID, Enum);
  initMetadataForClass(PaintStrokeCap, 'PaintStrokeCap', VOID, Enum);
  initMetadataForClass(PaintStrokeJoin, 'PaintStrokeJoin', VOID, Enum);
  initMetadataForCompanion(Companion_25);
  initMetadataForObject(_FinalizerHolder_9, '_FinalizerHolder');
  initMetadataForClass(Path, 'Path', Path_init_$Create$, Managed);
  initMetadataForClass(PathAddMode, 'PathAddMode', VOID, Enum);
  initMetadataForCompanion(Companion_26);
  initMetadataForObject(_FinalizerHolder_10, '_FinalizerHolder');
  initMetadataForClass(PathBuilder, 'PathBuilder', PathBuilder_init_$Create$, Managed);
  initMetadataForClass(PathDirection, 'PathDirection', VOID, Enum);
  initMetadataForClass(PathFillMode, 'PathFillMode', VOID, Enum);
  initMetadataForCompanion(Companion_27);
  initMetadataForObject(_FinalizerHolder_11, '_FinalizerHolder');
  initMetadataForClass(PathMeasure, 'PathMeasure', PathMeasure_init_$Create$, Managed);
  initMetadataForClass(PathOp, 'PathOp', VOID, Enum);
  initMetadataForClass(PathSegment, 'PathSegment', PathSegment);
  initMetadataForCompanion(Companion_28);
  initMetadataForClass(PathSegmentIterator, 'PathSegmentIterator', VOID, Managed);
  initMetadataForClass(PathVerb, 'PathVerb', VOID, Enum);
  initMetadataForCompanion(Companion_29);
  initMetadataForClass(Picture, 'Picture', VOID, RefCnt);
  initMetadataForCompanion(Companion_30);
  initMetadataForObject(_FinalizerHolder_12, '_FinalizerHolder');
  initMetadataForClass(PictureRecorder, 'PictureRecorder', PictureRecorder_init_$Create$, Managed);
  initMetadataForClass(PixelGeometry, 'PixelGeometry', VOID, Enum);
  initMetadataForCompanion(Companion_31);
  initMetadataForClass(Point, 'Point');
  initMetadataForClass(Point3, 'Point3');
  initMetadataForCompanion(Companion_32);
  initMetadataForClass(Rect, 'Rect');
  initMetadataForCompanion(Companion_33);
  initMetadataForCompanion(Companion_34);
  initMetadataForClass(Shader, 'Shader', VOID, RefCnt);
  initMetadataForObject(ShadowUtils, 'ShadowUtils');
  initMetadataForClass(ArrayDecoder, 'ArrayDecoder');
  initMetadataForCompanion(Companion_35);
  initMetadataForClass(Surface, 'Surface', VOID, RefCnt);
  initMetadataForClass(SurfaceColorFormat, 'SurfaceColorFormat', VOID, Enum);
  initMetadataForClass(SurfaceOrigin, 'SurfaceOrigin', VOID, Enum);
  initMetadataForClass(SurfaceProps, 'SurfaceProps', SurfaceProps);
  initMetadataForCompanion(Companion_36);
  initMetadataForClass(Typeface, 'Typeface', VOID, RefCnt);
  initMetadataForCompanion(Companion_37);
  initMetadataForObject(_FinalizerHolder_13, '_FinalizerHolder');
  initMetadataForClass(U16String, 'U16String', VOID, Managed);
  initMetadataForObject(CharDirection, 'CharDirection');
  initMetadataForClass(Alignment, 'Alignment', VOID, Enum);
  initMetadataForClass(BaselineMode, 'BaselineMode', VOID, Enum);
  initMetadataForClass(DecorationLineStyle, 'DecorationLineStyle', VOID, Enum);
  initMetadataForCompanion(Companion_38);
  initMetadataForClass(DecorationStyle, 'DecorationStyle');
  initMetadataForClass(Direction, 'Direction', VOID, Enum);
  initMetadataForCompanion(Companion_39);
  initMetadataForClass(FontCollection, 'FontCollection', FontCollection_init_$Create$, RefCnt);
  initMetadataForClass(HeightMode, 'HeightMode', VOID, Enum);
  initMetadataForCompanion(Companion_40);
  initMetadataForClass(LineMetrics, 'LineMetrics');
  initMetadataForCompanion(Companion_41);
  initMetadataForObject(_FinalizerHolder_14, '_FinalizerHolder');
  initMetadataForClass(Paragraph, 'Paragraph', VOID, Managed);
  initMetadataForCompanion(Companion_42);
  initMetadataForObject(_FinalizerHolder_15, '_FinalizerHolder');
  initMetadataForClass(ParagraphBuilder, 'ParagraphBuilder', VOID, Managed);
  initMetadataForCompanion(Companion_43);
  initMetadataForObject(_FinalizerHolder_16, '_FinalizerHolder');
  initMetadataForClass(ParagraphStyle, 'ParagraphStyle', ParagraphStyle, Managed);
  initMetadataForClass(PlaceholderAlignment, 'PlaceholderAlignment', VOID, Enum);
  initMetadataForClass(PlaceholderStyle, 'PlaceholderStyle');
  initMetadataForClass(RectHeightMode, 'RectHeightMode', VOID, Enum);
  initMetadataForClass(RectWidthMode, 'RectWidthMode', VOID, Enum);
  initMetadataForCompanion(Companion_44);
  initMetadataForClass(Shadow, 'Shadow');
  initMetadataForCompanion(Companion_45);
  initMetadataForClass(TextBox, 'TextBox');
  initMetadataForClass(TextIndent, 'TextIndent', TextIndent);
  initMetadataForCompanion(Companion_46);
  initMetadataForObject(_FinalizerHolder_17, '_FinalizerHolder');
  initMetadataForClass(TextStyle, 'TextStyle', TextStyle_init_$Create$, Managed);
  initMetadataForCompanion(Companion_47);
  initMetadataForClass(TypefaceFontProvider, 'TypefaceFontProvider', TypefaceFontProvider_init_$Create$, FontMgr);
  initMetadataForCompanion(Companion_48);
  initMetadataForClass(TypefaceFontProviderWithFallback, 'TypefaceFontProviderWithFallback', TypefaceFontProviderWithFallback_init_$Create$, TypefaceFontProvider);
  initMetadataForCompanion(Companion_49);
  initMetadataForClass(SVGNode, 'SVGNode', VOID, RefCnt);
  initMetadataForClass(SVGTransformableNode, 'SVGTransformableNode', VOID, SVGNode);
  initMetadataForClass(SVGContainer, 'SVGContainer', VOID, SVGTransformableNode);
  initMetadataForCompanion(Companion_50);
  initMetadataForClass(SVGDOM, 'SVGDOM', VOID, RefCnt);
  initMetadataForCompanion(Companion_51);
  initMetadataForClass(SVGLength, 'SVGLength');
  initMetadataForClass(SVGLengthUnit, 'SVGLengthUnit', VOID, Enum);
  initMetadataForCompanion(Companion_52);
  initMetadataForCompanion(Companion_53);
  initMetadataForClass(SVGPreserveAspectRatio, 'SVGPreserveAspectRatio', SVGPreserveAspectRatio_init_$Create$);
  initMetadataForCompanion(Companion_54);
  initMetadataForClass(SVGPreserveAspectRatioAlign, 'SVGPreserveAspectRatioAlign', VOID, Enum);
  initMetadataForClass(SVGPreserveAspectRatioScale, 'SVGPreserveAspectRatioScale', VOID, Enum);
  initMetadataForCompanion(Companion_55);
  initMetadataForClass(SVGSVG, 'SVGSVG', VOID, SVGContainer);
  initMetadataForCompanion(Companion_56);
  initMetadataForClass(GraphicsApi, 'GraphicsApi', VOID, Enum);
  initMetadataForClass(OS, 'OS', VOID, Enum);
  initMetadataForClass(Arch, 'Arch', VOID, Enum);
  initMetadataForClass(RenderException, 'RenderException', RenderException, RuntimeException);
  initMetadataForInterface(SkikoRenderDelegate, 'SkikoRenderDelegate');
  initMetadataForClass(SystemTheme, 'SystemTheme', VOID, Enum);
  initMetadataForCompanion(Companion_57);
  initMetadataForClass(RenderNode, 'RenderNode', VOID, RefCnt);
  initMetadataForCompanion(Companion_58);
  initMetadataForClass(RenderNodeContext, 'RenderNodeContext', RenderNodeContext_init_$Create$, RefCnt);
  initMetadataForClass(InteropScope, 'InteropScope', InteropScope);
  initMetadataForClass(createWebGLContext$contextAttributes$1);
  initMetadataForClass(Pattern, 'Pattern');
  initMetadataForCompanion(Companion_59);
  initMetadataForClass(FinalizationThunk, 'FinalizationThunk');
  initMetadataForCompanion(Companion_60);
  initMetadataForCompanion(Companion_61);
  initMetadataForClass(NativePointerArray, 'NativePointerArray');
  initMetadataForObject(_FinalizerHolder_18, '_FinalizerHolder');
  initMetadataForObject(Stats, 'Stats');
  initMetadataForClass(CanvasRenderer, 'CanvasRenderer');
  initMetadataForClass(SkiaLayer$attachTo$1, VOID, VOID, CanvasRenderer);
  initMetadataForClass(SkiaLayer, 'SkiaLayer', SkiaLayer);
  //endregion
  function RTreeFactory_init_$Init$($this) {
    BBHFactory.call($this, org_jetbrains_skia_RTreeFactory__1nMake());
    RTreeFactory.call($this);
    Stats_instance.t48();
    return $this;
  }
  function RTreeFactory_init_$Create$() {
    return RTreeFactory_init_$Init$(objectCreate(protoOf(RTreeFactory)));
  }
  function RTreeFactory() {
  }
  function _FinalizerHolder() {
    _FinalizerHolder_instance = this;
    this.y48_1 = org_jetbrains_skia_BBHFactory__1nGetFinalizer();
  }
  var _FinalizerHolder_instance;
  function _FinalizerHolder_getInstance() {
    if (_FinalizerHolder_instance == null)
      new _FinalizerHolder();
    return _FinalizerHolder_instance;
  }
  function BBHFactory(ptr) {
    Managed.call(this, ptr, _FinalizerHolder_getInstance().y48_1);
  }
  function Companion() {
    Companion_instance = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion).a49 = function (width, height, sampleCnt, stencilBits, fbId, fbFormat) {
    Stats_instance.t48();
    var ptr = org_jetbrains_skia_BackendRenderTarget__1nMakeGL(width, height, sampleCnt, stencilBits, fbId, fbFormat);
    if (ptr === Companion_instance_60.b49())
      throw new RenderException("Can't create OpenGL BackendRenderTarget");
    return new BackendRenderTarget(ptr);
  };
  var Companion_instance;
  function Companion_getInstance() {
    if (Companion_instance == null)
      new Companion();
    return Companion_instance;
  }
  function _FinalizerHolder_0() {
    _FinalizerHolder_instance_0 = this;
    this.c49_1 = org_jetbrains_skia_BackendRenderTarget__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_0;
  function _FinalizerHolder_getInstance_0() {
    if (_FinalizerHolder_instance_0 == null)
      new _FinalizerHolder_0();
    return _FinalizerHolder_instance_0;
  }
  function BackendRenderTarget(ptr) {
    Companion_getInstance();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_0().c49_1);
  }
  function Companion_0() {
    Companion_instance_0 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_0).d49 = function (image) {
    var bitmap = Bitmap_init_$Create$();
    bitmap.l49(image.h49());
    var tmp;
    if (image.m49(bitmap)) {
      tmp = bitmap;
    } else {
      bitmap.q2g();
      throw RuntimeException_init_$Create$('Failed to readPixels from ' + image.toString());
    }
    return tmp;
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function Bitmap_init_$Init$($this) {
    Bitmap.call($this, org_jetbrains_skia_Bitmap__1nMake());
    Stats_instance.t48();
    return $this;
  }
  function Bitmap_init_$Create$() {
    return Bitmap_init_$Init$(objectCreate(protoOf(Bitmap)));
  }
  function _FinalizerHolder_1() {
    _FinalizerHolder_instance_1 = this;
    this.n49_1 = org_jetbrains_skia_Bitmap__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_1;
  function _FinalizerHolder_getInstance_1() {
    if (_FinalizerHolder_instance_1 == null)
      new _FinalizerHolder_1();
    return _FinalizerHolder_instance_1;
  }
  function _nGetImageInfo$ref() {
    return constructCallableReference(function (p0, p1, p2) {
      org_jetbrains_skia_Bitmap__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    }, 3, 0, 14, '_nGetImageInfo');
  }
  function Bitmap(ptr) {
    Companion_getInstance_0();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_1().n49_1);
    this.k49_1 = null;
  }
  protoOf(Bitmap).h49 = function () {
    var tmp;
    try {
      if (this.k49_1 == null) {
        var tmp_0 = this;
        var tmp_1 = Companion_getInstance_20();
        var tmp_2 = this.w48_1;
        tmp_0.k49_1 = tmp_1.p49(tmp_2, _nGetImageInfo$ref());
      }
      tmp = ensureNotNull(this.k49_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).q49 = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Bitmap__1nIsImmutable(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Bitmap).r49 = function () {
    Stats_instance.t48();
    org_jetbrains_skia_Bitmap__1nSetImmutable(this.w48_1);
    return this;
  };
  protoOf(Bitmap).s49 = function (info, rowBytes) {
    var tmp;
    try {
      this.k49_1 = null;
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Bitmap__1nAllocPixelsRowBytes(this.w48_1, info.u49_1, info.v49_1, info.t49_1.w49_1.i2_1, info.t49_1.x49_1.i2_1, getPtr(info.t49_1.y49_1), rowBytes);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(info.t49_1.y49_1);
    }
    return tmp;
  };
  protoOf(Bitmap).l49 = function (imageInfo) {
    return this.s49(imageInfo, imageInfo.z49());
  };
  var BlendMode_CLEAR_instance;
  var BlendMode_SRC_instance;
  var BlendMode_DST_instance;
  var BlendMode_SRC_OVER_instance;
  var BlendMode_DST_OVER_instance;
  var BlendMode_SRC_IN_instance;
  var BlendMode_DST_IN_instance;
  var BlendMode_SRC_OUT_instance;
  var BlendMode_DST_OUT_instance;
  var BlendMode_SRC_ATOP_instance;
  var BlendMode_DST_ATOP_instance;
  var BlendMode_XOR_instance;
  var BlendMode_PLUS_instance;
  var BlendMode_MODULATE_instance;
  var BlendMode_SCREEN_instance;
  var BlendMode_OVERLAY_instance;
  var BlendMode_DARKEN_instance;
  var BlendMode_LIGHTEN_instance;
  var BlendMode_COLOR_DODGE_instance;
  var BlendMode_COLOR_BURN_instance;
  var BlendMode_HARD_LIGHT_instance;
  var BlendMode_SOFT_LIGHT_instance;
  var BlendMode_DIFFERENCE_instance;
  var BlendMode_EXCLUSION_instance;
  var BlendMode_MULTIPLY_instance;
  var BlendMode_HUE_instance;
  var BlendMode_SATURATION_instance;
  var BlendMode_COLOR_instance;
  var BlendMode_LUMINOSITY_instance;
  function values() {
    return [BlendMode_CLEAR_getInstance(), BlendMode_SRC_getInstance(), BlendMode_DST_getInstance(), BlendMode_SRC_OVER_getInstance(), BlendMode_DST_OVER_getInstance(), BlendMode_SRC_IN_getInstance(), BlendMode_DST_IN_getInstance(), BlendMode_SRC_OUT_getInstance(), BlendMode_DST_OUT_getInstance(), BlendMode_SRC_ATOP_getInstance(), BlendMode_DST_ATOP_getInstance(), BlendMode_XOR_getInstance(), BlendMode_PLUS_getInstance(), BlendMode_MODULATE_getInstance(), BlendMode_SCREEN_getInstance(), BlendMode_OVERLAY_getInstance(), BlendMode_DARKEN_getInstance(), BlendMode_LIGHTEN_getInstance(), BlendMode_COLOR_DODGE_getInstance(), BlendMode_COLOR_BURN_getInstance(), BlendMode_HARD_LIGHT_getInstance(), BlendMode_SOFT_LIGHT_getInstance(), BlendMode_DIFFERENCE_getInstance(), BlendMode_EXCLUSION_getInstance(), BlendMode_MULTIPLY_getInstance(), BlendMode_HUE_getInstance(), BlendMode_SATURATION_getInstance(), BlendMode_COLOR_getInstance(), BlendMode_LUMINOSITY_getInstance()];
  }
  function get_entries() {
    if ($ENTRIES == null)
      $ENTRIES = enumEntries(values());
    return $ENTRIES;
  }
  var BlendMode_entriesInitialized;
  function BlendMode_initEntries() {
    if (BlendMode_entriesInitialized)
      return Unit_instance;
    BlendMode_entriesInitialized = true;
    BlendMode_CLEAR_instance = new BlendMode('CLEAR', 0);
    BlendMode_SRC_instance = new BlendMode('SRC', 1);
    BlendMode_DST_instance = new BlendMode('DST', 2);
    BlendMode_SRC_OVER_instance = new BlendMode('SRC_OVER', 3);
    BlendMode_DST_OVER_instance = new BlendMode('DST_OVER', 4);
    BlendMode_SRC_IN_instance = new BlendMode('SRC_IN', 5);
    BlendMode_DST_IN_instance = new BlendMode('DST_IN', 6);
    BlendMode_SRC_OUT_instance = new BlendMode('SRC_OUT', 7);
    BlendMode_DST_OUT_instance = new BlendMode('DST_OUT', 8);
    BlendMode_SRC_ATOP_instance = new BlendMode('SRC_ATOP', 9);
    BlendMode_DST_ATOP_instance = new BlendMode('DST_ATOP', 10);
    BlendMode_XOR_instance = new BlendMode('XOR', 11);
    BlendMode_PLUS_instance = new BlendMode('PLUS', 12);
    BlendMode_MODULATE_instance = new BlendMode('MODULATE', 13);
    BlendMode_SCREEN_instance = new BlendMode('SCREEN', 14);
    BlendMode_OVERLAY_instance = new BlendMode('OVERLAY', 15);
    BlendMode_DARKEN_instance = new BlendMode('DARKEN', 16);
    BlendMode_LIGHTEN_instance = new BlendMode('LIGHTEN', 17);
    BlendMode_COLOR_DODGE_instance = new BlendMode('COLOR_DODGE', 18);
    BlendMode_COLOR_BURN_instance = new BlendMode('COLOR_BURN', 19);
    BlendMode_HARD_LIGHT_instance = new BlendMode('HARD_LIGHT', 20);
    BlendMode_SOFT_LIGHT_instance = new BlendMode('SOFT_LIGHT', 21);
    BlendMode_DIFFERENCE_instance = new BlendMode('DIFFERENCE', 22);
    BlendMode_EXCLUSION_instance = new BlendMode('EXCLUSION', 23);
    BlendMode_MULTIPLY_instance = new BlendMode('MULTIPLY', 24);
    BlendMode_HUE_instance = new BlendMode('HUE', 25);
    BlendMode_SATURATION_instance = new BlendMode('SATURATION', 26);
    BlendMode_COLOR_instance = new BlendMode('COLOR', 27);
    BlendMode_LUMINOSITY_instance = new BlendMode('LUMINOSITY', 28);
  }
  var $ENTRIES;
  function BlendMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BlendMode_CLEAR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_CLEAR_instance;
  }
  function BlendMode_SRC_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_instance;
  }
  function BlendMode_DST_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_instance;
  }
  function BlendMode_SRC_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OVER_instance;
  }
  function BlendMode_DST_OVER_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OVER_instance;
  }
  function BlendMode_SRC_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_IN_instance;
  }
  function BlendMode_DST_IN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_IN_instance;
  }
  function BlendMode_SRC_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_OUT_instance;
  }
  function BlendMode_DST_OUT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_OUT_instance;
  }
  function BlendMode_SRC_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SRC_ATOP_instance;
  }
  function BlendMode_DST_ATOP_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DST_ATOP_instance;
  }
  function BlendMode_XOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_XOR_instance;
  }
  function BlendMode_PLUS_getInstance() {
    BlendMode_initEntries();
    return BlendMode_PLUS_instance;
  }
  function BlendMode_MODULATE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MODULATE_instance;
  }
  function BlendMode_SCREEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SCREEN_instance;
  }
  function BlendMode_OVERLAY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_OVERLAY_instance;
  }
  function BlendMode_DARKEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DARKEN_instance;
  }
  function BlendMode_LIGHTEN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LIGHTEN_instance;
  }
  function BlendMode_COLOR_DODGE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_DODGE_instance;
  }
  function BlendMode_COLOR_BURN_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_BURN_instance;
  }
  function BlendMode_HARD_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HARD_LIGHT_instance;
  }
  function BlendMode_SOFT_LIGHT_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SOFT_LIGHT_instance;
  }
  function BlendMode_DIFFERENCE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_DIFFERENCE_instance;
  }
  function BlendMode_EXCLUSION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_EXCLUSION_instance;
  }
  function BlendMode_MULTIPLY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_MULTIPLY_instance;
  }
  function BlendMode_HUE_getInstance() {
    BlendMode_initEntries();
    return BlendMode_HUE_instance;
  }
  function BlendMode_SATURATION_getInstance() {
    BlendMode_initEntries();
    return BlendMode_SATURATION_instance;
  }
  function BlendMode_COLOR_getInstance() {
    BlendMode_initEntries();
    return BlendMode_COLOR_instance;
  }
  function BlendMode_LUMINOSITY_getInstance() {
    BlendMode_initEntries();
    return BlendMode_LUMINOSITY_instance;
  }
  function BreakIterator$Companion$makeCharacterInstance$lambda($locale) {
    return function ($this$withErrorGuard, it) {
      return org_jetbrains_skia_BreakIterator__1nMake(0, $this$withErrorGuard.f4a($locale), it);
    };
  }
  function Companion_1() {
    Companion_instance_1 = this;
    this.g4a_1 = -1;
    this.h4a_1 = 0;
    this.i4a_1 = 100;
    this.j4a_1 = 100;
    this.k4a_1 = 200;
    this.l4a_1 = 200;
    this.m4a_1 = 300;
    this.n4a_1 = 300;
    this.o4a_1 = 400;
    this.p4a_1 = 400;
    this.q4a_1 = 500;
    Companion_instance_59.z48();
  }
  protoOf(Companion_1).r4a = function (locale) {
    Stats_instance.t48();
    return new BreakIterator(withErrorGuard('Failed to create character iterator', BreakIterator$Companion$makeCharacterInstance$lambda(locale)));
  };
  protoOf(Companion_1).s4a = function (locale, $super) {
    locale = locale === VOID ? null : locale;
    return $super === VOID ? this.r4a(locale) : $super.r4a.call(this, locale);
  };
  var Companion_instance_1;
  function Companion_getInstance_1() {
    if (Companion_instance_1 == null)
      new Companion_1();
    return Companion_instance_1;
  }
  function _FinalizerHolder_2() {
    _FinalizerHolder_instance_2 = this;
    this.t4a_1 = org_jetbrains_skia_BreakIterator__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_2;
  function _FinalizerHolder_getInstance_2() {
    if (_FinalizerHolder_instance_2 == null)
      new _FinalizerHolder_2();
    return _FinalizerHolder_instance_2;
  }
  function BreakIterator$setText$lambda(this$0, $text) {
    return function ($this$withErrorGuard, it) {
      var tmp = this$0.w48_1;
      var tmp_0;
      if ($text == null) {
        tmp_0 = null;
      } else {
        // Inline function 'kotlin.let' call
        var tmp_1 = 0;
        var tmp_2 = $text.length;
        var tmp_3 = new Int16Array(tmp_2);
        while (tmp_1 < tmp_2) {
          var tmp_4 = tmp_1;
          // Inline function 'kotlin.code' call
          var this_0 = charCodeAt($text, tmp_4);
          var tmp$ret$3 = Char__toInt_impl_vasixd(this_0);
          tmp_3[tmp_4] = toShort(tmp$ret$3);
          tmp_1 = tmp_1 + 1 | 0;
        }
        tmp_0 = tmp_3;
      }
      var tmp_5 = $this$withErrorGuard.u4a(tmp_0);
      var tmp1_safe_receiver = $text;
      var tmp2_elvis_lhs = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.length;
      return org_jetbrains_skia_BreakIterator__1nSetText(tmp, tmp_5, tmp2_elvis_lhs == null ? 0 : tmp2_elvis_lhs, it);
    };
  }
  function BreakIterator(ptr) {
    Companion_getInstance_1();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_2().t4a_1);
    this.x4a_1 = null;
  }
  protoOf(BreakIterator).q2g = function () {
    protoOf(Managed).q2g.call(this);
    var tmp0_safe_receiver = this.x4a_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q2g();
    }
  };
  protoOf(BreakIterator).y4a = function (offset) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_BreakIterator__1nPreceding(this.w48_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).z4a = function (offset) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_BreakIterator__1nFollowing(this.w48_1, offset);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(BreakIterator).a4b = function (text) {
    try {
      Stats_instance.t48();
      var tmp0_safe_receiver = this.x4a_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        tmp0_safe_receiver.q2g();
      }
      var tmp = this;
      tmp.x4a_1 = new U16String(withErrorGuard('Failed to setText', BreakIterator$setText$lambda(this, text)));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.x4a_1);
    }
  };
  function withErrorGuard(message, block) {
    var errorCode = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.b4b(errorCode);
        var res = block($this$interopScope, handle);
        $this$interopScope.c4b(handle, errorCode);
        if (errorCode[0] > 0) {
          throw RuntimeException_init_$Create$(message + '; operation failed with status ' + toString(errorCode));
        }
        if (res === Companion_instance_60.b49()) {
          throw IllegalArgumentException_init_$Create$(message);
        }
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return res;
  }
  function Companion_2() {
    Companion_instance_2 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_2;
  function Companion_getInstance_2() {
    if (Companion_instance_2 == null)
      new Companion_2();
    return Companion_instance_2;
  }
  function Canvas_init_$Init$(bitmap, surfaceProps, $this) {
    surfaceProps = surfaceProps === VOID ? new SurfaceProps() : surfaceProps;
    Canvas.call($this, org_jetbrains_skia_Canvas__1nMakeFromBitmap(bitmap.w48_1, surfaceProps.f4b(), surfaceProps.e4b_1.i2_1), true, bitmap);
    Stats_instance.t48();
    reachabilityBarrier(bitmap);
    return $this;
  }
  function Canvas_init_$Create$(bitmap, surfaceProps) {
    return Canvas_init_$Init$(bitmap, surfaceProps, objectCreate(protoOf(Canvas)));
  }
  function _FinalizerHolder_3() {
    _FinalizerHolder_instance_3 = this;
    this.g4b_1 = org_jetbrains_skia_Canvas__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_3;
  function _FinalizerHolder_getInstance_3() {
    if (_FinalizerHolder_instance_3 == null)
      new _FinalizerHolder_3();
    return _FinalizerHolder_instance_3;
  }
  function Canvas(ptr, managed, _owner) {
    Companion_getInstance_2();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_3().g4b_1, managed);
    this.j4b_1 = _owner;
  }
  protoOf(Canvas).k4b = function (left, top, right, bottom, paint) {
    Stats_instance.t48();
    try {
      org_jetbrains_skia_Canvas__1nDrawRect(this.w48_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).l4b = function (x, y, radius, paint) {
    Stats_instance.t48();
    try {
      org_jetbrains_skia_Canvas__1nDrawOval(this.w48_1, x - radius, y - radius, x + radius, y + radius, getPtr(paint));
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).m4b = function (left, top, right, bottom, radii, paint) {
    Stats_instance.t48();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          org_jetbrains_skia_Canvas__1nDrawRRect(this.w48_1, left, top, right, bottom, $this$interopScope.n4b(radii), radii.length, getPtr(paint));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
    }finally {
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).o4b = function (path, paint) {
    Stats_instance.t48();
    try {
      org_jetbrains_skia_Canvas__1nDrawPath(this.w48_1, getPtr(path), getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).p4b = function (image, srcLeft, srcTop, srcRight, srcBottom, dstLeft, dstTop, dstRight, dstBottom, samplingMode, paint, strict) {
    Stats_instance.t48();
    try {
      org_jetbrains_skia_Canvas__1nDrawImageRect(this.w48_1, getPtr(image), srcLeft, srcTop, srcRight, srcBottom, dstLeft, dstTop, dstRight, dstBottom, samplingMode.q4b(), samplingMode.r4b(), getPtr(paint), strict);
    }finally {
      reachabilityBarrier(image);
      reachabilityBarrier(paint);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).s4b = function (image, src, dst, samplingMode, paint, strict) {
    return this.p4b(image, src.t4b_1, src.u4b_1, src.v4b_1, src.w4b_1, dst.t4b_1, dst.u4b_1, dst.v4b_1, dst.w4b_1, samplingMode, paint, strict);
  };
  protoOf(Canvas).x4b = function (picture, matrix, paint) {
    Stats_instance.t48();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          var tmp = this.w48_1;
          var tmp_0 = getPtr(picture);
          org_jetbrains_skia_Canvas__1nDrawPicture(tmp, tmp_0, $this$interopScope.n4b(matrix == null ? null : matrix.y4b_1), getPtr(paint));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(picture);
      reachabilityBarrier(paint);
    }
    return this;
  };
  protoOf(Canvas).a2n = function (color) {
    Stats_instance.t48();
    try {
      org_jetbrains_skia_Canvas__1nClear(this.w48_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).z4b = function () {
    Stats_instance.t48();
    org_jetbrains_skia_Canvas__1nResetMatrix(this.w48_1);
    return this;
  };
  protoOf(Canvas).a4c = function (left, top, right, bottom, mode, antiAlias) {
    Stats_instance.t48();
    org_jetbrains_skia_Canvas__1nClipRect(this.w48_1, left, top, right, bottom, mode.i2_1, antiAlias);
    return this;
  };
  protoOf(Canvas).b4c = function (left, top, right, bottom, radii, mode, antiAlias) {
    Stats_instance.t48();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        org_jetbrains_skia_Canvas__1nClipRRect(this.w48_1, left, top, right, bottom, $this$interopScope.n4b(radii), radii.length, mode.i2_1, antiAlias);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).c4c = function (p, mode, antiAlias) {
    Stats_instance.t48();
    try {
      org_jetbrains_skia_Canvas__1nClipPath(this.w48_1, getPtr(p), mode.i2_1, antiAlias);
    }finally {
      reachabilityBarrier(p);
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(Canvas).o46 = function (dx, dy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        Stats_instance.t48();
        org_jetbrains_skia_Canvas__1nTranslate(this.w48_1, dx, dy);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).d4c = function (sx, sy) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        Stats_instance.t48();
        org_jetbrains_skia_Canvas__1nScale(this.w48_1, sx, sy);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).e4c = function (matrix) {
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        Stats_instance.t48();
        org_jetbrains_skia_Canvas__1nConcat44(this.w48_1, $this$interopScope.n4b(matrix.f4c_1));
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return this;
  };
  protoOf(Canvas).g4c = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Canvas__1nSave(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Canvas).h4c = function (left, top, right, bottom, paint) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Canvas__1nSaveLayerRect(this.w48_1, left, top, right, bottom, getPtr(paint));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(Canvas).i4c = function () {
    Stats_instance.t48();
    org_jetbrains_skia_Canvas__1nRestore(this.w48_1);
    return this;
  };
  var ClipMode_DIFFERENCE_instance;
  var ClipMode_INTERSECT_instance;
  var ClipMode_entriesInitialized;
  function ClipMode_initEntries() {
    if (ClipMode_entriesInitialized)
      return Unit_instance;
    ClipMode_entriesInitialized = true;
    ClipMode_DIFFERENCE_instance = new ClipMode('DIFFERENCE', 0);
    ClipMode_INTERSECT_instance = new ClipMode('INTERSECT', 1);
  }
  function ClipMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ClipMode_DIFFERENCE_getInstance() {
    ClipMode_initEntries();
    return ClipMode_DIFFERENCE_instance;
  }
  function ClipMode_INTERSECT_getInstance() {
    ClipMode_initEntries();
    return ClipMode_INTERSECT_instance;
  }
  function Color4f_init_$Init$(rgba, $this) {
    Color4f.call($this, rgba[0], rgba[1], rgba[2], rgba[3]);
    return $this;
  }
  function Color4f_init_$Create$(rgba) {
    return Color4f_init_$Init$(rgba, objectCreate(protoOf(Color4f)));
  }
  function Companion_3() {
  }
  var Companion_instance_3;
  function Companion_getInstance_3() {
    return Companion_instance_3;
  }
  function Color4f(r, g, b, a) {
    a = a === VOID ? 1.0 : a;
    this.j4c_1 = r;
    this.k4c_1 = g;
    this.l4c_1 = b;
    this.m4c_1 = a;
  }
  protoOf(Color4f).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Color4f))
      return false;
    if (!(compareTo(this.j4c_1, other.j4c_1) === 0))
      return false;
    if (!(compareTo(this.k4c_1, other.k4c_1) === 0))
      return false;
    if (!(compareTo(this.l4c_1, other.l4c_1) === 0))
      return false;
    return compareTo(this.m4c_1, other.m4c_1) === 0;
  };
  protoOf(Color4f).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.j4c_1) | 0;
    result = imul(result, PRIME) + toBits(this.k4c_1) | 0;
    result = imul(result, PRIME) + toBits(this.l4c_1) | 0;
    result = imul(result, PRIME) + toBits(this.m4c_1) | 0;
    return result;
  };
  protoOf(Color4f).toString = function () {
    return 'Color4f(_r=' + this.j4c_1 + ', _g=' + this.k4c_1 + ', _b=' + this.l4c_1 + ', _a=' + this.m4c_1 + ')';
  };
  protoOf(Color4f).n4c = function (_a) {
    return this.m4c_1 === _a ? this : new Color4f(this.j4c_1, this.k4c_1, this.l4c_1, _a);
  };
  var ColorAlphaType_UNKNOWN_instance;
  var ColorAlphaType_OPAQUE_instance;
  var ColorAlphaType_PREMUL_instance;
  var ColorAlphaType_UNPREMUL_instance;
  function values_0() {
    return [ColorAlphaType_UNKNOWN_getInstance(), ColorAlphaType_OPAQUE_getInstance(), ColorAlphaType_PREMUL_getInstance(), ColorAlphaType_UNPREMUL_getInstance()];
  }
  function get_entries_0() {
    if ($ENTRIES_0 == null)
      $ENTRIES_0 = enumEntries(values_0());
    return $ENTRIES_0;
  }
  var ColorAlphaType_entriesInitialized;
  function ColorAlphaType_initEntries() {
    if (ColorAlphaType_entriesInitialized)
      return Unit_instance;
    ColorAlphaType_entriesInitialized = true;
    ColorAlphaType_UNKNOWN_instance = new ColorAlphaType('UNKNOWN', 0);
    ColorAlphaType_OPAQUE_instance = new ColorAlphaType('OPAQUE', 1);
    ColorAlphaType_PREMUL_instance = new ColorAlphaType('PREMUL', 2);
    ColorAlphaType_UNPREMUL_instance = new ColorAlphaType('UNPREMUL', 3);
  }
  var $ENTRIES_0;
  function ColorAlphaType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function ColorAlphaType_UNKNOWN_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNKNOWN_instance;
  }
  function ColorAlphaType_OPAQUE_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_OPAQUE_instance;
  }
  function ColorAlphaType_PREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_PREMUL_instance;
  }
  function ColorAlphaType_UNPREMUL_getInstance() {
    ColorAlphaType_initEntries();
    return ColorAlphaType_UNPREMUL_instance;
  }
  function Companion_4() {
    Companion_instance_4 = this;
    Companion_instance_59.z48();
    this.o4c_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetSRGBToLinearGamma(), false);
    this.p4c_1 = ColorFilter_init_$Create$_0(org_jetbrains_skia_ColorFilter__1nGetLuma(), false);
  }
  protoOf(Companion_4).q4c = function (color, mode) {
    Stats_instance.t48();
    return ColorFilter_init_$Create$(org_jetbrains_skia_ColorFilter__1nMakeBlend(color, mode.i2_1));
  };
  var Companion_instance_4;
  function Companion_getInstance_4() {
    if (Companion_instance_4 == null)
      new Companion_4();
    return Companion_instance_4;
  }
  function ColorFilter_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$(ptr) {
    return ColorFilter_init_$Init$(ptr, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    ColorFilter.call($this);
    return $this;
  }
  function ColorFilter_init_$Create$_0(ptr, allowClose) {
    return ColorFilter_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(ColorFilter)));
  }
  function ColorFilter() {
    Companion_getInstance_4();
  }
  function Companion_5() {
    Companion_instance_5 = this;
    this.u4c_1 = new ColorInfo(ColorType_UNKNOWN_getInstance(), ColorAlphaType_UNKNOWN_getInstance(), null);
  }
  var Companion_instance_5;
  function Companion_getInstance_5() {
    if (Companion_instance_5 == null)
      new Companion_5();
    return Companion_instance_5;
  }
  function ColorInfo(colorType, alphaType, colorSpace) {
    Companion_getInstance_5();
    this.w49_1 = colorType;
    this.x49_1 = alphaType;
    this.y49_1 = colorSpace;
  }
  protoOf(ColorInfo).c4a = function () {
    return this.x49_1.equals(ColorAlphaType_OPAQUE_getInstance()) || this.w49_1.x4c();
  };
  protoOf(ColorInfo).y4c = function () {
    return this.w49_1.y4c();
  };
  protoOf(ColorInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ColorInfo))
      return false;
    if (!this.w49_1.equals(other.w49_1))
      return false;
    if (!this.x49_1.equals(other.x49_1))
      return false;
    return equals(this.y49_1, other.y49_1);
  };
  protoOf(ColorInfo).hashCode = function () {
    var prime = 59;
    var result = 1;
    result = imul(result, prime) + this.w49_1.hashCode() | 0;
    result = imul(result, prime) + this.x49_1.hashCode() | 0;
    var tmp = imul(result, prime);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.y49_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(ColorInfo).toString = function () {
    return 'ColorInfo(_colorType=' + this.w49_1.toString() + ', _alphaType=' + this.x49_1.toString() + ', _colorSpace=' + toString_0(this.y49_1) + ')';
  };
  function Companion_6() {
    Companion_instance_6 = this;
    Companion_instance_59.z48();
    this.z4c_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGB(), false);
    this.a4d_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeSRGBLinear(), false);
    this.b4d_1 = ColorSpace_init_$Create$_0(org_jetbrains_skia_ColorSpace__1nMakeDisplayP3(), false);
  }
  var Companion_instance_6;
  function Companion_getInstance_6() {
    if (Companion_instance_6 == null)
      new Companion_6();
    return Companion_instance_6;
  }
  function ColorSpace_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().c4d_1, true);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$(ptr) {
    return ColorSpace_init_$Init$(ptr, objectCreate(protoOf(ColorSpace)));
  }
  function ColorSpace_init_$Init$_0(ptr, managed, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_4().c4d_1, managed);
    ColorSpace.call($this);
    return $this;
  }
  function ColorSpace_init_$Create$_0(ptr, managed) {
    return ColorSpace_init_$Init$_0(ptr, managed, objectCreate(protoOf(ColorSpace)));
  }
  function _FinalizerHolder_4() {
    _FinalizerHolder_instance_4 = this;
    this.c4d_1 = org_jetbrains_skia_ColorSpace__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_4;
  function _FinalizerHolder_getInstance_4() {
    if (_FinalizerHolder_instance_4 == null)
      new _FinalizerHolder_4();
    return _FinalizerHolder_instance_4;
  }
  function ColorSpace() {
    Companion_getInstance_6();
  }
  var ColorType_UNKNOWN_instance;
  var ColorType_ALPHA_8_instance;
  var ColorType_RGB_565_instance;
  var ColorType_ARGB_4444_instance;
  var ColorType_RGBA_8888_instance;
  var ColorType_RGB_888X_instance;
  var ColorType_BGRA_8888_instance;
  var ColorType_RGBA_1010102_instance;
  var ColorType_BGRA_1010102_instance;
  var ColorType_RGB_101010X_instance;
  var ColorType_BGR_101010X_instance;
  var ColorType_BGR_101010X_XR_instance;
  var ColorType_BGRA_10101010_XR_instance;
  var ColorType_RGBA_10x6_instance;
  var ColorType_GRAY_8_instance;
  var ColorType_RGBA_F16NORM_instance;
  var ColorType_RGBA_F16_instance;
  var ColorType_RGBA_F32_instance;
  var ColorType_R8G8_UNORM_instance;
  var ColorType_A16_FLOAT_instance;
  var ColorType_R16G16_FLOAT_instance;
  var ColorType_A16_UNORM_instance;
  var ColorType_R16G16_UNORM_instance;
  var ColorType_R16G16B16A16_UNORM_instance;
  function Companion_7() {
    Companion_instance_7 = this;
    this.d4d_1 = ColorType_BGRA_8888_getInstance();
  }
  var Companion_instance_7;
  function Companion_getInstance_7() {
    ColorType_initEntries();
    if (Companion_instance_7 == null)
      new Companion_7();
    return Companion_instance_7;
  }
  function values_1() {
    return [ColorType_UNKNOWN_getInstance(), ColorType_ALPHA_8_getInstance(), ColorType_RGB_565_getInstance(), ColorType_ARGB_4444_getInstance(), ColorType_RGBA_8888_getInstance(), ColorType_RGB_888X_getInstance(), ColorType_BGRA_8888_getInstance(), ColorType_RGBA_1010102_getInstance(), ColorType_BGRA_1010102_getInstance(), ColorType_RGB_101010X_getInstance(), ColorType_BGR_101010X_getInstance(), ColorType_BGR_101010X_XR_getInstance(), ColorType_BGRA_10101010_XR_getInstance(), ColorType_RGBA_10x6_getInstance(), ColorType_GRAY_8_getInstance(), ColorType_RGBA_F16NORM_getInstance(), ColorType_RGBA_F16_getInstance(), ColorType_RGBA_F32_getInstance(), ColorType_R8G8_UNORM_getInstance(), ColorType_A16_FLOAT_getInstance(), ColorType_R16G16_FLOAT_getInstance(), ColorType_A16_UNORM_getInstance(), ColorType_R16G16_UNORM_getInstance(), ColorType_R16G16B16A16_UNORM_getInstance()];
  }
  function get_entries_1() {
    if ($ENTRIES_1 == null)
      $ENTRIES_1 = enumEntries(values_1());
    return $ENTRIES_1;
  }
  var ColorType_entriesInitialized;
  function ColorType_initEntries() {
    if (ColorType_entriesInitialized)
      return Unit_instance;
    ColorType_entriesInitialized = true;
    ColorType_UNKNOWN_instance = new ColorType('UNKNOWN', 0);
    ColorType_ALPHA_8_instance = new ColorType('ALPHA_8', 1);
    ColorType_RGB_565_instance = new ColorType('RGB_565', 2);
    ColorType_ARGB_4444_instance = new ColorType('ARGB_4444', 3);
    ColorType_RGBA_8888_instance = new ColorType('RGBA_8888', 4);
    ColorType_RGB_888X_instance = new ColorType('RGB_888X', 5);
    ColorType_BGRA_8888_instance = new ColorType('BGRA_8888', 6);
    ColorType_RGBA_1010102_instance = new ColorType('RGBA_1010102', 7);
    ColorType_BGRA_1010102_instance = new ColorType('BGRA_1010102', 8);
    ColorType_RGB_101010X_instance = new ColorType('RGB_101010X', 9);
    ColorType_BGR_101010X_instance = new ColorType('BGR_101010X', 10);
    ColorType_BGR_101010X_XR_instance = new ColorType('BGR_101010X_XR', 11);
    ColorType_BGRA_10101010_XR_instance = new ColorType('BGRA_10101010_XR', 12);
    ColorType_RGBA_10x6_instance = new ColorType('RGBA_10x6', 13);
    ColorType_GRAY_8_instance = new ColorType('GRAY_8', 14);
    ColorType_RGBA_F16NORM_instance = new ColorType('RGBA_F16NORM', 15);
    ColorType_RGBA_F16_instance = new ColorType('RGBA_F16', 16);
    ColorType_RGBA_F32_instance = new ColorType('RGBA_F32', 17);
    ColorType_R8G8_UNORM_instance = new ColorType('R8G8_UNORM', 18);
    ColorType_A16_FLOAT_instance = new ColorType('A16_FLOAT', 19);
    ColorType_R16G16_FLOAT_instance = new ColorType('R16G16_FLOAT', 20);
    ColorType_A16_UNORM_instance = new ColorType('A16_UNORM', 21);
    ColorType_R16G16_UNORM_instance = new ColorType('R16G16_UNORM', 22);
    ColorType_R16G16B16A16_UNORM_instance = new ColorType('R16G16B16A16_UNORM', 23);
    Companion_getInstance_7();
  }
  var $ENTRIES_1;
  function ColorType(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(ColorType).y4c = function () {
    var tmp;
    switch (this.i2_1) {
      case 0:
        tmp = 0;
        break;
      case 1:
        tmp = 1;
        break;
      case 2:
        tmp = 2;
        break;
      case 3:
        tmp = 2;
        break;
      case 4:
        tmp = 4;
        break;
      case 6:
        tmp = 4;
        break;
      case 5:
        tmp = 4;
        break;
      case 7:
        tmp = 4;
        break;
      case 9:
        tmp = 4;
        break;
      case 8:
        tmp = 4;
        break;
      case 10:
        tmp = 4;
        break;
      case 11:
        tmp = 4;
        break;
      case 12:
        tmp = 4;
        break;
      case 13:
        tmp = 8;
        break;
      case 14:
        tmp = 1;
        break;
      case 15:
        tmp = 8;
        break;
      case 16:
        tmp = 8;
        break;
      case 17:
        tmp = 16;
        break;
      case 18:
        tmp = 2;
        break;
      case 21:
        tmp = 2;
        break;
      case 22:
        tmp = 4;
        break;
      case 19:
        tmp = 2;
        break;
      case 20:
        tmp = 4;
        break;
      case 23:
        tmp = 8;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(ColorType).x4c = function () {
    return org_jetbrains_skia_ColorType__1nIsAlwaysOpaque(this.i2_1);
  };
  function ColorType_UNKNOWN_getInstance() {
    ColorType_initEntries();
    return ColorType_UNKNOWN_instance;
  }
  function ColorType_ALPHA_8_getInstance() {
    ColorType_initEntries();
    return ColorType_ALPHA_8_instance;
  }
  function ColorType_RGB_565_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_565_instance;
  }
  function ColorType_ARGB_4444_getInstance() {
    ColorType_initEntries();
    return ColorType_ARGB_4444_instance;
  }
  function ColorType_RGBA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_8888_instance;
  }
  function ColorType_RGB_888X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_888X_instance;
  }
  function ColorType_BGRA_8888_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_8888_instance;
  }
  function ColorType_RGBA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_1010102_instance;
  }
  function ColorType_BGRA_1010102_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_1010102_instance;
  }
  function ColorType_RGB_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_RGB_101010X_instance;
  }
  function ColorType_BGR_101010X_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_instance;
  }
  function ColorType_BGR_101010X_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGR_101010X_XR_instance;
  }
  function ColorType_BGRA_10101010_XR_getInstance() {
    ColorType_initEntries();
    return ColorType_BGRA_10101010_XR_instance;
  }
  function ColorType_RGBA_10x6_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_10x6_instance;
  }
  function ColorType_GRAY_8_getInstance() {
    ColorType_initEntries();
    return ColorType_GRAY_8_instance;
  }
  function ColorType_RGBA_F16NORM_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16NORM_instance;
  }
  function ColorType_RGBA_F16_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F16_instance;
  }
  function ColorType_RGBA_F32_getInstance() {
    ColorType_initEntries();
    return ColorType_RGBA_F32_instance;
  }
  function ColorType_R8G8_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R8G8_UNORM_instance;
  }
  function ColorType_A16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_FLOAT_instance;
  }
  function ColorType_R16G16_FLOAT_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_FLOAT_instance;
  }
  function ColorType_A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_A16_UNORM_instance;
  }
  function ColorType_R16G16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16_UNORM_instance;
  }
  function ColorType_R16G16B16A16_UNORM_getInstance() {
    ColorType_initEntries();
    return ColorType_R16G16B16A16_UNORM_instance;
  }
  function CubicResampler(b, c) {
    this.e4d_1 = b;
    this.f4d_1 = c;
  }
  protoOf(CubicResampler).q4b = function () {
    return toBits(this.e4d_1) | -2147483648;
  };
  protoOf(CubicResampler).r4b = function () {
    return toBits(this.f4d_1);
  };
  protoOf(CubicResampler).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof CubicResampler))
      return false;
    if (!(compareTo(this.e4d_1, other.e4d_1) === 0))
      return false;
    return compareTo(this.f4d_1, other.f4d_1) === 0;
  };
  protoOf(CubicResampler).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.e4d_1) | 0;
    result = imul(result, PRIME) + toBits(this.f4d_1) | 0;
    return result;
  };
  protoOf(CubicResampler).toString = function () {
    return 'CubicResampler(_B=' + this.e4d_1 + ', _C=' + this.f4d_1 + ')';
  };
  function Companion_8() {
    Companion_instance_8 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_8).g4d = function (bytes, offset, length) {
    Stats_instance.t48();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        tmp$ret$0 = org_jetbrains_skia_Data__1nMakeFromBytes($this$interopScope.h4d(bytes), offset, length);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return new Data(tmp$ret$0);
  };
  protoOf(Companion_8).i4d = function (bytes, offset, length, $super) {
    offset = offset === VOID ? 0 : offset;
    length = length === VOID ? bytes.length : length;
    return $super === VOID ? this.g4d(bytes, offset, length) : $super.g4d.call(this, bytes, offset, length);
  };
  var Companion_instance_8;
  function Companion_getInstance_8() {
    if (Companion_instance_8 == null)
      new Companion_8();
    return Companion_instance_8;
  }
  function _FinalizerHolder_5() {
    _FinalizerHolder_instance_5 = this;
    this.j4d_1 = org_jetbrains_skia_Data__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_5;
  function _FinalizerHolder_getInstance_5() {
    if (_FinalizerHolder_instance_5 == null)
      new _FinalizerHolder_5();
    return _FinalizerHolder_instance_5;
  }
  function Data(ptr) {
    Companion_getInstance_8();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_5().j4d_1);
    this.m4d_1 = null;
  }
  protoOf(Data).equals = function (other) {
    var tmp0_elvis_lhs = other instanceof Data ? other : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var otherData = tmp;
    return this.x48(otherData);
  };
  protoOf(Data).x48 = function (other) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Data__1nEquals(this.w48_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  function Companion_9() {
    Companion_instance_9 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_9).n4d = function () {
    Stats_instance.t48();
    loadOpenGLLibrary();
    var ptr = org_jetbrains_skia_DirectContext__1nMakeGL();
    if (ptr === Companion_instance_60.b49())
      throw new RenderException("Can't create OpenGL DirectContext");
    return new DirectContext(ptr);
  };
  var Companion_instance_9;
  function Companion_getInstance_9() {
    if (Companion_instance_9 == null)
      new Companion_9();
    return Companion_instance_9;
  }
  function DirectContext(ptr) {
    Companion_getInstance_9();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(DirectContext).q4d = function () {
    Stats_instance.t48();
    org_jetbrains_skia_DirectContext__1nFlushDefault(this.w48_1);
    return this;
  };
  protoOf(DirectContext).r4d = function (surface, syncCpu) {
    try {
      Stats_instance.t48();
      org_jetbrains_skia_DirectContext__1nFlushAndSubmit(this.w48_1, surface.w48_1, syncCpu);
    }finally {
      reachabilityBarrier(this);
    }
  };
  protoOf(DirectContext).s4d = function (surface, syncCpu, $super) {
    syncCpu = syncCpu === VOID ? false : syncCpu;
    var tmp;
    if ($super === VOID) {
      this.r4d(surface, syncCpu);
      tmp = Unit_instance;
    } else {
      tmp = $super.r4d.call(this, surface, syncCpu);
    }
    return tmp;
  };
  function FilterMipmap(filterMode, mipmapMode) {
    mipmapMode = mipmapMode === VOID ? MipmapMode_NONE_getInstance() : mipmapMode;
    this.t4d_1 = filterMode;
    this.u4d_1 = mipmapMode;
  }
  protoOf(FilterMipmap).q4b = function () {
    return this.t4d_1.i2_1;
  };
  protoOf(FilterMipmap).r4b = function () {
    return this.u4d_1.i2_1;
  };
  protoOf(FilterMipmap).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FilterMipmap))
      return false;
    if (!this.t4d_1.equals(other.t4d_1))
      return false;
    return this.u4d_1.equals(other.u4d_1);
  };
  protoOf(FilterMipmap).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.t4d_1.hashCode() | 0;
    result = imul(result, PRIME) + this.u4d_1.hashCode() | 0;
    return result;
  };
  protoOf(FilterMipmap).toString = function () {
    return 'FilterMipmap(_filterMode=' + this.t4d_1.toString() + ', _mipmapMode=' + this.u4d_1.toString() + ')';
  };
  var FilterMode_NEAREST_instance;
  var FilterMode_LINEAR_instance;
  var FilterMode_entriesInitialized;
  function FilterMode_initEntries() {
    if (FilterMode_entriesInitialized)
      return Unit_instance;
    FilterMode_entriesInitialized = true;
    FilterMode_NEAREST_instance = new FilterMode('NEAREST', 0);
    FilterMode_LINEAR_instance = new FilterMode('LINEAR', 1);
  }
  function FilterMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterMode_NEAREST_getInstance() {
    FilterMode_initEntries();
    return FilterMode_NEAREST_instance;
  }
  function FilterMode_LINEAR_getInstance() {
    FilterMode_initEntries();
    return FilterMode_LINEAR_instance;
  }
  var FilterTileMode_CLAMP_instance;
  var FilterTileMode_REPEAT_instance;
  var FilterTileMode_MIRROR_instance;
  var FilterTileMode_DECAL_instance;
  var FilterTileMode_entriesInitialized;
  function FilterTileMode_initEntries() {
    if (FilterTileMode_entriesInitialized)
      return Unit_instance;
    FilterTileMode_entriesInitialized = true;
    FilterTileMode_CLAMP_instance = new FilterTileMode('CLAMP', 0);
    FilterTileMode_REPEAT_instance = new FilterTileMode('REPEAT', 1);
    FilterTileMode_MIRROR_instance = new FilterTileMode('MIRROR', 2);
    FilterTileMode_DECAL_instance = new FilterTileMode('DECAL', 3);
  }
  function FilterTileMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FilterTileMode_CLAMP_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_CLAMP_instance;
  }
  function FilterTileMode_REPEAT_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_REPEAT_instance;
  }
  function FilterTileMode_MIRROR_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_MIRROR_instance;
  }
  function FilterTileMode_DECAL_getInstance() {
    FilterTileMode_initEntries();
    return FilterTileMode_DECAL_instance;
  }
  function Companion_10() {
    Companion_instance_10 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_10;
  function Companion_getInstance_10() {
    if (Companion_instance_10 == null)
      new Companion_10();
    return Companion_instance_10;
  }
  function Font_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_6().v4d_1);
    Font.call($this);
    return $this;
  }
  function Font_init_$Init$_0($this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeDefault(), $this);
    Stats_instance.t48();
    return $this;
  }
  function Font_init_$Create$() {
    return Font_init_$Init$_0(objectCreate(protoOf(Font)));
  }
  function Font_init_$Init$_1(typeface, size, $this) {
    Font_init_$Init$(org_jetbrains_skia_Font__1nMakeTypefaceSize(getPtr(typeface), size), $this);
    Stats_instance.t48();
    reachabilityBarrier(typeface);
    return $this;
  }
  function Font_init_$Create$_0(typeface, size) {
    return Font_init_$Init$_1(typeface, size, objectCreate(protoOf(Font)));
  }
  function _FinalizerHolder_6() {
    _FinalizerHolder_instance_6 = this;
    this.v4d_1 = org_jetbrains_skia_Font__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_6;
  function _FinalizerHolder_getInstance_6() {
    if (_FinalizerHolder_instance_6 == null)
      new _FinalizerHolder_6();
    return _FinalizerHolder_instance_6;
  }
  function Font$_get_metrics_$lambda_bxy7iq(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Font__1nGetMetrics(this$0.w48_1, it);
      return Unit_instance;
    };
  }
  protoOf(Font).x48 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Font__1nEquals(this.w48_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Font).y4d = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp_0 = Companion_instance_12;
      tmp = fromInteropPointer(tmp_0, Font$_get_metrics_$lambda_bxy7iq(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Font() {
    Companion_getInstance_10();
  }
  var FontEdging_ALIAS_instance;
  var FontEdging_ANTI_ALIAS_instance;
  var FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  var FontEdging_entriesInitialized;
  function FontEdging_initEntries() {
    if (FontEdging_entriesInitialized)
      return Unit_instance;
    FontEdging_entriesInitialized = true;
    FontEdging_ALIAS_instance = new FontEdging('ALIAS', 0);
    FontEdging_ANTI_ALIAS_instance = new FontEdging('ANTI_ALIAS', 1);
    FontEdging_SUBPIXEL_ANTI_ALIAS_instance = new FontEdging('SUBPIXEL_ANTI_ALIAS', 2);
  }
  function FontEdging(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontEdging_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ALIAS_instance;
  }
  function FontEdging_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_ANTI_ALIAS_instance;
  }
  function FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance() {
    FontEdging_initEntries();
    return FontEdging_SUBPIXEL_ANTI_ALIAS_instance;
  }
  function FontFeature$Companion$parseW3$lambda(it) {
    // Inline function 'kotlin.text.trim' call
    var tmp$ret$0 = toString(trim(isCharSequence(it) ? it : THROW_CCE()));
    var parts = split(tmp$ret$0, [' ']);
    var name = parts.m(0);
    var value = getOrNull(parts, 1);
    var tmp;
    switch (value) {
      case 'on':
      case null:
        tmp = 1;
        break;
      case 'off':
        tmp = 0;
        break;
      default:
        var tmp0_elvis_lhs = toIntOrNull(value);
        tmp = tmp0_elvis_lhs == null ? 1 : tmp0_elvis_lhs;
        break;
    }
    var value_0 = tmp;
    return name.length === 4 ? FontFeature_init_$Create$(name, value_0) : null;
  }
  function FontFeature_init_$Init$(feature, value, $this) {
    FontFeature.call($this, Companion_instance_16.z4d(feature), value, _UInt___init__impl__l7qpdl(0), _UInt___init__impl__l7qpdl(-1));
    return $this;
  }
  function FontFeature_init_$Create$(feature, value) {
    return FontFeature_init_$Init$(feature, value, objectCreate(protoOf(FontFeature)));
  }
  function Companion_11() {
    Companion_instance_11 = this;
    this.a4e_1 = _UInt___init__impl__l7qpdl(0);
    this.b4e_1 = _UInt___init__impl__l7qpdl(-1);
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.c4e_1 = Array(0);
    this.d4e_1 = compilePattern('\\s+');
    this.e4e_1 = compilePattern('([-+])?([a-z0-9]{4})(?:\\[(\\d+)?:(\\d+)?\\])?(?:=(\\d+))?');
    this.f4e_1 = 1;
    this.g4e_1 = 2;
    this.h4e_1 = 3;
    this.i4e_1 = 4;
    this.j4e_1 = 5;
  }
  protoOf(Companion_11).k4e = function (str) {
    var tmp = splitToSequence(str, [',']);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_0 = toList(mapNotNull(tmp, FontFeature$Companion$parseW3$lambda));
    return copyToArray(this_0);
  };
  var Companion_instance_11;
  function Companion_getInstance_11() {
    if (Companion_instance_11 == null)
      new Companion_11();
    return Companion_instance_11;
  }
  function FontFeature(_tag, value, start, end) {
    Companion_getInstance_11();
    this.l4e_1 = _tag;
    this.m4e_1 = value;
    this.n4e_1 = start;
    this.o4e_1 = end;
  }
  protoOf(FontFeature).p4e = function () {
    return Companion_instance_16.q4e(this.l4e_1);
  };
  protoOf(FontFeature).toString = function () {
    var range = '';
    var tmp;
    var tmp0 = this.n4e_1;
    // Inline function 'kotlin.UInt.compareTo' call
    var other = _UInt___init__impl__l7qpdl(0);
    if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0), _UInt___get_data__impl__f0vqqw(other)) > 0) {
      tmp = true;
    } else {
      var tmp0_0 = this.o4e_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_0 = _UInt___init__impl__l7qpdl(-1);
      tmp = uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_0), _UInt___get_data__impl__f0vqqw(other_0)) < 0;
    }
    if (tmp) {
      var tmp_0;
      var tmp0_1 = this.n4e_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_1 = _UInt___init__impl__l7qpdl(0);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_1), _UInt___get_data__impl__f0vqqw(other_1)) > 0) {
        tmp_0 = new UInt(this.n4e_1);
      } else {
        tmp_0 = '';
      }
      var tmp_1 = '[' + tmp_0 + ':';
      var tmp_2;
      var tmp0_2 = this.o4e_1;
      // Inline function 'kotlin.UInt.compareTo' call
      var other_2 = _UInt___init__impl__l7qpdl(-1);
      if (uintCompare(_UInt___get_data__impl__f0vqqw(tmp0_2), _UInt___get_data__impl__f0vqqw(other_2)) < 0) {
        tmp_2 = new UInt(this.o4e_1);
      } else {
        tmp_2 = '';
      }
      range = tmp_1 + toString(tmp_2) + ']';
    }
    var valuePrefix = '';
    var valueSuffix = '';
    if (this.m4e_1 === 0)
      valuePrefix = '-';
    else if (this.m4e_1 === 1)
      valuePrefix = '+';
    else
      valueSuffix = '=' + this.m4e_1;
    return 'FontFeature(' + valuePrefix + this.l4e_1 + range + valueSuffix + ')';
  };
  protoOf(FontFeature).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontFeature))
      return false;
    if (!(this.p4e() === other.p4e()))
      return false;
    if (!(this.m4e_1 === other.m4e_1))
      return false;
    if (!(this.n4e_1 === other.n4e_1))
      return false;
    return this.o4e_1 === other.o4e_1;
  };
  protoOf(FontFeature).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.l4e_1 | 0;
    result = imul(result, PRIME) + this.m4e_1 | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.UInt.shr' call
    var this_0 = this.n4e_1;
    var tmp0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_0) >>> 16 | 0);
    // Inline function 'kotlin.UInt.xor' call
    var other = this.n4e_1;
    // Inline function 'kotlin.UInt.toInt' call
    var this_1 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0) ^ _UInt___get_data__impl__f0vqqw(other));
    result = tmp + _UInt___get_data__impl__f0vqqw(this_1) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.UInt.shr' call
    var this_2 = this.o4e_1;
    var tmp0_0 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(this_2) >>> 16 | 0);
    // Inline function 'kotlin.UInt.xor' call
    var other_0 = this.o4e_1;
    // Inline function 'kotlin.UInt.toInt' call
    var this_3 = _UInt___init__impl__l7qpdl(_UInt___get_data__impl__f0vqqw(tmp0_0) ^ _UInt___get_data__impl__f0vqqw(other_0));
    result = tmp_0 + _UInt___get_data__impl__f0vqqw(this_3) | 0;
    return result;
  };
  var FontHinting_NONE_instance;
  var FontHinting_SLIGHT_instance;
  var FontHinting_NORMAL_instance;
  var FontHinting_FULL_instance;
  var FontHinting_entriesInitialized;
  function FontHinting_initEntries() {
    if (FontHinting_entriesInitialized)
      return Unit_instance;
    FontHinting_entriesInitialized = true;
    FontHinting_NONE_instance = new FontHinting('NONE', 0);
    FontHinting_SLIGHT_instance = new FontHinting('SLIGHT', 1);
    FontHinting_NORMAL_instance = new FontHinting('NORMAL', 2);
    FontHinting_FULL_instance = new FontHinting('FULL', 3);
  }
  function FontHinting(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontHinting_NONE_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NONE_instance;
  }
  function FontHinting_SLIGHT_getInstance() {
    FontHinting_initEntries();
    return FontHinting_SLIGHT_instance;
  }
  function FontHinting_NORMAL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_NORMAL_instance;
  }
  function FontHinting_FULL_getInstance() {
    FontHinting_initEntries();
    return FontHinting_FULL_instance;
  }
  function Companion_12() {
  }
  var Companion_instance_12;
  function Companion_getInstance_12() {
    return Companion_instance_12;
  }
  function FontMetrics(top, ascent, descent, bottom, leading, avgCharWidth, maxCharWidth, xMin, xMax, xHeight, capHeight, underlineThickness, underlinePosition, strikeoutThickness, strikeoutPosition) {
    this.r4e_1 = top;
    this.s4e_1 = ascent;
    this.t4e_1 = descent;
    this.u4e_1 = bottom;
    this.v4e_1 = leading;
    this.w4e_1 = avgCharWidth;
    this.x4e_1 = maxCharWidth;
    this.y4e_1 = xMin;
    this.z4e_1 = xMax;
    this.a4f_1 = xHeight;
    this.b4f_1 = capHeight;
    this.c4f_1 = underlineThickness;
    this.d4f_1 = underlinePosition;
    this.e4f_1 = strikeoutThickness;
    this.f4f_1 = strikeoutPosition;
  }
  protoOf(FontMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontMetrics))
      return false;
    if (!(compareTo(this.r4e_1, other.r4e_1) === 0))
      return false;
    if (!(compareTo(this.s4e_1, other.s4e_1) === 0))
      return false;
    if (!(compareTo(this.t4e_1, other.t4e_1) === 0))
      return false;
    if (!(compareTo(this.u4e_1, other.u4e_1) === 0))
      return false;
    if (!(compareTo(this.v4e_1, other.v4e_1) === 0))
      return false;
    if (!(compareTo(this.w4e_1, other.w4e_1) === 0))
      return false;
    if (!(compareTo(this.x4e_1, other.x4e_1) === 0))
      return false;
    if (!(compareTo(this.y4e_1, other.y4e_1) === 0))
      return false;
    if (!(compareTo(this.z4e_1, other.z4e_1) === 0))
      return false;
    if (!(compareTo(this.a4f_1, other.a4f_1) === 0))
      return false;
    if (!(compareTo(this.b4f_1, other.b4f_1) === 0))
      return false;
    if (this.c4f_1 == null ? !(other.c4f_1 == null) : !(this.c4f_1 == other.c4f_1))
      return false;
    if (this.d4f_1 == null ? !(other.d4f_1 == null) : !(this.d4f_1 == other.d4f_1))
      return false;
    if (this.e4f_1 == null ? !(other.e4f_1 == null) : !(this.e4f_1 == other.e4f_1))
      return false;
    return !(this.f4f_1 == null ? !(other.f4f_1 == null) : !(this.f4f_1 == other.f4f_1));
  };
  protoOf(FontMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.r4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.s4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.t4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.u4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.v4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.w4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.x4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.y4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.z4e_1) | 0;
    result = imul(result, PRIME) + toBits(this.a4f_1) | 0;
    result = imul(result, PRIME) + toBits(this.b4f_1) | 0;
    var tmp = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.c4f_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    result = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
    var tmp_0 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_0 = this.d4f_1;
    var tmp1_elvis_lhs_0 = tmp0_safe_receiver_0 == null ? null : hashCode(tmp0_safe_receiver_0);
    result = tmp_0 + (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0) | 0;
    var tmp_1 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_1 = this.e4f_1;
    var tmp1_elvis_lhs_1 = tmp0_safe_receiver_1 == null ? null : hashCode(tmp0_safe_receiver_1);
    result = tmp_1 + (tmp1_elvis_lhs_1 == null ? 0 : tmp1_elvis_lhs_1) | 0;
    var tmp_2 = imul(result, PRIME);
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver_2 = this.f4f_1;
    var tmp1_elvis_lhs_2 = tmp0_safe_receiver_2 == null ? null : hashCode(tmp0_safe_receiver_2);
    result = tmp_2 + (tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2) | 0;
    return result;
  };
  protoOf(FontMetrics).toString = function () {
    return 'FontMetrics(_top=' + this.r4e_1 + ', _ascent=' + this.s4e_1 + ', _descent=' + this.t4e_1 + ', _bottom=' + this.u4e_1 + ', _leading=' + this.v4e_1 + ', _avgCharWidth=' + this.w4e_1 + ', _maxCharWidth=' + this.x4e_1 + ', _xMin=' + this.y4e_1 + ', _xMax=' + this.z4e_1 + ', _xHeight=' + this.a4f_1 + ', _capHeight=' + this.b4f_1 + ', _underlineThickness=' + this.c4f_1 + ', _underlinePosition=' + this.d4f_1 + ', _strikeoutThickness=' + this.e4f_1 + ', _strikeoutPosition=' + this.f4f_1 + ')';
  };
  function fromInteropPointer(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(15);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.g4f(result);
        block($this$interopScope, handle);
        $this$interopScope.h4f(handle, result);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return fromRawData(_this__u8e3s4, result);
  }
  function fromRawData(_this__u8e3s4, rawData) {
    var tmp = rawData[0];
    var tmp_0 = rawData[1];
    var tmp_1 = rawData[2];
    var tmp_2 = rawData[3];
    var tmp_3 = rawData[4];
    var tmp_4 = rawData[5];
    var tmp_5 = rawData[6];
    var tmp_6 = rawData[7];
    var tmp_7 = rawData[8];
    var tmp_8 = rawData[9];
    var tmp_9 = rawData[10];
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_0 = rawData[11];
    var tmp_10 = isNaN_0(this_0) ? null : this_0;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_1 = rawData[12];
    var tmp_11 = isNaN_0(this_1) ? null : this_1;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_2 = rawData[13];
    var tmp_12 = isNaN_0(this_2) ? null : this_2;
    // Inline function 'org.jetbrains.skia.asNumberOrNull' call
    var this_3 = rawData[14];
    var tmp$ret$3 = isNaN_0(this_3) ? null : this_3;
    return new FontMetrics(tmp, tmp_0, tmp_1, tmp_2, tmp_3, tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp_9, tmp_10, tmp_11, tmp_12, tmp$ret$3);
  }
  function Companion_13() {
    Companion_instance_13 = this;
    Companion_instance_59.z48();
    this.i4f_1 = FontMgr_init_$Create$(org_jetbrains_skia_FontMgr__1nDefault(), false);
  }
  var Companion_instance_13;
  function Companion_getInstance_13() {
    if (Companion_instance_13 == null)
      new Companion_13();
    return Companion_instance_13;
  }
  function FontMgr_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Init$_0(ptr, allowClose, $this) {
    RefCnt_init_$Init$_0(ptr, allowClose, $this);
    FontMgr.call($this);
    return $this;
  }
  function FontMgr_init_$Create$(ptr, allowClose) {
    return FontMgr_init_$Init$_0(ptr, allowClose, objectCreate(protoOf(FontMgr)));
  }
  protoOf(FontMgr).l4f = function (data, ttcIndex) {
    var tmp;
    try {
      Stats_instance.t48();
      var ptr = org_jetbrains_skia_FontMgr__1nMakeFromData(this.w48_1, getPtr(data), ttcIndex);
      tmp = ptr === Companion_instance_60.b49() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(data);
    }
    return tmp;
  };
  protoOf(FontMgr).m4f = function (data, ttcIndex, $super) {
    ttcIndex = ttcIndex === VOID ? 0 : ttcIndex;
    return $super === VOID ? this.l4f(data, ttcIndex) : $super.l4f.call(this, data, ttcIndex);
  };
  protoOf(FontMgr).n4f = function (name, style) {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          tmp$ret$0 = org_jetbrains_skia_FontMgr__1nLegacyMakeTypeface(this.w48_1, $this$interopScope.f4a(name), style.o4f_1);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      var ptr = tmp$ret$0;
      tmp = ptr === Companion_instance_60.b49() ? null : new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function FontMgr() {
    Companion_getInstance_13();
  }
  function FontMgrWithFallback(fallbackProvider) {
    FontMgr_init_$Init$(org_jetbrains_skia_FontMgrWithFallback__1nDefaultWithFallbackFontProvider(fallbackProvider.w48_1), this);
  }
  var FontSlant_UPRIGHT_instance;
  var FontSlant_ITALIC_instance;
  var FontSlant_OBLIQUE_instance;
  function values_2() {
    return [FontSlant_UPRIGHT_getInstance(), FontSlant_ITALIC_getInstance(), FontSlant_OBLIQUE_getInstance()];
  }
  function get_entries_2() {
    if ($ENTRIES_2 == null)
      $ENTRIES_2 = enumEntries(values_2());
    return $ENTRIES_2;
  }
  var FontSlant_entriesInitialized;
  function FontSlant_initEntries() {
    if (FontSlant_entriesInitialized)
      return Unit_instance;
    FontSlant_entriesInitialized = true;
    FontSlant_UPRIGHT_instance = new FontSlant('UPRIGHT', 0);
    FontSlant_ITALIC_instance = new FontSlant('ITALIC', 1);
    FontSlant_OBLIQUE_instance = new FontSlant('OBLIQUE', 2);
  }
  var $ENTRIES_2;
  function FontSlant(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function FontSlant_UPRIGHT_getInstance() {
    FontSlant_initEntries();
    return FontSlant_UPRIGHT_instance;
  }
  function FontSlant_ITALIC_getInstance() {
    FontSlant_initEntries();
    return FontSlant_ITALIC_instance;
  }
  function FontSlant_OBLIQUE_getInstance() {
    FontSlant_initEntries();
    return FontSlant_OBLIQUE_instance;
  }
  function FontStyle_init_$Init$(weight, width, slant, $this) {
    FontStyle.call($this);
    $this.o4f_1 = weight & 65535 | (width & 255) << 16 | slant.i2_1 << 24;
    return $this;
  }
  function FontStyle_init_$Create$(weight, width, slant) {
    return FontStyle_init_$Init$(weight, width, slant, objectCreate(protoOf(FontStyle)));
  }
  function FontStyle_init_$Init$_0(value, $this) {
    FontStyle.call($this);
    $this.o4f_1 = value;
    return $this;
  }
  function FontStyle_init_$Create$_0(value) {
    return FontStyle_init_$Init$_0(value, objectCreate(protoOf(FontStyle)));
  }
  function Companion_14() {
    Companion_instance_14 = this;
    this.p4f_1 = FontStyle_init_$Create$(400, 5, FontSlant_UPRIGHT_getInstance());
    this.q4f_1 = FontStyle_init_$Create$(700, 5, FontSlant_UPRIGHT_getInstance());
    this.r4f_1 = FontStyle_init_$Create$(400, 5, FontSlant_ITALIC_getInstance());
    this.s4f_1 = FontStyle_init_$Create$(700, 5, FontSlant_ITALIC_getInstance());
  }
  var Companion_instance_14;
  function Companion_getInstance_14() {
    if (Companion_instance_14 == null)
      new Companion_14();
    return Companion_instance_14;
  }
  protoOf(FontStyle).t4f = function () {
    return this.o4f_1 & 65535;
  };
  protoOf(FontStyle).u4f = function (weight) {
    return FontStyle_init_$Create$(weight, this.b47(), this.v4f());
  };
  protoOf(FontStyle).b47 = function () {
    return this.o4f_1 >> 16 & 255;
  };
  protoOf(FontStyle).v4f = function () {
    return get_entries_2().m(this.o4f_1 >> 24 & 255);
  };
  protoOf(FontStyle).toString = function () {
    return 'FontStyle(weight=' + this.t4f() + ', width=' + this.b47() + ', slant=' + this.v4f().toString() + ')';
  };
  protoOf(FontStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontStyle))
      return false;
    return this.o4f_1 === other.o4f_1;
  };
  protoOf(FontStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.o4f_1 | 0;
    return result;
  };
  function FontStyle() {
    Companion_getInstance_14();
  }
  function FontVariation_init_$Init$(feature, value, $this) {
    FontVariation.call($this, Companion_instance_16.z4d(feature), value);
    return $this;
  }
  function FontVariation_init_$Create$(feature, value) {
    return FontVariation_init_$Init$(feature, value, objectCreate(protoOf(FontVariation)));
  }
  function Companion_15() {
    Companion_instance_15 = this;
    var tmp = this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.w4f_1 = Array(0);
    this.x4f_1 = compilePattern('\\s+');
    this.y4f_1 = compilePattern('([a-z0-9]{4})=(\\d+)');
    this.z4f_1 = 1;
    this.a4g_1 = 2;
  }
  var Companion_instance_15;
  function Companion_getInstance_15() {
    if (Companion_instance_15 == null)
      new Companion_15();
    return Companion_instance_15;
  }
  function FontVariation(_tag, value) {
    Companion_getInstance_15();
    this.b4g_1 = _tag;
    this.c4g_1 = value;
  }
  protoOf(FontVariation).p4e = function () {
    return Companion_instance_16.q4e(this.b4g_1);
  };
  protoOf(FontVariation).toString = function () {
    return this.p4e() + '=' + this.c4g_1;
  };
  protoOf(FontVariation).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof FontVariation))
      return false;
    if (!(this.p4e() === other.p4e()))
      return false;
    return compareTo(this.c4g_1, other.c4g_1) === 0;
  };
  protoOf(FontVariation).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.b4g_1 | 0;
    result = imul(result, PRIME) + toBits(this.c4g_1) | 0;
    return result;
  };
  function Companion_16() {
  }
  protoOf(Companion_16).z4d = function (name) {
    // Inline function 'kotlin.require' call
    if (!(name.length === 4)) {
      var message = "Name must be exactly 4 symbols, got: '" + name + "'";
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.code' call
    var this_0 = charCodeAt(name, 0);
    var tmp = (Char__toInt_impl_vasixd(this_0) & 255) << 24;
    // Inline function 'kotlin.code' call
    var this_1 = charCodeAt(name, 1);
    var tmp_0 = tmp | (Char__toInt_impl_vasixd(this_1) & 255) << 16;
    // Inline function 'kotlin.code' call
    var this_2 = charCodeAt(name, 2);
    var tmp_1 = tmp_0 | (Char__toInt_impl_vasixd(this_2) & 255) << 8;
    // Inline function 'kotlin.code' call
    var this_3 = charCodeAt(name, 3);
    return tmp_1 | Char__toInt_impl_vasixd(this_3) & 255;
  };
  protoOf(Companion_16).q4e = function (tag) {
    // Inline function 'kotlin.charArrayOf' call
    var tmp$ret$0 = charArrayOf([numberToChar(tag >> 24 & 255), numberToChar(tag >> 16 & 255), numberToChar(tag >> 8 & 255), numberToChar(tag & 255)]);
    return concatToString(tmp$ret$0);
  };
  var Companion_instance_16;
  function Companion_getInstance_16() {
    return Companion_instance_16;
  }
  function Companion_17() {
    Companion_instance_17 = this;
    this.d4g_1 = 1;
    this.e4g_1 = new GradientStyle(FilterTileMode_CLAMP_getInstance(), true, null);
  }
  var Companion_instance_17;
  function Companion_getInstance_17() {
    if (Companion_instance_17 == null)
      new Companion_17();
    return Companion_instance_17;
  }
  function GradientStyle(tileMode, isPremul, localMatrix) {
    Companion_getInstance_17();
    this.f4g_1 = tileMode;
    this.g4g_1 = isPremul;
    this.h4g_1 = localMatrix;
  }
  protoOf(GradientStyle).i4g = function () {
    return 0 | (this.g4g_1 ? Companion_getInstance_17().d4g_1 : 0);
  };
  protoOf(GradientStyle).j4g = function () {
    var tmp0_safe_receiver = this.h4g_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y4b_1;
  };
  protoOf(GradientStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof GradientStyle))
      return false;
    if (!(this.g4g_1 === other.g4g_1))
      return false;
    if (!this.f4g_1.equals(other.f4g_1))
      return false;
    return !(this.h4g_1 == null ? !(other.h4g_1 == null) : !equals(this.h4g_1, other.h4g_1));
  };
  protoOf(GradientStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.g4g_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.f4g_1.hashCode() | 0;
    var tmp = imul(result, PRIME);
    var tmp0_safe_receiver = this.h4g_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.hashCode();
    result = tmp + (tmp1_elvis_lhs == null ? 43 : tmp1_elvis_lhs) | 0;
    return result;
  };
  protoOf(GradientStyle).toString = function () {
    return 'GradientStyle(_tileMode=' + this.f4g_1.toString() + ', _premul=' + this.g4g_1 + ', _localMatrix=' + toString_0(this.h4g_1) + ')';
  };
  function IHasImageInfo() {
  }
  function Companion_18() {
  }
  var Companion_instance_18;
  function Companion_getInstance_18() {
    return Companion_instance_18;
  }
  function IRange(start, end) {
    this.k4g_1 = start;
    this.l4g_1 = end;
  }
  protoOf(IRange).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof IRange))
      return false;
    if (!(this.k4g_1 === other.k4g_1))
      return false;
    return this.l4g_1 === other.l4g_1;
  };
  protoOf(IRange).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.k4g_1 | 0;
    result = imul(result, PRIME) + this.l4g_1 | 0;
    return result;
  };
  protoOf(IRange).toString = function () {
    return 'IRange(_start=' + this.k4g_1 + ', _end=' + this.l4g_1 + ')';
  };
  function fromInteropPointer_0(_this__u8e3s4, block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.m4g(result);
        block($this$interopScope, handle);
        $this$interopScope.c4b(handle, result);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    var result_0 = result;
    return new IRange(result_0[0], result_0[1]);
  }
  function Companion_19() {
    Companion_instance_19 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_19).n4g = function (bitmap) {
    var tmp;
    try {
      Stats_instance.t48();
      var ptr = org_jetbrains_skia_Image__1nMakeFromBitmap(getPtr(bitmap));
      if (ptr === Companion_instance_60.b49())
        throw RuntimeException_init_$Create$('Failed to Image::makeFromBitmap ' + bitmap.toString());
      tmp = new Image(ptr);
    }finally {
      reachabilityBarrier(bitmap);
    }
    return tmp;
  };
  protoOf(Companion_19).o4g = function (bytes) {
    Stats_instance.t48();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        tmp$ret$0 = org_jetbrains_skia_Image__1nMakeFromEncoded($this$interopScope.h4d(bytes), bytes.length);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    var ptr = tmp$ret$0;
    // Inline function 'kotlin.require' call
    if (!!(ptr === Companion_instance_60.b49())) {
      var message = 'Failed to Image::makeFromEncoded';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return new Image(ptr);
  };
  var Companion_instance_19;
  function Companion_getInstance_19() {
    if (Companion_instance_19 == null)
      new Companion_19();
    return Companion_instance_19;
  }
  function Image_nGetImageInfo$ref() {
    return constructCallableReference(function (p0, p1, p2) {
      org_jetbrains_skia_Image__1nGetImageInfo(p0, p1, p2);
      return Unit_instance;
    }, 3, 0, 15, 'Image_nGetImageInfo');
  }
  function Image$_get_imageInfo_$lambda_c2a05w(this$0) {
    return function () {
      var tmp;
      if (this$0.g49_1 == null) {
        var tmp_0 = this$0;
        var tmp_1 = Companion_getInstance_20();
        var tmp_2 = this$0.w48_1;
        tmp_0.g49_1 = tmp_1.p49(tmp_2, Image_nGetImageInfo$ref());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function Image(ptr) {
    Companion_getInstance_19();
    RefCnt_init_$Init$(ptr, this);
    this.g49_1 = null;
  }
  protoOf(Image).h49 = function () {
    var tmp;
    try {
      if (this.g49_1 == null) {
        commonSynchronized(this, Image$_get_imageInfo_$lambda_c2a05w(this));
      }
      tmp = ensureNotNull(this.g49_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Image).m49 = function (dst) {
    return this.p4g(null, dst, 0, 0, false);
  };
  protoOf(Image).p4g = function (context, dst, srcX, srcY, cache) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Image__1nReadPixelsBitmap(this.w48_1, getPtr(context), getPtr(dst), srcX, srcY, cache);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(context);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  function ImageInfo_init_$Init$(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo.call($this, new ColorInfo(colorType, alphaType, colorSpace), width, height);
    return $this;
  }
  function ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, $this) {
    ImageInfo_init_$Init$(width, height, get_entries_1().m(colorType), get_entries_0().m(alphaType), colorSpace === Companion_instance_60.b49() ? null : ColorSpace_init_$Create$(colorSpace), $this);
    return $this;
  }
  function ImageInfo_init_$Create$(width, height, colorType, alphaType, colorSpace) {
    return ImageInfo_init_$Init$_0(width, height, colorType, alphaType, colorSpace, objectCreate(protoOf(ImageInfo)));
  }
  function Companion_20() {
    Companion_instance_20 = this;
    this.o49_1 = new ImageInfo(Companion_getInstance_5().u4c_1, 0, 0);
  }
  protoOf(Companion_20).p49 = function (_ptr, _nGetImageInfo) {
    Stats_instance.t48();
    var colorSpacePtr = null;
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(4);
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.m4g(result);
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        var result_0 = new NativePointerArray(1);
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 + 1 | 0);
            var $this$interopScope_0 = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
            var handle_0 = $this$interopScope_0.q4g(result_0);
            _nGetImageInfo(_ptr, handle, handle_0);
            $this$interopScope_0.r4g(handle_0, result_0);
            break $l$block;
          }finally {
            var _unary__edvuaz_1 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
            }
          }
        }
        colorSpacePtr = result_0.m(0);
        $this$interopScope.c4b(handle, result);
        break $l$block_0;
      }finally {
        var _unary__edvuaz_2 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_2 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    // Inline function 'kotlin.let' call
    return ImageInfo_init_$Create$(result[0], result[1], result[2], result[3], ensureNotNull(colorSpacePtr));
  };
  var Companion_instance_20;
  function Companion_getInstance_20() {
    if (Companion_instance_20 == null)
      new Companion_20();
    return Companion_instance_20;
  }
  function ImageInfo(colorInfo, width, height) {
    Companion_getInstance_20();
    this.t49_1 = colorInfo;
    this.u49_1 = width;
    this.v49_1 = height;
  }
  protoOf(ImageInfo).z49 = function () {
    return imul(this.u49_1, this.y4c());
  };
  protoOf(ImageInfo).y4c = function () {
    return this.t49_1.y4c();
  };
  protoOf(ImageInfo).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof ImageInfo))
      return false;
    if (!(this.u49_1 === other.u49_1))
      return false;
    if (!(this.v49_1 === other.v49_1))
      return false;
    return this.t49_1.equals(other.t49_1);
  };
  protoOf(ImageInfo).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.u49_1 | 0;
    result = imul(result, PRIME) + this.v49_1 | 0;
    result = imul(result, PRIME) + this.t49_1.hashCode() | 0;
    return result;
  };
  protoOf(ImageInfo).toString = function () {
    return 'ImageInfo(_colorInfo=' + this.t49_1.toString() + ', _width=' + this.u49_1 + ', _height=' + this.v49_1 + ')';
  };
  function Companion_21() {
    Companion_instance_21 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_21;
  function Companion_getInstance_21() {
    if (Companion_instance_21 == null)
      new Companion_21();
    return Companion_instance_21;
  }
  function ManagedString_init_$Init$(s, $this) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        tmp$ret$0 = org_jetbrains_skia_ManagedString__1nMake($this$interopScope.f4a(s));
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    ManagedString.call($this, tmp$ret$0);
    Stats_instance.t48();
    return $this;
  }
  function ManagedString_init_$Create$(s) {
    return ManagedString_init_$Init$(s, objectCreate(protoOf(ManagedString)));
  }
  function _FinalizerHolder_7() {
    _FinalizerHolder_instance_7 = this;
    this.t4g_1 = org_jetbrains_skia_ManagedString__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_7;
  function _FinalizerHolder_getInstance_7() {
    if (_FinalizerHolder_instance_7 == null)
      new _FinalizerHolder_7();
    return _FinalizerHolder_instance_7;
  }
  function ManagedString(ptr, managed) {
    Companion_getInstance_21();
    managed = managed === VOID ? true : managed;
    Managed.call(this, ptr, _FinalizerHolder_getInstance_7().t4g_1, managed);
  }
  protoOf(ManagedString).toString = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var size = org_jetbrains_skia_ManagedString__nStringSize(this.w48_1);
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Int8Array(size);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          var handle = $this$interopScope.u4g(result);
          org_jetbrains_skia_ManagedString__nStringData(this.w48_1, handle, size);
          $this$interopScope.v4g(handle, result);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = decodeToString(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ManagedString).y4g = function (s) {
    Stats_instance.t48();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        org_jetbrains_skia_ManagedString__1nAppend(this.w48_1, $this$interopScope.f4a(s));
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return this;
  };
  function Companion_22() {
    Companion_instance_22 = this;
    this.z4g_1 = this.a4h(0.0, 0.0);
  }
  protoOf(Companion_22).a4h = function (dx, dy) {
    return new Matrix33(new Float32Array([1.0, 0.0, dx, 0.0, 1.0, dy, 0.0, 0.0, 1.0]));
  };
  var Companion_instance_22;
  function Companion_getInstance_22() {
    if (Companion_instance_22 == null)
      new Companion_22();
    return Companion_instance_22;
  }
  function Matrix33(mat) {
    Companion_getInstance_22();
    // Inline function 'kotlin.require' call
    if (!(mat.length === 9)) {
      var message = 'Expected 9 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.y4b_1 = mat;
  }
  protoOf(Matrix33).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix33))
      return false;
    return contentEquals(this.y4b_1, other.y4b_1);
  };
  protoOf(Matrix33).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.y4b_1) | 0;
    return result;
  };
  protoOf(Matrix33).toString = function () {
    return 'Matrix33(_mat=' + toString(this.y4b_1) + ')';
  };
  function Companion_23() {
    Companion_instance_23 = this;
    this.b4h_1 = new Matrix44(new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]));
  }
  var Companion_instance_23;
  function Companion_getInstance_23() {
    if (Companion_instance_23 == null)
      new Companion_23();
    return Companion_instance_23;
  }
  function Matrix44(mat) {
    Companion_getInstance_23();
    // Inline function 'kotlin.require' call
    if (!(mat.length === 16)) {
      var message = 'Expected 16 elements, got ' + mat.length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.f4c_1 = mat;
  }
  protoOf(Matrix44).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Matrix44))
      return false;
    return contentEquals(this.f4c_1, other.f4c_1);
  };
  protoOf(Matrix44).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + contentHashCode(this.f4c_1) | 0;
    return result;
  };
  protoOf(Matrix44).toString = function () {
    return 'Matrix44(_mat=' + toString(this.f4c_1) + ')';
  };
  var MipmapMode_NONE_instance;
  var MipmapMode_NEAREST_instance;
  var MipmapMode_LINEAR_instance;
  var MipmapMode_entriesInitialized;
  function MipmapMode_initEntries() {
    if (MipmapMode_entriesInitialized)
      return Unit_instance;
    MipmapMode_entriesInitialized = true;
    MipmapMode_NONE_instance = new MipmapMode('NONE', 0);
    MipmapMode_NEAREST_instance = new MipmapMode('NEAREST', 1);
    MipmapMode_LINEAR_instance = new MipmapMode('LINEAR', 2);
  }
  function MipmapMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function MipmapMode_NONE_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NONE_instance;
  }
  function MipmapMode_NEAREST_getInstance() {
    MipmapMode_initEntries();
    return MipmapMode_NEAREST_instance;
  }
  function Companion_24() {
    Companion_instance_24 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_24;
  function Companion_getInstance_24() {
    if (Companion_instance_24 == null)
      new Companion_24();
    return Companion_instance_24;
  }
  function _FinalizerHolder_8() {
    _FinalizerHolder_instance_8 = this;
    this.c4h_1 = org_jetbrains_skia_Paint__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_8;
  function _FinalizerHolder_getInstance_8() {
    if (_FinalizerHolder_instance_8 == null)
      new _FinalizerHolder_8();
    return _FinalizerHolder_instance_8;
  }
  function Paint_init_$Init$($this) {
    Managed.call($this, org_jetbrains_skia_Paint__1nMake(), _FinalizerHolder_getInstance_8().c4h_1);
    Paint.call($this);
    Stats_instance.t48();
    return $this;
  }
  function Paint_init_$Create$() {
    return Paint_init_$Init$(objectCreate(protoOf(Paint)));
  }
  protoOf(Paint).x48 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Paint__1nEquals(this.w48_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Paint).f4h = function () {
    Stats_instance.t48();
    org_jetbrains_skia_Paint__1nReset(this.w48_1);
    return this;
  };
  protoOf(Paint).g4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetAntiAlias(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).h4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetMode(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).i4h = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = get_entries_3().m(org_jetbrains_skia_Paint__1nGetMode(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).j4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetColor(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).k4h = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Paint__1nGetColor(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).l4h = function () {
    var tmp;
    try {
      Stats_instance.t48();
      // Inline function 'org.jetbrains.skia.impl.withResult' call
      var result = new Float32Array(4);
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          var handle = $this$interopScope.g4f(result);
          org_jetbrains_skia_Paint__1nGetColor4f(this.w48_1, handle);
          $this$interopScope.h4f(handle, result);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = Color4f_init_$Create$(result);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).m4h = function (color, colorSpace) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetColor4f(this.w48_1, color.j4c_1, color.k4c_1, color.l4c_1, color.m4c_1, getPtr(colorSpace));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  protoOf(Paint).n4h = function (a) {
    this.m4h(this.l4h().n4c(a), null);
    return this;
  };
  protoOf(Paint).o4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetStrokeWidth(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).p4h = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Paint__1nGetStrokeWidth(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).q4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetStrokeMiter(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).r4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetStrokeCap(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).s4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetStrokeJoin(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).t4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetShader(this.w48_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).u4h = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var shaderPtr = org_jetbrains_skia_Paint__1nGetShader(this.w48_1);
      tmp = shaderPtr === Companion_instance_60.b49() ? null : new Shader(shaderPtr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).v4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetColorFilter(this.w48_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).w4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetBlendMode(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).x4h = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = get_entries().m(org_jetbrains_skia_Paint__1nGetBlendMode(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paint).y4h = function () {
    return this.x4h().equals(BlendMode_SRC_OVER_getInstance());
  };
  protoOf(Paint).z4h = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetPathEffect(this.w48_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(Paint).a4i = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Paint__1nSetImageFilter(this.w48_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  function Paint() {
    Companion_getInstance_24();
  }
  var PaintMode_FILL_instance;
  var PaintMode_STROKE_instance;
  var PaintMode_STROKE_AND_FILL_instance;
  function values_3() {
    return [PaintMode_FILL_getInstance(), PaintMode_STROKE_getInstance(), PaintMode_STROKE_AND_FILL_getInstance()];
  }
  function get_entries_3() {
    if ($ENTRIES_3 == null)
      $ENTRIES_3 = enumEntries(values_3());
    return $ENTRIES_3;
  }
  var PaintMode_entriesInitialized;
  function PaintMode_initEntries() {
    if (PaintMode_entriesInitialized)
      return Unit_instance;
    PaintMode_entriesInitialized = true;
    PaintMode_FILL_instance = new PaintMode('FILL', 0);
    PaintMode_STROKE_instance = new PaintMode('STROKE', 1);
    PaintMode_STROKE_AND_FILL_instance = new PaintMode('STROKE_AND_FILL', 2);
  }
  var $ENTRIES_3;
  function PaintMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintMode_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_FILL_instance;
  }
  function PaintMode_STROKE_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_instance;
  }
  function PaintMode_STROKE_AND_FILL_getInstance() {
    PaintMode_initEntries();
    return PaintMode_STROKE_AND_FILL_instance;
  }
  var PaintStrokeCap_BUTT_instance;
  var PaintStrokeCap_ROUND_instance;
  var PaintStrokeCap_SQUARE_instance;
  var PaintStrokeCap_entriesInitialized;
  function PaintStrokeCap_initEntries() {
    if (PaintStrokeCap_entriesInitialized)
      return Unit_instance;
    PaintStrokeCap_entriesInitialized = true;
    PaintStrokeCap_BUTT_instance = new PaintStrokeCap('BUTT', 0);
    PaintStrokeCap_ROUND_instance = new PaintStrokeCap('ROUND', 1);
    PaintStrokeCap_SQUARE_instance = new PaintStrokeCap('SQUARE', 2);
  }
  function PaintStrokeCap(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeCap_BUTT_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_BUTT_instance;
  }
  function PaintStrokeCap_ROUND_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_ROUND_instance;
  }
  function PaintStrokeCap_SQUARE_getInstance() {
    PaintStrokeCap_initEntries();
    return PaintStrokeCap_SQUARE_instance;
  }
  var PaintStrokeJoin_MITER_instance;
  var PaintStrokeJoin_ROUND_instance;
  var PaintStrokeJoin_BEVEL_instance;
  var PaintStrokeJoin_entriesInitialized;
  function PaintStrokeJoin_initEntries() {
    if (PaintStrokeJoin_entriesInitialized)
      return Unit_instance;
    PaintStrokeJoin_entriesInitialized = true;
    PaintStrokeJoin_MITER_instance = new PaintStrokeJoin('MITER', 0);
    PaintStrokeJoin_ROUND_instance = new PaintStrokeJoin('ROUND', 1);
    PaintStrokeJoin_BEVEL_instance = new PaintStrokeJoin('BEVEL', 2);
  }
  function PaintStrokeJoin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PaintStrokeJoin_MITER_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_MITER_instance;
  }
  function PaintStrokeJoin_ROUND_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_ROUND_instance;
  }
  function PaintStrokeJoin_BEVEL_getInstance() {
    PaintStrokeJoin_initEntries();
    return PaintStrokeJoin_BEVEL_instance;
  }
  function Companion_25() {
    Companion_instance_25 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_25).b4i = function (one, two, op) {
    var tmp;
    try {
      Stats_instance.t48();
      var ptr = org_jetbrains_skia_Path__1nMakeCombining(getPtr(one), getPtr(two), op.i2_1);
      tmp = ptr === Companion_instance_60.b49() ? null : new Path(ptr);
    }finally {
      reachabilityBarrier(one);
      reachabilityBarrier(two);
    }
    return tmp;
  };
  var Companion_instance_25;
  function Companion_getInstance_25() {
    if (Companion_instance_25 == null)
      new Companion_25();
    return Companion_instance_25;
  }
  function _FinalizerHolder_9() {
    _FinalizerHolder_instance_9 = this;
    this.c4i_1 = org_jetbrains_skia_Path__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_9;
  function _FinalizerHolder_getInstance_9() {
    if (_FinalizerHolder_instance_9 == null)
      new _FinalizerHolder_9();
    return _FinalizerHolder_instance_9;
  }
  function Path_init_$Init$($this) {
    Path.call($this, org_jetbrains_skia_Path__1nMake());
    Stats_instance.t48();
    return $this;
  }
  function Path_init_$Create$() {
    return Path_init_$Init$(objectCreate(protoOf(Path)));
  }
  function Path$_get_bounds_$lambda_qr8ora(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_Path__1nGetBounds(this$0.w48_1, it);
      return Unit_instance;
    };
  }
  function Path(ptr) {
    Companion_getInstance_25();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_9().c4i_1);
  }
  protoOf(Path).x48 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Path__1nEquals(this.w48_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).f4i = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = get_entries_4().m(org_jetbrains_skia_Path__1nGetFillMode(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).rl = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Path__1nIsEmpty(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).g4i = function (other) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_Path__1nSwap(this.w48_1, getPtr(other));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Path).h4i = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp_0 = Companion_instance_32;
      tmp = tmp_0.i4i(Path$_get_bounds_$lambda_qr8ora(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Path).i = function () {
    return this.j4i(false);
  };
  protoOf(Path).j4i = function (forceClose) {
    return Companion_getInstance_28().k4i(this, forceClose);
  };
  protoOf(Path).l4i = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Path__1nGetGenerationId(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PathAddMode_APPEND_instance;
  var PathAddMode_EXTEND_instance;
  var PathAddMode_entriesInitialized;
  function PathAddMode_initEntries() {
    if (PathAddMode_entriesInitialized)
      return Unit_instance;
    PathAddMode_entriesInitialized = true;
    PathAddMode_APPEND_instance = new PathAddMode('APPEND', 0);
    PathAddMode_EXTEND_instance = new PathAddMode('EXTEND', 1);
  }
  function PathAddMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathAddMode_APPEND_getInstance() {
    PathAddMode_initEntries();
    return PathAddMode_APPEND_instance;
  }
  function Companion_26() {
    Companion_instance_26 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_26;
  function Companion_getInstance_26() {
    if (Companion_instance_26 == null)
      new Companion_26();
    return Companion_instance_26;
  }
  function _FinalizerHolder_10() {
    _FinalizerHolder_instance_10 = this;
    this.m4i_1 = org_jetbrains_skia_PathBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_10;
  function _FinalizerHolder_getInstance_10() {
    if (_FinalizerHolder_instance_10 == null)
      new _FinalizerHolder_10();
    return _FinalizerHolder_instance_10;
  }
  function PathBuilder_init_$Init$($this) {
    PathBuilder.call($this, org_jetbrains_skia_PathBuilder__1nMake());
    return $this;
  }
  function PathBuilder_init_$Create$() {
    return PathBuilder_init_$Init$(objectCreate(protoOf(PathBuilder)));
  }
  function PathBuilder_init_$Init$_0(path, $this) {
    // Inline function 'kotlin.also' call
    var this_0 = org_jetbrains_skia_PathBuilder__1nMakeFromPath(getPtr(path));
    reachabilityBarrier(path);
    PathBuilder.call($this, this_0);
    return $this;
  }
  function PathBuilder_init_$Create$_0(path) {
    return PathBuilder_init_$Init$_0(path, objectCreate(protoOf(PathBuilder)));
  }
  function PathBuilder(ptr) {
    Companion_getInstance_26();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_10().m4i_1);
  }
  protoOf(PathBuilder).p4i = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = new Path(org_jetbrains_skia_PathBuilder__1nSnapshot(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).q4i = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = new Path(org_jetbrains_skia_PathBuilder__1nDetach(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).r4i = function (fillType) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nSetFillType(this.w48_1, fillType.i2_1);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).f4h = function () {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nReset(this.w48_1);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).s4i = function (x, y) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nMoveTo(this.w48_1, x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).t4i = function (dx, dy) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nRMoveTo(this.w48_1, dx, dy);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).u4i = function (x, y) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nLineTo(this.w48_1, x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).v4i = function (dx, dy) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nRLineTo(this.w48_1, dx, dy);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).w4i = function (x1, y1, x2, y2) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nQuadTo(this.w48_1, x1, y1, x2, y2);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).x4i = function (dx1, dy1, dx2, dy2) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nRQuadTo(this.w48_1, dx1, dy1, dx2, dy2);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).y4i = function (x1, y1, x2, y2, x3, y3) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nCubicTo(this.w48_1, x1, y1, x2, y2, x3, y3);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).z4i = function (dx1, dy1, dx2, dy2, dx3, dy3) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nRCubicTo(this.w48_1, dx1, dy1, dx2, dy2, dx3, dy3);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).a4j = function () {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nClosePath(this.w48_1);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).b4j = function (left, top, right, bottom, dir, start) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nAddRect(this.w48_1, left, top, right, bottom, dir.i2_1, start);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).c4j = function (left, top, right, bottom, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 0 : start;
    return $super === VOID ? this.b4j(left, top, right, bottom, dir, start) : $super.b4j.call(this, left, top, right, bottom, dir, start);
  };
  protoOf(PathBuilder).d4j = function (left, top, right, bottom, radii, dir, start) {
    var tmp;
    try {
      Stats_instance.t48();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          org_jetbrains_skia_PathBuilder__1nAddRRect(this.w48_1, left, top, right, bottom, $this$interopScope.n4b(radii), radii.length, dir.i2_1, start);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathBuilder).e4j = function (left, top, right, bottom, radii, dir, start, $super) {
    dir = dir === VOID ? PathDirection_CLOCKWISE_getInstance() : dir;
    start = start === VOID ? 6 : start;
    return $super === VOID ? this.d4j(left, top, right, bottom, radii, dir, start) : $super.d4j.call(this, left, top, right, bottom, radii, dir, start);
  };
  protoOf(PathBuilder).f4j = function (src, dx, dy, mode) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nAddPathOffset(this.w48_1, getPtr(src), dx, dy, mode.i2_1);
      tmp = this;
    }finally {
      reachabilityBarrier(src);
    }
    return tmp;
  };
  protoOf(PathBuilder).g4j = function (src, dx, dy, mode, $super) {
    mode = mode === VOID ? PathAddMode_APPEND_getInstance() : mode;
    return $super === VOID ? this.f4j(src, dx, dy, mode) : $super.f4j.call(this, src, dx, dy, mode);
  };
  protoOf(PathBuilder).h4j = function (dx, dy) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathBuilder__1nOffset(this.w48_1, dx, dy);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PathDirection_CLOCKWISE_instance;
  var PathDirection_COUNTER_CLOCKWISE_instance;
  var PathDirection_entriesInitialized;
  function PathDirection_initEntries() {
    if (PathDirection_entriesInitialized)
      return Unit_instance;
    PathDirection_entriesInitialized = true;
    PathDirection_CLOCKWISE_instance = new PathDirection('CLOCKWISE', 0);
    PathDirection_COUNTER_CLOCKWISE_instance = new PathDirection('COUNTER_CLOCKWISE', 1);
  }
  function PathDirection(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathDirection_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_CLOCKWISE_instance;
  }
  function PathDirection_COUNTER_CLOCKWISE_getInstance() {
    PathDirection_initEntries();
    return PathDirection_COUNTER_CLOCKWISE_instance;
  }
  var PathFillMode_WINDING_instance;
  var PathFillMode_EVEN_ODD_instance;
  var PathFillMode_INVERSE_WINDING_instance;
  var PathFillMode_INVERSE_EVEN_ODD_instance;
  function values_4() {
    return [PathFillMode_WINDING_getInstance(), PathFillMode_EVEN_ODD_getInstance(), PathFillMode_INVERSE_WINDING_getInstance(), PathFillMode_INVERSE_EVEN_ODD_getInstance()];
  }
  function get_entries_4() {
    if ($ENTRIES_4 == null)
      $ENTRIES_4 = enumEntries(values_4());
    return $ENTRIES_4;
  }
  var PathFillMode_entriesInitialized;
  function PathFillMode_initEntries() {
    if (PathFillMode_entriesInitialized)
      return Unit_instance;
    PathFillMode_entriesInitialized = true;
    PathFillMode_WINDING_instance = new PathFillMode('WINDING', 0);
    PathFillMode_EVEN_ODD_instance = new PathFillMode('EVEN_ODD', 1);
    PathFillMode_INVERSE_WINDING_instance = new PathFillMode('INVERSE_WINDING', 2);
    PathFillMode_INVERSE_EVEN_ODD_instance = new PathFillMode('INVERSE_EVEN_ODD', 3);
  }
  var $ENTRIES_4;
  function PathFillMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathFillMode_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_WINDING_instance;
  }
  function PathFillMode_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_EVEN_ODD_instance;
  }
  function PathFillMode_INVERSE_WINDING_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_WINDING_instance;
  }
  function PathFillMode_INVERSE_EVEN_ODD_getInstance() {
    PathFillMode_initEntries();
    return PathFillMode_INVERSE_EVEN_ODD_instance;
  }
  function Companion_27() {
    Companion_instance_27 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_27;
  function Companion_getInstance_27() {
    if (Companion_instance_27 == null)
      new Companion_27();
    return Companion_instance_27;
  }
  function PathMeasure_init_$Init$($this) {
    PathMeasure.call($this, org_jetbrains_skia_PathMeasure__1nMake());
    return $this;
  }
  function PathMeasure_init_$Create$() {
    return PathMeasure_init_$Init$(objectCreate(protoOf(PathMeasure)));
  }
  function _FinalizerHolder_11() {
    _FinalizerHolder_instance_11 = this;
    this.i4j_1 = org_jetbrains_skia_PathMeasure__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_11;
  function _FinalizerHolder_getInstance_11() {
    if (_FinalizerHolder_instance_11 == null)
      new _FinalizerHolder_11();
    return _FinalizerHolder_instance_11;
  }
  function PathMeasure(ptr) {
    Companion_getInstance_27();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_11().i4j_1);
  }
  protoOf(PathMeasure).l4j = function (path, forceClosed) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_PathMeasure__1nSetPath(this.w48_1, getPtr(path), forceClosed);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(path);
    }
    return tmp;
  };
  protoOf(PathMeasure).a = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_PathMeasure__1nGetLength(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathMeasure).m4j = function (startD, endD, dst, startWithMoveTo) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_PathMeasure__1nGetSegment(this.w48_1, startD, endD, getPtr(dst), startWithMoveTo);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(dst);
    }
    return tmp;
  };
  var PathOp_DIFFERENCE_instance;
  var PathOp_INTERSECT_instance;
  var PathOp_UNION_instance;
  var PathOp_XOR_instance;
  var PathOp_REVERSE_DIFFERENCE_instance;
  var PathOp_entriesInitialized;
  function PathOp_initEntries() {
    if (PathOp_entriesInitialized)
      return Unit_instance;
    PathOp_entriesInitialized = true;
    PathOp_DIFFERENCE_instance = new PathOp('DIFFERENCE', 0);
    PathOp_INTERSECT_instance = new PathOp('INTERSECT', 1);
    PathOp_UNION_instance = new PathOp('UNION', 2);
    PathOp_XOR_instance = new PathOp('XOR', 3);
    PathOp_REVERSE_DIFFERENCE_instance = new PathOp('REVERSE_DIFFERENCE', 4);
  }
  function PathOp(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathOp_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_DIFFERENCE_instance;
  }
  function PathOp_INTERSECT_getInstance() {
    PathOp_initEntries();
    return PathOp_INTERSECT_instance;
  }
  function PathOp_UNION_getInstance() {
    PathOp_initEntries();
    return PathOp_UNION_instance;
  }
  function PathOp_XOR_getInstance() {
    PathOp_initEntries();
    return PathOp_XOR_instance;
  }
  function PathOp_REVERSE_DIFFERENCE_getInstance() {
    PathOp_initEntries();
    return PathOp_REVERSE_DIFFERENCE_instance;
  }
  function PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, $this) {
    PathSegment.call($this, get_entries_5().m(verbOrdinal), new Point(x0, y0), null, null, null, 0.0, false, isClosedContour);
    // Inline function 'kotlin.require' call
    if (!(verbOrdinal === PathVerb_MOVE_getInstance().i2_1 || verbOrdinal === PathVerb_CLOSE_getInstance().i2_1)) {
      // Inline function 'kotlin.collections.toTypedArray' call
      var this_0 = get_entries_5();
      var message = 'Expected MOVE or CLOSE, got ' + copyToArray(this_0)[verbOrdinal].toString();
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return $this;
  }
  function PathSegment_init_$Create$(verbOrdinal, x0, y0, isClosedContour) {
    return PathSegment_init_$Init$(verbOrdinal, x0, y0, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_LINE_getInstance(), new Point(x0, y0), new Point(x1, y1), null, null, 0.0, isCloseLine, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_0(x0, y0, x1, y1, isCloseLine, isClosedContour) {
    return PathSegment_init_$Init$_0(x0, y0, x1, y1, isCloseLine, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_QUAD_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_1(x0, y0, x1, y1, x2, y2, isClosedContour) {
    return PathSegment_init_$Init$_1(x0, y0, x1, y1, x2, y2, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CONIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), null, conicWeight, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour) {
    return PathSegment_init_$Init$_2(x0, y0, x1, y1, x2, y2, conicWeight, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, $this) {
    PathSegment.call($this, PathVerb_CUBIC_getInstance(), new Point(x0, y0), new Point(x1, y1), new Point(x2, y2), new Point(x3, y3), 0.0, false, isClosedContour);
    return $this;
  }
  function PathSegment_init_$Create$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour) {
    return PathSegment_init_$Init$_3(x0, y0, x1, y1, x2, y2, x3, y3, isClosedContour, objectCreate(protoOf(PathSegment)));
  }
  function PathSegment(verb, p0, p1, p2, p3, conicWeight, isCloseLine, isClosedContour) {
    verb = verb === VOID ? PathVerb_DONE_getInstance() : verb;
    p0 = p0 === VOID ? null : p0;
    p1 = p1 === VOID ? null : p1;
    p2 = p2 === VOID ? null : p2;
    p3 = p3 === VOID ? null : p3;
    conicWeight = conicWeight === VOID ? 0.0 : conicWeight;
    isCloseLine = isCloseLine === VOID ? false : isCloseLine;
    isClosedContour = isClosedContour === VOID ? false : isClosedContour;
    this.n4j_1 = verb;
    this.o4j_1 = p0;
    this.p4j_1 = p1;
    this.q4j_1 = p2;
    this.r4j_1 = p3;
    this.s4j_1 = conicWeight;
    this.t4j_1 = isCloseLine;
    this.u4j_1 = isClosedContour;
  }
  protoOf(PathSegment).toString = function () {
    return 'Segment(verb=' + this.n4j_1.toString() + (!this.n4j_1.equals(PathVerb_DONE_getInstance()) ? ', p0=' + toString_0(this.o4j_1) : '') + (this.n4j_1.equals(PathVerb_LINE_getInstance()) || this.n4j_1.equals(PathVerb_QUAD_getInstance()) || this.n4j_1.equals(PathVerb_CONIC_getInstance()) || this.n4j_1.equals(PathVerb_CUBIC_getInstance()) ? ', p1=' + toString_0(this.p4j_1) : '') + (this.n4j_1.equals(PathVerb_QUAD_getInstance()) || this.n4j_1.equals(PathVerb_CONIC_getInstance()) || this.n4j_1.equals(PathVerb_CUBIC_getInstance()) ? ', p2=' + toString_0(this.q4j_1) : '') + (this.n4j_1.equals(PathVerb_CUBIC_getInstance()) ? ', p3=' + toString_0(this.r4j_1) : '') + (this.n4j_1.equals(PathVerb_CONIC_getInstance()) ? ', conicWeight=' + this.s4j_1 : '') + (this.n4j_1.equals(PathVerb_LINE_getInstance()) ? ', closeLine=' + this.t4j_1 : '') + (!this.n4j_1.equals(PathVerb_DONE_getInstance()) ? ', closedContour=' + this.u4j_1 : '') + ')';
  };
  protoOf(PathSegment).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PathSegment))
      return false;
    return this.n4j_1.equals(other.n4j_1) && (!this.n4j_1.equals(PathVerb_DONE_getInstance()) ? equals(this.o4j_1, other.o4j_1) : true) && (this.n4j_1.equals(PathVerb_LINE_getInstance()) || this.n4j_1.equals(PathVerb_QUAD_getInstance()) || this.n4j_1.equals(PathVerb_CONIC_getInstance()) || this.n4j_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.p4j_1, other.p4j_1) : true) && (this.n4j_1.equals(PathVerb_QUAD_getInstance()) || this.n4j_1.equals(PathVerb_CONIC_getInstance()) || this.n4j_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.q4j_1, other.q4j_1) : true) && (this.n4j_1.equals(PathVerb_CUBIC_getInstance()) ? equals(this.r4j_1, other.r4j_1) : true) && (this.n4j_1.equals(PathVerb_CONIC_getInstance()) ? compareTo(other.s4j_1, this.s4j_1) === 0 : true) && (this.n4j_1.equals(PathVerb_LINE_getInstance()) ? this.t4j_1 === other.t4j_1 : true) && (!this.n4j_1.equals(PathVerb_DONE_getInstance()) ? this.u4j_1 === other.u4j_1 : true);
  };
  protoOf(PathSegment).hashCode = function () {
    var tmp;
    switch (this.n4j_1.i2_1) {
      case 6:
        tmp = objectHashes([this.n4j_1]);
        break;
      case 0:
        tmp = objectHashes([this.n4j_1, this.o4j_1, this.u4j_1]);
        break;
      case 1:
        tmp = objectHashes([this.n4j_1, this.o4j_1, this.p4j_1, this.t4j_1, this.u4j_1]);
        break;
      case 2:
        tmp = objectHashes([this.n4j_1, this.o4j_1, this.p4j_1, this.q4j_1, this.u4j_1]);
        break;
      case 3:
        tmp = objectHashes([this.n4j_1, this.o4j_1, this.p4j_1, this.q4j_1, this.s4j_1, this.u4j_1]);
        break;
      case 4:
        tmp = objectHashes([this.n4j_1, this.o4j_1, this.p4j_1, this.q4j_1, this.r4j_1, this.u4j_1]);
        break;
      default:
        throw RuntimeException_init_$Create$('Unreachable');
    }
    return tmp;
  };
  function objectHashes(args) {
    return contentHashCode_0(args);
  }
  function Companion_28() {
    Companion_instance_28 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_28).k4i = function (path, forceClose) {
    var tmp;
    try {
      var i = new PathSegmentIterator(path, org_jetbrains_skia_PathSegmentIterator__1nMake(getPtr(path), forceClose));
      i.y4j_1 = nextSegment(i);
      tmp = i;
    }finally {
      reachabilityBarrier(path);
    }
    return tmp;
  };
  var Companion_instance_28;
  function Companion_getInstance_28() {
    if (Companion_instance_28 == null)
      new Companion_28();
    return Companion_instance_28;
  }
  function nextSegment($this) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(10);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.m4g(result);
        org_jetbrains_skia_PathSegmentIterator__1nNext($this.w48_1, handle);
        $this$interopScope.c4b(handle, result);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return pathSegmentFromIntArray(result);
  }
  function PathSegmentIterator(_path, ptr) {
    Companion_getInstance_28();
    Managed.call(this, ptr, org_jetbrains_skia_PathSegmentIterator__1nGetFinalizer());
    this.x4j_1 = _path;
    this.y4j_1 = null;
    Stats_instance.t48();
  }
  protoOf(PathSegmentIterator).k = function () {
    var tmp;
    try {
      var tmp0_safe_receiver = this.y4j_1;
      if (equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n4j_1, PathVerb_DONE_getInstance()))
        throw NoSuchElementException_init_$Create$();
      var res = this.y4j_1;
      this.y4j_1 = nextSegment(this);
      tmp = res;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PathSegmentIterator).j = function () {
    var tmp0_safe_receiver = this.y4j_1;
    return !equals(tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n4j_1, PathVerb_DONE_getInstance());
  };
  protoOf(PathSegmentIterator).l3 = function () {
    // Inline function 'kotlin.TODO' call
    var reason = 'Not yet implemented';
    throw new NotImplementedError('An operation is not implemented: ' + reason);
  };
  function pathSegmentFromIntArray(points) {
    var context = last(points);
    var verb = context & 7;
    var isClosedBit = context >> 7 & 1;
    var isClosedLineBit = context >> 6 & 1;
    var isClosed = !(isClosedBit === 0);
    var tmp;
    switch (get_entries_5().m(verb).i2_1) {
      case 0:
      case 5:
        // Inline function 'kotlin.fromBits' call

        var bits = points[0];
        var tmp_0 = floatFromBits(bits);
        // Inline function 'kotlin.fromBits' call

        var bits_0 = points[1];
        var tmp$ret$1 = floatFromBits(bits_0);
        tmp = PathSegment_init_$Create$(verb, tmp_0, tmp$ret$1, isClosed);
        break;
      case 1:
        // Inline function 'kotlin.fromBits' call

        var bits_1 = points[0];
        var tmp_1 = floatFromBits(bits_1);
        // Inline function 'kotlin.fromBits' call

        var bits_2 = points[1];
        var tmp_2 = floatFromBits(bits_2);
        // Inline function 'kotlin.fromBits' call

        var bits_3 = points[2];
        var tmp_3 = floatFromBits(bits_3);
        // Inline function 'kotlin.fromBits' call

        var bits_4 = points[3];
        var tmp$ret$5 = floatFromBits(bits_4);
        tmp = PathSegment_init_$Create$_0(tmp_1, tmp_2, tmp_3, tmp$ret$5, !(isClosedLineBit === 0), isClosed);
        break;
      case 2:
        // Inline function 'kotlin.fromBits' call

        var bits_5 = points[0];
        var tmp_4 = floatFromBits(bits_5);
        // Inline function 'kotlin.fromBits' call

        var bits_6 = points[1];
        var tmp_5 = floatFromBits(bits_6);
        // Inline function 'kotlin.fromBits' call

        var bits_7 = points[2];
        var tmp_6 = floatFromBits(bits_7);
        // Inline function 'kotlin.fromBits' call

        var bits_8 = points[3];
        var tmp_7 = floatFromBits(bits_8);
        // Inline function 'kotlin.fromBits' call

        var bits_9 = points[4];
        var tmp_8 = floatFromBits(bits_9);
        // Inline function 'kotlin.fromBits' call

        var bits_10 = points[5];
        var tmp$ret$11 = floatFromBits(bits_10);
        tmp = PathSegment_init_$Create$_1(tmp_4, tmp_5, tmp_6, tmp_7, tmp_8, tmp$ret$11, isClosed);
        break;
      case 3:
        // Inline function 'kotlin.fromBits' call

        var bits_11 = points[0];
        var tmp_9 = floatFromBits(bits_11);
        // Inline function 'kotlin.fromBits' call

        var bits_12 = points[1];
        var tmp_10 = floatFromBits(bits_12);
        // Inline function 'kotlin.fromBits' call

        var bits_13 = points[2];
        var tmp_11 = floatFromBits(bits_13);
        // Inline function 'kotlin.fromBits' call

        var bits_14 = points[3];
        var tmp_12 = floatFromBits(bits_14);
        // Inline function 'kotlin.fromBits' call

        var bits_15 = points[4];
        var tmp_13 = floatFromBits(bits_15);
        // Inline function 'kotlin.fromBits' call

        var bits_16 = points[5];
        var tmp_14 = floatFromBits(bits_16);
        // Inline function 'kotlin.fromBits' call

        var bits_17 = points[8];
        var tmp$ret$18 = floatFromBits(bits_17);
        tmp = PathSegment_init_$Create$_2(tmp_9, tmp_10, tmp_11, tmp_12, tmp_13, tmp_14, tmp$ret$18, isClosed);
        break;
      case 4:
        // Inline function 'kotlin.fromBits' call

        var bits_18 = points[0];
        var tmp_15 = floatFromBits(bits_18);
        // Inline function 'kotlin.fromBits' call

        var bits_19 = points[1];
        var tmp_16 = floatFromBits(bits_19);
        // Inline function 'kotlin.fromBits' call

        var bits_20 = points[2];
        var tmp_17 = floatFromBits(bits_20);
        // Inline function 'kotlin.fromBits' call

        var bits_21 = points[3];
        var tmp_18 = floatFromBits(bits_21);
        // Inline function 'kotlin.fromBits' call

        var bits_22 = points[4];
        var tmp_19 = floatFromBits(bits_22);
        // Inline function 'kotlin.fromBits' call

        var bits_23 = points[5];
        var tmp_20 = floatFromBits(bits_23);
        // Inline function 'kotlin.fromBits' call

        var bits_24 = points[6];
        var tmp_21 = floatFromBits(bits_24);
        // Inline function 'kotlin.fromBits' call

        var bits_25 = points[7];
        var tmp$ret$26 = floatFromBits(bits_25);
        tmp = PathSegment_init_$Create$_3(tmp_15, tmp_16, tmp_17, tmp_18, tmp_19, tmp_20, tmp_21, tmp$ret$26, isClosed);
        break;
      case 6:
        tmp = new PathSegment();
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  var PathVerb_MOVE_instance;
  var PathVerb_LINE_instance;
  var PathVerb_QUAD_instance;
  var PathVerb_CONIC_instance;
  var PathVerb_CUBIC_instance;
  var PathVerb_CLOSE_instance;
  var PathVerb_DONE_instance;
  function values_5() {
    return [PathVerb_MOVE_getInstance(), PathVerb_LINE_getInstance(), PathVerb_QUAD_getInstance(), PathVerb_CONIC_getInstance(), PathVerb_CUBIC_getInstance(), PathVerb_CLOSE_getInstance(), PathVerb_DONE_getInstance()];
  }
  function get_entries_5() {
    if ($ENTRIES_5 == null)
      $ENTRIES_5 = enumEntries(values_5());
    return $ENTRIES_5;
  }
  var PathVerb_entriesInitialized;
  function PathVerb_initEntries() {
    if (PathVerb_entriesInitialized)
      return Unit_instance;
    PathVerb_entriesInitialized = true;
    PathVerb_MOVE_instance = new PathVerb('MOVE', 0);
    PathVerb_LINE_instance = new PathVerb('LINE', 1);
    PathVerb_QUAD_instance = new PathVerb('QUAD', 2);
    PathVerb_CONIC_instance = new PathVerb('CONIC', 3);
    PathVerb_CUBIC_instance = new PathVerb('CUBIC', 4);
    PathVerb_CLOSE_instance = new PathVerb('CLOSE', 5);
    PathVerb_DONE_instance = new PathVerb('DONE', 6);
  }
  var $ENTRIES_5;
  function PathVerb(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PathVerb_MOVE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_MOVE_instance;
  }
  function PathVerb_LINE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_LINE_instance;
  }
  function PathVerb_QUAD_getInstance() {
    PathVerb_initEntries();
    return PathVerb_QUAD_instance;
  }
  function PathVerb_CONIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CONIC_instance;
  }
  function PathVerb_CUBIC_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CUBIC_instance;
  }
  function PathVerb_CLOSE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_CLOSE_instance;
  }
  function PathVerb_DONE_getInstance() {
    PathVerb_initEntries();
    return PathVerb_DONE_instance;
  }
  function Companion_29() {
    Companion_instance_29 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_29;
  function Companion_getInstance_29() {
    if (Companion_instance_29 == null)
      new Companion_29();
    return Companion_instance_29;
  }
  function Picture(ptr, managed) {
    Companion_getInstance_29();
    managed = managed === VOID ? true : managed;
    RefCnt_init_$Init$_0(ptr, managed, this);
  }
  function Companion_30() {
    Companion_instance_30 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_30;
  function Companion_getInstance_30() {
    if (Companion_instance_30 == null)
      new Companion_30();
    return Companion_instance_30;
  }
  function PictureRecorder_init_$Init$($this) {
    PictureRecorder.call($this, org_jetbrains_skia_PictureRecorder__1nMake());
    Stats_instance.t48();
    return $this;
  }
  function PictureRecorder_init_$Create$() {
    return PictureRecorder_init_$Init$(objectCreate(protoOf(PictureRecorder)));
  }
  function _FinalizerHolder_12() {
    _FinalizerHolder_instance_12 = this;
    this.z4j_1 = org_jetbrains_skia_PictureRecorder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_12;
  function _FinalizerHolder_getInstance_12() {
    if (_FinalizerHolder_instance_12 == null)
      new _FinalizerHolder_12();
    return _FinalizerHolder_instance_12;
  }
  function PictureRecorder(ptr) {
    Companion_getInstance_30();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_12().z4j_1);
  }
  protoOf(PictureRecorder).c4k = function (left, top, right, bottom, bbh) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = new Canvas(org_jetbrains_skia_PictureRecorder__1nBeginRecording(this.w48_1, left, top, right, bottom, getPtr(bbh)), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(PictureRecorder).d4k = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = new Picture(org_jetbrains_skia_PictureRecorder__1nFinishRecordingAsPicture(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PixelGeometry_UNKNOWN_instance;
  var PixelGeometry_RGB_H_instance;
  var PixelGeometry_BGR_H_instance;
  var PixelGeometry_RGB_V_instance;
  var PixelGeometry_BGR_V_instance;
  var PixelGeometry_entriesInitialized;
  function PixelGeometry_initEntries() {
    if (PixelGeometry_entriesInitialized)
      return Unit_instance;
    PixelGeometry_entriesInitialized = true;
    PixelGeometry_UNKNOWN_instance = new PixelGeometry('UNKNOWN', 0);
    PixelGeometry_RGB_H_instance = new PixelGeometry('RGB_H', 1);
    PixelGeometry_BGR_H_instance = new PixelGeometry('BGR_H', 2);
    PixelGeometry_RGB_V_instance = new PixelGeometry('RGB_V', 3);
    PixelGeometry_BGR_V_instance = new PixelGeometry('BGR_V', 4);
  }
  function PixelGeometry(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PixelGeometry_UNKNOWN_getInstance() {
    PixelGeometry_initEntries();
    return PixelGeometry_UNKNOWN_instance;
  }
  function Companion_31() {
    Companion_instance_31 = this;
    this.e4k_1 = new Point(0.0, 0.0);
  }
  var Companion_instance_31;
  function Companion_getInstance_31() {
    if (Companion_instance_31 == null)
      new Companion_31();
    return Companion_instance_31;
  }
  function Point(x, y) {
    Companion_getInstance_31();
    this.f4k_1 = x;
    this.g4k_1 = y;
  }
  protoOf(Point).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point))
      return false;
    if (!(compareTo(this.f4k_1, other.f4k_1) === 0))
      return false;
    return compareTo(this.g4k_1, other.g4k_1) === 0;
  };
  protoOf(Point).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.f4k_1) | 0;
    result = imul(result, PRIME) + toBits(this.g4k_1) | 0;
    return result;
  };
  protoOf(Point).toString = function () {
    return 'Point(_x=' + this.f4k_1 + ', _y=' + this.g4k_1 + ')';
  };
  function Point3(x, y, z) {
    this.h4k_1 = x;
    this.i4k_1 = y;
    this.j4k_1 = z;
  }
  protoOf(Point3).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Point3))
      return false;
    if (!(compareTo(this.h4k_1, other.h4k_1) === 0))
      return false;
    if (!(compareTo(this.i4k_1, other.i4k_1) === 0))
      return false;
    return compareTo(this.j4k_1, other.j4k_1) === 0;
  };
  protoOf(Point3).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.h4k_1) | 0;
    result = imul(result, PRIME) + toBits(this.i4k_1) | 0;
    result = imul(result, PRIME) + toBits(this.j4k_1) | 0;
    return result;
  };
  protoOf(Point3).toString = function () {
    return 'Point3(_x=' + this.h4k_1 + ', _y=' + this.i4k_1 + ', _z=' + this.j4k_1 + ')';
  };
  function Rect$Companion$fromInteropPointerNullable$lambda($result, $block) {
    return function ($this$fromInteropPointer, it) {
      $result._v = $block(it);
      return Unit_instance;
    };
  }
  function Companion_32() {
  }
  protoOf(Companion_32).k4k = function (l, t, r, b) {
    return new Rect(l, t, r, b);
  };
  protoOf(Companion_32).l4k = function (w, h) {
    return new Rect(0.0, 0.0, w, h);
  };
  protoOf(Companion_32).m4k = function (l, t, w, h) {
    return new Rect(l, t, l + w, t + h);
  };
  protoOf(Companion_32).i4i = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Float32Array(4);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.g4f(result);
        block($this$interopScope, handle);
        $this$interopScope.h4f(handle, result);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    var result_0 = result;
    return new Rect(result_0[0], result_0[1], result_0[2], result_0[3]);
  };
  protoOf(Companion_32).n4k = function (block) {
    var result = {_v: true};
    var rect = this.i4i(Rect$Companion$fromInteropPointerNullable$lambda(result, block));
    var tmp;
    if (result._v) {
      tmp = rect;
    } else {
      tmp = null;
    }
    return tmp;
  };
  var Companion_instance_32;
  function Companion_getInstance_32() {
    return Companion_instance_32;
  }
  function Rect(left, top, right, bottom) {
    this.t4b_1 = left;
    this.u4b_1 = top;
    this.v4b_1 = right;
    this.w4b_1 = bottom;
  }
  protoOf(Rect).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Rect))
      return false;
    if (!(compareTo(this.t4b_1, other.t4b_1) === 0))
      return false;
    if (!(compareTo(this.u4b_1, other.u4b_1) === 0))
      return false;
    if (!(compareTo(this.v4b_1, other.v4b_1) === 0))
      return false;
    return compareTo(this.w4b_1, other.w4b_1) === 0;
  };
  protoOf(Rect).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.t4b_1) | 0;
    result = imul(result, PRIME) + toBits(this.u4b_1) | 0;
    result = imul(result, PRIME) + toBits(this.v4b_1) | 0;
    result = imul(result, PRIME) + toBits(this.w4b_1) | 0;
    return result;
  };
  protoOf(Rect).toString = function () {
    return 'Rect(_left=' + this.t4b_1 + ', _top=' + this.u4b_1 + ', _right=' + this.v4b_1 + ', _bottom=' + this.w4b_1 + ')';
  };
  function Companion_33() {
    Companion_instance_33 = this;
    this.o4k_1 = new FilterMipmap(FilterMode_NEAREST_getInstance(), MipmapMode_NONE_getInstance());
    this.p4k_1 = new FilterMipmap(FilterMode_LINEAR_getInstance(), MipmapMode_NONE_getInstance());
    this.q4k_1 = new CubicResampler(0.33333334, 0.33333334);
    this.r4k_1 = new CubicResampler(0.0, 0.5);
  }
  var Companion_instance_33;
  function Companion_getInstance_33() {
    if (Companion_instance_33 == null)
      new Companion_33();
    return Companion_instance_33;
  }
  function Companion_34() {
    Companion_instance_34 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_34).s4k = function (x0, y0, x1, y1, colors, positions, style) {
    // Inline function 'kotlin.require' call
    if (!(positions == null || colors.length === positions.length)) {
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.t48();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeLinearGradient(x0, y0, x1, y1, $this$interopScope.b4b(colors), $this$interopScope.n4b(positions), colors.length, style.f4g_1.i2_1, style.i4g(), $this$interopScope.n4b(style.j4g()));
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_34).t4k = function (x, y, r, colors, positions, style) {
    // Inline function 'kotlin.require' call
    if (!(positions == null || colors.length === positions.length)) {
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.t48();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeRadialGradient(x, y, r, $this$interopScope.b4b(colors), $this$interopScope.n4b(positions), colors.length, style.f4g_1.i2_1, style.i4g(), $this$interopScope.n4b(style.j4g()));
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  protoOf(Companion_34).u4k = function (x, y, colors, positions) {
    return this.v4k(x, y, 0.0, 360.0, colors, positions, Companion_getInstance_17().e4g_1);
  };
  protoOf(Companion_34).v4k = function (x, y, startAngle, endAngle, colors, positions, style) {
    // Inline function 'kotlin.require' call
    if (!(positions == null || colors.length === positions.length)) {
      var message = 'colors.length ' + colors.length + '!= positions.length ' + ensureNotNull(positions).length;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    Stats_instance.t48();
    var tmp$ret$2;
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        tmp$ret$2 = org_jetbrains_skia_Shader__1nMakeSweepGradient(x, y, startAngle, endAngle, $this$interopScope.b4b(colors), $this$interopScope.n4b(positions), colors.length, style.f4g_1.i2_1, style.i4g(), $this$interopScope.n4b(style.j4g()));
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return new Shader(tmp$ret$2);
  };
  var Companion_instance_34;
  function Companion_getInstance_34() {
    if (Companion_instance_34 == null)
      new Companion_34();
    return Companion_instance_34;
  }
  function Shader(ptr) {
    Companion_getInstance_34();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Shader).y4k = function (localMatrix) {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          tmp$ret$0 = org_jetbrains_skia_Shader__1nMakeWithLocalMatrix(this.w48_1, $this$interopScope.n4b(localMatrix.y4b_1));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = new Shader(tmp$ret$0);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(localMatrix);
    }
    return tmp;
  };
  function ShadowUtils() {
    ShadowUtils_instance = this;
    Companion_instance_59.z48();
  }
  protoOf(ShadowUtils).z4k = function (canvas, path, zPlaneParams, lightPos, lightRadius, ambientColor, spotColor, transparentOccluder, geometricOnly) {
    Stats_instance.t48();
    var flags = 0;
    if (transparentOccluder)
      flags = flags | 1;
    if (geometricOnly)
      flags = flags | 2;
    try {
      org_jetbrains_skia_ShadowUtils__1nDrawShadow(getPtr(canvas), getPtr(path), zPlaneParams.h4k_1, zPlaneParams.i4k_1, zPlaneParams.j4k_1, lightPos.h4k_1, lightPos.i4k_1, lightPos.j4k_1, lightRadius, ambientColor, spotColor, flags);
    }finally {
      reachabilityBarrier(canvas);
      reachabilityBarrier(path);
    }
  };
  var ShadowUtils_instance;
  function ShadowUtils_getInstance() {
    if (ShadowUtils_instance == null)
      new ShadowUtils();
    return ShadowUtils_instance;
  }
  function ArrayDecoder(ptr, disposePtr) {
    this.a4l_1 = ptr;
    this.b4l_1 = disposePtr;
  }
  protoOf(ArrayDecoder).jy = function () {
    org_jetbrains_skia_StdVectorDecoder__1nDisposeArray(this.a4l_1, this.b4l_1);
  };
  protoOf(ArrayDecoder).c4l = function (index) {
    return org_jetbrains_skia_StdVectorDecoder__1nReleaseElement(this.a4l_1, index);
  };
  protoOf(ArrayDecoder).l = function () {
    return org_jetbrains_skia_StdVectorDecoder__1nGetArraySize(this.a4l_1);
  };
  function Companion_35() {
    Companion_instance_35 = this;
    Companion_instance_59.z48();
  }
  protoOf(Companion_35).d4l = function (context, rt, origin, colorFormat, colorSpace, surfaceProps) {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp$ret$0;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          var tmp_0 = getPtr(context);
          var tmp_1 = getPtr(rt);
          var tmp_2 = getPtr(colorSpace);
          tmp$ret$0 = org_jetbrains_skia_Surface__1nMakeFromBackendRenderTarget(tmp_0, tmp_1, origin.i2_1, colorFormat.i2_1, tmp_2, $this$interopScope.b4b(surfaceProps == null ? null : surfaceProps.e4l()));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      var ptr = tmp$ret$0;
      tmp = ptr === Companion_instance_60.b49() ? null : Surface_init_$Create$_0(ptr, context, rt);
    }finally {
      reachabilityBarrier(context);
      reachabilityBarrier(rt);
      reachabilityBarrier(colorSpace);
    }
    return tmp;
  };
  protoOf(Companion_35).f4l = function (width, height) {
    Stats_instance.t48();
    var ptr = org_jetbrains_skia_Surface__1nMakeRasterN32Premul(width, height);
    // Inline function 'kotlin.require' call
    if (!!(ptr === Companion_instance_60.b49())) {
      var message = 'Failed Surface.makeRasterN32Premul(' + width + ', ' + height + ')';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    return Surface_init_$Create$(ptr);
  };
  var Companion_instance_35;
  function Companion_getInstance_35() {
    if (Companion_instance_35 == null)
      new Companion_35();
    return Companion_instance_35;
  }
  function Surface_init_$Init$(ptr, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.i4l_1 = null;
    $this.j4l_1 = null;
    return $this;
  }
  function Surface_init_$Create$(ptr) {
    return Surface_init_$Init$(ptr, objectCreate(protoOf(Surface)));
  }
  function Surface_init_$Init$_0(ptr, context, renderTarget, $this) {
    RefCnt_init_$Init$(ptr, $this);
    Surface.call($this);
    $this.i4l_1 = context;
    $this.j4l_1 = renderTarget;
    return $this;
  }
  function Surface_init_$Create$_0(ptr, context, renderTarget) {
    return Surface_init_$Init$_0(ptr, context, renderTarget, objectCreate(protoOf(Surface)));
  }
  protoOf(Surface).k4l = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var ptr = org_jetbrains_skia_Surface__1nGetCanvas(this.w48_1);
      var tmp_0;
      if (ptr === Companion_instance_60.b49()) {
        throw IllegalArgumentException_init_$Create$_0();
      } else {
        tmp_0 = new Canvas(ptr, false, this);
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).l4l = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = new Image(org_jetbrains_skia_Surface__1nMakeImageSnapshot(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Surface).m4l = function () {
    var tmp0_safe_receiver = this.i4l_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.s4d(this);
    }
  };
  function Surface() {
    Companion_getInstance_35();
  }
  var SurfaceColorFormat_UNKNOWN_instance;
  var SurfaceColorFormat_ALPHA_8_instance;
  var SurfaceColorFormat_RGB_565_instance;
  var SurfaceColorFormat_ARGB_4444_instance;
  var SurfaceColorFormat_RGBA_8888_instance;
  var SurfaceColorFormat_RGB_888x_instance;
  var SurfaceColorFormat_BGRA_8888_instance;
  var SurfaceColorFormat_RGBA_1010102_instance;
  var SurfaceColorFormat_RGB_101010x_instance;
  var SurfaceColorFormat_GRAY_8_instance;
  var SurfaceColorFormat_RGBA_F16_NORM_instance;
  var SurfaceColorFormat_RGBA_F16_instance;
  var SurfaceColorFormat_RGBA_F32_instance;
  var SurfaceColorFormat_R8G8_UNORM_instance;
  var SurfaceColorFormat_A16_FLOAT_instance;
  var SurfaceColorFormat_R16G16_FLOAT_instance;
  var SurfaceColorFormat_A16_UNORM_instance;
  var SurfaceColorFormat_R16G16_UNORM_instance;
  var SurfaceColorFormat_R16G16B16A16_UNORM_instance;
  var SurfaceColorFormat_entriesInitialized;
  function SurfaceColorFormat_initEntries() {
    if (SurfaceColorFormat_entriesInitialized)
      return Unit_instance;
    SurfaceColorFormat_entriesInitialized = true;
    SurfaceColorFormat_UNKNOWN_instance = new SurfaceColorFormat('UNKNOWN', 0);
    SurfaceColorFormat_ALPHA_8_instance = new SurfaceColorFormat('ALPHA_8', 1);
    SurfaceColorFormat_RGB_565_instance = new SurfaceColorFormat('RGB_565', 2);
    SurfaceColorFormat_ARGB_4444_instance = new SurfaceColorFormat('ARGB_4444', 3);
    SurfaceColorFormat_RGBA_8888_instance = new SurfaceColorFormat('RGBA_8888', 4);
    SurfaceColorFormat_RGB_888x_instance = new SurfaceColorFormat('RGB_888x', 5);
    SurfaceColorFormat_BGRA_8888_instance = new SurfaceColorFormat('BGRA_8888', 6);
    SurfaceColorFormat_RGBA_1010102_instance = new SurfaceColorFormat('RGBA_1010102', 7);
    SurfaceColorFormat_RGB_101010x_instance = new SurfaceColorFormat('RGB_101010x', 8);
    SurfaceColorFormat_GRAY_8_instance = new SurfaceColorFormat('GRAY_8', 9);
    SurfaceColorFormat_RGBA_F16_NORM_instance = new SurfaceColorFormat('RGBA_F16_NORM', 10);
    SurfaceColorFormat_RGBA_F16_instance = new SurfaceColorFormat('RGBA_F16', 11);
    SurfaceColorFormat_RGBA_F32_instance = new SurfaceColorFormat('RGBA_F32', 12);
    SurfaceColorFormat_R8G8_UNORM_instance = new SurfaceColorFormat('R8G8_UNORM', 13);
    SurfaceColorFormat_A16_FLOAT_instance = new SurfaceColorFormat('A16_FLOAT', 14);
    SurfaceColorFormat_R16G16_FLOAT_instance = new SurfaceColorFormat('R16G16_FLOAT', 15);
    SurfaceColorFormat_A16_UNORM_instance = new SurfaceColorFormat('A16_UNORM', 16);
    SurfaceColorFormat_R16G16_UNORM_instance = new SurfaceColorFormat('R16G16_UNORM', 17);
    SurfaceColorFormat_R16G16B16A16_UNORM_instance = new SurfaceColorFormat('R16G16B16A16_UNORM', 18);
  }
  function SurfaceColorFormat(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceColorFormat_RGBA_8888_getInstance() {
    SurfaceColorFormat_initEntries();
    return SurfaceColorFormat_RGBA_8888_instance;
  }
  var SurfaceOrigin_TOP_LEFT_instance;
  var SurfaceOrigin_BOTTOM_LEFT_instance;
  var SurfaceOrigin_entriesInitialized;
  function SurfaceOrigin_initEntries() {
    if (SurfaceOrigin_entriesInitialized)
      return Unit_instance;
    SurfaceOrigin_entriesInitialized = true;
    SurfaceOrigin_TOP_LEFT_instance = new SurfaceOrigin('TOP_LEFT', 0);
    SurfaceOrigin_BOTTOM_LEFT_instance = new SurfaceOrigin('BOTTOM_LEFT', 1);
  }
  function SurfaceOrigin(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SurfaceOrigin_BOTTOM_LEFT_getInstance() {
    SurfaceOrigin_initEntries();
    return SurfaceOrigin_BOTTOM_LEFT_instance;
  }
  function _getPixelGeometryOrdinal($this) {
    return $this.e4b_1.i2_1;
  }
  function SurfaceProps(isDeviceIndependentFonts, pixelGeometry) {
    isDeviceIndependentFonts = isDeviceIndependentFonts === VOID ? false : isDeviceIndependentFonts;
    pixelGeometry = pixelGeometry === VOID ? PixelGeometry_UNKNOWN_getInstance() : pixelGeometry;
    this.d4b_1 = isDeviceIndependentFonts;
    this.e4b_1 = pixelGeometry;
  }
  protoOf(SurfaceProps).f4b = function () {
    return 0 | (this.d4b_1 ? 1 : 0);
  };
  protoOf(SurfaceProps).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SurfaceProps))
      return false;
    if (!(this.d4b_1 === other.d4b_1))
      return false;
    return this.e4b_1.equals(other.e4b_1);
  };
  protoOf(SurfaceProps).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.d4b_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.e4b_1.hashCode() | 0;
    return result;
  };
  protoOf(SurfaceProps).toString = function () {
    return 'SurfaceProps(_deviceIndependentFonts=' + this.d4b_1 + ', _pixelGeometry=' + this.e4b_1.toString() + ')';
  };
  protoOf(SurfaceProps).e4l = function () {
    // Inline function 'kotlin.intArrayOf' call
    return new Int32Array([this.f4b(), _getPixelGeometryOrdinal(this)]);
  };
  function Companion_36() {
    Companion_instance_36 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_36;
  function Companion_getInstance_36() {
    if (Companion_instance_36 == null)
      new Companion_36();
    return Companion_instance_36;
  }
  function Typeface(ptr) {
    Companion_getInstance_36();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(Typeface).p4l = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_Typeface__1nGetFontStyle(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).q4l = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_Typeface__1nGetUniqueId(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).x48 = function (other) {
    var tmp;
    try {
      tmp = org_jetbrains_skia_Typeface__1nEquals(this.w48_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(Typeface).r4l = function (variations, collectionIndex) {
    var tmp;
    try {
      // Inline function 'kotlin.collections.isEmpty' call
      if (variations.length === 0)
        return this;
      Stats_instance.t48();
      var variationsCount = imul(variations.length, 2);
      // Inline function 'org.jetbrains.skiko.internal.unpackTo' call
      var destinationArray = new Int32Array(variationsCount);
      var targetIndex = 0;
      var inductionVariable = 0;
      var last = variations.length - 1 | 0;
      if (inductionVariable <= last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0 = variations[i];
          var idx = targetIndex;
          destinationArray[idx] = tmp0.b4g_1;
          destinationArray[idx + 1 | 0] = toRawBits(tmp0.c4g_1);
          targetIndex = idx + 2 | 0;
        }
         while (inductionVariable <= last);
      var variationsData = destinationArray;
      var tmp$ret$3;
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          tmp$ret$3 = org_jetbrains_skia_Typeface__1nMakeClone(this.w48_1, $this$interopScope.b4b(variationsData), variationsCount, collectionIndex);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      var ptr = tmp$ret$3;
      // Inline function 'kotlin.require' call
      if (!!(ptr === Companion_instance_60.b49())) {
        var message = 'Failed to clone Typeface ' + this.toString() + ' with ' + contentToString(variations);
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      tmp = new Typeface(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).s4l = function (variations, collectionIndex, $super) {
    collectionIndex = collectionIndex === VOID ? 0 : collectionIndex;
    return $super === VOID ? this.r4l(variations, collectionIndex) : $super.r4l.call(this, variations, collectionIndex);
  };
  protoOf(Typeface).t4l = function () {
    var tmp;
    try {
      Stats_instance.t48();
      // Inline function 'org.jetbrains.skia.impl.withStringResult' call
      var tmp$ret$1 = org_jetbrains_skia_Typeface__1nGetFamilyName(this.w48_1);
      // Inline function 'org.jetbrains.skia.impl.use' call
      var this_0 = new ManagedString(tmp$ret$1);
      var tmp_0;
      try {
        tmp_0 = this_0.toString();
      }finally {
        this_0.q2g();
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Typeface).toString = function () {
    return "Typeface(familyName='" + this.t4l() + "', fontStyle=" + this.p4l().toString() + ', uniqueId=' + this.q4l() + ')';
  };
  function Companion_37() {
    Companion_instance_37 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_37;
  function Companion_getInstance_37() {
    if (Companion_instance_37 == null)
      new Companion_37();
    return Companion_instance_37;
  }
  function _FinalizerHolder_13() {
    _FinalizerHolder_instance_13 = this;
    this.u4l_1 = org_jetbrains_skia_U16String__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_13;
  function _FinalizerHolder_getInstance_13() {
    if (_FinalizerHolder_instance_13 == null)
      new _FinalizerHolder_13();
    return _FinalizerHolder_instance_13;
  }
  function U16String(ptr) {
    Companion_getInstance_37();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_13().u4l_1);
  }
  function CharDirection() {
    CharDirection_instance = this;
    Companion_instance_59.z48();
    this.v4l_1 = 0;
    this.w4l_1 = 1;
    this.x4l_1 = 2;
    this.y4l_1 = 3;
    this.z4l_1 = 4;
    this.a4m_1 = 5;
    this.b4m_1 = 6;
    this.c4m_1 = 7;
    this.d4m_1 = 8;
    this.e4m_1 = 9;
    this.f4m_1 = 10;
    this.g4m_1 = 11;
    this.h4m_1 = 12;
    this.i4m_1 = 13;
    this.j4m_1 = 14;
    this.k4m_1 = 15;
    this.l4m_1 = 16;
    this.m4m_1 = 17;
    this.n4m_1 = 18;
    this.o4m_1 = 19;
    this.p4m_1 = 20;
    this.q4m_1 = 21;
    this.r4m_1 = 22;
  }
  protoOf(CharDirection).s4m = function (codePoint) {
    Stats_instance.t48();
    return org_jetbrains_skia_icu_Unicode__1nCharDirection(codePoint);
  };
  var CharDirection_instance;
  function CharDirection_getInstance() {
    if (CharDirection_instance == null)
      new CharDirection();
    return CharDirection_instance;
  }
  function getPtr(n) {
    var tmp1_elvis_lhs = n == null ? null : n.w48_1;
    return tmp1_elvis_lhs == null ? Companion_instance_60.b49() : tmp1_elvis_lhs;
  }
  function refCntToString(_this__u8e3s4, managedString, nullPointer) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7(managedString);
    this_0.hb(this_0.a() - 1 | 0);
    if (_this__u8e3s4.w48_1 === nullPointer) {
      this_0.q7(', disposed');
    } else {
      this_0.q7(', refCount=');
      this_0.cb(_this__u8e3s4.t4c());
    }
    this_0.r7(_Char___init__impl__6a9atx(41));
    return this_0.toString();
  }
  var Alignment_LEFT_instance;
  var Alignment_RIGHT_instance;
  var Alignment_CENTER_instance;
  var Alignment_JUSTIFY_instance;
  var Alignment_START_instance;
  var Alignment_END_instance;
  var Alignment_entriesInitialized;
  function Alignment_initEntries() {
    if (Alignment_entriesInitialized)
      return Unit_instance;
    Alignment_entriesInitialized = true;
    Alignment_LEFT_instance = new Alignment('LEFT', 0);
    Alignment_RIGHT_instance = new Alignment('RIGHT', 1);
    Alignment_CENTER_instance = new Alignment('CENTER', 2);
    Alignment_JUSTIFY_instance = new Alignment('JUSTIFY', 3);
    Alignment_START_instance = new Alignment('START', 4);
    Alignment_END_instance = new Alignment('END', 5);
  }
  function Alignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Alignment_LEFT_getInstance() {
    Alignment_initEntries();
    return Alignment_LEFT_instance;
  }
  function Alignment_RIGHT_getInstance() {
    Alignment_initEntries();
    return Alignment_RIGHT_instance;
  }
  function Alignment_CENTER_getInstance() {
    Alignment_initEntries();
    return Alignment_CENTER_instance;
  }
  function Alignment_JUSTIFY_getInstance() {
    Alignment_initEntries();
    return Alignment_JUSTIFY_instance;
  }
  function Alignment_START_getInstance() {
    Alignment_initEntries();
    return Alignment_START_instance;
  }
  function Alignment_END_getInstance() {
    Alignment_initEntries();
    return Alignment_END_instance;
  }
  var BaselineMode_ALPHABETIC_instance;
  var BaselineMode_IDEOGRAPHIC_instance;
  var BaselineMode_entriesInitialized;
  function BaselineMode_initEntries() {
    if (BaselineMode_entriesInitialized)
      return Unit_instance;
    BaselineMode_entriesInitialized = true;
    BaselineMode_ALPHABETIC_instance = new BaselineMode('ALPHABETIC', 0);
    BaselineMode_IDEOGRAPHIC_instance = new BaselineMode('IDEOGRAPHIC', 1);
  }
  function BaselineMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BaselineMode_ALPHABETIC_getInstance() {
    BaselineMode_initEntries();
    return BaselineMode_ALPHABETIC_instance;
  }
  var DecorationLineStyle_SOLID_instance;
  var DecorationLineStyle_DOUBLE_instance;
  var DecorationLineStyle_DOTTED_instance;
  var DecorationLineStyle_DASHED_instance;
  var DecorationLineStyle_WAVY_instance;
  var DecorationLineStyle_entriesInitialized;
  function DecorationLineStyle_initEntries() {
    if (DecorationLineStyle_entriesInitialized)
      return Unit_instance;
    DecorationLineStyle_entriesInitialized = true;
    DecorationLineStyle_SOLID_instance = new DecorationLineStyle('SOLID', 0);
    DecorationLineStyle_DOUBLE_instance = new DecorationLineStyle('DOUBLE', 1);
    DecorationLineStyle_DOTTED_instance = new DecorationLineStyle('DOTTED', 2);
    DecorationLineStyle_DASHED_instance = new DecorationLineStyle('DASHED', 3);
    DecorationLineStyle_WAVY_instance = new DecorationLineStyle('WAVY', 4);
  }
  function DecorationLineStyle(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function DecorationLineStyle_SOLID_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_SOLID_instance;
  }
  function DecorationLineStyle_DOUBLE_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOUBLE_instance;
  }
  function DecorationLineStyle_DOTTED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DOTTED_instance;
  }
  function DecorationLineStyle_DASHED_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_DASHED_instance;
  }
  function DecorationLineStyle_WAVY_getInstance() {
    DecorationLineStyle_initEntries();
    return DecorationLineStyle_WAVY_instance;
  }
  function Companion_38() {
    Companion_instance_38 = this;
    this.t4m_1 = new DecorationStyle(false, false, false, true, -16777216, DecorationLineStyle_SOLID_getInstance(), 1.0);
  }
  var Companion_instance_38;
  function Companion_getInstance_38() {
    if (Companion_instance_38 == null)
      new Companion_38();
    return Companion_instance_38;
  }
  function DecorationStyle(_underline, _overline, _lineThrough, _gaps, color, lineStyle, thicknessMultiplier) {
    Companion_getInstance_38();
    this.u4m_1 = _underline;
    this.v4m_1 = _overline;
    this.w4m_1 = _lineThrough;
    this.x4m_1 = _gaps;
    this.y4m_1 = color;
    this.z4m_1 = lineStyle;
    this.a4n_1 = thicknessMultiplier;
  }
  protoOf(DecorationStyle).b4n = function () {
    return this.z4m_1;
  };
  protoOf(DecorationStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof DecorationStyle))
      return false;
    if (!(this.u4m_1 === other.u4m_1))
      return false;
    if (!(this.v4m_1 === other.v4m_1))
      return false;
    if (!(this.w4m_1 === other.w4m_1))
      return false;
    if (!(this.x4m_1 === other.x4m_1))
      return false;
    if (!(this.y4m_1 === other.y4m_1))
      return false;
    if (!(compareTo(this.a4n_1, other.a4n_1) === 0))
      return false;
    return this.b4n().equals(other.b4n());
  };
  protoOf(DecorationStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + (this.u4m_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.v4m_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.w4m_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + (this.x4m_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + this.y4m_1 | 0;
    result = imul(result, PRIME) + toBits(this.a4n_1) | 0;
    result = imul(result, PRIME) + this.b4n().hashCode() | 0;
    return result;
  };
  protoOf(DecorationStyle).toString = function () {
    return 'DecorationStyle(_underline=' + this.u4m_1 + ', _overline=' + this.v4m_1 + ', _lineThrough=' + this.w4m_1 + ', _gaps=' + this.x4m_1 + ', _color=' + this.y4m_1 + ', _lineStyle=' + this.b4n().toString() + ', _thicknessMultiplier=' + this.a4n_1 + ')';
  };
  var Direction_RTL_instance;
  var Direction_LTR_instance;
  function values_6() {
    return [Direction_RTL_getInstance(), Direction_LTR_getInstance()];
  }
  function get_entries_6() {
    if ($ENTRIES_6 == null)
      $ENTRIES_6 = enumEntries(values_6());
    return $ENTRIES_6;
  }
  var Direction_entriesInitialized;
  function Direction_initEntries() {
    if (Direction_entriesInitialized)
      return Unit_instance;
    Direction_entriesInitialized = true;
    Direction_RTL_instance = new Direction('RTL', 0);
    Direction_LTR_instance = new Direction('LTR', 1);
  }
  var $ENTRIES_6;
  function Direction(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function Direction_RTL_getInstance() {
    Direction_initEntries();
    return Direction_RTL_instance;
  }
  function Direction_LTR_getInstance() {
    Direction_initEntries();
    return Direction_LTR_instance;
  }
  function Companion_39() {
    Companion_instance_39 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_39;
  function Companion_getInstance_39() {
    if (Companion_instance_39 == null)
      new Companion_39();
    return Companion_instance_39;
  }
  function FontCollection_init_$Init$($this) {
    FontCollection.call($this, org_jetbrains_skia_paragraph_FontCollection__1nMake());
    Stats_instance.t48();
    return $this;
  }
  function FontCollection_init_$Create$() {
    return FontCollection_init_$Init$(objectCreate(protoOf(FontCollection)));
  }
  function FontCollection(ptr) {
    Companion_getInstance_39();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(FontCollection).e4n = function (fontMgr) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_FontCollection__1nSetAssetFontManager(this.w48_1, getPtr(fontMgr), Companion_instance_60.b49());
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).f4n = function (fontMgr) {
    return this.g4n(fontMgr, null);
  };
  protoOf(FontCollection).g4n = function (fontMgr, defaultFamilyName) {
    var tmp;
    try {
      Stats_instance.t48();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          org_jetbrains_skia_paragraph_FontCollection__1nSetDefaultFontManager(this.w48_1, getPtr(fontMgr), $this$interopScope.f4a(defaultFamilyName));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(fontMgr);
    }
    return tmp;
  };
  protoOf(FontCollection).h4n = function (familyNames, style) {
    var tmp;
    try {
      Stats_instance.t48();
      // Inline function 'org.jetbrains.skia.arrayDecoderScope' call
      var arrayDecoder = null;
      var tmp_0;
      try {
        var tmp$ret$2;
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
            var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
            var tmp_1 = this.w48_1;
            var tmp_2 = $this$interopScope.i4n(familyNames);
            var tmp1_elvis_lhs = familyNames == null ? null : familyNames.length;
            tmp$ret$2 = org_jetbrains_skia_paragraph_FontCollection__1nFindTypefaces(tmp_1, tmp_2, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs, style.o4f_1);
            break $l$block;
          }finally {
            var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
            }
          }
        }
        arrayDecoder = new ArrayDecoder(tmp$ret$2, org_jetbrains_skia_impl_RefCnt__getFinalizer());
        var arrayDecoder_0 = arrayDecoder;
        // Inline function 'kotlin.collections.map' call
        var this_0 = until(0, arrayDecoder_0.l());
        // Inline function 'kotlin.collections.mapTo' call
        var destination = ArrayList_init_$Create$(collectionSizeOrDefault(this_0, 10));
        var inductionVariable = this_0.x_1;
        var last = this_0.y_1;
        if (inductionVariable <= last)
          do {
            var item = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var i = item;
            var tmp$ret$7 = new Typeface(arrayDecoder_0.c4l(i));
            destination.g(tmp$ret$7);
          }
           while (!(item === last));
        // Inline function 'kotlin.collections.toTypedArray' call
        tmp_0 = copyToArray(destination);
      }finally {
        var tmp0_safe_receiver = arrayDecoder;
        if (tmp0_safe_receiver == null)
          null;
        else {
          tmp0_safe_receiver.jy();
        }
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var HeightMode_ALL_instance;
  var HeightMode_DISABLE_FIRST_ASCENT_instance;
  var HeightMode_DISABLE_LAST_DESCENT_instance;
  var HeightMode_DISABLE_ALL_instance;
  var HeightMode_entriesInitialized;
  function HeightMode_initEntries() {
    if (HeightMode_entriesInitialized)
      return Unit_instance;
    HeightMode_entriesInitialized = true;
    HeightMode_ALL_instance = new HeightMode('ALL', 0);
    HeightMode_DISABLE_FIRST_ASCENT_instance = new HeightMode('DISABLE_FIRST_ASCENT', 1);
    HeightMode_DISABLE_LAST_DESCENT_instance = new HeightMode('DISABLE_LAST_DESCENT', 2);
    HeightMode_DISABLE_ALL_instance = new HeightMode('DISABLE_ALL', 3);
  }
  function HeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function HeightMode_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_ALL_instance;
  }
  function HeightMode_DISABLE_FIRST_ASCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_FIRST_ASCENT_instance;
  }
  function HeightMode_DISABLE_LAST_DESCENT_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_LAST_DESCENT_instance;
  }
  function HeightMode_DISABLE_ALL_getInstance() {
    HeightMode_initEntries();
    return HeightMode_DISABLE_ALL_instance;
  }
  function Companion_40() {
  }
  protoOf(Companion_40).j4n = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nGetArraySize(array);
  };
  protoOf(Companion_40).k4n = function (array) {
    return org_jetbrains_skia_paragraph_LineMetrics__1nDisposeArray(array);
  };
  protoOf(Companion_40).l4n = function (array, index) {
    var intArray = new Int32Array(6);
    var doubleArray = new Float64Array(7);
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    $l$block_0: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.m4g(intArray);
        // Inline function 'org.jetbrains.skia.impl.withResult' call
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 + 1 | 0);
            var $this$interopScope_0 = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
            var handle_0 = $this$interopScope_0.m4n(doubleArray);
            org_jetbrains_skia_paragraph_LineMetrics__1nGetArrayElement(array, index, handle, handle_0);
            $this$interopScope_0.n4n(handle_0, doubleArray);
            break $l$block;
          }finally {
            var _unary__edvuaz_1 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_1 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
            }
          }
        }
        $this$interopScope.c4b(handle, intArray);
        break $l$block_0;
      }finally {
        var _unary__edvuaz_2 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_2 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return new LineMetrics(intArray[0], intArray[1], intArray[2], intArray[3], !(intArray[4] === 0), doubleArray[0], doubleArray[1], doubleArray[2], doubleArray[3], doubleArray[4], doubleArray[5], doubleArray[6], intArray[5]);
  };
  var Companion_instance_40;
  function Companion_getInstance_40() {
    return Companion_instance_40;
  }
  function LineMetrics(startIndex, endIndex, endExcludingWhitespaces, endIncludingNewline, isHardBreak, ascent, descent, unscaledAscent, height, width, left, baseline, lineNumber) {
    this.o4n_1 = startIndex;
    this.p4n_1 = endIndex;
    this.q4n_1 = endExcludingWhitespaces;
    this.r4n_1 = endIncludingNewline;
    this.s4n_1 = isHardBreak;
    this.t4n_1 = ascent;
    this.u4n_1 = descent;
    this.v4n_1 = unscaledAscent;
    this.w4n_1 = height;
    this.x4n_1 = width;
    this.y4n_1 = left;
    this.z4n_1 = baseline;
    this.a4o_1 = lineNumber;
  }
  protoOf(LineMetrics).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof LineMetrics))
      return false;
    if (!(this.o4n_1 === other.o4n_1))
      return false;
    if (!(this.p4n_1 === other.p4n_1))
      return false;
    if (!(this.q4n_1 === other.q4n_1))
      return false;
    if (!(this.r4n_1 === other.r4n_1))
      return false;
    if (!(this.s4n_1 === other.s4n_1))
      return false;
    if (!(compareTo(this.t4n_1, other.t4n_1) === 0))
      return false;
    if (!(compareTo(this.u4n_1, other.u4n_1) === 0))
      return false;
    if (!(compareTo(this.v4n_1, other.v4n_1) === 0))
      return false;
    if (!(compareTo(this.w4n_1, other.w4n_1) === 0))
      return false;
    if (!(compareTo(this.x4n_1, other.x4n_1) === 0))
      return false;
    if (!(compareTo(this.y4n_1, other.y4n_1) === 0))
      return false;
    if (!(compareTo(this.z4n_1, other.z4n_1) === 0))
      return false;
    return this.a4o_1 === other.a4o_1;
  };
  protoOf(LineMetrics).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.o4n_1 | 0;
    result = imul(result, PRIME) + this.p4n_1 | 0;
    result = imul(result, PRIME) + this.q4n_1 | 0;
    result = imul(result, PRIME) + this.r4n_1 | 0;
    result = imul(result, PRIME) + (this.s4n_1 ? 79 : 97) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.t4n_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.u4n_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.v4n_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.w4n_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.x4n_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.y4n_1)) | 0;
    result = imul(result, PRIME) + convertToInt(toBits_0(this.z4n_1)) | 0;
    result = imul(result, PRIME) + this.a4o_1 | 0;
    return result;
  };
  protoOf(LineMetrics).toString = function () {
    return 'LineMetrics(_startIndex=' + this.o4n_1 + ', _endIndex=' + this.p4n_1 + ', _endExcludingWhitespaces=' + this.q4n_1 + ', _endIncludingNewline=' + this.r4n_1 + ', _hardBreak=' + this.s4n_1 + ', _ascent=' + this.t4n_1 + ', _descent=' + this.u4n_1 + ', _unscaledAscent=' + this.v4n_1 + ', _height=' + this.w4n_1 + ', _width=' + this.x4n_1 + ', _left=' + this.y4n_1 + ', _baseline=' + this.z4n_1 + ', _lineNumber=' + this.a4o_1 + ')';
  };
  function Companion_41() {
    Companion_instance_41 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_41;
  function Companion_getInstance_41() {
    if (Companion_instance_41 == null)
      new Companion_41();
    return Companion_instance_41;
  }
  function _FinalizerHolder_14() {
    _FinalizerHolder_instance_14 = this;
    this.b4o_1 = org_jetbrains_skia_paragraph_Paragraph__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_14;
  function _FinalizerHolder_getInstance_14() {
    if (_FinalizerHolder_instance_14 == null)
      new _FinalizerHolder_14();
    return _FinalizerHolder_instance_14;
  }
  function Paragraph$getWordBoundary$lambda(this$0, $offset) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_Paragraph__1nGetWordBoundary(this$0.w48_1, $offset, it);
      return Unit_instance;
    };
  }
  function Paragraph(ptr, text) {
    Companion_getInstance_41();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_14().b4o_1);
    Stats_instance.t48();
    this.e4o_1 = text;
  }
  protoOf(Paragraph).q2g = function () {
    if (!(this.e4o_1 == null)) {
      ensureNotNull(this.e4o_1).q2g();
      this.e4o_1 = null;
    }
    protoOf(Managed).q2g.call(this);
  };
  protoOf(Paragraph).c47 = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetHeight(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).f4o = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMinIntrinsicWidth(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).g4o = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetMaxIntrinsicWidth(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).h4o = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetAlphabeticBaseline(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).i4o = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nDidExceedMaxLines(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).j4o = function (width) {
    Stats_instance.t48();
    org_jetbrains_skia_paragraph_Paragraph__1nLayout(this.w48_1, width);
    return this;
  };
  protoOf(Paragraph).k4o = function (canvas, x, y) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_Paragraph__1nPaint(this.w48_1, getPtr(canvas), x, y);
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  protoOf(Paragraph).l4o = function (start, end, rectHeightMode, rectWidthMode) {
    var tmp;
    try {
      Stats_instance.t48();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForRange(this.w48_1, start, end, rectHeightMode.i2_1, rectWidthMode.i2_1);
          var size = Companion_instance_45.j4n(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = Array(size);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_45.l4n(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_45.k4n(this_0);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).m4o = function () {
    var tmp;
    try {
      Stats_instance.t48();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
          var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetRectsForPlaceholders(this.w48_1);
          var size = Companion_instance_45.j4n(this_0);
          var tmp_0 = 0;
          // Inline function 'kotlin.arrayOfNulls' call
          var tmp_1 = Array(size);
          while (tmp_0 < size) {
            var tmp_2 = tmp_0;
            tmp_1[tmp_2] = Companion_instance_45.l4n(this_0, tmp_2);
            tmp_0 = tmp_0 + 1 | 0;
          }
          var result = tmp_1;
          Companion_instance_45.k4n(this_0);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = result;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).n4o = function (offset) {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp_0 = Companion_instance_18;
      tmp = fromInteropPointer_0(tmp_0, Paragraph$getWordBoundary$lambda(this, offset));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).o4o = function () {
    var tmp;
    try {
      var tmp_0;
      if (this.e4o_1 == null) {
        // Inline function 'kotlin.arrayOf' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = [];
      } else {
        Stats_instance.t48();
        $l$block: {
          // Inline function 'org.jetbrains.skia.impl.interopScope' call
          try {
            var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
            // Inline function 'org.jetbrains.skia.impl.InteropScope.fromInterop' call
            var this_0 = org_jetbrains_skia_paragraph_Paragraph__1nGetLineMetrics(this.w48_1, getPtr(this.e4o_1));
            var size = Companion_instance_40.j4n(this_0);
            var tmp_1 = 0;
            // Inline function 'kotlin.arrayOfNulls' call
            var tmp_2 = Array(size);
            while (tmp_1 < size) {
              var tmp_3 = tmp_1;
              tmp_2[tmp_3] = Companion_instance_40.l4n(this_0, tmp_3);
              tmp_1 = tmp_1 + 1 | 0;
            }
            var result = tmp_2;
            Companion_instance_40.k4n(this_0);
            break $l$block;
          }finally {
            var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
            access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
            if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
              access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
            }
          }
        }
        tmp_0 = result;
      }
      tmp = tmp_0;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(this.e4o_1);
    }
    return tmp;
  };
  protoOf(Paragraph).p4o = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_Paragraph__1nGetLineNumber(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(Paragraph).q4o = function () {
    Stats_instance.t48();
    org_jetbrains_skia_paragraph_Paragraph__1nMarkDirty(this.w48_1);
    return this;
  };
  protoOf(Paragraph).r4o = function (from, to, paint) {
    var tmp;
    try {
      if (!(this.e4o_1 == null)) {
        Stats_instance.t48();
        org_jetbrains_skia_paragraph_Paragraph__1nUpdateForegroundPaint(this.w48_1, from, to, getPtr(paint), getPtr(this.e4o_1));
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
      reachabilityBarrier(this.e4o_1);
    }
    return tmp;
  };
  function Companion_42() {
    Companion_instance_42 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_42;
  function Companion_getInstance_42() {
    if (Companion_instance_42 == null)
      new Companion_42();
    return Companion_instance_42;
  }
  function _FinalizerHolder_15() {
    _FinalizerHolder_instance_15 = this;
    this.s4o_1 = org_jetbrains_skia_paragraph_ParagraphBuilder__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_15;
  function _FinalizerHolder_getInstance_15() {
    if (_FinalizerHolder_instance_15 == null)
      new _FinalizerHolder_15();
    return _FinalizerHolder_instance_15;
  }
  function ParagraphBuilder(style, fc) {
    Companion_getInstance_42();
    Managed.call(this, makeParagraphBuilder(style, fc), _FinalizerHolder_getInstance_15().s4o_1);
    this.v4o_1 = null;
  }
  protoOf(ParagraphBuilder).w4o = function (style) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nPushStyle(this.w48_1, getPtr(style));
      tmp = this;
    }finally {
      reachabilityBarrier(style);
    }
    return tmp;
  };
  protoOf(ParagraphBuilder).x4o = function (text) {
    Stats_instance.t48();
    try {
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddText(this.w48_1, $this$interopScope.f4a(text));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    if (this.v4o_1 == null) {
      this.v4o_1 = ManagedString_init_$Create$(text);
    } else
      ensureNotNull(this.v4o_1).y4g(text);
    return this;
  };
  protoOf(ParagraphBuilder).y4o = function (style) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.z4o_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.a4p_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(style.d4p_1)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphBuilder__1nAddPlaceholder(this.w48_1, style.z4o_1, style.a4p_1, style.e4p().i2_1, style.f4p().i2_1, style.d4p_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(ParagraphBuilder).u2a = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var paragraph = new Paragraph(org_jetbrains_skia_paragraph_ParagraphBuilder__1nBuild(this.w48_1), this.v4o_1);
      this.v4o_1 = null;
      tmp = paragraph;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function makeParagraphBuilder(style, fc) {
    Stats_instance.t48();
    var tmp;
    try {
      tmp = org_jetbrains_skia_paragraph_ParagraphBuilder__1nMake(getPtr(style), getPtr(fc));
    }finally {
      reachabilityBarrier(style);
      reachabilityBarrier(fc);
    }
    return tmp;
  }
  function Companion_43() {
    Companion_instance_43 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_43;
  function Companion_getInstance_43() {
    if (Companion_instance_43 == null)
      new Companion_43();
    return Companion_instance_43;
  }
  function _FinalizerHolder_16() {
    _FinalizerHolder_instance_16 = this;
    this.g4p_1 = org_jetbrains_skia_paragraph_ParagraphStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_16;
  function _FinalizerHolder_getInstance_16() {
    if (_FinalizerHolder_instance_16 == null)
      new _FinalizerHolder_16();
    return _FinalizerHolder_instance_16;
  }
  function ParagraphStyle() {
    Companion_getInstance_43();
    Managed.call(this, org_jetbrains_skia_paragraph_ParagraphStyle__1nMake(), _FinalizerHolder_getInstance_16().g4p_1);
    Stats_instance.t48();
  }
  protoOf(ParagraphStyle).x48 = function (other) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_ParagraphStyle__1nEquals(this.w48_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).j4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetReplaceTabCharacters(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).k4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextStyle(this.w48_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(value);
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).l4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetDirection(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).m4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetAlignment(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).n4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetMaxLinesCount(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).o4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          org_jetbrains_skia_paragraph_ParagraphStyle__1nSetEllipsis(this.w48_1, $this$interopScope.f4a(value));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).p4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetHeightMode(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(ParagraphStyle).q4p = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_ParagraphStyle__1nSetTextIndent(this.w48_1, value.r4p_1, value.s4p_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  var PlaceholderAlignment_BASELINE_instance;
  var PlaceholderAlignment_ABOVE_BASELINE_instance;
  var PlaceholderAlignment_BELOW_BASELINE_instance;
  var PlaceholderAlignment_TOP_instance;
  var PlaceholderAlignment_BOTTOM_instance;
  var PlaceholderAlignment_MIDDLE_instance;
  var PlaceholderAlignment_entriesInitialized;
  function PlaceholderAlignment_initEntries() {
    if (PlaceholderAlignment_entriesInitialized)
      return Unit_instance;
    PlaceholderAlignment_entriesInitialized = true;
    PlaceholderAlignment_BASELINE_instance = new PlaceholderAlignment('BASELINE', 0);
    PlaceholderAlignment_ABOVE_BASELINE_instance = new PlaceholderAlignment('ABOVE_BASELINE', 1);
    PlaceholderAlignment_BELOW_BASELINE_instance = new PlaceholderAlignment('BELOW_BASELINE', 2);
    PlaceholderAlignment_TOP_instance = new PlaceholderAlignment('TOP', 3);
    PlaceholderAlignment_BOTTOM_instance = new PlaceholderAlignment('BOTTOM', 4);
    PlaceholderAlignment_MIDDLE_instance = new PlaceholderAlignment('MIDDLE', 5);
  }
  function PlaceholderAlignment(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function PlaceholderAlignment_ABOVE_BASELINE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_ABOVE_BASELINE_instance;
  }
  function PlaceholderAlignment_TOP_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_TOP_instance;
  }
  function PlaceholderAlignment_BOTTOM_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_BOTTOM_instance;
  }
  function PlaceholderAlignment_MIDDLE_getInstance() {
    PlaceholderAlignment_initEntries();
    return PlaceholderAlignment_MIDDLE_instance;
  }
  function PlaceholderStyle(width, height, alignment, baselineMode, baseline) {
    this.z4o_1 = width;
    this.a4p_1 = height;
    this.b4p_1 = alignment;
    this.c4p_1 = baselineMode;
    this.d4p_1 = baseline;
  }
  protoOf(PlaceholderStyle).e4p = function () {
    return this.b4p_1;
  };
  protoOf(PlaceholderStyle).f4p = function () {
    return this.c4p_1;
  };
  protoOf(PlaceholderStyle).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof PlaceholderStyle))
      return false;
    if (!(compareTo(this.z4o_1, other.z4o_1) === 0))
      return false;
    if (!(compareTo(this.a4p_1, other.a4p_1) === 0))
      return false;
    if (!(compareTo(this.d4p_1, other.d4p_1) === 0))
      return false;
    if (!this.e4p().equals(other.e4p()))
      return false;
    return this.f4p().equals(other.f4p());
  };
  protoOf(PlaceholderStyle).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.z4o_1) | 0;
    result = imul(result, PRIME) + toBits(this.a4p_1) | 0;
    result = imul(result, PRIME) + toBits(this.d4p_1) | 0;
    result = imul(result, PRIME) + this.e4p().hashCode() | 0;
    result = imul(result, PRIME) + this.f4p().hashCode() | 0;
    return result;
  };
  protoOf(PlaceholderStyle).toString = function () {
    return 'PlaceholderStyle(_width=' + this.z4o_1 + ', _height=' + this.a4p_1 + ', _alignment=' + this.e4p().toString() + ', _baselineMode=' + this.f4p().toString() + ', _baseline=' + this.d4p_1 + ')';
  };
  var RectHeightMode_TIGHT_instance;
  var RectHeightMode_MAX_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance;
  var RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance;
  var RectHeightMode_STRUT_instance;
  var RectHeightMode_entriesInitialized;
  function RectHeightMode_initEntries() {
    if (RectHeightMode_entriesInitialized)
      return Unit_instance;
    RectHeightMode_entriesInitialized = true;
    RectHeightMode_TIGHT_instance = new RectHeightMode('TIGHT', 0);
    RectHeightMode_MAX_instance = new RectHeightMode('MAX', 1);
    RectHeightMode_INCLUDE_LINE_SPACING_MIDDLE_instance = new RectHeightMode('INCLUDE_LINE_SPACING_MIDDLE', 2);
    RectHeightMode_INCLUDE_LINE_SPACING_TOP_instance = new RectHeightMode('INCLUDE_LINE_SPACING_TOP', 3);
    RectHeightMode_INCLUDE_LINE_SPACING_BOTTOM_instance = new RectHeightMode('INCLUDE_LINE_SPACING_BOTTOM', 4);
    RectHeightMode_STRUT_instance = new RectHeightMode('STRUT', 5);
  }
  function RectHeightMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectHeightMode_MAX_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_MAX_instance;
  }
  function RectHeightMode_STRUT_getInstance() {
    RectHeightMode_initEntries();
    return RectHeightMode_STRUT_instance;
  }
  var RectWidthMode_TIGHT_instance;
  var RectWidthMode_MAX_instance;
  var RectWidthMode_entriesInitialized;
  function RectWidthMode_initEntries() {
    if (RectWidthMode_entriesInitialized)
      return Unit_instance;
    RectWidthMode_entriesInitialized = true;
    RectWidthMode_TIGHT_instance = new RectWidthMode('TIGHT', 0);
    RectWidthMode_MAX_instance = new RectWidthMode('MAX', 1);
  }
  function RectWidthMode(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function RectWidthMode_TIGHT_getInstance() {
    RectWidthMode_initEntries();
    return RectWidthMode_TIGHT_instance;
  }
  function Companion_44() {
  }
  var Companion_instance_44;
  function Companion_getInstance_44() {
    return Companion_instance_44;
  }
  function Shadow(color, offsetX, offsetY, blurSigma) {
    this.t4p_1 = color;
    this.u4p_1 = offsetX;
    this.v4p_1 = offsetY;
    this.w4p_1 = blurSigma;
  }
  protoOf(Shadow).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof Shadow))
      return false;
    if (!(this.t4p_1 === other.t4p_1))
      return false;
    if (!(compareTo(this.u4p_1, other.u4p_1) === 0))
      return false;
    if (!(compareTo(this.v4p_1, other.v4p_1) === 0))
      return false;
    return compareTo(this.w4p_1, other.w4p_1) === 0;
  };
  protoOf(Shadow).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.t4p_1 | 0;
    result = imul(result, PRIME) + toBits(this.u4p_1) | 0;
    result = imul(result, PRIME) + toBits(this.v4p_1) | 0;
    var blurSigma = toBits_0(this.w4p_1);
    result = imul(result, PRIME) + convertToInt(bitwiseXor(shiftRightUnsigned(blurSigma, 32), blurSigma)) | 0;
    return result;
  };
  protoOf(Shadow).toString = function () {
    return 'Shadow(_color=' + this.t4p_1 + ', _offsetX=' + this.u4p_1 + ', _offsetY=' + this.v4p_1 + ', _blurSigma=' + this.w4p_1 + ')';
  };
  function TextBox_init_$Init$(l, t, r, b, direction, $this) {
    TextBox.call($this, Companion_instance_32.k4k(l, t, r, b), get_entries_6().m(direction));
    return $this;
  }
  function TextBox_init_$Create$(l, t, r, b, direction) {
    return TextBox_init_$Init$(l, t, r, b, direction, objectCreate(protoOf(TextBox)));
  }
  function Companion_45() {
  }
  protoOf(Companion_45).l4n = function (array, index) {
    var rect = new Float32Array(4);
    var direction = new Int32Array(1);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var rectPtr = $this$interopScope.n4b(rect);
        var directionPtr = $this$interopScope.b4b(direction);
        org_jetbrains_skia_paragraph_TextBox__1nGetArrayElement(array, index, rectPtr, directionPtr);
        $this$interopScope.h4f(rectPtr, rect);
        $this$interopScope.c4b(directionPtr, direction);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return TextBox_init_$Create$(rect[0], rect[1], rect[2], rect[3], direction[0]);
  };
  protoOf(Companion_45).j4n = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nGetArraySize(array);
  };
  protoOf(Companion_45).k4n = function (array) {
    return org_jetbrains_skia_paragraph_TextBox__1nDisposeArray(array);
  };
  var Companion_instance_45;
  function Companion_getInstance_45() {
    return Companion_instance_45;
  }
  function TextBox(rect, direction) {
    this.x4p_1 = rect;
    this.y4p_1 = direction;
  }
  protoOf(TextBox).z4p = function () {
    return this.y4p_1;
  };
  protoOf(TextBox).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof TextBox))
      return false;
    if (!this.x4p_1.equals(other.x4p_1))
      return false;
    return this.z4p().equals(other.z4p());
  };
  protoOf(TextBox).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.x4p_1.hashCode() | 0;
    result = imul(result, PRIME) + this.z4p().hashCode() | 0;
    return result;
  };
  protoOf(TextBox).toString = function () {
    return 'TextBox(_rect=' + this.x4p_1.toString() + ', _direction=' + this.z4p().toString() + ')';
  };
  function TextIndent(firstLine, restLine) {
    firstLine = firstLine === VOID ? 0.0 : firstLine;
    restLine = restLine === VOID ? 0.0 : restLine;
    this.r4p_1 = firstLine;
    this.s4p_1 = restLine;
  }
  protoOf(TextIndent).toString = function () {
    return 'TextIndent(firstLine=' + this.r4p_1 + ', restLine=' + this.s4p_1 + ')';
  };
  protoOf(TextIndent).hashCode = function () {
    var result = getNumberHashCode(this.r4p_1);
    result = imul(result, 31) + getNumberHashCode(this.s4p_1) | 0;
    return result;
  };
  protoOf(TextIndent).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof TextIndent))
      return false;
    if (!equals(this.r4p_1, other.r4p_1))
      return false;
    if (!equals(this.s4p_1, other.s4p_1))
      return false;
    return true;
  };
  function Companion_46() {
    Companion_instance_46 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_46;
  function Companion_getInstance_46() {
    if (Companion_instance_46 == null)
      new Companion_46();
    return Companion_instance_46;
  }
  function TextStyle_init_$Init$($this) {
    TextStyle.call($this, org_jetbrains_skia_paragraph_TextStyle__1nMake());
    Stats_instance.t48();
    return $this;
  }
  function TextStyle_init_$Create$() {
    return TextStyle_init_$Init$(objectCreate(protoOf(TextStyle)));
  }
  function _FinalizerHolder_17() {
    _FinalizerHolder_instance_17 = this;
    this.a4q_1 = org_jetbrains_skia_paragraph_TextStyle__1nGetFinalizer();
  }
  var _FinalizerHolder_instance_17;
  function _FinalizerHolder_getInstance_17() {
    if (_FinalizerHolder_instance_17 == null)
      new _FinalizerHolder_17();
    return _FinalizerHolder_instance_17;
  }
  function TextStyle$_get_fontMetrics_$lambda_9osnwy(this$0) {
    return function ($this$fromInteropPointer, it) {
      org_jetbrains_skia_paragraph_TextStyle__1nGetFontMetrics(this$0.w48_1, it);
      return Unit_instance;
    };
  }
  function TextStyle(ptr) {
    Companion_getInstance_46();
    Managed.call(this, ptr, _FinalizerHolder_getInstance_17().a4q_1);
  }
  protoOf(TextStyle).x48 = function (other) {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = org_jetbrains_skia_paragraph_TextStyle__1nEquals(this.w48_1, getPtr(other));
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(other);
    }
    return tmp;
  };
  protoOf(TextStyle).j4h = function (value) {
    this.d4q(value);
  };
  protoOf(TextStyle).d4q = function (color) {
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetColor(this.w48_1, color);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).e4q = function (value) {
    this.f4q(value);
  };
  protoOf(TextStyle).f4q = function (paint) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetForeground(this.w48_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).g4q = function (value) {
    this.h4q(value);
  };
  protoOf(TextStyle).h4q = function (paint) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBackground(this.w48_1, getPtr(paint));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(paint);
    }
    return tmp;
  };
  protoOf(TextStyle).i4q = function (value) {
    this.j4q(value);
  };
  protoOf(TextStyle).j4q = function (d) {
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetDecorationStyle(this.w48_1, d.u4m_1, d.v4m_1, d.w4m_1, d.x4m_1, d.y4m_1, d.z4m_1.i2_1, d.a4n_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).k4q = function (value) {
    this.l4q(value);
  };
  protoOf(TextStyle).p4l = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = FontStyle_init_$Create$_0(org_jetbrains_skia_paragraph_TextStyle__1nGetFontStyle(this.w48_1));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).l4q = function (s) {
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontStyle(this.w48_1, s.o4f_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).m4q = function (s) {
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nAddShadow(this.w48_1, s.t4p_1, s.u4p_1, s.v4p_1, s.w4p_1);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).n4q = function (f) {
    try {
      Stats_instance.t48();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          org_jetbrains_skia_paragraph_TextStyle__1nAddFontFeature(this.w48_1, $this$interopScope.f4a(f.p4e()), f.m4e_1);
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).o4q = function (FontFeatures) {
    var inductionVariable = 0;
    var last = FontFeatures.length;
    while (inductionVariable < last) {
      var s = FontFeatures[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      this.n4q(s);
    }
    return this;
  };
  protoOf(TextStyle).p4q = function (value) {
    this.q4q(value);
  };
  protoOf(TextStyle).q4q = function (size) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(size)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontSize(this.w48_1, size);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).r4q = function (value) {
    this.s4q(value);
  };
  protoOf(TextStyle).s4q = function (families) {
    Stats_instance.t48();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var tmp = this.w48_1;
        var tmp_0 = $this$interopScope.i4n(families);
        var tmp1_elvis_lhs = families == null ? null : families.length;
        org_jetbrains_skia_paragraph_TextStyle__1nSetFontFamilies(tmp, tmp_0, tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    return this;
  };
  protoOf(TextStyle).t4q = function (value) {
    this.u4q(value);
  };
  protoOf(TextStyle).u4q = function (height) {
    if (height == null) {
      try {
        Stats_instance.t48();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.w48_1, false, 0.0);
      }finally {
        reachabilityBarrier(this);
      }
    } else {
      // Inline function 'kotlin.check' call
      if (!!isNaN_0(height)) {
        throw IllegalStateException_init_$Create$('Check failed.');
      }
      try {
        Stats_instance.t48();
        org_jetbrains_skia_paragraph_TextStyle__1nSetHeight(this.w48_1, true, height);
      }finally {
        reachabilityBarrier(this);
      }
    }
    return this;
  };
  protoOf(TextStyle).v4q = function (value) {
    this.w4q(value);
  };
  protoOf(TextStyle).w4q = function (topRatio) {
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetTopRatio(this.w48_1, topRatio);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).x4q = function (value) {
    this.y4q(value);
  };
  protoOf(TextStyle).y4q = function (letterSpacing) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(letterSpacing)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetLetterSpacing(this.w48_1, letterSpacing);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).z4q = function (value) {
    this.a4r(value);
  };
  protoOf(TextStyle).a4r = function (baselineShift) {
    // Inline function 'kotlin.check' call
    if (!!isNaN_0(baselineShift)) {
      throw IllegalStateException_init_$Create$('Check failed.');
    }
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetBaselineShift(this.w48_1, baselineShift);
    }finally {
      reachabilityBarrier(this);
    }
    return this;
  };
  protoOf(TextStyle).b4r = function (value) {
    this.c4r(value);
  };
  protoOf(TextStyle).c4r = function (typeface) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetTypeface(this.w48_1, getPtr(typeface));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  protoOf(TextStyle).d4r = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp_0 = Companion_instance_12;
      tmp = fromInteropPointer(tmp_0, TextStyle$_get_fontMetrics_$lambda_9osnwy(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).e4r = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontEdging(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).f4r = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetSubpixel(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(TextStyle).g4r = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_paragraph_TextStyle__1nSetFontHinting(this.w48_1, value.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function TypefaceFontProvider_init_$Init$($this) {
    TypefaceFontProvider.call($this, org_jetbrains_skia_paragraph_TypefaceFontProvider__1nMake());
    return $this;
  }
  function TypefaceFontProvider_init_$Create$() {
    return TypefaceFontProvider_init_$Init$(objectCreate(protoOf(TypefaceFontProvider)));
  }
  function Companion_47() {
    Companion_instance_47 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_47;
  function Companion_getInstance_47() {
    if (Companion_instance_47 == null)
      new Companion_47();
    return Companion_instance_47;
  }
  function TypefaceFontProvider(ptr) {
    Companion_getInstance_47();
    FontMgr_init_$Init$(ptr, this);
    Stats_instance.t48();
  }
  function TypefaceFontProviderWithFallback_init_$Init$($this) {
    TypefaceFontProviderWithFallback.call($this, org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nMakeAsFallbackProvider());
    return $this;
  }
  function TypefaceFontProviderWithFallback_init_$Create$() {
    return TypefaceFontProviderWithFallback_init_$Init$(objectCreate(protoOf(TypefaceFontProviderWithFallback)));
  }
  function Companion_48() {
    Companion_instance_48 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_48;
  function Companion_getInstance_48() {
    if (Companion_instance_48 == null)
      new Companion_48();
    return Companion_instance_48;
  }
  function TypefaceFontProviderWithFallback(ptr) {
    Companion_getInstance_48();
    TypefaceFontProvider.call(this, ptr);
    Stats_instance.t48();
  }
  protoOf(TypefaceFontProviderWithFallback).j4r = function (typeface, alias) {
    var tmp;
    try {
      Stats_instance.t48();
      $l$block: {
        // Inline function 'org.jetbrains.skia.impl.interopScope' call
        try {
          var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
          var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
          org_jetbrains_skia_paragraph_TypefaceFontProviderWithFallback__1nRegisterTypefaceForFallback(this.w48_1, getPtr(typeface), $this$interopScope.f4a(alias));
          break $l$block;
        }finally {
          var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
          access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
          if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
            access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
          }
        }
      }
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(typeface);
    }
    return tmp;
  };
  function Companion_49() {
    Companion_instance_49 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_49;
  function Companion_getInstance_49() {
    if (Companion_instance_49 == null)
      new Companion_49();
    return Companion_instance_49;
  }
  function SVGContainer(ptr) {
    Companion_getInstance_49();
    SVGTransformableNode.call(this, ptr);
  }
  function Companion_50() {
    Companion_instance_50 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_50;
  function Companion_getInstance_50() {
    if (Companion_instance_50 == null)
      new Companion_50();
    return Companion_instance_50;
  }
  function SVGDOM_init_$Init$(data, $this) {
    SVGDOM.call($this, makeSVGDOM(data));
    return $this;
  }
  function SVGDOM_init_$Create$(data) {
    return SVGDOM_init_$Init$(data, objectCreate(protoOf(SVGDOM)));
  }
  function SVGDOM(ptr) {
    Companion_getInstance_50();
    RefCnt_init_$Init$(ptr, this);
  }
  protoOf(SVGDOM).m4r = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var ptr = org_jetbrains_skia_svg_SVGDOM__1nGetRoot(this.w48_1);
      tmp = ptr === Companion_instance_60.b49() ? null : new SVGSVG(ptr);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGDOM).n4r = function (canvas) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_svg_SVGDOM__1nRender(this.w48_1, getPtr(canvas));
      tmp = this;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(canvas);
    }
    return tmp;
  };
  function makeSVGDOM(data) {
    Stats_instance.t48();
    var tmp;
    try {
      tmp = org_jetbrains_skia_svg_SVGDOM__1nMakeFromData(getPtr(data));
    }finally {
      reachabilityBarrier(data);
    }
    return tmp;
  }
  function Companion_51() {
  }
  protoOf(Companion_51).o4r = function (block) {
    // Inline function 'org.jetbrains.skia.impl.withResult' call
    var result = new Int32Array(2);
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        var handle = $this$interopScope.m4g(result);
        block($this$interopScope, handle);
        $this$interopScope.c4b(handle, result);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
    // Inline function 'kotlin.let' call
    // Inline function 'kotlin.fromBits' call
    var bits = result[0];
    var tmp$ret$5 = floatFromBits(bits);
    return SVGLength_init_$Create$(tmp$ret$5, result[1]);
  };
  var Companion_instance_51;
  function Companion_getInstance_51() {
    return Companion_instance_51;
  }
  function SVGLength_init_$Init$(value, unit, $this) {
    SVGLength.call($this, value, get_entries_7().m(unit));
    return $this;
  }
  function SVGLength_init_$Create$(value, unit) {
    return SVGLength_init_$Init$(value, unit, objectCreate(protoOf(SVGLength)));
  }
  function SVGLength(value, unit) {
    this.p4r_1 = value;
    this.q4r_1 = unit;
  }
  protoOf(SVGLength).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGLength))
      return false;
    if (!(compareTo(this.p4r_1, other.p4r_1) === 0))
      return false;
    return this.q4r_1.equals(other.q4r_1);
  };
  protoOf(SVGLength).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + toBits(this.p4r_1) | 0;
    result = imul(result, PRIME) + this.q4r_1.hashCode() | 0;
    return result;
  };
  protoOf(SVGLength).toString = function () {
    return 'SVGLength(_value=' + this.p4r_1 + ', _unit=' + this.q4r_1.toString() + ')';
  };
  protoOf(SVGLength).r4r = function (_unit) {
    return this.q4r_1 === _unit ? this : new SVGLength(this.p4r_1, _unit);
  };
  var SVGLengthUnit_UNKNOWN_instance;
  var SVGLengthUnit_NUMBER_instance;
  var SVGLengthUnit_PERCENTAGE_instance;
  var SVGLengthUnit_EMS_instance;
  var SVGLengthUnit_EXS_instance;
  var SVGLengthUnit_PX_instance;
  var SVGLengthUnit_CM_instance;
  var SVGLengthUnit_MM_instance;
  var SVGLengthUnit_IN_instance;
  var SVGLengthUnit_PT_instance;
  var SVGLengthUnit_PC_instance;
  function values_7() {
    return [SVGLengthUnit_UNKNOWN_getInstance(), SVGLengthUnit_NUMBER_getInstance(), SVGLengthUnit_PERCENTAGE_getInstance(), SVGLengthUnit_EMS_getInstance(), SVGLengthUnit_EXS_getInstance(), SVGLengthUnit_PX_getInstance(), SVGLengthUnit_CM_getInstance(), SVGLengthUnit_MM_getInstance(), SVGLengthUnit_IN_getInstance(), SVGLengthUnit_PT_getInstance(), SVGLengthUnit_PC_getInstance()];
  }
  function get_entries_7() {
    if ($ENTRIES_7 == null)
      $ENTRIES_7 = enumEntries(values_7());
    return $ENTRIES_7;
  }
  var SVGLengthUnit_entriesInitialized;
  function SVGLengthUnit_initEntries() {
    if (SVGLengthUnit_entriesInitialized)
      return Unit_instance;
    SVGLengthUnit_entriesInitialized = true;
    SVGLengthUnit_UNKNOWN_instance = new SVGLengthUnit('UNKNOWN', 0);
    SVGLengthUnit_NUMBER_instance = new SVGLengthUnit('NUMBER', 1);
    SVGLengthUnit_PERCENTAGE_instance = new SVGLengthUnit('PERCENTAGE', 2);
    SVGLengthUnit_EMS_instance = new SVGLengthUnit('EMS', 3);
    SVGLengthUnit_EXS_instance = new SVGLengthUnit('EXS', 4);
    SVGLengthUnit_PX_instance = new SVGLengthUnit('PX', 5);
    SVGLengthUnit_CM_instance = new SVGLengthUnit('CM', 6);
    SVGLengthUnit_MM_instance = new SVGLengthUnit('MM', 7);
    SVGLengthUnit_IN_instance = new SVGLengthUnit('IN', 8);
    SVGLengthUnit_PT_instance = new SVGLengthUnit('PT', 9);
    SVGLengthUnit_PC_instance = new SVGLengthUnit('PC', 10);
  }
  var $ENTRIES_7;
  function SVGLengthUnit(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGLengthUnit_UNKNOWN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_UNKNOWN_instance;
  }
  function SVGLengthUnit_NUMBER_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_NUMBER_instance;
  }
  function SVGLengthUnit_PERCENTAGE_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PERCENTAGE_instance;
  }
  function SVGLengthUnit_EMS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EMS_instance;
  }
  function SVGLengthUnit_EXS_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_EXS_instance;
  }
  function SVGLengthUnit_PX_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PX_instance;
  }
  function SVGLengthUnit_CM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_CM_instance;
  }
  function SVGLengthUnit_MM_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_MM_instance;
  }
  function SVGLengthUnit_IN_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_IN_instance;
  }
  function SVGLengthUnit_PT_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PT_instance;
  }
  function SVGLengthUnit_PC_getInstance() {
    SVGLengthUnit_initEntries();
    return SVGLengthUnit_PC_instance;
  }
  function Companion_52() {
    Companion_instance_52 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_52;
  function Companion_getInstance_52() {
    if (Companion_instance_52 == null)
      new Companion_52();
    return Companion_instance_52;
  }
  function SVGNode(ptr) {
    Companion_getInstance_52();
    RefCnt_init_$Init$(ptr, this);
  }
  function Companion_53() {
  }
  var Companion_instance_53;
  function Companion_getInstance_53() {
    return Companion_instance_53;
  }
  function SVGPreserveAspectRatio_init_$Init$($this) {
    SVGPreserveAspectRatio.call($this, SVGPreserveAspectRatioAlign_XMID_YMID_getInstance(), SVGPreserveAspectRatioScale_MEET_getInstance());
    return $this;
  }
  function SVGPreserveAspectRatio_init_$Create$() {
    return SVGPreserveAspectRatio_init_$Init$(objectCreate(protoOf(SVGPreserveAspectRatio)));
  }
  function SVGPreserveAspectRatio_init_$Init$_0(align, $this) {
    SVGPreserveAspectRatio.call($this, align, SVGPreserveAspectRatioScale_MEET_getInstance());
    return $this;
  }
  function SVGPreserveAspectRatio_init_$Create$_0(align) {
    return SVGPreserveAspectRatio_init_$Init$_0(align, objectCreate(protoOf(SVGPreserveAspectRatio)));
  }
  function SVGPreserveAspectRatio(align, scale) {
    this.s4r_1 = align;
    this.t4r_1 = scale;
  }
  protoOf(SVGPreserveAspectRatio).u4r = function () {
    return this.s4r_1;
  };
  protoOf(SVGPreserveAspectRatio).v4r = function () {
    return this.t4r_1;
  };
  protoOf(SVGPreserveAspectRatio).equals = function (other) {
    if (other === this)
      return true;
    if (!(other instanceof SVGPreserveAspectRatio))
      return false;
    if (!this.u4r().equals(other.u4r()))
      return false;
    return this.v4r().equals(other.v4r());
  };
  protoOf(SVGPreserveAspectRatio).hashCode = function () {
    var PRIME = 59;
    var result = 1;
    result = imul(result, PRIME) + this.u4r().hashCode() | 0;
    result = imul(result, PRIME) + this.v4r().hashCode() | 0;
    return result;
  };
  protoOf(SVGPreserveAspectRatio).toString = function () {
    return 'SVGPreserveAspectRatio(_align=' + this.u4r().toString() + ', _scale=' + this.v4r().toString() + ')';
  };
  var SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  var SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  var SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  var SVGPreserveAspectRatioAlign_NONE_instance;
  function Companion_54() {
  }
  protoOf(Companion_54).w4r = function (value) {
    var tmp;
    switch (value) {
      case 0:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance();
        break;
      case 1:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance();
        break;
      case 2:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance();
        break;
      case 4:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance();
        break;
      case 5:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMID_getInstance();
        break;
      case 6:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance();
        break;
      case 8:
        tmp = SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance();
        break;
      case 9:
        tmp = SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance();
        break;
      case 10:
        tmp = SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance();
        break;
      case 16:
        tmp = SVGPreserveAspectRatioAlign_NONE_getInstance();
        break;
      default:
        throw IllegalArgumentException_init_$Create$('Unknown SVGPreserveAspectRatioAlign value: ' + value);
    }
    return tmp;
  };
  var Companion_instance_54;
  function Companion_getInstance_54() {
    return Companion_instance_54;
  }
  var SVGPreserveAspectRatioAlign_entriesInitialized;
  function SVGPreserveAspectRatioAlign_initEntries() {
    if (SVGPreserveAspectRatioAlign_entriesInitialized)
      return Unit_instance;
    SVGPreserveAspectRatioAlign_entriesInitialized = true;
    SVGPreserveAspectRatioAlign_XMIN_YMIN_instance = new SVGPreserveAspectRatioAlign('XMIN_YMIN', 0, 0);
    SVGPreserveAspectRatioAlign_XMID_YMIN_instance = new SVGPreserveAspectRatioAlign('XMID_YMIN', 1, 1);
    SVGPreserveAspectRatioAlign_XMAX_YMIN_instance = new SVGPreserveAspectRatioAlign('XMAX_YMIN', 2, 2);
    SVGPreserveAspectRatioAlign_XMIN_YMID_instance = new SVGPreserveAspectRatioAlign('XMIN_YMID', 3, 4);
    SVGPreserveAspectRatioAlign_XMID_YMID_instance = new SVGPreserveAspectRatioAlign('XMID_YMID', 4, 5);
    SVGPreserveAspectRatioAlign_XMAX_YMID_instance = new SVGPreserveAspectRatioAlign('XMAX_YMID', 5, 6);
    SVGPreserveAspectRatioAlign_XMIN_YMAX_instance = new SVGPreserveAspectRatioAlign('XMIN_YMAX', 6, 8);
    SVGPreserveAspectRatioAlign_XMID_YMAX_instance = new SVGPreserveAspectRatioAlign('XMID_YMAX', 7, 9);
    SVGPreserveAspectRatioAlign_XMAX_YMAX_instance = new SVGPreserveAspectRatioAlign('XMAX_YMAX', 8, 10);
    SVGPreserveAspectRatioAlign_NONE_instance = new SVGPreserveAspectRatioAlign('NONE', 9, 16);
  }
  function SVGPreserveAspectRatioAlign(name, ordinal, _value) {
    Enum.call(this, name, ordinal);
    this.z4r_1 = _value;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMIN_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMIN_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMID_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMID_instance;
  }
  function SVGPreserveAspectRatioAlign_XMIN_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMIN_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMID_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMID_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_XMAX_YMAX_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_XMAX_YMAX_instance;
  }
  function SVGPreserveAspectRatioAlign_NONE_getInstance() {
    SVGPreserveAspectRatioAlign_initEntries();
    return SVGPreserveAspectRatioAlign_NONE_instance;
  }
  var SVGPreserveAspectRatioScale_MEET_instance;
  var SVGPreserveAspectRatioScale_SLICE_instance;
  var SVGPreserveAspectRatioScale_entriesInitialized;
  function SVGPreserveAspectRatioScale_initEntries() {
    if (SVGPreserveAspectRatioScale_entriesInitialized)
      return Unit_instance;
    SVGPreserveAspectRatioScale_entriesInitialized = true;
    SVGPreserveAspectRatioScale_MEET_instance = new SVGPreserveAspectRatioScale('MEET', 0);
    SVGPreserveAspectRatioScale_SLICE_instance = new SVGPreserveAspectRatioScale('SLICE', 1);
  }
  function SVGPreserveAspectRatioScale(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SVGPreserveAspectRatioScale_MEET_getInstance() {
    SVGPreserveAspectRatioScale_initEntries();
    return SVGPreserveAspectRatioScale_MEET_instance;
  }
  function Companion_55() {
    Companion_instance_55 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_55;
  function Companion_getInstance_55() {
    if (Companion_instance_55 == null)
      new Companion_55();
    return Companion_instance_55;
  }
  function SVGSVG$_get_width_$lambda_z81obo(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetWidth(this$0.w48_1, it);
      return Unit_instance;
    };
  }
  function SVGSVG$_get_height_$lambda_1cq2rn(this$0) {
    return function ($this$fromInterop, it) {
      org_jetbrains_skia_svg_SVGSVG__1nGetHeight(this$0.w48_1, it);
      return Unit_instance;
    };
  }
  function SVGSVG$_get_viewBox_$lambda_hsbx38(this$0) {
    return function (it) {
      return org_jetbrains_skia_svg_SVGSVG__1nGetViewBox(this$0.w48_1, it);
    };
  }
  function SVGSVG(ptr) {
    Companion_getInstance_55();
    SVGContainer.call(this, ptr);
  }
  protoOf(SVGSVG).c4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_svg_SVGSVG__1nSetWidth(this.w48_1, value.p4r_1, value.q4r_1.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).b47 = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp_0 = Companion_instance_51;
      tmp = tmp_0.o4r(SVGSVG$_get_width_$lambda_z81obo(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).d4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_svg_SVGSVG__1nSetHeight(this.w48_1, value.p4r_1, value.q4r_1.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).c47 = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp_0 = Companion_instance_51;
      tmp = tmp_0.o4r(SVGSVG$_get_height_$lambda_1cq2rn(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).e4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_svg_SVGSVG__1nSetPreserveAspectRatio(this.w48_1, value.s4r_1.z4r_1, value.t4r_1.i2_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).f4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skia_svg_SVGSVG__1nSetViewBox(this.w48_1, ensureNotNull(value).t4b_1, value.u4b_1, value.v4b_1, value.w4b_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(SVGSVG).g4s = function () {
    var tmp;
    try {
      Stats_instance.t48();
      var tmp_0 = Companion_instance_32;
      tmp = tmp_0.n4k(SVGSVG$_get_viewBox_$lambda_hsbx38(this));
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  function Companion_56() {
    Companion_instance_56 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_56;
  function Companion_getInstance_56() {
    if (Companion_instance_56 == null)
      new Companion_56();
    return Companion_instance_56;
  }
  function SVGTransformableNode(ptr) {
    Companion_getInstance_56();
    SVGNode.call(this, ptr);
  }
  var GraphicsApi_UNKNOWN_instance;
  var GraphicsApi_SOFTWARE_FAST_instance;
  var GraphicsApi_SOFTWARE_COMPAT_instance;
  var GraphicsApi_OPENGL_instance;
  var GraphicsApi_DIRECT3D_instance;
  var GraphicsApi_ANGLE_instance;
  var GraphicsApi_VULKAN_instance;
  var GraphicsApi_METAL_instance;
  var GraphicsApi_WEBGL_instance;
  var GraphicsApi_entriesInitialized;
  function GraphicsApi_initEntries() {
    if (GraphicsApi_entriesInitialized)
      return Unit_instance;
    GraphicsApi_entriesInitialized = true;
    GraphicsApi_UNKNOWN_instance = new GraphicsApi('UNKNOWN', 0);
    GraphicsApi_SOFTWARE_FAST_instance = new GraphicsApi('SOFTWARE_FAST', 1);
    GraphicsApi_SOFTWARE_COMPAT_instance = new GraphicsApi('SOFTWARE_COMPAT', 2);
    GraphicsApi_OPENGL_instance = new GraphicsApi('OPENGL', 3);
    GraphicsApi_DIRECT3D_instance = new GraphicsApi('DIRECT3D', 4);
    GraphicsApi_ANGLE_instance = new GraphicsApi('ANGLE', 5);
    GraphicsApi_VULKAN_instance = new GraphicsApi('VULKAN', 6);
    GraphicsApi_METAL_instance = new GraphicsApi('METAL', 7);
    GraphicsApi_WEBGL_instance = new GraphicsApi('WEBGL', 8);
  }
  function GraphicsApi(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function GraphicsApi_WEBGL_getInstance() {
    GraphicsApi_initEntries();
    return GraphicsApi_WEBGL_instance;
  }
  var OS_Android_instance;
  var OS_Linux_instance;
  var OS_Windows_instance;
  var OS_MacOS_instance;
  var OS_Ios_instance;
  var OS_Tvos_instance;
  var OS_Unknown_instance;
  var OS_entriesInitialized;
  function OS_initEntries() {
    if (OS_entriesInitialized)
      return Unit_instance;
    OS_entriesInitialized = true;
    OS_Android_instance = new OS('Android', 0, 'android');
    OS_Linux_instance = new OS('Linux', 1, 'linux');
    OS_Windows_instance = new OS('Windows', 2, 'windows');
    OS_MacOS_instance = new OS('MacOS', 3, 'macos');
    OS_Ios_instance = new OS('Ios', 4, 'ios');
    OS_Tvos_instance = new OS('Tvos', 5, 'tvos');
    OS_Unknown_instance = new OS('Unknown', 6, 'unknown');
  }
  function OS(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.j4s_1 = id;
  }
  protoOf(OS).k4s = function () {
    return this.equals(OS_MacOS_getInstance());
  };
  var Arch_X64_instance;
  var Arch_Arm64_instance;
  var Arch_Unknown_instance;
  var Arch_entriesInitialized;
  function Arch_initEntries() {
    if (Arch_entriesInitialized)
      return Unit_instance;
    Arch_entriesInitialized = true;
    Arch_X64_instance = new Arch('X64', 0, 'x64');
    Arch_Arm64_instance = new Arch('Arm64', 1, 'arm64');
    Arch_Unknown_instance = new Arch('Unknown', 2, 'unknown');
  }
  function Arch(name, ordinal, id) {
    Enum.call(this, name, ordinal);
    this.n4s_1 = id;
  }
  function OS_Android_getInstance() {
    OS_initEntries();
    return OS_Android_instance;
  }
  function OS_Linux_getInstance() {
    OS_initEntries();
    return OS_Linux_instance;
  }
  function OS_Windows_getInstance() {
    OS_initEntries();
    return OS_Windows_instance;
  }
  function OS_MacOS_getInstance() {
    OS_initEntries();
    return OS_MacOS_instance;
  }
  function OS_Ios_getInstance() {
    OS_initEntries();
    return OS_Ios_instance;
  }
  function OS_Unknown_getInstance() {
    OS_initEntries();
    return OS_Unknown_instance;
  }
  function Arch_Unknown_getInstance() {
    Arch_initEntries();
    return Arch_Unknown_instance;
  }
  function RenderException(message, cause) {
    message = message === VOID ? null : message;
    cause = cause === VOID ? null : cause;
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, RenderException);
  }
  function SkikoRenderDelegate() {
  }
  var SystemTheme_DARK_instance;
  var SystemTheme_LIGHT_instance;
  var SystemTheme_UNKNOWN_instance;
  var SystemTheme_entriesInitialized;
  function SystemTheme_initEntries() {
    if (SystemTheme_entriesInitialized)
      return Unit_instance;
    SystemTheme_entriesInitialized = true;
    SystemTheme_DARK_instance = new SystemTheme('DARK', 0);
    SystemTheme_LIGHT_instance = new SystemTheme('LIGHT', 1);
    SystemTheme_UNKNOWN_instance = new SystemTheme('UNKNOWN', 2);
  }
  function SystemTheme(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function SystemTheme_UNKNOWN_getInstance() {
    SystemTheme_initEntries();
    return SystemTheme_UNKNOWN_instance;
  }
  function Companion_57() {
    Companion_instance_57 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_57;
  function Companion_getInstance_57() {
    if (Companion_instance_57 == null)
      new Companion_57();
    return Companion_instance_57;
  }
  function RenderNode_init_$Init$(context, $this) {
    RenderNode.call($this, org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nMake(getPtr(context)));
    Stats_instance.t48();
    return $this;
  }
  function RenderNode_init_$Create$(context) {
    return RenderNode_init_$Init$(context, objectCreate(protoOf(RenderNode)));
  }
  function RenderNode(ptr, managed) {
    Companion_getInstance_57();
    managed = managed === VOID ? true : managed;
    RefCnt_init_$Init$_0(ptr, managed, this);
  }
  protoOf(RenderNode).r4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetLayerPaint(this.w48_1, getPtr(value));
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(value);
    }
    return tmp;
  };
  protoOf(RenderNode).s4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetBounds(this.w48_1, value.t4b_1, value.u4b_1, value.v4b_1, value.w4b_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).t4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetPivot(this.w48_1, value.f4k_1, value.g4k_1);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).u4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetAlpha(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).v4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetScaleX(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).w4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetScaleY(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).x4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetTranslationX(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).y4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetTranslationY(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).z4s = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetShadowElevation(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).a4t = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetAmbientShadowColor(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).b4t = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetSpotShadowColor(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).c4t = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetRotationX(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).d4t = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetRotationY(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).e4t = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetRotationZ(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).f4t = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetCameraDistance(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).g4t = function (left, top, right, bottom, mode, antiAlias) {
    Stats_instance.t48();
    org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClipRect(this.w48_1, left, top, right, bottom, mode.i2_1, antiAlias);
  };
  protoOf(RenderNode).h4t = function (left, top, right, bottom, mode, antiAlias, $super) {
    mode = mode === VOID ? ClipMode_INTERSECT_getInstance() : mode;
    antiAlias = antiAlias === VOID ? false : antiAlias;
    var tmp;
    if ($super === VOID) {
      this.g4t(left, top, right, bottom, mode, antiAlias);
      tmp = Unit_instance;
    } else {
      tmp = $super.g4t.call(this, left, top, right, bottom, mode, antiAlias);
    }
    return tmp;
  };
  protoOf(RenderNode).i4t = function (left, top, right, bottom, radii, mode, antiAlias) {
    Stats_instance.t48();
    $l$block: {
      // Inline function 'org.jetbrains.skia.impl.interopScope' call
      try {
        var _unary__edvuaz = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz + 1 | 0);
        var $this$interopScope = access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0();
        org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClipRRect(this.w48_1, left, top, right, bottom, $this$interopScope.n4b(radii), radii.length, mode.i2_1, antiAlias);
        break $l$block;
      }finally {
        var _unary__edvuaz_0 = access$_get_interopScopeCounter_$tNative_webKt_h1nl5b();
        access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_unary__edvuaz_0 - 1 | 0);
        if (access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() === 0) {
          access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0().x1t();
        }
      }
    }
  };
  protoOf(RenderNode).j4t = function (left, top, right, bottom, radii, mode, antiAlias, $super) {
    mode = mode === VOID ? ClipMode_INTERSECT_getInstance() : mode;
    antiAlias = antiAlias === VOID ? false : antiAlias;
    var tmp;
    if ($super === VOID) {
      this.i4t(left, top, right, bottom, radii, mode, antiAlias);
      tmp = Unit_instance;
    } else {
      tmp = $super.i4t.call(this, left, top, right, bottom, radii, mode, antiAlias);
    }
    return tmp;
  };
  protoOf(RenderNode).k4t = function (p, mode, antiAlias) {
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClipPath(this.w48_1, getPtr(p), mode.i2_1, antiAlias);
    }finally {
      reachabilityBarrier(this);
      reachabilityBarrier(p);
    }
  };
  protoOf(RenderNode).l4t = function (p, mode, antiAlias, $super) {
    mode = mode === VOID ? ClipMode_INTERSECT_getInstance() : mode;
    antiAlias = antiAlias === VOID ? false : antiAlias;
    var tmp;
    if ($super === VOID) {
      this.k4t(p, mode, antiAlias);
      tmp = Unit_instance;
    } else {
      tmp = $super.k4t.call(this, p, mode, antiAlias);
    }
    return tmp;
  };
  protoOf(RenderNode).m4t = function (value) {
    var tmp;
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nSetClip(this.w48_1, value);
      tmp = Unit_instance;
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).n4t = function () {
    var tmp;
    try {
      Stats_instance.t48();
      tmp = new Canvas(org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nBeginRecording(this.w48_1), false, this);
    }finally {
      reachabilityBarrier(this);
    }
    return tmp;
  };
  protoOf(RenderNode).o4t = function () {
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nEndRecording(this.w48_1);
    }finally {
      reachabilityBarrier(this);
    }
  };
  protoOf(RenderNode).p4t = function (canvas) {
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeKt_RenderNode_1nDrawInto(this.w48_1, getPtr(canvas));
    }finally {
      reachabilityBarrier(this);
    }
  };
  function Companion_58() {
    Companion_instance_58 = this;
    Companion_instance_59.z48();
  }
  var Companion_instance_58;
  function Companion_getInstance_58() {
    if (Companion_instance_58 == null)
      new Companion_58();
    return Companion_instance_58;
  }
  function RenderNodeContext_init_$Init$(measureDrawBounds, $this) {
    measureDrawBounds = measureDrawBounds === VOID ? false : measureDrawBounds;
    RenderNodeContext.call($this, org_jetbrains_skiko_node_RenderNodeContextKt_RenderNodeContext_1nMake(measureDrawBounds));
    Stats_instance.t48();
    return $this;
  }
  function RenderNodeContext_init_$Create$(measureDrawBounds) {
    return RenderNodeContext_init_$Init$(measureDrawBounds, objectCreate(protoOf(RenderNodeContext)));
  }
  function RenderNodeContext(ptr, managed) {
    Companion_getInstance_58();
    managed = managed === VOID ? true : managed;
    RefCnt_init_$Init$_0(ptr, managed, this);
  }
  protoOf(RenderNodeContext).s4t = function (centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha) {
    try {
      Stats_instance.t48();
      org_jetbrains_skiko_node_RenderNodeContextKt_RenderNodeContext_1nSetLightingInfo(this.w48_1, centerX, centerY, centerZ, radius, ambientShadowAlpha, spotShadowAlpha);
    }finally {
      reachabilityBarrier(this);
    }
  };
  function get_registry() {
    _init_properties_Managed_js_kt__4ok5rc();
    return registry;
  }
  var registry;
  function unregister(managed) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().unregister(managed);
  }
  function register(managed, thunk) {
    _init_properties_Managed_js_kt__4ok5rc();
    get_registry().register(managed, thunk, managed);
  }
  function registry$lambda(it) {
    _init_properties_Managed_js_kt__4ok5rc();
    var thunk = it instanceof FinalizationThunk ? it : THROW_CCE();
    thunk.v4t();
    return Unit_instance;
  }
  var properties_initialized_Managed_js_kt_llxy4m;
  function _init_properties_Managed_js_kt__4ok5rc() {
    if (!properties_initialized_Managed_js_kt_llxy4m) {
      properties_initialized_Managed_js_kt_llxy4m = true;
      registry = new FinalizationRegistry(registry$lambda);
    }
  }
  function toInterop($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(array.length);
      $this.d4a_1.g(data);
      if (copyArrayToWasm) {
        toWasm(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_0($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 2));
      $this.d4a_1.g(data);
      if (copyArrayToWasm) {
        toWasm_0(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_1($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 4));
      $this.d4a_1.g(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_2($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 4));
      $this.d4a_1.g(data);
      if (copyArrayToWasm) {
        toWasm_2(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_3($this, array, copyArrayToWasm) {
    var tmp;
    var tmp_0;
    if (!(array == null)) {
      // Inline function 'kotlin.collections.isNotEmpty' call
      // Inline function 'kotlin.collections.isEmpty' call
      tmp_0 = !(array.length === 0);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      var data = malloc(imul(array.length, 8));
      $this.d4a_1.g(data);
      if (copyArrayToWasm) {
        toWasm_3(data, array);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function toInterop_4($this, array, copyArrayToWasm) {
    var tmp;
    if (!(array == null) && array.l() > 0) {
      var data = malloc(imul(array.l(), 4));
      $this.d4a_1.g(data);
      if (copyArrayToWasm) {
        toWasm_1(data, array.s4g_1);
      }
      tmp = data;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function InteropScope() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.d4a_1 = ArrayList_init_$Create$_0();
    this.e4a_1 = false;
  }
  protoOf(InteropScope).f4a = function (string) {
    var tmp;
    if (!(string == null)) {
      tmp = this.h4d(convertToZeroTerminatedString(string));
    } else {
      tmp = 0;
    }
    return tmp;
  };
  protoOf(InteropScope).h4d = function (array) {
    return toInterop(this, array, true);
  };
  protoOf(InteropScope).u4g = function (array) {
    return toInterop(this, array, false);
  };
  protoOf(InteropScope).u4a = function (array) {
    return toInterop_0(this, array, true);
  };
  protoOf(InteropScope).c4b = function (_this__u8e3s4, result) {
    fromWasm(_this__u8e3s4, result);
  };
  protoOf(InteropScope).b4b = function (array) {
    return toInterop_1(this, array, true);
  };
  protoOf(InteropScope).m4g = function (array) {
    return toInterop_1(this, array, false);
  };
  protoOf(InteropScope).h4f = function (_this__u8e3s4, result) {
    fromWasm_0(_this__u8e3s4, result);
  };
  protoOf(InteropScope).n4b = function (array) {
    return toInterop_2(this, array, true);
  };
  protoOf(InteropScope).g4f = function (array) {
    return toInterop_2(this, array, false);
  };
  protoOf(InteropScope).n4n = function (_this__u8e3s4, result) {
    fromWasm_1(_this__u8e3s4, result);
  };
  protoOf(InteropScope).m4n = function (array) {
    return toInterop_3(this, array, false);
  };
  protoOf(InteropScope).v4g = function (_this__u8e3s4, result) {
    fromWasm_2(_this__u8e3s4, result);
  };
  protoOf(InteropScope).q4g = function (array) {
    return toInterop_4(this, array, false);
  };
  protoOf(InteropScope).r4g = function (_this__u8e3s4, result) {
    return fromWasm(_this__u8e3s4, result.s4g_1);
  };
  protoOf(InteropScope).i4n = function (stringArray) {
    // Inline function 'kotlin.collections.isNullOrEmpty' call
    var tmp;
    if (stringArray == null) {
      tmp = true;
    } else {
      // Inline function 'kotlin.collections.isEmpty' call
      tmp = stringArray.length === 0;
    }
    if (tmp)
      return 0;
    var tmp_0 = 0;
    var tmp_1 = stringArray.length;
    var tmp_2 = new Int32Array(tmp_1);
    while (tmp_0 < tmp_1) {
      var tmp_3 = tmp_0;
      tmp_2[tmp_3] = this.f4a(stringArray[tmp_3]);
      tmp_0 = tmp_0 + 1 | 0;
    }
    var ptrs = tmp_2;
    return this.b4b(ptrs);
  };
  protoOf(InteropScope).x1t = function () {
    // Inline function 'org.jetbrains.skiko.internal.fastForEach' call
    var this_0 = this.d4a_1;
    var inductionVariable = 0;
    var last = this_0.l() - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var item = this_0.m(index);
        free(item);
      }
       while (inductionVariable <= last);
    this.d4a_1.b2();
    // Inline function 'org.jetbrains.skia.impl.InteropScope.releaseCallbacks' call
    if (this.e4a_1) {
      _releaseLocalCallbackScope();
      this.e4a_1 = false;
    }
  };
  function onWasmReady(onReady) {
    var tmp = awaitSkiko;
    tmp.then(onWasmReady$lambda(onReady));
  }
  function createWebGLContext(canvas, attr) {
    attr = attr === VOID ? null : attr;
    var contextAttributes = new createWebGLContext$contextAttributes$1(attr);
    return GL.createContext(canvas, asJsObject(contextAttributes));
  }
  function asJsObject(_this__u8e3s4) {
    var jsObject = {};
    if (_this__u8e3s4.alpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.alpha = _this__u8e3s4.alpha;
    }
    if (_this__u8e3s4.depth == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.depth = _this__u8e3s4.depth;
    }
    if (_this__u8e3s4.stencil == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.stencil = _this__u8e3s4.stencil;
    }
    if (_this__u8e3s4.antialias == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.antialias = _this__u8e3s4.antialias;
    }
    if (_this__u8e3s4.premultipliedAlpha == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.premultipliedAlpha = _this__u8e3s4.premultipliedAlpha;
    }
    if (_this__u8e3s4.preserveDrawingBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.preserveDrawingBuffer = _this__u8e3s4.preserveDrawingBuffer;
    }
    if (_this__u8e3s4.preferLowPowerToHighPerformance == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.preferLowPowerToHighPerformance = _this__u8e3s4.preferLowPowerToHighPerformance;
    }
    if (_this__u8e3s4.failIfMajorPerformanceCaveat == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.failIfMajorPerformanceCaveat = _this__u8e3s4.failIfMajorPerformanceCaveat;
    }
    if (_this__u8e3s4.enableExtensionsByDefault == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.enableExtensionsByDefault = _this__u8e3s4.enableExtensionsByDefault;
    }
    if (_this__u8e3s4.explicitSwapControl == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.explicitSwapControl = _this__u8e3s4.explicitSwapControl;
    }
    if (_this__u8e3s4.renderViaOffscreenBackBuffer == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.renderViaOffscreenBackBuffer = _this__u8e3s4.renderViaOffscreenBackBuffer;
    }
    if (_this__u8e3s4.majorVersion == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      jsObject.majorVersion = _this__u8e3s4.majorVersion;
    }
    return jsObject;
  }
  function onWasmReady$lambda($onReady) {
    return function (it) {
      $onReady();
      return Unit_instance;
    };
  }
  function createWebGLContext$contextAttributes$1($attr) {
    var tmp = this;
    var tmp1_elvis_lhs = $attr == null ? null : $attr.alpha;
    tmp.w4t_1 = tmp1_elvis_lhs == null ? 1 : tmp1_elvis_lhs;
    var tmp_0 = this;
    var tmp1_elvis_lhs_0 = $attr == null ? null : $attr.depth;
    tmp_0.x4t_1 = tmp1_elvis_lhs_0 == null ? 1 : tmp1_elvis_lhs_0;
    var tmp_1 = this;
    var tmp1_elvis_lhs_1 = $attr == null ? null : $attr.stencil;
    tmp_1.y4t_1 = tmp1_elvis_lhs_1 == null ? 8 : tmp1_elvis_lhs_1;
    var tmp_2 = this;
    var tmp1_elvis_lhs_2 = $attr == null ? null : $attr.antialias;
    tmp_2.z4t_1 = tmp1_elvis_lhs_2 == null ? 0 : tmp1_elvis_lhs_2;
    var tmp_3 = this;
    var tmp1_elvis_lhs_3 = $attr == null ? null : $attr.premultipliedAlpha;
    tmp_3.a4u_1 = tmp1_elvis_lhs_3 == null ? 1 : tmp1_elvis_lhs_3;
    var tmp_4 = this;
    var tmp1_elvis_lhs_4 = $attr == null ? null : $attr.preserveDrawingBuffer;
    tmp_4.b4u_1 = tmp1_elvis_lhs_4 == null ? 0 : tmp1_elvis_lhs_4;
    var tmp_5 = this;
    var tmp1_elvis_lhs_5 = $attr == null ? null : $attr.preferLowPowerToHighPerformance;
    tmp_5.c4u_1 = tmp1_elvis_lhs_5 == null ? 0 : tmp1_elvis_lhs_5;
    var tmp_6 = this;
    var tmp1_elvis_lhs_6 = $attr == null ? null : $attr.failIfMajorPerformanceCaveat;
    tmp_6.d4u_1 = tmp1_elvis_lhs_6 == null ? 0 : tmp1_elvis_lhs_6;
    var tmp_7 = this;
    var tmp1_elvis_lhs_7 = $attr == null ? null : $attr.enableExtensionsByDefault;
    tmp_7.e4u_1 = tmp1_elvis_lhs_7 == null ? 1 : tmp1_elvis_lhs_7;
    var tmp_8 = this;
    var tmp1_elvis_lhs_8 = $attr == null ? null : $attr.explicitSwapControl;
    tmp_8.f4u_1 = tmp1_elvis_lhs_8 == null ? 0 : tmp1_elvis_lhs_8;
    var tmp_9 = this;
    var tmp1_elvis_lhs_9 = $attr == null ? null : $attr.renderViaOffscreenBackBuffer;
    tmp_9.g4u_1 = tmp1_elvis_lhs_9 == null ? 0 : tmp1_elvis_lhs_9;
    var tmp_10 = this;
    var tmp1_elvis_lhs_10 = $attr == null ? null : $attr.majorVersion;
    tmp_10.h4u_1 = tmp1_elvis_lhs_10 == null ? 2 : tmp1_elvis_lhs_10;
    delete this.alpha;
    delete this.depth;
    delete this.stencil;
    delete this.antialias;
    delete this.premultipliedAlpha;
    delete this.preserveDrawingBuffer;
    delete this.preferLowPowerToHighPerformance;
    delete this.failIfMajorPerformanceCaveat;
    delete this.enableExtensionsByDefault;
    delete this.explicitSwapControl;
    delete this.renderViaOffscreenBackBuffer;
    delete this.majorVersion;
  }
  protoOf(createWebGLContext$contextAttributes$1).i4u = function () {
    return this.w4t_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).j4u = function () {
    return this.x4t_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).k4u = function () {
    return this.y4t_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).l4u = function () {
    return this.z4t_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).m4u = function () {
    return this.a4u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).n4u = function () {
    return this.b4u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).o4u = function () {
    return this.c4u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).p4u = function () {
    return this.d4u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).q4u = function () {
    return this.e4u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).r4u = function () {
    return this.f4u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).s4u = function () {
    return this.g4u_1;
  };
  protoOf(createWebGLContext$contextAttributes$1).t4u = function () {
    return this.h4u_1;
  };
  function convertToZeroTerminatedString(string) {
    var utf8 = encodeToByteArray(string);
    return copyOf(utf8, utf8.length + 1 | 0);
  }
  var LANG$delegate;
  function Pattern(regex) {
    this.u4u_1 = Regex_init_$Create$(regex);
  }
  function compilePattern(regex) {
    _init_properties_Actuals_web_kt__cwbdqx();
    return new Pattern(regex);
  }
  function commonSynchronized(lock, block) {
    _init_properties_Actuals_web_kt__cwbdqx();
    block();
  }
  function LANG$delegate$lambda() {
    _init_properties_Actuals_web_kt__cwbdqx();
    var lang = window.navigator.language;
    var tmp;
    // Inline function 'kotlin.text.isNullOrEmpty' call
    if (lang == null || charSequenceLength(lang) === 0) {
      tmp = 'en-US';
    } else {
      tmp = lang;
    }
    return tmp;
  }
  var properties_initialized_Actuals_web_kt_1cg0bp;
  function _init_properties_Actuals_web_kt__cwbdqx() {
    if (!properties_initialized_Actuals_web_kt_1cg0bp) {
      properties_initialized_Actuals_web_kt_1cg0bp = true;
      LANG$delegate = lazy(LANG$delegate$lambda);
    }
  }
  function Companion_59() {
  }
  protoOf(Companion_59).z48 = function () {
  };
  var Companion_instance_59;
  function Companion_getInstance_59() {
    return Companion_instance_59;
  }
  function Managed(ptr, finalizer, managed) {
    managed = managed === VOID ? true : managed;
    Native.call(this, ptr);
    this.v48_1 = null;
    if (managed) {
      // Inline function 'kotlin.require' call
      if (!!(ptr === 0)) {
        var message = 'Managed ptr is 0';
        throw IllegalArgumentException_init_$Create$(toString(message));
      }
      // Inline function 'kotlin.require' call
      if (!!(finalizer === 0)) {
        var message_0 = 'Managed finalizer is 0';
        throw IllegalArgumentException_init_$Create$(toString(message_0));
      }
      var thunk = new FinalizationThunk(finalizer, ptr);
      register(this, thunk);
      this.v48_1 = thunk;
    }
  }
  protoOf(Managed).q2g = function () {
    if (Companion_instance_60.b49() === this.w48_1)
      throw RuntimeException_init_$Create$('Object already closed: ' + getKClassFromExpression(this).x9() + ', _ptr=' + this.w48_1);
    else if (null == this.v48_1)
      throw RuntimeException_init_$Create$("Object is not managed, can't close(): " + getKClassFromExpression(this).x9() + ', _ptr=' + this.w48_1);
    else {
      unregister(this);
      ensureNotNull(this.v48_1).v4t();
      this.v48_1 = null;
      this.w48_1 = 0;
    }
  };
  function FinalizationThunk(finalizer, obj) {
    this.t4t_1 = finalizer;
    this.u4t_1 = obj;
  }
  protoOf(FinalizationThunk).v4t = function () {
    if (!(this.u4t_1 === 0)) {
      org_jetbrains_skia_impl_Managed__invokeFinalizer(this.t4t_1, this.u4t_1);
    }
    this.u4t_1 = 0;
  };
  function get_INTEROP_SCOPE() {
    _init_properties_Native_web_kt__70micd();
    return INTEROP_SCOPE;
  }
  var INTEROP_SCOPE;
  function set_interopScopeCounter(_set____db54di) {
    _init_properties_Native_web_kt__70micd();
    interopScopeCounter = _set____db54di;
  }
  function get_interopScopeCounter() {
    _init_properties_Native_web_kt__70micd();
    return interopScopeCounter;
  }
  var interopScopeCounter;
  function reachabilityBarrier(obj) {
    _init_properties_Native_web_kt__70micd();
  }
  function Companion_60() {
  }
  protoOf(Companion_60).b49 = function () {
    return 0;
  };
  var Companion_instance_60;
  function Companion_getInstance_60() {
    return Companion_instance_60;
  }
  function Native(ptr) {
    if (ptr === Companion_instance_60.b49())
      throw RuntimeException_init_$Create$("Can't wrap nullptr");
    this.w48_1 = ptr;
  }
  protoOf(Native).equals = function (other) {
    if (this === other)
      return true;
    if (null == other)
      return false;
    if (!(other instanceof Native))
      return false;
    return this.w48_1 === other.w48_1 ? true : this.x48(other);
  };
  protoOf(Native).hashCode = function () {
    return this.w48_1;
  };
  protoOf(Native).x48 = function (other) {
    return false;
  };
  protoOf(Native).toString = function () {
    return plus(getKClassFromExpression(this).x9(), '(_ptr=0x') + toString_1(this.w48_1, 16) + ')';
  };
  function Companion_61() {
  }
  var Companion_instance_61;
  function Companion_getInstance_61() {
    return Companion_instance_61;
  }
  function NativePointerArray(size) {
    this.s4g_1 = new Int32Array(size);
  }
  protoOf(NativePointerArray).m = function (index) {
    return this.s4g_1[index];
  };
  protoOf(NativePointerArray).l = function () {
    return this.s4g_1.length;
  };
  function toWasm(dest, src) {
    _init_properties_Native_web_kt__70micd();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetByte(address, value);
      address = address + 1 | 0;
    }
  }
  function toWasm_0(dest, src) {
    _init_properties_Native_web_kt__70micd();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetShort(address, value);
      address = address + 2 | 0;
    }
  }
  function fromWasm(src, result) {
    _init_properties_Native_web_kt__70micd();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetInt(address);
        address = address + 4 | 0;
      }
       while (inductionVariable <= last);
  }
  function toWasm_1(dest, src) {
    _init_properties_Native_web_kt__70micd();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetInt(address, value);
      address = address + 4 | 0;
    }
  }
  function fromWasm_0(src, result) {
    _init_properties_Native_web_kt__70micd();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetFloat(address);
        address = address + 4 | 0;
      }
       while (inductionVariable <= last);
  }
  function toWasm_2(dest, src) {
    _init_properties_Native_web_kt__70micd();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetFloat(address, value);
      address = address + 4 | 0;
    }
  }
  function fromWasm_1(src, result) {
    _init_properties_Native_web_kt__70micd();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetDouble(address);
        address = address + 8 | 0;
      }
       while (inductionVariable <= last);
  }
  function toWasm_3(dest, src) {
    _init_properties_Native_web_kt__70micd();
    var address = dest;
    var inductionVariable = 0;
    var last = src.length;
    while (inductionVariable < last) {
      var value = src[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      skia_memSetDouble(address, value);
      address = address + 8 | 0;
    }
  }
  function fromWasm_2(src, result) {
    _init_properties_Native_web_kt__70micd();
    var address = src;
    var inductionVariable = 0;
    var last = result.length - 1 | 0;
    if (inductionVariable <= last)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result[index] = skia_memGetByte(address);
        address = address + 1 | 0;
      }
       while (inductionVariable <= last);
  }
  function access$_get_INTEROP_SCOPE_$tNative_webKt_chn7j0() {
    return get_INTEROP_SCOPE();
  }
  function access$_get_interopScopeCounter_$tNative_webKt_h1nl5b() {
    return get_interopScopeCounter();
  }
  function access$_set_interopScopeCounter_$tNative_webKt_mvg2hx(_set____db54di) {
    return set_interopScopeCounter(_set____db54di);
  }
  var properties_initialized_Native_web_kt_qki601;
  function _init_properties_Native_web_kt__70micd() {
    if (!properties_initialized_Native_web_kt_qki601) {
      properties_initialized_Native_web_kt_qki601 = true;
      INTEROP_SCOPE = new InteropScope();
      interopScopeCounter = 0;
    }
  }
  function RefCnt_init_$Init$(ptr, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_18().v4u_1, true);
    RefCnt.call($this);
    return $this;
  }
  function RefCnt_init_$Init$_0(ptr, allowClose, $this) {
    Managed.call($this, ptr, _FinalizerHolder_getInstance_18().v4u_1, allowClose);
    RefCnt.call($this);
    return $this;
  }
  protoOf(RefCnt).t4c = function () {
    Stats_instance.t48();
    return org_jetbrains_skia_impl_RefCnt__getRefCount(this.w48_1);
  };
  protoOf(RefCnt).toString = function () {
    return refCntToString(this, protoOf(Managed).toString.call(this), 0);
  };
  function RefCnt() {
  }
  function _FinalizerHolder_18() {
    _FinalizerHolder_instance_18 = this;
    this.v4u_1 = org_jetbrains_skia_impl_RefCnt__getFinalizer();
  }
  var _FinalizerHolder_instance_18;
  function _FinalizerHolder_getInstance_18() {
    if (_FinalizerHolder_instance_18 == null)
      new _FinalizerHolder_18();
    return _FinalizerHolder_instance_18;
  }
  function Stats() {
  }
  protoOf(Stats).t48 = function () {
  };
  var Stats_instance;
  function Stats_getInstance() {
    return Stats_instance;
  }
  function currentNanoTime() {
    return numberToLong(window.performance.now() * 1000000);
  }
  function loadOpenGLLibrary() {
  }
  function disposeCanvas($this) {
    var tmp0_safe_receiver = $this.a4v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.q2g();
    }
    $this.a4v_1 = null;
    var tmp1_safe_receiver = $this.b4v_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      tmp1_safe_receiver.q2g();
    }
    $this.b4v_1 = null;
  }
  function CanvasRenderer$needRedraw$lambda(this$0) {
    return function (timestamp) {
      this$0.d4v_1 = false;
      GL.makeContextCurrent(this$0.w4u_1);
      var tmp0_safe_receiver = this$0.c4v_1;
      if (tmp0_safe_receiver == null)
        null;
      else
        tmp0_safe_receiver.a2n(-1);
      var tmp1_safe_receiver = this$0.c4v_1;
      if (tmp1_safe_receiver == null)
        null;
      else
        tmp1_safe_receiver.z4b();
      this$0.e4v(timestamp);
      var tmp2_safe_receiver = this$0.a4v_1;
      if (tmp2_safe_receiver == null)
        null;
      else {
        tmp2_safe_receiver.m4l();
      }
      this$0.z4u_1.q4d();
      return Unit_instance;
    };
  }
  function CanvasRenderer(contextPointer, width, height) {
    this.w4u_1 = contextPointer;
    this.x4u_1 = width;
    this.y4u_1 = height;
    this.a4v_1 = null;
    this.b4v_1 = null;
    this.c4v_1 = null;
    GL.makeContextCurrent(this.w4u_1);
    this.z4u_1 = Companion_getInstance_9().n4d();
    this.f4v();
    this.d4v_1 = false;
  }
  protoOf(CanvasRenderer).f4v = function () {
    disposeCanvas(this);
    this.b4v_1 = Companion_getInstance().a49(this.x4u_1, this.y4u_1, 1, 8, 0, 32856);
    var tmp = this;
    var tmp0_elvis_lhs = Companion_getInstance_35().d4l(this.z4u_1, ensureNotNull(this.b4v_1), SurfaceOrigin_BOTTOM_LEFT_getInstance(), SurfaceColorFormat_RGBA_8888_getInstance(), Companion_getInstance_6().z4c_1, new SurfaceProps());
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      throw new RenderException('Cannot create surface');
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    tmp.a4v_1 = tmp_0;
    this.c4v_1 = ensureNotNull(this.a4v_1).k4l();
  };
  protoOf(CanvasRenderer).g4v = function () {
    if (this.d4v_1) {
      return Unit_instance;
    }
    this.d4v_1 = true;
    var tmp = window;
    tmp.requestAnimationFrame(CanvasRenderer$needRedraw$lambda(this));
  };
  function get_hostOs() {
    _init_properties_OsArch_web_kt__49jcm8();
    return hostOs;
  }
  var hostOs;
  function get_hostArch() {
    _init_properties_OsArch_web_kt__49jcm8();
    return hostArch;
  }
  var hostArch;
  var hostId$delegate;
  function detectHostOs() {
    _init_properties_OsArch_web_kt__49jcm8();
    // Inline function 'kotlin.takeIf' call
    var this_0 = getNavigatorInfo();
    var tmp;
    // Inline function 'kotlin.text.isNotEmpty' call
    if (charSequenceLength(this_0) > 0) {
      tmp = this_0;
    } else {
      tmp = null;
    }
    var tmp0_elvis_lhs = tmp;
    var platformInfo = tmp0_elvis_lhs == null ? window.navigator.userAgent : tmp0_elvis_lhs;
    return contains(platformInfo, 'Android', true) ? OS_Android_getInstance() : contains(platformInfo, 'iPhone', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iOS', true) ? OS_Ios_getInstance() : contains(platformInfo, 'iPad', true) ? OS_Ios_getInstance() : contains(platformInfo, 'Linux', true) ? OS_Linux_getInstance() : contains(platformInfo, 'Mac', true) ? OS_MacOS_getInstance() : contains(platformInfo, 'Win', true) ? OS_Windows_getInstance() : OS_Unknown_getInstance();
  }
  function getNavigatorInfo() {
    _init_properties_OsArch_web_kt__49jcm8();
    return navigator.userAgentData ? navigator.userAgentData.platform : navigator.platform;
  }
  function hostId$delegate$lambda() {
    _init_properties_OsArch_web_kt__49jcm8();
    return get_hostOs().j4s_1 + '-' + get_hostArch().n4s_1;
  }
  var properties_initialized_OsArch_web_kt_10ji6a;
  function _init_properties_OsArch_web_kt__49jcm8() {
    if (!properties_initialized_OsArch_web_kt_10ji6a) {
      properties_initialized_OsArch_web_kt_10ji6a = true;
      hostOs = detectHostOs();
      hostArch = Arch_Unknown_getInstance();
      hostId$delegate = lazy(hostId$delegate$lambda);
    }
  }
  function attachTo($this, htmlCanvas) {
    $this.k4v_1 = htmlCanvas;
    var tmp = $this;
    tmp.h4v_1 = new SkiaLayer$attachTo$1(htmlCanvas, $this);
  }
  function SkiaLayer$attachTo$1($htmlCanvas, this$0) {
    this.t4v_1 = this$0;
    CanvasRenderer.call(this, createWebGLContext($htmlCanvas), $htmlCanvas.width, $htmlCanvas.height);
  }
  protoOf(SkiaLayer$attachTo$1).e4v = function (currentTimestamp) {
    var currentNanos = currentTimestamp * 1000000;
    var tmp0_safe_receiver = this.t4v_1.j4v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.o4s(ensureNotNull(this.c4v_1), this.x4u_1, this.y4u_1, numberToLong(currentNanos));
    }
  };
  function SkiaLayer() {
    this.h4v_1 = null;
    this.i4v_1 = GraphicsApi_WEBGL_getInstance();
    this.j4v_1 = null;
    this.k4v_1 = null;
  }
  protoOf(SkiaLayer).u4v = function (throttledToVsync) {
    var tmp0_safe_receiver = this.h4v_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.g4v();
    }
  };
  protoOf(SkiaLayer).v4v = function (throttledToVsync, $super) {
    throttledToVsync = throttledToVsync === VOID ? true : throttledToVsync;
    var tmp;
    if ($super === VOID) {
      this.u4v(throttledToVsync);
      tmp = Unit_instance;
    } else {
      tmp = $super.u4v.call(this, throttledToVsync);
    }
    return tmp;
  };
  protoOf(SkiaLayer).w4v = function (container) {
    attachTo(this, container instanceof HTMLCanvasElement ? container : THROW_CCE());
  };
  function get_currentSystemTheme() {
    return SystemTheme_UNKNOWN_getInstance();
  }
  //region block: post-declaration
  protoOf(Bitmap).b47 = get_width;
  protoOf(Bitmap).c47 = get_height;
  protoOf(Bitmap).a4a = get_colorType;
  protoOf(Bitmap).b4a = get_colorSpace;
  protoOf(Bitmap).c4a = get_isOpaque;
  protoOf(Image).b47 = get_width;
  protoOf(Image).c47 = get_height;
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'alpha', function () {
    return this.i4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'depth', function () {
    return this.j4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'stencil', function () {
    return this.k4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'antialias', function () {
    return this.l4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'premultipliedAlpha', function () {
    return this.m4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preserveDrawingBuffer', function () {
    return this.n4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'preferLowPowerToHighPerformance', function () {
    return this.o4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'failIfMajorPerformanceCaveat', function () {
    return this.p4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'enableExtensionsByDefault', function () {
    return this.q4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'explicitSwapControl', function () {
    return this.r4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'renderViaOffscreenBackBuffer', function () {
    return this.s4u();
  });
  defineProp(protoOf(createWebGLContext$contextAttributes$1), 'majorVersion', function () {
    return this.t4u();
  });
  //endregion
  //region block: init
  Companion_instance_3 = new Companion_3();
  Companion_instance_12 = new Companion_12();
  Companion_instance_16 = new Companion_16();
  Companion_instance_18 = new Companion_18();
  Companion_instance_32 = new Companion_32();
  Companion_instance_40 = new Companion_40();
  Companion_instance_44 = new Companion_44();
  Companion_instance_45 = new Companion_45();
  Companion_instance_51 = new Companion_51();
  Companion_instance_53 = new Companion_53();
  Companion_instance_54 = new Companion_54();
  Companion_instance_59 = new Companion_59();
  Companion_instance_60 = new Companion_60();
  Companion_instance_61 = new Companion_61();
  Stats_instance = new Stats();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = CharDirection_getInstance;
  _.$_$.b = Companion_getInstance_0;
  _.$_$.c = Companion_getInstance_1;
  _.$_$.d = Companion_getInstance_4;
  _.$_$.e = Companion_getInstance_6;
  _.$_$.f = Companion_getInstance_7;
  _.$_$.g = Companion_getInstance_8;
  _.$_$.h = Companion_getInstance_11;
  _.$_$.i = Companion_getInstance_13;
  _.$_$.j = Companion_getInstance_14;
  _.$_$.k = Companion_getInstance_19;
  _.$_$.l = Companion_getInstance_22;
  _.$_$.m = Companion_getInstance_25;
  _.$_$.n = Companion_instance_32;
  _.$_$.o = Companion_getInstance_33;
  _.$_$.p = Companion_getInstance_34;
  _.$_$.q = ShadowUtils_getInstance;
  _.$_$.r = Companion_getInstance_35;
  _.$_$.s = Alignment_CENTER_getInstance;
  _.$_$.t = Alignment_END_getInstance;
  _.$_$.u = Alignment_JUSTIFY_getInstance;
  _.$_$.v = Alignment_LEFT_getInstance;
  _.$_$.w = Alignment_RIGHT_getInstance;
  _.$_$.x = Alignment_START_getInstance;
  _.$_$.y = BaselineMode_ALPHABETIC_getInstance;
  _.$_$.z = DecorationLineStyle_DASHED_getInstance;
  _.$_$.a1 = DecorationLineStyle_DOTTED_getInstance;
  _.$_$.b1 = DecorationLineStyle_DOUBLE_getInstance;
  _.$_$.c1 = DecorationLineStyle_SOLID_getInstance;
  _.$_$.d1 = DecorationLineStyle_WAVY_getInstance;
  _.$_$.e1 = Direction_LTR_getInstance;
  _.$_$.f1 = Direction_RTL_getInstance;
  _.$_$.g1 = HeightMode_ALL_getInstance;
  _.$_$.h1 = HeightMode_DISABLE_ALL_getInstance;
  _.$_$.i1 = HeightMode_DISABLE_FIRST_ASCENT_getInstance;
  _.$_$.j1 = HeightMode_DISABLE_LAST_DESCENT_getInstance;
  _.$_$.k1 = PlaceholderAlignment_ABOVE_BASELINE_getInstance;
  _.$_$.l1 = PlaceholderAlignment_BOTTOM_getInstance;
  _.$_$.m1 = PlaceholderAlignment_MIDDLE_getInstance;
  _.$_$.n1 = PlaceholderAlignment_TOP_getInstance;
  _.$_$.o1 = RectHeightMode_MAX_getInstance;
  _.$_$.p1 = RectHeightMode_STRUT_getInstance;
  _.$_$.q1 = RectWidthMode_TIGHT_getInstance;
  _.$_$.r1 = SVGLengthUnit_PX_getInstance;
  _.$_$.s1 = SVGPreserveAspectRatioAlign_NONE_getInstance;
  _.$_$.t1 = BlendMode_CLEAR_getInstance;
  _.$_$.u1 = BlendMode_COLOR_BURN_getInstance;
  _.$_$.v1 = BlendMode_COLOR_DODGE_getInstance;
  _.$_$.w1 = BlendMode_COLOR_getInstance;
  _.$_$.x1 = BlendMode_DARKEN_getInstance;
  _.$_$.y1 = BlendMode_DIFFERENCE_getInstance;
  _.$_$.z1 = BlendMode_DST_ATOP_getInstance;
  _.$_$.a2 = BlendMode_DST_IN_getInstance;
  _.$_$.b2 = BlendMode_DST_OUT_getInstance;
  _.$_$.c2 = BlendMode_DST_OVER_getInstance;
  _.$_$.d2 = BlendMode_DST_getInstance;
  _.$_$.e2 = BlendMode_EXCLUSION_getInstance;
  _.$_$.f2 = BlendMode_HARD_LIGHT_getInstance;
  _.$_$.g2 = BlendMode_HUE_getInstance;
  _.$_$.h2 = BlendMode_LIGHTEN_getInstance;
  _.$_$.i2 = BlendMode_LUMINOSITY_getInstance;
  _.$_$.j2 = BlendMode_MODULATE_getInstance;
  _.$_$.k2 = BlendMode_MULTIPLY_getInstance;
  _.$_$.l2 = BlendMode_OVERLAY_getInstance;
  _.$_$.m2 = BlendMode_PLUS_getInstance;
  _.$_$.n2 = BlendMode_SATURATION_getInstance;
  _.$_$.o2 = BlendMode_SCREEN_getInstance;
  _.$_$.p2 = BlendMode_SOFT_LIGHT_getInstance;
  _.$_$.q2 = BlendMode_SRC_ATOP_getInstance;
  _.$_$.r2 = BlendMode_SRC_IN_getInstance;
  _.$_$.s2 = BlendMode_SRC_OUT_getInstance;
  _.$_$.t2 = BlendMode_SRC_OVER_getInstance;
  _.$_$.u2 = BlendMode_SRC_getInstance;
  _.$_$.v2 = BlendMode_XOR_getInstance;
  _.$_$.w2 = ClipMode_DIFFERENCE_getInstance;
  _.$_$.x2 = ClipMode_INTERSECT_getInstance;
  _.$_$.y2 = ColorAlphaType_OPAQUE_getInstance;
  _.$_$.z2 = ColorAlphaType_PREMUL_getInstance;
  _.$_$.a3 = ColorType_ALPHA_8_getInstance;
  _.$_$.b3 = ColorType_RGBA_F16_getInstance;
  _.$_$.c3 = ColorType_RGB_565_getInstance;
  _.$_$.d3 = FilterMode_LINEAR_getInstance;
  _.$_$.e3 = FilterMode_NEAREST_getInstance;
  _.$_$.f3 = FilterTileMode_CLAMP_getInstance;
  _.$_$.g3 = FilterTileMode_DECAL_getInstance;
  _.$_$.h3 = FilterTileMode_MIRROR_getInstance;
  _.$_$.i3 = FilterTileMode_REPEAT_getInstance;
  _.$_$.j3 = FontEdging_ALIAS_getInstance;
  _.$_$.k3 = FontEdging_ANTI_ALIAS_getInstance;
  _.$_$.l3 = FontEdging_SUBPIXEL_ANTI_ALIAS_getInstance;
  _.$_$.m3 = FontHinting_FULL_getInstance;
  _.$_$.n3 = FontHinting_NONE_getInstance;
  _.$_$.o3 = FontHinting_NORMAL_getInstance;
  _.$_$.p3 = FontHinting_SLIGHT_getInstance;
  _.$_$.q3 = FontSlant_ITALIC_getInstance;
  _.$_$.r3 = FontSlant_UPRIGHT_getInstance;
  _.$_$.s3 = MipmapMode_NEAREST_getInstance;
  _.$_$.t3 = MipmapMode_NONE_getInstance;
  _.$_$.u3 = PaintMode_FILL_getInstance;
  _.$_$.v3 = PaintMode_STROKE_getInstance;
  _.$_$.w3 = PaintStrokeCap_BUTT_getInstance;
  _.$_$.x3 = PaintStrokeCap_ROUND_getInstance;
  _.$_$.y3 = PaintStrokeCap_SQUARE_getInstance;
  _.$_$.z3 = PaintStrokeJoin_BEVEL_getInstance;
  _.$_$.a4 = PaintStrokeJoin_MITER_getInstance;
  _.$_$.b4 = PaintStrokeJoin_ROUND_getInstance;
  _.$_$.c4 = PathDirection_CLOCKWISE_getInstance;
  _.$_$.d4 = PathDirection_COUNTER_CLOCKWISE_getInstance;
  _.$_$.e4 = PathFillMode_EVEN_ODD_getInstance;
  _.$_$.f4 = PathFillMode_WINDING_getInstance;
  _.$_$.g4 = PathOp_DIFFERENCE_getInstance;
  _.$_$.h4 = PathOp_INTERSECT_getInstance;
  _.$_$.i4 = PathOp_REVERSE_DIFFERENCE_getInstance;
  _.$_$.j4 = PathOp_UNION_getInstance;
  _.$_$.k4 = PathOp_XOR_getInstance;
  _.$_$.l4 = FontCollection_init_$Create$;
  _.$_$.m4 = TextStyle_init_$Create$;
  _.$_$.n4 = TypefaceFontProviderWithFallback_init_$Create$;
  _.$_$.o4 = SVGDOM_init_$Create$;
  _.$_$.p4 = SVGPreserveAspectRatio_init_$Create$_0;
  _.$_$.q4 = Bitmap_init_$Create$;
  _.$_$.r4 = Canvas_init_$Create$;
  _.$_$.s4 = Font_init_$Create$_0;
  _.$_$.t4 = FontStyle_init_$Create$;
  _.$_$.u4 = FontVariation_init_$Create$;
  _.$_$.v4 = Paint_init_$Create$;
  _.$_$.w4 = Path_init_$Create$;
  _.$_$.x4 = PathBuilder_init_$Create$;
  _.$_$.y4 = PathBuilder_init_$Create$_0;
  _.$_$.z4 = PathMeasure_init_$Create$;
  _.$_$.a5 = PictureRecorder_init_$Create$;
  _.$_$.b5 = RTreeFactory_init_$Create$;
  _.$_$.c5 = RenderNode_init_$Create$;
  _.$_$.d5 = RenderNodeContext_init_$Create$;
  _.$_$.e5 = DecorationStyle;
  _.$_$.f5 = LineMetrics;
  _.$_$.g5 = ParagraphBuilder;
  _.$_$.h5 = ParagraphStyle;
  _.$_$.i5 = PlaceholderStyle;
  _.$_$.j5 = Shadow;
  _.$_$.k5 = TextIndent;
  _.$_$.l5 = SVGLength;
  _.$_$.m5 = ColorInfo;
  _.$_$.n5 = CubicResampler;
  _.$_$.o5 = FilterMipmap;
  _.$_$.p5 = FontMgrWithFallback;
  _.$_$.q5 = GradientStyle;
  _.$_$.r5 = ImageInfo;
  _.$_$.s5 = Matrix33;
  _.$_$.t5 = Matrix44;
  _.$_$.u5 = Point3;
  _.$_$.v5 = Point;
  _.$_$.w5 = onWasmReady;
  _.$_$.x5 = SkiaLayer;
  _.$_$.y5 = SkikoRenderDelegate;
  _.$_$.z5 = currentNanoTime;
  _.$_$.a6 = get_currentSystemTheme;
  _.$_$.b6 = get_hostOs;
  //endregion
  return _;
}));

//# sourceMappingURL=skiko-kjs.js.map
