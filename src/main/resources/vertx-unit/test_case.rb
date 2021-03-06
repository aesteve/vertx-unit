require 'vertx-unit/test_context'
require 'vertx/util/utils.rb'
# Generated from io.vertx.ext.unit.TestCase
module VertxUnit
  #  A test case object can be used to create a single test.
  class TestCase
    # @private
    # @param j_del [::VertxUnit::TestCase] the java delegate
    def initialize(j_del)
      @j_del = j_del
    end
    # @private
    # @return [::VertxUnit::TestCase] the underlying java delegate
    def j_del
      @j_del
    end
    #  Create a test case.
    # @param [String] name the test case name
    # @yield the test case
    # @return [::VertxUnit::TestCase] the created test case
    def self.create(name=nil)
      if name.class == String && block_given?
        return ::Vertx::Util::Utils.safe_create(Java::IoVertxExtUnit::TestCase.java_method(:create, [Java::java.lang.String.java_class,Java::IoVertxCore::Handler.java_class]).call(name,(Proc.new { |event| yield(::Vertx::Util::Utils.safe_create(event,::VertxUnit::TestContext)) })),::VertxUnit::TestCase)
      end
      raise ArgumentError, "Invalid arguments when calling create(name)"
    end
  end
end
