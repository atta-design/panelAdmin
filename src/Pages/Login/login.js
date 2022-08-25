import React, { useState, useEffect } from "react";
import TextBox from "devextreme-react/text-box";
import { Button } from "devextreme-react/button";
import axios from "axios";

export default function Login() {
  const [value, setValue] = useState("");
  const [password, setPassword] = useState("");
  const [isvalid, setIsvalid] = useState("valid");
  const [status, setStatus] = useState();

  const onValueChange = (value) => {
    setValue(value);
  };
  const onPasswordChange = (password) => {
    setPassword(password);
  };

  const Clickhandler = () => {
    axios
      .post("https://api-portal.saeedsafaee.ir/Account/Login", {
        username: value,
        password: password,
      })
      .then(function (response) {
        console.log(response.data);
        setStatus(response.data.status);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  useEffect(() => {
    if (status === 1 || status === undefined) {
      setIsvalid("valid");
    } else {
      setIsvalid("invalid");
    }
  }, [status]);

  return (
    <div dir="rtl">
      <div className="d-flex flex-column flex-root">
        <div className="d-flex flex-column flex-xl-row flex-column-fluid">
          <div className="d-flex flex-column flex-lg-row-fluid">
            <div className="d-flex flex-row-fluid flex-center p-10">
              <div className="d-flex flex-column">
                <h1 className="text-dark fs-2x mb-3">خوش امدید</h1>

                <div className="fw-bold fs-4 text-gray-400 mb-10">
                  با انتخاب موضوع ایجاد پست ، وبلاگ خود را برنامه ریزی کنید
                  <br />
                  طرح کلی و بررسی حقایق
                </div>
              </div>
            </div>

            <div className="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-200px min-h-xl-300px mb-xl-10"></div>
          </div>

          <div className="flex-row-fluid d-flex flex-center justfiy-content-xl-first p-10">
            <div className="d-flex flex-center p-15 shadow rounded w-100 w-md-550px mx-auto ms-xl-20">
              <form
                className="form"
                noValidate="novalidate"
                id="kt_free_trial_form"
              >
                <div className="text-center mb-10"></div>
                <div className="fv-row mb-10">
                  <label className="form-label fw-bolder text-dark fs-6">
                    ایمیل
                  </label>
                  <TextBox
                    value={value}
                    mode="email"
                    maxLength={20}
                    showClearButton={true}
                    onValueChange={onValueChange}
                    valueChangeEvent="input"
                    rtlEnabled={false}
                    validationStatus={isvalid}
                  />
                </div>
                <div className="mb-7 fv-row" data-kt-password-meter="true">
                  <div className="mb-1">
                    <label className="form-label fw-bolder text-dark fs-6">
                      کلمه عبور
                    </label>
                    <div className="position-relative mb-3">
                      <TextBox
                        value={password}
                        mode="password"
                        maxLength={20}
                        showClearButton={true}
                        onValueChange={onPasswordChange}
                        valueChangeEvent="input"
                        rtlEnabled={false}
                        validationStatus={isvalid}
                      />
                    </div>
                    <div
                      className="d-flex align-items-center mb-3"
                      data-kt-password-meter-control="highlight"
                    >
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px me-2"></div>
                      <div className="flex-grow-1 bg-secondary bg-active-success rounded h-5px"></div>
                    </div>
                  </div>

                
                </div>

                <div className="text-center pb-lg-0 pb-8">
                  <Button
                    text="Login"
                    type="default"
                    stylingMode="contained"
                    onClick={Clickhandler}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
