/* Four 0.2.0 | Jason Petersen (@allotrop3) | MIT Licensed */"use strict";var _createClass=(function(){function defineProperties(target,props){for(var i=0;i < props.length;i++) {var descriptor=props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if("value" in descriptor)descriptor.writable = true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};})();var _get=function get(_x47,_x48,_x49){var _again=true;_function: while(_again) {var object=_x47,property=_x48,receiver=_x49;desc = parent = getter = undefined;_again = false;if(object === null)object = Function.prototype;var desc=Object.getOwnPropertyDescriptor(object,property);if(desc === undefined){var parent=Object.getPrototypeOf(object);if(parent === null){return undefined;}else {_x47 = parent;_x48 = property;_x49 = receiver;_again = true;continue _function;}}else if("value" in desc){return desc.value;}else {var getter=desc.get;if(getter === undefined){return undefined;}return getter.call(receiver);}}};function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _inherits(subClass,superClass){if(typeof superClass !== "function" && superClass !== null){throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__ = superClass;}(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require == "function" && require;if(!u && a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '" + o + "'");throw (f.code = "MODULE_NOT_FOUND",f);}var l=n[o] = {exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e);},l,l.exports,e,t,n,r);}return n[o].exports;}var i=typeof require == "function" && require;for(var o=0;o < r.length;o++) s(r[o]);return s;})({1:[function(require,module,exports){ /**
 * @fileoverview gl-matrix - High performance matrix and vector operations
 * @author Brandon Jones
 * @author Colin MacKenzie IV
 * @version 2.3.0
 */ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */ // END HEADER
exports.glMatrix = require("./gl-matrix/common.js");exports.mat2 = require("./gl-matrix/mat2.js");exports.mat2d = require("./gl-matrix/mat2d.js");exports.mat3 = require("./gl-matrix/mat3.js");exports.mat4 = require("./gl-matrix/mat4.js");exports.quat = require("./gl-matrix/quat.js");exports.vec2 = require("./gl-matrix/vec2.js");exports.vec3 = require("./gl-matrix/vec3.js");exports.vec4 = require("./gl-matrix/vec4.js");},{"./gl-matrix/common.js":2,"./gl-matrix/mat2.js":3,"./gl-matrix/mat2d.js":4,"./gl-matrix/mat3.js":5,"./gl-matrix/mat4.js":6,"./gl-matrix/quat.js":7,"./gl-matrix/vec2.js":8,"./gl-matrix/vec3.js":9,"./gl-matrix/vec4.js":10}],2:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */ /**
 * @class Common utilities
 * @name glMatrix
 */var glMatrix={}; // Constants
glMatrix.EPSILON = 0.000001;glMatrix.ARRAY_TYPE = typeof Float32Array !== 'undefined'?Float32Array:Array;glMatrix.RANDOM = Math.random; /**
 * Sets the type of array used when creating new vectors and matrices
 *
 * @param {Type} type Array type, such as Float32Array or Array
 */glMatrix.setMatrixArrayType = function(type){GLMAT_ARRAY_TYPE = type;};var degree=Math.PI / 180; /**
* Convert Degree To Radian
*
* @param {Number} Angle in Degrees
*/glMatrix.toRadian = function(a){return a * degree;};module.exports = glMatrix;},{}],3:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 2x2 Matrix
 * @name mat2
 */var mat2={}; /**
 * Creates a new identity mat2
 *
 * @returns {mat2} a new 2x2 matrix
 */mat2.create = function(){var out=new glMatrix.ARRAY_TYPE(4);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Creates a new mat2 initialized with values from an existing matrix
 *
 * @param {mat2} a matrix to clone
 * @returns {mat2} a new 2x2 matrix
 */mat2.clone = function(a){var out=new glMatrix.ARRAY_TYPE(4);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Copy the values from one mat2 to another
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Set a mat2 to the identity matrix
 *
 * @param {mat2} out the receiving matrix
 * @returns {mat2} out
 */mat2.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Transpose the values of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.transpose = function(out,a){ // If we are transposing ourselves we can skip a few steps but have to cache some values
if(out === a){var a1=a[1];out[1] = a[2];out[2] = a1;}else {out[0] = a[0];out[1] = a[2];out[2] = a[1];out[3] = a[3];}return out;}; /**
 * Inverts a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.invert = function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3], // Calculate the determinant
det=a0 * a3 - a2 * a1;if(!det){return null;}det = 1.0 / det;out[0] = a3 * det;out[1] = -a1 * det;out[2] = -a2 * det;out[3] = a0 * det;return out;}; /**
 * Calculates the adjugate of a mat2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the source matrix
 * @returns {mat2} out
 */mat2.adjoint = function(out,a){ // Caching this value is nessecary if out == a
var a0=a[0];out[0] = a[3];out[1] = -a[1];out[2] = -a[2];out[3] = a0;return out;}; /**
 * Calculates the determinant of a mat2
 *
 * @param {mat2} a the source matrix
 * @returns {Number} determinant of a
 */mat2.determinant = function(a){return a[0] * a[3] - a[2] * a[1];}; /**
 * Multiplies two mat2's
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the first operand
 * @param {mat2} b the second operand
 * @returns {mat2} out
 */mat2.multiply = function(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3];var b0=b[0],b1=b[1],b2=b[2],b3=b[3];out[0] = a0 * b0 + a2 * b1;out[1] = a1 * b0 + a3 * b1;out[2] = a0 * b2 + a2 * b3;out[3] = a1 * b2 + a3 * b3;return out;}; /**
 * Alias for {@link mat2.multiply}
 * @function
 */mat2.mul = mat2.multiply; /**
 * Rotates a mat2 by the given angle
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */mat2.rotate = function(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],s=Math.sin(rad),c=Math.cos(rad);out[0] = a0 * c + a2 * s;out[1] = a1 * c + a3 * s;out[2] = a0 * -s + a2 * c;out[3] = a1 * -s + a3 * c;return out;}; /**
 * Scales the mat2 by the dimensions in the given vec2
 *
 * @param {mat2} out the receiving matrix
 * @param {mat2} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2} out
 **/mat2.scale = function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],v0=v[0],v1=v[1];out[0] = a0 * v0;out[1] = a1 * v0;out[2] = a2 * v1;out[3] = a3 * v1;return out;}; /**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.rotate(dest, dest, rad);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2} out
 */mat2.fromRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);out[0] = c;out[1] = s;out[2] = -s;out[3] = c;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2.identity(dest);
 *     mat2.scale(dest, dest, vec);
 *
 * @param {mat2} out mat2 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2} out
 */mat2.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = v[1];return out;}; /**
 * Returns a string representation of a mat2
 *
 * @param {mat2} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat2.str = function(a){return 'mat2(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';}; /**
 * Returns Frobenius norm of a mat2
 *
 * @param {mat2} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat2.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2));}; /**
 * Returns L, D and U matrices (Lower triangular, Diagonal and Upper triangular) by factorizing the input matrix
 * @param {mat2} L the lower triangular matrix 
 * @param {mat2} D the diagonal matrix 
 * @param {mat2} U the upper triangular matrix 
 * @param {mat2} a the input matrix to factorize
 */mat2.LDU = function(L,D,U,a){L[2] = a[2] / a[0];U[0] = a[0];U[1] = a[1];U[3] = a[3] - L[2] * U[1];return [L,D,U];};module.exports = mat2;},{"./common.js":2}],4:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 2x3 Matrix
 * @name mat2d
 * 
 * @description 
 * A mat2d contains six elements defined as:
 * <pre>
 * [a, c, tx,
 *  b, d, ty]
 * </pre>
 * This is a short form for the 3x3 matrix:
 * <pre>
 * [a, c, tx,
 *  b, d, ty,
 *  0, 0, 1]
 * </pre>
 * The last row is ignored so the array is shorter and operations are faster.
 */var mat2d={}; /**
 * Creates a new identity mat2d
 *
 * @returns {mat2d} a new 2x3 matrix
 */mat2d.create = function(){var out=new glMatrix.ARRAY_TYPE(6);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;out[4] = 0;out[5] = 0;return out;}; /**
 * Creates a new mat2d initialized with values from an existing matrix
 *
 * @param {mat2d} a matrix to clone
 * @returns {mat2d} a new 2x3 matrix
 */mat2d.clone = function(a){var out=new glMatrix.ARRAY_TYPE(6);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];return out;}; /**
 * Copy the values from one mat2d to another
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */mat2d.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];return out;}; /**
 * Set a mat2d to the identity matrix
 *
 * @param {mat2d} out the receiving matrix
 * @returns {mat2d} out
 */mat2d.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;out[4] = 0;out[5] = 0;return out;}; /**
 * Inverts a mat2d
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the source matrix
 * @returns {mat2d} out
 */mat2d.invert = function(out,a){var aa=a[0],ab=a[1],ac=a[2],ad=a[3],atx=a[4],aty=a[5];var det=aa * ad - ab * ac;if(!det){return null;}det = 1.0 / det;out[0] = ad * det;out[1] = -ab * det;out[2] = -ac * det;out[3] = aa * det;out[4] = (ac * aty - ad * atx) * det;out[5] = (ab * atx - aa * aty) * det;return out;}; /**
 * Calculates the determinant of a mat2d
 *
 * @param {mat2d} a the source matrix
 * @returns {Number} determinant of a
 */mat2d.determinant = function(a){return a[0] * a[3] - a[1] * a[2];}; /**
 * Multiplies two mat2d's
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the first operand
 * @param {mat2d} b the second operand
 * @returns {mat2d} out
 */mat2d.multiply = function(out,a,b){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],b0=b[0],b1=b[1],b2=b[2],b3=b[3],b4=b[4],b5=b[5];out[0] = a0 * b0 + a2 * b1;out[1] = a1 * b0 + a3 * b1;out[2] = a0 * b2 + a2 * b3;out[3] = a1 * b2 + a3 * b3;out[4] = a0 * b4 + a2 * b5 + a4;out[5] = a1 * b4 + a3 * b5 + a5;return out;}; /**
 * Alias for {@link mat2d.multiply}
 * @function
 */mat2d.mul = mat2d.multiply; /**
 * Rotates a mat2d by the given angle
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */mat2d.rotate = function(out,a,rad){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],s=Math.sin(rad),c=Math.cos(rad);out[0] = a0 * c + a2 * s;out[1] = a1 * c + a3 * s;out[2] = a0 * -s + a2 * c;out[3] = a1 * -s + a3 * c;out[4] = a4;out[5] = a5;return out;}; /**
 * Scales the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat2d} out
 **/mat2d.scale = function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],v0=v[0],v1=v[1];out[0] = a0 * v0;out[1] = a1 * v0;out[2] = a2 * v1;out[3] = a3 * v1;out[4] = a4;out[5] = a5;return out;}; /**
 * Translates the mat2d by the dimensions in the given vec2
 *
 * @param {mat2d} out the receiving matrix
 * @param {mat2d} a the matrix to translate
 * @param {vec2} v the vec2 to translate the matrix by
 * @returns {mat2d} out
 **/mat2d.translate = function(out,a,v){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],a4=a[4],a5=a[5],v0=v[0],v1=v[1];out[0] = a0;out[1] = a1;out[2] = a2;out[3] = a3;out[4] = a0 * v0 + a2 * v1 + a4;out[5] = a1 * v0 + a3 * v1 + a5;return out;}; /**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.rotate(dest, dest, rad);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat2d} out
 */mat2d.fromRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);out[0] = c;out[1] = s;out[2] = -s;out[3] = c;out[4] = 0;out[5] = 0;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.scale(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat2d} out
 */mat2d.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = v[1];out[4] = 0;out[5] = 0;return out;}; /**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat2d.identity(dest);
 *     mat2d.translate(dest, dest, vec);
 *
 * @param {mat2d} out mat2d receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat2d} out
 */mat2d.fromTranslation = function(out,v){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 1;out[4] = v[0];out[5] = v[1];return out;}; /**
 * Returns a string representation of a mat2d
 *
 * @param {mat2d} a matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat2d.str = function(a){return 'mat2d(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ')';}; /**
 * Returns Frobenius norm of a mat2d
 *
 * @param {mat2d} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat2d.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2) + Math.pow(a[4],2) + Math.pow(a[5],2) + 1);};module.exports = mat2d;},{"./common.js":2}],5:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 3x3 Matrix
 * @name mat3
 */var mat3={}; /**
 * Creates a new identity mat3
 *
 * @returns {mat3} a new 3x3 matrix
 */mat3.create = function(){var out=new glMatrix.ARRAY_TYPE(9);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 1;out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Copies the upper-left 3x3 values into the given mat3.
 *
 * @param {mat3} out the receiving 3x3 matrix
 * @param {mat4} a   the source 4x4 matrix
 * @returns {mat3} out
 */mat3.fromMat4 = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[4];out[4] = a[5];out[5] = a[6];out[6] = a[8];out[7] = a[9];out[8] = a[10];return out;}; /**
 * Creates a new mat3 initialized with values from an existing matrix
 *
 * @param {mat3} a matrix to clone
 * @returns {mat3} a new 3x3 matrix
 */mat3.clone = function(a){var out=new glMatrix.ARRAY_TYPE(9);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];return out;}; /**
 * Copy the values from one mat3 to another
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];return out;}; /**
 * Set a mat3 to the identity matrix
 *
 * @param {mat3} out the receiving matrix
 * @returns {mat3} out
 */mat3.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 1;out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Transpose the values of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.transpose = function(out,a){ // If we are transposing ourselves we can skip a few steps but have to cache some values
if(out === a){var a01=a[1],a02=a[2],a12=a[5];out[1] = a[3];out[2] = a[6];out[3] = a01;out[5] = a[7];out[6] = a02;out[7] = a12;}else {out[0] = a[0];out[1] = a[3];out[2] = a[6];out[3] = a[1];out[4] = a[4];out[5] = a[7];out[6] = a[2];out[7] = a[5];out[8] = a[8];}return out;}; /**
 * Inverts a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.invert = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b01=a22 * a11 - a12 * a21,b11=-a22 * a10 + a12 * a20,b21=a21 * a10 - a11 * a20, // Calculate the determinant
det=a00 * b01 + a01 * b11 + a02 * b21;if(!det){return null;}det = 1.0 / det;out[0] = b01 * det;out[1] = (-a22 * a01 + a02 * a21) * det;out[2] = (a12 * a01 - a02 * a11) * det;out[3] = b11 * det;out[4] = (a22 * a00 - a02 * a20) * det;out[5] = (-a12 * a00 + a02 * a10) * det;out[6] = b21 * det;out[7] = (-a21 * a00 + a01 * a20) * det;out[8] = (a11 * a00 - a01 * a10) * det;return out;}; /**
 * Calculates the adjugate of a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the source matrix
 * @returns {mat3} out
 */mat3.adjoint = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];out[0] = a11 * a22 - a12 * a21;out[1] = a02 * a21 - a01 * a22;out[2] = a01 * a12 - a02 * a11;out[3] = a12 * a20 - a10 * a22;out[4] = a00 * a22 - a02 * a20;out[5] = a02 * a10 - a00 * a12;out[6] = a10 * a21 - a11 * a20;out[7] = a01 * a20 - a00 * a21;out[8] = a00 * a11 - a01 * a10;return out;}; /**
 * Calculates the determinant of a mat3
 *
 * @param {mat3} a the source matrix
 * @returns {Number} determinant of a
 */mat3.determinant = function(a){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8];return a00 * (a22 * a11 - a12 * a21) + a01 * (-a22 * a10 + a12 * a20) + a02 * (a21 * a10 - a11 * a20);}; /**
 * Multiplies two mat3's
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the first operand
 * @param {mat3} b the second operand
 * @returns {mat3} out
 */mat3.multiply = function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],b00=b[0],b01=b[1],b02=b[2],b10=b[3],b11=b[4],b12=b[5],b20=b[6],b21=b[7],b22=b[8];out[0] = b00 * a00 + b01 * a10 + b02 * a20;out[1] = b00 * a01 + b01 * a11 + b02 * a21;out[2] = b00 * a02 + b01 * a12 + b02 * a22;out[3] = b10 * a00 + b11 * a10 + b12 * a20;out[4] = b10 * a01 + b11 * a11 + b12 * a21;out[5] = b10 * a02 + b11 * a12 + b12 * a22;out[6] = b20 * a00 + b21 * a10 + b22 * a20;out[7] = b20 * a01 + b21 * a11 + b22 * a21;out[8] = b20 * a02 + b21 * a12 + b22 * a22;return out;}; /**
 * Alias for {@link mat3.multiply}
 * @function
 */mat3.mul = mat3.multiply; /**
 * Translate a mat3 by the given vector
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to translate
 * @param {vec2} v vector to translate by
 * @returns {mat3} out
 */mat3.translate = function(out,a,v){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],x=v[0],y=v[1];out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a10;out[4] = a11;out[5] = a12;out[6] = x * a00 + y * a10 + a20;out[7] = x * a01 + y * a11 + a21;out[8] = x * a02 + y * a12 + a22;return out;}; /**
 * Rotates a mat3 by the given angle
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */mat3.rotate = function(out,a,rad){var a00=a[0],a01=a[1],a02=a[2],a10=a[3],a11=a[4],a12=a[5],a20=a[6],a21=a[7],a22=a[8],s=Math.sin(rad),c=Math.cos(rad);out[0] = c * a00 + s * a10;out[1] = c * a01 + s * a11;out[2] = c * a02 + s * a12;out[3] = c * a10 - s * a00;out[4] = c * a11 - s * a01;out[5] = c * a12 - s * a02;out[6] = a20;out[7] = a21;out[8] = a22;return out;}; /**
 * Scales the mat3 by the dimensions in the given vec2
 *
 * @param {mat3} out the receiving matrix
 * @param {mat3} a the matrix to rotate
 * @param {vec2} v the vec2 to scale the matrix by
 * @returns {mat3} out
 **/mat3.scale = function(out,a,v){var x=v[0],y=v[1];out[0] = x * a[0];out[1] = x * a[1];out[2] = x * a[2];out[3] = y * a[3];out[4] = y * a[4];out[5] = y * a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];return out;}; /**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.translate(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Translation vector
 * @returns {mat3} out
 */mat3.fromTranslation = function(out,v){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 1;out[5] = 0;out[6] = v[0];out[7] = v[1];out[8] = 1;return out;}; /**
 * Creates a matrix from a given angle
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.rotate(dest, dest, rad);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat3} out
 */mat3.fromRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad);out[0] = c;out[1] = s;out[2] = 0;out[3] = -s;out[4] = c;out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat3.identity(dest);
 *     mat3.scale(dest, dest, vec);
 *
 * @param {mat3} out mat3 receiving operation result
 * @param {vec2} v Scaling vector
 * @returns {mat3} out
 */mat3.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = 0;out[4] = v[1];out[5] = 0;out[6] = 0;out[7] = 0;out[8] = 1;return out;}; /**
 * Copies the values from a mat2d into a mat3
 *
 * @param {mat3} out the receiving matrix
 * @param {mat2d} a the matrix to copy
 * @returns {mat3} out
 **/mat3.fromMat2d = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = 0;out[3] = a[2];out[4] = a[3];out[5] = 0;out[6] = a[4];out[7] = a[5];out[8] = 1;return out;}; /**
* Calculates a 3x3 matrix from the given quaternion
*
* @param {mat3} out mat3 receiving operation result
* @param {quat} q Quaternion to create matrix from
*
* @returns {mat3} out
*/mat3.fromQuat = function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,yx=y * x2,yy=y * y2,zx=z * x2,zy=z * y2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2;out[0] = 1 - yy - zz;out[3] = yx - wz;out[6] = zx + wy;out[1] = yx + wz;out[4] = 1 - xx - zz;out[7] = zy - wx;out[2] = zx - wy;out[5] = zy + wx;out[8] = 1 - xx - yy;return out;}; /**
* Calculates a 3x3 normal matrix (transpose inverse) from the 4x4 matrix
*
* @param {mat3} out mat3 receiving operation result
* @param {mat4} a Mat4 to derive the normal matrix from
*
* @returns {mat3} out
*/mat3.normalFromMat4 = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00 * a11 - a01 * a10,b01=a00 * a12 - a02 * a10,b02=a00 * a13 - a03 * a10,b03=a01 * a12 - a02 * a11,b04=a01 * a13 - a03 * a11,b05=a02 * a13 - a03 * a12,b06=a20 * a31 - a21 * a30,b07=a20 * a32 - a22 * a30,b08=a20 * a33 - a23 * a30,b09=a21 * a32 - a22 * a31,b10=a21 * a33 - a23 * a31,b11=a22 * a33 - a23 * a32, // Calculate the determinant
det=b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;if(!det){return null;}det = 1.0 / det;out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;out[1] = (a12 * b08 - a10 * b11 - a13 * b07) * det;out[2] = (a10 * b10 - a11 * b08 + a13 * b06) * det;out[3] = (a02 * b10 - a01 * b11 - a03 * b09) * det;out[4] = (a00 * b11 - a02 * b08 + a03 * b07) * det;out[5] = (a01 * b08 - a00 * b10 - a03 * b06) * det;out[6] = (a31 * b05 - a32 * b04 + a33 * b03) * det;out[7] = (a32 * b02 - a30 * b05 - a33 * b01) * det;out[8] = (a30 * b04 - a31 * b02 + a33 * b00) * det;return out;}; /**
 * Returns a string representation of a mat3
 *
 * @param {mat3} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat3.str = function(a){return 'mat3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ')';}; /**
 * Returns Frobenius norm of a mat3
 *
 * @param {mat3} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat3.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2) + Math.pow(a[4],2) + Math.pow(a[5],2) + Math.pow(a[6],2) + Math.pow(a[7],2) + Math.pow(a[8],2));};module.exports = mat3;},{"./common.js":2}],6:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 4x4 Matrix
 * @name mat4
 */var mat4={}; /**
 * Creates a new identity mat4
 *
 * @returns {mat4} a new 4x4 matrix
 */mat4.create = function(){var out=new glMatrix.ARRAY_TYPE(16);out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a new mat4 initialized with values from an existing matrix
 *
 * @param {mat4} a matrix to clone
 * @returns {mat4} a new 4x4 matrix
 */mat4.clone = function(a){var out=new glMatrix.ARRAY_TYPE(16);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];out[9] = a[9];out[10] = a[10];out[11] = a[11];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];return out;}; /**
 * Copy the values from one mat4 to another
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[8] = a[8];out[9] = a[9];out[10] = a[10];out[11] = a[11];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];return out;}; /**
 * Set a mat4 to the identity matrix
 *
 * @param {mat4} out the receiving matrix
 * @returns {mat4} out
 */mat4.identity = function(out){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Transpose the values of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.transpose = function(out,a){ // If we are transposing ourselves we can skip a few steps but have to cache some values
if(out === a){var a01=a[1],a02=a[2],a03=a[3],a12=a[6],a13=a[7],a23=a[11];out[1] = a[4];out[2] = a[8];out[3] = a[12];out[4] = a01;out[6] = a[9];out[7] = a[13];out[8] = a02;out[9] = a12;out[11] = a[14];out[12] = a03;out[13] = a13;out[14] = a23;}else {out[0] = a[0];out[1] = a[4];out[2] = a[8];out[3] = a[12];out[4] = a[1];out[5] = a[5];out[6] = a[9];out[7] = a[13];out[8] = a[2];out[9] = a[6];out[10] = a[10];out[11] = a[14];out[12] = a[3];out[13] = a[7];out[14] = a[11];out[15] = a[15];}return out;}; /**
 * Inverts a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.invert = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00 * a11 - a01 * a10,b01=a00 * a12 - a02 * a10,b02=a00 * a13 - a03 * a10,b03=a01 * a12 - a02 * a11,b04=a01 * a13 - a03 * a11,b05=a02 * a13 - a03 * a12,b06=a20 * a31 - a21 * a30,b07=a20 * a32 - a22 * a30,b08=a20 * a33 - a23 * a30,b09=a21 * a32 - a22 * a31,b10=a21 * a33 - a23 * a31,b11=a22 * a33 - a23 * a32, // Calculate the determinant
det=b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;if(!det){return null;}det = 1.0 / det;out[0] = (a11 * b11 - a12 * b10 + a13 * b09) * det;out[1] = (a02 * b10 - a01 * b11 - a03 * b09) * det;out[2] = (a31 * b05 - a32 * b04 + a33 * b03) * det;out[3] = (a22 * b04 - a21 * b05 - a23 * b03) * det;out[4] = (a12 * b08 - a10 * b11 - a13 * b07) * det;out[5] = (a00 * b11 - a02 * b08 + a03 * b07) * det;out[6] = (a32 * b02 - a30 * b05 - a33 * b01) * det;out[7] = (a20 * b05 - a22 * b02 + a23 * b01) * det;out[8] = (a10 * b10 - a11 * b08 + a13 * b06) * det;out[9] = (a01 * b08 - a00 * b10 - a03 * b06) * det;out[10] = (a30 * b04 - a31 * b02 + a33 * b00) * det;out[11] = (a21 * b02 - a20 * b04 - a23 * b00) * det;out[12] = (a11 * b07 - a10 * b09 - a12 * b06) * det;out[13] = (a00 * b09 - a01 * b07 + a02 * b06) * det;out[14] = (a31 * b01 - a30 * b03 - a32 * b00) * det;out[15] = (a20 * b03 - a21 * b01 + a22 * b00) * det;return out;}; /**
 * Calculates the adjugate of a mat4
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the source matrix
 * @returns {mat4} out
 */mat4.adjoint = function(out,a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15];out[0] = a11 * (a22 * a33 - a23 * a32) - a21 * (a12 * a33 - a13 * a32) + a31 * (a12 * a23 - a13 * a22);out[1] = -(a01 * (a22 * a33 - a23 * a32) - a21 * (a02 * a33 - a03 * a32) + a31 * (a02 * a23 - a03 * a22));out[2] = a01 * (a12 * a33 - a13 * a32) - a11 * (a02 * a33 - a03 * a32) + a31 * (a02 * a13 - a03 * a12);out[3] = -(a01 * (a12 * a23 - a13 * a22) - a11 * (a02 * a23 - a03 * a22) + a21 * (a02 * a13 - a03 * a12));out[4] = -(a10 * (a22 * a33 - a23 * a32) - a20 * (a12 * a33 - a13 * a32) + a30 * (a12 * a23 - a13 * a22));out[5] = a00 * (a22 * a33 - a23 * a32) - a20 * (a02 * a33 - a03 * a32) + a30 * (a02 * a23 - a03 * a22);out[6] = -(a00 * (a12 * a33 - a13 * a32) - a10 * (a02 * a33 - a03 * a32) + a30 * (a02 * a13 - a03 * a12));out[7] = a00 * (a12 * a23 - a13 * a22) - a10 * (a02 * a23 - a03 * a22) + a20 * (a02 * a13 - a03 * a12);out[8] = a10 * (a21 * a33 - a23 * a31) - a20 * (a11 * a33 - a13 * a31) + a30 * (a11 * a23 - a13 * a21);out[9] = -(a00 * (a21 * a33 - a23 * a31) - a20 * (a01 * a33 - a03 * a31) + a30 * (a01 * a23 - a03 * a21));out[10] = a00 * (a11 * a33 - a13 * a31) - a10 * (a01 * a33 - a03 * a31) + a30 * (a01 * a13 - a03 * a11);out[11] = -(a00 * (a11 * a23 - a13 * a21) - a10 * (a01 * a23 - a03 * a21) + a20 * (a01 * a13 - a03 * a11));out[12] = -(a10 * (a21 * a32 - a22 * a31) - a20 * (a11 * a32 - a12 * a31) + a30 * (a11 * a22 - a12 * a21));out[13] = a00 * (a21 * a32 - a22 * a31) - a20 * (a01 * a32 - a02 * a31) + a30 * (a01 * a22 - a02 * a21);out[14] = -(a00 * (a11 * a32 - a12 * a31) - a10 * (a01 * a32 - a02 * a31) + a30 * (a01 * a12 - a02 * a11));out[15] = a00 * (a11 * a22 - a12 * a21) - a10 * (a01 * a22 - a02 * a21) + a20 * (a01 * a12 - a02 * a11);return out;}; /**
 * Calculates the determinant of a mat4
 *
 * @param {mat4} a the source matrix
 * @returns {Number} determinant of a
 */mat4.determinant = function(a){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15],b00=a00 * a11 - a01 * a10,b01=a00 * a12 - a02 * a10,b02=a00 * a13 - a03 * a10,b03=a01 * a12 - a02 * a11,b04=a01 * a13 - a03 * a11,b05=a02 * a13 - a03 * a12,b06=a20 * a31 - a21 * a30,b07=a20 * a32 - a22 * a30,b08=a20 * a33 - a23 * a30,b09=a21 * a32 - a22 * a31,b10=a21 * a33 - a23 * a31,b11=a22 * a33 - a23 * a32; // Calculate the determinant
