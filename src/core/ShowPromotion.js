import React from "react";

import { API } from "../config";

const ShowPromotion = ({ item, url }) => {
  return (
    <div className="product-img container text-center">
      <img
        src={`${API}/${url}/photo/${item._id}`}
        alt={item.name}
        
        style={{ height: "200px", width: "auto", borderRadius:'10%'}}
      />
    </div>
  );
};

export default ShowPromotion;