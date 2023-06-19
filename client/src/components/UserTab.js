import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteuser } from "../js/slice/UserSlice";

const UserTab = ({ ping, setping }) => {
  const users = useSelector((state) => state?.user?.users);
  const dispatch = useDispatch();
  return (
    <div className="dash_containerDash">
      <div className="liste">Liste of users</div>
      <table className="table_reservation">
        <tbody>
          <tr>
            <th>All users</th>
            <th>Date</th>
            <th>Users</th>
            <th>Email</th>
            <th />
          </tr>

          {users?.map((el, i) => (
            <tr key={i}>
              <td>{el?.name}</td>
              <td>2021-08-04</td>
              <td
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-around",
                }}
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/512/186/186037.png"
                  alt=""
                />
              </td>
              <td>{el?.email}</td>
              <td className="last_td">
                <button
                  onClick={() => {
                    dispatch(deleteuser(el?._id));
                    setping(!ping);
                  }}
                  style={{ width: "30px" }}
                >
                  x
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTab;
