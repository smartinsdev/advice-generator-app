export const Divider = () => (
  <div className=" mt-4 mb-10 w-auto h-[1px] bg-grayish relative">
    <div className="wrapper-bar">
      {Array(0, 1).map((item) => (
        <div key={item} className="w-2 h-1/2 rounded-md bg-light-cyan"></div>
      ))}
    </div>
  </div>
);
