import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt } from "@fortawesome/free-solid-svg-icons";
import API from "../../utils/API";

export const HostListingCard = ({ listingInfo }) => {
  const [classes, setClasses] = useState(
    "row mb-3 d-flex justify-content-center d-none"
  );

  const ToggleDisplay = () => {
    if (classes === "row mb-3 d-flex justify-content-center d-none") {
      setClasses("row mb-3 d-flex justify-content-center");
    } else {
      setClasses("row mb-3 d-flex justify-content-center d-none");
    }
  };

  const handleDelete = async ({ target }) => {
    const id = target.dataset.id;
    await API.deleteListing(id);
    window.location.pathname = "/profile";
  };

  return (
    <div className="row">
      <div className="row">
        <div className="col d-flex justify-content-center mb-3 mt-3">
          <button onClick={ToggleDisplay} className="btn btn-primary text-capitalize">
            {listingInfo.name}
          </button>
        </div>
      </div>
      <div className={classes}>
        <div className="col-6 cardContainer">
          <div className="row">
            <div className="col my-3">
              <img
                className="listingImage w-100"
                src={
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                }
              />
            </div>
            <div className="col mt-3">
              <p className="my-2">Type - {listingInfo.type}</p>
              <p className="my-2 text-capitalize">{listingInfo.name}</p>
              <p className="my-2">{listingInfo.description}</p>
              <p className="my-2">
                <FontAwesomeIcon icon={faMapMarkerAlt} /> {listingInfo.address},{" "}
                {listingInfo.city}, {listingInfo.state} {listingInfo.zip}
              </p>
              <p className="my-2">
                {listingInfo.numberOfGuests}{" "}
                {listingInfo.numberOfGuests === 1 ? "Guest " : "Guests "}-{" "}
                {listingInfo.bedrooms}{" "}
                {listingInfo.bedrooms === 1 ? "Bedroom " : "Bedrooms "}-{" "}
                {listingInfo.beds} {listingInfo.beds === 1 ? "Bed " : "Beds "}-{" "}
                {listingInfo.bathrooms}{" "}
                {listingInfo.bathrooms === 1 ? "Bath " : "Baths "}
              </p>
              <p className="my-2">
                Wifi: {listingInfo.wifi} | Free parking:{" "}
                {listingInfo.freeParking} | Pets: {listingInfo.pets} | Smoking:{" "}
                {listingInfo.smoking}
              </p>
              <p className="my-2">${listingInfo.price}/month</p>
              <div className="col d-flex justify-content-center mt-2">
                <Link className="btn btn-warning" to={"/editlisting/" + listingInfo._id} >
                  Edit Listing
                </Link>
              </div>
              <div className="col d-flex justify-content-center my-3">
                <span
                  className="btn btn-danger"
                  data-id={listingInfo._id}
                  onClick={handleDelete}
                >
                  Delete Listing
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
