export default function Model(){
    return `
    <div id="Model">
            <form action="GET">
                <label for="year">Year</label>
                <input type="text" name="year">

                <label for="make">Make</label>
                <input type="text" name="make">
                
                <label for="model">Model</label>
                <input type="text" name="model">
                
                <input type="submit" value="Add My Car">
                
            </form>

    </div>
`;
}
