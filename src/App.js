import './App.css';
import  { Header } from './Components/Header'
import  { Footer } from './Components/Footer'
import {ExperienceCatalog} from "./Components/ExperienceCatalog";
import {ExperienceForm} from "./Components/ExperienceForm";
import {About} from "./Components/About";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {Contact} from "./Components/Contact";

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
        return fetch("http://localhost:8080/api/experiences",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }
    const editExperience = (experience) => {
        fetch("http://localhost:8080/api/experiences/edit/{id}",
            {
                method: 'PUT',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }

    return (
        <div className="App">
            <Header/>
            <main>
                <Routes>
                    <Route path="/" element={<ExperienceCatalog experiences={experiences}/>} />} />
                    <Route path="/add" element={<ExperienceForm
                        addExperience={addExperience}/>}
                    />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
