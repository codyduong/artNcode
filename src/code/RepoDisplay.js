import React, { Component } from 'react';
import RepoFlex from './RepoFlex';

class App extends Component {
  state = {
    repos: [
      {
        'name': 'lol',
        'description': 'Lorem ipsum dolor sit amet, mei an deseruisse elaboraret. Duo id duis vitae persius, vix ad alii etiam. Mel et alia reprimique honestatis. Illum atomorum ullamcorper nec eu, et duo corrumpit voluptatum.',
        'link': 'http://localhost:3000/',
        'languages': [
          ['Python',33,'#3572A5'],
          ['Javascript',33,'#f1e05a'],
          ['Typescript',14,'#ff15ff'],
          ['C',20,'#ccc000'],
        ]
      },
      {
        'name': 'lol2',
        'description': 'lol2',
        'link': '',
      },
      {
        'name': 'lol3',
        'description': 'lol3',
        'link': '',
      },
    ]
  };

  removeRepo = index => {
    const { repos } = this.state;

    this.setState({
      repos: repos.filter((character, i) => {
        return i !== index;
      })
    });
  }

  addRepo = repo => {
    this.setState({ repos: [...this.state.repos, repo] });
  }

  render() {
    const { repos } = this.state;

    return (
      <div style={{width: "100vw", marginLeft:"auto", marginRight:"auto"}}>
        <RepoFlex 
          repoData={repos}
        />
      </div>
      
    );
  }
}

export default App;