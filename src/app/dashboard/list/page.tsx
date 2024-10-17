// "use server";
import ListProduct from "@/components/dashboard/List/ListProduct";
import { getData } from "../../../../actions/GetProductList";
// import Pagination from "../../../../types/Pagination2";
import Paginator from "@/../types/Pagination2";

const page = async ({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) => {
  const currentPage = parseInt(searchParams["page"] as string, 10) || 1;
  const { data, meta } = await getData(currentPage);

  return (
    <div dir="rtl">
      <div className="p-2">
        <h1 className="mb-2 font-bold">Pagination demo</h1>
        {/* {data.map((user) => (
          <div key={user.id} className="py-2">
            <div>
            {data && <ListProduct product={data} />}
            </div>
          </div>
        ))} */}

        {data && <ListProduct product={data} />}

        <nav className=" text-sm bg-white  flex flex-row justify-center">
          <Paginator
            styleClassActive="text-blue-500"
            // styleClassInactive="text-gray-500"
            styleClassLeft="text-black"
            path="/dashboard/list"
            params={searchParams}
            currentPage={currentPage}
            totalPages={meta.pagination.totalPages}
          />
        </nav>
      </div>
    </div>
  );
};

export default page;
