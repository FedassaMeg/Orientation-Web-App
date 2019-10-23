import React, { useState, useEffect } from "react";

const arr = [
  { id: 1, title: "Introduction to First Call Hospice", module: 1 },
  { id: 2, title: "Message System", module: 3 },
  { id: 3, title: "Introduction to Hospice", module: 4 },
  { id: 4, title: "Admission Handbook", module: 4 },
  { id: 5, title: "Hospice in Care Facilities", module: 4 },
  { id: 6, title: "Patient's Rights", module: 4 },
  { id: 7, title: "Case Study", module: 4 },
  { id: 8, title: "Fall Prevention", module: 4 },
  { id: 9, title: "Communication Techniques", module: 4 },
  { id: 10, title: "Interdisciplinary Group", module: 4 },
  { id: 11, title: "IDG Experience Model", module: 4 },
  { id: 12, title: "Duties of the Hospice Aide", module: 4 },
  { id: 13, title: "Personal Care Plan of Care", module: 4 },
  { id: 14, title: "Discharges, Revocations, Transfers", module: 4 },
  { id: 15, title: "Problem Oriented Charting", module: 5 },
  { id: 16, title: "Visit Frequencies", module: 5 },
  { id: 17, title: "Visit SOC 15 and VR", module: 5 },
  { id: 18, title: "PRN Visit", module: 5 },
  { id: 19, title: "24 Hour Follow-up Visits", module: 5 },
  { id: 20, title: "Pronouncement Visits", module: 5 }
];

export default function DashboardTest() {
  const initialState = {
    md1: [],
    md3: [],
    md4: [],
    md5: []
  };
  const [state, setstate] = useState(initialState);

  useEffect(() => {
    setstate({ md1: md1Arr, md3: md3Arr, md4: md4Arr, md5: md5Arr });
  }, []);

  const md1Arr = arr.filter(slide => {
    return slide.module === 1;
  });
  const md3Arr = arr.filter(slide => {
    return slide.module === 3;
  });
  const md4Arr = arr.filter(slide => {
    return slide.module === 4;
  });
  const md5Arr = arr.filter(slide => {
    return slide.module === 5;
  });
  console.log(state);
  return <div>state</div>;
}
