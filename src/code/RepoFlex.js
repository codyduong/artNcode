import React from 'react';
import LangBar from './LangBar.js'

const RepoFlex = (props) => {
  const flexContainerStyle = {
    display: "flex",
    flexWrap: "wrap", 
    flexDirection: "row"
  }

  const repoParentStyle = {
    width: "50%", 
    padding: "0px 0px 0px 0px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const repoOuter = {
    width: "95%",
    height: "90%",
    borderRadius: "25px",
    border: "2px solid #777777",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  }

  const repoInner = {
    width: "90%",
  }

  const repositoryFlex = props.repoData.map((row, index) => {
    return(
      <div key={index} style={repoParentStyle}>
        {/* This is a dumb workaround to get to do relative padding */}
        <div style={repoOuter}>
          <div style={repoInner}>
            <h1><a href={row.link} title="Github Repository">{row.name}</a></h1>
            {row.description}
            <br></br>
            <br></br>
            Updated on: <br></br>
            Created on: <br></br>
            <br></br>
            <LangBar languages={row.languages}/>
            <br></br>
          </div>
        </div>
      </div>
    )
  })

  return <div id="repoFlex" style={flexContainerStyle}>{repositoryFlex}</div>
}

export default RepoFlex;