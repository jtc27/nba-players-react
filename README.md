# NBA Player Search React

This is a search app for NBA players.  You can enter a player's name and search for their statistics.  In the picture below a search for "Curry" gives the following results.

<img src="https://raw.githubusercontent.com/jtc27/nba-players-react/main/src/images/github-preview/a.png" height="400">

For player profile images, this API was used: [https://github.com/iNaesu/nba-headshot-api](https://github.com/iNaesu/nba-headshot-api).  You may notice in the picture above only Stephen Curry and brother Seth Curry have photos available.  The other older "Currys" do not have photos available on this API.  When a player's picture is unavailable a generic default image is shown.

The headshot API was last updated for the 2017-2018 season, so some player images will not be current.  For example Lebron James is pictured below in a Cleveland Cavaliers uniform (2017), but as of now (2022) he is a member of the LA Lakers:

<img src="https://raw.githubusercontent.com/jtc27/nba-players-react/main/src/images/github-preview/b.png" height="400">

Besides the photos, all player information is taken from the balldontlie API [https://www.balldontlie.io/](https://www.balldontlie.io/).  It contains player and team statistics from 1979 to the current season.

In the picture above you can see Lebron James' personal statistics for the 2021-22 NBA season.  All of the player info was taken from the API, except PER.  (PER is shown in the orange badge; Lebron's is displayed as 25.35 PER)  

PER (Player Efficiency Rating) is an NBA formula.  This formula takes all of the player's individual statistics and outputs a single value which marks how valuable he is.  It is a complex formula and I used a simplified version of it from here: [https://www.sportsbettingdime.com/guides/how-to/calculate-per/](https://www.sportsbettingdime.com/guides/how-to/calculate-per/).  In basketball PER is sometimes used as an argument for a player's overall value but its usefulness remains debatable. 

There are limitations to the balldontlie API.  Data for players previous to the current generation seems to be nearly non-existent.  Tim Duncan (played 1997-2016) is one of the all-time great players who retired in 2016.  Yet he has no data on this API.

<img src="https://raw.githubusercontent.com/jtc27/nba-players-react/main/src/images/github-preview/c.png" height="350">

Overall, for a free NBA API this one is quite decent and usable.  Perhaps next time I can find a more complete data source and update my app.

The app is deployed at [https://nba-players-react.vercel.app](https://nba-players-react.vercel.app)


## Stack

### Project

| Dependencies  | Description |
| ------------- | ------------- |
|  [Tailwind](https://tailwindcss.com/)  | Tailwind CSS |
|  [daisyUI](https://daisyui.com/)  | daisyUI  |
 





