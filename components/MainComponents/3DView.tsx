import ThreeDGif from "../../assets/3dhome.gif";

export default function SubHeading4() {
  return (
    <div className="mx-10 mt-20 pb-20 flex flex-col lg:flex-row justify-center items-center lg:items-center">
      <div className="lg:mr-8 max-w-lg">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="pb-5 text-3xl lg:text-4xl text-transparent block bg-clip-text bg-gradient-to-r to-emerald-800 from-emerald-600 text-center lg:text-left">
            <strong>Dive into our docs for even more possibilities.</strong>
          </h2>
          <h4 className="text-1xl lg:text-2xl font-extralight text-center lg:text-left">
            Theres so much more to unearth in SeeQR, head over to our docs for
            an indepth look at how you can transform the way you interact with
            your databases.
          </h4>
        </div>
      </div>
      <div className="grow max-w-2xl">
        <img
          src={ThreeDGif.src}
          alt="View databases in 3D"
          className="max-w-full rounded-xl"
        />
      </div>
    </div>
  );
}
