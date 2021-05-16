const router = require(`express`).Router();
const db = require(`../../models`);

// Get all listings
router.get('/', async (req, res) => {
  try {
    const getListing = await db.Listings.find({});
    res.status(200).json(getListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Create new listing
router.post(`/`, async (req, res) => {
  try {
    req.body.user = req.session.userId;
    console.log('WE HIT THE create listing route!!', req.body);
    const newListing = await db.Listings.create({
      zip: req.body.zipcode,
      address: req.body.address,
      city: req.body.city,
      state: req.body.address,
      availability: req.body.availability,
      type: req.body.type,
      rent: parseInt(req.body.rent),
      bedroom: parseInt(req.body.bedroom),
      restroom: parseInt(req.body.restroom),
      pets: req.body.pets,
      smoking: req.body.smoking,
      stove: req.body.stove,
      washer: req.body.washer,
      wifi: req.body.wifi,
      contact: req.body.contact,
      shared: req.body.shared,
    });
    // await db.User.findOneAndUpdate(
    //   { _id: req.session.userId },
    //   { $push: { listings: newListing._id } },
    //   { new: true }
    // );
    res.status(200).json(newListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//Delete a listing
router.delete('/:id', async (req, res) => {
  try {
    const id = req.params.id;
    const deletedListing = await db.Listings.deleteOne({ _id: id });
    res.status(200).json(deletedListing);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
