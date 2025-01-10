'use strict';

const getsUser = async () => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const list = await pool
      .request()
      .query(`exec [TEST_USERSRIGHT].dbo.[Fix_Assets_Control_Fetching_Users]`);
    //sql.close()
    return list.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const getById = async (UserCode) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const oneUser = await pool.request()
      .input('UserCode', sql.VarChar(10), UserCode)
      .query(`exec [TEST_USERSRIGHT].dbo.[Fix_Assets_Control_Fetching_Users_ByUserCode] @UserCode`);
    //sql.close()
    return oneUser.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const getByEmailAndCode = async (loginuser) => {
  console.log(loginuser);
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const login = await pool.request()
      .input('UserCode', sql.VarChar(20), loginuser.UserCode)
      .input('Password', sql.VarChar(20), loginuser.Password)
      .query(`exec [TEST_USERSRIGHT].dbo.User_Login @UserCode,@Password `);
    //sql.close()
    return login.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

// Control Assets
const AutoDeapartMent = async (autoDeapartMent) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .input('UserCode', sql.VarChar(10), autoDeapartMent.UserCode)
      .query(`SELECT U.[DepID]
                    ,D.[DepCode]
                    ,U.[BranchID]
                    ,U.[Name]
                    ,BM.[manager]
      FROM [TEST_USERSRIGHT].dbo.[Users] U 
      LEFT JOIN [TEST_USERSRIGHT].dbo.[Department] D On D.DepID=U.DepID
      LEFT JOIN [TEST_USERSRIGHT].dbo.[Branch_Manager] BM On BM.BranchID=U.BranchID
      WHERE U.[UserCode]=@UserCode
      `);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const ChackUserWeb = async (UserWeb) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .input('usercode', sql.VarChar(10), UserWeb.usercode)
      .query(`exec [TEST_USERSRIGHT].dbo.Fix_Assets_Control_UserWeb @usercode`);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const select_Permission_Menu_NAC = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .input('Permission_TypeID', sql.Int, res.Permission_TypeID)
      .input('userID', sql.Int, res.userID)
      .input('UserCode', sql.VarChar, res.UserCode)
      .query(`exec [TEST_USERSRIGHT].dbo.Select_Permission_Menu_NAC @Permission_TypeID,@userID,@UserCode`);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const Permission_Menu_NAC = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .input('UserCode', sql.VarChar, res.UserCode)
      .query(`exec [TEST_USERSRIGHT].dbo.Fix_Assets_Control_Permission_Menu`);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const Fix_Assets_Control_UPDATE_Permission = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .input('admin', sql.VarChar, res.admin)
      .input('UserCode', sql.VarChar, res.UserCode)
      .input('menuid', sql.Int, res.menuid)
      .input('id', sql.Int, res.id)
      .query(`exec [TEST_USERSRIGHT].dbo.Fix_Assets_Control_UPDATE_Permission @admin ,@UserCode ,@menuid ,@id`);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const Department_List = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .input('branchid', sql.Int, res.branchid)
      .query(`exec [TEST_USERSRIGHT].dbo.[Department_List] @branchid`);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const Branch_ListAll = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .query(`exec [TEST_USERSRIGHT].dbo.[Branch_ListAll]`);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const useright_getWelfare = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const auto_DeapartMent = await pool.request()
      .input('welfaretypeid', sql.Int, res.welfaretypeid ?? null)
      .input('sbc_hotelProvince', sql.NVarChar, res.sbc_hotelProvince ?? null)
      .input('usercode', sql.NVarChar, res.usercode ?? null)
      .query(`exec [TEST_USERSRIGHT].dbo.[useright_getWelfare] @welfaretypeid, @sbc_hotelProvince, @usercode`);
    //sql.close()
    return auto_DeapartMent.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const ReactJS_LaunchingMenu = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.object_test_ops.sql);
    const data = await pool.request()
      .input('userid', sql.Int, res.userid)
      .query(`exec ${config.PTEC.object_test_ops.sql.database}.dbo.[ReactJS_LaunchingMenu] @userid`);
    //sql.close()
    return data.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const test_root = async (res) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.objcn_usersright.sql);
    const list = await pool
      .request()
      .query(`SELECT '1' as menuid ,NULL as upperid ,'1' as groupid,'IAS' as menuname,NULL as path , 'fa-solid fa-shield' as iconMenu
              union 
              SELECT '2' as menuid ,1 as upperid ,'1' as groupid,'Job List' as menuname,'/Audit/JobList' as path, NULL as iconMenu
              union 
              SELECT '3' as menuid ,1 as upperid ,'1' as groupid,'Report' as menuname,NULL as path , NULL as iconMenu
              union
              SELECT '4' as menuid ,NULL as upperid ,'2' as groupid,'Admin' as menuname,NULL as path , 'fa-solid fa-user' as iconMenu
              union 
              SELECT '5' as menuid ,4 as upperid ,'2' as groupid,'Setup Permission' as menuname,NULL as path , NULL as iconMenu
              union 
              SELECT '6' as menuid ,4 as upperid ,'2' as groupid,'Setup Menu' as menuname,NULL as path , NULL as iconMenu`);
    //sql.close()
    return list.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const User_UpdateUserInfo = async (req) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.object_test_ops.sql);
    const data = await pool.request()
      .input('userid', sql.Int, req.userid)
      .input('password', sql.NVarChar(100), req.password)
      .input('fristName', sql.NVarChar(100), req.fristName)
      .input('lastName', sql.NVarChar(100), req.lastName)
      .input('img_profile', sql.NVarChar(100), req.img_profile)
      .query(`exec [TEST_USERSRIGHT].dbo.[User_UpdateUserInfo] 
              @userid,
              @password,
              @fristName,
              @lastName,
              @img_profile`);
    //sql.close()
    return data.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const User_ResetPassword = async (req) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.object_test_ops.sql);
    const data = await pool.request()
      .input('loginname', sql.NVarChar(20), req.loginname)
      .input('newpassword', sql.NVarChar(100), req.newpassword)
      .query(`exec [TEST_USERSRIGHT].dbo.[User_ResetPassword] 
              @loginname,
              @newpassword`);
    //sql.close()
    return data.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const User_List = async (req) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.object_test_ops.sql);
    const data = await pool.request()
      .query(`exec [TEST_USERSRIGHT].dbo.[User_List]`);
    //sql.close()
    return data.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

