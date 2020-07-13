new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta() {
            alert('Estou ti apertando')
        },
        armazenaValor(event) {
            this.valor = event.target.value
        }
    }
})