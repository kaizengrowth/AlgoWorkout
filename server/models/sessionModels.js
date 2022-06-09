import { Schema as _Schema, model } from 'mongoose';
const Schema = _Schema;

// schema for 'algo'
const sessionSchema = new Schema({
    startTime: {type: Date, default: Date.now},
    endTime: {type: Date, default: Date.now},
    questionID: number,
    userID: number
});

const sessionModel = model('sessions', sessionSchema );

export default sessionModel;

/*
* Date/Time start
* Date/Time end
* QuestionID
* UserID (stored for redundancy?) */