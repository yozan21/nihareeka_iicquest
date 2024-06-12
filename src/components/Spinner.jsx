import { ImSpinner2 } from "react-icons/im";

export default function Spinner({ resol, page = true }) {
  return (
    <div className={`flex justify-center h-[${page ? "100vh" : "100px"}] `}>
      <ImSpinner2
        className={`flex justify-self-center self-center h-${resol.height} w-${resol.width}
        animate-spin`}
      />
    </div>
  );
}
