import Team from '../components/Team';

const TeamPage = () => {
  return (
    <div className="my-50">
      {/* <NavBar /> */}
      <div className="flex flex-col justify-center items-center ">
        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
          <span className="text-black">The Team</span>
        </h1>
        <Team />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default TeamPage;
