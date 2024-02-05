"use client";
import {FormEvent, useState, useTransition} from "react";

import styles from "@/styles/register.module.css";
import Form from "@/components/Form";
import {ToastContainer} from "react-toastify";

const RegisterPage = () => {
  // const [isPending, startTransition] = useTransition();
  const [singup, setSingup] = useState(false);

  return (
    <div className="min-h-[100vh] h-full">
      <ToastContainer autoClose={2000} />
      <main className=" w-full h-[100vh] @container-normal">
        <div className=" h-full flex justify-center items-center">
          <div className={`${styles.wrapper_register}  my-2 mx-auto`}>
            <div className={styles.title_text}>
              <div
                className={`${styles.title} ${styles.login}`}
                style={singup ? {marginLeft: "-50%"} : {marginLeft: "0%"}}
              >
                ورود
              </div>
              <div className={`${styles.title} ${styles.singup}`}>عضویت</div>
            </div>
            <div className={styles.form_container}>
              <div className={styles.slide_controls}>
                <input type="radio" name="slide" id="login" defaultChecked />
                <label
                  htmlFor="login"
                  className={`${styles.slide} ${styles.login} `}
                  style={
                    !singup
                      ? {color: "#fff", cursor: "default"}
                      : {color: "#000", cursor: "pointer"}
                  }
                  onClick={() => setSingup(false)}
                >
                  ورود
                </label>
                <input type="radio" name="slide" id="signup" />
                <label
                  htmlFor="login"
                  className={`${styles.signup} ${styles.slide}`}
                  style={
                    singup
                      ? {color: "#fff", cursor: "default"}
                      : {color: "#000", cursor: "pointer"}
                  }
                  onClick={() => setSingup(true)}
                >
                  عضویت
                </label>
                <div
                  className={`${
                    singup
                      ? `${styles.slide_tab} ${styles.checked}`
                      : `${styles.slide_tab}`
                  }`}
                ></div>
              </div>

              {/*false = ورود */}
              <Form stylee={{singup, setSingup}} />
              {/* عضویت  = True*/}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default RegisterPage;
