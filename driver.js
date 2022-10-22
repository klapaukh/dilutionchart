class DriverEntry {
    constructor(title, content, video) {
        this.title = title;
        this.content = content;
        this.video = video;
    }
}

const driver_entries = [
    new DriverEntry("Selecting the Drug Library",
        "After the user has inserted a syringe and selected the correct syringe type, the device display will ask the user if they wish to use the drug library.  The drug library should always be used to ensure conformity with dilution practices and standing orders.  Clinical advice should be sought if an infusion is to be run without use of the drug library (i.e. only under direction from a Medical Director)",
        undefined),
    new DriverEntry("Adult and Paediatric Drug Libraries",
        `<p>Adult and paediatric drug libraries are separated, as many infusions for paediatrics are administered by the device using a dose per weight calculation.</p>
        <p>When choosing to use the drug library, the device will automatically use the library that it last used.  To change the library, the user must change the Care Unit.  This can be accessed by scrolling up to or down to the bottom of the library and choosing “Change care unit”.</p>
        <p>Users have the choice of:</p>
        <ul>
            <li>WFA - Adults</li>
            <li>WFA - Paediatrics</li>
        </ul>`,
        undefined)
];