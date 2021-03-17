import React from 'react';

const LangBar = (props) => {

  const LangBar = props.languages?.map((row) => {
    const width = row[1].toString()+'%'
    const color = row[2]
    const barStyle = {
      display: "inline-block", 
      height: "100%", 
      width: width,
      backgroundColor: color
    }

    return(
      <span title={row[0]} key={row[0]}>
        <div style={barStyle}>
        </div>
      </span>
    )
  }) ?? null

  const OuterStyle = {
    width: "100%", 
    height: "15px", 
    display: "block", 
    whiteSpace: 'nowrap', 
    fontSize: "0px",
    borderRadius: "25px",
    overflow: "hidden"
  }

  return LangBar ? 
  <div style={OuterStyle}>
    {LangBar}
  </div> : null
}

export default LangBar;

{/* <span title="{{lang.name}} {{lang.percent | append: '%'}}" id="{{lang.name}}">
  <div style="background-color: {{lang.color | escape}}; height: 100%; width: {{lang.percent | append: '%'}}; display: inline-block"
    id="{{repo.name | append: lang.name}}">
  </div>
</span> */}