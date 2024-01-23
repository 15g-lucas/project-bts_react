import './App.css';
import { useState } from "react";
// import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SettingsBar from "./components/SettingsBar";
import LineChart from "./components/LineChart";

function App() {

    const [menu, setMenu] = useState(1)

    return (
        <div className={'flex justify-between'}>
            <NavBar menu={menu} setMenu={setMenu}/>
            <div>
            <LineChart />

            </div>
            <SettingsBar />

        </div>

    );
}

export default App;
