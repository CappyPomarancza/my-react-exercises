import React from 'react'

import { BrowserRouter as Router, Route} from 'react-router-dom'
import Dashboard from './views/Dashboard'
import BasicComponents from './views/BasicComponents'
import PassingParameters from './views/PassingParameters'
import Counter from './views/Counter'
import ToDo from './views/ToDo/ToDo';
import Navigation from './views/Navigation'
import FetchingRandomUsers from './views/FetchingRandomUsers/FetchingRandomUsers'


const App = () => (
  <div>
    <Router>
      <div>
        <Navigation />
        <Route path={'/dashboard'} component={Dashboard} />
        <Route path={'/'} exact component={Dashboard} />
        <Route path={'/basic-components'} exatc component={BasicComponents} />
        <Route path={'/passing-parameters/:parameterName'} component={PassingParameters} />
        <Route path={'/counter'} component={()=> <Counter number ={0}/>} />
        <Route path={'/todo'} component={ToDo} />
        <Route path={'/FetchingRandomUsers'} component={FetchingRandomUsers} />
      </div>
    </Router>
  </div>
)



export default App
