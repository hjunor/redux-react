import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Routes from './routes';
import './config/ReactotronConfig'
import store from './store/index'
import GlobalStyle from './styles/global'
import Header from './components/Header/index';
const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Header />
        <GlobalStyle />
        <Routes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

