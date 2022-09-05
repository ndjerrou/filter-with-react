import 'bulma/css/bulma.min.css';
import { useState } from 'react';
import Navbar from './components/Navbar';

function App() {
  const [inputSearch, setInputSearch] = useState('');
  const [teams, setTeams] = useState([
    'Leicester City',
    'Arsenal',
    'Tottenham Hostpur',
  ]);

  const [isSorted, setIsSorted] = useState(false);

  const filteredTeams =
    inputSearch === ''
      ? teams
      : teams.filter((team) => team.includes(inputSearch));

  console.log(teams);

  const handleSortTeams = () => {
    const sortedTeams = isSorted
      ? teams.sort((a, b) => a < b)
      : teams.sort((a, b) => a > b);

    console.log('sorted = ', sortedTeams);
    setTeams(sortedTeams);
    setIsSorted((prevState) => !prevState);
  };

  return (
    <div className='App'>
      <Navbar onSearch={setInputSearch} term={inputSearch} />
      <>
        <table class='table'>
          <thead>
            <tr>
              <th>
                <abbr title='Position'>Pos</abbr>
              </th>
              <th>Team</th>
              <i
                className='fa-solid fa-sort-up'
                style={{ cursor: 'pointer' }}
                onClick={handleSortTeams}
              />
              <th>
                <abbr title='Played'>Pld</abbr>
              </th>
              <th>
                <abbr title='Won'>W</abbr>
              </th>
              <th>
                <abbr title='Drawn'>D</abbr>
              </th>
              <th>
                <abbr title='Lost'>L</abbr>
              </th>
              <th>
                <abbr title='Goals for'>GF</abbr>
              </th>
              <th>
                <abbr title='Goals against'>GA</abbr>
              </th>
              <th>
                <abbr title='Goal difference'>GD</abbr>
              </th>
              <th>
                <abbr title='Points'>Pts</abbr>
              </th>
              <th>Qualification or relegation</th>
            </tr>
          </thead>
          <tfoot>
            <tr>
              <th>
                <abbr title='Position'>Pos</abbr>
              </th>
              <th>Team</th>
              <th>
                <abbr title='Played'>Pld</abbr>
              </th>
              <th>
                <abbr title='Won'>W</abbr>
              </th>
              <th>
                <abbr title='Drawn'>D</abbr>
              </th>
              <th>
                <abbr title='Lost'>L</abbr>
              </th>
              <th>
                <abbr title='Goals for'>GF</abbr>
              </th>
              <th>
                <abbr title='Goals against'>GA</abbr>
              </th>
              <th>
                <abbr title='Goal difference'>GD</abbr>
              </th>
              <th>
                <abbr title='Points'>Pts</abbr>
              </th>
              <th>Qualification or relegation</th>
            </tr>
          </tfoot>
          <tbody>
            {filteredTeams.map((team) => (
              <tr>
                <th>1</th>
                <td>
                  <a
                    href='https://en.wikipedia.org/wiki/Leicester_City_F.C.'
                    title='Leicester City F.C.'
                  >
                    {team}
                  </a>{' '}
                  <strong>(C)</strong>
                </td>
                <td>38</td>
                <td>23</td>
                <td>12</td>
                <td>3</td>
                <td>68</td>
                <td>36</td>
                <td>+32</td>
                <td>81</td>
                <td>
                  Qualification for the{' '}
                  <a
                    href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage'
                    title='2016–17 UEFA Champions League'
                  >
                    Champions League group stage
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </>
    </div>
  );
}

export default App;
