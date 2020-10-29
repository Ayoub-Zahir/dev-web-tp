// UI Var
const detailFormation = document.querySelectorAll('.detail-formation');

// Hide formation details
window.addEventListener('DOMContentLoaded', () => {
    detailFormation.forEach(element => {
        const subTitle = element.parentElement.parentElement.children[1];
        const description = element.parentElement.parentElement.children[2];

        subTitle.style.display = 'none';
        description.style.display = 'none';
    });
})

// Event handler
detailFormation.forEach(element => {
    element.addEventListener('click', (e) => {
        e.preventDefault();

        const subTitle = e.target.parentElement.parentElement.parentElement.children[1];
        const description = e.target.parentElement.parentElement.parentElement.children[2];

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