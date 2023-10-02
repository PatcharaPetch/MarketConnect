import React, { useState, useEffect } from 'react';
import './Support.scoped.css';
import NavBar from "../components/NavBar";
import { PopChat } from "../components/PopChat";

function Support() {
  const [issue, setIssue] = useState('');
  const [history, setHistory] = useState([]);

  const handleIssueChange = (e) => {
    setIssue(e.target.value);
  }
  
  const handleSubmit = () => {
    // สร้างประวัติใหม่โดยเพิ่มข้อมูล issue และ status "Not Finish" ลงใน state
    const newHistoryEntry = { issue, status: 'Not Finish' };
    const newHistory = [...history, newHistoryEntry];
    setHistory(newHistory);
    
    // เคลียร์ค่า issue หลังจากส่ง
    setIssue('');
  }
  const handleUnsend = (index) => {
    // สร้างรายการประวัติใหม่โดยลบข้อมูลในรายการที่ต้องการยกเลิก
    const newHistory = [...history];
    newHistory.splice(index, 1);
  
    // อัปเดตประวัติใหม่
    setHistory(newHistory);
  
    // (อาจต้องจัดการต่อเพื่อยกเลิกการส่งข้อมูลจริงๆ)
  }
  // โหลดข้อมูลประวัติเมื่อหน้า Support โหลด
  useEffect(() => {
    const storedHistory = localStorage.getItem('supportHistory');
    if (storedHistory) {
      setHistory(JSON.parse(storedHistory));
    }
  }, []);

  // บันทึกประวัติลงใน localStorage เมื่อมีการเปลี่ยนแปลงใน history
  useEffect(() => {
    localStorage.setItem('supportHistory', JSON.stringify(history));
  }, [history]);

  return (
    <div className="container">
      <NavBar />
      <PopChat messages={[]} />
      <div className="support-container">
        <div className="left-container">
          <h2>History of Data transmission</h2>
          <table className="history-table">
          <thead>
            <tr>
              <th style={{ width: '60%' }}>Problem</th>
              <th style={{ width: '20%' }}>Status</th>
              <th style={{ width: '20%' }}>Unsend</th> {/* เพิ่ม width เพื่อปรับขนาดของ th "Unsend" */}
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td style={{ width: '60%' }}>
                  <div className="problem-text">
                    {entry.issue}
                  </div>
                </td>
                <td style={{ width: '20%' }}>{entry.status}</td>
                <td style={{ width: '20%' }}>
                  <button className="unsend-button" onClick={() => handleUnsend(index)}>
                    <span role="img" aria-label="Unsend">❌</span>
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
              ></textarea>
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
