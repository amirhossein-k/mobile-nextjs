"use client";

import React, { useRef, FormEvent, useEffect, useState } from "react";

import { z } from "zod";

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
    .string({ required_error: "Category is required" })
    .refine((val) => val !== "uncategorised", {
      message: "Choose category other than uncategorised",
    }),

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
  category_product: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  colors: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  property: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  model: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  product_image: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
  tags: z
    .string({ required_error: "Name is required" })
    .min(2, { message: "Name must be more than 5 characters" })
    .max(50, { message: "Name must be less than 50 characters" })
    .trim(),
});
type FormSchema = z.infer<typeof formSchema>;

const AddProduct = () =>
  // { children }: { children: React.ReactNode }
  {
    const inputRef = useRef("");

    const addNewOrder = async (e: any) => {
      console.log(inputRef.current);
      // alert('hi')
    };

    const fromItem = [
      { id: "", title: "name" },
      { id: "", title: "title" },
      { id: "", title: "price" },
      { id: "", title: "status" },
      { id: "", title: "category" },
      { id: "", title: "count" },
      { id: "", title: "category-product" },
      { id: "", title: "colors" },
      { id: "", title: "property" },
      { id: "", title: "model" },
      { id: "", title: "product-image" },
      { id: "", title: "tags" },
    ];

    const [formData, setFormData] = useState<z.infer<typeof formSchema>>({
      name: "",
      title: "",
      price: "0",
      status: "",
      category: "",
      counts: "",
      category_product: "",
      colors: "",
      property: "",
      model: "",
      product_image: "",
      tags: "",
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
        console.log("454");
        setActive(event.target.name);
      }
    };

    // const [formError, setFormError] = useState<z.ZodFormattedError<
    //   FormSchema,
    //   string
    // > | null>(null);
    const [touchedInput, setTouchedInput] = useState<string[]>([]);

    useEffect(() => {
      const parsedData = formSchema.safeParse(formData);

      if (!parsedData.success) {
        const err = parsedData.error.format();
        console.log(acctive);
        // setFormError(err);
      }
      //  else {
      //   setFormError(null);
      // }
    }, [formData]);

    const handleSubmit = async (e: FormEvent) => {
      e.preventDefault();
      console.log("ff");
      try {
        const parsedFormValue = formSchema.safeParse(formData);
        console.log("2");
        if (!parsedFormValue.success) {
          const err = parsedFormValue.error.format();

          // setFormError(err);
          alert("error");
          console.log("object");
          return;
        }

        // send data to database
        console.log("formdata", parsedFormValue.data);
        alert(
          `name: ${parsedFormValue.data.name} | title: ${parsedFormValue.data.title}`
        );
      } catch (error) {
        console.log("caught error");
        //handle additional erros ...
      }
    };
    const name = "title";
    // console.log(inputRef.current.trim());
    console.log(touchedInput.includes("title"));
    return (
      // <>
      <form
        className="w-full p-4  bg-pink-400"
        // action={(e) => addNewOrder(e)}
        onSubmit={(e) => handleSubmit(e)}
      >
        <div className="flex gap-2 flex-wrap w-full  mb-6" dir="rtl">
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
                {}
              </div>
            );
          })}

          {/* {children} */}
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
