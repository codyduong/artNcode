import React from 'react';
import LangBar from './RepoLangBar.js'

const RepoFlex = (props) => {
  const flexContainerStyle = {
    display: "flex",
    flexWrap: "wrap", 
    flexDirection: "row"
  }

  const repoOuter = {
    width: "48%",
    height: "100%",
    borderRadius: "25px",
    border: "2px solid #777777",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "5px",
    margin: "5px"
  }

  const repoInner = {
    width: "90%",
  }

  const repositoryFlex = props.repoData.map((row, index) => {
    return(
      <div style={repoOuter} key={index}>
        <div style={repoInner}>
          <h1><a href={row.link} title="Github Repository">{row.name}</a></h1>
          {row.description}
          <br></br>
          <br></br>
          <br></br>
          <LangBar languages={row.languages} />
          <br></br>
        </div>
      </div>
    )
  })

  return <div id="repoFlex" style={flexContainerStyle}>{repositoryFlex}</div>
}

export default RepoFlex;