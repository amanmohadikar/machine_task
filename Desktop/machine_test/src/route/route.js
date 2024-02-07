
import express from 'express';
const router = express.Router();

import { createBook, getBooks } from "../controller/createbookController.js";
import { createAdmin, getAdmins, fetchData } from "../controller/getDataFromBothApis.js";
import { fetchDataUsingRaceFromApiA, fetchDataUsingRaceFromApiB } from '../controller/getDataFromSeperateApis.js';
import { getMonthlyRevenue } from '../controller/monthlyRevenueController.js';

router.post('/createBook', createBook);
router.get('/getBooks', getBooks);
router.post('/createAdmin', createAdmin);
router.get('/getAdmins', getAdmins);
router.get('/getDataFromApis', fetchData);
router.get('/getDataFrom1', fetchDataUsingRaceFromApiA)
router.get('/getDataFrom2', fetchDataUsingRaceFromApiB)
router.get('/monthlyRevenue', getMonthlyRevenue)

export default router;


