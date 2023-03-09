import React from "react"
import SearchIcon from '@mui/icons-material/Search';
import EditIcon from '@mui/icons-material/Edit';
import SidebarThread from "./SidebarThread";

function Sidebar () {
  return (
    <div className ="sidebar">
        <div className = "sidebar__search">
            <SearchIcon className = "sidebar__search" />
            <input placeholder ="Search" className = "search__input" />
        </div>
        <EditIcon />
        <div className = "sidebar__thread">
            <SidebarThread />
        </div>
    </div>
  )
};

export default Sidebar;