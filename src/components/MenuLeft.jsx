import {useEffect, useState} from "react";
import FetchData from "../api/FetchData";


const MenuLeft = ({menu, setIsSetting}) => {

    let data = []



    const [dataFetch, setDataFetch] = useState(null)
    const [numberData, setNumberData] = useState(0)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        switch (menu) {
            case 1 :
                data = {
                    'name': 'Automates',
                    'search': 'un automate',
                    'activeButton': false,
                    'key': 'automations',
                    'link': 'api/v1/description/automaton',
                    'typeFetch': false,
                }
                break
            case 2 :
                data = {
                    'name': 'Variables',
                    'search': 'une variable',
                    'activeButton': true,
                    'link': 'api/v1/variable',
                    'typeFetch': false,
                }
                break
            case 3 :
                data = {
                    'name': 'Graphiques',
                    'search': 'un graphique',
                    'activeButton': true,
                    'link': 'api/v1/graphic',
                    'typeFetch': true,
                }
                break
            case 4 :
                data = {
                    'name': 'Rapports', 'search': 'un rapport', 'activeButton': true, 'link': 'test', 'typeFetch': false,
                }
                break
        }

        const fetchDataAndUpdateState = async () => {
            setLoading(true)
            const result = await FetchData(data.link);
            await setDataFetch(Object.values(result));
            console.log(dataFetch)
            for (let i = 0; i < result.data.length; i++) {
                console.log(dataFetch.data[i])
            }
            setLoading(false)
        };

        fetchDataAndUpdateState();
    }, [menu]);


    // return loading ? (
    //     // <p>Chargement</p>
    //     console.log('loading')
    // ) : (
    //     console.log('render')
    //     // <p>test</p>
    // )


     // return  (<div
     //        className="h-screen w-52 overflow-y-auto bg-slate-50 py-8 dark:bg-slate-900 sm:w-60"
     //    >
     //
     //        {loading ? (<div className="flex items-start">
     //            <h2
     //                className="inline px-5 text-lg font-medium text-slate-800 dark:text-slate-200"
     //            >
     //                Chargement
     //            </h2>
     //            </div>) : (<>
     //                <div className="flex items-start">
     //                    <h2
     //                        className="inline px-5 text-lg font-medium text-slate-800 dark:text-slate-200"
     //                    >
     //                        {data.name}
     //                    </h2>
     //                    <span className="rounded-full bg-blue-600 px-2 py-1 text-xs text-slate-200">
     //                    {numberData}
     //                  </span>
     //                </div>
     //
     //
     //                <div className="mx-2 mt-4 space-y-4">
     //
     //                    <form>
     //                        <label htmlFor="chat-input" className="sr-only">Rechercher {data.search}</label>
     //                        <div className="relative">
     //                            <input
     //                                id="search-chats"
     //                                type="text"
     //                                className="w-full rounded-lg border border-slate-300 bg-slate-50 p-3 pr-10 text-sm text-slate-800 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
     //                                placeholder={'Rechercher ' + data.search}
     //                                rows="1"
     //                                required
     //                            />
     //                            <button
     //                                type="submit"
     //                                className="absolute bottom-2 right-2.5 rounded-lg p-2 text-sm text-slate-500 hover:text-blue-700 focus:outline-none sm:text-base"
     //                            >
     //                                <svg
     //                                    xmlns="http://www.w3.org/2000/svg"
     //                                    className="h-5 w-5"
     //                                    aria-hidden="true"
     //                                    viewBox="0 0 24 24"
     //                                    strokeWidth="2"
     //                                    stroke="currentColor"
     //                                    fill="none"
     //                                    strokeLinecap="round"
     //                                    strokeLinejoin="round"
     //                                >
     //                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     //                                    <path d="M8 9h8"></path>
     //                                    <path d="M8 13h5"></path>
     //                                    <path
     //                                        d="M11.008 19.195l-3.008 1.805v-3h-2a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5"
     //                                    ></path>
     //                                    <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
     //                                    <path d="M20.2 20.2l1.8 1.8"></path>
     //                                </svg>
     //                            </button>
     //                        </div>
     //                    </form>
     //
     //                    {data.activeButton && (<button
     //                            onClick={() => {
     //                                setIsSetting(true)
     //                            }}
     //                            type="button"
     //                            className="w-full inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-center text-xs font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 sm:text-sm">
     //                            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24"
     //                                 strokeWidth="2"
     //                                 stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
     //                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
     //                                <path d="M10 14l11 -11"></path>
     //                                <path
     //                                    d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
     //                            </svg>
     //                            Créer {data.search}
     //                        </button>)}
     //
     //                    {!data.typeFetch ? (
     //                        dataFetch.data.forEach((item, index) => (
     //                            <button
     //                                key={index}
     //                                className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
     //                            >
     //                                <h1
     //                                    className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
     //                                >
     //                                    {item.name}
     //                                </h1>
     //                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.formula}</p>
     //                                {item.regex.map((regexItem, regexIndex) => (
     //                                    <p key={regexIndex} className="text-xs text-slate-500 dark:text-slate-400">{regexIndex+1} - {regexItem}</p>
     //                                ))}
     //                            </button>
     //                        ))
     //                    ) : (Object.keys(dataFetch.data).forEach((item, index) => (<button
     //                                key={index}
     //                                className="flex w-full flex-col gap-y-2 rounded-lg px-3 py-2 text-left transition-colors duration-200 hover:bg-slate-200 focus:outline-none dark:hover:bg-slate-800"
     //                            >
     //                                <h1
     //                                    className="text-sm font-medium capitalize text-slate-700 dark:text-slate-200"
     //                                >
     //                                    {item}
     //                                </h1>
     //                                <p className="text-xs text-slate-500 dark:text-slate-400">{item.description ? item.description : 'Inconnue'}</p>
     //                            </button>)))
     //
     //                    }
     //                </div>
     //            </>)}
     //    </div>)
}

export default MenuLeft