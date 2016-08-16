"use strict";

var _boneScript = require("bone-script");

var step = "P8_43";
var dir = "P8_44";

(0, _boneScript.pinMode)(step, _boneScript.OUTPUT);
(0, _boneScript.pinMode)(dir, _boneScript.OUTPUT);

(0, _boneScript.digitalWrite)(step, _boneScript.HIGH);