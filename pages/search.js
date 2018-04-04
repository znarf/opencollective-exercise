export default ({ url: { query: { q } } }) =>

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
        font-size: 18px;
      }
    `}</style>
    <div id="search">
      <form method="GET" action="/search">
        <input type="text" name="q" placeholder={ q }/>
      </form>
      <div id="results">
        <p>No results.</p>
      </div>
    </div>
 </div>
