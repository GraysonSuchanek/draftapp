const players = [
    ['Jonathon Taylor', 'RB', '', 1],
    ['CMC', 'RB', '', 1],
    ['Derrick Henry', 'RB', '', 1],
    ['Dalvin Cook', 'RB', '', 1],
    ['Austin Ekeler', 'RB', '', 1],
    ['Joe Mixon', 'RB', '', 1],
    ['Nick Chubb', 'RB', '', 2],
    ['Cooper Cupp', 'WR', '', 2],
    ['Najee Harris', 'RB', '', 2],
    ['Justin Jefferson', 'WR', '', 2],
    ['Travis Kelce', 'WR', '', 2],
    ['JaMarr Chase', 'WR', '', 2],
    ['Stefon Diggs', 'WR', '', 3],
    ['DAndre Swift', 'RB', '', 3],
    ['Mark Andrews', 'TE', '', 3],
    ['CeeDee Lamb', 'WR', '', 3],
    ['Aaron Jones', 'RB', '', 3],
    ['Davante Adams', 'WR', '', 3],
    ['Deebo Samuel', 'WR', '', 3],
    ['Saquon Barkley', 'WR', '', 3],
    ['Leonard Fournette', 'RB', '', 3],
    ['Mike Evans', 'WR', '', 3],
    ['lavonte Williams', 'RB', '', 3],
    ['Tyreek Hill', 'RB', '', 4],
    ['Alvin Kamara', 'RB', '', 4],
    ['James Conner', 'RB', '', 4],
    ['Tee Higgins', 'WR', '', 4],
    ['AJ Brown', 'WR', '', 4],
    ['Ezekiel Elliot', 'RB', '', 4],
    ['Kyle Pitts', 'TE', '', 4],
    ['Josh Allen', 'QB', '', 4],
    ['Keenan Allen', 'WR', '', 4],
    ['Michael Pittman Jr', 'WR', '', 4],
    ['Cam Akers', 'RB', '', 4],
    ['David Montgomery', 'RB', '', 4],
    ['DJ Moore', 'WR', '', 4],
    ['Mike Williams', 'WR', '', 4],
    ['Terry McLaurin', 'WR', '', 4],
    ['George Kittle', 'TE', '', 4],
    ['Dionte Johnson', 'WR', '', 5],
    ['Courtland Sutton', 'WR', '', 5],
    ['DK Metcalf', 'WR', '', 5],
    ['Justin Herbert', 'QB', '', 5],
    ['Jaylen Waddle', 'WR', '', 5],
    ['Elliah Mitchell', 'RB', '', 5],
    ['Antonio Gibson', 'RB', '', 5],
    ['Breece Hall', 'RB', '', 5],
    ['Patrick Mahomes', 'QB', '', 5],
    ['Brandin Cooks', 'WR', '', 5],
    ['Josh Jacobs', 'RB', '', 5],
    ['Darren Waller', 'TE', '', 5],
    ['Amari Cooper', 'WR', '', 5],
    ['Lamar Jackson', 'QB', '', 6],
    ['Marquise Brown', 'WR', '', 6],
    ['JK Dobbins', 'RB', '', 5],
    ['Gabriel Davis', 'WR', '', 6],
    ['Travis Etienne Jr', 'RB', '', 6],
    ['Allen Robinson', 'WR', '', 6],
    ['Jerry Jeudy', 'WR', '', 6],
    ['Darnell Mooney', 'WR', '', 6],
    ['AJ Dillon', 'RB', '', 6],
    ['Kyler Murray', 'QB', '', 6],
    ['Damien Harris', 'RB', '', 6],
    ['Elijah Moore', 'WR', '', 6],
    ['Jalen Hurts', 'QB', '', 6]
]

const playerCard = (players) => {
    for (let index = 0; index < players.length; index++) {
        <div className={`card ${players[3]}`}>
            <h1>{players[0]}</h1>
            <p>{players[1]}</p>
            <p>{players[2]}</p>
        </div>
    }
}
/*

DRAFT PICK 5 STRAT

1. RB

2. RB

3. QB / TE (top )

   3-QB

4. WR

5. TE

6.

7.

8.

9.

10.

11.

12.

   3-TE

4. WR

5. QB

6.

7.

8.

9.

10.

11.

12.



*/