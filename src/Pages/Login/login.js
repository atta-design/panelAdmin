import React, { useState, useEffect } from "react";
import TextBox from "devextreme-react/text-box";
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
              <a href="index.html" class="mb-15">
								<img alt="Logo" src="assets/media/logos/logo-2-dark.svg" class="h-50px" />
							</a>
                <h1 className="text-dark fs-2x mb-3">خوش امدید</h1>

                <div className="fw-bold fs-4 text-gray-400 mb-10">
                  با انتخاب موضوع ایجاد پست ، وبلاگ خود را برنامه ریزی کنید
                  <br />
                  طرح کلی و بررسی حقایق
                </div>
              </div>
            </div>

            
            <div class="d-flex flex-row-auto bgi-no-repeat bgi-position-x-center bgi-size-contain bgi-position-y-bottom min-h-200px min-h-xl-300px mb-xl-10" style={{backgroundImage:` url("assets/media/illustrations/networks.png")`}}></div>

          </div>

          <div className="flex-row-fluid d-flex flex-center justfiy-content-xl-first p-10">
            <div className="d-flex flex-center p-15 shadow rounded w-100 w-md-550px mx-auto ms-xl-20">
              <form
                className="form"
                noValidate="novalidate"
                id="kt_free_trial_form"
              >
                	<div class="text-center mb-10">
								<h1 class="text-dark mb-3">در 30 روز رایگان آزمایش</h1>
							
								<div class="text-gray-400 fw-bold fs-4">سوالی دارید؟ 
								<a href="#" className="link-primary fw-bolder">سوالات متداول</a>.</div>
							</div>
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

                <div class="text-muted">از 8 حرف یا بیشتر با ترکیبی از حروف ، اعداد و نمادها استفاده کنید.</div>
                </div>
                <div class="fv-row mb-10">
								<label class="form-label fw-bolder text-dark fs-6">تایید کلمه عبور</label>
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
              <div class="fv-row mb-10">
								<label class="form-check form-check-custom form-check-solid form-check-inline mb-5">
									<input class="form-check-input" type="checkbox" name="toc" value="1" />
									<span class="form-check-label fw-bold text-gray-700">30  روز استفاده رایگان
									{' '}<a href="#" className="link-primary ms-1">شرایط</a>.</span>
								</label>
							</div>
                <div className="text-center pb-lg-0 pb-8">
                <div className="text-center pb-lg-0 pb-8">
								<button type="button" id="kt_free_trial_submit" class="btn btn-lg btn-primary fw-bolder" onClick={Clickhandler}>
									<span class="indicator-label">ساختن اکانت</span>
									<span class="indicator-progress">لطفا صبر کنید...
									<span class="spinner-border spinner-border-sm align-middle ms-2"></span></span>
								</button>
							</div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
