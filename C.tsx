const C = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="c" name="choice" /> {item.c}{values.choice==item.ans && item.ans=="c" &&"✔️"}</li>
        </>
    );
}

export default C;