(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js', './compose-multiplatform-core-compose-ui-ui.js', './androidx-compose-runtime-runtime.js', './portfolio-shared.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'), require('./compose-multiplatform-core-compose-ui-ui.js'), require('./androidx-compose-runtime-runtime.js'), require('./portfolio-shared.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'portfolio:webApp'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'portfolio:webApp'.");
    }
    if (typeof globalThis['compose-multiplatform-core-compose-ui-ui'] === 'undefined') {
      throw new Error("Error loading module 'portfolio:webApp'. Its dependency 'compose-multiplatform-core-compose-ui-ui' was not found. Please, check whether 'compose-multiplatform-core-compose-ui-ui' is loaded prior to 'portfolio:webApp'.");
    }
    if (typeof globalThis['androidx-compose-runtime-runtime'] === 'undefined') {
      throw new Error("Error loading module 'portfolio:webApp'. Its dependency 'androidx-compose-runtime-runtime' was not found. Please, check whether 'androidx-compose-runtime-runtime' is loaded prior to 'portfolio:webApp'.");
    }
    if (typeof globalThis['portfolio-shared'] === 'undefined') {
      throw new Error("Error loading module 'portfolio:webApp'. Its dependency 'portfolio-shared' was not found. Please, check whether 'portfolio-shared' is loaded prior to 'portfolio:webApp'.");
    }
    globalThis['portfolio:webApp'] = factory(typeof globalThis['portfolio:webApp'] === 'undefined' ? {} : globalThis['portfolio:webApp'], globalThis['kotlin-kotlin-stdlib'], globalThis['compose-multiplatform-core-compose-ui-ui'], globalThis['androidx-compose-runtime-runtime'], globalThis['portfolio-shared']);
  }
}(function (_, kotlin_kotlin, kotlin_org_jetbrains_compose_ui_ui, kotlin_androidx_compose_runtime_runtime, kotlin_portfolio_shared) {
  'use strict';
  //region block: imports
  var VOID = kotlin_kotlin.$_$.c;
  var ComposeViewport = kotlin_org_jetbrains_compose_ui_ui.$_$.b4;
  var Unit_instance = kotlin_kotlin.$_$.f1;
  var constructCallableReference = kotlin_kotlin.$_$.x8;
  var sourceInformation = kotlin_androidx_compose_runtime_runtime.$_$.r1;
  var traceEventStart = kotlin_androidx_compose_runtime_runtime.$_$.v1;
  var isTraceInProgress = kotlin_androidx_compose_runtime_runtime.$_$.e1;
  var App = kotlin_portfolio_shared.$_$.a;
  var traceEventEnd = kotlin_androidx_compose_runtime_runtime.$_$.u1;
  var composableLambdaInstance = kotlin_androidx_compose_runtime_runtime.$_$.b;
  var initMetadataForObject = kotlin_kotlin.$_$.o9;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ComposableSingletons$MainKt, 'ComposableSingletons$MainKt');
  //endregion
  function main() {
    ComposeViewport(VOID, VOID, ComposableSingletons$MainKt_getInstance().jdr_1);
  }
  function ComposableLambda$invoke$ref(p0) {
    return constructCallableReference(function (p0_0, p1) {
      p0.v3t(p0_0, p1);
      return Unit_instance;
    }, 2, 0, 13, VOID, [p0]);
  }
  function ComposableSingletons$MainKt$lambda$_1782928533$lambda_x7h6ia($composer, $changed) {
    var $composer_0 = $composer;
    sourceInformation($composer_0, 'C8@218L5:main.kt#ozqi0y');
    if ($composer_0.n1z(!(($changed & 3) === 2), $changed & 1)) {
      if (isTraceInProgress()) {
        traceEventStart(-1782928533, $changed, -1, 'com.sangeeth.portfolio.ComposableSingletons$MainKt.lambda$-1782928533.<anonymous> (main.kt:8)');
      }
      App($composer_0, 0);
      if (isTraceInProgress()) {
        traceEventEnd();
      }
    } else {
      $composer_0.y1y();
    }
    return Unit_instance;
  }
  function ComposableSingletons$MainKt() {
    ComposableSingletons$MainKt_instance = this;
    var tmp = this;
    tmp.jdr_1 = ComposableLambda$invoke$ref(composableLambdaInstance(-1782928533, false, ComposableSingletons$MainKt$lambda$_1782928533$lambda_x7h6ia));
  }
  var ComposableSingletons$MainKt_instance;
  function ComposableSingletons$MainKt_getInstance() {
    if (ComposableSingletons$MainKt_instance == null)
      new ComposableSingletons$MainKt();
    return ComposableSingletons$MainKt_instance;
  }
  function mainWrapper() {
    main();
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=portfolio-webApp.js.map
