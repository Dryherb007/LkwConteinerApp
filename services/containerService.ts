
import { Alert } from 'react-native';

export interface Container {
  ContainerID: string;
  Location: string;
  Position: string;
}

// Real container data
const initialContainers: Container[] = [
  // Autobahn - Unten
  { ContainerID: "752148", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "752167", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "702914", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "383089", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "343465", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "338001", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "349114", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "349238", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "370788", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "702806", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "358838", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "356330", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "157422", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "238503", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "237535", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "238562", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "771635", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "235334", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "237594", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "369502", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "303047", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "656372", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "349248", Location: "Autobahn", Position: "Unten" },
  { ContainerID: "333203", Location: "Autobahn", Position: "Unten" },
  
  // Autobahn - Oben
  { ContainerID: "752119", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "752118", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "706724", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "706674", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349179", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349151", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "341286", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349154", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349205", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "347175", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349166", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "706749", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "203426", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "706656", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "409617", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349263", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349101", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349109", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "349110", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "406689", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "706542", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "706670", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "291518", Location: "Autobahn", Position: "Oben" },
  { ContainerID: "706537", Location: "Autobahn", Position: "Oben" },
  
  // N1 - Unten
  { ContainerID: "550275", Location: "N1", Position: "Unten" },
  { ContainerID: "713521", Location: "N1", Position: "Unten" },
  { ContainerID: "966239", Location: "N1", Position: "Unten" },
  { ContainerID: "736209", Location: "N1", Position: "Unten" },
  { ContainerID: "551427", Location: "N1", Position: "Unten" },
  { ContainerID: "491911", Location: "N1", Position: "Unten" },
  
  // N1 - Oben
  { ContainerID: "669061", Location: "N1", Position: "Oben" },
  { ContainerID: "600136", Location: "N1", Position: "Oben" },
  { ContainerID: "167775", Location: "N1", Position: "Oben" },
  { ContainerID: "130508", Location: "N1", Position: "Oben" },
  { ContainerID: "603891", Location: "N1", Position: "Oben" },
  { ContainerID: "078986", Location: "N1", Position: "Oben" },
  
  // N2-N3 - Unten
  { ContainerID: "106726", Location: "N2-N3", Position: "Unten" },
  { ContainerID: "430915", Location: "N2-N3", Position: "Unten" },
  { ContainerID: "981320", Location: "N2-N3", Position: "Unten" },
  
  // N2-N3 - Oben
  { ContainerID: "805579", Location: "N2-N3", Position: "Oben" },
  { ContainerID: "536717", Location: "N2-N3", Position: "Oben" },
  { ContainerID: "128280", Location: "N2-N3", Position: "Oben" },
  
  // N5-N6 - Unten
  { ContainerID: "907089", Location: "N5-N6", Position: "Unten" },
  { ContainerID: "901216", Location: "N5-N6", Position: "Unten" },
  
  // N5-N6 - Oben
  { ContainerID: "902247", Location: "N5-N6", Position: "Oben" },
  { ContainerID: "175721", Location: "N5-N6", Position: "Oben" },
  
  // N6-N7 - Unten
  { ContainerID: "143906", Location: "N6-N7", Position: "Unten" },
  { ContainerID: "461534", Location: "N6-N7", Position: "Unten" },
  
  // N6-N7 - Oben
  { ContainerID: "142285", Location: "N6-N7", Position: "Oben" },
  { ContainerID: "501113", Location: "N6-N7", Position: "Oben" },
  
  // N7 - Unten
  { ContainerID: "903880", Location: "N7", Position: "Unten" },
  { ContainerID: "993708", Location: "N7", Position: "Unten" },
  { ContainerID: "936615", Location: "N7", Position: "Unten" },
  
  // N7 - Oben
  { ContainerID: "421007", Location: "N7", Position: "Oben" },
  { ContainerID: "158074", Location: "N7", Position: "Oben" },
  { ContainerID: "205264", Location: "N7", Position: "Oben" },
  
  // N7 10" - Unten
  { ContainerID: "135164", Location: "N7 10\"", Position: "Unten" },
  { ContainerID: "135165", Location: "N7 10\"", Position: "Unten" },
  
  // N7 10" - Oben
  { ContainerID: "135162", Location: "N7 10\"", Position: "Oben" },
  { ContainerID: "135163", Location: "N7 10\"", Position: "Oben" },
  
  // N7 Autobahn site - Unten
  { ContainerID: "937560", Location: "N7 Autobahn site", Position: "Unten" },
  { ContainerID: "415107", Location: "N7 Autobahn site", Position: "Unten" },
  { ContainerID: "437705", Location: "N7 Autobahn site", Position: "Unten" },
  { ContainerID: "619511", Location: "N7 Autobahn site", Position: "Unten" },
  
  // N7 Autobahn site - Oben
  { ContainerID: "903901", Location: "N7 Autobahn site", Position: "Oben" },
  { ContainerID: "903910", Location: "N7 Autobahn site", Position: "Oben" },
  { ContainerID: "903893", Location: "N7 Autobahn site", Position: "Oben" },
  
  // N8 - Unten
  { ContainerID: "202147", Location: "N8", Position: "Unten" },
  { ContainerID: "706612", Location: "N8", Position: "Unten" },
  
  // N8 - Oben
  { ContainerID: "706657", Location: "N8", Position: "Oben" },
  
  // N11 - Unten
  { ContainerID: "102999", Location: "N11", Position: "Unten" },
  { ContainerID: "704475", Location: "N11", Position: "Unten" },
  { ContainerID: "465444", Location: "N11", Position: "Unten" },
  
  // N11 - Oben
  { ContainerID: "903675", Location: "N11", Position: "Oben" },
  { ContainerID: "492113", Location: "N11", Position: "Oben" },
  { ContainerID: "505888", Location: "N11", Position: "Oben" },
  
  // N10 - Unten
  { ContainerID: "445517", Location: "N10", Position: "Unten" },
  { ContainerID: "153612", Location: "N10", Position: "Unten" },
  { ContainerID: "497578", Location: "N10", Position: "Unten" },
  { ContainerID: "706560", Location: "N10", Position: "Unten" },
  { ContainerID: "201723", Location: "N10", Position: "Unten" },
  { ContainerID: "969419", Location: "N10", Position: "Unten" },
  { ContainerID: "817294", Location: "N10", Position: "Unten" },
  { ContainerID: "400721", Location: "N10", Position: "Unten" },
  
  // N10 - Oben
  { ContainerID: "491926", Location: "N10", Position: "Oben" },
  { ContainerID: "139453", Location: "N10", Position: "Oben" },
  { ContainerID: "494447", Location: "N10", Position: "Oben" },
  { ContainerID: "344158", Location: "N10", Position: "Oben" },
  { ContainerID: "255069", Location: "N10", Position: "Oben" },
  { ContainerID: "963010", Location: "N10", Position: "Oben" },
  { ContainerID: "797694", Location: "N10", Position: "Oben" },
  { ContainerID: "156781", Location: "N10", Position: "Oben" },
  
  // N9 - Unten
  { ContainerID: "443940", Location: "N9", Position: "Unten" },
  { ContainerID: "446824", Location: "N9", Position: "Unten" },
  { ContainerID: "901212", Location: "N9", Position: "Unten" },
  
  // N9 - Oben
  { ContainerID: "492121", Location: "N9", Position: "Oben" },
  { ContainerID: "149424", Location: "N9", Position: "Oben" },
  
  // N22-N23 - Unten
  { ContainerID: "902260", Location: "N22-N23", Position: "Unten" },
  { ContainerID: "903126", Location: "N22-N23", Position: "Unten" },
  { ContainerID: "901224", Location: "N22-N23", Position: "Unten" },
  { ContainerID: "401181", Location: "N22-N23", Position: "Unten" },
  
  // N22-N23 - Oben
  { ContainerID: "901248", Location: "N22-N23", Position: "Oben" },
  { ContainerID: "901839", Location: "N22-N23", Position: "Oben" },
  { ContainerID: "902246", Location: "N22-N23", Position: "Oben" },
  { ContainerID: "901228", Location: "N22-N23", Position: "Oben" },
  
  // N23-N24 - Unten
  { ContainerID: "901214", Location: "N23-N24", Position: "Unten" },
  { ContainerID: "901231", Location: "N23-N24", Position: "Unten" },
  { ContainerID: "401323", Location: "N23-N24", Position: "Unten" },
  { ContainerID: "411934", Location: "N23-N24", Position: "Unten" },
  
  // N23-N24 - Oben
  { ContainerID: "901234", Location: "N23-N24", Position: "Oben" },
  { ContainerID: "901220", Location: "N23-N24", Position: "Oben" },
  { ContainerID: "400307", Location: "N23-N24", Position: "Oben" },
  { ContainerID: "907706", Location: "N23-N24", Position: "Oben" },
  
  // N24 - Unten
  { ContainerID: "577363", Location: "N24", Position: "Unten" },
  { ContainerID: "817630", Location: "N24", Position: "Unten" },
  
  // N24 - Oben
  { ContainerID: "492118", Location: "N24", Position: "Oben" },
  { ContainerID: "565424", Location: "N24", Position: "Oben" },
  
  // N25 - Unten
  { ContainerID: "547136", Location: "N25", Position: "Unten" },
  { ContainerID: "610384", Location: "N25", Position: "Unten" },
  
  // N25 - Oben
  { ContainerID: "410115", Location: "N25", Position: "Oben" },
  { ContainerID: "428201", Location: "N25", Position: "Oben" },
  
  // N26 - Unten
  { ContainerID: "994614", Location: "N26", Position: "Unten" },
  { ContainerID: "607742", Location: "N26", Position: "Unten" },
  
  // N26 - Oben
  { ContainerID: "526536", Location: "N26", Position: "Oben" },
  
  // NEW CONTAINERS ADDED BELOW
  
  // N26 - Oben (additional)
  { ContainerID: "940968", Location: "N26", Position: "Oben" },
  
  // N27 - Unten
  { ContainerID: "901371", Location: "N27", Position: "Unten" },
  { ContainerID: "524842", Location: "N27", Position: "Unten" },
  
  // N27 - Oben
  { ContainerID: "803238", Location: "N27", Position: "Oben" },
  { ContainerID: "869063", Location: "N27", Position: "Oben" },
  
  // N29 - Unten
  { ContainerID: "501214", Location: "N29", Position: "Unten" },
  { ContainerID: "491807", Location: "N29", Position: "Unten" },
  { ContainerID: "971565", Location: "N29", Position: "Unten" },
  { ContainerID: "482564", Location: "N29", Position: "Unten" },
  { ContainerID: "401337", Location: "N29", Position: "Unten" },
  { ContainerID: "495907", Location: "N29", Position: "Unten" },
  
  // N29 - Oben
  { ContainerID: "400291", Location: "N29", Position: "Oben" },
  { ContainerID: "902284", Location: "N29", Position: "Oben" },
  
  // N20 - Unten
  { ContainerID: "202117", Location: "N20", Position: "Unten" },
  { ContainerID: "200102", Location: "N20", Position: "Unten" },
  { ContainerID: "347728", Location: "N20", Position: "Unten" },
  { ContainerID: "706598", Location: "N20", Position: "Unten" },
  
  // N20 - Oben
  { ContainerID: "200008", Location: "N20", Position: "Oben" },
  { ContainerID: "254081", Location: "N20", Position: "Oben" },
  { ContainerID: "349105", Location: "N20", Position: "Oben" },
  { ContainerID: "706635", Location: "N20", Position: "Oben" },
  
  // N25 Krazi - Unten
  { ContainerID: "211193", Location: "N25 Krazi", Position: "Unten" },
  { ContainerID: "706717", Location: "N25 Krazi", Position: "Unten" },
  { ContainerID: "211310", Location: "N25 Krazi", Position: "Unten" },
  { ContainerID: "706671", Location: "N25 Krazi", Position: "Unten" },
  { ContainerID: "254793", Location: "N25 Krazi", Position: "Unten" },
  
  // N25 Krazi - Oben
  { ContainerID: "706563", Location: "N25 Krazi", Position: "Oben" },
  { ContainerID: "247827", Location: "N25 Krazi", Position: "Oben" },
  { ContainerID: "352169", Location: "N25 Krazi", Position: "Oben" },
  { ContainerID: "706709", Location: "N25 Krazi", Position: "Oben" },
  { ContainerID: "702835", Location: "N25 Krazi", Position: "Oben" },
  
  // N11 - Unten (additional)
  { ContainerID: "512647", Location: "N11", Position: "Unten" },
  { ContainerID: "114047", Location: "N11", Position: "Unten" },
  { ContainerID: "317679", Location: "N11", Position: "Unten" },
  { ContainerID: "373393", Location: "N11", Position: "Unten" },
  { ContainerID: "706658", Location: "N11", Position: "Unten" },
  
  // N11 - Oben (additional)
  { ContainerID: "706679", Location: "N11", Position: "Oben" },
  { ContainerID: "200787", Location: "N11", Position: "Oben" },
  { ContainerID: "201742", Location: "N11", Position: "Oben" },
  { ContainerID: "681473", Location: "N11", Position: "Oben" },
  { ContainerID: "200069", Location: "N11", Position: "Oben" },
  
  // N12 - Unten
  { ContainerID: "706700", Location: "N12", Position: "Unten" },
  { ContainerID: "241075", Location: "N12", Position: "Unten" },
  { ContainerID: "344008", Location: "N12", Position: "Unten" },
  { ContainerID: "392483", Location: "N12", Position: "Unten" },
  { ContainerID: "122264", Location: "N12", Position: "Unten" },
  { ContainerID: "122265", Location: "N12", Position: "Unten" },
  { ContainerID: "509513", Location: "N12", Position: "Unten" },
  { ContainerID: "204180", Location: "N12", Position: "Unten" },
  { ContainerID: "706624", Location: "N12", Position: "Unten" },
  { ContainerID: "706710", Location: "N12", Position: "Unten" },
  
  // N12 - Oben
  { ContainerID: "385920", Location: "N12", Position: "Oben" },
  { ContainerID: "706631", Location: "N12", Position: "Oben" },
  { ContainerID: "373419", Location: "N12", Position: "Oben" },
  { ContainerID: "706771", Location: "N12", Position: "Oben" },
  { ContainerID: "122263", Location: "N12", Position: "Oben" },
  { ContainerID: "103122", Location: "N12", Position: "Oben" },
  { ContainerID: "349204", Location: "N12", Position: "Oben" },
  { ContainerID: "705329", Location: "N12", Position: "Oben" },
  
  // Parkhaus - Unten
  { ContainerID: "493181", Location: "Parkhaus", Position: "Unten" },
  { ContainerID: "940678", Location: "Parkhaus", Position: "Unten" },
  { ContainerID: "432979", Location: "Parkhaus", Position: "Unten" },
  
  // Parkhaus - Oben
  { ContainerID: "495560", Location: "Parkhaus", Position: "Oben" },
  { ContainerID: "433490", Location: "Parkhaus", Position: "Oben" },
  { ContainerID: "433910", Location: "Parkhaus", Position: "Oben" },
  
  // R-halle Süd site - Unten
  { ContainerID: "941489", Location: "R-halle Süd site", Position: "Unten" },
  { ContainerID: "447562", Location: "R-halle Süd site", Position: "Unten" },
  { ContainerID: "901255", Location: "R-halle Süd site", Position: "Unten" },
  { ContainerID: "625658", Location: "R-halle Süd site", Position: "Unten" },
  
  // R-halle Süd site - Oben
  { ContainerID: "901236", Location: "R-halle Süd site", Position: "Oben" },
  { ContainerID: "411927", Location: "R-halle Süd site", Position: "Oben" },
  { ContainerID: "477559", Location: "R-halle Süd site", Position: "Oben" },
  { ContainerID: "494165", Location: "R-halle Süd site", Position: "Oben" },
  
  // R-halle - Unten
  { ContainerID: "117356", Location: "R-halle", Position: "Unten" },
  { ContainerID: "611124", Location: "R-halle", Position: "Unten" },
  { ContainerID: "439115", Location: "R-halle", Position: "Unten" },
  { ContainerID: "161096", Location: "R-halle", Position: "Unten" },
  { ContainerID: "641171", Location: "R-halle", Position: "Unten" },
  { ContainerID: "949831", Location: "R-halle", Position: "Unten" },
  { ContainerID: "989483", Location: "R-halle", Position: "Unten" },
  { ContainerID: "943222", Location: "R-halle", Position: "Unten" },
  { ContainerID: "491808", Location: "R-halle", Position: "Unten" },
  { ContainerID: "459885", Location: "R-halle", Position: "Unten" },
  
  // R-halle - Oben
  { ContainerID: "410793", Location: "R-halle", Position: "Oben" },
  { ContainerID: "427458", Location: "R-halle", Position: "Oben" },
  { ContainerID: "492996", Location: "R-halle", Position: "Oben" },
  { ContainerID: "511777", Location: "R-halle", Position: "Oben" },
  { ContainerID: "603064", Location: "R-halle", Position: "Oben" },
  { ContainerID: "607735", Location: "R-halle", Position: "Oben" },
  { ContainerID: "519179", Location: "R-halle", Position: "Oben" },
  { ContainerID: "957747", Location: "R-halle", Position: "Oben" },
  { ContainerID: "12559", Location: "R-halle", Position: "Oben" },
  { ContainerID: "535761", Location: "R-halle", Position: "Oben" },
  
  // R-halle 20" - Unten
  { ContainerID: "105191", Location: "R-halle 20\"", Position: "Unten" },
  { ContainerID: "341455", Location: "R-halle 20\"", Position: "Unten" },
  { ContainerID: "706547", Location: "R-halle 20\"", Position: "Unten" },
  { ContainerID: "509673", Location: "R-halle 20\"", Position: "Unten" },
  { ContainerID: "204449", Location: "R-halle 20\"", Position: "Unten" },
  { ContainerID: "410367", Location: "R-halle 20\"", Position: "Unten" },
  
  // R-halle 20" - Oben
  { ContainerID: "333228", Location: "R-halle 20\"", Position: "Oben" },
  { ContainerID: "333224", Location: "R-halle 20\"", Position: "Oben" },
  { ContainerID: "706621", Location: "R-halle 20\"", Position: "Oben" },
  { ContainerID: "201682", Location: "R-halle 20\"", Position: "Oben" },
  { ContainerID: "351698", Location: "R-halle 20\"", Position: "Oben" },
  { ContainerID: "706565", Location: "R-halle 20\"", Position: "Oben" },
  
  // R-halle Autobhan site - Unten
  { ContainerID: "902238", Location: "R-halle Autobhan site", Position: "Unten" },
  { ContainerID: "401149", Location: "R-halle Autobhan site", Position: "Unten" },
  { ContainerID: "903906", Location: "R-halle Autobhan site", Position: "Unten" },
  { ContainerID: "903904", Location: "R-halle Autobhan site", Position: "Unten" },
  
  // R-halle Autobhan site - Oben
  { ContainerID: "903895", Location: "R-halle Autobhan site", Position: "Oben" },
// N20 - Oben
{ ContainerID: "200008", Location: "N20", Position: "Oben" },
{ ContainerID: "706637", Location: "N20", Position: "Oben" },
{ ContainerID: "706694", Location: "N20", Position: "Oben" },

// N20 - Unten
{ ContainerID: "706693", Location: "N20", Position: "Unten" },
{ ContainerID: "706543", Location: "N20", Position: "Unten" },
{ ContainerID: "202117", Location: "N20", Position: "Unten" },

// N25 Krazi - Unten
{ ContainerID: "706653", Location: "N25 Krazi", Position: "Unten" },
{ ContainerID: "247827", Location: "N25 Krazi", Position: "Unten" },
{ ContainerID: "211193", Location: "N25 Krazi", Position: "Unten" },
{ ContainerID: "706717", Location: "N25 Krazi", Position: "Unten" },

// N9 - Oben
{ ContainerID: "149424", Location: "N9", Position: "Oben" },
{ ContainerID: "492121", Location: "N9", Position: "Oben" },
{ ContainerID: "448503", Location: "N9", Position: "Oben" },
{ ContainerID: "463993", Location: "N9", Position: "Oben" },

// N9 - Unten
{ ContainerID: "901212", Location: "N9", Position: "Unten" },
{ ContainerID: "446824", Location: "N9", Position: "Unten" },
{ ContainerID: "443940", Location: "N9", Position: "Unten" },
{ ContainerID: "445621", Location: "N9", Position: "Unten" },
{ ContainerID: "462072", Location: "N9", Position: "Unten" },

// N10 - Oben
{ ContainerID: "344158", Location: "N10", Position: "Oben" },
{ ContainerID: "255869", Location: "N10", Position: "Oben" },

// N10 - Unten
{ ContainerID: "706568", Location: "N10", Position: "Unten" },
{ ContainerID: "201729", Location: "N10", Position: "Unten" },

// Parkhaus - Oben
{ ContainerID: "941094", Location: "Parkhaus", Position: "Oben" },
{ ContainerID: "432491", Location: "Parkhaus", Position: "Oben" },
{ ContainerID: "431622", Location: "Parkhaus", Position: "Oben" },

// Parkhaus - Unten
{ ContainerID: "597883", Location: "Parkhaus", Position: "Unten" },
{ ContainerID: "495662", Location: "Parkhaus", Position: "Unten" },
{ ContainerID: "428581", Location: "Parkhaus", Position: "Unten" },
];

