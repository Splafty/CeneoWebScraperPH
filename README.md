# Ceneo Web Scraper

**A Flask-powered web scraper built with Python**, designed to fetch product reviews from Ceneo.pl, automatically analyze them, and present them in the form of easy-to-read statistics.

---

## 🚀 Launching the Scraper

1. Clone the repository
```
git clone https://github.com/Splafty/CeneoWebScraperPH.git
```
2. Activate the virtual environment
```
py -m venv .venv
.venv/Scripts/activate
```
3. Install required dependencies
```
py -m pip install -r requirements.txt
```
4. Launch using Flask
```
py -m flask run
```
5. Holding CTRL, click on the "http" link provided in console  
(Should look like this: Running on http://127.0.0.1:5000)

## ✨ Using the Scraper

1. Find a product on Ceneo
2. Copy the ID from the URL  
(Example https://www.ceneo.pl/**39562616**?srsltid=A....)
```
39562616
```
3. Go back to the launched website and click on the "Extract" tab
4. Paste the ID in the input field
5. Click "Download Opinions"
6. The statistics will be displayed automatically

(!) You can download and analyze opinions from multiple IDs.  
(!) To download more, navigate to the "Extract" tab and follow the same steps.  
(!) To browse already downloaded ones, navigate to the "Products" tab and click on the link you are interested in.

## 📂 Overview

This project provides a user-friendly web interface to:
- Paste a Ceneo.pl product URL
- Scrape and store multiple reviews
- Display products' basic statistics, star distribution, ratings, pros/cons, and recommendations
- Present the data using charts.js

## 🛠️ Tech Stack

- **HTML** – The structure of the web pages, defining layout and content.
- **CSS** – Styling the interface: colors, fonts, spacing, and layout adjustments.
- **JavaScript** – Used for interactive elements on the frontend, like toggling tabs and dynamic content updates.
- **RWD (Responsive Web Design)** – Ensures the website looks and works well on all screen sizes (desktop, tablet, mobile).
- **Bootstrap** – A CSS framework used to design the UI with already created components.
- **Chart.js** – A JavaScript library used to generate dynamic charts that visualize scraped review data (e.g. stars distribution).
- **Python** – Backend language used for the scraping logic and data processing.
- **Flask** – Python web framework used to serve the app and handle routing between pages.
- **Jinja2** – Templating engine integrated with Flask to render dynamic HTML pages based on data.
- **BeautifulSoup4** – Web scraping library used to extract opinions and metadata from Ceneo product pages.
- **Requests** – Python library used to send HTTP requests to Ceneo and fetch product review pages.
- **Pandas** – Used to structure and process scraped data.
- **Numpy** – Data processing and statistics.

---
