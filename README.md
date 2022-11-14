# World Cup Bets

In this project you can bet on football games and check if you are good at guessing the results.

## Features

* Create new user
* Create new match
* Create new bet
* List the 10 most accurate users
* Update bet (delete the older and insert a new bet)
* Delete bet

## Technologies

[![](https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/ee71fcc1aa3d059265517741dffc4161922fd744377e7a5f07c43381d0aa9aac/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f747970657363726970742d2532333030374143432e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d74797065736372697074266c6f676f436f6c6f723d7768697465) [![](https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642)](https://camo.githubusercontent.com/8286a45a106e1a3c07489f83a38159981d888518a740b59c807ffc1b7b1e2f7b/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f657870726573732e6a732d2532333430346435392e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d65787072657373266c6f676f436f6c6f723d253233363144414642) [![](https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465)](https://camo.githubusercontent.com/29e7fc6c62f61f432d3852fbfa4190ff07f397ca3bde27a8196bcd5beae3ff77/68747470733a2f2f696d672e736869656c64732e696f2f62616467652f706f7374677265732d2532333331363139322e7376673f7374796c653d666f722d7468652d6261646765266c6f676f3d706f737467726573716c266c6f676f436f6c6f723d7768697465)

## How to run

1) Clone this repository

```shell
git clone https://github.com/danielpqb/POC-1.git
```

3. Install dependencies

```shell
npm i
```

3. Create .env file (check .env.example)
4. Run project

```shell
npm start
```

## How to use

1. Register yourself on the **/users/new** route.
2. Add future matches on **/matches/new**.
3. Now you can create, update and delete your bets.
4. When you are done, you can get the ranking of the most accurate users.

## Documentation

### POST /users/new

Body:

```json
{
    "name": "Daniel"
}
```

### POST /matches/new

Body:

```json
{
    "team1": "Brazil",
    "team2": "Switzerland"
}
```

### POST /bets/new

Body:

```json
{
    "user_id": 1,
    "match_id": 1,
    "team1_score": 1,
    "team2_score": 2
}
```

### PUT /bets/update

Body:

```json
{
    "id": 1,
    "user_id": 1,
    "match_id": 1,
    "team1_score": 2,
    "team2_score": 0
}
```

### DELETE /bets/delete/:id

Response:

```json
{
    "message": "Bet deleted"
}
```

### GET /users/ranking

Response:

```json
{
    "message": "Top 10 users.",
    "ranking": [
                 {
                   "id": 3,
                   "name": "Daniel",
                   "correct_bets": 6
                 },
                 {
                   "id": 1,
                   "name": "Vanessa",
                   "correct_bets": 2
                 }
               ]

```
