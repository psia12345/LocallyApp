import React from 'react';

const EventIndexItem = ({event}) =>(
  <div className="single-event">
    <img src={event.image_url} className="event-image-icon"/>
    <div className="event-info">
      <span>Start: {event.start_date_time}</span>
      <h2>{event.title}</h2>
    </div>
  </div>
)

export default EventIndexItem;


// const PokemonIndexItem = ({ pokemon, router }) => {
//   const handleClick = url => e => router.push(url);
//
//   return (
//     <li
//       className="pokemon-index-item"
//       onClick={handleClick(`/pokemon/${pokemon.id}`)}>
//       <span>{pokemon.id}</span>
//       <img src={pokemon.image_url} alt={pokemon.name}/>
//       <span>{pokemon.name}</span>
//     </li>
//   );
// };
//
// export default withRouter(PokemonIndexItem);