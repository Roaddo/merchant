import DashboardHeader from "../Components/DashboardHeader";
import Sidebar from "../Components/Sidebar";
import CardTile from "../Components/CardTile";
import CardTileMin from "../Components/CardTileMin";
import ListItem from "../Components/ListItem";

import SimpleBarReact from "simplebar-react";
import "simplebar/src/simplebar.css";

import {
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    Month: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    Month: 1398,
    amt: 2210,
  },
  {
    name: "March",
    uv: 2000,
    Month: 9800,
    amt: 2290,
  },
  {
    name: "April",
    uv: 2780,
    Month: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    Month: 4800,
    amt: 2181,
  },
  {
    name: "June",
    uv: 2390,
    Month: 3800,
    amt: 2500,
  },
  {
    name: "July",
    uv: 3490,
    Month: 4300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    Month: 4300,
    amt: 2100,
  },
  {
    name: "Sept",
    uv: 3490,
    Month: 4300,
    amt: 2100,
  },
  {
    name: "Oct",
    uv: 3490,
    Month: 4300,
    amt: 2100,
  },
  {
    name: "Nov",
    uv: 3490,
    Month: 4300,
    amt: 2100,
  },
  {
    name: "Dec",
    uv: 3490,
    Month: 4300,
    amt: 2100,
  },
];

const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div className="d-content">
        <DashboardHeader />
        <div className="container">
          <div className="main-content">
            <h4>Dashboard</h4>
            <p>Howdy Fred!</p>

            <div className="row">
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body py-4">
                    <h6 className="fw-bold">Stats</h6>

                    <div className="mt-3 row gx-3 gy-2">
                      <div className="col-md-6">
                        <CardTile
                          Icon="ri-riding-line"
                          Count="50"
                          Title="Total Riders"
                          Path="/dashboard"
                          IconColor="bg-danger"
                        />
                      </div>
                      <div className="col-md-6">
                        <CardTile
                          Icon="ri-user-add-line"
                          Count="150"
                          Title="Total Customers"
                          Path="/dashboard"
                          IconColor="bg-info"
                        />
                      </div>
                      <div className="col-md-6">
                        <CardTile
                          Icon="ri-wallet-line"
                          Count="&#8358;500,000"
                          Title="Total Earning"
                          Path="/dashboard"
                          IconColor="bg-success"
                        />
                      </div>
                      <div className="col-md-6">
                        <CardTile
                          Icon="ri-user-voice-line"
                          Count="300"
                          Title="Total Jobs"
                          Path="/dashboard"
                          IconColor="bg-warning"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card">
                  <div className="card-body py-4">
                    <h6 className="fw-bold">Monthly Revenue</h6>

                    <LineChart
                      width={600}
                      height={205}
                      data={data}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                      }}
                      className="mt-3"
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <Tooltip />
                      <Legend />
                      <Line
                        type="monotone"
                        dataKey="Month"
                        stroke="#f76514"
                        activeDot={{ r: 8 }}
                      />
                    </LineChart>
                  </div>
                </div>
              </div>
            </div>

            <div className="row mt-3">
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body py-4">
                    <h6 className="fw-bold">Job Stats</h6>
                    <div className="mt-3 row gx-3 gy-2">
                      <div className="col-md-6">
                        <CardTileMin Count="50" Title="Ongoing Job" Path="/" />
                      </div>
                      <div className="col-md-6">
                        <CardTileMin
                          Count="2"
                          Title="Cancelled Job"
                          Path="/dashboard"
                        />
                      </div>
                      <div className="col-md-6">
                        <CardTileMin
                          Count="250"
                          Title="Completed Job"
                          Path="/dashboard"
                        />
                      </div>
                      <div className="col-md-6">
                        <CardTileMin
                          Count="5"
                          Title="Pending Job"
                          Path="/dashboard"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card">
                  <div className="card-body jobs-card py-4">
                    <h6 className="fw-bold">Ongoing Jobs</h6>
                    <SimpleBarReact style={{ height: `100%` }}>
                      <div className="list-group mt-3">
                        <ListItem
                          Type="Multiple"
                          Date="2022-10-20 12:40"
                          Destination="19 Akarigbere Road, Victoria Island, Lagos Nigeria"
                          Status="Enroute"
                        />

                        <ListItem
                          Type="single"
                          Date="2022-10-20 12:40"
                          Destination="27 Ribadu Road, Ikoyi, Lagos Nigeria"
                          Status="Arrived"
                        />

                        <ListItem
                          Type="single"
                          Date="2022-10-20 12:40"
                          Destination="Apple Junction, Festac"
                          Status="In Transit"
                        />
                      </div>
                    </SimpleBarReact>
                  </div>
                </div>
              </div>
              <div className="col-md-4"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
