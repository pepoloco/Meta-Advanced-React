function DessertsList(props) {

    const { data } = props;
    const filtered = data.filter((dessert) => (
        dessert.calories < 500
    ));
    const sorted = filtered.sort((a,b)=>(
        a.calories - b.calories
    ))

    return (
        <ul>
            {sorted.map((dessert)=>(
                <li>`${dessert.name} - ${dessert.calories} cal.`</li>
            ))}
        </ul>
    )


}
export default DessertsList
