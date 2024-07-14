document.addEventListener('DOMContentLoaded', function() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => {
            const jobListingsContainer = document.getElementById('job-listings');
            const template = document.getElementById('job-template').content;

            data.forEach(job => {
                const jobElement = document.importNode(template, true);

                // Set the job title
                jobElement.querySelector('h5 a').textContent = job.title;
                // Set the company name (assuming it's part of the job data)
                jobElement.querySelector('p.fs-14').textContent = "Creative Agency";
                // Set the location (assuming it's part of the job data)
                jobElement.querySelector('div.mb-2.lg\\:flex p').textContent = "Escondido, California";
                // Set the posted time (assuming it's part of the job data)
                jobElement.querySelector('div.col-span-12.lg\\:col-span-2 p').textContent = "3 min ago";
                // Set the job type (assuming it's part of the job data)
                jobElement.querySelector('span.bg-green-500\\/20').textContent = "Full Time";
                // Set the experience required (assuming it's part of the job data)
                jobElement.querySelector('p.mb-0.text-gray-500.dark\\:text-gray-300').innerHTML = '<span class="font-medium text-gray-900 dark:text-gray-50">Experience :</span> 1 - 2 years';

                jobListingsContainer.appendChild(jobElement);
            });
        })
        .catch(error => console.error('Error fetching jobs:', error));
});
