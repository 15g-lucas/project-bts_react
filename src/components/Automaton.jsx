import {useEffect, useState} from "react";
import FetchData from "../api/FetchData";

const Automaton = ({device}) => {
    const [dataFetch, setDataFetch] = useState([])
    const [loading, setLoading] = useState(true)
    const [prevDevice, setPrevDevice] = useState(null);

    useEffect(() => {
        const fetchDataAutomaton = async () => {
            const result = await FetchData('api/v1/description/automaton/'+device);
            setDataFetch(result.data);
            setLoading(false);
        };
        if(device !== prevDevice){
            fetchDataAutomaton();
        }
        setPrevDevice(device)
    }, [device]);


    return loading ? (
            <div>test</div>
        ): (
            <div className={'mt-8 flex flex-wrap justify-between'}>
                {Object.values(dataFetch).map((item, index) => (
                    <div key={index} className={'w-[285px] mb-10'}>
                        <button
                            className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
                        >
                            <h1
                                className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
                            >
                                {item.equipment}
                            </h1>
                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Description : <b>{item.description}</b>
                            </p>
                        </button>
                    </div>
                ))}

            </div>
        )





}

export default Automaton