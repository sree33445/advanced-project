import React, { useEffect, useRef, useState } from "react";

const ControlledInput = () => {
  //     const [name,setName] = useState("");
  //     const [email, setEmail] = useState("");
  const courses = ["Angular", "React", "Javascript"];
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    offers: false,
    course: "",
  });

  useEffect(()=>{
    inputElement.current.focus();
  },[]);

  const inputElement = useRef("");
  console.log(inputElement);

  function handleChange(e) {
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    console.log(e.target.name);
    console.log(e.target.value);
    console.log(e.target.type);
    setUser({ ...user, [e.target.name]: value });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(user);
    setUser({
      ...user,
      name: "",
      email: "",
      password: "",
      offers: false,
      course: "",
    });
   
    
  };
  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="">Name</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={handleChange}
            ref={inputElement}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <h1>Check Box Input</h1>
          <div className="form-group">
            <label className="form-label" htmlFor="">
              Send Offers
            </label>
            <input
              type="checkbox"
              name="offers"
              id=""
              checked={user.offers}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="courses">Courses</label>

          <select name="course" id="" onChange={handleChange}>
            {courses.map((course) => {
              return <option key={course}>{course}</option>;
            })}
          </select>
        </div>
        <button onClick={handleSubmit} className="btn btn-outline-primary my-2">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ControlledInput;
