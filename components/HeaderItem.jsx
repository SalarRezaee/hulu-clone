const HeaderItem = ({ Icon, title }) => {
  return (
    <div className="flex mt-2 flex-col items-center cursor-pointer group w-12 sm:w-20 hover:text-white">
      <Icon className="h-6 mb-1 group-hover:animate-bounce" />
      <p className="opacity-0 group-hover:opacity-100 tracking-widest">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
