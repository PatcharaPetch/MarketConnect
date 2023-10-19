import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import "./Support.scoped.css";
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";
import { AuthContext } from "../App";

function Support() {
  const { user } = useContext(AuthContext);
  const [issue, setIssue] = useState("");
  const [history, setHistory] = useState([]);

  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  };
  const getdata = () => {
    axios
      .post("http://localhost:3200/getsupport", {
        email: user?.email,
      })
      .then((res) => {
        setHistory(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  };
  const handleSubmit = () => {
    // สร้างประวัติใหม่โดยเพิ่มข้อมูล issue และ status "Not Finish" ลงใน state
    axios
      .post("http://localhost:3200/sendsupport", {
        email: user?.email,
        contact: user?.user_metadata?.contact,
        message: issue,
        status: "Not Finish",
      })
      .then((res) => {
        getdata();
      })
      .catch((err) => {
        alert(err);
      });
    // const newHistoryEntry = { issue, status: "Not Finish" };
    // const newHistory = [...history, newHistoryEntry];
    // setHistory(newHistory);

    // เคลียร์ค่า issue หลังจากส่ง
    // setIssue("");
  };
  const handleUnsend = (event, id) => {
    // สร้างรายการประวัติใหม่โดยลบข้อมูลในรายการที่ต้องการยกเลิก
    // const newHistory = [...history];
    // newHistory.splice(index, 1);
    event.preventDefault();
    axios
      .post("http://localhost:3200/unsendsupport", {
        id: id,
      })
      .then((res) => {
        getdata();
      })
      .catch((err) => {
        alert(err);
      });
    // อัปเดตประวัติใหม่
    // setHistory(newHistory);

    // (อาจต้องจัดการต่อเพื่อยกเลิกการส่งข้อมูลจริงๆ)
  };
  // โหลดข้อมูลประวัติเมื่อหน้า Support โหลด
  useEffect(() => {
    getdata();
  }, [user]);

  // บันทึกประวัติลงใน localStorage เมื่อมีการเปลี่ยนแปลงใน history
  // useEffect(() => {
  //   localStorage.setItem("supportHistory", JSON.stringify(history));
  // }, [history]);
  return (
    <div className="container">
      <NavBar />
      {/* <PopChat messages={[]} /> */}
      <div className="support-container">
        <div className="left-container">
          <h2>History of Data transmission</h2>
          <table className="history-table">
            <thead>
              <tr>
                <th style={{ width: "60%" }}>Problem</th>
                <th style={{ width: "20%" }}>Status</th>
                <th style={{ width: "20%" }}>Unsend</th>{" "}
                {/* เพิ่ม width เพื่อปรับขนาดของ th "Unsend" */}
              </tr>
            </thead>
            <tbody>
              {history.map((entry) => (
                <tr key={entry?.id}>
                  <td style={{ width: "60%" }}>
                    <div className="problem-text">{entry?.Problem}</div>
                  </td>
                  <td style={{ width: "20%" }}>{entry?.Status}</td>
                  <td style={{ width: "20%" }}>
                    <button
                      className="unsend-button"
                      onClick={(e) => handleUnsend(e, entry?.id)}
                    >
                      <span role="img" aria-label="Unsend">
                        ❌
                      </span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="right-container">
          <h2>Contact Support</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="issue">Report Problem</label>
              <textarea
                id="issue"
                name="issue"
                value={issue}
                onChange={handleIssueChange}
                required
                rows={10}
                cols={50}
              />
            </div>
            <div className="button-box">
              <button type="submit">Send</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Support;
