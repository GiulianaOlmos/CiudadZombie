/* El objeto this es un objeto literal que se encuentra incompleto.
 Solo tiene asignadas algunas de sus propiedades y ningun metodo */
var Jugador = {
  /* el sprite contiene la ruta de la imagen
  */
  sprite: 'imagenes/auto_rojo_abajo.png',
  x: 130,
  y: 160,
  ancho: 15,
  alto: 30,
  velocidad: 10,
  vidas: 5,
  // Hay que agregar lo que falte al Jugador: movimientos, perdida de vidas,
  // y todo lo que haga falta para que cumpla con sus responsabilidades
  movimientos: function(movX,movY){
    this.x= this.x + movX;
    this.y= this.y + movY;
  },
  perderVidas: function(cantVidas){
    this.vidas = this.vidas - cantVidas; 
  },
  cambiarSprite: function(tecla){
    if (tecla == 'izq') {
      this.sprite = "imagenes/auto_rojo_izquierda.png";
      this.ancho= 30;
      this.alto=15;
    }
    if (tecla == 'arriba') {
      this.sprite = "imagenes/auto_rojo_arriba.png";
      this.ancho= 15;
      this.alto= 30;
    }
    if (tecla == 'der') {
      this.sprite = "imagenes/auto_rojo_derecha.png";
      this.ancho= 30;
      this.alto=15;
    }
    if (tecla == 'abajo') {
      this.sprite = "imagenes/auto_rojo_abajo.png";
      this.ancho= 15;
      this.alto= 30;
    }
  }
}
