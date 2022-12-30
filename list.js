const list = document.getElementById('list');
const search = document.getElementById('search');
//const liElements = list.querySelectorAll('li');
//const stringList = Array.from(liElements).map(li => li.textContent);

let productNames = [];
/*function narrowDownList(stringList, characters) {
  const narrowedDownList = [];
  for (const string of stringList) {
    for (let i = 0; i < string.length - characters.length + 1; i++) {
      if (string.substring(i, i + characters.length) === characters) {
        narrowedDownList.push(string);
        break;
      }
    }
  }
  return narrowedDownList;
}

search.addEventListener('input', event => {
  const characters = event.target.value;
  const narrowedDownList = narrowDownList(stringList, characters);

  list.innerHTML = '';  // Clear the existing list
  for (const string of narrowedDownList) {
    const li = document.createElement('li');
    li.textContent = string;
    list.appendChild(li);
  }
});
*/

function makeList(array) { 
    let list = document.getElementById("list");
    for (let i = 0; i < productNames.length; i++) {
     
        let item = document.createElement("li");

        item.addEventListener("click", function() {

            let opened = window.open("");
            opened.document.write(
                "<html><head><title>" + productNames[i] + "</title></head><body> <div style='text-align: center;'><h1>" + products[i].name + "</h1> <img alt='Barcode Generator TEC-IT' src='https://barcode.tec-it.com/barcode.ashx?data=" + products[i].plu + "%0a&code=Code128&translate-esc=on'/></div><div style='padding-top:8px; text-align:center; font-size:15px; font-family: Source Sans Pro, Arial, sans-serif;'></a></div></body></html>"
            ); 
        });
        
        item.innerHTML = productNames[i];
        list.appendChild(item);
    }
}


