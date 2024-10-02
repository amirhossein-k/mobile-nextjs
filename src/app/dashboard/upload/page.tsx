"use client";

import Upload from "@/components/uploads/Upload";
import React, { useState } from "react";

const page = () => {
  const [defaultImage, setDefaultImage] = useState<string>("");
  const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const [formData, setFormData] = useState<any>();
  return (
    <div>
      <Upload
        defaultImage={defaultImage}
        setDefaultImage={setDefaultImage}
        uploadedFiles={uploadedFiles}
        setUploadedFiles={setUploadedFiles}
        setFormData={setFormData}
      />{" "}
    </div>
  );
};

export default page;
