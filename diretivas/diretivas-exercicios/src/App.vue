<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'Usando diretiva v-text'"></p>
		<p v-html="'Usando diretivas <strong>v-hml</strong>'"></p>
		<hr>
		<p v-destaque-local="cor">Usando diretiva personalisada</p>
		<p v-destaque:fundo.atrasar="'blue'">Usando diretiva personalisada</p>
		<p v-destaque:atrasar="'lightblue'">Usando diretiva personalisada</p>
		<hr>
		<p v-destaque-local:fundo.atrasar.alternar="{co1: 'green', cor2: 'red', atraso: 2000, intervalo: 200}">Usando diretiva personalisada</p>
		<p v-destaque-local:atrasar="{co1: 'green', atraso: 5000}">Usando diretiva personalisada</p>

		<!-- <p v-nomeDiretiva:argumento.modificador1.modificador2="valor"></p> -->
	</div>
</template>

<script>
export default {
	components: {},
	directives: {
		'destaque-local': {
			bind(el, binding, vnode) {
				const aplicarCor = cor => {
					if(binding.arg === 'fundo') {
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}
				let atraso = 0
				if(binding.modifiers['atrasar']) atraso = binding.value.atraso

				const cor1 = binding.value.cor1
				const cor2 = binding.value.cor2
				let corAtual = cor1
				setTimeout(() => {
					if(binding.modifiers['alternar']) {
						setInterval(() => {
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(binding.value)
						}, binding.value.intervalo);
					} else {
						aplicarCor(binding.value.cor1)
					}
				}, atraso);
			}
		}
	},
	data() {
		return {
			cor: 'red'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
