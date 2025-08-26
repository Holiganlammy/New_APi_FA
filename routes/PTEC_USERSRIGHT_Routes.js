'use strict';

const express = require('express');
const userController = require('../controllers/PTEC_USERSRIGHT_Controller');
const router = express.Router();
const verifyToken = require('../middleware/auth_outside');

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
    User_List_ByPosition,
    User_active,
    reset_password_expired
} = userController;

router.get('/users', verifyToken, getsUser);
router.get('/users/:body', verifyToken, getUserCode);
router.post('/login', login);
router.get('/getsUserForAssetsControl', verifyToken, getsUserForAssetsControl);
router.post('/AutoDeapartMent', verifyToken, AutoDeapartMent);
router.post('/ChackUserWeb', verifyToken, ChackUserWeb);
router.post('/select_Permission_Menu_NAC', select_Permission_Menu_NAC);
router.post('/Permission_Menu_NAC', verifyToken, Permission_Menu_NAC);
router.post('/Fix_Assets_Control_UPDATE_Permission', verifyToken, Fix_Assets_Control_UPDATE_Permission);
router.post('/Department_List', verifyToken, Department_List);
router.get('/Branch_ListAll', verifyToken, Branch_ListAll);
router.post('/useright_getWelfare', verifyToken, useright_getWelfare);
router.post('/ReactJS_LaunchingMenu', verifyToken, ReactJS_LaunchingMenu);
router.get('/test_root', verifyToken, test_root);
router.post('/get_otp', verifyToken, get_otp);
router.post('/User_UpdateUserInfo', verifyToken, User_UpdateUserInfo);
router.post('/User_ResetPassword', verifyToken, User_ResetPassword);
router.get('/User_List', verifyToken, User_List);
router.post('/User_Save', verifyToken, User_Save);
router.get('/Organization_List', verifyToken, Organization_List);
router.get('/User_List_ByPosition', verifyToken, User_List_ByPosition);
router.post('/User_active', verifyToken, User_active);
router.post('/reset_password_expired', verifyToken, reset_password_expired);

module.exports = {
    routes: router
}