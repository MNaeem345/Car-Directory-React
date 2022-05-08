import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Home, Cardirectory, SignIn} from './components'
import reportWebVitals from './reportWebVitals';
import './style.css'
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { firebaseConfig } from './firebaseConfig';
import { FirebaseAppProvider, AuthCheck } from 'reactfire';


let myTitle = 'Car Directory'


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig} suspense = {true}>
    <Provider store={store}>
    <Router>
      <Switch>
        <Route exact path="/"> 
          <Home title= {myTitle}/>
        </Route>
        <Route path='/CarDirectory'>
          <Cardirectory></Cardirectory>
        </Route>
        <Route path='/SignIn'>
          <SignIn></SignIn>
        </Route>
      </Switch> 
    </Router>
    </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
  

reportWebVitals();



