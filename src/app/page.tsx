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
import NewProduct from "@/components/newproduct/NewProduct";
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
          title: "قاب های طراحی شده",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/balkouras-nicos-5ylXkp_dZng-unsplash.jpg",
          title: "قاب های فانتزی",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/daniel-fazio-DzqeB43HfnE-unsplash.jpg",
          title: "قاب های مردانه",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/daniel-korpai-tE_kGhscUTU-unsplash.jpg",
          title: "قاب های دخترانه",
        },
      ],
    },
    {
      layout: "offer",
      item: [
        // {
        //   pic: "https://uploade.storage.iran.liara.space/box.png",
        //   title: "item 0 ",
        // },
        {
          pic: "https://uploade.storage.iran.liara.space/2.jpg",
          title: "قاب سفید",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/3.jpeg",
          title: "قاب دخترکش",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/5.jpeg",
          title: "قاب دارک",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/6.jpeg",
          title: "قاب طرح اسکل های اویزون",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/7.jpeg",
          title: "قاب طرح چرت پرت",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/9.jpg",
          title: "گردنبند انیمه AOT طرح گروه شناسایی",
        },
      ],
    },
    {
      layout: "newproduct",
      item: [
        {
          pic: "https://uploade.storage.iran.liara.space/1.jpeg",
          title: "قاب نوتلا",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/5.jpeg",
          title: "قاب دارک ",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/3.jpeg",
          title: "قاب دخترکش",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/10.jpg",
          title: "هنزفری اخرین  مدل",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/11.png",
          title: "گردنبند وان پیس",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/7.jpeg",
          title: "قاب طرح چرت پرت",
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
              ) : item.layout === "offer" ? (
                <Layout size={"offer"} key={"g"}>
                  <Offer item={item} />
                </Layout>
              ) : item.layout === "newproduct" ? (
                <Layout size={"newproduct"} key={"g"}>
                  <NewProduct item={item} />
                </Layout>
              ) : (
                <div className="">ff</div>
              )
            )}
        </div>
      </div>
    </main>
  );
}
