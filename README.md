krstFeed jQuery RSS/ATOM Feed Plugin
======

jQuery plugin for parsing and displaying RSS and Atom feeds. krstFeed uses **YQL API** to fetch feeds. 

 
## Usage
1- Include jQuery and krstFeed plugin scripts.

     <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
     <script type="text/javascript" src="din sökväg här/krstFeed.js"></script>

2- Add a div for the plugin to your page.

    <div id="divRss"></div>

3- Call the plugin.

**- Basic**

    $('#divRss').krstFeed({
        FeedUrl : 'www.svt.se/nyheter/rss.xml',
      });

**- With Options**

    $('#divRss').krstFeed({
        FeedUrl : 'www.svt.se/nyheter/rss.xml',
        MaxCount : 5,
        ShowDesc : true,
        ShowCat: true,
        ShowPubDate:true,
        DescCharacterLimit:100,
        MaxWidth: 500,
      });




[Plugin Homepage](http://www.student.bth.se/~krst15/dbwebb-kurser/javascript/me/kmom10)

[Demo](http://www.student.bth.se/~krst15/dbwebb-kurser/javascript/me/kmom10/demo.php)
