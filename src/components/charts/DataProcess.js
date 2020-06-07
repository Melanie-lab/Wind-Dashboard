import arkona from "../../data/forecasts_arkona.json";
import berlin from "../../data/forecasts_berlin.json";
import hhairport from "../../data/forecasts_hamburg-airport.json";
import kielholtenau from "../../data/forecasts_kiel-holtenau.json";
import kielleuchtturm from "../../data/forecasts_kiel_leuchtturm.json";
import sktPeterOrding from "../../data/forecasts_skt_peter-ording.json";
import travemuende from "../../data/forecasts_travemuende.json";
import warnemuende from "../../data/forecasts_warnemuende.json";
import westermarkelsdorf from "../../data/forecasts_westermarkelsdorf.json";

const Data = {
  arkona,
  berlin,
  hhairport,
  kielholtenau,
  kielleuchtturm,
  sktPeterOrding,
  travemuende,
  warnemuende,
  westermarkelsdorf,
};

console.log(Data.arkona[0].ws);

const ws = arkona.map((x) => x.ws);
export const firstdayWS = ws.slice(0, 8);

const dataWS = (location, day) => {
  const array = Data.location.map((x) => x.ws);
  const start = (day - 1) * 8;
  const end = day * 8;
  return array.slice(start, end);
};

export const dataWG = (array, day) => {
  const map = array.map((x) => x.wg);
  const start = (day - 1) * 8;
  const end = day * 8;
  return map.slice(start, end);
};

export default Data;
