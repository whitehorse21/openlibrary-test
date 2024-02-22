import type { ColumnsType } from "antd/es/table";
import { BookDataType } from "../utils/types";

export const homeColumns: ColumnsType<BookDataType> = [
  {
    title: () => (
      <p className="font-manrope text-secondary text-[14px] font-medium">
        Book Title
      </p>
    ),
    dataIndex: "title",
    className: "w-auto",
    key: "title",
    render: (value) => (
      <div className="flex flex-row gap-2 items-center">
        <p className="font-manrope text-secondary text-[13px] sm:text-[14px] font-medium">
          {value}
        </p>
      </div>
    ),
  },
  {
    title: () => (
      <p className="font-manrope text-secondary text-[14px] font-medium">
        Author(s) Name
      </p>
    ),
    dataIndex: "author_name",
    className: "w-auto",
    key: "author_name",
    render: (value) => (
      <div className="flex flex-row gap-2 items-center">
        <p className="font-manrope text-secondary text-[13px] sm:text-[14px] font-medium">
          {value.join(", ")}
        </p>
      </div>
    ),
  },
  {
    title: () => (
      <p className="font-manrope text-secondary text-[14px] font-medium">
        First Published Year
      </p>
    ),
    dataIndex: "first_publish_year",
    className: "w-auto",
    key: "first_publish_year",
    render: (value) => (
      <div className="flex flex-row gap-2 items-center">
        <p className="font-manrope text-secondary text-[13px] sm:text-[14px] font-medium">
          {value}
        </p>
      </div>
    ),
  },
  {
    title: () => (
      <p className="font-manrope text-secondary text-[14px] font-medium">
        ISBN Number
      </p>
    ),
    dataIndex: "isbn",
    className: "w-auto",
    key: "isbn",
    render: (value) => (
      <div className="flex flex-row gap-2 items-center">
        <p className="font-manrope text-secondary text-[13px] sm:text-[14px] font-medium">
          {value[0]}
        </p>
      </div>
    ),
  },
  {
    title: () => (
      <p className="font-manrope text-secondary text-[14px] font-medium">
        Number of Pages
      </p>
    ),
    dataIndex: "number_of_pages_median",
    className: "w-auto",
    key: "number_of_pages_median",
    render: (value) => (
      <div className="flex flex-row gap-2 items-center">
        <p className="font-manrope text-secondary text-[13px] sm:text-[14px] font-medium">
          {value}
        </p>
      </div>
    ),
  },
];
