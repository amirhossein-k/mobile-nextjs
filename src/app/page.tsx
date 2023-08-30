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
    <main className="">
      {/* {category !== undefined && <CategoryItem category={category} />} */}

      {category !== undefined &&
        list.map((item) =>
          item.layout === "categoryMain" ? (
            <Layout size={"categoryMain"} key={"g"}>
              <CategoryItem category={category} />
            </Layout>
          ) : (
            <Layout size={"slider"} key={"g"}>
              <Slider />
            </Layout>
          )
        )}
    </main>
  );
}
