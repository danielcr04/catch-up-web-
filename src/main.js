import { createApp } from 'vue'
import PrimeVue from 'primevue/config'
import{Avatar,Button, Card, Image,Menu, Menubar,Toolbar,SelectButton} from 'primevue'
import './style.css'
import Aura from '@primevue/themes/aura'
import App from './App.vue'
import i18n from "./i18n.js";
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

const app = createApp(App)
app
    .use(PrimeVue, { ripple: true, theme: { preset: Aura }})
    .component('pv-button', Button)
    .component('pv-card',Card)
    .component('pv-avatar', Avatar)
    .component('pv-menu', Menu)
    .component('pv-menubar', Menubar)
    .component('pv-toolbar', Toolbar)
    .component('pv-image', Image)
    .component('pv-select-button', SelectButton)
    .use(i18n)
    .mount('#app')