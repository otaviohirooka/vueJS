import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'
// import Usuario from './components/usuario/Usuario.vue'
// import UsuarioLista from './components/usuario/UsuarioLista'
// import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
// import UsuarioEditar from './components/usuario/UsuarioEditar'
import Menu from './components/template/Menu'
import MenuAlt from './components/template/MenuAlt'

Vue.use(Router)

const Usuario = () => import(/* webpackChunckName: "usuario" */'./components/usuario/Usuario')
const UsuarioLista = () => import(/* webpackChunckName: "usuario" */'./components/usuario/UsuarioLista')
const UsuarioEditar = () => import(/* webpackChunckName: "usuario" */'./components/usuario/UsuarioEditar')
const UsuarioDetalhe = () => import(/* webpackChunckName: "usuario" */'./components/usuario/UsuarioDetalhe')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition) {
        if(savedPosition) {
            return savedPosition
        } else if(to.hash) {
            return { selector: to.hash }
        } else {
            return { x: 0, y: 0 }
        }
    },
    routes: [{
        name: 'inicio',
        path: '/',
        // component: Inicio
        components: {
            default: Inicio,
            menu: Menu
        }
    }, {
        path: '/usuario',
        // component: Usuario,
        components: {
            default: Usuario,
            menu: MenuAlt,
            menuInferior: MenuAlt
        },
        props: true,
        children: [
            { path: '', component: UsuarioLista },
            { path: ':id', component: UsuarioDetalhe, props: true,
                beforeEnter: (to, from, next) => {
                    console.log('Antes das rotas - usuario detalhe')
                    next()
                } },
            { path: ':id/editar', component: UsuarioEditar, props: true,
                name: 'editarUsuario' },
        ]
    }, {
        path: '/redirecionar',
        redirect: '/usuario'
    }, {
        path: '*',
        redirect: '/'
    }]
})

router.beforeEach((to, from, next) => {
    console.log('Antes das rotas - global')
    next()
})

export default router