import React, { useState } from "react";
import { axiosPost } from "../../managers/postData";
import TextBoxComponent from "../../Components/textBox/TextBox";
import ButtonComponent from "../../Components/buttons/Button";
import { LoadPanel } from "devextreme-react/load-panel";
import { useToast } from "../../Components/Toasts/utils/toast/useToast";
import getStatusMessage from "../../Components/Toasts/utils/statusHandler";

import { TextBoxConfig as EmailConfig } from "../configs/emailTextBoxConfig";
import { TextBoxConfig as PasswordConfig } from "../configs/passwordTextBoxConfig";
import { ButtonConfig as SubmitConfig } from "../configs/submitButtonConfig";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loadPanelVisible, setLoadPanelVisible] = useState(false);
  const { showMessage } = useToast();

  async function handleSubmit(e) {
    setLoadPanelVisible(true);

    e.preventDefault();

    var postOjb = {
      username: email,
      password: password,
    };

    const data = await axiosPost("", postOjb);

    if (data.status === 1) {
      setLoadPanelVisible(false);
    } else {
      setLoadPanelVisible(false);
      showMessage(true, getStatusMessage(data.status), "error");
    }
  }

  return (
    <div
      dir="rtl"
      className="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20"
    >
      <a href="index.html" className="mb-12">
        <img
          alt="Logo"
          src="/assets/media/logos/logo-2-dark.svg"
          className="h-45px"
        />
      </a>
      <div className="w-lg-500px bg-white rounded shadow-sm p-10 p-lg-15 mx-auto">
        <form
          className="form w-100 fv-plugins-bootstrap5 fv-plugins-framework"
          onSubmit={handleSubmit}
          id="kt_sign_in_form"
        >
          <div className="text-center mb-10">
            <h1 className="text-dark mb-3">ورود به پرتال مدیریت</h1>
          </div>
          <div className="fv-row mb-10 fv-plugins-icon-container">
            <label className="form-label fs-6 fw-bolder text-dark">ایمیل</label>

            <TextBoxComponent
              config={EmailConfig}
              onValueChanged={(data) => setEmail(data.value)}
            ></TextBoxComponent>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>

          <div className="fv-row mb-10 fv-plugins-icon-container">
            <div className="d-flex flex-stack mb-2">
              <label className="form-label fw-bolder text-dark fs-6 mb-0">
                کلمه عبور
              </label>
              <a className="link-primary fs-6 fw-bolder">فراموشی رمز</a>
            </div>

            <TextBoxComponent
              config={PasswordConfig}
              onValueChanged={(data) => setPassword(data.value)}
            ></TextBoxComponent>
            <div className="fv-plugins-message-container invalid-feedback"></div>
          </div>
          <div className="text-center">
            <ButtonComponent config={SubmitConfig}></ButtonComponent>
            <LoadPanel
              visible={loadPanelVisible}
              shading={true}
              showPane={true}
              showIndicator={true}
              closeOnOutsideClick={false}
              shadingColor="rgba(0,0,0,0.4)"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
