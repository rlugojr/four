'use strict';

let Light = require('./Light');

const _name = 'point.light';
const _uniforms = ['vec3 ambient', 'vec3 diffuse', 'vec3 specular', 'f radius', 'f intensity', 'vec3 location', 'i type'];

class PointLight extends Light
{
   constructor({ name = _name, path, uniforms = _uniforms, ambient, diffuse, specular, radius, intensity, location } = {})
   {
      super({ name, path, uniforms, ambient, diffuse, specular, intensity, location });

      this.radius = radius;

      this.type = 2;

      this.inheritance = ['Entity', 'Structure', 'Light', 'PointLight'];
   }
}

module.exports = PointLight;
