import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider} from 'react-redux'
import store from "./store/store";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
ReactDOM.render(
  <React.StrictMode>
      <Provider store={store}>
          <App />
          <ToastContainer/>
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

