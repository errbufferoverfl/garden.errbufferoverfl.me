import os
from bs4 import BeautifulSoup

# Path to the rendered "About Me" page (adjust this based on your site's structure)
about_me_page = "index.html"

def add_rel_me_to_links(file_path):
    # Check if the file exists
    if not os.path.exists(file_path):
        print(f"File {file_path} not found.")
        return

    # Open and parse the HTML file
    with open(file_path, 'r', encoding='utf-8') as file:
        soup = BeautifulSoup(file, 'html.parser')

    # Find all <a> tags with class="about-link"
    for link in soup.find_all('a', href=True, class_='about-link'):
        # Check if the 'rel' attribute exists
        if 'rel' in link.attrs:
            current_rel = link['rel']
            # Ensure 'current_rel' is treated as a string (it can sometimes be a list in BeautifulSoup)
            if isinstance(current_rel, list):
                current_rel = " ".join(current_rel)
            # Add "me" if it's not already there
            if "me" not in current_rel.split():
                link['rel'] = f"{current_rel} me".strip()
        else:
            # If no 'rel' attribute exists, add it with "me"
            link['rel'] = "me"

    # Write the modified HTML back to the file
    with open(file_path, 'w', encoding='utf-8') as file:
        file.write(str(soup))

# Apply the script to the "About Me" page
add_rel_me_to_links(about_me_page)
