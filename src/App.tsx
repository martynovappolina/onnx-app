import React, { useEffect } from "react";
import { useState } from "react";
import { Input, Button } from "@mui/material";
import cv from "@techstark/opencv-js";
import { Tensor, InferenceSession } from "onnxruntime-web";
import UploadModel from "./components/uploadModel/uploadModel";
import ImageDetecter from "./components/imageDetecter/imageDetecter";

const App = () => {
    const [isInit, setIsInit] = useState<boolean>(false);
    const [model, setModel] = useState<ArrayBuffer>(new ArrayBuffer(0));

    if(!isInit)
        return <UploadModel onUpload={(data) => {setModel(data); setIsInit(true)}}/>
    return <ImageDetecter model={model}/>
}

export default App