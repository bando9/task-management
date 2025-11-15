import { RiSearch2Line } from "@remixicon/react";

export function SearchForm() {
  return (
    <form
      className="bg-blue-400 flex items-center w-full sm:w-80 py-2 px-3 rounded-2xl gap-2 shadow-sm mb-10"
      method="get"
    >
      <RiSearch2Line className="w-5 h-5" />
      <label className="w-full" htmlFor="q">
        <input
          id="q"
          name="q"
          type="search"
          placeholder="Search task"
          className="w-full bg-transparent placeholder-slate-100 text-slate-100 text-sm focus:outline-none border-none"
        />
      </label>
    </form>
  );
}
