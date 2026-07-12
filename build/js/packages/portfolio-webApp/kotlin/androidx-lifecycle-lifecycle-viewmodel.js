(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-lifecycle-lifecycle-viewmodel'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-lifecycle-lifecycle-viewmodel'.");
    }
    globalThis['androidx-lifecycle-lifecycle-viewmodel'] = factory(typeof globalThis['androidx-lifecycle-lifecycle-viewmodel'] === 'undefined' ? {} : globalThis['androidx-lifecycle-lifecycle-viewmodel'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.aa;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.t1;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var toSet = kotlin_kotlin.$_$.t6;
  var toMap = kotlin_kotlin.$_$.q6;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var hashCode = kotlin_kotlin.$_$.i9;
  var toString = kotlin_kotlin.$_$.hc;
  var toString_0 = kotlin_kotlin.$_$.ca;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var isInterface = kotlin_kotlin.$_$.r9;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var VOID = kotlin_kotlin.$_$.c;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var equals = kotlin_kotlin.$_$.b9;
  var objectCreate = kotlin_kotlin.$_$.z9;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.u2;
  var Exception = kotlin_kotlin.$_$.uc;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v1;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var PrimitiveClasses_getInstance = kotlin_kotlin.$_$.b1;
  var toString_1 = kotlin_kotlin.$_$.de;
  //endregion
  //region block: pre-declaration
  function get_defaultViewModelProviderFactory() {
    return DefaultViewModelProviderFactory_instance;
  }
  function get_defaultViewModelCreationExtras() {
    return Empty_getInstance();
  }
  initMetadataForInterface(HasDefaultViewModelProviderFactory, 'HasDefaultViewModelProviderFactory');
  initMetadataForClass(ViewModelStore, 'ViewModelStore', ViewModelStore);
  initMetadataForInterface(ViewModelStoreOwner, 'ViewModelStoreOwner');
  initMetadataForClass(CreationExtras, 'CreationExtras');
  initMetadataForObject(Empty, 'Empty', VOID, CreationExtras);
  initMetadataForCompanion(Companion);
  initMetadataForClass(MutableCreationExtras, 'MutableCreationExtras', MutableCreationExtras_init_$Create$, CreationExtras);
  initMetadataForClass(ViewModelImpl, 'ViewModelImpl', ViewModelImpl_init_$Create$);
  initMetadataForClass(ViewModelProviderImpl, 'ViewModelProviderImpl');
  initMetadataForObject(ViewModelProviders, 'ViewModelProviders');
  initMetadataForClass(ViewModel, 'ViewModel');
  initMetadataForClass(ViewModelProvider$Companion$VIEW_MODEL_KEY$$inlined$Key$1);
  function create(modelClass, extras) {
    return ViewModelProviders_instance.h6e();
  }
  initMetadataForInterface(Factory, 'Factory');
  initMetadataForClass(OnRequeryFactory, 'OnRequeryFactory');
  initMetadataForCompanion(Companion_0);
  initMetadataForClass(ViewModelProvider, 'ViewModelProvider');
  initMetadataForObject(DefaultViewModelProviderFactory, 'DefaultViewModelProviderFactory', VOID, VOID, [Factory]);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  //endregion
  function HasDefaultViewModelProviderFactory() {
  }
  function ViewModelStore() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.m6d_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(ViewModelStore).n6d = function (key, viewModel) {
    var oldViewModel = this.m6d_1.y1(key, viewModel);
    if (oldViewModel == null)
      null;
    else {
      oldViewModel.p6d();
    }
  };
  protoOf(ViewModelStore).pd = function (key) {
    return this.m6d_1.u1(key);
  };
  protoOf(ViewModelStore).q6d = function () {
    return toSet(this.m6d_1.v1());
  };
  protoOf(ViewModelStore).b2 = function () {
    var snapshot = toMap(this.m6d_1);
    this.m6d_1.b2();
    var _iterator__ex2g4s = snapshot.w1().i();
    while (_iterator__ex2g4s.j()) {
      var viewModel = _iterator__ex2g4s.k();
      viewModel.p6d();
    }
  };
  protoOf(ViewModelStore).toString = function () {
    var tmp0_elvis_lhs = getKClassFromExpression(this).x9();
    var className = tmp0_elvis_lhs == null ? 'ViewModelStore' : tmp0_elvis_lhs;
    var identity = toString(hashCode(this), 16);
    return className + '@' + identity + '(keys=' + toString_0(this.q6d()) + ')';
  };
  function ViewModelStoreOwner() {
  }
  function get_defaultViewModelProviderFactory_0(_this__u8e3s4) {
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, HasDefaultViewModelProviderFactory) : false) {
      tmp = _this__u8e3s4.k6d();
    } else {
      tmp = DefaultViewModelProviderFactory_instance;
    }
    return tmp;
  }
  function get_defaultViewModelCreationExtras_0(_this__u8e3s4) {
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, HasDefaultViewModelProviderFactory) : false) {
      tmp = _this__u8e3s4.l6d();
    } else {
      tmp = Empty_getInstance();
    }
    return tmp;
  }
  function Empty() {
    Empty_instance = this;
    CreationExtras.call(this);
  }
  var Empty_instance;
  function Empty_getInstance() {
    if (Empty_instance == null)
      new Empty();
    return Empty_instance;
  }
  function Companion() {
  }
  var Companion_instance;
  function Companion_getInstance() {
    return Companion_instance;
  }
  function CreationExtras() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.s6d_1 = LinkedHashMap_init_$Create$();
  }
  protoOf(CreationExtras).equals = function (other) {
    var tmp;
    if (other instanceof CreationExtras) {
      tmp = equals(this.s6d_1, other.s6d_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(CreationExtras).hashCode = function () {
    return hashCode(this.s6d_1);
  };
  protoOf(CreationExtras).toString = function () {
    return 'CreationExtras(extras=' + toString_0(this.s6d_1) + ')';
  };
  function MutableCreationExtras_init_$Init$(initialExtras, $this) {
    initialExtras = initialExtras === VOID ? Empty_getInstance() : initialExtras;
    MutableCreationExtras.call($this, initialExtras.s6d_1);
    return $this;
  }
  function MutableCreationExtras_init_$Create$(initialExtras) {
    return MutableCreationExtras_init_$Init$(initialExtras, objectCreate(protoOf(MutableCreationExtras)));
  }
  function MutableCreationExtras(initialExtras) {
    CreationExtras.call(this);
    // Inline function 'kotlin.collections.plusAssign' call
    this.s6d_1.a2(initialExtras);
  }
  protoOf(MutableCreationExtras).u6d = function (key, t) {
    // Inline function 'kotlin.collections.set' call
    this.s6d_1.y1(key, t);
  };
  function ViewModelImpl_init_$Init$($this) {
    ViewModelImpl.call($this);
    return $this;
  }
  function ViewModelImpl_init_$Create$() {
    return ViewModelImpl_init_$Init$(objectCreate(protoOf(ViewModelImpl)));
  }
  function closeWithRuntimeException($this, closeable) {
    try {
      if (closeable == null)
        null;
      else {
        closeable.q2g();
      }
    } catch ($p) {
      if ($p instanceof Exception) {
        var e = $p;
        throw RuntimeException_init_$Create$(e);
      } else {
        throw $p;
      }
    }
  }
  protoOf(ViewModelImpl).b2 = function () {
    if (this.y6d_1)
      return Unit_instance;
    this.y6d_1 = true;
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.v6d_1;
    var _iterator__ex2g4s = this.w6d_1.w1().i();
    while (_iterator__ex2g4s.j()) {
      var closeable = _iterator__ex2g4s.k();
      closeWithRuntimeException(this, closeable);
    }
    var _iterator__ex2g4s_0 = this.x6d_1.i();
    while (_iterator__ex2g4s_0.j()) {
      var closeable_0 = _iterator__ex2g4s_0.k();
      closeWithRuntimeException(this, closeable_0);
    }
    this.x6d_1.b2();
  };
  function ViewModelImpl() {
    this.v6d_1 = new SynchronizedObject();
    var tmp = this;
    // Inline function 'kotlin.collections.mutableMapOf' call
    tmp.w6d_1 = LinkedHashMap_init_$Create$();
    var tmp_0 = this;
    // Inline function 'kotlin.collections.mutableSetOf' call
    tmp_0.x6d_1 = LinkedHashSet_init_$Create$();
    this.y6d_1 = false;
  }
  function ViewModelProviderImpl(store, factory, defaultExtras) {
    this.z6d_1 = store;
    this.a6e_1 = factory;
    this.b6e_1 = defaultExtras;
    this.c6e_1 = new SynchronizedObject();
  }
  protoOf(ViewModelProviderImpl).d6e = function (modelClass, key) {
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronized' call
    // Inline function 'androidx.lifecycle.viewmodel.internal.synchronizedImpl' call
    this.c6e_1;
    var tmp$ret$2;
    $l$block: {
      var viewModel = this.z6d_1.pd(key);
      if (modelClass.y9(viewModel)) {
        var tmp = this.a6e_1;
        if (tmp instanceof OnRequeryFactory) {
          this.a6e_1.e6e(ensureNotNull(viewModel));
        }
        tmp$ret$2 = viewModel instanceof ViewModel ? viewModel : THROW_CCE();
        break $l$block;
      }
      var modelExtras = MutableCreationExtras_init_$Create$(this.b6e_1);
      modelExtras.u6d(Companion_getInstance_0().f6e_1, key);
      // Inline function 'kotlin.also' call
      var this_0 = createViewModel(this.a6e_1, modelClass, modelExtras);
      this.z6d_1.n6d(key, this_0);
      tmp$ret$2 = this_0;
    }
    return tmp$ret$2;
  };
  function ViewModelProviders() {
    this.g6e_1 = 'androidx.lifecycle.ViewModelProvider.DefaultKey';
  }
  protoOf(ViewModelProviders).h6e = function () {
    throw UnsupportedOperationException_init_$Create$('`Factory.create(String, CreationExtras)` is not implemented. You may need to override the method and provide a custom implementation. Note that using `Factory.create(String)` is not supported and considered an error.');
  };
  var ViewModelProviders_instance;
  function ViewModelProviders_getInstance() {
    return ViewModelProviders_instance;
  }
  function ViewModel_init_$Init$($this) {
    ViewModel.call($this);
    $this.o6d_1 = ViewModelImpl_init_$Create$();
    return $this;
  }
  protoOf(ViewModel).i6e = function () {
  };
  protoOf(ViewModel).p6d = function () {
    this.o6d_1.b2();
    this.i6e();
  };
  function ViewModel() {
  }
  function ViewModelProvider$Companion$VIEW_MODEL_KEY$$inlined$Key$1() {
  }
  protoOf(ViewModelProvider$Companion$VIEW_MODEL_KEY$$inlined$Key$1).toString = function () {
    var identity = toString(hashCode(this), 16);
    return 'CreationExtras.Key@' + identity + '<' + toString_1(PrimitiveClasses_getInstance().ra().x9()) + '>';
  };
  function Factory() {
  }
  function OnRequeryFactory() {
  }
  protoOf(OnRequeryFactory).e6e = function (viewModel) {
  };
  function Companion_0() {
    Companion_instance_0 = this;
    var tmp = this;
    // Inline function 'androidx.lifecycle.viewmodel.Companion.Key' call
    tmp.f6e_1 = new ViewModelProvider$Companion$VIEW_MODEL_KEY$$inlined$Key$1();
  }
  protoOf(Companion_0).k6e = function (owner, factory, extras) {
    return new ViewModelProvider(new ViewModelProviderImpl(owner.r6d(), factory, extras));
  };
  protoOf(Companion_0).l6e = function (owner, factory, extras, $super) {
    factory = factory === VOID ? get_defaultViewModelProviderFactory_0(owner) : factory;
    extras = extras === VOID ? get_defaultViewModelCreationExtras_0(owner) : extras;
    return $super === VOID ? this.k6e(owner, factory, extras) : $super.k6e.call(this, owner, factory, extras);
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion_0();
    return Companion_instance_0;
  }
  function ViewModelProvider(impl) {
    Companion_getInstance_0();
    this.m6e_1 = impl;
  }
  protoOf(ViewModelProvider).n6e = function (key, modelClass) {
    return this.m6e_1.d6e(modelClass, key);
  };
  function DefaultViewModelProviderFactory() {
  }
  protoOf(DefaultViewModelProviderFactory).j6e = function (modelClass, extras) {
    return ViewModelProviders_instance.h6e();
  };
  var DefaultViewModelProviderFactory_instance;
  function DefaultViewModelProviderFactory_getInstance() {
    return DefaultViewModelProviderFactory_instance;
  }
  function createViewModel(factory, modelClass, extras) {
    return factory.j6e(modelClass, extras);
  }
  function SynchronizedObject() {
  }
  //region block: init
  Companion_instance = new Companion();
  ViewModelProviders_instance = new ViewModelProviders();
  DefaultViewModelProviderFactory_instance = new DefaultViewModelProviderFactory();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HasDefaultViewModelProviderFactory;
  _.$_$.b = create;
  _.$_$.c = Factory;
  _.$_$.d = ViewModelStoreOwner;
  _.$_$.e = ViewModelStore;
  _.$_$.f = ViewModel;
  _.$_$.g = Companion_instance;
  _.$_$.h = Companion_getInstance_0;
  _.$_$.i = MutableCreationExtras_init_$Create$;
  _.$_$.j = ViewModel_init_$Init$;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-lifecycle-lifecycle-viewmodel.js.map
