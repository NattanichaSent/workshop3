import React, { useState } from "react";

const LoginModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleModel = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className="bg-blue-300 px-8 py-5 rounded shadow-lg cursor-pointer"
        onClick={toggleModel}
      >
        Register !
      </div>

      {isOpen && (
        <div className="w-screen  h-screen  flex justify-center items-center absolute top-0 left-0">
          <div
            className="w-screen h-screen bg-black/50 absolute top-0 left-0"
            onClick={toggleModel}
          ></div>
          <div className="bg-white px-14 py-8 text-xl rounded absolute shadow-lg">
            Login
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginModal;
