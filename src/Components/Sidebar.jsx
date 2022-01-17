import MenuItem from "./MenuItem";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="menu">
        <ul>
          <MenuItem Path="/dashboard" Icon="ri-home-5-line" />
          <MenuItem Path="/rider" Icon="ri-user-location-line" />
          <MenuItem Path="/dashboard" Icon="ri-motorbike-line" />
          <MenuItem Path="/dashboard" Icon="ri-file-copy-2-line" />
          <MenuItem Path="/dashboard" Icon="ri-settings-3-line" />
          <MenuItem Path="/" Icon="ri-logout-circle-line" />
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
