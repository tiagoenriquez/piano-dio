class Nota {
    /** @type {string} */ id;
    /** @type {string} */ tecla;
    /** @type {string} */ arquivo;
    /** @type {string} */ corNormal;
    /** @type {string} */ corTocada;
    
    /**
     * 
     * @param {string} id 
     * @param {string} tecla 
     */
    constructor(id, tecla) {
        this.id = id;
        this.tecla = tecla;
        this.arquivo = `./audios/${this.id}.wav`;
        this.colorir();
    }

    /**
     * @private
     */
    colorir() {
        if (this.id.length === 2) {
            this.corNormal = 'white';
            this.corTocada = 'rgb(224, 224, 224)';
        } else {
            this.corNormal = 'rgb(32, 32, 32)';
            this.corTocada = 'rgb(24, 24, 24)';
        }
    }
}