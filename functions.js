

    function joyfullFace() {
        color = 77;
    
        device && device.send([0x90, 56, color]);
        device && device.send([0x90, 58, color]);
        device && device.send([0x90, 61, color]);
        
        device && device.send([0x90, 94, color]);
        device && device.send([0x90, 91, color]);
        device && device.send([0x90, 89, color]);
        
        device && device.send([0x90, 48, color]);
        device && device.send([0x90, 49, color]);
        device && device.send([0x90, 50, color]);
        device && device.send([0x90, 51, color]);
        device && device.send([0x90, 80, color]);
        device && device.send([0x90, 81, color]);
        device && device.send([0x90, 82, color]);
        device && device.send([0x90, 83, color]);
        device && device.send([0x90, 78, color]);
        device && device.send([0x90, 73, color]);
        device && device.send([0x90, 72, color]);
        device && device.send([0x90, 43, color]);
        device && device.send([0x90, 42, color]);
        device && device.send([0x90, 45, color]);
    }
    
    function happyFace() {
        color = 122;
    
        device && device.send([0x90, 57, color]);
        device && device.send([0x90, 58, color]);
        device && device.send([0x90, 61, color]);
        device && device.send([0x90, 62, color]);
    
        device && device.send([0x90, 94, color]);
        device && device.send([0x90, 93, color]);
        device && device.send([0x90, 89, color]);
        device && device.send([0x90, 90, color]);
    
        device && device.send([0x90, 49, color]);
        device && device.send([0x90, 46, color]);
        device && device.send([0x90, 43, color]);
        device && device.send([0x90, 72, color]);
        device && device.send([0x90, 77, color]);
        device && device.send([0x90, 82, color]);
    }
    
    function sadFace() {
        color = 9;
    
        device && device.send([0x90, 57, color]);
        device && device.send([0x90, 58, color]);
        device && device.send([0x90, 61, color]);
        device && device.send([0x90, 62, color]);
    
        device && device.send([0x90, 94, color]);
        device && device.send([0x90, 93, color]);
        device && device.send([0x90, 89, color]);
        device && device.send([0x90, 90, color]);
    
        device && device.send([0x90, 41, color]);
        device && device.send([0x90, 46, color]);
        device && device.send([0x90, 51, color]);
        device && device.send([0x90, 80, color]);
        device && device.send([0x90, 77, color]);
        device && device.send([0x90, 74, color]);
    }
    
    function angryFace() {
        device && device.send([0x90, 57, 5]);
        device && device.send([0x90, 58, 5]);
        device && device.send([0x90, 61, 5]);
        
        device && device.send([0x90, 94, 5]);
        device && device.send([0x90, 89, 5]);
        device && device.send([0x90, 90, 5]);
    
        device && device.send([0x90, 41, 5]);
        device && device.send([0x90, 46, 5]);
        device && device.send([0x90, 51, 5]);
        device && device.send([0x90, 80, 5]);
        device && device.send([0x90, 77, 5]);
        device && device.send([0x90, 74, 5]);
    }
    
    function neutralFace() {
        color = 13;
    
        device && device.send([0x90, 57, color]);
        device && device.send([0x90, 58, color]);
        device && device.send([0x90, 61, color]);
        device && device.send([0x90, 62, color]);
    
        device && device.send([0x90, 94, color]);
        device && device.send([0x90, 93, color]);
        device && device.send([0x90, 89, color]);
        device && device.send([0x90, 90, color]);
    
        device && device.send([0x90, 45, color]);
        device && device.send([0x90, 46, color]);
        device && device.send([0x90, 47, color]);
        device && device.send([0x90, 76, color]);
        device && device.send([0x90, 77, color]);
        device && device.send([0x90, 78, color]);
    }
    
    // Not used
    function weirdFace() {
        device && device.send([0x90, 57, 52]);
        device && device.send([0x90, 58, 52]);
        device && device.send([0x90, 61, 52]);
        device && device.send([0x90, 62, 52]);
    
        device && device.send([0x90, 94, 52]);
        device && device.send([0x90, 93, 52]);
        device && device.send([0x90, 89, 52]);
        device && device.send([0x90, 90, 52]);
    
        device && device.send([0x90, 41, 52]);
        device && device.send([0x90, 42, 52]);
        device && device.send([0x90, 47, 52]);
        device && device.send([0x90, 76, 52]);
        device && device.send([0x90, 81, 52]);
        device && device.send([0x90, 82, 52]);
    }
    
    function interestedFace() {
        device && device.send([0x90, 57, 73]);
        device && device.send([0x90, 58, 73]);
        device && device.send([0x90, 61, 73]);
        device && device.send([0x90, 62, 73]);
    
        device && device.send([0x90, 94, 73]);
        device && device.send([0x90, 93, 73]);
        device && device.send([0x90, 89, 73]);
        device && device.send([0x90, 90, 73]);
    
        device && device.send([0x90, 49, 73]);
        device && device.send([0x90, 50, 73]);
        device && device.send([0x90, 46, 73]);
        device && device.send([0x90, 42, 73]);
        device && device.send([0x90, 41, 73]);
        device && device.send([0x90, 47, 73]);
        device && device.send([0x90, 76, 73]);
        device && device.send([0x90, 77, 73]);
        device && device.send([0x90, 81, 73]);
        device && device.send([0x90, 82, 73]);
        device && device.send([0x90, 73, 73]);
        device && device.send([0x90, 74, 73]);
    }
    
    function rageFace() {
        device && device.send([0x90, 64, 81]);
        device && device.send([0x90, 58, 81]);
        device && device.send([0x90, 61, 81]);
        
        device && device.send([0x90, 94, 81]);
        device && device.send([0x90, 89, 81]);
        device && device.send([0x90, 99, 81]);
    
        device && device.send([0x90, 41, 81]);
        device && device.send([0x90, 46, 81]);
        device && device.send([0x90, 51, 81]);
        device && device.send([0x90, 80, 81]);
        device && device.send([0x90, 77, 81]);
        device && device.send([0x90, 74, 81]);
        device && device.send([0x90, 71, 81]);
        device && device.send([0x90, 36, 81]);
        device && device.send([0x90, 37, 81]);
        device && device.send([0x90, 38, 81]);
        device && device.send([0x90, 39, 81]);
        device && device.send([0x90, 68, 81]);
        device && device.send([0x90, 69, 81]);
        device && device.send([0x90, 70, 81]);
    }
