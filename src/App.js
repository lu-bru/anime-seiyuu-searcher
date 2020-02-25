import React from 'react';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import './styles.scss';
import ContainerIndex from './ContainerIndex'
import ContainerAnime from './ContainerAnime'
import ContainerSeiyuu from './ContainerSeiyuu'

const App = () => {

  return(
    <Router>
		<div className="App">
			<Switch>
				<Route exact path="/">
					<ContainerIndex />
				</Route>
				<Route path="/anime/:id" component={ContainerAnime} />
				<Route path="/seiyuu/:id" component={ContainerSeiyuu} />
			</Switch>
    	</div>
    </Router>
  );
}
export default App;