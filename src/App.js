import './App.css';
import {useState} from "react";
import {storage} from "./firebase";
import { ref, uploadBytes} from "firebase/storage";
import {v4} from "uuid";


function App() {
  const[imageupload, setImageUpload] = useState(null);
  const uploadimage = () => {
    if(imageupload == null) return;
    const imageRef = ref(storage, `images/${imageupload.name + v4()}`);
   
    uploadBytes(imageRef, imageupload).then(() => {
    alert("im uplod")
    })
  };


  return (
    <div className="App">
  
   <input type="file" onChange={(event) => {
    setImageUpload(event.target.files[0])}}/>

   <button onClick={uploadimage}>upload image</button>

    </div>
  );
}

export default App;
