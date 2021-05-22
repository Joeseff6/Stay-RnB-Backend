import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';


export const ListingCard = ({ listings }) => {
  return (
    <div className="row d-flex justify-content-center my-3">
      <div className="col-6 cardContainer">
        <div className="row my-3 display">
          <div className="col">
            <img
              className="listingImage w-100 mx-3"
              src={
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
              }
            />
          </div>
          <div className="col mx-3">
            <div className="row mb-5">
              <p className="my-2">Type - {listings.type}</p>
              <p className="my-2">{listings.name}</p>
              <p className="my-2">{listings.description}</p>
              <p className="my-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {listings.address}, {listings.city}, {listings.state}{" "}
                {listings.zip}
              </p>
              <p className="my-2">
                {listings.numberOfGuests}{" "}
                {listings.numberOfGuests === 1 ? "Guest " : "Guests "}-{" "}
                {listings.bedrooms}{" "}
                {listings.bedrooms === 1 ? "Bedroom " : "Bedrooms "}-{" "}
                {listings.beds} {listings.beds === 1 ? "Bed " : "Beds "}-{" "}
                {listings.bathrooms}{" "}
                {listings.bathrooms === 1 ? "Bath " : "Baths "}
              </p>
              <p className="my-2">
                Wifi: {listings.wifi} | Free parking: {listings.freeParking} |
                Pets: {listings.pets} | Smoking: {listings.smoking}
              </p>
              <p className="my-2">${listings.price}/month</p>
            </div>
            <div className="row">
              <div className="col d-flex justify-content-center">
                <Link className="btn btn-primary" to="#">View listing (Coming soon!)</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
