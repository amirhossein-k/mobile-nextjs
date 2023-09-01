import CategoryItem from "@/components/category/CategoryItem";
import axios from "axios";
import {CategoryMain} from "../../types";
import getCategoryMain from "../../actions/GetCategoryMain";
import Layout from "@/components/layout/Layout";
import Slider from "@/components/slider/slider";
import Image from "next/image";
import Banner from "@/components/banner/Banner";
import Offer from "@/components/offer/Offer";
import {ToastContainer} from "react-toastify";
export default async function Home() {
  // const category: CategoryMain[] = resjson.data;
  const category = await getCategoryMain();
  console.log(category);

  const list = [
    {layout: "categoryMain"},
    {layout: "slider"},
    {
      layout: "banner",

      item: [
        {
          pic: "https://uploade.storage.iran.liara.space/arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg",
          title: "item 1 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/balkouras-nicos-5ylXkp_dZng-unsplash.jpg",
          title: "item 2 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/daniel-fazio-DzqeB43HfnE-unsplash.jpg",
          title: "item 3 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/daniel-korpai-tE_kGhscUTU-unsplash.jpg",
          title: "item 4 ",
        },
      ],
    },
    {
      layout: "offer",
      item: [
        {
          pic: "https://uploade.storage.iran.liara.space/arnel-hasanovic-4oWSXdeAS2g-unsplash.jpg",
          title: "item 1 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/balkouras-nicos-5ylXkp_dZng-unsplash.jpg",
          title: "item 2 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/daniel-fazio-DzqeB43HfnE-unsplash.jpg",
          title: "item 3 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/daniel-korpai-tE_kGhscUTU-unsplash.jpg",
          title: "item 4 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/function%20toString%28%29%20%7B%20%5Bnative%20code%5D%20%7D5154ea4d35f16e1a58feef672d50efd7.jpg",
          title: "item 5 ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/function%20toString%28%29%20%7B%20%5Bnative%20code%5D%20%7Dlicensed-image.jpg",
          title: "item 6 ",
        },
      ],
    },
  ];
  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full ">
      <div className="container-fluid  relative  w-full h-full px-1 ">
        {/* {category !== undefined && <CategoryItem category={category} />} */}
        <div className="grid w-full grid-cols-4  py-4 auto-rows-auto gap-2 h-max">
          {category !== undefined &&
            list.map((item) =>
              item.layout === "categoryMain" ? (
                <Layout size={"categoryMain"} key={"g"}>
                  <CategoryItem category={category} />
                  {/* <div className="">cat</div> */}
                </Layout>
              ) : item.layout === "slider" ? (
                <Layout size={"slider"} key={"g"}>
                  <Slider category={category} />
                  {/* <div className="h-full w-full">d</div> */}
                </Layout>
              ) : item.layout === "banner" ? (
                <Layout size={"banner"} key={"g"}>
                  <Banner item={item} />
                </Layout>
              ) : (
                <Layout size={"offer"} key={"g"}>
                  <Offer item={item} />
                </Layout>
              )
            )}
        </div>
      </div>
    </main>
  );
}
