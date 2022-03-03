![Age of Makers Logo](https://github.com/salesforce/ageofmakers/blob/master/images/AoM_Github_Banner.jpg?raw=true)

# Age of Makers (AoM)

Age of Makers is a gamified curriculum empowering educators around the world to inspire youth to become independent learners. Instead of starting with a specific topic, [students are first see the bigger picture. Purpose-based pedagogy.]

![Age of Makers Demo](https://github.com/salesforce/ageofmakers/blob/master/Music%20for%20Change%20Full%20Demo.gif?raw=true)

## Building the Age of Makers game locally

After running a `yarn install`, simply use gulp to compile the game into the `build` folder:
```bash
gulp build # one time build
gulp watch # re-run the build as you're developing on the game and saving file changes
```

*Note: Make sure you've installed gulp globally to be able to run it in the CLI (`npm install -g gulp`)*

### Loading a local Age of Makers Developer Extention in Chrome.

1. In a Chrome browser, navigate to `Chrome Menu > More Tools > Extensions`.

2. Make sure the **Developer Mode** box is checked on the top right.

3. Click **Load unpacked**

4. Select the "build" folder that gets build from gulp in your local github repo.

5. Click on the puzzle icon and the Age of Maker Game will be available there!
