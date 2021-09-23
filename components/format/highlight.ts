import cheerio from 'cheerio';
import hljs from 'highlight.js'

export function formatToHightedHtml(text: string): string {
  const $ = cheerio.load(text);
  $('pre code').each((_, elm) => {
    const languageSubset = ['js', 'html']
    const result = hljs.highlightAuto($(elm).text(), languageSubset);
    $(elm).html(result.value);
    $(elm).addClass('hljs');
  });

  return $.html()
}