import superagent from 'superagent';
import cheerio from 'cheerio';

class Crowller {
  private url = "https://weather.goo.ne.jp/weather/division-1/130010/"
  constructor(){
    this.getRawHtml();
  }
  async getRawHtml(){
    const result = await superagent.get(this.url);
    this.getJobInfo(result.text);
  }

  getJobInfo(html:string){
    const $ = cheerio.load(html)
    const jobItems = $('.weatherimg');
    jobItems.map((index, element)=>{
      const companyName = $(element).find('.weather').text();
      console.log(companyName)
    })
  }
}

const crowller = new Crowller()
