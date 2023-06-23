import React, { useRef } from "react";

function BurgerMenu() {
  const bodyRef = useRef(document.body);
  const burgerMenu = React.createRef();
  // const state = document.querySelector(".burger-menu").classList;

  const referenceClick = (e) => {
    bodyRef?.current?.classList.toggle("nav-opened");
    burgerMenu?.current?.classList.toggle("open");
    e.target.closest(".burger-icon").classList.toggle("open");
  };

  return (
    <>
      <div className="burger-icon lg:hidden " onClick={referenceClick}>
        <svg
          className="burger relative top-1/2 translate-y-[-50%] z-20"
          stroke="currentColor"
          fill="none"
          stroke-width="0"
          viewBox="0 0 15 15"
          font-size="25"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M1.5 3C1.22386 3 1 3.22386 1 3.5C1 3.77614 1.22386 4 1.5 4H13.5C13.7761 4 14 3.77614 14 3.5C14 3.22386 13.7761 3 13.5 3H1.5ZM1 7.5C1 7.22386 1.22386 7 1.5 7H13.5C13.7761 7 14 7.22386 14 7.5C14 7.77614 13.7761 8 13.5 8H1.5C1.22386 8 1 7.77614 1 7.5ZM1 11.5C1 11.2239 1.22386 11 1.5 11H13.5C13.7761 11 14 11.2239 14 11.5C14 11.7761 13.7761 12 13.5 12H1.5C1.22386 12 1 11.7761 1 11.5Z"
            fill="currentColor"
          ></path>
        </svg>
        <svg
          className="close hidden relative top-1/2 translate-y-[-50%] z-20"
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          font-size="25"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            stroke="#000"
            stroke-width="2"
            d="M3,3 L21,21 M3,21 L21,3"
          ></path>
        </svg>
      </div>
      <div
        ref={burgerMenu}
        className="burger-menu bg-white h-screen lg:hidden absolute top-[70px] left-[9999px] transition-all ease-in-out delay-150 w-screen border-t border-e-gray-300 z-10 p-20"
      >
        <ul className="">
          <li className="mb-10 text-xl border-b-2 border-black w-max hover:text-primaryColor hover:border-primaryColor font-semibold transition-all leading-1  ">
            Our Service
          </li>
          <li className="mb-10 text-xl border-b-2 border-black w-max hover:text-primaryColor hover:border-primaryColor font-semibold transition-all leading-1  ">
            Nearshore
          </li>
          <li className="mb-10 text-xl border-b-2 border-black w-max hover:text-primaryColor hover:border-primaryColor font-semibold transition-all leading-1  ">
            Carer
          </li>
          <li className="mb-10 text-xl border-b-2 border-black w-max hover:text-primaryColor hover:border-primaryColor font-semibold transition-all leading-1  ">
            Contact
          </li>
        </ul>
      </div>
    </>
  );
}

export default BurgerMenu;
