import React, { useEffect, useState } from 'react';
import RepoFlex from './RepoFlex';

const REPO_URL = 'https://api.github.com/users/codyduong/repos'

// function _langFix(items)  {
//   var newItems = []
//   items.map(item => {
//     console.log('working')

//     var langList = []
//     var langTotal = 0
//     var langFinal = []
//     var langOther = 0
//     fetch(item.languages_url)
//       .then(res => res.json())
//       .then(
//         (result) => {
//           var lang
//           for (lang in result) {
//             //console.log(lang)
//             langList.push(lang)
//             langTotal += result[lang]
//           }
//           for (lang in result) {
//             var toPush = [lang, (result[lang]/langTotal)*100, colors[lang]?['color'] : null ]
//             if (toPush[1] > MIN_PERCENTAGE_THRESHOLD) {
//               langFinal.push(toPush)
//             } else {
//               langOther += (result[lang]/langTotal)*100
//             }
//           }
//           langFinal.push(['Other', langOther, '#3572A5'])
          
//           item['languages'] = langFinal
//           newItems.push(item)
//         },
//         (error) => {
//           console.log('oop')
//         }
//       )
//   })
//   return newItems;
// }

const RepoFetch = () => {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(REPO_URL)
      .then(res => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
  }, [])

  if (error) {
    return <div>Error: {error.message}</div>;
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