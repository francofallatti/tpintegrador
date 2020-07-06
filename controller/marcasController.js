const fs = require('fs');
let db = require('../data/concesionarias.json');

const marcas = {
  index:function(req,res){
    let Marcas = [];
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write("Marcas por concesionaria: \n");
    db.forEach(function(concesionaria){
      res.write(concesionaria.sucursal + ": \n")
        concesionaria.autos.forEach((marca)=>{
          Marcas.push(marca.marca);
        })
      let sinrep = new Set(Marcas);

      sinrep.forEach((elemento)=>{
        res.write(elemento + "\n");
      });
      res.write("\n")
    })
    res.end();
  },
  id:function(req,res){
    let input = req.params.marca;
    let comparacion = [];
    res.set({'content-type':'text/plain;charset=utf-8'})
    db.forEach(function(concesionaria){
      res.write(concesionaria.sucursal + ": \n\n")
      concesionaria.autos.forEach((marca)=>{
        if(input==marca.marca){
          res.write("Marca: " + marca.marca + "\n");
          res.write("Modelo: " + marca.modelo + "\n");
          res.write("Año: " + marca.anio + "\n"); 
          res.write("------------------\n")
          comparacion.push(marca.marca);
        }  
      })
      if(comparacion.includes(input)==false){
        res.write("La marca no fue encontrada en este concesionario \n");
        res.write("------------------------------------------------ \n");
      }
    })
    res.end();  
  }
}

module.exports = marcas