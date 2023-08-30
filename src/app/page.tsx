import CategoryItem from "@/components/category/CategoryItem";
import axios from "axios";
import {CategoryMain} from "../../types";
import getCategoryMain from "../../actions/GetCategoryMain";
import Layout from "@/components/layout/Layout";
import Slider from "@/components/slider/slider";
export default async function Home() {
  // const category: CategoryMain[] = resjson.data;
  const category = await getCategoryMain();
  console.log(category);

  const list = [
    {layout: "categoryMain", type: "button", title: "admin" ?? ""},
    {layout: "slider", type: "button", title: "admin" ?? ""},
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
              ) : (
                <Layout size={"slider"} key={"g"}>
                  <Slider category={category} />
                  {/* <div className="h-full w-full">d</div> */}
                </Layout>
              )
            )}
        </div>
      </div>
    </main>
  );
}
