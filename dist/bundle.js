(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _mainController = require('./mainController');

var _mainController2 = _interopRequireDefault(_mainController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function () {
  'use strict';

  angular.module('babelTest', []).controller('mainController', _mainController2.default);
})();

},{"./mainController":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
function mainController($scope) {
  var title = 'Gulp and Babel Test';

  this.title = title;
}

exports.default = mainController;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzIiwic3JjL21haW5Db250cm9sbGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsYUFBVztBQUNWOztBQUVBLFVBQVEsTUFBUixDQUFlLFdBQWYsRUFBNEIsRUFBNUIsRUFDRyxVQURILENBQ2MsZ0JBRGQ7QUFHRCxDQU5BLEdBQUQ7Ozs7Ozs7O0FDRkEsU0FBUyxjQUFULENBQXdCLE1BQXhCLEVBQWdDO0FBQzlCLE1BQU0sUUFBUSxxQkFBZDs7QUFFQSxPQUFLLEtBQUwsR0FBYSxLQUFiO0FBQ0Q7O2tCQUVjLGMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IG1haW5Db250cm9sbGVyIGZyb20gJy4vbWFpbkNvbnRyb2xsZXInO1xuXG4oZnVuY3Rpb24oKSB7XG4gICd1c2Ugc3RyaWN0JztcblxuICBhbmd1bGFyLm1vZHVsZSgnYmFiZWxUZXN0JywgW10pXG4gICAgLmNvbnRyb2xsZXIoJ21haW5Db250cm9sbGVyJywgbWFpbkNvbnRyb2xsZXIpO1xuXG59KCkpO1xuIiwiZnVuY3Rpb24gbWFpbkNvbnRyb2xsZXIoJHNjb3BlKSB7XG4gIGNvbnN0IHRpdGxlID0gJ0d1bHAgYW5kIEJhYmVsIFRlc3QnO1xuXG4gIHRoaXMudGl0bGUgPSB0aXRsZTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgbWFpbkNvbnRyb2xsZXJcbiJdfQ==
