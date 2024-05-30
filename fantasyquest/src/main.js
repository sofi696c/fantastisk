import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// Add FontAwesome icons to the library
library.add(faCalendar);

// Create the Vue app
const app = createApp(App);

// Register the FontAwesome component globally
app.component('font-awesome-icon', FontAwesomeIcon);

// Use the router
app.use(router);

// Mount the app
app.mount('#app');
