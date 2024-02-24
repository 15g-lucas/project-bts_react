import './App.css';
import { useState } from "react";
import Login from "./components/Login";
import NavBar from "./components/NavBar";
import SettingsBar from "./components/SettingsBar";
import LineChart from "./components/LineChart";
import Automaton from "./components/Automaton";
import Variables from "./components/Variables";

function App() {
    const [menu, setMenu] = useState(1)
    const [device, setDevice] = useState('Dev18')

    return (
        <div className={'flex justify-between'}>
            <NavBar menu={menu} setMenu={setMenu} setDevice={setDevice}/>
            <div className={'w-2/4 max-h-screen overflow-auto mr-60'}>
                {(() => {
                    switch (menu) {
                        case 1 :
                            // return <Automaton device={device}/>
                        case 2 :
                            return <Variables />
                        case 3:
                            return <LineChart device={device}/>
                    }
                })()}
            </div>
        </div>
    );
}

export default App;
