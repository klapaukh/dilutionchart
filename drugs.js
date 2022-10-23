class DrugEntry {
    constructor(name, audience, colour, preparation, concentration, inf_rate, dose, bolus, comments){
        this.Drug = name;
        this.Audience = audience;
        this.colour = colour;
        this.Preparation = preparation;
        this.Concentration = concentration;
        this["Infusion Rate"] = inf_rate;
        this["Total Dose / Volume"] = dose;
        if(bolus.constructor !== Array) {
            console.log(name);
        }
        this.Bolus = bolus;
        this.Comments = comments
    }
}
const full_data = [
    new DrugEntry("Adrenaline",
        "Adult",
        "rgb(182,159,202)",
        "3mg made to 50ml with 0.9% NaCl",
        "60mcg/ml",
        "5-50mcg/min (5-50ml/hr)",
        "PRN",
        [
            "30mcg (0.5ml)",
            "60mcg (0.5ml)",
            "90mcg (1.5ml)"
        ],
        "Start at 5mcg/min (5ml/hr) increasing by 5mcg/min (5ml/hr) increments every 2 mins titrating to effect. Reassess delivery system if dose rate beyond 50mcg/min is required."
    ),
    new DrugEntry(
        "Adrenaline",
        "Paed",
        "rgb(207,191,219)",
        "3mg made to 50ml with 0.9% NaCl",
        "60mcg/ml",
        "0.1-1mcg/min (0.1-1ml/hr)",
        "PRN",
        [],
        "Start at 0.1mcg/kg/min (0.1ml/kg/hr) increasing by 0.1mcg/kg/min (0.1ml/kg/hr) increments every 2 mins titrating to effect."
    ),
    new DrugEntry(
        "Amiodarone",
        "Adult",
        "rgb(217,217,217)",
        "300mg made to 30ml with 5% Dextrose",
        "10mg/ml",
        "30mL over 30mins (60ml/hr)",
        "30mg/30ml",
        [],
        "Reduce rate or cease infusion if Pt becomes hypotensive."
    ),
    new DrugEntry(
        "GTN",
        "Adult",
        "rgb(217,99,203)",
        "50mg made to 50ml with 5% Dextrose",
        "1000mcg/ml",
        "10-200mcg/min (0.6 - 12ml/hr)",
        "PRN",
        [],
        "Start at 10mcg/min (0.6ml/hr) adjusting up or down by 5-10mcg/min (0.3 - 0.6ml/hr) increments every 5 mins titrating to pain and/or BP. Ensure SBP > 90mmHg."
    ),
    new DrugEntry(
        "Labetalol",
        "Adult",
        "rgb(255,144,255)",
        "60mg (12ml made to 60ml with 0.9 % sodium chloride (48ml))",
        "1mg/1ml",
        "20-60mg/hr (0.3-1ml/min)",
        "PRN",
        ["10mg over 1-2 minutes"],
        "Consult after 50mg administered"
    ),
    new DrugEntry(
        "Magnesium",
        "Adult",
        "rgb(255,255,255)",
        "2.47g (10mmol) in 5ml amp & dilute to 20ml with 5% Dextrose",
        "123.5mg/ml = 0.5mmol/ml",
        "20mls over 15mins (80ml/hr)",
        "2.47g (10mmol)/20ml",
        [],
        "Repeat x1 if required in severe asthma. Consult with MD for approval, guidance and dosing in eclamptic seizures and Torsades de Pointes."
    ),
    new DrugEntry(
        "Magnesium",
        "Paed",
        "rgb(255,255,255)",
        `<p>2.47g in 5ml amp draw up</p>
        <ul>
        <li>20kg: draw up 2ml (4mmol)</li>
        <li>30kg: draw up 3ml (6mmol)</li>
        <li>40kg: draw up 4ml (8mmol)</li>
        </ul>
        <p>& dilute to 20ml with 5% Dextrose</p>`,
        "<ul><li>20kg = 0.2mmol/ml</li><li>30kg = 0.3mmol/ml</li><li>40kg = 0.4mmol/ml</li></ul>",
        "20mls over 15mins (80ml/hr)",
        "<ul><li>20kg = 4mmol/20ml</li><li>30kg = 6mmol/20ml</li><li>40kg = 8mmol/20ml</li></ul>",
        [],
        ""
    ),
    new DrugEntry(
        "Morphine & Midazolam",
        "Adult",
        "rgb(244,100,0)",
        "Morphine 30mg and Midazolam 30mg made to 30mL with 0.9% NaCl",
        "1mg each/ml",
        "5 - 15mg/hr (5 - 15ml/hr)",
        "PRN",
        ["1 - 3 mg each (1 - 3ml)"],
        "Titrate to maintain adequate sedation/analgesia "
    ),
    new DrugEntry(
        "Morphine & Midazolam",
        "Paed",
        "rgb(255,211,175)",
        "Morphine 30mg and Midazolam 30mg made to 30mL with 0.9% NaCl",
        "1mg each/ml",
        "0.1 - 0.2mg/kg/hr (0.1-0.2ml/kg/hr)",
        "PRN",
        ["0.05mg/kg each (0.05ml/kg)"],
        "Titrate to maintain adequate sedation/analgesia",
    ),
    new DrugEntry(
        "Ketamine",
        "Adult Analgesia",
        "rgb(254,255,0)",
        "<ul><li>80kg plus: 30mg (0.3mL) made to 30mL with 0.9% NaCl</li><li>50 - 80kg: 20mg (0.2mL) made to 30mL with 0.9% NaCl</li></ul>",
        "<ul><li>80kg plus: 1mg/ml</li><li>50 - 80kg: 0.6mg/ml</li></ul>",
        "30mls over 15mins (120ml/hr)",
        "PRN",
        [],
        "Analgesia"
    ),
    new DrugEntry(
        "Ketamine",
        "Paed Analgesia",
        "rgb(254,255,137)",
        `<p>100mg in 100ml of 5% Dextrose</p>
        <ul>
        <li>10kg: 2.5mg/2.5ml</li>
        <li>20kg: 5mg/5ml</li>
        <li>30kg: 8mg/8ml</li>
        <li>40kg: 10mg/10ml</li>
        </ul>
        <p>& dilute to 20ml with 0.9% NaCl</p>`,
        `<ul>
         <li>10kg: 125mcg/ml
         <li>20kg: 250mcg/ml
         <li>30kg: 400 mcg/ml
         <li>40kg: 500 mcg/ml
        </ul>`,
        "20mls over 15mins (80ml/hr)",
        "PRN",
        [],
        "Analgesia",
    ),
    new DrugEntry(
        "Fentanyl & Midazolam",
        "Adult",
        "rgb(244,100,0)",
        "Fentanyl 300mcg & Midazolam 30mg made to 30ml with 0.9% NaCl",
        "Fentanyl 10mcg/mL & Midazolam 1mg/ml",
        "Fentanyl 50 - 150mcg/hr Midazolam 5 - 15mg/hr (5 - 15ml/hr)",
        "PRN",
        ["Fentanyl 10 - 30mcg", "Midazolam 1-3mg (1-3ml)"],
        "Post intubation without signs of shock. Alternative to M&M if allergic to Morphine or hypotensive. Titrate to maintain adequate sedation",
        ),
        new DrugEntry(
        "Fentanyl & Midazolam",
        "Paed",
        "rgb(255,211,175)",
        "Fentanyl 300mcg & Midazolam 30mg made to 30ml with 0.9% NaCl",
        "Fentanyl 10mcg/ml & Midazolam 1mg/ml",
        "Fentanyl 1-2mcg/kg/hr Midazolam 0.1-0.2mg/kg/hr (0.1-0.2ml/kg/hr)",
        "PRN",
        ["Fentanyl 0.5mcg/kg", "Midazolam 0.05mg/kg (0.05ml/kg)"],
        "Post intubation without signs of shock. Alternative to M&M if allergic to Morphine or hypotensive. Titrate to maintain adequate sedation",
        ),
        new DrugEntry(
        "Fentanyl",
        "Adult",
        "rgb(131,179,230)",
        "200mcg made to 20ml with 0.9% NaCl",
        "10mcg/ml",
        "Fentanyl 50 - 150mcg/hr (5 - 15ml/hr)",
        "PRN",
        ["Fentanyl 10 - 30mcg (1-3ml)"],
        "Alternative to M&M if allergic to morphine or hypotensive. Titrate to maintain adequate sedation.",
        ),
        new DrugEntry(
        "Fentanyl & Ketamine",
        "Adult",
        "rgb(224,243,153)",
        "Fentanyl 200mcg & Ketamine 200mg made to 20ml with 0.9% NaCl",
        "Fentanyl 10mcg/ml & Ketamine 10mg/ml",
        "Fentanyl 50- 150mcg/hr Ketamine 50-150mg/hr (5 - 15ml/hr)",
        "PRN",
        ["Fentanyl 10 - 30mcg", "Ketamine 10 - 30mg (1-3ml)"],
        "Post intubation with signs of shock",
        ),
        new DrugEntry(
        "Fentanyl & Ketamine",
        "Paed",
        "rgb(224,243,153)",
        "Fentanyl 200mcg & Ketamine 200mg made to 20ml with 0.9% NaCl",
        "Fentanyl 10mcg/mL & Ketamine 10mg/ml",
        "Fentanyl 1-2mcg/kg/hr Ketamine 1-2mg/kg/hr (0.1-0.2ml/kg/hr)",
        "PRN",
        ["Fentanyl 0.5mcg/kg", "Ketamine 0.5mg/kg (0.05ml/kg)"],
        "Post intubation with signs of shock",
        ),
        new DrugEntry(
        "Metaraminol",
        "Adult",
        "rgb(255,144,255)",
        "10mg (1ml) made to 10ml with 0.9% sodium chloride",
        "1mg/1ml",
        "2mg/hr - max 20mg/hr",
        "PRN",
        ["0.5 to 1mg bolus then infusion"],
        "Likely to require 2-3mg/hr, titrate at 5-10min intervals.<strong>SBP > 120 mmHg for head injuries</strong>",
        ),
        new DrugEntry(
        "Ketamine",
        "Adult (RSI ONLY) Sedation",
        "rgb(254,255,0)",
        "200mg made to 20ml with 0.9% NaCl",
        "10mg/ml",
        "30 - 300mg/hr (3 - 30ml/hr)",
        "PRN",
        ["20 - 50mg (2 - 5ml)"],
        "Consider in asthma or hypotension as alternative to M&M. Titrate to maintain adequate sedation",
        ),
        new DrugEntry(
        "Ketamine",
        "Paed (RSI ONLY) Sedation",
        "rgb(254,255,0)",
        "100mg made to 100ml with 5% Dextrose. Draw into 20 or 50ml syringe",
        "1mg/ml",
        "0.5 - 2.5mg/kg/hr (0.5-2.5ml/kg/hr)",
        "PRN",
        ["0.5mg/kg (0.5ml/kg)"],
        "Consider in asthma or hypotension as alternative to M&M. Titrate to maintain adequate sedation.",
        )
    ];

full_data.sort(function(a,b) {
    let result =  a.Drug.localeCompare(b.Drug);
    if (result !== 0) {
        return result;
    }
    return a.Audience.localeCompare(b.Audience);
});
