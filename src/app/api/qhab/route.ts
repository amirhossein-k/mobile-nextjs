import {NextRequest, NextResponse} from "next/server";

// export async function GET(req: NextRequest, {params}: any) {
//   const title = params.title;
//   console.log(title);
// }

// export async function GET(request: NextRequest) {
//   console.log("object");
//   const {searchParams} = new URL(request.url);
//   const name = searchParams.get("title");

//   return NextResponse.json({name});
// }

// 444
// 55522
// 4747

export async function GET(req: NextRequest, {params}: any) {
  const title = params.title;
  console.log(title);
  return NextResponse.json({title});
}
export async function POST(request: NextRequest) {
  try {
    console.log("hh");
    const json = await request.json();

    return NextResponse.json(json);
  } catch (e) {
    console.log(e);
    return new Response(null, {status: 400, statusText: "Bad Request"});
  }
}
