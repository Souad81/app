import React from 'react';
import StarRating from './StarRating'; 

const Testeimonial = ({ item }) => {
  return (
    <div className="profile-boxes">
      <div className="profile-box">
        <i className="fa-sharp fa-solid fa-quote-left"></i>
        <p>{item.comment}</p>
      </div>
      <StarRating starRating={item.starRating} /> 
      <img src={item.avatarUrl} alt={item.author} className="profil-img" />
      <h3 className="name">{item.author}</h3>
      <p className="signature">{item.jobRole}</p>
    </div>
  );
};

export default Testeimonial;
