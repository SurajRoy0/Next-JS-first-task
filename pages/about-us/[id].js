import { useRouter } from "next/router";
import { useEffect, useState } from "react"


const details = [

    { id: 1, name: 'Yash', role: 'Senior Developer' },

    { id: 2, name: 'Vaibhav', role: 'Backend Developer' },

    { id: 3, name: 'Suresh', role: 'Frontend Developer' }

]



const Developer = () => {
    const [developer, setDeveloper] = useState({});
    const { id } = useRouter().query;
    useEffect(() => {
        setDeveloper(details.find(detail => detail.id === +id))
    }, [id])
    console.log(developer)
    return (<>
        {developer ? <div>{developer.name} {developer.role}</div> : <p>Developer doesn't exist.</p>}
    </>
    )
}

export default Developer