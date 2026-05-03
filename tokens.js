// status can be "online", "idle", "dnd", or "invisible" or "offline"
export default [
    {
        channelId: "1498801242011472025",
        serverId: "1498801240988057724",
        token: process.env.token1,
        selfDeaf: false,
        autoReconnect: {
            enabled: true,
            delay: 5, // ثواني
            maxRetries: 5,
        },
        presence: {
            status: "idle",
        },
        selfMute: true,
    },
];
