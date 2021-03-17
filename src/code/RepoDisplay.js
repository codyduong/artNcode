import React, { Component } from 'react';
import RepoFlex from './RepoFlex';

class App extends Component {
  state = {
    repos: [
      {
        'name': 'lol',
        'description': 'lol',
        'link': 'http://localhost:3000/',
        'languages': [
          ['python',50,'#3572A5'],
          ['js',50,'#f1e05a'],
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
      <div style={{width: "50vw", marginLeft:"auto", marginRight:"auto"}}>
        <RepoFlex 
          repoData={repos}
        />
      </div>
      
    );
  }
}

export default App;