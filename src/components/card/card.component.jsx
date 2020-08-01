import React from 'react';

import  './card.styles.css';

export const Card = (props) =>
(<div className='card-container' >
    <img alt="streamer"  src={`https://robohash.org/${props.streamer.id}?set=set2&size=180x180`}  />
   <h2>{props.streamer.name}</h2> 
   <h3>{props.streamer.email}</h3> 
</div>);
