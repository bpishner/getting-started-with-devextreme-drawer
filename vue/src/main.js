import Vue from 'vue';
import VueRouter from 'vue-router';

import 'devextreme/dist/css/dx.common.css';
import 'devextreme/dist/css/dx.light.css';

import App from './App.vue';
import InboxComponent from "./components/Inbox.vue";
import SentMailComponent from "./components/SentMail.vue";
import TrashComponent from "./components/Trash.vue";
import SpamComponent from "./components/Spam.vue";

Vue.config.productionTip = false;

Vue.use(VueRouter);

const routes = [
    { path: "", redirect: "/inbox" },
    { path: "/inbox", component: InboxComponent },
    { path: "/sent-mail", component: SentMailComponent },
    { path: "/trash", component: TrashComponent },
    { path: "/spam", component: SpamComponent }
];

const router = new VueRouter({
    mode: "history",
    routes
});

new Vue({
    render: h => h(App),
    router
}).$mount('#app')