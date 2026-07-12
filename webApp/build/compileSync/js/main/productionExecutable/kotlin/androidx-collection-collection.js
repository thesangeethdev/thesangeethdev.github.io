(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'androidx-collection-collection'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'androidx-collection-collection'.");
    }
    globalThis['androidx-collection-collection'] = factory(typeof globalThis['androidx-collection-collection'] === 'undefined' ? {} : globalThis['androidx-collection-collection'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var clz32 = Math.clz32;
  var equals = kotlin_kotlin.$_$.b9;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var ConcurrentModificationException_init_$Create$ = kotlin_kotlin.$_$.d2;
  var IndexOutOfBoundsException = kotlin_kotlin.$_$.xc;
  var VOID = kotlin_kotlin.$_$.c;
  var protoOf = kotlin_kotlin.$_$.aa;
  var arrayCopy = kotlin_kotlin.$_$.v3;
  var copyOf = kotlin_kotlin.$_$.m4;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c2;
  var getNumberHashCode = kotlin_kotlin.$_$.f9;
  var until = kotlin_kotlin.$_$.ra;
  var toRawBits = kotlin_kotlin.$_$.be;
  var fromInt = kotlin_kotlin.$_$.d8;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var Long = kotlin_kotlin.$_$.yc;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var bitwiseOr = kotlin_kotlin.$_$.w7;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.r2;
  var longArray = kotlin_kotlin.$_$.u9;
  var fill = kotlin_kotlin.$_$.w4;
  var invert = kotlin_kotlin.$_$.e8;
  var shiftRightUnsigned = kotlin_kotlin.$_$.k8;
  var negate = kotlin_kotlin.$_$.h8;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var multiply = kotlin_kotlin.$_$.g8;
  var bitwiseXor = kotlin_kotlin.$_$.x7;
  var subtract = kotlin_kotlin.$_$.m8;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var countTrailingZeroBits = kotlin_kotlin.$_$.kd;
  var _ULong___init__impl__c78o9k = kotlin_kotlin.$_$.r;
  var _ULong___get_data__impl__fggpzb = kotlin_kotlin.$_$.s;
  var ulongCompare = kotlin_kotlin.$_$.ge;
  var add = kotlin_kotlin.$_$.u7;
  var get_lastIndex = kotlin_kotlin.$_$.m5;
  var compare = kotlin_kotlin.$_$.y7;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var copyOf_0 = kotlin_kotlin.$_$.p4;
  var hashCode = kotlin_kotlin.$_$.i9;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var copyOf_1 = kotlin_kotlin.$_$.k4;
  var fill_0 = kotlin_kotlin.$_$.x4;
  var toString = kotlin_kotlin.$_$.ca;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var firstOrNull = kotlin_kotlin.$_$.z4;
  var toString_0 = kotlin_kotlin.$_$.de;
  var KtMutableList = kotlin_kotlin.$_$.p3;
  var checkIndexOverflow = kotlin_kotlin.$_$.a4;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var KtMap = kotlin_kotlin.$_$.o3;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var SequenceScope = kotlin_kotlin.$_$.ya;
  var numberRangeToNumber = kotlin_kotlin.$_$.v9;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var iterator = kotlin_kotlin.$_$.bb;
  var Collection = kotlin_kotlin.$_$.l3;
  var isInterface = kotlin_kotlin.$_$.r9;
  var Entry = kotlin_kotlin.$_$.n3;
  var KtSet = kotlin_kotlin.$_$.t3;
  var longArrayOf = kotlin_kotlin.$_$.t9;
  var IndexOutOfBoundsException_init_$Create$ = kotlin_kotlin.$_$.q2;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var NoSuchElementException_init_$Create$_0 = kotlin_kotlin.$_$.t2;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var ClassCastException = kotlin_kotlin.$_$.pc;
  var NullPointerException = kotlin_kotlin.$_$.bd;
  var StringBuilder_init_$Create$_0 = kotlin_kotlin.$_$.b2;
  var copyOf_2 = kotlin_kotlin.$_$.o4;
  var LinkedHashMap_init_$Create$ = kotlin_kotlin.$_$.u1;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(DoubleList, 'DoubleList');
  initMetadataForClass(MutableDoubleList, 'MutableDoubleList', MutableDoubleList, DoubleList);
  initMetadataForClass(IndexBasedArrayIterator, 'IndexBasedArrayIterator');
  initMetadataForClass(IntIntMap, 'IntIntMap');
  initMetadataForClass(MutableIntIntMap, 'MutableIntIntMap', MutableIntIntMap, IntIntMap);
  initMetadataForClass(IntList, 'IntList');
  initMetadataForClass(MutableIntList, 'MutableIntList', MutableIntList, IntList);
  initMetadataForClass(IntObjectMap, 'IntObjectMap');
  initMetadataForClass(MutableIntObjectMap, 'MutableIntObjectMap', MutableIntObjectMap, IntObjectMap);
  initMetadataForClass(IntSet, 'IntSet');
  initMetadataForClass(MutableIntSet, 'MutableIntSet', MutableIntSet, IntSet);
  initMetadataForClass(LongList, 'LongList');
  initMetadataForClass(MutableLongList, 'MutableLongList', MutableLongList, LongList);
  initMetadataForClass(LongObjectMap, 'LongObjectMap');
  initMetadataForClass(MutableLongObjectMap, 'MutableLongObjectMap', MutableLongObjectMap, LongObjectMap);
  initMetadataForClass(LongSet, 'LongSet');
  initMetadataForClass(MutableLongSet, 'MutableLongSet', MutableLongSet, LongSet);
  initMetadataForClass(LruCache, 'LruCache');
  initMetadataForClass(ObjectIntMap, 'ObjectIntMap');
  initMetadataForClass(MutableObjectIntMap, 'MutableObjectIntMap', MutableObjectIntMap, ObjectIntMap);
  initMetadataForClass(MutableObjectListIterator, 'MutableObjectListIterator');
  initMetadataForClass(ObjectListMutableList, 'ObjectListMutableList', VOID, VOID, [KtMutableList]);
  initMetadataForClass(SubList, 'SubList', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ObjectList, 'ObjectList');
  initMetadataForClass(MutableObjectList, 'MutableObjectList', MutableObjectList, ObjectList);
  initMetadataForClass(ScatterMap, 'ScatterMap');
  initMetadataForClass(MutableScatterMap, 'MutableScatterMap', MutableScatterMap, ScatterMap);
  initMetadataForClass(MapWrapper, 'MapWrapper', VOID, VOID, [KtMap]);
  initMetadataForLambda(Entries$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Entries, 'Entries', VOID, VOID, [KtSet]);
  initMetadataForLambda(Keys$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Keys, 'Keys', VOID, VOID, [KtSet]);
  initMetadataForLambda(Values$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(Values, 'Values', VOID, VOID, [Collection]);
  initMetadataForClass(MapEntry, 'MapEntry', VOID, VOID, [Entry]);
  initMetadataForClass(ScatterSet, 'ScatterSet');
  initMetadataForClass(MutableScatterSet, 'MutableScatterSet', MutableScatterSet, ScatterSet);
  initMetadataForLambda(MutableSetWrapper$iterator$o$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(MutableSetWrapper$iterator$1);
  initMetadataForClass(SetWrapper, 'SetWrapper', VOID, VOID, [KtSet]);
  initMetadataForClass(MutableSetWrapper, 'MutableSetWrapper', VOID, SetWrapper, [Collection, KtSet]);
  initMetadataForLambda(SetWrapper$iterator$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(ElementIterator, 'ElementIterator', VOID, IndexBasedArrayIterator);
  initMetadataForClass(ArraySet, 'ArraySet', ArraySet, VOID, [Collection, KtSet]);
  initMetadataForClass(LongSparseArray, 'LongSparseArray', LongSparseArray);
  initMetadataForClass(LruHashMap, 'LruHashMap', LruHashMap);
  initMetadataForClass(Lock, 'Lock', Lock);
  //endregion
  function allocArrays(_this__u8e3s4, size) {
    _this__u8e3s4.ah_1 = new Int32Array(size);
    var tmp = _this__u8e3s4;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp.bh_1 = Array(size);
  }
  function indexOfNull(_this__u8e3s4) {
    return indexOf(_this__u8e3s4, null, 0);
  }
  function indexOf(_this__u8e3s4, key, hash) {
    var n = _this__u8e3s4.ch_1;
    if (n === 0) {
      return -1;
    }
    var index = binarySearchInternal(_this__u8e3s4, hash);
    if (index < 0) {
      return index;
    }
    if (equals(key, _this__u8e3s4.bh_1[index])) {
      return index;
    }
    var end = index + 1 | 0;
    while (end < n && _this__u8e3s4.ah_1[end] === hash) {
      if (equals(key, _this__u8e3s4.bh_1[end])) {
        return end;
      }
      end = end + 1 | 0;
    }
    var i = index - 1 | 0;
    while (i >= 0 && _this__u8e3s4.ah_1[i] === hash) {
      if (equals(key, _this__u8e3s4.bh_1[i])) {
        return i;
      }
      i = i - 1 | 0;
    }
    return ~end;
  }
  function binarySearchInternal(_this__u8e3s4, hash) {
    var tmp;
    try {
      tmp = binarySearch(_this__u8e3s4.ah_1, _this__u8e3s4.ch_1, hash);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof IndexOutOfBoundsException) {
        var e = $p;
        throw ConcurrentModificationException_init_$Create$();
      } else {
        throw $p;
      }
    }
    return tmp;
  }
  function MutableDoubleList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    DoubleList.call(this, initialCapacity);
  }
  protoOf(MutableDoubleList).fh = function (element) {
    this.ih(this.hh_1 + 1 | 0);
    this.gh_1[this.hh_1] = element;
    this.hh_1 = this.hh_1 + 1 | 0;
    return true;
  };
  protoOf(MutableDoubleList).jh = function (index, elements) {
    if (!(0 <= index ? index <= this.hh_1 : false)) {
      throwIndexOutOfBoundsException('');
    }
    // Inline function 'kotlin.collections.isEmpty' call
    if (elements.length === 0)
      return false;
    this.ih(this.hh_1 + elements.length | 0);
    var content = this.gh_1;
    if (!(index === this.hh_1)) {
      var tmp4 = index + elements.length | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.hh_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex_0 = elements.length;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = elements;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    arrayCopy(tmp_0, content, index, 0, endIndex_0);
    this.hh_1 = this.hh_1 + elements.length | 0;
    return true;
  };
  protoOf(MutableDoubleList).ih = function (capacity) {
    var oldContent = this.gh_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.gh_1 = copyOf(oldContent, newSize);
    }
  };
  function DoubleList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyDoubleArray();
    } else {
      tmp_0 = new Float64Array(initialCapacity);
    }
    tmp.gh_1 = tmp_0;
    this.hh_1 = 0;
  }
  protoOf(DoubleList).kh = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      // Inline function 'androidx.collection.DoubleList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.gh_1;
      var inductionVariable = 0;
      var last = this.hh_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.h(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.h(separator);
          }
          this_0.fb(element);
        }
         while (inductionVariable < last);
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(DoubleList).lh = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.kh(separator, prefix, postfix, limit, truncated) : $super.kh.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(DoubleList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.DoubleList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.gh_1;
    var inductionVariable = 0;
    var last = this.hh_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, getNumberHashCode(element)) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(DoubleList).equals = function (other) {
    var tmp;
    if (!(other instanceof DoubleList)) {
      tmp = true;
    } else {
      tmp = !(other.hh_1 === this.hh_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.gh_1;
    var otherContent = other.gh_1;
    // Inline function 'androidx.collection.DoubleList.indices' call
    var progression = until(0, this.hh_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(DoubleList).toString = function () {
    return this.lh(VOID, '[', ']');
  };
  function get_EmptyDoubleArray() {
    _init_properties_DoubleSet_kt__4b4k9t();
    return EmptyDoubleArray;
  }
  var EmptyDoubleArray;
  var properties_initialized_DoubleSet_kt_kcrj8h;
  function _init_properties_DoubleSet_kt__4b4k9t() {
    if (!properties_initialized_DoubleSet_kt_kcrj8h) {
      properties_initialized_DoubleSet_kt_kcrj8h = true;
      EmptyDoubleArray = new Float64Array(0);
    }
  }
  function _FloatFloatPair___init__impl__2q1dd3(packedValue) {
    return packedValue;
  }
  function _FloatFloatPair___get_packedValue__impl__5lczxp($this) {
    return $this;
  }
  function _FloatFloatPair___init__impl__2q1dd3_0(first, second) {
    // Inline function 'androidx.collection.packFloats' call
    var v1 = fromInt(toRawBits(first));
    var v2 = fromInt(toRawBits(second));
    var tmp$ret$0 = bitwiseOr(shiftLeft(v1, 32), bitwiseAnd(v2, new Long(-1, 0)));
    return _FloatFloatPair___init__impl__2q1dd3(tmp$ret$0);
  }
  function IndexBasedArrayIterator(startingSize) {
    this.mh_1 = startingSize;
    this.nh_1 = 0;
    this.oh_1 = false;
  }
  protoOf(IndexBasedArrayIterator).j = function () {
    return this.nh_1 < this.mh_1;
  };
  protoOf(IndexBasedArrayIterator).k = function () {
    if (!this.j()) {
      throw NoSuchElementException_init_$Create$();
    }
    var res = this.ph(this.nh_1);
    this.nh_1 = this.nh_1 + 1 | 0;
    this.oh_1 = true;
    return res;
  };
  protoOf(IndexBasedArrayIterator).l3 = function () {
    // Inline function 'androidx.collection.internal.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!this.oh_1) {
      var tmp$ret$2 = 'Call next() before removing an element.';
      throwIllegalStateException(tmp$ret$2);
    }
    this.nh_1 = this.nh_1 - 1 | 0;
    this.qh(this.nh_1);
    this.mh_1 = this.mh_1 - 1 | 0;
    this.oh_1 = false;
  };
  var EmptyIntIntMap;
  function initializeStorage($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.uh_1 = newCapacity;
    initializeMetadata($this, newCapacity);
    $this.sh_1 = new Int32Array(newCapacity);
    $this.th_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.rh_1 = tmp_0;
    var tmp0 = $this.rh_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth($this);
  }
  function initializeGrowth($this) {
    $this.bi_1 = loadedCapacity($this.ci()) - $this.vh_1 | 0;
  }
  function findInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.uh_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.rh_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.sh_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot($this, hash1);
    var tmp_0;
    if ($this.bi_1 === 0) {
      var tmp0_0 = $this.rh_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.di();
      index_0 = findFirstAvailableSlot($this, hash1);
    }
    $this.vh_1 = $this.vh_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.bi_1;
    var tmp_3;
    var tmp0_1 = $this.rh_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.bi_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.rh_1;
    var tmp2 = $this.uh_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot($this, hash1) {
    var probeMask = $this.uh_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.rh_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntIntMap.call(this);
    this.bi_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntIntMap).ei = function (key, value) {
    var index = findInsertIndex(this, key);
    if (index < 0)
      index = ~index;
    this.sh_1[index] = key;
    this.th_1[index] = value;
  };
  protoOf(MutableIntIntMap).fi = function (key) {
    var index = this.gi(key);
    if (index >= 0) {
      this.hi(index);
    }
  };
  protoOf(MutableIntIntMap).hi = function (index) {
    this.vh_1 = this.vh_1 - 1 | 0;
    var tmp0 = this.rh_1;
    var tmp2 = this.uh_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
  };
  protoOf(MutableIntIntMap).di = function () {
    var tmp;
    if (this.uh_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.vh_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.uh_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.uh_1));
    }
  };
  protoOf(MutableIntIntMap).ji = function () {
    var metadata = this.rh_1;
    var capacity = this.uh_1;
    var keys = this.sh_1;
    var values = this.th_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth(this);
  };
  protoOf(MutableIntIntMap).ii = function (newCapacity) {
    var previousMetadata = this.rh_1;
    var previousKeys = this.sh_1;
    var previousValues = this.th_1;
    var previousCapacity = this.uh_1;
    initializeStorage(this, newCapacity);
    var newMetadata = this.rh_1;
    var newKeys = this.sh_1;
    var newValues = this.th_1;
    var capacity = this.uh_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableIntIntMapOf() {
    _init_properties_IntIntMap_kt__7n90ay();
    return new MutableIntIntMap();
  }
  function IntIntMap() {
    this.rh_1 = get_EmptyGroup();
    this.sh_1 = get_EmptyIntArray();
    this.th_1 = get_EmptyIntArray();
    this.uh_1 = 0;
    this.vh_1 = 0;
  }
  protoOf(IntIntMap).ci = function () {
    return this.uh_1;
  };
  protoOf(IntIntMap).l = function () {
    return this.vh_1;
  };
  protoOf(IntIntMap).n = function () {
    return this.vh_1 === 0;
  };
  protoOf(IntIntMap).ki = function () {
    return !(this.vh_1 === 0);
  };
  protoOf(IntIntMap).m = function (key) {
    var index = this.gi(key);
    if (index < 0) {
      throwNoSuchElementException('Cannot find value for key ' + key);
    }
    return this.th_1[index];
  };
  protoOf(IntIntMap).li = function (key, defaultValue) {
    var index = this.gi(key);
    if (index >= 0) {
      return this.th_1[index];
    }
    return defaultValue;
  };
  protoOf(IntIntMap).mi = function (key) {
    return this.gi(key) >= 0;
  };
  protoOf(IntIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.sh_1;
    var v = this.th_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.rh_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  hash = hash + (k[index] ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(IntIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntIntMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.sh_1;
    var v = this.th_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.rh_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var index_0 = other.gi(tmp0);
                  if (index_0 < 0 || !(value_0 === other.th_1[index_0])) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntIntMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntIntMap.forEach' call
    var k = this.sh_1;
    var v = this.th_1;
    $l$block: {
      // Inline function 'androidx.collection.IntIntMap.forEachIndexed' call
      var m = this.rh_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.cb(tmp0);
                  s.q7('=');
                  s.cb(value_0);
                  i = i + 1 | 0;
                  if (i < this.vh_1) {
                    s.r7(_Char___init__impl__6a9atx(44)).r7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(IntIntMap).gi = function (key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.uh_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.rh_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (this.sh_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  var properties_initialized_IntIntMap_kt_jyvqp8;
  function _init_properties_IntIntMap_kt__7n90ay() {
    if (!properties_initialized_IntIntMap_kt_jyvqp8) {
      properties_initialized_IntIntMap_kt_jyvqp8 = true;
      EmptyIntIntMap = new MutableIntIntMap(0);
    }
  }
  var EmptyIntList;
  function IntList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyIntArray();
    } else {
      tmp_0 = new Int32Array(initialCapacity);
    }
    tmp.ni_1 = tmp_0;
    this.oi_1 = 0;
  }
  protoOf(IntList).pi = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.oi_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    return this.ni_1[0];
  };
  protoOf(IntList).m = function (index) {
    if (!(0 <= index ? index < this.oi_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.ni_1[index];
  };
  protoOf(IntList).ad = function () {
    // Inline function 'androidx.collection.IntList.isEmpty' call
    if (this.oi_1 === 0) {
      throwNoSuchElementException('IntList is empty.');
    }
    var tmp = this.ni_1;
    // Inline function 'androidx.collection.IntList.lastIndex' call
    return tmp[this.oi_1 - 1 | 0];
  };
  protoOf(IntList).kh = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      // Inline function 'androidx.collection.IntList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.ni_1;
      var inductionVariable = 0;
      var last = this.oi_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.h(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.h(separator);
          }
          this_0.cb(element);
        }
         while (inductionVariable < last);
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntList).qi = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.kh(separator, prefix, postfix, limit, truncated) : $super.kh.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.IntList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.ni_1;
    var inductionVariable = 0;
    var last = this.oi_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, element) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(IntList).equals = function (other) {
    var tmp;
    if (!(other instanceof IntList)) {
      tmp = true;
    } else {
      tmp = !(other.oi_1 === this.oi_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.ni_1;
    var otherContent = other.ni_1;
    // Inline function 'androidx.collection.IntList.indices' call
    var progression = until(0, this.oi_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!(content[i] === otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(IntList).toString = function () {
    return this.qi(VOID, '[', ']');
  };
  function MutableIntList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    IntList.call(this, initialCapacity);
  }
  protoOf(MutableIntList).ti = function (element) {
    this.ih(this.oi_1 + 1 | 0);
    this.ni_1[this.oi_1] = element;
    this.oi_1 = this.oi_1 + 1 | 0;
    return true;
  };
  protoOf(MutableIntList).ih = function (capacity) {
    var oldContent = this.ni_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.ni_1 = copyOf_0(oldContent, newSize);
    }
  };
  protoOf(MutableIntList).g2 = function (index) {
    if (!(0 <= index ? index < this.oi_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.ni_1;
    var item = content[index];
    // Inline function 'androidx.collection.IntList.lastIndex' call
    if (!(index === (this.oi_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.oi_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.oi_1 = this.oi_1 - 1 | 0;
    return item;
  };
  protoOf(MutableIntList).e4 = function (start, end) {
    if (!(0 <= start ? start <= this.oi_1 : false) || !(0 <= end ? end <= this.oi_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    if (end < start) {
      throwIllegalArgumentException('The end index must be < start index');
    }
    if (!(end === start)) {
      if (end < this.oi_1) {
        var tmp0 = this.ni_1;
        var tmp2 = this.ni_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.oi_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, start, end, endIndex);
      }
      this.oi_1 = this.oi_1 - (end - start | 0) | 0;
    }
  };
  protoOf(MutableIntList).ui = function (index, element) {
    if (!(0 <= index ? index < this.oi_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.ni_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  function mutableIntListOf(element1) {
    _init_properties_IntList_kt__6yao5();
    var list = new MutableIntList(1);
    // Inline function 'androidx.collection.MutableIntList.plusAssign' call
    list.ti(element1);
    return list;
  }
  var properties_initialized_IntList_kt_cw8sw3;
  function _init_properties_IntList_kt__6yao5() {
    if (!properties_initialized_IntList_kt_cw8sw3) {
      properties_initialized_IntList_kt_cw8sw3 = true;
      EmptyIntList = new MutableIntList(0);
    }
  }
  function get_EmptyIntObjectMap() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    return EmptyIntObjectMap;
  }
  var EmptyIntObjectMap;
  function initializeStorage_0($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.yi_1 = newCapacity;
    initializeMetadata_0($this, newCapacity);
    $this.wi_1 = new Int32Array(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.xi_1 = Array(newCapacity);
  }
  function initializeMetadata_0($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.vi_1 = tmp_0;
    var tmp0 = $this.vi_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_0($this);
  }
  function initializeGrowth_0($this) {
    $this.fj_1 = loadedCapacity($this.ci()) - $this.zi_1 | 0;
  }
  function findAbsoluteInsertIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.yi_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.vi_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.wi_1[index] === key) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_0($this, hash1);
    var tmp_0;
    if ($this.fj_1 === 0) {
      var tmp0_0 = $this.vi_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.di();
      index_0 = findFirstAvailableSlot_0($this, hash1);
    }
    $this.zi_1 = $this.zi_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.fj_1;
    var tmp_3;
    var tmp0_1 = $this.vi_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.fj_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.vi_1;
    var tmp2 = $this.yi_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_0($this, hash1) {
    var probeMask = $this.yi_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.vi_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntObjectMap.call(this);
    this.fj_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_0(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntObjectMap).gj = function (key, value) {
    var index = findAbsoluteInsertIndex(this, key);
    this.wi_1[index] = key;
    this.xi_1[index] = value;
  };
  protoOf(MutableIntObjectMap).hj = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yi_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.vi_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.wi_1[index] === key) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      return this.ij(index_0);
    }
    return null;
  };
  protoOf(MutableIntObjectMap).ij = function (index) {
    this.zi_1 = this.zi_1 - 1 | 0;
    var tmp0 = this.vi_1;
    var tmp2 = this.yi_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.xi_1[index];
    this.xi_1[index] = null;
    return oldValue;
  };
  protoOf(MutableIntObjectMap).di = function () {
    var tmp;
    if (this.yi_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.zi_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.yi_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.yi_1));
    }
  };
  protoOf(MutableIntObjectMap).ji = function () {
    var metadata = this.vi_1;
    var capacity = this.yi_1;
    var keys = this.wi_1;
    var values = this.xi_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_0(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = 0;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_0(this);
  };
  protoOf(MutableIntObjectMap).ii = function (newCapacity) {
    var previousMetadata = this.vi_1;
    var previousKeys = this.wi_1;
    var previousValues = this.xi_1;
    var previousCapacity = this.yi_1;
    initializeStorage_0(this, newCapacity);
    var newMetadata = this.vi_1;
    var newKeys = this.wi_1;
    var newValues = this.xi_1;
    var capacity = this.yi_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_0(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableIntObjectMapOf() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    return new MutableIntObjectMap();
  }
  function mutableIntObjectMapOf_0(key1, value1, key2, value2, key3, value3) {
    _init_properties_IntObjectMap_kt__bzh4pa();
    // Inline function 'kotlin.also' call
    var this_0 = new MutableIntObjectMap();
    this_0.gj(key1, value1);
    this_0.gj(key2, value2);
    this_0.gj(key3, value3);
    return this_0;
  }
  function IntObjectMap() {
    this.vi_1 = get_EmptyGroup();
    this.wi_1 = get_EmptyIntArray();
    this.xi_1 = get_EMPTY_OBJECTS();
    this.yi_1 = 0;
    this.zi_1 = 0;
  }
  protoOf(IntObjectMap).ci = function () {
    return this.yi_1;
  };
  protoOf(IntObjectMap).l = function () {
    return this.zi_1;
  };
  protoOf(IntObjectMap).n = function () {
    return this.zi_1 === 0;
  };
  protoOf(IntObjectMap).m = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yi_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.vi_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.wi_1[index] === key) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    return index_0 >= 0 ? this.xi_1[index_0] : null;
  };
  protoOf(IntObjectMap).mi = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.yi_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.vi_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.wi_1[index] === key) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(IntObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.wi_1;
    var v = this.xi_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.vi_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp = hash;
                  var tmp_0 = k[index];
                  // Inline function 'kotlin.hashCode' call
                  var tmp0_safe_receiver = v[index];
                  var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
                  hash = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(IntObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntObjectMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.wi_1;
    var v = this.xi_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.vi_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  if (value_0 == null) {
                    if (!(other.m(tmp0) == null) || !other.mi(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, other.m(tmp0))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntObjectMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.IntObjectMap.forEach' call
    var k = this.wi_1;
    var v = this.xi_1;
    $l$block: {
      // Inline function 'androidx.collection.IntObjectMap.forEachIndexed' call
      var m = this.vi_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.cb(tmp0);
                  s.q7('=');
                  s.p7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.zi_1) {
                    s.r7(_Char___init__impl__6a9atx(44)).r7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r7(_Char___init__impl__6a9atx(125)).toString();
  };
  function intObjectMapOf() {
    _init_properties_IntObjectMap_kt__bzh4pa();
    var tmp = get_EmptyIntObjectMap();
    return tmp instanceof IntObjectMap ? tmp : THROW_CCE();
  }
  var properties_initialized_IntObjectMap_kt_hqy7tc;
  function _init_properties_IntObjectMap_kt__bzh4pa() {
    if (!properties_initialized_IntObjectMap_kt_hqy7tc) {
      properties_initialized_IntObjectMap_kt_hqy7tc = true;
      EmptyIntObjectMap = new MutableIntObjectMap(0);
    }
  }
  var EmptyIntSet;
  function get_EmptyIntArray() {
    _init_properties_IntSet_kt__km4dgt();
    return EmptyIntArray;
  }
  var EmptyIntArray;
  function initializeStorage_1($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.lj_1 = newCapacity;
    initializeMetadata_1($this, newCapacity);
    $this.kj_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_1($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.jj_1 = tmp_0;
    var tmp0 = $this.jj_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_1($this);
  }
  function initializeGrowth_1($this) {
    $this.rj_1 = loadedCapacity($this.ci()) - $this.mj_1 | 0;
  }
  function removeElementAt($this, index) {
    $this.mj_1 = $this.mj_1 - 1 | 0;
    var tmp0 = $this.jj_1;
    var tmp2 = $this.lj_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
  }
  function findAbsoluteInsertIndex_0($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.lj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.jj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if ($this.kj_1[index] === element) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_1($this, hash1);
    var tmp_0;
    if ($this.rj_1 === 0) {
      var tmp0_0 = $this.jj_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.di();
      index_0 = findFirstAvailableSlot_1($this, hash1);
    }
    $this.mj_1 = $this.mj_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.rj_1;
    var tmp_3;
    var tmp0_1 = $this.jj_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.rj_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.jj_1;
    var tmp2 = $this.lj_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_1($this, hash1) {
    var probeMask = $this.lj_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.jj_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableIntSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    IntSet.call(this);
    this.rj_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_1(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableIntSet).ti = function (element) {
    var oldSize = this.mj_1;
    var index = findAbsoluteInsertIndex_0(this, element);
    this.kj_1[index] = element;
    return !(this.mj_1 === oldSize);
  };
  protoOf(MutableIntSet).hj = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.jj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.kj_1[index] === element) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt(this, index_0);
    }
    return exists;
  };
  protoOf(MutableIntSet).di = function () {
    var tmp;
    if (this.lj_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.mj_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.lj_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.lj_1));
    }
  };
  protoOf(MutableIntSet).ji = function () {
    var metadata = this.jj_1;
    var capacity = this.lj_1;
    var elements = this.kj_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_1(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_1(this);
  };
  protoOf(MutableIntSet).ii = function (newCapacity) {
    var previousMetadata = this.jj_1;
    var previousElements = this.kj_1;
    var previousCapacity = this.lj_1;
    initializeStorage_1(this, newCapacity);
    var newMetadata = this.jj_1;
    var newElements = this.kj_1;
    var capacity = this.lj_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_1(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableIntSetOf() {
    _init_properties_IntSet_kt__km4dgt();
    return new MutableIntSet();
  }
  function IntSet() {
    this.jj_1 = get_EmptyGroup();
    this.kj_1 = get_EmptyIntArray();
    this.lj_1 = 0;
    this.mj_1 = 0;
  }
  protoOf(IntSet).ci = function () {
    return this.lj_1;
  };
  protoOf(IntSet).sj = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.lj_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.jj_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (this.kj_1[index] === element) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(IntSet).kh = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      var index = 0;
      // Inline function 'androidx.collection.IntSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.kj_1;
      $l$block_0: {
        // Inline function 'androidx.collection.IntSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.jj_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$7 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$7, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.h(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.h(separator);
                    }
                    this_0.cb(element);
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(IntSet).tj = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.kh(separator, prefix, postfix, limit, truncated) : $super.kh.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(IntSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.kj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.jj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  hash = hash + k[index] | 0;
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
    return hash;
  };
  protoOf(IntSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof IntSet)) {
      return false;
    }
    if (!(other.mj_1 === this.mj_1)) {
      return false;
    }
    // Inline function 'androidx.collection.IntSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.kj_1;
    $l$block: {
      // Inline function 'androidx.collection.IntSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.jj_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = k[index];
                  if (!other.sj(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(IntSet).toString = function () {
    return this.tj(VOID, '[', ']');
  };
  var properties_initialized_IntSet_kt_za7tcl;
  function _init_properties_IntSet_kt__km4dgt() {
    if (!properties_initialized_IntSet_kt_za7tcl) {
      properties_initialized_IntSet_kt_za7tcl = true;
      EmptyIntSet = new MutableIntSet(0);
      EmptyIntArray = new Int32Array(0);
    }
  }
  function MutableLongList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    LongList.call(this, initialCapacity);
  }
  protoOf(MutableLongList).wj = function (element) {
    this.ih(this.yj_1 + 1 | 0);
    this.xj_1[this.yj_1] = element;
    this.yj_1 = this.yj_1 + 1 | 0;
    return true;
  };
  protoOf(MutableLongList).b2 = function () {
    this.yj_1 = 0;
  };
  protoOf(MutableLongList).ih = function (capacity) {
    var oldContent = this.xj_1;
    if (oldContent.length < capacity) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = imul(oldContent.length, 3) / 2 | 0;
      var newSize = Math.max(capacity, b);
      this.xj_1 = copyOf_1(oldContent, newSize);
    }
  };
  protoOf(MutableLongList).g2 = function (index) {
    if (!(0 <= index ? index < this.yj_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    var content = this.xj_1;
    var item = content[index];
    // Inline function 'androidx.collection.LongList.lastIndex' call
    if (!(index === (this.yj_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.yj_1;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = content;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      arrayCopy(tmp, content, index, tmp6, endIndex);
    }
    this.yj_1 = this.yj_1 - 1 | 0;
    return item;
  };
  protoOf(MutableLongList).e4 = function (start, end) {
    if (!(0 <= start ? start <= this.yj_1 : false) || !(0 <= end ? end <= this.yj_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    if (end < start) {
      throwIllegalArgumentException('The end index must be < start index');
    }
    if (!(end === start)) {
      if (end < this.yj_1) {
        var tmp0 = this.xj_1;
        var tmp2 = this.xj_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.yj_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, start, end, endIndex);
      }
      this.yj_1 = this.yj_1 - (end - start | 0) | 0;
    }
  };
  function LongList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyLongArray();
    } else {
      tmp_0 = longArray(initialCapacity);
    }
    tmp.xj_1 = tmp_0;
    this.yj_1 = 0;
  }
  protoOf(LongList).m = function (index) {
    if (!(0 <= index ? index < this.yj_1 : false)) {
      throwIndexOutOfBoundsException('Index must be between 0 and size');
    }
    return this.xj_1[index];
  };
  protoOf(LongList).kh = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      // Inline function 'androidx.collection.LongList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.xj_1;
      var inductionVariable = 0;
      var last = this.yj_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.h(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.h(separator);
          }
          this_0.db(element);
        }
         while (inductionVariable < last);
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(LongList).zj = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.kh(separator, prefix, postfix, limit, truncated) : $super.kh.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongList).hashCode = function () {
    var hashCode = 0;
    // Inline function 'androidx.collection.LongList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.xj_1;
    var inductionVariable = 0;
    var last = this.yj_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var element = content[i];
        hashCode = hashCode + imul(31, element.hashCode()) | 0;
      }
       while (inductionVariable < last);
    return hashCode;
  };
  protoOf(LongList).equals = function (other) {
    var tmp;
    if (!(other instanceof LongList)) {
      tmp = true;
    } else {
      tmp = !(other.yj_1 === this.yj_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.xj_1;
    var otherContent = other.xj_1;
    // Inline function 'androidx.collection.LongList.indices' call
    var progression = until(0, this.yj_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equalsLong(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(LongList).toString = function () {
    return this.zj(VOID, '[', ']');
  };
  var EmptyLongObjectMap;
  function initializeStorage_2($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.dk_1 = newCapacity;
    initializeMetadata_2($this, newCapacity);
    $this.bk_1 = longArray(newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ck_1 = Array(newCapacity);
  }
  function initializeMetadata_2($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.ak_1 = tmp_0;
    var tmp0 = $this.ak_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_2($this);
  }
  function initializeGrowth_2($this) {
    $this.kk_1 = loadedCapacity($this.ci()) - $this.ek_1 | 0;
  }
  function findAbsoluteInsertIndex_1($this, key) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(key.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.dk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.ak_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equalsLong($this.bk_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_2($this, hash1);
    var tmp_0;
    if ($this.kk_1 === 0) {
      var tmp0_0 = $this.ak_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.di();
      index_0 = findFirstAvailableSlot_2($this, hash1);
    }
    $this.ek_1 = $this.ek_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.kk_1;
    var tmp_3;
    var tmp0_1 = $this.ak_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.kk_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.ak_1;
    var tmp2 = $this.dk_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_2($this, hash1) {
    var probeMask = $this.dk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ak_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableLongObjectMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongObjectMap.call(this);
    this.kk_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_2(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongObjectMap).lk = function (key, value) {
    var index = findAbsoluteInsertIndex_1(this, key);
    this.bk_1[index] = key;
    this.ck_1[index] = value;
  };
  protoOf(MutableLongObjectMap).mk = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.dk_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ak_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.bk_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      return this.ij(index_0);
    }
    return null;
  };
  protoOf(MutableLongObjectMap).ij = function (index) {
    this.ek_1 = this.ek_1 - 1 | 0;
    var tmp0 = this.ak_1;
    var tmp2 = this.dk_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    var oldValue = this.ck_1[index];
    this.ck_1[index] = null;
    return oldValue;
  };
  protoOf(MutableLongObjectMap).b2 = function () {
    this.ek_1 = 0;
    if (!(this.ak_1 === get_EmptyGroup())) {
      fill(this.ak_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.ak_1;
      var tmp2 = this.dk_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.ck_1, null, 0, this.dk_1);
    initializeGrowth_2(this);
  };
  protoOf(MutableLongObjectMap).di = function () {
    var tmp;
    if (this.dk_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.ek_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.dk_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.dk_1));
    }
  };
  protoOf(MutableLongObjectMap).ji = function () {
    var metadata = this.ak_1;
    var capacity = this.dk_1;
    var keys = this.bk_1;
    var values = this.ck_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = keys[index];
      var hash = imul(k.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_2(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = new Long(0, 0);
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_2(this);
  };
  protoOf(MutableLongObjectMap).ii = function (newCapacity) {
    var previousMetadata = this.ak_1;
    var previousKeys = this.bk_1;
    var previousValues = this.ck_1;
    var previousCapacity = this.dk_1;
    initializeStorage_2(this, newCapacity);
    var newMetadata = this.ak_1;
    var newKeys = this.bk_1;
    var newValues = this.ck_1;
    var capacity = this.dk_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousKey.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_2(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableLongObjectMapOf() {
    _init_properties_LongObjectMap_kt__gzp4kx();
    return new MutableLongObjectMap();
  }
  function LongObjectMap() {
    this.ak_1 = get_EmptyGroup();
    this.bk_1 = get_EmptyLongArray();
    this.ck_1 = get_EMPTY_OBJECTS();
    this.dk_1 = 0;
    this.ek_1 = 0;
  }
  protoOf(LongObjectMap).ci = function () {
    return this.dk_1;
  };
  protoOf(LongObjectMap).l = function () {
    return this.ek_1;
  };
  protoOf(LongObjectMap).n = function () {
    return this.ek_1 === 0;
  };
  protoOf(LongObjectMap).nk = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.dk_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ak_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.bk_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    return index_0 >= 0 ? this.ck_1[index_0] : null;
  };
  protoOf(LongObjectMap).ok = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(key.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.dk_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ak_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.bk_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(LongObjectMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.bk_1;
    var v = this.ck_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.ak_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var tmp = hash;
                  var tmp_0 = tmp0.hashCode();
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = value_0 == null ? null : hashCode(value_0);
                  hash = tmp + (tmp_0 ^ (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs)) | 0;
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
    return hash;
  };
  protoOf(LongObjectMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongObjectMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.bk_1;
    var v = this.ck_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.ak_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  if (value_0 == null) {
                    if (!(other.nk(tmp0) == null) || !other.ok(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, other.nk(tmp0))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongObjectMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.LongObjectMap.forEach' call
    var k = this.bk_1;
    var v = this.ck_1;
    $l$block: {
      // Inline function 'androidx.collection.LongObjectMap.forEachIndexed' call
      var m = this.ak_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.db(tmp0);
                  s.q7('=');
                  s.p7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.ek_1) {
                    s.r7(_Char___init__impl__6a9atx(44)).r7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r7(_Char___init__impl__6a9atx(125)).toString();
  };
  var properties_initialized_LongObjectMap_kt_wv4qxd;
  function _init_properties_LongObjectMap_kt__gzp4kx() {
    if (!properties_initialized_LongObjectMap_kt_wv4qxd) {
      properties_initialized_LongObjectMap_kt_wv4qxd = true;
      EmptyLongObjectMap = new MutableLongObjectMap(0);
    }
  }
  var EmptyLongSet;
  function get_EmptyLongArray() {
    _init_properties_LongSet_kt__wt9fxo();
    return EmptyLongArray;
  }
  var EmptyLongArray;
  function initializeStorage_3($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.rk_1 = newCapacity;
    initializeMetadata_3($this, newCapacity);
    $this.qk_1 = longArray(newCapacity);
  }
  function initializeMetadata_3($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.pk_1 = tmp_0;
    var tmp0 = $this.pk_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_3($this);
  }
  function initializeGrowth_3($this) {
    $this.xk_1 = loadedCapacity($this.ci()) - $this.sk_1 | 0;
  }
  function removeElementAt_0($this, index) {
    $this.sk_1 = $this.sk_1 - 1 | 0;
    var tmp0 = $this.pk_1;
    var tmp2 = $this.rk_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
  }
  function findAbsoluteInsertIndex_2($this, element) {
    // Inline function 'androidx.collection.hash' call
    var hash = imul(element.hashCode(), -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.rk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.pk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$5 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$5);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equalsLong($this.qk_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$10 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$10, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_3($this, hash1);
    var tmp_0;
    if ($this.xk_1 === 0) {
      var tmp0_0 = $this.pk_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$12 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$12, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.di();
      index_0 = findFirstAvailableSlot_3($this, hash1);
    }
    $this.sk_1 = $this.sk_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.xk_1;
    var tmp_3;
    var tmp0_1 = $this.pk_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$14 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$14, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.xk_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.pk_1;
    var tmp2 = $this.rk_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_3($this, hash1) {
    var probeMask = $this.rk_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.pk_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableLongSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    LongSet.call(this);
    this.xk_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_3(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableLongSet).yk = function (element) {
    var index = findAbsoluteInsertIndex_2(this, element);
    this.qk_1[index] = element;
  };
  protoOf(MutableLongSet).mk = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.rk_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.pk_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.qk_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    var exists = index_0 >= 0;
    if (exists) {
      removeElementAt_0(this, index_0);
    }
    return exists;
  };
  protoOf(MutableLongSet).di = function () {
    var tmp;
    if (this.rk_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.sk_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.rk_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.rk_1));
    }
  };
  protoOf(MutableLongSet).ji = function () {
    var metadata = this.pk_1;
    var capacity = this.rk_1;
    var elements = this.qk_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      var k = elements[index];
      var hash = imul(k.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_3(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = new Long(0, 0);
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_3(this);
  };
  protoOf(MutableLongSet).ii = function (newCapacity) {
    var previousMetadata = this.pk_1;
    var previousElements = this.qk_1;
    var previousCapacity = this.rk_1;
    initializeStorage_3(this, newCapacity);
    var newMetadata = this.pk_1;
    var newElements = this.qk_1;
    var capacity = this.rk_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          var hash = imul(previousElement.hashCode(), -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$3 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_3(this, tmp$ret$3);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$4 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$4);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function LongSet() {
    this.pk_1 = get_EmptyGroup();
    this.qk_1 = get_EmptyLongArray();
    this.rk_1 = 0;
    this.sk_1 = 0;
  }
  protoOf(LongSet).ci = function () {
    return this.rk_1;
  };
  protoOf(LongSet).zk = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      var hash = imul(element.hashCode(), -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.rk_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.pk_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$6 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$6);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equalsLong(this.qk_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(LongSet).kh = function (separator, prefix, postfix, limit, truncated) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      var index = 0;
      // Inline function 'androidx.collection.LongSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var k = this.qk_1;
      $l$block_0: {
        // Inline function 'androidx.collection.LongSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.pk_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$7 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$7, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = k[index_0];
                    if (index === limit) {
                      this_0.h(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.h(separator);
                    }
                    this_0.db(element);
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(LongSet).al = function (separator, prefix, postfix, limit, truncated, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    return $super === VOID ? this.kh(separator, prefix, postfix, limit, truncated) : $super.kh.call(this, separator, prefix, postfix, limit, truncated);
  };
  protoOf(LongSet).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qk_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.pk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  hash = hash + k[index].hashCode() | 0;
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
    return hash;
  };
  protoOf(LongSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof LongSet)) {
      return false;
    }
    if (!(other.sk_1 === this.sk_1)) {
      return false;
    }
    // Inline function 'androidx.collection.LongSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var k = this.qk_1;
    $l$block: {
      // Inline function 'androidx.collection.LongSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.pk_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = k[index];
                  if (!other.zk(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(LongSet).toString = function () {
    return this.al(VOID, '[', ']');
  };
  var properties_initialized_LongSet_kt_r3x9iu;
  function _init_properties_LongSet_kt__wt9fxo() {
    if (!properties_initialized_LongSet_kt_r3x9iu) {
      properties_initialized_LongSet_kt_r3x9iu = true;
      EmptyLongSet = new MutableLongSet(0);
      EmptyLongArray = longArray(0);
    }
  }
  function get_DELETED() {
    _init_properties_LongSparseArray_kt__ucg8tx();
    return DELETED;
  }
  var DELETED;
  function access$_get_DELETED_$tLongSparseArrayKt_9psy8u() {
    return get_DELETED();
  }
  var properties_initialized_LongSparseArray_kt_xmlmcz;
  function _init_properties_LongSparseArray_kt__ucg8tx() {
    if (!properties_initialized_LongSparseArray_kt_xmlmcz) {
      properties_initialized_LongSparseArray_kt_xmlmcz = true;
      DELETED = new Object();
    }
  }
  function safeSizeOf($this, key, value) {
    var result = $this.kl(key, value);
    // Inline function 'androidx.collection.internal.checkPrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(result >= 0)) {
      var tmp$ret$2 = 'Negative size: ' + toString(key) + '=' + toString(value);
      throwIllegalStateException(tmp$ret$2);
    }
    return result;
  }
  function LruCache(maxSize) {
    this.bl_1 = maxSize;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(this.bl_1 > 0)) {
      var tmp$ret$2 = 'maxSize <= 0';
      throwIllegalArgumentException(tmp$ret$2);
    }
    this.cl_1 = new LruHashMap(0, 0.75);
    this.dl_1 = new Lock();
    this.el_1 = 0;
    this.fl_1 = 0;
    this.gl_1 = 0;
    this.hl_1 = 0;
    this.il_1 = 0;
    this.jl_1 = 0;
  }
  protoOf(LruCache).ll = function (key) {
    var mapValue;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.dl_1;
    mapValue = this.cl_1.ll(key);
    if (!(mapValue == null)) {
      this.il_1 = this.il_1 + 1 | 0;
      return mapValue;
    }
    this.jl_1 = this.jl_1 + 1 | 0;
    var tmp0_elvis_lhs = this.nl(key);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var createdValue = tmp;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.dl_1;
    this.gl_1 = this.gl_1 + 1 | 0;
    mapValue = this.cl_1.ol(key, createdValue);
    var tmp_0;
    if (!(mapValue == null)) {
      tmp_0 = this.cl_1.ol(key, ensureNotNull(mapValue));
    } else {
      this.el_1 = this.el_1 + safeSizeOf(this, key, createdValue) | 0;
      tmp_0 = Unit_instance;
    }
    var tmp_1;
    if (!(mapValue == null)) {
      this.ql(false, key, createdValue, mapValue);
      tmp_1 = mapValue;
    } else {
      this.pl(this.bl_1);
      tmp_1 = createdValue;
    }
    return tmp_1;
  };
  protoOf(LruCache).ol = function (key, value) {
    var previous;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.dl_1;
    this.fl_1 = this.fl_1 + 1 | 0;
    this.el_1 = this.el_1 + safeSizeOf(this, key, value) | 0;
    previous = this.cl_1.ol(key, value);
    if (!(previous == null)) {
      this.el_1 = this.el_1 - safeSizeOf(this, key, previous) | 0;
    }
    if (!(previous == null)) {
      this.ql(false, key, previous, value);
    }
    this.pl(this.bl_1);
    return previous;
  };
  protoOf(LruCache).pl = function (maxSize) {
    while (true) {
      var key;
      var value;
      // Inline function 'androidx.collection.internal.synchronized' call
      // Inline function 'kotlin.contracts.contract' call
      // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
      this.dl_1;
      // Inline function 'androidx.collection.internal.checkPrecondition' call
      // Inline function 'kotlin.contracts.contract' call
      if (!!(this.el_1 < 0 || (this.cl_1.rl() && !(this.el_1 === 0)))) {
        var tmp$ret$6 = 'LruCache.sizeOf() is reporting inconsistent results!';
        throwIllegalStateException(tmp$ret$6);
      }
      if (this.el_1 <= maxSize || this.cl_1.rl()) {
        return Unit_instance;
      }
      var tmp0_elvis_lhs = firstOrNull(this.cl_1.x1());
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return Unit_instance;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      var toEvict = tmp;
      key = toEvict.q1();
      value = toEvict.r1();
      this.cl_1.sl(key);
      this.el_1 = this.el_1 - safeSizeOf(this, key, value) | 0;
      this.hl_1 = this.hl_1 + 1 | 0;
      this.ql(true, key, value, null);
    }
  };
  protoOf(LruCache).sl = function (key) {
    var previous;
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.dl_1;
    previous = this.cl_1.sl(key);
    if (!(previous == null)) {
      this.el_1 = this.el_1 - safeSizeOf(this, key, previous) | 0;
    }
    if (!(previous == null)) {
      this.ql(false, key, previous, null);
    }
    return previous;
  };
  protoOf(LruCache).ql = function (evicted, key, oldValue, newValue) {
  };
  protoOf(LruCache).nl = function (key) {
    return null;
  };
  protoOf(LruCache).kl = function (key, value) {
    return 1;
  };
  protoOf(LruCache).toString = function () {
    // Inline function 'androidx.collection.internal.synchronized' call
    // Inline function 'kotlin.contracts.contract' call
    // Inline function 'androidx.collection.internal.Lock.synchronizedImpl' call
    this.dl_1;
    var accesses = this.il_1 + this.jl_1 | 0;
    var tmp;
    if (!(accesses === 0)) {
      tmp = imul(100, this.il_1) / accesses | 0;
    } else {
      tmp = 0;
    }
    var hitPercent = tmp;
    return 'LruCache[maxSize=' + this.bl_1 + ',hits=' + this.il_1 + ',misses=' + this.jl_1 + ',' + ('hitRate=' + hitPercent + '%]');
  };
  function get_EmptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return EmptyObjectIntMap;
  }
  var EmptyObjectIntMap;
  function initializeStorage_4($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.wl_1 = newCapacity;
    initializeMetadata_4($this, newCapacity);
    var tmp_0 = $this;
    // Inline function 'kotlin.arrayOfNulls' call
    tmp_0.ul_1 = Array(newCapacity);
    $this.vl_1 = new Int32Array(newCapacity);
  }
  function initializeMetadata_4($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.tl_1 = tmp_0;
    var tmp0 = $this.tl_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_4($this);
  }
  function initializeGrowth_4($this) {
    $this.dm_1 = loadedCapacity($this.ci()) - $this.xl_1 | 0;
  }
  function findIndex($this, key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.wl_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.tl_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.ul_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_4($this, hash1);
    var tmp_0;
    if ($this.dm_1 === 0) {
      var tmp0_0 = $this.tl_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$13, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.di();
      index_0 = findFirstAvailableSlot_4($this, hash1);
    }
    $this.xl_1 = $this.xl_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.dm_1;
    var tmp_3;
    var tmp0_1 = $this.tl_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$15 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$15, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.dm_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.tl_1;
    var tmp2 = $this.wl_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  }
  function findFirstAvailableSlot_4($this, hash1) {
    var probeMask = $this.wl_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.tl_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableObjectIntMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ObjectIntMap.call(this);
    this.dm_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_4(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableObjectIntMap).em = function (key, value) {
    var index = findIndex(this, key);
    if (index < 0)
      index = ~index;
    this.ul_1[index] = key;
    this.vl_1[index] = value;
  };
  protoOf(MutableObjectIntMap).fm = function (key, value, default_0) {
    var index = findIndex(this, key);
    var previous = default_0;
    if (index < 0) {
      index = ~index;
    } else {
      previous = this.vl_1[index];
    }
    this.ul_1[index] = key;
    this.vl_1[index] = value;
    return previous;
  };
  protoOf(MutableObjectIntMap).gm = function (key) {
    var index = this.hm(key);
    if (index >= 0) {
      this.hi(index);
    }
  };
  protoOf(MutableObjectIntMap).hi = function (index) {
    this.xl_1 = this.xl_1 - 1 | 0;
    var tmp0 = this.tl_1;
    var tmp2 = this.wl_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.ul_1[index] = null;
  };
  protoOf(MutableObjectIntMap).b2 = function () {
    this.xl_1 = 0;
    if (!(this.tl_1 === get_EmptyGroup())) {
      fill(this.tl_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.tl_1;
      var tmp2 = this.wl_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.ul_1, null, 0, this.wl_1);
    initializeGrowth_4(this);
  };
  protoOf(MutableObjectIntMap).di = function () {
    var tmp;
    if (this.wl_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.xl_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.wl_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.wl_1));
    }
  };
  protoOf(MutableObjectIntMap).ji = function () {
    var metadata = this.tl_1;
    var capacity = this.wl_1;
    var keys = this.ul_1;
    var values = this.vl_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$3, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_4(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = 0;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_4(this);
  };
  protoOf(MutableObjectIntMap).ii = function (newCapacity) {
    var previousMetadata = this.tl_1;
    var previousKeys = this.ul_1;
    var previousValues = this.vl_1;
    var previousCapacity = this.wl_1;
    initializeStorage_4(this, newCapacity);
    var newMetadata = this.tl_1;
    var newKeys = this.ul_1;
    var newValues = this.vl_1;
    var capacity = this.wl_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$3, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_4(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableObjectIntMapOf() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    return new MutableObjectIntMap();
  }
  function ObjectIntMap() {
    this.tl_1 = get_EmptyGroup();
    this.ul_1 = get_EMPTY_OBJECTS();
    this.vl_1 = get_EmptyIntArray();
    this.wl_1 = 0;
    this.xl_1 = 0;
  }
  protoOf(ObjectIntMap).ci = function () {
    return this.wl_1;
  };
  protoOf(ObjectIntMap).l = function () {
    return this.xl_1;
  };
  protoOf(ObjectIntMap).n = function () {
    return this.xl_1 === 0;
  };
  protoOf(ObjectIntMap).ki = function () {
    return !(this.xl_1 === 0);
  };
  protoOf(ObjectIntMap).u1 = function (key) {
    var index = this.hm(key);
    if (index < 0) {
      throwNoSuchElementException('There is no key ' + toString_0(key) + ' in the map');
    }
    return this.vl_1[index];
  };
  protoOf(ObjectIntMap).im = function (key, defaultValue) {
    var index = this.hm(key);
    if (index >= 0) {
      return this.vl_1[index];
    }
    return defaultValue;
  };
  protoOf(ObjectIntMap).s1 = function (key) {
    return this.hm(key) >= 0;
  };
  protoOf(ObjectIntMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ul_1;
    var v = this.vl_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.tl_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var tmp = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  hash = tmp + ((tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) ^ v[index]) | 0;
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
    return hash;
  };
  protoOf(ObjectIntMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ObjectIntMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    var o = other instanceof ObjectIntMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ul_1;
    var v = this.vl_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.tl_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var index_0 = o.hm(tmp0);
                  if (index_0 < 0 || !(value_0 === o.vl_1[index_0])) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ObjectIntMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ObjectIntMap.forEach' call
    var k = this.ul_1;
    var v = this.vl_1;
    $l$block: {
      // Inline function 'androidx.collection.ObjectIntMap.forEachIndexed' call
      var m = this.tl_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.p7(tmp0 === this ? '(this)' : tmp0);
                  s.q7('=');
                  s.cb(value_0);
                  i = i + 1 | 0;
                  if (i < this.xl_1) {
                    s.r7(_Char___init__impl__6a9atx(44)).r7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ObjectIntMap).hm = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.wl_1;
    // Inline function 'androidx.collection.h1' call
    var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.tl_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.ul_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    return -1;
  };
  function emptyObjectIntMap() {
    _init_properties_ObjectIntMap_kt__tjeyss();
    var tmp = get_EmptyObjectIntMap();
    return tmp instanceof ObjectIntMap ? tmp : THROW_CCE();
  }
  var properties_initialized_ObjectIntMap_kt_ycqxma;
  function _init_properties_ObjectIntMap_kt__tjeyss() {
    if (!properties_initialized_ObjectIntMap_kt_ycqxma) {
      properties_initialized_ObjectIntMap_kt_ycqxma = true;
      EmptyObjectIntMap = new MutableObjectIntMap(0);
    }
  }
  function get_EmptyArray() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyArray;
  }
  var EmptyArray;
  function get_EmptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    return EmptyObjectList;
  }
  var EmptyObjectList;
  function throwIndexOutOfBoundsInclusiveException($this, index) {
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + $this.km_1);
  }
  function MutableObjectListIterator(list, index) {
    this.lm_1 = list;
    this.mm_1 = index - 1 | 0;
  }
  protoOf(MutableObjectListIterator).j = function () {
    return this.mm_1 < (this.lm_1.l() - 1 | 0);
  };
  protoOf(MutableObjectListIterator).k = function () {
    this.mm_1 = this.mm_1 + 1 | 0;
    return this.lm_1.m(this.mm_1);
  };
  protoOf(MutableObjectListIterator).l3 = function () {
    this.lm_1.g2(this.mm_1);
    this.mm_1 = this.mm_1 - 1 | 0;
  };
  protoOf(MutableObjectListIterator).v3 = function () {
    return this.mm_1 >= 0;
  };
  protoOf(MutableObjectListIterator).w3 = function () {
    return this.mm_1 + 1 | 0;
  };
  protoOf(MutableObjectListIterator).x3 = function () {
    var tmp1 = this.mm_1;
    this.mm_1 = tmp1 - 1 | 0;
    return this.lm_1.m(tmp1);
  };
  protoOf(MutableObjectListIterator).y3 = function () {
    return this.mm_1;
  };
  function ObjectListMutableList(objectList) {
    this.nm_1 = objectList;
  }
  protoOf(ObjectListMutableList).l = function () {
    return this.nm_1.l();
  };
  protoOf(ObjectListMutableList).om = function (element) {
    return this.nm_1.s(element);
  };
  protoOf(ObjectListMutableList).s = function (element) {
    if (!true)
      return false;
    return this.om(element);
  };
  protoOf(ObjectListMutableList).m = function (index) {
    checkIndex(this, index);
    return this.nm_1.m(index);
  };
  protoOf(ObjectListMutableList).pm = function (element) {
    return this.nm_1.u(element);
  };
  protoOf(ObjectListMutableList).u = function (element) {
    if (!true)
      return -1;
    return this.pm(element);
  };
  protoOf(ObjectListMutableList).n = function () {
    return this.nm_1.n();
  };
  protoOf(ObjectListMutableList).i = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(ObjectListMutableList).qm = function (element) {
    return this.nm_1.g(element);
  };
  protoOf(ObjectListMutableList).g = function (element) {
    return this.qm(element);
  };
  protoOf(ObjectListMutableList).um = function (index, element) {
    return this.nm_1.f2(index, element);
  };
  protoOf(ObjectListMutableList).f2 = function (index, element) {
    return this.um(index, element);
  };
  protoOf(ObjectListMutableList).vm = function (index, elements) {
    return this.nm_1.d2(index, elements);
  };
  protoOf(ObjectListMutableList).d2 = function (index, elements) {
    return this.vm(index, elements);
  };
  protoOf(ObjectListMutableList).wm = function (elements) {
    return this.nm_1.xm(elements);
  };
  protoOf(ObjectListMutableList).r = function (elements) {
    return this.wm(elements);
  };
  protoOf(ObjectListMutableList).b2 = function () {
    return this.nm_1.b2();
  };
  protoOf(ObjectListMutableList).t = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(ObjectListMutableList).ym = function (element) {
    return this.nm_1.c2(element);
  };
  protoOf(ObjectListMutableList).c2 = function (element) {
    if (!true)
      return false;
    return this.ym(element);
  };
  protoOf(ObjectListMutableList).g2 = function (index) {
    checkIndex(this, index);
    return this.nm_1.g2(index);
  };
  protoOf(ObjectListMutableList).zm = function (index, element) {
    checkIndex(this, index);
    return this.nm_1.e2(index, element);
  };
  protoOf(ObjectListMutableList).e2 = function (index, element) {
    return this.zm(index, element);
  };
  protoOf(ObjectListMutableList).o1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function SubList(list, start, end) {
    this.an_1 = list;
    this.bn_1 = start;
    this.cn_1 = end;
  }
  protoOf(SubList).l = function () {
    return this.cn_1 - this.bn_1 | 0;
  };
  protoOf(SubList).om = function (element) {
    var inductionVariable = this.bn_1;
    var last = this.cn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.an_1.m(i), element)) {
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).s = function (element) {
    if (!true)
      return false;
    return this.om(element);
  };
  protoOf(SubList).m = function (index) {
    checkIndex(this, index);
    return this.an_1.m(index + this.bn_1 | 0);
  };
  protoOf(SubList).pm = function (element) {
    var inductionVariable = this.bn_1;
    var last = this.cn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.an_1.m(i), element)) {
          return i - this.bn_1 | 0;
        }
      }
       while (inductionVariable < last);
    return -1;
  };
  protoOf(SubList).u = function (element) {
    if (!true)
      return -1;
    return this.pm(element);
  };
  protoOf(SubList).n = function () {
    return this.cn_1 === this.bn_1;
  };
  protoOf(SubList).i = function () {
    return new MutableObjectListIterator(this, 0);
  };
  protoOf(SubList).qm = function (element) {
    var tmp1 = this.cn_1;
    this.cn_1 = tmp1 + 1 | 0;
    this.an_1.f2(tmp1, element);
    return true;
  };
  protoOf(SubList).g = function (element) {
    return this.qm(element);
  };
  protoOf(SubList).um = function (index, element) {
    this.an_1.f2(index + this.bn_1 | 0, element);
    this.cn_1 = this.cn_1 + 1 | 0;
  };
  protoOf(SubList).f2 = function (index, element) {
    return this.um(index, element);
  };
  protoOf(SubList).vm = function (index, elements) {
    this.an_1.d2(index + this.bn_1 | 0, elements);
    this.cn_1 = this.cn_1 + elements.l() | 0;
    return elements.l() > 0;
  };
  protoOf(SubList).d2 = function (index, elements) {
    return this.vm(index, elements);
  };
  protoOf(SubList).wm = function (elements) {
    this.an_1.d2(this.cn_1, elements);
    this.cn_1 = this.cn_1 + elements.l() | 0;
    return elements.l() > 0;
  };
  protoOf(SubList).r = function (elements) {
    return this.wm(elements);
  };
  protoOf(SubList).b2 = function () {
    var inductionVariable = this.cn_1 - 1 | 0;
    var last = this.bn_1;
    if (last <= inductionVariable)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + -1 | 0;
        this.an_1.g2(i);
      }
       while (!(i === last));
    this.cn_1 = this.bn_1;
  };
  protoOf(SubList).t = function (index) {
    return new MutableObjectListIterator(this, index);
  };
  protoOf(SubList).ym = function (element) {
    var inductionVariable = this.bn_1;
    var last = this.cn_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (equals(this.an_1.m(i), element)) {
          this.an_1.g2(i);
          this.cn_1 = this.cn_1 - 1 | 0;
          return true;
        }
      }
       while (inductionVariable < last);
    return false;
  };
  protoOf(SubList).c2 = function (element) {
    if (!true)
      return false;
    return this.ym(element);
  };
  protoOf(SubList).g2 = function (index) {
    checkIndex(this, index);
    var element = this.an_1.g2(index + this.bn_1 | 0);
    this.cn_1 = this.cn_1 - 1 | 0;
    return element;
  };
  protoOf(SubList).zm = function (index, element) {
    checkIndex(this, index);
    return this.an_1.e2(index + this.bn_1 | 0, element);
  };
  protoOf(SubList).e2 = function (index, element) {
    return this.zm(index, element);
  };
  protoOf(SubList).o1 = function (fromIndex, toIndex) {
    checkSubIndex(this, fromIndex, toIndex);
    return new SubList(this, fromIndex, toIndex);
  };
  function MutableObjectList(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    ObjectList.call(this, initialCapacity);
    this.tm_1 = null;
  }
  protoOf(MutableObjectList).g = function (element) {
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.km_1 + 1 | 0;
    var oldContent = this.jm_1;
    if (oldContent.length < capacity) {
      this.dn(capacity, oldContent);
    }
    this.jm_1[this.km_1] = element;
    this.km_1 = this.km_1 + 1 | 0;
    return true;
  };
  protoOf(MutableObjectList).f2 = function (index, element) {
    if (!(0 <= index ? index <= this.km_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.km_1 + 1 | 0;
    var oldContent = this.jm_1;
    if (oldContent.length < capacity) {
      this.dn(capacity, oldContent);
    }
    var content = this.jm_1;
    if (!(index === this.km_1)) {
      var tmp4 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.km_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    content[index] = element;
    this.km_1 = this.km_1 + 1 | 0;
  };
  protoOf(MutableObjectList).d2 = function (index, elements) {
    if (!(0 <= index ? index <= this.km_1 : false)) {
      throwIndexOutOfBoundsInclusiveException(this, index);
    }
    if (elements.n())
      return false;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.km_1 + elements.l() | 0;
    var oldContent = this.jm_1;
    if (oldContent.length < capacity) {
      this.dn(capacity, oldContent);
    }
    var content = this.jm_1;
    if (!(index === this.km_1)) {
      var tmp4 = index + elements.l() | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.km_1;
      arrayCopy(content, content, tmp4, index, endIndex);
    }
    // Inline function 'kotlin.collections.forEachIndexed' call
    var index_0 = 0;
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var item = _iterator__ex2g4s.k();
      var _unary__edvuaz = index_0;
      index_0 = _unary__edvuaz + 1 | 0;
      content[index + checkIndexOverflow(_unary__edvuaz) | 0] = item;
    }
    this.km_1 = this.km_1 + elements.l() | 0;
    return true;
  };
  protoOf(MutableObjectList).en = function (elements) {
    var oldSize = this.km_1;
    this.fn(elements);
    return !(oldSize === this.km_1);
  };
  protoOf(MutableObjectList).xm = function (elements) {
    var oldSize = this.km_1;
    this.gn(elements);
    return !(oldSize === this.km_1);
  };
  protoOf(MutableObjectList).fn = function (elements) {
    if (elements.n())
      return Unit_instance;
    // Inline function 'androidx.collection.MutableObjectList.ensureCapacity' call
    var capacity = this.km_1 + elements.km_1 | 0;
    var oldContent = this.jm_1;
    if (oldContent.length < capacity) {
      this.dn(capacity, oldContent);
    }
    var content = this.jm_1;
    var tmp0 = elements.jm_1;
    var tmp4 = this.km_1;
    // Inline function 'kotlin.collections.copyInto' call
    var endIndex = elements.km_1;
    arrayCopy(tmp0, content, tmp4, 0, endIndex);
    this.km_1 = this.km_1 + elements.km_1 | 0;
  };
  protoOf(MutableObjectList).gn = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
      this.g(element);
    }
  };
  protoOf(MutableObjectList).b2 = function () {
    fill_0(this.jm_1, null, 0, this.km_1);
    this.km_1 = 0;
  };
  protoOf(MutableObjectList).dn = function (capacity, oldContent) {
    var oldSize = oldContent.length;
    // Inline function 'kotlin.math.max' call
    var b = imul(oldSize, 3) / 2 | 0;
    var newSize = Math.max(capacity, b);
    // Inline function 'kotlin.arrayOfNulls' call
    var newContent = Array(newSize);
    var tmp = this;
    // Inline function 'kotlin.collections.copyInto' call
    arrayCopy(oldContent, newContent, 0, 0, oldSize);
    tmp.jm_1 = newContent;
  };
  protoOf(MutableObjectList).c2 = function (element) {
    var index = this.u(element);
    if (index >= 0) {
      this.g2(index);
      return true;
    }
    return false;
  };
  protoOf(MutableObjectList).g2 = function (index) {
    if (!(0 <= index ? index < this.km_1 : false)) {
      this.hn(index);
    }
    var content = this.jm_1;
    var element = content[index];
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    if (!(index === (this.km_1 - 1 | 0))) {
      var tmp6 = index + 1 | 0;
      // Inline function 'kotlin.collections.copyInto' call
      var endIndex = this.km_1;
      arrayCopy(content, content, index, tmp6, endIndex);
    }
    this.km_1 = this.km_1 - 1 | 0;
    content[this.km_1] = null;
    return element;
  };
  protoOf(MutableObjectList).e4 = function (start, end) {
    if (!(0 <= start ? start <= this.km_1 : false) || !(0 <= end ? end <= this.km_1 : false)) {
      throwIndexOutOfBoundsException('Start (' + start + ') and end (' + end + ') must be in 0..' + this.km_1);
    }
    if (end < start) {
      throwIllegalArgumentException('Start (' + start + ') is more than end (' + end + ')');
    }
    if (!(end === start)) {
      if (end < this.km_1) {
        var tmp0 = this.jm_1;
        var tmp2 = this.jm_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.km_1;
        arrayCopy(tmp0, tmp2, start, end, endIndex);
      }
      var newSize = this.km_1 - (end - start | 0) | 0;
      fill_0(this.jm_1, null, newSize, this.km_1);
      this.km_1 = newSize;
    }
  };
  protoOf(MutableObjectList).e2 = function (index, element) {
    if (!(0 <= index ? index < this.km_1 : false)) {
      this.hn(index);
    }
    var content = this.jm_1;
    var old = content[index];
    content[index] = element;
    return old;
  };
  protoOf(MutableObjectList).in = function () {
    var tmp0_elvis_lhs = this.tm_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new ObjectListMutableList(this);
      this.tm_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  function ObjectList$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ObjectList(initialCapacity) {
    var tmp = this;
    var tmp_0;
    if (initialCapacity === 0) {
      tmp_0 = get_EmptyArray();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_0 = Array(initialCapacity);
    }
    tmp.jm_1 = tmp_0;
    this.km_1 = 0;
  }
  protoOf(ObjectList).l = function () {
    return this.km_1;
  };
  protoOf(ObjectList).s = function (element) {
    return this.u(element) >= 0;
  };
  protoOf(ObjectList).pi = function () {
    if (this.n()) {
      throwNoSuchElementException('ObjectList is empty.');
    }
    return this.jm_1[0];
  };
  protoOf(ObjectList).m = function (index) {
    if (!(0 <= index ? index < this.km_1 : false)) {
      this.hn(index);
    }
    return this.jm_1[index];
  };
  protoOf(ObjectList).hn = function (index) {
    // Inline function 'androidx.collection.ObjectList.lastIndex' call
    var tmp$ret$0 = this.km_1 - 1 | 0;
    throwIndexOutOfBoundsException('Index ' + index + ' must be in 0..' + tmp$ret$0);
  };
  protoOf(ObjectList).u = function (element) {
    if (element == null) {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.jm_1;
      var inductionVariable = 0;
      var last = this.km_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (content[i] == null) {
            return i;
          }
        }
         while (inductionVariable < last);
    } else {
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content_0 = this.jm_1;
      var inductionVariable_0 = 0;
      var last_0 = this.km_1;
      if (inductionVariable_0 < last_0)
        do {
          var i_0 = inductionVariable_0;
          inductionVariable_0 = inductionVariable_0 + 1 | 0;
          var item = content_0[i_0];
          if (equals(element, item)) {
            return i_0;
          }
        }
         while (inductionVariable_0 < last_0);
    }
    return -1;
  };
  protoOf(ObjectList).n = function () {
    return this.km_1 === 0;
  };
  protoOf(ObjectList).ki = function () {
    return !(this.km_1 === 0);
  };
  protoOf(ObjectList).jn = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      // Inline function 'androidx.collection.ObjectList.forEachIndexed' call
      // Inline function 'kotlin.contracts.contract' call
      var content = this.jm_1;
      var inductionVariable = 0;
      var last = this.km_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var element = content[i];
          if (i === limit) {
            this_0.h(truncated);
            break $l$block;
          }
          if (!(i === 0)) {
            this_0.h(separator);
          }
          if (transform == null) {
            this_0.p7(element);
          } else {
            this_0.h(transform(element));
          }
        }
         while (inductionVariable < last);
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(ObjectList).kn = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.jn(separator, prefix, postfix, limit, truncated, transform) : $super.jn.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ObjectList).hashCode = function () {
    var hashCode_0 = 0;
    // Inline function 'androidx.collection.ObjectList.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var content = this.jm_1;
    var inductionVariable = 0;
    var last = this.km_1;
    if (inductionVariable < last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var tmp = hashCode_0;
        // Inline function 'kotlin.hashCode' call
        var tmp0_safe_receiver = content[i];
        var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
        var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
        hashCode_0 = tmp + imul(31, tmp$ret$3) | 0;
      }
       while (inductionVariable < last);
    return hashCode_0;
  };
  protoOf(ObjectList).equals = function (other) {
    var tmp;
    if (!(other instanceof ObjectList)) {
      tmp = true;
    } else {
      tmp = !(other.km_1 === this.km_1);
    }
    if (tmp) {
      return false;
    }
    var content = this.jm_1;
    var otherContent = other.jm_1;
    // Inline function 'androidx.collection.ObjectList.indices' call
    var progression = until(0, this.km_1);
    var inductionVariable = progression.x_1;
    var last = progression.y_1;
    if (inductionVariable <= last)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (!equals(content[i], otherContent[i])) {
          return false;
        }
      }
       while (!(i === last));
    return true;
  };
  protoOf(ObjectList).toString = function () {
    return this.kn(VOID, '[', ']', VOID, VOID, ObjectList$toString$lambda(this));
  };
  function mutableObjectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.g(element1);
    return list;
  }
  function emptyObjectList() {
    _init_properties_ObjectList_kt__fnapct();
    var tmp = get_EmptyObjectList();
    return tmp instanceof ObjectList ? tmp : THROW_CCE();
  }
  function mutableObjectListOf_0(element1, element2) {
    _init_properties_ObjectList_kt__fnapct();
    var list = new MutableObjectList(2);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.g(element1);
    // Inline function 'androidx.collection.MutableObjectList.plusAssign' call
    list.g(element2);
    return list;
  }
  function objectListOf(element1) {
    _init_properties_ObjectList_kt__fnapct();
    return mutableObjectListOf(element1);
  }
  function checkIndex(_this__u8e3s4, index) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.l();
    if (index < 0 || index >= size) {
      throwIndexOutOfBoundsException('Index ' + index + ' is out of bounds. The list has ' + size + ' elements.');
    }
  }
  function checkSubIndex(_this__u8e3s4, fromIndex, toIndex) {
    _init_properties_ObjectList_kt__fnapct();
    var size = _this__u8e3s4.l();
    if (fromIndex > toIndex) {
      throwIllegalArgumentException('Indices are out of order. fromIndex (' + fromIndex + ') is greater than toIndex (' + toIndex + ').');
    }
    if (fromIndex < 0) {
      throwIndexOutOfBoundsException('fromIndex (' + fromIndex + ') is less than 0.');
    }
    if (toIndex > size) {
      throwIndexOutOfBoundsException('toIndex (' + toIndex + ') is more than than the list size (' + size + ')');
    }
  }
  var properties_initialized_ObjectList_kt_7isazj;
  function _init_properties_ObjectList_kt__fnapct() {
    if (!properties_initialized_ObjectList_kt_7isazj) {
      properties_initialized_ObjectList_kt_7isazj = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EmptyArray = Array(0);
      EmptyObjectList = new MutableObjectList(0);
    }
  }
  function get_EmptyGroup() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyGroup;
  }
  var EmptyGroup;
  function get_EmptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    return EmptyScatterMap;
  }
  var EmptyScatterMap;
  function initializeStorage_5($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.math.max' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.on_1 = newCapacity;
    initializeMetadata_5($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.mn_1 = tmp_1;
    var tmp_2 = $this;
    var tmp_3;
    if (newCapacity === 0) {
      tmp_3 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_3 = Array(newCapacity);
    }
    tmp_2.nn_1 = tmp_3;
  }
  function initializeMetadata_5($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = capacity >> 3;
      var b = (capacity & 7) << 3;
      this_0[i] = bitwiseOr(bitwiseAnd(this_0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
      tmp_0 = this_0;
    }
    tmp.ln_1 = tmp_0;
    initializeGrowth_5($this);
  }
  function initializeGrowth_5($this) {
    $this.vn_1 = loadedCapacity($this.ci()) - $this.pn_1 | 0;
  }
  function findFirstAvailableSlot_5($this, hash1) {
    var probeMask = $this.on_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.ln_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterMap(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterMap.call(this);
    this.vn_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_5(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterMap).wn = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.xn(key);
    var index_0 = index < 0 ? ~index : index;
    this.mn_1[index_0] = key;
    this.nn_1[index_0] = value;
  };
  protoOf(MutableScatterMap).y1 = function (key, value) {
    // Inline function 'kotlin.let' call
    var index = this.xn(key);
    var index_0 = index < 0 ? ~index : index;
    var oldValue = this.nn_1[index_0];
    this.mn_1[index_0] = key;
    this.nn_1[index_0] = value;
    return oldValue;
  };
  protoOf(MutableScatterMap).yn = function (from) {
    // Inline function 'kotlin.collections.forEach' call
    // Inline function 'kotlin.collections.iterator' call
    var _iterator__ex2g4s = from.x1().i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      // Inline function 'kotlin.collections.component1' call
      var key = element.q1();
      // Inline function 'kotlin.collections.component2' call
      var value = element.r1();
      this.wn(key, value);
    }
  };
  protoOf(MutableScatterMap).zn = function (from) {
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = from.mn_1;
    var v = from.nn_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = from.ln_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  this.wn(tmp0, value_0);
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
  };
  protoOf(MutableScatterMap).z1 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.on_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ln_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.mn_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    if (index_0 >= 0) {
      return this.ij(index_0);
    }
    return null;
  };
  protoOf(MutableScatterMap).ij = function (index) {
    this.pn_1 = this.pn_1 - 1 | 0;
    var tmp0 = this.ln_1;
    var tmp2 = this.on_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.mn_1[index] = null;
    var oldValue = this.nn_1[index];
    this.nn_1[index] = null;
    return oldValue;
  };
  protoOf(MutableScatterMap).b2 = function () {
    this.pn_1 = 0;
    if (!(this.ln_1 === get_EmptyGroup())) {
      fill(this.ln_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.ln_1;
      var tmp2 = this.on_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.nn_1, null, 0, this.on_1);
    fill_0(this.mn_1, null, 0, this.on_1);
    initializeGrowth_5(this);
  };
  protoOf(MutableScatterMap).xn = function (key) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = key == null ? null : hashCode(key);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = this.on_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = this.ln_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals(this.mn_1[index], key)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_5(this, hash1);
    var tmp_0;
    if (this.vn_1 === 0) {
      var tmp0_0 = this.ln_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$13, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      this.di();
      index_0 = findFirstAvailableSlot_5(this, hash1);
    }
    this.pn_1 = this.pn_1 + 1 | 0;
    var tmp_1 = this;
    var tmp_2 = this.vn_1;
    var tmp_3;
    var tmp0_1 = this.ln_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$15 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$15, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.vn_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = this.ln_1;
    var tmp2 = this.on_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return ~index_0;
  };
  protoOf(MutableScatterMap).di = function () {
    var tmp;
    if (this.on_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.pn_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.on_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.on_1));
    }
  };
  protoOf(MutableScatterMap).ji = function () {
    var metadata = this.ln_1;
    var capacity = this.on_1;
    var keys = this.mn_1;
    var values = this.nn_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = keys[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$3, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_5(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = metadata[0];
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        keys[targetIndex] = keys[index];
        keys[index] = null;
        values[targetIndex] = values[index];
        values[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldKey = keys[targetIndex];
        keys[targetIndex] = keys[index];
        keys[index] = oldKey;
        var oldValue = values[targetIndex];
        values[targetIndex] = values[index];
        values[index] = oldValue;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = metadata[0];
      index = index + 1 | 0;
    }
    initializeGrowth_5(this);
  };
  protoOf(MutableScatterMap).ii = function (newCapacity) {
    var previousMetadata = this.ln_1;
    var previousKeys = this.mn_1;
    var previousValues = this.nn_1;
    var previousCapacity = this.on_1;
    initializeStorage_5(this, newCapacity);
    var newMetadata = this.ln_1;
    var newKeys = this.mn_1;
    var newValues = this.nn_1;
    var capacity = this.on_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousKey = previousKeys[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousKey == null ? null : hashCode(previousKey);
          var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$3, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_5(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newKeys[index] = previousKey;
          newValues[index] = previousValues[i];
        }
      }
       while (inductionVariable < previousCapacity);
  };
  function mutableScatterMapOf() {
    _init_properties_ScatterMap_kt__cygxb2();
    return new MutableScatterMap();
  }
  function ScatterMap() {
    this.ln_1 = get_EmptyGroup();
    this.mn_1 = get_EMPTY_OBJECTS();
    this.nn_1 = get_EMPTY_OBJECTS();
    this.on_1 = 0;
    this.pn_1 = 0;
  }
  protoOf(ScatterMap).ci = function () {
    return this.on_1;
  };
  protoOf(ScatterMap).l = function () {
    return this.pn_1;
  };
  protoOf(ScatterMap).n = function () {
    return this.pn_1 === 0;
  };
  protoOf(ScatterMap).ki = function () {
    return !(this.pn_1 === 0);
  };
  protoOf(ScatterMap).u1 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.on_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ln_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.mn_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    return index_0 >= 0 ? this.nn_1[index_0] : null;
  };
  protoOf(ScatterMap).b5 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.on_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ln_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.mn_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(ScatterMap).s1 = function (key) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.findKeyIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = key == null ? null : hashCode(key);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.on_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.ln_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.mn_1[index], key)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(ScatterMap).t1 = function (value) {
    // Inline function 'androidx.collection.ScatterMap.forEachValue' call
    var v = this.nn_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.ln_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value_0 = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value_0, new Long(128, 0)) < 0) {
                  var index = (i << 3) + j | 0;
                  var v_0 = v[index];
                  if (equals(value, v_0))
                    return true;
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
    return false;
  };
  protoOf(ScatterMap).hashCode = function () {
    var hash = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.mn_1;
    var v = this.nn_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.ln_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  var tmp = hash;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs = tmp0 == null ? null : hashCode(tmp0);
                  var tmp_0 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
                  // Inline function 'kotlin.hashCode' call
                  var tmp1_elvis_lhs_0 = value_0 == null ? null : hashCode(value_0);
                  hash = tmp + (tmp_0 ^ (tmp1_elvis_lhs_0 == null ? 0 : tmp1_elvis_lhs_0)) | 0;
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
    return hash;
  };
  protoOf(ScatterMap).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterMap)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    var o = other instanceof ScatterMap ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.mn_1;
    var v = this.nn_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.ln_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
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
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  if (value_0 == null) {
                    if (!(o.u1(tmp0) == null) || !o.s1(tmp0)) {
                      return false;
                    }
                  } else if (!equals(value_0, o.u1(tmp0))) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterMap).toString = function () {
    if (this.n()) {
      return '{}';
    }
    var s = StringBuilder_init_$Create$().r7(_Char___init__impl__6a9atx(123));
    var i = 0;
    // Inline function 'androidx.collection.ScatterMap.forEach' call
    var k = this.mn_1;
    var v = this.nn_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterMap.forEachIndexed' call
      var m = this.ln_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i_0 = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i_0];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$2 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$2, new Long(-2139062144, -2139062144))) {
            var bitCount = 8 - (~(i_0 - lastIndex | 0) >>> 31 | 0) | 0;
            var inductionVariable_0 = 0;
            if (inductionVariable_0 < bitCount)
              do {
                var j = inductionVariable_0;
                inductionVariable_0 = inductionVariable_0 + 1 | 0;
                // Inline function 'androidx.collection.isFull' call
                var value = bitwiseAnd(slot, new Long(255, 0));
                if (compare(value, new Long(128, 0)) < 0) {
                  var index = (i_0 << 3) + j | 0;
                  var tmp0 = k[index];
                  var value_0 = v[index];
                  s.p7(tmp0 === this ? '(this)' : tmp0);
                  s.q7('=');
                  s.p7(value_0 === this ? '(this)' : value_0);
                  i = i + 1 | 0;
                  if (i < this.pn_1) {
                    s.r7(_Char___init__impl__6a9atx(44)).r7(_Char___init__impl__6a9atx(32));
                  }
                }
                slot = shiftRight(slot, 8);
              }
               while (inductionVariable_0 < bitCount);
            if (!(bitCount === 8)) {
              break $l$block;
            }
          }
        }
         while (!(i_0 === lastIndex));
    }
    return s.r7(_Char___init__impl__6a9atx(125)).toString();
  };
  protoOf(ScatterMap).ao = function () {
    return new MapWrapper(this);
  };
  function emptyScatterMap() {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp = get_EmptyScatterMap();
    return tmp instanceof ScatterMap ? tmp : THROW_CCE();
  }
  function unloadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 8;
    }
    return capacity + ((capacity - 1 | 0) / 7 | 0) | 0;
  }
  function normalizeCapacity(n) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (n > 0) {
      // Inline function 'kotlin.countLeadingZeroBits' call
      tmp = -1 >>> clz32(n) | 0;
    } else {
      tmp = 0;
    }
    return tmp;
  }
  function loadedCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    if (true && capacity === 7) {
      return 6;
    }
    return capacity - (capacity / 8 | 0) | 0;
  }
  function nextCapacity(capacity) {
    _init_properties_ScatterMap_kt__cygxb2();
    var tmp;
    if (capacity === 0) {
      tmp = 6;
    } else {
      tmp = imul(capacity, 2) + 1 | 0;
    }
    return tmp;
  }
  function MapWrapper(parent) {
    this.bo_1 = parent;
    this.co_1 = null;
    this.do_1 = null;
    this.eo_1 = null;
  }
  protoOf(MapWrapper).x1 = function () {
    var tmp0_elvis_lhs = this.co_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new Entries(this.bo_1);
      this.co_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapWrapper).v1 = function () {
    var tmp0_elvis_lhs = this.do_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new Keys(this.bo_1);
      this.do_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapWrapper).w1 = function () {
    var tmp0_elvis_lhs = this.eo_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.apply' call
      var this_0 = new Values(this.bo_1);
      this.eo_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(MapWrapper).l = function () {
    return this.bo_1.pn_1;
  };
  protoOf(MapWrapper).n = function () {
    return this.bo_1.n();
  };
  protoOf(MapWrapper).u1 = function (key) {
    return this.bo_1.u1(key);
  };
  protoOf(MapWrapper).t1 = function (value) {
    return this.bo_1.t1(value);
  };
  protoOf(MapWrapper).s1 = function (key) {
    return this.bo_1.s1(key);
  };
  protoOf(MapWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof MapWrapper))
      THROW_CCE();
    return this.bo_1.equals(other.bo_1);
  };
  protoOf(MapWrapper).hashCode = function () {
    return this.bo_1.hashCode();
  };
  protoOf(MapWrapper).toString = function () {
    return this.bo_1.toString();
  };
  function Entries$iterator$slambda(this$0, resultContinuation) {
    this.no_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Entries$iterator$slambda).xo = function ($this$iterator, $completion) {
    var tmp = this.yo($this$iterator, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(Entries$iterator$slambda).d9 = function (p1, $completion) {
    return this.xo(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Entries$iterator$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 11;
            this.wo_1 = this.no_1.zo_1;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.uo_1 = this.wo_1.ln_1;
            this.to_1 = this.uo_1.length - 2 | 0;
            this.vo_1 = numberRangeToNumber(0, this.to_1).i();
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!this.vo_1.j()) {
              this.l8_1 = 9;
              continue $sm;
            }

            this.ro_1 = this.vo_1.k();
            this.qo_1 = this.uo_1[this.ro_1];
            var this_0 = this.qo_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.po_1 = 8 - (~(this.ro_1 - this.to_1 | 0) >>> 31 | 0) | 0;
              this.so_1 = until(0, this.po_1).i();
              this.l8_1 = 3;
              continue $sm;
            } else {
              this.l8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.so_1.j()) {
              this.l8_1 = 6;
              continue $sm;
            }

            var j = this.so_1.k();
            var value = bitwiseAnd(this.qo_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.ro_1 << 3) + j | 0;
              this.l8_1 = 4;
              suspendResult = this.oo_1.yd(new MapEntry(this.no_1.zo_1.mn_1[index], this.no_1.zo_1.nn_1[index]), this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 5;
              continue $sm;
            }

          case 4:
            this.l8_1 = 5;
            continue $sm;
          case 5:
            this.qo_1 = shiftRight(this.qo_1, 8);
            this.l8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.po_1 === 8)) {
              this.l8_1 = 10;
              continue $sm;
            } else {
              this.l8_1 = 7;
              continue $sm;
            }

          case 7:
            this.l8_1 = 8;
            continue $sm;
          case 8:
            this.l8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 11) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Entries$iterator$slambda).yo = function ($this$iterator, completion) {
    var i = new Entries$iterator$slambda(this.no_1, completion);
    i.oo_1 = $this$iterator;
    return i;
  };
  function Entries$iterator$slambda_0(this$0, resultContinuation) {
    var i = new Entries$iterator$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$iterator, $completion) {
      return i.xo($this$iterator, $completion);
    }, 1);
  }
  function Entries(parent) {
    this.zo_1 = parent;
  }
  protoOf(Entries).l = function () {
    return this.zo_1.pn_1;
  };
  protoOf(Entries).n = function () {
    return this.zo_1.n();
  };
  protoOf(Entries).i = function () {
    return iterator(Entries$iterator$slambda_0(this, null));
  };
  protoOf(Entries).ap = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!equals(this.zo_1.u1(element.q1()), element.r1())) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Entries).p1 = function (elements) {
    return this.ap(elements);
  };
  protoOf(Entries).bp = function (element) {
    return equals(this.zo_1.u1(element.q1()), element.r1());
  };
  protoOf(Entries).s = function (element) {
    if (!(!(element == null) ? isInterface(element, Entry) : false))
      return false;
    return this.bp((!(element == null) ? isInterface(element, Entry) : false) ? element : THROW_CCE());
  };
  function Keys$iterator$slambda(this$0, resultContinuation) {
    this.kp_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Keys$iterator$slambda).vp = function ($this$iterator, $completion) {
    var tmp = this.wp($this$iterator, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(Keys$iterator$slambda).d9 = function (p1, $completion) {
    return this.vp(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Keys$iterator$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 11;
            var this_0 = this.kp_1.xp_1;
            this.op_1 = this_0.mn_1;
            this.up_1 = this_0;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.sp_1 = this.up_1.ln_1;
            this.rp_1 = this.sp_1.length - 2 | 0;
            this.tp_1 = numberRangeToNumber(0, this.rp_1).i();
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!this.tp_1.j()) {
              this.l8_1 = 9;
              continue $sm;
            }

            this.pp_1 = this.tp_1.k();
            this.np_1 = this.sp_1[this.pp_1];
            var this_1 = this.np_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.mp_1 = 8 - (~(this.pp_1 - this.rp_1 | 0) >>> 31 | 0) | 0;
              this.qp_1 = until(0, this.mp_1).i();
              this.l8_1 = 3;
              continue $sm;
            } else {
              this.l8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.qp_1.j()) {
              this.l8_1 = 6;
              continue $sm;
            }

            var j = this.qp_1.k();
            var value = bitwiseAnd(this.np_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.pp_1 << 3) + j | 0;
              var key = this.op_1[index];
              this.l8_1 = 4;
              suspendResult = this.lp_1.yd(key, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 5;
              continue $sm;
            }

          case 4:
            this.l8_1 = 5;
            continue $sm;
          case 5:
            this.np_1 = shiftRight(this.np_1, 8);
            this.l8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.mp_1 === 8)) {
              this.l8_1 = 10;
              continue $sm;
            } else {
              this.l8_1 = 7;
              continue $sm;
            }

          case 7:
            this.l8_1 = 8;
            continue $sm;
          case 8:
            this.l8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 11) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Keys$iterator$slambda).wp = function ($this$iterator, completion) {
    var i = new Keys$iterator$slambda(this.kp_1, completion);
    i.lp_1 = $this$iterator;
    return i;
  };
  function Keys$iterator$slambda_0(this$0, resultContinuation) {
    var i = new Keys$iterator$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$iterator, $completion) {
      return i.vp($this$iterator, $completion);
    }, 1);
  }
  function Keys(parent) {
    this.xp_1 = parent;
  }
  protoOf(Keys).l = function () {
    return this.xp_1.pn_1;
  };
  protoOf(Keys).n = function () {
    return this.xp_1.n();
  };
  protoOf(Keys).i = function () {
    return iterator(Keys$iterator$slambda_0(this, null));
  };
  protoOf(Keys).yp = function (elements) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.all' call
      var tmp;
      if (isInterface(elements, Collection)) {
        tmp = elements.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = elements.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!this.xp_1.s1(element)) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(Keys).p1 = function (elements) {
    return this.yp(elements);
  };
  protoOf(Keys).b5 = function (element) {
    return this.xp_1.s1(element);
  };
  protoOf(Keys).s = function (element) {
    if (!true)
      return false;
    return this.b5(element);
  };
  function Values$iterator$slambda(this$0, resultContinuation) {
    this.hq_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(Values$iterator$slambda).sq = function ($this$iterator, $completion) {
    var tmp = this.tq($this$iterator, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(Values$iterator$slambda).d9 = function (p1, $completion) {
    return this.sq(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(Values$iterator$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 11;
            var this_0 = this.hq_1.uq_1;
            this.lq_1 = this_0.nn_1;
            this.rq_1 = this_0;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.pq_1 = this.rq_1.ln_1;
            this.oq_1 = this.pq_1.length - 2 | 0;
            this.qq_1 = numberRangeToNumber(0, this.oq_1).i();
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!this.qq_1.j()) {
              this.l8_1 = 9;
              continue $sm;
            }

            this.mq_1 = this.qq_1.k();
            this.kq_1 = this.pq_1[this.mq_1];
            var this_1 = this.kq_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.jq_1 = 8 - (~(this.mq_1 - this.oq_1 | 0) >>> 31 | 0) | 0;
              this.nq_1 = until(0, this.jq_1).i();
              this.l8_1 = 3;
              continue $sm;
            } else {
              this.l8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.nq_1.j()) {
              this.l8_1 = 6;
              continue $sm;
            }

            var j = this.nq_1.k();
            var value = bitwiseAnd(this.kq_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.mq_1 << 3) + j | 0;
              var value_0 = this.lq_1[index];
              this.l8_1 = 4;
              suspendResult = this.iq_1.yd(value_0, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 5;
              continue $sm;
            }

          case 4:
            this.l8_1 = 5;
            continue $sm;
          case 5:
            this.kq_1 = shiftRight(this.kq_1, 8);
            this.l8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.jq_1 === 8)) {
              this.l8_1 = 10;
              continue $sm;
            } else {
              this.l8_1 = 7;
              continue $sm;
            }

          case 7:
            this.l8_1 = 8;
            continue $sm;
          case 8:
            this.l8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 11) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(Values$iterator$slambda).tq = function ($this$iterator, completion) {
    var i = new Values$iterator$slambda(this.hq_1, completion);
    i.iq_1 = $this$iterator;
    return i;
  };
  function Values$iterator$slambda_0(this$0, resultContinuation) {
    var i = new Values$iterator$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$iterator, $completion) {
      return i.sq($this$iterator, $completion);
    }, 1);
  }
  function Values(parent) {
    this.uq_1 = parent;
  }
  protoOf(Values).l = function () {
    return this.uq_1.pn_1;
  };
  protoOf(Values).n = function () {
    return this.uq_1.n();
  };
  protoOf(Values).i = function () {
    return iterator(Values$iterator$slambda_0(this, null));
  };
  protoOf(Values).h5 = function (element) {
    return this.uq_1.t1(element);
  };
  protoOf(Values).s = function (element) {
    if (!true)
      return false;
    return this.h5(element);
  };
  function MapEntry(key, value) {
    this.vq_1 = key;
    this.wq_1 = value;
  }
  protoOf(MapEntry).q1 = function () {
    return this.vq_1;
  };
  protoOf(MapEntry).r1 = function () {
    return this.wq_1;
  };
  var properties_initialized_ScatterMap_kt_apzngg;
  function _init_properties_ScatterMap_kt__cygxb2() {
    if (!properties_initialized_ScatterMap_kt_apzngg) {
      properties_initialized_ScatterMap_kt_apzngg = true;
      // Inline function 'kotlin.longArrayOf' call
      EmptyGroup = longArrayOf([new Long(-2139062017, -2139062144), new Long(-1, -1)]);
      EmptyScatterMap = new MutableScatterMap(0);
    }
  }
  var EmptyScatterSet;
  function initializeStorage_6($this, initialCapacity) {
    var tmp;
    if (initialCapacity > 0) {
      // Inline function 'kotlin.comparisons.maxOf' call
      var b = normalizeCapacity(initialCapacity);
      tmp = Math.max(7, b);
    } else {
      tmp = 0;
    }
    var newCapacity = tmp;
    $this.zq_1 = newCapacity;
    initializeMetadata_6($this, newCapacity);
    var tmp_0 = $this;
    var tmp_1;
    if (newCapacity === 0) {
      tmp_1 = get_EMPTY_OBJECTS();
    } else {
      // Inline function 'kotlin.arrayOfNulls' call
      tmp_1 = Array(newCapacity);
    }
    tmp_0.yq_1 = tmp_1;
  }
  function initializeMetadata_6($this, capacity) {
    var tmp = $this;
    var tmp_0;
    if (capacity === 0) {
      tmp_0 = get_EmptyGroup();
    } else {
      var size = ((((capacity + 1 | 0) + 7 | 0) + 7 | 0) & -8) >> 3;
      // Inline function 'kotlin.apply' call
      var this_0 = longArray(size);
      fill(this_0, new Long(-2139062144, -2139062144));
      tmp_0 = this_0;
    }
    tmp.xq_1 = tmp_0;
    var tmp0 = $this.xq_1;
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(255, 0);
    var i = capacity >> 3;
    var b = (capacity & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    initializeGrowth_6($this);
  }
  function initializeGrowth_6($this) {
    $this.fr_1 = loadedCapacity($this.ci()) - $this.ar_1 | 0;
  }
  function findAbsoluteInsertIndex_3($this, element) {
    // Inline function 'androidx.collection.hash' call
    // Inline function 'kotlin.hashCode' call
    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
    var tmp$ret$1 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
    var hash = imul(tmp$ret$1, -862048943);
    var hash_0 = hash ^ hash << 16;
    // Inline function 'androidx.collection.h1' call
    var hash1 = hash_0 >>> 7 | 0;
    // Inline function 'androidx.collection.h2' call
    var hash2 = hash_0 & 127;
    var probeMask = $this.zq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    $l$loop_0: while (true) {
      var tmp0 = $this.xq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.match' call
      // Inline function 'kotlin.Long.times' call
      var this_0 = new Long(16843009, 16843009);
      var tmp$ret$6 = multiply(this_0, fromInt(hash2));
      var x = bitwiseXor(g, tmp$ret$6);
      var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
      $l$loop: while (true) {
        // Inline function 'androidx.collection.hasNext' call
        var this_1 = m;
        if (!!equalsLong(this_1, new Long(0, 0))) {
          break $l$loop;
        }
        var tmp = probeOffset;
        // Inline function 'androidx.collection.get' call
        // Inline function 'androidx.collection.lowestBitSet' call
        var this_2 = m;
        var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
        if (equals($this.yq_1[index], element)) {
          return index;
        }
        // Inline function 'androidx.collection.next' call
        var this_3 = m;
        m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
      }
      // Inline function 'androidx.collection.maskEmpty' call
      var tmp$ret$11 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
      if (!equalsLong(tmp$ret$11, new Long(0, 0))) {
        break $l$loop_0;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
    var index_0 = findFirstAvailableSlot_6($this, hash1);
    var tmp_0;
    if ($this.fr_1 === 0) {
      var tmp0_0 = $this.xq_1;
      // Inline function 'androidx.collection.isDeleted' call
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset_0 = index_0;
      var tmp$ret$13 = bitwiseAnd(shiftRight(tmp0_0[offset_0 >> 3], (offset_0 & 7) << 3), new Long(255, 0));
      tmp_0 = !equalsLong(tmp$ret$13, new Long(254, 0));
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      $this.di();
      index_0 = findFirstAvailableSlot_6($this, hash1);
    }
    $this.ar_1 = $this.ar_1 + 1 | 0;
    var tmp_1 = $this;
    var tmp_2 = $this.fr_1;
    var tmp_3;
    var tmp0_1 = $this.xq_1;
    // Inline function 'androidx.collection.isEmpty' call
    // Inline function 'androidx.collection.readRawMetadata' call
    var offset_1 = index_0;
    var tmp$ret$15 = bitwiseAnd(shiftRight(tmp0_1[offset_1 >> 3], (offset_1 & 7) << 3), new Long(255, 0));
    if (equalsLong(tmp$ret$15, new Long(128, 0))) {
      tmp_3 = 1;
    } else {
      tmp_3 = 0;
    }
    tmp_1.fr_1 = tmp_2 - tmp_3 | 0;
    var tmp0_2 = $this.xq_1;
    var tmp2 = $this.zq_1;
    var tmp4 = index_0;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = fromInt(hash2);
    var i_0 = tmp4 >> 3;
    var b_0 = (tmp4 & 7) << 3;
    tmp0_2[i_0] = bitwiseOr(bitwiseAnd(tmp0_2[i_0], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value, b_0));
    var cloneIndex = ((tmp4 - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0_2[cloneIndex >> 3] = tmp0_2[tmp4 >> 3];
    return index_0;
  }
  function findFirstAvailableSlot_6($this, hash1) {
    var probeMask = $this.zq_1;
    var probeOffset = hash1 & probeMask;
    var probeIndex = 0;
    while (true) {
      var tmp0 = $this.xq_1;
      // Inline function 'androidx.collection.group' call
      var offset = probeOffset;
      var i = offset >> 3;
      var b = (offset & 7) << 3;
      var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
      // Inline function 'androidx.collection.maskEmptyOrDeleted' call
      var m = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 7)), new Long(-2139062144, -2139062144));
      if (!equalsLong(m, new Long(0, 0))) {
        var tmp = probeOffset;
        // Inline function 'androidx.collection.lowestBitSet' call
        return (tmp + (countTrailingZeroBits(m) >> 3) | 0) & probeMask;
      }
      probeIndex = probeIndex + 8 | 0;
      probeOffset = (probeOffset + probeIndex | 0) & probeMask;
    }
  }
  function MutableScatterSet(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 6 : initialCapacity;
    ScatterSet.call(this);
    this.fr_1 = 0;
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(initialCapacity >= 0)) {
      var tmp$ret$2 = 'Capacity must be a positive value.';
      throwIllegalArgumentException(tmp$ret$2);
    }
    initializeStorage_6(this, unloadedCapacity(initialCapacity));
  }
  protoOf(MutableScatterSet).g = function (element) {
    var oldSize = this.l();
    var index = findAbsoluteInsertIndex_3(this, element);
    this.yq_1[index] = element;
    return !(this.l() === oldSize);
  };
  protoOf(MutableScatterSet).gr = function (element) {
    var index = findAbsoluteInsertIndex_3(this, element);
    this.yq_1[index] = element;
  };
  protoOf(MutableScatterSet).xm = function (elements) {
    var oldSize = this.l();
    this.gn(elements);
    return !(oldSize === this.l());
  };
  protoOf(MutableScatterSet).hr = function (elements) {
    var oldSize = this.l();
    this.ir(elements);
    return !(oldSize === this.l());
  };
  protoOf(MutableScatterSet).gn = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      this.gr(element);
    }
  };
  protoOf(MutableScatterSet).ir = function (elements) {
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements_0 = elements.yq_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = elements.xq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements_0[index];
                  this.gr(element);
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
  };
  protoOf(MutableScatterSet).c2 = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.zq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.xq_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.yq_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    var index_0 = tmp$ret$0;
    var exists = index_0 >= 0;
    if (exists) {
      this.jr(index_0);
    }
    return exists;
  };
  protoOf(MutableScatterSet).jr = function (index) {
    this.ar_1 = this.ar_1 - 1 | 0;
    var tmp0 = this.xq_1;
    var tmp2 = this.zq_1;
    // Inline function 'androidx.collection.writeMetadata' call
    // Inline function 'androidx.collection.writeRawMetadata' call
    var value = new Long(254, 0);
    var i = index >> 3;
    var b = (index & 7) << 3;
    tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    var cloneIndex = ((index - 7 | 0) & tmp2) + (7 & tmp2) | 0;
    tmp0[cloneIndex >> 3] = tmp0[index >> 3];
    this.yq_1[index] = null;
  };
  protoOf(MutableScatterSet).b2 = function () {
    this.ar_1 = 0;
    if (!(this.xq_1 === get_EmptyGroup())) {
      fill(this.xq_1, new Long(-2139062144, -2139062144));
      var tmp0 = this.xq_1;
      var tmp2 = this.zq_1;
      // Inline function 'androidx.collection.writeRawMetadata' call
      var value = new Long(255, 0);
      var i = tmp2 >> 3;
      var b = (tmp2 & 7) << 3;
      tmp0[i] = bitwiseOr(bitwiseAnd(tmp0[i], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
    }
    fill_0(this.yq_1, null, 0, this.zq_1);
    initializeGrowth_6(this);
  };
  protoOf(MutableScatterSet).di = function () {
    var tmp;
    if (this.zq_1 > 8) {
      // Inline function 'kotlin.toULong' call
      var this_0 = this.ar_1;
      var tmp0 = _ULong___init__impl__c78o9k(fromInt(this_0));
      // Inline function 'kotlin.ULong.times' call
      var other = _ULong___init__impl__c78o9k(new Long(32, 0));
      var tmp0_0 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0), _ULong___get_data__impl__fggpzb(other)));
      // Inline function 'kotlin.toULong' call
      var this_1 = this.zq_1;
      var tmp0_1 = _ULong___init__impl__c78o9k(fromInt(this_1));
      // Inline function 'kotlin.ULong.times' call
      var other_0 = _ULong___init__impl__c78o9k(new Long(25, 0));
      // Inline function 'kotlin.ULong.compareTo' call
      var other_1 = _ULong___init__impl__c78o9k(multiply(_ULong___get_data__impl__fggpzb(tmp0_1), _ULong___get_data__impl__fggpzb(other_0)));
      tmp = ulongCompare(_ULong___get_data__impl__fggpzb(tmp0_0), _ULong___get_data__impl__fggpzb(other_1)) <= 0;
    } else {
      tmp = false;
    }
    if (tmp) {
      this.ji();
    } else {
      this.ii(nextCapacity(this.zq_1));
    }
  };
  protoOf(MutableScatterSet).ji = function () {
    var metadata = this.xq_1;
    var capacity = this.zq_1;
    var elements = this.yq_1;
    // Inline function 'androidx.collection.convertMetadataForCleanup' call
    var end = (capacity + 7 | 0) >> 3;
    var inductionVariable = 0;
    if (inductionVariable < end)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var maskedGroup = bitwiseAnd(metadata[i], new Long(-2139062144, -2139062144));
        metadata[i] = bitwiseAnd(add(invert(maskedGroup), shiftRightUnsigned(maskedGroup, 7)), new Long(-16843010, -16843010));
      }
       while (inductionVariable < end);
    var lastIndex = get_lastIndex(metadata);
    metadata[lastIndex - 1 | 0] = bitwiseOr(new Long(0, -16777216), bitwiseAnd(metadata[lastIndex - 1 | 0], new Long(-1, 16777215)));
    metadata[lastIndex] = metadata[0];
    var index = 0;
    $l$loop_1: while (!(index === capacity)) {
      // Inline function 'androidx.collection.readRawMetadata' call
      var offset = index;
      var m = bitwiseAnd(shiftRight(metadata[offset >> 3], (offset & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      if (!equalsLong(m, new Long(254, 0))) {
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp0_safe_receiver = elements[index];
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
      var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$3, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h1' call
      var hash1 = hash_0 >>> 7 | 0;
      var targetIndex = findFirstAvailableSlot_6(this, hash1);
      var probeOffset = hash1 & capacity;
      var newProbeIndex = ((targetIndex - probeOffset | 0) & capacity) / 8 | 0;
      var oldProbeIndex = ((index - probeOffset | 0) & capacity) / 8 | 0;
      if (newProbeIndex === oldProbeIndex) {
        // Inline function 'androidx.collection.h2' call
        var hash2 = hash_0 & 127;
        var tmp2 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value = fromInt(hash2);
        var i_0 = tmp2 >> 3;
        var b = (tmp2 & 7) << 3;
        metadata[i_0] = bitwiseOr(bitwiseAnd(metadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
        metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
        index = index + 1 | 0;
        continue $l$loop_1;
      }
      // Inline function 'androidx.collection.readRawMetadata' call
      m = bitwiseAnd(shiftRight(metadata[targetIndex >> 3], (targetIndex & 7) << 3), new Long(255, 0));
      if (equalsLong(m, new Long(128, 0))) {
        // Inline function 'androidx.collection.h2' call
        var hash2_0 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_0 = fromInt(hash2_0);
        var i_1 = targetIndex >> 3;
        var b_0 = (targetIndex & 7) << 3;
        metadata[i_1] = bitwiseOr(bitwiseAnd(metadata[i_1], invert(shiftLeft(new Long(255, 0), b_0))), shiftLeft(value_0, b_0));
        var tmp2_0 = index;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_1 = new Long(128, 0);
        var i_2 = tmp2_0 >> 3;
        var b_1 = (tmp2_0 & 7) << 3;
        metadata[i_2] = bitwiseOr(bitwiseAnd(metadata[i_2], invert(shiftLeft(new Long(255, 0), b_1))), shiftLeft(value_1, b_1));
        elements[targetIndex] = elements[index];
        elements[index] = null;
      } else {
        // Inline function 'androidx.collection.h2' call
        var hash2_1 = hash_0 & 127;
        // Inline function 'androidx.collection.writeRawMetadata' call
        var value_2 = fromInt(hash2_1);
        var i_3 = targetIndex >> 3;
        var b_2 = (targetIndex & 7) << 3;
        metadata[i_3] = bitwiseOr(bitwiseAnd(metadata[i_3], invert(shiftLeft(new Long(255, 0), b_2))), shiftLeft(value_2, b_2));
        var oldElement = elements[targetIndex];
        elements[targetIndex] = elements[index];
        elements[index] = oldElement;
        index = index - 1 | 0;
      }
      metadata[get_lastIndex(metadata)] = bitwiseOr(new Long(0, -2147483648), bitwiseAnd(metadata[0], new Long(-1, 16777215)));
      index = index + 1 | 0;
    }
    initializeGrowth_6(this);
  };
  protoOf(MutableScatterSet).ii = function (newCapacity) {
    var previousMetadata = this.xq_1;
    var previousElements = this.yq_1;
    var previousCapacity = this.zq_1;
    initializeStorage_6(this, newCapacity);
    var newMetadata = this.xq_1;
    var newElements = this.yq_1;
    var capacity = this.zq_1;
    var inductionVariable = 0;
    if (inductionVariable < previousCapacity)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'androidx.collection.isFull' call
        // Inline function 'androidx.collection.readRawMetadata' call
        var tmp$ret$1 = bitwiseAnd(shiftRight(previousMetadata[i >> 3], (i & 7) << 3), new Long(255, 0));
        if (compare(tmp$ret$1, new Long(128, 0)) < 0) {
          var previousElement = previousElements[i];
          // Inline function 'androidx.collection.hash' call
          // Inline function 'kotlin.hashCode' call
          var tmp1_elvis_lhs = previousElement == null ? null : hashCode(previousElement);
          var tmp$ret$3 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
          var hash = imul(tmp$ret$3, -862048943);
          var hash_0 = hash ^ hash << 16;
          // Inline function 'androidx.collection.h1' call
          var tmp$ret$4 = hash_0 >>> 7 | 0;
          var index = findFirstAvailableSlot_6(this, tmp$ret$4);
          // Inline function 'androidx.collection.h2' call
          var tmp$ret$5 = hash_0 & 127;
          // Inline function 'androidx.collection.writeMetadata' call
          // Inline function 'androidx.collection.writeRawMetadata' call
          var value = fromInt(tmp$ret$5);
          var i_0 = index >> 3;
          var b = (index & 7) << 3;
          newMetadata[i_0] = bitwiseOr(bitwiseAnd(newMetadata[i_0], invert(shiftLeft(new Long(255, 0), b))), shiftLeft(value, b));
          var cloneIndex = ((index - 7 | 0) & capacity) + (7 & capacity) | 0;
          newMetadata[cloneIndex >> 3] = newMetadata[index >> 3];
          newElements[index] = previousElement;
        }
      }
       while (inductionVariable < previousCapacity);
  };
  protoOf(MutableScatterSet).kr = function () {
    return new MutableSetWrapper(this);
  };
  function mutableScatterSetOf() {
    _init_properties_ScatterSet_kt__vy48mc();
    return new MutableScatterSet();
  }
  function mutableScatterSetOf_0(element1, element2) {
    _init_properties_ScatterSet_kt__vy48mc();
    // Inline function 'kotlin.apply' call
    var this_0 = new MutableScatterSet(2);
    this_0.gr(element1);
    this_0.gr(element2);
    return this_0;
  }
  function ScatterSet$toString$lambda(this$0) {
    return function (element) {
      var tmp;
      if (element === this$0) {
        tmp = '(this)';
      } else {
        tmp = toString_0(element);
      }
      return tmp;
    };
  }
  function ScatterSet() {
    this.xq_1 = get_EmptyGroup();
    this.yq_1 = get_EMPTY_OBJECTS();
    this.zq_1 = 0;
    this.ar_1 = 0;
  }
  protoOf(ScatterSet).ci = function () {
    return this.zq_1;
  };
  protoOf(ScatterSet).l = function () {
    return this.ar_1;
  };
  protoOf(ScatterSet).n = function () {
    return this.ar_1 === 0;
  };
  protoOf(ScatterSet).ki = function () {
    return !(this.ar_1 === 0);
  };
  protoOf(ScatterSet).s = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.findElementIndex' call
      // Inline function 'androidx.collection.hash' call
      // Inline function 'kotlin.hashCode' call
      var tmp1_elvis_lhs = element == null ? null : hashCode(element);
      var tmp$ret$2 = tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
      var hash = imul(tmp$ret$2, -862048943);
      var hash_0 = hash ^ hash << 16;
      // Inline function 'androidx.collection.h2' call
      var hash2 = hash_0 & 127;
      var probeMask = this.zq_1;
      // Inline function 'androidx.collection.h1' call
      var probeOffset = (hash_0 >>> 7 | 0) & probeMask;
      var probeIndex = 0;
      $l$loop_0: while (true) {
        var tmp0 = this.xq_1;
        // Inline function 'androidx.collection.group' call
        var offset = probeOffset;
        var i = offset >> 3;
        var b = (offset & 7) << 3;
        var g = bitwiseOr(shiftRightUnsigned(tmp0[i], b), bitwiseAnd(shiftLeft(tmp0[i + 1 | 0], 64 - b | 0), shiftRight(negate(fromInt(b)), 63)));
        // Inline function 'androidx.collection.match' call
        // Inline function 'kotlin.Long.times' call
        var this_0 = new Long(16843009, 16843009);
        var tmp$ret$7 = multiply(this_0, fromInt(hash2));
        var x = bitwiseXor(g, tmp$ret$7);
        var m = bitwiseAnd(bitwiseAnd(subtract(x, new Long(16843009, 16843009)), invert(x)), new Long(-2139062144, -2139062144));
        $l$loop: while (true) {
          // Inline function 'androidx.collection.hasNext' call
          var this_1 = m;
          if (!!equalsLong(this_1, new Long(0, 0))) {
            break $l$loop;
          }
          var tmp = probeOffset;
          // Inline function 'androidx.collection.get' call
          // Inline function 'androidx.collection.lowestBitSet' call
          var this_2 = m;
          var index = (tmp + (countTrailingZeroBits(this_2) >> 3) | 0) & probeMask;
          if (equals(this.yq_1[index], element)) {
            tmp$ret$0 = index;
            break $l$block;
          }
          // Inline function 'androidx.collection.next' call
          var this_3 = m;
          m = bitwiseAnd(this_3, subtract(this_3, new Long(1, 0)));
        }
        // Inline function 'androidx.collection.maskEmpty' call
        var tmp$ret$12 = bitwiseAnd(bitwiseAnd(g, shiftLeft(invert(g), 6)), new Long(-2139062144, -2139062144));
        if (!equalsLong(tmp$ret$12, new Long(0, 0))) {
          break $l$loop_0;
        }
        probeIndex = probeIndex + 8 | 0;
        probeOffset = (probeOffset + probeIndex | 0) & probeMask;
      }
      tmp$ret$0 = -1;
    }
    return tmp$ret$0 >= 0;
  };
  protoOf(ScatterSet).jn = function (separator, prefix, postfix, limit, truncated, transform) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    $l$block: {
      this_0.h(prefix);
      var index = 0;
      // Inline function 'androidx.collection.ScatterSet.forEach' call
      // Inline function 'kotlin.contracts.contract' call
      var elements = this.yq_1;
      $l$block_0: {
        // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
        // Inline function 'kotlin.contracts.contract' call
        var m = this.xq_1;
        var lastIndex = m.length - 2 | 0;
        var inductionVariable = 0;
        if (inductionVariable <= lastIndex)
          do {
            var i = inductionVariable;
            inductionVariable = inductionVariable + 1 | 0;
            var slot = m[i];
            // Inline function 'androidx.collection.maskEmptyOrDeleted' call
            var this_1 = slot;
            var tmp$ret$7 = bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144));
            if (!equalsLong(tmp$ret$7, new Long(-2139062144, -2139062144))) {
              var bitCount = 8 - (~(i - lastIndex | 0) >>> 31 | 0) | 0;
              var inductionVariable_0 = 0;
              if (inductionVariable_0 < bitCount)
                do {
                  var j = inductionVariable_0;
                  inductionVariable_0 = inductionVariable_0 + 1 | 0;
                  // Inline function 'androidx.collection.isFull' call
                  var value = bitwiseAnd(slot, new Long(255, 0));
                  if (compare(value, new Long(128, 0)) < 0) {
                    var index_0 = (i << 3) + j | 0;
                    var element = elements[index_0];
                    if (index === limit) {
                      this_0.h(truncated);
                      break $l$block;
                    }
                    if (!(index === 0)) {
                      this_0.h(separator);
                    }
                    if (transform == null) {
                      this_0.p7(element);
                    } else {
                      this_0.h(transform(element));
                    }
                    index = index + 1 | 0;
                  }
                  slot = shiftRight(slot, 8);
                }
                 while (inductionVariable_0 < bitCount);
              if (!(bitCount === 8)) {
                break $l$block_0;
              }
            }
          }
           while (!(i === lastIndex));
      }
      this_0.h(postfix);
    }
    return this_0.toString();
  };
  protoOf(ScatterSet).lr = function (separator, prefix, postfix, limit, truncated, transform, $super) {
    separator = separator === VOID ? ', ' : separator;
    prefix = prefix === VOID ? '' : prefix;
    postfix = postfix === VOID ? '' : postfix;
    limit = limit === VOID ? -1 : limit;
    truncated = truncated === VOID ? '...' : truncated;
    transform = transform === VOID ? null : transform;
    return $super === VOID ? this.jn(separator, prefix, postfix, limit, truncated, transform) : $super.jn.call(this, separator, prefix, postfix, limit, truncated, transform);
  };
  protoOf(ScatterSet).hashCode = function () {
    var hash = this.zq_1;
    hash = imul(31, hash) + this.ar_1 | 0;
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.yq_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.xq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements[index];
                  if (!equals(element, this)) {
                    var tmp = hash;
                    // Inline function 'kotlin.hashCode' call
                    var tmp1_elvis_lhs = element == null ? null : hashCode(element);
                    hash = tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
                  }
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
    return hash;
  };
  protoOf(ScatterSet).equals = function (other) {
    if (other === this) {
      return true;
    }
    if (!(other instanceof ScatterSet)) {
      return false;
    }
    if (!(other.l() === this.l())) {
      return false;
    }
    var o = other instanceof ScatterSet ? other : THROW_CCE();
    // Inline function 'androidx.collection.ScatterSet.forEach' call
    // Inline function 'kotlin.contracts.contract' call
    var elements = this.yq_1;
    $l$block: {
      // Inline function 'androidx.collection.ScatterSet.forEachIndex' call
      // Inline function 'kotlin.contracts.contract' call
      var m = this.xq_1;
      var lastIndex = m.length - 2 | 0;
      var inductionVariable = 0;
      if (inductionVariable <= lastIndex)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var slot = m[i];
          // Inline function 'androidx.collection.maskEmptyOrDeleted' call
          var this_0 = slot;
          var tmp$ret$4 = bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144));
          if (!equalsLong(tmp$ret$4, new Long(-2139062144, -2139062144))) {
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
                  var element = elements[index];
                  if (!o.s(element)) {
                    return false;
                  }
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
    return true;
  };
  protoOf(ScatterSet).toString = function () {
    return this.lr(VOID, '[', ']', VOID, VOID, ScatterSet$toString$lambda(this));
  };
  function MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation) {
    this.ur_1 = this$0;
    this.vr_1 = this$1;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).fs = function ($this$iterator, $completion) {
    var tmp = this.gs($this$iterator, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).d9 = function (p1, $completion) {
    return this.fs(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 11;
            this.es_1 = this.ur_1.is_1;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.cs_1 = this.es_1.xq_1;
            this.bs_1 = this.cs_1.length - 2 | 0;
            this.ds_1 = numberRangeToNumber(0, this.bs_1).i();
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!this.ds_1.j()) {
              this.l8_1 = 9;
              continue $sm;
            }

            this.zr_1 = this.ds_1.k();
            this.yr_1 = this.cs_1[this.zr_1];
            var this_0 = this.yr_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_0, shiftLeft(invert(this_0), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.xr_1 = 8 - (~(this.zr_1 - this.bs_1 | 0) >>> 31 | 0) | 0;
              this.as_1 = until(0, this.xr_1).i();
              this.l8_1 = 3;
              continue $sm;
            } else {
              this.l8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.as_1.j()) {
              this.l8_1 = 6;
              continue $sm;
            }

            var j = this.as_1.k();
            var value = bitwiseAnd(this.yr_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.zr_1 << 3) + j | 0;
              this.vr_1.js_1 = index;
              this.l8_1 = 4;
              suspendResult = this.wr_1.yd(this.ur_1.is_1.yq_1[index], this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 5;
              continue $sm;
            }

          case 4:
            this.l8_1 = 5;
            continue $sm;
          case 5:
            this.yr_1 = shiftRight(this.yr_1, 8);
            this.l8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.xr_1 === 8)) {
              this.l8_1 = 10;
              continue $sm;
            } else {
              this.l8_1 = 7;
              continue $sm;
            }

          case 7:
            this.l8_1 = 8;
            continue $sm;
          case 8:
            this.l8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 11) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(MutableSetWrapper$iterator$o$iterator$slambda).gs = function ($this$iterator, completion) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this.ur_1, this.vr_1, completion);
    i.wr_1 = $this$iterator;
    return i;
  };
  function MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this$1, resultContinuation) {
    var i = new MutableSetWrapper$iterator$o$iterator$slambda(this$0, this$1, resultContinuation);
    return constructCallableReference(function ($this$iterator, $completion) {
      return i.fs($this$iterator, $completion);
    }, 1);
  }
  function MutableSetWrapper$iterator$1(this$0) {
    this.ls_1 = this$0;
    this.js_1 = -1;
    var tmp = this;
    tmp.ks_1 = iterator(MutableSetWrapper$iterator$o$iterator$slambda_0(this$0, this, null));
  }
  protoOf(MutableSetWrapper$iterator$1).j = function () {
    return this.ks_1.j();
  };
  protoOf(MutableSetWrapper$iterator$1).k = function () {
    return this.ks_1.k();
  };
  protoOf(MutableSetWrapper$iterator$1).l3 = function () {
    if (!(this.js_1 === -1)) {
      this.ls_1.is_1.jr(this.js_1);
      this.js_1 = -1;
    }
  };
  function MutableSetWrapper(parent) {
    SetWrapper.call(this, parent);
    this.is_1 = parent;
  }
  protoOf(MutableSetWrapper).g = function (element) {
    return this.is_1.g(element);
  };
  protoOf(MutableSetWrapper).r = function (elements) {
    return this.is_1.xm(elements);
  };
  protoOf(MutableSetWrapper).b2 = function () {
    this.is_1.b2();
  };
  protoOf(MutableSetWrapper).i = function () {
    return new MutableSetWrapper$iterator$1(this);
  };
  protoOf(MutableSetWrapper).c2 = function (element) {
    return this.is_1.c2(element);
  };
  function SetWrapper$iterator$slambda(this$0, resultContinuation) {
    this.vs_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(SetWrapper$iterator$slambda).fs = function ($this$iterator, $completion) {
    var tmp = this.gs($this$iterator, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(SetWrapper$iterator$slambda).d9 = function (p1, $completion) {
    return this.fs(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(SetWrapper$iterator$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 11;
            var this_0 = this.vs_1.ms_1;
            this.zs_1 = this_0.yq_1;
            this.ft_1 = this_0;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.dt_1 = this.ft_1.xq_1;
            this.ct_1 = this.dt_1.length - 2 | 0;
            this.et_1 = numberRangeToNumber(0, this.ct_1).i();
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!this.et_1.j()) {
              this.l8_1 = 9;
              continue $sm;
            }

            this.at_1 = this.et_1.k();
            this.ys_1 = this.dt_1[this.at_1];
            var this_1 = this.ys_1;
            if (!equalsLong(bitwiseAnd(bitwiseAnd(this_1, shiftLeft(invert(this_1), 7)), new Long(-2139062144, -2139062144)), new Long(-2139062144, -2139062144))) {
              this.xs_1 = 8 - (~(this.at_1 - this.ct_1 | 0) >>> 31 | 0) | 0;
              this.bt_1 = until(0, this.xs_1).i();
              this.l8_1 = 3;
              continue $sm;
            } else {
              this.l8_1 = 8;
              continue $sm;
            }

          case 3:
            if (!this.bt_1.j()) {
              this.l8_1 = 6;
              continue $sm;
            }

            var j = this.bt_1.k();
            var value = bitwiseAnd(this.ys_1, new Long(255, 0));
            if (compare(value, new Long(128, 0)) < 0) {
              var index = (this.at_1 << 3) + j | 0;
              var element = this.zs_1[index];
              this.l8_1 = 4;
              suspendResult = this.ws_1.yd(element, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 5;
              continue $sm;
            }

          case 4:
            this.l8_1 = 5;
            continue $sm;
          case 5:
            this.ys_1 = shiftRight(this.ys_1, 8);
            this.l8_1 = 3;
            continue $sm;
          case 6:
            if (!(this.xs_1 === 8)) {
              this.l8_1 = 10;
              continue $sm;
            } else {
              this.l8_1 = 7;
              continue $sm;
            }

          case 7:
            this.l8_1 = 8;
            continue $sm;
          case 8:
            this.l8_1 = 2;
            continue $sm;
          case 9:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 10;
            continue $sm;
          case 10:
            return Unit_instance;
          case 11:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 11) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(SetWrapper$iterator$slambda).gs = function ($this$iterator, completion) {
    var i = new SetWrapper$iterator$slambda(this.vs_1, completion);
    i.ws_1 = $this$iterator;
    return i;
  };
  function SetWrapper$iterator$slambda_0(this$0, resultContinuation) {
    var i = new SetWrapper$iterator$slambda(this$0, resultContinuation);
    return constructCallableReference(function ($this$iterator, $completion) {
      return i.fs($this$iterator, $completion);
    }, 1);
  }
  function SetWrapper(parent) {
    this.ms_1 = parent;
  }
  protoOf(SetWrapper).l = function () {
    return this.ms_1.ar_1;
  };
  protoOf(SetWrapper).p1 = function (elements) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = elements.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!this.ms_1.s(element)) {
        return false;
      }
    }
    return true;
  };
  protoOf(SetWrapper).s = function (element) {
    return this.ms_1.s(element);
  };
  protoOf(SetWrapper).n = function () {
    return this.ms_1.n();
  };
  protoOf(SetWrapper).i = function () {
    return iterator(SetWrapper$iterator$slambda_0(this, null));
  };
  protoOf(SetWrapper).equals = function (other) {
    if (this === other)
      return true;
    if (other == null || !getKClassFromExpression(this).equals(getKClassFromExpression(other)))
      return false;
    if (!(other instanceof SetWrapper))
      THROW_CCE();
    return this.ms_1.equals(other.ms_1);
  };
  protoOf(SetWrapper).hashCode = function () {
    return this.ms_1.hashCode();
  };
  protoOf(SetWrapper).toString = function () {
    return this.ms_1.toString();
  };
  var properties_initialized_ScatterSet_kt_dmj456;
  function _init_properties_ScatterSet_kt__vy48mc() {
    if (!properties_initialized_ScatterSet_kt_dmj456) {
      properties_initialized_ScatterSet_kt_dmj456 = true;
      EmptyScatterSet = new MutableScatterSet(0);
    }
  }
  function get_EMPTY_INTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_INTS;
  }
  var EMPTY_INTS;
  function get_EMPTY_LONGS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_LONGS;
  }
  var EMPTY_LONGS;
  function get_EMPTY_OBJECTS() {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return EMPTY_OBJECTS;
  }
  var EMPTY_OBJECTS;
  function idealLongArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    return idealByteArraySize(imul(need, 8)) / 8 | 0;
  }
  function idealByteArraySize(need) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var inductionVariable = 4;
    if (inductionVariable <= 31)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        if (need <= ((1 << i) - 12 | 0)) {
          return (1 << i) - 12 | 0;
        }
      }
       while (inductionVariable <= 31);
    return need;
  }
  function binarySearch(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (midVal < value) {
        lo = mid + 1 | 0;
      } else if (midVal > value) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  function binarySearch_0(array, size, value) {
    _init_properties_ContainerHelpers_kt__6fon4s();
    var lo = 0;
    var hi = size - 1 | 0;
    while (lo <= hi) {
      var mid = (lo + hi | 0) >>> 1 | 0;
      var midVal = array[mid];
      if (compare(midVal, value) < 0) {
        lo = mid + 1 | 0;
      } else if (compare(midVal, value) > 0) {
        hi = mid - 1 | 0;
      } else {
        return mid;
      }
    }
    return ~lo;
  }
  var properties_initialized_ContainerHelpers_kt_9fe6be;
  function _init_properties_ContainerHelpers_kt__6fon4s() {
    if (!properties_initialized_ContainerHelpers_kt_9fe6be) {
      properties_initialized_ContainerHelpers_kt_9fe6be = true;
      EMPTY_INTS = new Int32Array(0);
      EMPTY_LONGS = longArray(0);
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_OBJECTS = Array(0);
    }
  }
  function throwIndexOutOfBoundsException(message) {
    throw IndexOutOfBoundsException_init_$Create$(message);
  }
  function throwIllegalArgumentException(message) {
    throw IllegalArgumentException_init_$Create$(message);
  }
  function throwNoSuchElementException(message) {
    throw NoSuchElementException_init_$Create$_0(message);
  }
  function throwIllegalStateException(message) {
    throw IllegalStateException_init_$Create$(message);
  }
  function ElementIterator($outer) {
    this.jt_1 = $outer;
    IndexBasedArrayIterator.call(this, $outer.ch_1);
  }
  protoOf(ElementIterator).ph = function (index) {
    return this.jt_1.kt(index);
  };
  protoOf(ElementIterator).qh = function (index) {
    this.jt_1.g2(index);
  };
  function ArraySet(capacity) {
    capacity = capacity === VOID ? 0 : capacity;
    this.ah_1 = get_EMPTY_INTS();
    this.bh_1 = get_EMPTY_OBJECTS();
    this.ch_1 = 0;
    if (capacity > 0) {
      allocArrays(this, capacity);
    }
  }
  protoOf(ArraySet).l = function () {
    return this.ch_1;
  };
  protoOf(ArraySet).b2 = function () {
    // Inline function 'androidx.collection.clearInternal' call
    if (!(this.ch_1 === 0)) {
      this.ah_1 = get_EMPTY_INTS();
      this.bh_1 = get_EMPTY_OBJECTS();
      this.ch_1 = 0;
    }
    if (!(this.ch_1 === 0)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  protoOf(ArraySet).ih = function (minimumCapacity) {
    // Inline function 'androidx.collection.ensureCapacityInternal' call
    var oSize = this.ch_1;
    if (this.ah_1.length < minimumCapacity) {
      var ohashes = this.ah_1;
      var oarray = this.bh_1;
      allocArrays(this, minimumCapacity);
      if (this.ch_1 > 0) {
        var tmp2 = this.ah_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex = this.ch_1;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = ohashes;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp, tmp2, 0, 0, endIndex);
        var tmp2_0 = this.bh_1;
        // Inline function 'kotlin.collections.copyInto' call
        var endIndex_0 = this.ch_1;
        arrayCopy(oarray, tmp2_0, 0, 0, endIndex_0);
      }
    }
    if (!(this.ch_1 === oSize)) {
      throw ConcurrentModificationException_init_$Create$();
    }
  };
  protoOf(ArraySet).s = function (element) {
    // Inline function 'androidx.collection.containsInternal' call
    return this.lt(element) >= 0;
  };
  protoOf(ArraySet).lt = function (key) {
    // Inline function 'androidx.collection.indexOfInternal' call
    return key == null ? indexOfNull(this) : indexOf(this, key, hashCode(key));
  };
  protoOf(ArraySet).kt = function (index) {
    // Inline function 'androidx.collection.valueAtInternal' call
    return this.bh_1[index];
  };
  protoOf(ArraySet).n = function () {
    // Inline function 'androidx.collection.isEmptyInternal' call
    return this.ch_1 <= 0;
  };
  protoOf(ArraySet).g = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.addInternal' call
      var oSize = this.ch_1;
      var hash;
      var index;
      if (element == null) {
        hash = 0;
        index = indexOfNull(this);
      } else {
        hash = hashCode(element);
        index = indexOf(this, element, hash);
      }
      if (index >= 0) {
        tmp$ret$0 = false;
        break $l$block;
      }
      index = ~index;
      if (oSize >= this.ah_1.length) {
        var n = oSize >= 8 ? oSize + (oSize >> 1) | 0 : oSize >= 4 ? 8 : 4;
        var ohashes = this.ah_1;
        var oarray = this.bh_1;
        allocArrays(this, n);
        if (!(oSize === this.ch_1)) {
          throw ConcurrentModificationException_init_$Create$();
        }
        // Inline function 'kotlin.collections.isNotEmpty' call
        // Inline function 'kotlin.collections.isEmpty' call
        if (!(this.ah_1.length === 0)) {
          var tmp2 = this.ah_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = ohashes.length;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, tmp2, 0, 0, endIndex);
          var tmp2_0 = this.bh_1;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = oarray.length;
          arrayCopy(oarray, tmp2_0, 0, 0, endIndex_0);
        }
      }
      if (index < oSize) {
        var tmp0 = this.ah_1;
        var tmp2_1 = this.ah_1;
        var tmp4 = index + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex = index;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_0 = tmp0;
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        arrayCopy(tmp_0, tmp2_1, tmp4, startIndex, oSize);
        var tmp0_0 = this.bh_1;
        var tmp2_2 = this.bh_1;
        var tmp4_0 = index + 1 | 0;
        // Inline function 'kotlin.collections.copyInto' call
        var startIndex_0 = index;
        arrayCopy(tmp0_0, tmp2_2, tmp4_0, startIndex_0, oSize);
      }
      if (!(oSize === this.ch_1) || index >= this.ah_1.length) {
        throw ConcurrentModificationException_init_$Create$();
      }
      this.ah_1[index] = hash;
      this.bh_1[index] = element;
      this.ch_1 = this.ch_1 + 1 | 0;
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).c2 = function (element) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.removeInternal' call
      var index = this.lt(element);
      if (index >= 0) {
        this.g2(index);
        tmp$ret$0 = true;
        break $l$block;
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).g2 = function (index) {
    // Inline function 'androidx.collection.removeAtInternal' call
    var oSize = this.ch_1;
    var old = this.bh_1[index];
    if (oSize <= 1) {
      this.b2();
    } else {
      var nSize = oSize - 1 | 0;
      if (this.ah_1.length > 8 && this.ch_1 < (this.ah_1.length / 3 | 0)) {
        var n = this.ch_1 > 8 ? this.ch_1 + (this.ch_1 >> 1) | 0 : 8;
        var ohashes = this.ah_1;
        var oarray = this.bh_1;
        allocArrays(this, n);
        if (index > 0) {
          // Inline function 'kotlin.collections.copyInto' call
          var destination = this.ah_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, destination, 0, 0, index);
          // Inline function 'kotlin.collections.copyInto' call
          var destination_0 = this.bh_1;
          arrayCopy(oarray, destination_0, 0, 0, index);
        }
        if (index < nSize) {
          var tmp2 = this.ah_1;
          var tmp6 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = nSize + 1 | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_0 = ohashes;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_0, tmp2, index, tmp6, endIndex);
          var tmp2_0 = this.bh_1;
          var tmp6_0 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = nSize + 1 | 0;
          arrayCopy(oarray, tmp2_0, index, tmp6_0, endIndex_0);
        }
      } else {
        if (index < nSize) {
          var tmp0 = this.ah_1;
          var tmp2_1 = this.ah_1;
          var tmp6_1 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_1 = nSize + 1 | 0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp_1 = tmp0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp_1, tmp2_1, index, tmp6_1, endIndex_1);
          var tmp0_0 = this.bh_1;
          var tmp2_2 = this.bh_1;
          var tmp6_2 = index + 1 | 0;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_2 = nSize + 1 | 0;
          arrayCopy(tmp0_0, tmp2_2, index, tmp6_2, endIndex_2);
        }
        this.bh_1[nSize] = null;
      }
      if (!(oSize === this.ch_1)) {
        throw ConcurrentModificationException_init_$Create$();
      }
      this.ch_1 = nSize;
    }
    return old;
  };
  protoOf(ArraySet).equals = function (other) {
    var tmp$ret$0;
    $l$block_4: {
      // Inline function 'androidx.collection.equalsInternal' call
      if (this === other) {
        tmp$ret$0 = true;
        break $l$block_4;
      }
      if (!(other == null) ? isInterface(other, KtSet) : false) {
        if (!(this.l() === other.l())) {
          tmp$ret$0 = false;
          break $l$block_4;
        }
        try {
          var inductionVariable = 0;
          var last = this.ch_1;
          if (inductionVariable < last)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var mine = this.kt(i);
              if (!other.s(mine)) {
                tmp$ret$0 = false;
                break $l$block_4;
              }
            }
             while (inductionVariable < last);
        } catch ($p) {
          if ($p instanceof NullPointerException) {
            var ignored = $p;
            tmp$ret$0 = false;
            break $l$block_4;
          } else {
            if ($p instanceof ClassCastException) {
              var ignored_0 = $p;
              tmp$ret$0 = false;
              break $l$block_4;
            } else {
              throw $p;
            }
          }
        }
        tmp$ret$0 = true;
        break $l$block_4;
      }
      tmp$ret$0 = false;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).hashCode = function () {
    // Inline function 'androidx.collection.hashCodeInternal' call
    var hashes = this.ah_1;
    var s = this.ch_1;
    var result = 0;
    var inductionVariable = 0;
    if (inductionVariable < s)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        result = result + hashes[i] | 0;
      }
       while (inductionVariable < s);
    return result;
  };
  protoOf(ArraySet).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.toStringInternal' call
      if (this.n()) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.ch_1, 14);
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      this_0.r7(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.ch_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.q7(', ');
          }
          var value = this.kt(i);
          if (!(value === this)) {
            this_0.p7(value);
          } else {
            this_0.q7('(this Set)');
          }
        }
         while (inductionVariable < last);
      this_0.r7(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).i = function () {
    return new ElementIterator(this);
  };
  protoOf(ArraySet).p1 = function (elements) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.containsAllInternal' call
      var tmp0_iterator = elements.i();
      while (tmp0_iterator.j()) {
        var item = tmp0_iterator.k();
        if (!this.s(item)) {
          tmp$ret$0 = false;
          break $l$block;
        }
      }
      tmp$ret$0 = true;
    }
    return tmp$ret$0;
  };
  protoOf(ArraySet).r = function (elements) {
    // Inline function 'androidx.collection.addAllInternal' call
    this.ih(this.ch_1 + elements.l() | 0);
    var added = false;
    var tmp0_iterator = elements.i();
    while (tmp0_iterator.j()) {
      var value = tmp0_iterator.k();
      added = !!(this.g(value) | added);
    }
    return added;
  };
  function LongSparseArray(initialCapacity) {
    initialCapacity = initialCapacity === VOID ? 10 : initialCapacity;
    this.mt_1 = false;
    this.pt_1 = 0;
    if (initialCapacity === 0) {
      this.nt_1 = get_EMPTY_LONGS();
      this.ot_1 = get_EMPTY_OBJECTS();
    } else {
      var idealCapacity = idealLongArraySize(initialCapacity);
      this.nt_1 = longArray(idealCapacity);
      var tmp = this;
      // Inline function 'kotlin.arrayOfNulls' call
      tmp.ot_1 = Array(idealCapacity);
    }
  }
  protoOf(LongSparseArray).nk = function (key) {
    // Inline function 'androidx.collection.commonGet' call
    // Inline function 'androidx.collection.commonGetInternal' call
    var i = binarySearch_0(this.nt_1, this.pt_1, key);
    var tmp;
    if (i < 0 || this.ot_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
      tmp = null;
    } else {
      tmp = this.ot_1[i];
    }
    return tmp;
  };
  protoOf(LongSparseArray).qt = function (key) {
    // Inline function 'androidx.collection.commonRemove' call
    var i = binarySearch_0(this.nt_1, this.pt_1, key);
    if (i >= 0) {
      if (!(this.ot_1[i] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
        this.ot_1[i] = access$_get_DELETED_$tLongSparseArrayKt_9psy8u();
        this.mt_1 = true;
      }
    }
    return Unit_instance;
  };
  protoOf(LongSparseArray).rt = function (key, value) {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonPut' call
      var index = binarySearch_0(this.nt_1, this.pt_1, key);
      if (index >= 0) {
        this.ot_1[index] = value;
      } else {
        index = ~index;
        if (index < this.pt_1 && this.ot_1[index] === access$_get_DELETED_$tLongSparseArrayKt_9psy8u()) {
          this.nt_1[index] = key;
          this.ot_1[index] = value;
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
        if (this.mt_1 && this.pt_1 >= this.nt_1.length) {
          // Inline function 'androidx.collection.commonGc' call
          var n = this.pt_1;
          var newSize = 0;
          var keys = this.nt_1;
          var values = this.ot_1;
          var inductionVariable = 0;
          if (inductionVariable < n)
            do {
              var i = inductionVariable;
              inductionVariable = inductionVariable + 1 | 0;
              var value_0 = values[i];
              if (!(value_0 === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
                if (!(i === newSize)) {
                  keys[newSize] = keys[i];
                  values[newSize] = value_0;
                  values[i] = null;
                }
                newSize = newSize + 1 | 0;
              }
            }
             while (inductionVariable < n);
          this.mt_1 = false;
          this.pt_1 = newSize;
          index = ~binarySearch_0(this.nt_1, this.pt_1, key);
        }
        if (this.pt_1 >= this.nt_1.length) {
          var newSize_0 = idealLongArraySize(this.pt_1 + 1 | 0);
          this.nt_1 = copyOf_1(this.nt_1, newSize_0);
          this.ot_1 = copyOf_2(this.ot_1, newSize_0);
        }
        if (!((this.pt_1 - index | 0) === 0)) {
          var tmp0 = this.nt_1;
          var tmp2 = this.nt_1;
          var tmp4 = index + 1 | 0;
          var tmp6 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex = this.pt_1;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          var tmp = tmp0;
          // Inline function 'kotlin.js.unsafeCast' call
          // Inline function 'kotlin.js.asDynamic' call
          arrayCopy(tmp, tmp2, tmp4, tmp6, endIndex);
          var tmp0_0 = this.ot_1;
          var tmp2_0 = this.ot_1;
          var tmp4_0 = index + 1 | 0;
          var tmp6_0 = index;
          // Inline function 'kotlin.collections.copyInto' call
          var endIndex_0 = this.pt_1;
          arrayCopy(tmp0_0, tmp2_0, tmp4_0, tmp6_0, endIndex_0);
        }
        this.nt_1[index] = key;
        this.ot_1[index] = value;
        this.pt_1 = this.pt_1 + 1 | 0;
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  };
  protoOf(LongSparseArray).st = function () {
    // Inline function 'androidx.collection.commonSize' call
    if (this.mt_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.pt_1;
      var newSize = 0;
      var keys = this.nt_1;
      var values = this.ot_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.mt_1 = false;
      this.pt_1 = newSize;
    }
    return this.pt_1;
  };
  protoOf(LongSparseArray).n = function () {
    // Inline function 'androidx.collection.commonIsEmpty' call
    return this.st() === 0;
  };
  protoOf(LongSparseArray).tt = function (index) {
    // Inline function 'androidx.collection.commonKeyAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.pt_1 : false)) {
      var tmp$ret$3 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$3);
    }
    if (this.mt_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.pt_1;
      var newSize = 0;
      var keys = this.nt_1;
      var values = this.ot_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.mt_1 = false;
      this.pt_1 = newSize;
    }
    return this.nt_1[index];
  };
  protoOf(LongSparseArray).kt = function (index) {
    // Inline function 'androidx.collection.commonValueAt' call
    // Inline function 'androidx.collection.internal.requirePrecondition' call
    // Inline function 'kotlin.contracts.contract' call
    if (!(0 <= index ? index < this.pt_1 : false)) {
      var tmp$ret$3 = 'Expected index to be within 0..size()-1, but was ' + index;
      throwIllegalArgumentException(tmp$ret$3);
    }
    if (this.mt_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.pt_1;
      var newSize = 0;
      var keys = this.nt_1;
      var values = this.ot_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.mt_1 = false;
      this.pt_1 = newSize;
    }
    return this.ot_1[index];
  };
  protoOf(LongSparseArray).ut = function (key) {
    // Inline function 'androidx.collection.commonIndexOfKey' call
    if (this.mt_1) {
      // Inline function 'androidx.collection.commonGc' call
      var n = this.pt_1;
      var newSize = 0;
      var keys = this.nt_1;
      var values = this.ot_1;
      var inductionVariable = 0;
      if (inductionVariable < n)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var value = values[i];
          if (!(value === access$_get_DELETED_$tLongSparseArrayKt_9psy8u())) {
            if (!(i === newSize)) {
              keys[newSize] = keys[i];
              values[newSize] = value;
              values[i] = null;
            }
            newSize = newSize + 1 | 0;
          }
        }
         while (inductionVariable < n);
      this.mt_1 = false;
      this.pt_1 = newSize;
    }
    return binarySearch_0(this.nt_1, this.pt_1, key);
  };
  protoOf(LongSparseArray).ok = function (key) {
    // Inline function 'androidx.collection.commonContainsKey' call
    return this.ut(key) >= 0;
  };
  protoOf(LongSparseArray).b2 = function () {
    // Inline function 'androidx.collection.commonClear' call
    var n = this.pt_1;
    var values = this.ot_1;
    var inductionVariable = 0;
    if (inductionVariable < n)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        values[i] = null;
      }
       while (inductionVariable < n);
    this.pt_1 = 0;
    this.mt_1 = false;
    return Unit_instance;
  };
  protoOf(LongSparseArray).toString = function () {
    var tmp$ret$0;
    $l$block: {
      // Inline function 'androidx.collection.commonToString' call
      if (this.st() <= 0) {
        tmp$ret$0 = '{}';
        break $l$block;
      }
      // Inline function 'kotlin.text.buildString' call
      var capacity = imul(this.pt_1, 28);
      // Inline function 'kotlin.apply' call
      var this_0 = StringBuilder_init_$Create$_0(capacity);
      this_0.r7(_Char___init__impl__6a9atx(123));
      var inductionVariable = 0;
      var last = this.pt_1;
      if (inductionVariable < last)
        do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          if (i > 0) {
            this_0.q7(', ');
          }
          var key = this.tt(i);
          this_0.db(key);
          this_0.r7(_Char___init__impl__6a9atx(61));
          var value = this.kt(i);
          if (!(value === this_0)) {
            this_0.p7(value);
          } else {
            this_0.q7('(this Map)');
          }
        }
         while (inductionVariable < last);
      this_0.r7(_Char___init__impl__6a9atx(125));
      tmp$ret$0 = this_0.toString();
    }
    return tmp$ret$0;
  };
  function LruHashMap(initialCapacity, loadFactor) {
    initialCapacity = initialCapacity === VOID ? 16 : initialCapacity;
    loadFactor = loadFactor === VOID ? 0.75 : loadFactor;
    this.ml_1 = LinkedHashMap_init_$Create$(initialCapacity, loadFactor);
  }
  protoOf(LruHashMap).rl = function () {
    return this.ml_1.n();
  };
  protoOf(LruHashMap).x1 = function () {
    return this.ml_1.x1();
  };
  protoOf(LruHashMap).ll = function (key) {
    var item = this.ml_1.z1(key);
    if (!(item == null)) {
      // Inline function 'kotlin.collections.set' call
      this.ml_1.y1(key, item);
    }
    return item;
  };
  protoOf(LruHashMap).ol = function (key, value) {
    var item = this.ml_1.z1(key);
    // Inline function 'kotlin.collections.set' call
    this.ml_1.y1(key, value);
    return item;
  };
  protoOf(LruHashMap).sl = function (key) {
    return this.ml_1.z1(key);
  };
  function Lock() {
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ArraySet;
  _.$_$.b = LongSparseArray;
  _.$_$.c = LruCache;
  _.$_$.d = MutableDoubleList;
  _.$_$.e = MutableIntIntMap;
  _.$_$.f = MutableIntList;
  _.$_$.g = MutableIntObjectMap;
  _.$_$.h = MutableIntSet;
  _.$_$.i = MutableLongList;
  _.$_$.j = MutableLongObjectMap;
  _.$_$.k = MutableLongSet;
  _.$_$.l = MutableObjectIntMap;
  _.$_$.m = MutableObjectList;
  _.$_$.n = MutableScatterMap;
  _.$_$.o = MutableScatterSet;
  _.$_$.p = ObjectList;
  _.$_$.q = ScatterSet;
  _.$_$.r = emptyObjectIntMap;
  _.$_$.s = emptyObjectList;
  _.$_$.t = emptyScatterMap;
  _.$_$.u = intObjectMapOf;
  _.$_$.v = mutableIntIntMapOf;
  _.$_$.w = mutableIntListOf;
  _.$_$.x = mutableIntObjectMapOf_0;
  _.$_$.y = mutableIntObjectMapOf;
  _.$_$.z = mutableIntSetOf;
  _.$_$.a1 = mutableLongObjectMapOf;
  _.$_$.b1 = mutableObjectIntMapOf;
  _.$_$.c1 = mutableObjectListOf_0;
  _.$_$.d1 = mutableScatterMapOf;
  _.$_$.e1 = mutableScatterSetOf_0;
  _.$_$.f1 = mutableScatterSetOf;
  _.$_$.g1 = objectListOf;
  _.$_$.h1 = _FloatFloatPair___init__impl__2q1dd3_0;
  _.$_$.i1 = _FloatFloatPair___get_packedValue__impl__5lczxp;
  //endregion
  return _;
}));

//# sourceMappingURL=androidx-collection-collection.js.map
