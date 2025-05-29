import './App.css'
import Login from './assets/components/login/Login'
import "@radix-ui/themes/styles.css";
import { Theme } from "@radix-ui/themes";

function App() {

    return (
        <div>
            <Theme>
                <div className='principal'>
                    <Login></Login>
                </div>
            </Theme>
        </div>
    )
}

export default App
