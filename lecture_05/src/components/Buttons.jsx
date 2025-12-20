function Buttons() {
    function handleClick1() {
        console.log("hello1");
    }

    function handleClick2(a, b) {
        console.log(a+b, "hello2");
    }
    return(
        <div>
            <button onClick={handleClick1}>click me 1</button>
            <button onClick={() => handleClick2(10, 5)}>click me 2</button>
        </div>
    )
}

export default Buttons