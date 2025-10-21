// script.js - Universal Convert
console.log("Universal Convert: Script loaded!");

// Unit Conversion Data (can be expanded)
const unitData = {
    'cooking': {
        'gram': {
            'ml': 1, // Assuming water-like density
            'cup': 0.00422675, // 1 gram to US cup (approx for water)
            'oz': 0.035274, // 1 gram to oz
            'pound': 0.00220462, // 1 gram to pound
            'tbsp': 0.067628, // 1 gram to US tablespoon
            'tsp': 0.202884 // 1 gram to US teaspoon
        },
        'ml': {
            'gram': 1, // Assuming water-like density
            'cup': 0.00422675,
            'oz': 0.033814,
            'pound': 0.00220462, // ml to pound needs density, simplifying here
            'tbsp': 0.067628,
            'tsp': 0.202884
        },
        'cup': {
            'gram': 240, // 1 US cup to grams (approx for water)
            'ml': 240, // 1 US cup to ml
            'oz': 8,
            'pound': 0.529109, // 1 US cup to pounds (approx for water)
            'tbsp': 16,
            'tsp': 48
        },
        'oz': { // Fluid ounce (US)
            'gram': 29.5735,
            'ml': 29.5735,
            'cup': 0.125,
            'pound': 0.0625, // 1 oz to pound
            'tbsp': 2,
            'tsp': 6
        },
        'pound': {
            'gram': 453.592,
            'ml': 453.592, // Simplifying for water
            'cup': 1.91721, // 1 pound to US cup (approx for water)
            'oz': 16,
            'tbsp': 30.672, // 1 pound to tbsp (approx for water)
            'tsp': 92.016
        },
        'tbsp': { // US Tablespoon
            'gram': 15, // Approx for water
            'ml': 15,
            'cup': 0.0625,
            'oz': 0.5,
            'pound': 0.033069, // Approx for water
            'tsp': 3
        },
        'tsp': { // US Teaspoon
            'gram': 5, // Approx for water
            'ml': 5,
            'cup': 0.0208333,
            'oz': 0.166667,
            'pound': 0.0110231, // Approx for water
            'tbsp': 0.333333
        }
    },
    'digital-data': {
        'bit': {
            'byte': 0.125,
            'kb': 0.0001220703125,
            'mb': 1.1920928955078125e-7,
            'gb': 1.1641532182693481e-10
        },
        'byte': {
            'bit': 8,
            'kb': 0.0009765625,
            'mb': 9.5367431640625e-7,
            'gb': 9.313225746154785e-10
        },
        'kb': { // Kilobyte (KB)
            'bit': 8192,
            'byte': 1024,
            'mb': 0.0009765625,
            'gb': 9.5367431640625e-7
        },
        'mb': { // Megabyte (MB)
            'bit': 8388608,
            'byte': 1048576,
            'kb': 1024,
            'gb': 0.0009765625
        },
        'gb': { // Gigabyte (GB)
            'bit': 8589934592,
            'byte': 1073741824,
            'kb': 1048576,
            'mb': 1024
        }
    },
    'time-zone': {
        // This category will likely involve more complex date/time objects and APIs,
        // so we'll treat it separately later. For now, it will just be a placeholder.
    },
    'engineering': {
        // This will be added later for more advanced conversions
    },
    'currency': {
        // This is a PRO feature and will use external API for real-time rates
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const converterContainer = document.getElementById('converterContainer');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.querySelector('.search-button');

    // Function to sanitize category names for display
    const formatCategoryName = (category) => {
        return category.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
    };

    // Handle navigation item clicks
    navItems.forEach(item => {
        item.addEventListener('click', () => {
            navItems.forEach(nav => nav.classList.remove('active')); // Remove active from all
            item.classList.add('active'); // Add active to clicked
            const category = item.dataset.category;
            loadConverter(category);
        });
    });

    // Handle search input
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    function performSearch() {
        const query = searchInput.value.toLowerCase();
        // Simple search: iterate through nav items and activate if category matches query
        let found = false;
        navItems.forEach(item => {
            const category = item.dataset.category;
            if (category.includes(query) || formatCategoryName(category).toLowerCase().includes(query)) {
                navItems.forEach(nav => nav.classList.remove('active'));
                item.classList.add('active');
                loadConverter(category);
                found = true;
                return; // Exit forEach early if found
            }
        });

        if (!found) {
            converterContainer.innerHTML = `
                <h2 class="category-title">🔍 No results for "${query}"</h2>
                <p>Try a different search term or select a category from the sidebar.</p>
            `;
        }
    }


    // Function to load the appropriate converter UI based on category
    function loadConverter(category) {
        converterContainer.innerHTML = ''; // Clear previous content
        const categoryTitle = formatCategoryName(category);

        // Check for PRO feature
        const isProFeature = document.querySelector(`[data-category="${category}"]`).classList.contains('pro-feature');

        if (isProFeature) {
            converterContainer.innerHTML = `
                <h2 class="category-title">💰 ${categoryTitle} Converter</h2>
                <p>This is a <strong>PRO feature</strong>. Upgrade to unlock advanced conversions and ad-free experience.</p>
                <a href="https://www.buymeacoffee.com/yourusername" target="_blank" class="donate-button upgrade-button" style="margin-top: 20px;">Upgrade to PRO</a>
            `;
        } else if (category === 'cooking') {
            converterContainer.innerHTML = `
                <h2 class="category-title">🍳 Cooking Ingredients</h2>
                <p>Convert common cooking units for water-like substances.</p>
                <div class="converter-form">
                    <div class="input-group">
                        <input type="number" id="cookingInput" value="250" placeholder="Enter value">
                        <select id="cookingUnitFrom">
                            <option value="gram">grams</option>
                            <option value="ml">ml (milliliters)</option>
                            <option value="cup">cups (US)</option>
                            <option value="oz">oz (ounces)</option>
                            <option value="pound">pounds (lb)</option>
                            <option value="tbsp">tbsp (tablespoons)</option>
                            <option value="tsp">tsp (teaspoons)</option>
                        </select>
                    </div>
                    <div class="result-group">
                        <p>Result:</p>
                        <span id="cookingResult">0.00</span>
                        <select id="cookingUnitTo">
                            <option value="ml">ml (milliliters)</option>
                            <option value="gram">grams</option>
                            <option value="cup">cups (US)</option>
                            <option value="oz">oz (ounces)</option>
                            <option value="pound">pounds (lb)</option>
                            <option value="tbsp">tbsp (tablespoons)</option>
                            <option value="tsp">tsp (teaspoons)</option>
                        </select>
                    </div>
                    <p style="font-size:0.8em; color: #666; margin-top:10px;">(Note: Conversions are approximate for general cooking ingredients, similar to water density.)</p>
                </div>
            `;
            // Attach event listeners for cooking converter
            document.getElementById('cookingInput').addEventListener('input', updateCookingConversion);
            document.getElementById('cookingUnitFrom').addEventListener('change', updateCookingConversion);
            document.getElementById('cookingUnitTo').addEventListener('change', updateCookingConversion);
            updateCookingConversion(); // Initial conversion
        } else if (category === 'digital-data') {
             converterContainer.innerHTML = `
                <h2 class="category-title">💾 Digital Data</h2>
                <p>Convert between various digital storage units.</p>
                <div class="converter-form">
                    <div class="input-group">
                        <input type="number" id="digitalDataInput" value="1024" placeholder="Enter value">
                        <select id="digitalDataUnitFrom">
                            <option value="byte">Bytes</option>
                            <option value="bit">Bits</option>
                            <option value="kb">Kilobytes</option>
                            <option value="mb">Megabytes</option>
                            <option value="gb">Gigabytes</option>
                        </select>
                    </div>
                    <div class="result-group">
                        <p>Result:</p>
                        <span id="digitalDataResult">0.00</span>
                        <select id="digitalDataUnitTo">
                            <option value="kb">Kilobytes</option>
                            <option value="byte">Bytes</option>
                            <option value="bit">Bits</option>
                            <option value="mb">Megabytes</option>
                            <option value="gb">Gigabytes</option>
                        </select>
                    </div>
                </div>
            `;
            document.getElementById('digitalDataInput').addEventListener('input', updateDigitalDataConversion);
            document.getElementById('digitalDataUnitFrom').addEventListener('change', updateDigitalDataConversion);
            document.getElementById('digitalDataUnitTo').addEventListener('change', updateDigitalDataConversion);
            updateDigitalDataConversion(); // Initial conversion
        }
        else {
            converterContainer.innerHTML = `
                <h2 class="category-title">${categoryTitle} Converter</h2>
                <p>This converter for ${categoryTitle} is under development. Stay tuned!</p>
            `;
        }
    }

    // --- Conversion Logic Functions ---

    function updateCookingConversion() {
        const inputVal = parseFloat(document.getElementById('cookingInput').value);
        const unitFrom = document.getElementById('cookingUnitFrom').value;
        const unitTo = document.getElementById('cookingUnitTo').value;
        const resultSpan = document.getElementById('cookingResult');
        const category = 'cooking';

        if (isNaN(inputVal) || inputVal < 0) {
            resultSpan.textContent = '0.00';
            return;
        }

        let result = 0;
        if (unitFrom === unitTo) {
            result = inputVal;
        } else if (unitData[category] && unitData[category][unitFrom] && unitData[category][unitFrom][unitTo]) {
            result = inputVal * unitData[category][unitFrom][unitTo];
        } else {
             // Fallback for missing direct conversion, try via a common base (e.g., gram)
            const commonBaseUnit = 'gram';
            let valueInBase = inputVal;

            if (unitFrom !== commonBaseUnit && unitData[category][unitFrom] && unitData[category][unitFrom][commonBaseUnit]) {
                valueInBase = inputVal * unitData[category][unitFrom][commonBaseUnit];
            } else if (unitFrom !== commonBaseUnit) {
                 // Try converting from base to 'from' if direct 'from' to base is missing
                 // This path is less ideal as it assumes bidirectional data
                 if(unitData[category][commonBaseUnit] && unitData[category][commonBaseUnit][unitFrom]) {
                      valueInBase = inputVal / unitData[category][commonBaseUnit][unitFrom];
                 } else {
                      console.error(`No path from ${unitFrom} to ${commonBaseUnit} in ${category} category`);
                      resultSpan.textContent = 'Error'; return;
                 }
            }
            
            if (unitData[category][commonBaseUnit] && unitData[category][commonBaseUnit][unitTo]) {
                result = valueInBase * unitData[category][commonBaseUnit][unitTo];
            } else if (unitTo !== commonBaseUnit && unitData[category][unitTo] && unitData[category][unitTo][commonBaseUnit]) {
                // If conversion to common base exists, but not from common base to 'to'
                // This means 'to' unit is in our data, convert from base to 'to'
                result = valueInBase / unitData[category][unitTo][commonBaseUnit];
            } else if (unitTo === commonBaseUnit) {
                result = valueInBase;
            }
            else {
                console.error(`Missing conversion data for ${unitTo} from ${commonBaseUnit} in ${category} category`);
                result = 0;
            }
        }
        
        resultSpan.textContent = result.toFixed(result > 1000 || result < 0.01 && result !== 0 ? 3 : 2); // More precision for small/large numbers
    }

    function updateDigitalDataConversion() {
        const inputVal = parseFloat(document.getElementById('digitalDataInput').value);
        const unitFrom = document.getElementById('digitalDataUnitFrom').value;
        const unitTo = document.getElementById('digitalDataUnitTo').value;
        const resultSpan = document.getElementById('digitalDataResult');
        const category = 'digital-data';

        if (isNaN(inputVal) || inputVal < 0) {
            resultSpan.textContent = '0.00';
            return;
        }

        let result = 0;
        if (unitFrom === unitTo) {
            result = inputVal;
        } else if (unitData[category] && unitData[category][unitFrom] && unitData[category][unitFrom][unitTo]) {
            result = inputVal * unitData[category][unitFrom][unitTo];
        } else {
             // Fallback for missing direct conversion, try via a common base (e.g., bit or byte)
            const commonBaseUnit = 'byte'; // Using byte as a common base for digital data
            let valueInBase = inputVal;

            // Convert 'from' unit to base unit
            if (unitFrom !== commonBaseUnit && unitData[category][unitFrom] && unitData[category][unitFrom][commonBaseUnit]) {
                valueInBase = inputVal * unitData[category][unitFrom][commonBaseUnit];
            } else if (unitFrom !== commonBaseUnit && unitData[category][commonBaseUnit] && unitData[category][commonBaseUnit][unitFrom]) {
                valueInBase = inputVal / unitData[category][commonBaseUnit][unitFrom];
            } else if (unitFrom !== commonBaseUnit) {
                 console.error(`No path from ${unitFrom} to ${commonBaseUnit} in ${category} category`);
                 resultSpan.textContent = 'Error'; return;
            }

            // Convert from base unit to 'to' unit
            if (unitData[category][commonBaseUnit] && unitData[category][commonBaseUnit][unitTo]) {
                result = valueInBase * unitData[category][commonBaseUnit][unitTo];
            } else if (unitTo !== commonBaseUnit && unitData[category][unitTo] && unitData[category][unitTo][commonBaseUnit]) {
                result = valueInBase / unitData[category][unitTo][commonBaseUnit];
            } else if (unitTo === commonBaseUnit) {
                result = valueInBase;
            }
            else {
                console.error(`Missing conversion data for ${unitTo} from ${commonBaseUnit} in ${category} category`);
                result = 0;
            }
        }
        
        resultSpan.textContent = result.toFixed(result > 1000 || result < 0.01 && result !== 0 ? 3 : 2);
    }


    // Initial load for the default category (e.g., 'cooking')
    // This is now handled by hardcoding the cooking converter into index.html for simplicity.
    // So, we just ensure event listeners are attached and an initial conversion runs.
    if (document.getElementById('cookingInput')) {
        document.getElementById('cookingInput').addEventListener('input', updateCookingConversion);
        document.getElementById('cookingUnitFrom').addEventListener('change', updateCookingConversion);
        document.getElementById('cookingUnitTo').addEventListener('change', updateCookingConversion);
        updateCookingConversion(); // Initial conversion
    }
    
    // Placeholder for "Upgrade to PRO" button click
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('upgrade-button')) {
            alert('Redirecting to PRO upgrade page! (e.g., Buy Me a Coffee or your payment link). You can customize this link.');
            // window.open('https://www.buymeacoffee.com/yourusername', '_blank'); // Uncomment and change link
        }
    });
});