function addProductNames(products) { 
    for (let i = 0; i < products.length; i++) {
        productNames.push(products[i].name);
        console.log(products[i].name); 
    }
}





 products = [
    { name: [ 'PUMPKIN PORTION SKIN ON [KG]' ],	 plu: [ '632968' ] }, 
    { name: [ 'BROCCOLINI [KG]' ],	 plu: [ '636160' ] }, 
    { name: [ 'ONION SPANISH PEELED [KG]' ],	 plu: [ '636580' ] }, 
    { name: [ 'CORIANDER BUNCH [EA]' ],	 plu: [ '637252' ] }, 
    { name: [ 'SWEET POTATO PEELED [KG]' ],	 plu: [ '638148' ] }, 
    { name: [ 'LETTUCE BABY COS 3.6KG PER CTN [KG]' ],	 plu: [ '638708' ] }, 
    { name: [ 'PINEAPPLE 13.3KG P/CTN [EACH]' ],	 plu: [ '640780' ] }, 
    { name: [ 'WHITLOF [KG]' ],	 plu: [ '644588' ] }, 
    { name: [ 'LETTUCE WILD ROCKET [KG]' ],	 plu: [ '645932' ] }, 
    { name: [ 'GARLIC WHOLE PEELED [KG]' ],	 plu: [ '646044' ] }, 
    { name: [ 'BEAN SPROUTS [KG]' ],	 plu: [ '646856' ] }, 
    { name: [ 'STRAWBERRY PUNNET [EA]' ],	 plu: [ '649600' ] }, 
    { name: [ 'POTATO KIPFLER WASHED [KG]' ],	 plu: [ '649628' ] }, 
    { name: [ 'SHALLOTS BUNCH [EA]' ],	 plu: [ '649712' ] }, 
    { name: [ 'BOK CHOY  [EA]' ],	 plu: [ '652176' ] }, 
    { name: [ 'PAPAYA - GREEN [KG]' ],	 plu: [ '652232' ] }, 
    { name: [ 'MICRO MIXED HERBS PNT [EA]' ],	 plu: [ '654780' ] }, 
    { name: [ 'WATERMELON [KG]' ],	 plu: [ '654892' ] }, 
    { name: [ 'PUMPKIN PEELED PORTIONED [KG]' ],	 plu: [ '655984' ] }, 
    { name: [ 'SNOW PEA TENDRILS/LEAF [KG]' ],	 plu: [ '657776' ] }, 
    { name: [ 'ESCHALLOTS PEELED [KG]' ],	 plu: [ '658028' ] }, 
    { name: [ 'ONION BROWN/RED DICED / SLICED [KG]' ],	 plu: [ '659232' ] }, 
    { name: [ 'CATERING WASTE [KG]' ],	 plu: [ '661248' ] }, 
    { name: [ 'RASPBERRIES PUNNET [EA]' ],	 plu: [ '661976' ] }, 
    { name: [ 'BLUEBERRIES PUNNET [EA]' ],	 plu: [ '662004' ] }, 
    { name: [ 'ONION SPANISH (KG) MM' ],	 plu: [ '666092' ] }, 
    { name: [ 'CAPSICUM GREEN 8KG P/CTN [KG]' ],	 plu: [ '667072' ] }, 
    { name: [ 'KIWI FRUIT [KG]' ],	 plu: [ '667548' ] }, 
    { name: [ 'GRAPES RED [KG]' ],	 plu: [ '668864' ] }, 
    { name: [ 'CELERY BUNCH [EA]' ],	 plu: [ '670628' ] }, 
    { name: [ 'CAULIFLOWER HEAD [EA]' ],	 plu: [ '672364' ] }, 
    { name: [ 'ONION BROWN 20 KG PER BAG [KG]' ],	 plu: [ '672700' ] }, 
    { name: [ 'GINGER FRESH [KG]' ],	 plu: [ '672980' ] }, 
    { name: [ 'TARRAGON BUNCH [EA]' ],	 plu: [ '673008' ] }, 
    { name: [ 'FENNEL [EA]' ],	 plu: [ '673456' ] }, 
    { name: [ 'POMEGRANATE [EA]' ],	 plu: [ '675276' ] }, 
    { name: [ 'SAGE BUNCH [EA]' ],	 plu: [ '678188' ] }, 
    { name: [ 'SWEDES [KG]' ],	 plu: [ '683200' ] }, 
    { name: [ 'PUMPKIN BUTTERNUT/JAP [KG]' ],	 plu: [ '690872' ] }, 
    { name: [ 'CARROT HEIRLOOM/DUTCH [KG]' ],	 plu: [ '691292' ] }, 
    { name: [ 'THAI BASIL [EA]' ],	 plu: [ '691376' ] }, 
    { name: [ 'MIREPOIX VEG MIX CARROTS/ONION/CELERY [KG]' ],	 plu: [ '695156' ] }, 
    { name: [ 'ORANGES 14KG P/CTN [KG]' ],	 plu: [ '696612' ] }, 
    { name: [ 'TOMATO HEIRLOOM  [KG]' ],	 plu: [ '698180' ] }, 
    { name: [ 'DRYSLAW RED/CAB/CAR/PARS [KG]' ],	 plu: [ '728140' ] }, 
    { name: [ 'EDIBLE FLOWER PUNNET [EA]' ],	 plu: [ '728784' ] }, 
    { name: [ 'BEETROOT [KG]' ],	 plu: [ '729064' ] }, 
    { name: [ 'EGGPLANT BABY [KG]' ],	 plu: [ '729092' ] }, 
    { name: [ 'GARLIC BLACK WHOLE [PNT 500G]' ],	 plu: [ '729204' ] }, 
    { name: [ 'BROCCOLI FLORETS 5KG PER BAG [KG]' ],	 plu: [ '729792' ] }, 
    { name: [ 'CARROTS BATONS [KG]' ],	 plu: [ '729904' ] }, 
    { name: [ 'CAULIFLOWER FLORETS 5KG [KG]' ],	 plu: [ '729960' ] }, 
    { name: [ 'MUSHROOM KING BROWN [KG]' ],	 plu: [ '730240' ] }, 
    { name: [ 'MUSHROOM B GRADE 4KG/BX [KG]' ],	 plu: [ '730352' ] }, 
    { name: [ 'POTATO DICED / SLICED [KG]' ],	 plu: [ '731192' ] }, 
    { name: [ 'SWEET POTATO DICED  [KG]' ],	 plu: [ '731220' ] }, 
    { name: [ 'PEACH [KG]' ],	 plu: [ '731332' ] }, 
    { name: [ 'RADISH WATERMELON [BUNCH]' ],	 plu: [ '731416' ] }, 
    { name: [ 'POTATO PEELED [KG]' ],	 plu: [ '731500' ] }, 
    { name: [ 'BUTTERNUT PUMPKIN PEELED PORTIONED [KG]' ],	 plu: [ '731584' ] }, 
    { name: [ 'MUSHROOM PORCINI DRIED 50GM [EA]' ],	 plu: [ '731696' ] }, 
    { name: [ 'RANDOM CHEF PRODUCTS RWC [??]' ],	 plu: [ '731724' ] }, 
    { name: [ 'RAPA/ FIELD MUSTARD [EA]' ],	 plu: [ '731752' ] }, 
    { name: [ 'YUZU FRUIT [KG]' ],	 plu: [ '731808' ] }, 
    { name: [ 'CHILLI JALAPENO GREEN [KG]' ],	 plu: [ '731892' ] }, 
    { name: [ 'RHUBARB BUNCH [EA]' ],	 plu: [ '731920' ] }, 
    { name: [ 'CUMQUATS [KG]' ],	 plu: [ '732228' ] }, 
    { name: [ 'PUMPKIN JAP PLD PORTION [KG]' ],	 plu: [ '733180' ] }, 
    { name: [ 'TRUSS TOMATOES CHERRY [PUNNET]' ],	 plu: [ '733628' ] }, 
    { name: [ 'CHESTNUTS FRESH [KG]' ],	 plu: [ '733768' ] }, 
    { name: [ 'LIME KAFFIR LEAVES [KG]' ],	 plu: [ '733936' ] }, 
    { name: [ 'VEGTABLE ROOT MIX [KG]' ],	 plu: [ '733964' ] }, 
    { name: [ 'BETEL LEAF 500G [EA]' ],	 plu: [ '734300' ] }, 
    { name: [ 'FIGS [EA]' ],	 plu: [ '734580' ] }, 
    { name: [ 'ZUCCHINI FLOWER [PUNNET]' ],	 plu: [ '734944' ] }, 
    { name: [ 'CHERRIES RED [KG]' ],	 plu: [ '735252' ] }, 
    { name: [ 'LETTUCE ASSORTED SUBSTITUTES [KG]' ],	 plu: [ '735476' ] }, 
    { name: [ 'PASSIONFRUIT [KG]' ],	 plu: [ '735588' ] }, 
    { name: [ 'CARROTS UNPEELED [KG]' ],	 plu: [ '735840' ] }, 
    { name: [ 'TARO FRESH [KG]' ],	 plu: [ '735924' ] }, 
    { name: [ 'PINEAPPLE DICED 2-3CM [KG]' ],	 plu: [ '735980' ] }, 
    { name: [ 'ROCKMELON DICED 2-3CM [KG]' ],	 plu: [ '736008' ] }, 
    { name: [ 'VEGETABLE SOUP MIX [KG]' ],	 plu: [ '736036' ] }, 
    { name: [ 'WATERMELON DICED 2CM-3CM [KG]' ],	 plu: [ '736064' ] }, 
    { name: [ 'NECTARINE [KG]' ],	 plu: [ '736232' ] }, 
    { name: [ 'PLUM BLOOD [KG]' ],	 plu: [ '736316' ] }, 
    { name: [ 'APRICOTS [KG]' ],	 plu: [ '736344' ] }, 
    { name: [ 'GRAPEFRUIT [KG]' ],	 plu: [ '736372' ] }, 
    { name: [ 'BROCCOLI WHOLE [KG]' ],	 plu: [ '736456' ] }, 
    { name: [ 'MANDARIN [KG]' ],	 plu: [ '736512' ] }, 
    { name: [ 'DRAGON FRUIT [EA]' ],	 plu: [ '736596' ] }, 
    { name: [ 'MUNG BEANS PUNNET [EA]' ],	 plu: [ '736736' ] }, 
    { name: [ 'FENNEL SHAVED [KG]' ],	 plu: [ '737520' ] }, 
    { name: [ 'OREGANO FRESH BUNCH [EA]' ],	 plu: [ '737548' ] }, 
    { name: [ 'SORREL GREEN BUNCH [EA]' ],	 plu: [ '738192' ] }, 
    { name: [ 'CAPSICUM YELLOW [KG]' ],	 plu: [ '738612' ] }, 
    { name: [ 'GALANGAL FRESH [KG]' ],	 plu: [ '739984' ] }, 
    { name: [ 'TUMERIC ROOTS FRESH [KG]' ],	 plu: [ '740040' ] }, 
    { name: [ 'BANANA LEAF [KG]' ],	 plu: [ '740292' ] }, 
    { name: [ 'CAPSICUM BABY MIXED [PUNNET]' ],	 plu: [ '740320' ] }, 
    { name: [ 'PARSNIP [KG]' ],	 plu: [ '740488' ] }, 
    { name: [ 'KIMCHI [KG]' ],	 plu: [ '741328' ] }, 
    { name: [ 'CABBAGE BLACK TUSCAN BUNCH [EA]' ],	 plu: [ '741524' ] }, 
    { name: [ 'HONEYDEW DICED 2-3CM [KG]' ],	 plu: [ '743316' ] }, 
    { name: [ 'MUSHROOM SHIMEJI KOREAN [PUNNET]' ],	 plu: [ '743344' ] }, 
    { name: [ 'CABBAGE - RED SHREDDED [KG]' ],	 plu: [ '743372' ] }, 
    { name: [ 'GARLIC STEAM / SHOOTS BUNCH [EA]' ],	 plu: [ '743400' ] }, 
    { name: [ 'CHIVES GARLIC BUNCH [EA]' ],	 plu: [ '743428' ] }, 
    { name: [ 'DAIKON RADISH [KG]' ],	 plu: [ '743456' ] }, 
    { name: [ 'MICRO CHERVIL BUNCH [EA]' ],	 plu: [ '743484' ] }, 
    { name: [ 'POTATO DESIREE [KG]' ],	 plu: [ '1591716' ] }, 
    { name: [ 'STIR FRY VEG  [KG]' ],	 plu: [ '743540' ] }, 
    { name: [ 'MUSHROOM KING BROWN BABY BAG 300G [EA]' ],	 plu: [ '744184' ] }, 
    { name: [ 'MANGO YELLOW [KG]' ],	 plu: [ '745472' ] }, 
    { name: [ 'MUSHROOM BUTTON SLICED [KG]' ],	 plu: [ '848288' ] }, 
    { name: [ 'SPANISH/ RED ONIONS UNPEELED [KG]' ],	 plu: [ '848316' ] }, 
    { name: [ 'MUSHROOM TRUMPET (KG) MMC' ],	 plu: [ '1977948' ] }, 
    { name: [ 'SHITAKE MUSHROOM (PNT) MMC' ],	 plu: [ '1978088' ] }, 
    { name: [ 'PEAS SNOW (KG) MMC' ],	 plu: [ '1978732' ] }, 
    { name: [ 'ZUCCHINI FLOWER 2KG TRAY (KG) MMC' ],	 plu: [ '1978760' ] }, 
    { name: [ 'LETTUCE BABY SPINACH (KG) MMC' ],	 plu: [ '1978788' ] }, 
    { name: [ 'LETTUCE SNOW TENDRIL (KG) MMC' ],	 plu: [ '1978816' ] }, 
    { name: [ 'LETTUCE WILD ROCKET (KG) MMC' ],	 plu: [ '1978844' ] }, 
    { name: [ 'BOK CHOY BUNCH 10 (EA)  MMC' ],	 plu: [ '1978872' ] }, 
    { name: [ 'BLUEBERRIES PUNNET (EA) MMC' ],	 plu: [ '1978900' ] }, 
    { name: [ 'LEMON 16KG CTN  (KG) MMC' ],	 plu: [ '1978928' ] }, 
    { name: [ 'RASPBERRIES PUNNET (EA) MMC' ],	 plu: [ '1978956' ] }, 
    { name: [ 'STRAWBERRIES PUNNET (EA) MMC' ],	 plu: [ '1978984' ] }, 
    { name: [ 'HERBS MICRO PUNNET (EA) MMC' ],	 plu: [ '1979012' ] }, 
    { name: [ 'CARROT PEELED (KG) MMC' ],	 plu: [ '1979040' ] }, 
    { name: [ 'BEANS GREEN T&T (KG) MMC' ],	 plu: [ '1979068' ] }, 
    { name: [ 'KALE BUNCH  (EA) MMC' ],	 plu: [ '1979096' ] }, 
    { name: [ 'PUMPKIN PEELED  (KG) MMC' ],	 plu: [ '1979124' ] }, 
    { name: [ 'CALVOLO NERO (KG) MMC' ],	 plu: [ '1979460' ] }, 
    { name: [ 'CABBAGE GREEN (EA) MMC' ],	 plu: [ '1980132' ] }, 
    { name: [ 'AVOCADO 24 PER TRAY (EA) MMC' ],	 plu: [ '1980272' ] }, 
    { name: [ 'BROCCOLINI BABY (KG) MMC' ],	 plu: [ '1980300' ] }, 
    { name: [ 'CARROTS DUTCH (KG) MMC' ],	 plu: [ '1980328' ] }, 
    { name: [ 'CAULIFLOWER (KG) MMC' ],	 plu: [ '1980356' ] }, 
    { name: [ 'CELERY (EA) MMC' ],	 plu: [ '1980384' ] }, 
    { name: [ 'TOMATO CHERRY 4KG TRAY (KG) MMC' ],	 plu: [ '1980412' ] }, 
    { name: [ 'TOMATO ROMA (KG) MMC' ],	 plu: [ '1980440' ] }, 
    { name: [ 'HERB BASIL BUNCH (EA) MMC' ],	 plu: [ '1980468' ] }, 
    { name: [ 'HERB CORIANDER BUNCH (EA) MMC' ],	 plu: [ '1980496' ] }, 
    { name: [ 'PARSLEY BUNCH (EA) MMC' ],	 plu: [ '1980524' ] }, 
    { name: [ 'ONION BROWN 20KG (KG) MMC' ],	 plu: [ '1980552' ] }, 
    { name: [ 'ONION SPANISH (KG) MMC' ],	 plu: [ '1980580' ] }, 
    { name: [ 'CUCUMBER (KG) MMC' ],	 plu: [ '1980748' ] }, 
    { name: [ 'FENNEL (KG) MMC' ],	 plu: [ '1980776' ] }, 
    { name: [ 'LEEK (KG) MMC' ],	 plu: [ '1980804' ] }, 
    { name: [ 'MUSHROOM BUTTON 4KG CTN (KG) MMC' ],	 plu: [ '1980832' ] }, 
    { name: [ 'CARROTS SHREDDED/GRATED (KG) MMC' ],	 plu: [ '1980860' ] }, 
    { name: [ 'GARLIC PEELED (KG) MMC' ],	 plu: [ '1980888' ] }, 
    { name: [ 'SWEET POTATO (KG) MMC' ],	 plu: [ '1980944' ] }, 
    { name: [ 'BRUSSEL SPROUTS (KG) MMC' ],	 plu: [ '1981196' ] }, 
    { name: [ 'LIMES (KG) MMC' ],	 plu: [ '1981392' ] }, 
    { name: [ 'CHILLIES (KG) MMC' ],	 plu: [ '1981420' ] }, 
    { name: [ 'BEETROOT 10KG CTN (KG) MMC' ],	 plu: [ '1981532' ] }, 
    { name: [ 'CORN ON THE COB 30 PER CTN (EA) MMC' ],	 plu: [ '1981560' ] }, 
    { name: [ 'ORANGES (KG) MMC' ],	 plu: [ '1981588' ] }, 
    { name: [ 'CAPSICUM RED (KG) MMC' ],	 plu: [ '1982260' ] }, 
    { name: [ 'LETTUCE ICEBURG (EA) 12 UNITS MMC' ],	 plu: [ '1982288' ] }, 
    { name: [ 'BROCCOLI (KG) MMC' ],	 plu: [ '1982316' ] }, 
    { name: [ 'POTATO PEELED 9KG (KG) MMC' ],	 plu: [ '1982344' ] }, 
    { name: [ 'PARSNIP (KG) MMC' ],	 plu: [ '1983044' ] }, 
    { name: [ 'ASPARAGUS (EA) MMC' ],	 plu: [ '1983716' ] }, 
    { name: [ 'APPLES 12KG (KG) MMC' ],	 plu: [ '1984388' ] }, 
    { name: [ 'TOMATOES CHERRY PNT (EA) MMC' ],	 plu: [ '1984416' ] }, 
    { name: [ 'POTATO KIPFLER 10KG (KG) MMC' ],	 plu: [ '1984444' ] }, 
    { name: [ 'RADISH BUNCH (EA) MMC' ],	 plu: [ '1984472' ] }, 
    { name: [ 'POTATO CHAT (KG) MMC' ],	 plu: [ '1984612' ] }, 
    { name: [ 'HERBS DILL (EA) MMC' ],	 plu: [ '1984808' ] }, 
    { name: [ 'SHALLOTS (EA) MMC' ],	 plu: [ '1985396' ] }, 
    { name: [ 'GRAPEFRUIT (KG) MMC' ],	 plu: [ '1985564' ] }, 
    { name: [ 'ALMOND FLAKES (EA)  MMC' ],	 plu: [ '1985956' ] }, 
    { name: [ 'TOMATOES SALAD (KG) MMC' ],	 plu: [ '1987552' ] }, 
    { name: [ 'HERBS SAGE (EA) MMC' ],	 plu: [ '1987832' ] }, 
    { name: [ 'LETTUCE BABY COS (EA) MMC' ],	 plu: [ '1988056' ] }, 
    { name: [ 'CARROT DUTCH TRIMMED (EA) MMC' ],	 plu: [ '1988196' ] }, 
    { name: [ 'PUMPKIN BUTTERNUT (KG) MMC' ],	 plu: [ '1988588' ] }, 
    { name: [ 'GRAPES (KG) MMC' ],	 plu: [ '1988616' ] }, 
    { name: [ 'MUSHROOM FLAT/FIELD (KG) MMC' ],	 plu: [ '1988840' ] }, 
    { name: [ 'EGGPLANT (KG) MMC' ],	 plu: [ '1988980' ] }, 
    { name: [ 'ZUCCHINI (KG) MMC' ],	 plu: [ '1989008' ] }, 
    { name: [ 'HONEYDEW (KG) MMC' ],	 plu: [ '1989260' ] }, 
    { name: [ 'ROCKMELON (KG) MMC' ],	 plu: [ '1989288' ] }, 
    { name: [ 'WATERMELON (KG) MMC' ],	 plu: [ '1989344' ] }, 
    { name: [ 'KOHLRABI (EA) MMC' ],	 plu: [ '1989372' ] }, 
    { name: [ 'PEARS KG) MMC' ],	 plu: [ '1989428' ] }, 
    { name: [ 'MUSHROOM ENOKI PNT (EA) MMC' ],	 plu: [ '1990492' ] }, 
    { name: [ 'MUSHROOM OYSTER PUN (EA) MMC' ],	 plu: [ '1990520' ] }, 
    { name: [ 'MANGOS (EA) MMC - 14 PER TRAY' ],	 plu: [ '1991360' ] }, 
    { name: [ 'WHOLE BABY BEETROOT (EA) MMC' ],	 plu: [ '1991528' ] }, 
    { name: [ 'POMEGRANATE (EA) MMC' ],	 plu: [ '1992088' ] }, 
    { name: [ 'BEETROOT GOLD BUNCH (KG) MMC' ],	 plu: [ '1992172' ] }, 
    { name: [ 'CHIVES BUNCH (EA) MMC' ],	 plu: [ '2016420' ] }, 
    { name: [ 'PINEAPPLE (KG) MMC' ],	 plu: [ '2016476' ] }, 
    { name: [ 'BANANA (KG) MMC' ],	 plu: [ '2016812' ] }, 
    { name: [ 'POTATO KIPFLER WASHED MMC [KG]' ],	 plu: [ '2017596' ] }, 
    { name: [ 'SPINACH ENGLISH BUNCH (EA) MMC' ],	 plu: [ '2017736' ] }, 
    { name: [ 'PORTABELLO MUSHROOMS (KG) MMC' ],	 plu: [ '2018044' ] }, 
    { name: [ 'MINT (EA) MMC' ],	 plu: [ '2018100' ] }, 
    { name: [ 'BLACKBERRIES PNT (EA) MMC' ],	 plu: [ '2018128' ] }, 
    { name: [ 'PUMPKIN DICED (KG) MMC' ],	 plu: [ '2020956' ] }, 
    { name: [ 'CAULIFLOWER (EA) MMC' ],	 plu: [ '2020984' ] }, 
    { name: [ 'FENNEL (EA) MMC' ],	 plu: [ '2021012' ] }, 
    { name: [ 'EDIBLE FLOWER PUNNET (EA) MMC' ],	 plu: [ '2021040' ] }, 
    { name: [ 'CAPSICUM GREEN (KG) MMC' ],	 plu: [ '2021068' ] }, 
    { name: [ 'CAPSICUM YELLOW (KG) MMC' ],	 plu: [ '2021096' ] }, 
    { name: [ 'BEANS BROAD (KG) MMC' ],	 plu: [ '2021124' ] }, 
    { name: [ 'CABBAGE RED (EA) MMC' ],	 plu: [ '2021712' ] }, 
    { name: [ 'PURPLE POTATO CONGO/BLISS (KG) MMC' ],	 plu: [ '2022300' ] }, 
    { name: [ 'TOMATO HEIRLOOM (KG) MMC' ],	 plu: [ '2022356' ] }, 
    { name: [ 'SHIMEJI MUSHROOM (PNT) MMC' ],	 plu: [ '2022468' ] }, 
    { name: [ 'SWISS MUSHROOM (PNT) MMC' ],	 plu: [ '2022496' ] }, 
    { name: [ 'RHUBARB (EA) MMC' ],	 plu: [ '2023252' ] }, 
    { name: [ 'BLOOD ORANGES (KG) MMC' ],	 plu: [ '2023308' ] }, 
    { name: [ 'LETTUCE MESCULAN (KG) MMC' ],	 plu: [ '2025268' ] }, 
    { name: [ 'HERBS THYME  (EA) MMC' ],	 plu: [ '2025380' ] }, 
    { name: [ 'CELERIAC (KG) MMC' ],	 plu: [ '2025716' ] }, 
    { name: [ 'LETTUCE ASSORTED SHORTAGE (BOX)  MMC' ],	 plu: [ '2026724' ] }, 
    { name: [ 'SWEET POTATO PURPLE (KG) MMC' ],	 plu: [ '2027032' ] }, 
    { name: [ 'PRODUCT' ],	 plu: [ '2028068' ] }, 
    { name: [ 'LETTUCE RADICCHIO (EA) MMC' ],	 plu: [ '2028096' ] }
    ];



addProductNames(products);
makeList(productNames); 
console.log(productNames);

