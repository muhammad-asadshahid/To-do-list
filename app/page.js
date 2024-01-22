'use client'
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [description, setdescription] = useState("")
  const [main, setmain] = useState([])
  const abcd = (e) =>{
       e.preventDefault()       
        //console.log(title)
       //console.log(main)}
       if(title.trim()!==""){
       setmain([...main , {title , description}])
       settitle("")
       setdescription("")
      }
      else{
        alert("Please add title!")
      }
    }
    const delt=(i)=>{
      let copy=[...main]
      copy.splice(i,1)
      setmain(copy)
    }
      let renderTask;
   if(main.length>0){
    
    renderTask = main.map((t,i)=>{
      return(
              <li className="li" key={i}>
              <div className="cn" >
                <h5>{i+1}.{t.title}</h5>
                <h5>{t.description}</h5>
              </div>
              <button className="btn" onClick={()=>{delt(i)}}>Delete</button>
              </li>
              
      );
     });
   }
   else{
    renderTask= <div className="rnt"><h2>No task pending</h2></div>
   }

   let ind= <div className="inde">
                <h4> Title</h4>
                <h4>Description</h4>
                <h4>Delete</h4>
            </div>
  
 
  return (
    <>
    <div className="main">
    <h1>Muhammad asad Todo list</h1>
    <form onSubmit={abcd}>
      <input type="text" placeholder="Enter task " value={title} onChange={(e)=>{ settitle(e.target.value)}}></input>
      <input type="text" placeholder="Enter description " value={description} onChange={(e)=>{setdescription(e.target.value) }}></input>
      <button className="button">Add task</button>
     
    </form>
    <div >
           {ind}
    </div>
    <div className="div">
      <ol>
        {renderTask}
      </ol>
    </div>
    </div>
    </>
  )
}

export default page