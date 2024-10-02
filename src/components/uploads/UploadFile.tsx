import React, { useState } from "react";
import { S3 } from "aws-sdk";

const UploadFile = ({
  accessKeyId,
  secretAccessKey,
  endpoint,
  bucket,
  onUpload,
}: any) => {
  const [file, setFile] = useState<any>(null);
  const [error, setError] = useState<any>(null);
  const [uploadLink, setUploadLink] = useState<any>(null);
  const [permanentLink, setPermanentLink] = useState<any>(null);

  const handleFileChange = (event: any) => {
    setFile(event.target.files[0]);
    setError(null);
    setUploadLink(null);
    setPermanentLink(null);
  };

  const handleUpload = async () => {
    try {
      if (!file) {
        setError("Please select a file");
        return;
      }

      const s3 = new S3({
        accessKeyId,
        secretAccessKey,
        endpoint,
      });

      const params = {
        Bucket: bucket,
        Key: file.name,
        Body: file,
      };

      const response = await s3.upload(params).promise();
      const signedUrl = s3.getSignedUrl("getObject", {
        Bucket: bucket,
        Key: file.name,
        Expires: 3600,
      });

      setUploadLink(signedUrl);

      // Get permanent link
      const permanentSignedUrl = s3.getSignedUrl("getObject", {
        Bucket: bucket,
        Key: file.name,
        Expires: 31536000, // 1 year
      });
      setPermanentLink(permanentSignedUrl);

      onUpload(response);

      console.log("اپلود شد");
    } catch (error: any) {
      setError("Error uploading file: " + error.message);
    }
  };

  return (
    <div className="bg-pink-300 flex flex-col gap-2 justify-center items-center my-2 py-2">
      <h1>عکس های محصول راانتخاب کنید</h1>
      <input type="file" onChange={handleFileChange} />
      <button
        onClick={handleUpload}
        disabled={!file}
        className="bg-blue-50 inline w-[100px] h-[50px]"
      >
        Upload
      </button>
      {/* {uploadLink && (
        <h3>
          File uploaded successfully. Temporary Link:{" "}
          <a href={uploadLink} target="_blank" rel="noopener noreferrer">
            Temporary Link
          </a>
        </h3>
      )} */}
      {/* {permanentLink && (
        <h3>
          Permanent Link:{" "}
          <a href={permanentLink} target="_blank" rel="noopener noreferrer">
            Permanent Link
          </a>
        </h3>
      )} */}
      {error && <p>{error}</p>}
    </div>
  );
};

export default UploadFile;
