
# Meme Generator 😎

Hey guys ;)

I've been practising my react skills with an amazing training you can find right here : <https://scrimba.com/>

Feel free to send me some improvements or impressions 😉

To access the project online, *please visit this URL* : https://62c5b758c12f750058be1a8f--tangerine-dolphin-9a9d5e.netlify.app/

## The toolBox 🛠️

I've used several react hooks :

- useState
- useEffect

To interact with the state of my app.

I've also done an API fetch request on <https://api.imgflip.com/get_memes> to use their huge database.

To randomize the images, i've simply used a ```Math.random()``` function :

```javascript
function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const { url } = allMemes[randomNumber];
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
```

## Deployment 🛫

To deploy this project i've used <https://www.netlify.com>

## Future features

- I'm actually working on a ***download*** button that could finish the project.

- The second thing that i still want to improve is the CSS. Maybe some transitions and animations...

### Wanna get in touch ?

Feel free to contact me on my **LinkedIn** account :  <https://www.linkedin.com/in/pierre-ricard-/>

Or to connect on my **GitHub** account : <https://github.com/Pierre747>
