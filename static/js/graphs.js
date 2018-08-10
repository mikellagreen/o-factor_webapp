var q = d3.queue() 
q.defer(d3.csv, "temp_data.csv")
q.await(makeGraphs); 
//we will want to add a .defer for each of the data jsons

function makeGraphs(error, dataJSON) {
    var data = dataJSON;
    //crossfilter instance
    var ndx = crossfilter(data);

    // define data dimensions 
    var yearDim = ndx.dimension(function(d) { return d["fake_year"]; });
    var journalDim = ndx.dimension(function(d) { return d["fake_journal"]; });
    var codeSharedDim = ndx.dimension(function(d) { return d["code_shared"]; });
    var dataSharedDim = ndx.dimension(function(d) { return d["data_shared"]; });
    var preprintDim = ndx.dimension(function(d) { return d["preprint"]; });
    
    // define data groups
    var all = ndx.groupAll();
    var byJournal = journalDim.group();
    var numJournalsByB = bDim.group();
    var numJournalsByC = cDim.group();
    var numJournalsByD = dDim.group();

    var minDate = yearDim.bottom(1)[0]["fake_year"];
    var maxDate = yearDim.top(1)[0]["fake_year"];

    var timeChart = dc.barChart("#time-chart");

    timeChart
    .width(600)
    .height(160)
    .margins({top: 10, right: 50, bottom: 30, left: 50})
    .dimension(yearDim)
    .group(byJournal)
    .transitionDuration(500)
    .x(d3.time.scale().domain([minDate, maxDate]))
    .elasticY(true)
    .xAxisLabel("Year")
    .yAxis().ticks(4);

    dc.renderAll();
    //define types of charts

};
