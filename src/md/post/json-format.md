---
title: "JSON Submission Details"
date: "2024-11-01"
authors:
  - name: "Abdullah A."
    avatar: "/assets/images/avatar/john-doe.jpg"
tags: ["Announcement", "Tutorial"]
description: "A complete description of JSON format for Task-1: Domains Submission."
---

# Json Format Submission Details

Dear Mates,

As it was discussed earlier in classroom, we need a uniform format to centralize data from every team's submission for Task 1 (i.e., Domains Submission). Following a single format is as important as your participation in this collaborative project. Following is a brief description of how can you format your submission.

## Video Explaination

JSON format is explained in following video for convenience

<video src="/uploads/vid/json-format.mp4" controls>

## Examples

Take a look at schema and complete example below

#### Schema Example

```json
{
  "team_name": "Team Name",
  "members": [
    {
      "id": "F2021376___",
      "name": "Member Name"
    }
  ],
  "domains": [
    {
      "name": "Domain Name",
      "level": "domain-level",
      "aliases": ["another-name-of-domain"],
      "related_to": ["realted-domain-name"],
      "children": ["child-domain-name"]
    }
  ]
}
```

#### Complete Example

```json
{
  "team_name": "Innovators",
  "members": [
    {
      "id": "F2021376001",
      "name": "Jane Doe"
    },
    {
      "id": "F2021376001",
      "name": "Jane Doe"
    },
    {
      "id": "F2021376001",
      "name": "Jane Doe"
    },
    {
      "id": "F2021376001",
      "name": "Jane Doe"
    }
  ],
  "domains": [
    {
      "name": "Information Technology",
      "level": "primary",
      "aliases": ["IT", "Software Engineering"],
      "related_to": ["Telecommunication", "Engineering"],
      "children": ["Software Development", "Cybersecurity", "Artificial Intelligence"]
    },
    {
      "name": "Telecommunication",
      "level": "primary",
      "aliases": [],
      "related_to": [],
      "children": []
    },
    {
      "name": "Engineering",
      "level": "primary",
      "aliases": [],
      "related_to": [],
      "children": []
    },
    {
      "name": "Software Development",
      "level": "sub-domain",
      "aliases": ["App Development"],
      "related_to": ["Artificial Intelligence"],
      "children": ["Website Development", "Game Development", "Mobile App Development", "Desktop App Development", "Hybrid App Development"]
    },
    {
      "name": "Website Development",
      "level": "category",
      "aliases": [],
      "related_to": [],
      "children": ["Laravel Development", "Django App Development", "JavaScript Development"]
    },
    {
      "name": "Game Development",
      "level": "category",
      "aliases": [],
      "related_to": [],
      "children": []
    },
    {
      "name": "Mobile App Development",
      "level": "category",
      "aliases": [],
      "related_to": [],
      "children": []
    },
    {
      "name": "Laravel Development",
      "level": "sub-category",
      "aliases": [],
      "related_to": [],
      "children": []
    }

  ]
}
```

