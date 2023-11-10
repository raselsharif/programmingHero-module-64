const SectionHeader = ({ header, subHeader }) => {
  return (
    <div className="text-center ">
      <p className="text-[#D99904] text-xl">---{subHeader}---</p>
      <h3 className="text-[#151515] text-[40px] py-5 border-b-2 border-t-2 my-5 max-w-max mx-auto px-7">
        {header}
      </h3>
    </div>
  );
};

export default SectionHeader;
