import React, { Component } from 'react';
import ExampleRepo from './RepoFlex';

class App extends Component {
  state = {
    repos: [
      {
        'name': 'lol',
        'job': 'lol',
      },
      {
        'name': 'lol2',
        'job': 'lol2',
      },
      {
        'name': 'lol3',
        'job': 'lol3',
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
      <div className="container">
        <ExampleRepo 
          repoData={repos}
        />
      </div>
      
    );
  }
}

export default App;