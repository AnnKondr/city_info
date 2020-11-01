import React from 'react';
import { Link } from 'react-router-dom';
import { MythsList } from './MythsList'

export default function Myths() {

    let myths = MythsList.map(myth => {
        return <Link to={`/myths/${myth.id}`} >
            <h2 className=" p-2">
                {myth.name}
            </h2>
        </Link>
    })

    return (
        <div className="card border-0">
            <h1 className="text-center p-4">Легенди Хуста</h1>
            {myths}
        </div>
    );
}

