import './App.css';
import  { Header } from './Components/Header/Header'
import  { Footer } from './Components/Footer/Footer'
import {ExperienceCatalog} from "./Components/ExperienceCatalog/ExperienceCatalog";
import {ExperienceForm} from "./Components/ExperienceForm/ExperienceForm";
import {About} from "./Components/About/About";
import {useEffect, useState} from "react";
import {Route, Routes} from "react-router-dom";
import {ReserveForm} from "./Components/ReserveForm/ReserveForm";
import {Contact} from "./Components/Contact/Contact";
import {getExperiences} from "./services/getExperiences";
import {ReservesList} from "./Components/ReservesList/ReservesList";
import {ExperienceDetails} from "./Components/ExperienceDetails/ExperienceDetails";
import {API_URL} from "./services/settings";

function App() {

    const [experiences, setExperiences] = useState([]);
    const [requiresUpdate, setRequiresUpdate] = useState(true);
    const [reservas, setReservas] = useState([]);
    const [loggedIn, setLoggedIn] = useState(false)


    useEffect(() => {
        if (requiresUpdate) {
            getExperiences()
                .then(setExperiences)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    useEffect(() => {
        if (requiresUpdate) {
            fetch("http://localhost:8080/api/reservas")
                .then(r => r.json())
                .then(setReservas)
                .then(_ => setRequiresUpdate(false));
        }
    }, [requiresUpdate])

    const addExperience = (experience) => {
        return fetch(API_URL,
        {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(experience)
            }
        ).then(_ => setRequiresUpdate(true))

    }

    const deleteExperience = (id) => {
        fetch(`http://localhost:8080/api/experiences/delete/${id}`,
            {
                method: 'DELETE'
            }
        ).then(_ => setRequiresUpdate(true))

    }

    const sendReserve = (reservas) => {
        return fetch("http://localhost:8080/api/reservas",
            {
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(reservas)
            }
        ).then(_ => setRequiresUpdate(true))

    }


    return (
        <div className="App">
            <Header loggedIn={loggedIn} onLoginChange={(value) => setLoggedIn(value)}/>
            <main className="main">
                <Routes>
                    <Route path="/" element={<ExperienceCatalog loggedIn={loggedIn} experiences={experiences} deleteExperience={deleteExperience}/>}/>
                    <Route path="/add" element={<ExperienceForm addExperience={addExperience}/>} />
                    <Route path="/:id" element={<ExperienceDetails/>}/>
                    <Route path="/reserve" element={<ReserveForm sendReserve={sendReserve} />} />
                    <Route path="/about" element={<About/>}/>
                    <Route path="/reservesList" element={<ReservesList reservas={reservas}/>}/>
                    <Route path="/contact" element={<Contact/>} />
                </Routes>
            </main>
            <Footer/>
        </div>
    );
}

export default App;
