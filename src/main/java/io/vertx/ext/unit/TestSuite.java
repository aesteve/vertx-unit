package io.vertx.ext.unit;

import io.vertx.codegen.annotations.Fluent;
import io.vertx.codegen.annotations.GenIgnore;
import io.vertx.codegen.annotations.VertxGen;
import io.vertx.core.Handler;

import java.util.concurrent.TimeUnit;

/**
 * @author <a href="mailto:julien@julienviet.com">Julien Viet</a>
 */
@VertxGen
public interface TestSuite {

  @Fluent
  TestSuite before(Handler<Test> before);

  @Fluent
  TestSuite after(Handler<Test> callback);

  @Fluent
  TestSuite test(String desc, Handler<Test> handler);

  TestSuiteRunner runner();

  @GenIgnore
  junit.framework.TestSuite toJUnitSuite();

  @GenIgnore
  junit.framework.TestSuite toJUnitSuite(long timeout, TimeUnit unit);
}