import styles from './GreetingModule.css'

type GreetingProps = {
    title: string,
    name: string
}

export default function Greeting(props: GreetingProps){
    return <h2 className={styles.greeting}>Hello, {props.title} {props.name}!</h2>
}