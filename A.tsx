const A = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="a" name="choice" /> {item.a}{values.choice==item.ans && item.ans=="a" &&"✔️"}</li>
        </>
    );
}

export default A;