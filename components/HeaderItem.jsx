const HeaderItem = ({ Icon, title }) => {
    return (
        <div>
            <div className="flex flex-col items-center cursor-pointer pt-1 overflow-hidden group w-12 sm:w-fit purple dark:text-white">
                <Icon className="h-8 w-6 group-hover:animate-bounce" />
                <p className="opacity-0 group-hover:opacity-100 tracking-widest">
                    {title}
                </p>
            </div>
        </div>
    );
};

export default HeaderItem;
