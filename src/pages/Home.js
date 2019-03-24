export default function Home(){
    return `
    <div id="Header">
        <h1>Demo Detail</h1>
    </div>

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

    
    <div id="Content">
        <h2>Select parts of the exterior to see how to clean what you select</h2>
    </div>

    <div id="Navigation">
        <a href = "pages/Interior.html" target = "_self"> 
            <img class="navImgInt" src = "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/performance/focus-st/2018/features/3-2/18_FRD_FCS_G7652017_ST_CarbonFiber_v1_2160x1080.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt = "Interior"/> 
        </a>

        <a href = "${'/Exterior.js'}" target = "_self"> 
            <img class="navImgExt" src = "https://www.stage3motorsports.com/assets/images/ap-fst-650-2013-2017-focus-st-agency-power-fender-flares03.jpg" alt = "Exterior"/> 
        </a>
    </div>

    <div id="Footer">
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