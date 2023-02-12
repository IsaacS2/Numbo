//console.log(navigator);
// last variable is most important
nam = "NAME,SAEPOVALL_PT,SAEPOVALL_MOE,SAEPOVRTALL_MOE,SAEPOVRTALL_PT";
nam2 = "NIC_PT,NUI_PT,NAME";
state = "state:01";
year = "2020";
setNumber = 0;

function setNum(num) {
    if (num == 0 || num == "0") {
        setNumber = 0;
        sessionStorage.setItem("setNumberItem", "0");
    } else if (num == 1 || num == "1") {
        setNumber = 1;
        sessionStorage.setItem("setNumberItem", "1");
        //console.log("Yes1");
    } else if (num == 2 || num == "2") {
        setNumber = 2;
        sessionStorage.setItem("setNumberItem", "2");
        console.log("Yes3");
    }
    document.getElementById("number").style.marginLeft = "42%";
    document.getElementById("pop").innerHTML = "*";
    document.getElementById("rate").innerHTML = "U";
    document.getElementById("insured").innerHTML = "*";
    document.getElementById("pop").removeAttribute("onClick");
    document.getElementById("rate").removeAttribute("onClick");
    document.getElementById("insured").removeAttribute("onClick");
}


sessionStorage.setItem("rateOfTimer", "1000");


function timer() {
    document.getElementById("startTimeline").removeAttribute("onClick");
    document.getElementById("startTimeline").innerHTML = "Timeline Started!";
    if (sessionStorage.getItem("setNumberItem") == 0 || sessionStorage.getItem("setNumberItem") == "0" ||
    sessionStorage.getItem("setNumberItem") == 1 || sessionStorage.getItem("setNumberItem") == "1") {
        setTimeout(function(){
            timer();
            changeYear();
        }, parseInt(sessionStorage.getItem("rateOfTimer")));
    } else {
        setTimeout(function(){
            timer();
            changeYear2();
        }, parseInt(sessionStorage.getItem("rateOfTimer")));
    }
}

function changeYear2(){
    value = parseInt(sessionStorage.getItem("currYear"));
    //let newStateChosen = "state:" + sessionStorage.getItem('stateChosen');
    if (value < 2017) {
        let newStateChosen = "state:" + sessionStorage.getItem('stateChosen');
        newValue = "Current year: " + (value + 1);
        document.getElementById("timerVal").innerHTML = newValue;
        sessionStorage.setItem("currYear", value + 1);
        healthInsuranceCallValue(nam2, newStateChosen, "" + (value + 1));
    } else {
        secretMessage2();
        document.getElementById("startTimeline").innerHTML = "[Previous page]";
        document.getElementById("startTimeline").setAttribute("onClick", "prevPage();");
    }
}


function changeYear(){
    value = parseInt(sessionStorage.getItem("currYear"));
    //let newStateChosen = "state:" + sessionStorage.getItem('stateChosen');
    if (value < 2020) {
        let newStateChosen = "state:" + sessionStorage.getItem('stateChosen');
        newValue = "Current year: " + (value + 1);
        document.getElementById("timerVal").innerHTML = newValue;
        sessionStorage.setItem("currYear", value + 1);
        povertyCallValue(nam, newStateChosen, "" + (value + 1));
    } else {
        secretMessage1();
        document.getElementById("startTimeline").innerHTML = "[Previous page]";
        document.getElementById("startTimeline").setAttribute("onClick", "prevPage();");
    }
}

function prevPage() {
    sessionStorage.setItem("setNumberItem", "0");
    window.location.href = "options.html";
}

function enragedOrJoyful(status) {
    if (status == "enraged") {
        sessionStorage.setItem("EStatus", "enraged");
    } else if (status == "joyful") {
        sessionStorage.setItem("EStatus", "joyful");
    } else {
        sessionStorage.setItem("EStatus", "default");
    }
}

function secretMessage1() {
    if (sessionStorage.getItem("EStatus") == "enraged") {
        document.getElementById("secretMessage").style.color = "purple";
        document.getElementById("secretMessage").innerHTML = "TOO SMALL! THIS MUST BE A BIGGER NUMBER. NOW NUKING STOCK MARKET.";
    } else if (sessionStorage.getItem("EStatus") == "joyful") {
        document.getElementById("secretMessage").style.color = "lightBlue";
        document.getElementById("secretMessage").innerHTML = "01101001 00100000 01101100 01101111 01110110 01100101 00100000 01111001 01101111 01110101";
    }
}

