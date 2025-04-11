# Tabernacle School Website

A collaborative project offering students the chance to learn web development fundamentals

## Prerequisites

- Development environment setup
- Git version control basics
- Javascript basics
- Tailwind CSS basics

## Getting Started

1. Clone repo and install dependencies

```
git clone https://github.com/MattPereira/tabernacle-school
cd tabernacle-school/
npm install
```

2. Start server at http://localhost:3000/

```
npm run dev
```

## Development Guide

- Upload images to [cloudinary](https://console.cloudinary.com/console/c-2e398b799f1f1b4c9ec0f4f0f0c90c/media_library/homepage)
- The `data/` directory contains JSON files that control information and images displayed on the side
  - [faculty.json](https://github.com/MattPereira/tabernacle-school/blob/main/data/facility.json)
  - [tuition.json](https://github.com/MattPereira/tabernacle-school/blob/main/data/tuition.json)
  - [facility.json](https://github.com/MattPereira/tabernacle-school/blob/main/data/facility.json)
- The `app/` directory structure controls the routes for pages
  - `/about`
  - `/academics`
  - `/admissions`
- The `components/` directory houses most of the stuff that is displayed on each page
- The `public/` directory contains a bunch of the images, but uploading to cloudinary is preferrable
- Learn a bit about the technology stack
  - Javascript
  - Tailwind
  - DaisyUI
  - Next.js
