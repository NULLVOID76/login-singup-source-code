import React from "react";
import { useUser } from "../context/userContext";

function Admin() {
  const { users } = useUser();
  return (
    <>
      <div class="relative flex flex-col w-full h-full overflow-scroll text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
        <table class="w-full text-left table-auto min-w-max">
          <thead>
            <tr>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Name
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Email
                </p>
              </th>
              <th class="p-4 border-b border-blue-gray-100 bg-blue-gray-50 text-center">
                <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                  Password
                </p>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user,index) => (
              <tr class="even:bg-blue-gray-50/50 text-center " key={index}>
                <td class="p-4">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {user.name}
                  </p>
                </td>
                <td class="p-4">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                    {user.email}
                  </p>
                </td>
                <td class="p-4">
                  <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
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
