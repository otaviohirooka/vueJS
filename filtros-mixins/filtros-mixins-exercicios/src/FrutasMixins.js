export default {
    data() {
        return {
            fruta: '',
            frutas: [ 'melancia', 'laranja', 'banana']
        }
    },
    methods: {
        add() {
            this.frutas.push(this.fruta)
            this.fruta = ''
        }
    }
}