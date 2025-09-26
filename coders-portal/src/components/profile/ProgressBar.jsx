const ProgressBar = ({ label, percent, color }) => (
    <div className="mb-4 ">
      <span className="block font-medium mb-1">{label}:</span>
      <div className="relative w-full bg-gray-200 rounded-full h-4">
        <div
          className="h-4 rounded-full absolute top-0 left-0 inset-shadow-[1px_1px_5px_rgba(0,0,0,0.65)]
           "
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        />
        <span className="absolute inset-0 flex items-center justify-center text-xs font-semibold text-black">
          {percent}%
        </span>
      </div>
    </div>
  );
  

  export default ProgressBar;
  