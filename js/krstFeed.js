(function ($) {
    // inställningar för scriptet. Här kan man ändra hur många nyheter man vill se varje gång scriptet laddas, om man vill ha en kort beskrivande text, om man vill se publikationsdatumet (om den finns med i queryn) och vad som händer när man klickar på en länk. Detta är default inställningar om inget annat anges.
    $.fn.krstFeed = function (opt) {
        var def = $.extend({
            MaxCount: 5,
            ShowDesc: true,
            ShowPubDate: true,
            ShowCat: true,
            DescCharacterLimit: 200,
            TitleLinkTarget: "_blank",
            MaxHeight: 500,
        }, opt);

        var id = $(this).attr("id"), i, s = "", dt;
        $("#" + id).empty();
        if (def.FeedUrl == undefined) return;

        var YQLstr = 'SELECT channel.item FROM feednormalizer WHERE output="rss_2.0" AND url ="' + def.FeedUrl + '" LIMIT ' + def.MaxCount;
// encodeURIComponent används för att koda URLen till en URI. URLen från t.ex %3 istället för ?
// Behövs för att man ska kunna skicka in URLen i yahoos API.

        $.ajax({
            url: "https://query.yahooapis.com/v1/public/yql?q=" + encodeURIComponent(YQLstr) + "&format=json&diagnostics=false&callback=?",
            dataType: "json",
            success: function (data) {
                $("#" + id).empty();
                if (!(data.query.results.rss instanceof Array)) {
                    data.query.results.rss = [data.query.results.rss];
                }
                // RegEx för att få någon form av titel på feed fönstret...samt för att fixa ALL JÄVLA MONGO KOD som används inom området RSS.......aftonbladet vägrar lägga hela URLen i datan jag fetchar.
                var fo = new RegExp("\(http(s)?:\/\/)?(www\.)[a-zA-Z0-9]*.[a-z]*[^\/]")
                var text = data.query.meta.url.id


                $.each(data.query.results.rss, function (e, itm) {
                    //det svåraste med hela projektet kommer här under. Att få tiden att visa sig vid artiklarna. Inte alla RSSer skickar med publikationsdatumet.
                    var date = new Date(itm.channel.item.date);

                    //if satts för att aftonbladet är klåpare och lata AS
                    if (itm.channel.item.link.startsWith("http") == true){

                    s += '<li><div class="itemTitle"><a href="' + itm.channel.item.link + '" target="' + def.TitleLinkTarget + '" >' + itm.channel.item.title + '</a></div>';
                }
                else {
                    s += '<li><div class="itemTitle"><a href="' + text.match(fo)[0] + itm.channel.item.link + '" target="' + def.TitleLinkTarget + '" >' + itm.channel.item.title + '</a></div>';                }

                    //visar publikationsdatumet om användaren vill det samt om det finns ett i svaret från källan
                    if (def.ShowPubDate){
                        if (date != "Invalid Date"){
                        s += '<div class="pubDate">';
                        s += date.toLocaleString();
                        s += '</div>';
                        }
                    }
                    //visar kategorin på nyheten om något sådant finns i svaret från källan
                    if (def.ShowCat){
                        if (itm.channel.item.category != null){
                        s += '<div class="category">';
                        s += itm.channel.item.category.toUpperCase();
                        s += '</div>';
                        }
                    }

                    //visar en kort sammanfattning och/eller bild av nyheten om sådan finns från källan
                    if (def.ShowDesc) {
                        if (itm.channel.item.description != null){
                        s += '<div class="itemContent">';
                         if (def.DescCharacterLimit > 0 && itm.channel.item.description.length > def.DescCharacterLimit) {
                            s += itm.channel.item.description.substring(0, def.DescCharacterLimit) + '...';
                        }
                        else {
                            //om antal tecken jag anger räcker för att visa hela description
                            s += itm.channel.item.description;
                         }
                         s += '</div>';
                    }
                    else {
                        s += '<div class="itemContent">';
                        s += "Hittade tyvärr ingen kort beskrivande text till artikeln."

                    }
                }
            }
        );
                // lägger alla svar i din div som en lista samt ger en titel till listan.

                $("#" + id).append('<div class="feedHead">' + text.match(fo)[0] + '</div><ul class="krstFeedList" style="height:' + def.MaxHeight + 'px;">' + s + '</ul>');
            }
        });
    };
})(jQuery);
