import { FC, useEffect, useState } from "react";
import { BookDataType } from "../utils/types";
import { useIsMounted } from "../hooks/use-is-mounted";
import { Table } from "antd";
import { homeColumns } from "../components/home_table_columns";
import { LIST_PAGE_SIZE } from "../utils";
import { fetchData } from "../utils/api";

const HomePage: FC = () => {
  const isMounted = useIsMounted();

  const [isLoading, setLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [dataSource, setDataSource] = useState<BookDataType[]>([]);
  let timer: NodeJS.Timeout | undefined = undefined;

  const [searchParams, setSearchParams] = useState({
    q: "",
    page: 1,
    limit: LIST_PAGE_SIZE,
  });

  useEffect(() => {
    if (!isMounted) return;

    timer = setTimeout(() => {
      callAPI();
    }, 500);

    return () => clearTimeout(timer);
  }, [isMounted, searchParams.page, searchParams.q]);

  const callAPI = () => {
    setLoading(true);
    fetchData(searchParams)
      .then((response) => {
        setLoading(false);
        setTotal(response.data.numFound);
        setDataSource(
          response.data.docs.map((item, index) => ({
            key: index,
            title: item.title,
            author_name: item.author_name,
            first_publish_year: item.first_publish_year,
            isbn: item.isbn,
            number_of_pages_median: item.number_of_pages_median,
          }))
        );
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  };

  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchParams({ ...searchParams, q: e.target.value, page: 1 });
  };

  const onPageChange = (page: number, pageSize: number) => {
    setSearchParams({ ...searchParams, page: page });
  };

  return (
    <div className="w-full min-h-screen p-8 flex items-center flex-col gap-4">
      <input
        type="text"
        className="w-full border-gray-500 rounded-[12px] border-[1px] p-4"
        value={searchParams.q}
        placeholder="Search keyword..."
        onChange={onSearchChange}
      />
      <div className="relative w-full h-full">
        <Table
          loading={isLoading}
          showSorterTooltip={false}
          columns={homeColumns}
          dataSource={dataSource}
          pagination={{
            total,
            current: searchParams.page,
            onChange: onPageChange,
            position: ["bottomCenter"],
            defaultPageSize: LIST_PAGE_SIZE,
            showSizeChanger: false,
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
