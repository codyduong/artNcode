import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import RepoFlex from './RepoFlex';
import RepoFetch from './RepoFetch'

class App extends Component {
  state = {
    repos: []
  };

  render() {
    const { repos } = this.state;

    return (
      <div style={{width: "66%", marginLeft:"auto", marginRight:"auto"}}>
        <RepoFlex 
          repoData={repos}
        />
        <RepoFetch />
      </div>
    );
  }
}

ReactDOM.render(<App/> ,document.getElementById('root'))
export default App;

// [
//   {
//     'name': 'lol',
//     'description': 'Lorem ipsum dolor sit amet, mei an deseruisse elaboraret. Duo id duis vitae persius, vix ad alii etiam. Mel et alia reprimique honestatis. Illum atomorum ullamcorper nec eu, et duo corrumpit voluptatum.',
//     'link': 'http://localhost:3000/',
//     'languages': [
//       ['Python',33,'#3572A5'],
//       ['Javascript',33,'#f1e05a'],
//       ['Typescript',20,'#2b7489'],
//       ['HTML',14,'#e34c26'],
//     ]
//   },...
// ]