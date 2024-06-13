import { IoIosSend } from "react-icons/io";

export default function Comments() {
  return (
    <div className="flex flex-col bg-slate-500 py-4 px-2 justify-center items-center h-screen">
      <div
        className="bg-white px-6 py-8 h-2/4 w-2/4
      "
      >
        <h2 className="text-lg font-serif font-medium border-b text-center">
          Comments
        </h2>
        <div className="h-2/3">Comment</div>
        <div className="relative">
          <input
            type="text"
            name="comment"
            id="comment"
            className="border-2 border-slate-300 rounded-md py-2 px-4 focus:outline-none focus:border-black font-form text-md focus:transition-opacity duration-200 w-11/12"
            placeholder="Add your comment"
          />
          <button className="absolute right-16 top-2 h-5 w-5">
            <IoIosSend className=" h-6 w-6 hover:text-red-400" />
          </button>
        </div>
      </div>
    </div>
  );
}
