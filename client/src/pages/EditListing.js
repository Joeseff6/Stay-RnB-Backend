import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { useParams } from "react-router-dom";

export const EditListing = () => {
  const [listingForm, setListingForm] = useState({});
  const [characterCount, setCharacterCount] = useState(0);
  const { id } = useParams();

  useEffect(async () => {
    const { data } = await API.getListing(id);
    setListingForm({
      ...listingForm,
      name: data[0].name,
      description: data[0].description,
      zip: data[0].zip,
      address: data[0].address,
      city: data[0].city,
      state: data[0].state,
      available: data[0].available,
      type: data[0].type,
      price: data[0].price,
      bedrooms: data[0].bedrooms,
      beds: data[0].beds,
      bathrooms: data[0].bathrooms,
      pets: "No",
      smoking: "No",
      numberOfGuests: data[0].numberOfGuests,
      thumbnail: "",
      wifi: "No",
      freeParking: "No",
    });
  }, []);

  const editListing = async (event) => {
    try {
      event.preventDefault();
      await API.editListing(id, listingForm);
      window.location.pathname = "/profile";
    } catch (err) {
      console.log(err);
    }
  };

  if (Object.entries(listingForm).length > 0) {
    return (
      <>
        <h1 className="text-center mb-3">Edit your listing!</h1>
        <div className="row d-flex justify-content-center">
          <div className="col-6">
            <form id="listingForm">
              <div className="input-group mb-3">
                <span className="input-group-text">Listing Name</span>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder={listingForm.name}
                  defaultValue={listingForm.name}
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, name: target.value })
                  }
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">
                  Quick Description <br /> {characterCount}/150
                </span>
                <textarea
                  onChange={({ target }) => {
                    setListingForm({
                      ...listingForm,
                      description: target.value,
                    });
                    setCharacterCount(target.value.length);
                  }}
                  maxLength="150"
                  cols="50"
                  defaultValue={listingForm.description}
                />
              </div>

              <div className="input-group mb-3">
                <span className="input-group-text">Street Address</span>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="12345 Random Street Dr"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, address: target.value })
                  }
                  defaultValue={listingForm.address}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Zip Code</span>
                <input
                  type="Number"
                  className="form-control"
                  placeholder="77777"
                  min="10000"
                  max="99999"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, zip: target.value })
                  }
                  defaultValue={listingForm.zip}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">City</span>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="Houston"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, city: target.value })
                  }
                  defaultValue={listingForm.city}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">State</span>
                <select
                  name="state"
                  id="state"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, state: target.value })
                  }
                  defaultValue={listingForm.state}
                >
                  <option value="" defaultValue="selected">
                    Select a State
                  </option>
                  <option value="AL">Alabama</option>
                  <option value="AK">Alaska</option>
                  <option value="AZ">Arizona</option>
                  <option value="AR">Arkansas</option>
                  <option value="CA">California</option>
                  <option value="CO">Colorado</option>
                  <option value="CT">Connecticut</option>
                  <option value="DE">Delaware</option>
                  <option value="DC">District Of Columbia</option>
                  <option value="FL">Florida</option>
                  <option value="GA">Georgia</option>
                  <option value="HI">Hawaii</option>
                  <option value="ID">Idaho</option>
                  <option value="IL">Illinois</option>
                  <option value="IN">Indiana</option>
                  <option value="IA">Iowa</option>
                  <option value="KS">Kansas</option>
                  <option value="KY">Kentucky</option>
                  <option value="LA">Louisiana</option>
                  <option value="ME">Maine</option>
                  <option value="MD">Maryland</option>
                  <option value="MA">Massachusetts</option>
                  <option value="MI">Michigan</option>
                  <option value="MN">Minnesota</option>
                  <option value="MS">Mississippi</option>
                  <option value="MO">Missouri</option>
                  <option value="MT">Montana</option>
                  <option value="NE">Nebraska</option>
                  <option value="NV">Nevada</option>
                  <option value="NH">New Hampshire</option>
                  <option value="NJ">New Jersey</option>
                  <option value="NM">New Mexico</option>
                  <option value="NY">New York</option>
                  <option value="NC">North Carolina</option>
                  <option value="ND">North Dakota</option>
                  <option value="OH">Ohio</option>
                  <option value="OK">Oklahoma</option>
                  <option value="OR">Oregon</option>
                  <option value="PA">Pennsylvania</option>
                  <option value="RI">Rhode Island</option>
                  <option value="SC">South Carolina</option>
                  <option value="SD">South Dakota</option>
                  <option value="TN">Tennessee</option>
                  <option value="TX">Texas</option>
                  <option value="UT">Utah</option>
                  <option value="VT">Vermont</option>
                  <option value="VA">Virginia</option>
                  <option value="WA">Washington</option>
                  <option value="WV">West Virginia</option>
                  <option value="WI">Wisconsin</option>
                  <option value="WY">Wyoming</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Type</span>
                <input
                  type="text"
                  className="form-control text-capitalize"
                  placeholder="Apartment, Home, etc"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, type: target.value })
                  }
                  defaultValue={listingForm.type}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Price/month</span>
                <input
                  type="number"
                  className="form-control"
                  placeholder="1200.00"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, price: target.value })
                  }
                  defaultValue={listingForm.price}
                />
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Bedrooms</span>
                <select
                  name="bedrooms"
                  id="bedrooms"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, bedrooms: target.value })
                  }
                  defaultValue={listingForm.bedrooms}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Beds</span>
                <select
                  name="beds"
                  id="beds"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, beds: target.value })
                  }
                  defaultValue={listingForm.beds}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Bathrooms</span>
                <select
                  name="baths"
                  id="baths"
                  onChange={({ target }) =>
                    setListingForm({ ...listingForm, bathrooms: target.value })
                  }
                  defaultValue={listingForm.bathrooms}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="input-group mb-3">
                <span className="input-group-text">Number of Guests</span>
                <select
                  name="guests"
                  id="guests"
                  onChange={({ target }) =>
                    setListingForm({
                      ...listingForm,
                      numberOfGuests: target.value,
                    })
                  }
                  defaultValue={listingForm.numberOfGuests}
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                </select>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="pets"
                  onClick={() => {
                    listingForm.pets === "No"
                      ? setListingForm({ ...listingForm, pets: "Yes" })
                      : setListingForm({ ...listingForm, pets: "No" });
                  }}
                />
                <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                  Pets
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="smoking"
                  onClick={() => {
                    listingForm.smoking === "No"
                      ? setListingForm({ ...listingForm, smoking: "Yes" })
                      : setListingForm({ ...listingForm, smoking: "No" });
                  }}
                />
                <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                  Smoking
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="wifi"
                  onClick={() => {
                    listingForm.wifi === "No"
                      ? setListingForm({ ...listingForm, wifi: "Yes" })
                      : setListingForm({ ...listingForm, wifi: "No" });
                  }}
                />
                <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                  Wifi
                </label>
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="parking"
                  onClick={() => {
                    listingForm.freeParking === "No"
                      ? setListingForm({ ...listingForm, freeParking: "Yes" })
                      : setListingForm({ ...listingForm, freeParking: "No" });
                  }}
                />
                <label htmlFor="rememberCheck" className="mx-2 mb-2 fs-6">
                  Free Parking
                </label>
              </div>
              <div className="row">
                <div className="col d-flex justify-content-center">
                  <button
                    className="btn btn-primary"
                    onClick={editListing}
                    type="submit"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </>
    );
  } else {
    return null;
  }
};
