import { Footer } from "../components/Footer"
import { Navbar } from "../components/Navbar"
import { NewTask } from "../components/NewTask"

export const NewTaskScreen=()=>
{
    return (
        <>
            <>
                <Navbar/>
                <main>
                    <NewTask/>
                </main>
                <Footer/>
            </>
        </>
    )
}