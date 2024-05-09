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
import GIfHome from "@/components/GIfHome/GIfHome";
import {lazy, Suspense} from "react";
import IphoneMain from "@/components/IponeMain/IphoneMain";
import SamsungMain from "@/components/samsung/SamsungMain";
import XiamiMain from "@/components/xiami/XiamiMain";
import Blogs from "@/components/blogs/Blogs";
import {ChakraProvider} from "@chakra-ui/react";
import Toast from "@/components/toast/Toast";
import ParentOffer from "@/components/offer/ParentOffer";
import {GetProduct} from "../../actions/GetProduct";
import loadable from "@loadable/component";
import TextAnimation from "@/components/textAnimation/TextAnimation";
export default async function Home() {
  // const category: CategoryMain[] = resjson.data;
  const category = await getCategoryMain();
  console.log(category);
  const productList = await GetProduct();

  const newProduct = productList?.filter((item) => {
    return item.tags.find((iem) => iem.title_tag === "new");
  });
  const iphoneProduct = productList?.filter((item) => {
    return item.tags.find((iem) => iem.title_tag === "iphone");
  });
  const samsungProduct = productList?.filter((item) => {
    return item.tags.find((iem) => iem.title_tag === "samsung");
  });
  const xiamomiProduct = productList?.filter((item) => {
    return item.tags.find((iem) => iem.title_tag === "xiamomi");
  });

  const list = [
    {layout: "categoryMain"},
    {layout: "slider"},
    {
      layout: "gifhome",
      item: [
        {
          pic: "https://uploade.storage.iran.liara.space/ja-carti-banner.gif",
          title: "1",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/siliconi-ghab.gif",
          title: "2",
        },
      ],
    },
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
          title: "قاب های پسرانه",
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
          pic: "https://uploade.storage.iran.liara.space/9.jpg",
          title: "گردنبند انیمه AOT طرح گروه شناسایی",
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
          pic: "https://uploade.storage.iran.liara.space/5.jpeg",
          title: "قاب دارک",
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
    {
      layout: "text",
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
    {
      layout: "newIphone",
      item: [
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
    {
      layout: "newSamsung",
      item: [
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
    {
      layout: "newXiami",
      item: [
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
    {
      layout: "blogs",
      item: [
        {
          pic: "https://uploade.storage.iran.liara.space/%D9%BE%D8%B1%D8%AF%D8%A7%D8%AE%D8%AA_%D8%A2%D9%86%D9%84%D8%A7%DB%8C%D9%86__1_-removebg-preview.png",
          title: "نحوه ثبت سفارش",
          time: "3/4/1399",
          category: "اموزشی",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/HL.M.delivery.jpg",
          title: "نحوه مرجوع کردن",
          time: "5/5/1399",
          category: "اموزشی",
        },
        {
          pic: "https://uploade.storage.iran.liara.space/%D8%B6%D9%85%D8%A7%D9%86%D8%AA-%D8%A8%D8%A7%D8%B2%DA%AF%D8%B4%D8%AA-%DA%A9%D8%A7%D9%84%D8%A7-300x300.png",
          title: "نحوه مشاهده وضعیت ارسال",
          time: "9/4/1389",
          category: "اموزشی",
        },
      ],
    },
  ];
  // const OtherComponent = loadable(() => import("../components/slider/slider"));

  const OtherComponent = lazy(() => import("../components/slider/slider"));

  return (
    <main className="relative flex flex-col items-center flex-1 w-full h-full ">
      <div className="container-fluid  relative  w-full h-full px-1 ">
        <Toast />
        {/* {category !== undefined && <CategoryItem category={category} />} */}
        <div className="grid w-full grid-cols-4  py-4 auto-rows-auto gap-2 h-max">
          {category !== undefined &&
            list.map((item) =>
              item.layout === "categoryMain" ? (
                <Layout size={"categoryMain"} key={"g"}>
                  <Suspense fallback={<h2>loading</h2>}>
                    <CategoryItem category={category} />
                  </Suspense>
                  {/* <div className="">cat</div> */}
                </Layout>
              ) : item.layout === "slider" ? (
                <Layout size={"slider"} key={"g"}>
                  <Suspense fallback={<div>Loading...</div>}>
                    {/* <OtherComponent /> */}
                    <OtherComponent category={category} />
                  </Suspense>
                </Layout>
              ) : item.layout === "gifhome" ? (
                <Layout size={"offer"} key={3}>
                  <GIfHome />
                </Layout>
              ) : item.layout === "banner" ? (
                <Layout size={"banner"} key={"g"}>
                  <Banner item={item} />
                </Layout>
              ) : item.layout === "offer" ? (
                <Layout size={"offer"} key={"g"}>
                  <ParentOffer item={item} />
                  {/* <Offer item={item} /> */}
                </Layout>
              ) : item.layout === "newproduct" ? (
                <Layout size={"newproduct"} key={"g"}>
                  <NewProduct item={newProduct} />
                </Layout>
              ) : // ) : item.layout === "text" ? (
              //   <Layout size={"newproduct"} key={"g"}>
              //     <TextAnimation item={newProduct} />
              //   </Layout>
              item.layout === "newIphone" ? (
                <Layout size={"newproduct"} key={"g"}>
                  <IphoneMain item={iphoneProduct} />
                </Layout>
              ) : item.layout === "newSamsung" ? (
                <Layout size={"newproduct"} key={"g"}>
                  <SamsungMain item={samsungProduct} />
                </Layout>
              ) : item.layout === "newXiami" ? (
                <Layout size={"newproduct"} key={"g"}>
                  <XiamiMain item={xiamomiProduct} />
                </Layout>
              ) : item.layout === "blogs" ? (
                <Layout size={"newproduct"} key={"g"}>
                  <Blogs item={item} />
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
