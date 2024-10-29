---
title: "Project Plan & Journey"
date: "2024-10-22"
authors:
  - name: "Abdullah A."
    avatar: "/assets/images/avatar/john-doe.jpg"
tags: ["Announcement"]
description: "A summary of project's Development Plan"
---

This webpage contains a brief details about project and its journey. After a set of discussions with sir [Dr. Raja Noshad Jamil](/profile/faculity/raja-noshad), following plan is decided:

## Task Breakdown

Project is divided into following two primary phases:

[1. Data Mining, 2. Server Development](/assets/img/content/two-division.png)

1. __Data Mining__: Phase 1 involves dividing, collecting, refining, organizing, centralizing and post-centralization refining of data. It also includes training ai-models to predict/generae responses from queries.
2. __Server Development__: In Phase 2, an app will be developed using collected data and trained model. A final product will be made ready for users.

### 1. Data Mining

This phase will be carried out in first 10 weeks. It involves:
1. Collecting Data from Different Sources (LinkedIn, Published Reports, Available Datasets, Pools, Interviews, etc.)
2. Refining and Cleaning collected data (duplicates, outliars, nulls, noise, etc.)
3. Exporting and submitting collected data in a uniform JSON format (Schema will be provided)
4. Centralizing collected JSON exports to a primary Neo4J graph. It also involves cleaning and processing nodes / edges to ensure integrity of primary graph.
5. Training Models (ML, DL, NLP) that work on collected data and produce desired output.

### 2. Server Develoment

- Developing an app with following skillset:
  - Core (AI Models)
    - Language: Python
    - Dataset: Neo4J
  - Web-Server:
    - Back-End: Laravel
    - Front-End: ReactJS
    - Database: Neo4J
    - Server: InfinityFree (variable)
- "Core" contains AI models executable using workers and Managers. "Server" will use Processes and Queue Scheduling to executing Core/workers using system calls.
- Core members will work on app. Volunteers can participate and will be working close to core-members.


## Defining "Data"

When we say "we need to mine data", it refers to following information:

1. __Domains__: Records of all domains / fields existing for career selection. For example, IT, Business, Medical, Aviation, etc.
2. __Positions__: A big set of all Positions existing in world for every domain. For Example: "Software Engineer", "Accountant", "General Surgeon", "Pilot", etc. It involves adding categories, aliases, levels, salary_range, etc. to all these positions. This is the heart of entire graph.
3. __Skills__: All skills required for every position along with tags for "required", "recommended", "optional", etc.
4. __Studies and Certifications__: All studies and certificates required for a position with similar tags like #3 (Skills)
5. __Tools and Platforms__: Different Applications every domain / position uses in daily life. For example develoeprs use "github", "chatgpt" while designers use "dribbble", "figma", "pinterest", etc.
6. __Pathway__: This involves determining "Who gets promoted to what" for example "Jr. Software Enginer gets Promoted to Sr. Software Engineer" and "Co-Pilots become Pilots". This involves determining "all possible pathways", "estd. time required for transition", "probability changes of transition" for each edge in graph. (Hint: we can get this information from "Work History" of employees from LinkedIn, UpWork, etc.)
7. __Failures and Successes__: Determining "this pathway leads to failure" and "that pathway leads to success". It can be extracted out by digging deeper in #6 (pathway) and #2 (positions).
8. __Communication Style__: There are different terminilogies used in every domain. For examples software engineers say "SEO", "QA", "DevOps" and "repository" in their routine talks. Similarly a doctor may use "ICU", "OT", etc. and a pilots may laugh at "mayday mayday" and "zero altitude" jokes in their chats. (Hint: We can process posts, comments and bios of different people to extract this information)
9. __Personality Assessment__: As our final product will operate like a "chatbot", users will ask and type different messages. On top of that, they are uploading their CVs and sharing portfolio URLs, we can process those "text" to determine user's personality using information we gathered in #8 (Communication Style). We may also use handwriting, facial emotions in video resume, etc. In order to understand this further, two teams will be assigned to meet professional psychiatrists. We shall mark this as "beta functionality" of our app. It will not be included in MVP (Minimal Viable Product).

## Data Sources & Methods

Following are different sources and techniques one can use to extract data

#### Sources

