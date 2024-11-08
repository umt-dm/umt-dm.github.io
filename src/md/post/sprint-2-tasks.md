---
title: "Sprint 2 - Tasks"
date: "2024-11-07"
authors:
  - name: "M Ahmed."
    avatar: "/assets/images/avatar/john-doe.jpg"
tags: ["Announcement"]
description: "A detailed breakdown of Sprint 2 tasks"
---

# Sprint 2 - Tasks

### Development Tasks:

**2.1 Indeed Data Scraping**
- Use Indeed scraping tool to gather LinkedIn profile data.
- Focus on collecting key data fields, and save the raw output as JSON files for further processing.

**2.2 Machine Learning Classifier**
- Use the profile data which is scraped in Task 2.1.
- Classify each profile into specific domains (IT, Aviation) using techniques like cosine similarity or keyword searches for accurate categorization or any better.

**2.3 Neo4j Graph Setup (2 Teams)**
- Work with the JSON data organized by domains from Task 1.
- Set up a local Neo4j graph database to store and visualize domain-specific data.
- Develop a Python script that reads the .JSON files and loads the data into the Neo4j graph structure. (GPT will assist in refining this script over multiple prompts.)

---

### Data Collection Tasks:

**2.4 Job Titles & Descriptions (4 Teams)**
- Identify a wide range of job titles associated with each domain.
- For each job title, research and collect detailed job descriptions (sources may include Google Jobs, Jobee, LinkedIn, etc).

**2.5 Skills Collection (2 Teams)**
- Collect a comprehensive list of relevant skills for each domain identified in Task 1.
- Use available resources such as datasets, repositories, and industry reports (e.g., from GitHub and Kaggle) to ensure completeness.

**Note:-** Submit collected data files in JSON format.