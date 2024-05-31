interface UploadModelParams { onUpload: (data: ArrayBuffer) => void; }


const UploadModel = (params: UploadModelParams) => {
    return <div>
        Загрузите модель onnx:
        <input type="file" onChange={e => {
            const file = e.target.files?.[0];
            if (file){
                const fileReader = new FileReader();
                fileReader.onload = (event) => {
                if (event.target?.result instanceof ArrayBuffer) {
                    params.onUpload(event.target.result);
                }
                };
                fileReader.readAsArrayBuffer(file)    
            }
        }}/>
    </div>
}

export default UploadModel