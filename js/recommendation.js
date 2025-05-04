// Sample data for locations in India with weather information
const locationData = [
    // Major Metropolitan Cities
    { id: 1, city: 'Mumbai', state: 'Maharashtra', temperature: 27.5, humidity: 75.0, windSpeed: 3.2, solarPotential: 85, windPotential: 45 },
    { id: 2, city: 'Delhi', state: 'Delhi', temperature: 25.0, humidity: 60.0, windSpeed: 3.8, solarPotential: 80, windPotential: 50 },
    { id: 3, city: 'Bangalore', state: 'Karnataka', temperature: 24.0, humidity: 65.0, windSpeed: 2.9, solarPotential: 90, windPotential: 40 },
    { id: 4, city: 'Chennai', state: 'Tamil Nadu', temperature: 28.5, humidity: 70.0, windSpeed: 4.1, solarPotential: 95, windPotential: 55 },
    { id: 5, city: 'Kolkata', state: 'West Bengal', temperature: 26.5, humidity: 80.0, windSpeed: 3.5, solarPotential: 75, windPotential: 60 },
    { id: 6, city: 'Hyderabad', state: 'Telangana', temperature: 26.0, humidity: 60.0, windSpeed: 3.7, solarPotential: 85, windPotential: 50 },
    { id: 7, city: 'Pune', state: 'Maharashtra', temperature: 24.5, humidity: 65.0, windSpeed: 3.0, solarPotential: 80, windPotential: 45 },
    
    // Northern India
    { id: 8, city: 'Jaipur', state: 'Rajasthan', temperature: 25.5, humidity: 45.0, windSpeed: 5.2, solarPotential: 95, windPotential: 70 },
    { id: 9, city: 'Lucknow', state: 'Uttar Pradesh', temperature: 26.0, humidity: 65.0, windSpeed: 3.2, solarPotential: 80, windPotential: 45 },
    { id: 10, city: 'Chandigarh', state: 'Punjab & Haryana', temperature: 24.5, humidity: 60.0, windSpeed: 3.5, solarPotential: 85, windPotential: 50 },
    { id: 11, city: 'Dehradun', state: 'Uttarakhand', temperature: 23.0, humidity: 70.0, windSpeed: 2.8, solarPotential: 75, windPotential: 40 },
    { id: 12, city: 'Shimla', state: 'Himachal Pradesh', temperature: 17.0, humidity: 75.0, windSpeed: 3.0, solarPotential: 70, windPotential: 55 },
    { id: 13, city: 'Srinagar', state: 'Jammu & Kashmir', temperature: 13.5, humidity: 70.0, windSpeed: 2.5, solarPotential: 65, windPotential: 45 },
    { id: 14, city: 'Amritsar', state: 'Punjab', temperature: 23.5, humidity: 55.0, windSpeed: 3.2, solarPotential: 85, windPotential: 50 },
    { id: 15, city: 'Jammu', state: 'Jammu & Kashmir', temperature: 24.5, humidity: 60.0, windSpeed: 2.8, solarPotential: 80, windPotential: 45 },
    { id: 16, city: 'Leh', state: 'Ladakh', temperature: 7.5, humidity: 40.0, windSpeed: 4.5, solarPotential: 90, windPotential: 75 },
    
    // Western India
    { id: 17, city: 'Ahmedabad', state: 'Gujarat', temperature: 27.0, humidity: 55.0, windSpeed: 4.8, solarPotential: 90, windPotential: 65 },
    { id: 18, city: 'Surat', state: 'Gujarat', temperature: 27.5, humidity: 70.0, windSpeed: 4.5, solarPotential: 85, windPotential: 60 },
    { id: 19, city: 'Vadodara', state: 'Gujarat', temperature: 27.5, humidity: 60.0, windSpeed: 4.0, solarPotential: 85, windPotential: 55 },
    { id: 20, city: 'Rajkot', state: 'Gujarat', temperature: 26.5, humidity: 55.0, windSpeed: 5.0, solarPotential: 90, windPotential: 65 },
    { id: 21, city: 'Jodhpur', state: 'Rajasthan', temperature: 26.0, humidity: 40.0, windSpeed: 5.5, solarPotential: 95, windPotential: 75 },
    { id: 22, city: 'Udaipur', state: 'Rajasthan', temperature: 24.5, humidity: 45.0, windSpeed: 4.0, solarPotential: 90, windPotential: 60 },
    { id: 23, city: 'Kota', state: 'Rajasthan', temperature: 26.5, humidity: 50.0, windSpeed: 4.5, solarPotential: 95, windPotential: 65 },
    
    // Central India
    { id: 24, city: 'Bhopal', state: 'Madhya Pradesh', temperature: 25.5, humidity: 55.0, windSpeed: 3.5, solarPotential: 85, windPotential: 50 },
    { id: 25, city: 'Indore', state: 'Madhya Pradesh', temperature: 25.0, humidity: 50.0, windSpeed: 3.8, solarPotential: 85, windPotential: 55 },
    { id: 26, city: 'Jabalpur', state: 'Madhya Pradesh', temperature: 25.5, humidity: 60.0, windSpeed: 3.0, solarPotential: 80, windPotential: 45 },
    { id: 27, city: 'Gwalior', state: 'Madhya Pradesh', temperature: 25.0, humidity: 55.0, windSpeed: 3.5, solarPotential: 85, windPotential: 50 },
    { id: 28, city: 'Raipur', state: 'Chhattisgarh', temperature: 26.0, humidity: 65.0, windSpeed: 3.2, solarPotential: 85, windPotential: 45 },
    { id: 29, city: 'Nagpur', state: 'Maharashtra', temperature: 27.0, humidity: 55.0, windSpeed: 3.5, solarPotential: 90, windPotential: 50 },
    
    // Eastern India
    { id: 30, city: 'Patna', state: 'Bihar', temperature: 26.0, humidity: 65.0, windSpeed: 3.0, solarPotential: 80, windPotential: 45 },
    { id: 31, city: 'Ranchi', state: 'Jharkhand', temperature: 24.0, humidity: 60.0, windSpeed: 3.2, solarPotential: 80, windPotential: 50 },
    { id: 32, city: 'Jamshedpur', state: 'Jharkhand', temperature: 26.0, humidity: 65.0, windSpeed: 3.0, solarPotential: 80, windPotential: 45 },
    { id: 33, city: 'Bhubaneswar', state: 'Odisha', temperature: 27.5, humidity: 75.0, windSpeed: 3.8, solarPotential: 85, windPotential: 55 },
    { id: 34, city: 'Cuttack', state: 'Odisha', temperature: 27.0, humidity: 75.0, windSpeed: 3.5, solarPotential: 85, windPotential: 50 },
    { id: 35, city: 'Guwahati', state: 'Assam', temperature: 24.5, humidity: 80.0, windSpeed: 2.5, solarPotential: 70, windPotential: 40 },
    { id: 36, city: 'Siliguri', state: 'West Bengal', temperature: 25.0, humidity: 75.0, windSpeed: 2.8, solarPotential: 75, windPotential: 45 },
    { id: 37, city: 'Agartala', state: 'Tripura', temperature: 25.5, humidity: 80.0, windSpeed: 2.5, solarPotential: 75, windPotential: 40 },
    { id: 38, city: 'Imphal', state: 'Manipur', temperature: 22.0, humidity: 75.0, windSpeed: 2.2, solarPotential: 70, windPotential: 35 },
    { id: 39, city: 'Shillong', state: 'Meghalaya', temperature: 17.5, humidity: 80.0, windSpeed: 3.0, solarPotential: 65, windPotential: 50 },
    { id: 40, city: 'Aizawl', state: 'Mizoram', temperature: 21.0, humidity: 75.0, windSpeed: 2.5, solarPotential: 70, windPotential: 40 },
    { id: 41, city: 'Kohima', state: 'Nagaland', temperature: 19.0, humidity: 75.0, windSpeed: 2.8, solarPotential: 65, windPotential: 45 },
    { id: 42, city: 'Itanagar', state: 'Arunachal Pradesh', temperature: 23.0, humidity: 80.0, windSpeed: 2.0, solarPotential: 65, windPotential: 35 },
    { id: 43, city: 'Gangtok', state: 'Sikkim', temperature: 15.5, humidity: 85.0, windSpeed: 2.5, solarPotential: 60, windPotential: 45 },
    
    // Southern India
    { id: 44, city: 'Thiruvananthapuram', state: 'Kerala', temperature: 27.5, humidity: 80.0, windSpeed: 3.5, solarPotential: 85, windPotential: 50 },
    { id: 45, city: 'Kochi', state: 'Kerala', temperature: 28.0, humidity: 80.0, windSpeed: 4.0, solarPotential: 85, windPotential: 55 },
    { id: 46, city: 'Kozhikode', state: 'Kerala', temperature: 27.5, humidity: 80.0, windSpeed: 3.8, solarPotential: 85, windPotential: 55 },
    { id: 47, city: 'Coimbatore', state: 'Tamil Nadu', temperature: 26.5, humidity: 70.0, windSpeed: 3.5, solarPotential: 90, windPotential: 50 },
    { id: 48, city: 'Madurai', state: 'Tamil Nadu', temperature: 29.0, humidity: 65.0, windSpeed: 3.8, solarPotential: 95, windPotential: 55 },
    { id: 49, city: 'Tiruchirappalli', state: 'Tamil Nadu', temperature: 29.5, humidity: 65.0, windSpeed: 4.0, solarPotential: 95, windPotential: 60 },
    { id: 50, city: 'Vijayawada', state: 'Andhra Pradesh', temperature: 28.5, humidity: 70.0, windSpeed: 3.5, solarPotential: 90, windPotential: 50 },
    { id: 51, city: 'Visakhapatnam', state: 'Andhra Pradesh', temperature: 28.0, humidity: 75.0, windSpeed: 4.5, solarPotential: 90, windPotential: 65 },
    { id: 52, city: 'Tirupati', state: 'Andhra Pradesh', temperature: 28.5, humidity: 65.0, windSpeed: 3.2, solarPotential: 95, windPotential: 45 },
    { id: 53, city: 'Mangalore', state: 'Karnataka', temperature: 27.0, humidity: 75.0, windSpeed: 3.8, solarPotential: 85, windPotential: 55 },
    { id: 54, city: 'Mysore', state: 'Karnataka', temperature: 25.0, humidity: 65.0, windSpeed: 3.0, solarPotential: 90, windPotential: 45 },
    { id: 55, city: 'Hubli-Dharwad', state: 'Karnataka', temperature: 25.5, humidity: 60.0, windSpeed: 3.5, solarPotential: 90, windPotential: 50 },
    { id: 56, city: 'Belgaum', state: 'Karnataka', temperature: 24.0, humidity: 65.0, windSpeed: 3.2, solarPotential: 85, windPotential: 45 },
    
    // Union Territories
    { id: 57, city: 'Port Blair', state: 'Andaman & Nicobar Islands', temperature: 27.0, humidity: 80.0, windSpeed: 4.5, solarPotential: 80, windPotential: 65 },
    { id: 58, city: 'Silvassa', state: 'Dadra & Nagar Haveli', temperature: 27.5, humidity: 70.0, windSpeed: 3.5, solarPotential: 85, windPotential: 50 },
    { id: 59, city: 'Daman', state: 'Daman & Diu', temperature: 28.0, humidity: 75.0, windSpeed: 4.0, solarPotential: 85, windPotential: 60 },
    { id: 60, city: 'Kavaratti', state: 'Lakshadweep', temperature: 28.5, humidity: 80.0, windSpeed: 5.0, solarPotential: 90, windPotential: 70 },
    { id: 61, city: 'Pondicherry', state: 'Puducherry', temperature: 28.5, humidity: 75.0, windSpeed: 4.2, solarPotential: 90, windPotential: 60 }
];

