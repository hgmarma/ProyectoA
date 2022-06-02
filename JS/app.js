/*
let ingreseVariedad = prompt("Ingrese variedad: 1-Margharite 2-Quattro Formaggi  3-Funghi  4-Provollone  5-Della Casa  6-Veggie 7-ESC");
let ingreseCantidad = Number(prompt ("Ingrese Cantidad")); 

 
    switch(ingreseVariedad) {
        case "1":
          alert("Usted eligio: " + ingreseCantidad +  " Margherite  " + " y debera abonar: $" + (ingreseCantidad*1250));
          break;
        case "2": 
            alert(" Usted eligio: " + ingreseCantidad + " Quattro Formaggi  " + " y debera abonar: $" + (ingreseCantidad*1350));
          break;
        case "3":
            alert(" Usted eligio: " + ingreseCantidad  + " Funghi " + " y debera abonar: $" + (ingreseCantidad*1450));
          break;
          case "4":
            alert(" Usted eligio: " + ingreseCantidad + " Provolone " + " y debera abonar: $" + (ingreseCantidad*1550));
          break;
        case "5":
            alert(" Usted eligio: " + ingreseCantidad  + " Della Casa " + " y debera abonar: $" + (ingreseCantidad*1650));
         break;
         case "6":
            alert(" Usted eligio: " + ingreseCantidad  + " Veggie "+ " y debera abonar: $" + (ingreseCantidad*1750));
         break;
        default:
            alert ("No tenemos esa variedad");  
            break;
} 

alert("GRAZIE PER AVERCI SCELTO BUON APPETITO");

--------------------------------------------------------------------------------------------------------------

*/


let variedad = prompt("Ingrese Variedad deseada:  Margharite / Quattro Formaggi  / Funghi  / Provollone  / Della Casa  / Veggie");
let cantidad = Number(prompt("Ingrese Cantidad"));
let valor = 1500;
let descuento = 1.2


for (let index = 0; index <= 1; index++) {

    if (cantidad>=3){
        alert("Usted eligio" + " " +  cantidad + " " +  variedad + "abonara =" + (cantidad*valor)/descuento);
        break;
    }
    else (cantidad<=1);{
        alert("Usted eligio" + " " + cantidad + " " +  variedad + "abonara =" + valor);
        break;
    }
    alert("GRAZIE PER AVERCI SCELTO BUON APPETITO");
}























  
  

  

  





  
