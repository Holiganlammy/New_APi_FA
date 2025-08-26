'use strict';

const express = require('express');
const assetController = require('../controllers/PTEC_FA_Controller');
const router = express.Router();
const verifyToken = require('../middleware/auth_outside');
const {
    getAllasset,
    assetByCode,
    checkCodeCounted,
    addAsset, 
    getCode,
    assetByUserBranch,
    getAllasset2,
    WrongBranch,
    updateReference,
    lostAssets,
    scan_check_result,
    AssetsAll_Control,
    SelectDTL_Control,
    FA_Control_Create_Document_NAC,
    FA_Control_Create_Detail_NAC,
    FA_Control_Select_MyNAC,
    FA_Control_select_dtl,
    FA_Control_select_headers,
    store_FA_control_update_DTLandHeaders,
    FA_control_update_DTL,
    FA_Control_execDocID,
    FA_Control_Select_MyNAC_Approve,
    FA_control_updateStatus,
    store_FA_control_select_dtl_draff,
    store_FA_control_drop_NAC,
    store_FA_control_comment,
    qureyNAC_comment,
    store_FA_control_GuaranteeNAC,
    store_FA_control_seals_update,
    store_FA_control_updateDTL_seals,
    stroe_FA_control_Path,
    qureyNAC_path,
    FA_Control_CheckAssetCode_Process,
    stroe_FA_control_DTL_ConfirmSuccess,
    store_FA_control_upadate_table,
    store_FA_SendMail,
    store_FA_control_Create_from_reported,
    store_FA_control_HistorysAssets,
    FA_Control_Fetch_Assets,
    FA_Control_Report_All_Counted_by_Description,
    FA_Control_New_Assets, FA_Control_New_Assets_Xlsx,
    FA_Control_import_dataXLSX_toAssets, check_files,
    FA_Control_Delete_PATH, check_files_NewNAC,
    FA_Control_Edit_EBook, FA_Control_BPC_Sendmail,
    FA_Mobile_UploadImage,
    FA_Control_Assets_TypeGroup,
    //BPC
    FA_Control_BPC_UpdateDetails, FA_Control_BPC_Running_NO,
    FA_Control_BPC_SELECT_TEMP,
    FA_Control_BPC_GroupBy,
    FA_Control_BPC_SelectStatus,
    FA_Control_BPC_SubmitVertify,
    FA_Control_BPC_UpdateTemp,
    FA_Control_ListStatus,
    UpdateDtlAsset,
    FA_Control_UpdateDetailCounted,
    FA_Control_AnnualGraph,
    FA_Control_NAC_Backlog
} = assetController;

router.post('/ReportassetsAll', verifyToken, getAllasset);
router.post('/getAsset', verifyToken, assetByCode);
router.get('/getAsset/:body', verifyToken, getCode);
router.get('/checkCodeCounted', verifyToken, checkCodeCounted);
router.post('/addAsset', verifyToken, addAsset);
router.post('/getAssetbyUserBranch', verifyToken, assetByUserBranch);
router.post('/wrongBranch', verifyToken, WrongBranch);
router.post('/testGetBranch', verifyToken, getAllasset2);
router.post('/lostAssets', verifyToken, lostAssets);
router.post('/updateReference', verifyToken, updateReference);
router.post('/check_code_result', verifyToken, scan_check_result);
router.post('/FA_Mobile_UploadImage', verifyToken, FA_Mobile_UploadImage);

