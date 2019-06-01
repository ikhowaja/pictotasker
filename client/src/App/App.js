import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import List from './pages/List';
import Header from './components/header'
import Footer from './components/footer'
import Chat from './views/chat'
//import Login from './views/login'
import Signup from './views/signup'
import Dashboard from './views/dashboard'
import Profile from './views/profile'
import Videochat from './views/videochat';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers'
import LoadingComponent from './components/loading/loading'



const store = createStore(
  reducers,
  {
    auth: { authenticated: localStorage.getItem('token') }
  },
  applyMiddleware(reduxThunk)
);

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data:''
    };
  }
async componentDidMount() {
    const response = await fetch('/users')
    const data = await response.json()
    this.setState({ data: data })
  }

  render() {
    console.log(this.state.data)
    if (this.state.data.length === 0 ||this.state.data ===undefined) 
    {
      return (<LoadingComponent />);
    }
    const App = () => (
      <Provider store={store}>
      <div>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/list' component={List}/>
          <Route path='/chat' component={Chat}/>
          {/* <Route path='/login' component={Login}/> */}
          <Route path='/signup' component={Signup} />
          <Route path='/profile' component={Profile} />
          <Route path="/dashboard" render={()=><Dashboard name={this.state.data} />} />
          <Route exact path='/videochat' render={(props) => <Videochat name={this.state.data} />} />
         {/* // <Route path='/dashboard' component={Dashboard} /> */}

        </Switch>
        <Footer />
      </div>
    </Provider>
    )
    return (
      <Switch>
        <App/>
      </Switch>
    );
  }
}

export default App;
