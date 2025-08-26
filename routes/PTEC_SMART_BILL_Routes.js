'use strict';

const express = require('express');
const billController = require('../controllers/PTEC_SMART_BILL_Controller.js');
const router = express.Router();
const verifyToken = require('../middleware/auth_outside');
const {

  SmartBill_CreateForms,
  SmartBill_CarInfoSearch,
  SmartBill_files,
  SmartBill_SelectHeaders,
  SmartBill_SelectAllForms,
  SmartBill_ESGQuery,
  SmartBill_Withdraw_Save,
  SmartBill_Withdraw_SelectAllForms,
  SmartBill_CreateCost,
  SmartBill_WithdrawDtl_SelectCategory,
  SmartBill_WithdrawDtl_SaveChangesCategory,
  SmartBill_WithdrawDtl_DeleteCategory,
  SmartBill_Withdraw_Delete,
  SmartBill_WithdrawDtl_SaveChangesHotelGroup,
  SmartBill_WithdrawDtl_SelectHotelGroup,
  SmartBill_WithdrawDtl_DeleteHotelGroup,
  SmartBill_Withdraw_Addrow,
  SmartBill_Withdraw_AddrowDtl,
  SmartBill_WithdrawDtl_Delete,
  SmartBill_Withdraw_updateSBW,
  SmartBill_Withdraw_SelectCostOther,
  NonPO_Delete_Attach_By_attachid,
  SmartBill_AcceptHeader,
  NonPO_PermisstionOperator
  
} = billController;

router.post('/SmartBill_CreateForms', verifyToken, SmartBill_CreateForms);
router.post('/SmartBill_CarInfoSearch', verifyToken, SmartBill_CarInfoSearch);
router.post('/SmartBill_files', verifyToken, SmartBill_files);
router.get('/SmartBill_SelectHeaders', verifyToken, SmartBill_SelectHeaders);
router.post('/SmartBill_SelectAllForms', verifyToken, SmartBill_SelectAllForms);
router.post('/SmartBill_ESGQuery', verifyToken, SmartBill_ESGQuery);
router.post('/SmartBill_Withdraw_Save', verifyToken, SmartBill_Withdraw_Save);
router.post('/SmartBill_Withdraw_SelectAllForms', verifyToken, SmartBill_Withdraw_SelectAllForms);
router.post('/SmartBill_CreateCost', verifyToken, SmartBill_CreateCost);
router.post('/SmartBill_WithdrawDtl_SelectCategory', verifyToken, SmartBill_WithdrawDtl_SelectCategory);
router.post('/SmartBill_WithdrawDtl_SaveChangesCategory', verifyToken, SmartBill_WithdrawDtl_SaveChangesCategory);
router.post('/SmartBill_WithdrawDtl_DeleteCategory', verifyToken, SmartBill_WithdrawDtl_DeleteCategory);
router.post('/SmartBill_Withdraw_Delete', verifyToken, SmartBill_Withdraw_Delete);
router.post('/SmartBill_WithdrawDtl_SaveChangesHotelGroup', verifyToken, SmartBill_WithdrawDtl_SaveChangesHotelGroup);
router.post('/SmartBill_WithdrawDtl_SelectHotelGroup', verifyToken, SmartBill_WithdrawDtl_SelectHotelGroup);
router.post('/SmartBill_WithdrawDtl_DeleteHotelGroup', verifyToken, SmartBill_WithdrawDtl_DeleteHotelGroup);
router.post('/SmartBill_Withdraw_Addrow', verifyToken, SmartBill_Withdraw_Addrow);
router.post('/SmartBill_Withdraw_AddrowDtl', verifyToken, SmartBill_Withdraw_AddrowDtl);
router.post('/SmartBill_WithdrawDtl_Delete', verifyToken, SmartBill_WithdrawDtl_Delete);
router.post('/SmartBill_Withdraw_updateSBW', verifyToken, SmartBill_Withdraw_updateSBW);
router.post('/NonPO_Delete_Attach_By_attachid', verifyToken, NonPO_Delete_Attach_By_attachid);
router.get('/SmartBill_Withdraw_SelectCostOther', verifyToken, SmartBill_Withdraw_SelectCostOther);
router.post('/SmartBill_AcceptHeader', verifyToken, SmartBill_AcceptHeader);
router.post('/NonPO_PermisstionOperator', verifyToken, NonPO_PermisstionOperator);

module.exports = {
  routes: router
}