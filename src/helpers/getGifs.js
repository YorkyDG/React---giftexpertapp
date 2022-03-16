

export const getGifs = async( category ) => {
        
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI ( category ) }&limit=10&api_key=FERnSUff8jmE7uRUtez6uP9eV0LOu2Wd`
    const resp = await fetch ( url );
    const { data } = await resp.json();

    const gifs = data.map ( img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })

    return gifs;
}