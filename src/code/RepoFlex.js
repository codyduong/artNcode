import React from 'react';

const RepoBody = props => { 
  const rows = props.repoData.map((row, index) => {
      return (
          <tr key={index}>
              <td>{row.name}</td>
              <td>{row.job}</td>
          </tr>
      );
  });

  return <tbody>{rows}</tbody>;
}


const ExampleRepo = (props) => {
  const flexContainer = {
    display: "flex",
    flexWrap: "wrap", 
    flexDirection: "row"
  }

  const repositoryFlex = props.repoData.map((row, index) => {
    return(
      <div id={index} style={{width: "50%", padding: "0px 0px 0px 0px"}}>
        <h1><a href="" title="Github Repository">{row.name}</a></h1>
          <div>
            <h3>Languages</h3>
            <div>
            repo.description
            <br></br>
            <br></br>
            Updated on: <br></br>
            Created on: 
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    )
  })

  return <div id="repoFlex" style={flexContainer}>{repositoryFlex}</div>
}

export default ExampleRepo;

{/* 
<div id="{{repo.name}}">
  <h1><a href="{{repo.permalink}}" title="Github Repository">{{ repo.name | escape }}</a></h1>
  <h3>Languages</h3>
  <div style="width:100%; height: 15px; display: block; white-space: nowrap; font-size: 0px" id="bar">
    {% for lang in repo.languages %}
                {% if lang.percent != '0%' %}
                <span title="{{lang.name}} {{lang.percent | append: '%'}}" id="{{lang.name}}">
      <div style="background-color: {{lang.color | escape}}; height: 100%; width: {{lang.percent | append: '%'}}; display: inline-block"
        id="{{repo.name | append: lang.name}}">
      </div>
    </span>
    {% endif %}
    {% endfor %}
    <span title="Other {{repo.languages_other_percent | append: '%'}}" id="other">
      <div style="background-color: white; height: 100%; width: {{repo.languages_other_percent | append: '%'}}; display: inline-block"
        id="{{repo.name | append: lang.name}}">
      </div>
    </span>
  </div>
  <div>
    {{ repo.description }}
    <br></br>
    <br></br>
      Updated on: {{ repo.updated }}<br></br>
      Created on: {{ repo.created }}
    <br></br>
    <br></br>
    <br></br>
  </div>
</div> 
*/}