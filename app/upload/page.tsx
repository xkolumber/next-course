"use client";
import React, { useState } from "react";
import { CldImage, CldUploadWidget } from "next-cloudinary";
import Image from "next/image";

interface CloudinaryResult {
  public_id: string;
}

const UploadPage = () => {
  const [publicId, setPublicId] = useState("");
  return (
    <>
      {publicId && (
        <CldImage alt={""} width={270} height={180} src={publicId} />
      )}
      <CldUploadWidget
        uploadPreset="wgknwmfl"
        onUpload={(result, widget) => {
          if (result.event !== "success") return;
          const info = result.info as CloudinaryResult;
          setPublicId(info.public_id);
        }}
      >
        {({ open }) => (
          <button className="btn btn-primary" onClick={() => open()}>
            Upload
          </button>
        )}
      </CldUploadWidget>
      <CldImage
        src="https://res.cloudinary.com/dxwlc2n6f/image/upload/v1697903064/ab6p5hnradejxdowt4ui.jpg"
        width={500}
        height={500}
        alt="Foto"
      />
    </>
  );
};

export default UploadPage;
