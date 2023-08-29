"use server";

import axios, {AxiosRequestConfig} from "axios";

interface RegisterRes {
  name: string;
  password: string;
  email: string;
}

interface UserRes {
  message?: string;
  success?: boolean;
  savedUser?: RegisterRes;
  error?: string | boolean;
}
export const registerUSer = async (e: FormData) => {
  const email = e.get("email") as string;
  const password = e.get("password") as string;
  const name = e.get("name") as string;

  const us = {
    email,
    password,
    name,
  };
  // console.log(`email: ${email} | password : ${password} | name: ${name}`);

  try {
    const options: AxiosRequestConfig = {
      method: "POST",
      url: "http://localhost:3000/api/users/register",
      headers: {
        "Content-Type": "application/json",
      },
      data: us,
    };

    const {data}: {data: UserRes} = await axios(options);

    return data;
  } catch (error: any) {
    // throw new Error("خطا");

    throw error.response.data.error;
    // return {error: "signup failed"};
  }
};

export const loginUser = async (e: FormData) => {};
