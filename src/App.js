import './App.css';
import  { Header } from './Components/Header'
import  { Footer } from './Components/Footer'
import {ExperienceCatalog} from "./Components/ExperienceCatalog";
import {ExperienceForm} from "./Components/ExperienceForm";
import {About} from "./Components/About";
import {useEffect, useState, Component} from "react";
import {Route, Routes} from "react-router-dom";

function App() {

    const [experiences, setExperiences] = useState([]);
    const [newExperience, setNewExperience] = useState("");
    const [requiresUpdate, setRequiresUpdate] = useState(true);


    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/experiences")
                .then(r => r.json())
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experience) => {
        fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }

    return (
        <div className="App">
                <Header/>
            <Routes>
                <Route path="/home" element={<ExperienceCatalog ExperienceCatalog={ExperienceCatalog} />} />
                <Route path="/about" element={<About About={About} />} />
            </Routes>

            <main>
                <ExperienceCatalog/>
                <ExperienceForm onSubmit={e => addExperience(e)}/>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
