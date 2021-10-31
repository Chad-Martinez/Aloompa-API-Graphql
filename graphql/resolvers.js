const App = require("../models/app");
const Stage = require("../models/stage");
const Event = require("../models/event");

module.exports = {
  createApp: async function ({ appInput }, req) {
    const app = new App({
      name: appInput.name,
    });
    try {
      const createdApp = await app.save();
      return { ...createdApp._doc, id: createdApp._id.toString() };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  apps: async function (args, req) {
    try {
      const apps = await App.find();
      return {
        apps: apps.map((app) => {
          return {
            ...app._doc,
            _id: app._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  app: async function ({ id }, req) {
    try {
      const app = await App.findById(id);
      return {
        ...app._doc,
        _id: app._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  updateApp: async function ({ id, appInput }, req) {
    try {
      const app = await App.findById(id);
      app.name = appInput.name;
      const updatedApp = await app.save();
      return {
        ...updatedApp._doc,
        _id: updatedApp._id,
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  deleteApp: async function ({ id }, req) {
    try {
      await App.findByIdAndRemove(id);
      return true;
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  createStage: async function ({ stageInput }, req) {
    const stage = new Stage({
      name: stageInput.name,
    });

    try {
      const createdStage = await stage.save();
      return {
        ...createdStage._doc,
        _id: createdStage._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  stages: async function (args, req) {
    try {
      const stages = await Stage.find();
      return {
        stages: stages.map((stage) => {
          return {
            ...stage._doc,
            _id: stage._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  stage: async function ({ id }, req) {
    try {
      const stage = await Stage.findById(id);
      return {
        ...stage._doc,
        _id: stage._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  updateStage: async function ({ id, stageInput }, req) {
    try {
      const stage = await Stage.findById(id);
      stage.name = stageInput.name;
      const updatedStage = await stage.save();
      return {
        ...updatedStage._doc,
        _id: updatedStage._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  deleteStage: async function ({ id }, req) {
    try {
      await Stage.findByIdAndRemove(id);
      return true;
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  searchStagesByName: async function ({ name }, req) {
    try {
      const stages = await Stage.find({
        name: { $regex: name, $options: "i" },
      });
      return {
        stages: stages.map((stage) => {
          return {
            ...stage._doc,
            _id: stage._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  getStageByEvent: async function ({ eventId }, req) {
    try {
      const event = await Event.findById(eventId);
      const stage = await Stage.findById(event.stageId);
      return {
        ...stage._doc,
        _id: stage._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  createEvent: async function ({ eventInput }, req) {
    try {
      const app = await App.findOne({ name: eventInput.appName });
      const stage = await Stage.findOne({ name: eventInput.stageName });
      const event = new Event({
        appId: app._id.toString(),
        stageId: stage._id.toString(),
        name: eventInput.name,
        description: eventInput.description,
        image: eventInput.image,
        startsAt: eventInput.startsAt,
        endsAt: eventInput.endsAt,
      });
      const createdEvent = await event.save();
      return {
        ...createdEvent._doc,
        _id: createdEvent._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  events: async function (args, req) {
    try {
      const events = await Event.find();
      return {
        events: events.map((event) => {
          return {
            ...event._doc,
            _id: event._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  event: async function ({ id }, req) {
    try {
      const event = await Event.findById(id);
      return {
        ...event._doc,
        _id: event._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  updateEvent: async function ({ id, eventInput }, req) {
    try {
      const app = await App.findOne({ name: eventInput.appName });
      const stage = await Stage.findOne({ name: eventInput.stageName });
      const event = await Event.findById(id);
      event.appId = app._id.toString();
      event.stageId = stage._id.toString();
      event.name = eventInput.name;
      event.description = eventInput.description;
      event.image = eventInput.image;
      event.startsAt = eventInput.startsAt;
      event.endsAt = eventInput.endsAt;
      const updatedEvent = await event.save();
      return {
        ...updatedEvent._doc,
        _id: updatedEvent._id.toString(),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  deleteEvent: async function ({ id }, req) {
    try {
      await Event.findByIdAndRemove(id);
      return true;
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  searchEventsByDate: async function ({ dateStart, dateEnd }, req) {
    try {
      const events = await Event.find({
        startsAt: { $gte: dateStart, $lte: dateEnd },
      });
      return {
        events: events.map((event) => {
          return {
            ...event._doc,
            _id: event._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  searchEventsByName: async function ({ name }, req) {
    try {
      const events = await Event.find({
        name: { $regex: name, $options: "i" },
      });
      return {
        events: events.map((event) => {
          return {
            ...event._doc,
            _id: event._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  listEventsByApp: async function ({ appId }, req) {
    try {
      const events = await Event.find({ appId: appId });
      return {
        events: events.map((event) => {
          return {
            ...event._doc,
            _id: event._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  listEventsByStage: async function ({ stageId }, req) {
    try {
      const events = await Event.find({ stageId: stageId });
      return {
        events: events.map((event) => {
          return {
            ...event._doc,
            _id: event._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
  listStagesByApp: async function ({ appId }, req) {
    try {
      const events = await Event.find({ appId: appId });
      const mappedStageIds = events.map((event) => event.stageId.toString());
      const uniqueStageIds = mappedStageIds.filter(
        (stageId, i, arr) => arr.indexOf(stageId) === i
      );
      const mappedStages = await Promise.all(
        uniqueStageIds.map(async (stageId) => {
          const stageInfo = await Stage.findById(stageId);
          return stageInfo;
        })
      );
      return {
        stages: mappedStages.map((stage) => {
          return {
            ...stage._doc,
            _id: stage._id.toString(),
          };
        }),
      };
    } catch (error) {
      error.statusCode = 500;
      throw error;
    }
  },
};
