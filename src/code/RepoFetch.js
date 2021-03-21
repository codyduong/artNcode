import React, { Suspense, useEffect, useState } from 'react';

const RepoFlex = React.lazy(() => import('./RepoFlex.js'))

const defaultRepos = require('./Repos.json') //(require(require('./Config.json').FallbackRepos) ...Nested requires don't work :( 
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
        repoData={defaultRepos}
      />
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Suspense fallback={}>
        <RepoFlex 
          repoData={items}
        />
      </Suspense>
    );
  }
}

export default RepoFetch;