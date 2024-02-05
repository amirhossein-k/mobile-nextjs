// "use client";
import React, {Dispatch, SetStateAction} from "react";
import styles from "@/styles/register.module.css";
import {loginUser, registerUSer} from "../../actions/AddUser";
import axios from "axios";
import {useRouter} from "next/navigation";
import {ObjectId} from "mongoose";
import {toast} from "react-toastify";
interface StyleFormUser {
  singup: boolean;
  setSingup: any;
}

interface UserLoginRes {
  message?: string;
  success?: boolean;
  id?: ObjectId;
  error?: string | boolean;

  savedUser?: any;
}

const Form = ({stylee}: {stylee: StyleFormUser}) => {
  const router = useRouter();
  const registerUSers = async (e: FormData) => {
    try {
      const register = registerUSer(e);
      const r = toast.promise(register, {
        pending: {
          render() {
            return "منتظر بمانید";
          },
        },
        success: {
          render({data}: any) {
            stylee.setSingup(false);
            return data.message;
          },
        },
        error: {
          render({data}: any) {
            return data.message;
          },
        },
      });
    } catch (error: any) {}
  };

  const onLogin = async (e: FormData) => {
    try {
      const email = e.get("email") as string;
      const password = e.get("password") as string;

      const login = axios.post("/api/users/login", {email, password});

      toast.promise(login, {
        pending: "لطفا صبر کنید",
        success: "خوش امدید",
        error: "لطفا ایمیل و پسورد خود را چک کنید",
      });
      const res = await login;

      setTimeout(() => {
        router.push(`/profile`);
      }, 1000);
    } catch (err: any) {
      console.log(err, "login failed");
    }
  };
  return (
    <div
      className={styles.form_inner}
      style={stylee ? {height: 414} : {height: 250}}
    >
      {/* login */}
      {!stylee?.singup && (
        <form className={styles.login} action={onLogin}>
          <pre></pre>
          <div className={styles.field}>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="Email..." name="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password..." name="password" />
          </div>
          <div className={styles.pass_link}>
            <a href="#">فراموشی رمز</a>
          </div>
          <div className={`${styles.btn} ${styles.field}`}>
            <div className={styles.btn_layer}></div>
            <button type="submit">ورود</button>
          </div>
        </form>
      )}
      {/* register */}
      {stylee.singup && (
        <form className={styles.signup} action={(e) => registerUSers(e)}>
          <pre></pre>
          <div className={styles.field}>
            <label htmlFor="name">Password:</label>
            <input type="text" placeholder="name..." name="name" />
          </div>
          <div className={styles.field}>
            <label htmlFor="email">Email:</label>
            <input type="text" placeholder="Email..." name="email" />
          </div>
          <div className={styles.field}>
            <label htmlFor="password">Password:</label>
            <input type="password" placeholder="password..." name="password" />
          </div>
          {/* <div className={styles.field}></div> */}

          <div className={`${styles.btn} ${styles.field}`}>
            <div className={styles.btn_layer}></div>
            <button type="submit">عضویت</button>
          </div>
          <div className={styles.signup_ink}>
            ایا عضو هستید؟ <span>ورود</span>
          </div>
        </form>
      )}
    </div>
  );
};

export default Form;
