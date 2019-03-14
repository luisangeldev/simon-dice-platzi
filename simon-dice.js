const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');

class Juego {
    constructor() {
        this.inicializar();
        this.generarSecuencia();
        this.siguienteNivel();
        this.agregarEventosClick();
    }

    inicializar() {
        this.elegirColor = this.elegirColor.bind(this);
        btnEmpezar.classList.add('hide');
        this.nivel = 1;
        this.colores = {
            celeste,
            violeta,
            naranja,
            verde
        }
    }

    agregarEventosClick() {
        // Obtenemos los indices del objeto this.colores y le asignamos el evento
        Object.keys(this.colores).map((color) => {
            this.colores[color].addEventListener('click', this.elegirColor);
        });
    }

    generarSecuencia() {
        this.secuencia = new Array(10).fill(0).map(n => Math.floor(Math.random() * 4));
    }

    siguienteNivel() {
        this.iluminarSecuencia();
    }

    numeroAColor(numero) {
        switch (numero) {
            case 0:
                return 'celeste';
            case 1:
                return 'violeta';
            case 2:
                return 'naranja';
            case 3:
                return 'verde';
        }
    }

    apagarColor(color) {
        this.colores[color].classList.remove('light');
    }

    iluminarColor(color) {
        this.colores[color].classList.add('light');
        setTimeout(() => this.apagarColor(color), 350);
    }

    iluminarSecuencia() {
        // Recorremos el array de generarSecuencia() dependiendo del nivel
        for (let i = 0; i < this.nivel; i++) {
            const color = this.numeroAColor(this.secuencia[i]);
            setTimeout(() => {
                this.iluminarColor(color) 
            }, 1000 * i);;
        }
    }

    elegirColor(ev) {
        console.log(this);
    }
}


function empezarJuego() {
    let juego = new Juego();
    window.juego =  juego;
}