new Vue({
    el: '#desafio',
    data: {
        valor: 0,
        resultado: 0
    },
    watch: {
        resultado() {
            setTimeout(() => {
                this.valor = 0
            }, 5000);
        }
    },
    methods: {
        calculaResultado() {
            return this.valor == 37 ? this.resultado = 'Valor Igual' : 
                                      this.resultado = 'Valor Diferente'
        }
    }
});