import { lowerCase } from 'lodash';
function linksBuilder(linksArr){
    var linkHTML = linksArr.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        return `<li>
            <a data-navigo href="./${destination}">
                ${link}
            </a>
        </li>
        `;
    }).join(' ');


    return linkHTML;
}



export default function Navigation(){
    return ` 
        <div id="Navigation">
                <img class="navImgInt" src = "https://www.ford.com/cmslibs/content/dam/brand_ford/en_us/brand/performance/focus-st/2018/features/3-2/18_FRD_FCS_G7652017_ST_CarbonFiber_v1_2160x1080.jpg/_jcr_content/renditions/cq5dam.web.1280.1280.jpeg" alt = "Interior"/> 
                <img class="navImgExt" src = "https://www.stage3motorsports.com/assets/images/ap-fst-650-2013-2017-focus-st-agency-power-fender-flares03.jpg" alt = "Exterior"/> 
            </a>
        </div>
    `;
}