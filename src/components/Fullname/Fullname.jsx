import React, {useState} from "react";

export default function Fullname() {
    const [firstName, setFirstName] = useState("");
    const [secondName, setSecondName] = useState("");
    const [fullName, setFullname] = useState("");
  
    const handleFirstChange = (e) => {
      setFirstName(e.target.value);
    }
  
    const handleSecondChange = (e) => {
      setSecondName(e.target.value);
    }
    
    const validForm = () => {
        if (!firstName || !secondName)
            return false;
        return true;
    }

    const onSubmitName = (e) => {
        if (validForm()) {
        e.preventDefault();
        setFullname(firstName+" "+secondName);
        }
        else {
            setFullname("")
        }
    }
  return (
    <>
    {<form onSubmit={onSubmitName}>
      <h1>Full Name Display</h1>
      <div>
        <label htmlFor="first-name">First Name: </label>
        <input
          onChange={handleFirstChange}
          type="text"
          id="first-name"
          name="FirstName"
          required
        />
      </div>
      <div>
        <label htmlFor="last-name">Last Name: </label>
        <input
          onChange={handleSecondChange}
          type="text"
          id="last-name"
          name="LastName"
          required
        />
      </div>
      <button type="submit" onClick={onSubmitName}>Submit</button>
    </form>}
    {fullName && <p>Full Name: {fullName}</p>}
    </>
  );
}
