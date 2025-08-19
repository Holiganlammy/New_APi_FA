'use strict';

const userData = require('../PTEC_DATA/query_ptec_user');
const TokenManager = require('./token_manager');

const getsUser = async (req, res, next) => {
  try {
    const users = await userData.getsUser();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(users);
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const getUserCode = async (req, res, next) => {
  try {
    const UserCode = req.params.body;
    const oneUser = await userData.getById(UserCode);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(oneUser);
  } catch (error) {
    res.status(400).send(error.message)
  }
}

const login = async (req, res, next) => {
    try {
        const codeAndpassword = req.body;
        if (!codeAndpassword.UserCode || !codeAndpassword.Password) {
            return res.status(400).json({ 
                message: "UserCode and Password are required",
                success: false 
            });
        }

        const loginData = await userData.getByEmailAndCode(codeAndpassword);
        const timeElapsed = Date.now();
        const today = new Date(timeElapsed);

        if (!loginData || (loginData[0].password !== 1 && loginData[0].password !== 9)) {
            return res.status(401).json({
                message: "Invalid credentials",
                success: false
            });
        }
        const user = loginData[0];
        
        const accessToken = TokenManager.getGenarateToken({ "UserCode": loginData[0].password });

        const resetPasswordToken = TokenManager.generatePasswordResetToken({ 
            "UserCode": user.UserCode,
            "type": "password_reset",
        });
        if (user.changepassword === false) {
            return res.status(200).json({
                message: "Login success (First Login)",
                data: loginData,
                request_reset_token: resetPasswordToken,
                token: accessToken,
                changepassword: false,
                date: today.toLocaleString("sv-SE"),
                success: true
            });
        } 
        if (user.password == 9) {
            return res.status(200).json({
                message: "Login success (password expired)",
                data: loginData,
                request_reset_token: resetPasswordToken,
                expirepassword: true,
                date: today.toLocaleString("sv-SE"),
                success: true
            });
        } 
        
        if (user.password == 1) {
            return res.status(200).json({
                message: "Login successful",
                data: loginData,
                token: accessToken,
                date: today.toLocaleString("sv-SE"),
                success: true
            });
        } 
        return res.status(401).json({ 
            message: "Invalid password", 
            success: false 
        });

    } catch (error) {
        console.error('Login error:', error);
        return res.status(500).json({ 
            message: "Internal server error", 
            success: false 
        });
    }
};

const reset_password_expired = async (req, res, next) => {
    try {
        const authResult = TokenManager.verifyTokenType(req, "password_reset");
        
        if (!authResult.success) {
            if (authResult.expired) {
                return res.status(401).json({ 
                    message: "Password reset token has expired. Please request a new reset link.", 
                    success: false,
                    expired: true
                });
            }
            return res.status(401).json({ 
                message: authResult.error || "Invalid or expired reset token", 
                success: false 
            });
        }

    const { newPassword, confirmPassword, userId } = req.body;
        
        // Validate input
        if (!newPassword || !confirmPassword) {
            return res.status(400).json({ 
                message: "New password and confirm password are required", 
                success: false 
            });
        }

        if (newPassword !== confirmPassword) {
            return res.status(400).json({ 
                message: "Passwords do not match", 
                success: false 
            });
        }

        // Validate new password
        if (newPassword.length < 8) {
            return res.status(400).json({ 
                message: "Password must be at least 8 characters", 
                success: false 
            });
        }
        const userList = await userData.User_List_Params(userId, '');
        const result = await userData.User_ResetPassword({
          loginname: userList[0].UserCode,
          newpassword: newPassword
        });
        if (result[0].samePassword === 1){
          return res.status(400).json({
              message: "New password cannot be the same as the old password",
              success: false
          });
        }
        if (result[0].success === 0) {
            return res.status(500).json({ 
                message: "Failed to change password", 
                success: false 
            });
        }

        return res.status(200).json({ 
            message: "Password changed successfully", 
            success: true 
        });

    } catch (error) {
        console.error('Change password error:', error);

        if (error.name === 'TokenExpiredError') {
            return res.status(401).json({ 
                message: "Password reset token has expired. Please request a new reset link.", 
                success: false,
                expired: true
            });
        }
        
        return res.status(500).json({ 
            message: "Internal server error", 
            success: false 
        });
    }
};

const getsUserForAssetsControl = async (req, res, next) => {
  try {
    const users = await userData.getsUser();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(JSON.stringify({ message: "usuccess", data: users }));
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const AutoDeapartMent = async (req, res, next) => {
  try {
    const data = req.body;
    const auto_DeapartMent = await userData.AutoDeapartMent(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    if (auto_DeapartMent.length == 0) {
      res.status(400).send(JSON.stringify({ message: "ไม่พบข้อมูล" }));
    } else {
      res.status(200).send(JSON.stringify({ message: "success", data: auto_DeapartMent }));
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const ChackUserWeb = async (req, res, next) => {
  try {
    const data = req.body;
    const chackUserWeb = await userData.ChackUserWeb(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    if (chackUserWeb.length == 0) {
      res.status(400).send(JSON.stringify({ message: "ไม่พบข้อมูล" }));
    } else {
      res.status(200).send(JSON.stringify({ message: "success", data: chackUserWeb }));
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const select_Permission_Menu_NAC = async (req, res, next) => {
  try {
    const data = req.body;
    const permission_Menu_NAC = await userData.select_Permission_Menu_NAC(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(JSON.stringify({ message: "success", data: permission_Menu_NAC }));
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const Permission_Menu_NAC = async (req, res, next) => {
  try {
    const data = req.body;
    const permission_Menu_NAC = await userData.Permission_Menu_NAC(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    if (permission_Menu_NAC.length == 0) {
      res.status(400).send(JSON.stringify({ message: "ไม่พบข้อมูล" }));
    } else {
      res.status(200).send(JSON.stringify({ message: "success", data: permission_Menu_NAC }));
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const Fix_Assets_Control_UPDATE_Permission = async (req, res, next) => {
  try {
    const data = req.body;
    const permission_Menu_NAC = await userData.Fix_Assets_Control_UPDATE_Permission(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(JSON.stringify({ message: "success", data: permission_Menu_NAC }));
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const Department_List = async (req, res, next) => {
  try {
    const data = req.body;
    const data_new = await userData.Department_List(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(JSON.stringify({ message: "success", data: data_new }));
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const Branch_ListAll = async (req, res, next) => {
  try {
    const data_new = await userData.Branch_ListAll();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(JSON.stringify({ message: "success", data: data_new }));
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const useright_getWelfare = async (req, res, next) => {
  try {
    const data = req.body;
    const data_new = await userData.useright_getWelfare(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(JSON.stringify({ message: "success", data: data_new }));
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const ReactJS_LaunchingMenu = async (req, res, next) => {
  try {
    const data = req.body;
    const data_new = await userData.ReactJS_LaunchingMenu(data);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(JSON.stringify({ message: "success", data: data_new }));
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const test_root = async (req, res, next) => {
  try {
    const users = await userData.test_root();
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(users);
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const get_otp = async (req, res, next) => {
  try {
    const df_otp = 'PTECOTP'
    const data = req.body;
    if (data.res === df_otp) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(JSON.stringify({ message: "Reset Password Successfully" }));
    } else {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(400).send(JSON.stringify({ message: "Your OTP Wrong" }));
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const User_UpdateUserInfo = async (req, res, next) => {
  try {
    const dataRes = await userData.User_UpdateUserInfo(req.body);
    if (dataRes.length > 0) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(dataRes);
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const User_ResetPassword = async (req, res, next) => {
  try {
    const dataRes = await userData.User_ResetPassword(req.body);
    console.log(dataRes);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(dataRes);
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const User_List = async (req, res, next) => {
  try {
    const dataRes = await userData.User_List();
    if (dataRes.length > 0) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(dataRes);
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const User_Save = async (req, res, next) => {
  try {
    const dataRes = await userData.User_Save(req.body);
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.status(200).send(dataRes);
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const Organization_List = async (req, res, next) => {
  try {
    const dataRes = await userData.Organization_List();
    if (dataRes.length > 0) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(dataRes);
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const User_List_ByPosition = async (req, res, next) => {
  try {
    const dataRes = await userData.User_List_ByPosition();
    if (dataRes.length > 0) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(dataRes);
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

const User_active = async (req, res, next) => {
  try {
    const dataRes = await userData.User_active(req.body);
    if (dataRes.length > 0) {
      res.setHeader("Content-Type", "application/json; charset=utf-8");
      res.status(200).send(dataRes);
    }
  } catch (error) {
    res.status(201).send(error.message);
  }
}

module.exports = {
  getsUser,
  getUserCode,
  login,
  reset_password_expired,
  getsUserForAssetsControl,
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
  get_otp,
  User_UpdateUserInfo,
  User_ResetPassword,
  User_List,
  User_Save,
  Organization_List,
  User_List_ByPosition,
  User_active
}