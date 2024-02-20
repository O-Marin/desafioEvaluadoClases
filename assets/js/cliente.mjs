import Impuesto from './impuesto.mjs';

class Cliente{
    constructor(nombre,impuesto){
        this._nombre = nombre;
        this._impuesto = impuesto;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(newNombre){
        this._nombre = newNombre;
    }

    get impuesto(){
        return this._impuesto;
    }

    set impuesto(impuesto){
        this._impuesto = impuesto;
    }
    calcularImpuesto(){
        //Fórmula: ((𝑚𝑜𝑛𝑡𝑜𝐵𝑟𝑢𝑡𝑜𝐴𝑛𝑢𝑎𝑙 − 𝑑𝑒𝑑𝑢𝑐𝑐𝑖𝑜𝑛𝑒𝑠) * 21%)
        return `${(this.impuesto.montoBrutoAnual - this.impuesto.deducciones) * 0.21}`;
    }
}




export default Cliente;

