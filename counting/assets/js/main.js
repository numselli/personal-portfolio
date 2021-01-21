$( document ).ready(pageLoad);
$(window).bind('hashchange', pageLoad);

// headder, title adujust
async function pageLoad(){
	switch((window.location.hash).replace("#","")){
		case `scores`:
			$("#title").text("SCORES")
			document.title = "Scores"
			if ($("#tablebody").find("tr").length<=0){
				await updatedata("scores")
				tabledata.map(({url,name,cs,hs})=>{
					var {innerHTML} = document.getElementById('tablebody')
					innerHTML += `<tr class="tr"><td><img class="guildimg" src="${url}" alt="${name}'s guild icon" style="border-radius: 50%; width:40px;" loading="lazy" onError="this.onerror=null;this.src='assets/img/error.png';"></td><td>${name}</td><td>${cs}</td><td>${hs}</td></tr>`;
					document.getElementById('tablebody').innerHTML = innerHTML;
				})
			}else{
				var tablebody = document.getElementById('tablebody').innerHTML;
				document.getElementById('tablebody').innerHTML = "";
				document.getElementById('tablebody').innerHTML = tablebody;
			}
		break;
		case `userscores`:
			$("#title").text("USER SCORES")
			document.title = "User scores"
			if ($("#userScoresTableBody").find("tr").length<=0){
				await updatedata("users")
				tabledata.map(({username,correctnumbers,wrongnumbers})=>{
					var {innerHTML} = document.getElementById('userScoresTableBody')
					innerHTML += `
					<tr class="tr">
						<td>${username}</td>
						<td>${correctnumbers}</td>
						<td>${wrongnumbers}</td>
					</tr>`;
					document.getElementById('userScoresTableBody').innerHTML = innerHTML;
				})
			}else{
				var tablebody = document.getElementById('userScoresTableBody').innerHTML;
				document.getElementById('userScoresTableBody').innerHTML = "";
				document.getElementById('userScoresTableBody').innerHTML = tablebody;
			}
		break;
		case `scores`:
		case `userscores`:
			$('#nav').css({'height': '0%'});
			$('#main').css({'height': '40%'});
		break;
		default:
			$('#nav').css({'height': '40%'});
			$('#main').css({'height': '0%'});
			$("#title").text("COUNTING")
			document.title = "Counting"
		break;
	}
}

// scores table
var tabledata = [], sortdirection = false, url = "https://d46de9ca877e.ngrok.io";

async function updatedata(table) {
	var ajaxdata = await $.ajax({'cache': true, 'dataType': "json", "async": true, "crossDomain": true, "url": `https://d46de9ca877e.ngrok.io/get/${table}`, "method": "GET", "error":err=>{console.error("Cannot connect to the API",err)},"headers": { "accept": "application/json", "Access-Control-Allow-Origin": "*"}})
	tabledata = ajaxdata
	return ajaxdata
}

async function sortdata(columnname) {
	await updatedata("scores");
	var sortdatahtml = "";
	sortdirection = !sortdirection;
	switch (columnname) {
		case "name":
			tabledata = tabledata.sort((p1, p2) => {
				return sortdirection ? (p1[columnname] > p2[columnname]) - (p1[columnname] < p2[columnname]) : (p2[columnname] > p1[columnname]) - (p2[columnname] < p1[columnname]);
			});
			if (sortdirection) {
				document.getElementById('Namearrow').classList = 'fa fa-sort-up';
				document.getElementById('last_numarrow').classList = '';
				document.getElementById('hsarrow').classList = '';
			}
			else {
				document.getElementById('Namearrow').classList = 'fa fa-sort-down';
				document.getElementById('last_numarrow').classList = '';
				document.getElementById('hsarrow').classList = '';
			}
			break;
		case "cs":
		case "hs":
			tabledata = tabledata.sort((p1, p2) => {
				return sortdirection ? p1[columnname] - p2[columnname] : p2[columnname] - p1[columnname];
			});
			if (columnname == "cs") {
				if (sortdirection) {
					document.getElementById('Namearrow').classList = '';
					document.getElementById('hsarrow').classList = '';
					document.getElementById('last_numarrow').classList = 'fa fa-sort-up';
				}
				else {
					document.getElementById('Namearrow').classList = '';
					document.getElementById('hsarrow').classList = '';
					document.getElementById('last_numarrow').classList = 'fa fa-sort-down';
				}
			}else {
				if (sortdirection) {
					document.getElementById('Namearrow').classList = '';
					document.getElementById('hsarrow').classList = 'fa fa-sort-up';
					document.getElementById('last_numarrow').classList = '';
				}
				else {
					document.getElementById('Namearrow').classList = ''
					document.getElementById('hsarrow').classList = 'fa fa-sort-down'
					document.getElementById('last_numarrow').classList = ''
				}
			}
			break;
	}
	tabledata.map(data=>{
		sortdatahtml += `<tr class="tr"><td><img class="guildimg" src="${data.url}"style="border-radius: 50%; width:40px;"></td><td>${data.name}</td><td>${data.cs}</td><td>${data.hs}</td></tr>`;
	})
	document.getElementById('tablebody').innerHTML = sortdatahtml;
}