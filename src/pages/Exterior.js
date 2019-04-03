export default function Exterior(){
    return `
            <div id="header">
                <h1>Exterior</h1>
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
                <a href="./">Back</a>
            </div>

            <div id="content">
                <h2>Select parts of the exterior to see how to clean what you select</h2>
            </div>
            
            <div id="Navigation">
                        <img class="extPageImg"
                        src="https://lh3.googleusercontent.com/ZTDEZmLXFjz_cJPjpKvSDfimak7V5G0sbUPHpzBYsIkAXY4RRrDmMGy2_tc9EPVK_biqjCnlddMQVfinDl3PjQ6yz9glS8NYzjhOBVD55_yY1_jQFBiZw0Pzj_lEiV2Mq02OX7Gn9Ni29eFxt3BlDaf_zcbVc2fo9kDRy_MgLEOOFziLTnhbRyuHAjW7driIn6BWQmiiKFs-KA33O-ArfelXW8TVF98DTcZ1fApSolAEpIitDpr_srvYxPMfWKzFrUsRYZ7J9HQzG7vOVlfwuWAtMp8i1WBm3dezTmvlKV0dB9bTAOXKijOqk1dfk85ZhFWdZF_jPtT31pdQ7RDwjuFnHdp9xQxl7Jr9qEiRk7MHYoS1E_aET_IEDxQ8SH67YHJWdgx-BJJr8jxb9xeI3EydCBrInqy4zrje6xk4a51ppBdzROhTeoyAgB2uwPDvEg11rxHqNpvnJnKqEXWpCcBFEOTHWa0zgWNoIwYfysp47sg2XONd3vbnjTJot-auyoX8Jl-haU5mhYKr-jN0t_dTNxRRnMSWCOS471ldg8HCo8bSSEBjFOzDN5faiuaou_9-sbPudh38QA4EecP40wGeSGbF7Ugh1srMtLj8xfmduMoUp2qqf_JwWAiAe2AkZXlhuJfUQZSrk__NURmWrI-aCdSbXJA=w1375-h920-no" usemap="#ext-map">
                        <map name="ext-map">
                            <area target="_self" alt="Window" title="Window" href="#window" coords="611,88,334,259,887,282,989,290,1163,252,1275,206,1280,167,1223,116,1116,91" shape="poly">
                            <area target="" alt="Paint" title="Paint" href="https://www.yourmechanic.com/article/how-to-care-for-the-paint-on-your-car-by-cheryl-knight" coords="320,267,44,383,41,442,13,571,25,725,395,817,658,805,734,771,800,593,853,502,936,473,978,555,983,651,978,681,1252,514,1277,412,1309,347,1330,358,1342,382,1342,332,1336,257,1320,219,1295,199,1281,219,944,337,936,298" shape="poly">
                            <area target="" alt="Wheels" title="Wheels" href="https://dawn-dish.com/en-us/how-to-clean/clean-tire-rims-and-wheels" coords="1273,475,1273,457,1282,443,1299,397,1309,363,1337,379,1352,430,1359,470,1353,506,1343,521,1302,554,1272,568,1224,593,1189,605,1113,663,840,841,757,800,773,698,813,589,871,506,932,485,975,593,965,692,1269,512" shape="poly">
                        </map>  
                </div>

            </div>
            
            
            <div id="footer">
                <div id="paint">
                <h1>Paint</h1>
                <ol>
                    <li>Rinse the body of the car, soap with a wash mit, then rinse</li>
                    <li>When the paint is clean and still while the car is wet, use a clay bar to pick up any abrasive dirt and grime</li>
                    <li>Dry the paint with a chamois so there is no water on the paint</li>
                    <li>If you do not have a buffer tool, apply hand wax to the paint, let dry and then wipe with a microfiber towl</li>
                    <li>If you have a buffer, you want to get a cutting compound and the appropriate buffer pad for the corresponding compound</li>
                    <li>Apply the compound with buffer to all surfaces of paint of the vehicle. Once dry, wipe off with a microfiber towl</li>
                    <li>The final step is to apply a finishing wax by hand, let dry, then wipe with a microfiber towl</li>
                </ol>
            </div>
            
            <div id="window">
                <h1>Windows</h1>
                <ol>
                    <li>If possible do not clean the windows in the sun. Try finding some shade or doing it indoors</li>
                    <li>Find two microfiber towls. One wet towl - One dry towl</li>
                    <li>Find a proper window or glass cleaner. Make sure that if the car has window tint, find a non-ammoniated glass cleaner so the tint is not effected</li>
                    <li>Spray the window down inside and out. Wipe down the window with one towl. That is now your wet towl</li>
                    <li>With the dry towl, Wipe clean all of the streaks until the window is dry</li>
                    <li>Repeat on all of the windows</li>
                </ol>
            </div>
            
            <div id="wheel">
                <h1>Wheels & Tires</h1>
                <ol>
                    <li>Cleaning the Wheels should be one of the first parts of the car you clean</li>
                    <li>Before soaking the wheels, spray the dry wheels with degreaser. Dont be shy with the spray, this is what does most of the dirty work</li>
                    <li>Right after the degreaser is applied, brush in the degreaser to the tire and wheels until both are soapy</li>
                    <li>Spray the wheel and tire down with water</li>
                    <li>Proceed to soap the tire and wheel down with the rest of the car with the regular body soap</li>
                    <li>Rinse them down, then dry them off once the soap is off of the tires and wheel</li>
                    <li>Use a silicon based tire shine to tire only. Wipe off any access tire shine of of the wheel</li>
                </ol>
            </div>

            <div id="lights">
                <h1>Headlight and Taillight Restoration </h1>
                <ol>
                    <li>Wash the lights with soap and water</li>
                    <li>While still wet, use a medium grit headlight sandpaper to cut layers down off of the light until the plastic is blurry</li>
                    <li>Wipe the light down with glass cleaner and then re-scrub the light with a finer grit sandpaper</li>
                    <li>Repeat steps until you reach a comfortable visiblity on the lights</li>
                </ol>
            </div>
            </div>
        `;
}