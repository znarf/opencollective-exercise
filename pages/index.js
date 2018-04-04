export default () =>

  <div>
    <style jsx>{`
      #index {
        width: 400px;
        margin: 100px auto;
      }
      #logo img {
        display: block;
        margin: 50px auto;
      }
      #search input {
        display: block;
        margin: 1em auto;
        padding: 0.5em;
        font-size: 18px;
        border: 1px solid #ccc;
      }
      #search input[type=text] {
        width: 100%;
      }
    `}</style>
    <div id="index">
      <div id="logo">
        <img width="150" height="150" src="https://pbs.twimg.com/profile_images/718469174675177472/f7YQoBux_400x400.jpg"/>
      </div>
      <div id="search">
        <form method="GET" action="/search">
          <input type="text" name="query"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
    </div>
 </div>
