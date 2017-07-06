import mongoose, { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import { dbUri } from '../config';

const connection = mongoose.createConnection(dbUri);

autoIncrement.initialize(connection);

const linkSchema = new Schema({
  url: String,
  description: String,
  code: String,
  linkId: Number,
  clicks: Number
});

linkSchema.plugin(autoIncrement.plugin, {
  model: 'Link',
  field: 'linkId',
  startAt: 10000,
  incrementBy: 1
})

linkSchema.pre('save', function (next) {
  const link = this;
  link.code = link.linkId.toString(36);
  next();
})

export default mongoose.model('Link', linkSchema);
