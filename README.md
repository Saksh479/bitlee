
# BitLee API

BitLee is a simple URL shortening service that allows users to generate short URLs, redirect users to the original URL, and track the number of clicks.

## Features

Generate a short URL for a given long URL

Redirect users from a short URL to the original URL

Track the number of clicks on each shortened URL

API Endpoints

1. Generate Short URL

Endpoint: POST /url

Request Body:

{
  "url": "https://example.com"
}

Response:

{
    "id": "xjkJOIEB",
    "link": "http://localhost:8001/xjkJOIEB"
}

2. Redirect to Original URL

Endpoint: GET /:id

Description: Redirects the user to the original URL.

Example Request:

GET http://localhost:8001/xjkJOIEB

Response:
Redirects to the original URL.

3. Get URL Analytics

Endpoint: GET /url/analytics/:shortId

Example Request:

GET http://localhost:8001/url/analytics/xjkJOIEB

Response:

{
    "link": "localhost:8001/xjkJOIEB",
    "clicks": 2
}

## Installation

1. Clone the repository:
2. git clone https://github.com/saksh479/bitlee.git
3. cd bitlee
4. Install dependencies:
> npm install
5. Start the server:
> npm start
6. Environment Variables
> Create a .env file and configure MongoDB connection:
MONGO_URI=mongodb://localhost:27017/bitlee


PORT=8001

