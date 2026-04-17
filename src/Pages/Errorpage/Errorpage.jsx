
const Errorpage = () => {
    return (
        <div className="w-[95%] md:max-w-227.5 mx-auto min-h-screen flex items-center justify-center">
            <div className="text-center space-y-6 bg-gray-100 rounded-2xl py-6 px-2">
                <h1 className="text-7xl md:text-8xl font-bold text-[#244D3F]">
                    404
                </h1>

                <p className="text-xl md:text-2xl font-semibold text-gray-700">
                    Oops! Page not found
                </p>

                <p className="text-gray-500 max-w-md mx-auto">
                    The page you are looking for might have been removed,
                    had its name changed, or is temporarily unavailable.
                </p>

                <a href="/">
                    <button className="mt-4 px-6 py-3 bg-[#244D3F] text-white rounded-lg hover:bg-[#1b3a2f] transition">
                        Go Back Home
                    </button>
                </a>
            </div>
        </div>
    );
};

export default Errorpage;