const schema = mongoose.Schema({
    guildID: String,
    userID: String,


    money: { type: Number, default: 0 },
    bank: { type: Number, default: 0 },
    marry: { type: String, default: "none" },
    warn: { type: Number, default: 0 },
    time: { type: Number, default: 0 },
    timely: { type: Number, default: 0 }
});
module.exports = mongoose.model("User", schema)
