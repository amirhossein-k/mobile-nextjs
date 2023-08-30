import MyLayout from "@/components/layout/MyLayout";
import axios from "axios";
import {CategoryMain} from "../../types";
import getCategoryMain from "../../actions/GetCategoryMain";
export default async function Home() {
  // const category: CategoryMain[] = resjson.data;
  const category = await getCategoryMain();
  console.log(category);

  return (
    <main className="">
      {category !== undefined && <MyLayout category={category} />}
      {/* // <MyLayout category={category} /> */}
      {/* {category !== undefined &&
        category.map((item) => {
          console.log(item);
          return <div className="">{item.title}</div>;
        })} */}
    </main>
  );
}
