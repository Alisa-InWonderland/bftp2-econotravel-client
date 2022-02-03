import './App.css';
import  { NewExperienceForm } from './Components/NewExperienceForm'
import  { Header } from './Components/Header'
import  { Footer } from './Components/Footer'
import {ExperienceCatalog} from "./Components/ExperienceCatalog";

function App() {

    return (
        <div className="App">
            <Header/>
            <ExperienceCatalog/>
            <Footer/>
        </div>
    );
}

export default App;
