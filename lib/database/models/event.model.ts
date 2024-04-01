import { Schema, model, models } from "mongoose";

const EventSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String},
  location: {type: String},
  imageUrl: {type: String, required: true},
  createdAt: {type: Date, default: Date.now},
  startDateTime: {type: Date, default: Date.now},
  endDateTime: {type: Date, default: Date.now},
  price: {type: String},
  isFree: {type: Boolean, default: false},
  url: {type: String},
  category: {type: Schema.Types.ObjectId, ref: 'Category'},
  organizer: {type: Schema.Types.ObjectId, ref: 'User'},
  
})

const Event = models.Event || model('Event', EventSchema);

export default Event;