import RecentFiles from "@/components/RecentFiles";
import Table from "@/components/Table";

const Dashboard = () => {
  // Static files for now (can replace with API later)
  const recentFiles = [
    { name: "design.png", type: "Image", date: "2025-06-20" },
    { name: "report.pdf", type: "PDF", date: "2025-06-18" },
    { name: "notes.txt", type: "Text", date: "2025-06-15" },
    { name: "backup.zip", type: "ZIP", date: "2025-06-12" }
  ];

  const uploadedFiles = [
    { name: "project-plan.docx", type: "Document", date: "2025-06-10" },
    { name: "logo.svg", type: "Image", date: "2025-06-09" },
    { name: "invoice.pdf", type: "PDF", date: "2025-06-08" }
  ];

  return (
    <div>
      <h1>Dashboard</h1>
      <RecentFiles files={recentFiles} />
      <div>
        <h2>Uploaed Files</h2>
        <Table files={uploadedFiles} />
      </div>
    </div>
  );
};

export default Dashboard;