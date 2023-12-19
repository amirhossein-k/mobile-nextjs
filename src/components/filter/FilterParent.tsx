const FilterParent = ({title_Filter}: {title_Filter: string}) => {
  return (
    <div className="text-lg font-semibold flex justify-between m-2 my-3 p-2">
      <div className="title group-hover:text-blue-300">{title_Filter}</div>
      <div className="icon text-xl ">
        <i className="bi bi-caret-down group-hover:text-blue-300 hidden group-hover:block group-hover:animate-bounce group-hover:duration-700"></i>
        <i className="bi bi-caret-up group-hover:hidden "></i>
      </div>
    </div>
  );
};

export default FilterParent;
