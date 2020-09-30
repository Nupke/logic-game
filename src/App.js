import React from 'react';
import {BrowserRouter as Router , Link , Route, Switch} from 'react-router-dom'
import CardBoard from "./components/cardBoard";
import Cards from "./components/cards";
import {useSelector} from "react-redux";
import Swal from "sweetalert2";
import Timer from "./components/Timer";

function App() {
    const allItems = useSelector(state => state.app.example);
    const currentCount = useSelector(state => state.app.count);


  return (
    <div className="App">
        <Router>
          <nav className='navbar navbar-expand navbar-light bg-white border-bottom'>
          <ul className='navbar-nav mr-auto'>
              <li className='nav-item offset-1p'>
                  <a className='nav-link'><Link to={'/'}>Home</Link></a>
              </li>
              <li className='nav-item offset-1p'>
                  <a className='nav-link'><Link to={'/component'}>Component</Link></a>
              </li>
          </ul>
          </nav>
            <div className='container-fluid vertical-center'>
              <div className="row justify-content-center">
                  <div className=" mx-auto  text-center">
                      <Switch>
                          <Route exact path={'/'} component={CardBoard}/>

                          <div className='row justify-content-center'>
                              {allItems.length > 19 &&
                                  <h2>done {currentCount}/{allItems.length} <Timer/> </h2>
                              }

                              <div className='row justify-content-center'>
                                  <Route exact path={'/component'} component={Cards}/>
                              </div>
                          </div>
                      </Switch>

                  </div>
                  {/* /.text-center */}
              </div>
            </div>
        </Router>
      {/* /.row */}
    </div>
  );
}

export default App;
