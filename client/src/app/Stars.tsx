import Table from "@/components/Table";

const Stars = () => {
  const starredFiles = [
    { name: "fav1.png", type: "Image", date: "2025-06-21" },
    { name: "fav2.pdf", type: "PDF", date: "2025-06-18" }
  ];

  return (
    <div>
      <h2>⭐ Starred Files</h2>
      <Table files={starredFiles} />
    </div>
  );
};

export default Stars;
