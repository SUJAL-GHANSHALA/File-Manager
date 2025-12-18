 type FileType = {
    name: string;
    type: string;
    date: string;
  };
  
  const Table = ({ files }: { files: FileType[] }) => {
    return (
      <section>
        <h2>Uploaded Files</h2>
        <table style={{ width: "100%", borderCollapse: "collapse", marginTop: "10px" }}>
          <thead>
            <tr style={{ backgroundColor: "#f0f0f0" }}>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Name</th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Type</th>
              <th style={{ border: "1px solid #ddd", padding: "10px" }}>Date</th>
            </tr>
          </thead>
          <tbody>
            {files.map((file, index) => (
              <tr key={index}>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{file.name}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{file.type}</td>
                <td style={{ border: "1px solid #ddd", padding: "10px" }}>{file.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    );
  };
  
  export default Table;