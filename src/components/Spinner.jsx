import { ImSpinner2 } from "react-icons/im";

export default function Spinner({  page = true }) {
  return (
    <div className={`flex justify-center h-[${page ? "100vh" : "100px"}] `}>
      <ImSpinner2
        className={`flex justify-self-center self-center ${page?'h-14 w-14':'h-5 w-5'}
        animate-spin`}
      />
    </div>
  );
}
