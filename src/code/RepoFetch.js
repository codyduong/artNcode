import React, { useEffect, useState } from 'react';
import RepoFlex from './RepoFlex';

const defRepos = require('./Config.json').FallbackRepos
const REPO_URL = require('./Config.json').RepoUrl

const RepoFetch = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(REPO_URL)
      .then(res => res.json())
      .then(
        (result) => {
          if (result.message) {
            setIsLoaded(true);
            setError(result.message);
          } else {
            setIsLoaded(true);
            setItems(result);
          }
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    console.log(error)
    return (
      <RepoFlex 
        repoData={defRepos}
      />
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <RepoFlex 
        repoData={items}
      />
    );
  }
}

export default RepoFetch;