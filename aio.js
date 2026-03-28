// ==========================================
// NAITIK AI - AIO LOGIC ENGINE (THE WIRE)
// ==========================================
// Is file ko tum GitHub par edit karke apne AI ko train kar sakte ho.
// Ye file index.html se direct connect rahegi.

const aioData = {

    // ---------------------------------------------------------
    // SECTION 1: CUSTOM INSTRUCTIONS (NOTICE / BROADCAST)
    // ---------------------------------------------------------
    // Ye message chat open hote hi user ko sabse upar dikhega.
    // Agar tumhe koi message nahi dikhana, toh isko khali chhod do aise: ""
    customInstruction: "📢 Welcome! Aaj maine 4 naye games add kiye hain, zarur try karein!",


    // ---------------------------------------------------------
    // SECTION 2: AI TRAINING (QUESTIONS & ANSWERS)
    // ---------------------------------------------------------
    // Yahan tum AI ko naye sawal-jawab sikha sakte ho.
    // keywords: User kya type karega (comma lagakar likho)
    // answer: AI kya jawab dega
    
    qaList: [
        {
            keywords: ["tumhara naam", "who are you", "naam kya hai"],
            answer: "Mera naam Game hub AI hai, mujhe Naitik Singh ne game khelne ke liye banaya hai.."
        },
        {
            keywords: ["creator", "kisne banaya", "owner", "baap kaun hai"],
            answer: "Mujhe Naitik ne banaya hai, wahi mere creator hain!"
        },
        {
            keywords: ["kya kar rahe ho", "what are you doing", "aur batao"],
            answer: "Main bas aapke sawalo ka intezaar kar raha hu. Boliye kaun sa game khelna hai?"
        },
        {
            keywords: ["bore ho raha", "boring", "timepass", "kuch accha batao"],
            answer: "Agar bore ho rahe ho, toh Hill Climb Racer ya Classic Snake try karo, maza aayega!"
        },
        {
            keywords: ["gta 5", "gta v", "vice city"],
            answer: "GTA 5 bahut heavy game hai sir, wo abhi mere chote se web server par nahi chal sakta. Aap dusre games try karein."
        },
        {
            keywords:["fuck you","sex","chod","bahan chod","beti chod","bakchod","land","gand maraw","maal patawa","chutiya","randi","mother fucker","Sister fucker","daughter fucker"],
                            answer: "aabe sale pagal hai kya ye tu gaali kab se dene laga be. 🧐🤬, agar koi game khelna hai to bas wahi bol."},
        // Naya sawal add karne ke liye upar wale bracket } ke baad comma (,) lagao aur naya block likh do.
    ]

};