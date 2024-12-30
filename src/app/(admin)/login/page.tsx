"use client";
import React, { useState } from "react";
import { cloneDeep } from "lodash";
import { Button } from "@/components/ui/button";
import login from "./login.module.css";
import { Icons } from "@/components/icons";
interface FormData {
  account: string;
  password: string;
}
function Login() {

  const defaultValue = {
    account: "",
    password: "",
  };

  const [data, setData] = useState<FormData>(defaultValue);

  const [error, setError] = useState<FormData>(defaultValue);

  const [show, setShow] = useState<boolean>(false);

  const onChangeData = (prop: string, value: string) => {
    let _data = cloneDeep(data);
    _data[prop] = value;
    validateData([prop], _data);
    setData(_data);
  };

  const validateData = (prop: string[], _data: FormData) => {
    let _error = cloneDeep(error);
    let requiredFields = prop.length > 0 ? prop : Object.keys(_data);
    let _prop = requiredFields;
    for (const field of _prop) {
      switch (field) {
        case "account":
          _error[field] = "";
          if (!_data[field]) {
            _error[field] = "Tài khoản không được bỏ trống!";
          }
          break;
        case "password":
          _error[field] = "";
          if (!_data[field]) {
            _error[field] = "Mật khẩu không được bỏ trống!";
          }
          break;
        default:
          break;
      }
    }

    setError(_error);
    let count = 0;
    for (const key in _error) {
      if (_error[key]) {
        count++;
      }
    }
    return count;
  };

  const renderError = (field: keyof FormData) => {
    if (error[field]) {
      return <span className="text-red-500 text-xs">{error[field]}</span>;
    }
  };

  const onSubmit = () => {
    let validate = validateData([], data);
    if (validate) return;
  };

  const onShowPassword = () => {
    setShow(!show);
  };

  const changeAccount = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeData("account", e.target.value);
  };
  const changePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChangeData("password", e.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Đăng nhập
        </h2>
        <div className="space-y-3">
          {/* Form account */}
          <div>
            <label className="block mb-1 text-gray-600">Tài khoản</label>
            <input
              name="account"
              value={data.account}
              onChange={changeAccount}
              placeholder="Tài khoản"
              className={`${login.border_input} w-full px-4 py-1 rounded-lg text-gray-700   focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
            />
            {renderError("account")}
          </div>
          {/* Form passwrod */}
          <div>
            <label className="block mb-1 text-gray-600">Mật khẩu</label>
            <div className="w-full relative">
              <input
                value={data.password}
                onChange={changePassword}
                type={show ? "text" : "password"}
                placeholder="Mật khẩu"
                className={`${login.border_input} w-full px-4 py-1 pr-14 text-gray-700 rounded-lg  focus:outline-none focus:ring-blue-500 focus:border-blue-500`}
              />
              <div
                className={`${login.icon_eye} cursor-pointer`}
                onClick={onShowPassword}
              >
              {show ? <Icons.eye_hidden/>: <Icons.eye_show/>}
              </div>
            </div>
            {renderError("password")}
          </div>
          <Button
            onClick={onSubmit}
            className="w-full mt-4 bg-blue-500 text-white rounded-lg py-2"
          >
            Đăng nhập
          </Button>
        </div>
        <p className="mt-4 text-sm text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-blue-500 hover:underline">
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;
