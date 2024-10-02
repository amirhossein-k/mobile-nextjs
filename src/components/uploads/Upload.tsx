import React, { useEffect, useState } from "react";
import UploadFile from "./UploadFile";
import DeleteFile from "./DeleteFile";
import Image from "next/image";

const Upload = ({
  setDefaultImage,
  defaultImage,
  setUploadedFiles,
  uploadedFiles,
  setFormData,
}: {
  setDefaultImage: any;
  defaultImage: any;
  setUploadedFiles: any;
  uploadedFiles: any;
  setFormData: any;
}) => {
  const ACCESSKEY = process.env.LIARA_ACCESS_KEY; // or process.env.LIARA_ACCESS_KEY;
  const SECRETKEY = process.env.LIARA_SECRET_KEY; // or process.env.LIARA_SECRET_KEY;
  const ENDPOINT = process.env.LIARA_ENDPOINT; // or process.env.LIARA_ENDPOINT;
  const BUCKET = process.env.LIARA_BUCKET_NAME; // or process.env.LIARA_BUCKET_NAME;

  console.log(process.env.LIARA_BUCKET_NAME);
  // const [uploadedFiles, setUploadedFiles] = useState<any>([]);
  const handleUpload = (file: any) => {
    setUploadedFiles((prevFiles: any) => [...prevFiles, file]);
  };

  const handleDelete = (fileKey: any) => {
    setUploadedFiles((prevFiles: any) =>
      prevFiles.filter((file: any) => file.Key !== fileKey)
    );
  };

  useEffect(() => {
    setFormData((prev: any) => ({
      ...prev,
      ["defaultImage"]: defaultImage,
      ["product_image"]: uploadedFiles,
    }));
  }, [uploadedFiles]);
  useEffect(() => {
    setFormData((prev: any) => ({
      ...prev,
      ["defaultImage"]: defaultImage,
    }));
  }, [defaultImage]);

  console.log(uploadedFiles);
  console.log(defaultImage, "def");
  console.log(defaultImage.length, "def");
  console.log(uploadedFiles);

  return (
    <div className="bg-gray-100 w-full flex gap-2 flex-col">
      <UploadFile
        accessKeyId={ACCESSKEY}
        secretAccessKey={SECRETKEY}
        endpoint={ENDPOINT}
        bucket={BUCKET}
        onUpload={handleUpload}
      />

      <div>
        <h2>Uploaded Files:</h2>
        <ul className="flex flex-row flex-wrap gap-2">
          {uploadedFiles.map((file: any) => (
            <li key={file.Key} className="flex gap-2 flex-col">
              <Image src={file.Location} width={200} height={200} alt="" />
              <button
                className={` px-2 py-1 text-blue-gray-300 ${
                  defaultImage.length !== 0 && defaultImage === file.Location
                    ? "bg-blue-400"
                    : "bg-gray-400"
                }`}
                onClick={(e) => setDefaultImage(file.Location)}
              >
                عکس اصلی
              </button>
              {/* {file.Key}{" "} */}
              <DeleteFile
                accessKeyId={ACCESSKEY}
                secretAccessKey={SECRETKEY}
                endpoint={ENDPOINT}
                bucket={BUCKET}
                fileKey={file.Key}
                onDelete={handleDelete}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Upload;
