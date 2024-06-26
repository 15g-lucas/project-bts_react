const SettingsBar = ({setIsSetting}) => {
    return (
        <div className="flex flex-row-reverse">
            {/* Sidebar */}
            <aside className="flex">
                <div
                    className="relative h-screen w-60 overflow-y-auto border-l border-slate-300 bg-slate-50 py-8 dark:border-slate-700 dark:bg-slate-900 sm:w-64"
                >
                    <div
                        className="mb-4 flex items-center gap-x-2 px-2 text-slate-800 dark:text-slate-200"
                    >
                        <button onClick={()=>{setIsSetting(false)}} className="inline-flex rounded-lg p-1 hover:bg-slate-700">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                strokeWidth="2"
                                stroke="currentColor"
                                fill="none"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path
                                    d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"
                                ></path>
                                <path d="M9 4v16"></path>
                                <path d="M14 10l2 2l-2 2"></path>
                            </svg>
                            <span  className="sr-only">Close settings sidebar</span>
                        </button>
                        <h2 className="text-lg font-medium">Variable</h2>
                    </div>

                    {/* Select */}
                    <div className="px-2 py-4 text-slate-800 dark:text-slate-200">
                        <label htmlFor="select-mode" className="px-2 text-sm font-medium">Type</label>
                        <select
                            name="select-mode"
                            id="select-mode"
                            className="mt-2 w-full cursor-pointer rounded-lg border-r-4 border-transparent bg-slate-200 py-3 pl-1 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800"
                        >
                            <option value="">Selectionner le type</option>
                            <option value="Complete">Complete</option>
                            <option value="Chat">Chat</option>
                            <option value="Insert">Insert</option>
                            <option value="Edit">Edit</option>
                        </select>
                    </div>
                    {/* Toggle */}
                    <div className="px-2 py-4">
                        <label className="relative flex cursor-pointer items-center">
                            <input type="checkbox" value="" className="peer sr-only"/>
                            <div
                                className="peer h-6 w-11 rounded-full bg-slate-200 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:border after:border-slate-300 after:bg-white after:transition-all after:content-[''] peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-300 dark:border-slate-600 dark:bg-slate-700 dark:peer-focus:ring-blue-800"
                            ></div>
                            <span
                                className="ml-3 text-sm font-medium text-slate-800 dark:text-slate-200"
                            >Toggle</span
                            >
                        </label>
                    </div>
                    {/* More Settings */}
                    <div
                        className="my-4 border-t border-slate-300 px-2 py-4 text-slate-800 dark:border-slate-700 dark:text-slate-200"
                    >
                        <label className="px-2 text-xs uppercase text-slate-500 dark:text-slate-400"
                        >Advanced</label
                        >

                        <label htmlFor="api-key" className="mb-2 mt-4 block px-2 text-sm font-medium"
                        >API Key</label
                        >
                        <input
                            type="password"
                            id="api-key"
                            className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                            placeholder="4sNhFQ******ffyt"
                        />

                        <label htmlFor="base-url" className="mb-2 mt-4 block px-2 text-sm font-medium"
                        >Base URL</label
                        >
                        <input
                            type="url"
                            id="base-url"
                            className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                            placeholder="https://api.openai.com"
                        />

                        <label
                            htmlFor="select-model"
                            className="mb-2 mt-4 block px-2 text-sm font-medium"
                        >Model</label
                        >
                        <select
                            name="select-model"
                            id="select-model"
                            className="block w-full cursor-pointer rounded-lg border-r-4 border-transparent bg-slate-200 py-3 pl-1 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                        >
                            <option value="gpt-3.5-turbo">Type 1</option>
                            <option value="gpt-4">Type 2</option>
                        </select>

                        <label htmlFor="max-tokens" className="mb-2 mt-4 block px-2 text-sm font-medium"
                        >Max tokens</label
                        >
                        <input
                            type="number"
                            id="max-tokens"
                            className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                            placeholder="2048"
                        />

                        <label htmlFor="max-tokens" className="mb-2 mt-4 block px-2 text-sm font-medium"
                        >Temperature</label
                        >
                        <input
                            type="number"
                            id="max-tokens"
                            className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                            placeholder="0.7"
                        />

                        <label htmlFor="top-p" className="mb-2 mt-4 block px-2 text-sm font-medium"
                        >Top P</label
                        >
                        <input
                            type="number"
                            id="top-p"
                            className="block w-full rounded-lg bg-slate-200 p-2.5 text-xs focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:placeholder-slate-400 dark:focus:ring-blue-600"
                            placeholder="1"
                        />

                        <button
                            type="button"
                            className="mt-4 block w-full rounded-lg bg-slate-200 p-2.5 text-xs font-semibold hover:bg-blue-600 hover:text-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:bg-slate-800 dark:hover:bg-blue-600"
                        >
                            Sauvegarder
                        </button>
                    </div>
                </div>
            </aside>
        </div>
    )
}

export default SettingsBar