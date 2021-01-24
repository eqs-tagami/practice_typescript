import superagent from 'superagent'

class Crowller {
  private url = "url"
  constructor(){
    this.getRawHtml();
  }
  async getRawHtml(){
    const result = await superagent.get(this.url);
    console.log(result.text)
  }
}

const crowller = new Crowller()