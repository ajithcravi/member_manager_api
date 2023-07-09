import { database } from "../lib/database";

module.exports = {
    up: async () => {
        try {
            await database.sync({force: true});
            console.info("Tables created");
        } catch (error) {
            console.error("Error in creating Tables \n", error)
        }
    },
    down: async () => {
        try {
            await database.drop({});
            console.info("Tables dropped");
        } catch (error) {
            console.error("Error in dropping Tables \n", error)
        }
    }
}