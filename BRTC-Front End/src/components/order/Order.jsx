
import DataTable from "react-data-table-component";
import "./order.css";
import { useState } from "react";

const Order = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [entriesPerPage, setEntriesPerPage] = useState(10);

  // Sample Data
  const data = [
    {
      id: 1,
      orderNo: "BO2411-0001",
      date: "28 Nov, 2024",
      brtcNo: "W-1100-00027/CE/2024-25",
      customerName: "Farhan Karim",
      email: "sfkr@gmail.com",
      phone: "01534111896",
      status: "Finalized",
    },
  ];

  // Columns for the Table
  const columns = [
    {
      name: "NO.",
      selector: (row) => row.id,
      sortable: true,
      center: true,
    },
    {
      name: "Order NO",
      cell: (row) => (
        <div>
          <strong>{row.orderNo}</strong>
          <div className="order-date">{row.date}</div>
        </div>
      ),
      sortable: true,
    },
    {
      name: "BRTC NO",
      selector: (row) => row.brtcNo,
      sortable: true,
    },
    {
      name: "Customer Info",
      cell: (row) => (
        <div>
          <div>{row.customerName}</div>
          <div className="contact-info">&#9993; {row.email}</div>
          <div className="contact-info">&#9742; {row.phone}</div>
        </div>
      ),
    },
    {
      name: "Status",
      selector: (row) => row.status,
      sortable: true,
      center: true,
    },
    {
      name: "Actions",
      cell: () => (
        <div>
          <span className="table-action">Details</span> |{" "}
          <span className="table-action">View Order</span>
        </div>
      ),
      center: true,
    },
  ];

  // Filter Data Based on Search
  const filteredData = data.filter(
    (item) =>
      item.orderNo.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.customerName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="orders-container">
      <h2 className="page-title">Orders</h2>
      <div className="orders-card">
        <div className="table-controls">
          <div className="entries">
            Show
            <select
              value={entriesPerPage}
              onChange={(e) => setEntriesPerPage(Number(e.target.value))}
              className="entries-select"
            >
              <option value="10">10</option>
              <option value="25">25</option>
              <option value="50">50</option>
            </select>
            entries
          </div>
          <div className="search">
            Search:
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
              placeholder="Search orders..."
            />
          </div>
        </div>

        <DataTable
          columns={columns}
          data={filteredData}
          pagination
          paginationPerPage={entriesPerPage}
          paginationRowsPerPageOptions={[10, 25, 50]}
          highlightOnHover
          striped
        />
      </div>
    </div>
  );
};

export default Order;



