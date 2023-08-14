import monitoringImage from "../../assets/resourceUtil.webp";

export default function SubHeading1() {
  return (
    <div className="mx-10 border-b-4 mt-20 flex flex-col lg:flex-row justify-center items-center lg:items-center">
      <div className="lg:mr-8 max-w-lg">
        <div className="flex flex-col justify-center items-center lg:items-start">
          <h2 className="pb-5 text-3xl lg:text-4xl text-transparent block bg-clip-text bg-gradient-to-r to-emerald-800 from-emerald-600 text-center lg:text-left">
            <strong>
              Seamlessly manage your AWS and local deployments together{" "}
            </strong>
          </h2>
          <h4 className="text-1xl lg:text-2xl font-extralight text-center lg:text-left">
            Authenticate your cloud instances using your RDS credentials and
            hostname, and monitor them alongside your local databases with ease.
          </h4>
        </div>
      </div>
      <img
        src={monitoringImage.src}
        alt="Monitoring databases"
        className="max-w-full"
      />
    </div>
  );
}
