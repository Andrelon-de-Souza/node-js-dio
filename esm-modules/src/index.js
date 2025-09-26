//import connectToDatabase from './utils/database.js';
//import * as database from './utils/database.js';
import { connectToDatabase, databaseType } from './utils/database.js';
//import { getDataFromApi } from "./utils/api.js";
import * as api from "./utils/api.js";

connectToDatabase("MongoDB");
api.getDataFromApi();