/*
### Obtención del TLD ###

  Dado una url. Devolver el TLD de la misma. Si no es posible, devolver un null.

Ejemplos

  getTLD(‘tahichemena.es’) ➞ ‘.es’
  getTLD(‘epicgames.com/store/es-ES’) ➞ ‘.com’
  getTLD(5666) ➞ null
  getTLD(‘mojo_picón’) ➞ null

Especificaciones

  Cuidado cuando el TLD no es el final de la url. En ese caso habrá que extraerlo correctamente
  El split es tu amigo.
  Recomiendo usar TDD en este. Hay un caso que se puede pasar por alto si no.


*///vale guay vamos  prueba ahora OLEEEE MAQUINAAAAapañao jajajaj
//subo repo y así podeis usarlo para prácticas y repaso
//primero hay que decirle si no es un numero, si no es numero, que entre y busque el punto//PERFESTO
function getTLD(web){

  if(isNaN(web)) {
    if(web.includes(".")){

      const cutTLD = web.split(".")


      if(cutTLD[cutTLD.length -1].includes('/')){

        const TLD = cutTLD[cutTLD.length -1].split("/")

        return `.${TLD[0]}`
      }
      //numbers[numbers.length - 1]
      return `.${cutTLD[cutTLD.length -1]}`
    }else {
      return false
    }
  }else{
    return false
  }
}
//porque¿ xDDD paso prueba
getTLD('epicgames.com/store/es-ES')

module.exports = getTLD;
