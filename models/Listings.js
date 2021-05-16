const mongoose = require(`mongoose`);
const { Schema } = mongoose;

const ListingsSchema = new Schema({
  zip: {
    type: String,
    required: [true, `Please enter a valid zip code.`],
    trim: true,
    minLength: 5,
    maxLength: 5,
  },
  address: {
    type: String,
    // required: [true, `Please enter a valid street address.`],
  },
  city: {
    type: String,
    // required: [true, `Please enter a valid city.`],
  },
  state: {
    type: String,
    // required: [true, `Please enter a valid state.`],
  },
  availability: {
    type: String,
    default: true,
  },
  type: {
    type: String,
  },
  rent: {
    type: Number,
    // required: [true, `Please enter a price.`],
  },
  bedroom: {
    type: Number,
  },
  restroom: {
    type: Number,
  },
  pets: {
    type: String,
  },
  smoking: {
    type: String,
  },
  stove: {
    type: String,
  },
  washer: {
    type: String,
  },
  wifi: {
    type: String,
  },
  contact: {
    type: String,
  },
  shared: {
    type: String,
  },
  // numberOfGuests: {
  //   type: Number,
  // },
  datePosted: {
    type: Date,
    default: Date.now(),
  },
  // thumbnail: {
  //   type: String,
  // },
  // pictures: {
  //   type: Array,
  // },
  // reviews: [
  //   {
  //     type: Schema.Types.ObjectId,
  //     ref: 'Reviews',
  //   },
  // ],
  // user: {
  //   type: Schema.Types.ObjectId,
  //   ref: 'User',
  // },
});

const Listings = mongoose.model(`Listings`, ListingsSchema);

module.exports = Listings;
