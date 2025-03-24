'use strict';

const express = require('express');
const assetController = require('../controllers/PTEC_FA_Controller');
const router = express.Router();

const {
    getAllasset,
    assetByCode,
    addAsset, getCode,
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
    store_FA_control_update_DTL,
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

router.post('/ReportassetsAll', getAllasset);
router.post('/getAsset', assetByCode);
router.get('/getAsset/:body', getCode);
router.post('/addAsset', addAsset);
router.post('/getAssetbyUserBranch', assetByUserBranch);
router.post('/wrongBranch', WrongBranch);
router.post('/testGetBranch', getAllasset2);
router.post('/lostAssets', lostAssets);
router.post('/updateReference', updateReference);
router.post('/check_code_result', scan_check_result);
router.post('/FA_Mobile_UploadImage', FA_Mobile_UploadImage);

// AssetsAll_Control
router.post('/AssetsAll_Control', AssetsAll_Control);
router.post('/SelectDTL_Control', SelectDTL_Control);
router.post('/FA_Control_Create_Document_NAC', FA_Control_Create_Document_NAC);
router.post('/FA_Control_Create_Detail_NAC', FA_Control_Create_Detail_NAC);
router.post('/FA_Control_Select_MyNAC', FA_Control_Select_MyNAC);
router.post('/FA_Control_select_dtl', FA_Control_select_dtl);
router.post('/store_FA_control_select_dtl_draff', store_FA_control_select_dtl_draff);
router.post('/FA_Control_select_headers', FA_Control_select_headers);
router.post('/store_FA_control_update_DTLandHeaders', store_FA_control_update_DTLandHeaders);
router.post('/store_FA_control_update_DTL', store_FA_control_update_DTL);
router.post('/FA_Control_execDocID', FA_Control_execDocID);
router.post('/FA_Control_Select_MyNAC_Approve', FA_Control_Select_MyNAC_Approve);
router.post('/FA_control_updateStatus', FA_control_updateStatus);
router.post('/store_FA_control_drop_NAC', store_FA_control_drop_NAC);
router.post('/store_FA_control_comment', store_FA_control_comment);
router.post('/qureyNAC_comment', qureyNAC_comment);
router.post('/store_FA_control_GuaranteeNAC', store_FA_control_GuaranteeNAC);
router.post('/store_FA_control_seals_update', store_FA_control_seals_update);
router.post('/store_FA_control_updateDTL_seals', store_FA_control_updateDTL_seals);
router.post('/stroe_FA_control_Path', stroe_FA_control_Path);
router.post('/qureyNAC_path', qureyNAC_path);
router.post('/FA_Control_CheckAssetCode_Process', FA_Control_CheckAssetCode_Process);
router.post('/stroe_FA_control_DTL_ConfirmSuccess', stroe_FA_control_DTL_ConfirmSuccess);
router.post('/store_FA_control_upadate_table', store_FA_control_upadate_table);
router.post('/store_FA_SendMail', store_FA_SendMail);
router.post('/store_FA_control_Create_from_reported', store_FA_control_Create_from_reported);
router.post('/store_FA_control_HistorysAssets', store_FA_control_HistorysAssets);
router.post('/FA_Control_Fetch_Assets', FA_Control_Fetch_Assets);
router.post('/FA_Control_Report_All_Counted_by_Description', FA_Control_Report_All_Counted_by_Description);
router.post('/FA_Control_New_Assets', FA_Control_New_Assets);
router.post('/FA_Control_New_Assets_Xlsx', FA_Control_New_Assets_Xlsx);
router.post('/FA_Control_import_dataXLSX_toAssets', FA_Control_import_dataXLSX_toAssets);
router.post('/check_files', check_files);
router.post('/check_files_NewNAC', check_files_NewNAC);
router.post('/FA_Control_Delete_PATH', FA_Control_Delete_PATH);
router.post('/FA_Control_Edit_EBook', FA_Control_Edit_EBook);
router.post('/FA_Control_UpdateDetailCounted', FA_Control_UpdateDetailCounted);
router.post('/FA_Control_AnnualGraph', FA_Control_AnnualGraph);
router.get('/FA_Control_NAC_Backlog', FA_Control_NAC_Backlog)
router.get('/FA_Control_Assets_TypeGroup',FA_Control_Assets_TypeGroup)

// BPC
router.post('/FA_Control_BPC_Sendmail', FA_Control_BPC_Sendmail);
router.post('/FA_Control_BPC_UpdateDetails', FA_Control_BPC_UpdateDetails);
router.post('/FA_Control_BPC_Running_NO', FA_Control_BPC_Running_NO);
router.post('/FA_Control_BPC_SELECT_TEMP', FA_Control_BPC_SELECT_TEMP);
router.post('/FA_Control_BPC_GroupBy', FA_Control_BPC_GroupBy);
router.post('/FA_Control_BPC_SelectStatus', FA_Control_BPC_SelectStatus)
router.post('/FA_Control_BPC_SubmitVertify', FA_Control_BPC_SubmitVertify)
router.post('/FA_Control_BPC_UpdateTemp', FA_Control_BPC_UpdateTemp)
router.get('/FA_Control_ListStatus', FA_Control_ListStatus)

//Assets
router.post('/UpdateDtlAsset', UpdateDtlAsset)

module.exports = {
    routes: router
}