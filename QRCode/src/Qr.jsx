import QRCode from "react-qr-code";
import { useState } from "react";

const Qr = () => {
  const [input, setInput] = useState("");
  const [qrCode, setQrCode] = useState("");
  function HandleQrCode() {
    setQrCode(input);
  }

  return (
    <>
      <input onChange={(e) => setInput(e.target.value)} type="text" />

      <button
        onClick={HandleQrCode}
        disabled={input && input.trim() !== "" ? false : true}
      >
        submit
      </button>
      <QRCode value={qrCode} />
    </>
  );
};

export default Qr;
