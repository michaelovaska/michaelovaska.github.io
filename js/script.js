
var templateSource = document.getElementById('example').innerHTML;

var template = Handlebars.compile(templateSource);

var resultsPlaceholder = document.getElementById('handle');

var data =

{infographics: 
	
[{"image":"euTelecoms.svg","alt":"Selected European telecom and cable acquisitions since 2013, broken down by acquirer and market"},
{"image":"ScotPollMobile.svg","alt":"Scottish referendum poll chart"},
{"image":"eurodisney.jpg","alt":"Walt Disney's shares have made strong gains, particularly in recent years, but Euro Disney shares have lost almost all their value since launch."},
{"image":"nokiaTree.svg","alt":"Nokia's acquisition of Alcatel-Lucent will create a new global networking behemoth"},
{"image":"ukBudget.svg","alt":"U.K. public-sector net borrowing as a percentage of GDP"},
{"image":"asylumApplications.svg","alt":"Number of aslyum applicants to EU countries"},
{"image":"euTrade.svg","alt":"A growing trade surplus has propped up eurozone growth while domestic demand has contributed little"},
{"image":"manu.jpg","alt":"Outcome of Premier League games in which teams trailed after 80 minutes since the ’92-92 season"},
{"image":"grbanks.jpg","alt":"Greek central bank lending"},
{"image":"deutsche.jpg","alt":"Deutsche Bank's shares have fallen while the cost of credit-default swaps has climbed"},
{"image":"swedmig.jpg","alt":"New asylum applicants to Sweden and the rest of Europe"},
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
[{"image":"brexit.jpg","subhead":"U.K.’s ‘Brexit’ Referendum","caption":"For this developing interactive Brexit package, I collaborated with reporters and editors to illustrate the current British sentiment and the economic ties between the U.K. and EU. I analysed, designed and coded all the charts in the package. I’m particularly proud of my analysis of British opinion polls and visualisation of both the scattered results of the different poling agencies and the trend of the moving average.","alt":"U.K.’s ‘Brexit’ Referendum","link":"http://graphics.wsj.com/brexit/"},
{"image":"commods.jpg","subhead":"The Commodities Super Slump","caption":"Working with closely reporters and editors to understand China’s impact on the commodity market, I analyzed a host of data to cleanly and clearly present the shifting imbalance of supply and demand through a series of D3-generated charts","alt":"The Commodities Super Slump","link":"http://graphics.wsj.com/commodities-super-slump/"},
{"image":"serena.jpg","subhead":"Serena Williams: Pursuite of Grand Slam titles","caption":"For my first project utilzing the data-drive javascript library D3.js, I worked on all aspects of this graphic starting with conception, research, data analysis, design and coding.","alt":"Serena Williams: Pursuite of Grand Slam titles","link":"http://graphics.wsj.com/serena-williams-quest/"},
{"image":"epl.jpg","subhead":"The English Premier League: A Manager’s Graveyard","caption":"Working with a large and unconventional dataset, I created a unique visualization for the turnover of English Premier League managers first as a static concept and then coding the design into html and css. While a developer concentrated on feeding the complicated data to the design, I researched and edited photos.","alt":"The English Premier League: A Manager’s Graveyard","link":"http://graphics.wsj.com/english-premier-league-managers-graveyard/"},
{"image":"syria-talks.jpg","subhead":"Negotiating Syria","caption":"Collaborating with reporters, editors, a cartographer and a photo editor, I organized and project-managed the different elements, bringing it all together into a clean online layout.","alt":"Negotiating Syria","link":"http://graphics.wsj.com/syria-talks-2016/"},
{"image":"saudimarkets.png","subhead":"Saudi Arabia in the Spotlight as Market Opens to Foreigners","caption":"For this assignment on the Saudi Tadawul stock market, I designed a series of Adobe Illustrator charts and integrated those into an online presentation.","alt":"Saudi Arabia in the Spotlight as Market Opens to Foreigners","link":"http://graphics.wsj.com/saudi-stock-market-to-open/"},
{"image":"greekPoll.svg","subhead":"Greek Election: A Shifting Landscape","caption":"Static SVG graphics designed in Adobe illustrator and then integrated into a bootstrap template.","alt":"Greek Election: A Shifting Landscape","link":"http://graphics.wsj.com/greek-polls-jan-2015/"},
{"image":"eurovision.jpg","subhead":"Eurovision: Unrequited Love","caption":"My first coding project and which was completed as part of my front-end web development class at General Assembly. I researched decades of Eurovision statistics, calculated average votes, designed and coded a simple game that shed light on how different countries voted for each other in the annual song content","alt":"Eurovision: Unrequited Love","link":"http://michaelovaska.github.io/eurovision/"}],


photoLinks:

[{"image":"lampedusa.jpg","alt":"Photo essay: Migrant journey to Lampedusa","subhead":"Photo editing and visual narration","link":"http://graphics.wsj.com/the-crossing/"}],

photoStatics:

[{"image":"WSJE051114.png","alt":"Front page May 11, 2014","subhead":"Photo editing and art direction for The Wall Street Journal's European edition"},
{"image":"WSJE071114.png","alt":"Front Page July 11, 2014","subhead":""},
{"image":"WSJE090115.png","alt":"Front page Sept. 1, 2015","subhead":""},
{"image":"WSJE121114.png","alt":"Front page December 11, 2014","subhead":""},
{"image":"WSJE20150126.png","alt":"Front page Jan. 25, 2015","subhead":""},
{"image":"egypt.jpg","alt":"Exterior display photo for WSJ's London headquarters","subhead":"Photo editing for Dow Jones and The Wall Street Journal's visual identiy in the News Building, London"},
{"image":"bp.jpg","alt":"Interior display photo for WSJ's London headquarters","subhead":""},
{"image":"turkey.jpg","alt":"Interior display photo for WSJ's London headquarters","subhead":""},
{"image":"twitter.jpg","alt":"Interior display photo for WSJ's London headquarters","subhead":""},
{"image":"zuckerberg.jpg","alt":"Interior display photo for WSJ's London headquarters","subhead":""}],


drawingsTextiles:

[{"image":"color1.JPG"},
{"image":"color2.JPG"},
{"image":"color3.JPG"},
{"image":"color4.JPG"},
{"image":"color6.JPG"},
{"image":"violet_quilt.JPG"}]

};

 
resultsPlaceholder.innerHTML = template(data);

 