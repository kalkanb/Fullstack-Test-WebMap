import React from 'react';
import ReactDOM from 'react-dom';
import './style/index.css';
import App from './app';
import reportWebVitals from './utils/report-web-vitals';
import { LayoutMainLoader } from './components/utils/layout-main-loader';
import { store } from './store/configure-store';
import { Provider } from 'react-redux';
import ErrorBoundary from './components/utils/error/error-boundary';

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundary>
      <React.Suspense fallback={<LayoutMainLoader />}>
        <App />
      </React.Suspense>
    </ErrorBoundary>
  </Provider>,
  document.getElementById("app")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
