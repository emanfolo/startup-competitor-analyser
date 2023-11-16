import { CaseStudy } from ".";

export const CaseStudySection = () => {
  return (
    <>
      <div className="flex justify-center items-center">
        <input
          type="text"
          className="py-3 px-4 block min-w-[500px] border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
          placeholder="Explore our case studies"
        />
      </div>

      <div className="flex justify-between items-center w-screen px-52 my-14">
        <CaseStudy />
        <CaseStudy />
        <CaseStudy />
      </div>
    </>
  );
};