return b00 * b11 - b01 * b10 + b02 * b09 + b03 * b08 - b04 * b07 + b05 * b06;}; /**
 * Multiplies two mat4's
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the first operand
 * @param {mat4} b the second operand
 * @returns {mat4} out
 */mat4.multiply = function(out,a,b){var a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11],a30=a[12],a31=a[13],a32=a[14],a33=a[15]; // Cache only the current line of the second matrix
var b0=b[0],b1=b[1],b2=b[2],b3=b[3];out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;b0 = b[4];b1 = b[5];b2 = b[6];b3 = b[7];out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;b0 = b[8];b1 = b[9];b2 = b[10];b3 = b[11];out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;b0 = b[12];b1 = b[13];b2 = b[14];b3 = b[15];out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;return out;}; /**
 * Alias for {@link mat4.multiply}
 * @function
 */mat4.mul = mat4.multiply; /**
 * Translate a mat4 by the given vector
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to translate
 * @param {vec3} v vector to translate by
 * @returns {mat4} out
 */mat4.translate = function(out,a,v){var x=v[0],y=v[1],z=v[2],a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23;if(a === out){out[12] = a[0] * x + a[4] * y + a[8] * z + a[12];out[13] = a[1] * x + a[5] * y + a[9] * z + a[13];out[14] = a[2] * x + a[6] * y + a[10] * z + a[14];out[15] = a[3] * x + a[7] * y + a[11] * z + a[15];}else {a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11];out[0] = a00;out[1] = a01;out[2] = a02;out[3] = a03;out[4] = a10;out[5] = a11;out[6] = a12;out[7] = a13;out[8] = a20;out[9] = a21;out[10] = a22;out[11] = a23;out[12] = a00 * x + a10 * y + a20 * z + a[12];out[13] = a01 * x + a11 * y + a21 * z + a[13];out[14] = a02 * x + a12 * y + a22 * z + a[14];out[15] = a03 * x + a13 * y + a23 * z + a[15];}return out;}; /**
 * Scales the mat4 by the dimensions in the given vec3
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to scale
 * @param {vec3} v the vec3 to scale the matrix by
 * @returns {mat4} out
 **/mat4.scale = function(out,a,v){var x=v[0],y=v[1],z=v[2];out[0] = a[0] * x;out[1] = a[1] * x;out[2] = a[2] * x;out[3] = a[3] * x;out[4] = a[4] * y;out[5] = a[5] * y;out[6] = a[6] * y;out[7] = a[7] * y;out[8] = a[8] * z;out[9] = a[9] * z;out[10] = a[10] * z;out[11] = a[11] * z;out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];return out;}; /**
 * Rotates a mat4 by the given angle around the given axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */mat4.rotate = function(out,a,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x * x + y * y + z * z),s,c,t,a00,a01,a02,a03,a10,a11,a12,a13,a20,a21,a22,a23,b00,b01,b02,b10,b11,b12,b20,b21,b22;if(Math.abs(len) < glMatrix.EPSILON){return null;}len = 1 / len;x *= len;y *= len;z *= len;s = Math.sin(rad);c = Math.cos(rad);t = 1 - c;a00 = a[0];a01 = a[1];a02 = a[2];a03 = a[3];a10 = a[4];a11 = a[5];a12 = a[6];a13 = a[7];a20 = a[8];a21 = a[9];a22 = a[10];a23 = a[11]; // Construct the elements of the rotation matrix
