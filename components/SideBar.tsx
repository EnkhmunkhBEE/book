// components/Sidebar.tsx
export function Sidebar() {
  return (
    <aside className="sidebar">
      <h3>Categories</h3>
      <ul>
        <li>Programming</li><li>Web Development</li>
        <li>Data & AI</li><li>Mobile Development</li>
      </ul>
      <div className="sidebar-box">
        <strong>Student Tip</strong>
        <p>Эхлээд жижиг project-г бүрэн дуусгаж сур.</p>
      </div>
    </aside>
  );
}