const User_Save = async (req) => {
  const config = require('../../config');
  const sql = require('mssql');
  try {
    let pool = await sql.connect(config.PTEC.object_test_ops.sql);
    const data = await pool.request()
      .input('fristName', sql.NVarChar(100), req.fristName)
      .input('lastName', sql.NVarChar(100), req.lastName)
      .input('loginname', sql.NVarChar(20), req.loginname)
      .input('branchid', sql.NVarChar(20), req.branchid)
      .input('department', sql.NVarChar(100), req.department)
      .input('secid', sql.NVarChar(20), req.secid)
      .input('positionid', sql.NVarChar(100), req.positionid)
      .input('empupper', sql.NVarChar(20), req.empupper)
      .input('email', sql.NVarChar(100), req.email)
      .input('actived', sql.Bit, req.actived)
      .input('password', sql.NVarChar(20), req.password)
      .query(`exec [TEST_USERSRIGHT].dbo.[User_Save] 
              @fristName,
              @lastName,
              @loginname,
              @branchid,
              @department,
              @secid,
              @positionid,
              @empupper,
              @email,
              @actived,
              @password,
              `);
    //sql.close()
    return data.recordset;
  } catch (error) {
    //sql.close()
    return error.message;
  }
}

// @Name varchar(100),
// @loginname varchar(20),
// @branchid varchar(50),
// @department varchar(50),
// @secid varchar(50),
// @positionid varchar(50),
// @empupper varchar(50)=null,
// @email varchar(50),
// @password varchar(50)

module.exports = {
  getsUser,
  getById,
  getByEmailAndCode,
  AutoDeapartMent,
  ChackUserWeb,
  select_Permission_Menu_NAC,
  Permission_Menu_NAC,
  Fix_Assets_Control_UPDATE_Permission,
  Department_List,
  Branch_ListAll,
  useright_getWelfare,
  ReactJS_LaunchingMenu,
  test_root,
  User_UpdateUserInfo,
  User_ResetPassword,
  User_List,
}