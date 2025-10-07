import { useState } from "react";

const Form = () => {
  let [fName, setFname] = useState("");
  let [lName, setLname] = useState("");

  const onFNameChange = (e) => {
    // console.log(e.target.value);
    setFname(e.target.value);
  };

  const onLNameChange = (e) => {
    // console.log(e.target.value);
    setLname(e.target.value);
  };

  const onFormSubmit = (e) => {
    e.preventDefault(); // Prevents the default behavior of an event i.e page reload
    console.log(fName, lName);
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <div>
          <label className="my-cls" htmlFor="fName">
            First Name
          </label>
          <input id="fName" type="text" onChange={onFNameChange} />
        </div>
        <div>
          <label htmlFor="lName">Last Name</label>
          <input onChange={onLNameChange} id="lName" type="text" />
        </div>
        <input type="submit" />
      </form>
      {/* <button onClick={}>Click here</button> */}
    </div>
  );
};

export default Form;
