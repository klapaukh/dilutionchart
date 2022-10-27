class DriverEntry {
    constructor(title, content, video) {
        this.title = title;
        this.content = content;
        this.video = video;
    }
}

const driver_entries = [
    new DriverEntry("Selecting the Drug Library",
        `<p>After the user has inserted a syringe and selected the correct syringe type, the device display will ask the user if they wish to use the drug library.  The drug library should always be used to ensure conformity with dilution practices and standing orders.  Clinical advice should be sought if an infusion is to be run without use of the drug library (i.e. only under direction from a Medical Director)<p>
        <img src="images/driver/SelectingtheDrugLibrary.png" alt="Selecting the drug library" />
        `,
        undefined),
    new DriverEntry("Adult and Paediatric Drug Libraries",
        `<p>Adult and paediatric drug libraries are separated, as many infusions for paediatrics are administered by the device using a dose per weight calculation.</p>
        <p>When choosing to use the drug library, the device will automatically use the library that it last used.  To change the library, the user must change the Care Unit.  This can be accessed by scrolling up to or down to the bottom of the library and choosing “Change care unit”.</p>
        <img src="images/driver/ChangeCareUnit.png" alt="Change care unit">
        <p>Users have the choice of:</p>
        <ul>
            <li>WFA - Adults</li>
            <li>WFA - Paediatrics</li>
        </ul>
        <img src="images/driver/SelectCareUnit.png" alt="Select care unit">`,
        undefined),
    new DriverEntry("Starting and Stopping an Infusion",
        `<p>Once a drug has been selected, the device will display parameters for an infusion.  Depending on the drug selected, the dose can be adjusted to suit the needs of the patient.</p>
        <img src="images/driver/StartStopInfusion.png" alt="Starting and stopping an infusion">
        <p>By pushing the Start/Stop button, the infusion can commence.</p>
        <p>Magnesium sulphate and amiodarone are administered as a fixed dose over time.  To adjust the rate of infusion, the rate rather than the dose can be adjusted i.e. from 30 minutes to 45 or 50 minutes.  The maximum limit is that described in the reference card, but a slower rate can be chosen if factors such as hypotension are concerning the clinician.</p>
        <p>An infusion can be stopped at any time by pressing the Start/Stop button. It can be resumed by pressing the button again.</p>`,
        undefined),
    new DriverEntry("Changing the rate of infusion once started",
        `
        <img src="images/driver/ChangeInfusionRate.png" alt="Changing the rate of infusion">
        <p>Whilst an infusion is running, pushing the left arrow button will allow the user to alter the rate of administration.  Choosing a rate that exceeds those of the reference card will be met with a prompt, to confirm the selection.  The library has hard and soft limits for administration rates.  Exceeding a soft limit will result in the aforementioned prompt, whilst users cannot actually select a rate that exceeds the hard limit.  The soft limits are designed to allow clinicians to continue to run infusions in situations that sit beyond what is normally encountered, but help prevent users inadvertently selecting a greatly increased rate of infusion.  The programmed limits do not replace clinical judgment and best medication management practice.</p>
        `,
        undefined),
    new DriverEntry("Boluses",
        `<p>Some medications within the drug library can be administered as a bolus whilst also running an infusion.  This can be performed by pressing the BOL button, then selecting the amount using the (left arrow) button.  Pressing the BOL button again will administer the selected bolus dose. Pressing the OK button during bolus administration will stop the rest of the bolus.
        A manual bolus can be administered by pushing the BOL button, then holding the OK button until the desired bolus dose is administered.  This is not recommended practice, as it is imprecise and can more easily lead to an incorrect dose being administered.</p>
        <p>A bolus cannot be administered if the infusion is stopped.</p>`,
        undefined),
    new DriverEntry("Status",
        `<p>Pressing the (up arrow) or (down arrow) buttons during operation will allow the user to see several useful parameters and values about the infusion, such as the total volume, amount, duration and remaining time until depletion of the syringe.</p>
        <p>Pressure</p>
        <p>The Perfusor&reg; Space monitors the pressure required to depress the syringe and displays this via the following graphic on the status screen</p>
        <img src="images/driver/Status.jpg" alt="Pressure required to depress the syringe">
        <p>In this graphic, the dotted line represents the pressure alarm level, i.e. the amount of pressure that the device will tolerate before alarming, and the top solid bar represents the current pressure level.  In this instance, it shows an alarm level of 6, and a current pressure that is about 30% of pressure level 6.</p>
        <p>The pressure needed to administer an infusion may vary.  Smaller cannulas, restricted venous flow, or intraosseous cannulas may cause the pressure to rise.  It is best to check for factors like line occlusion, bent limbs, or extravasation before deciding to increase the pressure level.</p>
        `,
        undefined),
    new DriverEntry("Battery",
        `During an infusion, the upper left portion of the screen will display a battery indicator, allowing a rough estimation of the battery level.  An indication of remaining battery time can be viewed by accessing the main menu, then “Status”.  This can be accessed by pressing the C button, scrolling to “Status” using the (up arrow) and (down arrow) buttons and selecting it with the (left arrow) button, then scrolling to “Batt Cap” and selecting it`,
        undefined),
    new DriverEntry("Standby",
        `If the power button is held down whilst an infusion has been selected (either running, paused or yet to be started), the device will enter standby mode.  This allows the user to have an infusion stopped without it alarming. `,
        undefined),
    new DriverEntry("Removing the syringe and turning off the device",
        `<p>If the syringe holder is opened, the device will ask the user if they wish to perform a syringe change.  Selecting “Yes” will make the device release the plunger and extend the arm fully, allowing the syringe to be removed.</p>
        <p>Placing a syringe back in the device will cause the device to ask the user if they wish to “use last therapy”, allowing continuation of the same medication at the same rate.  This is useful if a patient requires more than one syringe of a particular medication over the course of treatment, or if the syringe had to be removed and placed back in for some reason.</p>
        <p>Closing the syringe holder and pressing the power button will allow the device to power down.</p>
        <p>If the syringe is near or completely empty, the syringe driver arm will prevent the syringe holder from rotating into the locked open position.  In this situation, hold the syringe holder open for a few seconds until the syringe driver arm has retracted, then rotate the holder.</p>`,
        undefined),
    new DriverEntry("Medication Checks",
        `<p>Medication checks continue to be of high priority when using a syringe driver.  It is recommended that clinicians treat each step of setting up an infusion with the same level of checking that is expected when preparing and administering medications in any other manner.</p>
        <p>Key steps should ideally be cross checked with another paramedic.  These are as follows:</p>
        <ul>
        <li>Selecting the medication for administration, noting the name of the medication, the reason for administration and the CPG that it is being administered under.</li>
        <li>The correct syringe, dilution, expiry of medication(s) and consumables.</li>
        <li>The correct syringe is selected on inserting the syringe.</li>
        <li>The correct drug library is being used.</li>
        <li>The correct medication is selected on the syringe driver.</li>
        <li>The correct (or best estimate) patient weight is selected for a paediatric patient.</li>
        <li>The correct rate or dose is selected for administration.</li>
        </ul>`,
        undefined),
    new DriverEntry("Cleaning",
        `<p>The Perfusor&reg; Space can be cleaned using a detergent dampened cloth, such as a Clinell&reg; wipe and be allowed to dry before being stowed.  If the rear of the device requires cleaning, care should be taken not to allow any moisture ingress into the two electrical connectors.  To lessen the chance of this occurring, the charging cable can be plugged in whilst remaining unplugged from a wall outlet.  If the device is contaminated in a way that the above cleaning method is not sufficient, it should be returned to stores for further assessment.</p>
        <p>The device should never be submerged in liquid or sprayed with liquid or aerosols such as Viraclean&reg;, bleach or disinfectant sprays.</p>`,
        undefined)
];