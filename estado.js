var estado = function (config) {
  this.menssagem = '';
  this.dica      = config.dica || 'Não há dicas!';
  this.isRiddle  = config.charada;
  this.resposta  = new RegExp(config.resposta || '', 'i');

  this.adicionarParagrafo = function (menssagem) {
    this.menssagem += '<p class="black-text">' + menssagem +'</p>';
  };

  for (var paragrafo in config.paragrafos) {
    this.adicionarParagrafo(config.paragrafos[paragrafo]);
  }
};