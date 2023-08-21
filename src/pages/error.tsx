import NotFoundImage from '../assets/error404.gif';

const NotFound = () => {
    return (
        <div className="flex items-center justify-center min-h-screen gradient__bg text-white">
            <div className="text-center grid gap-2 select-none">
                <div className="rounded-full overflow-hidden mx-auto my-2 md:w-1/2 w-[80%]">
                    <img
                        src={NotFoundImage}
                        alt="404 Error"
                        className="w-full"
                    />
                </div>
                <p className="text-slate-300 text-xl">Page not found</p>
                <a
                    href="/"
                    className="my-2 w-fit mx-auto ring-1 ring-slate-50/30 rounded-md px-3 py-2 bg-gradient-to-tr from-blue-900/10 to-slate-600/10 hover:bg-gradient-to-bl hover:from-blue-900/20 hover:to-slate-600/20 duration-300"
                >
                    Back to Home
                </a>
            </div>
        </div>
    );
};

export default NotFound;
