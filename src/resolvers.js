import * as db from "./db";

const resolvers = {
  Query: {
    GetFloors: (parent, {premiseId}, context, info) => {
      return db.Units;
    },
    GetUnit: (parent, {id}, context, info) => {
      return db.Units.find(Unit => Unit.id === id);
    }
  }
};

export default resolvers;