import React from 'react'

import axios from 'axios'

export default class extends React.Component {

  static async getInitialProps({ req, query }) {
    const q = query.q;
    const baseUrl = req.protocol + '://' + req.get('host');
    const response = await axios(`${baseUrl}/api/search?q=${q}`);
    const results = response.data;
    return { q, results }
  }

  render() {
    return (
      <div>
        <style jsx>{`
          #search {
            width: 400px;
            margin: 25px auto;
          }
          form input {
            display: block;
            margin: 1em auto;
            padding: 0.5em;
            font-size: 18px;
            border: 1px solid #ccc;
          }
          form input[type=text] {
            width: 100%;
          }
          #results {
            margin: 1em 0;
            font-family: Sans-serif;
            font-size: 14px;
          }
          #results h3 {
            font-size: 18px;
          }
        `}</style>
        <div id="search">
          <form method="GET" action="/search">
            <input type="text" name="q" placeholder={this.props.q}/>
          </form>
          <div id="results">
            {this.props.results.length == 0 &&
              <p>No results.</p>
            }
            {this.props.results.length > 0 &&
              this.props.results.map((result, i) => <div key={result.id} className="result">
                <h3>{i+1}. <a href={'https://opencollective.com/' + result.slug}>{result.name}</a></h3>
                <p className="mission">{result.mission}</p>
                <div className="links">
                  {result.website &&
                    <div>Website: <a href={result.website}>{result.website}</a></div>
                  }
                  {result.twitterHandle &&
                    <div>Twitter: <a href={'https://twitter.com/' + result.twitterHandle}>{'@' + result.twitterHandle}</a></div>
                  }
                </div>
              </div>)
            }
          </div>
        </div>
     </div>
    )
  }
}
