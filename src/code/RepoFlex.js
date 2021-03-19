import React from 'react';
import LangBar from './RepoLangBar.js'

const RepoFlex = (props) => {
  const flexContainerStyle = {
    display: "flex",
    flexWrap: "wrap", 
    flexDirection: "row"
  }

  const repoOuter = {
    width: "calc(50% - 10px)",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px 0px 5px 0px",
    margin: "5px"
  }

  const repoInner = {
    width: "100%",
    height: "100%",
    borderRadius: "25px",
    border: "2px solid #777777",
    padding: "10px"
  }

  const repositoryFlex = props.repoData.map((row, index) => {
    return(
      <div style={repoOuter} key={index}>
        <div style={repoInner}>
          <h1><a href={row.html_url} title="Github Repository">{row.name}</a></h1>
          {row.description}
          <br></br>
          <br></br>
          <LangBar languages_url={row.languages_url} />
        </div>
      </div>
    )
  })

  return <div id="repoFlex" style={flexContainerStyle}>{repositoryFlex}</div>
}

export default RepoFlex;