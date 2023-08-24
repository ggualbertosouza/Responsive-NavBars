import { Outlet } from "react-router-dom";
import SideBar from "./components/SideBar";

export default function App() {
  return (
    <div className="flex gap-5">
      <SideBar />
      <div className="max-w-5xl flex-1 mx-auto py-4">
      <Outlet />
      </div>
    </div>
  );
}
