<script type="text/javascript">
    $(document).ready(function () {
        $('#divRss').krstFeed({
        FeedUrl:'http://www.aftonbladet.se/nyheter/rss.xml',
        MaxCount : 10,
        ShowDesc : true,
        ShowPubDate:true,
        ShowCat: true,
        DescCharacterLimit:10000,
        });
    });
    $(document).ready(function () {
        $('#divRss2').krstFeed({
        FeedUrl:'http://www.svt.se/nyheter/rss.xml',
        MaxCount : 10,
        ShowDesc : true,
        ShowPubDate:true,
        ShowCat: true,
        DescCharacterLimit:10000,
        });
    });

</script>
