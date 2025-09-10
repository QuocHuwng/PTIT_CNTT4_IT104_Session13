import { useParams } from 'react-router-dom';

function Team() {
    const { teamId } = useParams();
    return <p>Chi tiết của đội: <strong>{teamId}</strong></p>;
}

export default Team;
