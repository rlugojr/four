(function()
{
   var canvas = document.createElement('canvas');
   var vertexShaderSource = document.createElement('script');
   var fragmentShaderSource = document.createElement('script');

   canvas.setAttribute('id', 'test');
   canvas.setAttribute('style', 'display: none');

   vertexShaderSource.setAttribute('type', 'x-shader/x-vertex');
   vertexShaderSource.setAttribute('class', 'test__renderer');

   fragmentShaderSource.setAttribute('type', 'x-shader/x-fragment');
   fragmentShaderSource.setAttribute('class', 'test__renderer');

   vertexShaderSource.textContent = [
      '#version 100',
      'precision mediump int;',
      'precision mediump float;',
      '@use Camera;',
      'attribute vec3 a_position;',
      'attribute vec3 a_normal;',
      'uniform Camera u_camera;',
      'varying vec3 v_normal;',
      'void main()',
      '{',
      '   gl_Position = u_camera.projectionMatrix * u_camera.modelViewMatrix * vec4(a_position, 1);',
      '   v_normal = a_normal;',
      '}'
   ].join('\n');

   fragmentShaderSource.textContent = [
      '#version 100',
      'precision mediump int;',
      'precision mediump float;',
      'varying vec3 v_normal;',
      'void main()',
      '{',
      '   gl_FragColor = vec4(1);',
      '}'
   ].join('\n');

   document.body.appendChild(canvas);
   document.body.appendChild(vertexShaderSource);
   document.body.appendChild(fragmentShaderSource);
}());
