export default class CL_personas {
    constructor(n, e, s) {
        this.nombre = n;
        this.edad = e;
        this.sexo = s;
    }

    set nombre(n) {
        this._nombre = n;
    }
    get nombre() {
        return this._nombre;
    }
}