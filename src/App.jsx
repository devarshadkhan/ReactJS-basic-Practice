import { useState } from "react";
import "./App.css";
import ReactSelect from "./components/ReactSelect";
import { InputText } from "primereact/inputtext";
import { TabView } from "primereact/tabview";
import logo from "./assets/logo.jpeg";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
// import "react-tabs/style/react-tabs.css";
function App() {
  const [value, setValue] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      {/* main  header */}
      <div className="main-header">
        <div className="main-header-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <ul>
                  <li>
                    {/* <a href="">Max Sahara</a> */}
                    <ReactSelect />
                  </li>
                  <li>
                    {/* <a href="">OPD Registration</a> */}
                    <ReactSelect />
                  </li>
                  <li>
                    <a href="">
                      {" "}
                      <i
                        className="pi pi-user
"
                      ></i>{" "}
                      Welcome: Arshad Khan
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i
                        className="pi pi-cog
"
                      ></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="pi pi-sign-out"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sub  header */}
      <div className="sub-header">
        <div className="sub-header-content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-2">
                <img src={logo} alt="" className="logoImg" />
              </div>
              <div className="col-10">
                <ul>
                  <li>
                    <a href="" className="active">
                      Registration
                    </a>
                  </li>
                  <li>
                    <a href="">OPD</a>
                  </li>
                  <li>
                    <a href="">Reprint</a>
                  </li>
                  <li>
                    <a href="">Tools</a>
                  </li>
                  <li>
                    <a href="">Reports</a>
                  </li>

                  {/* <li>
                    <a href="">Purchase</a>
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ftr-header">
        <div className="container-fluid">
          <div className="row">
            <div className="col-3">
              <div className="input-area">
                <i className="pi pi-search"></i>
                <input
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                  placeholder="Search for..."
                />
                <i className="pi pi-sliders-h "></i>
              </div>
            </div>
            <div className="col-9 listing">
              <ul>
                <li>
                  <a href="" className="active">
                    OPD Service Booking
                  </a>
                </li>
                <li>
                  <a href="">Confirmation</a>
                </li>
                <li>
                  <a href="">OPD Setellment</a>
                </li>
                <li>
                  <a href="">OPD Advance</a>
                </li>
                <li>
                  <a href="">Card Print</a>
                </li>
                <li>
                  <a href="">Upload View Documents</a>
                </li>

                {/* <li>
                    <a href="">Purchase</a>
                  </li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <section className="sec_card">
        <div className="container-fluid">
          <div className="row">
            <div className="card">
              <div className="cardHeader">
                <h4>OPD Service Booking</h4>
              </div>
              <div className="bag1">
                <div className="col-md-2">
                  <div className="form1">
                    <label htmlFor="">Max ID:</label>
                    <input type="text" className="form-controsl" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form1">
                    <label htmlFor="">MobileNo:</label>
                    <input type="text" className="form-controsl" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form1">
                    <label htmlFor="">BookingID:</label>
                    <input type="text" className="form-controsl" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form1">
                    <label htmlFor="">Company:</label>
                    <input type="text" className="form-controsl" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form1">
                    <label htmlFor="">Corporate:</label>
                    <input type="text" className="form-controsl" />
                  </div>
                </div>
                <div className="col-md-2">
                  <div className="form1">
                    <label htmlFor="">Narattion:</label>
                    <input type="text" className="form-controsl" />
                  </div>
                </div>
              </div>
              <div className="bag2">
                <div className="col-md-1" style={{ width: "10.33333333%" }}>
                  <div className="form1">
                    <label htmlFor="">Max ID:</label>
                    <p>Arshad Khan</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="form1">
                    <label htmlFor="">Age:</label>
                    <p>23 YRS</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="form1">
                    <label htmlFor="">Gender:</label>
                    <p>Male</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="form1">
                    <label htmlFor="">DOB:</label>
                    <p>04/08/2000</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="form1">
                    <label htmlFor="">Natinality:</label>
                    <p>Indian</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <div className="form1">
                    <label htmlFor="">SSN:</label>
                    <p>0827654</p>
                  </div>
                </div>
                <div className="col-md-1">
                  <button className="ftgyhu">Appt. Search</button>
                </div>
                <div className="col-md-1">
                  <button>DMS</button>
                </div>
                <div className="col-md-1">
                  <button>Visit history</button>
                </div>
                <div className="col-md-1">
                  <button>Clear</button>
                </div>
              </div>

              <div className="Sub_card">
                <div className="Sub_card1">
                  <div className="headerCard">
                    {[
                      "Personal Detail",
                      "Other",
                      "Panel Details",
                      "Document Upload",
                    ].map((tab, index) => (
                      <h5
                        className={activeTab === index ? "he1" : "he2"}
                        onClick={() => handleTabClick(index)}
                      >
                        {" "}
                        {tab}
                      </h5>
                    ))}
                    {/* <h5 className="he1">Personal Detail</h5>
                    <h5 className="he2">Other</h5>
                    <h5 className="he2">Panel Details</h5>
                    <h5 className="he2">Document Upload</h5> */}

                    <div className="totalExp">
                      <p>Total Estimation: ₹450/-</p>
                    </div>
                  </div>
                  {activeTab === 0 && (
                    <div className="subCardContent">
                      <div className="row">
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="barcode"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Mobile No."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="title"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="first name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="laast name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="gender"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="date"
                              name=""
                              id=""
                              placeholder="barcode"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Age"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Type approved by"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="email address"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="martial status"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="id"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="id proof no."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="local address"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="permanent address"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="country"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="state"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="district"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="city"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2 d-flex align-items-center">
                          <div className="inpu mt-3">
                            <button
                              className="btn btn-primary"
                              onClick={() => handleTabClick(1)}
                            >
                              {" "}
                              Next
                            </button>
                          </div>
                        </div>
                        {/* <div className="col-md-2">
                        <div className="bag3">
                          <div>
                            <h5 className="mt-2">Consultations</h5>
                          </div>
                          <div>
                            <h5>Investigations</h5>
                          </div>
                          <div>
                            <h5>Health Checkups</h5>
                          </div>
                          <div>
                            <h5>Procedure & Others</h5>
                          </div>
                          <div>
                            <h5>Order Sets</h5>
                          </div>
                          <div>
                            <h5>Comsumables</h5>
                          </div>
                        </div>
                      </div> */}
                        {/* <div className="col-md-10">
                        <div className="bag5">
                          <div className="sec1">
                            <label htmlFor="">Servive Type:</label>
                            <ReactSelect />
                          </div>
                          <div className="sec1">
                            <label htmlFor="">Investigation Type:</label>
                            <ReactSelect />
                          </div>
                          <div className="erp">
                            <div className="sec1">
                              <button>Add</button>
                            </div>
                            <div className="sec1">
                              <button>Bill</button>
                            </div>
                          </div>
                        </div>
                        <div className="mid-table">
                          <table
                            class="table MobileTable"
                            cellspacing="2"
                            cellpadding="0"
                            border="0"
                          >
                            <thead>
                              <tr>
                                <th scope="col">S.No</th>
                                <th scope="col">Investigations</th>
                                <th scope="col">City</th>
                                <th scope="col">Precaution</th>
                                <th scope="col">Priority </th>
                                <th scope="col">Specialisation</th>
                                <th scope="col">Doctor Name</th>
                                <th scope="col">Unit Price</th>
                                <th scope="col"> Price</th>
                                <th scope="col"> clear</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr>
                                <td data-label="S.No">01</td>
                                <td data-label="Ticket No.">#1712552337839</td>
                                <td data-label="Name">dfgdfg</td>
                                <td data-label="Agent">Agent user</td>
                                <td data-label="Team Leader ">Naved Khan</td>
                                <td data-label="Manager">Shuaib Manager</td>
                                <td data-label="Team">Arshad Khan</td>
                                <td data-label="Start Date">08/04/2024</td>
                                <td data-label="Start Date">₹450/-</td>
                                <td data-label="Status" class="status-open">
                                  <i className="pi pi-times"></i>
                                </td>
                              </tr>
                              <tr>
                                <td data-label="S.No">02</td>
                                <td data-label="Ticket No.">#1712551216467</td>
                                <td data-label="Name">safasdfasd</td>
                                <td data-label="Agent">Agent user</td>
                                <td data-label="Team Leader ">Naved Khan</td>
                                <td data-label="Manager">Shuaib Manager</td>
                                <td data-label="Team">Arshad Khan</td>
                                <td data-label="Start Date">08/04/2024</td>
                                <td data-label="Start Date">₹450/-</td>
                                <td data-label="Status" class="status-open">
                                  <i className="pi pi-times"></i>
                                </td>
                              </tr>
                              <tr>
                                <td data-label="S.No">03</td>
                                <td data-label="Ticket No.">#1712550803392</td>
                                <td data-label="Name">Ticket for mana...</td>
                                <td data-label="Agent">N/A</td>
                                <td data-label="Team Leader ">Izhaan Khan</td>
                                <td data-label="Manager">Shuaib Manager</td>
                                <td data-label="Team">Arshad Khan</td>
                                <td data-label="Start Date">08/04/2024</td>
                                <td data-label="Start Date">₹450/-</td>
                                <td data-label="Status" class="status-open">
                                  <i className="pi pi-times"></i>
                                </td>
                              </tr>
                              <tr>
                                <td data-label="S.No">04</td>
                                <td data-label="Ticket No.">#1712319354725</td>
                                <td data-label="Name">Test Ticket by ...</td>
                                <td data-label="Agent">Asif Imam88</td>
                                <td data-label="Team Leader ">Arshad TLS</td>
                                <td data-label="Manager">Arshad Manager</td>
                                <td data-label="Team">Arshad Khan</td>
                                <td data-label="Start Date">05/04/2024</td>
                                <td data-label="Start Date">₹450/-</td>
                                <td data-label="Status" class="status-open">
                                  <i className="pi pi-times"></i>
                                </td>
                              </tr>
                              <tr>
                                <td data-label="S.No">05</td>
                                <td data-label="Ticket No.">#1712319182933</td>
                                <td data-label="Name">Test ticket by ...</td>
                                <td data-label="Agent">N/A</td>
                                <td data-label="Team Leader ">N/A</td>
                                <td data-label="Manager">Asif Imam</td>
                                <td data-label="Team">Arshad Khan</td>
                                <td data-label="Start Date">05/04/2024</td>
                                <td data-label="Start Date">₹450/-</td>
                                <td data-label="Status" class="status-open">
                                  <i className="pi pi-times"></i>
                                </td>
                              </tr>
                              <tr>
                                <td data-label="S.No">06</td>
                                <td data-label="Ticket No.">#1712119904685</td>
                                <td data-label="Name">werwqerw</td>
                                <td data-label="Agent">Agent user</td>
                                <td data-label="Team Leader ">Naved Khan</td>
                                <td data-label="Manager">Shuaib Manager</td>
                                <td data-label="Team">Arshad Khan</td>
                                <td data-label="Start Date">03/04/2024</td>
                                <td data-label="Start Date">₹450/-</td>
                                <td data-label="Status" class="status-open">
                                  <i className="pi pi-times"></i>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div> */}
                      </div>
                    </div>
                  )}
                  {activeTab === 1 && (
                    <div className="subCardContent">
                      <div className="row">
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="landline no"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="birth place"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="religion"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="relation of"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="realtion name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="relation phone"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="EMG first name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="EMG last name"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="EMG Relation"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="EMG Mobile no."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="EMG resident no."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="emd address no."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="emd address"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="is internation"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="country"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="locality"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="passport number"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="internation no."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="member ship no."
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="patient type"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="emp refID"
                              className="form-control"
                            />
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="inpu mt-3">
                            <input
                              type="text"
                              name=""
                              id=""
                              placeholder="Mobile"
                              className="form-control"
                            />
                          </div>
                        </div>

                        <div className="col-2 d-flex align-items-center">
                          <div className="inpu mt-3">
                            <button className="btn btn-primary"> Next</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <Tabs>
        <TabList>
          <Tab>Title 1</Tab>
          <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
          <h2>Any content 1</h2>
        </TabPanel>
        <TabPanel>
          <h2>Any content 2</h2>
        </TabPanel>
      </Tabs> */}
    </>
  );
}

export default App;
