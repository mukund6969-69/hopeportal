// Indian States and Cities Data
const statesAndCities = {
    "Andhra Pradesh": ["Visakhapatnam", "Vijayawada", "Guntur", "Nellore", "Kurnool", "Tirupati", "Kakinada", "Rajahmundry", "Kadapa", "Anantapur"],
    "Arunachal Pradesh": ["Itanagar", "Naharlagun", "Pasighat", "Tawang", "Bomdila", "Ziro", "Along", "Tezu", "Daporijo", "Anini"],
    "Assam": ["Guwahati", "Silchar", "Dibrugarh", "Jorhat", "Nagaon", "Tinsukia", "Tezpur", "Barpeta", "Sivasagar", "Karimganj"],
    "Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Arrah", "Begusarai", "Katihar", "Munger", "Chapra"],
    "Chhattisgarh": ["Raipur", "Bhilai", "Bilaspur", "Korba", "Durg", "Raigarh", "Rajnandgaon", "Ambikapur", "Jagdalpur", "Chirmiri"],
    "Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Mormugao", "Bicholim", "Valpoi", "Cuncolim", "Quepem"],
    "Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Gandhinagar", "Junagadh", "Gandhidham", "Anand"],
    "Haryana": ["Faridabad", "Gurgaon", "Panipat", "Ambala", "Yamunanagar", "Rohtak", "Hisar", "Karnal", "Sonipat", "Panchkula"],
    "Himachal Pradesh": ["Shimla", "Mandi", "Solan", "Dharamshala", "Bilaspur", "Kullu", "Chamba", "Una", "Hamirpur", "Nahan"],
    "Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro", "Hazaribagh", "Deoghar", "Giridih", "Ramgarh", "Medininagar", "Hazaribagh"],
    "Karnataka": ["Bangalore", "Mysore", "Hubli", "Mangalore", "Belgaum", "Gulbarga", "Davanagere", "Bellary", "Shimoga", "Tumkur"],
    "Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Thrissur", "Kollam", "Alappuzha", "Palakkad", "Malappuram", "Kannur", "Kottayam"],
    "Madhya Pradesh": ["Indore", "Bhopal", "Jabalpur", "Gwalior", "Ujjain", "Sagar", "Dewas", "Satna", "Ratlam", "Rewa"],
    "Maharashtra": ["Mumbai", "Pune", "Nagpur", "Thane", "Nashik", "Aurangabad", "Solapur", "Amravati", "Kolhapur", "Nanded"],
    "Manipur": ["Imphal", "Thoubal", "Bishnupur", "Churachandpur", "Ukhrul", "Senapati", "Tamenglong", "Chandel", "Jiribam", "Kakching"],
    "Meghalaya": ["Shillong", "Tura", "Jowai", "Nongpoh", "Williamnagar", "Nongstoin", "Baghmara", "Mairang", "Khliehriat", "Resubelpara"],
    "Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Lawngtlai", "Mamit", "Hnahthial", "Saitual"],
    "Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Phek", "Mon", "Kiphire", "Longleng"],
    "Odisha": ["Bhubaneswar", "Cuttack", "Rourkela", "Berhampur", "Sambalpur", "Puri", "Balasore", "Bhadrak", "Baripada", "Jharsuguda"],
    "Punjab": ["Ludhiana", "Amritsar", "Jalandhar", "Patiala", "Bathinda", "Pathankot", "Hoshiarpur", "Moga", "Batala", "Abohar"],
    "Rajasthan": ["Jaipur", "Jodhpur", "Kota", "Bikaner", "Ajmer", "Udaipur", "Bhilwara", "Alwar", "Bharatpur", "Sri Ganganagar"],
    "Sikkim": ["Gangtok", "Namchi", "Mangan", "Gyalshing", "Ravangla", "Singtam", "Rangpo", "Jorethang", "Pelling", "Lachen"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Tiruppur", "Erode", "Vellore", "Thoothukudi"],
    "Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Karimnagar", "Ramagundam", "Khammam", "Mahbubnagar", "Nalgonda", "Adilabad", "Suryapet"],
    "Tripura": ["Agartala", "Udaipur", "Dharmanagar", "Kailashahar", "Belonia", "Khowai", "Teliamura", "Ambassa", "Kumarghat", "Sabroom"],
    "Uttar Pradesh": ["Lucknow", "Kanpur", "Ghaziabad", "Agra", "Varanasi", "Meerut", "Allahabad", "Noida", "Bareilly", "Aligarh"],
    "Uttarakhand": ["Dehradun", "Haridwar", "Roorkee", "Haldwani", "Rudrapur", "Kashipur", "Rishikesh", "Ramnagar", "Pithoragarh", "Almora"],
    "West Bengal": ["Kolkata", "Howrah", "Durgapur", "Asansol", "Siliguri", "Bardhaman", "Malda", "Kharagpur", "Shantiniketan", "Darjeeling"]
};

