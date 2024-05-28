document.addEventListener('DOMContentLoaded', () => {
    const timeline = document.getElementById('timeline');
    const content = document.getElementById('content');

    const people = [
       {
            "full_name": "Johann Sebastian Bach",
            "wikipedia_link": "https://en.wikipedia.org/wiki/Johann_Sebastian_Bach",
            "born_date": "1685-03-31",
            "death_date": "1750-07-28",
            "country_of_citizenship": "Germany",
            "category": "Musician"
        },
        {
            "full_name": "Arthur Schopenhauer",
            "wikipedia_link": "https://en.wikipedia.org/wiki/Arthur_Schopenhauer",
            "born_date": "1788-02-22",
            "death_date": "1860-09-21",
            "country_of_citizenship": "Germany",
            "category": "Philosopher"
        },
        {
            "full_name": "David Hume",
            "wikipedia_link": "https://en.wikipedia.org/wiki/David_Hume",
            "born_date": "1711-05-07",
            "death_date": "1776-08-25",
            "country_of_citizenship": "Scotland",
            "category": "Philosopher"
        },
        {
            "full_name": "Joseph Campbell",
            "wikipedia_link": "https://en.wikipedia.org/wiki/Joseph_Campbell",
            "born_date": "1904-03-26",
            "death_date": "1987-10-30",
            "country_of_citizenship": "United States",
            "category": "Mythologist"
        },
    {
        "full_name": "Albert Einstein",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Albert_Einstein",
        "born_date": "1879-03-14",
        "death_date": "1955-04-18",
        "country_of_citizenship": "Germany (until 1896), Stateless (1896–1901), Switzerland (1901–1955), United States (1940–1955)",
        "category": "Physicist"
    },
    {
        "full_name": "Lev Nikolayevich Tolstoy",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Leo_Tolstoy",
        "born_date": "1828-09-09",
        "death_date": "1910-11-20",
        "country_of_citizenship": "Russian Empire",
        "category": "Writer"
    },
    {
        "full_name": "Roland Gérard Barthes",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Roland_Barthes",
        "born_date": "1915-11-12",
        "death_date": "1980-03-26",
        "country_of_citizenship": "France",
        "category": "Literary theorist, philosopher"
    },
    {
        "full_name": "Karl Heinrich Marx",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Karl_Marx",
        "born_date": "1818-05-05",
        "death_date": "1883-03-14",
        "country_of_citizenship": "Kingdom of Prussia (now Germany), United Kingdom",
        "category": "Philosopher, economist, historian, sociologist, political theorist"
    },
    {
        "full_name": "Carl Gustav Jung",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Carl_Jung",
        "born_date": "1875-07-26",
        "death_date": "1961-06-06",
        "country_of_citizenship": "Switzerland",
        "category": "Psychiatrist, psychoanalyst"
    },
    {
        "full_name": "Sigmund Freud",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Sigmund_Freud",
        "born_date": "1856-05-06",
        "death_date": "1939-09-23",
        "country_of_citizenship": "Austrian Empire (now Czech Republic), Austria",
        "category": "Neurologist, psychoanalyst"
    },
    {
        "full_name": "Wilhelm Richard Wagner",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Richard_Wagner",
        "born_date": "1813-05-22",
        "death_date": "1883-02-13",
        "country_of_citizenship": "Kingdom of Saxony (now Germany), Switzerland",
        "category": "Composer, conductor, theater director, essayist"
    },
    {
        "full_name": "Friedrich Nietzsche",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Friedrich_Nietzsche",
        "born_date": "1844-10-15",
        "death_date": "1900-08-25",
        "country_of_citizenship": "Kingdom of Prussia (now Germany)",
        "category": "Philosopher, cultural critic, poet, philologist"
    },
    {
        "full_name": "Simone de Beauvoir",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Simone_de_Beauvoir",
        "born_date": "1908-01-09",
        "death_date": "1986-04-14",
        "country_of_citizenship": "France",
        "category": "Writer, philosopher, feminist, political activist"
    },
    {
        "full_name": "Jean-Paul Sartre",
        "wikipedia_link": "https://en.wikipedia.org/wiki/Jean-Paul_Sartre",
        "born_date": "1905-06-21",
        "death_date": "1980-04-15",
        "country_of_citizenship": "France",
        "category": "Philosopher, playwright, novelist, political activist, literary critic, biographer, and literary journalist"
    },
    ];

    const birthYears = people.map(person => new Date(person.born_date).getFullYear());
    const deathYears = people.map(person => new Date(person.death_date).getFullYear());
    const earliestYear = Math.min(...birthYears);
    const latestYear = Math.max(...deathYears);

    const yearRange = latestYear - earliestYear;

    // Set grid template rows for the timeline
    timeline.style.gridTemplateRows = `repeat(${yearRange}, 1fr)`;

    // Generate the HTML for each person
    people.forEach(person => {
        const personDiv = document.createElement('div');
        personDiv.classList.add('person');

        const nameLink = document.createElement('a');
        nameLink.classList.add('name');
        nameLink.textContent = person.full_name;
        nameLink.href = person.wikipedia_link;
        nameLink.target = '_blank';

        const detailsDiv = document.createElement('div');
        detailsDiv.classList.add('details');
        detailsDiv.innerHTML = `${person.born_date}<br>${person.death_date}<br>${person.country_of_citizenship}<br>${person.category}`;

        personDiv.appendChild(nameLink);
        personDiv.appendChild(detailsDiv);

        // Calculate grid row based on birth and death years
        const birthYear = new Date(person.born_date).getFullYear();
        const deathYear = new Date(person.death_date).getFullYear();
        const startRow = birthYear - earliestYear;
        const endRow = deathYear - earliestYear + 1;

        personDiv.style.gridRow = `${startRow + 1} / span ${endRow - startRow}`;

        // Add click event to the entire person box
        personDiv.addEventListener('click', () => {
            window.open(person.wikipedia_link, '_blank');
        });

        timeline.appendChild(personDiv);
    });
});
