import './App.css';
import  { NewExperienceForm } from './Components/NewExperienceForm'
import  { Header } from './Components/Header'
import  { Footer } from './Components/Footer'

function App() {

    return (
        <div className="App">
            <Header/>
            <NewExperienceForm/>
            <Footer/>
        </div>
    );
}

export default App;
