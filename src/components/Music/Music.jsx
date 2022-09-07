import React from 'react'
import s from './Music.module.css'
import Track from './Track/Track'



const Music = (props) => {




   let Tracks = props.state.trackData.map(el => <Track track={el.track} trackTime={el.trackTime} />)

   return (
      <div className={s.blockWrapper}>
         <h2 className={s.title}>My music</h2>
         <ol className={s.trackItems}>
            {Tracks}
         </ol>
      </div>
   )
}

export default Music