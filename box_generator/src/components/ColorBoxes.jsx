import React from 'react'
// destructure pass in allBoxObj like props from parent App.js vs passing in(props)
const ColorBoxes = ({allBoxObj}) => {
  
  return (
    <div>
        <h1>All Boxes</h1>
        {
          allBoxObj.map((box, i) => {
            return (
              <div key={i} style={
                {backgroundColor: box.color,
                height: `${box.size}px`,
                width: `${box.size}px`,
                margin: `${10}px`}
              }>

              </div>
            )
          })
        }
    </div>
  )
}

export default ColorBoxes