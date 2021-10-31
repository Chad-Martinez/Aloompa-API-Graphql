const { buildSchema } = require('graphql');

module.exports = buildSchema(`

    type App {
        _id: ID!
        name: String!
    }

    type AppData {
        apps: [App!]!
    }

    input AppInputData {
        name: String!
    }

    type Stage {
        _id: ID!
        name: String!
    }

    type StageData {
        stages: [Stage!]!
    }

    input StageInputData {
        name: String!
    }

    type Event {
        _id: ID!
        appId: ID!
        stageId: ID!
        name: String!
        description: String!
        image: String!
        startsAt: Int!
        endsAt: Int!
    }

    type EventData {
        events: [Event!]!
    }

    input EventInputData {
        appName: String!
        stageName: String!
        name: String!
        description: String!
        image: String!
        startsAt: Int!
        endsAt: Int!
    }

    type RootQuery {
        app(id: ID!): App!
        apps: AppData!
        stage(id: ID!): Stage!
        stages: StageData!
        searchStagesByName(name: String!): StageData!
        listStagesByApp(appId: ID!): StageData!
        getStageByEvent(eventId: ID!): Stage!
        event(id: ID!): Event!
        events: EventData!
        searchEventsByDate(dateStart: Int!, dateEnd: Int!): EventData!
        searchEventsByName(name: String!): EventData!
        listEventsByApp(appId: ID!): EventData!
        listEventsByStage(stageId: ID!): EventData!
    }

    type RootMutation {
        createApp(appInput: AppInputData): App!
        updateApp(id: ID!, appInput: AppInputData): App!
        deleteApp(id: ID!): Boolean
        createStage(stageInput: StageInputData): Stage!
        updateStage(id: ID!, stageInput: StageInputData): Stage!
        deleteStage(id: ID!): Boolean
        createEvent(eventInput: EventInputData): Event!
        updateEvent(id: ID!, eventInput: EventInputData): Event!
        deleteEvent(id: ID!): Boolean
    }

    schema {
        query: RootQuery
        mutation: RootMutation
    }

`)