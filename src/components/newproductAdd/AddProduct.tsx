"use client";

import React, { useRef, FormEvent, useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import { TagsInput } from "react-tag-input-component-2";
import { array, object, string, z } from "zod";
import { tree } from "next/dist/build/templates/app-page";
import axios from "axios";
import * as tagsInput from "@zag-js/tags-input";
import { useMachine, normalizeProps } from "@zag-js/react";

import allbrand from "../../../utils/allBrand.json";
import Upload from "../uploads/Upload";
const formSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),

  title: z
    .string({ required_error: "title is required" })
    .min(2, { message: "title must be more than 10 characters" })
    .max(150, { message: "title must be less than 150 characters" })
    .trim(),

  price: z
    .string({ required_error: "price is required" })
    .refine((val) => val !== "uncategorised", {
      message: "Choose category other than uncategorised",
    }),
  classs: z.optional(z.any()),
  class2: z.optional(z.any()),
  price_offer: z.optional(z.any()),

  category: z
    .string({ required_error: "Category is required" })
    .refine((val) => val !== "uncategorised", {
      message: "Choose category other than uncategorised",
    }),

  status: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  counts: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  category_product: z.array(z.string()),
  colors: z.array(z.string()),
  property: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  model: z.array(z.string()),
  product_image: z.array(z.any()),
  tags: z.array(z.string()),
  defaultImage: z.string({ required_error: "defaultImage is required" }),
});
type FormSchema = z.infer<typeof formSchema>;

