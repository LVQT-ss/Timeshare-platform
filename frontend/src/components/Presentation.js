import React from 'react';
import { Location } from '../Share/Location';
import 'bootstrap/dist/css/bootstrap.css';

export default function Content() {
  return (
    <div className='container'>
      <div className='row'>
        {Location.map((location, index) => (
          <div className='col-md-3' key={index}>
            <div className='card text-center'> {/* Added text-center class here */}
              <img src={location.img} alt={location.name} />
              <h3>{location.name}</h3>
              <p className='title'>{location.club}</p>

            </div>
          </div>
        ))}



      </div>
    </div>
  );
}
