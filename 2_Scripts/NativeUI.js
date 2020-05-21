const Diagnostics = require('Diagnostics');
const Scene = require('Scene');
const TouchGestures = require('TouchGestures');
const NativeUI = require('NativeUI');
const Textures = require('Textures');
const Materials = require('Materials');

//PICKER CONFIGURATION (Lembre de ativar as Capabilities nas configuracoes do spark)

//Comece identificando onde esta o objeto que voce quer alterar 
const objetodacena = Scene.root.find("d1");

// Adicione aqui todas as texturas que voce vai usar no picker (lembre de desabilitar a compressao dessas texturas no inspector)
const texture0 = Textures.get('1');
const texture1 = Textures.get('2');

// Selecione um index inicial (qual bolinha ele começa, a primeira index = 0)
const index = 3;

// Crie um objeto de configuracao com dois parametros items e mats, ex.: items[1] representa qual textura vai mostrar pro mats[1] no picker
//mats[1] seria o material aplicado ao se fazer a troca no picker.
const configuration = {

  // O index do item selecionado no picker
  selectedIndex: index,

  // As texturas que serão usadas nos seletores do picker
  items: [
    {image_texture: texture0},
    {image_texture: texture1},
  ],
  mats:[
    {material: Materials.get("material0")},
    {material: Materials.get("material1")},
  ]

};

//declaracao do picker
const picker = NativeUI.picker;

// aplicacao da configuracao no picker
picker.configure(configuration);

// Trocando o estado do picker para visivel
picker.visible = true;

//picker configurado trocar materiais 
picker.selectedIndex.monitor().subscribe(function(val) {
   objetodacena.material = configuration.mats[val.newValue].material;
});