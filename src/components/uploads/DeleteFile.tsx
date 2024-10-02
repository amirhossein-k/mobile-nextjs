import React from "react";
import { S3 } from "aws-sdk";

const DeleteFile = ({
  accessKeyId,
  secretAccessKey,
  endpoint,
  bucket,
  fileKey,
  onDelete,
}: any) => {
  const handleDeleteFile = async () => {
    const s3 = new S3({
      accessKeyId,
      secretAccessKey,
      endpoint,
    });

    try {
      await s3.deleteObject({ Bucket: bucket, Key: fileKey }).promise();
      onDelete(fileKey);
      console.log("File deleted successfully");
    } catch (error) {
      console.error("Error deleting file: ", error);
    }
  };

  return <button onClick={handleDeleteFile}>Delete</button>;
};

export default DeleteFile;
