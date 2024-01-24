import './App.css';
import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SettingsBar from "./components/SettingsBar";
import LineChart from "./components/LineChart";
import Automaton from "./components/Automaton";

function App() {
    const [menu, setMenu] = useState(1)
    const [isSetting, setIsSetting] = useState(true)

    return (
        <Login />


        // <div className={'flex justify-between'}>
        //     <NavBar menu={menu} setMenu={setMenu} setIsSetting={setIsSetting}/>
        //     <div className={'w-2/4 max-h-screen overflow-auto'}>
        //         {(() => {
        //             switch (menu) {
        //                 case 1 :
        //                     return <Automaton />
        //                 case 3:
        //                     return <LineChart />
        //             }
        //         })(menu)}
        //     </div>
        //     {isSetting ? (
        //         <SettingsBar setIsSetting={setIsSetting}/>
        //     ) : <div></div>}
        //
        // </div>

    );
}

export default App;
