import { useNavigate, useRouteError } from "react-router-dom";

function Error() {
  const error = useRouteError();
  const navigate = useNavigate();
  return (
    <div className="w-full h-screen bg-[#D3D3D3] flex justify-center items-center">
      <div className="">
        <h1 className="text-4xl text-[#0a192f]">Something went wrong 😓</h1>
        <p className="text-xl text-[#0a192f]">{error.data || error.message}</p>
        <button
          className="border-4 px-3 py-2 border-[#0a192f] hover:bg-[#0a192f] hover:text-white"
          onClick={() => navigate(-1)}
        >
          &larr; Go back! 👋
        </button>
      </div>
    </div>
  );
}

export default Error;
