import mongoose, { Schema } from 'mongoose';
import autoIncrement from 'mongoose-auto-increment';
import btoa from 'btoa';
import { dbUri } from '../config';

const connection = mongoose.createConnection(dbUri);

autoIncrement.initialize(connection);

const linkSchema = new Schema({
  url: String,
  description: String,
  code: String,
  linkId: Number
})

linkSchema.plugin(autoIncrement.plugin, {
  model: 'Link',
  field: 'linkId',
  startAt: 10000,
  incrementBy: 1
})

linkSchema.pre('save', function (next) {
  const link = this;

  // convert to base 64
  function toRadix(N,radix) {
    var HexN="", Q=Math.floor(Math.abs(N)), R;
    while (true) {
      R=Q%radix;
      HexN = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(R)
      + HexN;
      Q=(Q-R)/radix;
      if (Q==0) break;
    }
    return ((N<0) ? "-"+HexN : HexN);
  }

  link.code = toRadix(link.linkId, 36);
  next();
})

export default mongoose.model('Link', linkSchema);
