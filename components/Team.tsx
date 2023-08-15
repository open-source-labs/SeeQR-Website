import GitHubLogo from "../public/github-mark.png"

const Teams = () => {
  const people = [
    { name: "Eric Lai", github: "https://github.com/paranoidFrappe" },
    { name: "Jamie Zheng", github: "https://github.com/haemie" },
    { name: "Julian Macalalag", github: "https://github.com/juzi3" },
    { name: "Nathan Chong", github: "https://github.com/nathanhchong" },
    { name: "Chase Sizemore", github: "https://github.com/ChaseSizemore" },
    { name: "Junaid Ahmed", github: "https://github.com/junaid-ahmed7" },
    { name: "Anthony Deng", github: "https://github.com/anthonyadeng" },
    { name: "Oscar Romero", github: "https://github.com/creaturenex" },
    { name: "Aya Moosa", github: "https://github.com/Hiya-its-Aya" },
    { name: "Trevor Ferguson", github: "https://github.com/TrevorJFerguson" },
    { name: "Pauline Nguyen", github: "https://github.com/paulinekpn" },
    { name: "Utkarsh Uppal", github: "https://github.com/utyvert" },
    { name: "Fred Jeong", github: "https://github.com/fred-jeong" },
    { name: "Gabriel Kime", github: "https://github.com/wizardbusiness" },
    { name: "Chris Fryer", github: "https://github.com/frynoceros" },
    { name: "Ian Grepo", github: "https://github.com/RadiantGH" },
    { name: "Michelle Chang", github: "https://github.com/mkchang168" },
    { name: "Jake Bradbeer", github: "https://github.com/JBradbeer" },
    { name: "Bryan Santos", github: "https://github.com/santosb93" },
    { name: "William Trey Lewis", github: "https://github.com/treyfrog128" },
    { name: "Brandon Lee", github: "https://github.com/BrandonW-Lee" },
    { name: "Casey Escovedo", github: "https://github.com/caseyescovedo" },
    { name: "Casey Walker", github: "https://github.com/cwalker3011" },
    { name: "Catherine Chiu", github: "https://github.com/catherinechiu" },
    { name: "Chris Akinrinade", github: "https://github.com/chrisakinrinade" },
    { name: "Cindy Chau", github: "https://github.com/cindychau" },
    { name: "Claudio Santos", github: "https://github.com/Claudiohbsantos" },
    { name: "Eric Han", github: "https://github.com/ericJH92" },
    { name: "Faraz Akhtar", github: "https://github.com/faraza22" },
    { name: "Frank Norton", github: "https://github.com/FrankNorton32" },
    { name: "Harrison Nam", github: "https://github.com/harrynam07" },
    { name: "James Kolotouros", github: "https://github.com/dkolotouros" },
    { name: "Jennifer Courtner", github: "https://github.com/jcourtner" },
    { name: "John Wagner", github: "https://github.com/jwagner988" },
    { name: "Justin Dury-Agri", github: "https://github.com/justinD-A" },
    { name: "Justin Hicks", github: "https://github.com/JuiceBawks" },
    { name: "Katie Klochan", github: "https://github.com/kklochan" },
    { name: "May Boonyasurat", github: "https://github.com/mimiwrp" },
    { name: "Mercer Stronck", github: "https://github.com/mercerstronck" },
    { name: "Muhammad Trad", github: "https://github.com/muhammadtrad" },
    { name: "Richard Guo", github: "https://github.com/richardguoo" },
    { name: "Richard Lam", github: "https://github.com/rlam108" },
    { name: "Sam Frakes", github: "https://github.com/frakes413" },
    { name: "Serena Kuo", github: "https://github.com/serenackuo" },
    { name: "Timothy Sin", github: "https://github.com/timothysin" },
    { name: "Vincent Trang", github: "https://github.com/vincentt114" },
  ];

  return (
    <div className="w-3/5">
      <ul className="w-full divide-y divide-black dark:divide-gray-700">
        {people.map((person, index) => (
          <li className="block w-full pb-3 sm:pb-4 py-3" key={index}>
            <div className="flex items-center space-x-4">
              <div className="flex-shrink-0">
                <img
                  className="w-12 rounded-full cursor-pointer"
                  onClick={() => {
                    const win = window.open(person.github, "_blank");
                    if (win) win.focus();
                  }}
                  src={`https://avatars.githubusercontent.com/${person.github.replace(
                    "https://github.com/",
                    ""
                  )}`}
                  alt={person.name}
                />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-black truncate ">
                  {person.name}
                </p>
              </div>
              <img
                src={GitHubLogo.src}
                className="w-10 cursor-pointer"
                alt="github link"
                onClick={() => {
                  const win = window.open(person.github, "_blank");
                  if (win) win.focus();
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
