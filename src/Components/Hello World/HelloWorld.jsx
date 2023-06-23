import React from "react";
function HelloWorld() {
  return (
    <>
      <div className="my-32">
        <div className="container">
        <h1 className="headline">Hello world!</h1>
        <button className="flex m-auto justify-center rounded text-white bg-slate-600 p-3 align-middle text-center hover:bg-primaryColor  transition-all">
          Apply
        </button>
        </div>
      </div>
    </>
  );
}

export default HelloWorld;
