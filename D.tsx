const D = ({item,values}:any) => {
    return (
        <>
            <li><input type="radio" value="d" name="choice" /> {item.d}{values.choice==item.ans && item.ans=="d" &&"✔️"}</li>
        </>
    );
}

export default D;