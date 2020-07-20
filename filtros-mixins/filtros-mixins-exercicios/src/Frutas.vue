<template>
    <div>
        <div>{{ global }}</div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
</template>

<script>
import FrutasMixins from './FrutasMixins.js'
import usuarioMixins from './usuarioMIxins.js'

export default {
    mixins: [ FrutasMixins, usuarioMixins ],
    created() {
        console.log('Created - frutas.vue')
    }
}
</script>

<style>

</style>