const AddProduct = () =>
  // { children }: { children: React.ReactNode }
  {
    const inputRef = useRef("");

    // const addNewOrder = async (e: any) => {
    //   console.log(inputRef.current);
    //   // alert('hi')
    // };
    const [value, setValue] = useState<string>("react");
    var tagproductt = ["xiamomi", "samsung", "new", "offer", "iphone"];
    const [selectedTag, setSelectedTag] = useState(tagproductt);
    const [defaultImage, setDefaultImage] = useState<string>("");

    var catproductt = ["اسپرت", "مردانه", "زنانه", "کودکانه", "فانتزی"];
    const [selectedCat, setSelectedCat] = useState(catproductt);

    const [uploadedFiles, setUploadedFiles] = useState<any>([]);

    // var tagproductt = ["xiamomi", "samsung", "new", "offer", "iphone"];

    const fromItem = [
      { id: "", title: "name" },
      { id: "", title: "title" },
      { id: "", title: "price" },
      { id: "", title: "classs" },
      { id: "", title: "class2" },
      { id: "", title: "price_offer" },
      { id: "", title: "category" },
      { id: "", title: "counts" },
      // { id: "", title: "category_product" },
      // { id: "", title: "colors" },
      { id: "", title: "property" },
      // { id: "", title: "model" },
      // { id: "", title: "product_image" },
      // { id: "", title: "tags" },
    ];

    const [formData, setFormData] = useState<z.infer<typeof formSchema>>({
      name: "",
      title: "",
      price: "0",
      classs: "",
      class2: "",
      price_offer: "",
      status: "",
      category: "",
      counts: "",
      category_product: [],
      colors: [],
      property: "",
      model: [],
      product_image: [],
      defaultImage: "",
      tags: selectedTag,
    });
    const [acctive, setActive] = useState("");

    const handleInputChange = (
      event: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >
    ) => {
      if (!touchedInput.includes(event.target.name)) {
        setTouchedInput([...touchedInput, event.target.name]);
      }

      if (event.target.type === "checkbox") {
        if (event.target && event.target instanceof HTMLInputElement) {
          setFormData({
            ...formData,
            [event.target.name]: event.target.checked,
          });
        }
      } else {
        setFormData((prev) => ({
          ...prev,
          [event.target.name]: event.target.value,
        }));
        // console.log("454");
        setActive(event.target.name);
      }
    };

    const handleSelector = (event: string | undefined, title: string) => {
      // console.log(event, "tteee");

      if (event)
        setFormData((prev) => ({
          ...prev,
          [title]: event,
        }));
    };
    const handleInputChangeColor = (
      event: string[] | undefined,
      title: string
    ) => {
      console.log(event);

      setFormData((prev) => ({
        ...prev,
        [title]: event,
      }));
    };

    const [formError, setFormError] = useState<z.ZodFormattedError<
      FormSchema,
      string
    > | null>(null);
    const [touchedInput, setTouchedInput] = useState<string[]>([]);

    useEffect(() => {
      const parsedData = formSchema.safeParse(formData);
      console.log(parsedData);
      if (!parsedData.success) {
        const err = parsedData.error.format();
        console.log(acctive);
        setFormError(err);
      } else {
        setFormError(null);
      }
    }, [formData]);

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      // console.log("ff");
      try {
        const parsedFormValue = formSchema.safeParse(formData);
        // console.log(parsedFormValue, "[arss");
        // console.log("2");
        if (!parsedFormValue.success) {
          const err = parsedFormValue.error.format().category;

          // setFormError(err);
          // console.log(`error: ${err}`);
          // console.log(parsedFormValue.error.formErrors.fieldErrors);
          alert("error");
          return;
        }

        // send data to database
        // console.log("formdata", parsedFormValue.data);
        // alert(
        //   `name: ${parsedFormValue.data.name} | title: ${parsedFormValue.data.title}`
        // );
        const login = axios.post("/api/product", parsedFormValue.data);
        console.log(login);
      } catch (error) {
        console.log("caught error");
        //handle additional erros ...
      }
    };
    const name = "title";
    // console.log(inputRef.current.trim());
    // console.log(touchedInput.includes("title"));

    const [selectedColor, setSelectedColor] = useState([]);

    var brand: string[] = [];
    for (let i = 0; i < allbrand.length; i++) {
      brand.push(allbrand[i].name);
    }
    const [selectedModel, send] = useMachine(
      tagsInput.machine({
        id: "1",
        value: [],
        validate(details) {
          var valid = brand;
          return (
            !details.value.includes(details.inputValue) &&
            details.inputValue.includes(
              valid.filter((item) => item === details.inputValue)[0]
            )
          );
        },
        onValueChange(details) {
          if (details)
            setFormData((prev) => ({
              ...prev,
              ["model"]: details.value,
            }));
        },
      })
    );
    const apiModel = tagsInput.connect(selectedModel, send, normalizeProps);
    // console.log(selectedModel.context.value, "state");

    return (
      // <>
      <form
        className="w-full p-4  bg-pink-400"
        // action={(e) => addNewOrder(e)}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex gap-2 flex-wrap w-full   mb-6" dir="rtl">
          {/* image */}
          <div className="w-[100%]  flex justify-center">
            <Upload
              defaultImage={defaultImage}
              setDefaultImage={setDefaultImage}
              uploadedFiles={uploadedFiles}
              setUploadedFiles={setUploadedFiles}
              setFormData={setFormData}
            />
          </div>
          {/*  */}
          {/*title */}
          {fromItem.map((item) => {
            return (
              <div key={item.title} className="w-[100%] md:w-[40%] lg:w-[30%]">
                <label className=" block" htmlFor={item.title}>
                  {item.title}
                </label>
                <input
                  type="text"
                  min={2}
                  max={50}
                  className="border-2 mb-2 border-gray-500  focus-visible:border-0 focus-visible:outline-2  rounded-md px-3 py-2 w-full"
                  onChange={(event) => handleInputChange(event)}
                  name={item.title}
                  id={item.title}
                  required
                  // ref={inputRef}
                />
              </div>
            );
          })}

          {/* {children} */}
          <div className="w-[100%] md:w-[40%] lg:w-[30%]flex justify-center">
            <Select
              className=" overflow-hidden"
              style={{ minWidth: "100px" }}
              label="وضعیت محصول"
              value={value}
              onChange={(event) => handleSelector(event, "status")}
              // onChange={(val: any) => setValue(val)}
              name="status"
            >
              <Option value="approved">موجود</Option>
            </Select>
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[30%]flex justify-center">
            {/* <Select
              className=" overflow-hidden"
              style={{ minWidth: "100px" }}
              label="دسته بندی محصول"
              value={value}
              onChange={(event) => handleSelector(event, "category_product")}
              // onChange={(val: any) => setValue(val)}
              name="category_product"
            >
              <Option value="man">مردانه</Option>
              <Option value="woman">زنانه</Option>
              <Option value="baby">کودکانه</Option>
              <Option value="sport">اسپرت</Option>
              <Option value="fantezi">فانتزی</Option>
            </Select> */}
            <TagsInput
              value={selectedCat}
              onChange={(event) =>
                handleInputChangeColor(event, "category_product")
              }
              name="category_product"
              placeHolder="دسته بندی محصول"
            />
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[30%]flex justify-center">
            <TagsInput
              value={selectedColor}
              onChange={(event) => handleInputChangeColor(event, "colors")}
              name="color"
              placeHolder="رنگ های محصول "
            />
          </div>
          <div className="w-[100%] md:w-[40%] lg:w-[30%]flex justify-center">
            <TagsInput
              value={selectedTag}
              onChange={(event) => handleInputChangeColor(event, "tags")}
              name="tags"
              placeHolder="تگ محصول"
            />
          </div>
          {/* model  */}
          <div className="w-[100%] md:w-[40%] lg:w-[30%]flex justify-center ">
            <div
              {...apiModel.getRootProps()}
              className="bg-gray-50 rounded-md flex flex-row-reverse gap-2 flex-wrap"
            >
              {apiModel.value.map((value, index) => (
                <span key={index} {...apiModel.getItemProps({ index, value })}>
                  <div
                    {...apiModel.getItemPreviewProps({ index, value })}
                    className="bg-green-200 flex flex-row rounded-md gap-2"
                  >
                    <button
                      className="bg-green-200 rounded-tl-md rounded-bl-md py-[1px] px-1"
                      {...apiModel.getItemDeleteTriggerProps({ index, value })}
                    >
                      &#x2715;
                    </button>
                    <span className="bg-green-200 py-[3px]  rounded-tr-md rounded-br-md w-full h-full flex flex-row">
                      {value}{" "}
                    </span>
                  </div>
                  <input {...apiModel.getItemInputProps({ index, value })} />
                </span>
              ))}
              <input
                placeholder="مدل ..."
                {...apiModel.getInputProps()}
                className="inline w-full"
                dir="rtl"
              />
            </div>
          </div>

          {/*  */}

          {/*  */}
        </div>
        <div className="flex justify-end">
          <button className=" bg-blue-500 hover:scale-95 transition-all duration-75 ease-in px-5 py-2 rounded-md text-white">
            Add New Product
          </button>
        </div>
      </form>
    );
  };

export default AddProduct;
