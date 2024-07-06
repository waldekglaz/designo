import React from "react";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="text-center pt-12">
      <h1 className="font-bold text-3xl">404 - Page Not Found</h1>
      <p className="mb-4">
        Sorry, the page you are looking for does not exist.
      </p>
      <Link className="underline" href="/">
        Go back to the homepage
      </Link>
    </div>
  );
};

export default NotFound;
