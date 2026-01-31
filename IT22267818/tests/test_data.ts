export interface TestCase {
  id: string;
  description: string;
  input: string;
  expectedOutput: string; // The "Expected Output" column in Excel
  type: 'Positive' | 'Negative' | 'UI';
  category: string; // "What is covered by the test" -> Input Type / Domain
  length: 'S' | 'M' | 'L'; // Input length type
  grammarFocus?: string;
  qualityFocus: string; // Using string to accommodate variations
}

export const testCases: TestCase[] = [
  {
    "id": "Pos_Fun_0001",
    "description": "Convert short educational statement",
    "length": "S",
    "input": "adhyaapanaya yanu minis jivithayata aalokayak",
    "expectedOutput": "අද්යාපනය යනු මිනිස් ජිවිතයට ආලොකයක්",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0002",
    "description": "Convert compound educational sentence",
    "length": "M",
    "input": "eya dhaenuma labaagaeniimak pamanak novee",
    "expectedOutput": "එය දැනුම  ලබාගැනීමක් පමනක් නොවෙ",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Compound sentence",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0003",
    "description": "Convert long formal educational paragraph",
    "length": "L",
    "input": "ugathunta ratee dhiyunuvata dhaayaka venna puluvan saha saamaya saha sahajivanaya vardhanaya karanna puluvan",
    "expectedOutput": "උගතුන්ට රටේ දියුනුවට දායක වෙන්න පුලුවන් සහ සාමය සහ සහජිවනය වර්දනය කරන්න පුලුවන්",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Complex sentence",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0004",
    "description": "Convert casual daily weather update",
    "length": "S",
    "input": "adha kolombata maara vaessa",
    "expectedOutput": "අද කොලොම්බට මාර වැස්ස",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0005",
    "description": "Convert informal daily routine",
    "length": "M",
    "input": "mama udhe idhan vaeda vagayak kara kara indhala dhaen thamai poddak nidhahase inne",
    "expectedOutput": "මම උදෙ ඉදන් වැඩ  වගයක් කර කර ඉන්දල දැන් තමෛ පොඩ්ඩක් නිදහසෙ ඉන්නේ",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Present tense / Past tense",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0006",
    "description": "Convert future plan statement",
    "length": "S",
    "input": "eka labana maase yanna plan kala",
    "expectedOutput": "එක ලබන මාසෙ යන්න plan කල",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Future tense",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0007",
    "description": "Convert friendly advice command",
    "length": "M",
    "input": "post eka kiyavana oyalatath vaeda asse poddak vivekaganna",
    "expectedOutput": "post එක කියවන ඔයලටත් වැඩ  අස්සෙ පොඩ්ඩක් විවෙකගන්න",
    "type": "Positive",
    "category": "Greeting / request / response",
    "grammarFocus": "Imperative (command)",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0008",
    "description": "Convert traffic experience narrative",
    "length": "M",
    "input": "uda vaeda yadhdhi siraavata maara traffic ekak thibba bus eke paeya dhekak vithara hitiya",
    "expectedOutput": "උඩ වැඩ යද්දි සිරාවට මාර traffic එකක් තිබ්බ bus eke පැය දෙකක් විතර හිටිය",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Past tense",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0009",
    "description": "Convert reported question",
    "length": "S",
    "input": "boss ahaeva ai parakku kiyala",
    "expectedOutput": "boss අහැව ඓ පරක්කු කියල",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Interrogative (question)",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0010",
    "description": "Convert tiredness expression",
    "length": "S",
    "input": "marama mahansiyi kannath oone nae",
    "expectedOutput": "මරම මහන්සියි කන්නත් ඕනෙ නැ",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0011",
    "description": "Convert mixed Singlish with emoji and English",
    "length": "M",
    "input": "machan today evening free dha poddak town ekata yanna ona 🍹 film ekak balanna plan karanava",
    "expectedOutput": "මචන් today evening free ද පොඩ්ඩක් town එකට යන්න ඔන 🍹 film එකක් බලන්න plan කරනව",
    "type": "Positive",
    "category": "Mixed Singlish + English",
    "grammarFocus": "Compound sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Pos_Fun_0012",
    "description": "Convert friendly invitation question",
    "length": "S",
    "input": "ubatath puluvannam set vemu",
    "expectedOutput": "උබටත් පුලුවන්නම් සෙට් වෙමු",
    "type": "Positive",
    "category": "Greeting / request / response",
    "grammarFocus": "Interrogative (question)",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0013",
    "description": "Convert office busy status",
    "length": "S",
    "input": "adha office eke full busy",
    "expectedOutput": "අද office eke full busy",
    "type": "Positive",
    "category": "Mixed Singlish + English",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0014",
    "description": "Convert project update statement",
    "length": "M",
    "input": "mama project file eka check karala boss ta send kala",
    "expectedOutput": "මම project file එක check කරල boss ට send කල",
    "type": "Positive",
    "category": "Mixed Singlish + English",
    "grammarFocus": "Past tense",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0015",
    "description": "Convert instruction from superior",
    "length": "M",
    "input": "boss kiyanava thava poddak edit karanna one kiyala",
    "expectedOutput": "boss කියනව තව පොඩ්ඩක් edit කරන්න one කියල",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Imperative (command)",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0016",
    "description": "Convert meeting announcement",
    "length": "S",
    "input": "heta group ekatama meeting ekak thiyenava",
    "expectedOutput": "හෙට group එකටම meeting එකක් තියෙනව",
    "type": "Positive",
    "category": "Daily language usage",
    "grammarFocus": "Future tense",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0017",
    "description": "Convert power cut slang",
    "length": "S",
    "input": "ada patta light naee ne",
    "expectedOutput": "අඩ පට්ට light නෑ නේ",
    "type": "Positive",
    "category": "Slang / informal language",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Pos_Fun_0018",
    "description": "Convert reason for power failure",
    "length": "M",
    "input": "raathri velavedhi loku vaessa nisaa current eka kaepuna",
    "expectedOutput": "රාත්‍රි වෙලවෙදි ලොකු වැස්ස නිසා current එක කැපුන",
    "type": "Positive",
    "category": "Slang / informal language",
    "grammarFocus": "Past tense",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Pos_Fun_0019",
    "description": "Convert complaint expression",
    "length": "S",
    "input": "mevaa kaala kanni vaeda",
    "expectedOutput": "මෙවා කාල කන්නි වැඩ",
    "type": "Positive",
    "category": "Slang / informal language",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Pos_Fun_0020",
    "description": "Convert frustration command",
    "length": "S",
    "input": "monvahari karapanko",
    "expectedOutput": "මොන්වහරි කරපන්කො",
    "type": "Positive",
    "category": "Slang / informal language",
    "grammarFocus": "Imperative (command)",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Pos_Fun_0021",
    "description": "Convert multiple spaces",
    "length": "S",
    "input": "mama gedhara inne",
    "expectedOutput": "මම ගෙදර ඉන්නේ",
    "type": "Positive",
    "category": "Formatting (spaces)",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Formatting preservation"
  },
  {
    "id": "Pos_Fun_0022",
    "description": "Convert line break input",
    "length": "M",
    "input": "mama gedhara inne\noyaa monavadha karanne?",
    "expectedOutput": "මම ගෙදර ඉන්නේ.\nඔයා මොනවද කරන්නේ?",
    "type": "Positive",
    "category": "Formatting (line breaks)",
    "grammarFocus": "Interrogative (question)",
    "qualityFocus": "Formatting preservation"
  },
  {
    "id": "Pos_Fun_0023",
    "description": "Convert time format",
    "length": "S",
    "input": "meeting eka 7.30 am venakan thiyenavaa",
    "expectedOutput": "meeting එක 7.30 am වෙනකන් තියෙනවා",
    "type": "Positive",
    "category": "Punctuation / numbers",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Pos_Fun_0024",
    "description": "Convert English place name",
    "length": "S",
    "input": "api kandy yanna plan karanava",
    "expectedOutput": "අපි Kandy යන්න plan කරනව",
    "type": "Positive",
    "category": "Names / places",
    "grammarFocus": "Future tense",
    "qualityFocus": "Accuracy validation"
  },
  {
    "id": "Neg_Fun_0001",
    "description": "Incorrect word segmentation",
    "length": "S",
    "input": "mamagdhara yanavaaa",
    "expectedOutput": "මමග්දර යනවා",
    "type": "Negative",
    "category": "Typographical error handling",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0002",
    "description": "Unnecessary symbols in input",
    "length": "S",
    "input": "mama gedhara yanavaa !!!",
    "expectedOutput": "මම ගෙදර යනවා!!!",
    "type": "Negative",
    "category": "Punctuation / numbers",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0003",
    "description": "Long paragraph with random spacing",
    "length": "L",
    "input": "Ai yoh, yesterday I went to town area\nmachang,\ntraffic was super jialat,\ndie me lah. I wanted to buy one\nkopi,\nbut the uncle was sleeping,\nso I just take\none\npacket\nair bandung\nand go\nback home. Sien max.\nThen my neighbour,\nthat uncle,\ntalking very loud,\nI cannot concentrate\nmy\nwork at all.\nI told him, \"Uncle,\nslow down lah,\"\nbut he just ignore me.\n",
    "expectedOutput": "අඉ යොහ්, yesterday ඉ went to town area\nමචන්ග්,\ntraffic was super ජිඅලට්,\ndie මෙ ලහ්. ඉ wanted to buy one\nකොපි,\nbut තෙ uncle was sleeping,\nසො ඉ just take\none\npacket\nair bandung\nand go\nback home. සිඑන් max.\nThen my නේග්හ්බොඋර්,\nthat uncle,\ntalking very loud,\nඉ cannot concentrate\nmy\nwork at all.\nඉ told හිම්, \"Uncle,\nslow down ලහ්,\"\nbut he just ignore මෙ.",
    "type": "Negative",
    "category": "Punctuation / numbers",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0004",
    "description": "Invalid date format",
    "length": "S",
    "input": "mama gedhara yanavaa 2026--05--21",
    "expectedOutput": "මම ගෙදර යනවා 2026--05--21",
    "type": "Negative",
    "category": "",
    "grammarFocus": "",
    "qualityFocus": ""
  },
  {
    "id": "Neg_Fun_0005",
    "description": "Mixed Sinhala and Singlish input",
    "length": "S",
    "input": "mama gedara  yanavaa",
    "expectedOutput": "මම ගෙදර යනවා.",
    "type": "Negative",
    "category": "Typographical error handling",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0006",
    "description": "Excessive emojis in input",
    "length": "S",
    "input": "😡😡 mama gedhara yanavaa 😡😡",
    "expectedOutput": "😡😡 මම ගෙදර යනවා 😡😡",
    "type": "Negative",
    "category": "Slang / informal language",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0007",
    "description": "Joined paragraph without spaces",
    "length": "M",
    "input": "mamagedharayanavaapassekathakaranawa",
    "expectedOutput": "මමගෙදරයනවාපස්සෙකතකරනwඅ",
    "type": "Negative",
    "category": "Typographical error handling",
    "grammarFocus": "Compound sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0008",
    "description": "Excessive line breaks",
    "length": "M",
    "input": "Machang,\ntomorrow you coming\nto the\noffice or not?\nI need to\npass you the\nreport lah.\nReply fast, ok?",
    "expectedOutput": "Machang,\ntomorrow you coming\nto the\noffice or not?\nI need to\npass you the\nreport lah.\nReply fast, ok?",
    "type": "Negative",
    "category": "Formatting (line breaks)",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0009",
    "description": "Unsupported symbols",
    "length": "S",
    "input": "mama gedhara yanavaa #$%",
    "expectedOutput": "මම ගෙදර යනවා #$%",
    "type": "Negative",
    "category": "Punctuation / numbers",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Robustness validation"
  },
  {
    "id": "Neg_Fun_0010",
    "description": "Empty input handling",
    "length": "S",
    "input": "",
    "expectedOutput": "",
    "type": "Negative",
    "category": "Empty / cleared input handling",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Error handling / input validation"
  },
  {
    "id": "Pos_UI_0001",
    "description": "Real-time Sinhala output update",
    "length": "S",
    "input": "man gedhara yanavaa",
    "expectedOutput": "man ගෙදර යනවා",
    "type": "UI",
    "category": "Daily language usage",
    "grammarFocus": "Simple sentence",
    "qualityFocus": "Real-time output update behavior"
  }
];
