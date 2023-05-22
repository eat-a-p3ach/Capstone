const { Router } = require("express");
const Library = require("../models/Library");
const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const newLibrary = new Library(request.body);
  newLibrary.save((error, record) => {
    if (error.name && error.name === "ValidationError")
      return response.status(400).json(error.errors);
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});



// Get (read) all records from the collection
router.get("/", (request, response) => {
  Library.find({}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Library.findById(request.params.id, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Library.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.status(500).json(error.errors);

    response.json(record);
  });
});

// setting an update 9.1
router.put("/:id", (request, response) => {
  const body = request.body;
  Library.findByIdAndUpdate(
    request.params.id,
    {
      $set: {
        // Take note that the customer is not included, so it can't update the customer
        name: body.name,
        date: body.date,
        move: body.move,
      }
    },
    {
      //options
      new: true,
      upsert: true
    },
    //response handler
    (error, record) => {
      if (error?.name === "ValidationError")
        return response.status(400).json(error.errors);
      if (error) return response.status(500).json(error.errors);

      response.json(record);
    }
  );
});

module.exports = router;
