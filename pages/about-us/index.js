import Link from "next/link"
import { useState } from "react"


const details = [

    { id: 1, name: 'Yash', role: 'Senior Developer' },

    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },

    { id: 3, name: 'Suresh', role: 'Frontend Developer' }

]

const AboutUs = () => {
    return (
        <div>
            {details.map((person => {
                return <div key={person.id}><Link href={`/about-us/${person.id}`}>{person.name}</Link></div>
            }))}
        </div>
    )
}

export default AboutUs