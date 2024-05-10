"use server";

import { NextRequest, NextResponse } from "next/server";
import { GetDataFromTokkenWithTokken } from "../helpers/getDataFromTokken";
import User from "@/models/userModel";
import { ConnectDb } from "@/db/dbConfig";
import { cookies } from "next/headers";
import { USER } from "../types";
export default async function getUser() {
    try {
        ConnectDb();
        const cookieStore = cookies();
        const tokken = cookieStore.get("tokken")?.value|| "";
        console.log(tokken)
        // const tokken = req.cookies.get("tokken")?.value || "";
        const userID = await GetDataFromTokkenWithTokken(tokken);
        console.log(`id: ${userID}`)
        const user = await User.findOne({_id: userID}).select("-password") ;
        console.log(`user: ${user}`)
        if (user) return user;
    //   if (category) return category;
    } catch (error: any) {
        return NextResponse.json({error: error.message}, {status: 400});
      throw new Error(error);
    }
  }