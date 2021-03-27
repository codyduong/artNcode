// import React, { Suspense, useEffect, useState } from 'react';
import * as React from "react"
import { Suspense, useEffect, useState } from "react"

const ArtFlex = React.lazy(() => import('./ArtFlex.tsx'))

const defaultRepos = require('./Art.json') //(require(require('./Config.json').FallbackRepos) ...Nested requires don't work :( 
const REPO_URL = require('./Config.json').ArtUrl

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
      <artFlex 
        artData={defaultRepos}
      />
    );
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Suspense fallback={<div>Loading...</div>}>
        <artFlex 
          artData={items}
        />
      </Suspense>
    );
  }
}

export default RepoFetch;