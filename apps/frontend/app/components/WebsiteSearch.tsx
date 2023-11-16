export const WebsiteSearch = () => {
  return (
    <div className="w-screen h-80 justify-center items-center flex">
      <div className="relative h-10 min-w-[500px]">
        <div>
          <label
            htmlFor="hs-input-with-add-on-url"
            className="block text-sm my-3 text-gray-700 font-medium dark:text-white"
          >
            Enter Website URL
          </label>
          <div className="flex rounded-lg shadow-sm">
            <div className="px-4 inline-flex items-center min-w-fit rounded-s-md border border-e-0 border-gray-200 bg-gray-50 dark:bg-gray-700 dark:border-gray-600">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                http://
              </span>
            </div>
            <input
              type="text"
              name="hs-input-with-add-on-url"
              id="hs-input-with-add-on-url"
              className="py-3 px-4 pe-11 block w-full border-gray-200 shadow-sm rounded-e-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
              placeholder="www.example.com"
            />
            <button
              type="button"
              className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
            >
              <svg
                className="flex-shrink-0 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
