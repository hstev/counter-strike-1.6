export const optionsCfg = {
    multiplayer: {
        playerName: 'SK|SpawN',
        sprayPaint: {
            images: ['lambda', '8ball1', 'alien_hd', 'andre', /* ... */],
            selected: 'lambda',
            color: [
                { id: '#FF0000', name: 'Red', selected: false },
                { id: '#00FF00', name: 'Green', selected: true },
                { id: '#0000FF', name: 'Blue', selected: false },,
                { id: '#FFFF00', name: 'Yellow', selected: false },
                { id: '#FF00FF', name: 'Magenta', selected: false },
                { id: '#00FFFF', name: 'Cyan', selected: false },
            ]
        },
        crossHairAppearance: {
            size: [
                { id: -1, name: 'Auto-size', selected: true },
                { id: 0, name: 'Small', selected: false },
                { id: 1, name: 'Medium', selected: false },
                { id: 2, name: 'Large', selected: false },
            ],
            color: [
                { id: '#FF0000', name: 'Red', selected: false },
                { id: '#00FF00', name: 'Green', selected: true },
                { id: '#0000FF', name: 'Blue', selected: false },,
                { id: '#FFFF00', name: 'Yellow', selected: false },
                { id: '#FF00FF', name: 'Magenta', selected: false },
                { id: '#00FFFF', name: 'Cyan', selected: false },
            ],
        },
        advanced: {
            timeBody: 600.000000,
            timeStickers: 300.000000,
            // 
        }
    },
    audio: {
        soundEffects: 50,
        mp3Volume: 50,
        soundQuality: [
            { id: 0, name: 'Low', selected: false },
            { id: 1, name: 'High', selected: true },
        ],
    },
    video: {
        render: [
            { id: 0, name: 'Software', selected: false },
            { id: 1, name: 'OpenGL', selected: true },
        ],
        resolution: [
            { id: 0, name: '640x480', selected: false },
            { id: 1, name: '800x600', selected: true },
            { id: 2, name: '1024x768', selected: false },
            { id: 3, name: '1280x720', selected: false },
        ],
        display: [
            { id: 0, name: 'Normal', selected: false },
            { id: 1, name: 'Widescreen', selected: true },
        ],
        windowMode: false,
        allowWidescreenField: true,
        waitForVerticalSync: false,
        enableTextureFiltering: true,
        useShaders: true,
        brightness: 50,
        gamma: 50,
    },
    aim: {
        invertMouse: false,
        mouseFilter: false,
        autoAim: true,
        rawMouseInput: false,
        lowerInputLatency: false,
        aimSensitivity: {
            min: 0.20,
            max: 20.00,
            value: 3.0,
        },
    },
    keyboard: {
        commands: {
            movement: [
                { name: 'Forward', key_btn: 'Up', alternate: 'W'},
                { name: 'Backward', key_btn: 'Down', alternate: 'S'},
                { name: 'Left', key_btn: 'Left', alternate: 'A'},
                { name: 'Right', key_btn: 'Right', alternate: 'D'},
                { name: 'Jump', key_btn: 'Space', alternate: 'Mouse1'},
                { name: 'Duck', key_btn: 'Ctrl', alternate: 'C'},
                { name: 'Fire', key_btn: 'Mouse1', alternate: 'Left Mouse Button'},
                { name: 'Reload', key_btn: 'R', alternate: 'F'},
            ]
            // ...
        }
    },
    voice: {
        enableVoiceInThisGame: true,
        boostMicrophoneGain: true,
        voiceTransmitVolume: 100,
        voiceReceiveVolume: 70,
    },
    content: {
        lock: false,
        download: false,
    }
}