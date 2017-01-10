<?php $title = "Demo"?>
<?php include ("incl/head.php"); ?>
<?php include ("incl/navbar.php"); ?>
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

        $('#divRss2').krstFeed({
        FeedUrl:'http://www.svt.se/nyheter/rss.xml',
        MaxCount : 10,
        ShowDesc : true,
        ShowPubDate:true,
        ShowCat: true,
        DescCharacterLimit:10,
        });

        $('#divRss3').krstFeed({
        FeedUrl:'http://www.aftonbladet.se/nyheter/rss.xml',
        MaxCount : 5,
        ShowDesc : true,
        ShowPubDate:false,
        ShowCat: false,
        DescCharacterLimit:10,
        MaxHeight: 200,
        });

    });

</script>
<div class="feedWrapperDemo">
    <div class="codeSnippetDemo">
    <code><pre>
&lt;script type="text/javascript"&gt;
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
</code></pre>
</div>
<div id="divRss" class="nyhetsContainerDemo"></div>
</div>
<div class="feedWrapperDemo">
<div class="codeSnippetDemo">
<code><pre>
&lt;script type="text/javascript"&gt;
$(document).ready(function () {
    $('#divRss2').krstFeed({
    FeedUrl:'http://www.svt.se/nyheter/rss.xml',
    MaxCount : 10,
    ShowDesc : true,
    ShowPubDate:true,
    ShowCat: true,
    DescCharacterLimit:10,
    });
});
</code></pre>
</div>

<div id="divRss2" class="nyhetsContainerDemo"></div>
</div>
<div class="feedWrapperDemo">
    <div class="codeSnippetDemo">
<code><pre>
&lt;script type="text/javascript"&gt;
$(document).ready(function () {
    $('#divRss3').krstFeed({
    FeedUrl:'http://www.aftonbladet.se/nyheter/rss.xml',
    MaxCount : 5,
    ShowDesc : true,
    ShowPubDate:false,
    ShowCat: false,
    DescCharacterLimit:10,
    MaxHeight: 100,
    });
});
</code></pre>
</div>

<div id="divRss3" class="nyhetsContainerDemo"></div>
</div>
<?php include ("incl/footer.php");?>
