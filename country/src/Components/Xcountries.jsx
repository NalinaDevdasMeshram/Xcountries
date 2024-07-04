import { useEffect, useState } from 'react';
import styles from './Xcountries.module.css';
const Xcountries =()=>{
     const [country, setCountry] = useState([]);
    
    const handleFlagFetch =async()=>{
        try{
            const response = await fetch('https://xcountries-backend.azurewebsites.net/all');
            const flagData = await response.json();
             console.log("flagdata is::", flagData)
             setCountry(flagData)  
        }
        catch(e){
            console.error("Error fetching data::",e.message)
        }
      
    }
    useEffect(()=>{
        handleFlagFetch();
    },[])
 return (
    <div className={styles.container}>
        {
         country.map((data)=>{
            // console.log('data id', data.abbr)
          return(
            <div className={styles.xcountry} key={data.abbr}> 
              <img className={styles.imgSrc}  src={data.flag} alt={data.name}/>
              <h4>{data.name}</h4>
            </div>
              );
            })
         }
       </div>
 )
}
export default Xcountries