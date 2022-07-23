import { categories, skills } from './skills.json';
import MeetingTable from './assets/table.svg';
import { AppRoutes } from './AppRoutes';
import { useEffect, useState } from 'react';
import { Header, Menu, Tags, Skill, Footer } from './Layout';

const filterResults = (skills, filtered) => {
  const filteredSkill = skills.filter(({ header }) => {
    const match = filtered.filter((f) => header.includes(f.name) && f.on);
    return match.length;
  });

  return filteredSkill.length ? filteredSkill : skills;
};

function App() {
  const [list, setList] = useState(skills);
  const [filtered, setFiltered] = useState(categories);

  useEffect(() => {
    setList(filterResults(skills, filtered));
  }, [filtered]);

  return (
    <section className="App">
      <Header />
      <Menu />
      <AppRoutes />
      <img
        data-area="image"
        src={MeetingTable}
        className="image"
        alt="Meeting table"
      />
      <main data-area="skills">
        <h2>Skill Set</h2>
        <Tags setFiltered={setFiltered} />

        {list.map((skill) => (
          <Skill key={skill.header} skill={skill} />
        ))}
      </main>
      <Footer />
    </section>
  );
}

export default App;
