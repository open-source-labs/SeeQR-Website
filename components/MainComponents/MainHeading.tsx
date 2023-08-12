import authGif from "../../assets/SeeQRLogin.gif";

export default function MainHeading() {
  return (
    <div className="flex flex-row justify-center items-center mx-5 h-screen border-b-4">
      <div className="flex flex-row flex-wrap justify-center items-center">
        <div>
          <h2 className="pb-5 text-3xl lg:text-4xl">
            <strong>
              Make database management{" "}
              <span className="text-transparent block bg-clip-text bg-gradient-to-r to-emerald-800 from-emerald-600">
                easier.
              </span>
            </strong>
          </h2>
          <h4 className="text-1xl lg:text-2xl font-extralight pr-32">
            A user-friendly, entirely open-source platform for SQL database
            administration and query performance testing.
          </h4>
        </div>
      </div>
      <div className="grow max-w-2xl">
        <img src={authGif.src} className="rounded-xl" alt="Authenticating database credentials"/>
      </div>
    </div>
  );
}
