import { useState } from "react";
import { useId } from "react";

export default function Assignment1() {
    const [userId, setUserId] = useState<string | null>(null);
  const formId = useId();

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setUserId(formId);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Enter your name:</label>
        <input placeholder="Enter your name" id="name" />
        <br />
        <label htmlFor="designation">Select Designation:</label>
        <select id="designation">
          <option value="TL">TL</option>
          <option value="Manager">Manager</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
      {userId && <p>User ID: {userId}</p>}
    </div>
  );
}
