<img src="http://allotrop3.github.io/four/images/four.jpg">

**Four** is a slightly higher level graphics API based on WebGL 1.0. It abstracts only what is necessary to simplify getting started whilst still exposing the flexibility you would have using the WebGL API directly. Notably the classes defined map directly to the concepts familiar to an OpenGL application, including Attributes, Uniforms, Structures, Shaders, Programs and more; all of which implement the basic functions associated to them, but with fewer function calls to the user. This allows you, as the developer, to focus on what is important: **getting something on the screen**.

It uses the gl-matrix library, which is also included in the framework. The documentation for the gl-matrix librabry can be found [here](http://glmatrix.net/docs/2.2.0/).

In case you want to learn more about Four and why I've built it, I suggest you to read [the article I've published on SitePoint](http://www.sitepoint.com/introducing-four-webgl-easier/).

## Demo

See a [live demo](http://allotrop3.github.io/four).

<img src="https://github.com/allotrop3/four/blob/master/screenshots/demo.png" alt="Four" height="width:100%"> 

## Getting started

Simply download [Four](http://allotrop3.github.io/four/scripts/four.min.js) and include the script in your project.

```javascript
<script type="text/javascript" src="path/to/four.min.js"></script>
```

Also be sure to include an HTML `canvas` element in your project. If no default `width` or `height` attributes are set, the framework assumes their respective window dimension.

```html
<canvas width="500" height="500"></canvas>
```

### Example

The following example assumes an OBJ mesh file loader to import a mesh into the scene. It further constructs a point light source and a three dimensional perspective projection to illuminate and visualise the scene, respectively. The scenes pre-render execution routine simply rotates the scene around the mesh.

#### JavaScript

```javascript
<script>
   var meshLoader = new Four.OBJMeshLoader({ path: 'path/to/mesh.obj' });

   function main() {
      var program = new Four.Program({ selector: '.renderer' });
   
      var pointLight = new Four.PointLight({
         radius: 10,
         location: [10, 15, 10]
      });
   
      var view = new Four.Framebuffer(
      var camera = new Four.PerspectiveCamera({
         location: [40, 30, 40]
      });
      
      var mesh = new Four.Mesh({
         loader: meshLoader
         material: new Four.Material({
            diffuse: 0x9F8A60
         })
      });
   
      scene = new Four.Scene();
      
      scene.use(program);
   
      scene.put(mesh);
   
      scene.render(view, camera, function() {
         scene.rotation += 0.25;
      });
   }
   
   setTimeout(main, 3000);
</script>
```

#### Shaders

##### Vertex shader

```glsl
<script class="renderer" type="x-shader/x-vertex">
   #version 100

   precision mediump float
   
   @Camera;

   attribute vec3 a_position;
   attribute vec2 a_uv;
   attribute vec3 a_normal;

   varying vec4 v_position;
   varying vec2 v_uv;
   varying vec3 v_normal;

   uniform Camera u_camera;

   void main()
   {
      vec4 position = vec4(a_position, 1.0);
      vec4 modelViewPosition = u_camera.modelViewMatrix * position;

      v_position = position;
      v_uv = a_uv;
      v_normal = u_camera.normalMatrix * a_normal;

      gl_Position = u_camera.projectionMatrix * modelViewPosition;
   }
</script>
```
##### Fragment shader

```glsl
<script class="renderer" type="x-shader/x-fragment">
   #version 100

   precision mediump float;

   @Material;
   @Light;
   @PointLight;

   uniform Light u_light;
   uniform Material u_material;

   varying vec4 v_position;
   varying vec2 v_uv;
   varying vec3 v_normal;

   void main()
   {
      vec3 base = texture2D(u_image, v_uv).rgb;
      vec3 lighting = base * pointLight(u_light, u_material, v_position, v_normal);

      gl_FragColor = vec4(lighting, 1.0);
   }
</script>
```

## Documentation

See full [documentation](https://github.com/allotrop3/four/wiki).

## Author

Jason Petersen [@allotrop3](https://twitter.com/allotrop3).