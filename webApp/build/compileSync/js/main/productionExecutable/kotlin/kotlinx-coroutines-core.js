(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './kotlinx-atomicfu.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./kotlinx-atomicfu.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    if (typeof globalThis['kotlinx-atomicfu'] === 'undefined') {
      throw new Error("Error loading module 'kotlinx-coroutines-core'. Its dependency 'kotlinx-atomicfu' was not found. Please, check whether 'kotlinx-atomicfu' is loaded prior to 'kotlinx-coroutines-core'.");
    }
    globalThis['kotlinx-coroutines-core'] = factory(typeof globalThis['kotlinx-coroutines-core'] === 'undefined' ? {} : globalThis['kotlinx-coroutines-core'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlinx-atomicfu']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_kotlinx_atomicfu) {
  'use strict';
  //region block: imports
  var imul = Math.imul;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var protoOf = kotlin_kotlin.$_$.aa;
  var Continuation = kotlin_kotlin.$_$.g7;
  var initMetadataForClass = kotlin_kotlin.$_$.j9;
  var VOID = kotlin_kotlin.$_$.c;
  var EmptyCoroutineContext_getInstance = kotlin_kotlin.$_$.x;
  var Key_instance = kotlin_kotlin.$_$.w;
  var equals = kotlin_kotlin.$_$.b9;
  var createCoroutineUnintercepted = kotlin_kotlin.$_$.y6;
  var CoroutineImpl = kotlin_kotlin.$_$.m7;
  var get_COROUTINE_SUSPENDED = kotlin_kotlin.$_$.x6;
  var initMetadataForCoroutine = kotlin_kotlin.$_$.l9;
  var toString = kotlin_kotlin.$_$.ca;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.o2;
  var atomic$int$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.e;
  var intercepted = kotlin_kotlin.$_$.z6;
  var initMetadataForInterface = kotlin_kotlin.$_$.m9;
  var UnsupportedOperationException_init_$Create$ = kotlin_kotlin.$_$.b3;
  var isInterface = kotlin_kotlin.$_$.r9;
  var THROW_CCE = kotlin_kotlin.$_$.dd;
  var toString_0 = kotlin_kotlin.$_$.de;
  var atomic$ref$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.d;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  var hashCode = kotlin_kotlin.$_$.i9;
  var Companion_instance = kotlin_kotlin.$_$.e1;
  var _Result___init__impl__xyqfz8 = kotlin_kotlin.$_$.l;
  var createFailure = kotlin_kotlin.$_$.ld;
  var atomic$boolean$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.b;
  var CancellationException_init_$Create$ = kotlin_kotlin.$_$.x1;
  var Result__exceptionOrNull_impl_p6xea9 = kotlin_kotlin.$_$.m;
  var _Result___get_value__impl__bjfvqg = kotlin_kotlin.$_$.o;
  var AbstractCoroutineContextKey = kotlin_kotlin.$_$.c7;
  var AbstractCoroutineContextElement = kotlin_kotlin.$_$.b7;
  var get = kotlin_kotlin.$_$.d7;
  var minusKey = kotlin_kotlin.$_$.e7;
  var ContinuationInterceptor = kotlin_kotlin.$_$.f7;
  var RuntimeException_init_$Create$ = kotlin_kotlin.$_$.z2;
  var addSuppressed = kotlin_kotlin.$_$.hd;
  var Enum = kotlin_kotlin.$_$.sc;
  var startCoroutine = kotlin_kotlin.$_$.o7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.sd;
  var Long = kotlin_kotlin.$_$.yc;
  var compare = kotlin_kotlin.$_$.y7;
  var Duration__isPositive_impl_tvkkt2 = kotlin_kotlin.$_$.e;
  var Companion_getInstance = kotlin_kotlin.$_$.c1;
  var DurationUnit_NANOSECONDS_getInstance = kotlin_kotlin.$_$.h1;
  var toDuration = kotlin_kotlin.$_$.mc;
  var Duration__plus_impl_yu9v8f = kotlin_kotlin.$_$.f;
  var _Duration___get_inWholeMilliseconds__impl__msfiry = kotlin_kotlin.$_$.d;
  var ArrayDeque_init_$Create$ = kotlin_kotlin.$_$.k1;
  var add = kotlin_kotlin.$_$.u7;
  var subtract = kotlin_kotlin.$_$.m8;
  var RuntimeException = kotlin_kotlin.$_$.cd;
  var RuntimeException_init_$Init$ = kotlin_kotlin.$_$.y2;
  var captureStack = kotlin_kotlin.$_$.r8;
  var Error_0 = kotlin_kotlin.$_$.tc;
  var Error_init_$Init$ = kotlin_kotlin.$_$.f2;
  var Element = kotlin_kotlin.$_$.k7;
  var throwUninitializedPropertyAccessException = kotlin_kotlin.$_$.r7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.l1;
  var CancellationException = kotlin_kotlin.$_$.w6;
  var ArrayList = kotlin_kotlin.$_$.k3;
  var SequenceScope = kotlin_kotlin.$_$.ya;
  var initMetadataForLambda = kotlin_kotlin.$_$.n9;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var IllegalStateException_init_$Create$_0 = kotlin_kotlin.$_$.p2;
  var sequence = kotlin_kotlin.$_$.db;
  var plus = kotlin_kotlin.$_$.l7;
  var get_0 = kotlin_kotlin.$_$.i7;
  var fold = kotlin_kotlin.$_$.h7;
  var minusKey_0 = kotlin_kotlin.$_$.j7;
  var StringBuilder_init_$Create$ = kotlin_kotlin.$_$.c2;
  var anyToString = kotlin_kotlin.$_$.p8;
  var UnsupportedOperationException = kotlin_kotlin.$_$.gd;
  var CancellationException_init_$Init$ = kotlin_kotlin.$_$.w1;
  var DurationUnit_MILLISECONDS_getInstance = kotlin_kotlin.$_$.g1;
  var charSequenceLength = kotlin_kotlin.$_$.v8;
  var charCodeAt = kotlin_kotlin.$_$.t8;
  var toString_1 = kotlin_kotlin.$_$.k;
  var substring = kotlin_kotlin.$_$.bc;
  var returnIfSuspended = kotlin_kotlin.$_$.j1;
  var atomicfu$AtomicRefArray$ofNulls = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.a;
  var ensureNotNull = kotlin_kotlin.$_$.md;
  var fromInt = kotlin_kotlin.$_$.d8;
  var multiply = kotlin_kotlin.$_$.g8;
  var divide = kotlin_kotlin.$_$.b8;
  var modulo = kotlin_kotlin.$_$.f8;
  var convertToInt = kotlin_kotlin.$_$.z7;
  var equalsLong = kotlin_kotlin.$_$.c8;
  var bitwiseAnd = kotlin_kotlin.$_$.v7;
  var shiftRight = kotlin_kotlin.$_$.l8;
  var IllegalArgumentException_init_$Create$ = kotlin_kotlin.$_$.k2;
  var atomic$long$1 = kotlin_org_jetbrains_kotlinx_atomicfu.$_$.c;
  var listOf = kotlin_kotlin.$_$.u5;
  var ArrayList_init_$Create$_0 = kotlin_kotlin.$_$.m1;
  var NoSuchElementException_init_$Create$ = kotlin_kotlin.$_$.r2;
  var compareTo = kotlin_kotlin.$_$.w8;
  var last = kotlin_kotlin.$_$.tb;
  var _Char___init__impl__6a9atx = kotlin_kotlin.$_$.g;
  var shiftLeft = kotlin_kotlin.$_$.j8;
  var initMetadataForCompanion = kotlin_kotlin.$_$.k9;
  var IllegalStateException = kotlin_kotlin.$_$.wc;
  var IllegalStateException_init_$Init$ = kotlin_kotlin.$_$.n2;
  var NoSuchElementException = kotlin_kotlin.$_$.zc;
  var NoSuchElementException_init_$Init$ = kotlin_kotlin.$_$.s2;
  var getKClass = kotlin_kotlin.$_$.ta;
  var Unit = kotlin_kotlin.$_$.fd;
  var copyOf = kotlin_kotlin.$_$.o4;
  var get_ONE = kotlin_kotlin.$_$.t7;
  var joinToString = kotlin_kotlin.$_$.j5;
  var FunctionAdapter = kotlin_kotlin.$_$.o8;
  var throwKotlinNothingValueException = kotlin_kotlin.$_$.yd;
  var Exception = kotlin_kotlin.$_$.uc;
  var Exception_init_$Init$ = kotlin_kotlin.$_$.i2;
  var defineProp = kotlin_kotlin.$_$.y8;
  var toLongOrNull = kotlin_kotlin.$_$.gc;
  var startCoroutineUninterceptedOrReturnNonGeneratorVersion = kotlin_kotlin.$_$.a7;
  var isSuspendFunction = kotlin_kotlin.$_$.s9;
  var Collection = kotlin_kotlin.$_$.l3;
  var KtList = kotlin_kotlin.$_$.m3;
  var plus_0 = kotlin_kotlin.$_$.d6;
  var listOf_0 = kotlin_kotlin.$_$.t5;
  var getKClassFromExpression = kotlin_kotlin.$_$.sa;
  var Exception_init_$Create$ = kotlin_kotlin.$_$.h2;
  var CancellationException_init_$Create$_0 = kotlin_kotlin.$_$.z1;
  var CancellationException_init_$Init$_0 = kotlin_kotlin.$_$.y1;
  var getStringHashCode = kotlin_kotlin.$_$.h9;
  var HashSet_init_$Create$ = kotlin_kotlin.$_$.q1;
  var RuntimeException_init_$Init$_0 = kotlin_kotlin.$_$.w2;
  var LinkedHashSet_init_$Create$ = kotlin_kotlin.$_$.v1;
  var stackTraceToString = kotlin_kotlin.$_$.vd;
  var removeFirstOrNull = kotlin_kotlin.$_$.e6;
  var KtMutableList = kotlin_kotlin.$_$.p3;
  var coerceIn = kotlin_kotlin.$_$.pa;
  //endregion
  //region block: pre-declaration
  function cancel$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.rv(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.rv.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(Job, 'Job', VOID, VOID, [Element], [0]);
  initMetadataForInterface(ParentJob, 'ParentJob', VOID, VOID, [Job], [0]);
  initMetadataForClass(JobSupport, 'JobSupport', VOID, VOID, [Job, ParentJob], [0]);
  initMetadataForInterface(CoroutineScope, 'CoroutineScope');
  initMetadataForClass(AbstractCoroutine, 'AbstractCoroutine', VOID, JobSupport, [Job, Continuation, CoroutineScope], [0]);
  initMetadataForClass(StandaloneCoroutine, 'StandaloneCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(LazyStandaloneCoroutine, 'LazyStandaloneCoroutine', VOID, StandaloneCoroutine, VOID, [0]);
  initMetadataForCoroutine($awaitCOROUTINE$, CoroutineImpl);
  initMetadataForClass(DeferredCoroutine, 'DeferredCoroutine', VOID, AbstractCoroutine, [Job], [0]);
  initMetadataForClass(LazyDeferredCoroutine, 'LazyDeferredCoroutine', VOID, DeferredCoroutine, VOID, [0]);
  initMetadataForClass(ScopeCoroutine, 'ScopeCoroutine', VOID, AbstractCoroutine, VOID, [0]);
  initMetadataForClass(DispatchedCoroutine, 'DispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  function cancel$default_0(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.ux(cause) : $super.ux.call(this, cause);
  }
  initMetadataForInterface(CancellableContinuation, 'CancellableContinuation', VOID, VOID, [Continuation]);
  initMetadataForInterface(NotCompleted, 'NotCompleted');
  initMetadataForInterface(CancelHandler, 'CancelHandler', VOID, VOID, [NotCompleted]);
  initMetadataForClass(DisposeOnCancel, 'DisposeOnCancel', VOID, VOID, [CancelHandler]);
  initMetadataForInterface(Runnable, 'Runnable');
  initMetadataForClass(SchedulerTask, 'SchedulerTask', VOID, VOID, [Runnable]);
  initMetadataForClass(DispatchedTask, 'DispatchedTask', VOID, SchedulerTask);
  initMetadataForInterface(Waiter, 'Waiter');
  initMetadataForClass(CancellableContinuationImpl, 'CancellableContinuationImpl', VOID, DispatchedTask, [CancellableContinuation, Waiter]);
  initMetadataForObject(Active, 'Active', VOID, VOID, [NotCompleted]);
  initMetadataForClass(CompletedContinuation, 'CompletedContinuation');
  initMetadataForClass(UserSupplied, 'UserSupplied', VOID, VOID, [CancelHandler]);
  initMetadataForClass(LockFreeLinkedListNode, 'LockFreeLinkedListNode', LockFreeLinkedListNode);
  initMetadataForInterface(DisposableHandle, 'DisposableHandle');
  initMetadataForInterface(Incomplete, 'Incomplete');
  initMetadataForClass(JobNode, 'JobNode', VOID, LockFreeLinkedListNode, [DisposableHandle, Incomplete]);
  initMetadataForClass(ChildContinuation, 'ChildContinuation', VOID, JobNode);
  initMetadataForCoroutine($awaitCOROUTINE$_0, CoroutineImpl);
  initMetadataForClass(CompletableDeferredImpl, 'CompletableDeferredImpl', VOID, JobSupport, [Job], [0]);
  initMetadataForClass(CompletedExceptionally, 'CompletedExceptionally');
  initMetadataForClass(CancelledContinuation, 'CancelledContinuation', VOID, CompletedExceptionally);
  initMetadataForObject(Key, 'Key', VOID, AbstractCoroutineContextKey);
  initMetadataForClass(CoroutineDispatcher, 'CoroutineDispatcher', VOID, AbstractCoroutineContextElement, [ContinuationInterceptor]);
  initMetadataForObject(Key_0, 'Key');
  initMetadataForObject(Key_1, 'Key');
  initMetadataForObject(GlobalScope, 'GlobalScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(CoroutineStart, 'CoroutineStart', VOID, Enum);
  function invokeOnTimeout(timeMillis, block, context) {
    return get_DefaultDelay().z11(timeMillis, block, context);
  }
  initMetadataForInterface(Delay, 'Delay', VOID, VOID, VOID, [1]);
  initMetadataForInterface(DelayWithTimeoutDiagnostics, 'DelayWithTimeoutDiagnostics', VOID, VOID, [Delay], [1]);
  initMetadataForClass(EventLoop, 'EventLoop', VOID, CoroutineDispatcher);
  initMetadataForObject(ThreadLocalEventLoop, 'ThreadLocalEventLoop');
  initMetadataForClass(CompletionHandlerException, 'CompletionHandlerException', VOID, RuntimeException);
  initMetadataForClass(CoroutinesInternalError, 'CoroutinesInternalError', VOID, Error_0);
  initMetadataForObject(Key_2, 'Key');
  initMetadataForObject(NonDisposableHandle, 'NonDisposableHandle', VOID, VOID, [DisposableHandle]);
  initMetadataForClass(DisposeOnCompletion, 'DisposeOnCompletion', VOID, JobNode);
  initMetadataForClass(SynchronizedObject, 'SynchronizedObject', SynchronizedObject);
  initMetadataForClass(Finishing, 'Finishing', VOID, SynchronizedObject, [Incomplete]);
  initMetadataForClass(ChildCompletion, 'ChildCompletion', VOID, JobNode);
  initMetadataForClass(AwaitContinuation, 'AwaitContinuation', VOID, CancellableContinuationImpl);
  initMetadataForLambda(JobSupport$_get_children_$slambda_k839f8, CoroutineImpl, VOID, [1]);
  initMetadataForClass(JobImpl, 'JobImpl', VOID, JobSupport, [Job], [0]);
  initMetadataForClass(Empty, 'Empty', VOID, VOID, [Incomplete]);
  initMetadataForClass(IncompleteStateBox, 'IncompleteStateBox');
  initMetadataForClass(LockFreeLinkedListHead, 'LockFreeLinkedListHead', LockFreeLinkedListHead, LockFreeLinkedListNode);
  initMetadataForClass(NodeList, 'NodeList', NodeList, LockFreeLinkedListHead, [Incomplete]);
  initMetadataForClass(InactiveNodeList, 'InactiveNodeList', VOID, VOID, [Incomplete]);
  initMetadataForClass(InvokeOnCompletion, 'InvokeOnCompletion', VOID, JobNode);
  initMetadataForClass(InvokeOnCancelling, 'InvokeOnCancelling', VOID, JobNode);
  initMetadataForClass(ResumeOnCompletion, 'ResumeOnCompletion', VOID, JobNode);
  initMetadataForClass(ChildHandleNode, 'ChildHandleNode', VOID, JobNode, [DisposableHandle]);
  initMetadataForClass(ResumeAwaitOnCompletion, 'ResumeAwaitOnCompletion', VOID, JobNode);
  initMetadataForClass(MainCoroutineDispatcher, 'MainCoroutineDispatcher', VOID, CoroutineDispatcher);
  initMetadataForClass(SupervisorJobImpl, 'SupervisorJobImpl', VOID, JobImpl, VOID, [0]);
  initMetadataForClass(TimeoutCancellationException, 'TimeoutCancellationException', VOID, CancellationException);
  initMetadataForClass(TimeoutCoroutine, 'TimeoutCoroutine', VOID, ScopeCoroutine, [Runnable], [0]);
  initMetadataForCoroutine($withTimeoutOrNullCOROUTINE$, CoroutineImpl);
  initMetadataForObject(Key_3, 'Key');
  initMetadataForClass(YieldContext, 'YieldContext', YieldContext, AbstractCoroutineContextElement);
  initMetadataForObject(Unconfined, 'Unconfined', VOID, CoroutineDispatcher);
  initMetadataForClass(BufferOverflow, 'BufferOverflow', VOID, Enum);
  initMetadataForClass(ConcurrentLinkedListNode, 'ConcurrentLinkedListNode');
  initMetadataForClass(Segment, 'Segment', VOID, ConcurrentLinkedListNode, [NotCompleted]);
  initMetadataForClass(ChannelSegment, 'ChannelSegment', VOID, Segment);
  initMetadataForCoroutine($hasNextCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SendBroadcast, 'SendBroadcast', VOID, VOID, [Waiter]);
  initMetadataForClass(BufferedChannelIterator, 'BufferedChannelIterator', VOID, VOID, [Waiter], [0, 3]);
  initMetadataForCoroutine($sendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($receiveCOROUTINE$, CoroutineImpl);
  function cancel$default_1(cause, $super) {
    cause = cause === VOID ? null : cause;
    var tmp;
    if ($super === VOID) {
      this.rv(cause);
      tmp = Unit_instance;
    } else {
      tmp = $super.rv.call(this, cause);
    }
    return tmp;
  }
  initMetadataForInterface(ReceiveChannel, 'ReceiveChannel', VOID, VOID, VOID, [0]);
  function close$default(cause, $super) {
    cause = cause === VOID ? null : cause;
    return $super === VOID ? this.n1c(cause) : $super.n1c.call(this, cause);
  }
  initMetadataForInterface(SendChannel, 'SendChannel', VOID, VOID, VOID, [1]);
  initMetadataForClass(BufferedChannel, 'BufferedChannel', VOID, VOID, [ReceiveChannel, SendChannel], [1, 4, 0, 3]);
  initMetadataForClass(WaiterEB, 'WaiterEB');
  initMetadataForClass(ReceiveCatching, 'ReceiveCatching', VOID, VOID, [Waiter]);
  initMetadataForObject(Factory, 'Factory');
  initMetadataForClass(Failed, 'Failed', Failed);
  initMetadataForClass(Closed, 'Closed', VOID, Failed);
  initMetadataForCompanion(Companion);
  initMetadataForClass(ChannelResult, 'ChannelResult');
  initMetadataForClass(ClosedSendChannelException, 'ClosedSendChannelException', VOID, IllegalStateException);
  initMetadataForClass(ClosedReceiveChannelException, 'ClosedReceiveChannelException', VOID, NoSuchElementException);
  initMetadataForClass(ChannelCoroutine, 'ChannelCoroutine', VOID, AbstractCoroutine, [ReceiveChannel, SendChannel], [1, 0]);
  initMetadataForClass(ConflatedBufferedChannel, 'ConflatedBufferedChannel', VOID, BufferedChannel, VOID, [1, 0]);
  initMetadataForInterface(ProducerScope, 'ProducerScope', VOID, VOID, [CoroutineScope, SendChannel], [1]);
  initMetadataForClass(ProducerCoroutine, 'ProducerCoroutine', VOID, ChannelCoroutine, [ProducerScope], [1, 0]);
  initMetadataForClass(AbstractFlow, 'AbstractFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SafeFlow, 'SafeFlow', VOID, AbstractFlow, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ChannelFlow, 'ChannelFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(ChannelAsFlow, 'ChannelAsFlow', VOID, ChannelFlow, VOID, [1]);
  initMetadataForCoroutine($emitAllImplCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($collectCOROUTINE$_0, CoroutineImpl);
  initMetadataForInterface(FlowCollector, 'FlowCollector', VOID, VOID, VOID, [1]);
  initMetadataForClass(Emitter, 'Emitter', VOID, VOID, [DisposableHandle]);
  initMetadataForCoroutine($collectCOROUTINE$_1, CoroutineImpl);
  initMetadataForClass(AbstractSharedFlow, 'AbstractSharedFlow', VOID, SynchronizedObject);
  initMetadataForClass(SharedFlowImpl, 'SharedFlowImpl', VOID, AbstractSharedFlow, [FlowCollector], [1]);
  initMetadataForClass(AbstractSharedFlowSlot, 'AbstractSharedFlowSlot');
  initMetadataForClass(SharedFlowSlot, 'SharedFlowSlot', SharedFlowSlot, AbstractSharedFlowSlot);
  initMetadataForCoroutine($collectCOROUTINE$_2, CoroutineImpl);
  initMetadataForClass(StateFlowImpl, 'StateFlowImpl', VOID, AbstractSharedFlow, [FlowCollector], [1]);
  initMetadataForClass(StateFlowSlot, 'StateFlowSlot', StateFlowSlot, AbstractSharedFlowSlot, VOID, [0]);
  initMetadataForLambda(ChannelFlow$_get_collectToFun_$slambda_j53z2e, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(ChannelFlow$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(FlowCoroutine, 'FlowCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForLambda(scopedFlow$o$collect$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForCoroutine($collectCOROUTINE$_3, CoroutineImpl);
  initMetadataForClass(scopedFlow$$inlined$unsafeFlow$1, VOID, VOID, VOID, VOID, [1]);
  initMetadataForClass(SendingCollector, 'SendingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForClass(sam$kotlinx_coroutines_flow_FlowCollector$0, 'sam$kotlinx_coroutines_flow_FlowCollector$0', VOID, VOID, [FlowCollector, FunctionAdapter], [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda$slambda_1, CoroutineImpl, VOID, [0]);
  initMetadataForLambda(debounceInternal$slambda$slambda_3, CoroutineImpl, VOID, [1]);
  initMetadataForLambda(debounceInternal$slambda, CoroutineImpl, VOID, [2]);
  initMetadataForClass(ThrowingCollector, 'ThrowingCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForCoroutine($onSubscriptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SubscribedFlowCollector, 'SubscribedFlowCollector', VOID, VOID, [FlowCollector], [0, 1]);
  initMetadataForCoroutine($collectCOROUTINE$_4, CoroutineImpl);
  initMetadataForClass(ReadonlyStateFlow, 'ReadonlyStateFlow', VOID, VOID, VOID, [1]);
  initMetadataForClass(SegmentOrClosed, 'SegmentOrClosed');
  initMetadataForObject(ExceptionSuccessfullyProcessed, 'ExceptionSuccessfullyProcessed', VOID, Exception);
  initMetadataForClass(DispatchedContinuation, 'DispatchedContinuation', VOID, DispatchedTask, [Continuation]);
  initMetadataForClass(DispatchException, 'DispatchException', VOID, Exception);
  initMetadataForClass(UndeliveredElementException, 'UndeliveredElementException', VOID, RuntimeException);
  initMetadataForClass(ContextScope, 'ContextScope', VOID, VOID, [CoroutineScope]);
  initMetadataForClass(Symbol, 'Symbol');
  initMetadataForClass(sam$kotlinx_coroutines_Runnable$0, 'sam$kotlinx_coroutines_Runnable$0', VOID, VOID, [Runnable, FunctionAdapter]);
  initMetadataForClass(OnTimeout, 'OnTimeout');
  initMetadataForClass(SelectClause0Impl, 'SelectClause0Impl');
  initMetadataForInterface(SelectInstance, 'SelectInstance');
  initMetadataForClass(SelectClause1Impl, 'SelectClause1Impl');
  initMetadataForCoroutine($invokeBlockCOROUTINE$, CoroutineImpl);
  initMetadataForClass(ClauseData, 'ClauseData', VOID, VOID, VOID, [1]);
  initMetadataForCoroutine($doSelectCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($doSelectSuspendCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($completeCOROUTINE$, CoroutineImpl);
  initMetadataForCoroutine($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$, CoroutineImpl);
  initMetadataForClass(SelectImplementation, 'SelectImplementation', VOID, VOID, [CancelHandler, SelectInstance, Waiter], [0, 2]);
  initMetadataForClass(TrySelectDetailedResult, 'TrySelectDetailedResult', VOID, Enum);
  initMetadataForClass(CancellableContinuationWithOwner, 'CancellableContinuationWithOwner', VOID, VOID, [CancellableContinuation, Waiter]);
  initMetadataForClass(SemaphoreAndMutexImpl, 'SemaphoreAndMutexImpl', VOID, VOID, VOID, [0]);
  initMetadataForClass(MutexImpl, 'MutexImpl', VOID, SemaphoreAndMutexImpl, VOID, [1, 0]);
  initMetadataForClass(SemaphoreSegment, 'SemaphoreSegment', VOID, Segment);
  initMetadataForClass(SetTimeoutBasedDispatcher, 'SetTimeoutBasedDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  initMetadataForObject(NodeDispatcher, 'NodeDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(MessageQueue, 'MessageQueue', VOID, VOID, [KtMutableList]);
  initMetadataForClass(ScheduledMessageQueue, 'ScheduledMessageQueue', VOID, MessageQueue);
  initMetadataForClass(WindowMessageQueue, 'WindowMessageQueue', VOID, MessageQueue);
  initMetadataForClass(UndispatchedCoroutine, 'UndispatchedCoroutine', VOID, ScopeCoroutine, VOID, [0]);
  initMetadataForObject(Dispatchers, 'Dispatchers');
  initMetadataForClass(JsMainDispatcher, 'JsMainDispatcher', VOID, MainCoroutineDispatcher);
  initMetadataForClass(JobCancellationException, 'JobCancellationException', VOID, CancellationException);
  initMetadataForClass(ChildCancelledException, 'ChildCancelledException', VOID, CancellationException);
  initMetadataForClass(SafeCollector, 'SafeCollector', VOID, VOID, [FlowCollector], [1]);
  initMetadataForClass(WorkaroundAtomicReference, 'WorkaroundAtomicReference');
  initMetadataForClass(DiagnosticCoroutineContextException, 'DiagnosticCoroutineContextException', VOID, RuntimeException);
  initMetadataForClass(ListClosed, 'ListClosed', VOID, LockFreeLinkedListNode);
  initMetadataForClass(CommonThreadLocal, 'CommonThreadLocal', CommonThreadLocal);
  initMetadataForClass(UnconfinedEventLoop, 'UnconfinedEventLoop', UnconfinedEventLoop, EventLoop);
  initMetadataForObject(SetTimeoutDispatcher, 'SetTimeoutDispatcher', VOID, SetTimeoutBasedDispatcher, VOID, [1]);
  initMetadataForClass(ClearTimeout, 'ClearTimeout', VOID, VOID, [CancelHandler, DisposableHandle]);
  initMetadataForClass(WindowClearTimeout, 'WindowClearTimeout', VOID, ClearTimeout);
  initMetadataForClass(WindowDispatcher, 'WindowDispatcher', VOID, CoroutineDispatcher, [Delay], [1]);
  //endregion
  function AbstractCoroutine(parentContext, initParentJob, active) {
    JobSupport.call(this, active);
    if (initParentJob) {
      this.eu(parentContext.y8(Key_instance_3));
    }
    this.hu_1 = parentContext.ye(this);
  }
  protoOf(AbstractCoroutine).r8 = function () {
    return this.hu_1;
  };
  protoOf(AbstractCoroutine).iu = function () {
    return this.hu_1;
  };
  protoOf(AbstractCoroutine).ju = function () {
    return protoOf(JobSupport).ju.call(this);
  };
  protoOf(AbstractCoroutine).ku = function (value) {
  };
  protoOf(AbstractCoroutine).lu = function (cause, handled) {
  };
  protoOf(AbstractCoroutine).mu = function () {
    return get_classSimpleName(this) + ' was cancelled';
  };
  protoOf(AbstractCoroutine).nu = function (state) {
    if (state instanceof CompletedExceptionally) {
      this.lu(state.ou_1, state.qu());
    } else {
      this.ku(state);
    }
  };
  protoOf(AbstractCoroutine).w8 = function (result) {
    var state = this.ru(toState_0(result));
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return Unit_instance;
    this.su(state);
  };
  protoOf(AbstractCoroutine).su = function (state) {
    return this.tu(state);
  };
  protoOf(AbstractCoroutine).uu = function (exception) {
    handleCoroutineException(this.hu_1, exception);
  };
  protoOf(AbstractCoroutine).vu = function () {
    var tmp0_elvis_lhs = get_coroutineName(this.hu_1);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return protoOf(JobSupport).vu.call(this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var coroutineName = tmp;
    return '"' + coroutineName + '":' + protoOf(JobSupport).vu.call(this);
  };
  protoOf(AbstractCoroutine).wu = function (start, receiver, block) {
    start.zu(block, receiver, this);
  };
  function launch(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.iw() ? new LazyStandaloneCoroutine(newContext, block) : new StandaloneCoroutine(newContext, true);
    coroutine.wu(start, coroutine, block);
    return coroutine;
  }
  function async(_this__u8e3s4, context, start, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = start.iw() ? new LazyDeferredCoroutine(newContext, block) : new DeferredCoroutine(newContext, true);
    coroutine.wu(start, coroutine, block);
    return coroutine;
  }
  function withContext(context, block, $completion) {
    var tmp$ret$0;
    $l$block_0: {
      var oldContext = $completion.r8();
      var newContext = newCoroutineContext_0(oldContext, context);
      ensureActive(newContext);
      if (newContext === oldContext) {
        var coroutine = new ScopeCoroutine(newContext, $completion);
        tmp$ret$0 = startUndispatchedOrReturn(coroutine, coroutine, block);
        break $l$block_0;
      }
      if (equals(newContext.y8(Key_instance), oldContext.y8(Key_instance))) {
        var coroutine_0 = new UndispatchedCoroutine(newContext, $completion);
        // Inline function 'kotlinx.coroutines.withCoroutineContext' call
        coroutine_0.hu_1;
        tmp$ret$0 = startUndispatchedOrReturn(coroutine_0, coroutine_0, block);
        break $l$block_0;
      }
      var coroutine_1 = new DispatchedCoroutine(newContext, $completion);
      startCoroutineCancellable(block, coroutine_1, coroutine_1);
      tmp$ret$0 = coroutine_1.ow();
    }
    return tmp$ret$0;
  }
  function StandaloneCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(StandaloneCoroutine).fw = function (exception) {
    handleCoroutineException(this.hu_1, exception);
    return true;
  };
  function LazyStandaloneCoroutine(parentContext, block) {
    StandaloneCoroutine.call(this, parentContext, false);
    this.vw_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyStandaloneCoroutine).hv = function () {
    startCoroutineCancellable_0(this.vw_1, this);
  };
  function $awaitCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.ex_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.ex_1.hw(this);
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
  function DeferredCoroutine(parentContext, active) {
    AbstractCoroutine.call(this, parentContext, true, active);
  }
  protoOf(DeferredCoroutine).ix = function ($completion) {
    var tmp = new $awaitCOROUTINE$(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  function LazyDeferredCoroutine(parentContext, block) {
    DeferredCoroutine.call(this, parentContext, false);
    this.mx_1 = createCoroutineUnintercepted(block, this, this);
  }
  protoOf(LazyDeferredCoroutine).hv = function () {
    startCoroutineCancellable_0(this.mx_1, this);
  };
  function trySuspend($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.nw_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.nw_1.atomicfu$compareAndSet(0, 1))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.nw_1;
    while (true) {
      switch (this_0.kotlinx$atomicfu$value) {
        case 0:
          if ($this.nw_1.atomicfu$compareAndSet(0, 2))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function DispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
    this.nw_1 = atomic$int$1(0);
  }
  protoOf(DispatchedCoroutine).tu = function (state) {
    this.su(state);
  };
  protoOf(DispatchedCoroutine).su = function (state) {
    if (tryResume(this))
      return Unit_instance;
    resumeCancellableWithInternal(intercepted(this.qx_1), recoverResult(state, this.qx_1));
  };
  protoOf(DispatchedCoroutine).ow = function () {
    if (trySuspend(this))
      return get_COROUTINE_SUSPENDED();
    var state = unboxState(this.dv());
    if (state instanceof CompletedExceptionally)
      throw state.ou_1;
    return state;
  };
  function CancellableContinuation() {
  }
  function invokeOnCancellation(_this__u8e3s4, handler) {
    var tmp;
    if (_this__u8e3s4 instanceof CancellableContinuationImpl) {
      _this__u8e3s4.gy(handler);
      tmp = Unit_instance;
    } else {
      throw UnsupportedOperationException_init_$Create$('third-party implementation of CancellableContinuation is not supported');
    }
    return tmp;
  }
  function disposeOnCancellation(_this__u8e3s4, handle) {
    return invokeOnCancellation(_this__u8e3s4, new DisposeOnCancel(handle));
  }
  function DisposeOnCancel(handle) {
    this.hy_1 = handle;
  }
  protoOf(DisposeOnCancel).iy = function (cause) {
    return this.hy_1.jy();
  };
  protoOf(DisposeOnCancel).toString = function () {
    return 'DisposeOnCancel[' + toString(this.hy_1) + ']';
  };
  function getOrCreateCancellableContinuation(delegate) {
    if (!(delegate instanceof DispatchedContinuation)) {
      return new CancellableContinuationImpl(delegate, 1);
    }
    var tmp0_safe_receiver = delegate.qy();
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.takeIf' call
      var tmp_0;
      if (tmp0_safe_receiver.ry()) {
        tmp_0 = tmp0_safe_receiver;
      } else {
        tmp_0 = null;
      }
      tmp = tmp_0;
    }
    var tmp1_elvis_lhs = tmp;
    var tmp_1;
    if (tmp1_elvis_lhs == null) {
      return new CancellableContinuationImpl(delegate, 2);
    } else {
      tmp_1 = tmp1_elvis_lhs;
    }
    return tmp_1;
  }
  function get_RESUME_TOKEN() {
    _init_properties_CancellableContinuationImpl_kt__6rrtdd();
    return RESUME_TOKEN;
  }
  var RESUME_TOKEN;
  function _get_parentHandle__f8dcex($this) {
    return $this.fy_1.kotlinx$atomicfu$value;
  }
  function _get_stateDebugRepresentation__bf18u4($this) {
    var tmp0_subject = $this.dv();
    var tmp;
    if (!(tmp0_subject == null) ? isInterface(tmp0_subject, NotCompleted) : false) {
      tmp = 'Active';
    } else {
      if (tmp0_subject instanceof CancelledContinuation) {
        tmp = 'Cancelled';
      } else {
        tmp = 'Completed';
      }
    }
    return tmp;
  }
  function isReusable($this) {
    var tmp;
    if (get_isReusableMode($this.ty_1)) {
      var tmp_0 = $this.by_1;
      tmp = (tmp_0 instanceof DispatchedContinuation ? tmp_0 : THROW_CCE()).sy();
    } else {
      tmp = false;
    }
    return tmp;
  }
  function cancelLater($this, cause) {
    if (!isReusable($this))
      return false;
    var tmp = $this.by_1;
    var dispatched = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
    return dispatched.uy(cause);
  }
  function callSegmentOnCancellation($this, segment, cause) {
    // Inline function 'kotlinx.coroutines.index' call
    var index = $this.dy_1.kotlinx$atomicfu$value & 536870911;
    // Inline function 'kotlin.check' call
    if (!!(index === 536870911)) {
      var message = 'The index for Segment.onCancellation(..) is broken';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      segment.zy(index, cause, $this.r8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException($this.r8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + $this.toString(), ex));
      } else {
        throw $p;
      }
    }
  }
  function trySuspend_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.dy_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (1 << 29) + (cur & 536870911) | 0;
          if ($this.dy_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 2:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already suspended';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function tryResume_0($this) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.dy_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.decision' call
      switch (cur >> 29) {
        case 0:
          // Inline function 'kotlinx.coroutines.index' call

          // Inline function 'kotlinx.coroutines.decisionAndIndex' call

          var tmp$ret$4 = (2 << 29) + (cur & 536870911) | 0;
          if ($this.dy_1.atomicfu$compareAndSet(cur, tmp$ret$4))
            return true;
          break;
        case 1:
          return false;
        default:
          // Inline function 'kotlin.error' call

          var message = 'Already resumed';
          throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function installParentHandle($this) {
    var tmp0_elvis_lhs = $this.r8().y8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var parent = tmp;
    var handle = invokeOnCompletion(parent, VOID, new ChildContinuation($this));
    $this.fy_1.atomicfu$compareAndSet(null, handle);
    return handle;
  }
  function invokeOnCancellationImpl($this, handler) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ey_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state instanceof Active) {
        if ($this.ey_1.atomicfu$compareAndSet(state, handler))
          return Unit_instance;
      } else {
        var tmp;
        if (!(state == null) ? isInterface(state, CancelHandler) : false) {
          tmp = true;
        } else {
          tmp = state instanceof Segment;
        }
        if (tmp) {
          multipleHandlersError($this, handler, state);
        } else {
          if (state instanceof CompletedExceptionally) {
            if (!state.iz()) {
              multipleHandlersError($this, handler, state);
            }
            if (state instanceof CancelledContinuation) {
              var tmp1_safe_receiver = state instanceof CompletedExceptionally ? state : null;
              var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ou_1;
              if (isInterface(handler, CancelHandler)) {
                $this.fz(handler, cause);
              } else {
                var segment = handler instanceof Segment ? handler : THROW_CCE();
                callSegmentOnCancellation($this, segment, cause);
              }
            }
            return Unit_instance;
          } else {
            if (state instanceof CompletedContinuation) {
              if (!(state.bz_1 == null)) {
                multipleHandlersError($this, handler, state);
              }
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              if (state.gz()) {
                $this.fz(handler, state.ez_1);
                return Unit_instance;
              }
              var update = state.hz(VOID, handler);
              if ($this.ey_1.atomicfu$compareAndSet(state, update))
                return Unit_instance;
            } else {
              if (handler instanceof Segment)
                return Unit_instance;
              if (!isInterface(handler, CancelHandler))
                THROW_CCE();
              var update_0 = new CompletedContinuation(state, handler);
              if ($this.ey_1.atomicfu$compareAndSet(state, update_0))
                return Unit_instance;
            }
          }
        }
      }
    }
  }
  function multipleHandlersError($this, handler, state) {
    // Inline function 'kotlin.error' call
    var message = "It's prohibited to register multiple handlers, tried to register " + toString(handler) + ', already has ' + toString_0(state);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function dispatchResume($this, mode) {
    if (tryResume_0($this))
      return Unit_instance;
    dispatch($this, mode);
  }
  function resumedState($this, state, proposedUpdate, resumeMode, onCancellation, idempotent) {
    var tmp;
    if (proposedUpdate instanceof CompletedExceptionally) {
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlinx.coroutines.assert' call
      tmp = proposedUpdate;
    } else {
      if (!get_isCancellableMode(resumeMode) && idempotent == null) {
        tmp = proposedUpdate;
      } else {
        var tmp_0;
        var tmp_1;
        if (!(onCancellation == null)) {
          tmp_1 = true;
        } else {
          tmp_1 = isInterface(state, CancelHandler);
        }
        if (tmp_1) {
          tmp_0 = true;
        } else {
          tmp_0 = !(idempotent == null);
        }
        if (tmp_0) {
          tmp = new CompletedContinuation(proposedUpdate, isInterface(state, CancelHandler) ? state : null, onCancellation, idempotent);
        } else {
          tmp = proposedUpdate;
        }
      }
    }
    return tmp;
  }
  function tryResumeImpl($this, proposedUpdate, idempotent, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.ey_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState($this, tmp0, proposedUpdate, $this.ty_1, onCancellation, idempotent);
          if (!$this.ey_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable($this);
          return get_RESUME_TOKEN();
        } else {
          if (tmp0 instanceof CompletedContinuation) {
            var tmp;
            if (!(idempotent == null) && tmp0.dz_1 === idempotent) {
              // Inline function 'kotlinx.coroutines.assert' call
              tmp = get_RESUME_TOKEN();
            } else {
              tmp = null;
            }
            return tmp;
          } else {
            return null;
          }
        }
      }
    }
  }
  function alreadyResumedError($this, proposedUpdate) {
    // Inline function 'kotlin.error' call
    var message = 'Already resumed, but proposed with update ' + toString_0(proposedUpdate);
    throw IllegalStateException_init_$Create$(toString(message));
  }
  function detachChildIfNonReusable($this) {
    if (!isReusable($this)) {
      $this.jz();
    }
  }
  function CancellableContinuationImpl$resume$lambda($onCancellation) {
    return function (cause, _unused_var__etf5q3, _unused_var__etf5q3_0) {
      $onCancellation(cause);
      return Unit_instance;
    };
  }
  function CancellableContinuationImpl(delegate, resumeMode) {
    DispatchedTask.call(this, resumeMode);
    this.by_1 = delegate;
    // Inline function 'kotlinx.coroutines.assert' call
    this.cy_1 = this.by_1.r8();
    var tmp = this;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    var tmp$ret$1 = (0 << 29) + 536870911 | 0;
    tmp.dy_1 = atomic$int$1(tmp$ret$1);
    this.ey_1 = atomic$ref$1(Active_instance);
    this.fy_1 = atomic$ref$1(null);
  }
  protoOf(CancellableContinuationImpl).kz = function () {
    return this.by_1;
  };
  protoOf(CancellableContinuationImpl).r8 = function () {
    return this.cy_1;
  };
  protoOf(CancellableContinuationImpl).dv = function () {
    return this.ey_1.kotlinx$atomicfu$value;
  };
  protoOf(CancellableContinuationImpl).ev = function () {
    var tmp = this.dv();
    return !(!(tmp == null) ? isInterface(tmp, NotCompleted) : false);
  };
  protoOf(CancellableContinuationImpl).lz = function () {
    var tmp0_elvis_lhs = installParentHandle(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    if (this.ev()) {
      handle.jy();
      this.fy_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
    }
  };
  protoOf(CancellableContinuationImpl).ry = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var state = this.ey_1.kotlinx$atomicfu$value;
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = !(state.dz_1 == null);
    } else {
      tmp = false;
    }
    if (tmp) {
      this.jz();
      return false;
    }
    var tmp_0 = this.dy_1;
    // Inline function 'kotlinx.coroutines.decisionAndIndex' call
    tmp_0.kotlinx$atomicfu$value = (0 << 29) + 536870911 | 0;
    this.ey_1.kotlinx$atomicfu$value = Active_instance;
    return true;
  };
  protoOf(CancellableContinuationImpl).mz = function () {
    return this.dv();
  };
  protoOf(CancellableContinuationImpl).nz = function (takenState, cause) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ey_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (!(state == null) ? isInterface(state, NotCompleted) : false) {
        // Inline function 'kotlin.error' call
        var message = 'Not completed';
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        if (state instanceof CompletedExceptionally)
          return Unit_instance;
        else {
          if (state instanceof CompletedContinuation) {
            // Inline function 'kotlin.check' call
            if (!!state.gz()) {
              var message_0 = 'Must be called at most once';
              throw IllegalStateException_init_$Create$(toString(message_0));
            }
            var update = state.hz(VOID, VOID, VOID, VOID, cause);
            if (this.ey_1.atomicfu$compareAndSet(state, update)) {
              state.oz(this, cause);
              return Unit_instance;
            }
          } else {
            if (this.ey_1.atomicfu$compareAndSet(state, new CompletedContinuation(state, VOID, VOID, VOID, cause))) {
              return Unit_instance;
            }
          }
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(CancellableContinuationImpl).ux = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ey_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false))
          return false;
        var tmp;
        if (isInterface(tmp0, CancelHandler)) {
          tmp = true;
        } else {
          tmp = tmp0 instanceof Segment;
        }
        var update = new CancelledContinuation(this, cause, tmp);
        if (!this.ey_1.atomicfu$compareAndSet(tmp0, update)) {
          break $l$block;
        }
        if (isInterface(tmp0, CancelHandler)) {
          this.fz(tmp0, cause);
        } else {
          if (tmp0 instanceof Segment) {
            callSegmentOnCancellation(this, tmp0, cause);
          }
        }
        detachChildIfNonReusable(this);
        dispatchResume(this, this.ty_1);
        return true;
      }
    }
  };
  protoOf(CancellableContinuationImpl).pz = function (cause) {
    if (cancelLater(this, cause))
      return Unit_instance;
    this.ux(cause);
    detachChildIfNonReusable(this);
  };
  protoOf(CancellableContinuationImpl).fz = function (handler, cause) {
    // Inline function 'kotlinx.coroutines.CancellableContinuationImpl.callCancelHandlerSafely' call
    try {
      handler.iy(cause);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.r8(), new CompletionHandlerException('Exception in invokeOnCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  };
  protoOf(CancellableContinuationImpl).qz = function (onCancellation, cause, value) {
    try {
      onCancellation(cause, value, this.r8());
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        handleCoroutineException(this.r8(), new CompletionHandlerException('Exception in resume onCancellation handler for ' + this.toString(), ex));
      } else {
        throw $p;
      }
    }
  };
  protoOf(CancellableContinuationImpl).rz = function (parent) {
    return parent.iv();
  };
  protoOf(CancellableContinuationImpl).ow = function () {
    var isReusable_0 = isReusable(this);
    if (trySuspend_0(this)) {
      if (_get_parentHandle__f8dcex(this) == null) {
        installParentHandle(this);
      }
      if (isReusable_0) {
        this.sz();
      }
      return get_COROUTINE_SUSPENDED();
    }
    if (isReusable_0) {
      this.sz();
    }
    var state = this.dv();
    if (state instanceof CompletedExceptionally)
      throw recoverStackTrace(state.ou_1, this);
    if (get_isCancellableMode(this.ty_1)) {
      var job = this.r8().y8(Key_instance_3);
      if (!(job == null) && !job.ju()) {
        var cause = job.iv();
        this.nz(state, cause);
        throw recoverStackTrace(cause, this);
      }
    }
    return this.tz(state);
  };
  protoOf(CancellableContinuationImpl).sz = function () {
    var tmp = this.by_1;
    var tmp0_safe_receiver = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.uz(this);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var cancellationCause = tmp_0;
    this.jz();
    this.ux(cancellationCause);
  };
  protoOf(CancellableContinuationImpl).w8 = function (result) {
    return this.vz(toState(result, this), this.ty_1);
  };
  protoOf(CancellableContinuationImpl).yx = function (value, onCancellation) {
    var tmp = this.ty_1;
    var tmp_0;
    if (onCancellation == null) {
      tmp_0 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_0 = CancellableContinuationImpl$resume$lambda(onCancellation);
    }
    return this.wz(value, tmp, tmp_0);
  };
  protoOf(CancellableContinuationImpl).zx = function (value, onCancellation) {
    return this.wz(value, this.ty_1, onCancellation);
  };
  protoOf(CancellableContinuationImpl).xz = function (segment, index) {
    var tmp0 = this.dy_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.index' call
        // Inline function 'kotlin.check' call
        if (!((cur & 536870911) === 536870911)) {
          var message = 'invokeOnCancellation should be called at most once';
          throw IllegalStateException_init_$Create$(toString(message));
        }
        // Inline function 'kotlinx.coroutines.decision' call
        // Inline function 'kotlinx.coroutines.decisionAndIndex' call
        var upd = (cur >> 29 << 29) + index | 0;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    invokeOnCancellationImpl(this, segment);
  };
  protoOf(CancellableContinuationImpl).wx = function (handler) {
    return invokeOnCancellation(this, new UserSupplied(handler));
  };
  protoOf(CancellableContinuationImpl).gy = function (handler) {
    return invokeOnCancellationImpl(this, handler);
  };
  protoOf(CancellableContinuationImpl).wz = function (proposedUpdate, resumeMode, onCancellation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.ey_1;
    while (true) {
      var tmp0 = this_0.kotlinx$atomicfu$value;
      $l$block: {
        if (!(tmp0 == null) ? isInterface(tmp0, NotCompleted) : false) {
          var update = resumedState(this, tmp0, proposedUpdate, resumeMode, onCancellation, null);
          if (!this.ey_1.atomicfu$compareAndSet(tmp0, update)) {
            break $l$block;
          }
          detachChildIfNonReusable(this);
          dispatchResume(this, resumeMode);
          return Unit_instance;
        } else {
          if (tmp0 instanceof CancelledContinuation) {
            if (tmp0.b10()) {
              if (onCancellation == null)
                null;
              else {
                // Inline function 'kotlin.let' call
                this.qz(onCancellation, tmp0.ou_1, proposedUpdate);
              }
              return Unit_instance;
            }
          }
        }
        alreadyResumedError(this, proposedUpdate);
      }
    }
  };
  protoOf(CancellableContinuationImpl).vz = function (proposedUpdate, resumeMode, onCancellation, $super) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    var tmp;
    if ($super === VOID) {
      this.wz(proposedUpdate, resumeMode, onCancellation);
      tmp = Unit_instance;
    } else {
      tmp = $super.wz.call(this, proposedUpdate, resumeMode, onCancellation);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).jz = function () {
    var tmp0_elvis_lhs = _get_parentHandle__f8dcex(this);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var handle = tmp;
    handle.jy();
    this.fy_1.kotlinx$atomicfu$value = NonDisposableHandle_instance;
  };
  protoOf(CancellableContinuationImpl).sx = function (value, idempotent, onCancellation) {
    return tryResumeImpl(this, value, idempotent, onCancellation);
  };
  protoOf(CancellableContinuationImpl).tx = function (token) {
    // Inline function 'kotlinx.coroutines.assert' call
    dispatchResume(this, this.ty_1);
  };
  protoOf(CancellableContinuationImpl).xx = function (_this__u8e3s4, value) {
    var tmp = this.by_1;
    var dc = tmp instanceof DispatchedContinuation ? tmp : null;
    var tmp_0;
    if ((dc == null ? null : dc.ly_1) === _this__u8e3s4) {
      tmp_0 = 4;
    } else {
      tmp_0 = this.ty_1;
    }
    this.vz(value, tmp_0);
  };
  protoOf(CancellableContinuationImpl).tz = function (state) {
    var tmp;
    if (state instanceof CompletedContinuation) {
      tmp = state.az_1;
    } else {
      tmp = state;
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).c10 = function (state) {
    var tmp0_safe_receiver = protoOf(DispatchedTask).c10.call(this, state);
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp = recoverStackTrace(tmp0_safe_receiver, this.by_1);
    }
    return tmp;
  };
  protoOf(CancellableContinuationImpl).toString = function () {
    return this.d10() + '(' + toDebugString(this.by_1) + '){' + _get_stateDebugRepresentation__bf18u4(this) + '}@' + get_hexAddress(this);
  };
  protoOf(CancellableContinuationImpl).d10 = function () {
    return 'CancellableContinuation';
  };
  function Active() {
  }
  protoOf(Active).toString = function () {
    return 'Active';
  };
  var Active_instance;
  function Active_getInstance() {
    return Active_instance;
  }
  function NotCompleted() {
  }
  function CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    cancelHandler = cancelHandler === VOID ? null : cancelHandler;
    onCancellation = onCancellation === VOID ? null : onCancellation;
    idempotentResume = idempotentResume === VOID ? null : idempotentResume;
    cancelCause = cancelCause === VOID ? null : cancelCause;
    this.az_1 = result;
    this.bz_1 = cancelHandler;
    this.cz_1 = onCancellation;
    this.dz_1 = idempotentResume;
    this.ez_1 = cancelCause;
  }
  protoOf(CompletedContinuation).gz = function () {
    return !(this.ez_1 == null);
  };
  protoOf(CompletedContinuation).oz = function (cont, cause) {
    var tmp0_safe_receiver = this.bz_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.fz(tmp0_safe_receiver, cause);
    }
    var tmp1_safe_receiver = this.cz_1;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      cont.qz(tmp1_safe_receiver, cause, this.az_1);
    }
  };
  protoOf(CompletedContinuation).g10 = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause) {
    return new CompletedContinuation(result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).hz = function (result, cancelHandler, onCancellation, idempotentResume, cancelCause, $super) {
    result = result === VOID ? this.az_1 : result;
    cancelHandler = cancelHandler === VOID ? this.bz_1 : cancelHandler;
    onCancellation = onCancellation === VOID ? this.cz_1 : onCancellation;
    idempotentResume = idempotentResume === VOID ? this.dz_1 : idempotentResume;
    cancelCause = cancelCause === VOID ? this.ez_1 : cancelCause;
    return $super === VOID ? this.g10(result, cancelHandler, onCancellation, idempotentResume, cancelCause) : $super.g10.call(this, result, cancelHandler, onCancellation, idempotentResume, cancelCause);
  };
  protoOf(CompletedContinuation).toString = function () {
    return 'CompletedContinuation(result=' + toString_0(this.az_1) + ', cancelHandler=' + toString_0(this.bz_1) + ', onCancellation=' + toString_0(this.cz_1) + ', idempotentResume=' + toString_0(this.dz_1) + ', cancelCause=' + toString_0(this.ez_1) + ')';
  };
  protoOf(CompletedContinuation).hashCode = function () {
    var result = this.az_1 == null ? 0 : hashCode(this.az_1);
    result = imul(result, 31) + (this.bz_1 == null ? 0 : hashCode(this.bz_1)) | 0;
    result = imul(result, 31) + (this.cz_1 == null ? 0 : hashCode(this.cz_1)) | 0;
    result = imul(result, 31) + (this.dz_1 == null ? 0 : hashCode(this.dz_1)) | 0;
    result = imul(result, 31) + (this.ez_1 == null ? 0 : hashCode(this.ez_1)) | 0;
    return result;
  };
  protoOf(CompletedContinuation).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof CompletedContinuation))
      return false;
    if (!equals(this.az_1, other.az_1))
      return false;
    if (!equals(this.bz_1, other.bz_1))
      return false;
    if (!equals(this.cz_1, other.cz_1))
      return false;
    if (!equals(this.dz_1, other.dz_1))
      return false;
    if (!equals(this.ez_1, other.ez_1))
      return false;
    return true;
  };
  function UserSupplied(handler) {
    this.h10_1 = handler;
  }
  protoOf(UserSupplied).iy = function (cause) {
    this.h10_1(cause);
  };
  protoOf(UserSupplied).toString = function () {
    return 'CancelHandler.UserSupplied[' + get_classSimpleName(this.h10_1) + '@' + get_hexAddress(this) + ']';
  };
  function CancelHandler() {
  }
  function ChildContinuation(child) {
    JobNode.call(this);
    this.m10_1 = child;
  }
  protoOf(ChildContinuation).n10 = function () {
    return true;
  };
  protoOf(ChildContinuation).iy = function (cause) {
    this.m10_1.pz(this.m10_1.rz(this.s10()));
  };
  var properties_initialized_CancellableContinuationImpl_kt_xtzb03;
  function _init_properties_CancellableContinuationImpl_kt__6rrtdd() {
    if (!properties_initialized_CancellableContinuationImpl_kt_xtzb03) {
      properties_initialized_CancellableContinuationImpl_kt_xtzb03 = true;
      RESUME_TOKEN = new Symbol('RESUME_TOKEN');
    }
  }
  function CompletableDeferred(parent) {
    parent = parent === VOID ? null : parent;
    return new CompletableDeferredImpl(parent);
  }
  function $awaitCOROUTINE$_0(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i11_1 = _this__u8e3s4;
  }
  protoOf($awaitCOROUTINE$_0).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.i11_1.hw(this);
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
  function CompletableDeferredImpl(parent) {
    JobSupport.call(this, true);
    this.eu(parent);
  }
  protoOf(CompletableDeferredImpl).qv = function () {
    return true;
  };
  protoOf(CompletableDeferredImpl).ix = function ($completion) {
    var tmp = new $awaitCOROUTINE$_0(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(CompletableDeferredImpl).l11 = function (value) {
    return this.zv(value);
  };
  function recoverResult(state, uCont) {
    var tmp;
    if (state instanceof CompletedExceptionally) {
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(state.ou_1, uCont);
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      tmp = _Result___init__impl__xyqfz8(state);
    }
    return tmp;
  }
  function CompletedExceptionally(cause, handled) {
    handled = handled === VOID ? false : handled;
    this.ou_1 = cause;
    this.pu_1 = atomic$boolean$1(handled);
  }
  protoOf(CompletedExceptionally).qu = function () {
    return this.pu_1.kotlinx$atomicfu$value;
  };
  protoOf(CompletedExceptionally).iz = function () {
    return this.pu_1.atomicfu$compareAndSet(false, true);
  };
  protoOf(CompletedExceptionally).toString = function () {
    return get_classSimpleName(this) + '[' + this.ou_1.toString() + ']';
  };
  function CancelledContinuation(continuation, cause, handled) {
    CompletedExceptionally.call(this, cause == null ? CancellationException_init_$Create$('Continuation ' + toString(continuation) + ' was cancelled normally') : cause, handled);
    this.a10_1 = atomic$boolean$1(false);
  }
  protoOf(CancelledContinuation).b10 = function () {
    return this.a10_1.atomicfu$compareAndSet(false, true);
  };
  function toState(_this__u8e3s4, caller) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(recoverStackTrace(exception, caller));
    }
    return tmp;
  }
  function toState_0(_this__u8e3s4) {
    // Inline function 'kotlin.getOrElse' call
    var exception = Result__exceptionOrNull_impl_p6xea9(_this__u8e3s4);
    var tmp;
    if (exception == null) {
      tmp = _Result___get_value__impl__bjfvqg(_this__u8e3s4);
    } else {
      tmp = new CompletedExceptionally(exception);
    }
    return tmp;
  }
  function CoroutineDispatcher$Key$_init_$lambda_akl8b5(it) {
    return it instanceof CoroutineDispatcher ? it : null;
  }
  function Key() {
    Key_instance_0 = this;
    var tmp = Key_instance;
    AbstractCoroutineContextKey.call(this, tmp, CoroutineDispatcher$Key$_init_$lambda_akl8b5);
  }
  var Key_instance_0;
  function Key_getInstance() {
    if (Key_instance_0 == null)
      new Key();
    return Key_instance_0;
  }
  function CoroutineDispatcher() {
    Key_getInstance();
    AbstractCoroutineContextElement.call(this, Key_instance);
  }
  protoOf(CoroutineDispatcher).n11 = function (context) {
    return true;
  };
  protoOf(CoroutineDispatcher).p11 = function (context, block) {
    return safeDispatch(this, context, block);
  };
  protoOf(CoroutineDispatcher).z8 = function (continuation) {
    return new DispatchedContinuation(this, continuation);
  };
  protoOf(CoroutineDispatcher).a9 = function (continuation) {
    var dispatched = continuation instanceof DispatchedContinuation ? continuation : THROW_CCE();
    dispatched.q11();
  };
  protoOf(CoroutineDispatcher).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this);
  };
  function Key_0() {
  }
  var Key_instance_1;
  function Key_getInstance_0() {
    return Key_instance_1;
  }
  function handleCoroutineException(context, exception) {
    var tmp;
    if (exception instanceof DispatchException) {
      tmp = exception.r11_1;
    } else {
      tmp = exception;
    }
    var reportException = tmp;
    try {
      var tmp0_safe_receiver = context.y8(Key_instance_1);
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        tmp0_safe_receiver.s11(context, reportException);
        return Unit_instance;
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var t = $p;
        handleUncaughtCoroutineException(context, handlerException(reportException, t));
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    handleUncaughtCoroutineException(context, reportException);
  }
  function handlerException(originalException, thrownException) {
    if (originalException === thrownException)
      return originalException;
    // Inline function 'kotlin.apply' call
    var this_0 = RuntimeException_init_$Create$('Exception while trying to handle coroutine exception', thrownException);
    addSuppressed(this_0, originalException);
    return this_0;
  }
  function Key_1() {
  }
  var Key_instance_2;
  function Key_getInstance_1() {
    return Key_instance_2;
  }
  function CoroutineScope() {
  }
  function coroutineScope(block, $completion) {
    var coroutine = new ScopeCoroutine($completion.r8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function get_isActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.iu().y8(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ju();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function cancel(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_elvis_lhs = _this__u8e3s4.iu().y8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Scope cannot be cancelled because it does not have a job: ' + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var job = tmp;
    job.rv(cause);
  }
  function CoroutineScope_0(context) {
    return new ContextScope(!(context.y8(Key_instance_3) == null) ? context : context.ye(Job_0()));
  }
  function MainScope() {
    return new ContextScope(SupervisorJob().ye(Dispatchers_getInstance().x11()));
  }
  function GlobalScope() {
  }
  protoOf(GlobalScope).iu = function () {
    return EmptyCoroutineContext_getInstance();
  };
  var GlobalScope_instance;
  function GlobalScope_getInstance() {
    return GlobalScope_instance;
  }
  var CoroutineStart_DEFAULT_instance;
  var CoroutineStart_LAZY_instance;
  var CoroutineStart_ATOMIC_instance;
  var CoroutineStart_UNDISPATCHED_instance;
  var CoroutineStart_entriesInitialized;
  function CoroutineStart_initEntries() {
    if (CoroutineStart_entriesInitialized)
      return Unit_instance;
    CoroutineStart_entriesInitialized = true;
    CoroutineStart_DEFAULT_instance = new CoroutineStart('DEFAULT', 0);
    CoroutineStart_LAZY_instance = new CoroutineStart('LAZY', 1);
    CoroutineStart_ATOMIC_instance = new CoroutineStart('ATOMIC', 2);
    CoroutineStart_UNDISPATCHED_instance = new CoroutineStart('UNDISPATCHED', 3);
  }
  function CoroutineStart(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  protoOf(CoroutineStart).zu = function (block, receiver, completion) {
    var tmp;
    switch (this.i2_1) {
      case 0:
        startCoroutineCancellable(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 2:
        startCoroutine(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 3:
        startCoroutineUndispatched(block, receiver, completion);
        tmp = Unit_instance;
        break;
      case 1:
        tmp = Unit_instance;
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  };
  protoOf(CoroutineStart).iw = function () {
    return this === CoroutineStart_LAZY_getInstance();
  };
  function CoroutineStart_DEFAULT_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_DEFAULT_instance;
  }
  function CoroutineStart_LAZY_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_LAZY_instance;
  }
  function CoroutineStart_ATOMIC_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_ATOMIC_instance;
  }
  function CoroutineStart_UNDISPATCHED_getInstance() {
    CoroutineStart_initEntries();
    return CoroutineStart_UNDISPATCHED_instance;
  }
  function delay(timeMillis, $completion) {
    if (compare(timeMillis, new Long(0, 0)) <= 0)
      return Unit_instance;
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    if (compare(timeMillis, new Long(-1, 2147483647)) < 0) {
      get_delay(cancellable.r8()).y11(timeMillis, cancellable);
    }
    return cancellable.ow();
  }
  function Delay() {
  }
  function get_delay(_this__u8e3s4) {
    var tmp = _this__u8e3s4.y8(Key_instance);
    var tmp0_elvis_lhs = (!(tmp == null) ? isInterface(tmp, Delay) : false) ? tmp : null;
    return tmp0_elvis_lhs == null ? get_DefaultDelay() : tmp0_elvis_lhs;
  }
  function DelayWithTimeoutDiagnostics() {
  }
  function toDelayMillis(_this__u8e3s4) {
    var tmp;
    switch (Duration__isPositive_impl_tvkkt2(_this__u8e3s4)) {
      case true:
        Companion_getInstance();
        // Inline function 'kotlin.time.Companion.nanoseconds' call

        var this_0 = new Long(999999, 0);
        var tmp$ret$0 = toDuration(this_0, DurationUnit_NANOSECONDS_getInstance());
        tmp = _Duration___get_inWholeMilliseconds__impl__msfiry(Duration__plus_impl_yu9v8f(_this__u8e3s4, tmp$ret$0));
        break;
      case false:
        tmp = new Long(0, 0);
        break;
      default:
        noWhenBranchMatchedException();
        break;
    }
    return tmp;
  }
  function delta($this, unconfined) {
    return unconfined ? new Long(0, 1) : new Long(1, 0);
  }
  function EventLoop() {
    CoroutineDispatcher.call(this);
    this.c12_1 = new Long(0, 0);
    this.d12_1 = false;
    this.e12_1 = null;
  }
  protoOf(EventLoop).f12 = function () {
    var tmp0_elvis_lhs = this.e12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    var tmp1_elvis_lhs = queue.fd();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var task = tmp_0;
    task.e10();
    return true;
  };
  protoOf(EventLoop).g12 = function (task) {
    var tmp0_elvis_lhs = this.e12_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = ArrayDeque_init_$Create$();
      this.e12_1 = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var queue = tmp;
    queue.dd(task);
  };
  protoOf(EventLoop).h12 = function () {
    return compare(this.c12_1, delta(this, true)) >= 0;
  };
  protoOf(EventLoop).i12 = function () {
    var tmp0_safe_receiver = this.e12_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.n();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  };
  protoOf(EventLoop).j12 = function (unconfined) {
    this.c12_1 = add(this.c12_1, delta(this, unconfined));
    if (!unconfined)
      this.d12_1 = true;
  };
  protoOf(EventLoop).k12 = function (unconfined) {
    this.c12_1 = subtract(this.c12_1, delta(this, unconfined));
    if (compare(this.c12_1, new Long(0, 0)) > 0)
      return Unit_instance;
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.d12_1) {
      this.l12();
    }
  };
  protoOf(EventLoop).l12 = function () {
  };
  function ThreadLocalEventLoop() {
    ThreadLocalEventLoop_instance = this;
    this.m12_1 = commonThreadLocal(new Symbol('ThreadLocalEventLoop'));
  }
  protoOf(ThreadLocalEventLoop).n12 = function () {
    var tmp0_elvis_lhs = this.m12_1.p12();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = createEventLoop();
      ThreadLocalEventLoop_getInstance().m12_1.q12(this_0);
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  var ThreadLocalEventLoop_instance;
  function ThreadLocalEventLoop_getInstance() {
    if (ThreadLocalEventLoop_instance == null)
      new ThreadLocalEventLoop();
    return ThreadLocalEventLoop_instance;
  }
  function CompletionHandlerException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, CompletionHandlerException);
  }
  function CoroutinesInternalError(message, cause) {
    Error_init_$Init$(message, cause, this);
    captureStack(this, CoroutinesInternalError);
  }
  function Key_2() {
  }
  var Key_instance_3;
  function Key_getInstance_2() {
    return Key_instance_3;
  }
  function Job() {
  }
  function DisposableHandle() {
  }
  function get_isActive_0(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y8(Key_instance_3);
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ju();
    return tmp1_elvis_lhs == null ? true : tmp1_elvis_lhs;
  }
  function get_job(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4.y8(Key_instance_3);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "Current context doesn't contain Job in it: " + toString(_this__u8e3s4);
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function cancel_0(_this__u8e3s4, message, cause) {
    cause = cause === VOID ? null : cause;
    return _this__u8e3s4.rv(CancellationException_0(message, cause));
  }
  function Job_0(parent) {
    parent = parent === VOID ? null : parent;
    return new JobImpl(parent);
  }
  function cancel_1(_this__u8e3s4, cause) {
    cause = cause === VOID ? null : cause;
    var tmp0_safe_receiver = _this__u8e3s4.y8(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.rv(cause);
    }
  }
  function ensureActive(_this__u8e3s4) {
    var tmp0_safe_receiver = _this__u8e3s4.y8(Key_instance_3);
    if (tmp0_safe_receiver == null)
      null;
    else {
      ensureActive_0(tmp0_safe_receiver);
    }
  }
  function NonDisposableHandle() {
  }
  protoOf(NonDisposableHandle).cv = function () {
    return null;
  };
  protoOf(NonDisposableHandle).jy = function () {
  };
  protoOf(NonDisposableHandle).vv = function (cause) {
    return false;
  };
  protoOf(NonDisposableHandle).toString = function () {
    return 'NonDisposableHandle';
  };
  var NonDisposableHandle_instance;
  function NonDisposableHandle_getInstance() {
    return NonDisposableHandle_instance;
  }
  function invokeOnCompletion(_this__u8e3s4, invokeImmediately, handler) {
    invokeImmediately = invokeImmediately === VOID ? true : invokeImmediately;
    var tmp;
    if (_this__u8e3s4 instanceof JobSupport) {
      tmp = _this__u8e3s4.nv(invokeImmediately, handler);
    } else {
      var tmp_0 = handler.n10();
      tmp = _this__u8e3s4.mv(tmp_0, invokeImmediately, JobNode$invoke$ref(handler));
    }
    return tmp;
  }
  function ensureActive_0(_this__u8e3s4) {
    if (!_this__u8e3s4.ju())
      throw _this__u8e3s4.iv();
  }
  function ParentJob() {
  }
  function disposeOnCompletion(_this__u8e3s4, handle) {
    return invokeOnCompletion(_this__u8e3s4, VOID, new DisposeOnCompletion(handle));
  }
  function DisposeOnCompletion(handle) {
    JobNode.call(this);
    this.v12_1 = handle;
  }
  protoOf(DisposeOnCompletion).n10 = function () {
    return false;
  };
  protoOf(DisposeOnCompletion).iy = function (cause) {
    return this.v12_1.jy();
  };
  function get_COMPLETING_ALREADY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_ALREADY;
  }
  var COMPLETING_ALREADY;
  function get_COMPLETING_WAITING_CHILDREN() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_WAITING_CHILDREN;
  }
  var COMPLETING_WAITING_CHILDREN;
  function get_COMPLETING_RETRY() {
    _init_properties_JobSupport_kt__68f172();
    return COMPLETING_RETRY;
  }
  var COMPLETING_RETRY;
  function get_TOO_LATE_TO_CANCEL() {
    _init_properties_JobSupport_kt__68f172();
    return TOO_LATE_TO_CANCEL;
  }
  var TOO_LATE_TO_CANCEL;
  function get_SEALED() {
    _init_properties_JobSupport_kt__68f172();
    return SEALED;
  }
  var SEALED;
  function get_EMPTY_NEW() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_NEW;
  }
  var EMPTY_NEW;
  function get_EMPTY_ACTIVE() {
    _init_properties_JobSupport_kt__68f172();
    return EMPTY_ACTIVE;
  }
  var EMPTY_ACTIVE;
  function unboxState(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp0_safe_receiver = _this__u8e3s4 instanceof IncompleteStateBox ? _this__u8e3s4 : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w12_1;
    return tmp1_elvis_lhs == null ? _this__u8e3s4 : tmp1_elvis_lhs;
  }
  function JobNode() {
    LockFreeLinkedListNode.call(this);
  }
  protoOf(JobNode).s10 = function () {
    var tmp = this.r10_1;
    if (!(tmp == null))
      return tmp;
    else {
      throwUninitializedPropertyAccessException('job');
    }
  };
  protoOf(JobNode).ju = function () {
    return true;
  };
  protoOf(JobNode).t10 = function () {
    return null;
  };
  protoOf(JobNode).jy = function () {
    return this.s10().pv(this);
  };
  protoOf(JobNode).toString = function () {
    return get_classSimpleName(this) + '@' + get_hexAddress(this) + '[job@' + get_hexAddress(this.s10()) + ']';
  };
  function _set_exceptionsHolder__tqm22h($this, value) {
    $this.a13_1.kotlinx$atomicfu$value = value;
  }
  function _get_exceptionsHolder__nhszp($this) {
    return $this.a13_1.kotlinx$atomicfu$value;
  }
  function allocateList($this) {
    return ArrayList_init_$Create$(4);
  }
  function finalizeFinishingState($this, state, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    var proposedException = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ou_1;
    var wasCancelling;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    wasCancelling = state.b13();
    var exceptions = state.c13(proposedException);
    var finalCause = getFinalRootCause($this, state, exceptions);
    if (!(finalCause == null)) {
      addSuppressedExceptions($this, finalCause, exceptions);
    }
    var finalException = finalCause;
    var finalState = finalException == null ? proposedUpdate : finalException === proposedException ? proposedUpdate : new CompletedExceptionally(finalException);
    if (!(finalException == null)) {
      var handled = cancelParent($this, finalException) || $this.fw(finalException);
      if (handled) {
        (finalState instanceof CompletedExceptionally ? finalState : THROW_CCE()).iz();
      }
    }
    if (!wasCancelling) {
      $this.cw(finalException);
    }
    $this.nu(finalState);
    var casSuccess = $this.cu_1.atomicfu$compareAndSet(state, boxIncomplete(finalState));
    // Inline function 'kotlinx.coroutines.assert' call
    completeStateFinalization($this, state, finalState);
    return finalState;
  }
  function getFinalRootCause($this, state, exceptions) {
    if (exceptions.n()) {
      if (state.b13()) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        return new JobCancellationException(null == null ? $this.mu() : null, null, $this);
      }
      return null;
    }
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = exceptions.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (!(element instanceof CancellationException)) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var firstNonCancellation = tmp$ret$1;
    if (!(firstNonCancellation == null))
      return firstNonCancellation;
    var first = exceptions.m(0);
    if (first instanceof TimeoutCancellationException) {
      var tmp$ret$3;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s_0 = exceptions.i();
        while (_iterator__ex2g4s_0.j()) {
          var element_0 = _iterator__ex2g4s_0.k();
          var tmp;
          if (!(element_0 === first)) {
            tmp = element_0 instanceof TimeoutCancellationException;
          } else {
            tmp = false;
          }
          if (tmp) {
            tmp$ret$3 = element_0;
            break $l$block_0;
          }
        }
        tmp$ret$3 = null;
      }
      var detailedTimeoutException = tmp$ret$3;
      if (!(detailedTimeoutException == null))
        return detailedTimeoutException;
    }
    return first;
  }
  function addSuppressedExceptions($this, rootCause, exceptions) {
    if (exceptions.l() <= 1)
      return Unit_instance;
    var seenExceptions = identitySet(exceptions.l());
    var unwrappedCause = unwrap(rootCause);
    var _iterator__ex2g4s = exceptions.i();
    while (_iterator__ex2g4s.j()) {
      var exception = _iterator__ex2g4s.k();
      var unwrapped = unwrap(exception);
      var tmp;
      var tmp_0;
      if (!(unwrapped === rootCause) && !(unwrapped === unwrappedCause)) {
        tmp_0 = !(unwrapped instanceof CancellationException);
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = seenExceptions.g(unwrapped);
      } else {
        tmp = false;
      }
      if (tmp) {
        addSuppressed(rootCause, unwrapped);
      }
    }
  }
  function tryFinalizeSimpleState($this, state, update) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    if (!$this.cu_1.atomicfu$compareAndSet(state, boxIncomplete(update)))
      return false;
    $this.cw(null);
    $this.nu(update);
    completeStateFinalization($this, state, update);
    return true;
  }
  function completeStateFinalization($this, state, update) {
    var tmp0_safe_receiver = $this.bv();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      tmp0_safe_receiver.jy();
      $this.av(NonDisposableHandle_instance);
    }
    var tmp1_safe_receiver = update instanceof CompletedExceptionally ? update : null;
    var cause = tmp1_safe_receiver == null ? null : tmp1_safe_receiver.ou_1;
    if (state instanceof JobNode) {
      try {
        state.iy(cause);
      } catch ($p) {
        if ($p instanceof Error) {
          var ex = $p;
          $this.uu(new CompletionHandlerException('Exception in completion handler ' + state.toString() + ' for ' + $this.toString(), ex));
        } else {
          throw $p;
        }
      }
    } else {
      var tmp2_safe_receiver = state.t10();
      if (tmp2_safe_receiver == null)
        null;
      else {
        notifyCompletion($this, tmp2_safe_receiver, cause);
      }
    }
  }
  function notifyCancelling($this, list, cause) {
    $this.cw(cause);
    list.d13(4);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = list.u10_1;
    while (!equals(cur, list)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = node.n10();
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.iy(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.u10_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.uu(tmp0_safe_receiver_0);
    }
    cancelParent($this, cause);
  }
  function cancelParent($this, cause) {
    if ($this.dw())
      return true;
    var isCancellation = cause instanceof CancellationException;
    var parent = $this.bv();
    if (parent === null || parent === NonDisposableHandle_instance) {
      return isCancellation;
    }
    return parent.vv(cause) || isCancellation;
  }
  function notifyCompletion($this, $receiver, cause) {
    $receiver.d13(1);
    // Inline function 'kotlinx.coroutines.JobSupport.notifyHandlers' call
    var exception = null;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = $receiver.u10_1;
    while (!equals(cur, $receiver)) {
      var node = cur;
      var tmp;
      if (node instanceof JobNode) {
        tmp = true;
      } else {
        tmp = false;
      }
      if (tmp) {
        try {
          node.iy(cause);
        } catch ($p) {
          if ($p instanceof Error) {
            var ex = $p;
            var tmp0_safe_receiver = exception;
            var tmp_0;
            if (tmp0_safe_receiver == null) {
              tmp_0 = null;
            } else {
              // Inline function 'kotlin.apply' call
              addSuppressed(tmp0_safe_receiver, ex);
              tmp_0 = tmp0_safe_receiver;
            }
            if (tmp_0 == null) {
              // Inline function 'kotlin.run' call
              exception = new CompletionHandlerException('Exception in completion handler ' + node.toString() + ' for ' + $this.toString(), ex);
            }
          } else {
            throw $p;
          }
        }
      }
      cur = cur.u10_1;
    }
    var tmp0_safe_receiver_0 = exception;
    if (tmp0_safe_receiver_0 == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      $this.uu(tmp0_safe_receiver_0);
    }
  }
  function startInternal($this, state) {
    if (state instanceof Empty) {
      if (state.f13_1)
        return 0;
      if (!$this.cu_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
        return -1;
      $this.hv();
      return 1;
    } else {
      if (state instanceof InactiveNodeList) {
        if (!$this.cu_1.atomicfu$compareAndSet(state, state.e13_1))
          return -1;
        $this.hv();
        return 1;
      } else {
        return 0;
      }
    }
  }
  function promoteEmptyToNodeList($this, state) {
    var list = new NodeList();
    var update = state.f13_1 ? list : new InactiveNodeList(list);
    $this.cu_1.atomicfu$compareAndSet(state, update);
  }
  function promoteSingleToNodeList($this, state) {
    state.z10(new NodeList());
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
    var list = state.u10_1;
    $this.cu_1.atomicfu$compareAndSet(state, list);
  }
  function joinInternal($this) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.dv();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false))
        return false;
      if (startInternal($this, state) >= 0)
        return true;
    }
  }
  function joinSuspend($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    disposeOnCancellation(cancellable, invokeOnCompletion($this, VOID, new ResumeOnCompletion(cancellable)));
    return cancellable.ow();
  }
  function cancelMakeCompleting($this, cause) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = $this.dv();
      var tmp;
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        tmp = true;
      } else {
        var tmp_0;
        if (state instanceof Finishing) {
          tmp_0 = state.g13();
        } else {
          tmp_0 = false;
        }
        tmp = tmp_0;
      }
      if (tmp) {
        return get_COMPLETING_ALREADY();
      }
      var proposedUpdate = new CompletedExceptionally(createCauseException($this, cause));
      var finalState = tryMakeCompleting($this, state, proposedUpdate);
      if (!(finalState === get_COMPLETING_RETRY()))
        return finalState;
    }
  }
  function createCauseException($this, cause) {
    var tmp;
    if (cause == null ? true : cause instanceof Error) {
      var tmp_0;
      if (cause == null) {
        // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
        tmp_0 = new JobCancellationException(null == null ? $this.mu() : null, null, $this);
      } else {
        tmp_0 = cause;
      }
      tmp = tmp_0;
    } else {
      tmp = (isInterface(cause, ParentJob) ? cause : THROW_CCE()).yv();
    }
    return tmp;
  }
  function makeCancelling($this, cause) {
    var causeExceptionCache = null;
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = $this.dv();
      $l$block: {
        if (tmp0 instanceof Finishing) {
          // Inline function 'kotlinx.coroutines.internal.synchronized' call
          // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
          if (tmp0.h13())
            return get_TOO_LATE_TO_CANCEL();
          var wasCancelling = tmp0.b13();
          if (!(cause == null) || !wasCancelling) {
            var tmp0_elvis_lhs = causeExceptionCache;
            var tmp;
            if (tmp0_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_0 = createCauseException($this, cause);
              causeExceptionCache = this_0;
              tmp = this_0;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var causeException = tmp;
            tmp0.i13(causeException);
          }
          // Inline function 'kotlin.takeIf' call
          var this_1 = tmp0.j13();
          var tmp_0;
          if (!wasCancelling) {
            tmp_0 = this_1;
          } else {
            tmp_0 = null;
          }
          var notifyRootCause = tmp_0;
          if (notifyRootCause == null)
            null;
          else {
            // Inline function 'kotlin.let' call
            notifyCancelling($this, tmp0.x12_1, notifyRootCause);
          }
          return get_COMPLETING_ALREADY();
        } else {
          if (!(tmp0 == null) ? isInterface(tmp0, Incomplete) : false) {
            var tmp2_elvis_lhs = causeExceptionCache;
            var tmp_1;
            if (tmp2_elvis_lhs == null) {
              // Inline function 'kotlin.also' call
              var this_2 = createCauseException($this, cause);
              causeExceptionCache = this_2;
              tmp_1 = this_2;
            } else {
              tmp_1 = tmp2_elvis_lhs;
            }
            var causeException_0 = tmp_1;
            if (tmp0.ju()) {
              if (tryMakeCancelling($this, tmp0, causeException_0))
                return get_COMPLETING_ALREADY();
            } else {
              var finalState = tryMakeCompleting($this, tmp0, new CompletedExceptionally(causeException_0));
              if (finalState === get_COMPLETING_ALREADY()) {
                // Inline function 'kotlin.error' call
                var message = 'Cannot happen in ' + toString(tmp0);
                throw IllegalStateException_init_$Create$(toString(message));
              } else if (finalState === get_COMPLETING_RETRY()) {
                break $l$block;
              } else
                return finalState;
            }
          } else {
            return get_TOO_LATE_TO_CANCEL();
          }
        }
      }
    }
  }
  function getOrPromoteCancellingList($this, state) {
    var tmp0_elvis_lhs = state.t10();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var tmp_0;
      if (state instanceof Empty) {
        tmp_0 = new NodeList();
      } else {
        if (state instanceof JobNode) {
          promoteSingleToNodeList($this, state);
          tmp_0 = null;
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State should have list: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      tmp = tmp_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function tryMakeCancelling($this, state, rootCause) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var cancelling = new Finishing(list, false, rootCause);
    if (!$this.cu_1.atomicfu$compareAndSet(state, cancelling))
      return false;
    notifyCancelling($this, list, rootCause);
    return true;
  }
  function tryMakeCompleting($this, state, proposedUpdate) {
    if (!(!(state == null) ? isInterface(state, Incomplete) : false))
      return get_COMPLETING_ALREADY();
    var tmp;
    var tmp_0;
    var tmp_1;
    if (state instanceof Empty) {
      tmp_1 = true;
    } else {
      tmp_1 = state instanceof JobNode;
    }
    if (tmp_1) {
      tmp_0 = !(state instanceof ChildHandleNode);
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = !(proposedUpdate instanceof CompletedExceptionally);
    } else {
      tmp = false;
    }
    if (tmp) {
      if (tryFinalizeSimpleState($this, state, proposedUpdate)) {
        return proposedUpdate;
      }
      return get_COMPLETING_RETRY();
    }
    return tryMakeCompletingSlowPath($this, state, proposedUpdate);
  }
  function tryMakeCompletingSlowPath($this, state, proposedUpdate) {
    var tmp0_elvis_lhs = getOrPromoteCancellingList($this, state);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return get_COMPLETING_RETRY();
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var list = tmp;
    var tmp1_elvis_lhs = state instanceof Finishing ? state : null;
    var finishing = tmp1_elvis_lhs == null ? new Finishing(list, false, null) : tmp1_elvis_lhs;
    var notifyRootCause;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    if (finishing.g13())
      return get_COMPLETING_ALREADY();
    finishing.k13(true);
    if (!(finishing === state)) {
      if (!$this.cu_1.atomicfu$compareAndSet(state, finishing))
        return get_COMPLETING_RETRY();
    }
    // Inline function 'kotlinx.coroutines.assert' call
    var wasCancelling = finishing.b13();
    var tmp0_safe_receiver = proposedUpdate instanceof CompletedExceptionally ? proposedUpdate : null;
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      finishing.i13(tmp0_safe_receiver.ou_1);
    }
    // Inline function 'kotlin.takeIf' call
    var this_0 = finishing.j13();
    var tmp_0;
    if (!wasCancelling) {
      tmp_0 = this_0;
    } else {
      tmp_0 = null;
    }
    notifyRootCause = tmp_0;
    if (notifyRootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      notifyCancelling($this, list, notifyRootCause);
    }
    var child = nextChild($this, list);
    if (!(child == null) && tryWaitForChild($this, finishing, child, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    list.d13(2);
    var anotherChild = nextChild($this, list);
    if (!(anotherChild == null) && tryWaitForChild($this, finishing, anotherChild, proposedUpdate))
      return get_COMPLETING_WAITING_CHILDREN();
    return finalizeFinishingState($this, finishing, proposedUpdate);
  }
  function _get_exceptionOrNull__b3j7js($this, $receiver) {
    var tmp0_safe_receiver = $receiver instanceof CompletedExceptionally ? $receiver : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ou_1;
  }
  function tryWaitForChild($this, state, child, proposedUpdate) {
    var $this_0 = $this;
    var state_0 = state;
    var child_0 = child;
    var proposedUpdate_0 = proposedUpdate;
    $l$1: do {
      $l$0: do {
        var handle = invokeOnCompletion(child_0.p13_1, false, new ChildCompletion($this_0, state_0, child_0, proposedUpdate_0));
        if (!(handle === NonDisposableHandle_instance))
          return true;
        var tmp0_elvis_lhs = nextChild($this_0, child_0);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          return false;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var nextChild_0 = tmp;
        var tmp0 = $this_0;
        var tmp1 = state_0;
        var tmp3 = proposedUpdate_0;
        $this_0 = tmp0;
        state_0 = tmp1;
        child_0 = nextChild_0;
        proposedUpdate_0 = tmp3;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function continueCompleting($this, state, lastChild, proposedUpdate) {
    // Inline function 'kotlinx.coroutines.assert' call
    var waitChild = nextChild($this, lastChild);
    if (!(waitChild == null) && tryWaitForChild($this, state, waitChild, proposedUpdate))
      return Unit_instance;
    state.x12_1.d13(2);
    var waitChildAgain = nextChild($this, lastChild);
    if (!(waitChildAgain == null) && tryWaitForChild($this, state, waitChildAgain, proposedUpdate)) {
      return Unit_instance;
    }
    var finalState = finalizeFinishingState($this, state, proposedUpdate);
    $this.tu(finalState);
  }
  function nextChild($this, $receiver) {
    var cur = $receiver;
    $l$loop: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (!cur.w10_1) {
        break $l$loop;
      }
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.prevNode' call
      cur = cur.v10_1;
    }
    $l$loop_0: while (true) {
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.nextNode' call
      cur = cur.u10_1;
      // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListNode.isRemoved' call
      if (cur.w10_1)
        continue $l$loop_0;
      if (cur instanceof ChildHandleNode)
        return cur;
      if (cur instanceof NodeList)
        return null;
    }
  }
  function stateString($this, state) {
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.b13() ? 'Cancelling' : state.g13() ? 'Completing' : 'Active';
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        tmp = state.ju() ? 'Active' : 'New';
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = 'Cancelled';
        } else {
          tmp = 'Completed';
        }
      }
    }
    return tmp;
  }
  function Finishing(list, isCompleting, rootCause) {
    SynchronizedObject.call(this);
    this.x12_1 = list;
    this.y12_1 = atomic$boolean$1(isCompleting);
    this.z12_1 = atomic$ref$1(rootCause);
    this.a13_1 = atomic$ref$1(null);
  }
  protoOf(Finishing).t10 = function () {
    return this.x12_1;
  };
  protoOf(Finishing).k13 = function (value) {
    this.y12_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).g13 = function () {
    return this.y12_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).q13 = function (value) {
    this.z12_1.kotlinx$atomicfu$value = value;
  };
  protoOf(Finishing).j13 = function () {
    return this.z12_1.kotlinx$atomicfu$value;
  };
  protoOf(Finishing).h13 = function () {
    return _get_exceptionsHolder__nhszp(this) === get_SEALED();
  };
  protoOf(Finishing).b13 = function () {
    return !(this.j13() == null);
  };
  protoOf(Finishing).ju = function () {
    return this.j13() == null;
  };
  protoOf(Finishing).c13 = function (proposedException) {
    var eh = _get_exceptionsHolder__nhszp(this);
    var tmp;
    if (eh == null) {
      tmp = allocateList(this);
    } else {
      if (eh instanceof Error) {
        // Inline function 'kotlin.also' call
        var this_0 = allocateList(this);
        this_0.g(eh);
        tmp = this_0;
      } else {
        if (eh instanceof ArrayList) {
          tmp = eh instanceof ArrayList ? eh : THROW_CCE();
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    var list = tmp;
    var rootCause = this.j13();
    if (rootCause == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      list.f2(0, rootCause);
    }
    if (!(proposedException == null) && !equals(proposedException, rootCause)) {
      list.g(proposedException);
    }
    _set_exceptionsHolder__tqm22h(this, get_SEALED());
    return list;
  };
  protoOf(Finishing).i13 = function (exception) {
    var rootCause = this.j13();
    if (rootCause == null) {
      this.q13(exception);
      return Unit_instance;
    }
    if (exception === rootCause)
      return Unit_instance;
    var eh = _get_exceptionsHolder__nhszp(this);
    if (eh == null) {
      _set_exceptionsHolder__tqm22h(this, exception);
    } else {
      if (eh instanceof Error) {
        if (exception === eh)
          return Unit_instance;
        // Inline function 'kotlin.apply' call
        var this_0 = allocateList(this);
        this_0.g(eh);
        this_0.g(exception);
        _set_exceptionsHolder__tqm22h(this, this_0);
      } else {
        if (eh instanceof ArrayList) {
          (eh instanceof ArrayList ? eh : THROW_CCE()).g(exception);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'State is ' + toString(eh);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
  };
  protoOf(Finishing).toString = function () {
    return 'Finishing[cancelling=' + this.b13() + ', completing=' + this.g13() + ', rootCause=' + toString_0(this.j13()) + ', exceptions=' + toString_0(_get_exceptionsHolder__nhszp(this)) + ', list=' + this.x12_1.toString() + ']';
  };
  function ChildCompletion(parent, state, child, proposedUpdate) {
    JobNode.call(this);
    this.v13_1 = parent;
    this.w13_1 = state;
    this.x13_1 = child;
    this.y13_1 = proposedUpdate;
  }
  protoOf(ChildCompletion).n10 = function () {
    return false;
  };
  protoOf(ChildCompletion).iy = function (cause) {
    continueCompleting(this.v13_1, this.w13_1, this.x13_1, this.y13_1);
  };
  function AwaitContinuation(delegate, job) {
    CancellableContinuationImpl.call(this, delegate, 1);
    this.f14_1 = job;
  }
  protoOf(AwaitContinuation).rz = function (parent) {
    var state = this.f14_1.dv();
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.j13();
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        return tmp0_safe_receiver;
      }
    }
    if (state instanceof CompletedExceptionally)
      return state.ou_1;
    return parent.iv();
  };
  protoOf(AwaitContinuation).d10 = function () {
    return 'AwaitContinuation';
  };
  function awaitSuspend($this, $completion) {
    var cont = new AwaitContinuation(intercepted($completion), $this);
    cont.lz();
    disposeOnCancellation(cont, invokeOnCompletion($this, VOID, new ResumeAwaitOnCompletion(cont)));
    return cont.ow();
  }
  function JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation) {
    this.o14_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(JobSupport$_get_children_$slambda_k839f8).t14 = function ($this$sequence, $completion) {
    var tmp = this.u14($this$sequence, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).d9 = function (p1, $completion) {
    return this.t14(p1 instanceof SequenceScope ? p1 : THROW_CCE(), $completion);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 8;
            var state = this.o14_1.dv();
            if (state instanceof ChildHandleNode) {
              this.l8_1 = 6;
              suspendResult = this.p14_1.yd(state.p13_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!(state == null) ? isInterface(state, Incomplete) : false) {
                var tmp0_safe_receiver = state.t10();
                if (tmp0_safe_receiver == null) {
                  this.q14_1 = null;
                  this.l8_1 = 5;
                  continue $sm;
                } else {
                  this.s14_1 = tmp0_safe_receiver;
                  this.r14_1 = this.s14_1.u10_1;
                  this.l8_1 = 1;
                  continue $sm;
                }
              } else {
                this.l8_1 = 7;
                continue $sm;
              }
            }

          case 1:
            if (!!equals(this.r14_1, this.s14_1)) {
              this.l8_1 = 4;
              continue $sm;
            }

            var it = this.r14_1;
            if (it instanceof ChildHandleNode) {
              this.l8_1 = 2;
              suspendResult = this.p14_1.yd(it.p13_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 3;
              continue $sm;
            }

          case 2:
            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.r14_1 = this.r14_1.u10_1;
            this.l8_1 = 1;
            continue $sm;
          case 4:
            var tmp_0 = this;
            tmp_0.q14_1 = Unit_instance;
            this.l8_1 = 5;
            continue $sm;
          case 5:
            this.l8_1 = 7;
            continue $sm;
          case 6:
            this.l8_1 = 7;
            continue $sm;
          case 7:
            return Unit_instance;
          case 8:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 8) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  protoOf(JobSupport$_get_children_$slambda_k839f8).u14 = function ($this$sequence, completion) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this.o14_1, completion);
    i.p14_1 = $this$sequence;
    return i;
  };
  function JobSupport$_get_children_$slambda_k839f8_0(this$0, resultContinuation) {
    var i = new JobSupport$_get_children_$slambda_k839f8(this$0, resultContinuation);
    return constructCallableReference(function ($this$sequence, $completion) {
      return i.t14($this$sequence, $completion);
    }, 1);
  }
  function JobSupport(active) {
    this.cu_1 = atomic$ref$1(active ? get_EMPTY_ACTIVE() : get_EMPTY_NEW());
    this.du_1 = atomic$ref$1(null);
  }
  protoOf(JobSupport).q1 = function () {
    return Key_instance_3;
  };
  protoOf(JobSupport).av = function (value) {
    this.du_1.kotlinx$atomicfu$value = value;
  };
  protoOf(JobSupport).bv = function () {
    return this.du_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).cv = function () {
    var tmp0_safe_receiver = this.bv();
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.cv();
  };
  protoOf(JobSupport).eu = function (parent) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (parent == null) {
      this.av(NonDisposableHandle_instance);
      return Unit_instance;
    }
    parent.gv();
    var handle = parent.bw(this);
    this.av(handle);
    if (this.ev()) {
      handle.jy();
      this.av(NonDisposableHandle_instance);
    }
  };
  protoOf(JobSupport).dv = function () {
    return this.cu_1.kotlinx$atomicfu$value;
  };
  protoOf(JobSupport).ju = function () {
    var state = this.dv();
    var tmp;
    if (!(state == null) ? isInterface(state, Incomplete) : false) {
      tmp = state.ju();
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(JobSupport).ev = function () {
    var tmp = this.dv();
    return !(!(tmp == null) ? isInterface(tmp, Incomplete) : false);
  };
  protoOf(JobSupport).fv = function () {
    var state = this.dv();
    var tmp;
    if (state instanceof CompletedExceptionally) {
      tmp = true;
    } else {
      var tmp_0;
      if (state instanceof Finishing) {
        tmp_0 = state.b13();
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobSupport).gv = function () {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.dv();
      var tmp0_subject = startInternal(this, state);
      if (tmp0_subject === 0)
        return false;
      else if (tmp0_subject === 1)
        return true;
    }
  };
  protoOf(JobSupport).hv = function () {
  };
  protoOf(JobSupport).iv = function () {
    var state = this.dv();
    var tmp;
    if (state instanceof Finishing) {
      var tmp0_safe_receiver = state.j13();
      var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : this.jv(tmp0_safe_receiver, get_classSimpleName(this) + ' is cancelling');
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        // Inline function 'kotlin.error' call
        var message = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message));
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      tmp = tmp_0;
    } else {
      if (!(state == null) ? isInterface(state, Incomplete) : false) {
        // Inline function 'kotlin.error' call
        var message_0 = 'Job is still new or active: ' + this.toString();
        throw IllegalStateException_init_$Create$(toString(message_0));
      } else {
        if (state instanceof CompletedExceptionally) {
          tmp = this.kv(state.ou_1);
        } else {
          tmp = new JobCancellationException(get_classSimpleName(this) + ' has completed normally', null, this);
        }
      }
    }
    return tmp;
  };
  protoOf(JobSupport).jv = function (_this__u8e3s4, message) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof CancellationException ? _this__u8e3s4 : null;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(message == null ? this.mu() : message, _this__u8e3s4, this);
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  };
  protoOf(JobSupport).kv = function (_this__u8e3s4, message, $super) {
    message = message === VOID ? null : message;
    return $super === VOID ? this.jv(_this__u8e3s4, message) : $super.jv.call(this, _this__u8e3s4, message);
  };
  protoOf(JobSupport).lv = function (handler) {
    return this.nv(true, new InvokeOnCompletion(handler));
  };
  protoOf(JobSupport).mv = function (onCancelling, invokeImmediately, handler) {
    var tmp;
    if (onCancelling) {
      tmp = new InvokeOnCancelling(handler);
    } else {
      tmp = new InvokeOnCompletion(handler);
    }
    return this.nv(invokeImmediately, tmp);
  };
  protoOf(JobSupport).nv = function (invokeImmediately, node) {
    node.r10_1 = this;
    var tmp$ret$0;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.dv();
        if (state instanceof Empty) {
          if (state.f13_1) {
            if (this.cu_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$0 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.t10();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var tmp;
              if (node.n10()) {
                var tmp0_safe_receiver = state instanceof Finishing ? state : null;
                var rootCause = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.j13();
                var tmp_0;
                if (rootCause == null) {
                  tmp_0 = list.x10(node, 5);
                } else {
                  if (invokeImmediately) {
                    node.iy(rootCause);
                  }
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_0;
              } else {
                tmp = list.x10(node, 1);
              }
              if (tmp) {
                tmp$ret$0 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$0 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$0;
    if (added)
      return node;
    else if (invokeImmediately) {
      var tmp_1 = this.dv();
      var tmp0_safe_receiver_0 = tmp_1 instanceof CompletedExceptionally ? tmp_1 : null;
      node.iy(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ou_1);
    }
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).ov = function ($completion) {
    if (!joinInternal(this)) {
      // Inline function 'kotlin.js.getCoroutineContext' call
      var tmp$ret$0 = $completion.r8();
      ensureActive(tmp$ret$0);
      return Unit_instance;
    }
    return joinSuspend(this, $completion);
  };
  protoOf(JobSupport).pv = function (node) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var state = this.dv();
      if (state instanceof JobNode) {
        if (!(state === node))
          return Unit_instance;
        if (this.cu_1.atomicfu$compareAndSet(state, get_EMPTY_ACTIVE()))
          return Unit_instance;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          if (!(state.t10() == null)) {
            node.y10();
          }
          return Unit_instance;
        } else {
          return Unit_instance;
        }
      }
    }
  };
  protoOf(JobSupport).qv = function () {
    return false;
  };
  protoOf(JobSupport).rv = function (cause) {
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.mu() : null, null, this);
    } else {
      tmp = cause;
    }
    this.tv(tmp);
  };
  protoOf(JobSupport).mu = function () {
    return 'Job was cancelled';
  };
  protoOf(JobSupport).tv = function (cause) {
    this.xv(cause);
  };
  protoOf(JobSupport).uv = function (parentJob) {
    this.xv(parentJob);
  };
  protoOf(JobSupport).vv = function (cause) {
    if (cause instanceof CancellationException)
      return true;
    return this.xv(cause) && this.ew();
  };
  protoOf(JobSupport).wv = function (cause) {
    return this.xv(cause);
  };
  protoOf(JobSupport).xv = function (cause) {
    var finalState = get_COMPLETING_ALREADY();
    if (this.qv()) {
      finalState = cancelMakeCompleting(this, cause);
      if (finalState === get_COMPLETING_WAITING_CHILDREN())
        return true;
    }
    if (finalState === get_COMPLETING_ALREADY()) {
      finalState = makeCancelling(this, cause);
    }
    var tmp;
    if (finalState === get_COMPLETING_ALREADY()) {
      tmp = true;
    } else if (finalState === get_COMPLETING_WAITING_CHILDREN()) {
      tmp = true;
    } else if (finalState === get_TOO_LATE_TO_CANCEL()) {
      tmp = false;
    } else {
      this.tu(finalState);
      tmp = true;
    }
    return tmp;
  };
  protoOf(JobSupport).yv = function () {
    var state = this.dv();
    var tmp;
    if (state instanceof Finishing) {
      tmp = state.j13();
    } else {
      if (state instanceof CompletedExceptionally) {
        tmp = state.ou_1;
      } else {
        if (!(state == null) ? isInterface(state, Incomplete) : false) {
          // Inline function 'kotlin.error' call
          var message = 'Cannot be cancelling child in this state: ' + toString(state);
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          tmp = null;
        }
      }
    }
    var rootCause = tmp;
    var tmp1_elvis_lhs = rootCause instanceof CancellationException ? rootCause : null;
    return tmp1_elvis_lhs == null ? new JobCancellationException('Parent job is ' + stateString(this, state), rootCause, this) : tmp1_elvis_lhs;
  };
  protoOf(JobSupport).zv = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.dv();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          return false;
        else if (finalState === get_COMPLETING_WAITING_CHILDREN())
          return true;
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else {
          this.tu(finalState);
          return true;
        }
      }
    }
  };
  protoOf(JobSupport).ru = function (proposedUpdate) {
    // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
    while (true) {
      var tmp0 = this.dv();
      $l$block: {
        var finalState = tryMakeCompleting(this, tmp0, proposedUpdate);
        if (finalState === get_COMPLETING_ALREADY())
          throw IllegalStateException_init_$Create$_0('Job ' + this.toString() + ' is already complete or completing, ' + ('but is being completed with ' + toString_0(proposedUpdate)), _get_exceptionOrNull__b3j7js(this, proposedUpdate));
        else if (finalState === get_COMPLETING_RETRY()) {
          break $l$block;
        } else
          return finalState;
      }
    }
  };
  protoOf(JobSupport).aw = function () {
    return sequence(JobSupport$_get_children_$slambda_k839f8_0(this, null));
  };
  protoOf(JobSupport).bw = function (child) {
    // Inline function 'kotlin.also' call
    var this_0 = new ChildHandleNode(child);
    this_0.r10_1 = this;
    var node = this_0;
    var tmp$ret$2;
    $l$block_1: {
      // Inline function 'kotlinx.coroutines.JobSupport.tryPutNodeIntoList' call
      // Inline function 'kotlinx.coroutines.JobSupport.loopOnState' call
      while (true) {
        var state = this.dv();
        if (state instanceof Empty) {
          if (state.f13_1) {
            if (this.cu_1.atomicfu$compareAndSet(state, node)) {
              tmp$ret$2 = true;
              break $l$block_1;
            }
          } else {
            promoteEmptyToNodeList(this, state);
          }
        } else {
          if (!(state == null) ? isInterface(state, Incomplete) : false) {
            var list = state.t10();
            if (list == null) {
              promoteSingleToNodeList(this, state instanceof JobNode ? state : THROW_CCE());
            } else {
              var addedBeforeCancellation = list.x10(node, 7);
              var tmp;
              if (addedBeforeCancellation) {
                tmp = true;
              } else {
                var addedBeforeCompletion = list.x10(node, 3);
                var latestState = this.dv();
                var tmp_0;
                if (latestState instanceof Finishing) {
                  tmp_0 = latestState.j13();
                } else {
                  // Inline function 'kotlinx.coroutines.assert' call
                  var tmp0_safe_receiver = latestState instanceof CompletedExceptionally ? latestState : null;
                  tmp_0 = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ou_1;
                }
                var rootCause = tmp_0;
                node.iy(rootCause);
                var tmp_1;
                if (addedBeforeCompletion) {
                  // Inline function 'kotlinx.coroutines.assert' call
                  tmp_1 = true;
                } else {
                  return NonDisposableHandle_instance;
                }
                tmp = tmp_1;
              }
              if (tmp) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
            }
          } else {
            tmp$ret$2 = false;
            break $l$block_1;
          }
        }
      }
    }
    var added = tmp$ret$2;
    if (added)
      return node;
    var tmp_2 = this.dv();
    var tmp0_safe_receiver_0 = tmp_2 instanceof CompletedExceptionally ? tmp_2 : null;
    node.iy(tmp0_safe_receiver_0 == null ? null : tmp0_safe_receiver_0.ou_1);
    return NonDisposableHandle_instance;
  };
  protoOf(JobSupport).uu = function (exception) {
    throw exception;
  };
  protoOf(JobSupport).cw = function (cause) {
  };
  protoOf(JobSupport).dw = function () {
    return false;
  };
  protoOf(JobSupport).ew = function () {
    return true;
  };
  protoOf(JobSupport).fw = function (exception) {
    return false;
  };
  protoOf(JobSupport).nu = function (state) {
  };
  protoOf(JobSupport).tu = function (state) {
  };
  protoOf(JobSupport).toString = function () {
    return this.gw() + '@' + get_hexAddress(this);
  };
  protoOf(JobSupport).gw = function () {
    return this.vu() + '{' + stateString(this, this.dv()) + '}';
  };
  protoOf(JobSupport).vu = function () {
    return get_classSimpleName(this);
  };
  protoOf(JobSupport).hw = function ($completion) {
    $l$loop: while (true) {
      var state = this.dv();
      if (!(!(state == null) ? isInterface(state, Incomplete) : false)) {
        if (state instanceof CompletedExceptionally) {
          // Inline function 'kotlinx.coroutines.internal.recoverAndThrow' call
          throw state.ou_1;
        }
        return unboxState(state);
      }
      if (startInternal(this, state) >= 0)
        break $l$loop;
    }
    return awaitSuspend(this, $completion);
  };
  function handlesExceptionF($this) {
    var tmp = $this.bv();
    var tmp0_safe_receiver = tmp instanceof ChildHandleNode ? tmp : null;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.s10();
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      return false;
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parentJob = tmp_0;
    while (true) {
      if (parentJob.ew())
        return true;
      var tmp_1 = parentJob.bv();
      var tmp2_safe_receiver = tmp_1 instanceof ChildHandleNode ? tmp_1 : null;
      var tmp3_elvis_lhs = tmp2_safe_receiver == null ? null : tmp2_safe_receiver.s10();
      var tmp_2;
      if (tmp3_elvis_lhs == null) {
        return false;
      } else {
        tmp_2 = tmp3_elvis_lhs;
      }
      parentJob = tmp_2;
    }
  }
  function JobImpl(parent) {
    JobSupport.call(this, true);
    this.eu(parent);
    this.x14_1 = handlesExceptionF(this);
  }
  protoOf(JobImpl).qv = function () {
    return true;
  };
  protoOf(JobImpl).ew = function () {
    return this.x14_1;
  };
  protoOf(JobImpl).y14 = function (exception) {
    return this.zv(new CompletedExceptionally(exception));
  };
  function Empty(isActive) {
    this.f13_1 = isActive;
  }
  protoOf(Empty).ju = function () {
    return this.f13_1;
  };
  protoOf(Empty).t10 = function () {
    return null;
  };
  protoOf(Empty).toString = function () {
    return 'Empty{' + (this.f13_1 ? 'Active' : 'New') + '}';
  };
  function Incomplete() {
  }
  function IncompleteStateBox(state) {
    this.w12_1 = state;
  }
  function NodeList() {
    LockFreeLinkedListHead.call(this);
  }
  protoOf(NodeList).ju = function () {
    return true;
  };
  protoOf(NodeList).t10 = function () {
    return this;
  };
  protoOf(NodeList).c15 = function (state) {
    // Inline function 'kotlin.text.buildString' call
    // Inline function 'kotlin.apply' call
    var this_0 = StringBuilder_init_$Create$();
    this_0.q7('List{');
    this_0.q7(state);
    this_0.q7('}[');
    var first = true;
    // Inline function 'kotlinx.coroutines.internal.LockFreeLinkedListHead.forEach' call
    var cur = this.u10_1;
    while (!equals(cur, this)) {
      var node = cur;
      if (node instanceof JobNode) {
        if (first) {
          first = false;
        } else
          this_0.q7(', ');
        this_0.p7(node);
      }
      cur = cur.u10_1;
    }
    this_0.q7(']');
    return this_0.toString();
  };
  protoOf(NodeList).toString = function () {
    return get_DEBUG() ? this.c15('Active') : protoOf(LockFreeLinkedListHead).toString.call(this);
  };
  function boxIncomplete(_this__u8e3s4) {
    _init_properties_JobSupport_kt__68f172();
    var tmp;
    if (!(_this__u8e3s4 == null) ? isInterface(_this__u8e3s4, Incomplete) : false) {
      tmp = new IncompleteStateBox(_this__u8e3s4);
    } else {
      tmp = _this__u8e3s4;
    }
    return tmp;
  }
  function InactiveNodeList(list) {
    this.e13_1 = list;
  }
  protoOf(InactiveNodeList).t10 = function () {
    return this.e13_1;
  };
  protoOf(InactiveNodeList).ju = function () {
    return false;
  };
  protoOf(InactiveNodeList).toString = function () {
    return get_DEBUG() ? this.e13_1.c15('New') : anyToString(this);
  };
  function InvokeOnCompletion(handler) {
    JobNode.call(this);
    this.h15_1 = handler;
  }
  protoOf(InvokeOnCompletion).n10 = function () {
    return false;
  };
  protoOf(InvokeOnCompletion).iy = function (cause) {
    return this.h15_1(cause);
  };
  function InvokeOnCancelling(handler) {
    JobNode.call(this);
    this.m15_1 = handler;
    this.n15_1 = atomic$boolean$1(false);
  }
  protoOf(InvokeOnCancelling).n10 = function () {
    return true;
  };
  protoOf(InvokeOnCancelling).iy = function (cause) {
    if (this.n15_1.atomicfu$compareAndSet(false, true))
      this.m15_1(cause);
  };
  function ResumeOnCompletion(continuation) {
    JobNode.call(this);
    this.s15_1 = continuation;
  }
  protoOf(ResumeOnCompletion).n10 = function () {
    return false;
  };
  protoOf(ResumeOnCompletion).iy = function (cause) {
    // Inline function 'kotlin.coroutines.resume' call
    var this_0 = this.s15_1;
    // Inline function 'kotlin.Companion.success' call
    var tmp$ret$1 = _Result___init__impl__xyqfz8(Unit_instance);
    this_0.w8(tmp$ret$1);
    return Unit_instance;
  };
  function ChildHandleNode(childJob) {
    JobNode.call(this);
    this.p13_1 = childJob;
  }
  protoOf(ChildHandleNode).cv = function () {
    return this.s10();
  };
  protoOf(ChildHandleNode).n10 = function () {
    return true;
  };
  protoOf(ChildHandleNode).iy = function (cause) {
    return this.p13_1.uv(this.s10());
  };
  protoOf(ChildHandleNode).vv = function (cause) {
    return this.s10().vv(cause);
  };
  function ResumeAwaitOnCompletion(continuation) {
    JobNode.call(this);
    this.x15_1 = continuation;
  }
  protoOf(ResumeAwaitOnCompletion).n10 = function () {
    return false;
  };
  protoOf(ResumeAwaitOnCompletion).iy = function (cause) {
    var state = this.s10().dv();
    // Inline function 'kotlinx.coroutines.assert' call
    if (state instanceof CompletedExceptionally) {
      var tmp0 = this.x15_1;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = state.ou_1;
      var tmp$ret$2 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.w8(tmp$ret$2);
    } else {
      var tmp0_0 = this.x15_1;
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var value = unboxState(state);
      var tmp$ret$4 = _Result___init__impl__xyqfz8(value);
      tmp0_0.w8(tmp$ret$4);
    }
  };
  var properties_initialized_JobSupport_kt_5iq8a4;
  function _init_properties_JobSupport_kt__68f172() {
    if (!properties_initialized_JobSupport_kt_5iq8a4) {
      properties_initialized_JobSupport_kt_5iq8a4 = true;
      COMPLETING_ALREADY = new Symbol('COMPLETING_ALREADY');
      COMPLETING_WAITING_CHILDREN = new Symbol('COMPLETING_WAITING_CHILDREN');
      COMPLETING_RETRY = new Symbol('COMPLETING_RETRY');
      TOO_LATE_TO_CANCEL = new Symbol('TOO_LATE_TO_CANCEL');
      SEALED = new Symbol('SEALED');
      EMPTY_NEW = new Empty(false);
      EMPTY_ACTIVE = new Empty(true);
    }
  }
  function JobNode$invoke$ref(p0) {
    return constructCallableReference(function (p0_0) {
      p0.iy(p0_0);
      return Unit_instance;
    }, 1, 0, 0, 'invoke', [p0]);
  }
  function MainCoroutineDispatcher() {
    CoroutineDispatcher.call(this);
  }
  protoOf(MainCoroutineDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.a16();
    return tmp0_elvis_lhs == null ? get_classSimpleName(this) + '@' + get_hexAddress(this) : tmp0_elvis_lhs;
  };
  protoOf(MainCoroutineDispatcher).a16 = function () {
    var main = Dispatchers_getInstance().x11();
    if (this === main)
      return 'Dispatchers.Main';
    var tmp;
    try {
      tmp = main.z15();
    } catch ($p) {
      var tmp_0;
      if ($p instanceof UnsupportedOperationException) {
        var e = $p;
        tmp_0 = null;
      } else {
        throw $p;
      }
      tmp = tmp_0;
    }
    var immediate = tmp;
    if (this === immediate)
      return 'Dispatchers.Main.immediate';
    return null;
  };
  function SupervisorJob(parent) {
    parent = parent === VOID ? null : parent;
    return new SupervisorJobImpl(parent);
  }
  function SupervisorJobImpl(parent) {
    JobImpl.call(this, parent);
  }
  protoOf(SupervisorJobImpl).vv = function (cause) {
    return false;
  };
  function withTimeoutOrNull(timeMillis, block, $completion) {
    var tmp = new $withTimeoutOrNullCOROUTINE$(timeMillis, block, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function TimeoutCancellationException(message, coroutine) {
    CancellationException_init_$Init$(message, this);
    captureStack(this, TimeoutCancellationException);
    this.p16_1 = coroutine;
  }
  function TimeoutCoroutine(time, uCont) {
    ScopeCoroutine.call(this, uCont.r8(), uCont);
    this.u16_1 = time;
  }
  protoOf(TimeoutCoroutine).e10 = function () {
    var delay = get_delay(this.hu_1);
    var tmp0_safe_receiver = this.hu_1.y8(Key_instance_2);
    var name = tmp0_safe_receiver == null ? null : tmp0_safe_receiver.w16_1;
    this.wv(TimeoutCancellationException_0(this.u16_1, delay, this, name));
  };
  protoOf(TimeoutCoroutine).vu = function () {
    return protoOf(ScopeCoroutine).vu.call(this) + '(timeMillis=' + this.u16_1.toString() + ')';
  };
  function setupTimeout(coroutine, block) {
    var cont = coroutine.qx_1;
    var context = cont.r8();
    disposeOnCompletion(coroutine, get_delay(context).z11(coroutine.u16_1, coroutine, coroutine.hu_1));
    return startUndispatchedOrReturnIgnoreTimeout(coroutine, coroutine, block);
  }
  function TimeoutCancellationException_0(time, delay, coroutine, coroutineName) {
    var tmp0_safe_receiver = isInterface(delay, DelayWithTimeoutDiagnostics) ? delay : null;
    var tmp;
    if (tmp0_safe_receiver == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.time.Companion.milliseconds' call
      Companion_getInstance();
      var tmp$ret$0 = toDuration(time, DurationUnit_MILLISECONDS_getInstance());
      tmp = tmp0_safe_receiver.a12(tmp$ret$0);
    }
    var tmp1_elvis_lhs = tmp;
    var baseMessage = tmp1_elvis_lhs == null ? 'Timed out waiting for ' + time.toString() + ' ms' : tmp1_elvis_lhs;
    var tmp_0;
    if (!(coroutineName == null)) {
      // Inline function 'kotlin.text.replaceFirstChar' call
      var tmp_1;
      // Inline function 'kotlin.text.isNotEmpty' call
      if (charSequenceLength(baseMessage) > 0) {
        // Inline function 'kotlin.text.lowercaseChar' call
        // Inline function 'kotlin.text.lowercase' call
        var this_0 = charCodeAt(baseMessage, 0);
        // Inline function 'kotlin.js.asDynamic' call
        // Inline function 'kotlin.js.unsafeCast' call
        var tmp$ret$5 = toString_1(this_0).toLowerCase();
        var tmp0 = charCodeAt(tmp$ret$5, 0);
        // Inline function 'kotlin.text.plus' call
        var other = substring(baseMessage, 1);
        tmp_1 = toString_1(tmp0) + other;
      } else {
        tmp_1 = baseMessage;
      }
      tmp_0 = 'Coroutine "' + coroutineName + '" ' + tmp_1;
    } else {
      tmp_0 = baseMessage;
    }
    var message = tmp_0;
    return new TimeoutCancellationException(message, coroutine);
  }
  function $withTimeoutOrNullCOROUTINE$(timeMillis, block, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.m16_1 = timeMillis;
    this.n16_1 = block;
  }
  protoOf($withTimeoutOrNullCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            if (compare(this.m16_1, new Long(0, 0)) <= 0)
              return null;
            this.o16_1 = {_v: null};
            this.m8_1 = 2;
            this.l8_1 = 1;
            var timeoutCoroutine = new TimeoutCoroutine(this.m16_1, this);
            this.o16_1._v = timeoutCoroutine;
            suspendResult = returnIfSuspended(setupTimeout(timeoutCoroutine, this.n16_1), this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            return suspendResult;
          case 2:
            this.m8_1 = 3;
            var tmp_0 = this.o8_1;
            if (tmp_0 instanceof TimeoutCancellationException) {
              var e = this.o8_1;
              if (e.p16_1 === this.o16_1._v) {
                return null;
              }
              throw e;
            } else {
              throw this.o8_1;
            }

          case 3:
            throw this.o8_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m8_1 === 3) {
          throw e_0;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e_0;
        }
      }
     while (true);
  };
  function Key_3() {
  }
  var Key_instance_4;
  function Key_getInstance_3() {
    return Key_instance_4;
  }
  function YieldContext() {
    AbstractCoroutineContextElement.call(this, Key_instance_4);
    this.y16_1 = false;
  }
  function Unconfined() {
    Unconfined_instance = this;
    CoroutineDispatcher.call(this);
  }
  protoOf(Unconfined).n11 = function (context) {
    return false;
  };
  protoOf(Unconfined).o11 = function (context, block) {
    var yieldContext = context.y8(Key_instance_4);
    if (!(yieldContext == null)) {
      yieldContext.y16_1 = true;
      return Unit_instance;
    }
    throw UnsupportedOperationException_init_$Create$('Dispatchers.Unconfined.dispatch function can only be used by the yield function. If you wrap Unconfined dispatcher in your code, make sure you properly delegate isDispatchNeeded and dispatch calls.');
  };
  protoOf(Unconfined).toString = function () {
    return 'Dispatchers.Unconfined';
  };
  var Unconfined_instance;
  function Unconfined_getInstance() {
    if (Unconfined_instance == null)
      new Unconfined();
    return Unconfined_instance;
  }
  function Waiter() {
  }
  function yield_0($completion) {
    var tmp$ret$0;
    $l$block_0: {
      var context = $completion.r8();
      ensureActive(context);
      var tmp = intercepted($completion);
      var tmp0_elvis_lhs = tmp instanceof DispatchedContinuation ? tmp : null;
      var tmp_0;
      if (tmp0_elvis_lhs == null) {
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      } else {
        tmp_0 = tmp0_elvis_lhs;
      }
      var cont = tmp_0;
      if (safeIsDispatchNeeded(cont.ly_1, context)) {
        cont.a17(context, Unit_instance);
      } else {
        var yieldContext = new YieldContext();
        cont.a17(context.ye(yieldContext), Unit_instance);
        if (yieldContext.y16_1) {
          tmp$ret$0 = yieldUndispatched(cont) ? get_COROUTINE_SUSPENDED() : Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = get_COROUTINE_SUSPENDED();
    }
    return tmp$ret$0;
  }
  var BufferOverflow_SUSPEND_instance;
  var BufferOverflow_DROP_OLDEST_instance;
  var BufferOverflow_DROP_LATEST_instance;
  var BufferOverflow_entriesInitialized;
  function BufferOverflow_initEntries() {
    if (BufferOverflow_entriesInitialized)
      return Unit_instance;
    BufferOverflow_entriesInitialized = true;
    BufferOverflow_SUSPEND_instance = new BufferOverflow('SUSPEND', 0);
    BufferOverflow_DROP_OLDEST_instance = new BufferOverflow('DROP_OLDEST', 1);
    BufferOverflow_DROP_LATEST_instance = new BufferOverflow('DROP_LATEST', 2);
  }
  function BufferOverflow(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function BufferOverflow_SUSPEND_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_SUSPEND_instance;
  }
  function BufferOverflow_DROP_OLDEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_OLDEST_instance;
  }
  function BufferOverflow_DROP_LATEST_getInstance() {
    BufferOverflow_initEntries();
    return BufferOverflow_DROP_LATEST_instance;
  }
  function get_NULL_SEGMENT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NULL_SEGMENT;
  }
  var NULL_SEGMENT;
  function get_SEGMENT_SIZE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SEGMENT_SIZE;
  }
  var SEGMENT_SIZE;
  function get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  }
  var EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS;
  function get_BUFFERED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return BUFFERED;
  }
  var BUFFERED;
  function get_IN_BUFFER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return IN_BUFFER;
  }
  var IN_BUFFER;
  function get_RESUMING_BY_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_RCV;
  }
  var RESUMING_BY_RCV;
  function get_RESUMING_BY_EB() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return RESUMING_BY_EB;
  }
  var RESUMING_BY_EB;
  function get_POISONED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return POISONED;
  }
  var POISONED;
  function get_DONE_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return DONE_RCV;
  }
  var DONE_RCV;
  function get_INTERRUPTED_SEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_SEND;
  }
  var INTERRUPTED_SEND;
  function get_INTERRUPTED_RCV() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return INTERRUPTED_RCV;
  }
  var INTERRUPTED_RCV;
  function get_CHANNEL_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CHANNEL_CLOSED;
  }
  var CHANNEL_CLOSED;
  function get_SUSPEND() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND;
  }
  var SUSPEND;
  function get_SUSPEND_NO_WAITER() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return SUSPEND_NO_WAITER;
  }
  var SUSPEND_NO_WAITER;
  function get_FAILED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return FAILED;
  }
  var FAILED;
  function get_NO_RECEIVE_RESULT() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_RECEIVE_RESULT;
  }
  var NO_RECEIVE_RESULT;
  function get_CLOSE_HANDLER_CLOSED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_CLOSED;
  }
  var CLOSE_HANDLER_CLOSED;
  function get_CLOSE_HANDLER_INVOKED() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return CLOSE_HANDLER_INVOKED;
  }
  var CLOSE_HANDLER_INVOKED;
  function get_NO_CLOSE_CAUSE() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return NO_CLOSE_CAUSE;
  }
  var NO_CLOSE_CAUSE;
  function setElementLazy($this, index, value) {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    $this.g17_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value = value;
  }
  function ChannelSegment(id, prev, channel, pointers) {
    Segment.call(this, id, prev, pointers);
    this.f17_1 = channel;
    this.g17_1 = atomicfu$AtomicRefArray$ofNulls(imul(get_SEGMENT_SIZE(), 2));
  }
  protoOf(ChannelSegment).h17 = function () {
    return ensureNotNull(this.f17_1);
  };
  protoOf(ChannelSegment).i17 = function () {
    return get_SEGMENT_SIZE();
  };
  protoOf(ChannelSegment).j17 = function (index, element) {
    setElementLazy(this, index, element);
  };
  protoOf(ChannelSegment).k17 = function (index) {
    return this.g17_1.atomicfu$get(imul(index, 2)).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).l17 = function (index) {
    // Inline function 'kotlin.also' call
    var this_0 = this.k17(index);
    this.m17(index);
    return this_0;
  };
  protoOf(ChannelSegment).m17 = function (index) {
    setElementLazy(this, index, null);
  };
  protoOf(ChannelSegment).n17 = function (index) {
    return this.g17_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value;
  };
  protoOf(ChannelSegment).o17 = function (index, value) {
    this.g17_1.atomicfu$get(imul(index, 2) + 1 | 0).kotlinx$atomicfu$value = value;
  };
  protoOf(ChannelSegment).p17 = function (index, from, to) {
    return this.g17_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$compareAndSet(from, to);
  };
  protoOf(ChannelSegment).q17 = function (index, update) {
    return this.g17_1.atomicfu$get(imul(index, 2) + 1 | 0).atomicfu$getAndSet(update);
  };
  protoOf(ChannelSegment).zy = function (index, cause, context) {
    var isSender = index >= get_SEGMENT_SIZE();
    var index_0 = isSender ? index - get_SEGMENT_SIZE() | 0 : index;
    var element = this.k17(index_0);
    $l$loop: while (true) {
      var cur = this.n17(index_0);
      var tmp;
      if (!(cur == null) ? isInterface(cur, Waiter) : false) {
        tmp = true;
      } else {
        tmp = cur instanceof WaiterEB;
      }
      if (tmp) {
        var update = isSender ? get_INTERRUPTED_SEND() : get_INTERRUPTED_RCV();
        if (this.p17(index_0, cur, update)) {
          this.m17(index_0);
          this.d18(index_0, !isSender);
          if (isSender) {
            var tmp0_safe_receiver = this.h17().s17_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp0_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        }
      } else {
        if (cur === get_INTERRUPTED_SEND() || cur === get_INTERRUPTED_RCV()) {
          this.m17(index_0);
          if (isSender) {
            var tmp1_safe_receiver = this.h17().s17_1;
            if (tmp1_safe_receiver == null)
              null;
            else {
              callUndeliveredElement(tmp1_safe_receiver, element, context);
            }
          }
          return Unit_instance;
        } else {
          if (cur === get_RESUMING_BY_EB() || cur === get_RESUMING_BY_RCV())
            continue $l$loop;
          else {
            if (cur === get_DONE_RCV() || cur === get_BUFFERED())
              return Unit_instance;
            else {
              if (cur === get_CHANNEL_CLOSED())
                return Unit_instance;
              else {
                // Inline function 'kotlin.error' call
                var message = 'unexpected state: ' + toString_0(cur);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  };
  protoOf(ChannelSegment).d18 = function (index, receiver) {
    if (receiver) {
      var tmp = this.h17();
      var tmp0 = this.xy_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      // Inline function 'kotlin.Long.plus' call
      var this_0 = multiply(tmp0, fromInt(other));
      var tmp$ret$1 = add(this_0, fromInt(index));
      tmp.e18(tmp$ret$1);
    }
    this.f18();
  };
  function onClosedHasNext($this) {
    $this.r18_1 = get_CHANNEL_CLOSED();
    var tmp0_elvis_lhs = $this.t18_1.u18();
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var cause = tmp;
    throw recoverStackTrace_0(cause);
  }
  function hasNextOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      $this.s18_1 = cancellable;
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var this_0 = $this.t18_1;
      var updCellResult = updateCellReceive(this_0, segment, index, r, $this);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension(this_0, $this, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, this_0.v18()) < 0) {
          segment.p18();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = this_0.y17_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if (this_0.w18()) {
              onClosedHasNextNoWaiterSuspend($this);
              break $l$block_0;
            }
            var r_0 = this_0.u17_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!equalsLong(segment_0.xy_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this_0, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive(this_0, segment_0, i, r_0, $this);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!($this == null) ? isInterface($this, Waiter) : false) ? $this : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this_0, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, this_0.v18()) < 0) {
                segment_0.p18();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.p18();
              $this.r18_1 = updCellResult_0;
              $this.s18_1 = null;
              var tmp0_safe_receiver = $this.t18_1.s17_1;
              cancellable.zx(true, tmp0_safe_receiver == null ? null : bindCancellationFun($this.t18_1, tmp0_safe_receiver, updCellResult_0));
            }
            break $l$block_0;
          }
        }
      } else {
        segment.p18();
        $this.r18_1 = updCellResult;
        $this.s18_1 = null;
        var tmp0_safe_receiver_0 = $this.t18_1.s17_1;
        cancellable.zx(true, tmp0_safe_receiver_0 == null ? null : bindCancellationFun($this.t18_1, tmp0_safe_receiver_0, updCellResult));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.sz();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ow();
  }
  function onClosedHasNextNoWaiterSuspend($this) {
    var cont = ensureNotNull($this.s18_1);
    $this.s18_1 = null;
    $this.r18_1 = get_CHANNEL_CLOSED();
    var cause = $this.t18_1.u18();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.w8(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.w8(tmp$ret$3);
    }
  }
  function $hasNextCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.f19_1 = _this__u8e3s4;
  }
  protoOf($hasNextCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 8;
            if (!(this.f19_1.r18_1 === get_NO_RECEIVE_RESULT()) && !(this.f19_1.r18_1 === get_CHANNEL_CLOSED())) {
              var tmp_0 = this;
              tmp_0.g19_1 = true;
              this.l8_1 = 11;
              continue $sm;
            } else {
              this.q19_1 = this.f19_1.t18_1;
              this.p19_1 = null;
              this.l8_1 = 1;
              continue $sm;
            }

          case 1:
            this.m19_1 = this.q19_1;
            this.n19_1 = this.p19_1;
            this.j19_1 = this.m19_1.y17_1.kotlinx$atomicfu$value;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.l8_1 = 9;
              continue $sm;
            }

            if (this.m19_1.w18()) {
              var tmp_1 = this;
              tmp_1.h19_1 = onClosedHasNext(this.f19_1);
              this.l8_1 = 10;
              continue $sm;
            } else {
              this.l8_1 = 3;
              continue $sm;
            }

          case 3:
            this.k19_1 = this.m19_1.u17_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.k19_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_2 = this;
            var tmp0_0 = this.k19_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_2.l19_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.j19_1.xy_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.m19_1, id, this.j19_1);
              if (tmp0_elvis_lhs == null) {
                this.l8_1 = 2;
                var tmp_3 = this;
                continue $sm;
              } else {
                this.o19_1 = tmp0_elvis_lhs;
                this.l8_1 = 4;
                continue $sm;
              }
            } else {
              this.l8_1 = 5;
              continue $sm;
            }

          case 4:
            this.j19_1 = this.o19_1;
            this.l8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.m19_1, this.j19_1, this.l19_1, this.k19_1, this.n19_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_4 = this;
              var tmp_5 = this.n19_1;
              var tmp1_safe_receiver = (!(tmp_5 == null) ? isInterface(tmp_5, Waiter) : false) ? tmp_5 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.m19_1, tmp1_safe_receiver, this.j19_1, this.l19_1);
              }
              this.j19_1;
              this.l19_1;
              this.k19_1;
              var message = 'unreachable';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.k19_1, this.m19_1.v18()) < 0) {
                  this.j19_1.p18();
                }
                this.l8_1 = 2;
                var tmp_6 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.j19_1;
                  var tmp2 = this.l19_1;
                  var r = this.k19_1;
                  this.l8_1 = 6;
                  suspendResult = hasNextOnNoWaiterSuspend(this.f19_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_7 = this;
                  this.j19_1.p18();
                  this.f19_1.r18_1 = updCellResult;
                  tmp_7.i19_1 = true;
                  this.l8_1 = 7;
                  continue $sm;
                }
              }
            }

          case 6:
            var tmp_8 = this;
            return suspendResult;
          case 7:
            this.h19_1 = this.i19_1;
            this.l8_1 = 10;
            continue $sm;
          case 8:
            throw this.o8_1;
          case 9:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 10;
            continue $sm;
          case 10:
            this.g19_1 = this.h19_1;
            this.l8_1 = 11;
            continue $sm;
          case 11:
            return this.g19_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 8) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function _get_bufferEndCounter__2d4hee($this) {
    return $this.v17_1.kotlinx$atomicfu$value;
  }
  function _get_isRendezvousOrUnlimited__3mdufi($this) {
    // Inline function 'kotlin.let' call
    var it = _get_bufferEndCounter__2d4hee($this);
    return equalsLong(it, new Long(0, 0)) || equalsLong(it, new Long(-1, 2147483647));
  }
  function onClosedSend($this, element, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    $l$block: {
      var tmp0_safe_receiver = $this.s17_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, $this.r19());
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = recoverStackTrace(tmp1_safe_receiver, cancellable);
        var tmp$ret$5 = _Result___init__impl__xyqfz8(createFailure(exception));
        cancellable.w8(tmp$ret$5);
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
      var exception_0 = $this.r19();
      // Inline function 'kotlin.Companion.failure' call
      var exception_1 = recoverStackTrace(exception_0, cancellable);
      var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(exception_1));
      cancellable.w8(tmp$ret$7);
    }
    return cancellable.ow();
  }
  function sendOnNoWaiterSuspend($this, segment, index, element, s, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImplOnNoWaiter' call
      switch (updateCellSend($this, segment, index, element, s, cancellable, false)) {
        case 0:
          segment.p18();
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.w8(tmp$ret$5);
          break;
        case 1:
          // Inline function 'kotlin.coroutines.resume' call

          // Inline function 'kotlin.Companion.success' call

          var tmp$ret$8 = _Result___init__impl__xyqfz8(Unit_instance);
          cancellable.w8(tmp$ret$8);
          break;
        case 2:
          prepareSenderForSuspension($this, cancellable, segment, index);
          break;
        case 4:
          if (compare(s, $this.s19()) < 0) {
            segment.p18();
          }

          onClosedSendOnNoWaiterSuspend($this, element, cancellable);
          break;
        case 5:
          segment.p18();
          $l$block_5: {
            // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
            var segment_0 = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
            $l$loop_0: while (true) {
              var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
              // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
              var s_0 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
              var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
              // Inline function 'kotlin.Long.div' call
              var other = get_SEGMENT_SIZE();
              var id = divide(s_0, fromInt(other));
              // Inline function 'kotlin.Long.rem' call
              var other_0 = get_SEGMENT_SIZE();
              var tmp$ret$13 = modulo(s_0, fromInt(other_0));
              var i = convertToInt(tmp$ret$13);
              if (!equalsLong(segment_0.xy_1, id)) {
                var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment_0);
                var tmp;
                if (tmp0_elvis_lhs == null) {
                  var tmp_0;
                  if (closed) {
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  } else {
                    continue $l$loop_0;
                  }
                } else {
                  tmp = tmp0_elvis_lhs;
                }
                segment_0 = tmp;
              }
              switch (access$updateCellSend($this, segment_0, i, element, s_0, cancellable, closed)) {
                case 0:
                  segment_0.p18();
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$17 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.w8(tmp$ret$17);
                  break $l$block_5;
                case 1:
                  // Inline function 'kotlin.coroutines.resume' call

                  // Inline function 'kotlin.Companion.success' call

                  var tmp$ret$20 = _Result___init__impl__xyqfz8(Unit_instance);
                  cancellable.w8(tmp$ret$20);
                  break $l$block_5;
                case 2:
                  if (closed) {
                    segment_0.f18();
                    onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                    break $l$block_5;
                  }

                  var tmp2_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
                  if (tmp2_safe_receiver == null)
                    null;
                  else {
                    access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment_0, i);
                  }

                  break $l$block_5;
                case 4:
                  if (compare(s_0, $this.s19()) < 0) {
                    segment_0.p18();
                  }

                  onClosedSendOnNoWaiterSuspend($this, element, cancellable);
                  break $l$block_5;
                case 5:
                  segment_0.p18();
                  continue $l$loop_0;
                case 3:
                  // Inline function 'kotlin.error' call

                  var message = 'unexpected';
                  throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }

          break;
        default:
          // Inline function 'kotlin.error' call

          var message_0 = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message_0));
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.sz();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ow();
  }
  function prepareSenderForSuspension($this, $receiver, segment, index) {
    $receiver.xz(segment, index + get_SEGMENT_SIZE() | 0);
  }
  function onClosedSendOnNoWaiterSuspend($this, element, cont) {
    var tmp0_safe_receiver = $this.s17_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      callUndeliveredElement(tmp0_safe_receiver, element, cont.r8());
    }
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = recoverStackTrace($this.r19(), cont);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.w8(tmp$ret$1);
  }
  function SendBroadcast() {
  }
  function updateCellSend($this, segment, index, element, s, waiter, closed) {
    segment.j17(index, element);
    if (closed)
      return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
    var state = segment.n17(index);
    if (state === null) {
      if (bufferOrRendezvousSend($this, s)) {
        if (segment.p17(index, null, get_BUFFERED())) {
          return 1;
        }
      } else {
        if (waiter == null) {
          return 3;
        } else {
          if (segment.p17(index, null, waiter))
            return 2;
        }
      }
    } else {
      if (isInterface(state, Waiter)) {
        segment.m17(index);
        var tmp;
        if (tryResumeReceiver($this, state, element)) {
          segment.o17(index, get_DONE_RCV());
          $this.t19();
          tmp = 0;
        } else {
          if (!(segment.q17(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.d18(index, true);
          }
          tmp = 5;
        }
        return tmp;
      }
    }
    return updateCellSendSlow($this, segment, index, element, s, waiter, closed);
  }
  function updateCellSendSlow($this, segment, index, element, s, waiter, closed) {
    while (true) {
      var state = segment.n17(index);
      if (state === null) {
        if (bufferOrRendezvousSend($this, s) && !closed) {
          if (segment.p17(index, null, get_BUFFERED())) {
            return 1;
          }
        } else {
          if (closed) {
            if (segment.p17(index, null, get_INTERRUPTED_SEND())) {
              segment.d18(index, false);
              return 4;
            }
          } else if (waiter == null)
            return 3;
          else if (segment.p17(index, null, waiter))
            return 2;
        }
      } else if (state === get_IN_BUFFER()) {
        if (segment.p17(index, state, get_BUFFERED())) {
          return 1;
        }
      } else if (state === get_INTERRUPTED_RCV()) {
        segment.m17(index);
        return 5;
      } else if (state === get_POISONED()) {
        segment.m17(index);
        return 5;
      } else if (state === get_CHANNEL_CLOSED()) {
        segment.m17(index);
        completeCloseOrCancel($this);
        return 4;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        segment.m17(index);
        var tmp;
        if (state instanceof WaiterEB) {
          tmp = state.u19_1;
        } else {
          tmp = state;
        }
        var receiver = tmp;
        var tmp_0;
        if (tryResumeReceiver($this, receiver, element)) {
          segment.o17(index, get_DONE_RCV());
          $this.t19();
          tmp_0 = 0;
        } else {
          if (!(segment.q17(index, get_INTERRUPTED_RCV()) === get_INTERRUPTED_RCV())) {
            segment.d18(index, true);
          }
          tmp_0 = 5;
        }
        return tmp_0;
      }
    }
  }
  function shouldSendSuspend0($this, curSendersAndCloseStatus) {
    if (_get_isClosedForSend0__kxgf9m($this, curSendersAndCloseStatus))
      return false;
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var tmp$ret$0 = bitwiseAnd(curSendersAndCloseStatus, new Long(-1, 268435455));
    return !bufferOrRendezvousSend($this, tmp$ret$0);
  }
  function bufferOrRendezvousSend($this, curSenders) {
    var tmp;
    if (compare(curSenders, _get_bufferEndCounter__2d4hee($this)) < 0) {
      tmp = true;
    } else {
      var tmp0 = $this.s19();
      // Inline function 'kotlin.Long.plus' call
      var other = $this.r17_1;
      var tmp$ret$0 = add(tmp0, fromInt(other));
      tmp = compare(curSenders, tmp$ret$0) < 0;
    }
    return tmp;
  }
  function tryResumeReceiver($this, $receiver, element) {
    var tmp;
    if (isInterface($receiver, SelectInstance)) {
      tmp = $receiver.z19($this, element);
    } else {
      if ($receiver instanceof ReceiveCatching) {
        if (!($receiver instanceof ReceiveCatching))
          THROW_CCE();
        var tmp_0 = Companion_getInstance_0().x19(element);
        var tmp1_safe_receiver = $this.s17_1;
        tmp = tryResume0($receiver.y19_1, new ChannelResult(tmp_0), tmp1_safe_receiver == null ? null : bindCancellationFunResult($this, tmp1_safe_receiver));
      } else {
        if ($receiver instanceof BufferedChannelIterator) {
          if (!($receiver instanceof BufferedChannelIterator))
            THROW_CCE();
          tmp = $receiver.v19(element);
        } else {
          if (isInterface($receiver, CancellableContinuation)) {
            if (!isInterface($receiver, CancellableContinuation))
              THROW_CCE();
            var tmp2_safe_receiver = $this.s17_1;
            tmp = tryResume0($receiver, element, tmp2_safe_receiver == null ? null : bindCancellationFun_0($this, tmp2_safe_receiver));
          } else {
            // Inline function 'kotlin.error' call
            var message = 'Unexpected receiver type: ' + toString($receiver);
            throw IllegalStateException_init_$Create$(toString(message));
          }
        }
      }
    }
    return tmp;
  }
  function receiveOnNoWaiterSuspend($this, segment, index, r, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImplOnNoWaiter' call
      var updCellResult = updateCellReceive($this, segment, index, r, cancellable);
      if (updCellResult === get_SUSPEND()) {
        prepareReceiverForSuspension($this, cancellable, segment, index);
      } else if (updCellResult === get_FAILED()) {
        if (compare(r, $this.v18()) < 0) {
          segment.p18();
        }
        $l$block_0: {
          // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
          var segment_0 = $this.y17_1.kotlinx$atomicfu$value;
          $l$loop_0: while (true) {
            if ($this.w18()) {
              onClosedReceiveOnNoWaiterSuspend($this, cancellable);
              break $l$block_0;
            }
            var r_0 = $this.u17_1.atomicfu$getAndIncrement$long();
            // Inline function 'kotlin.Long.div' call
            var other = get_SEGMENT_SIZE();
            var id = divide(r_0, fromInt(other));
            // Inline function 'kotlin.Long.rem' call
            var other_0 = get_SEGMENT_SIZE();
            var tmp$ret$6 = modulo(r_0, fromInt(other_0));
            var i = convertToInt(tmp$ret$6);
            if (!equalsLong(segment_0.xy_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive($this, id, segment_0);
              var tmp;
              if (tmp0_elvis_lhs == null) {
                continue $l$loop_0;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              segment_0 = tmp;
            }
            var updCellResult_0 = updateCellReceive($this, segment_0, i, r_0, cancellable);
            if (updCellResult_0 === get_SUSPEND()) {
              var tmp1_safe_receiver = (!(cancellable == null) ? isInterface(cancellable, Waiter) : false) ? cancellable : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension($this, tmp1_safe_receiver, segment_0, i);
              }
            } else if (updCellResult_0 === get_FAILED()) {
              if (compare(r_0, $this.v18()) < 0) {
                segment_0.p18();
              }
              continue $l$loop_0;
            } else if (updCellResult_0 === get_SUSPEND_NO_WAITER()) {
              // Inline function 'kotlin.error' call
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              segment_0.p18();
              var tmp0_safe_receiver = $this.s17_1;
              var onCancellation = tmp0_safe_receiver == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver);
              cancellable.zx(updCellResult_0, onCancellation);
            }
            break $l$block_0;
          }
        }
      } else {
        segment.p18();
        var tmp0_safe_receiver_0 = $this.s17_1;
        var onCancellation_0 = tmp0_safe_receiver_0 == null ? null : bindCancellationFun_0($this, tmp0_safe_receiver_0);
        cancellable.zx(updCellResult, onCancellation_0);
      }
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.sz();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ow();
  }
  function prepareReceiverForSuspension($this, $receiver, segment, index) {
    $this.a1a();
    $receiver.xz(segment, index);
  }
  function onClosedReceiveOnNoWaiterSuspend($this, cont) {
    // Inline function 'kotlin.coroutines.resumeWithException' call
    // Inline function 'kotlin.Companion.failure' call
    var exception = _get_receiveException__foorc1($this);
    var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
    cont.w8(tmp$ret$1);
  }
  function updateCellReceive($this, segment, index, r, waiter) {
    var state = segment.n17(index);
    if (state === null) {
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var this_0 = $this.t17_1.kotlinx$atomicfu$value;
      var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
      if (compare(r, senders) >= 0) {
        if (waiter === null) {
          return get_SUSPEND_NO_WAITER();
        }
        if (segment.p17(index, state, waiter)) {
          expandBuffer($this);
          return get_SUSPEND();
        }
      }
    } else if (state === get_BUFFERED())
      if (segment.p17(index, state, get_DONE_RCV())) {
        expandBuffer($this);
        return segment.l17(index);
      }
    return updateCellReceiveSlow($this, segment, index, r, waiter);
  }
  function updateCellReceiveSlow($this, segment, index, r, waiter) {
    $l$loop: while (true) {
      var state = segment.n17(index);
      if (state === null || state === get_IN_BUFFER()) {
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var this_0 = $this.t17_1.kotlinx$atomicfu$value;
        var senders = bitwiseAnd(this_0, new Long(-1, 268435455));
        if (compare(r, senders) < 0) {
          if (segment.p17(index, state, get_POISONED())) {
            expandBuffer($this);
            return get_FAILED();
          }
        } else {
          if (waiter === null) {
            return get_SUSPEND_NO_WAITER();
          }
          if (segment.p17(index, state, waiter)) {
            expandBuffer($this);
            return get_SUSPEND();
          }
        }
      } else if (state === get_BUFFERED()) {
        if (segment.p17(index, state, get_DONE_RCV())) {
          expandBuffer($this);
          return segment.l17(index);
        }
      } else if (state === get_INTERRUPTED_SEND())
        return get_FAILED();
      else if (state === get_POISONED())
        return get_FAILED();
      else if (state === get_CHANNEL_CLOSED()) {
        expandBuffer($this);
        return get_FAILED();
      } else if (state === get_RESUMING_BY_EB())
        continue $l$loop;
      else {
        if (segment.p17(index, state, get_RESUMING_BY_RCV())) {
          var helpExpandBuffer = state instanceof WaiterEB;
          var tmp;
          if (state instanceof WaiterEB) {
            tmp = state.u19_1;
          } else {
            tmp = state;
          }
          var sender = tmp;
          var tmp_0;
          if (tryResumeSender($this, sender, segment, index)) {
            segment.o17(index, get_DONE_RCV());
            expandBuffer($this);
            tmp_0 = segment.l17(index);
          } else {
            segment.o17(index, get_INTERRUPTED_SEND());
            segment.d18(index, false);
            if (helpExpandBuffer) {
              expandBuffer($this);
            }
            tmp_0 = get_FAILED();
          }
          return tmp_0;
        }
      }
    }
  }
  function tryResumeSender($this, $receiver, segment, index) {
    var tmp;
    if (isInterface($receiver, CancellableContinuation)) {
      if (!isInterface($receiver, CancellableContinuation))
        THROW_CCE();
      tmp = tryResume0($receiver, Unit_instance);
    } else {
      if (isInterface($receiver, SelectInstance)) {
        if (!($receiver instanceof SelectImplementation))
          THROW_CCE();
        var trySelectResult = $receiver.i1a($this, Unit_instance);
        if (trySelectResult === TrySelectDetailedResult_REREGISTER_getInstance()) {
          segment.m17(index);
        }
        tmp = trySelectResult === TrySelectDetailedResult_SUCCESSFUL_getInstance();
      } else {
        if ($receiver instanceof SendBroadcast) {
          tmp = tryResume0($receiver.b1a_1, true);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'Unexpected waiter: ' + toString($receiver);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp;
  }
  function expandBuffer($this) {
    if (_get_isRendezvousOrUnlimited__3mdufi($this))
      return Unit_instance;
    var segment = $this.z17_1.kotlinx$atomicfu$value;
    try_again: while (true) {
      var b = $this.v17_1.atomicfu$getAndIncrement$long();
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(b, fromInt(other));
      var s = $this.v18();
      if (compare(s, b) <= 0) {
        if (compare(segment.xy_1, id) < 0 && !(segment.l18() == null)) {
          moveSegmentBufferEndToSpecifiedOrLast($this, id, segment);
        }
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      }
      if (!equalsLong(segment.xy_1, id)) {
        var tmp0_elvis_lhs = findSegmentBufferEnd($this, id, segment, b);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue try_again;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(b, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (updateCellExpandBuffer($this, segment, i, b)) {
        incCompletedExpandBufferAttempts($this);
        return Unit_instance;
      } else {
        incCompletedExpandBufferAttempts($this);
        continue try_again;
      }
    }
  }
  function updateCellExpandBuffer($this, segment, index, b) {
    var state = segment.n17(index);
    if (!(state == null) ? isInterface(state, Waiter) : false) {
      if (compare(b, $this.u17_1.kotlinx$atomicfu$value) >= 0) {
        if (segment.p17(index, state, get_RESUMING_BY_EB())) {
          var tmp;
          if (tryResumeSender($this, state, segment, index)) {
            segment.o17(index, get_BUFFERED());
            tmp = true;
          } else {
            segment.o17(index, get_INTERRUPTED_SEND());
            segment.d18(index, false);
            tmp = false;
          }
          return tmp;
        }
      }
    }
    return updateCellExpandBufferSlow($this, segment, index, b);
  }
  function updateCellExpandBufferSlow($this, segment, index, b) {
    $l$loop: while (true) {
      var state = segment.n17(index);
      if (!(state == null) ? isInterface(state, Waiter) : false) {
        if (compare(b, $this.u17_1.kotlinx$atomicfu$value) < 0) {
          if (segment.p17(index, state, new WaiterEB(state)))
            return true;
        } else {
          if (segment.p17(index, state, get_RESUMING_BY_EB())) {
            var tmp;
            if (tryResumeSender($this, state, segment, index)) {
              segment.o17(index, get_BUFFERED());
              tmp = true;
            } else {
              segment.o17(index, get_INTERRUPTED_SEND());
              segment.d18(index, false);
              tmp = false;
            }
            return tmp;
          }
        }
      } else {
        if (state === get_INTERRUPTED_SEND())
          return false;
        else {
          if (state === null) {
            if (segment.p17(index, state, get_IN_BUFFER()))
              return true;
          } else {
            if (state === get_BUFFERED())
              return true;
            else {
              if (state === get_POISONED() || state === get_DONE_RCV() || state === get_INTERRUPTED_RCV())
                return true;
              else {
                if (state === get_CHANNEL_CLOSED())
                  return true;
                else {
                  if (state === get_RESUMING_BY_RCV())
                    continue $l$loop;
                  else {
                    // Inline function 'kotlin.error' call
                    var message = 'Unexpected cell state: ' + toString(state);
                    throw IllegalStateException_init_$Create$(toString(message));
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  function incCompletedExpandBufferAttempts($this, nAttempts) {
    nAttempts = nAttempts === VOID ? new Long(1, 0) : nAttempts;
    // Inline function 'kotlin.also' call
    var this_0 = $this.w17_1.atomicfu$addAndGet$long(nAttempts);
    // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
    if (!equalsLong(bitwiseAnd(this_0, new Long(0, 1073741824)), new Long(0, 0))) {
      $l$loop: while (true) {
        // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
        var this_1 = $this.w17_1.kotlinx$atomicfu$value;
        if (!!equalsLong(bitwiseAnd(this_1, new Long(0, 1073741824)), new Long(0, 0))) {
          break $l$loop;
        }
      }
    }
  }
  function registerSelectForReceive($this, select, ignoredParam) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.receiveImpl' call
      var segment = $this.y17_1.kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        if ($this.w18()) {
          onClosedSelectOnReceive($this, select);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        var r = $this.u17_1.atomicfu$getAndIncrement$long();
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(r, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(r, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.xy_1, id)) {
          var tmp0_elvis_lhs = findSegmentReceive($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            continue $l$loop_0;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        var updCellResult = updateCellReceive($this, segment, i, r, select);
        if (updCellResult === get_SUSPEND()) {
          var tmp1_safe_receiver = (!(select == null) ? isInterface(select, Waiter) : false) ? select : null;
          if (tmp1_safe_receiver == null)
            null;
          else {
            prepareReceiverForSuspension($this, tmp1_safe_receiver, segment, i);
          }
        } else if (updCellResult === get_FAILED()) {
          if (compare(r, $this.v18()) < 0) {
            segment.p18();
          }
          continue $l$loop_0;
        } else if (updCellResult === get_SUSPEND_NO_WAITER()) {
          // Inline function 'kotlin.error' call
          var message = 'unexpected';
          throw IllegalStateException_init_$Create$(toString(message));
        } else {
          segment.p18();
          select.j1a(updCellResult);
        }
        tmp$ret$0 = Unit_instance;
        break $l$block_0;
      }
    }
    return tmp$ret$0;
  }
  function onClosedSelectOnReceive($this, select) {
    select.j1a(get_CHANNEL_CLOSED());
  }
  function processResultSelectReceiveCatching($this, ignoredParam, selectResult) {
    return new ChannelResult(selectResult === get_CHANNEL_CLOSED() ? Companion_getInstance_0().k1a($this.u18()) : Companion_getInstance_0().x19(selectResult));
  }
  function BufferedChannelIterator($outer) {
    this.t18_1 = $outer;
    this.r18_1 = get_NO_RECEIVE_RESULT();
    this.s18_1 = null;
  }
  protoOf(BufferedChannelIterator).l1a = function ($completion) {
    var tmp = new $hasNextCOROUTINE$(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(BufferedChannelIterator).xz = function (segment, index) {
    var tmp0_safe_receiver = this.s18_1;
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.xz(segment, index);
    }
  };
  protoOf(BufferedChannelIterator).k = function () {
    var result = this.r18_1;
    // Inline function 'kotlin.check' call
    if (!!(result === get_NO_RECEIVE_RESULT())) {
      var message = '`hasNext()` has not been invoked';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    this.r18_1 = get_NO_RECEIVE_RESULT();
    if (result === get_CHANNEL_CLOSED())
      throw recoverStackTrace_0(_get_receiveException__foorc1(this.t18_1));
    return result;
  };
  protoOf(BufferedChannelIterator).v19 = function (element) {
    var cont = ensureNotNull(this.s18_1);
    this.s18_1 = null;
    this.r18_1 = element;
    var tmp0_safe_receiver = this.t18_1.s17_1;
    return tryResume0(cont, true, tmp0_safe_receiver == null ? null : bindCancellationFun(this.t18_1, tmp0_safe_receiver, element));
  };
  protoOf(BufferedChannelIterator).m1a = function () {
    var cont = ensureNotNull(this.s18_1);
    this.s18_1 = null;
    this.r18_1 = get_CHANNEL_CLOSED();
    var cause = this.t18_1.u18();
    if (cause == null) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      cont.w8(tmp$ret$1);
    } else {
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = recoverStackTrace(cause, cont);
      var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
      cont.w8(tmp$ret$3);
    }
  };
  function _get_receiveException__foorc1($this) {
    var tmp0_elvis_lhs = $this.u18();
    return tmp0_elvis_lhs == null ? new ClosedReceiveChannelException('Channel was closed') : tmp0_elvis_lhs;
  }
  function invokeCloseHandler($this) {
    var tmp0 = $this.c18_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.getAndUpdate' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        if (cur === null) {
          tmp = get_CLOSE_HANDLER_CLOSED();
        } else {
          tmp = get_CLOSE_HANDLER_INVOKED();
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = cur;
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = tmp$ret$0;
    var tmp_0;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp_0 = tmp0_elvis_lhs;
    }
    var closeHandler = tmp_0;
    if (typeof closeHandler !== 'function')
      THROW_CCE();
    closeHandler($this.u18());
  }
  function markClosed($this) {
    var tmp0 = $this.t17_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        var tmp;
        switch (convertToInt(shiftRight(cur, 60))) {
          case 0:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$3, 2);
            break;
          case 1:
            // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

            var tmp$ret$4 = bitwiseAnd(cur, new Long(-1, 268435455));
            tmp = constructSendersAndCloseStatus(tmp$ret$4, 3);
            break;
          default:
            return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancelled($this) {
    var tmp0 = $this.t17_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var tmp$ret$2 = bitwiseAnd(cur, new Long(-1, 268435455));
        var upd = constructSendersAndCloseStatus(tmp$ret$2, 3);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function markCancellationStarted($this) {
    var tmp0 = $this.t17_1;
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        var tmp;
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
        if (convertToInt(shiftRight(cur, 60)) === 0) {
          // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
          var tmp$ret$3 = bitwiseAnd(cur, new Long(-1, 268435455));
          tmp = constructSendersAndCloseStatus(tmp$ret$3, 1);
        } else {
          return Unit_instance;
        }
        var upd = tmp;
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          tmp$ret$0 = Unit_instance;
          break $l$block;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  }
  function completeCloseOrCancel($this) {
    $this.n1a();
  }
  function completeClose($this, sendersCur) {
    var lastSegment = closeLinkedList($this);
    if ($this.p1a()) {
      var lastBufferedCellGlobalIndex = markAllEmptyCellsAsClosed($this, lastSegment);
      if (!equalsLong(lastBufferedCellGlobalIndex, new Long(-1, -1))) {
        $this.o1a(lastBufferedCellGlobalIndex);
      }
    }
    cancelSuspendedReceiveRequests($this, lastSegment, sendersCur);
    return lastSegment;
  }
  function completeCancel($this, sendersCur) {
    var lastSegment = completeClose($this, sendersCur);
    removeUnprocessedElements($this, lastSegment);
  }
  function closeLinkedList($this) {
    var lastSegment = $this.z17_1.kotlinx$atomicfu$value;
    // Inline function 'kotlin.let' call
    var it = $this.x17_1.kotlinx$atomicfu$value;
    if (compare(it.xy_1, lastSegment.xy_1) > 0)
      lastSegment = it;
    // Inline function 'kotlin.let' call
    var it_0 = $this.y17_1.kotlinx$atomicfu$value;
    if (compare(it_0.xy_1, lastSegment.xy_1) > 0)
      lastSegment = it_0;
    return close(lastSegment);
  }
  function markAllEmptyCellsAsClosed($this, lastSegment) {
    var segment = lastSegment;
    while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.xy_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          if (compare(globalIndex, $this.s19()) < 0)
            return new Long(-1, -1);
          cell_update: while (true) {
            var state = segment.n17(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.p17(index, state, get_CHANNEL_CLOSED())) {
                segment.f18();
                break cell_update;
              }
            } else if (state === get_BUFFERED())
              return globalIndex;
            else
              break cell_update;
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.o18();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return new Long(-1, -1);
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
  }
  function removeUnprocessedElements($this, lastSegment) {
    var onUndeliveredElement = $this.s17_1;
    var undeliveredElementException = null;
    var suspendedSenders = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (true) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.xy_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var globalIndex = add(this_0, fromInt(index));
          update_cell: while (true) {
            var state = segment.n17(index);
            if (state === get_DONE_RCV())
              break process_segments;
            else {
              if (state === get_BUFFERED()) {
                if (compare(globalIndex, $this.s19()) < 0)
                  break process_segments;
                if (segment.p17(index, state, get_CHANNEL_CLOSED())) {
                  if (!(onUndeliveredElement == null)) {
                    var element = segment.k17(index);
                    undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element, undeliveredElementException);
                  }
                  segment.m17(index);
                  segment.f18();
                  break update_cell;
                }
              } else {
                if (state === get_IN_BUFFER() || state === null) {
                  if (segment.p17(index, state, get_CHANNEL_CLOSED())) {
                    segment.f18();
                    break update_cell;
                  }
                } else {
                  var tmp;
                  if (isInterface(state, Waiter)) {
                    tmp = true;
                  } else {
                    tmp = state instanceof WaiterEB;
                  }
                  if (tmp) {
                    if (compare(globalIndex, $this.s19()) < 0)
                      break process_segments;
                    var tmp_0;
                    if (state instanceof WaiterEB) {
                      tmp_0 = state.u19_1;
                    } else {
                      tmp_0 = isInterface(state, Waiter) ? state : THROW_CCE();
                    }
                    var sender = tmp_0;
                    if (segment.p17(index, state, get_CHANNEL_CLOSED())) {
                      if (!(onUndeliveredElement == null)) {
                        var element_0 = segment.k17(index);
                        undeliveredElementException = callUndeliveredElementCatchingException(onUndeliveredElement, element_0, undeliveredElementException);
                      }
                      suspendedSenders = InlineList__plus_impl_nuetvo(suspendedSenders, sender);
                      segment.m17(index);
                      segment.f18();
                      break update_cell;
                    }
                  } else {
                    if (state === get_RESUMING_BY_EB() || state === get_RESUMING_BY_RCV())
                      break process_segments;
                    else {
                      if (state === get_RESUMING_BY_EB())
                        continue update_cell;
                      else {
                        break update_cell;
                      }
                    }
                  }
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      var tmp0_elvis_lhs = segment.o18();
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        break process_segments;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      segment = tmp_1;
    }
    var tmp0_0 = suspendedSenders;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp_2 = access$_get_holder__kkflen(tmp0_0);
          var it = !(tmp_2 == null) ? tmp_2 : THROW_CCE();
          resumeSenderOnCancelledChannel($this, it);
        } else {
          var tmp_3 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_3 instanceof ArrayList ? tmp_3 : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.m(i);
              resumeSenderOnCancelledChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
    var tmp1_safe_receiver = undeliveredElementException;
    if (tmp1_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      throw tmp1_safe_receiver;
    }
  }
  function cancelSuspendedReceiveRequests($this, lastSegment, sendersCounter) {
    var suspendedReceivers = _InlineList___init__impl__z8n56();
    var segment = lastSegment;
    process_segments: while (!(segment == null)) {
      var inductionVariable = get_SEGMENT_SIZE() - 1 | 0;
      if (0 <= inductionVariable)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + -1 | 0;
          var tmp0 = segment.xy_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_0 = multiply(tmp0, fromInt(other));
          var tmp$ret$1 = add(this_0, fromInt(index));
          if (compare(tmp$ret$1, sendersCounter) < 0)
            break process_segments;
          cell_update: while (true) {
            var state = segment.n17(index);
            if (state === null || state === get_IN_BUFFER()) {
              if (segment.p17(index, state, get_CHANNEL_CLOSED())) {
                segment.f18();
                break cell_update;
              }
            } else {
              if (state instanceof WaiterEB) {
                if (segment.p17(index, state, get_CHANNEL_CLOSED())) {
                  suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state.u19_1);
                  segment.d18(index, true);
                  break cell_update;
                }
              } else {
                if (isInterface(state, Waiter)) {
                  if (segment.p17(index, state, get_CHANNEL_CLOSED())) {
                    suspendedReceivers = InlineList__plus_impl_nuetvo(suspendedReceivers, state);
                    segment.d18(index, true);
                    break cell_update;
                  }
                } else {
                  break cell_update;
                }
              }
            }
          }
        }
         while (0 <= inductionVariable);
      segment = segment.o18();
    }
    var tmp0_0 = suspendedReceivers;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.InlineList.forEachReversed' call
      var tmp0_subject = access$_get_holder__kkflen(tmp0_0);
      if (tmp0_subject == null) {
        break $l$block;
      } else {
        if (!(tmp0_subject instanceof ArrayList)) {
          var tmp = access$_get_holder__kkflen(tmp0_0);
          var it = !(tmp == null) ? tmp : THROW_CCE();
          resumeReceiverOnClosedChannel($this, it);
        } else {
          var tmp_0 = access$_get_holder__kkflen(tmp0_0);
          var list = tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE();
          var inductionVariable_0 = list.l() - 1 | 0;
          if (0 <= inductionVariable_0)
            do {
              var i = inductionVariable_0;
              inductionVariable_0 = inductionVariable_0 + -1 | 0;
              var it_0 = list.m(i);
              resumeReceiverOnClosedChannel($this, it_0);
            }
             while (0 <= inductionVariable_0);
        }
      }
    }
  }
  function resumeReceiverOnClosedChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, true);
  }
  function resumeSenderOnCancelledChannel($this, $receiver) {
    return resumeWaiterOnClosedChannel($this, $receiver, false);
  }
  function resumeWaiterOnClosedChannel($this, $receiver, receiver) {
    if ($receiver instanceof SendBroadcast) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $receiver.b1a_1;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(false);
      this_0.w8(tmp$ret$1);
    } else {
      if (isInterface($receiver, CancellableContinuation)) {
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var exception = receiver ? _get_receiveException__foorc1($this) : $this.r19();
        var tmp$ret$3 = _Result___init__impl__xyqfz8(createFailure(exception));
        $receiver.w8(tmp$ret$3);
      } else {
        if ($receiver instanceof ReceiveCatching) {
          var tmp0 = $receiver.y19_1;
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = new ChannelResult(Companion_getInstance_0().k1a($this.u18()));
          var tmp$ret$5 = _Result___init__impl__xyqfz8(value);
          tmp0.w8(tmp$ret$5);
        } else {
          if ($receiver instanceof BufferedChannelIterator) {
            $receiver.m1a();
          } else {
            if (isInterface($receiver, SelectInstance))
              $receiver.z19($this, get_CHANNEL_CLOSED());
            else {
              // Inline function 'kotlin.error' call
              var message = 'Unexpected waiter: ' + toString($receiver);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  }
  function _get_isClosedForSend0__kxgf9m($this, $receiver) {
    return isClosed($this, $receiver, false);
  }
  function _get_isClosedForReceive0__f7qknl($this, $receiver) {
    return isClosed($this, $receiver, true);
  }
  function isClosed($this, sendersAndCloseStatusCur, isClosedForReceive) {
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var tmp;
    switch (convertToInt(shiftRight(sendersAndCloseStatusCur, 60))) {
      case 0:
        tmp = false;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeClose($this, tmp$ret$1);
        tmp = isClosedForReceive ? !$this.q1a() : true;
        break;
      case 3:
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call

        var tmp$ret$2 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        completeCancel($this, tmp$ret$2);
        tmp = true;
        break;
      default:
        // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call

        // Inline function 'kotlin.error' call

        var message = 'unexpected close status: ' + convertToInt(shiftRight(sendersAndCloseStatusCur, 60));
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function isCellNonEmpty($this, segment, index, globalIndex) {
    while (true) {
      var state = segment.n17(index);
      if (state === null || state === get_IN_BUFFER()) {
        if (segment.p17(index, state, get_POISONED())) {
          expandBuffer($this);
          return false;
        }
      } else if (state === get_BUFFERED())
        return true;
      else if (state === get_INTERRUPTED_SEND())
        return false;
      else if (state === get_CHANNEL_CLOSED())
        return false;
      else if (state === get_DONE_RCV())
        return false;
      else if (state === get_POISONED())
        return false;
      else if (state === get_RESUMING_BY_EB())
        return true;
      else if (state === get_RESUMING_BY_RCV())
        return false;
      else
        return equalsLong(globalIndex, $this.s19());
    }
  }
  function findSegmentSend($this, id, startFrom) {
    var tmp0 = $this.x17_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.xy_1, tmp2.xy_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.h18()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.i18()) {
                  cur.l3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.i18()) {
                tmp2.l3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.xy_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$6 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$6, $this.s19()) < 0) {
        startFrom.p18();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.xy_1, id) > 0) {
        var tmp0_1 = segment.xy_1;
        // Inline function 'kotlin.Long.times' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_1, fromInt(other_0));
        updateSendersCounterIfLower($this, tmp$ret$7);
        var tmp0_2 = segment.xy_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$8 = multiply(tmp0_2, fromInt(other_1));
        if (compare(tmp$ret$8, $this.s19()) < 0) {
          segment.p18();
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function findSegmentReceive($this, id, startFrom) {
    var tmp0 = $this.y17_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.xy_1, tmp2.xy_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.h18()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.i18()) {
                  cur.l3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.i18()) {
                tmp2.l3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      var tmp0_0 = startFrom.xy_1;
      // Inline function 'kotlin.Long.times' call
      var other = get_SEGMENT_SIZE();
      var tmp$ret$6 = multiply(tmp0_0, fromInt(other));
      if (compare(tmp$ret$6, $this.v18()) < 0) {
        startFrom.p18();
      }
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (!_get_isRendezvousOrUnlimited__3mdufi($this)) {
        var tmp0_1 = _get_bufferEndCounter__2d4hee($this);
        // Inline function 'kotlin.Long.div' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$7 = divide(tmp0_1, fromInt(other_0));
        tmp_1 = compare(id, tmp$ret$7) <= 0;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        var tmp0_2 = $this.z17_1;
        $l$block_5: {
          // Inline function 'kotlinx.coroutines.internal.moveForward' call
          // Inline function 'kotlinx.atomicfu.loop' call
          while (true) {
            var cur_0 = tmp0_2.kotlinx$atomicfu$value;
            if (compare(cur_0.xy_1, segment.xy_1) >= 0) {
              break $l$block_5;
            }
            if (!segment.h18()) {
              break $l$block_5;
            }
            if (tmp0_2.atomicfu$compareAndSet(cur_0, segment)) {
              if (cur_0.i18()) {
                cur_0.l3();
              }
              break $l$block_5;
            }
            if (segment.i18()) {
              segment.l3();
            }
          }
        }
      }
      var tmp_2;
      if (compare(segment.xy_1, id) > 0) {
        var tmp0_3 = segment.xy_1;
        // Inline function 'kotlin.Long.times' call
        var other_1 = get_SEGMENT_SIZE();
        var tmp$ret$11 = multiply(tmp0_3, fromInt(other_1));
        updateReceiversCounterIfLower($this, tmp$ret$11);
        var tmp0_4 = segment.xy_1;
        // Inline function 'kotlin.Long.times' call
        var other_2 = get_SEGMENT_SIZE();
        var tmp$ret$12 = multiply(tmp0_4, fromInt(other_2));
        if (compare(tmp$ret$12, $this.v18()) < 0) {
          segment.p18();
        }
        tmp_2 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_2 = segment;
      }
      tmp_0 = tmp_2;
    }
    return tmp_0;
  }
  function findSegmentBufferEnd($this, id, startFrom, currentBufferEndCounter) {
    var tmp0 = $this.z17_1;
    var tmp6 = createSegmentFunction();
    var tmp$ret$0;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(startFrom, id, tmp6);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$1;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$2;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.xy_1, tmp2.xy_1) >= 0) {
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (!tmp2.h18()) {
                tmp$ret$1 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.i18()) {
                  cur.l3();
                }
                tmp$ret$1 = true;
                break $l$block_1;
              }
              if (tmp2.i18()) {
                tmp2.l3();
              }
            }
            tmp$ret$1 = tmp$ret$2;
          }
          tmp = tmp$ret$1;
        }
        if (tmp) {
          tmp$ret$0 = s;
          break $l$block_2;
        }
      }
    }
    // Inline function 'kotlin.let' call
    var it = tmp$ret$0;
    var tmp_0;
    if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(it)) {
      completeCloseOrCancel($this);
      moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom);
      incCompletedExpandBufferAttempts($this);
      tmp_0 = null;
    } else {
      var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(it);
      var tmp_1;
      if (compare(segment.xy_1, id) > 0) {
        // Inline function 'kotlin.Long.plus' call
        var tmp_2 = add(currentBufferEndCounter, fromInt(1));
        var tmp0_0 = segment.xy_1;
        // Inline function 'kotlin.Long.times' call
        var other = get_SEGMENT_SIZE();
        var tmp$ret$7 = multiply(tmp0_0, fromInt(other));
        if ($this.v17_1.atomicfu$compareAndSet(tmp_2, tmp$ret$7)) {
          var tmp0_1 = segment.xy_1;
          // Inline function 'kotlin.Long.times' call
          var other_0 = get_SEGMENT_SIZE();
          var tmp$ret$8 = multiply(tmp0_1, fromInt(other_0));
          incCompletedExpandBufferAttempts($this, subtract(tmp$ret$8, currentBufferEndCounter));
        } else {
          incCompletedExpandBufferAttempts($this);
        }
        tmp_1 = null;
      } else {
        // Inline function 'kotlinx.coroutines.assert' call
        tmp_1 = segment;
      }
      tmp_0 = tmp_1;
    }
    return tmp_0;
  }
  function moveSegmentBufferEndToSpecifiedOrLast($this, id, startFrom) {
    var segment = startFrom;
    $l$loop: while (compare(segment.xy_1, id) < 0) {
      var tmp0_elvis_lhs = segment.l18();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        break $l$loop;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      segment = tmp;
    }
    while (true) {
      $l$loop_0: while (segment.g18()) {
        var tmp1_elvis_lhs = segment.l18();
        var tmp_0;
        if (tmp1_elvis_lhs == null) {
          break $l$loop_0;
        } else {
          tmp_0 = tmp1_elvis_lhs;
        }
        segment = tmp_0;
      }
      var tmp0 = $this.z17_1;
      var tmp2 = segment;
      var tmp$ret$0;
      $l$block_1: {
        // Inline function 'kotlinx.coroutines.internal.moveForward' call
        var tmp$ret$1;
        // Inline function 'kotlinx.atomicfu.loop' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          if (compare(cur.xy_1, tmp2.xy_1) >= 0) {
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (!tmp2.h18()) {
            tmp$ret$0 = false;
            break $l$block_1;
          }
          if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
            if (cur.i18()) {
              cur.l3();
            }
            tmp$ret$0 = true;
            break $l$block_1;
          }
          if (tmp2.i18()) {
            tmp2.l3();
          }
        }
        tmp$ret$0 = tmp$ret$1;
      }
      if (tmp$ret$0)
        return Unit_instance;
    }
  }
  function updateSendersCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.t17_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
      var curCounter = bitwiseAnd(cur, new Long(-1, 268435455));
      if (compare(curCounter, value) >= 0)
        return Unit_instance;
      // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
      var tmp$ret$3 = convertToInt(shiftRight(cur, 60));
      var update = constructSendersAndCloseStatus(curCounter, tmp$ret$3);
      if ($this.t17_1.atomicfu$compareAndSet(cur, update))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function updateReceiversCounterIfLower($this, value) {
    var tmp$ret$0;
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = $this.u17_1;
    while (true) {
      var cur = this_0.kotlinx$atomicfu$value;
      if (compare(cur, value) >= 0)
        return Unit_instance;
      if ($this.u17_1.atomicfu$compareAndSet(cur, value))
        return Unit_instance;
    }
    return tmp$ret$0;
  }
  function bindCancellationFunResult($this, $receiver) {
    return BufferedChannel$onCancellationChannelResultImplDoNotCall$ref($this);
  }
  function onCancellationChannelResultImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.s17_1), ensureNotNull(ChannelResult__getOrNull_impl_f5e07h(element)), context);
  }
  function bindCancellationFun($this, $receiver, element) {
    return BufferedChannel$bindCancellationFun$lambda($receiver, element);
  }
  function bindCancellationFun_0($this, $receiver) {
    return BufferedChannel$onCancellationImplDoNotCall$ref($this);
  }
  function onCancellationImplDoNotCall($this, cause, element, context) {
    callUndeliveredElement(ensureNotNull($this.s17_1), element, context);
  }
  function access$_get_sendersAndCloseStatus__tvw29s($this) {
    return $this.t17_1;
  }
  function access$_get_sendSegment__111kgq($this) {
    return $this.x17_1;
  }
  function access$prepareSenderForSuspension($this, $receiver, segment, index) {
    return prepareSenderForSuspension($this, $receiver, segment, index);
  }
  function access$updateCellSend($this, segment, index, element, s, waiter, closed) {
    return updateCellSend($this, segment, index, element, s, waiter, closed);
  }
  function access$_get_isClosedForSend0__sm8f7a($this, $receiver) {
    return _get_isClosedForSend0__kxgf9m($this, $receiver);
  }
  function access$findSegmentSend($this, id, startFrom) {
    return findSegmentSend($this, id, startFrom);
  }
  function BufferedChannel$registerSelectForReceive$ref() {
    return constructCallableReference(function (p0, p1, p2) {
      registerSelectForReceive(p0, p1, p2);
      return Unit_instance;
    }, 3, 0, 1, 'registerSelectForReceive');
  }
  function BufferedChannel$processResultSelectReceiveCatching$ref() {
    return constructCallableReference(function (p0, p1, p2) {
      return processResultSelectReceiveCatching(p0, p1, p2);
    }, 3, 0, 2, 'processResultSelectReceiveCatching');
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda($element, this$0, $select) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      var tmp;
      if (!($element === get_CHANNEL_CLOSED())) {
        callUndeliveredElement(this$0.s17_1, $element, $select.r8());
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this$0) {
    return function (select, _unused_var__etf5q3, element) {
      return BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda$lambda(element, this$0, select);
    };
  }
  function BufferedChannel$onCancellationChannelResultImplDoNotCall$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      var tmp0 = p0;
      onCancellationChannelResultImplDoNotCall(tmp0, p0_0, p1.s1a_1, p2);
      return Unit_instance;
    }, 3, 0, 3, 'onCancellationChannelResultImplDoNotCall', [p0]);
  }
  function BufferedChannel$bindCancellationFun$lambda($this_bindCancellationFun, $element) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, context) {
      callUndeliveredElement($this_bindCancellationFun, $element, context);
      return Unit_instance;
    };
  }
  function BufferedChannel$onCancellationImplDoNotCall$ref(p0) {
    return constructCallableReference(function (p0_0, p1, p2) {
      var tmp0 = p0;
      onCancellationImplDoNotCall(tmp0, p0_0, p1, p2);
      return Unit_instance;
    }, 3, 0, 4, 'onCancellationImplDoNotCall', [p0]);
  }
  function $sendCOROUTINE$(_this__u8e3s4, element, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1b_1 = _this__u8e3s4;
    this.c1b_1 = element;
  }
  protoOf($sendCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 11;
            this.n1b_1 = this.b1b_1;
            this.m1b_1 = this.c1b_1;
            this.l1b_1 = null;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.f1b_1 = this.n1b_1;
            this.i1b_1 = this.m1b_1;
            this.g1b_1 = this.l1b_1;
            this.e1b_1 = access$_get_sendSegment__111kgq(this.f1b_1).kotlinx$atomicfu$value;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.l8_1 = 12;
              continue $sm;
            }

            var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this.f1b_1).atomicfu$getAndIncrement$long();
            var tmp_0 = this;
            tmp_0.h1b_1 = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
            this.j1b_1 = access$_get_isClosedForSend0__sm8f7a(this.f1b_1, sendersAndCloseStatusCur);
            var tmp0 = this.h1b_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.h1b_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.d1b_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.e1b_1.xy_1, id)) {
              var tmp0_elvis_lhs = access$findSegmentSend(this.f1b_1, id, this.e1b_1);
              if (tmp0_elvis_lhs == null) {
                if (this.j1b_1) {
                  this.l8_1 = 10;
                  suspendResult = onClosedSend(this.b1b_1, this.c1b_1, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  this.l8_1 = 2;
                  var tmp_2 = this;
                  continue $sm;
                }
              } else {
                this.k1b_1 = tmp0_elvis_lhs;
                this.l8_1 = 3;
                continue $sm;
              }
            } else {
              this.l8_1 = 4;
              continue $sm;
            }

          case 3:
            this.e1b_1 = this.k1b_1;
            this.l8_1 = 4;
            continue $sm;
          case 4:
            var tmp1_subject = access$updateCellSend(this.f1b_1, this.e1b_1, this.d1b_1, this.i1b_1, this.h1b_1, this.g1b_1, this.j1b_1);
            if (tmp1_subject === 0) {
              this.e1b_1.p18();
              this.l8_1 = 13;
              continue $sm;
            } else {
              if (tmp1_subject === 1) {
                this.l8_1 = 13;
                continue $sm;
              } else {
                if (tmp1_subject === 2) {
                  if (this.j1b_1) {
                    this.e1b_1.f18();
                    this.l8_1 = 9;
                    suspendResult = onClosedSend(this.b1b_1, this.c1b_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    this.l8_1 = 8;
                    continue $sm;
                  }
                } else {
                  if (tmp1_subject === 4) {
                    if (compare(this.h1b_1, this.f1b_1.s19()) < 0) {
                      this.e1b_1.p18();
                    }
                    this.l8_1 = 7;
                    suspendResult = onClosedSend(this.b1b_1, this.c1b_1, this);
                    if (suspendResult === get_COROUTINE_SUSPENDED()) {
                      return suspendResult;
                    }
                    continue $sm;
                  } else {
                    if (tmp1_subject === 5) {
                      this.e1b_1.p18();
                      this.l8_1 = 2;
                      continue $sm;
                    } else {
                      if (tmp1_subject === 3) {
                        var tmp0_1 = this.e1b_1;
                        var tmp2 = this.d1b_1;
                        var tmp4 = this.i1b_1;
                        var s = this.h1b_1;
                        this.l8_1 = 6;
                        suspendResult = sendOnNoWaiterSuspend(this.b1b_1, tmp0_1, tmp2, tmp4, s, this);
                        if (suspendResult === get_COROUTINE_SUSPENDED()) {
                          return suspendResult;
                        }
                        continue $sm;
                      } else {
                        this.l8_1 = 5;
                        continue $sm;
                      }
                    }
                  }
                }
              }
            }

          case 5:
            this.l8_1 = 2;
            continue $sm;
          case 6:
            this.l8_1 = 13;
            continue $sm;
          case 7:
            this.l8_1 = 13;
            continue $sm;
          case 8:
            var tmp_3 = this.g1b_1;
            var tmp2_safe_receiver = (!(tmp_3 == null) ? isInterface(tmp_3, Waiter) : false) ? tmp_3 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this.f1b_1, tmp2_safe_receiver, this.e1b_1, this.d1b_1);
            }

            this.e1b_1;
            this.d1b_1;
            this.l8_1 = 13;
            continue $sm;
          case 9:
            this.l8_1 = 13;
            continue $sm;
          case 10:
            this.l8_1 = 13;
            continue $sm;
          case 11:
            throw this.o8_1;
          case 12:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 13;
            continue $sm;
          case 13:
            return Unit_instance;
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
  function $receiveCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1b_1 = _this__u8e3s4;
  }
  protoOf($receiveCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 8;
            this.g1c_1 = this.w1b_1;
            this.f1c_1 = null;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.c1c_1 = this.g1c_1;
            this.d1c_1 = this.f1c_1;
            this.z1b_1 = this.c1c_1.y17_1.kotlinx$atomicfu$value;
            this.l8_1 = 2;
            continue $sm;
          case 2:
            if (!true) {
              this.l8_1 = 9;
              continue $sm;
            }

            if (this.c1c_1.w18()) {
              var tmp_0 = this;
              throw recoverStackTrace_0(_get_receiveException__foorc1(this.w1b_1));
            } else {
              this.l8_1 = 3;
              continue $sm;
            }

          case 3:
            this.a1c_1 = this.c1c_1.u17_1.atomicfu$getAndIncrement$long();
            var tmp0 = this.a1c_1;
            var other = get_SEGMENT_SIZE();
            var id = divide(tmp0, fromInt(other));
            var tmp_1 = this;
            var tmp0_0 = this.a1c_1;
            var other_0 = get_SEGMENT_SIZE();
            tmp_1.b1c_1 = convertToInt(modulo(tmp0_0, fromInt(other_0)));
            if (!equalsLong(this.z1b_1.xy_1, id)) {
              var tmp0_elvis_lhs = findSegmentReceive(this.c1c_1, id, this.z1b_1);
              if (tmp0_elvis_lhs == null) {
                this.l8_1 = 2;
                var tmp_2 = this;
                continue $sm;
              } else {
                this.e1c_1 = tmp0_elvis_lhs;
                this.l8_1 = 4;
                continue $sm;
              }
            } else {
              this.l8_1 = 5;
              continue $sm;
            }

          case 4:
            this.z1b_1 = this.e1c_1;
            this.l8_1 = 5;
            continue $sm;
          case 5:
            var updCellResult = updateCellReceive(this.c1c_1, this.z1b_1, this.b1c_1, this.a1c_1, this.d1c_1);
            if (updCellResult === get_SUSPEND()) {
              var tmp_3 = this;
              var tmp_4 = this.d1c_1;
              var tmp1_safe_receiver = (!(tmp_4 == null) ? isInterface(tmp_4, Waiter) : false) ? tmp_4 : null;
              if (tmp1_safe_receiver == null)
                null;
              else {
                prepareReceiverForSuspension(this.c1c_1, tmp1_safe_receiver, this.z1b_1, this.b1c_1);
              }
              this.z1b_1;
              this.b1c_1;
              this.a1c_1;
              var message = 'unexpected';
              throw IllegalStateException_init_$Create$(toString(message));
            } else {
              if (updCellResult === get_FAILED()) {
                if (compare(this.a1c_1, this.c1c_1.v18()) < 0) {
                  this.z1b_1.p18();
                }
                this.l8_1 = 2;
                var tmp_5 = this;
                continue $sm;
              } else {
                if (updCellResult === get_SUSPEND_NO_WAITER()) {
                  var tmp0_1 = this.z1b_1;
                  var tmp2 = this.b1c_1;
                  var r = this.a1c_1;
                  this.l8_1 = 6;
                  suspendResult = receiveOnNoWaiterSuspend(this.w1b_1, tmp0_1, tmp2, r, this);
                  if (suspendResult === get_COROUTINE_SUSPENDED()) {
                    return suspendResult;
                  }
                  continue $sm;
                } else {
                  var tmp_6 = this;
                  this.z1b_1.p18();
                  return updCellResult;
                }
              }
            }

          case 6:
            this.y1b_1 = suspendResult;
            this.l8_1 = 7;
            continue $sm;
          case 7:
            this.x1b_1 = this.y1b_1;
            this.l8_1 = 10;
            continue $sm;
          case 8:
            throw this.o8_1;
          case 9:
            if (false) {
              this.l8_1 = 1;
              continue $sm;
            }

            this.l8_1 = 10;
            continue $sm;
          case 10:
            return this.x1b_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 8) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function BufferedChannel(capacity, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    this.r17_1 = capacity;
    this.s17_1 = onUndeliveredElement;
    // Inline function 'kotlin.require' call
    if (!(this.r17_1 >= 0)) {
      var message = 'Invalid channel capacity: ' + this.r17_1 + ', should be >=0';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    this.t17_1 = atomic$long$1(new Long(0, 0));
    this.u17_1 = atomic$long$1(new Long(0, 0));
    this.v17_1 = atomic$long$1(initialBufferEnd(this.r17_1));
    this.w17_1 = atomic$long$1(_get_bufferEndCounter__2d4hee(this));
    var firstSegment = new ChannelSegment(new Long(0, 0), null, this, 3);
    this.x17_1 = atomic$ref$1(firstSegment);
    this.y17_1 = atomic$ref$1(firstSegment);
    var tmp = this;
    var tmp_0;
    if (_get_isRendezvousOrUnlimited__3mdufi(this)) {
      var tmp_1 = get_NULL_SEGMENT();
      tmp_0 = tmp_1 instanceof ChannelSegment ? tmp_1 : THROW_CCE();
    } else {
      tmp_0 = firstSegment;
    }
    tmp.z17_1 = atomic$ref$1(tmp_0);
    var tmp_2 = this;
    var tmp_3;
    if (this.s17_1 == null) {
      tmp_3 = null;
    } else {
      // Inline function 'kotlin.let' call
      tmp_3 = BufferedChannel$onUndeliveredElementReceiveCancellationConstructor$lambda(this);
    }
    tmp_2.a18_1 = tmp_3;
    this.b18_1 = atomic$ref$1(get_NO_CLOSE_CAUSE());
    this.c18_1 = atomic$ref$1(null);
  }
  protoOf(BufferedChannel).v18 = function () {
    // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
    var this_0 = this.t17_1.kotlinx$atomicfu$value;
    return bitwiseAnd(this_0, new Long(-1, 268435455));
  };
  protoOf(BufferedChannel).s19 = function () {
    return this.u17_1.kotlinx$atomicfu$value;
  };
  protoOf(BufferedChannel).h1c = function (element, $completion) {
    var tmp = new $sendCOROUTINE$(this, element, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(BufferedChannel).i1c = function (element) {
    if (shouldSendSuspend0(this, this.t17_1.kotlinx$atomicfu$value))
      return Companion_getInstance_0().j1c();
    var tmp4 = get_INTERRUPTED_SEND();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq(this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s(this).atomicfu$getAndIncrement$long();
        // Inline function 'kotlinx.coroutines.channels.sendersCounter' call
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = access$_get_isClosedForSend0__sm8f7a(this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.xy_1, id)) {
          var tmp0_elvis_lhs = access$findSegmentSend(this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              tmp$ret$0 = Companion_getInstance_0().k1a(this.r19());
              break $l$block_5;
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (access$updateCellSend(this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.p18();
            tmp$ret$0 = Companion_getInstance_0().x19(Unit_instance);
            break $l$block_5;
          case 1:
            tmp$ret$0 = Companion_getInstance_0().x19(Unit_instance);
            break $l$block_5;
          case 2:
            if (closed) {
              segment.f18();
              tmp$ret$0 = Companion_getInstance_0().k1a(this.r19());
              break $l$block_5;
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension(this, tmp2_safe_receiver, segment, i);
            }

            segment.f18();
            tmp$ret$0 = Companion_getInstance_0().j1c();
            break $l$block_5;
          case 4:
            if (compare(s, this.s19()) < 0) {
              segment.p18();
            }

            tmp$ret$0 = Companion_getInstance_0().k1a(this.r19());
            break $l$block_5;
          case 5:
            segment.p18();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(BufferedChannel).a1a = function () {
  };
  protoOf(BufferedChannel).t19 = function () {
  };
  protoOf(BufferedChannel).k1c = function ($completion) {
    var tmp = new $receiveCOROUTINE$(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(BufferedChannel).o1a = function (globalCellIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    var segment = this.y17_1.kotlinx$atomicfu$value;
    $l$loop_0: while (true) {
      var r = this.u17_1.kotlinx$atomicfu$value;
      // Inline function 'kotlin.Long.plus' call
      var other = this.r17_1;
      var tmp0 = add(r, fromInt(other));
      // Inline function 'kotlin.math.max' call
      var b = _get_bufferEndCounter__2d4hee(this);
      var tmp$ret$2 = compare(tmp0, b) >= 0 ? tmp0 : b;
      if (compare(globalCellIndex, tmp$ret$2) < 0)
        return Unit_instance;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$3 = add(r, fromInt(1));
      if (!this.u17_1.atomicfu$compareAndSet(r, tmp$ret$3))
        continue $l$loop_0;
      // Inline function 'kotlin.Long.div' call
      var other_0 = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other_0));
      // Inline function 'kotlin.Long.rem' call
      var other_1 = get_SEGMENT_SIZE();
      var tmp$ret$5 = modulo(r, fromInt(other_1));
      var i = convertToInt(tmp$ret$5);
      if (!equalsLong(segment.xy_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop_0;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      var updCellResult = updateCellReceive(this, segment, i, r, null);
      if (updCellResult === get_FAILED()) {
        if (compare(r, this.v18()) < 0) {
          segment.p18();
        }
      } else {
        segment.p18();
        var tmp1_safe_receiver = this.s17_1;
        var tmp2_safe_receiver = tmp1_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp1_safe_receiver, updCellResult);
        if (tmp2_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          throw tmp2_safe_receiver;
        }
      }
    }
  };
  protoOf(BufferedChannel).e18 = function (globalIndex) {
    if (_get_isRendezvousOrUnlimited__3mdufi(this))
      return Unit_instance;
    while (compare(_get_bufferEndCounter__2d4hee(this), globalIndex) <= 0) {
    }
    // Inline function 'kotlin.repeat' call
    var times = get_EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS();
    var inductionVariable = 0;
    if (inductionVariable < times)
      do {
        var index = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        var b = _get_bufferEndCounter__2d4hee(this);
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var this_0 = this.w17_1.kotlinx$atomicfu$value;
        var ebCompleted = bitwiseAnd(this_0, new Long(-1, 1073741823));
        if (equalsLong(b, ebCompleted) && equalsLong(b, _get_bufferEndCounter__2d4hee(this)))
          return Unit_instance;
      }
       while (inductionVariable < times);
    var tmp0 = this.w17_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
        var tmp$ret$5 = bitwiseAnd(cur, new Long(-1, 1073741823));
        var upd = constructEBCompletedAndPauseFlag(tmp$ret$5, true);
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    while (true) {
      var b_0 = _get_bufferEndCounter__2d4hee(this);
      var ebCompletedAndBit = this.w17_1.kotlinx$atomicfu$value;
      // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
      var ebCompleted_0 = bitwiseAnd(ebCompletedAndBit, new Long(-1, 1073741823));
      // Inline function 'kotlinx.coroutines.channels.ebPauseExpandBuffers' call
      var pauseExpandBuffers = !equalsLong(bitwiseAnd(ebCompletedAndBit, new Long(0, 1073741824)), new Long(0, 0));
      if (equalsLong(b_0, ebCompleted_0) && equalsLong(b_0, _get_bufferEndCounter__2d4hee(this))) {
        var tmp0_0 = this.w17_1;
        $l$block_0: {
          // Inline function 'kotlinx.atomicfu.update' call
          while (true) {
            var cur_0 = tmp0_0.kotlinx$atomicfu$value;
            // Inline function 'kotlinx.coroutines.channels.ebCompletedCounter' call
            var tmp$ret$10 = bitwiseAnd(cur_0, new Long(-1, 1073741823));
            var upd_0 = constructEBCompletedAndPauseFlag(tmp$ret$10, false);
            if (tmp0_0.atomicfu$compareAndSet(cur_0, upd_0)) {
              break $l$block_0;
            }
          }
        }
        return Unit_instance;
      }
      if (!pauseExpandBuffers) {
        this.w17_1.atomicfu$compareAndSet(ebCompletedAndBit, constructEBCompletedAndPauseFlag(ebCompleted_0, true));
      }
    }
  };
  protoOf(BufferedChannel).l1c = function () {
    var tmp = BufferedChannel$registerSelectForReceive$ref();
    var tmp_0 = typeof tmp === 'function' ? tmp : THROW_CCE();
    var tmp_1 = BufferedChannel$processResultSelectReceiveCatching$ref();
    return new SelectClause1Impl(this, tmp_0, typeof tmp_1 === 'function' ? tmp_1 : THROW_CCE(), this.a18_1);
  };
  protoOf(BufferedChannel).i = function () {
    return new BufferedChannelIterator(this);
  };
  protoOf(BufferedChannel).u18 = function () {
    var tmp = this.b18_1.kotlinx$atomicfu$value;
    return (tmp == null ? true : tmp instanceof Error) ? tmp : THROW_CCE();
  };
  protoOf(BufferedChannel).r19 = function () {
    var tmp0_elvis_lhs = this.u18();
    return tmp0_elvis_lhs == null ? new ClosedSendChannelException('Channel was closed') : tmp0_elvis_lhs;
  };
  protoOf(BufferedChannel).m1c = function () {
  };
  protoOf(BufferedChannel).n1c = function (cause) {
    return this.o1c(cause, false);
  };
  protoOf(BufferedChannel).rv = function (cause) {
    this.q1c(cause);
  };
  protoOf(BufferedChannel).q1c = function (cause) {
    return this.o1c(cause == null ? CancellationException_init_$Create$('Channel was cancelled') : cause, true);
  };
  protoOf(BufferedChannel).o1c = function (cause, cancel) {
    if (cancel) {
      markCancellationStarted(this);
    }
    var closedByThisOperation = this.b18_1.atomicfu$compareAndSet(get_NO_CLOSE_CAUSE(), cause);
    if (cancel) {
      markCancelled(this);
    } else {
      markClosed(this);
    }
    completeCloseOrCancel(this);
    // Inline function 'kotlin.also' call
    this.m1c();
    if (closedByThisOperation) {
      invokeCloseHandler(this);
    }
    return closedByThisOperation;
  };
  protoOf(BufferedChannel).p1a = function () {
    return false;
  };
  protoOf(BufferedChannel).n1a = function () {
    return _get_isClosedForSend0__kxgf9m(this, this.t17_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).w18 = function () {
    return _get_isClosedForReceive0__f7qknl(this, this.t17_1.kotlinx$atomicfu$value);
  };
  protoOf(BufferedChannel).q1a = function () {
    $l$loop: while (true) {
      var segment = this.y17_1.kotlinx$atomicfu$value;
      var r = this.s19();
      var s = this.v18();
      if (compare(s, r) <= 0)
        return false;
      // Inline function 'kotlin.Long.div' call
      var other = get_SEGMENT_SIZE();
      var id = divide(r, fromInt(other));
      if (!equalsLong(segment.xy_1, id)) {
        var tmp0_elvis_lhs = findSegmentReceive(this, id, segment);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          var tmp_0;
          if (compare(this.y17_1.kotlinx$atomicfu$value.xy_1, id) < 0) {
            return false;
          } else {
            continue $l$loop;
          }
        } else {
          tmp = tmp0_elvis_lhs;
        }
        segment = tmp;
      }
      segment.p18();
      // Inline function 'kotlin.Long.rem' call
      var other_0 = get_SEGMENT_SIZE();
      var tmp$ret$1 = modulo(r, fromInt(other_0));
      var i = convertToInt(tmp$ret$1);
      if (isCellNonEmpty(this, segment, i, r))
        return true;
      // Inline function 'kotlin.Long.plus' call
      var tmp$ret$2 = add(r, fromInt(1));
      this.u17_1.atomicfu$compareAndSet(r, tmp$ret$2);
    }
  };
  protoOf(BufferedChannel).toString = function () {
    var sb = StringBuilder_init_$Create$();
    // Inline function 'kotlinx.coroutines.channels.sendersCloseStatus' call
    var this_0 = this.t17_1.kotlinx$atomicfu$value;
    var tmp0_subject = convertToInt(shiftRight(this_0, 60));
    if (tmp0_subject === 2) {
      sb.q7('closed,');
    } else if (tmp0_subject === 3) {
      sb.q7('cancelled,');
    }
    sb.q7('capacity=' + this.r17_1 + ',');
    sb.q7('data=[');
    // Inline function 'kotlin.collections.filter' call
    var tmp0 = listOf([this.y17_1.kotlinx$atomicfu$value, this.x17_1.kotlinx$atomicfu$value, this.z17_1.kotlinx$atomicfu$value]);
    // Inline function 'kotlin.collections.filterTo' call
    var destination = ArrayList_init_$Create$_0();
    var _iterator__ex2g4s = tmp0.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!(element === get_NULL_SEGMENT())) {
        destination.g(element);
      }
    }
    var tmp$ret$4;
    $l$block: {
      // Inline function 'kotlin.collections.minBy' call
      var iterator = destination.i();
      if (!iterator.j())
        throw NoSuchElementException_init_$Create$();
      var minElem = iterator.k();
      if (!iterator.j()) {
        tmp$ret$4 = minElem;
        break $l$block;
      }
      var minValue = minElem.xy_1;
      do {
        var e = iterator.k();
        var v = e.xy_1;
        if (compareTo(minValue, v) > 0) {
          minElem = e;
          minValue = v;
        }
      }
       while (iterator.j());
      tmp$ret$4 = minElem;
    }
    var firstSegment = tmp$ret$4;
    var r = this.s19();
    var s = this.v18();
    var segment = firstSegment;
    append_elements: while (true) {
      var inductionVariable = 0;
      var last_0 = get_SEGMENT_SIZE();
      if (inductionVariable < last_0)
        process_cell: do {
          var i = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_0 = segment.xy_1;
          // Inline function 'kotlin.Long.times' call
          var other = get_SEGMENT_SIZE();
          // Inline function 'kotlin.Long.plus' call
          var this_1 = multiply(tmp0_0, fromInt(other));
          var globalCellIndex = add(this_1, fromInt(i));
          if (compare(globalCellIndex, s) >= 0 && compare(globalCellIndex, r) >= 0)
            break append_elements;
          var cellState = segment.n17(i);
          var element_0 = segment.k17(i);
          var tmp;
          if (!(cellState == null) ? isInterface(cellState, CancellableContinuation) : false) {
            tmp = (compare(s, globalCellIndex) <= 0 ? compare(globalCellIndex, r) < 0 : false) ? 'receive' : (compare(r, globalCellIndex) <= 0 ? compare(globalCellIndex, s) < 0 : false) ? 'send' : 'cont';
          } else {
            if (!(cellState == null) ? isInterface(cellState, SelectInstance) : false) {
              tmp = (compare(s, globalCellIndex) <= 0 ? compare(globalCellIndex, r) < 0 : false) ? 'onReceive' : (compare(r, globalCellIndex) <= 0 ? compare(globalCellIndex, s) < 0 : false) ? 'onSend' : 'select';
            } else {
              if (cellState instanceof ReceiveCatching) {
                tmp = 'receiveCatching';
              } else {
                if (cellState instanceof SendBroadcast) {
                  tmp = 'sendBroadcast';
                } else {
                  if (cellState instanceof WaiterEB) {
                    tmp = 'EB(' + cellState.toString() + ')';
                  } else {
                    if (equals(cellState, get_RESUMING_BY_RCV()) || equals(cellState, get_RESUMING_BY_EB())) {
                      tmp = 'resuming_sender';
                    } else {
                      if (cellState == null || (equals(cellState, get_IN_BUFFER()) || equals(cellState, get_DONE_RCV())) || (equals(cellState, get_POISONED()) || equals(cellState, get_INTERRUPTED_RCV()) || (equals(cellState, get_INTERRUPTED_SEND()) || equals(cellState, get_CHANNEL_CLOSED())))) {
                        continue process_cell;
                      } else {
                        tmp = toString(cellState);
                      }
                    }
                  }
                }
              }
            }
          }
          var cellStateString = tmp;
          if (!(element_0 == null)) {
            sb.q7('(' + cellStateString + ',' + toString(element_0) + '),');
          } else {
            sb.q7(cellStateString + ',');
          }
        }
         while (inductionVariable < last_0);
      var tmp4_elvis_lhs = segment.l18();
      var tmp_0;
      if (tmp4_elvis_lhs == null) {
        break append_elements;
      } else {
        tmp_0 = tmp4_elvis_lhs;
      }
      segment = tmp_0;
    }
    if (last(sb) === _Char___init__impl__6a9atx(44)) {
      sb.ib(sb.a() - 1 | 0);
    }
    sb.q7(']');
    return sb.toString();
  };
  function WaiterEB(waiter) {
    this.u19_1 = waiter;
  }
  protoOf(WaiterEB).toString = function () {
    return 'WaiterEB(' + toString(this.u19_1) + ')';
  };
  function initialBufferEnd(capacity) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    switch (capacity) {
      case 0:
        return new Long(0, 0);
      case 2147483647:
        return new Long(-1, 2147483647);
      default:
        return fromInt(capacity);
    }
  }
  function ReceiveCatching() {
  }
  function tryResume0(_this__u8e3s4, value, onCancellation) {
    onCancellation = onCancellation === VOID ? null : onCancellation;
    _init_properties_BufferedChannel_kt__d6uc4y();
    // Inline function 'kotlin.let' call
    var token = _this__u8e3s4.sx(value, null, onCancellation);
    var tmp;
    if (!(token == null)) {
      _this__u8e3s4.tx(token);
      tmp = true;
    } else {
      tmp = false;
    }
    return tmp;
  }
  function constructEBCompletedAndPauseFlag(counter, pauseEB) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(pauseEB ? new Long(0, 1073741824) : new Long(0, 0), counter);
  }
  function constructSendersAndCloseStatus(counter, closeStatus) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return add(shiftLeft(fromInt(closeStatus), 60), counter);
  }
  function createSegmentFunction() {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return createSegment$ref();
  }
  function createSegment(id, prev) {
    _init_properties_BufferedChannel_kt__d6uc4y();
    return new ChannelSegment(id, prev, prev.h17(), 0);
  }
  function createSegment$ref() {
    return constructCallableReference(function (p0, p1) {
      return createSegment(p0, p1);
    }, 2, 0, 5, 'createSegment');
  }
  var properties_initialized_BufferedChannel_kt_58tjvw;
  function _init_properties_BufferedChannel_kt__d6uc4y() {
    if (!properties_initialized_BufferedChannel_kt_58tjvw) {
      properties_initialized_BufferedChannel_kt_58tjvw = true;
      NULL_SEGMENT = new ChannelSegment(new Long(-1, -1), null, null, 0);
      SEGMENT_SIZE = systemProp('kotlinx.coroutines.bufferedChannel.segmentSize', 32);
      EXPAND_BUFFER_COMPLETION_WAIT_ITERATIONS = systemProp('kotlinx.coroutines.bufferedChannel.expandBufferCompletionWaitIterations', 10000);
      BUFFERED = new Symbol('BUFFERED');
      IN_BUFFER = new Symbol('SHOULD_BUFFER');
      RESUMING_BY_RCV = new Symbol('S_RESUMING_BY_RCV');
      RESUMING_BY_EB = new Symbol('RESUMING_BY_EB');
      POISONED = new Symbol('POISONED');
      DONE_RCV = new Symbol('DONE_RCV');
      INTERRUPTED_SEND = new Symbol('INTERRUPTED_SEND');
      INTERRUPTED_RCV = new Symbol('INTERRUPTED_RCV');
      CHANNEL_CLOSED = new Symbol('CHANNEL_CLOSED');
      SUSPEND = new Symbol('SUSPEND');
      SUSPEND_NO_WAITER = new Symbol('SUSPEND_NO_WAITER');
      FAILED = new Symbol('FAILED');
      NO_RECEIVE_RESULT = new Symbol('NO_RECEIVE_RESULT');
      CLOSE_HANDLER_CLOSED = new Symbol('CLOSE_HANDLER_CLOSED');
      CLOSE_HANDLER_INVOKED = new Symbol('CLOSE_HANDLER_INVOKED');
      NO_CLOSE_CAUSE = new Symbol('NO_CLOSE_CAUSE');
    }
  }
  function Factory() {
    Factory_instance = this;
    this.r1c_1 = 2147483647;
    this.s1c_1 = 0;
    this.t1c_1 = -1;
    this.u1c_1 = -2;
    this.v1c_1 = -3;
    this.w1c_1 = 'kotlinx.coroutines.channels.defaultBuffer';
    this.x1c_1 = systemProp('kotlinx.coroutines.channels.defaultBuffer', 64, 1, 2147483646);
  }
  var Factory_instance;
  function Factory_getInstance() {
    if (Factory_instance == null)
      new Factory();
    return Factory_instance;
  }
  function Channel(capacity, onBufferOverflow, onUndeliveredElement) {
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    var tmp;
    switch (capacity) {
      case 0:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(0, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      case -1:
        // Inline function 'kotlin.require' call

        if (!onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance())) {
          var message = 'CONFLATED capacity cannot be used with non-default onBufferOverflow';
          throw IllegalArgumentException_init_$Create$(toString(message));
        }

        tmp = new ConflatedBufferedChannel(1, BufferOverflow_DROP_OLDEST_getInstance(), onUndeliveredElement);
        break;
      case 2147483647:
        tmp = new BufferedChannel(2147483647, onUndeliveredElement);
        break;
      case -2:
        tmp = onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()) ? new BufferedChannel(Factory_getInstance().x1c_1, onUndeliveredElement) : new ConflatedBufferedChannel(1, onBufferOverflow, onUndeliveredElement);
        break;
      default:
        tmp = onBufferOverflow === BufferOverflow_SUSPEND_getInstance() ? new BufferedChannel(capacity, onUndeliveredElement) : new ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement);
        break;
    }
    return tmp;
  }
  function _ChannelResult___init__impl__siwsuf(holder) {
    return holder;
  }
  function _ChannelResult___get_holder__impl__pm9gzw($this) {
    return $this;
  }
  function _ChannelResult___get_isSuccess__impl__odq1z9($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return !(tmp instanceof Failed);
  }
  function _ChannelResult___get_isClosed__impl__mg7kuu($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    return tmp instanceof Closed;
  }
  function ChannelResult__getOrNull_impl_f5e07h($this) {
    var tmp;
    var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw($this);
    if (!(tmp_0 instanceof Failed)) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    } else {
      tmp = null;
    }
    return tmp;
  }
  function ChannelResult__exceptionOrNull_impl_16ei30($this) {
    var tmp = _ChannelResult___get_holder__impl__pm9gzw($this);
    var tmp0_safe_receiver = tmp instanceof Closed ? tmp : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.y1c_1;
  }
  function Failed() {
  }
  protoOf(Failed).toString = function () {
    return 'Failed';
  };
  function Closed(cause) {
    Failed.call(this);
    this.y1c_1 = cause;
  }
  protoOf(Closed).equals = function (other) {
    var tmp;
    if (other instanceof Closed) {
      tmp = equals(this.y1c_1, other.y1c_1);
    } else {
      tmp = false;
    }
    return tmp;
  };
  protoOf(Closed).hashCode = function () {
    // Inline function 'kotlin.hashCode' call
    var tmp0_safe_receiver = this.y1c_1;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs;
  };
  protoOf(Closed).toString = function () {
    return 'Closed(' + toString_0(this.y1c_1) + ')';
  };
  function Companion() {
    Companion_instance_0 = this;
    this.w19_1 = new Failed();
  }
  protoOf(Companion).x19 = function (value) {
    return _ChannelResult___init__impl__siwsuf(value);
  };
  protoOf(Companion).j1c = function () {
    return _ChannelResult___init__impl__siwsuf(this.w19_1);
  };
  protoOf(Companion).k1a = function (cause) {
    return _ChannelResult___init__impl__siwsuf(new Closed(cause));
  };
  var Companion_instance_0;
  function Companion_getInstance_0() {
    if (Companion_instance_0 == null)
      new Companion();
    return Companion_instance_0;
  }
  function ChannelResult__toString_impl_rrcqu7($this) {
    var tmp;
    if (_ChannelResult___get_holder__impl__pm9gzw($this) instanceof Closed) {
      tmp = _ChannelResult___get_holder__impl__pm9gzw($this).toString();
    } else {
      tmp = 'Value(' + toString_0(_ChannelResult___get_holder__impl__pm9gzw($this)) + ')';
    }
    return tmp;
  }
  function ChannelResult__hashCode_impl_lilec2($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function ChannelResult__equals_impl_f471ri($this, other) {
    if (!(other instanceof ChannelResult))
      return false;
    var tmp0_other_with_cast = other.s1a_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function ChannelResult(holder) {
    Companion_getInstance_0();
    this.s1a_1 = holder;
  }
  protoOf(ChannelResult).toString = function () {
    return ChannelResult__toString_impl_rrcqu7(this.s1a_1);
  };
  protoOf(ChannelResult).hashCode = function () {
    return ChannelResult__hashCode_impl_lilec2(this.s1a_1);
  };
  protoOf(ChannelResult).equals = function (other) {
    return ChannelResult__equals_impl_f471ri(this.s1a_1, other);
  };
  function SendChannel() {
  }
  function ClosedSendChannelException(message) {
    IllegalStateException_init_$Init$(message, this);
    captureStack(this, ClosedSendChannelException);
  }
  function ClosedReceiveChannelException(message) {
    NoSuchElementException_init_$Init$(message, this);
    captureStack(this, ClosedReceiveChannelException);
  }
  function ReceiveChannel() {
  }
  function ChannelCoroutine(parentContext, _channel, initParentJob, active) {
    AbstractCoroutine.call(this, parentContext, initParentJob, active);
    this.d1d_1 = _channel;
  }
  protoOf(ChannelCoroutine).rv = function (cause) {
    if (this.fv())
      return Unit_instance;
    var tmp;
    if (cause == null) {
      // Inline function 'kotlinx.coroutines.JobSupport.defaultCancellationException' call
      tmp = new JobCancellationException(null == null ? this.mu() : null, null, this);
    } else {
      tmp = cause;
    }
    this.tv(tmp);
  };
  protoOf(ChannelCoroutine).z1c = function (cause, $super) {
    return this.sv(cause, ($super == null ? true : $super instanceof ChannelCoroutine) ? $super : THROW_CCE());
  };
  protoOf(ChannelCoroutine).tv = function (cause) {
    var exception = this.kv(cause);
    this.d1d_1.rv(exception);
    this.wv(exception);
  };
  protoOf(ChannelCoroutine).h1c = function (element, $completion) {
    return this.d1d_1.h1c(element, $completion);
  };
  protoOf(ChannelCoroutine).i1c = function (element) {
    return this.d1d_1.i1c(element);
  };
  protoOf(ChannelCoroutine).n1c = function (cause) {
    return this.d1d_1.n1c(cause);
  };
  protoOf(ChannelCoroutine).k1c = function ($completion) {
    return this.d1d_1.k1c($completion);
  };
  protoOf(ChannelCoroutine).l1c = function () {
    return this.d1d_1.l1c();
  };
  protoOf(ChannelCoroutine).i = function () {
    return this.d1d_1.i();
  };
  function cancelConsumed(_this__u8e3s4, cause) {
    var tmp;
    if (cause == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.let' call
      var tmp0_elvis_lhs = cause instanceof CancellationException ? cause : null;
      tmp = tmp0_elvis_lhs == null ? CancellationException_0('Channel was consumed, consumer had failed', cause) : tmp0_elvis_lhs;
    }
    _this__u8e3s4.rv(tmp);
  }
  function trySendImpl($this, element, isSendOp) {
    return $this.r1d_1 === BufferOverflow_DROP_LATEST_getInstance() ? trySendDropLatest($this, element, isSendOp) : trySendDropOldest($this, element);
  }
  function trySendDropLatest($this, element, isSendOp) {
    var result = protoOf(BufferedChannel).i1c.call($this, element);
    if (_ChannelResult___get_isSuccess__impl__odq1z9(result) || _ChannelResult___get_isClosed__impl__mg7kuu(result))
      return result;
    if (isSendOp) {
      var tmp0_safe_receiver = $this.s17_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        throw tmp1_safe_receiver;
      }
    }
    return Companion_getInstance_0().x19(Unit_instance);
  }
  function trySendDropOldest($this, element) {
    var tmp4 = get_BUFFERED();
    var tmp$ret$0;
    $l$block_5: {
      // Inline function 'kotlinx.coroutines.channels.BufferedChannel.sendImpl' call
      var segment = access$_get_sendSegment__111kgq($this).kotlinx$atomicfu$value;
      $l$loop_0: while (true) {
        var sendersAndCloseStatusCur = access$_get_sendersAndCloseStatus__tvw29s($this).atomicfu$getAndIncrement$long();
        var s = bitwiseAnd(sendersAndCloseStatusCur, new Long(-1, 268435455));
        var closed = access$_get_isClosedForSend0__sm8f7a($this, sendersAndCloseStatusCur);
        // Inline function 'kotlin.Long.div' call
        var other = get_SEGMENT_SIZE();
        var id = divide(s, fromInt(other));
        // Inline function 'kotlin.Long.rem' call
        var other_0 = get_SEGMENT_SIZE();
        var tmp$ret$3 = modulo(s, fromInt(other_0));
        var i = convertToInt(tmp$ret$3);
        if (!equalsLong(segment.xy_1, id)) {
          var tmp0_elvis_lhs = access$findSegmentSend($this, id, segment);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            var tmp_0;
            if (closed) {
              return Companion_getInstance_0().k1a($this.r19());
            } else {
              continue $l$loop_0;
            }
          } else {
            tmp = tmp0_elvis_lhs;
          }
          segment = tmp;
        }
        switch (access$updateCellSend($this, segment, i, element, s, tmp4, closed)) {
          case 0:
            segment.p18();
            return Companion_getInstance_0().x19(Unit_instance);
          case 1:
            return Companion_getInstance_0().x19(Unit_instance);
          case 2:
            if (closed) {
              segment.f18();
              return Companion_getInstance_0().k1a($this.r19());
            }

            var tmp2_safe_receiver = (!(tmp4 == null) ? isInterface(tmp4, Waiter) : false) ? tmp4 : null;
            if (tmp2_safe_receiver == null)
              null;
            else {
              access$prepareSenderForSuspension($this, tmp2_safe_receiver, segment, i);
            }

            var tmp0 = segment.xy_1;
            // Inline function 'kotlin.Long.times' call

            var other_1 = get_SEGMENT_SIZE();
            // Inline function 'kotlin.Long.plus' call

            var this_0 = multiply(tmp0, fromInt(other_1));
            var tmp$ret$10 = add(this_0, fromInt(i));
            $this.o1a(tmp$ret$10);
            return Companion_getInstance_0().x19(Unit_instance);
          case 4:
            if (compare(s, $this.s19()) < 0) {
              segment.p18();
            }

            return Companion_getInstance_0().k1a($this.r19());
          case 5:
            segment.p18();
            continue $l$loop_0;
          case 3:
            // Inline function 'kotlin.error' call

            var message = 'unexpected';
            throw IllegalStateException_init_$Create$(toString(message));
        }
      }
    }
    return tmp$ret$0;
  }
  function ConflatedBufferedChannel(capacity, onBufferOverflow, onUndeliveredElement) {
    onUndeliveredElement = onUndeliveredElement === VOID ? null : onUndeliveredElement;
    BufferedChannel.call(this, capacity, onUndeliveredElement);
    this.q1d_1 = capacity;
    this.r1d_1 = onBufferOverflow;
    // Inline function 'kotlin.require' call
    if (!!(this.r1d_1 === BufferOverflow_SUSPEND_getInstance())) {
      var message = 'This implementation does not support suspension for senders, use ' + getKClass(BufferedChannel).x9() + ' instead';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(this.q1d_1 >= 1)) {
      var message_0 = 'Buffered channel capacity must be at least 1, but ' + this.q1d_1 + ' was specified';
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
  }
  protoOf(ConflatedBufferedChannel).p1a = function () {
    return this.r1d_1.equals(BufferOverflow_DROP_OLDEST_getInstance());
  };
  protoOf(ConflatedBufferedChannel).h1c = function (element, $completion) {
    // Inline function 'kotlinx.coroutines.channels.onClosed' call
    var this_0 = trySendImpl(this, element, true);
    var tmp = _ChannelResult___get_holder__impl__pm9gzw(this_0);
    if (tmp instanceof Closed) {
      ChannelResult__exceptionOrNull_impl_16ei30(this_0);
      var tmp0_safe_receiver = this.s17_1;
      var tmp1_safe_receiver = tmp0_safe_receiver == null ? null : callUndeliveredElementCatchingException(tmp0_safe_receiver, element);
      if (tmp1_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.let' call
        addSuppressed(tmp1_safe_receiver, this.r19());
        throw tmp1_safe_receiver;
      }
      throw this.r19();
    }
    return Unit_instance;
  };
  protoOf(ConflatedBufferedChannel).i1c = function (element) {
    return trySendImpl(this, element, false);
  };
  function ProducerScope() {
  }
  function produce(_this__u8e3s4, context, capacity, onBufferOverflow, start, onCompletion, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    start = start === VOID ? CoroutineStart_DEFAULT_getInstance() : start;
    onCompletion = onCompletion === VOID ? null : onCompletion;
    var channel = Channel(capacity, onBufferOverflow);
    var newContext = newCoroutineContext(_this__u8e3s4, context);
    var coroutine = new ProducerCoroutine(newContext, channel);
    if (!(onCompletion == null)) {
      coroutine.lv(onCompletion);
    }
    coroutine.wu(start, coroutine, block);
    return coroutine;
  }
  function ProducerCoroutine(parentContext, channel) {
    ChannelCoroutine.call(this, parentContext, channel, true, true);
  }
  protoOf(ProducerCoroutine).ju = function () {
    return protoOf(ChannelCoroutine).ju.call(this);
  };
  protoOf(ProducerCoroutine).w1d = function (value) {
    this.d1d_1.p1c();
  };
  protoOf(ProducerCoroutine).ku = function (value) {
    return this.w1d(value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(ProducerCoroutine).lu = function (cause, handled) {
    var processed = this.d1d_1.n1c(cause);
    if (!processed && !handled) {
      handleCoroutineException(this.hu_1, cause);
    }
  };
  protoOf(ProducerCoroutine).z1c = function (cause, $super) {
    return this.sv(cause, ($super == null ? true : $super instanceof ProducerCoroutine) ? $super : THROW_CCE());
  };
  function produce_0(_this__u8e3s4, context, capacity, block) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? 0 : capacity;
    return produce(_this__u8e3s4, context, capacity, BufferOverflow_SUSPEND_getInstance(), CoroutineStart_DEFAULT_getInstance(), null, block);
  }
  function flow(block) {
    return new SafeFlow(block);
  }
  function SafeFlow(block) {
    AbstractFlow.call(this);
    this.x1d_1 = block;
  }
  protoOf(SafeFlow).y1d = function (collector, $completion) {
    return this.x1d_1(collector, $completion);
  };
  function emitAll(_this__u8e3s4, channel, $completion) {
    return emitAllImpl(_this__u8e3s4, channel, true, $completion);
  }
  function emitAllImpl(_this__u8e3s4, channel, consume, $completion) {
    var tmp = new $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function receiveAsFlow(_this__u8e3s4) {
    return new ChannelAsFlow(_this__u8e3s4, false);
  }
  function markConsumed($this) {
    if ($this.r1e_1) {
      // Inline function 'kotlin.check' call
      if (!!$this.s1e_1.atomicfu$getAndSet(true)) {
        var message = 'ReceiveChannel.consumeAsFlow can be collected just once';
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
  }
  function $collectCOROUTINE$(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.b1f_1 = _this__u8e3s4;
    this.c1f_1 = collector;
  }
  protoOf($collectCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            if (this.b1f_1.e1f_1 === -3) {
              markConsumed(this.b1f_1);
              this.l8_1 = 2;
              suspendResult = emitAllImpl(this.c1f_1, this.b1f_1.q1e_1, this.b1f_1.r1e_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = protoOf(ChannelFlow).z1d.call(this.b1f_1, this.c1f_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.l8_1 = 3;
            continue $sm;
          case 2:
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
  function ChannelAsFlow(channel, consume, context, capacity, onBufferOverflow) {
    context = context === VOID ? EmptyCoroutineContext_getInstance() : context;
    capacity = capacity === VOID ? -3 : capacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    ChannelFlow.call(this, context, capacity, onBufferOverflow);
    this.q1e_1 = channel;
    this.r1e_1 = consume;
    this.s1e_1 = atomic$boolean$1(false);
  }
  protoOf(ChannelAsFlow).g1f = function (scope, $completion) {
    return emitAllImpl(new SendingCollector(scope), this.q1e_1, this.r1e_1, $completion);
  };
  protoOf(ChannelAsFlow).h1f = function (scope) {
    markConsumed(this);
    var tmp;
    if (this.e1f_1 === -3) {
      tmp = this.q1e_1;
    } else {
      tmp = protoOf(ChannelFlow).h1f.call(this, scope);
    }
    return tmp;
  };
  protoOf(ChannelAsFlow).z1d = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$(this, collector, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ChannelAsFlow).i1f = function () {
    return 'channel=' + toString(this.q1e_1);
  };
  function $emitAllImplCOROUTINE$(_this__u8e3s4, channel, consume, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.i1e_1 = _this__u8e3s4;
    this.j1e_1 = channel;
    this.k1e_1 = consume;
  }
  protoOf($emitAllImplCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 9;
            ensureActive_1(this.i1e_1);
            this.l1e_1 = null;
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 7;
            this.m8_1 = 6;
            this.m1e_1 = this.j1e_1.i();
            this.l8_1 = 2;
            continue $sm;
          case 2:
            this.l8_1 = 3;
            suspendResult = this.m1e_1.l1a(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 3:
            if (!suspendResult) {
              this.l8_1 = 5;
              continue $sm;
            }

            var element = this.m1e_1.k();
            this.l8_1 = 4;
            suspendResult = this.i1e_1.l1f(element, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 4:
            this.l8_1 = 2;
            continue $sm;
          case 5:
            this.m8_1 = 9;
            this.l8_1 = 8;
            continue $sm;
          case 6:
            this.m8_1 = 7;
            var tmp_0 = this.o8_1;
            if (tmp_0 instanceof Error) {
              var e = this.o8_1;
              this.l1e_1 = e;
              throw e;
            } else {
              throw this.o8_1;
            }

          case 7:
            this.m8_1 = 9;
            var t = this.o8_1;
            if (this.k1e_1) {
              cancelConsumed(this.j1e_1, this.l1e_1);
            }

            throw t;
          case 8:
            this.m8_1 = 9;
            if (this.k1e_1) {
              cancelConsumed(this.j1e_1, this.l1e_1);
            }

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
  function $collectCOROUTINE$_0(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.u1f_1 = _this__u8e3s4;
    this.v1f_1 = collector;
  }
  protoOf($collectCOROUTINE$_0).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 5;
            var tmp_0 = this;
            tmp_0.w1f_1 = new SafeCollector(this.v1f_1, this.r8());
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 4;
            this.l8_1 = 2;
            suspendResult = this.u1f_1.y1d(this.w1f_1, this);
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
            this.w1f_1.v8();
            return Unit_instance;
          case 4:
            this.m8_1 = 5;
            var t = this.o8_1;
            this.w1f_1.v8();
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
  function AbstractFlow() {
  }
  protoOf(AbstractFlow).z1d = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_0(this, collector, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  function FlowCollector() {
  }
  function get_NO_VALUE() {
    _init_properties_SharedFlow_kt__umasnn();
    return NO_VALUE;
  }
  var NO_VALUE;
  function MutableSharedFlow(replay, extraBufferCapacity, onBufferOverflow) {
    replay = replay === VOID ? 0 : replay;
    extraBufferCapacity = extraBufferCapacity === VOID ? 0 : extraBufferCapacity;
    onBufferOverflow = onBufferOverflow === VOID ? BufferOverflow_SUSPEND_getInstance() : onBufferOverflow;
    _init_properties_SharedFlow_kt__umasnn();
    // Inline function 'kotlin.require' call
    if (!(replay >= 0)) {
      var message = 'replay cannot be negative, but was ' + replay;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(extraBufferCapacity >= 0)) {
      var message_0 = 'extraBufferCapacity cannot be negative, but was ' + extraBufferCapacity;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    // Inline function 'kotlin.require' call
    if (!(replay > 0 || extraBufferCapacity > 0 || onBufferOverflow.equals(BufferOverflow_SUSPEND_getInstance()))) {
      var message_1 = 'replay or extraBufferCapacity must be positive with non-default onBufferOverflow strategy ' + onBufferOverflow.toString();
      throw IllegalArgumentException_init_$Create$(toString(message_1));
    }
    var bufferCapacity0 = replay + extraBufferCapacity | 0;
    var bufferCapacity = bufferCapacity0 < 0 ? 2147483647 : bufferCapacity0;
    return new SharedFlowImpl(replay, bufferCapacity, onBufferOverflow);
  }
  function _get_head__d7jo8b($this) {
    var tmp0 = $this.k1g_1;
    // Inline function 'kotlin.comparisons.minOf' call
    var b = $this.j1g_1;
    return compare(tmp0, b) <= 0 ? tmp0 : b;
  }
  function _get_replaySize__dxgnb1($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.l1g_1;
    var tmp$ret$0 = add(tmp0, fromInt(other));
    return convertToInt(subtract(tmp$ret$0, $this.j1g_1));
  }
  function _get_totalSize__xhdb3o($this) {
    return $this.l1g_1 + $this.m1g_1 | 0;
  }
  function _get_bufferEndIndex__d2rk18($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.l1g_1;
    return add(tmp0, fromInt(other));
  }
  function _get_queueEndIndex__4m025l($this) {
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.l1g_1;
    var tmp0_0 = add(tmp0, fromInt(other));
    // Inline function 'kotlin.Long.plus' call
    var other_0 = $this.m1g_1;
    return add(tmp0_0, fromInt(other_0));
  }
  function tryEmitLocked($this, value) {
    if ($this.o1g_1 === 0)
      return tryEmitNoCollectorsLocked($this, value);
    if ($this.l1g_1 >= $this.g1g_1 && compare($this.k1g_1, $this.j1g_1) <= 0) {
      switch ($this.h1g_1.i2_1) {
        case 0:
          return false;
        case 2:
          return true;
        case 1:
          break;
        default:
          noWhenBranchMatchedException();
          break;
      }
    }
    enqueueLocked($this, value);
    $this.l1g_1 = $this.l1g_1 + 1 | 0;
    if ($this.l1g_1 > $this.g1g_1) {
      dropOldestLocked($this);
    }
    if (_get_replaySize__dxgnb1($this) > $this.f1g_1) {
      // Inline function 'kotlin.Long.plus' call
      var this_0 = $this.j1g_1;
      var tmp$ret$0 = add(this_0, fromInt(1));
      updateBufferLocked($this, tmp$ret$0, $this.k1g_1, _get_bufferEndIndex__d2rk18($this), _get_queueEndIndex__4m025l($this));
    }
    return true;
  }
  function tryEmitNoCollectorsLocked($this, value) {
    // Inline function 'kotlinx.coroutines.assert' call
    if ($this.f1g_1 === 0)
      return true;
    enqueueLocked($this, value);
    $this.l1g_1 = $this.l1g_1 + 1 | 0;
    if ($this.l1g_1 > $this.f1g_1) {
      dropOldestLocked($this);
    }
    var tmp = $this;
    var tmp0 = _get_head__d7jo8b($this);
    // Inline function 'kotlin.Long.plus' call
    var other = $this.l1g_1;
    tmp.k1g_1 = add(tmp0, fromInt(other));
    return true;
  }
  function dropOldestLocked($this) {
    setBufferAt(ensureNotNull($this.i1g_1), _get_head__d7jo8b($this), null);
    $this.l1g_1 = $this.l1g_1 - 1 | 0;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var newHead = add(this_0, fromInt(1));
    if (compare($this.j1g_1, newHead) < 0)
      $this.j1g_1 = newHead;
    if (compare($this.k1g_1, newHead) < 0) {
      correctCollectorIndexesOnDropOldest($this, newHead);
    }
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function correctCollectorIndexesOnDropOldest($this, newHead) {
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.o1g_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.n1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            var containsArg = element.r1g_1;
            if (compare(new Long(0, 0), containsArg) <= 0 ? compare(containsArg, newHead) < 0 : false) {
              element.r1g_1 = newHead;
            }
          }
        }
      }
    }
    $this.k1g_1 = newHead;
  }
  function enqueueLocked($this, item) {
    var curSize = _get_totalSize__xhdb3o($this);
    var curBuffer = $this.i1g_1;
    var buffer = curBuffer == null ? growBuffer($this, null, 0, 2) : curSize >= curBuffer.length ? growBuffer($this, curBuffer, curSize, imul(curBuffer.length, 2)) : curBuffer;
    // Inline function 'kotlin.Long.plus' call
    var this_0 = _get_head__d7jo8b($this);
    var tmp$ret$0 = add(this_0, fromInt(curSize));
    setBufferAt(buffer, tmp$ret$0, item);
  }
  function growBuffer($this, curBuffer, curSize, newSize) {
    // Inline function 'kotlin.check' call
    if (!(newSize > 0)) {
      var message = 'Buffer size overflow';
      throw IllegalStateException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.arrayOfNulls' call
    // Inline function 'kotlin.also' call
    var this_0 = Array(newSize);
    $this.i1g_1 = this_0;
    var newBuffer = this_0;
    if (curBuffer == null)
      return newBuffer;
    var head = _get_head__d7jo8b($this);
    var inductionVariable = 0;
    if (inductionVariable < curSize)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'kotlin.Long.plus' call
        var tmp = add(head, fromInt(i));
        // Inline function 'kotlin.Long.plus' call
        var tmp$ret$6 = add(head, fromInt(i));
        setBufferAt(newBuffer, tmp, getBufferAt(curBuffer, tmp$ret$6));
      }
       while (inductionVariable < curSize);
    return newBuffer;
  }
  function emitSuspend($this, value, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp$ret$4;
    $l$block: {
      if (tryEmitLocked($this, value)) {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.w8(tmp$ret$6);
        resumes = findSlotsToResumeLocked($this, resumes);
        tmp$ret$4 = null;
        break $l$block;
      }
      var tmp0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other = _get_totalSize__xhdb3o($this);
      var tmp$ret$7 = add(tmp0, fromInt(other));
      // Inline function 'kotlin.also' call
      var this_0 = new Emitter($this, tmp$ret$7, value, cancellable);
      enqueueLocked($this, this_0);
      $this.m1g_1 = $this.m1g_1 + 1 | 0;
      if ($this.g1g_1 === 0)
        resumes = findSlotsToResumeLocked($this, resumes);
      tmp$ret$4 = this_0;
    }
    var emitter = tmp$ret$4;
    if (emitter == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      disposeOnCancellation(cancellable, emitter);
    }
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var r = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (r == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$13 = _Result___init__impl__xyqfz8(Unit_instance);
        r.w8(tmp$ret$13);
      }
    }
    return cancellable.ow();
  }
  function cancelEmitter($this, emitter) {
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block_0: {
      if (compare(emitter.u1g_1, _get_head__d7jo8b($this)) < 0) {
        break $l$block_0;
      }
      var buffer = ensureNotNull($this.i1g_1);
      if (!(getBufferAt(buffer, emitter.u1g_1) === emitter)) {
        break $l$block_0;
      }
      setBufferAt(buffer, emitter.u1g_1, get_NO_VALUE());
      cleanupTailLocked($this);
    }
    return Unit_instance;
  }
  function updateBufferLocked($this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex) {
    // Inline function 'kotlin.comparisons.minOf' call
    var newHead = compare(newMinCollectorIndex, newReplayIndex) <= 0 ? newMinCollectorIndex : newReplayIndex;
    // Inline function 'kotlinx.coroutines.assert' call
    var inductionVariable = _get_head__d7jo8b($this);
    if (compare(inductionVariable, newHead) < 0)
      do {
        var index = inductionVariable;
        inductionVariable = add(inductionVariable, new Long(1, 0));
        setBufferAt(ensureNotNull($this.i1g_1), index, null);
      }
       while (compare(inductionVariable, newHead) < 0);
    $this.j1g_1 = newReplayIndex;
    $this.k1g_1 = newMinCollectorIndex;
    $this.l1g_1 = convertToInt(subtract(newBufferEndIndex, newHead));
    $this.m1g_1 = convertToInt(subtract(newQueueEndIndex, newBufferEndIndex));
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
  }
  function cleanupTailLocked($this) {
    if ($this.g1g_1 === 0 && $this.m1g_1 <= 1)
      return Unit_instance;
    var buffer = ensureNotNull($this.i1g_1);
    $l$loop: while (true) {
      var tmp;
      if ($this.m1g_1 > 0) {
        var tmp0 = _get_head__d7jo8b($this);
        // Inline function 'kotlin.Long.plus' call
        var other = _get_totalSize__xhdb3o($this);
        // Inline function 'kotlin.Long.minus' call
        var this_0 = add(tmp0, fromInt(other));
        var tmp$ret$1 = subtract(this_0, fromInt(1));
        tmp = getBufferAt(buffer, tmp$ret$1) === get_NO_VALUE();
      } else {
        tmp = false;
      }
      if (!tmp) {
        break $l$loop;
      }
      $this.m1g_1 = $this.m1g_1 - 1 | 0;
      var tmp0_0 = _get_head__d7jo8b($this);
      // Inline function 'kotlin.Long.plus' call
      var other_0 = _get_totalSize__xhdb3o($this);
      var tmp$ret$2 = add(tmp0_0, fromInt(other_0));
      setBufferAt(buffer, tmp$ret$2, null);
    }
  }
  function tryTakeValue($this, slot) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var index = tryPeekLocked($this, slot);
    var tmp;
    if (compare(index, new Long(0, 0)) < 0) {
      tmp = get_NO_VALUE();
    } else {
      var oldIndex = slot.r1g_1;
      var newValue = getPeekedValueLockedAt($this, index);
      var tmp_0 = slot;
      // Inline function 'kotlin.Long.plus' call
      tmp_0.r1g_1 = add(index, fromInt(1));
      resumes = $this.x1g(oldIndex);
      tmp = newValue;
    }
    var value = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var resume = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (resume == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
        resume.w8(tmp$ret$5);
      }
    }
    return value;
  }
  function tryPeekLocked($this, slot) {
    var index = slot.r1g_1;
    if (compare(index, _get_bufferEndIndex__d2rk18($this)) < 0)
      return index;
    if ($this.g1g_1 > 0)
      return new Long(-1, -1);
    if (compare(index, _get_head__d7jo8b($this)) > 0)
      return new Long(-1, -1);
    if ($this.m1g_1 === 0)
      return new Long(-1, -1);
    return index;
  }
  function getPeekedValueLockedAt($this, index) {
    var item = getBufferAt(ensureNotNull($this.i1g_1), index);
    var tmp;
    if (item instanceof Emitter) {
      tmp = item.v1g_1;
    } else {
      tmp = item;
    }
    return tmp;
  }
  function awaitValue($this, slot, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    $l$block: {
      var index = tryPeekLocked($this, slot);
      if (compare(index, new Long(0, 0)) < 0) {
        slot.s1g_1 = cancellable;
      } else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(Unit_instance);
        cancellable.w8(tmp$ret$6);
        break $l$block;
      }
      slot.s1g_1 = cancellable;
    }
    return cancellable.ow();
  }
  function findSlotsToResumeLocked($this, resumesIn) {
    var resumes = resumesIn;
    var resumeCount = resumesIn.length;
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if ($this.o1g_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = $this.n1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            $l$block_1: {
              var tmp0_elvis_lhs = element.s1g_1;
              var tmp;
              if (tmp0_elvis_lhs == null) {
                break $l$block_1;
              } else {
                tmp = tmp0_elvis_lhs;
              }
              var cont = tmp;
              if (compare(tryPeekLocked($this, element), new Long(0, 0)) < 0) {
                break $l$block_1;
              }
              if (resumeCount >= resumes.length) {
                var tmp_0 = resumes;
                // Inline function 'kotlin.comparisons.maxOf' call
                var b = imul(2, resumes.length);
                var tmp$ret$4 = Math.max(2, b);
                resumes = copyOf(tmp_0, tmp$ret$4);
              }
              var tmp_1 = resumes;
              var _unary__edvuaz = resumeCount;
              resumeCount = _unary__edvuaz + 1 | 0;
              tmp_1[_unary__edvuaz] = cont;
              element.s1g_1 = null;
            }
          }
        }
      }
    }
    return resumes;
  }
  function Emitter(flow, index, value, cont) {
    this.t1g_1 = flow;
    this.u1g_1 = index;
    this.v1g_1 = value;
    this.w1g_1 = cont;
  }
  protoOf(Emitter).jy = function () {
    return cancelEmitter(this.t1g_1, this);
  };
  function $collectCOROUTINE$_1(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1h_1 = _this__u8e3s4;
    this.h1h_1 = collector;
  }
  protoOf($collectCOROUTINE$_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 13;
            this.i1h_1 = this.g1h_1.l1h();
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 12;
            var tmp_0 = this.h1h_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.l8_1 = 2;
              suspendResult = this.h1h_1.o1h(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 3;
              continue $sm;
            }

          case 2:
            this.l8_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.k1h_1 = this.r8().y8(Key_instance_3);
            this.l8_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.l8_1 = 10;
              continue $sm;
            }

            this.l8_1 = 5;
            continue $sm;
          case 5:
            if (!true) {
              this.l8_1 = 8;
              continue $sm;
            }

            this.j1h_1 = tryTakeValue(this.g1h_1, this.i1h_1);
            if (!(this.j1h_1 === get_NO_VALUE())) {
              this.l8_1 = 8;
              continue $sm;
            } else {
              this.l8_1 = 6;
              continue $sm;
            }

          case 6:
            this.l8_1 = 7;
            suspendResult = awaitValue(this.g1h_1, this.i1h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 7:
            this.l8_1 = 5;
            continue $sm;
          case 8:
            var tmp0_safe_receiver = this.k1h_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            this.l8_1 = 9;
            suspendResult = this.h1h_1.l1f(this.j1h_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 9:
            this.l8_1 = 4;
            continue $sm;
          case 10:
            this.m8_1 = 13;
            this.l8_1 = 11;
            continue $sm;
          case 11:
            this.m8_1 = 13;
            this.g1h_1.p1h(this.i1h_1);
            return Unit_instance;
          case 12:
            this.m8_1 = 13;
            var t = this.o8_1;
            this.g1h_1.p1h(this.i1h_1);
            throw t;
          case 13:
            throw this.o8_1;
        }
      } catch ($p) {
        var e = $p;
        if (this.m8_1 === 13) {
          throw e;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e;
        }
      }
     while (true);
  };
  function SharedFlowImpl(replay, bufferCapacity, onBufferOverflow) {
    AbstractSharedFlow.call(this);
    this.f1g_1 = replay;
    this.g1g_1 = bufferCapacity;
    this.h1g_1 = onBufferOverflow;
    this.i1g_1 = null;
    this.j1g_1 = new Long(0, 0);
    this.k1g_1 = new Long(0, 0);
    this.l1g_1 = 0;
    this.m1g_1 = 0;
  }
  protoOf(SharedFlowImpl).q1h = function () {
    var tmp = ensureNotNull(this.i1g_1);
    var tmp0 = this.j1g_1;
    // Inline function 'kotlin.Long.plus' call
    var other = _get_replaySize__dxgnb1(this);
    // Inline function 'kotlin.Long.minus' call
    var this_0 = add(tmp0, fromInt(other));
    var tmp$ret$1 = subtract(this_0, fromInt(1));
    return getBufferAt(tmp, tmp$ret$1);
  };
  protoOf(SharedFlowImpl).r1h = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_1(this, collector, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(SharedFlowImpl).z1d = function (collector, $completion) {
    return this.r1h(collector, $completion);
  };
  protoOf(SharedFlowImpl).s1h = function (value) {
    var resumes = get_EMPTY_RESUMES();
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var tmp;
    if (tryEmitLocked(this, value)) {
      resumes = findSlotsToResumeLocked(this, resumes);
      tmp = true;
    } else {
      tmp = false;
    }
    var emitted = tmp;
    var indexedObject = resumes;
    var inductionVariable = 0;
    var last = indexedObject.length;
    while (inductionVariable < last) {
      var cont = indexedObject[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.w8(tmp$ret$4);
      }
    }
    return emitted;
  };
  protoOf(SharedFlowImpl).l1f = function (value, $completion) {
    if (this.s1h(value))
      return Unit_instance;
    return emitSuspend(this, value, $completion);
  };
  protoOf(SharedFlowImpl).t1h = function () {
    var index = this.j1g_1;
    if (compare(index, this.k1g_1) < 0)
      this.k1g_1 = index;
    return index;
  };
  protoOf(SharedFlowImpl).x1g = function (oldIndex) {
    // Inline function 'kotlinx.coroutines.assert' call
    if (compare(oldIndex, this.k1g_1) > 0)
      return get_EMPTY_RESUMES();
    var head = _get_head__d7jo8b(this);
    // Inline function 'kotlin.Long.plus' call
    var other = this.l1g_1;
    var newMinCollectorIndex = add(head, fromInt(other));
    if (this.g1g_1 === 0 && this.m1g_1 > 0) {
      var _unary__edvuaz = newMinCollectorIndex;
      newMinCollectorIndex = add(_unary__edvuaz, get_ONE());
    }
    $l$block: {
      // Inline function 'kotlinx.coroutines.flow.internal.AbstractSharedFlow.forEachSlotLocked' call
      if (this.o1g_1 === 0) {
        break $l$block;
      }
      var tmp0_safe_receiver = this.n1g_1;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (!(element == null)) {
            var containsArg = element.r1g_1;
            if (compare(new Long(0, 0), containsArg) <= 0 ? compare(containsArg, newMinCollectorIndex) < 0 : false)
              newMinCollectorIndex = element.r1g_1;
          }
        }
      }
    }
    // Inline function 'kotlinx.coroutines.assert' call
    if (compare(newMinCollectorIndex, this.k1g_1) <= 0)
      return get_EMPTY_RESUMES();
    var newBufferEndIndex = _get_bufferEndIndex__d2rk18(this);
    var tmp;
    if (this.o1g_1 > 0) {
      var newBufferSize0 = convertToInt(subtract(newBufferEndIndex, newMinCollectorIndex));
      var tmp0 = this.m1g_1;
      // Inline function 'kotlin.comparisons.minOf' call
      var b = this.g1g_1 - newBufferSize0 | 0;
      tmp = Math.min(tmp0, b);
    } else {
      tmp = this.m1g_1;
    }
    var maxResumeCount = tmp;
    var resumes = get_EMPTY_RESUMES();
    var tmp0_0 = newBufferEndIndex;
    // Inline function 'kotlin.Long.plus' call
    var other_0 = this.m1g_1;
    var newQueueEndIndex = add(tmp0_0, fromInt(other_0));
    if (maxResumeCount > 0) {
      // Inline function 'kotlin.arrayOfNulls' call
      resumes = Array(maxResumeCount);
      var resumeCount = 0;
      var buffer = ensureNotNull(this.i1g_1);
      var inductionVariable_0 = newBufferEndIndex;
      if (compare(inductionVariable_0, newQueueEndIndex) < 0)
        $l$loop: do {
          var curEmitterIndex = inductionVariable_0;
          inductionVariable_0 = add(inductionVariable_0, new Long(1, 0));
          var emitter = getBufferAt(buffer, curEmitterIndex);
          if (!(emitter === get_NO_VALUE())) {
            if (!(emitter instanceof Emitter))
              THROW_CCE();
            var tmp_0 = resumes;
            var _unary__edvuaz_0 = resumeCount;
            resumeCount = _unary__edvuaz_0 + 1 | 0;
            tmp_0[_unary__edvuaz_0] = emitter.w1g_1;
            setBufferAt(buffer, curEmitterIndex, get_NO_VALUE());
            setBufferAt(buffer, newBufferEndIndex, emitter.v1g_1);
            var _unary__edvuaz_1 = newBufferEndIndex;
            newBufferEndIndex = add(_unary__edvuaz_1, get_ONE());
            if (resumeCount >= maxResumeCount)
              break $l$loop;
          }
        }
         while (compare(inductionVariable_0, newQueueEndIndex) < 0);
    }
    var tmp0_1 = this.j1g_1;
    var tmp0_2 = newBufferEndIndex;
    // Inline function 'kotlin.Long.minus' call
    var other_1 = this.f1g_1;
    // Inline function 'kotlin.comparisons.maxOf' call
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_0 = subtract(tmp0_2, fromInt(other_1));
    // Inline function 'kotlin.comparisons.maxOf' call
    var b_1 = compare(head, b_0) >= 0 ? head : b_0;
    var newReplayIndex = compare(tmp0_1, b_1) >= 0 ? tmp0_1 : b_1;
    if (this.g1g_1 === 0 && compare(newReplayIndex, newQueueEndIndex) < 0 && equals(getBufferAt(ensureNotNull(this.i1g_1), newReplayIndex), get_NO_VALUE())) {
      var _unary__edvuaz_2 = newBufferEndIndex;
      newBufferEndIndex = add(_unary__edvuaz_2, get_ONE());
      var _unary__edvuaz_3 = newReplayIndex;
      newReplayIndex = add(_unary__edvuaz_3, get_ONE());
    }
    if (this.o1g_1 === 0)
      newMinCollectorIndex = newBufferEndIndex;
    updateBufferLocked(this, newReplayIndex, newMinCollectorIndex, newBufferEndIndex, newQueueEndIndex);
    cleanupTailLocked(this);
    // Inline function 'kotlin.collections.isNotEmpty' call
    // Inline function 'kotlin.collections.isEmpty' call
    if (!(resumes.length === 0))
      resumes = findSlotsToResumeLocked(this, resumes);
    return resumes;
  };
  protoOf(SharedFlowImpl).u1h = function () {
    return new SharedFlowSlot();
  };
  protoOf(SharedFlowImpl).v1h = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  function SharedFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.r1g_1 = new Long(-1, -1);
    this.s1g_1 = null;
  }
  protoOf(SharedFlowSlot).w1h = function (flow) {
    if (compare(this.r1g_1, new Long(0, 0)) >= 0)
      return false;
    this.r1g_1 = flow.t1h();
    return true;
  };
  protoOf(SharedFlowSlot).x1h = function (flow) {
    return this.w1h(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  protoOf(SharedFlowSlot).y1h = function (flow) {
    // Inline function 'kotlinx.coroutines.assert' call
    var oldIndex = this.r1g_1;
    this.r1g_1 = new Long(-1, -1);
    this.s1g_1 = null;
    return flow.x1g(oldIndex);
  };
  protoOf(SharedFlowSlot).z1h = function (flow) {
    return this.y1h(flow instanceof SharedFlowImpl ? flow : THROW_CCE());
  };
  function getBufferAt(_this__u8e3s4, index) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[convertToInt(index) & (_this__u8e3s4.length - 1 | 0)];
  }
  function setBufferAt(_this__u8e3s4, index, item) {
    _init_properties_SharedFlow_kt__umasnn();
    return _this__u8e3s4[convertToInt(index) & (_this__u8e3s4.length - 1 | 0)] = item;
  }
  var properties_initialized_SharedFlow_kt_tmefor;
  function _init_properties_SharedFlow_kt__umasnn() {
    if (!properties_initialized_SharedFlow_kt_tmefor) {
      properties_initialized_SharedFlow_kt_tmefor = true;
      NO_VALUE = new Symbol('NO_VALUE');
    }
  }
  function get_NONE() {
    _init_properties_StateFlow_kt__eu9yi5();
    return NONE;
  }
  var NONE;
  function get_PENDING() {
    _init_properties_StateFlow_kt__eu9yi5();
    return PENDING;
  }
  var PENDING;
  function MutableStateFlow(value) {
    _init_properties_StateFlow_kt__eu9yi5();
    return new StateFlowImpl(value == null ? get_NULL() : value);
  }
  function updateState($this, expectedState, newState) {
    var curSequence;
    var curSlots;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var oldState = $this.e1i_1.kotlinx$atomicfu$value;
    if (!(expectedState == null) && !equals(oldState, expectedState))
      return false;
    if (equals(oldState, newState))
      return true;
    $this.e1i_1.kotlinx$atomicfu$value = newState;
    curSequence = $this.f1i_1;
    if ((curSequence & 1) === 0) {
      curSequence = curSequence + 1 | 0;
      $this.f1i_1 = curSequence;
    } else {
      $this.f1i_1 = curSequence + 2 | 0;
      return true;
    }
    curSlots = $this.n1g_1;
    while (true) {
      var tmp0_safe_receiver = curSlots;
      if (tmp0_safe_receiver == null)
        null;
      else {
        // Inline function 'kotlin.collections.forEach' call
        var inductionVariable = 0;
        var last = tmp0_safe_receiver.length;
        while (inductionVariable < last) {
          var element = tmp0_safe_receiver[inductionVariable];
          inductionVariable = inductionVariable + 1 | 0;
          if (element == null)
            null;
          else {
            element.h1i();
          }
        }
      }
      // Inline function 'kotlinx.coroutines.internal.synchronized' call
      // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
      if ($this.f1i_1 === curSequence) {
        $this.f1i_1 = curSequence + 1 | 0;
        return true;
      }
      curSequence = $this.f1i_1;
      curSlots = $this.n1g_1;
    }
  }
  function $collectCOROUTINE$_2(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.q1i_1 = _this__u8e3s4;
    this.r1i_1 = collector;
  }
  protoOf($collectCOROUTINE$_2).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 12;
            this.s1i_1 = this.q1i_1.l1h();
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 11;
            var tmp_0 = this.r1i_1;
            if (tmp_0 instanceof SubscribedFlowCollector) {
              this.l8_1 = 2;
              suspendResult = this.r1i_1.o1h(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 3;
              continue $sm;
            }

          case 2:
            this.l8_1 = 3;
            continue $sm;
          case 3:
            var tmp_1 = this;
            tmp_1.v1i_1 = this.r8().y8(Key_instance_3);
            this.t1i_1 = null;
            this.l8_1 = 4;
            continue $sm;
          case 4:
            if (!true) {
              this.l8_1 = 9;
              continue $sm;
            }

            this.u1i_1 = this.q1i_1.e1i_1.kotlinx$atomicfu$value;
            var tmp0_safe_receiver = this.v1i_1;
            if (tmp0_safe_receiver == null)
              null;
            else {
              ensureActive_0(tmp0_safe_receiver);
            }

            if (this.t1i_1 == null || !equals(this.t1i_1, this.u1i_1)) {
              this.l8_1 = 5;
              var tmp0 = get_NULL();
              var value = this.u1i_1;
              suspendResult = this.r1i_1.l1f(value === tmp0 ? null : value, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 6;
              continue $sm;
            }

          case 5:
            this.t1i_1 = this.u1i_1;
            this.l8_1 = 6;
            continue $sm;
          case 6:
            if (!this.s1i_1.x1i()) {
              this.l8_1 = 7;
              suspendResult = this.s1i_1.w1i(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 8;
              continue $sm;
            }

          case 7:
            this.l8_1 = 8;
            continue $sm;
          case 8:
            this.l8_1 = 4;
            continue $sm;
          case 9:
            this.m8_1 = 12;
            this.l8_1 = 10;
            continue $sm;
          case 10:
            this.m8_1 = 12;
            this.q1i_1.p1h(this.s1i_1);
            return Unit_instance;
          case 11:
            this.m8_1 = 12;
            var t = this.o8_1;
            this.q1i_1.p1h(this.s1i_1);
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
  function StateFlowImpl(initialState) {
    AbstractSharedFlow.call(this);
    this.e1i_1 = atomic$ref$1(initialState);
    this.f1i_1 = 0;
  }
  protoOf(StateFlowImpl).y1i = function (value) {
    updateState(this, null, value == null ? get_NULL() : value);
  };
  protoOf(StateFlowImpl).r1 = function () {
    var tmp0 = get_NULL();
    // Inline function 'kotlinx.coroutines.internal.Symbol.unbox' call
    var value = this.e1i_1.kotlinx$atomicfu$value;
    return value === tmp0 ? null : value;
  };
  protoOf(StateFlowImpl).z1i = function (expect, update) {
    var tmp = expect == null ? get_NULL() : expect;
    return updateState(this, tmp, update == null ? get_NULL() : update);
  };
  protoOf(StateFlowImpl).s1h = function (value) {
    this.y1i(value);
    return true;
  };
  protoOf(StateFlowImpl).l1f = function (value, $completion) {
    this.y1i(value);
    return Unit_instance;
  };
  protoOf(StateFlowImpl).r1h = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_2(this, collector, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(StateFlowImpl).z1d = function (collector, $completion) {
    return this.r1h(collector, $completion);
  };
  protoOf(StateFlowImpl).u1h = function () {
    return new StateFlowSlot();
  };
  protoOf(StateFlowImpl).v1h = function (size) {
    // Inline function 'kotlin.arrayOfNulls' call
    return Array(size);
  };
  function StateFlowSlot() {
    AbstractSharedFlowSlot.call(this);
    this.g1i_1 = new WorkaroundAtomicReference(null);
  }
  protoOf(StateFlowSlot).a1j = function (flow) {
    if (!(get_value(this.g1i_1) == null))
      return false;
    set_value(this.g1i_1, get_NONE());
    return true;
  };
  protoOf(StateFlowSlot).x1h = function (flow) {
    return this.a1j(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).b1j = function (flow) {
    set_value(this.g1i_1, null);
    return get_EMPTY_RESUMES();
  };
  protoOf(StateFlowSlot).z1h = function (flow) {
    return this.b1j(flow instanceof StateFlowImpl ? flow : THROW_CCE());
  };
  protoOf(StateFlowSlot).h1i = function () {
    // Inline function 'kotlinx.coroutines.internal.loop' call
    var this_0 = this.g1i_1;
    while (true) {
      var state = get_value(this_0);
      if (state == null)
        return Unit_instance;
      else if (state === get_PENDING())
        return Unit_instance;
      else if (state === get_NONE()) {
        if (this.g1i_1.d1j(state, get_PENDING()))
          return Unit_instance;
      } else {
        if (this.g1i_1.d1j(state, get_NONE())) {
          // Inline function 'kotlin.coroutines.resume' call
          var this_1 = state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          // Inline function 'kotlin.Companion.success' call
          var tmp$ret$3 = _Result___init__impl__xyqfz8(Unit_instance);
          this_1.w8(tmp$ret$3);
          return Unit_instance;
        }
      }
    }
  };
  protoOf(StateFlowSlot).x1i = function () {
    // Inline function 'kotlin.let' call
    // Inline function 'kotlinx.coroutines.assert' call
    return ensureNotNull(this.g1i_1.e1j(get_NONE())) === get_PENDING();
  };
  protoOf(StateFlowSlot).w1i = function ($completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    $l$block: {
      // Inline function 'kotlinx.coroutines.assert' call
      if (this.g1i_1.d1j(get_NONE(), cancellable)) {
        break $l$block;
      }
      // Inline function 'kotlinx.coroutines.assert' call
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$5 = _Result___init__impl__xyqfz8(Unit_instance);
      cancellable.w8(tmp$ret$5);
    }
    return cancellable.ow();
  };
  var properties_initialized_StateFlow_kt_nsqikx;
  function _init_properties_StateFlow_kt__eu9yi5() {
    if (!properties_initialized_StateFlow_kt_nsqikx) {
      properties_initialized_StateFlow_kt_nsqikx = true;
      NONE = new Symbol('NONE');
      PENDING = new Symbol('PENDING');
    }
  }
  function get_EMPTY_RESUMES() {
    _init_properties_AbstractSharedFlow_kt__h2xygb();
    return EMPTY_RESUMES;
  }
  var EMPTY_RESUMES;
  function AbstractSharedFlow() {
    SynchronizedObject.call(this);
    this.n1g_1 = null;
    this.o1g_1 = 0;
    this.p1g_1 = 0;
    this.q1g_1 = null;
  }
  protoOf(AbstractSharedFlow).l1h = function () {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    var curSlots = this.n1g_1;
    var tmp;
    if (curSlots == null) {
      // Inline function 'kotlin.also' call
      var this_0 = this.v1h(2);
      this.n1g_1 = this_0;
      tmp = this_0;
    } else {
      var tmp_0;
      if (this.o1g_1 >= curSlots.length) {
        // Inline function 'kotlin.also' call
        var this_1 = copyOf(curSlots, imul(2, curSlots.length));
        this.n1g_1 = this_1;
        tmp_0 = this_1;
      } else {
        tmp_0 = curSlots;
      }
      tmp = tmp_0;
    }
    var slots = tmp;
    var index = this.p1g_1;
    var slot;
    $l$loop: while (true) {
      var tmp0_elvis_lhs = slots[index];
      var tmp_1;
      if (tmp0_elvis_lhs == null) {
        // Inline function 'kotlin.also' call
        var this_2 = this.u1h();
        slots[index] = this_2;
        tmp_1 = this_2;
      } else {
        tmp_1 = tmp0_elvis_lhs;
      }
      slot = tmp_1;
      index = index + 1 | 0;
      if (index >= slots.length)
        index = 0;
      if ((slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).x1h(this))
        break $l$loop;
    }
    this.p1g_1 = index;
    this.o1g_1 = this.o1g_1 + 1 | 0;
    subscriptionCount = this.q1g_1;
    var slot_0 = slot;
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.r1j(1);
    return slot_0;
  };
  protoOf(AbstractSharedFlow).p1h = function (slot) {
    var subscriptionCount;
    // Inline function 'kotlinx.coroutines.internal.synchronized' call
    // Inline function 'kotlinx.coroutines.internal.synchronizedImpl' call
    this.o1g_1 = this.o1g_1 - 1 | 0;
    subscriptionCount = this.q1g_1;
    if (this.o1g_1 === 0)
      this.p1g_1 = 0;
    var resumes = (slot instanceof AbstractSharedFlowSlot ? slot : THROW_CCE()).z1h(this);
    var inductionVariable = 0;
    var last = resumes.length;
    while (inductionVariable < last) {
      var cont = resumes[inductionVariable];
      inductionVariable = inductionVariable + 1 | 0;
      if (cont == null)
        null;
      else {
        // Inline function 'kotlin.coroutines.resume' call
        // Inline function 'kotlin.Companion.success' call
        var tmp$ret$4 = _Result___init__impl__xyqfz8(Unit_instance);
        cont.w8(tmp$ret$4);
      }
    }
    if (subscriptionCount == null)
      null;
    else
      subscriptionCount.r1j(-1);
  };
  function AbstractSharedFlowSlot() {
  }
  var properties_initialized_AbstractSharedFlow_kt_2mpafr;
  function _init_properties_AbstractSharedFlow_kt__h2xygb() {
    if (!properties_initialized_AbstractSharedFlow_kt_2mpafr) {
      properties_initialized_AbstractSharedFlow_kt_2mpafr = true;
      // Inline function 'kotlin.arrayOfNulls' call
      EMPTY_RESUMES = Array(0);
    }
  }
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation) {
    this.a1k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).c1k = function (it, $completion) {
    var tmp = this.d1k(it, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).d9 = function (p1, $completion) {
    return this.c1k((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.a1k_1.g1f(this.b1k_1, this);
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
  protoOf(ChannelFlow$_get_collectToFun_$slambda_j53z2e).d1k = function (it, completion) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this.a1k_1, completion);
    i.b1k_1 = it;
    return i;
  };
  function ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this$0, resultContinuation) {
    var i = new ChannelFlow$_get_collectToFun_$slambda_j53z2e(this$0, resultContinuation);
    return constructCallableReference(function (it, $completion) {
      return i.c1k(it, $completion);
    }, 1);
  }
  function ChannelFlow$collect$slambda($collector, this$0, resultContinuation) {
    this.m1k_1 = $collector;
    this.n1k_1 = this$0;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(ChannelFlow$collect$slambda).p1k = function ($this$coroutineScope, $completion) {
    var tmp = this.q1k($this$coroutineScope, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ChannelFlow$collect$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(ChannelFlow$collect$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = emitAll(this.m1k_1, this.n1k_1.h1f(this.o1k_1), this);
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
  protoOf(ChannelFlow$collect$slambda).q1k = function ($this$coroutineScope, completion) {
    var i = new ChannelFlow$collect$slambda(this.m1k_1, this.n1k_1, completion);
    i.o1k_1 = $this$coroutineScope;
    return i;
  };
  function ChannelFlow$collect$slambda_0($collector, this$0, resultContinuation) {
    var i = new ChannelFlow$collect$slambda($collector, this$0, resultContinuation);
    return constructCallableReference(function ($this$coroutineScope, $completion) {
      return i.p1k($this$coroutineScope, $completion);
    }, 1);
  }
  function ChannelFlow(context, capacity, onBufferOverflow) {
    this.d1f_1 = context;
    this.e1f_1 = capacity;
    this.f1f_1 = onBufferOverflow;
    // Inline function 'kotlinx.coroutines.assert' call
  }
  protoOf(ChannelFlow).j1f = function () {
    return ChannelFlow$_get_collectToFun_$slambda_j53z2e_0(this, null);
  };
  protoOf(ChannelFlow).k1f = function () {
    return this.e1f_1 === -3 ? -2 : this.e1f_1;
  };
  protoOf(ChannelFlow).h1f = function (scope) {
    return produce(scope, this.d1f_1, this.k1f(), this.f1f_1, CoroutineStart_ATOMIC_getInstance(), VOID, this.j1f());
  };
  protoOf(ChannelFlow).z1d = function (collector, $completion) {
    return coroutineScope(ChannelFlow$collect$slambda_0(collector, this, null), $completion);
  };
  protoOf(ChannelFlow).i1f = function () {
    return null;
  };
  protoOf(ChannelFlow).toString = function () {
    var props = ArrayList_init_$Create$(4);
    var tmp0_safe_receiver = this.i1f();
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      props.g(tmp0_safe_receiver);
    }
    if (!(this.d1f_1 === EmptyCoroutineContext_getInstance())) {
      props.g('context=' + toString(this.d1f_1));
    }
    if (!(this.e1f_1 === -3)) {
      props.g('capacity=' + this.e1f_1);
    }
    if (!this.f1f_1.equals(BufferOverflow_SUSPEND_getInstance())) {
      props.g('onBufferOverflow=' + this.f1f_1.toString());
    }
    return get_classSimpleName(this) + '[' + joinToString(props, ', ') + ']';
  };
  function scopedFlow(block) {
    // Inline function 'kotlinx.coroutines.flow.internal.unsafeFlow' call
    return new scopedFlow$$inlined$unsafeFlow$1(block);
  }
  function flowScope(block, $completion) {
    var coroutine = new FlowCoroutine($completion.r8(), $completion);
    return startUndispatchedOrReturn(coroutine, coroutine, block);
  }
  function FlowCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(FlowCoroutine).vv = function (cause) {
    if (cause instanceof ChildCancelledException)
      return true;
    return this.xv(cause);
  };
  function scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation) {
    this.d1l_1 = $block;
    this.e1l_1 = $$this$flow;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(scopedFlow$o$collect$slambda).p1k = function ($this$flowScope, $completion) {
    var tmp = this.q1k($this$flowScope, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(scopedFlow$o$collect$slambda).d9 = function (p1, $completion) {
    return this.p1k((!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(scopedFlow$o$collect$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.d1l_1(this.f1l_1, this.e1l_1, this);
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
  protoOf(scopedFlow$o$collect$slambda).q1k = function ($this$flowScope, completion) {
    var i = new scopedFlow$o$collect$slambda(this.d1l_1, this.e1l_1, completion);
    i.f1l_1 = $this$flowScope;
    return i;
  };
  function scopedFlow$o$collect$slambda_0($block, $$this$flow, resultContinuation) {
    var i = new scopedFlow$o$collect$slambda($block, $$this$flow, resultContinuation);
    return constructCallableReference(function ($this$flowScope, $completion) {
      return i.p1k($this$flowScope, $completion);
    }, 1);
  }
  function $collectCOROUTINE$_3(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.o1l_1 = _this__u8e3s4;
    this.p1l_1 = collector;
  }
  protoOf($collectCOROUTINE$_3).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            var $this$flow = this.p1l_1;
            this.l8_1 = 1;
            suspendResult = flowScope(scopedFlow$o$collect$slambda_0(this.o1l_1.q1l_1, $this$flow, null), this);
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
  function scopedFlow$$inlined$unsafeFlow$1($block) {
    this.q1l_1 = $block;
  }
  protoOf(scopedFlow$$inlined$unsafeFlow$1).r1l = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_3(this, collector, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(scopedFlow$$inlined$unsafeFlow$1).z1d = function (collector, $completion) {
    return this.r1l(collector, $completion);
  };
  function get_NULL() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return NULL;
  }
  var NULL;
  var UNINITIALIZED;
  function get_DONE() {
    _init_properties_NullSurrogate_kt__n2yti9();
    return DONE;
  }
  var DONE;
  var properties_initialized_NullSurrogate_kt_39v8bl;
  function _init_properties_NullSurrogate_kt__n2yti9() {
    if (!properties_initialized_NullSurrogate_kt_39v8bl) {
      properties_initialized_NullSurrogate_kt_39v8bl = true;
      NULL = new Symbol('NULL');
      UNINITIALIZED = new Symbol('UNINITIALIZED');
      DONE = new Symbol('DONE');
    }
  }
  function checkContext(_this__u8e3s4, currentContext) {
    var result = currentContext.xe(0, checkContext$lambda(_this__u8e3s4));
    if (!(result === _this__u8e3s4.z1f_1)) {
      // Inline function 'kotlin.error' call
      var message = 'Flow invariant is violated:\n' + ('\t\tFlow was collected in ' + toString(_this__u8e3s4.y1f_1) + ',\n') + ('\t\tbut emission happened in ' + toString(currentContext) + '.\n') + "\t\tPlease refer to 'flow' documentation or use 'flowOn' instead";
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function transitiveCoroutineParent(_this__u8e3s4, collectJob) {
    var $this = _this__u8e3s4;
    var collectJob_0 = collectJob;
    $l$1: do {
      $l$0: do {
        if ($this === null)
          return null;
        if ($this === collectJob_0)
          return $this;
        if (!($this instanceof ScopeCoroutine))
          return $this;
        var tmp0 = $this.cv();
        var tmp1 = collectJob_0;
        $this = tmp0;
        collectJob_0 = tmp1;
        continue $l$0;
      }
       while (false);
    }
     while (true);
  }
  function checkContext$lambda($this_checkContext) {
    return function (count, element) {
      var key = element.q1();
      var collectElement = $this_checkContext.y1f_1.y8(key);
      var tmp;
      if (!(key === Key_instance_3)) {
        return !(element === collectElement) ? -2147483648 : count + 1 | 0;
      }
      var collectJob = (collectElement == null ? true : isInterface(collectElement, Job)) ? collectElement : THROW_CCE();
      var emissionParentJob = transitiveCoroutineParent(isInterface(element, Job) ? element : THROW_CCE(), collectJob);
      var tmp_0;
      if (!(emissionParentJob === collectJob)) {
        // Inline function 'kotlin.error' call
        var message = 'Flow invariant is violated:\n\t\tEmission from another coroutine is detected.\n' + ('\t\tChild of ' + toString_0(emissionParentJob) + ', expected child of ' + toString_0(collectJob) + '.\n') + "\t\tFlowCollector is not thread-safe and concurrent emissions are prohibited.\n\t\tTo mitigate this restriction please use 'channelFlow' builder instead of 'flow'";
        throw IllegalStateException_init_$Create$(toString(message));
      }
      return collectJob == null ? count : count + 1 | 0;
    };
  }
  function SendingCollector(channel) {
    this.s1l_1 = channel;
  }
  protoOf(SendingCollector).l1f = function (value, $completion) {
    return this.s1l_1.h1c(value, $completion);
  };
  function debounce(_this__u8e3s4, timeout) {
    return debounce_0(_this__u8e3s4, toDelayMillis(timeout));
  }
  function debounce_0(_this__u8e3s4, timeoutMillis) {
    // Inline function 'kotlin.require' call
    if (!(compare(timeoutMillis, new Long(0, 0)) >= 0)) {
      var message = 'Debounce timeout should not be negative';
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    if (equalsLong(timeoutMillis, new Long(0, 0)))
      return _this__u8e3s4;
    return debounceInternal(_this__u8e3s4, debounce$lambda(timeoutMillis));
  }
  function debounceInternal(_this__u8e3s4, timeoutMillisSelector) {
    return scopedFlow(debounceInternal$slambda_0(timeoutMillisSelector, _this__u8e3s4, null));
  }
  function debounce$lambda($timeoutMillis) {
    return function (it) {
      return $timeoutMillis;
    };
  }
  function debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation) {
    this.b1m_1 = $this_produce;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda$slambda).d1m = function (value, $completion) {
    var tmp = this.e1m(value, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(debounceInternal$slambda$slambda$slambda).d9 = function (p1, $completion) {
    return this.d1m(p1, $completion);
  };
  protoOf(debounceInternal$slambda$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            var tmp0_elvis_lhs = this.c1m_1;
            suspendResult = this.b1m_1.h1c(tmp0_elvis_lhs == null ? get_NULL() : tmp0_elvis_lhs, this);
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
  protoOf(debounceInternal$slambda$slambda$slambda).e1m = function (value, completion) {
    var i = new debounceInternal$slambda$slambda$slambda(this.b1m_1, completion);
    i.c1m_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda$slambda_0($this_produce, resultContinuation) {
    var i = new debounceInternal$slambda$slambda$slambda($this_produce, resultContinuation);
    return constructCallableReference(function (value, $completion) {
      return i.d1m(value, $completion);
    }, 1);
  }
  function sam$kotlinx_coroutines_flow_FlowCollector$0(function_0) {
    this.f1m_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).l1f = function (value, $completion) {
    return this.f1m_1(value, $completion);
  };
  protoOf(sam$kotlinx_coroutines_flow_FlowCollector$0).r2 = function () {
    return this.f1m_1;
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
  function debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation) {
    this.o1m_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda).q1m = function ($this$produce, $completion) {
    var tmp = this.r1m($this$produce, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(debounceInternal$slambda$slambda).d9 = function (p1, $completion) {
    return this.q1m((!(p1 == null) ? isInterface(p1, ProducerScope) : false) ? p1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            var tmp_0 = debounceInternal$slambda$slambda$slambda_0(this.p1m_1, null);
            suspendResult = this.o1m_1.z1d(new sam$kotlinx_coroutines_flow_FlowCollector$0(tmp_0), this);
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
  protoOf(debounceInternal$slambda$slambda).r1m = function ($this$produce, completion) {
    var i = new debounceInternal$slambda$slambda(this.o1m_1, completion);
    i.p1m_1 = $this$produce;
    return i;
  };
  function debounceInternal$slambda$slambda_0($this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda$slambda($this_debounceInternal, resultContinuation);
    return constructCallableReference(function ($this$produce, $completion) {
      return i.q1m($this$produce, $completion);
    }, 1);
  }
  function debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation) {
    this.a1n_1 = $downstream;
    this.b1n_1 = $lastValue;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_1).c1n = function ($completion) {
    var tmp = this.d1n($completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(debounceInternal$slambda$slambda_1).e1n = function ($completion) {
    return this.c1n($completion);
  };
  protoOf(debounceInternal$slambda$slambda_1).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            var tmp0 = get_NULL();
            var value = this.b1n_1._v;
            suspendResult = this.a1n_1.l1f(value === tmp0 ? null : value, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.b1n_1._v = null;
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
  protoOf(debounceInternal$slambda$slambda_1).d1n = function (completion) {
    return new debounceInternal$slambda$slambda_1(this.a1n_1, this.b1n_1, completion);
  };
  function debounceInternal$slambda$slambda_2($downstream, $lastValue, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_1($downstream, $lastValue, resultContinuation);
    return constructCallableReference(function ($completion) {
      return i.c1n($completion);
    }, 0);
  }
  function debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation) {
    this.n1n_1 = $lastValue;
    this.o1n_1 = $downstream;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda$slambda_3).r1n = function (value, $completion) {
    var tmp = this.s1n(value, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(debounceInternal$slambda$slambda_3).d9 = function (p1, $completion) {
    return this.r1n(p1 instanceof ChannelResult ? p1.s1a_1 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda$slambda_3).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            var this_0 = this.p1n_1;
            var tmp_0 = _ChannelResult___get_holder__impl__pm9gzw(this_0);
            if (!(tmp_0 instanceof Failed)) {
              var it = _ChannelResult___get_holder__impl__pm9gzw(this_0);
              this.n1n_1._v = it;
            }

            this.q1n_1 = this_0;
            var tmp_1 = _ChannelResult___get_holder__impl__pm9gzw(this.q1n_1);
            if (tmp_1 instanceof Failed) {
              var tmp0_safe_receiver = ChannelResult__exceptionOrNull_impl_16ei30(this.q1n_1);
              if (tmp0_safe_receiver == null)
                null;
              else {
                throw tmp0_safe_receiver;
              }
              if (!(this.n1n_1._v == null)) {
                this.l8_1 = 1;
                var tmp0 = get_NULL();
                var value = this.n1n_1._v;
                suspendResult = this.o1n_1.l1f(value === tmp0 ? null : value, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.l8_1 = 2;
                continue $sm;
              }
            } else {
              this.l8_1 = 3;
              continue $sm;
            }

          case 1:
            this.l8_1 = 2;
            continue $sm;
          case 2:
            this.n1n_1._v = get_DONE();
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
  protoOf(debounceInternal$slambda$slambda_3).s1n = function (value, completion) {
    var i = new debounceInternal$slambda$slambda_3(this.n1n_1, this.o1n_1, completion);
    i.p1n_1 = value;
    return i;
  };
  function debounceInternal$slambda$slambda_4($lastValue, $downstream, resultContinuation) {
    var i = new debounceInternal$slambda$slambda_3($lastValue, $downstream, resultContinuation);
    return constructCallableReference(function (value, $completion) {
      return i.r1n(value.s1a_1, $completion);
    }, 1);
  }
  function debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    this.b1o_1 = $timeoutMillisSelector;
    this.c1o_1 = $this_debounceInternal;
    CoroutineImpl.call(this, resultContinuation);
  }
  protoOf(debounceInternal$slambda).i1o = function ($this$scopedFlow, downstream, $completion) {
    var tmp = this.j1o($this$scopedFlow, downstream, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(debounceInternal$slambda).k1o = function (p1, p2, $completion) {
    var tmp = (!(p1 == null) ? isInterface(p1, CoroutineScope) : false) ? p1 : THROW_CCE();
    return this.i1o(tmp, (!(p2 == null) ? isInterface(p2, FlowCollector) : false) ? p2 : THROW_CCE(), $completion);
  };
  protoOf(debounceInternal$slambda).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 7;
            var tmp_0 = this;
            tmp_0.g1o_1 = produce_0(this.d1o_1, VOID, VOID, debounceInternal$slambda$slambda_0(this.c1o_1, null));
            this.f1o_1 = {_v: null};
            this.l8_1 = 1;
            continue $sm;
          case 1:
            if (!!(this.f1o_1._v === get_DONE())) {
              this.l8_1 = 6;
              continue $sm;
            }

            this.h1o_1 = {_v: new Long(0, 0)};
            if (!(this.f1o_1._v == null)) {
              var tmp0 = get_NULL();
              var value = this.f1o_1._v;
              this.h1o_1._v = this.b1o_1(value === tmp0 ? null : value);
              if (!(compare(this.h1o_1._v, new Long(0, 0)) >= 0)) {
                var message = 'Debounce timeout should not be negative';
                throw IllegalArgumentException_init_$Create$(toString(message));
              }
              if (equalsLong(this.h1o_1._v, new Long(0, 0))) {
                this.l8_1 = 2;
                var tmp0_0 = get_NULL();
                var value_0 = this.f1o_1._v;
                suspendResult = this.e1o_1.l1f(value_0 === tmp0_0 ? null : value_0, this);
                if (suspendResult === get_COROUTINE_SUSPENDED()) {
                  return suspendResult;
                }
                continue $sm;
              } else {
                this.l8_1 = 3;
                continue $sm;
              }
            } else {
              this.l8_1 = 4;
              continue $sm;
            }

          case 2:
            this.f1o_1._v = null;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.l8_1 = 4;
            continue $sm;
          case 4:
            var $this$run = new SelectImplementation(this.r8());
            if (!(this.f1o_1._v == null)) {
              var tmp_1 = this.h1o_1._v;
              onTimeout($this$run, tmp_1, debounceInternal$slambda$slambda_2(this.e1o_1, this.f1o_1, null));
            }

            var tmp_2 = this.g1o_1.l1c();
            $this$run.l1o(tmp_2, debounceInternal$slambda$slambda_4(this.f1o_1, this.e1o_1, null));
            this.l8_1 = 5;
            suspendResult = $this$run.m1o(this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 5:
            this.l8_1 = 1;
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
  protoOf(debounceInternal$slambda).j1o = function ($this$scopedFlow, downstream, completion) {
    var i = new debounceInternal$slambda(this.b1o_1, this.c1o_1, completion);
    i.d1o_1 = $this$scopedFlow;
    i.e1o_1 = downstream;
    return i;
  };
  function debounceInternal$slambda_0($timeoutMillisSelector, $this_debounceInternal, resultContinuation) {
    var i = new debounceInternal$slambda($timeoutMillisSelector, $this_debounceInternal, resultContinuation);
    return constructCallableReference(function ($this$scopedFlow, downstream, $completion) {
      return i.i1o($this$scopedFlow, downstream, $completion);
    }, 2);
  }
  function ensureActive_1(_this__u8e3s4) {
    if (_this__u8e3s4 instanceof ThrowingCollector)
      throw _this__u8e3s4.n1o_1;
  }
  function ThrowingCollector() {
  }
  function asStateFlow(_this__u8e3s4) {
    return new ReadonlyStateFlow(_this__u8e3s4, null);
  }
  function $onSubscriptionCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.w1o_1 = _this__u8e3s4;
  }
  protoOf($onSubscriptionCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 7;
            var tmp_0 = this;
            tmp_0.x1o_1 = new SafeCollector(this.w1o_1.m1h_1, this.r8());
            this.l8_1 = 1;
            continue $sm;
          case 1:
            this.m8_1 = 6;
            this.l8_1 = 2;
            suspendResult = this.w1o_1.n1h_1(this.x1o_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            this.m8_1 = 7;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            this.m8_1 = 7;
            this.x1o_1.v8();
            var tmp_1 = this.w1o_1.m1h_1;
            if (tmp_1 instanceof SubscribedFlowCollector) {
              this.l8_1 = 4;
              suspendResult = this.w1o_1.m1h_1.o1h(this);
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
            return Unit_instance;
          case 6:
            this.m8_1 = 7;
            var t = this.o8_1;
            this.x1o_1.v8();
            throw t;
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
  function SubscribedFlowCollector() {
  }
  protoOf(SubscribedFlowCollector).o1h = function ($completion) {
    var tmp = new $onSubscriptionCOROUTINE$(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  function $collectCOROUTINE$_4(_this__u8e3s4, collector, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.g1p_1 = _this__u8e3s4;
    this.h1p_1 = collector;
  }
  protoOf($collectCOROUTINE$_4).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 2;
            this.l8_1 = 1;
            suspendResult = this.g1p_1.i1p_1.r1h(this.h1p_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            throwKotlinNothingValueException();
            break;
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
  function ReadonlyStateFlow(flow, job) {
    this.i1p_1 = flow;
    this.j1p_1 = job;
  }
  protoOf(ReadonlyStateFlow).r1 = function () {
    return this.i1p_1.r1();
  };
  protoOf(ReadonlyStateFlow).r1h = function (collector, $completion) {
    var tmp = new $collectCOROUTINE$_4(this, collector, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ReadonlyStateFlow).z1d = function (collector, $completion) {
    return this.r1h(collector, $completion);
  };
  function set_value(_this__u8e3s4, value) {
    return _this__u8e3s4.k1p(value);
  }
  function get_value(_this__u8e3s4) {
    return _this__u8e3s4.p12();
  }
  function get_CLOSED() {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    return CLOSED;
  }
  var CLOSED;
  function Segment(id, prev, pointers) {
    ConcurrentLinkedListNode.call(this, prev);
    this.xy_1 = id;
    this.yy_1 = atomic$int$1(pointers << 16);
  }
  protoOf(Segment).g18 = function () {
    return this.yy_1.kotlinx$atomicfu$value === this.i17() && !this.n18();
  };
  protoOf(Segment).h18 = function () {
    var tmp0 = this.yy_1;
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.internal.addConditionally' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (!(!(cur === this.i17()) || this.n18())) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
        if (tmp0.atomicfu$compareAndSet(cur, cur + 65536 | 0)) {
          tmp$ret$0 = true;
          break $l$block_0;
        }
      }
    }
    return tmp$ret$0;
  };
  protoOf(Segment).i18 = function () {
    return this.yy_1.atomicfu$addAndGet(-65536) === this.i17() && !this.n18();
  };
  protoOf(Segment).f18 = function () {
    if (this.yy_1.atomicfu$incrementAndGet() === this.i17()) {
      this.l3();
    }
  };
  function close(_this__u8e3s4) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    while (true) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return cur;
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (next === null) {
        if (cur.q18())
          return cur;
      } else {
        cur = next;
      }
    }
  }
  function _SegmentOrClosed___init__impl__jnexvb(value) {
    return value;
  }
  function _get_value__a43j40($this) {
    return $this;
  }
  function _SegmentOrClosed___get_isClosed__impl__qmxmlo($this) {
    return _get_value__a43j40($this) === get_CLOSED();
  }
  function _SegmentOrClosed___get_segment__impl__jvcr9l($this) {
    var tmp;
    if (_get_value__a43j40($this) === get_CLOSED()) {
      // Inline function 'kotlin.error' call
      var message = 'Does not contain segment';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      var tmp_0 = _get_value__a43j40($this);
      tmp = tmp_0 instanceof Segment ? tmp_0 : THROW_CCE();
    }
    return tmp;
  }
  function SegmentOrClosed__toString_impl_pzb2an($this) {
    return 'SegmentOrClosed(value=' + toString_0($this) + ')';
  }
  function SegmentOrClosed__hashCode_impl_4855hs($this) {
    return $this == null ? 0 : hashCode($this);
  }
  function SegmentOrClosed__equals_impl_6erq1g($this, other) {
    if (!(other instanceof SegmentOrClosed))
      return false;
    var tmp0_other_with_cast = other.r1a_1;
    if (!equals($this, tmp0_other_with_cast))
      return false;
    return true;
  }
  function SegmentOrClosed(value) {
    this.r1a_1 = value;
  }
  protoOf(SegmentOrClosed).toString = function () {
    return SegmentOrClosed__toString_impl_pzb2an(this.r1a_1);
  };
  protoOf(SegmentOrClosed).hashCode = function () {
    return SegmentOrClosed__hashCode_impl_4855hs(this.r1a_1);
  };
  protoOf(SegmentOrClosed).equals = function (other) {
    return SegmentOrClosed__equals_impl_6erq1g(this.r1a_1, other);
  };
  function _get_nextOrClosed__w0gmuv($this) {
    return $this.j18_1.kotlinx$atomicfu$value;
  }
  function _get_aliveSegmentLeft__mr4ndu($this) {
    var cur = $this.o18();
    while (!(cur === null) && cur.g18())
      cur = cur.k18_1.kotlinx$atomicfu$value;
    return cur;
  }
  function _get_aliveSegmentRight__7ulr0b($this) {
    // Inline function 'kotlinx.coroutines.assert' call
    var cur = ensureNotNull($this.l18());
    while (cur.g18()) {
      var tmp0_elvis_lhs = cur.l18();
      var tmp;
      if (tmp0_elvis_lhs == null) {
        return cur;
      } else {
        tmp = tmp0_elvis_lhs;
      }
      cur = tmp;
    }
    return cur;
  }
  function access$_get_nextOrClosed__ywzond($this) {
    return _get_nextOrClosed__w0gmuv($this);
  }
  function ConcurrentLinkedListNode(prev) {
    this.j18_1 = atomic$ref$1(null);
    this.k18_1 = atomic$ref$1(prev);
  }
  protoOf(ConcurrentLinkedListNode).l18 = function () {
    // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
    // Inline function 'kotlin.let' call
    var it = access$_get_nextOrClosed__ywzond(this);
    var tmp;
    if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
      return null;
    } else {
      tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
    }
    return tmp;
  };
  protoOf(ConcurrentLinkedListNode).m18 = function (value) {
    return this.j18_1.atomicfu$compareAndSet(null, value);
  };
  protoOf(ConcurrentLinkedListNode).n18 = function () {
    return this.l18() == null;
  };
  protoOf(ConcurrentLinkedListNode).o18 = function () {
    return this.k18_1.kotlinx$atomicfu$value;
  };
  protoOf(ConcurrentLinkedListNode).p18 = function () {
    // Inline function 'kotlinx.atomicfu.AtomicRef.lazySet' call
    this.k18_1.kotlinx$atomicfu$value = null;
  };
  protoOf(ConcurrentLinkedListNode).q18 = function () {
    return this.j18_1.atomicfu$compareAndSet(null, get_CLOSED());
  };
  protoOf(ConcurrentLinkedListNode).l3 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    if (this.n18())
      return Unit_instance;
    $l$loop_0: while (true) {
      var prev = _get_aliveSegmentLeft__mr4ndu(this);
      var next = _get_aliveSegmentRight__7ulr0b(this);
      var tmp0 = next.k18_1;
      $l$block: {
        // Inline function 'kotlinx.atomicfu.update' call
        while (true) {
          var cur = tmp0.kotlinx$atomicfu$value;
          var upd = cur === null ? null : prev;
          if (tmp0.atomicfu$compareAndSet(cur, upd)) {
            break $l$block;
          }
        }
      }
      if (!(prev === null))
        prev.j18_1.kotlinx$atomicfu$value = next;
      if (next.g18() && !next.n18())
        continue $l$loop_0;
      if (!(prev === null) && prev.g18())
        continue $l$loop_0;
      return Unit_instance;
    }
  };
  function findSegmentInternal(_this__u8e3s4, id, createNewSegment) {
    _init_properties_ConcurrentLinkedList_kt__5gcgzy();
    var cur = _this__u8e3s4;
    $l$loop: while (compare(cur.xy_1, id) < 0 || cur.g18()) {
      // Inline function 'kotlinx.coroutines.internal.ConcurrentLinkedListNode.nextOrIfClosed' call
      var this_0 = cur;
      // Inline function 'kotlin.let' call
      var it = access$_get_nextOrClosed__ywzond(this_0);
      var tmp;
      if (it === access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy()) {
        return _SegmentOrClosed___init__impl__jnexvb(get_CLOSED());
      } else {
        tmp = (it == null ? true : it instanceof ConcurrentLinkedListNode) ? it : THROW_CCE();
      }
      var next = tmp;
      if (!(next == null)) {
        cur = next;
        continue $l$loop;
      }
      // Inline function 'kotlin.Long.plus' call
      var this_1 = cur.xy_1;
      var newTail = createNewSegment(add(this_1, fromInt(1)), cur);
      if (cur.m18(newTail)) {
        if (cur.g18()) {
          cur.l3();
        }
        cur = newTail;
      }
    }
    return _SegmentOrClosed___init__impl__jnexvb(cur);
  }
  function access$_get_CLOSED_$tConcurrentLinkedListKt_wmtpdy() {
    return get_CLOSED();
  }
  var properties_initialized_ConcurrentLinkedList_kt_kwt434;
  function _init_properties_ConcurrentLinkedList_kt__5gcgzy() {
    if (!properties_initialized_ConcurrentLinkedList_kt_kwt434) {
      properties_initialized_ConcurrentLinkedList_kt_kwt434 = true;
      CLOSED = new Symbol('CLOSED');
    }
  }
  function handleUncaughtCoroutineException(context, exception) {
    var _iterator__ex2g4s = get_platformExceptionHandlers().i();
    while (_iterator__ex2g4s.j()) {
      var handler = _iterator__ex2g4s.k();
      try {
        handler.s11(context, exception);
      } catch ($p) {
        if ($p instanceof ExceptionSuccessfullyProcessed) {
          var _unused_var__etf5q3 = $p;
          return Unit_instance;
        } else {
          if ($p instanceof Error) {
            var t = $p;
            propagateExceptionFinalResort(handlerException(exception, t));
          } else {
            throw $p;
          }
        }
      }
    }
    try {
      addSuppressed(exception, new DiagnosticCoroutineContextException(context));
    } catch ($p_0) {
      if ($p_0 instanceof Error) {
        var e = $p_0;
      } else {
        throw $p_0;
      }
    }
    propagateExceptionFinalResort(exception);
  }
  function ExceptionSuccessfullyProcessed() {
  }
  function get_UNDEFINED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return UNDEFINED;
  }
  var UNDEFINED;
  function get_REUSABLE_CLAIMED() {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    return REUSABLE_CLAIMED;
  }
  var REUSABLE_CLAIMED;
  function resumeCancellableWithInternal(_this__u8e3s4, result) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp;
    if (_this__u8e3s4 instanceof DispatchedContinuation) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancellableWith' call
      var state = toState_0(result);
      if (safeIsDispatchNeeded(_this__u8e3s4.ly_1, _this__u8e3s4.r8())) {
        _this__u8e3s4.ny_1 = state;
        _this__u8e3s4.ty_1 = 1;
        safeDispatch(_this__u8e3s4.ly_1, _this__u8e3s4.r8(), _this__u8e3s4);
      } else {
        $l$block: {
          // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
          // Inline function 'kotlinx.coroutines.assert' call
          var eventLoop = ThreadLocalEventLoop_getInstance().n12();
          if (false && eventLoop.i12()) {
            break $l$block;
          }
          var tmp_0;
          if (eventLoop.h12()) {
            _this__u8e3s4.ny_1 = state;
            _this__u8e3s4.ty_1 = 1;
            eventLoop.g12(_this__u8e3s4);
            tmp_0 = true;
          } else {
            // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
            eventLoop.j12(true);
            try {
              var tmp$ret$5;
              $l$block_0: {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeCancelled' call
                var job = _this__u8e3s4.r8().y8(Key_instance_3);
                if (!(job == null) && !job.ju()) {
                  var cause = job.iv();
                  _this__u8e3s4.nz(state, cause);
                  // Inline function 'kotlin.coroutines.resumeWithException' call
                  // Inline function 'kotlin.Companion.failure' call
                  var tmp$ret$7 = _Result___init__impl__xyqfz8(createFailure(cause));
                  _this__u8e3s4.w8(tmp$ret$7);
                  tmp$ret$5 = true;
                  break $l$block_0;
                }
                tmp$ret$5 = false;
              }
              if (!tmp$ret$5) {
                // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
                _this__u8e3s4.my_1;
                // Inline function 'kotlinx.coroutines.withContinuationContext' call
                _this__u8e3s4.oy_1;
                _this__u8e3s4.my_1.w8(result);
              }
              $l$loop: while (eventLoop.f12()) {
              }
            } catch ($p) {
              if ($p instanceof Error) {
                var e = $p;
                _this__u8e3s4.f10(e);
              } else {
                throw $p;
              }
            }
            finally {
              eventLoop.k12(true);
            }
            tmp_0 = false;
          }
        }
      }
      tmp = Unit_instance;
    } else {
      _this__u8e3s4.w8(result);
      tmp = Unit_instance;
    }
    return tmp;
  }
  function _get_reusableCancellableContinuation__9qex09($this) {
    var tmp = $this.py_1.kotlinx$atomicfu$value;
    return tmp instanceof CancellableContinuationImpl ? tmp : null;
  }
  function DispatchedContinuation(dispatcher, continuation) {
    DispatchedTask.call(this, -1);
    this.ly_1 = dispatcher;
    this.my_1 = continuation;
    this.ny_1 = get_UNDEFINED();
    this.oy_1 = threadContextElements(this.r8());
    this.py_1 = atomic$ref$1(null);
  }
  protoOf(DispatchedContinuation).sy = function () {
    return !(this.py_1.kotlinx$atomicfu$value == null);
  };
  protoOf(DispatchedContinuation).l1p = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.py_1;
    while (true) {
      if (!(this_0.kotlinx$atomicfu$value === get_REUSABLE_CLAIMED()))
        return Unit_instance;
    }
  };
  protoOf(DispatchedContinuation).q11 = function () {
    this.l1p();
    var tmp0_safe_receiver = _get_reusableCancellableContinuation__9qex09(this);
    if (tmp0_safe_receiver == null)
      null;
    else {
      tmp0_safe_receiver.jz();
    }
  };
  protoOf(DispatchedContinuation).qy = function () {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.py_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === null) {
        this.py_1.kotlinx$atomicfu$value = get_REUSABLE_CLAIMED();
        return null;
      } else {
        if (state instanceof CancellableContinuationImpl) {
          if (this.py_1.atomicfu$compareAndSet(state, get_REUSABLE_CLAIMED())) {
            return state instanceof CancellableContinuationImpl ? state : THROW_CCE();
          }
        } else {
          if (state !== get_REUSABLE_CLAIMED()) {
            if (!(state instanceof Error)) {
              // Inline function 'kotlin.error' call
              var message = 'Inconsistent state ' + toString(state);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
  };
  protoOf(DispatchedContinuation).uz = function (continuation) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.py_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (state === get_REUSABLE_CLAIMED()) {
        if (this.py_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), continuation))
          return null;
      } else {
        if (state instanceof Error) {
          // Inline function 'kotlin.require' call
          // Inline function 'kotlin.require' call
          if (!this.py_1.atomicfu$compareAndSet(state, null)) {
            var message = 'Failed requirement.';
            throw IllegalArgumentException_init_$Create$(toString(message));
          }
          return state;
        } else {
          // Inline function 'kotlin.error' call
          var message_0 = 'Inconsistent state ' + toString_0(state);
          throw IllegalStateException_init_$Create$(toString(message_0));
        }
      }
    }
  };
  protoOf(DispatchedContinuation).uy = function (cause) {
    // Inline function 'kotlinx.atomicfu.loop' call
    var this_0 = this.py_1;
    while (true) {
      var state = this_0.kotlinx$atomicfu$value;
      if (equals(state, get_REUSABLE_CLAIMED())) {
        if (this.py_1.atomicfu$compareAndSet(get_REUSABLE_CLAIMED(), cause))
          return true;
      } else {
        if (state instanceof Error)
          return true;
        else {
          if (this.py_1.atomicfu$compareAndSet(state, null))
            return false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).mz = function () {
    var state = this.ny_1;
    // Inline function 'kotlinx.coroutines.assert' call
    this.ny_1 = get_UNDEFINED();
    return state;
  };
  protoOf(DispatchedContinuation).kz = function () {
    return this;
  };
  protoOf(DispatchedContinuation).w8 = function (result) {
    var state = toState_0(result);
    if (safeIsDispatchNeeded(this.ly_1, this.r8())) {
      this.ny_1 = state;
      this.ty_1 = 0;
      safeDispatch(this.ly_1, this.r8(), this);
    } else {
      $l$block: {
        // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
        // Inline function 'kotlinx.coroutines.assert' call
        var eventLoop = ThreadLocalEventLoop_getInstance().n12();
        if (false && eventLoop.i12()) {
          break $l$block;
        }
        var tmp;
        if (eventLoop.h12()) {
          this.ny_1 = state;
          this.ty_1 = 0;
          eventLoop.g12(this);
          tmp = true;
        } else {
          // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
          eventLoop.j12(true);
          try {
            this.r8();
            // Inline function 'kotlinx.coroutines.withCoroutineContext' call
            this.oy_1;
            this.my_1.w8(result);
            $l$loop: while (eventLoop.f12()) {
            }
          } catch ($p) {
            if ($p instanceof Error) {
              var e = $p;
              this.f10(e);
            } else {
              throw $p;
            }
          }
          finally {
            eventLoop.k12(true);
          }
          tmp = false;
        }
      }
    }
  };
  protoOf(DispatchedContinuation).a17 = function (context, value) {
    this.ny_1 = value;
    this.ty_1 = 1;
    this.ly_1.p11(context, this);
  };
  protoOf(DispatchedContinuation).toString = function () {
    return 'DispatchedContinuation[' + this.ly_1.toString() + ', ' + toDebugString(this.my_1) + ']';
  };
  protoOf(DispatchedContinuation).r8 = function () {
    return this.my_1.r8();
  };
  function safeDispatch(_this__u8e3s4, context, runnable) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      _this__u8e3s4.o11(context, runnable);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function safeIsDispatchNeeded(_this__u8e3s4, context) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    try {
      return _this__u8e3s4.n11(context);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        throw new DispatchException(e, _this__u8e3s4, context);
      } else {
        throw $p;
      }
    }
  }
  function yieldUndispatched(_this__u8e3s4) {
    _init_properties_DispatchedContinuation_kt__tnmqc0();
    var tmp$ret$0;
    $l$block: {
      // Inline function 'kotlinx.coroutines.internal.executeUnconfined' call
      // Inline function 'kotlinx.coroutines.assert' call
      var eventLoop = ThreadLocalEventLoop_getInstance().n12();
      if (true && eventLoop.i12()) {
        tmp$ret$0 = false;
        break $l$block;
      }
      var tmp;
      if (eventLoop.h12()) {
        _this__u8e3s4.ny_1 = Unit_instance;
        _this__u8e3s4.ty_1 = 1;
        eventLoop.g12(_this__u8e3s4);
        tmp = true;
      } else {
        // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
        eventLoop.j12(true);
        try {
          _this__u8e3s4.e10();
          $l$loop: while (eventLoop.f12()) {
          }
        } catch ($p) {
          if ($p instanceof Error) {
            var e = $p;
            _this__u8e3s4.f10(e);
          } else {
            throw $p;
          }
        }
        finally {
          eventLoop.k12(true);
        }
        tmp = false;
      }
      tmp$ret$0 = tmp;
    }
    return tmp$ret$0;
  }
  var properties_initialized_DispatchedContinuation_kt_2siadq;
  function _init_properties_DispatchedContinuation_kt__tnmqc0() {
    if (!properties_initialized_DispatchedContinuation_kt_2siadq) {
      properties_initialized_DispatchedContinuation_kt_2siadq = true;
      UNDEFINED = new Symbol('UNDEFINED');
      REUSABLE_CLAIMED = new Symbol('REUSABLE_CLAIMED');
    }
  }
  function DispatchedTask(resumeMode) {
    SchedulerTask.call(this);
    this.ty_1 = resumeMode;
  }
  protoOf(DispatchedTask).nz = function (takenState, cause) {
  };
  protoOf(DispatchedTask).tz = function (state) {
    return state;
  };
  protoOf(DispatchedTask).c10 = function (state) {
    var tmp0_safe_receiver = state instanceof CompletedExceptionally ? state : null;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver.ou_1;
  };
  protoOf(DispatchedTask).e10 = function () {
    // Inline function 'kotlinx.coroutines.assert' call
    try {
      var tmp = this.kz();
      var delegate = tmp instanceof DispatchedContinuation ? tmp : THROW_CCE();
      var continuation = delegate.my_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      delegate.oy_1;
      var context = continuation.r8();
      var state = this.mz();
      var exception = this.c10(state);
      var job = exception == null && get_isCancellableMode(this.ty_1) ? context.y8(Key_instance_3) : null;
      if (!(job == null) && !job.ju()) {
        var cause = job.iv();
        this.nz(state, cause);
        // Inline function 'kotlinx.coroutines.resumeWithStackTrace' call
        // Inline function 'kotlin.Companion.failure' call
        var exception_0 = recoverStackTrace(cause, continuation);
        var tmp$ret$4 = _Result___init__impl__xyqfz8(createFailure(exception_0));
        continuation.w8(tmp$ret$4);
      } else {
        if (!(exception == null)) {
          // Inline function 'kotlin.coroutines.resumeWithException' call
          // Inline function 'kotlin.Companion.failure' call
          var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(exception));
          continuation.w8(tmp$ret$6);
        } else {
          // Inline function 'kotlin.coroutines.resume' call
          // Inline function 'kotlin.Companion.success' call
          var value = this.tz(state);
          var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
          continuation.w8(tmp$ret$8);
        }
      }
    } catch ($p) {
      if ($p instanceof DispatchException) {
        var e = $p;
        handleCoroutineException(this.kz().r8(), e.r11_1);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          this.f10(e_0);
        } else {
          throw $p;
        }
      }
    }
  };
  protoOf(DispatchedTask).f10 = function (exception) {
    var reason = new CoroutinesInternalError('Fatal exception in coroutines machinery for ' + toString(this) + '. ' + "Please read KDoc to 'handleFatalException' method and report this incident to maintainers", exception);
    handleCoroutineException(this.kz().r8(), reason);
  };
  function get_isReusableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 2;
  }
  function get_isCancellableMode(_this__u8e3s4) {
    return _this__u8e3s4 === 1 || _this__u8e3s4 === 2;
  }
  function dispatch(_this__u8e3s4, mode) {
    // Inline function 'kotlinx.coroutines.assert' call
    var delegate = _this__u8e3s4.kz();
    var undispatched = mode === 4;
    var tmp;
    var tmp_0;
    if (!undispatched) {
      tmp_0 = delegate instanceof DispatchedContinuation;
    } else {
      tmp_0 = false;
    }
    if (tmp_0) {
      tmp = get_isCancellableMode(mode) === get_isCancellableMode(_this__u8e3s4.ty_1);
    } else {
      tmp = false;
    }
    if (tmp) {
      var dispatcher = delegate.ly_1;
      var context = delegate.r8();
      if (safeIsDispatchNeeded(dispatcher, context)) {
        safeDispatch(dispatcher, context, _this__u8e3s4);
      } else {
        resumeUnconfined(_this__u8e3s4);
      }
    } else {
      resume(_this__u8e3s4, delegate, undispatched);
    }
  }
  function DispatchException(cause, dispatcher, context) {
    Exception_init_$Init$('Coroutine dispatcher ' + dispatcher.toString() + ' threw an exception, context = ' + toString(context), cause, this);
    captureStack(this, DispatchException);
    this.r11_1 = cause;
    delete this.cause;
  }
  protoOf(DispatchException).f = function () {
    return this.r11_1;
  };
  function resumeUnconfined(_this__u8e3s4) {
    var eventLoop = ThreadLocalEventLoop_getInstance().n12();
    if (eventLoop.h12()) {
      eventLoop.g12(_this__u8e3s4);
    } else {
      // Inline function 'kotlinx.coroutines.runUnconfinedEventLoop' call
      eventLoop.j12(true);
      try {
        resume(_this__u8e3s4, _this__u8e3s4.kz(), true);
        $l$loop: while (eventLoop.f12()) {
        }
      } catch ($p) {
        if ($p instanceof Error) {
          var e = $p;
          _this__u8e3s4.f10(e);
        } else {
          throw $p;
        }
      }
      finally {
        eventLoop.k12(true);
      }
    }
  }
  function resume(_this__u8e3s4, delegate, undispatched) {
    var state = _this__u8e3s4.mz();
    var exception = _this__u8e3s4.c10(state);
    var tmp;
    if (!(exception == null)) {
      // Inline function 'kotlin.Companion.failure' call
      tmp = _Result___init__impl__xyqfz8(createFailure(exception));
    } else {
      // Inline function 'kotlin.Companion.success' call
      var value = _this__u8e3s4.tz(state);
      tmp = _Result___init__impl__xyqfz8(value);
    }
    var result = tmp;
    if (undispatched) {
      // Inline function 'kotlinx.coroutines.internal.DispatchedContinuation.resumeUndispatchedWith' call
      var this_0 = delegate instanceof DispatchedContinuation ? delegate : THROW_CCE();
      this_0.my_1;
      // Inline function 'kotlinx.coroutines.withContinuationContext' call
      this_0.oy_1;
      this_0.my_1.w8(result);
    } else {
      delegate.w8(result);
    }
  }
  function _InlineList___init__impl__z8n56(holder) {
    holder = holder === VOID ? null : holder;
    return holder;
  }
  function _get_holder__f6h5pd($this) {
    return $this;
  }
  function InlineList__plus_impl_nuetvo($this, element) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_subject = _get_holder__f6h5pd($this);
    var tmp;
    if (tmp0_subject == null) {
      tmp = _InlineList___init__impl__z8n56(element);
    } else {
      if (tmp0_subject instanceof ArrayList) {
        var tmp_0 = _get_holder__f6h5pd($this);
        (tmp_0 instanceof ArrayList ? tmp_0 : THROW_CCE()).g(element);
        tmp = _InlineList___init__impl__z8n56(_get_holder__f6h5pd($this));
      } else {
        var list = ArrayList_init_$Create$(4);
        list.g(_get_holder__f6h5pd($this));
        list.g(element);
        tmp = _InlineList___init__impl__z8n56(list);
      }
    }
    return tmp;
  }
  function access$_get_holder__kkflen($this) {
    return _get_holder__f6h5pd($this);
  }
  function callUndeliveredElement(_this__u8e3s4, element, context) {
    var tmp0_safe_receiver = callUndeliveredElementCatchingException(_this__u8e3s4, element, null);
    if (tmp0_safe_receiver == null)
      null;
    else {
      // Inline function 'kotlin.let' call
      handleCoroutineException(context, tmp0_safe_receiver);
    }
  }
  function UndeliveredElementException(message, cause) {
    RuntimeException_init_$Init$(message, cause, this);
    captureStack(this, UndeliveredElementException);
  }
  function callUndeliveredElementCatchingException(_this__u8e3s4, element, undeliveredElementException) {
    undeliveredElementException = undeliveredElementException === VOID ? null : undeliveredElementException;
    try {
      _this__u8e3s4(element);
    } catch ($p) {
      if ($p instanceof Error) {
        var ex = $p;
        if (!(undeliveredElementException == null) && !(undeliveredElementException.cause === ex)) {
          addSuppressed(undeliveredElementException, ex);
        } else {
          return new UndeliveredElementException('Exception in undelivered element handler for ' + toString_0(element), ex);
        }
      } else {
        throw $p;
      }
    }
    return undeliveredElementException;
  }
  function ScopeCoroutine(context, uCont) {
    AbstractCoroutine.call(this, context, true, true);
    this.qx_1 = uCont;
  }
  protoOf(ScopeCoroutine).dw = function () {
    return true;
  };
  protoOf(ScopeCoroutine).tu = function (state) {
    resumeCancellableWithInternal(intercepted(this.qx_1), recoverResult(state, this.qx_1));
  };
  protoOf(ScopeCoroutine).rx = function () {
  };
  protoOf(ScopeCoroutine).su = function (state) {
    this.qx_1.w8(recoverResult(state, this.qx_1));
  };
  function ContextScope(context) {
    this.m1p_1 = context;
  }
  protoOf(ContextScope).iu = function () {
    return this.m1p_1;
  };
  protoOf(ContextScope).toString = function () {
    return 'CoroutineScope(coroutineContext=' + toString(this.m1p_1) + ')';
  };
  function Symbol(symbol) {
    this.n1p_1 = symbol;
  }
  protoOf(Symbol).toString = function () {
    return '<' + this.n1p_1 + '>';
  };
  function systemProp(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? 1 : minValue;
    maxValue = maxValue === VOID ? 2147483647 : maxValue;
    return convertToInt(systemProp_0(propertyName, fromInt(defaultValue), fromInt(minValue), fromInt(maxValue)));
  }
  function systemProp_0(propertyName, defaultValue, minValue, maxValue) {
    minValue = minValue === VOID ? new Long(1, 0) : minValue;
    maxValue = maxValue === VOID ? new Long(-1, 2147483647) : maxValue;
    var tmp0_elvis_lhs = systemProp_1(propertyName);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return defaultValue;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var value = tmp;
    var tmp1_elvis_lhs = toLongOrNull(value);
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = "System property '" + propertyName + "' has unrecognized value '" + value + "'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    var parsed = tmp_0;
    if (!(compare(minValue, parsed) <= 0 ? compare(parsed, maxValue) <= 0 : false)) {
      // Inline function 'kotlin.error' call
      var message_0 = "System property '" + propertyName + "' should be in range " + minValue.toString() + '..' + maxValue.toString() + ", but is '" + parsed.toString() + "'";
      throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return parsed;
  }
  function startCoroutineCancellable(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(createCoroutineUnintercepted(_this__u8e3s4, receiver, completion));
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(completion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function startCoroutineCancellable_0(_this__u8e3s4, fatalCompletion) {
    // Inline function 'kotlinx.coroutines.intrinsics.runSafely' call
    try {
      var tmp = intercepted(_this__u8e3s4);
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$2 = _Result___init__impl__xyqfz8(Unit_instance);
      resumeCancellableWithInternal(tmp, tmp$ret$2);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        dispatcherFailure(fatalCompletion, e);
      } else {
        throw $p;
      }
    }
    return Unit_instance;
  }
  function dispatcherFailure(completion, e) {
    var tmp;
    if (e instanceof DispatchException) {
      tmp = e.r11_1;
    } else {
      tmp = e;
    }
    var reportException = tmp;
    // Inline function 'kotlin.Companion.failure' call
    var tmp$ret$0 = _Result___init__impl__xyqfz8(createFailure(reportException));
    completion.w8(tmp$ret$0);
    throw reportException;
  }
  function startUndispatchedOrReturn(_this__u8e3s4, receiver, block) {
    return startUndispatched(_this__u8e3s4, true, receiver, block);
  }
  function startCoroutineUndispatched(_this__u8e3s4, receiver, completion) {
    // Inline function 'kotlinx.coroutines.internal.probeCoroutineCreated' call
    var actualCompletion = completion;
    var tmp;
    try {
      // Inline function 'kotlinx.coroutines.withCoroutineContext' call
      actualCompletion.r8();
      // Inline function 'kotlinx.coroutines.internal.probeCoroutineResumed' call
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(_this__u8e3s4, receiver, actualCompletion);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof Error) {
        var e = $p;
        var tmp_1;
        if (e instanceof DispatchException) {
          tmp_1 = e.r11_1;
        } else {
          tmp_1 = e;
        }
        var reportException = tmp_1;
        // Inline function 'kotlin.coroutines.resumeWithException' call
        // Inline function 'kotlin.Companion.failure' call
        var tmp$ret$6 = _Result___init__impl__xyqfz8(createFailure(reportException));
        actualCompletion.w8(tmp$ret$6);
        return Unit_instance;
      } else {
        throw $p;
      }
    }
    var value = tmp;
    if (!(value === get_COROUTINE_SUSPENDED())) {
      // Inline function 'kotlin.coroutines.resume' call
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$8 = _Result___init__impl__xyqfz8(value);
      actualCompletion.w8(tmp$ret$8);
    }
  }
  function startUndispatchedOrReturnIgnoreTimeout(_this__u8e3s4, receiver, block) {
    return startUndispatched(_this__u8e3s4, false, receiver, block);
  }
  function startUndispatched(_this__u8e3s4, alwaysRethrow, receiver, block) {
    var tmp;
    try {
      // Inline function 'kotlin.coroutines.intrinsics.startCoroutineUninterceptedOrReturn' call
      tmp = startCoroutineUninterceptedOrReturnNonGeneratorVersion(block, receiver, _this__u8e3s4);
    } catch ($p) {
      var tmp_0;
      if ($p instanceof DispatchException) {
        var e = $p;
        dispatchExceptionAndMakeCompleting(_this__u8e3s4, e);
      } else {
        if ($p instanceof Error) {
          var e_0 = $p;
          tmp_0 = new CompletedExceptionally(e_0);
        } else {
          throw $p;
        }
      }
      tmp = tmp_0;
    }
    var result = tmp;
    if (result === get_COROUTINE_SUSPENDED())
      return get_COROUTINE_SUSPENDED();
    var state = _this__u8e3s4.ru(result);
    if (state === get_COMPLETING_WAITING_CHILDREN())
      return get_COROUTINE_SUSPENDED();
    _this__u8e3s4.rx();
    var tmp_1;
    if (state instanceof CompletedExceptionally) {
      var tmp_2;
      if (alwaysRethrow || notOwnTimeout(_this__u8e3s4, state.ou_1)) {
        throw recoverStackTrace(state.ou_1, _this__u8e3s4.qx_1);
      } else {
        if (result instanceof CompletedExceptionally) {
          throw recoverStackTrace(result.ou_1, _this__u8e3s4.qx_1);
        } else {
          tmp_2 = result;
        }
      }
      tmp_1 = tmp_2;
    } else {
      tmp_1 = unboxState(state);
    }
    return tmp_1;
  }
  function dispatchExceptionAndMakeCompleting(_this__u8e3s4, e) {
    _this__u8e3s4.zv(new CompletedExceptionally(e.r11_1));
    throw recoverStackTrace(e.r11_1, _this__u8e3s4.qx_1);
  }
  function notOwnTimeout(_this__u8e3s4, cause) {
    var tmp;
    if (!(cause instanceof TimeoutCancellationException)) {
      tmp = true;
    } else {
      tmp = !(cause.p16_1 === _this__u8e3s4);
    }
    return tmp;
  }
  function onTimeout(_this__u8e3s4, timeMillis, block) {
    return _this__u8e3s4.q1p((new OnTimeout(timeMillis)).p1p(), block);
  }
  function register($this, select, ignoredParam) {
    if (compare($this.o1p_1, new Long(0, 0)) <= 0) {
      select.j1a(Unit_instance);
      return Unit_instance;
    }
    var tmp = OnTimeout$register$lambda(select, $this);
    var action = new sam$kotlinx_coroutines_Runnable$0(tmp);
    if (!(select instanceof SelectImplementation))
      THROW_CCE();
    var context = select.r8();
    var disposableHandle = get_delay(context).z11($this.o1p_1, action, context);
    select.r1p(disposableHandle);
  }
  function sam$kotlinx_coroutines_Runnable$0(function_0) {
    this.s1p_1 = function_0;
  }
  protoOf(sam$kotlinx_coroutines_Runnable$0).e10 = function () {
    return this.s1p_1();
  };
  protoOf(sam$kotlinx_coroutines_Runnable$0).r2 = function () {
    return this.s1p_1;
  };
  protoOf(sam$kotlinx_coroutines_Runnable$0).equals = function (other) {
    var tmp;
    if (!(other == null) ? isInterface(other, Runnable) : false) {
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
  protoOf(sam$kotlinx_coroutines_Runnable$0).hashCode = function () {
    return hashCode(this.r2());
  };
  function OnTimeout$register$ref() {
    return constructCallableReference(function (p0, p1, p2) {
      register(p0, p1, p2);
      return Unit_instance;
    }, 3, 0, 6, 'register');
  }
  function OnTimeout$register$lambda($select, this$0) {
    return function () {
      $select.z19(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function OnTimeout(timeMillis) {
    this.o1p_1 = timeMillis;
  }
  protoOf(OnTimeout).p1p = function () {
    var tmp = OnTimeout$register$ref();
    return new SelectClause0Impl(this, typeof tmp === 'function' ? tmp : THROW_CCE());
  };
  function get_DUMMY_PROCESS_RESULT_FUNCTION() {
    _init_properties_Select_kt__zhm2jg();
    return DUMMY_PROCESS_RESULT_FUNCTION;
  }
  var DUMMY_PROCESS_RESULT_FUNCTION;
  function get_STATE_REG() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_REG;
  }
  var STATE_REG;
  function get_STATE_COMPLETED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_COMPLETED;
  }
  var STATE_COMPLETED;
  function get_STATE_CANCELLED() {
    _init_properties_Select_kt__zhm2jg();
    return STATE_CANCELLED;
  }
  var STATE_CANCELLED;
  function get_NO_RESULT() {
    _init_properties_Select_kt__zhm2jg();
    return NO_RESULT;
  }
  var NO_RESULT;
  function get_PARAM_CLAUSE_0() {
    _init_properties_Select_kt__zhm2jg();
    return PARAM_CLAUSE_0;
  }
  var PARAM_CLAUSE_0;
  function SelectClause0Impl(clauseObject, regFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.t1p_1 = clauseObject;
    this.u1p_1 = regFunc;
    this.v1p_1 = onCancellationConstructor;
    this.w1p_1 = get_DUMMY_PROCESS_RESULT_FUNCTION();
  }
  protoOf(SelectClause0Impl).x1p = function () {
    return this.t1p_1;
  };
  protoOf(SelectClause0Impl).y1p = function () {
    return this.u1p_1;
  };
  protoOf(SelectClause0Impl).z1p = function () {
    return this.v1p_1;
  };
  protoOf(SelectClause0Impl).a1q = function () {
    return this.w1p_1;
  };
  function SelectInstance() {
  }
  function SelectClause1Impl(clauseObject, regFunc, processResFunc, onCancellationConstructor) {
    onCancellationConstructor = onCancellationConstructor === VOID ? null : onCancellationConstructor;
    this.b1q_1 = clauseObject;
    this.c1q_1 = regFunc;
    this.d1q_1 = processResFunc;
    this.e1q_1 = onCancellationConstructor;
  }
  protoOf(SelectClause1Impl).x1p = function () {
    return this.b1q_1;
  };
  protoOf(SelectClause1Impl).y1p = function () {
    return this.c1q_1;
  };
  protoOf(SelectClause1Impl).a1q = function () {
    return this.d1q_1;
  };
  protoOf(SelectClause1Impl).z1p = function () {
    return this.e1q_1;
  };
  function $invokeBlockCOROUTINE$(_this__u8e3s4, argument, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.n1q_1 = _this__u8e3s4;
    this.o1q_1 = argument;
  }
  protoOf($invokeBlockCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            var block = this.n1q_1.u1q_1;
            if (this.n1q_1.t1q_1 === get_PARAM_CLAUSE_0()) {
              if (!isSuspendFunction(block, 0))
                THROW_CCE();
              this.l8_1 = 2;
              suspendResult = block(this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              if (!isSuspendFunction(block, 1))
                THROW_CCE();
              this.l8_1 = 1;
              suspendResult = block(this.o1q_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.p1q_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 2:
            this.p1q_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            return this.p1q_1;
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
  function _get_isSelected__uy0hmu($this) {
    var tmp = $this.d1a_1.kotlinx$atomicfu$value;
    return tmp instanceof ClauseData;
  }
  function doSelectSuspend($this, $completion) {
    var tmp = new $doSelectSuspendCOROUTINE$($this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function checkClauseObject($this, clauseObject) {
    var clauses = ensureNotNull($this.e1a_1);
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlin.collections.none' call
      var tmp;
      if (isInterface(clauses, Collection)) {
        tmp = clauses.n();
      } else {
        tmp = false;
      }
      if (tmp) {
        tmp$ret$0 = true;
        break $l$block_0;
      }
      var _iterator__ex2g4s = clauses.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.q1q_1 === clauseObject) {
          tmp$ret$0 = false;
          break $l$block_0;
        }
      }
      tmp$ret$0 = true;
    }
    // Inline function 'kotlin.check' call
    if (!tmp$ret$0) {
      var message = 'Cannot use select clauses on the same object: ' + toString(clauseObject);
      throw IllegalStateException_init_$Create$(toString(message));
    }
  }
  function waitUntilSelected($this, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    $l$block_0: {
      // Inline function 'kotlinx.atomicfu.loop' call
      var this_0 = $this.d1a_1;
      while (true) {
        var curState = this_0.kotlinx$atomicfu$value;
        if (curState === get_STATE_REG()) {
          if ($this.d1a_1.atomicfu$compareAndSet(curState, cancellable)) {
            invokeOnCancellation(cancellable, $this);
            break $l$block_0;
          }
        } else {
          if (isInterface(curState, KtList)) {
            if ($this.d1a_1.atomicfu$compareAndSet(curState, get_STATE_REG())) {
              if (!isInterface(curState, KtList))
                THROW_CCE();
              // Inline function 'kotlin.collections.forEach' call
              var _iterator__ex2g4s = curState.i();
              while (_iterator__ex2g4s.j()) {
                var element = _iterator__ex2g4s.k();
                reregisterClause($this, element);
              }
            }
          } else {
            if (curState instanceof ClauseData) {
              cancellable.zx(Unit_instance, curState.i1r($this, $this.h1a_1));
              break $l$block_0;
            } else {
              // Inline function 'kotlin.error' call
              var message = 'unexpected state: ' + toString(curState);
              throw IllegalStateException_init_$Create$(toString(message));
            }
          }
        }
      }
    }
    return cancellable.ow();
  }
  function reregisterClause($this, clauseObject) {
    var clause = ensureNotNull(findClause($this, clauseObject));
    clause.w1q_1 = null;
    clause.x1q_1 = -1;
    $this.j1r(clause, true);
  }
  function trySelectInternal($this, clauseObject, internalResult) {
    $l$loop: while (true) {
      var curState = $this.d1a_1.kotlinx$atomicfu$value;
      if (isInterface(curState, CancellableContinuation)) {
        var tmp0_elvis_lhs = findClause($this, clauseObject);
        var tmp;
        if (tmp0_elvis_lhs == null) {
          continue $l$loop;
        } else {
          tmp = tmp0_elvis_lhs;
        }
        var clause = tmp;
        var onCancellation = clause.i1r($this, internalResult);
        if ($this.d1a_1.atomicfu$compareAndSet(curState, clause)) {
          var cont = isInterface(curState, CancellableContinuation) ? curState : THROW_CCE();
          $this.h1a_1 = internalResult;
          if (tryResume_1(cont, onCancellation))
            return 0;
          $this.h1a_1 = get_NO_RESULT();
          return 2;
        }
      } else {
        var tmp_0;
        if (equals(curState, get_STATE_COMPLETED())) {
          tmp_0 = true;
        } else {
          tmp_0 = curState instanceof ClauseData;
        }
        if (tmp_0)
          return 3;
        else {
          if (equals(curState, get_STATE_CANCELLED()))
            return 2;
          else {
            if (equals(curState, get_STATE_REG())) {
              if ($this.d1a_1.atomicfu$compareAndSet(curState, listOf_0(clauseObject)))
                return 1;
            } else {
              if (isInterface(curState, KtList)) {
                if ($this.d1a_1.atomicfu$compareAndSet(curState, plus_0(curState, clauseObject)))
                  return 1;
              } else {
                // Inline function 'kotlin.error' call
                var message = 'Unexpected state: ' + toString(curState);
                throw IllegalStateException_init_$Create$(toString(message));
              }
            }
          }
        }
      }
    }
  }
  function findClause($this, clauseObject) {
    var tmp0_elvis_lhs = $this.e1a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.find' call
    var tmp$ret$1;
    $l$block: {
      // Inline function 'kotlin.collections.firstOrNull' call
      var _iterator__ex2g4s = clauses.i();
      while (_iterator__ex2g4s.j()) {
        var element = _iterator__ex2g4s.k();
        if (element.q1q_1 === clauseObject) {
          tmp$ret$1 = element;
          break $l$block;
        }
      }
      tmp$ret$1 = null;
    }
    var tmp1_elvis_lhs = tmp$ret$1;
    var tmp_0;
    if (tmp1_elvis_lhs == null) {
      // Inline function 'kotlin.error' call
      var message = 'Clause with object ' + toString(clauseObject) + ' is not found';
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp_0 = tmp1_elvis_lhs;
    }
    return tmp_0;
  }
  function complete($this, $completion) {
    var tmp = new $completeCOROUTINE$($this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function processResultAndInvokeBlockRecoveringException($this, clause, internalResult, $completion) {
    var tmp = new $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$($this, clause, internalResult, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  }
  function cleanup($this, selectedClause) {
    // Inline function 'kotlinx.coroutines.assert' call
    var tmp0_elvis_lhs = $this.e1a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      if (!(element === selectedClause)) {
        element.jy();
      }
    }
    $this.d1a_1.kotlinx$atomicfu$value = get_STATE_COMPLETED();
    $this.h1a_1 = get_NO_RESULT();
    $this.e1a_1 = null;
  }
  function ClauseData($outer, clauseObject, regFunc, processResFunc, param, block, onCancellationConstructor) {
    this.y1q_1 = $outer;
    this.q1q_1 = clauseObject;
    this.r1q_1 = regFunc;
    this.s1q_1 = processResFunc;
    this.t1q_1 = param;
    this.u1q_1 = block;
    this.v1q_1 = onCancellationConstructor;
    this.w1q_1 = null;
    this.x1q_1 = -1;
  }
  protoOf(ClauseData).g1s = function (select) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlinx.coroutines.assert' call
    this.r1q_1(this.q1q_1, select, this.t1q_1);
    return select.h1a_1 === get_NO_RESULT();
  };
  protoOf(ClauseData).h1s = function (result) {
    return this.s1q_1(this.q1q_1, this.t1q_1, result);
  };
  protoOf(ClauseData).i1s = function (argument, $completion) {
    var tmp = new $invokeBlockCOROUTINE$(this, argument, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(ClauseData).jy = function () {
    // Inline function 'kotlin.with' call
    var $this$with = this.w1q_1;
    var tmp;
    if ($this$with instanceof Segment) {
      $this$with.zy(this.x1q_1, null, this.y1q_1.r8());
      tmp = Unit_instance;
    } else {
      var tmp0_safe_receiver = (!($this$with == null) ? isInterface($this$with, DisposableHandle) : false) ? $this$with : null;
      var tmp_0;
      if (tmp0_safe_receiver == null) {
        tmp_0 = null;
      } else {
        tmp0_safe_receiver.jy();
        tmp_0 = Unit_instance;
      }
      tmp = tmp_0;
    }
  };
  protoOf(ClauseData).i1r = function (select, internalResult) {
    var tmp0_safe_receiver = this.v1q_1;
    return tmp0_safe_receiver == null ? null : tmp0_safe_receiver(select, this.t1q_1, internalResult);
  };
  function $doSelectCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.r1s_1 = _this__u8e3s4;
  }
  protoOf($doSelectCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            if (_get_isSelected__uy0hmu(this.r1s_1)) {
              this.l8_1 = 2;
              suspendResult = complete(this.r1s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = doSelectSuspend(this.r1s_1, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.s1s_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 2:
            this.s1s_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            return this.s1s_1;
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
  function $doSelectSuspendCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.h1r_1 = _this__u8e3s4;
  }
  protoOf($doSelectSuspendCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            this.l8_1 = 1;
            suspendResult = waitUntilSelected(this.h1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.l8_1 = 2;
            suspendResult = complete(this.h1r_1, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 2:
            return suspendResult;
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
  function $completeCOROUTINE$(_this__u8e3s4, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.s1r_1 = _this__u8e3s4;
  }
  protoOf($completeCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 4;
            var tmp_0 = this.s1r_1.d1a_1.kotlinx$atomicfu$value;
            var selectedClause = tmp_0 instanceof ClauseData ? tmp_0 : THROW_CCE();
            var internalResult = this.s1r_1.h1a_1;
            cleanup(this.s1r_1, selectedClause);
            if (!get_RECOVER_STACK_TRACES()) {
              var blockArgument = selectedClause.h1s(internalResult);
              this.l8_1 = 2;
              suspendResult = selectedClause.i1s(blockArgument, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            } else {
              this.l8_1 = 1;
              suspendResult = processResultAndInvokeBlockRecoveringException(this.s1r_1, selectedClause, internalResult, this);
              if (suspendResult === get_COROUTINE_SUSPENDED()) {
                return suspendResult;
              }
              continue $sm;
            }

          case 1:
            this.t1r_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 2:
            this.t1r_1 = suspendResult;
            this.l8_1 = 3;
            continue $sm;
          case 3:
            return this.t1r_1;
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
  function $processResultAndInvokeBlockRecoveringExceptionCOROUTINE$(_this__u8e3s4, clause, internalResult, resultContinuation) {
    CoroutineImpl.call(this, resultContinuation);
    this.c1s_1 = _this__u8e3s4;
    this.d1s_1 = clause;
    this.e1s_1 = internalResult;
  }
  protoOf($processResultAndInvokeBlockRecoveringExceptionCOROUTINE$).t8 = function () {
    var suspendResult = this.n8_1;
    $sm: do
      try {
        var tmp = this.l8_1;
        switch (tmp) {
          case 0:
            this.m8_1 = 3;
            this.m8_1 = 2;
            var blockArgument = this.d1s_1.h1s(this.e1s_1);
            this.l8_1 = 1;
            suspendResult = this.d1s_1.i1s(blockArgument, this);
            if (suspendResult === get_COROUTINE_SUSPENDED()) {
              return suspendResult;
            }

            continue $sm;
          case 1:
            this.f1s_1 = suspendResult;
            this.m8_1 = 3;
            this.l8_1 = 4;
            continue $sm;
          case 2:
            this.m8_1 = 3;
            var tmp_0 = this.o8_1;
            if (tmp_0 instanceof Error) {
              var e = this.o8_1;
              var tmp_1 = this;
              throw e;
            } else {
              throw this.o8_1;
            }

          case 3:
            throw this.o8_1;
          case 4:
            this.m8_1 = 3;
            return this.f1s_1;
        }
      } catch ($p) {
        var e_0 = $p;
        if (this.m8_1 === 3) {
          throw e_0;
        } else {
          this.l8_1 = this.m8_1;
          this.o8_1 = e_0;
        }
      }
     while (true);
  };
  function SelectImplementation(context) {
    this.c1a_1 = context;
    this.d1a_1 = atomic$ref$1(get_STATE_REG());
    this.e1a_1 = ArrayList_init_$Create$(2);
    this.f1a_1 = null;
    this.g1a_1 = -1;
    this.h1a_1 = get_NO_RESULT();
  }
  protoOf(SelectImplementation).r8 = function () {
    return this.c1a_1;
  };
  protoOf(SelectImplementation).m1o = function ($completion) {
    var tmp = new $doSelectCOROUTINE$(this, $completion);
    tmp.n8_1 = Unit_instance;
    tmp.o8_1 = null;
    return tmp.t8();
  };
  protoOf(SelectImplementation).q1p = function (_this__u8e3s4, block) {
    return this.t1s(new ClauseData(this, _this__u8e3s4.x1p(), _this__u8e3s4.y1p(), _this__u8e3s4.a1q(), get_PARAM_CLAUSE_0(), block, _this__u8e3s4.z1p()));
  };
  protoOf(SelectImplementation).l1o = function (_this__u8e3s4, block) {
    return this.t1s(new ClauseData(this, _this__u8e3s4.x1p(), _this__u8e3s4.y1p(), _this__u8e3s4.a1q(), null, block, _this__u8e3s4.z1p()));
  };
  protoOf(SelectImplementation).j1r = function (_this__u8e3s4, reregister) {
    // Inline function 'kotlinx.coroutines.assert' call
    // Inline function 'kotlin.let' call
    if (this.d1a_1.kotlinx$atomicfu$value instanceof ClauseData)
      return Unit_instance;
    if (!reregister) {
      checkClauseObject(this, _this__u8e3s4.q1q_1);
    }
    if (_this__u8e3s4.g1s(this)) {
      if (!reregister) {
        // Inline function 'kotlin.collections.plusAssign' call
        ensureNotNull(this.e1a_1).g(_this__u8e3s4);
      }
      _this__u8e3s4.w1q_1 = this.f1a_1;
      _this__u8e3s4.x1q_1 = this.g1a_1;
      this.f1a_1 = null;
      this.g1a_1 = -1;
    } else {
      this.d1a_1.kotlinx$atomicfu$value = _this__u8e3s4;
    }
  };
  protoOf(SelectImplementation).t1s = function (_this__u8e3s4, reregister, $super) {
    reregister = reregister === VOID ? false : reregister;
    var tmp;
    if ($super === VOID) {
      this.j1r(_this__u8e3s4, reregister);
      tmp = Unit_instance;
    } else {
      tmp = $super.j1r.call(this, _this__u8e3s4, reregister);
    }
    return tmp;
  };
  protoOf(SelectImplementation).r1p = function (disposableHandle) {
    this.f1a_1 = disposableHandle;
  };
  protoOf(SelectImplementation).xz = function (segment, index) {
    this.f1a_1 = segment;
    this.g1a_1 = index;
  };
  protoOf(SelectImplementation).j1a = function (internalResult) {
    this.h1a_1 = internalResult;
  };
  protoOf(SelectImplementation).z19 = function (clauseObject, result) {
    return trySelectInternal(this, clauseObject, result) === 0;
  };
  protoOf(SelectImplementation).i1a = function (clauseObject, result) {
    return TrySelectDetailedResult_0(trySelectInternal(this, clauseObject, result));
  };
  protoOf(SelectImplementation).iy = function (cause) {
    var tmp0 = this.d1a_1;
    $l$block: {
      // Inline function 'kotlinx.atomicfu.update' call
      while (true) {
        var cur = tmp0.kotlinx$atomicfu$value;
        if (cur === get_STATE_COMPLETED())
          return Unit_instance;
        var upd = get_STATE_CANCELLED();
        if (tmp0.atomicfu$compareAndSet(cur, upd)) {
          break $l$block;
        }
      }
    }
    var tmp0_elvis_lhs = this.e1a_1;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return Unit_instance;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var clauses = tmp;
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = clauses.i();
    while (_iterator__ex2g4s.j()) {
      var element = _iterator__ex2g4s.k();
      element.jy();
    }
    this.h1a_1 = get_NO_RESULT();
    this.e1a_1 = null;
  };
  var TrySelectDetailedResult_SUCCESSFUL_instance;
  var TrySelectDetailedResult_REREGISTER_instance;
  var TrySelectDetailedResult_CANCELLED_instance;
  var TrySelectDetailedResult_ALREADY_SELECTED_instance;
  var TrySelectDetailedResult_entriesInitialized;
  function TrySelectDetailedResult_initEntries() {
    if (TrySelectDetailedResult_entriesInitialized)
      return Unit_instance;
    TrySelectDetailedResult_entriesInitialized = true;
    TrySelectDetailedResult_SUCCESSFUL_instance = new TrySelectDetailedResult('SUCCESSFUL', 0);
    TrySelectDetailedResult_REREGISTER_instance = new TrySelectDetailedResult('REREGISTER', 1);
    TrySelectDetailedResult_CANCELLED_instance = new TrySelectDetailedResult('CANCELLED', 2);
    TrySelectDetailedResult_ALREADY_SELECTED_instance = new TrySelectDetailedResult('ALREADY_SELECTED', 3);
  }
  function TrySelectDetailedResult(name, ordinal) {
    Enum.call(this, name, ordinal);
  }
  function TrySelectDetailedResult_0(trySelectInternalResult) {
    _init_properties_Select_kt__zhm2jg();
    var tmp;
    switch (trySelectInternalResult) {
      case 0:
        tmp = TrySelectDetailedResult_SUCCESSFUL_getInstance();
        break;
      case 1:
        tmp = TrySelectDetailedResult_REREGISTER_getInstance();
        break;
      case 2:
        tmp = TrySelectDetailedResult_CANCELLED_getInstance();
        break;
      case 3:
        tmp = TrySelectDetailedResult_ALREADY_SELECTED_getInstance();
        break;
      default:
        // Inline function 'kotlin.error' call

        var message = 'Unexpected internal result: ' + trySelectInternalResult;
        throw IllegalStateException_init_$Create$(toString(message));
    }
    return tmp;
  }
  function tryResume_1(_this__u8e3s4, onCancellation) {
    _init_properties_Select_kt__zhm2jg();
    var tmp0_elvis_lhs = _this__u8e3s4.sx(Unit_instance, null, onCancellation);
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return false;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var token = tmp;
    _this__u8e3s4.tx(token);
    return true;
  }
  function DUMMY_PROCESS_RESULT_FUNCTION$lambda(_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
    _init_properties_Select_kt__zhm2jg();
    return null;
  }
  function TrySelectDetailedResult_SUCCESSFUL_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_SUCCESSFUL_instance;
  }
  function TrySelectDetailedResult_REREGISTER_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_REREGISTER_instance;
  }
  function TrySelectDetailedResult_CANCELLED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_CANCELLED_instance;
  }
  function TrySelectDetailedResult_ALREADY_SELECTED_getInstance() {
    TrySelectDetailedResult_initEntries();
    return TrySelectDetailedResult_ALREADY_SELECTED_instance;
  }
  var properties_initialized_Select_kt_7rpl36;
  function _init_properties_Select_kt__zhm2jg() {
    if (!properties_initialized_Select_kt_7rpl36) {
      properties_initialized_Select_kt_7rpl36 = true;
      DUMMY_PROCESS_RESULT_FUNCTION = DUMMY_PROCESS_RESULT_FUNCTION$lambda;
      STATE_REG = new Symbol('STATE_REG');
      STATE_COMPLETED = new Symbol('STATE_COMPLETED');
      STATE_CANCELLED = new Symbol('STATE_CANCELLED');
      NO_RESULT = new Symbol('NO_RESULT');
      PARAM_CLAUSE_0 = new Symbol('PARAM_CLAUSE_0');
    }
  }
  function get_NO_OWNER() {
    _init_properties_Mutex_kt__jod56b();
    return NO_OWNER;
  }
  var NO_OWNER;
  var ON_LOCK_ALREADY_LOCKED_BY_OWNER;
  function Mutex(locked) {
    locked = locked === VOID ? false : locked;
    _init_properties_Mutex_kt__jod56b();
    return new MutexImpl(locked);
  }
  function MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this$0, this$1) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      // Inline function 'kotlinx.coroutines.assert' call
      this$0.b1t_1.kotlinx$atomicfu$value = this$1.e1t_1;
      this$0.g1t(this$1.e1t_1);
      return Unit_instance;
    };
  }
  function MutexImpl$CancellableContinuationWithOwner$resume$lambda(this$0, this$1) {
    return function (it) {
      this$0.g1t(this$1.e1t_1);
      return Unit_instance;
    };
  }
  function holdsLockImpl($this, owner) {
    $l$loop: while (true) {
      if (!$this.h1t())
        return 0;
      var curOwner = $this.b1t_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop;
      return curOwner === owner ? 1 : 2;
    }
  }
  function lockSuspend($this, owner, $completion) {
    var cancellable = getOrCreateCancellableContinuation(intercepted($completion));
    try {
      var contWithOwner = new CancellableContinuationWithOwner($this, cancellable, owner);
      $this.acquireCont(contWithOwner);
    } catch ($p) {
      if ($p instanceof Error) {
        var e = $p;
        cancellable.sz();
        throw e;
      } else {
        throw $p;
      }
    }
    return cancellable.ow();
  }
  function tryLockImpl($this, owner) {
    $l$loop: while (true) {
      if ($this.p1t()) {
        // Inline function 'kotlinx.coroutines.assert' call
        $this.b1t_1.kotlinx$atomicfu$value = owner;
        return 0;
      } else {
        if (owner == null)
          return 1;
        switch (holdsLockImpl($this, owner)) {
          case 1:
            return 2;
          case 2:
            return 1;
          case 0:
            continue $l$loop;
        }
      }
    }
  }
  function CancellableContinuationWithOwner($outer, cont, owner) {
    this.f1t_1 = $outer;
    this.d1t_1 = cont;
    this.e1t_1 = owner;
  }
  protoOf(CancellableContinuationWithOwner).q1t = function (value, idempotent, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    var token = this.d1t_1.sx(value, idempotent, MutexImpl$CancellableContinuationWithOwner$tryResume$lambda(this.f1t_1, this));
    if (!(token == null)) {
      // Inline function 'kotlinx.coroutines.assert' call
      this.f1t_1.b1t_1.kotlinx$atomicfu$value = this.e1t_1;
    }
    return token;
  };
  protoOf(CancellableContinuationWithOwner).sx = function (value, idempotent, onCancellation) {
    return this.q1t(value instanceof Unit ? value : THROW_CCE(), idempotent, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).r1t = function (value, onCancellation) {
    // Inline function 'kotlinx.coroutines.assert' call
    this.f1t_1.b1t_1.kotlinx$atomicfu$value = this.e1t_1;
    this.d1t_1.yx(Unit_instance, MutexImpl$CancellableContinuationWithOwner$resume$lambda(this.f1t_1, this));
  };
  protoOf(CancellableContinuationWithOwner).zx = function (value, onCancellation) {
    return this.r1t(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).tx = function (token) {
    this.d1t_1.tx(token);
  };
  protoOf(CancellableContinuationWithOwner).ux = function (cause) {
    return this.d1t_1.ux(cause);
  };
  protoOf(CancellableContinuationWithOwner).wx = function (handler) {
    this.d1t_1.wx(handler);
  };
  protoOf(CancellableContinuationWithOwner).xz = function (segment, index) {
    this.d1t_1.xz(segment, index);
  };
  protoOf(CancellableContinuationWithOwner).s1t = function (_this__u8e3s4, value) {
    this.d1t_1.xx(_this__u8e3s4, Unit_instance);
  };
  protoOf(CancellableContinuationWithOwner).xx = function (_this__u8e3s4, value) {
    return this.s1t(_this__u8e3s4, value instanceof Unit ? value : THROW_CCE());
  };
  protoOf(CancellableContinuationWithOwner).t1t = function (value, onCancellation) {
    this.d1t_1.yx(Unit_instance, onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).yx = function (value, onCancellation) {
    return this.t1t(value instanceof Unit ? value : THROW_CCE(), onCancellation);
  };
  protoOf(CancellableContinuationWithOwner).de = function (result) {
    this.d1t_1.w8(result);
  };
  protoOf(CancellableContinuationWithOwner).w8 = function (result) {
    return this.de(result);
  };
  protoOf(CancellableContinuationWithOwner).r8 = function () {
    return this.d1t_1.r8();
  };
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, $owner) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.g1t($owner);
      return Unit_instance;
    };
  }
  function MutexImpl$onSelectCancellationUnlockConstructor$lambda(this$0) {
    return function (_unused_var__etf5q3, owner, _unused_var__etf5q3_0) {
      return MutexImpl$onSelectCancellationUnlockConstructor$lambda$lambda(this$0, owner);
    };
  }
  function MutexImpl(locked) {
    SemaphoreAndMutexImpl.call(this, 1, locked ? 1 : 0);
    this.b1t_1 = atomic$ref$1(locked ? null : get_NO_OWNER());
    var tmp = this;
    tmp.c1t_1 = MutexImpl$onSelectCancellationUnlockConstructor$lambda(this);
  }
  protoOf(MutexImpl).h1t = function () {
    return this.u1t() === 0;
  };
  protoOf(MutexImpl).v1t = function (owner, $completion) {
    if (this.w1t(owner))
      return Unit_instance;
    return lockSuspend(this, owner, $completion);
  };
  protoOf(MutexImpl).w1t = function (owner) {
    var tmp;
    switch (tryLockImpl(this, owner)) {
      case 0:
        tmp = true;
        break;
      case 1:
        tmp = false;
        break;
      case 2:
        // Inline function 'kotlin.error' call

        var message = 'This mutex is already locked by the specified owner: ' + toString_0(owner);
        throw IllegalStateException_init_$Create$(toString(message));
      default:
        // Inline function 'kotlin.error' call

        var message_0 = 'unexpected';
        throw IllegalStateException_init_$Create$(toString(message_0));
    }
    return tmp;
  };
  protoOf(MutexImpl).g1t = function (owner) {
    $l$loop_0: while (true) {
      // Inline function 'kotlin.check' call
      if (!this.h1t()) {
        var message = 'This mutex is not locked';
        throw IllegalStateException_init_$Create$(toString(message));
      }
      var curOwner = this.b1t_1.kotlinx$atomicfu$value;
      if (curOwner === get_NO_OWNER())
        continue $l$loop_0;
      // Inline function 'kotlin.check' call
      if (!(curOwner === owner || owner == null)) {
        var message_0 = 'This mutex is locked by ' + toString_0(curOwner) + ', but ' + toString_0(owner) + ' is expected';
        throw IllegalStateException_init_$Create$(toString(message_0));
      }
      if (!this.b1t_1.atomicfu$compareAndSet(curOwner, get_NO_OWNER()))
        continue $l$loop_0;
      this.x1t();
      return Unit_instance;
    }
  };
  protoOf(MutexImpl).toString = function () {
    return 'Mutex@' + get_hexAddress(this) + '[isLocked=' + this.h1t() + ',owner=' + toString_0(this.b1t_1.kotlinx$atomicfu$value) + ']';
  };
  var properties_initialized_Mutex_kt_yv4p3j;
  function _init_properties_Mutex_kt__jod56b() {
    if (!properties_initialized_Mutex_kt_yv4p3j) {
      properties_initialized_Mutex_kt_yv4p3j = true;
      NO_OWNER = new Symbol('NO_OWNER');
      ON_LOCK_ALREADY_LOCKED_BY_OWNER = new Symbol('ALREADY_LOCKED_BY_OWNER');
    }
  }
  function get_MAX_SPIN_CYCLES() {
    _init_properties_Semaphore_kt__t514r6();
    return MAX_SPIN_CYCLES;
  }
  var MAX_SPIN_CYCLES;
  function get_PERMIT() {
    _init_properties_Semaphore_kt__t514r6();
    return PERMIT;
  }
  var PERMIT;
  function get_TAKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return TAKEN;
  }
  var TAKEN;
  function get_BROKEN() {
    _init_properties_Semaphore_kt__t514r6();
    return BROKEN;
  }
  var BROKEN;
  function get_CANCELLED() {
    _init_properties_Semaphore_kt__t514r6();
    return CANCELLED;
  }
  var CANCELLED;
  function get_SEGMENT_SIZE_0() {
    _init_properties_Semaphore_kt__t514r6();
    return SEGMENT_SIZE_0;
  }
  var SEGMENT_SIZE_0;
  function decPermits($this) {
    $l$loop: while (true) {
      var p = $this.n1t_1.atomicfu$getAndDecrement();
      if (p > $this.i1t_1)
        continue $l$loop;
      return p;
    }
  }
  function coerceAvailablePermitsAtMaximum($this) {
    $l$loop_0: while (true) {
      var cur = $this.n1t_1.kotlinx$atomicfu$value;
      if (cur <= $this.i1t_1)
        break $l$loop_0;
      if ($this.n1t_1.atomicfu$compareAndSet(cur, $this.i1t_1))
        break $l$loop_0;
    }
  }
  function addAcquireToQueue($this, waiter) {
    var curTail = $this.l1t_1.kotlinx$atomicfu$value;
    var enqIdx = $this.m1t_1.atomicfu$getAndIncrement$long();
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.l1t_1;
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var tmp2 = divide(enqIdx, fromInt(other));
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curTail, tmp2, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2_0 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$2;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$3;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.xy_1, tmp2_0.xy_1) >= 0) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2_0.h18()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2_0)) {
                if (cur.i18()) {
                  cur.l3();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2_0.i18()) {
                tmp2_0.l3();
              }
            }
            tmp$ret$2 = tmp$ret$3;
          }
          tmp = tmp$ret$2;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$1);
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$5 = modulo(enqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$5);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    if (segment.c1u_1.atomicfu$get(i).atomicfu$compareAndSet(null, waiter)) {
      waiter.xz(segment, i);
      return true;
    }
    var tmp4 = get_PERMIT();
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
    var value = get_TAKEN();
    if (segment.c1u_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value)) {
      if (isInterface(waiter, CancellableContinuation)) {
        if (!isInterface(waiter, CancellableContinuation))
          THROW_CCE();
        waiter.zx(Unit_instance, $this.o1t_1);
      } else {
        if (isInterface(waiter, SelectInstance)) {
          waiter.j1a(Unit_instance);
        } else {
          // Inline function 'kotlin.error' call
          var message = 'unexpected: ' + toString(waiter);
          throw IllegalStateException_init_$Create$(toString(message));
        }
      }
      return true;
    }
    // Inline function 'kotlinx.coroutines.assert' call
    return false;
  }
  function tryResumeNextFromQueue($this) {
    var curHead = $this.j1t_1.kotlinx$atomicfu$value;
    var deqIdx = $this.k1t_1.atomicfu$getAndIncrement$long();
    // Inline function 'kotlin.Long.div' call
    var other = get_SEGMENT_SIZE_0();
    var id = divide(deqIdx, fromInt(other));
    var createNewSegment = createSegment$ref_0();
    var tmp0 = $this.j1t_1;
    var tmp$ret$1;
    $l$block_2: {
      // Inline function 'kotlinx.coroutines.internal.findSegmentAndMoveForward' call
      while (true) {
        var s = findSegmentInternal(curHead, id, createNewSegment);
        var tmp;
        if (_SegmentOrClosed___get_isClosed__impl__qmxmlo(s)) {
          tmp = true;
        } else {
          var tmp2 = _SegmentOrClosed___get_segment__impl__jvcr9l(s);
          var tmp$ret$2;
          $l$block_1: {
            // Inline function 'kotlinx.coroutines.internal.moveForward' call
            var tmp$ret$3;
            // Inline function 'kotlinx.atomicfu.loop' call
            while (true) {
              var cur = tmp0.kotlinx$atomicfu$value;
              if (compare(cur.xy_1, tmp2.xy_1) >= 0) {
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (!tmp2.h18()) {
                tmp$ret$2 = false;
                break $l$block_1;
              }
              if (tmp0.atomicfu$compareAndSet(cur, tmp2)) {
                if (cur.i18()) {
                  cur.l3();
                }
                tmp$ret$2 = true;
                break $l$block_1;
              }
              if (tmp2.i18()) {
                tmp2.l3();
              }
            }
            tmp$ret$2 = tmp$ret$3;
          }
          tmp = tmp$ret$2;
        }
        if (tmp) {
          tmp$ret$1 = s;
          break $l$block_2;
        }
      }
    }
    var segment = _SegmentOrClosed___get_segment__impl__jvcr9l(tmp$ret$1);
    segment.p18();
    if (compare(segment.xy_1, id) > 0)
      return false;
    // Inline function 'kotlin.Long.rem' call
    var other_0 = get_SEGMENT_SIZE_0();
    var tmp$ret$5 = modulo(deqIdx, fromInt(other_0));
    var i = convertToInt(tmp$ret$5);
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.getAndSet' call
    var value = get_PERMIT();
    var cellState = segment.c1u_1.atomicfu$get(i).atomicfu$getAndSet(value);
    if (cellState === null) {
      // Inline function 'kotlin.repeat' call
      var times = get_MAX_SPIN_CYCLES();
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.get' call
          if (segment.c1u_1.atomicfu$get(i).kotlinx$atomicfu$value === get_TAKEN())
            return true;
        }
         while (inductionVariable < times);
      var tmp4 = get_PERMIT();
      // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.cas' call
      var value_0 = get_BROKEN();
      return !segment.c1u_1.atomicfu$get(i).atomicfu$compareAndSet(tmp4, value_0);
    } else if (cellState === get_CANCELLED())
      return false;
    else
      return tryResumeAcquire($this, cellState);
  }
  function tryResumeAcquire($this, $receiver) {
    var tmp;
    if (isInterface($receiver, CancellableContinuation)) {
      if (!isInterface($receiver, CancellableContinuation))
        THROW_CCE();
      var token = $receiver.sx(Unit_instance, null, $this.o1t_1);
      var tmp_0;
      if (!(token == null)) {
        $receiver.tx(token);
        tmp_0 = true;
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    } else {
      if (isInterface($receiver, SelectInstance)) {
        tmp = $receiver.z19($this, Unit_instance);
      } else {
        // Inline function 'kotlin.error' call
        var message = 'unexpected: ' + toString($receiver);
        throw IllegalStateException_init_$Create$(toString(message));
      }
    }
    return tmp;
  }
  function SemaphoreAndMutexImpl$onCancellationRelease$lambda(this$0) {
    return function (_unused_var__etf5q3, _unused_var__etf5q3_0, _unused_var__etf5q3_1) {
      this$0.x1t();
      return Unit_instance;
    };
  }
  function createSegment$ref_0() {
    return constructCallableReference(function (p0, p1) {
      return createSegment_0(p0, p1);
    }, 2, 0, 7, 'createSegment');
  }
  function SemaphoreAndMutexImpl(permits, acquiredPermits) {
    this.i1t_1 = permits;
    this.k1t_1 = atomic$long$1(new Long(0, 0));
    this.m1t_1 = atomic$long$1(new Long(0, 0));
    // Inline function 'kotlin.require' call
    if (!(this.i1t_1 > 0)) {
      var message = 'Semaphore should have at least 1 permit, but had ' + this.i1t_1;
      throw IllegalArgumentException_init_$Create$(toString(message));
    }
    // Inline function 'kotlin.require' call
    if (!(0 <= acquiredPermits ? acquiredPermits <= this.i1t_1 : false)) {
      var message_0 = 'The number of acquired permits should be in 0..' + this.i1t_1;
      throw IllegalArgumentException_init_$Create$(toString(message_0));
    }
    var s = new SemaphoreSegment(new Long(0, 0), null, 2);
    this.j1t_1 = atomic$ref$1(s);
    this.l1t_1 = atomic$ref$1(s);
    this.n1t_1 = atomic$int$1(this.i1t_1 - acquiredPermits | 0);
    var tmp = this;
    tmp.o1t_1 = SemaphoreAndMutexImpl$onCancellationRelease$lambda(this);
  }
  protoOf(SemaphoreAndMutexImpl).u1t = function () {
    // Inline function 'kotlin.math.max' call
    var a = this.n1t_1.kotlinx$atomicfu$value;
    return Math.max(a, 0);
  };
  protoOf(SemaphoreAndMutexImpl).p1t = function () {
    $l$loop: while (true) {
      var p = this.n1t_1.kotlinx$atomicfu$value;
      if (p > this.i1t_1) {
        coerceAvailablePermitsAtMaximum(this);
        continue $l$loop;
      }
      if (p <= 0)
        return false;
      if (this.n1t_1.atomicfu$compareAndSet(p, p - 1 | 0))
        return true;
    }
  };
  protoOf(SemaphoreAndMutexImpl).acquireCont = function (waiter) {
    var tmp$ret$0;
    $l$block_0: {
      // Inline function 'kotlinx.coroutines.sync.SemaphoreAndMutexImpl.acquire' call
      while (true) {
        var p = decPermits(this);
        if (p > 0) {
          waiter.zx(Unit_instance, this.o1t_1);
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
        if (addAcquireToQueue(this, isInterface(waiter, Waiter) ? waiter : THROW_CCE())) {
          tmp$ret$0 = Unit_instance;
          break $l$block_0;
        }
      }
      tmp$ret$0 = Unit_instance;
    }
    return tmp$ret$0;
  };
  protoOf(SemaphoreAndMutexImpl).x1t = function () {
    while (true) {
      var p = this.n1t_1.atomicfu$getAndIncrement();
      if (p >= this.i1t_1) {
        coerceAvailablePermitsAtMaximum(this);
        // Inline function 'kotlin.error' call
        var message = 'The number of released permits cannot be greater than ' + this.i1t_1;
        throw IllegalStateException_init_$Create$(toString(message));
      }
      if (p >= 0)
        return Unit_instance;
      if (tryResumeNextFromQueue(this))
        return Unit_instance;
    }
  };
  function SemaphoreSegment(id, prev, pointers) {
    Segment.call(this, id, prev, pointers);
    this.c1u_1 = atomicfu$AtomicRefArray$ofNulls(get_SEGMENT_SIZE_0());
  }
  protoOf(SemaphoreSegment).i17 = function () {
    return get_SEGMENT_SIZE_0();
  };
  protoOf(SemaphoreSegment).zy = function (index, cause, context) {
    // Inline function 'kotlinx.coroutines.sync.SemaphoreSegment.set' call
    var value = get_CANCELLED();
    this.c1u_1.atomicfu$get(index).kotlinx$atomicfu$value = value;
    this.f18();
  };
  protoOf(SemaphoreSegment).toString = function () {
    return 'SemaphoreSegment[id=' + this.xy_1.toString() + ', hashCode=' + hashCode(this) + ']';
  };
  function createSegment_0(id, prev) {
    _init_properties_Semaphore_kt__t514r6();
    return new SemaphoreSegment(id, prev, 0);
  }
  var properties_initialized_Semaphore_kt_uqcwok;
  function _init_properties_Semaphore_kt__t514r6() {
    if (!properties_initialized_Semaphore_kt_uqcwok) {
      properties_initialized_Semaphore_kt_uqcwok = true;
      MAX_SPIN_CYCLES = systemProp('kotlinx.coroutines.semaphore.maxSpinCycles', 100);
      PERMIT = new Symbol('PERMIT');
      TAKEN = new Symbol('TAKEN');
      BROKEN = new Symbol('BROKEN');
      CANCELLED = new Symbol('CANCELLED');
      SEGMENT_SIZE_0 = systemProp('kotlinx.coroutines.semaphore.segmentSize', 16);
    }
  }
  function createDefaultDispatcher() {
    var tmp;
    if (isJsdom()) {
      tmp = NodeDispatcher_getInstance();
    } else {
      var tmp_0;
      var tmp_1;
      if (!(typeof window === 'undefined')) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_1 = window != null;
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = !(typeof window.addEventListener === 'undefined');
      } else {
        tmp_0 = false;
      }
      if (tmp_0) {
        tmp = asCoroutineDispatcher(window);
      } else {
        if (typeof process === 'undefined' || typeof process.nextTick === 'undefined') {
          tmp = SetTimeoutDispatcher_getInstance();
        } else {
          tmp = NodeDispatcher_getInstance();
        }
      }
    }
    return tmp;
  }
  function isJsdom() {
    return !(typeof navigator === 'undefined') && navigator != null && navigator.userAgent != null && !(typeof navigator.userAgent === 'undefined') && !(typeof navigator.userAgent.match === 'undefined') && navigator.userAgent.match('\\bjsdom\\b');
  }
  var counter;
  function get_DEBUG() {
    return DEBUG;
  }
  var DEBUG;
  function get_hexAddress(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var result = _this__u8e3s4.__debug_counter;
    if (!(typeof result === 'number')) {
      counter = counter + 1 | 0;
      result = counter;
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.__debug_counter = result;
    }
    return ((!(result == null) ? typeof result === 'number' : false) ? result : THROW_CCE()).toString();
  }
  function get_classSimpleName(_this__u8e3s4) {
    var tmp0_elvis_lhs = getKClassFromExpression(_this__u8e3s4).x9();
    return tmp0_elvis_lhs == null ? 'Unknown' : tmp0_elvis_lhs;
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(NodeDispatcher).f1u = function () {
    process.nextTick(this.m1u_1.k1u_1);
  };
  var NodeDispatcher_instance;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance == null)
      new NodeDispatcher();
    return NodeDispatcher_instance;
  }
  function ScheduledMessageQueue$processQueue$lambda(this$0) {
    return function () {
      this$0.q1u();
      return Unit_instance;
    };
  }
  function ScheduledMessageQueue(dispatcher) {
    MessageQueue.call(this);
    this.j1u_1 = dispatcher;
    var tmp = this;
    tmp.k1u_1 = ScheduledMessageQueue$processQueue$lambda(this);
  }
  protoOf(ScheduledMessageQueue).r1u = function () {
    this.j1u_1.f1u();
  };
  protoOf(ScheduledMessageQueue).s1u = function () {
    setTimeout(this.k1u_1, 0);
  };
  protoOf(ScheduledMessageQueue).t1u = function (timeout) {
    setTimeout(this.k1u_1, timeout);
  };
  function w3cSetTimeout(handler, timeout) {
    return setTimeout(handler, timeout);
  }
  function WindowMessageQueue$lambda(this$0) {
    return function (event) {
      var tmp;
      if (event.source == this$0.g1v_1 && event.data == this$0.h1v_1) {
        event.stopPropagation();
        this$0.q1u();
        tmp = Unit_instance;
      }
      return Unit_instance;
    };
  }
  function WindowMessageQueue$schedule$lambda(this$0) {
    return function (it) {
      this$0.q1u();
      return Unit_instance;
    };
  }
  function WindowMessageQueue(window_0) {
    MessageQueue.call(this);
    this.g1v_1 = window_0;
    this.h1v_1 = 'dispatchCoroutine';
    this.g1v_1.addEventListener('message', WindowMessageQueue$lambda(this), true);
  }
  protoOf(WindowMessageQueue).r1u = function () {
    var tmp = Promise.resolve(Unit_instance);
    tmp.then(WindowMessageQueue$schedule$lambda(this));
  };
  protoOf(WindowMessageQueue).s1u = function () {
    this.g1v_1.postMessage(this.h1v_1, '*');
  };
  function w3cSetTimeout_0(window_0, handler, timeout) {
    return setTimeout_0(window_0, handler, timeout);
  }
  function w3cClearTimeout(window_0, handle) {
    return window_0.clearTimeout(handle);
  }
  function w3cClearTimeout_0(handle) {
    return clearTimeout(handle);
  }
  function setTimeout_0(window_0, handler, timeout) {
    return window_0.setTimeout(handler, timeout);
  }
  function toThrowable(_this__u8e3s4) {
    var tmp0_elvis_lhs = _this__u8e3s4 instanceof Error ? _this__u8e3s4 : null;
    return tmp0_elvis_lhs == null ? Exception_init_$Create$("Promise resolved with a non-Throwable exception '" + _this__u8e3s4.toString() + "' (type " + toString(getKClassFromExpression(_this__u8e3s4)) + ')') : tmp0_elvis_lhs;
  }
  function asCoroutineDispatcher(_this__u8e3s4) {
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = _this__u8e3s4.coroutineDispatcher;
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.also' call
      var this_0 = new WindowDispatcher(_this__u8e3s4);
      // Inline function 'kotlin.js.asDynamic' call
      _this__u8e3s4.coroutineDispatcher = this_0;
      tmp = this_0;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    return tmp;
  }
  function newCoroutineContext(_this__u8e3s4, context) {
    var combined = _this__u8e3s4.iu().ye(context);
    return !(combined === Dispatchers_getInstance().t11_1) && combined.y8(Key_instance) == null ? combined.ye(Dispatchers_getInstance().t11_1) : combined;
  }
  function newCoroutineContext_0(_this__u8e3s4, addedContext) {
    return _this__u8e3s4.ye(addedContext);
  }
  function UndispatchedCoroutine(context, uCont) {
    ScopeCoroutine.call(this, context, uCont);
  }
  protoOf(UndispatchedCoroutine).su = function (state) {
    return this.qx_1.w8(recoverResult(state, this.qx_1));
  };
  function toDebugString(_this__u8e3s4) {
    return toString(_this__u8e3s4);
  }
  function get_DefaultDelay() {
    var tmp = Dispatchers_getInstance().t11_1;
    return isInterface(tmp, Delay) ? tmp : THROW_CCE();
  }
  function get_coroutineName(_this__u8e3s4) {
    return null;
  }
  function Dispatchers() {
    Dispatchers_instance = this;
    this.t11_1 = createDefaultDispatcher();
    this.u11_1 = Unconfined_getInstance();
    this.v11_1 = new JsMainDispatcher(this.t11_1, false);
    this.w11_1 = null;
  }
  protoOf(Dispatchers).x11 = function () {
    var tmp0_elvis_lhs = this.w11_1;
    return tmp0_elvis_lhs == null ? this.v11_1 : tmp0_elvis_lhs;
  };
  var Dispatchers_instance;
  function Dispatchers_getInstance() {
    if (Dispatchers_instance == null)
      new Dispatchers();
    return Dispatchers_instance;
  }
  function JsMainDispatcher(delegate, invokeImmediately) {
    MainCoroutineDispatcher.call(this);
    this.n1v_1 = delegate;
    this.o1v_1 = invokeImmediately;
    this.p1v_1 = this.o1v_1 ? this : new JsMainDispatcher(this.n1v_1, true);
  }
  protoOf(JsMainDispatcher).z15 = function () {
    return this.p1v_1;
  };
  protoOf(JsMainDispatcher).n11 = function (context) {
    return !this.o1v_1;
  };
  protoOf(JsMainDispatcher).o11 = function (context, block) {
    return this.n1v_1.o11(context, block);
  };
  protoOf(JsMainDispatcher).p11 = function (context, block) {
    return this.n1v_1.p11(context, block);
  };
  protoOf(JsMainDispatcher).toString = function () {
    var tmp0_elvis_lhs = this.a16();
    return tmp0_elvis_lhs == null ? this.n1v_1.toString() : tmp0_elvis_lhs;
  };
  function get_RECOVER_STACK_TRACES() {
    return RECOVER_STACK_TRACES;
  }
  var RECOVER_STACK_TRACES;
  function CancellationException_0(message, cause) {
    return CancellationException_init_$Create$_0(message, cause);
  }
  function JobCancellationException(message, cause, job) {
    CancellationException_init_$Init$_0(message, cause, this);
    captureStack(this, JobCancellationException);
    this.q1v_1 = job;
  }
  protoOf(JobCancellationException).toString = function () {
    return protoOf(CancellationException).toString.call(this) + '; job=' + toString(this.q1v_1);
  };
  protoOf(JobCancellationException).equals = function (other) {
    var tmp;
    if (other === this) {
      tmp = true;
    } else {
      var tmp_0;
      var tmp_1;
      var tmp_2;
      if (other instanceof JobCancellationException) {
        tmp_2 = other.message == this.message;
      } else {
        tmp_2 = false;
      }
      if (tmp_2) {
        tmp_1 = equals(other.q1v_1, this.q1v_1);
      } else {
        tmp_1 = false;
      }
      if (tmp_1) {
        tmp_0 = equals(other.cause, this.cause);
      } else {
        tmp_0 = false;
      }
      tmp = tmp_0;
    }
    return tmp;
  };
  protoOf(JobCancellationException).hashCode = function () {
    var tmp = imul(imul(getStringHashCode(ensureNotNull(this.message)), 31) + hashCode(this.q1v_1) | 0, 31);
    var tmp0_safe_receiver = this.cause;
    var tmp1_elvis_lhs = tmp0_safe_receiver == null ? null : hashCode(tmp0_safe_receiver);
    return tmp + (tmp1_elvis_lhs == null ? 0 : tmp1_elvis_lhs) | 0;
  };
  function Runnable() {
  }
  function Runnable$run$ref(p0) {
    return constructCallableReference(function () {
      p0.e10();
      return Unit_instance;
    }, 0, 0, 8, 'run', [p0]);
  }
  function SchedulerTask() {
  }
  function ChildCancelledException() {
  }
  function SafeCollector$collectContextSize$lambda(count, _unused_var__etf5q3) {
    return count + 1 | 0;
  }
  function SafeCollector(collector, collectContext) {
    this.x1f_1 = collector;
    this.y1f_1 = collectContext;
    var tmp = this;
    tmp.z1f_1 = this.y1f_1.xe(0, SafeCollector$collectContextSize$lambda);
    this.a1g_1 = null;
  }
  protoOf(SafeCollector).l1f = function (value, $completion) {
    // Inline function 'kotlinx.coroutines.currentCoroutineContext' call
    // Inline function 'kotlin.js.getCoroutineContext' call
    var currentContext = $completion.r8();
    ensureActive(currentContext);
    if (!(this.a1g_1 === currentContext)) {
      checkContext(this, currentContext);
      this.a1g_1 = currentContext;
    }
    return this.x1f_1.l1f(value, $completion);
  };
  protoOf(SafeCollector).v8 = function () {
  };
  function identitySet(expectedSize) {
    return HashSet_init_$Create$(expectedSize);
  }
  function WorkaroundAtomicReference(value) {
    this.c1j_1 = value;
  }
  protoOf(WorkaroundAtomicReference).p12 = function () {
    return this.c1j_1;
  };
  protoOf(WorkaroundAtomicReference).k1p = function (value) {
    this.c1j_1 = value;
  };
  protoOf(WorkaroundAtomicReference).e1j = function (value) {
    var prev = this.c1j_1;
    this.c1j_1 = value;
    return prev;
  };
  protoOf(WorkaroundAtomicReference).d1j = function (expected, value) {
    if (this.c1j_1 === expected) {
      this.c1j_1 = value;
      return true;
    }
    return false;
  };
  function get_platformExceptionHandlers_() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return platformExceptionHandlers_;
  }
  var platformExceptionHandlers_;
  function get_platformExceptionHandlers() {
    _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf();
    return get_platformExceptionHandlers_();
  }
  function DiagnosticCoroutineContextException(context) {
    RuntimeException_init_$Init$_0(toString(context), this);
    captureStack(this, DiagnosticCoroutineContextException);
  }
  var properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx;
  function _init_properties_CoroutineExceptionHandlerImpl_kt__37d7wf() {
    if (!properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx) {
      properties_initialized_CoroutineExceptionHandlerImpl_kt_qhrgvx = true;
      // Inline function 'kotlin.collections.mutableSetOf' call
      platformExceptionHandlers_ = LinkedHashSet_init_$Create$();
    }
  }
  function LockFreeLinkedListNode() {
    this.u10_1 = this;
    this.v10_1 = this;
    this.w10_1 = false;
  }
  protoOf(LockFreeLinkedListNode).x10 = function (node, permissionsBitmask) {
    var prev = this.v10_1;
    var tmp;
    if (prev instanceof ListClosed) {
      tmp = ((prev.u1v_1 & permissionsBitmask) === 0 && prev.x10(node, permissionsBitmask));
    } else {
      node.u10_1 = this;
      node.v10_1 = prev;
      prev.u10_1 = node;
      this.v10_1 = node;
      tmp = true;
    }
    return tmp;
  };
  protoOf(LockFreeLinkedListNode).d13 = function (forbiddenElementsBit) {
    this.x10(new ListClosed(forbiddenElementsBit), forbiddenElementsBit);
  };
  protoOf(LockFreeLinkedListNode).y10 = function () {
    if (this.w10_1)
      return false;
    var prev = this.v10_1;
    var next = this.u10_1;
    prev.u10_1 = next;
    next.v10_1 = prev;
    this.w10_1 = true;
    return true;
  };
  protoOf(LockFreeLinkedListNode).z10 = function (node) {
    if (!(this.u10_1 === this))
      return false;
    this.x10(node, -2147483648);
    return true;
  };
  function LockFreeLinkedListHead() {
    LockFreeLinkedListNode.call(this);
  }
  function ListClosed(forbiddenElementsBitmask) {
    LockFreeLinkedListNode.call(this);
    this.u1v_1 = forbiddenElementsBitmask;
  }
  function recoverStackTrace(exception, continuation) {
    return exception;
  }
  function unwrap(exception) {
    return exception;
  }
  function recoverStackTrace_0(exception) {
    return exception;
  }
  function SynchronizedObject() {
  }
  function systemProp_1(propertyName) {
    return null;
  }
  function threadContextElements(context) {
    return 0;
  }
  function CommonThreadLocal() {
    this.o12_1 = null;
  }
  protoOf(CommonThreadLocal).p12 = function () {
    return this.o12_1;
  };
  protoOf(CommonThreadLocal).q12 = function (value) {
    this.o12_1 = value;
  };
  function commonThreadLocal(name) {
    return new CommonThreadLocal();
  }
  function createEventLoop() {
    return new UnconfinedEventLoop();
  }
  function UnconfinedEventLoop() {
    EventLoop.call(this);
  }
  protoOf(UnconfinedEventLoop).o11 = function (context, block) {
    unsupported();
  };
  function unsupported() {
    throw UnsupportedOperationException_init_$Create$('runBlocking event loop is not supported');
  }
  function await_0(_this__u8e3s4, $completion) {
    var cancellable = new CancellableContinuationImpl(intercepted($completion), 1);
    cancellable.lz();
    var tmp = await$lambda(cancellable);
    _this__u8e3s4.then(tmp, await$lambda_0(cancellable));
    return cancellable.ow();
  }
  function await$lambda($cont) {
    return function (it) {
      // Inline function 'kotlin.coroutines.resume' call
      var this_0 = $cont;
      // Inline function 'kotlin.Companion.success' call
      var tmp$ret$1 = _Result___init__impl__xyqfz8(it);
      this_0.w8(tmp$ret$1);
      return null;
    };
  }
  function await$lambda_0($cont) {
    return function (it) {
      var tmp0 = $cont;
      // Inline function 'kotlin.coroutines.resumeWithException' call
      // Inline function 'kotlin.Companion.failure' call
      var exception = toThrowable(it);
      var tmp$ret$1 = _Result___init__impl__xyqfz8(createFailure(exception));
      tmp0.w8(tmp$ret$1);
      return null;
    };
  }
  function propagateExceptionFinalResort(exception) {
    // Inline function 'kotlin.with' call
    throwAsyncJsError(exception.message, getKClassFromExpression(exception).x9(), stackTraceToString(exception));
    return Unit_instance;
  }
  function throwAsyncJsError(message, className, stack) {
    var error = new Error();
    error.message = message;
    error.name = className;
    error.stack = stack;
    if (typeof globalThis.reportError === 'function') {
      // Up-to-date browsers and some non-browser JS runtimes (Deno, Bun)
      globalThis.reportError(error);
    } else {
      // Fallback for old browsers (pre-2022), Node.js
      setTimeout(function () {
        throw error;
      }, 0);
    }
  }
  function SetTimeoutDispatcher() {
    SetTimeoutDispatcher_instance = this;
    SetTimeoutBasedDispatcher.call(this);
  }
  protoOf(SetTimeoutDispatcher).f1u = function () {
    this.m1u_1.t1u(0);
  };
  var SetTimeoutDispatcher_instance;
  function SetTimeoutDispatcher_getInstance() {
    if (SetTimeoutDispatcher_instance == null)
      new SetTimeoutDispatcher();
    return SetTimeoutDispatcher_instance;
  }
  function SetTimeoutBasedDispatcher$invokeOnTimeout$lambda($block) {
    return function () {
      $block.e10();
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.xx(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function SetTimeoutBasedDispatcher() {
    CoroutineDispatcher.call(this);
    this.m1u_1 = new ScheduledMessageQueue(this);
  }
  protoOf(SetTimeoutBasedDispatcher).o11 = function (context, block) {
    this.m1u_1.u1u(block);
  };
  protoOf(SetTimeoutBasedDispatcher).z11 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$invokeOnTimeout$lambda(block), delayToInt(timeMillis));
    return new ClearTimeout(handle);
  };
  protoOf(SetTimeoutBasedDispatcher).y11 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout(SetTimeoutBasedDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new ClearTimeout(handle));
  };
  function MessageQueue() {
    this.n1u_1 = ArrayDeque_init_$Create$();
    this.o1u_1 = 16;
    this.p1u_1 = false;
  }
  protoOf(MessageQueue).u1u = function (element) {
    this.v1u(element);
    if (!this.p1u_1) {
      this.p1u_1 = true;
      this.r1u();
    }
  };
  protoOf(MessageQueue).q1u = function () {
    try {
      // Inline function 'kotlin.repeat' call
      var times = this.o1u_1;
      var inductionVariable = 0;
      if (inductionVariable < times)
        do {
          var index = inductionVariable;
          inductionVariable = inductionVariable + 1 | 0;
          var tmp0_elvis_lhs = removeFirstOrNull(this);
          var tmp;
          if (tmp0_elvis_lhs == null) {
            return Unit_instance;
          } else {
            tmp = tmp0_elvis_lhs;
          }
          var element = tmp;
          element.e10();
        }
         while (inductionVariable < times);
    }finally {
      if (this.n()) {
        this.p1u_1 = false;
      } else {
        this.s1u();
      }
    }
  };
  protoOf(MessageQueue).v1u = function (element) {
    return this.n1u_1.g(element);
  };
  protoOf(MessageQueue).g = function (element) {
    return this.v1u((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).w1u = function (index, element) {
    this.n1u_1.f2(index, element);
  };
  protoOf(MessageQueue).f2 = function (index, element) {
    return this.w1u(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).x1u = function (element) {
    return this.n1u_1.c2(element);
  };
  protoOf(MessageQueue).c2 = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.x1u((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).y1u = function (elements) {
    return this.n1u_1.r(elements);
  };
  protoOf(MessageQueue).r = function (elements) {
    return this.y1u(elements);
  };
  protoOf(MessageQueue).z1u = function (index, elements) {
    return this.n1u_1.d2(index, elements);
  };
  protoOf(MessageQueue).d2 = function (index, elements) {
    return this.z1u(index, elements);
  };
  protoOf(MessageQueue).b2 = function () {
    this.n1u_1.b2();
  };
  protoOf(MessageQueue).a1v = function (index, element) {
    return this.n1u_1.e2(index, element);
  };
  protoOf(MessageQueue).e2 = function (index, element) {
    return this.a1v(index, (!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).g2 = function (index) {
    return this.n1u_1.g2(index);
  };
  protoOf(MessageQueue).t = function (index) {
    return this.n1u_1.t(index);
  };
  protoOf(MessageQueue).o1 = function (fromIndex, toIndex) {
    return this.n1u_1.o1(fromIndex, toIndex);
  };
  protoOf(MessageQueue).n = function () {
    return this.n1u_1.n();
  };
  protoOf(MessageQueue).b1v = function (element) {
    return this.n1u_1.s(element);
  };
  protoOf(MessageQueue).s = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return false;
    return this.b1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).i = function () {
    return this.n1u_1.i();
  };
  protoOf(MessageQueue).m = function (index) {
    return this.n1u_1.m(index);
  };
  protoOf(MessageQueue).c1v = function (element) {
    return this.n1u_1.u(element);
  };
  protoOf(MessageQueue).u = function (element) {
    if (!(!(element == null) ? isInterface(element, Runnable) : false))
      return -1;
    return this.c1v((!(element == null) ? isInterface(element, Runnable) : false) ? element : THROW_CCE());
  };
  protoOf(MessageQueue).l = function () {
    return this.n1u_1.xc_1;
  };
  function WindowClearTimeout($outer, handle) {
    this.c1w_1 = $outer;
    ClearTimeout.call(this, handle);
  }
  protoOf(WindowClearTimeout).jy = function () {
    w3cClearTimeout(this.c1w_1.e1w_1, this.g1w_1);
  };
  function WindowDispatcher$scheduleResumeAfterDelay$lambda($continuation, this$0) {
    return function () {
      // Inline function 'kotlin.with' call
      $continuation.xx(this$0, Unit_instance);
      return Unit_instance;
    };
  }
  function WindowDispatcher(window_0) {
    CoroutineDispatcher.call(this);
    this.e1w_1 = window_0;
    this.f1w_1 = new WindowMessageQueue(this.e1w_1);
  }
  protoOf(WindowDispatcher).o11 = function (context, block) {
    return this.f1w_1.u1u(block);
  };
  protoOf(WindowDispatcher).y11 = function (timeMillis, continuation) {
    var handle = w3cSetTimeout_0(this.e1w_1, WindowDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), delayToInt(timeMillis));
    invokeOnCancellation(continuation, new WindowClearTimeout(this, handle));
  };
  protoOf(WindowDispatcher).z11 = function (timeMillis, block, context) {
    var handle = w3cSetTimeout_0(this.e1w_1, Runnable$run$ref(block), delayToInt(timeMillis));
    return new WindowClearTimeout(this, handle);
  };
  function delayToInt(timeMillis) {
    return convertToInt(coerceIn(timeMillis, new Long(0, 0), new Long(2147483647, 0)));
  }
  function ClearTimeout(handle) {
    this.g1w_1 = handle;
  }
  protoOf(ClearTimeout).jy = function () {
    w3cClearTimeout_0(this.g1w_1);
  };
  protoOf(ClearTimeout).iy = function (cause) {
    this.jy();
  };
  protoOf(ClearTimeout).toString = function () {
    return 'ClearTimeout[' + this.g1w_1 + ']';
  };
  //region block: post-declaration
  protoOf(JobSupport).sv = cancel$default;
  protoOf(JobSupport).ye = plus;
  protoOf(JobSupport).y8 = get_0;
  protoOf(JobSupport).xe = fold;
  protoOf(JobSupport).we = minusKey_0;
  protoOf(CancellableContinuationImpl).vx = cancel$default_0;
  protoOf(CoroutineDispatcher).y8 = get;
  protoOf(CoroutineDispatcher).we = minusKey;
  protoOf(BufferedChannel).p1c = close$default;
  protoOf(ChannelCoroutine).p1c = close$default;
  defineProp(protoOf(DispatchException), 'cause', function () {
    return this.f();
  });
  protoOf(CancellableContinuationWithOwner).vx = cancel$default_0;
  //endregion
  //region block: init
  Active_instance = new Active();
  Key_instance_1 = new Key_0();
  Key_instance_2 = new Key_1();
  GlobalScope_instance = new GlobalScope();
  Key_instance_3 = new Key_2();
  NonDisposableHandle_instance = new NonDisposableHandle();
  Key_instance_4 = new Key_3();
  counter = 0;
  DEBUG = false;
  RECOVER_STACK_TRACES = false;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = Key_instance_1;
  _.$_$.b = Dispatchers_getInstance;
  _.$_$.c = GlobalScope_instance;
  _.$_$.d = Key_instance_3;
  _.$_$.e = BufferOverflow_DROP_LATEST_getInstance;
  _.$_$.f = BufferOverflow_DROP_OLDEST_getInstance;
  _.$_$.g = CoroutineStart_LAZY_getInstance;
  _.$_$.h = CoroutineStart_UNDISPATCHED_getInstance;
  _.$_$.i = await_0;
  _.$_$.j = coroutineScope;
  _.$_$.k = delay;
  _.$_$.l = withContext;
  _.$_$.m = withTimeoutOrNull;
  _.$_$.n = yield_0;
  _.$_$.o = ChannelResult;
  _.$_$.p = Channel;
  _.$_$.q = cancelConsumed;
  _.$_$.r = FlowCollector;
  _.$_$.s = MutableSharedFlow;
  _.$_$.t = MutableStateFlow;
  _.$_$.u = asStateFlow;
  _.$_$.v = debounce;
  _.$_$.w = flow;
  _.$_$.x = receiveAsFlow;
  _.$_$.y = Mutex;
  _.$_$.z = CancellableContinuationImpl;
  _.$_$.a1 = CompletableDeferred;
  _.$_$.b1 = CoroutineDispatcher;
  _.$_$.c1 = CoroutineScope_0;
  _.$_$.d1 = CoroutineScope;
  _.$_$.e1 = invokeOnTimeout;
  _.$_$.f1 = Delay;
  _.$_$.g1 = Job_0;
  _.$_$.h1 = Job;
  _.$_$.i1 = MainScope;
  _.$_$.j1 = Runnable;
  _.$_$.k1 = SupervisorJob;
  _.$_$.l1 = async;
  _.$_$.m1 = cancel;
  _.$_$.n1 = cancel_1;
  _.$_$.o1 = cancel_0;
  _.$_$.p1 = get_isActive_0;
  _.$_$.q1 = get_isActive;
  _.$_$.r1 = get_job;
  _.$_$.s1 = launch;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlinx-coroutines-core.js.map
