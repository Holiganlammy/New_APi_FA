'use strict';

const express = require('express');
const periodController = require('../controllers/PTEC_FA_PERIOD_Controller');
const router = express.Router();
const verifyToken = require('../middleware/auth_outside');

const { period_login, getAllround_period, permission_branch, craete_period, update_period
    , delete_period, select_priod, round_website, FA_Period_GroupBy, FA_Control_Fetch_Branch_Period } = periodController;

router.post('/period_login', verifyToken, period_login);
router.post('/period_round', verifyToken, getAllround_period);
router.post('/permission_branch', verifyToken, permission_branch);
router.post('/craete_period', verifyToken, craete_period);
router.post('/update_period', verifyToken, update_period);
router.post('/delete_period', verifyToken, delete_period);
router.post('/select_call_priod', verifyToken, select_priod);
router.post('/round_website', verifyToken, round_website);
router.get('/FA_Period_GroupBy', verifyToken, FA_Period_GroupBy);
router.post('/FA_Control_Fetch_Branch_Period', verifyToken, FA_Control_Fetch_Branch_Period);

module.exports = {
    routes: router
}