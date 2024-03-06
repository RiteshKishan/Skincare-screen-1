import React from "react";
import "./InvoiceList.css";
import search from "../Assests/Search.svg";
import arrow from "../Assests/Arrow.svg";
import patientdata from "../Assests/PatientData.js";

const InvoiceList = () => {
  const data = patientdata;

  return (
    <div className="invoicelist">
      <div className="list-header">
        <div className="header-searchbar">
          <div className="seachbar-text">Search by patient name</div>
          <div className="search-icon">
            <div className="icon-divider"></div>
            <div className="icon">
              <img src={search} alt="" />
            </div>
          </div>
        </div>
        <div className="header-date">
          <div className="select-date">Select Date:</div>
          <div className="icon-divider"></div>
          <div className="date">20 Aug</div>
          <div className="arrowdown">
            <img src={arrow} alt="" />
          </div>
        </div>
      </div>
      <div className="line"></div>

      <div className="patient-table">
        <div className="table-head">
          <div className="table-patient">Patient</div>
          <div className="table-time">Time</div>
          <div className="table-date">Date</div>
          <div className="table-total">Total</div>
          <div className="table-status">Status</div>
        </div>
        <div className="table-body">
          {data.map((item, i) => {
            return (
              <>
                <div
                  className={item.active ? "table-listactive" : "table-list"}
                >
                  <div className="table-patient">{item.patient}</div>
                  <div className="table-time">{item.time}</div>
                  <div className="table-date">{item.Date}</div>
                  <div className="table-total">{item.total}</div>
                  <div className="tabel-status">
                    <img src={item.status} alt="" />
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="table-viewmore">View more</div>
      </div>
    </div>
  );
};

export default InvoiceList;
