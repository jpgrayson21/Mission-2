$("#btnSend").click(function () {
    /*variables*/
    numGrade = 0;
    asgnPer = parseInt($("#asgnPer").val());
    grpPer = parseInt($("#grpPer").val());
    qzPer = parseInt($("#qzPer").val());
    exPer = parseInt($("#exPer").val());
    inPer = parseInt($("#inPer").val());

    /*Calculate the final number grade*/
    numGrade = (asgnPer * .55) + (grpPer * .05) + (qzPer * .1) + (exPer * .2) + (inPer * .1);

    /*Assign the correct letter grade*/
    if (numGrade >= 94) {
        letterGrade = 'A'
    } else if (numGrade < 94 && numGrade >= 90) {
        letterGrade = 'A-'
    } else if (numGrade < 90 && numGrade >= 87) {
        letterGrade = 'B+'
    } else if (numGrade < 87 && numGrade >= 84) {
        letterGrade = 'B'
    } else if (numGrade < 84 && numGrade >= 80) {
        letterGrade = 'B-'
    } else if (numGrade < 80 && numGrade >= 77) {
        letterGrade = 'C+'
    } else if (numGrade < 77 && numGrade >= 74) {
        letterGrade = 'C'
    } else if (numGrade < 74 && numGrade >= 70) {
        letterGrade = 'C-'
    } else if (numGrade < 70 && numGrade >= 67) {
        letterGrade = 'D+'
    } else if (numGrade < 67 && numGrade >= 64) {
        letterGrade = 'D'
    } else if (numGrade < 64 && numGrade >= 60) {
        letterGrade = 'D-'
    } else {
        letterGrade = 'E'
    }

    /*Print the results of the grade calculator*/
    alert('Final Percentage: ' + numGrade + '% ' + letterGrade);
})