import React from 'react';
import { Jumbotron } from 'reactstrap';
import DB from './DB/DB.json'
import MainTable from './components/MainTable/MainTable'

const App = () => {

  return (
    <div className="wrapper">
      <Jumbotron>
        <MainTable list={DB} />
      </Jumbotron>
    </div>
  )
}

export default App