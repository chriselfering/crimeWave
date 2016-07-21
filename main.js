var minTime = 6;
var maxTime = 10;
var crimes = [ ]


function onLoad () {

var ctx1 = document.getElementById("myLineChart");
var myLineChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: ["12 am",  "2 am",  "4 am",  "6 am", "8 am", "10 am", "12 pm",  "2 pm",  "4 pm", "6 pm",  "8 pm", "10 pm", ],
        datasets: [
            {
                label: "Armed Robberies",
                fill: false,
                lineTension: 0.01,
                backgroundColor: "rgba(75,192,192,0.4)",
                borderColor: "rgba(75,192,192,1)",
                borderCapStyle: 'butt',
                borderDash: [],
                borderDashOffset: 0.0,
                borderJoinStyle: 'miter',
                pointBorderColor: "rgba(75,192,192,1)",
                pointBackgroundColor: "#fff",
                pointBorderWidth: 1,
                pointHoverRadius: 5,
                pointHoverBackgroundColor: "rgba(75,192,192,1)",
                pointHoverBorderColor: "rgba(220,220,220,1)",
                pointHoverBorderWidth: 2,
                pointRadius: 1,
                pointHitRadius: 10,
                data: [52, 39, 19, 13,16, 35, 49, 48, 46, 42, 76, 64],
                spanGaps: false,
            }
        ]
    }
});
}



















var after12 = 0;

function initMap() {



          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 11,
            center: {lat: 39.036943, lng: -94.546495}
          });

    for (i = 0; i < crimes.length; i++ ){



                         if (parseInt(crimes[i].reported_time.slice(0,2)) < maxTime && parseInt(crimes[i].reported_time.slice(0,2)) > minTime ){

                                        console.log(crimes[i].reported_time.slice(0,2))

                                        var myLatLng = {lat: crimes[i].location_1.coordinates[1], lng: crimes[i].location_1.coordinates[0]};


                                          var marker = new google.maps.Marker({
                                            position: myLatLng,
                                            map: map,

                                          });
                                           after12 = after12 +1;
                                          console.log(myLatLng)

                         } else {
                             console.log(crimes[i].reported_time.slice(0,2))


                         }
    }

     console.log(after12)
}















































































































































































crimes =
[
    {
        "address": "1900  E 19 ST",
        "age_1": "58",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-16T00:00:00.000",
        "from_time": "07:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559901,
                39.09009
            ]
        },
        "location_1_location": "1900 E 19 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1650",
        "report_no": "140003523",
        "reported_date": "2014-01-16T00:00:00.000",
        "reported_time": "07:52",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "3500  MAIN ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "19:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.585711,
                39.063692
            ]
        },
        "location_1_location": "3500 MAIN ST",
        "offense": "302",
        "rep_dist_1": "PJ2827",
        "report_no": "140007742",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "19:20",
        "zip_code_1": "64111"
    },
    {
        "address": "500  NW 43 TE",
        "area_1": "NPD",
        "beat": "411",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-02T00:00:00.000",
        "from_time": "05:27",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588461,
                39.173658
            ]
        },
        "location_1_location": "500 NW 43 TE",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1138",
        "report_no": "140037720",
        "reported_date": "2014-06-02T00:00:00.000",
        "reported_time": "05:27",
        "sex_1": "M"
    },
    {
        "address": "1200  E 63 ST",
        "age_1": "39",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-15T00:00:00.000",
        "from_time": "20:15",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573291,
                39.013236
            ]
        },
        "location_1_location": "1200 E 63 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4882",
        "report_no": "140058048",
        "reported_date": "2014-08-15T00:00:00.000",
        "reported_time": "20:25",
        "sex_1": "M",
        "to_date": "2014-08-15T00:00:00.000",
        "to_time": "20:30",
        "zip_code_1": "64133"
    },
    {
        "address": "4300  MAIN ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-30T00:00:00.000",
        "from_time": "06:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586576,
                39.049193
            ]
        },
        "location_1_location": "4300 MAIN ST",
        "offense": "302",
        "rep_dist_1": "PJ3459",
        "report_no": "140006867",
        "reported_date": "2014-01-30T00:00:00.000",
        "reported_time": "06:17",
        "zip_code_1": "64111"
    },
    {
        "address": "4900  PASEO",
        "age_1": "54",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-04-22T00:00:00.000",
        "from_time": "00:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "4900 PASEO",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4012",
        "report_no": "140026822",
        "reported_date": "2014-04-22T00:00:00.000",
        "reported_time": "01:01",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "200  W 39 ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-28T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588561,
                39.056681
            ]
        },
        "location_1_location": "200 W 39 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3049",
        "report_no": "140078221",
        "reported_date": "2014-10-28T00:00:00.000",
        "reported_time": "18:37",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "4900  N OAK TF",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-11T00:00:00.000",
        "from_time": "11:51",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576684,
                39.182629
            ]
        },
        "location_1_location": "4900 N OAK TF",
        "offense": "302",
        "rep_dist_1": "PC0828",
        "report_no": "140024112",
        "reported_date": "2014-04-11T00:00:00.000",
        "reported_time": "11:51",
        "zip_code_1": "64118"
    },
    {
        "address": "900  PASEO",
        "age_1": "31",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-27T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "900 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0902",
        "report_no": "140013245",
        "reported_date": "2014-02-27T00:00:00.000",
        "reported_time": "11:03",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "1100  AGNES AV",
        "age_1": "39",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "22:43",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547016,
                39.100382
            ]
        },
        "location_1_location": "1100 AGNES AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1049",
        "report_no": "140073720",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "22:43",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "1700  W 39 ST",
        "age_1": "36",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-21T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60527,
                39.057308
            ]
        },
        "location_1_location": "1700 W 39 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3100",
        "report_no": "140076318",
        "reported_date": "2014-10-21T00:00:00.000",
        "reported_time": "17:15",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "300  ASKEW AV",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-28T00:00:00.000",
        "from_time": "00:58",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538626,
                39.115255
            ]
        },
        "location_1_location": "300 ASKEW AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0434",
        "report_no": "140052752",
        "reported_date": "2014-07-28T00:00:00.000",
        "reported_time": "00:58",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "500  NE BARRY RD",
        "area_1": "SCP",
        "beat": "642",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "11:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574211,
                39.246409
            ]
        },
        "location_1_location": "500 NE BARRY RD",
        "offense": "302",
        "rep_dist_1": "PC0340",
        "report_no": "140077850",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "11:42",
        "zip_code_1": "64118"
    },
    {
        "address": "4100  LOCUST ST",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-21T00:00:00.000",
        "from_time": "02:56",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.580536,
                39.052673
            ]
        },
        "location_1_location": "4100 LOCUST ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3304",
        "report_no": "140042881",
        "reported_date": "2014-06-21T00:00:00.000",
        "reported_time": "02:56",
        "sex_1": "M",
        "to_date": "2014-06-21T00:00:00.000",
        "to_time": "02:59",
        "zip_code_1": "64110"
    },
    {
        "address": "E 32 ST/WALROND AV",
        "age_1": "44",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "23:39",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 32 ST/WALROND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2553",
        "report_no": "140077483",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "23:39",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "3300  E 30 ST",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-22T00:00:00.000",
        "from_time": "18:46",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544149,
                39.071416
            ]
        },
        "location_1_location": "3300 E 30 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2499",
        "report_no": "140051322",
        "reported_date": "2014-07-22T00:00:00.000",
        "reported_time": "18:46",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "400  VAN BRUNT BL",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-08T00:00:00.000",
        "from_time": "21:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525456,
                39.116983
            ]
        },
        "location_1_location": "400 VAN BRUNT BL",
        "offense": "302",
        "race_1": "A",
        "rep_dist_1": "PJ0514",
        "report_no": "140047589",
        "reported_date": "2014-07-08T00:00:00.000",
        "reported_time": "21:10",
        "sex_1": "F",
        "zip_code_1": "64123"
    },
    {
        "address": "6000  PARK AV",
        "age_1": "2",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-25T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "10",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559256,
                39.017612
            ]
        },
        "location_1_location": "6000 PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4870",
        "report_no": "140085128",
        "reported_date": "2014-11-25T00:00:00.000",
        "reported_time": "20:57",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "E 67 ST/PASEO",
        "age_1": "15",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "07:31",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55217,
                38.986859
            ]
        },
        "location_1_location": "E 67 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5086",
        "report_no": "140075854",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "07:34",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "3900  SCARRITT AV",
        "age_1": "51",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "09:19",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.536021,
                39.115108
            ]
        },
        "location_1_location": "3900 SCARRITT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0230",
        "report_no": "140077790",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "09:19",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "4000  HARVARD LN",
        "age_1": "21",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-28T00:00:00.000",
        "from_time": "00:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.449883,
                39.050336
            ]
        },
        "location_1_location": "4000 HARVARD LN",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3460",
        "report_no": "140013433",
        "reported_date": "2014-02-28T00:00:00.000",
        "reported_time": "00:44",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "3500  INDIANA AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544026,
                39.062112
            ]
        },
        "location_1_location": "3500 INDIANA AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2882",
        "report_no": "140082477",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "21:07",
        "sex_1": "U",
        "zip_code_1": "64128"
    },
    {
        "address": "BENTON BL/INDEPENDENCE AV",
        "age_1": "19",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-23T00:00:00.000",
        "from_time": "23:33",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "BENTON BL/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0609",
        "report_no": "140051675",
        "reported_date": "2014-07-23T00:00:00.000",
        "reported_time": "23:33",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "500  E 105 ST",
        "area_1": "SPD",
        "beat": "533",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-08T00:00:00.000",
        "from_time": "21:41",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586119,
                38.938268
            ]
        },
        "location_1_location": "500 E 105 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6764",
        "report_no": "140064653",
        "reported_date": "2014-09-08T00:00:00.000",
        "reported_time": "21:41",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "11200  CRYSTAL AV",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-23T00:00:00.000",
        "from_time": "06:56",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.503075,
                38.919656
            ]
        },
        "location_1_location": "11200 CRYSTAL AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ7130",
        "report_no": "140027110",
        "reported_date": "2014-04-23T00:00:00.000",
        "reported_time": "06:56",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E 34 ST/PARK AV",
        "area_1": "CPD",
        "beat": "125",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-10T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 34 ST/PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2724",
        "report_no": "140048115",
        "reported_date": "2014-07-10T00:00:00.000",
        "reported_time": "18:45",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "1400  HARDESTY AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-21T00:00:00.000",
        "from_time": "20:45",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.519276,
                39.095912
            ]
        },
        "location_1_location": "1400 HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1303",
        "report_no": "140068207",
        "reported_date": "2014-09-22T00:00:00.000",
        "reported_time": "09:20",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "4900  NE VIVION RD",
        "age_1": "20",
        "area_1": "SCP",
        "beat": "641",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-10-22T00:00:00.000",
        "from_time": "21:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522277,
                39.18802
            ]
        },
        "location_1_location": "4900 NE VIVION RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0806",
        "report_no": "140076624",
        "reported_date": "2014-10-23T00:00:00.000",
        "reported_time": "02:57",
        "sex_1": "M"
    },
    {
        "address": "4300  PASEO",
        "age_1": "23",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-12T00:00:00.000",
        "from_time": "17:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "4300 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3486",
        "report_no": "140024464",
        "reported_date": "2014-04-12T00:00:00.000",
        "reported_time": "17:52",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "E 25 ST/NORTON AV",
        "age_1": "67",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "13:09",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 25 ST/NORTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2050",
        "report_no": "140036862",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "13:09",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 3 ST/WALNUT ST",
        "age_1": "34",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-21T00:00:00.000",
        "from_time": "22:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 3 ST/WALNUT ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0399",
        "report_no": "140091393",
        "reported_date": "2014-12-21T00:00:00.000",
        "reported_time": "22:15",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "5700  TROOST AV",
        "age_1": "30",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-15T00:00:00.000",
        "from_time": "12:33",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574058,
                39.023464
            ]
        },
        "location_1_location": "5700 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4554",
        "report_no": "140089792",
        "reported_date": "2014-12-15T00:00:00.000",
        "reported_time": "12:35",
        "sex_1": "M",
        "to_date": "2014-12-15T00:00:00.000",
        "to_time": "12:34",
        "zip_code_1": "64130"
    },
    {
        "address": "400  W 47 ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-02-13T00:00:00.000",
        "from_time": "16:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.591701,
                39.042351
            ]
        },
        "location_1_location": "400 W 47 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3699",
        "report_no": "140010113",
        "reported_date": "2014-02-13T00:00:00.000",
        "reported_time": "16:37",
        "sex_1": "F",
        "to_date": "2014-02-13T00:00:00.000",
        "to_time": "16:20",
        "zip_code_1": "64111"
    },
    {
        "address": "800  WHEELING AV",
        "age_1": "26",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-09T00:00:00.000",
        "from_time": "20:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.510448,
                39.102334
            ]
        },
        "location_1_location": "800 WHEELING AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0933",
        "report_no": "140002005",
        "reported_date": "2014-01-09T00:00:00.000",
        "reported_time": "23:21",
        "sex_1": "M",
        "zip_code_1": "64125"
    },
    {
        "address": "5700  SWOPE PK",
        "age_1": "14",
        "area_1": "MPD",
        "beat": "211",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-01T00:00:00.000",
        "from_time": "19:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.541756,
                39.022021
            ]
        },
        "location_1_location": "5700 SWOPE PK",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4596",
        "report_no": "140021601",
        "reported_date": "2014-04-01T00:00:00.000",
        "reported_time": "20:23",
        "sex_1": "M"
    },
    {
        "address": "5000  BLUE RIDGE CUTOFF",
        "age_1": "45",
        "area_1": "EPD",
        "beat": "344",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-02T00:00:00.000",
        "from_time": "23:48",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.479207,
                39.03307
            ]
        },
        "location_1_location": "5000 BLUE RIDGE CUTOFF",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4078",
        "report_no": "140063078",
        "reported_date": "2014-09-02T00:00:00.000",
        "reported_time": "23:51",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "1700  W 39 ST",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-21T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60527,
                39.057308
            ]
        },
        "location_1_location": "1700 W 39 ST",
        "offense": "302",
        "rep_dist_1": "PJ3100",
        "report_no": "140076318",
        "reported_date": "2014-10-21T00:00:00.000",
        "reported_time": "17:15",
        "zip_code_1": "64111"
    },
    {
        "address": "3500  E TRUMAN RD",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-10T00:00:00.000",
        "from_time": "16:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54068,
                39.094338
            ]
        },
        "location_1_location": "3500 E TRUMAN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1357",
        "report_no": "140081480",
        "reported_date": "2014-11-10T00:00:00.000",
        "reported_time": "16:27",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 51 ST/WOODLAND AV",
        "age_1": "19",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-14T00:00:00.000",
        "from_time": "11:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 51 ST/WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4056",
        "report_no": "140089545",
        "reported_date": "2014-12-14T00:00:00.000",
        "reported_time": "11:09",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "1700  E 63 ST",
        "age_1": "73",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-04T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.566401,
                39.012954
            ]
        },
        "location_1_location": "1700 E 63 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4883",
        "report_no": "140038360",
        "reported_date": "2014-06-04T00:00:00.000",
        "reported_time": "13:05",
        "sex_1": "M",
        "to_date": "2014-06-04T00:00:00.000",
        "to_time": "13:20",
        "zip_code_1": "64130"
    },
    {
        "address": "2300  E MEYER BL",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-30T00:00:00.000",
        "from_time": "22:06",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559781,
                39.007159
            ]
        },
        "location_1_location": "2300 E MEYER BL",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ4990",
        "report_no": "140070617",
        "reported_date": "2014-09-30T00:00:00.000",
        "reported_time": "22:44",
        "sex_1": "M",
        "to_date": "2014-09-30T00:00:00.000",
        "to_time": "23:59"
    },
    {
        "address": "2300  E MEYER BL",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-27T00:00:00.000",
        "from_time": "00:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559781,
                39.007159
            ]
        },
        "location_1_location": "2300 E MEYER BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4990",
        "report_no": "140069548",
        "reported_date": "2014-09-27T00:00:00.000",
        "reported_time": "00:22",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "2300  E MEYER BL",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-27T00:00:00.000",
        "from_time": "00:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559781,
                39.007159
            ]
        },
        "location_1_location": "2300 E MEYER BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4990",
        "report_no": "140069548",
        "reported_date": "2014-09-27T00:00:00.000",
        "reported_time": "00:22",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "W 44 ST/PENNSYLVANIA AV",
        "age_1": "26",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-29T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 44 ST/PENNSYLVANIA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3469",
        "report_no": "140085723",
        "reported_date": "2014-11-29T00:00:00.000",
        "reported_time": "01:51",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-07T00:00:00.000",
        "from_time": "03:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54414,
                39.106107
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0684",
        "report_no": "140001333",
        "reported_date": "2014-01-07T00:00:00.000",
        "reported_time": "03:11",
        "sex_1": "M",
        "to_date": "2014-01-07T00:00:00.000",
        "to_time": "03:11",
        "zip_code_1": "64124"
    },
    {
        "address": "N OAKLEY AV/ST JOHN AV",
        "age_1": "29",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-15T00:00:00.000",
        "from_time": "22:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525539,
                39.113437
            ]
        },
        "location_1_location": "N OAKLEY AV/ST JOHN AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0299",
        "report_no": "140082907",
        "reported_date": "2014-11-16T00:00:00.000",
        "reported_time": "22:35",
        "sex_1": "F",
        "zip_code_1": "64123"
    },
    {
        "address": "1300  E 89 ST",
        "age_1": "37",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574331,
                38.966116
            ]
        },
        "location_1_location": "1300 E 89 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6288",
        "report_no": "140093136",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "17:15",
        "sex_1": "M",
        "to_date": "2014-12-29T00:00:00.000",
        "to_time": "19:31",
        "zip_code_1": "64131"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "age_1": "44",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-13T00:00:00.000",
        "from_time": "05:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544223,
                39.106114
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0684",
        "report_no": "140089259",
        "reported_date": "2014-12-13T00:00:00.000",
        "reported_time": "05:29",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3400  INDEPENDENCE AV",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-23T00:00:00.000",
        "from_time": "21:01",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.542158,
                39.106014
            ]
        },
        "location_1_location": "3400 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0688",
        "report_no": "140076926",
        "reported_date": "2014-10-23T00:00:00.000",
        "reported_time": "21:01",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "2400  POPLAR AV",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "19:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525575,
                39.081924
            ]
        },
        "location_1_location": "2400 POPLAR AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2092",
        "report_no": "140076578",
        "reported_date": "2014-10-22T00:00:00.000",
        "reported_time": "17:19",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "8000  WORNALL RD",
        "age_1": "41",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-17T00:00:00.000",
        "from_time": "08:25",
        "ibrs": "120",
        "invl_no_1": "7",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594695,
                38.983092
            ]
        },
        "location_1_location": "8000 WORNALL RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5855",
        "report_no": "140017700",
        "reported_date": "2014-03-17T00:00:00.000",
        "reported_time": "08:28",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "2600  INDEPENDENCE AV",
        "age_1": "57",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-28T00:00:00.000",
        "from_time": "13:20",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55054,
                39.106338
            ]
        },
        "location_1_location": "2600 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0670",
        "report_no": "140078131",
        "reported_date": "2014-10-28T00:00:00.000",
        "reported_time": "13:20",
        "sex_1": "F",
        "zip_code_1": "64124"
    },
    {
        "address": "GENESEE ST/WESTPORT RD",
        "age_1": "25",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-09-01T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "GENESEE ST/WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3332",
        "report_no": "140062560",
        "reported_date": "2014-09-01T00:00:00.000",
        "reported_time": "03:06",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "4000  HARDESTY AV",
        "age_1": "19",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-20T00:00:00.000",
        "from_time": "18:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522077,
                39.052785
            ]
        },
        "location_1_location": "4000 HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3286",
        "report_no": "140091119",
        "reported_date": "2014-12-20T00:00:00.000",
        "reported_time": "18:19",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "300  GARFIELD AV",
        "area_1": "CPD",
        "beat": "124",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-13T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556887,
                39.111005
            ]
        },
        "location_1_location": "300 GARFIELD AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0389",
        "report_no": "140057485",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "21:48",
        "sex_1": "M",
        "to_date": "2014-08-13T00:00:00.000",
        "to_time": "21:00",
        "zip_code_1": "64124"
    },
    {
        "address": "7600  E 110 ST",
        "age_1": "16",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-11T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501385,
                38.925775
            ]
        },
        "location_1_location": "7600 E 110 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6964",
        "report_no": "140016348",
        "reported_date": "2014-03-11T00:00:00.000",
        "reported_time": "20:50",
        "sex_1": "M",
        "to_date": "2014-03-11T00:00:00.000",
        "to_time": "19:30",
        "zip_code_1": "64134"
    },
    {
        "address": "E 85 ST/PASEO",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "20:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 85 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6081",
        "report_no": "140005720",
        "reported_date": "2014-01-25T00:00:00.000",
        "reported_time": "10:14",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "3300  BELLEFONTAINE AV",
        "age_1": "52",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-03T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547376,
                39.065942
            ]
        },
        "location_1_location": "3300 BELLEFONTAINE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2737",
        "report_no": "140079662",
        "reported_date": "2014-11-03T00:00:00.000",
        "reported_time": "14:09",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "7100  OLIVE ST",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559244,
                38.998063
            ]
        },
        "location_1_location": "7100 OLIVE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5430",
        "report_no": "140070367",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "23:49",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "BENTON BL/INDEPENDENCE AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-23T00:00:00.000",
        "from_time": "23:33",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "BENTON BL/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0609",
        "report_no": "140051675",
        "reported_date": "2014-07-23T00:00:00.000",
        "reported_time": "23:33",
        "sex_1": "F",
        "zip_code_1": "64124"
    },
    {
        "address": "4000  TRACY AV",
        "age_1": "38",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-17T00:00:00.000",
        "from_time": "23:14",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569846,
                39.054135
            ]
        },
        "location_1_location": "4000 TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3235",
        "report_no": "140075322",
        "reported_date": "2014-10-17T00:00:00.000",
        "reported_time": "23:14",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "1700  E 17 TE",
        "age_1": "17",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-06T00:00:00.000",
        "from_time": "12:58",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561971,
                39.092066
            ]
        },
        "location_1_location": "1700 E 17 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1421",
        "report_no": "140008540",
        "reported_date": "2014-02-06T00:00:00.000",
        "reported_time": "13:10",
        "sex_1": "M",
        "to_date": "2014-02-06T00:00:00.000",
        "to_time": "13:10",
        "zip_code_1": "64108"
    },
    {
        "address": "8100  CAMPBELL ST",
        "age_1": "21",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-23T00:00:00.000",
        "from_time": "13:39",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.578571,
                38.980693
            ]
        },
        "location_1_location": "8100 CAMPBELL ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5921",
        "report_no": "140012335",
        "reported_date": "2014-02-23T00:00:00.000",
        "reported_time": "13:40",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "7300  PROSPECT AV",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557146,
                38.994273
            ]
        },
        "location_1_location": "7300 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5568",
        "report_no": "140039672",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "14:15",
        "sex_1": "F",
        "to_date": "2014-06-09T00:00:00.000",
        "to_time": "14:15",
        "zip_code_1": "64132"
    },
    {
        "address": "600  NW 68 ST",
        "age_1": "24",
        "area_1": "NPD",
        "beat": "412",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-03-12T00:00:00.000",
        "from_time": "02:23",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587995,
                39.217424
            ]
        },
        "location_1_location": "600 NW 68 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0599",
        "report_no": "140016382",
        "reported_date": "2014-03-12T00:00:00.000",
        "reported_time": "02:25",
        "sex_1": "F",
        "zip_code_1": "64154"
    },
    {
        "address": "9400  BLUE RIDGE BL",
        "age_1": "20",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-30T00:00:00.000",
        "from_time": "12:54",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.507929,
                38.953624
            ]
        },
        "location_1_location": "9400 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6481",
        "report_no": "140086040",
        "reported_date": "2014-11-30T00:00:00.000",
        "reported_time": "12:57",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "1900  NE PARVIN RD",
        "age_1": "20",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-02T00:00:00.000",
        "from_time": "21:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55673,
                39.16752
            ]
        },
        "location_1_location": "1900 NE PARVIN RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC1224",
        "report_no": "140079500",
        "reported_date": "2014-11-02T00:00:00.000",
        "reported_time": "22:01",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "700  KENSINGTON AV",
        "age_1": "38",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530437,
                39.104092
            ]
        },
        "location_1_location": "700 KENSINGTON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0821",
        "report_no": "140032940",
        "reported_date": "2014-05-15T00:00:00.000",
        "reported_time": "12:23",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "8500  E BANNISTER RD",
        "age_1": "30",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-23T00:00:00.000",
        "from_time": "02:03",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49063,
                38.951668
            ]
        },
        "location_1_location": "8500 E BANNISTER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6521",
        "report_no": "140035131",
        "reported_date": "2014-05-23T00:00:00.000",
        "reported_time": "02:03",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "900  PASEO",
        "age_1": "48",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-11T00:00:00.000",
        "from_time": "01:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "900 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0902",
        "report_no": "140002253",
        "reported_date": "2014-01-11T00:00:00.000",
        "reported_time": "01:41",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "2300  E MEYER BL",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-30T00:00:00.000",
        "from_time": "22:06",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559781,
                39.007159
            ]
        },
        "location_1_location": "2300 E MEYER BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4990",
        "report_no": "140070617",
        "reported_date": "2014-09-30T00:00:00.000",
        "reported_time": "22:44",
        "sex_1": "M",
        "to_date": "2014-09-30T00:00:00.000",
        "to_time": "23:59"
    },
    {
        "address": "GARFIELD AV/E LINWOOD BL",
        "age_1": "52",
        "area_1": "CPD",
        "beat": "125",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-06T00:00:00.000",
        "from_time": "10:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "GARFIELD AV/E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2557",
        "report_no": "140087762",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "09:43",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "9100  E 39 ST",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-04T00:00:00.000",
        "from_time": "16:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.4716,
                39.052434
            ]
        },
        "location_1_location": "9100 E 39 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3327",
        "report_no": "140079986",
        "reported_date": "2014-11-04T00:00:00.000",
        "reported_time": "16:42",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "W 44 ST/MADISON AV",
        "age_1": "34",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-04T00:00:00.000",
        "from_time": "22:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 44 ST/MADISON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3452",
        "report_no": "140054864",
        "reported_date": "2014-08-04T00:00:00.000",
        "reported_time": "22:16",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "KARNES BLVD/ROANOKE RD",
        "age_1": "34",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "KARNES BLVD/ROANOKE RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2762",
        "report_no": "140081063",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "21:32",
        "sex_1": "F",
        "zip_code_1": "64109"
    },
    {
        "address": "4700  E BANNISTER RD",
        "area_1": "SPD",
        "beat": "531",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-30T00:00:00.000",
        "from_time": "14:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.534638,
                38.95349
            ]
        },
        "location_1_location": "4700 E BANNISTER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6566",
        "report_no": "140086066",
        "reported_date": "2014-11-30T00:00:00.000",
        "reported_time": "14:54",
        "sex_1": "M",
        "zip_code_1": "64137"
    },
    {
        "address": "300  NE ENGLEWOOD RD",
        "area_1": "NPD",
        "beat": "411",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-07T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.579945,
                39.196068
            ]
        },
        "location_1_location": "300 NE ENGLEWOOD RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC0724",
        "report_no": "140015114",
        "reported_date": "2014-03-07T00:00:00.000",
        "reported_time": "01:55",
        "sex_1": "U",
        "to_date": "2014-03-07T00:00:00.000",
        "to_time": "01:45",
        "zip_code_1": "64118"
    },
    {
        "address": "10600  E 42 ST",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-03T00:00:00.000",
        "from_time": "13:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.453903,
                39.046427
            ]
        },
        "location_1_location": "10600 E 42 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3584",
        "report_no": "140038114",
        "reported_date": "2014-06-03T00:00:00.000",
        "reported_time": "13:40",
        "sex_1": "M",
        "zip_code_1": "64052"
    },
    {
        "address": "E BANNISTER RD/BLUE RIVER RD",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-27T00:00:00.000",
        "from_time": "22:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.540017,
                38.929087
            ]
        },
        "location_1_location": "E BANNISTER RD/BLUE RIVER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6468",
        "report_no": "140028328",
        "reported_date": "2014-04-27T00:00:00.000",
        "reported_time": "22:05",
        "sex_1": "M",
        "zip_code_1": "64137"
    },
    {
        "address": "2200  KENSINGTON AV",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-19T00:00:00.000",
        "from_time": "17:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.531596,
                39.085332
            ]
        },
        "location_1_location": "2200 KENSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1873",
        "report_no": "140067557",
        "reported_date": "2014-09-19T00:00:00.000",
        "reported_time": "17:39",
        "sex_1": "M"
    },
    {
        "address": "1800  NE VIVION RD",
        "age_1": "5",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "21:25",
        "ibrs": "120",
        "invl_no_1": "10",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558185,
                39.181112
            ]
        },
        "location_1_location": "1800 NE VIVION RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC0956",
        "report_no": "140029619",
        "reported_date": "2014-05-02T00:00:00.000",
        "reported_time": "21:30",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "E 31 ST/OAKLEY AV",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "02:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "E 31 ST/OAKLEY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2562",
        "report_no": "140036737",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "02:55",
        "sex_1": "F",
        "zip_code_1": "64129"
    },
    {
        "address": "3700  BROADWAY",
        "age_1": "36",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-22T00:00:00.000",
        "from_time": "02:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590546,
                39.061102
            ]
        },
        "location_1_location": "3700 BROADWAY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2960",
        "report_no": "140043157",
        "reported_date": "2014-06-22T00:00:00.000",
        "reported_time": "02:45",
        "sex_1": "F",
        "zip_code_1": "64111"
    },
    {
        "address": "E 63 ST/PASEO",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-19T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 63 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4887",
        "report_no": "140026215",
        "reported_date": "2014-04-19T00:00:00.000",
        "reported_time": "14:13",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "39TH/71HWY",
        "age_1": "26",
        "area_1": "OSPD",
        "beat": "999",
        "city": "N KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "39TH/71HWY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PCX043",
        "report_no": "140082357",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "12:16",
        "sex_1": "M",
        "to_date": "2014-11-14T00:00:00.000",
        "to_time": "11:30",
        "zip_code_1": "64111"
    },
    {
        "address": "2900  YORK ST",
        "age_1": "19",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-22T00:00:00.000",
        "from_time": "22:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525884,
                39.071711
            ]
        },
        "location_1_location": "2900 YORK ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2455",
        "report_no": "140068439",
        "reported_date": "2014-09-22T00:00:00.000",
        "reported_time": "22:19",
        "sex_1": "F",
        "zip_code_1": "64126"
    },
    {
        "address": "3700  N WOODLAND AV",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-08T00:00:00.000",
        "from_time": "22:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558526,
                39.161411
            ]
        },
        "location_1_location": "3700 N WOODLAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1383",
        "report_no": "140015616",
        "reported_date": "2014-03-09T00:00:00.000",
        "reported_time": "01:53",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "5100  WORNALL RD",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-28T00:00:00.000",
        "from_time": "22:34",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.592016,
                39.034983
            ]
        },
        "location_1_location": "5100 WORNALL RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ4203",
        "report_no": "140053053",
        "reported_date": "2014-07-28T00:00:00.000",
        "reported_time": "22:34",
        "sex_1": "U",
        "zip_code_1": "64112"
    },
    {
        "address": "5400  LYDIA AV",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-24T00:00:00.000",
        "from_time": "18:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569075,
                39.028733
            ]
        },
        "location_1_location": "5400 LYDIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4346",
        "report_no": "140051910",
        "reported_date": "2014-07-24T00:00:00.000",
        "reported_time": "18:20",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "6900  MONROE AV",
        "age_1": "63",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-10T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543949,
                39.000985
            ]
        },
        "location_1_location": "6900 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5325",
        "report_no": "140073483",
        "reported_date": "2014-10-10T00:00:00.000",
        "reported_time": "22:55",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "5500  E TRUMAN RD",
        "age_1": "29",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-26T00:00:00.000",
        "from_time": "20:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.518081,
                39.094107
            ]
        },
        "location_1_location": "5500 E TRUMAN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1428",
        "report_no": "140013390",
        "reported_date": "2014-02-27T00:00:00.000",
        "reported_time": "20:23",
        "sex_1": "M",
        "to_date": "2014-02-26T00:00:00.000",
        "to_time": "20:23",
        "zip_code_1": "64127"
    },
    {
        "address": "5300  NW 64 ST",
        "area_1": "NPD",
        "beat": "414",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "12:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.642329,
                39.210568
            ]
        },
        "location_1_location": "5300 NW 64 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PP0626",
        "report_no": "140077848",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "12:09",
        "sex_1": "F",
        "zip_code_1": "64151"
    },
    {
        "address": "E 34 ST/PARK AV",
        "age_1": "30",
        "area_1": "CPD",
        "beat": "125",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-10T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 34 ST/PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2724",
        "report_no": "140048115",
        "reported_date": "2014-07-10T00:00:00.000",
        "reported_time": "18:45",
        "sex_1": "F",
        "zip_code_1": "64109"
    },
    {
        "address": "8200  HICKMAN MILLS DR",
        "age_1": "50",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-10T00:00:00.000",
        "from_time": "03:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557125,
                38.97797
            ]
        },
        "location_1_location": "8200 HICKMAN MILLS DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6061",
        "report_no": "140009298",
        "reported_date": "2014-02-10T00:00:00.000",
        "reported_time": "03:15",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "900  E ARMOUR BL",
        "age_1": "19",
        "area_1": "CPD",
        "beat": "112",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57394,
                39.063381
            ]
        },
        "location_1_location": "900 E ARMOUR BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2771",
        "report_no": "140053485",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "16:50",
        "sex_1": "F",
        "zip_code_1": "64111"
    },
    {
        "address": "E ARMOUR BL/CAMPBELL ST",
        "age_1": "57",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-29T00:00:00.000",
        "from_time": "06:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E ARMOUR BL/CAMPBELL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2767",
        "report_no": "140085754",
        "reported_date": "2014-11-29T00:00:00.000",
        "reported_time": "07:29",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "HARDESTY AV/INDEPENDENCE AV",
        "age_1": "35",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-04-27T00:00:00.000",
        "from_time": "22:39",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "HARDESTY AV/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0647",
        "report_no": "140028351",
        "reported_date": "2014-04-27T00:00:00.000",
        "reported_time": "22:39",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "200  W ARMOUR BL",
        "age_1": "15",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-16T00:00:00.000",
        "from_time": "02:33",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588339,
                39.063898
            ]
        },
        "location_1_location": "200 W ARMOUR BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2751",
        "report_no": "140058115",
        "reported_date": "2014-08-16T00:00:00.000",
        "reported_time": "02:33",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "1800  W 39 ST",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-02T00:00:00.000",
        "from_time": "23:55",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.606249,
                39.057338
            ]
        },
        "location_1_location": "1800 W 39 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3094",
        "report_no": "140063079",
        "reported_date": "2014-09-02T00:00:00.000",
        "reported_time": "23:55",
        "sex_1": "M",
        "to_date": "2014-09-02T00:00:00.000",
        "to_time": "23:59",
        "zip_code_1": "64111"
    },
    {
        "address": "200  W 39 ST",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-30T00:00:00.000",
        "from_time": "22:29",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588561,
                39.056681
            ]
        },
        "location_1_location": "200 W 39 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3049",
        "report_no": "140007091",
        "reported_date": "2014-01-30T00:00:00.000",
        "reported_time": "22:30",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "1800  NE VIVION RD",
        "age_1": "9",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "21:25",
        "ibrs": "120",
        "invl_no_1": "9",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558185,
                39.181112
            ]
        },
        "location_1_location": "1800 NE VIVION RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC0956",
        "report_no": "140029619",
        "reported_date": "2014-05-02T00:00:00.000",
        "reported_time": "21:30",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "5500  GARFIELD AV",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-18T00:00:00.000",
        "from_time": "13:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561056,
                39.026602
            ]
        },
        "location_1_location": "5500 GARFIELD AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4438",
        "report_no": "140004099",
        "reported_date": "2014-01-18T00:00:00.000",
        "reported_time": "13:56",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "3000  HIGHLAND AV",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-28T00:00:00.000",
        "from_time": "03:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.563216,
                39.071922
            ]
        },
        "location_1_location": "3000 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2471",
        "report_no": "140036431",
        "reported_date": "2014-05-28T00:00:00.000",
        "reported_time": "03:20",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "3700  N GRAND AV",
        "age_1": "5",
        "area_1": "NPD",
        "beat": "411",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-08T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.578494,
                39.161382
            ]
        },
        "location_1_location": "3700 N GRAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1328",
        "report_no": "140008930",
        "reported_date": "2014-02-08T00:00:00.000",
        "reported_time": "03:05",
        "sex_1": "F",
        "zip_code_1": "64116"
    },
    {
        "address": "CYPRESS AV/SMART AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-04T00:00:00.000",
        "from_time": "13:18",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "CYPRESS AV/SMART AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0421",
        "report_no": "140022258",
        "reported_date": "2014-04-04T00:00:00.000",
        "reported_time": "13:18",
        "sex_1": "M"
    },
    {
        "address": "BALES AV/ROBERTS ST",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-23T00:00:00.000",
        "from_time": "11:15",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "BALES AV/ROBERTS ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0578",
        "report_no": "140091794",
        "reported_date": "2014-12-23T00:00:00.000",
        "reported_time": "11:18",
        "sex_1": "F",
        "zip_code_1": "64124"
    },
    {
        "address": "1700  WOODLAND AV",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-10T00:00:00.000",
        "from_time": "15:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.560987,
                39.092299
            ]
        },
        "location_1_location": "1700 WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1448",
        "report_no": "140039953",
        "reported_date": "2014-06-10T00:00:00.000",
        "reported_time": "15:52",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "1600  N UNIVERSAL AV",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-04T00:00:00.000",
        "from_time": "06:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.506242,
                39.135397
            ]
        },
        "location_1_location": "1600 N UNIVERSAL AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0023",
        "report_no": "140000740",
        "reported_date": "2014-01-04T00:00:00.000",
        "reported_time": "06:29",
        "sex_1": "M",
        "zip_code_1": "64120"
    },
    {
        "address": "E 38 ST/CHESTNUT AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "02:40",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 38 ST/CHESTNUT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3024",
        "report_no": "140077743",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "03:00",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "BENTON BL/E LINWOOD BL",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-10T00:00:00.000",
        "from_time": "22:11",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "BENTON BL/E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2606",
        "report_no": "140073478",
        "reported_date": "2014-10-10T00:00:00.000",
        "reported_time": "22:41",
        "sex_1": "M",
        "to_date": "2014-10-10T00:00:00.000",
        "to_time": "22:40",
        "zip_code_1": "64128"
    },
    {
        "address": "4400  HOLLY ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "00:18",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.600586,
                39.048082
            ]
        },
        "location_1_location": "4400 HOLLY ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3516",
        "report_no": "140077238",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "00:18",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3700  N GRAND AV",
        "age_1": "24",
        "area_1": "NPD",
        "beat": "411",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-08T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.578494,
                39.161382
            ]
        },
        "location_1_location": "3700 N GRAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1328",
        "report_no": "140008930",
        "reported_date": "2014-02-08T00:00:00.000",
        "reported_time": "03:05",
        "sex_1": "F",
        "zip_code_1": "64116"
    },
    {
        "address": "4600  CAMPBELL ST",
        "age_1": "43",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-28T00:00:00.000",
        "from_time": "23:29",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575219,
                39.043543
            ]
        },
        "location_1_location": "4600 CAMPBELL ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3705",
        "report_no": "140085698",
        "reported_date": "2014-11-28T00:00:00.000",
        "reported_time": "23:29",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "200  W 6 ST",
        "area_1": "CPD",
        "beat": "112",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-04T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.623866,
                39.1059
            ]
        },
        "location_1_location": "200 W 6 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0652",
        "report_no": "140071751",
        "reported_date": "2014-10-04T00:00:00.000",
        "reported_time": "20:53",
        "sex_1": "M"
    },
    {
        "address": "BUDD PARK ESPLANADE/VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-24T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525539,
                39.113437
            ]
        },
        "location_1_location": "BUDD PARK ESPLANADE/VAN BRUNT BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0344",
        "report_no": "140043836",
        "reported_date": "2014-06-24T00:00:00.000",
        "reported_time": "15:08",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "6900  MONROE AV",
        "age_1": "55",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-13T00:00:00.000",
        "from_time": "19:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543949,
                39.000985
            ]
        },
        "location_1_location": "6900 MONROE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5325",
        "report_no": "140074150",
        "reported_date": "2014-10-13T00:00:00.000",
        "reported_time": "19:53",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "5300  E 39 ST",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-08T00:00:00.000",
        "from_time": "03:36",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522096,
                39.0545
            ]
        },
        "location_1_location": "5300 E 39 ST",
        "offense": "302",
        "rep_dist_1": "PJ3234",
        "report_no": "140087925",
        "reported_date": "2014-12-08T00:00:00.000",
        "reported_time": "03:40",
        "zip_code_1": "64129"
    },
    {
        "address": "300  BELMONT BL",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-16T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.509476,
                39.110192
            ]
        },
        "location_1_location": "300 BELMONT BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0460",
        "report_no": "140041790",
        "reported_date": "2014-06-17T00:00:00.000",
        "reported_time": "09:04",
        "sex_1": "M",
        "to_date": "2014-06-16T00:00:00.000",
        "to_time": "22:00",
        "zip_code_1": "64123"
    },
    {
        "address": "E 46 ST/71 HW",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-16T00:00:00.000",
        "from_time": "19:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "E 46 ST/71 HW",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1033",
        "report_no": "140003704",
        "reported_date": "2014-01-16T00:00:00.000",
        "reported_time": "19:41",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "5700  TROOST AV",
        "age_1": "64",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-15T00:00:00.000",
        "from_time": "12:33",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574058,
                39.023464
            ]
        },
        "location_1_location": "5700 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4554",
        "report_no": "140089792",
        "reported_date": "2014-12-15T00:00:00.000",
        "reported_time": "12:35",
        "sex_1": "M",
        "to_date": "2014-12-15T00:00:00.000",
        "to_time": "12:34",
        "zip_code_1": "64130"
    },
    {
        "address": "ARCHIBALD AV/BALTIMORE AV",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-18T00:00:00.000",
        "from_time": "18:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "ARCHIBALD AV/BALTIMORE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3220",
        "report_no": "140050268",
        "reported_date": "2014-07-18T00:00:00.000",
        "reported_time": "18:47",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "E 16 ST/FREMONT AV",
        "age_1": "28",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-06T00:00:00.000",
        "from_time": "00:01",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 16 ST/FREMONT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1477",
        "report_no": "140008423",
        "reported_date": "2014-02-06T00:00:00.000",
        "reported_time": "00:29",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "4700  E BANNISTER RD",
        "area_1": "SPD",
        "beat": "531",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-30T00:00:00.000",
        "from_time": "14:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.534638,
                38.95349
            ]
        },
        "location_1_location": "4700 E BANNISTER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6566",
        "report_no": "140086066",
        "reported_date": "2014-11-30T00:00:00.000",
        "reported_time": "14:54",
        "sex_1": "M",
        "zip_code_1": "64137"
    },
    {
        "address": "E 36 ST/GILLHAM RD",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-28T00:00:00.000",
        "from_time": "16:02",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 36 ST/GILLHAM RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2858",
        "report_no": "140013562",
        "reported_date": "2014-02-28T00:00:00.000",
        "reported_time": "16:02",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "3400  JACKSON AV",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-05T00:00:00.000",
        "from_time": "22:49",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.534766,
                39.063752
            ]
        },
        "location_1_location": "3400 JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2785",
        "report_no": "140008410",
        "reported_date": "2014-02-05T00:00:00.000",
        "reported_time": "22:50",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "3400  JACKSON AV",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-05T00:00:00.000",
        "from_time": "22:49",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.534766,
                39.063752
            ]
        },
        "location_1_location": "3400 JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2785",
        "report_no": "140008410",
        "reported_date": "2014-02-05T00:00:00.000",
        "reported_time": "22:50",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "300  ASKEW AV",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-28T00:00:00.000",
        "from_time": "00:58",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538626,
                39.115255
            ]
        },
        "location_1_location": "300 ASKEW AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0434",
        "report_no": "140052752",
        "reported_date": "2014-07-28T00:00:00.000",
        "reported_time": "00:58",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "6600  MONROE AV",
        "age_1": "23",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-13T00:00:00.000",
        "from_time": "16:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543678,
                39.006751
            ]
        },
        "location_1_location": "6600 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5142",
        "report_no": "140048868",
        "reported_date": "2014-07-13T00:00:00.000",
        "reported_time": "16:55",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "6100  E 87 ST",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-10T00:00:00.000",
        "from_time": "22:50",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517654,
                38.967411
            ]
        },
        "location_1_location": "6100 E 87 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6336",
        "report_no": "140088702",
        "reported_date": "2014-12-10T00:00:00.000",
        "reported_time": "23:32",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "7600  LOMA VISTA DR",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-19T00:00:00.000",
        "from_time": "00:56",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.499882,
                38.961489
            ]
        },
        "location_1_location": "7600 LOMA VISTA DR",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6327",
        "report_no": "140026081",
        "reported_date": "2014-04-19T00:00:00.000",
        "reported_time": "00:56",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "W 42 ST/GENESEE ST",
        "age_1": "25",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-09T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.572809,
                39.157748
            ]
        },
        "location_1_location": "W 42 ST/GENESEE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3239",
        "report_no": "140057262",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "10:39",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "800  WHEELING AV",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-09T00:00:00.000",
        "from_time": "20:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.510448,
                39.102334
            ]
        },
        "location_1_location": "800 WHEELING AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0933",
        "report_no": "140002005",
        "reported_date": "2014-01-09T00:00:00.000",
        "reported_time": "23:21",
        "sex_1": "M",
        "zip_code_1": "64125"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "age_1": "49",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-07T00:00:00.000",
        "from_time": "03:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54414,
                39.106107
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0684",
        "report_no": "140001333",
        "reported_date": "2014-01-07T00:00:00.000",
        "reported_time": "03:11",
        "sex_1": "F",
        "to_date": "2014-01-07T00:00:00.000",
        "to_time": "03:11",
        "zip_code_1": "64124"
    },
    {
        "address": "4600  NE VIVION RD",
        "age_1": "54",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-08-16T00:00:00.000",
        "from_time": "15:02",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.52566,
                39.188021
            ]
        },
        "location_1_location": "4600 NE VIVION RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0857",
        "report_no": "140058234",
        "reported_date": "2014-08-16T00:00:00.000",
        "reported_time": "15:02",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "7400  MONTGALL AV",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-05T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556066,
                38.992443
            ]
        },
        "location_1_location": "7400 MONTGALL AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ5636",
        "report_no": "140087414",
        "reported_date": "2014-12-05T00:00:00.000",
        "reported_time": "21:19",
        "sex_1": "U",
        "zip_code_1": "64132"
    },
    {
        "address": "HIGHLAND AV/INDEPENDENCE AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-02T00:00:00.000",
        "from_time": "21:38",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "HIGHLAND AV/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0534",
        "report_no": "140086631",
        "reported_date": "2014-12-02T00:00:00.000",
        "reported_time": "21:38",
        "sex_1": "M",
        "to_date": "2014-12-02T00:00:00.000",
        "to_time": "21:38",
        "zip_code_1": "64104"
    },
    {
        "address": "3600  E 19 ST",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-02T00:00:00.000",
        "from_time": "08:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54025,
                39.088975
            ]
        },
        "location_1_location": "3600 E 19 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1624",
        "report_no": "140087024",
        "reported_date": "2014-12-04T00:00:00.000",
        "reported_time": "12:10",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 107 TE/SYCAMORE TE",
        "age_1": "27",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-31T00:00:00.000",
        "from_time": "16:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 107 TE/SYCAMORE TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6904",
        "report_no": "140037402",
        "reported_date": "2014-05-31T00:00:00.000",
        "reported_time": "17:13",
        "sex_1": "M",
        "to_date": "2014-05-31T00:00:00.000",
        "to_time": "17:12",
        "zip_code_1": "64134"
    },
    {
        "address": "1700  W 133 ST",
        "age_1": "34",
        "area_1": "SPD",
        "beat": "535",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-25T00:00:00.000",
        "from_time": "13:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60438,
                38.886578
            ]
        },
        "location_1_location": "1700 W 133 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ7404",
        "report_no": "140027751",
        "reported_date": "2014-04-25T00:00:00.000",
        "reported_time": "15:16",
        "sex_1": "U",
        "zip_code_1": "64145"
    },
    {
        "address": "4300  N ANTIOCH RD",
        "age_1": "21",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-26T00:00:00.000",
        "from_time": "00:01",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539521,
                39.209684
            ]
        },
        "location_1_location": "4300 N ANTIOCH RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1162",
        "report_no": "140019887",
        "reported_date": "2014-03-26T00:00:00.000",
        "reported_time": "00:27",
        "sex_1": "M",
        "to_date": "2014-03-26T00:00:00.000",
        "to_time": "00:27",
        "zip_code_1": "64119"
    },
    {
        "address": "5100  WORNALL RD",
        "age_1": "17",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-28T00:00:00.000",
        "from_time": "22:34",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.592016,
                39.034983
            ]
        },
        "location_1_location": "5100 WORNALL RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4203",
        "report_no": "140053053",
        "reported_date": "2014-07-28T00:00:00.000",
        "reported_time": "22:34",
        "sex_1": "M",
        "zip_code_1": "64112"
    },
    {
        "address": "8000  STATE LINE RD",
        "age_1": "22",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-18T00:00:00.000",
        "from_time": "07:26",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.608228,
                38.984233
            ]
        },
        "location_1_location": "8000 STATE LINE RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5841",
        "report_no": "140011086",
        "reported_date": "2014-02-18T00:00:00.000",
        "reported_time": "07:26",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "400  N LAWNDALE AV",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-26T00:00:00.000",
        "from_time": "02:08",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.515456,
                39.108613
            ]
        },
        "location_1_location": "400 N LAWNDALE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0199",
        "report_no": "140035922",
        "reported_date": "2014-05-26T00:00:00.000",
        "reported_time": "02:08",
        "sex_1": "M"
    },
    {
        "address": "E 41 ST/CHESTNUT AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-09T00:00:00.000",
        "from_time": "12:11",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 41 ST/CHESTNUT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3274",
        "report_no": "140056170",
        "reported_date": "2014-08-09T00:00:00.000",
        "reported_time": "12:11",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "3400  JACKSON AV",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-05T00:00:00.000",
        "from_time": "22:49",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.534766,
                39.063752
            ]
        },
        "location_1_location": "3400 JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2785",
        "report_no": "140008410",
        "reported_date": "2014-02-05T00:00:00.000",
        "reported_time": "22:50",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "3600  MONTGALL AV",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-06T00:00:00.000",
        "from_time": "20:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552187,
                39.060592
            ]
        },
        "location_1_location": "3600 MONTGALL AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2949",
        "report_no": "140072298",
        "reported_date": "2014-10-06T00:00:00.000",
        "reported_time": "20:45",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "100  W 79 TE",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58864,
                38.983958
            ]
        },
        "location_1_location": "100 W 79 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5815",
        "report_no": "140053338",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "03:28",
        "sex_1": "M",
        "to_date": "2014-07-30T00:00:00.000",
        "to_time": "03:00",
        "zip_code_1": "64114"
    },
    {
        "address": "100  W 79 TE",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58864,
                38.983958
            ]
        },
        "location_1_location": "100 W 79 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5815",
        "report_no": "140053338",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "03:28",
        "sex_1": "M",
        "to_date": "2014-07-30T00:00:00.000",
        "to_time": "03:00",
        "zip_code_1": "64114"
    },
    {
        "address": "W 16 ST/JEFFERSON ST",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-06T00:00:00.000",
        "from_time": "03:51",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586339,
                39.103618
            ]
        },
        "location_1_location": "W 16 ST/JEFFERSON ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1384",
        "report_no": "140055207",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "03:54",
        "sex_1": "U",
        "zip_code_1": "64105"
    },
    {
        "address": "W 12 ST/WYOMING ST",
        "age_1": "44",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-11T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "W 12 ST/WYOMING ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1011",
        "report_no": "140088716",
        "reported_date": "2014-12-11T00:00:00.000",
        "reported_time": "01:56",
        "sex_1": "M",
        "to_date": "2014-12-11T00:00:00.000",
        "to_time": "01:50",
        "zip_code_1": "64108"
    },
    {
        "address": "3100  TROOST AV",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-07T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.571366,
                39.070193
            ]
        },
        "location_1_location": "3100 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2539",
        "report_no": "140080691",
        "reported_date": "2014-11-07T00:00:00.000",
        "reported_time": "11:06",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "3800  BROADWAY",
        "age_1": "22",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-07T00:00:00.000",
        "from_time": "12:11",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590715,
                39.057804
            ]
        },
        "location_1_location": "3800 BROADWAY",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3045",
        "report_no": "140047175",
        "reported_date": "2014-07-07T00:00:00.000",
        "reported_time": "12:11",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "W 5 ST/DELAWARE ST",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-23T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586339,
                39.103618
            ]
        },
        "location_1_location": "W 5 ST/DELAWARE ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ0499",
        "report_no": "140084528",
        "reported_date": "2014-11-23T00:00:00.000",
        "reported_time": "03:37",
        "sex_1": "U",
        "to_date": "2014-11-23T00:00:00.000",
        "to_time": "03:20",
        "zip_code_1": "64105"
    },
    {
        "address": "5100  RINKER RD",
        "age_1": "61",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-03T00:00:00.000",
        "from_time": "07:09",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.487438,
                39.031214
            ]
        },
        "location_1_location": "5100 RINKER RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4368",
        "report_no": "140060062",
        "reported_date": "2014-09-03T00:00:00.000",
        "reported_time": "12:14",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "E 93 TE/JAMES A REED RD",
        "age_1": "28",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-28T00:00:00.000",
        "from_time": "17:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 93 TE/JAMES A REED RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6476",
        "report_no": "140085645",
        "reported_date": "2014-11-28T00:00:00.000",
        "reported_time": "17:37",
        "sex_1": "M",
        "to_date": "2014-11-28T00:00:00.000",
        "to_time": "17:36",
        "zip_code_1": "64134"
    },
    {
        "address": "500  DRURY AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-14T00:00:00.000",
        "from_time": "19:51",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517858,
                39.106922
            ]
        },
        "location_1_location": "500 DRURY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0647",
        "report_no": "140024969",
        "reported_date": "2014-04-14T00:00:00.000",
        "reported_time": "19:51",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "INDEPENDENCE AV/MAPLE BL",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-26T00:00:00.000",
        "from_time": "01:54",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "INDEPENDENCE AV/MAPLE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0571",
        "report_no": "140044254",
        "reported_date": "2014-06-26T00:00:00.000",
        "reported_time": "01:54",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "7100  PROSPECT AV",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-22T00:00:00.000",
        "from_time": "15:32",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556945,
                38.997874
            ]
        },
        "location_1_location": "7100 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5432",
        "report_no": "140091586",
        "reported_date": "2014-12-22T00:00:00.000",
        "reported_time": "15:32",
        "sex_1": "F",
        "zip_code_1": "64132"
    },
    {
        "address": "1600  EUCLID AV",
        "age_1": "15",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-18T00:00:00.000",
        "from_time": "17:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558562,
                39.09351
            ]
        },
        "location_1_location": "1600 EUCLID AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1448",
        "report_no": "140011263",
        "reported_date": "2014-02-18T00:00:00.000",
        "reported_time": "18:14",
        "sex_1": "M"
    },
    {
        "address": "300  BELMONT BL",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-16T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.509476,
                39.110192
            ]
        },
        "location_1_location": "300 BELMONT BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0460",
        "report_no": "140041790",
        "reported_date": "2014-06-17T00:00:00.000",
        "reported_time": "09:04",
        "sex_1": "F",
        "to_date": "2014-06-16T00:00:00.000",
        "to_time": "22:00",
        "zip_code_1": "64123"
    },
    {
        "address": "3700  MONTGALL AV",
        "age_1": "28",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-11T00:00:00.000",
        "from_time": "17:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552296,
                39.058862
            ]
        },
        "location_1_location": "3700 MONTGALL AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3024",
        "report_no": "140010280",
        "reported_date": "2014-02-14T00:00:00.000",
        "reported_time": "11:00",
        "sex_1": "F",
        "zip_code_1": "64128"
    },
    {
        "address": "E 70 ST/MONROE AV",
        "age_1": "21",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "19:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55217,
                38.986859
            ]
        },
        "location_1_location": "E 70 ST/MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5325",
        "report_no": "140076061",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "19:41",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "3400  TROOST AV",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-05T00:00:00.000",
        "from_time": "05:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.571676,
                39.064812
            ]
        },
        "location_1_location": "3400 TROOST AV",
        "offense": "302",
        "rep_dist_1": "PJ2776",
        "report_no": "140046652",
        "reported_date": "2014-07-05T00:00:00.000",
        "reported_time": "05:14",
        "zip_code_1": "64108"
    },
    {
        "address": "E INDEPENDENCE AV/E WINNER RD",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-03T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500629,
                39.104026
            ]
        },
        "location_1_location": "E INDEPENDENCE AV/E WINNER RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ0585",
        "report_no": "140079770",
        "reported_date": "2014-11-03T00:00:00.000",
        "reported_time": "21:41",
        "sex_1": "M",
        "to_date": "2014-11-03T00:00:00.000",
        "to_time": "20:53",
        "zip_code_1": "64125"
    },
    {
        "address": "6200  BROOKSIDE BL",
        "age_1": "30",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-24T00:00:00.000",
        "from_time": "12:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590781,
                39.015657
            ]
        },
        "location_1_location": "6200 BROOKSIDE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4864",
        "report_no": "140027441",
        "reported_date": "2014-04-24T00:00:00.000",
        "reported_time": "12:47",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "100  W 39 ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-14T00:00:00.000",
        "from_time": "21:20",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587423,
                39.056642
            ]
        },
        "location_1_location": "100 W 39 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3132",
        "report_no": "140089660",
        "reported_date": "2014-12-14T00:00:00.000",
        "reported_time": "21:20",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "2600  AGNES AV",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-18T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547756,
                39.078652
            ]
        },
        "location_1_location": "2600 AGNES AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2180",
        "report_no": "140058866",
        "reported_date": "2014-08-18T00:00:00.000",
        "reported_time": "22:30",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3800  ANDERSON AV",
        "age_1": "56",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-13T00:00:00.000",
        "from_time": "01:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.536495,
                39.11126
            ]
        },
        "location_1_location": "3800 ANDERSON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0355",
        "report_no": "140073948",
        "reported_date": "2014-10-13T00:00:00.000",
        "reported_time": "01:16",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "4800  INDEPENDENCE AV",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-29T00:00:00.000",
        "from_time": "03:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525579,
                39.105467
            ]
        },
        "location_1_location": "4800 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0622",
        "report_no": "140020656",
        "reported_date": "2014-03-30T00:00:00.000",
        "reported_time": "13:40",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "E 11 ST/PASEO",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-24T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 11 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0985",
        "report_no": "140019606",
        "reported_date": "2014-03-24T00:00:00.000",
        "reported_time": "19:31",
        "sex_1": "F",
        "zip_code_1": "64109"
    },
    {
        "address": "3900  FLORA AV",
        "age_1": "69",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-04T00:00:00.000",
        "from_time": "04:23",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.566376,
                39.055742
            ]
        },
        "location_1_location": "3900 FLORA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3158",
        "report_no": "140008080",
        "reported_date": "2014-02-04T00:00:00.000",
        "reported_time": "04:23",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "10600  BLUE RIDGE BL",
        "age_1": "58",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-27T00:00:00.000",
        "from_time": "01:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.507916,
                38.932217
            ]
        },
        "location_1_location": "10600 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6876",
        "report_no": "140044523",
        "reported_date": "2014-06-27T00:00:00.000",
        "reported_time": "01:07",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "2900  YORK ST",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-22T00:00:00.000",
        "from_time": "22:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525884,
                39.071711
            ]
        },
        "location_1_location": "2900 YORK ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2455",
        "report_no": "140068439",
        "reported_date": "2014-09-22T00:00:00.000",
        "reported_time": "22:19",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "4600  PROSPECT AV",
        "age_1": "53",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-08-30T00:00:00.000",
        "from_time": "23:14",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.554286,
                39.042622
            ]
        },
        "location_1_location": "4600 PROSPECT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3725",
        "report_no": "140062291",
        "reported_date": "2014-08-30T00:00:00.000",
        "reported_time": "23:15",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "5700  TROOST AV",
        "age_1": "57",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-15T00:00:00.000",
        "from_time": "12:33",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574058,
                39.023464
            ]
        },
        "location_1_location": "5700 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4554",
        "report_no": "140089792",
        "reported_date": "2014-12-15T00:00:00.000",
        "reported_time": "12:35",
        "sex_1": "F",
        "to_date": "2014-12-15T00:00:00.000",
        "to_time": "12:34",
        "zip_code_1": "64130"
    },
    {
        "address": "7100  PROSPECT AV",
        "age_1": "30",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-22T00:00:00.000",
        "from_time": "15:32",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556945,
                38.997874
            ]
        },
        "location_1_location": "7100 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5432",
        "report_no": "140091586",
        "reported_date": "2014-12-22T00:00:00.000",
        "reported_time": "15:32",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "E 41 ST/CHESTNUT AV",
        "age_1": "26",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-09T00:00:00.000",
        "from_time": "12:11",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 41 ST/CHESTNUT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3274",
        "report_no": "140056170",
        "reported_date": "2014-08-09T00:00:00.000",
        "reported_time": "12:11",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "MILL ST/WESTPORT RD",
        "age_1": "27",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-14T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "MILL ST/WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3218",
        "report_no": "140065990",
        "reported_date": "2014-09-14T00:00:00.000",
        "reported_time": "02:47",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "BLUE PK/HARDESTY AV",
        "area_1": "EPD",
        "beat": "344",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-17T00:00:00.000",
        "from_time": "04:05",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "BLUE PK/HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3857",
        "report_no": "140058385",
        "reported_date": "2014-08-17T00:00:00.000",
        "reported_time": "04:12",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "E 17 ST/GRAND AV",
        "age_1": "43",
        "area_1": "CPD",
        "beat": "113",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-09-06T00:00:00.000",
        "from_time": "05:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 17 ST/GRAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1397",
        "report_no": "140063969",
        "reported_date": "2014-09-06T00:00:00.000",
        "reported_time": "05:49",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "4600  CAMPBELL ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-15T00:00:00.000",
        "from_time": "23:19",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575219,
                39.043543
            ]
        },
        "location_1_location": "4600 CAMPBELL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3705",
        "report_no": "140049512",
        "reported_date": "2014-07-15T00:00:00.000",
        "reported_time": "23:19",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3200  PROSPECT AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-20T00:00:00.000",
        "from_time": "12:33",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552965,
                39.067952
            ]
        },
        "location_1_location": "3200 PROSPECT AV",
        "offense": "302",
        "rep_dist_1": "PJ2653",
        "report_no": "140050663",
        "reported_date": "2014-07-20T00:00:00.000",
        "reported_time": "12:45"
    },
    {
        "address": "4000  HARDESTY AV",
        "age_1": "22",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-05T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522077,
                39.052785
            ]
        },
        "location_1_location": "4000 HARDESTY AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ3286",
        "report_no": "140087401",
        "reported_date": "2014-12-05T00:00:00.000",
        "reported_time": "19:30",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "BENTON BL/E LINWOOD BL",
        "age_1": "19",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-10T00:00:00.000",
        "from_time": "22:11",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "BENTON BL/E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2606",
        "report_no": "140073478",
        "reported_date": "2014-10-10T00:00:00.000",
        "reported_time": "22:41",
        "sex_1": "M",
        "to_date": "2014-10-10T00:00:00.000",
        "to_time": "22:40",
        "zip_code_1": "64128"
    },
    {
        "address": "2400  POPLAR AV",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "19:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525575,
                39.081924
            ]
        },
        "location_1_location": "2400 POPLAR AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2092",
        "report_no": "140076578",
        "reported_date": "2014-10-22T00:00:00.000",
        "reported_time": "17:19",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "400  SOUTHWEST BL",
        "area_1": "OSPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-22T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "400 SOUTHWEST BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PWX001",
        "report_no": "140043269",
        "reported_date": "2014-06-22T00:00:00.000",
        "reported_time": "17:10",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "5500  GLADSTONE BL",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-06T00:00:00.000",
        "from_time": "19:40",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517028,
                39.118834
            ]
        },
        "location_1_location": "5500 GLADSTONE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0170",
        "report_no": "140055447",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "20:53",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "E 3 ST/WALNUT ST",
        "age_1": "26",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-21T00:00:00.000",
        "from_time": "22:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 3 ST/WALNUT ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0399",
        "report_no": "140091393",
        "reported_date": "2014-12-21T00:00:00.000",
        "reported_time": "22:15",
        "sex_1": "F",
        "zip_code_1": "64106"
    },
    {
        "address": "5400  PROSPECT AV",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-17T00:00:00.000",
        "from_time": "18:34",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.555116,
                39.028134
            ]
        },
        "location_1_location": "5400 PROSPECT AV",
        "offense": "302",
        "rep_dist_1": "PJ4367",
        "report_no": "140083126",
        "reported_date": "2014-11-17T00:00:00.000",
        "reported_time": "18:34",
        "zip_code_1": "64130"
    },
    {
        "address": "W 42 ST/GENESEE ST",
        "age_1": "32",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-09T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.572809,
                39.157748
            ]
        },
        "location_1_location": "W 42 ST/GENESEE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3239",
        "report_no": "140057262",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "10:39",
        "sex_1": "F",
        "zip_code_1": "64116"
    },
    {
        "address": "S 16 ST/ELMWOOD AV",
        "age_1": "20",
        "area_1": "OSPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-16T00:00:00.000",
        "from_time": "22:46",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "S 16 ST/ELMWOOD AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PWX001",
        "report_no": "140041684",
        "reported_date": "2014-06-16T00:00:00.000",
        "reported_time": "22:46",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "900  BENTON BL",
        "age_1": "32",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-12T00:00:00.000",
        "from_time": "22:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544326,
                39.101973
            ]
        },
        "location_1_location": "900 BENTON BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0928",
        "report_no": "140048695",
        "reported_date": "2014-07-12T00:00:00.000",
        "reported_time": "22:06",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "9400  BLUE RIDGE BL",
        "age_1": "53",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "22:59",
        "ibrs": "120",
        "invl_no_1": "7",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.507929,
                38.953624
            ]
        },
        "location_1_location": "9400 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6485",
        "report_no": "140007368",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "23:01",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "E 41 ST/GILLHAM RD",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-31T00:00:00.000",
        "from_time": "22:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 41 ST/GILLHAM RD",
        "offense": "302",
        "rep_dist_1": "PJ3304",
        "report_no": "140053809",
        "reported_date": "2014-07-31T00:00:00.000",
        "reported_time": "22:09",
        "to_date": "2014-07-31T00:00:00.000",
        "to_time": "22:10",
        "zip_code_1": "64110"
    },
    {
        "address": "400  N LAWNDALE AV",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-26T00:00:00.000",
        "from_time": "02:08",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.515456,
                39.108613
            ]
        },
        "location_1_location": "400 N LAWNDALE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0199",
        "report_no": "140035922",
        "reported_date": "2014-05-26T00:00:00.000",
        "reported_time": "02:08",
        "sex_1": "M"
    },
    {
        "address": "1900  JACKSON AV",
        "age_1": "47",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-30T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.533498,
                39.088655
            ]
        },
        "location_1_location": "1900 JACKSON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1716",
        "report_no": "140093404",
        "reported_date": "2014-12-30T00:00:00.000",
        "reported_time": "20:42",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "HIGHLAND AV/INDEPENDENCE AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-02T00:00:00.000",
        "from_time": "21:38",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "HIGHLAND AV/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0534",
        "report_no": "140086631",
        "reported_date": "2014-12-02T00:00:00.000",
        "reported_time": "21:38",
        "sex_1": "M",
        "to_date": "2014-12-02T00:00:00.000",
        "to_time": "21:38",
        "zip_code_1": "64104"
    },
    {
        "address": "E 22 ST/KANSAS AV",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-27T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 22 ST/KANSAS AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1804",
        "report_no": "140028288",
        "reported_date": "2014-04-27T00:00:00.000",
        "reported_time": "16:38",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3200  PROSPECT AV",
        "age_1": "52",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552965,
                39.067952
            ]
        },
        "location_1_location": "3200 PROSPECT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2651",
        "report_no": "140060066",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "20:50",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "4600  J C NICHOLS PK",
        "age_1": "16",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-02T00:00:00.000",
        "from_time": "00:38",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588857,
                39.046481
            ]
        },
        "location_1_location": "4600 J C NICHOLS PK",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3630",
        "report_no": "140054119",
        "reported_date": "2014-08-02T00:00:00.000",
        "reported_time": "00:38",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "500  E 105 ST",
        "area_1": "SPD",
        "beat": "533",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-08T00:00:00.000",
        "from_time": "21:41",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586119,
                38.938268
            ]
        },
        "location_1_location": "500 E 105 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6764",
        "report_no": "140064653",
        "reported_date": "2014-09-08T00:00:00.000",
        "reported_time": "21:41",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "1700  NE VIVION RD",
        "age_1": "31",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-05-23T00:00:00.000",
        "from_time": "08:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558883,
                39.181055
            ]
        },
        "location_1_location": "1700 NE VIVION RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1025",
        "report_no": "140035185",
        "reported_date": "2014-05-23T00:00:00.000",
        "reported_time": "08:54",
        "sex_1": "M",
        "to_date": "2014-05-23T00:00:00.000",
        "to_time": "08:50",
        "zip_code_1": "64117"
    },
    {
        "address": "3400  E 8 ST",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-01T00:00:00.000",
        "from_time": "22:32",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54184,
                39.103195
            ]
        },
        "location_1_location": "3400 E 8 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0819",
        "report_no": "140000214",
        "reported_date": "2014-01-01T00:00:00.000",
        "reported_time": "22:32",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "INDEPENDENCE AV/PROSPECT AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-20T00:00:00.000",
        "from_time": "10:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0573",
        "report_no": "140011608",
        "reported_date": "2014-02-20T00:00:00.000",
        "reported_time": "10:36",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "4400  PROSPECT AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "09:44",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.554115,
                39.046042
            ]
        },
        "location_1_location": "4400 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3590",
        "report_no": "140053370",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "09:44",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "2200  ASKEW AV",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-25T00:00:00.000",
        "from_time": "18:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.540595,
                39.085165
            ]
        },
        "location_1_location": "2200 ASKEW AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1875",
        "report_no": "140020259",
        "reported_date": "2014-03-27T00:00:00.000",
        "reported_time": "15:20",
        "sex_1": "U",
        "zip_code_1": "64127"
    },
    {
        "address": "300  N BRIGHTON AV",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "22:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.523268,
                39.114502
            ]
        },
        "location_1_location": "300 N BRIGHTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0229",
        "report_no": "140079054",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "22:35",
        "sex_1": "M",
        "to_date": "2014-10-31T00:00:00.000",
        "to_time": "22:35",
        "zip_code_1": "64130"
    },
    {
        "address": "3200  HOLMES ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-12T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576659,
                39.068763
            ]
        },
        "location_1_location": "3200 HOLMES ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2618",
        "report_no": "140040582",
        "reported_date": "2014-06-12T00:00:00.000",
        "reported_time": "21:38",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "E 35 ST/CLEVELAND AV",
        "age_1": "61",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "00:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 35 ST/CLEVELAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2818",
        "report_no": "140029403",
        "reported_date": "2014-05-02T00:00:00.000",
        "reported_time": "00:54",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "4200  N OAK TF",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "21:47",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.527169,
                39.169549
            ]
        },
        "location_1_location": "4200 N OAK TF",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1180",
        "report_no": "140074703",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "21:47",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "4700  OAK ST",
        "age_1": "25",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-30T00:00:00.000",
        "from_time": "00:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.582396,
                39.041174
            ]
        },
        "location_1_location": "4700 OAK ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3774",
        "report_no": "140020892",
        "reported_date": "2014-03-30T00:00:00.000",
        "reported_time": "00:47",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "8500  E WINNER RD",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "20:59",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.483131,
                39.107009
            ]
        },
        "location_1_location": "8500 E WINNER RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0621",
        "report_no": "140070314",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "20:59",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "1700  INDEPENDENCE AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-08-03T00:00:00.000",
        "from_time": "01:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561181,
                39.106706
            ]
        },
        "location_1_location": "1700 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0663",
        "report_no": "140054376",
        "reported_date": "2014-08-03T00:00:00.000",
        "reported_time": "01:57",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "500  DRURY AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-14T00:00:00.000",
        "from_time": "19:51",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517858,
                39.106922
            ]
        },
        "location_1_location": "500 DRURY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0647",
        "report_no": "140024969",
        "reported_date": "2014-04-14T00:00:00.000",
        "reported_time": "19:51",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "4900  E TRUMAN RD",
        "age_1": "47",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "07:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.52549,
                39.094204
            ]
        },
        "location_1_location": "4900 E TRUMAN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1442",
        "report_no": "140077299",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "07:34",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 9 ST/TROOST AV",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-17T00:00:00.000",
        "from_time": "21:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 9 ST/TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0820",
        "report_no": "140058552",
        "reported_date": "2014-08-17T00:00:00.000",
        "reported_time": "21:23",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "4000  HARRISON ST",
        "age_1": "33",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-20T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573439,
                39.054255
            ]
        },
        "location_1_location": "4000 HARRISON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3230",
        "report_no": "140067878",
        "reported_date": "2014-09-20T00:00:00.000",
        "reported_time": "20:56",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "N AMBASSADOR DR/N BOARDWALK AV",
        "age_1": "20",
        "area_1": "NPD",
        "beat": "422",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-12T00:00:00.000",
        "from_time": "12:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.697028,
                39.219069
            ]
        },
        "location_1_location": "N AMBASSADOR DR/N BOARDWALK AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0321",
        "report_no": "140057014",
        "reported_date": "2014-08-12T00:00:00.000",
        "reported_time": "13:00",
        "sex_1": "F",
        "zip_code_1": "64152"
    },
    {
        "address": "3000  NE VIVION RD",
        "age_1": "40",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-26T00:00:00.000",
        "from_time": "20:11",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543922,
                39.188149
            ]
        },
        "location_1_location": "3000 NE VIVION RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0861",
        "report_no": "140061105",
        "reported_date": "2014-08-26T00:00:00.000",
        "reported_time": "20:15",
        "sex_1": "M",
        "zip_code_1": "64118"
    },
    {
        "address": "5500  GLADSTONE BL",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-06T00:00:00.000",
        "from_time": "19:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517028,
                39.118834
            ]
        },
        "location_1_location": "5500 GLADSTONE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0170",
        "report_no": "140055447",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "20:53",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "1200  PASEO",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-22T00:00:00.000",
        "from_time": "22:55",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "1200 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1129",
        "report_no": "140027067",
        "reported_date": "2014-04-22T00:00:00.000",
        "reported_time": "22:55",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "E 40 ST/BROOKLYN AV",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-16T00:00:00.000",
        "from_time": "00:25",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 40 ST/BROOKLYN AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3174",
        "report_no": "140082715",
        "reported_date": "2014-11-16T00:00:00.000",
        "reported_time": "00:39",
        "sex_1": "M",
        "to_date": "2014-11-16T00:00:00.000",
        "to_time": "00:35",
        "zip_code_1": "64110"
    },
    {
        "address": "RUSKIN WA/SYCAMORE TE",
        "age_1": "28",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-11T00:00:00.000",
        "from_time": "08:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "RUSKIN WA/SYCAMORE TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7086",
        "report_no": "140002303",
        "reported_date": "2014-01-11T00:00:00.000",
        "reported_time": "08:34",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "5600  HIGHLAND AV",
        "age_1": "20",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-21T00:00:00.000",
        "from_time": "13:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.565816,
                39.024973
            ]
        },
        "location_1_location": "5600 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4500",
        "report_no": "140034703",
        "reported_date": "2014-05-21T00:00:00.000",
        "reported_time": "13:44",
        "sex_1": "M",
        "to_date": "2014-05-21T00:00:00.000",
        "to_time": "13:45",
        "zip_code_1": "64110"
    },
    {
        "address": "12400  E 53 TE",
        "age_1": "45",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-23T00:00:00.000",
        "from_time": "05:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.432479,
                39.024388
            ]
        },
        "location_1_location": "12400 E 53 TE",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4610",
        "report_no": "140005206",
        "reported_date": "2014-01-23T00:00:00.000",
        "reported_time": "08:33",
        "sex_1": "F",
        "to_date": "2014-01-23T00:00:00.000",
        "to_time": "07:00",
        "zip_code_1": "64133"
    },
    {
        "address": "6000  KENWOOD AV",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-16T00:00:00.000",
        "from_time": "20:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.580098,
                39.018402
            ]
        },
        "location_1_location": "6000 KENWOOD AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4743",
        "report_no": "140082893",
        "reported_date": "2014-11-16T00:00:00.000",
        "reported_time": "20:26",
        "sex_1": "M",
        "zip_code_1": "64113"
    },
    {
        "address": "CYPRESS AV/THOMPSON AV",
        "age_1": "24",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-24T00:00:00.000",
        "from_time": "00:55",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "CYPRESS AV/THOMPSON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0507",
        "report_no": "140051684",
        "reported_date": "2014-07-24T00:00:00.000",
        "reported_time": "00:55",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "S 16 ST/ELMWOOD AV",
        "age_1": "45",
        "area_1": "OSPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-16T00:00:00.000",
        "from_time": "22:46",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "S 16 ST/ELMWOOD AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PWX001",
        "report_no": "140041684",
        "reported_date": "2014-06-16T00:00:00.000",
        "reported_time": "22:46",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "5100  E FRONT ST",
        "age_1": "33",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-24T00:00:00.000",
        "from_time": "01:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521257,
                39.130874
            ]
        },
        "location_1_location": "5100 E FRONT ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0055",
        "report_no": "140051690",
        "reported_date": "2014-07-24T00:00:00.000",
        "reported_time": "01:25",
        "sex_1": "M"
    },
    {
        "address": "8100  HIGHLAND AV",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "20:06",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568195,
                38.980894
            ]
        },
        "location_1_location": "8100 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5951",
        "report_no": "140087882",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "20:06",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "4300  HIGHLAND AV",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-12T00:00:00.000",
        "from_time": "01:14",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.564466,
                39.048533
            ]
        },
        "location_1_location": "4300 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3491",
        "report_no": "140024286",
        "reported_date": "2014-04-12T00:00:00.000",
        "reported_time": "01:14",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "W 36 ST/CENTRAL ST",
        "age_1": "25",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-16T00:00:00.000",
        "from_time": "01:13",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "W 36 ST/CENTRAL ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2820",
        "report_no": "140010654",
        "reported_date": "2014-02-16T00:00:00.000",
        "reported_time": "01:13",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "E 55 ST/PROSPECT AV",
        "age_1": "17",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-24T00:00:00.000",
        "from_time": "21:16",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 55 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4367",
        "report_no": "140077201",
        "reported_date": "2014-10-24T00:00:00.000",
        "reported_time": "21:16",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "200  W 36 ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-26T00:00:00.000",
        "from_time": "20:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588449,
                39.062108
            ]
        },
        "location_1_location": "200 W 36 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2824",
        "report_no": "140006057",
        "reported_date": "2014-01-26T00:00:00.000",
        "reported_time": "20:25",
        "sex_1": "U",
        "to_date": "2014-01-26T00:00:00.000",
        "to_time": "20:30",
        "zip_code_1": "64111"
    },
    {
        "address": "8000  WORNALL RD",
        "age_1": "45",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-17T00:00:00.000",
        "from_time": "08:25",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594695,
                38.983092
            ]
        },
        "location_1_location": "8000 WORNALL RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5855",
        "report_no": "140017700",
        "reported_date": "2014-03-17T00:00:00.000",
        "reported_time": "08:28",
        "sex_1": "F",
        "zip_code_1": "64114"
    },
    {
        "address": "E 51 ST/PROSPECT AV",
        "age_1": "18",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-20T00:00:00.000",
        "from_time": "16:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 51 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4054",
        "report_no": "140034501",
        "reported_date": "2014-05-20T00:00:00.000",
        "reported_time": "18:07",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "1800  NE VIVION RD",
        "age_1": "3",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "21:25",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558185,
                39.181112
            ]
        },
        "location_1_location": "1800 NE VIVION RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC0956",
        "report_no": "140029619",
        "reported_date": "2014-05-02T00:00:00.000",
        "reported_time": "21:30",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "1600  N UNIVERSAL AV",
        "age_1": "29",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-04T00:00:00.000",
        "from_time": "06:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.506242,
                39.135397
            ]
        },
        "location_1_location": "1600 N UNIVERSAL AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0023",
        "report_no": "140000740",
        "reported_date": "2014-01-04T00:00:00.000",
        "reported_time": "06:29",
        "sex_1": "M",
        "zip_code_1": "64120"
    },
    {
        "address": "1100  TROOST AV",
        "age_1": "34",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-26T00:00:00.000",
        "from_time": "18:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569869,
                39.100585
            ]
        },
        "location_1_location": "1100 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1046",
        "report_no": "140069471",
        "reported_date": "2014-09-26T00:00:00.000",
        "reported_time": "18:44",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "100  W 39 ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-14T00:00:00.000",
        "from_time": "21:20",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587423,
                39.056642
            ]
        },
        "location_1_location": "100 W 39 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3132",
        "report_no": "140089660",
        "reported_date": "2014-12-14T00:00:00.000",
        "reported_time": "21:20",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "4000  FLORA AVE",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-09T00:00:00.000",
        "from_time": "20:57",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.566469,
                39.053985
            ]
        },
        "location_1_location": "4000 FLORA AVE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3244",
        "report_no": "140081252",
        "reported_date": "2014-11-09T00:00:00.000",
        "reported_time": "20:59",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "2300  HOLMES ST",
        "area_1": "CPD",
        "beat": "115",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-28T00:00:00.000",
        "from_time": "17:26",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575826,
                39.085043
            ]
        },
        "location_1_location": "2300 HOLMES ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1938",
        "report_no": "140044950",
        "reported_date": "2014-06-28T00:00:00.000",
        "reported_time": "17:26",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "E 85 ST/BRUCE R WATKINS DR",
        "age_1": "40",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-19T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 85 ST/BRUCE R WATKINS DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6036",
        "report_no": "140075626",
        "reported_date": "2014-10-19T00:00:00.000",
        "reported_time": "05:19",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "1700  GUINOTTE AV",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-19T00:00:00.000",
        "from_time": "16:46",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561599,
                39.116608
            ]
        },
        "location_1_location": "1700 GUINOTTE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0206",
        "report_no": "140004346",
        "reported_date": "2014-01-19T00:00:00.000",
        "reported_time": "16:46",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "INDEPENDENCE AV/VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-28T00:00:00.000",
        "from_time": "01:27",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/VAN BRUNT BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0622",
        "report_no": "140036418",
        "reported_date": "2014-05-28T00:00:00.000",
        "reported_time": "01:27",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 74 ST/TRACY AV",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "04:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 74 ST/TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5535",
        "report_no": "140077746",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "04:23",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "8600  E 110 ST",
        "age_1": "15",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-22T00:00:00.000",
        "from_time": "21:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49185,
                38.924068
            ]
        },
        "location_1_location": "8600 E 110 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7008",
        "report_no": "140019166",
        "reported_date": "2014-03-22T00:00:00.000",
        "reported_time": "21:44",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "5800  E 19 TE",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-23T00:00:00.000",
        "from_time": "11:42",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514945,
                39.087393
            ]
        },
        "location_1_location": "5800 E 19 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1839",
        "report_no": "140060190",
        "reported_date": "2014-08-23T00:00:00.000",
        "reported_time": "11:53",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "E 9 ST/TROOST AV",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-17T00:00:00.000",
        "from_time": "21:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 9 ST/TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0820",
        "report_no": "140058552",
        "reported_date": "2014-08-17T00:00:00.000",
        "reported_time": "21:23",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "5500  E 84 TE",
        "age_1": "28",
        "area_1": "MPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-16T00:00:00.000",
        "from_time": "19:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524163,
                38.972917
            ]
        },
        "location_1_location": "5500 E 84 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6117",
        "report_no": "140049740",
        "reported_date": "2014-07-16T00:00:00.000",
        "reported_time": "19:28",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "W 44 ST/PENNSYLVANIA AV",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-29T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 44 ST/PENNSYLVANIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3469",
        "report_no": "140085723",
        "reported_date": "2014-11-29T00:00:00.000",
        "reported_time": "01:51",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3800  ANDERSON AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-13T00:00:00.000",
        "from_time": "01:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.536495,
                39.11126
            ]
        },
        "location_1_location": "3800 ANDERSON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0355",
        "report_no": "140073948",
        "reported_date": "2014-10-13T00:00:00.000",
        "reported_time": "01:16",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "5500  E TRUMAN RD",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "20:35",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.518081,
                39.094107
            ]
        },
        "location_1_location": "5500 E TRUMAN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1428",
        "report_no": "140074688",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "20:39",
        "sex_1": "M",
        "to_date": "2014-10-15T00:00:00.000",
        "to_time": "20:40",
        "zip_code_1": "64127"
    },
    {
        "address": "9900  E BANNISTER RD",
        "age_1": "22",
        "area_1": "SPD",
        "beat": "544",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-10T00:00:00.000",
        "from_time": "02:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.467451,
                38.950701
            ]
        },
        "location_1_location": "9900 E BANNISTER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6674",
        "report_no": "140015832",
        "reported_date": "2014-03-10T00:00:00.000",
        "reported_time": "02:23",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "4800  INDEPENDENCE AV",
        "age_1": "22",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-29T00:00:00.000",
        "from_time": "03:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525579,
                39.105467
            ]
        },
        "location_1_location": "4800 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0622",
        "report_no": "140020656",
        "reported_date": "2014-03-30T00:00:00.000",
        "reported_time": "13:40",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "N AMBASSADOR DR/N BOARDWALK AV",
        "age_1": "27",
        "area_1": "NPD",
        "beat": "422",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-12T00:00:00.000",
        "from_time": "12:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.697028,
                39.219069
            ]
        },
        "location_1_location": "N AMBASSADOR DR/N BOARDWALK AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0321",
        "report_no": "140057014",
        "reported_date": "2014-08-12T00:00:00.000",
        "reported_time": "13:00",
        "sex_1": "M",
        "zip_code_1": "64152"
    },
    {
        "address": "6200  BROOKSIDE BL",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-24T00:00:00.000",
        "from_time": "12:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590781,
                39.015657
            ]
        },
        "location_1_location": "6200 BROOKSIDE BL",
        "offense": "302",
        "rep_dist_1": "PJ4864",
        "report_no": "140027441",
        "reported_date": "2014-04-24T00:00:00.000",
        "reported_time": "12:47",
        "zip_code_1": "64114"
    },
    {
        "address": "5300  HARRISON ST",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-09T00:00:00.000",
        "from_time": "02:06",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574806,
                39.030762
            ]
        },
        "location_1_location": "5300 HARRISON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4255",
        "report_no": "140047638",
        "reported_date": "2014-07-09T00:00:00.000",
        "reported_time": "02:06",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "4400  PROSPECT AV",
        "age_1": "72",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "09:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.554115,
                39.046042
            ]
        },
        "location_1_location": "4400 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3590",
        "report_no": "140053370",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "09:44",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "E 40 ST/TRACY AV",
        "age_1": "38",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-06T00:00:00.000",
        "from_time": "23:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 40 ST/TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3153",
        "report_no": "140064525",
        "reported_date": "2014-09-08T00:00:00.000",
        "reported_time": "12:18",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "W 74 ST/WASHINGTON ST",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.59572,
                38.958286
            ]
        },
        "location_1_location": "W 74 ST/WASHINGTON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5506",
        "report_no": "140007597",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "02:47",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "E 34 ST/GILLHAM RD",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-09T00:00:00.000",
        "from_time": "02:12",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 34 ST/GILLHAM RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2757",
        "report_no": "140056095",
        "reported_date": "2014-08-09T00:00:00.000",
        "reported_time": "02:12",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "1700  W 133 ST",
        "area_1": "SPD",
        "beat": "535",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-13T00:00:00.000",
        "from_time": "06:28",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60438,
                38.886578
            ]
        },
        "location_1_location": "1700 W 133 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7404",
        "report_no": "140035570",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "15:13",
        "sex_1": "F",
        "zip_code_1": "64145"
    },
    {
        "address": "E 30 TE/DRURY AV",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-14T00:00:00.000",
        "from_time": "19:07",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 30 TE/DRURY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2494",
        "report_no": "140032940",
        "reported_date": "2014-05-14T00:00:00.000",
        "reported_time": "19:10",
        "sex_1": "F",
        "zip_code_1": "64128"
    },
    {
        "address": "W 54 ST/WYANDOTTE ST",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-11T00:00:00.000",
        "from_time": "22:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.459478,
                39.015518
            ]
        },
        "location_1_location": "W 54 ST/WYANDOTTE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4269",
        "report_no": "140040337",
        "reported_date": "2014-06-11T00:00:00.000",
        "reported_time": "22:06",
        "sex_1": "M",
        "to_date": "2014-06-11T00:00:00.000",
        "to_time": "22:15",
        "zip_code_1": "64133"
    },
    {
        "address": "W 6 ST/BROADWAY",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-17T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 6 ST/BROADWAY",
        "offense": "302",
        "rep_dist_1": "PJ0597",
        "report_no": "140025849",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "10:14",
        "zip_code_1": "64111"
    },
    {
        "address": "7300  NE PARVIN RD",
        "age_1": "38",
        "area_1": "SCP",
        "beat": "635",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "04:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495683,
                39.168569
            ]
        },
        "location_1_location": "7300 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1343",
        "report_no": "140073542",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "05:21",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "6800  LONGVIEW RD",
        "age_1": "20",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.512549,
                38.915438
            ]
        },
        "location_1_location": "6800 LONGVIEW RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7220",
        "report_no": "140087808",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "13:38",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E 40 ST/HOLMES ST",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-09T00:00:00.000",
        "from_time": "22:16",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 40 ST/HOLMES ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3138",
        "report_no": "140023727",
        "reported_date": "2014-04-09T00:00:00.000",
        "reported_time": "22:22",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "11200  CRYSTAL AV",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-23T00:00:00.000",
        "from_time": "06:56",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.503075,
                38.919656
            ]
        },
        "location_1_location": "11200 CRYSTAL AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ7130",
        "report_no": "140027110",
        "reported_date": "2014-04-23T00:00:00.000",
        "reported_time": "06:56",
        "sex_1": "U",
        "zip_code_1": "64134"
    },
    {
        "address": "1000  E 9 ST",
        "age_1": "24",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-03-24T00:00:00.000",
        "from_time": "14:13",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.570851,
                39.103196
            ]
        },
        "location_1_location": "1000 E 9 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0891",
        "report_no": "140019539",
        "reported_date": "2014-03-24T00:00:00.000",
        "reported_time": "14:13",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "5200  NW 64 ST",
        "age_1": "24",
        "area_1": "NPD",
        "beat": "413",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-04-17T00:00:00.000",
        "from_time": "11:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.640193,
                39.210562
            ]
        },
        "location_1_location": "5200 NW 64 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0665",
        "report_no": "140025648",
        "reported_date": "2014-04-17T00:00:00.000",
        "reported_time": "11:56",
        "sex_1": "F",
        "to_date": "2014-04-17T00:00:00.000",
        "to_time": "11:55",
        "zip_code_1": "64151"
    },
    {
        "address": "10400  E 42 ST",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-26T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.456393,
                39.046571
            ]
        },
        "location_1_location": "10400 E 42 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3584",
        "report_no": "140006033",
        "reported_date": "2014-01-26T00:00:00.000",
        "reported_time": "17:17",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "8100  E 107 ST",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "00:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495919,
                38.930088
            ]
        },
        "location_1_location": "8100 E 107 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6857",
        "report_no": "140036729",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "00:59",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "3300  E 30 ST",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-22T00:00:00.000",
        "from_time": "18:46",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544149,
                39.071416
            ]
        },
        "location_1_location": "3300 E 30 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2499",
        "report_no": "140051322",
        "reported_date": "2014-07-22T00:00:00.000",
        "reported_time": "18:46",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "7300  NE PARVIN RD",
        "age_1": "20",
        "area_1": "SCP",
        "beat": "635",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-15T00:00:00.000",
        "from_time": "05:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.494873,
                39.168417
            ]
        },
        "location_1_location": "7300 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1343",
        "report_no": "140033010",
        "reported_date": "2014-05-15T00:00:00.000",
        "reported_time": "05:15",
        "sex_1": "F"
    },
    {
        "address": "4400  CLOON AV",
        "age_1": "21",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-11T00:00:00.000",
        "from_time": "18:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.53021,
                39.100058
            ]
        },
        "location_1_location": "4400 CLOON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1019",
        "report_no": "140048396",
        "reported_date": "2014-07-11T00:00:00.000",
        "reported_time": "18:18",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "1900  JACKSON AV",
        "age_1": "43",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-30T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.533498,
                39.088655
            ]
        },
        "location_1_location": "1900 JACKSON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1716",
        "report_no": "140093404",
        "reported_date": "2014-12-30T00:00:00.000",
        "reported_time": "20:42",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "7300  PROSPECT AV",
        "age_1": "53",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "9",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557146,
                38.994273
            ]
        },
        "location_1_location": "7300 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5568",
        "report_no": "140039672",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "14:15",
        "sex_1": "F",
        "to_date": "2014-06-09T00:00:00.000",
        "to_time": "14:15",
        "zip_code_1": "64132"
    },
    {
        "address": "500  E 105 ST",
        "area_1": "SPD",
        "beat": "533",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-08T00:00:00.000",
        "from_time": "21:41",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586119,
                38.938268
            ]
        },
        "location_1_location": "500 E 105 ST",
        "offense": "302",
        "rep_dist_1": "PJ6764",
        "report_no": "140064653",
        "reported_date": "2014-09-08T00:00:00.000",
        "reported_time": "21:41",
        "zip_code_1": "64131"
    },
    {
        "address": "3100  TROOST AV",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-07T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.571366,
                39.070193
            ]
        },
        "location_1_location": "3100 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2539",
        "report_no": "140080691",
        "reported_date": "2014-11-07T00:00:00.000",
        "reported_time": "11:06",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "600  E LINWOOD BL",
        "age_1": "27",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "13:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577678,
                39.068942
            ]
        },
        "location_1_location": "600 E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2629",
        "report_no": "140059957",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "13:36",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "W 74 ST/WASHINGTON ST",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.59572,
                38.958286
            ]
        },
        "location_1_location": "W 74 ST/WASHINGTON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5506",
        "report_no": "140007597",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "02:47",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "5100  E FRONT ST",
        "age_1": "39",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-24T00:00:00.000",
        "from_time": "01:25",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521257,
                39.130874
            ]
        },
        "location_1_location": "5100 E FRONT ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0055",
        "report_no": "140051690",
        "reported_date": "2014-07-24T00:00:00.000",
        "reported_time": "01:25",
        "sex_1": "F"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "age_1": "24",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "19:45",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.499763,
                38.96619
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6284",
        "report_no": "140035619",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "19:45",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "4400  PROSPECT AV",
        "age_1": "16",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-23T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.5541,
                39.046333
            ]
        },
        "location_1_location": "4400 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3586",
        "report_no": "140035260",
        "reported_date": "2014-05-23T00:00:00.000",
        "reported_time": "13:58",
        "sex_1": "M",
        "to_date": "2014-05-23T00:00:00.000",
        "to_time": "13:15",
        "zip_code_1": "64127"
    },
    {
        "address": "100  NW HARLEM RD",
        "age_1": "62",
        "area_1": "NPD",
        "beat": "411",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-09T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58785,
                39.117472
            ]
        },
        "location_1_location": "100 NW HARLEM RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1483",
        "report_no": "140081269",
        "reported_date": "2014-11-09T00:00:00.000",
        "reported_time": "22:51",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "4000  MILL ST",
        "age_1": "35",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-04T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.595958,
                39.053583
            ]
        },
        "location_1_location": "4000 MILL ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3255",
        "report_no": "140063447",
        "reported_date": "2014-09-04T00:00:00.000",
        "reported_time": "08:17",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "200  W 43 ST",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "21:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58383,
                39.049288
            ]
        },
        "location_1_location": "200 W 43 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3382",
        "report_no": "140060084",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "21:57",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "9700  MARION PARK DR",
        "age_1": "4",
        "area_1": "SPD",
        "beat": "531",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-30T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.536133,
                38.950731
            ]
        },
        "location_1_location": "9700 MARION PARK DR",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6588",
        "report_no": "140045510",
        "reported_date": "2014-06-30T00:00:00.000",
        "reported_time": "21:34",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "600  NW 68 ST",
        "area_1": "NPD",
        "beat": "412",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-12T00:00:00.000",
        "from_time": "02:24",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58788,
                39.217418
            ]
        },
        "location_1_location": "600 NW 68 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0599",
        "report_no": "140016382",
        "reported_date": "2014-03-12T00:00:00.000",
        "reported_time": "02:25",
        "sex_1": "M",
        "to_date": "2014-03-12T00:00:00.000",
        "to_time": "04:00",
        "zip_code_1": "64118"
    },
    {
        "address": "3500  BENTON BL",
        "age_1": "54",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-13T00:00:00.000",
        "from_time": "20:49",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.546366,
                39.062223
            ]
        },
        "location_1_location": "3500 BENTON BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2881",
        "report_no": "140010177",
        "reported_date": "2014-02-13T00:00:00.000",
        "reported_time": "20:52",
        "sex_1": "F",
        "zip_code_1": "64128"
    },
    {
        "address": "900  JEFFERSON ST",
        "age_1": "17",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-29T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.592134,
                39.103791
            ]
        },
        "location_1_location": "900 JEFFERSON ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0842",
        "report_no": "140045059",
        "reported_date": "2014-06-29T00:00:00.000",
        "reported_time": "06:47",
        "sex_1": "M",
        "zip_code_1": "64101"
    },
    {
        "address": "4200  NE SUNNYBROOK LN",
        "age_1": "20",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "20:45",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530483,
                39.168278
            ]
        },
        "location_1_location": "4200 NE SUNNYBROOK LN",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1206",
        "report_no": "140039778",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "20:47",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "E 34 ST/HARRISON ST",
        "age_1": "24",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-30T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 34 ST/HARRISON ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2706",
        "report_no": "140070390",
        "reported_date": "2014-09-30T00:00:00.000",
        "reported_time": "05:20",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "4300  E 7 ST",
        "age_1": "64",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-16T00:00:00.000",
        "from_time": "08:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.531442,
                39.104244
            ]
        },
        "location_1_location": "4300 E 7 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0724",
        "report_no": "140066572",
        "reported_date": "2014-09-16T00:00:00.000",
        "reported_time": "08:29",
        "sex_1": "M",
        "to_date": "2014-09-16T00:00:00.000",
        "to_time": "08:28",
        "zip_code_1": "64124"
    },
    {
        "address": "900  PASEO",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-11T00:00:00.000",
        "from_time": "01:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "900 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0902",
        "report_no": "140002253",
        "reported_date": "2014-01-11T00:00:00.000",
        "reported_time": "01:41",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "3300  SOUTH BENTON AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-07T00:00:00.000",
        "from_time": "04:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.549596,
                39.066043
            ]
        },
        "location_1_location": "3300 SOUTH BENTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2735",
        "report_no": "140047096",
        "reported_date": "2014-07-07T00:00:00.000",
        "reported_time": "05:00",
        "sex_1": "M",
        "to_date": "2014-07-07T00:00:00.000",
        "to_time": "04:40",
        "zip_code_1": "64130"
    },
    {
        "address": "1000  W 58 ST",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "21:10",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.599587,
                39.022683
            ]
        },
        "location_1_location": "1000 W 58 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4530",
        "report_no": "140005617",
        "reported_date": "2014-01-24T00:00:00.000",
        "reported_time": "21:15",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "10400  E 42 ST",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-26T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.456393,
                39.046571
            ]
        },
        "location_1_location": "10400 E 42 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3584",
        "report_no": "140006033",
        "reported_date": "2014-01-26T00:00:00.000",
        "reported_time": "17:17",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "ADMIRAL BL/TRACY AV",
        "age_1": "26",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-11-27T00:00:00.000",
        "from_time": "00:33",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "ADMIRAL BL/TRACY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0641",
        "report_no": "140085371",
        "reported_date": "2014-11-27T00:00:00.000",
        "reported_time": "00:33",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "600  NW 68 ST",
        "area_1": "NPD",
        "beat": "412",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-12T00:00:00.000",
        "from_time": "02:23",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587995,
                39.217424
            ]
        },
        "location_1_location": "600 NW 68 ST",
        "offense": "302",
        "rep_dist_1": "PC0599",
        "report_no": "140016382",
        "reported_date": "2014-03-12T00:00:00.000",
        "reported_time": "02:25",
        "zip_code_1": "64154"
    },
    {
        "address": "4400  N CHOUTEAU TF",
        "age_1": "51",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-29T00:00:00.000",
        "from_time": "10:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524566,
                39.20301
            ]
        },
        "location_1_location": "4400 N CHOUTEAU TF",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1152",
        "report_no": "140078377",
        "reported_date": "2014-10-29T00:00:00.000",
        "reported_time": "10:49",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "1700  MOTEN PL",
        "age_1": "31",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-05T00:00:00.000",
        "from_time": "16:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561311,
                39.101674
            ]
        },
        "location_1_location": "1700 MOTEN PL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0910",
        "report_no": "140022614",
        "reported_date": "2014-04-05T00:00:00.000",
        "reported_time": "16:37",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "E 75 ST/TROOST AV",
        "age_1": "78",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-06T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.526039,
                39.130787
            ]
        },
        "location_1_location": "E 75 ST/TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5604",
        "report_no": "140008671",
        "reported_date": "2014-02-06T00:00:00.000",
        "reported_time": "23:00",
        "sex_1": "M",
        "zip_code_1": "64120"
    },
    {
        "address": "300  N BRIGHTON AV",
        "age_1": "32",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "22:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.523268,
                39.114502
            ]
        },
        "location_1_location": "300 N BRIGHTON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0229",
        "report_no": "140079054",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "22:35",
        "sex_1": "M",
        "to_date": "2014-10-31T00:00:00.000",
        "to_time": "22:35",
        "zip_code_1": "64130"
    },
    {
        "address": "200  W 39 ST",
        "age_1": "41",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-28T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588561,
                39.056681
            ]
        },
        "location_1_location": "200 W 39 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3049",
        "report_no": "140078221",
        "reported_date": "2014-10-28T00:00:00.000",
        "reported_time": "18:37",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 59 ST/PROSPECT AV",
        "area_1": "MPD",
        "beat": "223",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-19T00:00:00.000",
        "from_time": "16:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "E 59 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4653",
        "report_no": "140075750",
        "reported_date": "2014-10-19T00:00:00.000",
        "reported_time": "16:52",
        "sex_1": "M"
    },
    {
        "address": "E 63 ST/PASEO",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-19T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 63 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4887",
        "report_no": "140026215",
        "reported_date": "2014-04-19T00:00:00.000",
        "reported_time": "14:13",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "E 24 ST/BRIGHTON AV",
        "age_1": "70",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-26T00:00:00.000",
        "from_time": "21:37",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 24 ST/BRIGHTON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1968",
        "report_no": "140052490",
        "reported_date": "2014-07-26T00:00:00.000",
        "reported_time": "21:55",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "800  ROCKWELL LN",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-22T00:00:00.000",
        "from_time": "10:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.597318,
                39.035371
            ]
        },
        "location_1_location": "800 ROCKWELL LN",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3939",
        "report_no": "140091486",
        "reported_date": "2014-12-22T00:00:00.000",
        "reported_time": "10:13",
        "sex_1": "M",
        "zip_code_1": "64112"
    },
    {
        "address": "39TH/71HWY",
        "area_1": "OSPD",
        "beat": "999",
        "city": "N KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "39TH/71HWY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PCX043",
        "report_no": "140082357",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "12:16",
        "sex_1": "M",
        "to_date": "2014-11-14T00:00:00.000",
        "to_time": "11:30",
        "zip_code_1": "64111"
    },
    {
        "address": "4300  CAMPBELL ST",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574926,
                39.048832
            ]
        },
        "location_1_location": "4300 CAMPBELL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3476",
        "report_no": "140005659",
        "reported_date": "2014-01-25T00:00:00.000",
        "reported_time": "01:31",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "E 59 ST/PROSPECT AV",
        "area_1": "MPD",
        "beat": "223",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-19T00:00:00.000",
        "from_time": "16:52",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "E 59 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4653",
        "report_no": "140075750",
        "reported_date": "2014-10-19T00:00:00.000",
        "reported_time": "16:52",
        "sex_1": "F"
    },
    {
        "address": "4600  J C NICHOLS PK",
        "age_1": "16",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-02T00:00:00.000",
        "from_time": "00:38",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588857,
                39.046481
            ]
        },
        "location_1_location": "4600 J C NICHOLS PK",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3630",
        "report_no": "140054119",
        "reported_date": "2014-08-02T00:00:00.000",
        "reported_time": "00:38",
        "sex_1": "F",
        "zip_code_1": "64111"
    },
    {
        "address": "11100  GRANDVIEW RD",
        "area_1": "SPD",
        "beat": "534",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-16T00:00:00.000",
        "from_time": "01:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.532341,
                38.924008
            ]
        },
        "location_1_location": "11100 GRANDVIEW RD",
        "offense": "302",
        "rep_dist_1": "PJ7023",
        "report_no": "140074749",
        "reported_date": "2014-10-16T00:00:00.000",
        "reported_time": "01:40",
        "zip_code_1": "64137"
    },
    {
        "address": "6800  BELLEFONTAINE AV",
        "age_1": "36",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-28T00:00:00.000",
        "from_time": "12:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.550819,
                39.003116
            ]
        },
        "location_1_location": "6800 BELLEFONTAINE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5252",
        "report_no": "140078121",
        "reported_date": "2014-10-28T00:00:00.000",
        "reported_time": "12:55",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "4200  BROOKLYN AV",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-06T00:00:00.000",
        "from_time": "00:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558556,
                39.049793
            ]
        },
        "location_1_location": "4200 BROOKLYN AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ3424",
        "report_no": "140030445",
        "reported_date": "2014-05-06T00:00:00.000",
        "reported_time": "00:47",
        "sex_1": "U"
    },
    {
        "address": "900  B WESTPORT RD",
        "age_1": "27",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-07T00:00:00.000",
        "from_time": "02:55",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.596903,
                39.050706
            ]
        },
        "location_1_location": "900 B WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3376",
        "report_no": "140072338",
        "reported_date": "2014-10-07T00:00:00.000",
        "reported_time": "03:07",
        "sex_1": "M",
        "to_date": "2014-10-07T00:00:00.000",
        "to_time": "03:05",
        "zip_code_1": "64111"
    },
    {
        "address": "00  W 39 ST",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-30T00:00:00.000",
        "from_time": "13:53",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.585982,
                39.056586
            ]
        },
        "location_1_location": "00 W 39 ST",
        "offense": "302",
        "rep_dist_1": "PJ3126",
        "report_no": "140093313",
        "reported_date": "2014-12-30T00:00:00.000",
        "reported_time": "13:54",
        "zip_code_1": "64111"
    },
    {
        "address": "CYPRESS AV/SMART AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-04T00:00:00.000",
        "from_time": "13:18",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "CYPRESS AV/SMART AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0421",
        "report_no": "140022258",
        "reported_date": "2014-04-04T00:00:00.000",
        "reported_time": "13:18",
        "sex_1": "M"
    },
    {
        "address": "6300  TROOST AV",
        "age_1": "18",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-04-17T00:00:00.000",
        "from_time": "18:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574617,
                39.013173
            ]
        },
        "location_1_location": "6300 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4934",
        "report_no": "140025743",
        "reported_date": "2014-04-17T00:00:00.000",
        "reported_time": "18:57",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "E 39 ST/WOODLAND AV",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-18T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 39 ST/WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3098",
        "report_no": "140033837",
        "reported_date": "2014-05-18T00:00:00.000",
        "reported_time": "07:58",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "100  W 47 ST",
        "age_1": "27",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-28T00:00:00.000",
        "from_time": "13:28",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58271,
                39.178798
            ]
        },
        "location_1_location": "100 W 47 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3754",
        "report_no": "140052889",
        "reported_date": "2014-07-28T00:00:00.000",
        "reported_time": "13:31",
        "sex_1": "M"
    },
    {
        "address": "1400  COLLINS AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-30T00:00:00.000",
        "from_time": "13:22",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500738,
                39.093537
            ]
        },
        "location_1_location": "1400 COLLINS AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1300",
        "report_no": "140078693",
        "reported_date": "2014-10-30T00:00:00.000",
        "reported_time": "13:22",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "10100  STATE LINE RD",
        "area_1": "SPD",
        "beat": "533",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-08-10T00:00:00.000",
        "from_time": "14:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.608183,
                38.943918
            ]
        },
        "location_1_location": "10100 STATE LINE RD",
        "offense": "302",
        "rep_dist_1": "PJ6683",
        "report_no": "140056471",
        "reported_date": "2014-08-10T00:00:00.000",
        "reported_time": "14:16",
        "zip_code_1": "64114"
    },
    {
        "address": "1200  NW 57 ST",
        "age_1": "27",
        "area_1": "NPD",
        "beat": "412",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "20:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.59679,
                39.198338
            ]
        },
        "location_1_location": "1200 NW 57 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0668",
        "report_no": "140074689",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "20:30",
        "sex_1": "M",
        "zip_code_1": "64118"
    },
    {
        "address": "4600  WYANDOTTE ST",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-25T00:00:00.000",
        "from_time": "21:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.5895,
                39.043117
            ]
        },
        "location_1_location": "4600 WYANDOTTE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3706",
        "report_no": "140052241",
        "reported_date": "2014-07-25T00:00:00.000",
        "reported_time": "21:41",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "5800  E 17 ST",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "11:42",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514791,
                39.09036
            ]
        },
        "location_1_location": "5800 E 17 ST",
        "offense": "302",
        "rep_dist_1": "PJ1791",
        "report_no": "140074532",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "11:42",
        "zip_code_1": "64127"
    },
    {
        "address": "11900  NW PLAZA CI",
        "age_1": "19",
        "area_1": "NPD",
        "beat": "424",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-12T00:00:00.000",
        "from_time": "23:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.68256,
                39.309048
            ]
        },
        "location_1_location": "11900 NW PLAZA CI",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PP0129",
        "report_no": "140032399",
        "reported_date": "2014-05-12T00:00:00.000",
        "reported_time": "23:41",
        "sex_1": "M",
        "zip_code_1": "64153"
    },
    {
        "address": "200  W 43 ST",
        "age_1": "26",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "21:57",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58383,
                39.049288
            ]
        },
        "location_1_location": "200 W 43 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3382",
        "report_no": "140060084",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "21:57",
        "sex_1": "F",
        "zip_code_1": "64111"
    },
    {
        "address": "E 39 ST/HARDESTY AV",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "10:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 39 ST/HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3149",
        "report_no": "140087772",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "10:57",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "400  DENVER AV",
        "age_1": "35",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-14T00:00:00.000",
        "from_time": "08:30",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520836,
                39.116282
            ]
        },
        "location_1_location": "400 DENVER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0530",
        "report_no": "140024800",
        "reported_date": "2014-04-14T00:00:00.000",
        "reported_time": "08:41",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "9000  GRAND AV",
        "age_1": "30",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-02T00:00:00.000",
        "from_time": "12:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588576,
                38.965062
            ]
        },
        "location_1_location": "9000 GRAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6314",
        "report_no": "140086497",
        "reported_date": "2014-12-02T00:00:00.000",
        "reported_time": "12:43",
        "sex_1": "F",
        "zip_code_1": "64114"
    },
    {
        "address": "4000  BROADWAY",
        "age_1": "28",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "02:55",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590931,
                39.054743
            ]
        },
        "location_1_location": "4000 BROADWAY",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3215",
        "report_no": "140073526",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "02:55",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 31 ST/FLORA AV",
        "age_1": "54",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-01T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 31 ST/FLORA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2466",
        "report_no": "140037667",
        "reported_date": "2014-06-01T00:00:00.000",
        "reported_time": "21:03",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "5600  CHARLOTTE ST",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-04T00:00:00.000",
        "from_time": "23:19",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577416,
                39.025352
            ]
        },
        "location_1_location": "5600 CHARLOTTE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4480",
        "report_no": "140038497",
        "reported_date": "2014-06-04T00:00:00.000",
        "reported_time": "23:19",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "5200  NW 82 TE",
        "area_1": "NPD",
        "beat": "414",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-05T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.64011,
                39.243466
            ]
        },
        "location_1_location": "5200 NW 82 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PP0379",
        "report_no": "140072023",
        "reported_date": "2014-10-05T00:00:00.000",
        "reported_time": "23:47",
        "sex_1": "M",
        "zip_code_1": "64154"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "age_1": "12",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-20T00:00:00.000",
        "from_time": "20:01",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49969,
                38.966338
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6327",
        "report_no": "140091144",
        "reported_date": "2014-12-20T00:00:00.000",
        "reported_time": "20:01",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "400  N LAWNDALE AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-26T00:00:00.000",
        "from_time": "02:08",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.515456,
                39.108613
            ]
        },
        "location_1_location": "400 N LAWNDALE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0199",
        "report_no": "140035922",
        "reported_date": "2014-05-26T00:00:00.000",
        "reported_time": "02:08",
        "sex_1": "F"
    },
    {
        "address": "3200  E LINWOOD BL",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-02T00:00:00.000",
        "from_time": "15:53",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54594,
                39.067846
            ]
        },
        "location_1_location": "3200 E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2610",
        "report_no": "140062970",
        "reported_date": "2014-09-02T00:00:00.000",
        "reported_time": "16:01",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "E 63 ST/PASEO",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "02:28",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 63 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4887",
        "report_no": "140075828",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "02:28",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "4000  CHARLOTTE ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-04T00:00:00.000",
        "from_time": "21:01",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575756,
                39.054293
            ]
        },
        "location_1_location": "4000 CHARLOTTE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3228",
        "report_no": "140022418",
        "reported_date": "2014-04-04T00:00:00.000",
        "reported_time": "21:01",
        "sex_1": "M"
    },
    {
        "address": "E 59 ST/HARRISON ST",
        "age_1": "43",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-17T00:00:00.000",
        "from_time": "09:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.59572,
                38.958286
            ]
        },
        "location_1_location": "E 59 ST/HARRISON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4626",
        "report_no": "140033601",
        "reported_date": "2014-05-17T00:00:00.000",
        "reported_time": "10:36",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "800  E ARMOUR BL",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-01T00:00:00.000",
        "from_time": "22:32",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575088,
                39.063443
            ]
        },
        "location_1_location": "800 E ARMOUR BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2847",
        "report_no": "140070953",
        "reported_date": "2014-10-01T00:00:00.000",
        "reported_time": "22:32",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "200  W 39 ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-04T00:00:00.000",
        "from_time": "15:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588561,
                39.056681
            ]
        },
        "location_1_location": "200 W 39 ST",
        "offense": "302",
        "rep_dist_1": "PJ3049",
        "report_no": "140008177",
        "reported_date": "2014-02-04T00:00:00.000",
        "reported_time": "17:24",
        "zip_code_1": "64109"
    },
    {
        "address": "E 55 ST/JACKSON AV",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "211",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-25T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 55 ST/JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4357",
        "report_no": "140044111",
        "reported_date": "2014-06-25T00:00:00.000",
        "reported_time": "15:00",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "4300  MAIN ST",
        "area_1": "CPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-16T00:00:00.000",
        "from_time": "08:41",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586568,
                39.049273
            ]
        },
        "location_1_location": "4300 MAIN ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3459",
        "report_no": "140074796",
        "reported_date": "2014-10-16T00:00:00.000",
        "reported_time": "08:41",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "5800  PEERY AV",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-05T00:00:00.000",
        "from_time": "13:34",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514393,
                39.098546
            ]
        },
        "location_1_location": "5800 PEERY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1115",
        "report_no": "140030304",
        "reported_date": "2014-05-05T00:00:00.000",
        "reported_time": "13:34",
        "sex_1": "F"
    },
    {
        "address": "I 70 HW/PROSPECT AV",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-07T00:00:00.000",
        "from_time": "19:08",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "I 70 HW/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1259",
        "report_no": "140008856",
        "reported_date": "2014-02-07T00:00:00.000",
        "reported_time": "19:08",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3500  BROADWAY BLVD",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-17T00:00:00.000",
        "from_time": "08:31",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590387,
                39.063883
            ]
        },
        "location_1_location": "3500 BROADWAY BLVD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2792",
        "report_no": "140066870",
        "reported_date": "2014-09-17T00:00:00.000",
        "reported_time": "08:31",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3500  BROADWAY BLVD",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-17T00:00:00.000",
        "from_time": "08:31",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590387,
                39.063883
            ]
        },
        "location_1_location": "3500 BROADWAY BLVD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2792",
        "report_no": "140066870",
        "reported_date": "2014-09-17T00:00:00.000",
        "reported_time": "08:31",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3500  BROADWAY BLVD",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-17T00:00:00.000",
        "from_time": "08:31",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590387,
                39.063883
            ]
        },
        "location_1_location": "3500 BROADWAY BLVD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2792",
        "report_no": "140066870",
        "reported_date": "2014-09-17T00:00:00.000",
        "reported_time": "08:31",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3600  NE PARVIN RD",
        "age_1": "20",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-03T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538117,
                39.163908
            ]
        },
        "location_1_location": "3600 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1313",
        "report_no": "140079523",
        "reported_date": "2014-11-03T00:00:00.000",
        "reported_time": "02:03",
        "sex_1": "M",
        "zip_code_1": "64118"
    },
    {
        "address": "3600  E 19 ST",
        "age_1": "53",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-02T00:00:00.000",
        "from_time": "08:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54025,
                39.088975
            ]
        },
        "location_1_location": "3600 E 19 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1624",
        "report_no": "140087024",
        "reported_date": "2014-12-04T00:00:00.000",
        "reported_time": "12:10",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "11100  HOLMES RD",
        "age_1": "44",
        "area_1": "SPD",
        "beat": "533",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-13T00:00:00.000",
        "from_time": "05:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583426,
                38.925304
            ]
        },
        "location_1_location": "11100 HOLMES RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ7024",
        "report_no": "140024591",
        "reported_date": "2014-04-13T00:00:00.000",
        "reported_time": "05:50",
        "sex_1": "F",
        "zip_code_1": "64131"
    },
    {
        "address": "E 40 ST/HOLMES ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-09T00:00:00.000",
        "from_time": "22:16",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 40 ST/HOLMES ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3138",
        "report_no": "140023727",
        "reported_date": "2014-04-09T00:00:00.000",
        "reported_time": "22:22",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "200  W 36 ST",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-30T00:00:00.000",
        "from_time": "15:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588449,
                39.062108
            ]
        },
        "location_1_location": "200 W 36 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2824",
        "report_no": "140045415",
        "reported_date": "2014-06-30T00:00:00.000",
        "reported_time": "15:50",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "1700  E 12 TE",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-20T00:00:00.000",
        "from_time": "23:18",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.562328,
                39.098411
            ]
        },
        "location_1_location": "1700 E 12 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1180",
        "report_no": "140042840",
        "reported_date": "2014-06-20T00:00:00.000",
        "reported_time": "23:18",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "E 68 ST/PASEO",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "06:35",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 68 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5175",
        "report_no": "140075847",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "06:42",
        "sex_1": "M",
        "to_date": "2014-10-20T00:00:00.000",
        "to_time": "06:50",
        "zip_code_1": "64130"
    },
    {
        "address": "9900  E BANNISTER RD",
        "age_1": "21",
        "area_1": "SPD",
        "beat": "544",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-10T00:00:00.000",
        "from_time": "02:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.467451,
                38.950701
            ]
        },
        "location_1_location": "9900 E BANNISTER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6674",
        "report_no": "140015832",
        "reported_date": "2014-03-10T00:00:00.000",
        "reported_time": "02:23",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "4100  TRACY AV",
        "age_1": "29",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "08:38",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569936,
                39.052324
            ]
        },
        "location_1_location": "4100 TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3319",
        "report_no": "140007614",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "08:38",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "3600  THOMPSON AV",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-01T00:00:00.000",
        "from_time": "00:54",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.53884,
                39.107718
            ]
        },
        "location_1_location": "3600 THOMPSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0580",
        "report_no": "140045536",
        "reported_date": "2014-07-01T00:00:00.000",
        "reported_time": "00:54",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "3000  VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-21T00:00:00.000",
        "from_time": "10:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520798,
                39.070795
            ]
        },
        "location_1_location": "3000 VAN BRUNT BL",
        "offense": "302",
        "rep_dist_1": "PJ2486",
        "report_no": "140091265",
        "reported_date": "2014-12-21T00:00:00.000",
        "reported_time": "10:51",
        "to_date": "2014-12-21T00:00:00.000",
        "to_time": "10:51",
        "zip_code_1": "64124"
    },
    {
        "address": "5500  GLADSTONE BL",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-06T00:00:00.000",
        "from_time": "19:40",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517028,
                39.118834
            ]
        },
        "location_1_location": "5500 GLADSTONE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0170",
        "report_no": "140055447",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "20:53",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "E 12 ST/PASEO",
        "age_1": "22",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-18T00:00:00.000",
        "from_time": "22:32",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 12 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1058",
        "report_no": "140067315",
        "reported_date": "2014-09-18T00:00:00.000",
        "reported_time": "22:32",
        "sex_1": "F",
        "to_date": "2014-09-18T00:00:00.000",
        "to_time": "22:32",
        "zip_code_1": "64106"
    },
    {
        "address": "E 74 ST/TRACY AV",
        "age_1": "45",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "04:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 74 ST/TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5535",
        "report_no": "140077746",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "04:23",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "7600  E 110 ST",
        "age_1": "16",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-11T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "7",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501385,
                38.925775
            ]
        },
        "location_1_location": "7600 E 110 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6964",
        "report_no": "140016348",
        "reported_date": "2014-03-11T00:00:00.000",
        "reported_time": "20:50",
        "sex_1": "M",
        "to_date": "2014-03-11T00:00:00.000",
        "to_time": "19:30",
        "zip_code_1": "64134"
    },
    {
        "address": "7300  E US 40 HW",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-07T00:00:00.000",
        "from_time": "18:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.518223,
                39.068252
            ]
        },
        "location_1_location": "7300 E US 40 HW",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2485",
        "report_no": "140055731",
        "reported_date": "2014-08-07T00:00:00.000",
        "reported_time": "18:55",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3300  E 30 ST",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-22T00:00:00.000",
        "from_time": "18:46",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544149,
                39.071416
            ]
        },
        "location_1_location": "3300 E 30 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2499",
        "report_no": "140051322",
        "reported_date": "2014-07-22T00:00:00.000",
        "reported_time": "18:46",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "8500  HOLMES RD",
        "age_1": "45",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-31T00:00:00.000",
        "from_time": "16:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581228,
                38.973655
            ]
        },
        "location_1_location": "8500 HOLMES RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6160",
        "report_no": "140021291",
        "reported_date": "2014-03-31T00:00:00.000",
        "reported_time": "16:30",
        "sex_1": "F",
        "zip_code_1": "64131"
    },
    {
        "address": "3200  PROSPECT AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-30T00:00:00.000",
        "from_time": "15:06",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552965,
                39.067952
            ]
        },
        "location_1_location": "3200 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2651",
        "report_no": "140070510",
        "reported_date": "2014-09-30T00:00:00.000",
        "reported_time": "15:06",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "W 12 ST/SANTA FE ST",
        "age_1": "30",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-04T00:00:00.000",
        "from_time": "20:10",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "W 12 ST/SANTA FE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0978",
        "report_no": "140071882",
        "reported_date": "2014-10-05T00:00:00.000",
        "reported_time": "11:35",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "E 23 ST/KENSINGTON AV",
        "age_1": "47",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-29T00:00:00.000",
        "from_time": "11:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 23 ST/KENSINGTON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1873",
        "report_no": "140061837",
        "reported_date": "2014-08-29T00:00:00.000",
        "reported_time": "11:28",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "1400  E 30 ST",
        "age_1": "32",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "00:01",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.566511,
                39.072157
            ]
        },
        "location_1_location": "1400 E 30 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2389",
        "report_no": "140029653",
        "reported_date": "2014-05-03T00:00:00.000",
        "reported_time": "00:05",
        "sex_1": "F",
        "zip_code_1": "64109"
    },
    {
        "address": "900  E 63 ST",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-16T00:00:00.000",
        "from_time": "10:27",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576762,
                39.013377
            ]
        },
        "location_1_location": "900 E 63 ST",
        "offense": "302",
        "rep_dist_1": "PJ4875",
        "report_no": "140025355",
        "reported_date": "2014-04-16T00:00:00.000",
        "reported_time": "10:27",
        "zip_code_1": "64130"
    },
    {
        "address": "100  WESTPORT RD",
        "age_1": "26",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-15T00:00:00.000",
        "from_time": "21:07",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587514,
                39.054758
            ]
        },
        "location_1_location": "100 WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3132",
        "report_no": "140058057",
        "reported_date": "2014-08-15T00:00:00.000",
        "reported_time": "21:07",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "1100  OAKLEY AV",
        "age_1": "22",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "13:59",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.516838,
                39.098814
            ]
        },
        "location_1_location": "1100 OAKLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1140",
        "report_no": "140078951",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "13:59",
        "sex_1": "F",
        "zip_code_1": "64128"
    },
    {
        "address": "E 99 ST/HOLMES RD",
        "age_1": "31",
        "area_1": "SPD",
        "beat": "531",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-21T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 99 ST/HOLMES RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6582",
        "report_no": "140026752",
        "reported_date": "2014-04-21T00:00:00.000",
        "reported_time": "18:49",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "2200  CHELSEA AV",
        "age_1": "54",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-17T00:00:00.000",
        "from_time": "21:02",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.526546,
                39.085172
            ]
        },
        "location_1_location": "2200 CHELSEA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1882",
        "report_no": "140083155",
        "reported_date": "2014-11-17T00:00:00.000",
        "reported_time": "21:02",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 9 ST/INDIANA AV",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-20T00:00:00.000",
        "from_time": "19:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "E 9 ST/INDIANA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0884",
        "report_no": "140042792",
        "reported_date": "2014-06-20T00:00:00.000",
        "reported_time": "19:42",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "400  ELMWOOD AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-04T00:00:00.000",
        "from_time": "11:16",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.528245,
                39.108992
            ]
        },
        "location_1_location": "400 ELMWOOD AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0508",
        "report_no": "140071622",
        "reported_date": "2014-10-04T00:00:00.000",
        "reported_time": "11:16",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "300  N BRIGHTON AV",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "22:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.523268,
                39.114502
            ]
        },
        "location_1_location": "300 N BRIGHTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0229",
        "report_no": "140079054",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "22:35",
        "sex_1": "M",
        "to_date": "2014-10-31T00:00:00.000",
        "to_time": "22:35",
        "zip_code_1": "64130"
    },
    {
        "address": "8142 1/2 TROOST AV",
        "age_1": "19",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-11T00:00:00.000",
        "from_time": "20:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57628,
                38.980227
            ]
        },
        "location_1_location": "8142 1/2 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5921",
        "report_no": "140081805",
        "reported_date": "2014-11-11T00:00:00.000",
        "reported_time": "20:58",
        "sex_1": "F",
        "to_date": "2014-11-11T00:00:00.000",
        "to_time": "21:15",
        "zip_code_1": "64133"
    },
    {
        "address": "300  BELMONT BL",
        "age_1": "33",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-16T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.509476,
                39.110192
            ]
        },
        "location_1_location": "300 BELMONT BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0460",
        "report_no": "140041790",
        "reported_date": "2014-06-17T00:00:00.000",
        "reported_time": "09:04",
        "sex_1": "M",
        "to_date": "2014-06-16T00:00:00.000",
        "to_time": "22:00",
        "zip_code_1": "64123"
    },
    {
        "address": "5700  CHARLOTTE ST",
        "age_1": "44",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-15T00:00:00.000",
        "from_time": "01:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577506,
                39.023533
            ]
        },
        "location_1_location": "5700 CHARLOTTE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4550",
        "report_no": "140082523",
        "reported_date": "2014-11-15T00:00:00.000",
        "reported_time": "01:29",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "900  PASEO",
        "age_1": "40",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-27T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "900 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0902",
        "report_no": "140013245",
        "reported_date": "2014-02-27T00:00:00.000",
        "reported_time": "11:03",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "1700  E 63 ST",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-04T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.566401,
                39.012954
            ]
        },
        "location_1_location": "1700 E 63 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4883",
        "report_no": "140038360",
        "reported_date": "2014-06-04T00:00:00.000",
        "reported_time": "13:05",
        "sex_1": "M",
        "to_date": "2014-06-04T00:00:00.000",
        "to_time": "13:20",
        "zip_code_1": "64130"
    },
    {
        "address": "1800  NE VIVION RD",
        "age_1": "28",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "21:25",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558185,
                39.181112
            ]
        },
        "location_1_location": "1800 NE VIVION RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0956",
        "report_no": "140029619",
        "reported_date": "2014-05-02T00:00:00.000",
        "reported_time": "21:30",
        "sex_1": "F",
        "zip_code_1": "64119"
    },
    {
        "address": "100  W 39 ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-14T00:00:00.000",
        "from_time": "21:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587423,
                39.056642
            ]
        },
        "location_1_location": "100 W 39 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3132",
        "report_no": "140089660",
        "reported_date": "2014-12-14T00:00:00.000",
        "reported_time": "21:20",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "I-470 AND JAMES A REED",
        "area_1": "OSPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "00:16",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.487767,
                38.937983
            ]
        },
        "location_1_location": "I-470 AND JAMES A REED",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJX007",
        "report_no": "140036741",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "02:28",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "5600  HIGHLAND AV",
        "age_1": "50",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-21T00:00:00.000",
        "from_time": "13:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.565816,
                39.024973
            ]
        },
        "location_1_location": "5600 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4500",
        "report_no": "140034703",
        "reported_date": "2014-05-21T00:00:00.000",
        "reported_time": "13:44",
        "sex_1": "F",
        "to_date": "2014-05-21T00:00:00.000",
        "to_time": "13:45",
        "zip_code_1": "64110"
    },
    {
        "address": "E 85 ST/PASEO",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "20:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 85 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6081",
        "report_no": "140005720",
        "reported_date": "2014-01-25T00:00:00.000",
        "reported_time": "10:14",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "E 110 ST/SYCAMORE TE",
        "age_1": "20",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-03T00:00:00.000",
        "from_time": "21:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 110 ST/SYCAMORE TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6997",
        "report_no": "140014445",
        "reported_date": "2014-03-04T00:00:00.000",
        "reported_time": "14:40",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "1600  WINCHESTER AV",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-18T00:00:00.000",
        "from_time": "02:15",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501146,
                39.091781
            ]
        },
        "location_1_location": "1600 WINCHESTER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1506",
        "report_no": "140050089",
        "reported_date": "2014-07-18T00:00:00.000",
        "reported_time": "02:40",
        "sex_1": "M"
    },
    {
        "address": "E 43 ST/CLEVELAND AV",
        "age_1": "68",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-11T00:00:00.000",
        "from_time": "23:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 43 ST/CLEVELAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3414",
        "report_no": "140081823",
        "reported_date": "2014-11-11T00:00:00.000",
        "reported_time": "23:52",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "4600  NE VIVION RD",
        "age_1": "25",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-24T00:00:00.000",
        "from_time": "09:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525481,
                39.188019
            ]
        },
        "location_1_location": "4600 NE VIVION RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC0857",
        "report_no": "140084783",
        "reported_date": "2014-11-24T00:00:00.000",
        "reported_time": "09:47",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "E 22 ST/PROSPECT AV",
        "age_1": "32",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-04T00:00:00.000",
        "from_time": "01:04",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "E 22 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1796",
        "report_no": "140046422",
        "reported_date": "2014-07-04T00:00:00.000",
        "reported_time": "01:04",
        "sex_1": "F",
        "zip_code_1": "64124"
    },
    {
        "address": "E 63 ST/PASEO",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-19T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 63 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4887",
        "report_no": "140026215",
        "reported_date": "2014-04-19T00:00:00.000",
        "reported_time": "14:13",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "4300  MAIN ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-30T00:00:00.000",
        "from_time": "06:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586576,
                39.049193
            ]
        },
        "location_1_location": "4300 MAIN ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3459",
        "report_no": "140006867",
        "reported_date": "2014-01-30T00:00:00.000",
        "reported_time": "06:17",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "100  W 47 ST",
        "age_1": "30",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-28T00:00:00.000",
        "from_time": "13:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58271,
                39.178798
            ]
        },
        "location_1_location": "100 W 47 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3754",
        "report_no": "140052889",
        "reported_date": "2014-07-28T00:00:00.000",
        "reported_time": "13:31",
        "sex_1": "M"
    },
    {
        "address": "500  PARK AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-01T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.554346,
                39.108413
            ]
        },
        "location_1_location": "500 PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0554",
        "report_no": "140021610",
        "reported_date": "2014-04-01T00:00:00.000",
        "reported_time": "21:17",
        "sex_1": "M",
        "to_date": "2014-04-01T00:00:00.000",
        "to_time": "21:17"
    },
    {
        "address": "E 11 ST/LYDIA AV",
        "age_1": "26",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-03T00:00:00.000",
        "from_time": "21:32",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 11 ST/LYDIA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0977",
        "report_no": "140046363",
        "reported_date": "2014-07-03T00:00:00.000",
        "reported_time": "21:32",
        "sex_1": "F",
        "zip_code_1": "64106"
    },
    {
        "address": "1900  NE PARVIN RD",
        "age_1": "26",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-02T00:00:00.000",
        "from_time": "21:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55673,
                39.16752
            ]
        },
        "location_1_location": "1900 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1224",
        "report_no": "140079500",
        "reported_date": "2014-11-02T00:00:00.000",
        "reported_time": "22:01",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "NE 81 ST/N HIGHLAND AV",
        "age_1": "35",
        "area_1": "SCP",
        "beat": "642",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-23T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.636159,
                39.25757
            ]
        },
        "location_1_location": "NE 81 ST/N HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC0381",
        "report_no": "140060144",
        "reported_date": "2014-08-23T00:00:00.000",
        "reported_time": "04:46",
        "sex_1": "M",
        "zip_code_1": "64154"
    },
    {
        "address": "6300  TROOST AV",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-18T00:00:00.000",
        "from_time": "19:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574636,
                39.012943
            ]
        },
        "location_1_location": "6300 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4933",
        "report_no": "140090620",
        "reported_date": "2014-12-18T00:00:00.000",
        "reported_time": "19:35",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "BL00  HILLS PARK",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-09T00:00:00.000",
        "from_time": "21:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525539,
                39.113437
            ]
        },
        "location_1_location": "BL00 HILLS PARK",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0073",
        "report_no": "140064925",
        "reported_date": "2014-09-09T00:00:00.000",
        "reported_time": "21:50",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "E EMANUEL CLEAVER II BL/PROSPECT AV",
        "age_1": "49",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-29T00:00:00.000",
        "from_time": "15:37",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E EMANUEL CLEAVER II BL/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3725",
        "report_no": "140053223",
        "reported_date": "2014-07-29T00:00:00.000",
        "reported_time": "15:37",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "1900  E 59 ST",
        "age_1": "26",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-25T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.56372,
                39.018738
            ]
        },
        "location_1_location": "1900 E 59 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4640",
        "report_no": "140060852",
        "reported_date": "2014-08-25T00:00:00.000",
        "reported_time": "21:30",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "1600  W 12 ST",
        "age_1": "48",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-19T00:00:00.000",
        "from_time": "19:26",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.603876,
                39.100124
            ]
        },
        "location_1_location": "1600 W 12 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1090",
        "report_no": "140090898",
        "reported_date": "2014-12-19T00:00:00.000",
        "reported_time": "19:26",
        "sex_1": "M",
        "zip_code_1": "64101"
    },
    {
        "address": "3600  NE PARVIN RD",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-03T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538117,
                39.163908
            ]
        },
        "location_1_location": "3600 NE PARVIN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1313",
        "report_no": "140079523",
        "reported_date": "2014-11-03T00:00:00.000",
        "reported_time": "02:03",
        "sex_1": "M",
        "zip_code_1": "64118"
    },
    {
        "address": "7000  PROSPECT AV",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-03T00:00:00.000",
        "from_time": "22:34",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556855,
                38.999694
            ]
        },
        "location_1_location": "7000 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5341",
        "report_no": "140086914",
        "reported_date": "2014-12-03T00:00:00.000",
        "reported_time": "22:34",
        "sex_1": "M"
    },
    {
        "address": "1900  E 19 ST",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-16T00:00:00.000",
        "from_time": "07:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559901,
                39.09009
            ]
        },
        "location_1_location": "1900 E 19 ST",
        "offense": "302",
        "rep_dist_1": "PJ1650",
        "report_no": "140003523",
        "reported_date": "2014-01-16T00:00:00.000",
        "reported_time": "07:52",
        "zip_code_1": "64110"
    },
    {
        "address": "4300  PASEO",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-12T00:00:00.000",
        "from_time": "17:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "4300 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3486",
        "report_no": "140024464",
        "reported_date": "2014-04-12T00:00:00.000",
        "reported_time": "17:52",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "600  NW 68 ST",
        "age_1": "20",
        "area_1": "NPD",
        "beat": "412",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-12T00:00:00.000",
        "from_time": "02:23",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587995,
                39.217424
            ]
        },
        "location_1_location": "600 NW 68 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0599",
        "report_no": "140016382",
        "reported_date": "2014-03-12T00:00:00.000",
        "reported_time": "02:25",
        "sex_1": "M",
        "zip_code_1": "64154"
    },
    {
        "address": "7600  WORNALL RD",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-18T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594388,
                38.990552
            ]
        },
        "location_1_location": "7600 WORNALL RD",
        "offense": "302",
        "rep_dist_1": "PJ5683",
        "report_no": "140025809",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "01:35",
        "zip_code_1": "64104"
    },
    {
        "address": "E 39 ST/HARDESTY AV",
        "age_1": "15",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "10:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 39 ST/HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3149",
        "report_no": "140087772",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "10:57",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "1600  W 12 ST",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-19T00:00:00.000",
        "from_time": "19:26",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.603876,
                39.100124
            ]
        },
        "location_1_location": "1600 W 12 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1090",
        "report_no": "140090898",
        "reported_date": "2014-12-19T00:00:00.000",
        "reported_time": "19:26",
        "sex_1": "M",
        "zip_code_1": "64101"
    },
    {
        "address": "INDIANA AV/E LINWOOD BL",
        "age_1": "59",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-16T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "INDIANA AV/E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2610",
        "report_no": "140066773",
        "reported_date": "2014-09-16T00:00:00.000",
        "reported_time": "21:14",
        "sex_1": "F",
        "zip_code_1": "64128"
    },
    {
        "address": "E 32 ST/INDIANA AV",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-31T00:00:00.000",
        "from_time": "17:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500738,
                39.093537
            ]
        },
        "location_1_location": "E 32 ST/INDIANA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2559",
        "report_no": "140053770",
        "reported_date": "2014-07-31T00:00:00.000",
        "reported_time": "17:34",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "4300  CAMPBELL ST",
        "age_1": "40",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574926,
                39.048832
            ]
        },
        "location_1_location": "4300 CAMPBELL ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3476",
        "report_no": "140005659",
        "reported_date": "2014-01-25T00:00:00.000",
        "reported_time": "01:31",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "7900  WORNALL RD",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-15T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594605,
                38.984792
            ]
        },
        "location_1_location": "7900 WORNALL RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5855",
        "report_no": "140025282",
        "reported_date": "2014-04-15T00:00:00.000",
        "reported_time": "23:39",
        "sex_1": "M",
        "to_date": "2014-04-15T00:00:00.000",
        "to_time": "23:37",
        "zip_code_1": "64114"
    },
    {
        "address": "9400  CLEVELAND AV",
        "age_1": "20",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-25T00:00:00.000",
        "from_time": "15:45",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543921,
                38.956044
            ]
        },
        "location_1_location": "9400 CLEVELAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6453",
        "report_no": "140069145",
        "reported_date": "2014-09-25T00:00:00.000",
        "reported_time": "15:57",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "3400  E RED BRIDGE RD",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "534",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-24T00:00:00.000",
        "from_time": "20:26",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.550666,
                38.924625
            ]
        },
        "location_1_location": "3400 E RED BRIDGE RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7037",
        "report_no": "140092152",
        "reported_date": "2014-12-24T00:00:00.000",
        "reported_time": "20:52",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "BUDD PARK ESPLANADE/DENVER AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-22T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "BUDD PARK ESPLANADE/DENVER AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ0373",
        "report_no": "140034998",
        "reported_date": "2014-05-22T00:00:00.000",
        "reported_time": "15:30",
        "sex_1": "U"
    },
    {
        "address": "E 44 ST/WALNUT ST",
        "age_1": "47",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-05T00:00:00.000",
        "from_time": "19:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "E 44 ST/WALNUT ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3459",
        "report_no": "140063916",
        "reported_date": "2014-09-05T00:00:00.000",
        "reported_time": "19:10",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 34 ST/PROSPECT AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "00:50",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 34 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2731",
        "report_no": "140053320",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "01:00",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "700  E 75 ST",
        "age_1": "27",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-23T00:00:00.000",
        "from_time": "23:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.580159,
                38.991745
            ]
        },
        "location_1_location": "700 E 75 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5649",
        "report_no": "140051678",
        "reported_date": "2014-07-23T00:00:00.000",
        "reported_time": "23:53",
        "sex_1": "M",
        "to_date": "2014-07-23T00:00:00.000",
        "to_time": "23:50",
        "zip_code_1": "64131"
    },
    {
        "address": "4100  N WINN RD",
        "age_1": "46",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "Y",
        "firearm_used_flag": "N",
        "from_date": "2014-11-22T00:00:00.000",
        "from_time": "15:12",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.531846,
                39.168353
            ]
        },
        "location_1_location": "4100 N WINN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1205",
        "report_no": "140084409",
        "reported_date": "2014-11-22T00:00:00.000",
        "reported_time": "15:12",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "3500  E 27 ST",
        "age_1": "16",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-13T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.542,
                39.076767
            ]
        },
        "location_1_location": "3500 E 27 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2188",
        "report_no": "140040885",
        "reported_date": "2014-06-13T00:00:00.000",
        "reported_time": "20:30",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "6000  PARK AV",
        "age_1": "22",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-25T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "9",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559256,
                39.017612
            ]
        },
        "location_1_location": "6000 PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4870",
        "report_no": "140085128",
        "reported_date": "2014-11-25T00:00:00.000",
        "reported_time": "20:57",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "5500  PASEO",
        "age_1": "17",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-11T00:00:00.000",
        "from_time": "15:13",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "5500 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4422",
        "report_no": "140081722",
        "reported_date": "2014-11-11T00:00:00.000",
        "reported_time": "15:13",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "400  DENVER AV",
        "age_1": "4",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-14T00:00:00.000",
        "from_time": "08:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520836,
                39.116282
            ]
        },
        "location_1_location": "400 DENVER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0530",
        "report_no": "140024800",
        "reported_date": "2014-04-14T00:00:00.000",
        "reported_time": "08:41",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "8500  EASTERN AV",
        "area_1": "MPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "05:47",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500983,
                38.968734
            ]
        },
        "location_1_location": "8500 EASTERN AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6212",
        "report_no": "140035474",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "06:07",
        "sex_1": "M",
        "to_date": "2014-05-24T00:00:00.000",
        "to_time": "05:57",
        "zip_code_1": "64138"
    },
    {
        "address": "W 74 ST/WASHINGTON ST",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.59572,
                38.958286
            ]
        },
        "location_1_location": "W 74 ST/WASHINGTON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5506",
        "report_no": "140007597",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "02:47",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "4000  MILL ST",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-04T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.595958,
                39.053583
            ]
        },
        "location_1_location": "4000 MILL ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ3255",
        "report_no": "140063447",
        "reported_date": "2014-09-04T00:00:00.000",
        "reported_time": "08:17",
        "sex_1": "U",
        "zip_code_1": "64131"
    },
    {
        "address": "5200  NW 82 TE",
        "area_1": "NPD",
        "beat": "414",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-05T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.64011,
                39.243466
            ]
        },
        "location_1_location": "5200 NW 82 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PP0379",
        "report_no": "140072023",
        "reported_date": "2014-10-05T00:00:00.000",
        "reported_time": "23:47",
        "sex_1": "M",
        "zip_code_1": "64154"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "age_1": "23",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-22T00:00:00.000",
        "from_time": "21:10",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49969,
                38.966338
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6284",
        "report_no": "140076616",
        "reported_date": "2014-10-22T00:00:00.000",
        "reported_time": "21:14",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "9400  BLUE RIDGE BL",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "22:59",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.507929,
                38.953624
            ]
        },
        "location_1_location": "9400 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6485",
        "report_no": "140007368",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "23:01",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "900  B WESTPORT RD",
        "age_1": "32",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-07T00:00:00.000",
        "from_time": "02:55",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.596903,
                39.050706
            ]
        },
        "location_1_location": "900 B WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3376",
        "report_no": "140072338",
        "reported_date": "2014-10-07T00:00:00.000",
        "reported_time": "03:07",
        "sex_1": "M",
        "to_date": "2014-10-07T00:00:00.000",
        "to_time": "03:05",
        "zip_code_1": "64111"
    },
    {
        "address": "6200  BROOKSIDE BL",
        "age_1": "40",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "14:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590781,
                39.015657
            ]
        },
        "location_1_location": "6200 BROOKSIDE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4864",
        "report_no": "140093074",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "15:01",
        "sex_1": "M",
        "zip_code_1": "64113"
    },
    {
        "address": "7600  LOMA VISTA DR",
        "age_1": "17",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-19T00:00:00.000",
        "from_time": "00:56",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.499882,
                38.961489
            ]
        },
        "location_1_location": "7600 LOMA VISTA DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6327",
        "report_no": "140026081",
        "reported_date": "2014-04-19T00:00:00.000",
        "reported_time": "00:56",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E 28 ST/WABASH AV",
        "age_1": "19",
        "area_1": "CPD",
        "beat": "124",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-12T00:00:00.000",
        "from_time": "21:33",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 28 ST/WABASH AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2252",
        "report_no": "140002673",
        "reported_date": "2014-01-12T00:00:00.000",
        "reported_time": "21:33",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "300  N CHELSEA AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "14:07",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524436,
                39.114582
            ]
        },
        "location_1_location": "300 N CHELSEA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0229",
        "report_no": "140093061",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "14:07",
        "sex_1": "M"
    },
    {
        "address": "3600  E RED BRIDGE RD",
        "age_1": "31",
        "area_1": "SPD",
        "beat": "534",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-08T00:00:00.000",
        "from_time": "21:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.548539,
                38.924529
            ]
        },
        "location_1_location": "3600 E RED BRIDGE RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ7017",
        "report_no": "140047602",
        "reported_date": "2014-07-08T00:00:00.000",
        "reported_time": "21:43",
        "sex_1": "M",
        "to_date": "2014-07-08T00:00:00.000",
        "to_time": "21:43",
        "zip_code_1": "64137"
    },
    {
        "address": "1700  W 133 ST",
        "age_1": "40",
        "area_1": "SPD",
        "beat": "535",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-08-14T00:00:00.000",
        "from_time": "11:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60438,
                38.886578
            ]
        },
        "location_1_location": "1700 W 133 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7404",
        "report_no": "140057625",
        "reported_date": "2014-08-14T00:00:00.000",
        "reported_time": "12:00",
        "sex_1": "F",
        "to_date": "2014-08-14T00:00:00.000",
        "to_time": "11:45",
        "zip_code_1": "64145"
    },
    {
        "address": "E 42 ST/CHARLOTTE ST",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-05T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 42 ST/CHARLOTTE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3309",
        "report_no": "140022469",
        "reported_date": "2014-04-05T00:00:00.000",
        "reported_time": "02:18",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "600  PASEO",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-08T00:00:00.000",
        "from_time": "23:48",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "600 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0654",
        "report_no": "140072928",
        "reported_date": "2014-10-08T00:00:00.000",
        "reported_time": "23:48",
        "sex_1": "M",
        "to_date": "2014-10-08T00:00:00.000",
        "to_time": "23:48",
        "zip_code_1": "64106"
    },
    {
        "address": "6000  PARK AV",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-25T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559256,
                39.017612
            ]
        },
        "location_1_location": "6000 PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4870",
        "report_no": "140085128",
        "reported_date": "2014-11-25T00:00:00.000",
        "reported_time": "20:57",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "E 63 ST/PASEO",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "02:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 63 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4887",
        "report_no": "140075836",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "02:28",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "E 72 ST/PROSPECT AV",
        "age_1": "37",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-04T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 72 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5432",
        "report_no": "140079833",
        "reported_date": "2014-11-04T00:00:00.000",
        "reported_time": "03:35",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "6100  E 87 ST",
        "age_1": "20",
        "area_1": "SPD",
        "beat": "541",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-25T00:00:00.000",
        "from_time": "23:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517654,
                38.967411
            ]
        },
        "location_1_location": "6100 E 87 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6336",
        "report_no": "140035899",
        "reported_date": "2014-05-25T00:00:00.000",
        "reported_time": "23:52",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "E 43 ST/NORTON AV",
        "age_1": "29",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-19T00:00:00.000",
        "from_time": "03:51",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "E 43 ST/NORTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3418",
        "report_no": "140075622",
        "reported_date": "2014-10-19T00:00:00.000",
        "reported_time": "03:51",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "8100  HIGHLAND AV",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "20:06",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568195,
                38.980894
            ]
        },
        "location_1_location": "8100 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5951",
        "report_no": "140087882",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "20:06",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "3100  GRAND AV",
        "age_1": "53",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-07T00:00:00.000",
        "from_time": "17:55",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.582432,
                39.070834
            ]
        },
        "location_1_location": "3100 GRAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2533",
        "report_no": "140064332",
        "reported_date": "2014-09-07T00:00:00.000",
        "reported_time": "18:08",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "6800  LONGVIEW RD",
        "age_1": "51",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.512549,
                38.915438
            ]
        },
        "location_1_location": "6800 LONGVIEW RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ7220",
        "report_no": "140087808",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "13:38",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "10200  BELLAIRE AV",
        "age_1": "36",
        "area_1": "SPD",
        "beat": "532",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-18T00:00:00.000",
        "from_time": "22:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521356,
                38.940071
            ]
        },
        "location_1_location": "10200 BELLAIRE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6763",
        "report_no": "140026049",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "22:47",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "1300  E 89 ST",
        "age_1": "20",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-07T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574331,
                38.966116
            ]
        },
        "location_1_location": "1300 E 89 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6197",
        "report_no": "140039414",
        "reported_date": "2014-06-08T00:00:00.000",
        "reported_time": "14:33",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "5500  GLADSTONE BL",
        "age_1": "21",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-06T00:00:00.000",
        "from_time": "19:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517028,
                39.118834
            ]
        },
        "location_1_location": "5500 GLADSTONE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0170",
        "report_no": "140055447",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "20:53",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "6200  BROOKSIDE BL",
        "age_1": "48",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "14:57",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590781,
                39.015657
            ]
        },
        "location_1_location": "6200 BROOKSIDE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4864",
        "report_no": "140093074",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "15:01",
        "sex_1": "F",
        "zip_code_1": "64113"
    },
    {
        "address": "E 108 ST/SYCAMORE TE",
        "age_1": "15",
        "area_1": "SPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-18T00:00:00.000",
        "from_time": "21:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 108 ST/SYCAMORE TE",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6904",
        "report_no": "140026047",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "22:15",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "4400  CLOON AV",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-11T00:00:00.000",
        "from_time": "18:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.53021,
                39.100058
            ]
        },
        "location_1_location": "4400 CLOON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1019",
        "report_no": "140048396",
        "reported_date": "2014-07-11T00:00:00.000",
        "reported_time": "18:18",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "2600  EUCLID AV",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "124",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "14:48",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559356,
                39.079043
            ]
        },
        "location_1_location": "2600 EUCLID AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2163",
        "report_no": "140093072",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "14:48",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "1600  NE PARVIN RD",
        "age_1": "23",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-02T00:00:00.000",
        "from_time": "03:10",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.560544,
                39.166767
            ]
        },
        "location_1_location": "1600 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1199",
        "report_no": "140079341",
        "reported_date": "2014-11-02T00:00:00.000",
        "reported_time": "03:13",
        "sex_1": "F",
        "zip_code_1": "64116"
    },
    {
        "address": "E 24 ST/INDIANA AV",
        "age_1": "26",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-26T00:00:00.000",
        "from_time": "17:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 24 ST/INDIANA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1934",
        "report_no": "140036055",
        "reported_date": "2014-05-26T00:00:00.000",
        "reported_time": "17:40",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "7900  WORNALL RD",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-15T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594605,
                38.984792
            ]
        },
        "location_1_location": "7900 WORNALL RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5855",
        "report_no": "140025282",
        "reported_date": "2014-04-15T00:00:00.000",
        "reported_time": "23:39",
        "sex_1": "M",
        "to_date": "2014-04-15T00:00:00.000",
        "to_time": "23:37",
        "zip_code_1": "64114"
    },
    {
        "address": "4300  PASEO",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-12T00:00:00.000",
        "from_time": "17:52",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "4300 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3486",
        "report_no": "140024464",
        "reported_date": "2014-04-12T00:00:00.000",
        "reported_time": "17:52",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "7300  PROSPECT AV",
        "age_1": "21",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557146,
                38.994273
            ]
        },
        "location_1_location": "7300 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5568",
        "report_no": "140039672",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "14:15",
        "sex_1": "M",
        "to_date": "2014-06-09T00:00:00.000",
        "to_time": "14:15",
        "zip_code_1": "64132"
    },
    {
        "address": "6600  E 16 ST",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "21:28",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.505523,
                39.091956
            ]
        },
        "location_1_location": "6600 E 16 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1532",
        "report_no": "140077464",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "21:28",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 57 ST/SWOPE PK",
        "area_1": "MPD",
        "beat": "223",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-13T00:00:00.000",
        "from_time": "20:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.459478,
                39.015518
            ]
        },
        "location_1_location": "E 57 ST/SWOPE PK",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4503",
        "report_no": "140082248",
        "reported_date": "2014-11-13T00:00:00.000",
        "reported_time": "20:27",
        "sex_1": "M",
        "to_date": "2014-11-13T00:00:00.000",
        "to_time": "20:40",
        "zip_code_1": "64133"
    },
    {
        "address": "E 32 ST/INDIANA AV",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-12T00:00:00.000",
        "from_time": "19:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 32 ST/INDIANA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2559",
        "report_no": "140073907",
        "reported_date": "2014-10-12T00:00:00.000",
        "reported_time": "19:22",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "4400  WORNALL RD",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-12T00:00:00.000",
        "from_time": "04:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590184,
                39.046354
            ]
        },
        "location_1_location": "4400 WORNALL RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3485",
        "report_no": "140088988",
        "reported_date": "2014-12-12T00:00:00.000",
        "reported_time": "04:27",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "9500  DRURY AV",
        "age_1": "30",
        "area_1": "SPD",
        "beat": "532",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-13T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525276,
                38.950632
            ]
        },
        "location_1_location": "9500 DRURY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6534",
        "report_no": "140032515",
        "reported_date": "2014-05-13T00:00:00.000",
        "reported_time": "11:00",
        "sex_1": "M",
        "zip_code_1": "64137"
    },
    {
        "address": "1400  COLLINS AV",
        "age_1": "38",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-30T00:00:00.000",
        "from_time": "13:22",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500738,
                39.093537
            ]
        },
        "location_1_location": "1400 COLLINS AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1300",
        "report_no": "140078693",
        "reported_date": "2014-10-30T00:00:00.000",
        "reported_time": "13:22",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "8500  BLUE PK W",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-23T00:00:00.000",
        "from_time": "16:16",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "8500 BLUE PK W",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5085",
        "report_no": "140060245",
        "reported_date": "2014-08-23T00:00:00.000",
        "reported_time": "16:16",
        "sex_1": "F",
        "zip_code_1": "64129"
    },
    {
        "address": "NE PARVIN RD/I-435",
        "age_1": "20",
        "area_1": "NPD",
        "beat": "414",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-19T00:00:00.000",
        "from_time": "18:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524566,
                39.20301
            ]
        },
        "location_1_location": "NE PARVIN RD/I-435",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0596",
        "report_no": "140083617",
        "reported_date": "2014-11-19T00:00:00.000",
        "reported_time": "18:41",
        "sex_1": "M",
        "to_date": "2014-11-19T00:00:00.000",
        "to_time": "18:20",
        "zip_code_1": "64119"
    },
    {
        "address": "3200  PROSPECT AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552965,
                39.067952
            ]
        },
        "location_1_location": "3200 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2651",
        "report_no": "140060066",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "20:50",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "500  WESTPORT RD",
        "age_1": "31",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-13T00:00:00.000",
        "from_time": "01:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.591553,
                39.052828
            ]
        },
        "location_1_location": "500 WESTPORT RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3218",
        "report_no": "140082093",
        "reported_date": "2014-11-13T00:00:00.000",
        "reported_time": "01:40",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "1100  TROOST AV",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-26T00:00:00.000",
        "from_time": "18:44",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569869,
                39.100585
            ]
        },
        "location_1_location": "1100 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1046",
        "report_no": "140069471",
        "reported_date": "2014-09-26T00:00:00.000",
        "reported_time": "18:44",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "5900  WILSON AV",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-25T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.513179,
                39.105278
            ]
        },
        "location_1_location": "5900 WILSON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0608",
        "report_no": "140060833",
        "reported_date": "2014-08-25T00:00:00.000",
        "reported_time": "18:59",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "4300  DITZLER AV",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-18T00:00:00.000",
        "from_time": "18:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.471566,
                39.044993
            ]
        },
        "location_1_location": "4300 DITZLER AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ3760",
        "report_no": "140004161",
        "reported_date": "2014-01-18T00:00:00.000",
        "reported_time": "18:46",
        "sex_1": "M",
        "to_date": "2014-01-18T00:00:00.000",
        "to_time": "18:50",
        "zip_code_1": "64133"
    },
    {
        "address": "900  JEFFERSON ST",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-29T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.592134,
                39.103791
            ]
        },
        "location_1_location": "900 JEFFERSON ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0842",
        "report_no": "140045059",
        "reported_date": "2014-06-29T00:00:00.000",
        "reported_time": "06:47",
        "sex_1": "M",
        "zip_code_1": "64101"
    },
    {
        "address": "E 75 ST/TROOST AV",
        "age_1": "18",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-06T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.526039,
                39.130787
            ]
        },
        "location_1_location": "E 75 ST/TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5604",
        "report_no": "140008671",
        "reported_date": "2014-02-06T00:00:00.000",
        "reported_time": "23:00",
        "sex_1": "M",
        "zip_code_1": "64120"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-24T00:00:00.000",
        "from_time": "21:49",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54414,
                39.106107
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "A",
        "rep_dist_1": "PJ0684",
        "report_no": "140043939",
        "reported_date": "2014-06-24T00:00:00.000",
        "reported_time": "21:49",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "E 43 TE/WESTRIDGE RD",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-10T00:00:00.000",
        "from_time": "12:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.459478,
                39.015518
            ]
        },
        "location_1_location": "E 43 TE/WESTRIDGE RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3685",
        "report_no": "140081417",
        "reported_date": "2014-11-10T00:00:00.000",
        "reported_time": "12:52",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "CYPRESS AV/INDEPENDENCE AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-02-22T00:00:00.000",
        "from_time": "11:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "CYPRESS AV/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0612",
        "report_no": "140012123",
        "reported_date": "2014-02-22T00:00:00.000",
        "reported_time": "12:03",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "E 33 ST/JACKSON AV",
        "age_1": "35",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-10-12T00:00:00.000",
        "from_time": "22:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 33 ST/JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2681",
        "report_no": "140073939",
        "reported_date": "2014-10-12T00:00:00.000",
        "reported_time": "23:27",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "3700  N WOODLAND AV",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-01T00:00:00.000",
        "from_time": "09:45",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558526,
                39.161411
            ]
        },
        "location_1_location": "3700 N WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1383",
        "report_no": "140053906",
        "reported_date": "2014-08-01T00:00:00.000",
        "reported_time": "09:57",
        "sex_1": "M",
        "to_date": "2014-08-01T00:00:00.000",
        "to_time": "09:57",
        "zip_code_1": "64116"
    },
    {
        "address": "2500  NORTON AV",
        "age_1": "36",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-25T00:00:00.000",
        "from_time": "09:12",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.535115,
                39.080032
            ]
        },
        "location_1_location": "2500 NORTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2129",
        "report_no": "140019700",
        "reported_date": "2014-03-25T00:00:00.000",
        "reported_time": "09:14",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "4400  JEFFERSON ST",
        "age_1": "53",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-10T00:00:00.000",
        "from_time": "20:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594436,
                39.047683
            ]
        },
        "location_1_location": "4400 JEFFERSON ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3559",
        "report_no": "140081571",
        "reported_date": "2014-11-10T00:00:00.000",
        "reported_time": "20:44",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "7000  PROSPECT AV",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-03T00:00:00.000",
        "from_time": "22:34",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556855,
                38.999694
            ]
        },
        "location_1_location": "7000 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5341",
        "report_no": "140086914",
        "reported_date": "2014-12-03T00:00:00.000",
        "reported_time": "22:34",
        "sex_1": "M"
    },
    {
        "address": "E 24 ST/POPLAR AV",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-09T00:00:00.000",
        "from_time": "13:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 24 ST/POPLAR AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1965",
        "report_no": "140023637",
        "reported_date": "2014-04-09T00:00:00.000",
        "reported_time": "13:23",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "5400  N TRACY AV",
        "age_1": "22",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-06T00:00:00.000",
        "from_time": "22:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.565394,
                39.192298
            ]
        },
        "location_1_location": "5400 N TRACY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0739",
        "report_no": "140087898",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "22:20",
        "sex_1": "M",
        "zip_code_1": "64118"
    },
    {
        "address": "3900  FLORA AV",
        "age_1": "53",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-04T00:00:00.000",
        "from_time": "04:23",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.566376,
                39.055742
            ]
        },
        "location_1_location": "3900 FLORA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3158",
        "report_no": "140008080",
        "reported_date": "2014-02-04T00:00:00.000",
        "reported_time": "04:23",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "900  E ARMOUR BL",
        "area_1": "CPD",
        "beat": "112",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57394,
                39.063381
            ]
        },
        "location_1_location": "900 E ARMOUR BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2771",
        "report_no": "140053485",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "16:50",
        "sex_1": "F",
        "zip_code_1": "64111"
    },
    {
        "address": "9300  PALMER AV",
        "age_1": "30",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "22:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.498964,
                38.955441
            ]
        },
        "location_1_location": "9300 PALMER AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6496",
        "report_no": "140060095",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "22:58",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "7700  E 111 TE",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-12T00:00:00.000",
        "from_time": "17:11",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500845,
                38.925085
            ]
        },
        "location_1_location": "7700 E 111 TE",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6964",
        "report_no": "140065653",
        "reported_date": "2014-09-12T00:00:00.000",
        "reported_time": "17:11",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "8600  ROBANDEE LN",
        "age_1": "14",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-25T00:00:00.000",
        "from_time": "02:44",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.48871,
                38.953314
            ]
        },
        "location_1_location": "8600 ROBANDEE LN",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6512",
        "report_no": "140035694",
        "reported_date": "2014-05-25T00:00:00.000",
        "reported_time": "02:46",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "E 34 ST/TROOST AV",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "19:32",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "E 34 ST/TROOST AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2706",
        "report_no": "140076063",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "19:32",
        "sex_1": "U",
        "zip_code_1": "64111"
    },
    {
        "address": "43 AND BROADWAY",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-19T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590867,
                39.055064
            ]
        },
        "location_1_location": "43 AND BROADWAY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3461",
        "report_no": "140083602",
        "reported_date": "2014-11-19T00:00:00.000",
        "reported_time": "17:42",
        "sex_1": "M",
        "to_date": "2014-11-19T00:00:00.000",
        "to_time": "17:45",
        "zip_code_1": "64111"
    },
    {
        "address": "700  SPRUCE AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-07T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.531603,
                39.104032
            ]
        },
        "location_1_location": "700 SPRUCE AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ0821",
        "report_no": "140001334",
        "reported_date": "2014-01-07T00:00:00.000",
        "reported_time": "03:47",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "1600  WINCHESTER AV",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-18T00:00:00.000",
        "from_time": "02:15",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501146,
                39.091781
            ]
        },
        "location_1_location": "1600 WINCHESTER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1506",
        "report_no": "140050089",
        "reported_date": "2014-07-18T00:00:00.000",
        "reported_time": "02:40",
        "sex_1": "M"
    },
    {
        "address": "1600  NE PARVIN RD",
        "age_1": "21",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-02T00:00:00.000",
        "from_time": "03:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.560544,
                39.166767
            ]
        },
        "location_1_location": "1600 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1199",
        "report_no": "140079341",
        "reported_date": "2014-11-02T00:00:00.000",
        "reported_time": "03:13",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "5300  WILLIAMSBURG CT",
        "age_1": "15",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-30T00:00:00.000",
        "from_time": "17:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500738,
                39.093537
            ]
        },
        "location_1_location": "5300 WILLIAMSBURG CT",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1143",
        "report_no": "140062228",
        "reported_date": "2014-08-30T00:00:00.000",
        "reported_time": "17:50",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "4600  J C NICHOLS PK",
        "age_1": "14",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-02T00:00:00.000",
        "from_time": "00:38",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588857,
                39.046481
            ]
        },
        "location_1_location": "4600 J C NICHOLS PK",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3630",
        "report_no": "140054119",
        "reported_date": "2014-08-02T00:00:00.000",
        "reported_time": "00:38",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "4600  NE VIVION RD",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "20:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.52566,
                39.188021
            ]
        },
        "location_1_location": "4600 NE VIVION RD",
        "offense": "302",
        "rep_dist_1": "PC0857",
        "report_no": "140081053",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "20:29",
        "zip_code_1": "64117"
    },
    {
        "address": "7100  OLIVE ST",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559244,
                38.998063
            ]
        },
        "location_1_location": "7100 OLIVE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5430",
        "report_no": "140070367",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "23:49",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "7100  OLIVE ST",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559244,
                38.998063
            ]
        },
        "location_1_location": "7100 OLIVE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5430",
        "report_no": "140070367",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "23:49",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "3400  MERSINGTON AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538246,
                39.063882
            ]
        },
        "location_1_location": "3400 MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2783",
        "report_no": "140080919",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "06:28",
        "sex_1": "M",
        "to_date": "2014-11-08T00:00:00.000",
        "to_time": "06:00",
        "zip_code_1": "64129"
    },
    {
        "address": "E 34 ST/HARRISON ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-30T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 34 ST/HARRISON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2706",
        "report_no": "140070390",
        "reported_date": "2014-09-30T00:00:00.000",
        "reported_time": "05:20",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "INDEPENDENCE AV/VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-08T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/VAN BRUNT BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0622",
        "report_no": "140015545",
        "reported_date": "2014-03-08T00:00:00.000",
        "reported_time": "17:48",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "5400  E 40 ST",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-26T00:00:00.000",
        "from_time": "13:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521673,
                39.052893
            ]
        },
        "location_1_location": "5400 E 40 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3409",
        "report_no": "140069379",
        "reported_date": "2014-09-26T00:00:00.000",
        "reported_time": "13:57",
        "sex_1": "M",
        "to_date": "2014-09-26T00:00:00.000",
        "to_time": "15:00",
        "zip_code_1": "64133"
    },
    {
        "address": "E 108 ST/SYCAMORE TE",
        "area_1": "SPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-18T00:00:00.000",
        "from_time": "21:52",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 108 ST/SYCAMORE TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6904",
        "report_no": "140026047",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "22:15",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "6900  MONROE AV",
        "age_1": "35",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-10T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543949,
                39.000985
            ]
        },
        "location_1_location": "6900 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5325",
        "report_no": "140073483",
        "reported_date": "2014-10-10T00:00:00.000",
        "reported_time": "22:55",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "E BANNISTER RD/DRURY AV",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "541",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-03T00:00:00.000",
        "from_time": "16:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E BANNISTER RD/DRURY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6500",
        "report_no": "140046282",
        "reported_date": "2014-07-03T00:00:00.000",
        "reported_time": "16:34",
        "sex_1": "M",
        "to_date": "2014-07-03T00:00:00.000",
        "to_time": "16:34",
        "zip_code_1": "64134"
    },
    {
        "address": "9800  WORNALL RD",
        "area_1": "SPD",
        "beat": "531",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-26T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.596176,
                38.950383
            ]
        },
        "location_1_location": "9800 WORNALL RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ6576",
        "report_no": "140035918",
        "reported_date": "2014-05-26T00:00:00.000",
        "reported_time": "01:52",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "BENTON BL/E LINWOOD BL",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-10T00:00:00.000",
        "from_time": "22:11",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "BENTON BL/E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2606",
        "report_no": "140073478",
        "reported_date": "2014-10-10T00:00:00.000",
        "reported_time": "22:41",
        "sex_1": "M",
        "to_date": "2014-10-10T00:00:00.000",
        "to_time": "22:40",
        "zip_code_1": "64128"
    },
    {
        "address": "1700  W 133 ST",
        "area_1": "SPD",
        "beat": "535",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-13T00:00:00.000",
        "from_time": "06:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60438,
                38.886578
            ]
        },
        "location_1_location": "1700 W 133 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7404",
        "report_no": "140035570",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "15:13",
        "sex_1": "M",
        "zip_code_1": "64145"
    },
    {
        "address": "2800  E 12 ST",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-08T00:00:00.000",
        "from_time": "20:14",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54908,
                39.098778
            ]
        },
        "location_1_location": "2800 E 12 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1092",
        "report_no": "140015558",
        "reported_date": "2014-03-08T00:00:00.000",
        "reported_time": "20:15",
        "sex_1": "U"
    },
    {
        "address": "3400  E 7 ST",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "Y",
        "firearm_used_flag": "N",
        "from_date": "2014-12-25T00:00:00.000",
        "from_time": "15:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.541759,
                39.104179
            ]
        },
        "location_1_location": "3400 E 7 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0819",
        "report_no": "140092249",
        "reported_date": "2014-12-25T00:00:00.000",
        "reported_time": "15:22",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "1100  AGNES AV",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "22:43",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547016,
                39.100382
            ]
        },
        "location_1_location": "1100 AGNES AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1049",
        "report_no": "140073720",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "22:43",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 38 ST/WARWICK BL",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-25T00:00:00.000",
        "from_time": "01:14",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "E 38 ST/WARWICK BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2978",
        "report_no": "140005660",
        "reported_date": "2014-01-25T00:00:00.000",
        "reported_time": "01:24",
        "sex_1": "M",
        "to_date": "2014-01-25T00:00:00.000",
        "to_time": "01:24",
        "zip_code_1": "64111"
    },
    {
        "address": "E 24 ST/QUINCY AV",
        "age_1": "21",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-07T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 24 ST/QUINCY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1969",
        "report_no": "140039372",
        "reported_date": "2014-06-08T00:00:00.000",
        "reported_time": "10:29",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "8100  E 107 ST",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "00:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495919,
                38.930088
            ]
        },
        "location_1_location": "8100 E 107 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6857",
        "report_no": "140036729",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "00:59",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "5400  LYDIA AV",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-24T00:00:00.000",
        "from_time": "18:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569075,
                39.028733
            ]
        },
        "location_1_location": "5400 LYDIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4346",
        "report_no": "140051910",
        "reported_date": "2014-07-24T00:00:00.000",
        "reported_time": "18:20",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "3100  GILLHAM PL",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-23T00:00:00.000",
        "from_time": "01:25",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.578936,
                39.070273
            ]
        },
        "location_1_location": "3100 GILLHAM PL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2538",
        "report_no": "140019201",
        "reported_date": "2014-03-23T00:00:00.000",
        "reported_time": "01:35",
        "sex_1": "M",
        "to_date": "2014-03-23T00:00:00.000",
        "to_time": "01:35",
        "zip_code_1": "64109"
    },
    {
        "address": "4200  N ANTIOCH RD",
        "age_1": "20",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-17T00:00:00.000",
        "from_time": "06:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.549328,
                39.169997
            ]
        },
        "location_1_location": "4200 N ANTIOCH RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1221",
        "report_no": "140090191",
        "reported_date": "2014-12-17T00:00:00.000",
        "reported_time": "06:56",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "5500  WOODLAND AV",
        "age_1": "28",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-20T00:00:00.000",
        "from_time": "02:13",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.564526,
                39.026553
            ]
        },
        "location_1_location": "5500 WOODLAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4431",
        "report_no": "140018499",
        "reported_date": "2014-03-20T00:00:00.000",
        "reported_time": "02:15",
        "sex_1": "F"
    },
    {
        "address": "E 38 ST/PROSPECT AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-31T00:00:00.000",
        "from_time": "17:56",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 38 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3095",
        "report_no": "140053767",
        "reported_date": "2014-07-31T00:00:00.000",
        "reported_time": "17:56",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "1700  INDEPENDENCE AV",
        "age_1": "71",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-08-03T00:00:00.000",
        "from_time": "01:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561181,
                39.106706
            ]
        },
        "location_1_location": "1700 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0663",
        "report_no": "140054376",
        "reported_date": "2014-08-03T00:00:00.000",
        "reported_time": "01:57",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "500  E 3 ST",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-11T00:00:00.000",
        "from_time": "03:09",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.578454,
                39.110881
            ]
        },
        "location_1_location": "500 E 3 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0357",
        "report_no": "140031909",
        "reported_date": "2014-05-11T00:00:00.000",
        "reported_time": "03:09",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "E 28 ST/MERSINGTON AV",
        "age_1": "16",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-20T00:00:00.000",
        "from_time": "14:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 28 ST/MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2271",
        "report_no": "140091076",
        "reported_date": "2014-12-20T00:00:00.000",
        "reported_time": "14:17",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "4000  WABASH AV",
        "age_1": "39",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-23T00:00:00.000",
        "from_time": "18:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.554806,
                39.053562
            ]
        },
        "location_1_location": "4000 WABASH AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3270",
        "report_no": "140051616",
        "reported_date": "2014-07-23T00:00:00.000",
        "reported_time": "18:37",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "100  NW HARLEM RD",
        "area_1": "NPD",
        "beat": "411",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-09T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58785,
                39.117472
            ]
        },
        "location_1_location": "100 NW HARLEM RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC1483",
        "report_no": "140081269",
        "reported_date": "2014-11-09T00:00:00.000",
        "reported_time": "22:51",
        "sex_1": "F",
        "zip_code_1": "64116"
    },
    {
        "address": "8600  E 114 TE",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-27T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.492642,
                38.915417
            ]
        },
        "location_1_location": "8600 E 114 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7207",
        "report_no": "140020268",
        "reported_date": "2014-03-27T00:00:00.000",
        "reported_time": "15:31",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "age_1": "21",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-01T00:00:00.000",
        "from_time": "21:55",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.499763,
                38.96619
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6284",
        "report_no": "140070947",
        "reported_date": "2014-10-01T00:00:00.000",
        "reported_time": "21:55",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "4000  MERSINGTON AV",
        "age_1": "53",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-30T00:00:00.000",
        "from_time": "13:31",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538736,
                39.053054
            ]
        },
        "location_1_location": "4000 MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3294",
        "report_no": "140006989",
        "reported_date": "2014-01-30T00:00:00.000",
        "reported_time": "13:31",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "4200  NE SUNNYBROOK LN",
        "age_1": "59",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "20:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530483,
                39.168278
            ]
        },
        "location_1_location": "4200 NE SUNNYBROOK LN",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1206",
        "report_no": "140039778",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "20:47",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "6600  PROSPECT AV",
        "age_1": "21",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "Y",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-03T00:00:00.000",
        "from_time": "19:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556495,
                39.006973
            ]
        },
        "location_1_location": "6600 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5124",
        "report_no": "140046334",
        "reported_date": "2014-07-03T00:00:00.000",
        "reported_time": "19:44",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "BROOKLYN AV/INDEPENDENCE AV",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-26T00:00:00.000",
        "from_time": "16:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "BROOKLYN AV/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0569",
        "report_no": "140020111",
        "reported_date": "2014-03-26T00:00:00.000",
        "reported_time": "19:08",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "10600  E 42 ST",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-06T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.453903,
                39.046427
            ]
        },
        "location_1_location": "10600 E 42 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3526",
        "report_no": "140038846",
        "reported_date": "2014-06-06T00:00:00.000",
        "reported_time": "10:58",
        "sex_1": "M",
        "to_date": "2014-06-06T00:00:00.000",
        "to_time": "04:30",
        "zip_code_1": "64133"
    },
    {
        "address": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-23T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3149",
        "report_no": "140084684",
        "reported_date": "2014-11-23T00:00:00.000",
        "reported_time": "19:10",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "9400  BLUE RIDGE BL",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "22:59",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.507929,
                38.953624
            ]
        },
        "location_1_location": "9400 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6485",
        "report_no": "140007368",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "23:01",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E 35 ST/CLEVELAND AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-12T00:00:00.000",
        "from_time": "18:48",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 35 ST/CLEVELAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2818",
        "report_no": "140048649",
        "reported_date": "2014-07-12T00:00:00.000",
        "reported_time": "18:48",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "3100  TROOST AV",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-07T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.571366,
                39.070193
            ]
        },
        "location_1_location": "3100 TROOST AV",
        "offense": "302",
        "rep_dist_1": "PJ2539",
        "report_no": "140080691",
        "reported_date": "2014-11-07T00:00:00.000",
        "reported_time": "11:06",
        "zip_code_1": "64109"
    },
    {
        "address": "8500  BLUE PK W",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-23T00:00:00.000",
        "from_time": "16:16",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "8500 BLUE PK W",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5085",
        "report_no": "140060245",
        "reported_date": "2014-08-23T00:00:00.000",
        "reported_time": "16:16",
        "sex_1": "F",
        "zip_code_1": "64129"
    },
    {
        "address": "1000  BALES AV",
        "age_1": "53",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-23T00:00:00.000",
        "from_time": "12:11",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.540955,
                39.100784
            ]
        },
        "location_1_location": "1000 BALES AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1032",
        "report_no": "140019501",
        "reported_date": "2014-03-24T00:00:00.000",
        "reported_time": "12:11",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "6300  TROOST AV",
        "age_1": "18",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-09T00:00:00.000",
        "from_time": "16:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574636,
                39.012943
            ]
        },
        "location_1_location": "6300 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4933",
        "report_no": "140023654",
        "reported_date": "2014-04-09T00:00:00.000",
        "reported_time": "16:38",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "7300  NE PARVIN RD",
        "area_1": "SCP",
        "beat": "635",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-15T00:00:00.000",
        "from_time": "05:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.494873,
                39.168417
            ]
        },
        "location_1_location": "7300 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1343",
        "report_no": "140033010",
        "reported_date": "2014-05-15T00:00:00.000",
        "reported_time": "05:15",
        "sex_1": "M"
    },
    {
        "address": "E 11 ST/PASEO",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-24T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 11 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0985",
        "report_no": "140019606",
        "reported_date": "2014-03-24T00:00:00.000",
        "reported_time": "19:31",
        "sex_1": "F",
        "zip_code_1": "64109"
    },
    {
        "address": "200  W 36 ST",
        "age_1": "47",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-26T00:00:00.000",
        "from_time": "20:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588449,
                39.062108
            ]
        },
        "location_1_location": "200 W 36 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2824",
        "report_no": "140006057",
        "reported_date": "2014-01-26T00:00:00.000",
        "reported_time": "20:25",
        "sex_1": "M",
        "to_date": "2014-01-26T00:00:00.000",
        "to_time": "20:30",
        "zip_code_1": "64111"
    },
    {
        "address": "4400  SCARRITT AV",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "20:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530059,
                39.114918
            ]
        },
        "location_1_location": "4400 SCARRITT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0234",
        "report_no": "140007334",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "20:15",
        "sex_1": "M",
        "to_date": "2014-01-31T00:00:00.000",
        "to_time": "20:15",
        "zip_code_1": "64123"
    },
    {
        "address": "7300  JAMES A REED RD",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-19T00:00:00.000",
        "from_time": "08:09",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.492135,
                38.991192
            ]
        },
        "location_1_location": "7300 JAMES A REED RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5693",
        "report_no": "140026142",
        "reported_date": "2014-04-19T00:00:00.000",
        "reported_time": "08:12",
        "sex_1": "M",
        "to_date": "2014-04-19T00:00:00.000",
        "to_time": "08:12",
        "zip_code_1": "64129"
    },
    {
        "address": "6500  NW PRAIRIE VIEW RD",
        "area_1": "NPD",
        "beat": "414",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-13T00:00:00.000",
        "from_time": "11:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.64135,
                39.212912
            ]
        },
        "location_1_location": "6500 NW PRAIRIE VIEW RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PP0626",
        "report_no": "140065816",
        "reported_date": "2014-09-13T00:00:00.000",
        "reported_time": "11:35",
        "sex_1": "M",
        "zip_code_1": "64152"
    },
    {
        "address": "8600  HOLMES RD",
        "age_1": "27",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-12T00:00:00.000",
        "from_time": "12:59",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58134,
                38.971587
            ]
        },
        "location_1_location": "8600 HOLMES RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6188",
        "report_no": "140032270",
        "reported_date": "2014-05-12T00:00:00.000",
        "reported_time": "13:02",
        "sex_1": "M",
        "to_date": "2014-05-12T00:00:00.000",
        "to_time": "13:02",
        "zip_code_1": "64131"
    },
    {
        "address": "2000  E 72 ST",
        "age_1": "48",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-05T00:00:00.000",
        "from_time": "20:43",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.563944,
                38.996525
            ]
        },
        "location_1_location": "2000 E 72 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5488",
        "report_no": "140014776",
        "reported_date": "2014-03-05T00:00:00.000",
        "reported_time": "20:43",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "5600  N SMALLEY AV",
        "area_1": "SCP",
        "beat": "636",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-08T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.487293,
                39.195311
            ]
        },
        "location_1_location": "5600 N SMALLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0693",
        "report_no": "140072817",
        "reported_date": "2014-10-08T00:00:00.000",
        "reported_time": "15:00",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "SMART AND BELMONT",
        "area_1": "SPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-07T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "SMART AND BELMONT",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6588",
        "report_no": "140039268",
        "reported_date": "2014-06-07T00:00:00.000",
        "reported_time": "19:17",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "2700  INDEPENDENCE AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-24T00:00:00.000",
        "from_time": "16:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54894,
                39.106278
            ]
        },
        "location_1_location": "2700 INDEPENDENCE AV",
        "offense": "302",
        "rep_dist_1": "PJ0494",
        "report_no": "140060509",
        "reported_date": "2014-08-24T00:00:00.000",
        "reported_time": "17:04"
    },
    {
        "address": "E 38 ST/CHESTNUT AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "02:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 38 ST/CHESTNUT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3024",
        "report_no": "140077743",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "03:00",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "8400  E 108 ST",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-11T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.492744,
                38.927717
            ]
        },
        "location_1_location": "8400 E 108 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ6922",
        "report_no": "140089208",
        "reported_date": "2014-12-13T00:00:00.000",
        "reported_time": "00:13",
        "sex_1": "M",
        "to_date": "2014-12-13T00:00:00.000",
        "to_time": "00:13",
        "zip_code_1": "64134"
    },
    {
        "address": "5200  NW 64 ST",
        "area_1": "NPD",
        "beat": "413",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-04-17T00:00:00.000",
        "from_time": "11:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.640193,
                39.210562
            ]
        },
        "location_1_location": "5200 NW 64 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PP0665",
        "report_no": "140025648",
        "reported_date": "2014-04-17T00:00:00.000",
        "reported_time": "11:56",
        "sex_1": "M",
        "to_date": "2014-04-17T00:00:00.000",
        "to_time": "11:55",
        "zip_code_1": "64151"
    },
    {
        "address": "E 18 ST/WOODLAND AV",
        "age_1": "17",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "13:51",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 18 ST/WOODLAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1522",
        "report_no": "140035546",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "13:51",
        "sex_1": "F",
        "zip_code_1": "64106"
    },
    {
        "address": "3000  NE VIVION RD",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-26T00:00:00.000",
        "from_time": "20:11",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543922,
                39.188149
            ]
        },
        "location_1_location": "3000 NE VIVION RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC0861",
        "report_no": "140061105",
        "reported_date": "2014-08-26T00:00:00.000",
        "reported_time": "20:15",
        "sex_1": "U",
        "zip_code_1": "64118"
    },
    {
        "address": "8100  E 107 ST",
        "age_1": "17",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "00:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495919,
                38.930088
            ]
        },
        "location_1_location": "8100 E 107 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6857",
        "report_no": "140036729",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "00:59",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E 63 ST/PROSPECT AV",
        "age_1": "26",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-30T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 63 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4900",
        "report_no": "140045475",
        "reported_date": "2014-06-30T00:00:00.000",
        "reported_time": "18:39",
        "sex_1": "F",
        "to_date": "2014-06-30T00:00:00.000",
        "to_time": "18:50",
        "zip_code_1": "64131"
    },
    {
        "address": "1700  MICHIGAN AV",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-04T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559869,
                39.092313
            ]
        },
        "location_1_location": "1700 MICHIGAN AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1448",
        "report_no": "140087120",
        "reported_date": "2014-12-04T00:00:00.000",
        "reported_time": "20:46",
        "sex_1": "M",
        "to_date": "2014-12-04T00:00:00.000",
        "to_time": "20:45",
        "zip_code_1": "64127"
    },
    {
        "address": "5500  ST JOHN AV",
        "age_1": "61",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-27T00:00:00.000",
        "from_time": "10:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517399,
                39.112454
            ]
        },
        "location_1_location": "5500 ST JOHN AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0299",
        "report_no": "140013225",
        "reported_date": "2014-02-27T00:00:00.000",
        "reported_time": "10:00",
        "sex_1": "M",
        "zip_code_1": "64125"
    },
    {
        "address": "5800  E 17 ST",
        "age_1": "13",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "11:42",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514791,
                39.09036
            ]
        },
        "location_1_location": "5800 E 17 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1791",
        "report_no": "140074532",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "11:42",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3300  E 77 ST",
        "age_1": "20",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-20T00:00:00.000",
        "from_time": "18:18",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54963,
                38.986836
            ]
        },
        "location_1_location": "3300 E 77 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5704",
        "report_no": "140067861",
        "reported_date": "2014-09-20T00:00:00.000",
        "reported_time": "18:48",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "6200  BROOKSIDE BL",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "14:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590781,
                39.015657
            ]
        },
        "location_1_location": "6200 BROOKSIDE BL",
        "offense": "302",
        "rep_dist_1": "PJ4864",
        "report_no": "140093074",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "15:01",
        "zip_code_1": "64113"
    },
    {
        "address": "E 74 ST/TRACY AV",
        "age_1": "43",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "04:20",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 74 ST/TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5535",
        "report_no": "140077746",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "04:23",
        "sex_1": "F",
        "zip_code_1": "64131"
    },
    {
        "address": "W 13 ST/MAIN ST",
        "age_1": "50",
        "area_1": "CPD",
        "beat": "113",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-15T00:00:00.000",
        "from_time": "21:04",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "W 13 ST/MAIN ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1084",
        "report_no": "140017394",
        "reported_date": "2014-03-15T00:00:00.000",
        "reported_time": "21:04",
        "sex_1": "M"
    },
    {
        "address": "8500  EASTERN AV",
        "area_1": "MPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "05:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500983,
                38.968734
            ]
        },
        "location_1_location": "8500 EASTERN AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6212",
        "report_no": "140035474",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "06:07",
        "sex_1": "F",
        "to_date": "2014-05-24T00:00:00.000",
        "to_time": "05:57",
        "zip_code_1": "64138"
    },
    {
        "address": "4200  N ANTIOCH RD",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-20T00:00:00.000",
        "from_time": "03:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.549328,
                39.169997
            ]
        },
        "location_1_location": "4200 N ANTIOCH RD",
        "offense": "302",
        "rep_dist_1": "PC1221",
        "report_no": "140034298",
        "reported_date": "2014-05-20T00:00:00.000",
        "reported_time": "03:50",
        "zip_code_1": "64117"
    },
    {
        "address": "E 31 ST/CLEVELAND AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "18:49",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500738,
                39.093537
            ]
        },
        "location_1_location": "E 31 ST/CLEVELAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2507",
        "report_no": "140073679",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "18:49",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "2100  WOODLAND AV",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-28T00:00:00.000",
        "from_time": "16:30",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561247,
                39.086986
            ]
        },
        "location_1_location": "2100 WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1751",
        "report_no": "140020548",
        "reported_date": "2014-03-28T00:00:00.000",
        "reported_time": "16:56",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "9300  BLUE RIDGE BL",
        "age_1": "17",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-18T00:00:00.000",
        "from_time": "19:37",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.505978,
                38.955835
            ]
        },
        "location_1_location": "9300 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6485",
        "report_no": "140004386",
        "reported_date": "2014-01-19T00:00:00.000",
        "reported_time": "19:37",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "8100  E BANNISTER RD",
        "age_1": "26",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-13T00:00:00.000",
        "from_time": "00:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495058,
                38.951805
            ]
        },
        "location_1_location": "8100 E BANNISTER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6554",
        "report_no": "140057186",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "00:19",
        "sex_1": "F",
        "zip_code_1": "64138"
    },
    {
        "address": "4400  HOLLY ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "00:18",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.600586,
                39.048082
            ]
        },
        "location_1_location": "4400 HOLLY ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3516",
        "report_no": "140077238",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "00:18",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 45 ST/MONTGALL AV",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-30T00:00:00.000",
        "from_time": "06:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 45 ST/MONTGALL AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3590",
        "report_no": "140020932",
        "reported_date": "2014-03-30T00:00:00.000",
        "reported_time": "06:25",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "700  KENSINGTON AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530437,
                39.104092
            ]
        },
        "location_1_location": "700 KENSINGTON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0821",
        "report_no": "140032940",
        "reported_date": "2014-05-15T00:00:00.000",
        "reported_time": "12:23",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "7400  PROSPECT AV",
        "age_1": "31",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "Y",
        "firearm_used_flag": "N",
        "from_date": "2014-10-18T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557236,
                38.992473
            ]
        },
        "location_1_location": "7400 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5636",
        "report_no": "140075419",
        "reported_date": "2014-10-18T00:00:00.000",
        "reported_time": "11:15",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "KARNES BLVD/ROANOKE RD",
        "age_1": "28",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "KARNES BLVD/ROANOKE RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2762",
        "report_no": "140081063",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "21:32",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "1400  INDEPENDENCE AV",
        "age_1": "30",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-01T00:00:00.000",
        "from_time": "16:14",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.563308,
                39.106793
            ]
        },
        "location_1_location": "1400 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0659",
        "report_no": "140000153",
        "reported_date": "2014-01-01T00:00:00.000",
        "reported_time": "16:24",
        "sex_1": "F",
        "to_date": "2014-01-01T00:00:00.000",
        "to_time": "17:24",
        "zip_code_1": "64111"
    },
    {
        "address": "2700  INDEPENDENCE AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-24T00:00:00.000",
        "from_time": "16:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54894,
                39.106278
            ]
        },
        "location_1_location": "2700 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0494",
        "report_no": "140060509",
        "reported_date": "2014-08-24T00:00:00.000",
        "reported_time": "17:04",
        "sex_1": "M"
    },
    {
        "address": "4600  WALLACE AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "344",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-13T00:00:00.000",
        "from_time": "22:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.486949,
                39.038963
            ]
        },
        "location_1_location": "4600 WALLACE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3840",
        "report_no": "140046368",
        "reported_date": "2014-06-13T00:00:00.000",
        "reported_time": "22:00",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "7500  WORNALL RD",
        "age_1": "50",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-24T00:00:00.000",
        "from_time": "13:46",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594355,
                38.992042
            ]
        },
        "location_1_location": "7500 WORNALL RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5665",
        "report_no": "140027456",
        "reported_date": "2014-04-24T00:00:00.000",
        "reported_time": "13:54",
        "sex_1": "M",
        "to_date": "2014-04-24T00:00:00.000",
        "to_time": "13:47",
        "zip_code_1": "64114"
    },
    {
        "address": "6100  E 87 ST",
        "age_1": "28",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-12-10T00:00:00.000",
        "from_time": "22:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517654,
                38.967411
            ]
        },
        "location_1_location": "6100 E 87 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6336",
        "report_no": "140088702",
        "reported_date": "2014-12-10T00:00:00.000",
        "reported_time": "23:32",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "BLUE RIDGE BL/SMART AV",
        "age_1": "26",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-10T00:00:00.000",
        "from_time": "00:39",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525539,
                39.113437
            ]
        },
        "location_1_location": "BLUE RIDGE BL/SMART AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0592",
        "report_no": "140009294",
        "reported_date": "2014-02-10T00:00:00.000",
        "reported_time": "00:39",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "W 32 ST/BROADWAY",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-21T00:00:00.000",
        "from_time": "00:01",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 32 ST/BROADWAY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2506",
        "report_no": "140051010",
        "reported_date": "2014-07-21T00:00:00.000",
        "reported_time": "17:04",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "1600  WINCHESTER AV",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-18T00:00:00.000",
        "from_time": "02:15",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501146,
                39.091781
            ]
        },
        "location_1_location": "1600 WINCHESTER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1506",
        "report_no": "140050089",
        "reported_date": "2014-07-18T00:00:00.000",
        "reported_time": "02:40",
        "sex_1": "M"
    },
    {
        "address": "E 50 ST/WOODLAND AV",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-16T00:00:00.000",
        "from_time": "22:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 50 ST/WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3955",
        "report_no": "140066794",
        "reported_date": "2014-09-16T00:00:00.000",
        "reported_time": "22:57",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "7300  NE PARVIN RD",
        "area_1": "SCP",
        "beat": "635",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-15T00:00:00.000",
        "from_time": "05:00",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.494873,
                39.168417
            ]
        },
        "location_1_location": "7300 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1343",
        "report_no": "140033010",
        "reported_date": "2014-05-15T00:00:00.000",
        "reported_time": "05:15",
        "sex_1": "M"
    },
    {
        "address": "4300  HIGHLAND AV",
        "age_1": "47",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-12T00:00:00.000",
        "from_time": "01:14",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.564466,
                39.048533
            ]
        },
        "location_1_location": "4300 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3491",
        "report_no": "140024286",
        "reported_date": "2014-04-12T00:00:00.000",
        "reported_time": "01:14",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "E 18 ST/TROOST AV",
        "area_1": "CPD",
        "beat": "113",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-22T00:00:00.000",
        "from_time": "22:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "E 18 ST/TROOST AV",
        "offense": "302",
        "rep_dist_1": "PJ1490",
        "report_no": "140043355",
        "reported_date": "2014-06-22T00:00:00.000",
        "reported_time": "22:40"
    },
    {
        "address": "E 87 ST/HILLCREST RD",
        "area_1": "MPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-02T00:00:00.000",
        "from_time": "16:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55217,
                38.986859
            ]
        },
        "location_1_location": "E 87 ST/HILLCREST RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6223",
        "report_no": "140021808",
        "reported_date": "2014-04-02T00:00:00.000",
        "reported_time": "16:19",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "E 87 ST/HILLCREST RD",
        "area_1": "MPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-02T00:00:00.000",
        "from_time": "16:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55217,
                38.986859
            ]
        },
        "location_1_location": "E 87 ST/HILLCREST RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6223",
        "report_no": "140021808",
        "reported_date": "2014-04-02T00:00:00.000",
        "reported_time": "16:19",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "W 10 ST/WYANDOTTE ST",
        "age_1": "40",
        "area_1": "CPD",
        "beat": "112",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-05T00:00:00.000",
        "from_time": "12:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "W 10 ST/WYANDOTTE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0856",
        "report_no": "140022555",
        "reported_date": "2014-04-05T00:00:00.000",
        "reported_time": "12:28",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "600  E LINWOOD BL",
        "age_1": "25",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-02T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577569,
                39.068938
            ]
        },
        "location_1_location": "600 E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2629",
        "report_no": "140063032",
        "reported_date": "2014-09-02T00:00:00.000",
        "reported_time": "20:32",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "900  E ARMOUR BLVD",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57394,
                39.063381
            ]
        },
        "location_1_location": "900 E ARMOUR BLVD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2771",
        "report_no": "140053484",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "16:27",
        "sex_1": "F",
        "zip_code_1": "64111"
    },
    {
        "address": "800  MONROE AV",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-24T00:00:00.000",
        "from_time": "22:38",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538946,
                39.102962
            ]
        },
        "location_1_location": "800 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0892",
        "report_no": "140043950",
        "reported_date": "2014-06-24T00:00:00.000",
        "reported_time": "22:38",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "5300  E 39 ST",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-01T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522096,
                39.0545
            ]
        },
        "location_1_location": "5300 E 39 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ3234",
        "report_no": "140000052",
        "reported_date": "2014-01-01T00:00:00.000",
        "reported_time": "04:02",
        "sex_1": "U",
        "zip_code_1": "64128"
    },
    {
        "address": "4400  PROSPECT AV",
        "age_1": "46",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-23T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.5541,
                39.046333
            ]
        },
        "location_1_location": "4400 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3586",
        "report_no": "140035260",
        "reported_date": "2014-05-23T00:00:00.000",
        "reported_time": "13:58",
        "sex_1": "M",
        "to_date": "2014-05-23T00:00:00.000",
        "to_time": "13:15",
        "zip_code_1": "64127"
    },
    {
        "address": "4400  SCARRITT AV",
        "age_1": "28",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "20:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530059,
                39.114918
            ]
        },
        "location_1_location": "4400 SCARRITT AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0234",
        "report_no": "140007334",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "20:15",
        "sex_1": "F",
        "to_date": "2014-01-31T00:00:00.000",
        "to_time": "20:15",
        "zip_code_1": "64123"
    },
    {
        "address": "5600  N SMALLEY AV",
        "area_1": "SCP",
        "beat": "636",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-08T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.487293,
                39.195311
            ]
        },
        "location_1_location": "5600 N SMALLEY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC0693",
        "report_no": "140072817",
        "reported_date": "2014-10-08T00:00:00.000",
        "reported_time": "15:00",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "4500  GENESEE ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-14T00:00:00.000",
        "from_time": "07:31",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.605884,
                39.046323
            ]
        },
        "location_1_location": "4500 GENESEE ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ3587",
        "report_no": "140010242",
        "reported_date": "2014-02-14T00:00:00.000",
        "reported_time": "07:36",
        "sex_1": "U",
        "zip_code_1": "64111"
    },
    {
        "address": "7400  MONTGALL AV",
        "age_1": "56",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-05T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556066,
                38.992443
            ]
        },
        "location_1_location": "7400 MONTGALL AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5636",
        "report_no": "140087414",
        "reported_date": "2014-12-05T00:00:00.000",
        "reported_time": "21:19",
        "sex_1": "F",
        "zip_code_1": "64132"
    },
    {
        "address": "4000  BROADWAY",
        "age_1": "19",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "02:55",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590931,
                39.054743
            ]
        },
        "location_1_location": "4000 BROADWAY",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3215",
        "report_no": "140073526",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "02:55",
        "sex_1": "F",
        "zip_code_1": "64111"
    },
    {
        "address": "5600  CHARLOTTE ST",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-04T00:00:00.000",
        "from_time": "23:19",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577416,
                39.025352
            ]
        },
        "location_1_location": "5600 CHARLOTTE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4480",
        "report_no": "140038497",
        "reported_date": "2014-06-04T00:00:00.000",
        "reported_time": "23:19",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "E 43 TE/WESTRIDGE RD",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-10T00:00:00.000",
        "from_time": "12:45",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.459478,
                39.015518
            ]
        },
        "location_1_location": "E 43 TE/WESTRIDGE RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3685",
        "report_no": "140081417",
        "reported_date": "2014-11-10T00:00:00.000",
        "reported_time": "12:52",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "E 42 ST/CHARLOTTE ST",
        "age_1": "29",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-05T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 42 ST/CHARLOTTE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3309",
        "report_no": "140022469",
        "reported_date": "2014-04-05T00:00:00.000",
        "reported_time": "02:18",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "400  E BANNISTER RD",
        "age_1": "20",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-06T00:00:00.000",
        "from_time": "10:24",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583813,
                38.955697
            ]
        },
        "location_1_location": "400 E BANNISTER RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6419",
        "report_no": "140064006",
        "reported_date": "2014-09-06T00:00:00.000",
        "reported_time": "10:24",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "E 46 ST/WALNUT ST",
        "age_1": "27",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-25T00:00:00.000",
        "from_time": "21:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "E 46 ST/WALNUT ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3629",
        "report_no": "140035871",
        "reported_date": "2014-05-25T00:00:00.000",
        "reported_time": "21:44",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E BANNISTER RD/DRURY AV",
        "age_1": "58",
        "area_1": "SPD",
        "beat": "541",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-03T00:00:00.000",
        "from_time": "16:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E BANNISTER RD/DRURY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6500",
        "report_no": "140046282",
        "reported_date": "2014-07-03T00:00:00.000",
        "reported_time": "16:34",
        "sex_1": "M",
        "to_date": "2014-07-03T00:00:00.000",
        "to_time": "16:34",
        "zip_code_1": "64134"
    },
    {
        "address": "52 AND SAN RAFAEL",
        "age_1": "14",
        "area_1": "SCP",
        "beat": "636",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-12T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "52 AND SAN RAFAEL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0731",
        "report_no": "140065607",
        "reported_date": "2014-09-12T00:00:00.000",
        "reported_time": "15:18",
        "sex_1": "M"
    },
    {
        "address": "2100  WOODLAND AV",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-28T00:00:00.000",
        "from_time": "16:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.561247,
                39.086986
            ]
        },
        "location_1_location": "2100 WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1751",
        "report_no": "140020548",
        "reported_date": "2014-03-28T00:00:00.000",
        "reported_time": "16:56",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "CYPRESS AV/SMART AV",
        "age_1": "16",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-04T00:00:00.000",
        "from_time": "13:18",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "CYPRESS AV/SMART AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0421",
        "report_no": "140022258",
        "reported_date": "2014-04-04T00:00:00.000",
        "reported_time": "13:18",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "600  PASEO",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-06T00:00:00.000",
        "from_time": "00:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "600 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0654",
        "report_no": "140046857",
        "reported_date": "2014-07-06T00:00:00.000",
        "reported_time": "01:04",
        "sex_1": "F",
        "zip_code_1": "64106"
    },
    {
        "address": "7600  MONROE AV",
        "age_1": "52",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "00:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544818,
                38.990123
            ]
        },
        "location_1_location": "7600 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5718",
        "report_no": "140082272",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "00:40",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "2500  VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "325",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-08-14T00:00:00.000",
        "from_time": "18:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521266,
                39.079572
            ]
        },
        "location_1_location": "2500 VAN BRUNT BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2158",
        "report_no": "140057745",
        "reported_date": "2014-08-14T00:00:00.000",
        "reported_time": "18:40",
        "sex_1": "F",
        "to_date": "2014-08-14T00:00:00.000",
        "to_time": "18:40",
        "zip_code_1": "64127"
    },
    {
        "address": "9400  FARLEY AV",
        "age_1": "30",
        "area_1": "SPD",
        "beat": "544",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-22T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.484106,
                38.953212
            ]
        },
        "location_1_location": "9400 FARLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6493",
        "report_no": "140019056",
        "reported_date": "2014-03-22T00:00:00.000",
        "reported_time": "10:28",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "W 39 ST/CENTRAL ST",
        "age_1": "22",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 39 ST/CENTRAL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3045",
        "report_no": "140005575",
        "reported_date": "2014-01-24T00:00:00.000",
        "reported_time": "17:20",
        "sex_1": "M",
        "to_date": "2014-01-24T00:00:00.000",
        "to_time": "17:20",
        "zip_code_1": "64111"
    },
    {
        "address": "3200  PROSPECT AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-30T00:00:00.000",
        "from_time": "15:06",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552965,
                39.067952
            ]
        },
        "location_1_location": "3200 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2651",
        "report_no": "140070510",
        "reported_date": "2014-09-30T00:00:00.000",
        "reported_time": "15:06",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "1800  NE VIVION RD",
        "age_1": "1",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "21:25",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558185,
                39.181112
            ]
        },
        "location_1_location": "1800 NE VIVION RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PC0956",
        "report_no": "140029619",
        "reported_date": "2014-05-02T00:00:00.000",
        "reported_time": "21:30",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "6500  NW PRAIRIE VIEW RD",
        "age_1": "29",
        "area_1": "NPD",
        "beat": "414",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-13T00:00:00.000",
        "from_time": "11:30",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.64135,
                39.212912
            ]
        },
        "location_1_location": "6500 NW PRAIRIE VIEW RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0626",
        "report_no": "140065816",
        "reported_date": "2014-09-13T00:00:00.000",
        "reported_time": "11:35",
        "sex_1": "F",
        "zip_code_1": "64152"
    },
    {
        "address": "2900  YORK ST",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-22T00:00:00.000",
        "from_time": "22:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525884,
                39.071711
            ]
        },
        "location_1_location": "2900 YORK ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2455",
        "report_no": "140068439",
        "reported_date": "2014-09-22T00:00:00.000",
        "reported_time": "22:19",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "4600  TROOST AV",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-18T00:00:00.000",
        "from_time": "17:27",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.572906,
                39.043373
            ]
        },
        "location_1_location": "4600 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3710",
        "report_no": "140067274",
        "reported_date": "2014-09-18T00:00:00.000",
        "reported_time": "17:38",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "INDEPENDENCE AV/PROSPECT AV",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "19:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0573",
        "report_no": "140074660",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "19:09",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "8600  E 63 TF",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-22T00:00:00.000",
        "from_time": "12:04",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "8600 E 63 TF",
        "offense": "302",
        "rep_dist_1": "PJ4889",
        "report_no": "140084362",
        "reported_date": "2014-11-22T00:00:00.000",
        "reported_time": "12:05",
        "zip_code_1": "64129"
    },
    {
        "address": "E 69 ST/CLEVELAND AV",
        "age_1": "28",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55217,
                38.986859
            ]
        },
        "location_1_location": "E 69 ST/CLEVELAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5273",
        "report_no": "140070195",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "13:20",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "8400  E 108 ST",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-11T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.492744,
                38.927717
            ]
        },
        "location_1_location": "8400 E 108 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ6922",
        "report_no": "140089208",
        "reported_date": "2014-12-13T00:00:00.000",
        "reported_time": "00:13",
        "sex_1": "U",
        "to_date": "2014-12-13T00:00:00.000",
        "to_time": "00:13",
        "zip_code_1": "64134"
    },
    {
        "address": "E 39 ST/HARDESTY AV",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "10:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 39 ST/HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3149",
        "report_no": "140087772",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "10:57",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "300  N BRIGHTON AV",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "22:15",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.523268,
                39.114502
            ]
        },
        "location_1_location": "300 N BRIGHTON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0229",
        "report_no": "140079054",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "22:35",
        "sex_1": "M",
        "to_date": "2014-10-31T00:00:00.000",
        "to_time": "22:35",
        "zip_code_1": "64130"
    },
    {
        "address": "5700  TROOST AV",
        "age_1": "53",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-15T00:00:00.000",
        "from_time": "12:33",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574058,
                39.023464
            ]
        },
        "location_1_location": "5700 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4554",
        "report_no": "140089792",
        "reported_date": "2014-12-15T00:00:00.000",
        "reported_time": "12:35",
        "sex_1": "F",
        "to_date": "2014-12-15T00:00:00.000",
        "to_time": "12:34",
        "zip_code_1": "64130"
    },
    {
        "address": "4400  N ANTIOCH RD",
        "area_1": "SCP",
        "beat": "633",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-15T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.549036,
                39.17404
            ]
        },
        "location_1_location": "4400 N ANTIOCH RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1112",
        "report_no": "140010594",
        "reported_date": "2014-02-15T00:00:00.000",
        "reported_time": "19:03",
        "sex_1": "M"
    },
    {
        "address": "1800  GRAND AV",
        "age_1": "23",
        "area_1": "CPD",
        "beat": "113",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-16T00:00:00.000",
        "from_time": "10:01",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581376,
                39.091592
            ]
        },
        "location_1_location": "1800 GRAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1544",
        "report_no": "140049594",
        "reported_date": "2014-07-16T00:00:00.000",
        "reported_time": "10:04",
        "sex_1": "F",
        "zip_code_1": "64108"
    },
    {
        "address": "500  N LAWNDALE AV",
        "age_1": "52",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-13T00:00:00.000",
        "from_time": "05:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514886,
                39.117863
            ]
        },
        "location_1_location": "500 N LAWNDALE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0166",
        "report_no": "140073965",
        "reported_date": "2014-10-13T00:00:00.000",
        "reported_time": "05:38",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "E 39 ST/JACKSON AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-30T00:00:00.000",
        "from_time": "01:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 39 ST/JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3077",
        "report_no": "140085969",
        "reported_date": "2014-11-30T00:00:00.000",
        "reported_time": "01:51",
        "sex_1": "F",
        "to_date": "2014-11-30T00:00:00.000",
        "to_time": "01:51",
        "zip_code_1": "64128"
    },
    {
        "address": "5600  HIGHLAND AV",
        "age_1": "20",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-21T00:00:00.000",
        "from_time": "13:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.565816,
                39.024973
            ]
        },
        "location_1_location": "5600 HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4500",
        "report_no": "140034703",
        "reported_date": "2014-05-21T00:00:00.000",
        "reported_time": "13:44",
        "sex_1": "M",
        "to_date": "2014-05-21T00:00:00.000",
        "to_time": "13:45",
        "zip_code_1": "64110"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-22T00:00:00.000",
        "from_time": "21:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49969,
                38.966338
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ6284",
        "report_no": "140076616",
        "reported_date": "2014-10-22T00:00:00.000",
        "reported_time": "21:14",
        "sex_1": "U",
        "zip_code_1": "64134"
    },
    {
        "address": "8300  NOLAND RD",
        "age_1": "63",
        "area_1": "SPD",
        "beat": "544",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-29T00:00:00.000",
        "from_time": "04:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.426508,
                38.970224
            ]
        },
        "location_1_location": "8300 NOLAND RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6245",
        "report_no": "140061775",
        "reported_date": "2014-08-29T00:00:00.000",
        "reported_time": "04:05",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "4600  ST JOHN AV",
        "age_1": "47",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-01T00:00:00.000",
        "from_time": "18:45",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.52778,
                39.112798
            ]
        },
        "location_1_location": "4600 ST JOHN AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ0279",
        "report_no": "140054037",
        "reported_date": "2014-08-01T00:00:00.000",
        "reported_time": "18:45",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "E 39 ST/WARWICK BL",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-06T00:00:00.000",
        "from_time": "04:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "E 39 ST/WARWICK BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3057",
        "report_no": "140072043",
        "reported_date": "2014-10-06T00:00:00.000",
        "reported_time": "04:46",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E EMANUEL CLEAVER II BL/TROOST AV",
        "age_1": "29",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-17T00:00:00.000",
        "from_time": "17:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E EMANUEL CLEAVER II BL/TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3708",
        "report_no": "140083778",
        "reported_date": "2014-11-20T00:00:00.000",
        "reported_time": "09:58",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "E 12 ST/BENTON BL",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "16:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 12 ST/BENTON BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1102",
        "report_no": "140093113",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "16:33",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "MAIN ST/E TRUMAN RD",
        "area_1": "CPD",
        "beat": "113",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "MAIN ST/E TRUMAN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1298",
        "report_no": "140036906",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "15:30",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "1500  CYPRESS AV",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-28T00:00:00.000",
        "from_time": "11:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530008,
                39.093871
            ]
        },
        "location_1_location": "1500 CYPRESS AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1444",
        "report_no": "140036512",
        "reported_date": "2014-05-28T00:00:00.000",
        "reported_time": "11:32",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 39 ST/WOODLAND AV",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-18T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 39 ST/WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3098",
        "report_no": "140033837",
        "reported_date": "2014-05-18T00:00:00.000",
        "reported_time": "07:58",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "900  E 63 ST",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-21T00:00:00.000",
        "from_time": "20:27",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57629,
                39.013358
            ]
        },
        "location_1_location": "900 E 63 ST",
        "offense": "302",
        "rep_dist_1": "PJ4875",
        "report_no": "140004878",
        "reported_date": "2014-01-21T00:00:00.000",
        "reported_time": "20:27",
        "zip_code_1": "64110"
    },
    {
        "address": "PASEO/E TRUMAN RD",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-26T00:00:00.000",
        "from_time": "00:01",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "PASEO/E TRUMAN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1326",
        "report_no": "140035970",
        "reported_date": "2014-05-26T00:00:00.000",
        "reported_time": "10:52",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "E 22 ST/PROSPECT AV",
        "age_1": "22",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-04T00:00:00.000",
        "from_time": "01:04",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "E 22 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1796",
        "report_no": "140046422",
        "reported_date": "2014-07-04T00:00:00.000",
        "reported_time": "01:04",
        "sex_1": "F",
        "zip_code_1": "64124"
    },
    {
        "address": "E 5 ST/MAIN ST",
        "age_1": "33",
        "area_1": "OSPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-17T00:00:00.000",
        "from_time": "13:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 5 ST/MAIN ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PPX063",
        "report_no": "140017758",
        "reported_date": "2014-03-17T00:00:00.000",
        "reported_time": "13:32",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "3500  E 27 ST",
        "age_1": "16",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-13T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.542,
                39.076767
            ]
        },
        "location_1_location": "3500 E 27 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2188",
        "report_no": "140040885",
        "reported_date": "2014-06-13T00:00:00.000",
        "reported_time": "20:30",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "1000  W 58 ST",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "21:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.599587,
                39.022683
            ]
        },
        "location_1_location": "1000 W 58 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4530",
        "report_no": "140005617",
        "reported_date": "2014-01-24T00:00:00.000",
        "reported_time": "21:15",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "I-470 AND JAMES A REED",
        "area_1": "OSPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "00:16",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.487767,
                38.937983
            ]
        },
        "location_1_location": "I-470 AND JAMES A REED",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJX007",
        "report_no": "140036741",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "02:28",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "2200  KENSINGTON AV",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-15T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.531596,
                39.085332
            ]
        },
        "location_1_location": "2200 KENSINGTON AV",
        "offense": "302",
        "rep_dist_1": "PJ1873",
        "report_no": "140017414",
        "reported_date": "2014-03-15T00:00:00.000",
        "reported_time": "22:47",
        "zip_code_1": "64127"
    },
    {
        "address": "7300  NE PARVIN RD",
        "area_1": "SCP",
        "beat": "635",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-15T00:00:00.000",
        "from_time": "05:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.494873,
                39.168417
            ]
        },
        "location_1_location": "7300 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1343",
        "report_no": "140033010",
        "reported_date": "2014-05-15T00:00:00.000",
        "reported_time": "05:15",
        "sex_1": "F"
    },
    {
        "address": "7000  PROSPECT AV",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-03T00:00:00.000",
        "from_time": "22:34",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556855,
                38.999694
            ]
        },
        "location_1_location": "7000 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5341",
        "report_no": "140086914",
        "reported_date": "2014-12-03T00:00:00.000",
        "reported_time": "22:34",
        "sex_1": "M"
    },
    {
        "address": "11100  N AMBASSADOR DR",
        "area_1": "NPD",
        "beat": "425",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-25T00:00:00.000",
        "from_time": "15:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.681669,
                39.293467
            ]
        },
        "location_1_location": "11100 N AMBASSADOR DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0221",
        "report_no": "140019785",
        "reported_date": "2014-03-25T00:00:00.000",
        "reported_time": "15:23",
        "sex_1": "M",
        "zip_code_1": "64155"
    },
    {
        "address": "600  PASEO",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-08T00:00:00.000",
        "from_time": "23:48",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "600 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0654",
        "report_no": "140072928",
        "reported_date": "2014-10-08T00:00:00.000",
        "reported_time": "23:48",
        "sex_1": "M",
        "to_date": "2014-10-08T00:00:00.000",
        "to_time": "23:48",
        "zip_code_1": "64106"
    },
    {
        "address": "E 31 ST/OAKLEY AV",
        "age_1": "19",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "02:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "E 31 ST/OAKLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2562",
        "report_no": "140036737",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "02:55",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "E 34 ST/TROOST AV",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "19:32",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "E 34 ST/TROOST AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2706",
        "report_no": "140076063",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "19:32",
        "sex_1": "U",
        "zip_code_1": "64111"
    },
    {
        "address": "4000  CHARLOTTE ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-04T00:00:00.000",
        "from_time": "21:01",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575756,
                39.054293
            ]
        },
        "location_1_location": "4000 CHARLOTTE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3228",
        "report_no": "140022418",
        "reported_date": "2014-04-04T00:00:00.000",
        "reported_time": "21:01",
        "sex_1": "M"
    },
    {
        "address": "E 35 ST/PROSPECT AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "21:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 35 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2799",
        "report_no": "140053553",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "21:50",
        "sex_1": "U",
        "zip_code_1": "64128"
    },
    {
        "address": "4300  MAIN ST",
        "area_1": "CPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-16T00:00:00.000",
        "from_time": "08:41",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586568,
                39.049273
            ]
        },
        "location_1_location": "4300 MAIN ST",
        "offense": "302",
        "rep_dist_1": "PJ3459",
        "report_no": "140074796",
        "reported_date": "2014-10-16T00:00:00.000",
        "reported_time": "08:41",
        "zip_code_1": "64110"
    },
    {
        "address": "E ARMOUR BL/CAMPBELL ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-29T00:00:00.000",
        "from_time": "06:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E ARMOUR BL/CAMPBELL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2767",
        "report_no": "140085754",
        "reported_date": "2014-11-29T00:00:00.000",
        "reported_time": "07:29",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "3400  E RED BRIDGE RD",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "534",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-24T00:00:00.000",
        "from_time": "20:26",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.550666,
                38.924625
            ]
        },
        "location_1_location": "3400 E RED BRIDGE RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7037",
        "report_no": "140092152",
        "reported_date": "2014-12-24T00:00:00.000",
        "reported_time": "20:52",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "3200  PROSPECT AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552965,
                39.067952
            ]
        },
        "location_1_location": "3200 PROSPECT AV",
        "offense": "302",
        "rep_dist_1": "PJ2651",
        "report_no": "140060066",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "20:50",
        "zip_code_1": "64129"
    },
    {
        "address": "7600  MONROE AV",
        "age_1": "2",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "00:05",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544818,
                38.990123
            ]
        },
        "location_1_location": "7600 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5718",
        "report_no": "140082272",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "00:40",
        "sex_1": "F",
        "zip_code_1": "64132"
    },
    {
        "address": "4600  NE VIVION RD",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-10-28T00:00:00.000",
        "from_time": "11:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.52566,
                39.188021
            ]
        },
        "location_1_location": "4600 NE VIVION RD",
        "offense": "302",
        "rep_dist_1": "PC0857",
        "report_no": "140078102",
        "reported_date": "2014-10-28T00:00:00.000",
        "reported_time": "11:44",
        "zip_code_1": "64116"
    },
    {
        "address": "W 20 ST/WASHINGTON ST",
        "age_1": "33",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-15T00:00:00.000",
        "from_time": "00:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "W 20 ST/WASHINGTON ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1607",
        "report_no": "140057799",
        "reported_date": "2014-08-15T00:00:00.000",
        "reported_time": "00:16",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "PRESIDENT CT/VIRGINIA AV",
        "age_1": "27",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-14T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "PRESIDENT CT/VIRGINIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5996",
        "report_no": "140032973",
        "reported_date": "2014-05-14T00:00:00.000",
        "reported_time": "22:01",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "11300  MONTGALL AV",
        "area_1": "SPD",
        "beat": "534",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-27T00:00:00.000",
        "from_time": "17:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558654,
                38.92199
            ]
        },
        "location_1_location": "11300 MONTGALL AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ7158",
        "report_no": "140044734",
        "reported_date": "2014-06-27T00:00:00.000",
        "reported_time": "20:29",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "4300  TROOST AV",
        "age_1": "32",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-13T00:00:00.000",
        "from_time": "05:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.572596,
                39.048812
            ]
        },
        "location_1_location": "4300 TROOST AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3479",
        "report_no": "140057220",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "05:40",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "3000  VAN BRUNT BL",
        "age_1": "34",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-21T00:00:00.000",
        "from_time": "10:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520798,
                39.070795
            ]
        },
        "location_1_location": "3000 VAN BRUNT BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2486",
        "report_no": "140091265",
        "reported_date": "2014-12-21T00:00:00.000",
        "reported_time": "10:51",
        "sex_1": "F",
        "to_date": "2014-12-21T00:00:00.000",
        "to_time": "10:51",
        "zip_code_1": "64124"
    },
    {
        "address": "10400  E 43 ST",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-20T00:00:00.000",
        "from_time": "02:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.457891,
                39.044604
            ]
        },
        "location_1_location": "10400 E 43 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3792",
        "report_no": "140026373",
        "reported_date": "2014-04-20T00:00:00.000",
        "reported_time": "03:04",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "2500  NORTON AV",
        "age_1": "44",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-25T00:00:00.000",
        "from_time": "09:12",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.535115,
                39.080032
            ]
        },
        "location_1_location": "2500 NORTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2129",
        "report_no": "140019700",
        "reported_date": "2014-03-25T00:00:00.000",
        "reported_time": "09:14",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "5800  PEERY AV",
        "age_1": "57",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-05T00:00:00.000",
        "from_time": "13:34",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514393,
                39.098546
            ]
        },
        "location_1_location": "5800 PEERY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1115",
        "report_no": "140030304",
        "reported_date": "2014-05-05T00:00:00.000",
        "reported_time": "13:34",
        "sex_1": "F"
    },
    {
        "address": "3300  E 77 ST",
        "age_1": "38",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-20T00:00:00.000",
        "from_time": "18:18",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54963,
                38.986836
            ]
        },
        "location_1_location": "3300 E 77 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ5704",
        "report_no": "140067861",
        "reported_date": "2014-09-20T00:00:00.000",
        "reported_time": "18:48",
        "sex_1": "F",
        "zip_code_1": "64132"
    },
    {
        "address": "300  BELMONT BL",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-16T00:00:00.000",
        "from_time": "17:35",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.509476,
                39.110192
            ]
        },
        "location_1_location": "300 BELMONT BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0460",
        "report_no": "140041628",
        "reported_date": "2014-06-16T00:00:00.000",
        "reported_time": "17:36",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "E 40 ST/MERSINGTON AV",
        "age_1": "34",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-17T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 40 ST/MERSINGTON AV",
        "offense": "302",
        "race_1": "A",
        "rep_dist_1": "PJ3208",
        "report_no": "140011046",
        "reported_date": "2014-02-17T00:00:00.000",
        "reported_time": "23:08",
        "sex_1": "M",
        "to_date": "2014-02-17T00:00:00.000",
        "to_time": "23:08",
        "zip_code_1": "64128"
    },
    {
        "address": "1200  E 63 ST",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-15T00:00:00.000",
        "from_time": "20:15",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573291,
                39.013236
            ]
        },
        "location_1_location": "1200 E 63 ST",
        "offense": "302",
        "rep_dist_1": "PJ4882",
        "report_no": "140058048",
        "reported_date": "2014-08-15T00:00:00.000",
        "reported_time": "20:25",
        "to_date": "2014-08-15T00:00:00.000",
        "to_time": "20:30",
        "zip_code_1": "64133"
    },
    {
        "address": "4400  JEFFERSON ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-10T00:00:00.000",
        "from_time": "20:44",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594436,
                39.047683
            ]
        },
        "location_1_location": "4400 JEFFERSON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3559",
        "report_no": "140081571",
        "reported_date": "2014-11-10T00:00:00.000",
        "reported_time": "20:44",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 93 ST/INDIANA AV",
        "age_1": "28",
        "area_1": "MPD",
        "beat": "234",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-16T00:00:00.000",
        "from_time": "17:55",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.59572,
                38.958286
            ]
        },
        "location_1_location": "E 93 ST/INDIANA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6384",
        "report_no": "140049713",
        "reported_date": "2014-07-16T00:00:00.000",
        "reported_time": "17:55",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "3600  THOMPSON AV",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-01T00:00:00.000",
        "from_time": "00:54",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.53884,
                39.107718
            ]
        },
        "location_1_location": "3600 THOMPSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0580",
        "report_no": "140045536",
        "reported_date": "2014-07-01T00:00:00.000",
        "reported_time": "00:54",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "CLEVELAND AV/INDEPENDENCE AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-05-05T00:00:00.000",
        "from_time": "23:52",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "CLEVELAND AV/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0630",
        "report_no": "140030443",
        "reported_date": "2014-05-05T00:00:00.000",
        "reported_time": "23:52",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "E 28 ST/MERSINGTON AV",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-20T00:00:00.000",
        "from_time": "14:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 28 ST/MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2271",
        "report_no": "140091076",
        "reported_date": "2014-12-20T00:00:00.000",
        "reported_time": "14:17",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "7600  WORNALL RD",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-18T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594388,
                38.990552
            ]
        },
        "location_1_location": "7600 WORNALL RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5683",
        "report_no": "140025809",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "01:35",
        "sex_1": "M",
        "zip_code_1": "64104"
    },
    {
        "address": "4400  HOLLY ST",
        "age_1": "28",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "00:18",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.600586,
                39.048082
            ]
        },
        "location_1_location": "4400 HOLLY ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3516",
        "report_no": "140077238",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "00:18",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "400  W 47 ST",
        "age_1": "28",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-02-13T00:00:00.000",
        "from_time": "16:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.591701,
                39.042351
            ]
        },
        "location_1_location": "400 W 47 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3699",
        "report_no": "140010113",
        "reported_date": "2014-02-13T00:00:00.000",
        "reported_time": "16:37",
        "sex_1": "M",
        "to_date": "2014-02-13T00:00:00.000",
        "to_time": "16:20",
        "zip_code_1": "64111"
    },
    {
        "address": "2900  MERSINGTON AV",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-05T00:00:00.000",
        "from_time": "22:48",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537765,
                39.072411
            ]
        },
        "location_1_location": "2900 MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2443",
        "report_no": "140008413",
        "reported_date": "2014-02-05T00:00:00.000",
        "reported_time": "22:48",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "INDEPENDENCE AV/VAN BRUNT BL",
        "age_1": "48",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-28T00:00:00.000",
        "from_time": "01:27",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/VAN BRUNT BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0622",
        "report_no": "140036418",
        "reported_date": "2014-05-28T00:00:00.000",
        "reported_time": "01:27",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3800  ANDERSON AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-13T00:00:00.000",
        "from_time": "01:05",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.536495,
                39.11126
            ]
        },
        "location_1_location": "3800 ANDERSON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0355",
        "report_no": "140073948",
        "reported_date": "2014-10-13T00:00:00.000",
        "reported_time": "01:16",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "3500  MAIN ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "19:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.585711,
                39.063692
            ]
        },
        "location_1_location": "3500 MAIN ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2827",
        "report_no": "140007742",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "19:20",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "15300  E 48 ST",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-19T00:00:00.000",
        "from_time": "01:46",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.400569,
                39.033148
            ]
        },
        "location_1_location": "15300 E 48 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ4091",
        "report_no": "140050342",
        "reported_date": "2014-07-19T00:00:00.000",
        "reported_time": "01:46",
        "sex_1": "U"
    },
    {
        "address": "8500  E WINNER RD",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "20:59",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.483131,
                39.107009
            ]
        },
        "location_1_location": "8500 E WINNER RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0621",
        "report_no": "140070314",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "20:59",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "300  E LINWOOD BL",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-15T00:00:00.000",
        "from_time": "19:45",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581019,
                39.068318
            ]
        },
        "location_1_location": "300 E LINWOOD BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2540",
        "report_no": "140066457",
        "reported_date": "2014-09-15T00:00:00.000",
        "reported_time": "19:46",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "400  JACKSON AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "03:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.532896,
                39.109192
            ]
        },
        "location_1_location": "400 JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0502",
        "report_no": "140035461",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "03:28",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "200  W 36 ST",
        "age_1": "60",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-30T00:00:00.000",
        "from_time": "15:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588449,
                39.062108
            ]
        },
        "location_1_location": "200 W 36 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2824",
        "report_no": "140045415",
        "reported_date": "2014-06-30T00:00:00.000",
        "reported_time": "15:50",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "6600  E 16 ST",
        "age_1": "30",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "21:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.505523,
                39.091956
            ]
        },
        "location_1_location": "6600 E 16 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1532",
        "report_no": "140077464",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "21:28",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "1600  N UNIVERSAL AV",
        "age_1": "36",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-04T00:00:00.000",
        "from_time": "06:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.506242,
                39.135397
            ]
        },
        "location_1_location": "1600 N UNIVERSAL AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0023",
        "report_no": "140000740",
        "reported_date": "2014-01-04T00:00:00.000",
        "reported_time": "06:29",
        "sex_1": "F",
        "zip_code_1": "64120"
    },
    {
        "address": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-25T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3149",
        "report_no": "140044231",
        "reported_date": "2014-06-25T00:00:00.000",
        "reported_time": "22:54",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "3000  E 60 ST",
        "age_1": "38",
        "area_1": "MPD",
        "beat": "223",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-28T00:00:00.000",
        "from_time": "16:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.551108,
                39.017503
            ]
        },
        "location_1_location": "3000 E 60 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4790",
        "report_no": "140006501",
        "reported_date": "2014-01-28T00:00:00.000",
        "reported_time": "16:11",
        "sex_1": "F",
        "zip_code_1": "64131"
    },
    {
        "address": "E 57 ST/MCGEE ST",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-03T00:00:00.000",
        "from_time": "23:38",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 57 ST/MCGEE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4471",
        "report_no": "140054563",
        "reported_date": "2014-08-03T00:00:00.000",
        "reported_time": "23:38",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "3000  KENSINGTON AV",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-02T00:00:00.000",
        "from_time": "03:53",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.532006,
                39.070941
            ]
        },
        "location_1_location": "3000 KENSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2501",
        "report_no": "140054141",
        "reported_date": "2014-08-02T00:00:00.000",
        "reported_time": "03:53",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "5200  NW 82 TE",
        "area_1": "NPD",
        "beat": "414",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-05T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.64011,
                39.243466
            ]
        },
        "location_1_location": "5200 NW 82 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PP0379",
        "report_no": "140072023",
        "reported_date": "2014-10-05T00:00:00.000",
        "reported_time": "23:47",
        "sex_1": "M",
        "zip_code_1": "64154"
    },
    {
        "address": "100  W 47 ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-10T00:00:00.000",
        "from_time": "09:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588584,
                39.04226
            ]
        },
        "location_1_location": "100 W 47 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3706",
        "report_no": "140031690",
        "reported_date": "2014-05-10T00:00:00.000",
        "reported_time": "09:18",
        "sex_1": "F",
        "zip_code_1": "64112"
    },
    {
        "address": "9400  BLUE RIDGE BL",
        "age_1": "33",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "22:59",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.507929,
                38.953624
            ]
        },
        "location_1_location": "9400 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6485",
        "report_no": "140007368",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "23:01",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E 31 ST/PROSPECT AV",
        "age_1": "65",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-02T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 31 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2482",
        "report_no": "140037945",
        "reported_date": "2014-06-02T00:00:00.000",
        "reported_time": "20:57",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "500  WESTPORT RD",
        "age_1": "22",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-13T00:00:00.000",
        "from_time": "01:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.591553,
                39.052828
            ]
        },
        "location_1_location": "500 WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3218",
        "report_no": "140082093",
        "reported_date": "2014-11-13T00:00:00.000",
        "reported_time": "01:40",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "BENTON BL/INDEPENDENCE AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-17T00:00:00.000",
        "from_time": "01:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "BENTON BL/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0609",
        "report_no": "140033925",
        "reported_date": "2014-05-18T00:00:00.000",
        "reported_time": "17:06",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "6900  NW 83 TE",
        "age_1": "16",
        "area_1": "NPD",
        "beat": "421",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "21:42",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.660729,
                39.245929
            ]
        },
        "location_1_location": "6900 NW 83 TE",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0365",
        "report_no": "140081067",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "21:42",
        "sex_1": "F",
        "zip_code_1": "64152"
    },
    {
        "address": "W 6 ST/BROADWAY",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-17T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 6 ST/BROADWAY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0597",
        "report_no": "140025849",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "10:14",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "5500  WOODLAND AV",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-20T00:00:00.000",
        "from_time": "02:13",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.564526,
                39.026553
            ]
        },
        "location_1_location": "5500 WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4431",
        "report_no": "140018499",
        "reported_date": "2014-03-20T00:00:00.000",
        "reported_time": "02:15",
        "sex_1": "M"
    },
    {
        "address": "7300  PROSPECT AV",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-17T00:00:00.000",
        "from_time": "21:03",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557146,
                38.994273
            ]
        },
        "location_1_location": "7300 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5571",
        "report_no": "140067049",
        "reported_date": "2014-09-17T00:00:00.000",
        "reported_time": "21:04",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "400  SOUTHWEST BL",
        "age_1": "21",
        "area_1": "OSPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-22T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "400 SOUTHWEST BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PWX001",
        "report_no": "140043269",
        "reported_date": "2014-06-22T00:00:00.000",
        "reported_time": "17:10",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "5700  TROOST AV",
        "age_1": "34",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-20T00:00:00.000",
        "from_time": "10:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574058,
                39.023464
            ]
        },
        "location_1_location": "5700 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4554",
        "report_no": "140026402",
        "reported_date": "2014-04-20T00:00:00.000",
        "reported_time": "10:15",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "E 45 ST/FLORA AV",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-08T00:00:00.000",
        "from_time": "01:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 45 ST/FLORA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3561",
        "report_no": "140015400",
        "reported_date": "2014-03-08T00:00:00.000",
        "reported_time": "01:46",
        "sex_1": "M",
        "to_date": "2014-03-08T00:00:00.000",
        "to_time": "01:45",
        "zip_code_1": "64110"
    },
    {
        "address": "E 42 ST/MONTGALL AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-14T00:00:00.000",
        "from_time": "04:35",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 42 ST/MONTGALL AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3352",
        "report_no": "140089494",
        "reported_date": "2014-12-14T00:00:00.000",
        "reported_time": "04:43",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "1100  OAKLEY AV",
        "age_1": "39",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "13:59",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.516838,
                39.098814
            ]
        },
        "location_1_location": "1100 OAKLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1140",
        "report_no": "140078951",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "13:59",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "0  BLK OF W 38 ST",
        "age_1": "25",
        "area_1": "SCP",
        "beat": "641",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-12T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "0 BLK OF W 38 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC0579",
        "report_no": "140073855",
        "reported_date": "2014-10-12T00:00:00.000",
        "reported_time": "13:52",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "8600  E 63 TF",
        "age_1": "33",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-22T00:00:00.000",
        "from_time": "12:04",
        "ibrs": "120",
        "invl_no_1": "10",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "8600 E 63 TF",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4889",
        "report_no": "140084362",
        "reported_date": "2014-11-22T00:00:00.000",
        "reported_time": "12:05",
        "sex_1": "F",
        "zip_code_1": "64129"
    },
    {
        "address": "4000  COLLEGE AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-14T00:00:00.000",
        "from_time": "17:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.545645,
                39.053245
            ]
        },
        "location_1_location": "4000 COLLEGE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3288",
        "report_no": "140003185",
        "reported_date": "2014-01-14T00:00:00.000",
        "reported_time": "17:29",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "7600  E 110 ST",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-11T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501385,
                38.925775
            ]
        },
        "location_1_location": "7600 E 110 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6964",
        "report_no": "140016348",
        "reported_date": "2014-03-11T00:00:00.000",
        "reported_time": "20:50",
        "sex_1": "M",
        "to_date": "2014-03-11T00:00:00.000",
        "to_time": "19:30",
        "zip_code_1": "64134"
    },
    {
        "address": "700  E 40 ST",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "22:55",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576771,
                39.054486
            ]
        },
        "location_1_location": "700 E 40 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3227",
        "report_no": "140005655",
        "reported_date": "2014-01-24T00:00:00.000",
        "reported_time": "22:58",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "900  E ARMOUR BLVD",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-30T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57394,
                39.063381
            ]
        },
        "location_1_location": "900 E ARMOUR BLVD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2771",
        "report_no": "140053484",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "16:27",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 35 ST/OLIVE ST",
        "age_1": "46",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-11-06T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 35 ST/OLIVE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2796",
        "report_no": "140080356",
        "reported_date": "2014-11-06T00:00:00.000",
        "reported_time": "02:56",
        "sex_1": "M",
        "to_date": "2014-11-06T00:00:00.000",
        "to_time": "02:55",
        "zip_code_1": "64109"
    },
    {
        "address": "500  WESTPORT RD",
        "age_1": "24",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-20T00:00:00.000",
        "from_time": "02:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.591553,
                39.052828
            ]
        },
        "location_1_location": "500 WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3218",
        "report_no": "140050767",
        "reported_date": "2014-07-20T00:00:00.000",
        "reported_time": "20:24",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "10600  E 42 ST",
        "age_1": "0",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-26T00:00:00.000",
        "from_time": "16:53",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.453903,
                39.046427
            ]
        },
        "location_1_location": "10600 E 42 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3526",
        "report_no": "140044412",
        "reported_date": "2014-06-26T00:00:00.000",
        "reported_time": "16:58",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "LINWOOD BLVD/BENTON AVE",
        "area_1": "CPD",
        "beat": "125",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "LINWOOD BLVD/BENTON AVE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2541",
        "report_no": "140082647",
        "reported_date": "2014-11-15T00:00:00.000",
        "reported_time": "16:52",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "7400  PROSPECT AV",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-10-18T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557236,
                38.992473
            ]
        },
        "location_1_location": "7400 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5636",
        "report_no": "140075419",
        "reported_date": "2014-10-18T00:00:00.000",
        "reported_time": "11:15",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "4100  TROOST AV",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-21T00:00:00.000",
        "from_time": "12:25",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.572368,
                39.052413
            ]
        },
        "location_1_location": "4100 TROOST AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3313",
        "report_no": "140084070",
        "reported_date": "2014-11-21T00:00:00.000",
        "reported_time": "12:25",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "E 42 ST/CAMPBELL ST",
        "age_1": "24",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-08T00:00:00.000",
        "from_time": "23:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 42 ST/CAMPBELL ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3310",
        "report_no": "140072918",
        "reported_date": "2014-10-08T00:00:00.000",
        "reported_time": "23:24",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "INDEPENDENCE AV/INDIANA AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-26T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/INDIANA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0613",
        "report_no": "140085367",
        "reported_date": "2014-11-27T00:00:00.000",
        "reported_time": "00:01",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "5500  E 84 TE",
        "age_1": "25",
        "area_1": "MPD",
        "beat": "243",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-16T00:00:00.000",
        "from_time": "19:28",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524163,
                38.972917
            ]
        },
        "location_1_location": "5500 E 84 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6117",
        "report_no": "140049740",
        "reported_date": "2014-07-16T00:00:00.000",
        "reported_time": "19:28",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "E 11 ST/LYDIA AV",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-03T00:00:00.000",
        "from_time": "21:32",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 11 ST/LYDIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0977",
        "report_no": "140046363",
        "reported_date": "2014-07-03T00:00:00.000",
        "reported_time": "21:32",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-25T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3149",
        "report_no": "140044231",
        "reported_date": "2014-06-25T00:00:00.000",
        "reported_time": "22:54",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "8200  TROOST AV",
        "age_1": "25",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-20T00:00:00.000",
        "from_time": "06:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576305,
                38.979654
            ]
        },
        "location_1_location": "8200 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6003",
        "report_no": "140091077",
        "reported_date": "2014-12-20T00:00:00.000",
        "reported_time": "14:10",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "2600  VAN BRUNT BL",
        "age_1": "39",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-01-05T00:00:00.000",
        "from_time": "01:27",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520813,
                39.077711
            ]
        },
        "location_1_location": "2600 VAN BRUNT BL",
        "offense": "302",
        "race_1": "A",
        "rep_dist_1": "PJ2226",
        "report_no": "140000935",
        "reported_date": "2014-01-05T00:00:00.000",
        "reported_time": "01:27",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "5500  PASEO",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-11T00:00:00.000",
        "from_time": "15:13",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "5500 PASEO",
        "offense": "302",
        "rep_dist_1": "PJ4422",
        "report_no": "140081722",
        "reported_date": "2014-11-11T00:00:00.000",
        "reported_time": "15:13",
        "zip_code_1": "64110"
    },
    {
        "address": "400  TOPPING AV",
        "age_1": "33",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "15:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514296,
                39.108553
            ]
        },
        "location_1_location": "400 TOPPING AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0528",
        "report_no": "140007264",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "16:03",
        "sex_1": "F",
        "zip_code_1": "64123"
    },
    {
        "address": "5600  CHARLOTTE ST",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-04T00:00:00.000",
        "from_time": "23:19",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577416,
                39.025352
            ]
        },
        "location_1_location": "5600 CHARLOTTE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4480",
        "report_no": "140038497",
        "reported_date": "2014-06-04T00:00:00.000",
        "reported_time": "23:19",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "3400  E 8 ST",
        "age_1": "33",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-01T00:00:00.000",
        "from_time": "22:32",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54184,
                39.103195
            ]
        },
        "location_1_location": "3400 E 8 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0819",
        "report_no": "140000214",
        "reported_date": "2014-01-01T00:00:00.000",
        "reported_time": "22:32",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "NE 32 ST/N CHERRY ST",
        "age_1": "18",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-13T00:00:00.000",
        "from_time": "15:04",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573369,
                39.214267
            ]
        },
        "location_1_location": "NE 32 ST/N CHERRY ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1436",
        "report_no": "140089345",
        "reported_date": "2014-12-13T00:00:00.000",
        "reported_time": "15:04",
        "sex_1": "M",
        "zip_code_1": "64118"
    },
    {
        "address": "6600  E 16 ST",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "21:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.505523,
                39.091956
            ]
        },
        "location_1_location": "6600 E 16 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1532",
        "report_no": "140077464",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "21:28",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 9 ST/INDIANA AV",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-20T00:00:00.000",
        "from_time": "19:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "E 9 ST/INDIANA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0884",
        "report_no": "140042792",
        "reported_date": "2014-06-20T00:00:00.000",
        "reported_time": "19:42",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "W 44 ST/PENNSYLVANIA AV",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-29T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 44 ST/PENNSYLVANIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3469",
        "report_no": "140085723",
        "reported_date": "2014-11-29T00:00:00.000",
        "reported_time": "01:51",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3200  PROSPECT AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-30T00:00:00.000",
        "from_time": "15:06",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.552965,
                39.067952
            ]
        },
        "location_1_location": "3200 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2651",
        "report_no": "140070510",
        "reported_date": "2014-09-30T00:00:00.000",
        "reported_time": "15:06",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "6100  E 87 ST",
        "age_1": "50",
        "area_1": "SPD",
        "beat": "541",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-25T00:00:00.000",
        "from_time": "23:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517654,
                38.967411
            ]
        },
        "location_1_location": "6100 E 87 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6336",
        "report_no": "140035899",
        "reported_date": "2014-05-25T00:00:00.000",
        "reported_time": "23:52",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "5200  INDEPENDENCE AV",
        "age_1": "38",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "00:32",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521249,
                39.105329
            ]
        },
        "location_1_location": "5200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0737",
        "report_no": "140035420",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "00:34",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "MAIN ST/E TRUMAN RD",
        "age_1": "33",
        "area_1": "CPD",
        "beat": "113",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "MAIN ST/E TRUMAN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1298",
        "report_no": "140036906",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "15:30",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "E 23 ST/OAKLEY AV",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-02T00:00:00.000",
        "from_time": "20:06",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 23 ST/OAKLEY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1900",
        "report_no": "140046072",
        "reported_date": "2014-07-02T00:00:00.000",
        "reported_time": "20:06",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 9 ST/PASEO",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-05T00:00:00.000",
        "from_time": "18:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 9 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0836",
        "report_no": "140022633",
        "reported_date": "2014-04-05T00:00:00.000",
        "reported_time": "18:27",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "4700  N WINN RD",
        "age_1": "48",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-22T00:00:00.000",
        "from_time": "12:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524941,
                39.181785
            ]
        },
        "location_1_location": "4700 N WINN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1006",
        "report_no": "140084376",
        "reported_date": "2014-11-22T00:00:00.000",
        "reported_time": "12:55",
        "sex_1": "F",
        "zip_code_1": "64119"
    },
    {
        "address": "8600  E 63 TF",
        "age_1": "47",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-22T00:00:00.000",
        "from_time": "12:04",
        "ibrs": "120",
        "invl_no_1": "6",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "8600 E 63 TF",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4889",
        "report_no": "140084362",
        "reported_date": "2014-11-22T00:00:00.000",
        "reported_time": "12:05",
        "sex_1": "F",
        "zip_code_1": "64129"
    },
    {
        "address": "11800  SMALLEY AV",
        "age_1": "40",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-04T00:00:00.000",
        "from_time": "02:55",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501952,
                38.909453
            ]
        },
        "location_1_location": "11800 SMALLEY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7294",
        "report_no": "140046439",
        "reported_date": "2014-07-04T00:00:00.000",
        "reported_time": "02:59",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "5900  BLUE HILLS RD",
        "age_1": "14",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568446,
                39.019602
            ]
        },
        "location_1_location": "5900 BLUE HILLS RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4734",
        "report_no": "140075839",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "06:04",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "10400  BLUE RIDGE BL",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-19T00:00:00.000",
        "from_time": "22:26",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.508395,
                38.935574
            ]
        },
        "location_1_location": "10400 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6837",
        "report_no": "140083674",
        "reported_date": "2014-11-19T00:00:00.000",
        "reported_time": "22:36",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "3500  E 51 ST",
        "age_1": "35",
        "area_1": "MPD",
        "beat": "211",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-05T00:00:00.000",
        "from_time": "22:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54441,
                39.033418
            ]
        },
        "location_1_location": "3500 E 51 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4207",
        "report_no": "140055341",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "13:57",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "E 11 ST/PASEO",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-24T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 11 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0985",
        "report_no": "140019606",
        "reported_date": "2014-03-24T00:00:00.000",
        "reported_time": "19:31",
        "sex_1": "F",
        "zip_code_1": "64109"
    },
    {
        "address": "6000  KENWOOD AV",
        "age_1": "55",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-16T00:00:00.000",
        "from_time": "20:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.580098,
                39.018402
            ]
        },
        "location_1_location": "6000 KENWOOD AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4743",
        "report_no": "140082893",
        "reported_date": "2014-11-16T00:00:00.000",
        "reported_time": "20:26",
        "sex_1": "F",
        "zip_code_1": "64113"
    },
    {
        "address": "4600  J C NICHOLS PK",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-02T00:00:00.000",
        "from_time": "00:38",
        "ibrs": "120",
        "invl_no_1": "7",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588857,
                39.046481
            ]
        },
        "location_1_location": "4600 J C NICHOLS PK",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3630",
        "report_no": "140054119",
        "reported_date": "2014-08-02T00:00:00.000",
        "reported_time": "00:38",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 29 ST/OAKLEY AV",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-28T00:00:00.000",
        "from_time": "23:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 29 ST/OAKLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2400",
        "report_no": "140092894",
        "reported_date": "2014-12-28T00:00:00.000",
        "reported_time": "23:07",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "5500  E TRUMAN RD",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "20:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.518081,
                39.094107
            ]
        },
        "location_1_location": "5500 E TRUMAN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1428",
        "report_no": "140074688",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "20:39",
        "sex_1": "M",
        "to_date": "2014-10-15T00:00:00.000",
        "to_time": "20:40",
        "zip_code_1": "64127"
    },
    {
        "address": "4100  PENNSYLVANIA AV",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-09T00:00:00.000",
        "from_time": "21:53",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.591404,
                39.052761
            ]
        },
        "location_1_location": "4100 PENNSYLVANIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3303",
        "report_no": "140081261",
        "reported_date": "2014-11-09T00:00:00.000",
        "reported_time": "21:53",
        "sex_1": "M"
    },
    {
        "address": "8300  HICKMAN MILLS DR",
        "age_1": "33",
        "area_1": "MPD",
        "beat": "245",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-17T00:00:00.000",
        "from_time": "19:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.555065,
                38.976124
            ]
        },
        "location_1_location": "8300 HICKMAN MILLS DR",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6004",
        "report_no": "140025752",
        "reported_date": "2014-04-17T00:00:00.000",
        "reported_time": "20:08",
        "sex_1": "F",
        "zip_code_1": "64132"
    },
    {
        "address": "2000  E 72 ST",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-05T00:00:00.000",
        "from_time": "20:43",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.563944,
                38.996525
            ]
        },
        "location_1_location": "2000 E 72 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ5488",
        "report_no": "140014776",
        "reported_date": "2014-03-05T00:00:00.000",
        "reported_time": "20:43",
        "sex_1": "U",
        "zip_code_1": "64132"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "age_1": "24",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "19:45",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.499763,
                38.96619
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6284",
        "report_no": "140035619",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "19:45",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "11600  WINCHESTER AV",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-07T00:00:00.000",
        "from_time": "21:32",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.51059,
                38.913145
            ]
        },
        "location_1_location": "11600 WINCHESTER AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7267",
        "report_no": "140039277",
        "reported_date": "2014-06-07T00:00:00.000",
        "reported_time": "21:32",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "4000  MILL ST",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-27T00:00:00.000",
        "from_time": "14:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.595958,
                39.053583
            ]
        },
        "location_1_location": "4000 MILL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3255",
        "report_no": "140092630",
        "reported_date": "2014-12-27T00:00:00.000",
        "reported_time": "14:59",
        "sex_1": "M"
    },
    {
        "address": "7000  E 111 ST",
        "age_1": "15",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-09T00:00:00.000",
        "from_time": "07:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.508019,
                38.922543
            ]
        },
        "location_1_location": "7000 E 111 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7014",
        "report_no": "140073020",
        "reported_date": "2014-10-09T00:00:00.000",
        "reported_time": "11:21",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "7000  E 111 ST",
        "age_1": "15",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-09T00:00:00.000",
        "from_time": "07:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.508019,
                38.922543
            ]
        },
        "location_1_location": "7000 E 111 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7014",
        "report_no": "140073020",
        "reported_date": "2014-10-09T00:00:00.000",
        "reported_time": "11:21",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "4000  HARDESTY AV",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-28T00:00:00.000",
        "from_time": "18:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522077,
                39.052785
            ]
        },
        "location_1_location": "4000 HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3286",
        "report_no": "140092852",
        "reported_date": "2014-12-28T00:00:00.000",
        "reported_time": "18:14",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "OAKLEY AV/E TRUMAN RD",
        "area_1": "EPD",
        "beat": "341",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-29T00:00:00.000",
        "from_time": "00:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "OAKLEY AV/E TRUMAN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1307",
        "report_no": "140066591",
        "reported_date": "2014-09-16T00:00:00.000",
        "reported_time": "11:10",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "GARFIELD AV/E LINWOOD BL",
        "area_1": "CPD",
        "beat": "125",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-06T00:00:00.000",
        "from_time": "10:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "GARFIELD AV/E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2557",
        "report_no": "140087762",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "09:43",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "2300  HOLMES ST",
        "area_1": "CPD",
        "beat": "115",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-27T00:00:00.000",
        "from_time": "06:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575816,
                39.085055
            ]
        },
        "location_1_location": "2300 HOLMES ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1938",
        "report_no": "140052567",
        "reported_date": "2014-07-27T00:00:00.000",
        "reported_time": "06:20",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "300  FOREST AV",
        "age_1": "15",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-11T00:00:00.000",
        "from_time": "19:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568191,
                39.112676
            ]
        },
        "location_1_location": "300 FOREST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0328",
        "report_no": "140032892",
        "reported_date": "2014-05-14T00:00:00.000",
        "reported_time": "15:07",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "INDEPENDENCE AV/INDIANA AV",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-26T00:00:00.000",
        "from_time": "23:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/INDIANA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0613",
        "report_no": "140085367",
        "reported_date": "2014-11-27T00:00:00.000",
        "reported_time": "00:01",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "8000  STATE LINE RD",
        "age_1": "20",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-18T00:00:00.000",
        "from_time": "07:26",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.608228,
                38.984233
            ]
        },
        "location_1_location": "8000 STATE LINE RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5841",
        "report_no": "140011086",
        "reported_date": "2014-02-18T00:00:00.000",
        "reported_time": "07:26",
        "sex_1": "M",
        "zip_code_1": "64114"
    },
    {
        "address": "4100  CLARK AV",
        "age_1": "59",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "03:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.596861,
                39.054007
            ]
        },
        "location_1_location": "4100 CLARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3225",
        "report_no": "140007602",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "03:38",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "INDEPENDENCE AV/MAPLE BL",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-26T00:00:00.000",
        "from_time": "01:54",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "INDEPENDENCE AV/MAPLE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0571",
        "report_no": "140044254",
        "reported_date": "2014-06-26T00:00:00.000",
        "reported_time": "01:54",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "4200  N OAK TF",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "21:47",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.527169,
                39.169549
            ]
        },
        "location_1_location": "4200 N OAK TF",
        "offense": "302",
        "rep_dist_1": "PC1180",
        "report_no": "140074703",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "21:47",
        "zip_code_1": "64117"
    },
    {
        "address": "8600  E 114 TE",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-27T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.492642,
                38.915417
            ]
        },
        "location_1_location": "8600 E 114 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7207",
        "report_no": "140020268",
        "reported_date": "2014-03-27T00:00:00.000",
        "reported_time": "15:31",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "W 16 ST/JEFFERSON ST",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-06T00:00:00.000",
        "from_time": "03:51",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586339,
                39.103618
            ]
        },
        "location_1_location": "W 16 ST/JEFFERSON ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1384",
        "report_no": "140055207",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "03:54",
        "sex_1": "U",
        "zip_code_1": "64105"
    },
    {
        "address": "11500  HOLIDAY DR",
        "age_1": "31",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-10T00:00:00.000",
        "from_time": "02:56",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514578,
                38.914458
            ]
        },
        "location_1_location": "11500 HOLIDAY DR",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7255",
        "report_no": "140056359",
        "reported_date": "2014-08-10T00:00:00.000",
        "reported_time": "02:56",
        "sex_1": "M"
    },
    {
        "address": "200  GARFIELD AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-26T00:00:00.000",
        "from_time": "23:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556816,
                39.112223
            ]
        },
        "location_1_location": "200 GARFIELD AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0349",
        "report_no": "140044505",
        "reported_date": "2014-06-26T00:00:00.000",
        "reported_time": "23:25",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "2900  PASEO",
        "age_1": "23",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-21T00:00:00.000",
        "from_time": "04:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "2900 PASEO",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2389",
        "report_no": "140050836",
        "reported_date": "2014-07-21T00:00:00.000",
        "reported_time": "04:33",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "1100  TROOST AV",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-26T00:00:00.000",
        "from_time": "18:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569869,
                39.100585
            ]
        },
        "location_1_location": "1100 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1046",
        "report_no": "140069471",
        "reported_date": "2014-09-26T00:00:00.000",
        "reported_time": "18:44",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "1100  E 10 ST",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-01-07T00:00:00.000",
        "from_time": "16:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569651,
                39.101925
            ]
        },
        "location_1_location": "1100 E 10 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0894",
        "report_no": "140001456",
        "reported_date": "2014-01-07T00:00:00.000",
        "reported_time": "16:05",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "5300  WILLIAMSBURG CT",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-30T00:00:00.000",
        "from_time": "17:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500738,
                39.093537
            ]
        },
        "location_1_location": "5300 WILLIAMSBURG CT",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1143",
        "report_no": "140062228",
        "reported_date": "2014-08-30T00:00:00.000",
        "reported_time": "17:50",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "E 41 ST/GILLHAM RD",
        "age_1": "17",
        "area_1": "CPD",
        "beat": "133",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-24T00:00:00.000",
        "from_time": "09:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 41 ST/GILLHAM RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3304",
        "report_no": "140043727",
        "reported_date": "2014-06-24T00:00:00.000",
        "reported_time": "09:17",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "age_1": "40",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-20T00:00:00.000",
        "from_time": "20:01",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49969,
                38.966338
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6327",
        "report_no": "140091144",
        "reported_date": "2014-12-20T00:00:00.000",
        "reported_time": "20:01",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "6000  PARK AV",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-25T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559256,
                39.017612
            ]
        },
        "location_1_location": "6000 PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4870",
        "report_no": "140085128",
        "reported_date": "2014-11-25T00:00:00.000",
        "reported_time": "20:57",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "400  E 18 ST",
        "age_1": "23",
        "area_1": "CPD",
        "beat": "113",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-05T00:00:00.000",
        "from_time": "23:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.5786,
                39.091658
            ]
        },
        "location_1_location": "400 E 18 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1550",
        "report_no": "140063930",
        "reported_date": "2014-09-05T00:00:00.000",
        "reported_time": "23:45",
        "sex_1": "F",
        "zip_code_1": "64108"
    },
    {
        "address": "INDEPENDENCE AV/VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-08T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "INDEPENDENCE AV/VAN BRUNT BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0622",
        "report_no": "140015545",
        "reported_date": "2014-03-08T00:00:00.000",
        "reported_time": "17:48",
        "sex_1": "F",
        "zip_code_1": "64127"
    },
    {
        "address": "7500  E 52 TE",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "armed robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "22:19",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.497713,
                39.028463
            ]
        },
        "location_1_location": "7500 E 52 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4392",
        "report_no": "140081075",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "22:19",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "E 85 ST/BRUCE R WATKINS DR",
        "age_1": "37",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-10-19T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 85 ST/BRUCE R WATKINS DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6036",
        "report_no": "140075626",
        "reported_date": "2014-10-19T00:00:00.000",
        "reported_time": "05:19",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "6900  MONROE AV",
        "age_1": "19",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "12:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543949,
                39.000985
            ]
        },
        "location_1_location": "6900 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5325",
        "report_no": "140077354",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "12:53",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "W 32 ST/BROADWAY",
        "age_1": "22",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-21T00:00:00.000",
        "from_time": "00:01",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 32 ST/BROADWAY",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2506",
        "report_no": "140051010",
        "reported_date": "2014-07-21T00:00:00.000",
        "reported_time": "17:04",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "400  N LAWNDALE AV",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-26T00:00:00.000",
        "from_time": "02:08",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.515456,
                39.108613
            ]
        },
        "location_1_location": "400 N LAWNDALE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0199",
        "report_no": "140035922",
        "reported_date": "2014-05-26T00:00:00.000",
        "reported_time": "02:08",
        "sex_1": "M"
    },
    {
        "address": "CLEVELAND AV/INDEPENDENCE AV",
        "age_1": "29",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-05-05T00:00:00.000",
        "from_time": "23:52",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "CLEVELAND AV/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0630",
        "report_no": "140030443",
        "reported_date": "2014-05-05T00:00:00.000",
        "reported_time": "23:52",
        "sex_1": "F",
        "zip_code_1": "64124"
    },
    {
        "address": "700  TRACY AV",
        "age_1": "48",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-08T00:00:00.000",
        "from_time": "10:02",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.567017,
                39.105284
            ]
        },
        "location_1_location": "700 TRACY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0749",
        "report_no": "140072717",
        "reported_date": "2014-10-08T00:00:00.000",
        "reported_time": "10:02",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "14500  S US 71 HWY WEST FRONT RD",
        "age_1": "62",
        "area_1": "SPD",
        "beat": "535",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-19T00:00:00.000",
        "from_time": "15:06",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.528928,
                38.857147
            ]
        },
        "location_1_location": "14500 S US 71 HWY WEST FRONT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ7443",
        "report_no": "140050471",
        "reported_date": "2014-07-19T00:00:00.000",
        "reported_time": "15:06",
        "sex_1": "M",
        "zip_code_1": "64147"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "age_1": "34",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "00:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544223,
                39.106114
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0684",
        "report_no": "140070295",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "17:26",
        "sex_1": "M",
        "to_date": "2014-09-29T00:00:00.000",
        "to_time": "17:25",
        "zip_code_1": "64123"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-13T00:00:00.000",
        "from_time": "01:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54414,
                39.106107
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "rep_dist_1": "PJ0684",
        "report_no": "140057196",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "01:24",
        "zip_code_1": "64124"
    },
    {
        "address": "300  GARFIELD AV",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "124",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-13T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.556887,
                39.111005
            ]
        },
        "location_1_location": "300 GARFIELD AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0389",
        "report_no": "140057485",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "21:48",
        "sex_1": "M",
        "to_date": "2014-08-13T00:00:00.000",
        "to_time": "21:00",
        "zip_code_1": "64124"
    },
    {
        "address": "E 39 ST/GILLHAM RD",
        "age_1": "19",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-27T00:00:00.000",
        "from_time": "02:03",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 39 ST/GILLHAM RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3085",
        "report_no": "140052531",
        "reported_date": "2014-07-27T00:00:00.000",
        "reported_time": "02:03",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "E 31 ST/PROSPECT AV",
        "age_1": "16",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "18:56",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 31 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2482",
        "report_no": "140079016",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "18:56",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "7300  PROSPECT AV",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-17T00:00:00.000",
        "from_time": "21:03",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557146,
                38.994273
            ]
        },
        "location_1_location": "7300 PROSPECT AV",
        "offense": "302",
        "rep_dist_1": "PJ5571",
        "report_no": "140067049",
        "reported_date": "2014-09-17T00:00:00.000",
        "reported_time": "21:04",
        "zip_code_1": "64132"
    },
    {
        "address": "W 10 ST/WYANDOTTE ST",
        "age_1": "14",
        "area_1": "CPD",
        "beat": "112",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-04-05T00:00:00.000",
        "from_time": "12:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "W 10 ST/WYANDOTTE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0856",
        "report_no": "140022555",
        "reported_date": "2014-04-05T00:00:00.000",
        "reported_time": "12:28",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "5300  HARRISON ST",
        "age_1": "23",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-09T00:00:00.000",
        "from_time": "02:06",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574806,
                39.030762
            ]
        },
        "location_1_location": "5300 HARRISON ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4255",
        "report_no": "140047638",
        "reported_date": "2014-07-09T00:00:00.000",
        "reported_time": "02:06",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "1900  E 59 ST",
        "age_1": "5",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-25T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.56372,
                39.018738
            ]
        },
        "location_1_location": "1900 E 59 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4640",
        "report_no": "140060852",
        "reported_date": "2014-08-25T00:00:00.000",
        "reported_time": "21:30",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "E 38 ST/SOUTH BENTON AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-18T00:00:00.000",
        "from_time": "14:12",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 38 ST/SOUTH BENTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3026",
        "report_no": "140090549",
        "reported_date": "2014-12-18T00:00:00.000",
        "reported_time": "14:20",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "1600  NE PARVIN RD",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-02T00:00:00.000",
        "from_time": "03:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.560544,
                39.166767
            ]
        },
        "location_1_location": "1600 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1199",
        "report_no": "140079341",
        "reported_date": "2014-11-02T00:00:00.000",
        "reported_time": "03:13",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "7600  LOMA VISTA DR",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-19T00:00:00.000",
        "from_time": "00:56",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.499882,
                38.961489
            ]
        },
        "location_1_location": "7600 LOMA VISTA DR",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6327",
        "report_no": "140026081",
        "reported_date": "2014-04-19T00:00:00.000",
        "reported_time": "00:56",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "4200  N ANTIOCH RD",
        "age_1": "25",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-20T00:00:00.000",
        "from_time": "03:35",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.549328,
                39.169997
            ]
        },
        "location_1_location": "4200 N ANTIOCH RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1221",
        "report_no": "140034298",
        "reported_date": "2014-05-20T00:00:00.000",
        "reported_time": "03:50",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "W 18 ST/W 19 ST",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-06T00:00:00.000",
        "from_time": "11:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "W 18 ST/W 19 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1503",
        "report_no": "140030564",
        "reported_date": "2014-05-06T00:00:00.000",
        "reported_time": "11:51",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "E 38 ST/CHESTNUT AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "02:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 38 ST/CHESTNUT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3024",
        "report_no": "140077743",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "03:00",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 55 ST/JACKSON AV",
        "area_1": "MPD",
        "beat": "211",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-25T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 55 ST/JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4357",
        "report_no": "140044111",
        "reported_date": "2014-06-25T00:00:00.000",
        "reported_time": "15:00",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "2400  BRIGHTON AV",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "18:23",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524619,
                39.081941
            ]
        },
        "location_1_location": "2400 BRIGHTON AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2092",
        "report_no": "140082459",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "18:23",
        "sex_1": "U",
        "to_date": "2014-11-14T00:00:00.000",
        "to_time": "18:23",
        "zip_code_1": "64127"
    },
    {
        "address": "E 31 ST/INDIANA AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-26T00:00:00.000",
        "from_time": "11:22",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 31 ST/INDIANA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2499",
        "report_no": "140077580",
        "reported_date": "2014-10-26T00:00:00.000",
        "reported_time": "11:22",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 34 ST/AGNES AV",
        "age_1": "20",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-02T00:00:00.000",
        "from_time": "02:21",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 34 ST/AGNES AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2735",
        "report_no": "140013927",
        "reported_date": "2014-03-02T00:00:00.000",
        "reported_time": "02:21",
        "sex_1": "F",
        "zip_code_1": "64128"
    },
    {
        "address": "E 40 ST/MERSINGTON AV",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-17T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 40 ST/MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3208",
        "report_no": "140011046",
        "reported_date": "2014-02-17T00:00:00.000",
        "reported_time": "23:08",
        "sex_1": "M",
        "to_date": "2014-02-17T00:00:00.000",
        "to_time": "23:08",
        "zip_code_1": "64128"
    },
    {
        "address": "E 10 ST/WHITE AV",
        "age_1": "26",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-09T00:00:00.000",
        "from_time": "23:53",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525539,
                39.113437
            ]
        },
        "location_1_location": "E 10 ST/WHITE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1003",
        "report_no": "140056329",
        "reported_date": "2014-08-09T00:00:00.000",
        "reported_time": "23:53",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "4400  JEFFERSON ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-10T00:00:00.000",
        "from_time": "20:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594436,
                39.047683
            ]
        },
        "location_1_location": "4400 JEFFERSON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3559",
        "report_no": "140081571",
        "reported_date": "2014-11-10T00:00:00.000",
        "reported_time": "20:44",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "300  E 63 ST",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-11T00:00:00.000",
        "from_time": "03:25",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.58483,
                39.013734
            ]
        },
        "location_1_location": "300 E 63 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4924",
        "report_no": "140065215",
        "reported_date": "2014-09-11T00:00:00.000",
        "reported_time": "03:30",
        "sex_1": "M",
        "zip_code_1": "64113"
    },
    {
        "address": "INDEPENDENCE AV/PARK AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-03T00:00:00.000",
        "from_time": "00:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "INDEPENDENCE AV/PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0554",
        "report_no": "140063103",
        "reported_date": "2014-09-03T00:00:00.000",
        "reported_time": "02:00",
        "sex_1": "M"
    },
    {
        "address": "E 24 ST/BRIGHTON AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-25T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 24 ST/BRIGHTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1968",
        "report_no": "140044190",
        "reported_date": "2014-06-25T00:00:00.000",
        "reported_time": "19:43",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "3200  MYRTLE AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-19T00:00:00.000",
        "from_time": "19:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.536979,
                39.067434
            ]
        },
        "location_1_location": "3200 MYRTLE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2674",
        "report_no": "140090897",
        "reported_date": "2014-12-19T00:00:00.000",
        "reported_time": "19:44",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "1600  E 63 ST",
        "age_1": "40",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-03T00:00:00.000",
        "from_time": "15:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568038,
                39.013023
            ]
        },
        "location_1_location": "1600 E 63 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4883",
        "report_no": "140014213",
        "reported_date": "2014-03-03T00:00:00.000",
        "reported_time": "15:50",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "6800  LONGVIEW RD",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-06T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.512549,
                38.915438
            ]
        },
        "location_1_location": "6800 LONGVIEW RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7220",
        "report_no": "140022853",
        "reported_date": "2014-04-06T00:00:00.000",
        "reported_time": "15:44",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "5500  ST JOHN AV",
        "age_1": "21",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-11T00:00:00.000",
        "from_time": "00:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517399,
                39.112454
            ]
        },
        "location_1_location": "5500 ST JOHN AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0361",
        "report_no": "140048475",
        "reported_date": "2014-07-12T00:00:00.000",
        "reported_time": "00:27",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "E 30 ST/INDIANA AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-24T00:00:00.000",
        "from_time": "20:03",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 30 ST/INDIANA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2441",
        "report_no": "140005605",
        "reported_date": "2014-01-24T00:00:00.000",
        "reported_time": "20:03",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "8600  E 63 TF",
        "age_1": "19",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-22T00:00:00.000",
        "from_time": "12:04",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "8600 E 63 TF",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ4889",
        "report_no": "140084362",
        "reported_date": "2014-11-22T00:00:00.000",
        "reported_time": "12:05",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "300  ASKEW AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-28T00:00:00.000",
        "from_time": "00:58",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538626,
                39.115255
            ]
        },
        "location_1_location": "300 ASKEW AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0434",
        "report_no": "140052752",
        "reported_date": "2014-07-28T00:00:00.000",
        "reported_time": "00:58",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "400  DENVER AV",
        "age_1": "37",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-14T00:00:00.000",
        "from_time": "08:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520836,
                39.116282
            ]
        },
        "location_1_location": "400 DENVER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0530",
        "report_no": "140024800",
        "reported_date": "2014-04-14T00:00:00.000",
        "reported_time": "08:41",
        "sex_1": "F",
        "zip_code_1": "64123"
    },
    {
        "address": "3000  E TRUMAN RD",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-26T00:00:00.000",
        "from_time": "19:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547158,
                39.094593
            ]
        },
        "location_1_location": "3000 E TRUMAN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1344",
        "report_no": "140013358",
        "reported_date": "2014-02-27T00:00:00.000",
        "reported_time": "17:56",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "1200  PASEO",
        "area_1": "CPD",
        "beat": "123",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-22T00:00:00.000",
        "from_time": "22:55",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "1200 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1129",
        "report_no": "140027067",
        "reported_date": "2014-04-22T00:00:00.000",
        "reported_time": "22:55",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "E 38 ST/OLIVE ST",
        "age_1": "53",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-14T00:00:00.000",
        "from_time": "10:33",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 38 ST/OLIVE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3009",
        "report_no": "140032784",
        "reported_date": "2014-05-14T00:00:00.000",
        "reported_time": "10:33",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "E 46 ST/PROSPECT AV",
        "age_1": "23",
        "area_1": "EPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-04T00:00:00.000",
        "from_time": "17:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 46 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3659",
        "report_no": "140087097",
        "reported_date": "2014-12-04T00:00:00.000",
        "reported_time": "18:18",
        "sex_1": "M",
        "to_date": "2014-12-04T00:00:00.000",
        "to_time": "17:45",
        "zip_code_1": "64130"
    },
    {
        "address": "E 61 ST/GEORGE AV",
        "age_1": "24",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-19T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.459478,
                39.015518
            ]
        },
        "location_1_location": "E 61 ST/GEORGE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4748",
        "report_no": "140042477",
        "reported_date": "2014-06-19T00:00:00.000",
        "reported_time": "17:40",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "1400  COLLINS AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-30T00:00:00.000",
        "from_time": "13:22",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.500738,
                39.093537
            ]
        },
        "location_1_location": "1400 COLLINS AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1300",
        "report_no": "140078693",
        "reported_date": "2014-10-30T00:00:00.000",
        "reported_time": "13:22",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "8700  BLUE RIDGE BL",
        "age_1": "32",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "19:45",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.499763,
                38.96619
            ]
        },
        "location_1_location": "8700 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ6284",
        "report_no": "140035619",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "19:45",
        "sex_1": "F",
        "zip_code_1": "64138"
    },
    {
        "address": "N BENNINGTON AV/NE PARVIN RD",
        "age_1": "30",
        "area_1": "SCP",
        "beat": "635",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-09T00:00:00.000",
        "from_time": "23:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.572809,
                39.157748
            ]
        },
        "location_1_location": "N BENNINGTON AV/NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1128",
        "report_no": "140064940",
        "reported_date": "2014-09-09T00:00:00.000",
        "reported_time": "23:13",
        "sex_1": "M",
        "zip_code_1": "64116"
    },
    {
        "address": "BROADWAY/NICHOLS RD",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-12-07T00:00:00.000",
        "from_time": "14:27",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.591749,
                39.039759
            ]
        },
        "location_1_location": "BROADWAY/NICHOLS RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3741",
        "report_no": "140087818",
        "reported_date": "2014-12-07T00:00:00.000",
        "reported_time": "14:30",
        "sex_1": "M",
        "zip_code_1": "64112"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "age_1": "31",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-18T00:00:00.000",
        "from_time": "00:14",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.54414,
                39.106107
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0684",
        "report_no": "140050074",
        "reported_date": "2014-07-18T00:00:00.000",
        "reported_time": "00:14",
        "sex_1": "F"
    },
    {
        "address": "E 74 ST/TRACY AV",
        "age_1": "26",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "04:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576906,
                38.965377
            ]
        },
        "location_1_location": "E 74 ST/TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5535",
        "report_no": "140077746",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "04:23",
        "sex_1": "M",
        "zip_code_1": "64131"
    },
    {
        "address": "E 33 ST/FOREST AV",
        "area_1": "CPD",
        "beat": "125",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-21T00:00:00.000",
        "from_time": "00:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E 33 ST/FOREST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2624",
        "report_no": "140042856",
        "reported_date": "2014-06-21T00:00:00.000",
        "reported_time": "00:56",
        "sex_1": "M",
        "to_date": "2014-06-21T00:00:00.000",
        "to_time": "00:57",
        "zip_code_1": "64109"
    },
    {
        "address": "3200  HOLMES ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-25T00:00:00.000",
        "from_time": "00:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576659,
                39.068763
            ]
        },
        "location_1_location": "3200 HOLMES ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2629",
        "report_no": "140005648",
        "reported_date": "2014-01-25T00:00:00.000",
        "reported_time": "00:36",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3700  WALNUT ST",
        "age_1": "58",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-05-14T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.584745,
                39.060013
            ]
        },
        "location_1_location": "3700 WALNUT ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2976",
        "report_no": "140032979",
        "reported_date": "2014-05-14T00:00:00.000",
        "reported_time": "22:32",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 51 ST/PROSPECT AV",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-16T00:00:00.000",
        "from_time": "22:31",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 51 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4054",
        "report_no": "140033502",
        "reported_date": "2014-05-16T00:00:00.000",
        "reported_time": "22:31",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "4300  DITZLER AV",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-18T00:00:00.000",
        "from_time": "18:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.471566,
                39.044993
            ]
        },
        "location_1_location": "4300 DITZLER AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ3760",
        "report_no": "140004161",
        "reported_date": "2014-01-18T00:00:00.000",
        "reported_time": "18:46",
        "sex_1": "M",
        "to_date": "2014-01-18T00:00:00.000",
        "to_time": "18:50",
        "zip_code_1": "64133"
    },
    {
        "address": "E 24 ST/BRIGHTON AV",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-26T00:00:00.000",
        "from_time": "21:37",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 24 ST/BRIGHTON AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1968",
        "report_no": "140052490",
        "reported_date": "2014-07-26T00:00:00.000",
        "reported_time": "21:55",
        "sex_1": "U",
        "zip_code_1": "64127"
    },
    {
        "address": "5300  E 27 ST",
        "age_1": "56",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521309,
                39.076136
            ]
        },
        "location_1_location": "5300 E 27 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2294",
        "report_no": "140060075",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "21:41",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 12 ST/COLLEGE AV",
        "age_1": "13",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-14T00:00:00.000",
        "from_time": "23:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 12 ST/COLLEGE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1109",
        "report_no": "140049236",
        "reported_date": "2014-07-14T00:00:00.000",
        "reported_time": "23:39",
        "sex_1": "M",
        "to_date": "2014-07-14T00:00:00.000",
        "to_time": "23:38",
        "zip_code_1": "64127"
    },
    {
        "address": "GREENWOOD RD/RUSKIN WA",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-05T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "GREENWOOD RD/RUSKIN WA",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7088",
        "report_no": "140063843",
        "reported_date": "2014-09-05T00:00:00.000",
        "reported_time": "17:29",
        "sex_1": "M",
        "to_date": "2014-09-05T00:00:00.000",
        "to_time": "17:29",
        "zip_code_1": "64134"
    },
    {
        "address": "NORTON AV/SMART AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-21T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "NORTON AV/SMART AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0412",
        "report_no": "140067956",
        "reported_date": "2014-09-21T00:00:00.000",
        "reported_time": "03:54",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "5700  CHARLOTTE ST",
        "age_1": "44",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-15T00:00:00.000",
        "from_time": "01:25",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577506,
                39.023533
            ]
        },
        "location_1_location": "5700 CHARLOTTE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4550",
        "report_no": "140082523",
        "reported_date": "2014-11-15T00:00:00.000",
        "reported_time": "01:29",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "4300  ROANOKE PK",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-05-18T00:00:00.000",
        "from_time": "01:11",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60267,
                39.049951
            ]
        },
        "location_1_location": "4300 ROANOKE PK",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3436",
        "report_no": "140033801",
        "reported_date": "2014-05-18T00:00:00.000",
        "reported_time": "01:11",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "E 53 ST/HIGHLAND AV",
        "age_1": "19",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-06T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 53 ST/HIGHLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4158",
        "report_no": "140087597",
        "reported_date": "2014-12-06T00:00:00.000",
        "reported_time": "15:28",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "1100  W 41 TE",
        "age_1": "41",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-17T00:00:00.000",
        "from_time": "07:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.598478,
                39.054184
            ]
        },
        "location_1_location": "1100 W 41 TE",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3263",
        "report_no": "140025683",
        "reported_date": "2014-04-17T00:00:00.000",
        "reported_time": "13:25",
        "sex_1": "F",
        "to_date": "2014-04-17T00:00:00.000",
        "to_time": "13:20",
        "zip_code_1": "64111"
    },
    {
        "address": "4200  TRACY AV",
        "age_1": "18",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-21T00:00:00.000",
        "from_time": "10:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569975,
                39.049913
            ]
        },
        "location_1_location": "4200 TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3400",
        "report_no": "140042946",
        "reported_date": "2014-06-21T00:00:00.000",
        "reported_time": "10:46",
        "sex_1": "M"
    },
    {
        "address": "5700  TROOST AV",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-20T00:00:00.000",
        "from_time": "10:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574058,
                39.023464
            ]
        },
        "location_1_location": "5700 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4554",
        "report_no": "140026402",
        "reported_date": "2014-04-20T00:00:00.000",
        "reported_time": "10:15",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "5300  HARRISON ST",
        "age_1": "16",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-07-09T00:00:00.000",
        "from_time": "02:06",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574806,
                39.030762
            ]
        },
        "location_1_location": "5300 HARRISON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4255",
        "report_no": "140047638",
        "reported_date": "2014-07-09T00:00:00.000",
        "reported_time": "02:06",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "E 27 ST/GARFIELD AV",
        "age_1": "47",
        "area_1": "CPD",
        "beat": "124",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-07T00:00:00.000",
        "from_time": "03:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.525539,
                39.113437
            ]
        },
        "location_1_location": "E 27 ST/GARFIELD AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2163",
        "report_no": "140064193",
        "reported_date": "2014-09-07T00:00:00.000",
        "reported_time": "03:21",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "1000  E 9 ST",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-24T00:00:00.000",
        "from_time": "14:13",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.570851,
                39.103196
            ]
        },
        "location_1_location": "1000 E 9 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0891",
        "report_no": "140019539",
        "reported_date": "2014-03-24T00:00:00.000",
        "reported_time": "14:13",
        "sex_1": "F",
        "zip_code_1": "64106"
    },
    {
        "address": "E 114 ST/OAKLAND AV",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-31T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.501777,
                38.931208
            ]
        },
        "location_1_location": "E 114 ST/OAKLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7162",
        "report_no": "140021266",
        "reported_date": "2014-03-31T00:00:00.000",
        "reported_time": "15:21",
        "sex_1": "M",
        "to_date": "2014-03-31T00:00:00.000",
        "to_time": "16:00",
        "zip_code_1": "64134"
    },
    {
        "address": "E 57 ST/MCGEE ST",
        "age_1": "17",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-03T00:00:00.000",
        "from_time": "23:38",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 57 ST/MCGEE ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4471",
        "report_no": "140054563",
        "reported_date": "2014-08-03T00:00:00.000",
        "reported_time": "23:38",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "7600  PROSPECT AV",
        "age_1": "15",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "18:48",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55751,
                38.987094
            ]
        },
        "location_1_location": "7600 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5702",
        "report_no": "140074661",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "18:48",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "4000  FLORA AVE",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-09T00:00:00.000",
        "from_time": "20:57",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.566469,
                39.053985
            ]
        },
        "location_1_location": "4000 FLORA AVE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3244",
        "report_no": "140081252",
        "reported_date": "2014-11-09T00:00:00.000",
        "reported_time": "20:59",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "400  TOPPING AV",
        "area_1": "EPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "15:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514296,
                39.108553
            ]
        },
        "location_1_location": "400 TOPPING AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0528",
        "report_no": "140007264",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "16:03",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "400  DENVER AV",
        "age_1": "4",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-14T00:00:00.000",
        "from_time": "08:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520836,
                39.116282
            ]
        },
        "location_1_location": "400 DENVER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0530",
        "report_no": "140024800",
        "reported_date": "2014-04-14T00:00:00.000",
        "reported_time": "08:41",
        "sex_1": "F",
        "zip_code_1": "64123"
    },
    {
        "address": "E 31 ST/VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-29T00:00:00.000",
        "from_time": "23:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "E 31 ST/VAN BRUNT BL",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2558",
        "report_no": "140053334",
        "reported_date": "2014-07-30T00:00:00.000",
        "reported_time": "02:03",
        "sex_1": "U",
        "to_date": "2014-07-30T00:00:00.000",
        "to_time": "01:00"
    },
    {
        "address": "4700  VIRGINIA AV",
        "age_1": "27",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-30T00:00:00.000",
        "from_time": "12:41",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569569,
                39.041558
            ]
        },
        "location_1_location": "4700 VIRGINIA AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3714",
        "report_no": "140020990",
        "reported_date": "2014-03-30T00:00:00.000",
        "reported_time": "12:42",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "2400  BRIGHTON AV",
        "age_1": "35",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "18:23",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524619,
                39.081941
            ]
        },
        "location_1_location": "2400 BRIGHTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2092",
        "report_no": "140082459",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "18:23",
        "sex_1": "F",
        "to_date": "2014-11-14T00:00:00.000",
        "to_time": "18:23",
        "zip_code_1": "64127"
    },
    {
        "address": "1100  OAKLEY AV",
        "age_1": "28",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "13:59",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.516838,
                39.098814
            ]
        },
        "location_1_location": "1100 OAKLEY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1140",
        "report_no": "140078951",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "13:59",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "1100  OAKLEY AV",
        "age_1": "30",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-31T00:00:00.000",
        "from_time": "13:59",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.516838,
                39.098814
            ]
        },
        "location_1_location": "1100 OAKLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1140",
        "report_no": "140078951",
        "reported_date": "2014-10-31T00:00:00.000",
        "reported_time": "13:59",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "300  N CHELSEA AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "311",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-29T00:00:00.000",
        "from_time": "14:07",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524436,
                39.114582
            ]
        },
        "location_1_location": "300 N CHELSEA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0229",
        "report_no": "140093061",
        "reported_date": "2014-12-29T00:00:00.000",
        "reported_time": "14:07",
        "sex_1": "M"
    },
    {
        "address": "7600  WORNALL RD",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-18T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.594388,
                38.990552
            ]
        },
        "location_1_location": "7600 WORNALL RD",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ5683",
        "report_no": "140025809",
        "reported_date": "2014-04-18T00:00:00.000",
        "reported_time": "01:35",
        "sex_1": "U",
        "zip_code_1": "64104"
    },
    {
        "address": "E 24 ST/POPLAR AV",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-09T00:00:00.000",
        "from_time": "13:15",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 24 ST/POPLAR AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ1965",
        "report_no": "140023637",
        "reported_date": "2014-04-09T00:00:00.000",
        "reported_time": "13:23",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "4300  N ANTIOCH RD",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-16T00:00:00.000",
        "from_time": "18:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.549048,
                39.173364
            ]
        },
        "location_1_location": "4300 N ANTIOCH RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1122",
        "report_no": "140010791",
        "reported_date": "2014-02-16T00:00:00.000",
        "reported_time": "18:13",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "2400  CHELSEA AV",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "324",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "08:03",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.526585,
                39.081963
            ]
        },
        "location_1_location": "2400 CHELSEA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2089",
        "report_no": "140059854",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "08:03",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 49 ST/COLLEGE AV",
        "age_1": "33",
        "area_1": "MPD",
        "beat": "211",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-25T00:00:00.000",
        "from_time": "01:59",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 49 ST/COLLEGE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3916",
        "report_no": "140043973",
        "reported_date": "2014-06-25T00:00:00.000",
        "reported_time": "02:04",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "10100  NE 99 ST",
        "age_1": "22",
        "area_1": "SCP",
        "beat": "643",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-08T00:00:00.000",
        "from_time": "11:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.453529,
                39.27179
            ]
        },
        "location_1_location": "10100 NE 99 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0213",
        "report_no": "140001608",
        "reported_date": "2014-01-08T00:00:00.000",
        "reported_time": "11:27",
        "sex_1": "M",
        "zip_code_1": "64157"
    },
    {
        "address": "E 75 ST/BRUCE R WATKINS DR",
        "age_1": "54",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-03-17T00:00:00.000",
        "from_time": "13:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "E 75 ST/BRUCE R WATKINS DR",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5548",
        "report_no": "140017777",
        "reported_date": "2014-03-17T00:00:00.000",
        "reported_time": "14:01",
        "sex_1": "M"
    },
    {
        "address": "W 16 ST/JEFFERSON ST",
        "age_1": "30",
        "area_1": "CPD",
        "beat": "111",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-06T00:00:00.000",
        "from_time": "03:51",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.586339,
                39.103618
            ]
        },
        "location_1_location": "W 16 ST/JEFFERSON ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1384",
        "report_no": "140055207",
        "reported_date": "2014-08-06T00:00:00.000",
        "reported_time": "03:54",
        "sex_1": "F",
        "zip_code_1": "64105"
    },
    {
        "address": "E 38 ST/OLIVE ST",
        "area_1": "CPD",
        "beat": "142",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-14T00:00:00.000",
        "from_time": "10:33",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 38 ST/OLIVE ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3009",
        "report_no": "140032784",
        "reported_date": "2014-05-14T00:00:00.000",
        "reported_time": "10:33",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "3000  E 60 ST",
        "age_1": "22",
        "area_1": "MPD",
        "beat": "223",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-28T00:00:00.000",
        "from_time": "16:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.551108,
                39.017503
            ]
        },
        "location_1_location": "3000 E 60 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4790",
        "report_no": "140006501",
        "reported_date": "2014-01-28T00:00:00.000",
        "reported_time": "16:11",
        "sex_1": "F",
        "zip_code_1": "64131"
    },
    {
        "address": "3800  BROADWAY",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-07T00:00:00.000",
        "from_time": "14:29",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590715,
                39.057804
            ]
        },
        "location_1_location": "3800 BROADWAY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3045",
        "report_no": "140030886",
        "reported_date": "2014-05-07T00:00:00.000",
        "reported_time": "14:33",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "ADMIRAL BL/TRACY AV",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-18T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "ADMIRAL BL/TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0641",
        "report_no": "140067863",
        "reported_date": "2014-09-20T00:00:00.000",
        "reported_time": "19:42",
        "sex_1": "M",
        "to_date": "2014-09-20T00:00:00.000",
        "to_time": "19:42",
        "zip_code_1": "64106"
    },
    {
        "address": "INDEPENDENCE AV/PASEO",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-18T00:00:00.000",
        "from_time": "01:45",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.683198,
                39.138347
            ]
        },
        "location_1_location": "INDEPENDENCE AV/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0561",
        "report_no": "140042001",
        "reported_date": "2014-06-18T00:00:00.000",
        "reported_time": "01:45",
        "sex_1": "M",
        "zip_code_1": "66104"
    },
    {
        "address": "600  E LINWOOD BL",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-02T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.577569,
                39.068938
            ]
        },
        "location_1_location": "600 E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2629",
        "report_no": "140063032",
        "reported_date": "2014-09-02T00:00:00.000",
        "reported_time": "20:32",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "E ARMOUR BL/TRACY AV",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "125",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-12T00:00:00.000",
        "from_time": "15:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "E ARMOUR BL/TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2778",
        "report_no": "140048617",
        "reported_date": "2014-07-12T00:00:00.000",
        "reported_time": "15:55",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "7300  PROSPECT AV",
        "age_1": "7",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "7",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557146,
                38.994273
            ]
        },
        "location_1_location": "7300 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5568",
        "report_no": "140039672",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "14:15",
        "sex_1": "M",
        "to_date": "2014-06-09T00:00:00.000",
        "to_time": "14:15",
        "zip_code_1": "64132"
    },
    {
        "address": "1200  WESTPORT RD",
        "age_1": "35",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-20T00:00:00.000",
        "from_time": "17:43",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.601491,
                39.049997
            ]
        },
        "location_1_location": "1200 WESTPORT RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3464",
        "report_no": "140004620",
        "reported_date": "2014-01-20T00:00:00.000",
        "reported_time": "17:46",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "9300  BLUE RIDGE BL",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-18T00:00:00.000",
        "from_time": "19:37",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.505978,
                38.955835
            ]
        },
        "location_1_location": "9300 BLUE RIDGE BL",
        "offense": "302",
        "rep_dist_1": "PJ6485",
        "report_no": "140004386",
        "reported_date": "2014-01-19T00:00:00.000",
        "reported_time": "19:37",
        "zip_code_1": "64138"
    },
    {
        "address": "E 55 ST/PROSPECT AV",
        "age_1": "54",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-06T00:00:00.000",
        "from_time": "21:17",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 55 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4367",
        "report_no": "140072299",
        "reported_date": "2014-10-06T00:00:00.000",
        "reported_time": "21:17",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "8600  E 92 PL",
        "age_1": "20",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-23T00:00:00.000",
        "from_time": "08:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.48831,
                38.955248
            ]
        },
        "location_1_location": "8600 E 92 PL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6458",
        "report_no": "140091758",
        "reported_date": "2014-12-23T00:00:00.000",
        "reported_time": "08:36",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "E 67 ST/PASEO",
        "age_1": "15",
        "area_1": "MPD",
        "beat": "241",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "07:31",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55217,
                38.986859
            ]
        },
        "location_1_location": "E 67 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5086",
        "report_no": "140075854",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "07:34",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "6100  E 87 ST",
        "age_1": "25",
        "area_1": "SPD",
        "beat": "541",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-27T00:00:00.000",
        "from_time": "03:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.517654,
                38.967411
            ]
        },
        "location_1_location": "6100 E 87 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6336",
        "report_no": "140092581",
        "reported_date": "2014-12-27T00:00:00.000",
        "reported_time": "08:11",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "2900  VAN BRUNT BL",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-21T00:00:00.000",
        "from_time": "14:08",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520736,
                39.072342
            ]
        },
        "location_1_location": "2900 VAN BRUNT BL",
        "offense": "302",
        "rep_dist_1": "PJ2431",
        "report_no": "140042993",
        "reported_date": "2014-06-21T00:00:00.000",
        "reported_time": "14:16",
        "to_date": "2014-06-21T00:00:00.000",
        "to_time": "14:11",
        "zip_code_1": "64128"
    },
    {
        "address": "W 44 ST/PENNSYLVANIA AV",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-29T00:00:00.000",
        "from_time": "01:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593069,
                39.055497
            ]
        },
        "location_1_location": "W 44 ST/PENNSYLVANIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3469",
        "report_no": "140085723",
        "reported_date": "2014-11-29T00:00:00.000",
        "reported_time": "01:51",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "5300  E 39 ST",
        "age_1": "27",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-01-01T00:00:00.000",
        "from_time": "03:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522096,
                39.0545
            ]
        },
        "location_1_location": "5300 E 39 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3234",
        "report_no": "140000052",
        "reported_date": "2014-01-01T00:00:00.000",
        "reported_time": "04:02",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "9800  WILLOW AV",
        "area_1": "SPD",
        "beat": "643",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-01T00:00:00.000",
        "from_time": "05:29",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.459273,
                38.944921
            ]
        },
        "location_1_location": "9800 WILLOW AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ6715",
        "report_no": "140086171",
        "reported_date": "2014-12-01T00:00:00.000",
        "reported_time": "05:29",
        "sex_1": "U",
        "zip_code_1": "64134"
    },
    {
        "address": "4300  VIRGINIA AV",
        "age_1": "29",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-01T00:00:00.000",
        "from_time": "00:55",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568996,
                39.048633
            ]
        },
        "location_1_location": "4300 VIRGINIA AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3481",
        "report_no": "140045538",
        "reported_date": "2014-07-01T00:00:00.000",
        "reported_time": "00:55",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "1700  W 133 ST",
        "area_1": "SPD",
        "beat": "535",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-08-14T00:00:00.000",
        "from_time": "11:40",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.60438,
                38.886578
            ]
        },
        "location_1_location": "1700 W 133 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7404",
        "report_no": "140057625",
        "reported_date": "2014-08-14T00:00:00.000",
        "reported_time": "12:00",
        "sex_1": "M",
        "to_date": "2014-08-14T00:00:00.000",
        "to_time": "11:45",
        "zip_code_1": "64145"
    },
    {
        "address": "6800  LONGVIEW RD",
        "area_1": "SPD",
        "beat": "543",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-04T00:00:00.000",
        "from_time": "12:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.512549,
                38.915438
            ]
        },
        "location_1_location": "6800 LONGVIEW RD",
        "offense": "302",
        "rep_dist_1": "PJ7220",
        "report_no": "140008140",
        "reported_date": "2014-02-04T00:00:00.000",
        "reported_time": "12:27",
        "zip_code_1": "64134"
    },
    {
        "address": "7600  MONROE AV",
        "age_1": "29",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-14T00:00:00.000",
        "from_time": "00:05",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544818,
                38.990123
            ]
        },
        "location_1_location": "7600 MONROE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5718",
        "report_no": "140082272",
        "reported_date": "2014-11-14T00:00:00.000",
        "reported_time": "00:40",
        "sex_1": "F",
        "zip_code_1": "64132"
    },
    {
        "address": "8100  TROOST AV",
        "age_1": "18",
        "area_1": "MPD",
        "beat": "233",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-22T00:00:00.000",
        "from_time": "17:42",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.576256,
                38.980653
            ]
        },
        "location_1_location": "8100 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5921",
        "report_no": "140051311",
        "reported_date": "2014-07-22T00:00:00.000",
        "reported_time": "17:42",
        "sex_1": "M",
        "zip_code_1": "64132"
    },
    {
        "address": "E 49 ST/COLLEGE AV",
        "age_1": "15",
        "area_1": "MPD",
        "beat": "211",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "00:19",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 49 ST/COLLEGE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3916",
        "report_no": "140035418",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "00:19",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "9200  N OAK TF",
        "age_1": "19",
        "area_1": "SCP",
        "beat": "642",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-12T00:00:00.000",
        "from_time": "14:51",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575803,
                39.261613
            ]
        },
        "location_1_location": "9200 N OAK TF",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC0294",
        "report_no": "140009854",
        "reported_date": "2014-02-12T00:00:00.000",
        "reported_time": "14:51",
        "sex_1": "M",
        "zip_code_1": "64155"
    },
    {
        "address": "E 12 ST/PASEO",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-18T00:00:00.000",
        "from_time": "22:32",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 12 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1058",
        "report_no": "140067315",
        "reported_date": "2014-09-18T00:00:00.000",
        "reported_time": "22:32",
        "sex_1": "F",
        "to_date": "2014-09-18T00:00:00.000",
        "to_time": "22:32",
        "zip_code_1": "64106"
    },
    {
        "address": "E 38 ST/BELLEFONTAINE AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-03T00:00:00.000",
        "from_time": "16:18",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 38 ST/BELLEFONTAINE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3031",
        "report_no": "140038157",
        "reported_date": "2014-06-03T00:00:00.000",
        "reported_time": "16:18",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "500  PARK AV",
        "age_1": "36",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-01T00:00:00.000",
        "from_time": "21:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.554346,
                39.108413
            ]
        },
        "location_1_location": "500 PARK AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0554",
        "report_no": "140021610",
        "reported_date": "2014-04-01T00:00:00.000",
        "reported_time": "21:17",
        "sex_1": "M",
        "to_date": "2014-04-01T00:00:00.000",
        "to_time": "21:17"
    },
    {
        "address": "3200  MYRTLE AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-19T00:00:00.000",
        "from_time": "19:44",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.536979,
                39.067434
            ]
        },
        "location_1_location": "3200 MYRTLE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2674",
        "report_no": "140090897",
        "reported_date": "2014-12-19T00:00:00.000",
        "reported_time": "19:44",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "KARNES BLVD/ROANOKE RD",
        "area_1": "CPD",
        "beat": "131",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "KARNES BLVD/ROANOKE RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2762",
        "report_no": "140081063",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "21:32",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "10400  E 43 ST",
        "age_1": "19",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-20T00:00:00.000",
        "from_time": "02:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.457891,
                39.044604
            ]
        },
        "location_1_location": "10400 E 43 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3792",
        "report_no": "140026373",
        "reported_date": "2014-04-20T00:00:00.000",
        "reported_time": "03:04",
        "sex_1": "F",
        "zip_code_1": "64133"
    },
    {
        "address": "4000  MERSINGTON AV",
        "age_1": "32",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-30T00:00:00.000",
        "from_time": "13:31",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.538736,
                39.053054
            ]
        },
        "location_1_location": "4000 MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3294",
        "report_no": "140006989",
        "reported_date": "2014-01-30T00:00:00.000",
        "reported_time": "13:31",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "3500  E 6 ST",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-23T00:00:00.000",
        "from_time": "00:01",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.540307,
                39.105045
            ]
        },
        "location_1_location": "3500 E 6 ST",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ0688",
        "report_no": "140012244",
        "reported_date": "2014-02-23T00:00:00.000",
        "reported_time": "00:08",
        "sex_1": "M",
        "zip_code_1": "64123"
    },
    {
        "address": "1100  AGNES AV",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "22:43",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547016,
                39.100382
            ]
        },
        "location_1_location": "1100 AGNES AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1049",
        "report_no": "140073720",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "22:43",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "4200  NE SUNNYBROOK LN",
        "age_1": "20",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "20:45",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.530483,
                39.168278
            ]
        },
        "location_1_location": "4200 NE SUNNYBROOK LN",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PC1206",
        "report_no": "140039778",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "20:47",
        "sex_1": "M",
        "zip_code_1": "64117"
    },
    {
        "address": "1900  NE PARVIN RD",
        "age_1": "24",
        "area_1": "SCP",
        "beat": "631",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-02T00:00:00.000",
        "from_time": "21:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.55673,
                39.16752
            ]
        },
        "location_1_location": "1900 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1224",
        "report_no": "140079500",
        "reported_date": "2014-11-02T00:00:00.000",
        "reported_time": "22:01",
        "sex_1": "F",
        "zip_code_1": "64116"
    },
    {
        "address": "8700  E 96 ST",
        "age_1": "20",
        "area_1": "SPD",
        "beat": "544",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-30T00:00:00.000",
        "from_time": "19:35",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.486884,
                38.950118
            ]
        },
        "location_1_location": "8700 E 96 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6620",
        "report_no": "140037195",
        "reported_date": "2014-05-30T00:00:00.000",
        "reported_time": "19:35",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "8600  E 110 ST",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-22T00:00:00.000",
        "from_time": "21:35",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49185,
                38.924068
            ]
        },
        "location_1_location": "8600 E 110 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7008",
        "report_no": "140019166",
        "reported_date": "2014-03-22T00:00:00.000",
        "reported_time": "21:44",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E ARMOUR BL/CAMPBELL ST",
        "area_1": "CPD",
        "beat": "141",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-29T00:00:00.000",
        "from_time": "06:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E ARMOUR BL/CAMPBELL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2767",
        "report_no": "140085754",
        "reported_date": "2014-11-29T00:00:00.000",
        "reported_time": "07:29",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "4400  HOLLY ST",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-25T00:00:00.000",
        "from_time": "00:18",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.600586,
                39.048082
            ]
        },
        "location_1_location": "4400 HOLLY ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3516",
        "report_no": "140077238",
        "reported_date": "2014-10-25T00:00:00.000",
        "reported_time": "00:18",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "3800  BROADWAY",
        "age_1": "25",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-25T00:00:00.000",
        "from_time": "16:45",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.590715,
                39.057804
            ]
        },
        "location_1_location": "3800 BROADWAY",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3045",
        "report_no": "140085076",
        "reported_date": "2014-11-25T00:00:00.000",
        "reported_time": "16:52",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "200  W 6 ST",
        "age_1": "21",
        "area_1": "CPD",
        "beat": "112",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-04T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.623866,
                39.1059
            ]
        },
        "location_1_location": "200 W 6 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0652",
        "report_no": "140071751",
        "reported_date": "2014-10-04T00:00:00.000",
        "reported_time": "20:53",
        "sex_1": "M"
    },
    {
        "address": "E 31 ST/OAKLEY AV",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-29T00:00:00.000",
        "from_time": "02:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "E 31 ST/OAKLEY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2562",
        "report_no": "140036737",
        "reported_date": "2014-05-29T00:00:00.000",
        "reported_time": "02:55",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "11100  N AMBASSADOR DR",
        "age_1": "21",
        "area_1": "NPD",
        "beat": "425",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-25T00:00:00.000",
        "from_time": "15:20",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.681669,
                39.293467
            ]
        },
        "location_1_location": "11100 N AMBASSADOR DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0221",
        "report_no": "140019785",
        "reported_date": "2014-03-25T00:00:00.000",
        "reported_time": "15:23",
        "sex_1": "M",
        "zip_code_1": "64155"
    },
    {
        "address": "CYPRESS AV/THOMPSON AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-24T00:00:00.000",
        "from_time": "00:55",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "CYPRESS AV/THOMPSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0507",
        "report_no": "140051684",
        "reported_date": "2014-07-24T00:00:00.000",
        "reported_time": "00:55",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "S 16 ST/ELMWOOD AV",
        "age_1": "20",
        "area_1": "OSPD",
        "beat": "999",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-16T00:00:00.000",
        "from_time": "22:46",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "S 16 ST/ELMWOOD AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PWX001",
        "report_no": "140041684",
        "reported_date": "2014-06-16T00:00:00.000",
        "reported_time": "22:46",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "4400  N CHOUTEAU TF",
        "age_1": "33",
        "area_1": "SCP",
        "beat": "632",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-29T00:00:00.000",
        "from_time": "10:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.524566,
                39.20301
            ]
        },
        "location_1_location": "4400 N CHOUTEAU TF",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1152",
        "report_no": "140078377",
        "reported_date": "2014-10-29T00:00:00.000",
        "reported_time": "10:49",
        "sex_1": "M",
        "zip_code_1": "64119"
    },
    {
        "address": "5500  WOODLAND AV",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-20T00:00:00.000",
        "from_time": "02:13",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.564526,
                39.026553
            ]
        },
        "location_1_location": "5500 WOODLAND AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4431",
        "report_no": "140018499",
        "reported_date": "2014-03-20T00:00:00.000",
        "reported_time": "02:15",
        "sex_1": "M"
    },
    {
        "address": "7300  NE PARVIN RD",
        "area_1": "SCP",
        "beat": "635",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-15T00:00:00.000",
        "from_time": "05:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.494873,
                39.168417
            ]
        },
        "location_1_location": "7300 NE PARVIN RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1343",
        "report_no": "140033010",
        "reported_date": "2014-05-15T00:00:00.000",
        "reported_time": "05:15",
        "sex_1": "M"
    },
    {
        "address": "5800  PEERY AV",
        "age_1": "34",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-05T00:00:00.000",
        "from_time": "13:34",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.514393,
                39.098546
            ]
        },
        "location_1_location": "5800 PEERY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1115",
        "report_no": "140030304",
        "reported_date": "2014-05-05T00:00:00.000",
        "reported_time": "13:34",
        "sex_1": "F"
    },
    {
        "address": "E 63 ST/PASEO",
        "age_1": "37",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-20T00:00:00.000",
        "from_time": "02:28",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.573217,
                39.035988
            ]
        },
        "location_1_location": "E 63 ST/PASEO",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ4887",
        "report_no": "140075828",
        "reported_date": "2014-10-20T00:00:00.000",
        "reported_time": "02:28",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "9400  BLUE RIDGE BL",
        "age_1": "32",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-30T00:00:00.000",
        "from_time": "12:54",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.507929,
                38.953624
            ]
        },
        "location_1_location": "9400 BLUE RIDGE BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6481",
        "report_no": "140086040",
        "reported_date": "2014-11-30T00:00:00.000",
        "reported_time": "12:57",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "W 36 ST/CENTRAL ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-16T00:00:00.000",
        "from_time": "01:13",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "W 36 ST/CENTRAL ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2820",
        "report_no": "140010654",
        "reported_date": "2014-02-16T00:00:00.000",
        "reported_time": "01:13",
        "sex_1": "F",
        "zip_code_1": "64106"
    },
    {
        "address": "8600  E 114 TE",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-27T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "5",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.492642,
                38.915417
            ]
        },
        "location_1_location": "8600 E 114 TE",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7207",
        "report_no": "140020268",
        "reported_date": "2014-03-27T00:00:00.000",
        "reported_time": "15:31",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "600  W 47 ST",
        "age_1": "32",
        "area_1": "CPD",
        "beat": "134",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-07T00:00:00.000",
        "from_time": "02:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.593584,
                39.042411
            ]
        },
        "location_1_location": "600 W 47 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3688",
        "report_no": "140064185",
        "reported_date": "2014-09-07T00:00:00.000",
        "reported_time": "02:21",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "6600  WOODLAND AV",
        "age_1": "46",
        "area_1": "MPD",
        "beat": "232",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-03T00:00:00.000",
        "from_time": "00:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.565719,
                39.006943
            ]
        },
        "location_1_location": "6600 WOODLAND AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5123",
        "report_no": "140037979",
        "reported_date": "2014-06-03T00:00:00.000",
        "reported_time": "00:22",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "E 9 ST/PASEO",
        "age_1": "49",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-04-05T00:00:00.000",
        "from_time": "18:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57466,
                39.104256
            ]
        },
        "location_1_location": "E 9 ST/PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0836",
        "report_no": "140022633",
        "reported_date": "2014-04-05T00:00:00.000",
        "reported_time": "18:27",
        "sex_1": "M",
        "zip_code_1": "64106"
    },
    {
        "address": "E 63 ST/SOUTH BENTON AV",
        "area_1": "MPD",
        "beat": "223",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-26T00:00:00.000",
        "from_time": "14:20",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 63 ST/SOUTH BENTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4894",
        "report_no": "140061014",
        "reported_date": "2014-08-26T00:00:00.000",
        "reported_time": "14:21",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "E 22 ST/KANSAS AV",
        "area_1": "EPD",
        "beat": "323",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-27T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 22 ST/KANSAS AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ1804",
        "report_no": "140028288",
        "reported_date": "2014-04-27T00:00:00.000",
        "reported_time": "16:38",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "200  W 39 ST",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-28T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.588561,
                39.056681
            ]
        },
        "location_1_location": "200 W 39 ST",
        "offense": "302",
        "rep_dist_1": "PJ3049",
        "report_no": "140078221",
        "reported_date": "2014-10-28T00:00:00.000",
        "reported_time": "18:37",
        "zip_code_1": "64111"
    },
    {
        "address": "7300  PROSPECT AV",
        "age_1": "3",
        "area_1": "MPD",
        "beat": "242",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-06-09T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "8",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.557146,
                38.994273
            ]
        },
        "location_1_location": "7300 PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5568",
        "report_no": "140039672",
        "reported_date": "2014-06-09T00:00:00.000",
        "reported_time": "14:15",
        "sex_1": "F",
        "to_date": "2014-06-09T00:00:00.000",
        "to_time": "14:15",
        "zip_code_1": "64132"
    },
    {
        "address": "E EMANUEL CLEAVER II BL/PROSPECT AV",
        "age_1": "46",
        "area_1": "EPD",
        "beat": "334",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-07-29T00:00:00.000",
        "from_time": "15:37",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E EMANUEL CLEAVER II BL/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3725",
        "report_no": "140053223",
        "reported_date": "2014-07-29T00:00:00.000",
        "reported_time": "15:37",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "10600  E 42 ST",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-26T00:00:00.000",
        "from_time": "16:53",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.453903,
                39.046427
            ]
        },
        "location_1_location": "10600 E 42 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3526",
        "report_no": "140044412",
        "reported_date": "2014-06-26T00:00:00.000",
        "reported_time": "16:58",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "4100  TRACY AV",
        "age_1": "25",
        "area_1": "CPD",
        "beat": "143",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "08:38",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.569936,
                39.052324
            ]
        },
        "location_1_location": "4100 TRACY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3319",
        "report_no": "140007614",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "08:38",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "300  NORTON AV",
        "age_1": "17",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-18T00:00:00.000",
        "from_time": "11:22",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.533956,
                39.111043
            ]
        },
        "location_1_location": "300 NORTON AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0414",
        "report_no": "140042079",
        "reported_date": "2014-06-18T00:00:00.000",
        "reported_time": "11:22",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "BENTON BL/INDEPENDENCE AV",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-03-31T00:00:00.000",
        "from_time": "00:22",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "BENTON BL/INDEPENDENCE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0609",
        "report_no": "140021107",
        "reported_date": "2014-03-31T00:00:00.000",
        "reported_time": "00:22",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "N",
        "from_date": "2014-06-25T00:00:00.000",
        "from_time": "22:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 39 ST/S EMANUEL CLEAVER II BL N",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3149",
        "report_no": "140044231",
        "reported_date": "2014-06-25T00:00:00.000",
        "reported_time": "22:54",
        "sex_1": "F",
        "zip_code_1": "64128"
    },
    {
        "address": "11300  MONTGALL AV",
        "age_1": "28",
        "area_1": "SPD",
        "beat": "534",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-27T00:00:00.000",
        "from_time": "17:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.558654,
                38.92199
            ]
        },
        "location_1_location": "11300 MONTGALL AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ7158",
        "report_no": "140044734",
        "reported_date": "2014-06-27T00:00:00.000",
        "reported_time": "20:29",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "E 38 ST/CHESTNUT AV",
        "area_1": "EPD",
        "beat": "333",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-27T00:00:00.000",
        "from_time": "02:40",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 38 ST/CHESTNUT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3024",
        "report_no": "140077743",
        "reported_date": "2014-10-27T00:00:00.000",
        "reported_time": "03:00",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "INDEPENDENCE AV/MAPLE BL",
        "age_1": "35",
        "area_1": "CPD",
        "beat": "121",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-26T00:00:00.000",
        "from_time": "01:54",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.581577,
                39.085069
            ]
        },
        "location_1_location": "INDEPENDENCE AV/MAPLE BL",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0571",
        "report_no": "140044254",
        "reported_date": "2014-06-26T00:00:00.000",
        "reported_time": "01:54",
        "sex_1": "M",
        "zip_code_1": "64108"
    },
    {
        "address": "E 55 ST/PROSPECT AV",
        "age_1": "19",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-24T00:00:00.000",
        "from_time": "21:16",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 55 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4367",
        "report_no": "140077201",
        "reported_date": "2014-10-24T00:00:00.000",
        "reported_time": "21:16",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "8600  E 110 ST",
        "age_1": "17",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-22T00:00:00.000",
        "from_time": "21:35",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49185,
                38.924068
            ]
        },
        "location_1_location": "8600 E 110 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7008",
        "report_no": "140019166",
        "reported_date": "2014-03-22T00:00:00.000",
        "reported_time": "21:44",
        "sex_1": "M",
        "zip_code_1": "64134"
    },
    {
        "address": "NW 58 TE/N POLK DR",
        "age_1": "58",
        "area_1": "NPD",
        "beat": "413",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-07T00:00:00.000",
        "from_time": "02:55",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.634417,
                39.216236
            ]
        },
        "location_1_location": "NW 58 TE/N POLK DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PP0684",
        "report_no": "140064202",
        "reported_date": "2014-09-07T00:00:00.000",
        "reported_time": "03:17",
        "sex_1": "M",
        "to_date": "2014-09-07T00:00:00.000",
        "to_time": "03:05",
        "zip_code_1": "64151"
    },
    {
        "address": "8100  E BANNISTER RD",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-13T00:00:00.000",
        "from_time": "00:15",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495058,
                38.951805
            ]
        },
        "location_1_location": "8100 E BANNISTER RD",
        "offense": "302",
        "rep_dist_1": "PJ6554",
        "report_no": "140057186",
        "reported_date": "2014-08-13T00:00:00.000",
        "reported_time": "00:19",
        "zip_code_1": "64138"
    },
    {
        "address": "10700  MARSH AV",
        "age_1": "24",
        "area_1": "SPD",
        "beat": "545",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-10T00:00:00.000",
        "from_time": "23:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.49376,
                38.929884
            ]
        },
        "location_1_location": "10700 MARSH AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6922",
        "report_no": "140065191",
        "reported_date": "2014-09-10T00:00:00.000",
        "reported_time": "23:17",
        "sex_1": "F",
        "zip_code_1": "64134"
    },
    {
        "address": "3000  NE VIVION RD",
        "age_1": "26",
        "area_1": "SCP",
        "beat": "634",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-26T00:00:00.000",
        "from_time": "20:11",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543922,
                39.188149
            ]
        },
        "location_1_location": "3000 NE VIVION RD",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC0861",
        "report_no": "140061105",
        "reported_date": "2014-08-26T00:00:00.000",
        "reported_time": "20:15",
        "sex_1": "M",
        "zip_code_1": "64118"
    },
    {
        "address": "4000  HARDESTY AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "322",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-20T00:00:00.000",
        "from_time": "18:10",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.522077,
                39.052785
            ]
        },
        "location_1_location": "4000 HARDESTY AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3286",
        "report_no": "140091119",
        "reported_date": "2014-12-20T00:00:00.000",
        "reported_time": "18:19",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "5900  WILSON AV",
        "area_1": "EPD",
        "beat": "312",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-25T00:00:00.000",
        "from_time": "18:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.513179,
                39.105278
            ]
        },
        "location_1_location": "5900 WILSON AV",
        "offense": "302",
        "rep_dist_1": "PJ0608",
        "report_no": "140060833",
        "reported_date": "2014-08-25T00:00:00.000",
        "reported_time": "18:59",
        "zip_code_1": "64123"
    },
    {
        "address": "1100  AGNES AV",
        "age_1": "49",
        "area_1": "EPD",
        "beat": "321",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-11T00:00:00.000",
        "from_time": "22:43",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547016,
                39.100382
            ]
        },
        "location_1_location": "1100 AGNES AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1049",
        "report_no": "140073720",
        "reported_date": "2014-10-11T00:00:00.000",
        "reported_time": "22:43",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "5100  OAK LEAF DR",
        "age_1": "24",
        "area_1": "MPD",
        "beat": "212",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-05T00:00:00.000",
        "from_time": "15:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.502494,
                39.030139
            ]
        },
        "location_1_location": "5100 OAK LEAF DR",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4311",
        "report_no": "140063941",
        "reported_date": "2014-09-06T00:00:00.000",
        "reported_time": "00:25",
        "sex_1": "F",
        "to_date": "2014-09-06T00:00:00.000",
        "to_time": "00:15",
        "zip_code_1": "64129"
    },
    {
        "address": "6000  PARK AV",
        "age_1": "4",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-25T00:00:00.000",
        "from_time": "20:50",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.559256,
                39.017612
            ]
        },
        "location_1_location": "6000 PARK AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4870",
        "report_no": "140085128",
        "reported_date": "2014-11-25T00:00:00.000",
        "reported_time": "20:57",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "900  E 63 ST",
        "age_1": "30",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-21T00:00:00.000",
        "from_time": "20:27",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57629,
                39.013358
            ]
        },
        "location_1_location": "900 E 63 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4875",
        "report_no": "140004878",
        "reported_date": "2014-01-21T00:00:00.000",
        "reported_time": "20:27",
        "sex_1": "M",
        "zip_code_1": "64110"
    },
    {
        "address": "9100  HILLCREST RD",
        "area_1": "SPD",
        "beat": "541",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-12T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.520048,
                38.96034
            ]
        },
        "location_1_location": "9100 HILLCREST RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6376",
        "report_no": "140002556",
        "reported_date": "2014-01-12T00:00:00.000",
        "reported_time": "11:09",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "7613-A-B SNI-A-BAR RD",
        "age_1": "22",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-01-31T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.496019,
                39.039016
            ]
        },
        "location_1_location": "7613-A-B SNI-A-BAR RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4134",
        "report_no": "140007187",
        "reported_date": "2014-01-31T00:00:00.000",
        "reported_time": "11:07",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "5000  E LINWOOD BL",
        "age_1": "21",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-15T00:00:00.000",
        "from_time": "20:54",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.526704,
                39.067452
            ]
        },
        "location_1_location": "5000 E LINWOOD BL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2527",
        "report_no": "140074692",
        "reported_date": "2014-10-15T00:00:00.000",
        "reported_time": "20:54",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "E 35 ST/CLEVELAND AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-02T00:00:00.000",
        "from_time": "00:52",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537966,
                39.067398
            ]
        },
        "location_1_location": "E 35 ST/CLEVELAND AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ2818",
        "report_no": "140029403",
        "reported_date": "2014-05-02T00:00:00.000",
        "reported_time": "00:54",
        "sex_1": "U",
        "zip_code_1": "64128"
    },
    {
        "address": "6000  KENWOOD AV",
        "area_1": "MPD",
        "beat": "224",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-16T00:00:00.000",
        "from_time": "20:20",
        "ibrs": "120",
        "invl_no_1": "4",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.580098,
                39.018402
            ]
        },
        "location_1_location": "6000 KENWOOD AV",
        "offense": "302",
        "race_1": "U",
        "rep_dist_1": "PJ4743",
        "report_no": "140082893",
        "reported_date": "2014-11-16T00:00:00.000",
        "reported_time": "20:26",
        "sex_1": "U",
        "zip_code_1": "64113"
    },
    {
        "address": "5700  TROOST AV",
        "age_1": "28",
        "area_1": "MPD",
        "beat": "221",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-01-08T00:00:00.000",
        "from_time": "16:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.574058,
                39.023464
            ]
        },
        "location_1_location": "5700 TROOST AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4554",
        "report_no": "140001676",
        "reported_date": "2014-01-08T00:00:00.000",
        "reported_time": "16:23",
        "sex_1": "F",
        "zip_code_1": "64110"
    },
    {
        "address": "11100  GRANDVIEW RD",
        "area_1": "SPD",
        "beat": "534",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-16T00:00:00.000",
        "from_time": "01:35",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.532341,
                38.924008
            ]
        },
        "location_1_location": "11100 GRANDVIEW RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ7023",
        "report_no": "140074749",
        "reported_date": "2014-10-16T00:00:00.000",
        "reported_time": "01:40",
        "sex_1": "M",
        "zip_code_1": "64137"
    },
    {
        "address": "8600  E 92 PL",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-23T00:00:00.000",
        "from_time": "08:20",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.48831,
                38.955248
            ]
        },
        "location_1_location": "8600 E 92 PL",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6458",
        "report_no": "140091758",
        "reported_date": "2014-12-23T00:00:00.000",
        "reported_time": "08:36",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "100  W 39 ST",
        "age_1": "19",
        "area_1": "CPD",
        "beat": "132",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-14T00:00:00.000",
        "from_time": "21:20",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.587423,
                39.056642
            ]
        },
        "location_1_location": "100 W 39 ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3132",
        "report_no": "140089660",
        "reported_date": "2014-12-14T00:00:00.000",
        "reported_time": "21:20",
        "sex_1": "M",
        "zip_code_1": "64111"
    },
    {
        "address": "900  PASEO",
        "age_1": "48",
        "area_1": "CPD",
        "beat": "122",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-27T00:00:00.000",
        "from_time": "11:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.568729,
                39.066698
            ]
        },
        "location_1_location": "900 PASEO",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0902",
        "report_no": "140013245",
        "reported_date": "2014-02-27T00:00:00.000",
        "reported_time": "11:03",
        "sex_1": "M",
        "zip_code_1": "64109"
    },
    {
        "address": "2900  MERSINGTON AV",
        "area_1": "EPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-05T00:00:00.000",
        "from_time": "22:48",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.537765,
                39.072411
            ]
        },
        "location_1_location": "2900 MERSINGTON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2443",
        "report_no": "140008413",
        "reported_date": "2014-02-05T00:00:00.000",
        "reported_time": "22:48",
        "sex_1": "M",
        "zip_code_1": "64126"
    },
    {
        "address": "400  JACKSON AV",
        "age_1": "25",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-24T00:00:00.000",
        "from_time": "03:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.532896,
                39.109192
            ]
        },
        "location_1_location": "400 JACKSON AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ0502",
        "report_no": "140035461",
        "reported_date": "2014-05-24T00:00:00.000",
        "reported_time": "03:28",
        "sex_1": "M",
        "zip_code_1": "64124"
    },
    {
        "address": "2300  HOLMES ST",
        "age_1": "19",
        "area_1": "CPD",
        "beat": "115",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-27T00:00:00.000",
        "from_time": "06:05",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.575816,
                39.085055
            ]
        },
        "location_1_location": "2300 HOLMES ST",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ1938",
        "report_no": "140052567",
        "reported_date": "2014-07-27T00:00:00.000",
        "reported_time": "06:20",
        "sex_1": "F",
        "zip_code_1": "64106"
    },
    {
        "address": "4600  WALLACE AV",
        "age_1": "30",
        "area_1": "EPD",
        "beat": "344",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-13T00:00:00.000",
        "from_time": "22:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.486949,
                39.038963
            ]
        },
        "location_1_location": "4600 WALLACE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ3840",
        "report_no": "140046368",
        "reported_date": "2014-06-13T00:00:00.000",
        "reported_time": "22:00",
        "sex_1": "M",
        "zip_code_1": "64129"
    },
    {
        "address": "SMART AND BELMONT",
        "area_1": "SPD",
        "beat": "315",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-06-07T00:00:00.000",
        "from_time": "14:00",
        "ibrs": "120",
        "invl_no_1": "3",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.543606,
                39.106876
            ]
        },
        "location_1_location": "SMART AND BELMONT",
        "offense": "302",
        "rep_dist_1": "PJ6588",
        "report_no": "140039268",
        "reported_date": "2014-06-07T00:00:00.000",
        "reported_time": "19:17",
        "zip_code_1": "64124"
    },
    {
        "address": "8800  CRYSTAL AV",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-07-16T00:00:00.000",
        "from_time": "16:10",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.503962,
                38.964964
            ]
        },
        "location_1_location": "8800 CRYSTAL AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6346",
        "report_no": "140049687",
        "reported_date": "2014-07-16T00:00:00.000",
        "reported_time": "16:17",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "2500  HOLMES",
        "age_1": "20",
        "area_1": "CPD",
        "beat": "115",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-24T00:00:00.000",
        "from_time": "12:40",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.57494,
                39.102531
            ]
        },
        "location_1_location": "2500 HOLMES",
        "offense": "302",
        "race_1": "A",
        "rep_dist_1": "PJ2313",
        "report_no": "140084860",
        "reported_date": "2014-11-24T00:00:00.000",
        "reported_time": "15:12",
        "sex_1": "M",
        "to_date": "2014-11-24T00:00:00.000",
        "to_time": "15:00",
        "zip_code_1": "64106"
    },
    {
        "address": "8600  ROBANDEE LN",
        "area_1": "SPD",
        "beat": "542",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-25T00:00:00.000",
        "from_time": "02:44",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.48871,
                38.953314
            ]
        },
        "location_1_location": "8600 ROBANDEE LN",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6512",
        "report_no": "140035694",
        "reported_date": "2014-05-25T00:00:00.000",
        "reported_time": "02:46",
        "sex_1": "M",
        "zip_code_1": "64138"
    },
    {
        "address": "E 42 ST/PITTMAN RD",
        "age_1": "19",
        "area_1": "EPD",
        "beat": "345",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-04-09T00:00:00.000",
        "from_time": "10:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.459478,
                39.015518
            ]
        },
        "location_1_location": "E 42 ST/PITTMAN RD",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ3549",
        "report_no": "140023570",
        "reported_date": "2014-04-09T00:00:00.000",
        "reported_time": "12:29",
        "sex_1": "M",
        "to_date": "2014-04-09T00:00:00.000",
        "to_time": "10:30",
        "zip_code_1": "64133"
    },
    {
        "address": "N ARLINGTON AV/NE VROOMAN DR",
        "area_1": "SCP",
        "beat": "636",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-08T00:00:00.000",
        "from_time": "17:15",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "N ARLINGTON AV/NE VROOMAN DR",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PC1441",
        "report_no": "140081036",
        "reported_date": "2014-11-08T00:00:00.000",
        "reported_time": "17:39",
        "sex_1": "F",
        "zip_code_1": "64160"
    },
    {
        "address": "BUDD PARK ESPLANADE/DENVER AV",
        "area_1": "EPD",
        "beat": "314",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-05-22T00:00:00.000",
        "from_time": "15:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.583076,
                39.10295
            ]
        },
        "location_1_location": "BUDD PARK ESPLANADE/DENVER AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0373",
        "report_no": "140034998",
        "reported_date": "2014-05-22T00:00:00.000",
        "reported_time": "15:30",
        "sex_1": "M"
    },
    {
        "address": "E 54 ST/PROSPECT AV",
        "area_1": "MPD",
        "beat": "222",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-10-12T00:00:00.000",
        "from_time": "20:23",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544188,
                39.03332
            ]
        },
        "location_1_location": "E 54 ST/PROSPECT AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ4292",
        "report_no": "140073921",
        "reported_date": "2014-10-12T00:00:00.000",
        "reported_time": "20:33",
        "sex_1": "M",
        "zip_code_1": "64130"
    },
    {
        "address": "4600  TROOST AV",
        "area_1": "CPD",
        "beat": "144",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-09-18T00:00:00.000",
        "from_time": "17:27",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.572906,
                39.043373
            ]
        },
        "location_1_location": "4600 TROOST AV",
        "offense": "302",
        "rep_dist_1": "PJ3710",
        "report_no": "140067274",
        "reported_date": "2014-09-18T00:00:00.000",
        "reported_time": "17:38",
        "zip_code_1": "64110"
    },
    {
        "address": "E 29 ST/OAKLEY AV",
        "area_1": "EPD",
        "beat": "342",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-12-28T00:00:00.000",
        "from_time": "23:00",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.539248,
                39.089618
            ]
        },
        "location_1_location": "E 29 ST/OAKLEY AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ2400",
        "report_no": "140092894",
        "reported_date": "2014-12-28T00:00:00.000",
        "reported_time": "23:07",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "8100  E 99 ST",
        "age_1": "18",
        "area_1": "SPD",
        "beat": "331",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-03-24T00:00:00.000",
        "from_time": "15:59",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495608,
                38.944537
            ]
        },
        "location_1_location": "8100 E 99 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ6682",
        "report_no": "140019573",
        "reported_date": "2014-03-24T00:00:00.000",
        "reported_time": "15:59",
        "sex_1": "F",
        "zip_code_1": "64130"
    },
    {
        "address": "400  NW BARRY RD",
        "area_1": "NPD",
        "beat": "423",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-02-01T00:00:00.000",
        "from_time": "17:25",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.585206,
                39.246466
            ]
        },
        "location_1_location": "400 NW BARRY RD",
        "offense": "302",
        "rep_dist_1": "PC0338",
        "report_no": "140007522",
        "reported_date": "2014-02-01T00:00:00.000",
        "reported_time": "17:56",
        "zip_code_1": "64155"
    },
    {
        "address": "3300  BELLEFONTAINE AV",
        "area_1": "EPD",
        "beat": "332",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "N",
        "from_date": "2014-11-03T00:00:00.000",
        "from_time": "13:00",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.547376,
                39.065942
            ]
        },
        "location_1_location": "3300 BELLEFONTAINE AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2737",
        "report_no": "140079662",
        "reported_date": "2014-11-03T00:00:00.000",
        "reported_time": "14:09",
        "sex_1": "M",
        "zip_code_1": "64128"
    },
    {
        "address": "6400  MANCHESTER AV",
        "area_1": "MPD",
        "beat": "213",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-11-23T00:00:00.000",
        "from_time": "20:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.495995,
                39.008092
            ]
        },
        "location_1_location": "6400 MANCHESTER AV",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5063",
        "report_no": "140084697",
        "reported_date": "2014-11-23T00:00:00.000",
        "reported_time": "20:40",
        "sex_1": "M",
        "zip_code_1": "64133"
    },
    {
        "address": "5300  E 27 ST",
        "age_1": "64",
        "area_1": "EPD",
        "beat": "343",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "N",
        "firearm_used_flag": "Y",
        "from_date": "2014-08-22T00:00:00.000",
        "from_time": "21:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "VIC",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.521309,
                39.076136
            ]
        },
        "location_1_location": "5300 E 27 ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ2294",
        "report_no": "140060075",
        "reported_date": "2014-08-22T00:00:00.000",
        "reported_time": "21:41",
        "sex_1": "M",
        "zip_code_1": "64127"
    },
    {
        "address": "3200  INDEPENDENCE AV",
        "age_1": "18",
        "area_1": "EPD",
        "beat": "313",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-09-29T00:00:00.000",
        "from_time": "00:30",
        "ibrs": "120",
        "invl_no_1": "2",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.544223,
                39.106114
            ]
        },
        "location_1_location": "3200 INDEPENDENCE AV",
        "offense": "302",
        "race_1": "W",
        "rep_dist_1": "PJ0684",
        "report_no": "140070295",
        "reported_date": "2014-09-29T00:00:00.000",
        "reported_time": "17:26",
        "sex_1": "M",
        "to_date": "2014-09-29T00:00:00.000",
        "to_time": "17:25",
        "zip_code_1": "64123"
    },
    {
        "address": "W 74 ST/WASHINGTON ST",
        "area_1": "MPD",
        "beat": "231",
        "city": "KANSAS CITY",
        "description": "Armed Robbery",
        "dvflag_1": "U",
        "firearm_used_flag": "Y",
        "from_date": "2014-02-02T00:00:00.000",
        "from_time": "02:30",
        "ibrs": "120",
        "invl_no_1": "1",
        "involvement_1": "SUS",
        "location_1": {
            "type": "Point",
            "coordinates": [
                -94.59572,
                38.958286
            ]
        },
        "location_1_location": "W 74 ST/WASHINGTON ST",
        "offense": "302",
        "race_1": "B",
        "rep_dist_1": "PJ5506",
        "report_no": "140007597",
        "reported_date": "2014-02-02T00:00:00.000",
        "reported_time": "02:47",
        "sex_1": "M",
        "zip_code_1": "64114"
    }
]
