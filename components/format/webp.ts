import cheerio from 'cheerio';

export function formatImg2Webp(text: string): string {
  const $ = cheerio.load(text);

  $('img').each((_, elm) => {
    $(elm).replaceWith(`
    <picture>
      <source srcset="${$(elm)[0].attribs.src}?fm=webp" type="image/webp">
      <img src="${$(elm)[0].attribs.src}">
    </picture>`)
  });

  return $.html()
}