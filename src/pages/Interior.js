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
        <img class="intPageImg"
        src="https://s1.cdn.autoevolution.com/images/news/how-to-clean-and-detail-a-car-interior-55549_1.jpg" usemap="#int-map">
        <map name="int-map">
            <area target="" alt="Carpet" title="Carpet" href="" coords="903,1004,1006,998,1057,1007,1150,1000,1217,994,1265,994,1310,981,1342,946,1375,889,1385,844,1307,794,1214,742,1170,697,931,695,968,762,946,851" shape="poly">                    
            <area target="" alt="Carpet" title="Carpet" href="" coords="415,770,406,800,396,847,380,910,376,950,426,990,498,1004,515,1004,469,863,458,819" shape="poly">
            <area target="" alt="Plastic" title="Plastic" href="" coords="1047,206,964,197,920,202,854,177,803,217,429,174,476,254,519,280,546,321,550,344,563,387,592,407,656,413,726,406,759,411,784,444,799,471,829,514,849,561,856,580,863,610,889,647,900,668,1011,682,1116,681,1171,677,1190,715,1237,745,1350,818,1393,795,1487,520,1478,438,1360,329,1277,276" shape="poly">
            <area target="" alt="Window" title="Window" href="" coords="435,7,449,168,848,218,893,179,1269,251,1129,175,856,45" shape="poly">
            <area target="" alt="seat" title="seat" href="" coords="276,23,329,27,368,78,376,192,449,276,495,326,518,412,538,451,695,415,736,439,765,482,777,513,910,790,872,907,837,988,396,1003,282,719,175,533,154,348,148,257,141,101,135,31,136,0" shape="poly">                
        </map>                    
</div>

    </div>
    
    
    <div id="footer">
            <div class="carpet">
            <h1>Carpet and Floor matts</h1>
            <ol>
                <li>First take all of the matts out of the car and set them aside</li>
                <li>Vaccum the carpets of all dirt, rocks, hair, and loose items</li>
                <li>If the hair is not coming up, find a lint roller or a rubber brush so the hair comes out</li>
                <li>Once everything is vaccumed, treat stains with a stain removal spray. Soak the stain, brush until soapy, then wipe and vaccum</li>
                <li>Do these same steps with all of the floor matts. Do not forget the carpet in the trunk</li>
                <li>(optional) Spray the fabric down with a fabric protectant to keep the carpet fresher and cleaner</li>
            </ol>
        </div>

        <div class="seat">
            <h1>Seats</h1>
            <ol>
                <li>Vaccum the carpets of any loose dirt or debris</li>
                <li>Treat stains with a stain removal spray. Soak the stain, brush until soapy, then wipe and vaccum</li>
                <li>If the seats are leather, spray them down with a any kind of cleaning spray, scrub them softy but repeditivly with an abrasive pad like a brillo pad for example</li>
                <li>Wipe down the scrubbed seats, then repeat if neccessary. </li>
                <li>The leather should not be shiney. People usually think that shiney leather is clean, but it is actually the opposite</li>
                <li>Using a leather lotion on seats helps protect the leather seats. The same goes for fabric seats, use fabric protectant to elongate the cleanlyness of the fabric</li>
            </ol>
        </div>

        <div class="dash">
            <h1>Interior Plastics & Dash</h1>
            <ol>
                <li>First vaccum any loose dirt, dust, hair, or debris from all of the platic surfaces</li>
                <li>Use a non-static cleaning spray to heavily mist over all of the plastic and let soak for two minutes</li>
                <li>Using a brillo pad scrub any dirty or shiney spots you see on the plastic</li>
                <li>Re-spray the recently scrubbed plastics before wiping them down with a microfibre towl</li>
                <li>Using an interior shine is a nice touch to the inside of your car. Spray the shine on the plastic evenly. Let it soak into the plastic before wiping it in with a microfibre towl</li>
            </ol>
        </div>

        <div class="window">
                <h1>Windows</h1>
                <ol>
                    <li>If possible do not clean the windows in the sun. Try finding some shade or doing it indoors</li>
                    <li>Find two microfibre towls. One wet towl - One dry towl</li>
                    <li>Find a proper window or glass cleaner. Make sure that if the car has window tint, find a non-ammoniated glass cleaner so the tint is not effected</li>
                    <li>Spray the window down inside and out. Wipe down the window with one towl. That is now your wet towl</li>
                    <li>With the dry towl, Wipe clean all of the streaks until the window is dry</li>
                    <li>Repeat on all of the windows</li>
                </ol>
        </div>
    </div>
    `;
}