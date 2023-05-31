const { Router } = require("express");
const Lesson = require("../models/Lesson");

const router = Router();

// Create record in MongoDB Atlas using Mongoose.js ORM
router.post("/", (request, response) => {
  const lesson = new Lesson(request.body);
  lesson.save((error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.get("/", (request, response) => {
  Lesson.find({}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

// Get a single record by ID using a query parameter
router.get("/:id", (request, response) => {
  Lesson.findById(request.params.id, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.get("/tag/:tag", (request, response) => {
  Lesson.find({ crust: request.params.tag }, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.delete("/:id", (request, response) => {
  Lesson.findByIdAndRemove(request.params.id, {}, (error, record) => {
    if (error) return response.sendStatus(500).json(error);
    return response.json(record);
  });
});

router.put("/:id", (request, response) => {
  const body = request.body;
  Lesson.findByIdAndUpdate(
    request.params.id,

    {
      $set: {
        user: body.user,
        start: body.start,
        end: body.end,
        timestart: body.timestart,
        timeend: body.timeend,
        text: body.text,
        allday: body.allDay
      }
    },

    {
      new: true,
      upsert: true
    },

    (error, record) => {
      if (error) return response.sendStatus(500).json(error);
      return response.json(record);
    }
  );
});

module.exports = router;
