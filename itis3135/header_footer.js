fetch("nav_main.json")
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        const header = document.querySelector("header");

        // Add the H1 element dynamically at the very top
        const heading = document.createElement("h1");
        heading.textContent = "Grayson Nickel Ghastly Newt || ITIS-3135";
        header.prepend(heading); // Add H1 first

        // Create the navigation menu
        const navContainer = document.createElement("nav");
        navContainer.classList.add("center");
        data.forEach(function(item, index) {
            if (item.isSeparator) {
                const separator = document.createElement("div");
                separator.classList.add("nav-separator");
                navContainer.appendChild(separator);
            } else {
                const link = document.createElement("a");
                link.href = item.url;
                link.textContent = item.name;
                navContainer.appendChild(link);

                if (index < data.length - 1 && !data[index + 1].isSeparator) {
                    const spacer = document.createElement("span");
                    spacer.textContent = " | ";
                    navContainer.appendChild(spacer);
                }
            }
        });

        // Insert the navigation menu right after the H1
        header.insertBefore(navContainer, header.firstChild.nextSibling);
    })
    .catch(function(error) {
        console.error("Error loading navigation:", error);
    });

fetch("nav_footer.json")
    .then(function(response) {
        if (!response.ok) throw new Error("Footer JSON not found");
        return response.json();
    })
    .then(function(data) {
        const footerContainer = document.querySelector("footer");
        data.forEach(function(item) {
            const link = document.createElement("a");
            link.href = item.url;
            link.textContent = item.name;
            footerContainer.appendChild(link);
        });

        const designedBy = document.createElement("p");
        designedBy.innerHTML = `
            Page Designed by 
            <a href="https://nickelwebdevinc.com/index.html">NickelWebDev.inc</a> ©2024 | 
            <i><a href="https://www.freecodecamp.org/certification/Gnickel/responsive-web-design">
                Certified in Responsive Web Design
            </a></i>
        `;
        footerContainer.appendChild(designedBy);
    })
    .catch(function(error) {
        console.error("Error loading footer links:", error);
    });



