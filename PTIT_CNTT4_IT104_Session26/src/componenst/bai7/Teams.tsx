import { Outlet, Link } from 'react-router-dom';

function Teams() {
    return (
        <div>
            <h2>Danh sách các đội</h2>
            <ul>
                <li><Link to="team-a">Team A</Link></li>
                <li><Link to="team-b">Team B</Link></li>
                <li><Link to="team-c">Team C</Link></li>
            </ul>
            <Outlet />
        </div>
    );
}

export default Teams;
