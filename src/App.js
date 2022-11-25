import React, { useState, useEffect, } from 'react'
import Header from './Header'
import Content from './Content'
import Footer from './Footer'
import Button from './Button'
 
const App = () => {
  const [pets, setPets] = useState([])
  const [state, setState] = useState([])
  const [index, setIndex] = useState()
 
  const fetchPets = async () => {
    const apiUrl = 'https://koira-api.herokuapp.com/api/v1/dogs'
    const response = await fetch(apiUrl)
    const data = await response.json()
    setPets(data)
    setState(pets[0])
  }
 
  if(index==null){
    setIndex(0)
  }
  
  useEffect(() => {
    fetchPets ()
  }, [])
 
  useEffect(() =>{
      console.log('pets:', pets)
    }, [pets])
  
  if(state==null){
    setState(pets[0])
    
  }
 
  console.log(state)
 
   
  const handleClick = () => {
    if(index<pets.length){
      setIndex(index+1)
      console.log(index)
      setState(pets[index])
      
    }
    
  }
 
  return (
    <div className="App">
      <Header title="Nuuhkukuonot"/>
 
      <Content title={state && state.title} pic={state && state.imageUrl} />
      
      <Footer>
        <Button id="hrt" onClick={handleClick} icon={`heart`}/>
        <Button id="bknhrt" onClick={handleClick} icon={`heart-broken`}/>
      </Footer>
    </div>
  )
}
 
export default App;