class ContainerService {
  private containers: Container[] = [...initialContainers];

  // Get all containers
  async getAllContainers(): Promise<Container[]> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));
    return [...this.containers];
  }

  // Search for a container by ID
  async searchContainer(containerID: string): Promise<Container | null> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    const found = this.containers.find(
      container => container.ContainerID.toLowerCase() === containerID.toLowerCase()
    );
    
    return found || null;
  }

  // Add a new container
  async addContainer(container: Container): Promise<{ success: boolean; message: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));

    // Validate input
    if (!container.ContainerID.trim() || !container.Location.trim() || !container.Position.trim()) {
      return { success: false, message: "All fields are required" };
    }

    // Check if container ID already exists
    const exists = this.containers.find(
      c => c.ContainerID.toLowerCase() === container.ContainerID.toLowerCase()
    );
    
    if (exists) {
      return { success: false, message: "Container ID already exists" };
    }

    // Add the container
    this.containers.push({ ...container });
    return { success: true, message: "Container added successfully" };
  }

  // Delete a container
  async deleteContainer(containerID: string): Promise<{ success: boolean; message: string }> {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 300));

    const initialLength = this.containers.length;
    this.containers = this.containers.filter(c => c.ContainerID !== containerID);
    
    if (this.containers.length < initialLength) {
      return { success: true, message: "Container deleted successfully" };
    } else {
      return { success: false, message: "Container not found" };
    }
  }

  // Get container statistics
  async getStatistics(): Promise<{
    totalContainers: number;
    locationCounts: { [location: string]: number };
  }> {
    await new Promise(resolve => setTimeout(resolve, 200));
    
    const locationCounts: { [location: string]: number } = {};
    
    this.containers.forEach(container => {
      locationCounts[container.Location] = (locationCounts[container.Location] || 0) + 1;
    });

    return {
      totalContainers: this.containers.length,
      locationCounts
    };
  }

  // Reset to initial data (for demo purposes)
  async resetData(): Promise<void> {
    this.containers = [...initialContainers];
  }
}

// Export a singleton instance
export const containerService = new ContainerService();
