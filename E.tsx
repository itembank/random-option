const E = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="e" name="choice" /> {item.e}{values.choice==item.ans && item.ans=="e" &&"✔️"}</li>
        </>
    );
}

export default E;