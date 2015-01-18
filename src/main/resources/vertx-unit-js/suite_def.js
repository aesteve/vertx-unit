/*
 * Copyright 2014 Red Hat, Inc.
 *
 * Red Hat licenses this file to you under the Apache License, version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License.  You may obtain a copy of the License at:
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.  See the
 * License for the specific language governing permissions and limitations
 * under the License.
 */

/** @module vertx-unit-js/suite_def */
var utils = require('vertx-js/util/utils');
var SuiteRunner = require('vertx-unit-js/suite_runner');
var Test = require('vertx-unit-js/test');

var io = Packages.io;
var JsonObject = io.vertx.core.json.JsonObject;
var JSuiteDef = io.vertx.ext.unit.SuiteDef;

/**

 @class
*/
var SuiteDef = function(j_val) {

  var j_suiteDef = j_val;
  var that = this;

  /**

   @public
   @param before {function} 
   @return {SuiteDef}
   */
  this.before = function(before) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_suiteDef.before(function(jVal) {
      before(new Test(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param callback {function} 
   @return {SuiteDef}
   */
  this.after = function(callback) {
    var __args = arguments;
    if (__args.length === 1 && typeof __args[0] === 'function') {
      j_suiteDef.after(function(jVal) {
      callback(new Test(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public
   @param desc {string} 
   @param handler {function} 
   @return {SuiteDef}
   */
  this.test = function(desc, handler) {
    var __args = arguments;
    if (__args.length === 2 && typeof __args[0] === 'string' && typeof __args[1] === 'function') {
      j_suiteDef.test(desc, function(jVal) {
      handler(new Test(jVal));
    });
      return that;
    } else utils.invalidArgs();
  };

  /**

   @public

   @return {SuiteRunner}
   */
  this.runner = function() {
    var __args = arguments;
    if (__args.length === 0) {
      return new SuiteRunner(j_suiteDef.runner());
    } else utils.invalidArgs();
  };

  // A reference to the underlying Java delegate
  // NOTE! This is an internal API and must not be used in user code.
  // If you rely on this property your code is likely to break if we change it / remove it without warning.
  this._jdel = j_suiteDef;
};

// We export the Constructor function
module.exports = SuiteDef;