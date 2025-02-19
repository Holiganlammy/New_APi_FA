'use strict';

const express = require('express');
const userController = require('../controllers/PTEC_USERSRIGHT_Controller');
const router = express.Router();

const { getsUser,
    getUserCode, login,
    getsUserForAssetsControl,
    AutoDeapartMent,
    ChackUserWeb, select_Permission_Menu_NAC,
    Permission_Menu_NAC,
    Fix_Assets_Control_UPDATE_Permission,
    Department_List,
    Branch_ListAll,
    useright_getWelfare,
    ReactJS_LaunchingMenu,
    test_root,
    get_otp,
    User_UpdateUserInfo,
    User_ResetPassword,
    User_List,
    User_Save,
    Organization_List,
    User_List_ByPosition
} = userController;

router.get('/users', getsUser);
router.get('/users/:body', getUserCode);
router.post('/login', login);
router.get('/getsUserForAssetsControl', getsUserForAssetsControl);
router.post('/AutoDeapartMent', AutoDeapartMent);
router.post('/ChackUserWeb', ChackUserWeb);
router.post('/select_Permission_Menu_NAC', select_Permission_Menu_NAC);
router.post('/Permission_Menu_NAC', Permission_Menu_NAC);
router.post('/Fix_Assets_Control_UPDATE_Permission', Fix_Assets_Control_UPDATE_Permission);
router.post('/Department_List', Department_List);
router.get('/Branch_ListAll', Branch_ListAll);
router.post('/useright_getWelfare', useright_getWelfare);
router.post('/ReactJS_LaunchingMenu', ReactJS_LaunchingMenu);
router.get('/test_root', test_root);
router.post('/get_otp', get_otp);
router.post('/User_UpdateUserInfo', User_UpdateUserInfo);
router.post('/User_ResetPassword', User_ResetPassword);
router.get('/User_List', User_List);
router.post('/User_Save', User_Save);
router.get('/Organization_List', Organization_List);
router.get('/User_List_ByPosition', User_List_ByPosition);

module.exports = {
    routes: router
}