import { Code } from "../icons/Icon";

export default function Header() {
    return (
        <div id="logo" className="flex items-center gap-x-2 px-2">
        <img src='https://firebasestorage.googleapis.com/v0/b/dummy-59bd8.firebasestorage.app/o/coder.png?alt=media&token=25975aba-a4b2-4643-95ef-e9b8f50b9ff3' alt="" className="w-8 h-8 md:w-12 md:h-12 rounded-2xl" />
        <h1 className="text-xl md:text-2xl whitespace-nowrap font-bold bg-gradient-to-tr to-indigo-700 tracking-wide">
          Prank Coder
        </h1>
        <Code />
      </div>
    )
};
