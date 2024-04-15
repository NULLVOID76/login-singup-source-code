import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { LogIn,KeySquare ,Import  } from "lucide-react";
import { NavLink } from "react-router-dom";
export function Home() {
  return (
    <>
      <div className="flex flex-col justify-center max-w-fit py-10 m-auto gap-10">
        <NavLink to="/signin">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-red-700 px-3 py-2 text-sm font-semibold text-white hover:bg-red-700/80"
          >
            
            <LogIn />
            Sign In
          </button>
        </NavLink>

        <NavLink to="/signup">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-md bg-blue-700 px-3 py-2 text-sm font-semibold text-white hover:bg-blue-700/80"
          >
            Sign Up
            <Import />

          </button>
        </NavLink>
      </div>
    </>
  );
}
