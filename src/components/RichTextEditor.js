import React, { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const RichTextEditor = ({ savedData, onValueChange, ...rest }) => {
  console.log('saved data in ruhh',(savedData))
  const content = savedData && Object.keys(savedData).length !== 0
  ? `${savedData?.id} ${savedData?.name} ${savedData?.email} ${savedData?.address} ${savedData?.phone}`
  : "";



  console.log('content',content);
  return (
    <>
      <ReactQuill style={{height:"150px"}} theme="snow" value={ content} {...rest} />
    </>
  );
};

export default RichTextEditor;
