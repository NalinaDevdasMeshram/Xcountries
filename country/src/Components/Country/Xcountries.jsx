import { useEffect, useState } from "react";
import styles from './Xcountries.module.css';

const Xcountries = () => {
  const [country, setCountry] = useState([]);
  const fetchingData = async()=>{
    try{
      const response = await fetch(` https://xcountries-backend.azurewebsites.net/all`)
       const responseResult = await response.json();
        // console.log('fetch country data', responseResult)
        setCountry(responseResult);
   }
   catch(e){
        console.error(e.message)
   }
  }
 
  useEffect(()=>{
    fetchingData();
  },[])
  return(
    <div className={styles.Xcontainer}>
      {
        country.map((item)=>{
          return(
            <div className={styles.xcountry} key={item.abbr}>
              <img className={styles.imgContainer}src={item.flag} alt={item.name}/>
              <h4>{item.name}</h4>
            </div>
          )
        })
      }
    </div>
  )
}

export default Xcountries