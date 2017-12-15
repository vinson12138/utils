/**
 * Created by Neo on 2017/11/21
 */
var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var test;
(function (test) {
    var util = zero.util;
    var TimeFormat = zero.util.TimeFormat;
    var Test = (function () {
        ////////////////////////////////////////////////////////////////////////////
        //public
        //请在此处书写所有的公有方法
        ////////////////////////////////////////////////////////////////////////////
        function Test() {
        }
        Test.prototype.testTypeOf = function () {
            console.log("--------------test typeOf");
            var obj;
            console.assert(util.typeOf(obj) === "undefined", "obj的类型为undefined");
            console.assert(util.typeOf(false) === "boolean", "false的类型为boolean");
            console.assert(util.typeOf(1) === "number", "1的类型为number");
            console.assert(util.typeOf("1") === "number", " ‘1’的类型为number");
            console.assert(util.typeOf("1") === "string", " ‘1’的类型为string");
            console.assert(util.typeOf("") === "string", " ‘’的类型为string");
            console.assert(util.typeOf(null) === "null", "null的类型为null");
            console.assert(util.typeOf(new Main()) === "object", "new Main()的类型为object");
            console.assert(util.typeOf(function () {
            }) === "function", "()=>{}的类型为function");
            console.assert(util.typeOf([]) === "array", "[]的类型为array");
            console.assert(util.typeOf({}) === "object", "{}的类型为object");
            console.assert(util.typeOf({ "1": 1 }) === "object", "{'1':1}的类型为object");
            console.assert(util.typeOf(new Date()) === "date", "new Date()的类型为date");
            console.assert(util.typeOf(/[]/g) === "regexp", "/[]/g的类型为regexp");
            console.assert(util.typeOf(new Error()) === "error", "new Error()的类型为error");
            console.assert(util.typeOf(Number("a")) === "NaN", "Number('a')的类型为NaN");
        };
        Test.prototype.testArrayEqual = function () {
            console.log("--------------test arrayEqual");
            var a = [1, 2, 3];
            var b = [1, 3, 2];
            console.assert(util.objectEqual(a, b), "[1,2,3]和[1,3,2]相等");
            var c = [1, 2];
            var d = [1, 2, 3];
            console.assert(util.arrayEqual(c, d), "[1,2]和[1,2,3]相等");
            var e = [1, 2, 3];
            var f = [4, 5];
            console.assert(util.objectEqual(e, f), "[1,2,3]和[4,5]相等");
        };
        Test.prototype.testObjectEqual = function () {
            console.log("--------------test objectEqual");
            var a = { a: 1, b: 2, c: 3 };
            var b = { a: 1, b: 3, c: 2 };
            console.assert(util.objectEqual(a, b), "{a:1, b:2, c:3}和{a:1, b:3, c:2}相等");
            var c = { a: 1, b: 2 };
            var d = { a: 1, b: 2, c: 3 };
            console.assert(util.objectEqual(c, d), "{a:1, b:2}和{a: 1, b: 2, c:3}相等");
            var e = { a: "1", b: 2, c: 3 };
            var f = { a: "a", b: 2, c: 9 };
            console.assert(util.objectEqual(e, f), "{a: '1', b: 2, c: 3}和{a: 'a', b: 2, c: 9}相等");
        };
        Test.prototype.testTimeFormat = function () {
            console.log("--------------test timeFormat");
            var date = new Date(Date.UTC(2017, 10, 21, 16, 0, 0));
            var tf = new TimeFormat();
            var locales = "zh-CN";
            var options = {
                // weekday: 'long',
                // year: 'numeric',
                // month: 'numeric',
                // day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: false
            };
            console.log(date.toLocaleDateString(locales, options), "距离", new Date().toLocaleDateString(locales, options));
            console.log(tf.formatTimeRemain(date));
            console.log(tf.formatTimeDistance(date));
        };
        Test.prototype.testCookie = function () {
            console.log("--------------test cookie");
            var cookie = new util.EZCookie();
            cookie.set("username", "neo12138 中文; say=Hi; 中文");
            cookie.set("say", "Hello World!");
            console.log("username:", cookie.get("username"));
            console.log("say:", cookie.get("say"));
            cookie.remove("say");
            console.log("say:", cookie.get("say"));
        };
        return Test;
    }());
    test.Test = Test;
    __reflect(Test.prototype, "test.Test");
})(test || (test = {}));
