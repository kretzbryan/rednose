import React, { useEffect } from 'react';
import Routes from './config/routes'
import Header from './components/Header';
import Footer from './components/Footer';

// Redux
import { Provider } from 'react-redux';
import store from './store';
import setAuthToken from './utils/setAuthToken';
import { loadUser } from './actions/auth';


axios.defaults.baseURL = 'http://localhost:4000';




const App = () => {
    useEffect(() => {
        if (localStorage.token) {
            setAuthToken(localStorage.token)
        }
        loadUser();
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

