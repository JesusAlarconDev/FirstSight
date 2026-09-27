import SideBarMenuLeft from "./Components/SideBarMenuLeft";
import SidebarRight from "./Components/SidebarRight";

export default function Layout({children}: {children: React.ReactNode}) {
  return (
    <div className="flex justify-between">
      <div>
        <SideBarMenuLeft />
      </div>
      <div>
        {children}
      </div>
      <div>
        <SidebarRight />
      </div>
    </div>
  );
}