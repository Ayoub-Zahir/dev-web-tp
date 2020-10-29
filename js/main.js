// UI Var
const detailFormation = document.querySelectorAll('.detail-formation');
const detailCompetence = document.querySelectorAll('.competence .description');
const evaluation = {
    angular: 4,
    php: 4,
    javaEE: 3,
    firebase: 3,
    git: 4,
    jira: 3
};

// Hide formation details
window.addEventListener('DOMContentLoaded', () => {
    detailFormation.forEach(element => {
        const subTitle = element.parentElement.parentElement.children[1];
        const description = element.parentElement.parentElement.children[2];

        subTitle.style.display = 'none';
        description.style.display = 'none';
    });

    displayStars();
});

// Event handler Question 1
detailFormation.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        const formation = e.target.parentElement.parentElement.parentElement;
        const subTitle = formation.children[1];
        const description = formation.children[2];

        // Show details
        if (window.getComputedStyle(subTitle).display === 'none' && window.getComputedStyle(description).display === 'none') {
            subTitle.style.display = 'block';
            description.style.display = 'block';

            // Change icon
            e.target.className = 'fas fa-angle-up';

            // Check other formation details
            hideDetails(element.parentElement.parentElement);

        } else {
            subTitle.style.display = 'none';
            description.style.display = 'none';

            // Change icon
            e.target.className = 'fas fa-angle-down';
        }
    });
});

const hideDetails = (formation) => {
    detailFormation.forEach(element => {
        const currentFormation = element.parentElement.parentElement;

        if (currentFormation !== formation) {
            const subTitle = currentFormation.children[1];
            const description = currentFormation.children[2];

            if (window.getComputedStyle(subTitle).display === 'block' && window.getComputedStyle(description).display === 'block') {
                subTitle.style.display = 'none';
                description.style.display = 'none';

                // Change icon
                element.firstElementChild.className = 'fas fa-angle-down';
            }
        }
    });
}

// Event handler Question 2
detailCompetence.forEach(element => {
    element.addEventListener('mouseover', (e) => {
        for (let i = 0; i < e.target.children.length; i++) {
            if (e.target.children[i] && e.target.children[i].className === 'tooltip')
                e.target.children[i].style.display = 'block';
        }
    });

    element.addEventListener('mouseout', (e) => {
        for (let i = 0; i < e.target.children.length; i++) {
            if (e.target.children[i] && e.target.children[i].className === 'tooltip')
                e.target.children[i].style.display = 'none';
        }
    });
});

// Event handler Question 3

const displayStars = () => {
    for (const [key, value] of Object.entries(evaluation)) {

        for (let i = 0; i < value; i++) {
            const competence = document.getElementById(key);

            let i = document.createElement('i');

            // Add class name
            i.className = "far fa-star";

            // Append star icon into competence
            competence.appendChild(i);
        }
    }
};