export default function Home(){
    return `
    <div id="header">
        <h1>Demo Detail</h1>
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

    
    <div id="content">
        <h2>Select the interior or exterior of the car to see how to clean what you select</h2>
    </div>

    <div id="navigation">
        <a href = "/Interior.html"> 
            <img class="navImgInt" src = "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/performance/focus-st/2018/features/3-2/18_FRD_FCS_G7652017_ST_CarbonFiber_v1_2160x1080.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt = "Interior"/> 
        </a>

        <a href = "/Exterior.html"> 
            <img class="navImgExt" src = "https://www.stage3motorsports.com/assets/images/ap-fst-650-2013-2017-focus-st-agency-power-fender-flares03.jpg" alt = "Exterior"/> 
        </a>
    </div>

    <div id="footer">
        <hr>
        <h3>Links About Me</h3>


        <ul class="linq">
            <li>
                <i class="fab fa-github"></i><a href="https://github.com/evanfwatkins">Git Hub</a>
            </li>
            
            <li>
                    <i class="fab fa-twitter-square"></i><a href="https://twitter.com/Evanwatkins5"> Twitter</a>
            </li>

            <li>
                    <i class="fab fa-instagram"></i><a href="https://www.linkedin.com/in/evan-watkins-9a244b17a/">Linked In</a>
            </li>
        </ul>   
    </div>
    `;
}