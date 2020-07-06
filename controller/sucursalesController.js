const fs = require('fs');
let db = require('../data/concesionarias.json');

const conc ={
  index: function(req,res){
    res.set({'content-type':'text/plain;charset=utf-8'})
    res.write("Bienvenidos a DH autos!! \n\n");
    res.write("sucursales: \n");
    db.forEach(function(concesionaria){
      res.write("Sucursal: " + concesionaria.sucursal + "\n");
      res.write("Dirección: " + concesionaria.direccion + "\n");
      res.write("Teléfono: " + concesionaria.telefono + "\n")
      res.write('\n\n');
    })
    res.end();
  },
  mostrar:function(req,res){
    let info = req.params.sucursal;
    let coche = [];
    let comprobante = false;
    res.set({'content-type':'text/plain;charset=utf-8'})
    console.log(info)
    db.forEach(function(concesionaria){
      if(concesionaria.sucursal==info){
        res.write("Sucursal: " + concesionaria.sucursal + "\n\n");res.write("Dirección: " + concesionaria.direccion + "\n\n");
        res.write("Teléfono: " + concesionaria.telefono + "\n\nVehículos: \n\n");
        concesionaria.autos.forEach((auto)=>{
          res.write("Marca: " + auto.marca + "\n");
          res.write("Modelo: " + auto.modelo + "\n");
          res.write("Año: " + auto.anio + "\n"); 
          res.write("------------------\n")
          coche.push(auto);
          comprobante = true;
        })
       }
      
    })
    if(comprobante==true){
      res.write("\n");
      res.write("Cantidad de vahículos: " + coche.length);
    }
    res.end("La sucursal ingresada no existe ");
  }
}
module.exports = conc