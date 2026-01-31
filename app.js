// Profile form submission
const form = document.getElementById('profileForm');
if(form){
    form.addEventListener('submit', function(e){
        e.preventDefault();

        // Get form data
        const data = {};
        new FormData(form).forEach((value, key) => data[key] = value);

        console.log("Profile submitted:", data);
        document.getElementById('successMsg').innerText = "Profile submitted successfully!";

        // TODO: send data to Airtable via API or automation
        form.reset();
    });
}

// Demo listings fetch
const listingsDiv = document.getElementById('listings');
if(listingsDiv){
    // This is where you'll fetch Airtable data
    listingsDiv.innerHTML = `
        <div class="profile-card">
            <h3>Jane, 22</h3>
            <p>City: London</p>
            <p>Budget: £700</p>
            <p>Cleanliness: Neat | Sleep: Early | Social: Balanced</p>
        </div>
        <div class="profile-card">
            <h3>Alex, 24</h3>
            <p>City: Manchester</p>
            <p>Budget: £650</p>
            <p>Cleanliness: Moderate | Sleep: Late | Social: Extrovert</p>
        </div>
    `;
}