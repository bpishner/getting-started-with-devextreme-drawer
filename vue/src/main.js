import { createApp } from 'vue'
import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import App from './App.vue'
import router from './router'

const app = createApp(App);
app.use(router);
app.mount('#app');