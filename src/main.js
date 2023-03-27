import { createApp } from 'vue'
// import './style.css'
import App from './App.vue'
import router from './router'

import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

const app = createApp(App);

app.use(router);
app.use(VueSweetalert2);
window.Swal =  app.config.globalProperties.$swal;
app.mount('#app');

// createApp(App).use(VueSweetalert2).use(router).mount('#app')
