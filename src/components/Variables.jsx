import {useEffect, useState} from "react";
import FetchData from "../api/FetchData";

const Variables = () => {

    const [search, setSearch] = useState('')
    const [dataSearch, setDataSearch] = useState([])
    const [loading, setLoading] = useState(true)

    async function handleSubmitForm(e){
        e.preventDefault()
        let data = {
            name : document.querySelector('#name').value,
            description : document.querySelector('#description').value,
            formula : document.querySelector('#variable').value
        }
        const result = await FetchData('api/v1/variable','POST', data);
    }
    function selectVariable(event){
        let dataId = event.currentTarget.getAttribute('data-id')
        let newSearch = search.split('|')
        newSearch.splice(newSearch.length-1,1)
        newSearch = newSearch.join('|')+'{'+dataId+'}'
        setSearch(newSearch)
    }

    useEffect(() => {
        const fetchDataAndUpdateState = async () => {
            let resultString = search.split('|')
            if (resultString.length > 1){
                resultString = resultString[resultString.length - 1];
            }

            let data = {
                search: resultString
            }
            const result = await FetchData('api/v1/automaton/search','POST', data);
            setDataSearch(result.data);
            setLoading(false)
        };
        if(search.includes('|')){
            fetchDataAndUpdateState();
        }
        else{
            setDataSearch([]);
        }
    }, [search]);


    return (
        <>
            <form onSubmit={handleSubmitForm}>

                <label htmlFor="name" className="mb-2 mt-4 block px-2 text-sm font-medium"
                >Nom</label
                >
                <input
                    type="text"
                    id="name"
                    className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                    placeholder=""
                    required
                />

                <label htmlFor="description" className="mb-2 mt-4 block px-2 text-sm font-medium"
                >Description</label
                >
                <input
                    type="text"
                    id="description"
                    className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                    placeholder=""
                    required
                />

                <div
                    className="mt-6 flex items-center p-4 mb-4 text-sm text-blue-800 border border-blue-300 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400 dark:border-blue-800"
                    role="alert">
                    <svg className="flex-shrink-0 inline w-4 h-4 me-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                         fill="currentColor" viewBox="0 0 20 20">
                        <path
                            d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                    </svg>
                    <span className="sr-only">Info</span>
                    <div>
                        <span className="font-medium">Info - </span> Pour commencer la saisie d'une variable, saisir : "|".
                    </div>
                </div>
                <label htmlFor="variable" className="mb-2 mt-4 block px-2 text-sm font-medium"
                >Variable</label
                >
                <input
                    type="text"
                    id="variable"
                    className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                    placeholder=""
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    required
                />
                {loading ? (
                    <div>Chargement</div>
                ) : (
                    <div className={'bg-blue-200wd'}>
                        {dataSearch.map((item, index) => (
                            <p key={index} onClick={selectVariable} className={'bg-blue-100 h-[50px]'}
                               data-id={item.idEquipment}>{item.description}</p>
                        ))}
                    </div>
                )
                }
                <button
                        className="mt-8 w-full inline-flex items-center gap-x-2 rounded-lg bg-blue-600 px-3.5 py-2.5 text-center text-xs font-medium text-slate-50 hover:bg-blue-800 focus:outline-none focus:ring focus:ring-blue-300 sm:text-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 24 24" stroke-width="2"
                         stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                        <path d="M10 14l11 -11"></path>
                        <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                    </svg>
                    Créer la variable
                </button>
            </form>
        </>
    )
}

export default Variables