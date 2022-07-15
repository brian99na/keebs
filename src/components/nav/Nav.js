import React, { useState } from 'react'
import './nav.css'
import { BsArrowLeftShort, BsArrowRightShort} from 'react-icons/bs'
import dummyData from '../dummy.json'

function Nav(props) {
  const [opacity, setOpacity] = useState(false)

  console.log(dummyData)

  const handleArrowClick = (e) => {
    setOpacity(true)
    setTimeout(() => {
      if (e.target.getAttribute("name") === "left" && props.page > 0) {
        props.setPage(props.page - 1)
      } else if (e.target.getAttribute("name") === "right" && props.page < 3) {
        props.setPage(props.page + 1)
      }
      setOpacity(false)
    }, 500);
  }

  return (
    <nav>
      <h4 className={`currTitle ${opacity && 'opacity'}`}>{dummyData.text[props.page].navbar}</h4>
      <div className='line'></div>
      <div className='text'>
        <div className='left'>
          {props.page > 0 && 
            <div className={`iconTextLeft ${opacity && 'opacity'}`}>
              <BsArrowLeftShort className='navIcon' name="left" onClick={handleArrowClick}/>
              <h4>{dummyData.text[props.page - 1].navbar}</h4>
            </div>
          }
        </div>
        <div className='right'>
          {props.page < 3 &&
          <div className={`iconTextRight ${opacity && 'opacity'}`}>
            <BsArrowRightShort className='navIcon' name="right" onClick={handleArrowClick}/>
            <h4>{dummyData.text[props.page + 1].navbar}</h4>
          </div>
          }
        </div>
      </div>
    </nav>
  )
}

export default Nav