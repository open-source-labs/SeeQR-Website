import authGif from "../../assets/SeeQRLogin.gif";
import Download from "../Dowload";

export default function MainHeading() {
  return (
    <div className="mx-10 h-screen mt-20 pb-20 border-b-4 flex flex-col lg:flex-row justify-center items-center lg:items-center">
      <div className="lg:mr-8 max-w-lg">
        <div className="flex flex-col justify-center items-center  pb-10">
          <h2 className="pb-5 text-4xl lg:text-5xl">
            <strong>
              Make Database Management{" "}
              <span className="text-5xl block bg-clip-text text-emerald-500">
                Easier
              </span>
            </strong>
          </h2>
          <h4 className="text-1xl lg:text-2xl font-extralight text-center lg:text-left">
            A user-friendly, entirely open-source platform for SQL database
            administration and query performance testing.
          </h4>
          <Download />
        </div>
      </div>
      <div className="grow max-w-2xl">
        <img
          src={authGif.src}
          alt="Authenticating database credentials"
          className="max-w-full rounded-xl"
        />
      </div>
    </div>
  );
}
