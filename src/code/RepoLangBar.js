import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring'

//STYLING for HiddenLangBar
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap", 
  flexDirection: "row",
  justifyContent: "space-around"
}

const HiddenLangBar = (props) => {
  const hiddenLangBar = props.languages?.map((row) => {
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
        <div style={dotStyle}></div><div style={{display: "inline-block", paddingLeft: "5px"}}>
          {row[0]}
          <span style={{color:'#919191', fontSize: '12px'}}> {row[1]}%</span>
        </div>
      </div>
    )
  }) ?? null

  return (
    <div style={flexContainerStyle}>
      {hiddenLangBar}
    </div>
  )
}

//STYLING for LangBar
const outerStyle = {
  width: "100%", 
  height: "15px", 
  display: "block", 
  whiteSpace: 'nowrap', 
  fontSize: "0px",
  borderRadius: "25px",
  overflow: "hidden"
}

const LangBar = (props) => {
  const [shown, setShown] = useState(null);

  const langBar = props.languages?.map((row) => {
    const width = row[1].toString()+'%'
    const color = row[2]
    const barStyle = {
      display: "inline-block", 
      height: "100%", 
      width: width,
      backgroundColor: color,
      //spacing of langs
      position: 'relative',
      left: '-2px',
      margin: '0px 2px 0px 2px'
    }

    return(
      <div style={barStyle} key={row[0]}></div>
    )
  }) ?? null

  const animateIn = useSpring({ 
    position: 'relative',
    top: '-30px', 
    opacity: 0,
    height: '0px',
    from: { top: '0px', opacity:1, height:'40px'}, 
    reset: true,
    zIndex: -1,
  })

  const animateOut = useSpring({ 
    position: 'relative',
    top: '0px', 
    opacity: 1,
    height: '40px',
    from: { top: '-30px', opacity:0, height:'0px'}, 
    reset: true,
    zIndex: -1,
  })

  return langBar ? (
    <div
      onMouseEnter={() => setShown(true)}
      onMouseLeave={() => setShown(false)}
    >
      <div style={outerStyle}>
        {langBar}
      </div>
      {(shown === false) && (
        <animated.div style={animateIn}>
          <HiddenLangBar {...props}/>
        </animated.div>
      )}
      {shown && (
        <animated.div style={animateOut}>
          <HiddenLangBar {...props}/>
        </animated.div>
      )}
    </div>
  ) : null
}

export default LangBar;