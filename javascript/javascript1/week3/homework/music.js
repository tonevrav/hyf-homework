// DATA

const genresOfMusicDurations = [
    {
      title: "Techno",
      days: 229,
      hours: 15,
      minutes: 36,
    },
    {
      title: "House",
      days: 201,
      hours: 23,
      minutes: 58,
    },
    {
      title: "Trance",
      days: 542,
      hours: 2,
      minutes: 7,
    },
    {
      title: "Happy Hardcore",
      days: 5,
      hours: 0,
      minutes: 1,
    },
  ];

// LOGIC  
  
  function logOutMusicText(genres) {
    // write code here
    let output = "";
    
    const lifespan = 80;
    const lifespanInHours = 365 * lifespan * 24; // 700800 h
    let total = 0;

    for(const genre of genres) {
      const totalHoursOfListening = genre["days"] * 24 + genre["hours"] + genre["minutes"] / 60;
      const percentage = (totalHoursOfListening / lifespanInHours) * 100;
      total += percentage;

      const formattedPercentage = percentage < 0.100 ? percentage.toFixed(3) : percentage.toFixed(2);

      output += `${genre["title"]} took ${formattedPercentage}% of my life ${"\n"}`;
    }

    return `${output}In total that is ${total.toFixed(2)}% of my life`;
  }

// RENDER

console.log(logOutMusicText(genresOfMusicDurations)); // logs out the text found above