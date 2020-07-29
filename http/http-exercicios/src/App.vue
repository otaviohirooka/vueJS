<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens"
			:key="mensagem.texto"
			:variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Cavaleiro:">
				<b-form-input type="text" size="lg"
					v-model="cavaleiro.nome"
					placeholder="Informe o nome"></b-form-input>
			</b-form-group>
			<b-form-group label="Email:">
				<b-form-input type="email" size="lg"
					v-model="cavaleiro.email"
					placeholder="Informe o e-mail"></b-form-input>
			</b-form-group>
			<hr>
			<b-button @click.prevent="salvar"
				size="lg" variant="primary">Salvar</b-button>
				<b-button @click="obterCavaleiros"
					size="lg" variant="success" class="ml-2">Obter Cavaleiros</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(cavaleiro, id) in cavaleiros" :key="id">
				<strong>Cavaleiro: </strong> {{ cavaleiro.nome }}<br>
				<strong>Email: </strong> {{ cavaleiro.email }}<br>
				<strong>ID: </strong> {{ cavaleiro.id }}<br>
				<b-button variant="warning" size="lg"
					@click="carregar(id)">Carregar</b-button>
				<b-button variant="danger" size="lg" class="ml-2"
					@click="excluir(id)">Excluir</b-button>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	data() {
		return {
			mensagens: [],
			cavaleiros: [],
			id: null,
			cavaleiro: {
				nome: '',
				email: ''
			}
		}
	},
	methods: {
		limpar() {
			this.cavaleiro.nome = ''
			this.cavaleiro.email = ''
			this.id = null
			this.mensagens = []
		},
		carregar(id) {
			this.id = id
			this.cavaleiro = {...this.cavaleiros[id]}
		},
		excluir(id) {
			this.$http.delete(`/cavaleiro/${id}.json`)
				.then(() => this.limpar())
				.catch(err => {
					this.mensagens.push({
						texto: 'Problema para excluir!',
						tipo: 'danger'
					})
				})
		},
		salvar() {
			const metodo = this.id ? 'patch' : 'post'
			const finalUrl = this.id ? `/${this.id}.json` : '.json'
			this.$http[metodo](`cavaleiro${finalUrl}`, this.cavaleiro)
				.then(() => {
					this.limpar()
					this.mensagens.push({
						texto: 'Operação realizada com sucesso!',
						tipo: 'success'
					})
				})
		},
		obterCavaleiros() {
			this.$http.get('cavaleiro.json').then(res => {
				this.cavaleiros = res.data
				console.log(res.data)
			})
		}
	}
	// created() {
	// 	this.$http.post('usuarios.json', {
	// 		nome: 'Afrodite',
	// 		email: 'afro@peixes.com'
	// 	}).then(res => console.log(res))
	// }
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