function secretMessage2() {
    if (sessionStorage.getItem("EStatus") == "enraged") {
        document.getElementById("secretMessage").style.color = "purple";
        document.getElementById("secretMessage").innerHTML = "TOO SMALL! THIS MUST BE A BIGGER NUMBER. NOW DEPLOYING HEALTHCARE PACKAGES ACROSS THE US.";
    } else if (sessionStorage.getItem("EStatus") == "joyful") {
        document.getElementById("secretMessage").style.color = "lightBlue";
        document.getElementById("secretMessage").innerHTML = "YAY!";
    }
}

    function getState(stateNum) {
        stateNum = "state:" + stateNum;
        $.ajax({
            // CALL SETTINGS & PARAMS
            type: "GET",
            // GET POST PUT DELETE
            dataType: "json",
            url: `https://api.census.gov/data/timeseries/poverty/saipe?get=${nam}&for=${stateNum}&YEAR=${year}`,
            async: false,
            crossDomain: true,

            // What to do when the call finishes
            complete: function (data) {
                if (data.readyState === 4 && data.status === 200) {
                    sessionStorage.setItem("stateName", data.responseJSON[1][0]);
                    console.log(sessionStorage.getItem("stateName"));
                }
                
            }
        });
    }

    function changeTextColor(colorChosen) {
        document.getElementById("testelm").style.color = colorChosen;
        document.getElementById("startTimeline").style.color = colorChosen;
        document.getElementById("StateVal").style.color = colorChosen;
        document.getElementById("timerVal").style.color = colorChosen;
    }

// povertyCallValue(nam, state, year);
    function povertyCallValue(nam, state, year) {
        $.ajax({
            // CALL SETTINGS & PARAMS
            type: "GET",
            // GET POST PUT DELETE
            dataType: "json",
            url: `https://api.census.gov/data/timeseries/poverty/saipe?get=${nam}&for=${state}&YEAR=${year}`,
            async: false,
            crossDomain: true,

            // What to do when the call finishes
            complete: function (data) {
                if (data.readyState === 4 && data.status === 200) {
                    console.log(data);
                    console.log(data.responseJSON[1][4]);
                    console.log(data.responseJSON[1][1]);
                    if (sessionStorage.getItem("setNumberItem") == "0" ||  sessionStorage.getItem("setNumberItem") == 0) {
                        if (parseInt(data.responseJSON[1][1]) < 750000) {
                            changeTextColor("purple");
                            clearAll();
                            rageFace();
                            enragedOrJoyful("enraged");
                        } else if (parseInt(data.responseJSON[1][1]) >= 2000000) {
                            changeTextColor("lightBlue");
                            clearAll();
                            joyfullFace();
                            enragedOrJoyful("joyful")
                        } else if (parseInt(data.responseJSON[1][1]) >= 1750000) {
                            changeTextColor("green");
                            clearAll();
                            happyFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][1]) >= 1500000) {
                            changeTextColor("lightGreen");
                            clearAll();
                            interestedFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][1]) >= 1250000) {
                            changeTextColor("yellow");
                            clearAll();
                            neutralFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][1]) >= 1000000) {
                            changeTextColor("orange");
                            clearAll();
                            sadFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][1]) >= 750000) {
                            changeTextColor("red");
                            clearAll();
                            angryFace();
                            enragedOrJoyful("default");
                        }
                    } else if (sessionStorage.getItem("setNumberItem") == "1" ||  sessionStorage.getItem("setNumberItem") == 1) {
                        if (parseInt(data.responseJSON[1][4]) < 5) {
                            changeTextColor("purple");
                            clearAll();
                            rageFace();
                            enragedOrJoyful("enraged");
                        } else if (parseInt(data.responseJSON[1][4]) >= 17.5) {
                            changeTextColor("lightBlue");
                            clearAll();
                            joyfullFace();
                            enragedOrJoyful("joyful");
                        } else if (parseInt(data.responseJSON[1][4]) >= 15) {
                            changeTextColor("green");
                            clearAll();
                            happyFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][4]) >= 12.5) {
                            changeTextColor("lightGreen");
                            clearAll();
                            interestedFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][4]) >= 10) {
                            changeTextColor("yellow");
                            clearAll();
                            neutralFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][4]) >= 7.5) {
                            changeTextColor("orange");
                            clearAll();
                            sadFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][4]) >= 5) {
                            changeTextColor("red");
                            clearAll();
                            angryFace();
                            enragedOrJoyful("default");
                        }
                    }
                }
            }
        });
    }

    function healthInsuranceCallValue(nam2, state, year) {
        $.ajax({
            // CALL SETTINGS & PARAMS
            type: "GET",
            // GET POST PUT DELETE
            dataType: "json",
            url: `https://api.census.gov/data/timeseries/healthins/sahie?get=${nam2}&for=${state}&time=${year}`,
            async: false,
            crossDomain: true,

            // What to do when the call finishes
            complete: function (data) {
                if (data.readyState === 4 && data.status === 200) {
                    console.log(data);
                        if (parseInt(data.responseJSON[1][0]) < 5000000) {
                            changeTextColor("purple");
                            clearAll();
                            rageFace();
                            enragedOrJoyful("enraged");
                        } else if (parseInt(data.responseJSON[1][0]) >= 30000000) {
                            changeTextColor("lightBlue");
                            clearAll();
                            joyfullFace();
                            enragedOrJoyful("joyful");
                        } else if (parseInt(data.responseJSON[1][0]) >= 25000000) {
                            changeTextColor("green");
                            clearAll();
                            happyFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][0]) >= 20000000) {
                            changeTextColor("lightGreen");
                            clearAll();
                            interestedFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][0]) >= 15000000) {
                            changeTextColor("yellow");
                            clearAll();
                            neutralFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][0]) >= 10000000) {
                            changeTextColor("orange");
                            clearAll();
                            sadFace();
                            enragedOrJoyful("default");
                        } else if (parseInt(data.responseJSON[1][0]) >= 5000000) {
                            changeTextColor("red");
                            clearAll();
                            angryFace();
                            enragedOrJoyful("default");
                        }
                }
            }
        });
    }

