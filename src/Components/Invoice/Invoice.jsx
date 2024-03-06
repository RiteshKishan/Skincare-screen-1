import React from 'react';
import './Invoice.css';
import PreviewInvoice from '../PreviewInvoice/PreviewInvoice';
import InvoiceList from '../InvoiceList/InvoiceList';

const Invoice = () => {
  return (
    <div className='invoice'>
        <div className="invoice-head">Invoice</div>
        <div className="invoice-subhead">Invoice-list</div>
        <div className="invoice-content">
            <InvoiceList/>
            <PreviewInvoice/>
        </div>
    </div>
  )
}

export default Invoice