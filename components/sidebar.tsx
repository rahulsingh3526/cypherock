interface SidebarProps {
  onSelect: (componentName: string) => void;
}

export const Sidebar = ({ onSelect }: SidebarProps) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col ">
        <button onClick={() => onSelect("ComponentOne")}>Component One</button>
        <button onClick={() => onSelect("ComponentTwo")}>Component Two</button>
      </div>
    </div>
  );
};
