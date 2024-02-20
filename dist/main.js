"use strict";

var _cliente = _interopRequireDefault(require("./cliente.mjs"));
var _impuesto = _interopRequireDefault(require("./impuesto.mjs"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var impC1 = new _impuesto["default"](5000, 1000);
var c1 = new _cliente["default"]('Murlach', impC1);
console.log(c1.nombre);
console.log(c1.impuesto);
console.log(c1.calcularImpuesto());