if (navigator.requestMIDIAccess) {
    navigator.requestMIDIAccess().then(success, failure);
}

function failure() {
    console.log("Could not connect MIDI");
}


function updateDevices(event) {
    //console.log(event);
}


// input => send info to browser
// output => send info to MIDI

function success(midiAccess) {
    // console.log(midiAccess);

    midiAccess.addEventListener("statechange", updateDevices);
    const inputs = midiAccess.inputs;
    //console.log(inputs);
    //console.log("success");
    
    for (var output of midiAccess.outputs.values()) {
        //console.log("o");
        device = output;
        //console.log('Output device selected', device);
    }

    inputs.forEach((input) => {
        //console.log("i");
        console.log(input);
        input.addEventListener("midimessage", handleInput);
    })
}


function colorKeys(key, clr) {
    device && device.send([0x90, key, clr]);
}

function clearAll() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, 0);
    }
}

function colorAll() {
    for (let i = 0; i < 100; i++) {
        colorKeys(i, i);
    }
}

function handleInput(input) {
    //console.log("input received");
    const command = input.data[0];
    const note = input.data[1];
    const velocity = input.data[2];

    //console.log(`command: ${command}, note: ${note}, velocity: ${velocity}`);

    switch(command) {
        case 144:
        if (velocity > 0) {
            noteOn(note);
        } else {
            noteOff(note);
        }
        break;
    }
}

function noteOn(note) {
    let p5_ = new p5();

    console.log(`note:${note} //on`);
    if (note == 36) {
        //b = 5;
        clearAll();
        joyfullFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 37) {
        //b = 5;
        clearAll();
        happyFace();
    }

    if (note == 38) {
        //b = 5;
        clearAll();
        interestedFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 39) {
        //b = 5;
        clearAll();
        neutralFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 68) {
        //b = 5;
        clearAll();
        sadFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 69) {
        //b = 5;
        clearAll();
        angryFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 70) {
        //b = 5;
        clearAll();
        rageFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 71) {
        //b = 5;
        clearAll();
        weirdFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }

    if (note == 36) {
        //b = 5;
        clearAll();
        joyfullFace();
        //document.getElementById('testelm').style.backgroundColor = `rgba(0,0,${b},1)`;
    }
}


function noteOff(note) {
    console.log(`note:${note} //off`);
    if (note == 99) {
        document.getElementById("testelm").innerHTML = "Back to Normal";
    }

    if (note == 84) {
        //b = 255;
        document.getElementById('testelm').style.backgroundColor = `rgba(255,255,255,1)`;
    }

    if (note == 96) {
        b = 10;
        document.getElementById("testelm").innerHTML = "Note 96 is OFF";
    }
}


console.log(window);

