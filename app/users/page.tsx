import React from "react";

// defining the shape of our user objects
interface User {
  id: number;
  name: string;
}

const UsersPage = async () => {
  //when we call the fetch function we can pass a second argument which is an options object
  // in this object we can set cache to no store to disable catching, this is useful if you have data that changes frequently -> {cache: 'no-store'}
  // the other option is to keep data fresh for a certain period of time. so instead setting cache to no store, we set next to an object
  // in this object we can specify configuration parameters that are specific to next js
  // so we can set revalidate to value like 10 and this means nextjs is going to run a background job and get fresh data from the backend every 10 sec

  //important!! caching behavior is only implemented in the fetch function so if you use a third party library like axios you are not gonna get the data cache
  const res = await fetch("https://jsonplaceholder.typicode.com/users", {
    next: { revalidate: 10 },
  });
  const users: User[] = await res.json();

  return (
    <>
      <h1>Users</h1>
      <ul>
        {" "}
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default UsersPage;
