import Cliente from './cliente.mjs';
import Impuesto from './impuesto.mjs';


let impC1 = new Impuesto(5000, 1000);
let c1 = new Cliente('Murlach',impC1);


console.log(c1.nombre);
console.log(c1.impuesto);
console.log(c1.calcularImpuesto());