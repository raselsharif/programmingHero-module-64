const PageCover = ({ coverBG, coverTitle, coverDesc }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${coverBG})`,
        backgroundColor:
          "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,0.26) 0%, rgba(0,0,0,0.13) 100%)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "700px",
        width: "100%",
      }}
      className="flex justify-center items-center"
    >
      {/* <img src="./menu/banner3.jpg" alt="cover image" /> */}
      <div className="bg-black bg-opacity-50 text-white text-center py-8 px-60 ">
        <h2 className="text-7xl">{coverTitle}</h2>
        <p className="text-2xl mt-4">{coverDesc}</p>
      </div>
    </div>
  );
};

export default PageCover;
