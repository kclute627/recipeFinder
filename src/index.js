import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Favs from './components/Favs';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/index';



const store = createStore(rootReducer);

store.subscribe(() => console.log('store', store.getState()));



ReactDOM.render(
<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route exact path='/' component={App}/>
            <Route path='/favs' component={Favs}/>

        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root') );


