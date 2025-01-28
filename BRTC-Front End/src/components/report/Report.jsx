import "./report.css";

const Report = () => {
  // Sample data for reports
  const reports = [
    {
      id: 1,
      reportName: "Concrete Strength Test Report",
      reportDate: "28 Nov, 2024",
      fileName: "/assets/brtc-certificate-2-788x1024 (5).pdf", // Files must be in the public folder
    },
    {
      id: 2,
      reportName: "Soil Composition Test Report",
      reportDate: "15 Dec, 2024",
      fileName: "/assets/report-002.pdf", // Files must be in the public folder
    },
  ];

  return (
    <div className="report-container">
      {/* Page Title */}
      <h2 className="page-title">Download Report</h2>
      <div className="breadcrumb">
        <span>User Profile</span> &gt; <span>Download Report</span>
      </div>

      {/* Report Card */}
      <div className="report-card">
        <h3 className="card-header">Your Reports</h3>
        <table className="report-table">
          <thead>
            <tr>
              <th>NO.</th>
              <th>Report Name</th>
              <th>Report Date</th>
              <th>File</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={report.id}>
                <td>{index + 1}</td>
                <td>{report.reportName}</td>
                <td>{report.reportDate}</td>
                <td>
                  <a href={report.fileName} target="_blank" rel="noopener noreferrer">
                    {report.fileName.split("/").pop()}
                  </a>
                </td>
                <td>
                  <button
                    className="btn-download"
                    onClick={() => {
                      const link = document.createElement("a");
                      link.href = report.fileName;
                      link.download = report.fileName.split("/").pop();
                      link.click();
                    }}
                  >
                    Download
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;

