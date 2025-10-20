// script.js - Universal Convert
console.log("Universal Convert: Script loaded!");

// Basic functionality (will be expanded)
document.addEventListener('DOMContentLoaded', () => {
    const navItems = document.querySelectorAll('.nav-item');
    const converterContainer = document.getElementById('converterContainer');

    navItems.forEach(item => {
        item.addEventListener('click', () => {
            // Remove 'active' class from all items
            navItems.forEach(nav => nav.classList.remove('active'));
            // Add 'active' class to the clicked item
            item.classList.add('active');

            const category = item.dataset.category;
            loadConverter(category);
        });
    });

    // Initial load for the default category (e.g., 'cooking')
    loadConverter('cooking');

    function loadConverter(category) {
        // This is a placeholder. In later steps, we'll load actual converter UI
        converterContainer.innerHTML = `<h2 class="category-title">Loading ${category.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Converter...</h2>
                                        <p>This is where the ${category.replace('-', ' ')} conversion tools will appear.</p>`;
        console.log(`Loading converter for category: ${category}`);

        // TODO: Implement actual logic to load converter HTML/JS for the category
        // For now, let's add a basic cooking converter structure
        if (category === 'cooking') {
            converterContainer.innerHTML = `
                <h2 class="category-title">🍳 Cooking Ingredients</h2>
                <p>Convert common cooking units.</p>
                <div class="converter-form">
                    <div class="input-group">
                        <input type="number" id="cookingInput" value="250" placeholder="Enter value">
                        <select id="cookingUnitFrom">
                            <option value="gram">grams</option>
                            <option value="cup">cups</option>
                            <option value="ml">ml</option>
                        </select>
                    </div>
                    <div class="result-group">
                        <p>Result:</p>
                        <span id="cookingResult">0</span>
                        <select id="cookingUnitTo">
                            <option value="cup">cups</option>
                            <option value="gram">grams</option>
                            <option value="ml">ml</option>
                        </select>
                    </div>
                    <p style="font-size:0.8em; color: #666; margin-top:10px;">(This is a basic placeholder. More units and dynamic conversion will be added.)</p>
                </div>
            `;
            // Basic event listener for cooking converter (will be refined)
            document.getElementById('cookingInput').addEventListener('input', updateCookingConversion);
            document.getElementById('cookingUnitFrom').addEventListener('change', updateCookingConversion);
            document.getElementById('cookingUnitTo').addEventListener('change', updateCookingConversion);
            updateCookingConversion(); // Initial conversion
        } else if (document.querySelector(`[data-category="${category}"]`).classList.contains('pro-feature')) {
             converterContainer.innerHTML = `
                <h2 class="category-title">💰 ${category.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Converter</h2>
                <p>This is a <strong>PRO feature</strong>. Upgrade to unlock advanced conversions and ad-free experience.</p>
                <button class="donate-button" style="margin-top: 20px;">Upgrade to PRO</button>
             `;
        } else {
             converterContainer.innerHTML = `
                <h2 class="category-title">${category.replace('-', ' ').split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')} Converter</h2>
                <p>This converter for ${category.replace('-', ' ')} is under development. Stay tuned!</p>
             `;
        }
    }

    function updateCookingConversion() {
        const inputVal = parseFloat(document.getElementById('cookingInput').value);
        const unitFrom = document.getElementById('cookingUnitFrom').value;
        const unitTo = document.getElementById('cookingUnitTo').value;
        const resultSpan = document.getElementById('cookingResult');

        if (isNaN(inputVal)) {
            resultSpan.textContent = 'Invalid Input';
            return;
        }

        // Very basic placeholder conversion (needs actual unit data and logic)
        let result = inputVal; // Placeholder
        if (unitFrom === 'gram' && unitTo === 'cup') {
            result = inputVal / 240; // Approx for water/general fluid
        } else if (unitFrom === 'cup' && unitTo === 'gram') {
            result = inputVal * 240;
        } else if (unitFrom === 'ml' && unitTo === 'cup') {
            result = inputVal / 240;
        } else if (unitFrom === 'cup' && unitTo === 'ml') {
            result = inputVal * 240;
        } else if (unitFrom === 'gram' && unitTo === 'ml') {
            result = inputVal; // Assuming 1g = 1ml for water
        } else if (unitFrom === 'ml' && unitTo === 'gram') {
            result = inputVal; // Assuming 1ml = 1g for water
        }

        resultSpan.textContent = result.toFixed(2);
    }

    // Placeholder for "Upgrade to PRO" button click
    document.addEventListener('click', (event) => {
        if (event.target.classList.contains('donate-button') && event.target.textContent === 'Upgrade to PRO') {
            alert('Redirecting to PRO upgrade page (e.g., Buy Me a Coffee or your payment link)!');
            // window.open('https://www.buymeacoffee.com/yourusername', '_blank'); // Uncomment and change link
        }
    });
});