b00 = x * x * t + c;b01 = y * x * t + z * s;b02 = z * x * t - y * s;b10 = x * y * t - z * s;b11 = y * y * t + c;b12 = z * y * t + x * s;b20 = x * z * t + y * s;b21 = y * z * t - x * s;b22 = z * z * t + c; // Perform rotation-specific matrix multiplication
out[0] = a00 * b00 + a10 * b01 + a20 * b02;out[1] = a01 * b00 + a11 * b01 + a21 * b02;out[2] = a02 * b00 + a12 * b01 + a22 * b02;out[3] = a03 * b00 + a13 * b01 + a23 * b02;out[4] = a00 * b10 + a10 * b11 + a20 * b12;out[5] = a01 * b10 + a11 * b11 + a21 * b12;out[6] = a02 * b10 + a12 * b11 + a22 * b12;out[7] = a03 * b10 + a13 * b11 + a23 * b12;out[8] = a00 * b20 + a10 * b21 + a20 * b22;out[9] = a01 * b20 + a11 * b21 + a21 * b22;out[10] = a02 * b20 + a12 * b21 + a22 * b22;out[11] = a03 * b20 + a13 * b21 + a23 * b22;if(a !== out){ // If the source and destination differ, copy the unchanged last row
out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];}return out;}; /**
 * Rotates a matrix by the given angle around the X axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.rotateX = function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a10=a[4],a11=a[5],a12=a[6],a13=a[7],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a !== out){ // If the source and destination differ, copy the unchanged rows
out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];} // Perform axis-specific matrix multiplication
out[4] = a10 * c + a20 * s;out[5] = a11 * c + a21 * s;out[6] = a12 * c + a22 * s;out[7] = a13 * c + a23 * s;out[8] = a20 * c - a10 * s;out[9] = a21 * c - a11 * s;out[10] = a22 * c - a12 * s;out[11] = a23 * c - a13 * s;return out;}; /**
 * Rotates a matrix by the given angle around the Y axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.rotateY = function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a20=a[8],a21=a[9],a22=a[10],a23=a[11];if(a !== out){ // If the source and destination differ, copy the unchanged rows
out[4] = a[4];out[5] = a[5];out[6] = a[6];out[7] = a[7];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];} // Perform axis-specific matrix multiplication
out[0] = a00 * c - a20 * s;out[1] = a01 * c - a21 * s;out[2] = a02 * c - a22 * s;out[3] = a03 * c - a23 * s;out[8] = a00 * s + a20 * c;out[9] = a01 * s + a21 * c;out[10] = a02 * s + a22 * c;out[11] = a03 * s + a23 * c;return out;}; /**
 * Rotates a matrix by the given angle around the Z axis
 *
 * @param {mat4} out the receiving matrix
 * @param {mat4} a the matrix to rotate
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.rotateZ = function(out,a,rad){var s=Math.sin(rad),c=Math.cos(rad),a00=a[0],a01=a[1],a02=a[2],a03=a[3],a10=a[4],a11=a[5],a12=a[6],a13=a[7];if(a !== out){ // If the source and destination differ, copy the unchanged last row
out[8] = a[8];out[9] = a[9];out[10] = a[10];out[11] = a[11];out[12] = a[12];out[13] = a[13];out[14] = a[14];out[15] = a[15];} // Perform axis-specific matrix multiplication
out[0] = a00 * c + a10 * s;out[1] = a01 * c + a11 * s;out[2] = a02 * c + a12 * s;out[3] = a03 * c + a13 * s;out[4] = a10 * c - a00 * s;out[5] = a11 * c - a01 * s;out[6] = a12 * c - a02 * s;out[7] = a13 * c - a03 * s;return out;}; /**
 * Creates a matrix from a vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */mat4.fromTranslation = function(out,v){out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = v[0];out[13] = v[1];out[14] = v[2];out[15] = 1;return out;}; /**
 * Creates a matrix from a vector scaling
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.scale(dest, dest, vec);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {vec3} v Scaling vector
 * @returns {mat4} out
 */mat4.fromScaling = function(out,v){out[0] = v[0];out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = v[1];out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = v[2];out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from a given angle around a given axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotate(dest, dest, rad, axis);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @param {vec3} axis the axis to rotate around
 * @returns {mat4} out
 */mat4.fromRotation = function(out,rad,axis){var x=axis[0],y=axis[1],z=axis[2],len=Math.sqrt(x * x + y * y + z * z),s,c,t;if(Math.abs(len) < glMatrix.EPSILON){return null;}len = 1 / len;x *= len;y *= len;z *= len;s = Math.sin(rad);c = Math.cos(rad);t = 1 - c; // Perform rotation-specific matrix multiplication
out[0] = x * x * t + c;out[1] = y * x * t + z * s;out[2] = z * x * t - y * s;out[3] = 0;out[4] = x * y * t - z * s;out[5] = y * y * t + c;out[6] = z * y * t + x * s;out[7] = 0;out[8] = x * z * t + y * s;out[9] = y * z * t - x * s;out[10] = z * z * t + c;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from the given angle around the X axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateX(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.fromXRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad); // Perform axis-specific matrix multiplication
out[0] = 1;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = c;out[6] = s;out[7] = 0;out[8] = 0;out[9] = -s;out[10] = c;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from the given angle around the Y axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateY(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.fromYRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad); // Perform axis-specific matrix multiplication
out[0] = c;out[1] = 0;out[2] = -s;out[3] = 0;out[4] = 0;out[5] = 1;out[6] = 0;out[7] = 0;out[8] = s;out[9] = 0;out[10] = c;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from the given angle around the Z axis
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.rotateZ(dest, dest, rad);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {Number} rad the angle to rotate the matrix by
 * @returns {mat4} out
 */mat4.fromZRotation = function(out,rad){var s=Math.sin(rad),c=Math.cos(rad); // Perform axis-specific matrix multiplication
out[0] = c;out[1] = s;out[2] = 0;out[3] = 0;out[4] = -s;out[5] = c;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 1;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Creates a matrix from a quaternion rotation and vector translation
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @returns {mat4} out
 */mat4.fromRotationTranslation = function(out,q,v){ // Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,xy=x * y2,xz=x * z2,yy=y * y2,yz=y * z2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2;out[0] = 1 - (yy + zz);out[1] = xy + wz;out[2] = xz - wy;out[3] = 0;out[4] = xy - wz;out[5] = 1 - (xx + zz);out[6] = yz + wx;out[7] = 0;out[8] = xz + wy;out[9] = yz - wx;out[10] = 1 - (xx + yy);out[11] = 0;out[12] = v[0];out[13] = v[1];out[14] = v[2];out[15] = 1;return out;}; /**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @returns {mat4} out
 */mat4.fromRotationTranslationScale = function(out,q,v,s){ // Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,xy=x * y2,xz=x * z2,yy=y * y2,yz=y * z2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2,sx=s[0],sy=s[1],sz=s[2];out[0] = (1 - (yy + zz)) * sx;out[1] = (xy + wz) * sx;out[2] = (xz - wy) * sx;out[3] = 0;out[4] = (xy - wz) * sy;out[5] = (1 - (xx + zz)) * sy;out[6] = (yz + wx) * sy;out[7] = 0;out[8] = (xz + wy) * sz;out[9] = (yz - wx) * sz;out[10] = (1 - (xx + yy)) * sz;out[11] = 0;out[12] = v[0];out[13] = v[1];out[14] = v[2];out[15] = 1;return out;}; /**
 * Creates a matrix from a quaternion rotation, vector translation and vector scale, rotating and scaling around the given origin
 * This is equivalent to (but much faster than):
 *
 *     mat4.identity(dest);
 *     mat4.translate(dest, vec);
 *     mat4.translate(dest, origin);
 *     var quatMat = mat4.create();
 *     quat4.toMat4(quat, quatMat);
 *     mat4.multiply(dest, quatMat);
 *     mat4.scale(dest, scale)
 *     mat4.translate(dest, negativeOrigin);
 *
 * @param {mat4} out mat4 receiving operation result
 * @param {quat4} q Rotation quaternion
 * @param {vec3} v Translation vector
 * @param {vec3} s Scaling vector
 * @param {vec3} o The origin vector around which to scale and rotate
 * @returns {mat4} out
 */mat4.fromRotationTranslationScaleOrigin = function(out,q,v,s,o){ // Quaternion math
var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,xy=x * y2,xz=x * z2,yy=y * y2,yz=y * z2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2,sx=s[0],sy=s[1],sz=s[2],ox=o[0],oy=o[1],oz=o[2];out[0] = (1 - (yy + zz)) * sx;out[1] = (xy + wz) * sx;out[2] = (xz - wy) * sx;out[3] = 0;out[4] = (xy - wz) * sy;out[5] = (1 - (xx + zz)) * sy;out[6] = (yz + wx) * sy;out[7] = 0;out[8] = (xz + wy) * sz;out[9] = (yz - wx) * sz;out[10] = (1 - (xx + yy)) * sz;out[11] = 0;out[12] = v[0] + ox - (out[0] * ox + out[4] * oy + out[8] * oz);out[13] = v[1] + oy - (out[1] * ox + out[5] * oy + out[9] * oz);out[14] = v[2] + oz - (out[2] * ox + out[6] * oy + out[10] * oz);out[15] = 1;return out;};mat4.fromQuat = function(out,q){var x=q[0],y=q[1],z=q[2],w=q[3],x2=x + x,y2=y + y,z2=z + z,xx=x * x2,yx=y * x2,yy=y * y2,zx=z * x2,zy=z * y2,zz=z * z2,wx=w * x2,wy=w * y2,wz=w * z2;out[0] = 1 - yy - zz;out[1] = yx + wz;out[2] = zx - wy;out[3] = 0;out[4] = yx - wz;out[5] = 1 - xx - zz;out[6] = zy + wx;out[7] = 0;out[8] = zx + wy;out[9] = zy - wx;out[10] = 1 - xx - yy;out[11] = 0;out[12] = 0;out[13] = 0;out[14] = 0;out[15] = 1;return out;}; /**
 * Generates a frustum matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {Number} left Left bound of the frustum
 * @param {Number} right Right bound of the frustum
 * @param {Number} bottom Bottom bound of the frustum
 * @param {Number} top Top bound of the frustum
 * @param {Number} near Near bound of the frustum
 * @param {Number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4.frustum = function(out,left,right,bottom,top,near,far){var rl=1 / (right - left),tb=1 / (top - bottom),nf=1 / (near - far);out[0] = near * 2 * rl;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = near * 2 * tb;out[6] = 0;out[7] = 0;out[8] = (right + left) * rl;out[9] = (top + bottom) * tb;out[10] = (far + near) * nf;out[11] = -1;out[12] = 0;out[13] = 0;out[14] = far * near * 2 * nf;out[15] = 0;return out;}; /**
 * Generates a perspective projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fovy Vertical field of view in radians
 * @param {number} aspect Aspect ratio. typically viewport width/height
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4.perspective = function(out,fovy,aspect,near,far){var f=1.0 / Math.tan(fovy / 2),nf=1 / (near - far);out[0] = f / aspect;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = f;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = (far + near) * nf;out[11] = -1;out[12] = 0;out[13] = 0;out[14] = 2 * far * near * nf;out[15] = 0;return out;}; /**
 * Generates a perspective projection matrix with the given field of view.
 * This is primarily useful for generating projection matrices to be used
 * with the still experiemental WebVR API.
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} fov Object containing the following values: upDegrees, downDegrees, leftDegrees, rightDegrees
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4.perspectiveFromFieldOfView = function(out,fov,near,far){var upTan=Math.tan(fov.upDegrees * Math.PI / 180.0),downTan=Math.tan(fov.downDegrees * Math.PI / 180.0),leftTan=Math.tan(fov.leftDegrees * Math.PI / 180.0),rightTan=Math.tan(fov.rightDegrees * Math.PI / 180.0),xScale=2.0 / (leftTan + rightTan),yScale=2.0 / (upTan + downTan);out[0] = xScale;out[1] = 0.0;out[2] = 0.0;out[3] = 0.0;out[4] = 0.0;out[5] = yScale;out[6] = 0.0;out[7] = 0.0;out[8] = -((leftTan - rightTan) * xScale * 0.5);out[9] = (upTan - downTan) * yScale * 0.5;out[10] = far / (near - far);out[11] = -1.0;out[12] = 0.0;out[13] = 0.0;out[14] = far * near / (near - far);out[15] = 0.0;return out;}; /**
 * Generates a orthogonal projection matrix with the given bounds
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {number} left Left bound of the frustum
 * @param {number} right Right bound of the frustum
 * @param {number} bottom Bottom bound of the frustum
 * @param {number} top Top bound of the frustum
 * @param {number} near Near bound of the frustum
 * @param {number} far Far bound of the frustum
 * @returns {mat4} out
 */mat4.ortho = function(out,left,right,bottom,top,near,far){var lr=1 / (left - right),bt=1 / (bottom - top),nf=1 / (near - far);out[0] = -2 * lr;out[1] = 0;out[2] = 0;out[3] = 0;out[4] = 0;out[5] = -2 * bt;out[6] = 0;out[7] = 0;out[8] = 0;out[9] = 0;out[10] = 2 * nf;out[11] = 0;out[12] = (left + right) * lr;out[13] = (top + bottom) * bt;out[14] = (far + near) * nf;out[15] = 1;return out;}; /**
 * Generates a look-at matrix with the given eye position, focal point, and up axis
 *
 * @param {mat4} out mat4 frustum matrix will be written into
 * @param {vec3} eye Position of the viewer
 * @param {vec3} center Point the viewer is looking at
 * @param {vec3} up vec3 pointing up
 * @returns {mat4} out
 */mat4.lookAt = function(out,eye,center,up){var x0,x1,x2,y0,y1,y2,z0,z1,z2,len,eyex=eye[0],eyey=eye[1],eyez=eye[2],upx=up[0],upy=up[1],upz=up[2],centerx=center[0],centery=center[1],centerz=center[2];if(Math.abs(eyex - centerx) < glMatrix.EPSILON && Math.abs(eyey - centery) < glMatrix.EPSILON && Math.abs(eyez - centerz) < glMatrix.EPSILON){return mat4.identity(out);}z0 = eyex - centerx;z1 = eyey - centery;z2 = eyez - centerz;len = 1 / Math.sqrt(z0 * z0 + z1 * z1 + z2 * z2);z0 *= len;z1 *= len;z2 *= len;x0 = upy * z2 - upz * z1;x1 = upz * z0 - upx * z2;x2 = upx * z1 - upy * z0;len = Math.sqrt(x0 * x0 + x1 * x1 + x2 * x2);if(!len){x0 = 0;x1 = 0;x2 = 0;}else {len = 1 / len;x0 *= len;x1 *= len;x2 *= len;}y0 = z1 * x2 - z2 * x1;y1 = z2 * x0 - z0 * x2;y2 = z0 * x1 - z1 * x0;len = Math.sqrt(y0 * y0 + y1 * y1 + y2 * y2);if(!len){y0 = 0;y1 = 0;y2 = 0;}else {len = 1 / len;y0 *= len;y1 *= len;y2 *= len;}out[0] = x0;out[1] = y0;out[2] = z0;out[3] = 0;out[4] = x1;out[5] = y1;out[6] = z1;out[7] = 0;out[8] = x2;out[9] = y2;out[10] = z2;out[11] = 0;out[12] = -(x0 * eyex + x1 * eyey + x2 * eyez);out[13] = -(y0 * eyex + y1 * eyey + y2 * eyez);out[14] = -(z0 * eyex + z1 * eyey + z2 * eyez);out[15] = 1;return out;}; /**
 * Returns a string representation of a mat4
 *
 * @param {mat4} mat matrix to represent as a string
 * @returns {String} string representation of the matrix
 */mat4.str = function(a){return 'mat4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ', ' + a[4] + ', ' + a[5] + ', ' + a[6] + ', ' + a[7] + ', ' + a[8] + ', ' + a[9] + ', ' + a[10] + ', ' + a[11] + ', ' + a[12] + ', ' + a[13] + ', ' + a[14] + ', ' + a[15] + ')';}; /**
 * Returns Frobenius norm of a mat4
 *
 * @param {mat4} a the matrix to calculate Frobenius norm of
 * @returns {Number} Frobenius norm
 */mat4.frob = function(a){return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2) + Math.pow(a[3],2) + Math.pow(a[4],2) + Math.pow(a[5],2) + Math.pow(a[6],2) + Math.pow(a[7],2) + Math.pow(a[8],2) + Math.pow(a[9],2) + Math.pow(a[10],2) + Math.pow(a[11],2) + Math.pow(a[12],2) + Math.pow(a[13],2) + Math.pow(a[14],2) + Math.pow(a[15],2));};module.exports = mat4;},{"./common.js":2}],7:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js");var mat3=require("./mat3.js");var vec3=require("./vec3.js");var vec4=require("./vec4.js"); /**
 * @class Quaternion
 * @name quat
 */var quat={}; /**
 * Creates a new identity quat
 *
 * @returns {quat} a new quaternion
 */quat.create = function(){var out=new glMatrix.ARRAY_TYPE(4);out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Sets a quaternion to represent the shortest rotation from one
 * vector to another.
 *
 * Both vectors are assumed to be unit length.
 *
 * @param {quat} out the receiving quaternion.
 * @param {vec3} a the initial vector
 * @param {vec3} b the destination vector
 * @returns {quat} out
 */quat.rotationTo = (function(){var tmpvec3=vec3.create();var xUnitVec3=vec3.fromValues(1,0,0);var yUnitVec3=vec3.fromValues(0,1,0);return function(out,a,b){var dot=vec3.dot(a,b);if(dot < -0.999999){vec3.cross(tmpvec3,xUnitVec3,a);if(vec3.length(tmpvec3) < 0.000001)vec3.cross(tmpvec3,yUnitVec3,a);vec3.normalize(tmpvec3,tmpvec3);quat.setAxisAngle(out,tmpvec3,Math.PI);return out;}else if(dot > 0.999999){out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 1;return out;}else {vec3.cross(tmpvec3,a,b);out[0] = tmpvec3[0];out[1] = tmpvec3[1];out[2] = tmpvec3[2];out[3] = 1 + dot;return quat.normalize(out,out);}};})(); /**
 * Sets the specified quaternion with values corresponding to the given
 * axes. Each axis is a vec3 and is expected to be unit length and
 * perpendicular to all other specified axes.
 *
 * @param {vec3} view  the vector representing the viewing direction
 * @param {vec3} right the vector representing the local "right" direction
 * @param {vec3} up    the vector representing the local "up" direction
 * @returns {quat} out
 */quat.setAxes = (function(){var matr=mat3.create();return function(out,view,right,up){matr[0] = right[0];matr[3] = right[1];matr[6] = right[2];matr[1] = up[0];matr[4] = up[1];matr[7] = up[2];matr[2] = -view[0];matr[5] = -view[1];matr[8] = -view[2];return quat.normalize(out,quat.fromMat3(out,matr));};})(); /**
 * Creates a new quat initialized with values from an existing quaternion
 *
 * @param {quat} a quaternion to clone
 * @returns {quat} a new quaternion
 * @function
 */quat.clone = vec4.clone; /**
 * Creates a new quat initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} a new quaternion
 * @function
 */quat.fromValues = vec4.fromValues; /**
 * Copy the values from one quat to another
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the source quaternion
 * @returns {quat} out
 * @function
 */quat.copy = vec4.copy; /**
 * Set the components of a quat to the given values
 *
 * @param {quat} out the receiving quaternion
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {quat} out
 * @function
 */quat.set = vec4.set; /**
 * Set a quat to the identity quaternion
 *
 * @param {quat} out the receiving quaternion
 * @returns {quat} out
 */quat.identity = function(out){out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 1;return out;}; /**
 * Sets a quat from the given angle and rotation axis,
 * then returns it.
 *
 * @param {quat} out the receiving quaternion
 * @param {vec3} axis the axis around which to rotate
 * @param {Number} rad the angle in radians
 * @returns {quat} out
 **/quat.setAxisAngle = function(out,axis,rad){rad = rad * 0.5;var s=Math.sin(rad);out[0] = s * axis[0];out[1] = s * axis[1];out[2] = s * axis[2];out[3] = Math.cos(rad);return out;}; /**
 * Adds two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 * @function
 */quat.add = vec4.add; /**
 * Multiplies two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {quat} out
 */quat.multiply = function(out,a,b){var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];out[0] = ax * bw + aw * bx + ay * bz - az * by;out[1] = ay * bw + aw * by + az * bx - ax * bz;out[2] = az * bw + aw * bz + ax * by - ay * bx;out[3] = aw * bw - ax * bx - ay * by - az * bz;return out;}; /**
 * Alias for {@link quat.multiply}
 * @function
 */quat.mul = quat.multiply; /**
 * Scales a quat by a scalar number
 *
 * @param {quat} out the receiving vector
 * @param {quat} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {quat} out
 * @function
 */quat.scale = vec4.scale; /**
 * Rotates a quaternion by the given angle about the X axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat.rotateX = function(out,a,rad){rad *= 0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=Math.sin(rad),bw=Math.cos(rad);out[0] = ax * bw + aw * bx;out[1] = ay * bw + az * bx;out[2] = az * bw - ay * bx;out[3] = aw * bw - ax * bx;return out;}; /**
 * Rotates a quaternion by the given angle about the Y axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat.rotateY = function(out,a,rad){rad *= 0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],by=Math.sin(rad),bw=Math.cos(rad);out[0] = ax * bw - az * by;out[1] = ay * bw + aw * by;out[2] = az * bw + ax * by;out[3] = aw * bw - ay * by;return out;}; /**
 * Rotates a quaternion by the given angle about the Z axis
 *
 * @param {quat} out quat receiving operation result
 * @param {quat} a quat to rotate
 * @param {number} rad angle (in radians) to rotate
 * @returns {quat} out
 */quat.rotateZ = function(out,a,rad){rad *= 0.5;var ax=a[0],ay=a[1],az=a[2],aw=a[3],bz=Math.sin(rad),bw=Math.cos(rad);out[0] = ax * bw + ay * bz;out[1] = ay * bw - ax * bz;out[2] = az * bw + aw * bz;out[3] = aw * bw - az * bz;return out;}; /**
 * Calculates the W component of a quat from the X, Y, and Z components.
 * Assumes that quaternion is 1 unit in length.
 * Any existing W component will be ignored.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate W component of
 * @returns {quat} out
 */quat.calculateW = function(out,a){var x=a[0],y=a[1],z=a[2];out[0] = x;out[1] = y;out[2] = z;out[3] = Math.sqrt(Math.abs(1.0 - x * x - y * y - z * z));return out;}; /**
 * Calculates the dot product of two quat's
 *
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @returns {Number} dot product of a and b
 * @function
 */quat.dot = vec4.dot; /**
 * Performs a linear interpolation between two quat's
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 * @function
 */quat.lerp = vec4.lerp; /**
 * Performs a spherical linear interpolation between two quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {quat} out
 */quat.slerp = function(out,a,b,t){ // benchmarks:
//    http://jsperf.com/quaternion-slerp-implementations
var ax=a[0],ay=a[1],az=a[2],aw=a[3],bx=b[0],by=b[1],bz=b[2],bw=b[3];var omega,cosom,sinom,scale0,scale1; // calc cosine
cosom = ax * bx + ay * by + az * bz + aw * bw; // adjust signs (if necessary)
if(cosom < 0.0){cosom = -cosom;bx = -bx;by = -by;bz = -bz;bw = -bw;} // calculate coefficients
if(1.0 - cosom > 0.000001){ // standard case (slerp)
omega = Math.acos(cosom);sinom = Math.sin(omega);scale0 = Math.sin((1.0 - t) * omega) / sinom;scale1 = Math.sin(t * omega) / sinom;}else { // "from" and "to" quaternions are very close 
//  ... so we can do a linear interpolation
scale0 = 1.0 - t;scale1 = t;} // calculate final values
out[0] = scale0 * ax + scale1 * bx;out[1] = scale0 * ay + scale1 * by;out[2] = scale0 * az + scale1 * bz;out[3] = scale0 * aw + scale1 * bw;return out;}; /**
 * Performs a spherical linear interpolation with two control points
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a the first operand
 * @param {quat} b the second operand
 * @param {quat} c the third operand
 * @param {quat} d the fourth operand
 * @param {Number} t interpolation amount
 * @returns {quat} out
 */quat.sqlerp = (function(){var temp1=quat.create();var temp2=quat.create();return function(out,a,b,c,d,t){quat.slerp(temp1,a,d,t);quat.slerp(temp2,b,c,t);quat.slerp(out,temp1,temp2,2 * t * (1 - t));return out;};})(); /**
 * Calculates the inverse of a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate inverse of
 * @returns {quat} out
 */quat.invert = function(out,a){var a0=a[0],a1=a[1],a2=a[2],a3=a[3],dot=a0 * a0 + a1 * a1 + a2 * a2 + a3 * a3,invDot=dot?1.0 / dot:0; // TODO: Would be faster to return [0,0,0,0] immediately if dot == 0
out[0] = -a0 * invDot;out[1] = -a1 * invDot;out[2] = -a2 * invDot;out[3] = a3 * invDot;return out;}; /**
 * Calculates the conjugate of a quat
 * If the quaternion is normalized, this function is faster than quat.inverse and produces the same result.
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quat to calculate conjugate of
 * @returns {quat} out
 */quat.conjugate = function(out,a){out[0] = -a[0];out[1] = -a[1];out[2] = -a[2];out[3] = a[3];return out;}; /**
 * Calculates the length of a quat
 *
 * @param {quat} a vector to calculate length of
 * @returns {Number} length of a
 * @function
 */quat.length = vec4.length; /**
 * Alias for {@link quat.length}
 * @function
 */quat.len = quat.length; /**
 * Calculates the squared length of a quat
 *
 * @param {quat} a vector to calculate squared length of
 * @returns {Number} squared length of a
 * @function
 */quat.squaredLength = vec4.squaredLength; /**
 * Alias for {@link quat.squaredLength}
 * @function
 */quat.sqrLen = quat.squaredLength; /**
 * Normalize a quat
 *
 * @param {quat} out the receiving quaternion
 * @param {quat} a quaternion to normalize
 * @returns {quat} out
 * @function
 */quat.normalize = vec4.normalize; /**
 * Creates a quaternion from the given 3x3 rotation matrix.
 *
 * NOTE: The resultant quaternion is not normalized, so you should be sure
 * to renormalize the quaternion yourself where necessary.
 *
 * @param {quat} out the receiving quaternion
 * @param {mat3} m rotation matrix
 * @returns {quat} out
 * @function
 */quat.fromMat3 = function(out,m){ // Algorithm in Ken Shoemake's article in 1987 SIGGRAPH course notes
// article "Quaternion Calculus and Fast Animation".
var fTrace=m[0] + m[4] + m[8];var fRoot;if(fTrace > 0.0){ // |w| > 1/2, may as well choose w > 1/2
fRoot = Math.sqrt(fTrace + 1.0); // 2w
out[3] = 0.5 * fRoot;fRoot = 0.5 / fRoot; // 1/(4w)
out[0] = (m[5] - m[7]) * fRoot;out[1] = (m[6] - m[2]) * fRoot;out[2] = (m[1] - m[3]) * fRoot;}else { // |w| <= 1/2
var i=0;if(m[4] > m[0])i = 1;if(m[8] > m[i * 3 + i])i = 2;var j=(i + 1) % 3;var k=(i + 2) % 3;fRoot = Math.sqrt(m[i * 3 + i] - m[j * 3 + j] - m[k * 3 + k] + 1.0);out[i] = 0.5 * fRoot;fRoot = 0.5 / fRoot;out[3] = (m[j * 3 + k] - m[k * 3 + j]) * fRoot;out[j] = (m[j * 3 + i] + m[i * 3 + j]) * fRoot;out[k] = (m[k * 3 + i] + m[i * 3 + k]) * fRoot;}return out;}; /**
 * Returns a string representation of a quatenion
 *
 * @param {quat} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */quat.str = function(a){return 'quat(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';};module.exports = quat;},{"./common.js":2,"./mat3.js":5,"./vec3.js":9,"./vec4.js":10}],8:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 2 Dimensional Vector
 * @name vec2
 */var vec2={}; /**
 * Creates a new, empty vec2
 *
 * @returns {vec2} a new 2D vector
 */vec2.create = function(){var out=new glMatrix.ARRAY_TYPE(2);out[0] = 0;out[1] = 0;return out;}; /**
 * Creates a new vec2 initialized with values from an existing vector
 *
 * @param {vec2} a vector to clone
 * @returns {vec2} a new 2D vector
 */vec2.clone = function(a){var out=new glMatrix.ARRAY_TYPE(2);out[0] = a[0];out[1] = a[1];return out;}; /**
 * Creates a new vec2 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} a new 2D vector
 */vec2.fromValues = function(x,y){var out=new glMatrix.ARRAY_TYPE(2);out[0] = x;out[1] = y;return out;}; /**
 * Copy the values from one vec2 to another
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the source vector
 * @returns {vec2} out
 */vec2.copy = function(out,a){out[0] = a[0];out[1] = a[1];return out;}; /**
 * Set the components of a vec2 to the given values
 *
 * @param {vec2} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @returns {vec2} out
 */vec2.set = function(out,x,y){out[0] = x;out[1] = y;return out;}; /**
 * Adds two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.add = function(out,a,b){out[0] = a[0] + b[0];out[1] = a[1] + b[1];return out;}; /**
 * Subtracts vector b from vector a
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.subtract = function(out,a,b){out[0] = a[0] - b[0];out[1] = a[1] - b[1];return out;}; /**
 * Alias for {@link vec2.subtract}
 * @function
 */vec2.sub = vec2.subtract; /**
 * Multiplies two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.multiply = function(out,a,b){out[0] = a[0] * b[0];out[1] = a[1] * b[1];return out;}; /**
 * Alias for {@link vec2.multiply}
 * @function
 */vec2.mul = vec2.multiply; /**
 * Divides two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.divide = function(out,a,b){out[0] = a[0] / b[0];out[1] = a[1] / b[1];return out;}; /**
 * Alias for {@link vec2.divide}
 * @function
 */vec2.div = vec2.divide; /**
 * Returns the minimum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.min = function(out,a,b){out[0] = Math.min(a[0],b[0]);out[1] = Math.min(a[1],b[1]);return out;}; /**
 * Returns the maximum of two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec2} out
 */vec2.max = function(out,a,b){out[0] = Math.max(a[0],b[0]);out[1] = Math.max(a[1],b[1]);return out;}; /**
 * Scales a vec2 by a scalar number
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec2} out
 */vec2.scale = function(out,a,b){out[0] = a[0] * b;out[1] = a[1] * b;return out;}; /**
 * Adds two vec2's after scaling the second operand by a scalar value
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec2} out
 */vec2.scaleAndAdd = function(out,a,b,scale){out[0] = a[0] + b[0] * scale;out[1] = a[1] + b[1] * scale;return out;}; /**
 * Calculates the euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} distance between a and b
 */vec2.distance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1];return Math.sqrt(x * x + y * y);}; /**
 * Alias for {@link vec2.distance}
 * @function
 */vec2.dist = vec2.distance; /**
 * Calculates the squared euclidian distance between two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} squared distance between a and b
 */vec2.squaredDistance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1];return x * x + y * y;}; /**
 * Alias for {@link vec2.squaredDistance}
 * @function
 */vec2.sqrDist = vec2.squaredDistance; /**
 * Calculates the length of a vec2
 *
 * @param {vec2} a vector to calculate length of
 * @returns {Number} length of a
 */vec2.length = function(a){var x=a[0],y=a[1];return Math.sqrt(x * x + y * y);}; /**
 * Alias for {@link vec2.length}
 * @function
 */vec2.len = vec2.length; /**
 * Calculates the squared length of a vec2
 *
 * @param {vec2} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec2.squaredLength = function(a){var x=a[0],y=a[1];return x * x + y * y;}; /**
 * Alias for {@link vec2.squaredLength}
 * @function
 */vec2.sqrLen = vec2.squaredLength; /**
 * Negates the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to negate
 * @returns {vec2} out
 */vec2.negate = function(out,a){out[0] = -a[0];out[1] = -a[1];return out;}; /**
 * Returns the inverse of the components of a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to invert
 * @returns {vec2} out
 */vec2.inverse = function(out,a){out[0] = 1.0 / a[0];out[1] = 1.0 / a[1];return out;}; /**
 * Normalize a vec2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a vector to normalize
 * @returns {vec2} out
 */vec2.normalize = function(out,a){var x=a[0],y=a[1];var len=x * x + y * y;if(len > 0){ //TODO: evaluate use of glm_invsqrt here?
len = 1 / Math.sqrt(len);out[0] = a[0] * len;out[1] = a[1] * len;}return out;}; /**
 * Calculates the dot product of two vec2's
 *
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {Number} dot product of a and b
 */vec2.dot = function(a,b){return a[0] * b[0] + a[1] * b[1];}; /**
 * Computes the cross product of two vec2's
 * Note that the cross product must by definition produce a 3D vector
 *
 * @param {vec3} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @returns {vec3} out
 */vec2.cross = function(out,a,b){var z=a[0] * b[1] - a[1] * b[0];out[0] = out[1] = 0;out[2] = z;return out;}; /**
 * Performs a linear interpolation between two vec2's
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the first operand
 * @param {vec2} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec2} out
 */vec2.lerp = function(out,a,b,t){var ax=a[0],ay=a[1];out[0] = ax + t * (b[0] - ax);out[1] = ay + t * (b[1] - ay);return out;}; /**
 * Generates a random vector with the given scale
 *
 * @param {vec2} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec2} out
 */vec2.random = function(out,scale){scale = scale || 1.0;var r=glMatrix.RANDOM() * 2.0 * Math.PI;out[0] = Math.cos(r) * scale;out[1] = Math.sin(r) * scale;return out;}; /**
 * Transforms the vec2 with a mat2
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat2 = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[2] * y;out[1] = m[1] * x + m[3] * y;return out;}; /**
 * Transforms the vec2 with a mat2d
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat2d} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat2d = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[2] * y + m[4];out[1] = m[1] * x + m[3] * y + m[5];return out;}; /**
 * Transforms the vec2 with a mat3
 * 3rd vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat3} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat3 = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[3] * y + m[6];out[1] = m[1] * x + m[4] * y + m[7];return out;}; /**
 * Transforms the vec2 with a mat4
 * 3rd vector component is implicitly '0'
 * 4th vector component is implicitly '1'
 *
 * @param {vec2} out the receiving vector
 * @param {vec2} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec2} out
 */vec2.transformMat4 = function(out,a,m){var x=a[0],y=a[1];out[0] = m[0] * x + m[4] * y + m[12];out[1] = m[1] * x + m[5] * y + m[13];return out;}; /**
 * Perform some operation over an array of vec2s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec2. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec2s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */vec2.forEach = (function(){var vec=vec2.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride = 2;}if(!offset){offset = 0;}if(count){l = Math.min(count * stride + offset,a.length);}else {l = a.length;}for(i = offset;i < l;i += stride) {vec[0] = a[i];vec[1] = a[i + 1];fn(vec,vec,arg);a[i] = vec[0];a[i + 1] = vec[1];}return a;};})(); /**
 * Returns a string representation of a vector
 *
 * @param {vec2} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */vec2.str = function(a){return 'vec2(' + a[0] + ', ' + a[1] + ')';};module.exports = vec2;},{"./common.js":2}],9:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 3 Dimensional Vector
 * @name vec3
 */var vec3={}; /**
 * Creates a new, empty vec3
 *
 * @returns {vec3} a new 3D vector
 */vec3.create = function(){var out=new glMatrix.ARRAY_TYPE(3);out[0] = 0;out[1] = 0;out[2] = 0;return out;}; /**
 * Creates a new vec3 initialized with values from an existing vector
 *
 * @param {vec3} a vector to clone
 * @returns {vec3} a new 3D vector
 */vec3.clone = function(a){var out=new glMatrix.ARRAY_TYPE(3);out[0] = a[0];out[1] = a[1];out[2] = a[2];return out;}; /**
 * Creates a new vec3 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} a new 3D vector
 */vec3.fromValues = function(x,y,z){var out=new glMatrix.ARRAY_TYPE(3);out[0] = x;out[1] = y;out[2] = z;return out;}; /**
 * Copy the values from one vec3 to another
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the source vector
 * @returns {vec3} out
 */vec3.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];return out;}; /**
 * Set the components of a vec3 to the given values
 *
 * @param {vec3} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @returns {vec3} out
 */vec3.set = function(out,x,y,z){out[0] = x;out[1] = y;out[2] = z;return out;}; /**
 * Adds two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.add = function(out,a,b){out[0] = a[0] + b[0];out[1] = a[1] + b[1];out[2] = a[2] + b[2];return out;}; /**
 * Subtracts vector b from vector a
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.subtract = function(out,a,b){out[0] = a[0] - b[0];out[1] = a[1] - b[1];out[2] = a[2] - b[2];return out;}; /**
 * Alias for {@link vec3.subtract}
 * @function
 */vec3.sub = vec3.subtract; /**
 * Multiplies two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.multiply = function(out,a,b){out[0] = a[0] * b[0];out[1] = a[1] * b[1];out[2] = a[2] * b[2];return out;}; /**
 * Alias for {@link vec3.multiply}
 * @function
 */vec3.mul = vec3.multiply; /**
 * Divides two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.divide = function(out,a,b){out[0] = a[0] / b[0];out[1] = a[1] / b[1];out[2] = a[2] / b[2];return out;}; /**
 * Alias for {@link vec3.divide}
 * @function
 */vec3.div = vec3.divide; /**
 * Returns the minimum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.min = function(out,a,b){out[0] = Math.min(a[0],b[0]);out[1] = Math.min(a[1],b[1]);out[2] = Math.min(a[2],b[2]);return out;}; /**
 * Returns the maximum of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.max = function(out,a,b){out[0] = Math.max(a[0],b[0]);out[1] = Math.max(a[1],b[1]);out[2] = Math.max(a[2],b[2]);return out;}; /**
 * Scales a vec3 by a scalar number
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec3} out
 */vec3.scale = function(out,a,b){out[0] = a[0] * b;out[1] = a[1] * b;out[2] = a[2] * b;return out;}; /**
 * Adds two vec3's after scaling the second operand by a scalar value
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec3} out
 */vec3.scaleAndAdd = function(out,a,b,scale){out[0] = a[0] + b[0] * scale;out[1] = a[1] + b[1] * scale;out[2] = a[2] + b[2] * scale;return out;}; /**
 * Calculates the euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} distance between a and b
 */vec3.distance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2];return Math.sqrt(x * x + y * y + z * z);}; /**
 * Alias for {@link vec3.distance}
 * @function
 */vec3.dist = vec3.distance; /**
 * Calculates the squared euclidian distance between two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} squared distance between a and b
 */vec3.squaredDistance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2];return x * x + y * y + z * z;}; /**
 * Alias for {@link vec3.squaredDistance}
 * @function
 */vec3.sqrDist = vec3.squaredDistance; /**
 * Calculates the length of a vec3
 *
 * @param {vec3} a vector to calculate length of
 * @returns {Number} length of a
 */vec3.length = function(a){var x=a[0],y=a[1],z=a[2];return Math.sqrt(x * x + y * y + z * z);}; /**
 * Alias for {@link vec3.length}
 * @function
 */vec3.len = vec3.length; /**
 * Calculates the squared length of a vec3
 *
 * @param {vec3} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec3.squaredLength = function(a){var x=a[0],y=a[1],z=a[2];return x * x + y * y + z * z;}; /**
 * Alias for {@link vec3.squaredLength}
 * @function
 */vec3.sqrLen = vec3.squaredLength; /**
 * Negates the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to negate
 * @returns {vec3} out
 */vec3.negate = function(out,a){out[0] = -a[0];out[1] = -a[1];out[2] = -a[2];return out;}; /**
 * Returns the inverse of the components of a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to invert
 * @returns {vec3} out
 */vec3.inverse = function(out,a){out[0] = 1.0 / a[0];out[1] = 1.0 / a[1];out[2] = 1.0 / a[2];return out;}; /**
 * Normalize a vec3
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a vector to normalize
 * @returns {vec3} out
 */vec3.normalize = function(out,a){var x=a[0],y=a[1],z=a[2];var len=x * x + y * y + z * z;if(len > 0){ //TODO: evaluate use of glm_invsqrt here?
len = 1 / Math.sqrt(len);out[0] = a[0] * len;out[1] = a[1] * len;out[2] = a[2] * len;}return out;}; /**
 * Calculates the dot product of two vec3's
 *
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {Number} dot product of a and b
 */vec3.dot = function(a,b){return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];}; /**
 * Computes the cross product of two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @returns {vec3} out
 */vec3.cross = function(out,a,b){var ax=a[0],ay=a[1],az=a[2],bx=b[0],by=b[1],bz=b[2];out[0] = ay * bz - az * by;out[1] = az * bx - ax * bz;out[2] = ax * by - ay * bx;return out;}; /**
 * Performs a linear interpolation between two vec3's
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3.lerp = function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2];out[0] = ax + t * (b[0] - ax);out[1] = ay + t * (b[1] - ay);out[2] = az + t * (b[2] - az);return out;}; /**
 * Performs a hermite interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3.hermite = function(out,a,b,c,d,t){var factorTimes2=t * t,factor1=factorTimes2 * (2 * t - 3) + 1,factor2=factorTimes2 * (t - 2) + t,factor3=factorTimes2 * (t - 1),factor4=factorTimes2 * (3 - 2 * t);out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;return out;}; /**
 * Performs a bezier interpolation with two control points
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the first operand
 * @param {vec3} b the second operand
 * @param {vec3} c the third operand
 * @param {vec3} d the fourth operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec3} out
 */vec3.bezier = function(out,a,b,c,d,t){var inverseFactor=1 - t,inverseFactorTimesTwo=inverseFactor * inverseFactor,factorTimes2=t * t,factor1=inverseFactorTimesTwo * inverseFactor,factor2=3 * t * inverseFactorTimesTwo,factor3=3 * factorTimes2 * inverseFactor,factor4=factorTimes2 * t;out[0] = a[0] * factor1 + b[0] * factor2 + c[0] * factor3 + d[0] * factor4;out[1] = a[1] * factor1 + b[1] * factor2 + c[1] * factor3 + d[1] * factor4;out[2] = a[2] * factor1 + b[2] * factor2 + c[2] * factor3 + d[2] * factor4;return out;}; /**
 * Generates a random vector with the given scale
 *
 * @param {vec3} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec3} out
 */vec3.random = function(out,scale){scale = scale || 1.0;var r=glMatrix.RANDOM() * 2.0 * Math.PI;var z=glMatrix.RANDOM() * 2.0 - 1.0;var zScale=Math.sqrt(1.0 - z * z) * scale;out[0] = Math.cos(r) * zScale;out[1] = Math.sin(r) * zScale;out[2] = z * scale;return out;}; /**
 * Transforms the vec3 with a mat4.
 * 4th vector component is implicitly '1'
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec3} out
 */vec3.transformMat4 = function(out,a,m){var x=a[0],y=a[1],z=a[2],w=m[3] * x + m[7] * y + m[11] * z + m[15];w = w || 1.0;out[0] = (m[0] * x + m[4] * y + m[8] * z + m[12]) / w;out[1] = (m[1] * x + m[5] * y + m[9] * z + m[13]) / w;out[2] = (m[2] * x + m[6] * y + m[10] * z + m[14]) / w;return out;}; /**
 * Transforms the vec3 with a mat3.
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {mat4} m the 3x3 matrix to transform with
 * @returns {vec3} out
 */vec3.transformMat3 = function(out,a,m){var x=a[0],y=a[1],z=a[2];out[0] = x * m[0] + y * m[3] + z * m[6];out[1] = x * m[1] + y * m[4] + z * m[7];out[2] = x * m[2] + y * m[5] + z * m[8];return out;}; /**
 * Transforms the vec3 with a quat
 *
 * @param {vec3} out the receiving vector
 * @param {vec3} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec3} out
 */vec3.transformQuat = function(out,a,q){ // benchmarks: http://jsperf.com/quaternion-transform-vec3-implementations
var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3], // calculate quat * vec
ix=qw * x + qy * z - qz * y,iy=qw * y + qz * x - qx * z,iz=qw * z + qx * y - qy * x,iw=-qx * x - qy * y - qz * z; // calculate result * inverse quat
out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;return out;}; /**
 * Rotate a 3D vector around the x-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3.rotateX = function(out,a,b,c){var p=[],r=[]; //Translate point to the origin
p[0] = a[0] - b[0];p[1] = a[1] - b[1];p[2] = a[2] - b[2]; //perform rotation
r[0] = p[0];r[1] = p[1] * Math.cos(c) - p[2] * Math.sin(c);r[2] = p[1] * Math.sin(c) + p[2] * Math.cos(c); //translate to correct position
out[0] = r[0] + b[0];out[1] = r[1] + b[1];out[2] = r[2] + b[2];return out;}; /**
 * Rotate a 3D vector around the y-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3.rotateY = function(out,a,b,c){var p=[],r=[]; //Translate point to the origin
p[0] = a[0] - b[0];p[1] = a[1] - b[1];p[2] = a[2] - b[2]; //perform rotation
r[0] = p[2] * Math.sin(c) + p[0] * Math.cos(c);r[1] = p[1];r[2] = p[2] * Math.cos(c) - p[0] * Math.sin(c); //translate to correct position
out[0] = r[0] + b[0];out[1] = r[1] + b[1];out[2] = r[2] + b[2];return out;}; /**
 * Rotate a 3D vector around the z-axis
 * @param {vec3} out The receiving vec3
 * @param {vec3} a The vec3 point to rotate
 * @param {vec3} b The origin of the rotation
 * @param {Number} c The angle of rotation
 * @returns {vec3} out
 */vec3.rotateZ = function(out,a,b,c){var p=[],r=[]; //Translate point to the origin
p[0] = a[0] - b[0];p[1] = a[1] - b[1];p[2] = a[2] - b[2]; //perform rotation
r[0] = p[0] * Math.cos(c) - p[1] * Math.sin(c);r[1] = p[0] * Math.sin(c) + p[1] * Math.cos(c);r[2] = p[2]; //translate to correct position
out[0] = r[0] + b[0];out[1] = r[1] + b[1];out[2] = r[2] + b[2];return out;}; /**
 * Perform some operation over an array of vec3s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec3. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec3s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */vec3.forEach = (function(){var vec=vec3.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride = 3;}if(!offset){offset = 0;}if(count){l = Math.min(count * stride + offset,a.length);}else {l = a.length;}for(i = offset;i < l;i += stride) {vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];fn(vec,vec,arg);a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];}return a;};})(); /**
 * Get the angle between two 3D vectors
 * @param {vec3} a The first operand
 * @param {vec3} b The second operand
 * @returns {Number} The angle in radians
 */vec3.angle = function(a,b){var tempA=vec3.fromValues(a[0],a[1],a[2]);var tempB=vec3.fromValues(b[0],b[1],b[2]);vec3.normalize(tempA,tempA);vec3.normalize(tempB,tempB);var cosine=vec3.dot(tempA,tempB);if(cosine > 1.0){return 0;}else {return Math.acos(cosine);}}; /**
 * Returns a string representation of a vector
 *
 * @param {vec3} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */vec3.str = function(a){return 'vec3(' + a[0] + ', ' + a[1] + ', ' + a[2] + ')';};module.exports = vec3;},{"./common.js":2}],10:[function(require,module,exports){ /* Copyright (c) 2015, Brandon Jones, Colin MacKenzie IV.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE. */var glMatrix=require("./common.js"); /**
 * @class 4 Dimensional Vector
 * @name vec4
 */var vec4={}; /**
 * Creates a new, empty vec4
 *
 * @returns {vec4} a new 4D vector
 */vec4.create = function(){var out=new glMatrix.ARRAY_TYPE(4);out[0] = 0;out[1] = 0;out[2] = 0;out[3] = 0;return out;}; /**
 * Creates a new vec4 initialized with values from an existing vector
 *
 * @param {vec4} a vector to clone
 * @returns {vec4} a new 4D vector
 */vec4.clone = function(a){var out=new glMatrix.ARRAY_TYPE(4);out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Creates a new vec4 initialized with the given values
 *
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} a new 4D vector
 */vec4.fromValues = function(x,y,z,w){var out=new glMatrix.ARRAY_TYPE(4);out[0] = x;out[1] = y;out[2] = z;out[3] = w;return out;}; /**
 * Copy the values from one vec4 to another
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the source vector
 * @returns {vec4} out
 */vec4.copy = function(out,a){out[0] = a[0];out[1] = a[1];out[2] = a[2];out[3] = a[3];return out;}; /**
 * Set the components of a vec4 to the given values
 *
 * @param {vec4} out the receiving vector
 * @param {Number} x X component
 * @param {Number} y Y component
 * @param {Number} z Z component
 * @param {Number} w W component
 * @returns {vec4} out
 */vec4.set = function(out,x,y,z,w){out[0] = x;out[1] = y;out[2] = z;out[3] = w;return out;}; /**
 * Adds two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.add = function(out,a,b){out[0] = a[0] + b[0];out[1] = a[1] + b[1];out[2] = a[2] + b[2];out[3] = a[3] + b[3];return out;}; /**
 * Subtracts vector b from vector a
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.subtract = function(out,a,b){out[0] = a[0] - b[0];out[1] = a[1] - b[1];out[2] = a[2] - b[2];out[3] = a[3] - b[3];return out;}; /**
 * Alias for {@link vec4.subtract}
 * @function
 */vec4.sub = vec4.subtract; /**
 * Multiplies two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.multiply = function(out,a,b){out[0] = a[0] * b[0];out[1] = a[1] * b[1];out[2] = a[2] * b[2];out[3] = a[3] * b[3];return out;}; /**
 * Alias for {@link vec4.multiply}
 * @function
 */vec4.mul = vec4.multiply; /**
 * Divides two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.divide = function(out,a,b){out[0] = a[0] / b[0];out[1] = a[1] / b[1];out[2] = a[2] / b[2];out[3] = a[3] / b[3];return out;}; /**
 * Alias for {@link vec4.divide}
 * @function
 */vec4.div = vec4.divide; /**
 * Returns the minimum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.min = function(out,a,b){out[0] = Math.min(a[0],b[0]);out[1] = Math.min(a[1],b[1]);out[2] = Math.min(a[2],b[2]);out[3] = Math.min(a[3],b[3]);return out;}; /**
 * Returns the maximum of two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {vec4} out
 */vec4.max = function(out,a,b){out[0] = Math.max(a[0],b[0]);out[1] = Math.max(a[1],b[1]);out[2] = Math.max(a[2],b[2]);out[3] = Math.max(a[3],b[3]);return out;}; /**
 * Scales a vec4 by a scalar number
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to scale
 * @param {Number} b amount to scale the vector by
 * @returns {vec4} out
 */vec4.scale = function(out,a,b){out[0] = a[0] * b;out[1] = a[1] * b;out[2] = a[2] * b;out[3] = a[3] * b;return out;}; /**
 * Adds two vec4's after scaling the second operand by a scalar value
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} scale the amount to scale b by before adding
 * @returns {vec4} out
 */vec4.scaleAndAdd = function(out,a,b,scale){out[0] = a[0] + b[0] * scale;out[1] = a[1] + b[1] * scale;out[2] = a[2] + b[2] * scale;out[3] = a[3] + b[3] * scale;return out;}; /**
 * Calculates the euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} distance between a and b
 */vec4.distance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2],w=b[3] - a[3];return Math.sqrt(x * x + y * y + z * z + w * w);}; /**
 * Alias for {@link vec4.distance}
 * @function
 */vec4.dist = vec4.distance; /**
 * Calculates the squared euclidian distance between two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} squared distance between a and b
 */vec4.squaredDistance = function(a,b){var x=b[0] - a[0],y=b[1] - a[1],z=b[2] - a[2],w=b[3] - a[3];return x * x + y * y + z * z + w * w;}; /**
 * Alias for {@link vec4.squaredDistance}
 * @function
 */vec4.sqrDist = vec4.squaredDistance; /**
 * Calculates the length of a vec4
 *
 * @param {vec4} a vector to calculate length of
 * @returns {Number} length of a
 */vec4.length = function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return Math.sqrt(x * x + y * y + z * z + w * w);}; /**
 * Alias for {@link vec4.length}
 * @function
 */vec4.len = vec4.length; /**
 * Calculates the squared length of a vec4
 *
 * @param {vec4} a vector to calculate squared length of
 * @returns {Number} squared length of a
 */vec4.squaredLength = function(a){var x=a[0],y=a[1],z=a[2],w=a[3];return x * x + y * y + z * z + w * w;}; /**
 * Alias for {@link vec4.squaredLength}
 * @function
 */vec4.sqrLen = vec4.squaredLength; /**
 * Negates the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to negate
 * @returns {vec4} out
 */vec4.negate = function(out,a){out[0] = -a[0];out[1] = -a[1];out[2] = -a[2];out[3] = -a[3];return out;}; /**
 * Returns the inverse of the components of a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to invert
 * @returns {vec4} out
 */vec4.inverse = function(out,a){out[0] = 1.0 / a[0];out[1] = 1.0 / a[1];out[2] = 1.0 / a[2];out[3] = 1.0 / a[3];return out;}; /**
 * Normalize a vec4
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a vector to normalize
 * @returns {vec4} out
 */vec4.normalize = function(out,a){var x=a[0],y=a[1],z=a[2],w=a[3];var len=x * x + y * y + z * z + w * w;if(len > 0){len = 1 / Math.sqrt(len);out[0] = x * len;out[1] = y * len;out[2] = z * len;out[3] = w * len;}return out;}; /**
 * Calculates the dot product of two vec4's
 *
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @returns {Number} dot product of a and b
 */vec4.dot = function(a,b){return a[0] * b[0] + a[1] * b[1] + a[2] * b[2] + a[3] * b[3];}; /**
 * Performs a linear interpolation between two vec4's
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the first operand
 * @param {vec4} b the second operand
 * @param {Number} t interpolation amount between the two inputs
 * @returns {vec4} out
 */vec4.lerp = function(out,a,b,t){var ax=a[0],ay=a[1],az=a[2],aw=a[3];out[0] = ax + t * (b[0] - ax);out[1] = ay + t * (b[1] - ay);out[2] = az + t * (b[2] - az);out[3] = aw + t * (b[3] - aw);return out;}; /**
 * Generates a random vector with the given scale
 *
 * @param {vec4} out the receiving vector
 * @param {Number} [scale] Length of the resulting vector. If ommitted, a unit vector will be returned
 * @returns {vec4} out
 */vec4.random = function(out,scale){scale = scale || 1.0; //TODO: This is a pretty awful way of doing this. Find something better.
out[0] = glMatrix.RANDOM();out[1] = glMatrix.RANDOM();out[2] = glMatrix.RANDOM();out[3] = glMatrix.RANDOM();vec4.normalize(out,out);vec4.scale(out,out,scale);return out;}; /**
 * Transforms the vec4 with a mat4.
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {mat4} m matrix to transform with
 * @returns {vec4} out
 */vec4.transformMat4 = function(out,a,m){var x=a[0],y=a[1],z=a[2],w=a[3];out[0] = m[0] * x + m[4] * y + m[8] * z + m[12] * w;out[1] = m[1] * x + m[5] * y + m[9] * z + m[13] * w;out[2] = m[2] * x + m[6] * y + m[10] * z + m[14] * w;out[3] = m[3] * x + m[7] * y + m[11] * z + m[15] * w;return out;}; /**
 * Transforms the vec4 with a quat
 *
 * @param {vec4} out the receiving vector
 * @param {vec4} a the vector to transform
 * @param {quat} q quaternion to transform with
 * @returns {vec4} out
 */vec4.transformQuat = function(out,a,q){var x=a[0],y=a[1],z=a[2],qx=q[0],qy=q[1],qz=q[2],qw=q[3], // calculate quat * vec
ix=qw * x + qy * z - qz * y,iy=qw * y + qz * x - qx * z,iz=qw * z + qx * y - qy * x,iw=-qx * x - qy * y - qz * z; // calculate result * inverse quat
out[0] = ix * qw + iw * -qx + iy * -qz - iz * -qy;out[1] = iy * qw + iw * -qy + iz * -qx - ix * -qz;out[2] = iz * qw + iw * -qz + ix * -qy - iy * -qx;out[3] = a[3];return out;}; /**
 * Perform some operation over an array of vec4s.
 *
 * @param {Array} a the array of vectors to iterate over
 * @param {Number} stride Number of elements between the start of each vec4. If 0 assumes tightly packed
 * @param {Number} offset Number of elements to skip at the beginning of the array
 * @param {Number} count Number of vec4s to iterate over. If 0 iterates over entire array
 * @param {Function} fn Function to call for each vector in the array
 * @param {Object} [arg] additional argument to pass to fn
 * @returns {Array} a
 * @function
 */vec4.forEach = (function(){var vec=vec4.create();return function(a,stride,offset,count,fn,arg){var i,l;if(!stride){stride = 4;}if(!offset){offset = 0;}if(count){l = Math.min(count * stride + offset,a.length);}else {l = a.length;}for(i = offset;i < l;i += stride) {vec[0] = a[i];vec[1] = a[i + 1];vec[2] = a[i + 2];vec[3] = a[i + 3];fn(vec,vec,arg);a[i] = vec[0];a[i + 1] = vec[1];a[i + 2] = vec[2];a[i + 3] = vec[3];}return a;};})(); /**
 * Returns a string representation of a vector
 *
 * @param {vec4} vec vector to represent as a string
 * @returns {String} string representation of the vector
 */vec4.str = function(a){return 'vec4(' + a[0] + ', ' + a[1] + ', ' + a[2] + ', ' + a[3] + ')';};module.exports = vec4;},{"./common.js":2}],11:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var _name='attribute';var _format='FLOAT';var _normalized=false;var _offset=0;var Attribute=(function(_Entity){_inherits(Attribute,_Entity);function Attribute(){var _ref=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref$name=_ref.name;var name=_ref$name === undefined?_name:_ref$name;var attribute=_ref.attribute;var length=_ref.length;var _ref$format=_ref.format;var format=_ref$format === undefined?_format:_ref$format;var _ref$normalized=_ref.normalized;var normalized=_ref$normalized === undefined?_normalized:_ref$normalized;var _ref$offset=_ref.offset;var offset=_ref$offset === undefined?_offset:_ref$offset;_classCallCheck(this,Attribute);_get(Object.getPrototypeOf(Attribute.prototype),"constructor",this).call(this,{name:name});this.attribute = attribute;this.location = undefined;this.length = length;this.format = format;this.normalized = normalized;this.offset = offset;this.inheritance = ['Entity','Attribute'];}_createClass(Attribute,[{key:"getByteCount",value:function getByteCount(bytes){return this.length * bytes;}},{key:"locate",value:function locate(program){return this.location = gl.getAttribLocation(program.buffer,"a_" + this.attribute);}},{key:"enable",value:function enable(program){var stride=arguments.length <= 1 || arguments[1] === undefined?0:arguments[1];var location=this.locate(program);gl.enableVertexAttribArray(location);gl.vertexAttribPointer(location,this.length,this.format,this.normalized,stride,this.offset);}},{key:"disable",value:function disable(){gl.disableVertexAttribArray(this.location);}},{key:"attribute",get:function get(){return this._attribute;},set:function set(attribute){this._attribute = attribute;}},{key:"location",get:function get(){return this._location;},set:function set(location){this._location = location;}},{key:"length",get:function get(){return this._length;},set:function set(length){this._length = length;}},{key:"format",get:function get(){return gl[this._format];},set:function set(format){this._format = format;}},{key:"normalized",get:function get(){return this._normalized;},set:function set(normalized){this._normalized = normalized;}},{key:"offset",get:function get(){return this._offset;},set:function set(offset){this._offset = offset;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Attribute;})(Entity);module.exports = Attribute;},{"./Entity":20,"./gl":49}],12:[function(require,module,exports){'use strict';var Structure=require('./Structure');var _name='bloom';var Bloom=(function(_Structure){_inherits(Bloom,_Structure);function Bloom(){var _ref2=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref2$name=_ref2.name;var name=_ref2$name === undefined?_name:_ref2$name;_classCallCheck(this,Bloom);_get(Object.getPrototypeOf(Bloom.prototype),"constructor",this).call(this,{name:name});}return Bloom;})(Structure);module.exports = Bloom;},{"./Structure":43}],13:[function(require,module,exports){'use strict';var gl=require('./gl');var glm=require('gl-matrix');var mat4=glm.mat4;var mat3=glm.mat3;var LSL=require('./utils/LSL');var Structure=require('./Structure');var axis={x:[1,0,0],y:[0,1,0],z:[0,0,1]};var radians=0.0174532925;var _name='camera';var _path='camera';var _uniforms=['mat4 projectionMatrix','mat4 modelViewMatrix','mat3 normalMatrix'];var _background=0x000000;var Camera=(function(_Structure2){_inherits(Camera,_Structure2);function Camera(){var _ref3=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref3$name=_ref3.name;var name=_ref3$name === undefined?_name:_ref3$name;var _ref3$path=_ref3.path;var path=_ref3$path === undefined?_path:_ref3$path;var _ref3$uniforms=_ref3.uniforms;var uniforms=_ref3$uniforms === undefined?_uniforms:_ref3$uniforms;var _ref3$background=_ref3.background;var background=_ref3$background === undefined?_background:_ref3$background;_classCallCheck(this,Camera);_get(Object.getPrototypeOf(Camera.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms});this.background = background;this.modelViewMatrix = mat4.create();this.projectionMatrix = mat4.create();this.normalMatrix = mat3.create();this.stack = [];this.inheritance = ['Entity','Structure','Camera'];}_createClass(Camera,[{key:"configure",value:function configure(){gl.enable(gl.CULL_FACE);gl.frontFace(gl.CCW);gl.clearColor.apply(gl,this.background.concat(1));}},{key:"bind",value:function bind(program){mat3.normalFromMat4(this.normalMatrix,this.modelViewMatrix);_get(Object.getPrototypeOf(Camera.prototype),"bind",this).call(this,program);}},{key:"save",value:function save(){var currentCamera=mat4.clone(this.modelViewMatrix);this.stack.push(currentCamera);}},{key:"restore",value:function restore(){var stack=this.stack;if(stack.length){var previousCamera=stack.pop();mat4.copy(this.modelViewMatrix,previousCamera);}}},{key:"scale",value:function scale(scaleX,scaleY,scaleZ){var modelViewMatrix=this.modelViewMatrix;mat4.scale(modelViewMatrix,modelViewMatrix,arguments);}},{key:"scaleX",value:function scaleX(scale){this.scale(scale,1,1);}},{key:"scaleY",value:function scaleY(scale){this.scale(1,scale,1);}},{key:"scaleZ",value:function scaleZ(scale){this.scale(1,1,scale);}},{key:"rotate",value:function rotate(rotation){var pivot=arguments.length <= 1 || arguments[1] === undefined?'y':arguments[1];var modelViewMatrix=this.modelViewMatrix;var radian=rotation * radians;mat4.rotate(modelViewMatrix,modelViewMatrix,radian,axis[pivot]);}},{key:"rotateX",value:function rotateX(rotation){this.rotate(rotation,'x');}},{key:"rotateY",value:function rotateY(rotation){this.rotate(rotation,'y');}},{key:"rotateZ",value:function rotateZ(rotation){this.rotate(rotation,'z');}},{key:"translate",value:function translate(translateX,translateY,translateZ){var modelViewMatrix=this.modelViewMatrix;mat4.translate(modelViewMatrix,modelViewMatrix,arguments);}},{key:"translateX",value:function translateX(translation){this.translate(translation,0,0);}},{key:"translateY",value:function translateY(translation){this.translate(0,translation,0);}},{key:"translateZ",value:function translateZ(translation){this.translate(0,0,translation);}},{key:"background",get:function get(){return this._background;},set:function set(background){this._background = LSL(background);}},{key:"modelViewMatrix",get:function get(){return this._modelViewMatrix;},set:function set(modelViewMatrix){this._modelViewMatrix = modelViewMatrix;}},{key:"projectionMatrix",get:function get(){return this._projectionMatrix;},set:function set(projectionMatrix){this._projectionMatrix = projectionMatrix;}},{key:"normalMatrix",get:function get(){return this._normalMatrix;},set:function set(normalMatrix){this._normalMatrix = normalMatrix;}},{key:"stack",get:function get(){return this._stack;},set:function set(stack){this._stack = stack;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Camera;})(Structure);module.exports = Camera;},{"./Structure":43,"./gl":49,"./utils/LSL":58,"gl-matrix":1}],14:[function(require,module,exports){'use strict';var Entity=require('./Entity');var _name='canvas';var _selector='canvas';var _width=window.innerWidth;var _height=window.innerHeight;var _dpi=window.devicePixelRatio;var Canvas=(function(_Entity2){_inherits(Canvas,_Entity2);function Canvas(){var _ref4=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref4$name=_ref4.name;var name=_ref4$name === undefined?_name:_ref4$name;var _ref4$selector=_ref4.selector;var selector=_ref4$selector === undefined?_selector:_ref4$selector;var _ref4$width=_ref4.width;var width=_ref4$width === undefined?_width:_ref4$width;var _ref4$height=_ref4.height;var height=_ref4$height === undefined?_height:_ref4$height;var _ref4$dpi=_ref4.dpi;var dpi=_ref4$dpi === undefined?_dpi:_ref4$dpi;_classCallCheck(this,Canvas);_get(Object.getPrototypeOf(Canvas.prototype),"constructor",this).call(this,{name:name});this.canvas = undefined;this.width = width;this.height = height;this.dpi = dpi;this.gl = gl;this.inheritance = ['Entity','Canvas'];this.prime(selector);this.contextualise();}_createClass(Canvas,[{key:"prime",value:function prime(selector){var canvas=document.querySelector(selector);var width=this.width;var height=this.height;var dpi=this.dpi;canvas.setAttribute('width',width * dpi);canvas.setAttribute('height',height * dpi);canvas.style.width = width;canvas.style.height = height;this.canvas = canvas;}},{key:"contextualise",value:function contextualise(){var canvas=this.canvas;var gl=canvas.getContext('webgl') || canvas.getContext('experimental-webgl');this.gl = gl;}},{key:"canvas",get:function get(){return this._canvas;},set:function set(canvas){this._canvas = canvas;}},{key:"width",get:function get(){return this._width;},set:function set(width){this._width = width;}},{key:"height",get:function get(){return this._height;},set:function set(height){this._height = height;}},{key:"dpi",get:function get(){return this._dpi;},set:function set(dpi){this._dpi = dpi;}},{key:"gl",get:function get(){return this._gl;},set:function set(gl){this._gl = gl;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Canvas;})(Entity);module.exports = Canvas;},{"./Entity":20}],15:[function(require,module,exports){'use strict';var gl=require('./gl');var Texture=require('./Texture');var _name='data.texture';var _image=null;var _length=4;var DataTexture=(function(_Texture){_inherits(DataTexture,_Texture);function DataTexture(){var _ref5=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref5$name=_ref5.name;var name=_ref5$name === undefined?_name:_ref5$name;var _ref5$image=_ref5.image;var image=_ref5$image === undefined?_image:_ref5$image;var lod=_ref5.lod;var width=_ref5.width;var height=_ref5.height;var _ref5$length=_ref5.length;var length=_ref5$length === undefined?_length:_ref5$length;var components=_ref5.components;var format=_ref5.format;var magnification=_ref5.magnification;var minification=_ref5.minification;var S=_ref5.S;var T=_ref5.T;_classCallCheck(this,DataTexture);_get(Object.getPrototypeOf(DataTexture.prototype),"constructor",this).call(this,{name:name,lod:lod,components:components,format:format,magnification:magnification,minification:minification,S:S,T:T});this.image = image;this.width = width;this.height = height;this.length = length;this.inheritance = ['Entity','Texture','DataTexture'];this.autofill();this.configure();}_createClass(DataTexture,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(DataTexture.prototype),"configure",this).call(this);var components=this.components;var image=this.image;if(image instanceof Array){gl.pixelStorei(gl.PACK_ALIGNMENT,1);gl.pixelStorei(gl.UNPACK_ALIGNMENT,1);gl.getExtension('OES_texture_float');image = new Float32Array(image);}gl.texImage2D(gl.TEXTURE_2D,this.lod,components,this.width,this.height,0,components,this.format,image);this.unbind();}},{key:"autofill",value:function autofill(){var image=this.image;if(image instanceof Array){var count=this.width * this.height * this.length - image.length;var nixels=Array.from(new Array(count),function(){return -1;});this.image = image.concat(nixels);}}},{key:"image",get:function get(){return this._image;},set:function set(image){this._image = image;}},{key:"width",get:function get(){return this._width;},set:function set(width){this._width = width;}},{key:"height",get:function get(){return this._height;},set:function set(height){this._height = height;}},{key:"length",get:function get(){return this._length;},set:function set(length){this._length = length;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return DataTexture;})(Texture);module.exports = DataTexture;},{"./Texture":44,"./gl":49}],16:[function(require,module,exports){'use strict';var gl=require('./gl');var Framebuffer=require('./Framebuffer');var _name='deferred.framebuffer';var DeferredFramebuffer=(function(_Framebuffer){_inherits(DeferredFramebuffer,_Framebuffer);function DeferredFramebuffer(){var _ref6=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref6$name=_ref6.name;var name=_ref6$name === undefined?_name:_ref6$name;var colorAttachment=_ref6.colorAttachment;var depthAttachment=_ref6.depthAttachment;var flushable=_ref6.flushable;_classCallCheck(this,DeferredFramebuffer);_get(Object.getPrototypeOf(DeferredFramebuffer.prototype),"constructor",this).call(this,{name:name,flushable:flushable});this.buffer = gl.createFramebuffer();this.colorAttachment = colorAttachment;this.depthAttachment = depthAttachment;this.inheritance = ['Entity','Framebuffer','DeferredFramebuffer'];this.configure();}_createClass(DeferredFramebuffer,[{key:"configure",value:function configure(){this.bind(false);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.colorAttachment.buffer,0);gl.framebufferRenderbuffer(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.RENDERBUFFER,this.depthAttachment.buffer);this.check();this.unbind();}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"colorAttachment",get:function get(){return this._colorAttachment;},set:function set(colorAttachment){this._colorAttachment = colorAttachment;}},{key:"depthAttachment",get:function get(){return this._depthAttachment;},set:function set(depthAttachment){this._depthAttachment = depthAttachment;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return DeferredFramebuffer;})(Framebuffer);module.exports = DeferredFramebuffer;},{"./Framebuffer":22,"./gl":49}],17:[function(require,module,exports){'use strict';var gl=require('./gl');var Framebuffer=require('./Framebuffer');var _name='depth.framebuffer';var DepthFramebuffer=(function(_Framebuffer2){_inherits(DepthFramebuffer,_Framebuffer2);function DepthFramebuffer(){var _ref7=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref7$name=_ref7.name;var name=_ref7$name === undefined?_name:_ref7$name;var colorAttachment=_ref7.colorAttachment;var depthAttachment=_ref7.depthAttachment;var flushable=_ref7.flushable;_classCallCheck(this,DepthFramebuffer);_get(Object.getPrototypeOf(DepthFramebuffer.prototype),"constructor",this).call(this,{name:name,flushable:flushable});this.buffer = gl.createFramebuffer();this.colorAttachment = colorAttachment;this.depthAttachment = depthAttachment;this.inheritance = ['Entity','Framebuffer','DepthFramebuffer'];this.configure();}_createClass(DepthFramebuffer,[{key:"configure",value:function configure(){this.bind(false);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.COLOR_ATTACHMENT0,gl.TEXTURE_2D,this.colorAttachment.buffer,0);gl.framebufferTexture2D(gl.FRAMEBUFFER,gl.DEPTH_ATTACHMENT,gl.TEXTURE_2D,this.depthAttachment.buffer,0);this.check();this.unbind();}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"colorAttachment",get:function get(){return this._colorAttachment;},set:function set(colorAttachment){this._colorAttachment = colorAttachment;}},{key:"depthAttachment",get:function get(){return this._depthAttachment;},set:function set(depthAttachment){this._depthAttachment = depthAttachment;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return DepthFramebuffer;})(Framebuffer);module.exports = DepthFramebuffer;},{"./Framebuffer":22,"./gl":49}],18:[function(require,module,exports){'use strict';var gl=require('./gl');var Texture=require('./Texture');var _name='depth.texture';var DepthTexture=(function(_Texture2){_inherits(DepthTexture,_Texture2);function DepthTexture(){var _ref8=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref8$name=_ref8.name;var name=_ref8$name === undefined?_name:_ref8$name;var width=_ref8.width;var height=_ref8.height;_classCallCheck(this,DepthTexture);_get(Object.getPrototypeOf(DepthTexture.prototype),"constructor",this).call(this,{name:name});this.buffer = gl.createTexture();this.width = width;this.height = height;this.inheritance = ['Entity','Texture','DepthTexture'];this.configure();}_createClass(DepthTexture,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(DepthTexture.prototype),"configure",this).call(this);gl.getExtension('WEBGL_depth_texture');gl.texImage2D(gl.TEXTURE_2D,0,gl.DEPTH_COMPONENT,this.width,this.height,0,gl.DEPTH_COMPONENT,gl.UNSIGNED_INT,null);this.unbind();}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"width",get:function get(){return this._width;},set:function set(width){this._width = width;}},{key:"height",get:function get(){return this._height;},set:function set(height){this._height = height;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return DepthTexture;})(Texture);module.exports = DepthTexture;},{"./Texture":44,"./gl":49}],19:[function(require,module,exports){'use strict';var Light=require('./Light');var _name='directional.light';var _uniforms=['vec3 ambient','vec3 diffuse','vec3 specular','f intensity','vec3 location','vec3 direction','i type'];var _direction=[0,0,0];var DirectionalLight=(function(_Light){_inherits(DirectionalLight,_Light);function DirectionalLight(){var _ref9=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref9$name=_ref9.name;var name=_ref9$name === undefined?_name:_ref9$name;var path=_ref9.path;var _ref9$uniforms=_ref9.uniforms;var uniforms=_ref9$uniforms === undefined?_uniforms:_ref9$uniforms;var ambient=_ref9.ambient;var diffuse=_ref9.diffuse;var specular=_ref9.specular;var intensity=_ref9.intensity;var location=_ref9.location;var _ref9$direction=_ref9.direction;var direction=_ref9$direction === undefined?_direction:_ref9$direction;_classCallCheck(this,DirectionalLight);_get(Object.getPrototypeOf(DirectionalLight.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms,ambient:ambient,diffuse:diffuse,specular:specular,intensity:intensity,location:location});this.direction = direction;this.type = 1;this.inheritance = ['Entity','Structure','Light','DirectionalLight'];}_createClass(DirectionalLight,[{key:"direction",get:function get(){return this._direction;},set:function set(direction){this._direction = direction;}},{key:"type",get:function get(){return this._type;},set:function set(type){this._type = type;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return DirectionalLight;})(Light);module.exports = DirectionalLight;},{"./Light":25}],20:[function(require,module,exports){'use strict';var indices={};var _name='entity';var Entity=(function(){function Entity(){var _ref10=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref10$name=_ref10.name;var name=_ref10$name === undefined?_name:_ref10$name;_classCallCheck(this,Entity);this.name = name;this.basename = name;this.inheritance = ['Entity'];}_createClass(Entity,[{key:"is",value:function is(identity){return this.name.match(identity,'i') !== null;}},{key:"isType",value:function isType(entity){return this.inheritance.indexOf(entity) !== -1;}},{key:"name",get:function get(){return this._name;},set:function set(name){if(indices[name] === undefined){indices[name] = -1;}indices[name]++;this._name = name + ".0" + indices[name];}},{key:"basename",get:function get(){return this._basename;},set:function set(basename){this._basename = basename;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Entity;})();module.exports = Entity;},{}],21:[function(require,module,exports){'use strict';var Shader=require('./Shader');var attribute='x-shader/x-fragment';var _name='fragment.shader';var _type='FRAGMENT_SHADER';var FragmentShader=(function(_Shader){_inherits(FragmentShader,_Shader);function FragmentShader(){var _ref11=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref11$name=_ref11.name;var name=_ref11$name === undefined?_name:_ref11$name;var selector=_ref11.selector;_classCallCheck(this,FragmentShader);_get(Object.getPrototypeOf(FragmentShader.prototype),"constructor",this).call(this,{name:name,selector:selector + "[type=\"" + attribute + "\"]"},_type);this.inheritance = ['Entity','Shader','FragmentShader'];}_createClass(FragmentShader,[{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return FragmentShader;})(Shader);module.exports = FragmentShader;},{"./Shader":40}],22:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var _name='framebuffer';var _flushable=true;var Framebuffer=(function(_Entity3){_inherits(Framebuffer,_Entity3);function Framebuffer(){var _ref12=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref12$name=_ref12.name;var name=_ref12$name === undefined?_name:_ref12$name;var _ref12$flushable=_ref12.flushable;var flushable=_ref12$flushable === undefined?_flushable:_ref12$flushable;_classCallCheck(this,Framebuffer);_get(Object.getPrototypeOf(Framebuffer.prototype),"constructor",this).call(this,{name:name});this.buffer = null;this.flushable = flushable;this.inheritance = ['Entity','Framebuffer'];}_createClass(Framebuffer,[{key:"bind",value:function bind(){var flush=arguments.length <= 0 || arguments[0] === undefined?true:arguments[0];gl.bindFramebuffer(gl.FRAMEBUFFER,this.buffer);if(this.flushable && flush){this.flush();}}},{key:"unbind",value:function unbind(){gl.bindFramebuffer(gl.FRAMEBUFFER,null);}},{key:"flush",value:function flush(){gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);}},{key:"check",value:function check(){var status=gl.checkFramebufferStatus(gl.FRAMEBUFFER);var error=false;switch(status){case gl.FRAMEBUFFER_UNSUPPORTED:error = 'unsupported';break;case gl.FRAMEBUFFER_INCOMPLETE_ATTACHMENT:error = 'attachments incomplete';break;case gl.FRAMEBUFFER_INCOMPLETE_DIMENSIONS:error = 'dimensions incomplete';break;case gl.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT:error = 'attachment missing';break;}if(error){gl.deleteFramebuffer(this.buffer);throw new Error(error);}}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"flushable",get:function get(){return this._flushable;},set:function set(flushable){this._flushable = flushable;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Framebuffer;})(Entity);module.exports = Framebuffer;},{"./Entity":20,"./gl":49}],23:[function(require,module,exports){'use strict';var Entity=require('./Entity');var _name='geometry';var Geometry=(function(_Entity4){_inherits(Geometry,_Entity4);function Geometry(){var _ref13=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref13$name=_ref13.name;var name=_ref13$name === undefined?_name:_ref13$name;_classCallCheck(this,Geometry);_get(Object.getPrototypeOf(Geometry.prototype),"constructor",this).call(this,{name:name});this.vertices = [];this.colors = [];this.normals = [];this.indices = [];this.faces = [];this.materials = [];}return Geometry;})(Entity);module.exports = Geometry;},{"./Entity":20}],24:[function(require,module,exports){'use strict';var gl=require('./gl');var Texture=require('./Texture');var _name='image.texture';var _anisotropy=false;var _mipmap=false;var ImageTexture=(function(_Texture3){_inherits(ImageTexture,_Texture3);function ImageTexture(){var _ref14=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref14$name=_ref14.name;var name=_ref14$name === undefined?_name:_ref14$name;var path=_ref14.path;var lod=_ref14.lod;var components=_ref14.components;var format=_ref14.format;var magnification=_ref14.magnification;var minification=_ref14.minification;var S=_ref14.S;var T=_ref14.T;var _ref14$anisotropy=_ref14.anisotropy;var anisotropy=_ref14$anisotropy === undefined?_anisotropy:_ref14$anisotropy;var _ref14$mipmap=_ref14.mipmap;var mipmap=_ref14$mipmap === undefined?_mipmap:_ref14$mipmap;_classCallCheck(this,ImageTexture);_get(Object.getPrototypeOf(ImageTexture.prototype),"constructor",this).call(this,{name:name,lod:lod,components:components,format:format,magnification:magnification,minification:minification,S:S,T:T});this.image = new Image();this.anisotropicFilter = gl.getExtension('EXT_texture_filter_anisotropic');this.anisotropy = anisotropy;this.mipmap = mipmap;this.inheritance = ['Entity','Texture','ImageTexture'];this.fetch(path);}_createClass(ImageTexture,[{key:"fetch",value:function fetch(path){var image=this.image;image.src = path;image.onload = this.configure.bind(this);}},{key:"configure",value:function configure(){_get(Object.getPrototypeOf(ImageTexture.prototype),"configure",this).call(this);var components=this.components;var anisotropy=this.anisotropy;gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL,true);if(anisotropy){gl.texParameterf(gl.TEXTURE_2D,this.anisotropicFilter.TEXTURE_MAX_ANISOTROPY_EXT,anisotropy);}gl.texImage2D(gl.TEXTURE_2D,this.lod,components,components,this.format,this.image);if(this.mipmap){gl.generateMipmap(gl.TEXTURE_2D);}this.unbind();}},{key:"image",get:function get(){return this._image;},set:function set(image){this._image = image;}},{key:"anisotropicFilter",get:function get(){return this._anisotropicFilter;},set:function set(anisotropicFilter){this._anisotropicFilter = anisotropicFilter;}},{key:"anisotropy",get:function get(){return this._anisotropy;},set:function set(anisotropy){var anisotropicFilter=this.anisotropicFilter;if(anisotropicFilter && anisotropy !== false){var maxAnisotropy=gl.getParameter(anisotropicFilter.MAX_TEXTURE_MAX_ANISOTROPY_EXT);anisotropy = Math.min(anisotropy,Math.max(anisotropy,maxAnisotropy));}else {anisotropy = 0;}this._anisotropy = anisotropy;}},{key:"mipmap",get:function get(){return this._mipmap;},set:function set(mipmap){this._mipmap = mipmap;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return ImageTexture;})(Texture);module.exports = ImageTexture;},{"./Texture":44,"./gl":49}],25:[function(require,module,exports){'use strict';var LSL=require('./utils/LSL');var Structure=require('./Structure');var _name='light';var _path='light';var _uniforms=['vec3 ambient','vec3 diffuse','vec3 specular','f intensity','vec3 location','i type'];var _ambient=0x000000;var _diffuse=0xFFFFFF;var _specular=0xFFFFFF;var _intensity=1;var _location=[0,0,0];var Light=(function(_Structure3){_inherits(Light,_Structure3);function Light(){var _ref15=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref15$name=_ref15.name;var name=_ref15$name === undefined?_name:_ref15$name;var _ref15$path=_ref15.path;var path=_ref15$path === undefined?_path:_ref15$path;var _ref15$uniforms=_ref15.uniforms;var uniforms=_ref15$uniforms === undefined?_uniforms:_ref15$uniforms;var _ref15$ambient=_ref15.ambient;var ambient=_ref15$ambient === undefined?_ambient:_ref15$ambient;var _ref15$diffuse=_ref15.diffuse;var diffuse=_ref15$diffuse === undefined?_diffuse:_ref15$diffuse;var _ref15$specular=_ref15.specular;var specular=_ref15$specular === undefined?_specular:_ref15$specular;var _ref15$intensity=_ref15.intensity;var intensity=_ref15$intensity === undefined?_intensity:_ref15$intensity;var _ref15$location=_ref15.location;var location=_ref15$location === undefined?_location:_ref15$location;_classCallCheck(this,Light);_get(Object.getPrototypeOf(Light.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms});this.ambient = ambient;this.diffuse = diffuse;this.specular = specular;this.intensity = intensity;this.location = location;this.type = 0;this.inheritance = ['Entity','Structure','Light'];}_createClass(Light,[{key:"ambient",get:function get(){return this._ambient;},set:function set(ambient){this._ambient = LSL(ambient);}},{key:"diffuse",get:function get(){return this._diffuse;},set:function set(diffuse){this._diffuse = LSL(diffuse);}},{key:"specular",get:function get(){return this._specular;},set:function set(specular){this._specular = LSL(specular);}},{key:"intensity",get:function get(){return this._intensity;},set:function set(intensity){this._intensity = intensity;}},{key:"location",get:function get(){return this._location;},set:function set(location){this._location = location;}},{key:"type",get:function get(){return this._type;},set:function set(type){this._type = type;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Light;})(Structure);module.exports = Light;},{"./Structure":43,"./utils/LSL":58}],26:[function(require,module,exports){'use strict';var LSL=require('./utils/LSL');var Structure=require('./Structure');var shades={flat:1,smooth:0};var _name='material';var _path='material';var _uniforms=['sampler image','vec3 ambient','vec3 diffuse','i shading','i type'];var _pattern={};var _ambient=0xFFFFFF;var _diffuse=0xFFFFFF;var _shading='smooth';var Material=(function(_Structure4){_inherits(Material,_Structure4);function Material(){var _ref16=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref16$name=_ref16.name;var name=_ref16$name === undefined?_name:_ref16$name;var _ref16$path=_ref16.path;var path=_ref16$path === undefined?_path:_ref16$path;var _ref16$uniforms=_ref16.uniforms;var uniforms=_ref16$uniforms === undefined?_uniforms:_ref16$uniforms;var _ref16$pattern=_ref16.pattern;var pattern=_ref16$pattern === undefined?_pattern:_ref16$pattern;var _ref16$ambient=_ref16.ambient;var ambient=_ref16$ambient === undefined?_ambient:_ref16$ambient;var _ref16$diffuse=_ref16.diffuse;var diffuse=_ref16$diffuse === undefined?_diffuse:_ref16$diffuse;var _ref16$shading=_ref16.shading;var shading=_ref16$shading === undefined?_shading:_ref16$shading;_classCallCheck(this,Material);_get(Object.getPrototypeOf(Material.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms});this.ambient = ambient;this.diffuse = diffuse;this.image = pattern.unit;this.shading = shades[shading];this.pattern = pattern;this.type = 0;this.inheritance = ['Entity','Structure','Material'];}_createClass(Material,[{key:"bind",value:function bind(program){_get(Object.getPrototypeOf(Material.prototype),"bind",this).call(this,program);if(this.image !== undefined){this.pattern.bind();}}},{key:"unbind",value:function unbind(){_get(Object.getPrototypeOf(Material.prototype),"unbind",this).call(this);if(this.image !== undefined){this.pattern.unbind();}}},{key:"ambient",get:function get(){return this._ambient;},set:function set(ambient){this._ambient = LSL(ambient);}},{key:"diffuse",get:function get(){return this._diffuse;},set:function set(diffuse){this._diffuse = LSL(diffuse);}},{key:"image",get:function get(){return this._image;},set:function set(image){this._image = image;}},{key:"shading",get:function get(){return this._shading;},set:function set(shading){this._shading = shades[shading];}},{key:"pattern",get:function get(){return this._pattern;},set:function set(pattern){this._pattern = pattern;}},{key:"type",get:function get(){return this._type;},set:function set(type){this._type = type;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Material;})(Structure);module.exports = Material;},{"./Structure":43,"./utils/LSL":58}],27:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var VertexArrayObject=require('./VertexArrayObject');var attributes={vertices:'position',colors:'color',uvs:'uv',normals:'normal'};var _name='mesh';var _vertices=[];var _colors=[];var _uvs=[];var _normals=[];var _indices=[];var _usage='STATIC_DRAW';var _primitive='TRIANGLES';var Mesh=(function(_Entity5){_inherits(Mesh,_Entity5);function Mesh(){var _ref17=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref17$name=_ref17.name;var name=_ref17$name === undefined?_name:_ref17$name;var buffers=_ref17.buffers;var loader=_ref17.loader;var _ref17$vertices=_ref17.vertices;var vertices=_ref17$vertices === undefined?_vertices:_ref17$vertices;var _ref17$colors=_ref17.colors;var colors=_ref17$colors === undefined?_colors:_ref17$colors;var _ref17$uvs=_ref17.uvs;var uvs=_ref17$uvs === undefined?_uvs:_ref17$uvs;var _ref17$normals=_ref17.normals;var normals=_ref17$normals === undefined?_normals:_ref17$normals;var _ref17$indices=_ref17.indices;var indices=_ref17$indices === undefined?_indices:_ref17$indices;var _ref17$usage=_ref17.usage;var usage=_ref17$usage === undefined?_usage:_ref17$usage;var _ref17$primitive=_ref17.primitive;var primitive=_ref17$primitive === undefined?_primitive:_ref17$primitive;var material=_ref17.material;_classCallCheck(this,Mesh);_get(Object.getPrototypeOf(Mesh.prototype),"constructor",this).call(this,{name:name});this.buffers = buffers;this.vertices = vertices;this.colors = colors;this.uvs = uvs;this.normals = normals;this.indices = indices;this.usage = usage;this.primitive = primitive;this.material = material;this.scale = [1,1,1];this.rotation = 0;this.translation = [0,0,0];this.inheritance = ['Entity','Mesh'];this.unpack(loader);this.generate();this.configure();}_createClass(Mesh,[{key:"unpack",value:function unpack(loader){if(loader !== undefined){this.vertices = loader.vertices;this.colors = loader.colors;this.uvs = loader.uvs;this.normals = loader.normals;this.indices = loader.indices;}}},{key:"generate",value:function generate(){if(this.buffers === undefined){var generated=[];var indexed=this.indices.length > 0;for(var _name2 in attributes) {var coordinates=this[_name2];if(coordinates.length > 0){generated.push("vec" + coordinates[0].length + " " + attributes[_name2]);}}this.buffers = new VertexArrayObject({attributes:generated,indexed:indexed});}}},{key:"configure",value:function configure(){var buffers=this.buffers;var usage=this.usage;var interleaved=[];var vertices=this.vertices;vertices.map(this.interleave.bind(this,interleaved));buffers.bind();gl.bufferData(gl.ARRAY_BUFFER,new buffers.view(interleaved),usage);if(buffers.indexed){var indices=this.indices;gl.bufferData(gl.ELEMENT_ARRAY_BUFFER,indices,usage);this.count = indices.length;}else {this.count = vertices.length;}buffers.unbind();}},{key:"interleave",value:function interleave(interleaved,vertex,index){var color=this.colors[index] || [];var uv=this.uvs[index] || [];var normal=this.normals[index] || [];var contatenation=[].concat(vertex,color,uv,normal);[].push.apply(interleaved,contatenation.map(parseFloat));}},{key:"draw",value:function draw(){var _ref18=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var program=_ref18.program;var _ref18$primitive=_ref18.primitive;var primitive=_ref18$primitive === undefined?this.primitive:_ref18$primitive;var _ref18$offset=_ref18.offset;var offset=_ref18$offset === undefined?0:_ref18$offset;var _ref18$count=_ref18.count;var count=_ref18$count === undefined?this.count:_ref18$count;var buffers=this.buffers;buffers.bind(program);if(buffers.indexed){gl.drawElements(primitive,count,gl.UNSIGNED_SHORT,offset);}else {gl.drawArrays(primitive,offset,count);}buffers.unbind();}},{key:"buffers",get:function get(){return this._buffers;},set:function set(buffers){this._buffers = buffers;}},{key:"vertices",get:function get(){return this._vertices;},set:function set(vertices){this._vertices = vertices;}},{key:"colors",get:function get(){return this._colors;},set:function set(colors){this._colors = colors;}},{key:"uvs",get:function get(){return this._uvs;},set:function set(uvs){this._uvs = uvs;}},{key:"normals",get:function get(){return this._normals;},set:function set(normals){this._normals = normals;}},{key:"indices",get:function get(){return this._indices;},set:function set(indices){this._indices = new Uint16Array(indices);}},{key:"usage",get:function get(){return this._usage;},set:function set(usage){this._usage = gl[usage];}},{key:"primitive",get:function get(){return this._primitive;},set:function set(primitive){this._primitive = gl[primitive];}},{key:"material",get:function get(){return this._material;},set:function set(material){this._material = material;}},{key:"scale",get:function get(){return this._scale;},set:function set(scale){this._scale = scale;}},{key:"rotation",get:function get(){return this._rotation;},set:function set(rotation){this._rotation = rotation;}},{key:"translation",get:function get(){return this._translation;},set:function set(translation){this._translation = translation;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Mesh;})(Entity);module.exports = Mesh;},{"./Entity":20,"./VertexArrayObject":46,"./gl":49}],28:[function(require,module,exports){'use strict';var ajax=require('./utils/ajax');var Entity=require('./Entity');var _name='mesh.loader';var MeshLoader=(function(_Entity6){_inherits(MeshLoader,_Entity6);function MeshLoader(){var _ref19=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref19$name=_ref19.name;var name=_ref19$name === undefined?_name:_ref19$name;var path=_ref19.path;_classCallCheck(this,MeshLoader);_get(Object.getPrototypeOf(MeshLoader.prototype),"constructor",this).call(this,{name:name});this.request = undefined;this.vertices = [];this.colors = [];this.uvs = [];this.normals = [];this.tmp = {vertices:[],colors:[],uvs:[],normals:[]};this.indices = [];this.inheritance = ['Entity','MeshLoader'];this.fetch(path);}_createClass(MeshLoader,[{key:"fetch",value:function fetch(path){this.request = ajax(path).then(this.parse.bind(this)).then(this.flush.bind(this));}},{key:"flush",value:function flush(){delete this.tmp;}},{key:"request",get:function get(){return this._request;},set:function set(request){this._request = request;}},{key:"vertices",get:function get(){return this._vertices;},set:function set(vertices){this._vertices = vertices;}},{key:"colors",get:function get(){return this._colors;},set:function set(colors){this._colors = colors;}},{key:"uvs",get:function get(){return this._uvs;},set:function set(uvs){this._uvs = uvs;}},{key:"normals",get:function get(){return this._normals;},set:function set(normals){this._normals = normals;}},{key:"indices",get:function get(){return this._indices;},set:function set(indices){this._indices = indices;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return MeshLoader;})(Entity);module.exports = MeshLoader;},{"./Entity":20,"./utils/ajax":59}],29:[function(require,module,exports){'use strict';var MeshLoader=require('./MeshLoader');var _name='obj.mesh.loader';var OBJMeshLoader=(function(_MeshLoader){_inherits(OBJMeshLoader,_MeshLoader);function OBJMeshLoader(){var _ref20=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref20$name=_ref20.name;var name=_ref20$name === undefined?_name:_ref20$name;var path=_ref20.path;_classCallCheck(this,OBJMeshLoader);_get(Object.getPrototypeOf(OBJMeshLoader.prototype),"constructor",this).call(this,{name:name,path:path});this.inheritance = ['Entity','MeshLoader','OBJMeshLoader'];}_createClass(OBJMeshLoader,[{key:"parse",value:function parse(raw){raw.split('\n').map(this.categorise.bind(this));}},{key:"categorise",value:function categorise(line){var words=line.split(' ');var type=words.shift();switch(type){case 'v':this.tmp.vertices.push(words);break;case 'vt':this.tmp.uvs.push(words);break;case 'vn':this.tmp.normals.push(words);break;case 'f':words.map(this.recategorise.bind(this));break;}}},{key:"recategorise",value:function recategorise(word){var indices=word.split('/').map(function(value){return value - 1;});var tmp=this.tmp;var position=tmp.vertices[indices[0]];var uv=tmp.uvs[indices[1]];var normal=tmp.normals[indices[2]];if(position !== undefined){this.vertices.push(position);}if(uv !== undefined){this.uvs.push(uv);}if(normal !== undefined){this.normals.push(normal);}}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return OBJMeshLoader;})(MeshLoader);module.exports = OBJMeshLoader;},{"./MeshLoader":28}],30:[function(require,module,exports){'use strict';var gl=require('./gl');var glm=require('gl-matrix');var mat4=glm.mat4;var Camera=require('./Camera');var _name='orthographic.camera';var _left=-1;var _bottom=-1;var _near=0.1;var _far=1;var OrthographicCamera=(function(_Camera){_inherits(OrthographicCamera,_Camera);function OrthographicCamera(){var _ref21=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref21$name=_ref21.name;var name=_ref21$name === undefined?_name:_ref21$name;var path=_ref21.path;var uniforms=_ref21.uniforms;var background=_ref21.background;var _ref21$left=_ref21.left;var left=_ref21$left === undefined?_left:_ref21$left;var right=_ref21.right;var _ref21$bottom=_ref21.bottom;var bottom=_ref21$bottom === undefined?_bottom:_ref21$bottom;var top=_ref21.top;var _ref21$near=_ref21.near;var near=_ref21$near === undefined?_near:_ref21$near;var _ref21$far=_ref21.far;var far=_ref21$far === undefined?_far:_ref21$far;_classCallCheck(this,OrthographicCamera);_get(Object.getPrototypeOf(OrthographicCamera.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms,background:background});this.left = left;this.right = right;this.bottom = bottom;this.top = top;this.near = near;this.far = far;this.inheritance = ['Entity','Structure','Camera','OrthographicCamera'];this.configure();}_createClass(OrthographicCamera,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(OrthographicCamera.prototype),"configure",this).call(this);mat4.ortho(this.projectionMatrix,this.left,this.right,this.bottom,this.top,this.near,this.far);mat4.identity(this.modelViewMatrix);}},{key:"bind",value:function bind(program){_get(Object.getPrototypeOf(OrthographicCamera.prototype),"bind",this).call(this,program);gl.disable(gl.DEPTH_TEST);gl.viewport(0,0,this.right,this.top);}},{key:"left",get:function get(){return this._left;},set:function set(left){this._left = left;}},{key:"right",get:function get(){return this._right;},set:function set(right){this._right = right;}},{key:"bottom",get:function get(){return this._bottom;},set:function set(bottom){this._bottom = bottom;}},{key:"top",get:function get(){return this._top;},set:function set(top){this._top = top;}},{key:"near",get:function get(){return this._near;},set:function set(near){this._near = near;}},{key:"far",get:function get(){return this._far;},set:function set(far){this._far = far;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return OrthographicCamera;})(Camera);module.exports = OrthographicCamera;},{"./Camera":13,"./gl":49,"gl-matrix":1}],31:[function(require,module,exports){'use strict';var glm=require('gl-matrix');var vec3=glm.vec3;var Entity=require('./Entity');var _name='particle';var _mass=1;var _damping=0;var _force=[0,0,0];var _acceleration=[0,0,0];var _velocity=[0,0,0];var _position=[0,0,0];var _normal=[0,0,0];var Particle=(function(_Entity7){_inherits(Particle,_Entity7);function Particle(){var _ref22=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref22$name=_ref22.name;var name=_ref22$name === undefined?_name:_ref22$name;var _ref22$mass=_ref22.mass;var mass=_ref22$mass === undefined?_mass:_ref22$mass;var _ref22$damping=_ref22.damping;var damping=_ref22$damping === undefined?_damping:_ref22$damping;var _ref22$force=_ref22.force;var force=_ref22$force === undefined?_force:_ref22$force;var _ref22$acceleration=_ref22.acceleration;var acceleration=_ref22$acceleration === undefined?_acceleration:_ref22$acceleration;var _ref22$velocity=_ref22.velocity;var velocity=_ref22$velocity === undefined?_velocity:_ref22$velocity;var _ref22$position=_ref22.position;var position=_ref22$position === undefined?_position:_ref22$position;var _ref22$normal=_ref22.normal;var normal=_ref22$normal === undefined?_normal:_ref22$normal;_classCallCheck(this,Particle);_get(Object.getPrototypeOf(Particle.prototype),"constructor",this).call(this,{name:name});this.mass = mass;this.damping = damping;this.force = force;this.acceleration = acceleration;this.velocity = velocity;this.previous = position;this.position = position;this.normal = normal;this.inheritance = ['Entity','Particle'];}_createClass(Particle,[{key:"exert",value:function exert(force){vec3.add(this.force,this.force,force);}},{key:"accelerate",value:function accelerate(acceleration){vec3.add(this.acceleration,this.acceleration,acceleration);}},{key:"damp",value:function damp(damping){vec3.max(this.velocity,vec3.scale([],this.velocity,damping),[0,0,0]);}},{key:"euler",value:function euler(timestep){var velocity=this.velocity;var position=this.position;vec3.add(this.velocity,velocity,vec3.scale([],this.acceleration,timestep));vec3.add(this.position,position,vec3.scale([],velocity,timestep));}},{key:"simplectic",value:function simplectic(timestep){vec3.add(this.velocity,this.velocity,vec3.scale([],this.acceleration,timestep));vec3.add(this.position,this.position,vec3.scale([],this.velocity,timestep));}},{key:"verlet",value:function verlet(timestep){var previous=this.previous;var position=this.position;var leap=vec3.sub([],previous,position);vec3.add(this.position,vec3.add([],position,leap),vec3.scale([],this.acceleration,Math.pow(timestep,2)));vec3.copy(this.previous,position);}},{key:"mass",get:function get(){return this._mass;},set:function set(mass){this._mass = mass;}},{key:"damping",get:function get(){return this._damping;},set:function set(damping){this._damping = damping;}},{key:"force",get:function get(){return this._force;},set:function set(force){this._force = force;}},{key:"acceleration",get:function get(){return this._acceleration;},set:function set(acceleration){this._acceleration = acceleration;}},{key:"velocity",get:function get(){return this._velocity;},set:function set(velocity){this._velocity = velocity;}},{key:"previous",get:function get(){return this._previous;},set:function set(previous){this._previous = previous;}},{key:"position",get:function get(){return this._position;},set:function set(position){this._position = position;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Particle;})(Entity);module.exports = Particle;},{"./Entity":20,"gl-matrix":1}],32:[function(require,module,exports){'use strict';var Entity=require('./Entity');var _name='particle.system';var _particles=[];var _gravity=[0,-9.80665,0];var _timestep=0.03;var _integrator='SIMPLECTIC';var ParticleSystem=(function(_Entity8){_inherits(ParticleSystem,_Entity8);function ParticleSystem(){var _ref23=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref23$name=_ref23.name;var name=_ref23$name === undefined?_name:_ref23$name;var _ref23$particles=_ref23.particles;var particles=_ref23$particles === undefined?_particles:_ref23$particles;var _ref23$gravity=_ref23.gravity;var gravity=_ref23$gravity === undefined?_gravity:_ref23$gravity;var _ref23$timestep=_ref23.timestep;var timestep=_ref23$timestep === undefined?_timestep:_ref23$timestep;var _ref23$integrator=_ref23.integrator;var integrator=_ref23$integrator === undefined?_integrator:_ref23$integrator;_classCallCheck(this,ParticleSystem);_get(Object.getPrototypeOf(ParticleSystem.prototype),"constructor",this).call(this,{name:name});this.particles = particles;this.gravity = gravity;this.timestep = timestep;this.integrator = integrator;this.inheritance = ['Entity','ParticleSystem'];}_createClass(ParticleSystem,[{key:"solve",value:function solve(){this.particles.forEach(this.integrate.bind(this));}},{key:"integrate",value:function integrate(particle){particle.accelerate(this.gravity);particle[this.integrator](this.timestep);}},{key:"particles",get:function get(){return this._particles;},set:function set(particles){this._particles = particles;}},{key:"gravity",get:function get(){return this._gravity;},set:function set(gravity){this._gravity = gravity;}},{key:"timestep",get:function get(){return this._timestep;},set:function set(timestep){this._timestep = timestep;}},{key:"integrator",get:function get(){return this._integrator.toLowerCase();},set:function set(integrator){this._integrator = integrator;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return ParticleSystem;})(Entity);module.exports = ParticleSystem;},{"./Entity":20}],33:[function(require,module,exports){'use strict';var gl=require('./gl');var glm=require('gl-matrix');var mat4=glm.mat4;var Camera=require('./Camera');var _name='perspective.camera';var _width=gl.canvas.width;var _height=gl.canvas.height;var _fov=45;var _near=0.1;var _far=1000;var _direction=[0,0,0];var _location=[10,10,-10];var _up=[0,1,0];var PerspectiveCamera=(function(_Camera2){_inherits(PerspectiveCamera,_Camera2);function PerspectiveCamera(){var _ref24=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref24$name=_ref24.name;var name=_ref24$name === undefined?_name:_ref24$name;var path=_ref24.path;var uniforms=_ref24.uniforms;var background=_ref24.background;var _ref24$width=_ref24.width;var width=_ref24$width === undefined?_width:_ref24$width;var _ref24$height=_ref24.height;var height=_ref24$height === undefined?_height:_ref24$height;var _ref24$fov=_ref24.fov;var fov=_ref24$fov === undefined?_fov:_ref24$fov;var _ref24$near=_ref24.near;var near=_ref24$near === undefined?_near:_ref24$near;var _ref24$far=_ref24.far;var far=_ref24$far === undefined?_far:_ref24$far;var _ref24$direction=_ref24.direction;var direction=_ref24$direction === undefined?_direction:_ref24$direction;var _ref24$location=_ref24.location;var location=_ref24$location === undefined?_location:_ref24$location;var _ref24$up=_ref24.up;var up=_ref24$up === undefined?_up:_ref24$up;_classCallCheck(this,PerspectiveCamera);_get(Object.getPrototypeOf(PerspectiveCamera.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms,background:background});this.width = width;this.height = height;this.fov = fov;this.ratio = width / height;this.near = near;this.far = far;this.direction = direction;this.location = location;this.up = up;this.inheritance = ['Entity','Structure','Camera','PerspectiveCamera'];this.configure();}_createClass(PerspectiveCamera,[{key:"configure",value:function configure(){_get(Object.getPrototypeOf(PerspectiveCamera.prototype),"configure",this).call(this);var modelViewMatrix=this.modelViewMatrix;gl.clearDepth(1);gl.depthFunc(gl.LEQUAL);mat4.perspective(this.projectionMatrix,this.fov,this.ratio,this.near,this.far);mat4.identity(modelViewMatrix);mat4.lookAt(modelViewMatrix,this.location,this.direction,this.up);}},{key:"bind",value:function bind(program){_get(Object.getPrototypeOf(PerspectiveCamera.prototype),"bind",this).call(this,program);gl.enable(gl.DEPTH_TEST);gl.viewport(0,0,this.width,this.height);}},{key:"width",get:function get(){return this._width;},set:function set(width){this._width = width;}},{key:"height",get:function get(){return this._height;},set:function set(height){this._height = height;}},{key:"fov",get:function get(){return this._fov;},set:function set(fov){this._fov = fov;}},{key:"ratio",get:function get(){return this._ratio;},set:function set(ratio){this._ratio = ratio;}},{key:"near",get:function get(){return this._near;},set:function set(near){this._near = near;}},{key:"far",get:function get(){return this._far;},set:function set(far){this._far = far;}},{key:"direction",get:function get(){return this._direction;},set:function set(direction){this._direction = direction;}},{key:"location",get:function get(){return this._location;},set:function set(location){this._location = location;}},{key:"up",get:function get(){return this._up;},set:function set(up){this._up = up;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return PerspectiveCamera;})(Camera);module.exports = PerspectiveCamera;},{"./Camera":13,"./gl":49,"gl-matrix":1}],34:[function(require,module,exports){'use strict';var LSL=require('./utils/LSL');var Material=require('./Material');var _name='phong.material';var _uniforms=['sampler image','vec3 ambient','vec3 diffuse','vec3 specular','f shininess','i shading','i type'];var _specular=[1,1,1];var _shininess=75;var PhongMaterial=(function(_Material){_inherits(PhongMaterial,_Material);function PhongMaterial(){var _ref25=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref25$name=_ref25.name;var name=_ref25$name === undefined?_name:_ref25$name;var path=_ref25.path;var _ref25$uniforms=_ref25.uniforms;var uniforms=_ref25$uniforms === undefined?_uniforms:_ref25$uniforms;var pattern=_ref25.pattern;var ambient=_ref25.ambient;var diffuse=_ref25.diffuse;var _ref25$specular=_ref25.specular;var specular=_ref25$specular === undefined?_specular:_ref25$specular;var shading=_ref25.shading;var _ref25$shininess=_ref25.shininess;var shininess=_ref25$shininess === undefined?_shininess:_ref25$shininess;_classCallCheck(this,PhongMaterial);_get(Object.getPrototypeOf(PhongMaterial.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms,pattern:pattern,ambient:ambient,diffuse:diffuse,shading:shading});this.specular = specular;this.shininess = shininess;this.type = 1;this.inheritance = ['Entity','Structure','Material','PhongMaterial'];}_createClass(PhongMaterial,[{key:"specular",get:function get(){return this._specular;},set:function set(specular){this._specular = LSL(specular);}},{key:"shininess",get:function get(){return this._shininess;},set:function set(shininess){this._shininess = shininess;}},{key:"type",get:function get(){return this._type;},set:function set(type){this._type = type;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return PhongMaterial;})(Material);module.exports = PhongMaterial;},{"./Material":26,"./utils/LSL":58}],35:[function(require,module,exports){'use strict';var Light=require('./Light');var _name='point.light';var _uniforms=['vec3 ambient','vec3 diffuse','vec3 specular','f radius','f intensity','vec3 location','i type'];var PointLight=(function(_Light2){_inherits(PointLight,_Light2);function PointLight(){var _ref26=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref26$name=_ref26.name;var name=_ref26$name === undefined?_name:_ref26$name;var path=_ref26.path;var _ref26$uniforms=_ref26.uniforms;var uniforms=_ref26$uniforms === undefined?_uniforms:_ref26$uniforms;var ambient=_ref26.ambient;var diffuse=_ref26.diffuse;var specular=_ref26.specular;var radius=_ref26.radius;var intensity=_ref26.intensity;var location=_ref26.location;_classCallCheck(this,PointLight);_get(Object.getPrototypeOf(PointLight.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms,ambient:ambient,diffuse:diffuse,specular:specular,intensity:intensity,location:location});this.radius = radius;this.type = 2;this.inheritance = ['Entity','Structure','Light','PointLight'];}_createClass(PointLight,[{key:"radius",get:function get(){return this._radius;},set:function set(radius){this._radius = radius;}},{key:"type",get:function get(){return this._type;},set:function set(type){this._type = type;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return PointLight;})(Light);module.exports = PointLight;},{"./Light":25}],36:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var VertexShader=require('./VertexShader');var FragmentShader=require('./FragmentShader');var _name='program';var Program=(function(_Entity9){_inherits(Program,_Entity9);function Program(){var _ref27=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref27$name=_ref27.name;var name=_ref27$name === undefined?_name:_ref27$name;var selector=_ref27.selector;_classCallCheck(this,Program);_get(Object.getPrototypeOf(Program.prototype),"constructor",this).call(this,{name:name});this.buffer = gl.createProgram();this.vertexShader = new VertexShader({selector:selector});this.fragmentShader = new FragmentShader({selector:selector});this.inheritance = ['Entity','Program'];this.link();}_createClass(Program,[{key:"link",value:function link(){var buffer=this.buffer;gl.attachShader(buffer,this.vertexShader.buffer);gl.attachShader(buffer,this.fragmentShader.buffer);gl.linkProgram(buffer);this.check();}},{key:"bind",value:function bind(){gl.useProgram(this.buffer);}},{key:"check",value:function check(){var buffer=this.buffer;var status=gl.getProgramParameter(buffer,gl.LINK_STATUS);var context=gl.isContextLost();if(!status && !context){var error=gl.getProgramInfoLog(buffer);gl.deleteProgram(buffer);throw new Error(error);}}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"vertexShader",get:function get(){return this._vertexShader;},set:function set(vertexShader){this._vertexShader = vertexShader;}},{key:"fragmentShader",get:function get(){return this._fragmentShader;},set:function set(fragmentShader){this._fragmentShader = fragmentShader;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Program;})(Entity);module.exports = Program;},{"./Entity":20,"./FragmentShader":21,"./VertexShader":47,"./gl":49}],37:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var _name='renderbuffer';var Renderbuffer=(function(_Entity10){_inherits(Renderbuffer,_Entity10);function Renderbuffer(){var _ref28=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref28$name=_ref28.name;var name=_ref28$name === undefined?_name:_ref28$name;var width=_ref28.width;var height=_ref28.height;_classCallCheck(this,Renderbuffer);_get(Object.getPrototypeOf(Renderbuffer.prototype),"constructor",this).call(this,{name:name});this.buffer = gl.createRenderbuffer();this.width = width;this.height = height;this.inheritance = ['Entity','Renderbuffer'];this.configure();}_createClass(Renderbuffer,[{key:"configure",value:function configure(){this.bind();gl.renderbufferStorage(gl.RENDERBUFFER,gl.DEPTH_COMPONENT16,this.width,this.height);this.unbind();}},{key:"bind",value:function bind(){gl.bindRenderbuffer(gl.RENDERBUFFER,this.buffer);}},{key:"unbind",value:function unbind(){gl.bindRenderbuffer(gl.RENDERBUFFER,null);}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"width",get:function get(){return this._width;},set:function set(width){this._width = width;}},{key:"height",get:function get(){return this._height;},set:function set(height){this._height = height;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Renderbuffer;})(Entity);module.exports = Renderbuffer;},{"./Entity":20,"./gl":49}],38:[function(require,module,exports){'use strict';var Entity=require('./Entity');var _name='renderer';var Renderer=(function(_Entity11){_inherits(Renderer,_Entity11);function Renderer(){var _ref29=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref29$name=_ref29.name;var name=_ref29$name === undefined?_name:_ref29$name;_classCallCheck(this,Renderer);_get(Object.getPrototypeOf(Renderer.prototype),"constructor",this).call(this,{name:name});}return Renderer;})(Entity);module.exports = Renderer;},{"./Entity":20}],39:[function(require,module,exports){'use strict';var Entity=require('./Entity');var _name='scene';var _meshes=[];var Scene=(function(_Entity12){_inherits(Scene,_Entity12);function Scene(){var _ref30=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref30$name=_ref30.name;var name=_ref30$name === undefined?_name:_ref30$name;_classCallCheck(this,Scene);_get(Object.getPrototypeOf(Scene.prototype),"constructor",this).call(this,{name:name});this.program = undefined;this.meshes = [];this.lights = [];this.scale = [1,1,1];this.rotation = 0;this.translation = [0,0,0];this.inheritance = ['Entity','Scene'];}_createClass(Scene,[{key:"use",value:function use(program){program.bind();this.program = program;}},{key:"put",value:function put(item){switch(true){case item.isType('Mesh'):this.meshes.push(item);break;case item.isType('Light'):this.lights.push(item);break;default:console.warn(item.name + " disallowed in scene");break;}}},{key:"animate",value:function animate(target,camera){var pre=arguments.length <= 2 || arguments[2] === undefined?false:arguments[2];var post=arguments.length <= 3 || arguments[3] === undefined?false:arguments[3];var step=this.animate.bind(this,target,camera,pre,post);this.render.apply(this,arguments);requestAnimationFrame(step);}},{key:"render",value:function render(target,camera){var pre=arguments.length <= 2 || arguments[2] === undefined?false:arguments[2];var post=arguments.length <= 3 || arguments[3] === undefined?false:arguments[3];target.bind();if(pre){pre();}camera.save();camera.scale.apply(camera,this.scale);camera.rotate(this.rotation);camera.translate.apply(camera,this.translation);this.lights.map(this.binder.bind(this));this.meshes.map(this.draw.bind(this,camera));camera.restore();if(post){post();}target.unbind();}},{key:"draw",value:function draw(camera,mesh){var program=this.program;var material=mesh.material;camera.save();camera.scale.apply(camera,mesh.scale);camera.rotate(mesh.rotation);camera.translate.apply(camera,mesh.translation);camera.bind(program);material.bind(program);mesh.draw({program:program});material.unbind();camera.restore();}},{key:"binder",value:function binder(entity){entity.bind(this.program);}},{key:"program",get:function get(){return this._program;},set:function set(program){this._program = program;}},{key:"meshes",get:function get(){return this._meshes;},set:function set(meshes){this._meshes = meshes;}},{key:"lights",get:function get(){return this._lights;},set:function set(lights){this._lights = lights;}},{key:"scale",get:function get(){return this._scale;},set:function set(scale){this._scale = scale;}},{key:"rotation",get:function get(){return this._rotation;},set:function set(rotation){this._rotation = rotation;}},{key:"translation",get:function get(){return this._translation;},set:function set(translation){this._translation = translation;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Scene;})(Entity);module.exports = Scene;},{"./Entity":20}],40:[function(require,module,exports){'use strict';var gl=require('./gl');var ajax=require('./utils/ajax');var Entity=require('./Entity');var shaders=require('./shaders/shaders');var _name='shader';var Shader=(function(_Entity13){_inherits(Shader,_Entity13);function Shader(_x38,type){var _ref31=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref31$name=_ref31.name;var name=_ref31$name === undefined?_name:_ref31$name;var selector=_ref31.selector;_classCallCheck(this,Shader);_get(Object.getPrototypeOf(Shader.prototype),"constructor",this).call(this,{name:name});this.buffer = gl.createShader(gl[type]);this.inheritance = ['Entity','Shader'];this.compile(type,selector);}_createClass(Shader,[{key:"generate",value:function generate(type,selector){var source=document.querySelector(selector).textContent;for(var tag in shaders) {source = source.replace("@use " + tag + ";",shaders[tag][type]);}return source;}},{key:"compile",value:function compile(type,selector){var buffer=this.buffer;var source=this.generate(type,selector);gl.shaderSource(buffer,source);gl.compileShader(buffer);this.check();}},{key:"check",value:function check(){var buffer=this.buffer;var status=gl.getShaderParameter(buffer,gl.COMPILE_STATUS);var context=gl.isContextLost();if(!status && !context){var error=gl.getShaderInfoLog(buffer);gl.deleteShader(buffer);throw new Error(error);}}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Shader;})(Entity);module.exports = Shader;},{"./Entity":20,"./gl":49,"./shaders/shaders":57,"./utils/ajax":59}],41:[function(require,module,exports){'use strict';var gl=require('./gl');var Structure=require('./Structure');var DataTexture=require('./DataTexture');var DepthTexture=require('./DepthTexture');var DepthFramebuffer=require('./DepthFramebuffer');var _name='shadow.map';var _uniforms=['sampler shadowMap'];var _width=gl.canvas.width;var _height=gl.canvas.height;var ShadowMapper=(function(_Structure5){_inherits(ShadowMapper,_Structure5);function ShadowMapper(){var _ref32=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref32$name=_ref32.name;var name=_ref32$name === undefined?_name:_ref32$name;var path=_ref32.path;var _ref32$uniforms=_ref32.uniforms;var uniforms=_ref32$uniforms === undefined?_uniforms:_ref32$uniforms;var _ref32$width=_ref32.width;var width=_ref32$width === undefined?_width:_ref32$width;var _ref32$height=_ref32.height;var height=_ref32$height === undefined?_height:_ref32$height;_classCallCheck(this,ShadowMapper);_get(Object.getPrototypeOf(ShadowMapper.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms});this.colorAttachment = new DataTexture({width:width,height:height});this.depthAttachment = new DepthTexture({width:width,height:height});this.view = new DepthFramebuffer({colorAttachment:this.colorAttachment,depthAttachment:this.depthAttachment});this.shadowMap = this.depthAttachment.unit;this.inheritance = ['Entity','Structure','ShadowMapper'];}_createClass(ShadowMapper,[{key:"bind",value:function bind(program){_get(Object.getPrototypeOf(ShadowMapper.prototype),"bind",this).call(this,program);this.depthAttachment.bind();}},{key:"unbind",value:function unbind(){this.depthAttachment.unbind();}},{key:"colorAttachment",get:function get(){return this._colorAttachment;},set:function set(colorAttachment){this._colorAttachment = colorAttachment;}},{key:"depthAttachment",get:function get(){return this._depthAttachment;},set:function set(depthAttachment){this._depthAttachment = depthAttachment;}},{key:"view",get:function get(){return this._view;},set:function set(view){this._view = view;}},{key:"shadowMap",get:function get(){return this._shadowMap;},set:function set(shadowMap){this._shadowMap = shadowMap;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return ShadowMapper;})(Structure);module.exports = ShadowMapper;},{"./DataTexture":15,"./DepthFramebuffer":17,"./DepthTexture":18,"./Structure":43,"./gl":49}],42:[function(require,module,exports){'use strict';var Light=require('./Light');var _name='spot.light';var _uniforms=['vec3 ambient','vec3 diffuse','vec3 specular','vec3 attenuation','f exponent','f cutoff','f intensity','vec3 location','vec3 direction','i type'];var _direction=[0,0,0];var SpotLight=(function(_Light3){_inherits(SpotLight,_Light3);function SpotLight(){var _ref33=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref33$name=_ref33.name;var name=_ref33$name === undefined?_name:_ref33$name;var path=_ref33.path;var _ref33$uniforms=_ref33.uniforms;var uniforms=_ref33$uniforms === undefined?_uniforms:_ref33$uniforms;var ambient=_ref33.ambient;var diffuse=_ref33.diffuse;var specular=_ref33.specular;var attenuation=_ref33.attenuation;var exponent=_ref33.exponent;var cutoff=_ref33.cutoff;var intensity=_ref33.intensity;var location=_ref33.location;var _ref33$direction=_ref33.direction;var direction=_ref33$direction === undefined?_direction:_ref33$direction;_classCallCheck(this,SpotLight);_get(Object.getPrototypeOf(SpotLight.prototype),"constructor",this).call(this,{name:name,path:path,uniforms:uniforms,ambient:ambient,diffuse:diffuse,specular:specular,intensity:intensity,location:location});this.attenuation = attenuation;this.exponent = exponent;this.cutoff = cutoff;this.direction = direction;this.type = 3;this.inheritance = ['Entity','Structure','Light','SpotLight'];}_createClass(SpotLight,[{key:"attenuation",get:function get(){return this._attenuation;},set:function set(attenuation){this._attenuation = attenuation;}},{key:"cutoff",get:function get(){return this._cutoff;},set:function set(cutoff){this._cutoff = cutoff;}},{key:"direction",get:function get(){return this._direction;},set:function set(direction){this._direction = direction;}},{key:"type",get:function get(){return this._type;},set:function set(type){this._type = type;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return SpotLight;})(Light);module.exports = SpotLight;},{"./Light":25}],43:[function(require,module,exports){'use strict';var Entity=require('./Entity');var Uniform=require('./Uniform');var _name='structure';var _uniforms=[];var Structure=(function(_Entity14){_inherits(Structure,_Entity14);function Structure(_ref34){var _ref34$name=_ref34.name;var name=_ref34$name === undefined?_name:_ref34$name;var path=_ref34.path;var _ref34$uniforms=_ref34.uniforms;var uniforms=_ref34$uniforms === undefined?_uniforms:_ref34$uniforms;_classCallCheck(this,Structure);_get(Object.getPrototypeOf(Structure.prototype),"constructor",this).call(this,{name:name});this.path = path;this.uniforms = uniforms;this.inheritance = ['Entity','Structure'];}_createClass(Structure,[{key:"instantiate",value:function instantiate(qualifying){var properties=qualifying.split(' ');var format=properties[0];var uniform=properties[1];return new Uniform({path:this.path,uniform:uniform,format:format});}},{key:"bind",value:function bind(program){this.uniforms.map(this.set.bind(this,program));}},{key:"unbind",value:function unbind(){}},{key:"set",value:function set(program,uniform){uniform.set(program,this[uniform.uniform]);}},{key:"path",get:function get(){return this._path;},set:function set(path){this._path = path;}},{key:"uniforms",get:function get(){return this._uniforms;},set:function set(uniforms){this._uniforms = uniforms.map(this.instantiate.bind(this));}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Structure;})(Entity);module.exports = Structure;},{"./Entity":20,"./Uniform":45}],44:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var unit=0;var _name='texture';var _lod=0;var _components='RGBA';var _format='UNSIGNED_BYTE';var _magnification='NEAREST';var _minification='NEAREST';var _S='CLAMP_TO_EDGE';var _T='CLAMP_TO_EDGE';var Texture=(function(_Entity15){_inherits(Texture,_Entity15);function Texture(){var _ref35=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref35$name=_ref35.name;var name=_ref35$name === undefined?_name:_ref35$name;var _ref35$lod=_ref35.lod;var lod=_ref35$lod === undefined?_lod:_ref35$lod;var _ref35$components=_ref35.components;var components=_ref35$components === undefined?_components:_ref35$components;var _ref35$format=_ref35.format;var format=_ref35$format === undefined?_format:_ref35$format;var _ref35$magnification=_ref35.magnification;var magnification=_ref35$magnification === undefined?_magnification:_ref35$magnification;var _ref35$minification=_ref35.minification;var minification=_ref35$minification === undefined?_minification:_ref35$minification;var _ref35$S=_ref35.S;var S=_ref35$S === undefined?_S:_ref35$S;var _ref35$T=_ref35.T;var T=_ref35$T === undefined?_T:_ref35$T;_classCallCheck(this,Texture);_get(Object.getPrototypeOf(Texture.prototype),"constructor",this).call(this,{name:name});this.buffer = gl.createTexture();this.lod = lod;this.components = components;this.format = format;this.magnification = magnification;this.minification = minification;this.S = S;this.T = T;this.unit = unit++;this.inheritance = ['Entity','Texture'];}_createClass(Texture,[{key:"configure",value:function configure(){this.bind();gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MAG_FILTER,this.magnification);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_MIN_FILTER,this.minification);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_S,this.S);gl.texParameteri(gl.TEXTURE_2D,gl.TEXTURE_WRAP_T,this.T);}},{key:"bind",value:function bind(){var active=gl.TEXTURE0 + this.unit;gl.activeTexture(active);gl.bindTexture(gl.TEXTURE_2D,this.buffer);}},{key:"unbind",value:function unbind(){gl.bindTexture(gl.TEXTURE_2D,null);}},{key:"buffer",get:function get(){return this._buffer;},set:function set(buffer){this._buffer = buffer;}},{key:"lod",get:function get(){return this._lod;},set:function set(lod){this._lod = lod;}},{key:"components",get:function get(){return this._components;},set:function set(components){this._components = gl[components];}},{key:"format",get:function get(){return this._format;},set:function set(format){this._format = gl[format];}},{key:"magnification",get:function get(){return this._magnification;},set:function set(magnification){this._magnification = gl[magnification];}},{key:"minification",get:function get(){return this._minification;},set:function set(minification){this._minification = gl[minification];}},{key:"S",get:function get(){return this._S;},set:function set(S){this._S = gl[S];}},{key:"T",get:function get(){return this._T;},set:function set(T){this._T = gl[T];}},{key:"unit",get:function get(){return this._unit;},set:function set(unit){this._unit = unit;}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Texture;})(Entity);module.exports = Texture;},{"./Entity":20,"./gl":49}],45:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var formats={i:'1i',ivec2:'2iv',ivec3:'3iv',ivec4:'4iv',f:'1f',vec2:'2fv',vec3:'3fv',vec4:'4fv',mat2:'Matrix2fv',mat3:'Matrix3fv',mat4:'Matrix4fv',sampler:'1i'};var _name='uniform';var Uniform=(function(_Entity16){_inherits(Uniform,_Entity16);function Uniform(){var _ref36=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref36$name=_ref36.name;var name=_ref36$name === undefined?_name:_ref36$name;var path=_ref36.path;var uniform=_ref36.uniform;var format=_ref36.format;_classCallCheck(this,Uniform);_get(Object.getPrototypeOf(Uniform.prototype),"constructor",this).call(this,{name:name});this.path = path;this.uniform = uniform;this.location = undefined;this.format = format;this.method = format;this.inheritance = ['Entity','Uniform'];}_createClass(Uniform,[{key:"locate",value:function locate(program){var path=this.path;var uniform=this.uniform;if(this.format !== 'sampler' && path !== undefined){uniform = [path,uniform].join('.');}return this.location = gl.getUniformLocation(program.buffer,"u_" + uniform);}},{key:"set",value:function set(program,value){var location=this.locate(program);var method=this.method;if(method.match('Matrix') !== null){gl[method](location,false,value);}else {gl[method](location,value);}}},{key:"path",get:function get(){return this._path;},set:function set(path){this._path = path;}},{key:"uniform",get:function get(){return this._uniform;},set:function set(uniform){this._uniform = uniform;}},{key:"location",get:function get(){return this._location;},set:function set(location){this._location = location;}},{key:"format",get:function get(){return this._format;},set:function set(format){this._format = format;}},{key:"method",get:function get(){return this._method;},set:function set(format){this._method = "uniform" + formats[format];}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return Uniform;})(Entity);module.exports = Uniform;},{"./Entity":20,"./gl":49}],46:[function(require,module,exports){'use strict';var gl=require('./gl');var Entity=require('./Entity');var Attribute=require('./Attribute');var lengths={i:1,f:1,vec2:2,vec3:3,vec4:4};var _name='vertex.array.object';var _indexed=false;var _view=Float32Array;var _attributes=[];var VertexArrayObject=(function(_Entity17){_inherits(VertexArrayObject,_Entity17);function VertexArrayObject(){var _ref37=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref37$name=_ref37.name;var name=_ref37$name === undefined?_name:_ref37$name;var _ref37$indexed=_ref37.indexed;var indexed=_ref37$indexed === undefined?_indexed:_ref37$indexed;var _ref37$view=_ref37.view;var view=_ref37$view === undefined?_view:_ref37$view;var _ref37$attributes=_ref37.attributes;var attributes=_ref37$attributes === undefined?_attributes:_ref37$attributes;_classCallCheck(this,VertexArrayObject);_get(Object.getPrototypeOf(VertexArrayObject.prototype),"constructor",this).call(this,{name:name});this.primary = gl.createBuffer();this.secondary = undefined;this.indexed = indexed;this.stride = 0;this.view = view;this.attributes = attributes;this.inheritance = ['Entity','VertexArrayObject'];this.configure();}_createClass(VertexArrayObject,[{key:"configure",value:function configure(){if(this.indexed){this.secondary = gl.createBuffer();}}},{key:"generate",value:function generate(qualifying){var offset=this.stride;var vars=qualifying.split(' ');var length=lengths[vars[0]];var name=vars[1];var attribute=new Attribute({attribute:name,length:length,offset:offset});this.stride += attribute.getByteCount(this.view.BYTES_PER_ELEMENT);return attribute;}},{key:"enable",value:function enable(program,attribute){attribute.enable(program,this.stride);}},{key:"disable",value:function disable(attribute){attribute.disable();}},{key:"bind",value:function bind(){var program=arguments.length <= 0 || arguments[0] === undefined?false:arguments[0];gl.bindBuffer(gl.ARRAY_BUFFER,this.primary);if(this.indexed){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,this.secondary);}if(program){this.attributes.map(this.enable.bind(this,program));}}},{key:"unbind",value:function unbind(){gl.bindBuffer(gl.ARRAY_BUFFER,null);if(this.indexed){gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER,null);}this.attributes.map(this.disable);}},{key:"primary",get:function get(){return this._primary;},set:function set(primary){this._primary = primary;}},{key:"secondary",get:function get(){return this._secondary;},set:function set(secondary){this._secondary = secondary;}},{key:"indexed",get:function get(){return this._indexed;},set:function set(indexed){this._indexed = indexed;}},{key:"stride",get:function get(){return this._stride;},set:function set(stride){this._stride = stride;}},{key:"view",get:function get(){return this._view;},set:function set(view){this._view = view;}},{key:"attributes",get:function get(){return this._attributes;},set:function set(attributes){this._attributes = attributes.map(this.generate.bind(this));}},{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return VertexArrayObject;})(Entity);module.exports = VertexArrayObject;},{"./Attribute":11,"./Entity":20,"./gl":49}],47:[function(require,module,exports){'use strict';var Shader=require('./Shader');var attribute='x-shader/x-vertex';var _name='vertex.shader';var _type='VERTEX_SHADER';var VertexShader=(function(_Shader2){_inherits(VertexShader,_Shader2);function VertexShader(){var _ref38=arguments.length <= 0 || arguments[0] === undefined?{}:arguments[0];var _ref38$name=_ref38.name;var name=_ref38$name === undefined?_name:_ref38$name;var selector=_ref38.selector;_classCallCheck(this,VertexShader);_get(Object.getPrototypeOf(VertexShader.prototype),"constructor",this).call(this,{name:name,selector:selector + "[type=\"" + attribute + "\"]"},_type);this.inheritance = ['Entity','Shader','VertexShader'];}_createClass(VertexShader,[{key:"inheritance",get:function get(){return this._inheritance;},set:function set(inheritance){this._inheritance = inheritance;}}]);return VertexShader;})(Shader);module.exports = VertexShader;},{"./Shader":40}],48:[function(require,module,exports){'use strict';var Four={glm:require('gl-matrix'),gl:require('./gl'),Attribute:require('./Attribute'),Camera:require('./Camera'),Canvas:require('./Canvas'),OrthographicCamera:require('./OrthographicCamera'),PerspectiveCamera:require('./PerspectiveCamera'),Framebuffer:require('./Framebuffer'),DeferredFramebuffer:require('./DeferredFramebuffer'),DepthFramebuffer:require('./DepthFramebuffer'),Light:require('./Light'),DirectionalLight:require('./DirectionalLight'),PointLight:require('./PointLight'),SpotLight:require('./SpotLight'),Material:require('./Material'),PhongMaterial:require('./PhongMaterial'),Mesh:require('./Mesh'),MeshLoader:require('./MeshLoader'),OBJMeshLoader:require('./OBJMeshLoader'),Program:require('./Program'),Renderbuffer:require('./Renderbuffer'),Scene:require('./Scene'),Shader:require('./Shader'),FragmentShader:require('./FragmentShader'),VertexShader:require('./VertexShader'),ShadowMapper:require('./ShadowMapper'),Structure:require('./Structure'),Texture:require('./Texture'),DataTexture:require('./DataTexture'),DepthTexture:require('./DepthTexture'),ImageTexture:require('./ImageTexture'),Uniform:require('./Uniform'),VertexArrayObject:require('./VertexArrayObject'),Particle:require('./Particle'),ParticleSystem:require('./ParticleSystem')};module.exports = window.Four = Four;},{"./Attribute":11,"./Camera":13,"./Canvas":14,"./DataTexture":15,"./DeferredFramebuffer":16,"./DepthFramebuffer":17,"./DepthTexture":18,"./DirectionalLight":19,"./FragmentShader":21,"./Framebuffer":22,"./ImageTexture":24,"./Light":25,"./Material":26,"./Mesh":27,"./MeshLoader":28,"./OBJMeshLoader":29,"./OrthographicCamera":30,"./Particle":31,"./ParticleSystem":32,"./PerspectiveCamera":33,"./PhongMaterial":34,"./PointLight":35,"./Program":36,"./Renderbuffer":37,"./Scene":39,"./Shader":40,"./ShadowMapper":41,"./SpotLight":42,"./Structure":43,"./Texture":44,"./Uniform":45,"./VertexArrayObject":46,"./VertexShader":47,"./gl":49,"gl-matrix":1}],49:[function(require,module,exports){'use strict';var $view=canvas();var gl=context('webgl') || context('experimental-webgl');function canvas(){var $canvas=document.querySelector('canvas');var dpi=window.devicePixelRatio;var width=parseFloat($canvas.getAttribute('width')) || window.innerWidth;var height=parseFloat($canvas.getAttribute('height')) || window.innerHeight;$canvas.setAttribute('width',width * dpi);$canvas.setAttribute('height',height * dpi);$canvas.style.width = width;$canvas.style.height = height;return $canvas;}function context(name){return $view.getContext(name);}module.exports = gl;},{}],50:[function(require,module,exports){'use strict';var VERTEX_SHADER="\n   struct Camera\n   {\n      mat4 projectionMatrix;\n      mat4 modelViewMatrix;\n      mat3 normalMatrix;\n   };\n";var FRAGMENT_SHADER="";module.exports = {VERTEX_SHADER:VERTEX_SHADER,FRAGMENT_SHADER:FRAGMENT_SHADER};},{}],51:[function(require,module,exports){'use strict';var VERTEX_SHADER="";var FRAGMENT_SHADER="";module.exports = {VERTEX_SHADER:VERTEX_SHADER,FRAGMENT_SHADER:FRAGMENT_SHADER};},{}],52:[function(require,module,exports){'use strict';var VERTEX_SHADER="";var FRAGMENT_SHADER="\n   struct Light\n   {\n      vec3 ambient;\n      vec3 diffuse;\n      vec3 specular;\n      float intensity;\n      vec3 location;\n      int type;\n   };\n\n   vec3 Light_main(Light light, Material material, vec4 position, vec3 normal, vec3 base)\n   {\n      vec3 direction = normalize(light.location - position.xyz);\n      float weight = max(dot(direction, normal), 0.0);\n      vec3 ambient = light.ambient * material.ambient;\n      vec3 diffuse = light.intensity * light.diffuse * (material.diffuse + base) * weight;\n      vec3 specular = vec3(0.0);\n\n      if (material.type == 1 && weight > 0.0)\n      {\n         specular = light.specular * material.specular * pow(max(dot(reflect(-direction, normal), normalize(-position.xyz)), 0.0), material.shininess);\n      }\n\n      return ambient + diffuse + specular;\n   }\n";module.exports = {VERTEX_SHADER:VERTEX_SHADER,FRAGMENT_SHADER:FRAGMENT_SHADER};},{}],53:[function(require,module,exports){'use strict';var VERTEX_SHADER="";var FRAGMENT_SHADER="\n   struct Material\n   {\n      int image;\n      vec3 ambient;\n      vec3 diffuse;\n      vec3 specular;\n      float shininess;\n      int shading;\n      int type;\n   };\n\n   uniform sampler2D u_image;\n";module.exports = {VERTEX_SHADER:VERTEX_SHADER,FRAGMENT_SHADER:FRAGMENT_SHADER};},{}],54:[function(require,module,exports){'use strict';var VERTEX_SHADER="";var FRAGMENT_SHADER="\n   struct PointLight\n   {\n      vec3 ambient;\n      vec3 diffuse;\n      vec3 specular;\n      float radius;\n      float intensity;\n      vec3 location;\n      int type;\n   };\n\n   vec3 PointLight_main(PointLight light, Material material, vec4 position, vec3 normal)\n   {\n      normal = normalize(normal);\n      vec3 pointToLight = light.location - position.xyz;\n      vec3 direction = normalize(pointToLight);\n      float weight = max(dot(normal, direction), 0.0);\n      vec3 ambient = light.ambient * material.ambient;\n      vec3 diffuse = light.diffuse * material.diffuse * weight;\n      vec3 specular = vec3(0.0);\n      float distanceFromLight = length(pointToLight);\n      float quadratic = pow(distanceFromLight / light.radius + 1.0, 2.0);\n      float attenuation = light.intensity / quadratic;\n\n      if (material.type == 1)\n      {\n         if (weight > 0.0)\n         {\n            vec3 eye = normalize(-position.xyz);\n            vec3 reflection = reflect(-direction, normal);\n            specular = light.specular * material.specular * pow(max(dot(reflection, eye), 0.0), material.shininess);\n         }\n      }\n\n      return ambient + (specular + diffuse) * attenuation;\n   }\n";module.exports = {VERTEX_SHADER:VERTEX_SHADER,FRAGMENT_SHADER:FRAGMENT_SHADER};},{}],55:[function(require,module,exports){'use strict';var VERTEX_SHADER="\n   varying vec4 v_shadow;\n\n   void ShadowMapper_main(vec4 position)\n   {\n      v_shadow = mat4(0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.0, 0.0, 0.0, 0.5, 0.0, 0.5, 0.5, 0.5, 1.0) * position;\n   }\n";var FRAGMENT_SHADER="\n   uniform sampler2D u_shadowMap;\n\n   varying vec4 v_shadow;\n\n   float ShadowMapper_visibility()\n   {\n      vec3 depth = v_shadow.xyz / v_shadow.w;\n\n      if (depth.x >= 0.0 && depth.x <= 1.0 && depth.y >= 0.0 && depth.y <= 1.0)\n      {\n         float shadow = texture2D(u_shadowMap, depth.xy).r;\n         float biased = depth.z * 0.99995;\n         if (shadow <= biased)\n         {\n             return 0.3;\n         }\n      }\n\n      return 1.0;\n   }\n";module.exports = {VERTEX_SHADER:VERTEX_SHADER,FRAGMENT_SHADER:FRAGMENT_SHADER};},{}],56:[function(require,module,exports){arguments[4][51][0].apply(exports,arguments);},{"dup":51}],57:[function(require,module,exports){'use strict';var shaders={Camera:require('./Camera'),Light:require('./Light'),DirectionalLight:require('./DirectionalLight'),PointLight:require('./PointLight'),SpotLight:require('./SpotLight'),Material:require('./Material'),ShadowMapper:require('./ShadowMapper')};module.exports = shaders;},{"./Camera":50,"./DirectionalLight":51,"./Light":52,"./Material":53,"./PointLight":54,"./ShadowMapper":55,"./SpotLight":56}],58:[function(require,module,exports){'use strict';function LSL(hex){var r=hex >> 16 & 0xFF;var g=hex >> 8 & 0xFF;var b=hex & 0xFF;r /= 255;g /= 255;b /= 255;return [r,g,b];}module.exports = LSL;},{}],59:[function(require,module,exports){'use strict';var promise=require('./promise');function ajax(url){var contentType=arguments.length <= 1 || arguments[1] === undefined?'text/plain':arguments[1];return promise(function(resolve,reject){var request=new XMLHttpRequest();request.open('get',url);request.onload = function(){var status=request.status;if(status === 200){resolve(request.response);}else {var _status=url + ": " + request.statusText;var error=new Error(_status);reject(error);}};request.setRequestHeader('contentType',contentType);request.send();});}module.exports = ajax;},{"./promise":60}],60:[function(require,module,exports){'use strict';function promise(handler){return new Promise(handler);}module.exports = promise;},{}]},{},[11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60]);
//# sourceMappingURL=four.js.map