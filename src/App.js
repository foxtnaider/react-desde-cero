import React from 'react';
import "./styles/styles.scss";
import Banner from './Banner'
import CourseGrid from './CourseGrid';
import Formulario from './Formulario'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={Banner} />
      <Route path="/cursos" component={CourseGrid} />
      <Route path="/formulario" component={ () => <Formulario name="Pagina de contacto" /> } />
      <Route component={
        () => (
          <div className="ed-grid">
            <h1>Error 404</h1>
            <span>Pagina no encontrada</span>
          </div>
          
        )
      } />
    </Switch>
    
  </Router>
)

export default App;
