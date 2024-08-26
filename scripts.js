function scrollToFactors() {
    document.getElementById('factors-section').scrollIntoView({ behavior: 'smooth' });
}

function updateDescription(factor) {
    const descriptions = {
        'Limited access to reliable transport': 'Transportation issues can make it difficult to stay connected with others...',
        'Family conflict': 'Ongoing disputes within the family can lead to feelings of isolation...',
        'Financial stress': 'Financial difficulties can limit social interactions and increase stress...',
        'Significant life events': 'Major life changes such as loss of a loved one can lead to social withdrawal...',
        'Disability': 'Physical or mental disabilities can create barriers to social participation...',
        'Insecure housing': 'Lack of stable housing can lead to isolation due to frequent moves or unsafe environments...',
        'Low self-esteem': 'Feelings of low self-worth can discourage individuals from engaging with others...',
        'Physical illness': 'Chronic illness can reduce mobility and limit opportunities for social interaction...',
        'Caring responsibilities': 'Caring for others can be demanding and lead to social isolation due to lack of time...'
    };
    document.getElementById('description-box').textContent = descriptions[factor];
}

// Interactive Pie Chart
const ctx = document.getElementById('pieChart').getContext('2d');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Heart Disease', 'Mental Health', 'Dementia'],
        datasets: [{
            data: [30, 30, 40],
            backgroundColor: ['#ff6384', '#36a2eb', '#cc65fe'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: {
                position: 'bottom',
            },
            tooltip: {
                callbacks: {
                    label: function(tooltipItem) {
                        return `${tooltipItem.label}: ${tooltipItem.raw}%`;
                    }
                }
            }
        }
    }
});
