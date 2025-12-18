// src/components/dashboard/RecentFiles.tsx

type FileType = {
    name: string;
    type: string;
    date: string;
  };
  
  const RecentFiles = ({ files }: { files: FileType[] }) => {
    return (
      <section style={{ marginBottom: "30px" }}>
        <h2>Recently Selected Files</h2>
        <div style={{ display: "flex", gap: "20px", marginTop: "10px" }}>
          {files.map((file, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "8px",
                width: "150px",
                textAlign: "center"
              }}
            >
              <div>📄</div>
              <div style={{ marginTop: "8px", fontWeight: "bold" }}>{file.name}</div>
              <div style={{ fontSize: "12px", color: "#777" }}>{file.type}</div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default RecentFiles;
  