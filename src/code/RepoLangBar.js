import React, {useState} from 'react';

//STYLING for HiddenLangBar
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap", 
  flexDirection: "row",
  justifyContent: "space-around"
}

const HiddenLangBar = (props) => {
  const HiddenLangBar = props.languages?.map((row) => {
    const id = row[0] + "hidden"
    const color = row[2]
    const dotStyle = {
      height: "10px",
      width: "10px",
      borderRadius: "50%",
      backgroundColor: color,
      display: "inline-block",
    }

    return(
      <div style={{padding: "1%"}} key={id}>
        <div style={dotStyle}></div><div style={{display: "inline-block", paddingLeft: "5px"}}>{row[0]}</div>
      </div>
    )
  }) ?? null
  
  return <div style={flexContainerStyle}>{HiddenLangBar}</div>
}

//STYLING for LangBar
const OuterStyle = {
  width: "100%", 
  height: "15px", 
  display: "block", 
  whiteSpace: 'nowrap', 
  fontSize: "0px",
  borderRadius: "25px",
  overflow: "hidden"
}

const LangBar = (props) => {
  const [shown, setShown] = useState(false);

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
      // <span title={row[0]} key={row[0]}>
      //   <div style={barStyle}>
      //   </div>
      // </span>
      <div style={barStyle} key={row[0]}></div>
    )
  }) ?? null

  return LangBar ? (
    <div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div style={OuterStyle}>
        {LangBar}
      </div>
      {shown && (<HiddenLangBar {...props}/>)}
    </div>
  ) : null
}

export default LangBar;