1. Interviews, Appointments and Sessions (Engage in physical communication in community around you. Data collected this way is usually more informative and authentic)
2. Questionaires & Surveys
3. LinkedIn (Messages, Posts, Profiles, Pools, Comments, Jobs)
4. Other Social Media (Reddit, Twitter, Instagram, etc)
5. Freelancing Platofrms: UpWork, Freelancer, Fiverr
6. Job Searching Apps: Google Jobs, Jobee, Rozee, etc.
7. Platforms (github, pinterest, dribbble, etc. See #5 -- Tools and Platforms)
8. Research Papers
9. Publications
10. Available Datasets

#### Methods / Techniques

1. Manually making sheets, graphs or databases
2. Using LLMs to summarize textual contents into CSV export. Remember to review & refine later.
3. Writing Web-Scrapping or Automation scripts for automated data collection (e.g., using requests, BS4, Selenium, xdotool)
4. Using Image-To-Text models

## Application Architecture

There are two main parts of application:
- Core
- Server

#### Core

> A multi-modular architecture with replacable unit modules.

```txtcore/
├── src/
│   ├── models/
│   │  ├── chat/
│   │  │   ├── OpenAI.py
│   │  │   ├── Groq.py
│   │  │   ├── CustomNLP.py
│   │  │   └── __init__.py
│   │  └── skills/
│   │  │   ├── CustomGPTServices.py
│   │  │   ├── AIML.py
│   │  │   ├── HuggingFaceModel.py
│   │  │   └── __init__.py
│   ├── managers/
│   │  ├── ChatManager.py
│   │  ├── SuccessScoreManager.py
│   │  └── SkillsRecommendationManager.py
│   ├── workers/
│   │  ├── chat_worker.py
│   │  ├── success_score_worker.py
│   │  └── skills_recommendation_worker.py
│   ├── util/
│   │  ├── classes/
│   │  │   ├── TTS.py
│   │  │   ├── STT.py
│   │  │   ├── Vision.py
│   │  │   ├── Database2JSON.py
│   │  │   ├── JSON2Database.py
│   │  │   └── __init__.py
│   │  └── functions/
│   │  │   ├── system_call.py
│   │  │   ├── json_request.py
│   │  │   ├── read_file.py
│   │  │   └── __init__.py
│   ├── dist/
│   │  ├── pretrained_models/
│   │  │   ├── YoloV8.pt
│   │  │   ├── custom_model.weights
│   │  │   ├── aiml_skills.brn
│   │  │   └── __init__.py
│   │  ├── career_categories.json
│   │  └── models.json
│   ├── config/
│   │  ├── settings.py.py
│   │  └── database_connection.py
│   ├── .env
│   └── main.py
├── examples/
├── tests/
└── docs/

```

Skillset:
- Python
- Neo4J Graph

Notes:
- We have a __modular-structure__ with __replaceable modules__. This means two models for same purpose can be developed. After develoment we can either "select one and switch other if/when required" or "merge models into another combined module".
- `models`: These are AI Models
- `managers`: They are comprehensive classes for using models
- `workers`: This directory has many executable files organized in sub-directory. Each file representing python-process for one or few api-endpoints.

#### Server

> Runs `core` models. Manages database, jobs and requests.

```txt
server/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── jobs/
│   ├── database/
│   │   ├── migrations/
│   │   └── seeders/
│   ├── views/
│   ├── public/
│   ├── routes/
│   └── .env
└── docs/

```

#### App Dev Tasks

As it is clear in architecture, one can opt out for any of following:
- AI Engineer: Create AI Models using given interface (interface specifies class name and methods that must be exact. Develoer can maky any number of other methods for develoment. Just a few will be specified)
- Laravel Developer: For Backend
- Neo4J Admin: For manaing primary database
- ReactJS Front-End Dev: To design UI

Note: App Development will start from week-11. During week 1 to 10, only AI Models can be developed along-side data collection.

## Repository

A [github organization](https://github.com/umt-dm) is created.
Repositores are created and will be added for course-content, project repository, blog and collected data.

Here's a quick introduction to main repositories:
- [class-project](https://github.com/umt-dm/class-project): This is primary repository where source code of core (ai models), web server and primary graph will be stored. "read access" to this repository will be provided to all mates (share your GH Username with core members). Edit access remains restricted to mates. Only Faculity and core-members can make changes to this respository.
- [course-content](https://github.com/umt-dm/course-content): This repository has study materials for data-mining course.
- [umt-dm.github.io](https://github.com/umt-dm/umt-dm.github.io): It is repository for this blog. access policy for this repository is same as of [class-project](https://github.com/umt-dm/class-project).

#### Collaboration Notes

- Creating Issues and Discussions are allowed. Additional "in-class discussion" and "WA Group" support will be provided (as majurity is infamiliar with GH collaboration methods).
- Forks, pull-requests and merges are allowed to mates or teams assigned specific task
- Branching is restricted
- Credits will be given to collaborating members.

## Timeline

Following is initial timeline for project.
Updated timelines will be poasted with "announcement tag".
Keep checking [Announcements Page](/tag/announcement) for new updates (updated every sunday)

[Project Timeline](/assets/img/content/project-timeline.png)
