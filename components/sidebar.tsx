interface SidebarProps {
  onSelect: (componentName: string) => void;
}

export const Sidebar = ({ onSelect }: SidebarProps) => {
  return (
    <div>
      {" "}
      <div className="flex flex-col ">
        <button onClick={() => onSelect("Wallets")}>Component One</button>
        <button onClick={() => onSelect("LastTransaction")}>
          Component Two
        </button>
      </div>
    </div>
  );
};
