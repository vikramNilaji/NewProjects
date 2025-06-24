import { useState } from "react";
import "./App.css";

function App() {
  const [showPopup, setShowPopup] = useState(false);
  const handleOpen = () => setShowPopup(true);
  const handleClose = () => setShowPopup(false);

  return (
    <div className="app">
      <button className="open-button" onClick={handleOpen}>
        Open Form
      </button>

      {showPopup && (
        <div className="popup-overlay" onClick={handleClose}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Add your details</h2>
            <form>
              <input type="text" placeholder="Name" />
              <input type="email" placeholder="Email" />
              <button type="submit">Submit</button>
            </form>
            <button className="close-button" onClick={handleClose}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