// Service Type Data
const serviceTypes = {
    "blood": {
        name: "Blood Donation",
        icon: "fa-heartbeat",
        color: "#e74c3c"
    },
    "health": {
        name: "Health Facilities",
        icon: "fa-hospital",
        color: "#3498db"
    },
    "ngo": {
        name: "NGO Support",
        icon: "fa-hands-helping",
        color: "#9b59b6"
    },
    "cloth": {
        name: "Cloth Donation",
        icon: "fa-tshirt",
        color: "#f39c12"
    }
};

// DOM Elements
const serviceTypeSelect = document.getElementById('service-type');
const stateSelect = document.getElementById('state-select');
const citySelect = document.getElementById('city-select');
const searchButton = document.querySelector('.search-button');

// Populate Service Types
function populateServiceTypes() {
    Object.entries(serviceTypes).forEach(([value, data]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = data.name;
        serviceTypeSelect.appendChild(option);
    });
}

// Populate States
function populateStates() {
    const states = Object.keys(statesAndCities);
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });
}

// Populate Cities based on selected State
function populateCities(selectedState) {
    citySelect.innerHTML = '<option value="">Select City</option>';
    if (selectedState) {
        const cities = statesAndCities[selectedState];
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    }
}

// Update UI based on selected service type
function updateServiceUI(serviceType) {
    const serviceData = serviceTypes[serviceType];
    if (serviceData) {
        document.documentElement.style.setProperty('--primary-color', serviceData.color);
        // Update other UI elements based on service type
    }
}

// Event Listeners
serviceTypeSelect.addEventListener('change', (e) => {
    updateServiceUI(e.target.value);
});

stateSelect.addEventListener('change', (e) => {
    populateCities(e.target.value);
});

searchButton.addEventListener('click', () => {
    const selectedService = serviceTypeSelect.value;
    const selectedState = stateSelect.value;
    const selectedCity = citySelect.value;
    
    if (!selectedService || !selectedState || !selectedCity) {
        alert('Please select all fields');
        return;
    }
    
    // Here you would typically make an API call to get service centers
    // For now, we'll just show an alert
    const serviceName = serviceTypes[selectedService].name;
    alert(`Searching for ${serviceName} in ${selectedCity}, ${selectedState}...`);
});

// Contact Form Handling
const contactForm = document.getElementById('contactForm');
const ratingForm = document.getElementById('ratingForm');
const starRating = document.querySelectorAll('.star-rating i');
const ratingValue = document.getElementById('ratingValue');

// Initialize rating value
let currentRating = 0;

// Star Rating Interaction
starRating.forEach(star => {
    star.addEventListener('click', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        currentRating = rating;
        ratingValue.value = rating;
        
        // Update star colors
        starRating.forEach((s, index) => {
            if (index < rating) {
                s.classList.add('active');
            } else {
                s.classList.remove('active');
            }
        });
    });

    // Hover effect
    star.addEventListener('mouseover', () => {
        const rating = parseInt(star.getAttribute('data-rating'));
        starRating.forEach((s, index) => {
            if (index < rating) {
                s.style.color = '#ffd700';
            }
        });
    });

    star.addEventListener('mouseout', () => {
        starRating.forEach((s, index) => {
            if (index >= currentRating) {
                s.style.color = '#ddd';
            }
        });
    });
});

// Contact Form Submission
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your message! We will get back to you soon.');
    contactForm.reset();
});

// Rating Form Submission
ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const formData = new FormData(ratingForm);
    const data = Object.fromEntries(formData.entries());
    
    if (!data.rating) {
        alert('Please select a rating');
        return;
    }
    
    // Here you would typically send the data to a server
    // For now, we'll just show a success message
    alert('Thank you for your feedback! Your rating has been recorded.');
    ratingForm.reset();
    
    // Reset star rating
    currentRating = 0;
    starRating.forEach(star => {
        star.classList.remove('active');
        star.style.color = '#ddd';
    });
});

// Scroll Animation Functionality
document.querySelectorAll('[data-scroll]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = button.getAttribute('data-scroll');
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for Info Sections
const infoSections = document.querySelectorAll('.info-section');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {
    threshold: 0.1
});

infoSections.forEach(section => {
    observer.observe(section);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateServiceTypes();
    populateStates();
    
    // Add animation to service cards
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 1s ease ${index * 0.2}s`;
        card.style.opacity = '0';
        card.style.animationFillMode = 'forwards';
    });
    
    // Add animation to stats cards
    const statCards = document.querySelectorAll('.stat-card');
    statCards.forEach((card, index) => {
        card.style.animation = `fadeInUp 1s ease ${index * 0.2}s`;
        card.style.opacity = '0';
        card.style.animationFillMode = 'forwards';
    });
    
    // Add scroll animation
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });
    
    document.querySelectorAll('.step').forEach(step => {
        observer.observe(step);
    });
    
    // Add animation to contact and rating sections
    const contactSection = document.querySelector('.contact-section');
    const ratingSection = document.querySelector('.rating-section');
    
    observer.observe(contactSection);
    observer.observe(ratingSection);
    
    // Add smooth scroll to all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}); 