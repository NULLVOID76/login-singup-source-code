import React from "react";
import { useUser } from "../context/userContext";

function Admin() {
  const { users } = useUser();
  return (
    <>
      <div className="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <table className="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Email
                </p>
              </th>
              <th className="p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center">
                <p className="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Password
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr className="even:bg-blue-gray-50/50 text-center " key={index}>
                <td className="p-4">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {user.name}
                  </p>
                </td>
                <td className="p-4">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {user.email}
                  </p>
                </td>
                <td className="p-4">
                  <p className="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {user.password}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export { Admin };
