d3.queue()
    .defer(d3.json, "data.json")
    .await(makeGraphs); 
//we will want to add a .defer for each of the data jsons

function makeGraphs(error, dataJSON){
    var data = dataJSON;
    //crossfilter instance
    var ndx = crossfilter(data);

    // define data dimensions 
    var aDim = ndx.dimension(function(d) { return d["a"]; });
    var bDim = ndx.dimension(function(d) { return d["b"]; });
    var cDim = ndx.dimension(function(d) { return d["c"]; });
    var dDim = ndx.dimension(function(d) { return d["d"]; });
    
    // define data groups
    var all = ndx.groupAll();
    var numJournalsByA = aDim.group();
    var numJournalsByB = bDim.group();
    var numJournalsByC = cDim.group();
    var numJournalsByD = dDim.group();


    //define types of charts
    
};
