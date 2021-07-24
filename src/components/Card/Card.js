import React from 'react';

const Card = ({ id, name, email, phone, website }) => {
  return (
    <div className="tc grow bg-light-purple br2 shadow-3 ma3 pa3 br3 bw2 dib">
      <img alt='human' src={`https://robohash.org/${id}?set=set5&size=150x150`} />
      <div>
        <h2>{name}</h2>
        <p>{email}</p>
        <p>{phone}</p>
        <p>{website}</p>
      </div>
    </div>
  );
}

export default Card;