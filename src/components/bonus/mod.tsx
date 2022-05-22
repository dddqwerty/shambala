const Mod = () => {
  return (
    <div className="md:absolute  md:-right-[250px]">
      <div className="relative w-[140vw] md:w-[1000px] md:h-[810px] h-[400px] transform -translate-x-1/2 left-1/2">
        <img
          src="/assets/mod.webp"
          className="absolute z-10 max-w-full h-full md:h-auto left-[50%] transform -translate-x-1/2 md:translate-x-0  bottom-1 md:left-0 md:top-10"
          alt=""
        />
        <img
          src="/assets/modniiariinbuurunhii.webp"
          className="absolute bottom-0 z-0 w-[276.5px] left-[50%] transform -translate-x-1/2 md:translate-x-0 md:w-[592.5px] md:bottom-0 md:left-[21%]"
          alt=""
        />
      </div>
      <div>
        <img src="/assets/ellipse/shardeerhbuurunhii.webp" className="w-[85px] md:hidden absolute bottom-[35%] right-2" alt="" />
        <img src="/assets/ellipse/shardeerhbuurunhii.webp" className="w-[35px] md:hidden absolute bottom-[34%] left-10" alt="" />
        <img src="/assets/ellipse/shardeerhbuurunhii.webp" className="w-[13px] md:hidden absolute bottom-[30%] right-[27%]" alt="" />
      </div>
    </div>
  )
}
export default Mod
