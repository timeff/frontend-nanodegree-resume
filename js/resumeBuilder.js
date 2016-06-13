
var work = 
{
	"jobs" : [
		{
			"employer" : "coins.co.th",
			"title" : "Business Development Lead",
			"location" : "Bangkok, Thailand",
			"dates" : "Deceber 2015 - June 2016",
			"description" : "Founded in June of 2014, coins.co.th makes money transfer frictionless and accessible to everyone through the use of mobile devices and Blockchain technology. Our mobile wallet empowers consumers and small businesses by giving them direct access to world class financial services."
		},
		{
			"employer" : "Bank of Thailand",
			"title" : "Trainee",
			"location" : "Bangkok, Thailand",
			"dates" : "Deceber 2015 - June 2016",
			"description" : "Father of Thailand Bank"
		}
	]
};

var projects = 
{
	"project":[
		{
			"title":"Thailand fresh graduate programmer market",
			"dates":"2015",
			"description":"Senior Project",
			"images":"https://www.programmerthailand.com/images/partner/programmerthailand-com.png"
		}
	]
};

var bio = 
{
	"name":"Kawin Tiraborisute",
	"role":"Self-taugh programmer",
	"welcomeMessage":"Hi, welcome to my world",
	"contacts" :
	{
		"mobile":"081-685-2495",
		"email":"kawin.ac125@gmail.com",
		"github":"timeff",
		"location":"Bangkok, Thailand",
		"twitter":"@TiMeFF"
	},
	"skills":["Finance","Programming"]

};

var education =
{
	"schools":
	[
		{
			"name":"Assumption College",
			"location":"Bangkok, Thailand",
			"degree":"High School",
			"majors":["Math","Science"],
			"dates":"2011",
			"url":"www.assumption.ac.th"

		}
	],
	"onlineCourses":
	[
		{
			"title":"Udacity: Intro to Programming",
			"school":"Udacity",
			"dates":"2016",
			"url":"www.udacity.com"
		}
	]
};

formattedName = HTMLheaderName.replace("%data%",bio.name);
$("#header").append(formattedName);

formattedRole = HTMLheaderRole.replace("%data%",bio.role);
$("#header").append(formattedRole);



if (bio.skills !=null){
	$("#header").append(HTMLskillsStart);
	for (skill in bio.skills){
		var formattedSkills = HTMLskills.replace("%data%",bio.skills[skill]);
		$("#skills").append(formattedSkills);
	};
};

function displayWork(){
for (job in work.jobs){
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[job].employer)
	var formattedWorktitle = HTMLworkTitle.replace("%data%",work.jobs[job].title)
	var formattedWorkdate = HTMLworkDates.replace("%data%",work.jobs[job].dates)
	var formattedWorklocation = HTMLworkLocation.replace("%data%",work.jobs[job].location)
	var formattedWorkdes = HTMLworkDescription.replace("%data%",work.jobs[job].description)
	$(".work-entry:last").append(formattedEmployer+formattedWorktitle+formattedWorkdate+formattedWorklocation+formattedWorkdes);
}
}

displayWork();

$(document).click(function(test) { 
	var x = test.pageX;
	var y = test.pageY;
	logClicks(x,y);
// your code goes here 
}
);


$("#main").append(internationalizeButton);

function inName(name){
var sp_name = name.split(" ");
var firstname_cap = sp_name[0].charAt(0).toUpperCase();
var firstname_rest = sp_name[0].slice(1).toLowerCase();
var surname = sp_name[1].toUpperCase();
var join_name = firstname_cap+firstname_rest+" "+surname;
return join_name;
};

projects.display = function(){
 for (each in projects.project){
 	$("#projects").append(HTMLprojectStart);
 	var formattedTitle = HTMLprojectTitle.replace("%data%",projects.project[each].title);
 	var formattedDates = HTMLprojectDates.replace("%data%",projects.project[each].dates);
 	var formattedDes = HTMLprojectDescription.replace("%data%",projects.project[each].description);
 	var formattedImage = HTMLprojectImage.replace("%data%",projects.project[each].images);
 	$(".project-entry:last").append(formattedTitle+formattedDates+formattedDes+formattedImage);
 }
}

projects.display();
$("#mapDiv").append(googleMap);