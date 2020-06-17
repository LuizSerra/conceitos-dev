import React, { useState } from 'react';

import Header from './components/Header';
import './App.css';
import backGroundImage from './assets/img.jpg';

function App() {
   
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Desenvolvimento Web']);

    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]);
        console.log(projects);
    }

    return (
        <>
            <Header title="Homepage" />
            <img width={200} src={backGroundImage} />
            <ul>
               {projects.map(project => <li key={project}>{project}</li>)}
            </ul>
            <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    );
}

export default App;