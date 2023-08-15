import queryGif from "../../assets/Comparing_Queries.gif";

export default function SubHeading2() {
  return (
    <div className="mx-10 mt-20 pb-20 border-b-4 flex flex-col lg:flex-row justify-center items-center lg:items-center">
      <div className="lg:mr-8 max-w-lg">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="pb-5 text-3xl lg:text-4xl text-transparent block bg-clip-text bg-gradient-to-r to-emerald-800 from-emerald-600 text-center lg:text-left">
            <strong>Optimize your queries for the best performance</strong>
          </h2>
          <h4 className="text-1xl lg:text-2xl font-extralight text-center lg:text-left">
            Unearth bottlenecks and fine-tune your queries for efficiency and
            speed. Elevate your database management strategy by making informed
            decisions based on comprehensive insights from real-time performance
            analysis.
          </h4>
        </div>
      </div>
      <div className="grow max-w-2xl">
        <img
          src={queryGif.src}
          alt="Optimizing queries"
          className="max-w-full rounded-xl"
        />
      </div>
    </div>
  );
}
