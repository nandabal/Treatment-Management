import React, { useEffect, useState } from 'react'

const TreatmentList = () => {
  let [isModalOpen, setIsModalOpen]=useState(false)
  let [selectValue, setSelectValue]=useState('')
let TreatmentLists=[
  {tName:"Treatement A",tDepartment:12},
  {tName:"Treatement B",tDepartment:2},
  {tName:"Treatement C",tDepartment:6},
  {tName:"Treatement D",tDepartment:10}
]
 
  const addTreatmentHandler=()=>{

  }
  useEffect(()=>{
console.log(selectValue)
  },[selectValue])
  return (
    <>
      <div>
        <nav><button onClick={()=>setIsModalOpen(!isModalOpen)} className='btn btn-primary'>Add</button></nav>
      {isModalOpen &&(
        <form onSubmit={addTreatmentHandler} className='border-danger border p-5 w-25' action="">
          <label className='mb-3' htmlFor="">select the treatment</label><br/>
          <select  onChange={(e)=>setSelectValue(e.target.value)} className='mb-3' name="" id="">
            <option value="">Select</option>
            <option value="A">Treatment A</option>
            <option value="B">Treatment B</option>
            <option value="C">Treatment C</option>
            <option value="D">Treatment D</option>
            <option value="E">Treatment E</option>
          </select><br/>
          <button className='btn btn-primary'>Add</button>
        </form>
      )}
      </div>
      <div>
        <ul>
            {TreatmentLists.map((treatment,index)=>(
              <li key={index}>
                <h3>{treatment.tName}</h3>
              </li>
            ))}
        </ul>
      </div>
    </>
  )
}

export default TreatmentList
