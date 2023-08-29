"use client";
import {ToastContainer, toast} from "react-toastify";

export default function Home() {
  // const notify = () => toast("Wow so easy !");
  const update = () =>
    toast.update(1, {type: toast.TYPE.INFO, autoClose: 5000});
  console.log("Home");
  return (
    <main className="">
      <button onClick={update}>Notify !</button>
      <ToastContainer />
    </main>
  );
}
