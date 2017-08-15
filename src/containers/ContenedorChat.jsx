import React, { Component } from 'react';
import EstudiantesDestacados from '../components/EstudiantesDestacados';
import ContenedorTabs from './ContenedorTabs.jsx';


export default class ContenedorChat extends Component {
  render() {
    return(
			<div className="col-md-offset-8 col-xs-12 col-sm-4 col-md-4 col-lg-4 moviento-fijo">
        		<EstudiantesDestacados />
				<ContenedorTabs />
			</div>

    	)

  }
}
