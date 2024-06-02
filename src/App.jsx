import { Education } from "./components/Education";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Skills } from "./components/Skills";




export default function App() {
    return (
        <div >
            <Home />
            <Services />
            <Skills />
            <Education />
        </div>
    );
}