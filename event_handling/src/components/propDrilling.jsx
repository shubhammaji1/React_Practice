export const ParentComponent=()=>{
    return(
        <section>
            <h1>Hello, This is Component A</h1>
            <ChildComponent data="React Js"/>
        </section>
    );
};

const ChildComponent=(props)=>{
    return(
        <>
            <h1>Hello , This is component B</h1>
            <GrandChildComponent data={props.data}/>
        </>
    );
}
const GrandChildComponent=(props)=>{
    return(
        <>
            <h1>Hello , This is component C</h1>
            <GrandGrandChildComponent data={props.data}/>
        </>
    );
}
const GrandGrandChildComponent=(props)=>{
    return(
        <>
            <h1>Hello , I love {props.data} </h1>
            
        </>
    );
}