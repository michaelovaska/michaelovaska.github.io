
var templateSource = document.getElementById('example').innerHTML;

var template = Handlebars.compile(templateSource);

var resultsPlaceholder = document.getElementById('handle');

var data =

{infographics: 
	
[{"image":"deutsche.jpg","alt":"Deutsche Bank's shares have fallen while the cost of credit-default swaps has climbed"},
{"image":"swedmig.jpg","alt":"New asylum applicants to Sweden and the rest of Europe"},
{"image":"eurodisney.jpg","alt":"Walt Disney's shares have made strong gains, particularly in recent years, but Euro Disney shares have lost almost all their value since launch."},
{"image":"asylumApplications.svg","alt":"Number of aslyum applicants to EU countries"},
{"image":"euTrade.svg","alt":"A growing trade surplus has propped up eurozone growth while domestic demand has contributed little"},
{"image":"ukBudget.svg","alt":"U.K. public-sector net borrowing as a percentage of GDP"},
{"image":"grbanks.jpg","alt":"Greek central bank lending"},
{"image":"euTelecoms.svg","alt":"Selected European telecom and cable acquisitions since 2013, broken down by acquirer and market"},
{"image":"nokiaTree.svg","alt":"Nokia's acquisition of Alcatel-Lucent will create a new global networking behemoth"},
{"image":"ScotPollMobile.svg","alt":"Scottish referendum poll chart"},
{"image":"manu.jpg","alt":"Outcome of Premier League games in which teams trailed after 80 minutes since the ’92-92 season"},
{"image":"germanyProperty.jpg","alt":"Price-to-rent rations in different countries"},
{"image":"bondItaly.jpg","alt":"Italian bond yields chart"},
{"image":"Rajoy.png","alt":"Photo of Rajoy graphic of Spain’s unemployment and bond yields"},
{"image":"ecbText.jpg","alt":"Photos of Trichet’s possible replacements and quotes"},
{"image":"franceVote.jpg","alt":"French election poll chart"},
{"image":"rugbyCup.jpg","alt":"Graphic of Rugby World Cup predictions"},
{"image":"quotesBW.jpg","alt":"photos of European politicians and quotes"},
{"image":"marketsUkraine.jpg","alt":"Photo of Putin and chart of market’s reactions"},
{"image":"goldenDawn.jpg","alt":"Approval rates for Greece’s Golden Dawn"},
{"image":"spainBonds.jpg","alt":"Spanish bond yields"},
{"image":"worldcupPreview.jpg","alt":"2014 World Cup qualifying countries graphic"},
{"image":"ecbTrichet.jpg","alt":"Photo of Trichet and European stock market charts"},
{"image":"Dow.jpg","alt":"DJIA chart"},
{"image":"euroStocks.jpg","alt":"Market reactions and photos"},
{"image":"ecbRate.jpg","alt":"ECB’s refinancing rate chart"}],

interactives:

[{"image":"brexit.jpg","alt":"U.K. Brexit Referendum","caption":"","link":"http://graphics.wsj.com/brexit/","imageMobile":null},
{"image":"commods.jpg","alt":"The Commodities Super Slump","caption":"","link":"http://graphics.wsj.com/commodities-super-slump/","imageMobile":null},
{"image":"serena.jpg","alt":"Serena Williams: Pursuite of Grand Slam titles","caption":"SERENA'S QUEST: I worked on all aspects of this project starting with conception, research and following through with designing and coding the D3 javascript charts.","link":"http://graphics.wsj.com/serena-williams-quest/","imageMobile":null},
{"image":"epl.jpg","alt":"English Premier League","caption":"MANAGER'S GRAVEYARD: Working with a large, uncoventional dataset, I created a visualiation for the turnover of English Premier League managers first as a static concept in Illustrator and then coding the design in html and css. While a developer concentrated on feeding data to the design, I researched and edited the photos.","link":"http://graphics.wsj.com/english-premier-league-managers-graveyard/","imageMobile":null},
{"image":"syria-talks.jpg","alt":"Negotiating Syria","caption":"","link":"http://graphics.wsj.com/syria-talks-2016/","imageMobile":null},
{"image":"saudimarkets.jpg","alt":"Saudi Arabia's Stock Market","caption":"","link":"http://graphics.wsj.com/saudi-stock-market-to-open/","imageMobile":null},
{"image":"greekPoll.svg","alt":"Greek election poll charts","caption":"Greek Election: A Shifting Landscape. Static SVG graphics I designed nad then integrated into a bootstrap template","link":"http://graphics.wsj.com/greek-polls-jan-2015/","imageMobile":null},
{"image":"eurovision.jpg","alt":"Eurovision: Unrequited Love","caption":"UNREQUITED LOVE: This was my first coding project and it was completed as part of my front-end web development class. I researched decades of Eurovision statistics, calculated average votes and designed/coded a game that shed light on how different countries voted for each other","link":"http://michaelovaska.github.io/eurovision/","imageMobile":null}],

photoLinks:

[{"image":"lampedusa.jpg","alt":"Photo essay: Migrant journey to Lampedusa","caption":"Photo editing and visual narration","link":"http://graphics.wsj.com/the-crossing/"}
],

photoStatics:

[{"image":"WSJE051114.png","alt":"Front page May 11, 2014","caption":"Photo editing and art direction","link":null},
{"image":"WSJE071114.png","alt":"Front Page July 11, 2014","caption":"Photo editing and art direction","link":null},
{"image":"WSJE090115.png","alt":"Front page Sept. 1, 2015","caption":"Photo editing and art direction","link":null},
{"image":"WSJE121114.png","alt":"Front page December 11, 2014","caption":"Photo editing and art direction","link":null},
{"image":"WSJE20150126.png","alt":"Front page Jan. 25, 2015","caption":"Photo editing and art direction","link":null},
{"image":"egypt.jpg","alt":"Exterior display photo for WSJ's London headquarters","caption":"tk text bout building marketing","link":null},
{"image":"bp.jpg","alt":"Interior display photo for WSJ's London headquarters","caption":"tk text bout building marketing","link":null},
{"image":"turkey.jpg","alt":"Interior display photo for WSJ's London headquarters","caption":"tk text bout building marketing","link":null},
{"image":"twitter.jpg","alt":"Interior display photo for WSJ's London headquarters","caption":"tk text bout building marketing","link":null},
{"image":"zuckerberg.jpg","alt":"Interior display photo for WSJ's London headquarters","caption":"tk text bout building marketing","link":null}],

drawingsTextiles:

[{"image":"color1.JPG"},
{"image":"color2.JPG"},
{"image":"color3.JPG"},
{"image":"color4.JPG"},
{"image":"color6.JPG"},
{"image":"violet_quilt.JPG"}]

};

 
resultsPlaceholder.innerHTML = template(data);

 