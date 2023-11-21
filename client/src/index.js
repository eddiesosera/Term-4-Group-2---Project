import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter from react-router-dom
import App from './App'; // Import your main application component

import { ConfigProvider } from 'antd';
// import 'antd/dist/antd.css'; // Import Ant Design styles

const { getDesignToken, useToken } = window.antd?.theme || {};

const config = {
  token: {
    colorPrimary: '#FF8328',
    colorPrimaryBg: '#333333',
  },
};

const globalToken = getDesignToken?.(config);

const root = document.getElementById('root');
const rootElement = createRoot(root);

rootElement.render(
  <BrowserRouter>

    <ConfigProvider theme={config}>
      <App />
    </ConfigProvider>

  </BrowserRouter>
);