import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RepoFetch from './RepoFetch'

class App extends Component {

  render() {

    return (
      <div style={{width: "100%", marginLeft:"auto", marginRight:"auto"}}>
        <RepoFetch />
      </div>
    );
  }
}

ReactDOM.render(<App/> ,document.getElementById('root'))
export default App;