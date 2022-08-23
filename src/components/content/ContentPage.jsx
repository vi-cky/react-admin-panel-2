import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import StudentsTable from "../../pages/addStudent/StudentsTable";
import Contact from "../../pages/contact/Contact";
import Dashboard from "../../pages/dashboard/Dashboard";
import Students from "../../pages/students/AddStudents";
import Teachers from "../../pages/teachers/Teachers";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
const antIcon = (
  <LoadingOutlined
    style={{
      fontSize: 24,
    }}
    spin
  />
);

export default function ContentPage() {
  return (
    <Suspense fallback={<Spin indicator={antIcon} />}>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/students">
          <Route path="/students/add" element={<Students />} />
          <Route path="/students/table" element={<StudentsTable />} />
          <Route path="/students/contact" element={<Contact />} />
        </Route>
        <Route path="/teachers" element={<Teachers />} />
      </Routes>
    </Suspense>
  );
}
