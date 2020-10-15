import React, { useEffect } from 'react';
import Routes from './config/routes'
import Header from './components/Header';
import Footer from './components/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';



if (localStorage.token) {
    setAuthToken(localStorage.token)
}

const App = () => {
    useEffect(() => {
        store.dispatch(loadUser());
    }, [])

    return (
    <Provider store={store}>
        <div>
            <Header />
                    <Routes />
            <Footer />
        </div>
    </Provider>
)}


export default App;

