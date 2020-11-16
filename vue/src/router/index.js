import { createRouter, createWebHistory } from 'vue-router';

import InboxComponent from "../components/Inbox.vue";
import SentMailComponent from "../components/SentMail.vue";
import TrashComponent from "../components/Trash.vue";
import SpamComponent from "../components/Spam.vue";

const routes = [
    { path: "", redirect: "/inbox" },
    { path: "/inbox", component: InboxComponent },
    { path: "/sent-mail", component: SentMailComponent },
    { path: "/trash", component: TrashComponent },
    { path: "/spam", component: SpamComponent }
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;