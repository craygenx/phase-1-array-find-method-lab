// code your solution here
function superbowlWin(record) {
    let newResult  = record.find(results => results.result == 'W')
    if(newResult == undefined) {
        return newResult
    }else{
        return newResult.year;
    }
}
