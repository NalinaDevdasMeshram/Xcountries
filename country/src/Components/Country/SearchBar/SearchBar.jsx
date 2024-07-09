import { useState,useEffect } from 'react'
import styles from './SearchBar.module.css'



const SearchBar = () => {
    const [cardData, SetCardData] = useState([])
    const [ searchQuery, setSearchQuery] = useState('');
     const handleSearchBar =async()=>{
        try{
            const response = await fetch('https://restcountries.com/v3.1/all')
             const fetchData = await response.json()
            //  console.log('fetching data', fetchData)
             SetCardData(fetchData)
        }
        catch(e){
            console.log('data fetching error', e.message)
        }
     }
     useEffect(()=>{
        
            handleSearchBar();
         
     },[])
     
    
    //  const handleChanges = (e)=>{
    //     console.log(e.target.value)
    //     setSearchQuery ( e.target.value)
    //  }
    //  const filterQueryData = cardData.filter(()=>{(country)=>
    //     country.name.comman.toLowerCase().includes(searchQuery.toLocaleLowerCase())

    //  })
//  console.log(filterQueryData)
  return (
    <div className={styles.countryCard}>
      <input type='text'  className ={styles.SearchBox} placeholder='Search for Countries...'/>
    </div>
  )
}

export default SearchBar