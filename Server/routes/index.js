import express from 'express';
import { filteredByAny, filteredByCountry, filteredByIntensity, filteredByLikelihood, filteredByPestle, filteredByRegion, filteredBySector, filteredBySource, filteredByTitle, filteredByTopic, filteredByYear, getAllData } from '../controllers/index.js';

//creating a router
const router = express.Router();

//api to get all the data
router.get('/all', getAllData);

// api to get data filtered by year
router.get("/year/:year", filteredByYear)

// api to get data filtered by topic
router.get("/topic/:topic", filteredByTopic)

// api to get data filtered by title
router.get("/title/:title", filteredByTitle)

// api to get data filtered by sector
router.get("/sector/:sector", filteredBySector)

// api to get data filtered by region
router.get("/region/:region", filteredByRegion)

// api to get data filtered by country
router.get("/country/:country", filteredByCountry)

// api to get data filtered by pestle
router.get("/pestle/:pestle", filteredByPestle)

// api to get data filtered by source
router.get("/source/:source", filteredBySource)

// api to get data filtered by intensity
router.get("/intensity/:intensity", filteredByIntensity)

// api to get data filtered by likelihood
router.get("/likelihood/:likelihood", filteredByLikelihood)

// api to get data filtered by any
router.get("/any/:search", filteredByAny)


export default router;