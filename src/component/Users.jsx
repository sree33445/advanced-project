import React, { useMemo, useState } from "react";
import UserCard from "./UserCard";

const Users = () => {
  const userList = [
    { id: 1, name: "Hari" },
    { id: 2, name: "Sukanya" },
    { id: 3, name: "Musavir" },
    { id: 4, name: "Joitson" },
  ];

  const [users, setUsers] = useState(userList);
  const [value, setValue] = useState(0);
  const displayusers = useMemo(
    () =>
      users.map((user) => {
        return <UserCard key={user.id} user={user} />;
      }),
    [users]
  );

  const handleCounter = () => {
    setValue((value) => value + 1);
  };

  const setUserDetail = (value) =>{
    setUsers([
      ...users, {
        id : users.length + 1,
        name : value,
      },
    ]);
  };

  return (
    <div>
      Use memo hook
      <div> {value} </div>
      <button onClick={() => handleCounter()}>Increment</button>
      <hr />
      Enter Name:{" "} <input type="text" onBlur={(e)=>setUserDetail(e.target.value)} />
      {displayusers}
    </div>
  );
};

export default Users;
