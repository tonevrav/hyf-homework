// DATA
const activities = [];
let limitUsage = undefined;

// LOGIC
function addActivity(date, activity, duration) {
    const activityObject = {
        date,
        activity,
        duration
    }
    activities.push(activityObject);
}

function showStatus(){

    if(!activities.length) {
        return "Add some activities before calling showStatus"
    }

    let totalDuration = 0;

    for(const activity of activities) {
        totalDuration += activity["duration"];
    }

    if(typeof limitUsage === "number" && totalDuration >= limitUsage) {
       console.log("You have reached your limit, no more smartphoning for you!");
    }

    return `You have added ${activities.length} activities. They amount to ${totalDuration} min. of usage`
}

function setLimit(limit) {
    if(typeof limit !== "number") {
        return "Please, type the limit you would like to set as a number";
    }

    limitUsage = limit;
    return `Limit set to ${limitUsage} minutes`;
}

//RENDER
// setLimit(180);
addActivity("23/7-18", "Youtube", 30);
addActivity("23/7-18", "Facebook", 18);
addActivity("24/7-18", "Netflix", 56);
// console.log(activities);

// console.log(showStatus());