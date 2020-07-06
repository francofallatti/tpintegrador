const fs = require('fs');
const db = require('../data/concesionarias.json');

const autos ={
  index:function(req,res){
    res.set({'content-type':'text/plain;charset=utf-8'})
    db.forEach(function(auto){
      res.write(auto.sucursal + ": \n\n")
      auto.autos.forEach((auto)=>{
          res.write("Marca: " + auto.marca + "\n");
          res.write("Modelo: " + auto.modelo + "\n");
          res.write("Año: " + auto.anio + "\n"); 
          res.write("------------------\n") 
      })
    })
  },
  id:function(req,res){
    let input = req.params.marca;
    let colorinput = req.params.dato;
    // if(isNaN(colorinput)==false){
    //   let año = colorinput;
    // }
    let comparacion = [];//comparacion marca
    let cont = 0;
    let comp = false
    // let comparacion2 = [];
    console.log(colorinput);
    res.set({'content-type':'text/plain;charset=utf-8'})
    db.forEach(function(auto){
      res.write(auto.sucursal + ": \n\n")
      auto.autos.forEach((dato)=>{
        if(input==dato.marca){
          comparacion.push(dato.marca);
          // comparacion2.push(dato.color);
          // comparacion2.push(dato.anio);
          if(colorinput==undefined){
            res.write("Marca: " + dato.marca + "\n");
            res.write("Modelo: " + dato.modelo + "\n");
            res.write("Año: " + dato.anio + "\n");
            res.write("Color: " + dato.color + "\n");
            res.write("------------------\n")  
          }
          if(colorinput==dato.color || colorinput == dato.anio){
            res.write("Marca: " + dato.marca + "\n");
            res.write("Modelo: " + dato.modelo + "\n");
            res.write("Año: " + dato.anio + "\n");
            res.write("Color: " + dato.color + "\n");
            res.write("------------------\n")
            cont++;
          }
          comp = true;
        }
        
      })
      if(comp==false){
          if(input in comparacion==false){
          res.write("No se encontró en este concesionario \n");
          res.write("------------------------------------------------ \n");
          }
        }
        comp = false;
    })
    if(cont == 0 && colorinput != undefined){
      if(isNaN(colorinput)==false){
        res.write("el modelo de vehiculo con el AÑO ingresado no se encontro en ninguna sucursal");
      }else{
        res.write("el modelo de vehiculo con el COLOR ingresado no se encontro en ninguna sucursal")
      }
    }
    res.end();  
  }
}

module.exports = autos  