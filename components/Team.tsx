import { useState } from 'react';
const people = [
  { name: 'Eric Lai', github: 'https://github.com/paranoidFrappe' },
  { name: 'Jamie Zheng', github: 'https://github.com/haemie' },
  { name: 'Julian Macalalag', github: 'https://github.com/juzi3' },
  { name: 'Nathan Chong', github: 'https://github.com/nathanhchong' },
  { name: 'Chase Sizemore', github: 'https://github.com/ChaseSizemore' },
  { name: 'Junaid Ahmed', github: 'https://github.com/junaid-ahmed7' },
  { name: 'Anthony Deng', github: 'https://github.com/anthonyadeng' },
  { name: 'Oscar Romero', github: 'https://github.com/creaturenex' },
  { name: 'Aya Moosa', github: 'https://github.com/Hiya-its-Aya' },
  { name: 'Trevor Ferguson', github: 'https://github.com/TrevorJFerguson' },
  { name: 'Pauline Nguyen', github: 'https://github.com/paulinekpn' },
  { name: 'Utkarsh Uppal', github: 'https://github.com/utyvert' },
  { name: 'Fred Jeong', github: 'https://github.com/fred-jeong' },
  { name: 'Gabriel Kime', github: 'https://github.com/wizardbusiness' },
  { name: 'Chris Fryer', github: 'https://github.com/frynoceros' },
  { name: 'Ian Grepo', github: 'https://github.com/RadiantGH' },
  { name: 'Michelle Chang', github: 'https://github.com/mkchang168' },
  { name: 'Jake Bradbeer', github: 'https://github.com/JBradbeer' },
  { name: 'Bryan Santos', github: 'https://github.com/santosb93' },
  { name: 'William Trey Lewis', github: 'https://github.com/treyfrog128' },
  { name: 'Brandon Lee', github: 'https://github.com/BrandonW-Lee' },
  { name: 'Casey Escovedo', github: 'https://github.com/caseyescovedo' },
  { name: 'Casey Walker', github: 'https://github.com/cwalker3011' },
  { name: 'Catherine Chiu', github: 'https://github.com/catherinechiu' },
  { name: 'Chris Akinrinade', github: 'https://github.com/chrisakinrinade' },
  { name: 'Cindy Chau', github: 'https://github.com/cindychau' },
  { name: 'Claudio Santos', github: 'https://github.com/Claudiohbsantos' },
  { name: 'Eric Han', github: 'https://github.com/ericJH92' },
  { name: 'Faraz Akhtar', github: 'https://github.com/faraza22' },
  { name: 'Frank Norton', github: 'https://github.com/FrankNorton32' },
  { name: 'Harrison Nam', github: 'https://github.com/harrynam07' },
  { name: 'James Kolotouros', github: 'https://github.com/dkolotouros' },
  { name: 'Jennifer Courtner', github: 'https://github.com/jcourtner' },
  { name: 'John Wagner', github: 'https://github.com/jwagner988' },
  { name: 'Justin Dury-Agri', github: 'https://github.com/justinD-A' },
  { name: 'Justin Hicks', github: 'https://github.com/JuiceBawks' },
  { name: 'Katie Klochan', github: 'https://github.com/kklochan' },
  { name: 'May Boonyasurat', github: 'https://github.com/mimiwrp' },
  { name: 'Mercer Stronck', github: 'https://github.com/mercerstronck' },
  { name: 'Muhammad Trad', github: 'https://github.com/muhammadtrad' },
  { name: 'Richard Guo', github: 'https://github.com/richardguoo' },
  { name: 'Richard Lam', github: 'https://github.com/rlam108' },
  { name: 'Sam Frakes', github: 'https://github.com/frakes413' },
  { name: 'Serena Kuo', github: 'https://github.com/serenackuo' },
  { name: 'Timothy Sin', github: 'https://github.com/timothysin' },
  { name: 'Vincent Trang', github: 'https://github.com/vincentt114' },
];

// const Teams = () => {
//     const tempName = people[4].name
//     const tempPic = people[4].github
//   return (
//     <div className="grid grid-cols-4 grid-rows-6 gap-10 mb-[10rem]">

//       {people.map((person, index) => (
//         <div className="relative" key={index}>
//                     <div className="bg-white p-4 inline-block cursor-pointer transform transition hover:scale-105 space-y-2 text-center">
//             <img
//                 onClick={() => {
//                     const win = window.open(person.github, '_blank');
//                     if (win) win.focus();
//                 }}
//                 src={`https://avatars.githubusercontent.com/${person.github.replace(
//                     'https://github.com/',
//                     ''
//                 )}`}
//                 alt={person.name}
//                 width={120}
//             />
//             <p className="text-electric">{person.name}</p>
//         </div>
//         </div>
//         ))}
//     </div>
//   );
// };

// export default Teams;

// <div className="bg-white p-4 inline-block cursor-pointer transform transition hover:scale-105 space-y-2 text-center">
// <img
//     onClick={() => {
//         const win = window.open(tempPic, '_blank');
//         if (win) win.focus();
//     }}
//     src={`https://avatars.githubusercontent.com/${tempPic.replace(
//         'https://github.com/',
//         ''
//     )}`}
//     alt={tempName}
//     width={120}
// />
// <p className="text-electric">{tempName}</p>
// </div>

const ITEMS_PER_PAGE = 12;

const Teams = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(people.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;

  const currentPagePeople = people.slice(startIndex, endIndex);

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-4 gap-10 pb-6">
        {currentPagePeople.map((person, index) => (
          <div className="relative" key={index}>
            <div className="bg-white p-3 inline-block cursor-pointer transform transition hover:scale-105 space-y-2 text-center">
              <img
                onClick={() => {
                  const win = window.open(person.github, '_blank');
                  if (win) win.focus();
                }}
                src={`https://avatars.githubusercontent.com/${person.github.replace(
                  'https://github.com/',
                  ''
                )}`}
                alt={person.name}
                width={120}
              />
              <p className="text-marine">{person.name}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination-controls flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
        <button
          disabled={currentPage === 1}
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          className="w-full md:w-auto text-sm md:text-base bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Previous
        </button>
        <span className="text-sm md:text-base">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() =>
            setCurrentPage((prev) => Math.min(totalPages, prev + 1))
          }
          disabled={currentPage === totalPages}
          className="w-full md:w-auto text-sm md:text-base bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-1 md:py-2 px-2 md:px-4 border border-blue-500 hover:border-transparent rounded"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Teams;