// AssetsAll_Control
router.post('/AssetsAll_Control', verifyToken, AssetsAll_Control);
router.post('/SelectDTL_Control', verifyToken, SelectDTL_Control);
router.post('/FA_Control_Create_Document_NAC', verifyToken, FA_Control_Create_Document_NAC);
router.post('/FA_Control_Create_Detail_NAC', verifyToken, FA_Control_Create_Detail_NAC);
router.post('/FA_Control_Select_MyNAC', verifyToken, FA_Control_Select_MyNAC);
router.post('/FA_Control_select_dtl', verifyToken, FA_Control_select_dtl);
router.post('/store_FA_control_select_dtl_draff', verifyToken, store_FA_control_select_dtl_draff);
router.post('/FA_Control_select_headers', verifyToken, FA_Control_select_headers);
router.post('/store_FA_control_update_DTLandHeaders', verifyToken, store_FA_control_update_DTLandHeaders);
router.post('/FA_control_update_DTL', verifyToken, FA_control_update_DTL);
router.post('/FA_Control_execDocID', verifyToken, FA_Control_execDocID);
router.post('/FA_Control_Select_MyNAC_Approve', verifyToken, FA_Control_Select_MyNAC_Approve);
router.post('/FA_control_updateStatus', verifyToken, FA_control_updateStatus);
router.post('/store_FA_control_drop_NAC', verifyToken, store_FA_control_drop_NAC);
router.post('/store_FA_control_comment', verifyToken, store_FA_control_comment);
router.post('/qureyNAC_comment', verifyToken, qureyNAC_comment);
router.post('/store_FA_control_GuaranteeNAC', verifyToken, store_FA_control_GuaranteeNAC);
router.post('/store_FA_control_seals_update', verifyToken, store_FA_control_seals_update);
router.post('/store_FA_control_updateDTL_seals', verifyToken, store_FA_control_updateDTL_seals);
router.post('/stroe_FA_control_Path', verifyToken, stroe_FA_control_Path);
router.post('/qureyNAC_path', verifyToken, qureyNAC_path);
router.post('/FA_Control_CheckAssetCode_Process', verifyToken, FA_Control_CheckAssetCode_Process);
router.post('/stroe_FA_control_DTL_ConfirmSuccess', verifyToken, stroe_FA_control_DTL_ConfirmSuccess);
router.post('/store_FA_control_upadate_table', verifyToken, store_FA_control_upadate_table);
router.post('/store_FA_SendMail', verifyToken, store_FA_SendMail);
router.post('/store_FA_control_Create_from_reported', verifyToken, store_FA_control_Create_from_reported);
router.post('/store_FA_control_HistorysAssets', verifyToken, store_FA_control_HistorysAssets);
router.post('/FA_Control_Fetch_Assets', verifyToken, FA_Control_Fetch_Assets);
router.post('/FA_Control_Report_All_Counted_by_Description', verifyToken, FA_Control_Report_All_Counted_by_Description);
router.post('/FA_Control_New_Assets', verifyToken, FA_Control_New_Assets);
router.post('/FA_Control_New_Assets_Xlsx', verifyToken, FA_Control_New_Assets_Xlsx);
router.post('/FA_Control_import_dataXLSX_toAssets', verifyToken, FA_Control_import_dataXLSX_toAssets);
router.post('/check_files', verifyToken, check_files);
router.post('/check_files_NewNAC', verifyToken, check_files_NewNAC);
router.post('/FA_Control_Delete_PATH', verifyToken, FA_Control_Delete_PATH);
router.post('/FA_Control_Edit_EBook', verifyToken, FA_Control_Edit_EBook);
router.post('/FA_Control_UpdateDetailCounted', verifyToken, FA_Control_UpdateDetailCounted);
router.post('/FA_Control_AnnualGraph', verifyToken, FA_Control_AnnualGraph);
router.get('/FA_Control_NAC_Backlog', verifyToken, FA_Control_NAC_Backlog);
router.get('/FA_Control_Assets_TypeGroup', verifyToken, FA_Control_Assets_TypeGroup);   

// BPC
router.post('/FA_Control_BPC_Sendmail', verifyToken, FA_Control_BPC_Sendmail);
router.post('/FA_Control_BPC_UpdateDetails', verifyToken, FA_Control_BPC_UpdateDetails);
router.post('/FA_Control_BPC_Running_NO', verifyToken, FA_Control_BPC_Running_NO);
router.post('/FA_Control_BPC_SELECT_TEMP', verifyToken, FA_Control_BPC_SELECT_TEMP);
router.post('/FA_Control_BPC_GroupBy', verifyToken, FA_Control_BPC_GroupBy);
router.post('/FA_Control_BPC_SelectStatus', verifyToken, FA_Control_BPC_SelectStatus);
router.post('/FA_Control_BPC_SubmitVertify', verifyToken, FA_Control_BPC_SubmitVertify);
router.post('/FA_Control_BPC_UpdateTemp', verifyToken, FA_Control_BPC_UpdateTemp);
router.get('/FA_Control_ListStatus', verifyToken, FA_Control_ListStatus);

//Assets
router.post('/UpdateDtlAsset', verifyToken, UpdateDtlAsset);

module.exports = {
    routes: router
}