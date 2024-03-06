import React from "react";
import "./PreviewInvoice.css";
import Print_out from "../Assests/Printout.svg";
import preview_logo from "../Assests/preview_logo.svg";

const PreviewInvoice = () => {
  return (
    <div className="previewinvoice">
      <div className="preview-head">
        <div className="preview-heading">Preview Invoice</div>
        <div className="preview-printout">
          <img src={Print_out} alt="" />
        </div>
      </div>
      <div className="preview-body">
        <div className="preview-logo">
          <img src={preview_logo} alt="" />
        </div>
        <div className="preview-summary">
          <p>SUMMERY</p>
          <div className="preview-line"></div>
        </div>
        <div className="preview-name">
          <p>Dr. Vihang</p>
          <p>Jane Doe</p>
        </div>
        <div className="preview-table">
          <table>
            <div className="preview-tablehead">
              <th className="table-item">item</th>
              <th className="table-rate">Rate</th>
              <th className="table-qty">Qty</th>
              <th className="table-amount">Amount</th>
            </div>
            <div className="preview-tablebody">
              <tr>
                <td className="table-item">Vitamin A Night Serum</td>
                <td className="table-rate">$90</td>
                <td className="table-qty">2</td>
                <td className="table-amount">$180</td>
              </tr>
              <tr>
                <td className="table-item">Vitamin A Night Serum</td>
                <td className="table-rate">$90</td>
                <td className="table-qty">2</td>
                <td className="table-amount">$180</td>
              </tr>
              <tr>
                <td className="table-item">Vitamin A Night Serum</td>
                <td className="table-rate">$90</td>
                <td className="table-qty">2</td>
                <td className="table-amount">$180</td>
              </tr>
            </div>
          </table>
        </div>
        <div className="preview-total">
          <div className="subtotal">Subtotal</div>
          <div className="subtotal-cost">$540.00</div>
        </div>
        <div className="preview-secondtotal">
          <div className="preview-text">tax 5%</div>
          <div className="preview-cost">$00.00</div>
        </div>
        <div className="preview-secondtotal">
          <div className="preview-text">Discount 10%</div>
          <div className="preview-cost">$00.00</div>
        </div>
        <div className="preview-line2"></div>
        <div className="preview-total">
          <div className="subtotal">total</div>
          <div className="subtotal-cost">$540.00</div>
        </div>
        <div className="preview-footer">
            <div className="footer-head">Notes/Terms</div>
            <div className="footer-text">Lorem ipsum dolor sit amet. Sit eaque assumenda qui.</div>
        </div>
      </div>
      <div className="preview-button">
        <button>Create New Invoice</button>
      </div>
    </div>
  );
};

export default PreviewInvoice;
