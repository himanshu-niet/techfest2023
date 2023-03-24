
import { HeartIcon } from "@heroicons/react/solid";

export default function Footer() {
  return (
    <footer className="text-center border-t border-slate-200 dark:border-zinc-800 sm:h-15 sm:py-2 py-2 px-5 space-y-2 sm:mb-0 dark:bg-zinc-900 dark:text-zinc-300 fixed bottom-0 w-full bg-white">
      <div className="flex w-fit flex-wrap items-center justify-center gap-1 text-center m-auto">
        <span className="flex w-fit items-center gap-2">
          <span>Built with </span>
          <HeartIcon className="w-6 h-6 text-red-500" />
          <span> by </span>
        </span>
        <a
          href="https://www.linkedin.com/in/himanshu-yadav-263b5817b"
          className="font-bold hover:underline underline-offset-2"
          aria-label="Himanshu on LinkedIn"
        >
          Himanshu
        </a>
       
      </div>
    </footer>
  );
}
