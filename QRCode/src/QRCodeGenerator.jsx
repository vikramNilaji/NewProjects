import { useState } from "react";
import QRCode from "react-qr-code"

const QRCodeGenerator = () => {

    const[qrCode,setqrCode]=useState('')
    const[input,setInput]=useState('')

    function handleGenerateQrCode(){
        setqrCode(input)
    }
  return (
    <div>
      <h1>QRCodeGenerator</h1>

      <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here.."/>
        <button onClick={handleGenerateQrCode} disabled={input && input.trim() !== "" ? false : true}  >Generator</button>
      </div>

      <div><QRCode id="qr-code-value" value={qrCode} size={400} bgColor= "#fff"/></div>
    </div>
  );
};

export default QRCodeGenerator;
