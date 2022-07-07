
# Meme Generator 😎

Hey guys ;)

I've been practising my react skills with an amazing training you can find right here : <https://scrimba.com/>

Feel free to send me some improvements or impressions 😉

To access the project online, *please visit this URL* : https://tangerine-dolphin-9a9d5e.netlify.app/

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

[![Netlify Status](https://api.netlify.com/api/v1/badges/a6efeab5-d10e-426b-a7b0-37516784e7a5/deploy-status)](https://app.netlify.com/sites/tangerine-dolphin-9a9d5e/deploys)

## Future features

- I'm actually working on a ***download*** button that could finish the project.

- The second thing that i still want to improve is the CSS. Maybe some transitions and animations...

### Wanna get in touch ?

Feel free to contact me on my **LinkedIn** account :  <https://www.linkedin.com/in/pierre-ricard-/>

Or to connect on my **GitHub** account : <https://github.com/Pierre747>
