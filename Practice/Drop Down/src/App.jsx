import React from 'react'

const countries = [
  {name: 'india' , value: 'IN' , cities: [ 'Delhi','Mumbai']},
  {name: 'Pak', value: 'PK' , cities: [ 'lahore','karachi']},
  {name: 'us' , value: 'US' , cities: [ 'dhaka','hello']},
] 

const[country,setCountry] = useState("")
const App = () => {
  return (
    <>
      <select>
        {countries.map((item, index) => {
          return <option value={item.value}>{item.name}</option>
          })}
      </select>
    </>
  )
}

export default App
