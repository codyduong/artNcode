import React, {useState, useEffect} from 'react';
import {useSpring, animated} from 'react-spring'

const COLORS = require('./Colors.json') //require(require('./Config.json').Colors) ...Nested requires don't work :( 
const MIN_PERCENTAGE_THRESHOLD = require('./Config.json').PercentageThreshold

//STYLING for HiddenLangBar
const flexContainerStyle = {
  display: "flex",
  flexWrap: "wrap", 
  flexDirection: "row",
  justifyContent: "space-around"
}

const HiddenLangBar = (props) => {
  const hiddenLangBar = props.languages.map((row) => {
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
      <div style={{ padding: "1%" }} key={id}>
        <div style={dotStyle}></div><div style={{ display: "inline-block", paddingLeft: "5px" }}>
          {row[0]}
          <span style={{ color: '#919191', fontSize: '12px' }}> {row[1]}%</span>
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
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [langs, setLangs] = useState(props.languages ?? []); 

  // props.languages only exists when we fellback from a fetch failure

  useEffect(() => {
    if (props.languages === null) {
      fetch(props.languages_url)
        .then(res => res.json())
        .then(
          (result) => {
            var langList = []
            var langTotal = 0
            var langOther = 0
            setIsLoaded(true);
            var lang
            for (lang in result) {
              langTotal += result[lang]
            }
            for (lang in result) {
              var percent = Math.round((result[lang] / langTotal) * 10000) / 100
              if (percent > MIN_PERCENTAGE_THRESHOLD) {
                langList.push([lang, percent, COLORS[lang] ? COLORS[lang]['color'] : null])
              } else {
                langOther += percent
              }
            }
            if (langOther !== 0) {
              langList.push(['Other', langOther, '#696969']) //haha funny number
            }
            setLangs(langList);
          },
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    } else {
      setIsLoaded(true);
    }
  }, [])
  
  const langBar = langs.map((row) => {
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

  const animate = useSpring({ 
    position: 'relative',
    top: '0px',
    opacity: 1,
    height: '40px',
    from: { top: '-30px', opacity: 0, height: '0px' },
    reset: true,
    zIndex: -1,
    delay: 250,
    reverse: !shown,
  })


  if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return langBar[0] ? (
      <div
        onMouseEnter={() => setShown(true)}
        onMouseLeave={() => setShown(false)}
      >
        <div style={outerStyle}>
          {langBar}
        </div>
        <animated.div style={animate}>
          <HiddenLangBar languages={langs} />
        </animated.div>
      </div>
    ) : null
  }
}

export default LangBar;