// Function to calculate match score between user preferences and location data
function calculateMatchScore(preferredTemp, preferredWindSpeed, locationTemp, locationWindSpeed) {
    // Calculate temperature difference (lower is better)
    const tempDiff = Math.abs(preferredTemp - locationTemp);
    
    // Calculate wind speed difference (lower is better)
    const windSpeedDiff = Math.abs(preferredWindSpeed - locationWindSpeed);
    
    // Normalize differences to a 0-100 scale (inverted so higher is better)
    // Using a more accurate normalization formula with exponential decay
    // This gives higher scores to locations that are closer to the preferred values
    const tempScore = 100 * Math.exp(-0.5 * Math.pow(tempDiff / 5, 2));
    const windSpeedScore = 100 * Math.exp(-0.5 * Math.pow(windSpeedDiff / 2, 2));
    
    // Calculate weighted overall match score
    // Give more weight to the parameter that has a better match
    const tempWeight = 1 - (tempDiff / (tempDiff + windSpeedDiff + 0.001));
    const windWeight = 1 - (windSpeedDiff / (tempDiff + windSpeedDiff + 0.001));
    
    // Adjust weights to ensure they sum to 1
    const totalWeight = tempWeight + windWeight;
    const normalizedTempWeight = tempWeight / totalWeight;
    const normalizedWindWeight = windWeight / totalWeight;
    
    // Calculate weighted score
    const matchScore = (tempScore * normalizedTempWeight) + (windSpeedScore * normalizedWindWeight);
    
    return Math.max(0, Math.min(100, matchScore)); // Ensure score is between 0 and 100
}

