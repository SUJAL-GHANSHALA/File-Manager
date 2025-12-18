// import "./FileDetailesPanel.css"; // Optional

const FileDetailesPanel = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <div className={`right-sidebar ${isOpen ? "open" : ""}`}>
      <button onClick={onClose}>Close</button>

      {/* Tab switch UI */}
      <div>
        <button>Link Sharing</button>
        <button>Comments</button>
      </div>

      {/* Content area */}
      <div className="right-sidebar-content">
        {/* Placeholder content */}
        <p>This is where file sharing info or comments go.</p>
      </div>
    </div>
  );
};

export default FileDetailesPanel;
