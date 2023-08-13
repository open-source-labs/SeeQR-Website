import authGif from "../../assets/SeeQRLogin.gif";
import Download from "../Dowload";
import Image from "next/image";

export default function MainHeading() {
  return (
    <div className="mx-5 h-screen border-b-4 mt-20 flex lg:flex-row justify-center items-center lg:items-center">
      <div className="flex flex-col">
      <div className="flex flex-col justify-center items-center lg:items-start">
        <h2 className="pb-5 text-4xl lg:text-5xl">
          <strong>
            Make Database Management{" "}
            <span className="text-5xl block bg-clip-text text-emerald-500">
              Easier
            </span>
          </strong>
        </h2>
        <h4 className="text-1xl lg:text-2xl font-extralight pr-32">
          A user-friendly, entirely open-source platform for SQL database
          administration and query performance testing.
        </h4>
        </div>
        <Download />
      </div>
      <div className="grow max-w-2xl">
        <img
          src={authGif.src}
          className="rounded-xl"
          alt="Authenticating database credentials"
        />
      </div>
    </div>
  );
}
