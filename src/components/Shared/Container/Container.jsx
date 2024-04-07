const Container = ({ children }) => {
  return (
    <div className="max-w-[1000px] bg-white text-black mx-auto xl:px-28 md:px-10 sm:px-2 px-1">
      {children}
    </div>
  );
};

export default Container;
