'use strict';

const express = require('express');
const ptec_OPS_Mobile = require('../controllers/PTEC_OPS_Mobile');
const router = express.Router();

const dotenv = require('dotenv');
const env = dotenv.config().parsed
const line = require('@line/bot-sdk');
const verifyToken = require('../middleware/auth_outside');

const lineConfig = {
  channelAccessToken: env.ACCESSTOKEN,
  channelSecret: env.SECRET_TOKEN,
}

const {
  OPS_Mobile_List_Vender,
  webhooks,
  STrack_Registation,
  STrack_responseFlex_AfterInsert,
  STrack_End_Comments,
  STcheck_files,
  STrack_SuccessJob,
  STK_unCompletedBy_User,

} = ptec_OPS_Mobile;


router.get('/OPS_Mobile_List_Vender', verifyToken, OPS_Mobile_List_Vender);
router.post('/STrack_Registation', verifyToken, STrack_Registation);
router.post('/webhooks', verifyToken, webhooks, line.middleware(lineConfig));
router.get('/webhooks', verifyToken, (req, res) => {
  res.status(200).send('Webhook is running!');
});
router.post('/STrack_responseFlex_AfterInsert', verifyToken, STrack_responseFlex_AfterInsert);
router.post('/STrack_End_Comments', verifyToken, STrack_End_Comments);
router.post('/STcheck_files', verifyToken, STcheck_files);
router.post('/STrack_SuccessJob', verifyToken, STrack_SuccessJob);
router.post('/STK_unCompletedBy_User', verifyToken, STK_unCompletedBy_User);

// https://stackblitz.com/edit/react-ts-bxdz2e?file=src%2FApp.js

module.exports = {
  routes: router
}