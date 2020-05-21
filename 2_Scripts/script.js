// MODULOS
const Materials = require('Materials');
const Scene = require('Scene');
const NativeUI = require('NativeUI');
const Textures = require('Textures');

// Encontrando objetos
const plane = Scene.root.find('plane0');

// Selecione em qual o número seu efeito inicia, o valor 0 significa o 1°
const index = 0;

// configuração do objeto
const configuration = {

  // Index do objeto selecionado no picker
  selectedIndex: index,

  // Texturas dos botões
  // Make sure these textures are set to uncompressed or this *will not work*
  items: [
    {image_texture: Textures.get('blue')},
    
  ],

  // OPTIONAL:
  // In this example we are switching materials
  // so I have included an object of materials
  // that matches the order of the textures above
  mats: [
    {material: Materials.get("blue")},
   
  ]
};


//@paulofreitas.py