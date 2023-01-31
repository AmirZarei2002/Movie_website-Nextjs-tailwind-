const HeaderItem = ({ Icon, title }) => {
    return (
        <div className="">
            <div className="flex flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
                <Icon className="h-8 w-6 group-hover:animate-bounce" />
                <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default HeaderItem;
