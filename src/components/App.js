// create your App component here
import react, { useEffect,useState } from "react";
function App() {
const [image, setImage] = useState(null)
const [isLoading,setLoading] = useState(true);
    useEffect(()=>{
    fetch("https://dog.ceo/api/breeds/image/random")
    .then((response)=>response.json())
    .then((data) =>{ 
         setImage(data.message)
          setLoading(false)
        })
},[])



    return (
        <p>
            {isLoading && <span>Loading...</span>}
           {image && <img src={image} alt= "A Random Dog"></img>}
        </p>
      );
}

export default App;