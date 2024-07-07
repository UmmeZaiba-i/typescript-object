type AssignmentProps = {
    handleClick:(event:React.FormEvent<HTMLFormElement>, userid:number)=>void;
}

export default function Assignment1({handleClick}: AssignmentProps) {
  let userid = Math.floor(Math.random()*6);
  let onsubmit =(event:React.FormEvent<HTMLFormElement>)=>{
    handleClick(event,userid)
  }
  return (
    <div>
      <form id="" onSubmit = {onsubmit}>
        <label htmlFor="name"> Enter your name: </label>
        <input placeholder="Enter your name" id="name" />
        <br />
        <label htmlFor="designation"> Select Designation: </label>
        <select id="designation">
          <option value="TL">TL</option>
          <option value="Manager">Manager</option>
        </select>
        <br />
        <button>Submit</button>        
      </form>
    </div>
  );
}
