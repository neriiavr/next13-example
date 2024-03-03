import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <main>
      <h1>Hi</h1>
      <Link href="/users">Users</Link>
    </main>
  );
};

export default page;
