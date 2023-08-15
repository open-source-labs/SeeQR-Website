import ERDModGif from "../../assets/modify_db.gif";

export default function SubHeading3() {
  return (
    <div className="mx-10 border-b-4 mt-20 pb-20 flex flex-col lg:flex-row justify-center items-center lg:items-center">
      <div className="lg:mr-8 max-w-lg">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="pb-5 text-3xl lg:text-4xl text-transparent block bg-clip-text bg-gradient-to-r to-emerald-800 from-emerald-600 text-center lg:text-left">
            <strong>
              Easily visualize and modify with Entity Relationship Diagrams
            </strong>
          </h2>
          <h4 className="text-1xl lg:text-2xl font-extralight text-center lg:text-left">
            View complex foreign relationships with ease, and perform CRUD
            operations with a button click instead of writing out queries.
          </h4>
        </div>
      </div>
      <div className="grow max-w-2xl">
        <img
          src={ERDModGif.src}
          alt="Modifying databases"
          className="max-w-full rounded-xl"
        />
      </div>
    </div>
  );
}
