import React from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';

const MenuCard = ({ image, title, price, description }) => {
  return (
    <Card className="p-4 bg-transparent text-white h-100">
      <div className="row">
        <div className="col-4">
          <img 
            src={image} 
            className="w-100" 
            alt={`${title} dish`}
            loading="lazy"
          />
        </div>
        <div className="col-8">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">Price: ₹{price}</p>
          {description && <p className="card-text small">{description}</p>}
        </div>
      </div>
    </Card>
  );
};

MenuCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  description: PropTypes.string
};

export default MenuCard;
