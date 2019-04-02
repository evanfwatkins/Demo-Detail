export default function Exterior(){
    return `
    <div id="header">
        <h1>Interior</h1>
    </div>

    <div id="model">
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
    
    <div id="pageNav">
        <a href="/">Back</a>
    </div>

    <div id="content">
        <h2>Select parts of the interior to see how to clean what you select!</h2>
    </div>
    
    <div id="navigation">
        <img class="intPageImg" src = "https://s1.cdn.autoevolution.com/images/news/how-to-clean-and-detail-a-car-interior-55549_1.jpg" alt = "Interior"/> 
    </div>
    
    
    <div id="footer">
        <h2>Big Stuff Guy</h2>
        <ul>
            <li>Stuff</li>
            <li>More Stuff</li>
        </ul>
        
        <h2>Information About Stuff</h2>
        <ul>
            <h3>I've been detailing cars for about 2 years so I have learned some helpful detailing tips. I want to make this application to help people detail their car without spending too much money at a cleaner. </h3>
            <li><a href="https://github.com/evanfwatkins/Demo-Detail">Git Hub</a></li>
            <li><a href="https://www.linkedin.com/in/evan-watkins-9a244b17a/">LinkedIn</a></li>
            <li><a href="https://www.instagram.com/watkinst_45/">Instagram</a></li>
        </ul>
        
    </div>
    `;
}