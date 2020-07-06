const fs = require('fs');
let db = require('../data/concesionarias.json');

const home ={
  index: function(req,res){
    res.write("Bienvenidos a DH autos!! \n");
    res.write("sucursales: \n");
    db.forEach(function(concesionaria){
      res.write(concesionaria.sucursal + "\n");
    })
    res.end();
  },
//   error:function(req,res){
//     res.status(404).send('404 not found.');
// }
}

module.exports = home