import axios from "axios"
import './App.css';
import {useState, useEffect} from "react";
import {Container} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';
import Header from "./Components/Headers/Header";
import Definitions from "./Components/Definitions/Definitions";

function App() {
  const [word, setWord] = useState("");
  const [meanings, setMeanings] = useState([]);
  const [category, setCategory] = useState("en");
  const [LightMode, setLightMode] = useState(false)

  const DarkMode = withStyles({
    switchBase: {
      color: grey[300],
      '&$checked': {
        color: grey[500],
      },
      '&$checked + $track': {
        backgroundColor: grey[500],
      },
    },
    checked: {},
    track: {},
  })(Switch);

  const dictionaryApi = async() => {
    try{
      const data = await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
      console.log(data);
      setMeanings(data.data)

    } catch(error){
      console.log(error)
    }
  };


  useEffect(()=> {
    dictionaryApi();
  },[word, category])

  return (
    <div className="App" 
          style={{height:'100vh', 
                    backgroundColor:LightMode?"#fff":"#282c34",
                    color:LightMode?"black":"white",
                    transition:"all 0.5s linear"
                  }}
                    > 
    <Container maxWidth="md" 
              style={{display:"flex",
                      flexDirection:"column",
                      height:"100vh",
                      justifyContent:"space-evenly"}}>

      <div style={{position:"absolute", top:0,right:15, paddingTop:10}}>
        <span>{LightMode?"Dark Mode":"Light Mode"}</span>
          < DarkMode checked={LightMode} onChange={()=>setLightMode(!LightMode)} />
      </div>
      <Header category={category} 
              setCategory={setCategory} 
              word={word} 
              setWord={setWord}
              LightMode = {LightMode}/>
      {meanings && <Definitions 
                        word={word} 
                        meanings={meanings} 
                        category={category}
                        LightMode = {LightMode}/>}
    </Container>

    </div>
  );
}

export default App;
