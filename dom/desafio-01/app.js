new Vue ({
    el: '#desafio',
    data: {
        nome: 'Otávio',
        idade: 31,
        linkImg: 'imgs/img1.jpg'
    },
    methods: {
        multipleAge() {
            return this.idade * 3
        },
        randomNumber() {
            return Math.random()
        }
    }
})