// Function to find and display recommended locations based on user preferences
function findRecommendedLocations(preferredTemp, preferredWindSpeed) {
    // Calculate match scores for all locations
    const locationsWithScores = locationData.map(location => {
        const matchScore = calculateMatchScore(preferredTemp, preferredWindSpeed, location.temperature, location.windSpeed);
        
        // Calculate individual parameter scores for display
        const tempScore = 100 * Math.exp(-0.5 * Math.pow(Math.abs(preferredTemp - location.temperature) / 5, 2));
        const windScore = 100 * Math.exp(-0.5 * Math.pow(Math.abs(preferredWindSpeed - location.windSpeed) / 2, 2));
        
        return { 
            ...location, 
            matchScore,
            tempScore,
            windScore,
            tempDiff: Math.abs(preferredTemp - location.temperature),
            windDiff: Math.abs(preferredWindSpeed - location.windSpeed)
        };
    });
    
    // Sort locations by match score (highest first)
    const sortedLocations = locationsWithScores.sort((a, b) => b.matchScore - a.matchScore);
    
    // Take top 5 locations
    const topLocations = sortedLocations.slice(0, 5);
    
    // Display recommended locations
    displayRecommendedLocations(topLocations, preferredTemp, preferredWindSpeed);
}

// Function to display recommended locations in the UI
function displayRecommendedLocations(locations, preferredTemp, preferredWindSpeed) {
    const locationsList = document.getElementById('locations-list');
    locationsList.innerHTML = '';
    
    if (locations.length === 0) {
        locationsList.innerHTML = '<p>No matching locations found.</p>';
        return;
    }
    
    // Add user preferences summary
    const preferencesSummary = document.createElement('div');
    preferencesSummary.className = 'preferences-summary';
    preferencesSummary.innerHTML = `
        <h4>Your Preferences</h4>
        <p><i class="fas fa-temperature-high"></i> Temperature: ${preferredTemp} °C</p>
        <p><i class="fas fa-wind"></i> Wind Speed: ${preferredWindSpeed} m/s</p>
    `;
    locationsList.appendChild(preferencesSummary);
    
    // Add locations
    locations.forEach(location => {
        const locationCard = document.createElement('div');
        locationCard.className = 'location-card';
        
        // Create progress bars for match scores
        const overallProgressBar = createProgressBar(location.matchScore, 'overall');
        const tempProgressBar = createProgressBar(location.tempScore, 'temperature');
        const windProgressBar = createProgressBar(location.windScore, 'wind');
        
        locationCard.innerHTML = `
            <h4>${location.city}, ${location.state}</h4>
            <div class="location-details">
                <div class="location-stats">
                    <p><i class="fas fa-temperature-high"></i> Temperature: ${location.temperature} °C <span class="diff">(${location.tempDiff > 0 ? '+' : ''}${location.tempDiff.toFixed(1)} °C)</span></p>
                    <p><i class="fas fa-wind"></i> Wind Speed: ${location.windSpeed} m/s <span class="diff">(${location.windDiff > 0 ? '+' : ''}${location.windDiff.toFixed(1)} m/s)</span></p>
            <p><i class="fas fa-tint"></i> Humidity: ${location.humidity}%</p>
                </div>
                <div class="location-potentials">
            <p><i class="fas fa-sun"></i> Solar Potential: ${location.solarPotential}/100</p>
            <p><i class="fas fa-fan"></i> Wind Potential: ${location.windPotential}/100</p>
                </div>
            </div>
            <div class="match-scores">
                <div class="score-item">
                    <span>Overall Match:</span>
                    ${overallProgressBar}
                    <span class="score-value">${location.matchScore.toFixed(1)}%</span>
                </div>
                <div class="score-item">
                    <span>Temperature Match:</span>
                    ${tempProgressBar}
                    <span class="score-value">${location.tempScore.toFixed(1)}%</span>
                </div>
                <div class="score-item">
                    <span>Wind Speed Match:</span>
                    ${windProgressBar}
                    <span class="score-value">${location.windScore.toFixed(1)}%</span>
                </div>
            </div>
        `;
        
        locationsList.appendChild(locationCard);
    });
    
    // Show the results container
    document.getElementById('recommendation-results').style.display = 'block';
    
    // Animate progress bars
    setTimeout(() => {
        document.querySelectorAll('.progress-bar-fill').forEach(bar => {
            bar.style.width = bar.getAttribute('data-width');
        });
    }, 100);
}

// Helper function to create a progress bar
function createProgressBar(value, type) {
    const percentage = value.toFixed(1) + '%';
    let colorClass = '';
    
    switch(type) {
        case 'overall':
            colorClass = 'progress-overall';
            break;
        case 'temperature':
            colorClass = 'progress-temperature';
            break;
        case 'wind':
            colorClass = 'progress-wind';
            break;
        default:
            colorClass = '';
    }
    
    return `
        <div class="progress-bar">
            <div class="progress-bar-fill ${colorClass}" data-width="${percentage}" style="width: 0%"></div>
        </div>
    `;
}

// Event listener for the recommendation form submission
document.getElementById('recommendation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const preferredTemp = parseFloat(document.getElementById('preferred-temperature').value);
    const preferredWindSpeed = parseFloat(document.getElementById('preferred-wind-speed').value);
    
    findRecommendedLocations(preferredTemp, preferredWindSpeed);
    
    // Scroll to results
    document.getElementById('recommendation-results').scrollIntoView({ behavior: 'smooth' });
}); 