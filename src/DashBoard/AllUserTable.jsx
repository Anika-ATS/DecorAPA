import React from "react";

// import useAuth from "../Hooks/useAuth";
const AllUserTable = () => {
  //   const { users } = useAuth();

  return (
    <div>
      <h1 className="text-3xl  p-2 font-bold text-center mx-16 mb-5 mt-3 text-emerald-900">
        All Users
      </h1>
      <div className="overflow-x-auto p-10 ">
        <table className="table  bg-gradient-to-r from-[#64d9b9] to-[#1d2939]">
          {/* head */}
          <thead>
            <tr className=" text-xl font-bold text-white mb-3">
              <th>Email</th>
              <th>Display Name</th>
            </tr>
          </thead>
          {/* <tbody>
            {users.map((user) => (
              <tr key={user.uid}>
                <td>
                  <div className="flex items-center gap-3">
                    <div>
                      <div className="font-bold">{user.email}</div>
                    </div>
                  </div>
                </td>

                <td>{user.displayName || ""}</td>
              </tr>
            ))}
          </tbody> */}
        </table>
      </div>
    </div>
  );
};

export default AllUserTable;
