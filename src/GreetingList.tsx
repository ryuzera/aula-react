import Greeting from "./Greeting";

export interface User {
    title: string,
    name: string
}

interface GreetingListProps {
    users: User[];
}

export default function GreetingList({users} : GreetingListProps) {
    // Structor

    const greetings = [];

    for (const[index, user] of users.entries()) {
        greetings.push(<Greeting key={index} title={user.title} name={user.name} />)
    }

    return <div>{greetings}</div>

    // Declarative
    // return (
    //     <div>
    //         {users.map((user, index) => (
    //             <Greeting key={index} title={user.title} name={user.name} />
    //         ))}
    //     </div>
    // );
}