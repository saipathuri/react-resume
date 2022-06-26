import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import store from './store/store';
import { createRoot } from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Provider store={store}>
    <App />
</Provider>);
registerServiceWorker();
