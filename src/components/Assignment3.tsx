import React, { useId, useState } from "react";

// when we click the form then we should generate the id

export default function Assignment1() {
    const [isSubmittted, setisSubmitted] = useState<boolean>();
    const generateId = Math.floor(Math.random()*9);

    const handleForm = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault(); //we do it to prevent the browser from its default behaviour like refreshing
        setisSubmitted(true)
    }
       
  return (
    <div>
      <form onSubmit={handleForm}>
        <label> Enter your name: </label>
        <input placeholder="Enter your name" id="name" />
        <br />
        <label htmlFor="designation"> Select Designation: </label>
        <select>
          <option value="TL">TL</option>
          <option value="Manager">Manager</option>
        </select>
        <br />
        <button>Submit</button>
      </form>
      <div>
        {isSubmittted && <p> User id is - {generateId} </p>}
      </div>
    </div>
  );
}