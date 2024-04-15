import { LogOut } from "lucide-react";
import React from "react";
import { NavLink } from "react-router-dom";


function LoggedIn({status}) {

    if(status)
  return (
    <>
      <div className="flex flex-col justify-center max-w-fit py-10 m-auto gap-10">
        <NavLink to="/signin">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700/80"
            onClick={() => {
              setStatus(false);
              console.log("mewoo");
            }}
          >
            LogOut
            <LogOut />
          </button>
        </NavLink>
      </div>
    </>
  );
  else
  return (
    <>
    mewwwooooo
    </>
  );
}

export { LoggedIn };
