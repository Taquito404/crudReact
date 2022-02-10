import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import StaffTable from "./components/staffTable";
import AddStaffForm from "./components/addStaff";
import EditStaff from "./components/editStaffDataForm";
import Nav from "./components/nav";

const App = () => {
  const staffData = [
    {
      id: uuidv4(),
      name: "Sara",
      telephone: 55535555,
      nss: 11111111111,
      rfc: "VECJ880326XXX",
    },
  ];
  const [data, setData] = useState(staffData);
  const [modalAddData, setAddData] = useState(false);
  const [editData, setEditData] = useState(false);
  const [currentData, setCurrentData] = useState({
    id: null,
    name: "",
    telephone: null,
    nss: null,
    rfc: "",
  });
  const editInForm = (data) => {
    setEditData(true);
    setCurrentData({
      id: data.id,
      name: data.name,
      telephone: data.telephone,
      nss: data.nss,
      rfc: data.rfc,
    });
  };

  const addData = (staff) => {
    staff.id = uuidv4();
    setData([...data, staff]);
  };
  const deleteData = (id) => {
    // console.log(id);
    setData(data.filter((staff) => staff.id !== id));
  };
  const updateData = (id, updateData) => {
    setEditData(false);
    setData(data.map((staff) => (staff.id === id ? updateData : staff)));
  };
  return (
    <div className="">
      <Nav />
      <svg
        onClick={() => {
          setAddData(true);
        }}
        xmlns="http://www.w3.org/2000/svg"
        className="bi bi-plus-circle-fill addButton"
        viewBox="0 0 16 16"
      >
        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
      </svg>
      {modalAddData && (
        <AddStaffForm addData={addData} closeAddData={setAddData} />
      )}
      <div className="">
        {editData && (
          <EditStaff
            currentData={currentData}
            updateData={updateData}
            editClose={setEditData}
          />
        )}

        <div className="">
          <StaffTable
            data={data}
            deleteData={deleteData}
            editInForm={editInForm}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
